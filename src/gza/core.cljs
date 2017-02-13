(ns gza.core
  (:require [gza.components :refer [capture-typing]]))

(defonce app-state (atom {}))

(defn render! []
  (.render js/ReactDOM
           (capture-typing app-state)
           (.getElementById js/document "app")))

(add-watch app-state :on-change (fn [_ _ _ _] (render!)))

(render!)
