(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("lib-bb-model-errors"), require("lib-wm-compose-selectors"), require("lib-bb-styles"), require("vendor-bb-angular-ng-aria"), require("ui-bb-chartjs-chart-line-ng"), require("ui-bb-dropdown-select-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-wm-performance-ng", ["ui-bb-loading-indicator-ng", "ui-bb-i18n-ng", "ui-bb-empty-state-ng", "lib-bb-model-errors", "lib-wm-compose-selectors", "lib-bb-styles", "vendor-bb-angular-ng-aria", "ui-bb-chartjs-chart-line-ng", "ui-bb-dropdown-select-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-wm-performance-ng"] = factory(require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("lib-bb-model-errors"), require("lib-wm-compose-selectors"), require("lib-bb-styles"), require("vendor-bb-angular-ng-aria"), require("ui-bb-chartjs-chart-line-ng"), require("ui-bb-dropdown-select-ng"));
	else
		root["ext-wm-performance-ng"] = factory(root["ui-bb-loading-indicator-ng"], root["ui-bb-i18n-ng"], root["ui-bb-empty-state-ng"], root["lib-bb-model-errors"], root["lib-wm-compose-selectors"], root["lib-bb-styles"], root["vendor-bb-angular-ng-aria"], root["ui-bb-chartjs-chart-line-ng"], root["ui-bb-dropdown-select-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_27__) {
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

	module.exports = __webpack_require__(25);

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
/* 6 */,
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.helpers = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(18);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(2);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbChartjsChartLineNg = __webpack_require__(26);
	
	var _uiBbChartjsChartLineNg2 = _interopRequireDefault(_uiBbChartjsChartLineNg);
	
	var _uiBbI18nNg = __webpack_require__(3);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(4);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBbDropdownSelectNg = __webpack_require__(27);
	
	var _uiBbDropdownSelectNg2 = _interopRequireDefault(_uiBbDropdownSelectNg);
	
	var _helpers = __webpack_require__(28);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var helpers = exports.helpers = _helpers2.default; /**
	                                                    * @module ext-wm-performance-ng
	                                                    *
	                                                    * @description
	                                                    * Portfolio performance, shows porftfolio performance indicators
	                                                    * in form of line chart
	                                                    *
	                                                    * @example
	                                                    * <!-- portfolio widget model.xml -->
	                                                    * <property name="extension" viewHint="text-input,admin">
	                                                    *  <value type="string">ext-wm-performance-ng</value>
	                                                    * </property>
	                                                    *
	                                                    */
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbLoadingIndicatorNg2.default, _uiBbChartjsChartLineNg2.default, _uiBbI18nNg2.default, _uiBbEmptyStateNg2.default, _uiBbDropdownSelectNg2.default];
	
	/**
	 * Performance type definition
	 * @typedef {Object} Performance
	 * @property {string}
	 */

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _errors;
	
	var _libBbStyles = __webpack_require__(15);
	
	var _libBbStyles2 = _interopRequireDefault(_libBbStyles);
	
	var _libBbModelErrors = __webpack_require__(8);
	
	var _libWmComposeSelectors = __webpack_require__(10);
	
	var _libWmComposeSelectors2 = _interopRequireDefault(_libWmComposeSelectors);
	
	var _constants = __webpack_require__(29);
	
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
	  top: (0, _libBbStyles2.default)('.p-0', 'paddingTop'),
	  bottom: (0, _libBbStyles2.default)('.p-4', 'paddingBottom'),
	  left: (0, _libBbStyles2.default)('.p-4', 'paddingLeft'),
	  right: (0, _libBbStyles2.default)('.p-4', 'paddingRight')
	};
	
	var chartPadding = {
	  top: chartPaddingStyles.top && chartPaddingStyles.top.length > 0 ? parseFloat(chartPaddingStyles.top) * _constants.REM_TO_PIXEL_RATIO : 0,
	  bottom: chartPaddingStyles.bottom && chartPaddingStyles.bottom.length > 0 ? parseFloat(chartPaddingStyles.bottom) * _constants.REM_TO_PIXEL_RATIO : 0,
	  left: chartPaddingStyles.left && chartPaddingStyles.left.length > 0 ? parseFloat(chartPaddingStyles.left) * _constants.REM_TO_PIXEL_RATIO : 0,
	  right: chartPaddingStyles.right && chartPaddingStyles.right.length > 0 ? parseFloat(chartPaddingStyles.right) * _constants.REM_TO_PIXEL_RATIO : 0
	};
	
	var tooltipCornerRadius = parseFloat((0, _libBbStyles2.default)('.rounded', 'borderRadius')) * _constants.REM_TO_PIXEL_RATIO;
	
	var ticksPadding = parseFloat((0, _libBbStyles2.default)('.p-3', 'padding')) * _constants.REM_TO_PIXEL_RATIO;
	
	var performanceChartColorPositive = (0, _libBbStyles2.default)(_constants.CSS_SELECTORS.performanceChartPositive, 'borderColor');
	var performanceChartColorNegative = (0, _libBbStyles2.default)(_constants.CSS_SELECTORS.performanceChartNegative, 'borderColor');
	var performanceChartBgPositive = (0, _libBbStyles2.default)(_constants.CSS_SELECTORS.performanceChartBgPositive, 'backgroundColor');
	var performanceChartBgNegative = (0, _libBbStyles2.default)(_constants.CSS_SELECTORS.performanceChartBgNegative, 'backgroundColor');
	
	/**
	 * @description
	 * Prototype for performance series
	 *
	 * @private
	 * @name performanceSeriesPrototype
	 * @type {object}
	 *
	 */
	var performanceSeriesPrototype = {
	  labels: [],
	  datasets: [{
	    borderColor: performanceChartColorPositive,
	    backgroundColor: performanceChartBgPositive,
	    pointBorderColor: [],
	    pointBackgroundColor: [],
	    pointRadius: [],
	    pointBorderWidth: 0,
	    pointHitRadius: _constants.POINT_HIT_RADIUS,
	    lineTension: _constants.LINE_TENSION,
	    fill: true,
	    data: []
	  }]
	};
	
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
	  var month3ago = new Date();
	  var month6ago = new Date();
	  var month12ago = new Date();
	
	  var startOfYear = new Date(today.getFullYear(), 0, 1);
	  month3ago.setMonth(today.getMonth() - 3);
	  month6ago.setMonth(today.getMonth() - 6);
	  month12ago.setMonth(today.getMonth() - 12);
	
	  return [{
	    i18nKey: 'performance.period.12months',
	    value: { dateTo: today, dateFrom: month12ago }
	  }, {
	    i18nKey: 'performance.period.6months',
	    value: { dateTo: today, dateFrom: month6ago }
	  }, {
	    i18nKey: 'performance.period.3months',
	    value: { dateTo: today, dateFrom: month3ago }
	  }, {
	    i18nKey: 'performance.period.ytd',
	    value: { dateTo: today, dateFrom: startOfYear }
	  }];
	};
	
	/**
	 * @description
	 * Populates datasets with bar`s color depending on value sign
	 *
	 * @private
	 * @name processVariationLineColor
	 * @type {function}
	 * @param {object} series Chart series to extend datasets in
	 * @param {number} value Value to decide which color to use
	 *
	 */
	var processPerformanceLineColor = function processPerformanceLineColor(datasets, value, unshift) {
	  var color = value < 0 ? performanceChartColorNegative : performanceChartColorPositive;
	  datasets.pointBackgroundColor[unshift ? 'unshift' : 'push'](color);
	  datasets.pointBorderColor[unshift ? 'unshift' : 'push'](color);
	};
	
	/**
	 * @description
	 * Set colors to dataset line chart depending on value sign
	 *
	 * @private
	 * @name setDataSetColor
	 * @type {function}
	 * @param {object} dataset Chart dataset
	 * @param {number} value Value to decide which color to use
	 *
	 */
	var setDataSetColor = function setDataSetColor(dataset, value) {
	  var data = dataset;
	  if (value < 0) {
	    data.backgroundColor = performanceChartBgNegative;
	    data.borderColor = performanceChartColorNegative;
	  }
	};
	
	/**
	 * @description
	 * Find x value with y = 0
	 *
	 * @private
	 * @name findXOnZero
	 * @type {function}
	 * @param {object} { x: x1, y: y1 } Point with x: x1, y: y1 coordinates
	 * @param {object} { x: x2, y: y2 } Point with x: x2, y: y2 coordinates
	 *
	 * @returns {number} x value coordinate with y = 0
	 */
	var findXOnZero = function findXOnZero(_ref, _ref2) {
	  var x1 = _ref.x,
	      y1 = _ref.y;
	  var x2 = _ref2.x,
	      y2 = _ref2.y;
	  return -y1 * (x2 - x1) / (y2 - y1) + x1;
	};
	
	/**
	 * @description
	 * Check if values have different sign
	 *
	 * @private
	 * @name differentSign
	 * @type {function}
	 * @param {number} value1 Chart dataset
	 * @param {number} value2 Value to decide which color to use
	 *
	 * @returns {boolean}
	 */
	var differentSign = function differentSign(value1, value2) {
	  return value1 > 0 && value2 < 0 || value1 < 0 && value2 > 0;
	};
	
	/**
	 * @description
	 * Populates datasets and labels.
	 *
	 * @private
	 * @name processLabelAndValue
	 * @type {function}
	 * @param {object} series Chart series to extend datasets and labels in
	 * @param {string} dateFrom Date to display value from
	 * @param {string} dateTo Date to display value to
	 * @param {value} value Value to display in chart
	 *
	 */
	var processLabelAndValue = function processLabelAndValue(series, dateFrom, dateTo, value) {
	  var xOnZeroY = void 0;
	  var label = (new Date(dateFrom).getTime() + new Date(dateTo).getTime()) / 2;
	  var lastLabel = series.labels[series.labels.length - 1];
	  var lastDataset = series.datasets[series.datasets.length - 1];
	  var previousValue = lastDataset.data[lastDataset.data.length - 1];
	  var previousValuePresent = typeof previousValue !== 'undefined';
	
	  /**
	   * @description
	   * Object options for dataset
	   *
	   * @private
	   * @name datasetOptions
	   * @type {object}
	   *
	   */
	  var datasetOptions = {
	    data: [{
	      x: label,
	      y: value
	    }],
	    borderColor: performanceChartColorPositive,
	    backgroundColor: performanceChartBgPositive,
	    pointBorderColor: [],
	    pointBackgroundColor: []
	  };
	
	  if (value !== 0 && previousValuePresent && differentSign(value, previousValue.y)) {
	    xOnZeroY = findXOnZero({ x: lastLabel, y: previousValue.y }, { x: label, y: value });
	
	    series.labels.push(xOnZeroY);
	    lastDataset.data.push({
	      x: xOnZeroY,
	      y: 0
	    });
	    lastDataset.pointRadius.push(0);
	    processPerformanceLineColor(lastDataset, 0);
	  } else {
	    lastDataset.data.push({
	      x: label,
	      y: value
	    });
	
	    lastDataset.pointRadius.push(_constants.POINT_RADIUS);
	    processPerformanceLineColor(lastDataset, value);
	
	    setDataSetColor(lastDataset, value);
	  }
	
	  series.labels.push(label);
	
	  if (value === 0 && previousValuePresent && previousValue.y !== 0) {
	    var newDataset = Object.assign({}, lastDataset, datasetOptions, {
	      pointRadius: [0]
	    });
	    processPerformanceLineColor(newDataset, value);
	
	    series.datasets.push(newDataset);
	  }
	
	  if (previousValuePresent && differentSign(value, previousValue.y)) {
	    var _newDataset = Object.assign({}, lastDataset, datasetOptions, {
	      pointRadius: []
	    });
	
	    processPerformanceLineColor(_newDataset, value);
	
	    if (xOnZeroY) {
	      _newDataset.data.unshift({
	        x: xOnZeroY,
	        y: 0
	      });
	      processPerformanceLineColor(_newDataset, 0, true);
	      _newDataset.pointRadius.push(0);
	    }
	
	    series.datasets.push(_newDataset);
	    _newDataset.pointRadius.push(_constants.POINT_RADIUS);
	    setDataSetColor(_newDataset, value);
	  }
	};
	
	/**
	 * @description
	 * Transforms loaded performance data into structure applicable for performance chart
	 *
	 * @private
	 * @name transformPerformance
	 * @type {function}
	 * @param {object} data Loaded performance data
	 *
	 * @returns {object} Performance data in format applicable for performance chart
	 */
	var transformPerformance = function transformPerformance(data) {
	  return data && data.chartData && data.chartData.reduce(function (series, item) {
	    processLabelAndValue(series, item.dateFrom, item.dateTo, item.value);
	    return series;
	  }, angular.copy(performanceSeriesPrototype));
	};
	
	var helpers = function helpers(_ref3) {
	  var $filter = _ref3.$filter,
	      stateContainer = _ref3.stateContainer;
	
	  var dateFilter = $filter('date');
	
	  /**
	   * @description
	   * Configuration of performance chart
	   *
	   * @public
	   * @name chartPerformanceOptions
	   * @type {function}
	   * @returns {object} Configuration of performance chart
	   */
	  var chartPerformanceOptions = function chartPerformanceOptions(data) {
	    var maxX = 0;
	    if (data) {
	      maxX = Math.max.apply(Math, _toConsumableArray(data.chartData.map(function (item) {
	        return new Date(item.dateTo);
	      })));
	    }
	
	    return {
	      tooltips: {
	        enabled: true,
	        cornerRadius: tooltipCornerRadius,
	        displayColors: false,
	        callbacks: {
	          title: function title() {},
	          label: function label(tooltipItem) {
	            return tooltipItem.yLabel + ' %, ' + dateFilter(tooltipItem.xLabel, 'MMM y');
	          }
	        }
	      },
	      hover: {
	        mode: null
	      },
	      scales: {
	        yAxes: [{
	          ticks: {
	            callback: function callback(label) {
	              return Math.round(label * 100) / 100 + '%';
	            },
	
	            padding: ticksPadding
	          }
	        }],
	        xAxes: [{
	          type: 'time',
	          time: {
	            unit: 'month',
	            displayFormats: {
	              month: 'MMM, YYYY'
	            },
	            max: maxX
	          },
	          afterTickToLabelConversion: function afterTickToLabelConversion(scaleInstance) {
	            scaleInstance.ticks.splice(-1, 1);
	          }
	        }]
	      },
	      layout: {
	        padding: chartPadding
	      }
	    };
	  };
	
	  /**
	   * @name performanceDataSelector
	   * @inner
	   * @description Selector for getting performance data from state
	   * @type function
	   * @returns {Array} Performance data
	   */
	  var performanceDataSelector = stateContainer.createSelector(function (state) {
	    return state.portfolioPerformance.data;
	  });
	
	  /**
	   * @description
	   * Selector for performance chart options
	   *
	   * @public
	   * @name getChartPerformanceOptions
	   * @type {function}
	   * @returns {object} Performance chart options
	   */
	  var getChartPerformanceOptions = (0, _libWmComposeSelectors2.default)(performanceDataSelector, chartPerformanceOptions);
	
	  /**
	   * @description
	   * Selector for performance data transformation into data applicable for chart
	   *
	   * @public
	   * @name performanceData
	   * @type {function}
	   */
	  var performanceData = (0, _libWmComposeSelectors2.default)(performanceDataSelector, transformPerformance);
	
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
	   * Align dropdown to the right side instead of default left side
	   *
	   * @public
	   * @name changeDropdownSide
	   * @type {function}
	   */
	  var changeDropdownSide = function changeDropdownSide() {
	    // eslint-disable-next-line no-undef
	    document.querySelector('.dropdown-menu').classList.add('dropdown-menu-right');
	  };
	
	  return {
	    chartPerformanceOptions: chartPerformanceOptions,
	    PERIOD: getPeriods(),
	    performanceData: performanceData,
	    getChartPerformanceOptions: getChartPerformanceOptions,
	    getError: getError,
	    changeDropdownSide: changeDropdownSide
	  };
	};
	
	exports.default = helpers;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// eslint-disable-next-line import/prefer-default-export
	var CSS_SELECTORS = exports.CSS_SELECTORS = {
	  performanceChart: '.chart-primary-background',
	  performanceChartPositive: '.chart-positive-border',
	  performanceChartBgPositive: '.chart-positive-light-background',
	  performanceChartNegative: '.chart-negative-border',
	  performanceChartBgNegative: '.chart-negative-light-background'
	};
	
	var POINT_RADIUS = exports.POINT_RADIUS = 4;
	var POINT_HIT_RADIUS = exports.POINT_HIT_RADIUS = 10;
	var LINE_TENSION = exports.LINE_TENSION = 0.1;
	var REM_TO_PIXEL_RATIO = exports.REM_TO_PIXEL_RATIO = 16;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-wm-performance-ng.js.map