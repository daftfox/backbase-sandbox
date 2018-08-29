(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-format-amount-ng"), require("lib-bb-model-errors"), require("vendor-bb-uib-accordion"), require("vendor-bb-angular-ng-aria"), require("ui-bb-calendar-popup-ng"), require("ui-bb-ellipsis-tooltip-ng"), require("ui-wm-portfolio-transactions-filter-ng"), require("ui-bb-load-more-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-wm-portfolio-transactions-ng", ["ui-bb-loading-indicator-ng", "ui-bb-i18n-ng", "ui-bb-empty-state-ng", "ui-bb-format-amount-ng", "lib-bb-model-errors", "vendor-bb-uib-accordion", "vendor-bb-angular-ng-aria", "ui-bb-calendar-popup-ng", "ui-bb-ellipsis-tooltip-ng", "ui-wm-portfolio-transactions-filter-ng", "ui-bb-load-more-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-wm-portfolio-transactions-ng"] = factory(require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-format-amount-ng"), require("lib-bb-model-errors"), require("vendor-bb-uib-accordion"), require("vendor-bb-angular-ng-aria"), require("ui-bb-calendar-popup-ng"), require("ui-bb-ellipsis-tooltip-ng"), require("ui-wm-portfolio-transactions-filter-ng"), require("ui-bb-load-more-ng"));
	else
		root["ext-wm-portfolio-transactions-ng"] = factory(root["ui-bb-loading-indicator-ng"], root["ui-bb-i18n-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-format-amount-ng"], root["lib-bb-model-errors"], root["vendor-bb-uib-accordion"], root["vendor-bb-angular-ng-aria"], root["ui-bb-calendar-popup-ng"], root["ui-bb-ellipsis-tooltip-ng"], root["ui-wm-portfolio-transactions-filter-ng"], root["ui-bb-load-more-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_59__, __WEBPACK_EXTERNAL_MODULE_60__) {
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

	module.exports = __webpack_require__(58);

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

/***/ 17:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.helpers = exports.hooks = undefined;
	
	var _vendorBbUibAccordion = __webpack_require__(17);
	
	var _vendorBbUibAccordion2 = _interopRequireDefault(_vendorBbUibAccordion);
	
	var _uiBbFormatAmountNg = __webpack_require__(6);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _vendorBbAngularNgAria = __webpack_require__(18);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbEllipsisTooltipNg = __webpack_require__(39);
	
	var _uiBbEllipsisTooltipNg2 = _interopRequireDefault(_uiBbEllipsisTooltipNg);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(2);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbI18nNg = __webpack_require__(3);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(4);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBbCalendarPopupNg = __webpack_require__(32);
	
	var _uiBbCalendarPopupNg2 = _interopRequireDefault(_uiBbCalendarPopupNg);
	
	var _uiWmPortfolioTransactionsFilterNg = __webpack_require__(59);
	
	var _uiWmPortfolioTransactionsFilterNg2 = _interopRequireDefault(_uiWmPortfolioTransactionsFilterNg);
	
	var _uiBbLoadMoreNg = __webpack_require__(60);
	
	var _uiBbLoadMoreNg2 = _interopRequireDefault(_uiBbLoadMoreNg);
	
	var _helpers = __webpack_require__(61);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _hooks = __webpack_require__(62);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-wm-portfolio-transactions-ng
	 */
	/**
	 * @module ext-wm-portfolio-transactions-ng
	 *
	 * @description
	 * Default extension for portfolio transactions widget.
	 *
	 *
	 * @requires vendor-bb-uib-accordion
	 * @example
	 * <!-- portfolio widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-wm-portfolio-transactions-ng</value>
	 * </property>
	 *
	 *
	 */
	
	var hooks = exports.hooks = extHooks;
	var helpers = exports.helpers = _helpers2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbUibAccordion2.default, _uiBbFormatAmountNg2.default, _vendorBbAngularNgAria2.default, _uiBbEllipsisTooltipNg2.default, _uiBbLoadingIndicatorNg2.default, _uiBbI18nNg2.default, _uiBbEmptyStateNg2.default, _uiBbCalendarPopupNg2.default, _uiWmPortfolioTransactionsFilterNg2.default, _uiBbLoadMoreNg2.default];
	
	/**
	 * Portfolio type definition
	 * @typedef {Object} PortfolioTransaction
	 */

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_59__;

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_60__;

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _errors;
	
	var _libBbModelErrors = __webpack_require__(8);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
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
	 * Relations between statuses and background color classes for these statuses
	 *
	 * @name statusBackgrounds
	 * @type {object}
	 */
	var statusBackgrounds = {
	  open: 'bg-primary',
	  pending: 'bg-warning',
	  closed: 'bg-secondary',
	  rejected: 'bg-danger',
	  accepted: 'bg-success',
	  'in progress': 'bg-warning',
	  live: 'bg-primary'
	};
	
	exports.default = function (_ref) {
	  var _columnsConfigByPosit;
	
	  var $filter = _ref.$filter,
	      stateContainer = _ref.stateContainer;
	
	  /**
	   * @description
	   * Ui-bb-calendar config to be used in transactions` filter`s 'Time period' date-range picker
	   *
	   * @name filterTimePeriodConfig
	   * @type {UiBbCalendarConfig}
	   */
	  var filterTimePeriodConfig = {
	    minDate: new Date(0),
	    maxDate: new Date()
	  };
	
	  /**
	   * @name numberFilter
	   * @type {function}
	   * @description Memorized filter by number
	   */
	  var numberFilter = $filter('number');
	
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
	   * Checks whether value is undefined
	   *
	   * @public
	   * @name isUndefined
	   * @type {function}
	   * @param {value} any
	   *
	   * @returns {boolean}
	   */
	  var isUndefined = function isUndefined(value) {
	    return typeof value === 'undefined';
	  };
	
	  /**
	   * @name POSITION_TYPES
	   * @enum {string}
	   *
	   * @description
	   * Map of constants for positions types
	   */
	  var POSITION_TYPES = {
	    SECURITY: 'Security',
	    CASH: 'Cash',
	    ALL: 'All'
	  };
	
	  /**
	   * @description
	   * Returns a function that filters transactions by position type
	   *
	   * @public
	   * @name transactionsFilterFn
	   * @type {function}
	   * @param {POSITION_TYPES} positionType
	   *
	   * @returns {function}
	   */
	  var transactionsFilterFn = stateContainer.createSelector(function (state) {
	    return function (transaction) {
	      return transaction.positionType.toLowerCase() === state.positionType.toLowerCase() || state.positionType === POSITION_TYPES.ALL;
	    };
	  });
	
	  /**
	   * @public
	   * @name isPositionTypeSelected
	   * @type {function}
	   * @description Returns boolean which tells wether given position type is currently selected
	   * @param {string} positionType Transactions' position type
	   * @returns {boolean} Is given type selected
	   */
	  var isPositionTypeSelected = function isPositionTypeSelected(positionType) {
	    return stateContainer.createSelector(function (state) {
	      return state.positionType.toLowerCase() === positionType.toLowerCase();
	    });
	  };
	
	  /**
	   * @public
	   * @name isAllSelected
	   * @type {boolean}
	   * @description Tells, whether all types of transactions have to be shown
	   */
	  var isAllSelected = isPositionTypeSelected('ALL');
	
	  /**
	   * @public
	   * @name isSecuritySelected
	   * @type {boolean} Do security type of transactions has to be shown
	   * @description Tells, whether security type of transactions has to be shown
	   */
	  var isSecuritySelected = isPositionTypeSelected('SECURITY');
	
	  /**
	   * @public
	   * @name isCashSelected
	   * @type {boolean} Do cash type of transactions has to be shown
	   * @description Tells, whether cash type of transactions has to be shown
	   */
	  var isCashSelected = isPositionTypeSelected('CASH');
	
	  /**
	   * @description
	   * Default config for columns.
	   * Specifies whether specific columns is visible by default,
	   * and what width it has.
	   *
	   * @public
	   * @name allColumnsDefaultConfig
	   * @type {Object.<string, Object>}
	   */
	  var allColumnsDefaultConfig = {
	    dateAndDescription: true,
	    quantity: true,
	    price: true,
	    amountAndCcy: true,
	    balance: true,
	    status: true
	  };
	
	  /**
	   * @description
	   * Config for changing table`s view based on selected position type.
	   * Config contains info whether specific column should be visible
	   * if specific position type is selected,
	   * and how width of visible column should change if some other columns are hidden.
	   *
	   * @public
	   * @name columnsConfigByPositionType
	   * @type {Object.<POSITION_TYPES, Object>}
	   */
	  var columnsConfigByPositionType = (_columnsConfigByPosit = {}, _defineProperty(_columnsConfigByPosit, POSITION_TYPES.ALL, allColumnsDefaultConfig), _defineProperty(_columnsConfigByPosit, POSITION_TYPES.SECURITY, allColumnsDefaultConfig), _defineProperty(_columnsConfigByPosit, POSITION_TYPES.CASH, Object.assign({}, allColumnsDefaultConfig, {
	    dateAndDescription: true,
	    quantity: false,
	    price: false,
	    amount: true
	  })), _columnsConfigByPosit);
	
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
	   * @public
	   * @name transactions
	   * @type {function}
	   * @description Selector for transactions' data
	   * @returns {array} Transactions list
	   */
	  var transactions = stateContainer.createSelector(function (state) {
	    return state.portfolioTransactions.data.map(function (id) {
	      return state.portfolioTransactions.list[id];
	    });
	  });
	
	  /**
	   * @public
	   * @name isFilterApplied
	   * @type {boolean} Are filter options applied
	   * @description Tells, whether filter options are applied
	   */
	  var isFilterApplied = stateContainer.createSelector(function (state) {
	    return !!state.appliedFilter;
	  });
	
	  /**
	   * @name mapOfOpenItems
	   * @type {map}
	   *
	   * @description
	   * Keeps ids of items that were toggled
	   */
	  var mapOfOpenItems = new Map();
	
	  /**
	   * @name isOpen
	   * @type {function}
	   * @description Tells, whether item's open property is truthy
	   * @param {number} id
	   * @returns {boolean} Flag (true|false) that stands for open state of item
	   */
	  var isOpen = function isOpen(id) {
	    return mapOfOpenItems.get(id);
	  };
	
	  /**
	   * @name onToggle
	   * @type {function}
	   * @description Changes open state of item to the opposite
	   * @param {object} item Transaction object
	   * @returns {map} Map of items
	   */
	  var onToggle = function onToggle(item, $ctrl) {
	    if (!item.details) {
	      $ctrl.loadTransactionDetails(item.id);
	    }
	
	    return mapOfOpenItems.set(item.id, !mapOfOpenItems.get(item.id));
	  };
	
	  /**
	   * @name filterOpenState
	   * @type {boolean}
	   *
	   * @description
	   * Displays current state of filter (open|closed)
	   */
	  var filterOpenState = false;
	
	  /**
	   * @public
	   * @name isFilterOpen
	   * @type {function}
	   * @returns {{filterOpenState: boolean}} Current state of filter
	   */
	  var isFilterOpen = function isFilterOpen() {
	    return filterOpenState;
	  };
	
	  /**
	   * @public
	   * @name toggleFilter
	   * @type {function}
	   * @param {object} state Current state of widget
	   * @description Toggles filter open state
	   */
	  var toggleFilter = function toggleFilter() {
	    filterOpenState = !filterOpenState;
	  };
	
	  /**
	   * @public
	   * @name closeFilter
	   * @type {function}
	   * @description Sets filter open state to false
	   */
	  var closeFilter = function closeFilter() {
	    filterOpenState = false;
	  };
	
	  /**
	   * @name isTransactionCategoryShown
	   * @type {function}
	   * @description Tells, whether filter transaction category label must be shown
	   * @returns {boolean} Flag (true|false) that stands for display state of filter label
	   */
	  var isTransactionCategoryShown = stateContainer.createSelector(function (state) {
	    if (!state.appliedFilter) {
	      return false;
	    }
	    return state.appliedFilter.transactionCategory.name !== state.initialFilterState.transactionCategory.name;
	  });
	
	  /**
	   * @name isAssetClassShown
	   * @type {function}
	   * @description Tells, whether filter asset class label must be shown
	   * @returns {boolean} Flag (true|false) that stands for display state of filter label
	   */
	  var isAssetClassShown = stateContainer.createSelector(function (state) {
	    if (!state.appliedFilter) {
	      return false;
	    }
	    return state.appliedFilter.assetClass.name !== state.initialFilterState.assetClass.name;
	  });
	
	  /**
	   * @name isAccountShown
	   * @type {function}
	   * @description Tells, whether filter account label must be shown
	   * @returns {boolean} Flag (true|false) that stands for display state of filter label
	   */
	  var isAccountShown = stateContainer.createSelector(function (state) {
	    if (!state.appliedFilter || !state.appliedFilter.account) {
	      return false;
	    }
	    return state.appliedFilter.account.name !== state.initialFilterState.account.name;
	  });
	
	  /**
	   * @descriptions
	   * Gets background color class for current status
	   *
	   * @name getStatusBackground
	   * @type {function}
	   * @param {string} status Status name
	   * @returns {string} Class name with background color
	   */
	  var getStatusBackground = function getStatusBackground(status) {
	    if (!status) {
	      return '';
	    }
	    var statusName = status.toLowerCase();
	    return statusBackgrounds[statusName] || '';
	  };
	
	  return {
	    getError: getError,
	    filterTimePeriodConfig: filterTimePeriodConfig,
	    showSign: showSign,
	    isUndefined: isUndefined,
	    transactionsFilterFn: transactionsFilterFn,
	    POSITION_TYPES: POSITION_TYPES,
	    columnsConfigByPositionType: columnsConfigByPositionType,
	    isPositionTypeSelected: isPositionTypeSelected,
	    transactions: transactions,
	    isFilterApplied: isFilterApplied,
	    isAllSelected: isAllSelected,
	    isCashSelected: isCashSelected,
	    isSecuritySelected: isSecuritySelected,
	    isOpen: isOpen,
	    onToggle: onToggle,
	    isFilterOpen: isFilterOpen,
	    toggleFilter: toggleFilter,
	    closeFilter: closeFilter,
	    isTransactionCategoryShown: isTransactionCategoryShown,
	    isAssetClassShown: isAssetClassShown,
	    isAccountShown: isAccountShown,
	    getStatusBackground: getStatusBackground
	  };
	};

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

	"use strict";

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-wm-portfolio-transactions-ng.js.map