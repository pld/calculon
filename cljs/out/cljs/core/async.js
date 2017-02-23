// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27786 = [];
var len__26176__auto___27792 = arguments.length;
var i__26177__auto___27793 = (0);
while(true){
if((i__26177__auto___27793 < len__26176__auto___27792)){
args27786.push((arguments[i__26177__auto___27793]));

var G__27794 = (i__26177__auto___27793 + (1));
i__26177__auto___27793 = G__27794;
continue;
} else {
}
break;
}

var G__27788 = args27786.length;
switch (G__27788) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27786.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27789 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27789 = (function (f,blockable,meta27790){
this.f = f;
this.blockable = blockable;
this.meta27790 = meta27790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27791,meta27790__$1){
var self__ = this;
var _27791__$1 = this;
return (new cljs.core.async.t_cljs$core$async27789(self__.f,self__.blockable,meta27790__$1));
});

cljs.core.async.t_cljs$core$async27789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27791){
var self__ = this;
var _27791__$1 = this;
return self__.meta27790;
});

cljs.core.async.t_cljs$core$async27789.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27789.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27789.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27789.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27789.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27790","meta27790",53124351,null)], null);
});

cljs.core.async.t_cljs$core$async27789.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27789.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27789";

cljs.core.async.t_cljs$core$async27789.cljs$lang$ctorPrWriter = (function (this__25707__auto__,writer__25708__auto__,opt__25709__auto__){
return cljs.core._write.call(null,writer__25708__auto__,"cljs.core.async/t_cljs$core$async27789");
});

cljs.core.async.__GT_t_cljs$core$async27789 = (function cljs$core$async$__GT_t_cljs$core$async27789(f__$1,blockable__$1,meta27790){
return (new cljs.core.async.t_cljs$core$async27789(f__$1,blockable__$1,meta27790));
});

}

return (new cljs.core.async.t_cljs$core$async27789(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27798 = [];
var len__26176__auto___27801 = arguments.length;
var i__26177__auto___27802 = (0);
while(true){
if((i__26177__auto___27802 < len__26176__auto___27801)){
args27798.push((arguments[i__26177__auto___27802]));

var G__27803 = (i__26177__auto___27802 + (1));
i__26177__auto___27802 = G__27803;
continue;
} else {
}
break;
}

var G__27800 = args27798.length;
switch (G__27800) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27798.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27805 = [];
var len__26176__auto___27808 = arguments.length;
var i__26177__auto___27809 = (0);
while(true){
if((i__26177__auto___27809 < len__26176__auto___27808)){
args27805.push((arguments[i__26177__auto___27809]));

var G__27810 = (i__26177__auto___27809 + (1));
i__26177__auto___27809 = G__27810;
continue;
} else {
}
break;
}

var G__27807 = args27805.length;
switch (G__27807) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27805.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27812 = [];
var len__26176__auto___27815 = arguments.length;
var i__26177__auto___27816 = (0);
while(true){
if((i__26177__auto___27816 < len__26176__auto___27815)){
args27812.push((arguments[i__26177__auto___27816]));

var G__27817 = (i__26177__auto___27816 + (1));
i__26177__auto___27816 = G__27817;
continue;
} else {
}
break;
}

var G__27814 = args27812.length;
switch (G__27814) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27812.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27819 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27819);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27819,ret){
return (function (){
return fn1.call(null,val_27819);
});})(val_27819,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27820 = [];
var len__26176__auto___27823 = arguments.length;
var i__26177__auto___27824 = (0);
while(true){
if((i__26177__auto___27824 < len__26176__auto___27823)){
args27820.push((arguments[i__26177__auto___27824]));

var G__27825 = (i__26177__auto___27824 + (1));
i__26177__auto___27824 = G__27825;
continue;
} else {
}
break;
}

var G__27822 = args27820.length;
switch (G__27822) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27820.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26016__auto___27827 = n;
var x_27828 = (0);
while(true){
if((x_27828 < n__26016__auto___27827)){
(a[x_27828] = (0));

var G__27829 = (x_27828 + (1));
x_27828 = G__27829;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27830 = (i + (1));
i = G__27830;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27834 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27834 = (function (alt_flag,flag,meta27835){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27835 = meta27835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27836,meta27835__$1){
var self__ = this;
var _27836__$1 = this;
return (new cljs.core.async.t_cljs$core$async27834(self__.alt_flag,self__.flag,meta27835__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27834.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27836){
var self__ = this;
var _27836__$1 = this;
return self__.meta27835;
});})(flag))
;

cljs.core.async.t_cljs$core$async27834.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27834.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27834.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27834.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27834.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27835","meta27835",660023803,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27834.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27834.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27834";

cljs.core.async.t_cljs$core$async27834.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25707__auto__,writer__25708__auto__,opt__25709__auto__){
return cljs.core._write.call(null,writer__25708__auto__,"cljs.core.async/t_cljs$core$async27834");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27834 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27834(alt_flag__$1,flag__$1,meta27835){
return (new cljs.core.async.t_cljs$core$async27834(alt_flag__$1,flag__$1,meta27835));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27834(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27840 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27840 = (function (alt_handler,flag,cb,meta27841){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27841 = meta27841;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27842,meta27841__$1){
var self__ = this;
var _27842__$1 = this;
return (new cljs.core.async.t_cljs$core$async27840(self__.alt_handler,self__.flag,self__.cb,meta27841__$1));
});

cljs.core.async.t_cljs$core$async27840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27842){
var self__ = this;
var _27842__$1 = this;
return self__.meta27841;
});

cljs.core.async.t_cljs$core$async27840.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27840.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27840.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27840.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27840.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27841","meta27841",-399482619,null)], null);
});

cljs.core.async.t_cljs$core$async27840.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27840.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27840";

cljs.core.async.t_cljs$core$async27840.cljs$lang$ctorPrWriter = (function (this__25707__auto__,writer__25708__auto__,opt__25709__auto__){
return cljs.core._write.call(null,writer__25708__auto__,"cljs.core.async/t_cljs$core$async27840");
});

cljs.core.async.__GT_t_cljs$core$async27840 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27840(alt_handler__$1,flag__$1,cb__$1,meta27841){
return (new cljs.core.async.t_cljs$core$async27840(alt_handler__$1,flag__$1,cb__$1,meta27841));
});

}

return (new cljs.core.async.t_cljs$core$async27840(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27843_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27843_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27844_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27844_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25101__auto__ = wport;
if(cljs.core.truth_(or__25101__auto__)){
return or__25101__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27845 = (i + (1));
i = G__27845;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25101__auto__ = ret;
if(cljs.core.truth_(or__25101__auto__)){
return or__25101__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25089__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25089__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25089__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__26183__auto__ = [];
var len__26176__auto___27851 = arguments.length;
var i__26177__auto___27852 = (0);
while(true){
if((i__26177__auto___27852 < len__26176__auto___27851)){
args__26183__auto__.push((arguments[i__26177__auto___27852]));

var G__27853 = (i__26177__auto___27852 + (1));
i__26177__auto___27852 = G__27853;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27848){
var map__27849 = p__27848;
var map__27849__$1 = ((((!((map__27849 == null)))?((((map__27849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27849):map__27849);
var opts = map__27849__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27846){
var G__27847 = cljs.core.first.call(null,seq27846);
var seq27846__$1 = cljs.core.next.call(null,seq27846);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27847,seq27846__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27854 = [];
var len__26176__auto___27904 = arguments.length;
var i__26177__auto___27905 = (0);
while(true){
if((i__26177__auto___27905 < len__26176__auto___27904)){
args27854.push((arguments[i__26177__auto___27905]));

var G__27906 = (i__26177__auto___27905 + (1));
i__26177__auto___27905 = G__27906;
continue;
} else {
}
break;
}

var G__27856 = args27854.length;
switch (G__27856) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27854.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27741__auto___27908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto___27908){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto___27908){
return (function (state_27880){
var state_val_27881 = (state_27880[(1)]);
if((state_val_27881 === (7))){
var inst_27876 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
var statearr_27882_27909 = state_27880__$1;
(statearr_27882_27909[(2)] = inst_27876);

(statearr_27882_27909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (1))){
var state_27880__$1 = state_27880;
var statearr_27883_27910 = state_27880__$1;
(statearr_27883_27910[(2)] = null);

(statearr_27883_27910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (4))){
var inst_27859 = (state_27880[(7)]);
var inst_27859__$1 = (state_27880[(2)]);
var inst_27860 = (inst_27859__$1 == null);
var state_27880__$1 = (function (){var statearr_27884 = state_27880;
(statearr_27884[(7)] = inst_27859__$1);

return statearr_27884;
})();
if(cljs.core.truth_(inst_27860)){
var statearr_27885_27911 = state_27880__$1;
(statearr_27885_27911[(1)] = (5));

} else {
var statearr_27886_27912 = state_27880__$1;
(statearr_27886_27912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (13))){
var state_27880__$1 = state_27880;
var statearr_27887_27913 = state_27880__$1;
(statearr_27887_27913[(2)] = null);

(statearr_27887_27913[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (6))){
var inst_27859 = (state_27880[(7)]);
var state_27880__$1 = state_27880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27880__$1,(11),to,inst_27859);
} else {
if((state_val_27881 === (3))){
var inst_27878 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27880__$1,inst_27878);
} else {
if((state_val_27881 === (12))){
var state_27880__$1 = state_27880;
var statearr_27888_27914 = state_27880__$1;
(statearr_27888_27914[(2)] = null);

(statearr_27888_27914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (2))){
var state_27880__$1 = state_27880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27880__$1,(4),from);
} else {
if((state_val_27881 === (11))){
var inst_27869 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
if(cljs.core.truth_(inst_27869)){
var statearr_27889_27915 = state_27880__$1;
(statearr_27889_27915[(1)] = (12));

} else {
var statearr_27890_27916 = state_27880__$1;
(statearr_27890_27916[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (9))){
var state_27880__$1 = state_27880;
var statearr_27891_27917 = state_27880__$1;
(statearr_27891_27917[(2)] = null);

(statearr_27891_27917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (5))){
var state_27880__$1 = state_27880;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27892_27918 = state_27880__$1;
(statearr_27892_27918[(1)] = (8));

} else {
var statearr_27893_27919 = state_27880__$1;
(statearr_27893_27919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (14))){
var inst_27874 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
var statearr_27894_27920 = state_27880__$1;
(statearr_27894_27920[(2)] = inst_27874);

(statearr_27894_27920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (10))){
var inst_27866 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
var statearr_27895_27921 = state_27880__$1;
(statearr_27895_27921[(2)] = inst_27866);

(statearr_27895_27921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (8))){
var inst_27863 = cljs.core.async.close_BANG_.call(null,to);
var state_27880__$1 = state_27880;
var statearr_27896_27922 = state_27880__$1;
(statearr_27896_27922[(2)] = inst_27863);

(statearr_27896_27922[(1)] = (10));


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
});})(c__27741__auto___27908))
;
return ((function (switch__27629__auto__,c__27741__auto___27908){
return (function() {
var cljs$core$async$state_machine__27630__auto__ = null;
var cljs$core$async$state_machine__27630__auto____0 = (function (){
var statearr_27900 = [null,null,null,null,null,null,null,null];
(statearr_27900[(0)] = cljs$core$async$state_machine__27630__auto__);

(statearr_27900[(1)] = (1));

return statearr_27900;
});
var cljs$core$async$state_machine__27630__auto____1 = (function (state_27880){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_27880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e27901){if((e27901 instanceof Object)){
var ex__27633__auto__ = e27901;
var statearr_27902_27923 = state_27880;
(statearr_27902_27923[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27924 = state_27880;
state_27880 = G__27924;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
cljs$core$async$state_machine__27630__auto__ = function(state_27880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27630__auto____1.call(this,state_27880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27630__auto____0;
cljs$core$async$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27630__auto____1;
return cljs$core$async$state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto___27908))
})();
var state__27743__auto__ = (function (){var statearr_27903 = f__27742__auto__.call(null);
(statearr_27903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto___27908);

return statearr_27903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto___27908))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28112){
var vec__28113 = p__28112;
var v = cljs.core.nth.call(null,vec__28113,(0),null);
var p = cljs.core.nth.call(null,vec__28113,(1),null);
var job = vec__28113;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27741__auto___28299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto___28299,res,vec__28113,v,p,job,jobs,results){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto___28299,res,vec__28113,v,p,job,jobs,results){
return (function (state_28120){
var state_val_28121 = (state_28120[(1)]);
if((state_val_28121 === (1))){
var state_28120__$1 = state_28120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28120__$1,(2),res,v);
} else {
if((state_val_28121 === (2))){
var inst_28117 = (state_28120[(2)]);
var inst_28118 = cljs.core.async.close_BANG_.call(null,res);
var state_28120__$1 = (function (){var statearr_28122 = state_28120;
(statearr_28122[(7)] = inst_28117);

return statearr_28122;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28120__$1,inst_28118);
} else {
return null;
}
}
});})(c__27741__auto___28299,res,vec__28113,v,p,job,jobs,results))
;
return ((function (switch__27629__auto__,c__27741__auto___28299,res,vec__28113,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____0 = (function (){
var statearr_28126 = [null,null,null,null,null,null,null,null];
(statearr_28126[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__);

(statearr_28126[(1)] = (1));

return statearr_28126;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____1 = (function (state_28120){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_28120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e28127){if((e28127 instanceof Object)){
var ex__27633__auto__ = e28127;
var statearr_28128_28300 = state_28120;
(statearr_28128_28300[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28301 = state_28120;
state_28120 = G__28301;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__ = function(state_28120){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____1.call(this,state_28120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto___28299,res,vec__28113,v,p,job,jobs,results))
})();
var state__27743__auto__ = (function (){var statearr_28129 = f__27742__auto__.call(null);
(statearr_28129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto___28299);

return statearr_28129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto___28299,res,vec__28113,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28130){
var vec__28131 = p__28130;
var v = cljs.core.nth.call(null,vec__28131,(0),null);
var p = cljs.core.nth.call(null,vec__28131,(1),null);
var job = vec__28131;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26016__auto___28302 = n;
var __28303 = (0);
while(true){
if((__28303 < n__26016__auto___28302)){
var G__28134_28304 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28134_28304) {
case "compute":
var c__27741__auto___28306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28303,c__27741__auto___28306,G__28134_28304,n__26016__auto___28302,jobs,results,process,async){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (__28303,c__27741__auto___28306,G__28134_28304,n__26016__auto___28302,jobs,results,process,async){
return (function (state_28147){
var state_val_28148 = (state_28147[(1)]);
if((state_val_28148 === (1))){
var state_28147__$1 = state_28147;
var statearr_28149_28307 = state_28147__$1;
(statearr_28149_28307[(2)] = null);

(statearr_28149_28307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28148 === (2))){
var state_28147__$1 = state_28147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28147__$1,(4),jobs);
} else {
if((state_val_28148 === (3))){
var inst_28145 = (state_28147[(2)]);
var state_28147__$1 = state_28147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28147__$1,inst_28145);
} else {
if((state_val_28148 === (4))){
var inst_28137 = (state_28147[(2)]);
var inst_28138 = process.call(null,inst_28137);
var state_28147__$1 = state_28147;
if(cljs.core.truth_(inst_28138)){
var statearr_28150_28308 = state_28147__$1;
(statearr_28150_28308[(1)] = (5));

} else {
var statearr_28151_28309 = state_28147__$1;
(statearr_28151_28309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28148 === (5))){
var state_28147__$1 = state_28147;
var statearr_28152_28310 = state_28147__$1;
(statearr_28152_28310[(2)] = null);

(statearr_28152_28310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28148 === (6))){
var state_28147__$1 = state_28147;
var statearr_28153_28311 = state_28147__$1;
(statearr_28153_28311[(2)] = null);

(statearr_28153_28311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28148 === (7))){
var inst_28143 = (state_28147[(2)]);
var state_28147__$1 = state_28147;
var statearr_28154_28312 = state_28147__$1;
(statearr_28154_28312[(2)] = inst_28143);

(statearr_28154_28312[(1)] = (3));


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
});})(__28303,c__27741__auto___28306,G__28134_28304,n__26016__auto___28302,jobs,results,process,async))
;
return ((function (__28303,switch__27629__auto__,c__27741__auto___28306,G__28134_28304,n__26016__auto___28302,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____0 = (function (){
var statearr_28158 = [null,null,null,null,null,null,null];
(statearr_28158[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__);

(statearr_28158[(1)] = (1));

return statearr_28158;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____1 = (function (state_28147){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_28147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e28159){if((e28159 instanceof Object)){
var ex__27633__auto__ = e28159;
var statearr_28160_28313 = state_28147;
(statearr_28160_28313[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28314 = state_28147;
state_28147 = G__28314;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__ = function(state_28147){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____1.call(this,state_28147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__;
})()
;})(__28303,switch__27629__auto__,c__27741__auto___28306,G__28134_28304,n__26016__auto___28302,jobs,results,process,async))
})();
var state__27743__auto__ = (function (){var statearr_28161 = f__27742__auto__.call(null);
(statearr_28161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto___28306);

return statearr_28161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(__28303,c__27741__auto___28306,G__28134_28304,n__26016__auto___28302,jobs,results,process,async))
);


break;
case "async":
var c__27741__auto___28315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28303,c__27741__auto___28315,G__28134_28304,n__26016__auto___28302,jobs,results,process,async){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (__28303,c__27741__auto___28315,G__28134_28304,n__26016__auto___28302,jobs,results,process,async){
return (function (state_28174){
var state_val_28175 = (state_28174[(1)]);
if((state_val_28175 === (1))){
var state_28174__$1 = state_28174;
var statearr_28176_28316 = state_28174__$1;
(statearr_28176_28316[(2)] = null);

(statearr_28176_28316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28175 === (2))){
var state_28174__$1 = state_28174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28174__$1,(4),jobs);
} else {
if((state_val_28175 === (3))){
var inst_28172 = (state_28174[(2)]);
var state_28174__$1 = state_28174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28174__$1,inst_28172);
} else {
if((state_val_28175 === (4))){
var inst_28164 = (state_28174[(2)]);
var inst_28165 = async.call(null,inst_28164);
var state_28174__$1 = state_28174;
if(cljs.core.truth_(inst_28165)){
var statearr_28177_28317 = state_28174__$1;
(statearr_28177_28317[(1)] = (5));

} else {
var statearr_28178_28318 = state_28174__$1;
(statearr_28178_28318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28175 === (5))){
var state_28174__$1 = state_28174;
var statearr_28179_28319 = state_28174__$1;
(statearr_28179_28319[(2)] = null);

(statearr_28179_28319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28175 === (6))){
var state_28174__$1 = state_28174;
var statearr_28180_28320 = state_28174__$1;
(statearr_28180_28320[(2)] = null);

(statearr_28180_28320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28175 === (7))){
var inst_28170 = (state_28174[(2)]);
var state_28174__$1 = state_28174;
var statearr_28181_28321 = state_28174__$1;
(statearr_28181_28321[(2)] = inst_28170);

(statearr_28181_28321[(1)] = (3));


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
});})(__28303,c__27741__auto___28315,G__28134_28304,n__26016__auto___28302,jobs,results,process,async))
;
return ((function (__28303,switch__27629__auto__,c__27741__auto___28315,G__28134_28304,n__26016__auto___28302,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____0 = (function (){
var statearr_28185 = [null,null,null,null,null,null,null];
(statearr_28185[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__);

(statearr_28185[(1)] = (1));

return statearr_28185;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____1 = (function (state_28174){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_28174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e28186){if((e28186 instanceof Object)){
var ex__27633__auto__ = e28186;
var statearr_28187_28322 = state_28174;
(statearr_28187_28322[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28323 = state_28174;
state_28174 = G__28323;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__ = function(state_28174){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____1.call(this,state_28174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__;
})()
;})(__28303,switch__27629__auto__,c__27741__auto___28315,G__28134_28304,n__26016__auto___28302,jobs,results,process,async))
})();
var state__27743__auto__ = (function (){var statearr_28188 = f__27742__auto__.call(null);
(statearr_28188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto___28315);

return statearr_28188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(__28303,c__27741__auto___28315,G__28134_28304,n__26016__auto___28302,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28324 = (__28303 + (1));
__28303 = G__28324;
continue;
} else {
}
break;
}

var c__27741__auto___28325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto___28325,jobs,results,process,async){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto___28325,jobs,results,process,async){
return (function (state_28210){
var state_val_28211 = (state_28210[(1)]);
if((state_val_28211 === (1))){
var state_28210__$1 = state_28210;
var statearr_28212_28326 = state_28210__$1;
(statearr_28212_28326[(2)] = null);

(statearr_28212_28326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (2))){
var state_28210__$1 = state_28210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28210__$1,(4),from);
} else {
if((state_val_28211 === (3))){
var inst_28208 = (state_28210[(2)]);
var state_28210__$1 = state_28210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28210__$1,inst_28208);
} else {
if((state_val_28211 === (4))){
var inst_28191 = (state_28210[(7)]);
var inst_28191__$1 = (state_28210[(2)]);
var inst_28192 = (inst_28191__$1 == null);
var state_28210__$1 = (function (){var statearr_28213 = state_28210;
(statearr_28213[(7)] = inst_28191__$1);

return statearr_28213;
})();
if(cljs.core.truth_(inst_28192)){
var statearr_28214_28327 = state_28210__$1;
(statearr_28214_28327[(1)] = (5));

} else {
var statearr_28215_28328 = state_28210__$1;
(statearr_28215_28328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (5))){
var inst_28194 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28210__$1 = state_28210;
var statearr_28216_28329 = state_28210__$1;
(statearr_28216_28329[(2)] = inst_28194);

(statearr_28216_28329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (6))){
var inst_28196 = (state_28210[(8)]);
var inst_28191 = (state_28210[(7)]);
var inst_28196__$1 = cljs.core.async.chan.call(null,(1));
var inst_28197 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28198 = [inst_28191,inst_28196__$1];
var inst_28199 = (new cljs.core.PersistentVector(null,2,(5),inst_28197,inst_28198,null));
var state_28210__$1 = (function (){var statearr_28217 = state_28210;
(statearr_28217[(8)] = inst_28196__$1);

return statearr_28217;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28210__$1,(8),jobs,inst_28199);
} else {
if((state_val_28211 === (7))){
var inst_28206 = (state_28210[(2)]);
var state_28210__$1 = state_28210;
var statearr_28218_28330 = state_28210__$1;
(statearr_28218_28330[(2)] = inst_28206);

(statearr_28218_28330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (8))){
var inst_28196 = (state_28210[(8)]);
var inst_28201 = (state_28210[(2)]);
var state_28210__$1 = (function (){var statearr_28219 = state_28210;
(statearr_28219[(9)] = inst_28201);

return statearr_28219;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28210__$1,(9),results,inst_28196);
} else {
if((state_val_28211 === (9))){
var inst_28203 = (state_28210[(2)]);
var state_28210__$1 = (function (){var statearr_28220 = state_28210;
(statearr_28220[(10)] = inst_28203);

return statearr_28220;
})();
var statearr_28221_28331 = state_28210__$1;
(statearr_28221_28331[(2)] = null);

(statearr_28221_28331[(1)] = (2));


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
});})(c__27741__auto___28325,jobs,results,process,async))
;
return ((function (switch__27629__auto__,c__27741__auto___28325,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____0 = (function (){
var statearr_28225 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28225[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__);

(statearr_28225[(1)] = (1));

return statearr_28225;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____1 = (function (state_28210){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_28210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e28226){if((e28226 instanceof Object)){
var ex__27633__auto__ = e28226;
var statearr_28227_28332 = state_28210;
(statearr_28227_28332[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28333 = state_28210;
state_28210 = G__28333;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__ = function(state_28210){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____1.call(this,state_28210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto___28325,jobs,results,process,async))
})();
var state__27743__auto__ = (function (){var statearr_28228 = f__27742__auto__.call(null);
(statearr_28228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto___28325);

return statearr_28228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto___28325,jobs,results,process,async))
);


var c__27741__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto__,jobs,results,process,async){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto__,jobs,results,process,async){
return (function (state_28266){
var state_val_28267 = (state_28266[(1)]);
if((state_val_28267 === (7))){
var inst_28262 = (state_28266[(2)]);
var state_28266__$1 = state_28266;
var statearr_28268_28334 = state_28266__$1;
(statearr_28268_28334[(2)] = inst_28262);

(statearr_28268_28334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (20))){
var state_28266__$1 = state_28266;
var statearr_28269_28335 = state_28266__$1;
(statearr_28269_28335[(2)] = null);

(statearr_28269_28335[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (1))){
var state_28266__$1 = state_28266;
var statearr_28270_28336 = state_28266__$1;
(statearr_28270_28336[(2)] = null);

(statearr_28270_28336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (4))){
var inst_28231 = (state_28266[(7)]);
var inst_28231__$1 = (state_28266[(2)]);
var inst_28232 = (inst_28231__$1 == null);
var state_28266__$1 = (function (){var statearr_28271 = state_28266;
(statearr_28271[(7)] = inst_28231__$1);

return statearr_28271;
})();
if(cljs.core.truth_(inst_28232)){
var statearr_28272_28337 = state_28266__$1;
(statearr_28272_28337[(1)] = (5));

} else {
var statearr_28273_28338 = state_28266__$1;
(statearr_28273_28338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (15))){
var inst_28244 = (state_28266[(8)]);
var state_28266__$1 = state_28266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28266__$1,(18),to,inst_28244);
} else {
if((state_val_28267 === (21))){
var inst_28257 = (state_28266[(2)]);
var state_28266__$1 = state_28266;
var statearr_28274_28339 = state_28266__$1;
(statearr_28274_28339[(2)] = inst_28257);

(statearr_28274_28339[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (13))){
var inst_28259 = (state_28266[(2)]);
var state_28266__$1 = (function (){var statearr_28275 = state_28266;
(statearr_28275[(9)] = inst_28259);

return statearr_28275;
})();
var statearr_28276_28340 = state_28266__$1;
(statearr_28276_28340[(2)] = null);

(statearr_28276_28340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (6))){
var inst_28231 = (state_28266[(7)]);
var state_28266__$1 = state_28266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28266__$1,(11),inst_28231);
} else {
if((state_val_28267 === (17))){
var inst_28252 = (state_28266[(2)]);
var state_28266__$1 = state_28266;
if(cljs.core.truth_(inst_28252)){
var statearr_28277_28341 = state_28266__$1;
(statearr_28277_28341[(1)] = (19));

} else {
var statearr_28278_28342 = state_28266__$1;
(statearr_28278_28342[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (3))){
var inst_28264 = (state_28266[(2)]);
var state_28266__$1 = state_28266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28266__$1,inst_28264);
} else {
if((state_val_28267 === (12))){
var inst_28241 = (state_28266[(10)]);
var state_28266__$1 = state_28266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28266__$1,(14),inst_28241);
} else {
if((state_val_28267 === (2))){
var state_28266__$1 = state_28266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28266__$1,(4),results);
} else {
if((state_val_28267 === (19))){
var state_28266__$1 = state_28266;
var statearr_28279_28343 = state_28266__$1;
(statearr_28279_28343[(2)] = null);

(statearr_28279_28343[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (11))){
var inst_28241 = (state_28266[(2)]);
var state_28266__$1 = (function (){var statearr_28280 = state_28266;
(statearr_28280[(10)] = inst_28241);

return statearr_28280;
})();
var statearr_28281_28344 = state_28266__$1;
(statearr_28281_28344[(2)] = null);

(statearr_28281_28344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (9))){
var state_28266__$1 = state_28266;
var statearr_28282_28345 = state_28266__$1;
(statearr_28282_28345[(2)] = null);

(statearr_28282_28345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (5))){
var state_28266__$1 = state_28266;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28283_28346 = state_28266__$1;
(statearr_28283_28346[(1)] = (8));

} else {
var statearr_28284_28347 = state_28266__$1;
(statearr_28284_28347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (14))){
var inst_28246 = (state_28266[(11)]);
var inst_28244 = (state_28266[(8)]);
var inst_28244__$1 = (state_28266[(2)]);
var inst_28245 = (inst_28244__$1 == null);
var inst_28246__$1 = cljs.core.not.call(null,inst_28245);
var state_28266__$1 = (function (){var statearr_28285 = state_28266;
(statearr_28285[(11)] = inst_28246__$1);

(statearr_28285[(8)] = inst_28244__$1);

return statearr_28285;
})();
if(inst_28246__$1){
var statearr_28286_28348 = state_28266__$1;
(statearr_28286_28348[(1)] = (15));

} else {
var statearr_28287_28349 = state_28266__$1;
(statearr_28287_28349[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (16))){
var inst_28246 = (state_28266[(11)]);
var state_28266__$1 = state_28266;
var statearr_28288_28350 = state_28266__$1;
(statearr_28288_28350[(2)] = inst_28246);

(statearr_28288_28350[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (10))){
var inst_28238 = (state_28266[(2)]);
var state_28266__$1 = state_28266;
var statearr_28289_28351 = state_28266__$1;
(statearr_28289_28351[(2)] = inst_28238);

(statearr_28289_28351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (18))){
var inst_28249 = (state_28266[(2)]);
var state_28266__$1 = state_28266;
var statearr_28290_28352 = state_28266__$1;
(statearr_28290_28352[(2)] = inst_28249);

(statearr_28290_28352[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (8))){
var inst_28235 = cljs.core.async.close_BANG_.call(null,to);
var state_28266__$1 = state_28266;
var statearr_28291_28353 = state_28266__$1;
(statearr_28291_28353[(2)] = inst_28235);

(statearr_28291_28353[(1)] = (10));


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
}
}
}
}
});})(c__27741__auto__,jobs,results,process,async))
;
return ((function (switch__27629__auto__,c__27741__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____0 = (function (){
var statearr_28295 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28295[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__);

(statearr_28295[(1)] = (1));

return statearr_28295;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____1 = (function (state_28266){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_28266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e28296){if((e28296 instanceof Object)){
var ex__27633__auto__ = e28296;
var statearr_28297_28354 = state_28266;
(statearr_28297_28354[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28355 = state_28266;
state_28266 = G__28355;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__ = function(state_28266){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____1.call(this,state_28266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto__,jobs,results,process,async))
})();
var state__27743__auto__ = (function (){var statearr_28298 = f__27742__auto__.call(null);
(statearr_28298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto__);

return statearr_28298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto__,jobs,results,process,async))
);

return c__27741__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28356 = [];
var len__26176__auto___28359 = arguments.length;
var i__26177__auto___28360 = (0);
while(true){
if((i__26177__auto___28360 < len__26176__auto___28359)){
args28356.push((arguments[i__26177__auto___28360]));

var G__28361 = (i__26177__auto___28360 + (1));
i__26177__auto___28360 = G__28361;
continue;
} else {
}
break;
}

var G__28358 = args28356.length;
switch (G__28358) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28356.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28363 = [];
var len__26176__auto___28366 = arguments.length;
var i__26177__auto___28367 = (0);
while(true){
if((i__26177__auto___28367 < len__26176__auto___28366)){
args28363.push((arguments[i__26177__auto___28367]));

var G__28368 = (i__26177__auto___28367 + (1));
i__26177__auto___28367 = G__28368;
continue;
} else {
}
break;
}

var G__28365 = args28363.length;
switch (G__28365) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28363.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28370 = [];
var len__26176__auto___28423 = arguments.length;
var i__26177__auto___28424 = (0);
while(true){
if((i__26177__auto___28424 < len__26176__auto___28423)){
args28370.push((arguments[i__26177__auto___28424]));

var G__28425 = (i__26177__auto___28424 + (1));
i__26177__auto___28424 = G__28425;
continue;
} else {
}
break;
}

var G__28372 = args28370.length;
switch (G__28372) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28370.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27741__auto___28427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto___28427,tc,fc){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto___28427,tc,fc){
return (function (state_28398){
var state_val_28399 = (state_28398[(1)]);
if((state_val_28399 === (7))){
var inst_28394 = (state_28398[(2)]);
var state_28398__$1 = state_28398;
var statearr_28400_28428 = state_28398__$1;
(statearr_28400_28428[(2)] = inst_28394);

(statearr_28400_28428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (1))){
var state_28398__$1 = state_28398;
var statearr_28401_28429 = state_28398__$1;
(statearr_28401_28429[(2)] = null);

(statearr_28401_28429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (4))){
var inst_28375 = (state_28398[(7)]);
var inst_28375__$1 = (state_28398[(2)]);
var inst_28376 = (inst_28375__$1 == null);
var state_28398__$1 = (function (){var statearr_28402 = state_28398;
(statearr_28402[(7)] = inst_28375__$1);

return statearr_28402;
})();
if(cljs.core.truth_(inst_28376)){
var statearr_28403_28430 = state_28398__$1;
(statearr_28403_28430[(1)] = (5));

} else {
var statearr_28404_28431 = state_28398__$1;
(statearr_28404_28431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (13))){
var state_28398__$1 = state_28398;
var statearr_28405_28432 = state_28398__$1;
(statearr_28405_28432[(2)] = null);

(statearr_28405_28432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (6))){
var inst_28375 = (state_28398[(7)]);
var inst_28381 = p.call(null,inst_28375);
var state_28398__$1 = state_28398;
if(cljs.core.truth_(inst_28381)){
var statearr_28406_28433 = state_28398__$1;
(statearr_28406_28433[(1)] = (9));

} else {
var statearr_28407_28434 = state_28398__$1;
(statearr_28407_28434[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (3))){
var inst_28396 = (state_28398[(2)]);
var state_28398__$1 = state_28398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28398__$1,inst_28396);
} else {
if((state_val_28399 === (12))){
var state_28398__$1 = state_28398;
var statearr_28408_28435 = state_28398__$1;
(statearr_28408_28435[(2)] = null);

(statearr_28408_28435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (2))){
var state_28398__$1 = state_28398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28398__$1,(4),ch);
} else {
if((state_val_28399 === (11))){
var inst_28375 = (state_28398[(7)]);
var inst_28385 = (state_28398[(2)]);
var state_28398__$1 = state_28398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28398__$1,(8),inst_28385,inst_28375);
} else {
if((state_val_28399 === (9))){
var state_28398__$1 = state_28398;
var statearr_28409_28436 = state_28398__$1;
(statearr_28409_28436[(2)] = tc);

(statearr_28409_28436[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (5))){
var inst_28378 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28379 = cljs.core.async.close_BANG_.call(null,fc);
var state_28398__$1 = (function (){var statearr_28410 = state_28398;
(statearr_28410[(8)] = inst_28378);

return statearr_28410;
})();
var statearr_28411_28437 = state_28398__$1;
(statearr_28411_28437[(2)] = inst_28379);

(statearr_28411_28437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (14))){
var inst_28392 = (state_28398[(2)]);
var state_28398__$1 = state_28398;
var statearr_28412_28438 = state_28398__$1;
(statearr_28412_28438[(2)] = inst_28392);

(statearr_28412_28438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (10))){
var state_28398__$1 = state_28398;
var statearr_28413_28439 = state_28398__$1;
(statearr_28413_28439[(2)] = fc);

(statearr_28413_28439[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (8))){
var inst_28387 = (state_28398[(2)]);
var state_28398__$1 = state_28398;
if(cljs.core.truth_(inst_28387)){
var statearr_28414_28440 = state_28398__$1;
(statearr_28414_28440[(1)] = (12));

} else {
var statearr_28415_28441 = state_28398__$1;
(statearr_28415_28441[(1)] = (13));

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
});})(c__27741__auto___28427,tc,fc))
;
return ((function (switch__27629__auto__,c__27741__auto___28427,tc,fc){
return (function() {
var cljs$core$async$state_machine__27630__auto__ = null;
var cljs$core$async$state_machine__27630__auto____0 = (function (){
var statearr_28419 = [null,null,null,null,null,null,null,null,null];
(statearr_28419[(0)] = cljs$core$async$state_machine__27630__auto__);

(statearr_28419[(1)] = (1));

return statearr_28419;
});
var cljs$core$async$state_machine__27630__auto____1 = (function (state_28398){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_28398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e28420){if((e28420 instanceof Object)){
var ex__27633__auto__ = e28420;
var statearr_28421_28442 = state_28398;
(statearr_28421_28442[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28443 = state_28398;
state_28398 = G__28443;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
cljs$core$async$state_machine__27630__auto__ = function(state_28398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27630__auto____1.call(this,state_28398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27630__auto____0;
cljs$core$async$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27630__auto____1;
return cljs$core$async$state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto___28427,tc,fc))
})();
var state__27743__auto__ = (function (){var statearr_28422 = f__27742__auto__.call(null);
(statearr_28422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto___28427);

return statearr_28422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto___28427,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27741__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto__){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto__){
return (function (state_28507){
var state_val_28508 = (state_28507[(1)]);
if((state_val_28508 === (7))){
var inst_28503 = (state_28507[(2)]);
var state_28507__$1 = state_28507;
var statearr_28509_28530 = state_28507__$1;
(statearr_28509_28530[(2)] = inst_28503);

(statearr_28509_28530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28508 === (1))){
var inst_28487 = init;
var state_28507__$1 = (function (){var statearr_28510 = state_28507;
(statearr_28510[(7)] = inst_28487);

return statearr_28510;
})();
var statearr_28511_28531 = state_28507__$1;
(statearr_28511_28531[(2)] = null);

(statearr_28511_28531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28508 === (4))){
var inst_28490 = (state_28507[(8)]);
var inst_28490__$1 = (state_28507[(2)]);
var inst_28491 = (inst_28490__$1 == null);
var state_28507__$1 = (function (){var statearr_28512 = state_28507;
(statearr_28512[(8)] = inst_28490__$1);

return statearr_28512;
})();
if(cljs.core.truth_(inst_28491)){
var statearr_28513_28532 = state_28507__$1;
(statearr_28513_28532[(1)] = (5));

} else {
var statearr_28514_28533 = state_28507__$1;
(statearr_28514_28533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28508 === (6))){
var inst_28494 = (state_28507[(9)]);
var inst_28490 = (state_28507[(8)]);
var inst_28487 = (state_28507[(7)]);
var inst_28494__$1 = f.call(null,inst_28487,inst_28490);
var inst_28495 = cljs.core.reduced_QMARK_.call(null,inst_28494__$1);
var state_28507__$1 = (function (){var statearr_28515 = state_28507;
(statearr_28515[(9)] = inst_28494__$1);

return statearr_28515;
})();
if(inst_28495){
var statearr_28516_28534 = state_28507__$1;
(statearr_28516_28534[(1)] = (8));

} else {
var statearr_28517_28535 = state_28507__$1;
(statearr_28517_28535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28508 === (3))){
var inst_28505 = (state_28507[(2)]);
var state_28507__$1 = state_28507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28507__$1,inst_28505);
} else {
if((state_val_28508 === (2))){
var state_28507__$1 = state_28507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28507__$1,(4),ch);
} else {
if((state_val_28508 === (9))){
var inst_28494 = (state_28507[(9)]);
var inst_28487 = inst_28494;
var state_28507__$1 = (function (){var statearr_28518 = state_28507;
(statearr_28518[(7)] = inst_28487);

return statearr_28518;
})();
var statearr_28519_28536 = state_28507__$1;
(statearr_28519_28536[(2)] = null);

(statearr_28519_28536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28508 === (5))){
var inst_28487 = (state_28507[(7)]);
var state_28507__$1 = state_28507;
var statearr_28520_28537 = state_28507__$1;
(statearr_28520_28537[(2)] = inst_28487);

(statearr_28520_28537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28508 === (10))){
var inst_28501 = (state_28507[(2)]);
var state_28507__$1 = state_28507;
var statearr_28521_28538 = state_28507__$1;
(statearr_28521_28538[(2)] = inst_28501);

(statearr_28521_28538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28508 === (8))){
var inst_28494 = (state_28507[(9)]);
var inst_28497 = cljs.core.deref.call(null,inst_28494);
var state_28507__$1 = state_28507;
var statearr_28522_28539 = state_28507__$1;
(statearr_28522_28539[(2)] = inst_28497);

(statearr_28522_28539[(1)] = (10));


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
});})(c__27741__auto__))
;
return ((function (switch__27629__auto__,c__27741__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27630__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27630__auto____0 = (function (){
var statearr_28526 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28526[(0)] = cljs$core$async$reduce_$_state_machine__27630__auto__);

(statearr_28526[(1)] = (1));

return statearr_28526;
});
var cljs$core$async$reduce_$_state_machine__27630__auto____1 = (function (state_28507){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_28507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e28527){if((e28527 instanceof Object)){
var ex__27633__auto__ = e28527;
var statearr_28528_28540 = state_28507;
(statearr_28528_28540[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28541 = state_28507;
state_28507 = G__28541;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27630__auto__ = function(state_28507){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27630__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27630__auto____1.call(this,state_28507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27630__auto____0;
cljs$core$async$reduce_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27630__auto____1;
return cljs$core$async$reduce_$_state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto__))
})();
var state__27743__auto__ = (function (){var statearr_28529 = f__27742__auto__.call(null);
(statearr_28529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto__);

return statearr_28529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto__))
);

return c__27741__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27741__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto__,f__$1){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto__,f__$1){
return (function (state_28561){
var state_val_28562 = (state_28561[(1)]);
if((state_val_28562 === (1))){
var inst_28556 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28561__$1 = state_28561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28561__$1,(2),inst_28556);
} else {
if((state_val_28562 === (2))){
var inst_28558 = (state_28561[(2)]);
var inst_28559 = f__$1.call(null,inst_28558);
var state_28561__$1 = state_28561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28561__$1,inst_28559);
} else {
return null;
}
}
});})(c__27741__auto__,f__$1))
;
return ((function (switch__27629__auto__,c__27741__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27630__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27630__auto____0 = (function (){
var statearr_28566 = [null,null,null,null,null,null,null];
(statearr_28566[(0)] = cljs$core$async$transduce_$_state_machine__27630__auto__);

(statearr_28566[(1)] = (1));

return statearr_28566;
});
var cljs$core$async$transduce_$_state_machine__27630__auto____1 = (function (state_28561){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_28561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e28567){if((e28567 instanceof Object)){
var ex__27633__auto__ = e28567;
var statearr_28568_28570 = state_28561;
(statearr_28568_28570[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28571 = state_28561;
state_28561 = G__28571;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27630__auto__ = function(state_28561){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27630__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27630__auto____1.call(this,state_28561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27630__auto____0;
cljs$core$async$transduce_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27630__auto____1;
return cljs$core$async$transduce_$_state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto__,f__$1))
})();
var state__27743__auto__ = (function (){var statearr_28569 = f__27742__auto__.call(null);
(statearr_28569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto__);

return statearr_28569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto__,f__$1))
);

return c__27741__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28572 = [];
var len__26176__auto___28624 = arguments.length;
var i__26177__auto___28625 = (0);
while(true){
if((i__26177__auto___28625 < len__26176__auto___28624)){
args28572.push((arguments[i__26177__auto___28625]));

var G__28626 = (i__26177__auto___28625 + (1));
i__26177__auto___28625 = G__28626;
continue;
} else {
}
break;
}

var G__28574 = args28572.length;
switch (G__28574) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28572.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27741__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto__){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto__){
return (function (state_28599){
var state_val_28600 = (state_28599[(1)]);
if((state_val_28600 === (7))){
var inst_28581 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28601_28628 = state_28599__$1;
(statearr_28601_28628[(2)] = inst_28581);

(statearr_28601_28628[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (1))){
var inst_28575 = cljs.core.seq.call(null,coll);
var inst_28576 = inst_28575;
var state_28599__$1 = (function (){var statearr_28602 = state_28599;
(statearr_28602[(7)] = inst_28576);

return statearr_28602;
})();
var statearr_28603_28629 = state_28599__$1;
(statearr_28603_28629[(2)] = null);

(statearr_28603_28629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (4))){
var inst_28576 = (state_28599[(7)]);
var inst_28579 = cljs.core.first.call(null,inst_28576);
var state_28599__$1 = state_28599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28599__$1,(7),ch,inst_28579);
} else {
if((state_val_28600 === (13))){
var inst_28593 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28604_28630 = state_28599__$1;
(statearr_28604_28630[(2)] = inst_28593);

(statearr_28604_28630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (6))){
var inst_28584 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
if(cljs.core.truth_(inst_28584)){
var statearr_28605_28631 = state_28599__$1;
(statearr_28605_28631[(1)] = (8));

} else {
var statearr_28606_28632 = state_28599__$1;
(statearr_28606_28632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (3))){
var inst_28597 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28599__$1,inst_28597);
} else {
if((state_val_28600 === (12))){
var state_28599__$1 = state_28599;
var statearr_28607_28633 = state_28599__$1;
(statearr_28607_28633[(2)] = null);

(statearr_28607_28633[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (2))){
var inst_28576 = (state_28599[(7)]);
var state_28599__$1 = state_28599;
if(cljs.core.truth_(inst_28576)){
var statearr_28608_28634 = state_28599__$1;
(statearr_28608_28634[(1)] = (4));

} else {
var statearr_28609_28635 = state_28599__$1;
(statearr_28609_28635[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (11))){
var inst_28590 = cljs.core.async.close_BANG_.call(null,ch);
var state_28599__$1 = state_28599;
var statearr_28610_28636 = state_28599__$1;
(statearr_28610_28636[(2)] = inst_28590);

(statearr_28610_28636[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (9))){
var state_28599__$1 = state_28599;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28611_28637 = state_28599__$1;
(statearr_28611_28637[(1)] = (11));

} else {
var statearr_28612_28638 = state_28599__$1;
(statearr_28612_28638[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (5))){
var inst_28576 = (state_28599[(7)]);
var state_28599__$1 = state_28599;
var statearr_28613_28639 = state_28599__$1;
(statearr_28613_28639[(2)] = inst_28576);

(statearr_28613_28639[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (10))){
var inst_28595 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28614_28640 = state_28599__$1;
(statearr_28614_28640[(2)] = inst_28595);

(statearr_28614_28640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (8))){
var inst_28576 = (state_28599[(7)]);
var inst_28586 = cljs.core.next.call(null,inst_28576);
var inst_28576__$1 = inst_28586;
var state_28599__$1 = (function (){var statearr_28615 = state_28599;
(statearr_28615[(7)] = inst_28576__$1);

return statearr_28615;
})();
var statearr_28616_28641 = state_28599__$1;
(statearr_28616_28641[(2)] = null);

(statearr_28616_28641[(1)] = (2));


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
});})(c__27741__auto__))
;
return ((function (switch__27629__auto__,c__27741__auto__){
return (function() {
var cljs$core$async$state_machine__27630__auto__ = null;
var cljs$core$async$state_machine__27630__auto____0 = (function (){
var statearr_28620 = [null,null,null,null,null,null,null,null];
(statearr_28620[(0)] = cljs$core$async$state_machine__27630__auto__);

(statearr_28620[(1)] = (1));

return statearr_28620;
});
var cljs$core$async$state_machine__27630__auto____1 = (function (state_28599){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_28599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e28621){if((e28621 instanceof Object)){
var ex__27633__auto__ = e28621;
var statearr_28622_28642 = state_28599;
(statearr_28622_28642[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28643 = state_28599;
state_28599 = G__28643;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
cljs$core$async$state_machine__27630__auto__ = function(state_28599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27630__auto____1.call(this,state_28599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27630__auto____0;
cljs$core$async$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27630__auto____1;
return cljs$core$async$state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto__))
})();
var state__27743__auto__ = (function (){var statearr_28623 = f__27742__auto__.call(null);
(statearr_28623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto__);

return statearr_28623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto__))
);

return c__27741__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25764__auto__ = (((_ == null))?null:_);
var m__25765__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25764__auto__)]);
if(!((m__25765__auto__ == null))){
return m__25765__auto__.call(null,_);
} else {
var m__25765__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25765__auto____$1 == null))){
return m__25765__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25764__auto__ = (((m == null))?null:m);
var m__25765__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25764__auto__)]);
if(!((m__25765__auto__ == null))){
return m__25765__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25765__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25765__auto____$1 == null))){
return m__25765__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25764__auto__ = (((m == null))?null:m);
var m__25765__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25764__auto__)]);
if(!((m__25765__auto__ == null))){
return m__25765__auto__.call(null,m,ch);
} else {
var m__25765__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25765__auto____$1 == null))){
return m__25765__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25764__auto__ = (((m == null))?null:m);
var m__25765__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25764__auto__)]);
if(!((m__25765__auto__ == null))){
return m__25765__auto__.call(null,m);
} else {
var m__25765__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25765__auto____$1 == null))){
return m__25765__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28869 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28869 = (function (mult,ch,cs,meta28870){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28870 = meta28870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28871,meta28870__$1){
var self__ = this;
var _28871__$1 = this;
return (new cljs.core.async.t_cljs$core$async28869(self__.mult,self__.ch,self__.cs,meta28870__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28871){
var self__ = this;
var _28871__$1 = this;
return self__.meta28870;
});})(cs))
;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28869.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28870","meta28870",1768547646,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28869.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28869";

cljs.core.async.t_cljs$core$async28869.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25707__auto__,writer__25708__auto__,opt__25709__auto__){
return cljs.core._write.call(null,writer__25708__auto__,"cljs.core.async/t_cljs$core$async28869");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28869 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28869(mult__$1,ch__$1,cs__$1,meta28870){
return (new cljs.core.async.t_cljs$core$async28869(mult__$1,ch__$1,cs__$1,meta28870));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28869(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27741__auto___29094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto___29094,cs,m,dchan,dctr,done){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto___29094,cs,m,dchan,dctr,done){
return (function (state_29006){
var state_val_29007 = (state_29006[(1)]);
if((state_val_29007 === (7))){
var inst_29002 = (state_29006[(2)]);
var state_29006__$1 = state_29006;
var statearr_29008_29095 = state_29006__$1;
(statearr_29008_29095[(2)] = inst_29002);

(statearr_29008_29095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (20))){
var inst_28905 = (state_29006[(7)]);
var inst_28917 = cljs.core.first.call(null,inst_28905);
var inst_28918 = cljs.core.nth.call(null,inst_28917,(0),null);
var inst_28919 = cljs.core.nth.call(null,inst_28917,(1),null);
var state_29006__$1 = (function (){var statearr_29009 = state_29006;
(statearr_29009[(8)] = inst_28918);

return statearr_29009;
})();
if(cljs.core.truth_(inst_28919)){
var statearr_29010_29096 = state_29006__$1;
(statearr_29010_29096[(1)] = (22));

} else {
var statearr_29011_29097 = state_29006__$1;
(statearr_29011_29097[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (27))){
var inst_28949 = (state_29006[(9)]);
var inst_28874 = (state_29006[(10)]);
var inst_28947 = (state_29006[(11)]);
var inst_28954 = (state_29006[(12)]);
var inst_28954__$1 = cljs.core._nth.call(null,inst_28947,inst_28949);
var inst_28955 = cljs.core.async.put_BANG_.call(null,inst_28954__$1,inst_28874,done);
var state_29006__$1 = (function (){var statearr_29012 = state_29006;
(statearr_29012[(12)] = inst_28954__$1);

return statearr_29012;
})();
if(cljs.core.truth_(inst_28955)){
var statearr_29013_29098 = state_29006__$1;
(statearr_29013_29098[(1)] = (30));

} else {
var statearr_29014_29099 = state_29006__$1;
(statearr_29014_29099[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (1))){
var state_29006__$1 = state_29006;
var statearr_29015_29100 = state_29006__$1;
(statearr_29015_29100[(2)] = null);

(statearr_29015_29100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (24))){
var inst_28905 = (state_29006[(7)]);
var inst_28924 = (state_29006[(2)]);
var inst_28925 = cljs.core.next.call(null,inst_28905);
var inst_28883 = inst_28925;
var inst_28884 = null;
var inst_28885 = (0);
var inst_28886 = (0);
var state_29006__$1 = (function (){var statearr_29016 = state_29006;
(statearr_29016[(13)] = inst_28885);

(statearr_29016[(14)] = inst_28883);

(statearr_29016[(15)] = inst_28884);

(statearr_29016[(16)] = inst_28886);

(statearr_29016[(17)] = inst_28924);

return statearr_29016;
})();
var statearr_29017_29101 = state_29006__$1;
(statearr_29017_29101[(2)] = null);

(statearr_29017_29101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (39))){
var state_29006__$1 = state_29006;
var statearr_29021_29102 = state_29006__$1;
(statearr_29021_29102[(2)] = null);

(statearr_29021_29102[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (4))){
var inst_28874 = (state_29006[(10)]);
var inst_28874__$1 = (state_29006[(2)]);
var inst_28875 = (inst_28874__$1 == null);
var state_29006__$1 = (function (){var statearr_29022 = state_29006;
(statearr_29022[(10)] = inst_28874__$1);

return statearr_29022;
})();
if(cljs.core.truth_(inst_28875)){
var statearr_29023_29103 = state_29006__$1;
(statearr_29023_29103[(1)] = (5));

} else {
var statearr_29024_29104 = state_29006__$1;
(statearr_29024_29104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (15))){
var inst_28885 = (state_29006[(13)]);
var inst_28883 = (state_29006[(14)]);
var inst_28884 = (state_29006[(15)]);
var inst_28886 = (state_29006[(16)]);
var inst_28901 = (state_29006[(2)]);
var inst_28902 = (inst_28886 + (1));
var tmp29018 = inst_28885;
var tmp29019 = inst_28883;
var tmp29020 = inst_28884;
var inst_28883__$1 = tmp29019;
var inst_28884__$1 = tmp29020;
var inst_28885__$1 = tmp29018;
var inst_28886__$1 = inst_28902;
var state_29006__$1 = (function (){var statearr_29025 = state_29006;
(statearr_29025[(13)] = inst_28885__$1);

(statearr_29025[(14)] = inst_28883__$1);

(statearr_29025[(15)] = inst_28884__$1);

(statearr_29025[(16)] = inst_28886__$1);

(statearr_29025[(18)] = inst_28901);

return statearr_29025;
})();
var statearr_29026_29105 = state_29006__$1;
(statearr_29026_29105[(2)] = null);

(statearr_29026_29105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (21))){
var inst_28928 = (state_29006[(2)]);
var state_29006__$1 = state_29006;
var statearr_29030_29106 = state_29006__$1;
(statearr_29030_29106[(2)] = inst_28928);

(statearr_29030_29106[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (31))){
var inst_28954 = (state_29006[(12)]);
var inst_28958 = done.call(null,null);
var inst_28959 = cljs.core.async.untap_STAR_.call(null,m,inst_28954);
var state_29006__$1 = (function (){var statearr_29031 = state_29006;
(statearr_29031[(19)] = inst_28958);

return statearr_29031;
})();
var statearr_29032_29107 = state_29006__$1;
(statearr_29032_29107[(2)] = inst_28959);

(statearr_29032_29107[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (32))){
var inst_28949 = (state_29006[(9)]);
var inst_28947 = (state_29006[(11)]);
var inst_28948 = (state_29006[(20)]);
var inst_28946 = (state_29006[(21)]);
var inst_28961 = (state_29006[(2)]);
var inst_28962 = (inst_28949 + (1));
var tmp29027 = inst_28947;
var tmp29028 = inst_28948;
var tmp29029 = inst_28946;
var inst_28946__$1 = tmp29029;
var inst_28947__$1 = tmp29027;
var inst_28948__$1 = tmp29028;
var inst_28949__$1 = inst_28962;
var state_29006__$1 = (function (){var statearr_29033 = state_29006;
(statearr_29033[(9)] = inst_28949__$1);

(statearr_29033[(11)] = inst_28947__$1);

(statearr_29033[(20)] = inst_28948__$1);

(statearr_29033[(22)] = inst_28961);

(statearr_29033[(21)] = inst_28946__$1);

return statearr_29033;
})();
var statearr_29034_29108 = state_29006__$1;
(statearr_29034_29108[(2)] = null);

(statearr_29034_29108[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (40))){
var inst_28974 = (state_29006[(23)]);
var inst_28978 = done.call(null,null);
var inst_28979 = cljs.core.async.untap_STAR_.call(null,m,inst_28974);
var state_29006__$1 = (function (){var statearr_29035 = state_29006;
(statearr_29035[(24)] = inst_28978);

return statearr_29035;
})();
var statearr_29036_29109 = state_29006__$1;
(statearr_29036_29109[(2)] = inst_28979);

(statearr_29036_29109[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (33))){
var inst_28965 = (state_29006[(25)]);
var inst_28967 = cljs.core.chunked_seq_QMARK_.call(null,inst_28965);
var state_29006__$1 = state_29006;
if(inst_28967){
var statearr_29037_29110 = state_29006__$1;
(statearr_29037_29110[(1)] = (36));

} else {
var statearr_29038_29111 = state_29006__$1;
(statearr_29038_29111[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (13))){
var inst_28895 = (state_29006[(26)]);
var inst_28898 = cljs.core.async.close_BANG_.call(null,inst_28895);
var state_29006__$1 = state_29006;
var statearr_29039_29112 = state_29006__$1;
(statearr_29039_29112[(2)] = inst_28898);

(statearr_29039_29112[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (22))){
var inst_28918 = (state_29006[(8)]);
var inst_28921 = cljs.core.async.close_BANG_.call(null,inst_28918);
var state_29006__$1 = state_29006;
var statearr_29040_29113 = state_29006__$1;
(statearr_29040_29113[(2)] = inst_28921);

(statearr_29040_29113[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (36))){
var inst_28965 = (state_29006[(25)]);
var inst_28969 = cljs.core.chunk_first.call(null,inst_28965);
var inst_28970 = cljs.core.chunk_rest.call(null,inst_28965);
var inst_28971 = cljs.core.count.call(null,inst_28969);
var inst_28946 = inst_28970;
var inst_28947 = inst_28969;
var inst_28948 = inst_28971;
var inst_28949 = (0);
var state_29006__$1 = (function (){var statearr_29041 = state_29006;
(statearr_29041[(9)] = inst_28949);

(statearr_29041[(11)] = inst_28947);

(statearr_29041[(20)] = inst_28948);

(statearr_29041[(21)] = inst_28946);

return statearr_29041;
})();
var statearr_29042_29114 = state_29006__$1;
(statearr_29042_29114[(2)] = null);

(statearr_29042_29114[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (41))){
var inst_28965 = (state_29006[(25)]);
var inst_28981 = (state_29006[(2)]);
var inst_28982 = cljs.core.next.call(null,inst_28965);
var inst_28946 = inst_28982;
var inst_28947 = null;
var inst_28948 = (0);
var inst_28949 = (0);
var state_29006__$1 = (function (){var statearr_29043 = state_29006;
(statearr_29043[(9)] = inst_28949);

(statearr_29043[(11)] = inst_28947);

(statearr_29043[(20)] = inst_28948);

(statearr_29043[(21)] = inst_28946);

(statearr_29043[(27)] = inst_28981);

return statearr_29043;
})();
var statearr_29044_29115 = state_29006__$1;
(statearr_29044_29115[(2)] = null);

(statearr_29044_29115[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (43))){
var state_29006__$1 = state_29006;
var statearr_29045_29116 = state_29006__$1;
(statearr_29045_29116[(2)] = null);

(statearr_29045_29116[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (29))){
var inst_28990 = (state_29006[(2)]);
var state_29006__$1 = state_29006;
var statearr_29046_29117 = state_29006__$1;
(statearr_29046_29117[(2)] = inst_28990);

(statearr_29046_29117[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (44))){
var inst_28999 = (state_29006[(2)]);
var state_29006__$1 = (function (){var statearr_29047 = state_29006;
(statearr_29047[(28)] = inst_28999);

return statearr_29047;
})();
var statearr_29048_29118 = state_29006__$1;
(statearr_29048_29118[(2)] = null);

(statearr_29048_29118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (6))){
var inst_28938 = (state_29006[(29)]);
var inst_28937 = cljs.core.deref.call(null,cs);
var inst_28938__$1 = cljs.core.keys.call(null,inst_28937);
var inst_28939 = cljs.core.count.call(null,inst_28938__$1);
var inst_28940 = cljs.core.reset_BANG_.call(null,dctr,inst_28939);
var inst_28945 = cljs.core.seq.call(null,inst_28938__$1);
var inst_28946 = inst_28945;
var inst_28947 = null;
var inst_28948 = (0);
var inst_28949 = (0);
var state_29006__$1 = (function (){var statearr_29049 = state_29006;
(statearr_29049[(30)] = inst_28940);

(statearr_29049[(9)] = inst_28949);

(statearr_29049[(29)] = inst_28938__$1);

(statearr_29049[(11)] = inst_28947);

(statearr_29049[(20)] = inst_28948);

(statearr_29049[(21)] = inst_28946);

return statearr_29049;
})();
var statearr_29050_29119 = state_29006__$1;
(statearr_29050_29119[(2)] = null);

(statearr_29050_29119[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (28))){
var inst_28946 = (state_29006[(21)]);
var inst_28965 = (state_29006[(25)]);
var inst_28965__$1 = cljs.core.seq.call(null,inst_28946);
var state_29006__$1 = (function (){var statearr_29051 = state_29006;
(statearr_29051[(25)] = inst_28965__$1);

return statearr_29051;
})();
if(inst_28965__$1){
var statearr_29052_29120 = state_29006__$1;
(statearr_29052_29120[(1)] = (33));

} else {
var statearr_29053_29121 = state_29006__$1;
(statearr_29053_29121[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (25))){
var inst_28949 = (state_29006[(9)]);
var inst_28948 = (state_29006[(20)]);
var inst_28951 = (inst_28949 < inst_28948);
var inst_28952 = inst_28951;
var state_29006__$1 = state_29006;
if(cljs.core.truth_(inst_28952)){
var statearr_29054_29122 = state_29006__$1;
(statearr_29054_29122[(1)] = (27));

} else {
var statearr_29055_29123 = state_29006__$1;
(statearr_29055_29123[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (34))){
var state_29006__$1 = state_29006;
var statearr_29056_29124 = state_29006__$1;
(statearr_29056_29124[(2)] = null);

(statearr_29056_29124[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (17))){
var state_29006__$1 = state_29006;
var statearr_29057_29125 = state_29006__$1;
(statearr_29057_29125[(2)] = null);

(statearr_29057_29125[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (3))){
var inst_29004 = (state_29006[(2)]);
var state_29006__$1 = state_29006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29006__$1,inst_29004);
} else {
if((state_val_29007 === (12))){
var inst_28933 = (state_29006[(2)]);
var state_29006__$1 = state_29006;
var statearr_29058_29126 = state_29006__$1;
(statearr_29058_29126[(2)] = inst_28933);

(statearr_29058_29126[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (2))){
var state_29006__$1 = state_29006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29006__$1,(4),ch);
} else {
if((state_val_29007 === (23))){
var state_29006__$1 = state_29006;
var statearr_29059_29127 = state_29006__$1;
(statearr_29059_29127[(2)] = null);

(statearr_29059_29127[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (35))){
var inst_28988 = (state_29006[(2)]);
var state_29006__$1 = state_29006;
var statearr_29060_29128 = state_29006__$1;
(statearr_29060_29128[(2)] = inst_28988);

(statearr_29060_29128[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (19))){
var inst_28905 = (state_29006[(7)]);
var inst_28909 = cljs.core.chunk_first.call(null,inst_28905);
var inst_28910 = cljs.core.chunk_rest.call(null,inst_28905);
var inst_28911 = cljs.core.count.call(null,inst_28909);
var inst_28883 = inst_28910;
var inst_28884 = inst_28909;
var inst_28885 = inst_28911;
var inst_28886 = (0);
var state_29006__$1 = (function (){var statearr_29061 = state_29006;
(statearr_29061[(13)] = inst_28885);

(statearr_29061[(14)] = inst_28883);

(statearr_29061[(15)] = inst_28884);

(statearr_29061[(16)] = inst_28886);

return statearr_29061;
})();
var statearr_29062_29129 = state_29006__$1;
(statearr_29062_29129[(2)] = null);

(statearr_29062_29129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (11))){
var inst_28883 = (state_29006[(14)]);
var inst_28905 = (state_29006[(7)]);
var inst_28905__$1 = cljs.core.seq.call(null,inst_28883);
var state_29006__$1 = (function (){var statearr_29063 = state_29006;
(statearr_29063[(7)] = inst_28905__$1);

return statearr_29063;
})();
if(inst_28905__$1){
var statearr_29064_29130 = state_29006__$1;
(statearr_29064_29130[(1)] = (16));

} else {
var statearr_29065_29131 = state_29006__$1;
(statearr_29065_29131[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (9))){
var inst_28935 = (state_29006[(2)]);
var state_29006__$1 = state_29006;
var statearr_29066_29132 = state_29006__$1;
(statearr_29066_29132[(2)] = inst_28935);

(statearr_29066_29132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (5))){
var inst_28881 = cljs.core.deref.call(null,cs);
var inst_28882 = cljs.core.seq.call(null,inst_28881);
var inst_28883 = inst_28882;
var inst_28884 = null;
var inst_28885 = (0);
var inst_28886 = (0);
var state_29006__$1 = (function (){var statearr_29067 = state_29006;
(statearr_29067[(13)] = inst_28885);

(statearr_29067[(14)] = inst_28883);

(statearr_29067[(15)] = inst_28884);

(statearr_29067[(16)] = inst_28886);

return statearr_29067;
})();
var statearr_29068_29133 = state_29006__$1;
(statearr_29068_29133[(2)] = null);

(statearr_29068_29133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (14))){
var state_29006__$1 = state_29006;
var statearr_29069_29134 = state_29006__$1;
(statearr_29069_29134[(2)] = null);

(statearr_29069_29134[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (45))){
var inst_28996 = (state_29006[(2)]);
var state_29006__$1 = state_29006;
var statearr_29070_29135 = state_29006__$1;
(statearr_29070_29135[(2)] = inst_28996);

(statearr_29070_29135[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (26))){
var inst_28938 = (state_29006[(29)]);
var inst_28992 = (state_29006[(2)]);
var inst_28993 = cljs.core.seq.call(null,inst_28938);
var state_29006__$1 = (function (){var statearr_29071 = state_29006;
(statearr_29071[(31)] = inst_28992);

return statearr_29071;
})();
if(inst_28993){
var statearr_29072_29136 = state_29006__$1;
(statearr_29072_29136[(1)] = (42));

} else {
var statearr_29073_29137 = state_29006__$1;
(statearr_29073_29137[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (16))){
var inst_28905 = (state_29006[(7)]);
var inst_28907 = cljs.core.chunked_seq_QMARK_.call(null,inst_28905);
var state_29006__$1 = state_29006;
if(inst_28907){
var statearr_29074_29138 = state_29006__$1;
(statearr_29074_29138[(1)] = (19));

} else {
var statearr_29075_29139 = state_29006__$1;
(statearr_29075_29139[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (38))){
var inst_28985 = (state_29006[(2)]);
var state_29006__$1 = state_29006;
var statearr_29076_29140 = state_29006__$1;
(statearr_29076_29140[(2)] = inst_28985);

(statearr_29076_29140[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (30))){
var state_29006__$1 = state_29006;
var statearr_29077_29141 = state_29006__$1;
(statearr_29077_29141[(2)] = null);

(statearr_29077_29141[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (10))){
var inst_28884 = (state_29006[(15)]);
var inst_28886 = (state_29006[(16)]);
var inst_28894 = cljs.core._nth.call(null,inst_28884,inst_28886);
var inst_28895 = cljs.core.nth.call(null,inst_28894,(0),null);
var inst_28896 = cljs.core.nth.call(null,inst_28894,(1),null);
var state_29006__$1 = (function (){var statearr_29078 = state_29006;
(statearr_29078[(26)] = inst_28895);

return statearr_29078;
})();
if(cljs.core.truth_(inst_28896)){
var statearr_29079_29142 = state_29006__$1;
(statearr_29079_29142[(1)] = (13));

} else {
var statearr_29080_29143 = state_29006__$1;
(statearr_29080_29143[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (18))){
var inst_28931 = (state_29006[(2)]);
var state_29006__$1 = state_29006;
var statearr_29081_29144 = state_29006__$1;
(statearr_29081_29144[(2)] = inst_28931);

(statearr_29081_29144[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (42))){
var state_29006__$1 = state_29006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29006__$1,(45),dchan);
} else {
if((state_val_29007 === (37))){
var inst_28874 = (state_29006[(10)]);
var inst_28974 = (state_29006[(23)]);
var inst_28965 = (state_29006[(25)]);
var inst_28974__$1 = cljs.core.first.call(null,inst_28965);
var inst_28975 = cljs.core.async.put_BANG_.call(null,inst_28974__$1,inst_28874,done);
var state_29006__$1 = (function (){var statearr_29082 = state_29006;
(statearr_29082[(23)] = inst_28974__$1);

return statearr_29082;
})();
if(cljs.core.truth_(inst_28975)){
var statearr_29083_29145 = state_29006__$1;
(statearr_29083_29145[(1)] = (39));

} else {
var statearr_29084_29146 = state_29006__$1;
(statearr_29084_29146[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (8))){
var inst_28885 = (state_29006[(13)]);
var inst_28886 = (state_29006[(16)]);
var inst_28888 = (inst_28886 < inst_28885);
var inst_28889 = inst_28888;
var state_29006__$1 = state_29006;
if(cljs.core.truth_(inst_28889)){
var statearr_29085_29147 = state_29006__$1;
(statearr_29085_29147[(1)] = (10));

} else {
var statearr_29086_29148 = state_29006__$1;
(statearr_29086_29148[(1)] = (11));

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
});})(c__27741__auto___29094,cs,m,dchan,dctr,done))
;
return ((function (switch__27629__auto__,c__27741__auto___29094,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27630__auto__ = null;
var cljs$core$async$mult_$_state_machine__27630__auto____0 = (function (){
var statearr_29090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29090[(0)] = cljs$core$async$mult_$_state_machine__27630__auto__);

(statearr_29090[(1)] = (1));

return statearr_29090;
});
var cljs$core$async$mult_$_state_machine__27630__auto____1 = (function (state_29006){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_29006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e29091){if((e29091 instanceof Object)){
var ex__27633__auto__ = e29091;
var statearr_29092_29149 = state_29006;
(statearr_29092_29149[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29150 = state_29006;
state_29006 = G__29150;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27630__auto__ = function(state_29006){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27630__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27630__auto____1.call(this,state_29006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27630__auto____0;
cljs$core$async$mult_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27630__auto____1;
return cljs$core$async$mult_$_state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto___29094,cs,m,dchan,dctr,done))
})();
var state__27743__auto__ = (function (){var statearr_29093 = f__27742__auto__.call(null);
(statearr_29093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto___29094);

return statearr_29093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto___29094,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29151 = [];
var len__26176__auto___29154 = arguments.length;
var i__26177__auto___29155 = (0);
while(true){
if((i__26177__auto___29155 < len__26176__auto___29154)){
args29151.push((arguments[i__26177__auto___29155]));

var G__29156 = (i__26177__auto___29155 + (1));
i__26177__auto___29155 = G__29156;
continue;
} else {
}
break;
}

var G__29153 = args29151.length;
switch (G__29153) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29151.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25764__auto__ = (((m == null))?null:m);
var m__25765__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25764__auto__)]);
if(!((m__25765__auto__ == null))){
return m__25765__auto__.call(null,m,ch);
} else {
var m__25765__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25765__auto____$1 == null))){
return m__25765__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25764__auto__ = (((m == null))?null:m);
var m__25765__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25764__auto__)]);
if(!((m__25765__auto__ == null))){
return m__25765__auto__.call(null,m,ch);
} else {
var m__25765__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25765__auto____$1 == null))){
return m__25765__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25764__auto__ = (((m == null))?null:m);
var m__25765__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25764__auto__)]);
if(!((m__25765__auto__ == null))){
return m__25765__auto__.call(null,m);
} else {
var m__25765__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25765__auto____$1 == null))){
return m__25765__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25764__auto__ = (((m == null))?null:m);
var m__25765__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25764__auto__)]);
if(!((m__25765__auto__ == null))){
return m__25765__auto__.call(null,m,state_map);
} else {
var m__25765__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25765__auto____$1 == null))){
return m__25765__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25764__auto__ = (((m == null))?null:m);
var m__25765__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25764__auto__)]);
if(!((m__25765__auto__ == null))){
return m__25765__auto__.call(null,m,mode);
} else {
var m__25765__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25765__auto____$1 == null))){
return m__25765__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26183__auto__ = [];
var len__26176__auto___29168 = arguments.length;
var i__26177__auto___29169 = (0);
while(true){
if((i__26177__auto___29169 < len__26176__auto___29168)){
args__26183__auto__.push((arguments[i__26177__auto___29169]));

var G__29170 = (i__26177__auto___29169 + (1));
i__26177__auto___29169 = G__29170;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((3) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26184__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29162){
var map__29163 = p__29162;
var map__29163__$1 = ((((!((map__29163 == null)))?((((map__29163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29163):map__29163);
var opts = map__29163__$1;
var statearr_29165_29171 = state;
(statearr_29165_29171[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29163,map__29163__$1,opts){
return (function (val){
var statearr_29166_29172 = state;
(statearr_29166_29172[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29163,map__29163__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29167_29173 = state;
(statearr_29167_29173[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29158){
var G__29159 = cljs.core.first.call(null,seq29158);
var seq29158__$1 = cljs.core.next.call(null,seq29158);
var G__29160 = cljs.core.first.call(null,seq29158__$1);
var seq29158__$2 = cljs.core.next.call(null,seq29158__$1);
var G__29161 = cljs.core.first.call(null,seq29158__$2);
var seq29158__$3 = cljs.core.next.call(null,seq29158__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29159,G__29160,G__29161,seq29158__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29339 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29339 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29340){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29340 = meta29340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29341,meta29340__$1){
var self__ = this;
var _29341__$1 = this;
return (new cljs.core.async.t_cljs$core$async29339(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29340__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29339.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29341){
var self__ = this;
var _29341__$1 = this;
return self__.meta29340;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29339.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29339.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29339.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29339.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29339.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29339.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29339.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29339.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29339.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29340","meta29340",-1657043402,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29339.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29339";

cljs.core.async.t_cljs$core$async29339.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25707__auto__,writer__25708__auto__,opt__25709__auto__){
return cljs.core._write.call(null,writer__25708__auto__,"cljs.core.async/t_cljs$core$async29339");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29339 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29339(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29340){
return (new cljs.core.async.t_cljs$core$async29339(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29340));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29339(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27741__auto___29504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto___29504,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto___29504,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29441){
var state_val_29442 = (state_29441[(1)]);
if((state_val_29442 === (7))){
var inst_29357 = (state_29441[(2)]);
var state_29441__$1 = state_29441;
var statearr_29443_29505 = state_29441__$1;
(statearr_29443_29505[(2)] = inst_29357);

(statearr_29443_29505[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (20))){
var inst_29369 = (state_29441[(7)]);
var state_29441__$1 = state_29441;
var statearr_29444_29506 = state_29441__$1;
(statearr_29444_29506[(2)] = inst_29369);

(statearr_29444_29506[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (27))){
var state_29441__$1 = state_29441;
var statearr_29445_29507 = state_29441__$1;
(statearr_29445_29507[(2)] = null);

(statearr_29445_29507[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (1))){
var inst_29345 = (state_29441[(8)]);
var inst_29345__$1 = calc_state.call(null);
var inst_29347 = (inst_29345__$1 == null);
var inst_29348 = cljs.core.not.call(null,inst_29347);
var state_29441__$1 = (function (){var statearr_29446 = state_29441;
(statearr_29446[(8)] = inst_29345__$1);

return statearr_29446;
})();
if(inst_29348){
var statearr_29447_29508 = state_29441__$1;
(statearr_29447_29508[(1)] = (2));

} else {
var statearr_29448_29509 = state_29441__$1;
(statearr_29448_29509[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (24))){
var inst_29401 = (state_29441[(9)]);
var inst_29392 = (state_29441[(10)]);
var inst_29415 = (state_29441[(11)]);
var inst_29415__$1 = inst_29392.call(null,inst_29401);
var state_29441__$1 = (function (){var statearr_29449 = state_29441;
(statearr_29449[(11)] = inst_29415__$1);

return statearr_29449;
})();
if(cljs.core.truth_(inst_29415__$1)){
var statearr_29450_29510 = state_29441__$1;
(statearr_29450_29510[(1)] = (29));

} else {
var statearr_29451_29511 = state_29441__$1;
(statearr_29451_29511[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (4))){
var inst_29360 = (state_29441[(2)]);
var state_29441__$1 = state_29441;
if(cljs.core.truth_(inst_29360)){
var statearr_29452_29512 = state_29441__$1;
(statearr_29452_29512[(1)] = (8));

} else {
var statearr_29453_29513 = state_29441__$1;
(statearr_29453_29513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (15))){
var inst_29386 = (state_29441[(2)]);
var state_29441__$1 = state_29441;
if(cljs.core.truth_(inst_29386)){
var statearr_29454_29514 = state_29441__$1;
(statearr_29454_29514[(1)] = (19));

} else {
var statearr_29455_29515 = state_29441__$1;
(statearr_29455_29515[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (21))){
var inst_29391 = (state_29441[(12)]);
var inst_29391__$1 = (state_29441[(2)]);
var inst_29392 = cljs.core.get.call(null,inst_29391__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29393 = cljs.core.get.call(null,inst_29391__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29394 = cljs.core.get.call(null,inst_29391__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29441__$1 = (function (){var statearr_29456 = state_29441;
(statearr_29456[(13)] = inst_29393);

(statearr_29456[(12)] = inst_29391__$1);

(statearr_29456[(10)] = inst_29392);

return statearr_29456;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29441__$1,(22),inst_29394);
} else {
if((state_val_29442 === (31))){
var inst_29423 = (state_29441[(2)]);
var state_29441__$1 = state_29441;
if(cljs.core.truth_(inst_29423)){
var statearr_29457_29516 = state_29441__$1;
(statearr_29457_29516[(1)] = (32));

} else {
var statearr_29458_29517 = state_29441__$1;
(statearr_29458_29517[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (32))){
var inst_29400 = (state_29441[(14)]);
var state_29441__$1 = state_29441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29441__$1,(35),out,inst_29400);
} else {
if((state_val_29442 === (33))){
var inst_29391 = (state_29441[(12)]);
var inst_29369 = inst_29391;
var state_29441__$1 = (function (){var statearr_29459 = state_29441;
(statearr_29459[(7)] = inst_29369);

return statearr_29459;
})();
var statearr_29460_29518 = state_29441__$1;
(statearr_29460_29518[(2)] = null);

(statearr_29460_29518[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (13))){
var inst_29369 = (state_29441[(7)]);
var inst_29376 = inst_29369.cljs$lang$protocol_mask$partition0$;
var inst_29377 = (inst_29376 & (64));
var inst_29378 = inst_29369.cljs$core$ISeq$;
var inst_29379 = (inst_29377) || (inst_29378);
var state_29441__$1 = state_29441;
if(cljs.core.truth_(inst_29379)){
var statearr_29461_29519 = state_29441__$1;
(statearr_29461_29519[(1)] = (16));

} else {
var statearr_29462_29520 = state_29441__$1;
(statearr_29462_29520[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (22))){
var inst_29400 = (state_29441[(14)]);
var inst_29401 = (state_29441[(9)]);
var inst_29399 = (state_29441[(2)]);
var inst_29400__$1 = cljs.core.nth.call(null,inst_29399,(0),null);
var inst_29401__$1 = cljs.core.nth.call(null,inst_29399,(1),null);
var inst_29402 = (inst_29400__$1 == null);
var inst_29403 = cljs.core._EQ_.call(null,inst_29401__$1,change);
var inst_29404 = (inst_29402) || (inst_29403);
var state_29441__$1 = (function (){var statearr_29463 = state_29441;
(statearr_29463[(14)] = inst_29400__$1);

(statearr_29463[(9)] = inst_29401__$1);

return statearr_29463;
})();
if(cljs.core.truth_(inst_29404)){
var statearr_29464_29521 = state_29441__$1;
(statearr_29464_29521[(1)] = (23));

} else {
var statearr_29465_29522 = state_29441__$1;
(statearr_29465_29522[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (36))){
var inst_29391 = (state_29441[(12)]);
var inst_29369 = inst_29391;
var state_29441__$1 = (function (){var statearr_29466 = state_29441;
(statearr_29466[(7)] = inst_29369);

return statearr_29466;
})();
var statearr_29467_29523 = state_29441__$1;
(statearr_29467_29523[(2)] = null);

(statearr_29467_29523[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (29))){
var inst_29415 = (state_29441[(11)]);
var state_29441__$1 = state_29441;
var statearr_29468_29524 = state_29441__$1;
(statearr_29468_29524[(2)] = inst_29415);

(statearr_29468_29524[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (6))){
var state_29441__$1 = state_29441;
var statearr_29469_29525 = state_29441__$1;
(statearr_29469_29525[(2)] = false);

(statearr_29469_29525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (28))){
var inst_29411 = (state_29441[(2)]);
var inst_29412 = calc_state.call(null);
var inst_29369 = inst_29412;
var state_29441__$1 = (function (){var statearr_29470 = state_29441;
(statearr_29470[(15)] = inst_29411);

(statearr_29470[(7)] = inst_29369);

return statearr_29470;
})();
var statearr_29471_29526 = state_29441__$1;
(statearr_29471_29526[(2)] = null);

(statearr_29471_29526[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (25))){
var inst_29437 = (state_29441[(2)]);
var state_29441__$1 = state_29441;
var statearr_29472_29527 = state_29441__$1;
(statearr_29472_29527[(2)] = inst_29437);

(statearr_29472_29527[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (34))){
var inst_29435 = (state_29441[(2)]);
var state_29441__$1 = state_29441;
var statearr_29473_29528 = state_29441__$1;
(statearr_29473_29528[(2)] = inst_29435);

(statearr_29473_29528[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (17))){
var state_29441__$1 = state_29441;
var statearr_29474_29529 = state_29441__$1;
(statearr_29474_29529[(2)] = false);

(statearr_29474_29529[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (3))){
var state_29441__$1 = state_29441;
var statearr_29475_29530 = state_29441__$1;
(statearr_29475_29530[(2)] = false);

(statearr_29475_29530[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (12))){
var inst_29439 = (state_29441[(2)]);
var state_29441__$1 = state_29441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29441__$1,inst_29439);
} else {
if((state_val_29442 === (2))){
var inst_29345 = (state_29441[(8)]);
var inst_29350 = inst_29345.cljs$lang$protocol_mask$partition0$;
var inst_29351 = (inst_29350 & (64));
var inst_29352 = inst_29345.cljs$core$ISeq$;
var inst_29353 = (inst_29351) || (inst_29352);
var state_29441__$1 = state_29441;
if(cljs.core.truth_(inst_29353)){
var statearr_29476_29531 = state_29441__$1;
(statearr_29476_29531[(1)] = (5));

} else {
var statearr_29477_29532 = state_29441__$1;
(statearr_29477_29532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (23))){
var inst_29400 = (state_29441[(14)]);
var inst_29406 = (inst_29400 == null);
var state_29441__$1 = state_29441;
if(cljs.core.truth_(inst_29406)){
var statearr_29478_29533 = state_29441__$1;
(statearr_29478_29533[(1)] = (26));

} else {
var statearr_29479_29534 = state_29441__$1;
(statearr_29479_29534[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (35))){
var inst_29426 = (state_29441[(2)]);
var state_29441__$1 = state_29441;
if(cljs.core.truth_(inst_29426)){
var statearr_29480_29535 = state_29441__$1;
(statearr_29480_29535[(1)] = (36));

} else {
var statearr_29481_29536 = state_29441__$1;
(statearr_29481_29536[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (19))){
var inst_29369 = (state_29441[(7)]);
var inst_29388 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29369);
var state_29441__$1 = state_29441;
var statearr_29482_29537 = state_29441__$1;
(statearr_29482_29537[(2)] = inst_29388);

(statearr_29482_29537[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (11))){
var inst_29369 = (state_29441[(7)]);
var inst_29373 = (inst_29369 == null);
var inst_29374 = cljs.core.not.call(null,inst_29373);
var state_29441__$1 = state_29441;
if(inst_29374){
var statearr_29483_29538 = state_29441__$1;
(statearr_29483_29538[(1)] = (13));

} else {
var statearr_29484_29539 = state_29441__$1;
(statearr_29484_29539[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (9))){
var inst_29345 = (state_29441[(8)]);
var state_29441__$1 = state_29441;
var statearr_29485_29540 = state_29441__$1;
(statearr_29485_29540[(2)] = inst_29345);

(statearr_29485_29540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (5))){
var state_29441__$1 = state_29441;
var statearr_29486_29541 = state_29441__$1;
(statearr_29486_29541[(2)] = true);

(statearr_29486_29541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (14))){
var state_29441__$1 = state_29441;
var statearr_29487_29542 = state_29441__$1;
(statearr_29487_29542[(2)] = false);

(statearr_29487_29542[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (26))){
var inst_29401 = (state_29441[(9)]);
var inst_29408 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29401);
var state_29441__$1 = state_29441;
var statearr_29488_29543 = state_29441__$1;
(statearr_29488_29543[(2)] = inst_29408);

(statearr_29488_29543[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (16))){
var state_29441__$1 = state_29441;
var statearr_29489_29544 = state_29441__$1;
(statearr_29489_29544[(2)] = true);

(statearr_29489_29544[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (38))){
var inst_29431 = (state_29441[(2)]);
var state_29441__$1 = state_29441;
var statearr_29490_29545 = state_29441__$1;
(statearr_29490_29545[(2)] = inst_29431);

(statearr_29490_29545[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (30))){
var inst_29393 = (state_29441[(13)]);
var inst_29401 = (state_29441[(9)]);
var inst_29392 = (state_29441[(10)]);
var inst_29418 = cljs.core.empty_QMARK_.call(null,inst_29392);
var inst_29419 = inst_29393.call(null,inst_29401);
var inst_29420 = cljs.core.not.call(null,inst_29419);
var inst_29421 = (inst_29418) && (inst_29420);
var state_29441__$1 = state_29441;
var statearr_29491_29546 = state_29441__$1;
(statearr_29491_29546[(2)] = inst_29421);

(statearr_29491_29546[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (10))){
var inst_29345 = (state_29441[(8)]);
var inst_29365 = (state_29441[(2)]);
var inst_29366 = cljs.core.get.call(null,inst_29365,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29367 = cljs.core.get.call(null,inst_29365,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29368 = cljs.core.get.call(null,inst_29365,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29369 = inst_29345;
var state_29441__$1 = (function (){var statearr_29492 = state_29441;
(statearr_29492[(16)] = inst_29366);

(statearr_29492[(7)] = inst_29369);

(statearr_29492[(17)] = inst_29368);

(statearr_29492[(18)] = inst_29367);

return statearr_29492;
})();
var statearr_29493_29547 = state_29441__$1;
(statearr_29493_29547[(2)] = null);

(statearr_29493_29547[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (18))){
var inst_29383 = (state_29441[(2)]);
var state_29441__$1 = state_29441;
var statearr_29494_29548 = state_29441__$1;
(statearr_29494_29548[(2)] = inst_29383);

(statearr_29494_29548[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (37))){
var state_29441__$1 = state_29441;
var statearr_29495_29549 = state_29441__$1;
(statearr_29495_29549[(2)] = null);

(statearr_29495_29549[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (8))){
var inst_29345 = (state_29441[(8)]);
var inst_29362 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29345);
var state_29441__$1 = state_29441;
var statearr_29496_29550 = state_29441__$1;
(statearr_29496_29550[(2)] = inst_29362);

(statearr_29496_29550[(1)] = (10));


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
});})(c__27741__auto___29504,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27629__auto__,c__27741__auto___29504,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27630__auto__ = null;
var cljs$core$async$mix_$_state_machine__27630__auto____0 = (function (){
var statearr_29500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29500[(0)] = cljs$core$async$mix_$_state_machine__27630__auto__);

(statearr_29500[(1)] = (1));

return statearr_29500;
});
var cljs$core$async$mix_$_state_machine__27630__auto____1 = (function (state_29441){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_29441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e29501){if((e29501 instanceof Object)){
var ex__27633__auto__ = e29501;
var statearr_29502_29551 = state_29441;
(statearr_29502_29551[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29552 = state_29441;
state_29441 = G__29552;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27630__auto__ = function(state_29441){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27630__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27630__auto____1.call(this,state_29441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27630__auto____0;
cljs$core$async$mix_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27630__auto____1;
return cljs$core$async$mix_$_state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto___29504,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27743__auto__ = (function (){var statearr_29503 = f__27742__auto__.call(null);
(statearr_29503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto___29504);

return statearr_29503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto___29504,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25764__auto__ = (((p == null))?null:p);
var m__25765__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25764__auto__)]);
if(!((m__25765__auto__ == null))){
return m__25765__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25765__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25765__auto____$1 == null))){
return m__25765__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25764__auto__ = (((p == null))?null:p);
var m__25765__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25764__auto__)]);
if(!((m__25765__auto__ == null))){
return m__25765__auto__.call(null,p,v,ch);
} else {
var m__25765__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25765__auto____$1 == null))){
return m__25765__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29553 = [];
var len__26176__auto___29556 = arguments.length;
var i__26177__auto___29557 = (0);
while(true){
if((i__26177__auto___29557 < len__26176__auto___29556)){
args29553.push((arguments[i__26177__auto___29557]));

var G__29558 = (i__26177__auto___29557 + (1));
i__26177__auto___29557 = G__29558;
continue;
} else {
}
break;
}

var G__29555 = args29553.length;
switch (G__29555) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29553.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25764__auto__ = (((p == null))?null:p);
var m__25765__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25764__auto__)]);
if(!((m__25765__auto__ == null))){
return m__25765__auto__.call(null,p);
} else {
var m__25765__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25765__auto____$1 == null))){
return m__25765__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25764__auto__ = (((p == null))?null:p);
var m__25765__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25764__auto__)]);
if(!((m__25765__auto__ == null))){
return m__25765__auto__.call(null,p,v);
} else {
var m__25765__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25765__auto____$1 == null))){
return m__25765__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29561 = [];
var len__26176__auto___29686 = arguments.length;
var i__26177__auto___29687 = (0);
while(true){
if((i__26177__auto___29687 < len__26176__auto___29686)){
args29561.push((arguments[i__26177__auto___29687]));

var G__29688 = (i__26177__auto___29687 + (1));
i__26177__auto___29687 = G__29688;
continue;
} else {
}
break;
}

var G__29563 = args29561.length;
switch (G__29563) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29561.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25101__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25101__auto__)){
return or__25101__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25101__auto__,mults){
return (function (p1__29560_SHARP_){
if(cljs.core.truth_(p1__29560_SHARP_.call(null,topic))){
return p1__29560_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29560_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25101__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29564 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29564 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29565){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29565 = meta29565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29566,meta29565__$1){
var self__ = this;
var _29566__$1 = this;
return (new cljs.core.async.t_cljs$core$async29564(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29565__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29564.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29566){
var self__ = this;
var _29566__$1 = this;
return self__.meta29565;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29564.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29564.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29564.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29564.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29564.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29564.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29564.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29564.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29565","meta29565",1568450706,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29564.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29564";

cljs.core.async.t_cljs$core$async29564.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25707__auto__,writer__25708__auto__,opt__25709__auto__){
return cljs.core._write.call(null,writer__25708__auto__,"cljs.core.async/t_cljs$core$async29564");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29564 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29564(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29565){
return (new cljs.core.async.t_cljs$core$async29564(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29565));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29564(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27741__auto___29690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto___29690,mults,ensure_mult,p){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto___29690,mults,ensure_mult,p){
return (function (state_29638){
var state_val_29639 = (state_29638[(1)]);
if((state_val_29639 === (7))){
var inst_29634 = (state_29638[(2)]);
var state_29638__$1 = state_29638;
var statearr_29640_29691 = state_29638__$1;
(statearr_29640_29691[(2)] = inst_29634);

(statearr_29640_29691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29639 === (20))){
var state_29638__$1 = state_29638;
var statearr_29641_29692 = state_29638__$1;
(statearr_29641_29692[(2)] = null);

(statearr_29641_29692[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29639 === (1))){
var state_29638__$1 = state_29638;
var statearr_29642_29693 = state_29638__$1;
(statearr_29642_29693[(2)] = null);

(statearr_29642_29693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29639 === (24))){
var inst_29617 = (state_29638[(7)]);
var inst_29626 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29617);
var state_29638__$1 = state_29638;
var statearr_29643_29694 = state_29638__$1;
(statearr_29643_29694[(2)] = inst_29626);

(statearr_29643_29694[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29639 === (4))){
var inst_29569 = (state_29638[(8)]);
var inst_29569__$1 = (state_29638[(2)]);
var inst_29570 = (inst_29569__$1 == null);
var state_29638__$1 = (function (){var statearr_29644 = state_29638;
(statearr_29644[(8)] = inst_29569__$1);

return statearr_29644;
})();
if(cljs.core.truth_(inst_29570)){
var statearr_29645_29695 = state_29638__$1;
(statearr_29645_29695[(1)] = (5));

} else {
var statearr_29646_29696 = state_29638__$1;
(statearr_29646_29696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29639 === (15))){
var inst_29611 = (state_29638[(2)]);
var state_29638__$1 = state_29638;
var statearr_29647_29697 = state_29638__$1;
(statearr_29647_29697[(2)] = inst_29611);

(statearr_29647_29697[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29639 === (21))){
var inst_29631 = (state_29638[(2)]);
var state_29638__$1 = (function (){var statearr_29648 = state_29638;
(statearr_29648[(9)] = inst_29631);

return statearr_29648;
})();
var statearr_29649_29698 = state_29638__$1;
(statearr_29649_29698[(2)] = null);

(statearr_29649_29698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29639 === (13))){
var inst_29593 = (state_29638[(10)]);
var inst_29595 = cljs.core.chunked_seq_QMARK_.call(null,inst_29593);
var state_29638__$1 = state_29638;
if(inst_29595){
var statearr_29650_29699 = state_29638__$1;
(statearr_29650_29699[(1)] = (16));

} else {
var statearr_29651_29700 = state_29638__$1;
(statearr_29651_29700[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29639 === (22))){
var inst_29623 = (state_29638[(2)]);
var state_29638__$1 = state_29638;
if(cljs.core.truth_(inst_29623)){
var statearr_29652_29701 = state_29638__$1;
(statearr_29652_29701[(1)] = (23));

} else {
var statearr_29653_29702 = state_29638__$1;
(statearr_29653_29702[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29639 === (6))){
var inst_29617 = (state_29638[(7)]);
var inst_29569 = (state_29638[(8)]);
var inst_29619 = (state_29638[(11)]);
var inst_29617__$1 = topic_fn.call(null,inst_29569);
var inst_29618 = cljs.core.deref.call(null,mults);
var inst_29619__$1 = cljs.core.get.call(null,inst_29618,inst_29617__$1);
var state_29638__$1 = (function (){var statearr_29654 = state_29638;
(statearr_29654[(7)] = inst_29617__$1);

(statearr_29654[(11)] = inst_29619__$1);

return statearr_29654;
})();
if(cljs.core.truth_(inst_29619__$1)){
var statearr_29655_29703 = state_29638__$1;
(statearr_29655_29703[(1)] = (19));

} else {
var statearr_29656_29704 = state_29638__$1;
(statearr_29656_29704[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29639 === (25))){
var inst_29628 = (state_29638[(2)]);
var state_29638__$1 = state_29638;
var statearr_29657_29705 = state_29638__$1;
(statearr_29657_29705[(2)] = inst_29628);

(statearr_29657_29705[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29639 === (17))){
var inst_29593 = (state_29638[(10)]);
var inst_29602 = cljs.core.first.call(null,inst_29593);
var inst_29603 = cljs.core.async.muxch_STAR_.call(null,inst_29602);
var inst_29604 = cljs.core.async.close_BANG_.call(null,inst_29603);
var inst_29605 = cljs.core.next.call(null,inst_29593);
var inst_29579 = inst_29605;
var inst_29580 = null;
var inst_29581 = (0);
var inst_29582 = (0);
var state_29638__$1 = (function (){var statearr_29658 = state_29638;
(statearr_29658[(12)] = inst_29604);

(statearr_29658[(13)] = inst_29580);

(statearr_29658[(14)] = inst_29581);

(statearr_29658[(15)] = inst_29582);

(statearr_29658[(16)] = inst_29579);

return statearr_29658;
})();
var statearr_29659_29706 = state_29638__$1;
(statearr_29659_29706[(2)] = null);

(statearr_29659_29706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29639 === (3))){
var inst_29636 = (state_29638[(2)]);
var state_29638__$1 = state_29638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29638__$1,inst_29636);
} else {
if((state_val_29639 === (12))){
var inst_29613 = (state_29638[(2)]);
var state_29638__$1 = state_29638;
var statearr_29660_29707 = state_29638__$1;
(statearr_29660_29707[(2)] = inst_29613);

(statearr_29660_29707[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29639 === (2))){
var state_29638__$1 = state_29638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29638__$1,(4),ch);
} else {
if((state_val_29639 === (23))){
var state_29638__$1 = state_29638;
var statearr_29661_29708 = state_29638__$1;
(statearr_29661_29708[(2)] = null);

(statearr_29661_29708[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29639 === (19))){
var inst_29569 = (state_29638[(8)]);
var inst_29619 = (state_29638[(11)]);
var inst_29621 = cljs.core.async.muxch_STAR_.call(null,inst_29619);
var state_29638__$1 = state_29638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29638__$1,(22),inst_29621,inst_29569);
} else {
if((state_val_29639 === (11))){
var inst_29593 = (state_29638[(10)]);
var inst_29579 = (state_29638[(16)]);
var inst_29593__$1 = cljs.core.seq.call(null,inst_29579);
var state_29638__$1 = (function (){var statearr_29662 = state_29638;
(statearr_29662[(10)] = inst_29593__$1);

return statearr_29662;
})();
if(inst_29593__$1){
var statearr_29663_29709 = state_29638__$1;
(statearr_29663_29709[(1)] = (13));

} else {
var statearr_29664_29710 = state_29638__$1;
(statearr_29664_29710[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29639 === (9))){
var inst_29615 = (state_29638[(2)]);
var state_29638__$1 = state_29638;
var statearr_29665_29711 = state_29638__$1;
(statearr_29665_29711[(2)] = inst_29615);

(statearr_29665_29711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29639 === (5))){
var inst_29576 = cljs.core.deref.call(null,mults);
var inst_29577 = cljs.core.vals.call(null,inst_29576);
var inst_29578 = cljs.core.seq.call(null,inst_29577);
var inst_29579 = inst_29578;
var inst_29580 = null;
var inst_29581 = (0);
var inst_29582 = (0);
var state_29638__$1 = (function (){var statearr_29666 = state_29638;
(statearr_29666[(13)] = inst_29580);

(statearr_29666[(14)] = inst_29581);

(statearr_29666[(15)] = inst_29582);

(statearr_29666[(16)] = inst_29579);

return statearr_29666;
})();
var statearr_29667_29712 = state_29638__$1;
(statearr_29667_29712[(2)] = null);

(statearr_29667_29712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29639 === (14))){
var state_29638__$1 = state_29638;
var statearr_29671_29713 = state_29638__$1;
(statearr_29671_29713[(2)] = null);

(statearr_29671_29713[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29639 === (16))){
var inst_29593 = (state_29638[(10)]);
var inst_29597 = cljs.core.chunk_first.call(null,inst_29593);
var inst_29598 = cljs.core.chunk_rest.call(null,inst_29593);
var inst_29599 = cljs.core.count.call(null,inst_29597);
var inst_29579 = inst_29598;
var inst_29580 = inst_29597;
var inst_29581 = inst_29599;
var inst_29582 = (0);
var state_29638__$1 = (function (){var statearr_29672 = state_29638;
(statearr_29672[(13)] = inst_29580);

(statearr_29672[(14)] = inst_29581);

(statearr_29672[(15)] = inst_29582);

(statearr_29672[(16)] = inst_29579);

return statearr_29672;
})();
var statearr_29673_29714 = state_29638__$1;
(statearr_29673_29714[(2)] = null);

(statearr_29673_29714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29639 === (10))){
var inst_29580 = (state_29638[(13)]);
var inst_29581 = (state_29638[(14)]);
var inst_29582 = (state_29638[(15)]);
var inst_29579 = (state_29638[(16)]);
var inst_29587 = cljs.core._nth.call(null,inst_29580,inst_29582);
var inst_29588 = cljs.core.async.muxch_STAR_.call(null,inst_29587);
var inst_29589 = cljs.core.async.close_BANG_.call(null,inst_29588);
var inst_29590 = (inst_29582 + (1));
var tmp29668 = inst_29580;
var tmp29669 = inst_29581;
var tmp29670 = inst_29579;
var inst_29579__$1 = tmp29670;
var inst_29580__$1 = tmp29668;
var inst_29581__$1 = tmp29669;
var inst_29582__$1 = inst_29590;
var state_29638__$1 = (function (){var statearr_29674 = state_29638;
(statearr_29674[(17)] = inst_29589);

(statearr_29674[(13)] = inst_29580__$1);

(statearr_29674[(14)] = inst_29581__$1);

(statearr_29674[(15)] = inst_29582__$1);

(statearr_29674[(16)] = inst_29579__$1);

return statearr_29674;
})();
var statearr_29675_29715 = state_29638__$1;
(statearr_29675_29715[(2)] = null);

(statearr_29675_29715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29639 === (18))){
var inst_29608 = (state_29638[(2)]);
var state_29638__$1 = state_29638;
var statearr_29676_29716 = state_29638__$1;
(statearr_29676_29716[(2)] = inst_29608);

(statearr_29676_29716[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29639 === (8))){
var inst_29581 = (state_29638[(14)]);
var inst_29582 = (state_29638[(15)]);
var inst_29584 = (inst_29582 < inst_29581);
var inst_29585 = inst_29584;
var state_29638__$1 = state_29638;
if(cljs.core.truth_(inst_29585)){
var statearr_29677_29717 = state_29638__$1;
(statearr_29677_29717[(1)] = (10));

} else {
var statearr_29678_29718 = state_29638__$1;
(statearr_29678_29718[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__27741__auto___29690,mults,ensure_mult,p))
;
return ((function (switch__27629__auto__,c__27741__auto___29690,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27630__auto__ = null;
var cljs$core$async$state_machine__27630__auto____0 = (function (){
var statearr_29682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29682[(0)] = cljs$core$async$state_machine__27630__auto__);

(statearr_29682[(1)] = (1));

return statearr_29682;
});
var cljs$core$async$state_machine__27630__auto____1 = (function (state_29638){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_29638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e29683){if((e29683 instanceof Object)){
var ex__27633__auto__ = e29683;
var statearr_29684_29719 = state_29638;
(statearr_29684_29719[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29720 = state_29638;
state_29638 = G__29720;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
cljs$core$async$state_machine__27630__auto__ = function(state_29638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27630__auto____1.call(this,state_29638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27630__auto____0;
cljs$core$async$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27630__auto____1;
return cljs$core$async$state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto___29690,mults,ensure_mult,p))
})();
var state__27743__auto__ = (function (){var statearr_29685 = f__27742__auto__.call(null);
(statearr_29685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto___29690);

return statearr_29685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto___29690,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29721 = [];
var len__26176__auto___29724 = arguments.length;
var i__26177__auto___29725 = (0);
while(true){
if((i__26177__auto___29725 < len__26176__auto___29724)){
args29721.push((arguments[i__26177__auto___29725]));

var G__29726 = (i__26177__auto___29725 + (1));
i__26177__auto___29725 = G__29726;
continue;
} else {
}
break;
}

var G__29723 = args29721.length;
switch (G__29723) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29721.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29728 = [];
var len__26176__auto___29731 = arguments.length;
var i__26177__auto___29732 = (0);
while(true){
if((i__26177__auto___29732 < len__26176__auto___29731)){
args29728.push((arguments[i__26177__auto___29732]));

var G__29733 = (i__26177__auto___29732 + (1));
i__26177__auto___29732 = G__29733;
continue;
} else {
}
break;
}

var G__29730 = args29728.length;
switch (G__29730) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29728.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29735 = [];
var len__26176__auto___29806 = arguments.length;
var i__26177__auto___29807 = (0);
while(true){
if((i__26177__auto___29807 < len__26176__auto___29806)){
args29735.push((arguments[i__26177__auto___29807]));

var G__29808 = (i__26177__auto___29807 + (1));
i__26177__auto___29807 = G__29808;
continue;
} else {
}
break;
}

var G__29737 = args29735.length;
switch (G__29737) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29735.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27741__auto___29810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto___29810,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto___29810,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29776){
var state_val_29777 = (state_29776[(1)]);
if((state_val_29777 === (7))){
var state_29776__$1 = state_29776;
var statearr_29778_29811 = state_29776__$1;
(statearr_29778_29811[(2)] = null);

(statearr_29778_29811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (1))){
var state_29776__$1 = state_29776;
var statearr_29779_29812 = state_29776__$1;
(statearr_29779_29812[(2)] = null);

(statearr_29779_29812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (4))){
var inst_29740 = (state_29776[(7)]);
var inst_29742 = (inst_29740 < cnt);
var state_29776__$1 = state_29776;
if(cljs.core.truth_(inst_29742)){
var statearr_29780_29813 = state_29776__$1;
(statearr_29780_29813[(1)] = (6));

} else {
var statearr_29781_29814 = state_29776__$1;
(statearr_29781_29814[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (15))){
var inst_29772 = (state_29776[(2)]);
var state_29776__$1 = state_29776;
var statearr_29782_29815 = state_29776__$1;
(statearr_29782_29815[(2)] = inst_29772);

(statearr_29782_29815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (13))){
var inst_29765 = cljs.core.async.close_BANG_.call(null,out);
var state_29776__$1 = state_29776;
var statearr_29783_29816 = state_29776__$1;
(statearr_29783_29816[(2)] = inst_29765);

(statearr_29783_29816[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (6))){
var state_29776__$1 = state_29776;
var statearr_29784_29817 = state_29776__$1;
(statearr_29784_29817[(2)] = null);

(statearr_29784_29817[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (3))){
var inst_29774 = (state_29776[(2)]);
var state_29776__$1 = state_29776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29776__$1,inst_29774);
} else {
if((state_val_29777 === (12))){
var inst_29762 = (state_29776[(8)]);
var inst_29762__$1 = (state_29776[(2)]);
var inst_29763 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29762__$1);
var state_29776__$1 = (function (){var statearr_29785 = state_29776;
(statearr_29785[(8)] = inst_29762__$1);

return statearr_29785;
})();
if(cljs.core.truth_(inst_29763)){
var statearr_29786_29818 = state_29776__$1;
(statearr_29786_29818[(1)] = (13));

} else {
var statearr_29787_29819 = state_29776__$1;
(statearr_29787_29819[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (2))){
var inst_29739 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29740 = (0);
var state_29776__$1 = (function (){var statearr_29788 = state_29776;
(statearr_29788[(9)] = inst_29739);

(statearr_29788[(7)] = inst_29740);

return statearr_29788;
})();
var statearr_29789_29820 = state_29776__$1;
(statearr_29789_29820[(2)] = null);

(statearr_29789_29820[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (11))){
var inst_29740 = (state_29776[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29776,(10),Object,null,(9));
var inst_29749 = chs__$1.call(null,inst_29740);
var inst_29750 = done.call(null,inst_29740);
var inst_29751 = cljs.core.async.take_BANG_.call(null,inst_29749,inst_29750);
var state_29776__$1 = state_29776;
var statearr_29790_29821 = state_29776__$1;
(statearr_29790_29821[(2)] = inst_29751);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29776__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (9))){
var inst_29740 = (state_29776[(7)]);
var inst_29753 = (state_29776[(2)]);
var inst_29754 = (inst_29740 + (1));
var inst_29740__$1 = inst_29754;
var state_29776__$1 = (function (){var statearr_29791 = state_29776;
(statearr_29791[(7)] = inst_29740__$1);

(statearr_29791[(10)] = inst_29753);

return statearr_29791;
})();
var statearr_29792_29822 = state_29776__$1;
(statearr_29792_29822[(2)] = null);

(statearr_29792_29822[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (5))){
var inst_29760 = (state_29776[(2)]);
var state_29776__$1 = (function (){var statearr_29793 = state_29776;
(statearr_29793[(11)] = inst_29760);

return statearr_29793;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29776__$1,(12),dchan);
} else {
if((state_val_29777 === (14))){
var inst_29762 = (state_29776[(8)]);
var inst_29767 = cljs.core.apply.call(null,f,inst_29762);
var state_29776__$1 = state_29776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29776__$1,(16),out,inst_29767);
} else {
if((state_val_29777 === (16))){
var inst_29769 = (state_29776[(2)]);
var state_29776__$1 = (function (){var statearr_29794 = state_29776;
(statearr_29794[(12)] = inst_29769);

return statearr_29794;
})();
var statearr_29795_29823 = state_29776__$1;
(statearr_29795_29823[(2)] = null);

(statearr_29795_29823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (10))){
var inst_29744 = (state_29776[(2)]);
var inst_29745 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29776__$1 = (function (){var statearr_29796 = state_29776;
(statearr_29796[(13)] = inst_29744);

return statearr_29796;
})();
var statearr_29797_29824 = state_29776__$1;
(statearr_29797_29824[(2)] = inst_29745);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29776__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (8))){
var inst_29758 = (state_29776[(2)]);
var state_29776__$1 = state_29776;
var statearr_29798_29825 = state_29776__$1;
(statearr_29798_29825[(2)] = inst_29758);

(statearr_29798_29825[(1)] = (5));


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
});})(c__27741__auto___29810,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27629__auto__,c__27741__auto___29810,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27630__auto__ = null;
var cljs$core$async$state_machine__27630__auto____0 = (function (){
var statearr_29802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29802[(0)] = cljs$core$async$state_machine__27630__auto__);

(statearr_29802[(1)] = (1));

return statearr_29802;
});
var cljs$core$async$state_machine__27630__auto____1 = (function (state_29776){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_29776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e29803){if((e29803 instanceof Object)){
var ex__27633__auto__ = e29803;
var statearr_29804_29826 = state_29776;
(statearr_29804_29826[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29827 = state_29776;
state_29776 = G__29827;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
cljs$core$async$state_machine__27630__auto__ = function(state_29776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27630__auto____1.call(this,state_29776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27630__auto____0;
cljs$core$async$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27630__auto____1;
return cljs$core$async$state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto___29810,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27743__auto__ = (function (){var statearr_29805 = f__27742__auto__.call(null);
(statearr_29805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto___29810);

return statearr_29805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto___29810,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29829 = [];
var len__26176__auto___29887 = arguments.length;
var i__26177__auto___29888 = (0);
while(true){
if((i__26177__auto___29888 < len__26176__auto___29887)){
args29829.push((arguments[i__26177__auto___29888]));

var G__29889 = (i__26177__auto___29888 + (1));
i__26177__auto___29888 = G__29889;
continue;
} else {
}
break;
}

var G__29831 = args29829.length;
switch (G__29831) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29829.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27741__auto___29891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto___29891,out){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto___29891,out){
return (function (state_29863){
var state_val_29864 = (state_29863[(1)]);
if((state_val_29864 === (7))){
var inst_29843 = (state_29863[(7)]);
var inst_29842 = (state_29863[(8)]);
var inst_29842__$1 = (state_29863[(2)]);
var inst_29843__$1 = cljs.core.nth.call(null,inst_29842__$1,(0),null);
var inst_29844 = cljs.core.nth.call(null,inst_29842__$1,(1),null);
var inst_29845 = (inst_29843__$1 == null);
var state_29863__$1 = (function (){var statearr_29865 = state_29863;
(statearr_29865[(9)] = inst_29844);

(statearr_29865[(7)] = inst_29843__$1);

(statearr_29865[(8)] = inst_29842__$1);

return statearr_29865;
})();
if(cljs.core.truth_(inst_29845)){
var statearr_29866_29892 = state_29863__$1;
(statearr_29866_29892[(1)] = (8));

} else {
var statearr_29867_29893 = state_29863__$1;
(statearr_29867_29893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (1))){
var inst_29832 = cljs.core.vec.call(null,chs);
var inst_29833 = inst_29832;
var state_29863__$1 = (function (){var statearr_29868 = state_29863;
(statearr_29868[(10)] = inst_29833);

return statearr_29868;
})();
var statearr_29869_29894 = state_29863__$1;
(statearr_29869_29894[(2)] = null);

(statearr_29869_29894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (4))){
var inst_29833 = (state_29863[(10)]);
var state_29863__$1 = state_29863;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29863__$1,(7),inst_29833);
} else {
if((state_val_29864 === (6))){
var inst_29859 = (state_29863[(2)]);
var state_29863__$1 = state_29863;
var statearr_29870_29895 = state_29863__$1;
(statearr_29870_29895[(2)] = inst_29859);

(statearr_29870_29895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (3))){
var inst_29861 = (state_29863[(2)]);
var state_29863__$1 = state_29863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29863__$1,inst_29861);
} else {
if((state_val_29864 === (2))){
var inst_29833 = (state_29863[(10)]);
var inst_29835 = cljs.core.count.call(null,inst_29833);
var inst_29836 = (inst_29835 > (0));
var state_29863__$1 = state_29863;
if(cljs.core.truth_(inst_29836)){
var statearr_29872_29896 = state_29863__$1;
(statearr_29872_29896[(1)] = (4));

} else {
var statearr_29873_29897 = state_29863__$1;
(statearr_29873_29897[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (11))){
var inst_29833 = (state_29863[(10)]);
var inst_29852 = (state_29863[(2)]);
var tmp29871 = inst_29833;
var inst_29833__$1 = tmp29871;
var state_29863__$1 = (function (){var statearr_29874 = state_29863;
(statearr_29874[(10)] = inst_29833__$1);

(statearr_29874[(11)] = inst_29852);

return statearr_29874;
})();
var statearr_29875_29898 = state_29863__$1;
(statearr_29875_29898[(2)] = null);

(statearr_29875_29898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (9))){
var inst_29843 = (state_29863[(7)]);
var state_29863__$1 = state_29863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29863__$1,(11),out,inst_29843);
} else {
if((state_val_29864 === (5))){
var inst_29857 = cljs.core.async.close_BANG_.call(null,out);
var state_29863__$1 = state_29863;
var statearr_29876_29899 = state_29863__$1;
(statearr_29876_29899[(2)] = inst_29857);

(statearr_29876_29899[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (10))){
var inst_29855 = (state_29863[(2)]);
var state_29863__$1 = state_29863;
var statearr_29877_29900 = state_29863__$1;
(statearr_29877_29900[(2)] = inst_29855);

(statearr_29877_29900[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (8))){
var inst_29844 = (state_29863[(9)]);
var inst_29843 = (state_29863[(7)]);
var inst_29833 = (state_29863[(10)]);
var inst_29842 = (state_29863[(8)]);
var inst_29847 = (function (){var cs = inst_29833;
var vec__29838 = inst_29842;
var v = inst_29843;
var c = inst_29844;
return ((function (cs,vec__29838,v,c,inst_29844,inst_29843,inst_29833,inst_29842,state_val_29864,c__27741__auto___29891,out){
return (function (p1__29828_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29828_SHARP_);
});
;})(cs,vec__29838,v,c,inst_29844,inst_29843,inst_29833,inst_29842,state_val_29864,c__27741__auto___29891,out))
})();
var inst_29848 = cljs.core.filterv.call(null,inst_29847,inst_29833);
var inst_29833__$1 = inst_29848;
var state_29863__$1 = (function (){var statearr_29878 = state_29863;
(statearr_29878[(10)] = inst_29833__$1);

return statearr_29878;
})();
var statearr_29879_29901 = state_29863__$1;
(statearr_29879_29901[(2)] = null);

(statearr_29879_29901[(1)] = (2));


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
});})(c__27741__auto___29891,out))
;
return ((function (switch__27629__auto__,c__27741__auto___29891,out){
return (function() {
var cljs$core$async$state_machine__27630__auto__ = null;
var cljs$core$async$state_machine__27630__auto____0 = (function (){
var statearr_29883 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29883[(0)] = cljs$core$async$state_machine__27630__auto__);

(statearr_29883[(1)] = (1));

return statearr_29883;
});
var cljs$core$async$state_machine__27630__auto____1 = (function (state_29863){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_29863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e29884){if((e29884 instanceof Object)){
var ex__27633__auto__ = e29884;
var statearr_29885_29902 = state_29863;
(statearr_29885_29902[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29903 = state_29863;
state_29863 = G__29903;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
cljs$core$async$state_machine__27630__auto__ = function(state_29863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27630__auto____1.call(this,state_29863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27630__auto____0;
cljs$core$async$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27630__auto____1;
return cljs$core$async$state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto___29891,out))
})();
var state__27743__auto__ = (function (){var statearr_29886 = f__27742__auto__.call(null);
(statearr_29886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto___29891);

return statearr_29886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto___29891,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29904 = [];
var len__26176__auto___29953 = arguments.length;
var i__26177__auto___29954 = (0);
while(true){
if((i__26177__auto___29954 < len__26176__auto___29953)){
args29904.push((arguments[i__26177__auto___29954]));

var G__29955 = (i__26177__auto___29954 + (1));
i__26177__auto___29954 = G__29955;
continue;
} else {
}
break;
}

var G__29906 = args29904.length;
switch (G__29906) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29904.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27741__auto___29957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto___29957,out){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto___29957,out){
return (function (state_29930){
var state_val_29931 = (state_29930[(1)]);
if((state_val_29931 === (7))){
var inst_29912 = (state_29930[(7)]);
var inst_29912__$1 = (state_29930[(2)]);
var inst_29913 = (inst_29912__$1 == null);
var inst_29914 = cljs.core.not.call(null,inst_29913);
var state_29930__$1 = (function (){var statearr_29932 = state_29930;
(statearr_29932[(7)] = inst_29912__$1);

return statearr_29932;
})();
if(inst_29914){
var statearr_29933_29958 = state_29930__$1;
(statearr_29933_29958[(1)] = (8));

} else {
var statearr_29934_29959 = state_29930__$1;
(statearr_29934_29959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29931 === (1))){
var inst_29907 = (0);
var state_29930__$1 = (function (){var statearr_29935 = state_29930;
(statearr_29935[(8)] = inst_29907);

return statearr_29935;
})();
var statearr_29936_29960 = state_29930__$1;
(statearr_29936_29960[(2)] = null);

(statearr_29936_29960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29931 === (4))){
var state_29930__$1 = state_29930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29930__$1,(7),ch);
} else {
if((state_val_29931 === (6))){
var inst_29925 = (state_29930[(2)]);
var state_29930__$1 = state_29930;
var statearr_29937_29961 = state_29930__$1;
(statearr_29937_29961[(2)] = inst_29925);

(statearr_29937_29961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29931 === (3))){
var inst_29927 = (state_29930[(2)]);
var inst_29928 = cljs.core.async.close_BANG_.call(null,out);
var state_29930__$1 = (function (){var statearr_29938 = state_29930;
(statearr_29938[(9)] = inst_29927);

return statearr_29938;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29930__$1,inst_29928);
} else {
if((state_val_29931 === (2))){
var inst_29907 = (state_29930[(8)]);
var inst_29909 = (inst_29907 < n);
var state_29930__$1 = state_29930;
if(cljs.core.truth_(inst_29909)){
var statearr_29939_29962 = state_29930__$1;
(statearr_29939_29962[(1)] = (4));

} else {
var statearr_29940_29963 = state_29930__$1;
(statearr_29940_29963[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29931 === (11))){
var inst_29907 = (state_29930[(8)]);
var inst_29917 = (state_29930[(2)]);
var inst_29918 = (inst_29907 + (1));
var inst_29907__$1 = inst_29918;
var state_29930__$1 = (function (){var statearr_29941 = state_29930;
(statearr_29941[(10)] = inst_29917);

(statearr_29941[(8)] = inst_29907__$1);

return statearr_29941;
})();
var statearr_29942_29964 = state_29930__$1;
(statearr_29942_29964[(2)] = null);

(statearr_29942_29964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29931 === (9))){
var state_29930__$1 = state_29930;
var statearr_29943_29965 = state_29930__$1;
(statearr_29943_29965[(2)] = null);

(statearr_29943_29965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29931 === (5))){
var state_29930__$1 = state_29930;
var statearr_29944_29966 = state_29930__$1;
(statearr_29944_29966[(2)] = null);

(statearr_29944_29966[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29931 === (10))){
var inst_29922 = (state_29930[(2)]);
var state_29930__$1 = state_29930;
var statearr_29945_29967 = state_29930__$1;
(statearr_29945_29967[(2)] = inst_29922);

(statearr_29945_29967[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29931 === (8))){
var inst_29912 = (state_29930[(7)]);
var state_29930__$1 = state_29930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29930__$1,(11),out,inst_29912);
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
});})(c__27741__auto___29957,out))
;
return ((function (switch__27629__auto__,c__27741__auto___29957,out){
return (function() {
var cljs$core$async$state_machine__27630__auto__ = null;
var cljs$core$async$state_machine__27630__auto____0 = (function (){
var statearr_29949 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29949[(0)] = cljs$core$async$state_machine__27630__auto__);

(statearr_29949[(1)] = (1));

return statearr_29949;
});
var cljs$core$async$state_machine__27630__auto____1 = (function (state_29930){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_29930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e29950){if((e29950 instanceof Object)){
var ex__27633__auto__ = e29950;
var statearr_29951_29968 = state_29930;
(statearr_29951_29968[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29969 = state_29930;
state_29930 = G__29969;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
cljs$core$async$state_machine__27630__auto__ = function(state_29930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27630__auto____1.call(this,state_29930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27630__auto____0;
cljs$core$async$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27630__auto____1;
return cljs$core$async$state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto___29957,out))
})();
var state__27743__auto__ = (function (){var statearr_29952 = f__27742__auto__.call(null);
(statearr_29952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto___29957);

return statearr_29952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto___29957,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29977 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29977 = (function (map_LT_,f,ch,meta29978){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29978 = meta29978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29979,meta29978__$1){
var self__ = this;
var _29979__$1 = this;
return (new cljs.core.async.t_cljs$core$async29977(self__.map_LT_,self__.f,self__.ch,meta29978__$1));
});

cljs.core.async.t_cljs$core$async29977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29979){
var self__ = this;
var _29979__$1 = this;
return self__.meta29978;
});

cljs.core.async.t_cljs$core$async29977.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29977.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29977.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29977.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29977.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29980 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29980 = (function (map_LT_,f,ch,meta29978,_,fn1,meta29981){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29978 = meta29978;
this._ = _;
this.fn1 = fn1;
this.meta29981 = meta29981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29982,meta29981__$1){
var self__ = this;
var _29982__$1 = this;
return (new cljs.core.async.t_cljs$core$async29980(self__.map_LT_,self__.f,self__.ch,self__.meta29978,self__._,self__.fn1,meta29981__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29980.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29982){
var self__ = this;
var _29982__$1 = this;
return self__.meta29981;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29980.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29980.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29980.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29980.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29970_SHARP_){
return f1.call(null,(((p1__29970_SHARP_ == null))?null:self__.f.call(null,p1__29970_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29980.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29978","meta29978",1101277388,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29977","cljs.core.async/t_cljs$core$async29977",-1360692572,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29981","meta29981",1055724073,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29980.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29980";

cljs.core.async.t_cljs$core$async29980.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25707__auto__,writer__25708__auto__,opt__25709__auto__){
return cljs.core._write.call(null,writer__25708__auto__,"cljs.core.async/t_cljs$core$async29980");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29980 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29980(map_LT___$1,f__$1,ch__$1,meta29978__$1,___$2,fn1__$1,meta29981){
return (new cljs.core.async.t_cljs$core$async29980(map_LT___$1,f__$1,ch__$1,meta29978__$1,___$2,fn1__$1,meta29981));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29980(self__.map_LT_,self__.f,self__.ch,self__.meta29978,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25089__auto__ = ret;
if(cljs.core.truth_(and__25089__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25089__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29977.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29977.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29977.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29978","meta29978",1101277388,null)], null);
});

cljs.core.async.t_cljs$core$async29977.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29977";

cljs.core.async.t_cljs$core$async29977.cljs$lang$ctorPrWriter = (function (this__25707__auto__,writer__25708__auto__,opt__25709__auto__){
return cljs.core._write.call(null,writer__25708__auto__,"cljs.core.async/t_cljs$core$async29977");
});

cljs.core.async.__GT_t_cljs$core$async29977 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29977(map_LT___$1,f__$1,ch__$1,meta29978){
return (new cljs.core.async.t_cljs$core$async29977(map_LT___$1,f__$1,ch__$1,meta29978));
});

}

return (new cljs.core.async.t_cljs$core$async29977(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29986 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29986 = (function (map_GT_,f,ch,meta29987){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29987 = meta29987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29988,meta29987__$1){
var self__ = this;
var _29988__$1 = this;
return (new cljs.core.async.t_cljs$core$async29986(self__.map_GT_,self__.f,self__.ch,meta29987__$1));
});

cljs.core.async.t_cljs$core$async29986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29988){
var self__ = this;
var _29988__$1 = this;
return self__.meta29987;
});

cljs.core.async.t_cljs$core$async29986.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29986.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29986.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29986.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29986.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29986.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29987","meta29987",-1091463321,null)], null);
});

cljs.core.async.t_cljs$core$async29986.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29986.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29986";

cljs.core.async.t_cljs$core$async29986.cljs$lang$ctorPrWriter = (function (this__25707__auto__,writer__25708__auto__,opt__25709__auto__){
return cljs.core._write.call(null,writer__25708__auto__,"cljs.core.async/t_cljs$core$async29986");
});

cljs.core.async.__GT_t_cljs$core$async29986 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29986(map_GT___$1,f__$1,ch__$1,meta29987){
return (new cljs.core.async.t_cljs$core$async29986(map_GT___$1,f__$1,ch__$1,meta29987));
});

}

return (new cljs.core.async.t_cljs$core$async29986(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29992 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29992 = (function (filter_GT_,p,ch,meta29993){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29993 = meta29993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29994,meta29993__$1){
var self__ = this;
var _29994__$1 = this;
return (new cljs.core.async.t_cljs$core$async29992(self__.filter_GT_,self__.p,self__.ch,meta29993__$1));
});

cljs.core.async.t_cljs$core$async29992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29994){
var self__ = this;
var _29994__$1 = this;
return self__.meta29993;
});

cljs.core.async.t_cljs$core$async29992.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29992.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29992.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29992.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29992.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29992.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29992.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29992.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29993","meta29993",1361679808,null)], null);
});

cljs.core.async.t_cljs$core$async29992.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29992.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29992";

cljs.core.async.t_cljs$core$async29992.cljs$lang$ctorPrWriter = (function (this__25707__auto__,writer__25708__auto__,opt__25709__auto__){
return cljs.core._write.call(null,writer__25708__auto__,"cljs.core.async/t_cljs$core$async29992");
});

cljs.core.async.__GT_t_cljs$core$async29992 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29992(filter_GT___$1,p__$1,ch__$1,meta29993){
return (new cljs.core.async.t_cljs$core$async29992(filter_GT___$1,p__$1,ch__$1,meta29993));
});

}

return (new cljs.core.async.t_cljs$core$async29992(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29995 = [];
var len__26176__auto___30039 = arguments.length;
var i__26177__auto___30040 = (0);
while(true){
if((i__26177__auto___30040 < len__26176__auto___30039)){
args29995.push((arguments[i__26177__auto___30040]));

var G__30041 = (i__26177__auto___30040 + (1));
i__26177__auto___30040 = G__30041;
continue;
} else {
}
break;
}

var G__29997 = args29995.length;
switch (G__29997) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29995.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27741__auto___30043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto___30043,out){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto___30043,out){
return (function (state_30018){
var state_val_30019 = (state_30018[(1)]);
if((state_val_30019 === (7))){
var inst_30014 = (state_30018[(2)]);
var state_30018__$1 = state_30018;
var statearr_30020_30044 = state_30018__$1;
(statearr_30020_30044[(2)] = inst_30014);

(statearr_30020_30044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30019 === (1))){
var state_30018__$1 = state_30018;
var statearr_30021_30045 = state_30018__$1;
(statearr_30021_30045[(2)] = null);

(statearr_30021_30045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30019 === (4))){
var inst_30000 = (state_30018[(7)]);
var inst_30000__$1 = (state_30018[(2)]);
var inst_30001 = (inst_30000__$1 == null);
var state_30018__$1 = (function (){var statearr_30022 = state_30018;
(statearr_30022[(7)] = inst_30000__$1);

return statearr_30022;
})();
if(cljs.core.truth_(inst_30001)){
var statearr_30023_30046 = state_30018__$1;
(statearr_30023_30046[(1)] = (5));

} else {
var statearr_30024_30047 = state_30018__$1;
(statearr_30024_30047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30019 === (6))){
var inst_30000 = (state_30018[(7)]);
var inst_30005 = p.call(null,inst_30000);
var state_30018__$1 = state_30018;
if(cljs.core.truth_(inst_30005)){
var statearr_30025_30048 = state_30018__$1;
(statearr_30025_30048[(1)] = (8));

} else {
var statearr_30026_30049 = state_30018__$1;
(statearr_30026_30049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30019 === (3))){
var inst_30016 = (state_30018[(2)]);
var state_30018__$1 = state_30018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30018__$1,inst_30016);
} else {
if((state_val_30019 === (2))){
var state_30018__$1 = state_30018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30018__$1,(4),ch);
} else {
if((state_val_30019 === (11))){
var inst_30008 = (state_30018[(2)]);
var state_30018__$1 = state_30018;
var statearr_30027_30050 = state_30018__$1;
(statearr_30027_30050[(2)] = inst_30008);

(statearr_30027_30050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30019 === (9))){
var state_30018__$1 = state_30018;
var statearr_30028_30051 = state_30018__$1;
(statearr_30028_30051[(2)] = null);

(statearr_30028_30051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30019 === (5))){
var inst_30003 = cljs.core.async.close_BANG_.call(null,out);
var state_30018__$1 = state_30018;
var statearr_30029_30052 = state_30018__$1;
(statearr_30029_30052[(2)] = inst_30003);

(statearr_30029_30052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30019 === (10))){
var inst_30011 = (state_30018[(2)]);
var state_30018__$1 = (function (){var statearr_30030 = state_30018;
(statearr_30030[(8)] = inst_30011);

return statearr_30030;
})();
var statearr_30031_30053 = state_30018__$1;
(statearr_30031_30053[(2)] = null);

(statearr_30031_30053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30019 === (8))){
var inst_30000 = (state_30018[(7)]);
var state_30018__$1 = state_30018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30018__$1,(11),out,inst_30000);
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
});})(c__27741__auto___30043,out))
;
return ((function (switch__27629__auto__,c__27741__auto___30043,out){
return (function() {
var cljs$core$async$state_machine__27630__auto__ = null;
var cljs$core$async$state_machine__27630__auto____0 = (function (){
var statearr_30035 = [null,null,null,null,null,null,null,null,null];
(statearr_30035[(0)] = cljs$core$async$state_machine__27630__auto__);

(statearr_30035[(1)] = (1));

return statearr_30035;
});
var cljs$core$async$state_machine__27630__auto____1 = (function (state_30018){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_30018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e30036){if((e30036 instanceof Object)){
var ex__27633__auto__ = e30036;
var statearr_30037_30054 = state_30018;
(statearr_30037_30054[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30055 = state_30018;
state_30018 = G__30055;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
cljs$core$async$state_machine__27630__auto__ = function(state_30018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27630__auto____1.call(this,state_30018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27630__auto____0;
cljs$core$async$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27630__auto____1;
return cljs$core$async$state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto___30043,out))
})();
var state__27743__auto__ = (function (){var statearr_30038 = f__27742__auto__.call(null);
(statearr_30038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto___30043);

return statearr_30038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto___30043,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30056 = [];
var len__26176__auto___30059 = arguments.length;
var i__26177__auto___30060 = (0);
while(true){
if((i__26177__auto___30060 < len__26176__auto___30059)){
args30056.push((arguments[i__26177__auto___30060]));

var G__30061 = (i__26177__auto___30060 + (1));
i__26177__auto___30060 = G__30061;
continue;
} else {
}
break;
}

var G__30058 = args30056.length;
switch (G__30058) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30056.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27741__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto__){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto__){
return (function (state_30228){
var state_val_30229 = (state_30228[(1)]);
if((state_val_30229 === (7))){
var inst_30224 = (state_30228[(2)]);
var state_30228__$1 = state_30228;
var statearr_30230_30271 = state_30228__$1;
(statearr_30230_30271[(2)] = inst_30224);

(statearr_30230_30271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (20))){
var inst_30194 = (state_30228[(7)]);
var inst_30205 = (state_30228[(2)]);
var inst_30206 = cljs.core.next.call(null,inst_30194);
var inst_30180 = inst_30206;
var inst_30181 = null;
var inst_30182 = (0);
var inst_30183 = (0);
var state_30228__$1 = (function (){var statearr_30231 = state_30228;
(statearr_30231[(8)] = inst_30180);

(statearr_30231[(9)] = inst_30205);

(statearr_30231[(10)] = inst_30182);

(statearr_30231[(11)] = inst_30183);

(statearr_30231[(12)] = inst_30181);

return statearr_30231;
})();
var statearr_30232_30272 = state_30228__$1;
(statearr_30232_30272[(2)] = null);

(statearr_30232_30272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (1))){
var state_30228__$1 = state_30228;
var statearr_30233_30273 = state_30228__$1;
(statearr_30233_30273[(2)] = null);

(statearr_30233_30273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (4))){
var inst_30169 = (state_30228[(13)]);
var inst_30169__$1 = (state_30228[(2)]);
var inst_30170 = (inst_30169__$1 == null);
var state_30228__$1 = (function (){var statearr_30234 = state_30228;
(statearr_30234[(13)] = inst_30169__$1);

return statearr_30234;
})();
if(cljs.core.truth_(inst_30170)){
var statearr_30235_30274 = state_30228__$1;
(statearr_30235_30274[(1)] = (5));

} else {
var statearr_30236_30275 = state_30228__$1;
(statearr_30236_30275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (15))){
var state_30228__$1 = state_30228;
var statearr_30240_30276 = state_30228__$1;
(statearr_30240_30276[(2)] = null);

(statearr_30240_30276[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (21))){
var state_30228__$1 = state_30228;
var statearr_30241_30277 = state_30228__$1;
(statearr_30241_30277[(2)] = null);

(statearr_30241_30277[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (13))){
var inst_30180 = (state_30228[(8)]);
var inst_30182 = (state_30228[(10)]);
var inst_30183 = (state_30228[(11)]);
var inst_30181 = (state_30228[(12)]);
var inst_30190 = (state_30228[(2)]);
var inst_30191 = (inst_30183 + (1));
var tmp30237 = inst_30180;
var tmp30238 = inst_30182;
var tmp30239 = inst_30181;
var inst_30180__$1 = tmp30237;
var inst_30181__$1 = tmp30239;
var inst_30182__$1 = tmp30238;
var inst_30183__$1 = inst_30191;
var state_30228__$1 = (function (){var statearr_30242 = state_30228;
(statearr_30242[(14)] = inst_30190);

(statearr_30242[(8)] = inst_30180__$1);

(statearr_30242[(10)] = inst_30182__$1);

(statearr_30242[(11)] = inst_30183__$1);

(statearr_30242[(12)] = inst_30181__$1);

return statearr_30242;
})();
var statearr_30243_30278 = state_30228__$1;
(statearr_30243_30278[(2)] = null);

(statearr_30243_30278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (22))){
var state_30228__$1 = state_30228;
var statearr_30244_30279 = state_30228__$1;
(statearr_30244_30279[(2)] = null);

(statearr_30244_30279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (6))){
var inst_30169 = (state_30228[(13)]);
var inst_30178 = f.call(null,inst_30169);
var inst_30179 = cljs.core.seq.call(null,inst_30178);
var inst_30180 = inst_30179;
var inst_30181 = null;
var inst_30182 = (0);
var inst_30183 = (0);
var state_30228__$1 = (function (){var statearr_30245 = state_30228;
(statearr_30245[(8)] = inst_30180);

(statearr_30245[(10)] = inst_30182);

(statearr_30245[(11)] = inst_30183);

(statearr_30245[(12)] = inst_30181);

return statearr_30245;
})();
var statearr_30246_30280 = state_30228__$1;
(statearr_30246_30280[(2)] = null);

(statearr_30246_30280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (17))){
var inst_30194 = (state_30228[(7)]);
var inst_30198 = cljs.core.chunk_first.call(null,inst_30194);
var inst_30199 = cljs.core.chunk_rest.call(null,inst_30194);
var inst_30200 = cljs.core.count.call(null,inst_30198);
var inst_30180 = inst_30199;
var inst_30181 = inst_30198;
var inst_30182 = inst_30200;
var inst_30183 = (0);
var state_30228__$1 = (function (){var statearr_30247 = state_30228;
(statearr_30247[(8)] = inst_30180);

(statearr_30247[(10)] = inst_30182);

(statearr_30247[(11)] = inst_30183);

(statearr_30247[(12)] = inst_30181);

return statearr_30247;
})();
var statearr_30248_30281 = state_30228__$1;
(statearr_30248_30281[(2)] = null);

(statearr_30248_30281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (3))){
var inst_30226 = (state_30228[(2)]);
var state_30228__$1 = state_30228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30228__$1,inst_30226);
} else {
if((state_val_30229 === (12))){
var inst_30214 = (state_30228[(2)]);
var state_30228__$1 = state_30228;
var statearr_30249_30282 = state_30228__$1;
(statearr_30249_30282[(2)] = inst_30214);

(statearr_30249_30282[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (2))){
var state_30228__$1 = state_30228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30228__$1,(4),in$);
} else {
if((state_val_30229 === (23))){
var inst_30222 = (state_30228[(2)]);
var state_30228__$1 = state_30228;
var statearr_30250_30283 = state_30228__$1;
(statearr_30250_30283[(2)] = inst_30222);

(statearr_30250_30283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (19))){
var inst_30209 = (state_30228[(2)]);
var state_30228__$1 = state_30228;
var statearr_30251_30284 = state_30228__$1;
(statearr_30251_30284[(2)] = inst_30209);

(statearr_30251_30284[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (11))){
var inst_30180 = (state_30228[(8)]);
var inst_30194 = (state_30228[(7)]);
var inst_30194__$1 = cljs.core.seq.call(null,inst_30180);
var state_30228__$1 = (function (){var statearr_30252 = state_30228;
(statearr_30252[(7)] = inst_30194__$1);

return statearr_30252;
})();
if(inst_30194__$1){
var statearr_30253_30285 = state_30228__$1;
(statearr_30253_30285[(1)] = (14));

} else {
var statearr_30254_30286 = state_30228__$1;
(statearr_30254_30286[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (9))){
var inst_30216 = (state_30228[(2)]);
var inst_30217 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30228__$1 = (function (){var statearr_30255 = state_30228;
(statearr_30255[(15)] = inst_30216);

return statearr_30255;
})();
if(cljs.core.truth_(inst_30217)){
var statearr_30256_30287 = state_30228__$1;
(statearr_30256_30287[(1)] = (21));

} else {
var statearr_30257_30288 = state_30228__$1;
(statearr_30257_30288[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (5))){
var inst_30172 = cljs.core.async.close_BANG_.call(null,out);
var state_30228__$1 = state_30228;
var statearr_30258_30289 = state_30228__$1;
(statearr_30258_30289[(2)] = inst_30172);

(statearr_30258_30289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (14))){
var inst_30194 = (state_30228[(7)]);
var inst_30196 = cljs.core.chunked_seq_QMARK_.call(null,inst_30194);
var state_30228__$1 = state_30228;
if(inst_30196){
var statearr_30259_30290 = state_30228__$1;
(statearr_30259_30290[(1)] = (17));

} else {
var statearr_30260_30291 = state_30228__$1;
(statearr_30260_30291[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (16))){
var inst_30212 = (state_30228[(2)]);
var state_30228__$1 = state_30228;
var statearr_30261_30292 = state_30228__$1;
(statearr_30261_30292[(2)] = inst_30212);

(statearr_30261_30292[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (10))){
var inst_30183 = (state_30228[(11)]);
var inst_30181 = (state_30228[(12)]);
var inst_30188 = cljs.core._nth.call(null,inst_30181,inst_30183);
var state_30228__$1 = state_30228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30228__$1,(13),out,inst_30188);
} else {
if((state_val_30229 === (18))){
var inst_30194 = (state_30228[(7)]);
var inst_30203 = cljs.core.first.call(null,inst_30194);
var state_30228__$1 = state_30228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30228__$1,(20),out,inst_30203);
} else {
if((state_val_30229 === (8))){
var inst_30182 = (state_30228[(10)]);
var inst_30183 = (state_30228[(11)]);
var inst_30185 = (inst_30183 < inst_30182);
var inst_30186 = inst_30185;
var state_30228__$1 = state_30228;
if(cljs.core.truth_(inst_30186)){
var statearr_30262_30293 = state_30228__$1;
(statearr_30262_30293[(1)] = (10));

} else {
var statearr_30263_30294 = state_30228__$1;
(statearr_30263_30294[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__27630__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27630__auto____0 = (function (){
var statearr_30267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30267[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27630__auto__);

(statearr_30267[(1)] = (1));

return statearr_30267;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27630__auto____1 = (function (state_30228){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_30228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e30268){if((e30268 instanceof Object)){
var ex__27633__auto__ = e30268;
var statearr_30269_30295 = state_30228;
(statearr_30269_30295[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30296 = state_30228;
state_30228 = G__30296;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27630__auto__ = function(state_30228){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27630__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27630__auto____1.call(this,state_30228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27630__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27630__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto__))
})();
var state__27743__auto__ = (function (){var statearr_30270 = f__27742__auto__.call(null);
(statearr_30270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto__);

return statearr_30270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto__))
);

return c__27741__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30297 = [];
var len__26176__auto___30300 = arguments.length;
var i__26177__auto___30301 = (0);
while(true){
if((i__26177__auto___30301 < len__26176__auto___30300)){
args30297.push((arguments[i__26177__auto___30301]));

var G__30302 = (i__26177__auto___30301 + (1));
i__26177__auto___30301 = G__30302;
continue;
} else {
}
break;
}

var G__30299 = args30297.length;
switch (G__30299) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30297.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30304 = [];
var len__26176__auto___30307 = arguments.length;
var i__26177__auto___30308 = (0);
while(true){
if((i__26177__auto___30308 < len__26176__auto___30307)){
args30304.push((arguments[i__26177__auto___30308]));

var G__30309 = (i__26177__auto___30308 + (1));
i__26177__auto___30308 = G__30309;
continue;
} else {
}
break;
}

var G__30306 = args30304.length;
switch (G__30306) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30304.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30311 = [];
var len__26176__auto___30362 = arguments.length;
var i__26177__auto___30363 = (0);
while(true){
if((i__26177__auto___30363 < len__26176__auto___30362)){
args30311.push((arguments[i__26177__auto___30363]));

var G__30364 = (i__26177__auto___30363 + (1));
i__26177__auto___30363 = G__30364;
continue;
} else {
}
break;
}

var G__30313 = args30311.length;
switch (G__30313) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30311.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27741__auto___30366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto___30366,out){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto___30366,out){
return (function (state_30337){
var state_val_30338 = (state_30337[(1)]);
if((state_val_30338 === (7))){
var inst_30332 = (state_30337[(2)]);
var state_30337__$1 = state_30337;
var statearr_30339_30367 = state_30337__$1;
(statearr_30339_30367[(2)] = inst_30332);

(statearr_30339_30367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30338 === (1))){
var inst_30314 = null;
var state_30337__$1 = (function (){var statearr_30340 = state_30337;
(statearr_30340[(7)] = inst_30314);

return statearr_30340;
})();
var statearr_30341_30368 = state_30337__$1;
(statearr_30341_30368[(2)] = null);

(statearr_30341_30368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30338 === (4))){
var inst_30317 = (state_30337[(8)]);
var inst_30317__$1 = (state_30337[(2)]);
var inst_30318 = (inst_30317__$1 == null);
var inst_30319 = cljs.core.not.call(null,inst_30318);
var state_30337__$1 = (function (){var statearr_30342 = state_30337;
(statearr_30342[(8)] = inst_30317__$1);

return statearr_30342;
})();
if(inst_30319){
var statearr_30343_30369 = state_30337__$1;
(statearr_30343_30369[(1)] = (5));

} else {
var statearr_30344_30370 = state_30337__$1;
(statearr_30344_30370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30338 === (6))){
var state_30337__$1 = state_30337;
var statearr_30345_30371 = state_30337__$1;
(statearr_30345_30371[(2)] = null);

(statearr_30345_30371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30338 === (3))){
var inst_30334 = (state_30337[(2)]);
var inst_30335 = cljs.core.async.close_BANG_.call(null,out);
var state_30337__$1 = (function (){var statearr_30346 = state_30337;
(statearr_30346[(9)] = inst_30334);

return statearr_30346;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30337__$1,inst_30335);
} else {
if((state_val_30338 === (2))){
var state_30337__$1 = state_30337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30337__$1,(4),ch);
} else {
if((state_val_30338 === (11))){
var inst_30317 = (state_30337[(8)]);
var inst_30326 = (state_30337[(2)]);
var inst_30314 = inst_30317;
var state_30337__$1 = (function (){var statearr_30347 = state_30337;
(statearr_30347[(10)] = inst_30326);

(statearr_30347[(7)] = inst_30314);

return statearr_30347;
})();
var statearr_30348_30372 = state_30337__$1;
(statearr_30348_30372[(2)] = null);

(statearr_30348_30372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30338 === (9))){
var inst_30317 = (state_30337[(8)]);
var state_30337__$1 = state_30337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30337__$1,(11),out,inst_30317);
} else {
if((state_val_30338 === (5))){
var inst_30314 = (state_30337[(7)]);
var inst_30317 = (state_30337[(8)]);
var inst_30321 = cljs.core._EQ_.call(null,inst_30317,inst_30314);
var state_30337__$1 = state_30337;
if(inst_30321){
var statearr_30350_30373 = state_30337__$1;
(statearr_30350_30373[(1)] = (8));

} else {
var statearr_30351_30374 = state_30337__$1;
(statearr_30351_30374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30338 === (10))){
var inst_30329 = (state_30337[(2)]);
var state_30337__$1 = state_30337;
var statearr_30352_30375 = state_30337__$1;
(statearr_30352_30375[(2)] = inst_30329);

(statearr_30352_30375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30338 === (8))){
var inst_30314 = (state_30337[(7)]);
var tmp30349 = inst_30314;
var inst_30314__$1 = tmp30349;
var state_30337__$1 = (function (){var statearr_30353 = state_30337;
(statearr_30353[(7)] = inst_30314__$1);

return statearr_30353;
})();
var statearr_30354_30376 = state_30337__$1;
(statearr_30354_30376[(2)] = null);

(statearr_30354_30376[(1)] = (2));


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
});})(c__27741__auto___30366,out))
;
return ((function (switch__27629__auto__,c__27741__auto___30366,out){
return (function() {
var cljs$core$async$state_machine__27630__auto__ = null;
var cljs$core$async$state_machine__27630__auto____0 = (function (){
var statearr_30358 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30358[(0)] = cljs$core$async$state_machine__27630__auto__);

(statearr_30358[(1)] = (1));

return statearr_30358;
});
var cljs$core$async$state_machine__27630__auto____1 = (function (state_30337){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_30337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e30359){if((e30359 instanceof Object)){
var ex__27633__auto__ = e30359;
var statearr_30360_30377 = state_30337;
(statearr_30360_30377[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30378 = state_30337;
state_30337 = G__30378;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
cljs$core$async$state_machine__27630__auto__ = function(state_30337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27630__auto____1.call(this,state_30337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27630__auto____0;
cljs$core$async$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27630__auto____1;
return cljs$core$async$state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto___30366,out))
})();
var state__27743__auto__ = (function (){var statearr_30361 = f__27742__auto__.call(null);
(statearr_30361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto___30366);

return statearr_30361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto___30366,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30379 = [];
var len__26176__auto___30449 = arguments.length;
var i__26177__auto___30450 = (0);
while(true){
if((i__26177__auto___30450 < len__26176__auto___30449)){
args30379.push((arguments[i__26177__auto___30450]));

var G__30451 = (i__26177__auto___30450 + (1));
i__26177__auto___30450 = G__30451;
continue;
} else {
}
break;
}

var G__30381 = args30379.length;
switch (G__30381) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30379.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27741__auto___30453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto___30453,out){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto___30453,out){
return (function (state_30419){
var state_val_30420 = (state_30419[(1)]);
if((state_val_30420 === (7))){
var inst_30415 = (state_30419[(2)]);
var state_30419__$1 = state_30419;
var statearr_30421_30454 = state_30419__$1;
(statearr_30421_30454[(2)] = inst_30415);

(statearr_30421_30454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (1))){
var inst_30382 = (new Array(n));
var inst_30383 = inst_30382;
var inst_30384 = (0);
var state_30419__$1 = (function (){var statearr_30422 = state_30419;
(statearr_30422[(7)] = inst_30384);

(statearr_30422[(8)] = inst_30383);

return statearr_30422;
})();
var statearr_30423_30455 = state_30419__$1;
(statearr_30423_30455[(2)] = null);

(statearr_30423_30455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (4))){
var inst_30387 = (state_30419[(9)]);
var inst_30387__$1 = (state_30419[(2)]);
var inst_30388 = (inst_30387__$1 == null);
var inst_30389 = cljs.core.not.call(null,inst_30388);
var state_30419__$1 = (function (){var statearr_30424 = state_30419;
(statearr_30424[(9)] = inst_30387__$1);

return statearr_30424;
})();
if(inst_30389){
var statearr_30425_30456 = state_30419__$1;
(statearr_30425_30456[(1)] = (5));

} else {
var statearr_30426_30457 = state_30419__$1;
(statearr_30426_30457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (15))){
var inst_30409 = (state_30419[(2)]);
var state_30419__$1 = state_30419;
var statearr_30427_30458 = state_30419__$1;
(statearr_30427_30458[(2)] = inst_30409);

(statearr_30427_30458[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (13))){
var state_30419__$1 = state_30419;
var statearr_30428_30459 = state_30419__$1;
(statearr_30428_30459[(2)] = null);

(statearr_30428_30459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (6))){
var inst_30384 = (state_30419[(7)]);
var inst_30405 = (inst_30384 > (0));
var state_30419__$1 = state_30419;
if(cljs.core.truth_(inst_30405)){
var statearr_30429_30460 = state_30419__$1;
(statearr_30429_30460[(1)] = (12));

} else {
var statearr_30430_30461 = state_30419__$1;
(statearr_30430_30461[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (3))){
var inst_30417 = (state_30419[(2)]);
var state_30419__$1 = state_30419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30419__$1,inst_30417);
} else {
if((state_val_30420 === (12))){
var inst_30383 = (state_30419[(8)]);
var inst_30407 = cljs.core.vec.call(null,inst_30383);
var state_30419__$1 = state_30419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30419__$1,(15),out,inst_30407);
} else {
if((state_val_30420 === (2))){
var state_30419__$1 = state_30419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30419__$1,(4),ch);
} else {
if((state_val_30420 === (11))){
var inst_30399 = (state_30419[(2)]);
var inst_30400 = (new Array(n));
var inst_30383 = inst_30400;
var inst_30384 = (0);
var state_30419__$1 = (function (){var statearr_30431 = state_30419;
(statearr_30431[(10)] = inst_30399);

(statearr_30431[(7)] = inst_30384);

(statearr_30431[(8)] = inst_30383);

return statearr_30431;
})();
var statearr_30432_30462 = state_30419__$1;
(statearr_30432_30462[(2)] = null);

(statearr_30432_30462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (9))){
var inst_30383 = (state_30419[(8)]);
var inst_30397 = cljs.core.vec.call(null,inst_30383);
var state_30419__$1 = state_30419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30419__$1,(11),out,inst_30397);
} else {
if((state_val_30420 === (5))){
var inst_30392 = (state_30419[(11)]);
var inst_30387 = (state_30419[(9)]);
var inst_30384 = (state_30419[(7)]);
var inst_30383 = (state_30419[(8)]);
var inst_30391 = (inst_30383[inst_30384] = inst_30387);
var inst_30392__$1 = (inst_30384 + (1));
var inst_30393 = (inst_30392__$1 < n);
var state_30419__$1 = (function (){var statearr_30433 = state_30419;
(statearr_30433[(11)] = inst_30392__$1);

(statearr_30433[(12)] = inst_30391);

return statearr_30433;
})();
if(cljs.core.truth_(inst_30393)){
var statearr_30434_30463 = state_30419__$1;
(statearr_30434_30463[(1)] = (8));

} else {
var statearr_30435_30464 = state_30419__$1;
(statearr_30435_30464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (14))){
var inst_30412 = (state_30419[(2)]);
var inst_30413 = cljs.core.async.close_BANG_.call(null,out);
var state_30419__$1 = (function (){var statearr_30437 = state_30419;
(statearr_30437[(13)] = inst_30412);

return statearr_30437;
})();
var statearr_30438_30465 = state_30419__$1;
(statearr_30438_30465[(2)] = inst_30413);

(statearr_30438_30465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (10))){
var inst_30403 = (state_30419[(2)]);
var state_30419__$1 = state_30419;
var statearr_30439_30466 = state_30419__$1;
(statearr_30439_30466[(2)] = inst_30403);

(statearr_30439_30466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (8))){
var inst_30392 = (state_30419[(11)]);
var inst_30383 = (state_30419[(8)]);
var tmp30436 = inst_30383;
var inst_30383__$1 = tmp30436;
var inst_30384 = inst_30392;
var state_30419__$1 = (function (){var statearr_30440 = state_30419;
(statearr_30440[(7)] = inst_30384);

(statearr_30440[(8)] = inst_30383__$1);

return statearr_30440;
})();
var statearr_30441_30467 = state_30419__$1;
(statearr_30441_30467[(2)] = null);

(statearr_30441_30467[(1)] = (2));


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
});})(c__27741__auto___30453,out))
;
return ((function (switch__27629__auto__,c__27741__auto___30453,out){
return (function() {
var cljs$core$async$state_machine__27630__auto__ = null;
var cljs$core$async$state_machine__27630__auto____0 = (function (){
var statearr_30445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30445[(0)] = cljs$core$async$state_machine__27630__auto__);

(statearr_30445[(1)] = (1));

return statearr_30445;
});
var cljs$core$async$state_machine__27630__auto____1 = (function (state_30419){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_30419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e30446){if((e30446 instanceof Object)){
var ex__27633__auto__ = e30446;
var statearr_30447_30468 = state_30419;
(statearr_30447_30468[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30469 = state_30419;
state_30419 = G__30469;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
cljs$core$async$state_machine__27630__auto__ = function(state_30419){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27630__auto____1.call(this,state_30419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27630__auto____0;
cljs$core$async$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27630__auto____1;
return cljs$core$async$state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto___30453,out))
})();
var state__27743__auto__ = (function (){var statearr_30448 = f__27742__auto__.call(null);
(statearr_30448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto___30453);

return statearr_30448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto___30453,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30470 = [];
var len__26176__auto___30544 = arguments.length;
var i__26177__auto___30545 = (0);
while(true){
if((i__26177__auto___30545 < len__26176__auto___30544)){
args30470.push((arguments[i__26177__auto___30545]));

var G__30546 = (i__26177__auto___30545 + (1));
i__26177__auto___30545 = G__30546;
continue;
} else {
}
break;
}

var G__30472 = args30470.length;
switch (G__30472) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30470.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27741__auto___30548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto___30548,out){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto___30548,out){
return (function (state_30514){
var state_val_30515 = (state_30514[(1)]);
if((state_val_30515 === (7))){
var inst_30510 = (state_30514[(2)]);
var state_30514__$1 = state_30514;
var statearr_30516_30549 = state_30514__$1;
(statearr_30516_30549[(2)] = inst_30510);

(statearr_30516_30549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (1))){
var inst_30473 = [];
var inst_30474 = inst_30473;
var inst_30475 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30514__$1 = (function (){var statearr_30517 = state_30514;
(statearr_30517[(7)] = inst_30474);

(statearr_30517[(8)] = inst_30475);

return statearr_30517;
})();
var statearr_30518_30550 = state_30514__$1;
(statearr_30518_30550[(2)] = null);

(statearr_30518_30550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (4))){
var inst_30478 = (state_30514[(9)]);
var inst_30478__$1 = (state_30514[(2)]);
var inst_30479 = (inst_30478__$1 == null);
var inst_30480 = cljs.core.not.call(null,inst_30479);
var state_30514__$1 = (function (){var statearr_30519 = state_30514;
(statearr_30519[(9)] = inst_30478__$1);

return statearr_30519;
})();
if(inst_30480){
var statearr_30520_30551 = state_30514__$1;
(statearr_30520_30551[(1)] = (5));

} else {
var statearr_30521_30552 = state_30514__$1;
(statearr_30521_30552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (15))){
var inst_30504 = (state_30514[(2)]);
var state_30514__$1 = state_30514;
var statearr_30522_30553 = state_30514__$1;
(statearr_30522_30553[(2)] = inst_30504);

(statearr_30522_30553[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (13))){
var state_30514__$1 = state_30514;
var statearr_30523_30554 = state_30514__$1;
(statearr_30523_30554[(2)] = null);

(statearr_30523_30554[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (6))){
var inst_30474 = (state_30514[(7)]);
var inst_30499 = inst_30474.length;
var inst_30500 = (inst_30499 > (0));
var state_30514__$1 = state_30514;
if(cljs.core.truth_(inst_30500)){
var statearr_30524_30555 = state_30514__$1;
(statearr_30524_30555[(1)] = (12));

} else {
var statearr_30525_30556 = state_30514__$1;
(statearr_30525_30556[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (3))){
var inst_30512 = (state_30514[(2)]);
var state_30514__$1 = state_30514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30514__$1,inst_30512);
} else {
if((state_val_30515 === (12))){
var inst_30474 = (state_30514[(7)]);
var inst_30502 = cljs.core.vec.call(null,inst_30474);
var state_30514__$1 = state_30514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30514__$1,(15),out,inst_30502);
} else {
if((state_val_30515 === (2))){
var state_30514__$1 = state_30514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30514__$1,(4),ch);
} else {
if((state_val_30515 === (11))){
var inst_30478 = (state_30514[(9)]);
var inst_30482 = (state_30514[(10)]);
var inst_30492 = (state_30514[(2)]);
var inst_30493 = [];
var inst_30494 = inst_30493.push(inst_30478);
var inst_30474 = inst_30493;
var inst_30475 = inst_30482;
var state_30514__$1 = (function (){var statearr_30526 = state_30514;
(statearr_30526[(7)] = inst_30474);

(statearr_30526[(8)] = inst_30475);

(statearr_30526[(11)] = inst_30492);

(statearr_30526[(12)] = inst_30494);

return statearr_30526;
})();
var statearr_30527_30557 = state_30514__$1;
(statearr_30527_30557[(2)] = null);

(statearr_30527_30557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (9))){
var inst_30474 = (state_30514[(7)]);
var inst_30490 = cljs.core.vec.call(null,inst_30474);
var state_30514__$1 = state_30514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30514__$1,(11),out,inst_30490);
} else {
if((state_val_30515 === (5))){
var inst_30478 = (state_30514[(9)]);
var inst_30475 = (state_30514[(8)]);
var inst_30482 = (state_30514[(10)]);
var inst_30482__$1 = f.call(null,inst_30478);
var inst_30483 = cljs.core._EQ_.call(null,inst_30482__$1,inst_30475);
var inst_30484 = cljs.core.keyword_identical_QMARK_.call(null,inst_30475,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30485 = (inst_30483) || (inst_30484);
var state_30514__$1 = (function (){var statearr_30528 = state_30514;
(statearr_30528[(10)] = inst_30482__$1);

return statearr_30528;
})();
if(cljs.core.truth_(inst_30485)){
var statearr_30529_30558 = state_30514__$1;
(statearr_30529_30558[(1)] = (8));

} else {
var statearr_30530_30559 = state_30514__$1;
(statearr_30530_30559[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (14))){
var inst_30507 = (state_30514[(2)]);
var inst_30508 = cljs.core.async.close_BANG_.call(null,out);
var state_30514__$1 = (function (){var statearr_30532 = state_30514;
(statearr_30532[(13)] = inst_30507);

return statearr_30532;
})();
var statearr_30533_30560 = state_30514__$1;
(statearr_30533_30560[(2)] = inst_30508);

(statearr_30533_30560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (10))){
var inst_30497 = (state_30514[(2)]);
var state_30514__$1 = state_30514;
var statearr_30534_30561 = state_30514__$1;
(statearr_30534_30561[(2)] = inst_30497);

(statearr_30534_30561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (8))){
var inst_30478 = (state_30514[(9)]);
var inst_30474 = (state_30514[(7)]);
var inst_30482 = (state_30514[(10)]);
var inst_30487 = inst_30474.push(inst_30478);
var tmp30531 = inst_30474;
var inst_30474__$1 = tmp30531;
var inst_30475 = inst_30482;
var state_30514__$1 = (function (){var statearr_30535 = state_30514;
(statearr_30535[(7)] = inst_30474__$1);

(statearr_30535[(8)] = inst_30475);

(statearr_30535[(14)] = inst_30487);

return statearr_30535;
})();
var statearr_30536_30562 = state_30514__$1;
(statearr_30536_30562[(2)] = null);

(statearr_30536_30562[(1)] = (2));


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
});})(c__27741__auto___30548,out))
;
return ((function (switch__27629__auto__,c__27741__auto___30548,out){
return (function() {
var cljs$core$async$state_machine__27630__auto__ = null;
var cljs$core$async$state_machine__27630__auto____0 = (function (){
var statearr_30540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30540[(0)] = cljs$core$async$state_machine__27630__auto__);

(statearr_30540[(1)] = (1));

return statearr_30540;
});
var cljs$core$async$state_machine__27630__auto____1 = (function (state_30514){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_30514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e30541){if((e30541 instanceof Object)){
var ex__27633__auto__ = e30541;
var statearr_30542_30563 = state_30514;
(statearr_30542_30563[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30564 = state_30514;
state_30514 = G__30564;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
cljs$core$async$state_machine__27630__auto__ = function(state_30514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27630__auto____1.call(this,state_30514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27630__auto____0;
cljs$core$async$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27630__auto____1;
return cljs$core$async$state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto___30548,out))
})();
var state__27743__auto__ = (function (){var statearr_30543 = f__27742__auto__.call(null);
(statearr_30543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto___30548);

return statearr_30543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto___30548,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1487859336294