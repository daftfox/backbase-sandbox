(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("lib-bb-event-bus-ng"), require("model-bb-payment-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-authorization-ng", ["vendor-bb-angular", "lib-bb-model-errors", "lib-bb-widget-extension-ng", "lib-bb-event-bus-ng", "model-bb-payment-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-authorization-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("lib-bb-event-bus-ng"), require("model-bb-payment-ng"));
	else
		root["widget-bb-authorization-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-model-errors"], root["lib-bb-widget-extension-ng"], root["lib-bb-event-bus-ng"], root["model-bb-payment-ng"]);
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

	module.exports = __webpack_require__(88);

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_60__;

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_80__;

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(60);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(89);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbEventBusNg = __webpack_require__(90);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _modelBbPaymentNg = __webpack_require__(91);
	
	var _modelBbPaymentNg2 = _interopRequireDefault(_modelBbPaymentNg);
	
	var _controller = __webpack_require__(92);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(94);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bb-authorization-ng
	 *
	 * @description
	 * Widget to authorize or reject payment orders
	 *
	 * @usage
	 *  <div ng-controller="AuthorizationController as $ctrl">
	 *    <table>
	 *      <thead>
	 *        <tr>
	 *          <th i18n-key="header.status"></th>
	 *          <th i18n-key="header.from"></th>
	 *          <th i18n-key="header.to"></th>
	 *          <th i18n-key="header.currency"></th>
	 *          <th i18n-key="header.amount"></th>
	 *        </tr>
	 *      </thead>
	 *      <tbody>
	 *        <tr ng-repeat="payment in $ctrl.state.authorizations.data track by payment.id">
	 *          <td i18n-key="{{ ::payment.statusLabel }}"></td>
	 *          <td ng-bind="::payment.debitAccountIdentification.identification"></td>
	 *          <td ng-bind="::payment.creditAccountIdentification.identification"></td>
	 *          <td ng-bind="::payment.currency"></td>
	 *          <td ng-bind="::payment.amount | currency: ''"></td>
	 *        </tr>
	 *      </tbody>
	 *    </table>
	 *  </div>
	 */
	var hooksKey = 'widget-bb-authorization-ng:hooks';
	
	exports.default = _vendorBbAngular2.default.module('widget-bb-authorization-ng', [_modelBbPaymentNg2.default, _libBbEventBusNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).controller('AuthorizationController', [
	// dependencies to inject
	_modelBbPaymentNg.modelPaymentKey, hooksKey, _libBbEventBusNg.eventBusKey,
	/* into */
	_controller2.default]).name;

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

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _errorMessages;
	
	exports.default = AuthorizationController;
	
	var _libBbModelErrors = __webpack_require__(80);
	
	var _constants = __webpack_require__(93);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'model.error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'model.error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'model.error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'model.error.unexpected'), _errorMessages);
	
	var uiError = function uiError(messageMap, modelError) {
	  return {
	    message: messageMap[modelError.code]
	  };
	};
	
	var selections = {
	  selectedPayments: []
	};
	
	/**
	 * Defines the default pageSize for the authorizations page
	 * as defined in the widget model.xml
	 * @type {int}
	 */
	var DEFAULT_PAGE_SIZE = 20;
	
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
	 * @name AuthorizationController
	 * @type {object}
	 *
	 * @description
	 * Widget to authorize or reject payment orders
	 *
	 * @usage
	 * <div ng-controller="AuthorizationController as $ctrl">
	 *   <!-- ... -->
	 * </div>
	 */
	function AuthorizationController(model, hooks, bus) {
	  var $ctrl = this;
	  var preferences = model.getPaymentPreferences();
	  var pageSize = preferences.authorizationPageSize || DEFAULT_PAGE_SIZE;
	  var maxNavPages = preferences.maxNavPages || DEFAULT_MAX_NAV_PAGES;
	  var paginationType = preferences.paginationType || DEFAULT_PAGINATION_TYPE;
	  var dismissTime = Math.abs(preferences.notificationDismissTime) || 2;
	
	  var authorizations = {
	    rawItems: [],
	    params: {
	      from: 0,
	      size: pageSize,
	      maxNavPages: maxNavPages,
	      paginationType: paginationType,
	      orderBy: hooks.defaultSortableColumn(),
	      direction: null
	    }
	  };
	  var state = {
	    notifications: [],
	    authorizations: {
	      data: null,
	      get orderBy() {
	        return authorizations.params.orderBy;
	      },
	      get direction() {
	        return authorizations.params.direction;
	      },
	      loading: false,
	      hasMore: false,
	      error: null
	    },
	    pageParams: authorizations.params
	  };
	
	  /**
	   * @type {promise.<void>} loadMorePromise
	   */
	  var loadMorePromise = null;
	
	  /**
	   * Merges new payments with existing payments
	   *
	   * @inner
	   * @name append
	   * @type {function}
	   * @returns {array} merged array of old and new payments
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
	   * @returns {array} new payments
	   */
	  var replace = function replace(items) {
	    return items;
	  };
	
	  /**
	   * @name load
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Get pending or partially auhtorized payment orders.
	   *
	   * @returns {Promise.<array>}
	   */
	  var load = function load(merge, params) {
	    var requestParams = Object.assign({}, authorizations.params, params);
	    state.authorizations.error = null;
	    state.authorizations.loading = true;
	    return model.getPaymentsAuthorizations(requestParams).then(function (raw) {
	      state.authorizations.loading = false;
	      authorizations.rawItems = merge(raw.data, authorizations.rawItems);
	      state.authorizations.hasMore = authorizations.rawItems.length < raw.totalCount;
	
	      state.pageParams.totalItems = raw.totalCount || 0;
	      state.pageParams.currentPage = requestParams.currentPage;
	
	      return authorizations.rawItems;
	    }).then(hooks.processPayments).then(function (processedPayments) {
	      state.authorizations.data = processedPayments;
	    }).catch(function (error) {
	      state.authorizations.loading = false;
	      state.authorizations.error = uiError(errorMessages, error);
	    });
	  };
	
	  /**
	   * @name loadMore
	   *
	   * @description
	   * Loads more payments if they are available.
	   *
	   * @type {function}
	   * @param {function} done Callback to stop loading
	   * @returns {Promise.<void>}
	   */
	  var loadMore = function loadMore(done) {
	    if (state.authorizations.loading) {
	      return loadMorePromise;
	    }
	
	    authorizations.params.from++;
	
	    loadMorePromise = load(append).then(function () {
	      loadMorePromise = null;
	      done();
	    }).catch(function () {
	      loadMorePromise = null;
	      authorizations.params.from--;
	      done();
	    });
	
	    return loadMorePromise;
	  };
	
	  /**
	   * @description
	   * Get params for request.
	   *
	   * @name AuthorizationController#getRequestParams
	   *
	   * @inner
	   * @param {Object} params Custom params
	   * @type {function}
	   * @returns {Object} A request params
	   */
	  var getRequestParams = function getRequestParams(params) {
	    return Object.assign({}, authorizations.params, {
	      // In BE services pagination starts from 0 page, but in bootstrap directive it's 1
	      from: params.currentPage - 1
	    }, params);
	  };
	
	  /**
	   * @description
	   * Change page of displayed payment orders.
	   *
	   * @name AuthorizationController#changePage
	   * @type {function}
	   * @returns {Promise.<module:model-bb-payment-ng.Payments, ModelError>}
	   * A Promise with loaded payment orders
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
	    var params = authorizations.params;
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
	    Object.assign(authorizations.params, {
	      orderBy: orderBy,
	      direction: direction
	    });
	    reload();
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
	   * @name $onInit
	   * @type {function}
	   *
	   * @description
	   * Initialise the controller loading payment orders to authorize.
	   *
	   * @returns {Promise.<array>}
	   */
	  var $onInit = function $onInit() {
	    return load(replace).then(bindEvents);
	  };
	
	  /**
	   * @name removeSelectedPayment
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Remove payment id from selected payments.
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
	   * @name notifyOnAuthSuccess
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
	    bus.publish(_constants2.default.PAYMENT_AUTH_SUCCESS, res);
	  };
	
	  /**
	   * @name notifyOnAuthFail
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
	    bus.publish(_constants2.default.PAYMENT_AUTH_FAIL, err);
	  };
	
	  /**
	   * @name notifyOnMultipleAuthResult
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on multiple authorization results.
	   *
	   * @fires bb.event.payment.auth.multiple.success
	   * @fires bb.event.payment.auth.multiple.fail
	   *
	   * @returns {object}
	   */
	  var notifyOnMultipleAuthResult = function notifyOnMultipleAuthResult(res) {
	    if (res.succeeded.length) {
	      bus.publish(_constants2.default.PAYMENT_AUTH_MULTIPLE_SUCCESS, res.succeeded.length);
	    }
	
	    if (res.failed.length) {
	      bus.publish(_constants2.default.PAYMENT_AUTH_MULTIPLE_FAIL, res.failed.length);
	    }
	
	    // Keep selected failed payments only
	    selections.selectedPayments = res.failed || [];
	    selections.selectedAll = false;
	  };
	
	  /**
	   * @name authorize
	   * @type {function}
	   *
	   * @description
	   * Request payment authorization.
	   *
	   * @param {string} paymentId Id of the payment
	   *
	   * @returns {Promise}
	   */
	  var authorize = function authorize(paymentId) {
	    return model.authorizePayment(paymentId).then(notifyOnAuthSuccess).then(function () {
	      return removeSelectedPayment(paymentId);
	    }).then(reload).catch(notifyOnAuthFail);
	  };
	
	  /**
	   * @name authorizeMultiple
	   * @type {function}
	   *
	   * @description
	   * Request list of payments authorization.
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
	   * @name notifyOnRejectSuccess
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on rejection request's success.
	   *
	   * @fires bb.event.payment.reject.success
	   *
	   * @returns {object}
	   */
	  var notifyOnRejectSuccess = function notifyOnRejectSuccess(res) {
	    bus.publish(_constants2.default.PAYMENT_REJECT_SUCCESS, res);
	  };
	
	  /**
	   * @name notifyOnRejectFail
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on rejection request's failure.
	   *
	   * @fires bb.event.payment.reject.fail
	   *
	   * @returns {object}
	   */
	  var notifyOnRejectFail = function notifyOnRejectFail(err) {
	    bus.publish(_constants2.default.PAYMENT_REJECT_FAIL, err);
	  };
	
	  /**
	   * @name notifyOnMultipleRejectResult
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on multiple rejection results.
	   *
	   * @fires bb.event.payment.reject.multiple.success
	   * @fires bb.event.payment.reject.multiple.fail
	   *
	   * @returns {object}
	   */
	  var notifyOnMultipleRejectResult = function notifyOnMultipleRejectResult(res) {
	    if (res.succeeded.length) {
	      bus.publish(_constants2.default.PAYMENT_REJECT_MULTIPLE_SUCCESS, res.succeeded.length);
	    }
	
	    if (res.failed.length) {
	      bus.publish(_constants2.default.PAYMENT_REJECT_MULTIPLE_FAIL, res.failed.length);
	    }
	
	    // Keep selected failed payments only
	    selections.selectedPayments = res.failed || [];
	    selections.selectedAll = false;
	  };
	
	  /**
	   * @name reject
	   * @type {function}
	   *
	   * @description
	   * Request payment rejection.
	   *
	   * @param {string} paymentId Id of the payment
	   *
	   * @returns {Promise}
	   */
	  var reject = function reject(paymentId) {
	    return model.rejectPayment(paymentId).then(notifyOnRejectSuccess).then(function () {
	      return removeSelectedPayment(paymentId);
	    }).then(reload).catch(notifyOnRejectFail);
	  };
	
	  /**
	   * @name rejectMultiple
	   * @type {function}
	   *
	   * @description
	   * Request multiple payments rejection.
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
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	    state: state,
	    loadMore: loadMore,
	    onSort: onSort,
	    authorize: authorize,
	    authorizeMultiple: authorizeMultiple,
	    reject: reject,
	    rejectMultiple: rejectMultiple,
	    dismissTime: dismissTime,
	    selections: selections,
	    changePage: changePage
	  });
	}

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Event = {
	  PAYMENT_AUTH_SUCCESS: 'bb.event.payment.auth.success',
	  PAYMENT_AUTH_FAIL: 'bb.event.payment.auth.fail',
	  PAYMENT_AUTH_MULTIPLE_SUCCESS: 'bb.event.payment.multiple.auth.success',
	  PAYMENT_AUTH_MULTIPLE_FAIL: 'bb.event.payment.multiple.auth.fail',
	  PAYMENT_REJECT_SUCCESS: 'bb.event.payment.reject.success',
	  PAYMENT_REJECT_FAIL: 'bb.event.payment.reject.fail',
	  PAYMENT_REJECT_MULTIPLE_SUCCESS: 'bb.event.payment.multiple.reject.success',
	  PAYMENT_REJECT_MULTIPLE_FAIL: 'bb.event.payment.multiple.reject.fail',
	  NOTIFICATION_EVENT: 'bb.event.notifications.notify'
	};
	
	exports.default = Event;

/***/ }),

/***/ 94:
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
	 * Hooks for widget-bb-authorization-ng
	 */
	
	/**
	 * @name processPayments
	 * @type {function}
	 *
	 * @description
	 * Hook for processing payments.
	 *
	 * @param payments {array} Payments to process
	 * @returns {array} Processed payments
	 */
	var processPayments = exports.processPayments = function processPayments(payments) {
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

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-authorization-ng.js.map