// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35270){
var map__35295 = p__35270;
var map__35295__$1 = ((((!((map__35295 == null)))?((((map__35295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35295):map__35295);
var m = map__35295__$1;
var n = cljs.core.get.call(null,map__35295__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35295__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35297_35319 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35298_35320 = null;
var count__35299_35321 = (0);
var i__35300_35322 = (0);
while(true){
if((i__35300_35322 < count__35299_35321)){
var f_35323 = cljs.core._nth.call(null,chunk__35298_35320,i__35300_35322);
cljs.core.println.call(null,"  ",f_35323);

var G__35324 = seq__35297_35319;
var G__35325 = chunk__35298_35320;
var G__35326 = count__35299_35321;
var G__35327 = (i__35300_35322 + (1));
seq__35297_35319 = G__35324;
chunk__35298_35320 = G__35325;
count__35299_35321 = G__35326;
i__35300_35322 = G__35327;
continue;
} else {
var temp__4657__auto___35328 = cljs.core.seq.call(null,seq__35297_35319);
if(temp__4657__auto___35328){
var seq__35297_35329__$1 = temp__4657__auto___35328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35297_35329__$1)){
var c__25912__auto___35330 = cljs.core.chunk_first.call(null,seq__35297_35329__$1);
var G__35331 = cljs.core.chunk_rest.call(null,seq__35297_35329__$1);
var G__35332 = c__25912__auto___35330;
var G__35333 = cljs.core.count.call(null,c__25912__auto___35330);
var G__35334 = (0);
seq__35297_35319 = G__35331;
chunk__35298_35320 = G__35332;
count__35299_35321 = G__35333;
i__35300_35322 = G__35334;
continue;
} else {
var f_35335 = cljs.core.first.call(null,seq__35297_35329__$1);
cljs.core.println.call(null,"  ",f_35335);

var G__35336 = cljs.core.next.call(null,seq__35297_35329__$1);
var G__35337 = null;
var G__35338 = (0);
var G__35339 = (0);
seq__35297_35319 = G__35336;
chunk__35298_35320 = G__35337;
count__35299_35321 = G__35338;
i__35300_35322 = G__35339;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35340 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25101__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25101__auto__)){
return or__25101__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35340);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35340)))?cljs.core.second.call(null,arglists_35340):arglists_35340));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35301_35341 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35302_35342 = null;
var count__35303_35343 = (0);
var i__35304_35344 = (0);
while(true){
if((i__35304_35344 < count__35303_35343)){
var vec__35305_35345 = cljs.core._nth.call(null,chunk__35302_35342,i__35304_35344);
var name_35346 = cljs.core.nth.call(null,vec__35305_35345,(0),null);
var map__35308_35347 = cljs.core.nth.call(null,vec__35305_35345,(1),null);
var map__35308_35348__$1 = ((((!((map__35308_35347 == null)))?((((map__35308_35347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35308_35347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35308_35347):map__35308_35347);
var doc_35349 = cljs.core.get.call(null,map__35308_35348__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35350 = cljs.core.get.call(null,map__35308_35348__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35346);

cljs.core.println.call(null," ",arglists_35350);

if(cljs.core.truth_(doc_35349)){
cljs.core.println.call(null," ",doc_35349);
} else {
}

var G__35351 = seq__35301_35341;
var G__35352 = chunk__35302_35342;
var G__35353 = count__35303_35343;
var G__35354 = (i__35304_35344 + (1));
seq__35301_35341 = G__35351;
chunk__35302_35342 = G__35352;
count__35303_35343 = G__35353;
i__35304_35344 = G__35354;
continue;
} else {
var temp__4657__auto___35355 = cljs.core.seq.call(null,seq__35301_35341);
if(temp__4657__auto___35355){
var seq__35301_35356__$1 = temp__4657__auto___35355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35301_35356__$1)){
var c__25912__auto___35357 = cljs.core.chunk_first.call(null,seq__35301_35356__$1);
var G__35358 = cljs.core.chunk_rest.call(null,seq__35301_35356__$1);
var G__35359 = c__25912__auto___35357;
var G__35360 = cljs.core.count.call(null,c__25912__auto___35357);
var G__35361 = (0);
seq__35301_35341 = G__35358;
chunk__35302_35342 = G__35359;
count__35303_35343 = G__35360;
i__35304_35344 = G__35361;
continue;
} else {
var vec__35310_35362 = cljs.core.first.call(null,seq__35301_35356__$1);
var name_35363 = cljs.core.nth.call(null,vec__35310_35362,(0),null);
var map__35313_35364 = cljs.core.nth.call(null,vec__35310_35362,(1),null);
var map__35313_35365__$1 = ((((!((map__35313_35364 == null)))?((((map__35313_35364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35313_35364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35313_35364):map__35313_35364);
var doc_35366 = cljs.core.get.call(null,map__35313_35365__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35367 = cljs.core.get.call(null,map__35313_35365__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35363);

cljs.core.println.call(null," ",arglists_35367);

if(cljs.core.truth_(doc_35366)){
cljs.core.println.call(null," ",doc_35366);
} else {
}

var G__35368 = cljs.core.next.call(null,seq__35301_35356__$1);
var G__35369 = null;
var G__35370 = (0);
var G__35371 = (0);
seq__35301_35341 = G__35368;
chunk__35302_35342 = G__35369;
count__35303_35343 = G__35370;
i__35304_35344 = G__35371;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__35315 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35316 = null;
var count__35317 = (0);
var i__35318 = (0);
while(true){
if((i__35318 < count__35317)){
var role = cljs.core._nth.call(null,chunk__35316,i__35318);
var temp__4657__auto___35372__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35372__$1)){
var spec_35373 = temp__4657__auto___35372__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35373));
} else {
}

var G__35374 = seq__35315;
var G__35375 = chunk__35316;
var G__35376 = count__35317;
var G__35377 = (i__35318 + (1));
seq__35315 = G__35374;
chunk__35316 = G__35375;
count__35317 = G__35376;
i__35318 = G__35377;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35315);
if(temp__4657__auto____$1){
var seq__35315__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35315__$1)){
var c__25912__auto__ = cljs.core.chunk_first.call(null,seq__35315__$1);
var G__35378 = cljs.core.chunk_rest.call(null,seq__35315__$1);
var G__35379 = c__25912__auto__;
var G__35380 = cljs.core.count.call(null,c__25912__auto__);
var G__35381 = (0);
seq__35315 = G__35378;
chunk__35316 = G__35379;
count__35317 = G__35380;
i__35318 = G__35381;
continue;
} else {
var role = cljs.core.first.call(null,seq__35315__$1);
var temp__4657__auto___35382__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35382__$2)){
var spec_35383 = temp__4657__auto___35382__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35383));
} else {
}

var G__35384 = cljs.core.next.call(null,seq__35315__$1);
var G__35385 = null;
var G__35386 = (0);
var G__35387 = (0);
seq__35315 = G__35384;
chunk__35316 = G__35385;
count__35317 = G__35386;
i__35318 = G__35387;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1487859344031