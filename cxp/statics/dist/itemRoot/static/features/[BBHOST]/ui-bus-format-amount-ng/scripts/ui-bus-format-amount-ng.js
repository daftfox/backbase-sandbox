(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-currency-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bus-format-amount-ng", ["vendor-bb-angular", "lib-bb-currency-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-bus-format-amount-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-currency-ng"));
	else
		root["ui-bus-format-amount-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-currency-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_47__) {
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

	module.exports = __webpack_require__(145);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_47__;

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbCurrencyNg = __webpack_require__(47);
	
	var _libBbCurrencyNg2 = _interopRequireDefault(_libBbCurrencyNg);
	
	var _formatAmount = __webpack_require__(146);
	
	var _formatAmount2 = _interopRequireDefault(_formatAmount);
	
	var _formatAmount3 = __webpack_require__(148);
	
	var _formatAmount4 = _interopRequireDefault(_formatAmount3);
	
	var _constants = __webpack_require__(147);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @description The angular module name
	 * @name default
	 * @type {string}
	 */
	exports.default = _vendorBbAngular2.default.module(_constants.MODULE_KEY, [_libBbCurrencyNg2.default]).component(_constants.COMPONENT_KEY, _formatAmount2.default).controller(_constants.CONTROLLER_KEY, [_libBbCurrencyNg.bbCurrencyRuleKey, _formatAmount4.default]).name; /**
	                                                                                                                                                                                                                                                                              * @module ui-bus-format-amount-ng
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              * @example
	                                                                                                                                                                                                                                                                              * // In an extension:
	                                                                                                                                                                                                                                                                              * // file: scripts/index.js
	                                                                                                                                                                                                                                                                              * import uiBusFormatAmountKey from 'ui-bus-format-amount-ng';
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              * export const dependencyKeys = [
	                                                                                                                                                                                                                                                                              *   uiBusFormatAmountKey,
	                                                                                                                                                                                                                                                                              * ];
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              * // file: templates/template.ng.html
	                                                                                                                                                                                                                                                                              * <ui-bus-format-amount
	                                                                                                                                                                                                                                                                              * amount="$option.amount"
	                                                                                                                                                                                                                                                                              * currency="$option.currency"
	                                                                                                                                                                                                                                                                              * ></ui-bus-format-amount>
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              */

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(147);
	
	/**
	 * @name uiBusFormatAmountComponent
	 * @type {object}
	 * @description
	 * Format Business Amount Component Object
	 *
	 * @property {string} amount Amount string
	 * @property {string} currency Currency string
	 */
	var uiBusFormatAmountComponent = {
	  bindings: {
	    amount: '<',
	    currency: '<'
	  },
	  template: '\n    <span class="amount amount-plain" data-ng-if="$ctrl.isAmountSet()">\n      <span class="amount-currency" data-ng-bind="$ctrl.currency"></span>\n      <span \n        class="amount-value" \n        data-ng-bind="$ctrl.amount | currency : \'\' : $ctrl.decimalDigits"></span>\n    </span>\n  ',
	  controller: _constants.CONTROLLER_KEY
	};
	
	exports.default = uiBusFormatAmountComponent;

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var MODULE_KEY = exports.MODULE_KEY = 'ui-bus-format-amount-ng';
	
	var COMPONENT_KEY = exports.COMPONENT_KEY = 'uiBusFormatAmountNg';
	
	var CONTROLLER_KEY = exports.CONTROLLER_KEY = 'uiBusFormatAmountController';

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBusFormatAmountController;
	/**
	 * @name uiBusFormatAmountController
	 * @type {function}
	 *
	 * @description
	 * Format Business Amount Controller
	 *
	 * @param {object} currencyRules Currency rules
	 */
	function uiBusFormatAmountController(currencyRules) {
	  var $ctrl = this;
	
	  $ctrl.isAmountSet = function () {
	    return $ctrl.amount !== undefined;
	  };
	
	  Object.assign($ctrl, currencyRules($ctrl.currency));
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bus-format-amount-ng.js.map