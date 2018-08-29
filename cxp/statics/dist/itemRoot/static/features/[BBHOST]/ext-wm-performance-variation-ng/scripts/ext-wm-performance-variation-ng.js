(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-format-amount-ng"), require("lib-bb-model-errors"), require("lib-wm-compose-selectors"), require("lib-bb-styles"), require("vendor-bb-angular-ng-aria"), require("ui-bb-dropdown-select-ng"), require("ui-bb-chartjs-chart-bar-ng"), require("ui-bb-calendar-popup-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-wm-performance-variation-ng", ["ui-bb-loading-indicator-ng", "ui-bb-i18n-ng", "ui-bb-empty-state-ng", "ui-bb-format-amount-ng", "lib-bb-model-errors", "lib-wm-compose-selectors", "lib-bb-styles", "vendor-bb-angular-ng-aria", "ui-bb-dropdown-select-ng", "ui-bb-chartjs-chart-bar-ng", "ui-bb-calendar-popup-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-wm-performance-variation-ng"] = factory(require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-format-amount-ng"), require("lib-bb-model-errors"), require("lib-wm-compose-selectors"), require("lib-bb-styles"), require("vendor-bb-angular-ng-aria"), require("ui-bb-dropdown-select-ng"), require("ui-bb-chartjs-chart-bar-ng"), require("ui-bb-calendar-popup-ng"));
	else
		root["ext-wm-performance-variation-ng"] = factory(root["ui-bb-loading-indicator-ng"], root["ui-bb-i18n-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-format-amount-ng"], root["lib-bb-model-errors"], root["lib-wm-compose-selectors"], root["lib-bb-styles"], root["vendor-bb-angular-ng-aria"], root["ui-bb-dropdown-select-ng"], root["ui-bb-chartjs-chart-bar-ng"], root["ui-bb-calendar-popup-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_32__) {
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

	module.exports = __webpack_require__(30);

/***/ }),
/* 1 */,
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
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.helpers = undefined;
	
	var _uiBbFormatAmountNg = __webpack_require__(6);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _vendorBbAngularNgAria = __webpack_require__(18);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(2);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbI18nNg = __webpack_require__(3);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(4);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBbChartjsChartBarNg = __webpack_require__(31);
	
	var _uiBbChartjsChartBarNg2 = _interopRequireDefault(_uiBbChartjsChartBarNg);
	
	var _uiBbDropdownSelectNg = __webpack_require__(27);
	
	var _uiBbDropdownSelectNg2 = _interopRequireDefault(_uiBbDropdownSelectNg);
	
	var _uiBbCalendarPopupNg = __webpack_require__(32);
	
	var _uiBbCalendarPopupNg2 = _interopRequireDefault(_uiBbCalendarPopupNg);
	
	var _helpers = __webpack_require__(33);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var helpers = exports.helpers = _helpers2.default; /**
	                                                    * @module ext-wm-performance-variation-ng
	                                                    *
	                                                    * @description
	                                                    * Default extension for performance variation widget.
	                                                    *
	                                                    *
	                                                    * @requires ui-bb-chartjs-chart-bar-ng
	                                                    *
	                                                    * @example
	                                                    * <!-- performance variation widget model.xml -->
	                                                    * <property name="extension" viewHint="text-input,admin">
	                                                    *   <value type="string">ext-wm-performance-variation-ng</value>
	                                                    * </property>
	                                                    *
	                                                    */
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbFormatAmountNg2.default, _vendorBbAngularNgAria2.default, _uiBbLoadingIndicatorNg2.default, _uiBbChartjsChartBarNg2.default, _uiBbDropdownSelectNg2.default, _uiBbI18nNg2.default, _uiBbEmptyStateNg2.default, _uiBbCalendarPopupNg2.default];
	
	/**
	 * @description BBSeries data object used to draw charts
	 * @typedef {object} BBSeries
	 * @property {string[]} labels Array chart slices labels
	 * @property {Dataset[]} datasets Array of chart datasets
	 */
	
	/**
	 * @description Dataset object for chart data
	 * @typedef {object} Dataset
	 * @property {number[]} data Array of data points for chart slices
	 */

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _errors, _GRANULARITY_TO_DATE_;
	
	var _libBbStyles = __webpack_require__(15);
	
	var _libBbStyles2 = _interopRequireDefault(_libBbStyles);
	
	var _libBbModelErrors = __webpack_require__(8);
	
	var _libWmComposeSelectors = __webpack_require__(10);
	
	var _libWmComposeSelectors2 = _interopRequireDefault(_libWmComposeSelectors);
	
	var _constants = __webpack_require__(34);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* global angular */
	
	
	/**
	 * @typedef {Object} errorMessageDescriptor
	 * @property {string} message Localization key of the error message
	 * @property {string} title Localization key of the error message`s title
	 * @property {string} icon CSS class for icon
	 */
	
	/**
	 * @description
	 * Map of error code to message, title and icon to display to user
	 *
	 * @public
	 * @name errors
	 * @type {object.<E_AUTH | E_CONNECTIVITY | E_UNEXPECTED | E_USER, errorMessageDescriptor>}
	 */
	var errors = (_errors = {}, _defineProperty(_errors, _libBbModelErrors.E_AUTH, {
	  message: 'model.error.auth.message',
	  title: 'model.error.auth.title',
	  icon: 'fa-sign-in-alt'
	}), _defineProperty(_errors, _libBbModelErrors.E_CONNECTIVITY, {
	  message: 'model.error.connectivity.message',
	  title: 'model.error.connectivity.title',
	  icon: 'fa-exclamation-triangle'
	}), _defineProperty(_errors, _libBbModelErrors.E_USER, {
	  message: 'model.error.user.message',
	  title: 'model.error.user.title',
	  icon: 'fa-user'
	}), _defineProperty(_errors, _libBbModelErrors.E_UNEXPECTED, {
	  message: 'model.error.unexpected.message',
	  title: 'model.error.unexpected.title',
	  icon: 'fa-server'
	}), _errors);
	
	/**
	 * @description
	 * Object that holds start date config for calendar component
	 *
	 * @private
	 * @name startDateConfig
	 * @type {object}
	 */
	var startDateConfig = {
	  minDate: new Date(0),
	  maxDate: new Date(),
	  maxMode: 'year'
	};
	
	/**
	 * @description
	 * Object that holds end date config for calendar component
	 *
	 * @private
	 * @name endDateConfig
	 * @type {object}
	 */
	var endDateConfig = {
	  minDate: new Date(0),
	  maxDate: new Date(),
	  maxMode: 'year'
	};
	
	/**
	 * @description
	 * Object that holds selected date range for calendar component
	 *
	 * @private
	 * @name selectedDateRange
	 * @type {object}
	 */
	var selectedDateRange = {
	  dateFrom: null,
	  dateTo: null
	};
	
	var today = new Date();
	var oneYearAgo = new Date().setFullYear(today.getFullYear() - 1);
	var threeYearsAgo = new Date().setFullYear(today.getFullYear() - 3);
	var allTime = new Date().setFullYear(today.getFullYear() - 5);
	
	var startOfYear = new Date(today.getFullYear(), 0, 1);
	var endOfYear = new Date(today.getFullYear(), 11, 31).setHours(23, 59, 59, 999);
	
	var ticksPadding = parseFloat((0, _libBbStyles2.default)('.p-3', 'padding')) * _constants.REM_TO_PIXEL_RATIO;
	
	var GRANULARITY_DAILY = 'daily';
	var GRANULARITY_WEEKLY = 'weekly';
	var GRANULARITY_MONTHLY = 'monthly';
	var GRANULARITY_QUARTERLY = 'quarterly';
	
	/**
	 * @description
	 * Map of granularity to date formats
	 *
	 * @private
	 * @name GRANULARITY_TO_DATE_FORMAT
	 * @type {object.<GRANULARITY_DAILY
	 * | GRANULARITY_WEEKLY
	 * | GRANULARITY_MONTHLY
	 * | GRANULARITY_QUARTERLY, number>}
	 */
	var GRANULARITY_TO_DATE_FORMAT = (_GRANULARITY_TO_DATE_ = {}, _defineProperty(_GRANULARITY_TO_DATE_, GRANULARITY_DAILY, 'mediumDate'), _defineProperty(_GRANULARITY_TO_DATE_, GRANULARITY_WEEKLY, 'mediumDate'), _defineProperty(_GRANULARITY_TO_DATE_, GRANULARITY_MONTHLY, 'MMM y'), _defineProperty(_GRANULARITY_TO_DATE_, GRANULARITY_QUARTERLY, 'MMM y'), _GRANULARITY_TO_DATE_);
	
	/**
	 * @description
	 * Set of available periods for chart
	 *
	 * @public
	 * @name periods
	 * @type {array}
	 */
	var periods = [{
	  i18nKey: 'performanceVariation.ytd',
	  active: true,
	  granularity: GRANULARITY_MONTHLY,
	  value: { dateTo: endOfYear, dateFrom: startOfYear }
	}, {
	  i18nKey: 'performanceVariation.year',
	  value: { dateTo: today, dateFrom: oneYearAgo },
	  granularity: GRANULARITY_MONTHLY
	}, {
	  i18nKey: 'performanceVariation.3years',
	  value: { dateTo: today, dateFrom: threeYearsAgo },
	  granularity: GRANULARITY_QUARTERLY
	}, {
	  i18nKey: 'performanceVariation.all',
	  granularity: GRANULARITY_QUARTERLY,
	  value: { dateTo: today, dateFrom: allTime }
	}];
	
	var helpers = function helpers(_ref) {
	  var $filter = _ref.$filter,
	      stateContainer = _ref.stateContainer;
	
	  var dateFilter = $filter('date');
	  var numberFilter = $filter('number');
	
	  var chartInstance = void 0;
	  var $ctrl = null;
	  var debounceTimeout = null;
	
	  var valuationChartBarColorPositive = (0, _libBbStyles2.default)(_constants.CSS_SELECTORS.valuationChartBarPositive, 'color');
	  var valuationChartBarColorNegative = (0, _libBbStyles2.default)(_constants.CSS_SELECTORS.valuationChartBarNegative, 'color');
	  var performanceChartPrimaryColor = (0, _libBbStyles2.default)(_constants.CSS_SELECTORS.performanceChartPrimary, 'color');
	  var hoverColor = (0, _libBbStyles2.default)('.btn-outline-secondary', 'color');
	
	  var memoCtrl = function memoCtrl(ctrl) {
	    $ctrl = ctrl;
	  };
	
	  /**
	   * @description
	   * Maps colours to bars
	   *
	   * @private
	   * @param {array} data Set of bar data
	   * @type {function}
	   * @returns {array}
	   */
	  var getBarColor = function getBarColor(data) {
	    return data.map(function (item) {
	      if (item.valuePct > 0) {
	        return valuationChartBarColorPositive;
	      }
	      return valuationChartBarColorNegative;
	    });
	  };
	
	  /**
	   * @description
	   * Holds options of chart's plugins
	   *
	   * @name chartPlugins
	   * @type {object}
	   */
	  var chartPlugins = {
	    afterInit: function afterInit(chart) {
	      chartInstance = chart;
	    }
	  };
	
	  /**
	   * @description
	   * Shows value as it is or adds two decimal zeroes if needed
	   *
	   * @name formatAmount
	   * @type {function}
	   * @param {number} value Value to format
	   * @returns {number} Formatted value
	   */
	  var formatAmount = function formatAmount(value) {
	    if (value === 0) {
	      return value;
	    }
	    if (!value) {
	      return '';
	    }
	    var decimalsLength = (value.toString().split('.')[1] || []).length;
	    var fractionSize = decimalsLength < 2 ? 2 : decimalsLength;
	    return numberFilter(value, fractionSize);
	  };
	
	  /**
	   * @description
	   * Retrieves selected granularity from stateContainer
	   *
	   * @public
	   * @name getGranularity
	   * @type {function}
	   *
	   * @returns {GRANULARITY_DAILY
	   * | GRANULARITY_WEEKLY
	   * | GRANULARITY_MONTHLY
	   * | GRANULARITY_QUARTERLY} selected granularity
	   */
	  var getGranularity = function getGranularity() {
	    return stateContainer.getState().portfolioPerformance.granularity;
	  };
	
	  /**
	   * @description
	   * Method to make charts` ticks more rare
	   *
	   * @private
	   * @name ticksCallback
	   * @type {function}
	   * @param {object} tick Chart tick
	   * @param {index} index Index of the tick in the array of all ticks
	   * @param {object} ticks Array of all ticks
	   */
	  var ticksCallback = function ticksCallback(tick, index, data) {
	    var result = null;
	    var granularity = getGranularity();
	
	    if (granularity === GRANULARITY_DAILY || granularity === GRANULARITY_WEEKLY) {
	      var lastItem = index === data.length - 1;
	      result = (index % 2 === 0 || lastItem) && tick;
	    } else {
	      result = tick;
	    }
	
	    return result ? dateFilter(result, GRANULARITY_TO_DATE_FORMAT[granularity]) : null;
	  };
	
	  /**
	   * @description
	   * Configuration for variation chart`s Y axis
	   *
	   * @private
	   * @name variationYAxisConfig
	   * @type {function}
	   * @param {number} edge Edge of chart's values
	   * @returns {object} Configuration for variation chart`s Y axis
	   */
	  var variationYAxisConfig = function variationYAxisConfig(edge) {
	    return {
	      ticks: {
	        callback: function callback(label) {
	          return Math.round(label * 10) / 10 + '%';
	        },
	
	        stepSize: edge / 5,
	        beginAtZero: true,
	        padding: ticksPadding,
	        suggestedMin: -edge,
	        suggestedMax: edge
	      },
	      type: 'linear',
	      display: true,
	      position: 'left',
	      id: 'y-axis-1',
	      gridLines: {
	        display: true,
	        drawOnChartArea: true,
	        drawBorder: false
	      }
	    };
	  };
	
	  /**
	   * @description
	   * Configuration for performance chart`s Y axis
	   *
	   * @private
	   * @name performanceYAxisConfig
	   * @type {function}
	   * @param {number} edge Edge of chart's values
	   * @returns {object} Configuration for performance chart`s Y axis
	   */
	  var performanceYAxisConfig = function performanceYAxisConfig(edge) {
	    return {
	      ticks: {
	        callback: function callback(label) {
	          return Math.round(label * 10) / 10 + '%';
	        },
	
	        stepSize: edge / 5,
	        fontColor: performanceChartPrimaryColor,
	        padding: ticksPadding,
	        suggestedMin: -edge,
	        suggestedMax: edge
	      },
	      type: 'linear',
	      display: true,
	      position: 'right',
	      id: 'y-axis-2',
	      gridLines: {
	        color: _constants.TRANSPARENT,
	        display: false,
	        drawBorder: false
	      }
	    };
	  };
	
	  /**
	   * @description
	   * Sets styling and content for custom tooltip
	   *
	   * @name getCustomTooltip
	   * @type {function}
	   * @param {object} state State of widget
	   * @param {object} data Chartjs model of selected item
	   * @returns {void}
	   */
	  var getCustomTooltip = function getCustomTooltip(dataLength) {
	    return function (data) {
	      // eslint-disable-next-line no-undef
	      var tooltipEl = document.querySelector('[data-role=performance-variation-spiderweb-chart-tooltip]').querySelector('.popover');
	      var arrow = tooltipEl.querySelector('.arrow');
	
	      if (data.opacity === 0) {
	        tooltipEl.classList.remove('show');
	        return;
	      }
	
	      if (!data.dataPoints[1]) {
	        return;
	      }
	
	      var index = data.dataPoints[1].index;
	
	      var variationValue = data.dataPoints[1].yLabel;
	      var variationDate = data.dataPoints[1].xLabel;
	      var performanceValue = data.dataPoints[0].yLabel;
	
	      $ctrl.setActiveItem(index);
	
	      var titleWrapper = tooltipEl.querySelector('.popover-title-content');
	      titleWrapper.innerHTML = variationDate;
	
	      var xAlign = index > dataLength / 2 ? 'right' : 'left';
	
	      tooltipEl.classList.remove('bs-popover-right');
	      tooltipEl.classList.remove('bs-popover-left');
	      tooltipEl.classList.add('bs-popover-' + (xAlign === 'left' ? 'right' : 'left'));
	
	      var performanceWrapper = tooltipEl.querySelector('.popover-performance');
	      var performanceSign = performanceValue > 0 ? '+' : '';
	      performanceWrapper.innerHTML = '' + performanceSign + formatAmount(performanceValue);
	
	      var performanceDotWrapper = tooltipEl.querySelector('.popover-performance-dot');
	      performanceDotWrapper.style.color = performanceChartPrimaryColor;
	
	      var variationWrapper = tooltipEl.querySelector('.popover-variation');
	      var variationSign = variationValue > 0 ? '+' : '';
	      variationWrapper.innerHTML = '' + variationSign + formatAmount(variationValue);
	
	      var variationDotWrapper = tooltipEl.querySelector('.popover-variation-dot');
	      if (variationValue < 0) {
	        variationDotWrapper.style.color = valuationChartBarColorNegative;
	      } else {
	        variationDotWrapper.style.color = valuationChartBarColorPositive;
	      }
	
	      var left = data.caretX + _constants.TOOLTIP_SHIFT;
	      if (xAlign === 'right') {
	        left -= tooltipEl.offsetWidth + _constants.ARROW_WIDTH;
	      } else {
	        left += _constants.ARROW_WIDTH;
	      }
	
	      Object.assign(tooltipEl.style, {
	        'pointer-events': 'none',
	        top: chartInstance.scales['y-axis-1'].maxHeight / 2 + +(tooltipEl.offsetHeight - arrow.offsetHeight) + 3 + 'px',
	        left: left + 'px'
	      });
	      Object.assign(arrow.style, {
	        top: tooltipEl.offsetHeight / 2 - arrow.offsetHeight / 2 + 'px'
	      });
	      tooltipEl.classList.add('show');
	    };
	  };
	
	  /**
	   * @description
	   * Calculates suggested edge for chart
	   *
	   * @private
	   * @name getVariationSuggestedEdge
	   * @type {function}
	   * @param {array} chartData Array of chart's items
	   * @returns {number} Suggested edge for chart
	   */
	  var getVariationSuggestedEdge = function getVariationSuggestedEdge(chartData) {
	    var variationMin = Math.min.apply(Math, _toConsumableArray(chartData.map(function (item) {
	      return item.valuePct;
	    })));
	    var variationMax = Math.max.apply(Math, _toConsumableArray(chartData.map(function (item) {
	      return item.valuePct;
	    })));
	    var variationEdge = Math.max(Math.abs(variationMin), Math.abs(variationMax));
	    return variationEdge * _constants.MAX_EDGE_MULTIPLIER;
	  };
	
	  /**
	   * @description
	   * Calculates suggested edge for chart
	   *
	   * @private
	   * @name getPerformanceSuggestedEdge
	   * @type {function}
	   * @param {array} chartData Array of chart's items
	   * @returns {number} Suggested edge for chart
	   */
	  var getPerformanceSuggestedEdge = function getPerformanceSuggestedEdge(chartData) {
	    var performancemMin = Math.min.apply(Math, _toConsumableArray(chartData.map(function (item) {
	      return item.value;
	    })));
	    var performanceMax = Math.max.apply(Math, _toConsumableArray(chartData.map(function (item) {
	      return item.value;
	    })));
	    var performanceEdge = Math.max(Math.abs(performancemMin), Math.abs(performanceMax));
	    return performanceEdge * _constants.MAX_EDGE_MULTIPLIER;
	  };
	
	  /**
	   * @description
	   * Configuration of variation chart
	   *
	   * @public
	   * @name chartVariationOptions
	   * @type {function}
	   * @param {object} state State of widget
	   * @returns {object} Configuration of variation chart
	   */
	  var chartVariationOptions = function chartVariationOptions(dataAvailable, performanceData, valuationData) {
	    if (!dataAvailable) {
	      return null;
	    }
	
	    var variationSuggestedEdge = getVariationSuggestedEdge(valuationData.chartData);
	    var performanceSuggestedEdge = getPerformanceSuggestedEdge(performanceData.chartData);
	
	    return {
	      animation: false,
	      tooltips: {
	        enabled: false,
	        mode: 'index',
	        axis: 'x',
	        position: 'average',
	        intersect: false,
	        custom: getCustomTooltip(valuationData.chartData.length)
	      },
	      hover: {
	        mode: null
	      },
	      scales: {
	        yAxes: [variationYAxisConfig(variationSuggestedEdge), performanceYAxisConfig(performanceSuggestedEdge)],
	        xAxes: [{
	          ticks: {
	            callback: ticksCallback
	          }
	        }]
	      }
	    };
	  };
	
	  /**
	   * @description
	   * Returns error object by error code
	   *
	   * @public
	   * @name getError
	   * @type {function}
	   * @returns {errorMessageDescriptor} Descriptor of the error
	   */
	  var getError = function getError(code) {
	    return errors[code];
	  };
	
	  /**
	   * @description
	   * Produces labels out of given array
	   *
	   * @private
	   * @name getLabels
	   * @type {function}
	   * @param {array} data Set of data to produce labels
	   * @returns {number[]} Set of numeric labels
	   */
	  var getLabels = function getLabels(data) {
	    var lastItem = data[data.length - 1];
	
	    return data.concat([].concat(_toConsumableArray(Array(data.length < 12 && periods[0].active === true ? 12 - data.length : 0))).map(function (number, index) {
	      return {
	        dateFrom: new Date(lastItem.dateFrom).setMonth(new Date(lastItem.dateFrom).getMonth() + index + 1),
	        dateTo: new Date(lastItem.dateTo).setMonth(new Date(lastItem.dateTo).getMonth() + index + 1)
	      };
	    })).map(function (item) {
	      return (new Date(item.dateFrom).getTime() + new Date(item.dateTo).getTime()) / 2;
	    });
	  };
	
	  /**
	   * @description
	   * Creates dataset for chart out of variation data
	   *
	   * @private
	   * @name getVariationDataset
	   * @param {array} data List of portfolio variations
	   * @returns {object} Variation dataset for chartjs library
	   */
	  var getVariationDataset = function getVariationDataset(data) {
	    return {
	      label: '',
	      backgroundColor: getBarColor(data),
	      borderWidth: 0,
	      yAxisID: 'y-axis-1',
	      data: data.map(function (item) {
	        return item.valuePct;
	      })
	    };
	  };
	
	  /**
	   * @description
	   * Creates dataset for chart out of performance data
	   *
	   * @private
	   * @name getPerformanceDataset
	   * @param {array} data List of portfolio performance
	   * @returns {object} Performance dataset for chartjs library
	   */
	  var getPerformanceDataset = function getPerformanceDataset(data) {
	    return {
	      type: 'line',
	      label: '',
	      borderWidth: 0,
	      yAxisID: 'y-axis-2',
	      data: data.map(function (item) {
	        return {
	          x: (new Date(item.dateFrom).getTime() + new Date(item.dateTo).getTime()) / 2,
	          y: item.value
	        };
	      }),
	      backgroundColor: performanceChartPrimaryColor,
	      borderColor: performanceChartPrimaryColor,
	      pointRadius: _constants.POINT_RADIUS,
	      pointHitRadius: _constants.POINT_HIT_RADIUS,
	      lineTension: _constants.LINE_TENSION,
	      fill: false
	    };
	  };
	
	  /**
	   * @name portfolioPerformanceDataSelector
	   * @inner
	   * @description Selector for getting performance data from state
	   * @type function
	   * @returns {Array} Performance data
	   */
	  var portfolioPerformanceDataSelector = stateContainer.createSelector(function (state) {
	    return state.portfolioPerformance && state.portfolioPerformance.data;
	  });
	
	  /**
	   * @name portfolioValuationDataSelector
	   * @inner
	   * @description Selector for getting valuation data from state
	   * @type function
	   * @returns {Array} Valuation data
	   */
	  var portfolioValuationDataSelector = stateContainer.createSelector(function (state) {
	    return state.valuation && state.valuation.data;
	  });
	
	  /**
	   * @name activeItemSelector
	   * @inner
	   * @description Selector for getting active item from state
	   * @type function
	   * @returns {Object} Active item
	   */
	  var activeItemSelector = stateContainer.createSelector(function (state) {
	    return state.activeItem;
	  });
	
	  /**
	   * @description
	   * Tells whether extension retrieved data
	   *
	   * @public
	   * @name isDataAvailable
	   * @type {function}
	   * @returns {boolean} Flag that tells whether data is available
	   */
	  var isDataAvailable = (0, _libWmComposeSelectors2.default)(portfolioPerformanceDataSelector, portfolioValuationDataSelector, function (performanceData, valuationData) {
	    if (!performanceData || !performanceData.chartData || performanceData.chartData.length === 0) {
	      return false;
	    }
	    if (!valuationData || !valuationData.chartData || valuationData.chartData.length === 0) {
	      return false;
	    }
	
	    return true;
	  });
	
	  /**
	   * @description
	   * Selector which retrieves perfromance data out of store
	   * and converts it into chartjs suitable format
	   *
	   * @public
	   * @name getPerformanceVariationSeries
	   * @type {function}
	   * @returns {object} Series object of performance data for chartjs library
	   */
	  var getPerformanceVariationSeries = (0, _libWmComposeSelectors2.default)(isDataAvailable, portfolioPerformanceDataSelector, portfolioValuationDataSelector, function (dataAvailable, performanceData, valuationData) {
	    if (!dataAvailable) {
	      return { labels: [], datasets: [] };
	    }
	
	    return {
	      labels: getLabels(valuationData.chartData),
	      datasets: [getPerformanceDataset(performanceData.chartData), getVariationDataset(valuationData.chartData)],
	      updated: true
	    };
	  });
	
	  /**
	   * @description
	   * Gets options for variation chart
	   *
	   * @public
	   * @name getVariationOptions
	   * @type {function}
	   * @returns {object} Variation chart options
	   */
	  var getVariationOptions = (0, _libWmComposeSelectors2.default)(isDataAvailable, portfolioPerformanceDataSelector, portfolioValuationDataSelector, chartVariationOptions);
	
	  /**
	   * @description
	   * Makes active flag falsy for all periods
	   *
	   * @private
	   * @name resetActivePeriod
	   * @type {function}
	   * @returns {void}
	   */
	  var resetActivePeriod = function resetActivePeriod() {
	    periods.forEach(function (period) {
	      return Object.assign(period, { active: false });
	    });
	  };
	
	  /**
	   * @description
	   * Resets selected date range for calendar
	   *
	   * @private
	   * @name resetDatePickerPeriod
	   * @type {function}
	   * @returns {void}
	   */
	  var resetDatePickerPeriod = function resetDatePickerPeriod() {
	    selectedDateRange.dateFrom = null;
	    selectedDateRange.dateTo = null;
	  };
	
	  /**
	   * @description
	   * Sets active period of time by given index of selected period
	   *
	   * @public
	   * @name setActivePeriod
	   * @type {function}
	   * @param {number} index Index of selected period
	   * @returns {void}
	   */
	  var setActivePeriod = function setActivePeriod(index) {
	    var currentActivePeriodIndex = periods.findIndex(function (period) {
	      return period.active;
	    });
	    if (currentActivePeriodIndex !== -1) {
	      periods[currentActivePeriodIndex].active = false;
	    }
	    periods[index].active = true;
	    resetDatePickerPeriod();
	  };
	
	  /**
	   * @description
	   * Fires setting of period over a period of time
	   *
	   * @private
	   * @name debounceSettingPeriod
	   * @type {function}
	   * @returns {void}
	   */
	  var debounceSettingPeriod = function debounceSettingPeriod() {
	    if (debounceTimeout) {
	      clearTimeout(debounceTimeout);
	    }
	    debounceTimeout = setTimeout(function () {
	      resetActivePeriod();
	      $ctrl.setPeriod({ granularity: GRANULARITY_MONTHLY, value: selectedDateRange });
	    });
	  };
	
	  /**
	   * @description
	   * Object, that holds start and end dates for datepicker
	   *
	   * @private
	   * @name datePickerRange
	   * @type {object}
	   */
	  var datePickerRange = {
	    set startDate(v) {
	      selectedDateRange.dateFrom = v;
	      endDateConfig = Object.assign({}, endDateConfig, {
	        minDate: new Date(v)
	      });
	
	      if (selectedDateRange.dateTo) {
	        debounceSettingPeriod();
	      }
	    },
	    get startDate() {
	      return selectedDateRange.dateFrom;
	    },
	    set endDate(v) {
	      selectedDateRange.dateTo = v;
	      startDateConfig = Object.assign({}, startDateConfig, {
	        maxDate: new Date(v)
	      });
	
	      if (selectedDateRange.dateFrom) {
	        debounceSettingPeriod();
	      }
	    },
	    get endDate() {
	      return selectedDateRange.dateTo;
	    }
	  };
	
	  /**
	   * @description
	   * Gets range of datepicker
	   *
	   * @public
	   * @name getDatePickerRange
	   * @type {function}
	   * @returns {object} Date picker range
	   */
	  var getDatePickerRange = function getDatePickerRange() {
	    return datePickerRange;
	  };
	
	  /**
	   * @description Gets start date config object
	   *
	   * @public
	   * @name getStartDateConfig
	   * @type {function}
	   * @returns {object} Start date config
	   */
	  var getStartDateConfig = function getStartDateConfig() {
	    return startDateConfig;
	  };
	
	  /**
	   * @description Gets end date config object
	   *
	   * @public
	   * @name getEndDateConfig
	   * @type {function}
	   * @returns {object} End date config
	   */
	  var getEndDateConfig = function getEndDateConfig() {
	    return endDateConfig;
	  };
	
	  /**
	   * @description
	   * Configuration for variation hover chart`s Y axis
	   *
	   * @private
	   * @name variationHoverYAxisConfig
	   * @type {function}
	   * @param {number} edge Edge of chart's values
	   * @returns {object} Configuration for variation hover chart`s Y axis
	   */
	  var variationHoverYAxisConfig = function variationHoverYAxisConfig(edge) {
	    return {
	      ticks: {
	        callback: function callback(label, index) {
	          return Math.round((edge - edge / 5 * index) * 10) / 10 + '%';
	        },
	
	        stepSize: 0.1,
	        fontColor: _constants.TRANSPARENT,
	        beginAtZero: true,
	        padding: ticksPadding,
	        min: 0,
	        max: 1
	      },
	      type: 'linear',
	      display: true,
	      position: 'left',
	      id: 'y-axis-3',
	      gridLines: {
	        display: true,
	        color: _constants.TRANSPARENT,
	        drawOnChartArea: true,
	        drawBorder: false
	      }
	    };
	  };
	
	  /**
	   * @description
	   * Configuration for performance hover chart`s Y axis
	   *
	   * @private
	   * @name performanceHoverYAxisConfig
	   * @type {function}
	   * @param {number} edge Edge of chart's values
	   * @returns {object} Configuration for performance hover chart`s Y axis
	   */
	  var performanceHoverYAxisConfig = function performanceHoverYAxisConfig(edge) {
	    return {
	      ticks: {
	        callback: function callback(label, index) {
	          return Math.round((edge - edge / 5 * index) * 10) / 10 + '%';
	        },
	
	        stepSize: 0.1,
	        fontColor: _constants.TRANSPARENT,
	        padding: ticksPadding,
	        min: 0,
	        max: 1
	      },
	      type: 'linear',
	      display: true,
	      position: 'right',
	      id: 'y-axis-4',
	      gridLines: {
	        color: _constants.TRANSPARENT,
	        display: false,
	        drawBorder: false
	      }
	    };
	  };
	
	  /**
	   * @description
	   * Selector which retrieves perfromance data out of store
	   * and converts it into chartjs suitable format
	   *
	   * @public
	   * @name getHoverSeries
	   * @type {function}
	   * @returns {object} Series object of performance data for hover area
	   */
	  var getHoverSeries = (0, _libWmComposeSelectors2.default)(isDataAvailable, portfolioPerformanceDataSelector, portfolioValuationDataSelector, activeItemSelector, function (dataAvailable, performanceData, valuationData, activeItem) {
	    if (!dataAvailable) {
	      return { labels: [], datasets: [] };
	    }
	
	    return {
	      labels: getLabels(valuationData.chartData),
	      datasets: [{
	        label: '',
	        data: performanceData.chartData.map(function () {
	          return 1;
	        }),
	        backgroundColor: performanceData.chartData.map(function (item, index) {
	          return index === activeItem ? hoverColor : _constants.TRANSPARENT;
	        }),
	        borderWidth: 0,
	        yAxisID: 'y-axis-3'
	      }],
	      updated: true
	    };
	  });
	
	  /**
	   * @description
	   * Configuration of hover chart area
	   *
	   * @public
	   * @name getHoverOptions
	   * @type {function}
	   * @param {object} state State of widget
	   * @returns {object} Configuration of hover chart area
	   */
	  var getHoverOptions = (0, _libWmComposeSelectors2.default)(isDataAvailable, portfolioPerformanceDataSelector, portfolioValuationDataSelector, function (dataAvailable, portfolioPerformanceData, valuationData) {
	    if (!dataAvailable) {
	      return null;
	    }
	
	    var variationSuggestedEdge = getVariationSuggestedEdge(valuationData.chartData);
	    var performanceSuggestedEdge = getPerformanceSuggestedEdge(portfolioPerformanceData.chartData);
	
	    return {
	      animation: false,
	      scales: {
	        yAxes: [variationHoverYAxisConfig(variationSuggestedEdge), performanceHoverYAxisConfig(performanceSuggestedEdge)],
	        xAxes: [{
	          ticks: {
	            callback: ticksCallback,
	            fontColor: _constants.TRANSPARENT
	          },
	          gridLines: {
	            display: false,
	            color: _constants.TRANSPARENT
	          }
	        }]
	      }
	    };
	  });
	
	  return {
	    getError: getError,
	    periods: periods,
	    getVariationOptions: getVariationOptions,
	    getPerformanceVariationSeries: getPerformanceVariationSeries,
	    setActivePeriod: setActivePeriod,
	    getDatePickerRange: getDatePickerRange,
	    chartPlugins: chartPlugins,
	    memoCtrl: memoCtrl,
	    getStartDateConfig: getStartDateConfig,
	    getEndDateConfig: getEndDateConfig,
	    getHoverSeries: getHoverSeries,
	    getHoverOptions: getHoverOptions,
	    isDataAvailable: isDataAvailable
	  };
	};
	
	exports.default = helpers;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// eslint-disable-next-line import/prefer-default-export
	var CSS_SELECTORS = exports.CSS_SELECTORS = {
	  valuationChartBar: '.chart-primary-background',
	  valuationChartBarPositive: '.chart-positive-color',
	  valuationChartBarNegative: '.chart-negative-color',
	  performanceChart: '.chart-primary-background',
	  performanceChartPrimary: '.chart-primary-color'
	};
	
	var TOOLTIP_SHIFT = exports.TOOLTIP_SHIFT = 15;
	var ARROW_WIDTH = exports.ARROW_WIDTH = 12;
	var POINT_RADIUS = exports.POINT_RADIUS = 4;
	var POINT_HIT_RADIUS = exports.POINT_HIT_RADIUS = 10;
	var LINE_TENSION = exports.LINE_TENSION = 0.1;
	var MAX_EDGE_MULTIPLIER = exports.MAX_EDGE_MULTIPLIER = 1.1;
	var TRANSPARENT = exports.TRANSPARENT = 'transparent';
	var REM_TO_PIXEL_RATIO = exports.REM_TO_PIXEL_RATIO = 16;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-wm-performance-variation-ng.js.map