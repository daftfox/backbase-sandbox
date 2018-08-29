(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-currency-input-ng"), require("ui-bb-dropdown-select-ng"), require("ui-bb-i18n-ng"), require("ui-bb-format-amount-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-substitute-error-ng"), require("vendor-bb-uib-datepicker"), require("vendor-bb-uib-datepicker-popup"), require("ui-bb-notification-stripe-ng"), require("ui-bb-modal-ng"), require("vendor-bb-uib-dropdown"), require("vendor-bb-uib-popover"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-billpay-pay-a-bill-ng", ["vendor-bb-angular-ng-aria", "ui-bb-currency-input-ng", "ui-bb-dropdown-select-ng", "ui-bb-i18n-ng", "ui-bb-format-amount-ng", "ui-bb-loading-overlay-ng", "ui-bb-substitute-error-ng", "vendor-bb-uib-datepicker", "vendor-bb-uib-datepicker-popup", "ui-bb-notification-stripe-ng", "ui-bb-modal-ng", "vendor-bb-uib-dropdown", "vendor-bb-uib-popover"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-billpay-pay-a-bill-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-currency-input-ng"), require("ui-bb-dropdown-select-ng"), require("ui-bb-i18n-ng"), require("ui-bb-format-amount-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-substitute-error-ng"), require("vendor-bb-uib-datepicker"), require("vendor-bb-uib-datepicker-popup"), require("ui-bb-notification-stripe-ng"), require("ui-bb-modal-ng"), require("vendor-bb-uib-dropdown"), require("vendor-bb-uib-popover"));
	else
		root["ext-bb-billpay-pay-a-bill-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-currency-input-ng"], root["ui-bb-dropdown-select-ng"], root["ui-bb-i18n-ng"], root["ui-bb-format-amount-ng"], root["ui-bb-loading-overlay-ng"], root["ui-bb-substitute-error-ng"], root["vendor-bb-uib-datepicker"], root["vendor-bb-uib-datepicker-popup"], root["ui-bb-notification-stripe-ng"], root["ui-bb-modal-ng"], root["vendor-bb-uib-dropdown"], root["vendor-bb-uib-popover"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_28__) {
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

	module.exports = __webpack_require__(24);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */,
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
/* 11 */,
/* 12 */,
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
/* 21 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _hooks = __webpack_require__(25);
	
	Object.defineProperty(exports, 'hooks', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_hooks).default;
	  }
	});
	
	var _helpers = __webpack_require__(26);
	
	Object.defineProperty(exports, 'helpers', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_helpers).default;
	  }
	});
	
	var _vendorBbAngularNgAria = __webpack_require__(4);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _vendorBbUibDatepicker = __webpack_require__(14);
	
	var _vendorBbUibDatepicker2 = _interopRequireDefault(_vendorBbUibDatepicker);
	
	var _vendorBbUibDatepickerPopup = __webpack_require__(15);
	
	var _vendorBbUibDatepickerPopup2 = _interopRequireDefault(_vendorBbUibDatepickerPopup);
	
	var _vendorBbUibDropdown = __webpack_require__(27);
	
	var _vendorBbUibDropdown2 = _interopRequireDefault(_vendorBbUibDropdown);
	
	var _vendorBbUibPopover = __webpack_require__(28);
	
	var _vendorBbUibPopover2 = _interopRequireDefault(_vendorBbUibPopover);
	
	var _uiBbCurrencyInputNg = __webpack_require__(6);
	
	var _uiBbCurrencyInputNg2 = _interopRequireDefault(_uiBbCurrencyInputNg);
	
	var _uiBbDropdownSelectNg = __webpack_require__(7);
	
	var _uiBbDropdownSelectNg2 = _interopRequireDefault(_uiBbDropdownSelectNg);
	
	var _uiBbFormatAmountNg = __webpack_require__(9);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(10);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBbModalNg = __webpack_require__(22);
	
	var _uiBbModalNg2 = _interopRequireDefault(_uiBbModalNg);
	
	var _uiBbNotificationStripeNg = __webpack_require__(21);
	
	var _uiBbNotificationStripeNg2 = _interopRequireDefault(_uiBbNotificationStripeNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(13);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _vendorBbUibDatepicker2.default, _vendorBbUibDatepickerPopup2.default, _vendorBbUibDropdown2.default, _vendorBbUibPopover2.default, _uiBbCurrencyInputNg2.default, _uiBbDropdownSelectNg2.default, _uiBbFormatAmountNg2.default, _uiBbI18nNg2.default, _uiBbLoadingOverlayNg2.default, _uiBbModalNg2.default, _uiBbNotificationStripeNg2.default, _uiBbSubstituteErrorNg2.default]; /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @module ext-bb-billpay-pay-a-bill-ng
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @description
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Default extension for widget-bb-billpay-manage-payment-ng
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @requires vendor-bb-angular-ng-aria
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */
	
	var events = exports.events = {};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  setState: function setState(current) {
	    return Object.assign({}, current, {
	      template: '#ext-bb-billpay-pay-a-bill-ng/quickpay.ng.html',
	      paymentModalTemplate: '#ext-bb-billpay-pay-a-bill-ng/review-payment.ng.html',
	      showPaymentSummaryModal: false,
	      paymentsByAccount: {}
	    });
	  },
	
	
	  /**
	   * @name Hooks#transformPayee
	   * @type {function}
	   * @description Perform any transformations required to prepare the PayeeSummary item for display
	   * @param {module:model-bb-billpay-ng.PayeeSummary} current
	   * @return {Object} transformed payee
	   */
	  transformPayee: function transformPayee(payee) {
	    return Object.assign({}, payee, {
	      displayName: payee.nickName || payee.name,
	      datepicker: {
	        isOpen: false
	      },
	      memoPopover: {
	        isOpen: false,
	        paymentMemo: ''
	      }
	    });
	  },
	
	
	  /**
	   * @name Hooks#afterPostPaymentsRecordSuccess
	   * @type {function}
	   * @description Set the paymentModalTemplate for success results
	   * @param {Object} current state
	   * @return {Object} updated state
	   */
	  afterPostPaymentsRecordSuccess: function afterPostPaymentsRecordSuccess(current) {
	    return Object.assign({}, current, {
	      paymentModalTemplate: '#ext-bb-billpay-pay-a-bill-ng/successful-payment.ng.html'
	    });
	  },
	
	
	  /**
	   * @name Hooks#afterPostPaymentsRecordError
	   * @type {function}
	   * @description Set the paymentModalTemplate for failure results
	   * @param {Object} current state
	   * @return {Object} updated state
	   */
	  afterPostPaymentsRecordError: function afterPostPaymentsRecordError(current) {
	    return Object.assign({}, current, {
	      paymentModalTemplate: '#ext-bb-billpay-pay-a-bill-ng/failed-payment.ng.html'
	    });
	  }
	};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	// return true if newPayment.paymentDate is a rush payment
	var isRushing = function isRushing(_ref, dateService) {
	  var newPayment = _ref.newPayment,
	      paymentServicesObj = _ref.paymentServicesObj;
	  return dateService.isDateRush(newPayment.paymentDate, paymentServicesObj);
	};
	
	// Update the view model state
	var updateState = function updateState(stateContainer, viewState) {
	  return stateContainer.createAction(function (current) {
	    return Object.assign({}, current, viewState);
	  })(viewState);
	};
	
	var STATES = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
	
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
	var hasLoadingError = function hasLoadingError(_ref2) {
	  var accounts = _ref2.accounts,
	      isLoadingAccounts = _ref2.isLoadingAccounts;
	  return isLoadingAccounts != null && !isLoadingAccounts && (!accounts || !accounts.length);
	};
	
	/**
	 * @name hasUserErrors
	 * @type {function}
	 * @description return true if any payments have errors
	 * @param {object} error
	 * @param {object} [paymentsSummary]
	 * @inner
	 * @return {boolean}
	 */
	var hasUserErrors = function hasUserErrors(error, paymentsSummary) {
	  return error.message === 'billpay.model.error.user' || paymentsSummary && paymentsSummary.payments.some(function (payment) {
	    return payment.errors && payment.errors.length;
	  });
	};
	
	/**
	 * @name getPaymentsSummaryErrors
	 * @type {function}
	 * @description returns an array of errors for the payee
	 * @param {module:model-bb-billpay-ng.PayeeSummary} summary of the payments
	 * @param {string} payeeId payee id to find a list of errors for
	 * @inner
	 * @returns {array} of matching payment errors from the summary
	 */
	var getPaymentsSummaryErrors = function getPaymentsSummaryErrors() {
	  var summary = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var payeeId = arguments[1];
	
	  if (summary.payments) {
	    var matchingPayment = summary.payments.find(function (payment) {
	      return payment.payeeID === payeeId;
	    });
	    return matchingPayment ? matchingPayment.errors : [];
	  }
	  return [];
	};
	
	exports.default = function (_ref3) {
	  var managePaymentService = _ref3.managePaymentService,
	      dateService = _ref3.dateService,
	      accountService = _ref3.accountService,
	      paymentService = _ref3.paymentService,
	      expeditedService = _ref3.expeditedService,
	      stateContainer = _ref3.stateContainer,
	      $filter = _ref3.$filter,
	      bbIntent = _ref3.bbIntent,
	      errorHelperUtilities = _ref3.errorHelperUtilities;
	  var showWaivedFees = expeditedService.showWaivedFees;
	
	  var createPayeeIntent = bbIntent.create('intent.rb.billpay.payee.create');
	  var _editPayeeIntent = bbIntent.create('intent.rb.billpay.payee.edit');
	  var createRecurringBillIntent = bbIntent.create('intent.rb.billpay.recurring-bill.create');
	  var refreshPendingPaymentsIntent = bbIntent.create('intent.rb.billpay.pending-payments.refresh');
	
	  var togglePaymentSummaryModal = function togglePaymentSummaryModal(viewState) {
	    updateState(stateContainer, Object.assign({}, viewState, {
	      error: undefined,
	      postPaymentsError: false,
	      showPaymentSummaryModal: !viewState.showPaymentSummaryModal,
	      paymentModalTemplate: '#ext-bb-billpay-pay-a-bill-ng/review-payment.ng.html'
	    }));
	  };
	
	  /**
	   * @name payments
	   * @inner
	   * @type {function}
	   * @description get all payments
	   * @returns {Array<module:model-bb-billpay-ng.Payment>}
	   */
	  var payments = function payments() {
	    var paymentsSummary = stateContainer.getState().paymentsSummary;
	    return paymentsSummary ? paymentsSummary.payments : [];
	  };
	
	  /**
	   * @name failedPayments
	   * @inner
	   * @type {function}
	   * @description get failed payments
	   * @returns {Array<module:model-bb-billpay-ng.Payment>}
	   */
	  var failedPayments = function failedPayments() {
	    return payments().filter(function (payment) {
	      return !!payment.errors && payment.errors.length > 0;
	    });
	  };
	
	  /**
	   * @name successfulPayments
	   * @inner
	   * @type {function}
	   * @description get successful payments
	   * @returns {Array<module:model-bb-billpay-ng.Payment>}
	   */
	  var successfulPayments = function successfulPayments() {
	    return payments().filter(function (payment) {
	      return !payment.errors || payment.errors.length === 0;
	    });
	  };
	
	  /**
	   * @name calculatePaymentTotal
	   * @inner
	   * @type {function}
	   * @description calculate the total of payments including any rush charges
	   * @param {module:model-bb-billpay-ng.PayeeSummary[]} [payees=[]] to calculate over
	   * @return {number}
	   */
	  var calculatePaymentTotal = function calculatePaymentTotal() {
	    var payees = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    return payees.reduce(function (total, payee) {
	      var thisAmount = Math.max(parseFloat(payee.newPayment.paymentAmount.value) || 0, 0);
	
	      var rushAmount = isRushing(payee, dateService) && thisAmount ? expeditedService.getExpeditedFee(payee.paymentServicesObj) : 0;
	
	      return total + rushAmount + thisAmount;
	    }, 0);
	  };
	
	  /**
	   * @name arePaymentDatesAndAccountsValid
	   * @inner
	   * @type {function}
	   * @description checks if all payment dates and accounts are valid
	   * @param {module:model-bb-billpay-ng.PayeeSummary[]} [payees=[]] to check over
	   * @returns {boolean} all dates and accounts are valid
	   */
	  var arePaymentDatesAndAccountsValid = function arePaymentDatesAndAccountsValid() {
	    var payees = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    return payees.every(function (payee) {
	      var date = payee.newPayment.paymentDate;
	
	      return dateService.isValidDate(date) && dateService.isDateSelectable(payee.paymentServicesObj, date) && payee.newPayment.paymentAccount;
	    });
	  };
	
	  /**
	   * @name getPayeesWithAmounts
	   * @inner
	   * @type {function}
	   * @description returns all the payees with an amount set
	   * @param {module:model-bb-billpay-ng.PayeeSummary[]} [payees=[]] to check over
	   * @returns {module:model-bb-billpay-ng.PayeeSummary[]}
	   */
	  var getPayeesWithAmounts = function getPayeesWithAmounts() {
	    var payees = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    return payees.filter(function (payee) {
	      var paymentAmount = parseFloat(payee.newPayment.paymentAmount.value);
	      return paymentAmount > 0;
	    });
	  };
	
	  /**
	   * @name areAnyPayeesInvalidForPayment
	   * @inner
	   * @type {function}
	   * @description returns true if payess are present that have amount but invalid date
	   * @param {module:model-bb-billpay-ng.PayeeSummary[]} [payees=[]] to check over
	   * @returns {boolean} if payment for payees with amount is not allowed
	   */
	  var areAnyPayeesInvalidForPayment = function areAnyPayeesInvalidForPayment() {
	    var payees = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	    var payeesWithAmounts = getPayeesWithAmounts(payees);
	
	    return payeesWithAmounts.length > 0 ? !arePaymentDatesAndAccountsValid(payeesWithAmounts) : true;
	  };
	
	  return {
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
	     * @name Helpers#getCurrencyCode
	     * @type {function}
	     * @description get the currency code from service
	     * @return {string}
	     */
	    getCurrencyCode: function getCurrencyCode() {
	      return managePaymentService.getCurrencyCode();
	    },
	
	
	    /**
	     * @name Helpers#highlightPayee
	     * @type {function}
	     * @description return an object with the given html class as true/false depending on the value
	     *  of the newpayment amount and new payee state
	     * @param {module:model-bb-billpay-ng.PayeeSummary} payee
	     * @param {object} paymentsSummary
	     * @param {string} htmlClassActive The class to apply to the element when active
	     * @param {string} htmlClassNew The class to apply to the element when payee is new
	     * @param {string} htmlClassDanger The class to apply to the element when payee is new
	     * @return {object}
	     */
	    highlightPayee: function highlightPayee(payee, paymentsSummary, htmlClassActive, htmlClassNew, htmlClassDanger) {
	      var _ref4;
	
	      var newPayment = payee.newPayment;
	
	      var paymentValueExists = parseFloat(newPayment.paymentAmount.value) > 0;
	      var paymentErrors = getPaymentsSummaryErrors(paymentsSummary, payee.id);
	      var paymentHasError = !!(paymentErrors && paymentErrors.length);
	      Object.assign(payee, { isNewPayee: !paymentValueExists && payee.isNewPayee });
	      return _ref4 = {}, _defineProperty(_ref4, htmlClassActive, paymentValueExists), _defineProperty(_ref4, htmlClassNew, payee.isNewPayee), _defineProperty(_ref4, htmlClassDanger, paymentHasError), _ref4;
	    },
	
	    /* eslint-disable no-param-reassign */
	    /**
	     * @name Helpers#openMemo
	     * @type {function}
	     * @description open the popover memo for this payee, set the value from the payees newPayment
	     *  memo
	     * @param {module:model-bb-billpay-ng.PayeeSummary} payee
	     * @param {object} payee.newPayment
	     * @param {object} payee.memoPopover
	     */
	    openMemo: function openMemo(_ref5) {
	      var newPayment = _ref5.newPayment,
	          memoPopover = _ref5.memoPopover;
	
	      memoPopover.paymentMemo = newPayment.paymentMemo;
	      memoPopover.isOpen = !memoPopover.isOpen;
	    },
	
	
	    /**
	     * @name Helpers#setMemo
	     * @type {function}
	     * @description set the value of the poopover memo into the payees newPayment memo and close
	     *  the popover memo
	     * @param {module:model-bb-billpay-ng.PayeeSummary} payee
	     * @param {object} payee.newPayment
	     * @param {object} payee.memoPopover
	     */
	    setMemo: function setMemo(_ref6) {
	      var newPayment = _ref6.newPayment,
	          memoPopover = _ref6.memoPopover;
	
	      newPayment.paymentMemo = memoPopover.paymentMemo;
	      memoPopover.isOpen = false;
	    },
	
	
	    /**
	     * @name Helpers#unsetMemo
	     * @type {function}
	     * @description set the value of the popover memo and the payees newPayment memo to an empty
	     *  string and close the popover memo
	     * @param {module:model-bb-billpay-ng.PayeeSummary} payee
	     * @param {object} payee.newPayment
	     * @param {object} payee.memoPopover
	     */
	    unsetMemo: function unsetMemo(_ref7) {
	      var newPayment = _ref7.newPayment,
	          memoPopover = _ref7.memoPopover;
	
	      newPayment.paymentMemo = memoPopover.paymentMemo = '';
	      memoPopover.isOpen = false;
	    },
	
	    /* eslint-enable */
	
	    /**
	      * @name Helpers#rushHasBeenChosen
	      * @type {function}
	      * @description return true if rush has been selected for this payee
	      * @param {module:model-bb-billpay-ng.PayeeSummary} payee
	      * @param {object} payee.newPayment
	      * @param {object} payee.paymentServicesObj
	      * @return {boolean}
	      */
	    rushHasBeenChosen: function rushHasBeenChosen(_ref8) {
	      var newPayment = _ref8.newPayment,
	          paymentServicesObj = _ref8.paymentServicesObj;
	      return dateService.isDateRush(newPayment.paymentDate, paymentServicesObj);
	    },
	
	    /**
	     * @name Helpers#rushFee
	     * @type {function}
	     * @description return paymentFee from payment object
	     * @param {module:model-bb-billpay-ng.PayeeSummary} payee
	     * @param {object} payee.paymentServicesObj
	     * @return {number|undefined}
	     */
	    rushFee: function rushFee(_ref9) {
	      var paymentServicesObj = _ref9.paymentServicesObj;
	      return expeditedService.getExpeditedFee(paymentServicesObj);
	    },
	
	    /**
	     * @typedef {{ datepicker: { $viewValue, $modelValue }}} DatepickerForm
	     */
	
	    /**
	     * @name Helpers#togglePaymentSummaryModal
	     * @type {function}
	     * @description Open/close the payment summary modal. And remove any errors
	     * @param {object} viewState The current view state of the controller
	     */
	    togglePaymentSummaryModal: togglePaymentSummaryModal,
	
	    /**
	     * @name Helpers#openPaymentSummaryModal
	     * @type {function}
	     * @description Open the payment summary modal if no invalid payments.
	     * @param {object} viewState The current view state of the controller
	     */
	    openPaymentSummaryModal: function openPaymentSummaryModal(viewState) {
	      // may have passed cutoffTime since page refresh - just do nothing
	      // and redraw will catch any date validity changes.
	      if (!areAnyPayeesInvalidForPayment(viewState.payees)) {
	        togglePaymentSummaryModal(viewState);
	      }
	    },
	
	    /**
	     * @name Helpers#completePaymentSummaryModal
	     * @type {function}
	     * @description Complete the payment step.
	     *   Call the view pending payment intent and toggle the payment summary model
	     * @param {object} viewState The current view state of the controller
	     */
	    completePaymentSummaryModal: function completePaymentSummaryModal(viewState) {
	      managePaymentService.getPayeesSummary().catch(function () {
	        // error handling is dealt with in the service
	      });
	      refreshPendingPaymentsIntent();
	      togglePaymentSummaryModal(viewState);
	    },
	
	    /**
	     * @name Helpers#summarisePayments
	     * @type {function}
	     * @description Summarise all valid payments into an array and grouped by payment account
	     * @param {object} viewState The current view state of the controller
	     */
	    summarisePayments: function summarisePayments(viewState) {
	      updateState(stateContainer, Object.assign({}, viewState, {
	        paymentsSummary: paymentService.summarisePayments(viewState.payees)
	      }));
	    },
	
	    /**
	     * @name Helpers#sendPayments
	     * @type {function}
	     * @description Post the summarised list of valid payments
	     * @param {object} viewState The current view state of the controller
	     */
	    sendPayments: function sendPayments(viewState) {
	      managePaymentService.postPaymentsRecord(viewState.paymentsSummary.payments).catch(function () {
	        // error handling is dealt with in the service
	      });
	    },
	
	    /**
	     * @name Helpers#i18nSingularPlural
	     * @type {function}
	     * @description Take an array and i18n key. Append '.singular' or '.plural' to the key
	     *  based on the length of the array and filter that with i18n.
	     * @param {array} arr The array to check the length of
	     * @param {string} str The key to append to
	     * @return {string} The singular or plural message from messages.json
	     */
	    i18nSingularPlural: function i18nSingularPlural() {
	      var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	      var str = arguments[1];
	      return $filter('i18n')(arr.length === 1 ? str + '.singular' : str + '.plural');
	    },
	
	    /**
	     * @name Helpers#refreshPendingPaymentsIntent
	     * @type {function}
	     * @description Publish reload pending payments intent
	     */
	    refreshPendingPaymentsIntent: refreshPendingPaymentsIntent,
	
	    /**
	     * @name Helpers#createPayeeIntent
	     * @type {function}
	     * @description Publish create payee intent
	     */
	    createPayeeIntent: createPayeeIntent,
	
	    /**
	     * @name Helpers#createRecurringBillIntent
	     * @type {function}
	     * @description Publish create recurring bill intent
	     */
	    createRecurringBillIntent: createRecurringBillIntent,
	
	    /**
	     * @name Helpers#editPayeeIntent
	     * @type {function}
	     * @param {object} payee The payee to edit
	     * @param {string} payee.id Payee id
	     * @param {boolean} payee.electronic if payee is electronic, else manual
	     * @description Publish edit payee intent
	     */
	    editPayeeIntent: function editPayeeIntent(_ref10) {
	      var id = _ref10.id,
	          electronic = _ref10.electronic;
	      return _editPayeeIntent({ id: id, electronic: electronic });
	    },
	
	    /**
	     * @name Helpers#successfulPayments
	     * @type {function}
	     * @description get successful payments
	     * @returns {Array<module:model-bb-billpay-ng.Payment>}
	     */
	    successfulPayments: successfulPayments,
	
	    /**
	     * @name Helpers#failedPayments
	     * @type {function}
	     * @description get failed payments
	     * @returns {Array<module:model-bb-billpay-ng.Payment>}
	     */
	    failedPayments: failedPayments,
	
	    /**
	     * @name Helpers#calculatePaymentTotal
	     * @type {function}
	     * @description calculate the total of payments including any rush charges
	     * @param {module:model-bb-billpay-ng.PayeeSummary[]} [payees=[]] to calculate over
	     * @return {number}
	     */
	    calculatePaymentTotal: calculatePaymentTotal,
	
	    /**
	     * @name Helpers#hasFailedPayments
	     * @type {function}
	     * @description indicate if there are any failed payments
	     * @returns {boolean}
	     */
	    hasFailedPayments: function hasFailedPayments() {
	      return failedPayments().length > 0;
	    },
	
	    /**
	     * @name Helpers#hasSuccessfulPayments
	     * @type {function}
	     * @description indicate if there are any successful payments
	     * @returns {boolean}
	     */
	    hasSuccessfulPayments: function hasSuccessfulPayments() {
	      return successfulPayments().length > 0;
	    },
	
	    /**
	     * @name Helpers#getLoadingErrorMessageKey
	     * @type {function}
	     * @description get any error message if no user errors present
	     * @param {object} state
	     * @param {object} [state.error]
	     * @param {object} [state.paymentsSummary]
	     * @return {string} message from error
	     */
	    getLoadingErrorMessageKey: function getLoadingErrorMessageKey(_ref11) {
	      var error = _ref11.error,
	          paymentsSummary = _ref11.paymentsSummary;
	      return error && !hasUserErrors(error, paymentsSummary) ? error.message : '';
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
	      return { 'has-error': hasLoadingError(state) };
	    },
	
	    /**
	     * @name Helpers#areAnyPayeesInvalidForPayment
	     * @type {function}
	     * @description returns true if payess are present that have amount but invalid date
	     * @param {module:model-bb-billpay-ng.PayeeSummary[]} [payees=[]] to check over
	     * @returns {boolean} if payment for payees with amount is not allowed
	     */
	    areAnyPayeesInvalidForPayment: areAnyPayeesInvalidForPayment,
	
	    /**
	     * @name Helpers#getPaymentsSummaryErrors
	     * @type {function}
	     * @description returns an array of errors for the payee
	     * @param {module:model-bb-billpay-ng.PayeeSummary} summary of the payments
	     * @param {string} payeeId payee id to find a list of errors for
	     * @returns {array} of matching payment errors from the summary
	     */
	    getPaymentsSummaryErrors: getPaymentsSummaryErrors,
	
	    /**
	     * @name Helpers#hasAvailableBalance
	     * @type {function}
	     * @description indicate if the account exists and has a payment balance
	     * @param {object} [paymentAccount]
	     * @returns {boolean}
	     */
	    hasAvailableBalance: function hasAvailableBalance(paymentAccount) {
	      return !!paymentAccount && paymentAccount.balance != null;
	    },
	
	    /**
	     * @name Helpers#hasUnavailableBalance
	     * @type {function}
	     * @description indicate if the account exists but has a an unavailable balance
	     * @param {object} [paymentAccount]
	     * @returns {boolean}
	     */
	    hasUnavailableBalance: function hasUnavailableBalance(paymentAccount) {
	      return !!paymentAccount && paymentAccount.balance == null;
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
	    showRushNoticeForPayee: function showRushNoticeForPayee(_ref12) {
	      var paymentServicesObj = _ref12.paymentServicesObj;
	      return showWaivedFees || !expeditedService.hasFeeBeenWaived(paymentServicesObj);
	    },
	
	    /**
	     * @name Helpers#showRushNoticeForPayment
	     * @type {function}
	     * @description Decide to show the rush notice on the payment based on whether it has been used.
	     *   If it has (and has a fee of 0) then decide based on whether the widget preferences are set
	     *   to show it
	     * @param {object} payment
	     * @param {object} payment.rush
	     * @param {boolean} payment.rush.hasBeenUsed
	     * @param {number} payment.rush.paymentFee
	     * @return {boolean}
	     */
	    showRushNoticeForPayment: function showRushNoticeForPayment(_ref13) {
	      var rush = _ref13.rush;
	      return showWaivedFees ? rush.hasBeenUsed : rush.hasBeenUsed && rush.paymentFee > 0;
	    },
	
	    /**
	     * @name Helpers#showRushNoticeForAccountGroup
	     * @type {function}
	     * @description Decide to show the rush notice for the account group based on whether rush was
	     *   used for any of the payments in the group. If it was, and the fee is 0, use the widget
	     *   preference to decide whether to show it
	     * @param {object} accountGroup
	     * @param {boolean} accountGroup.rushUsed Has rush been used by any payments in this account
	     *   group
	     * @param {number} accountGroup.rushFeeTotal The total of the rush fees used
	     * @return {boolean}
	     */
	    showRushNoticeForAccountGroup: function showRushNoticeForAccountGroup(_ref14) {
	      var rushUsed = _ref14.rushUsed,
	          rushFeeTotal = _ref14.rushFeeTotal;
	      return showWaivedFees ? rushUsed : rushUsed && rushFeeTotal > 0;
	    },
	
	    /**
	     * @name Helpers#notificationCssClass
	     * @type {function}
	     * @description Returns the Bootstrap background class to apply to the notification
	     * @param {string} notificationStatus Either error or success
	     * @return {string}
	     */
	    notificationCssClass: function notificationCssClass(notificationStatus) {
	      return notificationStatus === 'error' ? 'bg-danger' : 'bg-success';
	    },
	
	    /**
	     * @name Helpers#notificationIconClasses
	     * @type {function}
	     * @description Returns the Font Awesome classes to apply to the notification icon
	     * @param {string} notificationStatus Either error or success
	     * @return {string}
	     */
	    notificationIconClasses: function notificationIconClasses(notificationStatus) {
	      return notificationStatus === 'error' ? 'fa fa-exclamation-triangle' : 'fa fa-check-circle';
	    },
	
	    /**
	     * @name Helpers#failedPaymentMessageKey
	     * @type {function}
	     * @description Returns the appropriate message key for the error types
	     * @return {string} - message key
	     */
	    failedPaymentMessageKey: function failedPaymentMessageKey() {
	      var paymentErrors = failedPayments().reduce(function (errors, payment) {
	        return [].concat(_toConsumableArray(errors), _toConsumableArray(payment.errors));
	      }, []);
	      var errorType = paymentErrors.length > 0 && paymentErrors.every(function (error) {
	        return !error.unrecoverable;
	      }) ? 'recoverable' : 'unrecoverable';
	      return 'failed-payments.message.' + errorType;
	    },
	
	    /**
	     * @name Helpers#payeeSelectedCountMessage
	     * @type {function}
	     * @description return object with strings to indicate number of payees selected
	     * @returns {object} object with count and message key
	     */
	    payeeSelectedCountMessage: function payeeSelectedCountMessage(payees) {
	      var count = getPayeesWithAmounts(payees).length;
	      var key = 'message.payees-selected.' + (count === 1 ? 'singular' : 'plural');
	      return {
	        count: count,
	        key: key
	      };
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
	    },
	
	    /**
	     * @name Helpers#states
	     * @type {string[]}
	     * @description List of all states
	     */
	    states: STATES,
	
	    /**
	     * @name Helpers#matchingPayment
	     * @type {function}
	     * @description find the payment in the summary that matches the payee
	     * @param {object} payee
	     * @param {object} summary
	     * @return {object} payment
	     */
	    matchingPayment: function matchingPayment(payee, summary) {
	      return summary.payments.find(function (payment) {
	        return payment.payeeID === payee.id;
	      });
	    },
	
	    /**
	     * @name Helpers#isOvernightPayment
	     * @type {function}
	     * @description return true if the rush is of type OVERNIGHT_CHECK
	     * @param {object} obj
	     * @param {object} obj.paymentServicesObj
	     * @return {boolean}
	     */
	    isOvernightPayment: function isOvernightPayment(_ref15) {
	      var paymentServicesObj = _ref15.paymentServicesObj;
	      return !!paymentServicesObj.OVERNIGHT_CHECK;
	    },
	
	    /**
	     * @name Helpers#hasError
	     * @type {function}
	     * @description Check if the field has form error
	     * @param {string} inputName - field name
	     * @param {object} form - angular form
	     * @return {boolean}
	     */
	    hasError: function hasError(inputName, form) {
	      return errorHelperUtilities.hasError(inputName, null, form, $filter);
	    },
	
	    /**
	     * @name Helpers#hasErrorClass
	     * @type {function}
	     * @description return class to indicate if field has error
	     * @param {string} inputName - field name
	     * @param {object} form - angular form
	     * @return {object}
	     */
	    hasErrorClass: function hasErrorClass(inputName, form) {
	      return errorHelperUtilities.hasErrorClass(inputName, null, form, $filter);
	    },
	
	    /**
	     * @name Helpers#getError
	     * @type {function}
	     * @description get form error
	     * @param {string} inputName - field name
	     * @param {object} form - angular form
	     * @return {string}
	     */
	    getError: function getError(inputName, form) {
	      return errorHelperUtilities.getError(inputName, null, form, $filter);
	    }
	  };
	};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-billpay-pay-a-bill-ng.js.map