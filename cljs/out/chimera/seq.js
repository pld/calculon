// Compiled by ClojureScript 1.9.229 {}
goog.provide('chimera.seq');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('chimera.string');
goog.require('clojure.set');
/**
 * Concat then turn into vector
 */
chimera.seq.concatv = cljs.core.comp.call(null,cljs.core.vec,cljs.core.concat);
chimera.seq.filter_first = cljs.core.comp.call(null,cljs.core.first,cljs.core.filter);
chimera.seq.not_empty_QMARK_ = cljs.core.complement.call(null,cljs.core.empty_QMARK_);
chimera.seq.select_values = cljs.core.comp.call(null,cljs.core.vals,cljs.core.select_keys);
chimera.seq.select_value = cljs.core.comp.call(null,cljs.core.first,chimera.seq.select_values);
/**
 * Return a list of all items that appear more than once in a sequence.
 */
chimera.seq.duplicates = (function chimera$seq$duplicates(l){
return cljs.core.keep.call(null,(function (p1__30997_SHARP_){
if((cljs.core.last.call(null,p1__30997_SHARP_) > (1))){
return cljs.core.first.call(null,p1__30997_SHARP_);
} else {
return null;
}
}),cljs.core.frequencies.call(null,l));
});
/**
 * True is map has all these keys.
 */
chimera.seq.has_keys_QMARK_ = (function chimera$seq$has_keys_QMARK_(m,keys){
return cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,m),keys);
});
/**
 * True if elem is in list, false otherwise.
 */
chimera.seq.in_QMARK_ = (function chimera$seq$in_QMARK_(list,elem){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,(function (p1__30998_SHARP_){
return cljs.core._EQ_.call(null,elem,p1__30998_SHARP_);
}),list));
});
chimera.seq.mapply = (function chimera$seq$mapply(var_args){
var args__26183__auto__ = [];
var len__26176__auto___31001 = arguments.length;
var i__26177__auto___31002 = (0);
while(true){
if((i__26177__auto___31002 < len__26176__auto___31001)){
args__26183__auto__.push((arguments[i__26177__auto___31002]));

var G__31003 = (i__26177__auto___31002 + (1));
i__26177__auto___31002 = G__31003;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return chimera.seq.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});

chimera.seq.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,cljs.core.butlast.call(null,args),cljs.core.last.call(null,args)));
});

chimera.seq.mapply.cljs$lang$maxFixedArity = (1);

chimera.seq.mapply.cljs$lang$applyTo = (function (seq30999){
var G__31000 = cljs.core.first.call(null,seq30999);
var seq30999__$1 = cljs.core.next.call(null,seq30999);
return chimera.seq.mapply.cljs$core$IFn$_invoke$arity$variadic(G__31000,seq30999__$1);
});

chimera.seq.sort_by_category = (function chimera$seq$sort_by_category(sort_by_key,collection){
return cljs.core.sort_by.call(null,(function (item){
return sort_by_key.call(null,new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(item));
}),collection);
});
/**
 * Apply a function to each value of a map. From http://goo.gl/JdwzZf
 */
chimera.seq.update_values = (function chimera$seq$update_values(var_args){
var args__26183__auto__ = [];
var len__26176__auto___31011 = arguments.length;
var i__26177__auto___31012 = (0);
while(true){
if((i__26177__auto___31012 < len__26176__auto___31011)){
args__26183__auto__.push((arguments[i__26177__auto___31012]));

var G__31013 = (i__26177__auto___31012 + (1));
i__26177__auto___31012 = G__31013;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((2) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((2)),(0),null)):null);
return chimera.seq.update_values.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26184__auto__);
});

chimera.seq.update_values.cljs$core$IFn$_invoke$arity$variadic = (function (m,f,args){
return cljs.core.reduce.call(null,(function (r,p__31007){
var vec__31008 = p__31007;
var k = cljs.core.nth.call(null,vec__31008,(0),null);
var v = cljs.core.nth.call(null,vec__31008,(1),null);
return cljs.core.assoc.call(null,r,k,cljs.core.apply.call(null,f,v,args));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});

chimera.seq.update_values.cljs$lang$maxFixedArity = (2);

chimera.seq.update_values.cljs$lang$applyTo = (function (seq31004){
var G__31005 = cljs.core.first.call(null,seq31004);
var seq31004__$1 = cljs.core.next.call(null,seq31004);
var G__31006 = cljs.core.first.call(null,seq31004__$1);
var seq31004__$2 = cljs.core.next.call(null,seq31004__$1);
return chimera.seq.update_values.cljs$core$IFn$_invoke$arity$variadic(G__31005,G__31006,seq31004__$2);
});

chimera.seq.sort_by_name = (function chimera$seq$sort_by_name(sort_by_key,collection){
return cljs.core.sort_by.call(null,(function (p1__31014_SHARP_){
return clojure.string.lower_case.call(null,sort_by_key.call(null,p1__31014_SHARP_));
}),collection);
});
/**
 * Removes elem from a vector by its position.
 */
chimera.seq.dissoc_vec = (function chimera$seq$dissoc_vec(coll,pos){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,coll,(0),pos),cljs.core.subvec.call(null,coll,(pos + (1)))));
});
/**
 * Like core/assoc-in but accepting multiple key vectors and values
 * (assoc-in* coll & args)
 */
chimera.seq.assoc_in_multi = (function chimera$seq$assoc_in_multi(var_args){
var args__26183__auto__ = [];
var len__26176__auto___31025 = arguments.length;
var i__26177__auto___31026 = (0);
while(true){
if((i__26177__auto___31026 < len__26176__auto___31025)){
args__26183__auto__.push((arguments[i__26177__auto___31026]));

var G__31027 = (i__26177__auto___31026 + (1));
i__26177__auto___31026 = G__31027;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return chimera.seq.assoc_in_multi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});

chimera.seq.assoc_in_multi.cljs$core$IFn$_invoke$arity$variadic = (function (coll,args){
if(cljs.core.even_QMARK_){
} else {
throw (new Error("Assert failed: even?"));
}

if(cljs.core.truth_(cljs.core.count.call(null,args))){
} else {
throw (new Error("Assert failed: (count args)"));
}

var pairs = cljs.core.partition.call(null,(2),args);
var reducer = ((function (pairs){
return (function (skeleton_map,p__31021){
var vec__31022 = p__31021;
var keys = cljs.core.nth.call(null,vec__31022,(0),null);
var value = cljs.core.nth.call(null,vec__31022,(1),null);
return cljs.core.assoc_in.call(null,skeleton_map,keys,value);
});})(pairs))
;
return cljs.core.reduce.call(null,reducer,coll,pairs);
});

chimera.seq.assoc_in_multi.cljs$lang$maxFixedArity = (1);

chimera.seq.assoc_in_multi.cljs$lang$applyTo = (function (seq31019){
var G__31020 = cljs.core.first.call(null,seq31019);
var seq31019__$1 = cljs.core.next.call(null,seq31019);
return chimera.seq.assoc_in_multi.cljs$core$IFn$_invoke$arity$variadic(G__31020,seq31019__$1);
});

/**
 * Deep merge any number of maps.
 */
chimera.seq.deep_merge = (function chimera$seq$deep_merge(var_args){
var args__26183__auto__ = [];
var len__26176__auto___31029 = arguments.length;
var i__26177__auto___31030 = (0);
while(true){
if((i__26177__auto___31030 < len__26176__auto___31029)){
args__26183__auto__.push((arguments[i__26177__auto___31030]));

var G__31031 = (i__26177__auto___31030 + (1));
i__26177__auto___31030 = G__31031;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((0) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((0)),(0),null)):null);
return chimera.seq.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__26184__auto__);
});

chimera.seq.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return cljs.core.apply.call(null,cljs.core.merge_with,(function (x,y){
if(cljs.core.map_QMARK_.call(null,y)){
return chimera.seq.deep_merge.call(null,x,y);
} else {
if(cljs.core.vector_QMARK_.call(null,y)){
return cljs.core.concat.call(null,x,y);
} else {
return y;

}
}
}),maps);
});

chimera.seq.deep_merge.cljs$lang$maxFixedArity = (0);

chimera.seq.deep_merge.cljs$lang$applyTo = (function (seq31028){
return chimera.seq.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31028));
});

/**
 * Apply func to pred matching k value to v.
 */
chimera.seq.fn_collection = (function chimera$seq$fn_collection(func,k,v,collection){
if(cljs.core.truth_(v)){
return func.call(null,(function (p1__31032_SHARP_){
return cljs.core._EQ_.call(null,v,k.call(null,p1__31032_SHARP_));
}),collection);
} else {
return collection;
}
});
/**
 * Keeps values in list maps where k value matchs v
 */
chimera.seq.filter_collection = (function chimera$seq$filter_collection(k,v,collection){
return chimera.seq.fn_collection.call(null,cljs.core.filter,k,v,collection);
});
/**
 * Removes values in list maps where k value matchs cond
 */
chimera.seq.filter_out_collection = (function chimera$seq$filter_out_collection(k,v,collection){
return chimera.seq.fn_collection.call(null,cljs.core.remove,k,v,collection);
});
/**
 * Remove map entries where the value is falsey.
 */
chimera.seq.remove_falsey_values = (function chimera$seq$remove_falsey_values(a_map){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,clojure.string.blank_QMARK_,cljs.core.second),a_map));
});
/**
 * Return collections with a key matching the query.
 */
chimera.seq.search_collection = (function chimera$seq$search_collection(var_args){
var args31033 = [];
var len__26176__auto___31040 = arguments.length;
var i__26177__auto___31041 = (0);
while(true){
if((i__26177__auto___31041 < len__26176__auto___31040)){
args31033.push((arguments[i__26177__auto___31041]));

var G__31042 = (i__26177__auto___31041 + (1));
i__26177__auto___31041 = G__31042;
continue;
} else {
}
break;
}

var G__31035 = args31033.length;
switch (G__31035) {
case 3:
return chimera.seq.search_collection.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chimera.seq.search_collection.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31033.length)].join('')));

}
});

chimera.seq.search_collection.cljs$core$IFn$_invoke$arity$3 = (function (query,collection,k){
return chimera.seq.search_collection.call(null,query,collection,k,true);
});

chimera.seq.search_collection.cljs$core$IFn$_invoke$arity$4 = (function (query,collection,k,case_insensitive_QMARK_){
var query_cased = (cljs.core.truth_(case_insensitive_QMARK_)?clojure.string.lower_case.call(null,query):query);
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__25881__auto__ = ((function (query_cased){
return (function chimera$seq$iter__31036(s__31037){
return (new cljs.core.LazySeq(null,((function (query_cased){
return (function (){
var s__31037__$1 = s__31037;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31037__$1);
if(temp__4657__auto__){
var s__31037__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31037__$2)){
var c__25879__auto__ = cljs.core.chunk_first.call(null,s__31037__$2);
var size__25880__auto__ = cljs.core.count.call(null,c__25879__auto__);
var b__31039 = cljs.core.chunk_buffer.call(null,size__25880__auto__);
if((function (){var i__31038 = (0);
while(true){
if((i__31038 < size__25880__auto__)){
var member = cljs.core._nth.call(null,c__25879__auto__,i__31038);
var v = k.call(null,member);
var v_cased = (cljs.core.truth_(case_insensitive_QMARK_)?clojure.string.lower_case.call(null,v):v);
if(cljs.core.truth_(chimera.string.substring_QMARK_.call(null,query_cased,v_cased))){
cljs.core.chunk_append.call(null,b__31039,member);

var G__31044 = (i__31038 + (1));
i__31038 = G__31044;
continue;
} else {
var G__31045 = (i__31038 + (1));
i__31038 = G__31045;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31039),chimera$seq$iter__31036.call(null,cljs.core.chunk_rest.call(null,s__31037__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31039),null);
}
} else {
var member = cljs.core.first.call(null,s__31037__$2);
var v = k.call(null,member);
var v_cased = (cljs.core.truth_(case_insensitive_QMARK_)?clojure.string.lower_case.call(null,v):v);
if(cljs.core.truth_(chimera.string.substring_QMARK_.call(null,query_cased,v_cased))){
return cljs.core.cons.call(null,member,chimera$seq$iter__31036.call(null,cljs.core.rest.call(null,s__31037__$2)));
} else {
var G__31046 = cljs.core.rest.call(null,s__31037__$2);
s__31037__$1 = G__31046;
continue;
}
}
} else {
return null;
}
break;
}
});})(query_cased))
,null,null));
});})(query_cased))
;
return iter__25881__auto__.call(null,collection);
})());
});

chimera.seq.search_collection.cljs$lang$maxFixedArity = 4;

/**
 * Returns the position of at which pred is true for items in coll.
 */
chimera.seq.positions = (function chimera$seq$positions(pred,coll){
return cljs.core.keep_indexed.call(null,(function (idx,x){
if(cljs.core.truth_(pred.call(null,x))){
return idx;
} else {
return null;
}
}),coll);
});
/**
 * Returns index of an item within a collection.
 */
chimera.seq.index_of = (function chimera$seq$index_of(coll,item){
return cljs.core.first.call(null,chimera.seq.positions.call(null,cljs.core.PersistentHashSet.fromArray([item], true),coll));
});
/**
 * Update map value in list based on key match
 */
chimera.seq.update_map_in_list = (function chimera$seq$update_map_in_list(list,map_to_update,key_to_match){
return cljs.core.mapv.call(null,(function (p1__31047_SHARP_){
if(cljs.core._EQ_.call(null,key_to_match.call(null,p1__31047_SHARP_),key_to_match.call(null,map_to_update))){
return map_to_update;
} else {
return p1__31047_SHARP_;
}
}),list);
});
/**
 * Basically lifted from http://stackoverflow.com/a/17902228/420386
 */
chimera.seq.flatten_map = (function chimera$seq$flatten_map(var_args){
var args31048 = [];
var len__26176__auto___31055 = arguments.length;
var i__26177__auto___31056 = (0);
while(true){
if((i__26177__auto___31056 < len__26176__auto___31055)){
args31048.push((arguments[i__26177__auto___31056]));

var G__31057 = (i__26177__auto___31056 + (1));
i__26177__auto___31056 = G__31057;
continue;
} else {
}
break;
}

var G__31050 = args31048.length;
switch (G__31050) {
case 1:
return chimera.seq.flatten_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chimera.seq.flatten_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chimera.seq.flatten_map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31048.length)].join('')));

}
});

chimera.seq.flatten_map.cljs$core$IFn$_invoke$arity$1 = (function (form){
return chimera.seq.flatten_map.call(null,form,"/");
});

chimera.seq.flatten_map.cljs$core$IFn$_invoke$arity$2 = (function (form,separator){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,chimera.seq.flatten_map.call(null,form,separator,null));
});

chimera.seq.flatten_map.cljs$core$IFn$_invoke$arity$3 = (function (form,separator,prefix){
return cljs.core.mapcat.call(null,(function (p__31051){
var vec__31052 = p__31051;
var key = cljs.core.nth.call(null,vec__31052,(0),null);
var value = cljs.core.nth.call(null,vec__31052,(1),null);
var full_prefix = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str(separator),cljs.core.str(cljs.core.name.call(null,key))].join(''):cljs.core.name.call(null,key));
if(cljs.core.map_QMARK_.call(null,value)){
return chimera.seq.flatten_map.call(null,value,separator,full_prefix);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_prefix,value], null)], null);
}
}),form);
});

chimera.seq.flatten_map.cljs$lang$maxFixedArity = 3;

/**
 * Return difference between 2 sequences.
 */
chimera.seq.diff = (function chimera$seq$diff(a,b){
return clojure.set.difference.call(null,cljs.core.set.call(null,a),cljs.core.set.call(null,b));
});
/**
 * Return difference between 2 sequences. Preserves ordering in first seq.
 */
chimera.seq.ordered_diff = (function chimera$seq$ordered_diff(a,b){
return cljs.core.filter.call(null,(function (p1__31059_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,b),p1__31059_SHARP_));
}),a);
});
/**
 * Merges two sequeneces
 */
chimera.seq.union = (function chimera$seq$union(a,b){
return clojure.set.union.call(null,cljs.core.set.call(null,a),cljs.core.set.call(null,b));
});
/**
 * Remove nil values from a sequence.
 */
chimera.seq.remove_nil = (function chimera$seq$remove_nil(l){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,l);
});
/**
 * Removes x from coll if present, and adds if absent.
 */
chimera.seq.toggle = (function chimera$seq$toggle(coll,x){
if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,coll),x)){
return cljs.core.remove.call(null,(function (p1__31060_SHARP_){
return cljs.core._EQ_.call(null,x,p1__31060_SHARP_);
}),coll);
} else {
return cljs.core.conj.call(null,coll,x);
}
});
/**
 * Given a seq, produces a two-el seq. [a b c] => [[0 a] [1 b] [2 c]].
 */
chimera.seq.indexed = (function chimera$seq$indexed(coll){
return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
});
chimera.seq.transpose = (function chimera$seq$transpose(m){
return cljs.core.apply.call(null,cljs.core.mapv,cljs.core.vector,m);
});
/**
 * Get the first map from a list of maps with the given value for key.
 */
chimera.seq.map_list__GT_map = (function chimera$seq$map_list__GT_map(map_list,k,v){
return chimera.seq.filter_first.call(null,(function (p1__31061_SHARP_){
return cljs.core._EQ_.call(null,k.call(null,p1__31061_SHARP_),v);
}),map_list);
});

//# sourceMappingURL=seq.js.map?rel=1487859337207