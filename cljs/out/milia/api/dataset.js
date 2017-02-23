// Compiled by ClojureScript 1.9.229 {}
goog.provide('milia.api.dataset');
goog.require('cljs.core');
goog.require('chimera.seq');
goog.require('clojure.string');
goog.require('milia.api.http');
goog.require('milia.utils.metadata');
goog.require('milia.utils.remote');
/**
 * Return all the datasets for an account.
 */
milia.api.dataset.all = (function milia$api$dataset$all(username){
var url = milia.utils.remote.make_url.call(null,[cljs.core.str("forms?owner="),cljs.core.str(username)].join(''));
return milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"get","get",1683182755),url);
});
/**
 * Return all public datasets for a specific user.
 */
milia.api.dataset.public$ = (function milia$api$dataset$public(username){
var url = milia.utils.remote.make_url.call(null,"forms",username);
return milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"get","get",1683182755),url);
});
/**
 * Clone the dataset given by ID into the account with the given username.
 */
milia.api.dataset.clone = (function milia$api$dataset$clone(var_args){
var args__26183__auto__ = [];
var len__26176__auto___32103 = arguments.length;
var i__26177__auto___32104 = (0);
while(true){
if((i__26177__auto___32104 < len__26176__auto___32103)){
args__26183__auto__.push((arguments[i__26177__auto___32104]));

var G__32105 = (i__26177__auto___32104 + (1));
i__26177__auto___32104 = G__32105;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((2) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((2)),(0),null)):null);
return milia.api.dataset.clone.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26184__auto__);
});

milia.api.dataset.clone.cljs$core$IFn$_invoke$arity$variadic = (function (dataset_id,username,p__32100){
var map__32101 = p__32100;
var map__32101__$1 = ((((!((map__32101 == null)))?((((map__32101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32101):map__32101);
var project_id = cljs.core.get.call(null,map__32101__$1,new cljs.core.Keyword(null,"project-id","project-id",206449307));
var url = milia.utils.remote.make_url.call(null,"forms",dataset_id,"clone");
var data_base = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-params","form-params",1884296467),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"username","username",1605666410),username], null)], null);
var data = (cljs.core.truth_(project_id)?cljs.core.assoc_in.call(null,data_base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-params","form-params",1884296467),new cljs.core.Keyword(null,"project_id","project_id",1147160698)], null),project_id):data_base);
return milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"post","post",269697687),url,new cljs.core.Keyword(null,"http-options","http-options",1919701946),data,new cljs.core.Keyword(null,"suppress-4xx-exceptions?","suppress-4xx-exceptions?",1524854880),true);
});

milia.api.dataset.clone.cljs$lang$maxFixedArity = (2);

milia.api.dataset.clone.cljs$lang$applyTo = (function (seq32097){
var G__32098 = cljs.core.first.call(null,seq32097);
var seq32097__$1 = cljs.core.next.call(null,seq32097);
var G__32099 = cljs.core.first.call(null,seq32097__$1);
var seq32097__$2 = cljs.core.next.call(null,seq32097__$1);
return milia.api.dataset.clone.cljs$core$IFn$_invoke$arity$variadic(G__32098,G__32099,seq32097__$2);
});

/**
 * Set the metadata for a dataset using PUT. All parameters must be passed.
 */
milia.api.dataset.update = (function milia$api$dataset$update(dataset_id,params){
if(cljs.core.truth_(chimera.seq.has_keys_QMARK_.call(null,params,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"created_by","created_by",562491388),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"downloadable","downloadable",933081130),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"public","public",1566243851),new cljs.core.Keyword(null,"public_data","public_data",2053501804),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)], null)))){
} else {
throw (new Error("Assert failed: (has-keys? params [:created_by :description :downloadable :owner :project :public :public_data :title :uuid])"));
}

var url = milia.utils.remote.make_url.call(null,"forms",dataset_id);
return milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"put","put",1299772570),url,new cljs.core.Keyword(null,"http-options","http-options",1919701946),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-params","form-params",1884296467),params], null));
});
/**
 * Update the title of a form
 */
milia.api.dataset.update_form_name = (function milia$api$dataset$update_form_name(dataset_id,params){
var url = milia.utils.remote.make_url.call(null,"forms",dataset_id);
return milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"put","put",1299772570),url,new cljs.core.Keyword(null,"http-options","http-options",1919701946),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-params","form-params",1884296467),params], null));
});
/**
 * Return the data associated with a dataset.
 */
milia.api.dataset.data = (function milia$api$dataset$data(var_args){
var args__26183__auto__ = [];
var len__26176__auto___32111 = arguments.length;
var i__26177__auto___32112 = (0);
while(true){
if((i__26177__auto___32112 < len__26176__auto___32111)){
args__26183__auto__.push((arguments[i__26177__auto___32112]));

var G__32113 = (i__26177__auto___32112 + (1));
i__26177__auto___32112 = G__32113;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return milia.api.dataset.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});
goog.exportSymbol('milia.api.dataset.data', milia.api.dataset.data);

milia.api.dataset.data.cljs$core$IFn$_invoke$arity$variadic = (function (dataset_id,p__32108){
var map__32109 = p__32108;
var map__32109__$1 = ((((!((map__32109 == null)))?((((map__32109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32109):map__32109);
var format = cljs.core.get.call(null,map__32109__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var raw_QMARK_ = cljs.core.get.call(null,map__32109__$1,new cljs.core.Keyword(null,"raw?","raw?",394379982));
var must_revalidate_QMARK_ = cljs.core.get.call(null,map__32109__$1,new cljs.core.Keyword(null,"must-revalidate?","must-revalidate?",615367201));
var accept_header = cljs.core.get.call(null,map__32109__$1,new cljs.core.Keyword(null,"accept-header","accept-header",2006207866));
var query_params = cljs.core.get.call(null,map__32109__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var data_id = cljs.core.get.call(null,map__32109__$1,new cljs.core.Keyword(null,"data-id","data-id",1023855591));
var dataset_suffix = (cljs.core.truth_(format)?[cljs.core.str(dataset_id),cljs.core.str((cljs.core.truth_(data_id)?[cljs.core.str("/"),cljs.core.str(data_id)].join(''):null)),cljs.core.str("."),cljs.core.str(format)].join(''):dataset_id);
var url = milia.utils.remote.make_url.call(null,"data",dataset_suffix);
var options = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),query_params], null);
return milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"get","get",1683182755),url,new cljs.core.Keyword(null,"http-options","http-options",1919701946),options,new cljs.core.Keyword(null,"raw-response?","raw-response?",557978228),raw_QMARK_,new cljs.core.Keyword(null,"must-revalidate?","must-revalidate?",615367201),must_revalidate_QMARK_,new cljs.core.Keyword(null,"accept-header","accept-header",2006207866),accept_header);
});

milia.api.dataset.data.cljs$lang$maxFixedArity = (1);

milia.api.dataset.data.cljs$lang$applyTo = (function (seq32106){
var G__32107 = cljs.core.first.call(null,seq32106);
var seq32106__$1 = cljs.core.next.call(null,seq32106);
return milia.api.dataset.data.cljs$core$IFn$_invoke$arity$variadic(G__32107,seq32106__$1);
});

/**
 * Retrieve a record from the dataset.
 */
milia.api.dataset.record = (function milia$api$dataset$record(dataset_id,record_id){
var url = milia.utils.remote.make_url.call(null,"data",dataset_id,record_id);
return milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"get","get",1683182755),url);
});
/**
 * Returns tags for a dataset
 */
milia.api.dataset.tags = (function milia$api$dataset$tags(dataset_id){
var url = milia.utils.remote.make_url.call(null,"forms",dataset_id,"labels");
return milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"get","get",1683182755),url);
});
/**
 * Add tags to a dataset
 */
milia.api.dataset.add_tags = (function milia$api$dataset$add_tags(dataset_id,tags){
var url = milia.utils.remote.make_url.call(null,"forms",dataset_id,"labels");
return milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"post","post",269697687),url,new cljs.core.Keyword(null,"http-options","http-options",1919701946),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-params","form-params",1884296467),tags], null));
});
/**
 * Return filename taking format special cases into account.
 */
milia.api.dataset.filename_for_format = (function milia$api$dataset$filename_for_format(dataset_id,format){
return [cljs.core.str(dataset_id),cljs.core.str("."),cljs.core.str(((cljs.core._EQ_.call(null,format,"csvzip"))?"zip":format))].join('');
});
/**
 * Return options needed to handle format.
 */
milia.api.dataset.options_for_format = (function milia$api$dataset$options_for_format(format){
if(cljs.core.truth_(chimera.seq.in_QMARK_.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["csvzip","sav","xls","xlsx","zip"], null),format))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"byte-array","byte-array",369158537)], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * Download form data in specified format. The synchronicity here refers to the
 * server side. This will still return a channel, not data, in CLJS.
 * The options map (last parameter) has the following keys:
 * :accept-header Defaults to application/json
 * :submission-id The id of the submission whose data the client requires. The
 *  function returns data for all submissions if this is not provided.
 * :dataview? Boolean flag indicating whether the data belongs to a filtered
 *  dataview
 */
milia.api.dataset.download_synchronously = (function milia$api$dataset$download_synchronously(var_args){
var args__26183__auto__ = [];
var len__26176__auto___32120 = arguments.length;
var i__26177__auto___32121 = (0);
while(true){
if((i__26177__auto___32121 < len__26176__auto___32120)){
args__26183__auto__.push((arguments[i__26177__auto___32121]));

var G__32122 = (i__26177__auto___32121 + (1));
i__26177__auto___32121 = G__32122;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((2) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((2)),(0),null)):null);
return milia.api.dataset.download_synchronously.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26184__auto__);
});

milia.api.dataset.download_synchronously.cljs$core$IFn$_invoke$arity$variadic = (function (dataset_id,format,p__32117){
var map__32118 = p__32117;
var map__32118__$1 = ((((!((map__32118 == null)))?((((map__32118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32118):map__32118);
var accept_header = cljs.core.get.call(null,map__32118__$1,new cljs.core.Keyword(null,"accept-header","accept-header",2006207866));
var submission_id = cljs.core.get.call(null,map__32118__$1,new cljs.core.Keyword(null,"submission-id","submission-id",-1311702310));
var dataview_QMARK_ = cljs.core.get.call(null,map__32118__$1,new cljs.core.Keyword(null,"dataview?","dataview?",1214137306));
var url = (cljs.core.truth_(dataview_QMARK_)?milia.utils.remote.make_url.call(null,"dataviews",dataset_id,[cljs.core.str("data."),cljs.core.str(format)].join('')):(cljs.core.truth_(submission_id)?milia.utils.remote.make_url.call(null,"data",dataset_id,[cljs.core.str(submission_id),cljs.core.str("."),cljs.core.str(format)].join('')):milia.utils.remote.make_url.call(null,"data",[cljs.core.str(dataset_id),cljs.core.str("."),cljs.core.str(format)].join(''))
));
return milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"get","get",1683182755),url,new cljs.core.Keyword(null,"accept-header","accept-header",2006207866),accept_header,new cljs.core.Keyword(null,"http-options","http-options",1919701946),milia.api.dataset.options_for_format.call(null,format));
});

milia.api.dataset.download_synchronously.cljs$lang$maxFixedArity = (2);

milia.api.dataset.download_synchronously.cljs$lang$applyTo = (function (seq32114){
var G__32115 = cljs.core.first.call(null,seq32114);
var seq32114__$1 = cljs.core.next.call(null,seq32114);
var G__32116 = cljs.core.first.call(null,seq32114__$1);
var seq32114__$2 = cljs.core.next.call(null,seq32114__$1);
return milia.api.dataset.download_synchronously.cljs$core$IFn$_invoke$arity$variadic(G__32115,G__32116,seq32114__$2);
});

/**
 * Download form as JSON string or file in specified format if format passed.
 */
milia.api.dataset.form = (function milia$api$dataset$form(var_args){
var args32123 = [];
var len__26176__auto___32126 = arguments.length;
var i__26177__auto___32127 = (0);
while(true){
if((i__26177__auto___32127 < len__26176__auto___32126)){
args32123.push((arguments[i__26177__auto___32127]));

var G__32128 = (i__26177__auto___32127 + (1));
i__26177__auto___32127 = G__32128;
continue;
} else {
}
break;
}

var G__32125 = args32123.length;
switch (G__32125) {
case 1:
return milia.api.dataset.form.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return milia.api.dataset.form.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32123.length)].join('')));

}
});

milia.api.dataset.form.cljs$core$IFn$_invoke$arity$1 = (function (dataset_id){
var url = milia.utils.remote.make_url.call(null,"forms",dataset_id,"form.json");
return milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"get","get",1683182755),url);
});

milia.api.dataset.form.cljs$core$IFn$_invoke$arity$2 = (function (dataset_id,format){
var suffix = [cljs.core.str("form."),cljs.core.str(format)].join('');
var options = milia.api.dataset.options_for_format.call(null,format);
var url = milia.utils.remote.make_url.call(null,"forms",dataset_id,suffix);
var filename = [cljs.core.str(dataset_id),cljs.core.str("_"),cljs.core.str(suffix)].join('');
return milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"get","get",1683182755),url,new cljs.core.Keyword(null,"http-options","http-options",1919701946),options,new cljs.core.Keyword(null,"filename","filename",-1428840783),filename);
});

milia.api.dataset.form.cljs$lang$maxFixedArity = 2;

/**
 * Show dataset metadata.
 */
milia.api.dataset.metadata = (function milia$api$dataset$metadata(var_args){
var args__26183__auto__ = [];
var len__26176__auto___32135 = arguments.length;
var i__26177__auto___32136 = (0);
while(true){
if((i__26177__auto___32136 < len__26176__auto___32135)){
args__26183__auto__.push((arguments[i__26177__auto___32136]));

var G__32137 = (i__26177__auto___32136 + (1));
i__26177__auto___32136 = G__32137;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((1) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((1)),(0),null)):null);
return milia.api.dataset.metadata.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26184__auto__);
});

milia.api.dataset.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (dataset_id,p__32132){
var map__32133 = p__32132;
var map__32133__$1 = ((((!((map__32133 == null)))?((((map__32133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32133):map__32133);
var no_cache_QMARK_ = cljs.core.get.call(null,map__32133__$1,new cljs.core.Keyword(null,"no-cache?","no-cache?",-1868220981));
var url = milia.utils.remote.make_url.call(null,"forms",[cljs.core.str(dataset_id),cljs.core.str(".json")].join(''));
return milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"get","get",1683182755),url,new cljs.core.Keyword(null,"no-cache?","no-cache?",-1868220981),no_cache_QMARK_);
});

milia.api.dataset.metadata.cljs$lang$maxFixedArity = (1);

milia.api.dataset.metadata.cljs$lang$applyTo = (function (seq32130){
var G__32131 = cljs.core.first.call(null,seq32130);
var seq32130__$1 = cljs.core.next.call(null,seq32130);
return milia.api.dataset.metadata.cljs$core$IFn$_invoke$arity$variadic(G__32131,seq32130__$1);
});

/**
 * Return link to online data entry.
 */
milia.api.dataset.online_data_entry_link = (function milia$api$dataset$online_data_entry_link(dataset_id){
var url = milia.utils.remote.make_url.call(null,"forms",dataset_id,"enketo");
return milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"get","get",1683182755),url);
});
/**
 * Return link to online data entry.
 */
milia.api.dataset.edit_link = (function milia$api$dataset$edit_link(username,project_id,dataset_id,instance_id){
var return_url = milia.utils.remote.make_client_url.call(null,username,project_id,dataset_id,"submission-editing-complete");
var url = milia.utils.remote.make_url.call(null,"data",dataset_id,instance_id,[cljs.core.str("enketo?return_url="),cljs.core.str(return_url)].join(''));
return new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"get","get",1683182755),url));
});
/**
 * Delete a dataset by ID.
 */
milia.api.dataset.delete$ = (function milia$api$dataset$delete(dataset_id){
var url = milia.utils.remote.make_url.call(null,"forms",dataset_id,"delete_async");
return milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),url);
});
/**
 * Move a dataset to a project use account if no owner passed.
 */
milia.api.dataset.move_to_project = (function milia$api$dataset$move_to_project(dataset_id,project_id){
var url = milia.utils.remote.make_url.call(null,"projects",project_id,"forms");
return milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"post","post",269697687),url,new cljs.core.Keyword(null,"http-options","http-options",1919701946),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-params","form-params",1884296467),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formid","formid",-2121398991),dataset_id], null)], null));
});
/**
 * Set a new form owner
 */
milia.api.dataset.new_form_owner = (function milia$api$dataset$new_form_owner(dataset_id,new_owner){
var url = milia.utils.remote.make_url.call(null,"forms",dataset_id);
var new_owner__$1 = milia.utils.remote.make_url.call(null,"users",new_owner);
return milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"patch","patch",380775109),url,new cljs.core.Keyword(null,"http-options","http-options",1919701946),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-params","form-params",1884296467),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"owner","owner",-392611939),new_owner__$1], null)], null));
});
/**
 * Share dataset with specific user
 */
milia.api.dataset.update_sharing = (function milia$api$dataset$update_sharing(dataset_id,username,role){
var url = milia.utils.remote.make_url.call(null,"forms",dataset_id,"share");
var data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"role","role",-736691072),role], null);
return milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"post","post",269697687),url,new cljs.core.Keyword(null,"http-options","http-options",1919701946),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-params","form-params",1884296467),data], null));
});
/**
 * Link xform or dataview as media
 */
milia.api.dataset.link_xform_or_dataview_as_media = (function milia$api$dataset$link_xform_or_dataview_as_media(object_type,object_id,media_filename,xform_id){
var url = milia.utils.remote.make_url.call(null,"metadata");
var form_params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data_type","data_type",1391137078),"media",new cljs.core.Keyword(null,"data_value","data_value",-683590351),[cljs.core.str(clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_type,object_id,media_filename], null)))].join(''),new cljs.core.Keyword(null,"xform","xform",-1725711008),xform_id], null);
return milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"post","post",269697687),url,new cljs.core.Keyword(null,"http-options","http-options",1919701946),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-params","form-params",1884296467),form_params], null),new cljs.core.Keyword(null,"suppress-4xx-exceptions?","suppress-4xx-exceptions?",1524854880),true);
});
/**
 * Add xls report link to dataset
 */
milia.api.dataset.add_xls_report = (function milia$api$dataset$add_xls_report(dataset_id,uuid,filename){
var xls_url = milia.utils.remote.make_j2x_url.call(null,"xls",uuid);
var url = milia.utils.remote.make_url.call(null,"metadata");
var data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xform","xform",-1725711008),dataset_id,new cljs.core.Keyword(null,"data_type","data_type",1391137078),"external_export",new cljs.core.Keyword(null,"data_value","data_value",-683590351),[cljs.core.str(filename),cljs.core.str("|"),cljs.core.str(xls_url)].join('')], null);
return milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"post","post",269697687),url,new cljs.core.Keyword(null,"http-options","http-options",1919701946),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-params","form-params",1884296467),data], null));
});
/**
 * Download xls report from the j2x service
 */
milia.api.dataset.download_xls_report = (function milia$api$dataset$download_xls_report(var_args){
var args32138 = [];
var len__26176__auto___32141 = arguments.length;
var i__26177__auto___32142 = (0);
while(true){
if((i__26177__auto___32142 < len__26176__auto___32141)){
args32138.push((arguments[i__26177__auto___32142]));

var G__32143 = (i__26177__auto___32142 + (1));
i__26177__auto___32142 = G__32143;
continue;
} else {
}
break;
}

var G__32140 = args32138.length;
switch (G__32140) {
case 3:
return milia.api.dataset.download_xls_report.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return milia.api.dataset.download_xls_report.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32138.length)].join('')));

}
});

milia.api.dataset.download_xls_report.cljs$core$IFn$_invoke$arity$3 = (function (dataset_id,meta_id,filename){
return milia.api.dataset.download_xls_report.call(null,dataset_id,meta_id,filename,null);
});

milia.api.dataset.download_xls_report.cljs$core$IFn$_invoke$arity$4 = (function (dataset_id,meta_id,filename,data_id){
var suffix = (cljs.core.truth_(data_id)?[cljs.core.str(dataset_id),cljs.core.str(".xls?meta="),cljs.core.str(meta_id),cljs.core.str("&data_id="),cljs.core.str(data_id)].join(''):[cljs.core.str(dataset_id),cljs.core.str(".xls?meta="),cljs.core.str(meta_id)].join(''));
var url = milia.utils.remote.make_url.call(null,"forms",suffix);
return milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"get","get",1683182755),url,new cljs.core.Keyword(null,"http-options","http-options",1919701946),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"byte-array","byte-array",369158537)], null),new cljs.core.Keyword(null,"as-map?","as-map?",1213586270),true,new cljs.core.Keyword(null,"filename","filename",-1428840783),filename);
});

milia.api.dataset.download_xls_report.cljs$lang$maxFixedArity = 4;

/**
 * Returns a submission's edit history
 */
milia.api.dataset.edit_history = (function milia$api$dataset$edit_history(dataset_id,instance_id){
return milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"get","get",1683182755),milia.utils.remote.make_url.call(null,"data",dataset_id,instance_id,"history"));
});
milia.api.dataset.files = (function milia$api$dataset$files(var_args){
var args__26183__auto__ = [];
var len__26176__auto___32151 = arguments.length;
var i__26177__auto___32152 = (0);
while(true){
if((i__26177__auto___32152 < len__26176__auto___32151)){
args__26183__auto__.push((arguments[i__26177__auto___32152]));

var G__32153 = (i__26177__auto___32152 + (1));
i__26177__auto___32152 = G__32153;
continue;
} else {
}
break;
}

var argseq__26184__auto__ = ((((2) < args__26183__auto__.length))?(new cljs.core.IndexedSeq(args__26183__auto__.slice((2)),(0),null)):null);
return milia.api.dataset.files.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26184__auto__);
});

milia.api.dataset.files.cljs$core$IFn$_invoke$arity$variadic = (function (instance_id,project_id,p__32148){
var map__32149 = p__32148;
var map__32149__$1 = ((((!((map__32149 == null)))?((((map__32149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32149):map__32149);
var no_cache_QMARK_ = cljs.core.get.call(null,map__32149__$1,new cljs.core.Keyword(null,"no-cache?","no-cache?",-1868220981));
var dataset_id = cljs.core.get.call(null,map__32149__$1,new cljs.core.Keyword(null,"dataset-id","dataset-id",1732799562));
var extra_params = cljs.core.apply.call(null,cljs.core.assoc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),project_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xform","xform",-1725711008),dataset_id], null));
return milia.utils.metadata.metadata_files.call(null,new cljs.core.Keyword(null,"instance","instance",-2121349050),instance_id,no_cache_QMARK_,new cljs.core.Keyword(null,"extra-params","extra-params",513291077),extra_params);
});

milia.api.dataset.files.cljs$lang$maxFixedArity = (2);

milia.api.dataset.files.cljs$lang$applyTo = (function (seq32145){
var G__32146 = cljs.core.first.call(null,seq32145);
var seq32145__$1 = cljs.core.next.call(null,seq32145);
var G__32147 = cljs.core.first.call(null,seq32145__$1);
var seq32145__$2 = cljs.core.next.call(null,seq32145__$1);
return milia.api.dataset.files.cljs$core$IFn$_invoke$arity$variadic(G__32146,G__32147,seq32145__$2);
});

/**
 * Integer Integer String String -> Channel HttpResponse
 */
milia.api.dataset.update_xform_meta_permissions = (function milia$api$dataset$update_xform_meta_permissions(dataset_id,metadata_id,editor_meta_role,dataentry_meta_role){
return milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"put","put",1299772570),milia.utils.remote.make_url.call(null,"metadata",metadata_id),new cljs.core.Keyword(null,"http-options","http-options",1919701946),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-params","form-params",1884296467),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data_type","data_type",1391137078),"xform_meta_perms",new cljs.core.Keyword(null,"xform","xform",-1725711008),dataset_id,new cljs.core.Keyword(null,"data_value","data_value",-683590351),[cljs.core.str(editor_meta_role),cljs.core.str("|"),cljs.core.str(dataentry_meta_role)].join('')], null)], null));
});
/**
 * Integer String String -> Channel HttpResponse
 */
milia.api.dataset.create_xform_meta_permissions = (function milia$api$dataset$create_xform_meta_permissions(dataset_id,editor_meta_role,dataentry_meta_role){
return milia.api.http.parse_http.call(null,new cljs.core.Keyword(null,"post","post",269697687),milia.utils.remote.make_url.call(null,"metadata"),new cljs.core.Keyword(null,"http-options","http-options",1919701946),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-params","form-params",1884296467),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data_type","data_type",1391137078),"xform_meta_perms",new cljs.core.Keyword(null,"xform","xform",-1725711008),dataset_id,new cljs.core.Keyword(null,"data_value","data_value",-683590351),[cljs.core.str(editor_meta_role),cljs.core.str("|"),cljs.core.str(dataentry_meta_role)].join('')], null)], null));
});

//# sourceMappingURL=dataset.js.map?rel=1487859338663