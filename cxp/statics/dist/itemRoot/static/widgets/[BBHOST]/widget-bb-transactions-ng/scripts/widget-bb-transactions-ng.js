(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-state-container-ng"), require("model-bb-transactions-ng"), require("lib-bb-extension-helpers-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-transactions-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-model-errors", "lib-bb-widget-extension-ng", "lib-bb-intent-ng", "lib-bb-event-bus-ng", "lib-bb-state-container-ng", "model-bb-transactions-ng", "lib-bb-extension-helpers-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-transactions-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-state-container-ng"), require("model-bb-transactions-ng"), require("lib-bb-extension-helpers-ng"));
	else
		root["widget-bb-transactions-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-model-errors"], root["lib-bb-widget-extension-ng"], root["lib-bb-intent-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-state-container-ng"], root["model-bb-transactions-ng"], root["lib-bb-extension-helpers-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_63__, __WEBPACK_EXTERNAL_MODULE_64__, __WEBPACK_EXTERNAL_MODULE_71__, __WEBPACK_EXTERNAL_MODULE_82__, __WEBPACK_EXTERNAL_MODULE_83__, __WEBPACK_EXTERNAL_MODULE_84__, __WEBPACK_EXTERNAL_MODULE_85__, __WEBPACK_EXTERNAL_MODULE_86__, __WEBPACK_EXTERNAL_MODULE_87__) {
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

	module.exports = __webpack_require__(81);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
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
/* 61 */,
/* 62 */,
/* 63 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_63__;

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_64__;

/***/ }),
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_71__;

/***/ }),
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(63);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(82);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbWidgetNg = __webpack_require__(64);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbIntentNg = __webpack_require__(83);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbEventBusNg = __webpack_require__(84);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbStateContainerNg = __webpack_require__(85);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _modelBbTransactionsNg = __webpack_require__(86);
	
	var _modelBbTransactionsNg2 = _interopRequireDefault(_modelBbTransactionsNg);
	
	var _libBbExtensionHelpersNg = __webpack_require__(87);
	
	var _libBbExtensionHelpersNg2 = _interopRequireDefault(_libBbExtensionHelpersNg);
	
	var _controller = __webpack_require__(88);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(90);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	var _index = __webpack_require__(91);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _service = __webpack_require__(104);
	
	var _service2 = _interopRequireDefault(_service);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bb-transactions-ng
	 *
	 * @description
	 * Transactions widget.
	 */
	var hooksKey = 'widget-bb-transactions-ng:hooks';
	var serviceKey = 'widget-bb-transactions-ng:service';
	var viewModelKey = 'widget-bb-transactions-ng:viewModel';
	
	exports.default = _vendorBbAngular2.default.module('widget-bb-transactions-ng', [_modelBbTransactionsNg2.default, _libBbWidgetNg2.default, _libBbEventBusNg2.default, _libBbIntentNg2.default, _libBbStateContainerNg2.default, _libBbExtensionHelpersNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey, _libBbWidgetNg.widgetKey, hooksKey,
	/* into */
	_index2.default]).factory(serviceKey, [_modelBbTransactionsNg.modelTransactionsKey, viewModelKey, '$window',
	/* into */
	_service2.default]).factory(_libBbExtensionHelpersNg.extensionHelpersContextKey, [_libBbIntentNg.bbIntentKey, function (bbIntent) {
	  return { bbIntent: bbIntent };
	}]).controller('TransactionsController', [_modelBbTransactionsNg.modelTransactionsKey, hooksKey, _libBbWidgetNg.widgetKey, _libBbEventBusNg.eventBusKey, _libBbIntentNg.bbIntentKey, '$window', '$scope', viewModelKey, serviceKey, _libBbStateContainerNg.bbStateContainerKey,
	/* into */
	_controller2.default]).run([viewModelKey, function (viewModel) {
	  viewModel.init();
	}]).name;

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
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_87__;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = TransactionsController;
	
	var _constants = __webpack_require__(89);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var SEARCH_MIN_QUERY = 2;
	var SEARCH_INPUT_DEBOUNCE = 1000;
	
	var searchActions = {
	  CANCEL: 'cancel',
	  INPUT: 'input'
	};
	
	var debounce = function debounce(func, wait, immediate) {
	  var timeout = void 0;
	  return function debouncedFn() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var context = this;
	    var later = function later() {
	      timeout = null;
	      if (!immediate) {
	        func.apply(context, args);
	      }
	    };
	    var callNow = immediate && !timeout;
	    clearTimeout(timeout);
	    timeout = setTimeout(later, wait);
	    if (callNow) {
	      func.apply(context, args);
	    }
	  };
	};
	
	/**
	 * @name DEFAULT_MAX_NAV_PAGES
	 * @type {number}
	 * @inner
	 *
	 * @description
	 * Defines the default maxNavPages for the accounts page as defined in the widget model.xml
	 */
	var DEFAULT_MAX_NAV_PAGES = 3;
	
	/**
	 * @name TransactionsController
	 * @ngkey TransactionsController
	 * @type {object}
	 *
	 * @description
	 * Transactions widget controller
	 */
	function TransactionsController(model, hooks, widget, eventBus, bbIntent, $window, scope, viewModel, service, stateContainer) {
	  /**
	   * @name TransactionsController#intents
	   * @type {object}
	   * @inner
	   *
	   * @description
	   * A set of intents that the controller uses or handles.
	   */
	  var intents = {};
	
	  /**
	   * @name TransactionsController#maxNavPages
	   * @type {number} maxNaxPages
	   * @inner
	   *
	   * @description
	   * Maximum number of navigation pages to display
	   */
	  var maxNavPages = widget.getLongPreference('bb.transaction.maxNavPages') || DEFAULT_MAX_NAV_PAGES;
	
	  /**
	   * @name TransactionsController#dismissTime
	   * @type {number}
	   * @inner
	   *
	   * @description
	   * Number of seconds to dismiss the notification
	   */
	  var dismissTime = Math.abs(widget.getLongPreference('bb.transaction.notificationDismissTime')) || 3;
	
	  /**
	   * @name TransactionsController#loadAllTransactionsInitially
	   * @type {boolean}
	   * @inner
	   *
	   * @description
	   * Defines whether data should be shown if no account is selected
	   */
	  var loadAllTransactionsInitially = widget.getBooleanPreference('bb.transaction.loadAllTransactionsOnInit');
	
	  /**
	   * @name TransactionsController#filters
	   * @type {Array.<string>}
	   * @inner
	   *
	   * @description
	   * List of filters that should be shown in the filter
	   */
	  var filters = (widget.getStringPreference('bb.transaction.filters') || '').split(',');
	
	  /**
	   * @name TransactionsController#state
	   * @type {object}
	   * @inner
	   *
	   * @description
	   * State selectors
	   */
	  var selectors = {
	    transactions: stateContainer.createSelector(function (_ref) {
	      var transactions = _ref.transactions;
	      return transactions.rawData === null ? null : hooks.processTransactions(transactions.rawData);
	    }),
	    searchTransactions: stateContainer.createSelector(function (state) {
	      return state.search.rawData === null ? null : hooks.processTransactions(state.search.rawData);
	    }),
	    transaction: stateContainer.createSelector(function (state) {
	      return state.transaction.data;
	    }),
	    searching: stateContainer.createSelector(function (state) {
	      return state.searching;
	    }),
	    initialLoading: stateContainer.createSelector(function (state) {
	      return state.initialLoading;
	    }),
	    loadingTransactions: stateContainer.createSelector(function (state) {
	      return state.transactions.loading;
	    }),
	    searchingTransactions: stateContainer.createSelector(function (state) {
	      return state.search.loading;
	    }),
	    loading: stateContainer.createSelector(function (state) {
	      return state.searching ? state.search.loading : state.transactions.loading;
	    }),
	    loadedAll: stateContainer.createSelector(function (state) {
	      return state.transactions.loadedAll;
	    }),
	    searchedAll: stateContainer.createSelector(function (state) {
	      return state.search.loadedAll;
	    }),
	    category: stateContainer.createSelector(function (state) {
	      return state.search.category;
	    }),
	    categories: stateContainer.createSelector(function (state) {
	      return state.search.categories;
	    }),
	    totalCount: stateContainer.createSelector(function (state) {
	      return state.searching ? state.search.total : state.transactions.total;
	    }),
	    error: stateContainer.createSelector(function (state) {
	      return state.error;
	    }),
	    product: stateContainer.createSelector(function (state) {
	      return state.product.data;
	    }),
	    productId: stateContainer.createSelector(function (state) {
	      return state.product.data && Array.isArray(state.product.data) ? state.product.data.map(function (prod) {
	        return prod.id;
	      }) : state.product.data && state.product.data.id;
	    }),
	    paginationType: stateContainer.createSelector(function (state) {
	      return state.paginationType;
	    }),
	    size: stateContainer.createSelector(function (state) {
	      return state.searching ? state.search.size : state.transactions.size;
	    }),
	    from: stateContainer.createSelector(function (state) {
	      return state.searching ? state.search.from : state.transactions.from;
	    }),
	    loadFrom: stateContainer.createSelector(function (state) {
	      return state.transactions.from;
	    }),
	    searchFrom: stateContainer.createSelector(function (state) {
	      return state.search.from;
	    }),
	    orderBy: stateContainer.createSelector(function (state) {
	      return state.sort.orderBy;
	    }),
	    direction: stateContainer.createSelector(function (state) {
	      return state.sort.direction;
	    }),
	    hasTodayTransactions: stateContainer.createSelector(function (state) {
	      return state.transactions.hasTodayTransactions;
	    }),
	    today: stateContainer.createSelector(function (state) {
	      return state.transactions.today;
	    }),
	    exportFailed: stateContainer.createSelector(function (state) {
	      return state.export.exportFailed;
	    })
	  };
	
	  /**
	   * @name TransactionsController#state
	   * @type {Object}
	   * @deprecated since 1.10.0. Use `viewModel.getState()` instead.
	   *
	   * @description
	   * State on transactions
	   */
	  var state = {
	    get exportTransactionsFailed() {
	      return selectors.exportFailed();
	    },
	    set exportTransactionsFailed(value) {
	      if (Boolean(value)) {
	        viewModel.export.afterExportError();
	      } else {
	        viewModel.export.beforeExport();
	      }
	    },
	    export: {
	      get hasTodaysTransactions() {
	        return selectors.hasTodayTransactions();
	      },
	      get today() {
	        return selectors.today();
	      }
	    },
	    get transactions() {
	      return selectors.transactions();
	    },
	    sort: {
	      get orderBy() {
	        return selectors.orderBy();
	      },
	      get direction() {
	        return selectors.direction();
	      }
	    },
	    pageParams: {
	      get from() {
	        return selectors.from();
	      },
	      get size() {
	        return selectors.size();
	      },
	      get currentPage() {
	        return selectors.from() + 1;
	      },
	      get totalItems() {
	        return selectors.totalCount();
	      },
	      maxNavPages: maxNavPages,
	      get paginationType() {
	        return selectors.paginationType();
	      }
	    },
	    get initialLoading() {
	      return selectors.initialLoading();
	    }
	  };
	
	  var loadMorePromise = null;
	  var searchMorePromise = null;
	
	  /**
	   * @name TransactionsController#filterNullProperties
	   * @type {function}
	   * @inner
	   * @param {object} obj Object to filter out null properties
	   * @returns {object} Filtered object
	   *
	   * @description
	   * Filters out properties with `null` value
	   */
	  var filterNullProperties = function filterNullProperties(obj) {
	    return Object.keys(obj).reduce(function (acc, prop) {
	      if (obj[prop] !== null) {
	        Object.assign(acc, _defineProperty({}, prop, obj[prop]));
	      }
	      return acc;
	    }, {});
	  };
	
	  /**
	   * @name TransactionsController#getLoadParams
	   * @type {function}
	   * @inner
	   * @param {LoadRequestParams} combiningParams Parameters to combine with.
	   * @returns {LoadRequestParams} Request parameters
	   *
	   * @description
	   * Returns request parameters for the list request
	   */
	  var getLoadParams = function getLoadParams() {
	    var combiningParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var _viewModel$getState = viewModel.getState(),
	        transactions = _viewModel$getState.transactions,
	        sort = _viewModel$getState.sort;
	
	    var params = {
	      from: transactions.from,
	      size: transactions.size
	    };
	
	    if (selectors.product() && selectors.product().visible !== false) {
	      Object.assign(params, _defineProperty({}, Array.isArray(selectors.product()) ? 'arrangementsIds' : 'productId', selectors.productId()));
	    }
	
	    if (sort.orderBy && sort.direction) {
	      Object.assign(params, {
	        orderBy: sort.orderBy,
	        direction: sort.direction
	      });
	    }
	
	    Object.assign(params, combiningParams);
	
	    return hooks.processRequestParams(params);
	  };
	
	  /**
	   * @name TransactionsController#getSearchParams
	   * @type {function}
	   * @inner
	   * @param {SearchRequestParams} combiningParams Parameters to combine with.
	   * @returns {SearchRequestParams} Request parameters
	   *
	   * @description
	   * Returns request parameters for the search request
	   */
	  var getSearchParams = function getSearchParams() {
	    var combiningParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var _viewModel$getState2 = viewModel.getState(),
	        searchState = _viewModel$getState2.search,
	        sort = _viewModel$getState2.sort;
	
	    var params = {
	      from: searchState.from,
	      size: searchState.size,
	      query: searchState.query,
	      bookingDateLessThan: searchState.bookingDateLessThan,
	      bookingDateGreaterThan: searchState.bookingDateGreaterThan,
	      amountGreaterThan: searchState.amountGreaterThan,
	      amountLessThan: searchState.amountLessThan,
	      creditDebitIndicator: searchState.creditDebitIndicator,
	      billingStatus: searchState.billingStatus,
	      category: searchState.category,
	      categories: searchState.categories,
	      fromCheckSerialNumber: searchState.fromCheckSerialNumber,
	      toCheckSerialNumber: searchState.toCheckSerialNumber
	    };
	
	    if (selectors.product() && selectors.product().visible !== false) {
	      Object.assign(params, _defineProperty({}, Array.isArray(selectors.product()) ? 'arrangementsIds' : 'productId', selectors.productId()));
	    }
	
	    if (sort.orderBy && sort.direction) {
	      Object.assign(params, {
	        orderBy: sort.orderBy,
	        direction: sort.direction
	      });
	    }
	
	    Object.assign(params, combiningParams);
	    params = filterNullProperties(params);
	
	    return hooks.processRequestParams(params);
	  };
	
	  /**
	   * @name TransactionsController#getExportParameters
	   * @type {function}
	   * @inner
	   * @param {ExportRequestParams} combiningParams Parameters to combine with.
	   * @returns {ExportRequestParams} Request parameters
	   *
	   * @description
	   * Returns request parameters for the export request
	   */
	  var getExportParams = function getExportParams() {
	    var combiningParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var params = Object.assign(_defineProperty({}, Array.isArray(selectors.product()) ? 'arrangementsIds' : 'productId', selectors.productId()), combiningParams);
	
	    if (selectors.searching()) {
	      var _viewModel$getState3 = viewModel.getState(),
	          searchState = _viewModel$getState3.search;
	
	      Object.assign(params, {
	        query: searchState.query,
	        bookingDateLessThan: searchState.bookingDateLessThan,
	        bookingDateGreaterThan: searchState.bookingDateGreaterThan,
	        amountGreaterThan: searchState.amountGreaterThan,
	        amountLessThan: searchState.amountLessThan,
	        creditDebitIndicator: searchState.creditDebitIndicator,
	        billingStatus: searchState.billingStatus,
	        categories: searchState.categories,
	        fromCheckSerialNumber: searchState.fromCheckSerialNumber,
	        toCheckSerialNumber: searchState.toCheckSerialNumber
	      });
	    }
	
	    params = filterNullProperties(params);
	
	    return hooks.processExportRequestParams(params, viewModel.getState());
	  };
	  /**
	   * @name TransactionsController#isFilterCriteriaEmpty
	   * @type {function}
	   * @inner
	   * @param {SearchRequestParams} params Search parameters
	   * @returns {boolean} True if any parameter is set, false if none
	   *
	   * @description
	   * Check if search and filter parameters are empty
	   */
	  var isFilterCriteriaEmpty = function isFilterCriteriaEmpty(params) {
	    return !Boolean(Object.keys(params).filter(function (key) {
	      return params[key] !== null;
	    }).length);
	  };
	
	  /**
	   * @name TransactionsController#search
	   * @type {function}
	   * @param {string} query Search query
	   * @returns {Promise.<void>} Promise
	   *
	   * @description
	   * Searches by a given query
	   */
	  function search(query) {
	    return service.search(getSearchParams({ query: query, from: 0 }));
	  }
	
	  /**
	   * @name TransactionsController#cancelSearch
	   * @type {function}
	   * @returns {void}
	   *
	   * @description
	   * Resets search
	   */
	  function cancelSearch() {
	    viewModel.search.cancel();
	  }
	
	  /**
	   * @name TransactionsController#applySearchFilter
	   * @type {function}
	   * @param {object} params Search filter params
	   * @returns {Promise.<void>} Promise
	   *
	   * @description
	   * Searches by given filter parameters
	   */
	  function applySearchFilter(params) {
	    if (isFilterCriteriaEmpty(params)) {
	      cancelSearch();
	      return Promise.resolve();
	    }
	
	    return service.search(getSearchParams({
	      from: 0,
	      query: params.query,
	      bookingDateLessThan: params.toDate,
	      bookingDateGreaterThan: params.fromDate,
	      amountGreaterThan: params.amountFrom,
	      amountLessThan: params.amountTo,
	      creditDebitIndicator: params.creditDebitIndicator,
	      billingStatus: params.billingStatus,
	      categories: params.categories,
	      fromCheckSerialNumber: params.checkSerialNumberFrom,
	      toCheckSerialNumber: params.checkSerialNumberTo
	    }));
	  }
	
	  /**
	   * @name TransactionsController#searchMore
	   * @type {function}
	   * @param {?function} done Callback function for `ui-bb-load-more-ng` component
	   * @returns {null|Promise.<void>} Promise or null if search is finished
	   *
	   * @description
	   * Loads more search results and appends them to the search result.
	   */
	  function searchMore(done) {
	    if (selectors.searchingTransactions()) {
	      return searchMorePromise;
	    }
	
	    var doneFn = done || function () {};
	    var params = getSearchParams({ from: selectors.searchFrom() + 1 });
	    searchMorePromise = service.search(params).catch(function () {}).then(function () {
	      searchMorePromise = null;
	      doneFn();
	    });
	
	    return searchMorePromise;
	  }
	
	  /**
	   * @name TransactionsController#loadTransactions
	   * @type {function}
	   * @inner
	   * @param {LoadRequestParams|SearchRequestParams} params Request params
	   * @returns {Promise.<void>} Promise
	   *
	   * @description
	   * Handles loading or searching transactions
	   */
	  function loadTransactions(params) {
	    if (selectors.searching()) {
	      return service.search(getSearchParams(params));
	    }
	    return service.load(getLoadParams(params));
	  }
	
	  /**
	   * @name TransactionsController#loadMore
	   * @type {function}
	   * @param {?function} done Callback function for `ui-bb-load-more-ng` component
	   * @returns {null|Promise.<void>} Promise or null if loading is finished
	   *
	   * @description
	   * Loads more transactions and append them to the transaction's list
	   */
	  function loadMore(done) {
	    if (selectors.loadingTransactions() || selectors.loadedAll() || selectors.error()) {
	      return loadMorePromise;
	    }
	
	    var doneFn = done || function () {};
	    var params = getLoadParams({ from: selectors.loadFrom() + 1 });
	    params = hooks.extendLoadMoreParams(params);
	
	    loadMorePromise = service.load(params).catch(function () {}).then(function () {
	      loadMorePromise = null;
	      doneFn();
	    });
	
	    return loadMorePromise;
	  }
	
	  /**
	   * @name TransactionsController#changePage
	   * @type {function}
	   * @param {object} params
	   * @param {number} params.currentPage Transactions page to load
	   * @returns {Promise.<void>} A Promise
	   *
	   * @description
	   * Change page of displayed accounts.
	   */
	  var changePage = function changePage(params) {
	    return loadTransactions({ from: params.currentPage - 1 });
	  };
	
	  /**
	   * @name TransactionsController#onProductSelect
	   * @type {function}
	   * @inner
	   * @param {object} payload Object with selected product
	   *
	   * @description
	   * Handles account select
	   */
	  function onProductSelect(payload) {
	    if (payload.product && selectors.productId() === payload.product.id) {
	      return;
	    }
	
	    viewModel.product.afterSelectProductSuccess(payload.product || payload.products);
	
	    service.load(getLoadParams({ from: 0 }));
	    service.checkTodayTransactions(selectors.productId());
	  }
	
	  /**
	   * @name TransactionsController#onTransactionClick
	   * @type {function}
	   * @param {object} selectedTransaction Object with selected transaction
	   * @fires bb.event.transaction.selected
	   *
	   * @description
	   * Handles transaction select
	   */
	  function onTransactionClick(selectedTransaction) {
	    service.storeCurrentTransaction(selectedTransaction);
	    eventBus.publish(_constants.Message.TRANSACTION_SELECTED, {
	      transaction: selectedTransaction
	    });
	  }
	
	  /**
	   * @name TransactionsController#onTransactionSearchInput
	   * @type {function}
	   * @inner
	   * @see search
	   *
	   * @description
	   * Handles search field input
	   */
	  var onTransactionSearchInput = debounce(function (query) {
	    if (query.length >= SEARCH_MIN_QUERY) {
	      search(query);
	    }
	  }, SEARCH_INPUT_DEBOUNCE);
	
	  /**
	   * @name TransactionsController#onTransactionSelect
	   * @type {function}
	   * @inner
	   * @param {object} data Selected transaction object
	   *
	   * @description
	   * Handles transaction select
	   */
	  function onTransactionSelect(data) {
	    viewModel.transaction.beforeStore(data.transaction);
	  }
	
	  /**
	   * @name TransactionsController#showProductDetails
	   * @type {function}
	   * @param {string} productId The id of the product
	   *
	   * @description
	   * Handles the intent to show the product details for the given product
	   */
	  var showProductDetails = function showProductDetails(productId) {
	    // Check if intent is available.
	    if (intents.showProductDetails) {
	      intents.showProductDetails(productId);
	    }
	  };
	
	  /**
	   * @name TransactionsController#onTransactionSearch
	   * @type {function}
	   * @param {object} detail Search input object
	   * @inner
	   *
	   * @description
	   * Handles transaction search input
	   */
	  var onTransactionSearch = function onTransactionSearch(detail) {
	    if (detail.action === searchActions.INPUT) {
	      onTransactionSearchInput(detail.text);
	    } else if (detail.action === searchActions.CANCEL) {
	      cancelSearch();
	    }
	    scope.$digest();
	  };
	
	  /**
	   * @name TransactionsController#handleViewCategoryIntent
	   * @type {function}
	   * @param {object} payload ViewCategory intent payload
	   * @inner
	   *
	   * @description
	   * Handles ViewCategory intent
	   */
	  var handleViewCategoryIntent = function handleViewCategoryIntent(payload) {
	    if (payload && (!!payload.category || !!payload.categories)) {
	      var params = {
	        productId: payload.productId || null,
	        arrangementId: payload.arrangementId || null,
	        arrangementsIds: payload.arrangementsIds || null,
	        category: payload.category || null,
	        categories: payload.categories || null,
	        bookingDateGreaterThan: payload.bookingDateGreaterThan || null,
	        bookingDateLessThan: payload.bookingDateLessThan || null
	      };
	
	      service.search(getSearchParams(params)).then(function () {
	        service.loadCurrentTransaction();
	      });
	    } else {
	      cancelSearch();
	    }
	  };
	
	  /**
	   * @name TransactionsController#handleChangeTransactionCategoryIntent
	   * @type {function}
	   * @param {object} payload ChangeTransactionCategory intent payload
	   * @inner
	   *
	   * @description Handles ChangeTransactionCategory intent
	   */
	  var handleChangeTransactionCategoryIntent = function handleChangeTransactionCategoryIntent(payload) {
	    return service.updateTransactionCategory(payload).then(function () {
	      var _viewModel$getState4 = viewModel.getState(),
	          transactions = _viewModel$getState4.transactions;
	
	      var transaction = transactions.rawData.filter(function (item) {
	        return item.id === payload.transactionId && item.arrangementId === payload.arrangementId;
	      })[0] || {};
	      viewModel.list.afterUpdateSuccess(Object.assign(transaction, {
	        category: payload.categoryName
	      }));
	    }).then(function () {
	      if (hooks.shouldUpdateAnalysisView()) {
	        intents.updateAnalysisView();
	      }
	    }).catch(viewModel.list.afterUpdateError);
	  };
	
	  /**
	   * @name TransactionsController#dismissNotification
	   * @type {function}
	   * @param {number} notificationId Id of the notification that should be dismissed
	   *
	   * @description
	   * Helper method to remove a notification from state
	   */
	  var dismissNotification = function dismissNotification(notificationId) {
	    return viewModel.notification.removeNotification(notificationId);
	  };
	
	  /**
	   * @name TransactionsController#changeTransactionCategory
	   * @type {function}
	   * @param {object} transactionObj - The transaction object
	   *
	   * @description
	   * Trigger change transaction category intent
	   */
	  var changeTransactionCategory = function changeTransactionCategory(transactionObj) {
	    return intents.changeTransactionCategory(transactionObj);
	  };
	
	  /**
	   * @name TransactionsController#bindEvents
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Adds subscriptions to bus events
	   */
	  function bindEvents() {
	    eventBus.subscribe(_constants.Message.PRODUCT_SELECTED, onProductSelect);
	    eventBus.subscribe(_constants.Message.PRODUCTS_SELECTED, onProductSelect);
	    eventBus.subscribe(_constants.Message.TRANSACTION_SELECTED, onTransactionSelect);
	    $window.addEventListener(_constants.Message.SEARCH, function (_ref2) {
	      var detail = _ref2.detail;
	      return onTransactionSearch(detail);
	    });
	  }
	
	  /**
	   * @name TransactionsController#initIntent
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Inits the bbIntent and adds intent handlers.
	   * 'intent.rb.transactions.dbit.list.view' or 'intent.rb.transactions.crdt.list.view'
	   * intent can be used to update load query params with new productId,
	   * arrangementId, arrangementsIds, category, bookingDateGreaterThan and bookingDateLessThan
	   * params
	   */
	  function initIntent() {
	    // Deprecated
	    // TODO: remove in 2.10.1
	    bbIntent.handle(_constants.Intent.VIEW_CATEGORY_TRANSACTIONS, handleViewCategoryIntent);
	
	    bbIntent.handle(_constants.Intent.VIEW_CATEGORY_DBIT_TRANSACTIONS, handleViewCategoryIntent);
	    bbIntent.handle(_constants.Intent.VIEW_CATEGORY_CRDT_TRANSACTIONS, handleViewCategoryIntent);
	
	    intents.showProductDetails = bbIntent.create(_constants.Intent.SHOW_PRODUCT_DETAILS);
	    intents.updateAnalysisView = bbIntent.create(_constants.Intent.UPDATE_ANALYSIS_VIEW);
	    intents.changeTransactionCategory = bbIntent.create(hooks.setChangeTransCategoryIntent(), handleChangeTransactionCategoryIntent);
	
	    bbIntent.init(function () {});
	  }
	
	  /**
	   * @name TransactionsController#$onInit
	   * @type {function}
	   *
	   * @description
	   * Widget initialization logic - called automatically in the angular cycle.
	   */
	  function $onInit() {
	    if (!viewModel.getState().initialLoading) {
	      return Promise.resolve(bindEvents());
	    }
	
	    return service.setupSelectedProduct(hooks.isDefaultProductFirst()).then(function () {
	      if (selectors.productId() === -1 && !loadAllTransactionsInitially) {
	        return Promise.reject(bindEvents());
	      }
	      return bindEvents();
	    }).then(initIntent).then(function () {
	      /* This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
	       * and will be removed with the update to widget collection 3 (WC3)
	       */
	      eventBus.publish(_constants.Message.CXP_ITEM_LOADED, {
	        id: widget.getId()
	      });
	
	      eventBus.publish(_constants.Message.BB_ITEM_LOADED, {
	        id: widget.getId()
	      });
	    }).then(function () {
	      return service.load(getLoadParams());
	    })
	    // TODO: Show currencies selector in filter form when search service supports it
	    // then(() => service.getCurrencies())
	    .then(function () {
	      // Don't include these methods in the main init chain
	      service.checkTodayTransactions(selectors.productId());
	      service.loadCurrentTransaction();
	    }).then(function () {
	      if (filters.includes(_constants.Filter.CATEGORIES)) {
	        service.getCategories();
	      }
	    }).then(function () {
	      return service.getTransactionsEnumValues();
	    }).then(function () {
	      viewModel.initList.afterLoadDone();
	      scope.$digest();
	    }).catch(function () {
	      viewModel.initList.afterLoadDone();
	      scope.$digest();
	    });
	  }
	
	  /**
	   * @name TransactionsController#onSort
	   * @type {function}
	   * @param {string} orderBy Column key to sort
	   * @param {string} direction Sort direction
	   * @param {object} header Config object reference. Deprecated.
	   *
	   * @description
	   * Loads sorted list of payments
	   */
	  var onSort = function onSort(orderBy, direction, header) {
	    // The following line should be part of the extension
	    Object.assign(header, {
	      sortable: Object.assign({}, header.sortable, {
	        direction: direction
	      })
	    });
	
	    loadTransactions({ orderBy: orderBy, direction: direction });
	  };
	
	  /**
	   * @name TransactionsController#exportToFile
	   * @type {function}
	   * @param {string} format Specified format (CSV, PDF)
	   * @param {number} nbDays Number of days to export - pass 0 to get all transactions, pass 1 to get
	   * today's transactions (default), or a number N to get the last N days of transactions
	   *
	   * @description
	   * Exports list of transactions to a file in specified format - if search/filter is active, then
	   * apply the same parameters to the export.
	   */
	  var exportToFile = function exportToFile(format) {
	    var nbDays = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	
	    var params = {};
	
	    if (nbDays > 0) {
	      var dateRangeEnd = new Date();
	      var dateRangeStart = new Date();
	      dateRangeStart.setDate(dateRangeStart.getDate() - nbDays + 1);
	
	      Object.assign(params, {
	        bookingDateLessThan: dateRangeEnd.toISOString().slice(0, 10),
	        bookingDateGreaterThan: dateRangeStart.toISOString().slice(0, 10)
	      });
	    }
	
	    service.export(getExportParams(params), format);
	  };
	
	  return {
	    /**
	     * @name TransactionsController#transactions
	     * @type {module:data-bb-transactions-ng.TransactionsData.TransactionItemGet[]}
	     * May be empty if the transactions aren't loaded.
	     * @deprecated since 1.10.0. Use `viewModel.getState().transactions.rawData` instead.
	     *
	     * @description
	     * The list of transactions
	     */
	    get transactions() {
	      return selectors.transactions();
	    },
	    /**
	     * @name TransactionsController#product
	     * @type {module:model-bb-transactions-ng.Product}
	     * @deprecated since 1.10.0. Use `viewModel.getState().product.data` instead.
	     *
	     * @description
	     * Selected product info
	     */
	    get product() {
	      return selectors.product();
	    },
	    /**
	     * @name TransactionsController#loading
	     * @type {boolean}
	     * @deprecated since 1.10.0. Use `viewModel.getState().transactions.loading`
	     * or `viewModel.getState().search.loading` instead.
	     *
	     * @description
	     * Loading flag which is true while the list of transactions is loading
	     */
	    get loading() {
	      return selectors.loading();
	    },
	    /**
	     * @name TransactionsController#loadingError
	     * @type {module:ui-bb-model-errors.ModelError}
	     * @deprecated since 1.10.0. Use `viewModel.getState().error` instead.
	     *
	     * @description
	     * Last occurred error
	     */
	    get loadingError() {
	      return selectors.error();
	    },
	    /**
	     * @name TransactionsController#allTransactionsLoaded
	     * @type {boolean}
	     * @deprecated since 1.10.0. Use `viewModel.getState().transactions.loadedAll`
	     * or `viewModel.getState().search.loadedAll` instead.
	     *
	     * @description
	     * Flag that indicates whether all the transactions have been loaded
	     */
	    get allTransactionsLoaded() {
	      return selectors.loadedAll();
	    },
	    /**
	     * @name TransactionsController#searching
	     * @type {boolean}
	     * @deprecated since 1.10.0. Use `viewModel.getState().searching` instead.
	     *
	     * @description
	     * Searching flag which is true while user is searching transactions
	     */
	    get searching() {
	      return selectors.searching();
	    },
	    /**
	     * @name TransactionsController#searchLoading
	     * @type {boolean}
	     * @deprecated since 1.10.0. Use `viewModel.getState().search.loading` instead.
	     *
	     * @description
	     * Loading flag which is true while the list of transactions is loading
	     */
	    get searchLoading() {
	      return selectors.searchingTransactions();
	    },
	    /**
	     * @name TransactionsController#searchLoadingError
	     * @type {module:ui-bb-model-errors.ModelError}
	     * @deprecated since 1.10.0. Use `viewModel.getState().error` instead.
	     *
	     * @description
	     * Search error
	     */
	    get searchLoadingError() {
	      return selectors.error();
	    },
	    /**
	     * @name TransactionsController#searchTransactions
	     * @type {Array.<module:data-bb-transactions-ng.TransactionsData.TransactionItemGet>}
	     * @deprecated since 1.10.0. Use `viewModel.getState().search.rawData` instead.
	     *
	     * @description
	     * The list of found transactions.
	     */
	    get searchTransactions() {
	      return selectors.searchTransactions();
	    },
	    /**
	     * @name TransactionsController#searchTransactions
	     * @type {boolean} search status
	     * @deprecated since 1.10.0. Use `viewModel.getState().searching` instead.
	     *
	     * @description
	     * Returns whether search filter is applied
	     */
	    get isSearching() {
	      return selectors.searching();
	    },
	    /**
	     * @name TransactionsController#searchAllTransactionsLoaded
	     * @type {boolean}
	     * @deprecated since 1.10.0. Use `viewModel.getState().search.loadedAll` instead.
	     *
	     * @description
	     * Flag that indicates whether all the transactions have been loaded during a search
	     */
	    get searchAllTransactionsLoaded() {
	      return selectors.searchedAll();
	    },
	    /**
	     * @name TransactionsController#transaction
	     * @type {object}
	     * @deprecated since 1.10.0. Use `viewModel.getState().transaction.data` instead.
	     *
	     * @description
	     * Selected transaction info
	     */
	    get transaction() {
	      return selectors.transaction();
	    },
	    /**
	     * @name TransactionsController#showAllTransactions
	     * @type {boolean}
	     * @deprecated since 1.10.0. Use `viewModel.getState().search.category` instead.
	     *
	     * @description
	     * Show all available transactions
	     */
	    get showAllTransactions() {
	      return selectors.category() !== null || selectors.categories() !== null;
	    },
	    /**
	     * @name TransactionsController#currencies
	     * @type {Array}
	     *
	     * @description
	     * Return all available currencies
	     */
	    get currencies() {
	      return viewModel.getState().currencies.data;
	    },
	    /**
	     * @name TransactionsController#categories
	     * @type {Array}
	     *
	     * @description
	     * Return all available categories
	     */
	    get categories() {
	      return viewModel.getState().categories.data;
	    },
	    /**
	     * @name TransactionsController#transactionsEnumValues
	     * @type {Array}
	     *
	     * @description
	     * Return all available transactions enum values
	     */
	    get transactionsEnumValues() {
	      return viewModel.getState().transactionsEnumValues.data;
	    },
	    /**
	     * @name TransactionsController#isMultipleAccounts
	     * @type {boolean}
	     *
	     * @description
	     * Check if multiple accounts are selected
	     */
	    get isMultipleAccounts() {
	      return Array.isArray(selectors.product()) && selectors.product().length > 1;
	    },
	    filters: filters,
	    cancelSearch: cancelSearch,
	    loadMore: loadMore,
	    search: search,
	    applySearchFilter: applySearchFilter,
	    searchMore: searchMore,
	    eventBus: eventBus,
	    onTransactionClick: onTransactionClick,
	    /**
	     * @name TransactionsController#errors
	     * @type {object}
	     * @deprecated since 1.10.0. Use `viewModel.getState().error` instead.
	     *
	     * @description
	     * Contains transaction error
	     */
	    errors: {
	      get transactionsError() {
	        return selectors.error();
	      }
	    },
	    state: state,
	    onSort: onSort,
	    changePage: changePage,
	    exportToFile: exportToFile,
	    dismissTime: dismissTime,
	    loadAllTransactionsInitially: loadAllTransactionsInitially,
	    showProductDetails: showProductDetails,
	    changeTransactionCategory: changeTransactionCategory,
	    dismissNotification: dismissNotification,
	    /* Lifecycle hooks */
	    $onInit: $onInit
	  };
	}

/***/ }),
/* 89 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Widget events enum
	 * @type {object}
	 */
	var Event = {
	  TRANSACTION_SELECTED: 'bb.event.transaction.selected',
	  PRODUCT_SELECTED: 'bb.event.product.selected',
	  PRODUCTS_SELECTED: 'bb.event.products.selected',
	  SEARCH: 'bb.event.transactions.search',
	  CXP_ITEM_LOADED: 'cxp.item.loaded',
	  BB_ITEM_LOADED: 'bb.item.loaded'
	};
	
	/**
	 * Widget actions enum
	 * @type {object}
	 */
	var Action = {};
	
	/**
	 * Widget messages enum
	 * @type {object}
	 */
	var Message = exports.Message = Object.assign({}, Action, Event);
	
	/**
	 * Widget static text
	 * @type {object}
	 */
	var Text = exports.Text = {};
	
	/**
	 * Widget intent enum
	 * @type {object}
	 */
	var Intent = exports.Intent = {
	  // view.account.category.transactions key is deprecated
	  // Remove in 2.12.0
	  VIEW_CATEGORY_TRANSACTIONS: 'view.account.category.transactions',
	  VIEW_CATEGORY_DBIT_TRANSACTIONS: 'intent.rb.transactions.dbit.list.view',
	  VIEW_CATEGORY_CRDT_TRANSACTIONS: 'intent.rb.transactions.crdt.list.view',
	  SHOW_PRODUCT_DETAILS: 'intent.bb.productDetails.view.show',
	  UPDATE_ANALYSIS_VIEW: 'intent.rb.update.analysis.view'
	};
	
	/**
	 * Filter enum (possible values in bb.transaction.filters widget preference)
	 * @type {object}
	 */
	var Filter = exports.Filter = {
	  CREDIT_DEBIT_INDICATOR: 'creditDebitIndicator',
	  BILLING_STATUS: 'billingStatus',
	  CURRENCY: 'currency',
	  AMOUNT_RANGE: 'amountRange',
	  DATE_RANGE: 'dateRange',
	  CATEGORIES: 'categories',
	  CHECK_SERIAL_NUMBER_RANGE: 'checkSerialNumberRange'
	};
	
	var DefaultGetTransactionsEnumValuesParams = exports.DefaultGetTransactionsEnumValuesParams = {
	  attributeName: 'billingStatus'
	};

/***/ }),
/* 90 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Default hooks for widget-bb-transactions-ng
	 */
	
	/**
	 * @name Hooks#processProductSelected
	 * @type {function}
	 * @param {module:model-bb-transactions.Product} productSelected Product to process
	 * @returns {Object} Processed product
	 *
	 * @description
	 * Default hook for selected product processing
	 */
	var processProductSelected = exports.processProductSelected = function processProductSelected(productSelected) {
	  return productSelected;
	};
	
	/**
	 * @name Hooks#processRequestParams
	 * @type {function}
	 * @param {object} params Params to process
	 * @param {?number} params.amountGreaterThan Amount greater than
	 * @param {?number} params.amountLessThan Amount less than
	 * @param {?string} params.bookingDateGreaterThan Booking date greater than
	 * @param {?string} params.bookingDateLessThan Booking date less than
	 * @param {?string} params.productId The product id
	 * @param {?string} params.type Type category
	 * @param {?string} params.orderBy The key to order by
	 * @param {?string} params.direction The direction to order by
	 * @param {?number} params.from The page to list from
	 * @param {?number} params.size The number of results per page
	 * @param {?string} params.query The search term used to search for transactions
	 * @returns {Object} Processed params
	 *
	 * @description
	 * Default hook for transactions query params processing/extending
	 */
	var processRequestParams = exports.processRequestParams = function processRequestParams(params) {
	  return params;
	};
	
	/**
	 * @name Hooks#processTransactions
	 * @type {function}
	 *
	 * @param {module:data-bb-transactions-ng.TransactionsData.TransactionItemGet[]} transactions
	 * Transactions to process
	 * @returns {Array} Processed transactions
	 *
	 * @description
	 * Default hook for transactions list post processing
	 */
	var processTransactions = exports.processTransactions = function processTransactions(transactions) {
	  return transactions;
	};
	
	/**
	 * @name Hooks#processExportRequestParams
	 * @type {function}
	 * @param {ExportRequestParams} exportParams Params to process
	 * @param {ViewState} state Widget state
	 * @returns {ExportRequestParams} Processed params
	 *
	 * @description
	 * Default hook for transactions query params processing/extending
	 */
	// eslint-disable-next-line no-unused-vars
	var processExportRequestParams = exports.processExportRequestParams = function processExportRequestParams(exportParams, state) {
	  return exportParams;
	};
	
	/**
	 * @name Hooks#defaultPaginationType
	 * @type {function}
	 * @returns {?string}
	 *
	 * @description
	 * defaultPaginationType default hook for setting load-more or pagination as default
	 */
	var defaultPaginationType = exports.defaultPaginationType = function defaultPaginationType() {
	  return null;
	};
	
	/**
	 * @name Hooks#defaultSortableColumn
	 * @type {function}
	 * @returns {?string}
	 *
	 * @description
	 * defaultSortableColumn default hook
	 */
	var defaultSortableColumn = exports.defaultSortableColumn = function defaultSortableColumn() {
	  return null;
	};
	
	/**
	 * @name Hooks#defaultSortableDirection
	 * @type {function}
	 * @returns {?string}
	 *
	 * @description
	 * defaultSortableDirection default hook
	 */
	var defaultSortableDirection = exports.defaultSortableDirection = function defaultSortableDirection() {
	  return null;
	};
	
	/**
	 * @name Hooks#isDefaultProductFirst
	 * @type {function}
	 * @returns {boolean}
	 *
	 * @description
	 * isDefaultProductFirst default hook
	 */
	var isDefaultProductFirst = exports.isDefaultProductFirst = function isDefaultProductFirst() {
	  return true;
	};
	
	/**
	 * @name Hooks#extendLoadMoreParams
	 * @type {function}
	 * @param {object} params to extend
	 * @param {?number} params.amountGreaterThan Amount greater than
	 * @param {?number} params.amountLessThan Amount less than
	 * @param {?string} params.bookingDateGreaterThan Booking date greater than
	 * @param {?string} params.bookingDateLessThan Booking date less than
	 * @param {?string} params.productId The product id
	 * @param {?string} params.type Type category
	 * @returns {object} Processed params
	 *
	 * @description
	 * Default hook for extending loadMore params
	 */
	var extendLoadMoreParams = exports.extendLoadMoreParams = function extendLoadMoreParams(params) {
	  return params;
	};
	
	/**
	 * @name Hooks#isTransactionsShown
	 * @type {function}
	 * @returns {boolean}
	 *
	 * @description
	 * Default hook for checking if the transactions should be visible
	 */
	var isTransactionsShown = exports.isTransactionsShown = function isTransactionsShown() {
	  return true;
	};
	
	/**
	 * @name Hooks#setChangeTransCategoryIntent
	 * @type {function}
	 * @returns {string}
	 *
	 * @description
	 * Default hook for setting the intent to trigger the change transaction category widget
	 */
	var setChangeTransCategoryIntent = exports.setChangeTransCategoryIntent = function setChangeTransCategoryIntent() {
	  return '';
	};
	
	/**
	 * @name Hooks#shouldUpdateAnalysisView
	 * @type {function}
	 * @returns {boolean}
	 *
	 * @description
	 * Default hook for shouldUpdateAnalysisView flag
	 */
	var shouldUpdateAnalysisView = exports.shouldUpdateAnalysisView = function shouldUpdateAnalysisView() {
	  return false;
	};
	
	/**
	 * @name Hooks#processCategories
	 * @type {function}
	 * @param {Array.<module:data-bb-categories-management-http-ng.CategoriesManagement.Category>}
	 * categories Categories to process
	 * @returns {Array} Processed categories
	 *
	 * @description
	 * Default hook for categories list post processing
	 */
	var processCategories = exports.processCategories = function processCategories(categories) {
	  return categories;
	};
	
	/**
	 * @name Hooks#processTransactionsEnumValues
	 * @type {function}
	 * @param {Array.<module:data-bb-transactions-http-ng.TransactionsData.DefaultValueGetResponse>}
	 * enumValues Transactions enum values to process
	 * @returns {Array} Processed transactions enum values
	 *
	 * @description
	 * Default hook for transactions enum values post processing
	 */
	var processTransactionsEnumValues = exports.processTransactionsEnumValues = function processTransactionsEnumValues(enumValues) {
	  return enumValues;
	};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _initialState = __webpack_require__(92);
	
	var _initialState2 = _interopRequireDefault(_initialState);
	
	var _init = __webpack_require__(93);
	
	var _init2 = _interopRequireDefault(_init);
	
	var _list = __webpack_require__(94);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _product = __webpack_require__(96);
	
	var _product2 = _interopRequireDefault(_product);
	
	var _transaction = __webpack_require__(97);
	
	var _transaction2 = _interopRequireDefault(_transaction);
	
	var _search = __webpack_require__(98);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _export = __webpack_require__(99);
	
	var _export2 = _interopRequireDefault(_export);
	
	var _currencies = __webpack_require__(100);
	
	var _currencies2 = _interopRequireDefault(_currencies);
	
	var _notification = __webpack_require__(101);
	
	var _notification2 = _interopRequireDefault(_notification);
	
	var _categories = __webpack_require__(102);
	
	var _categories2 = _interopRequireDefault(_categories);
	
	var _transactionsEnumValues = __webpack_require__(103);
	
	var _transactionsEnumValues2 = _interopRequireDefault(_transactionsEnumValues);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Defines the default page size for the transactions page
	 *
	 * @type {number}
	 * @inner
	 */
	var DEFAULT_PAGE_SIZE = 10;
	
	/**
	 * Defines the default paginationType for the transactions page
	 * as defined in the widget model.xml
	 *
	 * @type {string}
	 * @inner
	 */
	// Combine state reducers
	var DEFAULT_PAGINATION_TYPE = 'load-more';
	
	exports.default = function (stateContainer, widget, hooks) {
	  var stateParams = {
	    pageSize: widget.getLongPreference('bb.transaction.pageSize') || widget.getLongPreference('transactionListSize') || DEFAULT_PAGE_SIZE,
	    orderBy: hooks.defaultSortableColumn(),
	    sortDirection: hooks.defaultSortableDirection(),
	    paginationType: widget.getStringPreference('bb.transaction.paginationType') || hooks.defaultPaginationType() || DEFAULT_PAGINATION_TYPE,
	    loadOnInit: widget.getBooleanPreference('bb.transaction.initLoad')
	  };
	  var initialState = (0, _initialState2.default)(stateParams);
	
	  /**
	   * @name ViewModel
	   * @type {object}
	   * @ngkey widget-bb-transactions-ng:viewModel
	   * @inner
	   */
	  return {
	    /**
	     * @name ViewModel#init
	     * @type {function}
	     * @inner
	     * @returns {ViewState}
	     *
	     * @description
	     * Initialises view model with initial state
	     */
	    init: stateContainer.createAction(function () {
	      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	      return state;
	    }),
	    /**
	     * @name ViewModel#getState
	     * @type {function}
	     * @inner
	     * @returns {ViewState}
	     *
	     * @description
	     * Returns view state
	     */
	    getState: stateContainer.getState,
	    /**
	     * @name ViewModel#initList
	     * @type {ViewModelInitActions}
	     * @inner
	     *
	     * @description
	     * Actions for updating the parts of the `ViewState` related to initial loading
	     */
	    initList: (0, _init2.default)(stateContainer),
	    /**
	     * @name ViewModel#list
	     * @type {ViewModelListActions}
	     * @inner
	     *
	     * @description
	     * Actions for updating the parts of the `ViewState` related to transactions list
	     */
	    list: (0, _list2.default)(stateContainer),
	    /**
	     * @name ViewModel#product
	     * @type {ViewModelProductActions}
	     * @inner
	     *
	     * @description
	     * Actions for updating the parts of the `ViewState` related to product state
	     */
	    product: (0, _product2.default)(stateContainer, hooks),
	    /**
	     * @name ViewModel#transaction
	     * @type {ViewModelTransactionActions}
	     * @inner
	     *
	     * @description
	     * Actions for updating the parts of the `ViewState` related to transaction state
	     */
	    transaction: (0, _transaction2.default)(stateContainer),
	    /**
	     * @name ViewModel#search
	     * @type {ViewModelSearchActions}
	     * @inner
	     *
	     * @description
	     * Actions for updating the parts of the `ViewState` related to transactions search
	     */
	    search: (0, _search2.default)(stateContainer),
	    /**
	     * @name ViewModel#export
	     * @type {ViewModelExportActions}
	     * @inner
	     *
	     * @description
	     * Actions for updating the parts of the `ViewState` related to export transactions
	     */
	    export: (0, _export2.default)(stateContainer),
	    /**
	     * @name ViewModel#currencies
	     * @type {ViewModelCurrenciesActions}
	     * @inner
	     *
	     * @description
	     * Actions for updating the parts of the `ViewState` related to export currencies
	     */
	    currencies: (0, _currencies2.default)(stateContainer),
	    /**
	     * @name ViewModel#notification
	     * @type {ViewModelNotificationActions}
	     * @inner
	     *
	     * @description
	     * Actions for updating the parts of the `ViewState` related to notifications
	     */
	    notification: (0, _notification2.default)(stateContainer),
	    /**
	     * @name ViewModel#categories
	     * @type {ViewModelCategoriesActions}
	     * @inner
	     *
	     * @description
	     * Actions for updating the parts of the `ViewState` related to categories
	     */
	    categories: (0, _categories2.default)(stateContainer, hooks),
	    /**
	     * @name ViewModel#transactionsEnumValues
	     * @type {ViewModelTransactionsEnumValuesActions}
	     * @inner
	     *
	     * @description
	     * Actions for updating the parts of the `ViewState` related to transactions enum values
	     */
	    transactionsEnumValues: (0, _transactionsEnumValues2.default)(stateContainer, hooks)
	  };
	};

/***/ }),
/* 92 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (params) {
	  return {
	    initialLoading: params.loadOnInit,
	    searching: false,
	    error: null,
	    paginationType: params.paginationType,
	    currencies: [],
	    transactions: {
	      rawData: null,
	      loading: false,
	      loadedAll: false,
	      total: 0,
	      from: 0,
	      size: params.pageSize,
	      today: '',
	      hasTodayTransactions: false
	    },
	    transaction: {
	      data: null
	    },
	    product: {
	      data: null
	    },
	    search: {
	      rawData: null,
	      loading: false,
	      loadedAll: false,
	      total: 0,
	      from: 0,
	      size: params.pageSize,
	      query: null,
	      bookingDateLessThan: null,
	      bookingDateGreaterThan: null,
	      amountGreaterThan: null,
	      amountLessThan: null,
	      creditDebitIndicator: null,
	      billingStatus: null,
	      category: null,
	      categories: null,
	      fromCheckSerialNumber: null,
	      toCheckSerialNumber: null
	    },
	    export: {
	      exportFailed: false
	    },
	    notifications: [],
	    sort: {
	      orderBy: params.orderBy,
	      direction: params.sortDirection
	    },
	    categories: {
	      data: null
	    },
	    transactionsEnumValues: {
	      data: null
	    }
	  };
	};
	
	/**
	 * @typedef {object} ViewState
	 * @description
	 * The current state of the [ViewModel]{@link module:lib-bb-view-model-ng}.
	 *
	 * @property {boolean} initialLoading Indicates whether widget's initial loading is done
	 * @property {boolean} searching Indicates whether transactions search is active at the moment
	 * @property {object} error The last encountered error
	 * @property {string} error.message Error message
	 * @property {string} paginationType Represents current pagination type. 'pagination' or 'load-more'
	 * @property {Array.<module:data-bb-payment-orders-ng.PaymentOrdersData.Currency>}
	 * currencies List of available currencies
	 * @property {object} transactions
	 * @property {object[]} transactions.rawData Collection of transactions
	 * @property {boolean} transactions.loading Indicates whether transactions are loading at the moment
	 * @property {boolean} transactions.loadedAll Indicates whether all transactions are loaded
	 * @property {number} transactions.total Total number of transactions
	 * @property {number} transactions.from The current page (0 indexed)
	 * @property {number} transactions.size The number of transactions in page
	 * @property {string} transactions.today Today date in the `yyyy-MM-dd` format
	 * @property {boolean} transactions.hasTodayTransactions Indicates whether transactions collection
	 * contains today transactions
	 *
	 * @property {object} transaction
	 * @property {boolean} transaction.data Current transaction object
	 *
	 * @property {object} product
	 * @property {boolean} product.data Current product object
	 *
	 * @property {object} search
	 * @property {object[]} search.rawData Collection of search transactions
	 * @property {boolean} search.loading Indicates whether search transactions are loading at the
	 * moment
	 * @property {boolean} search.loadedAll Indicates whether all search transactions are loaded
	 * @property {number} search.total Total number of search results
	 * @property {number} search.from The current page (0 indexed)
	 * @property {number} search.size The number of transactions in page
	 * @property {string} search.query Query search parameter
	 * @property {string} search.bookingDateLessThan Maximum booking date search parameter
	 * @property {string} search.bookingDateGreaterThan Minimum booking date search parameter
	 * @property {string} search.amountGreaterThan Minimum amount search parameter
	 * @property {string} search.amountLessThan Maximum amount search parameter
	 * @property {string} search.creditDebitIndicator Credit or debit search parameter
	 * @property {string} search.category Transaction category search parameter
	 * @property {string} search.categories Transaction categories search parameter
	 * @property {string} search.billingStatus Billing status search parameter
	 * @property {string} search.fromCheckSerialNumber Minimum check serial number search parameter
	 * @property {string} search.toCheckSerialNumber Maximum check serial number search parameter
	 *
	 * @property {object} export
	 * @property {boolean} export.exportFailed Indicates whether last transactions export failed
	 *
	 * @property {object[]} notifications Array of notifications to be displayed
	 *
	 * @property {object} sort
	 * @property {string} sort.orderBy Property by which transactions have to be ordered
	 * @property {direction} sort.direction Ordering direction
	 *
	 * @property {object} categories Categories by which transactions can be filtered
	 * @property {object} transactionsEnumValues Enum values by which transactions can be filtered
	 */

/***/ }),
/* 93 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name ViewModelInitActions
	 * @type {object}
	 * @inner
	 */
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelInitActions#afterLoadDone
	     * @type {function}
	     * @inner
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` after initial loading is done, successfully or unsuccessfully
	     */
	    afterLoadDone: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        initialLoading: false
	      });
	    })
	  };
	};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(95);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * @name ViewModelListActions
	 * @type {object}
	 * @inner
	 */
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelListActions#beforeLoad
	     * @type {function}
	     * @inner
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` before loading transactions
	     */
	    beforeLoad: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        error: null,
	        transactions: Object.assign({}, state.transactions, {
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterLoadSuccess
	     * @type {function}
	     * @inner
	     * @param {TransactionsResponse} response Transactions load response
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` after successfully loading transactions
	     */
	    afterLoadSuccess: stateContainer.createAction(function (state, response) {
	      return Object.assign({}, state, {
	        transactions: Object.assign({}, state.transactions, {
	          loading: false,
	          loadedAll: response.rawData.length < state.transactions.size,
	          rawData: state.paginationType === 'load-more' && !!response.requestParams.from ? [].concat(_toConsumableArray(state.transactions.rawData || []), _toConsumableArray(response.rawData)) : response.rawData,
	          total: response.totalCount,
	          from: response.requestParams.from
	        }),
	        sort: {
	          orderBy: response.requestParams.orderBy || null,
	          direction: response.requestParams.direction || null
	        }
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterLoadError
	     * @type {function}
	     * @inner
	     * @param {module:lib-bb-model-errors.ModelError} error Response error
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` after unsuccessful transactions load
	     */
	    afterLoadError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        error: (0, _helpers.uiError)(error),
	        transactions: Object.assign({}, state.transactions, {
	          loading: false
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#beforeTodayTransactionsLoad
	     * @type {function}
	     * @inner
	     * @param {string} today Today date in the `yyyy-MM-dd` format
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` before loading today transactions
	     */
	    beforeTodayTransactionsLoad: stateContainer.createAction(function (state, today) {
	      return Object.assign({}, state, {
	        transactions: Object.assign({}, state.transactions, {
	          today: today,
	          hasTodayTransactions: false
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterTodayTransactionsLoadSuccess
	     * @type {function}
	     * @inner
	     * @param {object[]} data Today transactions
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` after successfully loading today transactions
	     */
	    afterTodayTransactionsLoadSuccess: stateContainer.createAction(function (state, data) {
	      return Object.assign({}, state, {
	        transactions: Object.assign({}, state.transactions, {
	          hasTodayTransactions: (0, _helpers.hasTodayTransactions)(data, state.transactions.today)
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterTodayTransactionsLoadError
	     * @type {function}
	     * @inner
	     * @param {module:lib-bb-model-errors.ModelError} error Response error
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` after unsuccessful today transactions load
	     */
	    afterTodayTransactionsLoadError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        error: (0, _helpers.uiError)(error)
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterUpdateSuccess
	     * @type {function}
	     * @inner
	     * @param {object} item Updated transaction item
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` after successful transaction item update
	     */
	    afterUpdateSuccess: stateContainer.createAction(function (state, item) {
	      return Object.assign({}, state, {
	        transactions: Object.assign({}, state.transactions, {
	          rawData: state.transactions.rawData.map(function (data) {
	            return data.id === item.id ? item : data;
	          })
	        }),
	        notifications: [].concat(_toConsumableArray(state.notifications), [{
	          id: Date.now(),
	          message: 'notification.transaction.category.change.success',
	          level: 'success'
	        }])
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterUpdateError
	     * @type {function}
	     * @inner
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` after unsuccessful transaction item update
	     */
	    afterUpdateError: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        notifications: [].concat(_toConsumableArray(state.notifications), [{
	          id: Date.now(),
	          message: 'notification.transaction.category.change.fail',
	          level: 'danger'
	        }])
	      });
	    })
	  };
	};
	
	/**
	 * @typedef {object} TransactionsResponse
	 * @property {object[]} rawData Loaded transactions array
	 * @property {number} totalCount Total number of transactions
	 * @property {LoadRequestParams} requestParams Request parameters object
	 */
	
	/**
	 * @typedef {object} LoadRequestParams
	 * @property {number} from Page number to load
	 * @property {number} size Page size to load
	 * @property {string} productId Product ID of transactions to load
	 * @property {?string} orderBy Order transactions by property
	 * @property {?string} direction Transactions order direction
	 */

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hasTodayTransactions = exports.uiError = undefined;
	
	var _errorMessages;
	
	var _libBbModelErrors = __webpack_require__(71);
	
	var _modelBbTransactionsNg = __webpack_require__(86);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * @name ViewModelHelpers
	 * @type {object}
	 * @inner
	 *
	 * @description
	 * Helpers for widget-bb-transactions-ng
	 */
	
	/**
	 * @name ViewModelHelpers#errorMessages
	 * @type {object}
	 * @inner
	 *
	 * @description
	 * Map of error codes to message labels
	 */
	var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'model.error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'model.error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'model.error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'model.error.unexpected'), _defineProperty(_errorMessages, _modelBbTransactionsNg.BadRequestErrors.ERR_INVALID_ARR_ID, 'model.error.invalidArrId'), _defineProperty(_errorMessages, _modelBbTransactionsNg.BadRequestErrors.ERR_ARR_NOT_FOUND, 'model.error.arrNotFound'), _defineProperty(_errorMessages, _modelBbTransactionsNg.BadRequestErrors.ERR_INVALID_TRAN_BODY, 'model.error.invalidTranBody'), _defineProperty(_errorMessages, _modelBbTransactionsNg.BadRequestErrors.ERR_INVALID_TRAN_PARAMS, 'model.error.invalidTranParams'), _defineProperty(_errorMessages, _modelBbTransactionsNg.BadRequestErrors.ERR_TRAN_EXISTS, 'model.error.tranExists'), _defineProperty(_errorMessages, _modelBbTransactionsNg.BadRequestErrors.ERR_ARR_NO_PRIVILEGES, 'model.error.arrNoPrivileges'), _defineProperty(_errorMessages, _modelBbTransactionsNg.BadRequestErrors.ERR_INVALID_ACCESS_GROUP_BODY, 'model.error.invalidAccessGroupBody'), _defineProperty(_errorMessages, _modelBbTransactionsNg.BadRequestErrors.ERR_INVALID_USER_BODY, 'model.error.invalidUserBody'), _defineProperty(_errorMessages, _modelBbTransactionsNg.BadRequestErrors.ERR_USER_NOT_FOUND, 'model.error.userNotFound'), _defineProperty(_errorMessages, _modelBbTransactionsNg.BadRequestErrors.ERR_INVALID_PRIVILEGES_REQUESTED, 'model.error.invalidPrivilegesRequested'), _defineProperty(_errorMessages, _modelBbTransactionsNg.BadRequestErrors.ERR_INVALID_CHECK_SERIAL_NUMBER_VALUE, 'model.error.invalidCheckSerialNumberValue'), _errorMessages);
	
	/**
	 * @name ViewModelHelpers#uiError
	 * @type {function}
	 * @inner
	 * @param {module:lib-bb-model-errors.ModelError} modelError The ModelError
	 * @returns {object}
	 *
	 * @description
	 * Helper function to create an error object for a template.
	 */
	var uiError = exports.uiError = function uiError(modelError) {
	  if (modelError.code === _libBbModelErrors.E_USER && modelError.badRequestErrors && errorMessages[modelError.badRequestErrors[0].key]) {
	    return {
	      message: errorMessages[modelError.badRequestErrors[0].key],
	      context: modelError.badRequestErrors[0].context
	    };
	  }
	
	  return {
	    message: errorMessages[modelError.code]
	  };
	};
	
	/**
	 * @name ViewModelHelpers#isSameDay
	 * @type {function}
	 * @inner
	 * @param {string} date String representing the target day
	 * @returns {boolean}
	 *
	 * @description
	 * Helper function to iterate transaction collection and check for day in bookingDate field
	 */
	var isSameDay = function isSameDay(date) {
	  return function (transaction) {
	    return transaction.bookingDate === date;
	  };
	};
	
	/**
	 * @name ViewModelHelpers#hasTodayTransactions
	 * @type {function}
	 * @inner
	 * @param {object[]} transactions Array of transaction items
	 * @param {string} date String representing the target day
	 * @returns {boolean}
	 *
	 * @description
	 * Helper function to check if there are transactions for a specific date
	 */
	var hasTodayTransactions = exports.hasTodayTransactions = function hasTodayTransactions(transactions, date) {
	  return transactions.some(isSameDay(date));
	};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(95);
	
	/**
	 * @name ViewModelProductActions
	 * @type {object}
	 * @inner
	 */
	exports.default = function (stateContainer, hooks) {
	  return {
	    /**
	     * @name ViewModelProductActions#afterSelectProductSuccess
	     * @type {function}
	     * @inner
	     * @param {object|null} product New Product object
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` after new product selected
	     */
	    afterSelectProductSuccess: stateContainer.createAction(function (state, product) {
	      return Object.assign({}, state, {
	        error: null,
	        searching: false,
	        product: {
	          data: product ? hooks.processProductSelected(product) : null
	        },
	        currencies: [],
	        transactions: Object.assign({}, state.transactions, {
	          rawData: null,
	          loading: false,
	          loadedAll: false,
	          total: 0,
	          from: 0,
	          today: '',
	          hasTodayTransactions: false
	        }),
	        search: Object.assign({}, state.search, {
	          rawData: null,
	          loading: false,
	          loadedAll: false,
	          total: 0,
	          from: 0,
	          query: null,
	          bookingDateLessThan: null,
	          bookingDateGreaterThan: null,
	          amountGreaterThan: null,
	          amountLessThan: null,
	          creditDebitIndicator: null,
	          fromCheckSerialNumber: null,
	          toCheckSerialNumber: null
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelProductActions#afterSelectProductError
	     * @type {function}
	     * @inner
	     * @param {module:lib-bb-model-errors.ModelError} error Response error
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` after unsuccessful product selection
	     */
	    afterSelectProductError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        error: (0, _helpers.uiError)(error)
	      });
	    })
	  };
	};

/***/ }),
/* 97 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name ViewModelTransactionActions
	 * @type {object}
	 * @inner
	 */
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelTransactionActions#afterLoadSuccess
	     * @type {function}
	     * @inner
	     * @param {object} data Transaction object
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` after successful transaction load
	     */
	    afterLoadSuccess: stateContainer.createAction(function (state, data) {
	      return Object.assign({}, state, {
	        transaction: {
	          data: data
	        }
	      });
	    }),
	
	    /**
	     * @name ViewModelTransactionActions#beforeStore
	     * @type {function}
	     * @inner
	     * @param {object} data New transaction object
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` before new transaction will be stored
	     */
	    beforeStore: stateContainer.createAction(function (state, data) {
	      return Object.assign({}, state, {
	        transaction: {
	          data: data
	        }
	      });
	    })
	  };
	};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(95);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * @name ViewModelSearchActions
	 * @type {object}
	 * @inner
	 */
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelSearchActions#beforeSearch
	     * @type {function}
	     * @inner
	     * @param {SearchRequestParams} params Search request parameters
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` before search transactions
	     */
	    beforeSearch: stateContainer.createAction(function (state, params) {
	      return Object.assign({}, state, {
	        searching: true,
	        error: null,
	        search: Object.assign({}, state.search, {
	          loading: true,
	          query: params.query || null,
	          category: params.category || null,
	          categories: params.categories || null
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelSearchActions#afterSearchSuccess
	     * @type {function}
	     * @inner
	     * @param {TransactionsSearchResponse} response Search response
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` after successful transactions search
	     */
	    afterSearchSuccess: stateContainer.createAction(function (state, response) {
	      var query = response.requestParams.query || null;
	
	      if (!state.searching || state.search.query !== query) {
	        return state;
	      }
	
	      return Object.assign({}, state, {
	        search: Object.assign({}, state.search, {
	          loading: false,
	          loadedAll: response.rawData.length < state.search.size,
	          rawData: state.paginationType === 'load-more' && !!response.requestParams.from ? [].concat(_toConsumableArray(state.search.rawData || []), _toConsumableArray(response.rawData)) : response.rawData,
	          total: response.totalCount,
	          from: response.requestParams.from,
	          bookingDateLessThan: response.requestParams.bookingDateLessThan || null,
	          bookingDateGreaterThan: response.requestParams.bookingDateGreaterThan || null,
	          amountGreaterThan: response.requestParams.amountGreaterThan || null,
	          amountLessThan: response.requestParams.amountLessThan || null,
	          creditDebitIndicator: response.requestParams.creditDebitIndicator || null,
	          billingStatus: response.requestParams.billingStatus || null,
	          fromCheckSerialNumber: response.requestParams.fromCheckSerialNumber || null,
	          toCheckSerialNumber: response.requestParams.toCheckSerialNumber || null
	        }),
	        sort: {
	          orderBy: response.requestParams.orderBy || null,
	          direction: response.requestParams.direction || null
	        }
	      });
	    }),
	
	    /**
	     * @name ViewModelSearchActions#afterSearchError
	     * @type {function}
	     * @inner
	     * @param {module:lib-bb-model-errors.ModelError} error Response error
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` after unsuccessful transactions search
	     */
	    afterSearchError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        error: (0, _helpers.uiError)(error),
	        search: Object.assign({}, state.search, {
	          loading: false
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelSearchActions#cancel
	     * @type {function}
	     * @inner
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` when transactions search canceled
	     */
	    cancel: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        error: null,
	        searching: false,
	        search: Object.assign({}, state.search, {
	          rawData: null,
	          loading: false,
	          loadedAll: false,
	          total: 0,
	          from: 0,
	          query: null,
	          bookingDateLessThan: null,
	          bookingDateGreaterThan: null,
	          amountGreaterThan: null,
	          amountLessThan: null,
	          creditDebitIndicator: null,
	          billingStatus: null,
	          category: null,
	          categories: null,
	          fromCheckSerialNumber: null,
	          toCheckSerialNumber: null
	        })
	      });
	    })
	  };
	};
	
	/**
	 * @typedef {object} TransactionsSearchResponse
	 * @property {object[]} rawData Search transactions array
	 * @property {number} totalCount Total number of found transactions
	 * @property {SearchRequestParams} requestParams Request parameters object
	 */
	
	/**
	 * @typedef {object} SearchRequestParams
	 * @property {number} from Page number to load
	 * @property {number} size Page size to load
	 * @property {string} productId Product ID of transactions to load
	 * @property {?string} orderBy Order transactions by property
	 * @property {?string} direction Transactions order direction
	 * @property {?string} query Query search parameter
	 * @property {?string} bookingDateLessThan Maximum booking date search parameter
	 * @property {?string} bookingDateGreaterThan Minimum booking date search parameter
	 * @property {?string} amountGreaterThan Minimum amount search parameter
	 * @property {?string} amountLessThan Maximum amount search parameter
	 * @property {?string} creditDebitIndicator Credit or debit search parameter
	 * @property {?string} billingStatus Billing status search parameter
	 * @property {?string} category Transaction category search parameter
	 * @property {?string} categories Transaction categories search parameter
	 * @property {?string} fromCheckSerialNumber Minimum check serial number search parameter
	 * @property {?string} toCheckSerialNumber Maximum check serial number search parameter
	 */

/***/ }),
/* 99 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name ViewModelExportActions
	 * @type {object}
	 * @inner
	 */
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelExportActions#beforeExport
	     * @type {function}
	     * @inner
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` before transactions export
	     */
	    beforeExport: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        export: {
	          exportFailed: false
	        }
	      });
	    }),
	
	    /**
	     * @name ViewModelExportActions#afterExportError
	     * @type {function}
	     * @inner
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` after failed transactions export
	     */
	    afterExportError: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        export: {
	          exportFailed: true
	        }
	      });
	    })
	  };
	};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(95);
	
	/**
	 * @name ViewModelCurrenciesActions
	 * @type {object}
	 * @inner
	 */
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelCurrenciesActions#beforeLoad
	     * @type {function}
	     * @inner
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` before loading currencies
	     */
	    beforeLoad: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        error: null,
	        currencies: Object.assign({}, state.currencies, {
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelCurrenciesActions#afterLoadSuccess
	     * @type {function}
	     * @inner
	     * @param {array.<module:data-bb-payment-orders-ng.PaymentOrdersData.Currency>} data
	     * Currencies array
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` after successful currencies load
	     */
	    afterLoadSuccess: stateContainer.createAction(function (state, data) {
	      return Object.assign({}, state, {
	        currencies: {
	          loading: false,
	          data: data
	        }
	      });
	    }),
	
	    /**
	     * @name ViewModelCurrenciesActions#afterLoadError
	     * @type {function}
	     * @inner
	     * @param {module:lib-bb-model-errors.ModelError} error Response error
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` after unsuccessful currencies load
	     */
	    afterLoadError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        error: (0, _helpers.uiError)(error),
	        currencies: {
	          data: [],
	          loading: false
	        }
	      });
	    })
	  };
	};

/***/ }),
/* 101 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name ViewModelNotificationActions
	 * @type {object}
	 * @inner
	 */
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelNotificationActions#removeNotification
	     * @type {function}
	     * @inner
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` after removing notification
	     */
	    removeNotification: stateContainer.createAction(function (state, payload) {
	      return Object.assign({}, state, {
	        notifications: state.notifications.filter(function (item) {
	          return item.id !== payload;
	        })
	      });
	    })
	  };
	};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(95);
	
	/**
	 * @name ViewModelCategoriesActions
	 * @type {object}
	 * @inner
	 */
	exports.default = function (stateContainer, hooks) {
	  return {
	    /**
	     * @name ViewModelCategoriesActions#beforeLoad
	     * @type {function}
	     * @inner
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` before loading categories
	     */
	    beforeLoad: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        error: null,
	        categories: Object.assign({}, state.categories, {
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelCategoriesActions#afterLoadSuccess
	     * @type {function}
	     * @inner
	     * @param {Array.<module:data-bb-categories-management-http-ng.CategoriesManagement.Category>}
	     * data Categories array
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` after successful categories load
	     */
	    afterLoadSuccess: stateContainer.createAction(function (state, data) {
	      return Object.assign({}, state, {
	        categories: {
	          data: data.length ? hooks.processCategories(data) : null,
	          loading: false
	        }
	      });
	    }),
	
	    /**
	     * @name ViewModelCategoriesActions#afterLoadError
	     * @type {function}
	     * @inner
	     * @param {module:lib-bb-model-errors.ModelError} error Response error
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` after unsuccessful categories load
	     */
	    afterLoadError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        error: (0, _helpers.uiError)(error),
	        categories: {
	          data: null,
	          loading: false
	        }
	      });
	    })
	  };
	};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(95);
	
	/**
	 * @name ViewModelTransactionsEnumValuesActions
	 * @type {object}
	 * @inner
	 */
	exports.default = function (stateContainer, hooks) {
	  return {
	    /**
	     * @name ViewModelTransactionsEnumValuesActions#beforeLoad
	     * @type {function}
	     * @inner
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` before loading transactions enum values
	     */
	    beforeLoad: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        error: null,
	        transactionsEnumValues: Object.assign({}, state.transactionsEnumValues, {
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelTransactionsEnumValuesActions#afterLoadSuccess
	     * @type {function}
	     * @inner
	     * @param {Array.<module:data-bb-transactions-http-ng.TransactionsData.DefaultValueGetResponse>}
	     * data Transactions enum values array
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` after successful transactions enum values load
	     */
	    afterLoadSuccess: stateContainer.createAction(function (state, data) {
	      return Object.assign({}, state, {
	        transactionsEnumValues: {
	          data: Object.assign({}, state.transactionsEnumValues.data, hooks.processTransactionsEnumValues(data)),
	          loading: false
	        }
	      });
	    }),
	
	    /**
	     * @name ViewModelTransactionsEnumValuesActions#afterLoadError
	     * @type {function}
	     * @inner
	     * @param {module:lib-bb-model-errors.ModelError} error Response error
	     * @returns {void}
	     *
	     * @description
	     * Update the `ViewState` after unsuccessful transactions enum values load
	     */
	    afterLoadError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        error: (0, _helpers.uiError)(error),
	        transactionsEnumValues: {
	          data: null,
	          loading: false
	        }
	      });
	    })
	  };
	};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(89);
	
	/**
	 * @name TransactionsService
	 * @type {object}
	 * @ngkey widget-bb-transactions-ng:service
	 *
	 * @description
	 * The service encapsulates the core functionality of the Transactions Widget. It co-ordinates the
	 * communication of data from the `Model` with the communication with the user by updating the
	 * {@link ViewState}.
	 *
	 * Asynchronous methods update the {@link ViewState} in 3 potential stages; "before", "success", and
	 * "error", to allow the view to provide feedback to the user.
	 */
	
	/**
	 * @name padded
	 * @type {function}
	 * @inner
	 * @param {number} num Number to add padding
	 * @returns {string} Padded number as a string
	 *
	 * @description
	 * Adds leading zero to number values less than 10
	 */
	var padded = function padded(num) {
	  return num > 9 ? String(num) : '0' + num;
	};
	
	/**
	 * @name formatDate
	 * @type {function}
	 * @inner
	 * @param {object} date Date to format
	 * @returns {string} Formatted date string
	 *
	 * @description Formats date to yyyy-MM-dd format
	 */
	/* global window */
	var formatDate = function formatDate(date) {
	  return date.getFullYear() + '-' + padded(date.getMonth() + 1) + '-' + padded(date.getDate());
	};
	
	/**
	 * @name createTransactionsService
	 * @type {function}
	 * @inner
	 * @param {module:model-bb-transactions-ng.transactionsModel} model Transactions model
	 * @param {ViewModel} viewModel
	 * @param {object} $window
	 * @returns {TransactionsService}
	 */
	
	exports.default = function (model, viewModel, $window) {
	  return {
	    /**
	     * @name TransactionsService#load
	     * @type {function}
	     * @param {LoadRequestParams} params Request params
	     * @returns {Promise.<void>}
	     *
	     * @description
	     * Fetch a `page` of `transactions` from the model and update the {@link ViewState} to display
	     * them.
	     */
	    load: function load(params) {
	      viewModel.list.beforeLoad();
	
	      return model.load(params).then(function (raw) {
	        viewModel.list.afterLoadSuccess({
	          rawData: raw.data,
	          totalCount: raw.totalCount,
	          requestParams: params
	        });
	      }).catch(function (error) {
	        viewModel.list.afterLoadError(error);
	        throw error;
	      });
	    },
	
	    /**
	     * @name TransactionsService#search
	     * @type {function}
	     * @param {SearchRequestParams} params Request params
	     * @returns {Promise.<void>}
	     *
	     * @description
	     * Fetch a `page` of `transactions` search results from the model and update the {@link ViewState}
	     * to display them.
	     */
	    search: function search(params) {
	      viewModel.search.beforeSearch({
	        query: params.query,
	        category: params.category,
	        categories: params.categories
	      });
	
	      return model.load(params).then(function (raw) {
	        viewModel.search.afterSearchSuccess({
	          rawData: raw.data,
	          totalCount: raw.totalCount,
	          requestParams: params
	        });
	      }).catch(function (error) {
	        viewModel.search.afterSearchError(error);
	        throw error;
	      });
	    },
	
	    /**
	     * @name TransactionsService#export
	     * @type {function}
	     * @param {ExportRequestParams} params Request params
	     * @param {string} format Export format
	     * @returns {Promise.<void>}
	     *
	     * @description
	     * Download transactions, which satisfy request parameter conditions, in specified format
	     */
	    export: function _export(params, format) {
	      viewModel.export.beforeExport();
	
	      var uri = model.getExportFileResource(params, format);
	      $window.location.assign(uri);
	    },
	
	    /**
	     * @name TransactionsService#checkTodayTransactions
	     * @type {function}
	     * @returns {void}
	     *
	     * @description
	     * Fetch one transaction with today's date and update `ViewState` to indicate whether a
	     * transaction for today is present.
	     */
	    checkTodayTransactions: function checkTodayTransactions() {
	      var today = formatDate(new Date());
	      viewModel.list.beforeTodayTransactionsLoad(today);
	    },
	
	    /**
	     * @name TransactionsService#setupSelectedProduct
	     * @type {function}
	     * @param {boolean} isDefaultProductFirst Indicates whether default product should be returned
	     * first
	     * @returns {Promise.<void>}
	     *
	     * @description
	     * Fetch selected product and update `ViewState`.
	     */
	    setupSelectedProduct: function setupSelectedProduct(isDefaultProductFirst) {
	      return model.getSelectedProduct(isDefaultProductFirst).then(function (selectedProduct) {
	        viewModel.product.afterSelectProductSuccess(selectedProduct);
	      }).catch(function (error) {
	        viewModel.product.afterSelectProductError(error);
	        throw error;
	      });
	    },
	
	    /**
	     * @name TransactionsService#loadCurrentTransaction
	     * @type {function}
	     * @returns {Promise.<void>}
	     *
	     * @description
	     * Fetch selected transaction and update `ViewState`.
	     */
	    loadCurrentTransaction: function loadCurrentTransaction() {
	      return model.getCurrentTransaction().then(function (data) {
	        return viewModel.transaction.afterLoadSuccess(data);
	      });
	    },
	
	    /**
	     * @name TransactionsService#updateTransactionCategory
	     * @type {function}
	     * @param {object} data Object with transactionId, arrangementId and categoryName properties
	     * @returns {Promise.<boolean, object>} True if the update was successful, error object otherwise
	     *
	     * @description
	     * Updates transaction's category and `ViewState`.
	     */
	    updateTransactionCategory: function updateTransactionCategory(data) {
	      return model.updateTransactionCategory(data.transactionId, data.arrangementId, data.categoryName);
	    },
	
	    /**
	     * @name TransactionsService#storeCurrentTransaction
	     * @type {function}
	     * @param {object} transaction Currently selected transaction
	     * @returns {void}
	     *
	     * @description
	     * Stores currently selected transaction and updates `ViewState`.
	     */
	    storeCurrentTransaction: function storeCurrentTransaction(transaction) {
	      viewModel.transaction.beforeStore(transaction);
	      model.storeTransactionAsCurrent(transaction);
	    },
	
	    /**
	     * @name TransactionsService#getCurrencies
	     * @type {function}
	     * @returns {Array.<module:data-bb-payment-orders-ng.PaymentOrdersData.Currency>} Currencies array
	     *
	     * @description
	     * Request currencies list.
	     */
	    getCurrencies: function getCurrencies() {
	      return model.getCurrencies().then(function (currencies) {
	        viewModel.currencies.afterLoadSuccess(currencies);
	      }).catch(function (error) {
	        viewModel.currencies.afterLoadError(error);
	        throw error;
	      });
	    },
	
	    /**
	     * @name TransactionsService#getCategories
	     * @type {function}
	     * @returns {Array.<module:data-bb-categories-management-http-ng.CategoriesManagement.Category>}
	     * categories array
	     *
	     * @description
	     * Request categories list.
	     */
	    getCategories: function getCategories() {
	      return model.getCategories().then(function (categories) {
	        viewModel.categories.afterLoadSuccess(categories);
	      }).catch(function (error) {
	        viewModel.categories.afterLoadError(error);
	        throw error;
	      });
	    },
	
	    /**
	     * @name TransactionsService#getTransactionsEnumValues
	     * @type {function}
	     * @returns {Array.<module:data-bb-transactions-http-ng.TransactionsData.DefaultValueGetResponse>}
	     * transactions enum values array
	     *
	     * @description
	     * Request transactions enum values.
	     */
	    getTransactionsEnumValues: function getTransactionsEnumValues() {
	      return model.getTransactionsEnumValues(_constants.DefaultGetTransactionsEnumValuesParams).then(function (transactionsEnumValues) {
	        viewModel.transactionsEnumValues.afterLoadSuccess({
	          billingStatus: transactionsEnumValues
	        });
	      }).catch(function (error) {
	        viewModel.transactionsEnumValues.afterLoadError(error);
	        throw error;
	      });
	    }
	  };
	};
	
	/**
	 * @typedef {object} ExportRequestParams
	 * @property {string} exportFormat Export format
	 * @property {string} productId Product ID of transactions to load
	 * @property {?string} query Query search parameter
	 * @property {?string} bookingDateLessThan Maximum booking date search parameter
	 * @property {?string} bookingDateGreaterThan Minimum booking date search parameter
	 * @property {?string} amountGreaterThan Minimum amount search parameter
	 * @property {?string} amountLessThan Maximum amount search parameter
	 * @property {?string} creditDebitIndicator Credit or debit search parameter
	 * @property {?string} billingStatus Billing status search parameter
	 */

/***/ })
/******/ ])
});
;
//# sourceMappingURL=widget-bb-transactions-ng.js.map