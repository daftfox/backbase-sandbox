(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-search-box-ng"), require("ui-bb-paginator-ng"), require("ui-bb-empty-state-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-user-identity-search-ng", ["vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "ui-bb-loading-overlay-ng", "ui-bb-search-box-ng", "ui-bb-paginator-ng", "ui-bb-empty-state-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-user-identity-search-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-search-box-ng"), require("ui-bb-paginator-ng"), require("ui-bb-empty-state-ng"));
	else
		root["ext-bb-user-identity-search-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["ui-bb-loading-overlay-ng"], root["ui-bb-search-box-ng"], root["ui-bb-paginator-ng"], root["ui-bb-empty-state-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__) {
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

	module.exports = __webpack_require__(12);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _helpers = __webpack_require__(13);
	
	Object.defineProperty(exports, 'helpers', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_helpers).default;
	  }
	});
	
	var _vendorBbAngularNgAria = __webpack_require__(3);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbSearchBoxNg = __webpack_require__(14);
	
	var _uiBbSearchBoxNg2 = _interopRequireDefault(_uiBbSearchBoxNg);
	
	var _uiBbPaginatorNg = __webpack_require__(15);
	
	var _uiBbPaginatorNg2 = _interopRequireDefault(_uiBbPaginatorNg);
	
	var _uiBbI18nNg = __webpack_require__(7);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(16);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(11);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bb-user-identity-search-ng
	 *
	 * @description
	 * Default extension for widget-bb-user-identity-search-ng
	 *
	 * @requires vendor-bb-angular-ng-aria
	 */
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbSearchBoxNg2.default, _uiBbPaginatorNg2.default, _uiBbI18nNg2.default, _uiBbEmptyStateNg2.default, _uiBbLoadingOverlayNg2.default];
	
	var hooks = exports.hooks = {};
	
	var events = exports.events = {};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var templates = {
	  list: '#ext-bb-user-identity-search-ng/list.html'
	};
	
	/**
	 * @name itemsFromModel
	 *
	 * @type {function}
	 * @description Function to process model item in order
	 * to have it suitable for the usage within the actual template
	 *
	 * @param {object} item from the state container to be transformed
	 * @returns {object} item to be used in the extension
	 */
	var itemsFromModel = function itemsFromModel(item) {
	  return item;
	};
	
	exports.default = function (_ref) {
	  var stateContainer = _ref.stateContainer,
	      router = _ref.router;
	
	  /**
	   * @name currentItems
	   *
	   * @type {function}
	   * @description State selector for current items
	   * @returns {Array} items transformed for the view
	   */
	  var currentItems = stateContainer.createSelector(function (state) {
	    return state.items.map(itemsFromModel);
	  });
	
	  return {
	    /**
	     * @name template
	     *
	     * @type {function}
	     * @description Returns a current template
	     * @returns {stirng} template id
	     */
	    get template() {
	      return templates[router.getRoute()];
	    },
	
	    /**
	     * @name items
	     *
	     * @type {function}
	     * @description Returns items to be used in the extension
	     * @returns {array} item array
	     */
	    get items() {
	      return currentItems();
	    },
	
	    /**
	     * @name hasItems
	     *
	     * @type {function}
	     * @description Returns true if any data is present on the state
	     * @returns {boolean}
	     */
	    get hasItems() {
	      return !!currentItems().length;
	    }
	  };
	};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-user-identity-search-ng.js.map