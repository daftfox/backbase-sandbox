(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-checkbox-indeterminate-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-checkbox-indeterminate-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-checkbox-indeterminate-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_25__) {
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

	module.exports = __webpack_require__(40);

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(25);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _component = __webpack_require__(41);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _vendorBbAngular2.default.module('ui-bb-checkbox-indeterminate-ng', []).directive('uiBbCheckboxIndeterminateNg', _component2.default).name;

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbCheckboxIndeterminateNg
	 * @type {object}
	 * @desc use this directive to add the functionality of indeterminate state to a checkbox
	 * @example <input type="checkbox" ui-bb-checkbox-indeterminate-ng
	 *                                 data-bb-indeterminate="truthyValueHere" />
	 */
	var CheckboxIndeterminateState = function CheckboxIndeterminateState() {
	  return {
	    restrict: 'A',
	    link: function link(scope, elem, attr) {
	      var watcher = scope.$watch(attr.bbIndeterminate, function (value) {
	        if (value !== undefined) {
	          elem.prop('indeterminate', value);
	        }
	      });
	
	      scope.$on('$destroy', function () {
	        watcher();
	      });
	    }
	  };
	};
	
	exports.default = CheckboxIndeterminateState;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-checkbox-indeterminate-ng.js.map