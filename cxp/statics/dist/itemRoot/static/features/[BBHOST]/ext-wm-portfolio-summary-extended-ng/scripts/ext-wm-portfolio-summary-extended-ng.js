(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-format-amount-ng"), require("lib-bb-model-errors"), require("lib-wm-colorset"), require("ui-bb-chartjs-chart-donut-ng"), require("vendor-bb-uib-accordion"), require("ui-bb-dropdown-select-ng"), require("ui-bb-ellipsis-tooltip-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-paginator-ng"), require("ui-bb-sortable-column-ng"), require("ui-bb-search-box-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-modal-ng"), require("ui-bb-confirm-ng"), require("vendor-bb-angular-ng-messages"), require("lib-wm-pluralize-i18n-key-filter-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-wm-portfolio-summary-extended-ng", ["ui-bb-loading-indicator-ng", "ui-bb-i18n-ng", "ui-bb-empty-state-ng", "ui-bb-format-amount-ng", "lib-bb-model-errors", "lib-wm-colorset", "ui-bb-chartjs-chart-donut-ng", "vendor-bb-uib-accordion", "ui-bb-dropdown-select-ng", "ui-bb-ellipsis-tooltip-ng", "ui-bb-notification-stripe-ng", "ui-bb-paginator-ng", "ui-bb-sortable-column-ng", "ui-bb-search-box-ng", "ui-bb-loading-overlay-ng", "ui-bb-modal-ng", "ui-bb-confirm-ng", "vendor-bb-angular-ng-messages", "lib-wm-pluralize-i18n-key-filter-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-wm-portfolio-summary-extended-ng"] = factory(require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-format-amount-ng"), require("lib-bb-model-errors"), require("lib-wm-colorset"), require("ui-bb-chartjs-chart-donut-ng"), require("vendor-bb-uib-accordion"), require("ui-bb-dropdown-select-ng"), require("ui-bb-ellipsis-tooltip-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-paginator-ng"), require("ui-bb-sortable-column-ng"), require("ui-bb-search-box-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-modal-ng"), require("ui-bb-confirm-ng"), require("vendor-bb-angular-ng-messages"), require("lib-wm-pluralize-i18n-key-filter-ng"));
	else
		root["ext-wm-portfolio-summary-extended-ng"] = factory(root["ui-bb-loading-indicator-ng"], root["ui-bb-i18n-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-format-amount-ng"], root["lib-bb-model-errors"], root["lib-wm-colorset"], root["ui-bb-chartjs-chart-donut-ng"], root["vendor-bb-uib-accordion"], root["ui-bb-dropdown-select-ng"], root["ui-bb-ellipsis-tooltip-ng"], root["ui-bb-notification-stripe-ng"], root["ui-bb-paginator-ng"], root["ui-bb-sortable-column-ng"], root["ui-bb-search-box-ng"], root["ui-bb-loading-overlay-ng"], root["ui-bb-modal-ng"], root["ui-bb-confirm-ng"], root["vendor-bb-angular-ng-messages"], root["lib-wm-pluralize-i18n-key-filter-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_43__, __WEBPACK_EXTERNAL_MODULE_48__, __WEBPACK_EXTERNAL_MODULE_49__, __WEBPACK_EXTERNAL_MODULE_50__, __WEBPACK_EXTERNAL_MODULE_51__, __WEBPACK_EXTERNAL_MODULE_52__, __WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_54__, __WEBPACK_EXTERNAL_MODULE_55__) {
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

	module.exports = __webpack_require__(47);

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
/* 17 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */,
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
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_43__;

/***/ }),
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.hooks = exports.helpers = undefined;
	
	var _vendorBbUibAccordion = __webpack_require__(17);
	
	var _vendorBbUibAccordion2 = _interopRequireDefault(_vendorBbUibAccordion);
	
	var _uiBbPaginatorNg = __webpack_require__(48);
	
	var _uiBbPaginatorNg2 = _interopRequireDefault(_uiBbPaginatorNg);
	
	var _uiBbFormatAmountNg = __webpack_require__(6);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _uiBbSortableColumnNg = __webpack_require__(49);
	
	var _uiBbSortableColumnNg2 = _interopRequireDefault(_uiBbSortableColumnNg);
	
	var _uiBbSearchBoxNg = __webpack_require__(50);
	
	var _uiBbSearchBoxNg2 = _interopRequireDefault(_uiBbSearchBoxNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(51);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBbEllipsisTooltipNg = __webpack_require__(39);
	
	var _uiBbEllipsisTooltipNg2 = _interopRequireDefault(_uiBbEllipsisTooltipNg);
	
	var _uiBbChartjsChartDonutNg = __webpack_require__(12);
	
	var _uiBbChartjsChartDonutNg2 = _interopRequireDefault(_uiBbChartjsChartDonutNg);
	
	var _uiBbModalNg = __webpack_require__(52);
	
	var _uiBbModalNg2 = _interopRequireDefault(_uiBbModalNg);
	
	var _uiBbNotificationStripeNg = __webpack_require__(43);
	
	var _uiBbNotificationStripeNg2 = _interopRequireDefault(_uiBbNotificationStripeNg);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(2);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbI18nNg = __webpack_require__(3);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(4);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBbDropdownSelectNg = __webpack_require__(27);
	
	var _uiBbDropdownSelectNg2 = _interopRequireDefault(_uiBbDropdownSelectNg);
	
	var _uiBbConfirmNg = __webpack_require__(53);
	
	var _uiBbConfirmNg2 = _interopRequireDefault(_uiBbConfirmNg);
	
	var _vendorBbAngularNgMessages = __webpack_require__(54);
	
	var _vendorBbAngularNgMessages2 = _interopRequireDefault(_vendorBbAngularNgMessages);
	
	var _libWmPluralizeI18nKeyFilterNg = __webpack_require__(55);
	
	var _libWmPluralizeI18nKeyFilterNg2 = _interopRequireDefault(_libWmPluralizeI18nKeyFilterNg);
	
	var _helpers = __webpack_require__(56);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _hooks = __webpack_require__(57);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var helpers = exports.helpers = _helpers2.default;
	
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-wm-portfolio-summary-extended-ng
	 */
	/**
	 * @module ext-wm-portfolio-summary-extended-ng
	 *
	 * @description
	 * Additional extension for portfolio summary widget.
	 *
	 *
	 * @requires vendor-bb-uib-popover
	 * @requires vendor-bb-uib-accordion
	 * @example
	 * <!-- portfolio widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-wm-portfolio-summary-extended-ng</value>
	 * </property>
	 *
	 *
	 */
	
	var hooks = exports.hooks = extHooks;
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbUibAccordion2.default, _uiBbPaginatorNg2.default, _uiBbFormatAmountNg2.default, _uiBbSortableColumnNg2.default, _uiBbSearchBoxNg2.default, _uiBbLoadingOverlayNg2.default, _uiBbEllipsisTooltipNg2.default, _uiBbChartjsChartDonutNg2.default, _uiBbModalNg2.default, _uiBbNotificationStripeNg2.default, _uiBbLoadingIndicatorNg2.default, _uiBbI18nNg2.default, _uiBbEmptyStateNg2.default, _uiBbDropdownSelectNg2.default, _uiBbConfirmNg2.default, _vendorBbAngularNgMessages2.default, _libWmPluralizeI18nKeyFilterNg2.default];
	
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
/* 48 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_48__;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_49__;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_50__;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_51__;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_52__;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_54__;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_55__;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _errors;
	
	var _libWmColorset = __webpack_require__(9);
	
	var _libBbModelErrors = __webpack_require__(8);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* eslint max-len: ["error", { "ignoreComments": true }] */
	
	
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
	 * @name NAME_INPUT_VALIDATION_PATTERN
	 * @type {string}
	 *
	 * @description
	 * Regular expression for input field
	 */
	var NAME_INPUT_VALIDATION_PATTERN = '^[^\\\\]*$';
	
	/**
	 * @description
	 * Contains config used to validate input field
	 *
	 * @name validation
	 * @type {object}
	 */
	var validation = {
	  nameInputValidationPattern: NAME_INPUT_VALIDATION_PATTERN
	};
	
	/**
	 * @name sortAlphabetically
	 * @type {function}
	 *
	 * @description
	 * Sorts given list of items alphabetically
	 *
	 * @param list Array of items to be sorted
	 * @param key Filb. by which list will be sorted
	 * @returns {array} Sorted list
	 */
	var sortAlphabetically = function sortAlphabetically(list, key) {
	  if (list && list.length > 0) {
	    return list.slice().sort(function (a, b) {
	      if (a[key] < b[key]) return -1;else if (a[key] > b[key]) return 1;
	      return 0;
	    });
	  }
	  return list;
	};
	
	exports.default = function (_ref) {
	  var $filter = _ref.$filter,
	      stateContainer = _ref.stateContainer;
	
	  var numberFilter = $filter('number');
	  var i18nFilter = $filter('i18n');
	  var i18nPluralizeFilter = $filter('i18nPluralize');
	
	  /**
	   * @name addToExistingListDefaultItem
	   * @type {object}
	   *
	   * @description
	   * Holds default custom lists filter state
	   */
	  var existingListDefaultItem = {
	    name: i18nFilter('portfolios.addToExistingList')
	  };
	
	  /**
	   * @name PRECISION
	   * @type {number}
	   *
	   * @description
	   * Number of decimals to display
	   */
	  var PRECISION = 2;
	
	  var headers = [{
	    label: 'portfolio.label',
	    class: 'col-3',
	    sortable: {
	      key: 'clientName',
	      direction: 'ASC'
	    }
	  }, {
	    label: 'portfolio.alias',
	    class: 'col-1 d-none d-lg-block',
	    isHidden: function isHidden() {
	      return false;
	    },
	    sortable: {
	      key: 'alias',
	      direction: 'ASC'
	    }
	  }, {
	    label: 'portfolio.riskClass',
	    class: 'col-1',
	    isHidden: function isHidden() {
	      return false;
	    },
	    sortable: {
	      key: 'riskClass',
	      direction: 'ASC'
	    }
	  }, {
	    label: 'portfolio.ytd.performance.pct',
	    class: 'col-2 col-lg-1',
	    isHidden: function isHidden() {
	      return false;
	    },
	    sortable: {
	      key: 'performanceYTDpct',
	      direction: 'DESC'
	    }
	  }, {
	    label: 'portfolio.valuation',
	    class: 'col-2 text-right',
	    isHidden: function isHidden() {
	      return false;
	    },
	    sortable: {
	      key: 'valuation.amount',
	      direction: 'DESC'
	    }
	  }, {
	    label: 'portfolio.currency',
	    class: 'col-1',
	    isHidden: function isHidden() {
	      return false;
	    },
	    sortable: {
	      key: 'valuation.currencyCode',
	      direction: 'ASC'
	    }
	  }];
	
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
	   * Checks if actual sortable key equal to orderBy state
	   *
	   * @public
	   * @name isSortableActive
	   * @type {function}
	   * @param {object} sortable     Object with sortable props
	   * @param {oblect} sort         Sort state of controller
	   *
	   * @returns {boolean}
	   */
	  var isSortableActive = function isSortableActive(sortable, orderBy) {
	    return sortable.key === orderBy;
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
	
	  /**
	   * @description
	   * Contains default modal config (if any) used to init the modal window
	   *
	   * @name modal
	   * @type {object}
	   */
	  var modal = {};
	
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
	    isFavorite: false,
	    status: {
	      isOpen: false,
	      success: false,
	      i18nKey: null
	    }
	  };
	
	  /**
	   * @description
	   * Pluralizes i18n message key in case pluralize argument is true.
	   * Otherwise, it returns passed i18n message key.
	   *
	   * @inner
	   * @name doPluralize
	   * @type {function}
	   * @param {string}  i18nKeyName  i18n name of notification to display in message
	   * @param {boolean} pluralize Flag whether message key should be pluralized
	   * @param {number} itemsNumber Number to use in pluralization logic
	   */
	  var doPluralize = function doPluralize(i18nKeyName, pluralize, itemsNumber) {
	    return pluralize ? i18nPluralizeFilter(i18nKeyName, itemsNumber) : i18nKeyName;
	  };
	
	  /**
	   * @description
	   *
	   * Function that invokes a successful notification
	   *
	   * @public
	   * @name notificationSuccess
	   * @type {function}
	   * @param {string}              i18nKeyName     i18n name of notification to display in message
	   *
	   */
	  var notificationSuccess = function notificationSuccess(i18nKeyName, data, pluralize, itemsNumber) {
	    notifications.status.isOpen = true;
	    notifications.status.success = true;
	    notifications.status.i18n = i18nFilter(doPluralize(i18nKeyName + '.success', pluralize, itemsNumber), data);
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
	  var notificationError = function notificationError(i18nKeyName, data, pluralize, itemsNumber) {
	    notifications.status.isOpen = true;
	    notifications.status.success = false;
	    notifications.status.i18n = i18nFilter(doPluralize(i18nKeyName + '.error', pluralize, itemsNumber), data);
	  };
	
	  /**
	   * @description
	   *
	   * Function that invokes a notification when portfolio is added to favorites list
	   *
	   * @public
	   * @name notificationAddFavorites
	   * @type {function}
	   *
	   */
	  var notificationAddFavorites = function notificationAddFavorites() {
	    notifications.status.isOpen = true;
	    notifications.status.success = true;
	  };
	
	  /**
	   * @description
	   *
	   * Function that invokes a notification when portfolio is removed from favorites list
	   *
	   * @public
	   * @name notificationRemoveFavorites
	   * @type {function}
	   * @param {string} i18nKeyName i18n name of notification to display in message
	   *
	   */
	  var notificationRemoveFavorites = function notificationRemoveFavorites(i18nKeyName) {
	    notifications.status.isOpen = true;
	    notifications.status.success = true;
	    notifications.status.i18n = i18nFilter(i18nKeyName + '.remove');
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
	    notifications.isFavorite = false;
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
	   * @name initModal
	   *
	   * @description
	   * Get modal widget data
	   * @param {object} modalConfig Config modal object
	   * @type {function}
	   */
	  var initModal = function initModal(modalConfig) {
	    modal.isOpen = true;
	    modal.title = modalConfig.title;
	    modal.list = {
	      name: modalConfig.listName || ''
	    };
	    modal.onSubmit = modalConfig.onSubmit;
	  };
	
	  /**
	   * @name getModalData
	   *
	   * @description
	   * Get modal widget data
	   *
	   * @type {function}
	   * @returns {object}
	   */
	  var getModalData = function getModalData() {
	    return modal;
	  };
	
	  /**
	   * @name cancel
	   *
	   * @description
	   * Cancel / close the modal window
	   *
	   * @type {function}
	   * @returns {void}
	   */
	  var cancel = function cancel() {
	    modal.isOpen = false;
	  };
	
	  /**
	   * @name setSelectedList
	   *
	   * @description
	   * Set selected list
	   * @param {object} ctrl  Controller object
	   * @param {object} selectedList  Selected list object
	   *
	   * @type {function}
	   */
	
	  /**
	   * @name createNewList
	   *
	   * @description
	   * Create new list
	   * @param {object} $ctrl  Controller object
	   * @param {object} list  Custom list object
	   *
	   * @type {function}
	   */
	  var createNewList = function createNewList($ctrl, list) {
	    var state = stateContainer.getState();
	    var selectedPortfoliosIds = Object.keys(state.portfolios.list).filter(function (key) {
	      return state.portfolios.list[key].isChecked;
	    });
	
	    var data = {
	      name: list.name,
	      portfolios: selectedPortfoliosIds
	    };
	    $ctrl.createCustomList(data).then(function () {
	      cancel();
	      notificationSuccess('createNewList', { listName: data.name });
	      Object.assign($ctrl, { selectedExistingList: existingListDefaultItem });
	    }).catch(function (error) {
	      cancel();
	      notificationError('createNewList', { listName: data.name });
	      throw error;
	    }).then($ctrl.loadCustomLists).then(function (customLists) {
	      return $ctrl.setSelectedList(customLists.find(function (item) {
	        return item.name === list.name;
	      }));
	    }).then($ctrl.load);
	  };
	
	  /**
	   * @name renameCustomList
	   *
	   * @description
	   * Edit custom list name
	   * @param {object} ctrl  Controller object
	   * @param {object} list  New list name
	   * @param {string} uuid  Custom list uuid
	   *
	   * @type {function}
	   */
	  var renameCustomList = function renameCustomList(ctrl, list, uuid) {
	    ctrl.renameCustomList(uuid, list).then(function () {
	      cancel();
	      Object.assign(ctrl, { selectedList: list });
	      var state = stateContainer.getState();
	      var oldSelectedListName = state.portfolios.selectedList.name;
	
	      stateContainer.setState(Object.assign({}, state, {
	        portfolios: Object.assign({}, state.portfolios, {
	          customLists: state.portfolios.customLists.map(function (item) {
	            return item.uuid === uuid ? Object.assign({}, item, { name: list.name }) : item;
	          }),
	          selectedList: Object.assign({}, state.portfolios.selectedList, list)
	        })
	      }));
	      notificationSuccess('editList', { listName: oldSelectedListName });
	    }).catch(function () {
	      cancel();
	      notificationError('editList', { listName: ctrl.selectedList.name });
	    });
	  };
	
	  /**
	   * @name showCreateNewListModal
	   *
	   * @description
	   * Show create new list modal
	   * @type {function}
	   *
	   * @returns {object} Config modal object
	   */
	  var showCreateNewListModal = function showCreateNewListModal() {
	    return initModal({
	      title: i18nFilter('portfolios.createNewList'),
	      onSubmit: createNewList
	    });
	  };
	
	  /**
	   * @name showEditListModal
	   *
	   * @description
	   * Show edit list modal
	   * @type {function}
	   *
	   * @returns {object} Config modal object
	   */
	  var showEditListModal = function showEditListModal() {
	    var state = stateContainer.getState();
	    return initModal({
	      title: i18nFilter('portfolios.editExistingList'),
	      onSubmit: renameCustomList,
	      listName: state.portfolios.selectedList.name
	    });
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
	    return state.portfolios && state.portfolios.data && state.portfolios.data.length;
	  });
	
	  var selectedPortfolios = function selectedPortfolios(checked) {
	    var state = stateContainer.getState();
	    stateContainer.setState(Object.assign({}, state, {
	      portfolios: Object.assign({}, state.portfolios, {
	        data: state.portfolios.data.map(function (portfolio) {
	          return Object.assign({}, portfolio, {
	            isChecked: checked
	          });
	        })
	      })
	    }));
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
	    return state.portfolios.data.map(function (iban) {
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
	   * @name searchPortfolios
	   * @type {function}
	   *
	   * @description
	   * Performs search portfolios by query string parameter
	   *
	   * @param {object} $ctrl Controller of the widget
	   */
	  var searchPortfolios = function searchPortfolios($ctrl) {
	    var state = stateContainer.getState();
	    stateContainer.setState(Object.assign({}, state, {
	      portfolios: Object.assign({}, state.portfolios, {
	        loading: true
	      }),
	      pageParams: Object.assign({}, state.pageParams, {
	        from: 0
	      })
	    }));
	    $ctrl.load(stateContainer.getState().pageParams);
	  };
	
	  var onPortfolioChecked = function onPortfolioChecked(iban) {
	    var state = stateContainer.getState();
	    stateContainer.setState(Object.assign({}, state, {
	      isAllChecked: false,
	      portfolios: Object.assign({}, state.portfolios, {
	        list: Object.assign({}, state.portfolios.list, _defineProperty({}, iban, Object.assign({}, state.portfolios.list[iban], {
	          isChecked: !state.portfolios.list[iban].isChecked
	        })))
	      })
	    }));
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
	   * @description
	   * Returns correct generic message for empty-state
	   *
	   * @public
	   * @name getMessageForNoPortfolio
	   * @type {function}
	   *
	   * @returns {object} Message object
	   */
	  var getMessageForNoPortfolio = stateContainer.createSelector(function (state) {
	    return state.pageParams.query ? {
	      icon: 'fa-search',
	      title: 'portfolios.noSearchResult.title',
	      subtitle: 'portfolios.noSearchResult.message'
	    } : {
	      icon: 'fa-exclamation-triangle',
	      title: 'portfolios.empty.title',
	      subtitle: 'portfolios.empty.message.noPortfolios'
	    };
	  });
	
	  /**
	   * @name toggleAll
	   * @type {function}
	   *
	   * @description
	   * Toggles selected state for all portfolios
	   *
	   * @returns {void}
	   */
	  var toggleAll = function toggleAll() {
	    var state = stateContainer.getState();
	    var isAllChecked = !state.isAllChecked;
	
	    stateContainer.setState(Object.assign({}, state, {
	      isAllChecked: isAllChecked,
	      portfolios: Object.assign({}, state.portfolios, {
	        list: Object.keys(state.portfolios.list).reduce(function (list, current) {
	          return Object.assign({}, list, _defineProperty({}, current, Object.assign({}, state.portfolios.list[current], {
	            isChecked: isAllChecked
	          })));
	        }, {})
	      })
	    }));
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
	   * @name isOpen
	   * @public
	   * @type {function}
	   * @description Tells, whether item's open property is truthy
	   * @param {number} id
	   * @param {number} index Index of portfolio in portfolios collection
	   * @returns {boolean} Flag (true|false) that stands for open state of item
	   */
	  var isOpen = function isOpen(id) {
	    return mapOfOpenItems.get(id);
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
	   * @name isChecked
	   * @type {function}
	   *
	   * @description
	   * Checks whether portfolio item is checked
	   *
	   * @returns {boolean} State of portfolio item selection
	   */
	  var isChecked = function isChecked(iban) {
	    return stateContainer.getState().portfolios.list[iban].isChecked;
	  };
	
	  /**
	   * @description
	   * Checks if all portfolios are checked
	   *
	   * @name isAllChecked
	   * @type {function}
	   * @returns {boolean} Returns true if all portfolios are checked
	   */
	  var isAllChecked = stateContainer.createSelector(function (state) {
	    return state.isAllChecked;
	  });
	
	  /**
	   * @name allPortfoliosCustomListItem
	   * @type {object}
	   *
	   * @description
	   * Holds default custom lists filter state
	   */
	  var allPortfoliosCustomListItem = {
	    name: i18nFilter('portfolios.all')
	  };
	  var favoritesPortfolios = {
	    name: i18nFilter('portfolios.favorites'),
	    isFavorite: true
	  };
	
	  /**
	   * @name getCustomListDefault
	   * @type {function}
	   * @public
	   *
	   * @description
	   * Returns default custom list value
	   *
	   * @returns {object} Custom list object
	   */
	  var getCustomListDefault = function getCustomListDefault() {
	    return stateContainer.getState().portfolios.selectedList || allPortfoliosCustomListItem;
	  };
	
	  /**
	   * @name existingListEmptyItem
	   * @type {object}
	   *
	   * @description
	   * Holds default custom lists empty filter state
	   */
	  var existingListEmptyItem = {
	    name: i18nFilter('portfolios.addToExistingListEmpty')
	  };
	
	  /**
	   * @public
	   * @name getCustomListFilterState
	   * @type {function}
	   *
	   * @description
	   * Returns correct custom lists filter state
	   *
	   * @returns {object} Filter state
	   */
	  var getCustomListFilterState = stateContainer.createSelector(function (state) {
	    if (state.portfolios.customLists.length > 0) {
	      return existingListDefaultItem;
	    }
	    return existingListEmptyItem;
	  });
	
	  /**
	   * @public
	   * @name getCustomLists
	   * @type {function}
	   *
	   * @description
	   * Selector for all custom lists
	   *
	   * @returns {array} Custom lists
	   */
	  var getCustomLists = stateContainer.createSelector(function (state) {
	    var sortedCustomList = sortAlphabetically(state.portfolios.customLists, 'name') || [];
	    return [].concat(_toConsumableArray(sortedCustomList));
	  });
	
	  /**
	   * @name isNameDuplicate
	   * @type {function}
	   *
	   * @description
	   * Checks if string is present in array
	   *
	   * @returns {boolean}
	   */
	  var isNameDuplicate = function isNameDuplicate(name, values) {
	    return values.map(function (item) {
	      return item.name.toLowerCase();
	    }).includes(name.toLowerCase());
	  };
	
	  /**
	   * @public
	   * @name getExistingCustomLists
	   * @type {function}
	   *
	   * @description
	   * Selector for all custom lists
	   *
	   * @returns {array} Custom lists
	   */
	  var getExistingCustomLists = stateContainer.createSelector(function (state) {
	    return sortAlphabetically(state.portfolios.customLists, 'name');
	  });
	
	  /**
	   * @public
	   * @name arePortfoliosSelected
	   * @type {function}
	   *
	   * @description
	   * Tells, whether any portfolio is selected
	   *
	   * @returns {boolean} True in case any portfolio is selected/checked
	   */
	  var arePortfoliosSelected = stateContainer.createSelector(function (state) {
	    return Object.keys(state.portfolios.list).some(function (key) {
	      return state.portfolios.list[key].isChecked;
	    });
	  });
	
	  /**
	   * @name getSelectedPortfolios
	   * @type {function}
	   *
	   * @description
	   * Returns ids of selected/checked portfolios
	   *
	   * @returns {array.<string>} Array of portfolios` ids
	   */
	  var getSelectedPortfolios = stateContainer.createSelector(function (state) {
	    return Object.keys(state.portfolios.list).filter(function (key) {
	      return state.portfolios.list[key].isChecked;
	    });
	  });
	
	  /**
	   * @name selectedPortfoliosAmount
	   * @type {function}
	   *
	   * @description
	   * Returns number of selected portfolios
	   *
	   * @returns {number} Number of selected portfolios
	   */
	  var selectedPortfoliosAmount = stateContainer.createSelector(function () {
	    return getSelectedPortfolios().length;
	  });
	
	  /**
	   * @public
	   * @name onExistingListSelect
	   * @type {function}
	   *
	   * @param {object} $ctrl Controller of the widget
	   * @param {array.<string>} Array of portfolios`s ids to add to custom list
	   *
	   * @description
	   * Performs actions, needed on selection of existing list
	   *
	   * @returns {void}
	   */
	  var onExistingListSelect = function onExistingListSelect($ctrl, portfoliosToAdd) {
	    var selectedExistingList = $ctrl.selectedExistingList;
	
	    Object.assign($ctrl, { selectedExistingList: existingListDefaultItem });
	    var selectedAmount = selectedPortfoliosAmount();
	
	    $ctrl.setPortfoliosToCustomList(selectedExistingList.uuid, portfoliosToAdd).then(function () {
	      return notificationSuccess('addToExistingList', { listName: selectedExistingList.name }, true, selectedAmount);
	    }).catch(function (error) {
	      notificationError('addToExistingList', { listName: $ctrl.selectedExistingList.name }, true, selectedAmount);
	      throw error;
	    }).then(function () {
	      return $ctrl.setSelectedList(selectedExistingList);
	    });
	  };
	
	  /**
	   * @public
	   * @name afterLoadCustomLists
	   * @type {function}
	   *
	   * @description
	   * Performs actions, needed after loading of custom lists
	   *
	   * @returns {void}
	   */
	  var afterLoadCustomLists = function afterLoadCustomLists($ctrl) {
	    return function (data) {
	      if (data.length === 0) {
	        return false;
	      }
	      Object.assign($ctrl, { selectedExistingList: existingListDefaultItem });
	      return existingListDefaultItem;
	    };
	  };
	
	  /**
	   * @name isCustomListSelected
	   * @type {function}
	   *
	   * @description
	   * Checks if custom list is selected
	   * @returns {boolean} Returns true if custom list is selected
	   */
	  var isCustomListSelected = function isCustomListSelected() {
	    var state = stateContainer.getState();
	    return state.portfolios.selectedList && state.portfolios.selectedList.uuid;
	  };
	
	  /**
	   * @name onCustomListDelete
	   * @type {function}
	   *
	   * @description
	   * Deletes a selected custom list
	   */
	  var onCustomListDelete = function onCustomListDelete($ctrl, load, deleteCustomList) {
	    if (isCustomListSelected()) {
	      var state = stateContainer.getState();
	      deleteCustomList(state.portfolios.selectedList.uuid).then(function (_ref2) {
	        var customLists = _ref2.customLists;
	
	        notificationSuccess('deleteList', { listName: state.portfolios.selectedList.name });
	        $ctrl.setSelectedList(allPortfoliosCustomListItem);
	
	        if (customLists.length === 0) {
	          Object.assign($ctrl, {
	            selectedExistingList: existingListEmptyItem
	          });
	        }
	      }).catch(function () {
	        return notificationError('deleteList', { listName: state.portfolios.selectedList.name });
	      });
	    }
	  };
	
	  /**
	   * @name onPortfolioFromListDelete
	   * @type {function}
	   *
	   * @description
	   * Deletes a selected custom list
	   */
	  var onPortfolioFromListDelete = function onPortfolioFromListDelete($ctrl, portfoliosToRemove) {
	    var state = stateContainer.getState();
	    var uuid = state.portfolios.selectedList.uuid;
	
	    $ctrl.removePortfolioFromList(portfoliosToRemove, uuid).then(function (response) {
	      var currentState = stateContainer.getState();
	      var _currentState$pagePar = currentState.pageParams,
	          from = _currentState$pagePar.from,
	          size = _currentState$pagePar.size,
	          totalItems = _currentState$pagePar.totalItems;
	
	      if (totalItems === from * size + portfoliosToRemove.length && from !== 0) {
	        stateContainer.setState(Object.assign({}, currentState, {
	          pageParams: Object.assign({}, currentState.pageParams, {
	            from: from - 1
	          })
	        }));
	      }
	      return response;
	    }).then(function () {
	      return notificationSuccess('deletePortfolioFromList', {
	        listName: state.portfolios.selectedList.name,
	        portfoliosNumber: selectedPortfoliosAmount()
	      }, true, selectedPortfoliosAmount());
	    }).then(function () {
	      return $ctrl.load({ customListUuid: uuid });
	    }).catch(function () {
	      return notificationError('deletePortfolioFromList', {
	        listName: state.portfolios.selectedList.name
	      }, true, selectedPortfoliosAmount());
	    });
	  };
	
	  /**
	   * @name togglePortfolioAsFavorite
	   * @type {function}
	   * @param {function} toggleFn Ctrl`s function to toggle portfolio`s Favorite status with
	   * @param {string} IBAN IBAN of Portfolio to change Favorite status of
	   * @param {boolean} isFavorite Is portfolio already in favorites list or should be added
	   *
	   * @description
	   * Set/Unset portfolio as favorite. In case error happens, displays notification message.
	   */
	  var togglePortfolioAsFavorite = function togglePortfolioAsFavorite(toggleFn, IBAN, isFavorite) {
	    toggleFn(IBAN).then(function () {
	      if (!isFavorite) {
	        notifications.isFavorite = true;
	        notificationAddFavorites();
	      } else {
	        notifications.isFavorite = false;
	        notificationRemoveFavorites('favoritesList');
	      }
	    }).catch(function () {
	      return notificationError('settingPortfolioAsFavorite', {});
	    });
	  };
	
	  /**
	   * @public
	   * @name goToFavorites
	   * @type {function}
	   *
	   * @description
	   * Show list of favorites portfolios after click on link in notification
	   *
	   */
	  var goToFavorites = function goToFavorites($ctrl) {
	    var state = stateContainer.getState();
	    stateContainer.setState(Object.assign({}, state, {
	      portfolios: Object.assign({}, state.portfolios, {
	        selectedList: favoritesPortfolios
	      })
	    }));
	    $ctrl.setSelectedList(favoritesPortfolios);
	  };
	
	  /**
	   * @public
	   * @name getNotificationWithLink
	   * @type {function}
	   *
	   * @description
	   * Return parameter, that define correct message in notification
	   *
	   */
	  var getNotificationWithLink = function getNotificationWithLink() {
	    return notifications.isFavorite;
	  };
	
	  /**
	   * @public
	   * @name shouldDisableAddToCustomListDropdown
	   * @type {function}
	   *
	   * @description
	   * Flag or state that defines if "Add to Existing List" dropdown should be disabled or enabled
	   *
	   * @returns {boolean} state to disable or enable "Add to Existing List" dropdown
	   */
	  var shouldDisableAddToCustomListDropdown = stateContainer.createSelector(function (state) {
	    return !arePortfoliosSelected() || getExistingCustomLists().length === 0 || getExistingCustomLists().length === 1 && getExistingCustomLists()[0].uuid === state.portfolios.selectedList.uuid;
	  });
	
	  return {
	    headers: headers,
	    getNetCashTotalAmount: getNetCashTotalAmount,
	    isSortableActive: isSortableActive,
	    showSign: showSign,
	    chartOptions: chartOptions,
	    showCreateNewListModal: showCreateNewListModal,
	    showEditListModal: showEditListModal,
	    renameCustomList: renameCustomList,
	    isNameDuplicate: isNameDuplicate,
	    getModalData: getModalData,
	    createNewList: createNewList,
	    cancel: cancel,
	    isPortfoliosAvailable: isPortfoliosAvailable,
	    plugins: plugins,
	    portfolios: portfolios,
	    toggleAll: toggleAll,
	    isOpen: isOpen,
	    onToggle: onToggle,
	    isAllChecked: isAllChecked,
	    getCustomLists: getCustomLists,
	    selectedPortfolios: selectedPortfolios,
	    getSelectedPortfolios: getSelectedPortfolios,
	    allPortfoliosCustomListItem: allPortfoliosCustomListItem,
	    onPortfolioChecked: onPortfolioChecked,
	    getExistingCustomLists: getExistingCustomLists,
	    existingListDefaultItem: existingListDefaultItem,
	    existingListEmptyItem: existingListEmptyItem,
	    arePortfoliosSelected: arePortfoliosSelected,
	    getCustomListDefault: getCustomListDefault,
	    localizeNumber: localizeNumber,
	    getColorClassByIndex: _libWmColorset.getColorClassByIndex,
	    onExistingListSelect: onExistingListSelect,
	    isChecked: isChecked,
	    afterLoadCustomLists: afterLoadCustomLists,
	    getError: getError,
	    isCustomListSelected: isCustomListSelected,
	    selectedPortfoliosAmount: selectedPortfoliosAmount,
	    searchPortfolios: searchPortfolios,
	    onCustomListDelete: onCustomListDelete,
	    onPortfolioFromListDelete: onPortfolioFromListDelete,
	    getNotifications: getNotifications,
	    closeNotification: closeNotification,
	    togglePortfolioAsFavorite: togglePortfolioAsFavorite,
	    getMessageForNoPortfolio: getMessageForNoPortfolio,
	    goToFavorites: goToFavorites,
	    getNotificationWithLink: getNotificationWithLink,
	    getCustomListFilterState: getCustomListFilterState,
	    favoritesPortfolios: favoritesPortfolios,
	    validation: validation,
	    shouldDisableAddToCustomListDropdown: shouldDisableAddToCustomListDropdown
	  };
	};

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name defaultSortableColumn
	 *
	 * @description
	 * Return the key of the default sort column
	 *
	 * @type {function}
	 * @returns {string} Returns column key
	 */
	var defaultSortableColumn = exports.defaultSortableColumn = function defaultSortableColumn() {
	  return 'clientName';
	};
	
	/**
	 * @name defaultSortableDirection
	 *
	 * @description
	 * Return the sorting direction of the default sort column
	 *
	 * @type {function}
	 * @returns {string} Returns sorting direction
	 */
	var defaultSortableDirection = exports.defaultSortableDirection = function defaultSortableDirection() {
	  return 'ASC';
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-wm-portfolio-summary-extended-ng.js.map