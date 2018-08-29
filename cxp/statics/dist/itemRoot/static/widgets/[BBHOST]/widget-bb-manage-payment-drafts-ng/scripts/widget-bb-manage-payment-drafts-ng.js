(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("model-bb-payment-orders-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-manage-payment-drafts-ng", ["vendor-bb-angular", "lib-bb-model-errors", "lib-bb-widget-extension-ng", "lib-bb-intent-ng", "model-bb-payment-orders-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-manage-payment-drafts-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("model-bb-payment-orders-ng"));
	else
		root["widget-bb-manage-payment-drafts-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-model-errors"], root["lib-bb-widget-extension-ng"], root["lib-bb-intent-ng"], root["model-bb-payment-orders-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_148__, __WEBPACK_EXTERNAL_MODULE_194__, __WEBPACK_EXTERNAL_MODULE_195__, __WEBPACK_EXTERNAL_MODULE_196__) {
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

	module.exports = __webpack_require__(224);

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_148__;

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

/***/ 224:
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
	
	var _libBbIntentNg = __webpack_require__(195);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _controller = __webpack_require__(225);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(226);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bb-manage-payment-drafs-ng
	 *
	 * @description
	 * Widget for the payment order drafts functionalities
	 */
	var hooksKey = 'widget-bb-payment-order-ng:hooks';
	
	exports.default = _vendorBbAngular2.default.module('widget-bb-manage-payment-drafts-ng', [_modelBbPaymentOrdersNg2.default, _libBbIntentNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).factory(_libBbWidgetExtensionNg.extensionContextKey, [_modelBbPaymentOrdersNg.modelPaymentOrdersKey, function (model) {
	  return {
	    model: model
	  };
	}]).controller('PaymentDraftController', [
	// dependencies to inject
	_modelBbPaymentOrdersNg.modelPaymentOrdersKey, hooksKey, _libBbIntentNg.bbIntentKey,
	/* into */
	_controller2.default]).name;

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _errorMessages;
	
	exports.default = PaymentDraftController;
	
	var _libBbModelErrors = __webpack_require__(148);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'error.unexpected'), _errorMessages);
	
	/**
	 * Defines the default pageSize for the payment drafts page
	 * as defined in the widget model.xml
	 * @type {number}
	 */
	var DEFAULT_PAGE_SIZE = 50;
	
	/**
	 * Defines the default maxNavPages for payment drafts page
	 * as defined in the widget model.xml
	 * @type {int}
	 */
	var DEFAULT_MAX_NAV_PAGES = 3;
	
	/**
	 * Defines the default paginationType for payment drafts page
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
	
	/**
	 * @name PaymentDraftController
	 * @type {object}
	 * @description
	 * Shows paymant drafts list
	 *
	 * @usage
	 * <div ng-controller="PaymentDraftController as $ctrl">
	 *   <!-- ... -->
	 * </div>
	 */
	function PaymentDraftController(model, hooks) {
	  var $ctrl = this;
	  var preferences = model.getPaymentDraftsPreferences();
	  var pageSize = preferences.paymentDraftsPageSize || DEFAULT_PAGE_SIZE;
	  var maxNavPages = preferences.paymentDraftsMaxNavPages || DEFAULT_MAX_NAV_PAGES;
	  var paginationType = preferences.paymentDraftsPaginationType || DEFAULT_PAGINATION_TYPE;
	  var dismissTime = Math.abs(preferences.paymentDraftsNotificationDismissTime) || 3;
	
	  var paymentDrafts = {
	    rawItems: [],
	    params: {
	      from: 0,
	      size: pageSize,
	      currentPage: 1,
	      totalItems: 0,
	      maxNavPages: maxNavPages,
	      paginationType: paginationType,
	      orderBy: hooks.defaultSortableColumn(),
	      direction: hooks.defaultSortableDirection(),
	      query: null
	    }
	  };
	
	  var state = {
	    notifications: [],
	    paymentDrafts: {
	      data: [],
	      get orderBy() {
	        return paymentDrafts.params.orderBy;
	      },
	      get direction() {
	        return paymentDrafts.params.direction;
	      },
	      loading: false,
	      hasMore: false,
	      error: null
	    },
	    pageParams: paymentDrafts.params,
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
	   * Loading payment drafts
	   *
	   * @inner
	   * @type {function}
	   *
	   * @param {function} merge
	   * @param {object} params
	   * @return {Promise.<module:model-bb-payment-ng.PaymentDrafts, ModelError>} A promise
	   */
	  var load = function load(merge, params) {
	    if (!merge) {
	      // eslint-disable-next-line no-param-reassign
	      merge = Object.assign(replace);
	    }
	    var requestParams = Object.assign({}, hooks.truncateParams(paymentDrafts.params), params);
	    state.paymentDrafts.loading = true;
	
	    return model.getPaymentDrafts(requestParams).then(function (raw) {
	      state.paymentDrafts.loading = false;
	      paymentDrafts.rawItems = merge(raw.data, paymentDrafts.rawItems);
	      state.paymentDrafts.hasMore = paymentDrafts.rawItems.length < raw.totalCount;
	
	      state.pageParams.totalItems = raw.totalCount || 0;
	      state.pageParams.currentPage = requestParams.currentPage;
	
	      return paymentDrafts.rawItems;
	    }).then(hooks.processPaymentDrafts).then(function (processedPaymentDrafts) {
	      state.paymentDrafts.data = processedPaymentDrafts;
	    }).catch(function (error) {
	      state.error = uiError(error);
	      state.paymentDrafts.loading = false;
	    });
	  };
	
	  /**
	   * @name PaymentDraftController#loadMore
	   *
	   * @description
	   * Loads more payment drafts if they are available.
	   *
	   * @type {function}
	   * @param {function} done Callback to stop loading
	   * @return {Promise.<module:model-bb-payment-ng.PaymentDrafts, ModelError>} A promise
	   */
	  var loadMore = function loadMore(done) {
	    if (state.paymentDrafts.loading) {
	      return loadMorePromise;
	    }
	
	    paymentDrafts.params.from++;
	
	    loadMorePromise = load(append).then(function () {
	      loadMorePromise = null;
	      done();
	    }).catch(function () {
	      loadMorePromise = null;
	      paymentDrafts.params.from--;
	      done();
	    });
	
	    return loadMorePromise;
	  };
	
	  /**
	   * @description
	   * Get params for request.
	   *
	   * @name PaymentDraftController#getRequestParams
	   *
	   * @inner
	   * @param {Object} params Custom params
	   * @type {function}
	   * @returns {Object} A request params
	   */
	  var getRequestParams = function getRequestParams(params) {
	    return Object.assign({}, paymentDrafts.params, {
	      // In BE services pagination starts from 0 page, but in bootstrap directive it's 1
	      from: params.currentPage - 1
	    }, params);
	  };
	
	  /**
	   * @description
	   * Change page of payment drafts.
	   *
	   * @name PaymentDraftController#changePage
	   * @type {function}
	   * @returns {Promise.<module:model-bb-payment-ng.PaymentDrafts, ModelError>}
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
	    var params = paymentDrafts.params;
	    var currentPage = state.pageParams.currentPage;
	    var from = state.pageParams.currentPage ? state.pageParams.currentPage - 1 : 0;
	    var size = (params.from + 1) * params.size;
	    return load(replace, { currentPage: currentPage, from: from, size: size });
	  };
	
	  /**
	   * @name onSort
	   * @type {function}
	   * @description
	   * Loads sorted list of payment drafts
	   * @param  {string} orderBy   Column key to sort
	   * @param  {string} direction Sort direction
	   */
	  var onSort = function onSort(orderBy, direction) {
	    Object.assign(paymentDrafts.params, {
	      orderBy: orderBy,
	      direction: direction
	    });
	    reload();
	  };
	
	  /**
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @name PaymentDraftController#$onInit
	   * @type {function}
	   * @returns {Promise.<module:model-bb-payment-ng.PaymentDrafts, ModelError>}
	   */
	  var $onInit = function $onInit() {
	    return load(replace).then(function () {
	      state.initialLoading = false;
	    }).catch(function () {
	      state.initialLoading = false;
	    });
	  };
	
	  /**
	   * @name deleteDraft
	   * @type {function}
	   * @description
	   * Save draft payment
	   *
	   * @param {string} draftPaymentId
	   * @returns {Promise}
	   */
	  var deleteDraft = function deleteDraft(draftPaymentId) {
	    return model.deleteDraft(draftPaymentId);
	  };
	
	  Object.assign($ctrl, {
	    state: state,
	    dismissTime: dismissTime,
	    load: load,
	    $onInit: $onInit,
	    loadMore: loadMore,
	    onSort: onSort,
	    changePage: changePage,
	    deleteDraft: deleteDraft,
	    reload: reload
	  });
	}

/***/ }),

/***/ 226:
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
	 * Hooks for widget-bb-mangage-payment-drafts-ng
	 */
	
	/**
	 * @name Hooks#processPaymentDrafts
	 * @type {function}
	 *
	 * @description
	 * Hook for processing payment drafts.
	 *
	 * @param drafts {array} drafts to process
	 * @returns {array} Processed drafts
	 */
	var processPaymentDrafts = exports.processPaymentDrafts = function processPaymentDrafts(drafts) {
	  return drafts;
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
	
	/**
	 * @name Hooks#truncateParams
	 *
	 * @description
	 * truncateParams default hook
	 *
	 * @type {function}
	 * @returns {object}
	 */
	var truncateParams = exports.truncateParams = function truncateParams(params) {
	  return params;
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-manage-payment-drafts-ng.js.map