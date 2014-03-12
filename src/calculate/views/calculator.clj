(ns calculate.views.calculator
  (:require [calculate.views.layout :as layout]
            [hiccup.core :refer [h]]
            [hiccup.form :as form]))

(defn calculate-form []
  [:div {:id "calculate-form" :class "sixteen columns alpha omega"}
   (form/form-to [:post "/"]
                 (form/label "dataset" "Paste yer JSON")
                 (form/text-area "dataset")
                 (form/submit-button "CALCULATE!"))])

(defn display-datasets [datasets]
  [:div {:class "datasets sixteen columns alpha omega"}
   (map
    (fn [dataset] [:h2 {:class "dataset"} (h (:body dataset))])
    datasets)])

(defn index [datasets]
  (layout/common "CALCULATOR"
                 (calculate-form)
                 [:div {:class "clear"}]
                 (display-datasets datasets)))
