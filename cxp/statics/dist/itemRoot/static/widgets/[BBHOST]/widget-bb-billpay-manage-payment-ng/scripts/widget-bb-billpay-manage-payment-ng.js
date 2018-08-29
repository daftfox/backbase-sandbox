(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib-bb-model-errors"), require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("lib-bb-state-container-ng"), require("lib-bb-storage-ng"), require("lib-bb-extension-helpers-ng"), require("model-bb-billpay-ng"), require("lib-bb-billpay-errors"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-billpay-manage-payment-ng", ["lib-bb-model-errors", "vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-event-bus-ng", "lib-bb-widget-extension-ng", "lib-bb-intent-ng", "lib-bb-state-container-ng", "lib-bb-storage-ng", "lib-bb-extension-helpers-ng", "model-bb-billpay-ng", "lib-bb-billpay-errors"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-billpay-manage-payment-ng"] = factory(require("lib-bb-model-errors"), require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("lib-bb-state-container-ng"), require("lib-bb-storage-ng"), require("lib-bb-extension-helpers-ng"), require("model-bb-billpay-ng"), require("lib-bb-billpay-errors"));
	else
		root["widget-bb-billpay-manage-payment-ng"] = factory(root["lib-bb-model-errors"], root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-widget-extension-ng"], root["lib-bb-intent-ng"], root["lib-bb-state-container-ng"], root["lib-bb-storage-ng"], root["lib-bb-extension-helpers-ng"], root["model-bb-billpay-ng"], root["lib-bb-billpay-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_45__, __WEBPACK_EXTERNAL_MODULE_47__, __WEBPACK_EXTERNAL_MODULE_54__, __WEBPACK_EXTERNAL_MODULE_55__, __WEBPACK_EXTERNAL_MODULE_56__, __WEBPACK_EXTERNAL_MODULE_57__, __WEBPACK_EXTERNAL_MODULE_58__, __WEBPACK_EXTERNAL_MODULE_59__, __WEBPACK_EXTERNAL_MODULE_60__, __WEBPACK_EXTERNAL_MODULE_61__, __WEBPACK_EXTERNAL_MODULE_62__) {
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

	module.exports = __webpack_require__(81);

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
/* 45 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_45__;

/***/ }),
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
/* 53 */,
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
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
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
	
	var _libBbExtensionHelpersNg = __webpack_require__(60);
	
	var _libBbExtensionHelpersNg2 = _interopRequireDefault(_libBbExtensionHelpersNg);
	
	var _modelBbBillpayNg = __webpack_require__(61);
	
	var _modelBbBillpayNg2 = _interopRequireDefault(_modelBbBillpayNg);
	
	var _libBbStateContainerNg = __webpack_require__(58);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _libBbIntentNg = __webpack_require__(57);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbStorageNg = __webpack_require__(59);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _libBbBillpayErrors = __webpack_require__(62);
	
	var _payABillController = __webpack_require__(82);
	
	var _payABillController2 = _interopRequireDefault(_payABillController);
	
	var _datepickerController = __webpack_require__(83);
	
	var _datepickerController2 = _interopRequireDefault(_datepickerController);
	
	var _recurringController = __webpack_require__(84);
	
	var _recurringController2 = _interopRequireDefault(_recurringController);
	
	var _editPaymentController = __webpack_require__(85);
	
	var _editPaymentController2 = _interopRequireDefault(_editPaymentController);
	
	var _service = __webpack_require__(87);
	
	var _service2 = _interopRequireDefault(_service);
	
	var _dateService = __webpack_require__(88);
	
	var _dateService2 = _interopRequireDefault(_dateService);
	
	var _accountService = __webpack_require__(89);
	
	var _accountService2 = _interopRequireDefault(_accountService);
	
	var _paymentService = __webpack_require__(90);
	
	var _paymentService2 = _interopRequireDefault(_paymentService);
	
	var _expeditedService = __webpack_require__(91);
	
	var _expeditedService2 = _interopRequireDefault(_expeditedService);
	
	var _viewModel = __webpack_require__(92);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	var _defaultHooks = __webpack_require__(94);
	
	var _defaultHooks2 = _interopRequireDefault(_defaultHooks);
	
	var _events = __webpack_require__(95);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bb-billpay-manage-payment-ng
	 *
	 * @description
	 * Billpay manage payment
	 */
	var moduleKey = 'widget-bb-billpay-manage-payment-ng';
	var hooksKey = moduleKey + ':hooks';
	var serviceKey = moduleKey + ':service';
	var dateServiceKey = moduleKey + ':date-service';
	var accountServiceKey = moduleKey + ':account-service';
	var paymentServiceKey = moduleKey + ':payment-service';
	var expeditedServiceKey = moduleKey + ':expedited-service';
	var eventServiceKey = moduleKey + ':events';
	var viewModelKey = moduleKey + ':view-model';
	var errorHelperUtilitiesKey = moduleKey + ':errorHelperUtilities';
	var errorHookUtilitiesKey = moduleKey + ':errorHookUtilities';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbWidgetNg2.default, _libBbEventBusNg2.default, _modelBbBillpayNg2.default, _libBbExtensionHelpersNg2.default, _libBbStateContainerNg2.default, _libBbIntentNg2.default, _libBbStorageNg2.default]).factory(eventServiceKey, [_libBbEventBusNg.eventBusKey,
	/* into */
	_events2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(_defaultHooks2.default)).factory(errorHelperUtilitiesKey, [
	/* into */
	_libBbBillpayErrors.ErrorHelperUtilities]).factory(errorHookUtilitiesKey, [
	/* into */
	_libBbBillpayErrors.ErrorHookUtilities]).factory(serviceKey, [viewModelKey, _modelBbBillpayNg.modelBillpayKey, eventServiceKey, _libBbWidgetNg.widgetKey, _libBbStorageNg.bbStorageServiceKey,
	/* into */
	_service2.default]).factory(dateServiceKey, [expeditedServiceKey,
	/* into */
	_dateService2.default]).factory(accountServiceKey, [
	/* into */
	_accountService2.default]).factory(expeditedServiceKey, [_libBbWidgetNg.widgetKey,
	/* into */
	_expeditedService2.default]).factory(paymentServiceKey, [dateServiceKey, expeditedServiceKey, _modelBbBillpayNg.modelBillpayKey, viewModelKey, eventServiceKey,
	/* into */
	_paymentService2.default]).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey, hooksKey, dateServiceKey, accountServiceKey, errorHookUtilitiesKey,
	/* into */
	_viewModel2.default])
	
	// Add `model` and `service` to the `context` provided to the extension `helpers` key
	.factory(_libBbExtensionHelpersNg.extensionHelpersContextKey, [serviceKey, dateServiceKey, accountServiceKey, paymentServiceKey, expeditedServiceKey, _libBbIntentNg.bbIntentKey, errorHelperUtilitiesKey, viewModelKey,
	/* into */
	function (managePaymentService, dateService, accountService, paymentService, expeditedService, bbIntent, errorHelperUtilities, managePaymentViewModel) {
	  return {
	    managePaymentService: managePaymentService,
	    dateService: dateService,
	    accountService: accountService,
	    paymentService: paymentService,
	    expeditedService: expeditedService,
	    bbIntent: bbIntent,
	    errorHelperUtilities: errorHelperUtilities,
	    managePaymentViewModel: managePaymentViewModel
	  };
	}]).controller('PayABillController', [
	// dependencies to inject
	_libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, _libBbStateContainerNg.bbStateContainerKey, serviceKey, _libBbIntentNg.bbIntentKey,
	/* into */
	_payABillController2.default]).controller('DatepickerController', [
	// dependencies to inject
	serviceKey, dateServiceKey, expeditedServiceKey,
	/* into */
	_datepickerController2.default]).controller('RecurringController', [
	// dependencies to inject
	_libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, _libBbStateContainerNg.bbStateContainerKey, serviceKey, _libBbIntentNg.bbIntentKey, _libBbStorageNg.bbStorageServiceKey,
	/* into */
	_recurringController2.default]).controller('EditPaymentController', [
	// dependencies to inject
	_libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, _libBbStateContainerNg.bbStateContainerKey, paymentServiceKey, serviceKey, dateServiceKey, _libBbIntentNg.bbIntentKey, _libBbStorageNg.bbStorageServiceKey,
	/* into */
	_editPaymentController2.default]).run([_libBbEventBusNg.eventBusKey, serviceKey, function (eventBus, service) {
	  // subcribe to remove payment success event
	  eventBus.subscribe('bb.event.billpay.removePayment.after', function () {
	    service.getPayeesSummary().catch(function () {
	      // error handling is dealt with in the service
	    });
	  });
	}]).name;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = PayABillController;
	
	var _vendorBbAngular = __webpack_require__(47);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name PayABillController
	 *
	 * @description
	 * Billpay pay a bill widget controller
	 *
	 * @type {function}
	 */
	function PayABillController(bus, widget, stateContainer, managePaymentService, bbIntent) {
	  /**
	   * @constructor BillpaySummaryNotification
	   * @description Creates a new empty hidden notification
	   */
	  function BillpaySummaryNotification() {
	    var displayNotification = false;
	    var notificationStatus = '';
	    var notificationMessage = '';
	
	    return {
	      /**
	       * @name Notification#clear
	       * @type {function}
	       * @description Clear & hide the notification
	       */
	      clear: function clear() {
	        displayNotification = false;
	        notificationStatus = '';
	        notificationMessage = '';
	      },
	
	      /**
	       * @name Notification#set
	       * @type {function}
	       * @description Set and show the notification
	       */
	      set: function set(_ref) {
	        var status = _ref.status,
	            message = _ref.message;
	
	        displayNotification = true;
	        notificationStatus = status;
	        notificationMessage = message;
	      },
	
	      /**
	       * @name Notification#display
	       * @type {boolean}
	       * @description Expose the display property
	       */
	      get display() {
	        return displayNotification;
	      },
	
	      /**
	       * @name Notification#status
	       * @type {string}
	       * @description Expose the status property
	       */
	      get status() {
	        return notificationStatus;
	      },
	
	      /**
	       * @name Notification#message
	       * @type {string}
	       * @description Expose the message property
	       */
	      get message() {
	        return notificationMessage;
	      }
	    };
	  }
	
	  var $ctrl = this;
	  var viewState = {};
	  var notification = new BillpaySummaryNotification();
	
	  /**
	   * @name getInitData
	   * @type {function}
	   * @param {string} [newPayeeId] id of the newly created payee
	   * @description fetch data required for initialisation
	   * @inner
	   */
	  var getInitData = function getInitData(newPayeeId) {
	    managePaymentService.getPayeesSummary(newPayeeId).catch(function () {
	      // error handling is dealt with in the service
	    });
	    managePaymentService.getAccounts().catch(function () {
	      // error handling is dealt with in the service
	    });
	  };
	
	  /**
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @name PayABillController#$onInit
	   * @type {function}
	   * @returns {void}
	   */
	  var $onInit = function $onInit() {
	    stateContainer.subscribe(function (state) {
	      return _vendorBbAngular2.default.copy(state, $ctrl.viewState);
	    });
	
	    // Deprecated in Mobile SDK 3.0
	    bus.publish('cxp.item.loaded', {
	      id: widget.getId()
	    });
	
	    bus.publish('bb.item.loaded', {
	      id: widget.getId()
	    });
	
	    // Handle the intent to create a new payment
	    bbIntent.handle('intent.rb.billpay.single-bill.create', function (id) {
	      getInitData(id);
	    });
	
	    // Handle the general view intent.
	    // Passed an object of options. Run functions based on options
	    bbIntent.handle('intent.rb.billpay.summary.view', function () {
	      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	          payee = _ref2.payee,
	          intentNotification = _ref2.notification;
	
	      var newPayeeId = payee ? payee.id : undefined;
	      getInitData(newPayeeId);
	
	      // Display any success/error message
	      if (intentNotification) {
	        notification.set(intentNotification);
	      }
	    });
	
	    // Handle when no intent is called
	    bbIntent.initHandler(getInitData);
	
	    bbIntent.init();
	  };
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	    viewState: viewState,
	    notification: notification
	  });
	}

/***/ }),
/* 83 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = DatepickerController;
	// Keys which are allowed in the datepicker
	var datepickerAllowedKeys = {
	  8: 'Backspace',
	  9: 'Tab',
	  20: 'CapsLock',
	  27: 'Escape',
	  37: 'ArrowLeft',
	  39: 'ArrowRight',
	  46: 'Delete',
	  48: '0',
	  49: '1',
	  50: '2',
	  51: '3',
	  52: '4',
	  53: '5',
	  54: '6',
	  55: '7',
	  56: '8',
	  57: '9',
	  96: '0', // numpad 0
	  97: '1', // numpad 1
	  98: '2', // numpad 2
	  99: '3', // numpad 3
	  100: '4', // numpad 4
	  101: '5', // numpad 5
	  102: '6', // numpad 6
	  103: '7', // numpad 7
	  104: '8', // numpad 8
	  105: '9', // numpad 9
	  144: 'NumLock',
	  191: '/'
	};
	
	var RUSH_CSS_CLASS = 'highlight-date-secondary';
	
	var datepickerAllowedKeyCodes = Object.keys(datepickerAllowedKeys);
	var datepickerAllowedKeyValues = datepickerAllowedKeyCodes.map(function (key) {
	  return datepickerAllowedKeys[key];
	}).filter(function (value, index, arr) {
	  return arr.indexOf(value) === index;
	});
	
	var datepickerKeyDown = function datepickerKeyDown(event) {
	  if (event.key !== undefined) {
	    if (datepickerAllowedKeyValues.indexOf(event.key) === -1) {
	      event.preventDefault();
	    }
	  } else if (datepickerAllowedKeyCodes.indexOf(event.which || event.keyCode) === -1) {
	    event.preventDefault();
	  }
	};
	
	// Check if is datepicker past date
	var isDatepickerPastDate = function isDatepickerPastDate(date, dateService) {
	  return dateService.isDateInPast(date);
	};
	
	var isDatepickerInvalidDate = function isDatepickerInvalidDate(payee, date, dateService) {
	  return dateService.isDayDisabledRush(payee, { date: date, mode: 'day' });
	};
	
	var getDatepickerError = function getDatepickerError(payee, dateService, _ref) {
	  var _ref$datepicker = _ref.datepicker,
	      $viewValue = _ref$datepicker.$viewValue,
	      $modelValue = _ref$datepicker.$modelValue;
	
	  if (!dateService.isDatepickerValidFormat($viewValue) || !dateService.isValidDate($modelValue)) {
	    return 'datepicker.error.format';
	  } else if (isDatepickerPastDate($modelValue, dateService)) {
	    return 'datepicker.error.date-in-past';
	  } else if (isDatepickerInvalidDate(payee, $modelValue, dateService)) {
	    return 'datepicker.error.wrong-date';
	  }
	  return '';
	};
	
	/**
	 * @constructor DatepickerController
	 * @name DatepickerController
	 * @param {ManagePaymentService} managePaymentService
	 * @param {DateService} dateService
	 * @param {ExpeditedService} expeditedService
	 *
	 * @description Controller used to isolate form state from view state. Clones view state
	 * in order to mutate it
	 */
	function DatepickerController(managePaymentService, dateService, expeditedService) {
	  var $ctrl = this;
	  /**
	   * @name DatepickerController#options
	   * @type {object}
	   * @description options object for datepicker
	   */
	  var options = {
	    showWeeks: false,
	    todaysDate: dateService.getDateNow(),
	    currencyCode: managePaymentService.getCurrencyCode(),
	    formatMonth: 'MMM'
	  };
	
	  var setOptions = function setOptions(customOptions) {
	    return Object.assign($ctrl, {
	      options: Object.assign({}, options, customOptions)
	    });
	  };
	
	  /**
	   * @name DatepickerController#datepickerDateFormat
	   * @type {string}
	   * @description the datepicker date format
	   */
	  var datepickerDateFormat = 'MM/dd/yy';
	
	  /**
	   * @name DatepickerController#openDatepicker
	   * @type {function}
	   * @description open the datepicker for this holder
	   * @param {module:model-bb-billpay-ng.PayeeSummary} payee
	   */
	  var openDatepicker = function openDatepicker(holder) {
	    return Object.assign(holder.datepicker, { isOpen: true });
	  };
	
	  /**
	   * @name DatepickerController#rushIsAvailable
	   * @type {function}
	   * @description return true if rush is available but not selected for this payee
	   * @param {module:model-bb-billpay-ng.PayeeSummary} payee
	   * @return {boolean}
	   */
	  var rushIsAvailable = function rushIsAvailable(_ref2) {
	    var newPayment = _ref2.newPayment,
	        paymentServicesObj = _ref2.paymentServicesObj;
	    return dateService.rushIsAvailable(newPayment.paymentDate, paymentServicesObj);
	  };
	
	  /**
	   * @name isRushing
	   * @inner
	   * @type {function}
	   * @param {module:model-bb-billpay-ng.PayeeSummary} payee
	   * @description indicate if payment is rushing
	   * @returns {boolean}
	   */
	  var isRushing = function isRushing(_ref3) {
	    var newPayment = _ref3.newPayment,
	        paymentServicesObj = _ref3.paymentServicesObj;
	    return dateService.isDateRush(newPayment.paymentDate, paymentServicesObj);
	  };
	
	  /**
	    * @name DatepickerController#rushHasBeenChosen
	    * @type {function}
	    * @description return true if rush has been selected for this payee
	    * @param {module:model-bb-billpay-ng.PayeeSummary} payee
	    * @return {boolean}
	    */
	  var rushHasBeenChosen = function rushHasBeenChosen(payee) {
	    return isRushing(payee);
	  };
	
	  /**
	   * @name DatepickerController#rushDatepickerOptions
	   * @type {function}
	   * @description Build custom options object
	   * @param {module:model-bb-billpay-ng.PayeeSummary} payee
	   * @returns {object}
	   */
	  var rushDatepickerOptions = function rushDatepickerOptions(payee) {
	    var paymentServicesObj = payee.paymentServicesObj;
	    var showWaivedFees = expeditedService.showWaivedFees;
	
	    var exposeFee = !expeditedService.hasFeeBeenWaived(paymentServicesObj) || showWaivedFees;
	
	    var customClass = function customClass(_ref4) {
	      var date = _ref4.date,
	          mode = _ref4.mode;
	      return (
	        // Only run this over the 'day' view of calendar
	        mode === 'day' && dateService.isDateRush(date, paymentServicesObj) && exposeFee ? RUSH_CSS_CLASS : ''
	      );
	    };
	
	    var dateDisabled = function dateDisabled(_ref5) {
	      var date = _ref5.date,
	          mode = _ref5.mode;
	      return dateService.isDayDisabledRush(payee, { date: date, mode: mode });
	    };
	
	    var rushFee = expeditedService.getExpeditedFee(paymentServicesObj);
	    var rush = {
	      available: function available() {
	        return (rushIsAvailable(payee) || rushHasBeenChosen(payee)) && exposeFee;
	      },
	      fee: isNaN(rushFee) ? null : expeditedService.getExpeditedFee(paymentServicesObj)
	    };
	
	    return {
	      customClass: customClass,
	      rush: rush,
	      dateDisabled: dateDisabled
	    };
	  };
	
	  /**
	  * @name DatepickerController#finalPaymentDatepickerOptions
	  * @type {function}
	  * @description Build custom options object for first payment.
	  *   Only need to disable weekends & holidays as minDate covers past dates
	  * @returns {object}
	  */
	  var finalPaymentDatepickerOptions = function finalPaymentDatepickerOptions() {
	    return {
	      dateDisabled: function dateDisabled(_ref6) {
	        var date = _ref6.date,
	            mode = _ref6.mode;
	
	        if (mode !== 'day') {
	          return false;
	        }
	        return dateService.isWeekend(date) || dateService.isDateInPast(date);
	      }
	    };
	  };
	
	  /**
	   * @name dateDisabled
	   * @type {function}
	   * @description Check if the date passed is a disabled date
	   * @param {object} obj datepicker object made up of date and mode
	   * @param {date} obj.date a date
	   * @param {string} obj.mode mode of datepicker e.g. day
	   * @return {boolean} if the date is to be disabled
	   * @inner
	   */
	  var dateDisabled = function dateDisabled(_ref7) {
	    var date = _ref7.date,
	        mode = _ref7.mode;
	
	    if (mode !== 'day') {
	      return false;
	    }
	    return dateService.isBadFirstPaymentDate(date);
	  };
	
	  /**
	   * @name DatepickerController#firstPaymentDatepickerOptions
	   * @type {function}
	   * @description Build custom options object for first payment
	   * @returns {object}
	   */
	  var firstPaymentDatepickerOptions = function firstPaymentDatepickerOptions() {
	    return { dateDisabled: dateDisabled };
	  };
	
	  /**
	   * @name DatepickerController#datepickerError
	   * @type {function}
	   * @description Returns error string key if there is an error present
	   * @param {module:model-bb-billpay-ng.PayeeSummary} payee
	   * @param {DatepickerForm} form
	   * @return {string} error key or empty string
	   */
	  var datepickerError = function datepickerError(payee, form) {
	    return getDatepickerError(payee, dateService, form);
	  };
	
	  /**
	    * @name DatepickerController#datepickerHasError
	    * @type {function}
	    * @description Check if the datepicker has errors
	    * @param {module:model-bb-billpay-ng.PayeeSummary} payee
	    * @param {DatepickerForm} form
	    * @return {boolean} the datepicker has errors
	    */
	  var datepickerHasError = function datepickerHasError(payee, form) {
	    return !!getDatepickerError(payee, dateService, form);
	  };
	
	  /**
	   * @name DatepickerController#datepickerErrorClass
	   * @type {function}
	   * @description get datepicker error class
	   * @param {module:model-bb-billpay-ng.PayeeSummary} payee
	   * @param {DatepickerForm} form
	   * @return {{'was-validated is-invalid':boolean}} object with error class indicator
	   */
	  var datepickerErrorClass = function datepickerErrorClass(payee, form) {
	    return { 'was-validated is-invalid': !!getDatepickerError(payee, dateService, form) };
	  };
	
	  Object.assign($ctrl, {
	    options: options,
	    datepickerKeyDown: datepickerKeyDown,
	    setOptions: setOptions,
	    datepickerDateFormat: datepickerDateFormat,
	    openDatepicker: openDatepicker,
	    rushDatepickerOptions: rushDatepickerOptions,
	    finalPaymentDatepickerOptions: finalPaymentDatepickerOptions,
	    firstPaymentDatepickerOptions: firstPaymentDatepickerOptions,
	    rushHasBeenChosen: rushHasBeenChosen,
	    rushIsAvailable: rushIsAvailable,
	    datepickerHasError: datepickerHasError,
	    datepickerError: datepickerError,
	    datepickerErrorClass: datepickerErrorClass
	  });
	}

/***/ }),
/* 84 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = RecurringController;
	/**
	 * @module widget-bb-billpay-pay-recurring-bill-ng
	 * @name RecurringController
	 *
	 * @param {module:lib-bb-event-bus-ng.EventBus} bus
	 * @param {module:lib-bb-widget-ng.Widget} widget
	 * @param {module:lib-bb-state-container-ng.StateContainer} stateContainer
	 * @param {ManagePaymentService} managePaymentService
	 * @description Billpay - recurring payment
	 */
	
	function RecurringController(bus, widget, stateContainer, managePaymentService, bbIntent, bbStorage) {
	  var $ctrl = this;
	  var viewState = Object.assign({}, stateContainer.getState());
	  var newPayment = {};
	  var STORAGE_PAYEE_ID = 'billpay.payRecurringBill.payeeId';
	  var initialPayeeId = void 0;
	
	  /**
	   * @name RecurringController#resetNewPayment
	   * @type {function}
	   * @description Set the newPayment object to an initial state. Use the passed account if given
	   * @param {object} [account]
	   * @return {object}
	   */
	  var resetNewPayment = function resetNewPayment(account) {
	    Object.assign(newPayment, {
	      account: account || null,
	      payee: null,
	      paymentDate: null,
	      paymentAmount: {
	        value: 0,
	        currency: null
	      },
	      fromDate: {
	        datepicker: {
	          isOpen: false
	        }
	      },
	      toDate: {
	        datepicker: {
	          isOpen: false
	        }
	      },
	      frequency: null,
	      frequencyEnd: 'manual',
	      numberOfInstances: 1,
	      finalPaymentDate: null,
	      alert: {
	        paymentScheduledAlert: true,
	        paymentSentAlert: true,
	        modelExpirationAlert: true
	      }
	    });
	  };
	
	  /**
	   * @name RecurringController#getInitialPayee
	   * @type {function}
	   * @description Get the payee specified by intents if one has not already been selected on the UI
	   * @return {Payee}
	   */
	  var getInitialPayee = function getInitialPayee() {
	    if (newPayment.payee) {
	      return newPayment.payee;
	    }
	    return initialPayeeId && viewState.payees ? viewState.payees.find(function (payee) {
	      return payee.id === initialPayeeId;
	    }) : null;
	  };
	
	  /**
	   * @name updatePaymentDateForNewPayee
	   * @type {function}
	   * @description Update the payment date with the nextPaymentDate field from the regular payment
	   *   service on the selected payee. Also stop a date from before then being used.
	   *   Unset the finalPaymentDate
	   * @param {object} newPayment
	   */
	  var updatePaymentDateForNewPayee = function updatePaymentDateForNewPayee() {
	    var payee = newPayment.payee;
	    // REGULAR_PAYMENT should always be present
	
	    var minDate = payee.paymentServicesObj.REGULAR_PAYMENT ? new Date(payee.paymentServicesObj.REGULAR_PAYMENT.nextPaymentDate) : new Date();
	
	    Object.assign(newPayment, {
	      paymentDate: minDate,
	      minPaymentDate: minDate,
	      finalPaymentDate: null
	    });
	  };
	
	  /**
	   * @name initPayee
	   * @type {function}
	   * @description Initialise the payee select. If there is a payee pre-provided then set it into
	   *   newPayment and update the payment date based on that payee
	   * @param {object} $ctrl
	   * @param {object} $ctrl.newPayment
	   * @param {function} $ctrl.getInitialPayee
	   */
	  var initPayee = function initPayee() {
	    // Track if a payee is already set in the newPayment
	    var existingPayee = newPayment.payee;
	    var initialPayee = getInitialPayee();
	    if (initialPayee && initialPayee !== existingPayee) {
	      Object.assign(newPayment, {
	        payee: initialPayee
	      });
	      updatePaymentDateForNewPayee();
	    }
	  };
	
	  /**
	   * @name setPayeeToStorage
	   * @inner
	   * @type {function}
	   * @description Set the given payee id to the initialPayeeId. Also into the session storage so if
	   *   the user refreshes the page, the payee will be persisted
	   * @param {string} payeeId
	   */
	  var setPayeeToStorage = function setPayeeToStorage(payeeId) {
	    initialPayeeId = payeeId;
	    bbStorage.setItem(STORAGE_PAYEE_ID, payeeId);
	  };
	
	  /**
	   * @name retrievePayeeFromStorage
	   * @inner
	   * @type {function}
	   * @description Retrieve the payeeId from session storage and set the initialPayeeId if it exists
	   */
	  var retrievePayeeFromStorage = function retrievePayeeFromStorage() {
	    bbStorage.getItem(STORAGE_PAYEE_ID).then(function (payeeId) {
	      if (payeeId) {
	        initialPayeeId = payeeId;
	      }
	    });
	  };
	
	  /**
	   * @name clearPayeeFromStorage
	   * @type {function}
	   * @description Clear the payeeId from session storage. To be called by the extension when the
	   *   user completes the flow (setting up a payment or cancelling)
	   */
	  var clearPayeeFromStorage = function clearPayeeFromStorage() {
	    bbStorage.removeItem(STORAGE_PAYEE_ID);
	  };
	
	  /**
	   * @type {function}
	   * @name RecurringController#$onInit
	   * @return {void}
	   * @description AngularJS Lifecycle hook used to initialize the controller
	   */
	  var $onInit = function $onInit() {
	    stateContainer.subscribe(function (state) {
	      return Object.assign($ctrl.viewState, state);
	    });
	
	    resetNewPayment();
	
	    // cascade so that if second request is OK it doesn't override a failure on first
	    managePaymentService.getPayeesSummary().then(managePaymentService.getAccounts).catch(function () {
	      // error handling is dealt with in the service
	    });
	
	    // Handle the intent to create a new payment
	    bbIntent.handle('intent.rb.billpay.recurring-bill.create', function (payeeId) {
	      setPayeeToStorage(payeeId);
	    });
	
	    // Default handler for no intent
	    bbIntent.initHandler(retrievePayeeFromStorage);
	
	    bbIntent.init();
	
	    // Deprecated in Mobile SDK 3.0
	    bus.publish('cxp.item.loaded', {
	      id: widget.getId()
	    });
	
	    bus.publish('bb.item.loaded', {
	      id: widget.getId()
	    });
	  };
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	    newPayment: newPayment,
	    viewState: viewState,
	    resetNewPayment: resetNewPayment,
	    getInitialPayee: getInitialPayee,
	    updatePaymentDateForNewPayee: updatePaymentDateForNewPayee,
	    initPayee: initPayee,
	    payees: function payees() {
	      return viewState.payees;
	    },
	    accounts: function accounts() {
	      return viewState.accounts;
	    },
	    firstAccount: function firstAccount() {
	      return viewState.accounts && viewState.accounts[0];
	    },
	    clearPayeeFromStorage: clearPayeeFromStorage
	  });
	}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = EditPaymentController;
	
	var _constants = __webpack_require__(86);
	
	/**
	 * @module widget-bb-billpay-manage-payment-ng
	 * @name EditPaymentController
	 *
	 * @description Billpay - edit payment
	 */
	function EditPaymentController(bus, widget, stateContainer, paymentService, managePaymentService, dateService, bbIntent, bbStorage) {
	  var $ctrl = this;
	
	  var summaryIntent = bbIntent.create('intent.rb.billpay.summary.view');
	  var callIntentResponse = function callIntentResponse() {};
	  var returnToPreviousScreen = function returnToPreviousScreen(data) {
	    callIntentResponse(data);
	  };
	
	  /**
	   * @type {object}
	   * @name EditPaymentController#payee
	   * @description payee control data
	   */
	  var payee = { datepicker: { isOpen: false }, cancelConfirm: { isOpen: false }, newPayment: {} };
	
	  /**
	   * @type {function}
	   * @inner
	   * @name updatePayment
	   * @return {void}
	   * @description initialise editPayment with backend data
	   */
	  var updatePayment = function updatePayment(payment, accounts, payees) {
	    var account = payment && accounts && accounts.length ? accounts.find(function (acct) {
	      return acct.accountNumber === payment.paymentAccountNumber;
	    }) : null;
	
	    var newPayee = payment && payees && payees.length ? payees.map(function (pyee) {
	      return Object.assign(pyee, { displayName: pyee.nickName || pyee.name });
	    }).find(function (pyee) {
	      return pyee.name === payment.payeeName;
	    }) : {};
	
	    Object.assign(payee, Object.assign({}, newPayee, {
	      newPayment: {
	        id: payment ? payment.id : null,
	        paymentDate: payment && payment.paymentDate ? dateService.getServerDate(payment.paymentDate) : null,
	        paymentAmount: {
	          value: payment ? parseFloat(payment.paymentAmount) : 0,
	          currency: null
	        },
	        paymentMemo: payment ? payment.paymentMemo : null,
	        paymentAccount: account
	      }
	    }));
	  };
	  updatePayment();
	
	  /**
	   * @type {function}
	   * @name useStateFromStorage
	   * @description method used when no intent was fired, uses storage to determine state
	   * @inner
	   */
	  var useStateFromStorage = function useStateFromStorage() {
	    callIntentResponse = function callIntentResponse() {
	      summaryIntent();
	    };
	    return bbStorage.getItem(_constants.STORAGE_PAYMENT_ID).then(function (paymentId) {
	      if (paymentId) {
	        paymentService.getPayment(paymentId).catch(function () {
	          // error handling is dealt with in the service
	        });
	      }
	    });
	  };
	
	  /**
	   * @type {function}
	   * @name EditPaymentController#$onInit
	   * @return {void}
	   * @description AngularJS Lifecycle hook used to initialize the controller
	   */
	  var $onInit = function $onInit() {
	    stateContainer.subscribe(function (_ref) {
	      var payment = _ref.payment,
	          accounts = _ref.accounts,
	          payees = _ref.payees;
	      return updatePayment(payment, accounts, payees);
	    });
	
	    // cascade so that if second request is OK it doesn't override a failure on first
	    managePaymentService.getPayeesSummary().then(managePaymentService.getAccounts).catch(function () {
	      // error handling is dealt with in the service
	    });
	
	    bbIntent.handle('intent.rb.billpay.single-bill.edit', function (paymentId, respond) {
	      bbStorage.setItem(_constants.STORAGE_PAYMENT_ID, paymentId);
	      paymentService.getPayment(paymentId).catch(function () {
	        // error handling is dealt with in the service
	      });
	      callIntentResponse = respond;
	    });
	
	    bbIntent.initHandler(useStateFromStorage);
	
	    bbIntent.init();
	  };
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	    payee: payee,
	    returnToPreviousScreen: returnToPreviousScreen
	  });
	}

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable import/prefer-default-export */
	var STORAGE_PAYMENT_ID = exports.STORAGE_PAYMENT_ID = 'billpay.payABill.editPaymentId';

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ManagePaymentService;
	
	var _constants = __webpack_require__(86);
	
	/**
	* The purpose of this module is to provide the main structure of the
	* Manage Payment widget. Outlining the workflows, connecting the data from the
	* model to the view via the customizations provided by the extension.
	*
	* @constructor ManagePaymentService
	* @param {StateContainer} viewModel
	* @param {BillpayModel} model
	* @param {object} events
	* @description The core functionality of the Manage Payment widget
	*/
	function ManagePaymentService(viewModel, model, events, widget, bbStorage) {
	  /**
	   * @name transformPaymentData
	   * @inner
	   * @type {function}
	   * @param {object} payment
	   * @description Remove any unwanted properties, and apply any necessary changes to data before
	   *  it is posted or put
	   */
	  var transformPaymentData = function transformPaymentData(_ref) {
	    var payeeID = _ref.payeeID,
	        _ref$paymentAccount = _ref.paymentAccount,
	        accountNumber = _ref$paymentAccount.accountNumber,
	        accountType = _ref$paymentAccount.accountType,
	        routingNumber = _ref$paymentAccount.routingNumber,
	        paymentAmount = _ref.paymentAmount,
	        paymentDate = _ref.paymentDate,
	        paymentMemo = _ref.paymentMemo,
	        _ref$overnightDeliver = _ref.overnightDeliveryAddress,
	        address1 = _ref$overnightDeliver.address1,
	        address2 = _ref$overnightDeliver.address2,
	        city = _ref$overnightDeliver.city,
	        state = _ref$overnightDeliver.state,
	        postalCode = _ref$overnightDeliver.postalCode;
	
	    var overnightDeliveryAddress = Object.assign({
	      address1: address1,
	      city: city,
	      state: state,
	      postalCode: postalCode
	    }, address2 && address2.trim().length && {
	      address2: address2
	    });
	
	    return Object.assign({
	      payeeID: payeeID,
	      paymentAmount: paymentAmount,
	      paymentDate: paymentDate,
	      paymentAccount: {
	        accountNumber: accountNumber,
	        accountType: accountType,
	        routingNumber: routingNumber
	      }
	    }, !!paymentMemo && { paymentMemo: paymentMemo }, !!overnightDeliveryAddress.address1 && { overnightDeliveryAddress: overnightDeliveryAddress });
	  };
	
	  /**
	   * @name transformPaymentsData
	   * @inner
	   * @type {function}
	   * @param {array} payments
	   * @description Remove any unwanted properties, and apply any necessary changes to data before
	   *  it is posted
	   */
	  var transformPaymentsData = function transformPaymentsData(payments) {
	    return payments.map(transformPaymentData);
	  };
	
	  return {
	    /**
	     * @name ManagePaymentService#getPayeesSummary
	     * @type {function}
	     * @param {string} [newPayeeId] id of last created payee
	     * @return {Promise<void>}
	     * @description Update the view with a list of payees loaded from the data source
	     */
	    getPayeesSummary: function getPayeesSummary(newPayeeId) {
	      viewModel.beforeGetPayeesSummary();
	      events.beforeGetPayeesSummary();
	      return model.getPayeesSummary().then(function (response) {
	        viewModel.afterGetPayeesSummarySuccess({ payeeSummaries: response, newPayeeId: newPayeeId });
	        events.afterGetPayeesSummarySuccess(response);
	      }).catch(function (error) {
	        viewModel.afterGetPayeesSummaryError(error);
	        events.afterGetPayeesSummaryError(error);
	        throw error;
	      });
	    },
	
	
	    /**
	     * @name ManagePaymentService#getAccounts
	     * @type {function}
	     * @return {Promise<void>}
	     * @description Update the view with a list of accounts loaded from the data source
	     */
	    getAccounts: function getAccounts() {
	      viewModel.beforeGetAccounts();
	      events.beforeGetAccounts();
	      return model.getAccounts().then(function (response) {
	        viewModel.afterGetAccountsSuccess(response);
	        events.afterGetAccountsSuccess(response);
	      }).catch(function (error) {
	        viewModel.afterGetAccountsError(error);
	        events.afterGetAccountsError(error);
	        throw error;
	      });
	    },
	
	
	    /**
	     * @name ManagePaymentService#getCurrencyCode
	     * @type {function}
	     * @return {string}
	     * @description REturn the currency code from widget preferences
	     */
	    getCurrencyCode: function getCurrencyCode() {
	      return widget.getStringPreference('currency');
	    },
	
	
	    /**
	     * @name ManagePaymentService#postPaymentsRecord
	     * @type {function}
	     * @return {Promise<void>}
	     * @description Update the view with information about outcome of creating a batch of payments
	     */
	    postPaymentsRecord: function postPaymentsRecord(payments) {
	      // Ensure we only have the correct data
	      var transformedPayments = { payments: transformPaymentsData(payments) };
	      var handleSuccess = function handleSuccess(response) {
	        viewModel.afterPostPaymentsRecordSuccess();
	        events.afterPostPaymentsRecordSuccess(response);
	      };
	      viewModel.beforePostPaymentsRecord();
	      events.beforePostPaymentsRecord();
	      return model.postPaymentsRecord(transformedPayments).then(handleSuccess).catch(function (error) {
	        viewModel.afterPostPaymentsRecordError(error);
	        events.afterPostPaymentsRecordError(error);
	        throw error;
	      });
	    },
	
	
	    /**
	     * @name ManagePaymentService#postRecurringPaymentsRecord
	     * @type {function}
	     * @param {object} payment - The recurring payment to post
	     * @return {Promise<void>}
	     * @description Update the view with info about outcome of creating a recurring of payment
	     */
	    postRecurringPaymentsRecord: function postRecurringPaymentsRecord(payment) {
	      viewModel.beforePostRecurringPaymentsRecord();
	      events.beforePostRecurringPaymentsRecord();
	      return model.postRecurringPaymentsRecord(payment).then(function (response) {
	        viewModel.afterPostRecurringPaymentsRecordSuccess(response);
	        events.afterPostRecurringPaymentsRecordSuccess(response);
	      }).catch(function (error) {
	        viewModel.afterPostRecurringPaymentsRecordError(error);
	        events.afterPostRecurringPaymentsRecordError(error);
	        throw error;
	      });
	    },
	
	
	    /**
	     * @name ManagePaymentService#putPaymentRecord
	     * @type {function}
	     * @return {Promise<void>}
	     * @description Update the view with information about outcome of updating a payment
	     */
	    putPaymentRecord: function putPaymentRecord(payment) {
	      // Ensure we only have the correct data
	      var transformedPayment = { payment: transformPaymentData(payment) };
	      var handleSuccess = function handleSuccess(response) {
	        viewModel.afterPutPaymentRecordSuccess(response);
	        events.afterPutPaymentRecordSuccess(response);
	        bbStorage.removeItem(_constants.STORAGE_PAYMENT_ID);
	      };
	      viewModel.beforePutPaymentRecord();
	      events.beforePutPaymentRecord();
	      return model.putPaymentRecord(payment.id, transformedPayment).then(handleSuccess).catch(function (error) {
	        viewModel.afterPutPaymentRecordError(error);
	        events.afterPutPaymentRecordError(error);
	        throw error;
	      });
	    }
	  };
	}

/***/ }),
/* 88 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = DateService;
	/**
	 * @constructor DateService
	 * @param {object} expeditedService
	 * @param {Date} [now] - current date, only set for testing
	 * @description Encapsulate all date handling functionality for billpay.
	 */
	function DateService(expeditedService, now) {
	  var MS_PER_DAY = 1000 * 60 * 60 * 24;
	  var DATE_FORMAT_REGEXP = /^\d{2}\/\d{2}\/\d{2}$/;
	  var SEMI_MONTHLY_DAY_INTERVAL = 15;
	  var DAYS_IN_WEEK = 7;
	  var DAYS_IN_BIWEEK = 14;
	  var SEMI_PERIOD_ITERATIONS = 2;
	  var MONTHS_IN_SEMI_ANNUAL = 6;
	  var MONTHS_IN_QUARTER = 3;
	
	  var discardTime = function discardTime(date) {
	    return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
	  };
	
	  // Determine if the date format is valid
	  var isDatepickerValidFormat = function isDatepickerValidFormat(value) {
	    return DATE_FORMAT_REGEXP.test(value);
	  };
	
	  var isValidDate = function isValidDate(date) {
	    return date instanceof Date && !isNaN(date.getTime());
	  };
	
	  var dateDiffInDays = function dateDiffInDays(date1, date2) {
	    if (!isValidDate(date1) || !isValidDate(date2)) {
	      throw new TypeError('dateDiffInDays: You need to pass valid dates.');
	    }
	
	    // Discard the time and time-zone information.
	    var utc1 = discardTime(date1);
	    var utc2 = discardTime(date2);
	
	    return Math.floor((utc2 - utc1) / MS_PER_DAY);
	  };
	
	  /**
	   * @name isLastDayOfMonth
	   * @type {function}
	   * @description check if the date passed is the last day of the month
	   * @param {Date} date - the date to check
	   * @return {boolean}
	   * @inner
	  */
	  var isLastDayOfMonth = function isLastDayOfMonth(date) {
	    var originalDate = new Date(date);
	    var nextMonth = originalDate.getMonth() + 1;
	    var firstDayNextMonth = new Date(originalDate.getFullYear(), nextMonth, 0);
	    return originalDate.getDate() === firstDayNextMonth.getDate();
	  };
	
	  // See how many full months difference are between two dates
	  // Full months only, e.g. (31st Jan, 1st Feb) will return 0
	  var dateDiffInFullMonths = function dateDiffInFullMonths(date1, date2) {
	    // The day of the month for the two dates
	    var date1DayOfMonth = date1.getDate();
	    var date2DayOfMonth = date2.getDate();
	
	    // If the second date is later than or equal day in the month, then the month diff is valid
	    var lastMonthIsFull = date2DayOfMonth >= date1DayOfMonth;
	
	    // If both dates are the last of their respective months, then the month difference is valid
	    var datesAreBothLastDaysOfMonth = isLastDayOfMonth(date1) && isLastDayOfMonth(date2);
	
	    // If date2 is on the last day of the month, and date1 is later in the month than date2
	    // then the month difference is valid
	    var date2FallsBeforeDate1ButAtEndOfMonth = isLastDayOfMonth(date2) && date1DayOfMonth > date2DayOfMonth;
	
	    // Get general month difference
	    var months = date2.getMonth() - date1.getMonth() + 12 * (date2.getFullYear() - date1.getFullYear());
	    // Is the final month difference a full month
	    var monthDifferenceValid = lastMonthIsFull || datesAreBothLastDaysOfMonth || date2FallsBeforeDate1ButAtEndOfMonth;
	
	    return monthDifferenceValid ? months : months - 1;
	  };
	
	  var dateDiffInFullYears = function dateDiffInFullYears(date1, date2) {
	    // full years only, e.g. (31st Oct, 20th Feb) will return 0
	    var monthsDiff = dateDiffInFullMonths(date1, date2);
	    return Math.floor(monthsDiff / 12);
	  };
	
	  var getDateNow = function getDateNow() {
	    return now ? new Date(now.getTime()) : new Date();
	  };
	
	  var getDateTodayPlusAYear = function getDateTodayPlusAYear() {
	    var today = getDateNow();
	    return new Date(today.setDate(today.getDate() + 365));
	  };
	
	  var getAsDate = function getAsDate(str) {
	    return new Date(str);
	  };
	
	  var areSameDate = function areSameDate(date1, date2) {
	    try {
	      return dateDiffInDays(date1, date2) === 0;
	    } catch (e) {
	      return false;
	    }
	  };
	
	  var isDateBefore = function isDateBefore(dateToTest, referenceDate) {
	    try {
	      return referenceDate && dateDiffInDays(referenceDate, dateToTest) < 0;
	    } catch (e) {
	      return false;
	    }
	  };
	
	  var isDateBeforeOrSame = function isDateBeforeOrSame(dateToTest, referenceDate) {
	    try {
	      return referenceDate && dateDiffInDays(referenceDate, dateToTest) <= 0;
	    } catch (e) {
	      return false;
	    }
	  };
	
	  var isDateAfterOrSame = function isDateAfterOrSame(dateToTest, referenceDate) {
	    try {
	      return referenceDate && dateDiffInDays(referenceDate, dateToTest) >= 0;
	    } catch (e) {
	      return false;
	    }
	  };
	
	  var isDateInPast = function isDateInPast(date) {
	    return isDateBefore(date, getDateNow());
	  };
	
	  var isWeekend = function isWeekend(date) {
	    return date.getDay() === 0 || date.getDay() === 6;
	  };
	
	  var getRegularPaymentDate = function getRegularPaymentDate(paymentServicesObj) {
	    var payment = paymentServicesObj.REGULAR_PAYMENT;
	    if (payment) {
	      var cutoffTime = new Date(payment.cutoffTime);
	      return getDateNow() < cutoffTime ? payment.earliestPaymentDate : payment.nextPaymentDate;
	    }
	    return undefined;
	  };
	
	  var getRegularEarliestPaymentDate = function getRegularEarliestPaymentDate(paymentServicesObj) {
	    var payment = paymentServicesObj.REGULAR_PAYMENT;
	    if (payment) {
	      return payment.earliestPaymentDate;
	    }
	    return undefined;
	  };
	
	  var isDateInRushPeriodAndNotWeekend = function isDateInRushPeriodAndNotWeekend(dateToCheck, rushDateStr, regularDateStr) {
	    if (!rushDateStr || !regularDateStr || !dateToCheck || isWeekend(dateToCheck)) {
	      return false;
	    }
	    var rushDate = getAsDate(rushDateStr);
	    var regularDate = getAsDate(regularDateStr);
	
	    // date to check must be equal or greater than rush payment date
	    // and less than regular payment date
	    return isDateAfterOrSame(dateToCheck, rushDate) && isDateBefore(dateToCheck, regularDate);
	  };
	
	  var isDateRushNoCutOff = function isDateRushNoCutOff(dateToCheck, paymentServicesObj) {
	    if (!expeditedService.isExpedited(paymentServicesObj)) {
	      return false;
	    }
	    var rushDateStr = expeditedService.getEarliestPaymentDate(paymentServicesObj);
	    var regularDateStr = getRegularEarliestPaymentDate(paymentServicesObj);
	    return isDateInRushPeriodAndNotWeekend(dateToCheck, rushDateStr, regularDateStr);
	  };
	
	  var isDateRushCutoff = function isDateRushCutoff(dateToCheck, paymentServicesObj) {
	    if (!expeditedService.isExpedited(paymentServicesObj)) {
	      return false;
	    }
	    var rushDateStr = expeditedService.getPaymentDate(getDateNow(), paymentServicesObj);
	    var regularDateStr = getRegularPaymentDate(paymentServicesObj);
	    return isDateInRushPeriodAndNotWeekend(dateToCheck, rushDateStr, regularDateStr);
	  };
	
	  var addDay = function addDay(date, days) {
	    var newDate = new Date(date.valueOf());
	    newDate.setDate(newDate.getDate() + days);
	    return newDate;
	  };
	
	  var atLeastOneDateIsValidInRushPeriod = function atLeastOneDateIsValidInRushPeriod(rushDate, regularDate) {
	    var diff = dateDiffInDays(rushDate, regularDate);
	    if (diff <= 0) {
	      return false;
	    }
	    var datesToCheck = Array.from({ length: diff }, function (v, i) {
	      return addDay(rushDate, i);
	    });
	    return datesToCheck.some(function (dt) {
	      return !isWeekend(dt);
	    });
	  };
	
	  var hasRushPeriod = function hasRushPeriod(paymentServicesObj) {
	    if (!expeditedService.isExpedited(paymentServicesObj)) {
	      return false;
	    }
	    var rushDateStr = expeditedService.getPaymentDate(getDateNow(), paymentServicesObj);
	    var regularDateStr = getRegularPaymentDate(paymentServicesObj);
	
	    if (!rushDateStr || !regularDateStr) {
	      return false;
	    }
	    var rushDate = getAsDate(rushDateStr);
	    var regularDate = getAsDate(regularDateStr);
	
	    // rush date must be earlier than regular date or no rush period
	    // at least one day in period must be weekday
	    return isDateBefore(rushDate, regularDate) && atLeastOneDateIsValidInRushPeriod(rushDate, regularDate);
	  };
	
	  var isDateSelectable = function isDateSelectable(paymentServicesObj, date) {
	    var firstRegularDate = getAsDate(getRegularPaymentDate(paymentServicesObj));
	
	    // Disable dates before first regular date that aren't rush
	    var isInvalidDate = !isDateRushCutoff(date, paymentServicesObj) && isDateBefore(date, firstRegularDate);
	    // Disable all dates before today (there might not be regular/rush info)
	    var isPastDate = isDateInPast(date);
	    // Disable weekends
	    var isWeekendDate = isWeekend(date);
	    return !(isInvalidDate || isWeekendDate || isPastDate);
	  };
	
	  var isDayDisabledRush = function isDayDisabledRush(_ref, _ref2) {
	    var paymentServicesObj = _ref.paymentServicesObj;
	    var date = _ref2.date,
	        mode = _ref2.mode;
	    return (
	      // Only run this over the 'day' view of calendar
	      mode === 'day' ? !isDateSelectable(paymentServicesObj, date) : false
	    );
	  };
	
	  var checkForFinalPaymentMonthSkip = function checkForFinalPaymentMonthSkip(paymentDate, finalPaymentDate) {
	    if (finalPaymentDate.getDate() !== paymentDate.getDate()) {
	      finalPaymentDate.setDate(0);
	    }
	    return finalPaymentDate;
	  };
	
	  /**
	   * @name isBadFirstPaymentDate
	   * @type {function}
	   * @description Take a date, and return true if it is not allowed as a first payment date
	   * @param {date} date
	   * @return {boolean}
	   * @inner
	   */
	  var isBadFirstPaymentDate = function isBadFirstPaymentDate(date) {
	    var isDateAfterAYear = function isDateAfterAYear() {
	      return !isDateBefore(date, getDateTodayPlusAYear());
	    };
	    // Disable all dates before today
	    var isPastDate = isDateInPast(date);
	    // Disable any dates further than a year from today
	    var isAfterAYear = isDateAfterAYear();
	    // Disable any weekend dates
	    var isWeekendDate = isWeekend(date);
	    return isPastDate || isAfterAYear || isWeekendDate;
	  };
	
	  return {
	
	    /**
	     * @name DateService#isBadFirstPaymentDate
	     * @type {function}
	     * @description Take a date, and return true if it is not allowed as a first payment date
	     * @param {date} date
	     * @return {boolean}
	     */
	    isBadFirstPaymentDate: isBadFirstPaymentDate,
	    /**
	     * @name DateService#isDatepickerValidFormat
	     * @type {function}
	     * @description return a boolean for date validity
	     * @param {string} value the date value to validate
	     * @return {boolean} is the date value a valid format
	     */
	    isDatepickerValidFormat: isDatepickerValidFormat,
	
	    /**
	     * @name DateService#getDateNow
	     * @type {function}
	     * @description return the current date and time.
	     * @return {Date} the date now
	     */
	    getDateNow: getDateNow,
	
	    /**
	     * @name DateService#getDateTodayPlusAYear
	     * @type {function}
	     * @description return the current date plus a year
	     * @return {Date} the date now plus 1 year
	     */
	    getDateTodayPlusAYear: getDateTodayPlusAYear,
	
	    /**
	     * @name DateService#getAsDate
	     * @type {function}
	     * @description read the param as a date string
	     * @param {string} str - string to read
	     * @return {Date} the date from the string
	     */
	    getAsDate: getAsDate,
	
	    /**
	     * @name DateService#getServerDate
	     * @type {function}
	     * @description read the param as date string and return Date in current locale
	     * @param {string} rawDate - string to read must be in format YYYY-MM-DD...
	     * @throws {TypeError} if rawDate doesn't match YYYY-MM-DD...
	     * @return {Date} the date from the string
	     */
	    getServerDate: function getServerDate(rawDate) {
	      var matches = (rawDate || '').match(/^(\d{4})-(\d{2})-(\d{2}).*$/);
	
	      if (matches && matches.length === 4) {
	        var _matches = _slicedToArray(matches, 4),
	            year = _matches[1],
	            month = _matches[2],
	            day = _matches[3];
	        // return date in current locale
	
	
	        return new Date(year, month - 1, day);
	      }
	      throw new TypeError('getServerDate: Invalid or no raw date');
	    },
	
	    /**
	     * @name DateService#areSameDate
	     * @type {function}
	     * @description return true if the two dates are on the same day ignoring time.
	     * @param {Date} date1 - first date
	     * @param {Date} date2 - second date
	     * @return {boolean} dates are on same day
	     */
	    areSameDate: areSameDate,
	
	    /**
	     * @name DateService#isDateInPast
	     * @type {function}
	     * @description Is the passed date in the past
	     * @param {Date} date - The date being checked
	     * @return {boolean} Is the date in the past
	     */
	    isDateInPast: isDateInPast,
	
	    /**
	     * @name DateService#isDateBefore
	     * @type {function}
	     * @description Is the passed date before the reference date
	     * @param {Date} date - The date being checked
	     * @param {Date} referenceDate - The date being checked against
	     * @return {boolean} Is the date before the reference date
	     */
	    isDateBefore: isDateBefore,
	
	    /**
	     * @name DateService#isWeekend
	     * @type {function}
	     * @description return true if the date day is Saturday or Sunday.
	     * @param {Date} date - date to check
	     * @return {boolean} date is weekend
	     */
	    isWeekend: isWeekend,
	
	    /**
	     * @name DateService#isValidDate
	     * @type {function}
	     * @description Decide if the passed date is valid
	     * @param {Date} date - date to check
	     * @return {boolean} date is valid
	     */
	    isValidDate: isValidDate,
	
	    /**
	     * @name DateService#getFirstFreePaymentDate
	     * @type {function}
	     * @description return first free payment date, regular payment or rush if the fee has been
	     *   waived
	     * @param {object} obj
	     * @param {module:model-bb-billpay-ng.PaymentServices} obj.paymentServicesObj
	     * @return {Date} first free payment date
	     */
	    getFirstFreePaymentDate: function getFirstFreePaymentDate(_ref3) {
	      var paymentServicesObj = _ref3.paymentServicesObj;
	
	      var rushPayment = expeditedService.isExpedited(paymentServicesObj);
	      var rushDateStr = expeditedService.getPaymentDate(getDateNow(), paymentServicesObj);
	      var regularDateStr = getRegularPaymentDate(paymentServicesObj);
	      var hasWaivedRush = rushPayment && expeditedService.hasFeeBeenWaived(paymentServicesObj);
	
	      return getAsDate(hasWaivedRush ? rushDateStr : regularDateStr);
	    },
	
	    /**
	     * @name DateService#getEarliestPaymentDate
	     * @type {function}
	     * @description returns the earliest payment date
	     * @param {module:model-bb-billpay-ng.PaymentServices} obj.paymentServicesObj payment service
	     *  object
	     * @return {Date} earliest payment date
	     */
	    getEarliestPaymentDate: function getEarliestPaymentDate(paymentService) {
	      return paymentService ? getAsDate(paymentService.earliestPaymentDate) : getDateNow();
	    },
	
	    /**
	     * @name DateService#isDateRush
	     * @type {function}
	     * @description return true if the date is a rush date and before cutoff
	     * @param {Date} dateToCheck
	     * @param {module:model-bb-billpay-ng.PaymentServices} paymentServicesObj
	     * @return {boolean} date is a rush date and before cutoff
	     */
	    isDateRush: isDateRushCutoff,
	
	    /**
	     * @name DateService#isDateRushNoCutOff
	     * @type {function}
	     * @description return true if the date is a rush date, ignoring cutoff
	     * @param {Date} dateToCheck
	     * @param {module:model-bb-billpay-ng.PaymentServices} paymentServicesObj
	     * @return {boolean} date is a rush date
	     */
	    isDateRushNoCutOff: isDateRushNoCutOff,
	
	    /**
	     * @name DateService#rushIsAvailable
	     * @type {function}
	     * @description return a boolean on whether rush is available for a date
	     * @param {Date} datetoCheck the date to validate on
	     * @param {module:model-bb-billpay-ng.PaymentServices} paymentServicesObj
	     * @return {boolean} rush is available for date
	     */
	    rushIsAvailable: function rushIsAvailable(dateToCheck, paymentServicesObj) {
	      return hasRushPeriod(paymentServicesObj) && !isDateRushCutoff(dateToCheck, paymentServicesObj);
	    },
	
	    /**
	     * @name DateService#convertDateToServerDayString
	     * @type {function}
	     * @description return a date in format YYYY-MM-DD for POSTing to the server
	     * @param {Date} the date to format
	     * @return {string} formatted date
	     */
	    convertDateToServerDayString: function convertDateToServerDayString(date) {
	      var day = date.getDate();
	      var month = date.getMonth() + 1;
	      var year = date.getFullYear();
	
	      var dayStr = (day < 10 ? '0' : '') + day.toString();
	      var monthStr = (month < 10 ? '0' : '') + month.toString();
	
	      return year + '-' + monthStr + '-' + dayStr;
	    },
	
	    /**
	     * @name DateService#isDateSelectable
	     * @type {function}
	     * @description determines if the date can be selected
	     * @param {module:model-bb-billpay-ng.PaymentServices} paymentServicesObj
	     * @param {Date} date
	     * @return {boolean} date is selectable
	     */
	    isDateSelectable: isDateSelectable,
	
	    /**
	     * @name DateService#isDayDisabledRush
	     * @type {function}
	     * @description a method to run on dates to disable those that cannot be payment dates
	     * @param {module:model-bb-billpay-ng.PaymentServices} paymentServicesObj
	     * @param {object} obj
	     * @param {Date} obj.date
	     * @param {string} obj.mode
	     * @return {boolean} is date to be disabled
	     */
	    isDayDisabledRush: isDayDisabledRush,
	
	    /**
	     * @name DateService#showFinalRecurringPaymentDate
	     * @type {function}
	     * @description show the date if the required fields are filled in
	     * @param {object} newPayment
	     * @return {boolean}
	     */
	    showFinalRecurringPaymentDate: function showFinalRecurringPaymentDate(_ref4) {
	      var paymentDate = _ref4.paymentDate,
	          frequency = _ref4.frequency,
	          numberOfInstances = _ref4.numberOfInstances,
	          frequencyEnd = _ref4.frequencyEnd;
	      return frequencyEnd === 'number' && isValidDate(paymentDate) && !!frequency && !!numberOfInstances;
	    },
	
	    /**
	     * @name DateService#showFinalRecurringPaymentDateAndNumInstances
	     * @type {function}
	     * @description show the date & number of instances if the required fields are filled in
	     * @param {object} newPayment
	     * @return {boolean}
	     */
	    showFinalRecurringPaymentDateAndNumInstances: function showFinalRecurringPaymentDateAndNumInstances(_ref5) {
	      var frequencyEnd = _ref5.frequencyEnd,
	          paymentDate = _ref5.paymentDate,
	          finalPaymentDate = _ref5.finalPaymentDate,
	          frequency = _ref5.frequency;
	      return frequencyEnd === 'date' && !!frequency && isValidDate(paymentDate) && isValidDate(finalPaymentDate) && !isDateInPast(finalPaymentDate) && !isWeekend(finalPaymentDate) && isDateBeforeOrSame(paymentDate, finalPaymentDate);
	    },
	
	    /**
	     * @name DateService#dateDiffInFullMonths
	     * @type {function}
	     * @description the amount of full months difference between dates
	     * @param {Date} date1 - The start date to check from
	     * @param {Date} date2 - The end date to check to
	     * @return {number}
	     */
	    dateDiffInFullMonths: dateDiffInFullMonths,
	
	    /**
	     * @name DateService#dateDiffInFullYears
	     * @type {function}
	     * @description the amount of full years difference between dates
	     * @param {Date} date1 - The start date to check from
	     * @param {Date} date2 - The end date to check to
	     * @return {number}
	     */
	    dateDiffInFullYears: dateDiffInFullYears,
	
	    /**
	     * @name DateService#getFinalRecurringPaymentDate
	     * @type {function}
	     * @description return the final recurring payment date given a starting date, frequency and
	     *   no. of instances
	     * @param {date} paymentDate
	     * @param {string} frequency
	     * @param {number} numberOfInstances
	     * @return {date}
	     */
	    getFinalRecurringPaymentDate: function getFinalRecurringPaymentDate(paymentDate, frequency, numberOfInstances) {
	      var numberOfExtraInstances = numberOfInstances - 1;
	      var finalPaymentDate = new Date(paymentDate.getTime());
	
	      var transformFinalPaymentDate = {
	        weekly: function weekly() {
	          return finalPaymentDate.setDate(finalPaymentDate.getDate() + numberOfExtraInstances * DAYS_IN_WEEK);
	        },
	        'bi-weekly': function biWeekly() {
	          return finalPaymentDate.setDate(finalPaymentDate.getDate() + numberOfExtraInstances * DAYS_IN_BIWEEK);
	        },
	        'semi-monthly': function semiMonthly() {
	          var monthsToAdd = Math.floor(numberOfExtraInstances / SEMI_PERIOD_ITERATIONS);
	          var daysToAdd = numberOfExtraInstances % SEMI_PERIOD_ITERATIONS === 0 ? 0 : SEMI_MONTHLY_DAY_INTERVAL;
	
	          // Add the whole months
	          finalPaymentDate.setMonth(finalPaymentDate.getMonth() + monthsToAdd);
	          finalPaymentDate = checkForFinalPaymentMonthSkip(paymentDate, finalPaymentDate);
	          finalPaymentDate.setDate(finalPaymentDate.getDate() + daysToAdd);
	        },
	        monthly: function monthly() {
	          finalPaymentDate.setMonth(finalPaymentDate.getMonth() + numberOfExtraInstances);
	          finalPaymentDate = checkForFinalPaymentMonthSkip(paymentDate, finalPaymentDate);
	        },
	        quarterly: function quarterly() {
	          finalPaymentDate.setMonth(finalPaymentDate.getMonth() + numberOfExtraInstances * MONTHS_IN_QUARTER);
	          finalPaymentDate = checkForFinalPaymentMonthSkip(paymentDate, finalPaymentDate);
	        },
	        'semi-annually': function semiAnnually() {
	          finalPaymentDate.setMonth(finalPaymentDate.getMonth() + numberOfExtraInstances * MONTHS_IN_SEMI_ANNUAL);
	          finalPaymentDate = checkForFinalPaymentMonthSkip(paymentDate, finalPaymentDate);
	        },
	        annually: function annually() {
	          finalPaymentDate.setFullYear(finalPaymentDate.getFullYear() + numberOfExtraInstances);
	          finalPaymentDate = checkForFinalPaymentMonthSkip(paymentDate, finalPaymentDate);
	        }
	      };
	
	      transformFinalPaymentDate[frequency]();
	
	      // Check that the date is valid (not a weekend, or a holiday). If weekend, go back to friday
	      var finalPaymentDateDayOfWeek = finalPaymentDate.getDay();
	      var finalPaymentDateDayOfMonth = finalPaymentDate.getDate();
	
	      if (finalPaymentDateDayOfWeek === 0) {
	        finalPaymentDateDayOfMonth -= 2;
	      } else if (finalPaymentDateDayOfWeek === 6) {
	        finalPaymentDateDayOfMonth -= 1;
	      }
	      finalPaymentDate.setDate(finalPaymentDateDayOfMonth);
	
	      return finalPaymentDate;
	    },
	
	    /**
	     * @name DateService#calculateNumberOfInstances
	     * @type {function}
	     * @description return the number of instances (payments) that will be made
	     * between two dates with a frequency set, until BUT NOT after the date
	     * @param {object} newPayment
	     * @param {date} newPayment.paymentDate the first payment date
	     * @param {date} newPayment.finalPaymentDate the date which
	     * payments are made up to but not after
	     * @param {string} newPayment.frequency the name of the frequency of payments to be made
	     * @return {number}
	     */
	    calculateNumberOfInstances: function calculateNumberOfInstances(_ref6) {
	      var paymentDate = _ref6.paymentDate,
	          finalPaymentDate = _ref6.finalPaymentDate,
	          frequency = _ref6.frequency;
	
	      var getNumberOfInstancesFromDates = {
	        weekly: function weekly() {
	          return Math.floor(dateDiffInDays(paymentDate, finalPaymentDate) / DAYS_IN_WEEK);
	        },
	        'bi-weekly': function biWeekly() {
	          return Math.floor(dateDiffInDays(paymentDate, finalPaymentDate) / DAYS_IN_BIWEEK);
	        },
	        'semi-monthly': function semiMonthly() {
	          var dateDiffInMonths = dateDiffInFullMonths(paymentDate, finalPaymentDate);
	          var numberOfExtraInstances = dateDiffInMonths * SEMI_PERIOD_ITERATIONS;
	
	          // check if a semi-monthly occurance is required i.e. expected
	          // date from the added months is before the selected end date
	          var expectedLastDate = new Date(paymentDate);
	          expectedLastDate.setMonth(expectedLastDate.getMonth() + dateDiffInMonths);
	          var expectedNextDate = new Date(expectedLastDate.setDate(expectedLastDate.getDate() + SEMI_MONTHLY_DAY_INTERVAL));
	
	          // add another instance for the semi monthly interval if it is before selected end date
	          var isNextDateAvailable = isDateBeforeOrSame(expectedNextDate, finalPaymentDate);
	          return isNextDateAvailable ? numberOfExtraInstances + 1 : numberOfExtraInstances;
	        },
	        monthly: function monthly() {
	          return dateDiffInFullMonths(paymentDate, finalPaymentDate);
	        },
	        quarterly: function quarterly() {
	          return Math.floor(dateDiffInFullMonths(paymentDate, finalPaymentDate) / MONTHS_IN_QUARTER);
	        },
	        'semi-annually': function semiAnnually() {
	          return Math.floor(dateDiffInFullMonths(paymentDate, finalPaymentDate) / MONTHS_IN_SEMI_ANNUAL);
	        },
	        annually: function annually() {
	          return dateDiffInFullYears(paymentDate, finalPaymentDate);
	        }
	      };
	
	      var numberOfInstances = getNumberOfInstancesFromDates[frequency]();
	      // 1 is the first payment on the start date that is always made
	      return numberOfInstances + 1;
	    }
	  };
	}

/***/ }),
/* 89 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = AccountService;
	/**
	* @constructor AccountService
	* @description Encapsulate all account handling functionality
	*/
	function AccountService() {
	  var obfuscateAccountNumber = function obfuscateAccountNumber(accNo) {
	    return "****" + accNo.substring(4);
	  };
	
	  return {
	    /**
	     * @name AccountService#accountNameOrNumber
	     * @type {function}
	     * @description return the account nickname, else a blurred acc number
	     * @param {module:model-bb-billpay-ng.PaymentAccount} account
	     * @return {string}
	     */
	    accountNameOrNumber: function accountNameOrNumber(account) {
	      var accountNickName = account.accountNickName,
	          accountNumber = account.accountNumber;
	
	      var obfuscatedAccountNumber = obfuscateAccountNumber(accountNumber);
	
	      return accountNickName || obfuscatedAccountNumber;
	    },
	
	
	    /**
	     * @name AccountService#accountNameAndNumber
	     * @type {function}
	     * @description return the account nickname & blurred acc number, else just a blurred acc number
	     * @param {module:model-bb-billpay-ng.PaymentAccount} account
	     * @return {string}
	     */
	    accountNameAndNumber: function accountNameAndNumber(_ref) {
	      var accountNickName = _ref.accountNickName,
	          accountNumber = _ref.accountNumber;
	
	      var obfuscatedAccountNumber = obfuscateAccountNumber(accountNumber);
	
	      return accountNickName ? accountNickName + " (" + obfuscatedAccountNumber + ")" : obfuscatedAccountNumber;
	    }
	  };
	}

/***/ }),
/* 90 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = PaymentService;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	* @constructor PaymentService
	* @param {DateService} dateService
	* @param {ExpeditedService} expeditedService
	* @param {BillpayModel} model
	* @param {StateContainer} viewModel
	* @param {Object} events
	* @description Encapsulate all payment handling functionality for billpay.
	*/
	function PaymentService(dateService, expeditedService, model, viewModel, events) {
	  // List the valid payments to be made and group them by account for display
	  var summarisePayments = function summarisePayments(payees) {
	    return payees.reduce(function (paymentData, payee) {
	      var pd = paymentData;
	      var _payee$newPayment = payee.newPayment,
	          paymentAmount = _payee$newPayment.paymentAmount,
	          paymentAccount = _payee$newPayment.paymentAccount,
	          paymentDate = _payee$newPayment.paymentDate,
	          paymentMemo = _payee$newPayment.paymentMemo,
	          overnightDeliveryAddress = _payee$newPayment.overnightDeliveryAddress;
	      var accountNumber = paymentAccount.accountNumber;
	
	      var newPaymentValue = parseFloat(paymentAmount.value);
	
	      if (!newPaymentValue) return pd;
	
	      // If no group for this account exists, create it
	      if (!pd.paymentsByAccount[accountNumber]) {
	        Object.assign(pd.paymentsByAccount, _defineProperty({}, accountNumber, {
	          paymentAccount: paymentAccount,
	          payees: [],
	          total: 0,
	          rushFeeTotal: 0,
	          rushUsed: false
	        }));
	      }
	
	      // Add rush fee to total if applicable
	      var isDateRush = dateService.isDateRush(paymentDate, payee.paymentServicesObj);
	      var rushFee = 0;
	      if (isDateRush) {
	        rushFee = expeditedService.getExpeditedFee(payee.paymentServicesObj);
	        newPaymentValue += rushFee;
	        pd.paymentsByAccount[accountNumber].rushFeeTotal += rushFee;
	        pd.paymentsByAccount[accountNumber].rushUsed = true;
	      }
	
	      // Add this payee and increase the total of the group
	      pd.paymentsByAccount[accountNumber].payees.push(payee);
	      pd.paymentsByAccount[accountNumber].total += newPaymentValue;
	
	      // Push the payment pnto the overall list of payments
	      pd.payments.push({
	        paymentMemo: paymentMemo,
	        paymentAccount: paymentAccount,
	        payeeID: payee.id,
	        payeeDisplayName: payee.nickName || payee.name,
	        rush: {
	          paymentFee: rushFee,
	          hasBeenUsed: isDateRush
	        },
	        paymentAmount: parseFloat(paymentAmount.value),
	        paymentDate: dateService.convertDateToServerDayString(paymentDate),
	        overnightDeliveryAddress: overnightDeliveryAddress
	      });
	
	      return pd;
	    }, {
	      paymentsByAccount: {},
	      payments: []
	    });
	  };
	
	  return {
	    /**
	     * @name PaymentService#summarisePayments
	     * @type {function}
	     * @description Return a summary of payments. Listed & grouped by payment account
	     * @param {module:model-bb-billpay-ng.PayeeSummary[]} payees The list of payees
	     * @return {Object} Object containing an object of payments by account, and a list of payments
	     */
	    summarisePayments: summarisePayments,
	
	    /**
	     * @name PaymentService#getPayment
	     * @type {function}
	     * @return {Promise<void>}
	     * @description Update the view with a payment loaded from the data source
	     */
	    getPayment: function getPayment(id) {
	      viewModel.beforeGetPayment();
	      events.beforeGetPayment();
	      return model.getPayment(id).then(function (response) {
	        viewModel.afterGetPaymentSuccess(response);
	        events.afterGetPaymentSuccess(response);
	      }).catch(function (error) {
	        viewModel.afterGetPaymentError(error);
	        events.afterGetPaymentError(error);
	        throw error;
	      });
	    }
	  };
	}

/***/ }),
/* 91 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ExpeditedService;
	/**
	 * @constructor ExpeditedService
	 * @description Encapsulate all expedite functionality
	 */
	function ExpeditedService(widget) {
	  /**
	   * @name getPayment
	   * @type {function}
	   * @description get payment object
	   * @param {object} paymentServicesObj
	   * @param {object} [paymentServicesObj.EXPEDITED_PAYMENT]
	   * @param {object} [paymentServicesObj.OVERNIGHT_CHECK]
	   * @return {object|undefined}
	   */
	  var getPayment = function getPayment(_ref) {
	    var EXPEDITED_PAYMENT = _ref.EXPEDITED_PAYMENT,
	        OVERNIGHT_CHECK = _ref.OVERNIGHT_CHECK;
	    return EXPEDITED_PAYMENT || OVERNIGHT_CHECK;
	  };
	
	  /**
	   * @name isExpedited
	   * @inner
	   * @type {function}
	   * @description return true if payment is expedited
	   * @param {object} paymentServicesObj
	   * @return {boolean}
	   */
	  var isExpedited = function isExpedited(paymentServicesObj) {
	    return !!getPayment(paymentServicesObj);
	  };
	
	  /**
	   * @name getExpeditedFee
	   * @inner
	   * @type {function}
	   * @description return paymentFee from payment object
	   * @param {object} paymentServicesObj
	   * @return {number|undefined}
	   */
	  var getExpeditedFee = function getExpeditedFee(paymentServicesObj) {
	    var payment = getPayment(paymentServicesObj);
	    return payment ? payment.paymentFee : undefined;
	  };
	
	  return {
	    /**
	     * @name ExpeditedService#isExpedited
	     * @type {function}
	     * @description return true if payment is expedited
	     * @param {object} paymentServicesObj
	     * @return {boolean}
	     */
	    isExpedited: isExpedited,
	
	    /**
	     * @name ExpeditedService#getExpeditedFee
	     * @type {function}
	     * @description return paymentFee from payment object
	     * @param {object} paymentServicesObj
	     * @return {number|undefined}
	     */
	    getExpeditedFee: getExpeditedFee,
	
	    /**
	     * @name ExpeditedService#getEarliestPaymentDate
	     * @type {function}
	     * @description return earliestPaymentDate from payment object
	     * @param {object} paymentServicesObj
	     * @return {string|undefined}
	     */
	    getEarliestPaymentDate: function getEarliestPaymentDate(paymentServicesObj) {
	      var payment = getPayment(paymentServicesObj);
	      return payment ? payment.earliestPaymentDate : undefined;
	    },
	
	    /**
	     * @name ExpeditedService#getCutoffTime
	     * @type {function}
	     * @description return cutoffTime from payment object
	     * @param {object} paymentServicesObj
	     * @return {string|undefined}
	     */
	    getCutoffTime: function getCutoffTime(paymentServicesObj) {
	      var payment = getPayment(paymentServicesObj);
	      return payment ? payment.cutoffTime : undefined;
	    },
	
	    /**
	     * @name ExpeditedService#getPaymentDate
	     * @type {function}
	     * @description return earliest or next payment date  from payment object depending upon cutoff
	     * @param {object} paymentServicesObj
	     * @return {string|undefined}
	     */
	    getPaymentDate: function getPaymentDate(now, paymentServicesObj) {
	      var payment = getPayment(paymentServicesObj);
	      if (payment) {
	        var cutoffTime = new Date(payment.cutoffTime);
	        return now < cutoffTime ? payment.earliestPaymentDate : payment.nextPaymentDate;
	      }
	      return undefined;
	    },
	
	    /**
	     * @name BillpayViewPaymentsService#hasFeeBeenWaived
	     * @type {function}
	     * @description Is there an expedited payment and has the fee for it been waived
	     * @param {object} paymentServicesObj
	     * @return {boolean}
	     */
	    hasFeeBeenWaived: function hasFeeBeenWaived(paymentServicesObj) {
	      return isExpedited(paymentServicesObj) && getExpeditedFee(paymentServicesObj) === 0;
	    },
	
	    /**
	     * @name BillpayViewPaymentsService#showWaivedFees
	     * @type {boolean}
	     * @description Return the showWaivedRushFees value from widget preferences
	     */
	    get showWaivedFees() {
	      return widget.getBooleanPreference('showWaivedRushFees');
	    }
	  };
	}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ManagePaymentViewModel;
	
	var _helpers = __webpack_require__(93);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * @constructor ManagePaymentViewModel
	 * @param {StateContainer} viewModel
	 * @param {Hooks} hooks
	 */
	function ManagePaymentViewModel(viewModel, hooks, dateService, accountService, errorHookUtilities) {
	  viewModel.setState(hooks.setState({}));
	
	  // set payment services as a map on payee for keyed access
	  var addPaymentServicesObj = function addPaymentServicesObj(payee) {
	    var paymentServices = payee.paymentServices || [];
	
	    return Object.assign(payee, {
	      paymentServicesObj: paymentServices.reduce(function (services, service) {
	        return Object.assign(services, _defineProperty({}, service.paymentServiceType, service));
	      }, {})
	    });
	  };
	
	  /**
	   * @name addNewPaymentObj
	   * @type {function}
	   * @param {module:model-bb-billpay-ng.PayeeSummary} payee
	   * @param {module:model-bb-billpay-ng.PaymentAccount} [paymentAccount]
	   * @description Take a payee and set/reset the newPayment object. Setting the paymentAccount if
	   *  provided
	   * @return {Object} transformed payee
	   */
	  var addNewPaymentObj = function addNewPaymentObj(payee, paymentAccount) {
	    return Object.assign(payee, {
	      newPayment: {
	        paymentDate: dateService.getFirstFreePaymentDate(payee),
	        paymentAmount: {
	          currency: null,
	          value: 0
	        },
	        paymentMemo: '',
	        paymentAccount: paymentAccount || null,
	        overnightDeliveryAddress: payee.overnightDeliveryAddress || {
	          address1: null,
	          address2: null,
	          city: null,
	          state: null,
	          postalCode: null
	        }
	      }
	    });
	  };
	
	  return {
	    /**
	     * @name ManagePaymentViewModel#beforeGetPayeesSummary
	     * @type {function}
	     * @description Amend the view to inform the user the list of payees is being loaded
	     * @return {ViewState} The new state of the view model
	     */
	    beforeGetPayeesSummary: viewModel.createAction(function (current) {
	      return hooks.beforeGetPayeesSummary(Object.assign({}, current, {
	        isLoadingPayees: true
	      }));
	    }),
	
	    /**
	     * @name ManagePaymentViewModel#afterGetPayeesSummarySuccess
	     * @type {function}
	     * @description Amend the view to display the list of payees
	     * @param {object} updateData data used to update viewmodel
	     * @param {Array<module:model-bb-billpay-ng.PayeeSummary>} updateData.payeeSummaries
	     * @param {string} [updateData.newPayeeId] id of last created payee
	     * @return {ViewState} The new state of the view model
	     */
	    afterGetPayeesSummarySuccess: viewModel.createAction(function (current, _ref) {
	      var payeeSummaries = _ref.payeeSummaries,
	          newPayeeId = _ref.newPayeeId;
	
	      // If there are already accounts populated then keep track of the first one
	      var accounts = current.accounts;
	
	      var account = accounts && accounts.length && accounts[0];
	
	      return hooks.afterGetPayeesSummarySuccess(Object.assign({}, current, {
	        payees: payeeSummaries.map(addPaymentServicesObj).map(function (payee) {
	          return Object.assign({}, payee, {
	            isNewPayee: newPayeeId && newPayeeId.length && payee.id === newPayeeId
	          });
	        }).map(function (payee) {
	          return addNewPaymentObj(payee, account);
	        }).map(hooks.transformPayee),
	        isLoadingPayees: false
	      }));
	    }),
	
	    /**
	     * @name ManagePaymentViewModel#afterGetPayeesSummaryError
	     * @type {function}
	     * @description Amend the view to display the error encountered when loading the list of payees
	     * @param {module:lib-bb-model-errors.ModelError} error
	     * @return {ViewState} The new state of the view model
	     */
	    afterGetPayeesSummaryError: viewModel.createAction(function (current, error) {
	      return hooks.afterGetPayeesSummaryError(Object.assign({}, current, {
	        error: (0, _helpers.uiError)(error),
	        isLoadingPayees: false
	      }));
	    }),
	
	    /**
	     * @name ManagePaymentViewModel#beforeGetAccounts
	     * @type {function}
	     * @description Amend the view to inform the user the list of accounts is being loaded
	     * @param {ViewState} current The current state of the view model
	     * @return {ViewState} The new state of the view model
	     */
	    beforeGetAccounts: viewModel.createAction(function (current) {
	      return hooks.beforeGetAccounts(Object.assign({}, current, {
	        isLoadingAccounts: true
	      }));
	    }),
	
	    /**
	     * @name ManagePaymentViewModel#afterGetAccountsSuccess
	     * @type {function}
	     * @description Amend the view to display the list of accounts
	     * @param {Array<module:model-bb-billpay-ng.PaymentAccount>} paymentAccounts
	     * @return {ViewState} The new state of the view model
	     */
	    afterGetAccountsSuccess: viewModel.createAction(function (current, paymentAccounts) {
	      return hooks.afterGetAccountsSuccess(Object.assign({}, current, {
	        accounts: paymentAccounts.map(function (account) {
	          return Object.assign({}, account, {
	            displayName: accountService.accountNameOrNumber(account),
	            longDisplayName: accountService.accountNameAndNumber(account)
	          });
	        }).map(hooks.transformAccount),
	        isLoadingAccounts: false
	      }));
	    }),
	
	    /**
	     * @name ManagePaymentViewModel#afterGetAccountsError
	     * @type {function}
	     * @description Amend the view to display the error encountered when loading the list of
	     *    accounts
	     * @param {module:lib-bb-model-errors.ModelError} error
	     * @return {ViewState} The new state of the view model
	     */
	    afterGetAccountsError: viewModel.createAction(function (current, error) {
	      return hooks.afterGetAccountsError(Object.assign({}, current, {
	        error: (0, _helpers.uiError)(error),
	        isLoadingAccounts: false
	      }));
	    }),
	
	    /**
	     * @name ManagePaymentViewModel#beforePostPaymentsRecord
	     * @type {function}
	     * @description Amend the view to inform the user the payment is currently being created
	     * @return {ViewState} The new state of the view model
	     */
	    beforePostPaymentsRecord: viewModel.createAction(function (current) {
	      return hooks.beforePostPaymentsRecord(Object.assign({}, current, {
	        postPaymentsError: false,
	        isPostingPayment: true
	      }));
	    }),
	
	    /**
	     * @name ManagePaymentViewModel#afterPostPaymentsRecordSuccess
	     * @type {function}
	     * @description Amend the view to inform the user that the payments have successfully been
	     *  created
	     * @return {ViewState} The new state of the view model
	     */
	    afterPostPaymentsRecordSuccess: viewModel.createAction(function (current) {
	      return hooks.afterPostPaymentsRecordSuccess(Object.assign({}, current, {
	        isPostingPayment: false
	      }));
	    }),
	
	    /**
	     * @name ManagePaymentViewModel#afterPostPaymentsRecordError
	     * @type {function}
	     * @description Amend the view to display the error encountered when creating the payments
	     *  including any available payments errors
	     * @param {module:lib-bb-model-errors.ModelError} error
	     * @return {ViewState} The new state of the view model
	     */
	    afterPostPaymentsRecordError: viewModel.createAction(function (current, error) {
	      return hooks.afterPostPaymentsRecordError(Object.assign({}, current, {
	        paymentsSummary: Object.assign({}, current.paymentsSummary, {
	          payments: errorHookUtilities.addPaymentErrors(current, error)
	        }),
	        error: (0, _helpers.uiError)(error),
	        postPaymentsError: true,
	        isPostingPayment: false
	      }));
	    }),
	
	    /**
	     * @name ManagePaymentViewModel#beforePostRecurringPaymentsRecord
	     * @type {function}
	     * @description Amend the view to inform the user the recurring payment is currently being
	     *   created
	     * @return {ViewState} The new state of the view model
	     */
	    beforePostRecurringPaymentsRecord: viewModel.createAction(function (current) {
	      return hooks.beforePostRecurringPaymentsRecord(Object.assign({}, current, {
	        isPostingRecurringPayments: true,
	        postRecurringPaymentsError: false,
	        postingRecurringPaymentsComplete: false
	      }));
	    }),
	
	    /**
	     * @name ManagePaymentViewModel#afterPostRecurringPaymentsRecordSuccess
	     * @type {function}
	     * @description Amend the view to inform the user that the recurring payment has successfully
	     *   been created
	     * @param {object} newPayment
	     * @param {object} newPayment.id - The new payment id
	     * @return {ViewState} The new state of the view model
	     */
	    afterPostRecurringPaymentsRecordSuccess: viewModel.createAction(function (current, _ref2) {
	      var id = _ref2.id;
	      return hooks.afterPostRecurringPaymentsRecordSuccess(Object.assign({}, current, {
	        isPostingRecurringPayments: false,
	        postingRecurringPaymentsComplete: true,
	        newRecurringPaymentsId: id,
	        errorMap: {}
	      }));
	    }),
	
	    /**
	     * @name ManagePaymentViewModel#afterPostRecurringPaymentsRecordError
	     * @type {function}
	     * @description Amend the view to display the error encountered when creating the recurring
	     *   payment
	     * @param {module:lib-bb-model-errors.ModelError} error
	     * @return {ViewState} The new state of the view model
	     */
	    afterPostRecurringPaymentsRecordError: viewModel.createAction(function (current, error) {
	      var thisError = errorHookUtilities.transformErrorMap(error);
	      return hooks.afterPostRecurringPaymentsRecordError(Object.assign({}, current, {
	        error: thisError,
	        errorMap: errorHookUtilities.getErrorMap(thisError.errors),
	        isPostingRecurringPayments: false,
	        postRecurringPaymentsError: true
	      }));
	    }),
	
	    /**
	     * @name ManagePaymentViewModel#beforeGetPayment
	     * @type {function}
	     * @description Amend the view to inform the user the payment is being loaded
	     * @return {ViewState} The new state of the view model
	     */
	    beforeGetPayment: viewModel.createAction(function (current) {
	      return hooks.beforeGetPayment(Object.assign({}, current, {
	        isLoadingPayment: true
	      }));
	    }),
	
	    /**
	     * @name ManagePaymentViewModel#afterGetPaymentSuccess
	     * @type {function}
	     * @description Amend the view to display the payment
	     * @param {Array<module:model-bb-billpay-ng.Payment>} payment
	     * @return {ViewState} The new state of the view model
	     */
	    afterGetPaymentSuccess: viewModel.createAction(function (current, payment) {
	      return hooks.afterGetPaymentSuccess(Object.assign({}, current, {
	        payment: hooks.transformPayment(payment),
	        isLoadingPayment: false
	      }));
	    }),
	
	    /**
	     * @name ManagePaymentViewModel#afterGetPaymentError
	     * @type {function}
	     * @description Amend the view to display the error encountered when loading the payment
	     * @param {module:lib-bb-model-errors.ModelError} error
	     * @return {ViewState} The new state of the view model
	     */
	    afterGetPaymentError: viewModel.createAction(function (current, error) {
	      return hooks.afterGetPaymentError(Object.assign({}, current, {
	        error: (0, _helpers.uiError)(error),
	        isLoadingPayment: false
	      }));
	    }),
	
	    /**
	    * @name ManagePaymentViewModel#beforePutPaymentRecord
	    * @type {function}
	    * @description Amend the view to inform the user the payment is currently being updated
	    * @return {ViewState} The new state of the view model
	    */
	    beforePutPaymentRecord: viewModel.createAction(function (current) {
	      return hooks.beforePutPaymentRecord(Object.assign({}, current, {
	        putPaymentError: false,
	        isPuttingPayment: true
	      }));
	    }),
	
	    /**
	     * @name ManagePaymentViewModel#afterPutPaymentRecordSuccess
	     * @type {function}
	     * @description Amend the view to inform the user that the payments have successfully been
	     *  updated
	     * @return {ViewState} The new state of the view model
	     */
	    afterPutPaymentRecordSuccess: viewModel.createAction(function (current) {
	      return hooks.afterPutPaymentRecordSuccess(Object.assign({}, current, {
	        isPuttingPayment: false,
	        errorMap: {}
	      }));
	    }),
	
	    /**
	     * @name ManagePaymentViewModel#afterPutPaymentRecordError
	     * @type {function}
	     * @description Amend the view to display the error encountered when updating the payment
	     * @param {module:lib-bb-model-errors.ModelError} error
	     * @return {ViewState} The new state of the view model
	     */
	    afterPutPaymentRecordError: viewModel.createAction(function (current, error) {
	      var thisError = errorHookUtilities.transformErrorMap(error);
	      return hooks.afterPutPaymentRecordError(Object.assign({}, current, {
	        error: thisError,
	        errorMap: errorHookUtilities.getErrorMap(thisError.errors),
	        putPaymentError: true,
	        isPuttingPayment: false
	      }));
	    }),
	
	    /**
	     * @name ManagePaymentViewModel#clearBackendError
	     * @type {function}
	     * @param {string} inputName the input to clear error against
	     * @description Amend the state to clear an input error
	     */
	    clearBackendError: viewModel.createAction(function (current, inputName) {
	      return Object.assign({}, current, {
	        errorMap: errorHookUtilities.clearBackendError(inputName, current)
	      });
	    })
	  };
	}

/***/ }),
/* 93 */
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
/* 94 */
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
	   * @name Hooks#transformPayee
	   * @type {function}
	   * @description Make any modifications needed to the loaded payee
	   * @param {PayeeSummary} payee The current state of the payee
	   * @return {Object} The transformed payee
	   */
	  transformPayee: identity,
	
	  /**
	   * @name Hooks#transformAccount
	   * @type {function}
	   * @description Make any modifications needed to the loaded account
	   * @param {PaymentAccount} account The current state of the account
	   * @return {Object} The transformed account
	   */
	  transformAccount: identity,
	
	  /**
	   * @name Hooks#transformPayment
	   * @type {function}
	   * @description Make any modifications needed to the loaded payment
	   * @param {Payment} payment The current state of the payment
	   * @return {Object} The transformed payment
	   */
	  transformPayment: identity,
	
	  /**
	   * @name Hooks#beforeGetPayeesSummary
	   * @type {function}
	   * @description Amend the view before loading the list of payees
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  beforeGetPayeesSummary: identity,
	
	  /**
	   * @name Hooks#afterGetPayeesSummarySuccess
	   * @type {function}
	   * @description Amend the view after successfully loading the list of payees
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  afterGetPayeesSummarySuccess: identity,
	
	  /**
	   * @name Hooks#afterGetPayeesSummaryError
	   * @type {function}
	   * @description Amend the view after unsuccessfully loading the list of payees
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  afterGetPayeesSummaryError: identity,
	
	  /**
	   * @name Hooks#beforeGetAccounts
	   * @type {function}
	   * @description Amend the view before loading the list of accounts
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  beforeGetAccounts: identity,
	
	  /**
	   * @name Hooks#afterGetAccountsSuccess
	   * @type {function}
	   * @description Amend the view after successfully loading the list of accounts
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  afterGetAccountsSuccess: identity,
	
	  /**
	   * @name Hooks#afterGetAccountsError
	   * @type {function}
	   * @description Amend the view after unsuccessfully loading the list of accounts
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  afterGetAccountsError: identity,
	
	  /**
	   * @name Hooks#beforePostPaymentsRecord
	   * @type {function}
	   * @description Amend the view before posting a new batch of payments
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  beforePostPaymentsRecord: identity,
	
	  /**
	   * @name Hooks#afterPostPaymentsRecordSuccess
	   * @type {function}
	   * @description Amend the view after successfully posting a new batch of payments
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  afterPostPaymentsRecordSuccess: identity,
	
	  /**
	   * @name Hooks#afterPostPaymentsRecordError
	   * @type {function}
	   * @description Amend the view after unsuccessfully posting a new batch of payments
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  afterPostPaymentsRecordError: identity,
	
	  /**
	   * @name Hooks#beforePostRecurringPaymentsRecord
	   * @type {function}
	   * @description Amend the view before posting a new recurring payment
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  beforePostRecurringPaymentsRecord: identity,
	
	  /**
	   * @name Hooks#afterPostRecurringPaymentsRecordSuccess
	   * @type {function}
	   * @description Amend the view after successfully posting a new recurring payment
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  afterPostRecurringPaymentsRecordSuccess: identity,
	
	  /**
	   * @name Hooks#afterPostRecurringPaymentsRecordError
	   * @type {function}
	   * @description Amend the view after unsuccessfully posting a new recurring payment
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  afterPostRecurringPaymentsRecordError: identity,
	
	  /**
	   * @name Hooks#beforeGetPayment
	   * @type {function}
	   * @description Amend the view before loading the payment
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  beforeGetPayment: identity,
	
	  /**
	   * @name Hooks#afterGetPaymentSuccess
	   * @type {function}
	   * @description Amend the view after successfully loading the payment
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  afterGetPaymentSuccess: identity,
	
	  /**
	   * @name Hooks#afterGetPaymentError
	   * @type {function}
	   * @description Amend the view after unsuccessfully loading the payment
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  afterGetPaymentError: identity,
	
	  /**
	   * @name Hooks#beforePutPaymentRecord
	   * @type {function}
	   * @description Amend the view before putting a payment
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  beforePutPaymentRecord: identity,
	
	  /**
	   * @name Hooks#afterPutPaymentRecordSuccess
	   * @type {function}
	   * @description Amend the view after successfully putting  a payment
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  afterPutPaymentRecordSuccess: identity,
	
	  /**
	   * @name Hooks#afterPutPaymentRecordError
	   * @type {function}
	   * @description Amend the view after unsuccessfully putting a payment
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  afterPutPaymentRecordError: identity
	};
	
	/**
	 * @typedef {Object} PayeeSummary
	 * @extends module:data-bb-billpay-http-ng.PayeeSummary
	 */
	
	/**
	 * @typedef {Object} PaymentAccount
	 * @extends module:data-bb-billpay-http-ng.PaymentAccount
	 */

/***/ }),
/* 95 */
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
	  BEFORE_GET_ACCOUNTS: 'bb.event.billpay.getAccounts.before',
	  AFTER_GET_ACCOUNTS: 'bb.event.billpay.getAccounts.after',
	  AFTER_GET_ACCOUNTS_ERROR: 'bb.event.billpay.getAccounts.error',
	  BEFORE_GET_PAYEES_SUMMARY: 'bb.event.billpay.getPayeesSummary.before',
	  AFTER_GET_PAYEES_SUMMARY: 'bb.event.billpay.getPayeesSummary.after',
	  AFTER_GET_PAYEES_SUMMARY_ERROR: 'bb.event.billpay.getPayeesSummary.error',
	  BEFORE_POST_PAYMENTS_RECORD: 'bb.event.billpay.postPaymentsRecord.before',
	  AFTER_POST_PAYMENTS_RECORD: 'bb.event.billpay.postPaymentsRecord.after',
	  AFTER_POST_PAYMENTS_RECORD_ERROR: 'bb.event.billpay.postPaymentsRecord.error',
	  BEFORE_POST_RECURRING_PAYMENTS_RECORD: 'bb.event.billpay.postRecurringPaymentsRecord.before',
	  AFTER_POST_RECURRING_PAYMENTS_RECORD: 'bb.event.billpay.postRecurringPaymentsRecord.after',
	  AFTER_POST_RECURRING_PAYMENTS_RECORD_ERROR: 'bb.event.billpay.postRecurringPaymentsRecord.error',
	  BEFORE_GET_PAYMENT: 'bb.event.billpay.getPayment.before',
	  AFTER_GET_PAYMENT: 'bb.event.billpay.getPayment.after',
	  AFTER_GET_PAYMENT_ERROR: 'bb.event.billpay.getPayment.error',
	  BEFORE_PUT_PAYMENT: 'bb.event.billpay.putPayment.before',
	  AFTER_PUT_PAYMENT: 'bb.event.billpay.putPayment.after',
	  AFTER_PUT_PAYMENT_ERROR: 'bb.event.billpay.putPayment.error'
	};
	
	exports.default = function (bus) {
	  return {
	
	    /**
	     * @name beforeGetAccounts
	     * @type {function}
	     * @description Before get accounts event
	     */
	    beforeGetAccounts: function beforeGetAccounts() {
	      bus.publish(Events.BEFORE_GET_ACCOUNTS);
	    },
	
	    /**
	     * @name afterGetAccountsSuccess
	     * @type {function}
	     * @param {object} data Account data
	     * @description After get accounts event
	     */
	    afterGetAccountsSuccess: function afterGetAccountsSuccess(data) {
	      bus.publish(Events.AFTER_GET_ACCOUNTS, { data: data });
	    },
	
	    /**
	     * @name afterGetAccountsError
	     * @type {function}
	     * @param {object} error Error while getting accounts
	     * @description After get accounts error
	     */
	    afterGetAccountsError: function afterGetAccountsError(error) {
	      bus.publish(Events.AFTER_GET_ACCOUNTS_ERROR, { error: error });
	    },
	
	    /**
	     * @name beforeGetPayeesSummary
	     * @type {function}
	     * @description Before get payees summary event
	     */
	    beforeGetPayeesSummary: function beforeGetPayeesSummary() {
	      bus.publish(Events.BEFORE_GET_PAYEES_SUMMARY);
	    },
	
	    /**
	     * @name afterGetPayeesSummarySuccess
	     * @type {function}
	     * @param {object} data Payee summary data
	     * @description After get payees summary event
	     */
	    afterGetPayeesSummarySuccess: function afterGetPayeesSummarySuccess(data) {
	      bus.publish(Events.AFTER_GET_PAYEES_SUMMARY, { data: data });
	    },
	
	    /**
	     * @name afterGetPayeesSummaryError
	     * @type {function}
	     * @param {object} error Error after get payees summary
	     * @description After get payees summary error event
	     */
	    afterGetPayeesSummaryError: function afterGetPayeesSummaryError(error) {
	      bus.publish(Events.AFTER_GET_PAYEES_SUMMARY_ERROR, { error: error });
	    },
	
	    /**
	     * @name beforePostPaymentsRecord
	     * @type {function}
	     * @description Before post payments record event
	     */
	    beforePostPaymentsRecord: function beforePostPaymentsRecord() {
	      bus.publish(Events.BEFORE_POST_PAYMENTS_RECORD);
	    },
	
	    /**
	     * @name afterPostPaymentsRecordSuccess
	     * @type {function}
	     * @param {object} data Payment data
	     * @description Afterpost payments record success event
	     */
	    afterPostPaymentsRecordSuccess: function afterPostPaymentsRecordSuccess(data) {
	      bus.publish(Events.AFTER_POST_PAYMENTS_RECORD, { data: data });
	    },
	
	    /**
	     * @name afterPostPaymentsRecordError
	     * @type {function}
	     * @param {object} error Error while posting payments
	     * @description After post payments error
	     */
	    afterPostPaymentsRecordError: function afterPostPaymentsRecordError(error) {
	      bus.publish(Events.AFTER_POST_PAYMENTS_RECORD_ERROR, { error: error });
	    },
	
	    /**
	     * @name beforePostRecurringPaymentsRecord
	     * @type {function}
	     * @description Before post recurring payment record event
	     */
	    beforePostRecurringPaymentsRecord: function beforePostRecurringPaymentsRecord() {
	      bus.publish(Events.BEFORE_POST_RECURRING_PAYMENTS_RECORD);
	    },
	
	    /**
	     * @name afterPostRecurringPaymentsRecordSuccess
	     * @type {function}
	     * @description After post recurring payment record success event
	     */
	    afterPostRecurringPaymentsRecordSuccess: function afterPostRecurringPaymentsRecordSuccess(data) {
	      bus.publish(Events.AFTER_POST_RECURRING_PAYMENTS_RECORD, { data: data });
	    },
	
	    /**
	     * @name afterPostRecurringPaymentsRecordError
	     * @type {function}
	     * @description After post recurring payment record error event
	     */
	    afterPostRecurringPaymentsRecordError: function afterPostRecurringPaymentsRecordError(error) {
	      bus.publish(Events.AFTER_POST_RECURRING_PAYMENTS_RECORD_ERROR, { error: error });
	    },
	
	    /**
	     * @name Events#beforeGetPayment
	     * @type {function}
	     * @description trigger BEFORE_GET_PAYMENT event
	     */
	    beforeGetPayment: function beforeGetPayment() {
	      bus.publish(Events.BEFORE_GET_PAYMENT);
	    },
	
	    /**
	     * @name Events#afterGetPaymentSuccess
	     * @type {function}
	     * @description trigger AFTER_GET_PAYMENT event
	     * @param {module:model-bb-billpay-ng.Payment} payment
	     */
	    afterGetPaymentSuccess: function afterGetPaymentSuccess(payment) {
	      bus.publish(Events.AFTER_GET_PAYMENT, { payment: payment });
	    },
	
	    /**
	     * @name Events#afterGetPaymentError
	     * @type {function}
	     * @description trigger AFTER_GET_PAYMENT_ERROR event
	     * @param {module:lib-bb-model-errors.ModelError} error
	     */
	    afterGetPaymentError: function afterGetPaymentError(error) {
	      bus.publish(Events.AFTER_GET_PAYMENT_ERROR, { error: error });
	    },
	
	    /**
	     * @name Events#beforePutPaymentRecord
	     * @type {function}
	     * @description trigger BEFORE_PUT_PAYMENT event
	     */
	    beforePutPaymentRecord: function beforePutPaymentRecord() {
	      bus.publish(Events.BEFORE_PUT_PAYMENT);
	    },
	
	    /**
	     * @name Events#afterPutPaymentRecordSuccess
	     * @type {function}
	     * @description trigger AFTER_PUT_PAYMENT event
	     * @param {module:model-bb-billpay-ng.Payment} payment
	     */
	    afterPutPaymentRecordSuccess: function afterPutPaymentRecordSuccess(payment) {
	      bus.publish(Events.AFTER_PUT_PAYMENT, { payment: payment });
	    },
	
	    /**
	     * @name Events#afterPutPaymentRecordError
	     * @type {function}
	     * @description trigger AFTER_PUT_PAYMENT_ERROR event
	     * @param {module:lib-bb-model-errors.ModelError} error
	     */
	    afterPutPaymentRecordError: function afterPutPaymentRecordError(error) {
	      bus.publish(Events.AFTER_PUT_PAYMENT_ERROR, { error: error });
	    }
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=widget-bb-billpay-manage-payment-ng.js.map