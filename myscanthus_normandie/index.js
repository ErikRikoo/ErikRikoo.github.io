(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
// Generated by Haxe 4.0.5
(function ($global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Main = function() { };
Main.__name__ = true;
Main.main = function() {
	ReactDOM.render({ $$typeof : $$tre, type : view_App, props : { }, key : null, ref : null},window.document.getElementById("app"));
};
Math.__name__ = true;
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	if(Error.captureStackTrace) {
		Error.captureStackTrace(this,js__$Boot_HaxeError);
	}
};
js__$Boot_HaxeError.__name__ = true;
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
});
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
			var n = e.__constructs__[o._hx_index];
			var con = e[n];
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
			var _g3 = 0;
			var _g11 = o.length;
			while(_g3 < _g11) {
				var i = _g3++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e1 ) {
			var e2 = ((e1) instanceof js__$Boot_HaxeError) ? e1.val : e1;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str1 = "{\n";
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
		if(str1.length != 2) {
			str1 += ", \n";
		}
		str1 += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str1 += "\n" + s + "}";
		return str1;
	case "string":
		return o;
	default:
		return String(o);
	}
};
var model_Content = function() { };
model_Content.__name__ = true;
var view_App = function(props) {
	React.Component.call(this,props);
	this.jquery = $(window.document);
	window.document.addEventListener("scroll",$bind(this,this.onScroll));
	view_App.subpagesId.reverse();
};
view_App.__name__ = true;
view_App.__super__ = React.Component;
view_App.prototype = $extend(React.Component.prototype,{
	render: function() {
		return { $$typeof : $$tre, type : "div", props : { children : [{ $$typeof : $$tre, type : view_NavBar, props : { }, key : null, ref : null},{ $$typeof : $$tre, type : view_Home, props : { }, key : null, ref : null},{ $$typeof : $$tre, type : view_MyscanthusPresentation, props : { }, key : null, ref : null},{ $$typeof : $$tre, type : view_Mulch, props : { }, key : null, ref : null},{ $$typeof : $$tre, type : view_Litter, props : { }, key : null, ref : null},{ $$typeof : $$tre, type : view_Gallery, props : { }, key : null, ref : null},{ $$typeof : $$tre, type : view_Contact, props : { }, key : null, ref : null}]}, key : null, ref : null};
	}
	,onScroll: function() {
		var _g = 0;
		var _g1 = view_App.subpagesId;
		while(_g < _g1.length) {
			var id = _g1[_g];
			++_g;
			var elementScrollPlace = $("#" + id).offset().top;
			if(this.jquery.scrollTop() >= elementScrollPlace) {
				var currentActive = $(".active");
				if(currentActive.attr("href") != "#" + id) {
					currentActive.removeClass("active");
					$(".nav-link[href=\"#" + id + "\"]").addClass("active");
				}
				break;
			}
		}
	}
});
var view_Contact = function(props) {
	React.Component.call(this,props);
};
view_Contact.__name__ = true;
view_Contact.__super__ = React.Component;
view_Contact.prototype = $extend(React.Component.prototype,{
	render: function() {
		return { $$typeof : $$tre, type : "div", props : { 'class' : "subpage greater-height", children : [{ $$typeof : $$tre, type : "span", props : { id : "contact", 'class' : "anchor"}, key : null, ref : null},{ $$typeof : $$tre, type : "h1", props : { children : " Contact "}, key : null, ref : null},{ $$typeof : $$tre, type : "div", props : { 'class' : "container", children : { $$typeof : $$tre, type : "div", props : { 'class' : "row", children : [{ $$typeof : $$tre, type : "div", props : { 'class' : "col-5", children : [{ $$typeof : $$tre, type : "h3", props : { 'class' : "centered", children : "En direct de l'exploitation agricole"}, key : null, ref : null},{ $$typeof : $$tre, type : "p", props : { 'class' : "centered", children : ["à Fleury sur Orne ",{ $$typeof : $$tre, type : "br", props : { 'class' : "small-screen-visble"}, key : null, ref : null},"(49.156578, -0.369173)"]}, key : null, ref : null},{ $$typeof : $$tre, type : "p", props : { 'class' : "centered", children : ["et Moulins-en-Bessin ",{ $$typeof : $$tre, type : "br", props : { 'class' : "small-screen-visble"}, key : null, ref : null}," (49.250342, -0.561784)"]}, key : null, ref : null},{ $$typeof : $$tre, type : "h4", props : { children : " Martin Pomikal "}, key : null, ref : null},{ $$typeof : $$tre, type : "p", props : { children : ["07 89 85 00 04",{ $$typeof : $$tre, type : "br", props : { }, key : null, ref : null},"martin.pomikal@gmail.com",{ $$typeof : $$tre, type : "br", props : { }, key : null, ref : null},"38 avenue d'Harcourt",{ $$typeof : $$tre, type : "br", props : { }, key : null, ref : null},"14123 Fleury sur Orne ",{ $$typeof : $$tre, type : "br", props : { }, key : null, ref : null},"(49.156572, -0.369172)",{ $$typeof : $$tre, type : "br", props : { }, key : null, ref : null},"Dans l'agglomération caennaise"]}, key : null, ref : null},{ $$typeof : $$tre, type : "h4", props : { children : " Lydie Pomikal "}, key : null, ref : null},{ $$typeof : $$tre, type : "p", props : { children : " 06 08 05 92 38 "}, key : null, ref : null},{ $$typeof : $$tre, type : "h4", props : { children : " Henri Pomikal "}, key : null, ref : null},{ $$typeof : $$tre, type : "p", props : { children : " 06 07 16 12 24 "}, key : null, ref : null}]}, key : null, ref : null},{ $$typeof : $$tre, type : "div", props : { id : "map", 'class' : "col-7", children : { $$typeof : $$tre, type : "img", props : { src : "images/map.png"}, key : null, ref : null}}, key : null, ref : null}]}, key : null, ref : null}}, key : null, ref : null}]}, key : null, ref : null};
	}
});
var view_Gallery = function(props) {
	React.Component.call(this,props);
};
view_Gallery.__name__ = true;
view_Gallery.__super__ = React.Component;
view_Gallery.prototype = $extend(React.Component.prototype,{
	render: function() {
		return { $$typeof : $$tre, type : "div", props : { 'class' : "subpage fullsize", children : [{ $$typeof : $$tre, type : "span", props : { id : "gallery", 'class' : "anchor"}, key : null, ref : null},{ $$typeof : $$tre, type : "h1", props : { children : " Gallerie "}, key : null, ref : null},{ $$typeof : $$tre, type : "div", props : { 'class' : "background"}, key : null, ref : null}]}, key : null, ref : null};
	}
	,createChildren: function() {
		var _g = [];
		var _g1 = 0;
		var _g2 = model_Content.miscanthus.prosEnvironnement.content.items;
		while(_g1 < _g2.length) {
			var item = _g2[_g1];
			++_g1;
			_g.push({ $$typeof : $$tre, type : "li", props : { children : item}, key : null, ref : null});
		}
		return _g;
	}
});
var view_Home = function(props) {
	React.Component.call(this,props);
};
view_Home.__name__ = true;
view_Home.__super__ = React.Component;
view_Home.prototype = $extend(React.Component.prototype,{
	render: function() {
		return { $$typeof : $$tre, type : "div", props : { id : "home", children : { $$typeof : $$tre, type : "div", props : { 'class' : "content", children : [{ $$typeof : $$tre, type : "h1", props : { children : model_Content.home.header}, key : null, ref : null},{ $$typeof : $$tre, type : "p", props : { children : model_Content.home.content}, key : null, ref : null},{ $$typeof : $$tre, type : "span", props : { 'class' : "vignette", children : { $$typeof : $$tre, type : "span", props : { children : "Local"}, key : null, ref : null}}, key : null, ref : null},{ $$typeof : $$tre, type : "div", props : { 'class' : "subcontent container-fluid", children : { $$typeof : $$tre, type : "div", props : { 'class' : "row", children : [{ $$typeof : $$tre, type : "div", props : { 'class' : "col", children : { $$typeof : $$tre, type : "div", props : { 'class' : "thumbnail", children : [{ $$typeof : $$tre, type : "img", props : { src : "./images/normandy_flag.png"}, key : null, ref : null},{ $$typeof : $$tre, type : "div", props : { 'class' : "caption", children : { $$typeof : $$tre, type : "p", props : { children : "Produit Normand"}, key : null, ref : null}}, key : null, ref : null}]}, key : null, ref : null}}, key : null, ref : null},{ $$typeof : $$tre, type : "div", props : { 'class' : "col", children : { $$typeof : $$tre, type : "div", props : { 'class' : "thumbnail", children : [{ $$typeof : $$tre, type : "img", props : { src : "./images/logoeuropeenpantoneab.jpg"}, key : null, ref : null},{ $$typeof : $$tre, type : "div", props : { 'class' : "caption", children : { $$typeof : $$tre, type : "p", props : { children : ["Agriculture Biologique",{ $$typeof : $$tre, type : "br", props : { }, key : null, ref : null},"FR-BIO-13"]}, key : null, ref : null}}, key : null, ref : null}]}, key : null, ref : null}}, key : null, ref : null}]}, key : null, ref : null}}, key : null, ref : null}]}, key : null, ref : null}}, key : null, ref : null};
	}
});
var view_Litter = function(props) {
	React.Component.call(this,props);
};
view_Litter.__name__ = true;
view_Litter.__super__ = React.Component;
view_Litter.prototype = $extend(React.Component.prototype,{
	render: function() {
		return { $$typeof : $$tre, type : "div", props : { 'class' : "subpage", children : [{ $$typeof : $$tre, type : "span", props : { id : "litter", 'class' : "anchor"}, key : null, ref : null},{ $$typeof : $$tre, type : "h1", props : { children : [" ",model_Content.litter.header," "]}, key : null, ref : null},{ $$typeof : $$tre, type : "p", props : { 'class' : "centered", children : [" ",model_Content.litter.quote," "]}, key : null, ref : null},{ $$typeof : $$tre, type : "p", props : { 'class' : "centered", children : ["Voir ",{ $$typeof : $$tre, type : "a", props : { href : "#packaging", children : "conditionnement"}, key : null, ref : null}]}, key : null, ref : null},{ $$typeof : $$tre, type : "div", props : { 'class' : "background", children : [{ $$typeof : $$tre, type : "div", props : { 'class' : "content right", children : { $$typeof : $$tre, type : "div", props : { children : [{ $$typeof : $$tre, type : "h2", props : { children : [" ",model_Content.litter.eco.header," "]}, key : null, ref : null},{ $$typeof : $$tre, type : "p", props : { children : model_Content.litter.eco.content}, key : null, ref : null}]}, key : null, ref : null}}, key : null, ref : null},{ $$typeof : $$tre, type : "div", props : { 'class' : "content left", children : { $$typeof : $$tre, type : "div", props : { children : [{ $$typeof : $$tre, type : "h2", props : { children : [" ",model_Content.litter.pros.header," "]}, key : null, ref : null},{ $$typeof : $$tre, type : "p", props : { children : this.createTextChildren(model_Content.litter.pros.content)}, key : null, ref : null}]}, key : null, ref : null}}, key : null, ref : null}]}, key : null, ref : null}]}, key : null, ref : null};
	}
	,createTextChildren: function(items) {
		var _g = [];
		var _g1 = 0;
		while(_g1 < items.length) {
			var item = items[_g1];
			++_g1;
			_g.push({ $$typeof : $$tre, type : "p", props : { children : item}, key : null, ref : null});
		}
		return _g;
	}
});
var view_Mulch = function(props) {
	React.Component.call(this,props);
};
view_Mulch.__name__ = true;
view_Mulch.__super__ = React.Component;
view_Mulch.prototype = $extend(React.Component.prototype,{
	render: function() {
		return { $$typeof : $$tre, type : "div", props : { 'class' : "subpage", children : [{ $$typeof : $$tre, type : "span", props : { id : "mulch", 'class' : "anchor"}, key : null, ref : null},{ $$typeof : $$tre, type : "h1", props : { children : [" ",model_Content.mulch.header," "]}, key : null, ref : null},{ $$typeof : $$tre, type : "p", props : { 'class' : "centered", children : [" ",model_Content.mulch.quote," "]}, key : null, ref : null},{ $$typeof : $$tre, type : "div", props : { 'class' : "background", children : [{ $$typeof : $$tre, type : "div", props : { 'class' : "content right", children : { $$typeof : $$tre, type : "div", props : { children : [{ $$typeof : $$tre, type : "h2", props : { children : [" ",model_Content.mulch.eco.header," "]}, key : null, ref : null},this.createTextChildren(model_Content.mulch.eco.content)]}, key : null, ref : null}}, key : null, ref : null},{ $$typeof : $$tre, type : "div", props : { 'class' : "content left", children : { $$typeof : $$tre, type : "div", props : { children : [{ $$typeof : $$tre, type : "h2", props : { children : [" ",model_Content.mulch.aesthetic.header," "]}, key : null, ref : null},{ $$typeof : $$tre, type : "p", props : { children : this.createTextChildren(model_Content.mulch.aesthetic.content)}, key : null, ref : null},{ $$typeof : $$tre, type : "span", props : { id : "packaging", 'class' : "anchor"}, key : null, ref : null},{ $$typeof : $$tre, type : "h2", props : { children : [" ",model_Content.mulch.packaging.header," "]}, key : null, ref : null},{ $$typeof : $$tre, type : "p", props : { children : this.createTextChildren(model_Content.mulch.packaging.content)}, key : null, ref : null}]}, key : null, ref : null}}, key : null, ref : null}]}, key : null, ref : null}]}, key : null, ref : null};
	}
	,createTextChildren: function(items) {
		var _g = [];
		var _g1 = 0;
		while(_g1 < items.length) {
			var item = items[_g1];
			++_g1;
			_g.push({ $$typeof : $$tre, type : "p", props : { children : item}, key : null, ref : null});
		}
		return _g;
	}
});
var view_MyscanthusPresentation = function(props) {
	React.Component.call(this,props);
};
view_MyscanthusPresentation.__name__ = true;
view_MyscanthusPresentation.__super__ = React.Component;
view_MyscanthusPresentation.prototype = $extend(React.Component.prototype,{
	render: function() {
		return { $$typeof : $$tre, type : "div", props : { 'class' : "subpage", children : [{ $$typeof : $$tre, type : "span", props : { id : "myscanthus", 'class' : "anchor"}, key : null, ref : null},{ $$typeof : $$tre, type : "h1", props : { children : [" ",model_Content.miscanthus.header," "]}, key : null, ref : null},{ $$typeof : $$tre, type : "div", props : { 'class' : "background", children : [{ $$typeof : $$tre, type : "div", props : { 'class' : "content right", children : { $$typeof : $$tre, type : "div", props : { children : [{ $$typeof : $$tre, type : "h2", props : { children : [" ",model_Content.miscanthus.farming.header," "]}, key : null, ref : null},{ $$typeof : $$tre, type : "p", props : { children : model_Content.miscanthus.farming.content}, key : null, ref : null}]}, key : null, ref : null}}, key : null, ref : null},{ $$typeof : $$tre, type : "div", props : { 'class' : "content left", children : { $$typeof : $$tre, type : "div", props : { children : [{ $$typeof : $$tre, type : "h2", props : { children : [" ",model_Content.miscanthus.prosEnvironnement.header," "]}, key : null, ref : null},{ $$typeof : $$tre, type : "p", props : { children : [model_Content.miscanthus.prosEnvironnement.content.description,{ $$typeof : $$tre, type : "ul", props : { children : this.createChildren()}, key : null, ref : null}]}, key : null, ref : null}]}, key : null, ref : null}}, key : null, ref : null}]}, key : null, ref : null}]}, key : null, ref : null};
	}
	,createChildren: function() {
		var _g = [];
		var _g1 = 0;
		var _g2 = model_Content.miscanthus.prosEnvironnement.content.items;
		while(_g1 < _g2.length) {
			var item = _g2[_g1];
			++_g1;
			_g.push({ $$typeof : $$tre, type : "li", props : { children : item}, key : null, ref : null});
		}
		return _g;
	}
});
var view_ScreenSize = $hxEnums["view.ScreenSize"] = { __ename__ : true, __constructs__ : ["Small","Big"]
	,Small: {_hx_index:0,__enum__:"view.ScreenSize",toString:$estr}
	,Big: {_hx_index:1,__enum__:"view.ScreenSize",toString:$estr}
};
var view_NavBar = function(props) {
	this.visible = false;
	React.Component.call(this,props);
};
view_NavBar.__name__ = true;
view_NavBar.__super__ = React.Component;
view_NavBar.prototype = $extend(React.Component.prototype,{
	render: function() {
		return { $$typeof : $$tre, type : "div", props : { 'class' : "navbar sticky-top", children : [this.getNavbar(view_ScreenSize.Big),this.getNavbar(view_ScreenSize.Small),{ $$typeof : $$tre, type : "a", props : { href : "#", 'class' : "logo"}, key : null, ref : null},{ $$typeof : $$tre, type : "i", props : { onClick : $bind(this,this.toggleMenu), 'class' : "material-icons menu-icon", children : "menu"}, key : null, ref : null}]}, key : null, ref : null};
	}
	,toggleMenu: function() {
		this.visible = !this.visible;
		if(this.visible) {
			$(".nav-items.small-screen").addClass("small-screen-visible");
			$(".navbar").addClass("navbar-extended");
		} else {
			$(".nav-items.small-screen").removeClass("small-screen-visible");
			$(".navbar").removeClass("navbar-extended");
		}
	}
	,getNavbar: function(screenSize) {
		switch(screenSize._hx_index) {
		case 0:
			return { $$typeof : $$tre, type : "div", props : { 'class' : "nav-items small-screen", children : { $$typeof : $$tre, type : "ul", props : { 'class' : "nav flex-column", children : [{ $$typeof : $$tre, type : "li", props : { 'class' : "nav-item", children : { $$typeof : $$tre, type : "a", props : { href : "#home", 'class' : "nav-link active", children : "Accueil"}, key : null, ref : null}}, key : null, ref : null},{ $$typeof : $$tre, type : "li", props : { 'class' : "nav-item", children : { $$typeof : $$tre, type : "a", props : { href : "#myscanthus", 'class' : "nav-link", children : "Miscanthus"}, key : null, ref : null}}, key : null, ref : null},{ $$typeof : $$tre, type : "li", props : { 'class' : "nav-item", children : { $$typeof : $$tre, type : "a", props : { href : "#mulch", 'class' : "nav-link", children : "Paillage Environnemental"}, key : null, ref : null}}, key : null, ref : null},{ $$typeof : $$tre, type : "li", props : { 'class' : "nav-item", children : { $$typeof : $$tre, type : "a", props : { href : "#litter", 'class' : "nav-link", children : "Litière Animale"}, key : null, ref : null}}, key : null, ref : null},{ $$typeof : $$tre, type : "li", props : { 'class' : "nav-item", children : { $$typeof : $$tre, type : "a", props : { href : "#gallery", 'class' : "nav-link", children : "Galerie"}, key : null, ref : null}}, key : null, ref : null},{ $$typeof : $$tre, type : "li", props : { 'class' : "nav-item", children : { $$typeof : $$tre, type : "a", props : { href : "#contact", 'class' : "nav-link", children : "Contact"}, key : null, ref : null}}, key : null, ref : null}]}, key : null, ref : null}}, key : null, ref : null};
		case 1:
			return { $$typeof : $$tre, type : "div", props : { 'class' : "nav-items big-screen", children : [{ $$typeof : $$tre, type : "ul", props : { id : "left-navbar", 'class' : "nav", children : [{ $$typeof : $$tre, type : "li", props : { 'class' : "nav-item", children : { $$typeof : $$tre, type : "a", props : { href : "#home", 'class' : "nav-link active", children : "Accueil"}, key : null, ref : null}}, key : null, ref : null},{ $$typeof : $$tre, type : "li", props : { 'class' : "nav-item", children : { $$typeof : $$tre, type : "a", props : { href : "#myscanthus", 'class' : "nav-link", children : "Miscanthus"}, key : null, ref : null}}, key : null, ref : null},{ $$typeof : $$tre, type : "li", props : { 'class' : "nav-item", children : { $$typeof : $$tre, type : "a", props : { href : "#mulch", 'class' : "nav-link", children : "Paillage Environnemental"}, key : null, ref : null}}, key : null, ref : null}]}, key : null, ref : null},{ $$typeof : $$tre, type : "ul", props : { id : "right-navbar", 'class' : "nav", children : [{ $$typeof : $$tre, type : "li", props : { 'class' : "nav-item", children : { $$typeof : $$tre, type : "a", props : { href : "#litter", 'class' : "nav-link", children : "Litière Animale"}, key : null, ref : null}}, key : null, ref : null},{ $$typeof : $$tre, type : "li", props : { 'class' : "nav-item", children : { $$typeof : $$tre, type : "a", props : { href : "#gallery", 'class' : "nav-link", children : "Galerie"}, key : null, ref : null}}, key : null, ref : null},{ $$typeof : $$tre, type : "li", props : { 'class' : "nav-item", children : { $$typeof : $$tre, type : "a", props : { href : "#contact", 'class' : "nav-link", children : "Contact"}, key : null, ref : null}}, key : null, ref : null}]}, key : null, ref : null}]}, key : null, ref : null};
		}
	}
});
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
String.__name__ = true;
Array.__name__ = true;
Object.defineProperty(js__$Boot_HaxeError.prototype,"message",{ get : function() {
	return String(this.val);
}});
js_Boot.__toStr = ({ }).toString;
var $$tre = (typeof Symbol === "function" && Symbol.for && Symbol.for("react.element")) || 0xeac7;
model_Content.home = { header : "Miscanthus Normandie", content : "Martin et Henri, agriculteurs dans le calvados près de Caen : nous avons pour objectif de favoriser les cultures plus respectueuses de l'environnement. C'est pourquoi, nous cultivons le miscanthus depuis plusieurs années sur des terres classées en zone sensible. Cette culture est un produit issu de l'agriculture biologique(AB). Nous vous la proposons en direct de la ferme pour vos paillages et litières."};
model_Content.miscanthus = { header : "Miscanthus", farming : { header : "Quelle est cette culture?", content : "Le miscanthus géant, aussi appelé herbe à éléphant, est une graminée vivace à rhizome. Le miscanthus se plante au mois de mars-avril pour une durée de vie d'environ 15 ans. La première récolte se fait au bout de 2 ans. Les rendements en miscanthus se situent entre 10 et 20T/ha. Celui-ci peut atteindre 4m de haut."}, prosEnvironnement : { header : "Quels avantages pour l'environnement?", content : { description : "Le miscanthus pousse en zones humides, dans les marais proches de Caen,  milieu sensible qu'il faut protéger. Il respecte ainsi l'environnement :", items : ["C'est une culture écologique, qui se développe sans produit chimique (pas de produit phytosanitaire, pas de pesticide, etc.)","Il développe aussi la biodiversité.","Et surtout, il stocke 36 tonnes de CO2 à l'hectare.","De plus, l'hiver, les animaux tels que les chevreuils et sangliers s'y réfugient."]}}};
model_Content.mulch = { header : "Paillage Environnemental", quote : "\"Avec le miscanthus, je gagne du temps au quotidien en arrossage et en désherbage.\"", eco : { header : "Un paillage écologique", content : ["100% naturel de production locale : aucun engrais, ni pesticide pendant la culture.","Stocke le carbone.","Limite l’enherbement et supprime l’utilisation des produits phytosanitaires sur les parterres, massifs végétaux...","Diminue l’évapotranspiration.","Conserve l’humidité et permet de réduire l’arrosage.","Développe la biodiversité tout en améliorant la structure du sol (décomposition 2 ans.)","Respecte les critères relatifs à la loi n° 1708 du 15 janvier 2014 (article L. 253-7 du code rural et de la pêche maritime) concernant les collectivités locales et les communes."]}, aesthetic : { header : "Un paillage esthétique présentant de nombreux avantages", content : ["Ce paillage clair met en valeur vos massifs, vos plantations, votre potager et vos espaces de pelouse.","Il protège contre le gel et les grandes chaleurs. ","Stable au vent et aux eaux de ruisselement.","Les limaces ne l'appréciet pas.","PH neutre."]}, packaging : { header : "Conditionnement", content : ["Vrac : minimum 5 tonnes ou 40m3.","Sac : 20 kg.","Balle : 300 kg.","Diffèrents tarifs en fonction des quantités.","// Livraison possible //"]}};
model_Content.litter = { header : "Litière animale", quote : "\"Grâce à la litière de miscanthus, mes chevaux n'ont plus de problème d'allergie à la poussière.\"", eco : { header : "Une litière économique, écologique et 100% naturelle", content : "Idéal pour les volailles, chevaux, bovins, animaux de compagnie, etc. la tige de miscanthus est une véritable éponge qui lui procure un très grand pouvoir absorbant. 100% naturelle, la litière de miscanthus est confortable, bénéfique pour le bien-être des animaux. Elle est plus durable dans le temps, sa surface reste sêche plus longtemps car elle est aérée (ne se colmate pas)."}, pros : { header : "Ses qualités", content : ["Litière dépoussiérée avec odeur de bois.","Convient parfaitement aux animaux rencontrant des difficultés respiratoires.","Pouvoir absorbant très important : 3 à 4 fois son poids.","Bel aspect clair même après plusieurs semaines.","Aucune appétence même pour les animaux \"gourmands\".","Économie de matière : 75% de volume de fumier en moins.","100% biodégradable et compostable (amendement organique)"]}};
view_App.subpagesId = ["home","myscanthus","mulch","litter","gallery","contact"];
view_App.displayName = "App";
view_Contact.displayName = "Contact";
view_Gallery.displayName = "Gallery";
view_Home.displayName = "Home";
view_Litter.displayName = "Litter";
view_Mulch.displayName = "Mulch";
view_MyscanthusPresentation.displayName = "MyscanthusPresentation";
view_NavBar.displayName = "NavBar";
Main.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
