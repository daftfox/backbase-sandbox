(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-substitute-error-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("vendor-bb-uib-tooltip"), require("ui-bus-format-amount-ng"), require("ui-bb-chartjs-chart-line-ng"), require("ui-bb-navigate-to-ng"), require("ui-bb-loading-overlay-ng"), require("lib-bb-styles"), require("ui-bb-sortable-column-ng"), require("ui-bb-load-more-ng"), require("ui-bb-paginator-ng"), require("ui-bb-calendar-popup-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bus-balance-history-ng", ["vendor-bb-angular-ng-aria", "ui-bb-substitute-error-ng", "ui-bb-i18n-ng", "ui-bb-empty-state-ng", "vendor-bb-uib-tooltip", "ui-bus-format-amount-ng", "ui-bb-chartjs-chart-line-ng", "ui-bb-navigate-to-ng", "ui-bb-loading-overlay-ng", "lib-bb-styles", "ui-bb-sortable-column-ng", "ui-bb-load-more-ng", "ui-bb-paginator-ng", "ui-bb-calendar-popup-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bus-balance-history-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-substitute-error-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("vendor-bb-uib-tooltip"), require("ui-bus-format-amount-ng"), require("ui-bb-chartjs-chart-line-ng"), require("ui-bb-navigate-to-ng"), require("ui-bb-loading-overlay-ng"), require("lib-bb-styles"), require("ui-bb-sortable-column-ng"), require("ui-bb-load-more-ng"), require("ui-bb-paginator-ng"), require("ui-bb-calendar-popup-ng"));
	else
		root["ext-bus-balance-history-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-substitute-error-ng"], root["ui-bb-i18n-ng"], root["ui-bb-empty-state-ng"], root["vendor-bb-uib-tooltip"], root["ui-bus-format-amount-ng"], root["ui-bb-chartjs-chart-line-ng"], root["ui-bb-navigate-to-ng"], root["ui-bb-loading-overlay-ng"], root["lib-bb-styles"], root["ui-bb-sortable-column-ng"], root["ui-bb-load-more-ng"], root["ui-bb-paginator-ng"], root["ui-bb-calendar-popup-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_61__, __WEBPACK_EXTERNAL_MODULE_62__, __WEBPACK_EXTERNAL_MODULE_63__, __WEBPACK_EXTERNAL_MODULE_64__, __WEBPACK_EXTERNAL_MODULE_66__, __WEBPACK_EXTERNAL_MODULE_80__, __WEBPACK_EXTERNAL_MODULE_81__, __WEBPACK_EXTERNAL_MODULE_82__, __WEBPACK_EXTERNAL_MODULE_93__) {
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

	module.exports = __webpack_require__(92);

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

/***/ 66:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_66__;

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_80__;

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_81__;

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_82__;

/***/ }),

/***/ 92:
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
	
	var _uiBbPaginatorNg = __webpack_require__(82);
	
	var _uiBbPaginatorNg2 = _interopRequireDefault(_uiBbPaginatorNg);
	
	var _uiBbLoadMoreNg = __webpack_require__(81);
	
	var _uiBbLoadMoreNg2 = _interopRequireDefault(_uiBbLoadMoreNg);
	
	var _uiBbSortableColumnNg = __webpack_require__(80);
	
	var _uiBbSortableColumnNg2 = _interopRequireDefault(_uiBbSortableColumnNg);
	
	var _uiBbChartjsChartLineNg = __webpack_require__(62);
	
	var _uiBbChartjsChartLineNg2 = _interopRequireDefault(_uiBbChartjsChartLineNg);
	
	var _uiBbCalendarPopupNg = __webpack_require__(93);
	
	var _uiBbCalendarPopupNg2 = _interopRequireDefault(_uiBbCalendarPopupNg);
	
	var _uiBbNavigateToNg = __webpack_require__(63);
	
	var _uiBbNavigateToNg2 = _interopRequireDefault(_uiBbNavigateToNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(64);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _helpers = __webpack_require__(94);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _hooks = __webpack_require__(96);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _vendorBbUibTooltip2.default, _uiBbSubstituteErrorNg2.default, _uiBbI18nNg2.default, _uiBusFormatAmountNg2.default, _uiBbEmptyStateNg2.default, _uiBbPaginatorNg2.default, _uiBbLoadMoreNg2.default, _uiBbSortableColumnNg2.default, _uiBbChartjsChartLineNg2.default, _uiBbCalendarPopupNg2.default, _uiBbNavigateToNg2.default, _uiBbLoadingOverlayNg2.default]; /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                    * @module ext-bus-balance-history-ng
	                                                                                                                                                                                                                                                                                                                                                                                                                                                    *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                    * @description
	                                                                                                                                                                                                                                                                                                                                                                                                                                                    * Balance history
	                                                                                                                                                                                                                                                                                                                                                                                                                                                    *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                    */
	var hooks = exports.hooks = extHooks;
	
	var helpers = exports.helpers = _helpers2.default;

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_93__;

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libBbStyles = __webpack_require__(66);
	
	var _libBbStyles2 = _interopRequireDefault(_libBbStyles);
	
	var _constants = __webpack_require__(95);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var helpers = function helpers(context) {
	  var dateFilter = context.$filter('date');
	  var i18nFilter = context.$filter('i18n');
	
	  /**
	   * @description
	   * Table headers configuration
	   * @type {Array}
	   * @name headers
	   */
	  var headers = [{
	    label: 'accounts.header.date',
	    sortable: {
	      key: 'name',
	      direction: 'ASC'
	    }
	  }, {
	    label: 'accounts.header.currency',
	    sortable: {
	      key: 'currency',
	      direction: 'DESC'
	    }
	  }, {
	    label: 'accounts.header.balance',
	    class: 'text-right',
	    sortable: {
	      key: 'bookedBalance',
	      direction: 'DESC'
	    }
	  }];
	
	  /**
	   * @description
	   * Balance History filter params for in date-picker
	   * @type {Object}
	   * @name balanceHistoryParams
	   */
	  var filterParams = {
	    dateRange: {
	      startDate: null,
	      endDate: null
	    }
	  };
	
	  /**
	   * @description
	   * Balance History params
	   * @type {Object}
	   * @name balanceHistoryParams
	   */
	  var balanceHistoryParams = {
	    startDate: null,
	    endDate: null,
	    timePeriod: null
	  };
	
	  /**
	   * @description
	   * Filter buttons configuration
	   * @type {Array}
	   * @name headers
	   */
	  var buttonFilters = [{
	    label: 'accounts.button.filter.day',
	    filter: 'lastDay'
	  }, {
	    label: 'accounts.button.filter.week',
	    filter: 'lastWeek'
	  }, {
	    label: 'accounts.button.filter.month',
	    filter: 'lastMonth'
	  }, {
	    label: 'accounts.button.filter.year',
	    filter: 'lastYear'
	  }];
	
	  /**
	   * @description
	   * Checks if the sortable column is the current one, table is sorted by the
	   * active column
	   * @name isSortableActive
	   * @type {function}
	   * @param  {object} sortable Sortable configuration
	   * @param  {object} $ctrl    Current controller
	   * @return {boolean}         True if table is sorted by the column, false otherwise
	   */
	  var isSortableActive = function isSortableActive(sortable, $ctrl) {
	    return sortable.key === $ctrl.state.accounts.orderBy;
	  };
	
	  /**
	   * @description
	   * Checks if actual pagination type matches the one, defined in properties
	   *
	   * @public
	   * @name isPaginationTypeMatch
	   * @type {function}
	   * @param {function} $ctrl      Current controller
	   * @param {string} type         Description of pagination type (pagination, load-more)
	   *
	   * @returns {boolean}
	   */
	  var isPaginationTypeMatch = function isPaginationTypeMatch($ctrl, type) {
	    return $ctrl.state.accounts.paginationType === type;
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
	
	  var calendarPopupConfig = { minDate: '0', maxDate: new Date(), maxMode: 'year' };
	
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
	      context.bus.subscribe(_constants.CXP_EVENTS.ON_PANEL_LOAD, function () {
	        Object.assign(chartInstance.canvas.style, { height: _constants.CHART_OPTIONS.height });
	        chartInstance.update();
	        chartInstance.render(_constants.CHART_OPTIONS.animation_time, true);
	        setTimeout(function () {
	          return chartInstance.resize();
	        }, 0);
	      });
	    },
	    beforeInit: function beforeInit(chartInstance) {
	      Object.assign(chartInstance.options, { maintainAspectRatio: false });
	    }
	  }];
	
	  /**
	   * @description
	   * Reset balance history date range filter
	   *
	   * @inner
	   * @name clearBalanceHistoryFilter
	   * @type {function}
	   */
	  var clearBalanceHistoryFilter = function clearBalanceHistoryFilter() {
	    Object.assign(filterParams, {
	      dateRange: {
	        startDate: null,
	        endDate: null
	      }
	    });
	  };
	
	  /**
	   * @description
	   * Get Balance history filtered by time period enumerators
	   *
	   * @name applyBalanceHistoryFilter
	   * @param {function} $ctrl      Current controller
	   * @param {String} timePeriod    time period enum
	   * ('lastDay', 'lastWeek', 'lastMonth', 'lastYear', 'all')
	   * @type {function}
	   * @returns {Promise.<module:model-bb-product-summary-ng.BalanceHistory, ModelError>}
	   * Balance history data for given arrengements ids filtered
	   */
	  var applyBalanceHistoryFilter = function applyBalanceHistoryFilter($ctrl) {
	    var timePeriod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.DEFAULT_FILTER_TIME_PERIOD;
	
	    var accountsIds = $ctrl.state.accounts.data.map(function (account) {
	      return account.id;
	    });
	    clearBalanceHistoryFilter();
	    Object.assign(balanceHistoryParams, {
	      startDate: null,
	      endDate: null,
	      timePeriod: timePeriod
	    });
	
	    $ctrl.loadHistoryBalance(accountsIds, balanceHistoryParams);
	  };
	
	  /**
	   * @description
	   * Get Balance history filtered by time period from date picker filter
	   *
	   * @name applyBalanceHistoryDateFilter
	   * @param {function} $ctrl      Current controller
	   * @param {String} timePeriod    time period enum
	   * ('lastDay', 'lastWeek', 'lastMonth', 'lastYear', 'all')
	   * @type {function}
	   * @returns {Promise.<module:model-bb-product-summary-ng.BalanceHistory, ModelError>}
	   * Balance history data for given arrengements ids filtered
	   */
	  var applyBalanceHistoryDateFilter = function applyBalanceHistoryDateFilter($ctrl) {
	    var accountsIds = $ctrl.state.accounts.data.map(function (account) {
	      return account.id;
	    });
	
	    Object.assign(balanceHistoryParams, {
	      startDate: filterParams.dateRange.startDate,
	      endDate: filterParams.dateRange.endDate,
	      timePeriod: null
	    });
	
	    $ctrl.loadHistoryBalance(accountsIds, balanceHistoryParams);
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
	    dateFilter: dateFilter,
	    headers: headers,
	    buttonFilters: buttonFilters,
	    isSortableActive: isSortableActive,
	    isPaginationTypeMatch: isPaginationTypeMatch,
	    isEmptyArray: isEmptyArray,
	    lineChartOptions: lineChartOptions,
	    calendarPopupConfig: calendarPopupConfig,
	    getMaxMinLegend: getMaxMinLegend,
	    chartPlugins: chartPlugins,
	    filterParams: filterParams,
	    applyBalanceHistoryFilter: applyBalanceHistoryFilter,
	    applyBalanceHistoryDateFilter: applyBalanceHistoryDateFilter,
	    handleErrors: handleErrors
	  };
	};
	
	exports.default = helpers;

/***/ }),

/***/ 95:
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
	  ON_PANEL_LOAD: 'view.chart.on.panel.loaded.event.history'
	};
	
	/**
	 * Default filter time period
	 * @type {String}
	 */
	var DEFAULT_FILTER_TIME_PERIOD = exports.DEFAULT_FILTER_TIME_PERIOD = 'lastWeek';

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.processBalanceHistorySeries = undefined;
	
	var _balanceHistoryProcess = __webpack_require__(97);
	
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

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libBbStyles = __webpack_require__(66);
	
	var _libBbStyles2 = _interopRequireDefault(_libBbStyles);
	
	var _constants = __webpack_require__(95);
	
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
//# sourceMappingURL=ext-bus-balance-history-ng.js.map