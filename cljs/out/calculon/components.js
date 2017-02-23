// Compiled by ClojureScript 1.9.229 {}
goog.provide('calculon.components');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('milia.api.dataset');
goog.require('milia.utils.remote');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('chimera.seq');
goog.require('sablono.core');
goog.require('goog.string.format');
cljs.core.swap_BANG_.call(null,milia.utils.remote.hosts,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),"api.ona.io");
calculon.components.na_string = "n/a";
calculon.components.proportion_unique = 0.5;
calculon.components.sum = (function calculon$components$sum(l){
return cljs.core.reduce.call(null,cljs.core._PLUS_,(0),l);
});
calculon.components.median_STAR_ = (function calculon$components$median_STAR_(ns){
var ns__$1 = cljs.core.sort.call(null,ns);
var cnt = cljs.core.count.call(null,ns__$1);
var mid = (cnt >> (1));
if(cljs.core.odd_QMARK_.call(null,cnt)){
return cljs.core.nth.call(null,ns__$1,mid);
} else {
return ((cljs.core.nth.call(null,ns__$1,mid) + cljs.core.nth.call(null,ns__$1,(mid - (1)))) / (2));
}
});
calculon.components.median = cljs.core.memoize.call(null,calculon.components.median_STAR_);
calculon.components.mean_STAR_ = (function calculon$components$mean_STAR_(l){
return (calculon.components.sum.call(null,l) / cljs.core.count.call(null,l));
});
calculon.components.mean = cljs.core.memoize.call(null,calculon.components.mean_STAR_);
calculon.components.variance_STAR_ = (function calculon$components$variance_STAR_(l){
var mv = calculon.components.mean.call(null,l);
return (calculon.components.sum.call(null,cljs.core.map.call(null,((function (mv){
return (function (p1__45157_SHARP_){
return Math.pow((p1__45157_SHARP_ - mv),(2));
});})(mv))
,l)) / cljs.core.count.call(null,l));
});
calculon.components.variance = cljs.core.memoize.call(null,calculon.components.variance_STAR_);
calculon.components.std_STAR_ = (function calculon$components$std_STAR_(l){
return Math.sqrt(calculon.components.variance.call(null,l));
});
calculon.components.std = cljs.core.memoize.call(null,calculon.components.std_STAR_);
/**
 * Generates n evenly-spaced points, with distance (x2-x1)/(n-1) between
 * points.
 */
calculon.components.linspace_STAR_ = (function calculon$components$linspace_STAR_(x1,x2,n){
var spacing = ((x2 - x1) / (n - (1)));
return cljs.core.range.call(null,x1,(x1 + (spacing * n)),spacing);
});
calculon.components.linspace = cljs.core.memoize.call(null,calculon.components.linspace_STAR_);
/**
 * Return true if v looks like a category. We expect v is a category if the
 * proportion of distinct values is less than the constant proportion-unique,
 * where we ignore blanks or values that we think represent n/a strings.
 */
calculon.components.category_like_QMARK_ = (function calculon$components$category_like_QMARK_(v){
var denom = cljs.core.count.call(null,v);
return (!((denom === (0)))) && (((cljs.core.count.call(null,cljs.core.distinct.call(null,v)) / denom) < calculon.components.proportion_unique));
});
calculon.components.get_categorical_cols = (function calculon$components$get_categorical_cols(cols__GT_data){
return cljs.core.reduce_kv.call(null,(function (p1__45159_SHARP_,p2__45160_SHARP_,p3__45158_SHARP_){
if(cljs.core.truth_(calculon.components.category_like_QMARK_.call(null,p3__45158_SHARP_))){
return cljs.core.conj.call(null,p1__45159_SHARP_,p2__45160_SHARP_);
} else {
return p1__45159_SHARP_;
}
}),cljs.core.PersistentVector.EMPTY,cols__GT_data);
});
/**
 * Returns a normalized frequency count. If all frequencies are 0 returns {}.
 * `freqs` a map of frequencies
 * `val` the number the counts should add up to
 */
calculon.components.normalize_counts = (function calculon$components$normalize_counts(var_args){
var args__26183__auto__ = [];
var len__26176__auto___45167 = arguments.length;
var i__26177__auto___45168 = (0);
while(true){
if((i__26177__auto___45168 < len__26176__auto___45167)){
args__26183__auto__.push((arguments[i__26177__auto___45168]));

var G__45169 = (i__26177__auto___45168 + (1));
i__26177__auto___45168 = G__45169;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return calculon.components.normalize_counts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});

calculon.components.normalize_counts.cljs$core$IFn$_invoke$arity$variadic = (function (freqs,p__45164){
var map__45165 = p__45164;
var map__45165__$1 = ((((!((map__45165 == null)))?((((map__45165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45165):map__45165);
var val = cljs.core.get.call(null,map__45165__$1,new cljs.core.Keyword(null,"val","val",128701612),(1));
var n = calculon.components.sum.call(null,cljs.core.vals.call(null,freqs));
return chimera.seq.update_values.call(null,freqs,((function (n,map__45165,map__45165__$1,val){
return (function (p1__45161_SHARP_){
return (val * (p1__45161_SHARP_ / n));
});})(n,map__45165,map__45165__$1,val))
);
});

calculon.components.normalize_counts.cljs$lang$maxFixedArity = (1);

calculon.components.normalize_counts.cljs$lang$applyTo = (function (seq45162){
var G__45163 = cljs.core.first.call(null,seq45162);
var seq45162__$1 = cljs.core.next.call(null,seq45162);
return calculon.components.normalize_counts.cljs$core$IFn$_invoke$arity$variadic(G__45163,seq45162__$1);
});

/**
 * Divides everything in `m` by the median of the values. If the median is less
 * than 1 / the number of entries, it divides everything by the number of
 * entries.
 */
calculon.components.normalize = (function calculon$components$normalize(m){
var n = cljs.core.count.call(null,m);
var divisor = (function (){var x__25432__auto__ = calculon.components.median.call(null,cljs.core.vals.call(null,m));
var y__25433__auto__ = ((1) / n);
return ((x__25432__auto__ > y__25433__auto__) ? x__25432__auto__ : y__25433__auto__);
})();
return chimera.seq.update_values.call(null,m,((function (n,divisor){
return (function (p1__45170_SHARP_){
return (p1__45170_SHARP_ / divisor);
});})(n,divisor))
);
});
calculon.components.compute_outlier_scores = (function calculon$components$compute_outlier_scores(agg__GT_freqs){
if((cljs.core.count.call(null,cljs.core.keys.call(null,agg__GT_freqs)) > (1))){
} else {
throw (new Error("Assert failed: (> (-> agg->freqs keys count) 1)"));
}

var range = cljs.core.keys.call(null,cljs.core.first.call(null,cljs.core.vals.call(null,agg__GT_freqs)));
var normalized_freqs = cljs.core.reduce_kv.call(null,((function (range){
return (function (p1__45171_SHARP_,p2__45173_SHARP_,p3__45172_SHARP_){
var G__45178 = p1__45171_SHARP_;
if(!((calculon.components.sum.call(null,cljs.core.vals.call(null,p3__45172_SHARP_)) === (0)))){
return cljs.core.assoc.call(null,G__45178,p2__45173_SHARP_,calculon.components.normalize_counts.call(null,p3__45172_SHARP_));
} else {
return G__45178;
}
});})(range))
,cljs.core.PersistentArrayMap.EMPTY,agg__GT_freqs);
var medians = cljs.core.reduce.call(null,((function (range,normalized_freqs){
return (function (m,r){
return cljs.core.assoc.call(null,m,r,calculon.components.median.call(null,cljs.core.map.call(null,((function (range,normalized_freqs){
return (function (p1__45174_SHARP_){
return cljs.core.get.call(null,p1__45174_SHARP_,r);
});})(range,normalized_freqs))
,cljs.core.vals.call(null,normalized_freqs))));
});})(range,normalized_freqs))
,cljs.core.PersistentArrayMap.EMPTY,range);
var outlier_values = cljs.core.reduce.call(null,((function (range,normalized_freqs,medians){
return (function (m,agg){
return cljs.core.assoc.call(null,m,agg,(function (){var temp__4655__auto__ = cljs.core.get.call(null,normalized_freqs,agg);
if(cljs.core.truth_(temp__4655__auto__)){
var freqs = temp__4655__auto__;
return cljs.core.reduce.call(null,((function (freqs,temp__4655__auto__,range,normalized_freqs,medians){
return (function (p1__45175_SHARP_,p2__45176_SHARP_){
return (p1__45175_SHARP_ + Math.abs((cljs.core.get.call(null,freqs,p2__45176_SHARP_) - cljs.core.get.call(null,medians,p2__45176_SHARP_))));
});})(freqs,temp__4655__auto__,range,normalized_freqs,medians))
,(0),range);
} else {
return (0);
}
})());
});})(range,normalized_freqs,medians))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,agg__GT_freqs));
return calculon.components.normalize.call(null,outlier_values);
});
calculon.components.json_list__GT_col_vectors = (function calculon$components$json_list__GT_col_vectors(var_args){
var args__26183__auto__ = [];
var len__26176__auto___45187 = arguments.length;
var i__26177__auto___45188 = (0);
while(true){
if((i__26177__auto___45188 < len__26176__auto___45187)){
args__26183__auto__.push((arguments[i__26177__auto___45188]));

var G__45189 = (i__26177__auto___45188 + (1));
i__26177__auto___45188 = G__45189;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return calculon.components.json_list__GT_col_vectors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});

calculon.components.json_list__GT_col_vectors.cljs$core$IFn$_invoke$arity$variadic = (function (json_list,p__45183){
var vec__45184 = p__45183;
var ignored_values = cljs.core.nth.call(null,vec__45184,(0),null);
var col_names = cljs.core.distinct.call(null,cljs.core.flatten.call(null,cljs.core.map.call(null,cljs.core.keys,json_list)));
return cljs.core.reduce.call(null,((function (col_names,vec__45184,ignored_values){
return (function (m,k){
return cljs.core.assoc.call(null,m,k,cljs.core.remove.call(null,((function (col_names,vec__45184,ignored_values){
return (function (p1__45180_SHARP_){
var or__25101__auto__ = chimera.seq.in_QMARK_.call(null,ignored_values,p1__45180_SHARP_);
if(cljs.core.truth_(or__25101__auto__)){
return or__25101__auto__;
} else {
return (cljs.core.map_QMARK_.call(null,p1__45180_SHARP_)) || (cljs.core.vector_QMARK_.call(null,p1__45180_SHARP_));
}
});})(col_names,vec__45184,ignored_values))
,cljs.core.flatten.call(null,cljs.core.map.call(null,((function (col_names,vec__45184,ignored_values){
return (function (p1__45179_SHARP_){
return cljs.core.get.call(null,p1__45179_SHARP_,k);
});})(col_names,vec__45184,ignored_values))
,json_list))));
});})(col_names,vec__45184,ignored_values))
,cljs.core.PersistentArrayMap.EMPTY,col_names);
});

calculon.components.json_list__GT_col_vectors.cljs$lang$maxFixedArity = (1);

calculon.components.json_list__GT_col_vectors.cljs$lang$applyTo = (function (seq45181){
var G__45182 = cljs.core.first.call(null,seq45181);
var seq45181__$1 = cljs.core.next.call(null,seq45181);
return calculon.components.json_list__GT_col_vectors.cljs$core$IFn$_invoke$arity$variadic(G__45182,seq45181__$1);
});

/**
 * Run the S-Value algorithm.
 * `data` list of hash-maps with the same keys, each is a row
 * `aggregation-col` key in the maps to aggregate using
 * `categorical-cols` list of keys in maps to ran algorithm against
 */
calculon.components.run_algorithm = (function calculon$components$run_algorithm(var_args){
var args__26183__auto__ = [];
var len__26176__auto___45205 = arguments.length;
var i__26177__auto___45206 = (0);
while(true){
if((i__26177__auto___45206 < len__26176__auto___45205)){
args__26183__auto__.push((arguments[i__26177__auto___45206]));

var G__45207 = (i__26177__auto___45206 + (1));
i__26177__auto___45206 = G__45207;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((2) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((2)),(0),null)):null);
return calculon.components.run_algorithm.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26184__auto__);
});

calculon.components.run_algorithm.cljs$core$IFn$_invoke$arity$variadic = (function (data,aggregation_col,p__45198){
var map__45199 = p__45198;
var map__45199__$1 = ((((!((map__45199 == null)))?((((map__45199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45199):map__45199);
var categorical_cols = cljs.core.get.call(null,map__45199__$1,new cljs.core.Keyword(null,"categorical-cols","categorical-cols",1210698951));
var null_responses = cljs.core.get.call(null,map__45199__$1,new cljs.core.Keyword(null,"null-responses","null-responses",500284807),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculon.components.na_string,null], null));
var cols__GT_data = calculon.components.json_list__GT_col_vectors.call(null,data,null_responses);
var categorical_cols__$1 = cljs.core.remove.call(null,((function (cols__GT_data,map__45199,map__45199__$1,categorical_cols,null_responses){
return (function (p1__45190_SHARP_){
return chimera.seq.in_QMARK_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aggregation_col], null),p1__45190_SHARP_);
});})(cols__GT_data,map__45199,map__45199__$1,categorical_cols,null_responses))
,(function (){var or__25101__auto__ = categorical_cols;
if(cljs.core.truth_(or__25101__auto__)){
return or__25101__auto__;
} else {
return calculon.components.get_categorical_cols.call(null,cols__GT_data);
}
})());
var agg_units = cljs.core.distinct.call(null,cljs.core.get.call(null,cols__GT_data,aggregation_col));
var agg_units__GT_col__GT_freqs = chimera.seq.update_values.call(null,cljs.core.group_by.call(null,((function (cols__GT_data,categorical_cols__$1,agg_units,map__45199,map__45199__$1,categorical_cols,null_responses){
return (function (p1__45191_SHARP_){
return cljs.core.get.call(null,p1__45191_SHARP_,aggregation_col);
});})(cols__GT_data,categorical_cols__$1,agg_units,map__45199,map__45199__$1,categorical_cols,null_responses))
,data),((function (cols__GT_data,categorical_cols__$1,agg_units,map__45199,map__45199__$1,categorical_cols,null_responses){
return (function (p1__45192_SHARP_){
return chimera.seq.update_values.call(null,calculon.components.json_list__GT_col_vectors.call(null,p1__45192_SHARP_),cljs.core.frequencies);
});})(cols__GT_data,categorical_cols__$1,agg_units,map__45199,map__45199__$1,categorical_cols,null_responses))
);
var iter__25881__auto__ = ((function (cols__GT_data,categorical_cols__$1,agg_units,agg_units__GT_col__GT_freqs,map__45199,map__45199__$1,categorical_cols,null_responses){
return (function calculon$components$iter__45201(s__45202){
return (new cljs.core.LazySeq(null,((function (cols__GT_data,categorical_cols__$1,agg_units,agg_units__GT_col__GT_freqs,map__45199,map__45199__$1,categorical_cols,null_responses){
return (function (){
var s__45202__$1 = s__45202;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__45202__$1);
if(temp__4657__auto__){
var s__45202__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45202__$2)){
var c__25879__auto__ = cljs.core.chunk_first.call(null,s__45202__$2);
var size__25880__auto__ = cljs.core.count.call(null,c__25879__auto__);
var b__45204 = cljs.core.chunk_buffer.call(null,size__25880__auto__);
if((function (){var i__45203 = (0);
while(true){
if((i__45203 < size__25880__auto__)){
var col = cljs.core._nth.call(null,c__25879__auto__,i__45203);
var col_values = cljs.core.distinct.call(null,cljs.core.get.call(null,cols__GT_data,col));
var agg__GT_freqs = cljs.core.reduce.call(null,((function (i__45203,col_values,col,c__25879__auto__,size__25880__auto__,b__45204,s__45202__$2,temp__4657__auto__,cols__GT_data,categorical_cols__$1,agg_units,agg_units__GT_col__GT_freqs,map__45199,map__45199__$1,categorical_cols,null_responses){
return (function (m,agg_unit){
return cljs.core.assoc.call(null,m,agg_unit,(function (){var freqs = cljs.core.get.call(null,cljs.core.get.call(null,agg_units__GT_col__GT_freqs,agg_unit),col);
return cljs.core.reduce.call(null,((function (i__45203,freqs,col_values,col,c__25879__auto__,size__25880__auto__,b__45204,s__45202__$2,temp__4657__auto__,cols__GT_data,categorical_cols__$1,agg_units,agg_units__GT_col__GT_freqs,map__45199,map__45199__$1,categorical_cols,null_responses){
return (function (p1__45193_SHARP_,p2__45194_SHARP_){
return cljs.core.assoc.call(null,p1__45193_SHARP_,p2__45194_SHARP_,cljs.core.get.call(null,freqs,p2__45194_SHARP_,(0)));
});})(i__45203,freqs,col_values,col,c__25879__auto__,size__25880__auto__,b__45204,s__45202__$2,temp__4657__auto__,cols__GT_data,categorical_cols__$1,agg_units,agg_units__GT_col__GT_freqs,map__45199,map__45199__$1,categorical_cols,null_responses))
,cljs.core.PersistentArrayMap.EMPTY,col_values);
})());
});})(i__45203,col_values,col,c__25879__auto__,size__25880__auto__,b__45204,s__45202__$2,temp__4657__auto__,cols__GT_data,categorical_cols__$1,agg_units,agg_units__GT_col__GT_freqs,map__45199,map__45199__$1,categorical_cols,null_responses))
,cljs.core.PersistentArrayMap.EMPTY,agg_units);
cljs.core.chunk_append.call(null,b__45204,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,calculon.components.compute_outlier_scores.call(null,agg__GT_freqs)], null));

var G__45208 = (i__45203 + (1));
i__45203 = G__45208;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45204),calculon$components$iter__45201.call(null,cljs.core.chunk_rest.call(null,s__45202__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45204),null);
}
} else {
var col = cljs.core.first.call(null,s__45202__$2);
var col_values = cljs.core.distinct.call(null,cljs.core.get.call(null,cols__GT_data,col));
var agg__GT_freqs = cljs.core.reduce.call(null,((function (col_values,col,s__45202__$2,temp__4657__auto__,cols__GT_data,categorical_cols__$1,agg_units,agg_units__GT_col__GT_freqs,map__45199,map__45199__$1,categorical_cols,null_responses){
return (function (m,agg_unit){
return cljs.core.assoc.call(null,m,agg_unit,(function (){var freqs = cljs.core.get.call(null,cljs.core.get.call(null,agg_units__GT_col__GT_freqs,agg_unit),col);
return cljs.core.reduce.call(null,((function (freqs,col_values,col,s__45202__$2,temp__4657__auto__,cols__GT_data,categorical_cols__$1,agg_units,agg_units__GT_col__GT_freqs,map__45199,map__45199__$1,categorical_cols,null_responses){
return (function (p1__45193_SHARP_,p2__45194_SHARP_){
return cljs.core.assoc.call(null,p1__45193_SHARP_,p2__45194_SHARP_,cljs.core.get.call(null,freqs,p2__45194_SHARP_,(0)));
});})(freqs,col_values,col,s__45202__$2,temp__4657__auto__,cols__GT_data,categorical_cols__$1,agg_units,agg_units__GT_col__GT_freqs,map__45199,map__45199__$1,categorical_cols,null_responses))
,cljs.core.PersistentArrayMap.EMPTY,col_values);
})());
});})(col_values,col,s__45202__$2,temp__4657__auto__,cols__GT_data,categorical_cols__$1,agg_units,agg_units__GT_col__GT_freqs,map__45199,map__45199__$1,categorical_cols,null_responses))
,cljs.core.PersistentArrayMap.EMPTY,agg_units);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,calculon.components.compute_outlier_scores.call(null,agg__GT_freqs)], null),calculon$components$iter__45201.call(null,cljs.core.rest.call(null,s__45202__$2)));
}
} else {
return null;
}
break;
}
});})(cols__GT_data,categorical_cols__$1,agg_units,agg_units__GT_col__GT_freqs,map__45199,map__45199__$1,categorical_cols,null_responses))
,null,null));
});})(cols__GT_data,categorical_cols__$1,agg_units,agg_units__GT_col__GT_freqs,map__45199,map__45199__$1,categorical_cols,null_responses))
;
return iter__25881__auto__.call(null,categorical_cols__$1);
});

calculon.components.run_algorithm.cljs$lang$maxFixedArity = (2);

calculon.components.run_algorithm.cljs$lang$applyTo = (function (seq45195){
var G__45196 = cljs.core.first.call(null,seq45195);
var seq45195__$1 = cljs.core.next.call(null,seq45195);
var G__45197 = cljs.core.first.call(null,seq45195__$1);
var seq45195__$2 = cljs.core.next.call(null,seq45195__$1);
return calculon.components.run_algorithm.cljs$core$IFn$_invoke$arity$variadic(G__45196,G__45197,seq45195__$2);
});

calculon.components.compute_averages = (function calculon$components$compute_averages(cols__GT_scores){
return cljs.core.map.call(null,calculon.components.mean,chimera.seq.transpose.call(null,cljs.core.map.call(null,cljs.core.vals,cljs.core.map.call(null,(function (p1__45209_SHARP_){
return cljs.core.into.call(null,cljs.core.sorted_map.call(null),p1__45209_SHARP_);
}),cljs.core.vals.call(null,cols__GT_scores)))));
});
calculon.components.default_json_url = "https://data.cityofnewyork.us/resource/w7a6-9xrz.json";
calculon.components.get_datasets = (function calculon$components$get_datasets(state){
var c__27741__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto__){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto__){
return (function (state_45339){
var state_val_45340 = (state_45339[(1)]);
if((state_val_45340 === (7))){
var state_45339__$1 = state_45339;
var statearr_45341_45370 = state_45339__$1;
(statearr_45341_45370[(2)] = false);

(statearr_45341_45370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (1))){
var inst_45291 = cljs.core.deref.call(null,state);
var inst_45292 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45293 = [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471)];
var inst_45294 = (new cljs.core.PersistentVector(null,2,(5),inst_45292,inst_45293,null));
var inst_45295 = cljs.core.select_keys.call(null,inst_45291,inst_45294);
var inst_45296 = milia.utils.remote._STAR_credentials_STAR_ = inst_45295;
var state_45339__$1 = (function (){var statearr_45342 = state_45339;
(statearr_45342[(7)] = inst_45296);

return statearr_45342;
})();
var statearr_45343_45371 = state_45339__$1;
(statearr_45343_45371[(2)] = null);

(statearr_45343_45371[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45339,null,null,(3),(2));
var inst_45303 = cljs.core.deref.call(null,state);
var inst_45304 = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(inst_45303);
var inst_45305 = milia.api.dataset.all.call(null,inst_45304);
var state_45339__$1 = state_45339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45339__$1,(5),inst_45305);
} else {
if((state_val_45340 === (15))){
var inst_45328 = (state_45339[(8)]);
var inst_45332 = cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"datasets","datasets",1896364419),inst_45328);
var state_45339__$1 = state_45339;
var statearr_45344_45372 = state_45339__$1;
(statearr_45344_45372[(2)] = inst_45332);

(statearr_45344_45372[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (13))){
var inst_45307 = (state_45339[(9)]);
var state_45339__$1 = state_45339;
var statearr_45345_45373 = state_45339__$1;
(statearr_45345_45373[(2)] = inst_45307);

(statearr_45345_45373[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (6))){
var inst_45307 = (state_45339[(9)]);
var inst_45312 = inst_45307.cljs$lang$protocol_mask$partition0$;
var inst_45313 = (inst_45312 & (64));
var inst_45314 = inst_45307.cljs$core$ISeq$;
var inst_45315 = (inst_45313) || (inst_45314);
var state_45339__$1 = state_45339;
if(cljs.core.truth_(inst_45315)){
var statearr_45346_45374 = state_45339__$1;
(statearr_45346_45374[(1)] = (9));

} else {
var statearr_45347_45375 = state_45339__$1;
(statearr_45347_45375[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (17))){
var inst_45335 = (state_45339[(2)]);
var state_45339__$1 = state_45339;
var statearr_45348_45376 = state_45339__$1;
(statearr_45348_45376[(2)] = inst_45335);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45339__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (3))){
var inst_45297 = (state_45339[(2)]);
var inst_45298 = milia.utils.remote._STAR_credentials_STAR_ = milia.utils.remote._STAR_credentials_STAR_;
var state_45339__$1 = (function (){var statearr_45349 = state_45339;
(statearr_45349[(10)] = inst_45297);

(statearr_45349[(11)] = inst_45298);

return statearr_45349;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45339__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (12))){
var inst_45307 = (state_45339[(9)]);
var inst_45324 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45307);
var state_45339__$1 = state_45339;
var statearr_45350_45377 = state_45339__$1;
(statearr_45350_45377[(2)] = inst_45324);

(statearr_45350_45377[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (2))){
var inst_45337 = (state_45339[(2)]);
var state_45339__$1 = state_45339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45339__$1,inst_45337);
} else {
if((state_val_45340 === (11))){
var inst_45319 = (state_45339[(2)]);
var state_45339__$1 = state_45339;
var statearr_45351_45378 = state_45339__$1;
(statearr_45351_45378[(2)] = inst_45319);

(statearr_45351_45378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (9))){
var state_45339__$1 = state_45339;
var statearr_45352_45379 = state_45339__$1;
(statearr_45352_45379[(2)] = true);

(statearr_45352_45379[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (5))){
var inst_45307 = (state_45339[(9)]);
var inst_45307__$1 = (state_45339[(2)]);
var inst_45309 = (inst_45307__$1 == null);
var inst_45310 = cljs.core.not.call(null,inst_45309);
var state_45339__$1 = (function (){var statearr_45353 = state_45339;
(statearr_45353[(9)] = inst_45307__$1);

return statearr_45353;
})();
if(inst_45310){
var statearr_45354_45380 = state_45339__$1;
(statearr_45354_45380[(1)] = (6));

} else {
var statearr_45355_45381 = state_45339__$1;
(statearr_45355_45381[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (14))){
var inst_45327 = (state_45339[(2)]);
var inst_45328 = cljs.core.get.call(null,inst_45327,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_45329 = cljs.core.get.call(null,inst_45327,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_45330 = cljs.core._EQ_.call(null,(200),inst_45329);
var state_45339__$1 = (function (){var statearr_45356 = state_45339;
(statearr_45356[(8)] = inst_45328);

return statearr_45356;
})();
if(inst_45330){
var statearr_45357_45382 = state_45339__$1;
(statearr_45357_45382[(1)] = (15));

} else {
var statearr_45358_45383 = state_45339__$1;
(statearr_45358_45383[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (16))){
var state_45339__$1 = state_45339;
var statearr_45359_45384 = state_45339__$1;
(statearr_45359_45384[(2)] = null);

(statearr_45359_45384[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (10))){
var state_45339__$1 = state_45339;
var statearr_45360_45385 = state_45339__$1;
(statearr_45360_45385[(2)] = false);

(statearr_45360_45385[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (8))){
var inst_45322 = (state_45339[(2)]);
var state_45339__$1 = state_45339;
if(cljs.core.truth_(inst_45322)){
var statearr_45361_45386 = state_45339__$1;
(statearr_45361_45386[(1)] = (12));

} else {
var statearr_45362_45387 = state_45339__$1;
(statearr_45362_45387[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27741__auto__))
;
return ((function (switch__27629__auto__,c__27741__auto__){
return (function() {
var calculon$components$get_datasets_$_state_machine__27630__auto__ = null;
var calculon$components$get_datasets_$_state_machine__27630__auto____0 = (function (){
var statearr_45366 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45366[(0)] = calculon$components$get_datasets_$_state_machine__27630__auto__);

(statearr_45366[(1)] = (1));

return statearr_45366;
});
var calculon$components$get_datasets_$_state_machine__27630__auto____1 = (function (state_45339){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_45339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e45367){if((e45367 instanceof Object)){
var ex__27633__auto__ = e45367;
var statearr_45368_45388 = state_45339;
(statearr_45368_45388[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45389 = state_45339;
state_45339 = G__45389;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
calculon$components$get_datasets_$_state_machine__27630__auto__ = function(state_45339){
switch(arguments.length){
case 0:
return calculon$components$get_datasets_$_state_machine__27630__auto____0.call(this);
case 1:
return calculon$components$get_datasets_$_state_machine__27630__auto____1.call(this,state_45339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
calculon$components$get_datasets_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = calculon$components$get_datasets_$_state_machine__27630__auto____0;
calculon$components$get_datasets_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = calculon$components$get_datasets_$_state_machine__27630__auto____1;
return calculon$components$get_datasets_$_state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto__))
})();
var state__27743__auto__ = (function (){var statearr_45369 = f__27742__auto__.call(null);
(statearr_45369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto__);

return statearr_45369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto__))
);

return c__27741__auto__;
});
calculon.components.get_data = (function calculon$components$get_data(state){
cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"aggregation-col","aggregation-col",-247721351));

var c__27741__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto__){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto__){
return (function (state_45525){
var state_val_45526 = (state_45525[(1)]);
if((state_val_45526 === (7))){
var state_45525__$1 = state_45525;
var statearr_45527_45556 = state_45525__$1;
(statearr_45527_45556[(2)] = false);

(statearr_45527_45556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45526 === (1))){
var inst_45474 = cljs.core.deref.call(null,state);
var inst_45475 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45476 = [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471)];
var inst_45477 = (new cljs.core.PersistentVector(null,2,(5),inst_45475,inst_45476,null));
var inst_45478 = cljs.core.select_keys.call(null,inst_45474,inst_45477);
var inst_45479 = milia.utils.remote._STAR_credentials_STAR_ = inst_45478;
var state_45525__$1 = (function (){var statearr_45528 = state_45525;
(statearr_45528[(7)] = inst_45479);

return statearr_45528;
})();
var statearr_45529_45557 = state_45525__$1;
(statearr_45529_45557[(2)] = null);

(statearr_45529_45557[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45526 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45525,null,null,(3),(2));
var inst_45486 = cljs.core.deref.call(null,state);
var inst_45487 = new cljs.core.Keyword(null,"dataset-id","dataset-id",1732799562).cljs$core$IFn$_invoke$arity$1(inst_45486);
var inst_45488 = [new cljs.core.Keyword(null,"limit","limit",-1355822363)];
var inst_45489 = [(1000)];
var inst_45490 = cljs.core.PersistentHashMap.fromArrays(inst_45488,inst_45489);
var inst_45491 = milia.api.dataset.data.call(null,inst_45487,new cljs.core.Keyword(null,"query-params","query-params",900640534),inst_45490);
var state_45525__$1 = state_45525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45525__$1,(5),inst_45491);
} else {
if((state_val_45526 === (15))){
var inst_45514 = (state_45525[(8)]);
var inst_45518 = cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),inst_45514);
var state_45525__$1 = state_45525;
var statearr_45530_45558 = state_45525__$1;
(statearr_45530_45558[(2)] = inst_45518);

(statearr_45530_45558[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45526 === (13))){
var inst_45493 = (state_45525[(9)]);
var state_45525__$1 = state_45525;
var statearr_45531_45559 = state_45525__$1;
(statearr_45531_45559[(2)] = inst_45493);

(statearr_45531_45559[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45526 === (6))){
var inst_45493 = (state_45525[(9)]);
var inst_45498 = inst_45493.cljs$lang$protocol_mask$partition0$;
var inst_45499 = (inst_45498 & (64));
var inst_45500 = inst_45493.cljs$core$ISeq$;
var inst_45501 = (inst_45499) || (inst_45500);
var state_45525__$1 = state_45525;
if(cljs.core.truth_(inst_45501)){
var statearr_45532_45560 = state_45525__$1;
(statearr_45532_45560[(1)] = (9));

} else {
var statearr_45533_45561 = state_45525__$1;
(statearr_45533_45561[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45526 === (17))){
var inst_45521 = (state_45525[(2)]);
var state_45525__$1 = state_45525;
var statearr_45534_45562 = state_45525__$1;
(statearr_45534_45562[(2)] = inst_45521);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45525__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45526 === (3))){
var inst_45480 = (state_45525[(2)]);
var inst_45481 = milia.utils.remote._STAR_credentials_STAR_ = milia.utils.remote._STAR_credentials_STAR_;
var state_45525__$1 = (function (){var statearr_45535 = state_45525;
(statearr_45535[(10)] = inst_45481);

(statearr_45535[(11)] = inst_45480);

return statearr_45535;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45525__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45526 === (12))){
var inst_45493 = (state_45525[(9)]);
var inst_45510 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45493);
var state_45525__$1 = state_45525;
var statearr_45536_45563 = state_45525__$1;
(statearr_45536_45563[(2)] = inst_45510);

(statearr_45536_45563[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45526 === (2))){
var inst_45523 = (state_45525[(2)]);
var state_45525__$1 = state_45525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45525__$1,inst_45523);
} else {
if((state_val_45526 === (11))){
var inst_45505 = (state_45525[(2)]);
var state_45525__$1 = state_45525;
var statearr_45537_45564 = state_45525__$1;
(statearr_45537_45564[(2)] = inst_45505);

(statearr_45537_45564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45526 === (9))){
var state_45525__$1 = state_45525;
var statearr_45538_45565 = state_45525__$1;
(statearr_45538_45565[(2)] = true);

(statearr_45538_45565[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45526 === (5))){
var inst_45493 = (state_45525[(9)]);
var inst_45493__$1 = (state_45525[(2)]);
var inst_45495 = (inst_45493__$1 == null);
var inst_45496 = cljs.core.not.call(null,inst_45495);
var state_45525__$1 = (function (){var statearr_45539 = state_45525;
(statearr_45539[(9)] = inst_45493__$1);

return statearr_45539;
})();
if(inst_45496){
var statearr_45540_45566 = state_45525__$1;
(statearr_45540_45566[(1)] = (6));

} else {
var statearr_45541_45567 = state_45525__$1;
(statearr_45541_45567[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45526 === (14))){
var inst_45513 = (state_45525[(2)]);
var inst_45514 = cljs.core.get.call(null,inst_45513,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_45515 = cljs.core.get.call(null,inst_45513,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_45516 = cljs.core._EQ_.call(null,(200),inst_45515);
var state_45525__$1 = (function (){var statearr_45542 = state_45525;
(statearr_45542[(8)] = inst_45514);

return statearr_45542;
})();
if(inst_45516){
var statearr_45543_45568 = state_45525__$1;
(statearr_45543_45568[(1)] = (15));

} else {
var statearr_45544_45569 = state_45525__$1;
(statearr_45544_45569[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45526 === (16))){
var state_45525__$1 = state_45525;
var statearr_45545_45570 = state_45525__$1;
(statearr_45545_45570[(2)] = null);

(statearr_45545_45570[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45526 === (10))){
var state_45525__$1 = state_45525;
var statearr_45546_45571 = state_45525__$1;
(statearr_45546_45571[(2)] = false);

(statearr_45546_45571[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45526 === (8))){
var inst_45508 = (state_45525[(2)]);
var state_45525__$1 = state_45525;
if(cljs.core.truth_(inst_45508)){
var statearr_45547_45572 = state_45525__$1;
(statearr_45547_45572[(1)] = (12));

} else {
var statearr_45548_45573 = state_45525__$1;
(statearr_45548_45573[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27741__auto__))
;
return ((function (switch__27629__auto__,c__27741__auto__){
return (function() {
var calculon$components$get_data_$_state_machine__27630__auto__ = null;
var calculon$components$get_data_$_state_machine__27630__auto____0 = (function (){
var statearr_45552 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45552[(0)] = calculon$components$get_data_$_state_machine__27630__auto__);

(statearr_45552[(1)] = (1));

return statearr_45552;
});
var calculon$components$get_data_$_state_machine__27630__auto____1 = (function (state_45525){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_45525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e45553){if((e45553 instanceof Object)){
var ex__27633__auto__ = e45553;
var statearr_45554_45574 = state_45525;
(statearr_45554_45574[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45575 = state_45525;
state_45525 = G__45575;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
calculon$components$get_data_$_state_machine__27630__auto__ = function(state_45525){
switch(arguments.length){
case 0:
return calculon$components$get_data_$_state_machine__27630__auto____0.call(this);
case 1:
return calculon$components$get_data_$_state_machine__27630__auto____1.call(this,state_45525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
calculon$components$get_data_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = calculon$components$get_data_$_state_machine__27630__auto____0;
calculon$components$get_data_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = calculon$components$get_data_$_state_machine__27630__auto____1;
return calculon$components$get_data_$_state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto__))
})();
var state__27743__auto__ = (function (){var statearr_45555 = f__27742__auto__.call(null);
(statearr_45555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto__);

return statearr_45555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto__))
);

return c__27741__auto__;
});
calculon.components.get_json_url = (function calculon$components$get_json_url(state){
var c__27741__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto__){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto__){
return (function (state_45679){
var state_val_45680 = (state_45679[(1)]);
if((state_val_45680 === (7))){
var state_45679__$1 = state_45679;
var statearr_45681_45706 = state_45679__$1;
(statearr_45681_45706[(2)] = false);

(statearr_45681_45706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45680 === (1))){
var inst_45642 = cljs.core.deref.call(null,state);
var inst_45643 = new cljs.core.Keyword(null,"json-url","json-url",1986159085).cljs$core$IFn$_invoke$arity$1(inst_45642);
var inst_45644 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_45645 = [false];
var inst_45646 = cljs.core.PersistentHashMap.fromArrays(inst_45644,inst_45645);
var inst_45647 = cljs_http.client.get.call(null,inst_45643,inst_45646);
var state_45679__$1 = state_45679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45679__$1,(2),inst_45647);
} else {
if((state_val_45680 === (4))){
var state_45679__$1 = state_45679;
var statearr_45682_45707 = state_45679__$1;
(statearr_45682_45707[(2)] = false);

(statearr_45682_45707[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45680 === (13))){
var state_45679__$1 = state_45679;
var statearr_45683_45708 = state_45679__$1;
(statearr_45683_45708[(2)] = null);

(statearr_45683_45708[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45680 === (6))){
var state_45679__$1 = state_45679;
var statearr_45684_45709 = state_45679__$1;
(statearr_45684_45709[(2)] = true);

(statearr_45684_45709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45680 === (3))){
var inst_45649 = (state_45679[(7)]);
var inst_45654 = inst_45649.cljs$lang$protocol_mask$partition0$;
var inst_45655 = (inst_45654 & (64));
var inst_45656 = inst_45649.cljs$core$ISeq$;
var inst_45657 = (inst_45655) || (inst_45656);
var state_45679__$1 = state_45679;
if(cljs.core.truth_(inst_45657)){
var statearr_45685_45710 = state_45679__$1;
(statearr_45685_45710[(1)] = (6));

} else {
var statearr_45686_45711 = state_45679__$1;
(statearr_45686_45711[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45680 === (12))){
var inst_45670 = (state_45679[(8)]);
var inst_45674 = cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),inst_45670);
var state_45679__$1 = state_45679;
var statearr_45687_45712 = state_45679__$1;
(statearr_45687_45712[(2)] = inst_45674);

(statearr_45687_45712[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45680 === (2))){
var inst_45649 = (state_45679[(7)]);
var inst_45649__$1 = (state_45679[(2)]);
var inst_45651 = (inst_45649__$1 == null);
var inst_45652 = cljs.core.not.call(null,inst_45651);
var state_45679__$1 = (function (){var statearr_45688 = state_45679;
(statearr_45688[(7)] = inst_45649__$1);

return statearr_45688;
})();
if(inst_45652){
var statearr_45689_45713 = state_45679__$1;
(statearr_45689_45713[(1)] = (3));

} else {
var statearr_45690_45714 = state_45679__$1;
(statearr_45690_45714[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45680 === (11))){
var inst_45669 = (state_45679[(2)]);
var inst_45670 = cljs.core.get.call(null,inst_45669,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_45671 = cljs.core.get.call(null,inst_45669,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_45672 = cljs.core._EQ_.call(null,(200),inst_45671);
var state_45679__$1 = (function (){var statearr_45691 = state_45679;
(statearr_45691[(8)] = inst_45670);

return statearr_45691;
})();
if(inst_45672){
var statearr_45692_45715 = state_45679__$1;
(statearr_45692_45715[(1)] = (12));

} else {
var statearr_45693_45716 = state_45679__$1;
(statearr_45693_45716[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45680 === (9))){
var inst_45649 = (state_45679[(7)]);
var inst_45666 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45649);
var state_45679__$1 = state_45679;
var statearr_45694_45717 = state_45679__$1;
(statearr_45694_45717[(2)] = inst_45666);

(statearr_45694_45717[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45680 === (5))){
var inst_45664 = (state_45679[(2)]);
var state_45679__$1 = state_45679;
if(cljs.core.truth_(inst_45664)){
var statearr_45695_45718 = state_45679__$1;
(statearr_45695_45718[(1)] = (9));

} else {
var statearr_45696_45719 = state_45679__$1;
(statearr_45696_45719[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45680 === (14))){
var inst_45677 = (state_45679[(2)]);
var state_45679__$1 = state_45679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45679__$1,inst_45677);
} else {
if((state_val_45680 === (10))){
var inst_45649 = (state_45679[(7)]);
var state_45679__$1 = state_45679;
var statearr_45697_45720 = state_45679__$1;
(statearr_45697_45720[(2)] = inst_45649);

(statearr_45697_45720[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45680 === (8))){
var inst_45661 = (state_45679[(2)]);
var state_45679__$1 = state_45679;
var statearr_45698_45721 = state_45679__$1;
(statearr_45698_45721[(2)] = inst_45661);

(statearr_45698_45721[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27741__auto__))
;
return ((function (switch__27629__auto__,c__27741__auto__){
return (function() {
var calculon$components$get_json_url_$_state_machine__27630__auto__ = null;
var calculon$components$get_json_url_$_state_machine__27630__auto____0 = (function (){
var statearr_45702 = [null,null,null,null,null,null,null,null,null];
(statearr_45702[(0)] = calculon$components$get_json_url_$_state_machine__27630__auto__);

(statearr_45702[(1)] = (1));

return statearr_45702;
});
var calculon$components$get_json_url_$_state_machine__27630__auto____1 = (function (state_45679){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_45679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e45703){if((e45703 instanceof Object)){
var ex__27633__auto__ = e45703;
var statearr_45704_45722 = state_45679;
(statearr_45704_45722[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45723 = state_45679;
state_45679 = G__45723;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
calculon$components$get_json_url_$_state_machine__27630__auto__ = function(state_45679){
switch(arguments.length){
case 0:
return calculon$components$get_json_url_$_state_machine__27630__auto____0.call(this);
case 1:
return calculon$components$get_json_url_$_state_machine__27630__auto____1.call(this,state_45679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
calculon$components$get_json_url_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = calculon$components$get_json_url_$_state_machine__27630__auto____0;
calculon$components$get_json_url_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = calculon$components$get_json_url_$_state_machine__27630__auto____1;
return calculon$components$get_json_url_$_state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto__))
})();
var state__27743__auto__ = (function (){var statearr_45705 = f__27742__auto__.call(null);
(statearr_45705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto__);

return statearr_45705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto__))
);

return c__27741__auto__;
});
calculon.components.aggregation_col_id = "aggregation-col";
calculon.components.dataset_id_enter = "dataset-id-enter";
calculon.components.dataset_id_select = "dataset-id-select";
calculon.components.get_class = (function calculon$components$get_class(score,scores){
var div = ((score - calculon.components.mean.call(null,scores)) / calculon.components.std.call(null,scores));
return new cljs.core.PersistentArrayMap(null, 5, [(0),"rgb(255, 229, 229)",(1),"rgb(255, 184, 184)",(2),"rgb(255, 138, 138)",(3),"rgb(255, 92, 92)",(4),"rgb(255, 0, 0)"], null).call(null,cljs.core.apply.call(null,cljs.core.max,cljs.core.map_indexed.call(null,((function (div){
return (function (p1__45725_SHARP_,p2__45724_SHARP_){
if((div > p2__45724_SHARP_)){
return p1__45725_SHARP_;
} else {
return (0);
}
});})(div))
,calculon.components.linspace.call(null,(0),(2),(5)))));
});
calculon.components.full_name = (function calculon$components$full_name(x){
var G__45727 = x;
if(cljs.core.keyword_QMARK_){
return cljs.core.subs.call(null,[cljs.core.str(G__45727)].join(''),(1));
} else {
return G__45727;
}
});
calculon.components.get_selected_value = (function calculon$components$get_selected_value(id){
var el = document.getElementById(id);
return (el.options[el.selectedIndex]).value;
});
calculon.components.get_aggregation_col = (function calculon$components$get_aggregation_col(){
return cljs.core.keyword.call(null,calculon.components.get_selected_value.call(null,calculon.components.aggregation_col_id));
});
calculon.components.get_dataset_id = (function calculon$components$get_dataset_id(){
var temp__4655__auto__ = document.getElementById(calculon.components.dataset_id_enter).value;
if(cljs.core.truth_(temp__4655__auto__)){
var id = temp__4655__auto__;
return id;
} else {
return calculon.components.get_selected_value.call(null,calculon.components.dataset_id_select);
}
});
calculon.components.data_loader = (function calculon$components$data_loader(state){
var attrs45794 = (function (){var map__45795 = cljs.core.deref.call(null,state);
var map__45795__$1 = ((((!((map__45795 == null)))?((((map__45795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45795):map__45795);
var aggregation_col = cljs.core.get.call(null,map__45795__$1,new cljs.core.Keyword(null,"aggregation-col","aggregation-col",-247721351));
var data = cljs.core.get.call(null,map__45795__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var datasets = cljs.core.get.call(null,map__45795__$1,new cljs.core.Keyword(null,"datasets","datasets",1896364419));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Calculate the s-Values for a dataset grouped by a chosen column"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.highlight","span.highlight",-1499625131),"By JSON URL:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#url","input#url",-1215414237),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onBlur","onBlur",229342509),((function (map__45795,map__45795__$1,aggregation_col,data,datasets){
return (function (p1__45728_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"json-url","json-url",1986159085),p1__45728_SHARP_.target.value);
});})(map__45795,map__45795__$1,aggregation_col,data,datasets))
,new cljs.core.Keyword(null,"size","size",1098693007),(60),new cljs.core.Keyword(null,"value","value",305978217),calculon.components.default_json_url], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__45795,map__45795__$1,aggregation_col,data,datasets){
return (function (){
return calculon.components.get_json_url.call(null,state);
});})(map__45795,map__45795__$1,aggregation_col,data,datasets))
,new cljs.core.Keyword(null,"value","value",305978217),"Load"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.disjunction-spacer","span.disjunction-spacer",2027384219),"or"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.highlight","span.highlight",-1499625131),"Ona: username",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#username","input#username",-1982043000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onBlur","onBlur",229342509),((function (map__45795,map__45795__$1,aggregation_col,data,datasets){
return (function (p1__45729_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"username","username",1605666410),p1__45729_SHARP_.target.value);
});})(map__45795,map__45795__$1,aggregation_col,data,datasets))
], null)], null),"password",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#password","input#password",12862793),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onBlur","onBlur",229342509),((function (map__45795,map__45795__$1,aggregation_col,data,datasets){
return (function (p1__45730_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"password","password",417022471),p1__45730_SHARP_.target.value);
});})(map__45795,map__45795__$1,aggregation_col,data,datasets))
,new cljs.core.Keyword(null,"type","type",1174270348),"password"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__45795,map__45795__$1,aggregation_col,data,datasets){
return (function (){
return calculon.components.get_datasets.call(null,state);
});})(map__45795,map__45795__$1,aggregation_col,data,datasets))
,new cljs.core.Keyword(null,"value","value",305978217),"Load"], null)], null)], null)], null),(cljs.core.truth_(datasets)?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),calculon.components.dataset_id_select,new cljs.core.Keyword(null,"key","key",-1516042587),"dataset-id-select"], null),(function (){var iter__25881__auto__ = ((function (map__45795,map__45795__$1,aggregation_col,data,datasets){
return (function calculon$components$data_loader_$_iter__45797(s__45798){
return (new cljs.core.LazySeq(null,((function (map__45795,map__45795__$1,aggregation_col,data,datasets){
return (function (){
var s__45798__$1 = s__45798;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__45798__$1);
if(temp__4657__auto__){
var s__45798__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45798__$2)){
var c__25879__auto__ = cljs.core.chunk_first.call(null,s__45798__$2);
var size__25880__auto__ = cljs.core.count.call(null,c__25879__auto__);
var b__45800 = cljs.core.chunk_buffer.call(null,size__25880__auto__);
if((function (){var i__45799 = (0);
while(true){
if((i__45799 < size__25880__auto__)){
var map__45805 = cljs.core._nth.call(null,c__25879__auto__,i__45799);
var map__45805__$1 = ((((!((map__45805 == null)))?((((map__45805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45805):map__45805);
var formid = cljs.core.get.call(null,map__45805__$1,new cljs.core.Keyword(null,"formid","formid",-2121398991));
var title = cljs.core.get.call(null,map__45805__$1,new cljs.core.Keyword(null,"title","title",636505583));
cljs.core.chunk_append.call(null,b__45800,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),formid,new cljs.core.Keyword(null,"value","value",305978217),formid], null),title], null));

var G__45857 = (i__45799 + (1));
i__45799 = G__45857;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45800),calculon$components$data_loader_$_iter__45797.call(null,cljs.core.chunk_rest.call(null,s__45798__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45800),null);
}
} else {
var map__45807 = cljs.core.first.call(null,s__45798__$2);
var map__45807__$1 = ((((!((map__45807 == null)))?((((map__45807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45807):map__45807);
var formid = cljs.core.get.call(null,map__45807__$1,new cljs.core.Keyword(null,"formid","formid",-2121398991));
var title = cljs.core.get.call(null,map__45807__$1,new cljs.core.Keyword(null,"title","title",636505583));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),formid,new cljs.core.Keyword(null,"value","value",305978217),formid], null),title], null),calculon$components$data_loader_$_iter__45797.call(null,cljs.core.rest.call(null,s__45798__$2)));
}
} else {
return null;
}
break;
}
});})(map__45795,map__45795__$1,aggregation_col,data,datasets))
,null,null));
});})(map__45795,map__45795__$1,aggregation_col,data,datasets))
;
return iter__25881__auto__.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"title","title",636505583),datasets));
})()], null)," or dataset ID ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),"dataset-id-enter",new cljs.core.Keyword(null,"id","id",-1388402092),calculon.components.dataset_id_enter,new cljs.core.Keyword(null,"value","value",305978217),(137955),new cljs.core.Keyword(null,"type","type",1174270348),"number"], null)], null)," only considers 1000 rows ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),"dataset-id-submit",new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__45795,map__45795__$1,aggregation_col,data,datasets){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dataset-id","dataset-id",1732799562),calculon.components.get_dataset_id.call(null));

return calculon.components.get_data.call(null,state);
});})(map__45795,map__45795__$1,aggregation_col,data,datasets))
,new cljs.core.Keyword(null,"value","value",305978217),"Load"], null)], null)], null):null),(cljs.core.truth_((function (){var and__25089__auto__ = data;
if(cljs.core.truth_(and__25089__auto__)){
return !((cljs.core.count.call(null,data) === (0)));
} else {
return and__25089__auto__;
}
})())?(function (){var columns = cljs.core.sort.call(null,cljs.core.map.call(null,calculon.components.full_name,cljs.core.distinct.call(null,cljs.core.flatten.call(null,cljs.core.map.call(null,cljs.core.keys,data)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.grouping","p.grouping",-2032586470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"aggregation-column"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.highlight","span.highlight",-1499625131),"Grouping column: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),calculon.components.aggregation_col_id,new cljs.core.Keyword(null,"key","key",-1516042587),"agg-col-select"], null),(function (){var iter__25881__auto__ = ((function (columns,map__45795,map__45795__$1,aggregation_col,data,datasets){
return (function calculon$components$data_loader_$_iter__45809(s__45810){
return (new cljs.core.LazySeq(null,((function (columns,map__45795,map__45795__$1,aggregation_col,data,datasets){
return (function (){
var s__45810__$1 = s__45810;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__45810__$1);
if(temp__4657__auto__){
var s__45810__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45810__$2)){
var c__25879__auto__ = cljs.core.chunk_first.call(null,s__45810__$2);
var size__25880__auto__ = cljs.core.count.call(null,c__25879__auto__);
var b__45812 = cljs.core.chunk_buffer.call(null,size__25880__auto__);
if((function (){var i__45811 = (0);
while(true){
if((i__45811 < size__25880__auto__)){
var col = cljs.core._nth.call(null,c__25879__auto__,i__45811);
cljs.core.chunk_append.call(null,b__45812,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),col,new cljs.core.Keyword(null,"value","value",305978217),col], null),col], null));

var G__45858 = (i__45811 + (1));
i__45811 = G__45858;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45812),calculon$components$data_loader_$_iter__45809.call(null,cljs.core.chunk_rest.call(null,s__45810__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45812),null);
}
} else {
var col = cljs.core.first.call(null,s__45810__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),col,new cljs.core.Keyword(null,"value","value",305978217),col], null),col], null),calculon$components$data_loader_$_iter__45809.call(null,cljs.core.rest.call(null,s__45810__$2)));
}
} else {
return null;
}
break;
}
});})(columns,map__45795,map__45795__$1,aggregation_col,data,datasets))
,null,null));
});})(columns,map__45795,map__45795__$1,aggregation_col,data,datasets))
;
return iter__25881__auto__.call(null,columns);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),"agg-col-submit",new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (columns,map__45795,map__45795__$1,aggregation_col,data,datasets){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"aggregation-col","aggregation-col",-247721351),calculon.components.get_aggregation_col.call(null));
});})(columns,map__45795,map__45795__$1,aggregation_col,data,datasets))
,new cljs.core.Keyword(null,"value","value",305978217),"Compute s-Values"], null)], null)], null)], null),(cljs.core.truth_(aggregation_col)?(function (){var cols__GT_scores = calculon.components.run_algorithm.call(null,data,aggregation_col);
var enumerators = cljs.core.sort.call(null,cljs.core.keys.call(null,cljs.core.last.call(null,cljs.core.first.call(null,cols__GT_scores))));
var averages = calculon.components.compute_averages.call(null,cols__GT_scores);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.count.call(null,cols__GT_scores)," categorical of ",cljs.core.count.call(null,columns)," total columns included below."], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"table"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"head"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.highlight","tr.highlight",-1646263788),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.column-names","th.column-names",-390267629),"Interviewer"], null),(function (){var iter__25881__auto__ = ((function (cols__GT_scores,enumerators,averages,columns,map__45795,map__45795__$1,aggregation_col,data,datasets){
return (function calculon$components$data_loader_$_iter__45813(s__45814){
return (new cljs.core.LazySeq(null,((function (cols__GT_scores,enumerators,averages,columns,map__45795,map__45795__$1,aggregation_col,data,datasets){
return (function (){
var s__45814__$1 = s__45814;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__45814__$1);
if(temp__4657__auto__){
var s__45814__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45814__$2)){
var c__25879__auto__ = cljs.core.chunk_first.call(null,s__45814__$2);
var size__25880__auto__ = cljs.core.count.call(null,c__25879__auto__);
var b__45816 = cljs.core.chunk_buffer.call(null,size__25880__auto__);
if((function (){var i__45815 = (0);
while(true){
if((i__45815 < size__25880__auto__)){
var header = cljs.core._nth.call(null,c__25879__auto__,i__45815);
cljs.core.chunk_append.call(null,b__45816,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),header], null),header], null));

var G__45859 = (i__45815 + (1));
i__45815 = G__45859;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45816),calculon$components$data_loader_$_iter__45813.call(null,cljs.core.chunk_rest.call(null,s__45814__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45816),null);
}
} else {
var header = cljs.core.first.call(null,s__45814__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),header], null),header], null),calculon$components$data_loader_$_iter__45813.call(null,cljs.core.rest.call(null,s__45814__$2)));
}
} else {
return null;
}
break;
}
});})(cols__GT_scores,enumerators,averages,columns,map__45795,map__45795__$1,aggregation_col,data,datasets))
,null,null));
});})(cols__GT_scores,enumerators,averages,columns,map__45795,map__45795__$1,aggregation_col,data,datasets))
;
return iter__25881__auto__.call(null,enumerators);
})()], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"body"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.column-names","td.column-names",1768919889),"Average"], null),(function (){var iter__25881__auto__ = ((function (cols__GT_scores,enumerators,averages,columns,map__45795,map__45795__$1,aggregation_col,data,datasets){
return (function calculon$components$data_loader_$_iter__45817(s__45818){
return (new cljs.core.LazySeq(null,((function (cols__GT_scores,enumerators,averages,columns,map__45795,map__45795__$1,aggregation_col,data,datasets){
return (function (){
var s__45818__$1 = s__45818;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__45818__$1);
if(temp__4657__auto__){
var s__45818__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45818__$2)){
var c__25879__auto__ = cljs.core.chunk_first.call(null,s__45818__$2);
var size__25880__auto__ = cljs.core.count.call(null,c__25879__auto__);
var b__45820 = cljs.core.chunk_buffer.call(null,size__25880__auto__);
if((function (){var i__45819 = (0);
while(true){
if((i__45819 < size__25880__auto__)){
var average = cljs.core._nth.call(null,c__25879__auto__,i__45819);
cljs.core.chunk_append.call(null,b__45820,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),average,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["background-color",calculon.components.get_class.call(null,average,averages)], null)], null),goog.string.format("%.1f",average)], null));

var G__45860 = (i__45819 + (1));
i__45819 = G__45860;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45820),calculon$components$data_loader_$_iter__45817.call(null,cljs.core.chunk_rest.call(null,s__45818__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45820),null);
}
} else {
var average = cljs.core.first.call(null,s__45818__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),average,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["background-color",calculon.components.get_class.call(null,average,averages)], null)], null),goog.string.format("%.1f",average)], null),calculon$components$data_loader_$_iter__45817.call(null,cljs.core.rest.call(null,s__45818__$2)));
}
} else {
return null;
}
break;
}
});})(cols__GT_scores,enumerators,averages,columns,map__45795,map__45795__$1,aggregation_col,data,datasets))
,null,null));
});})(cols__GT_scores,enumerators,averages,columns,map__45795,map__45795__$1,aggregation_col,data,datasets))
;
return iter__25881__auto__.call(null,averages);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.highlight","tr.highlight",-1646263788),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.column-names","th.column-names",-390267629),"Form"], null),(function (){var iter__25881__auto__ = ((function (cols__GT_scores,enumerators,averages,columns,map__45795,map__45795__$1,aggregation_col,data,datasets){
return (function calculon$components$data_loader_$_iter__45821(s__45822){
return (new cljs.core.LazySeq(null,((function (cols__GT_scores,enumerators,averages,columns,map__45795,map__45795__$1,aggregation_col,data,datasets){
return (function (){
var s__45822__$1 = s__45822;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__45822__$1);
if(temp__4657__auto__){
var s__45822__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45822__$2)){
var c__25879__auto__ = cljs.core.chunk_first.call(null,s__45822__$2);
var size__25880__auto__ = cljs.core.count.call(null,c__25879__auto__);
var b__45824 = cljs.core.chunk_buffer.call(null,size__25880__auto__);
if((function (){var i__45823 = (0);
while(true){
if((i__45823 < size__25880__auto__)){
var header = cljs.core._nth.call(null,c__25879__auto__,i__45823);
cljs.core.chunk_append.call(null,b__45824,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),header], null)], null));

var G__45861 = (i__45823 + (1));
i__45823 = G__45861;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45824),calculon$components$data_loader_$_iter__45821.call(null,cljs.core.chunk_rest.call(null,s__45822__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45824),null);
}
} else {
var header = cljs.core.first.call(null,s__45822__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),header], null)], null),calculon$components$data_loader_$_iter__45821.call(null,cljs.core.rest.call(null,s__45822__$2)));
}
} else {
return null;
}
break;
}
});})(cols__GT_scores,enumerators,averages,columns,map__45795,map__45795__$1,aggregation_col,data,datasets))
,null,null));
});})(cols__GT_scores,enumerators,averages,columns,map__45795,map__45795__$1,aggregation_col,data,datasets))
;
return iter__25881__auto__.call(null,enumerators);
})()], null),(function (){var iter__25881__auto__ = ((function (cols__GT_scores,enumerators,averages,columns,map__45795,map__45795__$1,aggregation_col,data,datasets){
return (function calculon$components$data_loader_$_iter__45825(s__45826){
return (new cljs.core.LazySeq(null,((function (cols__GT_scores,enumerators,averages,columns,map__45795,map__45795__$1,aggregation_col,data,datasets){
return (function (){
var s__45826__$1 = s__45826;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__45826__$1);
if(temp__4657__auto__){
var s__45826__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45826__$2)){
var c__25879__auto__ = cljs.core.chunk_first.call(null,s__45826__$2);
var size__25880__auto__ = cljs.core.count.call(null,c__25879__auto__);
var b__45828 = cljs.core.chunk_buffer.call(null,size__25880__auto__);
if((function (){var i__45827 = (0);
while(true){
if((i__45827 < size__25880__auto__)){
var vec__45843 = cljs.core._nth.call(null,c__25879__auto__,i__45827);
var col = cljs.core.nth.call(null,vec__45843,(0),null);
var scores = cljs.core.nth.call(null,vec__45843,(1),null);
cljs.core.chunk_append.call(null,b__45828,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),calculon.components.full_name.call(null,col)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.column-names","td.column-names",1768919889),calculon.components.full_name.call(null,col)], null),(function (){var iter__25881__auto__ = ((function (i__45827,vec__45843,col,scores,c__25879__auto__,size__25880__auto__,b__45828,s__45826__$2,temp__4657__auto__,cols__GT_scores,enumerators,averages,columns,map__45795,map__45795__$1,aggregation_col,data,datasets){
return (function calculon$components$data_loader_$_iter__45825_$_iter__45846(s__45847){
return (new cljs.core.LazySeq(null,((function (i__45827,vec__45843,col,scores,c__25879__auto__,size__25880__auto__,b__45828,s__45826__$2,temp__4657__auto__,cols__GT_scores,enumerators,averages,columns,map__45795,map__45795__$1,aggregation_col,data,datasets){
return (function (){
var s__45847__$1 = s__45847;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__45847__$1);
if(temp__4657__auto____$1){
var s__45847__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45847__$2)){
var c__25879__auto____$1 = cljs.core.chunk_first.call(null,s__45847__$2);
var size__25880__auto____$1 = cljs.core.count.call(null,c__25879__auto____$1);
var b__45849 = cljs.core.chunk_buffer.call(null,size__25880__auto____$1);
if((function (){var i__45848 = (0);
while(true){
if((i__45848 < size__25880__auto____$1)){
var enumerator = cljs.core._nth.call(null,c__25879__auto____$1,i__45848);
var score = cljs.core.get.call(null,scores,enumerator);
var score_class = calculon.components.get_class.call(null,score,cljs.core.vals.call(null,scores));
cljs.core.chunk_append.call(null,b__45849,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(enumerator),cljs.core.str(score)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["background-color",score_class], null)], null),(((score < (1)))?"-":goog.string.format("%.1f",score))], null));

var G__45862 = (i__45848 + (1));
i__45848 = G__45862;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45849),calculon$components$data_loader_$_iter__45825_$_iter__45846.call(null,cljs.core.chunk_rest.call(null,s__45847__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45849),null);
}
} else {
var enumerator = cljs.core.first.call(null,s__45847__$2);
var score = cljs.core.get.call(null,scores,enumerator);
var score_class = calculon.components.get_class.call(null,score,cljs.core.vals.call(null,scores));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(enumerator),cljs.core.str(score)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["background-color",score_class], null)], null),(((score < (1)))?"-":goog.string.format("%.1f",score))], null),calculon$components$data_loader_$_iter__45825_$_iter__45846.call(null,cljs.core.rest.call(null,s__45847__$2)));
}
} else {
return null;
}
break;
}
});})(i__45827,vec__45843,col,scores,c__25879__auto__,size__25880__auto__,b__45828,s__45826__$2,temp__4657__auto__,cols__GT_scores,enumerators,averages,columns,map__45795,map__45795__$1,aggregation_col,data,datasets))
,null,null));
});})(i__45827,vec__45843,col,scores,c__25879__auto__,size__25880__auto__,b__45828,s__45826__$2,temp__4657__auto__,cols__GT_scores,enumerators,averages,columns,map__45795,map__45795__$1,aggregation_col,data,datasets))
;
return iter__25881__auto__.call(null,enumerators);
})()], null));

var G__45863 = (i__45827 + (1));
i__45827 = G__45863;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45828),calculon$components$data_loader_$_iter__45825.call(null,cljs.core.chunk_rest.call(null,s__45826__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45828),null);
}
} else {
var vec__45850 = cljs.core.first.call(null,s__45826__$2);
var col = cljs.core.nth.call(null,vec__45850,(0),null);
var scores = cljs.core.nth.call(null,vec__45850,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),calculon.components.full_name.call(null,col)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.column-names","td.column-names",1768919889),calculon.components.full_name.call(null,col)], null),(function (){var iter__25881__auto__ = ((function (vec__45850,col,scores,s__45826__$2,temp__4657__auto__,cols__GT_scores,enumerators,averages,columns,map__45795,map__45795__$1,aggregation_col,data,datasets){
return (function calculon$components$data_loader_$_iter__45825_$_iter__45853(s__45854){
return (new cljs.core.LazySeq(null,((function (vec__45850,col,scores,s__45826__$2,temp__4657__auto__,cols__GT_scores,enumerators,averages,columns,map__45795,map__45795__$1,aggregation_col,data,datasets){
return (function (){
var s__45854__$1 = s__45854;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__45854__$1);
if(temp__4657__auto____$1){
var s__45854__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45854__$2)){
var c__25879__auto__ = cljs.core.chunk_first.call(null,s__45854__$2);
var size__25880__auto__ = cljs.core.count.call(null,c__25879__auto__);
var b__45856 = cljs.core.chunk_buffer.call(null,size__25880__auto__);
if((function (){var i__45855 = (0);
while(true){
if((i__45855 < size__25880__auto__)){
var enumerator = cljs.core._nth.call(null,c__25879__auto__,i__45855);
var score = cljs.core.get.call(null,scores,enumerator);
var score_class = calculon.components.get_class.call(null,score,cljs.core.vals.call(null,scores));
cljs.core.chunk_append.call(null,b__45856,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(enumerator),cljs.core.str(score)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["background-color",score_class], null)], null),(((score < (1)))?"-":goog.string.format("%.1f",score))], null));

var G__45864 = (i__45855 + (1));
i__45855 = G__45864;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45856),calculon$components$data_loader_$_iter__45825_$_iter__45853.call(null,cljs.core.chunk_rest.call(null,s__45854__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45856),null);
}
} else {
var enumerator = cljs.core.first.call(null,s__45854__$2);
var score = cljs.core.get.call(null,scores,enumerator);
var score_class = calculon.components.get_class.call(null,score,cljs.core.vals.call(null,scores));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(enumerator),cljs.core.str(score)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["background-color",score_class], null)], null),(((score < (1)))?"-":goog.string.format("%.1f",score))], null),calculon$components$data_loader_$_iter__45825_$_iter__45853.call(null,cljs.core.rest.call(null,s__45854__$2)));
}
} else {
return null;
}
break;
}
});})(vec__45850,col,scores,s__45826__$2,temp__4657__auto__,cols__GT_scores,enumerators,averages,columns,map__45795,map__45795__$1,aggregation_col,data,datasets))
,null,null));
});})(vec__45850,col,scores,s__45826__$2,temp__4657__auto__,cols__GT_scores,enumerators,averages,columns,map__45795,map__45795__$1,aggregation_col,data,datasets))
;
return iter__25881__auto__.call(null,enumerators);
})()], null),calculon$components$data_loader_$_iter__45825.call(null,cljs.core.rest.call(null,s__45826__$2)));
}
} else {
return null;
}
break;
}
});})(cols__GT_scores,enumerators,averages,columns,map__45795,map__45795__$1,aggregation_col,data,datasets))
,null,null));
});})(cols__GT_scores,enumerators,averages,columns,map__45795,map__45795__$1,aggregation_col,data,datasets))
;
return iter__25881__auto__.call(null,cols__GT_scores);
})()], null)], null)], null);
})():null)], null);
})():"No data")], null);
})();
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs45794))?sablono.interpreter.attributes.call(null,attrs45794):null),((cljs.core.map_QMARK_.call(null,attrs45794))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45794)], null)));
});

//# sourceMappingURL=components.js.map?rel=1487886789578