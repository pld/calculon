// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args37281 = [];
var len__26176__auto___37284 = arguments.length;
var i__26177__auto___37285 = (0);
while(true){
if((i__26177__auto___37285 < len__26176__auto___37284)){
args37281.push((arguments[i__26177__auto___37285]));

var G__37286 = (i__26177__auto___37285 + (1));
i__26177__auto___37285 = G__37286;
continue;
} else {
}
break;
}

var G__37283 = args37281.length;
switch (G__37283) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37281.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__26183__auto__ = [];
var len__26176__auto___37289 = arguments.length;
var i__26177__auto___37290 = (0);
while(true){
if((i__26177__auto___37290 < len__26176__auto___37289)){
args__26183__auto__.push((arguments[i__26177__auto___37290]));

var G__37291 = (i__26177__auto___37290 + (1));
i__26177__auto___37290 = G__37291;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((0) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26184__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37288){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37288));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26183__auto__ = [];
var len__26176__auto___37293 = arguments.length;
var i__26177__auto___37294 = (0);
while(true){
if((i__26177__auto___37294 < len__26176__auto___37293)){
args__26183__auto__.push((arguments[i__26177__auto___37294]));

var G__37295 = (i__26177__auto___37294 + (1));
i__26177__auto___37294 = G__37295;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((0) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26184__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37292){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37292));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__37296 = cljs.core._EQ_;
var expr__37297 = (function (){var or__25101__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e37300){if((e37300 instanceof Error)){
var e = e37300;
return false;
} else {
throw e37300;

}
}})();
if(cljs.core.truth_(or__25101__auto__)){
return or__25101__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__37296.call(null,"true",expr__37297))){
return true;
} else {
if(cljs.core.truth_(pred__37296.call(null,"false",expr__37297))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37297)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e37302){if((e37302 instanceof Error)){
var e = e37302;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e37302;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37303){
var map__37306 = p__37303;
var map__37306__$1 = ((((!((map__37306 == null)))?((((map__37306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37306):map__37306);
var message = cljs.core.get.call(null,map__37306__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37306__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25101__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25101__auto__)){
return or__25101__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25089__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25089__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25089__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27741__auto___37468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto___37468,ch){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto___37468,ch){
return (function (state_37437){
var state_val_37438 = (state_37437[(1)]);
if((state_val_37438 === (7))){
var inst_37433 = (state_37437[(2)]);
var state_37437__$1 = state_37437;
var statearr_37439_37469 = state_37437__$1;
(statearr_37439_37469[(2)] = inst_37433);

(statearr_37439_37469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (1))){
var state_37437__$1 = state_37437;
var statearr_37440_37470 = state_37437__$1;
(statearr_37440_37470[(2)] = null);

(statearr_37440_37470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (4))){
var inst_37390 = (state_37437[(7)]);
var inst_37390__$1 = (state_37437[(2)]);
var state_37437__$1 = (function (){var statearr_37441 = state_37437;
(statearr_37441[(7)] = inst_37390__$1);

return statearr_37441;
})();
if(cljs.core.truth_(inst_37390__$1)){
var statearr_37442_37471 = state_37437__$1;
(statearr_37442_37471[(1)] = (5));

} else {
var statearr_37443_37472 = state_37437__$1;
(statearr_37443_37472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (15))){
var inst_37397 = (state_37437[(8)]);
var inst_37412 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37397);
var inst_37413 = cljs.core.first.call(null,inst_37412);
var inst_37414 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37413);
var inst_37415 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37414)].join('');
var inst_37416 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37415);
var state_37437__$1 = state_37437;
var statearr_37444_37473 = state_37437__$1;
(statearr_37444_37473[(2)] = inst_37416);

(statearr_37444_37473[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (13))){
var inst_37421 = (state_37437[(2)]);
var state_37437__$1 = state_37437;
var statearr_37445_37474 = state_37437__$1;
(statearr_37445_37474[(2)] = inst_37421);

(statearr_37445_37474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (6))){
var state_37437__$1 = state_37437;
var statearr_37446_37475 = state_37437__$1;
(statearr_37446_37475[(2)] = null);

(statearr_37446_37475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (17))){
var inst_37419 = (state_37437[(2)]);
var state_37437__$1 = state_37437;
var statearr_37447_37476 = state_37437__$1;
(statearr_37447_37476[(2)] = inst_37419);

(statearr_37447_37476[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (3))){
var inst_37435 = (state_37437[(2)]);
var state_37437__$1 = state_37437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37437__$1,inst_37435);
} else {
if((state_val_37438 === (12))){
var inst_37396 = (state_37437[(9)]);
var inst_37410 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37396,opts);
var state_37437__$1 = state_37437;
if(cljs.core.truth_(inst_37410)){
var statearr_37448_37477 = state_37437__$1;
(statearr_37448_37477[(1)] = (15));

} else {
var statearr_37449_37478 = state_37437__$1;
(statearr_37449_37478[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (2))){
var state_37437__$1 = state_37437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37437__$1,(4),ch);
} else {
if((state_val_37438 === (11))){
var inst_37397 = (state_37437[(8)]);
var inst_37402 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37403 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37397);
var inst_37404 = cljs.core.async.timeout.call(null,(1000));
var inst_37405 = [inst_37403,inst_37404];
var inst_37406 = (new cljs.core.PersistentVector(null,2,(5),inst_37402,inst_37405,null));
var state_37437__$1 = state_37437;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37437__$1,(14),inst_37406);
} else {
if((state_val_37438 === (9))){
var inst_37397 = (state_37437[(8)]);
var inst_37423 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37424 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37397);
var inst_37425 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37424);
var inst_37426 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37425)].join('');
var inst_37427 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37426);
var state_37437__$1 = (function (){var statearr_37450 = state_37437;
(statearr_37450[(10)] = inst_37423);

return statearr_37450;
})();
var statearr_37451_37479 = state_37437__$1;
(statearr_37451_37479[(2)] = inst_37427);

(statearr_37451_37479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (5))){
var inst_37390 = (state_37437[(7)]);
var inst_37392 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37393 = (new cljs.core.PersistentArrayMap(null,2,inst_37392,null));
var inst_37394 = (new cljs.core.PersistentHashSet(null,inst_37393,null));
var inst_37395 = figwheel.client.focus_msgs.call(null,inst_37394,inst_37390);
var inst_37396 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37395);
var inst_37397 = cljs.core.first.call(null,inst_37395);
var inst_37398 = figwheel.client.autoload_QMARK_.call(null);
var state_37437__$1 = (function (){var statearr_37452 = state_37437;
(statearr_37452[(8)] = inst_37397);

(statearr_37452[(9)] = inst_37396);

return statearr_37452;
})();
if(cljs.core.truth_(inst_37398)){
var statearr_37453_37480 = state_37437__$1;
(statearr_37453_37480[(1)] = (8));

} else {
var statearr_37454_37481 = state_37437__$1;
(statearr_37454_37481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (14))){
var inst_37408 = (state_37437[(2)]);
var state_37437__$1 = state_37437;
var statearr_37455_37482 = state_37437__$1;
(statearr_37455_37482[(2)] = inst_37408);

(statearr_37455_37482[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (16))){
var state_37437__$1 = state_37437;
var statearr_37456_37483 = state_37437__$1;
(statearr_37456_37483[(2)] = null);

(statearr_37456_37483[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (10))){
var inst_37429 = (state_37437[(2)]);
var state_37437__$1 = (function (){var statearr_37457 = state_37437;
(statearr_37457[(11)] = inst_37429);

return statearr_37457;
})();
var statearr_37458_37484 = state_37437__$1;
(statearr_37458_37484[(2)] = null);

(statearr_37458_37484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (8))){
var inst_37396 = (state_37437[(9)]);
var inst_37400 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37396,opts);
var state_37437__$1 = state_37437;
if(cljs.core.truth_(inst_37400)){
var statearr_37459_37485 = state_37437__$1;
(statearr_37459_37485[(1)] = (11));

} else {
var statearr_37460_37486 = state_37437__$1;
(statearr_37460_37486[(1)] = (12));

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
});})(c__27741__auto___37468,ch))
;
return ((function (switch__27629__auto__,c__27741__auto___37468,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27630__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27630__auto____0 = (function (){
var statearr_37464 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37464[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27630__auto__);

(statearr_37464[(1)] = (1));

return statearr_37464;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27630__auto____1 = (function (state_37437){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_37437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e37465){if((e37465 instanceof Object)){
var ex__27633__auto__ = e37465;
var statearr_37466_37487 = state_37437;
(statearr_37466_37487[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37488 = state_37437;
state_37437 = G__37488;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27630__auto__ = function(state_37437){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27630__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27630__auto____1.call(this,state_37437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27630__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27630__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto___37468,ch))
})();
var state__27743__auto__ = (function (){var statearr_37467 = f__27742__auto__.call(null);
(statearr_37467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto___37468);

return statearr_37467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto___37468,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37489_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37489_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37492 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37492){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37491){if((e37491 instanceof Error)){
var e = e37491;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37492], null));
} else {
var e = e37491;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37492))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37493){
var map__37502 = p__37493;
var map__37502__$1 = ((((!((map__37502 == null)))?((((map__37502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37502):map__37502);
var opts = map__37502__$1;
var build_id = cljs.core.get.call(null,map__37502__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37502,map__37502__$1,opts,build_id){
return (function (p__37504){
var vec__37505 = p__37504;
var seq__37506 = cljs.core.seq.call(null,vec__37505);
var first__37507 = cljs.core.first.call(null,seq__37506);
var seq__37506__$1 = cljs.core.next.call(null,seq__37506);
var map__37508 = first__37507;
var map__37508__$1 = ((((!((map__37508 == null)))?((((map__37508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37508):map__37508);
var msg = map__37508__$1;
var msg_name = cljs.core.get.call(null,map__37508__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37506__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37505,seq__37506,first__37507,seq__37506__$1,map__37508,map__37508__$1,msg,msg_name,_,map__37502,map__37502__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37505,seq__37506,first__37507,seq__37506__$1,map__37508,map__37508__$1,msg,msg_name,_,map__37502,map__37502__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37502,map__37502__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37516){
var vec__37517 = p__37516;
var seq__37518 = cljs.core.seq.call(null,vec__37517);
var first__37519 = cljs.core.first.call(null,seq__37518);
var seq__37518__$1 = cljs.core.next.call(null,seq__37518);
var map__37520 = first__37519;
var map__37520__$1 = ((((!((map__37520 == null)))?((((map__37520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37520):map__37520);
var msg = map__37520__$1;
var msg_name = cljs.core.get.call(null,map__37520__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37518__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37522){
var map__37534 = p__37522;
var map__37534__$1 = ((((!((map__37534 == null)))?((((map__37534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37534):map__37534);
var on_compile_warning = cljs.core.get.call(null,map__37534__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37534__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37534,map__37534__$1,on_compile_warning,on_compile_fail){
return (function (p__37536){
var vec__37537 = p__37536;
var seq__37538 = cljs.core.seq.call(null,vec__37537);
var first__37539 = cljs.core.first.call(null,seq__37538);
var seq__37538__$1 = cljs.core.next.call(null,seq__37538);
var map__37540 = first__37539;
var map__37540__$1 = ((((!((map__37540 == null)))?((((map__37540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37540):map__37540);
var msg = map__37540__$1;
var msg_name = cljs.core.get.call(null,map__37540__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37538__$1;
var pred__37542 = cljs.core._EQ_;
var expr__37543 = msg_name;
if(cljs.core.truth_(pred__37542.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37543))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37542.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37543))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37534,map__37534__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27741__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto__,msg_hist,msg_names,msg){
return (function (state_37771){
var state_val_37772 = (state_37771[(1)]);
if((state_val_37772 === (7))){
var inst_37691 = (state_37771[(2)]);
var state_37771__$1 = state_37771;
if(cljs.core.truth_(inst_37691)){
var statearr_37773_37823 = state_37771__$1;
(statearr_37773_37823[(1)] = (8));

} else {
var statearr_37774_37824 = state_37771__$1;
(statearr_37774_37824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (20))){
var inst_37765 = (state_37771[(2)]);
var state_37771__$1 = state_37771;
var statearr_37775_37825 = state_37771__$1;
(statearr_37775_37825[(2)] = inst_37765);

(statearr_37775_37825[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (27))){
var inst_37761 = (state_37771[(2)]);
var state_37771__$1 = state_37771;
var statearr_37776_37826 = state_37771__$1;
(statearr_37776_37826[(2)] = inst_37761);

(statearr_37776_37826[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (1))){
var inst_37684 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37771__$1 = state_37771;
if(cljs.core.truth_(inst_37684)){
var statearr_37777_37827 = state_37771__$1;
(statearr_37777_37827[(1)] = (2));

} else {
var statearr_37778_37828 = state_37771__$1;
(statearr_37778_37828[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (24))){
var inst_37763 = (state_37771[(2)]);
var state_37771__$1 = state_37771;
var statearr_37779_37829 = state_37771__$1;
(statearr_37779_37829[(2)] = inst_37763);

(statearr_37779_37829[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (4))){
var inst_37769 = (state_37771[(2)]);
var state_37771__$1 = state_37771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37771__$1,inst_37769);
} else {
if((state_val_37772 === (15))){
var inst_37767 = (state_37771[(2)]);
var state_37771__$1 = state_37771;
var statearr_37780_37830 = state_37771__$1;
(statearr_37780_37830[(2)] = inst_37767);

(statearr_37780_37830[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (21))){
var inst_37720 = (state_37771[(2)]);
var inst_37721 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37722 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37721);
var state_37771__$1 = (function (){var statearr_37781 = state_37771;
(statearr_37781[(7)] = inst_37720);

return statearr_37781;
})();
var statearr_37782_37831 = state_37771__$1;
(statearr_37782_37831[(2)] = inst_37722);

(statearr_37782_37831[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (31))){
var inst_37750 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37771__$1 = state_37771;
if(cljs.core.truth_(inst_37750)){
var statearr_37783_37832 = state_37771__$1;
(statearr_37783_37832[(1)] = (34));

} else {
var statearr_37784_37833 = state_37771__$1;
(statearr_37784_37833[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (32))){
var inst_37759 = (state_37771[(2)]);
var state_37771__$1 = state_37771;
var statearr_37785_37834 = state_37771__$1;
(statearr_37785_37834[(2)] = inst_37759);

(statearr_37785_37834[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (33))){
var inst_37746 = (state_37771[(2)]);
var inst_37747 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37748 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37747);
var state_37771__$1 = (function (){var statearr_37786 = state_37771;
(statearr_37786[(8)] = inst_37746);

return statearr_37786;
})();
var statearr_37787_37835 = state_37771__$1;
(statearr_37787_37835[(2)] = inst_37748);

(statearr_37787_37835[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (13))){
var inst_37705 = figwheel.client.heads_up.clear.call(null);
var state_37771__$1 = state_37771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37771__$1,(16),inst_37705);
} else {
if((state_val_37772 === (22))){
var inst_37726 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37727 = figwheel.client.heads_up.append_warning_message.call(null,inst_37726);
var state_37771__$1 = state_37771;
var statearr_37788_37836 = state_37771__$1;
(statearr_37788_37836[(2)] = inst_37727);

(statearr_37788_37836[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (36))){
var inst_37757 = (state_37771[(2)]);
var state_37771__$1 = state_37771;
var statearr_37789_37837 = state_37771__$1;
(statearr_37789_37837[(2)] = inst_37757);

(statearr_37789_37837[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (29))){
var inst_37737 = (state_37771[(2)]);
var inst_37738 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37739 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37738);
var state_37771__$1 = (function (){var statearr_37790 = state_37771;
(statearr_37790[(9)] = inst_37737);

return statearr_37790;
})();
var statearr_37791_37838 = state_37771__$1;
(statearr_37791_37838[(2)] = inst_37739);

(statearr_37791_37838[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (6))){
var inst_37686 = (state_37771[(10)]);
var state_37771__$1 = state_37771;
var statearr_37792_37839 = state_37771__$1;
(statearr_37792_37839[(2)] = inst_37686);

(statearr_37792_37839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (28))){
var inst_37733 = (state_37771[(2)]);
var inst_37734 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37735 = figwheel.client.heads_up.display_warning.call(null,inst_37734);
var state_37771__$1 = (function (){var statearr_37793 = state_37771;
(statearr_37793[(11)] = inst_37733);

return statearr_37793;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37771__$1,(29),inst_37735);
} else {
if((state_val_37772 === (25))){
var inst_37731 = figwheel.client.heads_up.clear.call(null);
var state_37771__$1 = state_37771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37771__$1,(28),inst_37731);
} else {
if((state_val_37772 === (34))){
var inst_37752 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37771__$1 = state_37771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37771__$1,(37),inst_37752);
} else {
if((state_val_37772 === (17))){
var inst_37711 = (state_37771[(2)]);
var inst_37712 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37713 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37712);
var state_37771__$1 = (function (){var statearr_37794 = state_37771;
(statearr_37794[(12)] = inst_37711);

return statearr_37794;
})();
var statearr_37795_37840 = state_37771__$1;
(statearr_37795_37840[(2)] = inst_37713);

(statearr_37795_37840[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (3))){
var inst_37703 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37771__$1 = state_37771;
if(cljs.core.truth_(inst_37703)){
var statearr_37796_37841 = state_37771__$1;
(statearr_37796_37841[(1)] = (13));

} else {
var statearr_37797_37842 = state_37771__$1;
(statearr_37797_37842[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (12))){
var inst_37699 = (state_37771[(2)]);
var state_37771__$1 = state_37771;
var statearr_37798_37843 = state_37771__$1;
(statearr_37798_37843[(2)] = inst_37699);

(statearr_37798_37843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (2))){
var inst_37686 = (state_37771[(10)]);
var inst_37686__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37771__$1 = (function (){var statearr_37799 = state_37771;
(statearr_37799[(10)] = inst_37686__$1);

return statearr_37799;
})();
if(cljs.core.truth_(inst_37686__$1)){
var statearr_37800_37844 = state_37771__$1;
(statearr_37800_37844[(1)] = (5));

} else {
var statearr_37801_37845 = state_37771__$1;
(statearr_37801_37845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (23))){
var inst_37729 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37771__$1 = state_37771;
if(cljs.core.truth_(inst_37729)){
var statearr_37802_37846 = state_37771__$1;
(statearr_37802_37846[(1)] = (25));

} else {
var statearr_37803_37847 = state_37771__$1;
(statearr_37803_37847[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (35))){
var state_37771__$1 = state_37771;
var statearr_37804_37848 = state_37771__$1;
(statearr_37804_37848[(2)] = null);

(statearr_37804_37848[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (19))){
var inst_37724 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37771__$1 = state_37771;
if(cljs.core.truth_(inst_37724)){
var statearr_37805_37849 = state_37771__$1;
(statearr_37805_37849[(1)] = (22));

} else {
var statearr_37806_37850 = state_37771__$1;
(statearr_37806_37850[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (11))){
var inst_37695 = (state_37771[(2)]);
var state_37771__$1 = state_37771;
var statearr_37807_37851 = state_37771__$1;
(statearr_37807_37851[(2)] = inst_37695);

(statearr_37807_37851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (9))){
var inst_37697 = figwheel.client.heads_up.clear.call(null);
var state_37771__$1 = state_37771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37771__$1,(12),inst_37697);
} else {
if((state_val_37772 === (5))){
var inst_37688 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37771__$1 = state_37771;
var statearr_37808_37852 = state_37771__$1;
(statearr_37808_37852[(2)] = inst_37688);

(statearr_37808_37852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (14))){
var inst_37715 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37771__$1 = state_37771;
if(cljs.core.truth_(inst_37715)){
var statearr_37809_37853 = state_37771__$1;
(statearr_37809_37853[(1)] = (18));

} else {
var statearr_37810_37854 = state_37771__$1;
(statearr_37810_37854[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (26))){
var inst_37741 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37771__$1 = state_37771;
if(cljs.core.truth_(inst_37741)){
var statearr_37811_37855 = state_37771__$1;
(statearr_37811_37855[(1)] = (30));

} else {
var statearr_37812_37856 = state_37771__$1;
(statearr_37812_37856[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (16))){
var inst_37707 = (state_37771[(2)]);
var inst_37708 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37709 = figwheel.client.heads_up.display_exception.call(null,inst_37708);
var state_37771__$1 = (function (){var statearr_37813 = state_37771;
(statearr_37813[(13)] = inst_37707);

return statearr_37813;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37771__$1,(17),inst_37709);
} else {
if((state_val_37772 === (30))){
var inst_37743 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37744 = figwheel.client.heads_up.display_warning.call(null,inst_37743);
var state_37771__$1 = state_37771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37771__$1,(33),inst_37744);
} else {
if((state_val_37772 === (10))){
var inst_37701 = (state_37771[(2)]);
var state_37771__$1 = state_37771;
var statearr_37814_37857 = state_37771__$1;
(statearr_37814_37857[(2)] = inst_37701);

(statearr_37814_37857[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (18))){
var inst_37717 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37718 = figwheel.client.heads_up.display_exception.call(null,inst_37717);
var state_37771__$1 = state_37771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37771__$1,(21),inst_37718);
} else {
if((state_val_37772 === (37))){
var inst_37754 = (state_37771[(2)]);
var state_37771__$1 = state_37771;
var statearr_37815_37858 = state_37771__$1;
(statearr_37815_37858[(2)] = inst_37754);

(statearr_37815_37858[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (8))){
var inst_37693 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37771__$1 = state_37771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37771__$1,(11),inst_37693);
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
}
}
}
});})(c__27741__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27629__auto__,c__27741__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27630__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27630__auto____0 = (function (){
var statearr_37819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37819[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27630__auto__);

(statearr_37819[(1)] = (1));

return statearr_37819;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27630__auto____1 = (function (state_37771){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_37771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e37820){if((e37820 instanceof Object)){
var ex__27633__auto__ = e37820;
var statearr_37821_37859 = state_37771;
(statearr_37821_37859[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37860 = state_37771;
state_37771 = G__37860;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27630__auto__ = function(state_37771){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27630__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27630__auto____1.call(this,state_37771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27630__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27630__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto__,msg_hist,msg_names,msg))
})();
var state__27743__auto__ = (function (){var statearr_37822 = f__27742__auto__.call(null);
(statearr_37822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto__);

return statearr_37822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto__,msg_hist,msg_names,msg))
);

return c__27741__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27741__auto___37923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto___37923,ch){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto___37923,ch){
return (function (state_37906){
var state_val_37907 = (state_37906[(1)]);
if((state_val_37907 === (1))){
var state_37906__$1 = state_37906;
var statearr_37908_37924 = state_37906__$1;
(statearr_37908_37924[(2)] = null);

(statearr_37908_37924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (2))){
var state_37906__$1 = state_37906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37906__$1,(4),ch);
} else {
if((state_val_37907 === (3))){
var inst_37904 = (state_37906[(2)]);
var state_37906__$1 = state_37906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37906__$1,inst_37904);
} else {
if((state_val_37907 === (4))){
var inst_37894 = (state_37906[(7)]);
var inst_37894__$1 = (state_37906[(2)]);
var state_37906__$1 = (function (){var statearr_37909 = state_37906;
(statearr_37909[(7)] = inst_37894__$1);

return statearr_37909;
})();
if(cljs.core.truth_(inst_37894__$1)){
var statearr_37910_37925 = state_37906__$1;
(statearr_37910_37925[(1)] = (5));

} else {
var statearr_37911_37926 = state_37906__$1;
(statearr_37911_37926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (5))){
var inst_37894 = (state_37906[(7)]);
var inst_37896 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37894);
var state_37906__$1 = state_37906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37906__$1,(8),inst_37896);
} else {
if((state_val_37907 === (6))){
var state_37906__$1 = state_37906;
var statearr_37912_37927 = state_37906__$1;
(statearr_37912_37927[(2)] = null);

(statearr_37912_37927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (7))){
var inst_37902 = (state_37906[(2)]);
var state_37906__$1 = state_37906;
var statearr_37913_37928 = state_37906__$1;
(statearr_37913_37928[(2)] = inst_37902);

(statearr_37913_37928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (8))){
var inst_37898 = (state_37906[(2)]);
var state_37906__$1 = (function (){var statearr_37914 = state_37906;
(statearr_37914[(8)] = inst_37898);

return statearr_37914;
})();
var statearr_37915_37929 = state_37906__$1;
(statearr_37915_37929[(2)] = null);

(statearr_37915_37929[(1)] = (2));


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
});})(c__27741__auto___37923,ch))
;
return ((function (switch__27629__auto__,c__27741__auto___37923,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27630__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27630__auto____0 = (function (){
var statearr_37919 = [null,null,null,null,null,null,null,null,null];
(statearr_37919[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27630__auto__);

(statearr_37919[(1)] = (1));

return statearr_37919;
});
var figwheel$client$heads_up_plugin_$_state_machine__27630__auto____1 = (function (state_37906){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_37906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e37920){if((e37920 instanceof Object)){
var ex__27633__auto__ = e37920;
var statearr_37921_37930 = state_37906;
(statearr_37921_37930[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37931 = state_37906;
state_37906 = G__37931;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27630__auto__ = function(state_37906){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27630__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27630__auto____1.call(this,state_37906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27630__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27630__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto___37923,ch))
})();
var state__27743__auto__ = (function (){var statearr_37922 = f__27742__auto__.call(null);
(statearr_37922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto___37923);

return statearr_37922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto___37923,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27741__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto__){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto__){
return (function (state_37952){
var state_val_37953 = (state_37952[(1)]);
if((state_val_37953 === (1))){
var inst_37947 = cljs.core.async.timeout.call(null,(3000));
var state_37952__$1 = state_37952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37952__$1,(2),inst_37947);
} else {
if((state_val_37953 === (2))){
var inst_37949 = (state_37952[(2)]);
var inst_37950 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37952__$1 = (function (){var statearr_37954 = state_37952;
(statearr_37954[(7)] = inst_37949);

return statearr_37954;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37952__$1,inst_37950);
} else {
return null;
}
}
});})(c__27741__auto__))
;
return ((function (switch__27629__auto__,c__27741__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27630__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27630__auto____0 = (function (){
var statearr_37958 = [null,null,null,null,null,null,null,null];
(statearr_37958[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27630__auto__);

(statearr_37958[(1)] = (1));

return statearr_37958;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27630__auto____1 = (function (state_37952){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_37952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e37959){if((e37959 instanceof Object)){
var ex__27633__auto__ = e37959;
var statearr_37960_37962 = state_37952;
(statearr_37960_37962[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37963 = state_37952;
state_37952 = G__37963;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27630__auto__ = function(state_37952){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27630__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27630__auto____1.call(this,state_37952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27630__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27630__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto__))
})();
var state__27743__auto__ = (function (){var statearr_37961 = f__27742__auto__.call(null);
(statearr_37961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto__);

return statearr_37961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto__))
);

return c__27741__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27741__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37986){
var state_val_37987 = (state_37986[(1)]);
if((state_val_37987 === (1))){
var inst_37980 = cljs.core.async.timeout.call(null,(2000));
var state_37986__$1 = state_37986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37986__$1,(2),inst_37980);
} else {
if((state_val_37987 === (2))){
var inst_37982 = (state_37986[(2)]);
var inst_37983 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37984 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37983);
var state_37986__$1 = (function (){var statearr_37988 = state_37986;
(statearr_37988[(7)] = inst_37982);

return statearr_37988;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37986__$1,inst_37984);
} else {
return null;
}
}
});})(c__27741__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27629__auto__,c__27741__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27630__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27630__auto____0 = (function (){
var statearr_37992 = [null,null,null,null,null,null,null,null];
(statearr_37992[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27630__auto__);

(statearr_37992[(1)] = (1));

return statearr_37992;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27630__auto____1 = (function (state_37986){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_37986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e37993){if((e37993 instanceof Object)){
var ex__27633__auto__ = e37993;
var statearr_37994_37996 = state_37986;
(statearr_37994_37996[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37997 = state_37986;
state_37986 = G__37997;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27630__auto__ = function(state_37986){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27630__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27630__auto____1.call(this,state_37986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27630__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27630__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27743__auto__ = (function (){var statearr_37995 = f__27742__auto__.call(null);
(statearr_37995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto__);

return statearr_37995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto__,figwheel_version,temp__4657__auto__))
);

return c__27741__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37998){
var map__38002 = p__37998;
var map__38002__$1 = ((((!((map__38002 == null)))?((((map__38002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38002):map__38002);
var file = cljs.core.get.call(null,map__38002__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38002__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38002__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38004 = "";
var G__38004__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__38004),cljs.core.str("file "),cljs.core.str(file)].join(''):G__38004);
var G__38004__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__38004__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__38004__$1);
if(cljs.core.truth_((function (){var and__25089__auto__ = line;
if(cljs.core.truth_(and__25089__auto__)){
return column;
} else {
return and__25089__auto__;
}
})())){
return [cljs.core.str(G__38004__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__38004__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38005){
var map__38012 = p__38005;
var map__38012__$1 = ((((!((map__38012 == null)))?((((map__38012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38012):map__38012);
var ed = map__38012__$1;
var formatted_exception = cljs.core.get.call(null,map__38012__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38012__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38012__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38014_38018 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38015_38019 = null;
var count__38016_38020 = (0);
var i__38017_38021 = (0);
while(true){
if((i__38017_38021 < count__38016_38020)){
var msg_38022 = cljs.core._nth.call(null,chunk__38015_38019,i__38017_38021);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38022);

var G__38023 = seq__38014_38018;
var G__38024 = chunk__38015_38019;
var G__38025 = count__38016_38020;
var G__38026 = (i__38017_38021 + (1));
seq__38014_38018 = G__38023;
chunk__38015_38019 = G__38024;
count__38016_38020 = G__38025;
i__38017_38021 = G__38026;
continue;
} else {
var temp__4657__auto___38027 = cljs.core.seq.call(null,seq__38014_38018);
if(temp__4657__auto___38027){
var seq__38014_38028__$1 = temp__4657__auto___38027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38014_38028__$1)){
var c__25912__auto___38029 = cljs.core.chunk_first.call(null,seq__38014_38028__$1);
var G__38030 = cljs.core.chunk_rest.call(null,seq__38014_38028__$1);
var G__38031 = c__25912__auto___38029;
var G__38032 = cljs.core.count.call(null,c__25912__auto___38029);
var G__38033 = (0);
seq__38014_38018 = G__38030;
chunk__38015_38019 = G__38031;
count__38016_38020 = G__38032;
i__38017_38021 = G__38033;
continue;
} else {
var msg_38034 = cljs.core.first.call(null,seq__38014_38028__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38034);

var G__38035 = cljs.core.next.call(null,seq__38014_38028__$1);
var G__38036 = null;
var G__38037 = (0);
var G__38038 = (0);
seq__38014_38018 = G__38035;
chunk__38015_38019 = G__38036;
count__38016_38020 = G__38037;
i__38017_38021 = G__38038;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38039){
var map__38042 = p__38039;
var map__38042__$1 = ((((!((map__38042 == null)))?((((map__38042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38042):map__38042);
var w = map__38042__$1;
var message = cljs.core.get.call(null,map__38042__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/cljs/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/cljs/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25089__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25089__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25089__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38054 = cljs.core.seq.call(null,plugins);
var chunk__38055 = null;
var count__38056 = (0);
var i__38057 = (0);
while(true){
if((i__38057 < count__38056)){
var vec__38058 = cljs.core._nth.call(null,chunk__38055,i__38057);
var k = cljs.core.nth.call(null,vec__38058,(0),null);
var plugin = cljs.core.nth.call(null,vec__38058,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38064 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38054,chunk__38055,count__38056,i__38057,pl_38064,vec__38058,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38064.call(null,msg_hist);
});})(seq__38054,chunk__38055,count__38056,i__38057,pl_38064,vec__38058,k,plugin))
);
} else {
}

var G__38065 = seq__38054;
var G__38066 = chunk__38055;
var G__38067 = count__38056;
var G__38068 = (i__38057 + (1));
seq__38054 = G__38065;
chunk__38055 = G__38066;
count__38056 = G__38067;
i__38057 = G__38068;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38054);
if(temp__4657__auto__){
var seq__38054__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38054__$1)){
var c__25912__auto__ = cljs.core.chunk_first.call(null,seq__38054__$1);
var G__38069 = cljs.core.chunk_rest.call(null,seq__38054__$1);
var G__38070 = c__25912__auto__;
var G__38071 = cljs.core.count.call(null,c__25912__auto__);
var G__38072 = (0);
seq__38054 = G__38069;
chunk__38055 = G__38070;
count__38056 = G__38071;
i__38057 = G__38072;
continue;
} else {
var vec__38061 = cljs.core.first.call(null,seq__38054__$1);
var k = cljs.core.nth.call(null,vec__38061,(0),null);
var plugin = cljs.core.nth.call(null,vec__38061,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38073 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38054,chunk__38055,count__38056,i__38057,pl_38073,vec__38061,k,plugin,seq__38054__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38073.call(null,msg_hist);
});})(seq__38054,chunk__38055,count__38056,i__38057,pl_38073,vec__38061,k,plugin,seq__38054__$1,temp__4657__auto__))
);
} else {
}

var G__38074 = cljs.core.next.call(null,seq__38054__$1);
var G__38075 = null;
var G__38076 = (0);
var G__38077 = (0);
seq__38054 = G__38074;
chunk__38055 = G__38075;
count__38056 = G__38076;
i__38057 = G__38077;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args38078 = [];
var len__26176__auto___38085 = arguments.length;
var i__26177__auto___38086 = (0);
while(true){
if((i__26177__auto___38086 < len__26176__auto___38085)){
args38078.push((arguments[i__26177__auto___38086]));

var G__38087 = (i__26177__auto___38086 + (1));
i__26177__auto___38086 = G__38087;
continue;
} else {
}
break;
}

var G__38080 = args38078.length;
switch (G__38080) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38078.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38081_38089 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38082_38090 = null;
var count__38083_38091 = (0);
var i__38084_38092 = (0);
while(true){
if((i__38084_38092 < count__38083_38091)){
var msg_38093 = cljs.core._nth.call(null,chunk__38082_38090,i__38084_38092);
figwheel.client.socket.handle_incoming_message.call(null,msg_38093);

var G__38094 = seq__38081_38089;
var G__38095 = chunk__38082_38090;
var G__38096 = count__38083_38091;
var G__38097 = (i__38084_38092 + (1));
seq__38081_38089 = G__38094;
chunk__38082_38090 = G__38095;
count__38083_38091 = G__38096;
i__38084_38092 = G__38097;
continue;
} else {
var temp__4657__auto___38098 = cljs.core.seq.call(null,seq__38081_38089);
if(temp__4657__auto___38098){
var seq__38081_38099__$1 = temp__4657__auto___38098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38081_38099__$1)){
var c__25912__auto___38100 = cljs.core.chunk_first.call(null,seq__38081_38099__$1);
var G__38101 = cljs.core.chunk_rest.call(null,seq__38081_38099__$1);
var G__38102 = c__25912__auto___38100;
var G__38103 = cljs.core.count.call(null,c__25912__auto___38100);
var G__38104 = (0);
seq__38081_38089 = G__38101;
chunk__38082_38090 = G__38102;
count__38083_38091 = G__38103;
i__38084_38092 = G__38104;
continue;
} else {
var msg_38105 = cljs.core.first.call(null,seq__38081_38099__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38105);

var G__38106 = cljs.core.next.call(null,seq__38081_38099__$1);
var G__38107 = null;
var G__38108 = (0);
var G__38109 = (0);
seq__38081_38089 = G__38106;
chunk__38082_38090 = G__38107;
count__38083_38091 = G__38108;
i__38084_38092 = G__38109;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__26183__auto__ = [];
var len__26176__auto___38114 = arguments.length;
var i__26177__auto___38115 = (0);
while(true){
if((i__26177__auto___38115 < len__26176__auto___38114)){
args__26183__auto__.push((arguments[i__26177__auto___38115]));

var G__38116 = (i__26177__auto___38115 + (1));
i__26177__auto___38115 = G__38116;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((0) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26184__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38111){
var map__38112 = p__38111;
var map__38112__$1 = ((((!((map__38112 == null)))?((((map__38112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38112):map__38112);
var opts = map__38112__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38110){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38110));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38118){if((e38118 instanceof Error)){
var e = e38118;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38118;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__38122){
var map__38123 = p__38122;
var map__38123__$1 = ((((!((map__38123 == null)))?((((map__38123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38123):map__38123);
var msg_name = cljs.core.get.call(null,map__38123__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1487859348380