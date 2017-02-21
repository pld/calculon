(ns calculon.core
  (:require [calculon.components :refer [data-loader]]))

(defonce app-state (atom {}))

(defn render! []
  (.render js/ReactDOM
           (data-loader app-state)
           (.getElementById js/document "app")))

(add-watch app-state :on-change (fn [_ _ _ _] (render!)))

(render!)
