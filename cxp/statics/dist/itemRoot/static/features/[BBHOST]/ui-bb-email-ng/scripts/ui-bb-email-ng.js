(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-email"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-email-ng", ["vendor-bb-angular", "lib-bb-email"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-email-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-email"));
	else
		root["ui-bb-email-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-email"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_80__) {
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

	module.exports = __webpack_require__(78);

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(53);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _directive = __webpack_require__(79);
	
	var _directive2 = _interopRequireDefault(_directive);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	/**
	 * @module ui-bb-email-ng
	 *
	 * @description
	 * Email input custom validation directive.
	 *
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-email-ng', []).directive('uiBbEmailNg', _directive2.default).name;

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbEmail;
	
	var _libBbEmail = __webpack_require__(80);
	
	var _libBbEmail2 = _interopRequireDefault(_libBbEmail);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function uiBbEmail() {
	  /**
	   * @name uiBbEmail
	   * @type {object}
	   * @description
	   * Custom form validation for email input field
	   *
	   * @example
	   * <form name="form">
	   *   <label for="emailInputId">Email</label>
	   *   <input type="text"
	   *     id="emailInputId"
	   *     name="emailInput"
	   *     data-ng-model="email"
	   *     ui-bb-email-ng />
	   *     <span data-ng-if="form.emailInput.$error.uiBbEmail">
	   *     Please input a valid Email
	   *   </span>
	   * </form>
	   */
	  return {
	    require: 'ngModel',
	    link: function link(scope, elm, attrs, ctrl) {
	      ctrl.$validators.uiBbEmail = function (modelValue) {
	        if (ctrl.$isEmpty(modelValue)) {
	          return true;
	        }
	
	        return (0, _libBbEmail2.default)(modelValue);
	      };
	    }
	  };
	} /* eslint no-param-reassign: ["error", { "props": false }] */

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_80__;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-email-ng.js.map