(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("model-bb-payment-orders-ng"), require("lib-bb-state-container-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-manage-payment-orders-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-model-errors", "lib-bb-event-bus-ng", "lib-bb-widget-extension-ng", "model-bb-payment-orders-ng", "lib-bb-state-container-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-manage-payment-orders-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("model-bb-payment-orders-ng"), require("lib-bb-state-container-ng"));
	else
		root["widget-bb-manage-payment-orders-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-model-errors"], root["lib-bb-event-bus-ng"], root["lib-bb-widget-extension-ng"], root["model-bb-payment-orders-ng"], root["lib-bb-state-container-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_142__, __WEBPACK_EXTERNAL_MODULE_148__, __WEBPACK_EXTERNAL_MODULE_193__, __WEBPACK_EXTERNAL_MODULE_194__, __WEBPACK_EXTERNAL_MODULE_196__, __WEBPACK_EXTERNAL_MODULE_203__) {
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

	module.exports = __webpack_require__(227);

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

/***/ 196:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_196__;

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_203__;

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(194);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbStateContainerNg = __webpack_require__(203);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _libBbWidgetNg = __webpack_require__(142);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(193);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _modelBbPaymentOrdersNg = __webpack_require__(196);
	
	var _modelBbPaymentOrdersNg2 = _interopRequireDefault(_modelBbPaymentOrdersNg);
	
	var _constants = __webpack_require__(228);
	
	var _controller = __webpack_require__(229);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(230);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	var _service = __webpack_require__(231);
	
	var _service2 = _interopRequireDefault(_service);
	
	var _index = __webpack_require__(232);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var hooksKey = 'widget-bb-manage-payment-orders-ng:hooks'; /**
	                                                            * @module widget-bb-manage-payment-orders-ng
	                                                            *
	                                                            * @description
	                                                            * Widget to manage payment orders
	                                                            */
	
	var serviceKey = 'widget-bb-manage-payment-orders-ng:service';
	var viewModelKey = 'widget-bb-manage-payment-orders-ng:viewModel';
	
	exports.default = _vendorBbAngular2.default.module('widget-bb-manage-payment-orders-ng', [_modelBbPaymentOrdersNg2.default, _libBbWidgetNg2.default, _libBbStateContainerNg2.default, _libBbEventBusNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).factory(serviceKey, [_modelBbPaymentOrdersNg.modelPaymentOrdersKey, viewModelKey, hooksKey,
	/* into */
	_service2.default]).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey, _libBbWidgetNg.widgetKey, hooksKey,
	/* into */
	_index2.default]).controller('ManagePaymentOrderController', [_libBbWidgetNg.widgetKey, hooksKey, viewModelKey, serviceKey, _libBbEventBusNg.eventBusKey,
	/* into */
	_controller2.default]).run([viewModelKey, _libBbWidgetNg.widgetKey, _libBbEventBusNg.eventBusKey, function (viewModel, widget, eventBus) {
	  viewModel.init();
	  eventBus.publish(_constants.Event.BB_ITEM_LOADED, { id: widget.getId() });
	}]).name;

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable import/prefer-default-export */
	/**
	 * Widget events enum
	 * @type {object}
	 */
	var Event = exports.Event = {
	  PRODUCT_SELECTED: 'bb.event.product.selected',
	  BB_ITEM_LOADED: 'bb.item.loaded',
	  PAYMENT_EDIT: {
	    SEPA_CREDIT_TRANSFER: 'bb.event.payment.edit.sepa.credit.transfer',
	    INTERNAL: 'bb.event.payment.edit.internal'
	  },
	  PAYMENT_EDIT_DONE: 'bb.event.payment.edit.done',
	  PAYMENT_EDIT_CANCELLED: 'bb.event.payment.edit.cancelled',
	  NOTIFICATION_EVENT: 'bb.event.notifications.notify',
	  PAYMENT_CANCEL_SUCCESS: 'bb.event.payment.cancel.success',
	  PAYMENT_CANCEL_ERROR: 'bb.event.payment.cancel.error'
	};

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ManagePaymentOrderController;
	
	var _constants = __webpack_require__(228);
	
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
	function ManagePaymentOrderController(widget, hooks, viewModel, service, eventBus) {
	  var $ctrl = this;
	
	  var getLoadParams = function getLoadParams() {
	    var combiningParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var state = viewModel.getState();
	    var product = state.selectedProduct;
	
	    return hooks.processRequestParams(Object.assign({}, state.paymentOrders.requestParams, {
	      query: product ? product.identifier : null
	    }, combiningParams));
	  };
	
	  /**
	   * @description
	   * Handles loading payment orders
	   *
	   * @name ManagePaymentOrderController#load
	   * @type {function}
	   * @param {object} params request params
	   * @param {object} options options for loading data
	   * @returns {promise.<array>}
	   */
	  var load = function load() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    return service.load(getLoadParams(params), options);
	  };
	
	  /**
	   * @description
	   * Handles loading more payment orders
	   *
	   * @name ManagePaymentOrderController#load
	   * @type {function}
	   * @param {function} doneFn - load more callback
	   */
	  var loadMore = function loadMore() {
	    var doneFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
	
	    load({ from: viewModel.getState().paymentOrders.requestParams.from + 1 }).catch(doneFn()).then(doneFn());
	  };
	
	  /**
	   * @description
	   * Handles product change: setup selected product in the viewModel and
	   * load payment by selected product.
	   *
	   * @name ManagePaymentOrderController#onProductChange
	   * @type {function}
	   * @param {Object} product selected product
	   */
	  var onProductChange = function onProductChange(product) {
	    viewModel.product.afterLoadSuccess(product ? product.id : null);
	    load({ from: 0 }, { replace: true });
	  };
	
	  /**
	   * @description
	   * Handles edit of payment
	   *
	   * @name ManagePaymentOrderController#edit
	   * @type {function}
	   * @param {Object} payment payment to edit
	   */
	  var edit = function edit(payment) {
	    viewModel.visibility.change(true);
	    eventBus.publish(_constants.Event.PAYMENT_EDIT[payment.paymentType], payment);
	  };
	
	  /**
	   * @description
	   * Handles cancel of payment
	   *
	   * @name ManagePaymentOrderController#cancel
	   * @type {function}
	   * @param {Object} payment payment to cancel
	   */
	  var cancel = function cancel(payment) {
	    service.cancel(payment).then(function (raw) {
	      eventBus.publish(_constants.Event.PAYMENT_CANCEL_SUCCESS, raw);
	      load({ from: 0 }, { replace: true });
	    }).catch(function (err) {
	      return eventBus.publish(_constants.Event.PAYMENT_CANCEL_ERROR, err);
	    });
	  };
	
	  /**
	   * @description
	   * Delete current notification from viewState
	   *
	   * @name ManagePaymentOrderController#deleteNotification
	   * @type {function}
	   * @param {Object} notification current notification
	   */
	  var deleteNotification = function deleteNotification(notification) {
	    viewModel.notifications.deleteNotification(notification);
	  };
	
	  /**
	   * @description
	   * Adds subscriptions to bus events
	   *
	   * @inner
	   * @name bindEvents
	   * @type {function}
	   */
	  function bindEvents() {
	    eventBus.subscribe(_constants.Event.PRODUCT_SELECTED, function (_ref) {
	      var product = _ref.product;
	
	      load({ query: product ? product.identifier : null }, { replace: true });
	    });
	    eventBus.subscribe(_constants.Event.PAYMENT_EDIT_DONE, function () {
	      load({ from: 0 }, { replace: true });
	      viewModel.visibility.change(false);
	    });
	    eventBus.subscribe(_constants.Event.NOTIFICATION_EVENT, function (notification) {
	      viewModel.notifications.updateNotifications(notification);
	    });
	    eventBus.subscribe(_constants.Event.PAYMENT_EDIT_CANCELLED, function () {
	      viewModel.visibility.change(false);
	    });
	  }
	
	  /**
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @name ManagePaymentOrderController#$onInit
	   * @type {function}
	   * @returns {Promise.<Payments, module:lib-bb-model-errors.ModelError>}
	   *  A promise
	   */
	  var $onInit = function $onInit() {
	    return service.loadProducts().then(service.setupSelectedProduct).then(load).then(function () {
	      return service.loadRate(viewModel.getState().rate.requestParams);
	    }).then(bindEvents).then(viewModel.initList.afterLoadDone).catch(viewModel.initList.afterLoadDone);
	  };
	
	  Object.assign($ctrl, {
	    get state() {
	      return viewModel.getState();
	    },
	    loadMore: loadMore,
	    onProductChange: onProductChange,
	    edit: edit,
	    cancel: cancel,
	    deleteNotification: deleteNotification,
	    $onInit: $onInit
	  });
	}
	
	/**
	 * Payments type definition
	 * @typedef {module:model-bb-payment-orders-ng.Payments} Payments
	 */

/***/ }),

/***/ 230:
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
	 * Hooks for widget-bb-manage-payment-orders-ng
	 */
	
	/**
	 * @name Hooks#processPaymentOrders
	 * @type {function}
	 *
	 * @description
	 * Hook for processing payment orders.
	 *
	 * @param {array} paymentOrders Paument orders to process
	 * @returns {array} Processed payments orders
	 */
	var processPaymentOrders = exports.processPaymentOrders = function processPaymentOrders(paymentOrders) {
	  return paymentOrders;
	};
	
	/**
	 * @name Hooks#processRequestParams
	 * @type {function}
	 *
	 * @description
	 * Hook for processing payment orders.
	 *
	 * @param {array} requestParams Request params
	 * @returns {array} Processed request params
	 */
	var processRequestParams = exports.processRequestParams = function processRequestParams(requestParams) {
	  return requestParams;
	};

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name ManagePaymentOrderService
	 * @type {object}
	 * @ngkey widget-bb-manage-payment-orderrs-ng:service
	 * @description
	 * The service encapsulates the core functionality of the Payment Orders Widget.
	 * It co-ordinates the communication of data from the `Model` with the communication with the user
	 * by updating the {@link ViewState}.
	 *
	 * Asynchronous methods update the {@link ViewState} in 3 potential
	 * stages; "before", "success", and "error", to allow the view to
	 * provide feedback to the user.
	 */
	exports.default = function (model, viewModel) {
	  return {
	    /**
	     * @name ManagePaymentOrderService#load
	     * @type {function}
	     * @description
	     * Fetch payment orders from the model and update the {@link ViewState} to display them.
	     * @param {Object} params Request params
	     * @return {Promise}
	     */
	    load: function load(params, options) {
	      viewModel.list.beforeLoad();
	
	      return model.getPaymentOrders(params).then(function (raw) {
	        viewModel.list.afterLoadSuccess({
	          rawData: raw.data,
	          totalCount: raw.totalCount,
	          requestParams: params,
	          replace: !!options.replace
	        });
	      }).catch(function (error) {
	        viewModel.list.afterLoadError(error);
	
	        throw error;
	      });
	    },
	
	    /**
	     * @name ManagePaymentOrderService#loadRate
	     * @type {function}
	     * @description
	     * Fetch a exchange rate from the model and update the {@link ViewState} to display them.
	     * @param {Object} params Request params
	     * @return {Promise}
	     */
	    loadRate: function loadRate(params) {
	      viewModel.rate.beforeLoad();
	
	      return model.getRate(params).then(function (rate) {
	        viewModel.rate.afterLoadSuccess(rate);
	      }).catch(function (error) {
	        viewModel.rate.afterLoadError(error);
	      });
	    },
	
	    /**
	     * @name ManagePaymentOrderService#loadProducts
	     * @type {function}
	     * @description
	     * Fetch products from the model and update the {@link ViewState} to display them.
	     * @return {Promise}
	     */
	    loadProducts: function loadProducts() {
	      viewModel.products.beforeLoad();
	
	      return model.getAccountsFrom().then(function (products) {
	        viewModel.products.afterLoadSuccess(products);
	      }).catch(function (error) {
	        viewModel.products.afterLoadError(error);
	      });
	    },
	
	    /**
	     * @name ManagePaymentOrderService#setupSelectedProduct
	     * @type {function}
	     * @description
	     * Fetch selected product id and update `ViewState`.
	     * @return {Promise}
	     */
	    setupSelectedProduct: function setupSelectedProduct() {
	      return model.getProductSelectedId().then(function (productId) {
	        viewModel.product.afterLoadSuccess(productId);
	      });
	    },
	
	    /**
	     * @name ManagePaymentOrderService#cancel
	     * @type {function}
	     * @description
	     * Cancels given payment and update the {@link ViewState} according to response.
	     * @param {Object} payment Payment to cancel
	     * @return {Promise}
	     */
	    cancel: function cancel(payment) {
	      viewModel.delete.beforeDelete();
	
	      return model.cancelPayment(payment.id).then(function () {
	        viewModel.delete.afterDeleteSuccess();
	      }).catch(function (error) {
	        viewModel.delete.afterDeleteError(error);
	      });
	    }
	  };
	};

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _initialState = __webpack_require__(233);
	
	var _initialState2 = _interopRequireDefault(_initialState);
	
	var _init = __webpack_require__(234);
	
	var _init2 = _interopRequireDefault(_init);
	
	var _list = __webpack_require__(235);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _rate = __webpack_require__(237);
	
	var _rate2 = _interopRequireDefault(_rate);
	
	var _product = __webpack_require__(238);
	
	var _product2 = _interopRequireDefault(_product);
	
	var _products = __webpack_require__(239);
	
	var _products2 = _interopRequireDefault(_products);
	
	var _visibility = __webpack_require__(240);
	
	var _visibility2 = _interopRequireDefault(_visibility);
	
	var _notifications = __webpack_require__(241);
	
	var _notifications2 = _interopRequireDefault(_notifications);
	
	var _delete = __webpack_require__(242);
	
	var _delete2 = _interopRequireDefault(_delete);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Defines the default page size for the transactions page
	 * @type {number}
	 * @inner
	 */
	var DEFAULT_PAGE_SIZE = 50; // Combine state reducers
	
	exports.default = function (stateContainer, widget, hooks) {
	  var stateParams = {
	    pageSize: widget.getLongPreference('bb.paymentOrders.pageSize') || DEFAULT_PAGE_SIZE,
	    dismissMessageTime: widget.getLongPreference('bb.paymentOrders.dismissMessageTime')
	  };
	  var initialState = (0, _initialState2.default)(stateParams);
	
	  /**
	   * @name ViewModel
	   * @type {object}
	   * @ngkey widget-bb-manage-payment-orders-ng:viewModel
	   * @inner
	   */
	  return {
	    /**
	     * @name ViewModel#init
	     * @description Initialises view model with initial state
	     * @type {function}
	     * @inner
	     * @return {ViewState}
	     */
	    init: stateContainer.createAction(function () {
	      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	      return state;
	    }),
	    /**
	     * @name ViewModel#getState
	     * @description Returns view state
	     * @type {function}
	     * @inner
	     * @return {ViewState}
	     */
	    getState: stateContainer.getState,
	    /**
	     * @name ViewModel#initList
	     * @description
	     * Actions for updating the parts of the `ViewState` related to initial loading
	     * @type {ViewModelInitActions}
	     * @inner
	     */
	    initList: (0, _init2.default)(stateContainer),
	    /**
	     * @name ViewModel#list
	     * @description
	     * Actions for updating the parts of the `ViewState` related to payment orders list
	     * @type {ViewModelListActions}
	     * @inner
	     */
	    list: (0, _list2.default)(stateContainer, hooks),
	    /**
	     * @name ViewModel#list
	     * @description
	     * Actions for updating the parts of the `ViewState` related to exchange rate
	     * @type {ViewModelRateActions}
	     * @inner
	     */
	    rate: (0, _rate2.default)(stateContainer),
	    /**
	     * @name ViewModel#product
	     * @description
	     * Actions for updating the parts of the `ViewState` related to product
	     * @type {ViewModelProductActions}
	     * @inner
	     */
	    product: (0, _product2.default)(stateContainer),
	    /**
	     * @name ViewModel#products
	     * @description
	     * Actions for updating the parts of the `ViewState` related to products
	     * @type {ViewModelProductsActions}
	     * @inner
	     */
	    products: (0, _products2.default)(stateContainer),
	    /**
	     * @name ViewModel#visibility
	     * @description
	     * Actions for updating the parts of the `ViewState` related to products
	     * @type {ViewModelProductsActions}
	     * @inner
	     */
	    visibility: (0, _visibility2.default)(stateContainer),
	    /**
	     * @name ViewModel#notifications
	     * @description
	     * Actions for updating the parts of the `ViewState` related to notifications
	     * @type {ViewModelNotificationsActions}
	     * @inner
	     */
	    notifications: (0, _notifications2.default)(stateContainer),
	    /**
	     * @name ViewModel#delete
	     * @description
	     * Actions for updating the parts of the `ViewState` related to deleting payment
	     * @type {ViewModelNotificationsActions}
	     * @inner
	     */
	    delete: (0, _delete2.default)(stateContainer)
	  };
	};

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (params) {
	  return {
	    initialLoading: true,
	    error: null,
	    isHidden: false,
	    rate: {
	      value: null,
	      loading: false,
	      requestParams: {
	        currencyFrom: 'EUR',
	        currencyTo: 'USD'
	      }
	    },
	    paymentOrders: {
	      rawData: null,
	      data: null,
	      loading: false,
	      loadedAll: false,
	      totalCount: 0,
	      requestParams: {
	        from: 0,
	        size: params.pageSize
	      }
	    },
	    paymentOrder: {
	      deleteConfirmOpened: false,
	      data: null,
	      deleting: false
	    },
	    products: {
	      data: null,
	      loading: false
	    },
	    selectedProduct: null,
	    notifications: {
	      data: [],
	      dismissMessageTime: params.dismissMessageTime
	    }
	  };
	};

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelInitActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelInitActions#afterLoadDone
	     * @description Update the `ViewState` after initial loading is done,
	     * successfully or unsuccessfully
	     * @type {function}
	     * @inner
	     */
	    afterLoadDone: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        initialLoading: false
	      });
	    })
	  };
	};

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(236);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * @name ViewModelListActions
	 * @type {object}
	 * @inner
	 */
	exports.default = function (stateContainer, hooks) {
	  return {
	    /**
	     * @name ViewModelListActions#beforeLoad
	     * @description Update the `ViewState` before loading payments orders
	     * @type {function}
	     * @inner
	     */
	    beforeLoad: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        error: null,
	        paymentOrders: Object.assign({}, state.paymentOrders, {
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterLoadSuccess
	     * @description Update the `ViewState` after successfully loading payments orders
	     * @type {function}
	     * @inner
	     * @param {PaymentOrdersResponse} response Payment orders load response
	     */
	    afterLoadSuccess: stateContainer.createAction(function (state, response) {
	      var rawData = [].concat(_toConsumableArray(!response.replace && state.paymentOrders.rawData || []), _toConsumableArray(response.rawData));
	
	      return Object.assign({}, state, {
	        paymentOrders: Object.assign({}, state.paymentOrders, {
	          rawData: rawData,
	          data: hooks.processPaymentOrders(rawData),
	          loading: false,
	          loadedAll: rawData.length === response.totalCount,
	          totalCount: response.totalCount,
	          requestParams: response.requestParams
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterLoadError
	     * @description Update the `ViewState` after unsuccessful payment orders load
	     * @type {function}
	     * @inner
	     * @param {module:lib-bb-model-errors.ModelError} error Response error
	     */
	    afterLoadError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        error: (0, _helpers.uiError)(error),
	        paymentOrders: Object.assign({}, state.paymentOrders, {
	          loading: false
	        })
	      });
	    })
	  };
	};
	
	/**
	 * @typedef {object} PaymentOrdersResponse
	 * @property {object[]} rawData Loaded transactions array
	 * @property {number} totalCount Total number of transactions
	 * @property {LoadRequestParams} requestParams Request parameters object
	 */
	
	/**
	 * @typedef {object} LoadRequestParams
	 * @property {number} from Page number to load
	 * @property {number} size Page size to load
	 */

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.uiError = undefined;
	
	var _errorMessages;
	
	var _libBbModelErrors = __webpack_require__(148);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* eslint-disable import/prefer-default-export */
	
	
	var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'model.error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'model.error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'model.error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'model.error.unexpected'), _errorMessages);
	
	var uiError = exports.uiError = function uiError(error) {
	  return {
	    message: errorMessages[error.code]
	  };
	};

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(236);
	
	/**
	 * @name ViewModelRateActions
	 * @type {object}
	 * @inner
	 */
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelRateActions#beforeLoad
	     * @description Update the `ViewState` before loading exchange rate
	     * @type {function}
	     * @inner
	     */
	    beforeLoad: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        error: null,
	        rate: Object.assign({}, state.rate, {
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelRateActions#afterLoadSuccess
	     * @description Update the `ViewState` after successfully loading exchange rate
	     * @type {function}
	     * @inner
	     * @param {object} response Exchange rate load response
	     */
	    afterLoadSuccess: stateContainer.createAction(function (state, response) {
	      return Object.assign({}, state, {
	        rate: Object.assign({}, state.rate, {
	          value: response,
	          loading: false
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelRateActions#afterLoadError
	     * @description Update the `ViewState` after unsuccessful exchange rate load
	     * @type {function}
	     * @inner
	     * @param {module:lib-bb-model-errors.ModelError} error Response error
	     */
	    afterLoadError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        error: (0, _helpers.uiError)(error),
	        rate: Object.assign({}, state.rate, {
	          loading: false
	        })
	      });
	    })
	  };
	};

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name ViewModelProductActions
	 * @type {object}
	 * @inner
	 */
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelProductActions#afterLoadSuccess
	     * @description Update the `ViewState` after successfully loading selected product
	     * @type {function}
	     * @inner
	     * @param {String} productId selected product id
	     */
	    afterLoadSuccess: stateContainer.createAction(function (state, productId) {
	      var products = state.products.data;
	
	      return Object.assign({}, state, {
	        selectedProduct: products.find(function (product) {
	          return product.id === productId;
	        }) || products[0]
	      });
	    })
	  };
	};

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(236);
	
	/**
	 * @name ViewModelProductsActions
	 * @type {object}
	 * @inner
	 */
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelProductsActions#beforeLoad
	     * @description Update the `ViewState` before loading products
	     * @type {function}
	     * @inner
	     */
	    beforeLoad: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        error: null,
	        products: Object.assign({}, state.products, {
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelProductsActions#afterLoadSuccess
	     * @description Update the `ViewState` after successfully loading products
	     * @type {function}
	     * @inner
	     * @param {Array} data Products array
	     */
	    afterLoadSuccess: stateContainer.createAction(function (state, data) {
	      return Object.assign({}, state, {
	        products: Object.assign({}, state.products, {
	          loading: false,
	          data: data
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelProductsActions#afterLoadError
	     * @description Update the `ViewState` after unsuccessful products load
	     * @type {function}
	     * @inner
	     * @param {module:lib-bb-model-errors.ModelError} error Response error
	     */
	    afterLoadError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        error: (0, _helpers.uiError)(error),
	        products: Object.assign({}, state.products, {
	          loading: false
	        })
	      });
	    })
	  };
	};

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name ViewModelVisibilityActions
	 * @type {object}
	 * @inner
	 */
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelRateActions#afterLoadSuccess
	     * @type {function}
	     * @inner
	     * @param {boolean} isHidden Hidden value
	     */
	    change: stateContainer.createAction(function (state, isHidden) {
	      return Object.assign({}, state, {
	        isHidden: isHidden
	      });
	    })
	  };
	};

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * @name ViewModelNotificationsActions
	 * @type {object}
	 * @inner
	 */
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelNotificationsActions#updateNotifications
	     * @description Update the `ViewState` after successfully editing payment
	     * @type {function}
	     * @inner
	     * @param {Array} notifications array with pushed notifications
	     */
	    updateNotifications: stateContainer.createAction(function (state, notification) {
	      var notifications = state.notifications.data;
	
	      return Object.assign({}, state, {
	        notifications: Object.assign({}, state.notifications, {
	          data: [].concat(_toConsumableArray(notifications), [notification])
	        })
	      });
	    }),
	    /**
	     * @name ViewModelNotificationsActions#deleteNotification
	     * @description Update the `ViewState` after successfully editing payment
	     * @type {function}
	     * @inner
	     * @param {Array} notifications array with pushed notifications
	     */
	    deleteNotification: stateContainer.createAction(function (state, notification) {
	      var notifications = state.notifications.data;
	
	      return Object.assign({}, state, {
	        notifications: Object.assign({}, state.notifications, {
	          data: notifications.filter(function (item) {
	            return item !== notification;
	          })
	        })
	      });
	    })
	  };
	};

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(236);
	
	/**
	 * @name ViewModelDeleteActions
	 * @type {object}
	 * @inner
	 */
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelDeleteActions#beforeDelete
	     * @description Update the `ViewState` before deleting payment
	     * @type {function}
	     * @inner
	     */
	    beforeDelete: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        paymentOrder: Object.assign({}, state.paymentOrder, {
	          deleting: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelDeleteActions#afterDeleteSuccess
	     * @description Update the `ViewState` after successfully deleting payment
	     * @type {function}
	     * @inner
	     */
	    afterDeleteSuccess: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        paymentOrder: Object.assign({}, state.paymentOrder, {
	          deleting: false
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelDeleteActions#afterDeleteError
	     * @description Update the `ViewState` after unsuccessful deleting payment
	     * @type {function}
	     * @inner
	     * @param {module:lib-bb-model-errors.ModelError} error Response error
	     */
	    afterDeleteError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        error: (0, _helpers.uiError)(error),
	        paymentOrder: Object.assign({}, state.paymentOrder, {
	          deleting: false
	        })
	      });
	    })
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-manage-payment-orders-ng.js.map