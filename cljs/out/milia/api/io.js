// Compiled by ClojureScript 1.9.229 {}
goog.provide('milia.api.io');
goog.require('cljs.core');
goog.require('cljs_http.core');
goog.require('goog.net.cookies');
goog.require('goog.events');
goog.require('goog.net.IframeIo');
goog.require('cljs_http.client');
goog.require('cljs_hash.md5');
goog.require('cljs.core.async');
goog.require('chimera.seq');
goog.require('clojure.set');
goog.require('goog.net.XhrIo');
goog.require('chimera.string');
goog.require('clojure.string');
goog.require('milia.utils.remote');
/**
 * Build http-options based on arguments.
 */
milia.api.io.build_http_options = (function milia$api$io$build_http_options(http_options,method,no_cache_QMARK_){
var stateful_method_QMARK_ = chimera.seq.in_QMARK_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"patch","patch",380775109)], null),method);
var param_key = (cljs.core.truth_(stateful_method_QMARK_)?new cljs.core.Keyword(null,"form-params","form-params",1884296467):new cljs.core.Keyword(null,"query-params","query-params",900640534));
var http_options__$1 = cljs.core.assoc.call(null,http_options,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false);
var map__31937 = milia.utils.remote._STAR_credentials_STAR_;
var map__31937__$1 = ((((!((map__31937 == null)))?((((map__31937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31937):map__31937);
var username = cljs.core.get.call(null,map__31937__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var password = cljs.core.get.call(null,map__31937__$1,new cljs.core.Keyword(null,"password","password",417022471));
var G__31939 = http_options__$1;
var G__31939__$1 = (cljs.core.truth_((function (){var and__25089__auto__ = username;
if(cljs.core.truth_(and__25089__auto__)){
return password;
} else {
return and__25089__auto__;
}
})())?cljs.core.assoc.call(null,G__31939,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"password","password",417022471),password], null)):G__31939);
if(cljs.core.truth_((function (){var and__25089__auto__ = no_cache_QMARK_;
if(cljs.core.truth_(and__25089__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(http_options__$1))) && (cljs.core.not.call(null,stateful_method_QMARK_));
} else {
return and__25089__auto__;
}
})())){
return cljs.core.assoc_in.call(null,G__31939__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_key,new cljs.core.Keyword(null,"t","t",-1397832519)], null),cljs_hash.md5.md5.call(null,[cljs.core.str(Date.now())].join('')));
} else {
return G__31939__$1;
}
});
/**
 * An almost 'batteries-included' request, similar to cljs-http.client/request.
 * Contains everything except response decoding.
 */
milia.api.io.raw_request = cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,cljs_http.core.request))))))))));
/**
 * Builds request headers for the HTTP request by adding
 *   Authorization, X-CSRFToken and Cache-control headers where necessary
 */
milia.api.io.token__GT_headers = (function milia$api$io$token__GT_headers(var_args){
var args__26183__auto__ = [];
var len__26176__auto___31946 = arguments.length;
var i__26177__auto___31947 = (0);
while(true){
if((i__26177__auto___31947 < len__26176__auto___31946)){
args__26183__auto__.push((arguments[i__26177__auto___31947]));

var G__31948 = (i__26177__auto___31947 + (1));
i__26177__auto___31947 = G__31948;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((0) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((0)),(0),null)):null);
return milia.api.io.token__GT_headers.cljs$core$IFn$_invoke$arity$variadic(argseq__26184__auto__);
});

milia.api.io.token__GT_headers.cljs$core$IFn$_invoke$arity$variadic = (function (p__31941){
var map__31942 = p__31941;
var map__31942__$1 = ((((!((map__31942 == null)))?((((map__31942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31942):map__31942);
var get_crsftoken_QMARK_ = cljs.core.get.call(null,map__31942__$1,new cljs.core.Keyword(null,"get-crsftoken?","get-crsftoken?",-2106616465));
var must_revalidate_QMARK_ = cljs.core.get.call(null,map__31942__$1,new cljs.core.Keyword(null,"must-revalidate?","must-revalidate?",615367201));
var accept_header = cljs.core.get.call(null,map__31942__$1,new cljs.core.Keyword(null,"accept-header","accept-header",2006207866));
var auth_token = cljs.core.get.call(null,map__31942__$1,new cljs.core.Keyword(null,"auth-token","auth-token",30990976));
var map__31944 = milia.utils.remote._STAR_credentials_STAR_;
var map__31944__$1 = ((((!((map__31944 == null)))?((((map__31944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31944):map__31944);
var token = cljs.core.get.call(null,map__31944__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var temp_token = cljs.core.get.call(null,map__31944__$1,new cljs.core.Keyword(null,"temp-token","temp-token",2129400071));
var auth_token__$1 = (function (){var or__25101__auto__ = auth_token;
if(cljs.core.truth_(or__25101__auto__)){
return or__25101__auto__;
} else {
return token;
}
})();
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(auth_token__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Authorization",[cljs.core.str("Token "),cljs.core.str(auth_token__$1)].join('')], null):(cljs.core.truth_((function (){var and__25089__auto__ = cljs.core.not_empty.call(null,temp_token);
if(cljs.core.truth_(and__25089__auto__)){
return chimera.string.is_not_null_QMARK_.call(null,temp_token);
} else {
return and__25089__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Authorization",[cljs.core.str("TempToken "),cljs.core.str(temp_token)].join('')], null):null)),(cljs.core.truth_(must_revalidate_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cache-control","must-revalidate"], null):null),(function (){var temp__4657__auto__ = (function (){var and__25089__auto__ = get_crsftoken_QMARK_;
if(cljs.core.truth_(and__25089__auto__)){
return goog.net.cookies.get("csrftoken");
} else {
return and__25089__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var crsf_token = temp__4657__auto__;
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X-CSRFToken",crsf_token], null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X-CSRF-Token",crsf_token], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Accept",(function (){var or__25101__auto__ = accept_header;
if(cljs.core.truth_(or__25101__auto__)){
return or__25101__auto__;
} else {
return "application/json";
}
})()], null)], null));
});

milia.api.io.token__GT_headers.cljs$lang$maxFixedArity = (0);

milia.api.io.token__GT_headers.cljs$lang$applyTo = (function (seq31940){
return milia.api.io.token__GT_headers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31940));
});

/**
 * Get the response out of an object that watches an async/xhr request.
 * JsIoObject, Maybe {Keyword Bool} -> {:keyword }
 */
milia.api.io.get_xhr_io_response = (function milia$api$io$get_xhr_io_response(var_args){
var args__26183__auto__ = [];
var len__26176__auto___31958 = arguments.length;
var i__26177__auto___31959 = (0);
while(true){
if((i__26177__auto___31959 < len__26176__auto___31958)){
args__26183__auto__.push((arguments[i__26177__auto___31959]));

var G__31960 = (i__26177__auto___31959 + (1));
i__26177__auto___31959 = G__31960;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return milia.api.io.get_xhr_io_response.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});

milia.api.io.get_xhr_io_response.cljs$core$IFn$_invoke$arity$variadic = (function (io_obj,p__31951){
var vec__31952 = p__31951;
var map__31955 = cljs.core.nth.call(null,vec__31952,(0),null);
var map__31955__$1 = ((((!((map__31955 == null)))?((((map__31955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31955):map__31955);
var require_json_QMARK_ = cljs.core.get.call(null,map__31955__$1,new cljs.core.Keyword(null,"require-json?","require-json?",-243312611));
if(cljs.core.truth_(require_json_QMARK_)){
try{return io_obj.getResponseJson();
}catch (e31957){if((e31957 instanceof Error)){
var _ = e31957;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),io_obj.getResponseText()], null);
} else {
throw e31957;

}
}} else {
return io_obj.getResponseText();
}
});

milia.api.io.get_xhr_io_response.cljs$lang$maxFixedArity = (1);

milia.api.io.get_xhr_io_response.cljs$lang$applyTo = (function (seq31949){
var G__31950 = cljs.core.first.call(null,seq31949);
var seq31949__$1 = cljs.core.next.call(null,seq31949);
return milia.api.io.get_xhr_io_response.cljs$core$IFn$_invoke$arity$variadic(G__31950,seq31949__$1);
});

milia.api.io.upload_via_iframe = (function milia$api$io$upload_via_iframe(form,form_api,event_chan){
var io_obj = (new goog.net.IframeIo());
goog.events.listen(io_obj,goog.net.EventType.SUCCESS,((function (io_obj){
return (function (){
return cljs.core.async.put_BANG_.call(null,event_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),io_obj.getResponseText()], null));
});})(io_obj))
);

goog.events.listen(io_obj,goog.net.EventType.ERROR,((function (io_obj){
return (function (){
return cljs.core.async.put_BANG_.call(null,event_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),io_obj.getResponseText()], null));
});})(io_obj))
);

return io_obj.sendFromForm(form,[cljs.core.str(form_api),cljs.core.str("?legacy=true")].join(''));
});
/**
 * Use goog.net.XhrIo to upload file. Receives an HTML form object,
 *   a core.async channel where result message will be put
 *   and (optionally) an id to include in the result message. Returns the
 *   XhrIo object that can be used to abort request. More XhrIo API
 *   docs at: https://goo.gl/B0fm2a
 */
milia.api.io.upload_file = (function milia$api$io$upload_file(var_args){
var args__26183__auto__ = [];
var len__26176__auto___31968 = arguments.length;
var i__26177__auto___31969 = (0);
while(true){
if((i__26177__auto___31969 < len__26176__auto___31968)){
args__26183__auto__.push((arguments[i__26177__auto___31969]));

var G__31970 = (i__26177__auto___31969 + (1));
i__26177__auto___31969 = G__31970;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((2) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((2)),(0),null)):null);
return milia.api.io.upload_file.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26184__auto__);
});

milia.api.io.upload_file.cljs$core$IFn$_invoke$arity$variadic = (function (form,chan,p__31965){
var map__31966 = p__31965;
var map__31966__$1 = ((((!((map__31966 == null)))?((((map__31966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31966):map__31966);
var headers = cljs.core.get.call(null,map__31966__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var id = cljs.core.get.call(null,map__31966__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var require_json_QMARK_ = cljs.core.get.call(null,map__31966__$1,new cljs.core.Keyword(null,"require-json?","require-json?",-243312611));
var io_obj = (new goog.net.XhrIo());
var data = (cljs.core.truth_(id)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null):null);
var url = form.action;
io_obj.setProgressEventsEnabled(true);

goog.events.listen(io_obj,goog.net.EventType.SUCCESS,((function (io_obj,data,url,map__31966,map__31966__$1,headers,id,require_json_QMARK_){
return (function (){
return cljs.core.async.put_BANG_.call(null,chan,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"data","data",-232669377),milia.api.io.get_xhr_io_response.call(null,io_obj,require_json_QMARK_),new cljs.core.Keyword(null,"success?","success?",-122854052),true));
});})(io_obj,data,url,map__31966,map__31966__$1,headers,id,require_json_QMARK_))
);

goog.events.listen(io_obj,goog.net.EventType.ERROR,((function (io_obj,data,url,map__31966,map__31966__$1,headers,id,require_json_QMARK_){
return (function (){
return cljs.core.async.put_BANG_.call(null,chan,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"data","data",-232669377),milia.api.io.get_xhr_io_response.call(null,io_obj,require_json_QMARK_),new cljs.core.Keyword(null,"success?","success?",-122854052),false));
});})(io_obj,data,url,map__31966,map__31966__$1,headers,id,require_json_QMARK_))
);

goog.events.listen(io_obj,goog.net.EventType.PROGRESS,((function (io_obj,data,url,map__31966,map__31966__$1,headers,id,require_json_QMARK_){
return (function (p1__31961_SHARP_){
return cljs.core.async.put_BANG_.call(null,chan,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"length-computable","length-computable",-1947806960),p1__31961_SHARP_.lengthComputable,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),p1__31961_SHARP_.loaded,new cljs.core.Keyword(null,"total","total",1916810418),p1__31961_SHARP_.total], null)));
});})(io_obj,data,url,map__31966,map__31966__$1,headers,id,require_json_QMARK_))
);

io_obj.send(url,"POST",form,headers);

return io_obj;
});

milia.api.io.upload_file.cljs$lang$maxFixedArity = (2);

milia.api.io.upload_file.cljs$lang$applyTo = (function (seq31962){
var G__31963 = cljs.core.first.call(null,seq31962);
var seq31962__$1 = cljs.core.next.call(null,seq31962);
var G__31964 = cljs.core.first.call(null,seq31962__$1);
var seq31962__$2 = cljs.core.next.call(null,seq31962__$1);
return milia.api.io.upload_file.cljs$core$IFn$_invoke$arity$variadic(G__31963,G__31964,seq31962__$2);
});

/**
 * Wraps cljs-http.client/request and redirects if status is 401
 */
milia.api.io.http_request = (function milia$api$io$http_request(var_args){
var args__26183__auto__ = [];
var len__26176__auto___32034 = arguments.length;
var i__26177__auto___32035 = (0);
while(true){
if((i__26177__auto___32035 < len__26176__auto___32034)){
args__26183__auto__.push((arguments[i__26177__auto___32035]));

var G__32036 = (i__26177__auto___32035 + (1));
i__26177__auto___32035 = G__32036;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return milia.api.io.http_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});

milia.api.io.http_request.cljs$core$IFn$_invoke$arity$variadic = (function (request_fn,args){
var response_channel = cljs.core.async.chan.call(null);
var c__27741__auto___32037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto___32037,response_channel){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto___32037,response_channel){
return (function (state_32007){
var state_val_32008 = (state_32007[(1)]);
if((state_val_32008 === (7))){
var state_32007__$1 = state_32007;
var statearr_32009_32038 = state_32007__$1;
(statearr_32009_32038[(2)] = false);

(statearr_32009_32038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (1))){
var inst_31974 = cljs.core.apply.call(null,request_fn,args);
var state_32007__$1 = state_32007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32007__$1,(2),inst_31974);
} else {
if((state_val_32008 === (4))){
var state_32007__$1 = state_32007;
var statearr_32010_32039 = state_32007__$1;
(statearr_32010_32039[(2)] = false);

(statearr_32010_32039[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (13))){
var inst_31996 = (state_32007[(7)]);
var inst_32003 = cljs.core.async.put_BANG_.call(null,response_channel,inst_31996);
var state_32007__$1 = state_32007;
var statearr_32011_32040 = state_32007__$1;
(statearr_32011_32040[(2)] = inst_32003);

(statearr_32011_32040[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (6))){
var state_32007__$1 = state_32007;
var statearr_32012_32041 = state_32007__$1;
(statearr_32012_32041[(2)] = true);

(statearr_32012_32041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (3))){
var inst_31976 = (state_32007[(8)]);
var inst_31981 = inst_31976.cljs$lang$protocol_mask$partition0$;
var inst_31982 = (inst_31981 & (64));
var inst_31983 = inst_31976.cljs$core$ISeq$;
var inst_31984 = (inst_31982) || (inst_31983);
var state_32007__$1 = state_32007;
if(cljs.core.truth_(inst_31984)){
var statearr_32013_32042 = state_32007__$1;
(statearr_32013_32042[(1)] = (6));

} else {
var statearr_32014_32043 = state_32007__$1;
(statearr_32014_32043[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (12))){
var inst_32000 = window.location.href();
var inst_32001 = window.location = inst_32000;
var state_32007__$1 = state_32007;
var statearr_32015_32044 = state_32007__$1;
(statearr_32015_32044[(2)] = inst_32001);

(statearr_32015_32044[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (2))){
var inst_31976 = (state_32007[(8)]);
var inst_31976__$1 = (state_32007[(2)]);
var inst_31978 = (inst_31976__$1 == null);
var inst_31979 = cljs.core.not.call(null,inst_31978);
var state_32007__$1 = (function (){var statearr_32016 = state_32007;
(statearr_32016[(8)] = inst_31976__$1);

return statearr_32016;
})();
if(inst_31979){
var statearr_32017_32045 = state_32007__$1;
(statearr_32017_32045[(1)] = (3));

} else {
var statearr_32018_32046 = state_32007__$1;
(statearr_32018_32046[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (11))){
var inst_31996 = (state_32007[(7)]);
var inst_31996__$1 = (state_32007[(2)]);
var inst_31997 = cljs.core.get.call(null,inst_31996__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_31998 = cljs.core._EQ_.call(null,inst_31997,(401));
var state_32007__$1 = (function (){var statearr_32019 = state_32007;
(statearr_32019[(7)] = inst_31996__$1);

return statearr_32019;
})();
if(inst_31998){
var statearr_32020_32047 = state_32007__$1;
(statearr_32020_32047[(1)] = (12));

} else {
var statearr_32021_32048 = state_32007__$1;
(statearr_32021_32048[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (9))){
var inst_31976 = (state_32007[(8)]);
var inst_31993 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31976);
var state_32007__$1 = state_32007;
var statearr_32022_32049 = state_32007__$1;
(statearr_32022_32049[(2)] = inst_31993);

(statearr_32022_32049[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (5))){
var inst_31991 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
if(cljs.core.truth_(inst_31991)){
var statearr_32023_32050 = state_32007__$1;
(statearr_32023_32050[(1)] = (9));

} else {
var statearr_32024_32051 = state_32007__$1;
(statearr_32024_32051[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (14))){
var inst_32005 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32007__$1,inst_32005);
} else {
if((state_val_32008 === (10))){
var inst_31976 = (state_32007[(8)]);
var state_32007__$1 = state_32007;
var statearr_32025_32052 = state_32007__$1;
(statearr_32025_32052[(2)] = inst_31976);

(statearr_32025_32052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (8))){
var inst_31988 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32026_32053 = state_32007__$1;
(statearr_32026_32053[(2)] = inst_31988);

(statearr_32026_32053[(1)] = (5));


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
});})(c__27741__auto___32037,response_channel))
;
return ((function (switch__27629__auto__,c__27741__auto___32037,response_channel){
return (function() {
var milia$api$io$state_machine__27630__auto__ = null;
var milia$api$io$state_machine__27630__auto____0 = (function (){
var statearr_32030 = [null,null,null,null,null,null,null,null,null];
(statearr_32030[(0)] = milia$api$io$state_machine__27630__auto__);

(statearr_32030[(1)] = (1));

return statearr_32030;
});
var milia$api$io$state_machine__27630__auto____1 = (function (state_32007){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_32007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e32031){if((e32031 instanceof Object)){
var ex__27633__auto__ = e32031;
var statearr_32032_32054 = state_32007;
(statearr_32032_32054[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32055 = state_32007;
state_32007 = G__32055;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
milia$api$io$state_machine__27630__auto__ = function(state_32007){
switch(arguments.length){
case 0:
return milia$api$io$state_machine__27630__auto____0.call(this);
case 1:
return milia$api$io$state_machine__27630__auto____1.call(this,state_32007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
milia$api$io$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = milia$api$io$state_machine__27630__auto____0;
milia$api$io$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = milia$api$io$state_machine__27630__auto____1;
return milia$api$io$state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto___32037,response_channel))
})();
var state__27743__auto__ = (function (){var statearr_32033 = f__27742__auto__.call(null);
(statearr_32033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto___32037);

return statearr_32033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto___32037,response_channel))
);


return response_channel;
});

milia.api.io.http_request.cljs$lang$maxFixedArity = (1);

milia.api.io.http_request.cljs$lang$applyTo = (function (seq31971){
var G__31972 = cljs.core.first.call(null,seq31971);
var seq31971__$1 = cljs.core.next.call(null,seq31971);
return milia.api.io.http_request.cljs$core$IFn$_invoke$arity$variadic(G__31972,seq31971__$1);
});


//# sourceMappingURL=io.js.map?rel=1487859338287