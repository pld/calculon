// Compiled by ClojureScript 1.9.229 {}
goog.provide('milia.api.http');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('milia.api.io');
goog.require('cljs_hash.md5');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
/**
 * Send and parse an HTTP response as JSON.
 * Additional arguments modify beavior of parse-http:
 * In both: `raw-response?`, `filename`, `http-options`.
 * In CLJ: `suppress-4xx-exceptions?`, `as-map?`.
 * In CLJS: `accept-header` `callback`, `no-cache?`.
 * When a request fails for one of the following reasons, an exception is thrown
 * with a map containing a `:reason` key, and an optional `:detail` key
 *  1. No response: {:reason :no-http-response}
 *  2. 4xx response: {:reason :http-client-error
 *                    :detail {:status-code <status-code>
 *                             :response <parsed-json-from-server>}
 *  3. 5xx response: {:reason :http-server-error
 *                    :detail {:response <raw-response>
 *                             :status-code <status-code>}
 */
milia.api.http.parse_http = (function milia$api$http$parse_http(var_args){
var args__26183__auto__ = [];
var len__26176__auto___32078 = arguments.length;
var i__26177__auto___32079 = (0);
while(true){
if((i__26177__auto___32079 < len__26176__auto___32078)){
args__26183__auto__.push((arguments[i__26177__auto___32079]));

var G__32080 = (i__26177__auto___32079 + (1));
i__26177__auto___32079 = G__32080;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((2) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((2)),(0),null)):null);
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26184__auto__);
});

milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic = (function (method,url,p__32062){
var map__32063 = p__32062;
var map__32063__$1 = ((((!((map__32063 == null)))?((((map__32063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32063):map__32063);
var http_options = cljs.core.get.call(null,map__32063__$1,new cljs.core.Keyword(null,"http-options","http-options",1919701946));
var accept_header = cljs.core.get.call(null,map__32063__$1,new cljs.core.Keyword(null,"accept-header","accept-header",2006207866));
var callback = cljs.core.get.call(null,map__32063__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var as_map_QMARK_ = cljs.core.get.call(null,map__32063__$1,new cljs.core.Keyword(null,"as-map?","as-map?",1213586270));
var auth_token = cljs.core.get.call(null,map__32063__$1,new cljs.core.Keyword(null,"auth-token","auth-token",30990976));
var suppress_4xx_exceptions_QMARK_ = cljs.core.get.call(null,map__32063__$1,new cljs.core.Keyword(null,"suppress-4xx-exceptions?","suppress-4xx-exceptions?",1524854880));
var must_revalidate_QMARK_ = cljs.core.get.call(null,map__32063__$1,new cljs.core.Keyword(null,"must-revalidate?","must-revalidate?",615367201));
var no_cache_QMARK_ = cljs.core.get.call(null,map__32063__$1,new cljs.core.Keyword(null,"no-cache?","no-cache?",-1868220981));
var filename = cljs.core.get.call(null,map__32063__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var raw_response_QMARK_ = cljs.core.get.call(null,map__32063__$1,new cljs.core.Keyword(null,"raw-response?","raw-response?",557978228));
if(cljs.core.truth_(filename)){
throw (new Error("File downloads auth not supported via JS"));
} else {
var request_fn = (cljs.core.truth_(raw_response_QMARK_)?milia.api.io.raw_request:cljs_http.client.request);
var headers = milia.api.io.token__GT_headers.call(null,new cljs.core.Keyword(null,"get-crsftoken?","get-crsftoken?",-2106616465),cljs.core.not_EQ_.call(null,method,new cljs.core.Keyword(null,"get","get",1683182755)),new cljs.core.Keyword(null,"must-revalidate?","must-revalidate?",615367201),must_revalidate_QMARK_,new cljs.core.Keyword(null,"accept-header","accept-header",2006207866),accept_header,new cljs.core.Keyword(null,"auth-token","auth-token",30990976),auth_token);
var ch = milia.api.io.http_request.call(null,request_fn,cljs.core.merge.call(null,milia.api.io.build_http_options.call(null,http_options,method,no_cache_QMARK_),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"url","url",276297046),url], null)));
if(cljs.core.truth_(callback)){
var c__27741__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto__,request_fn,headers,ch,map__32063,map__32063__$1,http_options,accept_header,callback,as_map_QMARK_,auth_token,suppress_4xx_exceptions_QMARK_,must_revalidate_QMARK_,no_cache_QMARK_,filename,raw_response_QMARK_){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto__,request_fn,headers,ch,map__32063,map__32063__$1,http_options,accept_header,callback,as_map_QMARK_,auth_token,suppress_4xx_exceptions_QMARK_,must_revalidate_QMARK_,no_cache_QMARK_,filename,raw_response_QMARK_){
return (function (state_32069){
var state_val_32070 = (state_32069[(1)]);
if((state_val_32070 === (1))){
var state_32069__$1 = state_32069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32069__$1,(2),ch);
} else {
if((state_val_32070 === (2))){
var inst_32066 = (state_32069[(2)]);
var inst_32067 = callback.call(null,inst_32066);
var state_32069__$1 = state_32069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32069__$1,inst_32067);
} else {
return null;
}
}
});})(c__27741__auto__,request_fn,headers,ch,map__32063,map__32063__$1,http_options,accept_header,callback,as_map_QMARK_,auth_token,suppress_4xx_exceptions_QMARK_,must_revalidate_QMARK_,no_cache_QMARK_,filename,raw_response_QMARK_))
;
return ((function (switch__27629__auto__,c__27741__auto__,request_fn,headers,ch,map__32063,map__32063__$1,http_options,accept_header,callback,as_map_QMARK_,auth_token,suppress_4xx_exceptions_QMARK_,must_revalidate_QMARK_,no_cache_QMARK_,filename,raw_response_QMARK_){
return (function() {
var milia$api$http$state_machine__27630__auto__ = null;
var milia$api$http$state_machine__27630__auto____0 = (function (){
var statearr_32074 = [null,null,null,null,null,null,null];
(statearr_32074[(0)] = milia$api$http$state_machine__27630__auto__);

(statearr_32074[(1)] = (1));

return statearr_32074;
});
var milia$api$http$state_machine__27630__auto____1 = (function (state_32069){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_32069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e32075){if((e32075 instanceof Object)){
var ex__27633__auto__ = e32075;
var statearr_32076_32081 = state_32069;
(statearr_32076_32081[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32082 = state_32069;
state_32069 = G__32082;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
milia$api$http$state_machine__27630__auto__ = function(state_32069){
switch(arguments.length){
case 0:
return milia$api$http$state_machine__27630__auto____0.call(this);
case 1:
return milia$api$http$state_machine__27630__auto____1.call(this,state_32069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
milia$api$http$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = milia$api$http$state_machine__27630__auto____0;
milia$api$http$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = milia$api$http$state_machine__27630__auto____1;
return milia$api$http$state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto__,request_fn,headers,ch,map__32063,map__32063__$1,http_options,accept_header,callback,as_map_QMARK_,auth_token,suppress_4xx_exceptions_QMARK_,must_revalidate_QMARK_,no_cache_QMARK_,filename,raw_response_QMARK_))
})();
var state__27743__auto__ = (function (){var statearr_32077 = f__27742__auto__.call(null);
(statearr_32077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto__);

return statearr_32077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto__,request_fn,headers,ch,map__32063,map__32063__$1,http_options,accept_header,callback,as_map_QMARK_,auth_token,suppress_4xx_exceptions_QMARK_,must_revalidate_QMARK_,no_cache_QMARK_,filename,raw_response_QMARK_))
);

return c__27741__auto__;
} else {
return ch;
}
}
});

milia.api.http.parse_http.cljs$lang$maxFixedArity = (2);

milia.api.http.parse_http.cljs$lang$applyTo = (function (seq32059){
var G__32060 = cljs.core.first.call(null,seq32059);
var seq32059__$1 = cljs.core.next.call(null,seq32059);
var G__32061 = cljs.core.first.call(null,seq32059__$1);
var seq32059__$2 = cljs.core.next.call(null,seq32059__$1);
return milia.api.http.parse_http.cljs$core$IFn$_invoke$arity$variadic(G__32060,G__32061,seq32059__$2);
});


//# sourceMappingURL=http.js.map?rel=1487859338371