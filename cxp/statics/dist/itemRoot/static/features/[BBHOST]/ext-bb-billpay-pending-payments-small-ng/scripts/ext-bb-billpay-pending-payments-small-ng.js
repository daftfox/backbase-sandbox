(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-format-amount-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-modal-ng"), require("vendor-bb-uib-dropdown"), require("vendor-bb-uib-tooltip"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-billpay-pending-payments-small-ng", ["vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "ui-bb-format-amount-ng", "ui-bb-loading-overlay-ng", "ui-bb-substitute-error-ng", "ui-bb-notification-stripe-ng", "ui-bb-modal-ng", "vendor-bb-uib-dropdown", "vendor-bb-uib-tooltip"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-billpay-pending-payments-small-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-format-amount-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-modal-ng"), require("vendor-bb-uib-dropdown"), require("vendor-bb-uib-tooltip"));
	else
		root["ext-bb-billpay-pending-payments-small-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["ui-bb-format-amount-ng"], root["ui-bb-loading-overlay-ng"], root["ui-bb-substitute-error-ng"], root["ui-bb-notification-stripe-ng"], root["ui-bb-modal-ng"], root["vendor-bb-uib-dropdown"], root["vendor-bb-uib-tooltip"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_37__) {
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

	module.exports = __webpack_require__(38);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
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
/* 14 */,
/* 15 */,
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
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),
/* 28 */,
/* 29 */,
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.intents = exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _hooks = __webpack_require__(39);
	
	Object.defineProperty(exports, 'hooks', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_hooks).default;
	  }
	});
	
	var _helpers = __webpack_require__(40);
	
	Object.defineProperty(exports, 'helpers', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_helpers).default;
	  }
	});
	
	var _intents = __webpack_require__(41);
	
	Object.defineProperty(exports, 'intents', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_intents).default;
	  }
	});
	
	var _vendorBbAngularNgAria = __webpack_require__(4);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbFormatAmountNg = __webpack_require__(9);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(10);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBbNotificationStripeNg = __webpack_require__(21);
	
	var _uiBbNotificationStripeNg2 = _interopRequireDefault(_uiBbNotificationStripeNg);
	
	var _vendorBbUibDropdown = __webpack_require__(27);
	
	var _vendorBbUibDropdown2 = _interopRequireDefault(_vendorBbUibDropdown);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(13);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _vendorBbUibTooltip = __webpack_require__(37);
	
	var _vendorBbUibTooltip2 = _interopRequireDefault(_vendorBbUibTooltip);
	
	var _uiBbModalNg = __webpack_require__(22);
	
	var _uiBbModalNg2 = _interopRequireDefault(_uiBbModalNg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbI18nNg2.default, _uiBbFormatAmountNg2.default, _uiBbLoadingOverlayNg2.default, _uiBbNotificationStripeNg2.default, _vendorBbUibDropdown2.default, _uiBbSubstituteErrorNg2.default, _vendorBbUibTooltip2.default, _uiBbModalNg2.default]; /**
	                                                                                                                                                                                                                                                                                                                               * @module ext-bb-billpay-pending-payments-ng
	                                                                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                                                                               * @description
	                                                                                                                                                                                                                                                                                                                               * Default extension for widget-bb-billpay-view-payments-ng
	                                                                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                                                                               * @requires vendor-bb-angular-ng-aria
	                                                                                                                                                                                                                                                                                                                               */
	var events = exports.events = {};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var removeTimeFromStringDate = function removeTimeFromStringDate(date) {
	  return date && date.length >= 10 ? date.substring(0, 10) : date;
	};
	
	/**
	 * @name Hooks
	 * @type {Object}
	 * @description Hooks for widget-bb-billpay-view-payments-ng
	 */
	exports.default = {
	  /**
	   * @name Hooks#transformPayment
	   * @type {function}
	   * @description Perform any transformations required to prepare the Payment item for display
	   * @param {module:model-bb-billpay-ng.Payment} payment
	   * @return {Object} transformed payment
	   */
	  transformPayment: function transformPayment(payment) {
	    return Object.assign({}, payment, {
	      // remove time from server date so that there is no TZ conversion
	      paymentDate: removeTimeFromStringDate(payment.paymentDate),
	      payeeDisplayName: payment.payeeNickName || payment.payeeName
	    });
	  }
	};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Helpers;
	var templates = {
	  list: '#ext-bb-billpay-pending-payments-small-ng/table.ng.html'
	};
	
	/**
	 * @constructor Helpers
	 */
	function Helpers(_ref) {
	  var billpayViewPaymentsService = _ref.billpayViewPaymentsService,
	      router = _ref.router;
	
	  /**
	   * @name isEditPaymentDisabled
	   * @inner
	   * @type {function}
	   * @description Disable editing of payments that are recurring or not pending
	   * @param {object} payment
	   * @param {string} payment.status
	   * @param {boolean} payment.recurring
	   * @return {boolean}
	   */
	  var isEditPaymentDisabled = function isEditPaymentDisabled(_ref2) {
	    var status = _ref2.status,
	        recurring = _ref2.recurring;
	    return recurring || status !== 'PENDING';
	  };
	
	  /**
	   * @name isDeletePaymentDisabled
	   * @inner
	   * @type {function}
	   * @description Disable deleting of payments that are not pending
	   * @param {object} payment
	   * @param {string} payment.status
	   * @return {boolean}
	   */
	  var isDeletePaymentDisabled = function isDeletePaymentDisabled(_ref3) {
	    var status = _ref3.status;
	    return status !== 'PENDING';
	  };
	
	  /**
	   * @name Helpers
	   * @type {Object}
	   */
	  return {
	    /**
	     * @name Helpers#template
	     * @type {function}
	     * @description returns a string of the template matching the current route
	     * @return {string}
	     */
	    get template() {
	      return templates[router.getRoute()];
	    },
	
	    /**
	     * @name Helpers#getCurrencyCode
	     * @type {function}
	     * @description get the currency code from service
	     * @return {string}
	     */
	    getCurrencyCode: function getCurrencyCode() {
	      return billpayViewPaymentsService.getCurrencyCode();
	    },
	
	    /**
	     * @name Helpers#paymentsTableHeader
	     * @type {string[]}
	     * @description list of header label translation keys for payments table
	     */
	    paymentsTableHeader: ['table.header.pay-to', 'table.header.amount', 'table.header.deliver-by'],
	
	    /**
	     * @name Helpers#editPayment
	     * @type {function}
	     * @description Either fire the intent to edit the single payment or do nothing to a recurring
	     *   payment
	     * @param {object} intents Available intents functions
	     * @param {object} payment
	     */
	    editPayment: function editPayment(intents, payment) {
	      if (!isEditPaymentDisabled(payment)) {
	        intents.editSinglePayment(payment.id);
	      }
	    },
	
	    /**
	     * @name Helpers#deletePayment
	     * @type {function}
	     * @description Either fire the intent to edit the single payment or do nothing to a recurring
	     *   payment
	     * @param {{openDeleteDialog}} $ctrl
	     * @param {object} payment
	     */
	    deletePayment: function deletePayment($ctrl, payment) {
	      if (!isDeletePaymentDisabled(payment)) {
	        $ctrl.openDeleteDialog(payment);
	      }
	    },
	
	    /**
	     * @name Helpers#getLoadingErrorMessageKey
	     * @type {function}
	     * @description get any error message
	     * @param {ViewState} state
	     * @param {Object} state.error
	     * @return {string} message from error or empty string
	     */
	    getLoadingErrorMessageKey: function getLoadingErrorMessageKey(_ref4) {
	      var error = _ref4.error;
	      return error ? error.message : '';
	    },
	
	    /**
	     * @name Helpers#isEditPaymentDisabled
	     * @type {function}
	     * @description Disable editing of payments that are recurring or not pending
	     * @param {object} payment
	     * @param {string} payment.status
	     * @param {boolean} payment.recurring
	     * @return {boolean}
	     */
	    isEditPaymentDisabled: isEditPaymentDisabled,
	
	    /**
	     * @name Helpers#isDeletePaymentDisabled
	     * @type {function}
	     * @description Disable deleting of payments that are not pending
	     * @param {object} payment
	     * @param {string} payment.status
	     * @return {boolean}
	     */
	    isDeletePaymentDisabled: isDeletePaymentDisabled,
	
	    /**
	     * @name Helpers#editPaymentTooltip
	     * @type {function}
	     * @description Tooltip key when not allowed to edit a payment
	     * @param {object} payment
	     * @param {boolean} payment.recurring
	     * @return {string} - tooltip key
	     */
	    editPaymentTooltip: function editPaymentTooltip(_ref5) {
	      var recurring = _ref5.recurring;
	      return recurring ? 'tooltip.recurring-payment.edit.disabled' : 'tooltip.payment.in-process.disabled';
	    },
	
	    /**
	     * @name Helpers#deletePaymentTooltip
	     * @type {function}
	     * @description Tooltip key when not allowed to delete a payment
	     * @param {object} payment
	     * @param {boolean} payment.recurring
	     * @return {string} - tooltip key
	     */
	    deletePaymentTooltip: function deletePaymentTooltip(_ref6) {
	      var recurring = _ref6.recurring;
	      return recurring ? 'tooltip.recurring-payment.delete.disabled' : 'tooltip.payment.in-process.disabled';
	    }
	  };
	}

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Intents;
	function Intents(_ref) {
	  var stateContainer = _ref.stateContainer,
	      handleResponse = _ref.handleResponse;
	
	  /**
	   * @name processResponse
	   * @type {function}
	   * @description Callback function to run when the response from the intent is handled
	   * @param {object} data
	   * @param {string} data.status String to give status, e.g. success, failure, cancelled
	   * @param {string} [data.paymentId] Optional payload of the id of a payment acted on
	   * @inner
	   */
	  var processResponse = function processResponse(_ref2) {
	    var status = _ref2.status,
	        paymentId = _ref2.paymentId;
	
	    if (status === 'success' && paymentId) {
	      stateContainer.setState(Object.assign({}, stateContainer.getState(), {
	        newPaymentIds: [paymentId],
	        showSuccessMessage: true
	      }));
	    }
	  };
	
	  return {
	    /**
	     * @name Intents#editSinglePayment
	     * @type {function}
	     * @description Intent to navigate to and return from editing a single payment.
	     * @param {string} id The payment ID to be edited
	     */
	    editSinglePayment: handleResponse('intent.rb.billpay.single-bill.edit', processResponse)
	  };
	}

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-billpay-pending-payments-small-ng.js.map