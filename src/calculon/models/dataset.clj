(ns calculon.models.dataset
  (:require [clojure.java.jdbc :as sql]))

(def spec (or (System/getenv "DATABASE_URL")
              "postgresql://localhost:5432/calculon"))

(defn all []
  (into [] (sql/query spec ["SELECT * FROM datasets ORDER BY id DESC"])))

(defn create [dataset]
  (sql/insert! spec :datasets [:body] [dataset]))
