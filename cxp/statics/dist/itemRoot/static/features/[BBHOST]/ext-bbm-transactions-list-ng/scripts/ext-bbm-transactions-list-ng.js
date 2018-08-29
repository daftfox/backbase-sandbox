(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-format-amount-ng"), require("ui-bb-i18n-ng"), require("ui-bbm-scroll-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-transactions-list-ng", ["ui-bb-format-amount-ng", "ui-bb-i18n-ng", "ui-bbm-scroll-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-transactions-list-ng"] = factory(require("ui-bb-format-amount-ng"), require("ui-bb-i18n-ng"), require("ui-bbm-scroll-ng"));
	else
		root["ext-bbm-transactions-list-ng"] = factory(root["ui-bb-format-amount-ng"], root["ui-bb-i18n-ng"], root["ui-bbm-scroll-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_43__) {
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

	module.exports = __webpack_require__(42);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.intents = exports.helpers = exports.events = undefined;
	
	var _uiBbFormatAmountNg = __webpack_require__(4);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _uiBbmScrollNg = __webpack_require__(43);
	
	var _uiBbmScrollNg2 = _interopRequireDefault(_uiBbmScrollNg);
	
	var _uiBbI18nNg = __webpack_require__(7);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _events = __webpack_require__(44);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _helpers = __webpack_require__(46);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _intents = __webpack_require__(49);
	
	var _intents2 = _interopRequireDefault(_intents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bbm-transactions-list-ng
	 *
	 * @description
	 * Transaction list view for the widget-bbm-transactions-ng
	 *
	 * NOTE: Starting from version 2.0.0 this extension (ext-bbm-transactions-list-ng)
	 * is only compatible with widget-bbm-transactions-ng (mobile widget).
	 * Please use version 1.x.x if you are using widget-bb-transactions-ng.
	 *
	 * @example
	 * <!-- transactions widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bbm-transactions-list-ng</value>
	 * </property>
	 */
	var events = exports.events = _events2.default;
	var helpers = exports.helpers = _helpers2.default;
	var intents = exports.intents = _intents2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbFormatAmountNg2.default, _uiBbI18nNg2.default, _uiBbmScrollNg2.default];

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_43__;

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(45);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * Defines the min length for the search query
	 * @inner
	 * @type {number}
	 */
	var SEARCH_MIN_QUERY = 2;
	
	/**
	 * Defines the debouncing time for a search to happen (in ms)
	 * @inner
	 * @type {number}
	 */
	var SEARCH_INPUT_THRESHOLD = 1000;
	
	/**
	 * @description
	 * Throttles some action by a given delay (threshold)
	 *
	 * @name throttle
	 *
	 * @inner
	 * @param {function} fn - function to execute
	 * @param {int} threshold - delay in execution (in ms)
	 * @type {function}
	 * @returns {function}
	 */
	var throttle = function throttle(fn, threshold) {
	  var last = void 0;
	  var timeout = void 0;
	
	  return function throttledFn() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var context = this;
	    var now = Date.now();
	    var timeDifference = now - last;
	
	    if (last && timeDifference < threshold) {
	      clearTimeout(timeout);
	      timeout = setTimeout(function () {
	        last = now;
	        fn.apply(context, args);
	      }, threshold - timeDifference);
	    } else {
	      last = now;
	      fn.apply(context, args);
	    }
	  };
	};
	
	exports.default = function (_ref) {
	  var service = _ref.service,
	      withNativeEvents = _ref.withNativeEvents;
	
	  var onSearchInput = throttle(function (value) {
	    if (value.length >= SEARCH_MIN_QUERY) {
	      service.setSearchQuery(value);
	    }
	  }, SEARCH_INPUT_THRESHOLD);
	
	  return withNativeEvents(_defineProperty({}, _constants.ToolbarButtonEvent.SEARCH_TRANSACTION, function (_ref2) {
	    var detail = _ref2.detail;
	
	    if (detail.action === _constants.SearchActions.INPUT) {
	      onSearchInput(detail.text);
	    } else if (detail.action === _constants.SearchActions.CANCEL) {
	      service.cancelSearch();
	    }
	  }));
	};

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable import/prefer-default-export */
	/**
	 * Defines widget search action enumeration
	 * @inner
	 * @enum {string}
	 * @type {object}
	 */
	var SearchActions = exports.SearchActions = {
	  CANCEL: 'cancel',
	  INPUT: 'input'
	};
	
	/**
	 * Toolbar button events enum
	 * @name ToolbarButtonEvent
	 * @type {Object}
	 * @inner
	 */
	var ToolbarButtonEvent = exports.ToolbarButtonEvent = {
	  SEARCH_TRANSACTION: 'bb.event.transactions.search'
	};
	
	/**
	 * Intents enum
	 * @name Intent
	 * @type {Object}
	 * @inner
	 */
	var Intent = exports.Intent = {
	  SHOW_TRANSACTION_DETAILS: 'intent.rbm.transactions.details.show',
	  SHOW_TRANSACTION_LIST: 'intent.rbm.transactions.list.show',
	  INITIATE_PAYMENT: 'intent.rbm.paymentOrder.payment.initiate'
	};

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _debitCreditSign = __webpack_require__(47);
	
	var _debitCreditSign2 = _interopRequireDefault(_debitCreditSign);
	
	var _productKindView = __webpack_require__(48);
	
	var _productKindView2 = _interopRequireDefault(_productKindView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Mobile Platform enum
	 * @name Platform
	 * @type {Object}
	 * @inner
	 */
	/* global window */
	var Platform = {
	  ANDROID: 'android',
	  IOS: 'ios'
	};
	
	/**
	 * @name getPlatform
	 * @type {function}
	 * @description
	 * Returns the mobile platform that is stored on the window object
	 * @returns {string} platform
	 * @inner
	 */
	var getPlatform = function getPlatform() {
	  return window.BB_PLATFORM;
	};
	
	/**
	 * @name warn
	 * @type {function}
	 * @description
	 * Logs a warning message to the console
	 * @inner
	 */
	var warn = function warn(msg) {
	  return console.warn('[ext-bbm-transactions-list-ng] ' + msg);
	};
	
	/**
	 * @name getSelectedProductToDisplay
	 * @description
	 * Processes a product.
	 *
	 * @type {function}
	 * @param {Object} product The original product from the API
	 * @returns {Object} The processed product
	 */
	var getSelectedProductToDisplay = function getSelectedProductToDisplay(product) {
	  return product && (0, _productKindView2.default)(product);
	};
	
	/**
	 * @name groupTransactions
	 *
	 * @description
	 * Groups transactions by date
	 * We assume that scheduledDate is always date only, e.g. "2016-10-14"
	 * Otherwise this method should be improved
	 *
	 * @type {function}
	 * @param {Array<object>} transactions
	 * @returns {Array} groups - Transactions grouped by date
	 * @inner
	 */
	var groupTransactions = function groupTransactions(transactions) {
	  var groups = [];
	
	  transactions.forEach(function (transaction) {
	    var date = transaction.bookingDate;
	    var group = groups.find(function (currGroup) {
	      return currGroup.date === date;
	    });
	
	    if (!group) {
	      group = {
	        date: date,
	        transactions: []
	      };
	      groups.push(group);
	    }
	
	    group.transactions.push(transaction);
	  });
	
	  return groups;
	};
	
	/**
	 * @name getTransactionsToDisplay
	 * @description
	 * Processes the list of transactions.
	 *
	 * @type {function}
	 * @param {Array<object>} transactions The original transactions from the API
	 * @returns {Array<object>} The list of processed transactions
	 */
	var getTransactionsToDisplay = function getTransactionsToDisplay(transactions) {
	  return groupTransactions(transactions.map(_debitCreditSign2.default));
	};
	
	/**
	 * @description
	 * Helpers for ext-bbm-transactions-list-ng.
	 *
	 * @name Helpers
	 * @type {Object}
	 */
	
	exports.default = function (_ref) {
	  var service = _ref.service,
	      stateContainer = _ref.stateContainer,
	      intents = _ref.intents;
	
	  /**
	   * @description
	   * Returns the current selected `product` from the state
	   *
	   * @name Helpers#getSelectedProduct
	   * @type {function}
	   * @returns {Object} product Product from the state
	   * @inner
	   */
	  var getSelectedProduct = stateContainer.createSelector(function (state) {
	    return getSelectedProductToDisplay(state.product.data);
	  });
	
	  /**
	   * @description
	   * Returns the `transactions` from the state
	   *
	   * @name Helpers#getTransactions
	   * @type {function}
	   * @returns {Array} transactions List of transactions from the state
	   * @inner
	   */
	  var getTransactions = stateContainer.createSelector(function (state) {
	    return getTransactionsToDisplay(state.transactions.data);
	  });
	
	  /**
	   * @description
	   * Returns true if there are `transactions` on the state. Otherwise returns false.
	   *
	   * @name Helpers#hasTransactions
	   * @type {function}
	   * @returns {boolean}
	   * @inner
	   */
	  var hasTransactions = stateContainer.createSelector(function (state) {
	    return Boolean(state.transactions.data && state.transactions.data.length > 0);
	  });
	
	  /**
	   * @description
	   * Returns the searched `transactions` from the state
	   *
	   * @name Helpers#getSearchTransactions
	   * @type {function}
	   * @returns {Array} transactions List of transactions from the state
	   * @inner
	   */
	  var getSearchTransactions = stateContainer.createSelector(function (state) {
	    return getTransactionsToDisplay(state.search.data);
	  });
	
	  /**
	   * @description
	   * Returns true if there are searched `transactions` on the state. Otherwise returns false.
	   *
	   * @name Helpers#hasSearchTransactions
	   * @type {function}
	   * @returns {boolean}
	   * @inner
	   */
	  var hasSearchTransactions = stateContainer.createSelector(function (state) {
	    return Boolean(state.search.data && state.search.data.length > 0);
	  });
	
	  /**
	   * @description
	   * Returns true if there is a `product` on the state. Otherwise returns false.
	   *
	   * @name Helpers#hasSelectedProduct
	   * @type {function}
	   * @returns {boolean}
	   * @inner
	   */
	  var hasSelectedProduct = stateContainer.createSelector(function (state) {
	    return state.product.data !== null;
	  });
	
	  /**
	   * @description
	   * Checks for initial loading.
	   *
	   * @name Helpers#showLoadingState
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var showLoadingState = stateContainer.createSelector(function (state) {
	    return Boolean(state.transactions.loading && !state.transactions.data && !state.transactions.error);
	  });
	
	  /**
	   * @description
	   * Checks whether the searching flag on the state is set to true
	   *
	   * @name Helpers#isSearching
	   * @type {function}
	   * @returns {boolean}
	   */
	  var isSearching = stateContainer.createSelector(function (state) {
	    return state.searching;
	  });
	
	  /**
	   * @description
	   * Checks whether the widget is running on Android.
	   * Returns true, if the platform is Android, false otherwise.
	   *
	   * @name Helpers#isAndroid
	   * @type {function}
	   * @returns {boolean}
	   */
	  var isAndroid = function isAndroid() {
	    return getPlatform() === Platform.ANDROID;
	  };
	
	  /**
	   * @description
	   * Checks whether the widget is running on iOS.
	   * Returns true, if the platform is iOS, false otherwise.
	   *
	   * @name Helpers#isIOS
	   * @type {function}
	   * @returns {boolean}
	   */
	  var isIOS = function isIOS() {
	    return getPlatform() === Platform.IOS;
	  };
	
	  /**
	   * @name Helpers#showList
	   * @type {function}
	   * @description
	   * Determines if the list view should be shown
	   * @return {boolean}
	   * @inner
	   */
	  var showList = stateContainer.createSelector(function (state) {
	    return !state.searching;
	  });
	
	  /**
	   * @name Helpers#showSearch
	   * @type {function}
	   * @description
	   * Determines if the search view should be shown
	   * @return {boolean}
	   * @inner
	   */
	  var showSearch = stateContainer.createSelector(function (state) {
	    return state.searching;
	  });
	
	  /**
	   * @description
	   * Determines if the search error view should be shown
	   *
	   * @name Helpers#showSearchErrorState
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var showSearchErrorState = stateContainer.createSelector(function (state) {
	    return Boolean(state.searching && state.search.error && !state.search.loading);
	  });
	
	  /**
	   * @description
	   * Determines if the search empty state view should be shown
	   *
	   * @name Helpers#showSearchEmptyState
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var showSearchEmptyState = stateContainer.createSelector(function (state) {
	    return Boolean(state.searching && Boolean(state.search.data && !state.search.data.length > 0) && !state.search.error && !state.search.loading);
	  });
	
	  /**
	   * @description
	   * Determines if the search empty state view should be shown
	   *
	   * @name Helpers#showSearchLoadingState
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var showSearchLoadingState = stateContainer.createSelector(function (state) {
	    return Boolean(state.searching && state.search.loading && !state.search.data && !state.search.error);
	  });
	
	  /**
	   * @description
	   * Determines if the empty state view should be shown
	   *
	   * @name Helpers#showEmptyState
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var showEmptyState = stateContainer.createSelector(function (state) {
	    return Boolean(!state.searching && Boolean(state.transactions.data && !state.transactions.data.length > 0) && !state.transactions.loading && !state.transactions.error);
	  });
	
	  /**
	   * @description
	   * Determines if the error state view should be shown
	   *
	   * @name Helpers#showErrorState
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var showErrorState = stateContainer.createSelector(function (state) {
	    return Boolean(!state.searching && !state.transactions.loading && state.transactions.error);
	  });
	
	  /**
	   * @description
	   * Checks whether actions for a given account should be displayed.
	   * Returns true, if they should be displayed, or `false` otherwise.
	   *
	   * @name Helpers#showAccountActions
	   * @type {function}
	   * @returns {boolean}
	   */
	  var showAccountActions = function showAccountActions() {
	    return Boolean(getSelectedProduct() && getSelectedProduct().debitAccount);
	  };
	
	  /**
	   * @description
	   * Checks whether FAB (Floating Action Buttons) should be displayed. Returns true
	   * if it should be displayed, false otherwise.
	   *
	   * @name Helpers#showFAB
	   * @type {function}
	   * @returns {boolean}
	   */
	  var showFAB = function showFAB() {
	    return Boolean(!isSearching() && isAndroid() && showAccountActions());
	  };
	
	  /**
	   * @description
	   * Checks for the load more's loading state.
	   *
	   * @name Helpers#showLoadMoreLoading
	   * @type {function}
	   *
	   * @return {boolean}
	   */
	  var showLoadMoreLoading = stateContainer.createSelector(function (state) {
	    return Boolean(state.transactions.loading && state.transactions.data);
	  });
	
	  /**
	   * @description
	   * Checks for the load more's loading state.
	   *
	   * @name Helpers#showSearchLoadMoreLoading
	   * @type {function}
	   *
	   * @return {boolean}
	   */
	  var showSearchLoadMoreLoading = stateContainer.createSelector(function (state) {
	    return Boolean(state.searching && state.search.loading && state.search.data);
	  });
	
	  /**
	   * @description
	   * Checks if the load more message should be visible.
	   *
	   * @name Helpers#showSearchLoadMore
	   * @type {function}
	   *
	   * @return {boolean}
	   */
	  var showSearchLoadMore = function showSearchLoadMore() {
	    return showSearchLoadMoreLoading();
	  };
	
	  /**
	   * @description
	   * Checks if the load more message should be visible.
	   *
	   * @name Helpers#showLoadMore
	   * @type {function}
	   *
	   * @return {boolean}
	   */
	  var showLoadMore = function showLoadMore() {
	    return showLoadMoreLoading();
	  };
	
	  /**
	   * @description
	   * Based on credit/debit indicator, put right sign on the transaction amount
	   *
	   * @name Helpers#getSignedAmount
	   * @type {function}
	   * @param {Object} transaction Transaction object
	   * @returns {number} Signed amount
	   */
	  var getSignedAmount = function getSignedAmount(transaction) {
	    return transaction.amount * (transaction.creditDebitIndicator === _debitCreditSign.negativeSignKey ? -1 : 1);
	  };
	
	  /**
	   * @description
	   * Initiates payment from the given product.
	   *
	   * @name Helpers#initiatePayment
	   * @type {function}
	   */
	  var initiatePayment = function initiatePayment() {
	    var product = getSelectedProduct();
	
	    if (!product) {
	      warn('Cannot initiate a payment – no selected product');
	      return;
	    }
	
	    intents.initiatePayment({
	      debitAccount: product
	    });
	  };
	
	  /**
	   * @description
	   * Sets the currently selected transactions and fires the intent
	   * to show the transaction details
	   *
	   * @name Helpers#selectTransaction
	   * @param {Object} transaction Transaction object
	   * @type {function}
	   */
	  var selectTransaction = function selectTransaction(transaction) {
	    service.setSelectedTransaction(transaction);
	    return intents.showTransactionDetails(transaction);
	  };
	
	  /**
	   * @description
	   * Loads more transactions
	   *
	   * @name Helpers#loadMore
	   * @type {function}
	   */
	  var loadMore = function loadMore() {
	    return service.loadMoreTransactions();
	  };
	
	  /**
	   * @description
	   * Loads more transactions for the active search query
	   *
	   * @name Helpers#searchMore
	   * @type {function}
	   */
	  var searchMore = function searchMore() {
	    return service.searchMoreTransactions();
	  };
	
	  return {
	    getSearchTransactions: getSearchTransactions,
	    getSelectedProduct: getSelectedProduct,
	    getSignedAmount: getSignedAmount,
	    getTransactions: getTransactions,
	    hasSearchTransactions: hasSearchTransactions,
	    hasSelectedProduct: hasSelectedProduct,
	    hasTransactions: hasTransactions,
	    initiatePayment: initiatePayment,
	    isAndroid: isAndroid,
	    isIOS: isIOS,
	    loadMore: loadMore,
	    searchMore: searchMore,
	    selectTransaction: selectTransaction,
	    showAccountActions: showAccountActions,
	    showEmptyState: showEmptyState,
	    showErrorState: showErrorState,
	    showFAB: showFAB,
	    showList: showList,
	    showLoadingState: showLoadingState,
	    showLoadMore: showLoadMore,
	    showLoadMoreLoading: showLoadMoreLoading,
	    showSearch: showSearch,
	    showSearchEmptyState: showSearchEmptyState,
	    showSearchLoadingState: showSearchLoadingState,
	    showSearchErrorState: showSearchErrorState,
	    showSearchLoadMore: showSearchLoadMore,
	    showSearchLoadMoreLoading: showSearchLoadMoreLoading
	  };
	};

/***/ }),

/***/ 47:
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
	 * @description
	 * Adds debitCreditSign property to transaction object based on debitCreditIndicator key
	 *
	 * @param {Object} transaction Transaction object
	 * @returns {Object} new copy of Transaction object
	 */
	
	exports.default = function (transaction) {
	  return Object.assign({
	    debitCreditSign: creditDebitKeysToSign[transaction.creditDebitIndicator]
	  }, transaction);
	};

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var maskCardNumber = function maskCardNumber(suffix) {
	  if (!suffix) {
	    return '';
	  }
	  return 'XXXX-XXXX-XXXX-' + suffix;
	};
	
	var defaultViewModel = function defaultViewModel(product) {
	  return product;
	};
	
	var viewModelFactories = {
	  currentAccounts: function currentAccounts(product) {
	    return Object.assign({}, product, {
	      identifier: product.IBAN || product.BBAN,
	      primaryValue: product.bookedBalance,
	      secondaryValue: product.availableBalance,
	      secondaryLabel: 'label.availableBalance',
	      tertiaryValue: product.creditLimit,
	      tertiaryLabel: 'label.creditLimit'
	    });
	  },
	
	  savingsAccounts: function savingsAccounts(product) {
	    return Object.assign({}, product, {
	      identifier: product.BBAN || product.IBAN,
	      primaryValue: product.bookedBalance,
	      secondaryValue: product.accruedInterest,
	      secondaryLabel: 'label.accruedInterestAmount'
	    });
	  },
	
	  termDeposits: function termDeposits(product) {
	    return Object.assign({}, product, {
	      primaryValue: product.principalAmount,
	      secondaryValue: product.accruedInterest,
	      secondaryLabel: 'label.accruedInterestAmount'
	    });
	  },
	
	  creditCards: function creditCards(product) {
	    return Object.assign({}, product, {
	      identifier: maskCardNumber(product.number),
	      primaryValue: product.bookedBalance,
	      secondaryValue: product.creditLimit,
	      secondaryLabel: 'label.creditLimit',
	      tertiaryValue: product.availableBalance,
	      tertiaryLabel: 'label.availableBalance'
	    });
	  },
	
	  debitCards: function debitCards(product) {
	    return Object.assign({}, product, {
	      identifier: maskCardNumber(product.number)
	    });
	  },
	
	  loans: function loans(product) {
	    return Object.assign({}, product, {
	      primaryValue: product.bookedBalance
	    });
	  },
	
	  investmentAccounts: function investmentAccounts(product) {
	    return Object.assign({}, product, {
	      primaryValue: product.currentInvestmentValue
	    });
	  }
	};
	
	/**
	 * Prepare the fields of a Product into a form ready for display to the User
	 *
	 * @param {object} product The source Product from the API
	 * @type {function}
	 * @returns {ProductView}
	 * @inner
	 */
	
	exports.default = function (product) {
	  if (!product) {
	    throw new Error('No product to convert. Please provide a product');
	  }
	
	  var isProcessedProduct = {}.hasOwnProperty.call(product, 'identifier') || {}.hasOwnProperty.call(product, 'primaryValue');
	
	  if (isProcessedProduct) {
	    return product;
	  }
	
	  var kind = product.kind;
	  if (!{}.hasOwnProperty.call(viewModelFactories, kind)) {
	    throw new TypeError('Unhandled product kind: ' + kind);
	  }
	
	  return viewModelFactories[product.kind](product) || defaultViewModel(product);
	};
	
	/**
	 * @typedef ProductView
	 * @type {object}
	 * @property {string} id The internal Product Identifier
	 * @property {string} name The product's name, suitable for display to users
	 * @property {string} alias The product's alias, suitable for display to users
	 * @property {?string} identifier The identifier of the Product from the user's perspective
	 * @property {?string} primaryValue The most important associated value to be displayed
	 * @property {?string} secondaryValue A secondary associated value to be displayed
	 * @property {?string} secondaryLabel A label to describe the secondary value
	 */

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(45);
	
	/**
	 * @name Intents
	 * @type {Object}
	 */
	exports.default = function (_ref) {
	  var createRequest = _ref.createRequest,
	      handleRequest = _ref.handleRequest,
	      service = _ref.service;
	  return {
	    /**
	     * @name Intents#showTransactionDetails
	     * @description The intent to show the transactions details
	     * @type {function}
	     * @inner
	     */
	    showTransactionDetails: createRequest(_constants.Intent.SHOW_TRANSACTION_DETAILS),
	
	    /**
	     * @name Intents#initiatePayment
	     * @description The intent to initiate a new payment
	     * @type {function}
	     * @inner
	     */
	    initiatePayment: createRequest(_constants.Intent.INITIATE_PAYMENT),
	
	    /**
	     * @name Intents#showTransactionList
	     * @description Handles the intent to show the transaction list
	     * @type {function}
	     * @inner
	     */
	    showTransactionList: handleRequest(_constants.Intent.SHOW_TRANSACTION_LIST, function (product) {
	      if (product) {
	        service.setSelectedProduct(product);
	      } else {
	        throw new Error('Product is undefined. Please pass a product object as the payload of the intent');
	      }
	    })
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bbm-transactions-list-ng.js.map