(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-format-amount-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-change-period-ng"), require("vendor-bb-uib-buttons"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-income-spending-analysis-category-list-ng", ["vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "ui-bb-substitute-error-ng", "ui-bb-loading-indicator-ng", "ui-bb-format-amount-ng", "ui-bb-empty-state-ng", "ui-bb-change-period-ng", "vendor-bb-uib-buttons"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-income-spending-analysis-category-list-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-format-amount-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-change-period-ng"), require("vendor-bb-uib-buttons"));
	else
		root["ext-bb-income-spending-analysis-category-list-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["ui-bb-substitute-error-ng"], root["ui-bb-loading-indicator-ng"], root["ui-bb-format-amount-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-change-period-ng"], root["vendor-bb-uib-buttons"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) {
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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(2);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbI18nNg = __webpack_require__(3);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(4);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(5);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbFormatAmountNg = __webpack_require__(6);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(7);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBbChangePeriodNg = __webpack_require__(8);
	
	var _uiBbChangePeriodNg2 = _interopRequireDefault(_uiBbChangePeriodNg);
	
	var _vendorBbUibButtons = __webpack_require__(9);
	
	var _vendorBbUibButtons2 = _interopRequireDefault(_vendorBbUibButtons);
	
	var _hooks = __webpack_require__(10);
	
	var _hooks2 = _interopRequireDefault(_hooks);
	
	var _helpers = __webpack_require__(11);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bb-income-spending-analysis-category-list-ng
	 *
	 * @description
	 * Income/spending analysis extension for displaying top metrics
	 */
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbI18nNg2.default, _uiBbSubstituteErrorNg2.default, _uiBbLoadingIndicatorNg2.default, _uiBbFormatAmountNg2.default, _uiBbEmptyStateNg2.default, _uiBbChangePeriodNg2.default, _vendorBbUibButtons2.default];
	
	var hooks = exports.hooks = _hooks2.default;
	var helpers = exports.helpers = _helpers2.default;
	var events = exports.events = {};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name updateTurnoversData
	 * @type {function}
	 *
	 * @description
	 * If set to true, turnovers will be automatically updated on init and period change detection.
	 * Otherwise, controller's updateTurnovers method needs to be called manually
	 *
	 * @returns {boolean}
	 */
	var updateTurnoversData = function updateTurnoversData() {
	  return false;
	};
	
	exports.default = {
	  updateTurnoversData: updateTurnoversData
	};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(12);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @description
	 * Converts transaction category name into category CSS icon class sufix
	 *
	 * @name categoryToIconClass
	 * @type {function}
	 * @param {string} transactionCategory Transaction category
	 * @returns {string}
	 */
	var categoryToIconClass = function categoryToIconClass(transactionCategory) {
	  return transactionCategory.toLowerCase().replace(/\W/g, '-').replace(/-{2,}/g, '-');
	};
	
	/**
	 * @description
	 * Creates new Date object based on input date
	 * Returns new Date object
	 *
	 * @name getNewDate
	 * @type {function}
	 * @inner
	 * @param {Date} newDate
	 * @returns {string}
	 */
	var getNewDate = function getNewDate(newDate) {
	  return new Date(newDate.getTime() - newDate.getTimezoneOffset() * _constants2.default).toISOString().slice(0, 10);
	};
	
	/**
	 * @description
	 * Callback on period start date value change. This function ensures
	 * that controller property is also updated
	 *
	 * @name onPeriodStartChange
	 * @type {function}
	 * @param {IncomeSpendingAnalysisCategoryController} ctrl
	 */
	var onPeriodStartChange = function onPeriodStartChange(ctrl) {
	  return function (newStartDate) {
	    return Object.assign(ctrl, {
	      periodStartDate: getNewDate(newStartDate)
	    });
	  };
	};
	
	/**
	 * @description
	 * Callback on period value change. Calls
	 * controller's onPeriodEndChanged listener
	 *
	 * @name onPeriodEndChange
	 * @type {function}
	 * @param {IncomeSpendingAnalysisCategoryController} ctrl
	 */
	var onPeriodEndChange = function onPeriodEndChange(ctrl) {
	  return function (newEndDate) {
	    Object.assign(ctrl, {
	      periodEndDate: getNewDate(newEndDate)
	    });
	    ctrl.updateAnalysisCategories();
	  };
	};
	
	/**
	 * @description
	 * Callback on updating period
	 *
	 * @name updatePeriod
	 * @type {function}
	 * @param {IncomeSpendingAnalysisCategoryController} ctrl
	 * @param {monthsRange} monthsRange
	 */
	var updatePeriod = function updatePeriod(ctrl, monthsRange) {
	  var date = new Date();
	  // (monthsRange - 1) to get data starting from this month and 5 months before it,
	  // which will end up to 6 months in total (the same of 12 months)
	  var startDate = monthsRange === 1 ? date.setDate(1) : date.setMonth(date.getMonth() - (monthsRange - 1), 1);
	
	  Object.assign(ctrl, {
	    periodStartDate: getNewDate(new Date(startDate)),
	    periodEndDate: getNewDate(new Date())
	  });
	
	  ctrl.updateAnalysisCategories();
	};
	
	var helpers = function helpers(context) {
	  var dateFilter = context.$filter('date');
	  var i18nFilter = context.$filter('i18n');
	
	  /**
	   * @description
	   * Start period label formatter helper. Returns formatted date.
	   *
	   * @name periodStartLabelFormatter
	   * @type {function}
	   * @param {Date} date
	   * @returns {string} Formatted label
	   */
	  var periodStartLabelFormatter = function periodStartLabelFormatter(date) {
	    return dateFilter(date, 'd MMM yyyy');
	  };
	
	  /**
	   * @description
	   * End period label formatter helper. In case period is larger than current date
	   * (end date of current month) it returns translation for analysis.label.period.now,
	   * otherwise it returns formatted date
	   *
	   * @name periodEndLabelFormatter
	   * @type {function}
	   * @param {Date} date
	   * @returns {string} Formatted label
	   */
	  var periodEndLabelFormatter = function periodEndLabelFormatter(date) {
	    return new Date(new Date().setHours(0, 0, 0, 0)) > date ? dateFilter(date, 'd MMM yyyy') : i18nFilter('analysis.label.period.now');
	  };
	
	  /**
	   * @description
	   * Converts currecy code into symbol or returns back code if mapping was not successful
	   *
	   * @name getSymbol
	   * @type {function}
	   * @param {string} code Currency code
	   * @returns {string} Symbol or currecy code if symbol for it cannot be found
	   */
	  var getSymbol = function getSymbol(code) {
	    return (context.getRule(code) || {}).symbol || code;
	  };
	
	  return {
	    getSymbol: getSymbol,
	    categoryToIconClass: categoryToIconClass,
	    onPeriodStartChange: onPeriodStartChange,
	    onPeriodEndChange: onPeriodEndChange,
	    periodStartLabelFormatter: periodStartLabelFormatter,
	    periodEndLabelFormatter: periodEndLabelFormatter,
	    updatePeriod: updatePeriod
	  };
	};
	
	exports.default = helpers;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name MS_IN_MIN
	 * @description
	 * Amount of milliseconds in a minute
	 * @type {number}
	 */
	var MS_IN_MIN = 60000;
	
	exports.default = MS_IN_MIN;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-income-spending-analysis-category-list-ng.js.map