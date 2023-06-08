(function ($global) { "use strict";
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
var client_WorkItemType = {};
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
tink_pure__$List_Node.prototype = {
	__class__: tink_pure__$List_Node
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
	,__class__: coconut_diffing_Factory
};
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
	,__class__: coconut_vdom__$Html_Updater
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
	,__class__: coconut_diffing_Properties
});
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
	,__class__: coconut_vdom__$Html_Elt
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
	,__class__: coconut_vdom__$Html_Svg
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
var tink_domspec_ClassName = {};
tink_domspec_ClassName.ofString = function(s) {
	if(s == null) {
		return null;
	} else {
		var this1 = StringTools.trim(s);
		return this1;
	}
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
	,__class__: coconut_vdom__$Html_Text
});
var client_WorkData = function() { };
client_WorkData.__name__ = true;
client_WorkData.defaultDisplay = function(title,visualHeader,textContent) {
	var hxxMeta = { };
	var __r = [];
	var hxxMeta1 = { };
	__r.push(coconut_vdom_Html.DIV.vnode({ id : "pop-up-visual-header"},hxxMeta1.key,hxxMeta1.ref,[visualHeader != null ? visualHeader : null]));
	var hxxMeta1 = { };
	var hxxMeta2 = { };
	var attr = { className : tink_domspec_ClassName.ofString("title-holder title-text highlighted-text")};
	var hxxMeta3 = { };
	var children = title == null ? null : coconut_vdom__$Html_Text.inst.vnode(title,null,null,null);
	var children1 = [coconut_vdom_Html.SPAN.vnode({ },hxxMeta3.key,hxxMeta3.ref,[children])];
	var children = [coconut_vdom_Html.DIV.vnode(attr,hxxMeta2.key,hxxMeta2.ref,children1)];
	__r.push(coconut_vdom_Html.DIV.vnode({ id : "pop-up-title"},hxxMeta1.key,hxxMeta1.ref,children));
	var hxxMeta1 = { };
	__r.push(coconut_vdom_Html.DIV.vnode({ id : "pop-up-text-content"},hxxMeta1.key,hxxMeta1.ref,[textContent != null ? textContent : null]));
	return coconut_vdom_Html.DIV.vnode({ id : "pop-up-content"},hxxMeta.key,hxxMeta.ref,__r);
};
client_WorkData.sortNMapIndex = function(data) {
	data.sort(function(x,y) {
		return x.value - y.value;
	});
	return client_WorkData.mapIndex(data);
};
client_WorkData.mapIndex = function(data) {
	var _g = 0;
	var _g1 = data.length;
	while(_g < _g1) {
		var i = _g++;
		data[i].index = i;
	}
	return data;
};
client_WorkData.fromTitle = function(title,newTitle) {
	var _g = 0;
	var _g1 = client_WorkData.allWorkItem;
	while(_g < _g1.length) {
		var i = _g1[_g];
		++_g;
		if(i.title == title) {
			return { overrideTitle : newTitle == null ? i.title : newTitle, overridenItem : i};
		}
	}
	return null;
};
var client_home_Main = function() { };
client_home_Main.__name__ = true;
client_home_Main.main = function() {
	coconut_vdom_Renderer.mountInto(window.document.getElementById("app"),client_view_App.fromHxx({ },{ }));
};
var coconut_data_Model = function() { };
coconut_data_Model.__name__ = true;
coconut_data_Model.__isInterface__ = true;
var client_view_Filters = function() {
	this._updatePerformed = tink_core_Signal.trigger();
	var _g = [];
	var _g1 = 0;
	var _g2 = client_WorkItemType.AllTypes;
	while(_g1 < _g2.length) {
		var i = _g2[_g1];
		++_g1;
		_g.push(new tink_core_NamedWith(i,true));
	}
	this.__coco_filters = tink_state_State._new(tink_pure_List.fromArray(_g),null,null,null);
	this.__coco_isAll = tink_state_State._new(true,null,null,null);
	this.__coco_transitionCount = tink_state_State._new(0);
	this.errorTrigger = tink_core_Signal.trigger();
	this.transitionErrors = this.errorTrigger;
	this.annex = new coconut_data_helpers_Annex(this);
	this.observables = { filters : this.__coco_filters, isAll : this.__coco_isAll, isInTransition : tink_state_Observable.map(this.__coco_transitionCount,tink_state_internal_Transform.plain(function(count) {
		return count > 0;
	}))};
};
client_view_Filters.__name__ = true;
client_view_Filters.__interfaces__ = [coconut_data_Model];
client_view_Filters.prototype = {
	get: function(index) {
		var _g = tink_pure_List.get(tink_state_State.get_value(this.__coco_filters),index);
		switch(_g._hx_index) {
		case 0:
			var s = _g.v;
			return s;
		case 1:
			return null;
		}
	}
	,toggleAll: function() {
		var _gthis = this;
		var d = !tink_state_State.get_value(_gthis.__coco_isAll);
		var d1;
		if(!tink_state_State.get_value(_gthis.__coco_isAll)) {
			var _g = [];
			var _g1 = 0;
			var _g2 = client_WorkItemType.AllTypes;
			while(_g1 < _g2.length) {
				var i = _g2[_g1];
				++_g1;
				_g.push(new tink_core_NamedWith(i,true));
			}
			d1 = tink_pure_List.fromArray(_g);
		} else {
			d1 = tink_state_State.get_value(_gthis.__coco_filters);
		}
		return tink_core_Promise.next(this.__cocoupdate(new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success({ isAll : d, filters : d1})))),function(_) {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(null)));
		});
	}
	,allChecked: function(toSkip) {
		var _g = new tink_pure_NodeIterator(tink_state_State.get_value(this.__coco_filters));
		while(_g.list.length > 0) {
			var i = _g.next();
			if(i.name != toSkip.name && !i.value) {
				return false;
			}
		}
		return true;
	}
	,toggle: function(item) {
		var _gthis = this;
		var d = item.value ? false : tink_state_State.get_value(_gthis.__coco_isAll) || _gthis.allChecked(item);
		var _g = [];
		var _g1 = new tink_pure_NodeIterator(tink_state_State.get_value(_gthis.__coco_filters));
		while(_g1.list.length > 0) {
			var i = _g1.next();
			_g.push(new tink_core_NamedWith(i.name,item.name == i.name ? !i.value : i.value));
		}
		return tink_core_Promise.next(this.__cocoupdate(new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success({ isAll : d, filters : tink_pure_List.fromArray(_g)})))),function(_) {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(null)));
		});
	}
	,isValid: function(tags) {
		var _g = new tink_pure_NodeIterator(tink_state_State.get_value(this.__coco_filters));
		while(_g.list.length > 0) {
			var i = _g.next();
			var tmp;
			if(i.value) {
				var ret = false;
				var _g1 = new tink_pure_NodeIterator(tags);
				while(_g1.list.length > 0) {
					var x = _g1.next();
					if(x == i.name) {
						ret = true;
						break;
					}
				}
				tmp = ret;
			} else {
				tmp = false;
			}
			if(tmp) {
				return true;
			}
		}
		return false;
	}
	,__cocoupdate: function(ret) {
		var _gthis = this;
		var sync = true;
		var done = false;
		ret.handle(function(o) {
			done = true;
			if(!sync) {
				_gthis.__coco_transitionCount.set(tink_state_State.get_value(_gthis.__coco_transitionCount) - 1);
			}
			switch(o._hx_index) {
			case 0:
				var delta = o.data;
				var delta1 = delta;
				var existent = tink_Anon.getExistentFields(delta1);
				if(existent.filters) {
					_gthis.__coco_filters.set(delta1.filters);
				}
				if(existent.isAll) {
					_gthis.__coco_isAll.set(delta1.isAll);
				}
				_gthis._updatePerformed.handlers.invoke(delta1);
				break;
			case 1:
				var e = o.failure;
				_gthis.errorTrigger.handlers.invoke(e);
				break;
			}
		});
		if(!done) {
			sync = false;
		}
		if(!sync) {
			this.__coco_transitionCount.set(tink_state_State.get_value(this.__coco_transitionCount) + 1);
		}
		return ret;
	}
	,__class__: client_view_Filters
};
var coconut_diffing_Widget = function(rendered,mounted,updated,unmounting) {
	this._coco_vStructure = rendered;
	this._coco_viewMounted = mounted;
	this._coco_viewUpdated = updated;
	this._coco_viewUnmounting = unmounting;
};
coconut_diffing_Widget.__name__ = true;
coconut_diffing_Widget.prototype = {
	__class__: coconut_diffing_Widget
};
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
	,__class__: coconut_vdom_View
});
var client_view_AllWorkView = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__coco_onCurrentItemChanged = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_filterObject = tink_state_State._new(new client_view_Filters(),null);
	this.__initAttributes(__coco_data_);
	var snapshot = null;
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,null);
};
client_view_AllWorkView.__name__ = true;
client_view_AllWorkView.fromHxx = function(hxxMeta,attributes) {
	var _g = client_view_AllWorkView.__factory;
	var tmp;
	if(_g == null) {
		tmp = client_view_AllWorkView.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
			return new client_view_AllWorkView(__coco_data_,implicits);
		},function(v,attr) {
			v.__initAttributes(attr);
		});
	} else {
		var v = _g;
		tmp = v;
	}
	return new coconut_diffing_internal_VWidget(tmp,attributes,hxxMeta.key,hxxMeta.ref);
};
client_view_AllWorkView.__super__ = coconut_vdom_View;
client_view_AllWorkView.prototype = $extend(coconut_vdom_View.prototype,{
	onCurrentItemChanged: function(item) {
		(tink_state_Observable.get_value(this.__coco_onCurrentItemChanged))(item);
	}
	,render: function() {
		var hxxMeta = { };
		var attr = { id : "all-work-holder", className : tink_domspec_ClassName.ofString("full-width")};
		var __r = [];
		var hxxMeta1 = { };
		var attr1 = { id : "all-work-filter-holder", className : tink_domspec_ClassName.ofString("full-width")};
		var hxxMeta2 = { };
		var __r1 = [];
		var hxxMeta3 = { };
		var attr2 = { id : "all-checkbox", className : tink_domspec_ClassName.ofString("filter-checkbox")};
		var __r2 = [];
		var hxxMeta4 = { };
		var attr3 = { className : tink_domspec_ClassName.ofString("title-text highlighted-text")};
		var children = [coconut_vdom__$Html_Text.inst.vnode("All",null,null,null)];
		__r2.push(coconut_vdom_Html.SPAN.vnode(attr3,hxxMeta4.key,hxxMeta4.ref,children));
		var hxxMeta4 = { };
		var attr3 = { className : tink_domspec_ClassName.ofString("checkbox-label-root")};
		var __r3 = [];
		var hxxMeta5 = { };
		var _this = this;
		var attr4 = function(event) {
			tink_state_State.get_value(_this.__coco_filterObject).toggleAll();
		};
		__r3.push(coconut_vdom_Html.INPUT.vnode({ type : "checkbox", checked : tink_state_State.get_value(tink_state_State.get_value(this.__coco_filterObject).__coco_isAll), oninput : attr4},hxxMeta5.key,hxxMeta5.ref));
		var hxxMeta5 = { };
		var __r4 = [];
		__r3.push(coconut_vdom_Html.SPAN.vnode({ },hxxMeta5.key,hxxMeta5.ref,__r4));
		__r2.push(coconut_vdom_Html.LABEL.vnode(attr3,hxxMeta4.key,hxxMeta4.ref,__r3));
		__r1.push(coconut_vdom_Html.DIV.vnode(attr2,hxxMeta3.key,hxxMeta3.ref,__r2));
		var _g = 0;
		var _g1 = client_WorkItemType.AllTypes.length;
		while(_g < _g1) {
			var i = _g++;
			var item = [tink_state_State.get_value(this.__coco_filterObject).get(i)];
			var hxxMeta3 = { };
			var attr2 = i == client_WorkItemType.AllTypes.length - 1 ? tink_domspec_ClassName.ofString(" filter-checkbox last-child") : tink_domspec_ClassName.ofString("filter-checkbox");
			var __r2 = [];
			var hxxMeta4 = { };
			var attr3 = { className : tink_domspec_ClassName.ofString("title-text highlighted-text")};
			var s = js_Boot.__cast(item[0].name , String);
			var children = s == null ? null : coconut_vdom__$Html_Text.inst.vnode(s,null,null,null);
			__r2.push(coconut_vdom_Html.SPAN.vnode(attr3,hxxMeta4.key,hxxMeta4.ref,[children]));
			var hxxMeta5 = { };
			var attr4 = { className : tink_domspec_ClassName.ofString("checkbox-label-root")};
			var __r3 = [];
			var hxxMeta6 = { };
			__r3.push(coconut_vdom_Html.INPUT.vnode({ type : "checkbox", checked : item[0].value, oninput : (function(_this,item) {
				return function(event) {
					tink_state_State.get_value(_this[0].__coco_filterObject).toggle(item[0]);
				};
			})([this],item)},hxxMeta6.key,hxxMeta6.ref));
			var hxxMeta7 = { };
			var __r4 = [];
			__r3.push(coconut_vdom_Html.SPAN.vnode({ },hxxMeta7.key,hxxMeta7.ref,__r4));
			__r2.push(coconut_vdom_Html.LABEL.vnode(attr4,hxxMeta5.key,hxxMeta5.ref,__r3));
			__r1.push(coconut_vdom_Html.DIV.vnode({ className : attr2},hxxMeta3.key,hxxMeta3.ref,__r2));
		}
		var children = [coconut_vdom_Html.DIV.vnode({ id : "all-work-filter-inputs"},hxxMeta2.key,hxxMeta2.ref,__r1)];
		__r.push(coconut_vdom_Html.DIV.vnode(attr1,hxxMeta1.key,hxxMeta1.ref,children));
		var hxxMeta1 = { };
		var __r1 = [];
		var _g = 0;
		var _g1 = client_WorkData.allWorkItem;
		while(_g < _g1.length) {
			var d = [_g1[_g]];
			++_g;
			if(tink_state_State.get_value(tink_state_State.get_value(this.__coco_filterObject).__coco_isAll) || tink_state_State.get_value(this.__coco_filterObject).isValid(d[0].type)) {
				var hxxMeta2 = { };
				var attr1 = { className : tink_domspec_ClassName.ofString("main-work-item-holder"), onclick : (function(_this,d) {
					return function(event) {
						_this[0].onCurrentItemChanged(d[0]);
					};
				})([this],d)};
				var children = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync((function(d) {
					return function() {
						return d[0].title;
					};
				})(d)),null);
				var children1 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync((function(d) {
					return function() {
						return d[0].path;
					};
				})(d)),null);
				var children2 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync((function(d) {
					return function() {
						if(d[0].hasGif != null) {
							return d[0].hasGif;
						} else {
							return true;
						}
					};
				})(d)),null);
				var children3 = [client_view_WorkItem.fromHxx({ },{ title : children, imagePath : children1, hasGif : children2})];
				__r1.push(coconut_vdom_Html.DIV.vnode(attr1,hxxMeta2.key,hxxMeta2.ref,children3));
			}
		}
		__r.push(coconut_vdom_Html.DIV.vnode({ id : "all-work-items"},hxxMeta1.key,hxxMeta1.ref,__r1));
		return coconut_vdom_Html.DIV.vnode(attr,hxxMeta.key,hxxMeta.ref,__r);
	}
	,__initAttributes: function(attributes) {
		this.__coco_onCurrentItemChanged.setData(attributes.onCurrentItemChanged);
	}
	,__class__: client_view_AllWorkView
});
var client_view_App = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__coco_currentItemIndex = tink_state_State._new(-1,null);
	this.__initAttributes(__coco_data_);
	var snapshot = null;
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,null);
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
	onCurrentWorkItemChanged: function(item) {
		var param = item == null ? -1 : item.index;
		this.__coco_currentItemIndex.set(param);
	}
	,moveToAllWork: function() {
		window.document.getElementById("all-work-holder").scrollIntoView({ behavior : "smooth", block : "start", inline_ : "start"});
	}
	,onPopUpClosed: function() {
		this.__coco_currentItemIndex.set(-1);
	}
	,render: function() {
		var _gthis = this;
		var hxxMeta = { };
		var __r = [];
		__r.push(client_view_PresentationView.fromHxx({ },{ }));
		var tmp = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
			return function() {
				_gthis.moveToAllWork();
			};
		}),null);
		var tmp1 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
			return $bind(_gthis,_gthis.onCurrentWorkItemChanged);
		}),null);
		__r.push(client_view_MainWorkView.fromHxx({ },{ onMoreAsked : tmp, onCurrentItemChanged : tmp1}));
		var tmp = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
			return $bind(_gthis,_gthis.onCurrentWorkItemChanged);
		}),null);
		__r.push(client_view_AllWorkView.fromHxx({ },{ onCurrentItemChanged : tmp}));
		if(tink_state_State.get_value(this.__coco_currentItemIndex) != -1) {
			var tmp = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
				return $bind(_gthis,_gthis.onPopUpClosed);
			}),null);
			var tmp1 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
				var compute = client_WorkData.allWorkItem[tink_state_State.get_value(_gthis.__coco_currentItemIndex)];
				var compute1 = client_WorkData.allWorkItem[tink_state_State.get_value(_gthis.__coco_currentItemIndex)];
				return compute.display(compute1);
			}),null);
			__r.push(client_view_PopUp.fromHxx({ },{ onClose : tmp, content : tmp1}));
		}
		return coconut_vdom_Html.DIV.vnode({ },hxxMeta.key,hxxMeta.ref,__r);
	}
	,__initAttributes: function(attributes) {
	}
	,__class__: client_view_App
});
var client_view_MainWorkView = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__coco_onMoreAsked = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_onCurrentItemChanged = new coconut_ui_internal_Slot(this,null,null);
	this.__initAttributes(__coco_data_);
	var snapshot = null;
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,null);
};
client_view_MainWorkView.__name__ = true;
client_view_MainWorkView.fromHxx = function(hxxMeta,attributes) {
	var _g = client_view_MainWorkView.__factory;
	var tmp;
	if(_g == null) {
		tmp = client_view_MainWorkView.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
			return new client_view_MainWorkView(__coco_data_,implicits);
		},function(v,attr) {
			v.__initAttributes(attr);
		});
	} else {
		var v = _g;
		tmp = v;
	}
	return new coconut_diffing_internal_VWidget(tmp,attributes,hxxMeta.key,hxxMeta.ref);
};
client_view_MainWorkView.__super__ = coconut_vdom_View;
client_view_MainWorkView.prototype = $extend(coconut_vdom_View.prototype,{
	onMoreAsked: function() {
		(tink_state_Observable.get_value(this.__coco_onMoreAsked))();
	}
	,onCurrentItemChanged: function(item) {
		(tink_state_Observable.get_value(this.__coco_onCurrentItemChanged))(item);
	}
	,render: function() {
		var hxxMeta = { };
		var hxxMeta1 = { };
		var __r = [];
		var hxxMeta2 = { };
		var __r1 = [];
		var _g = 0;
		var _g1 = client_WorkData.mainWorkItem;
		while(_g < _g1.length) {
			var d = [_g1[_g]];
			++_g;
			var hxxMeta3 = { };
			var attr = { className : tink_domspec_ClassName.ofString("main-work-item-holder"), onclick : (function(_this,d) {
				return function(event) {
					_this[0].onCurrentItemChanged(d[0].overridenItem);
				};
			})([this],d)};
			var children = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync((function(d) {
				return function() {
					return d[0].overrideTitle;
				};
			})(d)),null);
			var children1 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync((function(d) {
				return function() {
					return d[0].overridenItem.path;
				};
			})(d)),null);
			var children2 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync((function(d) {
				return function() {
					if(d[0].overridenItem.hasGif != null) {
						return d[0].overridenItem.hasGif;
					} else {
						return true;
					}
				};
			})(d)),null);
			var children3 = [client_view_WorkItem.fromHxx({ },{ title : children, imagePath : children1, hasGif : children2})];
			__r1.push(coconut_vdom_Html.DIV.vnode(attr,hxxMeta3.key,hxxMeta3.ref,children3));
		}
		var hxxMeta3 = { };
		var attr = { className : tink_domspec_ClassName.ofString("main-work-item-holder"), onclick : $bind(this,this.onMoreAsked)};
		var children = new tink_state__$Observable_ConstObservable("More...");
		var children1 = new tink_state__$Observable_ConstObservable("./images/plus.svg");
		var children2 = [client_view_WorkItem.fromHxx({ },{ title : children, imagePath : children1, hasGif : new tink_state__$Observable_ConstObservable(false)})];
		__r1.push(coconut_vdom_Html.DIV.vnode(attr,hxxMeta3.key,hxxMeta3.ref,children2));
		__r.push(coconut_vdom_Html.DIV.vnode({ id : "main-work-item-display"},hxxMeta2.key,hxxMeta2.ref,__r1));
		var hxxMeta2 = { };
		var attr = { id : "main-work-controller", className : tink_domspec_ClassName.ofString("full-width"), onclick : $bind(this,this.onMoreAsked)};
		var hxxMeta3 = { };
		var children = [coconut_vdom_Html.SPAN.vnode({ className : tink_domspec_ClassName.ofString("arrow bouncing-top")},hxxMeta3.key,hxxMeta3.ref,null)];
		__r.push(coconut_vdom_Html.DIV.vnode(attr,hxxMeta2.key,hxxMeta2.ref,children));
		var children = [coconut_vdom_Html.DIV.vnode({ id : "main-work-secondary-holder"},hxxMeta1.key,hxxMeta1.ref,__r)];
		return coconut_vdom_Html.DIV.vnode({ id : "main-work-holder"},hxxMeta.key,hxxMeta.ref,children);
	}
	,__initAttributes: function(attributes) {
		this.__coco_onMoreAsked.setData(attributes.onMoreAsked);
		this.__coco_onCurrentItemChanged.setData(attributes.onCurrentItemChanged);
	}
	,__class__: client_view_MainWorkView
});
var client_view_PopUp = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__coco_onClose = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_content = new coconut_ui_internal_Slot(this,null,null);
	this.__initAttributes(__coco_data_);
	var snapshot = null;
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,null);
};
client_view_PopUp.__name__ = true;
client_view_PopUp.fromHxx = function(hxxMeta,attributes) {
	var _g = client_view_PopUp.__factory;
	var tmp;
	if(_g == null) {
		tmp = client_view_PopUp.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
			return new client_view_PopUp(__coco_data_,implicits);
		},function(v,attr) {
			v.__initAttributes(attr);
		});
	} else {
		var v = _g;
		tmp = v;
	}
	return new coconut_diffing_internal_VWidget(tmp,attributes,hxxMeta.key,hxxMeta.ref);
};
client_view_PopUp.__super__ = coconut_vdom_View;
client_view_PopUp.prototype = $extend(coconut_vdom_View.prototype,{
	onClose: function() {
		(tink_state_Observable.get_value(this.__coco_onClose))();
	}
	,render: function() {
		var hxxMeta = { };
		var hxxMeta1 = { };
		var __r = [];
		var hxxMeta2 = { };
		var attr = { className : tink_domspec_ClassName.ofString("material-symbols-outlined close-symbol interactable"), onclick : $bind(this,this.onClose)};
		var children = [coconut_vdom__$Html_Text.inst.vnode("close",null,null,null)];
		__r.push(coconut_vdom_Html.SPAN.vnode(attr,hxxMeta2.key,hxxMeta2.ref,children));
		__r.push(tink_state_Observable.get_value(this.__coco_content));
		var children = [coconut_vdom_Html.DIV.vnode({ id : "pop-up"},hxxMeta1.key,hxxMeta1.ref,__r)];
		return coconut_vdom_Html.DIV.vnode({ id : "pop-up-holder"},hxxMeta.key,hxxMeta.ref,children);
	}
	,__initAttributes: function(attributes) {
		this.__coco_onClose.setData(attributes.onClose);
		this.__coco_content.setData(attributes.content);
	}
	,__class__: client_view_PopUp
});
var client_view_PresentationView = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
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
		var title = "Erik Kubiak - Creative Developer";
		var description = "I am Erik Kubiak, a code architect and creative developer that loves strong and SOLID code to push Gameplay, Tool and Visual to its limit. Fast-learner and autonomous, my curiosity consistently leads my knowledge more far. Still a good ear, I always accept feedback and will always give feedback, the most constructive possible, the pros of being a teacher for years.";
		var hxxMeta = { };
		var hxxMeta1 = { };
		var attr = { id : "presentation-display", className : tink_domspec_ClassName.ofString("main-border lit-box")};
		var __r = [];
		var hxxMeta2 = { };
		__r.push(coconut_vdom_Html.DIV.vnode({ id : "presentation-background"},hxxMeta2.key,hxxMeta2.ref,null));
		var hxxMeta2 = { };
		var attr1 = { id : "presentation-left", className : tink_domspec_ClassName.ofString("my-computer-only")};
		var __r1 = [];
		var hxxMeta3 = { };
		__r1.push(coconut_vdom_Html.DIV.vnode({ className : tink_domspec_ClassName.ofString("face")},hxxMeta3.key,hxxMeta3.ref,null));
		var hxxMeta3 = { };
		var __r2 = [];
		var hxxMeta4 = { };
		var attr2 = { className : tink_domspec_ClassName.ofString("title title-text title-text-size")};
		var children = title == null ? null : coconut_vdom__$Html_Text.inst.vnode(title,null,null,null);
		__r2.push(coconut_vdom_Html.DIV.vnode(attr2,hxxMeta4.key,hxxMeta4.ref,[children]));
		__r2.push(client_view_WebsiteView.fromHxx({ },{ }));
		__r1.push(coconut_vdom_Html.DIV.vnode({ id : "presentation-left-bottom"},hxxMeta3.key,hxxMeta3.ref,__r2));
		__r.push(coconut_vdom_Html.DIV.vnode(attr1,hxxMeta2.key,hxxMeta2.ref,__r1));
		var hxxMeta2 = { };
		var attr1 = { id : "presentation-right", className : tink_domspec_ClassName.ofString("my-computer-only")};
		var hxxMeta3 = { };
		var attr2 = { className : tink_domspec_ClassName.ofString("description")};
		var children = description == null ? null : coconut_vdom__$Html_Text.inst.vnode(description,null,null,null);
		var children1 = [coconut_vdom_Html.DIV.vnode(attr2,hxxMeta3.key,hxxMeta3.ref,[children])];
		__r.push(coconut_vdom_Html.DIV.vnode(attr1,hxxMeta2.key,hxxMeta2.ref,children1));
		var hxxMeta2 = { };
		var attr1 = { className : tink_domspec_ClassName.ofString("my-phone-only full-size")};
		var __r1 = [];
		var hxxMeta3 = { };
		__r1.push(coconut_vdom_Html.DIV.vnode({ className : tink_domspec_ClassName.ofString("face")},hxxMeta3.key,hxxMeta3.ref,null));
		var hxxMeta3 = { };
		var attr2 = { className : tink_domspec_ClassName.ofString("presentation-phone-content")};
		var __r2 = [];
		var hxxMeta4 = { };
		var attr3 = { className : tink_domspec_ClassName.ofString(" title title-text title-text-size")};
		var children = title == null ? null : coconut_vdom__$Html_Text.inst.vnode(title,null,null,null);
		__r2.push(coconut_vdom_Html.DIV.vnode(attr3,hxxMeta4.key,hxxMeta4.ref,[children]));
		var hxxMeta4 = { };
		var attr3 = { className : tink_domspec_ClassName.ofString("description")};
		var children = description == null ? null : coconut_vdom__$Html_Text.inst.vnode(description,null,null,null);
		__r2.push(coconut_vdom_Html.DIV.vnode(attr3,hxxMeta4.key,hxxMeta4.ref,[children]));
		__r2.push(client_view_WebsiteView.fromHxx({ },{ }));
		__r1.push(coconut_vdom_Html.DIV.vnode(attr2,hxxMeta3.key,hxxMeta3.ref,__r2));
		__r.push(coconut_vdom_Html.DIV.vnode(attr1,hxxMeta2.key,hxxMeta2.ref,__r1));
		var children = [coconut_vdom_Html.DIV.vnode(attr,hxxMeta1.key,hxxMeta1.ref,__r)];
		return coconut_vdom_Html.DIV.vnode({ id : "presentation-holder"},hxxMeta.key,hxxMeta.ref,children);
	}
	,__initAttributes: function(attributes) {
	}
	,__class__: client_view_PresentationView
});
var client_view_WebsiteView = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__initAttributes(__coco_data_);
	var snapshot = null;
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,null);
};
client_view_WebsiteView.__name__ = true;
client_view_WebsiteView.fromHxx = function(hxxMeta,attributes) {
	var _g = client_view_WebsiteView.__factory;
	var tmp;
	if(_g == null) {
		tmp = client_view_WebsiteView.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
			return new client_view_WebsiteView(__coco_data_,implicits);
		},function(v,attr) {
			v.__initAttributes(attr);
		});
	} else {
		var v = _g;
		tmp = v;
	}
	return new coconut_diffing_internal_VWidget(tmp,attributes,hxxMeta.key,hxxMeta.ref);
};
client_view_WebsiteView.__super__ = coconut_vdom_View;
client_view_WebsiteView.prototype = $extend(coconut_vdom_View.prototype,{
	render: function() {
		var hxxMeta = { };
		var attr = { className : tink_domspec_ClassName.ofString("logos")};
		var __r = [];
		var hxxMeta1 = { };
		var hxxMeta2 = { };
		var children = [coconut_vdom_Html.IMG.vnode({ src : "./images/logo/linkedin.svg"},hxxMeta2.key,hxxMeta2.ref)];
		__r.push(coconut_vdom_Html.A.vnode({ href : "https://www.linkedin.com/in/erik-kubiak/", target : "blank"},hxxMeta1.key,hxxMeta1.ref,children));
		var hxxMeta1 = { };
		var hxxMeta2 = { };
		var children = [coconut_vdom_Html.IMG.vnode({ src : "./images/logo/github.svg"},hxxMeta2.key,hxxMeta2.ref)];
		__r.push(coconut_vdom_Html.A.vnode({ href : "https://github.com/ErikRikoo", target : "blank"},hxxMeta1.key,hxxMeta1.ref,children));
		var hxxMeta1 = { };
		var hxxMeta2 = { };
		var children = [coconut_vdom_Html.IMG.vnode({ src : "./images/logo/twitter.svg"},hxxMeta2.key,hxxMeta2.ref)];
		__r.push(coconut_vdom_Html.A.vnode({ href : "https://twitter.com/KubiakErik", target : "blank"},hxxMeta1.key,hxxMeta1.ref,children));
		var hxxMeta1 = { };
		var hxxMeta2 = { };
		var children = [coconut_vdom_Html.IMG.vnode({ src : "./images/logo/artstation.svg"},hxxMeta2.key,hxxMeta2.ref)];
		__r.push(coconut_vdom_Html.A.vnode({ href : "https://www.artstation.com/erikkubiak", target : "blank"},hxxMeta1.key,hxxMeta1.ref,children));
		return coconut_vdom_Html.DIV.vnode(attr,hxxMeta.key,hxxMeta.ref,__r);
	}
	,__initAttributes: function(attributes) {
	}
	,__class__: client_view_WebsiteView
});
var client_view_WorkItem = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__coco_title = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_imagePath = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_hasGif = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(true));
	this.__initAttributes(__coco_data_);
	var snapshot = null;
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,null);
};
client_view_WorkItem.__name__ = true;
client_view_WorkItem.fromHxx = function(hxxMeta,attributes) {
	var _g = client_view_WorkItem.__factory;
	var tmp;
	if(_g == null) {
		tmp = client_view_WorkItem.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
			return new client_view_WorkItem(__coco_data_,implicits);
		},function(v,attr) {
			v.__initAttributes(attr);
		});
	} else {
		var v = _g;
		tmp = v;
	}
	return new coconut_diffing_internal_VWidget(tmp,attributes,hxxMeta.key,hxxMeta.ref);
};
client_view_WorkItem.__super__ = coconut_vdom_View;
client_view_WorkItem.prototype = $extend(coconut_vdom_View.prototype,{
	render: function() {
		var isGif = tink_state_Observable.get_value(this.__coco_imagePath).indexOf(".gif") != -1;
		var gifPath = HxOverrides.substr(tink_state_Observable.get_value(this.__coco_imagePath),0,tink_state_Observable.get_value(this.__coco_imagePath).lastIndexOf(".")) + ".gif";
		var hxxMeta = { };
		var attr = { className : tink_domspec_ClassName.ofString("work-item-holder")};
		var hxxMeta1 = { };
		var attr1 = { className : tink_domspec_ClassName.ofString("work-item main-border")};
		var __r = [];
		var hxxMeta2 = { };
		__r.push(coconut_vdom_Html.IMG.vnode({ src : tink_state_Observable.get_value(this.__coco_imagePath)},hxxMeta2.key,hxxMeta2.ref));
		if(tink_state_Observable.get_value(this.__coco_hasGif) && !isGif) {
			var hxxMeta2 = { };
			__r.push(coconut_vdom_Html.IMG.vnode({ src : gifPath, className : tink_domspec_ClassName.ofString("work-item-gif-element")},hxxMeta2.key,hxxMeta2.ref));
		}
		var hxxMeta2 = { };
		var attr2 = { className : tink_domspec_ClassName.ofString("title-holder title-text highlighted-text")};
		var hxxMeta3 = { };
		var s = tink_state_Observable.get_value(this.__coco_title);
		var children = s == null ? null : coconut_vdom__$Html_Text.inst.vnode(s,null,null,null);
		var children1 = [coconut_vdom_Html.SPAN.vnode({ },hxxMeta3.key,hxxMeta3.ref,[children])];
		__r.push(coconut_vdom_Html.DIV.vnode(attr2,hxxMeta2.key,hxxMeta2.ref,children1));
		var hxxMeta2 = { };
		var attr2 = { className : tink_domspec_ClassName.ofString("title-holder title-text highlighted")};
		var hxxMeta3 = { };
		var s = tink_state_Observable.get_value(this.__coco_title);
		var children = s == null ? null : coconut_vdom__$Html_Text.inst.vnode(s,null,null,null);
		var children1 = [coconut_vdom_Html.SPAN.vnode({ },hxxMeta3.key,hxxMeta3.ref,[children])];
		__r.push(coconut_vdom_Html.DIV.vnode(attr2,hxxMeta2.key,hxxMeta2.ref,children1));
		var children = [coconut_vdom_Html.DIV.vnode(attr1,hxxMeta1.key,hxxMeta1.ref,__r)];
		return coconut_vdom_Html.DIV.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
	}
	,__initAttributes: function(attributes) {
		this.__coco_title.setData(attributes.title);
		this.__coco_imagePath.setData(attributes.imagePath);
		this.__coco_hasGif.setData(attributes.hasGif);
	}
	,__class__: client_view_WorkItem
});
var coconut_data_helpers_Annex = function(target) {
	this.target = target;
	this.registry = new haxe_ds_ObjectMap();
};
coconut_data_helpers_Annex.__name__ = true;
coconut_data_helpers_Annex.prototype = {
	__class__: coconut_data_helpers_Annex
};
var coconut_diffing_Applicator = function() { };
coconut_diffing_Applicator.__name__ = true;
coconut_diffing_Applicator.__isInterface__ = true;
coconut_diffing_Applicator.prototype = {
	__class__: coconut_diffing_Applicator
};
var coconut_diffing_Cursor = function(applicator) {
	this.applicator = applicator;
};
coconut_diffing_Cursor.__name__ = true;
coconut_diffing_Cursor.prototype = {
	current: function() {
		return null;
	}
	,__class__: coconut_diffing_Cursor
};
var coconut_diffing_internal_Child = function() { };
coconut_diffing_internal_Child.__name__ = true;
coconut_diffing_internal_Child.__isInterface__ = true;
coconut_diffing_internal_Child.prototype = {
	__class__: coconut_diffing_internal_Child
};
var coconut_diffing_internal_Parent = function(context,parent) {
	this.pendingUpdates = [];
	this.context = context;
	this.parent = parent;
};
coconut_diffing_internal_Parent.__name__ = true;
coconut_diffing_internal_Parent.__interfaces__ = [coconut_diffing_internal_Child];
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
	,__class__: coconut_diffing_internal_Parent
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
	,__class__: coconut_diffing_Root
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
	,__class__: coconut_diffing_internal_RCell
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
	,__class__: coconut_diffing_internal_RChildren
};
var coconut_diffing_internal_RNode = function() { };
coconut_diffing_internal_RNode.__name__ = true;
coconut_diffing_internal_RNode.__isInterface__ = true;
coconut_diffing_internal_RNode.prototype = {
	__class__: coconut_diffing_internal_RNode
};
var coconut_diffing_internal_VNode = function() { };
coconut_diffing_internal_VNode.__name__ = true;
coconut_diffing_internal_VNode.__isInterface__ = true;
coconut_diffing_internal_VNode.prototype = {
	__class__: coconut_diffing_internal_VNode
};
var coconut_diffing_internal_VEmpty = function() {
	this.key = null;
	this.type = coconut_diffing_internal_VEmpty.TYPE;
};
coconut_diffing_internal_VEmpty.__name__ = true;
coconut_diffing_internal_VEmpty.__interfaces__ = [coconut_diffing_internal_VNode];
coconut_diffing_internal_VEmpty.prototype = {
	render: function(_,cursor,_1,hydrate) {
		return new coconut_diffing_internal_REmpty(cursor);
	}
	,__class__: coconut_diffing_internal_VEmpty
};
var coconut_diffing_internal_REmpty = function(cursor) {
	this.type = coconut_diffing_internal_VEmpty.TYPE;
	cursor.insert(this.marker = cursor.applicator.createMarker());
};
coconut_diffing_internal_REmpty.__name__ = true;
coconut_diffing_internal_REmpty.__interfaces__ = [coconut_diffing_internal_RNode];
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
	,__class__: coconut_diffing_internal_REmpty
};
var coconut_diffing_internal_VNativeBase = function(type,key,ref,children) {
	this.type = type;
	this.key = key;
	this.ref = ref;
	this.children = children;
};
coconut_diffing_internal_VNativeBase.__name__ = true;
coconut_diffing_internal_VNativeBase.__interfaces__ = [coconut_diffing_internal_VNode];
coconut_diffing_internal_VNativeBase.prototype = {
	render: function(parent,cursor,later,hydrate) {
		return new coconut_diffing_internal_RNativeBase(this,coconut_diffing_internal_VNativeBase,parent,cursor,later,hydrate);
	}
	,create: function(previous) {
		throw haxe_Exception.thrown("abstract");
	}
	,__class__: coconut_diffing_internal_VNativeBase
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
	,__class__: coconut_diffing_internal_VNative
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
coconut_diffing_internal_RNativeBase.__interfaces__ = [coconut_diffing_internal_RNode];
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
	,__class__: coconut_diffing_internal_RNativeBase
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
	,__class__: coconut_diffing_internal_RNative
});
var coconut_diffing_internal_VWidget = function(factory,data,key,ref) {
	this.factory = factory;
	this.type = factory.type;
	this.data = data;
	this.ref = ref;
	this.key = key;
};
coconut_diffing_internal_VWidget.__name__ = true;
coconut_diffing_internal_VWidget.__interfaces__ = [coconut_diffing_internal_VNode];
coconut_diffing_internal_VWidget.prototype = {
	render: function(parent,cursor,later,hydrate) {
		return new coconut_diffing_internal_RWidget(parent,this,cursor,later,hydrate);
	}
	,__class__: coconut_diffing_internal_VWidget
};
var tink_state_internal_Invalidatable = function() { };
tink_state_internal_Invalidatable.__name__ = true;
tink_state_internal_Invalidatable.__isInterface__ = true;
tink_state_internal_Invalidatable.prototype = {
	__class__: tink_state_internal_Invalidatable
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
coconut_diffing_internal_WidgetLifeCycle.__interfaces__ = [tink_state_internal_Invalidatable];
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
	,__class__: coconut_diffing_internal_WidgetLifeCycle
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
coconut_diffing_internal_RWidget.__interfaces__ = [coconut_diffing_internal_RNode];
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
	,__class__: coconut_diffing_internal_RWidget
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
	,__class__: coconut_diffing_internal_WidgetFactory
};
var tink_state_internal_ObservableObject = function() { };
tink_state_internal_ObservableObject.__name__ = true;
tink_state_internal_ObservableObject.__isInterface__ = true;
tink_state_internal_ObservableObject.prototype = {
	__class__: tink_state_internal_ObservableObject
};
var tink_state__$Observable_ConstObservable = function(value,toString) {
	this.revision = tink_state_internal_Revision._new();
	this.value = value;
};
tink_state__$Observable_ConstObservable.__name__ = true;
tink_state__$Observable_ConstObservable.__interfaces__ = [tink_state_internal_ObservableObject];
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
	,__class__: tink_state__$Observable_ConstObservable
};
var tink_core__$Lazy_Computable = function() { };
tink_core__$Lazy_Computable.__name__ = true;
tink_core__$Lazy_Computable.__isInterface__ = true;
tink_core__$Lazy_Computable.prototype = {
	__class__: tink_core__$Lazy_Computable
};
var tink_core__$Lazy_LazyObject = function() { };
tink_core__$Lazy_LazyObject.__name__ = true;
tink_core__$Lazy_LazyObject.__isInterface__ = true;
tink_core__$Lazy_LazyObject.__interfaces__ = [tink_core__$Lazy_Computable];
tink_core__$Lazy_LazyObject.prototype = {
	__class__: tink_core__$Lazy_LazyObject
};
var tink_core__$Lazy_LazyConst = function(value) {
	this.value = value;
};
tink_core__$Lazy_LazyConst.__name__ = true;
tink_core__$Lazy_LazyConst.__interfaces__ = [tink_core__$Lazy_LazyObject];
tink_core__$Lazy_LazyConst.prototype = {
	get: function() {
		return this.value;
	}
	,compute: function() {
	}
	,__class__: tink_core__$Lazy_LazyConst
};
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
coconut_ui_internal_ImplicitContext.prototype = {
	__class__: coconut_ui_internal_ImplicitContext
};
var tink_core_Disposable = function() { };
tink_core_Disposable.__name__ = true;
tink_core_Disposable.__isInterface__ = true;
var tink_core_OwnedDisposable = function() { };
tink_core_OwnedDisposable.__name__ = true;
tink_core_OwnedDisposable.__isInterface__ = true;
tink_core_OwnedDisposable.__interfaces__ = [tink_core_Disposable];
var tink_state_internal_Invalidator = function() {
	this.list = new tink_core_CallbackList();
	var this1 = new Map();
	this.observers = this1;
	this.revision = tink_state_internal_Revision._new();
};
tink_state_internal_Invalidator.__name__ = true;
tink_state_internal_Invalidator.__interfaces__ = [tink_core_OwnedDisposable];
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
	,__class__: tink_state_internal_Invalidator
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
coconut_ui_internal_Slot.__interfaces__ = [tink_state_internal_ObservableObject,tink_state_internal_Invalidatable];
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
	,__class__: coconut_ui_internal_Slot
});
var coconut_vdom__$Renderer_DomBackend = function() {
	this.markers = [];
};
coconut_vdom__$Renderer_DomBackend.__name__ = true;
coconut_vdom__$Renderer_DomBackend.__interfaces__ = [coconut_diffing_Applicator];
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
	,__class__: coconut_vdom__$Renderer_DomBackend
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
	,__class__: coconut_vdom__$Renderer_DomCursor
});
var haxe_IMap = function() { };
haxe_IMap.__name__ = true;
haxe_IMap.__isInterface__ = true;
haxe_IMap.prototype = {
	__class__: haxe_IMap
};
var haxe_Exception = function(message,previous,native) {
	Error.call(this,message);
	this.message = message;
	this.__previousException = previous;
	this.__nativeException = native != null ? native : this;
};
haxe_Exception.__name__ = true;
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
	get_native: function() {
		return this.__nativeException;
	}
	,__class__: haxe_Exception
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
	,__class__: haxe_Timer
};
var haxe_ValueException = function(value,previous,native) {
	haxe_Exception.call(this,String(value),previous,native);
	this.value = value;
};
haxe_ValueException.__name__ = true;
haxe_ValueException.__super__ = haxe_Exception;
haxe_ValueException.prototype = $extend(haxe_Exception.prototype,{
	__class__: haxe_ValueException
});
var haxe_ds_IntMap = function() {
	this.h = { };
};
haxe_ds_IntMap.__name__ = true;
haxe_ds_IntMap.__interfaces__ = [haxe_IMap];
haxe_ds_IntMap.prototype = {
	get: function(key) {
		return this.h[key];
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) if(this.h.hasOwnProperty(key)) a.push(+key);
		return new haxe_iterators_ArrayIterator(a);
	}
	,__class__: haxe_ds_IntMap
};
var haxe_ds_ObjectMap = function() {
	this.h = { __keys__ : { }};
};
haxe_ds_ObjectMap.__name__ = true;
haxe_ds_ObjectMap.__interfaces__ = [haxe_IMap];
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
	,__class__: haxe_ds_ObjectMap
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
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	get: function(key) {
		return this.h[key];
	}
	,keys: function() {
		return new haxe_ds__$StringMap_StringMapKeyIterator(this.h);
	}
	,__class__: haxe_ds_StringMap
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
	,__class__: haxe_ds__$StringMap_StringMapKeyIterator
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
	,__class__: haxe_iterators_ArrayIterator
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
	,__class__: haxe_iterators_MapKeyValueIterator
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.getClass = function(o) {
	if(o == null) {
		return null;
	} else if(((o) instanceof Array)) {
		return Array;
	} else {
		var cl = o.__class__;
		if(cl != null) {
			return cl;
		}
		var name = js_Boot.__nativeClassName(o);
		if(name != null) {
			return js_Boot.__resolveNativeClass(name);
		}
		return null;
	}
};
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
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) {
		return false;
	}
	if(cc == cl) {
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g = 0;
		var _g1 = intf.length;
		while(_g < _g1) {
			var i = _g++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) {
				return true;
			}
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) {
		return false;
	}
	switch(cl) {
	case Array:
		return ((o) instanceof Array);
	case Bool:
		return typeof(o) == "boolean";
	case Dynamic:
		return o != null;
	case Float:
		return typeof(o) == "number";
	case Int:
		if(typeof(o) == "number") {
			return ((o | 0) === o);
		} else {
			return false;
		}
		break;
	case String:
		return typeof(o) == "string";
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(js_Boot.__downcastCheck(o,cl)) {
					return true;
				}
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(((o) instanceof cl)) {
					return true;
				}
			}
		} else {
			return false;
		}
		if(cl == Class ? o.__name__ != null : false) {
			return true;
		}
		if(cl == Enum ? o.__ename__ != null : false) {
			return true;
		}
		return o.__enum__ != null ? $hxEnums[o.__enum__] == cl : false;
	}
};
js_Boot.__downcastCheck = function(o,cl) {
	if(!((o) instanceof cl)) {
		if(cl.__isInterface__) {
			return js_Boot.__interfLoop(js_Boot.getClass(o),cl);
		} else {
			return false;
		}
	} else {
		return true;
	}
};
js_Boot.__cast = function(o,t) {
	if(o == null || js_Boot.__instanceof(o,t)) {
		return o;
	} else {
		throw haxe_Exception.thrown("Cannot cast " + Std.string(o) + " to " + Std.string(t));
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var tink_Anon = function() { };
tink_Anon.__name__ = true;
tink_Anon.getExistentFields = function(o) {
	var ret = { };
	var _g = 0;
	var _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		ret[f] = true;
	}
	return ret;
};
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
var tink_core_LinkObject = function() { };
tink_core_LinkObject.__name__ = true;
tink_core_LinkObject.__isInterface__ = true;
tink_core_LinkObject.prototype = {
	__class__: tink_core_LinkObject
};
var tink_core_CallbackLinkRef = function() {
};
tink_core_CallbackLinkRef.__name__ = true;
tink_core_CallbackLinkRef.__interfaces__ = [tink_core_LinkObject];
tink_core_CallbackLinkRef.prototype = {
	cancel: function() {
		var this1 = this.link;
		if(this1 != null) {
			this1.cancel();
		}
	}
	,__class__: tink_core_CallbackLinkRef
};
var tink_core_SimpleLink = function(f) {
	this.f = f;
};
tink_core_SimpleLink.__name__ = true;
tink_core_SimpleLink.__interfaces__ = [tink_core_LinkObject];
tink_core_SimpleLink.prototype = {
	cancel: function() {
		if(this.f != null) {
			this.f();
			this.f = null;
		}
	}
	,__class__: tink_core_SimpleLink
};
var tink_core__$Callback_LinkPair = function(a,b) {
	this.dissolved = false;
	this.a = a;
	this.b = b;
};
tink_core__$Callback_LinkPair.__name__ = true;
tink_core__$Callback_LinkPair.__interfaces__ = [tink_core_LinkObject];
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
	,__class__: tink_core__$Callback_LinkPair
};
var tink_core__$Callback_ListCell = function(cb,list) {
	if(cb == null) {
		throw haxe_Exception.thrown("callback expected but null received");
	}
	this.cb = cb;
	this.list = list;
};
tink_core__$Callback_ListCell.__name__ = true;
tink_core__$Callback_ListCell.__interfaces__ = [tink_core_LinkObject];
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
	,__class__: tink_core__$Callback_ListCell
};
var tink_core_SimpleDisposable = function(dispose) {
	this.disposeHandlers = [];
	this.f = dispose;
};
tink_core_SimpleDisposable.__name__ = true;
tink_core_SimpleDisposable.__interfaces__ = [tink_core_OwnedDisposable];
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
	,__class__: tink_core_SimpleDisposable
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
	,__class__: tink_core_CallbackList
});
var tink_core_TypedError = function() { };
tink_core_TypedError.__name__ = true;
tink_core_TypedError.tryFinally = function(f,cleanup) {
	try { return f(); } finally { cleanup(); }
	return null;
};
var tink_core__$Future_FutureObject = function() { };
tink_core__$Future_FutureObject.__name__ = true;
tink_core__$Future_FutureObject.__isInterface__ = true;
tink_core__$Future_FutureObject.prototype = {
	__class__: tink_core__$Future_FutureObject
};
var tink_core__$Future_NeverFuture = function() {
};
tink_core__$Future_NeverFuture.__name__ = true;
tink_core__$Future_NeverFuture.__interfaces__ = [tink_core__$Future_FutureObject];
tink_core__$Future_NeverFuture.prototype = {
	getStatus: function() {
		return tink_core_FutureStatus.NeverEver;
	}
	,handle: function(callback) {
		return null;
	}
	,__class__: tink_core__$Future_NeverFuture
};
var tink_core__$Future_SyncFuture = function(value) {
	this.value = value;
};
tink_core__$Future_SyncFuture.__name__ = true;
tink_core__$Future_SyncFuture.__interfaces__ = [tink_core__$Future_FutureObject];
tink_core__$Future_SyncFuture.prototype = {
	getStatus: function() {
		return tink_core_FutureStatus.Ready(this.value);
	}
	,handle: function(cb) {
		tink_core_Callback.invoke(cb,tink_core_Lazy.get(this.value));
		return null;
	}
	,__class__: tink_core__$Future_SyncFuture
};
var tink_core_Future = {};
tink_core_Future.flatMap = function(this1,next,gather) {
	var _g = this1.getStatus();
	switch(_g._hx_index) {
	case 3:
		var l = _g.result;
		return new tink_core__$Future_SuspendableFuture(function(fire) {
			return next(tink_core_Lazy.get(l)).handle(function(v) {
				fire(v);
			});
		});
	case 4:
		return tink_core_Future.NEVER;
	default:
		return new tink_core__$Future_SuspendableFuture(function($yield) {
			var inner = new tink_core_CallbackLinkRef();
			var outer = this1.handle(function(v) {
				var outer = next(v).handle($yield);
				inner.link = outer;
			});
			return new tink_core__$Callback_LinkPair(outer,inner);
		});
	}
};
var tink_core_FutureStatus = $hxEnums["tink.core.FutureStatus"] = { __ename__:true,__constructs__:null
	,Suspended: {_hx_name:"Suspended",_hx_index:0,__enum__:"tink.core.FutureStatus",toString:$estr}
	,Awaited: {_hx_name:"Awaited",_hx_index:1,__enum__:"tink.core.FutureStatus",toString:$estr}
	,EagerlyAwaited: {_hx_name:"EagerlyAwaited",_hx_index:2,__enum__:"tink.core.FutureStatus",toString:$estr}
	,Ready: ($_=function(result) { return {_hx_index:3,result:result,__enum__:"tink.core.FutureStatus",toString:$estr}; },$_._hx_name="Ready",$_.__params__ = ["result"],$_)
	,NeverEver: {_hx_name:"NeverEver",_hx_index:4,__enum__:"tink.core.FutureStatus",toString:$estr}
};
tink_core_FutureStatus.__constructs__ = [tink_core_FutureStatus.Suspended,tink_core_FutureStatus.Awaited,tink_core_FutureStatus.EagerlyAwaited,tink_core_FutureStatus.Ready,tink_core_FutureStatus.NeverEver];
var tink_core__$Future_SuspendableFuture = function(wakeup) {
	this.status = tink_core_FutureStatus.Suspended;
	var _gthis = this;
	this.wakeup = wakeup;
	this.callbacks = new tink_core_CallbackList(true);
	this.callbacks.ondrain = function() {
		if(_gthis.status == tink_core_FutureStatus.Awaited) {
			_gthis.status = tink_core_FutureStatus.Suspended;
			var this1 = _gthis.link;
			if(this1 != null) {
				this1.cancel();
			}
			_gthis.link = null;
		}
	};
	this.callbacks.onfill = function() {
		if(_gthis.status == tink_core_FutureStatus.Suspended) {
			_gthis.status = tink_core_FutureStatus.Awaited;
			_gthis.arm();
		}
	};
};
tink_core__$Future_SuspendableFuture.__name__ = true;
tink_core__$Future_SuspendableFuture.__interfaces__ = [tink_core__$Future_FutureObject];
tink_core__$Future_SuspendableFuture.prototype = {
	getStatus: function() {
		return this.status;
	}
	,trigger: function(value) {
		var _g = this.status;
		if(_g._hx_index == 3) {
			var _g1 = _g.result;
		} else {
			this.status = tink_core_FutureStatus.Ready(new tink_core__$Lazy_LazyConst(value));
			var link = this.link;
			this.link = null;
			this.wakeup = null;
			this.callbacks.invoke(value);
			if(link != null) {
				link.cancel();
			}
		}
	}
	,handle: function(callback) {
		var _g = this.status;
		if(_g._hx_index == 3) {
			var result = _g.result;
			tink_core_Callback.invoke(callback,tink_core_Lazy.get(result));
			return null;
		} else {
			var _this = this.callbacks;
			if(_this.disposeHandlers == null) {
				return null;
			} else {
				var node = new tink_core__$Callback_ListCell(callback,_this);
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
				return node;
			}
		}
	}
	,arm: function() {
		var _gthis = this;
		this.link = this.wakeup(function(x) {
			_gthis.trigger(x);
		});
	}
	,__class__: tink_core__$Future_SuspendableFuture
};
var tink_core_Lazy = {};
tink_core_Lazy.get = function(this1) {
	this1.compute();
	return this1.get();
};
var tink_core_NamedWith = function(name,value) {
	this.name = name;
	this.value = value;
};
tink_core_NamedWith.__name__ = true;
tink_core_NamedWith.prototype = {
	__class__: tink_core_NamedWith
};
var tink_core_Outcome = $hxEnums["tink.core.Outcome"] = { __ename__:true,__constructs__:null
	,Success: ($_=function(data) { return {_hx_index:0,data:data,__enum__:"tink.core.Outcome",toString:$estr}; },$_._hx_name="Success",$_.__params__ = ["data"],$_)
	,Failure: ($_=function(failure) { return {_hx_index:1,failure:failure,__enum__:"tink.core.Outcome",toString:$estr}; },$_._hx_name="Failure",$_.__params__ = ["failure"],$_)
};
tink_core_Outcome.__constructs__ = [tink_core_Outcome.Success,tink_core_Outcome.Failure];
var tink_core_Promise = {};
tink_core_Promise.next = function(this1,f,gather) {
	return tink_core_Future.flatMap(this1,function(o) {
		switch(o._hx_index) {
		case 0:
			var d = o.data;
			return f(d);
		case 1:
			var f1 = o.failure;
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(f1)));
		}
	});
};
var tink_core_Signal = {};
tink_core_Signal.trigger = function() {
	return new tink_core_SignalTrigger();
};
var tink_core__$Signal_SignalObject = function() { };
tink_core__$Signal_SignalObject.__name__ = true;
tink_core__$Signal_SignalObject.__isInterface__ = true;
tink_core__$Signal_SignalObject.__interfaces__ = [tink_core_Disposable];
var tink_core_SignalTrigger = function() {
	this.handlers = new tink_core_CallbackList();
};
tink_core_SignalTrigger.__name__ = true;
tink_core_SignalTrigger.__interfaces__ = [tink_core_OwnedDisposable,tink_core__$Signal_SignalObject];
tink_core_SignalTrigger.prototype = {
	__class__: tink_core_SignalTrigger
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
	,__class__: tink_pure_NodeIterator
};
var tink_state__$Scheduler_SchedulerObject = function() { };
tink_state__$Scheduler_SchedulerObject.__name__ = true;
tink_state__$Scheduler_SchedulerObject.__isInterface__ = true;
tink_state__$Scheduler_SchedulerObject.prototype = {
	__class__: tink_state__$Scheduler_SchedulerObject
};
var tink_state__$Scheduler_DirectScheduler = function() {
	this.queue = null;
};
tink_state__$Scheduler_DirectScheduler.__name__ = true;
tink_state__$Scheduler_DirectScheduler.__interfaces__ = [tink_state__$Scheduler_SchedulerObject];
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
	,__class__: tink_state__$Scheduler_DirectScheduler
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
tink_state__$Scheduler_BatchScheduler.__interfaces__ = [tink_state__$Scheduler_SchedulerObject];
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
	,__class__: tink_state__$Scheduler_BatchScheduler
};
var tink_state_Observable = {};
tink_state_Observable.get_value = function(this1) {
	var ret = this1.getValue();
	if(tink_state_internal_AutoObservable.cur != null && this1.canFire()) {
		tink_state_internal_AutoObservable.cur.subscribeTo(this1,ret);
	}
	return ret;
};
tink_state_Observable.map = function(this1,f) {
	return new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		var value = tink_state_Observable.get_value(this1);
		return f(value);
	}),null);
};
var tink_state_Schedulable = function() { };
tink_state_Schedulable.__name__ = true;
tink_state_Schedulable.__isInterface__ = true;
tink_state_Schedulable.prototype = {
	__class__: tink_state_Schedulable
};
var tink_state__$Scheduler_JustOnce = function() {
};
tink_state__$Scheduler_JustOnce.__name__ = true;
tink_state__$Scheduler_JustOnce.__interfaces__ = [tink_state_Schedulable];
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
	,__class__: tink_state__$Scheduler_JustOnce
};
var tink_state_State = {};
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
var tink_state__$State_StateObject = function() { };
tink_state__$State_StateObject.__name__ = true;
tink_state__$State_StateObject.__isInterface__ = true;
tink_state__$State_StateObject.__interfaces__ = [tink_state_internal_ObservableObject];
tink_state__$State_StateObject.prototype = {
	__class__: tink_state__$State_StateObject
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
tink_state__$State_SimpleState.__interfaces__ = [tink_state__$State_StateObject];
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
	,__class__: tink_state__$State_SimpleState
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
	,__class__: tink_state__$State_GuardedState
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
tink_state_internal__$AutoObservable_SubscriptionTo.prototype = {
	__class__: tink_state_internal__$AutoObservable_SubscriptionTo
};
var tink_state_internal__$AutoObservable_Derived = function() { };
tink_state_internal__$AutoObservable_Derived.__name__ = true;
tink_state_internal__$AutoObservable_Derived.__isInterface__ = true;
tink_state_internal__$AutoObservable_Derived.prototype = {
	__class__: tink_state_internal__$AutoObservable_Derived
};
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
tink_state_internal_AutoObservable.__interfaces__ = [tink_state_internal_ObservableObject,tink_state_internal__$AutoObservable_Derived,tink_state_internal_Invalidatable];
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
	,__class__: tink_state_internal_AutoObservable
});
var tink_state_internal_Revision = {};
tink_state_internal_Revision._new = function() {
	var this1 = tink_state_internal_Revision;
	var this2 = this1.counter += 1.0;
	return this2;
};
var tink_state_internal_Transform = {};
tink_state_internal_Transform.plain = function(f) {
	var this1 = f;
	return this1;
};
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
if(typeof(performance) != "undefined" ? typeof(performance.now) == "function" : false) {
	HxOverrides.now = performance.now.bind(performance);
}
String.prototype.__class__ = String;
String.__name__ = true;
Array.__name__ = true;
var Int = { };
var Dynamic = { };
var Float = Number;
var Bool = Boolean;
var Class = { };
var Enum = { };
coconut_diffing_TypeId.idCounter = 0;
haxe_ds_ObjectMap.count = 0;
js_Boot.__toStr = ({ }).toString;
tink_state_internal_Revision.counter = .0;
client_WorkItemType.AllTypes = ["Game","Game Jam","Tech","Tech Art","Art"];
tink_pure__$List_Node.EMPTY = [];
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
coconut_vdom_Html.LI = coconut_vdom_Html.nodeType("li");
coconut_vdom_Html.LABEL = coconut_vdom_Html.nodeType("label");
coconut_vdom_Html.INPUT = coconut_vdom_Html.nodeType("input");
coconut_vdom_Html.IMG = coconut_vdom_Html.nodeType("img");
coconut_vdom_Html.IFRAME = coconut_vdom_Html.nodeType("iframe");
coconut_vdom_Html.DIV = coconut_vdom_Html.nodeType("div");
coconut_vdom_Html.BR = coconut_vdom_Html.nodeType("br");
coconut_vdom_Html.B = coconut_vdom_Html.nodeType("b");
coconut_vdom_Html.A = coconut_vdom_Html.nodeType("a");
coconut_vdom__$Html_Text.inst = new coconut_vdom__$Html_Text();
client_WorkData.allWorkItem = client_WorkData.sortNMapIndex([{ title : "Balance of Power", path : "./images/showoff/balance-of-power/balance-of-power.png", type : tink_pure_List.fromArray(["Game","Tech"]), value : -1, display : function(d) {
	var d1 = d.title;
	var hxxMeta = { };
	var __r = [];
	var tmp = coconut_vdom_Html.IFRAME.vnode({ width : 1000, height : 1434, src : "https://www.youtube.com/embed/VDaQ-bodBNg", title : "Balance of Power - Gameplay Trailer", allow : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullscreen : true},hxxMeta.key,hxxMeta.ref,__r);
	var hxxMeta = { };
	var __r = [];
	__r.push(coconut_vdom__$Html_Text.inst.vnode("This game was created during the 2 Technically 2 Jam with 8 other person (all informations are on the itch page).\r\n                        The theme was \"Ying Yang\" & \"Wizard\", so we decided to go on a game where you keep balance in the world between Ice and Fire.\r\n\t\t\t\t\t\tTo do that, you will have to move to tiles to defeat their bastions.",null,null,null));
	var hxxMeta1 = { };
	__r.push(coconut_vdom_Html.BR.vnode({ },hxxMeta1.key,hxxMeta1.ref));
	__r.push(coconut_vdom__$Html_Text.inst.vnode("During this game, while joining the design meetings and decisions, I mainly did:",null,null,null));
	var hxxMeta1 = { };
	var __r1 = [];
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("3C Programming",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Integration",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("And helped here and there",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,__r1));
	var hxxMeta1 = { };
	__r.push(coconut_vdom_Html.BR.vnode({ },hxxMeta1.key,hxxMeta1.ref));
	var hxxMeta1 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Links:",null,null,null)];
	__r.push(coconut_vdom_Html.B.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	var hxxMeta1 = { };
	var hxxMeta2 = { };
	var hxxMeta3 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Play it on Itch ☯️",null,null,null)];
	var children1 = [coconut_vdom_Html.A.vnode({ href : "https://rikoo.itch.io/balance-of-power", target : "blank"},hxxMeta3.key,hxxMeta3.ref,children)];
	var children = [coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children1)];
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	return client_WorkData.defaultDisplay(d1,tmp,coconut_vdom_Html.DIV.vnode({ },hxxMeta.key,hxxMeta.ref,__r));
}, index : 0},{ title : "Age of Empire 4", path : "./images/showoff/aoe4/aoe4_main.jpg", type : tink_pure_List.fromArray(["Game","Tech"]), value : 1, display : function(d) {
	var d1 = d.title;
	var hxxMeta = { };
	var tmp = coconut_vdom_Html.IMG.vnode({ src : "./images/showoff/aoe4/credits.jpg"},hxxMeta.key,hxxMeta.ref);
	var hxxMeta = { };
	var __r = [];
	__r.push(coconut_vdom__$Html_Text.inst.vnode("During Age of Empire 4 Development, I was part of the optimisation team. My tasks were:",null,null,null));
	var hxxMeta1 = { };
	var __r1 = [];
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Optimising both Gameplay and Engine code",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Profiling and understanding what low level code and compiler were doing",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Consistently dialogue with other teams to best understand their code and include the optimisations",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Learning and adapt to a lot different fields: Gameplay, Rendering, etc.",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,__r1));
	return client_WorkData.defaultDisplay(d1,tmp,coconut_vdom_Html.DIV.vnode({ },hxxMeta.key,hxxMeta.ref,__r));
}, index : 0},{ title : "Custom Engine", path : "./images/showoff/custom-engine/main.gif", type : tink_pure_List.fromArray(["Tech","Game"]), value : 2, display : function(d) {
	var d1 = d.title;
	var hxxMeta = { };
	var tmp = coconut_vdom_Html.IMG.vnode({ src : "./images/showoff/custom-engine/main.gif"},hxxMeta.key,hxxMeta.ref);
	var hxxMeta = { };
	var __r = [];
	__r.push(coconut_vdom__$Html_Text.inst.vnode("On my free time, I recently started to develop a new game, so far I can't really announce the content as it is really WIP,\r\n                    but it will have nervous gameplay to support some fight and physic based mechanics. In order to sharpen my skills and \r\n                    get out of my comfort zone, I decided to write it in a custom engine. So far the Engine starts to be pretty nice featur wise:",null,null,null));
	var hxxMeta1 = { };
	var __r1 = [];
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Entity System",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Collision system for Sphere and lines",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Physic system that handles movement and collision responses",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Resource loader that handles Texture and mesh loading",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Animation system that reads data from Assimp library and display animations",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Custom file format scene saving and loading",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("3D Rendering",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,__r1));
	__r.push(coconut_vdom__$Html_Text.inst.vnode("It is a fun challenge I am quite happy with, my code architecture starts to really show its strength\r\n                    as the project goes farther and farther.\r\n\r\n                    I started a small devlog serie on this project:",null,null,null));
	var hxxMeta1 = { };
	var hxxMeta2 = { };
	var hxxMeta3 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Dev Log #1 — Custom Engine : Writing my collision system",null,null,null)];
	var children1 = [coconut_vdom_Html.A.vnode({ href : "https://medium.com/@erikkubiak/dev-log-1-custom-engine-writing-my-collision-system-2a97856f9a93", target : "about"},hxxMeta3.key,hxxMeta3.ref,children)];
	var children = [coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children1)];
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	return client_WorkData.defaultDisplay(d1,tmp,coconut_vdom_Html.DIV.vnode({ },hxxMeta.key,hxxMeta.ref,__r));
}, index : 0},{ title : "Vineyard", path : "./images/showoff/vineyard/vineyard.jpg", type : tink_pure_List.fromArray(["Tech Art","Tech","Game"]), value : 0, display : function(d) {
	var d1 = d.title;
	var hxxMeta = { };
	var __r = [];
	var tmp = coconut_vdom_Html.IFRAME.vnode({ width : 1920, height : 1080, src : "https://www.youtube.com/embed/gbco33ooFY0?controls=0", title : "YouTube video player", allow : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullscreen : true},hxxMeta.key,hxxMeta.ref,__r);
	var hxxMeta = { };
	var __r = [];
	__r.push(coconut_vdom__$Html_Text.inst.vnode("This little game is something I did on my free time for a challenge with the them \"Ivy/Vine\". I decided to create\r\n                        a small game with warm aesthetic to support the chill gameplay. There you will have the power to regreen the dry earth\r\n                        with your magic seeds. Every seed drop will make a magical vine invade the place.\r\n                        It has no real goal because I was lacking time but it is still a full game. \r\n                        Everything there has been made by me except the music and the sounds right in Unity.",null,null,null));
	var hxxMeta1 = { };
	__r.push(coconut_vdom_Html.BR.vnode({ },hxxMeta1.key,hxxMeta1.ref));
	var hxxMeta1 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Links:",null,null,null)];
	__r.push(coconut_vdom_Html.B.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	var hxxMeta1 = { };
	var hxxMeta2 = { };
	var hxxMeta3 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Play it on itch.io 🌱",null,null,null)];
	var children1 = [coconut_vdom_Html.A.vnode({ href : "https://rikoo.itch.io/vineyard", target : "blank"},hxxMeta3.key,hxxMeta3.ref,children)];
	var children = [coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children1)];
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	return client_WorkData.defaultDisplay(d1,tmp,coconut_vdom_Html.DIV.vnode({ },hxxMeta.key,hxxMeta.ref,__r));
}, index : 0},{ title : "Black Meowgic", path : "./images/showoff/black-meowgic/black-meowgic-main.jpg", type : tink_pure_List.fromArray(["Art"]), value : 3, display : function(d) {
	var d1 = d.title;
	var hxxMeta = { };
	var __r = [];
	var tmp = coconut_vdom_Html.IFRAME.vnode({ width : 1000, height : 1434, src : "https://www.youtube.com/embed/jSUkl_pd0zI", title : "Black Meowgic - Final Result", allow : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullscreen : true},hxxMeta.key,hxxMeta.ref,__r);
	var hxxMeta = { };
	var __r = [];
	__r.push(coconut_vdom__$Html_Text.inst.vnode("This illustration has been made for a Technically A Challenge where the goal was to reproduce a Concept Art.\r\n                        I decided to recreate ",null,null,null));
	var hxxMeta1 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("this",null,null,null)];
	__r.push(coconut_vdom_Html.A.vnode({ href : "https://www.qwertee.com/shop/prints/black-meowgic-136?force-desktop=1", target : "blank"},hxxMeta1.key,hxxMeta1.ref,children));
	__r.push(coconut_vdom__$Html_Text.inst.vnode(" Qwertee poster that I really like. It was a fun and demanding challenge to imagine how this illustration may be animated.\r\n                        I decided to move on Unity to do this one, the models were made in blender but the big work was all about doing creative shaders\r\n                        in the engine.",null,null,null));
	var hxxMeta1 = { };
	__r.push(coconut_vdom_Html.BR.vnode({ },hxxMeta1.key,hxxMeta1.ref));
	var hxxMeta1 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Links:",null,null,null)];
	__r.push(coconut_vdom_Html.B.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	var hxxMeta1 = { };
	var hxxMeta2 = { };
	var hxxMeta3 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("ArtStation",null,null,null)];
	var children1 = [coconut_vdom_Html.A.vnode({ href : "https://www.artstation.com/artwork/B3qJ0l", target : "blank"},hxxMeta3.key,hxxMeta3.ref,children)];
	var children = [coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children1)];
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	return client_WorkData.defaultDisplay(d1,tmp,coconut_vdom_Html.DIV.vnode({ },hxxMeta.key,hxxMeta.ref,__r));
}, index : 0},{ title : "Medieval Drawing", path : "./images/showoff/medieval-outline/medieval-outline-main.jpg", type : tink_pure_List.fromArray(["Tech","Tech Art"]), value : 4, display : function(d) {
	var d1 = d.title;
	var hxxMeta = { };
	var __r = [];
	var tmp = coconut_vdom_Html.IFRAME.vnode({ width : 1920, height : 1080, src : "https://www.youtube.com/embed/Y6Vw1Dg2jUI", title : "Medieval Drawing demo", allow : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullscreen : true},hxxMeta.key,hxxMeta.ref,__r);
	var hxxMeta = { };
	var __r = [];
	var hxxMeta1 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("I created this Post Processing in a day afer discussing with a friend about a medieval inspired game.\r\n                        We brainsormed a bit and imagined cinematics as fading medieval gravure. Doing this one picture at a time would \r\n                        takes a lot of drawing time. Thus I looked for a way to automatize it.  So here we go after a day of R&D in Unity\r\n                        the above result. This made a lot of impressions on both Discord and Twitter so I decided to create some breakdown of the effect:",null,null,null)];
	__r.push(coconut_vdom_Html.P.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	var hxxMeta1 = { };
	var attr = { className : tink_domspec_ClassName.ofString("full-width flex-column-centered")};
	var hxxMeta2 = { };
	var children = [coconut_vdom_Html.IFRAME.vnode({ width : 480, height : 270, src : "https://www.youtube.com/embed/bd1N3QcwU6M", title : "Medieval Drawing Breakdown", allow : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"},hxxMeta2.key,hxxMeta2.ref,null)];
	__r.push(coconut_vdom_Html.DIV.vnode(attr,hxxMeta1.key,hxxMeta1.ref,children));
	var hxxMeta1 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("For now, the effect is a bit on pause but I started a written breakdown where the first part can be used as\r\n                        a reference for any Renderer Feature in Unity:",null,null,null)];
	__r.push(coconut_vdom_Html.P.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	var hxxMeta1 = { };
	var __r1 = [];
	var hxxMeta2 = { };
	var hxxMeta3 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Introduction: Medieval Engraving Post Processing",null,null,null)];
	var children1 = [coconut_vdom_Html.A.vnode({ href : "https://medium.com/@erikkubiak/introduction-medieval-engraving-post-processing-ecad1bae3b06", target : "blank"},hxxMeta3.key,hxxMeta3.ref,children)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children1));
	var hxxMeta2 = { };
	var hxxMeta3 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Part 1: Setting up our Post-Processing",null,null,null)];
	var children1 = [coconut_vdom_Html.A.vnode({ href : "https://medium.com/@erikkubiak/part-1-setting-up-our-post-processing-5a04934ad3f1", target : "blank"},hxxMeta3.key,hxxMeta3.ref,children)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children1));
	var hxxMeta2 = { };
	var hxxMeta3 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Part 2: Object Outline",null,null,null)];
	var children1 = [coconut_vdom_Html.A.vnode({ href : "https://medium.com/@erikkubiak/wip-part-2-object-outline-d9a420a4bc2c", target : "blank"},hxxMeta3.key,hxxMeta3.ref,children)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children1));
	var hxxMeta2 = { };
	var __r2 = [];
	__r2.push(coconut_vdom__$Html_Text.inst.vnode("Spotted in Technically Art: Issue ",null,null,null));
	var hxxMeta3 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("136",null,null,null)];
	__r2.push(coconut_vdom_Html.A.vnode({ href : "https://halisavakis.com/technically-art-issue-136-03-12-2022/", target : "blank"},hxxMeta3.key,hxxMeta3.ref,children));
	__r2.push(coconut_vdom__$Html_Text.inst.vnode(" & ",null,null,null));
	var hxxMeta3 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("138",null,null,null)];
	__r2.push(coconut_vdom_Html.A.vnode({ href : "https://halisavakis.com/technically-art-issue-138-11-02-2023/", target : "blank"},hxxMeta3.key,hxxMeta3.ref,children));
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,__r2));
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,__r1));
	return client_WorkData.defaultDisplay(d1,tmp,coconut_vdom_Html.DIV.vnode({ },hxxMeta.key,hxxMeta.ref,__r));
}, index : 0},{ title : "Glitch", path : "./images/showoff/glitch/glitch-main.jpg", type : tink_pure_List.fromArray(["Art","Tech Art"]), value : 12, display : function(d) {
	var d1 = d.title;
	var hxxMeta = { };
	var __r = [];
	var tmp = coconut_vdom_Html.IFRAME.vnode({ width : 465, height : 827, src : "https://www.youtube.com/embed/xtZFDaH_K74", title : "Technically A Challenge - Glitch - Final", allow : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullscreen : true},hxxMeta.key,hxxMeta.ref,__r);
	var hxxMeta = { };
	var __r = [];
	__r.push(coconut_vdom__$Html_Text.inst.vnode("This small experiment was carried out as part of a Technically A Challenge with the theme \"Glitch\".\r\n                        I strongly worked on the mood by challenging my modeling, shader and drawing skills while doing for the first\r\n                        time some real sound integration. All bonded with some simple tools. I took some inspiration from the great serie Arcane.",null,null,null));
	var hxxMeta1 = { };
	__r.push(coconut_vdom_Html.BR.vnode({ },hxxMeta1.key,hxxMeta1.ref));
	var hxxMeta1 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Links:",null,null,null)];
	__r.push(coconut_vdom_Html.B.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	var hxxMeta1 = { };
	var hxxMeta2 = { };
	var hxxMeta3 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("ArtStation",null,null,null)];
	var children1 = [coconut_vdom_Html.A.vnode({ href : "https://www.artstation.com/artwork/6bE31N", target : "blank"},hxxMeta3.key,hxxMeta3.ref,children)];
	var children = [coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children1)];
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	return client_WorkData.defaultDisplay(d1,tmp,coconut_vdom_Html.DIV.vnode({ },hxxMeta.key,hxxMeta.ref,__r));
}, index : 0},{ title : "Sand Castle Scaper", path : "./images/showoff/sand/sand-main.jpg", type : tink_pure_List.fromArray(["Tech Art","Tech","Game"]), value : 10, display : function(d) {
	var d1 = d.title;
	var hxxMeta = { };
	var __r = [];
	var tmp = coconut_vdom_Html.IFRAME.vnode({ width : 1920, height : 1080, src : "https://www.youtube.com/embed/7ItCV0CXUeo", title : "Technically A Challenge - Sand x Castle", allow : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullscreen : true},hxxMeta.key,hxxMeta.ref,__r);
	var hxxMeta = { };
	var __r = [];
	__r.push(coconut_vdom__$Html_Text.inst.vnode("This small game was partof a Technically A Challenge where we may mixed up Sand and Castle. As a big fan of",null,null,null));
	var hxxMeta1 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Oskar Stålberg",null,null,null)];
	__r.push(coconut_vdom_Html.A.vnode({ href : "https://twitter.com/OskSta", target : "blank"},hxxMeta1.key,hxxMeta1.ref,children));
	__r.push(coconut_vdom__$Html_Text.inst.vnode(" (creator of Townscaper and Bad North),\r\n                        I had quite fast the idea of reproducing some townscaper gamplay while getting those warm and sunny vibes. \r\n                        I did the complete game myself and managed to train my skills:\r\n                        - Gameplay Programming to handle he 3C\r\n                        - System and Tool programming for the castle creation\r\n                        - Modeling and Shading for the visuals\r\n                        - Some basics VFX, UI and sounds\r\n                        It was quite fun to do and I do hope that you will have fun playing it on",null,null,null));
	var hxxMeta1 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode(" Itch",null,null,null)];
	__r.push(coconut_vdom_Html.A.vnode({ href : "https://rikoo.itch.io/sand-x-castle-challenge", target : "blank"},hxxMeta1.key,hxxMeta1.ref,children));
	__r.push(coconut_vdom__$Html_Text.inst.vnode(".",null,null,null));
	var hxxMeta1 = { };
	__r.push(coconut_vdom_Html.BR.vnode({ },hxxMeta1.key,hxxMeta1.ref));
	var hxxMeta1 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Links:",null,null,null)];
	__r.push(coconut_vdom_Html.B.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	var hxxMeta1 = { };
	var __r1 = [];
	var hxxMeta2 = { };
	var hxxMeta3 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("🏰 Play it on Itch 🏰",null,null,null)];
	var children1 = [coconut_vdom_Html.A.vnode({ href : "https://rikoo.itch.io/sand-x-castle-challenge", target : "blank"},hxxMeta3.key,hxxMeta3.ref,children)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children1));
	var hxxMeta2 = { };
	var hxxMeta3 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("ArtStation",null,null,null)];
	var children1 = [coconut_vdom_Html.A.vnode({ href : "https://www.artstation.com/artwork/nERLGr", target : "blank"},hxxMeta3.key,hxxMeta3.ref,children)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children1));
	var hxxMeta2 = { };
	var hxxMeta3 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Spotted in Technically Art: Issue 127",null,null,null)];
	var children1 = [coconut_vdom_Html.A.vnode({ href : "https://halisavakis.com/technically-art-issue-127-30-09-2022/", target : "blank"},hxxMeta3.key,hxxMeta3.ref,children)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children1));
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,__r1));
	return client_WorkData.defaultDisplay(d1,tmp,coconut_vdom_Html.DIV.vnode({ },hxxMeta.key,hxxMeta.ref,__r));
}, index : 0},{ title : "Seabula Monster", path : "./images/showoff/seabula/seabula-main.jpg", type : tink_pure_List.fromArray(["Tech Art","Art"]), value : 11, display : function(d) {
	var d1 = d.title;
	var hxxMeta = { };
	var __r = [];
	var tmp = coconut_vdom_Html.IFRAME.vnode({ width : 1920, height : 1080, src : "https://www.youtube.com/embed/B4Ri2Cp43mo", title : "Technically A Challenge - Sand x Castle", allow : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullscreen : true},hxxMeta.key,hxxMeta.ref,__r);
	var hxxMeta = { };
	var __r = [];
	__r.push(coconut_vdom__$Html_Text.inst.vnode("This illustration was created during a Technically A Challenge with the themes Nebula and Sea Monster. \r\n                        So let me introduce you the Seabula Monster, a monstruous creature attracting astronauts right into his stomach.\r\n\r\n                        It has been created in blender by mixing modeling and material art skills.",null,null,null));
	var hxxMeta1 = { };
	__r.push(coconut_vdom_Html.BR.vnode({ },hxxMeta1.key,hxxMeta1.ref));
	var hxxMeta1 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Links:",null,null,null)];
	__r.push(coconut_vdom_Html.B.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	var hxxMeta1 = { };
	var hxxMeta2 = { };
	var hxxMeta3 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("ArtStation",null,null,null)];
	var children1 = [coconut_vdom_Html.A.vnode({ href : "https://www.artstation.com/artwork/aGxbeq", target : "blank"},hxxMeta3.key,hxxMeta3.ref,children)];
	var children = [coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children1)];
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	return client_WorkData.defaultDisplay(d1,tmp,coconut_vdom_Html.DIV.vnode({ },hxxMeta.key,hxxMeta.ref,__r));
}, index : 0},{ title : "Electric Canon VFX", path : "./images/showoff/manatree/electric-canon-main.jpg", type : tink_pure_List.fromArray(["Tech Art","Art"]), value : 14, display : function(d) {
	var d1 = d.title;
	var hxxMeta = { };
	var __r = [];
	var tmp = coconut_vdom_Html.IFRAME.vnode({ width : 1920, height : 1080, src : "https://www.youtube.com/embed/PjNm0GnuCqs", title : "Technically A Challenge - Sand x Castle", allow : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullscreen : true},hxxMeta.key,hxxMeta.ref,__r);
	var hxxMeta = { };
	var __r = [];
	__r.push(coconut_vdom__$Html_Text.inst.vnode("This VFX has been realised for a client. The AD was a bit vague on what they wanted so I had some liberty \r\n                        during the production. The main idea was to have a canon that would mainly looks electric but with some \r\n                        fuild features. As it is for a 2D game, and needs to handle different orientation and length\r\n                        I realised a procedural shader for it. I also handled the integration in the game and provided the scripts needed for.",null,null,null));
	var hxxMeta1 = { };
	__r.push(coconut_vdom_Html.BR.vnode({ },hxxMeta1.key,hxxMeta1.ref));
	var hxxMeta1 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Links:",null,null,null)];
	__r.push(coconut_vdom_Html.B.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	var hxxMeta1 = { };
	var hxxMeta2 = { };
	var hxxMeta3 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("ArtStation",null,null,null)];
	var children1 = [coconut_vdom_Html.A.vnode({ href : "https://www.artstation.com/artwork/Om551y", target : "blank"},hxxMeta3.key,hxxMeta3.ref,children)];
	var children = [coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children1)];
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	return client_WorkData.defaultDisplay(d1,tmp,coconut_vdom_Html.DIV.vnode({ },hxxMeta.key,hxxMeta.ref,__r));
}, index : 0},{ title : "Foid Ball VFX", path : "./images/showoff/manatree/foid-ball-main.jpg", type : tink_pure_List.fromArray(["Tech Art","Art"]), value : 15, display : function(d) {
	var d1 = d.title;
	var hxxMeta = { };
	var __r = [];
	var tmp = coconut_vdom_Html.IFRAME.vnode({ width : 1920, height : 1080, src : "https://cdn.artstation.com/p/video_sources/001/050/466/movie-055.mp4"},hxxMeta.key,hxxMeta.ref,__r);
	var hxxMeta = { };
	var __r = [];
	var hxxMeta1 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("This VFX has been realised for a client. The AD was really clear and I had to animate this concept for a 2D game:",null,null,null)];
	__r.push(coconut_vdom_Html.P.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	var hxxMeta1 = { };
	var attr = { className : tink_domspec_ClassName.ofString("flex-column-centered full-width")};
	var hxxMeta2 = { };
	var children = [coconut_vdom_Html.IMG.vnode({ width : 480, height : 270, src : "./images/showoff/manatree/foid-ball-concept.png"},hxxMeta2.key,hxxMeta2.ref)];
	__r.push(coconut_vdom_Html.DIV.vnode(attr,hxxMeta1.key,hxxMeta1.ref,children));
	var hxxMeta1 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("There I extracted the different elements, and reproduced someprocedurally to be able to animate it properly. \r\n                        I also combined it with some Particle system to add some life to it. I realised the integration and provided the needed scripts for.",null,null,null)];
	__r.push(coconut_vdom_Html.P.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	var hxxMeta1 = { };
	__r.push(coconut_vdom_Html.BR.vnode({ },hxxMeta1.key,hxxMeta1.ref));
	var hxxMeta1 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Links:",null,null,null)];
	__r.push(coconut_vdom_Html.B.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	var hxxMeta1 = { };
	var hxxMeta2 = { };
	var hxxMeta3 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("ArtStation",null,null,null)];
	var children1 = [coconut_vdom_Html.A.vnode({ href : "https://www.artstation.com/artwork/OmWGAJ", target : "blank"},hxxMeta3.key,hxxMeta3.ref,children)];
	var children = [coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children1)];
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	return client_WorkData.defaultDisplay(d1,tmp,coconut_vdom_Html.DIV.vnode({ },hxxMeta.key,hxxMeta.ref,__r));
}, index : 0},{ title : "Squidy & Poker", path : "./images/showoff/squidy/squidy-main.png", type : tink_pure_List.fromArray(["Art"]), value : 6, display : function(d) {
	var d1 = d.title;
	var hxxMeta = { };
	var tmp = coconut_vdom_Html.IMG.vnode({ width : 1920, height : 1080, src : "./images/showoff/squidy/squidy-main.png"},hxxMeta.key,hxxMeta.ref);
	var hxxMeta = { };
	var __r = [];
	__r.push(coconut_vdom__$Html_Text.inst.vnode("This illustration was produced during a Technically A Challenge with the themes Tentacle and Cards.\r\n                        It is entirely made in Blender was my first illustration render in it. I worked modeling,\r\n                        composition and even material Art to get this cute stylised art.",null,null,null));
	var hxxMeta1 = { };
	__r.push(coconut_vdom_Html.BR.vnode({ },hxxMeta1.key,hxxMeta1.ref));
	var hxxMeta1 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Links:",null,null,null)];
	__r.push(coconut_vdom_Html.B.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	var hxxMeta1 = { };
	var hxxMeta2 = { };
	var hxxMeta3 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("ArtStation",null,null,null)];
	var children1 = [coconut_vdom_Html.A.vnode({ href : "https://www.artstation.com/artwork/QnyB0L", target : "blank"},hxxMeta3.key,hxxMeta3.ref,children)];
	var children = [coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children1)];
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	return client_WorkData.defaultDisplay(d1,tmp,coconut_vdom_Html.DIV.vnode({ },hxxMeta.key,hxxMeta.ref,__r));
}, index : 0, hasGif : false},{ title : "That's my lake", path : "./images/showoff/underwater-challenge/underwater-challenge-main.png", type : tink_pure_List.fromArray(["Art"]), value : 8, display : function(d) {
	var d1 = d.title;
	var hxxMeta = { };
	var tmp = coconut_vdom_Html.IMG.vnode({ width : 1920, height : 1080, src : "./images/showoff/underwater-challenge/underwater-challenge-main.png"},hxxMeta.key,hxxMeta.ref);
	var hxxMeta = { };
	var __r = [];
	__r.push(coconut_vdom__$Html_Text.inst.vnode("This illustration was produced during a Technically A Challenge with the theme Underwater.\r\n                        It is entirely made in Blender and has again some squid in it. I worked modeling,\r\n                        composition and even material Art while trying to provide a meaningful message.",null,null,null));
	var hxxMeta1 = { };
	__r.push(coconut_vdom_Html.BR.vnode({ },hxxMeta1.key,hxxMeta1.ref));
	var hxxMeta1 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Links:",null,null,null)];
	__r.push(coconut_vdom_Html.B.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	var hxxMeta1 = { };
	var __r1 = [];
	var hxxMeta2 = { };
	var hxxMeta3 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("ArtStation",null,null,null)];
	var children1 = [coconut_vdom_Html.A.vnode({ href : "https://www.artstation.com/artwork/PeQ9N1", target : "blank"},hxxMeta3.key,hxxMeta3.ref,children)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children1));
	var hxxMeta2 = { };
	var hxxMeta3 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Spotted in Technically Art: Issue 135",null,null,null)];
	var children1 = [coconut_vdom_Html.A.vnode({ href : "https://halisavakis.com/technically-art-issue-135-25-11-2022/", target : "blank"},hxxMeta3.key,hxxMeta3.ref,children)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children1));
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,__r1));
	return client_WorkData.defaultDisplay(d1,tmp,coconut_vdom_Html.DIV.vnode({ },hxxMeta.key,hxxMeta.ref,__r));
}, index : 0, hasGif : false},{ title : "Waterfall Sword", path : "./images/showoff/waterfall-sword/waterfall-sword-main.jpg", type : tink_pure_List.fromArray(["Tech Art","Art"]), value : 16, display : function(d) {
	var d1 = d.title;
	var hxxMeta = { };
	var __r = [];
	var tmp = coconut_vdom_Html.IFRAME.vnode({ width : 1920, height : 1080, src : "https://cdn.artstation.com/p/video_sources/000/989/483/movie-002.mp4"},hxxMeta.key,hxxMeta.ref,__r);
	var hxxMeta = { };
	var __r = [];
	__r.push(coconut_vdom__$Html_Text.inst.vnode("This vfx was produced during a Technically A Challenge with the themes Waterfall.\r\n                        It was my first VFX and even Tech Art work in Unity. I realised multiple meshes and shaders\r\n                        to match my artistic vision.",null,null,null));
	var hxxMeta1 = { };
	__r.push(coconut_vdom_Html.BR.vnode({ },hxxMeta1.key,hxxMeta1.ref));
	var hxxMeta1 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Links:",null,null,null)];
	__r.push(coconut_vdom_Html.B.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	var hxxMeta1 = { };
	var hxxMeta2 = { };
	var hxxMeta3 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("ArtStation",null,null,null)];
	var children1 = [coconut_vdom_Html.A.vnode({ href : "https://www.artstation.com/artwork/6b4GAn", target : "blank"},hxxMeta3.key,hxxMeta3.ref,children)];
	var children = [coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children1)];
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	return client_WorkData.defaultDisplay(d1,tmp,coconut_vdom_Html.DIV.vnode({ },hxxMeta.key,hxxMeta.ref,__r));
}, index : 0},{ title : "Rooklike", path : "./images/showoff/rooklike/rooklike-main.jpg", type : tink_pure_List.fromArray(["Game Jam"]), value : 5, display : function(d) {
	var d1 = d.title;
	var hxxMeta = { };
	var tmp = coconut_vdom_Html.IMG.vnode({ width : 1920, height : 1080, src : "./images/showoff/rooklike/rooklike-gameplay.jpg"},hxxMeta.key,hxxMeta.ref);
	var hxxMeta = { };
	var __r = [];
	__r.push(coconut_vdom__$Html_Text.inst.vnode("This game was created during the first TechnicallyAJam with 3 other people (all informations are on the itch page).\r\n                        The theme was \"Like X but Y\", with X an already existing concept and Y being a twist. We picked ",null,null,null));
	var hxxMeta1 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Like Chess\r\n                        but Hitman",null,null,null)];
	__r.push(coconut_vdom_Html.B.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	__r.push(coconut_vdom__$Html_Text.inst.vnode(". So we play a stealth game were the vision and the moves are based on chess pieces. The game was developed on Unity.\r\n                        \r\n                        During this game, while joining the design meetings and decisions I mainly did:",null,null,null));
	var hxxMeta1 = { };
	var __r1 = [];
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Level Editor Tool",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Map Generation",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Environment Modeling",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode(" Shaders",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,__r1));
	var hxxMeta1 = { };
	__r.push(coconut_vdom_Html.BR.vnode({ },hxxMeta1.key,hxxMeta1.ref));
	var hxxMeta1 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Links:",null,null,null)];
	__r.push(coconut_vdom_Html.B.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	var hxxMeta1 = { };
	var hxxMeta2 = { };
	var hxxMeta3 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Play it on Itch ♟️",null,null,null)];
	var children1 = [coconut_vdom_Html.A.vnode({ href : "https://rikoo.itch.io/rooklike", target : "blank"},hxxMeta3.key,hxxMeta3.ref,children)];
	var children = [coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children1)];
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	return client_WorkData.defaultDisplay(d1,tmp,coconut_vdom_Html.DIV.vnode({ },hxxMeta.key,hxxMeta.ref,__r));
}, index : 0, hasGif : false},{ title : "Handicadé", path : "./images/showoff/handicade/handicade-main.jpg", type : tink_pure_List.fromArray(["Game Jam"]), value : 12, display : function(d) {
	var d1 = d.title;
	var hxxMeta = { };
	var __r = [];
	var tmp = coconut_vdom_Html.IFRAME.vnode({ width : 1920, height : 1080, src : "https://www.youtube.com/embed/UlOzFZ-FddE", title : "Handica-dé", allow : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullscreen : true},hxxMeta.key,hxxMeta.ref,__r);
	var hxxMeta = { };
	var __r = [];
	__r.push(coconut_vdom__$Html_Text.inst.vnode("This game was created during the 2022 GMTK Jam with 2 other people (all informations are on the itch page).\r\n                        The theme was \"Roll of the Dice\", so we decided to go on roll bet. Depending on the risk of your bet, you will have more reward.\r\n                        It is basically a turn based dungeon crawler with bet on randomness  🎲",null,null,null));
	var hxxMeta1 = { };
	__r.push(coconut_vdom_Html.BR.vnode({ },hxxMeta1.key,hxxMeta1.ref));
	__r.push(coconut_vdom__$Html_Text.inst.vnode("During this game, while joining the design meetings and decisions, I mainly did:",null,null,null));
	var hxxMeta1 = { };
	var __r1 = [];
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Development of Room Mechanics",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("UI/UX development",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Support on the other development parts",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,__r1));
	var hxxMeta1 = { };
	__r.push(coconut_vdom_Html.BR.vnode({ },hxxMeta1.key,hxxMeta1.ref));
	var hxxMeta1 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Links:",null,null,null)];
	__r.push(coconut_vdom_Html.B.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	var hxxMeta1 = { };
	var hxxMeta2 = { };
	var hxxMeta3 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Play it on Itch 🎲",null,null,null)];
	var children1 = [coconut_vdom_Html.A.vnode({ href : "https://rikoo.itch.io/handica-d", target : "blank"},hxxMeta3.key,hxxMeta3.ref,children)];
	var children = [coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children1)];
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	return client_WorkData.defaultDisplay(d1,tmp,coconut_vdom_Html.DIV.vnode({ },hxxMeta.key,hxxMeta.ref,__r));
}, index : 0},{ title : "Seed Rampage", path : "./images/showoff/seed-rampage/seed-rampage-main.png", type : tink_pure_List.fromArray(["Game Jam"]), value : 7, display : function(d) {
	var d1 = d.title;
	var hxxMeta = { };
	var __r = [];
	var tmp = coconut_vdom_Html.IFRAME.vnode({ width : 1920, height : 1080, src : "https://www.youtube.com/embed/a2QiC0s-tl0", title : "Seed Rampage", allow : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullscreen : true},hxxMeta.key,hxxMeta.ref,__r);
	var hxxMeta = { };
	var __r = [];
	__r.push(coconut_vdom__$Html_Text.inst.vnode("This game was created during the Ludum Dare 52 with 5 other people (all informations are on the itch page).\r\n                        The theme was \"Harvest\", so we decided to go on a tower defense like game matched up with Stardew Valley.\r\n                        You plant seeds🌱, harvest weapons 🔫 and defends the last water 💧 from attackers.",null,null,null));
	var hxxMeta1 = { };
	__r.push(coconut_vdom_Html.BR.vnode({ },hxxMeta1.key,hxxMeta1.ref));
	__r.push(coconut_vdom__$Html_Text.inst.vnode("During this game, while joining the design meetings and decisions, I mainly did:",null,null,null));
	var hxxMeta1 = { };
	var __r1 = [];
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("3C Programming",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Integration",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("And helped here and there",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,__r1));
	var hxxMeta1 = { };
	__r.push(coconut_vdom_Html.BR.vnode({ },hxxMeta1.key,hxxMeta1.ref));
	var hxxMeta1 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Links:",null,null,null)];
	__r.push(coconut_vdom_Html.B.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	var hxxMeta1 = { };
	var hxxMeta2 = { };
	var hxxMeta3 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Play it on Itch 🌱",null,null,null)];
	var children1 = [coconut_vdom_Html.A.vnode({ href : "https://rikoo.itch.io/seed-rampage", target : "blank"},hxxMeta3.key,hxxMeta3.ref,children)];
	var children = [coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children1)];
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	return client_WorkData.defaultDisplay(d1,tmp,coconut_vdom_Html.DIV.vnode({ },hxxMeta.key,hxxMeta.ref,__r));
}, index : 0},{ title : "Ludum Dare 50", path : "./images/showoff/ld50/ld50-main.jpg", type : tink_pure_List.fromArray(["Game Jam"]), value : 13, display : function(d) {
	var d1 = d.title;
	var hxxMeta = { };
	var tmp = coconut_vdom_Html.IMG.vnode({ width : 1920, height : 1080, src : "./images/showoff/ld50/ld50-main.jpg"},hxxMeta.key,hxxMeta.ref);
	var hxxMeta = { };
	var __r = [];
	__r.push(coconut_vdom__$Html_Text.inst.vnode("This game was created during the 2022 GMTK Jam with 2 other people (all informations are on the itch page).\r\n                        The theme was \"Roll of the Dice\", so we decided to go on roll bet. Depending on the risk of your bet, you will have more reward.\r\n                        It is basically a turn based dungeon crawler with bet on randomness  🎲",null,null,null));
	var hxxMeta1 = { };
	__r.push(coconut_vdom_Html.BR.vnode({ },hxxMeta1.key,hxxMeta1.ref));
	__r.push(coconut_vdom__$Html_Text.inst.vnode("During this game, while joining the design meetings and decisions, I mainly did:",null,null,null));
	var hxxMeta1 = { };
	var __r1 = [];
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("3C Programming",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Coop Session Programming",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Integration",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Shaders",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("VFX",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Level Design",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,__r1));
	var hxxMeta1 = { };
	__r.push(coconut_vdom_Html.BR.vnode({ },hxxMeta1.key,hxxMeta1.ref));
	var hxxMeta1 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Links:",null,null,null)];
	__r.push(coconut_vdom_Html.B.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	var hxxMeta1 = { };
	var hxxMeta2 = { };
	var hxxMeta3 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Play it on Itch 🐔",null,null,null)];
	var children1 = [coconut_vdom_Html.A.vnode({ href : "https://rikoo.itch.io/ld-50-crazy-chicken-on-the-ark", target : "blank"},hxxMeta3.key,hxxMeta3.ref,children)];
	var children = [coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children1)];
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	return client_WorkData.defaultDisplay(d1,tmp,coconut_vdom_Html.DIV.vnode({ },hxxMeta.key,hxxMeta.ref,__r));
}, index : 0, hasGif : false},{ title : "Sea Crab", path : "./images/showoff/sea-crab/sea-crab-main.png", type : tink_pure_List.fromArray(["Game Jam"]), value : 14, display : function(d) {
	var d1 = d.title;
	var hxxMeta = { };
	var tmp = coconut_vdom_Html.IMG.vnode({ width : 1920, height : 1080, src : "./images/showoff/sea-crab/sea-crab-main.png"},hxxMeta.key,hxxMeta.ref);
	var hxxMeta = { };
	var __r = [];
	__r.push(coconut_vdom__$Html_Text.inst.vnode("This game was created during the 2021 GMTK Jam with 2 other people.\r\n                    The theme was \"Joined Together\". You play as a magical entity that will try to free hermit crab that\r\n                    are waiting for their death in this strange underwater place. When see are close to youhey will try to reach you, \r\n                    you may use that to solv some basic puzzles, but watch out...they will drive crazy at the end.",null,null,null));
	var hxxMeta1 = { };
	__r.push(coconut_vdom_Html.BR.vnode({ },hxxMeta1.key,hxxMeta1.ref));
	__r.push(coconut_vdom__$Html_Text.inst.vnode("During this game, while joining the design meetings and decisions, I mainly did:",null,null,null));
	var hxxMeta1 = { };
	var __r1 = [];
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("3C Programming",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	var hxxMeta2 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Integration",null,null,null)];
	__r1.push(coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children));
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,__r1));
	var hxxMeta1 = { };
	__r.push(coconut_vdom_Html.BR.vnode({ },hxxMeta1.key,hxxMeta1.ref));
	var hxxMeta1 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Links:",null,null,null)];
	__r.push(coconut_vdom_Html.B.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	var hxxMeta1 = { };
	var hxxMeta2 = { };
	var hxxMeta3 = { };
	var children = [coconut_vdom__$Html_Text.inst.vnode("Play it on Itch 🦀",null,null,null)];
	var children1 = [coconut_vdom_Html.A.vnode({ href : "https://rikoo.itch.io/late-gmtk-2021", target : "blank"},hxxMeta3.key,hxxMeta3.ref,children)];
	var children = [coconut_vdom_Html.LI.vnode({ },hxxMeta2.key,hxxMeta2.ref,children1)];
	__r.push(coconut_vdom_Html.UL.vnode({ },hxxMeta1.key,hxxMeta1.ref,children));
	return client_WorkData.defaultDisplay(d1,tmp,coconut_vdom_Html.DIV.vnode({ },hxxMeta.key,hxxMeta.ref,__r));
}, index : 0, hasGif : false}]);
client_WorkData.mainWorkItem = [client_WorkData.fromTitle("Age of Empire 4"),client_WorkData.fromTitle("Balance of Power"),client_WorkData.fromTitle("Vineyard","Experiments"),client_WorkData.fromTitle("Black Meowgic","Illustrations")];
coconut_diffing_Root.byParent = new haxe_ds_ObjectMap();
coconut_diffing_internal_VEmpty.TYPE = (function($this) {
	var $r;
	var this1 = coconut_diffing_TypeId.idCounter++;
	$r = this1;
	return $r;
}(this));
coconut_ui_internal_ImplicitContext.ORPHAN = new tink_core__$Lazy_LazyConst(null);
coconut_vdom_Renderer.BACKEND = new coconut_vdom__$Renderer_DomBackend();
tink_core_Callback.depth = 0;
tink_core_Future.NEVER = new tink_core__$Future_NeverFuture();
tink_state_Scheduler.direct = new tink_state__$Scheduler_DirectScheduler();
tink_state_Observable.MAX_ITERATIONS = 100;
tink_state_Observable.scheduler = tink_state_Scheduler.batched(tink_state_Scheduler.batcher());
tink_state_Observable.isUpdating = false;
tink_state__$Scheduler_JustOnce.pool = [];
client_home_Main.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
