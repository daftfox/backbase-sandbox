(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("lib-bb-event-bus-ng"), require("model-bb-payment-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-direct-debit-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-model-errors", "lib-bb-widget-extension-ng", "lib-bb-event-bus-ng", "model-bb-payment-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-direct-debit-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("lib-bb-event-bus-ng"), require("model-bb-payment-ng"));
	else
		root["widget-bb-direct-debit-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-model-errors"], root["lib-bb-widget-extension-ng"], root["lib-bb-event-bus-ng"], root["model-bb-payment-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_60__, __WEBPACK_EXTERNAL_MODULE_75__, __WEBPACK_EXTERNAL_MODULE_80__, __WEBPACK_EXTERNAL_MODULE_89__, __WEBPACK_EXTERNAL_MODULE_90__, __WEBPACK_EXTERNAL_MODULE_91__) {
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

	module.exports = __webpack_require__(95);

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_60__;

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_75__;

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

/***/ 95:
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
	
	var _libBbWidgetNg = __webpack_require__(75);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(90);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _controller = __webpack_require__(96);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(98);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var hooksKey = 'widget-bb-direct-debit-ng:hooks'; /**
	                                                   * @module widget-bb-direct-debit-ng
	                                                   *
	                                                   * @description
	                                                   * Direct Debits Widget
	                                                   *
	                                                   * @example
	                                                   *  <div ng-controller="DirectDebitController as $ctrl">
	                                                   *    <ul>
	                                                   *       <li ng-repeat="item in $ctrl.state.directDebits">{{item.id}}</li>
	                                                   *    </ul>
	                                                   *  </div>
	                                                   */
	
	
	function run(widget, bus) {
	  bus.publish('cxp.item.loaded', {
	    id: widget.getId()
	  });
	}
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('widget-bb-direct-debit-ng', [_modelBbPaymentNg2.default, _libBbWidgetNg2.default, _libBbEventBusNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).controller('DirectDebitController', [_modelBbPaymentNg.modelPaymentKey, hooksKey, _libBbWidgetNg.widgetKey, _libBbEventBusNg.eventBusKey,
	/* into */
	_controller2.default]).run([_libBbWidgetNg.widgetKey, _libBbEventBusNg.eventBusKey,
	/* into */
	run]).name;

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _errorMessages;
	
	exports.default = DirectDebitController;
	
	var _libBbModelErrors = __webpack_require__(80);
	
	var _constants = __webpack_require__(97);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'directDebit.model.error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'directDebit.model.error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'directDebit.model.error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'directDebit.model.error.unexpected'), _errorMessages);
	
	/**
	 * Defines the default pageSize for the direct debits page
	 * @type {int}
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
	 * Defines the default dismiss time for notification stripe
	 * @type {int}
	 */
	var DEFAULT_DISMISS_TIME = 3;
	
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
	 * @module widget-bb-direct-debit-ng
	 * @name DirectDebitController
	 *
	 * @description
	 * Show direct debits list
	 */
	function DirectDebitController(model, hooks, widget, eventBus) {
	  var $ctrl = this;
	
	  var preferences = model.getPaymentPreferences();
	
	  var pageSize = preferences.directDebitPageSize || DEFAULT_PAGE_SIZE;
	  var maxNavPages = preferences.directDebitMaxNavPages || DEFAULT_MAX_NAV_PAGES;
	  var paginationType = preferences.directDebitPaginationType || DEFAULT_PAGINATION_TYPE;
	  var dismissTime = preferences.notificationDismissTime || DEFAULT_DISMISS_TIME;
	
	  var directDebits = {
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
	
	  /**
	   * @description
	   * Holds current controller state made by
	   * previous method executions
	   *
	   * @name state
	   *
	   * @type {object}
	   */
	  var state = {
	    notifications: [],
	    directDebits: {
	      data: null,
	      get orderBy() {
	        return directDebits.params.orderBy;
	      },
	      get direction() {
	        return directDebits.params.direction;
	      },
	      loading: false,
	      hasMore: false
	    },
	    pageParams: directDebits.params,
	    status: null,
	    initialLoading: true,
	    error: null
	  };
	
	  /**
	   * @type {Promise.<void>} loadMorePromise
	   */
	  var loadMorePromise = null;
	
	  /**
	   * @name hasDirectDebits
	   * @description
	   * if DirectDebits found returns true else false
	   *
	   * @type {function}
	   * @returns {boolean}
	   */
	  function hasDirectDebits() {
	    return Boolean(state.directDebits.data && state.directDebits.data.length);
	  }
	
	  /**
	   * Replaces existing items with new items
	   *
	   * @inner
	   * @name replace
	   * @type {function}
	   * @returns {Array} new items
	   */
	  function replace(items) {
	    return items;
	  }
	
	  /**
	   * Merges new direct debits with existing
	   *
	   * @inner
	   * @name append
	   * @type {function}
	   * @returns {Array} merged array of old and new direct debits
	   */
	  var append = function append(newItems, existingItems) {
	    return [].concat(_toConsumableArray(existingItems), _toConsumableArray(newItems));
	  };
	
	  /**
	   * @description
	   * Get direct debit by ID.
	   *
	   * @name getDirectDebit
	   *
	   * @inner
	   * @type {function}
	   * @param {string} id Direct Debit ID
	   * @returns {object} A direct debit object
	   */
	  var getDirectDebit = function getDirectDebit(id) {
	    return state.directDebits.data.find(function (item) {
	      return item.id === id;
	    });
	  };
	
	  /**
	   * @name load
	   *
	   * @description
	   * Loads direct debits data, called from $onInit
	   *
	   * @see $onInit
	   *
	   * @type {function}
	   * @param {object} params Request params
	   * @param {function} merge Function to merge loaded direct debits to the previous ones
	   * @returns {Promise.<module:model-bb-payment-ng.DirectDebits, ModelError>}
	   * Promise which is resolved once direct debits are loaded and processed,
	   * or rejected in case of errors
	   */
	  var load = function load() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var merge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : replace;
	
	    state.directDebits.loading = true;
	    var processedParams = hooks.processRequestParams(directDebits.params, params);
	
	    return model.getDirectDebits(processedParams).then(function (raw) {
	      directDebits.rawItems = merge(raw.data, directDebits.rawItems);
	      state.directDebits.hasMore = directDebits.rawItems.length < raw.totalCount;
	
	      state.pageParams.totalItems = raw.totalCount || 0;
	      state.pageParams.currentPage = processedParams.currentPage;
	
	      return directDebits.rawItems;
	    }).then(hooks.processDirectDebits).then(function (processedDirectDebits) {
	      state.directDebits.data = processedDirectDebits;
	      state.directDebits.loading = false;
	    }).catch(function (error) {
	      state.error = uiError(error);
	      state.directDebits.loading = false;
	    });
	  };
	
	  /**
	   * @name loadMore
	   *
	   * @description
	   * Loads more direct debits if they are available.
	   *
	   * @type {function}
	   * @param {function} done Callback to stop loading
	   * @returns {Promise.<module:model-bb-payment-ng.DirectDebits, ModelError>}
	   */
	  var loadMore = function loadMore(done) {
	    if (state.directDebits.loading) {
	      return loadMorePromise;
	    }
	
	    directDebits.params.from++;
	
	    loadMorePromise = load({}, append).then(function () {
	      loadMorePromise = null;
	      done();
	    }).catch(function () {
	      loadMorePromise = null;
	      directDebits.params.from--;
	      done();
	    });
	
	    return loadMorePromise;
	  };
	
	  /**
	   * @description
	   * Get params for request.
	   *
	   * @name DirectDebitController#getRequestParams
	   *
	   * @inner
	   * @param {Object} params Custom params
	   * @type {function}
	   * @returns {Object} A request params
	   */
	  var getRequestParams = function getRequestParams(params) {
	    return Object.assign({}, directDebits.params, {
	      // In BE services pagination starts from 0 page, but in bootstrap directive it's 1
	      from: params.currentPage - 1
	    }, params);
	  };
	
	  /**
	   * @description
	   * Change page of displayed direct debits.
	   *
	   * @name DirectDebitController#changePage
	   * @type {function}
	   * @returns {Promise.<module:model-bb-payment-ng.DirectDebits, ModelError>}
	   * A Promise with loaded direct debits
	   */
	  var changePage = function changePage() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var currentParams = getRequestParams(params);
	
	    return load(currentParams);
	  };
	
	  /**
	   * @name reload
	   *
	   * @description
	   * Reloads the current collection
	   *
	   * @inner
	   * @type {function}
	   * @returns {Promise.<module:model-bb-payment-ng.DirectDebits, ModelError>}
	   */
	  var reload = function reload() {
	    var params = directDebits.params;
	    var from = 0;
	    var size = (params.from + 1) * params.size;
	    return $ctrl.load({ from: from, size: size }, replace);
	  };
	
	  /**
	   * @name onSort
	   * @type {function}
	   * @description
	   * Loads sorted list of direct debits
	   * @param  {string} orderBy   Column key to sort
	   * @param  {string} direction Sort direction
	   */
	  var onSort = function onSort(orderBy, direction) {
	    Object.assign(directDebits.params, {
	      orderBy: orderBy,
	      direction: direction
	    });
	    $ctrl.reload();
	  };
	
	  /**
	   * @name notifyOnRefundSuccess
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on refund request's success.
	   *
	   * @fires bb.event.direct.debit.refund.success
	   *
	   * @returns {object}
	   */
	  var notifyOnRefundSuccess = function notifyOnRefundSuccess(res) {
	    eventBus.publish(_constants.Event.DIRECT_DEBIT_REFUND_SUCCESS, res);
	  };
	
	  /**
	   * @name notifyOnRefundFail
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on refund request's failure.
	   *
	   * @fires bb.event.direct.debit.refund.fail
	   *
	   * @returns {object}
	   */
	  var notifyOnRefundFail = function notifyOnRefundFail(err) {
	    eventBus.publish(_constants.Event.DIRECT_DEBIT_REFUND_FAIL, err);
	  };
	
	  /**
	   * @name notifyOnRefuseSuccess
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on refuse request's success.
	   *
	   * @fires bb.event.direct.debit.refuse.success
	   *
	   * @returns {object}
	   */
	  var notifyOnRefuseSuccess = function notifyOnRefuseSuccess(res) {
	    eventBus.publish(_constants.Event.DIRECT_DEBIT_REFUSE_SUCCESS, res);
	  };
	
	  /**
	   * @name notifyOnRefuseFail
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on refuse request's failure.
	   *
	   * @fires bb.event.direct.debit.refuse.fail
	   *
	   * @returns {object}
	   */
	  var notifyOnRefuseFail = function notifyOnRefuseFail(err) {
	    eventBus.publish(_constants.Event.DIRECT_DEBIT_REFUSE_FAIL, err);
	  };
	
	  /**
	   * @name updateDirectDebitStatus
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Update direct debit status.
	   */
	  var updateDirectDebitStatus = function updateDirectDebitStatus(item) {
	    var directDebit = getDirectDebit(item.id);
	    if (directDebit) {
	      directDebit.status = _constants.ChangedStatus[directDebit.status];
	    }
	  };
	
	  /**
	   * @name refund
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Refund direct debit.
	   *
	   * @returns {Promise.<void, ModelError>}
	   */
	  var refund = function refund(item) {
	    return model.refundDirectDebit(item.id).then(function () {
	      return updateDirectDebitStatus(item);
	    }).then(notifyOnRefundSuccess).catch(notifyOnRefundFail);
	  };
	
	  /**
	   * @name refuse
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Refund direct debit.
	   *
	   * @returns {Promise.<void, ModelError>}
	   */
	  var refuse = function refuse(item) {
	    return model.refuseDirectDebit(item.id).then(function () {
	      return updateDirectDebitStatus(item);
	    }).then(notifyOnRefuseSuccess).catch(notifyOnRefuseFail);
	  };
	
	  /**
	   * @name getAvailableAction
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Get action by direct debit status.
	   *
	   * @returns {function}
	   */
	  var getAvailableAction = function getAvailableAction(status) {
	    var action = void 0;
	
	    switch (status) {
	      case 'PROCESSED':
	        action = refund;
	        break;
	      case 'ANNOUNCED':
	        action = refuse;
	        break;
	      default:
	        action = null;
	    }
	
	    return action;
	  };
	
	  /**
	   * @name directDebitAction
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Execute action over direct debit.
	   *
	   * @returns {null|Promise<void, ModelError>} Returns a Promise with action result
	   * or null if action for selected direct debit not available
	   */
	  var directDebitAction = function directDebitAction(item) {
	    var directDebit = getDirectDebit(item.id);
	    var action = getAvailableAction(item.status);
	
	    directDebit.isDisabled = true;
	
	    if (action) {
	      return action(item).then(function () {
	        directDebit.isDisabled = false;
	      });
	    }
	
	    return null;
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
	    eventBus.subscribe(_constants.Event.NOTIFICATION_EVENT, function (notification) {
	      state.notifications.push(notification);
	    });
	  };
	
	  /**
	   * @name DirectDebitController#$onInit
	   *
	   * @description
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @type {function}
	   * @returns {Promise.<module:model-bb-payment-ng.DirectDebits, ModelError>}
	   * Promise which is resolved once contoller is initialized, or rejected in case of errors
	   */
	  var $onInit = function $onInit() {
	    return load().then(bindEvents).then(function () {
	      state.initialLoading = false;
	    });
	  };
	
	  Object.assign($ctrl, {
	    state: state,
	    dismissTime: dismissTime,
	    hasDirectDebits: hasDirectDebits,
	    loadMore: loadMore,
	    onSort: onSort,
	    load: load,
	    reload: reload,
	    directDebitAction: directDebitAction,
	    /* Lifecycle hooks */
	    $onInit: $onInit,
	    changePage: changePage
	  });
	}

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Changed status enumeration
	 * @name  ChangedStatus
	 * @enum {string}
	 * @type {object}
	 */
	var ChangedStatus = exports.ChangedStatus = {
	  PROCESSED: 'REFUND_REQUESTED',
	  ANNOUNCED: 'REFUSAL_REQUESTED'
	};
	
	/**
	 * Bus events enumeration
	 * @name  Event
	 * @enum {string}
	 * @type {object}
	 */
	var Event = exports.Event = {
	  DIRECT_DEBIT_REFUND_SUCCESS: 'bb.event.direct.debit.refund.success',
	  DIRECT_DEBIT_REFUND_FAIL: 'bb.event.direct.debit.refund.fail',
	  DIRECT_DEBIT_REFUSE_SUCCESS: 'bb.event.direct.debit.refuse.success',
	  DIRECT_DEBIT_REFUSE_FAIL: 'bb.event.direct.debit.refuse.fail',
	  NOTIFICATION_EVENT: 'bb.event.notifications.notify'
	};

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name default-hooks
	 * @type {object}
	 *
	 * @description
	 * Default hooks for widget-bb-direct-debit-ng
	 */
	
	/**
	 * @name default-hooks#processRequestParams
	 *
	 * @description
	 * processRequestParams default hook
	 *
	 * @param {object} defaultParams
	 * @param {object} params
	 * @type {function}
	 * @returns {object} processed request parameters
	 */
	var processRequestParams = exports.processRequestParams = function processRequestParams(defaultParams, params) {
	  return Object.assign({}, defaultParams, params);
	};
	
	/**
	 * @name default-hooks#processDirectDebits
	 *
	 * @description
	 * processDirectDebits default hook
	 *
	 * @param {array<objects>} directDebits
	 * @type {function}
	 * @returns {array.<object>} directDebits
	 */
	var processDirectDebits = exports.processDirectDebits = function processDirectDebits(directDebits) {
	  return directDebits;
	};
	
	/**
	 * @name default-hooks#defaultSortableColumn
	 *
	 * @description
	 * defaultSortableColumn default hook
	 *
	 * @type {function}
	 * @returns {string|null}
	 */
	var defaultSortableColumn = exports.defaultSortableColumn = function defaultSortableColumn() {
	  return null;
	};
	
	/**
	 * @name default-hooks#defaultSortableDirection
	 *
	 * @description
	 * defaultSortableColumn default hook
	 *
	 * @type {function}
	 * @returns {string|null}
	 */
	var defaultSortableDirection = exports.defaultSortableDirection = function defaultSortableDirection() {
	  return null;
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-direct-debit-ng.js.map