(ns calculon.svalue
  (:require [chimera.seq :refer [in? transpose update-values]]
            [calculon.math :refer [median sum]]))

(def na-string "n/a")
(def proportion-unique 0.5)

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
