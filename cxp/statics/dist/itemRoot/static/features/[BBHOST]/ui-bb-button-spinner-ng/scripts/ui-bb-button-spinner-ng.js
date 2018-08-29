(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-button-spinner-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-button-spinner-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-button-spinner-ng"] = factory(root["vendor-bb-angular"]);
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

	module.exports = __webpack_require__(153);

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _elementSpinner = __webpack_require__(154);
	
	var _elementSpinner2 = _interopRequireDefault(_elementSpinner);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name uiBbButtonSpinnerNg
	 * @type {object}
	 * @description
	 * Adds spinner to position defined in configuration and disables button with
	 * respective message (applicable to button-like elements)
	 *
	 * @example
	 * <form name="form">
	 *   <button type="submit"
	 *           ui-bb-add-spinner-ng
	 *           spinner-model="isSubmitting"
	 *           spinner-position="left"
	 *           spinner-placeholder="Submitting">Submit</button>
	 * </form>
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-button-spinner-ng', []).directive('uiBbAddSpinnerNg', _elementSpinner2.default).name;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbButtonSpinnerNg;
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function uiBbButtonSpinnerNg() {
	  /**
	   * @name uiBbButtonSpinnerNg
	   * @type {object}
	   *
	   * @property {boolean} spinnerLoading True value to trigger spinner state and
	   *                                    False -- to stop
	   * @property {?String} spinnerPosition If 'left' add spinner to the left, other
	   *                                     options are 'right' and 'inside'
	   * @property {?String} spinnerPlaceholder Placeholder to be placed instead of
	   *                                        existing one
	   * @property {?String} spinnerClasses Css classes to be added to spinner element
	   */
	  return {
	    restrict: 'A',
	    scope: {
	      spinnerLoading: '<',
	      spinnerPosition: '@',
	      spinnerPlaceholder: '@',
	      spinnerClasses: '@'
	    },
	    link: function link($scope, element) {
	      // Create spinner
	      var spinner = _vendorBbAngular2.default.element('\n          <i class="d-none pr-2 pl-2 fa fa-spinner fa-spin ' + $scope.spinnerClasses + '"></i>\n      ');
	      var origText = void 0;
	
	      // Place spinner before or after the element
	      if ($scope.spinnerPosition === 'left') {
	        element.parent()[0].insertBefore(spinner[0], element[0]);
	      } else if ($scope.spinnerPosition === 'right') {
	        element.after(spinner);
	      }
	
	      var modifyElementState = function modifyElementState(flag) {
	        if (flag) {
	          element.addClass('disabled');
	          if ($scope.spinnerPlaceholder) {
	            origText = element.text();
	            element.text($scope.spinnerPlaceholder);
	          }
	          if ($scope.spinnerPosition === 'inside') {
	            element.prepend(spinner);
	          }
	          spinner.removeClass('d-none');
	        } else {
	          element.removeClass('disabled');
	          if ($scope.spinnerPlaceholder) {
	            element.text(origText);
	          }
	          spinner.addClass('d-none');
	        }
	      };
	
	      // watch model
	      $scope.$watch('spinnerLoading', modifyElementState);
	    }
	  };
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-button-spinner-ng.js.map