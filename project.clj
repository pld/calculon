(defproject gza "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.229"]
                 [cljsjs/react "15.2.1-1"]
                 [cljsjs/react-dom "15.2.1-1"]
                 [onaio/milia "0.3.28-SNAPSHOT"]
                 [sablono "0.7.4"]]
  :plugins [[lein-figwheel "0.5.8"]]
  :clean-targets [:target-path "out"]
  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src"]
                :figwheel true
                :compiler
                {:main "gza.core"}}]}
  :figwheel {:css-dirs ["css"]})
