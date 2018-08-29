(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-account-selector-ng"), require("ui-bb-currency-input-ng"), require("ui-bb-char-counter-ng"), require("ui-bb-calendar-popup-ng"), require("ui-bb-expandable-ng"), require("vendor-bb-angular-ng-messages"), require("vendor-bb-uib-alert"), require("ui-bb-confirm-ng"), require("ui-bb-autocomplete-search-ng"), require("ui-bb-switcher-ng"), require("vendor-bb-angular"), require("vendor-bb-uib-popover"), require("vendor-bb-angular-sanitize"), require("ui-bb-substitute-error-ng"), require("ui-bb-parent-responsiveness-ng"), require("ui-bb-credit-suggest-ng"), require("ui-bb-button-spinner-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bus-format-amount-ng"), require("ui-bb-submit-dropup-ng"), require("ui-bus-beneficiary-select-modal-ng"), require("ui-bb-form-navigate-away-ng"), require("lib-bb-iban"), require("ui-bb-dropdown-select-ng"), require("ui-bb-bank-validations-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bus-initiate-payment-us-domestic-wire-ng", ["vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "ui-bb-loading-overlay-ng", "ui-bb-account-selector-ng", "ui-bb-currency-input-ng", "ui-bb-char-counter-ng", "ui-bb-calendar-popup-ng", "ui-bb-expandable-ng", "vendor-bb-angular-ng-messages", "vendor-bb-uib-alert", "ui-bb-confirm-ng", "ui-bb-autocomplete-search-ng", "ui-bb-switcher-ng", "vendor-bb-angular", "vendor-bb-uib-popover", "vendor-bb-angular-sanitize", "ui-bb-substitute-error-ng", "ui-bb-parent-responsiveness-ng", "ui-bb-credit-suggest-ng", "ui-bb-button-spinner-ng", "ui-bb-empty-state-ng", "ui-bb-notification-stripe-ng", "ui-bus-format-amount-ng", "ui-bb-submit-dropup-ng", "ui-bus-beneficiary-select-modal-ng", "ui-bb-form-navigate-away-ng", "lib-bb-iban", "ui-bb-dropdown-select-ng", "ui-bb-bank-validations-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bus-initiate-payment-us-domestic-wire-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-account-selector-ng"), require("ui-bb-currency-input-ng"), require("ui-bb-char-counter-ng"), require("ui-bb-calendar-popup-ng"), require("ui-bb-expandable-ng"), require("vendor-bb-angular-ng-messages"), require("vendor-bb-uib-alert"), require("ui-bb-confirm-ng"), require("ui-bb-autocomplete-search-ng"), require("ui-bb-switcher-ng"), require("vendor-bb-angular"), require("vendor-bb-uib-popover"), require("vendor-bb-angular-sanitize"), require("ui-bb-substitute-error-ng"), require("ui-bb-parent-responsiveness-ng"), require("ui-bb-credit-suggest-ng"), require("ui-bb-button-spinner-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bus-format-amount-ng"), require("ui-bb-submit-dropup-ng"), require("ui-bus-beneficiary-select-modal-ng"), require("ui-bb-form-navigate-away-ng"), require("lib-bb-iban"), require("ui-bb-dropdown-select-ng"), require("ui-bb-bank-validations-ng"));
	else
		root["ext-bus-initiate-payment-us-domestic-wire-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["ui-bb-loading-overlay-ng"], root["ui-bb-account-selector-ng"], root["ui-bb-currency-input-ng"], root["ui-bb-char-counter-ng"], root["ui-bb-calendar-popup-ng"], root["ui-bb-expandable-ng"], root["vendor-bb-angular-ng-messages"], root["vendor-bb-uib-alert"], root["ui-bb-confirm-ng"], root["ui-bb-autocomplete-search-ng"], root["ui-bb-switcher-ng"], root["vendor-bb-angular"], root["vendor-bb-uib-popover"], root["vendor-bb-angular-sanitize"], root["ui-bb-substitute-error-ng"], root["ui-bb-parent-responsiveness-ng"], root["ui-bb-credit-suggest-ng"], root["ui-bb-button-spinner-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-notification-stripe-ng"], root["ui-bus-format-amount-ng"], root["ui-bb-submit-dropup-ng"], root["ui-bus-beneficiary-select-modal-ng"], root["ui-bb-form-navigate-away-ng"], root["lib-bb-iban"], root["ui-bb-dropdown-select-ng"], root["ui-bb-bank-validations-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_80__, __WEBPACK_EXTERNAL_MODULE_81__, __WEBPACK_EXTERNAL_MODULE_82__, __WEBPACK_EXTERNAL_MODULE_83__, __WEBPACK_EXTERNAL_MODULE_93__, __WEBPACK_EXTERNAL_MODULE_96__, __WEBPACK_EXTERNAL_MODULE_97__) {
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

	module.exports = __webpack_require__(89);

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

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
/* 11 */,
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
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),
/* 38 */,
/* 39 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
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
/* 80 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_80__;

/***/ }),
/* 81 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_81__;

/***/ }),
/* 82 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_82__;

/***/ }),
/* 83 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_83__;

/***/ }),
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.hooks = exports.events = exports.helpers = exports.intents = undefined;
	
	var _intents = __webpack_require__(90);
	
	Object.defineProperty(exports, 'intents', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_intents).default;
	  }
	});
	
	var _helpers = __webpack_require__(92);
	
	Object.defineProperty(exports, 'helpers', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_helpers).default;
	  }
	});
	
	var _events = __webpack_require__(94);
	
	Object.defineProperty(exports, 'events', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_events).default;
	  }
	});
	
	var _hooks = __webpack_require__(95);
	
	Object.defineProperty(exports, 'hooks', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_hooks).default;
	  }
	});
	
	var _vendorBbAngularNgAria = __webpack_require__(2);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _vendorBbAngularSanitize = __webpack_require__(24);
	
	var _vendorBbAngularSanitize2 = _interopRequireDefault(_vendorBbAngularSanitize);
	
	var _uiBbI18nNg = __webpack_require__(3);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(25);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _vendorBbUibAlert = __webpack_require__(12);
	
	var _vendorBbUibAlert2 = _interopRequireDefault(_vendorBbUibAlert);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(4);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBbAccountSelectorNg = __webpack_require__(5);
	
	var _uiBbAccountSelectorNg2 = _interopRequireDefault(_uiBbAccountSelectorNg);
	
	var _uiBbCreditSuggestNg = __webpack_require__(27);
	
	var _uiBbCreditSuggestNg2 = _interopRequireDefault(_uiBbCreditSuggestNg);
	
	var _vendorBbAngularNgMessages = __webpack_require__(10);
	
	var _vendorBbAngularNgMessages2 = _interopRequireDefault(_vendorBbAngularNgMessages);
	
	var _uiBbCurrencyInputNg = __webpack_require__(6);
	
	var _uiBbCurrencyInputNg2 = _interopRequireDefault(_uiBbCurrencyInputNg);
	
	var _uiBbParentResponsivenessNg = __webpack_require__(26);
	
	var _uiBbParentResponsivenessNg2 = _interopRequireDefault(_uiBbParentResponsivenessNg);
	
	var _vendorBbUibPopover = __webpack_require__(23);
	
	var _vendorBbUibPopover2 = _interopRequireDefault(_vendorBbUibPopover);
	
	var _uiBusFormatAmountNg = __webpack_require__(80);
	
	var _uiBusFormatAmountNg2 = _interopRequireDefault(_uiBusFormatAmountNg);
	
	var _uiBbCharCounterNg = __webpack_require__(7);
	
	var _uiBbCharCounterNg2 = _interopRequireDefault(_uiBbCharCounterNg);
	
	var _uiBbExpandableNg = __webpack_require__(9);
	
	var _uiBbExpandableNg2 = _interopRequireDefault(_uiBbExpandableNg);
	
	var _uiBbCalendarPopupNg = __webpack_require__(8);
	
	var _uiBbCalendarPopupNg2 = _interopRequireDefault(_uiBbCalendarPopupNg);
	
	var _uiBbDropdownSelectNg = __webpack_require__(96);
	
	var _uiBbDropdownSelectNg2 = _interopRequireDefault(_uiBbDropdownSelectNg);
	
	var _uiBbConfirmNg = __webpack_require__(13);
	
	var _uiBbConfirmNg2 = _interopRequireDefault(_uiBbConfirmNg);
	
	var _uiBbSwitcherNg = __webpack_require__(16);
	
	var _uiBbSwitcherNg2 = _interopRequireDefault(_uiBbSwitcherNg);
	
	var _uiBbAutocompleteSearchNg = __webpack_require__(14);
	
	var _uiBbAutocompleteSearchNg2 = _interopRequireDefault(_uiBbAutocompleteSearchNg);
	
	var _uiBbBankValidationsNg = __webpack_require__(97);
	
	var _uiBbBankValidationsNg2 = _interopRequireDefault(_uiBbBankValidationsNg);
	
	var _uiBbSubmitDropupNg = __webpack_require__(81);
	
	var _uiBbSubmitDropupNg2 = _interopRequireDefault(_uiBbSubmitDropupNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(37);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBbNotificationStripeNg = __webpack_require__(39);
	
	var _uiBbNotificationStripeNg2 = _interopRequireDefault(_uiBbNotificationStripeNg);
	
	var _uiBusBeneficiarySelectModalNg = __webpack_require__(82);
	
	var _uiBusBeneficiarySelectModalNg2 = _interopRequireDefault(_uiBusBeneficiarySelectModalNg);
	
	var _uiBbButtonSpinnerNg = __webpack_require__(29);
	
	var _uiBbButtonSpinnerNg2 = _interopRequireDefault(_uiBbButtonSpinnerNg);
	
	var _uiBbFormNavigateAwayNg = __webpack_require__(83);
	
	var _uiBbFormNavigateAwayNg2 = _interopRequireDefault(_uiBbFormNavigateAwayNg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _vendorBbAngularSanitize2.default, _uiBbI18nNg2.default, _uiBbSubstituteErrorNg2.default, _vendorBbUibAlert2.default, _uiBbLoadingOverlayNg2.default, _uiBbAccountSelectorNg2.default, _uiBbCreditSuggestNg2.default, _vendorBbAngularNgMessages2.default, _uiBbCurrencyInputNg2.default, _uiBbParentResponsivenessNg2.default, _vendorBbUibPopover2.default, _uiBusFormatAmountNg2.default, _uiBbCharCounterNg2.default, _uiBbExpandableNg2.default, _uiBbCalendarPopupNg2.default, _uiBbDropdownSelectNg2.default, _uiBbConfirmNg2.default, _uiBbSwitcherNg2.default, _uiBbAutocompleteSearchNg2.default, _uiBbBankValidationsNg2.default, _uiBbSubmitDropupNg2.default, _uiBbEmptyStateNg2.default, _uiBbNotificationStripeNg2.default, _uiBusBeneficiarySelectModalNg2.default, _uiBbButtonSpinnerNg2.default, _uiBbFormNavigateAwayNg2.default];

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(91);
	
	var _helpers = __webpack_require__(92);
	
	/**
	 * @name Intents
	 * @type {Object}
	 */
	exports.default = function (_ref) {
	  var handleRequest = _ref.handleRequest,
	      createRequest = _ref.createRequest,
	      service = _ref.service;
	  return {
	    /**
	     * @name Intents#initiatePayment
	     * @description Handles the intent to initiate a payment
	     * @type {function}
	     * @param {Object} initialPaymentData Initial payment
	     */
	    initiatePayment: handleRequest(_constants.Intent.INITIATE_PAYMENT, function (initialPaymentData) {
	      service.setDraftPayment((0, _helpers.fromModelToForm)(initialPaymentData));
	    }),
	
	    /**
	     * @name Intents#viewPaymentOrders
	     * @description The intent to view payment orders.
	     * @type {function}
	     */
	    viewPaymentOrders: createRequest(_constants.Intent.VIEW_PAYMENT_ORDERS)
	  };
	};

/***/ }),
/* 91 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Constants
	 * @type {object}
	 */
	
	/**
	 * @description
	 * Widget name
	 *
	 * @name Constants#WidgetName
	 * @type {string}
	 */
	var WidgetName = exports.WidgetName = 'widget-bb-initiate-us-payment-ng';
	
	/**
	 * @description
	 * Payment type identifier
	 *
	 * @name Constants#PaymentType
	 * @type {string}
	 */
	var PaymentType = exports.PaymentType = 'US_DOMESTIC_WIRE';
	
	/**
	 * @description
	 * Widget recurrence ending enum
	 *
	 * @name Constants#RecurrenceEnding
	 * @type {object}
	 */
	var RecurrenceEnding = exports.RecurrenceEnding = {
	  NEVER: 'NEVER',
	  ON: 'ON',
	  AFTER: 'AFTER'
	};
	
	/**
	 * @description
	 * Widget transfer frequencies enum
	 *
	 * @name Constants#TransferFrequency
	 * @type {object}
	 */
	var TransferFrequency = exports.TransferFrequency = {
	  ONCE: 'ONCE',
	  DAILY: 'DAILY',
	  WEEKLY: 'WEEKLY',
	  MONTHLY: 'MONTHLY',
	  QUARTERLY: 'QUARTERLY',
	  YEARLY: 'YEARLY'
	};
	
	/**
	 * @description
	 * Array of recurring frequency objects with the following properties (all mandatory)
	 *
	 * @property {string} name Translation key of the label
	 * that will be displayed to the end user
	 * @property {string} value Denotes frequency type of transfer.
	 * Possible values: DAILY/WEEKLY/MONTHLY/YEARLY
	 * @property {number} every Indicates skip interval of transfer.
	 * 1 would mean execute every time, 2 - every other time
	 *
	 * @example
	 * {
	 *   name: 'form.schedule.frequency.weekly',
	 *   value: 'WEEKLY',
	 *   every: 1,
	 * },
	 * {
	 *   name: 'form.schedule.frequency.bi.weekly',
	 *   value: 'WEEKLY',
	 *   every: 2,
	 * }
	 *
	 * @name Constants#RecurrenceFrequencies
	 * @type {array}
	 */
	var RecurrenceFrequencies = exports.RecurrenceFrequencies = [{
	  name: 'form.schedule.frequency.daily',
	  value: TransferFrequency.DAILY,
	  every: 1
	}, {
	  name: 'form.schedule.frequency.weekly',
	  value: TransferFrequency.WEEKLY,
	  every: 1
	}, {
	  name: 'form.schedule.frequency.monthly',
	  value: TransferFrequency.MONTHLY,
	  every: 1
	}, {
	  name: 'form.schedule.frequency.quarterly',
	  value: TransferFrequency.QUARTERLY,
	  every: 1
	}, {
	  name: 'form.schedule.frequency.annually',
	  value: TransferFrequency.YEARLY,
	  every: 1
	}];
	
	/**
	 * @description
	 * Object representing single payment
	 *
	 * @property {string} name Translation key of the label
	 * that will be displayed to the end user
	 * @property {string} value Denotes frequency, holds value 'ONCE'
	 *
	 * @name Constants#SingleFrequency
	 * @type {object}
	 */
	var SingleFrequency = exports.SingleFrequency = {
	  name: 'form.schedule.frequency.once',
	  value: TransferFrequency.ONCE
	};
	
	/**
	 * @description
	 * Minimum ocurrences value by default
	 * @name Constants#ScheduleRepeatValue
	 * @type {Number}
	 */
	var ScheduleRepeatValue = exports.ScheduleRepeatValue = 2;
	
	var specialSymbols = "/-?:().,'+";
	var escapedSpecialSymbols = specialSymbols.split('').map(function (a) {
	  return '|\\' + a;
	}).join('');
	
	/**
	 * @description
	 * Pattern for payment reference validation
	 * @name Constants#PaymentReferencePattern
	 * @type {string}
	 */
	var PaymentReferencePattern = exports.PaymentReferencePattern = '^(\\w|\\d| ' + escapedSpecialSymbols + ')*$';
	
	/**
	 * @description
	 * List of United States of America states
	 *
	 * @property {string} name Full state name
	 * @property {string} abbreviation Two character state identifier
	 *
	 * @example
	 * [
	 *   {
	 *     name: 'Alabama',
	 *     abbreviation: 'AL',
	 *   },
	 *   ...
	 *   {
	 *     name: 'New York',
	 *     abbreviation: 'NY',
	 *   },
	 * ]
	 *
	 * @name Constants#USStates
	 * @type {array}
	 */
	var USStates = exports.USStates = [{
	  name: 'Alabama',
	  abbreviation: 'AL'
	}, {
	  name: 'Alaska',
	  abbreviation: 'AK'
	}, {
	  name: 'American Samoa',
	  abbreviation: 'AS'
	}, {
	  name: 'Arizona',
	  abbreviation: 'AZ'
	}, {
	  name: 'Arkansas',
	  abbreviation: 'AR'
	}, {
	  name: 'California',
	  abbreviation: 'CA'
	}, {
	  name: 'Colorado',
	  abbreviation: 'CO'
	}, {
	  name: 'Connecticut',
	  abbreviation: 'CT'
	}, {
	  name: 'Delaware',
	  abbreviation: 'DE'
	}, {
	  name: 'District Of Columbia',
	  abbreviation: 'DC'
	}, {
	  name: 'Federated States Of Micronesia',
	  abbreviation: 'FM'
	}, {
	  name: 'Florida',
	  abbreviation: 'FL'
	}, {
	  name: 'Georgia',
	  abbreviation: 'GA'
	}, {
	  name: 'Guam',
	  abbreviation: 'GU'
	}, {
	  name: 'Hawaii',
	  abbreviation: 'HI'
	}, {
	  name: 'Idaho',
	  abbreviation: 'ID'
	}, {
	  name: 'Illinois',
	  abbreviation: 'IL'
	}, {
	  name: 'Indiana',
	  abbreviation: 'IN'
	}, {
	  name: 'Iowa',
	  abbreviation: 'IA'
	}, {
	  name: 'Kansas',
	  abbreviation: 'KS'
	}, {
	  name: 'Kentucky',
	  abbreviation: 'KY'
	}, {
	  name: 'Louisiana',
	  abbreviation: 'LA'
	}, {
	  name: 'Maine',
	  abbreviation: 'ME'
	}, {
	  name: 'Marshall Islands',
	  abbreviation: 'MH'
	}, {
	  name: 'Maryland',
	  abbreviation: 'MD'
	}, {
	  name: 'Massachusetts',
	  abbreviation: 'MA'
	}, {
	  name: 'Michigan',
	  abbreviation: 'MI'
	}, {
	  name: 'Minnesota',
	  abbreviation: 'MN'
	}, {
	  name: 'Mississippi',
	  abbreviation: 'MS'
	}, {
	  name: 'Missouri',
	  abbreviation: 'MO'
	}, {
	  name: 'Montana',
	  abbreviation: 'MT'
	}, {
	  name: 'Nebraska',
	  abbreviation: 'NE'
	}, {
	  name: 'Nevada',
	  abbreviation: 'NV'
	}, {
	  name: 'New Hampshire',
	  abbreviation: 'NH'
	}, {
	  name: 'New Jersey',
	  abbreviation: 'NJ'
	}, {
	  name: 'New Mexico',
	  abbreviation: 'NM'
	}, {
	  name: 'New York',
	  abbreviation: 'NY'
	}, {
	  name: 'North Carolina',
	  abbreviation: 'NC'
	}, {
	  name: 'North Dakota',
	  abbreviation: 'ND'
	}, {
	  name: 'Northern Mariana Islands',
	  abbreviation: 'MP'
	}, {
	  name: 'Ohio',
	  abbreviation: 'OH'
	}, {
	  name: 'Oklahoma',
	  abbreviation: 'OK'
	}, {
	  name: 'Oregon',
	  abbreviation: 'OR'
	}, {
	  name: 'Palau',
	  abbreviation: 'PW'
	}, {
	  name: 'Pennsylvania',
	  abbreviation: 'PA'
	}, {
	  name: 'Puerto Rico',
	  abbreviation: 'PR'
	}, {
	  name: 'Rhode Island',
	  abbreviation: 'RI'
	}, {
	  name: 'South Carolina',
	  abbreviation: 'SC'
	}, {
	  name: 'South Dakota',
	  abbreviation: 'SD'
	}, {
	  name: 'Tennessee',
	  abbreviation: 'TN'
	}, {
	  name: 'Texas',
	  abbreviation: 'TX'
	}, {
	  name: 'Utah',
	  abbreviation: 'UT'
	}, {
	  name: 'Vermont',
	  abbreviation: 'VT'
	}, {
	  name: 'Virgin Islands',
	  abbreviation: 'VI'
	}, {
	  name: 'Virginia',
	  abbreviation: 'VA'
	}, {
	  name: 'Washington',
	  abbreviation: 'WA'
	}, {
	  name: 'West Virginia',
	  abbreviation: 'WV'
	}, {
	  name: 'Wisconsin',
	  abbreviation: 'WI'
	}, {
	  name: 'Wyoming',
	  abbreviation: 'WY'
	}];
	
	/**
	 * @name Constants#Intent
	 * @description
	 *
	 * @type {Object}
	 */
	var Intent = exports.Intent = {
	  INITIATE_PAYMENT: 'intent.bus.paymentOrder.usDomesticWirePayment.initiate',
	  VIEW_PAYMENT_ORDERS: 'view.account.managePayments'
	};
	
	/**
	 * @name BENEFICIARY_SELECTOR_MODAL
	 * @type {String}
	 * @description
	 * Beneficiary selector modal type
	 */
	var BENEFICIARY_SELECTOR_MODAL = exports.BENEFICIARY_SELECTOR_MODAL = 'modal';
	
	/**
	 * @name BENEFICIARY_LIST_SIZE
	 * @type {number}
	 * @description
	 * Max number of item that should be visible in beneficiary account seleter listbox
	 */
	var BENEFICIARY_LIST_SIZE = exports.BENEFICIARY_LIST_SIZE = 10;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fromModelToForm = undefined;
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbIban = __webpack_require__(93);
	
	var _constants = __webpack_require__(91);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* globals window, document */
	
	
	var templates = {
	  form: '#' + _constants.WidgetName + '/form.html',
	  review: '#' + _constants.WidgetName + '/review.html'
	};
	
	var currencies = [];
	var minOccurrences = _constants.ScheduleRepeatValue;
	var maxOccurences = 200;
	var maxDigits = 13;
	
	var charCounterConfig = {
	  description: {
	    maxChars: 140
	  },
	  reference: {
	    maxChars: 35
	  }
	};
	
	var capitalizeIfPrefix = function capitalizeIfPrefix(str, prefix) {
	  return !Boolean(prefix) || !str ? str : '' + prefix + str[0].toUpperCase() + str.substr(1);
	};
	
	var toPostalAddressModel = function toPostalAddressModel(item) {
	  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	  return {
	    addressLine1: item[capitalizeIfPrefix('addressLine1', prefix)],
	    addressLine2: item[capitalizeIfPrefix('addressLine2', prefix)],
	    streetName: item[capitalizeIfPrefix('streetName', prefix)],
	    postCode: item[capitalizeIfPrefix('postCode', prefix)],
	    town: item[capitalizeIfPrefix('town', prefix)],
	    countrySubDivision: item[capitalizeIfPrefix('countrySubDivision', prefix)]
	  };
	};
	
	var fromContactToBeneficiary = function fromContactToBeneficiary(contact) {
	  return {
	    postalAddress: toPostalAddressModel(contact),
	    bank: {
	      accountNumber: contact.accountNumber,
	      name: contact.bankName,
	      code: contact.bankCode,
	      postalAddress: toPostalAddressModel(contact, 'bank')
	    }
	  };
	};
	
	var flattenContactAccounts = function flattenContactAccounts(contacts) {
	  var resultContacts = [];
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = contacts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var contact = _step.value;
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = contact.accounts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var account = _step2.value;
	
	          Object.assign(account, Object.assign({}, contact, {
	            // following line overwrites account.accountName with this preference
	            accountName: account.accountName || account.name || account.alias,
	            formatIban: function formatIban(acc) {
	              return (0, _libBbIban.isValidIBAN)(acc) ? (0, _libBbIban.formatByGroups)(acc) : acc;
	            },
	            external: true
	          }));
	          resultContacts.push(account);
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  return resultContacts;
	};
	
	var fromArrangementToContact = function fromArrangementToContact(arrangement) {
	  return Object.assign({
	    name: arrangement.name
	  }, toPostalAddressModel(arrangement, 'accountHolder'), {
	    accountNumber: arrangement.BBAN,
	    amount: arrangement.amount,
	    currency: arrangement.currency,
	    bankName: arrangement.accountHolderName,
	    bankCode: arrangement.bankBranchCode,
	    bankAddressLine1: arrangement.addressLine1,
	    bankAddressLine2: arrangement.addressLine2,
	    bankStreetName: arrangement.streetName,
	    bankPostCode: arrangement.postCode,
	    bankTown: arrangement.town,
	    bankCountrySubDivision: arrangement.countrySubDivision
	  });
	};
	
	/**
	 * @name remapObject
	 * @description
	 * Takes an object and return new object with same properties, but adding
	 * prefix to property name, property name will be camelcase.
	 * @type {Function}
	 * @inner
	 * @param {Object} obj Input object to remap
	 * @param {String} prefix Prefix text to prepend to every property
	 * @returns {Object} Output object with renamed properties
	 */
	var remapObject = function remapObject(obj, prefix) {
	  return Object.keys(obj).reduce(function (result, name) {
	    return Object.assign(result, _defineProperty({}, capitalizeIfPrefix(name, prefix), obj[name]));
	  }, {});
	};
	
	var fromBeneficiaryToContact = function fromBeneficiaryToContact(beneficiary) {
	  return Object.assign({
	    name: beneficiary.name
	  }, beneficiary.postalAddress, {
	    accounts: [Object.assign({
	      name: beneficiary.name,
	      bankName: beneficiary.bank.name,
	      accountNumber: beneficiary.bank.accountNumber,
	      bankCode: beneficiary.bank.code
	    }, remapObject(beneficiary.bank.postalAddress, 'bank'))]
	  });
	};
	
	var getAddressText = function getAddressText(postalAddress) {
	  return [postalAddress.addressLine1, postalAddress.addressLine2, postalAddress.streetName, postalAddress.postCode, postalAddress.town, postalAddress.countrySubDivision].reduce(function (accumulator, currentValue) {
	    if (typeof currentValue === 'string' && currentValue.trim()) {
	      accumulator.push(currentValue.trim());
	    }
	    return accumulator;
	  }, []).join(', ');
	};
	
	/**
	 * @name getDateOnly
	 * @inner
	 * @type {function}
	 *
	 * @description
	 * Parses a javascript date to a yyyy-MM-DD format string, dropping time and timezone information.
	 *
	 * @param {date} dateArg the date to parse
	 * @returns {string} the formatted string/date
	 */
	var getDateOnly = function getDateOnly(dateArg) {
	  if (!dateArg) {
	    return null;
	  }
	  var date = new Date(dateArg);
	
	  var month = String(date.getMonth() + 1);
	  var day = String(date.getDate());
	  var year = String(date.getFullYear());
	
	  return year + '-' + month.padStart(2, '0') + '-' + day.padStart(2, '0');
	};
	
	/**
	 * @name getRecurringTransactionDay
	 * @inner
	 * @type {function}
	 *
	 * @description
	 * Denotes day on which transfer should be executed.
	 * For weekly it will be 1..7 indicating weekday.
	 * For monthly it will be 1..31 indicating day of month.
	 * For yearly it will be 1..12 indicating month of the year
	 *
	 * @param {object} schedule Recurring payment schedule object
	 * @returns {number} Recurring transaction day
	 */
	var getRecurringTransactionDay = function getRecurringTransactionDay(schedule) {
	  switch (schedule.transferFrequency.value) {
	    case _constants.TransferFrequency.YEARLY:
	      return schedule.startDate.getMonth() + 1;
	    case _constants.TransferFrequency.MONTHLY:
	      return schedule.startDate.getDate();
	    default:
	      return schedule.startDate.getDay() + 1;
	  }
	};
	
	/**
	 * @name Helpers#fromModelToForm
	 * @description
	 * Transforms payment model coming from server to for model
	 * @type {Function}
	 * @param {Object} payment Payment model from server
	 * @returns {Object} Transformed payment
	 */
	var fromModelToForm = exports.fromModelToForm = function fromModelToForm(payment) {
	  var paymentForm = {
	    createdAt: payment.createdAt ? new Date(payment.createdAt) : null,
	    data: {
	      id: payment.id ? payment.id : null
	    }
	  };
	
	  // select debtor info
	  if (payment.debtorAccount) {
	    paymentForm.data.debitAccount = Object.assign({}, _vendorBbAngular2.default.copy(payment.debtorAccount), {
	      id: payment.debtorAccount.arrangementId
	    });
	  }
	
	  // creditor info
	  if (payment.creditTransferTransactionInformation && payment.creditTransferTransactionInformation.length) {
	    var creditInfo = payment.creditTransferTransactionInformation[0];
	    // amount and currency
	    if (creditInfo.instructedAmount) {
	      Object.assign(paymentForm.data, {
	        amount: {
	          currency: creditInfo.instructedAmount.currencyCode || null,
	          value: creditInfo.instructedAmount.amount || null
	        }
	      });
	    }
	
	    Object.assign(paymentForm.data, {
	      beneficiary: {
	        name: creditInfo.creditor ? creditInfo.creditor.name : null,
	        postalAddress: creditInfo.creditor ? creditInfo.creditor.postalAddress : null,
	        message: creditInfo.remittanceInformation ? creditInfo.remittanceInformation.content : null,
	        bank: {
	          name: creditInfo.creditorBank ? creditInfo.creditorBank.name : null,
	          accountNumber: creditInfo.creditorAccount && creditInfo.creditorAccount.identification ? creditInfo.creditorAccount.identification.identification : null,
	          code: creditInfo.creditorBank ? creditInfo.creditorBank.bankBranchCode : null,
	          postalAddress: creditInfo.creditorBank ? creditInfo.creditorBank.postalAddress : null,
	          message: creditInfo.messageToBank || null
	        }
	      }
	    });
	
	    if (creditInfo.correspondentBank) {
	      Object.assign(paymentForm.data.beneficiary, {
	        correspondentBank: {
	          name: creditInfo.correspondentBank.name || null,
	          code: creditInfo.correspondentBank.bankBranchCode
	        }
	      });
	    }
	
	    // reference and description
	    Object.assign(paymentForm.data, {
	      paymentReference: creditInfo.endToEndIdentification || null
	    });
	  }
	
	  // schedule
	  if (payment.schedule) {
	    Object.assign(paymentForm.data, {
	      schedule: {
	        transferFrequency: {
	          value: payment.schedule.transferFrequency
	        }
	      }
	    });
	
	    if (payment.schedule.transferFrequency === 'WEEKLY') {
	      paymentForm.data.schedule.transferFrequency.name = 'form.schedule.frequency.weekly';
	    } else if (payment.schedule.transferFrequency === 'DAILY') {
	      paymentForm.data.schedule.transferFrequency.name = 'form.schedule.frequency.daily';
	    } else if (payment.schedule.transferFrequency === 'MONTHLY') {
	      paymentForm.data.schedule.transferFrequency.name = 'form.schedule.frequency.monthly';
	    } else if (payment.schedule.transferFrequency === 'QUARTERLY') {
	      paymentForm.data.schedule.transferFrequency.name = 'form.schedule.frequency.quarterly';
	    } else if (payment.schedule.transferFrequency === 'YEARLY') {
	      paymentForm.data.schedule.transferFrequency.name = 'form.schedule.frequency.annually';
	    }
	
	    paymentForm.data.schedule.startDate = payment.schedule.startDate ? new Date(payment.schedule.startDate) : null;
	
	    if (payment.schedule.every) {
	      paymentForm.data.schedule.transferFrequency.every = parseInt(payment.schedule.every, 10);
	    }
	
	    if (payment.schedule.endDate) {
	      paymentForm.data.schedule.endDate = new Date(payment.schedule.endDate);
	    }
	
	    if (payment.schedule.repeat) {
	      paymentForm.data.schedule.repeat = payment.schedule.repeat;
	      paymentForm.data.endingType = _constants.RecurrenceEnding.AFTER;
	    } else if (payment.schedule.endDate) {
	      paymentForm.data.endingType = _constants.RecurrenceEnding.ON;
	    }
	  } else {
	    Object.assign(paymentForm.data, {
	      endingType: _constants.RecurrenceEnding.NEVER,
	      schedule: {
	        transferFrequency: _vendorBbAngular2.default.copy(_constants.SingleFrequency),
	        startDate: new Date(payment.requestedExecutionDate),
	        endDate: new Date(payment.requestedExecutionDate)
	      }
	    });
	  }
	
	  return paymentForm;
	};
	
	/**
	 * @name Helpers
	 * @type {object}
	 */
	
	exports.default = function (_ref) {
	  var service = _ref.service,
	      stateContainer = _ref.stateContainer,
	      router = _ref.router,
	      intents = _ref.intents,
	      postActions = _ref.postActions,
	      $filter = _ref.$filter;
	
	  var i18nFilter = $filter('i18n');
	  var dateFilter = $filter('date');
	
	  /**
	   * @description
	   * Retrieve payment state
	   * @name getPaymentState
	   * @inner
	   * @type {Function}
	   * @returns {Object}
	   */
	  var getPaymentState = stateContainer.createSelector(function (state) {
	    return state.payment;
	  });
	
	  /**
	   * @description
	   * Retrieve save new contact flag from state
	   * @name saveNewContact
	   * @inner
	   * @type {Function}
	   * @returns {Boolean}
	   */
	  var saveNewContact = stateContainer.createSelector(function (state) {
	    return state.payment.saveNewContact;
	  });
	
	  /**
	   * @description
	   * Retrieve payment data from state store
	   * @name Helpers#getContacts
	   * @type {Function}
	   * @returns {Object}
	   */
	  var getContacts = stateContainer.createSelector(function (state) {
	    return state.contacts.data;
	  });
	
	  /**
	   * @description
	   * Retrieve payment data from state store
	   * @name Helpers#getPayment
	   * @type {Function}
	   * @returns {Object}
	   */
	  var getPayment = stateContainer.createSelector(function (state) {
	    return state.payment.data;
	  });
	
	  /**
	   * @description
	   * Retrieve credit accounts data from state store
	   * @name Helpers#getCreditAccounts
	   * @type {Function}
	   * @returns {Array}
	   */
	  var getCreditAccounts = stateContainer.createSelector(function (state) {
	    return state.creditAccounts.data;
	  });
	
	  /**
	   * @description
	   * Retrieve payment schedule data from state store
	   * @name Helpers#getSchedule
	   * @type {Function}
	   * @returns {Object}
	   */
	  var getSchedule = stateContainer.createSelector(function () {
	    return getPayment().schedule;
	  });
	
	  /**
	   * @description
	   * Retrieve payment beneficiary data from state store
	   * @name Helpers#getBeneficiary
	   * @type {Function}
	   * @returns {Object}
	   */
	  var getBeneficiary = stateContainer.createSelector(function () {
	    return getPayment().beneficiary;
	  });
	
	  /**
	   * @description
	   * Retrieve beneficiary postalAddress data from state store
	   * @name Helpers#getBeneficiaryPostalAddress
	   * @type {Function}
	   * @returns {Object}
	   */
	  var getBeneficiaryPostalAddress = stateContainer.createSelector(function () {
	    return getBeneficiary().postalAddress;
	  });
	
	  /**
	   * @description
	   * Retrieve beneficiary bank data from state store
	   * @name Helpers#getBeneficiaryBank
	   * @type {Function}
	   * @returns {Object}
	   */
	  var getBeneficiaryBank = stateContainer.createSelector(function () {
	    return getBeneficiary().bank;
	  });
	
	  /**
	   * @description
	   * Retrieve beneficiary correspondent bank data from state store
	   * @name Helpers#getBeneficiaryCorrespondentBank
	   * @type {Function}
	   * @returns {Object}
	   */
	  var getBeneficiaryCorrespondentBank = stateContainer.createSelector(function () {
	    return getBeneficiary().correspondentBank;
	  });
	
	  /**
	   * @description
	   * Retrieve debit accounts data from state store
	   * @name Helpers#getDebitAccounts
	   * @type {Function}
	   * @returns {Object}
	   */
	  var getDebitAccounts = stateContainer.createSelector(function (state) {
	    return state.debitAccounts;
	  });
	
	  /**
	   * @description
	   * Retrieve review from state store
	   * @name Helpers#getReview
	   * @type {Function}
	   * @returns {Object}
	   */
	  var getReview = stateContainer.createSelector(function (state) {
	    return state.review;
	  });
	
	  /**
	   * @description
	   * Retrieve draft from state store
	   * @name getDraft
	   * @inner
	   * @type {Function}
	   * @returns {Object}
	   */
	  var getDraft = stateContainer.createSelector(function (state) {
	    return state.draft;
	  });
	
	  /**
	   * @name Helpers#getMinDate
	   * @type {function}
	   * @description
	   * Get the minimum available date for specific frequency
	   *
	   * @param {date} startDate
	   * @param {object} transferFrequency
	   * @return {date}
	   */
	  var getMinDate = function getMinDate(startDate) {
	    var transferFrequency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    var minDate = void 0;
	
	    var daysInMonth = function daysInMonth(month, year) {
	      return new Date(year, month + 1, 0).getDate();
	    };
	    var addDays = function addDays(toDate, days) {
	      return new Date(toDate.getTime() + days * 24 * 60 * 60 * 1000);
	    };
	    var addWeeks = function addWeeks(toDate, weeks) {
	      return addDays(toDate, weeks * 7);
	    };
	    var addYears = function addYears(toDate, years) {
	      return new Date(toDate.getFullYear() + years, toDate.getMonth(), toDate.getDate() > daysInMonth(toDate.getMonth(), toDate.getFullYear()) ? daysInMonth(toDate.getMonth(), toDate.getFullYear()) : toDate.getDate());
	    };
	    var addMonths = function addMonths(toDate, months) {
	      var newMonth = toDate.getMonth() + months + 1 > 12 ? (toDate.getMonth() + months + 1) % 12 - 1 : toDate.getMonth() + months;
	      var newYear = toDate.getMonth() + months + 1 > 12 ? addYears(toDate, 1).getFullYear() : toDate.getFullYear();
	      var newDay = toDate.getDate() > daysInMonth(newMonth, newYear) ? daysInMonth(newMonth, newYear) : toDate.getDate();
	      return new Date(newYear, newMonth, newDay);
	    };
	
	    switch (transferFrequency.value) {
	      case 'DAILY':
	        minDate = addDays(startDate, transferFrequency.every);
	        break;
	      case 'WEEKLY':
	        minDate = addWeeks(startDate, transferFrequency.every);
	        break;
	      case 'MONTHLY':
	        minDate = addMonths(startDate, transferFrequency.every);
	        break;
	      case 'QUARTERLY':
	        minDate = addMonths(startDate, transferFrequency.every * 3);
	        break;
	      case 'YEARLY':
	        minDate = addYears(startDate, transferFrequency.every);
	        break;
	      default:
	        minDate = startDate;
	    }
	
	    return minDate;
	  };
	
	  /**
	   * @description
	   * Compiles the scheduling description out of payment object params.
	   * In this process, following translation keys are being used:
	   * form.schedule.starting, for word "Starting"
	   * form.schedule.today, for word "Today"
	   * form.schedule.on, for word "On" (used before date to form "on 01.01.2017")
	   * form.schedule.until, for word "until" (used before date to form "until 01.01.2017")
	   * form.schedule.repeat.count, for word "times" (used after repeat count to form "5 times")
	   * and name of the transfer frequency set in constants file
	   *
	   * @name Helpers#getScheduleText
	   * @type {function}
	   * @returns {string} Compiled text that can be used as scheduling value in views
	   */
	  var getScheduleText = function getScheduleText() {
	    var payment = getPayment();
	    var schedule = getSchedule();
	    var words = [];
	    var today = new Date().setHours(0, 0, 0, 0);
	    var startDate = new Date(schedule.startDate);
	    var isToday = startDate.setHours(0, 0, 0, 0) === today;
	    var multipleOccurrences = schedule.transferFrequency.value !== _constants.TransferFrequency.ONCE;
	    var hasEnd = payment.endingType !== _constants.RecurrenceEnding.NEVER;
	    var isEndingAfter = payment.endingType === _constants.RecurrenceEnding.AFTER;
	
	    // add frequency
	    words.push(i18nFilter(schedule.transferFrequency.name));
	    words.push('-');
	
	    // if there are multiple occurrences, add word starting
	    if (multipleOccurrences) {
	      words.push(i18nFilter('form.schedule.starting'));
	    }
	
	    // if start date is today use word instead of date
	    if (isToday) {
	      var todayString = i18nFilter('form.schedule.today');
	      // for multiple occurrences, there is a prefix word, so this on should be lowercase
	      if (multipleOccurrences) {
	        todayString = todayString.toLowerCase();
	      }
	
	      words.push(todayString);
	    }
	
	    // for single transfer in the future, we need prefix word on
	    if (!multipleOccurrences && !isToday) {
	      words.push(i18nFilter('form.schedule.on').toLowerCase());
	    }
	
	    if (!isToday) {
	      words.push(dateFilter(schedule.startDate));
	    }
	
	    var hasLimitedOccurences = hasEnd && multipleOccurrences;
	    var isMinOccurences = !schedule.repeat || schedule.repeat < minOccurrences;
	
	    // if there are limited number of occurrences,
	    // add comma for the last word, so that there is no space between them
	    if (hasLimitedOccurences && !(isEndingAfter && isMinOccurences)) {
	      words[words.length - 1] += ',';
	    }
	
	    if (hasEnd && multipleOccurrences) {
	      // there is an end for this schedule
	      // based on the type of ending construct words differently
	      if (payment.endingType === _constants.RecurrenceEnding.ON) {
	        words.push(i18nFilter('form.schedule.until'));
	        words.push(dateFilter(schedule.endDate));
	      } else if (schedule.repeat >= minOccurrences) {
	        words.push(schedule.repeat);
	        words.push(schedule.repeat ? i18nFilter('form.schedule.repeat.count') : '');
	      }
	    }
	
	    // output everything together
	    return words.join(' ');
	  };
	
	  /**
	   * @description
	   * Returns frequencies for payment depending on occurences number
	   *
	   * @name Helpers#getFrequencies
	   * @type {function}
	   * @returns {array<object>} Array of transfer frequencies
	   */
	  var getFrequencies = stateContainer.createSelector(function (state) {
	    return [_constants.SingleFrequency].concat(state.preferences.recurring ? _constants.RecurrenceFrequencies : []);
	  });
	
	  /**
	   * @description
	   * Updates scheduled end date
	   *
	   * @name Helpers#setEndDate
	   * @type {function}
	   */
	  var setEndDate = function setEndDate() {
	    var schedule = getSchedule();
	    schedule.endDate = getMinDate(schedule.startDate, schedule.transferFrequency);
	  };
	
	  /**
	   * @description
	   * Check that `account` is not in the current list of beneficiaries
	   * @name removeSelectedDebitAccount
	   * @type {Function}
	   * @inner
	   * @param {Object} account The debit account to check
	   * @returns {Boolean}
	   */
	  var removeSelectedDebitAccount = function removeSelectedDebitAccount(account) {
	    var selectedDebitAccount = getPayment().debitAccount;
	    if (!selectedDebitAccount || !selectedDebitAccount.BBAN) {
	      return true;
	    }
	
	    return account.BBAN !== selectedDebitAccount.BBAN;
	  };
	
	  /**
	   * @inner
	   * @name groupAccounts
	   * @type {Function}
	   *
	   * @description
	   * Restructure the accounts' list by adding an extra item to that list
	   * just before the start of each group of accounts,that extra item
	   * represents the group.
	   *
	   * @param {Array} accountsList
	   * @param {Number} totalItemsCount
	   * @returns {Array}
	   */
	  var groupAccounts = function groupAccounts(accountsList, totalItemsCount) {
	    var internalAccounts = accountsList.filter(function (account) {
	      return !account.external;
	    });
	    var externalAccounts = accountsList.filter(function (account) {
	      return account.external;
	    });
	
	    if (internalAccounts.length) {
	      internalAccounts = [{ group: i18nFilter('form.beneficiary.group.internal') }].concat(_toConsumableArray(internalAccounts));
	    }
	
	    if (externalAccounts.length) {
	      externalAccounts = [{ group: i18nFilter('form.beneficiary.group.external') }].concat(_toConsumableArray(externalAccounts));
	    }
	
	    var list = [].concat(_toConsumableArray(internalAccounts), _toConsumableArray(externalAccounts));
	
	    // add extra item as indicator for more results
	    if (totalItemsCount > _constants.BENEFICIARY_LIST_SIZE) {
	      list.push({
	        more: i18nFilter('form.beneficiary.group.more', {
	          count: totalItemsCount - _constants.BENEFICIARY_LIST_SIZE // count remaining item
	        })
	      });
	    }
	
	    return list;
	  };
	
	  /**
	   * @description
	   * Loads list of contacts filtered by contact name
	   * Group accounts by internal or external type
	   *
	   * @param {string} name Name of the contact
	   * @param {number} [size = BENEFICIARY_LIST_SIZE] - Number of returned items
	   * @return {Promise.<Object>}
	   *
	   * @name Helpers#loadContactsByName
	   * @type {function}
	   */
	  var loadContactsByName = function loadContactsByName(name) {
	    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.BENEFICIARY_LIST_SIZE;
	
	    var contacts = getContacts();
	    var creditAccounts = getCreditAccounts() || [];
	
	    var combinedAccounts = [].concat(_toConsumableArray(creditAccounts.filter(removeSelectedDebitAccount).map(fromArrangementToContact)), _toConsumableArray(flattenContactAccounts(contacts)));
	
	    if (name) {
	      combinedAccounts = combinedAccounts.filter(function (account) {
	        return account.name.toUpperCase().includes(name.toUpperCase()) || account.accountName && account.accountName.toUpperCase().includes(name.toUpperCase()) || account.accountNumber && account.accountNumber.toUpperCase().includes(name.toUpperCase());
	      });
	    }
	
	    return Promise.resolve({
	      data: groupAccounts(combinedAccounts.slice(0, size), combinedAccounts.length),
	      totalItems: combinedAccounts.length
	    });
	  };
	
	  /**
	   * @description
	   * Set beneficiary fields when selecting contact
	   *
	   * @param {object} model Contact model
	   * @name Helpers#selectContact
	   * @type {function}
	   */
	  var selectContact = function selectContact(model) {
	    return service.setBeneficiary(fromContactToBeneficiary(model));
	  };
	
	  /**
	   * @description
	   * Set beneficiary fields when selecting contact
	   *
	   * @param {object} model Contact model
	   * @name Helpers#selectContactModal
	   * @type {function}
	   */
	  var selectContactModal = function selectContactModal(model) {
	    var item = model;
	
	    if (item.BBAN) {
	      item = fromArrangementToContact(item);
	    }
	
	    return service.setBeneficiary(Object.assign({}, fromContactToBeneficiary(item), {
	      name: item.name
	    }));
	  };
	
	  /**
	   * @description
	   * Resets all the beneficiary fields
	   *
	   * @name Helpers#resetContact
	   * @type {function}
	   */
	  var resetContact = function resetContact() {
	    service.resetBeneficiary();
	  };
	
	  /**
	   * @description
	   * Sets starting ocurrences number if not defined use default one
	   *
	   * @name Helpers#setDefaultOcurrencesValue
	   * @type {function}
	   */
	  var setDefaultOcurrencesValue = function setDefaultOcurrencesValue() {
	    var schedule = getSchedule();
	    if (!schedule.repeat) {
	      schedule.repeat = minOccurrences;
	    }
	  };
	
	  /**
	   * @description
	   * Get human readable beneficiary address text
	   *
	   * @returns {string}
	   *
	   * @name Helpers#getBeneficiaryAddressText
	   * @type {function}
	   */
	  var getBeneficiaryAddressText = function getBeneficiaryAddressText() {
	    return getAddressText(getBeneficiaryPostalAddress());
	  };
	
	  /**
	   * @description
	   * Get human readable bank address text
	   *
	   * @returns {string}
	   *
	   * @name Helpers#getBankAddressText
	   * @type {function}
	   */
	  var getBankAddressText = function getBankAddressText() {
	    return getAddressText(getBeneficiaryBank().postalAddress);
	  };
	
	  /**
	   * @description
	   * Check if contact is not in address book
	   *
	   * @returns {boolean}
	   *
	   * @name Helpers#isNewContact
	   * @inner
	   * @type {function}
	   */
	  var isNewContact = function isNewContact() {
	    var beneficiary = getBeneficiary();
	    var contacts = getContacts();
	
	    return !Boolean(contacts && contacts.find(function (contact) {
	      return contact.name === beneficiary.name && contact.accountNumber === beneficiary.bank.accountNumber && contact.bankCode === beneficiary.bank.code;
	    }));
	  };
	
	  /**
	   * @description
	   * Check if beneficiary fields are set
	   *
	   * @returns {boolean}
	   *
	   * @name Helpers#isBeneficiarySet
	   * @inner
	   * @type {function}
	   */
	  var isBeneficiarySet = function isBeneficiarySet() {
	    var beneficiary = getBeneficiary();
	    return Boolean(beneficiary.name && beneficiary.bank.accountNumber && beneficiary.bank.code);
	  };
	
	  /**
	   * @description
	   * Checks if save new contact checkbox should be enabled
	   *
	   * @returns {boolean}
	   *
	   * @name Helpers#isSaveNewContactEnabled
	   * @type {function}
	   */
	  var isSaveNewContactEnabled = function isSaveNewContactEnabled() {
	    return isBeneficiarySet() && isNewContact();
	  };
	
	  /**
	   * @description
	   * Transforms form fields to contact model to be saved
	   *
	   * @param {object} beneficiary The beneficiary fields
	   * @returns {object}
	   *
	   * @name Helpers#formToContact
	   * @type {function}
	   */
	  var formToContact = function formToContact(beneficiary) {
	    return isSaveNewContactEnabled() && saveNewContact() && fromBeneficiaryToContact(beneficiary);
	  };
	
	  /**
	   * @description
	   * Transforms form fields to payment model to be saved
	   *
	   * @param {object} payment The payment fields
	   * @returns {object}
	   *
	   * @name Helpers#formToPayment
	   * @type {function}
	   */
	  var formToPayment = function formToPayment(payment) {
	    var beneficiary = payment.beneficiary,
	        debitAccount = payment.debitAccount,
	        schedule = payment.schedule,
	        amount = payment.amount;
	
	    var isSinglePayment = !schedule.transferFrequency || schedule.transferFrequency.value === _constants.SingleFrequency.value;
	
	    var debtorAccount = debitAccount ? {
	      identification: {
	        identification: debitAccount.id,
	        schemeName: 'ID'
	      }
	    } : null;
	
	    if (debitAccount && debitAccount.name) {
	      Object.assign(debtorAccount, { name: debitAccount.name });
	    }
	
	    var creditTransferTransactionInformation = [{
	      instructedAmount: {
	        amount: amount.value,
	        currencyCode: amount.currency
	      },
	      creditor: {
	        name: beneficiary.name,
	        postalAddress: Object.assign({}, beneficiary.postalAddress)
	      },
	      creditorAccount: {
	        identification: {
	          identification: beneficiary.bank.accountNumber,
	          schemeName: 'BBAN'
	        }
	      },
	      creditorBank: {
	        bankBranchCode: beneficiary.bank.code,
	        name: beneficiary.bank.name,
	        postalAddress: Object.assign({}, beneficiary.bank.postalAddress)
	      }
	    }];
	
	    if (getPaymentState().isCorrespondentEnabled && beneficiary.correspondentBank.code) {
	      Object.assign(creditTransferTransactionInformation[0], {
	        correspondentBank: {
	          bankBranchCode: beneficiary.correspondentBank.code,
	          name: beneficiary.correspondentBank.name
	        }
	      });
	    }
	
	    if (beneficiary.bank.message) {
	      Object.assign(creditTransferTransactionInformation[0], {
	        messageToBank: beneficiary.bank.message
	      });
	    }
	
	    if (beneficiary.message) {
	      Object.assign(creditTransferTransactionInformation[0], {
	        remittanceInformation: beneficiary.message
	      });
	    }
	
	    if (payment.paymentReference) {
	      Object.assign(creditTransferTransactionInformation[0], {
	        endToEndIdentification: payment.paymentReference
	      });
	    }
	
	    var paymentOrder = {
	      debtorAccount: debtorAccount,
	      requestedExecutionDate: getDateOnly(schedule.startDate),
	      paymentMode: isSinglePayment ? 'SINGLE' : 'RECURRING',
	      paymentType: 'US_DOMESTIC_WIRE',
	      creditTransferTransactionInformation: creditTransferTransactionInformation
	    };
	
	    if (payment.id) {
	      Object.assign(paymentOrder, { id: payment.id });
	    }
	
	    if (payment.urgent) {
	      Object.assign(paymentOrder, { instructionPriority: 'HIGH' });
	    }
	
	    if (!isSinglePayment) {
	      Object.assign(paymentOrder, {
	        schedule: {
	          transferFrequency: schedule.transferFrequency.value,
	          on: getRecurringTransactionDay(schedule),
	          startDate: getDateOnly(schedule.startDate),
	          every: schedule.transferFrequency.every,
	          endDate: payment.endingType === _constants.RecurrenceEnding.ON ? getDateOnly(schedule.endDate) : null,
	          repeat: payment.endingType === _constants.RecurrenceEnding.AFTER ? schedule.repeat : null
	        }
	      });
	    }
	
	    return paymentOrder;
	  };
	
	  /**
	   * @name Helpers#canSaveDraft
	   * @type {Function}
	   * @description
	   * Returns true if at least credit account, beneficiary or any amount
	   * filled in
	   *
	   * @param {Object} form Form state
	   * @returns {Boolean}
	   */
	  var canSaveDraft = function canSaveDraft(form) {
	    var payment = getPayment();
	    var validations = ['pattern', 'maxlength', 'customRtn'];
	    var hasUserErrors = form.$error && validations.reduce(function (memo, current) {
	      return memo || current in form.$error;
	    }, false);
	
	    return !hasUserErrors && (payment.debitAccount || payment.beneficiary.name || payment.beneficiary.bank.accountNumber || payment.amount.value);
	  };
	
	  /**
	   * @description
	   * Removes not needed data from draft object before sending
	   *
	   * @name purifyDraftPaymentData
	   * @type {function}
	   * @inner
	   * @param {object} payment Payment data
	   * @returns {object} transformed draft payment order data
	   */
	  var purifyDraftPaymentData = function purifyDraftPaymentData(payment) {
	    var purifiedPayment = _vendorBbAngular2.default.copy(payment);
	    var credit = purifiedPayment.creditTransferTransactionInformation[0];
	    var creditAcc = credit.creditorAccount.identification.identification;
	
	    if (!payment.debtorAccount) {
	      delete purifiedPayment.debtorAccount;
	    }
	
	    if (!credit.creditor.name) {
	      delete credit.creditor;
	    }
	
	    if (!creditAcc) {
	      delete credit.creditorAccount;
	    }
	
	    if (!credit.instructedAmount.amount) {
	      delete credit.instructedAmount;
	    }
	
	    return purifiedPayment;
	  };
	
	  /**
	   * @description
	   * Get purified draft payment model
	   *
	   * @param {object} payment The payment fields
	   * @returns {object}
	   *
	   * @name Helpers#getDraftPayment
	   * @type {function}
	   */
	  var getDraftPayment = function getDraftPayment(payment) {
	    return purifyDraftPaymentData(formToPayment(payment));
	  };
	
	  var deleteDraft = function deleteDraft(id) {
	    service.deleteDraft(id).then(function () {
	      intents.viewPaymentOrders();
	    });
	  };
	
	  /**
	   * @description
	   * Close edit draft and navigate to view payment orders intent
	   *
	   * @name Helpers#closeEditDraft
	   * @type {Function}
	   */
	  var closeEditDraft = function closeEditDraft(form) {
	    var draft = getDraft();
	    var originalDraft = getDraftPayment(draft.data);
	    var currentDraft = getDraftPayment(getPayment());
	
	    if (canSaveDraft(form) && !_vendorBbAngular2.default.equals(originalDraft, currentDraft)) {
	      draft.editConfirmOpened = true;
	    } else {
	      intents.viewPaymentOrders();
	    }
	  };
	
	  /**
	   * @description
	   * Updates current draft payment and redirects to view draft payments if succesfully edited
	   * @name Helpers#updateDraft
	   * @type {Function}
	   */
	  var updateDraft = function updateDraft() {
	    var payment = getPayment();
	    service.updateDraft(getDraftPayment(payment)).then(function () {
	      intents.viewPaymentOrders();
	    });
	  };
	
	  /**
	   * @name postActionsOptions
	   * @description
	   * List of configuration objects defining submit post actions options
	   * @type {PostActionOption[]}
	   * @inner
	   */
	  var postActionsOptions = [{
	    id: 1,
	    key: 'review.label.submit',
	    postAction: postActions.type.NONE,
	    selected: true,
	    permission: 'create'
	  }, {
	    id: 2,
	    key: 'review.label.submit.create',
	    postAction: postActions.type.CREATE,
	    permission: 'create'
	  }, {
	    id: 3,
	    key: 'review.label.submit.approve',
	    postAction: postActions.type.APPROVE,
	    permission: 'approve'
	  }];
	
	  var getPrivileges = stateContainer.createSelector(function (state) {
	    return state.privileges;
	  });
	
	  /**
	   * @name Helpers#isAllowedPaymentPrivilege
	   * @description
	   * Checks if use is allowed to perform `privilege` on domestic wire payment context
	   * @type {Function}
	   * @param {String} privilege
	   * @returns {Boolean} Wether if user is allowed or not on `privilege`
	   */
	  var isAllowedPaymentPrivilege = function isAllowedPaymentPrivilege(privilege) {
	    var privileges = getPrivileges();
	    var context = privileges.response.Payments['US Domestic Wire'];
	    if (privileges.error || !context) {
	      return true;
	    }
	
	    return context[privilege];
	  };
	
	  /**
	   * @name Helpers#getPostActionsOptions
	   * @description
	   * Returns available post submit actions depending on privileges
	   * @type {Function}
	   * @returns {PostActionOption[]} Allowed post submit actions collection
	   */
	  var getPostActionsOptions = function getPostActionsOptions() {
	    return postActionsOptions.filter(function (action) {
	      return isAllowedPaymentPrivilege(action.permission);
	    });
	  };
	
	  /**
	   * @name Helpers#getApprovalNotification
	   * @description
	   * Returns approval notification object
	   * @inner
	   *
	   * @type {Function}
	   * @param {Boolean} success Approval result
	   * @returns {{message: string, level: string}}
	   */
	  var getApprovalNotification = function getApprovalNotification(success) {
	    return {
	      message: success ? 'notification.auth.success' : 'notification.auth.fail',
	      level: success ? 'success' : 'danger'
	    };
	  };
	
	  /**
	   * @name Helpers#getNotificationByType
	   * @description
	   * Returns notification object depends on its type
	   *
	   * @type {Function}
	   * @param {object} msg Approval result
	   * @returns {{message: string, level: string}}
	   */
	  var getNotificationByType = function getNotificationByType(msg) {
	    var result = void 0;
	
	    switch (msg.type) {
	      case 'approve':
	        result = getApprovalNotification(msg.result);
	        break;
	      default:
	        result = false;
	    }
	
	    return result;
	  };
	
	  /**
	   * @name Helpers#removeNotification
	   * @type {function}
	   *
	   * @description
	   * Helper to remove notification from the list
	   *
	   * @param {object} notification
	   * @param {Array} notificationsList
	   * @returns {Array}
	   */
	  var removeNotification = function removeNotification(notification, notificationsList) {
	    return notificationsList.filter(function (item) {
	      return item !== notification;
	    });
	  };
	
	  /**
	   * @name Helpers#paymentTypeOptions
	   * @description
	   * Collection of supported payment types to switch between each other
	   * @type {PaymentTypeOption[]}
	   */
	  var paymentTypeOptions = [{
	    label: i18nFilter('label.payment.type.domestic'),
	    value: service.PaymentType.US_DOMESTIC_WIRE
	  }, {
	    label: i18nFilter('label.payment.type.international'),
	    value: service.PaymentType.US_FOREIGN_WIRE
	  }];
	
	  /**
	   * @name Helpers#switchPaymentType
	   * @description
	   * Shows confirmation popup if data in payment has been changed
	   * @type {Function}
	   * @param {module:model-bb-payment-orders-ng.PaymentType} paymentType Payment type identifier
	   * @returns {Boolean} True if payment has not been changed, false otherwise
	   */
	  var switchPaymentType = function switchPaymentType(paymentType) {
	    if (service.paymentHasChanged()) {
	      service.showPaymentSelectorConfirmation(paymentType);
	      return false;
	    }
	
	    return true;
	  };
	
	  /**
	   * @name Helpers#isModal
	   * @type {function}
	   *
	   * @description
	   * Helper to check if we should use modal beneficiary selector
	   *
	   * @param {String} configValue
	   * @returns {Boolean}
	   */
	  var isModal = function isModal(configValue) {
	    return configValue === _constants.BENEFICIARY_SELECTOR_MODAL;
	  };
	
	  /**
	   * @description
	   * Toggle modal selector popup visibility (show/hide)
	   *
	   * @name Helpers#toggleModalSelector
	   * @type {function}
	   * @param {Object} ext
	   */
	  var toggleModalSelector = function toggleModalSelector(ext) {
	    var extension = ext;
	    extension.isModalSelectorOpen = !extension.isModalSelectorOpen;
	  };
	
	  /**
	   * @name Helpers#scrollToFirstError
	   * @description Focus or scroll to first error in ```form``` depending if it is visible or not.
	   * @inner
	   * @type {Function}
	   * @param {Object} form Angular form object to check errors
	   * @returns {Object} First angular element that is invalid
	   */
	  var scrollToFirstError = function scrollToFirstError(form) {
	    var firstError = form.$$controls.find(function (control) {
	      return control.$invalid;
	    }).$$element;
	    var bodyRect = document.body.getBoundingClientRect();
	    var elemRect = firstError[0].getBoundingClientRect();
	    var offset = elemRect.top - bodyRect.top;
	
	    // Correct position to navigation bar's height
	    var navBar = document.querySelector('nav');
	    if (navBar) {
	      var navBarRect = navBar.getBoundingClientRect();
	      var navBarStyles = window.getComputedStyle(navBar, null);
	
	      if (navBarStyles.position === 'fixed' && navBarRect.top === 0) {
	        offset -= navBarRect.height;
	      }
	    }
	
	    window.scrollTo({
	      top: offset,
	      behavior: 'smooth'
	    });
	
	    return firstError;
	  };
	
	  /**
	   * @name Helpers#reviewPayment
	   * @type {function}
	   *
	   * @description
	   * Called when submitting payment for review, it actually calls a hook that
	   * can be customized with all the validations needed by the specific project.
	   *
	   * @param {object} $ctrl Payment controller
	   * @param {object} form Angular form object
	   * @returns {Promise|HTMLElement}
	   */
	  var reviewPayment = function reviewPayment($ctrl, form) {
	    if (form.$invalid) {
	      // Show validation messages for complex fields
	      Object.assign(form, { showSpecialValidationMessages: true });
	      return scrollToFirstError(form);
	    }
	
	    // Hide validation messages for complex fields (if any)
	    Object.assign(form, { showSpecialValidationMessages: false });
	
	    return $ctrl.reviewPayment();
	  };
	
	  /**
	   * @name Helpers#formUntouched
	   * @type {Function}
	   *
	   * @description
	   * Checks if form model has been changed
	   * @returns {Boolean} Wheter model has been updated or not
	   */
	  var formUntouched = function formUntouched() {
	    var payment = getPayment();
	
	    // from
	    var hasDebitAccount = Boolean(payment.debitAccount);
	    // to
	    var beneficiary = payment.beneficiary;
	    var hasBeneficiaryName = Boolean(beneficiary.name);
	    var hasBeneficiaryMessage = Boolean(beneficiary.message);
	
	    // address
	    var postalAddress = beneficiary.postalAddress;
	    var hasBeneficiaryPostalAddress = Boolean(postalAddress.addressLine1) || Boolean(postalAddress.addressLine2) || Boolean(postalAddress.countrySubDivision) || Boolean(postalAddress.postCode) || Boolean(postalAddress.streetName) || Boolean(postalAddress.town);
	
	    // beneficiary's bank
	    var bank = beneficiary.bank;
	    var hasBeneficiaryBank = Boolean(bank.accountNumber) || Boolean(bank.code) || Boolean(bank.message) || Boolean(bank.name);
	
	    var bankPostalAddress = bank.postalAddress;
	    var hasBeneficiaryBankPostalAddress = Boolean(bankPostalAddress.addressLine1) || Boolean(bankPostalAddress.addressLine2) || Boolean(bankPostalAddress.countrySubDivision) || Boolean(bankPostalAddress.postCode) || Boolean(bankPostalAddress.streetName) || Boolean(bankPostalAddress.town);
	
	    // correspondent bank
	    var hasCorrespondentBank = Boolean(beneficiary.correspondentBank.code) || Boolean(beneficiary.correspondentBank.name);
	
	    // amount
	    var hasAmountValue = parseFloat(payment.amount.value) > 0;
	
	    // payment reference
	    var hasPaymentReference = Boolean(payment.paymentReference);
	
	    // schedule
	    var today = new Date();
	    var paymentStartDate = payment.schedule.startDate;
	    var sameStartDate = today.getYear() === paymentStartDate.getYear() && today.getMonth() === paymentStartDate.getMonth() && today.getDate() === paymentStartDate.getDate();
	
	    return !hasDebitAccount && !hasBeneficiaryName && !hasBeneficiaryMessage && !hasBeneficiaryPostalAddress && !hasBeneficiaryBank && !hasBeneficiaryBankPostalAddress && !hasCorrespondentBank && !hasAmountValue && !hasPaymentReference && sameStartDate && payment.schedule.transferFrequency.value === _constants.TransferFrequency.ONCE && payment.endingType === _constants.RecurrenceEnding.NEVER;
	  };
	
	  return {
	    get template() {
	      return templates[router.getRoute()];
	    },
	    get states() {
	      return _constants.USStates;
	    },
	    get recurrenceEnding() {
	      return _constants.RecurrenceEnding;
	    },
	    get singleFrequency() {
	      return _constants.SingleFrequency;
	    },
	    get paymentReferencePattern() {
	      return _constants.PaymentReferencePattern;
	    },
	    maxDigits: maxDigits,
	    currencies: currencies,
	    minOccurrences: minOccurrences,
	    maxOccurences: maxOccurences,
	    charCounterConfig: charCounterConfig,
	    getPayment: getPayment,
	    getSchedule: getSchedule,
	    getDebitAccounts: getDebitAccounts,
	    getBeneficiary: getBeneficiary,
	    getBeneficiaryPostalAddress: getBeneficiaryPostalAddress,
	    getBeneficiaryBank: getBeneficiaryBank,
	    getBeneficiaryCorrespondentBank: getBeneficiaryCorrespondentBank,
	    getReview: getReview,
	    getMinDate: getMinDate,
	    getScheduleText: getScheduleText,
	    getFrequencies: getFrequencies,
	    setEndDate: setEndDate,
	    loadContactsByName: loadContactsByName,
	    selectContact: selectContact,
	    selectContactModal: selectContactModal,
	    resetContact: resetContact,
	    setDefaultOcurrencesValue: setDefaultOcurrencesValue,
	    getBeneficiaryAddressText: getBeneficiaryAddressText,
	    getBankAddressText: getBankAddressText,
	    isSaveNewContactEnabled: isSaveNewContactEnabled,
	    formToContact: formToContact,
	    formToPayment: formToPayment,
	    canSaveDraft: canSaveDraft,
	    getDraftPayment: getDraftPayment,
	    deleteDraft: deleteDraft,
	    closeEditDraft: closeEditDraft,
	    updateDraft: updateDraft,
	    isAllowedPaymentPrivilege: isAllowedPaymentPrivilege,
	    getPostActionsOptions: getPostActionsOptions,
	    getNotificationByType: getNotificationByType,
	    removeNotification: removeNotification,
	    paymentTypeOptions: paymentTypeOptions,
	    switchPaymentType: switchPaymentType,
	    isModal: isModal,
	    toggleModalSelector: toggleModalSelector,
	    reviewPayment: reviewPayment,
	    formUntouched: formUntouched
	  };
	};
	
	/**
	 * Post Action Option type definition
	 * @typedef {Object} PostActionOption
	 * @property {Number} id - Unique id to identify the option
	 * @property {String} key - Translation key
	 * @property {module:widget-bb-initiate-us-payment-ng.SubmitPostActions} postAction
	 *   Type of post action
	 * @property {?Boolean} selected - Indicates if it is selected or not
	 * @property {String} permission - Permission that allows to select the option
	 */
	
	/**
	 * Payment Type Option type definition
	 * @typedef {Object} PaymentTypeOption
	 * @property {String} label                                        - Localized payment type option
	 * @property {module:model-bb-payment-orders-ng.PaymentType} value - Payment type identifier
	 */

/***/ }),
/* 93 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_93__;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(91);
	
	exports.default = function (_ref) {
	  var service = _ref.service;
	  return {
	    'widget-bb-initiate-us-payment.payment-type.selected': function widgetBbInitiateUsPaymentPaymentTypeSelected(selectedPaymentType) {
	      if (_constants.PaymentType === selectedPaymentType) {
	        service.show();
	      } else {
	        service.hide();
	      }
	    }
	  };
	};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(91);
	
	/**
	 * @name Hooks
	 * @type {Object}
	 */
	exports.default = {
	  /**
	   * @name Hooks#defaultPaymentType
	   * @type {Function}
	   *
	   * @description
	   * Gets the current extension payment type
	   *
	   * @returns {String} Default payment type
	   */
	  defaultPaymentType: function defaultPaymentType() {
	    return _constants.PaymentType;
	  },
	
	  /**
	   * @name Hooks#defaultScheduleRepeat
	   * @type {Function}
	   *
	   * @description
	   * Get the default repeat value of minimum ocurrences
	   *
	   * @returns {Number} Default schedule repeat default value
	   */
	  defaultScheduleRepeat: function defaultScheduleRepeat() {
	    return _constants.ScheduleRepeatValue;
	  }
	};

/***/ }),
/* 96 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_96__;

/***/ }),
/* 97 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_97__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bus-initiate-payment-us-domestic-wire-ng.js.map