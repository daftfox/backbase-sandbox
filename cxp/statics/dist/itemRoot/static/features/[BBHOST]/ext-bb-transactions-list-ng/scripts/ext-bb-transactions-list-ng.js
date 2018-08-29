(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-uib-accordion"), require("vendor-bb-angular-ng-aria"), require("ui-bb-format-amount-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-inline-status-ng"), require("ui-bb-i18n-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-load-more-ng"), require("ui-bb-date-label-filter-ng"), require("ui-bb-notification-stripe-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-transactions-list-ng", ["vendor-bb-uib-accordion", "vendor-bb-angular-ng-aria", "ui-bb-format-amount-ng", "ui-bb-loading-indicator-ng", "ui-bb-inline-status-ng", "ui-bb-i18n-ng", "ui-bb-substitute-error-ng", "ui-bb-empty-state-ng", "ui-bb-load-more-ng", "ui-bb-date-label-filter-ng", "ui-bb-notification-stripe-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-transactions-list-ng"] = factory(require("vendor-bb-uib-accordion"), require("vendor-bb-angular-ng-aria"), require("ui-bb-format-amount-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-inline-status-ng"), require("ui-bb-i18n-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-load-more-ng"), require("ui-bb-date-label-filter-ng"), require("ui-bb-notification-stripe-ng"));
	else
		root["ext-bb-transactions-list-ng"] = factory(root["vendor-bb-uib-accordion"], root["vendor-bb-angular-ng-aria"], root["ui-bb-format-amount-ng"], root["ui-bb-loading-indicator-ng"], root["ui-bb-inline-status-ng"], root["ui-bb-i18n-ng"], root["ui-bb-substitute-error-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-load-more-ng"], root["ui-bb-date-label-filter-ng"], root["ui-bb-notification-stripe-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_22__) {
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

	module.exports = __webpack_require__(21);

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
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.events = exports.helpers = exports.hooks = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(3);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(5);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbInlineStatusNg = __webpack_require__(6);
	
	var _uiBbInlineStatusNg2 = _interopRequireDefault(_uiBbInlineStatusNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(8);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _vendorBbUibAccordion = __webpack_require__(2);
	
	var _vendorBbUibAccordion2 = _interopRequireDefault(_vendorBbUibAccordion);
	
	var _uiBbFormatAmountNg = __webpack_require__(4);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _uiBbLoadMoreNg = __webpack_require__(11);
	
	var _uiBbLoadMoreNg2 = _interopRequireDefault(_uiBbLoadMoreNg);
	
	var _uiBbI18nNg = __webpack_require__(7);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(9);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBbDateLabelFilterNg = __webpack_require__(14);
	
	var _uiBbDateLabelFilterNg2 = _interopRequireDefault(_uiBbDateLabelFilterNg);
	
	var _uiBbNotificationStripeNg = __webpack_require__(22);
	
	var _uiBbNotificationStripeNg2 = _interopRequireDefault(_uiBbNotificationStripeNg);
	
	var _helpers = __webpack_require__(23);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _hooks = __webpack_require__(27);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-bb-transactions-ng
	 */
	var hooks = exports.hooks = extHooks; /**
	                                       * @module ext-bb-transactions-list-ng
	                                       * @requires vendor-bb-angular-ng-aria
	                                       * @example
	                                       * <!-- payment widget model.xml -->
	                                       * <property name="extension" viewHint="text-input,admin">
	                                       *  <value type="string">ext-bb-transactions-list-ng</value>
	                                       * </property>
	                                       *
	                                       * @description
	                                       * Extention used to show list of transactions that match certain criteria, for instance - specific
	                                       * category, start and end date, productId, etc.  It remains hidden until category search is being
	                                       * executed.
	                                       */
	var helpers = exports.helpers = _helpers2.default;
	
	var events = exports.events = {};
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbLoadingIndicatorNg2.default, _uiBbInlineStatusNg2.default, _uiBbSubstituteErrorNg2.default, _vendorBbUibAccordion2.default, _uiBbFormatAmountNg2.default, _uiBbLoadMoreNg2.default, _uiBbI18nNg2.default, _uiBbEmptyStateNg2.default, _uiBbDateLabelFilterNg2.default, _uiBbNotificationStripeNg2.default];

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _debitCreditSign = __webpack_require__(24);
	
	var _constants = __webpack_require__(25);
	
	var _getCategoryIconClass = __webpack_require__(26);
	
	var _getCategoryIconClass2 = _interopRequireDefault(_getCategoryIconClass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var helpers = function helpers(context) {
	  var i18nFilter = context.$filter('i18n');
	
	  return {
	    /**
	     * @name transactionTypes
	     * @type {Types}
	     *
	     * @description
	     * Transaction types constant
	     */
	    transactionTypes: _constants.Types,
	
	    /**
	     * @name formatDate
	     * @type {function}
	     * @returns {string} Date format
	     *
	     * @description
	     * Format date based on constant
	     */
	    formatDate: function formatDate() {
	      return _constants.dateFormat;
	    },
	
	    /**
	     * @name getSignedAmount
	     * @type {function}
	     * @param {object} transaction Transaction object
	     * @returns {number} Signed amount
	     *
	     * @description
	     * Based on credit/debit indicator, put right sign on the transaction amount
	     */
	    getSignedAmount: function getSignedAmount(transaction) {
	      return transaction.amount * (transaction.creditDebitIndicator === _debitCreditSign.negativeSignKey ? -1 : 1);
	    },
	
	    /**
	     * @name isPaginationTypeMatch
	     * @type {function}
	     * @param {function} $ctrl      Current controller
	     * @param {string} type         Description of pagination type (pagination, load-more)
	     * @returns {boolean}
	     *
	     * @description
	     * Checkes if actual pagination type matches the one, defined in properties
	     */
	    isPaginationTypeMatch: function isPaginationTypeMatch($ctrl, type) {
	      return $ctrl.state.pageParams.paginationType === type;
	    },
	
	    /**
	     * @name getCategoryIconClass
	     * @type {function}
	     * @param {string} transactionCategory Transaction category
	     * @param {?boolean} withPrefix Include class prefix
	     * @returns {string}
	     *
	     * @description
	     * Converts transaction category name into category CSS icon class
	     */
	    getCategoryIconClass: _getCategoryIconClass2.default,
	
	    /**
	     * @name isTransactionsAvailable
	     * @type {function}
	     * @param {object} transactions
	     * @returns {boolean} returns true if transactions data is present
	     *
	     * @description
	     * Checks if transactions data is available
	     */
	    isTransactionsAvailable: function isTransactionsAvailable(transactions) {
	      return transactions ? Object.keys(transactions).length : false;
	    },
	
	    /**
	     * @name isProductSelected
	     * @type {function}
	     * @param {object} products
	     * @returns {boolean} returns true if products data is present
	     *
	     * @description
	     * Checks if there're products
	     */
	    isProductSelected: function isProductSelected(products) {
	      return !!(Array.isArray(products) && products.length || products.id);
	    },
	
	    /**
	     * @name dateLabel
	     * @type {function}
	     * @param {string} label date
	     * @returns {string}
	     *
	     * @description
	     * Returns either label like now, today or yesterday or the actual date
	     */
	    dateLabel: function dateLabel(label) {
	      return i18nFilter(_constants.TimePeriod[label]) || label;
	    },
	
	    /**
	     * @name billingStatusLabel
	     * @type {function}
	     * @param {string} label enum billing
	     * @returns {string}
	     *
	     * @description
	     * Returns label for billing status like pending or unbilled
	     */
	    billingStatusLabel: function billingStatusLabel(label) {
	      return i18nFilter(_constants.BillingStatus[label]) || label;
	    }
	  };
	};
	
	exports.default = helpers;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var positiveSignKey = exports.positiveSignKey = 'CRDT';
	var negativeSignKey = exports.negativeSignKey = 'DBIT';
	
	var creditDebitKeysToSign = {};
	creditDebitKeysToSign[positiveSignKey] = '+';
	creditDebitKeysToSign[negativeSignKey] = '-';
	
	/**
	 * @param {Object} transaction Transaction object
	 * @returns {Object} new copy of Transaction object
	 *
	 * @description
	 * Adds debitCreditSign property to transaction object based on debitCreditIndicator key
	 */
	
	exports.default = function (transaction) {
	  return Object.assign({
	    debitCreditSign: creditDebitKeysToSign[transaction.creditDebitIndicator]
	  }, transaction);
	};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name categoryClassPrefix
	 * @type {string}
	 *
	 * @description
	 * Category icon CSS class prefix
	 */
	var categoryClassPrefix = 'bb-transaction-category-';
	
	exports.default = categoryClassPrefix;
	
	/**
	 * @name uncategorizedIconClass
	 * @type {string}
	 *
	 * @description
	 * Uncategorized CSS icon class
	 */
	
	var uncategorizedIconClass = exports.uncategorizedIconClass = 'uncategorized';
	
	/**
	 * @name dateFormat
	 * @type {string}
	 *
	 * @description
	 * Date Format
	 */
	var dateFormat = exports.dateFormat = 'mediumDate';
	
	/**
	 * @name Types
	 * @type {object}
	 *
	 * @description
	 * Widget custom type preferences
	 */
	var Types = exports.Types = {
	  TYPE_1: 'type1',
	  TYPE_2: 'type2',
	  TYPE_3: 'type3',
	  TYPE_4: 'type4'
	};
	
	/**
	 * @name TimePeriod
	 * @type {object}
	 *
	 * @description
	 * Date labels enum
	 */
	var TimePeriod = exports.TimePeriod = {
	  now: 'date.label.now',
	  today: 'date.label.today',
	  yesterday: 'date.label.yesterday'
	};
	
	/**
	 * @type {object}
	 *
	 * @descriptino
	 * Widget intent enum
	 */
	var Intent = exports.Intent = {
	  CHANGE_TRANSACTION_CATEGORY: 'intent.rb.transaction.category.change'
	};
	
	/**
	 * @name BillingStatus
	 * @type {object}
	 *
	 * @description
	 * Billing status labels enum
	 */
	var BillingStatus = exports.BillingStatus = {
	  BILLED: 'billing.status.label.billed',
	  UNBILLED: 'billing.status.label.unbilled',
	  PENDING: 'billing.status.label.pending'
	};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(25);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name getCategoryIconClass
	 * @type {function}
	 * @param {string} transactionCategory Transaction category
	 * @param {?boolean} withPrefix Include class prefix
	 * @returns {string}
	 *
	 * @description
	 * Converts transaction category name into category CSS icon class
	 */
	exports.default = function () {
	  var transactionCategory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var withPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	  return '' + (withPrefix ? _constants2.default : '') + (transactionCategory.toLowerCase().replace(/\W/g, '-').replace(/-{2,}/g, '-') || _constants.uncategorizedIconClass);
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.shouldUpdateAnalysisView = exports.setChangeTransCategoryIntent = exports.processTransactions = exports.isTransactionsShown = exports.defaultPaginationType = exports.defaultSortableDirection = exports.defaultSortableColumn = undefined;
	
	var _debitCreditSign = __webpack_require__(24);
	
	var _debitCreditSign2 = _interopRequireDefault(_debitCreditSign);
	
	var _setType = __webpack_require__(28);
	
	var _setType2 = _interopRequireDefault(_setType);
	
	var _constants = __webpack_require__(25);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name defaultSortableColumn
	 * @type {function}
	 * @returns {string}
	 *
	 * @description
	 * defaultSortableColumn default hook
	 */
	var defaultSortableColumn = exports.defaultSortableColumn = function defaultSortableColumn() {
	  return 'bookingDate';
	};
	
	/**
	 * @name defaultSortableDirection
	 * @type {function}
	 * @returns {string}
	 *
	 * @description
	 * defaultSortableDirection default hook
	 */
	/* eslint-disable import/prefer-default-export */
	var defaultSortableDirection = exports.defaultSortableDirection = function defaultSortableDirection() {
	  return 'DESC';
	};
	
	/**
	 * @name defaultPaginationType
	 * @type {function}
	 * @param {string} pagination type
	 * @returns {?string}
	 *
	 * @description
	 * defaultPaginationType default hook for setting load-more or pagination as default
	 */
	var defaultPaginationType = exports.defaultPaginationType = function defaultPaginationType() {
	  return 'load-more';
	};
	
	/**
	 * @name isTransactionsShown
	 * @type {function}
	 * @returns {boolean}
	 *
	 * @description
	 * Hook for checking if the transactions should be visible
	 */
	var isTransactionsShown = exports.isTransactionsShown = function isTransactionsShown() {
	  return false;
	};
	
	/**
	 * @name processTransactions
	 * @type {function}
	 * @param {object[]} transactions The source transactions from the widget controller
	 * @returns {object} Processed transaction array
	 *
	 * @description
	 * Hook for process transactions
	 *
	 * Add debitCreditSign property to transaction
	 *
	 * Add customType field to transaction
	 *
	 * Sort transactions collection based on valueDate (descending)
	 */
	var processTransactions = exports.processTransactions = function processTransactions(transactions) {
	  return transactions.map(_debitCreditSign2.default).map(_setType2.default).reduce(function (groupedByDate, transaction) {
	    var datesObject = groupedByDate;
	    // get only date part
	    var bookingDateObj = new Date(transaction.bookingDate);
	    var date = bookingDateObj.toISOString().slice(0, 10);
	
	    if (datesObject[date]) {
	      var clearToAdd = true;
	
	      datesObject[date].forEach(function (element) {
	        if (element.id === transaction.id) {
	          clearToAdd = false;
	        }
	      });
	
	      if (clearToAdd) {
	        datesObject[date].push(transaction);
	      }
	    } else {
	      datesObject[date] = [transaction];
	    }
	
	    return datesObject;
	  }, {});
	};
	
	/**
	 * @name setChangeTransCategoryIntent
	 * @type {function}
	 * @returns {string}
	 *
	 * @description
	 * Default hook for setting the intent to trigger the change transaction
	 * category widget
	 */
	var setChangeTransCategoryIntent = exports.setChangeTransCategoryIntent = function setChangeTransCategoryIntent() {
	  return _constants.Intent.CHANGE_TRANSACTION_CATEGORY;
	};
	
	/**
	 * @name shouldUpdateAnalysisView
	 * @type {function}
	 * @returns {boolean}
	 *
	 * @description
	 * Default hook for shouldUpdateAnalysisView flag
	 */
	var shouldUpdateAnalysisView = exports.shouldUpdateAnalysisView = function shouldUpdateAnalysisView() {
	  return true;
	};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(25);
	
	/**
	 * @param {Object} transaction Transaction object
	 *
	 * @description
	 * Adds "customType" field to transaction item according to custom logic.
	 * This custom type is used to define the rendering layout in template file
	 */
	exports.default = function (transaction) {
	  if (transaction.counterPartyName && transaction.category) {
	    Object.assign(transaction, { customType: _constants.Types.TYPE_1 });
	  } else if (transaction.counterPartyName) {
	    Object.assign(transaction, { customType: _constants.Types.TYPE_2 });
	  } else if (transaction.description) {
	    Object.assign(transaction, { customType: _constants.Types.TYPE_3 });
	  } else {
	    Object.assign(transaction, { customType: _constants.Types.TYPE_4 });
	  }
	  return transaction;
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-transactions-list-ng.js.map