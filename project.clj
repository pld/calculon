(defproject calculon "0.1.0-SNAPSHOT"
  :description "Calculon"
  :min-lein-version "2.0.0"
  :url "https://github.com/pld/calculon"
  :license {:name "Apache 2 License"
            :url "http://www.apache.org/licenses/LICENSE-2.0"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/java.jdbc "0.3.3"]
                 [postgresql "9.3-1101.jdbc4"]
                 [ring/ring-jetty-adapter "1.2.2"]
                 [compojure "1.1.8"]
                 [hiccup "1.0.4"]
                 [liberator "0.11.0"]]
  :aliases {"up" ["pdo" "auto" "dev," "ring" "server-headless"]}
  :ring {:handler calculon.core/app}
  :main ^:skip-aot calculon.core
  :uberjar-name "calculon-standalone.jar"
  :profiles {:uberjar {:aot :all}
             :dev {:dependencies [[midje "1.6.3"]]}}
  :plugins [[lein-midje "3.1.3"]
            [lein-pdo "0.1.1"]
            [lein-ring "0.7.1"]])
