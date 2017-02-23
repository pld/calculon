// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__25089__auto__ = v;
if(cljs.core.truth_(and__25089__auto__)){
return (v > (0));
} else {
return and__25089__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__30693_SHARP_,p2__30692_SHARP_){
var vec__30697 = clojure.string.split.call(null,p2__30692_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__30697,(0),null);
var v = cljs.core.nth.call(null,vec__30697,(1),null);
return cljs.core.assoc.call(null,p1__30693_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__30700_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__30700_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__30701){
var vec__30705 = p__30701;
var k = cljs.core.nth.call(null,vec__30705,(0),null);
var v = cljs.core.nth.call(null,vec__30705,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__30708_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__30708_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__25089__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__25089__auto__){
var and__25089__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__25089__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__25089__auto____$1;
}
} else {
return and__25089__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__30709_SHARP_){
return cljs_http.client.decode_body.call(null,p1__30709_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__26183__auto__ = [];
var len__26176__auto___30716 = arguments.length;
var i__26177__auto___30717 = (0);
while(true){
if((i__26177__auto___30717 < len__26176__auto___30716)){
args__26183__auto__.push((arguments[i__26177__auto___30717]));

var G__30718 = (i__26177__auto___30717 + (1));
i__26177__auto___30717 = G__30718;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__30712){
var vec__30713 = p__30712;
var default_headers = cljs.core.nth.call(null,vec__30713,(0),null);
return ((function (vec__30713,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__25101__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__25101__auto__)){
return or__25101__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__30713,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq30710){
var G__30711 = cljs.core.first.call(null,seq30710);
var seq30710__$1 = cljs.core.next.call(null,seq30710);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__30711,seq30710__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__26183__auto__ = [];
var len__26176__auto___30725 = arguments.length;
var i__26177__auto___30726 = (0);
while(true){
if((i__26177__auto___30726 < len__26176__auto___30725)){
args__26183__auto__.push((arguments[i__26177__auto___30726]));

var G__30727 = (i__26177__auto___30726 + (1));
i__26177__auto___30726 = G__30727;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__30721){
var vec__30722 = p__30721;
var accept = cljs.core.nth.call(null,vec__30722,(0),null);
return ((function (vec__30722,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__25101__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__25101__auto__)){
return or__25101__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__30722,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq30719){
var G__30720 = cljs.core.first.call(null,seq30719);
var seq30719__$1 = cljs.core.next.call(null,seq30719);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__30720,seq30719__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__26183__auto__ = [];
var len__26176__auto___30734 = arguments.length;
var i__26177__auto___30735 = (0);
while(true){
if((i__26177__auto___30735 < len__26176__auto___30734)){
args__26183__auto__.push((arguments[i__26177__auto___30735]));

var G__30736 = (i__26177__auto___30735 + (1));
i__26177__auto___30735 = G__30736;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__30730){
var vec__30731 = p__30730;
var content_type = cljs.core.nth.call(null,vec__30731,(0),null);
return ((function (vec__30731,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__25101__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__25101__auto__)){
return or__25101__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__30731,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq30728){
var G__30729 = cljs.core.first.call(null,seq30728);
var seq30728__$1 = cljs.core.next.call(null,seq30728);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__30729,seq30728__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__30739 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__30739__$1 = ((((!((map__30739 == null)))?((((map__30739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30739):map__30739);
var encoding = cljs.core.get.call(null,map__30739__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__30739__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__30745 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__30745__$1 = ((((!((map__30745 == null)))?((((map__30745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30745):map__30745);
var decoding = cljs.core.get.call(null,map__30745__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__30745__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__30745,map__30745__$1,decoding,decoding_opts){
return (function (p1__30741_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__30741_SHARP_,decoding,decoding_opts);
});})(map__30745,map__30745__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__30745,map__30745__$1,decoding,decoding_opts,transit_decode){
return (function (p1__30742_SHARP_){
return cljs_http.client.decode_body.call(null,p1__30742_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__30745,map__30745__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__30747_SHARP_){
return cljs_http.client.decode_body.call(null,p1__30747_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__30751){
var map__30752 = p__30751;
var map__30752__$1 = ((((!((map__30752 == null)))?((((map__30752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30752):map__30752);
var req = map__30752__$1;
var query_params = cljs.core.get.call(null,map__30752__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__30757){
var map__30758 = p__30757;
var map__30758__$1 = ((((!((map__30758 == null)))?((((map__30758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30758):map__30758);
var request = map__30758__$1;
var form_params = cljs.core.get.call(null,map__30758__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__30758__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__30758__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__25089__auto__ = form_params;
if(cljs.core.truth_(and__25089__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__25089__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__30770_30780 = cljs.core.seq.call(null,params);
var chunk__30771_30781 = null;
var count__30772_30782 = (0);
var i__30773_30783 = (0);
while(true){
if((i__30773_30783 < count__30772_30782)){
var vec__30774_30784 = cljs.core._nth.call(null,chunk__30771_30781,i__30773_30783);
var k_30785 = cljs.core.nth.call(null,vec__30774_30784,(0),null);
var v_30786 = cljs.core.nth.call(null,vec__30774_30784,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_30786)){
form_data.append(cljs.core.name.call(null,k_30785),cljs.core.first.call(null,v_30786),cljs.core.second.call(null,v_30786));
} else {
form_data.append(cljs.core.name.call(null,k_30785),v_30786);
}

var G__30787 = seq__30770_30780;
var G__30788 = chunk__30771_30781;
var G__30789 = count__30772_30782;
var G__30790 = (i__30773_30783 + (1));
seq__30770_30780 = G__30787;
chunk__30771_30781 = G__30788;
count__30772_30782 = G__30789;
i__30773_30783 = G__30790;
continue;
} else {
var temp__4657__auto___30791 = cljs.core.seq.call(null,seq__30770_30780);
if(temp__4657__auto___30791){
var seq__30770_30792__$1 = temp__4657__auto___30791;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30770_30792__$1)){
var c__25912__auto___30793 = cljs.core.chunk_first.call(null,seq__30770_30792__$1);
var G__30794 = cljs.core.chunk_rest.call(null,seq__30770_30792__$1);
var G__30795 = c__25912__auto___30793;
var G__30796 = cljs.core.count.call(null,c__25912__auto___30793);
var G__30797 = (0);
seq__30770_30780 = G__30794;
chunk__30771_30781 = G__30795;
count__30772_30782 = G__30796;
i__30773_30783 = G__30797;
continue;
} else {
var vec__30777_30798 = cljs.core.first.call(null,seq__30770_30792__$1);
var k_30799 = cljs.core.nth.call(null,vec__30777_30798,(0),null);
var v_30800 = cljs.core.nth.call(null,vec__30777_30798,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_30800)){
form_data.append(cljs.core.name.call(null,k_30799),cljs.core.first.call(null,v_30800),cljs.core.second.call(null,v_30800));
} else {
form_data.append(cljs.core.name.call(null,k_30799),v_30800);
}

var G__30801 = cljs.core.next.call(null,seq__30770_30792__$1);
var G__30802 = null;
var G__30803 = (0);
var G__30804 = (0);
seq__30770_30780 = G__30801;
chunk__30771_30781 = G__30802;
count__30772_30782 = G__30803;
i__30773_30783 = G__30804;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__30808){
var map__30809 = p__30808;
var map__30809__$1 = ((((!((map__30809 == null)))?((((map__30809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30809):map__30809);
var request = map__30809__$1;
var multipart_params = cljs.core.get.call(null,map__30809__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__30809__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__25089__auto__ = multipart_params;
if(cljs.core.truth_(and__25089__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__25089__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__30811_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__30811_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__30816){
var map__30817 = p__30816;
var map__30817__$1 = ((((!((map__30817 == null)))?((((map__30817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30817):map__30817);
var req = map__30817__$1;
var query_params = cljs.core.get.call(null,map__30817__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__30817,map__30817__$1,req,query_params){
return (function (p1__30812_SHARP_){
return cljs.core.merge.call(null,p1__30812_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__30817,map__30817__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__26183__auto__ = [];
var len__26176__auto___30825 = arguments.length;
var i__26177__auto___30826 = (0);
while(true){
if((i__26177__auto___30826 < len__26176__auto___30825)){
args__26183__auto__.push((arguments[i__26177__auto___30826]));

var G__30827 = (i__26177__auto___30826 + (1));
i__26177__auto___30826 = G__30827;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__30821){
var vec__30822 = p__30821;
var credentials = cljs.core.nth.call(null,vec__30822,(0),null);
return ((function (vec__30822,credentials){
return (function (req){
var credentials__$1 = (function (){var or__25101__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__25101__auto__)){
return or__25101__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__30822,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq30819){
var G__30820 = cljs.core.first.call(null,seq30819);
var seq30819__$1 = cljs.core.next.call(null,seq30819);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__30820,seq30819__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__26183__auto__ = [];
var len__26176__auto___30834 = arguments.length;
var i__26177__auto___30835 = (0);
while(true){
if((i__26177__auto___30835 < len__26176__auto___30834)){
args__26183__auto__.push((arguments[i__26177__auto___30835]));

var G__30836 = (i__26177__auto___30835 + (1));
i__26177__auto___30835 = G__30836;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30830){
var vec__30831 = p__30830;
var req = cljs.core.nth.call(null,vec__30831,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq30828){
var G__30829 = cljs.core.first.call(null,seq30828);
var seq30828__$1 = cljs.core.next.call(null,seq30828);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__30829,seq30828__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__26183__auto__ = [];
var len__26176__auto___30843 = arguments.length;
var i__26177__auto___30844 = (0);
while(true){
if((i__26177__auto___30844 < len__26176__auto___30843)){
args__26183__auto__.push((arguments[i__26177__auto___30844]));

var G__30845 = (i__26177__auto___30844 + (1));
i__26177__auto___30844 = G__30845;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30839){
var vec__30840 = p__30839;
var req = cljs.core.nth.call(null,vec__30840,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq30837){
var G__30838 = cljs.core.first.call(null,seq30837);
var seq30837__$1 = cljs.core.next.call(null,seq30837);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__30838,seq30837__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__26183__auto__ = [];
var len__26176__auto___30852 = arguments.length;
var i__26177__auto___30853 = (0);
while(true){
if((i__26177__auto___30853 < len__26176__auto___30852)){
args__26183__auto__.push((arguments[i__26177__auto___30853]));

var G__30854 = (i__26177__auto___30853 + (1));
i__26177__auto___30853 = G__30854;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30848){
var vec__30849 = p__30848;
var req = cljs.core.nth.call(null,vec__30849,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq30846){
var G__30847 = cljs.core.first.call(null,seq30846);
var seq30846__$1 = cljs.core.next.call(null,seq30846);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__30847,seq30846__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__26183__auto__ = [];
var len__26176__auto___30861 = arguments.length;
var i__26177__auto___30862 = (0);
while(true){
if((i__26177__auto___30862 < len__26176__auto___30861)){
args__26183__auto__.push((arguments[i__26177__auto___30862]));

var G__30863 = (i__26177__auto___30862 + (1));
i__26177__auto___30862 = G__30863;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30857){
var vec__30858 = p__30857;
var req = cljs.core.nth.call(null,vec__30858,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq30855){
var G__30856 = cljs.core.first.call(null,seq30855);
var seq30855__$1 = cljs.core.next.call(null,seq30855);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__30856,seq30855__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__26183__auto__ = [];
var len__26176__auto___30870 = arguments.length;
var i__26177__auto___30871 = (0);
while(true){
if((i__26177__auto___30871 < len__26176__auto___30870)){
args__26183__auto__.push((arguments[i__26177__auto___30871]));

var G__30872 = (i__26177__auto___30871 + (1));
i__26177__auto___30871 = G__30872;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30866){
var vec__30867 = p__30866;
var req = cljs.core.nth.call(null,vec__30867,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq30864){
var G__30865 = cljs.core.first.call(null,seq30864);
var seq30864__$1 = cljs.core.next.call(null,seq30864);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__30865,seq30864__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__26183__auto__ = [];
var len__26176__auto___30879 = arguments.length;
var i__26177__auto___30880 = (0);
while(true){
if((i__26177__auto___30880 < len__26176__auto___30879)){
args__26183__auto__.push((arguments[i__26177__auto___30880]));

var G__30881 = (i__26177__auto___30880 + (1));
i__26177__auto___30880 = G__30881;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30875){
var vec__30876 = p__30875;
var req = cljs.core.nth.call(null,vec__30876,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq30873){
var G__30874 = cljs.core.first.call(null,seq30873);
var seq30873__$1 = cljs.core.next.call(null,seq30873);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__30874,seq30873__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__26183__auto__ = [];
var len__26176__auto___30888 = arguments.length;
var i__26177__auto___30889 = (0);
while(true){
if((i__26177__auto___30889 < len__26176__auto___30888)){
args__26183__auto__.push((arguments[i__26177__auto___30889]));

var G__30890 = (i__26177__auto___30889 + (1));
i__26177__auto___30889 = G__30890;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30884){
var vec__30885 = p__30884;
var req = cljs.core.nth.call(null,vec__30885,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq30882){
var G__30883 = cljs.core.first.call(null,seq30882);
var seq30882__$1 = cljs.core.next.call(null,seq30882);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__30883,seq30882__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__26183__auto__ = [];
var len__26176__auto___30897 = arguments.length;
var i__26177__auto___30898 = (0);
while(true){
if((i__26177__auto___30898 < len__26176__auto___30897)){
args__26183__auto__.push((arguments[i__26177__auto___30898]));

var G__30899 = (i__26177__auto___30898 + (1));
i__26177__auto___30898 = G__30899;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30893){
var vec__30894 = p__30893;
var req = cljs.core.nth.call(null,vec__30894,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq30891){
var G__30892 = cljs.core.first.call(null,seq30891);
var seq30891__$1 = cljs.core.next.call(null,seq30891);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__30892,seq30891__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__26183__auto__ = [];
var len__26176__auto___30906 = arguments.length;
var i__26177__auto___30907 = (0);
while(true){
if((i__26177__auto___30907 < len__26176__auto___30906)){
args__26183__auto__.push((arguments[i__26177__auto___30907]));

var G__30908 = (i__26177__auto___30907 + (1));
i__26177__auto___30907 = G__30908;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30902){
var vec__30903 = p__30902;
var req = cljs.core.nth.call(null,vec__30903,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq30900){
var G__30901 = cljs.core.first.call(null,seq30900);
var seq30900__$1 = cljs.core.next.call(null,seq30900);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__30901,seq30900__$1);
});


//# sourceMappingURL=client.js.map?rel=1487859336928