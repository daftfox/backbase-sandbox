(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib-bb-model-errors"), require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("lib-bb-state-container-ng"), require("lib-bb-extension-helpers-ng"), require("model-bb-billpay-ng"), require("lib-bb-extension-intents-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-billpay-view-payments-ng", ["lib-bb-model-errors", "vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-event-bus-ng", "lib-bb-widget-extension-ng", "lib-bb-intent-ng", "lib-bb-state-container-ng", "lib-bb-extension-helpers-ng", "model-bb-billpay-ng", "lib-bb-extension-intents-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-billpay-view-payments-ng"] = factory(require("lib-bb-model-errors"), require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("lib-bb-state-container-ng"), require("lib-bb-extension-helpers-ng"), require("model-bb-billpay-ng"), require("lib-bb-extension-intents-ng"));
	else
		root["widget-bb-billpay-view-payments-ng"] = factory(root["lib-bb-model-errors"], root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-widget-extension-ng"], root["lib-bb-intent-ng"], root["lib-bb-state-container-ng"], root["lib-bb-extension-helpers-ng"], root["model-bb-billpay-ng"], root["lib-bb-extension-intents-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_45__, __WEBPACK_EXTERNAL_MODULE_47__, __WEBPACK_EXTERNAL_MODULE_54__, __WEBPACK_EXTERNAL_MODULE_55__, __WEBPACK_EXTERNAL_MODULE_56__, __WEBPACK_EXTERNAL_MODULE_57__, __WEBPACK_EXTERNAL_MODULE_58__, __WEBPACK_EXTERNAL_MODULE_60__, __WEBPACK_EXTERNAL_MODULE_61__, __WEBPACK_EXTERNAL_MODULE_97__) {
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

	module.exports = __webpack_require__(96);

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_45__;

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_47__;

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_54__;

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_55__;

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_56__;

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_57__;

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_58__;

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_60__;

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_61__;

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(47);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(54);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(55);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbWidgetExtensionNg = __webpack_require__(56);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbStateContainerNg = __webpack_require__(58);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _libBbExtensionHelpersNg = __webpack_require__(60);
	
	var _libBbExtensionHelpersNg2 = _interopRequireDefault(_libBbExtensionHelpersNg);
	
	var _modelBbBillpayNg = __webpack_require__(61);
	
	var _modelBbBillpayNg2 = _interopRequireDefault(_modelBbBillpayNg);
	
	var _libBbIntentNg = __webpack_require__(57);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbExtensionIntentsNg = __webpack_require__(97);
	
	var _libBbExtensionIntentsNg2 = _interopRequireDefault(_libBbExtensionIntentsNg);
	
	var _controller = __webpack_require__(98);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _service = __webpack_require__(99);
	
	var _service2 = _interopRequireDefault(_service);
	
	var _viewModel = __webpack_require__(100);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	var _router = __webpack_require__(105);
	
	var _router2 = _interopRequireDefault(_router);
	
	var _defaultHooks = __webpack_require__(106);
	
	var _defaultHooks2 = _interopRequireDefault(_defaultHooks);
	
	var _events = __webpack_require__(107);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'widget-bb-billpay-view-payments-ng'; /**
	                                                       * @module widget-bb-billpay-view-payments-ng
	                                                       *
	                                                       * @description
	                                                       * Billpay view payments
	                                                       */
	
	var hooksKey = moduleKey + ':hooks';
	var serviceKey = moduleKey + ':service';
	var eventServiceKey = moduleKey + ':events';
	var viewModelKey = moduleKey + ':view-model';
	var routerKey = moduleKey + ':router';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbWidgetNg2.default, _libBbEventBusNg2.default, _modelBbBillpayNg2.default, _libBbExtensionHelpersNg2.default, _libBbStateContainerNg2.default, _libBbIntentNg2.default, _libBbExtensionIntentsNg2.default]).factory(eventServiceKey, [_libBbEventBusNg.eventBusKey,
	/* into */
	_events2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(_defaultHooks2.default)).factory(serviceKey, [viewModelKey, _modelBbBillpayNg.modelBillpayKey, eventServiceKey, _libBbWidgetNg.widgetKey,
	/* into */
	_service2.default]).factory(_libBbExtensionIntentsNg.extensionIntentsContextKey, [_modelBbBillpayNg.modelBillpayKey, function (model) {
	  return {
	    model: model
	  };
	}]).factory(routerKey, [_libBbStateContainerNg.bbStateContainerKey,
	/* into */
	_router2.default]).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey, hooksKey,
	/* into */
	_viewModel2.default]).factory(_libBbExtensionHelpersNg.extensionHelpersContextKey, [serviceKey, routerKey,
	/* into */
	function (billpayViewPaymentsService, router) {
	  return {
	    billpayViewPaymentsService: billpayViewPaymentsService,
	    router: router
	  };
	}]).controller('BillpayViewPaymentsController', [_libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, serviceKey, routerKey, _libBbIntentNg.bbIntentKey,
	/* into */
	_controller2.default])
	
	// Add `service` to the `context` object
	// provided to the extension `helpers`, `events`, and `intents`
	.factory(_libBbWidgetExtensionNg.extensionContextKey, [serviceKey, routerKey,
	/* into */
	function (service, router) {
	  return {
	    service: service,
	    router: router
	  };
	}]).run([_libBbIntentNg.bbIntentKey, _libBbStateContainerNg.bbStateContainerKey, _libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, viewModelKey, function (bbIntent, bbStateContainer, eventBus, widget, viewModel) {
	  // Initialize the viewModel with an initial state
	  viewModel.init();
	}]).name;
	
	/**
	 * @typedef HelperContext
	 * @type {object}
	 * @extends module:lib-bb-extension-helpers-ng.HelperContext
	 * @property {BillpayViewPaymentsService} service
	 */
	
	/**
	 * @typedef IntentContext
	 * @type {object}
	 * @extends module:lib-bb-extension-intents-ng.IntentContext
	 * @property {BillpayViewPaymentsService} service
	 */
	
	/**
	 * @typedef EventContext
	 * @type {object}
	 * @extends module:lib-bb-extension-events-ng.EventContext
	 * @property {BillpayViewPaymentsService} service
	 */

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_97__;

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = BillpayViewPaymentsController;
	/**
	 * @module widget-bb-billpay-view-payments-ng
	 * @name BillpayViewPaymentsController
	 *
	 * @description
	 * Billpay View Payments widget controller
	 *
	 * @param {BillpayViewPaymentsService} service
	 * @param {Router} router
	 */
	function BillpayViewPaymentsController(eventBus, widget, service, router, bbIntent) {
	  var unsubscribe = null;
	  var $ctrl = this;
	
	  /**
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @name BillpayViewPaymentsController#$onInit
	   * @type {function}
	   * @returns {void}
	   */
	  var $onInit = function $onInit() {
	    service.getPayments().catch(function () {
	      // error handling is dealt with in the service
	    });
	
	    unsubscribe = router.subscribe(function (route) {
	      if (route !== 'list') return;
	      service.getPayments().catch(function () {
	        // error handling is dealt with in the service
	      });
	    });
	
	    // Handle any incoming intents
	    bbIntent.handle('intent.rb.billpay.pending-payments.refresh', function () {
	      service.getPayments().catch(function () {
	        // error handling is dealt with in the service
	      });
	    });
	
	    bbIntent.init().then(function () {
	      // Mobile SDK < 3.0
	      eventBus.publish('cxp.item.loaded', {
	        id: widget.getId()
	      });
	
	      // Mobile SDK >= 3.0
	      eventBus.publish('bb.item.loaded', {
	        id: widget.getId()
	      });
	    });
	  };
	
	  /**
	   * AngularJS Lifecycle hook used to destroy the controller
	   *
	   * @name BillpayViewPaymentsController#$onDestroy
	   * @type {function}
	   * @returns {void}
	   */
	  var $onDestroy = function $onDestroy() {
	    if (unsubscribe) unsubscribe();
	  };
	
	  /**
	   * @name BillpayViewPaymentsController#deletePayment
	   * @type {function}
	   * @description deletes the payment
	   * @param {Object} ctrl current controller
	   */
	  var deletePayment = function deletePayment() {
	    var _$ctrl$paymentToDelet = $ctrl.paymentToDelete,
	        id = _$ctrl$paymentToDelet.id,
	        recurring = _$ctrl$paymentToDelet.recurring;
	
	    return service.deletePayment(id, recurring).then(function () {
	      Object.assign($ctrl, { isDeleteDialogOpen: false });
	      service.getPayments().catch(function () {
	        // error handling is dealt with in the service
	      });
	    }).catch(function () {
	      // error handling is dealt with in the service
	    });
	  };
	
	  /**
	   * @name BillpayViewPaymentsController#openDeleteDialog
	   * @type {function}
	   * @description opens the delete dialog
	   * @param {Object} payment the payment to be deleted
	   */
	  var openDeleteDialog = function openDeleteDialog(payment) {
	    Object.assign($ctrl, { isDeleteDialogOpen: true, paymentToDelete: payment });
	  };
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	    $onDestroy: $onDestroy,
	    deletePayment: deletePayment,
	    openDeleteDialog: openDeleteDialog
	  });
	}

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = BillpayViewPaymentsService;
	/**
	 * @constructor BillpayViewPaymentsService
	 * @param {ViewModel} viewModel
	 * @param {object} viewModel.list
	 * @param {object} viewModel.remove
	 * @param {BillpayModel} model
	 * @param {object} events
	 * @param {object} widget
	 * @description
	 * The service encapsulates the core functionality of the BillpayViewPayments
	 * Widget. It co-ordinates the communication of data from the `Model`
	 * with the communication with the user by updating the {@link ViewState}.
	 *
	 * Asynchronous methods update the {@link ViewState} in 3 potential
	 * stages; "before", "success", and "error", to allow the view to
	 * provide feedback to the user.
	 */
	function BillpayViewPaymentsService(viewModel, model, events, widget) {
	  return {
	    /**
	     * @name BillpayViewPaymentsService#getPayments
	     * @type {function}
	     * @return {Promise<void>}
	     * @description Update the view with a list of payments loaded from the data source
	     */
	    getPayments: function getPayments() {
	      viewModel.list.beforeGetPayments();
	      events.beforeGetPayments();
	      return model.getPayments({ status: 'PENDING' }).then(function (response) {
	        viewModel.list.afterGetPaymentsSuccess(response);
	        events.afterGetPaymentsSuccess(response);
	      }).catch(function (error) {
	        viewModel.list.afterGetPaymentsError(error);
	        events.afterGetPaymentsError(error);
	        throw error;
	      });
	    },
	
	
	    /**
	     * @name BillpayViewPaymentsService#deletePayment
	     * @type {function}
	     * @param id payment ID
	     * @param recurring is the payment a recurring payment
	     * @return {Promise<void>}
	     * @description Delete a payment and update the view with remaining payments
	     */
	    deletePayment: function deletePayment(id, recurring) {
	      viewModel.remove.beforeRemovePayment();
	      events.beforeRemovePayment();
	      var deletePayment = recurring ? model.deleteRecurringPaymentRecord : model.deletePaymentRecord;
	      return deletePayment(id).then(function () {
	        viewModel.remove.afterRemovePaymentSuccess();
	        events.afterRemovePaymentSuccess(id, recurring);
	      }).catch(function (error) {
	        viewModel.remove.afterRemovePaymentError(error);
	        events.afterRemovePaymentError(error);
	        throw error;
	      });
	    },
	
	
	    /**
	     * @name BillpayViewPaymentsService#getCurrencyCode
	     * @type {function}
	     * @return {string}
	     * @description Return the currency code from widget preferences
	     */
	    getCurrencyCode: function getCurrencyCode() {
	      return widget.getStringPreference('currency');
	    }
	  };
	}

/***/ }),

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ViewModel;
	
	var _remove = __webpack_require__(101);
	
	var _remove2 = _interopRequireDefault(_remove);
	
	var _list = __webpack_require__(103);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _initialState = __webpack_require__(104);
	
	var _initialState2 = _interopRequireDefault(_initialState);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @constructor ViewModel
	 * @param {module:lib-bb-state-container-ng.StateContainer} stateContainer
	 * @param {Hooks} hooks
	 */
	function ViewModel(stateContainer, hooks) {
	  return {
	    /**
	     * @name ViewModel#init
	     * @type {function}
	     * @description Initialize the container with the initial state if
	     * it isn't already initialized (i.e. the current state is `undefined`)
	     * @return {ViewState} The new state of the widget
	     */
	    init: stateContainer.createAction(function () {
	      var current = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _initialState2.default)();
	      return current;
	    }),
	
	    /**
	     * @name ViewModel#list
	     * @type {object}
	     * @description expose list viewmodel
	     */
	    list: (0, _list2.default)(stateContainer, hooks),
	
	    /**
	     * @name ViewModel#remove
	     * @type {object}
	     * @description expose remove viewmodel
	     */
	    remove: (0, _remove2.default)(stateContainer, hooks)
	  };
	}

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Remove;
	
	var _helpers = __webpack_require__(102);
	
	/**
	 *
	 * @constructor Remove
	 * @param {module:lib-bb-state-container-ng.StateContainer} stateContainer
	 * @param {Hooks} hooks
	 */
	function Remove(stateContainer, hooks) {
	  /**
	   * @name Remove
	   * @type {Object}
	   */
	  return {
	    /**
	     * @name Remove#beforeRemovePayment
	     * @type {function}
	     * @description Amend the view to inform the user the payment is being removed
	     * @return {ViewState} The new state of the view model
	     */
	    beforeRemovePayment: stateContainer.createAction(function (current) {
	      return hooks.beforeRemovePayment(Object.assign({}, current, {
	        isRemovingPayment: true
	      }));
	    }),
	
	    /**
	     * @name Remove#afterRemovePaymentSuccess
	     * @type {function}
	     * @description Amend the view to display the list of payments
	     * @return {ViewState} The new state of the view model
	     * @param id payment ID
	     * @param recurring is the payment a recurring payment
	     */
	    afterRemovePaymentSuccess: stateContainer.createAction(function (current) {
	      return hooks.afterRemovePaymentSuccess(Object.assign({}, current, {
	        isRemovingPayment: false,
	        showSuccessMessage: true
	      }));
	    }),
	
	    /**
	     * @name Remove#afterRemovePaymentError
	     * @type {function}
	     * @description Amend the view to display the error encountered when removing the payment
	     * @param {module:lib-bb-model-errors.ModelError} error
	     * @return {ViewState} The new state of the view model
	     */
	    afterRemovePaymentError: stateContainer.createAction(function (current, error) {
	      return hooks.afterRemovePaymentError(Object.assign({}, current, {
	        error: (0, _helpers.uiError)(error),
	        isRemovingPayment: false
	      }));
	    })
	  };
	}

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.uiError = undefined;
	
	var _errorMessages;
	
	var _libBbModelErrors = __webpack_require__(45);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* eslint-disable import/prefer-default-export */
	
	
	var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'billpay.model.error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'billpay.model.error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'billpay.model.error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'billpay.model.error.unexpected'), _errorMessages);
	
	/**
	 * @name uiError
	 *
	 * @inner
	 * @type {function}
	 * @description Creates an error object for template
	 * @param {object} modelError Error object
	 * @returns {{message: string}}
	 */
	var uiError = exports.uiError = function uiError(modelError) {
	  var message = '';
	
	  if (modelError && modelError.code) {
	    message = errorMessages[modelError.code];
	  }
	
	  return { message: message };
	};

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = List;
	
	var _helpers = __webpack_require__(102);
	
	/**
	 *
	 * @constructor List
	 * @param {module:lib-bb-state-container-ng.StateContainer} stateContainer
	 * @param {Hooks} hooks
	 */
	function List(stateContainer, hooks) {
	  /**
	   * @name List
	   * @type {Object}
	   */
	  return {
	    /**
	     * @name List#beforeGetPayments
	     * @type {function}
	     * @description Amend the view to inform the user the list of payees is being loaded
	     * @return {ViewState} The new state of the view model
	     */
	    beforeGetPayments: stateContainer.createAction(function (current) {
	      return hooks.beforeGetPayments(Object.assign({}, current, {
	        isLoadingPayments: true
	      }));
	    }),
	
	    /**
	     * @name List#afterGetPaymentsSuccess
	     * @type {function}
	     * @description Amend the view to display the list of payees
	     * @param {Array<module:model-bb-billpay-ng.Payment>} payments
	     * @return {ViewState} The new state of the view model
	     */
	    afterGetPaymentsSuccess: stateContainer.createAction(function (current, payments) {
	      return hooks.afterGetPaymentsSuccess(Object.assign({}, current, {
	        payments: payments.map(hooks.transformPayment),
	        isLoadingPayments: false
	      }));
	    }),
	
	    /**
	     * @name List#afterGetPaymentsError
	     * @type {function}
	     * @description Amend the view to display the error encountered when loading the list of payees
	     * @param {module:lib-bb-model-errors.ModelError} error
	     * @return {ViewState} The new state of the view model
	     */
	    afterGetPaymentsError: stateContainer.createAction(function (current, error) {
	      return hooks.afterGetPaymentsError(Object.assign({}, current, {
	        error: (0, _helpers.uiError)(error),
	        isLoadingPayments: false
	      }));
	    })
	  };
	}

/***/ }),

/***/ 104:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return {
	    payments: [],
	    isLoadingPayments: false,
	    route: {
	      name: 'list',
	      params: {}
	    }
	  };
	};
	
	/**
	 * @typedef {object} ViewState
	 * @description
	 * The current state of the [ViewModel]{@link module:lib-bb-view-model-ng}.
	 * @property {Array.<any>} items
	 * @property {object} route Indicates current router state
	 */

/***/ }),

/***/ 105:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * The router service of the BillpayViewPayments widget
	 *
	 * @constructor Router
	 * @param {StateContainer} stateContainer
	 */
	exports.default = function (stateContainer) {
	  var subscribers = [];
	
	  /**
	   * @name setRoute
	   *
	   * @inner
	   * @description Inner method to update state with a new route
	   * @type {function}
	   * @param {{name: string, params: object}} route New route object
	   * @returns {ViewState}
	   */
	  var setRoute = stateContainer.createAction(function (state, _ref) {
	    var name = _ref.name,
	        params = _ref.params;
	    return Object.assign({}, state, {
	      route: {
	        name: name,
	        params: params
	      }
	    });
	  });
	
	  /**
	   * @name notifySubscribers
	   *
	   * @inner
	   * @description Inner method to notify subscribers
	   * @type {function}
	   * @param {string} name New route name
	   * @param {object} params New route parameters object
	   */
	  var notifySubscribers = function notifySubscribers(name, params) {
	    subscribers.forEach(function (subscriber) {
	      subscriber(name, params);
	    });
	  };
	
	  return {
	    /**
	     * @name Router#goto
	     *
	     * @description Method to navigate to a specific route
	     * @type {function}
	     * @param {string} name New route name
	     * @param {object} params New route parameters object
	     */
	    goto: function goto(name) {
	      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	      setRoute({ name: name, params: params });
	      notifySubscribers(name, params);
	    },
	
	    /**
	     * @name Router#getParams
	     *
	     * @description Method to get current route params from the {@link ViewState}
	     * @type {function}
	     * @returns {object} current parameters object
	     */
	    getParams: stateContainer.createSelector(function (state) {
	      return state.route.params;
	    }),
	
	    /**
	     * @name Router#getRoute
	     *
	     * @description Method to get current route name from the state
	     * @type {function}
	     */
	    getRoute: stateContainer.createSelector(function (state) {
	      return state.route.name;
	    }),
	
	    /**
	     * @name Router#subscribe
	     *
	     * @description Method to subscribe to a route change
	     * @type {function}
	     * @param {function} callback A callback to be subscribed
	     * @returns {function} The method to unsubscribe
	     */
	    subscribe: function subscribe(callback) {
	      subscribers = [].concat(_toConsumableArray(subscribers), [callback]);
	      return function () {
	        subscribers = subscribers.filter(function (sub) {
	          return sub !== callback;
	        });
	      };
	    }
	  };
	};

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	// By default return the unchanged argument
	var identity = function identity(any) {
	  return any;
	};
	
	/**
	 * @name Hooks
	 * @type {object}
	 * @extends module:lib-bb-widget-extension-ng.Hooks
	 */
	exports.default = {
	  /**
	   * @name Hooks#setState
	   * @type {function}
	   * @description add any state required by extension
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  setState: identity,
	
	  /**
	   * @name Hooks#transformPayment
	   * @type {function}
	   * @description Make any modifications needed to the loaded payment
	   * @param {Payment} payment The current state of the payment
	   * @return {Object} The transformed payment
	   */
	  transformPayment: identity,
	
	  /**
	   * @name Hooks#beforeGetPayments
	   * @type {function}
	   * @description Amend the view before loading the list of payments
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  beforeGetPayments: identity,
	
	  /**
	   * @name Hooks#afterGetPaymentsSuccess
	   * @type {function}
	   * @description Amend the view after successfully loading the list of payments
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  afterGetPaymentsSuccess: identity,
	
	  /**
	   * @name Hooks#afterGetPaymentsError
	   * @type {function}
	   * @description Amend the view after unsuccessfully loading the list of payments
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  afterGetPaymentsError: identity,
	
	  /**
	   * @name Hooks#beforeRemovePayment
	   * @type {function}
	   * @description Amend the view to inform the user the payment is being removed
	   * @return {ViewState} The new state of the view model
	   */
	  beforeRemovePayment: identity,
	
	  /**
	   * @name Hooks#afterRemovePaymentSuccess
	   * @type {function}
	   * @description Amend the view to display the list of payments
	   * @return {ViewState} The new state of the view model
	   */
	  afterRemovePaymentSuccess: identity,
	
	  /**
	   * @name Hooks#afterRemovePaymentError
	   * @type {function}
	   * @description Amend the view to display the error encountered when removing the payment
	   * @param {module:lib-bb-model-errors.ModelError} error
	   * @return {ViewState} The new state of the view model
	   */
	  afterRemovePaymentError: identity
	
	};

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description Events that the widget fires
	 * @type {object}
	 */
	var Events = {
	  BEFORE_GET_PAYMENTS: 'bb.event.billpay.getPayments.before',
	  AFTER_GET_PAYMENTS: 'bb.event.billpay.getPayments.after',
	  AFTER_GET_PAYMENTS_ERROR: 'bb.event.billpay.getPayments.error',
	  BEFORE_REMOVE_PAYMENT: 'bb.event.billpay.removePayment.before',
	  AFTER_REMOVE_PAYMENT: 'bb.event.billpay.removePayment.after',
	  AFTER_REMOVE_PAYMENT_ERROR: 'bb.event.billpay.removePayment.error'
	};
	
	exports.default = function (bus) {
	  return {
	    /**
	     * @name Events#beforeGetPayments
	     * @type {function}
	     * @description trigger BEFORE_GET_PAYMENTS event
	     */
	    beforeGetPayments: function beforeGetPayments() {
	      bus.publish(Events.BEFORE_GET_PAYMENTS);
	    },
	
	    /**
	     * @name Events#afterGetPaymentsSuccess
	     * @type {function}
	     * @description trigger AFTER_GET_PAYMENTS event
	     * @param {Array<module:model-bb-billpay-ng.Payment>} payments
	     */
	    afterGetPaymentsSuccess: function afterGetPaymentsSuccess(payments) {
	      bus.publish(Events.AFTER_GET_PAYMENTS, { payments: payments });
	    },
	
	    /**
	     * @name Events#afterGetPaymentsError
	     * @type {function}
	     * @description trigger AFTER_GET_PAYMENTS_ERROR event
	     * @param {module:lib-bb-model-errors.ModelError} error
	     */
	    afterGetPaymentsError: function afterGetPaymentsError(error) {
	      bus.publish(Events.AFTER_GET_PAYMENTS_ERROR, { error: error });
	    },
	
	    /**
	     * @name Events#beforeRemovePayment
	     * @type {function}
	     * @description trigger BEFORE_REMOVE_PAYMENT event
	     */
	    beforeRemovePayment: function beforeRemovePayment() {
	      bus.publish(Events.BEFORE_REMOVE_PAYMENT);
	    },
	
	    /**
	     * @name Events#afterRemovePaymentSuccess
	     * @type {function}
	     * @description trigger AFTER_REMOVE_PAYMENT event
	     * @param id payment ID
	     * @param recurring is the payment a recurring payment
	     */
	    afterRemovePaymentSuccess: function afterRemovePaymentSuccess(id, recurring) {
	      bus.publish(Events.AFTER_REMOVE_PAYMENT, { id: id, recurring: recurring });
	    },
	
	    /**
	     * @name Events#afterRemovePaymentError
	     * @type {function}
	     * @description trigger AFTER_REMOVE_PAYMENT_ERROR event
	     * @param {module:lib-bb-model-errors.ModelError} error
	     */
	    afterRemovePaymentError: function afterRemovePaymentError(error) {
	      bus.publish(Events.AFTER_REMOVE_PAYMENT_ERROR, { error: error });
	    }
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-billpay-view-payments-ng.js.map