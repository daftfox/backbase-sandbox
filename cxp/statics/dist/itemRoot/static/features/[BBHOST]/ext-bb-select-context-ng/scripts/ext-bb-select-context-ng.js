(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-autocomplete-search-ng"), require("ui-bb-loading-overlay-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-select-context-ng", ["vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "ui-bb-autocomplete-search-ng", "ui-bb-loading-overlay-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-select-context-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-autocomplete-search-ng"), require("ui-bb-loading-overlay-ng"));
	else
		root["ext-bb-select-context-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["ui-bb-autocomplete-search-ng"], root["ui-bb-loading-overlay-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__) {
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

	module.exports = __webpack_require__(18);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _uiBbI18nNg = __webpack_require__(7);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _vendorBbAngularNgAria = __webpack_require__(6);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbAutocompleteSearchNg = __webpack_require__(19);
	
	var _uiBbAutocompleteSearchNg2 = _interopRequireDefault(_uiBbAutocompleteSearchNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(20);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _helpers = __webpack_require__(21);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbI18nNg2.default, _vendorBbAngularNgAria2.default, _uiBbAutocompleteSearchNg2.default, _uiBbLoadingOverlayNg2.default]; /**
	                                                                                                                                                                            * @module ext-bb-select-context-ng
	                                                                                                                                                                            *
	                                                                                                                                                                            * @description
	                                                                                                                                                                            * Select context extension for widget-bb-select-context-ng
	                                                                                                                                                                            *
	                                                                                                                                                                            * @requires vendor-bb-angular-ng-aria
	                                                                                                                                                                            */
	var hooks = exports.hooks = {};
	
	var helpers = exports.helpers = _helpers2.default;
	
	var events = exports.events = {};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var helpers = function helpers() {
	  /**
	   * @name isContextSelected
	   * @type {function}
	   * @description
	   * Checks if all necessary properties are defined for selecting a context
	   *
	   * @param {object} state Current state
	   * @returns {Boolean}
	   */
	  var isContextSelected = function isContextSelected(state) {
	    return state.serviceAgreementId && state.serviceAgreementName && state.legalEntityId && state.legalEntityName;
	  };
	
	  return {
	    isContextSelected: isContextSelected
	  };
	};
	
	exports.default = helpers;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-select-context-ng.js.map