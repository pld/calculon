(ns calculon.controllers.calculator
  (:require [compojure.core :refer [defroutes GET POST]]
            [clojure.string :as str]
            [ring.util.response :as ring]
            [calculon.views.calculator :as view]
            [calculon.models.dataset :as model]))

(defn index []
  (view/index (model/all)))

(defn create
  [dataset]
  (when-not (str/blank? dataset)
    (model/create dataset))
  (ring/redirect "/"))

(defroutes routes
  (GET "/" [] (index))
  (POST "/" [dataset] (create dataset)))
