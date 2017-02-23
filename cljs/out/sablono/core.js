// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__31603__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__31600 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__31601 = cljs.core.seq.call(null,vec__31600);
var first__31602 = cljs.core.first.call(null,seq__31601);
var seq__31601__$1 = cljs.core.next.call(null,seq__31601);
var tag = first__31602;
var body = seq__31601__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__31603 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31604__i = 0, G__31604__a = new Array(arguments.length -  0);
while (G__31604__i < G__31604__a.length) {G__31604__a[G__31604__i] = arguments[G__31604__i + 0]; ++G__31604__i;}
  args = new cljs.core.IndexedSeq(G__31604__a,0);
} 
return G__31603__delegate.call(this,args);};
G__31603.cljs$lang$maxFixedArity = 0;
G__31603.cljs$lang$applyTo = (function (arglist__31605){
var args = cljs.core.seq(arglist__31605);
return G__31603__delegate(args);
});
G__31603.cljs$core$IFn$_invoke$arity$variadic = G__31603__delegate;
return G__31603;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25881__auto__ = (function sablono$core$update_arglists_$_iter__31610(s__31611){
return (new cljs.core.LazySeq(null,(function (){
var s__31611__$1 = s__31611;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31611__$1);
if(temp__4657__auto__){
var s__31611__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31611__$2)){
var c__25879__auto__ = cljs.core.chunk_first.call(null,s__31611__$2);
var size__25880__auto__ = cljs.core.count.call(null,c__25879__auto__);
var b__31613 = cljs.core.chunk_buffer.call(null,size__25880__auto__);
if((function (){var i__31612 = (0);
while(true){
if((i__31612 < size__25880__auto__)){
var args = cljs.core._nth.call(null,c__25879__auto__,i__31612);
cljs.core.chunk_append.call(null,b__31613,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__31614 = (i__31612 + (1));
i__31612 = G__31614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31613),sablono$core$update_arglists_$_iter__31610.call(null,cljs.core.chunk_rest.call(null,s__31611__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31613),null);
}
} else {
var args = cljs.core.first.call(null,s__31611__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__31610.call(null,cljs.core.rest.call(null,s__31611__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25881__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__26183__auto__ = [];
var len__26176__auto___31620 = arguments.length;
var i__26177__auto___31621 = (0);
while(true){
if((i__26177__auto___31621 < len__26176__auto___31620)){
args__26183__auto__.push((arguments[i__26177__auto___31621]));

var G__31622 = (i__26177__auto___31621 + (1));
i__26177__auto___31621 = G__31622;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((0) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__26184__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25881__auto__ = (function sablono$core$iter__31616(s__31617){
return (new cljs.core.LazySeq(null,(function (){
var s__31617__$1 = s__31617;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31617__$1);
if(temp__4657__auto__){
var s__31617__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31617__$2)){
var c__25879__auto__ = cljs.core.chunk_first.call(null,s__31617__$2);
var size__25880__auto__ = cljs.core.count.call(null,c__25879__auto__);
var b__31619 = cljs.core.chunk_buffer.call(null,size__25880__auto__);
if((function (){var i__31618 = (0);
while(true){
if((i__31618 < size__25880__auto__)){
var style = cljs.core._nth.call(null,c__25879__auto__,i__31618);
cljs.core.chunk_append.call(null,b__31619,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__31623 = (i__31618 + (1));
i__31618 = G__31623;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31619),sablono$core$iter__31616.call(null,cljs.core.chunk_rest.call(null,s__31617__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31619),null);
}
} else {
var style = cljs.core.first.call(null,s__31617__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__31616.call(null,cljs.core.rest.call(null,s__31617__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25881__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq31615){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31615));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to31624 = (function sablono$core$link_to31624(var_args){
var args__26183__auto__ = [];
var len__26176__auto___31627 = arguments.length;
var i__26177__auto___31628 = (0);
while(true){
if((i__26177__auto___31628 < len__26176__auto___31627)){
args__26183__auto__.push((arguments[i__26177__auto___31628]));

var G__31629 = (i__26177__auto___31628 + (1));
i__26177__auto___31628 = G__31629;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to31624.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});

sablono.core.link_to31624.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to31624.cljs$lang$maxFixedArity = (1);

sablono.core.link_to31624.cljs$lang$applyTo = (function (seq31625){
var G__31626 = cljs.core.first.call(null,seq31625);
var seq31625__$1 = cljs.core.next.call(null,seq31625);
return sablono.core.link_to31624.cljs$core$IFn$_invoke$arity$variadic(G__31626,seq31625__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to31624);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to31630 = (function sablono$core$mail_to31630(var_args){
var args__26183__auto__ = [];
var len__26176__auto___31637 = arguments.length;
var i__26177__auto___31638 = (0);
while(true){
if((i__26177__auto___31638 < len__26176__auto___31637)){
args__26183__auto__.push((arguments[i__26177__auto___31638]));

var G__31639 = (i__26177__auto___31638 + (1));
i__26177__auto___31638 = G__31639;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to31630.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});

sablono.core.mail_to31630.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__31633){
var vec__31634 = p__31633;
var content = cljs.core.nth.call(null,vec__31634,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__25101__auto__ = content;
if(cljs.core.truth_(or__25101__auto__)){
return or__25101__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to31630.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to31630.cljs$lang$applyTo = (function (seq31631){
var G__31632 = cljs.core.first.call(null,seq31631);
var seq31631__$1 = cljs.core.next.call(null,seq31631);
return sablono.core.mail_to31630.cljs$core$IFn$_invoke$arity$variadic(G__31632,seq31631__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to31630);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list31640 = (function sablono$core$unordered_list31640(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25881__auto__ = (function sablono$core$unordered_list31640_$_iter__31645(s__31646){
return (new cljs.core.LazySeq(null,(function (){
var s__31646__$1 = s__31646;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31646__$1);
if(temp__4657__auto__){
var s__31646__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31646__$2)){
var c__25879__auto__ = cljs.core.chunk_first.call(null,s__31646__$2);
var size__25880__auto__ = cljs.core.count.call(null,c__25879__auto__);
var b__31648 = cljs.core.chunk_buffer.call(null,size__25880__auto__);
if((function (){var i__31647 = (0);
while(true){
if((i__31647 < size__25880__auto__)){
var x = cljs.core._nth.call(null,c__25879__auto__,i__31647);
cljs.core.chunk_append.call(null,b__31648,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__31649 = (i__31647 + (1));
i__31647 = G__31649;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31648),sablono$core$unordered_list31640_$_iter__31645.call(null,cljs.core.chunk_rest.call(null,s__31646__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31648),null);
}
} else {
var x = cljs.core.first.call(null,s__31646__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list31640_$_iter__31645.call(null,cljs.core.rest.call(null,s__31646__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25881__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list31640);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list31650 = (function sablono$core$ordered_list31650(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25881__auto__ = (function sablono$core$ordered_list31650_$_iter__31655(s__31656){
return (new cljs.core.LazySeq(null,(function (){
var s__31656__$1 = s__31656;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31656__$1);
if(temp__4657__auto__){
var s__31656__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31656__$2)){
var c__25879__auto__ = cljs.core.chunk_first.call(null,s__31656__$2);
var size__25880__auto__ = cljs.core.count.call(null,c__25879__auto__);
var b__31658 = cljs.core.chunk_buffer.call(null,size__25880__auto__);
if((function (){var i__31657 = (0);
while(true){
if((i__31657 < size__25880__auto__)){
var x = cljs.core._nth.call(null,c__25879__auto__,i__31657);
cljs.core.chunk_append.call(null,b__31658,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__31659 = (i__31657 + (1));
i__31657 = G__31659;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31658),sablono$core$ordered_list31650_$_iter__31655.call(null,cljs.core.chunk_rest.call(null,s__31656__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31658),null);
}
} else {
var x = cljs.core.first.call(null,s__31656__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list31650_$_iter__31655.call(null,cljs.core.rest.call(null,s__31656__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25881__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list31650);
/**
 * Create an image element.
 */
sablono.core.image31660 = (function sablono$core$image31660(var_args){
var args31661 = [];
var len__26176__auto___31664 = arguments.length;
var i__26177__auto___31665 = (0);
while(true){
if((i__26177__auto___31665 < len__26176__auto___31664)){
args31661.push((arguments[i__26177__auto___31665]));

var G__31666 = (i__26177__auto___31665 + (1));
i__26177__auto___31665 = G__31666;
continue;
} else {
}
break;
}

var G__31663 = args31661.length;
switch (G__31663) {
case 1:
return sablono.core.image31660.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image31660.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31661.length)].join('')));

}
});

sablono.core.image31660.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image31660.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image31660.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image31660);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__31668_SHARP_,p2__31669_SHARP_){
return [cljs.core.str(p1__31668_SHARP_),cljs.core.str("["),cljs.core.str(p2__31669_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__31670_SHARP_,p2__31671_SHARP_){
return [cljs.core.str(p1__31670_SHARP_),cljs.core.str("-"),cljs.core.str(p2__31671_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__25101__auto__ = value;
if(cljs.core.truth_(or__25101__auto__)){
return or__25101__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field31672 = (function sablono$core$color_field31672(var_args){
var args31673 = [];
var len__26176__auto___31740 = arguments.length;
var i__26177__auto___31741 = (0);
while(true){
if((i__26177__auto___31741 < len__26176__auto___31740)){
args31673.push((arguments[i__26177__auto___31741]));

var G__31742 = (i__26177__auto___31741 + (1));
i__26177__auto___31741 = G__31742;
continue;
} else {
}
break;
}

var G__31675 = args31673.length;
switch (G__31675) {
case 1:
return sablono.core.color_field31672.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field31672.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31673.length)].join('')));

}
});

sablono.core.color_field31672.cljs$core$IFn$_invoke$arity$1 = (function (name__31587__auto__){
return sablono.core.color_field31672.call(null,name__31587__auto__,null);
});

sablono.core.color_field31672.cljs$core$IFn$_invoke$arity$2 = (function (name__31587__auto__,value__31588__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__31587__auto__,value__31588__auto__);
});

sablono.core.color_field31672.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field31672);

/**
 * Creates a date input field.
 */
sablono.core.date_field31676 = (function sablono$core$date_field31676(var_args){
var args31677 = [];
var len__26176__auto___31744 = arguments.length;
var i__26177__auto___31745 = (0);
while(true){
if((i__26177__auto___31745 < len__26176__auto___31744)){
args31677.push((arguments[i__26177__auto___31745]));

var G__31746 = (i__26177__auto___31745 + (1));
i__26177__auto___31745 = G__31746;
continue;
} else {
}
break;
}

var G__31679 = args31677.length;
switch (G__31679) {
case 1:
return sablono.core.date_field31676.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field31676.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31677.length)].join('')));

}
});

sablono.core.date_field31676.cljs$core$IFn$_invoke$arity$1 = (function (name__31587__auto__){
return sablono.core.date_field31676.call(null,name__31587__auto__,null);
});

sablono.core.date_field31676.cljs$core$IFn$_invoke$arity$2 = (function (name__31587__auto__,value__31588__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__31587__auto__,value__31588__auto__);
});

sablono.core.date_field31676.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field31676);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field31680 = (function sablono$core$datetime_field31680(var_args){
var args31681 = [];
var len__26176__auto___31748 = arguments.length;
var i__26177__auto___31749 = (0);
while(true){
if((i__26177__auto___31749 < len__26176__auto___31748)){
args31681.push((arguments[i__26177__auto___31749]));

var G__31750 = (i__26177__auto___31749 + (1));
i__26177__auto___31749 = G__31750;
continue;
} else {
}
break;
}

var G__31683 = args31681.length;
switch (G__31683) {
case 1:
return sablono.core.datetime_field31680.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field31680.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31681.length)].join('')));

}
});

sablono.core.datetime_field31680.cljs$core$IFn$_invoke$arity$1 = (function (name__31587__auto__){
return sablono.core.datetime_field31680.call(null,name__31587__auto__,null);
});

sablono.core.datetime_field31680.cljs$core$IFn$_invoke$arity$2 = (function (name__31587__auto__,value__31588__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__31587__auto__,value__31588__auto__);
});

sablono.core.datetime_field31680.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field31680);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field31684 = (function sablono$core$datetime_local_field31684(var_args){
var args31685 = [];
var len__26176__auto___31752 = arguments.length;
var i__26177__auto___31753 = (0);
while(true){
if((i__26177__auto___31753 < len__26176__auto___31752)){
args31685.push((arguments[i__26177__auto___31753]));

var G__31754 = (i__26177__auto___31753 + (1));
i__26177__auto___31753 = G__31754;
continue;
} else {
}
break;
}

var G__31687 = args31685.length;
switch (G__31687) {
case 1:
return sablono.core.datetime_local_field31684.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field31684.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31685.length)].join('')));

}
});

sablono.core.datetime_local_field31684.cljs$core$IFn$_invoke$arity$1 = (function (name__31587__auto__){
return sablono.core.datetime_local_field31684.call(null,name__31587__auto__,null);
});

sablono.core.datetime_local_field31684.cljs$core$IFn$_invoke$arity$2 = (function (name__31587__auto__,value__31588__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__31587__auto__,value__31588__auto__);
});

sablono.core.datetime_local_field31684.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field31684);

/**
 * Creates a email input field.
 */
sablono.core.email_field31688 = (function sablono$core$email_field31688(var_args){
var args31689 = [];
var len__26176__auto___31756 = arguments.length;
var i__26177__auto___31757 = (0);
while(true){
if((i__26177__auto___31757 < len__26176__auto___31756)){
args31689.push((arguments[i__26177__auto___31757]));

var G__31758 = (i__26177__auto___31757 + (1));
i__26177__auto___31757 = G__31758;
continue;
} else {
}
break;
}

var G__31691 = args31689.length;
switch (G__31691) {
case 1:
return sablono.core.email_field31688.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field31688.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31689.length)].join('')));

}
});

sablono.core.email_field31688.cljs$core$IFn$_invoke$arity$1 = (function (name__31587__auto__){
return sablono.core.email_field31688.call(null,name__31587__auto__,null);
});

sablono.core.email_field31688.cljs$core$IFn$_invoke$arity$2 = (function (name__31587__auto__,value__31588__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__31587__auto__,value__31588__auto__);
});

sablono.core.email_field31688.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field31688);

/**
 * Creates a file input field.
 */
sablono.core.file_field31692 = (function sablono$core$file_field31692(var_args){
var args31693 = [];
var len__26176__auto___31760 = arguments.length;
var i__26177__auto___31761 = (0);
while(true){
if((i__26177__auto___31761 < len__26176__auto___31760)){
args31693.push((arguments[i__26177__auto___31761]));

var G__31762 = (i__26177__auto___31761 + (1));
i__26177__auto___31761 = G__31762;
continue;
} else {
}
break;
}

var G__31695 = args31693.length;
switch (G__31695) {
case 1:
return sablono.core.file_field31692.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field31692.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31693.length)].join('')));

}
});

sablono.core.file_field31692.cljs$core$IFn$_invoke$arity$1 = (function (name__31587__auto__){
return sablono.core.file_field31692.call(null,name__31587__auto__,null);
});

sablono.core.file_field31692.cljs$core$IFn$_invoke$arity$2 = (function (name__31587__auto__,value__31588__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__31587__auto__,value__31588__auto__);
});

sablono.core.file_field31692.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field31692);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field31696 = (function sablono$core$hidden_field31696(var_args){
var args31697 = [];
var len__26176__auto___31764 = arguments.length;
var i__26177__auto___31765 = (0);
while(true){
if((i__26177__auto___31765 < len__26176__auto___31764)){
args31697.push((arguments[i__26177__auto___31765]));

var G__31766 = (i__26177__auto___31765 + (1));
i__26177__auto___31765 = G__31766;
continue;
} else {
}
break;
}

var G__31699 = args31697.length;
switch (G__31699) {
case 1:
return sablono.core.hidden_field31696.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field31696.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31697.length)].join('')));

}
});

sablono.core.hidden_field31696.cljs$core$IFn$_invoke$arity$1 = (function (name__31587__auto__){
return sablono.core.hidden_field31696.call(null,name__31587__auto__,null);
});

sablono.core.hidden_field31696.cljs$core$IFn$_invoke$arity$2 = (function (name__31587__auto__,value__31588__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__31587__auto__,value__31588__auto__);
});

sablono.core.hidden_field31696.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field31696);

/**
 * Creates a month input field.
 */
sablono.core.month_field31700 = (function sablono$core$month_field31700(var_args){
var args31701 = [];
var len__26176__auto___31768 = arguments.length;
var i__26177__auto___31769 = (0);
while(true){
if((i__26177__auto___31769 < len__26176__auto___31768)){
args31701.push((arguments[i__26177__auto___31769]));

var G__31770 = (i__26177__auto___31769 + (1));
i__26177__auto___31769 = G__31770;
continue;
} else {
}
break;
}

var G__31703 = args31701.length;
switch (G__31703) {
case 1:
return sablono.core.month_field31700.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field31700.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31701.length)].join('')));

}
});

sablono.core.month_field31700.cljs$core$IFn$_invoke$arity$1 = (function (name__31587__auto__){
return sablono.core.month_field31700.call(null,name__31587__auto__,null);
});

sablono.core.month_field31700.cljs$core$IFn$_invoke$arity$2 = (function (name__31587__auto__,value__31588__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__31587__auto__,value__31588__auto__);
});

sablono.core.month_field31700.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field31700);

/**
 * Creates a number input field.
 */
sablono.core.number_field31704 = (function sablono$core$number_field31704(var_args){
var args31705 = [];
var len__26176__auto___31772 = arguments.length;
var i__26177__auto___31773 = (0);
while(true){
if((i__26177__auto___31773 < len__26176__auto___31772)){
args31705.push((arguments[i__26177__auto___31773]));

var G__31774 = (i__26177__auto___31773 + (1));
i__26177__auto___31773 = G__31774;
continue;
} else {
}
break;
}

var G__31707 = args31705.length;
switch (G__31707) {
case 1:
return sablono.core.number_field31704.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field31704.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31705.length)].join('')));

}
});

sablono.core.number_field31704.cljs$core$IFn$_invoke$arity$1 = (function (name__31587__auto__){
return sablono.core.number_field31704.call(null,name__31587__auto__,null);
});

sablono.core.number_field31704.cljs$core$IFn$_invoke$arity$2 = (function (name__31587__auto__,value__31588__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__31587__auto__,value__31588__auto__);
});

sablono.core.number_field31704.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field31704);

/**
 * Creates a password input field.
 */
sablono.core.password_field31708 = (function sablono$core$password_field31708(var_args){
var args31709 = [];
var len__26176__auto___31776 = arguments.length;
var i__26177__auto___31777 = (0);
while(true){
if((i__26177__auto___31777 < len__26176__auto___31776)){
args31709.push((arguments[i__26177__auto___31777]));

var G__31778 = (i__26177__auto___31777 + (1));
i__26177__auto___31777 = G__31778;
continue;
} else {
}
break;
}

var G__31711 = args31709.length;
switch (G__31711) {
case 1:
return sablono.core.password_field31708.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field31708.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31709.length)].join('')));

}
});

sablono.core.password_field31708.cljs$core$IFn$_invoke$arity$1 = (function (name__31587__auto__){
return sablono.core.password_field31708.call(null,name__31587__auto__,null);
});

sablono.core.password_field31708.cljs$core$IFn$_invoke$arity$2 = (function (name__31587__auto__,value__31588__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__31587__auto__,value__31588__auto__);
});

sablono.core.password_field31708.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field31708);

/**
 * Creates a range input field.
 */
sablono.core.range_field31712 = (function sablono$core$range_field31712(var_args){
var args31713 = [];
var len__26176__auto___31780 = arguments.length;
var i__26177__auto___31781 = (0);
while(true){
if((i__26177__auto___31781 < len__26176__auto___31780)){
args31713.push((arguments[i__26177__auto___31781]));

var G__31782 = (i__26177__auto___31781 + (1));
i__26177__auto___31781 = G__31782;
continue;
} else {
}
break;
}

var G__31715 = args31713.length;
switch (G__31715) {
case 1:
return sablono.core.range_field31712.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field31712.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31713.length)].join('')));

}
});

sablono.core.range_field31712.cljs$core$IFn$_invoke$arity$1 = (function (name__31587__auto__){
return sablono.core.range_field31712.call(null,name__31587__auto__,null);
});

sablono.core.range_field31712.cljs$core$IFn$_invoke$arity$2 = (function (name__31587__auto__,value__31588__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__31587__auto__,value__31588__auto__);
});

sablono.core.range_field31712.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field31712);

/**
 * Creates a search input field.
 */
sablono.core.search_field31716 = (function sablono$core$search_field31716(var_args){
var args31717 = [];
var len__26176__auto___31784 = arguments.length;
var i__26177__auto___31785 = (0);
while(true){
if((i__26177__auto___31785 < len__26176__auto___31784)){
args31717.push((arguments[i__26177__auto___31785]));

var G__31786 = (i__26177__auto___31785 + (1));
i__26177__auto___31785 = G__31786;
continue;
} else {
}
break;
}

var G__31719 = args31717.length;
switch (G__31719) {
case 1:
return sablono.core.search_field31716.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field31716.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31717.length)].join('')));

}
});

sablono.core.search_field31716.cljs$core$IFn$_invoke$arity$1 = (function (name__31587__auto__){
return sablono.core.search_field31716.call(null,name__31587__auto__,null);
});

sablono.core.search_field31716.cljs$core$IFn$_invoke$arity$2 = (function (name__31587__auto__,value__31588__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__31587__auto__,value__31588__auto__);
});

sablono.core.search_field31716.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field31716);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field31720 = (function sablono$core$tel_field31720(var_args){
var args31721 = [];
var len__26176__auto___31788 = arguments.length;
var i__26177__auto___31789 = (0);
while(true){
if((i__26177__auto___31789 < len__26176__auto___31788)){
args31721.push((arguments[i__26177__auto___31789]));

var G__31790 = (i__26177__auto___31789 + (1));
i__26177__auto___31789 = G__31790;
continue;
} else {
}
break;
}

var G__31723 = args31721.length;
switch (G__31723) {
case 1:
return sablono.core.tel_field31720.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field31720.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31721.length)].join('')));

}
});

sablono.core.tel_field31720.cljs$core$IFn$_invoke$arity$1 = (function (name__31587__auto__){
return sablono.core.tel_field31720.call(null,name__31587__auto__,null);
});

sablono.core.tel_field31720.cljs$core$IFn$_invoke$arity$2 = (function (name__31587__auto__,value__31588__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__31587__auto__,value__31588__auto__);
});

sablono.core.tel_field31720.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field31720);

/**
 * Creates a text input field.
 */
sablono.core.text_field31724 = (function sablono$core$text_field31724(var_args){
var args31725 = [];
var len__26176__auto___31792 = arguments.length;
var i__26177__auto___31793 = (0);
while(true){
if((i__26177__auto___31793 < len__26176__auto___31792)){
args31725.push((arguments[i__26177__auto___31793]));

var G__31794 = (i__26177__auto___31793 + (1));
i__26177__auto___31793 = G__31794;
continue;
} else {
}
break;
}

var G__31727 = args31725.length;
switch (G__31727) {
case 1:
return sablono.core.text_field31724.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field31724.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31725.length)].join('')));

}
});

sablono.core.text_field31724.cljs$core$IFn$_invoke$arity$1 = (function (name__31587__auto__){
return sablono.core.text_field31724.call(null,name__31587__auto__,null);
});

sablono.core.text_field31724.cljs$core$IFn$_invoke$arity$2 = (function (name__31587__auto__,value__31588__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__31587__auto__,value__31588__auto__);
});

sablono.core.text_field31724.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field31724);

/**
 * Creates a time input field.
 */
sablono.core.time_field31728 = (function sablono$core$time_field31728(var_args){
var args31729 = [];
var len__26176__auto___31796 = arguments.length;
var i__26177__auto___31797 = (0);
while(true){
if((i__26177__auto___31797 < len__26176__auto___31796)){
args31729.push((arguments[i__26177__auto___31797]));

var G__31798 = (i__26177__auto___31797 + (1));
i__26177__auto___31797 = G__31798;
continue;
} else {
}
break;
}

var G__31731 = args31729.length;
switch (G__31731) {
case 1:
return sablono.core.time_field31728.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field31728.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31729.length)].join('')));

}
});

sablono.core.time_field31728.cljs$core$IFn$_invoke$arity$1 = (function (name__31587__auto__){
return sablono.core.time_field31728.call(null,name__31587__auto__,null);
});

sablono.core.time_field31728.cljs$core$IFn$_invoke$arity$2 = (function (name__31587__auto__,value__31588__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__31587__auto__,value__31588__auto__);
});

sablono.core.time_field31728.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field31728);

/**
 * Creates a url input field.
 */
sablono.core.url_field31732 = (function sablono$core$url_field31732(var_args){
var args31733 = [];
var len__26176__auto___31800 = arguments.length;
var i__26177__auto___31801 = (0);
while(true){
if((i__26177__auto___31801 < len__26176__auto___31800)){
args31733.push((arguments[i__26177__auto___31801]));

var G__31802 = (i__26177__auto___31801 + (1));
i__26177__auto___31801 = G__31802;
continue;
} else {
}
break;
}

var G__31735 = args31733.length;
switch (G__31735) {
case 1:
return sablono.core.url_field31732.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field31732.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31733.length)].join('')));

}
});

sablono.core.url_field31732.cljs$core$IFn$_invoke$arity$1 = (function (name__31587__auto__){
return sablono.core.url_field31732.call(null,name__31587__auto__,null);
});

sablono.core.url_field31732.cljs$core$IFn$_invoke$arity$2 = (function (name__31587__auto__,value__31588__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__31587__auto__,value__31588__auto__);
});

sablono.core.url_field31732.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field31732);

/**
 * Creates a week input field.
 */
sablono.core.week_field31736 = (function sablono$core$week_field31736(var_args){
var args31737 = [];
var len__26176__auto___31804 = arguments.length;
var i__26177__auto___31805 = (0);
while(true){
if((i__26177__auto___31805 < len__26176__auto___31804)){
args31737.push((arguments[i__26177__auto___31805]));

var G__31806 = (i__26177__auto___31805 + (1));
i__26177__auto___31805 = G__31806;
continue;
} else {
}
break;
}

var G__31739 = args31737.length;
switch (G__31739) {
case 1:
return sablono.core.week_field31736.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field31736.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31737.length)].join('')));

}
});

sablono.core.week_field31736.cljs$core$IFn$_invoke$arity$1 = (function (name__31587__auto__){
return sablono.core.week_field31736.call(null,name__31587__auto__,null);
});

sablono.core.week_field31736.cljs$core$IFn$_invoke$arity$2 = (function (name__31587__auto__,value__31588__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__31587__auto__,value__31588__auto__);
});

sablono.core.week_field31736.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field31736);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box31808 = (function sablono$core$check_box31808(var_args){
var args31809 = [];
var len__26176__auto___31812 = arguments.length;
var i__26177__auto___31813 = (0);
while(true){
if((i__26177__auto___31813 < len__26176__auto___31812)){
args31809.push((arguments[i__26177__auto___31813]));

var G__31814 = (i__26177__auto___31813 + (1));
i__26177__auto___31813 = G__31814;
continue;
} else {
}
break;
}

var G__31811 = args31809.length;
switch (G__31811) {
case 1:
return sablono.core.check_box31808.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box31808.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box31808.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31809.length)].join('')));

}
});

sablono.core.check_box31808.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box31808.call(null,name,null);
});

sablono.core.check_box31808.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box31808.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box31808.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__25101__auto__ = value;
if(cljs.core.truth_(or__25101__auto__)){
return or__25101__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box31808.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box31808);
/**
 * Creates a radio button.
 */
sablono.core.radio_button31816 = (function sablono$core$radio_button31816(var_args){
var args31817 = [];
var len__26176__auto___31820 = arguments.length;
var i__26177__auto___31821 = (0);
while(true){
if((i__26177__auto___31821 < len__26176__auto___31820)){
args31817.push((arguments[i__26177__auto___31821]));

var G__31822 = (i__26177__auto___31821 + (1));
i__26177__auto___31821 = G__31822;
continue;
} else {
}
break;
}

var G__31819 = args31817.length;
switch (G__31819) {
case 1:
return sablono.core.radio_button31816.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button31816.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button31816.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31817.length)].join('')));

}
});

sablono.core.radio_button31816.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button31816.call(null,group,null);
});

sablono.core.radio_button31816.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button31816.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button31816.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__25101__auto__ = value;
if(cljs.core.truth_(or__25101__auto__)){
return or__25101__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button31816.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button31816);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options31824 = (function sablono$core$select_options31824(coll){
var iter__25881__auto__ = (function sablono$core$select_options31824_$_iter__31841(s__31842){
return (new cljs.core.LazySeq(null,(function (){
var s__31842__$1 = s__31842;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31842__$1);
if(temp__4657__auto__){
var s__31842__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31842__$2)){
var c__25879__auto__ = cljs.core.chunk_first.call(null,s__31842__$2);
var size__25880__auto__ = cljs.core.count.call(null,c__25879__auto__);
var b__31844 = cljs.core.chunk_buffer.call(null,size__25880__auto__);
if((function (){var i__31843 = (0);
while(true){
if((i__31843 < size__25880__auto__)){
var x = cljs.core._nth.call(null,c__25879__auto__,i__31843);
cljs.core.chunk_append.call(null,b__31844,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__31851 = x;
var text = cljs.core.nth.call(null,vec__31851,(0),null);
var val = cljs.core.nth.call(null,vec__31851,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__31851,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options31824.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__31857 = (i__31843 + (1));
i__31843 = G__31857;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31844),sablono$core$select_options31824_$_iter__31841.call(null,cljs.core.chunk_rest.call(null,s__31842__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31844),null);
}
} else {
var x = cljs.core.first.call(null,s__31842__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__31854 = x;
var text = cljs.core.nth.call(null,vec__31854,(0),null);
var val = cljs.core.nth.call(null,vec__31854,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__31854,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options31824.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options31824_$_iter__31841.call(null,cljs.core.rest.call(null,s__31842__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25881__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options31824);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down31858 = (function sablono$core$drop_down31858(var_args){
var args31859 = [];
var len__26176__auto___31862 = arguments.length;
var i__26177__auto___31863 = (0);
while(true){
if((i__26177__auto___31863 < len__26176__auto___31862)){
args31859.push((arguments[i__26177__auto___31863]));

var G__31864 = (i__26177__auto___31863 + (1));
i__26177__auto___31863 = G__31864;
continue;
} else {
}
break;
}

var G__31861 = args31859.length;
switch (G__31861) {
case 2:
return sablono.core.drop_down31858.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down31858.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31859.length)].join('')));

}
});

sablono.core.drop_down31858.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down31858.call(null,name,options,null);
});

sablono.core.drop_down31858.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down31858.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down31858);
/**
 * Creates a text area element.
 */
sablono.core.text_area31866 = (function sablono$core$text_area31866(var_args){
var args31867 = [];
var len__26176__auto___31870 = arguments.length;
var i__26177__auto___31871 = (0);
while(true){
if((i__26177__auto___31871 < len__26176__auto___31870)){
args31867.push((arguments[i__26177__auto___31871]));

var G__31872 = (i__26177__auto___31871 + (1));
i__26177__auto___31871 = G__31872;
continue;
} else {
}
break;
}

var G__31869 = args31867.length;
switch (G__31869) {
case 1:
return sablono.core.text_area31866.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area31866.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31867.length)].join('')));

}
});

sablono.core.text_area31866.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area31866.call(null,name,null);
});

sablono.core.text_area31866.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__25101__auto__ = value;
if(cljs.core.truth_(or__25101__auto__)){
return or__25101__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area31866.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area31866);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label31874 = (function sablono$core$label31874(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label31874);
/**
 * Creates a submit button.
 */
sablono.core.submit_button31875 = (function sablono$core$submit_button31875(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button31875);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button31876 = (function sablono$core$reset_button31876(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button31876);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to31877 = (function sablono$core$form_to31877(var_args){
var args__26183__auto__ = [];
var len__26176__auto___31884 = arguments.length;
var i__26177__auto___31885 = (0);
while(true){
if((i__26177__auto___31885 < len__26176__auto___31884)){
args__26183__auto__.push((arguments[i__26177__auto___31885]));

var G__31886 = (i__26177__auto___31885 + (1));
i__26177__auto___31885 = G__31886;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to31877.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});

sablono.core.form_to31877.cljs$core$IFn$_invoke$arity$variadic = (function (p__31880,body){
var vec__31881 = p__31880;
var method = cljs.core.nth.call(null,vec__31881,(0),null);
var action = cljs.core.nth.call(null,vec__31881,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to31877.cljs$lang$maxFixedArity = (1);

sablono.core.form_to31877.cljs$lang$applyTo = (function (seq31878){
var G__31879 = cljs.core.first.call(null,seq31878);
var seq31878__$1 = cljs.core.next.call(null,seq31878);
return sablono.core.form_to31877.cljs$core$IFn$_invoke$arity$variadic(G__31879,seq31878__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to31877);

//# sourceMappingURL=core.js.map?rel=1487859337984