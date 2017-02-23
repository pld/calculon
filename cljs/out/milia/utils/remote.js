// Compiled by ClojureScript 1.9.229 {}
goog.provide('milia.utils.remote');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('chimera.urls');
/**
 * Store credentials used to authenticate API requests.
 * Based on existence in this atom credentials will be tried in top down order.
 */
milia.utils.remote._STAR_credentials_STAR_ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"temp-token","temp-token",2129400071),null,new cljs.core.Keyword(null,"token","token",-1211463215),null,new cljs.core.Keyword(null,"username","username",1605666410),null,new cljs.core.Keyword(null,"password","password",417022471),null], null);
milia.utils.remote.invalid_token_msg = "Invalid token";
milia.utils.remote.token_expired_msg = "Token expired";
milia.utils.remote.bad_token_msgs = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [milia.utils.remote.invalid_token_msg,milia.utils.remote.token_expired_msg], null);
/**
 * Store remote hosts that requests are made to.
 */
milia.utils.remote.hosts = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"client","client",-1323448117),"zebra.ona.io",new cljs.core.Keyword(null,"data","data",-232669377),"stage-api.ona.io",new cljs.core.Keyword(null,"j2x","j2x",2112415912),"j2x.ona.io",new cljs.core.Keyword(null,"request-protocol","request-protocol",1273151787),"https"], null));
/**
 * Store customizable timeouts to use in the http libraries. In milliseconds.
 */
milia.utils.remote.timeouts = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"conn-timeout","conn-timeout",2119298951),(30000),new cljs.core.Keyword(null,"socket-timeout","socket-timeout",-877740564),(30000)], null));
/**
 * Swap values into hosts atom, requires data-host, other args are option but
 * must be provided in order. If an option arg is nil it is ignored, and not
 * swapped into hosts.
 * 
 * Built to support setting hosts from JavaScript.
 */
milia.utils.remote.set_hosts = (function milia$utils$remote$set_hosts(var_args){
var args__26183__auto__ = [];
var len__26176__auto___31902 = arguments.length;
var i__26177__auto___31903 = (0);
while(true){
if((i__26177__auto___31903 < len__26176__auto___31902)){
args__26183__auto__.push((arguments[i__26177__auto___31903]));

var G__31904 = (i__26177__auto___31903 + (1));
i__26177__auto___31903 = G__31904;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return milia.utils.remote.set_hosts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});
goog.exportSymbol('milia.utils.remote.set_hosts', milia.utils.remote.set_hosts);

milia.utils.remote.set_hosts.cljs$core$IFn$_invoke$arity$variadic = (function (data_host,p__31897){
var vec__31898 = p__31897;
var client_host = cljs.core.nth.call(null,vec__31898,(0),null);
var j2x_host = cljs.core.nth.call(null,vec__31898,(1),null);
var request_protocol = cljs.core.nth.call(null,vec__31898,(2),null);
return cljs.core.swap_BANG_.call(null,milia.utils.remote.hosts,cljs.core.merge,(function (){var G__31901 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data_host], null);
var G__31901__$1 = ((cljs.core.some_QMARK_.call(null,client_host))?cljs.core.assoc.call(null,G__31901,new cljs.core.Keyword(null,"client","client",-1323448117),client_host):G__31901);
var G__31901__$2 = ((cljs.core.some_QMARK_.call(null,j2x_host))?cljs.core.assoc.call(null,G__31901__$1,new cljs.core.Keyword(null,"j2x","j2x",2112415912),j2x_host):G__31901__$1);
if(cljs.core.some_QMARK_.call(null,request_protocol)){
return cljs.core.assoc.call(null,G__31901__$2,new cljs.core.Keyword(null,"request-protocol","request-protocol",1273151787),request_protocol);
} else {
return G__31901__$2;
}
})());
});

milia.utils.remote.set_hosts.cljs$lang$maxFixedArity = (1);

milia.utils.remote.set_hosts.cljs$lang$applyTo = (function (seq31895){
var G__31896 = cljs.core.first.call(null,seq31895);
var seq31895__$1 = cljs.core.next.call(null,seq31895);
return milia.utils.remote.set_hosts.cljs$core$IFn$_invoke$arity$variadic(G__31896,seq31895__$1);
});

/**
 * Set the dynamic credentials to include the username and optionally
 * any other arguments that are passed. If an argument is nil or not passed
 * it will be set to nil in the credentials.
 * 
 * Calling this from Clojure will break if not done from within a previous
 * binding of the *credentials* variable.
 * 
 * Built to support setting hosts from JavaScript.
 */
milia.utils.remote.set_credentials = (function milia$utils$remote$set_credentials(var_args){
var args__26183__auto__ = [];
var len__26176__auto___31911 = arguments.length;
var i__26177__auto___31912 = (0);
while(true){
if((i__26177__auto___31912 < len__26176__auto___31911)){
args__26183__auto__.push((arguments[i__26177__auto___31912]));

var G__31913 = (i__26177__auto___31912 + (1));
i__26177__auto___31912 = G__31913;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return milia.utils.remote.set_credentials.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});
goog.exportSymbol('milia.utils.remote.set_credentials', milia.utils.remote.set_credentials);

milia.utils.remote.set_credentials.cljs$core$IFn$_invoke$arity$variadic = (function (username,p__31907){
var vec__31908 = p__31907;
var password = cljs.core.nth.call(null,vec__31908,(0),null);
var temp_token = cljs.core.nth.call(null,vec__31908,(1),null);
var token = cljs.core.nth.call(null,vec__31908,(2),null);
return milia.utils.remote._STAR_credentials_STAR_ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"password","password",417022471),password,new cljs.core.Keyword(null,"temp-token","temp-token",2129400071),temp_token,new cljs.core.Keyword(null,"token","token",-1211463215),token], null);
});

milia.utils.remote.set_credentials.cljs$lang$maxFixedArity = (1);

milia.utils.remote.set_credentials.cljs$lang$applyTo = (function (seq31905){
var G__31906 = cljs.core.first.call(null,seq31905);
var seq31905__$1 = cljs.core.next.call(null,seq31905);
return milia.utils.remote.set_credentials.cljs$core$IFn$_invoke$arity$variadic(G__31906,seq31905__$1);
});

/**
 * Prefix the resources with the protocol and format strings.
 */
milia.utils.remote.protocol_prefixed = (function milia$utils$remote$protocol_prefixed(resources){
return clojure.string.join.call(null,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-protocol","request-protocol",1273151787).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,milia.utils.remote.hosts)),"://",resources], null)));
});
milia.utils.remote.thumbor_host = "images.ona.io";
milia.utils.remote.thumbor_server = milia.utils.remote.protocol_prefixed.call(null,milia.utils.remote.thumbor_host);
milia.utils.remote.url_join = (function milia$utils$remote$url_join(host,args){
return clojure.string.join.call(null,cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [host], null),cljs.core.apply.call(null,chimera.urls.url,args)));
});
/**
 * Build an API url.
 */
milia.utils.remote.make_url = (function milia$utils$remote$make_url(var_args){
var args__26183__auto__ = [];
var len__26176__auto___31915 = arguments.length;
var i__26177__auto___31916 = (0);
while(true){
if((i__26177__auto___31916 < len__26176__auto___31915)){
args__26183__auto__.push((arguments[i__26177__auto___31916]));

var G__31917 = (i__26177__auto___31916 + (1));
i__26177__auto___31916 = G__31917;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((0) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((0)),(0),null)):null);
return milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(argseq__26184__auto__);
});

milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic = (function (postfix){
return milia.utils.remote.url_join.call(null,[cljs.core.str(milia.utils.remote.protocol_prefixed.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,milia.utils.remote.hosts)))),cljs.core.str("/api/v1")].join(''),postfix);
});

milia.utils.remote.make_url.cljs$lang$maxFixedArity = (0);

milia.utils.remote.make_url.cljs$lang$applyTo = (function (seq31914){
return milia.utils.remote.make_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31914));
});

/**
 * Build a URL pointing to the client.
 */
milia.utils.remote.make_client_url = (function milia$utils$remote$make_client_url(var_args){
var args__26183__auto__ = [];
var len__26176__auto___31919 = arguments.length;
var i__26177__auto___31920 = (0);
while(true){
if((i__26177__auto___31920 < len__26176__auto___31919)){
args__26183__auto__.push((arguments[i__26177__auto___31920]));

var G__31921 = (i__26177__auto___31920 + (1));
i__26177__auto___31920 = G__31921;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((0) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((0)),(0),null)):null);
return milia.utils.remote.make_client_url.cljs$core$IFn$_invoke$arity$variadic(argseq__26184__auto__);
});

milia.utils.remote.make_client_url.cljs$core$IFn$_invoke$arity$variadic = (function (postfix){
var client_host = ((window["location"])["origin"]);
return milia.utils.remote.url_join.call(null,client_host,postfix);
});

milia.utils.remote.make_client_url.cljs$lang$maxFixedArity = (0);

milia.utils.remote.make_client_url.cljs$lang$applyTo = (function (seq31918){
return milia.utils.remote.make_client_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31918));
});

/**
 * Like make-url, but ensures an ending in .json
 */
milia.utils.remote.make_json_url = (function milia$utils$remote$make_json_url(var_args){
var args__26183__auto__ = [];
var len__26176__auto___31923 = arguments.length;
var i__26177__auto___31924 = (0);
while(true){
if((i__26177__auto___31924 < len__26176__auto___31923)){
args__26183__auto__.push((arguments[i__26177__auto___31924]));

var G__31925 = (i__26177__auto___31924 + (1));
i__26177__auto___31924 = G__31925;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((0) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((0)),(0),null)):null);
return milia.utils.remote.make_json_url.cljs$core$IFn$_invoke$arity$variadic(argseq__26184__auto__);
});

milia.utils.remote.make_json_url.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return [cljs.core.str(cljs.core.apply.call(null,milia.utils.remote.make_url,args)),cljs.core.str(".json")].join('');
});

milia.utils.remote.make_json_url.cljs$lang$maxFixedArity = (0);

milia.utils.remote.make_json_url.cljs$lang$applyTo = (function (seq31922){
return milia.utils.remote.make_json_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31922));
});

/**
 * Build an API url.
 */
milia.utils.remote.make_j2x_url = (function milia$utils$remote$make_j2x_url(var_args){
var args__26183__auto__ = [];
var len__26176__auto___31927 = arguments.length;
var i__26177__auto___31928 = (0);
while(true){
if((i__26177__auto___31928 < len__26176__auto___31927)){
args__26183__auto__.push((arguments[i__26177__auto___31928]));

var G__31929 = (i__26177__auto___31928 + (1));
i__26177__auto___31928 = G__31929;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((0) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((0)),(0),null)):null);
return milia.utils.remote.make_j2x_url.cljs$core$IFn$_invoke$arity$variadic(argseq__26184__auto__);
});

milia.utils.remote.make_j2x_url.cljs$core$IFn$_invoke$arity$variadic = (function (postfix){
return milia.utils.remote.url_join.call(null,milia.utils.remote.protocol_prefixed.call(null,new cljs.core.Keyword(null,"j2x","j2x",2112415912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,milia.utils.remote.hosts))),postfix);
});

milia.utils.remote.make_j2x_url.cljs$lang$maxFixedArity = (0);

milia.utils.remote.make_j2x_url.cljs$lang$applyTo = (function (seq31926){
return milia.utils.remote.make_j2x_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31926));
});


//# sourceMappingURL=remote.js.map?rel=1487859338118