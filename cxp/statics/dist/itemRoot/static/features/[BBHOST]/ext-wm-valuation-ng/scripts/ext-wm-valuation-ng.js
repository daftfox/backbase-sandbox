(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-format-amount-ng"), require("lib-bb-model-errors"), require("lib-wm-compose-selectors"), require("lib-bb-styles"), require("vendor-bb-angular-ng-aria"), require("ui-bb-dropdown-select-ng"), require("ui-bb-chartjs-chart-bar-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-wm-valuation-ng", ["ui-bb-loading-indicator-ng", "ui-bb-i18n-ng", "ui-bb-empty-state-ng", "ui-bb-format-amount-ng", "lib-bb-model-errors", "lib-wm-compose-selectors", "lib-bb-styles", "vendor-bb-angular-ng-aria", "ui-bb-dropdown-select-ng", "ui-bb-chartjs-chart-bar-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-wm-valuation-ng"] = factory(require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-format-amount-ng"), require("lib-bb-model-errors"), require("lib-wm-compose-selectors"), require("lib-bb-styles"), require("vendor-bb-angular-ng-aria"), require("ui-bb-dropdown-select-ng"), require("ui-bb-chartjs-chart-bar-ng"));
	else
		root["ext-wm-valuation-ng"] = factory(root["ui-bb-loading-indicator-ng"], root["ui-bb-i18n-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-format-amount-ng"], root["lib-bb-model-errors"], root["lib-wm-compose-selectors"], root["lib-bb-styles"], root["vendor-bb-angular-ng-aria"], root["ui-bb-dropdown-select-ng"], root["ui-bb-chartjs-chart-bar-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_31__) {
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

	module.exports = __webpack_require__(75);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ }),

/***/ 75:
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
	
	var _helpers = __webpack_require__(76);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-wm-valuation-ng
	 *
	 * @description
	 * Default extension for valuation widget.
	 *
	 *
	 * @requires ui-bb-chartjs-chart-bar-ng
	 * @requires ui-bb-dropdown-select
	 * @example
	 * <!-- valuation widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-wm-valuation-ng</value>
	 * </property>
	 *
	 */
	
	var helpers = exports.helpers = _helpers2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbFormatAmountNg2.default, _vendorBbAngularNgAria2.default, _uiBbLoadingIndicatorNg2.default, _uiBbChartjsChartBarNg2.default, _uiBbDropdownSelectNg2.default, _uiBbI18nNg2.default, _uiBbEmptyStateNg2.default];
	
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

/***/ 76:
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
	
	var _constants = __webpack_require__(77);
	
	var _constants2 = __webpack_require__(78);
	
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
	
	var chartPaddingStyles = {
	  top: (0, _libBbStyles2.default)('.p-4', 'paddingTop'),
	  bottom: (0, _libBbStyles2.default)('.p-4', 'paddingBottom'),
	  left: (0, _libBbStyles2.default)('.p-4', 'paddingLeft'),
	  right: (0, _libBbStyles2.default)('.p-4', 'paddingRight')
	};
	
	var chartPadding = {
	  top: chartPaddingStyles.top && chartPaddingStyles.top.length > 0 ? parseFloat(chartPaddingStyles.top) * 16 : 0,
	  bottom: chartPaddingStyles.bottom && chartPaddingStyles.bottom.length > 0 ? parseFloat(chartPaddingStyles.bottom) * 16 : 0,
	  left: chartPaddingStyles.left && chartPaddingStyles.left.length > 0 ? parseFloat(chartPaddingStyles.left) * 16 : 0,
	  right: chartPaddingStyles.right && chartPaddingStyles.right.length > 0 ? parseFloat(chartPaddingStyles.right) * 16 : 0
	};
	
	var tooltipCornerRadius = parseFloat((0, _libBbStyles2.default)('.rounded', 'borderRadius')) * 16;
	
	var ticksPadding = parseFloat((0, _libBbStyles2.default)('.p-3', 'padding')) * 16;
	
	/**
	 * @description
	 * Generates periods to be displayed in periods select
	 *
	 * @public
	 * @name getPeriods
	 * @type {function}
	 *
	 * @returns {Array} Periods to be used in periods select
	 */
	var getPeriods = function getPeriods() {
	  var today = new Date();
	
	  var month1ago = new Date();
	  month1ago.setMonth(today.getMonth() - 1);
	
	  var month3ago = new Date();
	  month3ago.setMonth(today.getMonth() - 3);
	
	  var month6ago = new Date(today);
	  month6ago.setMonth(today.getMonth() - 6);
	
	  var month12ago = new Date(today);
	  month12ago.setMonth(today.getMonth() - 12);
	
	  return [{
	    i18nKey: 'valuation.period.12months',
	    value: { dateTo: today, dateFrom: month12ago }
	  }, {
	    i18nKey: 'valuation.period.6months',
	    value: { dateTo: today, dateFrom: month6ago }
	  }, {
	    i18nKey: 'valuation.period.3months',
	    value: { dateTo: today, dateFrom: month3ago }
	  }, {
	    i18nKey: 'valuation.period.1month',
	    value: { dateTo: today, dateFrom: month1ago }
	  }];
	};
	
	var GRANULARITY_DAILY = 'daily';
	var GRANULARITY_WEEKLY = 'weekly';
	var GRANULARITY_MONTHLY = 'monthly';
	var GRANULARITY_QUARTERLY = 'quarterly';
	
	/**
	 * @description
	 * List of granularity options to be used in granularity select
	 *
	 * @public
	 * @name GRANULARITY
	 * @type {array}
	 */
	var GRANULARITY = [{
	  i18nKey: 'valuation.granularity.daily',
	  value: GRANULARITY_DAILY
	}, {
	  i18nKey: 'valuation.granularity.weekly',
	  value: GRANULARITY_WEEKLY
	}, {
	  i18nKey: 'valuation.granularity.monthly',
	  value: GRANULARITY_MONTHLY
	}, {
	  i18nKey: 'valuation.granularity.quarterly',
	  value: GRANULARITY_QUARTERLY
	}];
	
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
	
	var helpers = function helpers(_ref) {
	  var $filter = _ref.$filter,
	      getRule = _ref.getRule,
	      stateContainer = _ref.stateContainer,
	      widget = _ref.widget;
	
	  var dateFilter = $filter('date');
	  var currencyFilter = $filter('currency');
	  var getSymbol = function getSymbol(code) {
	    return getRule(code).symbol || code;
	  };
	
	  var valuationChartBarColor = (0, _libBbStyles2.default)(_constants.CSS_SELECTORS.valuationChartBar, 'backgroundColor');
	  var valuationChartBarColorPositive = (0, _libBbStyles2.default)(_constants.CSS_SELECTORS.valuationChartBarPositive, 'backgroundColor');
	  var valuationChartBarColorNegative = (0, _libBbStyles2.default)(_constants.CSS_SELECTORS.valuationChartBarNegative, 'backgroundColor');
	
	  /**
	   * @description
	   * Prototype for valuation datasets
	   *
	   * @private
	   * @name valuationDataSetPrototype
	   * @type {object}
	   *
	   */
	  var valuationDataSetPrototype = {
	    label: 'Valuation',
	    backgroundColor: valuationChartBarColor,
	    borderWidth: 0,
	    yAxisID: 'y-axis-1',
	    data: []
	  };
	
	  /**
	   * @description
	   * Prototype for variation datasets
	   *
	   * @private
	   * @name variationDataSetPrototype
	   * @type {object}
	   *
	   */
	  var variationDataSetPrototype = {
	    label: 'Variation',
	    backgroundColor: [],
	    borderWidth: 0,
	    yAxisID: 'y-axis-1',
	    data: []
	  };
	
	  /**
	   * @description
	   * Populates datasets and labels.
	   *
	   * @private
	   * @name processLabelAndValue
	   * @type {function}
	   * @param {BBSeries} series Chart series to extend datasets and labels in
	   * @param {string | Date} Date to display value from
	   * @param {string | Date} Date to display value to
	   * @param {value} value Value to display in chart
	   *
	   */
	  var processLabelAndValue = function processLabelAndValue(series, dateFrom, dateTo, value) {
	    series.labels.push((new Date(dateFrom).getTime() + new Date(dateTo).getTime()) / 2);
	    series.datasets[0].data.push(value);
	  };
	
	  /**
	   * @description
	   * Populates datasets with bar`s color depending on value sign
	   *
	   * @private
	   * @name processVariationBarColor
	   * @type {function}
	   * @param {BBSeries} series Chart series to extend datasets in
	   * @param {number} value Value to decide which color to use
	   *
	   */
	  var processVariationBarColor = function processVariationBarColor(series, value) {
	    var color = value > 0 ? valuationChartBarColorPositive : valuationChartBarColorNegative;
	    series.datasets[0].backgroundColor.push(color);
	  };
	
	  /**
	   * @description
	   * Transforms loaded valuation data into structure applicable for valuation chart
	   *
	   * @private
	   * @name transformValuation
	   * @type {function}
	   * @param {object} data Loaded valuation data
	   *
	   * @returns {BBSeries} Valuation data in format applicable for valuation chart
	   */
	  var transformValuation = function transformValuation(data) {
	    return data && data.chartData && data.chartData.reduce(function (series, item) {
	      processLabelAndValue(series, item.dateFrom, item.dateTo, item.value.amount);
	      return series;
	    }, {
	      labels: [],
	      datasets: [angular.copy(valuationDataSetPrototype)],
	      original: data,
	      updated: true
	    });
	  };
	
	  /**
	   * @description
	   * Transforms loaded valuation data into structure applicable for variation chart
	   *
	   * @private
	   * @name transformVariation
	   * @type {function}
	   * @param {object} data Loaded valuation data
	   *
	   * @returns {BBSeries} Valuation data in format applicable for variation chart
	   */
	  var transformVariation = function transformVariation(data) {
	    return data && data.chartData && data.chartData.reduce(function (series, item) {
	      processLabelAndValue(series, item.dateFrom, item.dateTo, item.valuePct);
	      processVariationBarColor(series, item.valuePct);
	      return series;
	    }, {
	      labels: [],
	      datasets: [angular.copy(variationDataSetPrototype)],
	      original: data,
	      updated: true
	    });
	  };
	
	  /**
	   * @description Data in format applicable for charts
	   * @typedef {object} ValuationChartsData
	   * @property {BBSeries} data series for charts
	   * @property {BBSeries} data series for charts
	   */
	
	  /**
	   * @name valuationDataStateSelector
	   * @inner
	   * @description Selector for getting valuation data from state
	   * @type function
	   * @returns {Array} Valuation data
	   */
	  var valuationDataStateSelector = stateContainer.createSelector(function (state) {
	    return state.valuation.data;
	  });
	
	  /**
	   * @description
	   * Transforms loaded valuation data into structure applicable for charts
	   *
	   * @public
	   * @name valuationData
	   * @type {function}
	   * @param {object} data Loaded valuation data
	   * @returns {ValuationChartsData} Valuation data in format applicable for charts
	   */
	  var valuationData = (0, _libWmComposeSelectors2.default)(valuationDataStateSelector, function (data) {
	    return {
	      valuation: transformValuation(data),
	      variation: transformVariation(data)
	    };
	  });
	
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
	  var getGranularity = stateContainer.createSelector(function (state) {
	    return state.valuation.granularity;
	  });
	
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
	   * Whether
	   *
	   * @private
	   * @name valuationYAxisConfig
	   * @type {object}
	   */
	  var isValuation = function isValuation(route) {
	    return route.name === _constants2.VALUATION_ROUTE;
	  };
	
	  /**
	   * @description
	   * Configuration for valuation chart`s Y axis
	   *
	   * @private
	   * @name valuationYAxisConfig
	   * @type {object}
	   */
	  var valuationYAxisConfig = {
	    ticks: {
	      beginAtZero: true,
	      callback: function callback(label) {
	        var value = label / 1000000;
	        if (value === 0) {
	          return '' + value;
	        }
	        return value < 1 ? value.toFixed(2) + 'M' : Math.round(value) + 'M';
	      },
	
	      padding: ticksPadding
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
	
	  /**
	   * @description
	   * Configuration for variation chart`s Y axis
	   *
	   * @private
	   * @name variationYAxisConfig
	   * @type {function}
	   * @returns {object} Configuration for variation chart`s Y axis
	   */
	  var variationYAxisConfig = function variationYAxisConfig(data) {
	    var min = 0;
	    var max = 0;
	    if (data) {
	      min = Math.min.apply(Math, _toConsumableArray(data.chartData.map(function (item) {
	        return item.valuePct;
	      })));
	      max = Math.max.apply(Math, _toConsumableArray(data.chartData.map(function (item) {
	        return item.valuePct;
	      })));
	    }
	    var suggestedMin = min === 0 ? 0 : Math.floor(min) - 1;
	    var suggestedMax = Math.floor(max) + 1;
	
	    return {
	      ticks: {
	        callback: function callback(label) {
	          return label + '%';
	        },
	
	        padding: ticksPadding,
	        suggestedMin: suggestedMin,
	        suggestedMax: suggestedMax
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
	   * Configuration of valuation chart
	   *
	   * @public
	   * @name chartValuationOptions
	   * @type {object}
	   */
	  var chartValuationOptions = {
	    tooltips: {
	      enabled: true,
	      position: 'average',
	      xAlign: 'center',
	      yAlign: 'bottom',
	      cornerRadius: tooltipCornerRadius,
	      displayColors: false,
	      callbacks: {
	        title: function title() {},
	        label: function label(tooltipItem, data) {
	          var currencyCode = data.original.chartData[0].value.currencyCode;
	
	          var value = currencyFilter(tooltipItem.yLabel, getSymbol(currencyCode));
	          var granularity = getGranularity();
	
	          var initXLabel = data.labels[tooltipItem.index];
	          var filter = GRANULARITY_TO_DATE_FORMAT[granularity];
	          var date = dateFilter(initXLabel, filter);
	
	          return value + ' - ' + date;
	        }
	      }
	    },
	    hover: {
	      mode: null
	    },
	    scales: {
	      yAxes: [valuationYAxisConfig],
	      xAxes: [{
	        ticks: {
	          callback: ticksCallback
	        }
	      }]
	    },
	    layout: {
	      padding: chartPadding
	    }
	  };
	
	  /**
	   * @description
	   * Configuration of variation chart
	   *
	   * @public
	   * @name chartVariationOptions
	   * @type {function}
	   * @returns {object} Configuration of variation chart
	   */
	  var chartVariationOptions = function chartVariationOptions(valuation) {
	    return {
	      tooltips: {
	        enabled: true,
	        xAlign: 'center',
	        yAlign: 'bottom',
	        cornerRadius: tooltipCornerRadius,
	        displayColors: false,
	        callbacks: {
	          title: function title() {},
	          label: function label(tooltipItem, data) {
	            var initLabel = data.labels[tooltipItem.index];
	            var granularity = getGranularity();
	            var filter = GRANULARITY_TO_DATE_FORMAT[granularity];
	            return tooltipItem.yLabel + ' %, ' + dateFilter(initLabel, filter);
	          }
	        }
	      },
	      hover: {
	        mode: null
	      },
	      scales: {
	        yAxes: [variationYAxisConfig(valuation)],
	        xAxes: [{
	          ticks: {
	            callback: ticksCallback
	          }
	        }]
	      },
	      layout: {
	        padding: chartPadding
	      }
	    };
	  };
	
	  /**
	   * @description
	   * Gets options for variation chart
	   *
	   * @public
	   * @name getVariationOptions
	   * @type {function}
	   * @returns {object} Variation chart options
	   */
	  var getVariationOptions = (0, _libWmComposeSelectors2.default)(valuationDataStateSelector, chartVariationOptions);
	
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
	   * Detects whether both charts (valuation and variation) should be displayed to user
	   *
	   * @public
	   * @name areBothChartsDisplayed
	   * @type {function}
	   * @returns {boolean}
	   */
	  var areBothChartsDisplayed = function areBothChartsDisplayed() {
	    return widget.getBooleanPreference(_constants2.Preferences.DISPLAY_VALUATION_CHART) && widget.getBooleanPreference(_constants2.Preferences.DISPLAY_VARIATION_CHART);
	  };
	
	  return {
	    getError: getError,
	    chartValuationOptions: chartValuationOptions,
	    GRANULARITY: GRANULARITY,
	    PERIOD: getPeriods(),
	    valuationData: valuationData,
	    isValuation: isValuation,
	    areBothChartsDisplayed: areBothChartsDisplayed,
	    getVariationOptions: getVariationOptions
	  };
	};
	
	exports.default = helpers;

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// eslint-disable-next-line import/prefer-default-export
	var CSS_SELECTORS = exports.CSS_SELECTORS = {
	  valuationChartBar: '.chart-primary-background',
	  valuationChartBarPositive: '.chart-positive-background',
	  valuationChartBarNegative: '.chart-negative-background'
	};

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name VALUATION_ROUTE
	 * @type {string}
	 * @description
	 * Constant for valuation route
	 */
	var VALUATION_ROUTE = exports.VALUATION_ROUTE = 'VALUATION_ROUTE';
	/**
	 * @name VARIATION_ROUTE
	 * @type {string}
	 * @description
	 * Constant for variation route
	 */
	var VARIATION_ROUTE = exports.VARIATION_ROUTE = 'VARIATION_ROUTE';
	
	/**
	 * @name Preferences
	 * @type {Object}
	 * @description
	 * Const for widget properties/preferences
	 */
	var Preferences = exports.Preferences = {
	  DISPLAY_VALUATION_CHART: 'displayValuationChart',
	  DISPLAY_VARIATION_CHART: 'displayVariationChart'
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-wm-valuation-ng.js.map