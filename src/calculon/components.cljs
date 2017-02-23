(ns calculon.components
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [sablono.core :refer [html]]
            [chimera.seq :refer [in? transpose update-values]]
            [cljs.core.async :refer [<!]]
            [cljs-http.client :as http]
            [milia.api.dataset :as dataset]
            [milia.utils.remote :as remote]
            [goog.string :as gstring]
            [goog.string.format]))

(swap! remote/hosts assoc :data "api.ona.io")

(def na-string "n/a")
(def proportion-unique 0.5)

;;; Math helpers, all pure and memoizable

(defn sum
  [l]
  (reduce + 0 l))

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
  (/ (sum l) (count l)))

(def mean (memoize mean*))

(defn variance*
  [l]
  (let [mv (mean l)]
    (/ (sum (map #(Math/pow (- % mv) 2) l)) (count l))))

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
   `freqs` a map of frequencies
   `val` the number the counts should add up to"
  [freqs & {:keys [val] :or {val 1}}]
  (let [n (sum (vals freqs))]
    (update-values freqs #(->> n (/ %) (* val)))))

(defn- normalize
  "Divides everything in `m` by the median of the values. If the median is less
   than 1 / the number of entries, it divides everything by the number of
   entries."
  [m]
  (let [n (count m)
        divisor (max (-> m vals median) (/ 1 n))]
    (update-values m #(/ % divisor))))

(defn- compute-outlier-scores
  [agg->freqs]
  {:pre [(> (-> agg->freqs keys count) 1)]}
  (let [range (-> agg->freqs vals first keys)
        normalized-freqs (reduce-kv #(cond-> %1
                                       (not (zero? (sum (vals %3))))
                                       (assoc
                                        %2
                                        (normalize-counts %3)))
                                    {}
                                    agg->freqs)
        medians (reduce (fn [m r]
                          (assoc m
                                 r
                                 (median
                                  (map #(get % r)
                                       (vals normalized-freqs)))))
                        {}
                        range)
        outlier-values (reduce
                        (fn [m agg]
                          (assoc m
                                 agg
                                 (if-let [freqs (get normalized-freqs agg)]
                                   (reduce #(+ %1
                                               (Math/abs
                                                (- (get freqs %2)
                                                   (get medians %2))))
                                           0
                                           range)
                                   0)))
                        {}
                        (keys agg->freqs))]
    (normalize outlier-values)))

(defn- json-list->col-vectors
  [json-list & [ignored-values]]
  (let [col-names (->> json-list (map keys) flatten distinct)]
    (reduce
     (fn [m k] (assoc m
                      k
                      (->> json-list
                           (map #(get % k))
                           flatten
                           (remove #(or (in? ignored-values %)
                                        (map? %)
                                        (vector? %))))))
     {}
     col-names)))

(defn run-algorithm
  "Run the S-Value algorithm.
   `data` list of hash-maps with the same keys, each is a row
   `aggregation-col` key in the maps to aggregate using
   `categorical-cols` list of keys in maps to ran algorithm against"
  [data aggregation-col & {:keys [categorical-cols null-responses]
                           :or {null-responses [na-string nil]}}]
  (let [cols->data (json-list->col-vectors data null-responses)
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
          [col-values (distinct (get cols->data col))
           ;; create mapping
           ;; agg unit ->  all column values -> frequencies
           agg->freqs (reduce
                       (fn [m agg-unit]
                         (assoc m
                                agg-unit
                                (let [freqs (-> agg-units->col->freqs
                                                (get agg-unit)
                                                (get col))]
                                  (reduce
                                   #(assoc %1
                                           %2
                                           (get freqs %2 0))
                                   {}
                                   col-values))))
                       {}
                       agg-units)]]
      [col (compute-outlier-scores agg->freqs)])))

(defn compute-averages
  [cols->scores]
  (->> cols->scores
       vals
       (map #(into (sorted-map) %))
       (map vals)
       transpose
       (map mean)))

;;; Retrieving data

(def default-json-url "https://data.cityofnewyork.us/resource/w7a6-9xrz.json")

(defn get-datasets
  [state]
  (go
    (binding [remote/*credentials* (select-keys @state [:username :password])]
      (let [{:keys [body status]} (<! (dataset/all (:username @state)))]
        (when (= 200 status)
          (swap! state assoc :datasets body))))))

(defn get-data
  [state]
  (swap! state dissoc :data :aggregation-col)
  (go
    (binding [remote/*credentials* (select-keys @state [:username :password])]
      (let [{:keys [body status]} (<! (dataset/data (:dataset-id @state)
                                                    :query-params
                                                    {:limit 1000}))]
        (when (= 200 status)
          (swap! state assoc :data body))))))

(defn get-json-url
  [state]
  (go
    (let [{:keys [body status]} (<! (http/get (:json-url @state)
                                              {:with-credentials? false}))]
      (when (= 200 status)
        (swap! state assoc :data body)))))
;;; UI

(def aggregation-col-id "aggregation-col")
(def dataset-id-enter "dataset-id-enter")
(def dataset-id-select "dataset-id-select")

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

(defn- full-name
  [x]
  (cond-> x keyword? (-> str (subs 1))))

(defn get-selected-value
  [id]
  (let [el (.getElementById js/document id)]
    (.-value (aget (.-options el)
                   (.-selectedIndex el)))))

(defn- get-aggregation-col
  []
  (keyword (get-selected-value aggregation-col-id)))

(defn- get-dataset-id
  []
  (if-let [id (.-value (.getElementById js/document dataset-id-enter))]
    id
    (get-selected-value dataset-id-select)))

(defn data-loader
  [state]
  (html [:div
         (let [{:keys [aggregation-col data datasets]} @state]
           [[:h3
             "Calculate the s-Values for a dataset grouped by a chosen column"]
            [:p
             [:span.highlight
              "By JSON URL:"
              [:input#url
               {:onBlur #(swap! state assoc :json-url (.. % -target -value))
                :size 60
                :value default-json-url}]
              [:input {:type "submit"
                       :onClick #(get-json-url state)
                       :value "Load"}]]
             [:span.disjunction-spacer "or"]
             [:span.highlight
              "Ona: username"
              [:input#username
               {:onBlur #(swap! state assoc :username (.. % -target -value))}]
              "password"
              [:input#password
               {:onBlur #(swap! state assoc :password (.. % -target -value))
                :type "password"}]
              [:input {:type "submit"
                       :onClick #(get-datasets state)
                       :value "Load"}]]]
            (when datasets
              [:p
               [:select {:id dataset-id-select
                         :key "dataset-id-select"}
                (for [{:keys [formid title]} (sort-by :title datasets)]
                  [:option {:key formid
                            :value formid}
                   title])]
               " or dataset ID "
               [:input {:key "dataset-id-enter"
                        :id dataset-id-enter
                        :value 137955
                        :type "number"}]
               " only considers 1000 rows "
               [:input {:key "dataset-id-submit"
                        :type "submit"
                        :onClick #(do
                                    (swap! state
                                           assoc
                                           :dataset-id
                                           (get-dataset-id))
                                    (get-data state))
                        :value "Load"}]])
            (if (and data (-> data count zero? not))
              (let [columns (->> data
                                 (map keys)
                                 flatten
                                 distinct
                                 (map full-name)
                                 sort)]
                [[:p.grouping {:key "aggregation-column"}
                  [:span.highlight
                   "Grouping column: "
                   [:select {:id aggregation-col-id
                             :key "agg-col-select"}
                    (for [col columns]
                      [:option {:key col
                                :value col}
                       col])]
                   [:input {:key "agg-col-submit"
                            :type "submit"
                            :onClick #(swap! state
                                             assoc
                                             :aggregation-col
                                             (get-aggregation-col))
                            :value "Compute s-Values"}]]]
                 (when aggregation-col
                   (let [cols->scores (run-algorithm data
                                                     aggregation-col)
                         enumerators (-> cols->scores first last keys sort)
                         averages (compute-averages cols->scores)]
                     [[:div [:p
                             (count cols->scores)
                             " categorical of "
                             (count columns)
                             " total columns included below."]]
                      [:table {:key "table"}
                       [:thead {:key "head"}
                        [:tr.highlight
                         [:th.column-names "Interviewer"]
                         (for [header enumerators]
                           [:th {:key header} header])]]
                       [:tbody {:key "body"}
                        [:tr
                         [:td.column-names "Average"]
                         (for [average averages]
                           [:td {:key average
                                 :style {"background-color"
                                         (get-class average averages)}}
                            (gstring/format "%.1f" average)])]
                        [:tr.highlight
                         [:th.column-names "Form"]
                         (for [header enumerators]
                           [:td {:key header}])]
                        (for [[col scores] cols->scores]
                          [:tr {:key (full-name col)}
                           [:td.column-names (full-name col)]
                           (for [enumerator enumerators
                                 :let [score (get scores enumerator)
                                       score-class (get-class score
                                                              (vals scores))]]
                             [:td {:key (str enumerator score)
                                   :style {"background-color" score-class}}
                              (if (< score 1)
                                "-"
                                (gstring/format "%.1f" score))])])]]]))])
              "No data")])]))
