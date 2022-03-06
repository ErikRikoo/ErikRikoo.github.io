(function ($hx_exports, $global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) {
		return undefined;
	}
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(len == null) {
		len = s.length;
	} else if(len < 0) {
		if(pos == 0) {
			len = s.length + len;
		} else {
			return "";
		}
	}
	return s.substr(pos,len);
};
HxOverrides.now = function() {
	return Date.now();
};
Math.__name__ = true;
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( _g ) {
		return null;
	}
};
Reflect.getProperty = function(o,field) {
	var tmp;
	if(o == null) {
		return null;
	} else {
		var tmp1;
		if(o.__properties__) {
			tmp = o.__properties__["get_" + field];
			tmp1 = tmp;
		} else {
			tmp1 = false;
		}
		if(tmp1) {
			return o[tmp]();
		} else {
			return o[field];
		}
	}
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) {
			a.push(f);
		}
		}
	}
	return a;
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var StringTools = function() { };
StringTools.__name__ = true;
StringTools.startsWith = function(s,start) {
	if(s.length >= start.length) {
		return s.lastIndexOf(start,0) == 0;
	} else {
		return false;
	}
};
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	if(!(c > 8 && c < 14)) {
		return c == 32;
	} else {
		return true;
	}
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,r,l - r);
	} else {
		return s;
	}
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,0,l - r);
	} else {
		return s;
	}
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
var client_model_util_LocalizedString = {};
client_model_util_LocalizedString.fromString = function(s) {
	var this1 = client_model_util_LocalizedStringEnum.Unique(s);
	return this1;
};
client_model_util_LocalizedString.fromArrayOfString = function(values) {
	var this1 = client_model_util_LocalizedStringEnum.Multiple(tink_pure_List.fromArray(values));
	return this1;
};
var client_model_util_LocalizedStringEnum = $hxEnums["client.model.util.LocalizedStringEnum"] = { __ename__:true,__constructs__:null
	,Unique: ($_=function(value) { return {_hx_index:0,value:value,__enum__:"client.model.util.LocalizedStringEnum",toString:$estr}; },$_._hx_name="Unique",$_.__params__ = ["value"],$_)
	,Multiple: ($_=function(values) { return {_hx_index:1,values:values,__enum__:"client.model.util.LocalizedStringEnum",toString:$estr}; },$_._hx_name="Multiple",$_.__params__ = ["values"],$_)
};
client_model_util_LocalizedStringEnum.__constructs__ = [client_model_util_LocalizedStringEnum.Unique,client_model_util_LocalizedStringEnum.Multiple];
var tink_pure_List = {};
tink_pure_List.get = function(this1,index) {
	if(index < 0) {
		return haxe_ds_Option.None;
	}
	var iter = new tink_pure_NodeIterator(this1);
	var v = null;
	while(index-- >= 0) {
		if(iter.list.length <= 0) {
			return haxe_ds_Option.None;
		}
		v = iter.next();
	}
	return haxe_ds_Option.Some(v);
};
tink_pure_List.fromArray = function(i) {
	var ret = null;
	var len = 0;
	var pos = i.length;
	while(pos-- > 0) ret = new tink_pure__$List_Node(++len,i[pos],ret == null ? tink_pure__$List_Node.EMPTY : [ret]);
	return ret;
};
var tink_pure__$List_Node = function(length,value,tails) {
	this.value = value;
	this.length = length;
	this.tails = tails == null ? tink_pure__$List_Node.EMPTY : tails;
};
tink_pure__$List_Node.__name__ = true;
var client_data_Data = function() { };
client_data_Data.__name__ = true;
var haxe_ds_Either = $hxEnums["haxe.ds.Either"] = { __ename__:true,__constructs__:null
	,Left: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"haxe.ds.Either",toString:$estr}; },$_._hx_name="Left",$_.__params__ = ["v"],$_)
	,Right: ($_=function(v) { return {_hx_index:1,v:v,__enum__:"haxe.ds.Either",toString:$estr}; },$_._hx_name="Right",$_.__params__ = ["v"],$_)
};
haxe_ds_Either.__constructs__ = [haxe_ds_Either.Left,haxe_ds_Either.Right];
var client_model_util_DateYear = {};
client_model_util_DateYear._new = function(value) {
	var this1 = value;
	return this1;
};
client_model_util_DateYear.fromInt = function(i) {
	return client_model_util_DateYear._new(client_model_util_DateYearData.Numeral(i));
};
client_model_util_DateYear.fromString = function(s) {
	return client_model_util_DateYear._new(client_model_util_DateYearData.Literal(client_model_util_LocalizedString.fromString(s)));
};
client_model_util_DateYear.fromMultipleString = function(values) {
	var immutableList = values;
	return client_model_util_DateYear._new(client_model_util_DateYearData.Literal(client_model_util_LocalizedString.fromArrayOfString(values)));
};
var client_model_util_DateYearData = $hxEnums["client.model.util.DateYearData"] = { __ename__:true,__constructs__:null
	,Numeral: ($_=function(year) { return {_hx_index:0,year:year,__enum__:"client.model.util.DateYearData",toString:$estr}; },$_._hx_name="Numeral",$_.__params__ = ["year"],$_)
	,Literal: ($_=function(year) { return {_hx_index:1,year:year,__enum__:"client.model.util.DateYearData",toString:$estr}; },$_._hx_name="Literal",$_.__params__ = ["year"],$_)
};
client_model_util_DateYearData.__constructs__ = [client_model_util_DateYearData.Numeral,client_model_util_DateYearData.Literal];
var client_model_util_TextData = {};
client_model_util_TextData._new = function(value) {
	var this1 = value;
	return this1;
};
client_model_util_TextData.fromMultipleString = function(values) {
	return client_model_util_TextData._new(client_model_util_ETextData.SimpleText(client_model_util_LocalizedString.fromArrayOfString(values)));
};
var client_model_util_ETextData = $hxEnums["client.model.util.ETextData"] = { __ename__:true,__constructs__:null
	,SimpleText: ($_=function(text) { return {_hx_index:0,text:text,__enum__:"client.model.util.ETextData",toString:$estr}; },$_._hx_name="SimpleText",$_.__params__ = ["text"],$_)
	,TextList: ($_=function(texts) { return {_hx_index:1,texts:texts,__enum__:"client.model.util.ETextData",toString:$estr}; },$_._hx_name="TextList",$_.__params__ = ["texts"],$_)
};
client_model_util_ETextData.__constructs__ = [client_model_util_ETextData.SimpleText,client_model_util_ETextData.TextList];
var client_model_util_MediaType = $hxEnums["client.model.util.MediaType"] = { __ename__:true,__constructs__:null
	,Image: {_hx_name:"Image",_hx_index:0,__enum__:"client.model.util.MediaType",toString:$estr}
	,Video: {_hx_name:"Video",_hx_index:1,__enum__:"client.model.util.MediaType",toString:$estr}
};
client_model_util_MediaType.__constructs__ = [client_model_util_MediaType.Image,client_model_util_MediaType.Video];
var client_data_Showoff = function() { };
client_data_Showoff.__name__ = true;
var client_data_Experiences = function() { };
client_data_Experiences.__name__ = true;
var client_data_Formation = function() { };
client_data_Formation.__name__ = true;
var client_data_Medias = function() { };
client_data_Medias.__name__ = true;
var client_data_Presentation = function() { };
client_data_Presentation.__name__ = true;
var client_data_Skills = function() { };
client_data_Skills.__name__ = true;
var client_home_Main = function() { };
client_home_Main.__name__ = true;
client_home_Main.main = function() {
	var tmp = window.document.getElementById("app");
	var tmp1 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		return function(languageIndex) {
			var hxxMeta = { };
			var __r = [];
			var compute = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
				return languageIndex;
			}),null);
			__r.push(client_view_PresentationView.fromHxx({ },{ languageIndex : compute}));
			var compute = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
				return languageIndex;
			}),null);
			__r.push(client_view_SkillsView.fromHxx({ },{ languageIndex : compute}));
			var compute = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
				return languageIndex;
			}),null);
			__r.push(client_view_experiences_ExperiencesView.fromHxx({ },{ languageIndex : compute}));
			var compute = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
				return languageIndex;
			}),null);
			__r.push(client_view_formations_FormationsView.fromHxx({ },{ languageIndex : compute}));
			var compute = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
				return languageIndex;
			}),null);
			__r.push(client_view_MediaView.fromHxx({ },{ languageIndex : compute}));
			return coconut_vdom_Html.DIV.vnode({ },hxxMeta.key,hxxMeta.ref,__r);
		};
	}),null);
	coconut_vdom_Renderer.mountInto(tmp,client_view_App.fromHxx({ },{ renderChildren : tmp1}));
};
var client_model_util_OptionExtender = function() { };
client_model_util_OptionExtender.__name__ = true;
client_model_util_OptionExtender.getOrDefault = function(instance,def) {
	if(def == null) {
		def = "";
	}
	switch(instance._hx_index) {
	case 0:
		var s = instance.v;
		return s;
	case 1:
		return def;
	}
};
var signals_BaseSignal = $hx_exports["BaseSignal"] = function(fireOnAdd) {
	if(fireOnAdd == null) {
		fireOnAdd = false;
	}
	this.defaultCallbackProps = 0;
	this.requiresSort = false;
	this.toTrigger = [];
	this.callbacks = [];
	this.mute = false;
	this._fireOnAdd = false;
	this._fireOnAdd = fireOnAdd;
};
signals_BaseSignal.__name__ = true;
signals_BaseSignal.prototype = {
	sortPriority: function() {
		if(this.requiresSort) {
			this.callbacks.sort($bind(this,this.sortCallbacks));
			this.requiresSort = false;
		}
	}
	,dispatchCallbacks: function() {
		var i = 0;
		while(i < this.callbacks.length) {
			var callbackData = this.callbacks[i];
			if(callbackData.repeat < 0 || callbackData.callCount <= callbackData.repeat) {
				this.toTrigger.push(callbackData);
			} else {
				callbackData.remove = true;
			}
			callbackData.callCount++;
			++i;
		}
		var j = this.callbacks.length - 1;
		while(j >= 0) {
			var callbackData = this.callbacks[j];
			if(callbackData.remove == true) {
				this.callbacks.splice(j,1);
			}
			--j;
		}
		var _g = 0;
		var _g1 = this.toTrigger.length;
		while(_g < _g1) {
			var l = _g++;
			if(this.toTrigger[l] != null) {
				this.toTrigger[l].dispatchMethod(this.toTrigger[l].callback,this.toTrigger[l]);
			}
		}
		this.toTrigger = [];
	}
	,dispatchCallback: function(callback,callbackData) {
		throw haxe_Exception.thrown("implement in override");
	}
	,dispatchCallback1: function(callback,callbackData) {
		throw haxe_Exception.thrown("implement in override");
	}
	,dispatchCallback2: function(callback,callbackData) {
		throw haxe_Exception.thrown("implement in override");
	}
	,dispatchCallback3: function(callback,callbackData) {
		throw haxe_Exception.thrown("implement in override");
	}
	,dispatchCheck: function(callback,callbackData) {
		try {
			this.dispatchCallback(callback,callbackData);
		} catch( _g ) {
			var e = haxe_Exception.caught(_g).unwrap();
			if(e == "Invalid call") {
				return;
			}
		}
		callbackData.dispatchMethod = $bind(this,this.dispatchCallback);
	}
	,dispatchCheck1: function(callback,callbackData) {
		try {
			this.dispatchCallback1(callback,callbackData);
		} catch( _g ) {
			var e = haxe_Exception.caught(_g).unwrap();
			if(e == "Invalid call") {
				this.dispatchCallback(callback,callbackData);
				return;
			}
		}
		callbackData.dispatchMethod = $bind(this,this.dispatchCallback1);
	}
	,dispatchCheck2: function(callback,callbackData) {
		try {
			this.dispatchCallback2(callback,callbackData);
		} catch( _g ) {
			var e = haxe_Exception.caught(_g).unwrap();
			if(e == "Invalid call") {
				this.dispatchCheck1(callback,callbackData);
				return;
			}
		}
		callbackData.dispatchMethod = $bind(this,this.dispatchCallback2);
	}
	,dispatchCheck3: function(callback,callbackData) {
		try {
			this.dispatchCallback3(callback,callbackData);
		} catch( _g ) {
			var e = haxe_Exception.caught(_g).unwrap();
			if(e == "Invalid call") {
				this.dispatchCheck2(callback,callbackData);
				return;
			}
		}
		callbackData.dispatchMethod = $bind(this,this.dispatchCallback3);
	}
	,sortCallbacks: function(s1,s2) {
		if(s1.priority > s2.priority) {
			return -1;
		} else if(s1.priority < s2.priority) {
			return 1;
		} else {
			return 0;
		}
	}
	,get_numListeners: function() {
		return this.callbacks.length;
	}
	,get_hasListeners: function() {
		return this.get_numListeners() > 0;
	}
	,add: function(callback,fireOnce,priority,fireOnAdd) {
		if(priority == null) {
			priority = 0;
		}
		if(fireOnce == null) {
			fireOnce = false;
		}
		if(fireOnce != false || priority != 0 || fireOnAdd != null) {
			var warningMessage = "\nWARNING: fireOnce, priority and fireOnAdd params will be removed from 'Signals' in a future release\nInstead use daisy chain methods, eg: obj.add(callback).repeat(5).priority(1000).fireOnAdd();";
			console.warn(warningMessage);
		}
		var numParams = this.getNumParams(callback);
		var repeat = -1;
		if(fireOnce == true) {
			repeat = 0;
		}
		this.currentCallback = { params : numParams, callback : callback, callCount : 0, repeat : repeat, priority : priority, remove : false};
		if(numParams == 0) {
			this.currentCallback.dispatchMethod = $bind(this,this.dispatchCheck);
		} else if(numParams == 1) {
			this.currentCallback.dispatchMethod = $bind(this,this.dispatchCheck1);
		} else if(numParams == 2) {
			this.currentCallback.dispatchMethod = $bind(this,this.dispatchCheck2);
		} else if(numParams == 3) {
			this.currentCallback.dispatchMethod = $bind(this,this.dispatchCheck3);
		}
		this.callbacks.push(this.currentCallback);
		if(priority != 0) {
			this.requiresSort = true;
		}
		if(fireOnAdd == true || this._fireOnAdd == true) {
			this.currentCallback.dispatchMethod(callback,this.currentCallback);
		}
		return this;
	}
	,getNumParams: function(callback) {
		var length = Reflect.getProperty(callback,"length");
		if(length != null) {
			return length;
		}
		return this.defaultCallbackProps;
	}
	,priority: function(value) {
		if(this.currentCallback == null) {
			return this;
		}
		this.currentCallback.priority = value;
		this.requiresSort = true;
		return this;
	}
	,repeat: function(value) {
		if(value == null) {
			value = -1;
		}
		if(this.currentCallback == null) {
			return this;
		}
		this.currentCallback.repeat = value;
		return this;
	}
	,fireOnAdd: function() {
		if(this.currentCallback == null) {
			return;
		}
		this.currentCallback.callCount++;
		this.currentCallback.dispatchMethod(this.currentCallback.callback,this.currentCallback);
	}
	,remove: function(callback) {
		if(callback == null) {
			callback = false;
		}
		if(callback == true) {
			this.callbacks = [];
		} else {
			var j = 0;
			while(j < this.callbacks.length) if(this.callbacks[j].callback == callback) {
				this.callbacks.splice(j,1);
			} else {
				++j;
			}
		}
	}
	,__properties__: {get_hasListeners:"get_hasListeners",get_numListeners:"get_numListeners"}
};
var signals_Signal1 = $hx_exports["Signal1"] = function() {
	signals_BaseSignal.call(this);
	this.defaultCallbackProps = 1;
};
signals_Signal1.__name__ = true;
signals_Signal1.__super__ = signals_BaseSignal;
signals_Signal1.prototype = $extend(signals_BaseSignal.prototype,{
	dispatch: function(value1) {
		if(this.requiresSort) {
			this.callbacks.sort($bind(this,this.sortCallbacks));
			this.requiresSort = false;
		}
		this.value = value1;
		var i = 0;
		while(i < this.callbacks.length) {
			var callbackData = this.callbacks[i];
			if(callbackData.repeat < 0 || callbackData.callCount <= callbackData.repeat) {
				this.toTrigger.push(callbackData);
			} else {
				callbackData.remove = true;
			}
			callbackData.callCount++;
			++i;
		}
		var j = this.callbacks.length - 1;
		while(j >= 0) {
			var callbackData = this.callbacks[j];
			if(callbackData.remove == true) {
				this.callbacks.splice(j,1);
			}
			--j;
		}
		var _g = 0;
		var _g1 = this.toTrigger.length;
		while(_g < _g1) {
			var l = _g++;
			if(this.toTrigger[l] != null) {
				this.toTrigger[l].dispatchMethod(this.toTrigger[l].callback,this.toTrigger[l]);
			}
		}
		this.toTrigger = [];
		this.value = null;
	}
	,dispatchCallback: function(callback,callbackData) {
		callback();
	}
	,dispatchCallback1: function(callback,callbackData) {
		callback(this.value);
	}
	,dispatchCallback2: function(callback,callbackData) {
		throw haxe_Exception.thrown("Use Signal 2");
	}
	,dispatchCallback3: function(callback,callbackData) {
		throw haxe_Exception.thrown("Use Signal 3");
	}
});
var client_utilities_AppEvents = function() { };
client_utilities_AppEvents.__name__ = true;
var coconut_diffing_Widget = function(rendered,mounted,updated,unmounting) {
	this._coco_vStructure = rendered;
	this._coco_viewMounted = mounted;
	this._coco_viewUpdated = updated;
	this._coco_viewUnmounting = unmounting;
};
coconut_diffing_Widget.__name__ = true;
var coconut_vdom_View = function(render,shouldUpdate,track,beforeRerender,rendered) {
	this.__au = [];
	this.__bc = [];
	this.__bu = [];
	var _gthis = this;
	var mounted;
	if(rendered != null) {
		var _g = rendered;
		var a1 = true;
		mounted = function() {
			_g(a1);
		};
	} else {
		mounted = null;
	}
	var updated;
	if(rendered != null) {
		var _g1 = rendered;
		var a11 = false;
		updated = function() {
			_g1(a11);
		};
	} else {
		updated = null;
	}
	var firstTime = true;
	var last = null;
	var hasBeforeRerender = beforeRerender != null;
	var hasUpdated = updated != null;
	var _coco_revision = tink_state_State._new(0);
	var lastRev = tink_state_State.get_value(_coco_revision);
	var renderView = function() {
		var curRev = tink_state_State.get_value(_coco_revision);
		if(track != null) {
			track();
		}
		if(firstTime) {
			firstTime = false;
		} else {
			if(curRev == lastRev && shouldUpdate != null && !shouldUpdate()) {
				return last;
			}
			var hasCallbacks = _gthis.__bc.length > 0;
			if(hasBeforeRerender || hasCallbacks) {
				var before = tink_state_internal_AutoObservable.cur;
				tink_state_internal_AutoObservable.cur = null;
				if(hasBeforeRerender) {
					beforeRerender();
				}
				if(hasCallbacks) {
					var _g = 0;
					var _g1 = _gthis.__bc.splice(0,_gthis.__bc.length);
					while(_g < _g1.length) {
						var c = _g1[_g];
						++_g;
						tink_core_Callback.invoke(c,false);
					}
				}
				var ret = null;
				tink_state_internal_AutoObservable.cur = before;
			}
		}
		lastRev = curRev;
		last = render();
		return last;
	};
	coconut_diffing_Widget.call(this,new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(renderView),null),mounted,function() {
		var hasCallbacks = _gthis.__au.length > 0;
		if(hasUpdated || hasCallbacks) {
			var before = tink_state_internal_AutoObservable.cur;
			tink_state_internal_AutoObservable.cur = null;
			if(hasUpdated) {
				updated();
			}
			if(hasCallbacks) {
				var _g = 0;
				var _g1 = _gthis.__au.splice(0,_gthis.__au.length);
				while(_g < _g1.length) {
					var c = _g1[_g];
					++_g;
					tink_core_Callback.invoke(c,null);
				}
			}
			var ret = null;
			tink_state_internal_AutoObservable.cur = before;
		}
	},function() {
		last = null;
		firstTime = true;
		_gthis.__beforeUnmount();
	});
	this._coco_revision = _coco_revision;
};
coconut_vdom_View.__name__ = true;
coconut_vdom_View.__super__ = coconut_diffing_Widget;
coconut_vdom_View.prototype = $extend(coconut_diffing_Widget.prototype,{
	__beforeUnmount: function() {
		var _g = 0;
		var _g1 = this.__bu.splice(0,this.__bu.length);
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c != null) {
				c.cancel();
			}
		}
		var _g = 0;
		var _g1 = this.__bc.splice(0,this.__bu.length);
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			tink_core_Callback.invoke(c,true);
		}
	}
});
var client_view_App = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__coco_renderChildren = new coconut_ui_internal_Slot(this,null,new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		return function(_) {
			return null;
		};
	}),null));
	this.__coco_nestedNess = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(0));
	this.__coco_languageIndex = new coconut_ui_internal_Slot(this,null,tink_state_State._new(0));
	this.__initAttributes(__coco_data_);
	var snapshot = null;
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,function(firstTime) {
		if(firstTime) {
			_gthis.viewDidMount();
		}
	});
};
client_view_App.__name__ = true;
client_view_App.fromHxx = function(hxxMeta,attributes) {
	var _g = client_view_App.__factory;
	var tmp;
	if(_g == null) {
		tmp = client_view_App.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
			return new client_view_App(__coco_data_,implicits);
		},function(v,attr) {
			v.__initAttributes(attr);
		});
	} else {
		var v = _g;
		tmp = v;
	}
	return new coconut_diffing_internal_VWidget(tmp,attributes,hxxMeta.key,hxxMeta.ref);
};
client_view_App.__super__ = coconut_vdom_View;
client_view_App.prototype = $extend(coconut_vdom_View.prototype,{
	renderChildren: function(a0) {
		return (tink_state_Observable.get_value(this.__coco_renderChildren))(a0);
	}
	,viewDidMount: function() {
		$(".fullscreen").each(function(index,element) {
			if((index & 1) == 1) {
				element.className += " own-bg-primary";
			} else {
				element.className += " own-bg-primary-light";
			}
		});
		this.browserScrollUtility = new client_view_utilities_scroll_BrowserScrollUtility();
		this.scrollUtility = new client_view_utilities_scroll_ScrollUtility(1.0);
	}
	,onLanguageChanged: function(newIndex) {
		this.set_languageIndex(newIndex);
	}
	,render: function() {
		var _gthis = this;
		var hxxMeta = { };
		var attr = { className : tink_domspec_ClassName.ofString("own-bg-primary")};
		var __r = [];
		var tmp = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
			return tink_state_Observable.get_value(_gthis.__coco_nestedNess);
		}),null);
		var tmp1 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
			return $bind(_gthis,_gthis.onLanguageChanged);
		}),null);
		var tmp2 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
			return tink_state_Observable.get_value(_gthis.__coco_languageIndex);
		}),null);
		__r.push(client_view_NavView.fromHxx({ },{ nestedNess : tmp, onLanguageChanged : tmp1, languageIndex : tmp2}));
		__r.push(this.renderChildren(tink_state_Observable.get_value(this.__coco_languageIndex)));
		return coconut_vdom_Html.DIV.vnode(attr,hxxMeta.key,hxxMeta.ref,__r);
	}
	,set_languageIndex: function(param) {
		var _g = this.__coco_languageIndex.data;
		if(_g != null) {
			var v = _g;
			v.set(param);
		}
		return param;
	}
	,__initAttributes: function(attributes) {
		this.__coco_renderChildren.setData(attributes.renderChildren);
		this.__coco_nestedNess.setData(attributes.nestedNess);
		this.__coco_languageIndex.setData(attributes.languageIndex);
	}
	,__properties__: {set_languageIndex:"set_languageIndex"}
});
var client_view_MediaView = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__coco_languageIndex = new coconut_ui_internal_Slot(this,null,null);
	this.__initAttributes(__coco_data_);
	var snapshot = null;
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,null);
};
client_view_MediaView.__name__ = true;
client_view_MediaView.fromHxx = function(hxxMeta,attributes) {
	var _g = client_view_MediaView.__factory;
	var tmp;
	if(_g == null) {
		tmp = client_view_MediaView.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
			return new client_view_MediaView(__coco_data_,implicits);
		},function(v,attr) {
			v.__initAttributes(attr);
		});
	} else {
		var v = _g;
		tmp = v;
	}
	return new coconut_diffing_internal_VWidget(tmp,attributes,hxxMeta.key,hxxMeta.ref);
};
client_view_MediaView.__super__ = coconut_vdom_View;
client_view_MediaView.prototype = $extend(coconut_vdom_View.prototype,{
	render: function() {
		var hxxMeta = { };
		var attr = { className : tink_domspec_ClassName.ofString("fullscreen exact-fullscreen flex flex-column")};
		var __r = [];
		var hxxMeta1 = { };
		var attr1 = { className : tink_domspec_ClassName.ofString("text-tertiary pt-20 text-center w-full")};
		var this1 = client_data_Medias.value.header;
		var languageIndex = tink_state_Observable.get_value(this.__coco_languageIndex);
		var s;
		switch(this1._hx_index) {
		case 0:
			var value = this1.value;
			s = value;
			break;
		case 1:
			var values = this1.values;
			if(languageIndex < 0 || languageIndex >= (values == null ? 0 : values.length)) {
				console.log("src/client/model/util/LocalizedString.hx:32:","languageIndex should be between 0 and length, here: " + languageIndex);
				s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,0));
			} else {
				s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,languageIndex));
			}
			break;
		}
		var children = s == null ? null : coconut_vdom__$Html_Text.inst.vnode(s,null,null,null);
		__r.push(coconut_vdom_Html.H1.vnode(attr1,hxxMeta1.key,hxxMeta1.ref,[children]));
		var hxxMeta1 = { };
		var attr1 = { className : tink_domspec_ClassName.ofString("w-full h-full flex justify-center items-center")};
		var hxxMeta2 = { };
		var attr2 = { className : tink_domspec_ClassName.ofString("flex lg:flex-row sm:flex-col justify-center items-center lg:space-x-4 lg:space-y-0 space-y-12")};
		var __r1 = [];
		var _g = new tink_pure_NodeIterator(client_data_Medias.value.items);
		while(_g.list.length > 0) {
			var media = _g.next();
			var hxxMeta3 = { };
			var attr3 = { className : tink_domspec_ClassName.ofString("square-highlight-no-phone h-48 lg:h-96 w-48 lg:w-64 flex flex-column")};
			var children;
			if(media.link.link != null) {
				var hxxMeta4 = { };
				var attr4 = { target : "_blank", href : media.link.link, className : tink_domspec_ClassName.ofString("h-full w-full")};
				var children1 = [this.renderMedia(media)];
				children = coconut_vdom_Html.A.vnode(attr4,hxxMeta4.key,hxxMeta4.ref,children1);
			} else {
				children = this.renderMedia(media);
			}
			__r1.push(coconut_vdom_Html.DIV.vnode(attr3,hxxMeta3.key,hxxMeta3.ref,[children]));
		}
		var children = [coconut_vdom_Html.DIV.vnode(attr2,hxxMeta2.key,hxxMeta2.ref,__r1)];
		__r.push(coconut_vdom_Html.DIV.vnode(attr1,hxxMeta1.key,hxxMeta1.ref,children));
		return coconut_vdom_Html.DIV.vnode(attr,hxxMeta.key,hxxMeta.ref,__r);
	}
	,renderMedia: function(media) {
		var hxxMeta = { };
		var attr = { className : tink_domspec_ClassName.ofString("h-full w-full")};
		var __r = [];
		var hxxMeta1 = { };
		var attr1 = { className : tink_domspec_ClassName.ofString("w-full lg:h-48 h-full p-2 flex flex-column justify-center items-center")};
		var hxxMeta2 = { };
		var attr2 = { className : tink_domspec_ClassName.ofString("p-4 h-32 w-32 bg-transparent-white rounded-md")};
		var hxxMeta3 = { };
		var children = [coconut_vdom_Html.IMG.vnode({ src : media.logoPath, className : tink_domspec_ClassName.ofString("w-full h-auto")},hxxMeta3.key,hxxMeta3.ref)];
		var children1 = [coconut_vdom_Html.DIV.vnode(attr2,hxxMeta2.key,hxxMeta2.ref,children)];
		__r.push(coconut_vdom_Html.DIV.vnode(attr1,hxxMeta1.key,hxxMeta1.ref,children1));
		var hxxMeta1 = { };
		var attr1 = { className : tink_domspec_ClassName.ofString("phone-invisible w-full h-48 text-center flex flex-column justify-center items-center")};
		var hxxMeta2 = { };
		var attr2 = { className : tink_domspec_ClassName.ofString("" + (media.link.link != null ? "interactible" : "") + " basic-border-highlight no-decoration w-9/12 text-l")};
		var this1 = media.link.name;
		var languageIndex = tink_state_Observable.get_value(this.__coco_languageIndex);
		var s;
		switch(this1._hx_index) {
		case 0:
			var value = this1.value;
			s = value;
			break;
		case 1:
			var values = this1.values;
			if(languageIndex < 0 || languageIndex >= (values == null ? 0 : values.length)) {
				console.log("src/client/model/util/LocalizedString.hx:32:","languageIndex should be between 0 and length, here: " + languageIndex);
				s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,0));
			} else {
				s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,languageIndex));
			}
			break;
		}
		var children = s == null ? null : coconut_vdom__$Html_Text.inst.vnode(s,null,null,null);
		var children1 = [coconut_vdom_Html.P.vnode(attr2,hxxMeta2.key,hxxMeta2.ref,[children])];
		__r.push(coconut_vdom_Html.DIV.vnode(attr1,hxxMeta1.key,hxxMeta1.ref,children1));
		return coconut_vdom_Html.DIV.vnode(attr,hxxMeta.key,hxxMeta.ref,__r);
	}
	,__initAttributes: function(attributes) {
		this.__coco_languageIndex.setData(attributes.languageIndex);
	}
});
var client_view_NavView = function(__coco_data_,implicits) {
	this.languageChoiceOpened = false;
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__coco_onLanguageChanged = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_languageIndex = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_nestedNess = new coconut_ui_internal_Slot(this,null,null);
	this.__initAttributes(__coco_data_);
	var snapshot = null;
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,function(firstTime) {
		if(firstTime) {
			_gthis.viewDidMount();
		}
	});
};
client_view_NavView.__name__ = true;
client_view_NavView.fromHxx = function(hxxMeta,attributes) {
	var _g = client_view_NavView.__factory;
	var tmp;
	if(_g == null) {
		tmp = client_view_NavView.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
			return new client_view_NavView(__coco_data_,implicits);
		},function(v,attr) {
			v.__initAttributes(attr);
		});
	} else {
		var v = _g;
		tmp = v;
	}
	return new coconut_diffing_internal_VWidget(tmp,attributes,hxxMeta.key,hxxMeta.ref);
};
client_view_NavView.__super__ = coconut_vdom_View;
client_view_NavView.prototype = $extend(coconut_vdom_View.prototype,{
	onLanguageChanged: function(newIndex) {
		(tink_state_Observable.get_value(this.__coco_onLanguageChanged))(newIndex);
	}
	,render: function() {
		var _g = [];
		var _g1 = 0;
		var _g2 = tink_state_Observable.get_value(this.__coco_nestedNess);
		while(_g1 < _g2) {
			var i = _g1++;
			_g.push("../");
		}
		var rewind = _g.join("");
		var rootLink = rewind + "index.html";
		var imageFolder = rewind + "./images/";
		var hxxMeta = { };
		var attr = { className : tink_domspec_ClassName.ofString("header z-50")};
		var hxxMeta1 = { };
		var attr1 = { className : tink_domspec_ClassName.ofString("navbar navbar-primary")};
		var __r = [];
		var hxxMeta2 = { };
		var attr2 = { className : tink_domspec_ClassName.ofString("navbar-brand"), href : rootLink};
		var children = [coconut_vdom__$Html_Text.inst.vnode("Erik Kubiak",null,null,null)];
		__r.push(coconut_vdom_Html.A.vnode(attr2,hxxMeta2.key,hxxMeta2.ref,children));
		var hxxMeta2 = { };
		var attr2 = { className : tink_domspec_ClassName.ofString("flex flex-row-reverse mr-4"), id : "language"};
		var __r1 = [];
		var hxxMeta3 = { };
		var _g = $bind(this,this.onLanguageClicked);
		var languageIndex = 0;
		var attr3 = { onclick : function() {
			_g(languageIndex);
		}, className : tink_domspec_ClassName.ofString("interactible order-first")};
		var hxxMeta4 = { };
		var children = [coconut_vdom_Html.IMG.vnode({ src : "" + imageFolder + "french-flag.png", className : tink_domspec_ClassName.ofString("h-full-important")},hxxMeta4.key,hxxMeta4.ref)];
		__r1.push(coconut_vdom_Html.BUTTON.vnode(attr3,hxxMeta3.key,hxxMeta3.ref,children));
		var hxxMeta3 = { };
		var _g1 = $bind(this,this.onLanguageClicked);
		var languageIndex1 = 1;
		var attr3 = { onclick : function() {
			_g1(languageIndex1);
		}, className : tink_domspec_ClassName.ofString("interactible")};
		var hxxMeta4 = { };
		var children = [coconut_vdom_Html.IMG.vnode({ src : "" + imageFolder + "uk-flag.png", className : tink_domspec_ClassName.ofString("h-full-important")},hxxMeta4.key,hxxMeta4.ref)];
		__r1.push(coconut_vdom_Html.BUTTON.vnode(attr3,hxxMeta3.key,hxxMeta3.ref,children));
		__r.push(coconut_vdom_Html.DIV.vnode(attr2,hxxMeta2.key,hxxMeta2.ref,__r1));
		var children = [coconut_vdom_Html.NAV.vnode(attr1,hxxMeta1.key,hxxMeta1.ref,__r)];
		return coconut_vdom_Html.DIV.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
	}
	,viewDidMount: function() {
		this.languageButtons = $("#language > button");
		if($global.navigator.language.indexOf("fr") == -1) {
			var notFRIndex = 1;
			this.changeLanguage(notFRIndex);
			this.onLanguageChanged(notFRIndex);
		}
	}
	,onLanguageClicked: function(languageIndex) {
		if(this.languageChoiceOpened) {
			this.setInteractibilityState(false);
			this.changeLanguage(languageIndex);
			this.onLanguageChanged(languageIndex);
			$("#language").blur();
			this.languageChoiceOpened = false;
		} else {
			this.setInteractibilityState(true);
			this.languageChoiceOpened = true;
		}
	}
	,changeLanguage: function(index) {
		this.languageButtons.removeClass("order-first");
		this.languageButtons[index].className += " order-first";
	}
	,setInteractibilityState: function(state) {
		if(state) {
			$("#language").addClass("interacted");
		} else {
			$("#language").removeClass("interacted");
		}
	}
	,__initAttributes: function(attributes) {
		this.__coco_onLanguageChanged.setData(attributes.onLanguageChanged);
		this.__coco_languageIndex.setData(attributes.languageIndex);
		this.__coco_nestedNess.setData(attributes.nestedNess);
	}
});
var client_view_PresentationView = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__coco_languageIndex = new coconut_ui_internal_Slot(this,null,null);
	this.__initAttributes(__coco_data_);
	var snapshot = null;
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,null);
};
client_view_PresentationView.__name__ = true;
client_view_PresentationView.fromHxx = function(hxxMeta,attributes) {
	var _g = client_view_PresentationView.__factory;
	var tmp;
	if(_g == null) {
		tmp = client_view_PresentationView.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
			return new client_view_PresentationView(__coco_data_,implicits);
		},function(v,attr) {
			v.__initAttributes(attr);
		});
	} else {
		var v = _g;
		tmp = v;
	}
	return new coconut_diffing_internal_VWidget(tmp,attributes,hxxMeta.key,hxxMeta.ref);
};
client_view_PresentationView.__super__ = coconut_vdom_View;
client_view_PresentationView.prototype = $extend(coconut_vdom_View.prototype,{
	render: function() {
		var hxxMeta = { };
		var attr = { className : tink_domspec_ClassName.ofString("fullscreen exact-fullscreen flex justify-center items-center")};
		var hxxMeta1 = { };
		var attr1 = { className : tink_domspec_ClassName.ofString("mt-24 h-75 w-75 rounded-md p-4 flex flex-col justify-center items-center")};
		var hxxMeta2 = { };
		var attr2 = { className : tink_domspec_ClassName.ofString("w-full h-1/2 flex flex-col justify-center items-center mb-8")};
		var __r = [];
		var hxxMeta3 = { };
		var attr3 = { className : tink_domspec_ClassName.ofString("h-64 w-auto p-0.5 bg-gradient-to-r from-second to-tertiary rounded-3xl mb-4")};
		var hxxMeta4 = { };
		var attr4 = { className : tink_domspec_ClassName.ofString("h-full w-full rounded-3xl overflow-hidden")};
		var hxxMeta5 = { };
		var children = [coconut_vdom_Html.IMG.vnode({ src : "./images/face.jpg", className : tink_domspec_ClassName.ofString("h-full-important")},hxxMeta5.key,hxxMeta5.ref)];
		var children1 = [coconut_vdom_Html.DIV.vnode(attr4,hxxMeta4.key,hxxMeta4.ref,children)];
		__r.push(coconut_vdom_Html.DIV.vnode(attr3,hxxMeta3.key,hxxMeta3.ref,children1));
		var hxxMeta3 = { };
		var attr3 = { className : tink_domspec_ClassName.ofString("w-full flex flex-col justify-center items-center")};
		var hxxMeta4 = { };
		var attr4 = { className : tink_domspec_ClassName.ofString("w-full mb-4 text-center")};
		var __r1 = [];
		__r1.push(coconut_vdom__$Html_Text.inst.vnode(" ",null,null,null));
		var this1 = client_data_Presentation.value.name;
		var languageIndex = tink_state_Observable.get_value(this.__coco_languageIndex);
		var s;
		switch(this1._hx_index) {
		case 0:
			var value = this1.value;
			s = value;
			break;
		case 1:
			var values = this1.values;
			if(languageIndex < 0 || languageIndex >= (values == null ? 0 : values.length)) {
				console.log("src/client/model/util/LocalizedString.hx:32:","languageIndex should be between 0 and length, here: " + languageIndex);
				s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,0));
			} else {
				s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,languageIndex));
			}
			break;
		}
		__r1.push(s == null ? null : coconut_vdom__$Html_Text.inst.vnode(s,null,null,null));
		__r1.push(coconut_vdom__$Html_Text.inst.vnode(" - ",null,null,null));
		var this1 = client_data_Presentation.value.title;
		var languageIndex = tink_state_Observable.get_value(this.__coco_languageIndex);
		var s;
		switch(this1._hx_index) {
		case 0:
			var value = this1.value;
			s = value;
			break;
		case 1:
			var values = this1.values;
			if(languageIndex < 0 || languageIndex >= (values == null ? 0 : values.length)) {
				console.log("src/client/model/util/LocalizedString.hx:32:","languageIndex should be between 0 and length, here: " + languageIndex);
				s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,0));
			} else {
				s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,languageIndex));
			}
			break;
		}
		__r1.push(s == null ? null : coconut_vdom__$Html_Text.inst.vnode(s,null,null,null));
		var children = [coconut_vdom_Html.H3.vnode(attr4,hxxMeta4.key,hxxMeta4.ref,__r1)];
		__r.push(coconut_vdom_Html.DIV.vnode(attr3,hxxMeta3.key,hxxMeta3.ref,children));
		var _g = new tink_pure_NodeIterator(client_data_Presentation.value.content);
		while(_g.list.length > 0) {
			var element = _g.next();
			var hxxMeta3 = { };
			var attr3 = { className : tink_domspec_ClassName.ofString("text-lg align-middle text-justify mb-1")};
			var languageIndex = tink_state_Observable.get_value(this.__coco_languageIndex);
			var s;
			switch(element._hx_index) {
			case 0:
				var value = element.value;
				s = value;
				break;
			case 1:
				var values = element.values;
				if(languageIndex < 0 || languageIndex >= (values == null ? 0 : values.length)) {
					console.log("src/client/model/util/LocalizedString.hx:32:","languageIndex should be between 0 and length, here: " + languageIndex);
					s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,0));
				} else {
					s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,languageIndex));
				}
				break;
			}
			var children = s == null ? null : coconut_vdom__$Html_Text.inst.vnode(s,null,null,null);
			__r.push(coconut_vdom_Html.P.vnode(attr3,hxxMeta3.key,hxxMeta3.ref,[children]));
		}
		var hxxMeta3 = { };
		var attr3 = { className : tink_domspec_ClassName.ofString("w-full flex flex-row justify-center items-center space-x-16 mt-4")};
		var hxxMeta4 = { };
		var attr4 = { href : "./blog/index.html", className : tink_domspec_ClassName.ofString("mb-3 p-2 no-decoration interactible square-highlight w-1/3 text-center flex flex-column justify-center items-center own-bg-primary")};
		var hxxMeta5 = { };
		var attr5 = { className : tink_domspec_ClassName.ofString("no-decoration text-base")};
		var children = [coconut_vdom__$Html_Text.inst.vnode("Blog",null,null,null)];
		var children1 = [coconut_vdom_Html.H1.vnode(attr5,hxxMeta5.key,hxxMeta5.ref,children)];
		var children = [coconut_vdom_Html.A.vnode(attr4,hxxMeta4.key,hxxMeta4.ref,children1)];
		__r.push(coconut_vdom_Html.DIV.vnode(attr3,hxxMeta3.key,hxxMeta3.ref,children));
		var children = [coconut_vdom_Html.DIV.vnode(attr2,hxxMeta2.key,hxxMeta2.ref,__r)];
		var children1 = [coconut_vdom_Html.DIV.vnode(attr1,hxxMeta1.key,hxxMeta1.ref,children)];
		return coconut_vdom_Html.DIV.vnode(attr,hxxMeta.key,hxxMeta.ref,children1);
	}
	,__initAttributes: function(attributes) {
		this.__coco_languageIndex.setData(attributes.languageIndex);
	}
});
var client_view_SkillsView = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__coco_languageIndex = new coconut_ui_internal_Slot(this,null,null);
	this.__initAttributes(__coco_data_);
	var snapshot = null;
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,null);
};
client_view_SkillsView.__name__ = true;
client_view_SkillsView.fromHxx = function(hxxMeta,attributes) {
	var _g = client_view_SkillsView.__factory;
	var tmp;
	if(_g == null) {
		tmp = client_view_SkillsView.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
			return new client_view_SkillsView(__coco_data_,implicits);
		},function(v,attr) {
			v.__initAttributes(attr);
		});
	} else {
		var v = _g;
		tmp = v;
	}
	return new coconut_diffing_internal_VWidget(tmp,attributes,hxxMeta.key,hxxMeta.ref);
};
client_view_SkillsView.__super__ = coconut_vdom_View;
client_view_SkillsView.prototype = $extend(coconut_vdom_View.prototype,{
	render: function() {
		var this1 = client_data_Skills.value.items;
		var groupCount = this1 == null ? 0 : this1.length;
		var hxxMeta = { };
		var attr = { className : tink_domspec_ClassName.ofString("fullscreen min-fullscreen flex lg:flex-row flex-col justify-center items-center")};
		var __r = [];
		var _g = new tink_pure_NodeIterator(client_data_Skills.value.items);
		while(_g.list.length > 0) {
			var item = _g.next();
			var hxxMeta1 = { };
			var attr1 = { className : tink_domspec_ClassName.ofString("snap lg:w-1/" + groupCount + " w-full h-screen flex flex-col justify-center items-center")};
			var hxxMeta2 = { };
			var attr2 = { className : tink_domspec_ClassName.ofString("skill-group square-highlight h-3/4 w-3/4 flex flex-col items-center")};
			var __r1 = [];
			var hxxMeta3 = { };
			var attr3 = { className : tink_domspec_ClassName.ofString("w-full text-center mb-3")};
			var this1 = item.header;
			var languageIndex = tink_state_Observable.get_value(this.__coco_languageIndex);
			var s;
			switch(this1._hx_index) {
			case 0:
				var value = this1.value;
				s = value;
				break;
			case 1:
				var values = this1.values;
				if(languageIndex < 0 || languageIndex >= (values == null ? 0 : values.length)) {
					console.log("src/client/model/util/LocalizedString.hx:32:","languageIndex should be between 0 and length, here: " + languageIndex);
					s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,0));
				} else {
					s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,languageIndex));
				}
				break;
			}
			var children = s == null ? null : coconut_vdom__$Html_Text.inst.vnode(s,null,null,null);
			__r1.push(coconut_vdom_Html.H3.vnode(attr3,hxxMeta3.key,hxxMeta3.ref,[children]));
			var hxxMeta4 = { };
			var attr4 = { className : tink_domspec_ClassName.ofString("w-full h-full text-center flex flex-col justify-center items-center")};
			var __r2 = [];
			var _g1 = new tink_pure_NodeIterator(item.skills);
			while(_g1.list.length > 0) {
				var skill = _g1.next();
				var hxxMeta5 = { };
				var attr5 = { className : tink_domspec_ClassName.ofString("leading-loose text-lg")};
				var languageIndex1 = tink_state_Observable.get_value(this.__coco_languageIndex);
				var s1;
				switch(skill._hx_index) {
				case 0:
					var value1 = skill.value;
					s1 = value1;
					break;
				case 1:
					var values1 = skill.values;
					if(languageIndex1 < 0 || languageIndex1 >= (values1 == null ? 0 : values1.length)) {
						console.log("src/client/model/util/LocalizedString.hx:32:","languageIndex should be between 0 and length, here: " + languageIndex1);
						s1 = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values1,0));
					} else {
						s1 = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values1,languageIndex1));
					}
					break;
				}
				var children1 = s1 == null ? null : coconut_vdom__$Html_Text.inst.vnode(s1,null,null,null);
				__r2.push(coconut_vdom_Html.P.vnode(attr5,hxxMeta5.key,hxxMeta5.ref,[children1]));
			}
			__r1.push(coconut_vdom_Html.DIV.vnode(attr4,hxxMeta4.key,hxxMeta4.ref,__r2));
			var children2 = [coconut_vdom_Html.DIV.vnode(attr2,hxxMeta2.key,hxxMeta2.ref,__r1)];
			__r.push(coconut_vdom_Html.DIV.vnode(attr1,hxxMeta1.key,hxxMeta1.ref,children2));
		}
		return coconut_vdom_Html.DIV.vnode(attr,hxxMeta.key,hxxMeta.ref,__r);
	}
	,__initAttributes: function(attributes) {
		this.__coco_languageIndex.setData(attributes.languageIndex);
	}
});
var client_view_experiences_ExperienceItemPairView = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__coco_languageIndex = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_item = new coconut_ui_internal_Slot(this,null,null);
	this.__initAttributes(__coco_data_);
	var snapshot = null;
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,null);
};
client_view_experiences_ExperienceItemPairView.__name__ = true;
client_view_experiences_ExperienceItemPairView.fromHxx = function(hxxMeta,attributes) {
	var _g = client_view_experiences_ExperienceItemPairView.__factory;
	var tmp;
	if(_g == null) {
		tmp = client_view_experiences_ExperienceItemPairView.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
			return new client_view_experiences_ExperienceItemPairView(__coco_data_,implicits);
		},function(v,attr) {
			v.__initAttributes(attr);
		});
	} else {
		var v = _g;
		tmp = v;
	}
	return new coconut_diffing_internal_VWidget(tmp,attributes,hxxMeta.key,hxxMeta.ref);
};
client_view_experiences_ExperienceItemPairView.__super__ = coconut_vdom_View;
client_view_experiences_ExperienceItemPairView.prototype = $extend(coconut_vdom_View.prototype,{
	render: function() {
		var _gthis = this;
		var hxxMeta = { };
		var attr = { className : tink_domspec_ClassName.ofString("fullscreen min-fullscreen flex lg:flex-row flex-col justify-center items-center")};
		var __r = [];
		var hxxMeta1 = { };
		var attr1 = { className : tink_domspec_ClassName.ofString("snap lg:w-1/2 w-full h-screen flex flex-col justify-center items-center")};
		var hxxMeta2 = { };
		var attr2 = { className : tink_domspec_ClassName.ofString("h-full w-full phone-full-width flex justify-center items-center")};
		var hxxMeta3 = { };
		var attr3 = { className : tink_domspec_ClassName.ofString("column-highlight h-full w-2/3 flex flex-col justify-center p-8")};
		var children = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
			return tink_state_Observable.get_value(_gthis.__coco_languageIndex);
		}),null);
		var children1 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
			return tink_state_Observable.get_value(_gthis.__coco_item).first;
		}),null);
		var children2 = [client_view_utilities_BasicItemView.fromHxx({ },{ languageIndex : children, item : children1})];
		var children = [coconut_vdom_Html.DIV.vnode(attr3,hxxMeta3.key,hxxMeta3.ref,children2)];
		var children1 = [coconut_vdom_Html.DIV.vnode(attr2,hxxMeta2.key,hxxMeta2.ref,children)];
		__r.push(coconut_vdom_Html.DIV.vnode(attr1,hxxMeta1.key,hxxMeta1.ref,children1));
		var hxxMeta1 = { };
		var attr1 = { className : tink_domspec_ClassName.ofString("snap lg:w-1/2 w-full h-screen flex flex-col justify-center items-center")};
		var hxxMeta2 = { };
		var attr2 = { className : tink_domspec_ClassName.ofString("h-full w-full phone-full-width flex justify-center items-center")};
		var hxxMeta3 = { };
		var attr3 = { className : tink_domspec_ClassName.ofString("column-highlight h-full w-2/3 flex flex-col justify-center p-8")};
		var children = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
			return tink_state_Observable.get_value(_gthis.__coco_languageIndex);
		}),null);
		var children1 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
			return tink_state_Observable.get_value(_gthis.__coco_item).second;
		}),null);
		var children2 = [client_view_utilities_BasicItemView.fromHxx({ },{ languageIndex : children, item : children1})];
		var children = [coconut_vdom_Html.DIV.vnode(attr3,hxxMeta3.key,hxxMeta3.ref,children2)];
		var children1 = [coconut_vdom_Html.DIV.vnode(attr2,hxxMeta2.key,hxxMeta2.ref,children)];
		__r.push(coconut_vdom_Html.DIV.vnode(attr1,hxxMeta1.key,hxxMeta1.ref,children1));
		return coconut_vdom_Html.DIV.vnode(attr,hxxMeta.key,hxxMeta.ref,__r);
	}
	,__initAttributes: function(attributes) {
		this.__coco_languageIndex.setData(attributes.languageIndex);
		this.__coco_item.setData(attributes.item);
	}
});
var client_view_experiences_ExperienceItemView = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__coco_languageIndex = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_item = new coconut_ui_internal_Slot(this,null,null);
	this.__initAttributes(__coco_data_);
	var snapshot = null;
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,null);
};
client_view_experiences_ExperienceItemView.__name__ = true;
client_view_experiences_ExperienceItemView.fromHxx = function(hxxMeta,attributes) {
	var _g = client_view_experiences_ExperienceItemView.__factory;
	var tmp;
	if(_g == null) {
		tmp = client_view_experiences_ExperienceItemView.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
			return new client_view_experiences_ExperienceItemView(__coco_data_,implicits);
		},function(v,attr) {
			v.__initAttributes(attr);
		});
	} else {
		var v = _g;
		tmp = v;
	}
	return new coconut_diffing_internal_VWidget(tmp,attributes,hxxMeta.key,hxxMeta.ref);
};
client_view_experiences_ExperienceItemView.__super__ = coconut_vdom_View;
client_view_experiences_ExperienceItemView.prototype = $extend(coconut_vdom_View.prototype,{
	render: function() {
		var _gthis = this;
		var textDivWidth = tink_state_Observable.get_value(this.__coco_item).medias != null ? "w-50" : "w-3/4";
		var path;
		var _g = tink_pure_List.get(tink_state_Observable.get_value(this.__coco_item).medias,0);
		if(_g._hx_index == 0) {
			var v = _g.v;
			path = v.link;
		} else {
			path = "";
		}
		var hxxMeta = { };
		var attr = { className : tink_domspec_ClassName.ofString("fullscreen exact-fullscreen")};
		var __r = [];
		if(tink_state_Observable.get_value(this.__coco_item).medias != null) {
			var this1 = $bind(this,this._coco_set_popup);
			var tmp = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
				return tink_state_Observable.get_value(_gthis.__coco_languageIndex);
			}),null);
			var tmp1 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
				var __r = [];
				var _g = new tink_pure_NodeIterator(tink_state_Observable.get_value(_gthis.__coco_item).medias);
				while(_g.list.length > 0) {
					var showoff = [_g.next()];
					var compute = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync((function() {
						return function() {
							return tink_state_Observable.get_value(_gthis.__coco_languageIndex);
						};
					})()),null);
					var compute1 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync((function(showoff) {
						return function() {
							return showoff[0];
						};
					})(showoff)),null);
					__r.push(client_view_utilities_ShowoffView.fromHxx({ },{ languageIndex : compute, item : compute1}));
				}
				return tink_pure_List.fromArray(__r);
			}),null);
			__r.push(client_view_utilities_FullscreenPopUp.fromHxx({ ref : this1},{ languageIndex : tmp, subelements : tmp1}));
		}
		var hxxMeta1 = { };
		var attr1 = { className : tink_domspec_ClassName.ofString("experience-item h-full w-full flex " + (tink_state_Observable.get_value(this.__coco_item).medias != null ? "" : "justify-center"))};
		var __r1 = [];
		var hxxMeta2 = { };
		var attr2 = { className : tink_domspec_ClassName.ofString("h-full " + textDivWidth + " phone-full-width flex justify-center items-center")};
		var hxxMeta3 = { };
		var attr3 = { className : tink_domspec_ClassName.ofString("column-highlight h-full w-2/3 flex flex-col justify-center p-8")};
		var children = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
			return tink_state_Observable.get_value(_gthis.__coco_languageIndex);
		}),null);
		var children1 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
			return tink_state_Observable.get_value(_gthis.__coco_item).value;
		}),null);
		var children2 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
			if(tink_state_Observable.get_value(_gthis.__coco_item).medias != null) {
				var hxxMeta = { };
				var _g = $bind(_gthis,_gthis.openPopup);
				var attr = function() {
					_g();
				};
				var attr1 = { className : tink_domspec_ClassName.ofString("mb-3 p-3 interactible square-highlight w-2/3 flex-center relative overflow-hidden"), onclick : attr};
				var __r = [];
				var hxxMeta1 = { };
				var attr = { className : tink_domspec_ClassName.ofString("w-full h-full text-center font-header font-semibold uppercase z-10 relative")};
				var this1 = client_data_Medias.value.header;
				var languageIndex = tink_state_Observable.get_value(_gthis.__coco_languageIndex);
				var s;
				switch(this1._hx_index) {
				case 0:
					var value = this1.value;
					s = value;
					break;
				case 1:
					var values = this1.values;
					if(languageIndex < 0 || languageIndex >= (values == null ? 0 : values.length)) {
						console.log("src/client/model/util/LocalizedString.hx:32:","languageIndex should be between 0 and length, here: " + languageIndex);
						s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,0));
					} else {
						s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,languageIndex));
					}
					break;
				}
				var children = s == null ? null : coconut_vdom__$Html_Text.inst.vnode(s,null,null,null);
				__r.push(coconut_vdom_Html.P.vnode(attr,hxxMeta1.key,hxxMeta1.ref,[children]));
				var hxxMeta1 = { };
				__r.push(coconut_vdom_Html.IMG.vnode({ src : path, className : tink_domspec_ClassName.ofString("w-full h-auto absolute-center filter blur scale-110")},hxxMeta1.key,hxxMeta1.ref));
				return coconut_vdom_Html.DIV.vnode(attr1,hxxMeta.key,hxxMeta.ref,__r);
			} else {
				return null;
			}
		}),null);
		var children3 = [client_view_utilities_BasicItemView.fromHxx({ },{ languageIndex : children, item : children1, extraLink : children2})];
		var children = [coconut_vdom_Html.DIV.vnode(attr3,hxxMeta3.key,hxxMeta3.ref,children3)];
		__r1.push(coconut_vdom_Html.DIV.vnode(attr2,hxxMeta2.key,hxxMeta2.ref,children));
		if(tink_state_Observable.get_value(this.__coco_item).medias != null) {
			var hxxMeta2 = { };
			var attr2 = { className : tink_domspec_ClassName.ofString("phone-invisible h-full w-50 overflow-hidden experience-item-image relative")};
			var __r2 = [];
			var hxxMeta3 = { };
			var attr3 = { className : tink_domspec_ClassName.ofString("h-full w-full flex justify-center")};
			var hxxMeta4 = { };
			var attr4 = { className : tink_domspec_ClassName.ofString("overflow-hidden")};
			var hxxMeta5 = { };
			var children = [coconut_vdom_Html.IMG.vnode({ src : path, className : tink_domspec_ClassName.ofString("img-full filter blur transform scale-110")},hxxMeta5.key,hxxMeta5.ref)];
			var children1 = [coconut_vdom_Html.DIV.vnode(attr4,hxxMeta4.key,hxxMeta4.ref,children)];
			__r2.push(coconut_vdom_Html.DIV.vnode(attr3,hxxMeta3.key,hxxMeta3.ref,children1));
			var hxxMeta3 = { };
			var attr3 = { className : tink_domspec_ClassName.ofString("absolute-center w-1/3")};
			var hxxMeta4 = { };
			var _g = $bind(this,this.openPopup);
			var attr4 = function() {
				_g();
			};
			var attr5 = { className : tink_domspec_ClassName.ofString("p-2 interactible solid-square-highlight flex justify-center items-center"), onclick : attr4};
			var hxxMeta5 = { };
			var attr4 = { className : tink_domspec_ClassName.ofString("font-header uppercase")};
			var this1 = client_data_Medias.value.header;
			var languageIndex = tink_state_Observable.get_value(this.__coco_languageIndex);
			var s;
			switch(this1._hx_index) {
			case 0:
				var value = this1.value;
				s = value;
				break;
			case 1:
				var values = this1.values;
				if(languageIndex < 0 || languageIndex >= (values == null ? 0 : values.length)) {
					console.log("src/client/model/util/LocalizedString.hx:32:","languageIndex should be between 0 and length, here: " + languageIndex);
					s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,0));
				} else {
					s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,languageIndex));
				}
				break;
			}
			var children = s == null ? null : coconut_vdom__$Html_Text.inst.vnode(s,null,null,null);
			var children1 = [coconut_vdom_Html.P.vnode(attr4,hxxMeta5.key,hxxMeta5.ref,[children])];
			var children = [coconut_vdom_Html.DIV.vnode(attr5,hxxMeta4.key,hxxMeta4.ref,children1)];
			__r2.push(coconut_vdom_Html.DIV.vnode(attr3,hxxMeta3.key,hxxMeta3.ref,children));
			__r1.push(coconut_vdom_Html.DIV.vnode(attr2,hxxMeta2.key,hxxMeta2.ref,__r2));
		}
		__r.push(coconut_vdom_Html.DIV.vnode(attr1,hxxMeta1.key,hxxMeta1.ref,__r1));
		return coconut_vdom_Html.DIV.vnode(attr,hxxMeta.key,hxxMeta.ref,__r);
	}
	,openPopup: function() {
		this.popup.setOpened(true);
	}
	,_coco_set_popup: function(param) {
		this.popup = param;
	}
	,__initAttributes: function(attributes) {
		this.__coco_languageIndex.setData(attributes.languageIndex);
		this.__coco_item.setData(attributes.item);
	}
});
var client_view_experiences_ExperiencesView = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__coco_languageIndex = new coconut_ui_internal_Slot(this,null,null);
	this.__initAttributes(__coco_data_);
	var snapshot = null;
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,function(firstTime) {
		if(firstTime) {
			_gthis.viewDidMount();
		}
	});
};
client_view_experiences_ExperiencesView.__name__ = true;
client_view_experiences_ExperiencesView.fromHxx = function(hxxMeta,attributes) {
	var _g = client_view_experiences_ExperiencesView.__factory;
	var tmp;
	if(_g == null) {
		tmp = client_view_experiences_ExperiencesView.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
			return new client_view_experiences_ExperiencesView(__coco_data_,implicits);
		},function(v,attr) {
			v.__initAttributes(attr);
		});
	} else {
		var v = _g;
		tmp = v;
	}
	return new coconut_diffing_internal_VWidget(tmp,attributes,hxxMeta.key,hxxMeta.ref);
};
client_view_experiences_ExperiencesView.__super__ = coconut_vdom_View;
client_view_experiences_ExperiencesView.prototype = $extend(coconut_vdom_View.prototype,{
	viewDidMount: function() {
		$(".experience-item").each(function(index,element) {
			if((index & 1) == 1) {
				element.className += " flex-row-reverse";
			} else {
				element.className += " flex-row";
			}
		});
	}
	,render: function() {
		var _gthis = this;
		var hxxMeta = { };
		var __r = [];
		var hxxMeta1 = { };
		var attr = { className : tink_domspec_ClassName.ofString("fullscreen exact-fullscreen")};
		var __r1 = [];
		var hxxMeta2 = { };
		var attr1 = { className : tink_domspec_ClassName.ofString("h-full w-full flex justify-center items-center")};
		var hxxMeta3 = { };
		var attr2 = { className : tink_domspec_ClassName.ofString("text-tertiary")};
		var this1 = client_data_Experiences.value.header;
		var languageIndex = tink_state_Observable.get_value(this.__coco_languageIndex);
		var s;
		switch(this1._hx_index) {
		case 0:
			var value = this1.value;
			s = value;
			break;
		case 1:
			var values = this1.values;
			if(languageIndex < 0 || languageIndex >= (values == null ? 0 : values.length)) {
				console.log("src/client/model/util/LocalizedString.hx:32:","languageIndex should be between 0 and length, here: " + languageIndex);
				s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,0));
			} else {
				s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,languageIndex));
			}
			break;
		}
		var children = s == null ? null : coconut_vdom__$Html_Text.inst.vnode(s,null,null,null);
		var children1 = [coconut_vdom_Html.H1.vnode(attr2,hxxMeta3.key,hxxMeta3.ref,[children])];
		__r1.push(coconut_vdom_Html.DIV.vnode(attr1,hxxMeta2.key,hxxMeta2.ref,children1));
		__r1.push(client_view_utilities_scroll_ScrollArrow.fromHxx({ },{ }));
		__r.push(coconut_vdom_Html.DIV.vnode(attr,hxxMeta1.key,hxxMeta1.ref,__r1));
		var _g = new tink_pure_NodeIterator(client_data_Experiences.value.items);
		while(_g.list.length > 0) {
			var item = _g.next();
			switch(item._hx_index) {
			case 0:
				var simple = [item.v];
				var tmp = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync((function() {
					return function() {
						return tink_state_Observable.get_value(_gthis.__coco_languageIndex);
					};
				})()),null);
				var tmp1 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync((function(simple) {
					return function() {
						return simple[0];
					};
				})(simple)),null);
				__r.push(client_view_experiences_ExperienceItemView.fromHxx({ },{ languageIndex : tmp, item : tmp1}));
				break;
			case 1:
				var pair = [item.v];
				var tmp2 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync((function() {
					return function() {
						return tink_state_Observable.get_value(_gthis.__coco_languageIndex);
					};
				})()),null);
				var tmp3 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync((function(pair) {
					return function() {
						return pair[0];
					};
				})(pair)),null);
				__r.push(client_view_experiences_ExperienceItemPairView.fromHxx({ },{ languageIndex : tmp2, item : tmp3}));
				break;
			}
		}
		return coconut_vdom_Html.DIV.vnode({ },hxxMeta.key,hxxMeta.ref,__r);
	}
	,__initAttributes: function(attributes) {
		this.__coco_languageIndex.setData(attributes.languageIndex);
	}
});
var client_view_formations_FormationItemView = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__coco_languageIndex = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_item = new coconut_ui_internal_Slot(this,null,null);
	this.__initAttributes(__coco_data_);
	var snapshot = null;
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,null);
};
client_view_formations_FormationItemView.__name__ = true;
client_view_formations_FormationItemView.fromHxx = function(hxxMeta,attributes) {
	var _g = client_view_formations_FormationItemView.__factory;
	var tmp;
	if(_g == null) {
		tmp = client_view_formations_FormationItemView.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
			return new client_view_formations_FormationItemView(__coco_data_,implicits);
		},function(v,attr) {
			v.__initAttributes(attr);
		});
	} else {
		var v = _g;
		tmp = v;
	}
	return new coconut_diffing_internal_VWidget(tmp,attributes,hxxMeta.key,hxxMeta.ref);
};
client_view_formations_FormationItemView.__super__ = coconut_vdom_View;
client_view_formations_FormationItemView.prototype = $extend(coconut_vdom_View.prototype,{
	render: function() {
		var _gthis = this;
		var hxxMeta = { };
		var attr = { className : tink_domspec_ClassName.ofString("lg:h-screen w-full flex justify-center items-center p-8")};
		var hxxMeta1 = { };
		var attr1 = { className : tink_domspec_ClassName.ofString("square-highlight w-full lg:h-3/4 sm:h-full flex flex-col justify-center p-8 m-8")};
		var children = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
			return tink_state_Observable.get_value(_gthis.__coco_item);
		}),null);
		var children1 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
			return tink_state_Observable.get_value(_gthis.__coco_languageIndex);
		}),null);
		var children2 = [client_view_utilities_BasicItemView.fromHxx({ },{ item : children, languageIndex : children1})];
		var children = [coconut_vdom_Html.DIV.vnode(attr1,hxxMeta1.key,hxxMeta1.ref,children2)];
		return coconut_vdom_Html.DIV.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
	}
	,__initAttributes: function(attributes) {
		this.__coco_languageIndex.setData(attributes.languageIndex);
		this.__coco_item.setData(attributes.item);
	}
});
var client_view_formations_FormationsView = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__coco_languageIndex = new coconut_ui_internal_Slot(this,null,null);
	this.__initAttributes(__coco_data_);
	var snapshot = null;
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,null);
};
client_view_formations_FormationsView.__name__ = true;
client_view_formations_FormationsView.fromHxx = function(hxxMeta,attributes) {
	var _g = client_view_formations_FormationsView.__factory;
	var tmp;
	if(_g == null) {
		tmp = client_view_formations_FormationsView.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
			return new client_view_formations_FormationsView(__coco_data_,implicits);
		},function(v,attr) {
			v.__initAttributes(attr);
		});
	} else {
		var v = _g;
		tmp = v;
	}
	return new coconut_diffing_internal_VWidget(tmp,attributes,hxxMeta.key,hxxMeta.ref);
};
client_view_formations_FormationsView.__super__ = coconut_vdom_View;
client_view_formations_FormationsView.prototype = $extend(coconut_vdom_View.prototype,{
	render: function() {
		var _gthis = this;
		var this1 = client_data_Formation.value.items;
		var groupCount = this1 == null ? 0 : this1.length;
		var hxxMeta = { };
		var __r = [];
		var hxxMeta1 = { };
		var attr = { className : tink_domspec_ClassName.ofString("fullscreen exact-fullscreen")};
		var __r1 = [];
		var hxxMeta2 = { };
		var attr1 = { className : tink_domspec_ClassName.ofString("h-full w-full flex justify-center items-center")};
		var hxxMeta3 = { };
		var attr2 = { className : tink_domspec_ClassName.ofString("text-tertiary")};
		var this1 = client_data_Formation.value.header;
		var languageIndex = tink_state_Observable.get_value(this.__coco_languageIndex);
		var s;
		switch(this1._hx_index) {
		case 0:
			var value = this1.value;
			s = value;
			break;
		case 1:
			var values = this1.values;
			if(languageIndex < 0 || languageIndex >= (values == null ? 0 : values.length)) {
				console.log("src/client/model/util/LocalizedString.hx:32:","languageIndex should be between 0 and length, here: " + languageIndex);
				s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,0));
			} else {
				s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,languageIndex));
			}
			break;
		}
		var children = s == null ? null : coconut_vdom__$Html_Text.inst.vnode(s,null,null,null);
		var children1 = [coconut_vdom_Html.H1.vnode(attr2,hxxMeta3.key,hxxMeta3.ref,[children])];
		__r1.push(coconut_vdom_Html.DIV.vnode(attr1,hxxMeta2.key,hxxMeta2.ref,children1));
		__r1.push(client_view_utilities_scroll_ScrollArrow.fromHxx({ },{ }));
		__r.push(coconut_vdom_Html.DIV.vnode(attr,hxxMeta1.key,hxxMeta1.ref,__r1));
		var hxxMeta1 = { };
		var attr = { className : tink_domspec_ClassName.ofString("fullscreen min-fullscreen flex lg:flex-row flex-col justify-center items-center")};
		var __r1 = [];
		var _g = new tink_pure_NodeIterator(client_data_Formation.value.items);
		while(_g.list.length > 0) {
			var item = [_g.next()];
			var hxxMeta2 = { };
			var attr1 = { className : tink_domspec_ClassName.ofString("snap lg:w-1/" + groupCount + " w-full h-screen flex flex-col justify-center items-center")};
			var children = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync((function() {
				return function() {
					return tink_state_Observable.get_value(_gthis.__coco_languageIndex);
				};
			})()),null);
			var children1 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync((function(item) {
				return function() {
					return item[0];
				};
			})(item)),null);
			var children2 = [client_view_formations_FormationItemView.fromHxx({ },{ languageIndex : children, item : children1})];
			__r1.push(coconut_vdom_Html.DIV.vnode(attr1,hxxMeta2.key,hxxMeta2.ref,children2));
		}
		__r.push(coconut_vdom_Html.DIV.vnode(attr,hxxMeta1.key,hxxMeta1.ref,__r1));
		return coconut_vdom_Html.DIV.vnode({ },hxxMeta.key,hxxMeta.ref,__r);
	}
	,__initAttributes: function(attributes) {
		this.__coco_languageIndex.setData(attributes.languageIndex);
	}
});
var client_view_utilities_BasicItemView = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__coco_languageIndex = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_item = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_extraLink = new coconut_ui_internal_Slot(this,null,null);
	this.__initAttributes(__coco_data_);
	var snapshot = null;
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,null);
};
client_view_utilities_BasicItemView.__name__ = true;
client_view_utilities_BasicItemView.fromHxx = function(hxxMeta,attributes) {
	var _g = client_view_utilities_BasicItemView.__factory;
	var tmp;
	if(_g == null) {
		tmp = client_view_utilities_BasicItemView.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
			return new client_view_utilities_BasicItemView(__coco_data_,implicits);
		},function(v,attr) {
			v.__initAttributes(attr);
		});
	} else {
		var v = _g;
		tmp = v;
	}
	return new coconut_diffing_internal_VWidget(tmp,attributes,hxxMeta.key,hxxMeta.ref);
};
client_view_utilities_BasicItemView.__super__ = coconut_vdom_View;
client_view_utilities_BasicItemView.prototype = $extend(coconut_vdom_View.prototype,{
	render: function() {
		var _gthis = this;
		var hxxMeta = { };
		var attr = { className : tink_domspec_ClassName.ofString("w-full")};
		var __r = [];
		var hxxMeta1 = { };
		var attr1 = { className : tink_domspec_ClassName.ofString("w-full flex mb-0.5")};
		var __r1 = [];
		var hxxMeta2 = { };
		var attr2 = { className : tink_domspec_ClassName.ofString("flex-grow flex flex-col")};
		var hxxMeta3 = { };
		var attr3 = { className : tink_domspec_ClassName.ofString("flex-grow")};
		var this1 = tink_state_Observable.get_value(this.__coco_item).header;
		var languageIndex = tink_state_Observable.get_value(this.__coco_languageIndex);
		var s;
		switch(this1._hx_index) {
		case 0:
			var value = this1.value;
			s = value;
			break;
		case 1:
			var values = this1.values;
			if(languageIndex < 0 || languageIndex >= (values == null ? 0 : values.length)) {
				console.log("src/client/model/util/LocalizedString.hx:32:","languageIndex should be between 0 and length, here: " + languageIndex);
				s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,0));
			} else {
				s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,languageIndex));
			}
			break;
		}
		var children = s == null ? null : coconut_vdom__$Html_Text.inst.vnode(s,null,null,null);
		var children1 = [coconut_vdom_Html.H4.vnode(attr3,hxxMeta3.key,hxxMeta3.ref,[children])];
		__r1.push(coconut_vdom_Html.DIV.vnode(attr2,hxxMeta2.key,hxxMeta2.ref,children1));
		var hxxMeta2 = { };
		var attr2 = { className : tink_domspec_ClassName.ofString("w-auto")};
		var __r2 = [];
		var this1 = tink_state_Observable.get_value(this.__coco_item).dates.start;
		var languageIndex = tink_state_Observable.get_value(this.__coco_languageIndex);
		var s;
		switch(this1._hx_index) {
		case 0:
			var year = this1.year;
			s = Std.string(year);
			break;
		case 1:
			var year = this1.year;
			switch(year._hx_index) {
			case 0:
				var value = year.value;
				s = value;
				break;
			case 1:
				var values = year.values;
				if(languageIndex < 0 || languageIndex >= (values == null ? 0 : values.length)) {
					console.log("src/client/model/util/LocalizedString.hx:32:","languageIndex should be between 0 and length, here: " + languageIndex);
					s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,0));
				} else {
					s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,languageIndex));
				}
				break;
			}
			break;
		}
		__r2.push(s == null ? null : coconut_vdom__$Html_Text.inst.vnode(s,null,null,null));
		__r2.push(coconut_vdom__$Html_Text.inst.vnode(" - ",null,null,null));
		var this1 = tink_state_Observable.get_value(this.__coco_item).dates.end;
		var languageIndex = tink_state_Observable.get_value(this.__coco_languageIndex);
		var s;
		switch(this1._hx_index) {
		case 0:
			var year = this1.year;
			s = Std.string(year);
			break;
		case 1:
			var year = this1.year;
			switch(year._hx_index) {
			case 0:
				var value = year.value;
				s = value;
				break;
			case 1:
				var values = year.values;
				if(languageIndex < 0 || languageIndex >= (values == null ? 0 : values.length)) {
					console.log("src/client/model/util/LocalizedString.hx:32:","languageIndex should be between 0 and length, here: " + languageIndex);
					s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,0));
				} else {
					s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,languageIndex));
				}
				break;
			}
			break;
		}
		__r2.push(s == null ? null : coconut_vdom__$Html_Text.inst.vnode(s,null,null,null));
		__r1.push(coconut_vdom_Html.H4.vnode(attr2,hxxMeta2.key,hxxMeta2.ref,__r2));
		__r.push(coconut_vdom_Html.DIV.vnode(attr1,hxxMeta1.key,hxxMeta1.ref,__r1));
		var hxxMeta1 = { };
		var attr1 = { className : tink_domspec_ClassName.ofString("mb-3")};
		var __r1 = [];
		var _g = new tink_pure_NodeIterator(tink_state_Observable.get_value(this.__coco_item).subheaders);
		while(_g.list.length > 0) {
			var header = _g.next();
			var hxxMeta2 = { };
			var attr2 = { className : tink_domspec_ClassName.ofString("w-full mb-0.5")};
			var languageIndex = tink_state_Observable.get_value(this.__coco_languageIndex);
			var s;
			switch(header._hx_index) {
			case 0:
				var value = header.value;
				s = value;
				break;
			case 1:
				var values = header.values;
				if(languageIndex < 0 || languageIndex >= (values == null ? 0 : values.length)) {
					console.log("src/client/model/util/LocalizedString.hx:32:","languageIndex should be between 0 and length, here: " + languageIndex);
					s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,0));
				} else {
					s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,languageIndex));
				}
				break;
			}
			var children = s == null ? null : coconut_vdom__$Html_Text.inst.vnode(s,null,null,null);
			__r1.push(coconut_vdom_Html.H5.vnode(attr2,hxxMeta2.key,hxxMeta2.ref,[children]));
		}
		__r.push(coconut_vdom_Html.DIV.vnode(attr1,hxxMeta1.key,hxxMeta1.ref,__r1));
		if(tink_state_Observable.get_value(this.__coco_item).place != null) {
			var hxxMeta1 = { };
			var attr1 = { className : tink_domspec_ClassName.ofString("ml-8 w-full mb-3")};
			var this1 = tink_state_Observable.get_value(this.__coco_item).place;
			var languageIndex = tink_state_Observable.get_value(this.__coco_languageIndex);
			var s;
			switch(this1._hx_index) {
			case 0:
				var value = this1.value;
				s = value;
				break;
			case 1:
				var values = this1.values;
				if(languageIndex < 0 || languageIndex >= (values == null ? 0 : values.length)) {
					console.log("src/client/model/util/LocalizedString.hx:32:","languageIndex should be between 0 and length, here: " + languageIndex);
					s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,0));
				} else {
					s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,languageIndex));
				}
				break;
			}
			var children = s == null ? null : coconut_vdom__$Html_Text.inst.vnode(s,null,null,null);
			__r.push(coconut_vdom_Html.H5.vnode(attr1,hxxMeta1.key,hxxMeta1.ref,[children]));
		}
		var hxxMeta1 = { };
		var attr1 = { className : tink_domspec_ClassName.ofString("w-full text-justify")};
		var __r1 = [];
		var _g = new tink_pure_NodeIterator(tink_state_Observable.get_value(this.__coco_item).content);
		while(_g.list.length > 0) {
			var item = [_g.next()];
			var tmp = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync((function() {
				return function() {
					return tink_state_Observable.get_value(_gthis.__coco_languageIndex);
				};
			})()),null);
			var tmp1 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync((function(item) {
				return function() {
					return item[0];
				};
			})(item)),null);
			__r1.push(client_view_utilities_TextDataView.fromHxx({ },{ languageIndex : tmp, item : tmp1}));
		}
		__r.push(coconut_vdom_Html.DIV.vnode(attr1,hxxMeta1.key,hxxMeta1.ref,__r1));
		if(tink_state_Observable.get_value(this.__coco_item).links != null) {
			var hxxMeta1 = { };
			var attr1 = { className : tink_domspec_ClassName.ofString("mt-5 flex flex-column justify-center items-center w-full")};
			var __r1 = [];
			var _g = new tink_pure_NodeIterator(tink_state_Observable.get_value(this.__coco_item).links);
			while(_g.list.length > 0) {
				var link = _g.next();
				var hxxMeta2 = { };
				var attr2 = { target : "_blank", href : link.link, className : tink_domspec_ClassName.ofString("mb-3 p-2 no-decoration interactible square-highlight w-2/3 text-center flex flex-column justify-center items-center")};
				var hxxMeta3 = { };
				var attr3 = { className : tink_domspec_ClassName.ofString("no-decoration text-base")};
				var this1 = link.name;
				var languageIndex = tink_state_Observable.get_value(this.__coco_languageIndex);
				var s;
				switch(this1._hx_index) {
				case 0:
					var value = this1.value;
					s = value;
					break;
				case 1:
					var values = this1.values;
					if(languageIndex < 0 || languageIndex >= (values == null ? 0 : values.length)) {
						console.log("src/client/model/util/LocalizedString.hx:32:","languageIndex should be between 0 and length, here: " + languageIndex);
						s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,0));
					} else {
						s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,languageIndex));
					}
					break;
				}
				var children = s == null ? null : coconut_vdom__$Html_Text.inst.vnode(s,null,null,null);
				var children1 = [coconut_vdom_Html.P.vnode(attr3,hxxMeta3.key,hxxMeta3.ref,[children])];
				__r1.push(coconut_vdom_Html.A.vnode(attr2,hxxMeta2.key,hxxMeta2.ref,children1));
			}
			__r1.push(tink_state_Observable.get_value(this.__coco_extraLink));
			__r.push(coconut_vdom_Html.DIV.vnode(attr1,hxxMeta1.key,hxxMeta1.ref,__r1));
		}
		return coconut_vdom_Html.DIV.vnode(attr,hxxMeta.key,hxxMeta.ref,__r);
	}
	,__initAttributes: function(attributes) {
		this.__coco_languageIndex.setData(attributes.languageIndex);
		this.__coco_item.setData(attributes.item);
		this.__coco_extraLink.setData(attributes.extraLink);
	}
});
var client_view_utilities_FullscreenPopUp = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__coco_languageIndex = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_subelements = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_opened = tink_state_State._new(false,null);
	this.__coco_currentIndex = tink_state_State._new(0,null);
	this.__initAttributes(__coco_data_);
	var snapshot = null;
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,null);
};
client_view_utilities_FullscreenPopUp.__name__ = true;
client_view_utilities_FullscreenPopUp.fromHxx = function(hxxMeta,attributes) {
	var _g = client_view_utilities_FullscreenPopUp.__factory;
	var tmp;
	if(_g == null) {
		tmp = client_view_utilities_FullscreenPopUp.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
			return new client_view_utilities_FullscreenPopUp(__coco_data_,implicits);
		},function(v,attr) {
			v.__initAttributes(attr);
		});
	} else {
		var v = _g;
		tmp = v;
	}
	return new coconut_diffing_internal_VWidget(tmp,attributes,hxxMeta.key,hxxMeta.ref);
};
client_view_utilities_FullscreenPopUp.__super__ = coconut_vdom_View;
client_view_utilities_FullscreenPopUp.prototype = $extend(coconut_vdom_View.prototype,{
	render: function() {
		var elementToDisplay;
		var _g = tink_pure_List.get(tink_state_Observable.get_value(this.__coco_subelements),tink_state_State.get_value(this.__coco_currentIndex));
		if(_g._hx_index == 0) {
			var v = _g.v;
			elementToDisplay = v;
		} else {
			elementToDisplay = null;
		}
		var hxxMeta = { };
		var attr = { className : tink_domspec_ClassName.ofString("" + (tink_state_State.get_value(this.__coco_opened) ? "" : "hidden") + " fixed inset-8 top-16 popup")};
		var __r = [];
		var hxxMeta1 = { };
		var _g = $bind(this,this.setOpened);
		var newState = false;
		var attr1 = function() {
			_g(newState);
		};
		var attr2 = { className : tink_domspec_ClassName.ofString("absolute top-2 right-2 interactible h-16 w-16"), onclick : attr1};
		var hxxMeta2 = { };
		var attr1 = { className : tink_domspec_ClassName.ofString("material-icons absolute top-0 right-0")};
		var children = [coconut_vdom__$Html_Text.inst.vnode("close",null,null,null)];
		var children1 = [coconut_vdom_Html.SPAN.vnode(attr1,hxxMeta2.key,hxxMeta2.ref,children)];
		__r.push(coconut_vdom_Html.DIV.vnode(attr2,hxxMeta1.key,hxxMeta1.ref,children1));
		var this1 = tink_state_Observable.get_value(this.__coco_subelements);
		if((this1 == null ? 0 : this1.length) > 1) {
			var hxxMeta1 = { };
			var _g1 = $bind(this,this.onIndexChange);
			var delta = -1;
			var attr1 = function() {
				_g1(delta);
			};
			var attr2 = { className : tink_domspec_ClassName.ofString("material-icons popup-arrow left interactible"), onclick : attr1};
			var children = [coconut_vdom__$Html_Text.inst.vnode("arrow_back_ios",null,null,null)];
			__r.push(coconut_vdom_Html.SPAN.vnode(attr2,hxxMeta1.key,hxxMeta1.ref,children));
			var hxxMeta1 = { };
			var _g2 = $bind(this,this.onIndexChange);
			var delta1 = 1;
			var attr1 = function() {
				_g2(delta1);
			};
			var attr2 = { className : tink_domspec_ClassName.ofString("material-icons popup-arrow right interactible"), onclick : attr1};
			var children = [coconut_vdom__$Html_Text.inst.vnode("arrow_forward_ios",null,null,null)];
			__r.push(coconut_vdom_Html.SPAN.vnode(attr2,hxxMeta1.key,hxxMeta1.ref,children));
		}
		var hxxMeta1 = { };
		__r.push(coconut_vdom_Html.DIV.vnode({ className : tink_domspec_ClassName.ofString("absolute inset-8")},hxxMeta1.key,hxxMeta1.ref,[elementToDisplay]));
		return coconut_vdom_Html.DIV.vnode(attr,hxxMeta.key,hxxMeta.ref,__r);
	}
	,onIndexChange: function(delta) {
		var param = tink_state_State.get_value(this.__coco_currentIndex) + delta;
		this.__coco_currentIndex.set(param);
		if(tink_state_State.get_value(this.__coco_currentIndex) < 0) {
			var this1 = tink_state_Observable.get_value(this.__coco_subelements);
			var param = (this1 == null ? 0 : this1.length) - 1;
			this.__coco_currentIndex.set(param);
		} else {
			var tmp = tink_state_State.get_value(this.__coco_currentIndex);
			var this1 = tink_state_Observable.get_value(this.__coco_subelements);
			if(tmp >= (this1 == null ? 0 : this1.length)) {
				this.__coco_currentIndex.set(0);
			}
		}
	}
	,setOpened: function(newState) {
		this.__coco_opened.set(newState);
		$("body").css({ "overflow" : newState ? "hidden" : "visible"});
	}
	,__initAttributes: function(attributes) {
		this.__coco_languageIndex.setData(attributes.languageIndex);
		this.__coco_subelements.setData(attributes.subelements);
	}
});
var client_view_utilities_ShowoffView = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__coco_languageIndex = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_item = new coconut_ui_internal_Slot(this,null,null);
	this.__initAttributes(__coco_data_);
	var snapshot = null;
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,null);
};
client_view_utilities_ShowoffView.__name__ = true;
client_view_utilities_ShowoffView.fromHxx = function(hxxMeta,attributes) {
	var _g = client_view_utilities_ShowoffView.__factory;
	var tmp;
	if(_g == null) {
		tmp = client_view_utilities_ShowoffView.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
			return new client_view_utilities_ShowoffView(__coco_data_,implicits);
		},function(v,attr) {
			v.__initAttributes(attr);
		});
	} else {
		var v = _g;
		tmp = v;
	}
	return new coconut_diffing_internal_VWidget(tmp,attributes,hxxMeta.key,hxxMeta.ref);
};
client_view_utilities_ShowoffView.__super__ = coconut_vdom_View;
client_view_utilities_ShowoffView.prototype = $extend(coconut_vdom_View.prototype,{
	render: function() {
		var _gthis = this;
		var hxxMeta = { };
		var attr = { className : tink_domspec_ClassName.ofString("w-full h-full flex flex-column justify-center content-center ")};
		var __r = [];
		if(tink_state_Observable.get_value(this.__coco_item).title != null) {
			var hxxMeta1 = { };
			var attr1 = { className : tink_domspec_ClassName.ofString("w-full text-center mb-4")};
			var this1 = tink_state_Observable.get_value(this.__coco_item).title;
			var languageIndex = tink_state_Observable.get_value(this.__coco_languageIndex);
			var s;
			switch(this1._hx_index) {
			case 0:
				var value = this1.value;
				s = value;
				break;
			case 1:
				var values = this1.values;
				if(languageIndex < 0 || languageIndex >= (values == null ? 0 : values.length)) {
					console.log("src/client/model/util/LocalizedString.hx:32:","languageIndex should be between 0 and length, here: " + languageIndex);
					s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,0));
				} else {
					s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,languageIndex));
				}
				break;
			}
			var children = s == null ? null : coconut_vdom__$Html_Text.inst.vnode(s,null,null,null);
			__r.push(coconut_vdom_Html.H4.vnode(attr1,hxxMeta1.key,hxxMeta1.ref,[children]));
		}
		var _g = tink_state_Observable.get_value(this.__coco_item).type;
		if(_g == null) {
			var hxxMeta1 = { };
			__r.push(coconut_vdom_Html.IMG.vnode({ src : tink_state_Observable.get_value(this.__coco_item).link, className : tink_domspec_ClassName.ofString("w-auto max-h-3/4 object-contain mb-4")},hxxMeta1.key,hxxMeta1.ref));
		} else if(_g._hx_index == 1) {
			var hxxMeta1 = { };
			__r.push(coconut_vdom_Html.IFRAME.vnode({ src : tink_state_Observable.get_value(this.__coco_item).link, className : tink_domspec_ClassName.ofString("mb-4"), width : 560, height : 315},hxxMeta1.key,hxxMeta1.ref,null));
		} else {
			var hxxMeta1 = { };
			__r.push(coconut_vdom_Html.IMG.vnode({ src : tink_state_Observable.get_value(this.__coco_item).link, className : tink_domspec_ClassName.ofString("w-auto max-h-3/4 object-contain mb-4")},hxxMeta1.key,hxxMeta1.ref));
		}
		if(tink_state_Observable.get_value(this.__coco_item).description != null) {
			var hxxMeta1 = { };
			var attr1 = { className : tink_domspec_ClassName.ofString("h-40 min-width-50 text-justify overflow-y-scroll no-scrollbar")};
			var children = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
				return tink_state_Observable.get_value(_gthis.__coco_languageIndex);
			}),null);
			var children1 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
				return tink_state_Observable.get_value(_gthis.__coco_item).description;
			}),null);
			var children2 = [client_view_utilities_TextDataView.fromHxx({ },{ languageIndex : children, item : children1})];
			__r.push(coconut_vdom_Html.DIV.vnode(attr1,hxxMeta1.key,hxxMeta1.ref,children2));
		}
		return coconut_vdom_Html.DIV.vnode(attr,hxxMeta.key,hxxMeta.ref,__r);
	}
	,__initAttributes: function(attributes) {
		this.__coco_languageIndex.setData(attributes.languageIndex);
		this.__coco_item.setData(attributes.item);
	}
});
var client_view_utilities_TextDataView = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__coco_languageIndex = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_item = new coconut_ui_internal_Slot(this,null,null);
	this.__initAttributes(__coco_data_);
	var snapshot = null;
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,null);
};
client_view_utilities_TextDataView.__name__ = true;
client_view_utilities_TextDataView.fromHxx = function(hxxMeta,attributes) {
	var _g = client_view_utilities_TextDataView.__factory;
	var tmp;
	if(_g == null) {
		tmp = client_view_utilities_TextDataView.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
			return new client_view_utilities_TextDataView(__coco_data_,implicits);
		},function(v,attr) {
			v.__initAttributes(attr);
		});
	} else {
		var v = _g;
		tmp = v;
	}
	return new coconut_diffing_internal_VWidget(tmp,attributes,hxxMeta.key,hxxMeta.ref);
};
client_view_utilities_TextDataView.__super__ = coconut_vdom_View;
client_view_utilities_TextDataView.prototype = $extend(coconut_vdom_View.prototype,{
	render: function() {
		var _g = tink_state_Observable.get_value(this.__coco_item);
		switch(_g._hx_index) {
		case 0:
			var text = _g.text;
			var hxxMeta = { };
			var attr = { className : tink_domspec_ClassName.ofString("mb-2")};
			var languageIndex = tink_state_Observable.get_value(this.__coco_languageIndex);
			var s;
			switch(text._hx_index) {
			case 0:
				var value = text.value;
				s = value;
				break;
			case 1:
				var values = text.values;
				if(languageIndex < 0 || languageIndex >= (values == null ? 0 : values.length)) {
					console.log("src/client/model/util/LocalizedString.hx:32:","languageIndex should be between 0 and length, here: " + languageIndex);
					s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,0));
				} else {
					s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,languageIndex));
				}
				break;
			}
			var children = s == null ? null : coconut_vdom__$Html_Text.inst.vnode(s,null,null,null);
			return coconut_vdom_Html.P.vnode(attr,hxxMeta.key,hxxMeta.ref,[children]);
		case 1:
			var texts = _g.texts;
			var hxxMeta = { };
			var __r = [];
			var _g = new tink_pure_NodeIterator(texts);
			while(_g.list.length > 0) {
				var text = _g.next();
				var hxxMeta1 = { };
				var languageIndex = tink_state_Observable.get_value(this.__coco_languageIndex);
				var s;
				switch(text._hx_index) {
				case 0:
					var value = text.value;
					s = value;
					break;
				case 1:
					var values = text.values;
					if(languageIndex < 0 || languageIndex >= (values == null ? 0 : values.length)) {
						console.log("src/client/model/util/LocalizedString.hx:32:","languageIndex should be between 0 and length, here: " + languageIndex);
						s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,0));
					} else {
						s = client_model_util_OptionExtender.getOrDefault(tink_pure_List.get(values,languageIndex));
					}
					break;
				}
				var children = s == null ? null : coconut_vdom__$Html_Text.inst.vnode(s,null,null,null);
				__r.push(coconut_vdom_Html.LI.vnode({ },hxxMeta1.key,hxxMeta1.ref,[children]));
			}
			return coconut_vdom_Html.UL.vnode({ },hxxMeta.key,hxxMeta.ref,__r);
		}
	}
	,__initAttributes: function(attributes) {
		this.__coco_languageIndex.setData(attributes.languageIndex);
		this.__coco_item.setData(attributes.item);
	}
});
var client_view_utilities_scroll_BrowserScrollUtility = function() {
	window.addEventListener("scroll",$bind(this,this.onScroll));
	this.lastScrollTop = window.scrollY;
};
client_view_utilities_scroll_BrowserScrollUtility.__name__ = true;
client_view_utilities_scroll_BrowserScrollUtility.prototype = {
	onScroll: function(event) {
		if(window.scrollY > this.lastScrollTop) {
			client_utilities_AppEvents.onScroll.dispatch(1);
		} else if(window.scrollY < this.lastScrollTop) {
			client_utilities_AppEvents.onScroll.dispatch(-1);
		} else {
			window.scroll(window.scrollX,this.lastScrollTop);
		}
		this.lastScrollTop = window.scrollY;
	}
};
var client_view_utilities_scroll_ScrollArrow = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__initAttributes(__coco_data_);
	var snapshot = null;
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,null);
};
client_view_utilities_scroll_ScrollArrow.__name__ = true;
client_view_utilities_scroll_ScrollArrow.fromHxx = function(hxxMeta,attributes) {
	var _g = client_view_utilities_scroll_ScrollArrow.__factory;
	var tmp;
	if(_g == null) {
		tmp = client_view_utilities_scroll_ScrollArrow.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
			return new client_view_utilities_scroll_ScrollArrow(__coco_data_,implicits);
		},function(v,attr) {
			v.__initAttributes(attr);
		});
	} else {
		var v = _g;
		tmp = v;
	}
	return new coconut_diffing_internal_VWidget(tmp,attributes,hxxMeta.key,hxxMeta.ref);
};
client_view_utilities_scroll_ScrollArrow.__super__ = coconut_vdom_View;
client_view_utilities_scroll_ScrollArrow.prototype = $extend(coconut_vdom_View.prototype,{
	render: function() {
		var hxxMeta = { };
		var attr = { className : tink_domspec_ClassName.ofString("scroll-arrow"), onclick : $bind(this,this.onScrollAsked)};
		var hxxMeta1 = { };
		var attr1 = { className : tink_domspec_ClassName.ofString("bouncing-arrow material-icons")};
		var children = [coconut_vdom__$Html_Text.inst.vnode("expand_more",null,null,null)];
		var children1 = [coconut_vdom_Html.SPAN.vnode(attr1,hxxMeta1.key,hxxMeta1.ref,children)];
		return coconut_vdom_Html.DIV.vnode(attr,hxxMeta.key,hxxMeta.ref,children1);
	}
	,onScrollAsked: function() {
		client_utilities_AppEvents.onScroll.dispatch(1);
	}
	,__initAttributes: function(attributes) {
	}
});
var client_view_utilities_scroll_ScrollUtility = function(delay) {
	this.nextTimeScrollAvailable = -Infinity;
	this.fullScreenQuery = $(".fullscreen");
	this.currentScreenIndex = 0;
	this.delayBetweenScroll = delay;
	client_utilities_AppEvents.onScroll.add($bind(this,this.onScroll));
};
client_view_utilities_scroll_ScrollUtility.__name__ = true;
client_view_utilities_scroll_ScrollUtility.prototype = {
	onScroll: function(delta) {
		if(this.nextTimeScrollAvailable > HxOverrides.now() / 1000) {
			return;
		}
		this.nextTimeScrollAvailable = HxOverrides.now() / 1000 + this.delayBetweenScroll;
		this.currentScreenIndex += delta;
		this.currentScreenIndex = Math.min(this.fullScreenQuery.length - 1,Math.max(this.currentScreenIndex,0));
	}
};
var coconut_diffing_Cursor = function(applicator) {
	this.applicator = applicator;
};
coconut_diffing_Cursor.__name__ = true;
coconut_diffing_Cursor.prototype = {
	current: function() {
		return null;
	}
};
var coconut_diffing_Factory = function() {
	var this1 = coconut_diffing_TypeId.idCounter++;
	this.type = this1;
};
coconut_diffing_Factory.__name__ = true;
coconut_diffing_Factory.prototype = {
	adopt: function(target) {
		return null;
	}
	,hydrate: function(target,data) {
	}
	,vnode: function(data,key,ref,children) {
		return new coconut_diffing_internal_VNative(this,data,key,ref,children);
	}
};
var coconut_diffing_Properties = function(construct,apply) {
	coconut_diffing_Factory.call(this);
	this.construct = construct;
	this.apply = apply;
};
coconut_diffing_Properties.__name__ = true;
coconut_diffing_Properties.set = function(target,nu,old,apply) {
	if(nu == null) {
		if(old != null) {
			var old1 = old;
			var _g = 0;
			var _g1 = Reflect.fields(old1);
			while(_g < _g1.length) {
				var k = _g1[_g];
				++_g;
				apply(target,k,null,null);
			}
		}
	} else if(old == null) {
		var nu1 = nu;
		var access = nu1;
		var _g_access = access;
		var _g_keys = Reflect.fields(access);
		var _g_index = 0;
		while(_g_index < _g_keys.length) {
			var key = _g_keys[_g_index++];
			var _g1_value = _g_access[key];
			var _g1_key = key;
			var k = _g1_key;
			var v = _g1_value;
			apply(target,k,v,null);
		}
	} else {
		var nu1 = nu;
		var old1 = old;
		var access = nu1;
		var _g_access = access;
		var _g_keys = Reflect.fields(access);
		var _g_index = 0;
		while(_g_index < _g_keys.length) {
			var key = _g_keys[_g_index++];
			var _g1_value = _g_access[key];
			var _g1_key = key;
			var k = _g1_key;
			var v = _g1_value;
			var old = old1[k];
			if(v != old) {
				apply(target,k,v,old);
			}
		}
		var _g = 0;
		var _g1 = Reflect.fields(old1);
		while(_g < _g1.length) {
			var k = _g1[_g];
			++_g;
			if(!Object.prototype.hasOwnProperty.call(nu1,k)) {
				apply(target,k,null,null);
			}
		}
	}
};
coconut_diffing_Properties.__super__ = coconut_diffing_Factory;
coconut_diffing_Properties.prototype = $extend(coconut_diffing_Factory.prototype,{
	create: function(data) {
		var ret = this.construct();
		this.update(ret,data,null);
		return ret;
	}
	,update: function(target,next,prev) {
		coconut_diffing_Properties.set(target,next,prev,this.apply);
	}
});
var coconut_diffing_internal_Parent = function(context,parent) {
	this.pendingUpdates = [];
	this.context = context;
	this.parent = parent;
};
coconut_diffing_internal_Parent.__name__ = true;
coconut_diffing_internal_Parent.withLater = function(f) {
	var tasks = [];
	var ret = f(function(task) {
		if(task != null) {
			tasks.push(task);
		}
	});
	var _g = 0;
	while(_g < tasks.length) {
		var t = tasks[_g];
		++_g;
		t();
	}
	return ret;
};
coconut_diffing_internal_Parent.prototype = {
	scheduleUpdate: function(child) {
		if(this.pendingUpdates.push(child) == 1) {
			this.invalidateParent();
		}
	}
	,performUpdate: function(later) {
		if(this.pendingUpdates.length > 0) {
			var _g = 0;
			var _g1 = this.pendingUpdates.splice(0,this.pendingUpdates.length);
			while(_g < _g1.length) {
				var c = _g1[_g];
				++_g;
				c.performUpdate(later);
			}
		}
	}
	,invalidateParent: function() {
		var _gthis = this;
		var _g = this.parent;
		if(_g == null) {
			tink_state_Observable.scheduler.schedule(tink_state__$Scheduler_JustOnce.call(function() {
				coconut_diffing_internal_Parent.withLater($bind(_gthis,_gthis.performUpdate));
			}));
		} else {
			var v = _g;
			v.scheduleUpdate(this);
		}
	}
};
var coconut_diffing_Root = function(parent,applicator,content,hydration) {
	if(hydration == null) {
		hydration = 0;
	}
	var _gthis = this;
	coconut_diffing_internal_Parent.call(this,new coconut_ui_internal_ImplicitContext());
	var rendered = coconut_diffing_internal_Parent.withLater(function(later) {
		return new coconut_diffing_internal_RCell(_gthis,content,hydration == 2 ? applicator.siblings(parent) : applicator.children(parent),later,hydration != 0);
	});
	this.rendered = rendered;
};
coconut_diffing_Root.__name__ = true;
coconut_diffing_Root.fromNative = function(parent,applicator) {
	var _g = coconut_diffing_Root.byParent.h[parent.__id__];
	var tmp;
	if(_g == null) {
		var v = new coconut_diffing_Root(parent,applicator);
		coconut_diffing_Root.byParent.set(parent,v);
		tmp = v;
	} else {
		var v = _g;
		tmp = v;
	}
	return tmp;
};
coconut_diffing_Root.__super__ = coconut_diffing_internal_Parent;
coconut_diffing_Root.prototype = $extend(coconut_diffing_internal_Parent.prototype,{
	render: function(v) {
		var _gthis = this;
		coconut_diffing_internal_Parent.withLater(function(later) {
			return _gthis.rendered.update(v,null,later);
		});
	}
});
var coconut_diffing_TypeId = {};
var coconut_diffing_internal_RCell = function(parent,virtual,cursor,later,hydrate) {
	this.empty = new coconut_diffing_internal_VEmpty();
	this.parent = parent;
	if(virtual == null) {
		virtual = this.empty;
	}
	this.virtual = virtual;
	this.rendered = virtual.render(parent,cursor,later,hydrate);
	this.applicator = cursor.applicator;
};
coconut_diffing_internal_RCell.__name__ = true;
coconut_diffing_internal_RCell.prototype = {
	update: function(virtual,cursor,later) {
		var cursor1;
		if(cursor == null) {
			cursor1 = this.rendered.reiterate(this.applicator);
		} else {
			var v = cursor;
			cursor1 = v;
		}
		var unchanged = virtual == this.virtual;
		if(unchanged) {
			this.rendered.justInsert(cursor1,later);
		} else {
			if(virtual == null) {
				virtual = this.empty;
			}
			var last = this.virtual;
			this.virtual = virtual;
			if(last.type == virtual.type) {
				this.rendered.update(virtual,cursor1,later);
			} else {
				var old = this.rendered;
				this.rendered = virtual.render(this.parent,cursor1,later,false);
				cursor1.delete(old.destroy(this.applicator));
			}
		}
		return !unchanged;
	}
	,destroy: function(applicator) {
		return this.rendered.destroy(applicator);
	}
};
var coconut_diffing_internal_RChildren = function(parent,children,cursor,later,hydrate) {
	this.order = [];
	this.counts = new haxe_ds_IntMap();
	this.byType = new haxe_ds_IntMap();
	this.parent = parent;
	var _g = 0;
	while(_g < (children == null ? 0 : children.length)) {
		var c = children == null ? null : children[_g];
		++_g;
		if(c != null) {
			var r = c.render(parent,cursor,later,hydrate);
			var _g1 = c.key;
			var _g2 = this.byType.h[r.type];
			if(_g1 == null) {
				if(_g2 == null) {
					var v = [r];
					this.byType.h[r.type] = v;
				} else {
					var a = _g2;
					a.push(r);
				}
			} else {
				var k = _g1;
				this.setKey(k,r);
			}
			this.order.push(r);
		}
	}
};
coconut_diffing_internal_RChildren.__name__ = true;
coconut_diffing_internal_RChildren.prototype = {
	setKey: function(k,v) {
		var m;
		var _g = this.byKey;
		if(_g == null) {
			var this1 = new Map();
			var this2 = this1;
			m = this.byKey = this2;
		} else {
			var v1 = _g;
			m = v1;
		}
		m.set(k,v);
		return v;
	}
	,update: function(children,cursor,later) {
		var _gthis = this;
		var k = this.byType.keys();
		while(k.hasNext()) {
			var k1 = k.next();
			this.counts.h[k1] = 0;
		}
		var oldKeyed = this.byKey;
		this.byKey = null;
		var deleteCount = 0;
		var applicator = cursor.applicator;
		var index = 0;
		var _g = 0;
		while(_g < (children == null ? 0 : children.length)) {
			var v = children == null ? null : children[_g];
			++_g;
			if(v != null) {
				var tmp = this.order;
				var tmp1 = index++;
				var _g1 = v.key;
				var _g2 = this.byType.h[v.type];
				var tmp2;
				if(_g1 == null) {
					if(_g2 == null) {
						var v1 = [];
						this.byType.h[v.type] = v1;
						this.counts.h[v.type] = 0;
						var tmp3 = _gthis.byType.h[v.type];
						var tmp4 = v.type;
						var tmp5 = _gthis.counts.h[tmp4];
						var v2 = tmp5 + 1;
						_gthis.counts.h[tmp4] = v2;
						tmp2 = tmp3[tmp5] = v.render(_gthis.parent,cursor,later,false);
					} else {
						var rs = _g2;
						var _g3 = rs[this.counts.h[v.type]];
						if(_g3 == null) {
							var tmp6 = _gthis.byType.h[v.type];
							var tmp7 = v.type;
							var tmp8 = _gthis.counts.h[tmp7];
							var v3 = tmp8 + 1;
							_gthis.counts.h[tmp7] = v3;
							tmp2 = tmp6[tmp8] = v.render(_gthis.parent,cursor,later,false);
						} else {
							var r = _g3;
							var tmp9 = v.type;
							var v4 = this.counts.h[tmp9] + 1;
							this.counts.h[tmp9] = v4;
							r.update(v,cursor,later);
							tmp2 = r;
						}
					}
				} else {
					var k = _g1;
					var _g4;
					if(oldKeyed == null) {
						_g4 = null;
					} else {
						var m = oldKeyed;
						var _g5 = m.get(k);
						var _g6;
						if(_g5 == null) {
							_g6 = null;
						} else {
							var v5 = _g5;
							m.delete(k);
							_g6 = v5;
						}
						_g4 = _g6;
					}
					if(_g4 == null) {
						tmp2 = _gthis.setKey(k,v.render(_gthis.parent,cursor,later,false));
					} else {
						var old = _g4;
						if(old.type == v.type) {
							old.update(v,cursor,later);
							tmp2 = this.setKey(k,old);
						} else {
							deleteCount += old.destroy(applicator);
							tmp2 = _gthis.setKey(k,v.render(_gthis.parent,cursor,later,false));
						}
					}
				}
				tmp[tmp1] = tmp2;
			}
		}
		this.order.length = index;
		var _g = new haxe_iterators_MapKeyValueIterator(this.counts);
		while(_g.hasNext()) {
			var _g1 = _g.next();
			var id = _g1.key;
			var count = _g1.value;
			var _g2 = this.byType.h[id];
			if(_g2.length - count != 0) {
				var a = _g2;
				var _g3 = count;
				var _g4 = a.length;
				while(_g3 < _g4) {
					var i = _g3++;
					deleteCount += a[i].destroy(applicator);
				}
				a.length = count;
			}
		}
		if(oldKeyed != null) {
			var _g = this.byKey;
			if(_g == null) {
				var f = function(r) {
					deleteCount += r.destroy(applicator);
				};
				oldKeyed.forEach(function(v,_,_1) {
					f(v);
				});
			} else {
				var m = _g;
				var f1 = function(k,r) {
					if(!m.has(k)) {
						deleteCount += r.destroy(applicator);
					}
				};
				oldKeyed.forEach(function(v,k,_) {
					f1(k,v);
				});
			}
		}
		cursor.delete(deleteCount);
	}
	,destroy: function(applicator) {
		var ret = 0;
		var _g = 0;
		var _g1 = this.order;
		while(_g < _g1.length) {
			var r = _g1[_g];
			++_g;
			ret += r.destroy(applicator);
		}
		return ret;
	}
};
var coconut_diffing_internal_VEmpty = function() {
	this.key = null;
	this.type = coconut_diffing_internal_VEmpty.TYPE;
};
coconut_diffing_internal_VEmpty.__name__ = true;
coconut_diffing_internal_VEmpty.prototype = {
	render: function(_,cursor,_1,hydrate) {
		return new coconut_diffing_internal_REmpty(cursor);
	}
};
var coconut_diffing_internal_REmpty = function(cursor) {
	this.type = coconut_diffing_internal_VEmpty.TYPE;
	cursor.insert(this.marker = cursor.applicator.createMarker());
};
coconut_diffing_internal_REmpty.__name__ = true;
coconut_diffing_internal_REmpty.prototype = {
	reiterate: function(applicator) {
		return applicator.siblings(this.marker);
	}
	,update: function(next,cursor,later) {
		cursor.insert(this.marker);
	}
	,justInsert: function(cursor,_) {
		cursor.insert(this.marker);
	}
	,destroy: function(applicator) {
		applicator.releaseMarker(this.marker);
		return 1;
	}
};
var coconut_diffing_internal_VNativeBase = function(type,key,ref,children) {
	this.type = type;
	this.key = key;
	this.ref = ref;
	this.children = children;
};
coconut_diffing_internal_VNativeBase.__name__ = true;
coconut_diffing_internal_VNativeBase.prototype = {
	render: function(parent,cursor,later,hydrate) {
		return new coconut_diffing_internal_RNativeBase(this,coconut_diffing_internal_VNativeBase,parent,cursor,later,hydrate);
	}
	,create: function(previous) {
		throw haxe_Exception.thrown("abstract");
	}
};
var coconut_diffing_internal_VNative = function(factory,data,key,ref,children) {
	coconut_diffing_internal_VNativeBase.call(this,factory.type,key,ref,children);
	this.factory = factory;
	this.data = data;
};
coconut_diffing_internal_VNative.__name__ = true;
coconut_diffing_internal_VNative.__super__ = coconut_diffing_internal_VNativeBase;
coconut_diffing_internal_VNative.prototype = $extend(coconut_diffing_internal_VNativeBase.prototype,{
	render: function(parent,cursor,later,hydrate) {
		return new coconut_diffing_internal_RNative(this,coconut_diffing_internal_VNative,parent,cursor,later,hydrate);
	}
	,create: function(previous) {
		if(previous == null) {
			return this.factory.create(this.data);
		} else {
			var v = previous;
			var _g = this.factory.adopt(v);
			if(_g == null) {
				return this.factory.create(this.data);
			} else {
				var v = _g;
				this.factory.hydrate(v,this.data);
				return v;
			}
		}
	}
});
var coconut_diffing_internal_RNativeBase = function(v,cls,parent,cursor,later,hydrate) {
	this.last = v;
	this.cls = cls;
	this.type = v.type;
	this.native = v.create(hydrate ? cursor.current() : null);
	this.children = new coconut_diffing_internal_RChildren(parent,v.children,cursor.applicator.children(this.native),later,hydrate);
	cursor.insert(this.native);
	var _g = v.ref;
	if(_g != null) {
		var f = _g;
		f(this.native);
	}
};
coconut_diffing_internal_RNativeBase.__name__ = true;
coconut_diffing_internal_RNativeBase.prototype = {
	justInsert: function(cursor,_) {
		cursor.insert(this.native);
	}
	,updateNative: function(native,next,last,parent,later) {
		throw haxe_Exception.thrown("abstract");
	}
	,update: function(next,cursor,later) {
		var next1 = next;
		if(next1 == this.last) {
			this.justInsert(cursor,later);
			return;
		}
		this.updateNative(this.native,next1,this.last,this.children.parent,later);
		var prev = this.last;
		this.last = next1;
		this.children.update(next1.children,cursor.applicator.children(this.native),later);
		cursor.insert(this.native);
		if(prev.ref != next1.ref) {
			var _g = prev.ref;
			if(_g != null) {
				var f = _g;
				f(null);
			}
			var _g = next1.ref;
			if(_g != null) {
				var f = _g;
				f(this.native);
			}
		}
	}
	,reiterate: function(applicator) {
		return applicator.siblings(this.native);
	}
	,destroy: function(applicator) {
		applicator.children(this.native).delete(this.children.destroy(applicator));
		var _g = this.last.ref;
		if(_g != null) {
			var f = _g;
			f(null);
		}
		return 1;
	}
};
var coconut_diffing_internal_RNative = function(v,cls,parent,cursor,later,hydrate) {
	coconut_diffing_internal_RNativeBase.call(this,v,cls,parent,cursor,later,hydrate);
};
coconut_diffing_internal_RNative.__name__ = true;
coconut_diffing_internal_RNative.__super__ = coconut_diffing_internal_RNativeBase;
coconut_diffing_internal_RNative.prototype = $extend(coconut_diffing_internal_RNativeBase.prototype,{
	updateNative: function(native,next,last,_,_1) {
		next.factory.update(native,next.data,last.data);
	}
});
var coconut_diffing_internal_VWidget = function(factory,data,key,ref) {
	this.factory = factory;
	this.type = factory.type;
	this.data = data;
	this.ref = ref;
	this.key = key;
};
coconut_diffing_internal_VWidget.__name__ = true;
coconut_diffing_internal_VWidget.prototype = {
	render: function(parent,cursor,later,hydrate) {
		return new coconut_diffing_internal_RWidget(parent,this,cursor,later,hydrate);
	}
};
var coconut_diffing_internal_WidgetLifeCycle = function(owner,context,parent,cursor,later,hydrate) {
	coconut_diffing_internal_Parent.call(this,context,parent);
	this.owner = owner;
	owner._coco_lifeCycle = this;
	this.applicator = cursor.applicator;
	this.rendered = new coconut_diffing_internal_RCell(this,this.poll(),cursor,later,hydrate);
	this.link = owner._coco_vStructure.onInvalidate(this);
	later(owner._coco_viewMounted);
};
coconut_diffing_internal_WidgetLifeCycle.__name__ = true;
coconut_diffing_internal_WidgetLifeCycle.__super__ = coconut_diffing_internal_Parent;
coconut_diffing_internal_WidgetLifeCycle.prototype = $extend(coconut_diffing_internal_Parent.prototype,{
	poll: function() {
		var before = tink_state_internal_AutoObservable.cur;
		tink_state_internal_AutoObservable.cur = null;
		var ret = tink_state_Observable.get_value(this.owner._coco_vStructure);
		tink_state_internal_AutoObservable.cur = before;
		return ret;
	}
	,reiterate: function(applicator) {
		return this.rendered.rendered.reiterate(applicator);
	}
	,justInsert: function(cursor,later) {
		this.rerender(later,cursor);
	}
	,rerender: function(later,cursor) {
		if(this.rendered.update(this.poll(),cursor,later)) {
			later(this.owner._coco_viewUpdated);
		}
	}
	,performUpdate: function(later) {
		if(this.owner._coco_lifeCycle != this) {
			return;
		}
		this.rerender(later);
		coconut_diffing_internal_Parent.prototype.performUpdate.call(this,later);
	}
	,invalidate: function() {
		this.invalidateParent();
	}
	,destroy: function(applicator) {
		var _g = this.owner._coco_viewUnmounting;
		if(_g != null) {
			var f = _g;
			f();
		}
		var this1 = this.link;
		if(this1 != null) {
			this1.cancel();
		}
		this.owner._coco_lifeCycle = null;
		return this.rendered.destroy(applicator);
	}
});
var coconut_diffing_internal_RWidget = function(parent,v,cursor,later,hydrate) {
	var context = parent.context;
	var widget = v.factory.create(v.data,context);
	coconut_diffing_internal_WidgetLifeCycle.call(this,widget,context,parent,cursor,later,hydrate);
	this.last = v;
	this.type = v.type;
	this.widget = widget;
	var _g = v.ref;
	if(_g != null) {
		var f = _g;
		f(widget);
	}
};
coconut_diffing_internal_RWidget.__name__ = true;
coconut_diffing_internal_RWidget.__super__ = coconut_diffing_internal_WidgetLifeCycle;
coconut_diffing_internal_RWidget.prototype = $extend(coconut_diffing_internal_WidgetLifeCycle.prototype,{
	update: function(next,cursor,later) {
		var next1 = next;
		if(this.last == next1) {
			this.justInsert(cursor,later);
			return;
		}
		if(next1.ref != this.last.ref) {
			var _g = this.last.ref;
			if(_g != null) {
				var f = _g;
				f(null);
			}
			var _g = next1.ref;
			if(_g != null) {
				var f = _g;
				f(this.widget);
			}
		}
		this.last = next1;
		next1.factory.update(this.widget,next1.data);
		this.rerender(later,cursor);
	}
	,destroy: function(applicator) {
		var _g = this.last.ref;
		if(_g != null) {
			var f = _g;
			f(null);
		}
		return coconut_diffing_internal_WidgetLifeCycle.prototype.destroy.call(this,applicator);
	}
});
var coconut_diffing_internal_WidgetFactory = function(create,update) {
	var this1 = coconut_diffing_TypeId.idCounter++;
	this.type = this1;
	this._create = create;
	this._update = update;
};
coconut_diffing_internal_WidgetFactory.__name__ = true;
coconut_diffing_internal_WidgetFactory.prototype = {
	create: function(data,context) {
		return this._create(data,context);
	}
	,update: function(target,next) {
		this._update(target,next);
	}
};
var tink_state__$Observable_ConstObservable = function(value,toString) {
	this.revision = tink_state_internal_Revision._new();
	this.value = value;
};
tink_state__$Observable_ConstObservable.__name__ = true;
tink_state__$Observable_ConstObservable.prototype = {
	getRevision: function() {
		return this.revision;
	}
	,canFire: function() {
		return true;
	}
	,getValue: function() {
		return this.value;
	}
	,getComparator: function() {
		return null;
	}
	,onInvalidate: function(i) {
		return null;
	}
};
var tink_core__$Lazy_LazyConst = function(value) {
	this.value = value;
};
tink_core__$Lazy_LazyConst.__name__ = true;
var coconut_ui_internal_ImplicitContext = function(parent) {
	var tmp;
	if(parent == null) {
		tmp = coconut_ui_internal_ImplicitContext.ORPHAN;
	} else {
		var v = parent;
		tmp = v;
	}
	this.parent = tmp;
};
coconut_ui_internal_ImplicitContext.__name__ = true;
var tink_state_internal_Invalidator = function() {
	this.list = new tink_core_CallbackList();
	var this1 = new Map();
	this.observers = this1;
	this.revision = tink_state_internal_Revision._new();
};
tink_state_internal_Invalidator.__name__ = true;
tink_state_internal_Invalidator.prototype = {
	canFire: function() {
		return this.list.disposeHandlers != null;
	}
	,getRevision: function() {
		return this.revision;
	}
	,onInvalidate: function(i) {
		var _gthis = this;
		if(this.observers.get(i) || this.list.disposeHandlers == null) {
			return null;
		} else {
			this.observers.set(i,true);
			var _this = this.list;
			var this1;
			if(_this.disposeHandlers == null) {
				this1 = null;
			} else {
				var node = new tink_core__$Callback_ListCell(function(_) {
					i.invalidate();
				},_this);
				_this.cells.push(node);
				if(_this.used++ == 0) {
					var fn = _this.onfill;
					if(tink_core_Callback.depth < 500) {
						tink_core_Callback.depth++;
						fn();
						tink_core_Callback.depth--;
					} else {
						tink_core_Callback.defer(fn);
					}
				}
				this1 = node;
			}
			var this2 = new tink_core_SimpleLink(function() {
				return _gthis.observers.delete(i);
			});
			return new tink_core__$Callback_LinkPair(this1,this2);
		}
	}
	,fire: function() {
		this.revision = tink_state_internal_Revision._new();
		this.list.invoke(null);
	}
};
var coconut_ui_internal_Slot = function(owner,comparator,defaultData,toString) {
	var _gthis = this;
	tink_state_internal_Invalidator.call(this);
	this.comparator = comparator;
	this.data = this.defaultData = defaultData;
	this.list.ondrain = function() {
		var this1 = _gthis.link;
		if(this1 != null) {
			this1.cancel();
		}
	};
	this.list.onfill = function() {
		_gthis.heatup();
	};
};
coconut_ui_internal_Slot.__name__ = true;
coconut_ui_internal_Slot.__super__ = tink_state_internal_Invalidator;
coconut_ui_internal_Slot.prototype = $extend(tink_state_internal_Invalidator.prototype,{
	heatup: function() {
		if(this.data != null) {
			this.link = this.data.onInvalidate(this);
		}
	}
	,invalidate: function() {
		this.fire();
	}
	,getComparator: function() {
		return this.comparator;
	}
	,getRevision: function() {
		var ret = this.revision;
		if(this.data != null) {
			var b = this.data.getRevision();
			if(!(ret > b)) {
				ret = b;
			}
		}
		if(this.defaultData != null) {
			var b = this.defaultData.getRevision();
			if(!(ret > b)) {
				ret = b;
			}
		}
		return ret;
	}
	,getValue: function() {
		var _g = this.data;
		var _g1 = this.defaultData;
		var _hx_tmp;
		if(_g == null) {
			if(_g1 == null) {
				return null;
			} else {
				var v = _g1;
				return v.getValue();
			}
		} else if(_g1 == null) {
			var v = _g;
			return v.getValue();
		} else {
			var v = _g1;
			_hx_tmp = _g.getValue();
			var ret = _hx_tmp;
			if(ret == null) {
				return v.getValue();
			} else {
				return ret;
			}
		}
	}
	,setData: function(data) {
		if(data == null) {
			data = this.defaultData;
		}
		if(data == this.data) {
			return;
		}
		this.data = data;
		if(this.list.used > 0) {
			var this1 = this.link;
			if(this1 != null) {
				this1.cancel();
			}
			this.heatup();
		}
		this.fire();
	}
});
var coconut_vdom__$Html_Updater = function(unset,rules,getRule) {
	this.deleters = new Map();
	this.applicators = new Map();
	this.unset = unset;
	this.rules = rules;
	this.getRule = getRule;
};
coconut_vdom__$Html_Updater.__name__ = true;
coconut_vdom__$Html_Updater.getFields = function(o) {
	var ret = Object.getOwnPropertyNames(o);
	switch(ret.length) {
	case 0:
		break;
	case 1:
		var _g = ret[0];
		break;
	case 2:
		var a = ret[0];
		var b = ret[1];
		if(a > b) {
			ret[0] = b;
			ret[1] = a;
		}
		break;
	default:
		ret.sort();
	}
	return ret;
};
coconut_vdom__$Html_Updater.prototype = {
	update: function(target,newVal,oldVal) {
		if(newVal != null) {
			(this.getApplicator(newVal))(target,newVal,oldVal);
		}
		if(oldVal != null) {
			(this.getDeleter(oldVal,newVal))(target);
		}
	}
	,getApplicator: function(obj) {
		var _gthis = this;
		var props = coconut_vdom__$Html_Updater.getFields(obj);
		var key = props.toString();
		var apply = this.applicators.get(key);
		if(apply == null) {
			var source = "if (old) {";
			var add = function(prefix) {
				var _g = 0;
				while(_g < props.length) {
					var p = props[_g];
					++_g;
					var source1 = source;
					var source2 = "\n  " + prefix(p);
					var _g1 = _gthis.getRule(_gthis.rules,p);
					var source3;
					if(_g1 == null) {
						source3 = "if (nu." + p + " == null) { " + _gthis.unset("target",p) + " } else target." + p + " = nu." + p + ";";
					} else {
						var rule = _g1;
						source3 = "this." + rule + "(target, \"" + p + "\", nu." + p + ", old && old." + p + ");";
					}
					source = source1 + (source2 + source3);
				}
			};
			add(function(p) {
				return "if (nu." + p + " !== old." + p + ") ";
			});
			source += "\n} else {";
			add(function(p) {
				return "";
			});
			source += "\n}";
			apply = new Function("target","nu","old",source).bind(this.rules);
			this.applicators.set(key,apply);
		}
		return apply;
	}
	,noop: function(target) {
	}
	,getDeleter: function(old,nu) {
		var _gthis = this;
		var forFields = function(fields) {
			var key = fields.toString();
			var ret = _gthis.deleters.get(key);
			if(ret == null) {
				var body = "";
				var _g = 0;
				var _g1 = fields;
				while(_g < _g1.length) {
					var f = _g1[_g];
					++_g;
					var _g2 = _gthis.getRule(_gthis.rules,f);
					var body1;
					if(_g2 == null) {
						body1 = _gthis.unset("target",f);
					} else {
						var rule = _g2;
						body1 = "this." + rule + "(target, \"" + f + "\", null);";
					}
					body += "\n" + body1;
				}
				var _gthis1 = _gthis.deleters;
				ret = new Function("target",body).bind(_gthis.rules);
				_gthis1.set(key,ret);
			}
			return ret;
		};
		if(nu == null) {
			return forFields(coconut_vdom__$Html_Updater.getFields(old));
		} else {
			var oldFields = coconut_vdom__$Html_Updater.getFields(old);
			var nuFields = coconut_vdom__$Html_Updater.getFields(nu);
			var nuKey = nuFields.toString();
			var oldKey = oldFields.toString();
			if(nuKey == oldKey) {
				return $bind(this,this.noop);
			} else {
				var key = "" + nuKey + ":" + oldKey;
				var ret = this.deleters.get(key);
				if(ret == null) {
					var tmp = this.deleters;
					var forFields1 = forFields;
					var _g = [];
					var _g1 = 0;
					while(_g1 < oldFields.length) {
						var f = oldFields[_g1];
						++_g1;
						if(nuFields.indexOf(f) == -1) {
							_g.push(f);
						}
					}
					ret = forFields1(_g);
					tmp.set(key,ret);
				}
				return ret;
			}
		}
	}
};
var coconut_vdom__$Html_Elt = function(tag) {
	coconut_diffing_Factory.call(this);
	this.tag = tag.toUpperCase();
};
coconut_vdom__$Html_Elt.__name__ = true;
coconut_vdom__$Html_Elt.hydrateEvents = function(target,attr) {
	var events = coconut_vdom__$Html_Elt.events;
	for (var name in attr) {
      if (name.startsWith("on")) {
        events.push(name);
      }
    }
	if(events.length > 0) {
		var handler = target.__eventHandler = { handleEvent : function(e) {
			this[e.type](e);
		}};
		var _g = 0;
		while(_g < events.length) {
			var event = events[_g];
			++_g;
			var fn = Reflect.field(attr,event);
			event = HxOverrides.substr(event,2,null);
			target.addEventListener(event,handler);
			handler[event] = fn;
		}
		events.length = 0;
	}
};
coconut_vdom__$Html_Elt.setAttributes = function(t,nu,old) {
	coconut_diffing_Properties.set(t,nu,old,function(t,k,v,_) {
		if(v == null) {
			t.removeAttribute(k);
		} else {
			t.setAttribute(k,v);
		}
	});
};
coconut_vdom__$Html_Elt.setEvent = function(element,event,newVal,_) {
	var event1 = HxOverrides.substr(event,2,null);
	var handler = element.__eventHandler;
	if(handler == null) {
		handler = { handleEvent : function(e) {
			this[e.type](e);
		}};
		element.__eventHandler = handler;
	}
	if(!Object.prototype.hasOwnProperty.call(handler,event1)) {
		element.addEventListener(event1,handler);
	}
	handler[event1] = newVal == null ? coconut_vdom__$Html_Elt.noop : newVal;
};
coconut_vdom__$Html_Elt.updateStyle = function(target,newVal,oldVal) {
	coconut_vdom__$Html_Elt.STYLES.update(target,newVal,oldVal);
};
coconut_vdom__$Html_Elt.noop = function(_) {
};
coconut_vdom__$Html_Elt.__super__ = coconut_diffing_Factory;
coconut_vdom__$Html_Elt.prototype = $extend(coconut_diffing_Factory.prototype,{
	create: function(attr) {
		var ret = window.document.createElement(this.tag);
		coconut_vdom__$Html_Elt.ELEMENTS.update(ret,attr,null);
		return ret;
	}
	,adopt: function(node) {
		if(node.nodeName == this.tag) {
			return node;
		} else {
			return null;
		}
	}
	,hydrate: function(target,attr) {
		coconut_vdom__$Html_Elt.hydrateEvents(target,attr);
	}
	,update: function(target,nu,old) {
		coconut_vdom__$Html_Elt.ELEMENTS.update(target,nu,old);
	}
});
var coconut_vdom__$Html_Svg = function(tag) {
	coconut_diffing_Factory.call(this);
	this.tag = tag.toLowerCase();
};
coconut_vdom__$Html_Svg.__name__ = true;
coconut_vdom__$Html_Svg.setSvgProp = function(element,name,newVal,oldVal) {
	var _hx_tmp;
	switch(name) {
	case "attributes":
		coconut_vdom__$Html_Elt.setAttributes(element,newVal,oldVal);
		break;
	case "className":
		coconut_vdom__$Html_Svg.setSvgProp(element,"class",newVal,oldVal);
		break;
	case "style":
		_hx_tmp = StringTools.startsWith(name,"on");
		if(_hx_tmp == true) {
			coconut_vdom__$Html_Elt.setEvent(element,name,newVal,oldVal);
		} else {
			coconut_vdom__$Html_Elt.updateStyle(element.style,newVal,oldVal);
		}
		break;
	case "xmlns":
		break;
	default:
		_hx_tmp = StringTools.startsWith(name,"on");
		if(_hx_tmp == true) {
			coconut_vdom__$Html_Elt.setEvent(element,name,newVal,oldVal);
		} else if(newVal == null) {
			element.removeAttribute(name);
		} else {
			element.setAttribute(name,newVal);
		}
	}
};
coconut_vdom__$Html_Svg.__super__ = coconut_diffing_Factory;
coconut_vdom__$Html_Svg.prototype = $extend(coconut_diffing_Factory.prototype,{
	adopt: function(node) {
		if(node.namespaceURI == "http://www.w3.org/2000/svg" && node.nodeName == this.tag) {
			return node;
		} else {
			return null;
		}
	}
	,hydrate: function(target,attr) {
		coconut_vdom__$Html_Elt.hydrateEvents(target,attr);
	}
	,create: function(attr) {
		var ret = window.document.createElementNS("http://www.w3.org/2000/svg",this.tag);
		this.update(ret,attr,null);
		return ret;
	}
	,update: function(target,nu,old) {
		coconut_diffing_Properties.set(target,nu,old,coconut_vdom__$Html_Svg.setSvgProp);
	}
});
var coconut_vdom_Html = function() { };
coconut_vdom_Html.__name__ = true;
coconut_vdom_Html.nodeType = function(tag) {
	var _g = coconut_vdom_Html.nodeTypes.h[tag];
	var tmp;
	if(_g == null) {
		var this1 = coconut_vdom_Html.nodeTypes;
		var v;
		var _g1 = tag.split(":");
		switch(_g1.length) {
		case 1:
			var _g2 = _g1[0];
			v = new coconut_vdom__$Html_Elt(tag);
			break;
		case 2:
			var _g2 = _g1[0];
			if(_g2 == "svg") {
				var tag1 = _g1[1];
				v = new coconut_vdom__$Html_Svg(tag1);
			} else {
				var unknown = _g2;
				throw haxe_Exception.thrown("unknown namespace " + unknown);
			}
			break;
		default:
			throw haxe_Exception.thrown("invalid tag " + tag);
		}
		this1.h[tag] = v;
		tmp = v;
	} else {
		var v = _g;
		tmp = v;
	}
	return tmp;
};
var coconut_vdom__$Html_Text = function() {
	coconut_diffing_Factory.call(this);
};
coconut_vdom__$Html_Text.__name__ = true;
coconut_vdom__$Html_Text.__super__ = coconut_diffing_Factory;
coconut_vdom__$Html_Text.prototype = $extend(coconut_diffing_Factory.prototype,{
	adopt: function(target) {
		if(target.nodeType == 3) {
			return target;
		} else {
			return null;
		}
	}
	,create: function(text) {
		return window.document.createTextNode(text);
	}
	,update: function(target,nu,old) {
		if(nu != old) {
			target.textContent = nu;
		}
	}
});
var coconut_vdom__$Renderer_DomBackend = function() {
	this.markers = [];
};
coconut_vdom__$Renderer_DomBackend.__name__ = true;
coconut_vdom__$Renderer_DomBackend.prototype = {
	createMarker: function() {
		var _g = this.markers.pop();
		if(_g == null) {
			return window.document.createTextNode("");
		} else {
			var v = _g;
			return v;
		}
	}
	,releaseMarker: function(marker) {
		this.markers.push(marker);
	}
	,siblings: function(first) {
		return new coconut_vdom__$Renderer_DomCursor(this,first.parentNode,first);
	}
	,children: function(parent) {
		return new coconut_vdom__$Renderer_DomCursor(this,parent,parent.firstChild);
	}
};
var coconut_vdom_Renderer = function() { };
coconut_vdom_Renderer.__name__ = true;
coconut_vdom_Renderer.mountInto = function(target,vdom) {
	coconut_diffing_Root.fromNative(target,coconut_vdom_Renderer.BACKEND).render(vdom);
};
var coconut_vdom__$Renderer_DomCursor = function(applicator,parent,cur) {
	coconut_diffing_Cursor.call(this,applicator);
	this.parent = parent;
	this.cur = cur;
};
coconut_vdom__$Renderer_DomCursor.__name__ = true;
coconut_vdom__$Renderer_DomCursor.__super__ = coconut_diffing_Cursor;
coconut_vdom__$Renderer_DomCursor.prototype = $extend(coconut_diffing_Cursor.prototype,{
	current: function() {
		return this.cur;
	}
	,insert: function(real) {
		if(this.cur == null) {
			this.parent.appendChild(real);
		} else if(this.cur == real) {
			this.cur = real.nextSibling;
		} else {
			var next = real.nextSibling;
			var inserted = real.parentNode != this.parent;
			this.parent.insertBefore(real,this.cur);
			if(!inserted) {
				this.parent.insertBefore(this.cur,next);
				this.cur = real.nextSibling;
			}
		}
	}
	,'delete': function(count) {
		var v = this.cur;
		var _g = 0;
		var _g1 = count;
		while(_g < _g1) {
			var i = _g++;
			if(v == null || v.parentNode != this.parent) {
				throw haxe_Exception.thrown("assert");
			}
			var handler = v.__eventHandler;
			if(handler != null) {
				delete(v["__eventHandler"]);
				var _g2 = 0;
				var _g3 = Reflect.fields(handler);
				while(_g2 < _g3.length) {
					var k = _g3[_g2];
					++_g2;
					v.removeEventListener(k,handler[k]);
				}
			}
			var next = v.nextSibling;
			this.parent.removeChild(v);
			v = next;
		}
		this.cur = v;
	}
});
var haxe_Exception = function(message,previous,native) {
	Error.call(this,message);
	this.message = message;
	this.__previousException = previous;
	this.__nativeException = native != null ? native : this;
};
haxe_Exception.__name__ = true;
haxe_Exception.caught = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value;
	} else if(((value) instanceof Error)) {
		return new haxe_Exception(value.message,null,value);
	} else {
		return new haxe_ValueException(value,null,value);
	}
};
haxe_Exception.thrown = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value.get_native();
	} else if(((value) instanceof Error)) {
		return value;
	} else {
		var e = new haxe_ValueException(value);
		return e;
	}
};
haxe_Exception.__super__ = Error;
haxe_Exception.prototype = $extend(Error.prototype,{
	unwrap: function() {
		return this.__nativeException;
	}
	,get_native: function() {
		return this.__nativeException;
	}
	,__properties__: {get_native:"get_native"}
});
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe_Timer.__name__ = true;
haxe_Timer.delay = function(f,time_ms) {
	var t = new haxe_Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe_Timer.prototype = {
	stop: function() {
		if(this.id == null) {
			return;
		}
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
};
var haxe_ValueException = function(value,previous,native) {
	haxe_Exception.call(this,String(value),previous,native);
	this.value = value;
};
haxe_ValueException.__name__ = true;
haxe_ValueException.__super__ = haxe_Exception;
haxe_ValueException.prototype = $extend(haxe_Exception.prototype,{
	unwrap: function() {
		return this.value;
	}
});
var haxe_ds_IntMap = function() {
	this.h = { };
};
haxe_ds_IntMap.__name__ = true;
haxe_ds_IntMap.prototype = {
	get: function(key) {
		return this.h[key];
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) if(this.h.hasOwnProperty(key)) a.push(+key);
		return new haxe_iterators_ArrayIterator(a);
	}
};
var haxe_ds_ObjectMap = function() {
	this.h = { __keys__ : { }};
};
haxe_ds_ObjectMap.__name__ = true;
haxe_ds_ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__;
		if(id == null) {
			id = (key.__id__ = $global.$haxeUID++);
		}
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,get: function(key) {
		return this.h[key.__id__];
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) {
			a.push(this.h.__keys__[key]);
		}
		}
		return new haxe_iterators_ArrayIterator(a);
	}
};
var haxe_ds_Option = $hxEnums["haxe.ds.Option"] = { __ename__:true,__constructs__:null
	,Some: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"haxe.ds.Option",toString:$estr}; },$_._hx_name="Some",$_.__params__ = ["v"],$_)
	,None: {_hx_name:"None",_hx_index:1,__enum__:"haxe.ds.Option",toString:$estr}
};
haxe_ds_Option.__constructs__ = [haxe_ds_Option.Some,haxe_ds_Option.None];
var haxe_ds_StringMap = function() {
	this.h = Object.create(null);
};
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.prototype = {
	get: function(key) {
		return this.h[key];
	}
	,keys: function() {
		return new haxe_ds__$StringMap_StringMapKeyIterator(this.h);
	}
};
var haxe_ds__$StringMap_StringMapKeyIterator = function(h) {
	this.h = h;
	this.keys = Object.keys(h);
	this.length = this.keys.length;
	this.current = 0;
};
haxe_ds__$StringMap_StringMapKeyIterator.__name__ = true;
haxe_ds__$StringMap_StringMapKeyIterator.prototype = {
	hasNext: function() {
		return this.current < this.length;
	}
	,next: function() {
		return this.keys[this.current++];
	}
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = true;
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
var haxe_iterators_MapKeyValueIterator = function(map) {
	this.map = map;
	this.keys = map.keys();
};
haxe_iterators_MapKeyValueIterator.__name__ = true;
haxe_iterators_MapKeyValueIterator.prototype = {
	hasNext: function() {
		return this.keys.hasNext();
	}
	,next: function() {
		var key = this.keys.next();
		return { value : this.map.get(key), key : key};
	}
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var con = e.__constructs__[o._hx_index];
			var n = con._hx_name;
			if(con.__params__) {
				s = s + "\t";
				return n + "(" + ((function($this) {
					var $r;
					var _g = [];
					{
						var _g1 = 0;
						var _g2 = con.__params__;
						while(true) {
							if(!(_g1 < _g2.length)) {
								break;
							}
							var p = _g2[_g1];
							_g1 = _g1 + 1;
							_g.push(js_Boot.__string_rec(o[p],s));
						}
					}
					$r = _g;
					return $r;
				}(this))).join(",") + ")";
			} else {
				return n;
			}
		}
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
var signals_Signal = $hx_exports["Signal"] = function(fireOnAdd) {
	if(fireOnAdd == null) {
		fireOnAdd = false;
	}
	signals_BaseSignal.call(this,fireOnAdd);
};
signals_Signal.__name__ = true;
signals_Signal.__super__ = signals_BaseSignal;
signals_Signal.prototype = $extend(signals_BaseSignal.prototype,{
	dispatch: function() {
		if(this.mute) {
			return;
		}
		if(this.requiresSort) {
			this.callbacks.sort($bind(this,this.sortCallbacks));
			this.requiresSort = false;
		}
		var i = 0;
		while(i < this.callbacks.length) {
			var callbackData = this.callbacks[i];
			if(callbackData.repeat < 0 || callbackData.callCount <= callbackData.repeat) {
				this.toTrigger.push(callbackData);
			} else {
				callbackData.remove = true;
			}
			callbackData.callCount++;
			++i;
		}
		var j = this.callbacks.length - 1;
		while(j >= 0) {
			var callbackData = this.callbacks[j];
			if(callbackData.remove == true) {
				this.callbacks.splice(j,1);
			}
			--j;
		}
		var _g = 0;
		var _g1 = this.toTrigger.length;
		while(_g < _g1) {
			var l = _g++;
			if(this.toTrigger[l] != null) {
				this.toTrigger[l].dispatchMethod(this.toTrigger[l].callback,this.toTrigger[l]);
			}
		}
		this.toTrigger = [];
	}
	,dispatchCallback: function(callback,callbackData) {
		callback();
	}
	,dispatchCallback1: function(callback,callbackData) {
		throw haxe_Exception.thrown("Use Signal 1");
	}
	,dispatchCallback2: function(callback,callbackData) {
		throw haxe_Exception.thrown("Use Signal 2");
	}
	,dispatchCallback3: function(callback,callbackData) {
		throw haxe_Exception.thrown("Use Signal 3");
	}
});
var tink_core_Callback = {};
tink_core_Callback.invoke = function(this1,data) {
	if(tink_core_Callback.depth < 500) {
		tink_core_Callback.depth++;
		this1(data);
		tink_core_Callback.depth--;
	} else {
		tink_core_Callback.defer(function() {
			this1(data);
		});
	}
};
tink_core_Callback.defer = function(f) {
	haxe_Timer.delay(f,0);
};
var tink_core_SimpleLink = function(f) {
	this.f = f;
};
tink_core_SimpleLink.__name__ = true;
tink_core_SimpleLink.prototype = {
	cancel: function() {
		if(this.f != null) {
			this.f();
			this.f = null;
		}
	}
};
var tink_core__$Callback_LinkPair = function(a,b) {
	this.dissolved = false;
	this.a = a;
	this.b = b;
};
tink_core__$Callback_LinkPair.__name__ = true;
tink_core__$Callback_LinkPair.prototype = {
	cancel: function() {
		if(!this.dissolved) {
			this.dissolved = true;
			var this1 = this.a;
			if(this1 != null) {
				this1.cancel();
			}
			var this1 = this.b;
			if(this1 != null) {
				this1.cancel();
			}
			this.a = null;
			this.b = null;
		}
	}
};
var tink_core__$Callback_ListCell = function(cb,list) {
	if(cb == null) {
		throw haxe_Exception.thrown("callback expected but null received");
	}
	this.cb = cb;
	this.list = list;
};
tink_core__$Callback_ListCell.__name__ = true;
tink_core__$Callback_ListCell.prototype = {
	cancel: function() {
		if(this.list != null) {
			var list = this.list;
			this.cb = null;
			this.list = null;
			if(--list.used <= list.cells.length >> 1) {
				list.compact();
			}
		}
	}
};
var tink_core_SimpleDisposable = function(dispose) {
	this.disposeHandlers = [];
	this.f = dispose;
};
tink_core_SimpleDisposable.__name__ = true;
tink_core_SimpleDisposable.noop = function() {
};
tink_core_SimpleDisposable.prototype = {
	dispose: function() {
		var _g = this.disposeHandlers;
		if(_g != null) {
			var v = _g;
			this.disposeHandlers = null;
			var f = this.f;
			this.f = tink_core_SimpleDisposable.noop;
			f();
			var _g = 0;
			while(_g < v.length) {
				var h = v[_g];
				++_g;
				h();
			}
		}
	}
};
var tink_core_CallbackList = function(destructive) {
	if(destructive == null) {
		destructive = false;
	}
	this.onfill = function() {
	};
	this.ondrain = function() {
	};
	this.busy = false;
	this.queue = [];
	this.used = 0;
	var _gthis = this;
	tink_core_SimpleDisposable.call(this,function() {
		if(!_gthis.busy) {
			_gthis.destroy();
		}
	});
	this.destructive = destructive;
	this.cells = [];
};
tink_core_CallbackList.__name__ = true;
tink_core_CallbackList.__super__ = tink_core_SimpleDisposable;
tink_core_CallbackList.prototype = $extend(tink_core_SimpleDisposable.prototype,{
	destroy: function() {
		var _g = 0;
		var _g1 = this.cells;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			c.cb = null;
			c.list = null;
		}
		this.queue = null;
		this.cells = null;
		if(this.used > 0) {
			this.used = 0;
			var fn = this.ondrain;
			if(tink_core_Callback.depth < 500) {
				tink_core_Callback.depth++;
				fn();
				tink_core_Callback.depth--;
			} else {
				tink_core_Callback.defer(fn);
			}
		}
	}
	,invoke: function(data) {
		var _gthis = this;
		if(tink_core_Callback.depth < 500) {
			tink_core_Callback.depth++;
			if(_gthis.disposeHandlers != null) {
				if(_gthis.busy) {
					if(_gthis.destructive != true) {
						var _g = $bind(_gthis,_gthis.invoke);
						var data1 = data;
						var tmp = function() {
							_g(data1);
						};
						_gthis.queue.push(tmp);
					}
				} else {
					_gthis.busy = true;
					if(_gthis.destructive) {
						_gthis.dispose();
					}
					var length = _gthis.cells.length;
					var _g1 = 0;
					var _g2 = length;
					while(_g1 < _g2) {
						var i = _g1++;
						var _this = _gthis.cells[i];
						if(_this.list != null) {
							_this.cb(data);
						}
					}
					_gthis.busy = false;
					if(_gthis.disposeHandlers == null) {
						_gthis.destroy();
					} else {
						if(_gthis.used < _gthis.cells.length) {
							_gthis.compact();
						}
						if(_gthis.queue.length > 0) {
							(_gthis.queue.shift())();
						}
					}
				}
			}
			tink_core_Callback.depth--;
		} else {
			tink_core_Callback.defer(function() {
				if(_gthis.disposeHandlers != null) {
					if(_gthis.busy) {
						if(_gthis.destructive != true) {
							var _g = $bind(_gthis,_gthis.invoke);
							var data1 = data;
							var tmp = function() {
								_g(data1);
							};
							_gthis.queue.push(tmp);
						}
					} else {
						_gthis.busy = true;
						if(_gthis.destructive) {
							_gthis.dispose();
						}
						var length = _gthis.cells.length;
						var _g1 = 0;
						var _g2 = length;
						while(_g1 < _g2) {
							var i = _g1++;
							var _this = _gthis.cells[i];
							if(_this.list != null) {
								_this.cb(data);
							}
						}
						_gthis.busy = false;
						if(_gthis.disposeHandlers == null) {
							_gthis.destroy();
						} else {
							if(_gthis.used < _gthis.cells.length) {
								_gthis.compact();
							}
							if(_gthis.queue.length > 0) {
								(_gthis.queue.shift())();
							}
						}
					}
				}
			});
		}
	}
	,compact: function() {
		if(this.busy) {
			return;
		} else if(this.used == 0) {
			this.resize(0);
			var fn = this.ondrain;
			if(tink_core_Callback.depth < 500) {
				tink_core_Callback.depth++;
				fn();
				tink_core_Callback.depth--;
			} else {
				tink_core_Callback.defer(fn);
			}
		} else {
			var compacted = 0;
			var _g = 0;
			var _g1 = this.cells.length;
			while(_g < _g1) {
				var i = _g++;
				var _g2 = this.cells[i];
				var _g3 = _g2.list;
				if(_g2.cb != null) {
					var v = _g2;
					if(compacted != i) {
						this.cells[compacted] = v;
					}
					if(++compacted == this.used) {
						break;
					}
				}
			}
			this.resize(this.used);
		}
	}
	,resize: function(length) {
		this.cells.length = length;
	}
});
var tink_core_TypedError = function() { };
tink_core_TypedError.__name__ = true;
tink_core_TypedError.tryFinally = function(f,cleanup) {
	try { return f(); } finally { cleanup(); }
	return null;
};
var tink_domspec_ClassName = {};
tink_domspec_ClassName.ofString = function(s) {
	if(s == null) {
		return null;
	} else {
		var this1 = StringTools.trim(s);
		return this1;
	}
};
var tink_pure_NodeIterator = function(node) {
	this.list = [];
	if(node != null) {
		this.list.push(node);
	}
};
tink_pure_NodeIterator.__name__ = true;
tink_pure_NodeIterator.prototype = {
	hasNext: function() {
		return this.list.length > 0;
	}
	,next: function() {
		var _g = this.list.pop();
		if(_g == null) {
			return null;
		} else {
			var next = _g;
			var _g = -next.tails.length;
			var _g1 = 0;
			while(_g < _g1) {
				var i = _g++;
				this.list.push(next.tails[-i - 1]);
			}
			return next.value;
		}
	}
};
var tink_state__$Scheduler_DirectScheduler = function() {
	this.queue = null;
};
tink_state__$Scheduler_DirectScheduler.__name__ = true;
tink_state__$Scheduler_DirectScheduler.prototype = {
	schedule: function(s) {
		if(this.queue != null) {
			this.queue.push(s);
		} else {
			var wasUpdating = tink_state_Observable.isUpdating;
			tink_state_Observable.isUpdating = true;
			tink_core_TypedError.tryFinally($bind(s,s.run),function() {
				tink_state_Observable.isUpdating = wasUpdating;
			});
		}
	}
};
var tink_state_Scheduler = {};
tink_state_Scheduler.batched = function(run) {
	return new tink_state__$Scheduler_BatchScheduler(run);
};
tink_state_Scheduler.batcher = function() {
	var later = function(fn) {
		haxe_Timer.delay(fn,10);
	};
	var later1;
	try {
		later1 = window.requestAnimationFrame != null ? function(fn) {
			return window.requestAnimationFrame(fn);
		} : later;
	} catch( _g ) {
		later1 = later;
	}
	var asap = function(fn) {
		later1(fn);
	};
	var asap1;
	try {
		var p = Promise.resolve(42);
		asap1 = function(fn) {
			return p.then(fn);
		};
	} catch( _g ) {
		asap1 = asap;
	}
	return function(b,isRerun) {
		var _g = $bind(b,b.progress);
		var maxSeconds = .01;
		(isRerun ? later1 : asap1)(function() {
			return _g(maxSeconds);
		});
	};
};
var tink_state__$Scheduler_BatchScheduler = function(run) {
	this.scheduled = false;
	this.queue = [];
	this.run = run;
};
tink_state__$Scheduler_BatchScheduler.__name__ = true;
tink_state__$Scheduler_BatchScheduler.prototype = {
	progress: function(maxSeconds) {
		var _gthis = this;
		var wasUpdating = tink_state_Observable.isUpdating;
		tink_state_Observable.isUpdating = true;
		return tink_core_TypedError.tryFinally(function() {
			var end = HxOverrides.now() / 1000 + maxSeconds;
			while(true) {
				var old = _gthis.queue;
				_gthis.queue = [];
				var _g = 0;
				while(_g < old.length) {
					var o = old[_g];
					++_g;
					o.run();
				}
				if(!(_gthis.queue.length > 0 && HxOverrides.now() / 1000 < end)) {
					break;
				}
			}
			if(_gthis.queue.length > 0) {
				_gthis.run(_gthis,true);
				return true;
			} else {
				return _gthis.scheduled = false;
			}
		},function() {
			tink_state_Observable.isUpdating = wasUpdating;
		});
	}
	,schedule: function(s) {
		this.queue.push(s);
		if(!this.scheduled) {
			this.scheduled = true;
			this.run(this,false);
		}
	}
};
var tink_state_Observable = {};
tink_state_Observable.__properties__ = {get_value:"get_value"};
tink_state_Observable.get_value = function(this1) {
	var ret = this1.getValue();
	if(tink_state_internal_AutoObservable.cur != null && this1.canFire()) {
		tink_state_internal_AutoObservable.cur.subscribeTo(this1,ret);
	}
	return ret;
};
var tink_state__$Scheduler_JustOnce = function() {
};
tink_state__$Scheduler_JustOnce.__name__ = true;
tink_state__$Scheduler_JustOnce.call = function(f) {
	var ret;
	var _g = tink_state__$Scheduler_JustOnce.pool.pop();
	if(_g == null) {
		ret = new tink_state__$Scheduler_JustOnce();
	} else {
		var v = _g;
		ret = v;
	}
	ret.f = f;
	return ret;
};
tink_state__$Scheduler_JustOnce.prototype = {
	run: function() {
		var f = this.f;
		this.f = null;
		tink_state__$Scheduler_JustOnce.pool.push(this);
		f();
	}
};
var tink_state_State = {};
tink_state_State.__properties__ = {get_value:"get_value"};
tink_state_State.get_value = function(this1) {
	var ret = this1.getValue();
	if(tink_state_internal_AutoObservable.cur != null && this1.canFire()) {
		tink_state_internal_AutoObservable.cur.subscribeTo(this1,ret);
	}
	return ret;
};
tink_state_State._new = function(value,comparator,guard,onStatusChange) {
	var this1;
	if(guard == null) {
		this1 = new tink_state__$State_SimpleState(value,comparator,onStatusChange);
	} else {
		var f = guard;
		this1 = new tink_state__$State_GuardedState(value,guard,comparator,onStatusChange);
	}
	return this1;
};
var tink_state__$State_SimpleState = function(value,comparator,onStatusChange) {
	tink_state_internal_Invalidator.call(this);
	this.value = value;
	this.comparator = comparator;
	if(onStatusChange != null) {
		var _g = onStatusChange;
		var a1 = false;
		var tmp = function() {
			_g(a1);
		};
		this.list.ondrain = tmp;
		var _g1 = onStatusChange;
		var a11 = true;
		var tmp = function() {
			_g1(a11);
		};
		this.list.onfill = tmp;
	}
};
tink_state__$State_SimpleState.__name__ = true;
tink_state__$State_SimpleState.__super__ = tink_state_internal_Invalidator;
tink_state__$State_SimpleState.prototype = $extend(tink_state_internal_Invalidator.prototype,{
	getValue: function() {
		return this.value;
	}
	,getComparator: function() {
		return this.comparator;
	}
	,set: function(value) {
		if(tink_state_Observable.isUpdating && tink_state_Scheduler.direct.queue == null) {
			$global.console.warn("Updating state in a binding");
		}
		var this1 = this.comparator;
		var b = this.value;
		var tmp;
		if(this1 == null) {
			tmp = value == b;
		} else {
			var f = this1;
			tmp = f(value,b);
		}
		if(!tmp) {
			this.value = value;
			this.fire();
		}
		return value;
	}
});
var tink_state__$State_GuardedState = function(value,guard,comparator,onStatusChange) {
	this.guardApplied = false;
	tink_state__$State_SimpleState.call(this,value,comparator,onStatusChange);
	this.guard = guard;
};
tink_state__$State_GuardedState.__name__ = true;
tink_state__$State_GuardedState.__super__ = tink_state__$State_SimpleState;
tink_state__$State_GuardedState.prototype = $extend(tink_state__$State_SimpleState.prototype,{
	getValue: function() {
		if(!this.guardApplied) {
			this.guardApplied = true;
			return this.value = this.guard(this.value);
		} else {
			return this.value;
		}
	}
	,set: function(value) {
		if(!this.guardApplied) {
			this.guardApplied = true;
			this.value = this.guard(this.value);
		}
		return tink_state__$State_SimpleState.prototype.set.call(this,this.guard(value));
	}
});
var tink_state_internal__$AutoObservable_Computation = {};
tink_state_internal__$AutoObservable_Computation.sync = function(f) {
	var this1 = function(_,_1) {
		return f();
	};
	return this1;
};
var tink_state_internal__$AutoObservable_SubscriptionTo = function(source,cur,owner) {
	this.used = true;
	this.source = source;
	this.last = cur;
	this.lastRev = source.getRevision();
	this.owner = owner;
	if(owner.hot) {
		this.link = this.source.onInvalidate(this.owner);
	}
};
tink_state_internal__$AutoObservable_SubscriptionTo.__name__ = true;
var tink_state_internal_AutoObservable = function(compute,comparator) {
	this.sync = true;
	this.waiting = false;
	var this1 = new Map();
	this.dependencies = this1;
	this.last = null;
	this.status = 0;
	this.hot = false;
	var _gthis = this;
	tink_state_internal_Invalidator.call(this);
	this.compute = compute;
	this.comparator = comparator;
	this.list.onfill = function() {
		_gthis.getValue();
		_gthis.getRevision();
		if(_gthis.subscriptions != null) {
			var _g = 0;
			var _g1 = _gthis.subscriptions;
			while(_g < _g1.length) {
				var s = _g1[_g];
				++_g;
				s.link = s.source.onInvalidate(s.owner);
			}
		}
		_gthis.hot = true;
	};
	this.list.ondrain = function() {
		_gthis.hot = false;
		if(_gthis.subscriptions != null) {
			var _g = 0;
			var _g1 = _gthis.subscriptions;
			while(_g < _g1.length) {
				var s = _g1[_g];
				++_g;
				var this1 = s.link;
				if(this1 != null) {
					this1.cancel();
				}
			}
		}
	};
};
tink_state_internal_AutoObservable.__name__ = true;
tink_state_internal_AutoObservable.__super__ = tink_state_internal_Invalidator;
tink_state_internal_AutoObservable.prototype = $extend(tink_state_internal_Invalidator.prototype,{
	getRevision: function() {
		if(this.hot) {
			return this.revision;
		}
		if(this.subscriptions == null) {
			this.getValue();
		}
		var _g = 0;
		var _g1 = this.subscriptions;
		while(_g < _g1.length) {
			var s = _g1[_g];
			++_g;
			if(s.source.getRevision() > this.revision) {
				return this.revision = tink_state_internal_Revision._new();
			}
		}
		return this.revision;
	}
	,subsValid: function() {
		if(this.subscriptions == null) {
			return false;
		}
		var _g = 0;
		var _g1 = this.subscriptions;
		while(_g < _g1.length) {
			var s = _g1[_g];
			++_g;
			if(s.source.getRevision() != s.lastRev) {
				return false;
			}
		}
		return true;
	}
	,isValid: function() {
		if(this.status != 0) {
			if(!this.hot) {
				return this.subsValid();
			} else {
				return true;
			}
		} else {
			return false;
		}
	}
	,getComparator: function() {
		return this.comparator;
	}
	,getValue: function() {
		var _gthis = this;
		var doCompute = function() {
			_gthis.status = 1;
			if(_gthis.subscriptions != null) {
				var _g = 0;
				var _g1 = _gthis.subscriptions;
				while(_g < _g1.length) {
					var s = _g1[_g];
					++_g;
					s.used = false;
				}
			}
			_gthis.subscriptions = [];
			_gthis.sync = true;
			var before = tink_state_internal_AutoObservable.cur;
			tink_state_internal_AutoObservable.cur = _gthis;
			var ret = _gthis.compute(_gthis);
			tink_state_internal_AutoObservable.cur = before;
			_gthis.last = ret;
			_gthis.sync = false;
			if(_gthis.subscriptions.length == 0 && !_gthis.waiting) {
				_gthis.list.dispose();
				_gthis.observers.clear();
			}
		};
		var prevSubs = this.subscriptions;
		var count = 0;
		while(!this.isValid()) if(++count == tink_state_Observable.MAX_ITERATIONS) {
			throw haxe_Exception.thrown("no result after " + tink_state_Observable.MAX_ITERATIONS + " attempts");
		} else if(this.subscriptions != null) {
			var valid = true;
			var _g = 0;
			var _g1 = this.subscriptions;
			while(_g < _g1.length) {
				var s = _g1[_g];
				++_g;
				var nextRev = s.source.getRevision();
				var tmp;
				if(nextRev == s.lastRev) {
					tmp = false;
				} else {
					s.lastRev = nextRev;
					var before = s.last;
					s.last = s.source.getValue();
					var this1 = s.source.getComparator();
					var a = s.last;
					var tmp1;
					if(this1 == null) {
						tmp1 = a == before;
					} else {
						var f = this1;
						tmp1 = f(a,before);
					}
					tmp = !tmp1;
				}
				if(tmp) {
					valid = false;
					break;
				}
			}
			if(valid) {
				this.status = 1;
			} else {
				doCompute();
				if(prevSubs != null) {
					var _g2 = 0;
					while(_g2 < prevSubs.length) {
						var s1 = prevSubs[_g2];
						++_g2;
						if(!s1.used) {
							if(this.hot) {
								var this2 = s1.link;
								if(this2 != null) {
									this2.cancel();
								}
							}
							this.dependencies.delete(s1.source);
						}
					}
				}
			}
		} else {
			doCompute();
		}
		return this.last;
	}
	,subscribeTo: function(source,cur) {
		var _g = this.dependencies.get(source);
		if(_g == null) {
			var sub = new tink_state_internal__$AutoObservable_SubscriptionTo(source,cur,this);
			this.dependencies.set(source,sub);
			this.subscriptions.push(sub);
		} else {
			var v = _g;
			if(!v.used) {
				v.used = true;
				v.last = cur;
				this.subscriptions.push(v);
			}
		}
	}
	,invalidate: function() {
		if(this.status == 1) {
			this.status = 0;
			this.fire();
		}
	}
});
var tink_state_internal_Revision = {};
tink_state_internal_Revision._new = function() {
	var this1 = tink_state_internal_Revision;
	var this2 = this1.counter += 1.0;
	return this2;
};
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
if(typeof(performance) != "undefined" ? typeof(performance.now) == "function" : false) {
	HxOverrides.now = performance.now.bind(performance);
}
String.__name__ = true;
Array.__name__ = true;
Object.defineProperties(signals_BaseSignal.prototype,{ "numListeners" : { get : function () { return this.get_numListeners (); }, set : function (v) { return this.set_numListeners (v); }}, "hasListeners" : { get : function () { return this.get_hasListeners (); }, set : function (v) { return this.set_hasListeners (v); }}});
coconut_diffing_TypeId.idCounter = 0;
haxe_ds_ObjectMap.count = 0;
js_Boot.__toStr = ({ }).toString;
tink_state_internal_Revision.counter = .0;
tink_pure__$List_Node.EMPTY = [];
client_data_Data.$name = client_model_util_LocalizedString.fromString("Erik Kubiak");
client_data_Data.title = client_model_util_LocalizedString.fromArrayOfString(["Développeur de Jeux polyvalent","Versatile Game Programmer"]);
client_data_Showoff.deadsigns = tink_pure_List.fromArray([{ title : client_model_util_LocalizedString.fromArrayOfString(["Post Process d'UI sur une ancienne télévision","Old TV UI Post Process"]), link : "./images/showoff/deadsigns/ui_postprocess_compare-min.png", description : client_model_util_TextData.fromMultipleString(["Ici, l'objectif était de pouvoir déformer l'interface comme sur une ancienne télévision. " + "Il fallait donc pouvoir appliquer un post-process sur une UI ce qui est impossible directement sur Unity. " + "J'ai donc développé un outil qui permet de facilement configurer l'application d'un Post Process sur une UI placée en 3D. " + "Cela m'a permis de travailler sur deux domaines passionnants: la programmation graphique et le tooling. ","There, the goal was to deform the user interface like an old TV." + "Thus, we need to apply a post-process on the UI which is impossible directly in Unity." + "So, I developed a tool which allows us to configure easily the post process application on a 3D UI." + "It allowed me to work on two passionnatin fields: graphic programming and tooling. "])}]);
client_data_Showoff.pristimantis = tink_pure_List.fromArray([{ title : client_model_util_LocalizedString.fromString("Dokki - Match3"), link : "./images/showoff/dokki/match3.gif", description : client_model_util_TextData.fromMultipleString(["Ce match3 est l'un des jeux que j'ai eu l'occasion de réaliser. J'étais à la fois architecte et principal développeur. " + "L'architecture était complexe car beaucoup de fonctionnalité se retrouvait aussi dans l'autre jeux. " + "J'ai alors pensé le tout comme une suite de paquets dépendants entre eux. " + "J'ai pu travailler beaucoup de choses, notamment du gameplay. " + "Les animations que vous voyez ici ont été implementés par mes soins en utilisant des scripts et des animations curves, " + "le tout sous la direction artistique du client.","This match3 is one of two game I had the opportunity to work on. I was both architect and main developer. " + "The architecture was quiet complex because a lot of features can be find in the other game. " + "I thought those projects as a list of pacakages depending on each others. " + "I had work on multiple things, especially gameplay. " + "The animations were implemented by me, combining scripts and animation curves, while following the artistic direction of the client. "])},{ title : client_model_util_LocalizedString.fromArrayOfString(["Aura - Une application de Réalité Augmentée","Aura - An Augmented Reality Application"]), link : "https://www.youtube.com/embed/VwwSeBVBqFo", description : client_model_util_TextData.fromMultipleString(["L'autre projet sur lequel j'ai travaillé était particulièrement intéressant. " + "C'est une application de RA de vulgarisation artistique à l'échelle d'une ville. " + "Il y a plusieurs points dans la ville de Bayeux ou vous pouvez scanner le batiment puis voir une oeuvre d'art. " + "Ce projet a été particulièrement intéressant car j'ai du travailler sur le base de code d'autres. " + "L'optimisation était aussi très importante vu la consommation mémoire de la réalité augmentée. ","The other project I had to work on was pretty interesting. It is an AR application to popularize art at city scale. " + "There is multiple spots in the city of Bayeux where you can scan the building and then see an art piece. " + "This project was particularly interesting as I had to work on other code base. " + "The optimisation was also really important as Augmented Reality can be really memory consuming. "]), type : client_model_util_MediaType.Video},{ title : client_model_util_LocalizedString.fromString("Dokki- Tetris Like"), link : "./images/showoff/dokki/tetris.gif", description : client_model_util_TextData.fromMultipleString(["L'autre jeu à réaliser était un tetris avec en plus l'intégration de la physique. " + "Ce projet a été particulièrement intéressant car cela m'a permis de me rendre compte que ma séparation en paquet m'a fait gagner beaucoup de temps. " + "Ce soucis du code propre m'a permis de développer ce jeu beaucoup plus rapidement. " + "J'ai alors pu me concentrer sur les algorithmes à developper pour le gameplay. ","The other game was a tetris with physics. " + "This project was particularly interesting because it showed me that speration using packages saved me a lot of time. " + "This interest for nice code allowed me to develop that game faster. " + "So, I focused on the algorithm proper to the gameplay."])}]);
client_data_Experiences.value = { header : client_model_util_LocalizedString.fromArrayOfString(["Expériences","Experiences"]), items : tink_pure_List.fromArray([haxe_ds_Either.Left({ value : { header : client_model_util_LocalizedString.fromArrayOfString(["Développeur Unity","Unity Developer"]), subheaders : tink_pure_List.fromArray([client_model_util_LocalizedString.fromArrayOfString(["Graphique, Gameplay & Outils","Graphic, Gameplay & Tools"])]), dates : { start : client_model_util_DateYear.fromString("Jan. 2021"), end : client_model_util_DateYear.fromMultipleString(["Auj.","Now"])}, content : tink_pure_List.fromArray([client_model_util_TextData.fromMultipleString(["Sur mon temps libre, je travaille avec deux autres personnes sur le jeu Dead Signs. " + "C'est un jeu de tir à la première personne ou il faut se défendre contre des vagues ennemies. " + "Prenant ses racines dans la culture corse, vous pourrez trouver le folklore représenté harmonieusement. ","On my free time, I work with two other persons on the video game Dead Signs. " + "It is a first person shooter where you need to defend against waves of enemies. " + "With roots in the Corsican culture, you can find the folklore harmoniously represented."]),client_model_util_TextData.fromMultipleString(["J'y développe des outils en gardant en tête l'expérience utilisateur afin que tous puissent les utiliser facilement. " + "Je travaille aussi sur la programmation graphique ou je produis principalement des shaders, " + "mais je code aussi des fonctionnalités graphiques pour Unity HDRP (Custom Pass, etc.). " + "Je n'oublie pas pour autant le gameplay et j'en développe très régulièrement. " + "Je garde alors à l'esprit maintenabilité, testabilité et extensibilité. " + "C'est un projet particulièrement passionnant qui me permet de confronter mes compétences à d'autres domaines " + " et d'apprendre de nouvelles technologies.","I develop tools while keeping in my mind user experience so that all can easily use them. " + "I also work on graphic programming where I mainly produce shaders, " + "but I also code graphic features for Unity HDRP (Custom Pass, etc.). " + "I don't forget gameplay et I often develop some. " + "I keep in mind maintainability, testability and extensibility. " + "It is a passionnating project which allows me to confront my skills with other fields and learn new technologies. "])]), links : tink_pure_List.fromArray([{ name : client_model_util_LocalizedString.fromArrayOfString(["Site Web","Website"]), link : "https://www.deadsigns.fr/"},{ name : client_model_util_LocalizedString.fromString("Steam"), link : "https://www.deadsigns.fr/"},{ name : client_model_util_LocalizedString.fromString("LinkedIn"), link : "https://www.linkedin.com/company/deadsigns"}])}, medias : client_data_Showoff.deadsigns}),haxe_ds_Either.Left({ value : { header : client_model_util_LocalizedString.fromArrayOfString(["Ingénieur Développeur Logiciel","Software Developer Engineer"]), dates : { start : client_model_util_DateYear.fromString("Jan. 2021"), end : client_model_util_DateYear.fromMultipleString(["Auj.","Now"])}, place : client_model_util_LocalizedString.fromString("Climax Studio Ltd"), content : tink_pure_List.fromArray([client_model_util_TextData.fromMultipleString(["Depuis que j'ai commencé, je travaille sur un jeu AAA top secret. Malheureusement, je ne peux pas en dire plus 😥","Since I started, I work on a secret AAA game. Unfortunately, I can't say more 😥"])]), links : tink_pure_List.fromArray([{ name : client_model_util_LocalizedString.fromArrayOfString(["Site Web","Website"]), link : "https://www.climaxstudios.com/"},{ name : client_model_util_LocalizedString.fromString("LinkedIn"), link : "https://www.linkedin.com/company/climax"}])}}),haxe_ds_Either.Right({ first : { header : client_model_util_LocalizedString.fromArrayOfString(["Enseignant Vacataire","Supply Teacher"]), dates : { start : client_model_util_DateYear.fromMultipleString(["Fev. 2021","Feb. 2021"]), end : client_model_util_DateYear.fromMultipleString(["Auj.","Now"])}, place : client_model_util_LocalizedString.fromString("IUT de Saint-Lo"), content : tink_pure_List.fromArray([client_model_util_TextData.fromMultipleString(["J'enseigne les bonnes pratiques du développement sous Unity à des étudiants de deuxième année. " + "Pour cela, j'applique une méthodologie à base de projets tout en les accompagnant. " + "Ils ont deux projets à réaliser: un de Réalité Augmentée ou ils doivent proposer une application de Marketing, " + "un de jeu-vidéo ou ils doivent en produire un de A à Z. " + "Étant donné le nombre de projets possibles, je dois toujours être très alerte et à jour dans les technologies " + "afin de pouvoir satisfaire leurs curiosité.","I am teaching the good practices of development with Unity to second year students. " + "To this end, I use a project based methodology while supporting them. " + "They have to project to work on: an Augmented Reality one where they have to propose a marketing app, " + "a video-game project where they have create to create one from scratch. " + "Given the number of possible projects, I always need to be alert and up to date with technologies " + "to satisfy their curiosity."])])}, second : { header : client_model_util_LocalizedString.fromArrayOfString(["Enseignant Vacataire","Supply Teacher"]), dates : { start : client_model_util_DateYear.fromString("Oct. 2020"), end : client_model_util_DateYear.fromMultipleString(["Auj.","Now"])}, place : client_model_util_LocalizedString.fromString("Ensicaen"), content : tink_pure_List.fromArray([client_model_util_TextData.fromMultipleString(["J'enseigne les fondamentaux de la Réalité Virtuelle en cours magistraux à des étudiants de dernière année. " + "J'enseigne aussi les fondamentaux d'Unity tout en utilisant une méthodologie à base de projets.","I am teaching the fundamentals of Virtual Reality to last year students in lectures. " + "I am also teaching the fundamentals of Unity while using a project based methodology."])])}}),haxe_ds_Either.Left({ value : { header : client_model_util_LocalizedString.fromArrayOfString(["Développeur Unity","Unity Developer"]), subheaders : tink_pure_List.fromArray([client_model_util_LocalizedString.fromArrayOfString(["Stagiaire ➔ Lead Développeur","Intern ➔ Lead Developer"])]), dates : { start : client_model_util_DateYear.fromString("Mar. 2020"), end : client_model_util_DateYear.fromString("Jan. 2021")}, place : client_model_util_LocalizedString.fromString("Pristimantis"), content : tink_pure_List.fromArray([client_model_util_TextData.fromMultipleString(["Pristimantis est une entreprise de conception d'expériences intéractives. " + "Cela va du jeu \"classique\" à des expériences en RA/RV. " + "ils utilisent principalement Unity et mes compétences ont été particulièrement remarquées pendant mon stage, " + "car on m'a proposé un poste de Lead Développeur. " + "En plus de mon travail de développeur, je devais alors aider les autres membres de l'équipe en les guidant. " + "Ce travail m'a offert l'opportunité de travailler sur deux projets très intéressants: une application de RA et des jeux hyper-casuals. " + "J'étais alors le principal interlocuteur auprès du client ce qui m'a permis de devenir co-chef de projet.","Pristimantis is a company which develops interactive experiences. " + "It goes from \"classical\" games to AR/VR experiences. " + "They mainly use Unity and my skills have been noticed as I have been hired as a Lead Developer. " + "In addition to my developer work, I had to help other members by guiding them. " + "This work offered me the opportunity to work on two interesting projects: one AR application and hyper-casual games. " + "I was the main contact for the client, so it allowed to become a co-project manager. "])]), links : tink_pure_List.fromArray([{ name : client_model_util_LocalizedString.fromArrayOfString(["Site Web","Website"]), link : "https://www.pristimantis.com/"},{ name : client_model_util_LocalizedString.fromString("Youtube"), link : "https://www.youtube.com/channel/UCGgF5PdmuZVHSQt3A41R44Q"},{ name : client_model_util_LocalizedString.fromString("LinkedIn"), link : "https://www.linkedin.com/company/pristimantis-sas/"}])}, medias : client_data_Showoff.pristimantis})])};
client_data_Formation.value = { header : client_model_util_LocalizedString.fromArrayOfString(["Formations","Education"]), items : tink_pure_List.fromArray([{ header : client_model_util_LocalizedString.fromArrayOfString(["Diplôme d'Ingénieur","Engineer Diploma"]), subheaders : tink_pure_List.fromArray([client_model_util_LocalizedString.fromArrayOfString(["en Informatique","in Computer Sciences (Master of Science)"]),client_model_util_LocalizedString.fromArrayOfString(["Spécialité Image, Son & Machine Learning","Image, Sound, & Machine Learning speciality"])]), dates : { start : client_model_util_DateYear.fromInt(2017), end : client_model_util_DateYear.fromInt(2020)}, place : client_model_util_LocalizedString.fromString("Ensicaen"), content : tink_pure_List.fromArray([client_model_util_TextData.fromMultipleString(["Durant ce cursus, j'ai pu approfondir ce que j'avais vu précédemment (programmation, gestion de projet, etc.). " + "Ça a été aussi l'occasion de découvrir de nouvelles choses: le génie logiciel, l'algèbre linéaire, la synthèse d'image, etc. " + "J'ai tout particulièrement aimer la synthèse d'image qui m'a permis de découvrir le milieu passionnant de la programmation graphique. " + "J'y ai découvert OpenGL, Unity et aussi les fondements du Raytracing en programmant un basique moteur de rendu en C++. " + "Cette formation a parfaitement complété mes compétences et me permet d'appréhender aujourd'hui la plupart des problèmes... " + "Mais j'apprends toujours de nouvelles choses car j'adore ça!","During this course, I refined what I had seen before (programming, project management, etc.). " + "It was also the opportunity to discover new things such as software engineering, linear algebra, image synthesis, etc. " + "I particularly loved image synthesis which allowed me to discover the thrilling world of graphic programming. " + "I discovered OpenGl, Unity and the foundations of Raytracing by programming a basic renderer in C++. " + "This training perfectly completed my skills and now allows me to apprehend most of the problems... " + "But I am always learning new things as I love it!"])])},{ header : client_model_util_LocalizedString.fromArrayOfString(["DUT Informatique","Associate Degree In Computer Sciences"]), dates : { start : client_model_util_DateYear.fromInt(2015), end : client_model_util_DateYear.fromInt(2017)}, place : client_model_util_LocalizedString.fromString("IUT du Havre"), content : tink_pure_List.fromArray([client_model_util_TextData.fromMultipleString(["Cette formation a été un réel bond dans la passion qu'est l'informatique. " + "J'ai pu découvrir un grand nombre de technologies et appliquer des compétences telle que la gestion de projet. " + "Cette formation est particulièrement enrichissante, car en plus du stage, les professeurs nous mettent régulièrement en conditions professionnelles. " + "Elle m'a beaucoup appris mais m'a surtout montré que l'informatique est ma voie.","This course was a big leap into the passion of computer sciences. " + "I was able to learn a lot of technologies and apply skills such as project management. " + "It was particularly enriching, in addition to the internship, the teachers often train us in professionnal conditions. " + "This course has taught me a lot, but above all it showed me that computer sciences is my path."])])}])};
client_data_Medias.value = { header : client_model_util_LocalizedString.fromArrayOfString(["Médias","Medias"]), items : tink_pure_List.fromArray([{ link : { name : client_model_util_LocalizedString.fromString("LinkedIn"), link : "https://www.linkedin.com/in/erik-kubiak/"}, logoPath : "./images/logo/linkedin.svg"},{ link : { name : client_model_util_LocalizedString.fromString("GitHub"), link : "https://github.com/ErikRikoo"}, logoPath : "./images/logo/github.svg"},{ link : { name : client_model_util_LocalizedString.fromString("Twitter"), link : "https://twitter.com/KubiakErik"}, logoPath : "./images/logo/twitter.svg"},{ link : { name : client_model_util_LocalizedString.fromString("erikkubiak@gmail.com")}, logoPath : "./images/logo/email.svg"}])};
client_data_Presentation.value = { name : client_data_Data.$name, title : client_data_Data.title, content : tink_pure_List.fromArray([client_model_util_LocalizedString.fromArrayOfString(["Je suis un développeur de jeu (principalement Unity) qui adore travailler sur le graphisme, le gameplay ou sur des outils. " + "Je suis actuellement développeur C++ chez Climax Studios, sur un projet AAA secret. " + "Le jeu-vidéo est pour moi une passion, ainsi, sur mon temps personnel je travaille sur le jeu Dead Signs avec deux autres personnes. " + "J'y suis principalement développeur graphique et outils mais je travaille régulièrement sur du Gameplay. ","I am a Game Developer (mainly Unity) who loves working on Graphics, Gameplay and Tooling. " + "Currently, I am a C++ developer for Climax Studios, on a secret AAA project. " + "Video game is a passion for me, thus, on my free time I work on Dead Signs with two other persons. " + "I am mainly the Graphic and Tool developer but I often work on Gameplay."]),client_model_util_LocalizedString.fromArrayOfString(["Je suis un développeur autonome et très polyvalent. J'adore tout particlièrement aider les autres personnes. " + "Apprendre de nouvelle choses me passionne et je n'hésite pas à repousser mes limites. " + "La preuve ? Je sors de mes compétences pour apprendre doucement la modélisation 3D.","I am an autonomous and really versatile developer. I love particularly helping others. " + "Learning new things thrill me and I never hesitate to push my boundaries. " + "The proof? I am currently learning 3D modeling."])])};
client_data_Skills.value = { items : tink_pure_List.fromArray([{ header : client_model_util_LocalizedString.fromArrayOfString(["Compétences professionnelles ","Hard Skills"]), skills : tink_pure_List.fromArray([client_model_util_LocalizedString.fromString("C/C++, C#, Java, Haxe"),client_model_util_LocalizedString.fromString("HLSL, OpenGL"),client_model_util_LocalizedString.fromString("Python, Shell"),client_model_util_LocalizedString.fromString("React, NodeJS, HTML/CSS"),client_model_util_LocalizedString.fromArrayOfString(["Unity3D (Outils, SRP, etc.)","Unity3D (Tooling, SRP, etc.)"]),client_model_util_LocalizedString.fromString("Git, Perforce"),client_model_util_LocalizedString.fromString("Gitlab CI/CD, Jenkins"),client_model_util_LocalizedString.fromArrayOfString(["Géométrie 3D","3D Geometry"]),client_model_util_LocalizedString.fromArrayOfString(["Algèbre Linéaire","Linear Algebra"]),client_model_util_LocalizedString.fromArrayOfString(["Algorithmique Avancée, IA","Advanced Algorithmic, AI"]),client_model_util_LocalizedString.fromString("TDD"),client_model_util_LocalizedString.fromArrayOfString(["Méthodologie Agile","Agile Methodology"])])},{ header : client_model_util_LocalizedString.fromArrayOfString(["Compétences personnelles","Soft Skills"]), skills : tink_pure_List.fromArray([client_model_util_LocalizedString.fromString("Sociable"),client_model_util_LocalizedString.fromArrayOfString(["Polyvalent","Versatile"]),client_model_util_LocalizedString.fromArrayOfString(["Autonome","Autonomous"]),client_model_util_LocalizedString.fromArrayOfString(["Pédagogue","Pedagogist"]),client_model_util_LocalizedString.fromArrayOfString(["Créatif","Creative"]),client_model_util_LocalizedString.fromArrayOfString(["Rigoureux","Rigourous"]),client_model_util_LocalizedString.fromArrayOfString(["Dynamique","Dynamic"]),client_model_util_LocalizedString.fromArrayOfString(["Réactif","Reactive"])])}])};
client_utilities_AppEvents.onScroll = new signals_Signal1();
coconut_diffing_Root.byParent = new haxe_ds_ObjectMap();
coconut_diffing_internal_VEmpty.TYPE = (function($this) {
	var $r;
	var this1 = coconut_diffing_TypeId.idCounter++;
	$r = this1;
	return $r;
}(this));
coconut_ui_internal_ImplicitContext.ORPHAN = new tink_core__$Lazy_LazyConst(null);
coconut_vdom__$Html_Elt.events = [];
coconut_vdom__$Html_Elt.ELEMENTS = new coconut_vdom__$Html_Updater(function(target,field) {
	return "" + target + "." + field + " = null";
},{ className : function(t,_,v,_1) {
	if(!v) {
		t.removeAttribute("class");
	} else {
		t.className = v;
	}
}, style : function(t,_,nu,old) {
	coconut_vdom__$Html_Elt.updateStyle(t.style,nu,old);
}, role : function(t,_,nu,old) {
	if(nu == null) {
		t.removeAttribute("role");
	} else {
		t.setAttribute("role",nu);
	}
}, attributes : function(t,_,nu,old) {
	coconut_vdom__$Html_Elt.setAttributes(t,nu,old);
}, on : coconut_vdom__$Html_Elt.setEvent},function(rules,field) {
	if(Object.prototype.hasOwnProperty.call(rules,field)) {
		return field;
	} else if(StringTools.startsWith(field,"on")) {
		return "on";
	} else {
		return null;
	}
});
coconut_vdom__$Html_Elt.STYLES = new coconut_vdom__$Html_Updater(function(target,field) {
	return "" + target + "." + field + " = null";
},null,function(_,_1) {
	return null;
});
coconut_vdom_Html.nodeTypes = new haxe_ds_StringMap();
coconut_vdom_Html.UL = coconut_vdom_Html.nodeType("ul");
coconut_vdom_Html.SPAN = coconut_vdom_Html.nodeType("span");
coconut_vdom_Html.P = coconut_vdom_Html.nodeType("p");
coconut_vdom_Html.NAV = coconut_vdom_Html.nodeType("nav");
coconut_vdom_Html.LI = coconut_vdom_Html.nodeType("li");
coconut_vdom_Html.IMG = coconut_vdom_Html.nodeType("img");
coconut_vdom_Html.IFRAME = coconut_vdom_Html.nodeType("iframe");
coconut_vdom_Html.H5 = coconut_vdom_Html.nodeType("h5");
coconut_vdom_Html.H4 = coconut_vdom_Html.nodeType("h4");
coconut_vdom_Html.H3 = coconut_vdom_Html.nodeType("h3");
coconut_vdom_Html.H1 = coconut_vdom_Html.nodeType("h1");
coconut_vdom_Html.DIV = coconut_vdom_Html.nodeType("div");
coconut_vdom_Html.BUTTON = coconut_vdom_Html.nodeType("button");
coconut_vdom_Html.A = coconut_vdom_Html.nodeType("a");
coconut_vdom__$Html_Text.inst = new coconut_vdom__$Html_Text();
coconut_vdom_Renderer.BACKEND = new coconut_vdom__$Renderer_DomBackend();
tink_core_Callback.depth = 0;
tink_state_Scheduler.direct = new tink_state__$Scheduler_DirectScheduler();
tink_state_Observable.MAX_ITERATIONS = 100;
tink_state_Observable.scheduler = tink_state_Scheduler.batched(tink_state_Scheduler.batcher());
tink_state_Observable.isUpdating = false;
tink_state__$Scheduler_JustOnce.pool = [];
client_home_Main.main();
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
