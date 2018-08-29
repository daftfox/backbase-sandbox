(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-phone-mask-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-phone-mask-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-phone-mask-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_47__) {
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

	module.exports = __webpack_require__(50);

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_47__;

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(47);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _directive = __webpack_require__(51);
	
	var _directive2 = _interopRequireDefault(_directive);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _vendorBbAngular2.default.module('ui-bb-phone-mask-ng', []).directive('uiBbPhoneMask', [_directive2.default]).name;

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbPhoneMask;
	
	var _helpers = __webpack_require__(52);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var nonDigitRegExp = /\D/g;
	
	/**
	 * @module ui-bb-phone-mask-ng
	 * @name uiBbPhoneMask
	 * @type {function}
	 * @description Directive for masking phone number
	 * @return {object}
	 */
	function uiBbPhoneMask() {
	  return {
	    restrict: 'A',
	    require: 'ngModel',
	    link: function link(scope, element, attrs, ctrl) {
	      var format = attrs.uiBbPhoneMask;
	      var numberLengthValidator = format.replace(nonDigitRegExp, '').length;
	
	      ctrl.$formatters.push(function (value) {
	        return _helpers2.default.mask(format, value);
	      });
	
	      ctrl.$parsers.push(function (value) {
	        var masked = _helpers2.default.mask(format, value);
	        ctrl.$setViewValue(masked);
	        ctrl.$render();
	        return masked.replace(nonDigitRegExp, '');
	      });
	
	      Object.assign(ctrl.$validators, {
	        phoneMask: function phoneMask(modelValue) {
	          return !ctrl.$isEmpty(modelValue) && modelValue.length === numberLengthValidator;
	        }
	      });
	    }
	  };
	}

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(47);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  /**
	   * @name mask
	   * @type {function}
	   * @param {string} format Format of the input
	   * @param {string} val Value of the input
	   * @return {string} Formatted value
	   */
	  mask: function mask(format, val) {
	    if (!_vendorBbAngular2.default.isString(val)) {
	      return '';
	    }
	
	    var value = String(val).replace(/\D/g, '');
	    var newValue = '';
	
	    for (var numberInput = 0, maskInput = 0; maskInput < format.length;) {
	      if (!value[numberInput]) {
	        break;
	      }
	      if (format[maskInput].match(/\D/)) {
	        newValue += format[maskInput];
	      } else {
	        newValue += value[numberInput];
	        numberInput++;
	      }
	      maskInput++;
	    }
	
	    return newValue;
	  }
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-phone-mask-ng.js.map