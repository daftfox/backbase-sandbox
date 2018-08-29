(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-dropdown-select-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-language-switch-ng", ["ui-bb-dropdown-select-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-language-switch-ng"] = factory(require("ui-bb-dropdown-select-ng"));
	else
		root["ext-bb-language-switch-ng"] = factory(root["ui-bb-dropdown-select-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_15__) {
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

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _uiBbDropdownSelectNg = __webpack_require__(15);
	
	var _uiBbDropdownSelectNg2 = _interopRequireDefault(_uiBbDropdownSelectNg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbDropdownSelectNg2.default]; /**
	                                                                                 * @module ext-bb-language-switch-ng
	                                                                                 *
	                                                                                 * @description
	                                                                                 * Default extension for widget-bb-language-switch-ng
	                                                                                 */
	
	var hooks = exports.hooks = {};
	
	var helpers = exports.helpers = {};
	
	var events = exports.events = {};

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bb-language-switch-ng.js.map