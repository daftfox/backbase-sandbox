(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("model-bb-batch-ng"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-intent-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-batch-list-ng", ["vendor-bb-angular", "lib-bb-model-errors", "lib-bb-widget-extension-ng", "model-bb-batch-ng", "lib-bb-widget-ng", "lib-bb-event-bus-ng", "lib-bb-intent-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-batch-list-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("model-bb-batch-ng"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-intent-ng"));
	else
		root["widget-bb-batch-list-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-model-errors"], root["lib-bb-widget-extension-ng"], root["model-bb-batch-ng"], root["lib-bb-widget-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-intent-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_30__) {
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

	module.exports = __webpack_require__(25);

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
/* 19 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(19);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(26);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _modelBbBatchNg = __webpack_require__(27);
	
	var _modelBbBatchNg2 = _interopRequireDefault(_modelBbBatchNg);
	
	var _libBbWidgetNg = __webpack_require__(28);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(29);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbIntentNg = __webpack_require__(30);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _controller = __webpack_require__(31);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(33);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bb-batch-list-ng
	 *
	 * @description
	 * Batch list
	 */
	var hooksKey = 'widget-bb-batch-list-ng:hooks';
	
	exports.default = _vendorBbAngular2.default.module('widget-bb-batch-list-ng', [_modelBbBatchNg2.default, _libBbWidgetNg2.default, _libBbEventBusNg2.default, _libBbIntentNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).controller('BatchListController', [
	// dependencies to inject
	_modelBbBatchNg.modelBatchKey, hooksKey, _libBbWidgetNg.widgetKey, _libBbEventBusNg.eventBusKey,
	/* into */
	_controller2.default]).run([_libBbIntentNg.bbIntentKey, function (bbIntent) {
	  bbIntent.init();
	}]).name;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _errorMessages;
	
	exports.default = BatchListController;
	
	var _libBbModelErrors = __webpack_require__(22);
	
	var _constants = __webpack_require__(32);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'error.unexpected'), _errorMessages);
	
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
	  selectedBatches: []
	};
	
	function BatchListController(model, hooks, widget, bus) {
	  /**
	   * @name BatchListController
	   * @ngkey BatchListController
	   * @type {object}
	   * @description
	   * Batch list controller
	   */
	  var $ctrl = this;
	
	  var maxNavPages = widget.getLongPreference(_constants.Preference.MAX_NAV_PAGES) || DEFAULT_MAX_NAV_PAGES;
	  var paginationType = widget.getStringPreference(_constants.Preference.PAGINATION_TYPE) || DEFAULT_PAGINATION_TYPE;
	  var showPendingAuthorizations = widget.getBooleanPreference(_constants.Preference.SHOW_PENDING_AUTHORIZATIONS);
	
	  /**
	   * @name batches
	   * @type {object}
	   *
	   * @inner
	   * @property {array} raw Raw collection of batches
	   * @property {object} params
	   * @property {number} params.from Index of first batch to retrieve
	   * @property {number} params.size Number of batches to retrieve
	   * @property {string} params.orderBy Column key currently sorted
	   * @property {string} params.direction Sorting direction, `ASC` or `DESC`
	   */
	  var batches = {
	    raw: [],
	    totalCount: 0,
	    params: {
	      from: 0,
	      size: widget.getLongPreference(_constants.Preference.PAGE_SIZE),
	      currentPage: 1,
	      totalItems: 0,
	      maxNavPages: maxNavPages,
	      paginationType: paginationType,
	      orderBy: hooks.defaultSortableColumn(),
	      direction: null
	    }
	  };
	
	  /**
	   * @name BatchListController#state
	   * @type {object}
	   *
	   * @property {object}  batches
	   * @property {array}   batches.items List of batches
	   * @property {string}  batches.orderBy Column key currently sorted
	   * @property {string}  batches.direction Sorting direction, `ASC` or `DESC`
	   * @property {boolean} batches.loading Indicates if it is loading batches
	   * @property {object}  batches.error Store error while retrieving batches
	   */
	  var state = {
	    notifications: [],
	    dismissTime: widget.getDoublePreference(_constants.Preference.DISMISS_TIME),
	    batches: {
	      items: [],
	      get orderBy() {
	        return batches.params.orderBy;
	      },
	      get direction() {
	        return batches.params.direction;
	      },
	      hasMore: function hasMore() {
	        return batches.raw.length < batches.totalCount;
	      },
	      loading: false,
	      error: null
	    },
	    pageParams: batches.params,
	    legalEntityId: 'legalentityId',
	    initialLoading: true
	  };
	
	  /**
	   * Merges new batches with existing batches
	   *
	   * @inner
	   * @name append
	   * @type {function}
	   * @returns {array} merged array of old and new batches
	   */
	  var append = function append(newItems, existingItems) {
	    return [].concat(_toConsumableArray(existingItems), _toConsumableArray(newItems));
	  };
	
	  /**
	   * Replaces existing batches with new batches
	   *
	   * @inner
	   * @name replace
	   * @type {function}
	   * @returns {array} new batches
	   */
	  var replace = function replace(items) {
	    return items;
	  };
	
	  /**
	   * @name getBatchesPromise
	   *
	   * @description
	   * Loads all or pending authorization batches,
	   * depending on showPendingAuthorizations property
	   * @inner
	   * @type {function}
	   *
	   * @param params A request params
	   * @returns {Promise}
	   */
	  function getBatchesPromise() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    if (showPendingAuthorizations) {
	      return model.getBatchesAuthorizations(state.legalEntityId, params);
	    }
	
	    return model.getBatches(state.legalEntityId, params);
	  }
	
	  /**
	   * @name load
	   *
	   * @description
	   * Loads batches data, called from $onInit
	   * @inner
	   * @see $onInit
	   *
	   * @type {function}
	   * @returns {Promise}
	   */
	  function load(query) {
	    var merge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : replace;
	
	    state.batches.error = null;
	    state.batches.loading = true;
	    var params = Object.assign({}, batches.params, query || {});
	    return getBatchesPromise(params).then(function (raw) {
	      state.batches.loading = false;
	      batches.raw = merge(raw.data, batches.raw);
	      batches.totalCount = raw.totalCount;
	      batches.params.totalItems = raw.totalCount || 0;
	      batches.params.currentPage = params.currentPage;
	      state.batches.items = hooks.processBatches(batches.raw);
	      return state.batches.items;
	    }).catch(function (error) {
	      state.batches.error = uiError(error);
	      state.batches.loading = false;
	    });
	  }
	
	  /**
	   * @description
	   * Get params for request.
	   *
	   * @name BatchListController#getRequestParams
	   *
	   * @inner
	   * @param {Object} params Custom params
	   * @type {function}
	   * @returns {Object} A request params
	   */
	  var getRequestParams = function getRequestParams(params) {
	    return Object.assign({}, batches.params, {
	      // In BE services pagination starts from 0 page, but in bootstrap directive it's 1
	      from: params.currentPage - 1
	    }, params);
	  };
	
	  /**
	   * @description
	   * Change page of displayed batches.
	   *
	   * @name BatchListController#changePage
	   * @type {function}
	   * @returns {Promise.<module:model-bb-batch-ng.Batches, ModelError>}
	   * A Promise with loaded batches
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
	   * Reloads batches data
	   * @inner
	   *
	   * @type {function}
	   * @returns {Promise}
	   */
	  var reload = function reload() {
	    return load({
	      from: state.pageParams.currentPage ? state.pageParams.currentPage - 1 : 0,
	      size: batches.params.size
	    });
	  };
	
	  /**
	   * @name BatchListController#loadMore
	   *
	   * @description
	   * Loads next page of items
	   *
	   * @type {function}
	   * @param {function} done Callback to call when finished loading
	   * @returns {Promise}
	   */
	  var loadMore = function loadMore(done) {
	    batches.params.from += batches.params.size;
	    return load({}, append).then(done, done);
	  };
	
	  /**
	   * @name BatchListController#onSort
	   * @type {function}
	   * @description
	   * Loads sorted list of batches
	   * @param  {string} orderBy   Column key to sort
	   * @param  {string} direction Sort direction
	   */
	  var onSort = function onSort(orderBy, direction) {
	    Object.assign(batches.params, {
	      orderBy: orderBy,
	      direction: direction
	    });
	    reload();
	  };
	
	  /**
	   * @name removeSelectedBatch
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Remove batch id from selected batches orders.
	   *
	   * @returns {void}
	   */
	  var removeSelectedBatch = function removeSelectedBatch(batchId) {
	    var selected = selections.selectedBatches;
	    var index = selected.findIndex(function (id) {
	      return id === batchId;
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
	   * @fires bb.event.batch.auth.success
	   *
	   * @returns {object}
	   */
	  var notifyOnAuthSuccess = function notifyOnAuthSuccess(res) {
	    bus.publish(_constants.Event.BATCH_AUTH_SUCCESS, res);
	  };
	
	  /**
	   * @name notifyOnAuthFail
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on authorization request's failure.
	   *
	   * @fires bb.event.batch.auth.fail
	   *
	   * @returns {object}
	   */
	  var notifyOnAuthFail = function notifyOnAuthFail(err) {
	    bus.publish(_constants.Event.BATCH_AUTH_FAIL, err);
	  };
	
	  /**
	   * @name authorize
	   * @type {function}
	   *
	   * @description
	   * Request batch authorization.
	   *
	   * @param {string} batchId Id of the batch
	   *
	   * @returns {Promise}
	   */
	  var authorize = function authorize(batchId) {
	    return model.authorizeBatch(state.legalEntityId, batchId).then(notifyOnAuthSuccess).then(function () {
	      return removeSelectedBatch(batchId);
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
	   * @fires bb.event.bactch.auth.multiple.success
	   * @fires bb.event.bactch.auth.multiple.fail
	   *
	   * @returns {object}
	   */
	  var notifyOnMultipleAuthResult = function notifyOnMultipleAuthResult(res) {
	    if (res.succeeded.length) {
	      bus.publish(_constants.Event.BATCH_AUTH_MULTIPLE_SUCCESS, res.succeeded.length);
	    }
	
	    if (res.failed.length) {
	      bus.publish(_constants.Event.BATCH_AUTH_MULTIPLE_FAIL, res.failed.length);
	    }
	
	    // Keep selected failed payments only
	    selections.selectedBatches = res.failed || [];
	    selections.selectedAll = false;
	  };
	
	  /**
	   * @name authorizeMultiple
	   * @type {function}
	   *
	   * @description
	   * Request list of batches authorization.
	   *
	   * @param {array} selectedBatches Collection of batches id
	   *
	   * @returns {Promise}
	   */
	  var authorizeMultiple = function authorizeMultiple(selectedBatches) {
	    return model.authorizeMultipleBatches(state.legalEntityId, selectedBatches).then(notifyOnMultipleAuthResult).then(reload).catch(function (error) {
	      state.batches.error = uiError(error);
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
	   * @fires bb.event.batch.reject.success
	   *
	   * @returns {object}
	   */
	  var notifyOnRejectSuccess = function notifyOnRejectSuccess(res) {
	    bus.publish(_constants.Event.BATCH_REJECT_SUCCESS, res);
	  };
	
	  /**
	   * @name notifyOnRejectFail
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on rejection request's failure.
	   *
	   * @fires bb.event.batch.reject.fail
	   *
	   * @returns {object}
	   */
	  var notifyOnRejectFail = function notifyOnRejectFail(err) {
	    bus.publish(_constants.Event.BATCH_REJECT_FAIL, err);
	  };
	
	  /**
	   * @name reject
	   * @type {function}
	   *
	   * @description
	   * Request batch rejection.
	   *
	   * @param {string} batchId Id of the batch
	   *
	   * @returns {Promise}
	   */
	  var reject = function reject(batchId) {
	    return model.rejectBatch(state.legalEntityId, batchId).then(notifyOnRejectSuccess).then(function () {
	      return removeSelectedBatch(batchId);
	    }).then(reload).catch(notifyOnRejectFail);
	  };
	
	  /**
	    * @name notifyOnMultipleRejectResult
	    * @type {function}
	    * @inner
	    *
	    * @description
	    * Emit events based on multiple rejection results.
	    *
	    * @fires bb.event.batch.reject.multiple.success
	    * @fires bb.event.batch.reject.multiple.fail
	    *
	    * @returns {object}
	    */
	  var notifyOnMultipleRejectResult = function notifyOnMultipleRejectResult(res) {
	    if (res.succeeded.length) {
	      bus.publish(_constants.Event.BATCH_REJECT_MULTIPLE_SUCCESS, res.succeeded.length);
	    }
	
	    if (res.failed.length) {
	      bus.publish(_constants.Event.BATCH_REJECT_MULTIPLE_FAIL, res.failed.length);
	    }
	
	    // Keep selected failed payments only
	    selections.selectedBatches = res.failed || [];
	    selections.selectedAll = false;
	  };
	
	  /**
	   * @name rejectMultiple
	   * @type {function}
	   *
	   * @description
	   * Request multiple bacthes rejection.
	   *
	   * @param {array} selectedBatches Collection of batches id
	   *
	   * @returns {Promise}
	   */
	  var rejectMultiple = function rejectMultiple(selectedBatches) {
	    return model.rejectMultipleBatches(state.legalEntityId, selectedBatches).then(notifyOnMultipleRejectResult).then(reload).catch(function (error) {
	      state.batches.error = uiError(error);
	    });
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
	    bus.subscribe(_constants.Event.NOTIFICATION_EVENT, function (notification) {
	      state.notifications.push(notification);
	    });
	  };
	
	  /**
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @name BatchListController#$onInit
	   * @type {function}
	   */
	  var $onInit = function $onInit() {
	    return load().then(bindEvents).then(function () {
	      return state.initialLoading = false;
	    }).catch(function () {
	      return state.initialLoading = false;
	    });
	  };
	
	  Object.assign($ctrl, {
	    state: state,
	    $onInit: $onInit,
	    loadMore: loadMore,
	    onSort: onSort,
	    authorize: authorize,
	    authorizeMultiple: authorizeMultiple,
	    reject: reject,
	    rejectMultiple: rejectMultiple,
	    selections: selections,
	    changePage: changePage
	  });
	}

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Preference
	 * @type {object}
	 *
	 * @description
	 * Widget preferences enum
	 *
	 * @property {string} PAGE_SIZE Number of items per page
	 * @property {number} MAX_NAV_PAGES Number of pagination items
	 * @property {string} PAGINATION_TYPE Type of pagination (paginator, load-more)
	 * @property {boolean} SHOW_PENDING_AUTHORIZATIONS Show only pending authorization batches
	 */
	var Preference = exports.Preference = {
	  PAGE_SIZE: 'bb.batch-list.pageSize',
	  MAX_NAV_PAGES: 'bb.batch-list.maxNavPages',
	  PAGINATION_TYPE: 'bb.batch-list.paginationType',
	  DISMISS_TIME: 'bb.batch-list.notificationDismissTime',
	  SHOW_PENDING_AUTHORIZATIONS: 'bb.batch-list.showPendingAuthorizations'
	};
	
	/**
	 * @name Event
	 * @type {object}
	 *
	 * @description
	 * Widget events names
	 */
	var Event = exports.Event = {
	  BATCH_AUTH_SUCCESS: 'bb.event.batch.auth.success',
	  BATCH_AUTH_FAIL: 'bb.event.batch.auth.fail',
	  BATCH_AUTH_MULTIPLE_SUCCESS: 'bb.event.batch.multiple.auth.success',
	  BATCH_AUTH_MULTIPLE_FAIL: 'bb.event.batch.multiple.auth.fail',
	  BATCH_REJECT_SUCCESS: 'bb.event.batch.reject.success',
	  BATCH_REJECT_FAIL: 'bb.event.batch.reject.fail',
	  BATCH_REJECT_MULTIPLE_SUCCESS: 'bb.event.batch.multiple.reject.success',
	  BATCH_REJECT_MULTIPLE_FAIL: 'bb.event.batch.multiple.reject.fail',
	  NOTIFICATION_EVENT: 'bb.event.notifications.notify'
	};

/***/ }),
/* 33 */
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
	 * Default hooks for widget-bb-batch-list-ng
	 */
	
	/**
	 * @name default-hooks#processBatches
	 *
	 * @description
	 * processBatches default hook
	 *
	 * @param {object} batches Collection of batches
	 * @type {function}
	 * @returns {object} batches
	 */
	var processBatches = exports.processBatches = function processBatches(batches) {
	  return batches;
	};
	
	/**
	 * @name default-hooks#defaultSortableColumn
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
/******/ ])
});
;
//# sourceMappingURL=widget-bb-batch-list-ng.js.map