(ns calculon.math)

;;; Math helpers, all pure

(defn sum
  [l]
  (reduce + 0 l))

;; Memoizable

(defn- median* [ns]
  (let [ns (sort ns)
        cnt (count ns)
        mid (bit-shift-right cnt 1)]
    (if (odd? cnt)
      (nth ns mid)
      (/ (+ (nth ns mid) (nth ns (dec mid))) 2))))

(def median (memoize median*))

(defn- mean*
  [l]
  (/ (sum l) (count l)))

(def mean (memoize mean*))

(defn- variance*
  [l]
  (let [mv (mean l)]
    (/ (sum (map #(Math/pow (- % mv) 2) l)) (count l))))

(def variance (memoize variance*))

(defn- std* [l] (-> l variance Math/sqrt))

(def std (memoize std*))

(defn- linspace*
  "Generates n evenly-spaced points, with distance (x2-x1)/(n-1) between
   points."
  [x1 x2 n]
  (let [spacing (/ (- x2 x1) (dec n))]
    (range x1 (+ x1 (* spacing n)) spacing)))

(def linspace (memoize linspace*))
