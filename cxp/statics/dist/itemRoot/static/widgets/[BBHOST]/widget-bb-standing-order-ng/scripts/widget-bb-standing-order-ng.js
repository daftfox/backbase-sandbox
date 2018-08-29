(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("lib-bb-event-bus-ng"), require("model-bb-payment-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-standing-order-ng", ["vendor-bb-angular", "lib-bb-model-errors", "lib-bb-widget-extension-ng", "lib-bb-event-bus-ng", "model-bb-payment-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-standing-order-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("lib-bb-event-bus-ng"), require("model-bb-payment-ng"));
	else
		root["widget-bb-standing-order-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-model-errors"], root["lib-bb-widget-extension-ng"], root["lib-bb-event-bus-ng"], root["model-bb-payment-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_60__, __WEBPACK_EXTERNAL_MODULE_80__, __WEBPACK_EXTERNAL_MODULE_89__, __WEBPACK_EXTERNAL_MODULE_90__, __WEBPACK_EXTERNAL_MODULE_91__) {
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

	module.exports = __webpack_require__(109);

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_60__;

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_80__;

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_89__;

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_90__;

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_91__;

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(60);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(89);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _modelBbPaymentNg = __webpack_require__(91);
	
	var _modelBbPaymentNg2 = _interopRequireDefault(_modelBbPaymentNg);
	
	var _libBbEventBusNg = __webpack_require__(90);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _controller = __webpack_require__(110);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(112);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bb-standing-order-ng
	 *
	 * @description
	 * Shows standing orders list
	 */
	var hooksKey = 'widget-bb-payment-order-ng:hooks';
	
	exports.default = _vendorBbAngular2.default.module('widget-bb-standing-order-ng', [_modelBbPaymentNg2.default, _libBbEventBusNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).controller('StandingOrderController', [
	// dependencies to inject
	_modelBbPaymentNg.modelPaymentKey, hooksKey, _libBbEventBusNg.eventBusKey,
	/* into */
	_controller2.default]).name;

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _errorMessages;
	
	exports.default = StandingOrderController;
	
	var _libBbModelErrors = __webpack_require__(80);
	
	var _constants = __webpack_require__(111);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'error.unexpected'), _errorMessages);
	
	/**
	 * Defines the default pageSize for the standing orders page
	 * as defined in the widget model.xml
	 * @type {number}
	 */
	var DEFAULT_PAGE_SIZE = 50;
	
	/**
	 * Defines the default maxNavPages for the accounts page
	 * as defined in the widget model.xml
	 * @type {int}
	 */
	var DEFAULT_MAX_NAV_PAGES = 3;
	
	/**
	 * Defines the default paginationType for the accounts page
	 * as defined in the widget model.xml
	 * @type {string}
	 */
	var DEFAULT_PAGINATION_TYPE = 'load-more';
	
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
	
	var selections = {
	  selectedPayments: []
	};
	
	/**
	 * @name StandingOrderController
	 * @type {object}
	 * @description
	 * Shows standing orders list
	 *
	 * @usage
	 * <div ng-controller="StandingOrderController as $ctrl">
	 *   <!-- ... -->
	 * </div>
	 */
	function StandingOrderController(model, hooks, bus) {
	  var $ctrl = this;
	  var preferences = model.getPaymentPreferences();
	  var pageSize = preferences.standingOrderPageSize || DEFAULT_PAGE_SIZE;
	  var maxNavPages = preferences.maxNavPages || DEFAULT_MAX_NAV_PAGES;
	  var paginationType = preferences.paginationType || DEFAULT_PAGINATION_TYPE;
	  var dismissTime = Math.abs(preferences.notificationDismissTime) || 3;
	
	  var standingOrders = {
	    rawItems: [],
	    params: {
	      from: 0,
	      size: pageSize,
	      currentPage: 1,
	      totalItems: 0,
	      maxNavPages: maxNavPages,
	      paginationType: paginationType,
	      orderBy: hooks.defaultSortableColumn(),
	      direction: hooks.defaultSortableDirection()
	    }
	  };
	
	  var state = {
	    notifications: [],
	    standingOrders: {
	      data: [],
	      get orderBy() {
	        return standingOrders.params.orderBy;
	      },
	      get direction() {
	        return standingOrders.params.direction;
	      },
	      loading: false,
	      hasMore: false,
	      error: null
	    },
	    pageParams: standingOrders.params,
	    initialLoading: true,
	    error: null
	  };
	
	  /**
	   * @type {promise.<void>} loadMorePromise
	   */
	  var loadMorePromise = null;
	
	  /**
	   * Merges new orders with existing ones
	   *
	   * @inner
	   * @name append
	   * @type {function}
	   * @returns {array} Merged array of old and new orders
	   */
	  var append = function append(newItems, existingItems) {
	    return [].concat(_toConsumableArray(existingItems), _toConsumableArray(newItems));
	  };
	
	  /**
	   * Replaces existing orders with new ones
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
	   * @name load
	   *
	   * @description
	   * Loading standing orders
	   *
	   * @inner
	   * @type {function}
	   *
	   * @param {function} merge
	   * @param {object} params
	   * @return {Promise.<module:model-bb-payment-ng.Payments, ModelError>} A promise
	   */
	  var load = function load(merge, params) {
	    var requestParams = Object.assign({}, standingOrders.params, params);
	    state.standingOrders.loading = true;
	
	    return model.getStandingOrders(requestParams).then(function (raw) {
	      state.standingOrders.loading = false;
	      standingOrders.rawItems = merge(raw.data, standingOrders.rawItems);
	      state.standingOrders.hasMore = standingOrders.rawItems.length < raw.totalCount;
	
	      state.pageParams.totalItems = raw.totalCount || 0;
	      state.pageParams.currentPage = requestParams.currentPage;
	
	      return standingOrders.rawItems;
	    }).then(hooks.processStandingOrders).then(function (processedPayments) {
	      state.standingOrders.data = processedPayments;
	    }).catch(function (error) {
	      state.error = uiError(error);
	      state.standingOrders.loading = false;
	    });
	  };
	
	  /**
	   * @name loadMore
	   *
	   * @description
	   * Loads more standing orders if they are available.
	   *
	   * @type {function}
	   * @param {function} done Callback to stop loading
	   * @return {Promise.<module:model-bb-payment-ng.Payments, ModelError>} A promise
	   */
	  var loadMore = function loadMore(done) {
	    if (state.standingOrders.loading) {
	      return loadMorePromise;
	    }
	
	    standingOrders.params.from++;
	
	    loadMorePromise = load(append).then(function () {
	      loadMorePromise = null;
	      done();
	    }).catch(function () {
	      loadMorePromise = null;
	      standingOrders.params.from--;
	      done();
	    });
	
	    return loadMorePromise;
	  };
	
	  /**
	   * @description
	   * Get params for request.
	   *
	   * @name AccountsOverviewController#getRequestParams
	   *
	   * @inner
	   * @param {Object} params Custom params
	   * @type {function}
	   * @returns {Object} A request params
	   */
	  var getRequestParams = function getRequestParams(params) {
	    return Object.assign({}, standingOrders.params, {
	      // In BE services pagination starts from 0 page, but in bootstrap directive it's 1
	      from: params.currentPage - 1
	    }, params);
	  };
	
	  /**
	   * @description
	   * Change page of displayed accounts.
	   *
	   * @name AccountsOverviewController#changePage
	   * @type {function}
	   * @returns {Promise.<module:model-bb-product-summary-ng.Accounts, ModelError>}
	   * A Promise with loaded accounts
	   */
	  var changePage = function changePage() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var currentParams = getRequestParams(params);
	
	    return load(replace, currentParams);
	  };
	
	  /**
	   * @name reload
	   *
	   * @description
	   * Reloads the current collection
	   *
	   * @inner
	   * @type {function}
	   * @returns {Promise.<void>}
	   */
	  var reload = function reload() {
	    var params = standingOrders.params;
	    var from = state.pageParams.currentPage ? state.pageParams.currentPage - 1 : 0;
	    var size = (params.from + 1) * params.size;
	    return load(replace, { from: from, size: size });
	  };
	
	  /**
	   * @name onSort
	   * @type {function}
	   * @description
	   * Loads sorted list of payments
	   * @param  {string} orderBy   Column key to sort
	   * @param  {string} direction Sort direction
	   */
	  var onSort = function onSort(orderBy, direction) {
	    Object.assign(standingOrders.params, {
	      orderBy: orderBy,
	      direction: direction
	    });
	    reload();
	  };
	
	  /**
	   * @name notifyOnAuthSuccess
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on authorization request's success.
	   *
	   * @fires bb.event.standing.order.auth.success
	   *
	   * @returns {object}
	   */
	  var notifyOnAuthSuccess = function notifyOnAuthSuccess(res) {
	    bus.publish(_constants2.default.STANDING_ORDER_AUTH_SUCCESS, res);
	  };
	
	  /**
	   * @name notifyOnRejectSuccess
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on rejection request's success.
	   *
	   * @fires bb.event.standing.order.reject.success
	   *
	   * @returns {object}
	   */
	  var notifyOnRejectSuccess = function notifyOnRejectSuccess(res) {
	    bus.publish(_constants2.default.STANDING_ORDER_REJECT_SUCCESS, res);
	  };
	
	  /**
	   * @name notifyOnAuthFail
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on authorization request's failure.
	   *
	   * @fires bb.event.standing.order.auth.fail
	   *
	   * @returns {object}
	   */
	  var notifyOnAuthFail = function notifyOnAuthFail(err) {
	    bus.publish(_constants2.default.STANDING_ORDER_AUTH_FAIL, err);
	  };
	
	  /**
	   * @name notifyOnRejectFail
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on rejection request's failure.
	   *
	   * @fires bb.event.standing.order.reject.fail
	   *
	   * @returns {object}
	   */
	  var notifyOnRejectFail = function notifyOnRejectFail(err) {
	    bus.publish(_constants2.default.STANDING_ORDER_REJECT_FAIL, err);
	  };
	
	  /**
	   * @name removeSelectedPayment
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Remove payment id from selected standing orders.
	   *
	   * @returns {void}
	   */
	  var removeSelectedPayment = function removeSelectedPayment(paymentId) {
	    var selected = selections.selectedPayments;
	    var index = selected.findIndex(function (id) {
	      return id === paymentId;
	    });
	    if (index > -1) {
	      selected.splice(index, 1);
	    }
	  };
	
	  /**
	   * @name authorize
	   * @type {function}
	   *
	   * @description
	   * Request standing order authorization.
	   *
	   * @param {string} paymentId Id of the standing order
	   *
	   * @returns {Promise}
	   */
	  var authorize = function authorize(paymentId) {
	    return model.authorizePayment(paymentId).then(notifyOnAuthSuccess).then(function () {
	      return removeSelectedPayment(paymentId);
	    }).then(reload).catch(notifyOnAuthFail);
	  };
	
	  /**
	   * @name notifyOnMultipleAuthResult
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on multiple authorization results.
	   *
	   * @fires bb.event.standing.order.auth.multiple.success
	   * @fires bb.event.standing.order.auth.multiple.fail
	   *
	   * @returns {object}
	   */
	  var notifyOnMultipleAuthResult = function notifyOnMultipleAuthResult(res) {
	    if (res.succeeded.length) {
	      bus.publish(_constants2.default.STANDING_ORDER_AUTH_MULTIPLE_SUCCESS, res.succeeded.length);
	    }
	
	    if (res.failed.length) {
	      bus.publish(_constants2.default.STANDING_ORDER_AUTH_MULTIPLE_FAIL, res.failed.length);
	    }
	
	    // Keep selected failed payments only
	    selections.selectedPayments = res.failed || [];
	    selections.selectedAll = false;
	  };
	
	  /**
	   * @name authorizeMultiple
	   * @type {function}
	   *
	   * @description
	   * Request list of standing orders authorization.
	   *
	   * @param {array} selectedPayments Collection of payments id
	   *
	   * @returns {Promise}
	   */
	  var authorizeMultiple = function authorizeMultiple(selectedPayments) {
	    return model.authorizeMultiplePayments(selectedPayments).then(notifyOnMultipleAuthResult).then(reload).catch(function (error) {
	      state.error = error;
	    });
	  };
	
	  /**
	   * @name notifyOnMultipleRejectResult
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on multiple rejection results.
	   *
	   * @fires bb.event.standing.order.reject.multiple.success
	   * @fires bb.event.standing.order.reject.multiple.fail
	   *
	   * @returns {object}
	   */
	  var notifyOnMultipleRejectResult = function notifyOnMultipleRejectResult(res) {
	    if (res.succeeded.length) {
	      bus.publish(_constants2.default.STANDING_ORDER_REJECT_MULTIPLE_SUCCESS, res.succeeded.length);
	    }
	
	    if (res.failed.length) {
	      bus.publish(_constants2.default.STANDING_ORDER_REJECT_MULTIPLE_FAIL, res.failed.length);
	    }
	
	    // Keep selected failed payments only
	    selections.selectedPayments = res.failed || [];
	    selections.selectedAll = false;
	  };
	
	  /**
	   * @name rejectMultiple
	   * @type {function}
	   *
	   * @description
	   * Request multiple standing orders rejection.
	   *
	   * @param {array} selectedPayments Collection of payments id
	   *
	   * @returns {Promise}
	   */
	  var rejectMultiple = function rejectMultiple(selectedPayments) {
	    return model.rejectMultiplePayments(selectedPayments).then(notifyOnMultipleRejectResult).then(reload).catch(function (error) {
	      state.error = error;
	    });
	  };
	
	  /**
	   * @name reject
	   * @type {function}
	   *
	   * @description
	   * Request standing order rejection.
	   *
	   * @param {string} paymentId Id of the standing order
	   *
	   * @returns {Promise}
	   */
	  var reject = function reject(paymentId) {
	    return model.rejectPayment(paymentId).then(notifyOnRejectSuccess).then(reload).catch(notifyOnRejectFail);
	  };
	
	  /**
	   * @name notifyOnDeleteSuccess
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on deletion request's success.
	   *
	   * @fires bb.event.standing.order.delete.success
	   *
	   * @returns {object}
	   */
	  var notifyOnDeleteSuccess = function notifyOnDeleteSuccess(res) {
	    bus.publish(_constants2.default.STANDING_ORDER_DELETE_SUCCESS, res);
	  };
	
	  /**
	   * @name notifyOnDeleteFail
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on deletion request's failure.
	   *
	   * @fires bb.event.standing.order.delete.fail
	   *
	   * @returns {object}
	   */
	  var notifyOnDeleteFail = function notifyOnDeleteFail(err) {
	    bus.publish(_constants2.default.STANDING_ORDER_DELETE_FAIL, err);
	  };
	
	  /**
	   * @name notifyOnMultipleDeleteResult
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on multiple deletion results.
	   *
	   * @fires bb.event.standing.order.delete.multiple.success
	   * @fires bb.event.standing.order.delete.multiple.fail
	   *
	   * @returns {object}
	   */
	  var notifyOnMultipleDeleteResult = function notifyOnMultipleDeleteResult(res) {
	    if (res.succeeded.length) {
	      bus.publish(_constants2.default.STANDING_ORDER_DELETE_MULTIPLE_SUCCESS, res.succeeded.length);
	    }
	
	    if (res.failed.length) {
	      bus.publish(_constants2.default.STANDING_ORDER_DELETE_MULTIPLE_FAIL, res.failed.length);
	    }
	
	    // Keep selected failed payments only
	    selections.selectedPayments = res.failed || [];
	    selections.selectedAll = false;
	  };
	
	  /**
	   * @name deleteMultiplePayments
	   * @type {function}
	   *
	   * @description
	   * Request multiple standing orders deletion.
	   *
	   * @param {array} selectedPayments Collection of payments id
	   *
	   * @returns {Promise}
	   */
	  var deleteMultiplePayments = function deleteMultiplePayments(selectedPayments) {
	    return model.deleteMultiplePayments(selectedPayments).then(notifyOnMultipleDeleteResult).then(reload).catch(function (error) {
	      state.error = error;
	    });
	  };
	
	  /**
	   * @name deletePayment
	   * @type {function}
	   *
	   * @description
	   * Request payment deletion.
	   *
	   * @param {string} paymentId Id of the standing order
	   *
	   * @returns {Promise}
	   */
	  var deletePayment = function deletePayment(paymentId) {
	    return model.deletePayment(paymentId).then(notifyOnDeleteSuccess).then(reload).catch(notifyOnDeleteFail);
	  };
	
	  /**
	   * @name bindEvents
	   *
	   * @description
	   * Adds subscriptions to bus events
	   *
	   * @inner
	   * @type {function}
	   */
	  var bindEvents = function bindEvents() {
	    bus.subscribe(_constants2.default.NOTIFICATION_EVENT, function (notification) {
	      state.notifications.push(notification);
	    });
	  };
	
	  /**
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @name StandingOrderController#$onInit
	   * @type {function}
	   * @returns {Promise.<module:model-bb-payment-ng.Payments, ModelError>}
	   */
	  var $onInit = function $onInit() {
	    return load(replace).then(function () {
	      state.initialLoading = false;
	    }).then(bindEvents);
	  };
	
	  Object.assign($ctrl, {
	    state: state,
	    $onInit: $onInit,
	    loadMore: loadMore,
	    onSort: onSort,
	    dismissTime: dismissTime,
	    authorize: authorize,
	    authorizeMultiple: authorizeMultiple,
	    reject: reject,
	    rejectMultiple: rejectMultiple,
	    deletePayment: deletePayment,
	    deleteMultiplePayments: deleteMultiplePayments,
	    selections: selections,
	    changePage: changePage
	  });
	}

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Event = {
	  STANDING_ORDER_AUTH_SUCCESS: 'bb.event.standing.order.auth.success',
	  STANDING_ORDER_AUTH_FAIL: 'bb.event.standing.order.auth.fail',
	  STANDING_ORDER_AUTH_MULTIPLE_SUCCESS: 'bb.event.standing.order.multiple.auth.success',
	  STANDING_ORDER_AUTH_MULTIPLE_FAIL: 'bb.event.standing.order.multiple.auth.fail',
	  STANDING_ORDER_REJECT_SUCCESS: 'bb.event.standing.order.reject.success',
	  STANDING_ORDER_REJECT_FAIL: 'bb.event.standing.order.reject.fail',
	  STANDING_ORDER_REJECT_MULTIPLE_SUCCESS: 'bb.event.standing.order.multiple.reject.success',
	  STANDING_ORDER_REJECT_MULTIPLE_FAIL: 'bb.event.standing.order.multiple.reject.fail',
	  NOTIFICATION_EVENT: 'bb.event.notifications.notify',
	  STANDING_ORDER_DELETE_SUCCESS: 'bb.event.standing.order.delete.success',
	  STANDING_ORDER_DELETE_FAIL: 'bb.event.standing.order.delete.fail',
	  STANDING_ORDER_DELETE_MULTIPLE_SUCCESS: 'bb.event.standing.order.multiple.delete.success',
	  STANDING_ORDER_DELETE_MULTIPLE_FAIL: 'bb.event.standing.order.multiple.delete.fail'
	};
	
	exports.default = Event;

/***/ }),

/***/ 112:
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
	 * Hooks for widget-bb-standing-order-ng
	 */
	
	/**
	 * @name processStandingOrders
	 * @type {function}
	 *
	 * @description
	 * Hook for processing standing orders.
	 *
	 * @param payments {array} Payments to process
	 * @returns {array} Processed payments
	 */
	var processStandingOrders = exports.processStandingOrders = function processStandingOrders(payments) {
	  return payments;
	};
	
	/**
	 * @name defaultSortableColumn
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
	 * @name defaultSortableDirection
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
//# sourceMappingURL=widget-bb-standing-order-ng.js.map