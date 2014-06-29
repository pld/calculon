(ns calculon.core-test
  (:use midje.sweet
        calculon.core)
  (:require [ring.adapter.jetty :as ring]))

(fact "start runs the app"
      (start :port) => :res
      (provided
       (ring/run-jetty app {:port :port
                            :join? false}) => :res))
