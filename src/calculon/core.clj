(ns calculon.core
  (:require [compojure.core :refer [defroutes GET]]
            [ring.adapter.jetty :as ring]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [calculon.controllers.calculator :as calculator]
            [calculon.views.layout :as layout]
            [calculon.models.migration :as schema])
  (:gen-class))

(defroutes routes
  calculator/routes
  (route/resources "/")
  (route/not-found (layout/four-oh-four)))

(def application (handler/site routes))

(defn start [port]
  (ring/run-jetty application {:port port
                               :join? false}))

(defn -main []
  (schema/migrate)
  (let [port (Integer. (or (System/getenv "PORT") "8080"))]
    (start port)))
