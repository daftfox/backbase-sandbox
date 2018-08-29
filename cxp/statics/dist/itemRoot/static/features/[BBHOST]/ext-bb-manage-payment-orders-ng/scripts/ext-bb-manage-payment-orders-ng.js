(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-account-selector-ng"), require("ui-bb-confirm-ng"), require("ui-bb-format-amount-ng"), require("ui-bb-substitute-error-ng"), require("vendor-bb-uib-accordion"), require("ui-bb-loading-indicator-ng"), require("ui-bb-load-more-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-date-label-filter-ng"), require("ui-bb-notification-stripe-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-manage-payment-orders-ng", ["vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "ui-bb-loading-overlay-ng", "ui-bb-account-selector-ng", "ui-bb-confirm-ng", "ui-bb-format-amount-ng", "ui-bb-substitute-error-ng", "vendor-bb-uib-accordion", "ui-bb-loading-indicator-ng", "ui-bb-load-more-ng", "ui-bb-empty-state-ng", "ui-bb-date-label-filter-ng", "ui-bb-notification-stripe-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-manage-payment-orders-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-account-selector-ng"), require("ui-bb-confirm-ng"), require("ui-bb-format-amount-ng"), require("ui-bb-substitute-error-ng"), require("vendor-bb-uib-accordion"), require("ui-bb-loading-indicator-ng"), require("ui-bb-load-more-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-date-label-filter-ng"), require("ui-bb-notification-stripe-ng"));
	else
		root["ext-bb-manage-payment-orders-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["ui-bb-loading-overlay-ng"], root["ui-bb-account-selector-ng"], root["ui-bb-confirm-ng"], root["ui-bb-format-amount-ng"], root["ui-bb-substitute-error-ng"], root["vendor-bb-uib-accordion"], root["ui-bb-loading-indicator-ng"], root["ui-bb-load-more-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-date-label-filter-ng"], root["ui-bb-notification-stripe-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_34__, __WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_39__) {
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

	module.exports = __webpack_require__(33);

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
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */,
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
/* 25 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.hooks = exports.helpers = exports.dependencyKeys = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(2);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _vendorBbUibAccordion = __webpack_require__(34);
	
	var _vendorBbUibAccordion2 = _interopRequireDefault(_vendorBbUibAccordion);
	
	var _uiBbI18nNg = __webpack_require__(3);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbFormatAmountNg = __webpack_require__(15);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(35);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(25);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbLoadMoreNg = __webpack_require__(36);
	
	var _uiBbLoadMoreNg2 = _interopRequireDefault(_uiBbLoadMoreNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(4);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(37);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBbDateLabelFilterNg = __webpack_require__(38);
	
	var _uiBbDateLabelFilterNg2 = _interopRequireDefault(_uiBbDateLabelFilterNg);
	
	var _uiBbAccountSelectorNg = __webpack_require__(5);
	
	var _uiBbAccountSelectorNg2 = _interopRequireDefault(_uiBbAccountSelectorNg);
	
	var _uiBbNotificationStripeNg = __webpack_require__(39);
	
	var _uiBbNotificationStripeNg2 = _interopRequireDefault(_uiBbNotificationStripeNg);
	
	var _uiBbConfirmNg = __webpack_require__(13);
	
	var _uiBbConfirmNg2 = _interopRequireDefault(_uiBbConfirmNg);
	
	var _hooks = __webpack_require__(40);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	var _helpers = __webpack_require__(41);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _events = __webpack_require__(43);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bb-manage-payment-orders-ng
	 *
	 * @description
	 * Payment order overview extension.
	 *
	 * @example
	 * <!-- payment order widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bb-manage-payment-orders-ng</value>
	 * </property>
	 *
	 */
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _vendorBbUibAccordion2.default, _uiBbI18nNg2.default, _uiBbFormatAmountNg2.default, _uiBbLoadingIndicatorNg2.default, _uiBbSubstituteErrorNg2.default, _uiBbLoadMoreNg2.default, _uiBbLoadingOverlayNg2.default, _uiBbEmptyStateNg2.default, _uiBbDateLabelFilterNg2.default, _uiBbAccountSelectorNg2.default, _uiBbNotificationStripeNg2.default, _uiBbConfirmNg2.default];
	
	var helpers = exports.helpers = _helpers2.default;
	
	var hooks = exports.hooks = extHooks;
	
	var events = exports.events = _events2.default;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_34__;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_35__;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable import/prefer-default-export */
	var processPaymentOrders = exports.processPaymentOrders = function processPaymentOrders(paymentOrders) {
	  return paymentOrders.map(function (paymentOrder) {
	    return Object.assign({}, paymentOrder, { transactionInformation: paymentOrder.creditTransferTransactionInformation[0] });
	  }).reduce(function (groupedByDate, paymentOrder) {
	    var datesObject = groupedByDate;
	    // get only date part
	    var bookingDateObj = new Date(paymentOrder.requestedExecutionDate);
	    var date = bookingDateObj.toISOString().slice(0, 10);
	
	    if (datesObject[date]) {
	      var clearToAdd = true;
	
	      datesObject[date].forEach(function (element) {
	        if (element.id === paymentOrder.id) {
	          clearToAdd = false;
	        }
	      });
	
	      if (clearToAdd) {
	        datesObject[date].push(paymentOrder);
	      }
	    } else {
	      datesObject[date] = [paymentOrder];
	    }
	
	    return datesObject;
	  }, {});
	};
	
	var processRequestParams = exports.processRequestParams = function processRequestParams(params) {
	  return Object.assign({}, params, {
	    orderBy: 'requestedExecutionDate',
	    direction: 'ASC',
	    executionDateFrom: new Date().toISOString().slice(0, 10),
	    // TODO: add multiple statuses when it will be implemented on the payment service
	    status: 'ACCEPTED'
	  });
	};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(42);
	
	var helpers = function helpers(context) {
	  var i18nFilter = context.$filter('i18n');
	
	  return {
	    /**
	     * @description
	     * Returns either label like now, today or yesterday or the actual date
	     *
	     * @name dateLabel
	     * @type {function}
	     * @param {string} date date
	     *
	     * @returns {string}
	     */
	    dateLabel: function dateLabel(date) {
	      return i18nFilter(_constants.TimePeriod[date]) || date;
	    },
	    /**
	     * @description
	     * Gets translated string of payment mode
	     *
	     * @name getPaymentModeLabel
	     * @type {function}
	     * @param {string} mode payment mode
	     *
	     * @returns {string}
	     */
	    getPaymentModeLabel: function getPaymentModeLabel(mode) {
	      return i18nFilter(_constants.PaymentMode[mode] || _constants.PaymentMode.SINGLE);
	    },
	    /**
	     * @description
	     * Gets translated strings of payment frequency
	     *
	     * @name getFrequencyLabel
	     * @type {function}
	     * @param {string} frequency frequency
	     *
	     * @returns {string}
	     */
	    getFrequencyLabel: function getFrequencyLabel(frequency) {
	      return i18nFilter(_constants.Frequency[frequency]);
	    },
	    /**
	     * @description
	     * Gets strings of exchange rate
	     *
	     * @name getRateLabel
	     * @type {function}
	     * @param {object} rate rate state
	     *
	     * @returns {string}
	     */
	    getRateLabel: function getRateLabel(rate) {
	      return '1 ' + rate.requestParams.currencyFrom + ' = ' + rate.value + ' ' + rate.requestParams.currencyTo;
	    },
	    /**
	     * @description
	     * Determines whether or not exchange rate should be shown
	     * if account currency and payment currency the same
	     *
	     * @name showExchangeRate
	     * @type {function}
	     * @param {object} instructedAmount Information about payment instructed amount
	     * @param {object} rate rate state
	     *
	     * @returns {string}
	     */
	    showExchangeRate: function showExchangeRate(instructedAmount, rate) {
	      return rate.requestParams.currencyFrom !== instructedAmount.currencyCode;
	    }
	  };
	};
	
	exports.default = helpers;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @description
	 * Date Format
	 *
	 * @name dateFormat
	 * @type {string}
	 */
	var dateFormat = exports.dateFormat = 'mediumDate';
	
	/**
	 * @description
	 * Date labels enum
	 *
	 * @name TimePeriod
	 * @type {object}
	 */
	var TimePeriod = exports.TimePeriod = {
	  now: 'date.label.now',
	  today: 'date.label.today',
	  yesterday: 'date.label.yesterday',
	  tomorrow: 'date.label.tomorrow'
	};
	
	/**
	 * @description
	 * Payment mode enum
	 *
	 * @name PaymentMode
	 * @type {object}
	 */
	var PaymentMode = exports.PaymentMode = {
	  SINGLE: 'payment.mode.single',
	  RECURRING: 'payment.mode.recurring'
	};
	
	/**
	 * @description
	 * Frequency enum
	 *
	 * @name Frequency
	 * @type {object}
	 */
	var Frequency = exports.Frequency = {
	  DAILY: 'payment.frequency.daily',
	  WEEKLY: 'payment.frequency.weekly',
	  MONTHLY: 'payment.frequency.monthly',
	  QUARTERLY: 'payment.frequency.quarterly',
	  YEARLY: 'payment.frequency.yearly'
	};
	
	/**
	 * @description
	 * Event names
	 *
	 * @name Event
	 * @type {object}
	 */
	var Event = exports.Event = {
	  PAYMENT_EDIT_DONE: 'bb.event.payment.edit.done',
	  PAYMENT_CANCEL_SUCCESS: 'bb.event.payment.cancel.success',
	  PAYMENT_CANCEL_ERROR: 'bb.event.payment.cancel.error'
	};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(42);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	exports.default = function (_ref) {
	  var _ref2;
	
	  var notifications = _ref.notifications,
	      $filter = _ref.$filter;
	
	  var i18n = $filter('i18n');
	
	  return _ref2 = {}, _defineProperty(_ref2, _constants.Event.PAYMENT_EDIT_DONE, function () {
	    notifications.notifySuccess(i18n('notification.edit.payment.success'));
	  }), _defineProperty(_ref2, _constants.Event.PAYMENT_CANCEL_SUCCESS, function () {
	    notifications.notifySuccess(i18n('notification.cancel.payment.success'));
	  }), _defineProperty(_ref2, _constants.Event.PAYMENT_CANCEL_ERROR, function () {
	    notifications.notifyError(i18n('notification.cancel.payment.error'));
	  }), _ref2;
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-manage-payment-orders-ng.js.map