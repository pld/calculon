(defproject calculon "0.1.0-SNAPSHOT"
  :description "Calculon"
  :min-lein-version "2.0.0"
  :url "https://github.com/pld/calculon"
  :license {:name "Apache 2 License"
            :url "http://www.apache.org/licenses/LICENSE-2.0"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/java.jdbc "0.3.2"]
                 [postgresql "9.1-901.jdbc4"]
                 [ring/ring-jetty-adapter "1.2.1"]
                 [compojure "1.1.6"]
                 [hiccup "1.0.4"]]
  :main ^:skip-aot calculon.core
  :uberjar-name "calculon-standalone.jar"
  :profiles {:uberjar {:aot :all}})
