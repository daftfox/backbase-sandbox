(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-bank-validations-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-bank-validations-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-bank-validations-ng"] = factory(root["vendor-bb-angular"]);
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

	module.exports = __webpack_require__(151);

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _rtnAba = __webpack_require__(152);
	
	var _rtnAba2 = _interopRequireDefault(_rtnAba);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ui-bb-bank-validations-ng
	 * @description
	 * Set of bank fields custom validations
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-bank-validations-ng', []).directive('uiBbBankValidateRtnAbaNg', _rtnAba2.default).name;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbBankValidateRtnAbaNg;
	var p = function p(str) {
	  return parseInt(str, 10);
	};
	
	function uiBbBankValidateRtnAbaNg() {
	  /**
	   * @name uiBbBankValidateRtnAbaNg
	   * @type {object}
	   * @description
	   * Custom form validation for routing transit number (ABA).
	   * The following condition must hold: 3(d1+d4+d7) + 7(d2+d5+d8) + (d3+d6+d9) mod10 = 0
	   * Consider 111000025 (which is a valid routing number of Bank of America in Virginia).
	   * Applying the formula, we get: 3(1+0+0) + 7(1+0+2) + (1+0+5) mod 10=0
	   *
	   * @example
	   * <form name="form">
	   *   <label for="rtn">Routing Transit Number (ABA)</label>
	   *   <input type="text" id="rtn" name="rtn" data-ng-model="rtn" ui-bb-bank-validate-rtn-aba-ng />
	   *   <span data-ng-if="form.rtn.$error.customRtn">
	   *     Please input a valid Routing Transit Number
	   *   </span>
	   * </form>
	   */
	  return {
	    restrict: 'A',
	    require: 'ngModel',
	    link: function link(scope, element, attrs, modelCtrl) {
	      modelCtrl.$parsers.push(function (inputValue) {
	        var transformedInput = inputValue.replace(/[^\d]/g, '');
	
	        if (transformedInput !== inputValue) {
	          modelCtrl.$setViewValue(transformedInput);
	          modelCtrl.$render();
	        }
	
	        return transformedInput;
	      });
	
	      Object.assign(modelCtrl.$validators, {
	        customRtn: function customRtn(v) {
	          if (!v || v.length < 9) {
	            return true;
	          }
	          var left = 3 * (p(v[0]) + p(v[3]) + p(v[6]));
	          var mid = 7 * (p(v[1]) + p(v[4]) + p(v[7]));
	          var right = p(v[2]) + p(v[5]) + p(v[8]);
	
	          return (left + mid + right) % 10 === 0;
	        }
	      });
	    }
	  };
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-bank-validations-ng.js.map