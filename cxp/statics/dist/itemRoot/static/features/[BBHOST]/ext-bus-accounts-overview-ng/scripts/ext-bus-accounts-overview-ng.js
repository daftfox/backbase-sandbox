(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-loading-indicator-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("ui-bus-format-amount-ng"), require("ui-bb-chartjs-chart-line-ng"), require("ui-bb-loading-overlay-ng"), require("lib-bb-styles"), require("ui-bb-inline-status-ng"), require("ui-bb-ellipsis-tooltip-ng"), require("ui-bb-sortable-column-ng"), require("ui-bb-load-more-ng"), require("ui-bb-paginator-ng"), require("ui-bb-modal-ng"), require("ui-bb-search-box-ng"), require("ui-bb-highlight-text-ng"), require("vendor-bb-uib-dropdown"), require("lib-bb-iban"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bus-accounts-overview-ng", ["vendor-bb-angular-ng-aria", "ui-bb-loading-indicator-ng", "ui-bb-substitute-error-ng", "ui-bb-i18n-ng", "ui-bb-empty-state-ng", "ui-bus-format-amount-ng", "ui-bb-chartjs-chart-line-ng", "ui-bb-loading-overlay-ng", "lib-bb-styles", "ui-bb-inline-status-ng", "ui-bb-ellipsis-tooltip-ng", "ui-bb-sortable-column-ng", "ui-bb-load-more-ng", "ui-bb-paginator-ng", "ui-bb-modal-ng", "ui-bb-search-box-ng", "ui-bb-highlight-text-ng", "vendor-bb-uib-dropdown", "lib-bb-iban"], factory);
	else if(typeof exports === 'object')
		exports["ext-bus-accounts-overview-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-loading-indicator-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("ui-bus-format-amount-ng"), require("ui-bb-chartjs-chart-line-ng"), require("ui-bb-loading-overlay-ng"), require("lib-bb-styles"), require("ui-bb-inline-status-ng"), require("ui-bb-ellipsis-tooltip-ng"), require("ui-bb-sortable-column-ng"), require("ui-bb-load-more-ng"), require("ui-bb-paginator-ng"), require("ui-bb-modal-ng"), require("ui-bb-search-box-ng"), require("ui-bb-highlight-text-ng"), require("vendor-bb-uib-dropdown"), require("lib-bb-iban"));
	else
		root["ext-bus-accounts-overview-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-loading-indicator-ng"], root["ui-bb-substitute-error-ng"], root["ui-bb-i18n-ng"], root["ui-bb-empty-state-ng"], root["ui-bus-format-amount-ng"], root["ui-bb-chartjs-chart-line-ng"], root["ui-bb-loading-overlay-ng"], root["lib-bb-styles"], root["ui-bb-inline-status-ng"], root["ui-bb-ellipsis-tooltip-ng"], root["ui-bb-sortable-column-ng"], root["ui-bb-load-more-ng"], root["ui-bb-paginator-ng"], root["ui-bb-modal-ng"], root["ui-bb-search-box-ng"], root["ui-bb-highlight-text-ng"], root["vendor-bb-uib-dropdown"], root["lib-bb-iban"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_61__, __WEBPACK_EXTERNAL_MODULE_62__, __WEBPACK_EXTERNAL_MODULE_64__, __WEBPACK_EXTERNAL_MODULE_66__, __WEBPACK_EXTERNAL_MODULE_74__, __WEBPACK_EXTERNAL_MODULE_75__, __WEBPACK_EXTERNAL_MODULE_80__, __WEBPACK_EXTERNAL_MODULE_81__, __WEBPACK_EXTERNAL_MODULE_82__, __WEBPACK_EXTERNAL_MODULE_83__, __WEBPACK_EXTERNAL_MODULE_84__, __WEBPACK_EXTERNAL_MODULE_85__, __WEBPACK_EXTERNAL_MODULE_86__, __WEBPACK_EXTERNAL_MODULE_88__) {
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

	module.exports = __webpack_require__(79);

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
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
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
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
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_61__;

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_62__;

/***/ }),
/* 63 */,
/* 64 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_64__;

/***/ }),
/* 65 */,
/* 66 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_66__;

/***/ }),
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_74__;

/***/ }),
/* 75 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_75__;

/***/ }),
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(5);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbInlineStatusNg = __webpack_require__(74);
	
	var _uiBbInlineStatusNg2 = _interopRequireDefault(_uiBbInlineStatusNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(64);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBbSortableColumnNg = __webpack_require__(80);
	
	var _uiBbSortableColumnNg2 = _interopRequireDefault(_uiBbSortableColumnNg);
	
	var _uiBbLoadMoreNg = __webpack_require__(81);
	
	var _uiBbLoadMoreNg2 = _interopRequireDefault(_uiBbLoadMoreNg);
	
	var _uiBbChartjsChartLineNg = __webpack_require__(62);
	
	var _uiBbChartjsChartLineNg2 = _interopRequireDefault(_uiBbChartjsChartLineNg);
	
	var _vendorBbAngularNgAria = __webpack_require__(2);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbEllipsisTooltipNg = __webpack_require__(75);
	
	var _uiBbEllipsisTooltipNg2 = _interopRequireDefault(_uiBbEllipsisTooltipNg);
	
	var _uiBbPaginatorNg = __webpack_require__(82);
	
	var _uiBbPaginatorNg2 = _interopRequireDefault(_uiBbPaginatorNg);
	
	var _uiBusFormatAmountNg = __webpack_require__(61);
	
	var _uiBusFormatAmountNg2 = _interopRequireDefault(_uiBusFormatAmountNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(10);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBbModalNg = __webpack_require__(83);
	
	var _uiBbModalNg2 = _interopRequireDefault(_uiBbModalNg);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(4);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbSearchBoxNg = __webpack_require__(84);
	
	var _uiBbSearchBoxNg2 = _interopRequireDefault(_uiBbSearchBoxNg);
	
	var _uiBbHighlightTextNg = __webpack_require__(85);
	
	var _uiBbHighlightTextNg2 = _interopRequireDefault(_uiBbHighlightTextNg);
	
	var _vendorBbUibDropdown = __webpack_require__(86);
	
	var _vendorBbUibDropdown2 = _interopRequireDefault(_vendorBbUibDropdown);
	
	var _helpers = __webpack_require__(87);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _hooks = __webpack_require__(90);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbI18nNg2.default, _uiBbSubstituteErrorNg2.default, _uiBbInlineStatusNg2.default, _uiBbLoadingOverlayNg2.default, _uiBbSortableColumnNg2.default, _uiBbLoadMoreNg2.default, _uiBbChartjsChartLineNg2.default, _vendorBbAngularNgAria2.default, _uiBbEllipsisTooltipNg2.default, _uiBbPaginatorNg2.default, _uiBusFormatAmountNg2.default, _uiBbEmptyStateNg2.default, _uiBbModalNg2.default, _uiBbLoadingIndicatorNg2.default, _uiBbSearchBoxNg2.default, _uiBbHighlightTextNg2.default, _vendorBbUibDropdown2.default]; /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @module ext-bus-accounts-overview-ng
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @description
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Business extension for accounts.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @example
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * <!-- widget's model.xml -->
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * <property name="extension" viewHint="text-input,admin">
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *  <value type="string">ext-bus-accounts-overview-ng</value>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * </property>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */
	var hooks = exports.hooks = extHooks;
	
	var helpers = exports.helpers = _helpers2.default;

/***/ }),
/* 80 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_80__;

/***/ }),
/* 81 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_81__;

/***/ }),
/* 82 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_82__;

/***/ }),
/* 83 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_83__;

/***/ }),
/* 84 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_84__;

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_85__;

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_86__;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libBbIban = __webpack_require__(88);
	
	var _libBbStyles = __webpack_require__(66);
	
	var _libBbStyles2 = _interopRequireDefault(_libBbStyles);
	
	var _constants = __webpack_require__(89);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var helpers = function helpers(context) {
	  var dateFilter = context.$filter('date');
	  var i18nFilter = context.$filter('i18n');
	
	  /**
	   * @description
	   * Table headers configuration
	   * @type {Array}
	   * @name headers
	   */
	  var headers = _constants.tableHeaders;
	
	  /**
	   * @description
	   * Cards configuration for sorting
	   * @type {Array}
	   * @name cardsSort
	   */
	  var cardsSorting = _constants.cardsSortingData;
	
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
	   * Returns the account number with fallbacks
	   * @name getAccountNumber
	   * @type {function}
	   * @param  {object} item Account
	   * @return {string}      Acoount number if any
	   */
	  var getAccountNumber = function getAccountNumber(item) {
	    return (0, _libBbIban.formatByGroups)(item.IBAN) || (0, _libBbIban.formatByGroups)(item.BBAN) || item.productNumber;
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
	   * Gets the accounts collection from controller state
	   * @name getAccounts
	   * @type {function}
	   * @param  {object} $ctrl Current controller
	   * @return {array}        Accounts collection
	   */
	  var getAccounts = function getAccounts($ctrl) {
	    return $ctrl.state.accounts.data;
	  };
	
	  /**
	   * @description
	   * Opens the modal window with selectedProduct
	   * @name openModalWindow
	   * @type {function}
	   * @param {object} ext                extension reference
	   * @param {object} accounts           accounts state reference
	   * @param {object} selectedProduct    product to be shown
	   */
	  var openModalWindow = function openModalWindow(ext, accounts, selectedProduct) {
	    Object.assign(ext, { showModal: true, accounts: accounts, product: selectedProduct });
	  };
	
	  /**
	   * @description
	   * Closes the modal window
	   * @name closeModalWindow
	   * @type {function}
	   * @param {object} ext extension reference
	   */
	  var closeModalWindow = function closeModalWindow(ext) {
	    Object.assign(ext, { showModal: false, product: null });
	  };
	
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
	    return 'accounts-overview-details/' + templateName + '.html';
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
	
	  var formatAccountNumber = _libBbIban.formatByGroups;
	
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
	   * Template view type, what will be the view Card or List
	   * @type {Object}
	   * @param {string} type extension template type ( Card, List )
	   */
	  var templateViewType = { type: _constants.defaultTemplateView };
	
	  /**
	   * @description
	   * Change template view type
	   * @name changeTemplateTypeView
	   * @type {function}
	   * @param {string} view what type of template is, 'card' or 'list'
	   *
	   */
	  var changeTemplateTypeView = function changeTemplateTypeView(view) {
	    templateViewType.type = view || _constants.defaultTemplateView;
	  };
	
	  /**
	   * @description
	   * Changing sort direction by asc or desc. On second click on same sort type,
	   * the sorting is reversed (ASC/DESC)
	   *
	   * @name changeSortCardDirection
	   * @type {function}
	   * @param  {string} sortBy  what sortable key/type to be changed direction
	   *
	   * */
	  var changeSortCardDirection = function changeSortCardDirection(sortBy) {
	    var cardsSortByData = cardsSorting.find(function (item) {
	      return item.sortable.key === sortBy;
	    });
	    cardsSortByData.sortable.direction = cardsSortByData.sortable.direction === 'ASC' ? 'DESC' : 'ASC';
	  };
	
	  /**
	   * @description
	   * Configuration of balance history chart
	   *
	   * @inner
	   * @name lineChartOptionsInner
	   * @type {object}
	   * @returns {object} Configuration of performance chart
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
	      ticks: {
	        display: false
	      },
	      yAxes: [{
	        gridLines: {
	          color: (0, _libBbStyles2.default)(_constants.CSS_SELECTORS.yAxesgridLinescolor, 'color'),
	          tickMarkLength: _constants.CHART_OPTIONS.tickMarkLength,
	          zeroLineColor: (0, _libBbStyles2.default)(_constants.CSS_SELECTORS.yAxisZeroColor, 'color'),
	          zeroLineWidth: _constants.CHART_OPTIONS.zeroLineWidth
	        },
	        ticks: {
	          display: false
	        }
	      }],
	      xAxes: [{
	        display: false
	      }]
	    },
	    layout: {
	      padding: _constants.CHART_OPTIONS.paddings
	    }
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
	
	  /**
	   * @description
	   * Configuration of balance history chart
	   *
	   * @public
	   * @name lineChartOptions
	   * @type {function}
	   * @returns {object} Configuration of performance chart
	   */
	  var lineChartOptions = function lineChartOptions(currency) {
	    lineChartOptionsInner.tooltips.callbacks.label = function (tooltipItem) {
	      return (
	        // eslint-disable-next-line max-len
	        '(' + currency + ' ' + tooltipItem.yLabel.toFixed(2) + ') ' + dateFilter(tooltipItem.xLabel, 'short')
	      );
	    };
	    return lineChartOptionsInner;
	  };
	
	  return {
	    headers: headers,
	    cardsSorting: cardsSorting,
	    isSortableActive: isSortableActive,
	    getAccountNumber: getAccountNumber,
	    isPaginationTypeMatch: isPaginationTypeMatch,
	    getAccounts: getAccounts,
	    openModalWindow: openModalWindow,
	    closeModalWindow: closeModalWindow,
	    getProductTypeTemplateId: getProductTypeTemplateId,
	    formatBooleanToText: formatBooleanToText,
	    formatAccountNumber: formatAccountNumber,
	    hasValue: hasValue,
	    getFrequencyUnitKey: getFrequencyUnitKey,
	    isEmptyArray: isEmptyArray,
	    templateViewType: templateViewType,
	    changeTemplateTypeView: changeTemplateTypeView,
	    changeSortCardDirection: changeSortCardDirection,
	    lineChartOptions: lineChartOptions,
	    handleErrors: handleErrors
	  };
	};
	
	exports.default = helpers;

/***/ }),
/* 88 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_88__;

/***/ }),
/* 89 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Required privileges array
	 * @type {Array.<Object>}
	 */
	exports.default = [{
	  resource: 'Transactions',
	  function: 'Transactions',
	  privileges: ['view']
	}, {
	  resource: 'Payments',
	  function: 'SEPA CT',
	  privileges: ['create']
	}];
	
	/**
	 * Default template view
	 *
	 * @type {String}
	 */
	
	var defaultTemplateView = exports.defaultTemplateView = 'list';
	
	/**
	 * @description
	 * Card sortable configuration
	 * @type {Array}
	 * @name cardsSortBy
	 */
	var cardsSortingData = exports.cardsSortingData = [{
	  label: 'accounts.header.name',
	  sortable: {
	    key: 'name',
	    direction: 'ASC'
	  }
	}, {
	  label: 'accounts.header.number',
	  sortable: {
	    key: 'IBAN',
	    direction: 'ASC'
	  }
	}, {
	  label: 'accounts.header.currency',
	  sortable: {
	    key: 'currency',
	    direction: 'ASC'
	  }
	}, {
	  label: 'accounts.header.type',
	  sortable: {
	    key: 'productKindName',
	    direction: 'ASC'
	  }
	}];
	
	/**
	 * @description
	 * Table headers configuration
	 * @type {Array}
	 * @name tableHeaders
	 */
	var tableHeaders = exports.tableHeaders = [{
	  label: 'accounts.header.name',
	  sortable: {
	    key: 'name',
	    direction: 'ASC'
	  }
	}, {
	  label: 'accounts.header.number',
	  sortable: {
	    key: 'IBAN',
	    direction: 'DESC'
	  }
	}, {
	  label: 'accounts.header.bic',
	  sortable: {
	    key: 'BIC',
	    direction: 'DESC'
	  }
	}, {
	  label: 'accounts.header.type',
	  sortable: {
	    key: 'productKindName',
	    direction: 'DESC'
	  }
	}, {
	  label: 'accounts.header.currency',
	  sortable: {
	    key: 'currency',
	    direction: 'DESC'
	  }
	}, {
	  label: 'accounts.header.bookedBalance',
	  class: 'text-right',
	  sortable: {
	    key: 'bookedBalance',
	    direction: 'DESC'
	  }
	}, {
	  label: 'accounts.header.availableBalance',
	  class: 'text-right',
	  sortable: {
	    key: 'availableBalance',
	    direction: 'DESC'
	  }
	}, {
	  label: '', // Action buttons group
	  sortable: {}
	}];
	
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
	  }
	};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.processBalanceHistorySeries = exports.getRequestedPrivileges = undefined;
	
	var _constants = __webpack_require__(89);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _balanceHistoryProcess = __webpack_require__(91);
	
	var _balanceHistoryProcess2 = _interopRequireDefault(_balanceHistoryProcess);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name Hooks#getRequestedPrivileges
	 *
	 * @description
	 * Prepare required privileges into a form ready for template
	 *
	 * @type {Function}
	 * @returns {Array.<Object>} Required privileges array
	 */
	/* eslint-disable import/prefer-default-export */
	
	var getRequestedPrivileges = exports.getRequestedPrivileges = function getRequestedPrivileges() {
	  return _constants2.default;
	};
	
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
	};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libBbStyles = __webpack_require__(66);
	
	var _libBbStyles2 = _interopRequireDefault(_libBbStyles);
	
	var _constants = __webpack_require__(89);
	
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
/******/ ])
});
;
//# sourceMappingURL=ext-bus-accounts-overview-ng.js.map