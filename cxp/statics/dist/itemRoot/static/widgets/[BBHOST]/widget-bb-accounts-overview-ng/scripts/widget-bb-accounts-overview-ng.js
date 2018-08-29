(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("lib-bb-extension-helpers-ng"), require("model-bb-product-summary-ng"), require("lib-bb-intent-ng"), require("lib-bb-permissions-ng"), require("lib-bb-event-bus-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-accounts-overview-ng", ["vendor-bb-angular", "lib-bb-model-errors", "lib-bb-widget-extension-ng", "lib-bb-extension-helpers-ng", "model-bb-product-summary-ng", "lib-bb-intent-ng", "lib-bb-permissions-ng", "lib-bb-event-bus-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-accounts-overview-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("lib-bb-extension-helpers-ng"), require("model-bb-product-summary-ng"), require("lib-bb-intent-ng"), require("lib-bb-permissions-ng"), require("lib-bb-event-bus-ng"));
	else
		root["widget-bb-accounts-overview-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-model-errors"], root["lib-bb-widget-extension-ng"], root["lib-bb-extension-helpers-ng"], root["model-bb-product-summary-ng"], root["lib-bb-intent-ng"], root["lib-bb-permissions-ng"], root["lib-bb-event-bus-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_99__, __WEBPACK_EXTERNAL_MODULE_105__, __WEBPACK_EXTERNAL_MODULE_119__, __WEBPACK_EXTERNAL_MODULE_120__, __WEBPACK_EXTERNAL_MODULE_121__, __WEBPACK_EXTERNAL_MODULE_122__, __WEBPACK_EXTERNAL_MODULE_123__, __WEBPACK_EXTERNAL_MODULE_124__) {
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

	module.exports = __webpack_require__(118);

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_99__;

/***/ }),

/***/ 105:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_105__;

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(99);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(119);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbExtensionHelpersNg = __webpack_require__(120);
	
	var _libBbExtensionHelpersNg2 = _interopRequireDefault(_libBbExtensionHelpersNg);
	
	var _modelBbProductSummaryNg = __webpack_require__(121);
	
	var _modelBbProductSummaryNg2 = _interopRequireDefault(_modelBbProductSummaryNg);
	
	var _libBbIntentNg = __webpack_require__(122);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbPermissionsNg = __webpack_require__(123);
	
	var _libBbPermissionsNg2 = _interopRequireDefault(_libBbPermissionsNg);
	
	var _libBbEventBusNg = __webpack_require__(124);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _controller = __webpack_require__(125);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(128);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var hooksKey = 'widget-bb-accounts-overview-ng:hooks'; /**
	                                                        * @module widget-bb-accounts-overview-ng
	                                                        *
	                                                        * @description
	                                                        * Accounts overview widget.
	                                                        *
	                                                        * @example
	                                                        * <div ng-controller="AccountsOverviewController as $ctrl">
	                                                        *    <table>
	                                                        *      <thead>
	                                                        *        <tr>
	                                                        *          <th i18n-key="accounts.header.name"></th>
	                                                        *          <th i18n-key="accounts.header.number"></th>
	                                                        *          <th i18n-key="accounts.header.bic"></th>
	                                                        *          <th i18n-key="accounts.header.type"></th>
	                                                        *          <th i18n-key="accounts.header.currency"></th>
	                                                        *          <th i18n-key="accounts.header.bookedBalance"></th>
	                                                        *          <th i18n-key="accounts.header.availableBalance"></th>
	                                                        *        </tr>
	                                                        *      </thead>
	                                                        *      <tbody>
	                                                        *        <tr ng-repeat="account in $ctrl.state.accounts.data track by account.id">
	                                                        *          <td i18n-key="{{ account.name }}"></td>
	                                                        *          <td ng-bind="{{ account.IBAN || account.BBAN || account.product.Number }}"></td>
	                                                        *          <td i18n-key="{{ account.BIC }}"></td>
	                                                        *          <td i18n-key="{{ account.productKindName }}"></td>
	                                                        *          <td i18n-key="{{ account.currency }}"></td>
	                                                        *          <td i18n-key="{{ account.bookedBalance }}"></td>
	                                                        *          <td i18n-key="{{ account.availableBalance }}"></td>
	                                                        *        </tr>
	                                                        *      </tbody>
	                                                        *    </table>
	                                                        * </div>
	                                                        */
	
	exports.default = _vendorBbAngular2.default.module('widget-bb-accounts-overview-ng', [_modelBbProductSummaryNg2.default, _libBbEventBusNg2.default, _libBbIntentNg2.default, _libBbPermissionsNg2.default, _libBbExtensionHelpersNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).config([_libBbPermissionsNg.bbPermissionsKey + 'Provider', function (permissionsProvider) {
	  permissionsProvider.enableDownloadOnInit(true);
	  permissionsProvider.setCacheEnabled(false);
	}]).factory(_libBbExtensionHelpersNg.extensionHelpersContextKey, [_libBbEventBusNg.eventBusKey, function (bus) {
	  return { bus: bus };
	}]).controller('AccountsOverviewController', [_modelBbProductSummaryNg.modelProductSummaryKey, hooksKey, _libBbEventBusNg.eventBusKey, _libBbIntentNg.bbIntentKey, _libBbPermissionsNg.bbPermissionsKey,
	/* into */
	_controller2.default]).run([_libBbIntentNg.bbIntentKey, function (bbIntent) {
	  bbIntent.init();
	}]).name;

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_119__;

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_120__;

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_121__;

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_122__;

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_123__;

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_124__;

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _errorMessages;
	
	exports.default = AccountsOverviewController;
	
	var _libBbModelErrors = __webpack_require__(105);
	
	var _constants = __webpack_require__(126);
	
	var _message = __webpack_require__(127);
	
	var _message2 = _interopRequireDefault(_message);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'model.error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'model.error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'model.error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'model.error.unexpected'), _errorMessages);
	
	var uiError = function uiError(messageMap, modelError) {
	  return {
	    message: messageMap[modelError.code]
	  };
	};
	
	/**
	 * @name AccountsOverviewController
	 * @type {Object}
	 *
	 * @description
	 * Accounts overview widget
	 *
	 * @usage
	 * <div ng-controller="AccountsOverviewController as $ctrl">
	 *   <!-- ... -->
	 * </div>
	 */
	function AccountsOverviewController(model, hooks, eventBus, bbIntents, permissions) {
	  var $ctrl = this;
	  var viewTransactions = bbIntents.create(_constants.Intent.TRANSACTION_LIST);
	  var createPayment = bbIntents.create(_constants.Intent.CREATE_PAYMENT);
	  var viewAccountDetails = bbIntents.create(_constants.Intent.ACCOUNT_DETAILS);
	  var preferences = model.getAccountsOverviewPreferences();
	  var pageSize = preferences.pageSize || _constants.DefaultPreference.PAGE_SIZE;
	  var maxNavPages = preferences.maxNavPages || _constants.DefaultPreference.MAX_NAV_PAGES;
	  var paginationType = preferences.paginationType || _constants.DefaultPreference.PAGINATION_TYPE;
	  var defaultSortableColumn = preferences.sortableColumn || _constants.DefaultPreference.SORTABLE_COLUMN;
	  var defaultBusinessFunction = preferences.businessFunction || _constants.Context.BUSINESS_FUNCTION;
	  var defaultPrivilege = preferences.privilege || _constants.Context.PRIVILEGE;
	  var defaultResourceName = preferences.resourceName || _constants.Context.RESOURCE;
	  var defaultSortableDirection = preferences.sortableDirection || _constants.DefaultPreference.SORTABLE_DIRECTION;
	  var dismissMessageTime = Math.abs(preferences.dismissMessageTime) || _constants.DefaultPreference.DISMISS_MESSAGE_TIME;
	
	  var accounts = {
	    rawItems: [],
	    params: {
	      from: 0,
	      size: pageSize,
	      orderBy: defaultSortableColumn,
	      direction: defaultSortableDirection,
	      searchTerm: '',
	      businessFunction: defaultBusinessFunction,
	      privilege: defaultPrivilege,
	      resourceName: defaultResourceName
	    }
	  };
	
	  /**
	   * @description
	   * balance History Params
	   * @name balanceHistoryParams
	   * @type {object}
	   */
	  var balanceHistoryParams = {
	    dateFrom: null,
	    dateTo: null,
	    timePeriod: 'lastWeek'
	  };
	
	  /**
	   * If account type is specified in widget properties - add it to the query parameters
	   */
	  if (preferences.productKindName) {
	    accounts.params.productKindName = preferences.productKindName;
	  }
	
	  var state = {
	    accounts: {
	      data: [],
	      get orderBy() {
	        return accounts.params.orderBy;
	      },
	      get direction() {
	        return accounts.params.direction;
	      },
	      get hasMore() {
	        return state.accounts.data.length < state.accounts.totalItems;
	      },
	
	      get currentPage() {
	        return accounts.params.from + 1;
	      },
	      get pageSize() {
	        return accounts.params.size;
	      },
	      totalItems: 0,
	
	      get searchQuery() {
	        return accounts.params.searchTerm;
	      },
	      set searchQuery(newValue) {
	        accounts.params.searchTerm = newValue;
	      },
	
	      lastSearchQuery: null,
	
	      maxNavPages: maxNavPages,
	      paginationType: paginationType,
	
	      selected: null,
	      loading: false,
	      error: null,
	      loadingDetails: false,
	      errorDetails: null,
	      searching: false,
	      balanceHistory: [],
	      balanceHistorySeries: [],
	      errorBalanceHistory: null
	    },
	    initialLoading: true,
	    initialError: null,
	    chartsEnabled: preferences.chartsEnabled,
	    accountsSelectorSelectAll: preferences.accountsSelectorSelectAll,
	    balanceHistoryLoadingindicator: true
	  };
	
	  /**
	   * @description
	   * Returns balance history records for selected account
	   * @name getBalanceHistory
	   * @type {function}
	   * @param {array} accounts All accounts
	   * @return {array}
	   */
	  var getBalanceHistory = function getBalanceHistory() {
	    return state.accounts.balanceHistory.find(function (f) {
	      return f.arrangementId === state.accounts.selected.id;
	    }).balanceHistory;
	  };
	
	  /**
	   * @type {null|Promise.<loadResponse, module:lib-bb-model-errors.ModelError>} loadMorePromise
	   */
	  var loadMorePromise = null;
	
	  /**
	   * Merges new accounts with existing accounts
	   *
	   * @inner
	   * @name AccountsOverviewController#append
	   * @type {Function}
	   * @returns {Array} merged array of old and new accounts
	   */
	  var append = function append(newItems, existingItems) {
	    return [].concat(_toConsumableArray(existingItems), _toConsumableArray(newItems));
	  };
	
	  /**
	   * Replaces existing accounts with new accounts
	   *
	   * @inner
	   * @name AccountsOverviewController#replace
	   * @type {Function}
	   * @returns {Array} new accounts
	   */
	  var replace = function replace(items) {
	    return items;
	  };
	
	  /**
	   * @description
	   * Normalize date to required format.
	   *
	   * @inner
	   * @name AccountsOverviewController#getNormalizedDate
	   * @type {function}
	   * @returns {String|null} Date string or null
	   */
	  var getNormalizedDate = function getNormalizedDate(date) {
	    if (date === null || date === undefined) {
	      return null;
	    }
	    var userOffset = date.getTimezoneOffset() * 60000;
	    return new Date(date - userOffset).toISOString().slice(0, -5) + 'Z';
	  };
	
	  /**
	   * @name AccountsOverviewController#loadHistoryBalance
	   * @type {Function}
	   *
	   * @param {string[]} arrangementsId Ids of the requested arrangements
	   * @param {?object} balanceHistoryFilter - optional configuration object
	   * @returns {Promise.<module:model-bb-product-summary-ng.BalanceHistory, ModelError>}
	   * Balance history data for given arrengements ids
	   *
	   */
	  var loadHistoryBalance = function loadHistoryBalance(arrangementsId, balanceHistoryFilter) {
	    state.balanceHistoryLoadingindicator = true;
	    state.accounts.errorBalanceHistory = null;
	    Object.assign(balanceHistoryParams, {
	      dateFrom: getNormalizedDate(balanceHistoryFilter.startDate),
	      dateTo: getNormalizedDate(balanceHistoryFilter.endDate),
	      timePeriod: balanceHistoryFilter.timePeriod
	    });
	
	    return model.getBalanceHistory(arrangementsId, balanceHistoryParams).then(function (balanceHistory) {
	      state.accounts.balanceHistory = hooks.processBalanceHistoryData(balanceHistory.items);
	      state.accounts.balanceHistorySeries = hooks.processBalanceHistorySeries(model.transformToSeries(balanceHistory));
	      state.balanceHistoryLoadingindicator = false;
	    }).catch(function (error) {
	      state.accounts.errorBalanceHistory = {
	        messages: _message2.default.dataBalanceHistoryErrorMessage(error)
	      };
	      state.balanceHistoryLoadingindicator = false;
	      state.accounts.balanceHistory = [];
	      throw error;
	    });
	  };
	
	  /**
	   * @name AccountsOverviewController#load
	   * @type {Function}
	   * @inner
	   *
	   * @description
	   * Get accounts.
	   *
	   * @returns {null|Promise.<loadResponse, module:lib-bb-model-errors.ModelError>} A Promise with
	   * loaded accounts or null if loading is in process
	   */
	  var load = function load() {
	    var merge = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : append;
	    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    var requestParams = Object.assign({}, accounts.params, params);
	    state.accounts.error = null;
	    state.accounts.loading = true;
	
	    return model.loadContextArrangements(requestParams).then(function (raw) {
	      accounts.rawItems = merge(raw.data, accounts.rawItems);
	      state.accounts.totalItems = raw.totalCount;
	
	      return accounts.rawItems;
	    }).then(hooks.processAccounts).then(function (processedAccounts) {
	      state.accounts.data = processedAccounts;
	      state.accounts.loading = false;
	    }).then(function () {
	      if (preferences.chartsEnabled) {
	        loadHistoryBalance(state.accounts.data.map(function (account) {
	          return account.id;
	        }), balanceHistoryParams);
	      }
	    }).catch(function (error) {
	      state.accounts.loading = false;
	      state.accounts.error = uiError(errorMessages, error);
	
	      throw error;
	    });
	  };
	
	  /**
	   * @name AccountsOverviewController#loadAccountDetails
	   * @type {Function}
	   * @description Loads the details of a specific account
	   *
	   * @param  {Object} item Account to load details of
	   * @returns {Promise.<module:model-bb-product-summary-ng.ProductDetails, ModelError>}
	   */
	  var loadAccountDetails = function loadAccountDetails(item) {
	    state.accounts.loadingDetails = true;
	    state.accounts.errorDetails = null;
	    return model.getProductDetails(item.id).then(function (details) {
	      state.accounts.loadingDetails = false;
	      Object.assign(item, details);
	    }).catch(function (error) {
	      state.accounts.loadingDetails = false;
	      state.accounts.errorDetails = uiError(errorMessages, error);
	    });
	  };
	
	  /**
	   * @description
	   * Sets the alternate workflow when a user selects a Account from the overview.
	   *
	   * @name AccountsOverviewController#selectAccount
	   * @type {Function}
	   * @param {Object} product Selected account
	   * @fires bb.event.product.selected
	   */
	  var selectAccount = function selectAccount(product) {
	    model.setProductSelected(product);
	    eventBus.publish(_constants.Event.PRODUCT_SELECTED, { product: product });
	    // TODO: Remove this deprecated method when component version will be bumped to v2.0.0
	    eventBus.publish(_constants.Event.ACCOUNT_SELECTED, { product: product });
	    eventBus.publish(_constants.CXP_EVENTS.ON_PANEL_LOAD_HISTORY);
	    eventBus.publish(_constants.CXP_EVENTS.ON_PANEL_LOAD_DETAILS);
	  };
	
	  /**
	   * Handles account select
	   */
	  function updateAccountSelected() {
	    model.getProductSelected(false).then(function (product) {
	      state.accounts.selected = product ? hooks.processSelectedAccount(product) : null;
	    });
	  }
	
	  /**
	   * @name AccountsOverviewController#navigateToTransaction
	   *
	   * @description
	   * Navigate to transaction
	   *
	   * @type {Function}
	   * @param {Object} account Account to select.
	   */
	  var navigateToTransaction = function navigateToTransaction(account) {
	    if ($ctrl.permissions.Transactions.Transactions.view) {
	      selectAccount(account);
	      viewTransactions();
	    }
	  };
	
	  /**
	   * @name AccountsOverviewController#navigateToCreatePayment
	   *
	   * @description
	   * Navigate to create payment
	   *
	   * @type {Function}
	   * @param {Object} account Account to select.
	   */
	  var navigateToCreatePayment = function navigateToCreatePayment(account) {
	    if ($ctrl.permissions.Payments['SEPA CT'].create) {
	      selectAccount(account);
	      createPayment();
	    }
	  };
	
	  /**
	   * @name AccountsOverviewController#navigateToAccountDetails
	   *
	   * @description
	   * Navigate to account details
	   *
	   * @type {Function}
	   * @param {Object} account Account to select.
	   */
	  var navigateToAccountDetails = function navigateToAccountDetails(account) {
	    selectAccount(account);
	    loadAccountDetails(account);
	    viewAccountDetails();
	  };
	
	  /**
	   * Adds subscriptions to bus events
	   */
	  function bindEvents() {
	    eventBus.subscribe(_constants.Event.PRODUCT_SELECTED, updateAccountSelected);
	    // TODO: Remove this deprecated method when component version will be bumped to v2.0.0
	    eventBus.subscribe(_constants.Event.ACCOUNT_SELECTED, updateAccountSelected);
	  }
	
	  /**
	   * @name AccountsOverviewController#loadMore
	   *
	   * @description
	   * Loads more payments if they are available.
	   *
	   * @type {Function}
	   * @param {Function} done Callback to stop loading
	   * @returns {null|Promise.<loadResponse, module:lib-bb-model-errors.ModelError>} A Promise with
	   * loaded accounts or null if loading is in process
	   */
	  var loadMore = function loadMore() {
	    var done = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
	
	    if (state.accounts.loading) {
	      return loadMorePromise;
	    }
	
	    accounts.params.from++;
	
	    loadMorePromise = load(append).then(function () {
	      loadMorePromise = null;
	      done();
	    }).catch(function () {
	      loadMorePromise = null;
	      accounts.params.from--;
	      done();
	    });
	
	    return loadMorePromise;
	  };
	
	  /**
	   * @description
	   * Check if there are accounts loaded
	   *
	   * @name  AccountsOverviewController#hasAccounts
	   * @type {Function}
	   * @returns {Boolean} True if there is at least one account loaded, false otherwise
	   */
	  var hasAccounts = function hasAccounts() {
	    return !!state.accounts.data.length;
	  };
	
	  /**
	   * @description
	   * Change page of displayed accounts.
	   *
	   * @name AccountsOverviewController#changePage
	   * @type {Function}
	   * @param {Number} params.currentPage Page number to navigate to
	   */
	  var changePage = function changePage(_ref) {
	    var pageNumber = _ref.currentPage;
	
	    Object.assign(accounts.params, { from: pageNumber - 1 });
	
	    load(replace);
	  };
	
	  /**
	   * @name AccountsOverviewController#onSort
	   * @type {Function}
	   * @description
	   * Loads sorted list of accounts
	   * @param  {String} orderBy Column key to sort
	   * @param  {String} direction Sort direction
	   * @returns {Promise.<loadResponse, module:lib-bb-model-errors.ModelError>} A Promise with
	   * sorted accounts
	   */
	  var onSort = function onSort(orderBy, direction) {
	    Object.assign(accounts.params, {
	      orderBy: orderBy,
	      direction: direction
	    });
	
	    return load(replace);
	  };
	
	  /**
	   * @name AccountsOverviewController#onSearch
	   * @type {Function}
	   * @description
	   * Loads queried list of accounts
	   * @param {String} query Search query
	   * @returns {Promise.<loadResponse, module:lib-bb-model-errors.ModelError>} A Promise with
	   * searched accounts
	   */
	  var onSearch = function onSearch(query) {
	    Object.assign(accounts.params, { from: 0, searchTerm: query });
	    state.accounts.searching = true;
	
	    return load(replace).then(function () {
	      Object.assign(state.accounts, { lastSearchQuery: query });
	    });
	  };
	
	  /**
	   * @name AccountsOverviewController#filter
	   * @type {Function}
	   * @description
	   * Loads filtered list of accounts
	   * @param {FilterOptions} options Config object
	   * @returns {Promise.<FilterResponse, module:lib-bb-model-errors.ModelError>} A Promise with
	   * filtered accounts
	   */
	  var filter = function filter(options) {
	    if (options.isLoadMore) {
	      return loadMore();
	    }
	
	    return onSearch(options.searchQuery);
	  };
	
	  /**
	   * @name AccountsOverviewController#clearFilter
	   * @type {Function}
	   * @description
	   * Resets filtered list of accounts
	   * @returns {Promise.<FilterResponse, module:lib-bb-model-errors.ModelError>} A Promise with
	   * filtered accounts
	   */
	  var clearFilter = function clearFilter() {
	    Object.assign(accounts.params, { from: 0, searchTerm: '' });
	    state.accounts.searching = false;
	
	    return load(replace);
	  };
	
	  /**
	   * @name AccountsOverviewController#getPermissions
	   * @type {Function}
	   * @description
	   * Loads user permission for the extension
	   */
	  var getPermissions = function getPermissions() {
	    var privileges = hooks.getRequestedPrivileges();
	
	    permissions.getPermissions(privileges).then(function (resp) {
	      $ctrl.permissions = resp;
	    });
	  };
	
	  /**
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @type {Function}
	   * @name AccountsOverviewController#$onInit
	   *
	   * @returns {Promise.<loadResponse, module:lib-bb-model-errors.ModelError>} A Promise with
	   * loaded accounts
	   */
	  var $onInit = function $onInit() {
	    return load().then(function () {
	      state.initialLoading = false;
	    }).then(updateAccountSelected).then(getPermissions).then(bindEvents).catch(function (error) {
	      state.initialLoading = false;
	      state.initialError = uiError(errorMessages, error).message;
	    });
	  };
	
	  Object.assign($ctrl, {
	    state: state,
	    dismissMessageTime: dismissMessageTime,
	    selectAccount: selectAccount,
	    loadMore: loadMore,
	    onSort: onSort,
	    navigateToTransaction: navigateToTransaction,
	    navigateToCreatePayment: navigateToCreatePayment,
	    navigateToAccountDetails: navigateToAccountDetails,
	    $onInit: $onInit,
	    changePage: changePage,
	    loadAccountDetails: loadAccountDetails,
	    hasAccounts: hasAccounts,
	    filter: filter,
	    clearFilter: clearFilter,
	    getBalanceHistory: getBalanceHistory,
	    loadHistoryBalance: loadHistoryBalance
	  });
	}
	
	/**
	 * @typedef {Object} loadResponse
	 * @property {module:data-bb-product-summary-http-ng.ProductSummaryData.ProductsummaryItem[]} data
	 *   Array of accounts
	 * @property {String} totalCount Total accounts number
	 */
	
	/**
	 * @typedef {Object} FilterResponse
	 * @property {module:data-bb-product-summary-http-ng.ProductSummaryData.ProductsummaryItem[]} data
	 *   Array of accounts
	 * @property {Number} totalItems Total number of accounts
	 * @property {Boolean} hasMore Controls whether or not has more accounts
	 */
	
	/**
	 * @typedef {Object} FilterOptions
	 * @property {String} searchQuery Search query
	 * @property {Boolean} isLoadMore Controls whether or not it is request for loading more accounts
	 */

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Event = exports.Event = {
	  PRODUCT_SELECTED: 'bb.event.product.selected',
	  // TODO: Remove this deprecated method when component version will be bumped to v2.0.0
	  ACCOUNT_SELECTED: 'bb.event.account.selected'
	};
	
	var Intent = exports.Intent = {
	  TRANSACTION_LIST: 'view.account.transactions',
	  CREATE_PAYMENT: 'payment-orders.auth.create',
	  ACCOUNT_DETAILS: 'intent.bus.accounts.overview.details.view'
	};
	
	var DefaultPreference = exports.DefaultPreference = {
	  PAGE_SIZE: 50,
	  MAX_NAV_PAGES: 3,
	  DISMISS_MESSAGE_TIME: 3,
	  PAGINATION_TYPE: 'load-more',
	  SORTABLE_COLUMN: 'name',
	  SORTABLE_DIRECTION: 'ASC'
	};
	
	var Context = exports.Context = {
	  RESOURCE: 'Product Summary',
	  PRIVILEGE: 'view',
	  BUSINESS_FUNCTION: 'Product Summary'
	};
	
	/**
	 * CXP events enum
	 * @type {object}
	 */
	var CXP_EVENTS = exports.CXP_EVENTS = {
	  ON_PANEL_LOAD_HISTORY: 'view.chart.on.panel.loaded.event.history',
	  ON_PANEL_LOAD_DETAILS: 'view.chart.on.panel.loaded.event.details'
	};

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DataBalanceHistoryErrorMessage = undefined;
	
	var _DataBalanceHistoryEr;
	
	var _libBbModelErrors = __webpack_require__(105);
	
	var _modelBbProductSummaryNg = __webpack_require__(121);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * @name MessageHandler#DataManageProductsErrorMessage
	 * @description
	 * Object for mapping errors used in extension
	 * @type {Object}
	 */
	var DataBalanceHistoryErrorMessage = exports.DataBalanceHistoryErrorMessage = (_DataBalanceHistoryEr = {}, _defineProperty(_DataBalanceHistoryEr, _libBbModelErrors.E_AUTH, 'model.error.auth'), _defineProperty(_DataBalanceHistoryEr, _libBbModelErrors.E_CONNECTIVITY, 'model.error.connectivity'), _defineProperty(_DataBalanceHistoryEr, _libBbModelErrors.E_USER, 'model.error.user'), _defineProperty(_DataBalanceHistoryEr, _libBbModelErrors.E_UNEXPECTED, 'model.error.unexpected'), _defineProperty(_DataBalanceHistoryEr, _modelBbProductSummaryNg.BadRequestError.ERR_BALANCE_HISTORY_ARRANGEMENT_IDS_ARE_EMPTY, 'account.error.arrangement.empty.arrangementsids'), _defineProperty(_DataBalanceHistoryEr, _modelBbProductSummaryNg.BadRequestError.ERR_BALANCE_HISTORY_INVALID_COMBO_OF_RANGE_PERIOD, 'account.error.arrangement.invalid.period.range'), _defineProperty(_DataBalanceHistoryEr, _modelBbProductSummaryNg.BadRequestError.ERR_BALANCE_HISTORY_INVALID_DATE_FROM_TO_RANGE_PERIOD, 'account.error.arrangement.invalid.from.to.date'), _defineProperty(_DataBalanceHistoryEr, _modelBbProductSummaryNg.BadRequestError.ERR_BALANCE_HISTORY_INVALID_FROM_DATE, 'account.error.arrangement.invalid.from.date'), _DataBalanceHistoryEr);
	
	/**
	 * @name MessageHandler#dataBalanceHistoryErrorMessage
	 * @description
	 * Create error message array for update product
	 * Checks if message has one or more then one error
	 * @type {function}
	 * @param {ModelError} modelError response error object
	 * @returns {MessageArray} message array
	 */
	var dataBalanceHistoryErrorMessage = function dataBalanceHistoryErrorMessage(modelError) {
	  var codes = modelError.codes || [modelError.code];
	  return codes.map(function (e) {
	    return DataBalanceHistoryErrorMessage[e];
	  });
	};
	
	/**
	 * @name MessageHandler
	 * @type {object}
	 * @description list of message handlers
	 */
	exports.default = {
	  dataBalanceHistoryErrorMessage: dataBalanceHistoryErrorMessage
	};

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name DefaultHooks
	 * @type {Object}
	 *
	 * @description
	 * Hooks for widget-bb-accounts-overview-ng
	 */
	
	/**
	 * @name DefaultHooks#processAccounts
	 * @type {Function}
	 *
	 * @description
	 * Hook for processing accounts.
	 *
	 * @param {module:data-bb-product-summary-http-ng.ProductSummaryData.ProductsummaryItem[]} accounts
	 *   Accounts to process
	 * @returns {module:data-bb-product-summary-http-ng.ProductSummaryData.ProductsummaryItem[]}
	 *   Processed account
	 */
	var processAccounts = exports.processAccounts = function processAccounts(accounts) {
	  return accounts;
	};
	
	/**
	 * @name DefaultHooks#processSelectedAccount
	 * @type {Function}
	 *
	 * @description
	 * Hook for processing selected account.
	 *
	 * @param {module:data-bb-product-summary-http-ng.ProductSummaryData.ProductsummaryItem} account
	 *   Account to process
	 * @returns {module:data-bb-product-summary-http-ng.ProductSummaryData.ProductsummaryItem}
	 *   Processed account
	 */
	var processSelectedAccount = exports.processSelectedAccount = function processSelectedAccount(account) {
	  return account;
	};
	
	/**
	 * @name Hooks#getRequestedPrivileges
	 * @type {Function}
	 *
	 * @description
	 * Prepare required privileges into a form ready for template
	
	 * @returns {Array.<Object>} Required privileges array
	 */
	var getRequestedPrivileges = exports.getRequestedPrivileges = function getRequestedPrivileges() {
	  return [];
	};
	
	/**
	 * @name Hooks#processBalanceHistoryData
	 * @type {Function}
	 *
	 * @description
	 * History Balance data hook
	 * @param {module:data-bb-arrangements-http-ng.BalanceHistoryData.BalanceHistory} data
	 * @returns {Array.<Object>} balance history data
	 */
	var processBalanceHistoryData = exports.processBalanceHistoryData = function processBalanceHistoryData(data) {
	  return data;
	};
	
	/**
	 * @name Hooks#processBalanceHistorySeries
	 * @type {function}
	 *
	 * @description
	 * Default hook for balance history chart series object post processing
	 *
	 * @param {module:data-bb-arrangements-http-ng.BalanceHistorySeries} data balance history data
	 * @returns {object} processed series
	 */
	var processBalanceHistorySeries = exports.processBalanceHistorySeries = function processBalanceHistorySeries(data) {
	  return data;
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-accounts-overview-ng.js.map