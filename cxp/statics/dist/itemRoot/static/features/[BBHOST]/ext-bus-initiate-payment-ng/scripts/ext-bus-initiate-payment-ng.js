(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-account-selector-ng"), require("ui-bb-currency-input-ng"), require("ui-bb-char-counter-ng"), require("ui-bb-calendar-popup-ng"), require("ui-bb-expandable-ng"), require("vendor-bb-angular-ng-messages"), require("ui-bb-account-card-ng"), require("vendor-bb-uib-alert"), require("ui-bb-confirm-ng"), require("ui-bb-switcher-ng"), require("vendor-bb-angular"), require("vendor-bb-uib-popover"), require("vendor-bb-angular-sanitize"), require("ui-bb-substitute-error-ng"), require("ui-bb-parent-responsiveness-ng"), require("ui-bb-credit-suggest-ng"), require("ui-bb-number-input-ng"), require("ui-bb-button-spinner-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bus-format-amount-ng"), require("ui-bb-submit-dropup-ng"), require("ui-bus-beneficiary-select-modal-ng"), require("ui-bb-form-navigate-away-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bus-initiate-payment-ng", ["vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "ui-bb-loading-overlay-ng", "ui-bb-account-selector-ng", "ui-bb-currency-input-ng", "ui-bb-char-counter-ng", "ui-bb-calendar-popup-ng", "ui-bb-expandable-ng", "vendor-bb-angular-ng-messages", "ui-bb-account-card-ng", "vendor-bb-uib-alert", "ui-bb-confirm-ng", "ui-bb-switcher-ng", "vendor-bb-angular", "vendor-bb-uib-popover", "vendor-bb-angular-sanitize", "ui-bb-substitute-error-ng", "ui-bb-parent-responsiveness-ng", "ui-bb-credit-suggest-ng", "ui-bb-number-input-ng", "ui-bb-button-spinner-ng", "ui-bb-empty-state-ng", "ui-bb-notification-stripe-ng", "ui-bus-format-amount-ng", "ui-bb-submit-dropup-ng", "ui-bus-beneficiary-select-modal-ng", "ui-bb-form-navigate-away-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bus-initiate-payment-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-account-selector-ng"), require("ui-bb-currency-input-ng"), require("ui-bb-char-counter-ng"), require("ui-bb-calendar-popup-ng"), require("ui-bb-expandable-ng"), require("vendor-bb-angular-ng-messages"), require("ui-bb-account-card-ng"), require("vendor-bb-uib-alert"), require("ui-bb-confirm-ng"), require("ui-bb-switcher-ng"), require("vendor-bb-angular"), require("vendor-bb-uib-popover"), require("vendor-bb-angular-sanitize"), require("ui-bb-substitute-error-ng"), require("ui-bb-parent-responsiveness-ng"), require("ui-bb-credit-suggest-ng"), require("ui-bb-number-input-ng"), require("ui-bb-button-spinner-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bus-format-amount-ng"), require("ui-bb-submit-dropup-ng"), require("ui-bus-beneficiary-select-modal-ng"), require("ui-bb-form-navigate-away-ng"));
	else
		root["ext-bus-initiate-payment-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["ui-bb-loading-overlay-ng"], root["ui-bb-account-selector-ng"], root["ui-bb-currency-input-ng"], root["ui-bb-char-counter-ng"], root["ui-bb-calendar-popup-ng"], root["ui-bb-expandable-ng"], root["vendor-bb-angular-ng-messages"], root["ui-bb-account-card-ng"], root["vendor-bb-uib-alert"], root["ui-bb-confirm-ng"], root["ui-bb-switcher-ng"], root["vendor-bb-angular"], root["vendor-bb-uib-popover"], root["vendor-bb-angular-sanitize"], root["ui-bb-substitute-error-ng"], root["ui-bb-parent-responsiveness-ng"], root["ui-bb-credit-suggest-ng"], root["ui-bb-number-input-ng"], root["ui-bb-button-spinner-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-notification-stripe-ng"], root["ui-bus-format-amount-ng"], root["ui-bb-submit-dropup-ng"], root["ui-bus-beneficiary-select-modal-ng"], root["ui-bb-form-navigate-away-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_80__, __WEBPACK_EXTERNAL_MODULE_81__, __WEBPACK_EXTERNAL_MODULE_82__, __WEBPACK_EXTERNAL_MODULE_83__) {
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

	module.exports = __webpack_require__(79);

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
/* 14 */,
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
/* 28 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.helpers = exports.hooks = exports.intents = exports.dependencyKeys = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(2);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _vendorBbAngularNgMessages = __webpack_require__(10);
	
	var _vendorBbAngularNgMessages2 = _interopRequireDefault(_vendorBbAngularNgMessages);
	
	var _vendorBbUibPopover = __webpack_require__(23);
	
	var _vendorBbUibPopover2 = _interopRequireDefault(_vendorBbUibPopover);
	
	var _vendorBbAngularSanitize = __webpack_require__(24);
	
	var _vendorBbAngularSanitize2 = _interopRequireDefault(_vendorBbAngularSanitize);
	
	var _vendorBbUibAlert = __webpack_require__(12);
	
	var _vendorBbUibAlert2 = _interopRequireDefault(_vendorBbUibAlert);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(25);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbI18nNg = __webpack_require__(3);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbAccountSelectorNg = __webpack_require__(5);
	
	var _uiBbAccountSelectorNg2 = _interopRequireDefault(_uiBbAccountSelectorNg);
	
	var _uiBbCurrencyInputNg = __webpack_require__(6);
	
	var _uiBbCurrencyInputNg2 = _interopRequireDefault(_uiBbCurrencyInputNg);
	
	var _uiBbParentResponsivenessNg = __webpack_require__(26);
	
	var _uiBbParentResponsivenessNg2 = _interopRequireDefault(_uiBbParentResponsivenessNg);
	
	var _uiBbCreditSuggestNg = __webpack_require__(27);
	
	var _uiBbCreditSuggestNg2 = _interopRequireDefault(_uiBbCreditSuggestNg);
	
	var _uiBbSwitcherNg = __webpack_require__(16);
	
	var _uiBbSwitcherNg2 = _interopRequireDefault(_uiBbSwitcherNg);
	
	var _uiBbExpandableNg = __webpack_require__(9);
	
	var _uiBbExpandableNg2 = _interopRequireDefault(_uiBbExpandableNg);
	
	var _uiBbCalendarPopupNg = __webpack_require__(8);
	
	var _uiBbCalendarPopupNg2 = _interopRequireDefault(_uiBbCalendarPopupNg);
	
	var _uiBbNumberInputNg = __webpack_require__(28);
	
	var _uiBbNumberInputNg2 = _interopRequireDefault(_uiBbNumberInputNg);
	
	var _uiBbAccountCardNg = __webpack_require__(11);
	
	var _uiBbAccountCardNg2 = _interopRequireDefault(_uiBbAccountCardNg);
	
	var _uiBbConfirmNg = __webpack_require__(13);
	
	var _uiBbConfirmNg2 = _interopRequireDefault(_uiBbConfirmNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(4);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBbCharCounterNg = __webpack_require__(7);
	
	var _uiBbCharCounterNg2 = _interopRequireDefault(_uiBbCharCounterNg);
	
	var _uiBusFormatAmountNg = __webpack_require__(80);
	
	var _uiBusFormatAmountNg2 = _interopRequireDefault(_uiBusFormatAmountNg);
	
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
	
	var _hooks = __webpack_require__(84);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	var _helpers = __webpack_require__(86);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _intents = __webpack_require__(87);
	
	var _intents2 = _interopRequireDefault(_intents);
	
	var _events = __webpack_require__(88);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bus-initiate-payment-ng
	 *
	 * @description
	 * Business extension for widget-bb-initiate-payment-ng
	 */
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _vendorBbAngularNgMessages2.default, _vendorBbUibPopover2.default, _vendorBbAngularSanitize2.default, _vendorBbUibAlert2.default, _uiBbSubstituteErrorNg2.default, _uiBbI18nNg2.default, _uiBbAccountSelectorNg2.default, _uiBbCurrencyInputNg2.default, _uiBbParentResponsivenessNg2.default, _uiBbCreditSuggestNg2.default, _uiBbSwitcherNg2.default, _uiBbExpandableNg2.default, _uiBbCalendarPopupNg2.default, _uiBbNumberInputNg2.default, _uiBbAccountCardNg2.default, _uiBbConfirmNg2.default, _uiBbLoadingOverlayNg2.default, _uiBbCharCounterNg2.default, _uiBusFormatAmountNg2.default, _uiBbSubmitDropupNg2.default, _uiBbEmptyStateNg2.default, _uiBbNotificationStripeNg2.default, _uiBusBeneficiarySelectModalNg2.default, _uiBbButtonSpinnerNg2.default, _uiBbFormNavigateAwayNg2.default];
	
	var intents = exports.intents = _intents2.default;
	
	var hooks = exports.hooks = extHooks;
	
	var helpers = exports.helpers = _helpers2.default;
	
	var events = exports.events = _events2.default;

/***/ }),
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.processCurrencies = exports.getRecurringTransactionDay = exports.processAccountsTo = undefined;
	
	var _constants = __webpack_require__(85);
	
	/**
	 * @name Hooks#processAccountsTo
	 * @type {function}
	 *
	 * @description
	 * Hook for processing account list in 'to' field (credit).
	 * Assigned to $ctrl.accountsTo.
	 *
	 * @param {object} debitAccount Selected debit account (can be null).
	 * @param {function} getCreditAccounts Function to retrieve all credit accounts
	 * @param {function} getExternalContacts Function to retrieve all external contacts
	 * formatted like Product kind
	 * @returns {Promise.<any[]>} Promise that retrieves array of accounts.
	 */
	var processAccountsTo = exports.processAccountsTo = function processAccountsTo(debitAccount, getCreditAccounts, getExternalAccounts) {
	  return getCreditAccounts(debitAccount.id || null).then(function (accounts) {
	    if (!debitAccount.id || debitAccount.externalTransferAllowed) {
	      return getExternalAccounts().then(function (contacts) {
	        return accounts.concat(contacts);
	      })
	      // Failing loading contacts should not stop payments
	      .catch(function () {
	        return accounts;
	      });
	    }
	    return accounts;
	  });
	};
	
	/**
	 * @name Hooks#getRecurringTransactionDay
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
	var getRecurringTransactionDay = exports.getRecurringTransactionDay = function getRecurringTransactionDay(schedule) {
	  switch (schedule.transferFrequency.value) {
	    case 'YEARLY':
	      return schedule.startDate.getMonth() + 1;
	    case 'MONTHLY':
	      return schedule.startDate.getDate();
	    default:
	      return schedule.startDate.getDay() + 1;
	  }
	};
	
	/**
	 * @name Hooks#processCurrencies
	 * @type {function}
	 *
	 * @description
	 * Processes currencies array returned from the service
	 * Returns only 'EUR' | DEFAULT_CURRENCY For SEPA payment
	 *
	 * @param {object[]} currencies Initial currencies
	 * @returns {object[]} Processed currencies
	 */
	var processCurrencies = exports.processCurrencies = function processCurrencies() {
	  var currencies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  return currencies.filter(function (item) {
	    return item.name === _constants.DEFAULT_CURRENCY;
	  });
	};

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description
	 * Array of recurring frequency objects with the following properties (all mandatory)
	 *
	 * @property {string} object.name Translation key of the label
	 * that will be displayed to the end user
	 * @property {string} object.value Denotes frequency type of transfer.
	 * Possible values: DAILY/WEEKLY/MONTHLY/YEARLY
	 * @property {number} object.every Indicates skip interval of transfer.
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
	 * @name transferFrequencies
	 * @type {array}
	 */
	var transferFrequencies = exports.transferFrequencies = [{
	  name: 'form.schedule.frequency.daily',
	  value: 'DAILY',
	  every: 1
	}, {
	  name: 'form.schedule.frequency.weekly',
	  value: 'WEEKLY',
	  every: 1
	}, {
	  name: 'form.schedule.frequency.monthly',
	  value: 'MONTHLY',
	  every: 1
	}, {
	  name: 'form.schedule.frequency.quarterly',
	  value: 'QUARTERLY',
	  every: 1
	}, {
	  name: 'form.schedule.frequency.annually',
	  value: 'YEARLY',
	  every: 1
	}];
	
	var specialSymbols = "/-?:().,'+";
	var escapedSpecialSymbols = specialSymbols.split('').map(function (a) {
	  return '|\\' + a;
	}).join('');
	/**
	 * @description
	 * Pattern for payment reference validation
	 * @name paymentReferencePattern
	 * @type {string}
	 */
	var paymentReferencePattern = exports.paymentReferencePattern = '^(\\w|\\d| ' + escapedSpecialSymbols + ')*$';
	
	/**
	 * @description
	 * Submit payment flow types
	 * @name submitButtonTypes
	 * @type {Array<object>}
	 */
	var allSubmitButtonTypes = exports.allSubmitButtonTypes = [{
	  id: 1,
	  key: 'label.review.submit',
	  afterMethod: false,
	  selected: true,
	  permission: 'create'
	}, {
	  id: 2,
	  key: 'label.review.submit.and.create',
	  afterMethod: 'create',
	  permission: 'create'
	}, {
	  id: 3,
	  key: 'label.review.submit.and.approve',
	  afterMethod: 'approve',
	  permission: 'approve'
	}];
	
	/**
	 * @description
	 * Maximum IBAN length
	 * @name IBAN_MAX_LENGTH
	 * @type {number}
	 */
	var IBAN_MAX_LENGTH = exports.IBAN_MAX_LENGTH = 36;
	
	/**
	 * @name INIT_VALIDATION_STATE
	 * @type {{valid: boolean, messages: Array}}
	 * @description
	 * Initial state before backend validation (payment is valid)
	 */
	var INIT_VALIDATION_STATE = exports.INIT_VALIDATION_STATE = { valid: true, messages: [] };
	
	/**
	 * @name BENEFICIARY_SELECTOR_MODAL
	 * @type {String}
	 * @description
	 * Beneficiary selector modal type
	 */
	var BENEFICIARY_SELECTOR_MODAL = exports.BENEFICIARY_SELECTOR_MODAL = 'modal';
	
	/**
	 * @name DEFAULT_CURRENCY
	 * @type {String}
	 * @description
	 * Default currency code
	 */
	var DEFAULT_CURRENCY = exports.DEFAULT_CURRENCY = 'EUR';

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _constants = __webpack_require__(85);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* globals window, document */
	
	
	var crossCurrencyMessages = { 'cross-currency': true };
	var minOccurrences = 2;
	var maxOccurences = 200;
	var maxDigits = 13;
	var expanded = {};
	var charCounterConfig = {
	  description: {
	    maxChars: 140
	  },
	  reference: {
	    maxChars: 35
	  }
	};
	var draftSaving = void 0;
	var draftSaveError = void 0;
	var draftSaveSuccess = void 0;
	var paymentSubmitSuccess = void 0;
	
	/**
	 * @name hideAfterPaymentMessage
	 * @type {function}
	 * @description
	 * Clear payment submit result variable to hide respective message
	 *
	 * @returns {undefined}
	 */
	var hideAfterPaymentMessage = function hideAfterPaymentMessage() {
	  paymentSubmitSuccess = null;
	};
	
	/**
	 * @name hideDraftMessage
	 * @type {function}
	 * @description
	 * Clear draft result variables to hide respective messages
	 *
	 * @returns {undefined}
	 */
	var hideDraftMessage = function hideDraftMessage() {
	  draftSaveError = null;
	  draftSaveSuccess = null;
	};
	
	/**
	 * @name hideValidationMessage
	 * @type {function}
	 * @description
	 * Remove validation error item from the list
	 *
	 * @param {object} validation wrapper
	 * @param {object} item
	 */
	var hideValidationMessage = function hideValidationMessage(validation, item) {
	  // eslint-disable-next-line no-param-reassign
	  validation.messages = validation.messages.filter(function (msg) {
	    return msg !== item;
	  });
	};
	
	/**
	 * @name hideAllMessages
	 * @type {function}
	 * @description
	 * Hide all messages
	 *
	 * @param {Object} $ctrl controller
	 */
	var hideAllMessages = function hideAllMessages($ctrl) {
	  hideDraftMessage();
	  hideAfterPaymentMessage();
	  Object.assign($ctrl, {
	    paymentValidation: _constants.INIT_VALIDATION_STATE,
	    notifications: []
	  });
	};
	
	/**
	 * @description
	 * Returns cross-currency messages if they should be shown
	 *
	 * @name showCrossCurrencyMessage
	 * @type {function}
	 * @param {object} $ctrl Widget controller
	 * @returns {object} Cross currency messages
	 */
	var showCrossCurrencyMessage = function showCrossCurrencyMessage($ctrl) {
	  var isRateVisible = $ctrl.paymentPreferences.showExchangeRate && $ctrl.rate && $ctrl.payment.from && parseFloat($ctrl.payment.amount.value);
	  var isDifferentCurrencies = $ctrl.payment.amount.currency !== ($ctrl.payment.from ? $ctrl.payment.from.currency : $ctrl.payment.amount.currency);
	
	  return isRateVisible && isDifferentCurrencies ? crossCurrencyMessages : null;
	};
	
	/**
	 * @description
	 * Checks if layout should show 'Urgent payment' switcher
	 *
	 * @name canSelectUrgentPayment
	 * @type {function}
	 * @param {object} $ctrl Widget controller
	 * @returns {boolean} True if urget payment switchet should be shown, false otherwise
	 */
	var canSelectUrgentPayment = function canSelectUrgentPayment($ctrl) {
	  var debitAccount = $ctrl.payment.from || {};
	  return !!($ctrl.paymentPreferences.urgent && debitAccount && debitAccount.urgentTransferAllowed);
	};
	
	/**
	 * @description
	 * Resets payment order
	 *
	 * @name resetPayment
	 * @type {function}
	 * @param {object} $ctrl Widget controller
	 * @param {object} scope Template scope
	 *
	 * @returns {Promise<any>}
	 */
	var resetPayment = function resetPayment($ctrl, scope) {
	  return $ctrl.resetPayment().then(function () {
	    Object.assign(scope, { step: 'form' });
	  });
	};
	
	/**
	 * @description
	 * Makes new payment request and changes step on success
	 *
	 * @name makePayment
	 * @type {function}
	 * @param {object} $ctrl Payment controller
	 * @param {object} scope Parent ng scope
	 * @returns {object} Payment request Promise
	 */
	var makePayment = function makePayment($ctrl, scope) {
	  return $ctrl.makePayment($ctrl.payment).then(function (data) {
	    Object.assign(scope, { step: 'confirmation' });
	    window.scrollTo(0, 0);
	    return data;
	  }).catch(function (err) {
	    return Promise.reject(err);
	  });
	};
	
	/**
	 * @description
	 * Handler for Account From change action
	 *
	 * @name onAccountChange
	 * @type {function}
	 * @param {object} $ctrl Payment controller
	 * @param {object} selectedAccount
	 * @returns {object} A Promise object
	 */
	var onAccountChange = function onAccountChange($ctrl, selectedAccount) {
	  // eslint-disable-next-line no-param-reassign
	  $ctrl.payment.from = Object.assign({}, selectedAccount);
	  return $ctrl.onAccountFromChange();
	};
	
	/**
	 * @description
	 * Toggle group in credit-suggest component
	 *
	 * @name toggleCreditSuggestGroup
	 * @type {function}
	 * @param {object} event Event object
	 * @param {object} model
	 * @param {object} ctrl Widget's controller
	 */
	var toggleCreditSuggestGroup = function toggleCreditSuggestGroup(event, model, ctrl) {
	  // Prevent suggestion list to be closed
	  event.stopPropagation();
	
	  expanded[model.more || model.less] = !!model.more;
	
	  ctrl.open();
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
	 * @name reviewPayment
	 * @type {function}
	 *
	 * @description
	 * Called when submitting payment for review, it actually calls a hook that
	 * can be customized with all the validations needed by the specific project.
	 *
	 * @param {object} $ctrl Payment controller
	 * @param {object} scope Parent ng scope
	 * @param {object} form Angular form object
	 * @returns {Promise|HTMLElement}
	 */
	var reviewPayment = function reviewPayment($ctrl, scope, form) {
	  if (form.$invalid) {
	    // Show validation messages for complex fields
	    Object.assign(form, { showSpecialValidationMessages: true });
	    return scrollToFirstError(form);
	  }
	
	  // Hide validation messages for complex fields (if any)
	  Object.assign(form, { showSpecialValidationMessages: false });
	
	  return $ctrl.reviewPayment($ctrl.payment).then(function () {
	    hideAllMessages($ctrl);
	    $ctrl.clearPaymentError();
	    Object.assign(scope, { step: 'review' });
	    window.scrollTo(0, 0);
	  }).catch(function () {
	    window.scrollTo(0, 0);
	  });
	};
	
	var helpers = function helpers(context) {
	  var i18nFilter = context.$filter('i18n');
	  var dateFilter = context.$filter('date');
	
	  /**
	   * @description
	   * Transforms provided accounts to custom structure. External contacts account list will be
	   * flattened to be molded to same structure as internal accounts
	   * (identifier=IBAN/BBAN, name=contactperson).
	   *
	   * @name getAccounts
	   * @type {function}
	   * @param {array<object>} accounts
	   * @returns {array<object>} View accounts
	   */
	  var normalizeAccounts = function normalizeAccounts(accounts) {
	    if (!accounts) {
	      return [].concat(accounts || []);
	    }
	
	    var internalAccountView = accounts.filter(function (account) {
	      return !account.external;
	    });
	
	    var externalAccountView = [];
	
	    // add group names per contact for externals
	    accounts.filter(function (account) {
	      return account.external;
	    }).forEach(function (contact) {
	      var contactAccounts = [];
	      if (contact.accounts) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = contact.accounts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var account = _step.value;
	
	            Object.assign(account, {
	              identifier: account.IBAN || account.accountNumber,
	              accountName: account.accountName || account.name || account.alias,
	              name: contact.name,
	              contactPerson: contact.contactPerson || contact.name,
	              external: true
	            });
	            contactAccounts.push(account);
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
	      }
	      externalAccountView = externalAccountView.concat(contactAccounts);
	    });
	
	    return [].concat(_toConsumableArray(internalAccountView), _toConsumableArray(externalAccountView));
	  };
	
	  /**
	   * @description
	   * Compiles the scheduling description out of payment object params.
	   *
	   * In this process, following translation keys are being used:
	   *
	   * form.schedule.starting, for word "Starting"
	   *
	   * form.schedule.today, for word "Today"
	   *
	   * form.schedule.on, for word "On" (used before date to form "on 01.01.2017")
	   *
	   * form.schedule.until, for word "until" (used before date to form "until 01.01.2017")
	   *
	   * form.schedule.repeat.count, for word "times" (used after repeat count to form "5 times")
	   *
	   * and name of the transfer frequency set in constants file
	   *
	   * @name getScheduleText
	   * @type {function}
	   * @param {object} $ctrl Widget controller
	   * @returns {string} Compiled text that can be used as scheduling value in views
	   */
	  var getScheduleText = function getScheduleText($ctrl) {
	    var payment = $ctrl.payment,
	        EndingType = $ctrl.EndingType,
	        singleTransfer = $ctrl.singleTransfer;
	
	    var words = [];
	    var today = new Date().setHours(0, 0, 0, 0);
	    var startDate = new Date(payment.schedule.startDate);
	    var isToday = startDate.setHours(0, 0, 0, 0) === today;
	    var multipleOccurrences = payment.schedule.transferFrequency.value !== singleTransfer.value;
	    var hasEnd = payment.endingType !== EndingType.NEVER;
	
	    // add frequency
	    words.push(i18nFilter(payment.schedule.transferFrequency.name));
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
	      words.push(dateFilter(payment.schedule.startDate));
	    }
	
	    var hasLimitedOccurences = hasEnd && multipleOccurrences;
	    var isMinOccurences = !payment.schedule.repeat || payment.schedule.repeat < minOccurrences;
	
	    // if there are limited number of occurrences,
	    // add comma for the last word, so that there is no space between them
	    if (hasLimitedOccurences && !(payment.endingType === EndingType.AFTER && isMinOccurences)) {
	      words[words.length - 1] += ',';
	    }
	
	    if (hasEnd && multipleOccurrences) {
	      // there is an end for this schedule
	      // based on the type of ending construct words differently
	      if (payment.endingType === EndingType.ON) {
	        words.push(i18nFilter('form.schedule.until'));
	        words.push(dateFilter(payment.schedule.endDate));
	      } else if (payment.schedule.repeat >= minOccurrences) {
	        words.push(payment.schedule.repeat);
	        words.push(payment.schedule.repeat ? i18nFilter('form.schedule.repeat.count') : '');
	      }
	    }
	
	    // output everything together
	    return words.join(' ');
	  };
	
	  /**
	   * @description
	   * Returns frequencies for payment depending on occurences number
	   *
	   * @name getFrequencies
	   * @type {function}
	   * @param {object} $ctrl Widget controller
	   * @returns {array<object>} Array of transfer frequencies
	   */
	  var getFrequencies = function getFrequencies($ctrl) {
	    return [$ctrl.singleTransfer].concat($ctrl.paymentPreferences.recurring ? _constants.transferFrequencies : []);
	  };
	
	  /**
	   * @name getMinDate
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
	   * @name initPayment
	   * @type {function}
	   * @description
	   * Initiate payment form initialization and clear possible
	   * error validation results
	   *
	   * @param $ctrl Widget controller
	   * @param form to be cleared
	   */
	  var initPayment = function initPayment($ctrl, form) {
	    form.credit.$setValidity('iban', true);
	    Object.assign(form, { showSpecialValidationMessages: false });
	    $ctrl.initPayment();
	  };
	
	  /**
	   * @name canSaveDraft
	   * @type {function}
	   * @description
	   * Returns true if at least credit account, beneficiary or any amount
	   * filled in
	   *
	   * @param {object} $ctrl Widget controller
	   * @param {object} formErrors
	   * @returns {boolean}
	   */
	  var canSaveDraft = function canSaveDraft($ctrl) {
	    var formErrors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    var ibanMaxlengthError = $ctrl.payment.to && $ctrl.payment.to.IBAN && $ctrl.payment.to.IBAN.replace(/\s+/g, '').length > _constants.IBAN_MAX_LENGTH;
	
	    var userErrors = Object.keys(formErrors).reduce(function (previousValue, currentItem) {
	      return previousValue === true ? true : currentItem === 'maxlength';
	    }, false) || ibanMaxlengthError;
	
	    return ($ctrl.payment.from || $ctrl.payment.to && $ctrl.payment.to.name || $ctrl.payment.to && $ctrl.payment.to.IBAN || $ctrl.payment.amount.value) && !userErrors;
	  };
	
	  /**
	   * @name saveDraft
	   * @type {function}
	   * @description
	   * Initiate draft payment save
	   *
	   * @param {object} $ctrl Widget controller
	   * @param {object} form to be cleared
	   */
	  var saveDraft = function saveDraft($ctrl, form) {
	    draftSaving = true;
	    hideAllMessages($ctrl);
	    return $ctrl.saveDraft($ctrl.payment).then(function (response) {
	      draftSaveSuccess = response;
	      initPayment($ctrl, form);
	      draftSaving = false;
	      window.scrollTo(0, 0);
	    }).catch(function (err) {
	      draftSaveError = err;
	      draftSaving = false;
	      window.scrollTo(0, 0);
	    });
	  };
	
	  /**
	   * @name editDraft
	   * @type {function}
	   * @description
	   * Initiate draft payment edit save
	   *
	   * @param {object} $ctrl Widget controller
	   */
	  var editDraft = function editDraft($ctrl) {
	    draftSaving = true;
	    hideAllMessages($ctrl);
	    return $ctrl.editDraft($ctrl.payment.id, $ctrl.payment).then(function (response) {
	      draftSaveSuccess = response;
	      draftSaving = false;
	      context.intents.viewPaymentOrders();
	    }).catch(function (err) {
	      draftSaveError = err;
	      draftSaving = false;
	      window.scrollTo(0, 0);
	    });
	  };
	
	  /**
	   * @name isDraftSaving
	   * @type {function}
	   * @description
	   * Returns true if draft payment is being saved and false otherwise
	   *
	   * @returns {boolean}
	   */
	  var isDraftSaving = function isDraftSaving() {
	    return draftSaving;
	  };
	
	  /**
	   * @name isDraftSaveError
	   * @type {function}
	   * @description
	   * Returns null if draft payment is saved successfully
	   * and error object otherwise
	   *
	   * @returns {object|null}
	   */
	  var isDraftSaveError = function isDraftSaveError() {
	    return draftSaveError;
	  };
	
	  /**
	   * @name isDraftSaveSuccess
	   * @type {function}
	   * @description
	   * Returns null if draft payment is saved with error
	   * and response object otherwise
	   *
	   * @returns {object|null}
	   */
	  var isDraftSaveSuccess = function isDraftSaveSuccess() {
	    return draftSaveSuccess;
	  };
	
	  /**
	   * @name formUntouched
	   * @type {function}
	   * @description
	   * Returns true if the form fields are in initial values and false otherwise
	   *
	   * @param {object} $ctrl Widget controller
	   * @returns {boolean}
	   */
	  var formUntouched = function formUntouched($ctrl) {
	    var payment = $ctrl.payment;
	    var today = new Date();
	    var paymentStartDate = payment.schedule.startDate;
	    var sameStartDate = today.getYear() === paymentStartDate.getYear() && today.getMonth() === paymentStartDate.getMonth() && today.getDate() === paymentStartDate.getDate();
	
	    return !payment.from && !(payment.to && payment.to.name) && !payment.amount.value && (payment.description === null || payment.description === '') && (!payment.schedule.repeat || payment.schedule.repeat === minOccurrences) && (payment.paymentReference === null || payment.paymentReference === '') && sameStartDate && payment.schedule.transferFrequency.value === $ctrl.singleTransfer.value && payment.endingType === $ctrl.EndingType.NEVER;
	  };
	
	  var deleteDraft = function deleteDraft($ctrl, intents, draftid) {
	    $ctrl.deleteDraft(draftid).then(function () {
	      intents.viewPaymentOrders();
	    });
	  };
	
	  /**
	   * @name isAfterPaymentSuccess
	   * @type {function}
	   * @description
	   * Returns null if payment is submitted with error
	   * and true otherwise
	   *
	   * @returns {boolean|null}
	   */
	  var isAfterPaymentSuccess = function isAfterPaymentSuccess() {
	    return paymentSubmitSuccess;
	  };
	
	  /**
	   * @name selectPaymentSubmitType
	   * @type {function}
	   * @description
	   * Makes payment and applies after action (create new payment,
	   * approve submitted payment, etc.)
	   *
	   * @param {object} type submit button
	   * @param {object} $ctrl Widget controller
	   * @param {object} scope
	   * @returns {Promise}
	   */
	  var selectPaymentSubmitType = function selectPaymentSubmitType(type, $ctrl, scope) {
	    return makePayment($ctrl, scope).then(function (response) {
	      var paymentId = response.data && response.data.id;
	      paymentSubmitSuccess = true;
	
	      if ($ctrl.draftMode) {
	        Object.assign($ctrl, { draftMode: false });
	        /*
	          Intentionally unhandled promise since when somehow draft delete fails
	          it shouldn't interfere with payment flow.
	        */
	        $ctrl.deleteDraft($ctrl.payment.id);
	      }
	
	      if (type.afterMethod === 'create') {
	        resetPayment($ctrl, scope);
	      }if (type.afterMethod === 'approve') {
	        $ctrl.authorizeAndNotify(paymentId);
	      } else {
	        hideAfterPaymentMessage();
	      }
	    });
	  };
	
	  /**
	   * @name isDraftChanged
	   * @type {function}
	   * @description
	   * Check if the draft is changed by user
	   *
	   * @inner
	   * @param {object} $ctrl controller
	   * @returns {boolean}
	   */
	  var isDraftChanged = function isDraftChanged($ctrl) {
	    var before = Object.assign({}, $ctrl.draftMode);
	    var after = Object.assign({}, $ctrl.purifyDraftPaymentData($ctrl.payment));
	
	    return !(0, _vendorBbAngular.equals)(before, after);
	  };
	
	  /**
	   * @name closeEditDraft
	   * @type {function}
	   * @description
	   * Decides if to show the "save changes" confirmation popup or to
	   * run a callback instead
	   *
	   * @param {object} $ctrl controller
	   * @param {object} ext extension
	   * @param {function} callback function
	   */
	  var closeEditDraft = function closeEditDraft($ctrl, ext, callback) {
	    if (isDraftChanged($ctrl)) {
	      // eslint-disable-next-line no-param-reassign
	      ext.editDraftConfirmOpened = true;
	    } else {
	      // eslint-disable-next-line no-param-reassign
	      ext.editDraftConfirmOpened = false;
	      // eslint-disable-next-line no-unused-expressions
	      typeof callback === 'function' && callback();
	    }
	  };
	
	  /**
	   * @name submitButtonTypes
	   * @type {function}
	   * @description
	   * Returns submit button types allowed by user permissions, or
	   * all types if there are no any permissions provided
	   *
	   * @param {object} privileges allowed
	   * @return {Array}
	   */
	  var submitButtonTypes = function submitButtonTypes(privileges) {
	    return privileges ? _constants.allSubmitButtonTypes.filter(function (type) {
	      return privileges[type.permission];
	    }) : _constants.allSubmitButtonTypes;
	  };
	
	  /**
	   * @name getMessagePrefix
	   * @type {function}
	   * @description
	   * Returns rejected value or "problematic" field name
	   *
	   * @param {object} error
	   * @return {string}
	   */
	  var getMessagePrefix = function getMessagePrefix(error) {
	    var rejectedValue = error.context && error.context.rejectedValue;
	
	    if ((!rejectedValue || rejectedValue === 'null') && error.key) {
	      // get prop name to show in error message
	      rejectedValue = error.key.match(/\w+$/)[0];
	    }
	
	    return rejectedValue;
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
	
	  return {
	    paymentReferencePattern: _constants.paymentReferencePattern,
	    minOccurrences: minOccurrences,
	    maxOccurences: maxOccurences,
	    maxDigits: maxDigits,
	    charCounterConfig: charCounterConfig,
	    submitButtonTypes: submitButtonTypes,
	    showCrossCurrencyMessage: showCrossCurrencyMessage,
	    normalizeAccounts: normalizeAccounts,
	    canSelectUrgentPayment: canSelectUrgentPayment,
	    getScheduleText: getScheduleText,
	    getFrequencies: getFrequencies,
	    resetPayment: resetPayment,
	    makePayment: makePayment,
	    reviewPayment: reviewPayment,
	    toggleCreditSuggestGroup: toggleCreditSuggestGroup,
	    onAccountChange: onAccountChange,
	    getMinDate: getMinDate,
	    canSaveDraft: canSaveDraft,
	    saveDraft: saveDraft,
	    editDraft: editDraft,
	    isDraftSaving: isDraftSaving,
	    isDraftSaveError: isDraftSaveError,
	    isDraftSaveSuccess: isDraftSaveSuccess,
	    hideDraftMessage: hideDraftMessage,
	    formUntouched: formUntouched,
	    initPayment: initPayment,
	    selectPaymentSubmitType: selectPaymentSubmitType,
	    hideAfterPaymentMessage: hideAfterPaymentMessage,
	    isAfterPaymentSuccess: isAfterPaymentSuccess,
	    deleteDraft: deleteDraft,
	    closeEditDraft: closeEditDraft,
	    hideValidationMessage: hideValidationMessage,
	    getMessagePrefix: getMessagePrefix,
	    removeNotification: removeNotification,
	    isModal: isModal,
	    hideAllMessages: hideAllMessages
	  };
	};
	
	exports.default = helpers;

/***/ }),
/* 87 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @description
	 * Intents used in ext-bus-initiate-payment
	 */
	exports.default = function (_ref) {
	  var createRequest = _ref.createRequest;
	  return {
	    viewPaymentOrders: createRequest('view.account.managePayments')
	  };
	};

/***/ }),
/* 88 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var Event = {
	  PAYMENT_CREATE_SUCCESS: 'bb.event.payment.create.success',
	  PAYMENT_AUTH_SUCCESS: 'bb.event.payment.auth.success',
	  PAYMENT_AUTH_FAIL: 'bb.event.payment.auth.fail'
	};
	
	exports.default = function (_ref) {
	  var _ref2;
	
	  var notifications = _ref.notifications,
	      $filter = _ref.$filter;
	
	  var i18n = $filter('i18n');
	  return _ref2 = {}, _defineProperty(_ref2, Event.PAYMENT_AUTH_SUCCESS, function () {
	    notifications.notifySuccess(i18n('notification.auth.success'));
	  }), _defineProperty(_ref2, Event.PAYMENT_AUTH_FAIL, function () {
	    notifications.notifyAlert(i18n('notification.auth.fail'));
	  }), _defineProperty(_ref2, Event.PAYMENT_CREATE_SUCCESS, function (status) {
	    notifications.notifySuccess(i18n('form.label.' + status));
	  }), _ref2;
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bus-initiate-payment-ng.js.map