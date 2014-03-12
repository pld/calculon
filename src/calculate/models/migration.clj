(ns calculate.models.migration
  (:require [clojure.java.jdbc :as sql]
            [calculate.models.dataset :as dataset]))

(defn migrated? []
  (-> (sql/query dataset/spec
                 [(str "SELECT count(*) FROM information_schema.tables "
                       "WHERE table_name='datasets'")])
      first :count pos?))

(defn migrate []
  (when (not (migrated?))
    (print "Creating database structure...") (flush)
    (sql/db-do-commands dataset/spec
                        (sql/create-table-ddl
                         :datasets
                         [:id :serial "PRIMARY KEY"]
                         [:body :varchar "NOT NULL"]
                         [:created_at :timestamp
                          "NOT NULL" "DEFAULT CURRENT_TIMESTAMP"]))
    (println " done")))
