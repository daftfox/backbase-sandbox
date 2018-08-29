(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-confirm-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("vendor-bb-angular-ng-aria"), require("ui-bb-load-more-ng"), require("ui-bb-inline-status-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-sortable-column-ng"), require("ui-bb-ellipsis-tooltip-ng"), require("ui-bb-paginator-ng"), require("vendor-bb-uib-dropdown"), require("ui-bus-payment-order-details-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bus-standing-order-list-ng", ["ui-bb-confirm-ng", "ui-bb-substitute-error-ng", "ui-bb-loading-indicator-ng", "ui-bb-i18n-ng", "vendor-bb-angular-ng-aria", "ui-bb-load-more-ng", "ui-bb-inline-status-ng", "ui-bb-notification-stripe-ng", "ui-bb-sortable-column-ng", "ui-bb-ellipsis-tooltip-ng", "ui-bb-paginator-ng", "vendor-bb-uib-dropdown", "ui-bus-payment-order-details-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bus-standing-order-list-ng"] = factory(require("ui-bb-confirm-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("vendor-bb-angular-ng-aria"), require("ui-bb-load-more-ng"), require("ui-bb-inline-status-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-sortable-column-ng"), require("ui-bb-ellipsis-tooltip-ng"), require("ui-bb-paginator-ng"), require("vendor-bb-uib-dropdown"), require("ui-bus-payment-order-details-ng"));
	else
		root["ext-bus-standing-order-list-ng"] = factory(root["ui-bb-confirm-ng"], root["ui-bb-substitute-error-ng"], root["ui-bb-loading-indicator-ng"], root["ui-bb-i18n-ng"], root["vendor-bb-angular-ng-aria"], root["ui-bb-load-more-ng"], root["ui-bb-inline-status-ng"], root["ui-bb-notification-stripe-ng"], root["ui-bb-sortable-column-ng"], root["ui-bb-ellipsis-tooltip-ng"], root["ui-bb-paginator-ng"], root["vendor-bb-uib-dropdown"], root["ui-bus-payment-order-details-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_33__, __WEBPACK_EXTERNAL_MODULE_34__, __WEBPACK_EXTERNAL_MODULE_42__, __WEBPACK_EXTERNAL_MODULE_43__) {
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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(53);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
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
/* 26 */
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


/***/ }),
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_33__;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_34__;

/***/ }),
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_42__;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_43__;

/***/ }),
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.hooks = exports.helpers = exports.dependencyKeys = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(18);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbI18nNg = __webpack_require__(15);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbInlineStatusNg = __webpack_require__(30);
	
	var _uiBbInlineStatusNg2 = _interopRequireDefault(_uiBbInlineStatusNg);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(14);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(6);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbSortableColumnNg = __webpack_require__(32);
	
	var _uiBbSortableColumnNg2 = _interopRequireDefault(_uiBbSortableColumnNg);
	
	var _uiBbNotificationStripeNg = __webpack_require__(31);
	
	var _uiBbNotificationStripeNg2 = _interopRequireDefault(_uiBbNotificationStripeNg);
	
	var _uiBbLoadMoreNg = __webpack_require__(29);
	
	var _uiBbLoadMoreNg2 = _interopRequireDefault(_uiBbLoadMoreNg);
	
	var _uiBusPaymentOrderDetailsNg = __webpack_require__(43);
	
	var _uiBusPaymentOrderDetailsNg2 = _interopRequireDefault(_uiBusPaymentOrderDetailsNg);
	
	var _uiBbEllipsisTooltipNg = __webpack_require__(33);
	
	var _uiBbEllipsisTooltipNg2 = _interopRequireDefault(_uiBbEllipsisTooltipNg);
	
	var _uiBbConfirmNg = __webpack_require__(4);
	
	var _uiBbConfirmNg2 = _interopRequireDefault(_uiBbConfirmNg);
	
	var _vendorBbUibDropdown = __webpack_require__(42);
	
	var _vendorBbUibDropdown2 = _interopRequireDefault(_vendorBbUibDropdown);
	
	var _uiBbPaginatorNg = __webpack_require__(34);
	
	var _uiBbPaginatorNg2 = _interopRequireDefault(_uiBbPaginatorNg);
	
	var _hooks = __webpack_require__(54);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	var _helpers = __webpack_require__(55);
	
	var extHelpers = _interopRequireWildcard(_helpers);
	
	var _events = __webpack_require__(56);
	
	var _events2 = _interopRequireDefault(_events);
	
	__webpack_require__(57);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbI18nNg2.default, _uiBbInlineStatusNg2.default, _uiBbLoadingIndicatorNg2.default, _uiBbSubstituteErrorNg2.default, _uiBbSortableColumnNg2.default, _uiBbNotificationStripeNg2.default, _uiBbLoadMoreNg2.default, _uiBusPaymentOrderDetailsNg2.default, _uiBbEllipsisTooltipNg2.default, _uiBbConfirmNg2.default, _vendorBbUibDropdown2.default, _uiBbPaginatorNg2.default]; /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @module ext-bus-standing-order-list-ng
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @description
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Standing order overview extension.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @example
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * <!-- payment order widget model.xml -->
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * <property name="extension" viewHint="text-input,admin">
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *  <value type="string">ext-bus-standing-order-list-ng</value>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * </property>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */
	var helpers = exports.helpers = extHelpers;
	
	var hooks = exports.hooks = extHooks;
	
	var events = exports.events = _events2.default;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name defaultSortableColumn
	 *
	 * @description
	 * Return the key of the default sort column
	 *
	 * @type {function}
	 * @returns {string|null} Returns column key
	 */
	var defaultSortableColumn = exports.defaultSortableColumn = function defaultSortableColumn() {
	  return 'nextExecutionDate';
	};
	
	/**
	 * @name defaultSortableDirection
	 *
	 * @description
	 * defaultSortableDirection default hook
	 *
	 * @type {function}
	 * @returns {?string}
	 */
	var defaultSortableDirection = exports.defaultSortableDirection = function defaultSortableDirection() {
	  return 'DESC';
	};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var headers = exports.headers = [{
	  label: 'header.status',
	  sortable: {
	    key: 'status',
	    direction: 'ASC'
	  }
	}, {
	  label: 'header.debtor',
	  class: 'col-sm-3',
	  sortable: {
	    key: 'debitAccountIdentification',
	    direction: 'ASC'
	  }
	}, {
	  label: 'header.creditor',
	  class: 'col-sm-3',
	  sortable: {
	    key: 'creditAccountIdentification',
	    direction: 'ASC'
	  }
	}, {
	  label: 'header.currency',
	  sortable: {
	    key: 'currency',
	    direction: 'ASC'
	  }
	}, {
	  label: 'header.amount',
	  class: 'text-right col-sm-2',
	  sortable: {
	    key: 'amount',
	    direction: 'DESC'
	  }
	}, {
	  label: 'header.frequency',
	  sortable: {
	    key: 'frequency',
	    direction: 'ASC'
	  }
	}, {
	  label: 'header.nextExecutionDate',
	  class: 'text-right',
	  sortable: {
	    key: 'nextExecutionDate',
	    direction: 'DESC'
	  }
	}];
	
	var isSortableActive = exports.isSortableActive = function isSortableActive(sortable, $ctrl) {
	  return sortable && sortable.key === $ctrl.state.standingOrders.orderBy;
	};
	
	var statusTranslationKeys = {
	  large: {
	    UNAUTHORIZED: 'unauthorized',
	    PARTIALLY_AUTHORIZED: 'partially_authorized',
	    AUTHORIZED: 'authorized',
	    REJECTED_BY_USER: 'rejected.user',
	    DELETED: 'deleted'
	  },
	  small: {
	    UNAUTHORIZED: 'U',
	    PARTIALLY_AUTHORIZED: 'PA',
	    AUTHORIZED: 'A',
	    REJECTED_BY_USER: 'R',
	    DELETED: 'D'
	  }
	};
	
	/**
	 * @name getStatusLabel
	 * @type {function}
	 *
	 * @description
	 * Helper to get status label
	 *
	 * @param {string} status Direct debit status
	 * @param {string} type of status label (small, large)
	 *
	 * @returns {string} Translation key for status label
	 */
	var getStatusLabel = exports.getStatusLabel = function getStatusLabel(status) {
	  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'large';
	  return 'payment.status.' + statusTranslationKeys[type][status];
	};
	
	var frequencyTranslationKeys = {
	  ONCE: 'once',
	  DAILY: 'daily',
	  WEEKLY: 'weekly',
	  MONTHLY: 'monthly',
	  YEARLY: 'yearly'
	};
	var getFrequencyLabel = exports.getFrequencyLabel = function getFrequencyLabel(status) {
	  return 'payment.frequency.' + frequencyTranslationKeys[status];
	};
	
	/**
	 * @name canAuthorize
	 * @type {function}
	 *
	 * @description
	 * Helper to check if the payment status envisages
	 * authorization
	 *
	 * @param {object} payment
	 */
	var canAuthorize = exports.canAuthorize = function canAuthorize(payment) {
	  return payment.status === 'UNAUTHORIZED' || payment.status === 'PARTIALLY_AUTHORIZED';
	};
	
	/**
	 * @name canDelete
	 * @type {function}
	 *
	 * @description
	 * Helper to check if the payment status envisages
	 * deletion
	 *
	 * @param {object} payment
	 */
	var canDelete = exports.canDelete = function canDelete(payment) {
	  return payment.status === 'UNAUTHORIZED';
	};
	
	/**
	 * @name filterPayments
	 * @type {function}
	 *
	 * @description
	 * Helper to filter out authorized payments
	 *
	 * @param {array} payments
	 */
	var filterPayments = exports.filterPayments = function filterPayments(payments) {
	  return payments.filter(canAuthorize);
	};
	
	/**
	 * @name filterPaymentsDelete
	 * @type {function}
	 * @inner
	 *
	 * @description
	 * Helper to filter out payments that can be deleted
	 *
	 * @param {array} payments
	 */
	var filterPaymentsDelete = function filterPaymentsDelete(payments) {
	  return payments.filter(canDelete);
	};
	
	/**
	 * @name filterPaymentsDeleteByIds
	 * @type {function}
	 *
	 * @description
	 * Helper to filter out payments that can be deleted
	 *
	 * @param {array} payments
	 */
	var filterPaymentsDeleteByIds = exports.filterPaymentsDeleteByIds = function filterPaymentsDeleteByIds(selectedIds, payments) {
	  return filterPaymentsDelete(payments).map(function (payment) {
	    return payment.id;
	  }).filter(function (id) {
	    return selectedIds.indexOf(id) !== -1;
	  });
	};
	
	/**
	 * @name isSelected
	 *
	 * @description
	 * Helper to know if the payment is selected.
	 *
	 * @param {string} id
	 * @param {object} selState
	 * @type {function}
	 * @returns {boolean}
	 */
	var isSelected = exports.isSelected = function isSelected(id, selState) {
	  return selState.selectedPayments.some(function (item) {
	    return item === id;
	  });
	};
	
	/**
	 * @name isAnySelected
	 *
	 * @description
	 * Helper to know if any payment is selected.
	 *
	 * @param {object} selState
	 * @type {function}
	 * @returns {boolean}
	 */
	var isAnySelected = exports.isAnySelected = function isAnySelected(selState) {
	  return selState.selectedPayments.length > 0;
	};
	
	/**
	 * @name isAnySelectedDelete
	 *
	 * @description
	 * Helper to know if selected payments could be deleted.
	 *
	 * @param {object} selState
	 * @type {function}
	 * @returns {boolean}
	 */
	var isAnySelectedDelete = exports.isAnySelectedDelete = function isAnySelectedDelete(selState, payments) {
	  return filterPaymentsDeleteByIds(selState.selectedPayments, payments).length > 0;
	};
	
	/**
	 * @name howManySelected
	 *
	 * @description
	 * Helper to know how many payments are selected.
	 *
	 * @param {object} selState
	 * @type {function}
	 * @returns {boolean}
	 */
	var howManySelected = exports.howManySelected = function howManySelected(selState) {
	  return selState.selectedPayments.length;
	};
	
	/**
	 * @name howManySelectedDelete
	 *
	 * @description
	 * Helper to know how many payments are selected
	 * which could be deleted.
	 *
	 * @param {object} selState
	 * @type {function}
	 * @returns {boolean}
	 */
	var howManySelectedDelete = exports.howManySelectedDelete = function howManySelectedDelete(selState, payments) {
	  return filterPaymentsDeleteByIds(selState.selectedPayments, payments).length;
	};
	
	/**
	 * @name isSelectedAllStrict
	 * @inner
	 *
	 * @description
	 * Strictly compare selected items ids and model list
	 *
	 * @param {array} payments
	 * @param {object} selState
	 * @type {function}
	 * @returns {boolean}
	 */
	var isSelectedAllStrict = function isSelectedAllStrict(payments, selState) {
	  var selected = selState.selectedPayments;
	
	  if (payments.length !== selected.length) {
	    return false;
	  }
	
	  var matches = payments.filter(function (item) {
	    return selected.indexOf(item.id) !== -1;
	  });
	  return matches.length === payments.length;
	};
	
	/**
	 * @name isSelectedAll
	 *
	 * @description
	 * Helper to know if ALL payments are selected.
	 *
	 * @param {array} payments
	 * @param {object} selState
	 * @type {function}
	 * @returns {boolean}
	 */
	var isSelectedAll = exports.isSelectedAll = function isSelectedAll(payments, selState) {
	  return payments && payments.length > 0 && isSelectedAllStrict(payments, selState);
	};
	
	/**
	 * @name isSelectedPart
	 *
	 * @description
	 * Helper to know if at least one payment is selected.
	 *
	 * @param {array} payments
	 * @param {object} selState
	 * @type {function}
	 * @returns {boolean}
	 */
	var isSelectedPart = exports.isSelectedPart = function isSelectedPart(payments, selState) {
	  return isAnySelected(selState) && !isSelectedAll(payments, selState);
	};
	
	/**
	 * @name toggleAllPayments
	 *
	 * @description
	 * Helper to select/deselect all payments loaded.
	 *
	 * @param {array} payments
	 * @param {object} selState
	 * @type {function}
	 * @returns {null}
	 */
	var toggleAllPayments = exports.toggleAllPayments = function toggleAllPayments(payments, selState) {
	  var state = selState;
	  if (isSelectedAll(payments, selState)) {
	    state.selectedPayments = [];
	  } else {
	    state.selectedPayments = payments.map(function (item) {
	      return item.id;
	    });
	  }
	};
	
	/**
	 * @name deselectPayments
	 *
	 * @description
	 * Helper to deselect all payments selected.
	 *
	 * @param {object} selState
	 * @type {function}
	 * @returns {null}
	 */
	var deselectPayments = exports.deselectPayments = function deselectPayments(selState) {
	  var state = selState;
	  state.selectedPayments = [];
	};
	
	/**
	 * @name toggleSelection
	 *
	 * @description
	 * Helper to select/deselect single payment.
	 *
	 * @param {string} id
	 * @param {object} selState
	 * @type {function}
	 * @returns {null}
	 */
	var toggleSelection = exports.toggleSelection = function toggleSelection(id, selState) {
	  var state = selState;
	
	  if (isSelected(id, state)) {
	    state.selectedPayments = state.selectedPayments.filter(function (item) {
	      return item !== id;
	    });
	  } else {
	    state.selectedPayments.push(id);
	  }
	};
	
	/**
	 * @name toggleDetails
	 * @type {function}
	 *
	 * @description
	 * Show/hide (toggle) payment details row
	 *
	 * @param {string|null} toggler
	 * @param {string} id row identification
	 * @param {object} event click object
	 */
	var toggleDetails = exports.toggleDetails = function toggleDetails(toggler, id, event) {
	  var list = ['INPUT', 'BUTTON', 'A'];
	
	  var target = event.target.nodeName.toUpperCase();
	  var parent = event.target.parentElement ? event.target.parentElement.nodeName.toUpperCase() : null;
	
	  if (list.indexOf(target) > -1 || list.indexOf(parent) > -1) {
	    // If any action triggered on click, do not toggle details
	    return toggler;
	  }
	
	  return toggler ? null : id;
	};
	
	/**
	 * @name removeNotification
	 *
	 * @description
	 * Helper to remove notification from the list
	 *
	 * @param {object} payment
	 * @param {array} list
	 * @type {function}
	 * @returns {null}
	 */
	var removeNotification = exports.removeNotification = function removeNotification(notification, notificationsList) {
	  return notificationsList.filter(function (item) {
	    return item !== notification;
	  });
	};
	
	/**
	 * @name disabledDelete
	 *
	 * @description
	 * Helper to know if delete action is disabled
	 *
	 * @param {object} payment
	 * @type {function}
	 * @returns {boolean}
	 */
	var disabledDelete = exports.disabledDelete = function disabledDelete(payment) {
	  return payment.status !== 'UNAUTHORIZED';
	};
	
	/**
	 * @name detailsTemplate
	 * @type {string}
	 *
	 * @description
	 * Custom template to be used to show order details
	 */
	var detailsTemplate = exports.detailsTemplate = '\n  <tr ng-if="toggler === item.id" class="bb-table-details">\n    <td colspan="12">\n      <div class="row">\n        <div class="col-xs-12 col-md-4">\n          <strong i18n-key="details.to"></strong>\n          <div data-role="details-counter-party-name">\n                  {{ item.creditAccountIdentification.counterpartyName }}</div>\n          <div data-role="details-identification">\n                  {{ item.creditAccountIdentification.identification }}</div>\n          <div data-role="details-counter-party-bic">\n                  {{ item.creditAccountIdentification.counterpartyBIC }}</div>\n          <div data-role="details-counter-party-bank-name">\n                  {{ item.creditAccountIdentification.counterpartyBankName }}</div>\n          <div data-role="details-counter-party-country">\n                  {{ item.creditAccountIdentification.counterpartyCountry }}</div>\n        </div>\n        <div class="col-xs-12 col-md-8">\n          <div class="row">\n            <div class="col-xs-12 col-md-3">\n              <strong i18n-key="details.type"></strong>\n              <div ng-bind="\'SEPA CT\'"></div>\n            </div>\n            <div ng-if="item.createdBy" class="col-xs-12 col-md-3">\n              <div>\n                 <strong>{{ \'details.created.by\' | i18n }}</strong>\n                 <div data-role="details-created-by">\n                   {{ item.createdBy }} <span ng-if="item.createdAt">\n                   {{ \'details.on\' | i18n }} {{ item.createdAt | date:dateFormat }}\n                   {{ \'details.at\' | i18n }} {{ item.createdAt | date:\'hh:mm\' }}</span></div>\n                 </div>\n              </div>\n            <div class="col-xs-12"\n              ng-class="{\'col-md-6\': item.createdBy, \'col-md-12\': !item.createdBy}">\n              <div class="row">\n                <div class="col-xs-12 col-md-4">\n                  <strong i18n-key="details.frequency"></strong>\n                  <div\n                    i18n-key="{{ helpers.getFrequencyLabel(item.schedule.transferFrequency) }}"\n                    data-role="details-frequency"></div>\n                </div>\n                <div class="col-xs-12 col-md-4">\n                  <strong>{{ \'details.start.date\' | i18n }}</strong>\n                  <div data-role="details-start-date">\n                    {{ item.schedule.startDate | date: \'shortDate\' }}</div>\n                </div>\n                <div class="col-xs-12 col-md-4">\n                  <strong>{{ \'details.end.date\' | i18n }}</strong>\n                  <div ng-if="item.schedule.endDate" data-role="details-end-date">\n                    {{ item.schedule.endDate | date: \'shortDate\'}}</div>\n                  <div ng-if="!item.schedule.endDate"\n                       data-role="details-end-date-not-specified" class="text-muted">\n                    {{ \'details.not.specified\' | i18n}}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <br>\n          <div class="row">\n            <div\n              ng-if="item.paymentReference"\n              class="col-xs-12"\n              ng-class="{\'col-md-3\': item.description, \'col-md-12\': !item.description}"\n            >\n              <strong>{{ \'details.transaction.id\' | i18n }}</strong>\n              <div data-role="details-payment-reference">{{ item.paymentReference}}</div>\n            </div>\n            <div\n              ng-if="item.description"\n              class="col-xs-12"\n              ng-class="{\'col-md-9\': item.paymentReference, \'col-md-12\': !item.paymentReference}"\n            >\n              <strong>{{ \'details.description\' | i18n }}</strong>\n              <div data-role="details-description">{{ item.description }}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </td>\n  </tr>\n';
	
	/**
	 * @public
	 * @name isPaginationTypeMatch
	 *
	 * @description
	 * Checks if actual pagination type matches the one, defined in properties
	 *
	 * @type {function}
	 * @param {function} $ctrl      Current controller
	 * @param {string} type         Description of pagination type (pagination, load-more)
	 *
	 * @returns {boolean}
	 */
	var isPaginationTypeMatch = exports.isPaginationTypeMatch = function isPaginationTypeMatch($ctrl, type) {
	  return $ctrl.state.pageParams.paginationType === type;
	};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var Event = {
	  STANDING_ORDER_AUTH_SUCCESS: 'bb.event.standing.order.auth.success',
	  STANDING_ORDER_AUTH_FAIL: 'bb.event.standing.order.auth.fail',
	  STANDING_ORDER_AUTH_MULTIPLE_SUCCESS: 'bb.event.standing.order.multiple.auth.success',
	  STANDING_ORDER_AUTH_MULTIPLE_FAIL: 'bb.event.standing.order.multiple.auth.fail',
	  STANDING_ORDER_REJECT_SUCCESS: 'bb.event.standing.order.reject.success',
	  STANDING_ORDER_REJECT_FAIL: 'bb.event.standing.order.reject.fail',
	  STANDING_ORDER_REJECT_MULTIPLE_SUCCESS: 'bb.event.standing.order.multiple.reject.success',
	  STANDING_ORDER_REJECT_MULTIPLE_FAIL: 'bb.event.standing.order.multiple.reject.fail',
	  STANDING_ORDER_DELETE_SUCCESS: 'bb.event.standing.order.delete.success',
	  STANDING_ORDER_DELETE_FAIL: 'bb.event.standing.order.delete.fail',
	  STANDING_ORDER_DELETE_MULTIPLE_SUCCESS: 'bb.event.standing.order.multiple.delete.success',
	  STANDING_ORDER_DELETE_MULTIPLE_FAIL: 'bb.event.standing.order.multiple.delete.fail'
	};
	
	exports.default = function (_ref) {
	  var _ref2;
	
	  var notifications = _ref.notifications,
	      $filter = _ref.$filter;
	
	  var i18n = $filter('i18n');
	  return _ref2 = {}, _defineProperty(_ref2, Event.STANDING_ORDER_AUTH_SUCCESS, function () {
	    notifications.notifySuccess(i18n('notification.auth.success'));
	  }), _defineProperty(_ref2, Event.STANDING_ORDER_AUTH_FAIL, function () {
	    notifications.notifyAlert(i18n('notification.auth.fail'));
	  }), _defineProperty(_ref2, Event.STANDING_ORDER_AUTH_MULTIPLE_SUCCESS, function (num) {
	    notifications.notifySuccess(i18n('notification.auth.multiple.success', { number: num }));
	  }), _defineProperty(_ref2, Event.STANDING_ORDER_AUTH_MULTIPLE_FAIL, function (num) {
	    notifications.notifyAlert(i18n('notification.auth.multiple.fail', { number: num }));
	  }), _defineProperty(_ref2, Event.STANDING_ORDER_REJECT_SUCCESS, function () {
	    notifications.notifySuccess(i18n('notification.reject.success'));
	  }), _defineProperty(_ref2, Event.STANDING_ORDER_REJECT_FAIL, function () {
	    notifications.notifyAlert(i18n('notification.reject.fail'));
	  }), _defineProperty(_ref2, Event.STANDING_ORDER_REJECT_MULTIPLE_SUCCESS, function (num) {
	    notifications.notifySuccess(i18n('notification.reject.multiple.success', { number: num }));
	  }), _defineProperty(_ref2, Event.STANDING_ORDER_REJECT_MULTIPLE_FAIL, function (num) {
	    notifications.notifyAlert(i18n('notification.reject.multiple.fail', { number: num }));
	  }), _defineProperty(_ref2, Event.STANDING_ORDER_DELETE_SUCCESS, function () {
	    notifications.notifySuccess(i18n('notification.delete.success'));
	  }), _defineProperty(_ref2, Event.STANDING_ORDER_DELETE_FAIL, function () {
	    notifications.notifyAlert(i18n('notification.delete.fail'));
	  }), _defineProperty(_ref2, Event.STANDING_ORDER_DELETE_MULTIPLE_SUCCESS, function (num) {
	    notifications.notifySuccess(i18n('notification.delete.multiple.success', { number: num }));
	  }), _defineProperty(_ref2, Event.STANDING_ORDER_DELETE_MULTIPLE_FAIL, function (num) {
	    notifications.notifyAlert(i18n('notification.delete.multiple.fail', { number: num }));
	  }), _ref2;
	};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(58);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(26)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(25)();
	// imports
	
	
	// module
	exports.push([module.id, ".ext-bus-standing-order-list-ng tbody .no-items {\n  display: none;\n}\n\n.ext-bus-standing-order-list-ng tbody .no-items:first-child {\n  display: table-row;\n}\n\n.ext-bus-standing-order-list-ng .popover {\n  z-index: 1039;\n}\n", ""]);
	
	// exports


/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bus-standing-order-list-ng.js.map