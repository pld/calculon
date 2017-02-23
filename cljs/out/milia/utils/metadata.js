// Compiled by ClojureScript 1.9.229 {}
goog.provide('milia.utils.metadata');
goog.require('cljs.core');
goog.require('milia.api.http');
goog.require('milia.utils.remote');
/**
 * Fetch `metadata` with query key `id-key` and value `id`.
 */
milia.utils.metadata.metadata_files = (function milia$utils$metadata$metadata_files(var_args){
var args__26183__auto__ = [];
var len__26176__auto___32092 = arguments.length;
var i__26177__auto___32093 = (0);
while(true){
if((i__26177__auto___32093 < len__26176__auto___32092)){
args__26183__auto__.push((arguments[i__26177__auto___32093]));

var G__32094 = (i__26177__auto___32093 + (1));
i__26177__auto___32093 = G__32094;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((3) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((3)),(0),null)):null);
return milia.utils.metadata.metadata_files.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26184__auto__);
});

milia.utils.metadata.metadata_files.cljs$core$IFn$_invoke$arity$variadic = (function (id_key,id,no_cache_QMARK_,p__32089){
var map__32090 = p__32089;
var map__32090__$1 = ((((!((map__32090 == null)))?((((map__32090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32090):map__32090);
var extra_params = cljs.core.get.call(null,map__32090__$1,new cljs.core.Keyword(null,"extra-params","extra-params",513291077));
return milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"get","get",1683182755),milia.utils.remote.make_url.call(null,"metadata"),new cljs.core.Keyword(null,"no-cache?","no-cache?",-1868220981),no_cache_QMARK_,new cljs.core.Keyword(null,"http-options","http-options",1919701946),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-params","query-params",900640534),cljs.core.conj.call(null,cljs.core.PersistentArrayMap.fromArray([id_key,id], true, false),extra_params),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"json","json",1279968570)], null));
});

milia.utils.metadata.metadata_files.cljs$lang$maxFixedArity = (3);

milia.utils.metadata.metadata_files.cljs$lang$applyTo = (function (seq32085){
var G__32086 = cljs.core.first.call(null,seq32085);
var seq32085__$1 = cljs.core.next.call(null,seq32085);
var G__32087 = cljs.core.first.call(null,seq32085__$1);
var seq32085__$2 = cljs.core.next.call(null,seq32085__$1);
var G__32088 = cljs.core.first.call(null,seq32085__$2);
var seq32085__$3 = cljs.core.next.call(null,seq32085__$2);
return milia.utils.metadata.metadata_files.cljs$core$IFn$_invoke$arity$variadic(G__32086,G__32087,G__32088,seq32085__$3);
});


//# sourceMappingURL=metadata.js.map?rel=1487859338425