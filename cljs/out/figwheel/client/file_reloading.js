// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25101__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25101__auto__){
return or__25101__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25101__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25101__auto__)){
return or__25101__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32900_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32900_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__32905 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32906 = null;
var count__32907 = (0);
var i__32908 = (0);
while(true){
if((i__32908 < count__32907)){
var n = cljs.core._nth.call(null,chunk__32906,i__32908);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32909 = seq__32905;
var G__32910 = chunk__32906;
var G__32911 = count__32907;
var G__32912 = (i__32908 + (1));
seq__32905 = G__32909;
chunk__32906 = G__32910;
count__32907 = G__32911;
i__32908 = G__32912;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32905);
if(temp__4657__auto__){
var seq__32905__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32905__$1)){
var c__25912__auto__ = cljs.core.chunk_first.call(null,seq__32905__$1);
var G__32913 = cljs.core.chunk_rest.call(null,seq__32905__$1);
var G__32914 = c__25912__auto__;
var G__32915 = cljs.core.count.call(null,c__25912__auto__);
var G__32916 = (0);
seq__32905 = G__32913;
chunk__32906 = G__32914;
count__32907 = G__32915;
i__32908 = G__32916;
continue;
} else {
var n = cljs.core.first.call(null,seq__32905__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32917 = cljs.core.next.call(null,seq__32905__$1);
var G__32918 = null;
var G__32919 = (0);
var G__32920 = (0);
seq__32905 = G__32917;
chunk__32906 = G__32918;
count__32907 = G__32919;
i__32908 = G__32920;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__32971_32982 = cljs.core.seq.call(null,deps);
var chunk__32972_32983 = null;
var count__32973_32984 = (0);
var i__32974_32985 = (0);
while(true){
if((i__32974_32985 < count__32973_32984)){
var dep_32986 = cljs.core._nth.call(null,chunk__32972_32983,i__32974_32985);
topo_sort_helper_STAR_.call(null,dep_32986,(depth + (1)),state);

var G__32987 = seq__32971_32982;
var G__32988 = chunk__32972_32983;
var G__32989 = count__32973_32984;
var G__32990 = (i__32974_32985 + (1));
seq__32971_32982 = G__32987;
chunk__32972_32983 = G__32988;
count__32973_32984 = G__32989;
i__32974_32985 = G__32990;
continue;
} else {
var temp__4657__auto___32991 = cljs.core.seq.call(null,seq__32971_32982);
if(temp__4657__auto___32991){
var seq__32971_32992__$1 = temp__4657__auto___32991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32971_32992__$1)){
var c__25912__auto___32993 = cljs.core.chunk_first.call(null,seq__32971_32992__$1);
var G__32994 = cljs.core.chunk_rest.call(null,seq__32971_32992__$1);
var G__32995 = c__25912__auto___32993;
var G__32996 = cljs.core.count.call(null,c__25912__auto___32993);
var G__32997 = (0);
seq__32971_32982 = G__32994;
chunk__32972_32983 = G__32995;
count__32973_32984 = G__32996;
i__32974_32985 = G__32997;
continue;
} else {
var dep_32998 = cljs.core.first.call(null,seq__32971_32992__$1);
topo_sort_helper_STAR_.call(null,dep_32998,(depth + (1)),state);

var G__32999 = cljs.core.next.call(null,seq__32971_32992__$1);
var G__33000 = null;
var G__33001 = (0);
var G__33002 = (0);
seq__32971_32982 = G__32999;
chunk__32972_32983 = G__33000;
count__32973_32984 = G__33001;
i__32974_32985 = G__33002;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32975){
var vec__32979 = p__32975;
var seq__32980 = cljs.core.seq.call(null,vec__32979);
var first__32981 = cljs.core.first.call(null,seq__32980);
var seq__32980__$1 = cljs.core.next.call(null,seq__32980);
var x = first__32981;
var xs = seq__32980__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__32979,seq__32980,first__32981,seq__32980__$1,x,xs,get_deps__$1){
return (function (p1__32921_SHARP_){
return clojure.set.difference.call(null,p1__32921_SHARP_,x);
});})(vec__32979,seq__32980,first__32981,seq__32980__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__33015 = cljs.core.seq.call(null,provides);
var chunk__33016 = null;
var count__33017 = (0);
var i__33018 = (0);
while(true){
if((i__33018 < count__33017)){
var prov = cljs.core._nth.call(null,chunk__33016,i__33018);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33019_33027 = cljs.core.seq.call(null,requires);
var chunk__33020_33028 = null;
var count__33021_33029 = (0);
var i__33022_33030 = (0);
while(true){
if((i__33022_33030 < count__33021_33029)){
var req_33031 = cljs.core._nth.call(null,chunk__33020_33028,i__33022_33030);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33031,prov);

var G__33032 = seq__33019_33027;
var G__33033 = chunk__33020_33028;
var G__33034 = count__33021_33029;
var G__33035 = (i__33022_33030 + (1));
seq__33019_33027 = G__33032;
chunk__33020_33028 = G__33033;
count__33021_33029 = G__33034;
i__33022_33030 = G__33035;
continue;
} else {
var temp__4657__auto___33036 = cljs.core.seq.call(null,seq__33019_33027);
if(temp__4657__auto___33036){
var seq__33019_33037__$1 = temp__4657__auto___33036;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33019_33037__$1)){
var c__25912__auto___33038 = cljs.core.chunk_first.call(null,seq__33019_33037__$1);
var G__33039 = cljs.core.chunk_rest.call(null,seq__33019_33037__$1);
var G__33040 = c__25912__auto___33038;
var G__33041 = cljs.core.count.call(null,c__25912__auto___33038);
var G__33042 = (0);
seq__33019_33027 = G__33039;
chunk__33020_33028 = G__33040;
count__33021_33029 = G__33041;
i__33022_33030 = G__33042;
continue;
} else {
var req_33043 = cljs.core.first.call(null,seq__33019_33037__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33043,prov);

var G__33044 = cljs.core.next.call(null,seq__33019_33037__$1);
var G__33045 = null;
var G__33046 = (0);
var G__33047 = (0);
seq__33019_33027 = G__33044;
chunk__33020_33028 = G__33045;
count__33021_33029 = G__33046;
i__33022_33030 = G__33047;
continue;
}
} else {
}
}
break;
}

var G__33048 = seq__33015;
var G__33049 = chunk__33016;
var G__33050 = count__33017;
var G__33051 = (i__33018 + (1));
seq__33015 = G__33048;
chunk__33016 = G__33049;
count__33017 = G__33050;
i__33018 = G__33051;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33015);
if(temp__4657__auto__){
var seq__33015__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33015__$1)){
var c__25912__auto__ = cljs.core.chunk_first.call(null,seq__33015__$1);
var G__33052 = cljs.core.chunk_rest.call(null,seq__33015__$1);
var G__33053 = c__25912__auto__;
var G__33054 = cljs.core.count.call(null,c__25912__auto__);
var G__33055 = (0);
seq__33015 = G__33052;
chunk__33016 = G__33053;
count__33017 = G__33054;
i__33018 = G__33055;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33015__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33023_33056 = cljs.core.seq.call(null,requires);
var chunk__33024_33057 = null;
var count__33025_33058 = (0);
var i__33026_33059 = (0);
while(true){
if((i__33026_33059 < count__33025_33058)){
var req_33060 = cljs.core._nth.call(null,chunk__33024_33057,i__33026_33059);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33060,prov);

var G__33061 = seq__33023_33056;
var G__33062 = chunk__33024_33057;
var G__33063 = count__33025_33058;
var G__33064 = (i__33026_33059 + (1));
seq__33023_33056 = G__33061;
chunk__33024_33057 = G__33062;
count__33025_33058 = G__33063;
i__33026_33059 = G__33064;
continue;
} else {
var temp__4657__auto___33065__$1 = cljs.core.seq.call(null,seq__33023_33056);
if(temp__4657__auto___33065__$1){
var seq__33023_33066__$1 = temp__4657__auto___33065__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33023_33066__$1)){
var c__25912__auto___33067 = cljs.core.chunk_first.call(null,seq__33023_33066__$1);
var G__33068 = cljs.core.chunk_rest.call(null,seq__33023_33066__$1);
var G__33069 = c__25912__auto___33067;
var G__33070 = cljs.core.count.call(null,c__25912__auto___33067);
var G__33071 = (0);
seq__33023_33056 = G__33068;
chunk__33024_33057 = G__33069;
count__33025_33058 = G__33070;
i__33026_33059 = G__33071;
continue;
} else {
var req_33072 = cljs.core.first.call(null,seq__33023_33066__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33072,prov);

var G__33073 = cljs.core.next.call(null,seq__33023_33066__$1);
var G__33074 = null;
var G__33075 = (0);
var G__33076 = (0);
seq__33023_33056 = G__33073;
chunk__33024_33057 = G__33074;
count__33025_33058 = G__33075;
i__33026_33059 = G__33076;
continue;
}
} else {
}
}
break;
}

var G__33077 = cljs.core.next.call(null,seq__33015__$1);
var G__33078 = null;
var G__33079 = (0);
var G__33080 = (0);
seq__33015 = G__33077;
chunk__33016 = G__33078;
count__33017 = G__33079;
i__33018 = G__33080;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__33085_33089 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33086_33090 = null;
var count__33087_33091 = (0);
var i__33088_33092 = (0);
while(true){
if((i__33088_33092 < count__33087_33091)){
var ns_33093 = cljs.core._nth.call(null,chunk__33086_33090,i__33088_33092);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33093);

var G__33094 = seq__33085_33089;
var G__33095 = chunk__33086_33090;
var G__33096 = count__33087_33091;
var G__33097 = (i__33088_33092 + (1));
seq__33085_33089 = G__33094;
chunk__33086_33090 = G__33095;
count__33087_33091 = G__33096;
i__33088_33092 = G__33097;
continue;
} else {
var temp__4657__auto___33098 = cljs.core.seq.call(null,seq__33085_33089);
if(temp__4657__auto___33098){
var seq__33085_33099__$1 = temp__4657__auto___33098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33085_33099__$1)){
var c__25912__auto___33100 = cljs.core.chunk_first.call(null,seq__33085_33099__$1);
var G__33101 = cljs.core.chunk_rest.call(null,seq__33085_33099__$1);
var G__33102 = c__25912__auto___33100;
var G__33103 = cljs.core.count.call(null,c__25912__auto___33100);
var G__33104 = (0);
seq__33085_33089 = G__33101;
chunk__33086_33090 = G__33102;
count__33087_33091 = G__33103;
i__33088_33092 = G__33104;
continue;
} else {
var ns_33105 = cljs.core.first.call(null,seq__33085_33099__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33105);

var G__33106 = cljs.core.next.call(null,seq__33085_33099__$1);
var G__33107 = null;
var G__33108 = (0);
var G__33109 = (0);
seq__33085_33089 = G__33106;
chunk__33086_33090 = G__33107;
count__33087_33091 = G__33108;
i__33088_33092 = G__33109;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25101__auto__ = goog.require__;
if(cljs.core.truth_(or__25101__auto__)){
return or__25101__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__33110__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33110 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33111__i = 0, G__33111__a = new Array(arguments.length -  0);
while (G__33111__i < G__33111__a.length) {G__33111__a[G__33111__i] = arguments[G__33111__i + 0]; ++G__33111__i;}
  args = new cljs.core.IndexedSeq(G__33111__a,0);
} 
return G__33110__delegate.call(this,args);};
G__33110.cljs$lang$maxFixedArity = 0;
G__33110.cljs$lang$applyTo = (function (arglist__33112){
var args = cljs.core.seq(arglist__33112);
return G__33110__delegate(args);
});
G__33110.cljs$core$IFn$_invoke$arity$variadic = G__33110__delegate;
return G__33110;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33114 = cljs.core._EQ_;
var expr__33115 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33114.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33115))){
var path_parts = ((function (pred__33114,expr__33115){
return (function (p1__33113_SHARP_){
return clojure.string.split.call(null,p1__33113_SHARP_,/[\/\\]/);
});})(pred__33114,expr__33115))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__33114,expr__33115){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33117){if((e33117 instanceof Error)){
var e = e33117;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33117;

}
}})());
});
;})(path_parts,sep,root,pred__33114,expr__33115))
} else {
if(cljs.core.truth_(pred__33114.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33115))){
return ((function (pred__33114,expr__33115){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__33114,expr__33115){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__33114,expr__33115))
);

return deferred.addErrback(((function (deferred,pred__33114,expr__33115){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__33114,expr__33115))
);
});
;})(pred__33114,expr__33115))
} else {
return ((function (pred__33114,expr__33115){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33114,expr__33115))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33118,callback){
var map__33121 = p__33118;
var map__33121__$1 = ((((!((map__33121 == null)))?((((map__33121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33121):map__33121);
var file_msg = map__33121__$1;
var request_url = cljs.core.get.call(null,map__33121__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33121,map__33121__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33121,map__33121__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27741__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto__){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto__){
return (function (state_33145){
var state_val_33146 = (state_33145[(1)]);
if((state_val_33146 === (7))){
var inst_33141 = (state_33145[(2)]);
var state_33145__$1 = state_33145;
var statearr_33147_33167 = state_33145__$1;
(statearr_33147_33167[(2)] = inst_33141);

(statearr_33147_33167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (1))){
var state_33145__$1 = state_33145;
var statearr_33148_33168 = state_33145__$1;
(statearr_33148_33168[(2)] = null);

(statearr_33148_33168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (4))){
var inst_33125 = (state_33145[(7)]);
var inst_33125__$1 = (state_33145[(2)]);
var state_33145__$1 = (function (){var statearr_33149 = state_33145;
(statearr_33149[(7)] = inst_33125__$1);

return statearr_33149;
})();
if(cljs.core.truth_(inst_33125__$1)){
var statearr_33150_33169 = state_33145__$1;
(statearr_33150_33169[(1)] = (5));

} else {
var statearr_33151_33170 = state_33145__$1;
(statearr_33151_33170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (6))){
var state_33145__$1 = state_33145;
var statearr_33152_33171 = state_33145__$1;
(statearr_33152_33171[(2)] = null);

(statearr_33152_33171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (3))){
var inst_33143 = (state_33145[(2)]);
var state_33145__$1 = state_33145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33145__$1,inst_33143);
} else {
if((state_val_33146 === (2))){
var state_33145__$1 = state_33145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33145__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33146 === (11))){
var inst_33137 = (state_33145[(2)]);
var state_33145__$1 = (function (){var statearr_33153 = state_33145;
(statearr_33153[(8)] = inst_33137);

return statearr_33153;
})();
var statearr_33154_33172 = state_33145__$1;
(statearr_33154_33172[(2)] = null);

(statearr_33154_33172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (9))){
var inst_33131 = (state_33145[(9)]);
var inst_33129 = (state_33145[(10)]);
var inst_33133 = inst_33131.call(null,inst_33129);
var state_33145__$1 = state_33145;
var statearr_33155_33173 = state_33145__$1;
(statearr_33155_33173[(2)] = inst_33133);

(statearr_33155_33173[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (5))){
var inst_33125 = (state_33145[(7)]);
var inst_33127 = figwheel.client.file_reloading.blocking_load.call(null,inst_33125);
var state_33145__$1 = state_33145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33145__$1,(8),inst_33127);
} else {
if((state_val_33146 === (10))){
var inst_33129 = (state_33145[(10)]);
var inst_33135 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33129);
var state_33145__$1 = state_33145;
var statearr_33156_33174 = state_33145__$1;
(statearr_33156_33174[(2)] = inst_33135);

(statearr_33156_33174[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (8))){
var inst_33131 = (state_33145[(9)]);
var inst_33125 = (state_33145[(7)]);
var inst_33129 = (state_33145[(2)]);
var inst_33130 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33131__$1 = cljs.core.get.call(null,inst_33130,inst_33125);
var state_33145__$1 = (function (){var statearr_33157 = state_33145;
(statearr_33157[(9)] = inst_33131__$1);

(statearr_33157[(10)] = inst_33129);

return statearr_33157;
})();
if(cljs.core.truth_(inst_33131__$1)){
var statearr_33158_33175 = state_33145__$1;
(statearr_33158_33175[(1)] = (9));

} else {
var statearr_33159_33176 = state_33145__$1;
(statearr_33159_33176[(1)] = (10));

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
});})(c__27741__auto__))
;
return ((function (switch__27629__auto__,c__27741__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27630__auto__ = null;
var figwheel$client$file_reloading$state_machine__27630__auto____0 = (function (){
var statearr_33163 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33163[(0)] = figwheel$client$file_reloading$state_machine__27630__auto__);

(statearr_33163[(1)] = (1));

return statearr_33163;
});
var figwheel$client$file_reloading$state_machine__27630__auto____1 = (function (state_33145){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_33145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e33164){if((e33164 instanceof Object)){
var ex__27633__auto__ = e33164;
var statearr_33165_33177 = state_33145;
(statearr_33165_33177[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33178 = state_33145;
state_33145 = G__33178;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27630__auto__ = function(state_33145){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27630__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27630__auto____1.call(this,state_33145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27630__auto____0;
figwheel$client$file_reloading$state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27630__auto____1;
return figwheel$client$file_reloading$state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto__))
})();
var state__27743__auto__ = (function (){var statearr_33166 = f__27742__auto__.call(null);
(statearr_33166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto__);

return statearr_33166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto__))
);

return c__27741__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33179,callback){
var map__33182 = p__33179;
var map__33182__$1 = ((((!((map__33182 == null)))?((((map__33182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33182):map__33182);
var file_msg = map__33182__$1;
var namespace = cljs.core.get.call(null,map__33182__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33182,map__33182__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33182,map__33182__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33184){
var map__33187 = p__33184;
var map__33187__$1 = ((((!((map__33187 == null)))?((((map__33187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33187):map__33187);
var file_msg = map__33187__$1;
var namespace = cljs.core.get.call(null,map__33187__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25089__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__25089__auto__){
var or__25101__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25101__auto__)){
return or__25101__auto__;
} else {
var or__25101__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25101__auto____$1)){
return or__25101__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25089__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33189,callback){
var map__33192 = p__33189;
var map__33192__$1 = ((((!((map__33192 == null)))?((((map__33192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33192):map__33192);
var file_msg = map__33192__$1;
var request_url = cljs.core.get.call(null,map__33192__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33192__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27741__auto___33296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto___33296,out){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto___33296,out){
return (function (state_33278){
var state_val_33279 = (state_33278[(1)]);
if((state_val_33279 === (1))){
var inst_33252 = cljs.core.seq.call(null,files);
var inst_33253 = cljs.core.first.call(null,inst_33252);
var inst_33254 = cljs.core.next.call(null,inst_33252);
var inst_33255 = files;
var state_33278__$1 = (function (){var statearr_33280 = state_33278;
(statearr_33280[(7)] = inst_33255);

(statearr_33280[(8)] = inst_33254);

(statearr_33280[(9)] = inst_33253);

return statearr_33280;
})();
var statearr_33281_33297 = state_33278__$1;
(statearr_33281_33297[(2)] = null);

(statearr_33281_33297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (2))){
var inst_33255 = (state_33278[(7)]);
var inst_33261 = (state_33278[(10)]);
var inst_33260 = cljs.core.seq.call(null,inst_33255);
var inst_33261__$1 = cljs.core.first.call(null,inst_33260);
var inst_33262 = cljs.core.next.call(null,inst_33260);
var inst_33263 = (inst_33261__$1 == null);
var inst_33264 = cljs.core.not.call(null,inst_33263);
var state_33278__$1 = (function (){var statearr_33282 = state_33278;
(statearr_33282[(11)] = inst_33262);

(statearr_33282[(10)] = inst_33261__$1);

return statearr_33282;
})();
if(inst_33264){
var statearr_33283_33298 = state_33278__$1;
(statearr_33283_33298[(1)] = (4));

} else {
var statearr_33284_33299 = state_33278__$1;
(statearr_33284_33299[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (3))){
var inst_33276 = (state_33278[(2)]);
var state_33278__$1 = state_33278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33278__$1,inst_33276);
} else {
if((state_val_33279 === (4))){
var inst_33261 = (state_33278[(10)]);
var inst_33266 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33261);
var state_33278__$1 = state_33278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33278__$1,(7),inst_33266);
} else {
if((state_val_33279 === (5))){
var inst_33272 = cljs.core.async.close_BANG_.call(null,out);
var state_33278__$1 = state_33278;
var statearr_33285_33300 = state_33278__$1;
(statearr_33285_33300[(2)] = inst_33272);

(statearr_33285_33300[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (6))){
var inst_33274 = (state_33278[(2)]);
var state_33278__$1 = state_33278;
var statearr_33286_33301 = state_33278__$1;
(statearr_33286_33301[(2)] = inst_33274);

(statearr_33286_33301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (7))){
var inst_33262 = (state_33278[(11)]);
var inst_33268 = (state_33278[(2)]);
var inst_33269 = cljs.core.async.put_BANG_.call(null,out,inst_33268);
var inst_33255 = inst_33262;
var state_33278__$1 = (function (){var statearr_33287 = state_33278;
(statearr_33287[(12)] = inst_33269);

(statearr_33287[(7)] = inst_33255);

return statearr_33287;
})();
var statearr_33288_33302 = state_33278__$1;
(statearr_33288_33302[(2)] = null);

(statearr_33288_33302[(1)] = (2));


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
});})(c__27741__auto___33296,out))
;
return ((function (switch__27629__auto__,c__27741__auto___33296,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27630__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27630__auto____0 = (function (){
var statearr_33292 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33292[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27630__auto__);

(statearr_33292[(1)] = (1));

return statearr_33292;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27630__auto____1 = (function (state_33278){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_33278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e33293){if((e33293 instanceof Object)){
var ex__27633__auto__ = e33293;
var statearr_33294_33303 = state_33278;
(statearr_33294_33303[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33304 = state_33278;
state_33278 = G__33304;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27630__auto__ = function(state_33278){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27630__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27630__auto____1.call(this,state_33278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27630__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27630__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto___33296,out))
})();
var state__27743__auto__ = (function (){var statearr_33295 = f__27742__auto__.call(null);
(statearr_33295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto___33296);

return statearr_33295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto___33296,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33305,opts){
var map__33309 = p__33305;
var map__33309__$1 = ((((!((map__33309 == null)))?((((map__33309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33309):map__33309);
var eval_body__$1 = cljs.core.get.call(null,map__33309__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33309__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25089__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25089__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25089__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e33311){var e = e33311;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__33312_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33312_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__33321){
var vec__33322 = p__33321;
var k = cljs.core.nth.call(null,vec__33322,(0),null);
var v = cljs.core.nth.call(null,vec__33322,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33325){
var vec__33326 = p__33325;
var k = cljs.core.nth.call(null,vec__33326,(0),null);
var v = cljs.core.nth.call(null,vec__33326,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33332,p__33333){
var map__33580 = p__33332;
var map__33580__$1 = ((((!((map__33580 == null)))?((((map__33580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33580):map__33580);
var opts = map__33580__$1;
var before_jsload = cljs.core.get.call(null,map__33580__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33580__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__33580__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__33581 = p__33333;
var map__33581__$1 = ((((!((map__33581 == null)))?((((map__33581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33581):map__33581);
var msg = map__33581__$1;
var files = cljs.core.get.call(null,map__33581__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__33581__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__33581__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27741__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27741__auto__,map__33580,map__33580__$1,opts,before_jsload,on_jsload,reload_dependents,map__33581,map__33581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27742__auto__ = (function (){var switch__27629__auto__ = ((function (c__27741__auto__,map__33580,map__33580__$1,opts,before_jsload,on_jsload,reload_dependents,map__33581,map__33581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_33734){
var state_val_33735 = (state_33734[(1)]);
if((state_val_33735 === (7))){
var inst_33596 = (state_33734[(7)]);
var inst_33595 = (state_33734[(8)]);
var inst_33598 = (state_33734[(9)]);
var inst_33597 = (state_33734[(10)]);
var inst_33603 = cljs.core._nth.call(null,inst_33596,inst_33598);
var inst_33604 = figwheel.client.file_reloading.eval_body.call(null,inst_33603,opts);
var inst_33605 = (inst_33598 + (1));
var tmp33736 = inst_33596;
var tmp33737 = inst_33595;
var tmp33738 = inst_33597;
var inst_33595__$1 = tmp33737;
var inst_33596__$1 = tmp33736;
var inst_33597__$1 = tmp33738;
var inst_33598__$1 = inst_33605;
var state_33734__$1 = (function (){var statearr_33739 = state_33734;
(statearr_33739[(7)] = inst_33596__$1);

(statearr_33739[(8)] = inst_33595__$1);

(statearr_33739[(11)] = inst_33604);

(statearr_33739[(9)] = inst_33598__$1);

(statearr_33739[(10)] = inst_33597__$1);

return statearr_33739;
})();
var statearr_33740_33826 = state_33734__$1;
(statearr_33740_33826[(2)] = null);

(statearr_33740_33826[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (20))){
var inst_33638 = (state_33734[(12)]);
var inst_33646 = figwheel.client.file_reloading.sort_files.call(null,inst_33638);
var state_33734__$1 = state_33734;
var statearr_33741_33827 = state_33734__$1;
(statearr_33741_33827[(2)] = inst_33646);

(statearr_33741_33827[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (27))){
var state_33734__$1 = state_33734;
var statearr_33742_33828 = state_33734__$1;
(statearr_33742_33828[(2)] = null);

(statearr_33742_33828[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (1))){
var inst_33587 = (state_33734[(13)]);
var inst_33584 = before_jsload.call(null,files);
var inst_33585 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33586 = (function (){return ((function (inst_33587,inst_33584,inst_33585,state_val_33735,c__27741__auto__,map__33580,map__33580__$1,opts,before_jsload,on_jsload,reload_dependents,map__33581,map__33581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33329_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33329_SHARP_);
});
;})(inst_33587,inst_33584,inst_33585,state_val_33735,c__27741__auto__,map__33580,map__33580__$1,opts,before_jsload,on_jsload,reload_dependents,map__33581,map__33581__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33587__$1 = cljs.core.filter.call(null,inst_33586,files);
var inst_33588 = cljs.core.not_empty.call(null,inst_33587__$1);
var state_33734__$1 = (function (){var statearr_33743 = state_33734;
(statearr_33743[(13)] = inst_33587__$1);

(statearr_33743[(14)] = inst_33584);

(statearr_33743[(15)] = inst_33585);

return statearr_33743;
})();
if(cljs.core.truth_(inst_33588)){
var statearr_33744_33829 = state_33734__$1;
(statearr_33744_33829[(1)] = (2));

} else {
var statearr_33745_33830 = state_33734__$1;
(statearr_33745_33830[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (24))){
var state_33734__$1 = state_33734;
var statearr_33746_33831 = state_33734__$1;
(statearr_33746_33831[(2)] = null);

(statearr_33746_33831[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (39))){
var inst_33688 = (state_33734[(16)]);
var state_33734__$1 = state_33734;
var statearr_33747_33832 = state_33734__$1;
(statearr_33747_33832[(2)] = inst_33688);

(statearr_33747_33832[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (46))){
var inst_33729 = (state_33734[(2)]);
var state_33734__$1 = state_33734;
var statearr_33748_33833 = state_33734__$1;
(statearr_33748_33833[(2)] = inst_33729);

(statearr_33748_33833[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (4))){
var inst_33632 = (state_33734[(2)]);
var inst_33633 = cljs.core.List.EMPTY;
var inst_33634 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33633);
var inst_33635 = (function (){return ((function (inst_33632,inst_33633,inst_33634,state_val_33735,c__27741__auto__,map__33580,map__33580__$1,opts,before_jsload,on_jsload,reload_dependents,map__33581,map__33581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33330_SHARP_){
var and__25089__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33330_SHARP_);
if(cljs.core.truth_(and__25089__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33330_SHARP_));
} else {
return and__25089__auto__;
}
});
;})(inst_33632,inst_33633,inst_33634,state_val_33735,c__27741__auto__,map__33580,map__33580__$1,opts,before_jsload,on_jsload,reload_dependents,map__33581,map__33581__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33636 = cljs.core.filter.call(null,inst_33635,files);
var inst_33637 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33638 = cljs.core.concat.call(null,inst_33636,inst_33637);
var state_33734__$1 = (function (){var statearr_33749 = state_33734;
(statearr_33749[(17)] = inst_33632);

(statearr_33749[(12)] = inst_33638);

(statearr_33749[(18)] = inst_33634);

return statearr_33749;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33750_33834 = state_33734__$1;
(statearr_33750_33834[(1)] = (16));

} else {
var statearr_33751_33835 = state_33734__$1;
(statearr_33751_33835[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (15))){
var inst_33622 = (state_33734[(2)]);
var state_33734__$1 = state_33734;
var statearr_33752_33836 = state_33734__$1;
(statearr_33752_33836[(2)] = inst_33622);

(statearr_33752_33836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (21))){
var inst_33648 = (state_33734[(19)]);
var inst_33648__$1 = (state_33734[(2)]);
var inst_33649 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33648__$1);
var state_33734__$1 = (function (){var statearr_33753 = state_33734;
(statearr_33753[(19)] = inst_33648__$1);

return statearr_33753;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33734__$1,(22),inst_33649);
} else {
if((state_val_33735 === (31))){
var inst_33732 = (state_33734[(2)]);
var state_33734__$1 = state_33734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33734__$1,inst_33732);
} else {
if((state_val_33735 === (32))){
var inst_33688 = (state_33734[(16)]);
var inst_33693 = inst_33688.cljs$lang$protocol_mask$partition0$;
var inst_33694 = (inst_33693 & (64));
var inst_33695 = inst_33688.cljs$core$ISeq$;
var inst_33696 = (inst_33694) || (inst_33695);
var state_33734__$1 = state_33734;
if(cljs.core.truth_(inst_33696)){
var statearr_33754_33837 = state_33734__$1;
(statearr_33754_33837[(1)] = (35));

} else {
var statearr_33755_33838 = state_33734__$1;
(statearr_33755_33838[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (40))){
var inst_33709 = (state_33734[(20)]);
var inst_33708 = (state_33734[(2)]);
var inst_33709__$1 = cljs.core.get.call(null,inst_33708,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33710 = cljs.core.get.call(null,inst_33708,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33711 = cljs.core.not_empty.call(null,inst_33709__$1);
var state_33734__$1 = (function (){var statearr_33756 = state_33734;
(statearr_33756[(20)] = inst_33709__$1);

(statearr_33756[(21)] = inst_33710);

return statearr_33756;
})();
if(cljs.core.truth_(inst_33711)){
var statearr_33757_33839 = state_33734__$1;
(statearr_33757_33839[(1)] = (41));

} else {
var statearr_33758_33840 = state_33734__$1;
(statearr_33758_33840[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (33))){
var state_33734__$1 = state_33734;
var statearr_33759_33841 = state_33734__$1;
(statearr_33759_33841[(2)] = false);

(statearr_33759_33841[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (13))){
var inst_33608 = (state_33734[(22)]);
var inst_33612 = cljs.core.chunk_first.call(null,inst_33608);
var inst_33613 = cljs.core.chunk_rest.call(null,inst_33608);
var inst_33614 = cljs.core.count.call(null,inst_33612);
var inst_33595 = inst_33613;
var inst_33596 = inst_33612;
var inst_33597 = inst_33614;
var inst_33598 = (0);
var state_33734__$1 = (function (){var statearr_33760 = state_33734;
(statearr_33760[(7)] = inst_33596);

(statearr_33760[(8)] = inst_33595);

(statearr_33760[(9)] = inst_33598);

(statearr_33760[(10)] = inst_33597);

return statearr_33760;
})();
var statearr_33761_33842 = state_33734__$1;
(statearr_33761_33842[(2)] = null);

(statearr_33761_33842[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (22))){
var inst_33656 = (state_33734[(23)]);
var inst_33652 = (state_33734[(24)]);
var inst_33648 = (state_33734[(19)]);
var inst_33651 = (state_33734[(25)]);
var inst_33651__$1 = (state_33734[(2)]);
var inst_33652__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33651__$1);
var inst_33653 = (function (){var all_files = inst_33648;
var res_SINGLEQUOTE_ = inst_33651__$1;
var res = inst_33652__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33656,inst_33652,inst_33648,inst_33651,inst_33651__$1,inst_33652__$1,state_val_33735,c__27741__auto__,map__33580,map__33580__$1,opts,before_jsload,on_jsload,reload_dependents,map__33581,map__33581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33331_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33331_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33656,inst_33652,inst_33648,inst_33651,inst_33651__$1,inst_33652__$1,state_val_33735,c__27741__auto__,map__33580,map__33580__$1,opts,before_jsload,on_jsload,reload_dependents,map__33581,map__33581__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33654 = cljs.core.filter.call(null,inst_33653,inst_33651__$1);
var inst_33655 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33656__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33655);
var inst_33657 = cljs.core.not_empty.call(null,inst_33656__$1);
var state_33734__$1 = (function (){var statearr_33762 = state_33734;
(statearr_33762[(23)] = inst_33656__$1);

(statearr_33762[(24)] = inst_33652__$1);

(statearr_33762[(26)] = inst_33654);

(statearr_33762[(25)] = inst_33651__$1);

return statearr_33762;
})();
if(cljs.core.truth_(inst_33657)){
var statearr_33763_33843 = state_33734__$1;
(statearr_33763_33843[(1)] = (23));

} else {
var statearr_33764_33844 = state_33734__$1;
(statearr_33764_33844[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (36))){
var state_33734__$1 = state_33734;
var statearr_33765_33845 = state_33734__$1;
(statearr_33765_33845[(2)] = false);

(statearr_33765_33845[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (41))){
var inst_33709 = (state_33734[(20)]);
var inst_33713 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33714 = cljs.core.map.call(null,inst_33713,inst_33709);
var inst_33715 = cljs.core.pr_str.call(null,inst_33714);
var inst_33716 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_33715)].join('');
var inst_33717 = figwheel.client.utils.log.call(null,inst_33716);
var state_33734__$1 = state_33734;
var statearr_33766_33846 = state_33734__$1;
(statearr_33766_33846[(2)] = inst_33717);

(statearr_33766_33846[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (43))){
var inst_33710 = (state_33734[(21)]);
var inst_33720 = (state_33734[(2)]);
var inst_33721 = cljs.core.not_empty.call(null,inst_33710);
var state_33734__$1 = (function (){var statearr_33767 = state_33734;
(statearr_33767[(27)] = inst_33720);

return statearr_33767;
})();
if(cljs.core.truth_(inst_33721)){
var statearr_33768_33847 = state_33734__$1;
(statearr_33768_33847[(1)] = (44));

} else {
var statearr_33769_33848 = state_33734__$1;
(statearr_33769_33848[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (29))){
var inst_33656 = (state_33734[(23)]);
var inst_33688 = (state_33734[(16)]);
var inst_33652 = (state_33734[(24)]);
var inst_33654 = (state_33734[(26)]);
var inst_33648 = (state_33734[(19)]);
var inst_33651 = (state_33734[(25)]);
var inst_33684 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33687 = (function (){var all_files = inst_33648;
var res_SINGLEQUOTE_ = inst_33651;
var res = inst_33652;
var files_not_loaded = inst_33654;
var dependencies_that_loaded = inst_33656;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33656,inst_33688,inst_33652,inst_33654,inst_33648,inst_33651,inst_33684,state_val_33735,c__27741__auto__,map__33580,map__33580__$1,opts,before_jsload,on_jsload,reload_dependents,map__33581,map__33581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33686){
var map__33770 = p__33686;
var map__33770__$1 = ((((!((map__33770 == null)))?((((map__33770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33770):map__33770);
var namespace = cljs.core.get.call(null,map__33770__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33656,inst_33688,inst_33652,inst_33654,inst_33648,inst_33651,inst_33684,state_val_33735,c__27741__auto__,map__33580,map__33580__$1,opts,before_jsload,on_jsload,reload_dependents,map__33581,map__33581__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33688__$1 = cljs.core.group_by.call(null,inst_33687,inst_33654);
var inst_33690 = (inst_33688__$1 == null);
var inst_33691 = cljs.core.not.call(null,inst_33690);
var state_33734__$1 = (function (){var statearr_33772 = state_33734;
(statearr_33772[(16)] = inst_33688__$1);

(statearr_33772[(28)] = inst_33684);

return statearr_33772;
})();
if(inst_33691){
var statearr_33773_33849 = state_33734__$1;
(statearr_33773_33849[(1)] = (32));

} else {
var statearr_33774_33850 = state_33734__$1;
(statearr_33774_33850[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (44))){
var inst_33710 = (state_33734[(21)]);
var inst_33723 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33710);
var inst_33724 = cljs.core.pr_str.call(null,inst_33723);
var inst_33725 = [cljs.core.str("not required: "),cljs.core.str(inst_33724)].join('');
var inst_33726 = figwheel.client.utils.log.call(null,inst_33725);
var state_33734__$1 = state_33734;
var statearr_33775_33851 = state_33734__$1;
(statearr_33775_33851[(2)] = inst_33726);

(statearr_33775_33851[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (6))){
var inst_33629 = (state_33734[(2)]);
var state_33734__$1 = state_33734;
var statearr_33776_33852 = state_33734__$1;
(statearr_33776_33852[(2)] = inst_33629);

(statearr_33776_33852[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (28))){
var inst_33654 = (state_33734[(26)]);
var inst_33681 = (state_33734[(2)]);
var inst_33682 = cljs.core.not_empty.call(null,inst_33654);
var state_33734__$1 = (function (){var statearr_33777 = state_33734;
(statearr_33777[(29)] = inst_33681);

return statearr_33777;
})();
if(cljs.core.truth_(inst_33682)){
var statearr_33778_33853 = state_33734__$1;
(statearr_33778_33853[(1)] = (29));

} else {
var statearr_33779_33854 = state_33734__$1;
(statearr_33779_33854[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (25))){
var inst_33652 = (state_33734[(24)]);
var inst_33668 = (state_33734[(2)]);
var inst_33669 = cljs.core.not_empty.call(null,inst_33652);
var state_33734__$1 = (function (){var statearr_33780 = state_33734;
(statearr_33780[(30)] = inst_33668);

return statearr_33780;
})();
if(cljs.core.truth_(inst_33669)){
var statearr_33781_33855 = state_33734__$1;
(statearr_33781_33855[(1)] = (26));

} else {
var statearr_33782_33856 = state_33734__$1;
(statearr_33782_33856[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (34))){
var inst_33703 = (state_33734[(2)]);
var state_33734__$1 = state_33734;
if(cljs.core.truth_(inst_33703)){
var statearr_33783_33857 = state_33734__$1;
(statearr_33783_33857[(1)] = (38));

} else {
var statearr_33784_33858 = state_33734__$1;
(statearr_33784_33858[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (17))){
var state_33734__$1 = state_33734;
var statearr_33785_33859 = state_33734__$1;
(statearr_33785_33859[(2)] = recompile_dependents);

(statearr_33785_33859[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (3))){
var state_33734__$1 = state_33734;
var statearr_33786_33860 = state_33734__$1;
(statearr_33786_33860[(2)] = null);

(statearr_33786_33860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (12))){
var inst_33625 = (state_33734[(2)]);
var state_33734__$1 = state_33734;
var statearr_33787_33861 = state_33734__$1;
(statearr_33787_33861[(2)] = inst_33625);

(statearr_33787_33861[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (2))){
var inst_33587 = (state_33734[(13)]);
var inst_33594 = cljs.core.seq.call(null,inst_33587);
var inst_33595 = inst_33594;
var inst_33596 = null;
var inst_33597 = (0);
var inst_33598 = (0);
var state_33734__$1 = (function (){var statearr_33788 = state_33734;
(statearr_33788[(7)] = inst_33596);

(statearr_33788[(8)] = inst_33595);

(statearr_33788[(9)] = inst_33598);

(statearr_33788[(10)] = inst_33597);

return statearr_33788;
})();
var statearr_33789_33862 = state_33734__$1;
(statearr_33789_33862[(2)] = null);

(statearr_33789_33862[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (23))){
var inst_33656 = (state_33734[(23)]);
var inst_33652 = (state_33734[(24)]);
var inst_33654 = (state_33734[(26)]);
var inst_33648 = (state_33734[(19)]);
var inst_33651 = (state_33734[(25)]);
var inst_33659 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33661 = (function (){var all_files = inst_33648;
var res_SINGLEQUOTE_ = inst_33651;
var res = inst_33652;
var files_not_loaded = inst_33654;
var dependencies_that_loaded = inst_33656;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33656,inst_33652,inst_33654,inst_33648,inst_33651,inst_33659,state_val_33735,c__27741__auto__,map__33580,map__33580__$1,opts,before_jsload,on_jsload,reload_dependents,map__33581,map__33581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33660){
var map__33790 = p__33660;
var map__33790__$1 = ((((!((map__33790 == null)))?((((map__33790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33790):map__33790);
var request_url = cljs.core.get.call(null,map__33790__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33656,inst_33652,inst_33654,inst_33648,inst_33651,inst_33659,state_val_33735,c__27741__auto__,map__33580,map__33580__$1,opts,before_jsload,on_jsload,reload_dependents,map__33581,map__33581__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33662 = cljs.core.reverse.call(null,inst_33656);
var inst_33663 = cljs.core.map.call(null,inst_33661,inst_33662);
var inst_33664 = cljs.core.pr_str.call(null,inst_33663);
var inst_33665 = figwheel.client.utils.log.call(null,inst_33664);
var state_33734__$1 = (function (){var statearr_33792 = state_33734;
(statearr_33792[(31)] = inst_33659);

return statearr_33792;
})();
var statearr_33793_33863 = state_33734__$1;
(statearr_33793_33863[(2)] = inst_33665);

(statearr_33793_33863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (35))){
var state_33734__$1 = state_33734;
var statearr_33794_33864 = state_33734__$1;
(statearr_33794_33864[(2)] = true);

(statearr_33794_33864[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (19))){
var inst_33638 = (state_33734[(12)]);
var inst_33644 = figwheel.client.file_reloading.expand_files.call(null,inst_33638);
var state_33734__$1 = state_33734;
var statearr_33795_33865 = state_33734__$1;
(statearr_33795_33865[(2)] = inst_33644);

(statearr_33795_33865[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (11))){
var state_33734__$1 = state_33734;
var statearr_33796_33866 = state_33734__$1;
(statearr_33796_33866[(2)] = null);

(statearr_33796_33866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (9))){
var inst_33627 = (state_33734[(2)]);
var state_33734__$1 = state_33734;
var statearr_33797_33867 = state_33734__$1;
(statearr_33797_33867[(2)] = inst_33627);

(statearr_33797_33867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (5))){
var inst_33598 = (state_33734[(9)]);
var inst_33597 = (state_33734[(10)]);
var inst_33600 = (inst_33598 < inst_33597);
var inst_33601 = inst_33600;
var state_33734__$1 = state_33734;
if(cljs.core.truth_(inst_33601)){
var statearr_33798_33868 = state_33734__$1;
(statearr_33798_33868[(1)] = (7));

} else {
var statearr_33799_33869 = state_33734__$1;
(statearr_33799_33869[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (14))){
var inst_33608 = (state_33734[(22)]);
var inst_33617 = cljs.core.first.call(null,inst_33608);
var inst_33618 = figwheel.client.file_reloading.eval_body.call(null,inst_33617,opts);
var inst_33619 = cljs.core.next.call(null,inst_33608);
var inst_33595 = inst_33619;
var inst_33596 = null;
var inst_33597 = (0);
var inst_33598 = (0);
var state_33734__$1 = (function (){var statearr_33800 = state_33734;
(statearr_33800[(7)] = inst_33596);

(statearr_33800[(8)] = inst_33595);

(statearr_33800[(32)] = inst_33618);

(statearr_33800[(9)] = inst_33598);

(statearr_33800[(10)] = inst_33597);

return statearr_33800;
})();
var statearr_33801_33870 = state_33734__$1;
(statearr_33801_33870[(2)] = null);

(statearr_33801_33870[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (45))){
var state_33734__$1 = state_33734;
var statearr_33802_33871 = state_33734__$1;
(statearr_33802_33871[(2)] = null);

(statearr_33802_33871[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (26))){
var inst_33656 = (state_33734[(23)]);
var inst_33652 = (state_33734[(24)]);
var inst_33654 = (state_33734[(26)]);
var inst_33648 = (state_33734[(19)]);
var inst_33651 = (state_33734[(25)]);
var inst_33671 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33673 = (function (){var all_files = inst_33648;
var res_SINGLEQUOTE_ = inst_33651;
var res = inst_33652;
var files_not_loaded = inst_33654;
var dependencies_that_loaded = inst_33656;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33656,inst_33652,inst_33654,inst_33648,inst_33651,inst_33671,state_val_33735,c__27741__auto__,map__33580,map__33580__$1,opts,before_jsload,on_jsload,reload_dependents,map__33581,map__33581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33672){
var map__33803 = p__33672;
var map__33803__$1 = ((((!((map__33803 == null)))?((((map__33803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33803):map__33803);
var namespace = cljs.core.get.call(null,map__33803__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33803__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33656,inst_33652,inst_33654,inst_33648,inst_33651,inst_33671,state_val_33735,c__27741__auto__,map__33580,map__33580__$1,opts,before_jsload,on_jsload,reload_dependents,map__33581,map__33581__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33674 = cljs.core.map.call(null,inst_33673,inst_33652);
var inst_33675 = cljs.core.pr_str.call(null,inst_33674);
var inst_33676 = figwheel.client.utils.log.call(null,inst_33675);
var inst_33677 = (function (){var all_files = inst_33648;
var res_SINGLEQUOTE_ = inst_33651;
var res = inst_33652;
var files_not_loaded = inst_33654;
var dependencies_that_loaded = inst_33656;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33656,inst_33652,inst_33654,inst_33648,inst_33651,inst_33671,inst_33673,inst_33674,inst_33675,inst_33676,state_val_33735,c__27741__auto__,map__33580,map__33580__$1,opts,before_jsload,on_jsload,reload_dependents,map__33581,map__33581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33656,inst_33652,inst_33654,inst_33648,inst_33651,inst_33671,inst_33673,inst_33674,inst_33675,inst_33676,state_val_33735,c__27741__auto__,map__33580,map__33580__$1,opts,before_jsload,on_jsload,reload_dependents,map__33581,map__33581__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33678 = setTimeout(inst_33677,(10));
var state_33734__$1 = (function (){var statearr_33805 = state_33734;
(statearr_33805[(33)] = inst_33676);

(statearr_33805[(34)] = inst_33671);

return statearr_33805;
})();
var statearr_33806_33872 = state_33734__$1;
(statearr_33806_33872[(2)] = inst_33678);

(statearr_33806_33872[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (16))){
var state_33734__$1 = state_33734;
var statearr_33807_33873 = state_33734__$1;
(statearr_33807_33873[(2)] = reload_dependents);

(statearr_33807_33873[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (38))){
var inst_33688 = (state_33734[(16)]);
var inst_33705 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33688);
var state_33734__$1 = state_33734;
var statearr_33808_33874 = state_33734__$1;
(statearr_33808_33874[(2)] = inst_33705);

(statearr_33808_33874[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (30))){
var state_33734__$1 = state_33734;
var statearr_33809_33875 = state_33734__$1;
(statearr_33809_33875[(2)] = null);

(statearr_33809_33875[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (10))){
var inst_33608 = (state_33734[(22)]);
var inst_33610 = cljs.core.chunked_seq_QMARK_.call(null,inst_33608);
var state_33734__$1 = state_33734;
if(inst_33610){
var statearr_33810_33876 = state_33734__$1;
(statearr_33810_33876[(1)] = (13));

} else {
var statearr_33811_33877 = state_33734__$1;
(statearr_33811_33877[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (18))){
var inst_33642 = (state_33734[(2)]);
var state_33734__$1 = state_33734;
if(cljs.core.truth_(inst_33642)){
var statearr_33812_33878 = state_33734__$1;
(statearr_33812_33878[(1)] = (19));

} else {
var statearr_33813_33879 = state_33734__$1;
(statearr_33813_33879[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (42))){
var state_33734__$1 = state_33734;
var statearr_33814_33880 = state_33734__$1;
(statearr_33814_33880[(2)] = null);

(statearr_33814_33880[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (37))){
var inst_33700 = (state_33734[(2)]);
var state_33734__$1 = state_33734;
var statearr_33815_33881 = state_33734__$1;
(statearr_33815_33881[(2)] = inst_33700);

(statearr_33815_33881[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (8))){
var inst_33595 = (state_33734[(8)]);
var inst_33608 = (state_33734[(22)]);
var inst_33608__$1 = cljs.core.seq.call(null,inst_33595);
var state_33734__$1 = (function (){var statearr_33816 = state_33734;
(statearr_33816[(22)] = inst_33608__$1);

return statearr_33816;
})();
if(inst_33608__$1){
var statearr_33817_33882 = state_33734__$1;
(statearr_33817_33882[(1)] = (10));

} else {
var statearr_33818_33883 = state_33734__$1;
(statearr_33818_33883[(1)] = (11));

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
}
});})(c__27741__auto__,map__33580,map__33580__$1,opts,before_jsload,on_jsload,reload_dependents,map__33581,map__33581__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27629__auto__,c__27741__auto__,map__33580,map__33580__$1,opts,before_jsload,on_jsload,reload_dependents,map__33581,map__33581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27630__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27630__auto____0 = (function (){
var statearr_33822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33822[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27630__auto__);

(statearr_33822[(1)] = (1));

return statearr_33822;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27630__auto____1 = (function (state_33734){
while(true){
var ret_value__27631__auto__ = (function (){try{while(true){
var result__27632__auto__ = switch__27629__auto__.call(null,state_33734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27632__auto__;
}
break;
}
}catch (e33823){if((e33823 instanceof Object)){
var ex__27633__auto__ = e33823;
var statearr_33824_33884 = state_33734;
(statearr_33824_33884[(5)] = ex__27633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33885 = state_33734;
state_33734 = G__33885;
continue;
} else {
return ret_value__27631__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27630__auto__ = function(state_33734){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27630__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27630__auto____1.call(this,state_33734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27630__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27630__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27630__auto__;
})()
;})(switch__27629__auto__,c__27741__auto__,map__33580,map__33580__$1,opts,before_jsload,on_jsload,reload_dependents,map__33581,map__33581__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27743__auto__ = (function (){var statearr_33825 = f__27742__auto__.call(null);
(statearr_33825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27741__auto__);

return statearr_33825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27743__auto__);
});})(c__27741__auto__,map__33580,map__33580__$1,opts,before_jsload,on_jsload,reload_dependents,map__33581,map__33581__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27741__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33888,link){
var map__33891 = p__33888;
var map__33891__$1 = ((((!((map__33891 == null)))?((((map__33891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33891):map__33891);
var file = cljs.core.get.call(null,map__33891__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__33891,map__33891__$1,file){
return (function (p1__33886_SHARP_,p2__33887_SHARP_){
if(cljs.core._EQ_.call(null,p1__33886_SHARP_,p2__33887_SHARP_)){
return p1__33886_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__33891,map__33891__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33897){
var map__33898 = p__33897;
var map__33898__$1 = ((((!((map__33898 == null)))?((((map__33898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33898):map__33898);
var match_length = cljs.core.get.call(null,map__33898__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33898__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33893_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33893_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args33900 = [];
var len__26176__auto___33903 = arguments.length;
var i__26177__auto___33904 = (0);
while(true){
if((i__26177__auto___33904 < len__26176__auto___33903)){
args33900.push((arguments[i__26177__auto___33904]));

var G__33905 = (i__26177__auto___33904 + (1));
i__26177__auto___33904 = G__33905;
continue;
} else {
}
break;
}

var G__33902 = args33900.length;
switch (G__33902) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33900.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33907_SHARP_,p2__33908_SHARP_){
return cljs.core.assoc.call(null,p1__33907_SHARP_,cljs.core.get.call(null,p2__33908_SHARP_,key),p2__33908_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__33909){
var map__33912 = p__33909;
var map__33912__$1 = ((((!((map__33912 == null)))?((((map__33912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33912):map__33912);
var f_data = map__33912__$1;
var file = cljs.core.get.call(null,map__33912__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33914,p__33915){
var map__33924 = p__33914;
var map__33924__$1 = ((((!((map__33924 == null)))?((((map__33924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33924):map__33924);
var opts = map__33924__$1;
var on_cssload = cljs.core.get.call(null,map__33924__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__33925 = p__33915;
var map__33925__$1 = ((((!((map__33925 == null)))?((((map__33925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33925):map__33925);
var files_msg = map__33925__$1;
var files = cljs.core.get.call(null,map__33925__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__33928_33932 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__33929_33933 = null;
var count__33930_33934 = (0);
var i__33931_33935 = (0);
while(true){
if((i__33931_33935 < count__33930_33934)){
var f_33936 = cljs.core._nth.call(null,chunk__33929_33933,i__33931_33935);
figwheel.client.file_reloading.reload_css_file.call(null,f_33936);

var G__33937 = seq__33928_33932;
var G__33938 = chunk__33929_33933;
var G__33939 = count__33930_33934;
var G__33940 = (i__33931_33935 + (1));
seq__33928_33932 = G__33937;
chunk__33929_33933 = G__33938;
count__33930_33934 = G__33939;
i__33931_33935 = G__33940;
continue;
} else {
var temp__4657__auto___33941 = cljs.core.seq.call(null,seq__33928_33932);
if(temp__4657__auto___33941){
var seq__33928_33942__$1 = temp__4657__auto___33941;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33928_33942__$1)){
var c__25912__auto___33943 = cljs.core.chunk_first.call(null,seq__33928_33942__$1);
var G__33944 = cljs.core.chunk_rest.call(null,seq__33928_33942__$1);
var G__33945 = c__25912__auto___33943;
var G__33946 = cljs.core.count.call(null,c__25912__auto___33943);
var G__33947 = (0);
seq__33928_33932 = G__33944;
chunk__33929_33933 = G__33945;
count__33930_33934 = G__33946;
i__33931_33935 = G__33947;
continue;
} else {
var f_33948 = cljs.core.first.call(null,seq__33928_33942__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_33948);

var G__33949 = cljs.core.next.call(null,seq__33928_33942__$1);
var G__33950 = null;
var G__33951 = (0);
var G__33952 = (0);
seq__33928_33932 = G__33949;
chunk__33929_33933 = G__33950;
count__33930_33934 = G__33951;
i__33931_33935 = G__33952;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__33924,map__33924__$1,opts,on_cssload,map__33925,map__33925__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__33924,map__33924__$1,opts,on_cssload,map__33925,map__33925__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1487859341597