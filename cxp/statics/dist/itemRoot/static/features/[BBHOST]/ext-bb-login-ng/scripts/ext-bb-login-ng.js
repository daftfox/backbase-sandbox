(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-focus-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-login-ng", ["vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "ui-bb-focus-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-login-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-focus-ng"));
	else
		root["ext-bb-login-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["ui-bb-focus-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_17__) {
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

	module.exports = __webpack_require__(16);

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),

/***/ 16:
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
	
	var _uiBbFocusNg = __webpack_require__(17);
	
	var _uiBbFocusNg2 = _interopRequireDefault(_uiBbFocusNg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbI18nNg2.default, _vendorBbAngularNgAria2.default, _uiBbFocusNg2.default]; /**
	                                                                                                                               * @module ext-bb-login-ng
	                                                                                                                               *
	                                                                                                                               * @description
	                                                                                                                               * Login extension for login widget.
	                                                                                                                               *
	                                                                                                                               * @requires ui-bb-i18n-ng
	                                                                                                                               * @requires vendor-bb-angular-ng-aria
	                                                                                                                               *
	                                                                                                                               * @example
	                                                                                                                               * <!-- login widget model.xml -->
	                                                                                                                               * <property name="extension" viewHint="text-input,admin">
	                                                                                                                               *  <value type="string">ext-bb-login-ng</value>
	                                                                                                                               * </property>
	                                                                                                                               * <!--
	                                                                                                                               *  Login form can be extended with additional fields by attaching properties to
	                                                                                                                               *  extraFormFields object.
	                                                                                                                               * -->
	                                                                                                                               * <input data-ng-model="$ctrl.extraFormFields.pin"
	                                                                                                                               *  name="pin"
	                                                                                                                               *  type="password"
	                                                                                                                               * />
	                                                                                                                               */
	var hooks = exports.hooks = {};
	
	var helpers = exports.helpers = {};
	
	var events = exports.events = {};

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bb-login-ng.js.map