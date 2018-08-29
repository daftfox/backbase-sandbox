(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-confirm-ng"), require("ui-bb-currency-input-ng"), require("ui-bb-dropdown-select-ng"), require("ui-bb-i18n-ng"), require("ui-bb-format-amount-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-number-input-ng"), require("ui-bb-stepper-ng"), require("ui-bb-substitute-error-ng"), require("vendor-bb-uib-datepicker"), require("vendor-bb-uib-datepicker-popup"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-billpay-edit-payment-ng", ["vendor-bb-angular-ng-aria", "ui-bb-confirm-ng", "ui-bb-currency-input-ng", "ui-bb-dropdown-select-ng", "ui-bb-i18n-ng", "ui-bb-format-amount-ng", "ui-bb-loading-overlay-ng", "ui-bb-number-input-ng", "ui-bb-stepper-ng", "ui-bb-substitute-error-ng", "vendor-bb-uib-datepicker", "vendor-bb-uib-datepicker-popup"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-billpay-edit-payment-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-confirm-ng"), require("ui-bb-currency-input-ng"), require("ui-bb-dropdown-select-ng"), require("ui-bb-i18n-ng"), require("ui-bb-format-amount-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-number-input-ng"), require("ui-bb-stepper-ng"), require("ui-bb-substitute-error-ng"), require("vendor-bb-uib-datepicker"), require("vendor-bb-uib-datepicker-popup"));
	else
		root["ext-bb-billpay-edit-payment-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-confirm-ng"], root["ui-bb-currency-input-ng"], root["ui-bb-dropdown-select-ng"], root["ui-bb-i18n-ng"], root["ui-bb-format-amount-ng"], root["ui-bb-loading-overlay-ng"], root["ui-bb-number-input-ng"], root["ui-bb-stepper-ng"], root["ui-bb-substitute-error-ng"], root["vendor-bb-uib-datepicker"], root["vendor-bb-uib-datepicker-popup"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__) {
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

	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _hooks = __webpack_require__(2);
	
	Object.defineProperty(exports, 'hooks', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_hooks).default;
	  }
	});
	
	var _helpers = __webpack_require__(3);
	
	Object.defineProperty(exports, 'helpers', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_helpers).default;
	  }
	});
	
	var _vendorBbAngularNgAria = __webpack_require__(4);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbConfirmNg = __webpack_require__(5);
	
	var _uiBbConfirmNg2 = _interopRequireDefault(_uiBbConfirmNg);
	
	var _uiBbCurrencyInputNg = __webpack_require__(6);
	
	var _uiBbCurrencyInputNg2 = _interopRequireDefault(_uiBbCurrencyInputNg);
	
	var _uiBbDropdownSelectNg = __webpack_require__(7);
	
	var _uiBbDropdownSelectNg2 = _interopRequireDefault(_uiBbDropdownSelectNg);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbFormatAmountNg = __webpack_require__(9);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(10);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBbNumberInputNg = __webpack_require__(11);
	
	var _uiBbNumberInputNg2 = _interopRequireDefault(_uiBbNumberInputNg);
	
	var _uiBbStepperNg = __webpack_require__(12);
	
	var _uiBbStepperNg2 = _interopRequireDefault(_uiBbStepperNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(13);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _vendorBbUibDatepicker = __webpack_require__(14);
	
	var _vendorBbUibDatepicker2 = _interopRequireDefault(_vendorBbUibDatepicker);
	
	var _vendorBbUibDatepickerPopup = __webpack_require__(15);
	
	var _vendorBbUibDatepickerPopup2 = _interopRequireDefault(_vendorBbUibDatepickerPopup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bb-billpay-edit-payment-ng
	 *
	 * @description extension for widget-bb-billpay-manage-payment-ng
	 *
	 * @requires vendor-bb-angular-ng-aria
	 */
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbConfirmNg2.default, _uiBbCurrencyInputNg2.default, _uiBbDropdownSelectNg2.default, _uiBbI18nNg2.default, _uiBbFormatAmountNg2.default, _uiBbLoadingOverlayNg2.default, _uiBbNumberInputNg2.default, _uiBbStepperNg2.default, _uiBbSubstituteErrorNg2.default, _vendorBbUibDatepicker2.default, _vendorBbUibDatepickerPopup2.default];
	
	var events = exports.events = {};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Hooks
	 * @type {Object}
	 * @description Hooks for widget-bb-billpay-manage-payment-ng
	 */
	exports.default = {
	  /**
	   * @name Hooks#setState
	   * @type {function}
	   * @description add any state required by extension
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  setState: function setState(current) {
	    return Object.assign({}, current, {
	      template: '#ext-bb-billpay-edit-payment-ng/main.ng.html'
	    });
	  }
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @constructor Helpers
	 */
	exports.default = function (_ref) {
	  var $filter = _ref.$filter,
	      accountService = _ref.accountService,
	      dateService = _ref.dateService,
	      managePaymentService = _ref.managePaymentService,
	      expeditedService = _ref.expeditedService,
	      stateContainer = _ref.stateContainer,
	      managePaymentViewModel = _ref.managePaymentViewModel,
	      errorHelperUtilities = _ref.errorHelperUtilities;
	  var showWaivedFees = expeditedService.showWaivedFees;
	
	  /**
	   * @name transformPaymentObject
	   * @inner
	   * @type {function}
	   * @description transform to flat payment suitable for sending to back end
	   * @param {object} payee
	   * @param {string} payee.id
	   * @param {object} payee.newPayment
	   * @return {string}
	  */
	
	  var transformPaymentObject = function transformPaymentObject(_ref2) {
	    var payeeID = _ref2.id,
	        newPayment = _ref2.newPayment;
	    var paymentId = newPayment.id,
	        paymentAmount = newPayment.paymentAmount,
	        paymentDate = newPayment.paymentDate,
	        paymentMemo = newPayment.paymentMemo,
	        _newPayment$paymentAc = newPayment.paymentAccount,
	        accountNumber = _newPayment$paymentAc.accountNumber,
	        accountType = _newPayment$paymentAc.accountType,
	        routingNumber = _newPayment$paymentAc.routingNumber,
	        overnightDeliveryAddress = newPayment.overnightDeliveryAddress;
	
	
	    return Object.assign({
	      payeeID: payeeID,
	      id: paymentId,
	      paymentAmount: parseFloat(paymentAmount.value),
	      paymentDate: paymentDate ? dateService.convertDateToServerDayString(paymentDate) : null,
	      paymentAccount: { accountNumber: accountNumber, accountType: accountType, routingNumber: routingNumber }
	    }, !!paymentMemo && { paymentMemo: paymentMemo }, {
	      overnightDeliveryAddress: overnightDeliveryAddress || {
	        address1: null,
	        address2: null,
	        city: null,
	        state: null,
	        postalCode: null
	      }
	    });
	  };
	
	  /**
	   * @name updateState
	   * @inner
	   * @type {function}
	   * @description Update the view model state
	   * @param {object} viewState
	   */
	  var updateState = function updateState(viewState) {
	    return stateContainer.createAction(function (current) {
	      return Object.assign({}, current, viewState);
	    })(viewState);
	  };
	
	  /**
	   * @name updatePaymentState
	   * @inner
	   * @type {function}
	   * @description Update the payment into the state
	   * @param {object} $ctrl
	   * @param {object} $ctrl.payee
	   */
	  var updatePaymentState = function updatePaymentState(_ref3) {
	    var payee = _ref3.payee;
	
	    var payment = transformPaymentObject(payee);
	
	    // Keep the current payment in the state
	    updateState({
	      payment: Object.assign({}, payment, {
	        paymentAccountNumber: payment.paymentAccount.accountNumber
	      })
	    });
	  };
	
	  /**
	   * @name payeeLoaded
	   * @inner
	   * @type {function}
	   * @description Return true if a payee is in the view state
	   * @param {object} viewState
	   * @param {object} [viewState.payee]
	   * @return {boolean}
	   */
	  var payeeLoaded = function payeeLoaded(_ref4) {
	    var payee = _ref4.payee;
	    return !!(payee && payee.id);
	  };
	
	  /**
	   * @name hasLoadingError
	   * @type {function}
	   * @description return true if no accounts and accounts are loaded
	   * @param {object} state
	   * @param {Array.<any>} [state.accounts]
	   * @param {boolean} [state.isLoadingAccounts]
	   * @inner
	   * @return {boolean}
	   */
	  var hasLoadingError = function hasLoadingError(_ref5) {
	    var accounts = _ref5.accounts,
	        isLoadingAccounts = _ref5.isLoadingAccounts;
	    return isLoadingAccounts != null && !isLoadingAccounts && (!accounts || !accounts.length);
	  };
	
	  /**
	   * @name unrecoverableErrorsExist
	   * @inner
	   * @type {function}
	   * @description return true if there are unrecoverable errors in the error map
	   * @param {object} state
	   * @param {object} [state.errorMap]
	   * @return {boolean}
	   */
	  var unrecoverableErrorsExist = function unrecoverableErrorsExist(_ref6) {
	    var _ref6$errorMap = _ref6.errorMap,
	        errorMap = _ref6$errorMap === undefined ? {} : _ref6$errorMap;
	
	    var extraErrorsToTreatAsUnrecoverable = ['billpay_payment_payee'];
	    return Object.keys(errorMap).some(function (key) {
	      return errorMap[key].unrecoverable || extraErrorsToTreatAsUnrecoverable.includes(key);
	    });
	  };
	
	  return {
	    /**
	     * @name Helpers#getCurrencyCode
	     * @type {function}
	     * @description get the currency code from service
	     * @return {string}
	     */
	    getCurrencyCode: function getCurrencyCode() {
	      return managePaymentService.getCurrencyCode();
	    },
	
	
	    /**
	     * @name Helpers#rushFee
	     * @type {function}
	     * @description return paymentFee from payment object
	     * @param {module:model-bb-billpay-ng.PayeeSummary} payee
	     * @param {object} payee.paymentServicesObj
	     * @return {number|undefined}
	     */
	    rushFee: function rushFee(_ref7) {
	      var paymentServicesObj = _ref7.paymentServicesObj;
	      return expeditedService.getExpeditedFee(paymentServicesObj);
	    },
	
	    /**
	     * @name Helpers#totalPaymentAmount
	     * @type {function}
	     * @description return the total payment amount, with rush included if selected
	     * @param {module:model-bb-billpay-ng.PayeeSummary} payee
	     * @param {object} payee.newPayment
	     * @param {object} payee.paymentServicesObj
	     * @return {number}
	     */
	    totalPaymentAmount: function totalPaymentAmount(_ref8) {
	      var newPayment = _ref8.newPayment,
	          paymentServicesObj = _ref8.paymentServicesObj;
	
	      var rushChosen = dateService.isDateRush(newPayment.paymentDate, paymentServicesObj);
	      var rushFee = expeditedService.getExpeditedFee(paymentServicesObj);
	      return parseFloat(newPayment.paymentAmount.value) + (rushChosen ? rushFee : 0);
	    },
	
	    /**
	     * @name Helpers#stepperLabels
	     * @type {object}
	     * @description Internationalised strings for the stepper buttons
	     */
	    stepperLabels: {
	      previous: $filter('i18n')('buttons.previous'),
	      next: $filter('i18n')('buttons.next'),
	      cancel: $filter('i18n')('buttons.cancel'),
	      finish: $filter('i18n')('buttons.finish')
	    },
	
	    /**
	     * @name Helpers#accountNameAndNumber
	     * @type {function}
	     * @description return the account nickname & blurred acc number, else just a blurred acc number
	     * @param {module:model-bb-billpay-ng.PaymentAccount} account
	     * @return {string}
	     */
	    accountNameAndNumber: function accountNameAndNumber(account) {
	      return accountService.accountNameAndNumber(account);
	    },
	
	
	    /**
	     * @name Helpers#allowNextStep
	     * @type {function}
	     * @param {module:widget-bb-billpay-manage-payment-ng.EditPaymentController} ctrl
	     * @param {object} ctrl.payee - payee control data
	     * @param {object} state
	     * @description allow move to next step if control data valid
	     * @returns {boolean}
	     */
	    allowNextStep: function allowNextStep(_ref9, state) {
	      var payee = _ref9.payee;
	
	      var date = payee.newPayment.paymentDate;
	      return !!(payee.paymentServicesObj && payee.newPayment.paymentAccount && parseFloat(payee.newPayment.paymentAmount.value) && dateService.isValidDate(date) && dateService.isDateSelectable(payee.paymentServicesObj, date) && !unrecoverableErrorsExist(state));
	    },
	
	    /**
	     * @name Helpers#allowPreviousStep
	     * @type {function}
	     * @param {object} state
	     * @description allow move to previous step if no unrecoverable errors exist
	     * @returns {boolean}
	     */
	    allowPreviousStep: function allowPreviousStep(state) {
	      return !unrecoverableErrorsExist(state);
	    },
	
	    /**
	     * @name Helpers#onFinish
	     * @type {function}
	     * @param {object} $ctrl The control state
	     * @param {function} $ctrl.returnToPreviousScreen The function to call to navigate
	     * @param {object} $ctrl.payee
	     * @param {object} $ctrl.payee.newPayment data to save
	     * @description save changes and call intent if successful
	     * @returns {Promise<void>}
	     */
	    onFinish: function onFinish($ctrl) {
	      var payee = $ctrl.payee,
	          returnToPreviousScreen = $ctrl.returnToPreviousScreen;
	
	      var payment = transformPaymentObject(payee);
	
	      // Keep the current payment in the state
	      updatePaymentState($ctrl);
	
	      return managePaymentService.putPaymentRecord(payment).then(function () {
	        returnToPreviousScreen({
	          paymentId: payee.newPayment.id,
	          status: 'success'
	        });
	      }).catch(function () {
	        // error handling is dealt with in the service
	      });
	    },
	
	    /**
	     * @name Helpers#reviewTitle
	     * @type {function}
	     * @description Return the title i18ned string with the account the payment is coming from
	     * @param {module:model-bb-billpay-ng.PayeeSummary} payee
	     * @param {object} payee.newPayment
	     * @return {string}
	     */
	    reviewTitle: function reviewTitle(_ref10) {
	      var newPayment = _ref10.newPayment;
	
	      var title = $filter('i18n')('review.title');
	      var accountDisplay = accountService.accountNameAndNumber(newPayment.paymentAccount);
	      return title + ' ' + accountDisplay;
	    },
	
	    /**
	     * @name openCancelConfirmationModal
	     * @type {function}
	     * @description Change the control state to show the cancel modal
	     * @param {{cancelConfirm}} holder
	     */
	    openCancelConfirmationModal: function openCancelConfirmationModal(holder) {
	      return Object.assign(holder.cancelConfirm, { isOpen: true });
	    },
	
	    /**
	     * @name Helpers#navigateForCancel
	     * @type {function}
	     * @param {function} returnToPreviousScreen
	     * @description Navigate back to the previous screen with a 'cancelled' status payload
	     * @returns {void}
	     */
	    navigateForCancel: function navigateForCancel(returnToPreviousScreen) {
	      returnToPreviousScreen({
	        status: 'cancelled'
	      });
	    },
	
	    /**
	     * @name Helpers#isLoading
	     * @type {function}
	     * @description Return true if any of the endpoints are loading
	     * @param {object} state
	     * @param {boolean} state.isLoadingAccounts
	     * @param {boolean} state.isLoadingPayees
	     * @param {boolean} state.isLoadingPayment
	     * @param {boolean} state.isPuttingPayment
	     * @return {boolean}
	     */
	    isLoading: function isLoading(_ref11) {
	      var isLoadingAccounts = _ref11.isLoadingAccounts,
	          isLoadingPayees = _ref11.isLoadingPayees,
	          isLoadingPayment = _ref11.isLoadingPayment,
	          isPuttingPayment = _ref11.isPuttingPayment;
	      return isLoadingAccounts || isLoadingPayees || isLoadingPayment || isPuttingPayment;
	    },
	
	    /**
	     * @name Helpers#paymentSelected
	     * @type {function}
	     * @description Return true if the widget has been initialised with an id
	     * @param {object} state
	     * @param {boolean} state.isLoadingPayment
	     * @return {boolean}
	     */
	    paymentSelected: function paymentSelected(_ref12) {
	      var isLoadingPayment = _ref12.isLoadingPayment;
	      return isLoadingPayment !== undefined;
	    },
	
	    /**
	     * @name Helpers#getLoadingErrorMessageKey
	     * @type {function}
	     * @description get any error message
	     * @param {object} state
	     * @param {object} state.error
	     * @param {boolean} state.isLoadingPayees
	     * @param {Array.<any>} [state.payees]
	     * @return {string} message from error
	     */
	    getLoadingErrorMessageKey: function getLoadingErrorMessageKey(_ref13) {
	      var error = _ref13.error,
	          isLoadingPayees = _ref13.isLoadingPayees,
	          payees = _ref13.payees;
	
	      var payeeError = function payeeError() {
	        return isLoadingPayees != null && !isLoadingPayees && (!payees || !payees.length) ? 'billpay.model.error.unexpected' : '';
	      };
	      return error && !error.fromFormSubmission ? error.message : payeeError();
	    },
	
	    /**
	     * @name Helpers#hasLoadingError
	     * @type {function}
	     * @description return true if no accounts and accounts are loaded
	     * @param {object} state
	     * @param {Array.<any>} [state.accounts]
	     * @param {boolean} [state.isLoadingAccounts]
	     * @return {boolean}
	     */
	    hasLoadingError: hasLoadingError,
	
	    /**
	     * @name Helpers#getLoadingErrorKey
	     * @type {function}
	     * @description return error message key for input type
	     * @param {string} type - input type
	     * @return {string} error key
	     */
	    getLoadingErrorKey: function getLoadingErrorKey(type) {
	      return type + '.error.no-items';
	    },
	
	    /**
	     * @name Helpers#getLoadingErrorClass
	     * @type {function}
	     * @description return error class if hasLoadingError is true
	     * @param {object} state
	     * @return {{'has-error':boolean}} object with error class indicator
	     */
	    getLoadingErrorClass: function getLoadingErrorClass(state) {
	      return { 'was-validated is-invalid': hasLoadingError(state) };
	    },
	
	    /**
	     * @name Helpers#formInputHasError
	     * @type {function}
	     * @description Check if the input is invalid
	     * @param {string} inputName - The name of the form input
	     * @param {object} state
	     * @param {object} form - Form that is being submitted
	     * @return {boolean}
	     */
	    formInputHasError: function formInputHasError(inputName, state, form) {
	      errorHelperUtilities.formInputHasError(inputName, form, payeeLoaded(state));
	    },
	
	    /**
	     * @name Helpers#hasError
	     * @type {function}
	     * @description Check if the field has form or backend error
	     * @param {string} inputName - field name
	     * @param {object} state - current view state
	     * @param {object} form - angular form
	     * @return {boolean}
	     */
	    hasError: function hasError(inputName, state, form) {
	      return errorHelperUtilities.hasError(inputName, state.errorMap, form, $filter, payeeLoaded(state));
	    },
	
	    /**
	     * @name Helpers#hasErrorClass
	     * @type {function}
	     * @description return class to indicate if field has error
	     * @param {string} inputName - field name
	     * @param {object} state - current view state
	     * @param {object} form - angular form
	     * @return {object}
	     */
	    hasErrorClass: function hasErrorClass(inputName, state, form) {
	      return errorHelperUtilities.hasErrorClass(inputName, state.errorMap, form, $filter, payeeLoaded(state));
	    },
	
	    /**
	     * @name Helpers#getError
	     * @type {function}
	     * @description get form or backend error
	     * @param {string} inputName - field name
	     * @param {object} state - current view state
	     * @param {object} form - angular form
	     * @return {string}
	     */
	    getError: function getError(inputName, state, form) {
	      return errorHelperUtilities.getError(inputName, state.errorMap, form, $filter, payeeLoaded(state));
	    },
	
	    /**
	     * @name Helpers#clearBackendError
	     * @type {function}
	     * @description clear backend field and page error
	     * @param {object} $ctrl - Control state
	     * @param {string} inputName - field name
	     * @param {object} state - current view state
	     * @param {object} state.errorMap
	     */
	    clearBackendError: function clearBackendError($ctrl, inputName, _ref14) {
	      var errorMap = _ref14.errorMap;
	
	      updatePaymentState($ctrl);
	      var clearBackendError = managePaymentViewModel.clearBackendError;
	
	      errorHelperUtilities.clearBackendError(inputName, errorMap, clearBackendError);
	    },
	
	    /**
	     * @name Helpers#clearBackendErrorAccountField
	     * @type {function}
	     * @description Clear backend field and page error.
	     *   Special case for the account field as the change event fires on when it loads
	     * @param {object} $ctrl - Control state
	     * @param {string} inputName - field name
	     * @param {object} state - current view state
	     * @param {object} state.errorMap
	     */
	    clearBackendErrorAccountField: function clearBackendErrorAccountField($ctrl, inputName, _ref15) {
	      var errorMap = _ref15.errorMap;
	
	      // Make sure there has actually been a change
	      var thisState = stateContainer.getState();
	      if (!thisState.payment.paymentAccount) {
	        return;
	      }
	      var newVal = $ctrl.payee.newPayment.paymentAccount.accountNumber;
	      var valToCompareTo = thisState.payment.paymentAccount.accountNumber;
	      if (newVal === valToCompareTo) {
	        return;
	      }
	
	      updatePaymentState($ctrl);
	      var clearBackendError = managePaymentViewModel.clearBackendError;
	
	      errorHelperUtilities.clearBackendError(inputName, errorMap, clearBackendError);
	    },
	
	    /**
	     * @name Helpers#clearBackendErrorAmountField
	     * @type {function}
	     * @description Clear backend field and page error.
	     *   Special case for the amount field as the change event fires on when it loads
	     * @param {object} $ctrl - Control state
	     * @param {string} inputName - field name
	     * @param {object} state - current view state
	     * @param {object} state.errorMap
	     */
	    clearBackendErrorAmountField: function clearBackendErrorAmountField($ctrl, inputName, _ref16) {
	      var errorMap = _ref16.errorMap;
	
	      // Ensure the account has loaded
	      if (!$ctrl.payee.newPayment.paymentAccount) {
	        return;
	      }
	
	      // Make sure there has actually been a change
	      var thisState = stateContainer.getState();
	      var newVal = parseFloat($ctrl.payee.newPayment.paymentAmount.value);
	      var valToCompareTo = thisState.payment.paymentAmount;
	      if (newVal === valToCompareTo) {
	        return;
	      }
	
	      updatePaymentState($ctrl);
	      var clearBackendError = managePaymentViewModel.clearBackendError;
	
	      errorHelperUtilities.clearBackendError(inputName, errorMap, clearBackendError);
	    },
	
	    /**
	     * @name Helpers#generalErrorMessages
	     * @type {object}
	     * @description keys for general error messages for payments, not related to specific fields
	     */
	    generalErrorMessages: ['billpay_page_error', 'billpay_payment_already_exists', 'billpay_payment_missing_information', 'billpay_payment_invalid_ebill', 'billpay_payment_daily_limit_exceeded'],
	
	    /**
	     * @name Helpers#unrecoverableErrorMessages
	     * @type {object}
	     * @description keys for unrecoverable error messages for payments, not related to specific
	     *   fields
	     */
	    unrecoverableErrorMessages: ['billpay_payment_risk_failed', 'billpay_payment_change_failed', 'billpay_payment_fraud_failed', 'billpay_payment_payee'],
	
	    /**
	     * @name Helpers#unrecoverablePageErrorExists
	     * @type {function}
	     * @description return true if there is a page error and it has unrecoverable
	     *   set to true
	     * @param {object} state
	     * @param {object} [state.errorMap]
	     * @return {boolean}
	     */
	    unrecoverablePageErrorExists: function unrecoverablePageErrorExists(_ref17) {
	      var _ref17$errorMap = _ref17.errorMap,
	          errorMap = _ref17$errorMap === undefined ? {} : _ref17$errorMap;
	      return !!(errorMap.billpay_page_error && errorMap.billpay_page_error.unrecoverable);
	    },
	
	    /**
	     * @name Helpers#unrecoverableErrorsExist
	     * @type {function}
	     * @description return true if there are unrecoverable errors in the error map
	     * @param {object} state
	     * @param {object} [state.errorMap]
	     * @return {boolean}
	     */
	    unrecoverableErrorsExist: unrecoverableErrorsExist,
	
	    /**
	     * @name Helpers#errorsExist
	     * @type {function}
	     * @description return true if there are any errors in the error map
	     * @param {object} state
	     * @param {object} [state.errorMap]
	     * @return {boolean}
	     */
	    errorsExist: function errorsExist(_ref18) {
	      var _ref18$errorMap = _ref18.errorMap,
	          errorMap = _ref18$errorMap === undefined ? {} : _ref18$errorMap;
	      return !!Object.keys(errorMap).length;
	    },
	
	    /**
	     * @name Helpers#showRushNoticeForPayee
	     * @type {function}
	     * @description Decide whether to show the rush notices for this payee (regardless of whether it
	     *   is in use or not). Decide whether or not to show waived fees based on the widget preference
	     * @param {module:model-bb-billpay-ng.PayeeSummary} payee
	     * @param {object} payee.paymentServicesObj
	     * @return {boolean}
	     */
	    showRushNoticeForPayee: function showRushNoticeForPayee(_ref19) {
	      var paymentServicesObj = _ref19.paymentServicesObj;
	      return showWaivedFees || !expeditedService.hasFeeBeenWaived(paymentServicesObj);
	    },
	
	    /**
	     * @name Helpers#showRushNoticeForPayment
	     * @type {function}
	     * @description Decide to show the rush notice on the payment based on whether it has been used.
	     *   If it has (and has a fee of 0) then decide based on whether the widget preferences are set
	     *   to show it
	     * @param {object} payee
	     * @param {object} payee.newPayment
	     * @param {date} payee.newPayment.paymentDate
	     * @param {object} payee.paymentServicesObj
	     * @return {boolean}
	     */
	    showRushNoticeForPayment: function showRushNoticeForPayment(_ref20) {
	      var newPayment = _ref20.newPayment,
	          paymentServicesObj = _ref20.paymentServicesObj;
	
	      var rushChosen = dateService.isDateRush(newPayment.paymentDate, paymentServicesObj);
	      var rushFeeWaived = expeditedService.hasFeeBeenWaived(paymentServicesObj);
	      return showWaivedFees ? rushChosen : rushChosen && !rushFeeWaived;
	    },
	
	    /**
	     * @name Helpers#currencyInputLabels
	     * @type {object}
	     * @description Internationalised strings for the currency input control
	     */
	    currencyInputLabels: {
	      'label.currency': $filter('i18n')('currency.aria-label.input.currency'),
	      'label.amount': $filter('i18n')('currency.aria-label.input.amount'),
	      'label.decimals': $filter('i18n')('currency.aria-label.input.decimals')
	    }
	  };
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-billpay-edit-payment-ng.js.map