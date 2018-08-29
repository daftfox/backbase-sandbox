(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-form-navigate-away-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-form-navigate-away-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-form-navigate-away-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_18__) {
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

	module.exports = __webpack_require__(163);

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _directive = __webpack_require__(164);
	
	var _directive2 = _interopRequireDefault(_directive);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ui-bb-form-navigate-away-ng
	 * @description
	 * Show browser confirm message when navigating away if form is not pristine.
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbFormNavigateAwayNg from 'ui-bb-form-navigate-away-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbFormNavigateAwayNg,
	 * ];
	 *
	 * // Use custom navigate away flag
	 * // file: templates/template.ng.html
	 * <form name="formName"
	 *   ui-bb-form-navigate-away-ng="isFormPristine()"
	 *   form-navigate-away-msg="Are you sure to leave?"
	 * ></form>
	 *
	 * // Use form.$pristine flag
	 * // file: templates/template.ng.html
	 * <form name="formName"
	 *   ui-bb-form-navigate-away-ng
	 *   form-navigate-away-msg="Are you sure to leave?"
	 * ></form>
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-form-navigate-away-ng', []).directive('uiBbFormNavigateAwayNg', ['$parse', '$interpolate', _directive2.default]).name;

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbFormNavigateAwayNg;
	/* global window */
	function uiBbFormNavigateAwayNg(parse, interpolate) {
	  /**
	   * @name uiBbFormNavigateAwayNg
	   * @type {Object}
	   * @property {Boolean} uiBbFormNavigateAwayNg If set to true means form is pristine and does not
	   *                                            need to show confirm dialog when navigating away.
	   *                                            Otherwise browser ```onbeforeunload``` confirm
	   *                                            dialog will be shown. If not provided it will
	   *                                            check form pristiness.
	   * @property {String} formNavigateAwayMsg     In supported browsers this message will be shown in
	   *                                            confirm dialog.
	   */
	  return {
	    restrict: 'A',
	    require: 'form',
	    compile: function compile($element, $attrs) {
	      if ($attrs.formNavigateAwayMsg === undefined) {
	        throw new Error('uiBbFormNavigateAwayNg: Attribute `formNavigateAwayMsg` is required.');
	      }
	      var formNavigateAway = parse($attrs.uiBbFormNavigateAwayNg);
	      var formNavigateAwayMsg = interpolate($attrs.formNavigateAwayMsg);
	
	      return function (scope, element, attrs, form) {
	        var message = formNavigateAwayMsg(scope);
	
	        var eventHandler = function eventHandler(e) {
	          var navigateAway = formNavigateAway(scope);
	          var pristine = navigateAway !== undefined ? navigateAway : form.$pristine;
	          if (pristine) {
	            return undefined;
	          }
	
	          Object.assign(e, {
	            returnValue: message
	          });
	          return message;
	        };
	
	        window.addEventListener('beforeunload', eventHandler);
	
	        element.on('$destroy', function () {
	          window.removeEventListener('beforeunload', eventHandler);
	        });
	      };
	    }
	  };
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-form-navigate-away-ng.js.map