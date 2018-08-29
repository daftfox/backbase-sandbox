(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-indeterminate-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-indeterminate-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-indeterminate-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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

	module.exports = __webpack_require__(83);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _directive = __webpack_require__(84);
	
	var _directive2 = _interopRequireDefault(_directive);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ui-bb-indeterminate-ng
	 * @description
	 * Makes an input in indeterminate state
	 *
	 * @example
	 * // in the extension
	 * import uiBbIndeterminateNg from 'ui-bb-indeterminate-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbIndeterminateNg,
	 * ];
	 *
	 * // in template file
	 * <input type="checkbox" data-indeterminate-ng="true"/>
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-indeterminate-ng', []).directive('indeterminateNg', _directive2.default).name;

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbIndeterminateDirective
	 * @type {function}
	 */
	var uiBbIndeterminateDirective = function uiBbIndeterminateDirective() {
	  return {
	    restrict: 'A',
	    compile: function compile(tElm, tAttrs) {
	      if (!tAttrs.type || tAttrs.type.toLowerCase() !== 'checkbox') {
	        return false;
	      }
	      return function ($scope, elm, attrs) {
	        $scope.$watch(attrs.indeterminateNg, function (newVal) {
	          Object.assign(elm[0], { indeterminate: !!newVal });
	        });
	      };
	    }
	  };
	};
	
	exports.default = uiBbIndeterminateDirective;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-indeterminate-ng.js.map