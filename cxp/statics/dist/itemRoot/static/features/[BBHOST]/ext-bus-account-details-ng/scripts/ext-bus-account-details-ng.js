(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-substitute-error-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("vendor-bb-uib-tooltip"), require("ui-bus-format-amount-ng"), require("ui-bb-chartjs-chart-line-ng"), require("ui-bb-navigate-to-ng"), require("ui-bb-loading-overlay-ng"), require("lib-bb-styles"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bus-account-details-ng", ["vendor-bb-angular-ng-aria", "ui-bb-substitute-error-ng", "ui-bb-i18n-ng", "ui-bb-empty-state-ng", "vendor-bb-uib-tooltip", "ui-bus-format-amount-ng", "ui-bb-chartjs-chart-line-ng", "ui-bb-navigate-to-ng", "ui-bb-loading-overlay-ng", "lib-bb-styles"], factory);
	else if(typeof exports === 'object')
		exports["ext-bus-account-details-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-substitute-error-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("vendor-bb-uib-tooltip"), require("ui-bus-format-amount-ng"), require("ui-bb-chartjs-chart-line-ng"), require("ui-bb-navigate-to-ng"), require("ui-bb-loading-overlay-ng"), require("lib-bb-styles"));
	else
		root["ext-bus-account-details-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-substitute-error-ng"], root["ui-bb-i18n-ng"], root["ui-bb-empty-state-ng"], root["vendor-bb-uib-tooltip"], root["ui-bus-format-amount-ng"], root["ui-bb-chartjs-chart-line-ng"], root["ui-bb-navigate-to-ng"], root["ui-bb-loading-overlay-ng"], root["lib-bb-styles"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_61__, __WEBPACK_EXTERNAL_MODULE_62__, __WEBPACK_EXTERNAL_MODULE_63__, __WEBPACK_EXTERNAL_MODULE_64__, __WEBPACK_EXTERNAL_MODULE_66__) {
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

	module.exports = __webpack_require__(60);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

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

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(2);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _vendorBbUibTooltip = __webpack_require__(15);
	
	var _vendorBbUibTooltip2 = _interopRequireDefault(_vendorBbUibTooltip);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(5);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBusFormatAmountNg = __webpack_require__(61);
	
	var _uiBusFormatAmountNg2 = _interopRequireDefault(_uiBusFormatAmountNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(10);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBbChartjsChartLineNg = __webpack_require__(62);
	
	var _uiBbChartjsChartLineNg2 = _interopRequireDefault(_uiBbChartjsChartLineNg);
	
	var _uiBbNavigateToNg = __webpack_require__(63);
	
	var _uiBbNavigateToNg2 = _interopRequireDefault(_uiBbNavigateToNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(64);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _helpers = __webpack_require__(65);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _hooks = __webpack_require__(68);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _vendorBbUibTooltip2.default, _uiBbSubstituteErrorNg2.default, _uiBbI18nNg2.default, _uiBusFormatAmountNg2.default, _uiBbEmptyStateNg2.default, _uiBbChartjsChartLineNg2.default, _uiBbNavigateToNg2.default, _uiBbLoadingOverlayNg2.default]; /**
	                                                                                                                                                                                                                                                                                                                                * @module ext-bus-account-details-ng
	                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                * @description
	                                                                                                                                                                                                                                                                                                                                * Extension for account details
	                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                */
	var hooks = exports.hooks = extHooks;
	
	var helpers = exports.helpers = _helpers2.default;

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_61__;

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_62__;

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_63__;

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_64__;

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libBbStyles = __webpack_require__(66);
	
	var _libBbStyles2 = _interopRequireDefault(_libBbStyles);
	
	var _constants = __webpack_require__(67);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var helpers = function helpers(context) {
	  var dateFilter = context.$filter('date');
	  var i18nFilter = context.$filter('i18n');
	
	  var productTypeTemplateNameMap = {
	    'credit-card': 'credit-card',
	    'debit-card': 'debit-card',
	    'investment-account': 'investment',
	    loan: 'loan',
	    'current-account': 'current',
	    'savings-account': 'savings',
	    'term-deposit': 'term-deposit'
	  };
	
	  /**
	   * @description
	   * Generates account details template URL
	   * @name getProductTypeTemplateId
	   * @type {function}
	   * @param  {string} type The account type
	   * @return {string}      Generated template URL
	   */
	  var getProductTypeTemplateId = function getProductTypeTemplateId(type) {
	    var templateName = productTypeTemplateNameMap[type.trim().toLowerCase().split(' ').join('-')];
	    return 'account-details/' + templateName + '.html';
	  };
	
	  /**
	   * @description
	   * Transforms a boolean into human readable format
	   * @name formatBooleanToText
	   * @type {function}
	   * @param  {boolean} value The boolean value
	   * @return {string}        Formatted booelan
	   */
	  var formatBooleanToText = function formatBooleanToText(value) {
	    return value ? 'yes' : 'no';
	  };
	
	  /**
	   * @description
	   * Check if value is defined, not null and not empty
	   * @name hasValue
	   * @type {function}
	   * @param  {*} value  The value to check
	   * @return {boolean}
	   */
	  var hasValue = function hasValue(value) {
	    return typeof value !== 'undefined' && value !== null && value !== '';
	  };
	
	  var frequencyUnitKeyPrefix = 'accounts.detail.frequency';
	  var frequencyUnits = {
	    D: frequencyUnitKeyPrefix + '.day',
	    W: frequencyUnitKeyPrefix + '.week',
	    M: frequencyUnitKeyPrefix + '.month',
	    Y: frequencyUnitKeyPrefix + '.year'
	  };
	  /**
	   * @description
	   * Gets the translation key giving a frequency unit identifier
	   * @name getFrequencyUnitKey
	   * @type {function}
	   * @param  {string} unit  Short representation of frequency unit.
	   *                        Possbile values are:
	   *                        D - day
	   *                        W - week
	   *                        M - month
	   *                        Y - year
	   * @return {string} Translation key label
	   */
	  var getFrequencyUnitKey = function getFrequencyUnitKey(unit) {
	    return frequencyUnits[unit] || '';
	  };
	
	  /**
	   * @description
	   * Checks if it is an array and it is empty
	   * @name isEmptyArray
	   * @type {function}
	   * @param {*} value The value to check
	   * @return {boolean}
	   */
	  var isEmptyArray = function isEmptyArray(value) {
	    return !(Array.isArray(value) && Boolean(value.length));
	  };
	
	  /**
	   * @description
	   * Configuration object of balance history chart
	   *
	   * @inner
	   * @name lineChartOptionsInner
	   * @type {object}
	   * @returns {object} Configuration object of performance chart
	   */
	  var lineChartOptionsInner = {
	    legend: {
	      display: false
	    },
	    tooltips: {
	      enabled: true,
	      displayColors: false,
	      callbacks: {
	        title: function title() {},
	        label: function label(tooltipItem) {
	          return '(' + tooltipItem.yLabel + ')  ' + dateFilter(tooltipItem.xLabel, 'mediumDate');
	        }
	      }
	    },
	    scales: {
	      yAxes: [{
	        gridLines: {
	          display: true,
	          zeroLineColor: (0, _libBbStyles2.default)(_constants.CSS_SELECTORS.yAxisZeroColor, 'color'),
	          zeroLineWidth: _constants.CHART_OPTIONS.zeroLineWidth
	        }
	      }],
	      xAxes: [{
	        ticks: {
	          callback: function callback(label) {
	            return '' + dateFilter(label, 'short');
	          }
	        }
	      }]
	    },
	    layout: {
	      padding: _constants.CHART_OPTIONS.paddings
	    },
	    responsive: true,
	    maintainAspectRatio: false
	  };
	
	  /**
	   * @description
	   * Configuration of balance history chart
	   *
	   * @public
	   * @name lineChartOptions
	   * @type {function}
	   * @returns {object} Configuration of performance chart
	   */
	  var lineChartOptions = function lineChartOptions($ctrl) {
	    var currency = $ctrl.state.accounts.selected.currency;
	    lineChartOptionsInner.tooltips.callbacks.label = function (tooltipItem) {
	      return (
	        // eslint-disable-next-line max-len
	        '(' + currency + ' ' + tooltipItem.yLabel.toFixed(2) + ') ' + dateFilter(tooltipItem.xLabel, 'mediumDate')
	      );
	    };
	    return lineChartOptionsInner;
	  };
	
	  /**
	   * @description
	   * Array of plugins used to transform Chart.js rendering in the extension
	   *
	   * @name chartPlugins
	   * @type {array}
	   */
	  var chartPlugins = [{
	    afterInit: function afterInit(chartInstance) {
	      setTimeout(function () {
	        Object.assign(chartInstance.canvas.style, { height: _constants.CHART_OPTIONS.height });
	        chartInstance.update();
	        chartInstance.render(_constants.CHART_OPTIONS.animation_time, true);
	        chartInstance.resize();
	      }, 0);
	    },
	    beforeInit: function beforeInit(chartInstance) {
	      Object.assign(chartInstance.options, { maintainAspectRatio: false });
	    }
	  }];
	
	  /**
	   * @description
	   * Find max and min for given data series of balance history
	   *
	   * @public
	   * @name getMaxMinLegend
	   * @type {function}
	   * @param {array} dataSeries Balance histiry data series
	   * @return {Object} with max and min
	   */
	  var getMaxMinLegend = function getMaxMinLegend(dataSeries) {
	    return {
	      max: Math.max.apply(Math, _toConsumableArray(dataSeries.map(function (item) {
	        return item.value.balance;
	      }))),
	      min: Math.min.apply(Math, _toConsumableArray(dataSeries.map(function (item) {
	        return item.value.balance;
	      })))
	    };
	  };
	
	  /**
	   * @description
	   * Handles one or multiple errors messages, mapping error key with propper message
	   *
	   * @name handleErrors
	   * @type {function}
	   * @param {array} errors
	   * @returns {string} message
	   */
	  var handleErrors = function handleErrors(errors) {
	    if (!errors) {
	      return null;
	    }
	    return errors.map(function (e) {
	      return i18nFilter(e);
	    }).join(' ');
	  };
	
	  return {
	    getProductTypeTemplateId: getProductTypeTemplateId,
	    formatBooleanToText: formatBooleanToText,
	    hasValue: hasValue,
	    getFrequencyUnitKey: getFrequencyUnitKey,
	    isEmptyArray: isEmptyArray,
	    lineChartOptions: lineChartOptions,
	    chartPlugins: chartPlugins,
	    getMaxMinLegend: getMaxMinLegend,
	    handleErrors: handleErrors
	  };
	};
	
	exports.default = helpers;

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_66__;

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description
	 * chart data set options constants
	 * @type {Object}
	 * @name CHART_DATASET_OPTION
	 */
	var CHART_DATASET_OPTION = exports.CHART_DATASET_OPTION = {
	  POINT_RADIUS: 2,
	  POINT_HIT_RADIUS: 2,
	  LINE_TENSION: 0.02
	};
	
	/**
	 * @description
	 * chart css property value selectors
	 * @type {Object}
	 * @name CSS_SELECTORS
	 */
	var CSS_SELECTORS = exports.CSS_SELECTORS = {
	  historyBalanceColorPositive: '.chart-line-card-positive-color',
	  historyBalanceBgPositive: '.chart-line-card-positive-background',
	  yAxisZeroColor: '.chart-line-card-y-axis-zero-color',
	  yAxesgridLinescolor: '.chart-line-card-y-axes-grid-color'
	};
	
	/**
	 * @description
	 * chart options constants
	 * @type {Object}
	 * @name CHART_OPTIONS
	 */
	var CHART_OPTIONS = exports.CHART_OPTIONS = {
	  zeroLineWidth: 1,
	  tickMarkLength: 0,
	  paddings: {
	    top: 5
	  },
	  animation_time: 500,
	  height: '30vh'
	};
	
	/**
	 * CXP events enum
	 * @type {object}
	 */
	var CXP_EVENTS = exports.CXP_EVENTS = {
	  ON_PANEL_LOAD: 'view.chart.on.panel.loaded.event.details'
	};

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.processBalanceHistorySeries = undefined;
	
	var _balanceHistoryProcess = __webpack_require__(69);
	
	var _balanceHistoryProcess2 = _interopRequireDefault(_balanceHistoryProcess);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name Hooks#processBalanceHistorySeries
	 * @type {Function}
	 *
	 * @description
	 * Prepare History Balance data for chart
	 * @param {module:data-bb-arrangements-http-ng.BalanceHistorySeries} data balance history data
	 * @returns {Array.<Object>} transfomed history data suitable for chart implementation
	 */
	var processBalanceHistorySeries = exports.processBalanceHistorySeries = function processBalanceHistorySeries(balanceHistorySeries) {
	  return (0, _balanceHistoryProcess2.default)(balanceHistorySeries);
	}; /* eslint-disable import/prefer-default-export */

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libBbStyles = __webpack_require__(66);
	
	var _libBbStyles2 = _interopRequireDefault(_libBbStyles);
	
	var _constants = __webpack_require__(67);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* global angular */
	var historyBalanceChartColorPositive = (0, _libBbStyles2.default)(_constants.CSS_SELECTORS.historyBalanceColorPositive, 'color');
	var historyBalanceChartBgPositive = (0, _libBbStyles2.default)(_constants.CSS_SELECTORS.historyBalanceBgPositive, 'background-color');
	
	/**
	 * @description
	 * Prototype for history Balance series
	 *
	 * @private
	 * @name historyBalanceSeriesPrototype
	 * @type {object}
	 *
	 */
	var historyBalanceSeriesPrototype = {
	  borderColor: historyBalanceChartColorPositive,
	  backgroundColor: historyBalanceChartBgPositive,
	  pointBorderColor: historyBalanceChartColorPositive,
	  pointBackgroundColor: historyBalanceChartColorPositive,
	  pointBorderWidth: 0,
	  pointRadius: _constants.CHART_DATASET_OPTION.POINT_RADIUS,
	  pointHitRadius: _constants.CHART_DATASET_OPTION.POINT_HIT_RADIUS,
	  lineTension: _constants.CHART_DATASET_OPTION.LINE_TENSION,
	  fill: 'start',
	  borderWidth: 1
	};
	
	/**
	 * Prepare Data from balance history, that can be used in Balance history line charts
	 *
	 * @inner
	 * @param {object} historyData {BalanceHistorySeries},
	 * Data in format suitable for chart UI components
	 *
	 * Source from the API balance history
	 * @returns {BalanceHistoryChartData}
	 */
	
	exports.default = function (historyData) {
	  Object.keys(historyData).map(function (arrangementId) {
	    return historyData[arrangementId].datasets.map(function (p) {
	      return Object.assign(p, historyBalanceSeriesPrototype);
	    });
	  });
	  return historyData;
	};
	
	/**
	 * @typedef  {Object} BalanceHistoryChartData
	 * @property {string} arrangementId Arrangement Id for mapping balance history
	 * @property {number[]} label label data for x-axis
	 * @property {Array.<DataSets>} datasets label data for x-axis
	 */
	
	/**
	 * @typedef {Object} DataSets
	 * @property {string} borderColor Border color for data set
	 * @property {string} backgroundColor Area Fill Background color
	 * @property {string[]} pointBorderColor Border color for each point
	 * @property {string[]} pointBackgroundColor Background color for each point
	 * @property {string[]} pointRadius Radius value for each point
	 * @property {string} pointBorderWidth Point border width
	 * @property {string} pointHitRadius Radius width for point hit
	 * @property {string} lineTension A line tension value on line graphs
	 * @property {boolean} fill fill the line chart (true/false)
	 * @property {Array.<DataSetXY>} data Data that is shown on x/y axis
	 */
	
	/**
	 * @typedef  {Object} DataSetXY
	 * @property {string} x X-axis value ticks
	 * @property {string} y Y-axis value ticks
	 */

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bus-account-details-ng.js.map