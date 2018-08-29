(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-header-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-headings-ng", ["vendor-bb-angular-ng-aria", "ui-bb-header-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-headings-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-header-ng"));
	else
		root["ext-bb-headings-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-header-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_13__) {
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

	module.exports = __webpack_require__(14);

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(6);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbHeaderNg = __webpack_require__(13);
	
	var _uiBbHeaderNg2 = _interopRequireDefault(_uiBbHeaderNg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bb-headings-ng
	 *
	 * @description
	 * Simple extension for widget-bb-headings-ng
	 *
	 * @requires vendor-bb-angular-ng-aria
	 */
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbHeaderNg2.default];
	
	var hooks = exports.hooks = {};
	var helpers = exports.helpers = {};
	var events = exports.events = {};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bb-headings-ng.js.map