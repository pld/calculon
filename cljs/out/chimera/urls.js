// Compiled by ClojureScript 1.9.229 {}
goog.provide('chimera.urls');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Get last parameter form url
 */
chimera.urls.last_url_param = (function chimera$urls$last_url_param(url){
var last_param = cljs.core.last.call(null,clojure.string.split.call(null,[cljs.core.str(url)].join(''),/\//));
return cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str(last_param)].join(''),/.json/));
});
/**
 * Append string args with slashes and prefix with a slash.
 */
chimera.urls.url = (function chimera$urls$url(var_args){
var args__26183__auto__ = [];
var len__26176__auto___31890 = arguments.length;
var i__26177__auto___31891 = (0);
while(true){
if((i__26177__auto___31891 < len__26176__auto___31890)){
args__26183__auto__.push((arguments[i__26177__auto___31891]));

var G__31892 = (i__26177__auto___31891 + (1));
i__26177__auto___31891 = G__31892;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((0) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((0)),(0),null)):null);
return chimera.urls.url.cljs$core$IFn$_invoke$arity$variadic(argseq__26184__auto__);
});

chimera.urls.url.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return [cljs.core.str("/"),cljs.core.str(clojure.string.join.call(null,"/",cljs.core.remove.call(null,cljs.core.nil_QMARK_,args)))].join('');
});

chimera.urls.url.cljs$lang$maxFixedArity = (0);

chimera.urls.url.cljs$lang$applyTo = (function (seq31889){
return chimera.urls.url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31889));
});


//# sourceMappingURL=urls.js.map?rel=1487859338053