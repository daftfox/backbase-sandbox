(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-format-amount-ng"), require("lib-bb-model-errors"), require("lib-wm-colorset"), require("ui-bb-chartjs-chart-donut-ng"), require("vendor-bb-angular-ng-aria"), require("ui-bb-ellipsis-tooltip-ng"), require("vendor-bb-uib-tooltip"), require("vendor-bb-uib-popover"), require("vendor-bb-angular-ui-tree"), require("ui-bb-notification-stripe-ng"), require("ui-bb-focus-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-wm-portfolio-summary-dashboard-ng", ["ui-bb-loading-indicator-ng", "ui-bb-i18n-ng", "ui-bb-empty-state-ng", "ui-bb-format-amount-ng", "lib-bb-model-errors", "lib-wm-colorset", "ui-bb-chartjs-chart-donut-ng", "vendor-bb-angular-ng-aria", "ui-bb-ellipsis-tooltip-ng", "vendor-bb-uib-tooltip", "vendor-bb-uib-popover", "vendor-bb-angular-ui-tree", "ui-bb-notification-stripe-ng", "ui-bb-focus-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-wm-portfolio-summary-dashboard-ng"] = factory(require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-format-amount-ng"), require("lib-bb-model-errors"), require("lib-wm-colorset"), require("ui-bb-chartjs-chart-donut-ng"), require("vendor-bb-angular-ng-aria"), require("ui-bb-ellipsis-tooltip-ng"), require("vendor-bb-uib-tooltip"), require("vendor-bb-uib-popover"), require("vendor-bb-angular-ui-tree"), require("ui-bb-notification-stripe-ng"), require("ui-bb-focus-ng"));
	else
		root["ext-wm-portfolio-summary-dashboard-ng"] = factory(root["ui-bb-loading-indicator-ng"], root["ui-bb-i18n-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-format-amount-ng"], root["lib-bb-model-errors"], root["lib-wm-colorset"], root["ui-bb-chartjs-chart-donut-ng"], root["vendor-bb-angular-ng-aria"], root["ui-bb-ellipsis-tooltip-ng"], root["vendor-bb-uib-tooltip"], root["vendor-bb-uib-popover"], root["vendor-bb-angular-ui-tree"], root["ui-bb-notification-stripe-ng"], root["ui-bb-focus-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_40__, __WEBPACK_EXTERNAL_MODULE_41__, __WEBPACK_EXTERNAL_MODULE_42__, __WEBPACK_EXTERNAL_MODULE_43__, __WEBPACK_EXTERNAL_MODULE_44__) {
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

	module.exports = __webpack_require__(38);

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
/* 9 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
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
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.helpers = exports.hooks = undefined;
	
	var _uiBbFormatAmountNg = __webpack_require__(6);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _vendorBbAngularNgAria = __webpack_require__(18);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbEllipsisTooltipNg = __webpack_require__(39);
	
	var _uiBbEllipsisTooltipNg2 = _interopRequireDefault(_uiBbEllipsisTooltipNg);
	
	var _uiBbChartjsChartDonutNg = __webpack_require__(12);
	
	var _uiBbChartjsChartDonutNg2 = _interopRequireDefault(_uiBbChartjsChartDonutNg);
	
	var _vendorBbUibTooltip = __webpack_require__(40);
	
	var _vendorBbUibTooltip2 = _interopRequireDefault(_vendorBbUibTooltip);
	
	var _vendorBbUibPopover = __webpack_require__(41);
	
	var _vendorBbUibPopover2 = _interopRequireDefault(_vendorBbUibPopover);
	
	var _vendorBbAngularUiTree = __webpack_require__(42);
	
	var _vendorBbAngularUiTree2 = _interopRequireDefault(_vendorBbAngularUiTree);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(2);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbI18nNg = __webpack_require__(3);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(4);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBbNotificationStripeNg = __webpack_require__(43);
	
	var _uiBbNotificationStripeNg2 = _interopRequireDefault(_uiBbNotificationStripeNg);
	
	var _uiBbFocusNg = __webpack_require__(44);
	
	var _uiBbFocusNg2 = _interopRequireDefault(_uiBbFocusNg);
	
	var _helpers = __webpack_require__(45);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _hooks = __webpack_require__(46);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-wm-portfolio-summary-ng
	 */
	/**
	 * @module ext-wm-portfolio-summary-dashboard-ng
	 *
	 * @description
	 * Default extension for portfolio summary dashboard widget.
	 *
	 *
	 * @requires vendor-bb-uib-popover
	 * @example
	 * <!-- portfolio widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-wm-portfolio-summary-dashboard-ng</value>
	 * </property>
	 *
	 *
	 */
	
	var hooks = exports.hooks = extHooks;
	var helpers = exports.helpers = _helpers2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularUiTree2.default, _uiBbFormatAmountNg2.default, _vendorBbAngularNgAria2.default, _uiBbEllipsisTooltipNg2.default, _uiBbChartjsChartDonutNg2.default, _vendorBbUibPopover2.default, _vendorBbUibTooltip2.default, _uiBbLoadingIndicatorNg2.default, _uiBbI18nNg2.default, _uiBbEmptyStateNg2.default, _uiBbNotificationStripeNg2.default, _uiBbFocusNg2.default];
	
	/**
	 * Portfolio type definition
	 * @typedef {Object} Portfolio
	 * @property {string}               IBAN               - International Bank Account Number
	 * @property {string}               clientName         - Client name
	 * @property {string}               alias              - A portfolio name manually set by the client
	 * @property {assetClass[]}         assetClasses       - Asset classes list for portfolio
	 * @property {object}               valuation          - Total cost of all assets in the portfolio
	 * @property {object}               inCashTotal        - Incoming cash for the period of time
	 * @property {object}               outCashTotal       - Outgoing cash for the period of time
	 * @property {number}               performanceMTD     - Portfolio performance for month
	 * @property {number}               performanceMTDpct  - Portfolio performance for month in percents
	 * @property {number}               performanceYTD     - Portfolio performance amount for year
	 * @property {number}               performanceYTDpct  - Portfolio performance amount for year
	 *                                                       in percents
	 * @property {string}               riskClass          - Risk of portfolio investement strategy
	 * @property {manager[]}            managers           - Managers of portfolio
	 * @property {attorney[]}           attorneys          - Attorneys of portfolio
	 * @property {BBSeriesPortfolio[]}  dataseries         - data in format suitable for chart
	 *                                                       UI components
	 */
	
	/**
	 * Portfolio specific BBSeries object
	 * @typedef {object} BBSeriesPortfolio
	 * @property {string[]} labels  Array chart slices labels
	 * @property {PortfolioDataset[]} datasets Array of chart datasets
	 */
	
	/**
	 * Dataset object for chart data
	 * @typedef {object} PortfolioDataset
	 * @extends Dataset
	 * @property {string[]} backgroundColor Array  which represent rgb colors of chart
	 */
	
	/**
	 * Dataset object for chart data
	 * @typedef {object} Dataset
	 * @property {number[]} data Array of data points for chart slices
	 */
	
	/**
	 * Assetclass object
	 * @typedef {object} AssetClass
	 * @property {string} name name of asset class
	 * @property {number} valuePct value that represents percentage of asset
	 */
	
	/**
	 * Dataset object for chart data
	 * @typedef {object} attorney
	 * @property {string} id id of a portfolio manager
	 * @property {string} name name of a portfolio manager
	 */
	
	/**
	 * Dataset object for chart data
	 * @typedef {object} manager
	 * @property {string} id id of a portfolio manager
	 * @property {string} name name of a portfolio manager
	 */
	
	/**
	 * Settings object with options available for bar chart.
	 * More info {@link http://www.chartjs.org/docs/latest/charts/bar.html}
	 * @typedef {object} ChartjsSettings
	 */

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_40__;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_41__;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_42__;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_43__;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_44__;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _errors;
	
	var _libWmColorset = __webpack_require__(9);
	
	var _libBbModelErrors = __webpack_require__(8);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* eslint max-len: ["error", { "ignoreComments": true }] */
	/* global document */
	
	
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
	
	exports.default = function (_ref) {
	  var $filter = _ref.$filter,
	      stateContainer = _ref.stateContainer;
	
	  var numberFilter = $filter('number');
	  var i18nFilter = $filter('i18n');
	
	  /**
	   * @name PRECISION
	   * @type {number}
	   *
	   * @description
	   * Number of decimals to display
	   */
	  var PRECISION = 2;
	
	  /**
	   * @description
	   * Dismiss message time of notification
	   * @public
	   *
	   * @name DISMISS_MESSAGE_TIME
	   * @type {number}
	   */
	  var DISMISS_MESSAGE_TIME = 3;
	
	  /**
	   * @description
	   * Contains default notification config (if any) used to init notification popup
	   *
	   * @name notifications
	   * @type {object}
	   */
	  var notifications = {
	    data: null,
	    dismissMessageTime: DISMISS_MESSAGE_TIME,
	    status: {
	      isOpen: false,
	      success: false,
	      i18nKey: null
	    }
	  };
	
	  /**
	   * @description
	   * Function that displays notification
	   *
	   * @public
	   * @name showNotification
	   * @type {function}
	   * @param {string}              i18nKeyName     i18n name of notification to display in message
	   *
	   */
	  var showNotification = function showNotification(i18nKeyName, data) {
	    notifications.status.isOpen = true;
	    notifications.status.success = false;
	    notifications.status.i18n = i18nFilter(i18nKeyName, data);
	  };
	
	  /**
	   * @description
	   * Function that invokes a error notification
	   *
	   * @public
	   * @name notificationError
	   * @type {function}
	   * @param {string} i18nKeyName i18n name of notification to display in message
	   *
	   */
	  var notificationError = function notificationError(i18nKeyName, data) {
	    notifications.status.isOpen = true;
	    notifications.status.success = false;
	    notifications.status.i18n = i18nFilter(i18nKeyName, data);
	  };
	
	  /**
	   * @description
	   * Function that gets notifications configuration object
	   *
	   * @public
	   * @name getNotifications
	   * @type {function}
	   *
	   * @returns {object}
	   *
	   */
	  var getNotifications = function getNotifications() {
	    return notifications;
	  };
	
	  /**
	   * @description
	   *
	   * Function that closes notifications
	   *
	   * @public
	   * @name closeNotification
	   * @type {function}
	   *
	   */
	  var closeNotification = function closeNotification() {
	    notifications.status.isOpen = false;
	    notifications.status.success = false;
	  };
	
	  /**
	   * @description
	   * Substitutes outCashTotalAmount from inCashTotalAmount value and returns new value of netCashTotalAmount
	   *
	   * @public
	   * @name getNetCashTotalAmount
	   * @type {function}
	   * @param {number} inCashTotalAmountIncoming        Cash for the period of time amaunt value
	   * @param {number} outCashTotalAmount               Outgoing cash for the period of time amaunt value
	   *
	   * @returns {number}
	   */
	  var getNetCashTotalAmount = function getNetCashTotalAmount(inCashTotalAmount, outCashTotalAmount) {
	    return inCashTotalAmount - outCashTotalAmount;
	  };
	
	  /**
	   * @description
	   * Get the count of decimal numbers
	   *
	   * @private
	   * @name decimalCount
	   * @type {function}
	   * @param {number} number                           number to for counting its decimal numbers
	   *
	   * @returns {number}
	   */
	  var decimalCount = function decimalCount(number) {
	    var NO_DECIMAL_NUMBERS = 0;
	    var match = number.toString().match(/\.(\d*)/);
	
	    if (match) {
	      return match[1] ? match[1].length : NO_DECIMAL_NUMBERS;
	    }
	
	    return NO_DECIMAL_NUMBERS;
	  };
	
	  /**
	   * @description
	   * Transform number to its localized string representation
	   *
	   * @public
	   * @name localizeNumber
	   * @type {function}
	   * @param {number} number                           number to localize
	   *
	   * @returns {string}
	   */
	  var localizeNumber = function localizeNumber(number) {
	    return numberFilter(number, decimalCount(number));
	  };
	
	  /**
	   * @description
	   * Appends + or - sign if number is positive or negative
	   *
	   * @public
	   * @name showSign
	   * @type {function}
	   * @param {number} number     Number inputed
	   *
	   * @returns {string}          String with appended sign and number
	   */
	  var showSign = function showSign(number) {
	    var absNumber = Math.abs(number).toFixed(PRECISION);
	    var sign = number > 0 ? '+' : '-';
	    var localizedNumber = numberFilter(absNumber, PRECISION);
	    return sign + ' ' + localizedNumber;
	  };
	
	  /**
	   * @description
	   * Object with chart options that need to be overriden
	   *
	   * @name chartOptions
	   * @type {ChartjsSettings}
	   */
	  var chartOptions = {
	    tooltips: {
	      enabled: false
	    },
	    hover: {
	      mode: null
	    },
	    cutoutPercentage: 65
	  };
	
	  var changeTooltipStyle = function changeTooltipStyle() {
	    var tooltip = document.querySelector('.tooltip');
	    if (tooltip) {
	      Object.assign(tooltip.style, { 'pointer-events': 'none' });
	    }
	  };
	
	  /**
	   * @description
	   * Array with plugins objects for chartjs
	   *
	   * @name plugins
	   * @type {array}
	   */
	  var plugins = [{
	    afterInit: function afterInit(chartInstance) {
	      setTimeout(function () {
	        return chartInstance.update();
	      }, 100);
	    }
	  }];
	
	  /**
	   * @description
	   * Checks if portfolios data is available
	   *
	   * @name isPortfoliosAvailable
	   * @type {function}
	   * @param {object} portfolios
	   * @returns {boolean} returns true if portfolios data is not present
	   */
	  var isPortfoliosAvailable = stateContainer.createSelector(function (state) {
	    return state.portfolios.order.length;
	  });
	
	  /**
	   * @description
	   * Returns correct class for element
	   *
	   * @name getLegendRowClass
	   * @type {function}
	   * @param {number} $index
	   * @returns {string} returns class name
	   */
	  var getLegendRowClass = function getLegendRowClass($index) {
	    var classPrefix = 'portfolio-stripe-assets-legend-';
	    return $index < 4 ? '' + classPrefix + $index : classPrefix + '4';
	  };
	
	  /**
	   * @name portfolios
	   * @type {function}
	   *
	   * @description
	   * Selector for portfolio data processing
	   *
	   * @param {Portfolio[]} data original data object
	   * @returns {Portfolio[]} data processed data object
	   */
	  var portfolios = stateContainer.createSelector(function (state) {
	    return state.portfolios.order.map(function (iban) {
	      var portfolio = state.portfolios.list[iban];
	      var backgroundColor = portfolio.assetClasses.map(function (_, index) {
	        return (0, _libWmColorset.getColorByIndex)(index);
	      });
	      var data = portfolio.assetClasses.map(function (a) {
	        return a.valuePct;
	      }).filter(function (a) {
	        return a > 0;
	      });
	      return Object.assign({}, portfolio, {
	        dataseries: {
	          labels: portfolio.assetClasses.map(function (a) {
	            return a.name;
	          }),
	          datasets: [{
	            data: data,
	            backgroundColor: backgroundColor
	          }]
	        }
	      });
	    });
	  });
	
	  /**
	   * @description
	   * Checking if the condition is met to display the editable input
	   * for changing the name or alias.
	   *
	   * @name showChangeNameInput
	   * @type {function}
	   * @param {object} portfolioSelected The selected portfolio.
	   * @param {object} item The portfolio that needs to be checked.
	   * @returns {boolean} true if condition is met or false otherwise
	   */
	  var showChangeNameInput = function showChangeNameInput(portfolioSelected, item) {
	    return portfolioSelected.IBAN === item.IBAN && portfolioSelected.showInput;
	  };
	
	  /**
	   * @description
	   * Checking the alias name and update it if it is needed.
	   *
	   * @name changeAlias
	   * @type {function}
	   * @param {object} $ctrl Controller of the widget
	   * @param {object} item The portfolio that needs to be checked and updated.
	   */
	  var changeAlias = function changeAlias($ctrl, item) {
	    var state = stateContainer.getState();
	    var selectedPortfolio = state.portfolios.list[item.IBAN];
	    if (selectedPortfolio.alias !== item.alias) {
	      $ctrl.updatePortfolio(item).catch(function () {
	        Object.assign(item, { alias: selectedPortfolio.alias });
	        return notificationError('aliasSaveError.error', {});
	      });
	    }
	    state.portfolios.portfolioSelected = { id: null, showInput: false };
	  };
	
	  /**
	   * @description
	   * Displays input field if icon was clicked.
	   *
	   * @name showInput
	   * @type {function}
	   * @param {object} item The selected portfolio.
	   */
	  var showInput = function showInput(item) {
	    var state = stateContainer.getState();
	    state.portfolios.portfolioSelected = item;
	    state.portfolios.portfolioSelected.showInput = true;
	  };
	
	  /**
	   * @description
	   * Returns error object by error code
	   *
	   * @public
	   * @name getError
	   * @type {function}
	   */
	  var getError = function getError(code) {
	    return errors[code];
	  };
	
	  /**
	   * @name mapOfOpenItems
	   * @type {map}
	   * @inner
	   *
	   * @description
	   * Map keeping portfolios` open state
	   */
	  var mapOfOpenItems = new Map();
	
	  /**
	   * @name isFirstPortfolioOpen
	   * @inner
	   * @type {function}
	   * @description Tells, whether first item in portfolios collection is open.
	   *              On first invocation, has side-effect - changes state of first item opening in mapOfOpenItems.
	   * @param {number} portfolioIndex Index of portfolio in portfolios collection
	   * @param {number} id IBAN of portfolio
	   * @returns {boolean} Flag (true|false) that stands for open state of item
	   */
	  var isFirstPortfolioOpen = function isFirstPortfolioOpen(portfolioIndex, id) {
	    return portfolioIndex === 0 && !Array.from(mapOfOpenItems.values()).some(function (v) {
	      return typeof v !== 'undefined';
	    }) && typeof mapOfOpenItems.get(id) === 'undefined' && !!mapOfOpenItems.set(id, true);
	  };
	
	  /**
	   * @name isOpen
	   * @public
	   * @type {function}
	   * @description Tells, whether item's open property is truthy
	   * @param {number} id
	   * @param {number} index Index of portfolio in portfolios collection
	   * @returns {boolean} Flag (true|false) that stands for open state of item
	   */
	  var isOpen = function isOpen(id, index) {
	    return mapOfOpenItems.get(id) || isFirstPortfolioOpen(index, id);
	  };
	
	  /**
	   * @name onToggle
	   * @public
	   * @type {function}
	   * @description Changes open state of item to the opposite
	   * @param {number} id
	   * @returns {map} Map of items
	   */
	  var onToggle = function onToggle(id) {
	    return mapOfOpenItems.set(id, !mapOfOpenItems.get(id));
	  };
	
	  /**
	   * @name getDragAndDropOptions
	   * @public
	   * @type {function}
	   * @description
	   * Returns drag and drop options.
	   * Specify `dropped` callback saving new order of portfolios
	   * @param {object} $ctrl Controller of the widget
	   * @returns {object} Options of drag and drop library
	   */
	  var getDragAndDropOptions = function getDragAndDropOptions($ctrl) {
	    return {
	      dropped: function dropped() {
	        $ctrl.saveOrder(portfolios().map(function (portfolio) {
	          return portfolio.IBAN;
	        })).catch(function () {
	          return showNotification('model.error.unexpected.message');
	        });
	      }
	    };
	  };
	
	  return {
	    get portfolios() {
	      return portfolios();
	    },
	    notifications: notifications,
	    getNotifications: getNotifications,
	    getColorClassByIndex: _libWmColorset.getColorClassByIndex,
	    getColorByIndex: _libWmColorset.getColorByIndex,
	    closeNotification: closeNotification,
	    getNetCashTotalAmount: getNetCashTotalAmount,
	    showSign: showSign,
	    chartOptions: chartOptions,
	    isPortfoliosAvailable: isPortfoliosAvailable,
	    localizeNumber: localizeNumber,
	    getLegendRowClass: getLegendRowClass,
	    plugins: plugins,
	    getError: getError,
	    isOpen: isOpen,
	    onToggle: onToggle,
	    getDragAndDropOptions: getDragAndDropOptions,
	    showChangeNameInput: showChangeNameInput,
	    changeAlias: changeAlias,
	    changeTooltipStyle: changeTooltipStyle,
	    showInput: showInput
	  };
	};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	"use strict";

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-wm-portfolio-summary-dashboard-ng.js.map