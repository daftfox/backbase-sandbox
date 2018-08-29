(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("lib-bb-state-container-ng"), require("lib-bb-storage-ng"), require("lib-bb-extension-helpers-ng"), require("model-bb-billpay-ng"), require("lib-bb-billpay-errors"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-billpay-manage-payee-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-event-bus-ng", "lib-bb-widget-extension-ng", "lib-bb-intent-ng", "lib-bb-state-container-ng", "lib-bb-storage-ng", "lib-bb-extension-helpers-ng", "model-bb-billpay-ng", "lib-bb-billpay-errors"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-billpay-manage-payee-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("lib-bb-state-container-ng"), require("lib-bb-storage-ng"), require("lib-bb-extension-helpers-ng"), require("model-bb-billpay-ng"), require("lib-bb-billpay-errors"));
	else
		root["widget-bb-billpay-manage-payee-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-widget-extension-ng"], root["lib-bb-intent-ng"], root["lib-bb-state-container-ng"], root["lib-bb-storage-ng"], root["lib-bb-extension-helpers-ng"], root["model-bb-billpay-ng"], root["lib-bb-billpay-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_47__, __WEBPACK_EXTERNAL_MODULE_54__, __WEBPACK_EXTERNAL_MODULE_55__, __WEBPACK_EXTERNAL_MODULE_56__, __WEBPACK_EXTERNAL_MODULE_57__, __WEBPACK_EXTERNAL_MODULE_58__, __WEBPACK_EXTERNAL_MODULE_59__, __WEBPACK_EXTERNAL_MODULE_60__, __WEBPACK_EXTERNAL_MODULE_61__, __WEBPACK_EXTERNAL_MODULE_62__) {
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

	module.exports = __webpack_require__(53);

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
/* 47 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_47__;

/***/ }),
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
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
	
	var _libBbIntentNg = __webpack_require__(57);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbStateContainerNg = __webpack_require__(58);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _libBbStorageNg = __webpack_require__(59);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _libBbExtensionHelpersNg = __webpack_require__(60);
	
	var _libBbExtensionHelpersNg2 = _interopRequireDefault(_libBbExtensionHelpersNg);
	
	var _modelBbBillpayNg = __webpack_require__(61);
	
	var _modelBbBillpayNg2 = _interopRequireDefault(_modelBbBillpayNg);
	
	var _libBbBillpayErrors = __webpack_require__(62);
	
	var _manage = __webpack_require__(63);
	
	var _manage2 = _interopRequireDefault(_manage);
	
	var _editPayeeManual = __webpack_require__(65);
	
	var _editPayeeManual2 = _interopRequireDefault(_editPayeeManual);
	
	var _editPayeeElectronic = __webpack_require__(66);
	
	var _editPayeeElectronic2 = _interopRequireDefault(_editPayeeElectronic);
	
	var _createPayeeSearch = __webpack_require__(67);
	
	var _createPayeeSearch2 = _interopRequireDefault(_createPayeeSearch);
	
	var _createPayeeManual = __webpack_require__(68);
	
	var _createPayeeManual2 = _interopRequireDefault(_createPayeeManual);
	
	var _createPayeeElectronic = __webpack_require__(69);
	
	var _createPayeeElectronic2 = _interopRequireDefault(_createPayeeElectronic);
	
	var _service = __webpack_require__(70);
	
	var _service2 = _interopRequireDefault(_service);
	
	var _viewModel = __webpack_require__(71);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	var _router = __webpack_require__(78);
	
	var _router2 = _interopRequireDefault(_router);
	
	var _defaultHooks = __webpack_require__(79);
	
	var _defaultHooks2 = _interopRequireDefault(_defaultHooks);
	
	var _events = __webpack_require__(80);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'widget-bb-billpay-manage-payee-ng'; /**
	                                                      * @module widget-bb-billpay-manage-payee-ng
	                                                      *
	                                                      * @description
	                                                      * Bill Pay - Manage Payee
	                                                      */
	
	var hooksKey = moduleKey + ':hooks';
	var serviceKey = moduleKey + ':service';
	var viewModelKey = moduleKey + ':view-model';
	var eventServiceKey = moduleKey + ':events';
	var routerKey = moduleKey + ':router';
	var errorHelperUtilitiesKey = moduleKey + ':errorHelperUtilities';
	var errorHookUtilitiesKey = moduleKey + ':errorHookUtilities';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbWidgetNg2.default, _libBbEventBusNg2.default, _libBbExtensionHelpersNg2.default, _modelBbBillpayNg2.default, _libBbStateContainerNg2.default, _libBbIntentNg2.default, _libBbStorageNg2.default]).factory(eventServiceKey, [_libBbEventBusNg.eventBusKey,
	/* into */
	_events2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(_defaultHooks2.default)).factory(serviceKey, [viewModelKey, _modelBbBillpayNg.modelBillpayKey, eventServiceKey, _libBbWidgetNg.widgetKey, routerKey, _libBbIntentNg.bbIntentKey,
	/* into */
	_service2.default]).factory(routerKey, [_libBbStateContainerNg.bbStateContainerKey,
	/* into */
	_router2.default]).factory(errorHelperUtilitiesKey, [
	/* into */
	_libBbBillpayErrors.ErrorHelperUtilities]).factory(errorHookUtilitiesKey, [
	/* into */
	_libBbBillpayErrors.ErrorHookUtilities]).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey, hooksKey, errorHookUtilitiesKey,
	/* into */
	_viewModel2.default])
	
	// Add `model` and `service` to the `context` provided to the extension `helpers` key
	.factory(_libBbExtensionHelpersNg.extensionHelpersContextKey, [viewModelKey, serviceKey, _libBbIntentNg.bbIntentKey, _libBbStateContainerNg.bbStateContainerKey, routerKey, errorHelperUtilitiesKey,
	/* into */
	function (viewModel, service, bbIntent, state, router, errorHelperUtilities) {
	  return {
	    viewModel: viewModel,
	    service: service,
	    bbIntent: bbIntent,
	    state: state,
	    router: router,
	    errorHelperUtilities: errorHelperUtilities
	  };
	}]).controller('BillpayManagePayeeController', [
	// dependencies to inject
	_libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, _libBbStateContainerNg.bbStateContainerKey, serviceKey, _libBbIntentNg.bbIntentKey, viewModelKey, routerKey, _libBbStorageNg.bbStorageServiceKey,
	/* into */
	_manage2.default]).controller('BillpayCreatePayeeSearchController', [
	// dependencies to inject
	_libBbStateContainerNg.bbStateContainerKey, serviceKey, routerKey, viewModelKey,
	/* into */
	_createPayeeSearch2.default]).controller('BillpayCreatePayeeManualController', [
	// dependencies to inject
	_libBbStateContainerNg.bbStateContainerKey, serviceKey, routerKey,
	/* into */
	_createPayeeManual2.default]).controller('BillpayCreatePayeeElectronicController', [
	// dependencies to inject
	_libBbStateContainerNg.bbStateContainerKey, serviceKey, routerKey, viewModelKey,
	/* into */
	_createPayeeElectronic2.default]).controller('BillpayEditPayeeManualController', [
	// dependencies to inject
	_libBbStateContainerNg.bbStateContainerKey, serviceKey, routerKey, _libBbStorageNg.bbStorageServiceKey, viewModelKey,
	/* into */
	_editPayeeManual2.default]).controller('BillpayEditPayeeElectronicController', [
	// dependencies to inject
	_libBbStateContainerNg.bbStateContainerKey, serviceKey, routerKey, _libBbStorageNg.bbStorageServiceKey, viewModelKey,
	/* into */
	_editPayeeElectronic2.default]).run([viewModelKey, function (viewModel) {
	  // Initialize the viewModel with an initial state
	  viewModel.init();
	}]).name;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_54__;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_55__;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_56__;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_57__;

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_58__;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_59__;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_60__;

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_61__;

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_62__;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = BillpayManagePayeeController;
	
	var _constants = __webpack_require__(64);
	
	/**
	 * @module widget-bb-billpay-manage-payee-ng
	 * @name BillpayManageController
	 *
	 * @param {object} bus Event bus
	 * @param {object} widget Widget instance
	 * @param {object} stateContainer
	 * @param {module:widget-bb-billpay-manage-payee-ng.ManagePayeeService} payeeService
	 *   Manage Payee service
	 * @param {module:lib-bb-intent-ng.BbIntentProvider} bbIntent Widget navigation
	 * @param {ViewModel} viewModel view model
	 * @param {object} viewModel.manage view model manage
	 * @param {Router} router
	 * @param {module:lib-bb-storage-ng.bbStorage} bbStorage
	 * @description Billpay - manage payee controller
	 */
	
	function BillpayManagePayeeController(bus, widget, stateContainer, payeeService, bbIntent, _ref, router, bbStorage) {
	  var manage = _ref.manage;
	
	  var $ctrl = this;
	  var viewBillpaySummaryIntent = payeeService.viewBillpaySummaryIntent;
	  var createSingleBillIntent = bbIntent.create('intent.rb.billpay.single-bill.create');
	  var createRecurringBillIntent = bbIntent.create('intent.rb.billpay.recurring-bill.create');
	
	  /**
	   * @name goToDefaultState
	   * @type {function}
	   * @description Trigger default action to go to create payee
	   * @inner
	   */
	  var goToDefaultState = function goToDefaultState() {
	    return bbStorage.getItem(_constants.STORAGE_PAYEE_EDIT_DATA).then(function (data) {
	      if (data) {
	        var _JSON$parse = JSON.parse(data),
	            id = _JSON$parse.id,
	            electronic = _JSON$parse.electronic;
	
	        if (id) {
	          var editRoute = electronic ? 'editPayeeElectronic' : 'editPayeeManual';
	          return router.goto(editRoute, id);
	        }
	      }
	      return router.goto('createPayeeSearch');
	    });
	  };
	
	  /**
	   * @name BillpayManagePayeeController#$onInit
	   * @type {function}
	   * @description AngularJS Lifecycle hook used to initialize the controller
	   */
	  var $onInit = function $onInit() {
	    // Deprecated in Mobile SDK 3.0
	    bus.publish('cxp.item.loaded', {
	      id: widget.getId()
	    });
	
	    bus.publish('bb.item.loaded', {
	      id: widget.getId()
	    });
	
	    bbIntent.handle('intent.rb.billpay.payee.create', function () {
	      bbStorage.removeItem(_constants.STORAGE_PAYEE_EDIT_DATA);
	      router.goto('createPayeeSearch');
	    });
	
	    bbIntent.handle('intent.rb.billpay.payee.edit', function (_ref2) {
	      var id = _ref2.id,
	          electronic = _ref2.electronic;
	
	      bbStorage.setItem(_constants.STORAGE_PAYEE_EDIT_DATA, JSON.stringify({ id: id, electronic: electronic }));
	      if (electronic) {
	        router.goto('editPayeeElectronic', id);
	      } else {
	        router.goto('editPayeeManual', id);
	      }
	    });
	
	    // if no intent is found then this will be called
	    bbIntent.initHandler(goToDefaultState);
	
	    bbIntent.init();
	  };
	
	  /**
	   * @name BillpayManagePayeeController#callCreateRecurringBillIntent
	   * @type {function}
	   * @param {ViewState} state - current view state
	   * @description Publish create recurring bill intent
	   */
	  var callCreateRecurringBillIntent = function callCreateRecurringBillIntent(state) {
	    return payeeService.isEditRoute() ? createRecurringBillIntent(state.data.id) : createRecurringBillIntent(state.createdPayee.id);
	  };
	
	  /**
	   * @name BillpayManagePayeeController#callCreateSingleBillIntent
	   * @type {function}
	   * @param {ViewState} state - current view state
	   * @description Publish create single bill intent
	   */
	  var callCreateSingleBillIntent = function callCreateSingleBillIntent(state) {
	    return payeeService.isEditRoute() ? createSingleBillIntent() : createSingleBillIntent(state.createdPayee.id);
	  };
	
	  /**
	   * @name BillpayManagePayeeController#callViewBillpaySummaryIntent
	   * @type {function}
	   * @param {Payee} [payee]
	   * @param {String} [payee.id] New Payee id
	   * @description Publish view billpay summary intent
	   */
	  var callViewBillpaySummaryIntent = function callViewBillpaySummaryIntent(payee) {
	    viewBillpaySummaryIntent(Object.assign({}, !!payee && { payee: payee.id }));
	  };
	
	  /**
	   * @name BillpayManagePayeeController#searchPayees
	   * @type {function}
	   * @param {string} name the name value being searched for
	   * @description Search for payees
	   */
	  var searchPayees = function searchPayees(name) {
	    payeeService.searchPayees(name).catch(function () {
	      // error handling is dealt with in the service
	    });
	  };
	
	  /**
	   * @name BillpayManagePayeeController#goToCreateNewPayee
	   * @description Reset the form to an initial state
	   *   from having already added a payee
	   * @type {function}
	   */
	  var goToCreateNewPayee = function goToCreateNewPayee() {
	    manage.resetForm();
	    router.goto('createPayeeSearch');
	  };
	
	  /**
	   * @name BillpayManagePayeeController#showDeleteModal
	   * @description Show the delete payee modal
	   * @param {string} payeeId Id of payee to delete
	   * @type {function}
	   */
	  var showDeleteModal = function showDeleteModal(payeeId) {
	    return payeeService.getPendingPayments({ payeeID: payeeId, status: 'PENDING' }).then(function () {
	      manage.toggleDeleteModal();
	    }).catch(function () {
	      // error handling is dealt with in the service
	    });
	  };
	
	  /**
	   * @name BillpayManagePayeeController#resetDeleteModal
	   * @description Reset the delete modal state, deletePendingPayments value
	   * @type {function}
	   */
	  var resetDeleteModal = function resetDeleteModal() {
	    $ctrl.deletePendingPayments = undefined;
	  };
	
	  /**
	   * @name BillpayManagePayeeController#exitManagePayee
	   * @description Remove storage data for manage payee when exiting widget via cancel
	   *   and call intent to view billpay summary
	   * @type {function}
	   */
	  var exitManagePayee = function exitManagePayee() {
	    bbStorage.removeItem(_constants.STORAGE_PAYEE_EDIT_DATA);
	    callViewBillpaySummaryIntent();
	  };
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	    searchPayees: searchPayees,
	    goToCreateNewPayee: goToCreateNewPayee,
	    showDeleteModal: showDeleteModal,
	    callCreateRecurringBillIntent: callCreateRecurringBillIntent,
	    callCreateSingleBillIntent: callCreateSingleBillIntent,
	    callViewBillpaySummaryIntent: callViewBillpaySummaryIntent,
	    resetDeleteModal: resetDeleteModal,
	    exitManagePayee: exitManagePayee
	  });
	}

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable import/prefer-default-export */
	var STORAGE_PAYEE_EDIT_DATA = exports.STORAGE_PAYEE_EDIT_DATA = 'billpay.managePayee.editPayeeData';

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = BillpayEditPayeeManualController;
	
	var _constants = __webpack_require__(64);
	
	/**
	 * @module widget-bb-billpay-manage-payee-ng
	 * @name BillpayEditPayeeManualController
	 *
	 * @param {object} stateContainer
	 * @param {module:widget-bb-billpay-manage-payee-ng.ManagePayeeService} payeeService
	 *   Manage Payee service
	 * @param {Router} router
	 * @param {module:lib-bb-storage-ng.bbStorage} bbStorage
	 * @param {ViewModel} viewModel view model
	 * @param {object} viewModel.manage view model manage
	 * @description Billpay - edit payee manual controller
	 */
	function BillpayEditPayeeManualController(stateContainer, payeeService, router, bbStorage, _ref) {
	  var manage = _ref.manage;
	
	  var $ctrl = this;
	  var viewBillpaySummaryIntent = payeeService.viewBillpaySummaryIntent;
	
	  /**
	   * @name cloneState
	   * @type {function}
	   * @description Local copy of the control state
	   * @param {ViewState} viewState - current view state
	   * @param {object} viewState.data - current view state payee data
	   * @inner
	   */
	  var cloneState = function cloneState(_ref2) {
	    var data = _ref2.data;
	    var id = data.id,
	        name = data.name,
	        phoneNumber = data.phoneNumber,
	        address = data.address,
	        accountNumber = data.accountNumber,
	        nickName = data.nickName;
	
	
	    var newState = {
	      data: {
	        id: id,
	        name: name,
	        phoneNumber: phoneNumber,
	        address: address,
	        accountNumber: accountNumber,
	        nickName: nickName,
	        modifyPendingPayments: true
	      }
	    };
	    Object.assign($ctrl, newState);
	  };
	
	  /**
	   * @name transformPayeeDataForPut
	   * @type {function}
	   * @description Filter out any falsy values from the payee data to send
	   * @param {Object} data payee data
	   * @return {Object} containing only data that is part of the request
	   * @inner
	   */
	  var transformPayeeDataForPut = function transformPayeeDataForPut(_ref3) {
	    var name = _ref3.name,
	        phoneNumber = _ref3.phoneNumber,
	        _ref3$address = _ref3.address,
	        address1 = _ref3$address.address1,
	        address2 = _ref3$address.address2,
	        city = _ref3$address.city,
	        state = _ref3$address.state,
	        postalCode = _ref3$address.postalCode,
	        modifyPendingPayments = _ref3.modifyPendingPayments,
	        accountNumber = _ref3.accountNumber,
	        nickName = _ref3.nickName;
	    return Object.assign({
	      name: name,
	      phoneNumber: phoneNumber,
	      address: Object.assign({
	        address1: address1,
	        city: city,
	        state: state,
	        postalCode: postalCode
	      }, address2 && address2.trim().length && {
	        address2: address2
	      }),
	      modifyPendingPayments: modifyPendingPayments
	    }, accountNumber && accountNumber.trim().length && {
	      accountNumber: accountNumber
	    }, nickName && nickName.trim().length && {
	      nickName: nickName
	    });
	  };
	
	  /**
	   * @name BillpayEditPayeeManualController#$onInit
	   * @type {function}
	   * @description AngularJS Lifecycle hook used to initialize the controller
	   *   not yet fully implemented
	   */
	  var $onInit = function $onInit() {
	    var id = router.getParams();
	
	    payeeService.getPayeeRecord(id).then(function () {
	      cloneState(stateContainer.getState());
	    }).catch(function () {
	      // error handling is dealt with in the service
	    });
	  };
	
	  /**
	   * @name BillpayEditPayeeManualController#submitPayeeDataForm
	   * @type {function}
	   * @description Create new payee
	   * @param {boolean} isFormValid Validation of the form
	   * @param {Object} data data from the form that needs transforming
	   */
	  var submitPayeeDataForm = function submitPayeeDataForm(isFormValid, data) {
	    if (!isFormValid) {
	      return;
	    }
	    var payee = transformPayeeDataForPut(data);
	    payeeService.putPayeesRecord(data.id, { payee: payee }).then(function () {
	      bbStorage.removeItem(_constants.STORAGE_PAYEE_EDIT_DATA);
	      router.goto('editPayeeConfirmation');
	    }).catch(function () {
	      // error handling is dealt with in the service
	    });
	  };
	
	  /**
	   * @name BillpayEditPayeeManualController#removePayee
	   * @description send the request for deleting a payee
	   * @param {string} payeeId Id of payee to delete
	   * @param {string} successMessage Success message to display to user
	   * @param {boolean} [cancelPendingPayments=false] Flag to delete pending
	   *  payments for the payee
	   * @type {function}
	   */
	  var removePayee = function removePayee(payeeId, successMessage) {
	    var cancelPendingPayments = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	    return payeeService.removePayeeRecord(payeeId, { cancelPendingPayments: cancelPendingPayments }).then(function () {
	      bbStorage.removeItem(_constants.STORAGE_PAYEE_EDIT_DATA);
	      viewBillpaySummaryIntent({
	        notification: {
	          status: 'success',
	          message: successMessage
	        }
	      });
	    }).catch(manage.toggleDeleteModal);
	  };
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	    submitPayeeDataForm: submitPayeeDataForm,
	    removePayee: removePayee
	  });
	}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = BillpayEditPayeeElectronicController;
	
	var _constants = __webpack_require__(64);
	
	/**
	 * @module widget-bb-billpay-manage-payee-ng
	 * @name BillpayEditPayeeElectronicController
	 *
	 * @param {object} stateContainer
	 * @param {module:widget-bb-billpay-manage-payee-ng.ManagePayeeService} payeeService
	 *   Manage Payee service
	 * @param {Router} router
	 * @param {module:lib-bb-storage-ng.bbStorage} bbStorage
	 * @param {ViewModel} viewModel view model
	 * @param {object} viewModel.manage view model manage
	 * @description Billpay - edit payee electronic controller
	 */
	function BillpayEditPayeeElectronicController(stateContainer, payeeService, router, bbStorage, _ref) {
	  var manage = _ref.manage;
	
	  var $ctrl = this;
	  var viewBillpaySummaryIntent = payeeService.viewBillpaySummaryIntent;
	
	  /**
	   * @name cloneState
	   * @type {function}
	   * @description Local copy of the control state
	   * @param {ViewState} viewState - current view state
	   * @param {object} viewState.data - current view state payee data
	   * @inner
	   */
	  var cloneState = function cloneState(_ref2) {
	    var data = _ref2.data;
	    var id = data.id,
	        accountNumber = data.accountNumber,
	        nickName = data.nickName;
	
	
	    var newState = {
	      data: {
	        id: id,
	        accountNumber: accountNumber,
	        nickName: nickName,
	        modifyPendingPayments: true
	      }
	    };
	    Object.assign($ctrl, newState);
	  };
	
	  /**
	   * @name transformPayeeDataForPut
	   * @type {function}
	   * @description Filter out any falsy values from the payee data to send
	   * @param {Object} data payee data
	   * @return {Object} containing only data that is part of the request
	   * @inner
	   */
	  var transformPayeeDataForPut = function transformPayeeDataForPut(_ref3) {
	    var accountNumber = _ref3.accountNumber,
	        modifyPendingPayments = _ref3.modifyPendingPayments,
	        nickName = _ref3.nickName;
	
	    var stateData = stateContainer.getState();
	    return Object.assign({
	      name: stateData.data.name,
	      accountNumber: accountNumber,
	      modifyPendingPayments: modifyPendingPayments
	    }, nickName && nickName.trim().length && { nickName: nickName });
	  };
	
	  /**
	   * @name BillpayEditPayeeElectronicController#$onInit
	   * @type {function}
	   * @description AngularJS Lifecycle hook used to initialize the controller
	   *   not yet fully implemented
	   */
	  var $onInit = function $onInit() {
	    var id = router.getParams();
	
	    payeeService.getPayeesElectronicRecord(id).then(function () {
	      cloneState(stateContainer.getState());
	    }).catch(function () {
	      // error handling is dealt with in the service
	    });
	  };
	
	  /**
	   * @name BillpayEditPayeeElectronicController#submitPayeeDataForm
	   * @type {function}
	   * @description Update electronic payee information
	   * @param {boolean} isFormValid Validation of the form
	   * @param {Object} data data from the form that needs transforming
	   */
	  var submitPayeeDataForm = function submitPayeeDataForm(isFormValid, data) {
	    if (!isFormValid) {
	      return;
	    }
	    var payee = transformPayeeDataForPut(data);
	    payeeService.putPayeesElectronicRecord(data.id, { payee: payee }).then(function () {
	      bbStorage.removeItem(_constants.STORAGE_PAYEE_EDIT_DATA);
	      router.goto('editPayeeConfirmation');
	    }).catch(function () {
	      // error handling is dealt with in the service
	    });
	  };
	
	  /**
	   * @name BillpayEditPayeeElectronicController#removePayee
	   * @description send the request for deleting an electronic payee
	   * @param {string} payeeId Id of electronic payee to delete
	   * @param {string} successMessage Success message to display to user
	   * @param {boolean} [cancelPendingPayments=false] Flag to delete pending
	   *  payments for the electronic payee
	   * @type {function}
	   */
	  var removePayee = function removePayee(payeeId, successMessage) {
	    var cancelPendingPayments = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	    return payeeService.removePayeeElectronicRecord(payeeId, { cancelPendingPayments: cancelPendingPayments }).then(function () {
	      bbStorage.removeItem(_constants.STORAGE_PAYEE_EDIT_DATA);
	      viewBillpaySummaryIntent({
	        notification: {
	          status: 'success',
	          message: successMessage
	        }
	      });
	    }).catch(manage.toggleDeleteModal);
	  };
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	    submitPayeeDataForm: submitPayeeDataForm,
	    removePayee: removePayee
	  });
	}

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = BillpayCreatePayeeSearchController;
	/**
	 * @module widget-bb-billpay-manage-payee-ng
	 * @name BillpayCreatePayeeSearchController
	 *
	 * @param {object} stateContainer
	 * @param {module:widget-bb-billpay-manage-payee-ng.ManagePayeeService} payeeService Payee service
	 * @param {Router} router
	 * @description Billpay - create payee search controller
	 */
	
	function BillpayCreatePayeeSearchController(stateContainer, payeeService, router, _ref) {
	  var create = _ref.create;
	
	  var $ctrl = this;
	
	  /**
	   * @name BillpayCreatePayeeSearchController#getPayees
	   * @type {function}
	   * @description Fetch a list of payees matching the typeahead query
	   * @param {object} typeaheadData options from the typeahead event
	   * @param {object} typeaheadData.options options from the event data
	   */
	  var getPayees = function getPayees(_ref2) {
	    var options = _ref2.options;
	    return payeeService.searchPayees(options.searchQuery).then(function (data) {
	      return { data: data, totalItems: data.length || 0 };
	    }).catch(function () {
	      // error handling is dealt with in the service
	    });
	  };
	
	  /**
	   * @name BillpayCreatePayeeSearchController#selectPayee
	   * @type {function}
	   * @description Select a payee to add and route to the create payee form
	   *   with that payee data
	   * @param {Object} payee data from the search step
	   */
	  var selectPayee = function selectPayee(payee) {
	    create.afterPayeeElectronicSelected(payee);
	    router.goto('createPayeeElectronic');
	  };
	
	  /**
	   * @name BillpayCreatePayeeSearchController#goToCreatePayeeManual
	   * @type {function}
	   * @description Routes the user to the create payee manual form
	   */
	  var goToCreatePayeeManual = function goToCreatePayeeManual() {
	    router.goto('createPayeeManual');
	  };
	
	  Object.assign($ctrl, {
	    getPayees: getPayees,
	    selectPayee: selectPayee,
	    goToCreatePayeeManual: goToCreatePayeeManual
	  });
	}

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = BillpayCreatePayeeManualController;
	/**
	 * @module widget-bb-billpay-manage-payee-ng
	 * @name BillpayCreatePayeeManualController
	 *
	 * @param {object} stateContainer
	 * @param {module:widget-bb-billpay-manage-payee-ng.ManagePayeeService} payeeService Payee service
	 * @param {Router} router
	 * @description Billpay - create payee manual controller
	 */
	
	function BillpayCreatePayeeManualController(stateContainer, payeeService, router) {
	  var $ctrl = this;
	
	  /**
	   * @name resetForm
	   * @type {function}
	   * @description Clear the state payee data
	   * @inner
	   */
	  var resetForm = function resetForm() {
	    $ctrl.data = {};
	  };
	
	  /**
	   * @name transformPayeeDataForPost
	   * @type {function}
	   * @description Filter out any falsy values from the payee data to send
	   * @param {Object} data payee data
	   * @return {Object} containing only data that is part of the request
	   * @inner
	   */
	  var transformPayeeDataForPost = function transformPayeeDataForPost(_ref) {
	    var name = _ref.name,
	        phoneNumber = _ref.phoneNumber,
	        _ref$address = _ref.address,
	        address1 = _ref$address.address1,
	        address2 = _ref$address.address2,
	        city = _ref$address.city,
	        state = _ref$address.state,
	        postalCode = _ref$address.postalCode,
	        modifyPendingPayments = _ref.modifyPendingPayments,
	        accountNumber = _ref.accountNumber,
	        nickName = _ref.nickName;
	    return Object.assign({
	      name: name,
	      phoneNumber: phoneNumber,
	      address: Object.assign({
	        address1: address1,
	        city: city,
	        state: state,
	        postalCode: postalCode
	      }, address2 && address2.trim().length && {
	        address2: address2
	      }),
	      modifyPendingPayments: modifyPendingPayments
	    }, accountNumber && accountNumber.trim().length && {
	      accountNumber: accountNumber
	    }, nickName && nickName.trim().length && {
	      nickName: nickName
	    });
	  };
	
	  var $onInit = function $onInit() {
	    resetForm();
	  };
	
	  /**
	   * @name BillpayCreatePayeeManualController#submitPayeeDataForm
	   * @type {function}
	   * @description Create new payee
	   * @param {boolean} isFormValid Validation of the form
	   * @param {Object} data data from the form that needs transforming
	   */
	  var submitPayeeDataForm = function submitPayeeDataForm(isFormValid, data) {
	    if (!isFormValid) {
	      return;
	    }
	
	    var payee = transformPayeeDataForPost(data);
	    payeeService.postPayeesRecord({ payee: payee }).then(function () {
	      router.goto('createPayeeConfirmation');
	    }).catch(function () {
	      // error handling is dealt with in the service
	    });
	  };
	
	  /**
	   * @name BillpayCreatePayeeManualController#goToCreatePayeeSearch
	   * @type {function}
	   * @description Routes the user to the payee search state form
	   */
	  var goToCreatePayeeSearch = function goToCreatePayeeSearch() {
	    router.goto('createPayeeSearch');
	  };
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	    submitPayeeDataForm: submitPayeeDataForm,
	    goToCreatePayeeSearch: goToCreatePayeeSearch
	  });
	}

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = BillpayCreatePayeeElectronicController;
	/**
	 * @module widget-bb-billpay-manage-payee-ng
	 * @name BillpayCreatePayeeElectronicController
	 *
	 * @param {object} stateContainer
	 * @param {module:widget-bb-billpay-manage-payee-ng.ManagePayeeService} payeeService Payee service
	 * @param {Router} router
	 * @param {ViewModel} viewModel view model
	 * @param {object} viewModel.manage view model manage
	 * @description Billpay - create electronic payee
	 */
	
	function BillpayCreatePayeeElectronicController(stateContainer, payeeService, router, _ref) {
	  var manage = _ref.manage;
	
	  var $ctrl = this;
	
	  /**
	   * @name clearForm
	   * @type {function}
	   * @description Clear form from controller state for new inputs
	   * @inner
	   */
	  var clearForm = function clearForm() {
	    Object.assign($ctrl, { data: {} });
	  };
	
	  /**
	   * @name transformPayeeDataForPost
	   * @type {function}
	   * @description Filter out any falsy values from the electronic payee data to send
	   * @param {Object} data electronic payee data
	   * @return {Object} containing only data that is part of the request
	   * @inner
	   */
	  var transformPayeeDataForPost = function transformPayeeDataForPost(_ref2) {
	    var accountNumber = _ref2.accountNumber,
	        merchantZipCode = _ref2.merchantZipCode,
	        nickName = _ref2.nickName;
	
	    var stateData = stateContainer.getState();
	    return Object.assign({
	      name: stateData.data.name,
	      merchantID: stateData.data.merchantID,
	      accountNumber: accountNumber,
	      merchantZipCode: merchantZipCode
	    }, nickName && nickName.trim().length && {
	      nickName: nickName
	    });
	  };
	
	  /**
	   * @name BillpayCreatePayeeElectronicController#$onInit
	   * @type {function}
	   * @description Clone the current state with values that are relevant
	   */
	  var $onInit = function $onInit() {
	    clearForm();
	  };
	
	  /**
	   * @name BillpayCreatePayeeElectronicController#submitPayeeDataForm
	   * @type {function}
	   * @description Create new payee
	   * @param {boolean} isFormValid Validation of the form
	   * @param {Object} data data from the form that needs transforming
	   */
	  var submitPayeeDataForm = function submitPayeeDataForm(isFormValid, data) {
	    if (!isFormValid) {
	      return;
	    }
	
	    var payee = transformPayeeDataForPost(data);
	    payeeService.postPayeesElectronicRecord({ payee: payee }).then(function () {
	      router.goto('createPayeeConfirmation');
	    }).catch(function () {
	      // error handling is dealt with in the service
	    });
	  };
	
	  /**
	   * @name BillpayCreatePayeeElectronicController#goToCreatePayeeSearch
	   * @type {function}
	   * @description Routes the user to the payee search state form
	   */
	  var goToCreatePayeeSearch = function goToCreatePayeeSearch() {
	    manage.clearErrorMap();
	    router.goto('createPayeeSearch');
	  };
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	    submitPayeeDataForm: submitPayeeDataForm,
	    goToCreatePayeeSearch: goToCreatePayeeSearch
	  });
	}

/***/ }),
/* 70 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ManagePayeeService;
	/**
	* The purpose of this module is to provide the main structure of the
	* Add a Payee widget. Outlining the workflows, connecting the data from the
	* model to the view via the customizations provided by the extension.
	*
	* @constructor ManagePayeeService
	* @description The core functionality of the Manage Payee widget
	*/
	function ManagePayeeService(_ref, model, events, widget, router, bbIntent) {
	  var create = _ref.create,
	      update = _ref.update,
	      get = _ref.get,
	      manage = _ref.manage,
	      remove = _ref.remove;
	
	  var viewBillpaySummaryIntent = bbIntent.create('intent.rb.billpay.summary.view');
	  return {
	    /**
	     * @name ManagePayeeService#postPayeesRecord
	     * @type {function}
	     * @param {Payee} data Payee data
	     * @return {Promise<void>}
	     * @description Create new payee
	     */
	    postPayeesRecord: function postPayeesRecord(data) {
	      create.beforeCreatePayee();
	      events.beforeCreatePayee();
	      return model.postPayeesRecord(data).then(function (_ref2) {
	        var id = _ref2.id;
	
	        var payee = Object.assign(data.payee, { id: id });
	        create.afterCreatePayeeSuccess(Object.assign({}, data, { payee: payee }));
	        events.afterCreatePayeeSuccess(data);
	      }).catch(function (error) {
	        create.afterCreatePayeeError(error);
	        events.afterCreatePayeeError(error);
	        throw error;
	      });
	    },
	
	
	    /**
	     * @name ManagePayeeService#putPayeesRecord
	     * @type {function}
	     * @param {string} id Payee id to put
	     * @param {Payee} data Payee data
	     * @return {Promise<void>}
	     * @description Update payee
	     */
	    putPayeesRecord: function putPayeesRecord(id, data) {
	      update.beforeUpdatePayee();
	      events.beforeUpdatePayee();
	      return model.putPayeesRecord(id, data).then(function () {
	        var payee = Object.assign(data.payee, { id: id });
	        update.afterUpdatePayeeSuccess(Object.assign({}, data, { payee: payee }));
	        events.afterUpdatePayeeSuccess(data);
	      }).catch(function (error) {
	        update.afterUpdatePayeeError(error);
	        events.afterUpdatePayeeError(error);
	        throw error;
	      });
	    },
	
	
	    /**
	     * @name ManagePayeeService#searchPayees
	     * @type {function}
	     * @description Search for payees
	     * @param {string} name The name that will be searched
	     * @return {Promise<object>}
	     */
	    searchPayees: function searchPayees(name) {
	      manage.beforeSearchPayees();
	      events.beforeSearchPayees();
	      return model.searchPayees({ name: name }).then(function (data) {
	        manage.afterSearchPayeesSuccess(data);
	        events.afterSearchPayeesSuccess(data);
	        return data;
	      }).catch(function (error) {
	        manage.afterSearchPayeesError(error);
	        events.afterSearchPayeesError(error);
	        throw error;
	      });
	    },
	
	
	    /**
	     * @name ManagePayeeService#getPayeeRecord
	     * @type {function}
	     * @param {string} id Payee ID
	     * @return {Promise<void>}
	     * @description Update the view with the payee loaded from the data source
	     */
	    getPayeeRecord: function getPayeeRecord(id) {
	      get.beforeGetPayeeRecord();
	      return model.getPayeeRecord(id).then(function (_ref3) {
	        var payee = _ref3.payee;
	
	        get.afterGetPayeeRecordSuccess(payee);
	      }).catch(function (error) {
	        get.afterGetPayeeRecordError(error);
	        throw error;
	      });
	    },
	
	
	    /**
	     * @name ManagePayeeService#getPendingPayments
	     * @type {function}
	     * @param {object} params params for request
	     * @return {Promise<void>}
	     * @description Update the view with the pending payments for this payee
	     *   payments with PENDING status only, not IN_PROGRESS
	     */
	    getPendingPayments: function getPendingPayments(params) {
	      get.beforeGetPendingPayments();
	      return model.getPayments(params).then(function (payments) {
	        get.afterGetPendingPaymentsSuccess(payments);
	      }).catch(function (error) {
	        get.afterGetPendingPaymentsError(error);
	      });
	    },
	
	
	    /**
	     * @name ManagePayeeService#getCurrencyCode
	     * @type {function}
	     * @return {string}
	     * @description Return the currency code from widget preferences
	     */
	    getCurrencyCode: function getCurrencyCode() {
	      return widget.getStringPreference('currency');
	    },
	
	
	    /**
	     * @name ManagePayeeService#isEditRoute
	     * @type {function}
	     * @description is the route edit payee
	     * @return {boolean} if the route is edit payee
	     * @inner
	     */
	    isEditRoute: function isEditRoute() {
	      var route = router.getRoute();
	      return ['editPayeeManual', 'editPayeeElectronic', 'editPayeeConfirmation'].includes(route);
	    },
	
	
	    /**
	     * @name ManagePayeeService#removePayeeRecord
	     * @type {function}
	     * @param {string} id Payee Id
	     * @param {object} params params for delete request
	     * @return {Promise<void>}
	     * @description Update the view for a payee deletion
	     */
	    removePayeeRecord: function removePayeeRecord(id, params) {
	      remove.beforeRemovePayeeRecord();
	      return model.deletePayeesRecord(id, params).then(function () {
	        remove.afterRemovePayeeRecordSuccess();
	      }).catch(function (error) {
	        remove.afterRemovePayeeRecordError(error);
	        throw error;
	      });
	    },
	
	
	    // electronic payee methods
	    /**
	     * @name ManagePayeeService#postPayeesElectronicRecord
	     * @type {function}
	     * @param {module:model-bb-billpay-ng.ElectronicPayeePost} data Electronic payee data
	     * @return {Promise<void>}
	     * @description Create new electronic payee
	     */
	    postPayeesElectronicRecord: function postPayeesElectronicRecord(data) {
	      create.beforeCreatePayee();
	      events.beforeCreatePayee();
	      return model.postPayeesElectronicRecord(data).then(function (_ref4) {
	        var id = _ref4.id;
	
	        var payee = Object.assign(data.payee, { id: id });
	        create.afterCreatePayeeSuccess(Object.assign({}, data, { payee: payee }));
	        events.afterCreatePayeeSuccess(data);
	      }).catch(function (error) {
	        create.afterCreatePayeeError(error);
	        events.afterCreatePayeeError(error);
	        throw error;
	      });
	    },
	
	
	    /**
	     * @name ManagePayeeService#getPayeesElectronicRecord
	     * @type {function}
	     * @param {string} id Electronic payee ID
	     * @return {Promise<void>}
	     * @description Update the view with the electronic payee loaded from the data source
	     */
	    getPayeesElectronicRecord: function getPayeesElectronicRecord(id) {
	      get.beforeGetPayeeRecord();
	      return model.getPayeesElectronicRecord(id).then(function (_ref5) {
	        var payee = _ref5.payee;
	
	        get.afterGetPayeeRecordSuccess(payee);
	      }).catch(function (error) {
	        get.afterGetPayeeRecordError(error);
	        throw error;
	      });
	    },
	
	
	    /**
	     * @name ManagePayeeService#putPayeesElectronicRecord
	     * @type {function}
	     * @param {string} id Electronic payee ID to put
	     * @param {module:model-bb-billpay-ng.ElectronicPayeePut} data Electronic payee data
	     * @return {Promise<void>}
	     * @description Update an electronic payee
	     */
	    putPayeesElectronicRecord: function putPayeesElectronicRecord(id, data) {
	      update.beforeUpdatePayee();
	      events.beforeUpdatePayee();
	      return model.putPayeesElectronicRecord(id, data).then(function () {
	        var payee = Object.assign(data.payee, { id: id });
	        update.afterUpdatePayeeSuccess(Object.assign({}, data, { payee: payee }));
	        events.afterUpdatePayeeSuccess(data);
	      }).catch(function (error) {
	        update.afterUpdatePayeeError(error);
	        events.afterUpdatePayeeError(error);
	        throw error;
	      });
	    },
	
	
	    /**
	     * @name ManagePayeeService#removePayeeElectronicRecord
	     * @type {function}
	     * @param {string} id Electronic payee ID
	     * @param {object} params params for delete request
	     * @return {Promise<void>}
	     * @description Update the view for an electronic payee deletion
	     */
	    removePayeeElectronicRecord: function removePayeeElectronicRecord(id, params) {
	      remove.beforeRemovePayeeRecord();
	      return model.deletePayeesElectronicRecord(id, params).then(function () {
	        remove.afterRemovePayeeRecordSuccess();
	      }).catch(function (error) {
	        remove.afterRemovePayeeRecordError(error);
	        throw error;
	      });
	    },
	
	
	    /**
	     * @name ManagePayeeService#viewBillpaySummaryIntent
	     * @type {function}
	     * @description Intent for viewing bill pay summary
	     */
	    viewBillpaySummaryIntent: viewBillpaySummaryIntent
	  };
	}
	
	/**
	 * Payee type definition
	 * @typedef {Object} Payee
	 * @property {string} name - Payee name
	 * @property {string} nickName - Payee nickname
	 * @property {string} phoneNumber - Payee phone number
	 * @property {object} address - Payee complete address
	 * @property {string} address.address1 - Payee address1
	 * @property {string} address.address2 - Payee address2
	 * @property {string} address.city - Payee city
	 * @property {string} address.state - Payee state
	 * @property {string} address.postalCode - Payee postal code
	 * @property {string} accountNumber - Payee nickname
	 */

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ViewModel;
	
	var _create = __webpack_require__(72);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _update = __webpack_require__(73);
	
	var _update2 = _interopRequireDefault(_update);
	
	var _get = __webpack_require__(74);
	
	var _get2 = _interopRequireDefault(_get);
	
	var _manage = __webpack_require__(75);
	
	var _manage2 = _interopRequireDefault(_manage);
	
	var _remove = __webpack_require__(76);
	
	var _remove2 = _interopRequireDefault(_remove);
	
	var _initialState = __webpack_require__(77);
	
	var _initialState2 = _interopRequireDefault(_initialState);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @constructor ViewModel
	 * @param {module:lib-bb-state-container-ng.StateContainer} stateContainer
	 * @param {Hooks} hooks
	 * @param {object} errorHookUtilities
	 */
	function ViewModel(stateContainer, hooks, errorHookUtilities) {
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
	     * @name ViewModel#create
	     * @type {object}
	     * @description expose create viewmodel
	     */
	    create: (0, _create2.default)(stateContainer, hooks, errorHookUtilities),
	
	    /**
	     * @name ViewModel#update
	     * @type {object}
	     * @description expose update viewmodel
	     */
	    update: (0, _update2.default)(stateContainer, hooks, errorHookUtilities),
	
	    /**
	     * @name ViewModel#get
	     * @type {object}
	     * @description expose get viewmodel
	     */
	    get: (0, _get2.default)(stateContainer, hooks, errorHookUtilities),
	
	    /**
	     * @name ViewModel#manage
	     * @type {object}
	     * @description expose manage viewmodel
	     */
	    manage: (0, _manage2.default)(stateContainer, hooks, errorHookUtilities),
	
	    /**
	     * @name ViewModel#remove
	     * @type {object}
	     * @description expose remove viewmodel
	     */
	    remove: (0, _remove2.default)(stateContainer, hooks, errorHookUtilities)
	  };
	}

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Create;
	/**
	 *
	 * @constructor Create
	 * @param {module:lib-bb-state-container-ng.StateContainer} stateContainer
	 * @param {Hooks} hooks
	 * @param {object} errorHookUtilities
	 */
	function Create(stateContainer, hooks, errorHookUtilities) {
	  /**
	   * @name Create
	   * @type {Object}
	   */
	  return {
	    /**
	     * @name Create#afterPayeeElectronicSelected
	     * @type {function}
	     * @param {object} payee the selected payee data
	     * @description Amend the state to include the selected payee data
	     */
	    afterPayeeElectronicSelected: stateContainer.createAction(function (current, payee) {
	      return Object.assign({}, current, {
	        data: payee
	      });
	    }),
	
	    /**
	     * @name Create#beforeCreatePayee
	     * @type {function}
	     * @description Change the indication that the payee is being created
	     */
	    beforeCreatePayee: stateContainer.createAction(function (current) {
	      return Object.assign({}, current, {
	        isCreatingPayee: true,
	        successMessageViewed: false
	      });
	    }),
	
	    /**
	     * @name Create#afterCreatePayeeSuccess
	     * @type {function}
	     * @param {object} data Payee data
	     * @description Update the `ViewState` after creating a payee
	     */
	    afterCreatePayeeSuccess: stateContainer.createAction(function (current, data) {
	      return Object.assign({}, current, {
	        isCreatingPayee: false,
	        errorMap: {},
	        createdPayee: hooks.transformPayee(data)
	      });
	    }),
	
	    /**
	     * @name Create#afterCreatePayeeError
	     * @type {function}
	     * @param {object} error Create payee record error
	     * @description Amend the view to show the error encountered when creating a payee
	     */
	    afterCreatePayeeError: stateContainer.createAction(function (current, error) {
	      var thisError = errorHookUtilities.transformErrorMap(error);
	      return hooks.afterCreatePayeeError(Object.assign({}, current, {
	        isCreatingPayee: false,
	        error: thisError,
	        errorMap: errorHookUtilities.getErrorMap(thisError.errors)
	      }));
	    })
	  };
	}

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Update;
	/**
	 *
	 * @constructor Update
	 * @param {module:lib-bb-state-container-ng.StateContainer} stateContainer
	 * @param {Hooks} hooks
	 * @param {object} errorHookUtilities
	 */
	function Update(stateContainer, hooks, errorHookUtilities) {
	  /**
	   * @name Update
	   * @type {Object}
	   */
	  return {
	    /**
	     * @name Update#beforeUpdatePayee
	     * @type {function}
	     * @description Change the indication that the payee is being updated
	     */
	    beforeUpdatePayee: stateContainer.createAction(function (current) {
	      return Object.assign({}, current, {
	        isUpdatingPayee: true,
	        successMessageViewed: false
	      });
	    }),
	
	    /**
	     * @name Update#afterUpdatePayeeSuccess
	     * @type {function}
	     * @param {object} data Payee data
	     * @description Update the `ViewState` after updating a payee
	     */
	    afterUpdatePayeeSuccess: stateContainer.createAction(function (current, data) {
	      return Object.assign({}, current, {
	        isUpdatingPayee: false,
	        errorMap: {},
	        updatedPayee: hooks.transformPayee(data)
	      });
	    }),
	
	    /**
	     * @name Update#afterUpdatePayeeError
	     * @type {function}
	     * @param {object} error Update payee record error
	     * @description Amend the view to show the error encountered when updating a payee
	     */
	    afterUpdatePayeeError: stateContainer.createAction(function (current, error) {
	      var thisError = errorHookUtilities.transformErrorMap(error);
	      return hooks.afterCreatePayeeError(Object.assign({}, current, {
	        isUpdatingPayee: false,
	        error: thisError,
	        errorMap: errorHookUtilities.getErrorMap(thisError.errors)
	      }));
	    })
	  };
	}

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Get;
	/**
	 *
	 * @constructor Get
	 * @param {module:lib-bb-state-container-ng.StateContainer} stateContainer
	 * @param {Hooks} hooks
	 * @param {object} errorHookUtilities
	 */
	function Get(stateContainer, hooks, errorHookUtilities) {
	  /**
	   * @name filterPendingStatusPayments
	   * @type {function}
	   * @description Check if payment has a status of PENDING
	   * @return {boolean}
	   * @inner
	   */
	  var filterPendingStatusPayments = function filterPendingStatusPayments(payment) {
	    return payment.status === 'PENDING';
	  };
	
	  /**
	   * @name Get
	   * @type {Object}
	   */
	  return {
	
	    /**
	     * @name Get#beforeGetPayeeRecord
	     * @type {function}
	     * @description Change the indication that the payee is being retrieved
	     */
	    beforeGetPayeeRecord: stateContainer.createAction(function (current) {
	      return Object.assign({}, current, {
	        isGettingPayee: true
	      });
	    }),
	
	    /**
	     * @name Get#afterGetPayeeRecordSuccess
	     * @type {function}
	     * @param {module:data-bb-bill-pay-http-ng.BillPayData.PayeeGetResponse} payee Retrieved payee
	     * @description Amend the state to show the retrieved payee
	     */
	    afterGetPayeeRecordSuccess: stateContainer.createAction(function (current, payee) {
	      return hooks.afterPayeeSelected(Object.assign({}, current, {
	        isGettingPayee: false,
	        data: Object.assign({}, current.data, payee)
	      }));
	    }),
	
	    /**
	     * @name Get#afterGetPayeeRecordError
	     * @type {function}
	     * @param {object} error Get payee error
	     * @description Amend the state to include the error encountered when retrieving payee
	     */
	    afterGetPayeeRecordError: stateContainer.createAction(function (current, error) {
	      return Object.assign({}, current, {
	        isGettingPayee: false,
	        error: error
	      });
	    }),
	
	    /**
	     * @name Get#beforeGetPendingPayments
	     * @type {function}
	     * @description Amend the state to indicate that the payments are being fetched
	     */
	    beforeGetPendingPayments: stateContainer.createAction(function (current) {
	      return Object.assign({}, current, {
	        isLoadingPaymentsForPayee: true,
	        pendingPayments: []
	      });
	    }),
	
	    /**
	     * @name Get#afterGetPendingPaymentsSuccess
	     * @type {function}
	     * @param {object} payments The pending payments retrieved
	     * @description Amend the state to include a list of pending payments
	     */
	    afterGetPendingPaymentsSuccess: stateContainer.createAction(function (current, pendingPayments) {
	      var filteredPendingPayments = pendingPayments.filter(filterPendingStatusPayments);
	      return Object.assign({}, current, {
	        isLoadingPaymentsForPayee: false,
	        pendingPayments: filteredPendingPayments
	      }, hooks.transformPendingPayments(filteredPendingPayments));
	    }),
	
	    /**
	     * @name Get#afterGetPendingPaymentsError
	     * @type {function}
	     * @param {object} error Get pending payments error
	     * @description Amend the state to include the error encountered when
	     *   retrieving pending payments
	     */
	    afterGetPendingPaymentsError: stateContainer.createAction(function (current, error) {
	      var thisError = errorHookUtilities.transformErrorMap(error);
	      return hooks.afterRemovePayeeError(Object.assign({}, current, {
	        isLoadingPaymentsForPayee: false,
	        pendingPayments: [],
	        error: error,
	        errorMap: errorHookUtilities.getErrorMap(thisError.errors)
	      }));
	    })
	  };
	}

/***/ }),
/* 75 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Manage;
	/**
	 *
	 * @constructor Manage
	 * @param {module:lib-bb-state-container-ng.StateContainer} stateContainer
	 * @param {Hooks} hooks
	 * @param {object} errorHookUtilities
	 */
	function Manage(stateContainer, hooks, errorHookUtilities) {
	  /**
	   * @name Manage
	   * @type {Object}
	   */
	  return {
	    /**
	     * @name manage#beforeSearchPayees
	     * @type {function}
	     * @description Change the indication that the payees are being searched
	     */
	    beforeSearchPayees: stateContainer.createAction(function (current) {
	      return Object.assign({}, current, {
	        isLoadingPayees: true,
	        payees: []
	      });
	    }),
	
	    /**
	     * @name manage#afterSearchPayeesSuccess
	     * @type {function}
	     * @param {object[]} payees List of payees
	     * @description Update the `ViewState` after getting the payees
	     */
	    afterSearchPayeesSuccess: stateContainer.createAction(function (current, payees) {
	      return Object.assign({}, current, {
	        isLoadingPayees: false,
	        payees: payees
	      });
	    }),
	
	    /**
	     * @name manage#afterSearchPayeesError
	     * @type {function}
	     * @param {object} error Search payees error
	     * @description Amend the state to include the error encountered when searching for payees
	     */
	    afterSearchPayeesError: stateContainer.createAction(function (current, error) {
	      return Object.assign({}, current, {
	        isLoadingPayees: false,
	        error: error
	      });
	    }),
	
	    /**
	     * @name manage#resetForm
	     * @type {function}
	     * @description Amend the state to be clear and ready for adding a new Payee
	     */
	    resetForm: stateContainer.createAction(function (current) {
	      return Object.assign({}, current, {
	        data: {},
	        successMessageViewed: false
	      });
	    }),
	
	    /**
	     * @name manage#toggleDeleteModal
	     * @type {function}
	     * @description Amend the state to toggle showing the delete modal
	     */
	    toggleDeleteModal: stateContainer.createAction(function (current) {
	      return Object.assign({}, current, {
	        showDeleteModal: !current.showDeleteModal
	      });
	    }),
	
	    /**
	     * @name ViewModel#clearBackendError
	     * @type {function}
	     * @param {string} inputName the input to clear error against
	     * @description Amend the state to clear an input error
	     */
	    clearBackendError: stateContainer.createAction(function (current, inputName) {
	      return Object.assign({}, current, {
	        errorMap: errorHookUtilities.clearBackendError(inputName, current)
	      });
	    }),
	
	    /**
	     * @name ViewModel#clearErrorMap
	     * @type {function}
	     * @description Amend the state to clear an input error
	     */
	    clearErrorMap: stateContainer.createAction(function (current) {
	      return Object.assign({}, current, {
	        errorMap: {}
	      });
	    })
	  };
	}

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Remove;
	/**
	 *
	 * @constructor Remove
	 * @param {module:lib-bb-state-container-ng.StateContainer} stateContainer
	 * @param {Hooks} hooks
	 * @param {object} errorHookUtilities
	
	 */
	function Remove(stateContainer, hooks, errorHookUtilities) {
	  /**
	   * @name Remove
	   * @type {Object}
	   */
	  return {
	    /**
	     * @name Remove#beforeRemovePayeeRecord
	     * @type {function}
	     * @description Amend the state before a payee is removed
	     */
	    beforeRemovePayeeRecord: stateContainer.createAction(function (current) {
	      return Object.assign({}, current, {
	        isRemovingPayee: true
	      });
	    }),
	
	    /**
	     * @name Remove#afterRemovePayeeRecordSuccess
	     * @type {function}
	     * @description Amend the state after a payee is removed successfully
	     */
	    afterRemovePayeeRecordSuccess: stateContainer.createAction(function (current) {
	      return Object.assign({}, current, {
	        isRemovingPayee: false
	      });
	    }),
	
	    /**
	     * @name Remove#afterRemovePayeeRecordError
	     * @type {function}
	     * @param {object} error Remove payee error
	     * @description Amend the state to include the error encountered when
	     *   removing payee
	     */
	    afterRemovePayeeRecordError: stateContainer.createAction(function (current, error) {
	      var thisError = errorHookUtilities.transformErrorMap(error);
	      return hooks.afterRemovePayeeError(Object.assign({}, current, {
	        isRemovingPayee: false,
	        error: thisError,
	        errorMap: errorHookUtilities.getErrorMap(thisError.errors)
	      }));
	    })
	  };
	}

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return {
	    data: {
	      name: '',
	      phoneNumber: '',
	      address: {},
	      modifyPendingPayments: true,
	      accountNumber: '',
	      nickName: ''
	    },
	    payees: [],
	    error: null,
	    isCreatingPayee: false,
	    isLoadingPayees: false,
	    route: {
	      name: 'addPayee',
	      params: {}
	    }
	  };
	};
	
	/**
	 * @typedef {object} ViewState
	 * @description
	 * The current state of the [ViewModel]{@link module:lib-bb-view-model-ng}.
	 * @property {object} route Indicates current router state
	 */

/***/ }),
/* 78 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * The router service of the BillpayManagePayee widget
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
/* 79 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var identity = function identity(any) {
	  return any;
	};
	
	exports.default = {
	  /**
	   * @name Hooks#afterPayeeSelected
	   * @type {function}
	   * @description Hook for processing the state after selecting a payee
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  afterPayeeSelected: identity,
	
	  /**
	   * @name Hooks#afterCreatePayeeError
	   * @type {function}
	   * @description Hook for processing the state after creating a payee fails
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  afterCreatePayeeError: identity,
	
	  /**
	   * @name Hooks#afterUpdatePayeeError
	   * @type {function}
	   * @description Hook for processing the state after updating a payee fails
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  afterUpdatePayeeError: identity,
	
	  /**
	   * @name Hooks#transformPayee
	   * @type {function}
	   * @description Make any modifications needed to the loaded payee
	   * @param {PayeeSummary} payee The current state of the payee
	   * @return {Object} The transformed payee
	   */
	  transformPayee: identity,
	
	  /**
	   * @name Hooks#transformErrorMap
	   * @type {function}
	   * @description Hook for processing the state after creating or updating a payee fails
	   * @param {ViewState} current The current state of the view model
	   * @param {module:lib-bb-model-errors.ModelError} modelError
	   * @return {ViewState} The new state of the view model
	   */
	  transformErrorMap: identity,
	
	  /**
	   * @name Hooks#afterRemovePayeeError
	   * @type {function}
	   * @description Hook for processing the state after deleting a payee fails
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  afterRemovePayeeError: identity,
	
	  /**
	   * @name Hooks#transformPendingPayments
	   * @type {function}
	   * @description Hook for processing data for displaying pending payments
	   *   with a group of headings and grouped payments returned
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  transformPendingPayments: identity
	};

/***/ }),
/* 80 */
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
	  BEFORE_CREATE_PAYEE_RECORD: 'bb.event.createPayeeRecord.before',
	  AFTER_CREATE_PAYEE_RECORD: 'bb.event.createPayeeRecord.after',
	  AFTER_CREATE_PAYEE_RECORD_ERROR: 'bb.event.createPayeeRecord.error',
	  BEFORE_UPDATE_PAYEE_RECORD: 'bb.event.updatePayeeRecord.before',
	  AFTER_UPDATE_PAYEE_RECORD: 'bb.event.updatePayeeRecord.after',
	  AFTER_UPDATE_PAYEE_RECORD_ERROR: 'bb.event.updatePayeeRecord.error',
	  BEFORE_SEARCH_PAYEES: 'bb.event.searchPayees.before',
	  AFTER_SEARCH_PAYEES: 'bb.event.searchPayees.after',
	  AFTER_SEARCH_PAYEES_ERROR: 'bb.event.searchPayees.error'
	};
	
	exports.default = function (bus) {
	  return {
	
	    /**
	     * @name beforeCreatePayee
	     * @type {function}
	     * @description Before create payee record
	     */
	    beforeCreatePayee: function beforeCreatePayee() {
	      bus.publish(Events.BEFORE_CREATE_PAYEE_RECORD);
	    },
	
	    /**
	     * @name afterCreatePayeeSuccess
	     * @type {function}
	     * @param {object} data Payee data
	     * @description After create payee record
	     */
	    afterCreatePayeeSuccess: function afterCreatePayeeSuccess(data) {
	      bus.publish(Events.AFTER_CREATE_PAYEE_RECORD, { data: data });
	    },
	
	    /**
	     * @name afterCreatePayeeError
	     * @type {function}
	     * @param {object} error Error while creating a payee
	     * @description After create payee error
	     */
	    afterCreatePayeeError: function afterCreatePayeeError(error) {
	      bus.publish(Events.AFTER_CREATE_PAYEE_RECORD_ERROR, { error: error });
	    },
	
	    /**
	     * @name beforeUpdatePayee
	     * @type {function}
	     * @description Before update payee record
	     */
	    beforeUpdatePayee: function beforeUpdatePayee() {
	      bus.publish(Events.BEFORE_UPDATE_PAYEE_RECORD);
	    },
	
	    /**
	     * @name afterUpdatePayeeSuccess
	     * @type {function}
	     * @param {object} data Payee data
	     * @description After update payee record
	     */
	    afterUpdatePayeeSuccess: function afterUpdatePayeeSuccess(data) {
	      bus.publish(Events.AFTER_UPDATE_PAYEE_RECORD, { data: data });
	    },
	
	    /**
	     * @name afterUpdatePayeeError
	     * @type {function}
	     * @param {object} error Error while updating a payee
	     * @description After update payee error
	     */
	    afterUpdatePayeeError: function afterUpdatePayeeError(error) {
	      bus.publish(Events.AFTER_UPDATE_PAYEE_RECORD_ERROR, { error: error });
	    },
	
	    /**
	     * @name beforeSearchPayees
	     * @type {function}
	     * @description Before searching payees
	     */
	    beforeSearchPayees: function beforeSearchPayees() {
	      bus.publish(Events.BEFORE_SEARCH_PAYEES);
	    },
	
	    /**
	     * @name afterSearchPayeesSuccess
	     * @type {function}
	     * @param {object[]} payees List of payees
	     * @description After successful payees search
	     */
	    afterSearchPayeesSuccess: function afterSearchPayeesSuccess(payees) {
	      bus.publish(Events.AFTER_SEARCH_PAYEES, { payees: payees });
	    },
	
	    /**
	     * @name afterSearchPayeesError
	     * @type {function}
	     * @param {object} error Error while searching payees
	     * @description After search payees error
	     */
	    afterSearchPayeesError: function afterSearchPayeesError(error) {
	      bus.publish(Events.AFTER_SEARCH_PAYEES_ERROR, { error: error });
	    }
	
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=widget-bb-billpay-manage-payee-ng.js.map