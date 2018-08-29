(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-confirm-ng"), require("ui-bb-currency-input-ng"), require("ui-bb-dropdown-select-ng"), require("ui-bb-i18n-ng"), require("ui-bb-format-amount-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-number-input-ng"), require("ui-bb-stepper-ng"), require("ui-bb-substitute-error-ng"), require("vendor-bb-uib-datepicker"), require("vendor-bb-uib-datepicker-popup"), require("ui-bb-loading-indicator-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-billpay-pay-recurring-bill-ng", ["vendor-bb-angular-ng-aria", "ui-bb-confirm-ng", "ui-bb-currency-input-ng", "ui-bb-dropdown-select-ng", "ui-bb-i18n-ng", "ui-bb-format-amount-ng", "ui-bb-loading-overlay-ng", "ui-bb-number-input-ng", "ui-bb-stepper-ng", "ui-bb-substitute-error-ng", "vendor-bb-uib-datepicker", "vendor-bb-uib-datepicker-popup", "ui-bb-loading-indicator-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-billpay-pay-recurring-bill-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-confirm-ng"), require("ui-bb-currency-input-ng"), require("ui-bb-dropdown-select-ng"), require("ui-bb-i18n-ng"), require("ui-bb-format-amount-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-number-input-ng"), require("ui-bb-stepper-ng"), require("ui-bb-substitute-error-ng"), require("vendor-bb-uib-datepicker"), require("vendor-bb-uib-datepicker-popup"), require("ui-bb-loading-indicator-ng"));
	else
		root["ext-bb-billpay-pay-recurring-bill-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-confirm-ng"], root["ui-bb-currency-input-ng"], root["ui-bb-dropdown-select-ng"], root["ui-bb-i18n-ng"], root["ui-bb-format-amount-ng"], root["ui-bb-loading-overlay-ng"], root["ui-bb-number-input-ng"], root["ui-bb-stepper-ng"], root["ui-bb-substitute-error-ng"], root["vendor-bb-uib-datepicker"], root["vendor-bb-uib-datepicker-popup"], root["ui-bb-loading-indicator-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_32__) {
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

	module.exports = __webpack_require__(29);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
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

/***/ }),
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _hooks = __webpack_require__(30);
	
	Object.defineProperty(exports, 'hooks', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_hooks).default;
	  }
	});
	
	var _helpers = __webpack_require__(31);
	
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
	
	var _uiBbFormatAmountNg = __webpack_require__(9);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(32);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
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
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbConfirmNg2.default, _uiBbCurrencyInputNg2.default, _uiBbDropdownSelectNg2.default, _uiBbFormatAmountNg2.default, _uiBbI18nNg2.default, _uiBbLoadingIndicatorNg2.default, _uiBbLoadingOverlayNg2.default, _uiBbNumberInputNg2.default, _uiBbStepperNg2.default, _uiBbSubstituteErrorNg2.default, _vendorBbUibDatepicker2.default, _vendorBbUibDatepickerPopup2.default]; /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                              * @module ext-bb-billpay-pay-recurring-bill-ng
	                                                                                                                                                                                                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                              * @description
	                                                                                                                                                                                                                                                                                                                                                                                                                                                              * Extension for widget-bb-billpay-manage-payment-ng
	                                                                                                                                                                                                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                              * @requires vendor-bb-angular-ng-aria
	                                                                                                                                                                                                                                                                                                                                                                                                                                                              */
	var events = exports.events = {};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Hooks
	 * @type {Object}
	 * @description extension hooks
	 */
	exports.default = {
	  setState: function setState(current) {
	    return Object.assign({}, current, {
	      mainTemplate: '#ext-bb-billpay-pay-recurring-bill-ng/main.ng.html',
	      currentStep: 0,
	      isModalOpen: false,
	      postingRecurringPaymentsComplete: false
	    });
	  },
	
	
	  /**
	   * @name Hooks#transformPayee
	   * @type {function}
	   * @description Perform any transformations required to prepare the PayeeSummary item for display
	   * @param {module:model-bb-billpay-ng.PayeeSummary} payee
	   * @return {Object} transformed payee
	   */
	  transformPayee: function transformPayee(payee) {
	    return Object.assign({}, payee, {
	      displayName: payee.nickName || payee.name
	    });
	  }
	};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Helpers;
	// Check if is datepicker past date
	var isDatepickerPastDate = function isDatepickerPastDate(date, dateService) {
	  return dateService.isDateInPast(date);
	};
	// check if datepicker date is in the next year
	var isDatepickerAfterAYear = function isDatepickerAfterAYear(date, dateService) {
	  return !dateService.isDateBefore(date, dateService.getDateTodayPlusAYear());
	};
	
	/**
	 * @name datepickerError
	 * @type {function}
	 * @description Return error i18n strings (or empty for no error) based on the datepicker input
	 * @param {object} dateService
	 * @param {object} datePickerForm - ng form for the datepicker
	 * @param {date} minPaymentDate
	 * @param {boolean} limitMaxDate
	 * @return {string}
	 * @inner
	 */
	var _datepickerError = function _datepickerError(dateService, _ref, minPaymentDate, limitMaxDate) {
	  var _ref$datepicker = _ref.datepicker,
	      $viewValue = _ref$datepicker.$viewValue,
	      $modelValue = _ref$datepicker.$modelValue;
	
	  if ($viewValue === null) {
	    return '';
	  }
	  if ($viewValue.length === 0) {
	    return 'datepicker.error.empty';
	  } else if (!dateService.isDatepickerValidFormat($viewValue) || !dateService.isValidDate($modelValue)) {
	    return 'datepicker.error.format';
	  } else if (isDatepickerPastDate($modelValue, dateService)) {
	    return 'datepicker.error.date-in-past';
	  } else if (dateService.isDateBefore($modelValue, minPaymentDate)) {
	    return 'datepicker.error.early-date';
	  } else if (dateService.isWeekend($modelValue)) {
	    return 'datepicker.error.wrong-date';
	  } else if (limitMaxDate && isDatepickerAfterAYear($modelValue, dateService)) {
	    return 'datepicker.error.year-range';
	  }
	  return '';
	};
	
	/**
	 * @constructor Helpers
	 */
	function Helpers(_ref2) {
	  var stateContainer = _ref2.stateContainer,
	      managePaymentService = _ref2.managePaymentService,
	      dateService = _ref2.dateService,
	      $filter = _ref2.$filter,
	      bbIntent = _ref2.bbIntent,
	      errorHelperUtilities = _ref2.errorHelperUtilities,
	      managePaymentViewModel = _ref2.managePaymentViewModel;
	
	  var viewBillpaySummaryIntent = bbIntent.create('intent.rb.billpay.summary.view');
	
	  /**
	   * @name updateState
	   * @type {function}
	   * @description update view state
	   * @param {object} viewState - new state
	   * @inner
	   */
	  var updateState = function updateState(viewState) {
	    return (
	      // On one line, eslint enforced trailing comma breaks Chrome & Bitbucket syntax highlighting
	      stateContainer.createAction(function (current) {
	        return Object.assign({}, current, viewState);
	      })(viewState)
	    );
	  };
	
	  /**
	   * @name isStepZeroComplete
	   * @type {function}
	   * @description Returns true of all fields for step 1 have been completed
	   * @param {object} newPayment
	   * @return {boolean}
	   * @inner
	   */
	  var isStepZeroComplete = function isStepZeroComplete(_ref3) {
	    var payee = _ref3.payee,
	        account = _ref3.account,
	        paymentAmount = _ref3.paymentAmount,
	        paymentDate = _ref3.paymentDate,
	        minPaymentDate = _ref3.minPaymentDate,
	        frequency = _ref3.frequency,
	        frequencyEnd = _ref3.frequencyEnd,
	        numberOfInstances = _ref3.numberOfInstances,
	        finalPaymentDate = _ref3.finalPaymentDate;
	
	    var paymentDateIsValid = dateService.isValidDate(paymentDate) && !dateService.isDateBefore(paymentDate, minPaymentDate) && !dateService.isWeekend(paymentDate);
	    var mainFieldsFilled = !!payee && !!account && !!frequency && paymentAmount.value > 0 && paymentDateIsValid;
	
	    var untilChange = frequencyEnd === 'manual';
	    var untilNumber = frequencyEnd === 'number' && !!numberOfInstances;
	    var untilDate = frequencyEnd === 'date' && dateService.isValidDate(finalPaymentDate) && !dateService.isWeekend(finalPaymentDate) && !dateService.isDateBefore(finalPaymentDate, paymentDate);
	
	    return mainFieldsFilled && (untilChange || untilNumber || untilDate);
	  };
	
	  /**
	   * @name resetFormToStepZero
	   * @type {function}
	   * @description Return the form to initial state
	   * @param {object} stepperCtrl The control state of the stepper directive
	   * @param {object} recurringPaymentCtrl The control state of the recurring payment
	   * @param {object} viewState
	   * @return {boolean}
	   * @inner
	   */
	  var resetFormToStepZero = function resetFormToStepZero(stepperCtrl, recurringPaymentCtrl, viewState) {
	    // Navigate to step 0 & reset the form
	
	    updateState(Object.assign({}, viewState, {
	      isModalOpen: false,
	      postingRecurringPaymentsComplete: false
	    }));
	
	    // Temporarily allow the stepper to be allowed to go backwards
	    Object.assign(stepperCtrl, { allowBack: true });
	    stepperCtrl.goToStep(0);
	
	    recurringPaymentCtrl.resetNewPayment(viewState.accounts[0]);
	  };
	
	  /**
	   * @name transformPaymentObject
	   * @type {function}
	   * @description Transform the new payment object from the page into one formatted for a POST
	   *   request
	   * @param {object} newPayment - newPayment from the template
	   * @return {module:data-bb-bill-pay-http-ng.BillPayData.RecurringPayment}
	   * @inner
	   */
	  var transformPaymentObject = function transformPaymentObject(newPayment) {
	    var frequency = newPayment.frequency,
	        numberOfInstances = newPayment.numberOfInstances,
	        alert = newPayment.alert,
	        payee = newPayment.payee,
	        paymentAmount = newPayment.paymentAmount,
	        paymentDate = newPayment.paymentDate,
	        frequencyEnd = newPayment.frequencyEnd,
	        _newPayment$account = newPayment.account,
	        accountNumber = _newPayment$account.accountNumber,
	        accountType = _newPayment$account.accountType,
	        routingNumber = _newPayment$account.routingNumber;
	
	
	    return {
	      payment: Object.assign({}, frequencyEnd === 'number' && { numberOfInstances: numberOfInstances }, frequencyEnd === 'date' && {
	        numberOfInstances: dateService.calculateNumberOfInstances(newPayment)
	      }, alert, {
	        frequency: frequency.toUpperCase(),
	        payeeID: payee.id,
	        paymentAmount: parseFloat(paymentAmount.value),
	        paymentDate: dateService.convertDateToServerDayString(paymentDate),
	        paymentAccount: { accountNumber: accountNumber, accountType: accountType, routingNumber: routingNumber }
	      })
	    };
	  };
	
	  /**
	   * @name unrecoverableErrorsExist
	   * @inner
	   * @type {function}
	   * @description return true if there are unrecoverable errors in the error map
	   * @return {boolean}
	   */
	  var unrecoverableErrorsExist = function unrecoverableErrorsExist() {
	    var _stateContainer$getSt = stateContainer.getState(),
	        _stateContainer$getSt2 = _stateContainer$getSt.errorMap,
	        errorMap = _stateContainer$getSt2 === undefined ? {} : _stateContainer$getSt2;
	
	    return Object.keys(errorMap).some(function (key) {
	      return errorMap[key].unrecoverable;
	    });
	  };
	
	  /**
	   * @name openCancelConfirmationModal
	   * @description Change the view state to show the cancel modal
	   * @param {Object} viewState
	   * @inner
	   */
	  var openCancelConfirmationModal = function openCancelConfirmationModal(viewState) {
	    updateState(Object.assign({}, viewState, {
	      isModalOpen: true
	    }));
	  };
	
	  /**
	   * @name confirmCancel
	   * @description Clear and reset the form to step 1 if the user is not on it, otherwise call the
	   *   view billpay summary intent to navigate away from the widget
	   * @param {Object} viewState
	   * @param {Object} recurringPaymentCtrl - Control state of the recurring payment
	   * @param {Object} stepperCtrl - Control state of the stepper component
	   * @inner
	   */
	  var confirmCancel = function confirmCancel(viewState, recurringPaymentCtrl, stepperCtrl) {
	    var returnUserToBillpaySummary = stepperCtrl.getCurrentIndex() === 0 || unrecoverableErrorsExist();
	
	    if (returnUserToBillpaySummary) {
	      recurringPaymentCtrl.clearPayeeFromStorage();
	      viewBillpaySummaryIntent();
	    } else {
	      resetFormToStepZero(stepperCtrl, recurringPaymentCtrl, viewState);
	    }
	  };
	
	  /**
	   * @name hasLoadingError
	   * @type {function}
	   * @description return true if passed in function returns no items
	   * @param {function} getItems
	   * @inner
	   * @return {boolean}
	   */
	  var hasLoadingError = function hasLoadingError(getItems) {
	    var items = getItems();
	    return !items || !items.length;
	  };
	
	  /**
	   * @name resetFinalPaymentDate
	   * @inner
	   * @type {function}
	   * @description Reset the final payment date to initial state
	   * @param {object} newPayment
	   */
	  var resetFinalPaymentDate = function resetFinalPaymentDate(newPayment) {
	    Object.assign(newPayment, {
	      finalPaymentDate: null
	    });
	  };
	
	  /**
	   * @name clearBackendError
	   * @inner
	   * @type {function}
	   * @description clear backend field and page error
	   * @param {string} inputName - field name
	   */
	  var clearBackendError = function clearBackendError(inputName) {
	    var clearFn = managePaymentViewModel.clearBackendError;
	
	    var _stateContainer$getSt3 = stateContainer.getState(),
	        errorMap = _stateContainer$getSt3.errorMap;
	
	    errorHelperUtilities.clearBackendError(inputName, errorMap, clearFn);
	  };
	
	  /**
	   * @name Helpers
	   * @type {Object}
	   */
	  return {
	    /**
	     * @name Helpers#paymentFrequencyOptions
	     * @type {array}
	     * @description Different options for payment frequencies
	     */
	    paymentFrequencyOptions: ['weekly', 'bi-weekly', 'semi-monthly', 'monthly', 'quarterly', 'semi-annually', 'annually'],
	
	    /**
	     * @name Helpers#i18nPaymentFrequencyOption
	     * @type {function}
	     * @description Return the i18n string for the given frequency option
	     * @param {string} option - The option selected for the frequency
	     * @return {string} i18n string
	     */
	    i18nPaymentFrequencyOption: function i18nPaymentFrequencyOption(option) {
	      return $filter('i18n')('payment.regularity.options.' + option);
	    },
	
	    /**
	     * @name Helpers#i18nSingularPlural
	     * @type {function}
	     * @description Take a number and i18n key. Append '.singular' or '.plural' to the key
	     *  based on the number and filter that with i18n.
	     * @param {number} number The number to check the value of
	     * @param {string} str The key to append to
	     * @return {string} The singular or plural message from messages.json
	     */
	    i18nSingularPlural: function i18nSingularPlural(number, str) {
	      return $filter('i18n')(number === 1 ? str + '.singular' : str + '.plural');
	    },
	
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
	     * @name Helpers#showFinalPaymentDate
	     * @type {function}
	     * @description return whether to show the final payment date from the date service
	     * @param {object} newPayment
	     * @return {boolean}
	     */
	    showFinalPaymentDate: dateService.showFinalRecurringPaymentDate,
	
	    /**
	     * @name Helpers#showFinalPaymentDateAndNumInstances
	     * @type {function}
	     * @description return whether to show the final payment date and no. of instances from the
	     *   date service
	     * @param {object} newPayment
	     * @return {boolean}
	     */
	    showFinalPaymentDateAndNumInstances: dateService.showFinalRecurringPaymentDateAndNumInstances,
	
	    /**
	     * @name Helpers#getFinalPaymentDateForNumberedInstances
	     * @type {function}
	     * @description get the date of the final recurring payment from date service given that the
	     *   numberOfInstances has been given by the user
	     * @param {object} newPayment
	     * @return {date}
	     */
	    getFinalPaymentDateForNumberedInstances: function getFinalPaymentDateForNumberedInstances(_ref4) {
	      var paymentDate = _ref4.paymentDate,
	          frequency = _ref4.frequency,
	          numberOfInstances = _ref4.numberOfInstances;
	      return dateService.getFinalRecurringPaymentDate(paymentDate, frequency, numberOfInstances);
	    },
	
	    /**
	     * @name Helpers#getFinalPaymentDateGivenEndDate
	     * @type {function}
	     * @description get the date of the final recurring payment from date service given that the
	     *   the finalPaymentDate has been given
	     * @param {object} newPayment
	     * @return {date}
	     */
	    getFinalPaymentDateGivenEndDate: function getFinalPaymentDateGivenEndDate(newPayment) {
	      var paymentDate = newPayment.paymentDate,
	          frequency = newPayment.frequency;
	
	      var numberOfInstances = dateService.calculateNumberOfInstances(newPayment);
	      return dateService.getFinalRecurringPaymentDate(paymentDate, frequency, numberOfInstances);
	    },
	
	    /**
	     * @name Helpers#initialPageIsLoading
	     * @type {function}
	     * @description Return true if the initial GET requests are running. Want to ensure that the
	     *   template only renders once complete. The loading indicator flashes its child properties
	     *   before hiding them
	     * @return {boolean}
	     */
	    initialPageIsLoading: function initialPageIsLoading() {
	      var _stateContainer$getSt4 = stateContainer.getState(),
	          isLoadingPayees = _stateContainer$getSt4.isLoadingPayees,
	          isLoadingAccounts = _stateContainer$getSt4.isLoadingAccounts;
	
	      return isLoadingPayees || isLoadingAccounts;
	    },
	
	    /**
	     * @name Helpers#hasLoadingError
	     * @type {function}
	     * @description return true if passed in function returns no items
	     * @param {function} getItems
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
	     * @param {function} getItems
	     * @return {{'was-validated is-invalid':boolean}} object with error class indicator
	     */
	    getLoadingErrorClass: function getLoadingErrorClass(getItems) {
	      return { 'was-validated is-invalid': hasLoadingError(getItems) };
	    },
	
	    /**
	     * @name Helpers#datepickerHasError
	     * @type {function}
	     * @description Check if the datepicker has errors
	     * @param {DatepickerForm} form
	     * @param {date} minPaymentDate
	     * @param {boolean} limitMaxDate
	     * @return {boolean} the datepicker has errors
	     */
	    datepickerHasError: function datepickerHasError(form, minPaymentDate, limitMaxDate) {
	      return !!_datepickerError(dateService, form, minPaymentDate, limitMaxDate);
	    },
	
	    /**
	     * @name Helpers#datepickerError
	     * @type {function}
	     * @description Returns error string key if there is an error present
	     * @param {DatepickerForm} form
	     * @param {date} minPaymentDate
	     * @param {boolean} limitMaxDate
	     * @return {string} error key or empty string
	     */
	    datepickerError: function datepickerError(form, minPaymentDate, limitMaxDate) {
	      return _datepickerError(dateService, form, minPaymentDate, limitMaxDate);
	    },
	
	    /**
	     * @name Helpers#finalDateDatePickerError
	     * @type {function}
	     * @description Function check for datepicker errors, and to possibly override the i18n keys
	     *   from the default datepicker errors
	     * @param {DatepickerForm} form
	     * @param {date} minPaymentDate
	     * @param {boolean} limitMaxDate
	     * @return {string}
	     */
	    finalDateDatepickerError: function finalDateDatepickerError(form, minPaymentDate, limitMaxDate) {
	      var error = _datepickerError(dateService, form, minPaymentDate, limitMaxDate);
	      var overwriteErrorMappings = {
	        'datepicker.error.early-date': 'datepicker.error.early-final-payment-date'
	      };
	
	      return overwriteErrorMappings[error] || error;
	    },
	
	    /**
	     * @name Helpers#datepickerErrorClass
	     * @type {function}
	     * @description get datepicker error class
	     * @param {DatepickerForm} form
	     * @param {date} minPaymentDate
	     * @param {boolean} limitMaxDate
	     * @return {{'was-validated is-invalid':boolean}} object with error class indicator
	     */
	    datepickerErrorClass: function datepickerErrorClass(form, minPaymentDate, limitMaxDate) {
	      return {
	        'was-validated is-invalid': !!_datepickerError(dateService, form, minPaymentDate, limitMaxDate)
	      };
	    },
	    /**
	     * @name Helpers#cancelHandler
	     * @type {function}
	     * @description Handle the cancel operations: initial click and confirmation.
	     *   The confirmation function needs access to the control state of the stepper in order to
	     *   reset it, so that is stored inside this function and updated when onCancel is called from
	     *   the stepper component.
	     * @returns {CancelHandler}
	     */
	    cancelHandler: function () {
	      var sharedStepperCtrl = {};
	
	      return {
	        /**
	         * @name CancelHandler#onCancel
	         * @type {function}
	         * @description Open the cancel confirmation modal and copy the stepper control state into
	         *   the shared stepper control var
	         * @param {object} viewState - Current view state
	         * @param {object} stepperCtrl - Stepper control state
	         */
	        onCancel: function onCancel(viewState, stepperCtrl) {
	          openCancelConfirmationModal(viewState);
	          Object.assign(sharedStepperCtrl, stepperCtrl);
	        },
	
	        /**
	         * @name CancelHandler#onConfirmCancel
	         * @type {function}
	         * @description Call the function for handling the cancel confirmation with the passed
	         *   parameters and the shared stepper control var
	         * @param {object} viewState - Current view state
	         * @param {object} recurringPaymentCtrl - Recurring payment control state
	         */
	        onConfirmCancel: function onConfirmCancel(viewState, recurringPaymentCtrl) {
	          return confirmCancel(viewState, recurringPaymentCtrl, sharedStepperCtrl);
	        }
	      };
	    }(),
	
	    /**
	     * @name Helpers#allowNextStep
	     * @type {function}
	     * @description Decide whether or not to allow the user to click to the next step, check that
	     *   the 1st step is complete and that there are no unrecoverable errors
	     * @param {object} newPayment
	     * @return {boolean}
	     */
	    allowNextStep: function allowNextStep(newPayment) {
	      return isStepZeroComplete(newPayment) && !unrecoverableErrorsExist();
	    },
	
	    /**
	     * @name Helpers#allowPreviousStep
	     * @type {function}
	     * @description Decide whether or not to allow the user to click to the previous step, check
	     *   that there are no unrecoverable errors
	     * @return {boolean}
	     */
	    allowPreviousStep: function allowPreviousStep() {
	      return !unrecoverableErrorsExist();
	    },
	
	    /**
	     * @name Helpers#onFinish
	     * @type {function}
	     * @description Function fired by the stepper when the user completes the steps
	     * @param {object} $ctrl
	     * @param {object} $ctrl.newPayment
	     * @param {function} $ctrl.clearPayeeFromStorage
	     */
	    onFinish: function onFinish(_ref5) {
	      var newPayment = _ref5.newPayment,
	          clearPayeeFromStorage = _ref5.clearPayeeFromStorage;
	
	      var recurringPayment = transformPaymentObject(newPayment);
	      managePaymentService.postRecurringPaymentsRecord(recurringPayment).then(function () {
	        clearPayeeFromStorage();
	        viewBillpaySummaryIntent({
	          notification: {
	            status: 'success',
	            message: 'Payment created'
	          }
	        });
	      }).catch(function () {
	        // error handling is dealt with in the service
	      });
	    },
	
	    /**
	     * @name Helpers#onBeforeStepChange
	     * @type {function}
	     * @description Fired by the stepper before a step change occurs. Keeping track of the value of
	     *   the paymentAmount. When the currency input field is rendered it triggers the change event,
	     *   so we want to know if it has actually changed
	     * @param {object} $ctrl
	     * @param {object} $ctrl.newPayment
	     * @param {object} $ctrl.newPayment.paymentAmount
	     * @param {string} $ctrl.newPayment.paymentAmount.value
	     */
	    onBeforeStepChange: function onBeforeStepChange(_ref6) {
	      var _ref6$newPayment = _ref6.newPayment,
	          payee = _ref6$newPayment.payee,
	          account = _ref6$newPayment.account,
	          value = _ref6$newPayment.paymentAmount.value;
	
	      stateContainer.setState(Object.assign({}, stateContainer.getState(), {
	        tmpPaymentAmount: value,
	        tmpPayee: payee,
	        tmpAccount: account
	      }));
	      // Always allow the step change to happen
	      return true;
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
	     * @name Helpers#alertOptions
	     * @type {array}
	     * @description Internationalised strings and model keys for alert options
	     */
	    alertOptions: [{
	      modelKey: 'paymentScheduledAlert',
	      i18nKey: 'alerts.option.payment-pending'
	    }, {
	      modelKey: 'paymentSentAlert',
	      i18nKey: 'alerts.option.payment-sent'
	    }, {
	      modelKey: 'modelExpirationAlert',
	      i18nKey: 'alerts.option.last-payment-pending'
	    }],
	
	    /**
	     * @name Helpers#cancelModalLabels
	     * @type {object}
	     * @description Internationalised strings for the cancel modal
	     */
	    cancelModalLabels: {
	      heading: $filter('i18n')('cancel-modal.heading'),
	      bodyText: $filter('i18n')('cancel-modal.bodyText'),
	      confirm: $filter('i18n')('cancel-modal.confirm'),
	      cancel: $filter('i18n')('cancel-modal.cancel')
	    },
	
	    /**
	     * @name Helpers#datepickerOptions
	     * @type {function}
	     * @description Set the datepicker options from the controller, and add any extra ones
	     * @param {object} defaultOptions
	     * @param {object} extraOptions
	     * @return {object}
	     */
	    datepickerOptions: function datepickerOptions(defaultOptions) {
	      var extraOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      return Object.assign(defaultOptions, extraOptions);
	    },
	
	    /**
	     * @name Helpers#disableEndDateInput
	     * @type {function}
	     * @description Disable the end date form field if the paymentDate isn't set or the way to
	     *   determine when to stop payments isn't by end date
	     * @param {object} newPayment
	     * @param {date} newPayment.paymentDate
	     * @param {string} newPayment.frequencyEnd
	     * @return {boolean}
	     */
	    disableEndDateInput: function disableEndDateInput(_ref7) {
	      var paymentDate = _ref7.paymentDate,
	          frequencyEnd = _ref7.frequencyEnd;
	      return !paymentDate || dateService.isBadFirstPaymentDate(paymentDate) || frequencyEnd !== 'date';
	    },
	
	    /**
	     * @name Helpers#disableNumInstancesInput
	     * @type {function}
	     * @description Disable the number of instances input if the way to determine when to stop
	     *   payments isn't by end number
	     * @param {object} newPayment
	     * @param {string} newPayment.frequencyEnd
	     * @return {boolean}
	     */
	    disableNumInstancesInput: function disableNumInstancesInput(_ref8) {
	      var frequencyEnd = _ref8.frequencyEnd;
	      return frequencyEnd !== 'number';
	    },
	
	    /**
	     * @name Helpers#calculateNumberOfInstances
	     * @type {function}
	     * @description return the number of instances (payments) that will be made
	     *   between two dates with a frequency set, until BUT NOT after the date
	     *   Calls the date service function of the same name.
	     * @param {object} newPayment
	     * @param {date} newPayment.paymentDate the first payment date
	     * @param {date} newPayment.finalPaymentDate the date which payments are made up to but not
	     *   after
	     * @param {string} newPayment.frequency the name of the frequency of payments to be made
	     * @return {number}
	     */
	    calculateNumberOfInstances: dateService.calculateNumberOfInstances,
	
	    /**
	     * @name Helpers#onPaymentDateChange
	     * @type {function}
	     * @description On change of payment date, clear any backend error and reset the final payment
	     *   date
	     * @param {object} newPayment
	     */
	    onPaymentDateChange: function onPaymentDateChange(newPayment) {
	      clearBackendError('billpay_payment_date');
	      resetFinalPaymentDate(newPayment);
	    },
	
	    /**
	     * @name Helpers#onPayeeChange
	     * @type {function}
	     * @description On change of payee, clear any backend error and recalculate the first payment
	     *   date
	     * @param {object} $ctrl - Control state
	     * @param {object} $ctrl.newPayment - newPayment object
	     * @param {function} $ctrl.updatePaymentDateForNewPayee
	     */
	    onPayeeChange: function onPayeeChange(_ref9) {
	      var newPayment = _ref9.newPayment,
	          updatePaymentDateForNewPayee = _ref9.updatePaymentDateForNewPayee;
	
	      var currentState = stateContainer.getState();
	      if (newPayment.payee !== currentState.tmpPayee) {
	        clearBackendError('billpay_payment_payee');
	        updatePaymentDateForNewPayee(newPayment);
	      }
	    },
	
	    /**
	     * @name Helpers#onAmountChange
	     * @type {function}
	     * @description Clear backend field and page error.
	     *   Special case for the amount field as the change event fires on when it loads
	     * @param {object} $ctrl - Control state
	     */
	    onAmountChange: function onAmountChange($ctrl) {
	      var currentState = stateContainer.getState();
	      if ($ctrl.newPayment.paymentAmount.value !== currentState.tmpPaymentAmount) {
	        clearBackendError('billpay_payment_amount');
	      }
	    },
	
	    /**
	     * @name Helpers#getLoadingErrorMessageKey
	     * @type {function}
	     * @description get any error message
	     * @return {string} message from error
	     */
	    getLoadingErrorMessageKey: function getLoadingErrorMessageKey() {
	      var _stateContainer$getSt5 = stateContainer.getState(),
	          error = _stateContainer$getSt5.error;
	
	      return error && !error.fromFormSubmission ? error.message : '';
	    },
	
	    /**
	     * @name Helpers#hasError
	     * @type {function}
	     * @description Check if the field has form or backend error
	     * @param {string} inputName - field name
	     * @param {object} [form] - angular form
	     * @return {boolean}
	     */
	    hasError: function hasError(inputName, form) {
	      var _stateContainer$getSt6 = stateContainer.getState(),
	          errorMap = _stateContainer$getSt6.errorMap;
	
	      return errorHelperUtilities.hasError(inputName, errorMap, form, $filter, false);
	    },
	
	    /**
	     * @name Helpers#hasErrorClass
	     * @type {function}
	     * @description return class to indicate if field has error
	     * @param {string} inputName - field name
	     * @param {object} [form] - angular form
	     * @return {object}
	     */
	    hasErrorClass: function hasErrorClass(inputName, form) {
	      var _stateContainer$getSt7 = stateContainer.getState(),
	          errorMap = _stateContainer$getSt7.errorMap;
	
	      return errorHelperUtilities.hasErrorClass(inputName, errorMap, form, $filter, false);
	    },
	
	    /**
	     * @name Helpers#getError
	     * @type {function}
	     * @description get form or backend error
	     * @param {string} inputName - field name
	     * @param {object} [form] - angular form
	     * @return {string}
	     */
	    getError: function getError(inputName, form) {
	      var _stateContainer$getSt8 = stateContainer.getState(),
	          errorMap = _stateContainer$getSt8.errorMap;
	
	      return errorHelperUtilities.getError(inputName, errorMap, form, $filter, false);
	    },
	
	    /**
	     * @name Helpers#onPaymentAccountChange
	     * @type {function}
	     * @description On change of payment account, clear any backend error
	     * @param {object} $ctrl - Control state
	     * @param {object} $ctrl.newPayment - newPayment object
	     */
	    onPaymentAccountChange: function onPaymentAccountChange(_ref10) {
	      var newPayment = _ref10.newPayment;
	
	      var currentState = stateContainer.getState();
	      if (newPayment.account !== currentState.tmpAccount) {
	        clearBackendError('billpay_payment_account');
	      }
	    },
	
	    /**
	     * @name Helpers#generalErrorMessages
	     * @type {object}
	     * @description keys for general error messages for payments, not related to specific fields
	     */
	    generalErrorMessages: ['billpay_page_error', 'billpay_payment_already_exists', 'billpay_payment_missing_information', 'billpay_payment_invalid_ebill', 'billpay_payment_daily_limit_exceeded', 'billpay_payment_final_date', 'billpay_payment_quantity'],
	
	    /**
	     * @name Helpers#unrecoverableErrorMessages
	     * @type {object}
	     * @description keys for unrecoverable error messages for payments, not related to specific
	     *   fields
	     */
	    unrecoverableErrorMessages: ['billpay_payment_risk_failed', 'billpay_payment_fraud_failed', 'billpay_payment_change_failed'],
	
	    /**
	     * @name Helpers#unrecoverablePageErrorExists
	     * @type {function}
	     * @description return true if there is a page error and it has unrecoverable
	     *   set to true
	     * @return {boolean}
	     */
	    unrecoverablePageErrorExists: function unrecoverablePageErrorExists() {
	      var _stateContainer$getSt9 = stateContainer.getState(),
	          _stateContainer$getSt10 = _stateContainer$getSt9.errorMap,
	          errorMap = _stateContainer$getSt10 === undefined ? {} : _stateContainer$getSt10;
	
	      return !!(errorMap.billpay_page_error && errorMap.billpay_page_error.unrecoverable);
	    },
	
	    /**
	     * @name Helpers#unrecoverableErrorsExist
	     * @type {function}
	     * @description return true if there are unrecoverable errors in the error map
	     * @return {boolean}
	     */
	    unrecoverableErrorsExist: unrecoverableErrorsExist,
	
	    /**
	     * @name Helpers#errorsExist
	     * @type {function}
	     * @description return true if there are any errors in the error map
	     * @return {boolean}
	     */
	    errorsExist: function errorsExist() {
	      var _stateContainer$getSt11 = stateContainer.getState(),
	          _stateContainer$getSt12 = _stateContainer$getSt11.errorMap,
	          errorMap = _stateContainer$getSt12 === undefined ? {} : _stateContainer$getSt12;
	
	      return !!Object.keys(errorMap).length;
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
	}
	
	/**
	 * Cancel Handler type definition
	 * @typedef {object} CancelHandler
	 * @property {function} onCancel - Trigger an action for the user to confirm their decision
	 * @property {function} onConfirmCancel - Process the confirmed cancel
	 */

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-billpay-pay-recurring-bill-ng.js.map