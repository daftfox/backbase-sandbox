(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-currency-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-format-amount", ["vendor-bb-angular", "lib-bb-currency-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-format-amount"] = factory(require("vendor-bb-angular"), require("lib-bb-currency-ng"));
	else
		root["ui-bb-format-amount"] = factory(root["vendor-bb-angular"], root["lib-bb-currency-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_53__) {
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

	module.exports = __webpack_require__(87);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbCurrencyNg = __webpack_require__(53);
	
	var _libBbCurrencyNg2 = _interopRequireDefault(_libBbCurrencyNg);
	
	var _formatAmount = __webpack_require__(88);
	
	var _formatAmount2 = _interopRequireDefault(_formatAmount);
	
	var _wrap = __webpack_require__(89);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _sign = __webpack_require__(90);
	
	var _sign2 = _interopRequireDefault(_sign);
	
	var _rule = __webpack_require__(91);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	* @description The angular module name
	* @name default
	* @type {string}
	*/
	/**
	 * @module ui-bb-format-amount
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbFormatAmountKey from 'ui-bb-format-amount';
	 *
	 * export const dependencyKeys = [
	 *   uiBbFormatAmountKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-format-amount
	 * amount="$option.amount"
	 * currency="$option.currency"
	 * wrap
	 * no-map
	 * show-plus-sign
	 * ></ui-bb-format-amount>
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-format-amount', [_libBbCurrencyNg2.default]).component('uiBbFormatAmount', _formatAmount2.default).factory('currencyRules', [_libBbCurrencyNg.bbCurrencyRuleKey, _rule2.default])
	/**
	 * Wraps whole number part in <span class="amount-whole-number">
	 * Wraps decimals in <span class="amount-decimals">
	 * Wraps decimal point in <span class="amount-decimal-point">
	 * Wraps currency in <span class="amount-currency">
	 *
	 * @name wrap
	 * @type {function}
	 * @param {object} $locale Localization service
	 * @param {object} $sce SCE Service
	 * @returns {string} Figures wrapped in <span> elements
	 */
	.filter('wrap', ['$locale', '$sce', _wrap2.default])
	/**
	 * @type {function}
	 * @name signFilter
	 * @description
	 * Filter for currency formatting with an option to add + sign for positive values
	 *
	 * @returns {string}
	 */
	.filter('sign', ['$locale', '$filter', _sign2.default]).name;

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbFormatAmountComponent
	 * @type {object}
	 * @description
	 * Format Amount Component Object
	 *
	 * @property {string} amount Amount string
	 * @property {string} currency Currency string
	 * @property {void} wrap Condition to wrap amount sign (if present), currency sign or code,
	 * whole part of the number, decimal point and number decimals in separate HTML wrappers
	 * @property {void} noMap Condition to stop looking for currency mapping in the currency-map
	 * @property {void} showPlusSign Condition to prepend plus sign for positive amounts
	 */
	var uiBbFormatAmountComponent = {
	  bindings: {
	    amount: '<',
	    currency: '<'
	  },
	  template: ['$attrs', function template(attrs) {
	    var wrap = 'wrap' in attrs;
	    var bindMode = wrap ? 'data-ng-bind-html' : 'data-ng-bind';
	    var wrapFilter = wrap ? ' | wrap' : '';
	
	    return '\n      <span class="amount"\n        data-role="amount"\n        data-ng-class="$ctrl.amount < 0 ? \'amount-negative\' : \'amount-positive\'"\n        ' + bindMode + '="$ctrl.amount | \n          sign: $ctrl.format.symbol:$ctrl.format.decimalDigits:' + ('showPlusSign' in attrs) + '\n          ' + wrapFilter + '">\n      </span>\n    ';
	  }],
	  controller: ['$attrs', 'currencyRules', function controller($attrs, currencyRules) {
	    var $ctrl = this;
	    var $onChanges = function $onChanges() {
	      var format = {
	        symbol: $ctrl.currency || ''
	      };
	
	      if (!('noMap' in $attrs) && $ctrl.currency) {
	        Object.assign(format, currencyRules.getRule($ctrl.currency));
	      }
	
	      Object.assign($ctrl, { format: format });
	    };
	
	    Object.assign($ctrl, {
	      $onChanges: $onChanges
	    });
	  }]
	};
	
	exports.default = uiBbFormatAmountComponent;

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = wrapFilter;
	/**
	 * @type {function}
	 * @name wrapFilter
	 * @description
	 * Filter used to wrap parts of the value in HTML elements
	 *
	 * @param {object} $locale Localization service
	 * @param {object} $sce SCE Service
	 * @returns {function} Function that is used to wrap the value
	 */
	function wrapFilter($locale, $sce) {
	  var CLASS_SIGN = 'amount-sign';
	  var CLASS_WHOLE = 'amount-whole-number';
	  var CLASS_POINTS = 'amount-decimal-points';
	  var CLASS_DECIMALS = 'amount-decimals';
	  var CLASS_CURRENCY = 'amount-currency';
	  // . is special sign, we need to prefix it with \\ if it is a decimal point
	  var groupPrefix = $locale.NUMBER_FORMATS.GROUP_SEP === '.' ? '\\' : '';
	  var pointPrefix = $locale.NUMBER_FORMATS.DECIMAL_SEP === '.' ? '\\' : '';
	  var groupRegExp = '' + groupPrefix + $locale.NUMBER_FORMATS.GROUP_SEP;
	  var decimalRegExp = '' + pointPrefix + $locale.NUMBER_FORMATS.DECIMAL_SEP;
	  // construct search RegExp
	  var exp = '(\\+|-)?([^0-9]+)?([\\d|' + groupRegExp + ']+)(' + decimalRegExp + ')(\\d+)(.+)?';
	  var search = new RegExp(exp);
	
	  /**
	   * @type {function}
	   * @inner
	   * @name wrapRegExpGroup
	   * @description
	   * RegExp replace string builder
	   *
	   * @param {number} groupIndex Replace index
	   * @param {string} wrapClass CSS class of the wrapper
	   */
	  var wrapRegExpGroup = function wrapRegExpGroup(groupIndex, wrapClass) {
	    return '<span class="' + wrapClass + '">$' + groupIndex + '</span>';
	  };
	
	  return function (value) {
	    if (!value) {
	      return '';
	    }
	
	    // wrap configuration array containing wrapping class
	    // that should be used for each replace group
	    var wrapConfig = [CLASS_SIGN, CLASS_CURRENCY, CLASS_WHOLE, CLASS_POINTS, CLASS_DECIMALS, CLASS_CURRENCY];
	
	    var replace = '';
	    for (var i = 0; i < wrapConfig.length; i++) {
	      replace += wrapRegExpGroup(i + 1, wrapConfig[i]);
	    }
	    // wrap it up
	    var wrapped = value.replace(search, replace);
	    // clear empty span elements
	    var cleaned = wrapped.replace(new RegExp('<span[^<>]+><\\/span>', 'g'), '');
	    return $sce.trustAsHtml(cleaned);
	  };
	}

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = signFilter;
	/**
	 * @type {function}
	 * @name signFilter
	 * @description
	 * Filter for currency formatting with an option to add + sign for positive values
	 *
	 * @param {object} $locale Localization service
	 * @param {function} $filter Filter service
	 * @returns {function} Function that is used to filter
	 */
	function signFilter($locale, $filter) {
	  return function (value, symbol, decimals, sign) {
	    if (!sign) {
	      var result = $filter('currency')(value, symbol, decimals);
	      return result && result.trim();
	    }
	
	    var patterns = $locale.NUMBER_FORMATS.PATTERNS[1];
	    var posPre = patterns.posPre,
	        posSuf = patterns.posSuf;
	
	
	    patterns.posPre = patterns.negPre.replace('-', '+');
	    patterns.posSuf = patterns.negSuf.replace('-', '+');
	
	    var formatted = $filter('currency')(value, symbol, decimals);
	    Object.assign(patterns, { posPre: posPre, posSuf: posSuf });
	    return formatted && formatted.trim();
	  };
	}

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @type {function}
	 * @description
	 * A factory to get a function that returns currency's symbol based on ISO code
	 *
	 * @param {function} getRule Library's method to get currency related format rules
	 * @returns {function}
	 */
	exports.default = function (getRule) {
	  return { getRule: getRule };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-format-amount.js.map