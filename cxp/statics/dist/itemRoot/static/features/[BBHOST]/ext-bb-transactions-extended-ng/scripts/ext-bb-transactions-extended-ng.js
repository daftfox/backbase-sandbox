(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-uib-accordion"), require("vendor-bb-angular-ng-aria"), require("ui-bb-format-amount-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-inline-status-ng"), require("ui-bb-i18n-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-transaction-search-filter-ng"), require("ui-bb-load-more-ng"), require("ui-bb-sortable-column-ng"), require("ui-bb-paginator-ng"), require("ui-bb-date-label-filter-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-transactions-extended-ng", ["vendor-bb-uib-accordion", "vendor-bb-angular-ng-aria", "ui-bb-format-amount-ng", "ui-bb-loading-indicator-ng", "ui-bb-inline-status-ng", "ui-bb-i18n-ng", "ui-bb-substitute-error-ng", "ui-bb-empty-state-ng", "ui-bb-transaction-search-filter-ng", "ui-bb-load-more-ng", "ui-bb-sortable-column-ng", "ui-bb-paginator-ng", "ui-bb-date-label-filter-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-transactions-extended-ng"] = factory(require("vendor-bb-uib-accordion"), require("vendor-bb-angular-ng-aria"), require("ui-bb-format-amount-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-inline-status-ng"), require("ui-bb-i18n-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-transaction-search-filter-ng"), require("ui-bb-load-more-ng"), require("ui-bb-sortable-column-ng"), require("ui-bb-paginator-ng"), require("ui-bb-date-label-filter-ng"));
	else
		root["ext-bb-transactions-extended-ng"] = factory(root["vendor-bb-uib-accordion"], root["vendor-bb-angular-ng-aria"], root["ui-bb-format-amount-ng"], root["ui-bb-loading-indicator-ng"], root["ui-bb-inline-status-ng"], root["ui-bb-i18n-ng"], root["ui-bb-substitute-error-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-transaction-search-filter-ng"], root["ui-bb-load-more-ng"], root["ui-bb-sortable-column-ng"], root["ui-bb-paginator-ng"], root["ui-bb-date-label-filter-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__) {
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

	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.hooks = exports.helpers = undefined;
	
	var _vendorBbUibAccordion = __webpack_require__(2);
	
	var _vendorBbUibAccordion2 = _interopRequireDefault(_vendorBbUibAccordion);
	
	var _vendorBbAngularNgAria = __webpack_require__(3);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbFormatAmountNg = __webpack_require__(4);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(5);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbInlineStatusNg = __webpack_require__(6);
	
	var _uiBbInlineStatusNg2 = _interopRequireDefault(_uiBbInlineStatusNg);
	
	var _uiBbI18nNg = __webpack_require__(7);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(8);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(9);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBbTransactionSearchFilterNg = __webpack_require__(10);
	
	var _uiBbTransactionSearchFilterNg2 = _interopRequireDefault(_uiBbTransactionSearchFilterNg);
	
	var _uiBbLoadMoreNg = __webpack_require__(11);
	
	var _uiBbLoadMoreNg2 = _interopRequireDefault(_uiBbLoadMoreNg);
	
	var _uiBbSortableColumnNg = __webpack_require__(12);
	
	var _uiBbSortableColumnNg2 = _interopRequireDefault(_uiBbSortableColumnNg);
	
	var _uiBbPaginatorNg = __webpack_require__(13);
	
	var _uiBbPaginatorNg2 = _interopRequireDefault(_uiBbPaginatorNg);
	
	var _uiBbDateLabelFilterNg = __webpack_require__(14);
	
	var _uiBbDateLabelFilterNg2 = _interopRequireDefault(_uiBbDateLabelFilterNg);
	
	var _helpers = __webpack_require__(15);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _hooks = __webpack_require__(19);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var helpers = exports.helpers = _helpers2.default;
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-bb-transactions-ng
	 */
	/**
	 * @module ext-bb-transactions-extended-ng
	 * @requires vendor-bb-uib-accordion
	 * @requires ui-bb-format-amount
	 *
	 * @description
	 * Extended extension for transactions widget.
	 *
	 * @example
	 * <!-- payment widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bb-transactions-extended-ng</value>
	 * </property>
	 */
	var hooks = exports.hooks = extHooks;
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbUibAccordion2.default, _vendorBbAngularNgAria2.default, _uiBbFormatAmountNg2.default, _uiBbLoadingIndicatorNg2.default, _uiBbInlineStatusNg2.default, _uiBbI18nNg2.default, _uiBbSubstituteErrorNg2.default, _uiBbEmptyStateNg2.default, _uiBbTransactionSearchFilterNg2.default, _uiBbLoadMoreNg2.default, _uiBbSortableColumnNg2.default, _uiBbPaginatorNg2.default, _uiBbDateLabelFilterNg2.default];

/***/ }),
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
/* 10 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _debitCreditSign = __webpack_require__(16);
	
	var _constants = __webpack_require__(17);
	
	var _getCategoryIconClass = __webpack_require__(18);
	
	var _getCategoryIconClass2 = _interopRequireDefault(_getCategoryIconClass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var helpers = function helpers(context) {
	  var i18nFilter = context.$filter('i18n');
	
	  return {
	    /**
	     * @name headers
	     * @type {Object}
	     *
	     * @description
	     * Table headers
	     */
	    headers: [{
	      label: 'details.label.date',
	      class: 'col-md-1',
	      sortable: {
	        key: 'bookingDate',
	        direction: 'DESC'
	      }
	    }, {
	      label: 'details.label.category',
	      class: 'col-md-1 text-center',
	      sortable: {
	        key: 'category',
	        direction: 'ASC'
	      }
	    }, {
	      label: 'details.label.description',
	      class: 'col-md-6',
	      sortable: {
	        key: 'description',
	        direction: 'ASC'
	      }
	    }, {
	      label: 'details.label.creditAmount',
	      class: 'col-md-2 text-right',
	      sortable: {
	        key: 'amount',
	        direction: 'ASC'
	      }
	    }, {
	      label: 'details.label.debitAmount',
	      class: 'col-md-2 text-right',
	      sortable: {
	        key: 'amount',
	        direction: 'ASC'
	      }
	    }],
	
	    /**
	     * @name transactionTypes
	     * @type {Types}
	     *
	     * @description
	     * Transaction types constant
	     *
	     */
	    transactionTypes: _constants.Types,
	
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
	     * @name isSortableActive
	     * @type {function}
	     * @param {object} sortable Sortable header item
	     * @param {object} sort Sort state object of the controller
	     * @returns {boolean}
	     *
	     * @description
	     * Checks sortable header matches current sort state
	     */
	    isSortableActive: function isSortableActive(sortable, sort) {
	      return sortable.key === sort.orderBy;
	    },
	
	    /**
	     * @name isPaginationTypeMatch
	     * @type {function}
	     * @param {function} $ctrl      Current controller
	     * @param {string} type         Description of pagination type (pagination, load-more)
	     * @returns {boolean}
	     *
	     * @description
	     * Checks if actual pagination type matches the one, defined in properties
	     */
	    isPaginationTypeMatch: function isPaginationTypeMatch($ctrl, type) {
	      return $ctrl.state.pageParams.paginationType === type;
	    },
	
	    /**
	     * @name showNoTransactions
	     * @type {function}
	     * @param {function} $ctrl      Current controller
	     * @returns {boolean}
	     *
	     * @description
	     * Checks if conditions are met to show the no transactions icon and message
	     */
	    showNoTransactions: function showNoTransactions($ctrl) {
	      return $ctrl.transactions && !$ctrl.transactions.transactionsArray.length && !$ctrl.loading && !$ctrl.searching;
	    },
	
	    /**
	     * @name showNoResults
	     * @type {function}
	     * @param {function} $ctrl      Current controller
	     * @returns {boolean}
	     *
	     * @description
	     * Checks if conditions are met to show the no result icon and message
	     */
	    showNoResults: function showNoResults($ctrl) {
	      return $ctrl.searchTransactions && !$ctrl.searchTransactions.transactionsArray.length && $ctrl.searching && !$ctrl.loading;
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
	     * @name getTransactionGridClassName
	     * @type {function}
	     * @param {Object} transaction Transaction object
	     * @returns {string} class name
	     *
	     * @description
	     * Return class name by checking the type of billing status and transaction type
	     */
	    getTransactionGridClassName: function getTransactionGridClassName(transaction) {
	      if (transaction.billingStatus) {
	        return 'col-6';
	      }
	
	      return transaction.customType === _constants.Types.TYPE_1 ? 'col-7' : 'col-8';
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
/* 16 */
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
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(17);
	
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.processTransactionsEnumValues = exports.processCategories = exports.defaultSortableDirection = exports.defaultSortableColumn = exports.processTransactions = undefined;
	
	var _debitCreditSign = __webpack_require__(16);
	
	var _debitCreditSign2 = _interopRequireDefault(_debitCreditSign);
	
	var _setType = __webpack_require__(20);
	
	var _setType2 = _interopRequireDefault(_setType);
	
	var _constants = __webpack_require__(17);
	
	var _getCategoryIconClass = __webpack_require__(18);
	
	var _getCategoryIconClass2 = _interopRequireDefault(_getCategoryIconClass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name processTransactions
	 * @type {function}
	 * @param {Object[]} transactions The source transactions from the widget controller
	 * @returns {Object} transactions grouped by date and transactions array
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
	/* eslint-disable import/prefer-default-export */
	var processTransactions = exports.processTransactions = function processTransactions(transactions) {
	  var transactionsArray = transactions.map(_debitCreditSign2.default).map(_setType2.default);
	  var transactionsGroupedByDate = transactionsArray.reduce(function (groupedByDate, transaction) {
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
	
	  return {
	    transactionsArray: transactionsArray,
	    transactionsGroupedByDate: transactionsGroupedByDate
	  };
	};
	
	/**
	 * @name defaultSortableColumn
	 * @type {function}
	 * @returns {string|null} Returns column key
	 *
	 * @description
	 * Return the key of the default sort column
	 */
	var defaultSortableColumn = exports.defaultSortableColumn = function defaultSortableColumn() {
	  return 'bookingDate';
	};
	
	/**
	 * @name defaultSortableDirection
	 * @type {function}
	 * @returns {string|null} Returns sorting direction
	 *
	 * @description
	 * Return the sorting direction of the default sort column
	 */
	var defaultSortableDirection = exports.defaultSortableDirection = function defaultSortableDirection() {
	  return 'DESC';
	};
	
	/**
	 * @name processCategories
	 * @type {function}
	 * @param {object[]} categories The source categories from the widget controller
	 * @returns {object} Processed categories array
	 *
	 * @description
	 * Hook for processing categories
	 *
	 * Add category icon class 'categoryIconClass' property to categories.
	 *
	 * If at least one category has subcategories, add 'subCategories' property to all that are missing
	 * it.
	 */
	var processCategories = exports.processCategories = function processCategories(categories) {
	  var isSubCategories = categories.some(function (category) {
	    return category.subCategories;
	  });
	
	  return categories.map(function (category) {
	    // set categoryIconClass
	    Object.assign(category, {
	      categoryIconClass: (0, _getCategoryIconClass2.default)(category.categoryName)
	    });
	
	    // set subCategories
	    if (isSubCategories && !category.subCategories) {
	      Object.assign(category, {
	        subCategories: []
	      });
	    }
	
	    return category;
	  });
	};
	
	/**
	 * @name processTransactionsEnumValues
	 * @type {function}
	 * @param {object[]} transactionsEnumValues The source transaction enum values from the widget
	 * controller
	 * @returns {object} Processed transactions enum values array
	 *
	 * @description
	 * Hook for processing transactions enum values
	 *
	 * Add labelKey and role to transactionsEnumValues.
	 */
	var processTransactionsEnumValues = exports.processTransactionsEnumValues = function processTransactionsEnumValues(transactionsEnumValues) {
	  var result = Object.assign({}, transactionsEnumValues);
	
	  if (result.billingStatus) {
	    result.billingStatus = result.billingStatus.map(function (option) {
	      return Object.assign({}, option, {
	        labelKey: _constants.BillingStatus[option.value] || option.value,
	        role: option.value.toLowerCase()
	      });
	    });
	  }
	
	  return result;
	};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(17);
	
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
//# sourceMappingURL=ext-bb-transactions-extended-ng.js.map