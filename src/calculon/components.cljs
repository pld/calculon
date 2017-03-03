(ns calculon.components
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [sablono.core :refer [html]]
            [cljs.core.async :refer [<!]]
            [cljs-http.client :as http]
            [milia.api.dataset :as dataset]
            [milia.utils.remote :as remote]
            [goog.string :as gstring]
            [goog.string.format]
            [calculon.math :refer [linspace std]]
            [calculon.svalue :refer [run-algorithm]]))

(swap! remote/hosts assoc :data "api.ona.io")

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
