// Compiled by ClojureScript 1.9.229 {}
goog.provide('chimera.string');
goog.require('cljs.core');
goog.require('chimera.core');
/**
 * Checks if a variable is null
 */
chimera.string.is_null_QMARK_ = (function chimera$string$is_null_QMARK_(s){
return cljs.core._EQ_.call(null,"null",s);
});
chimera.string.is_not_null_QMARK_ = cljs.core.complement.call(null,chimera.string.is_null_QMARK_);
/**
 * True if substring is a substring of string
 */
chimera.string.substring_QMARK_ = (function chimera$string$substring_QMARK_(var_args){
var args__26183__auto__ = [];
var len__26176__auto___30992 = arguments.length;
var i__26177__auto___30993 = (0);
while(true){
if((i__26177__auto___30993 < len__26176__auto___30992)){
args__26183__auto__.push((arguments[i__26177__auto___30993]));

var G__30994 = (i__26177__auto___30993 + (1));
i__26177__auto___30993 = G__30994;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((2) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((2)),(0),null)):null);
return chimera.string.substring_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26184__auto__);
});

chimera.string.substring_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (substring,string,p__30989){
var map__30990 = p__30989;
var map__30990__$1 = ((((!((map__30990 == null)))?((((map__30990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30990):map__30990);
var case_sensitive_QMARK_ = cljs.core.get.call(null,map__30990__$1,new cljs.core.Keyword(null,"case-sensitive?","case-sensitive?",-2133754107),true);
if(cljs.core.truth_((function (){var or__25101__auto__ = cljs.core.empty_QMARK_.call(null,string);
if(or__25101__auto__){
return or__25101__auto__;
} else {
return chimera.string.is_null_QMARK_.call(null,string);
}
})())){
return false;
} else {
return chimera.core.not_nil_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str((cljs.core.truth_(case_sensitive_QMARK_)?null:"(?i)")),cljs.core.str(substring)].join('')),string));
}
});

chimera.string.substring_QMARK_.cljs$lang$maxFixedArity = (2);

chimera.string.substring_QMARK_.cljs$lang$applyTo = (function (seq30986){
var G__30987 = cljs.core.first.call(null,seq30986);
var seq30986__$1 = cljs.core.next.call(null,seq30986);
var G__30988 = cljs.core.first.call(null,seq30986__$1);
var seq30986__$2 = cljs.core.next.call(null,seq30986__$1);
return chimera.string.substring_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__30987,G__30988,seq30986__$2);
});


//# sourceMappingURL=string.js.map?rel=1487859337083