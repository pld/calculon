// Compiled by ClojureScript 1.9.229 {}
goog.provide('calculon.core');
goog.require('cljs.core');
goog.require('calculon.components');
if(typeof calculon.core.app_state !== 'undefined'){
} else {
calculon.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"json-url","json-url",1986159085),calculon.components.default_json_url], null));
}
calculon.core.render_BANG_ = (function calculon$core$render_BANG_(){
return ReactDOM.render(calculon.components.data_loader.call(null,calculon.core.app_state),document.getElementById("app"));
});
cljs.core.add_watch.call(null,calculon.core.app_state,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_,___$1,___$2,___$3){
return calculon.core.render_BANG_.call(null);
}));
calculon.core.render_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1487886789668