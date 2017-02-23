(ns calculon.core
  (:require [calculon.components :as components]))

(defonce app-state (atom {:json-url components/default-json-url}))

(defn render! []
  (.render js/ReactDOM
           (components/data-loader app-state)
           (.getElementById js/document "app")))

(add-watch app-state :on-change (fn [_ _ _ _] (render!)))

(render!)
