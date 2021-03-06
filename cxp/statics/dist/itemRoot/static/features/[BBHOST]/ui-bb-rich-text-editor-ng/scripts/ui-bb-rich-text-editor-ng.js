(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("vendor-bb-pell"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-rich-text-editor-ng", ["vendor-bb-angular", "vendor-bb-pell"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-rich-text-editor-ng"] = factory(require("vendor-bb-angular"), require("vendor-bb-pell"));
	else
		root["ui-bb-rich-text-editor-ng"] = factory(root["vendor-bb-angular"], root["vendor-bb-pell"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_46__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(45);

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(28);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _vendorBbPell = __webpack_require__(46);
	
	var _vendorBbPell2 = _interopRequireDefault(_vendorBbPell);
	
	var _component = __webpack_require__(47);
	
	var _component2 = _interopRequireDefault(_component);
	
	__webpack_require__(49);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ui-bb-rich-text-editor-ng
	 * @description
	 * UI component for enriched text editor
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbRichTextEditorKey from 'ui-bb-rich-text-editor-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbRichTextEditorKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-rich-text-editor-ng
	 *   class="form-control"
	 *   data-ng-model="$ctrl.text">
	 * </ui-bb-rich-text-editor-ng>
	 */
	
	exports.default = _vendorBbAngular2.default.module('ui-bb-rich-text-editor-ng', []).constant('pell', _vendorBbPell2.default).component('uiBbRichTextEditorNg', _component2.default).name;

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_46__;

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(48);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var component = {
	  require: 'ngModel',
	  bindings: {
	    text: '=ngModel',
	    placeholder: '@'
	  },
	  controller: _controller2.default
	};
	
	exports.default = component;

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* global angular */
	// eslint-disable-next-line func-names
	var controller = ['$scope', '$element', 'pell', function ($scope, $element, pell) {
	  var $ctrl = this;
	
	  /**
	   * @description This is a controller of text editor.
	   * @type {object}
	   * @name ngModelCtrl
	   * @inner
	   */
	  var ngModelCtrl = $element.controller('ngModel');
	
	  /**
	   * @description This is an array for configuration of text editor's buttons.
	   * @type {array}
	   * @name editorActions
	   * @inner
	   */
	  var editorActions = ['bold', 'italic', 'underline', 'strikethrough', {
	    icon: '<i class="fas fa-list-ul"></i>',
	    title: 'Unordered List',
	    result: function result() {
	      return pell.exec('insertUnorderedList');
	    }
	  }, {
	    icon: '<i class="fas fa-list-ol"></i>',
	    title: 'Ordered List',
	    result: function result() {
	      return pell.exec('insertOrderedList');
	    }
	  }, 'paragraph', 'quote', 'code', 'link'];
	
	  /**
	   * @description
	   * This function adds placeholder to content div of editor
	   * @type {function}
	   * @name addPlacholder
	   * @inner
	   */
	  var addPlaceholder = function addPlaceholder() {
	    var placeholder = $ctrl.placeholder;
	
	    // don't add placeholder, if it has not been passed
	    if (!placeholder) return;
	
	    var editor = $element[0].getElementsByClassName('pell-content')[0];
	    editor.setAttribute('contenteditable', true);
	    editor.setAttribute('data-placeholder', placeholder);
	  };
	
	  /**
	   * @description
	   * This function fixes some issues with the actionbar buttons:
	   * * Actionbar buttons don't trigger form submit
	   *   - https://github.com/jaredreich/pell/issues/68
	   * * Actionbar buttons on click move focus back to the editor
	   *   - https://github.com/jaredreich/pell/pull/30
	   * @type {function}
	   * @name fixPellButtons
	   * @inner
	   */
	  var fixPellButtons = function fixPellButtons() {
	    var pellButtons = $element[0].getElementsByClassName('pell-button');
	    var editor = $element[0].getElementsByClassName('pell-content')[0];
	    var focusEditorFn = function focusEditorFn() {
	      return editor.focus();
	    };
	    for (var i = 0; i < pellButtons.length; i++) {
	      var btn = angular.element(pellButtons[i]);
	      btn.attr('type', 'button');
	      btn.on('click', focusEditorFn);
	    }
	  };
	
	  /**
	   * @description This function fixes the ngModel binding to be working
	   * @type {function}
	   * @name fixNgModelChange
	   * @inner
	   */
	  var fixNgModelChange = function fixNgModelChange() {
	    var editor = $element[0].getElementsByClassName('pell-content')[0];
	    $scope.$watch('$ctrl.text', function () {
	      var newHtml = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	
	      if (newHtml !== editor.innerHTML) {
	        editor.innerHTML = newHtml;
	      }
	    });
	  };
	
	  $ctrl.$onInit = function () {
	    pell.init({
	      element: $element[0],
	      onChange: function onChange(html) {
	        ngModelCtrl.$setViewValue(html);
	      },
	      styleWithCss: false,
	      actions: editorActions,
	      classes: {
	        actionbar: 'pell-actionbar d-none d-md-block',
	        button: 'pell-button',
	        content: 'pell-content html-content-formatter',
	        selected: 'pell-button-selected'
	      }
	    });
	    fixPellButtons();
	    fixNgModelChange();
	    addPlaceholder();
	  };
	}];
	
	exports.default = controller;

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(50);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(52)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!./pell.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!./pell.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(51)();
	// imports
	
	
	// module
	exports.push([module.id, ".pell{border-radius:5px;box-shadow:0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1)}.pell,.pell-content{box-sizing:border-box;width:100%}.pell-content{height:300px;outline:0;overflow-y:auto;padding:10px}.pell-actionbar{background-color:#fff;border-bottom:1px solid hsla(0,0%,4%,.1);border-top-left-radius:5px;border-top-right-radius:5px;width:100%}.pell-button{background-color:transparent;border:none;cursor:pointer;height:30px;outline:0;width:30px}\n/* Start changes */\n.pell-content b{font-weight:700}.pell-content{height:250px;margin-top:5px;}.pell-content[contentEditable=true]:empty:not(:focus):before{content:attr(data-placeholder);color:#6c757d;}\n/* End changes */\n", ""]);
	
	// exports


/***/ }),

/***/ 51:
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-rich-text-editor-ng.js.map