(ns gza.components
  (:import [java.lang.Math])
  (:require [sablono.core :refer [html]]
            [chimera.seq :refer [in? transpose update-values]]
            [gza.data :refer [data]]
            [milia.api.dataset :as dataset]
            [milia.utils.remote :as remote]
            [goog.string :as gstring]
            [goog.string.format]))

(swap! remote/hosts assoc :data "api.ona.io")

(def proportion-unique 0.5)

;;; Math helpers, all pure and memoizable

(defn median* [ns]
  (let [ns (sort ns)
        cnt (count ns)
        mid (bit-shift-right cnt 1)]
    (if (odd? cnt)
      (nth ns mid)
      (/ (+ (nth ns mid) (nth ns (dec mid))) 2))))

(def median (memoize median*))

(defn mean*
  [l]
  (/ (reduce + l) (count l)))

(def mean (memoize mean*))

(defn variance*
  [l]
  (let [mv (mean l)]
    (/ (reduce + (map #(Math/pow (- % mv) 2) l)) (count l))))

(def variance (memoize variance*))

(defn std* [l] (-> l variance Math/sqrt))

(def std (memoize std*))

(defn linspace*
  "Generates n evenly-spaced points, with distance (x2-x1)/(n-1) between
   points."
  [x1 x2 n]
  (let [spacing (/ (- x2 x1) (dec n))]
    (range x1 (+ x1 (* spacing n)) spacing)))

(def linspace (memoize linspace*))

;;;

(defn- category-like?
  "Return true if v looks like a category. We expect v is a category if the
   proportion of distinct values is less than the constant proportion-unique,
   where we ignore blanks or values that we think represent n/a strings."
  [v]
  (let [denom (count v)]
    (and (-> denom zero? not)
         (< (/ (count (distinct v)) denom) proportion-unique))))

(defn- get-categorical-cols
  [cols->data]
  (reduce-kv #(if (category-like? %3) (conj %1 %2) %1)
             []
             cols->data))

(defn- normalize-counts
  "Returns a normalized frequency count. If all frequencies are 0 returns {}.
   `frequencies` a map of frequencies
   `val` the number the counts should add up to"
  [frequencies & {:keys [val] :or {val 1}}]
  (let [n (reduce + 0 (vals frequencies))]
    (if (= n 0)
      {}
      (reduce-kv #(assoc %1 %2 (->> n (/ %3) (* val)))
                 {}
                 frequencies))))

(defn- normalize
  "Divides everything in `m` by the median of the values. If the median is less
   than 1 / the number of entries, it divides everything by the number of
   entries."
  [m]
  (let [n (count m)
        divisor (as-> (-> m vals median) d
                  (if (< d (/ 1 n)) n d))]
    (reduce-kv #(assoc %1 %2 (/ %3 divisor)) {} m)))

(defn- compute-outlier-scores
  [agg->frequencies]
  {:pre [(> (-> agg->frequencies keys count) 1)]}
  (let [range (-> agg->frequencies vals first keys)
        normalized-frequencies (reduce-kv #(assoc %1
                                                  %2
                                                  (normalize-counts %3))
                                          {}
                                          agg->frequencies)
        medians (reduce (fn [m r]
                          (assoc m
                                 r
                                 (median
                                  (map #(get % r)
                                       (vals normalized-frequencies)))))
                        {}
                        range)
        outlier-values (reduce
                        (fn [m agg]
                          (assoc m
                                 agg
                                 (reduce #(+ %1
                                             (Math/abs
                                              (- (-> normalized-frequencies
                                                     (get agg)
                                                     (get %2))
                                                 (get medians %2))))
                                         0
                                         range)))
                            {}
                            (keys agg->frequencies))]
    (normalize outlier-values)))

(defn- json-list->col-vectors
  [json-list & [ignored-values]]
  (let [col-names (->> json-list (map keys) flatten distinct)]
    (reduce
     (fn [m k] (assoc m
                      k
                      (->> json-list
                           (map #(get % k))
                           (remove #(in? ignored-values %)))))
     {}
     col-names)))

(defn run-algorithm
  "Run the S-Value algorithm.
   `data` list of hash-maps with the same keys, each is a row
   `aggregation-col` key in the maps to aggregate using
   `categorical-cols` list of keys in maps to ran algorithm against"
  [data aggregation-col & {:keys [categorical-cols null-responses]
                           :or {null-responses ["n/a" "" [] nil [nil nil]]}}]
  (let [cols->data (json-list->col-vectors data null-responses)
        col-names (keys cols->data)
        categorical-cols (remove #(in? [aggregation-col] %)
                                 (or categorical-cols
                                     (get-categorical-cols cols->data)))
        agg-units (distinct (get cols->data aggregation-col))
        agg-units->col->freqs (update-values
                               (group-by #(get % aggregation-col) data)
                               #(update-values (json-list->col-vectors %)
                                               frequencies))]
    (for [col categorical-cols
          :let
          ;; all column values
          [column-values (get cols->data col)
           ;; create mapping
           ;; agg unit ->  all column values -> frequencies
           agg->frequencies
           (reduce
            (fn [m agg-unit]
              (assoc m
                     agg-unit
                     (reduce
                      #(assoc %1
                              %2
                              (-> agg-units->col->freqs
                                  (get agg-unit)
                                  (get col)
                                  (get %2 0)))
                      {}
                      column-values)))
            {}
            agg-units)]]
      [col (compute-outlier-scores agg->frequencies)])))

(defn compute-averages
  [cols->scores]
  (->> cols->scores
       vals
       (map #(into (sorted-map) %))
       (map vals)
       transpose
       (map mean)))

;;; Retrieving data

(defn get-data
  [username password]
  (binding [remote/*credentials*
            {:username username
             :password password}]
    (dataset/data 137955
                  :query-params {:limit 100})))

;;; UI

(defn- get-class
  [score scores]
  (let [div (/ (- score (mean scores)) (std scores))]
    ({0 "rgb(255, 229, 229)"
      1 "rgb(255, 184, 184)"
      2 "rgb(255, 138, 138)"
      3 "rgb(255, 92, 92)"
      4 "rgb(255, 0, 0)"}
     (apply max
               (map-indexed #(if (> div %2) %1 0) (linspace 0 2 5))))))


(defn capture-typing
  [state]
  (html [:div
         [:h1 "Build s-Values"]
         [:div
          "username"
          [:input#username
           {:onBlur #(swap! state assoc :username (.. % -target -value))}]
          "password"
          [:input#password
           {:onBlur #(swap! state assoc :password (.. % -target -value))
            :type "password"}]
          [:a {:href "#"
               :onClick #(get-data (:username @state)
                                   (:password @state))}
                "Capture"]]
         [:table
          (let [cols->scores (run-algorithm data
                                            "section_a/a1_enumerator_code")
                enumerators (-> cols->scores first last keys sort)
                averages (compute-averages cols->scores)]
            [[:thead {:key "head"}
              [:tr.highlight
               [:th.column-names "Interviewer"]
               (for [header enumerators]
                 [:th {:key header} header])]]
             [:tbody {:key "body"}
              [:tr
               [:td.column-names "Average"]
               (for [average averages]
                 [:td {:key average
                       :style {"background-color" (get-class average
                                                             averages)}}
                  (gstring/format "%.1f" average)])]
              [:tr.highlight
               [:th.column-names "Form"]
               (for [header enumerators]
                 [:td {:key header}])]
              (for [[col scores] cols->scores]
                [:tr {:key col}
                 [:td.column-names col]
                 (for [enumerator enumerators
                       :let [score (get scores enumerator)
                             score-class (get-class score (vals scores))]]
                   [:td {:key (str enumerator score)
                         :style {"background-color" score-class}}
                    (if (< score 1)
                      "-"
                      (gstring/format "%.1f" score))])])]])]]))
