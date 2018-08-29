(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("model-bb-payment-orders-ng"), require("lib-bb-permissions-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bus-manage-payment-orders-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-model-errors", "lib-bb-event-bus-ng", "lib-bb-widget-extension-ng", "lib-bb-intent-ng", "model-bb-payment-orders-ng", "lib-bb-permissions-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bus-manage-payment-orders-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("model-bb-payment-orders-ng"), require("lib-bb-permissions-ng"));
	else
		root["widget-bus-manage-payment-orders-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-model-errors"], root["lib-bb-event-bus-ng"], root["lib-bb-widget-extension-ng"], root["lib-bb-intent-ng"], root["model-bb-payment-orders-ng"], root["lib-bb-permissions-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_142__, __WEBPACK_EXTERNAL_MODULE_148__, __WEBPACK_EXTERNAL_MODULE_193__, __WEBPACK_EXTERNAL_MODULE_194__, __WEBPACK_EXTERNAL_MODULE_195__, __WEBPACK_EXTERNAL_MODULE_196__, __WEBPACK_EXTERNAL_MODULE_197__) {
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

	module.exports = __webpack_require__(263);

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_142__;

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_148__;

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_193__;

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_194__;

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_195__;

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_196__;

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_197__;

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(194);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _modelBbPaymentOrdersNg = __webpack_require__(196);
	
	var _modelBbPaymentOrdersNg2 = _interopRequireDefault(_modelBbPaymentOrdersNg);
	
	var _libBbWidgetNg = __webpack_require__(142);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbIntentNg = __webpack_require__(195);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbPermissionsNg = __webpack_require__(197);
	
	var _libBbPermissionsNg2 = _interopRequireDefault(_libBbPermissionsNg);
	
	var _libBbEventBusNg = __webpack_require__(193);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _controller = __webpack_require__(264);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(266);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var hooksKey = 'widget-bus-manage-payment-orders-ng:hooks'; /**
	                                                             * @module widget-bus-manage-payment-orders-ng
	                                                             *
	                                                             * @description
	                                                             * Widget to manage payment orders
	                                                             */
	exports.default = _vendorBbAngular2.default.module('widget-bus-manage-payment-orders-ng', [_modelBbPaymentOrdersNg2.default, _libBbWidgetNg2.default, _libBbIntentNg2.default, _libBbPermissionsNg2.default, _libBbEventBusNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).controller('ManagePaymentOrderController', [
	// dependencies to inject
	_modelBbPaymentOrdersNg.modelPaymentOrdersKey, _libBbWidgetNg.widgetKey, hooksKey, _libBbPermissionsNg.bbPermissionsKey, _libBbEventBusNg.eventBusKey,
	/* into */
	_controller2.default]).run([_libBbIntentNg.bbIntentKey, function (bbIntent) {
	  bbIntent.init();
	}]).name;

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _errorMessages;
	
	exports.default = ManagePaymentOrderController;
	
	var _libBbModelErrors = __webpack_require__(148);
	
	var _constants = __webpack_require__(265);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'error.unexpected'), _errorMessages);
	
	/**
	 * Defines the default pageSize for the payment orders page
	 * as defined in the widget model.xml
	 * @type {number}
	 */
	var DEFAULT_PAGE_SIZE = 50;
	
	/**
	 * Defines the default maxNavPages for the payment orders page
	 * as defined in the widget model.xml
	 * @type {number}
	 */
	var DEFAULT_MAX_NAV_PAGES = 3;
	
	/**
	 * Defines the default paginationType for the payment orders page
	 * as defined in the widget model.xml
	 * @type {string}
	 */
	var DEFAULT_PAGINATION_TYPE = 'load-more';
	
	/**
	 * Defines the default notificationDismissTime for the payment orders page
	 * as defined in the widget model.xml
	 * @type {number}
	 */
	var DEFAULT_MESSAGE_DISMISS_TIME = 3;
	
	/**
	 * @description
	 * Creates an error object for template
	 *
	 * @name uiError
	 *
	 * @inner
	 * @param {object} modelError Error object
	 * @type {function}
	 * @returns {{message: string}}
	 */
	var uiError = function uiError(modelError) {
	  var error = '';
	
	  if (modelError && modelError.code) {
	    error = errorMessages[modelError.code];
	  }
	
	  return {
	    message: error
	  };
	};
	
	/**
	 * @name ManagePaymentOrderController
	 * @type {object}
	 * @description
	 * Controller for managing payment order
	 *
	 * @usage
	 * <div ng-controller="ManagePaymentOrderController as $ctrl">
	 *   <!-- ... -->
	 * </div>
	 */
	function ManagePaymentOrderController(model, widget, hooks, permissions, bus) {
	  var $ctrl = this;
	  var size = widget.getLongPreference(_constants.Preference.PAGE_SIZE) || DEFAULT_PAGE_SIZE;
	  var maxNavPages = widget.getLongPreference(_constants.Preference.MAX_NAV_PAGES) || DEFAULT_MAX_NAV_PAGES;
	  var paginationType = widget.getStringPreference(_constants.Preference.PAGINATION_TYPE) || DEFAULT_PAGINATION_TYPE;
	  var notificationDismissTime = widget.getLongPreference(_constants.Preference.NOTIFICATION_DISMISS) || DEFAULT_MESSAGE_DISMISS_TIME;
	
	  var state = void 0;
	
	  var paymentOrders = {
	    rawItems: [],
	    params: {
	      from: 0,
	      size: size,
	      orderBy: hooks.defaultSortableColumn(),
	      direction: hooks.defaultSortableDirection(),
	      get query() {
	        if (!state.paymentOrders.searching) {
	          return null;
	        }
	
	        return state.search.query;
	      }
	    }
	  };
	
	  state = {
	    notifications: [],
	    currencies: null,
	    paymentOrders: {
	      data: null,
	      get orderBy() {
	        return paymentOrders.params.orderBy;
	      },
	      get direction() {
	        return paymentOrders.params.direction;
	      },
	      loading: false,
	      searching: false,
	      hasMore: false,
	      error: null
	    },
	    pagination: {
	      get currentPage() {
	        return paymentOrders.params.from + 1;
	      },
	      maxNavPages: maxNavPages,
	      paginationType: paginationType,
	      itemsPerPage: size,
	      totalItems: 0
	    },
	    search: {
	      query: null
	    },
	    filterParams: {
	      amountFrom: null,
	      amountTo: null,
	      currency: null,
	      dateRange: {
	        startDate: null,
	        endDate: null
	      },
	      status: null,
	      fromAccount: {
	        identifier: null,
	        name: null
	      }
	    },
	    initialLoading: true,
	    error: null,
	    notificationDismissTime: notificationDismissTime,
	    selections: {
	      selectedPayments: [],
	      selectedPaymentsIds: [],
	      selectedPaymentsActionGrouped: {}
	    },
	    bulkActionDetails: {},
	    bulkActionNotification: {
	      isVisible: false
	    },
	    isLoading: false
	  };
	
	  /**
	   * @type {promise} loadMorePromise
	   */
	  var loadMorePromise = null;
	
	  /**
	   * Merges new payments with existing payments
	   *
	   * @inner
	   * @name append
	   * @type {function}
	   * @returns {array} Merged array of old and new payments
	   */
	  var append = function append(newItems, existingItems) {
	    return [].concat(_toConsumableArray(existingItems), _toConsumableArray(newItems));
	  };
	
	  /**
	   * Replaces existing payments with new payments
	   *
	   * @inner
	   * @name replace
	   * @type {function}
	   * @returns {array} New payments
	   */
	  var replace = function replace(items) {
	    return items;
	  };
	
	  /**
	   * @description
	   * Normalize date to required format.
	   *
	   * @inner
	   * @name ManagePaymentOrderController#getNormalizedDate
	   * @type {function}
	   *
	   * @param param {Date|null} Date to normalize
	   *
	   * @returns {Date|null} Date object or null
	   */
	  var getNormalizedDate = function getNormalizedDate(date) {
	    if (date === null || date === undefined) {
	      return null;
	    }
	
	    var userOffset = date.getTimezoneOffset() * 60000;
	    return '' + new Date(date - userOffset).toISOString().slice(0, 10);
	  };
	
	  /**
	   * @description
	   * Normalize search query param.
	   *
	   * @inner
	   * @name ManagePaymentOrderController#normalizeQueryParam
	   * @type {function}
	   *
	   * @param param {Object|null} Parameter to normalize
	   *
	   * @returns {Object|null} Object or null
	   */
	  var normalizeQueryParam = function normalizeQueryParam(param) {
	    return param === '' ? null : param;
	  };
	
	  /**
	   * @description
	   * Get all filter params.
	   *
	   * @inner
	   * @name ManagePaymentOrderController#getParams
	   * @type {function}
	   *
	   * @returns {Promise} A Promise that adds values to a given argument
	   */
	  var getParams = function getParams() {
	    return Object.assign({}, {
	      executionDateFrom: getNormalizedDate($ctrl.state.filterParams.dateRange.startDate),
	      executionDateTo: getNormalizedDate($ctrl.state.filterParams.dateRange.endDate),
	      amountFrom: normalizeQueryParam($ctrl.state.filterParams.amountFrom),
	      amountTo: normalizeQueryParam($ctrl.state.filterParams.amountTo),
	      currency: normalizeQueryParam($ctrl.state.filterParams.currency),
	      status: normalizeQueryParam($ctrl.state.filterParams.status)
	    });
	  };
	
	  /**
	   * @name ManagePaymentOrderController#getPermissions
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Retrieve permissions for respective privilege set and store it
	   * into controller prop
	   *
	   * @return {Promise}
	   *
	   */
	  var getPermissions = function getPermissions() {
	    return permissions.getPermissions(_constants.Privileges).then(function (privileges) {
	      $ctrl.privileges = privileges;
	    }).catch(function () {
	      $ctrl.privileges = false;
	    });
	  };
	
	  /**
	   * @name ManagePaymentOrderController#load
	   *
	   * @description
	   * Load payment orders
	   *
	   * @type {function}
	   * @param {function} merge Replaces existing payments with new payments
	   * @param {object} params Request parameters
	   * @return
	   *  {Promise.<module:model-bb-payment-orders-ng.Payments, module:lib-bb-model-errors.ModelError>}
	   *  A promise
	   */
	  var load = function load(merge) {
	    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    var requestParams = Object.assign({}, paymentOrders.params, params);
	    state.paymentOrders.loading = true;
	    return model.getPaymentOrders(requestParams).then(function (raw) {
	      state.paymentOrders.loading = false;
	      paymentOrders.rawItems = merge(raw.data, paymentOrders.rawItems);
	      state.paymentOrders.hasMore = paymentOrders.rawItems.length < raw.totalCount;
	      state.pagination.totalItems = raw.totalCount || 0;
	
	      return paymentOrders.rawItems;
	    }).then(hooks.processPaymentOrders).then(function (processedPayments) {
	      state.paymentOrders.data = processedPayments;
	    }).catch(function (err) {
	      state.error = uiError(err);
	      state.paymentOrders.loading = false;
	
	      return Promise.reject(state.error);
	    });
	  };
	
	  /**
	   * @name ManagePaymentOrderController#loadMore
	   *
	   * @description
	   * Loads more payments if they are available.
	   *
	   * @type {function}
	   * @param {function} done Callback to stop loading
	   * @return
	   *  {Promise.<module:model-bb-payment-orders-ng.Payments, module:lib-bb-model-errors.ModelError>}
	   *  A promise
	   */
	  var loadMore = function loadMore(done) {
	    if (state.paymentOrders.loading) {
	      return loadMorePromise;
	    }
	
	    paymentOrders.params.from++;
	
	    loadMorePromise = load(append, getParams()).then(function () {
	      loadMorePromise = null;
	    }).catch(function () {
	      loadMorePromise = null;
	      paymentOrders.params.from--;
	    }).then(done);
	
	    return loadMorePromise;
	  };
	
	  /**
	   * @description
	   * Change page of displayed payments.
	   *
	   * @name ManagePaymentOrderController#changePage
	   * @type {function}
	   * @returns
	   *  {Promise.<module:model-bb-payment-orders-ng.Payments, module:lib-bb-model-errors.ModelError>}
	   *  A Promise with loaded payments
	   */
	  var changePage = function changePage(params) {
	    Object.assign(paymentOrders.params, {
	      from: params.currentPage - 1
	    });
	
	    return load(replace, getParams());
	  };
	
	  /**
	   * @name ManagePaymentOrderController#onSort
	   * @type {function}
	   * @description
	   * Loads sorted list of payments
	   * @param  {string} orderBy   Column key to sort
	   * @param  {string} direction Sort direction
	   */
	  var onSort = function onSort(orderBy, direction) {
	    Object.assign(paymentOrders.params, {
	      orderBy: orderBy,
	      direction: direction
	    });
	
	    if (state.pagination.paginationType === DEFAULT_PAGINATION_TYPE) {
	      var pageSize = state.pagination.currentPage * state.pagination.itemsPerPage;
	      return load(replace, Object.assign({ from: 0, size: pageSize }, getParams()));
	    }
	
	    return load(replace, getParams());
	  };
	
	  /**
	   * @name ManagePaymentOrderController#onSearchSubmit
	   * @type {function}
	   * @description
	   * Enables searching mode and loads payment orders based on search query
	   * @return
	   *  {Promise.<module:model-bb-payment-orders-ng.Payments, module:lib-bb-model-errors.ModelError>}
	   *  A promise
	   */
	  var onSearchSubmit = function onSearchSubmit() {
	    var query = $ctrl.state.search.query;
	    var queryHasValue = Boolean(typeof query === 'string' && query.trim().length);
	    $ctrl.state.paymentOrders.searching = queryHasValue;
	    return load(replace);
	  };
	
	  /**
	   * @name ManagePaymentOrderController#onSearchClear
	   * @type {function}
	   * @description
	   * Disables searching mode and resets payment orders
	   * @return
	   *  {Promise.<module:model-bb-payment-orders-ng.Payments, module:lib-bb-model-errors.ModelError>}
	   *  A promise
	   */
	  var onSearchClear = function onSearchClear() {
	    $ctrl.state.paymentOrders.searching = false;
	    return load(replace);
	  };
	
	  // TODO: Show currencies selector in filter form when search service supports it
	  // /**
	  //  * @description
	  //  * Request currencies list
	  //  *
	  //  * @inner
	  //  * @name ManagePaymentOrderController#getCurrencies
	  //  * @type {function}
	  //  * @returns {Array.<Object>} Currencies array
	  //  */
	  // const getCurrencies = () =>
	  //   model.getCurrencies()
	  //     .then(currencies => {
	  //       state.currencies = currencies;
	  //     })
	  //     .catch(err => {
	  //       state.error = uiError(err);
	  //     });
	
	  /**
	   * @description
	   * Load accounts available to payment from.
	   *
	   * @name ManagePaymentOrderController#getAccountsFrom
	   * @type {function}
	   *
	   * @param params
	   * @returns {Promise.<Object>} A Promise that returns a flat accounts list.
	   */
	  var getAccountsFrom = function getAccountsFrom(params) {
	    return model.getAccountsFrom(params).then(function (accounts) {
	      return { data: accounts, hasMore: accounts.hasMore, totalItems: accounts.length };
	    }).catch(function (err) {
	      state.error = uiError(err);
	    });
	  };
	
	  /**
	   * @name ManagePaymentOrderController#selectAccountFrom
	   *
	   * @description
	   * Assign selected fromAccount identifier to the filter form.
	   * @type {function}
	   *
	   * @param {String?} identifier  Account identifier IBAN/BBAN
	   * @param {String?} name        Account name
	   */
	  var selectAccountFrom = function selectAccountFrom(_ref) {
	    var _ref$identifier = _ref.identifier,
	        identifier = _ref$identifier === undefined ? null : _ref$identifier,
	        _ref$name = _ref.name,
	        name = _ref$name === undefined ? null : _ref$name;
	
	    Object.assign($ctrl.state.filterParams.fromAccount, { identifier: identifier, name: name });
	  };
	
	  /**
	   * @description
	   * Call filter method.
	   *
	   * @name ManagePaymentOrderController#onApplyFilter
	   * @type {function}
	   */
	  var onApplyFilter = function onApplyFilter() {
	    $ctrl.state.paymentOrders.searching = true;
	    return load(replace, getParams());
	  };
	
	  /**
	   * @name ManagePaymentOrderController#updateLoadingState
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Update the loading state
	   *
	   * @param {Boolean} isLoading
	   */
	  var updateLoadingState = function updateLoadingState(isLoading) {
	    return Object.assign(state, { isLoading: isLoading });
	  };
	
	  /**
	   * @name ManagePaymentOrderController#updateBulkActionDetails
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Update the state of the ctrl with bulk action details
	   *
	   * @param {Object} update the response data object of bulk request
	   */
	  var updateBulkActionDetails = function updateBulkActionDetails(update) {
	    var missingPaymentIdsList = update.paymentOrders.filter(function (item) {
	      return !item.paymentOrder;
	    }).map(function (payment) {
	      return payment.paymentOrderId;
	    });
	
	    var missingPaymentList = state.selections.selectedPayments.filter(function (payment) {
	      return missingPaymentIdsList.includes(payment.id);
	    });
	
	    Object.assign(update, {
	      paymentOrders: [].concat(_toConsumableArray(update.paymentOrders.filter(function (item) {
	        return item.paymentOrder && item.status.code === 'ERROR';
	      })), _toConsumableArray(missingPaymentList))
	    });
	
	    Object.assign(state, {
	      bulkActionDetails: update,
	      bulkActionNotification: {
	        isVisible: true
	      }
	    });
	  };
	
	  /**
	   * @name ManagePaymentOrderController#updateSelectionStateByPaymentId
	   * @inner
	   *
	   * @description
	   * Find the payment by ID and remove it from the selected payments
	   *
	   * @type {function}
	   *
	   * @param {String} paymentId
	   */
	  var updateSelectionStateByPaymentId = function updateSelectionStateByPaymentId(paymentId) {
	    var _selectedPaymentsActi;
	
	    if (!state.selections.selectedPaymentsIds.length) {
	      return;
	    }
	
	    var _state$selections = state.selections,
	        selectedPayments = _state$selections.selectedPayments,
	        selectedPaymentsIds = _state$selections.selectedPaymentsIds;
	
	
	    var update = {
	      selectedPayments: [].concat(_toConsumableArray(selectedPayments.filter(function (p) {
	        return p.id !== paymentId;
	      }))),
	      selectedPaymentsIds: [].concat(_toConsumableArray(selectedPaymentsIds.filter(function (id) {
	        return id !== paymentId;
	      }))),
	      selectedPaymentsActionGrouped: (_selectedPaymentsActi = {}, _defineProperty(_selectedPaymentsActi, _constants.Action.APPROVE, []), _defineProperty(_selectedPaymentsActi, _constants.Action.REJECT, []), _selectedPaymentsActi)
	    };
	
	    update.selectedPayments.forEach(function (payment) {
	      if (Array.isArray(payment.actions) && payment.actions.indexOf(_constants.Action.APPROVE) >= 0) {
	        update.selectedPaymentsActionGrouped[_constants.Action.APPROVE].push(payment);
	      }
	
	      if (Array.isArray(payment.actions) && payment.actions.indexOf(_constants.Action.REJECT) >= 0) {
	        update.selectedPaymentsActionGrouped[_constants.Action.REJECT].push(payment);
	      }
	    });
	
	    Object.assign(state, { selections: update });
	  };
	
	  /**
	   * @name ManagePaymentOrderController#notifyOnAuthSuccess
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on authorization request's success.
	   *
	   * @fires bb.event.payment.auth.success
	   *
	   * @returns {object}
	   */
	  var notifyOnAuthSuccess = function notifyOnAuthSuccess(res) {
	    bus.publish(_constants.Event.PAYMENT_AUTH_SUCCESS, res);
	  };
	
	  /**
	   * @name ManagePaymentOrderController#notifyOnAuthFail
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on authorization request's failure.
	   *
	   * @fires bb.event.payment.auth.fail
	   *
	   * @returns {object}
	   */
	  var notifyOnAuthFail = function notifyOnAuthFail(err) {
	    bus.publish(_constants.Event.PAYMENT_AUTH_FAIL, err);
	  };
	
	  /**
	   * @name ManagePaymentOrderController#authorize
	   * @type {function}
	   *
	   * @description
	   * Requests payment authorization (approval).
	   *
	   * @param {String} paymentId Id of the payment
	   *
	   * @returns {Promise}
	   */
	  var authorize = function authorize(paymentId) {
	    model.authorizePayment(paymentId).then(function () {
	      notifyOnAuthSuccess();
	      load(replace);
	    }).catch(notifyOnAuthFail);
	
	    // Update selection state
	    updateSelectionStateByPaymentId(paymentId);
	  };
	
	  /**
	   * @name ManagePaymentOrderController#notifyOnRejectSuccess
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on authorization request's success.
	   *
	   * @fires bb.event.payment.reject.success
	   *
	   * @returns {object}
	   */
	  var notifyOnRejectSuccess = function notifyOnRejectSuccess(res) {
	    bus.publish(_constants.Event.PAYMENT_REJECT_SUCCESS, res);
	  };
	
	  /**
	   * @name ManagePaymentOrderController#notifyOnRejectFail
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on authorization request's failure.
	   *
	   * @fires bb.event.payment.reject.fail
	   *
	   * @returns {object}
	   */
	  var notifyOnRejectFail = function notifyOnRejectFail(err) {
	    bus.publish(_constants.Event.PAYMENT_REJECT_FAIL, err);
	  };
	
	  /**
	   * @name ManagePaymentOrderController#reject
	   * @type {function}
	   *
	   * @description
	   * Requests payment rejection.
	   *
	   * @param {String} paymentId Id of the payment
	   *
	   * @returns {Promise}
	   */
	  var reject = function reject(paymentId) {
	    model.rejectPayment(paymentId).then(function () {
	      notifyOnRejectSuccess();
	      load(replace);
	    }).catch(notifyOnRejectFail);
	
	    // Update selection state
	    updateSelectionStateByPaymentId(paymentId);
	  };
	
	  /**
	   * @name ManagePaymentOrderController#notifyOnCancelSuccess
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on cancel request's success.
	   *
	   * @fires bb.event.payment.cancel.success
	   *
	   * @returns {object}
	   */
	  var notifyOnCancelSuccess = function notifyOnCancelSuccess(res) {
	    bus.publish(_constants.Event.PAYMENT_CANCEL_SUCCESS, res);
	  };
	
	  /**
	   * @name ManagePaymentOrderController#notifyOnCancelFail
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on cancel request's failure.
	   *
	   * @fires bb.event.payment.cancel.fail
	   *
	   * @returns {object}
	   */
	  var notifyOnCancelFail = function notifyOnCancelFail(err) {
	    bus.publish(_constants.Event.PAYMENT_CANCEL_FAIL, err);
	  };
	
	  /**
	   * @name ManagePaymentOrderController#cancelPayment
	   * @type {function}
	   *
	   * @description
	   * Requests payment cancel.
	   *
	   * @param {String} paymentId Id of the payment
	   * @param {Number} version property on payment Object
	   *
	   * @returns {Promise}
	   */
	  var cancelPayment = function cancelPayment(paymentId, version) {
	    model.requestPaymentCancel(paymentId, version).then(function () {
	      notifyOnCancelSuccess();
	      load(replace);
	    }).catch(notifyOnCancelFail);
	
	    // Update selection state
	    updateSelectionStateByPaymentId(paymentId);
	  };
	
	  /**
	   * @name ManagePaymentOrderController#notifyOnDeleteFail
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on delete request's failure.
	   *
	   * @fires bb.event.payment.delete.fail
	   *
	   * @returns {object}
	   */
	  var notifyOnDeleteFail = function notifyOnDeleteFail(err) {
	    bus.publish(_constants.Event.PAYMENT_DELETE_FAIL, err);
	  };
	
	  /**
	   * @name ManagePaymentOrderController#notifyOnDeleteSuccess
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on delete request's success.
	   *
	   * @fires bb.event.payment.delete.success
	   *
	   * @returns {object}
	   */
	  var notifyOnDeleteSuccess = function notifyOnDeleteSuccess(res) {
	    bus.publish(_constants.Event.PAYMENT_DELETE_SUCCESS, res);
	  };
	
	  /**
	   * @name ManagePaymentOrderController#deletePayment
	   * @type {function}
	   *
	   * @description
	   * Requests payment delete.
	   *
	   * @param {String} paymentId Id of the payment
	   * @param {Number} version property on payment Object
	   *
	   * @returns {Promise}
	   */
	  var deletePayment = function deletePayment(paymentId, version) {
	    model.deletePayment(paymentId, version).then(function () {
	      notifyOnDeleteSuccess();
	      load(replace);
	    }).catch(notifyOnDeleteFail);
	
	    // Update selection state
	    updateSelectionStateByPaymentId(paymentId);
	  };
	
	  /**
	   * @name ManagePaymentOrderController#clearPaymentSelection
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * de-select payments by updating selection state
	   */
	  var clearPaymentSelection = function clearPaymentSelection() {
	    Object.assign(state, {
	      selections: {
	        selectedPayments: [],
	        selectedPaymentsIds: [],
	        selectedPaymentsActionGrouped: {}
	      }
	    });
	  };
	
	  /**
	   * @name ManagePaymentOrderController#notifyOnBulkApproveSuccess
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on bulk approve request's success.
	   *
	   * @fires bb.event.payment.bulk.approve.success
	   *
	   * @returns {object}
	   */
	  var notifyOnBulkApproveSuccess = function notifyOnBulkApproveSuccess(res) {
	    if (res.failCount > 0) {
	      updateBulkActionDetails(res);
	    } else {
	      bus.publish(_constants.Event.PAYMENT_BULK_APPROVE_SUCCESS, res);
	    }
	  };
	
	  /**
	   * @name ManagePaymentOrderController#notifyOnBulkApproveFail
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on bulk approve request's failure.
	   *
	   * @fires bb.event.payment.bulk.approve.fail
	   *
	   * @returns {object}
	   */
	  var notifyOnBulkApproveFail = function notifyOnBulkApproveFail(err) {
	    bus.publish(_constants.Event.PAYMENT_BULK_APPROVE_FAIL, err);
	  };
	
	  /**
	   * @name ManagePaymentOrderController#approveBulk
	   * @type {function}
	   *
	   * @description
	   * Request approving the selected payments.
	   *
	   * @returns {Promise}
	   */
	  var approveBulk = function approveBulk() {
	    updateLoadingState(true);
	
	    model.requestBulkApprove(state.selections.selectedPaymentsIds).then(function (_ref2) {
	      var data = _ref2.data;
	
	      notifyOnBulkApproveSuccess(data);
	      clearPaymentSelection();
	      load(replace);
	    }).catch(notifyOnBulkApproveFail).finally(function () {
	      return updateLoadingState(false);
	    });
	  };
	
	  /**
	   * @name ManagePaymentOrderController#notifyOnBulkRejectSuccess
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on bulk reject request's success.
	   *
	   * @fires bb.event.payment.bulk.reject.success
	   *
	   * @returns {object}
	   */
	  var notifyOnBulkRejectSuccess = function notifyOnBulkRejectSuccess(res) {
	    if (res.failCount > 0) {
	      updateBulkActionDetails(res);
	    } else {
	      bus.publish(_constants.Event.PAYMENT_BULK_REJECT_SUCCESS, res);
	    }
	  };
	
	  /**
	   * @name ManagePaymentOrderController#notifyOnBulkRejectFail
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on bulk reject request's failure.
	   *
	   * @fires bb.event.payment.bulk.reject.fail
	   *
	   * @returns {object}
	   */
	  var notifyOnBulkRejectFail = function notifyOnBulkRejectFail(err) {
	    bus.publish(_constants.Event.PAYMENT_BULK_REJECT_FAIL, err);
	  };
	
	  /**
	   * @name ManagePaymentOrderController#rejectBulk
	   * @type {function}
	   *
	   * @description
	   * Request rejecting the selected payments.
	   *
	   * @returns {Promise}
	   */
	  var rejectBulk = function rejectBulk() {
	    updateLoadingState(true);
	
	    model.requestBulkReject(state.selections.selectedPaymentsIds).then(function (_ref3) {
	      var data = _ref3.data;
	
	      notifyOnBulkRejectSuccess(data);
	      clearPaymentSelection();
	      load(replace);
	    }).catch(notifyOnBulkRejectFail).finally(function () {
	      return updateLoadingState(false);
	    });
	  };
	
	  /**
	   * @name ManagePaymentOrderController#bindEvents
	   *
	   * @description
	   * Adds subscriptions to bus events
	   *
	   * @inner
	   * @type {function}
	   */
	  var bindEvents = function bindEvents() {
	    bus.subscribe(_constants.Event.NOTIFICATION_EVENT, function (notification) {
	      state.notifications.push(notification);
	    });
	  };
	
	  /**
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @name ManagePaymentOrderController#$onInit
	   * @type {function}
	   * @returns
	   *  {Promise.<module:model-bb-payment-orders-ng.Payments, module:lib-bb-model-errors.ModelError>}
	   *  A promise
	   */
	  var $onInit = function $onInit() {
	    return load(replace).then(bindEvents).then(function () {
	      state.initialLoading = false;
	      getPermissions();
	    })
	    // TODO: Show currencies selector in filter form when search service supports it
	    // .then(() => getCurrencies())
	    .catch(function () {
	      state.initialLoading = false;
	    });
	  };
	
	  Object.assign($ctrl, {
	    state: state,
	
	    /**
	     * @description
	     * Container to store retrieved privileges state
	     *
	     * @name ManagePaymentOrderController#privileges
	     * @type {object}
	     */
	    privileges: null,
	
	    $onInit: $onInit,
	    loadMore: loadMore,
	    onSort: onSort,
	    changePage: changePage,
	    onSearchSubmit: onSearchSubmit,
	    onSearchClear: onSearchClear,
	    getAccountsFrom: getAccountsFrom,
	    onApplyFilter: onApplyFilter,
	    selectAccountFrom: selectAccountFrom,
	    authorize: authorize,
	    reject: reject,
	    cancelPayment: cancelPayment,
	    deletePayment: deletePayment,
	    approveBulk: approveBulk,
	    rejectBulk: rejectBulk
	  });
	}

/***/ }),

/***/ 265:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Widget preferences enum
	 * @name Preference
	 * @type {object}
	 */
	var Preference = exports.Preference = {
	  PAGE_SIZE: 'bb.payment.pageSize',
	  MAX_NAV_PAGES: 'bb.payment.maxNavPages',
	  PAGINATION_TYPE: 'bb.payment.paginationType',
	  NOTIFICATION_DISMISS: 'bb.payment.notificationDismissTime'
	};
	
	/**
	 * @description
	 * Config for retrieving user privileges
	 *
	 * @type {object}
	 */
	var Privileges = exports.Privileges = [{
	  resource: 'Payments',
	  function: 'SEPA CT',
	  privileges: ['approve']
	}];
	
	/**
	 * @description
	 * List of events to be handled in controller
	 *
	 * @type {Object}
	 */
	var Event = exports.Event = {
	  PAYMENT_AUTH_SUCCESS: 'bb.event.payment.auth.success',
	  PAYMENT_AUTH_FAIL: 'bb.event.payment.auth.fail',
	  PAYMENT_REJECT_SUCCESS: 'bb.event.payment.reject.success',
	  PAYMENT_REJECT_FAIL: 'bb.event.payment.reject.fail',
	  PAYMENT_CANCEL_SUCCESS: 'bb.event.payment.cancel.success',
	  PAYMENT_CANCEL_FAIL: 'bb.event.payment.cancel.fail',
	  PAYMENT_DELETE_SUCCESS: 'bb.event.payment.delete.success',
	  PAYMENT_DELETE_FAIL: 'bb.event.payment.delete.fail',
	  PAYMENT_BULK_REJECT_SUCCESS: 'bb.event.payment.bulk.reject.success',
	  PAYMENT_BULK_REJECT_FAIL: 'bb.event.payment.bulk.reject.fail',
	  PAYMENT_BULK_APPROVE_SUCCESS: 'bb.event.payment.bulk.approve.success',
	  PAYMENT_BULK_APPROVE_FAIL: 'bb.event.payment.bulk.approve.fail',
	  NOTIFICATION_EVENT: 'bb.event.notifications.notify'
	};
	
	/**
	 * Payment actions enum
	 * @name Action
	 * @type {Object}
	 */
	var Action = exports.Action = {
	  APPROVE: 'APPROVE',
	  REJECT: 'REJECT'
	};

/***/ }),

/***/ 266:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-bus-manage-payment-orders-ng
	 */
	
	/**
	 * @name Hooks#processPaymentOrders
	 * @type {function}
	 *
	 * @description
	 * Hook for processing payment orders.
	 *
	 * @param payments {array} Payments to process
	 * @returns {array} Processed payments
	 */
	var processPaymentOrders = exports.processPaymentOrders = function processPaymentOrders(payments) {
	  return payments;
	};
	
	/**
	 * @name Hooks#defaultSortableColumn
	 *
	 * @description
	 * defaultSortableColumn default hook
	 *
	 * @type {function}
	 * @returns {?string}
	 */
	var defaultSortableColumn = exports.defaultSortableColumn = function defaultSortableColumn() {
	  return null;
	};
	
	/**
	 * @name Hooks#defaultSortableDirection
	 *
	 * @description
	 * defaultSortableDirection default hook
	 *
	 * @type {function}
	 * @returns {?string}
	 */
	var defaultSortableDirection = exports.defaultSortableDirection = function defaultSortableDirection() {
	  return null;
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bus-manage-payment-orders-ng.js.map