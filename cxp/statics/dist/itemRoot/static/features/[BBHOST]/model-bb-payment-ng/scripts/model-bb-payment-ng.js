(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("data-bb-product-summary-http-ng"), require("data-bb-contact-http-ng"), require("data-bb-payments-http-ng"), require("lib-bb-model-errors"));
	else if(typeof define === 'function' && define.amd)
		define("model-bb-payment-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "data-bb-product-summary-http-ng", "data-bb-contact-http-ng", "data-bb-payments-http-ng", "lib-bb-model-errors"], factory);
	else if(typeof exports === 'object')
		exports["model-bb-payment-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("data-bb-product-summary-http-ng"), require("data-bb-contact-http-ng"), require("data-bb-payments-http-ng"), require("lib-bb-model-errors"));
	else
		root["model-bb-payment-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["data-bb-product-summary-http-ng"], root["data-bb-contact-http-ng"], root["data-bb-payments-http-ng"], root["lib-bb-model-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_60__, __WEBPACK_EXTERNAL_MODULE_75__, __WEBPACK_EXTERNAL_MODULE_76__, __WEBPACK_EXTERNAL_MODULE_77__, __WEBPACK_EXTERNAL_MODULE_78__, __WEBPACK_EXTERNAL_MODULE_80__) {
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

	module.exports = __webpack_require__(74);

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_60__;

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modelPaymentKey = exports.modelPaymentModuleKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(60);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(75);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _dataBbProductSummaryHttpNg = __webpack_require__(76);
	
	var _dataBbProductSummaryHttpNg2 = _interopRequireDefault(_dataBbProductSummaryHttpNg);
	
	var _dataBbContactHttpNg = __webpack_require__(77);
	
	var _dataBbContactHttpNg2 = _interopRequireDefault(_dataBbContactHttpNg);
	
	var _dataBbPaymentsHttpNg = __webpack_require__(78);
	
	var _dataBbPaymentsHttpNg2 = _interopRequireDefault(_dataBbPaymentsHttpNg);
	
	var _payment = __webpack_require__(79);
	
	var _payment2 = _interopRequireDefault(_payment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module model-bb-payment-ng
	 *
	 * @description
	 * Payment widget model.
	 *
	 * @example
	 * import modelPaymentModuleKey, {
	 *   modelPaymentKey,
	 * } from 'model-bb-payment-ng';
	 *
	 * angular.module('widget-bb-payment-ng', [
	 *   modelPaymentModuleKey,
	 * ])
	 * .controller('PaymentController', [
	 *   modelPaymentKey,
	 *   ...,
	 * ])
	 */
	var modelPaymentModuleKey = exports.modelPaymentModuleKey = 'model-bb-payment-ng';
	var modelPaymentKey = exports.modelPaymentKey = 'model-bb-payment-ng:model';
	
	exports.default = _vendorBbAngular2.default.module('model-bb-payment-ng', [_dataBbProductSummaryHttpNg2.default, _dataBbContactHttpNg2.default, _dataBbPaymentsHttpNg2.default, _libBbWidgetNg2.default]).factory(modelPaymentKey, [_dataBbProductSummaryHttpNg.productSummaryDataKey, _dataBbContactHttpNg.contactDataKey, _dataBbPaymentsHttpNg.paymentsDataKey, _libBbWidgetNg.widgetKey,
	/* into */
	_payment2.default]).name;
	
	/**
	 * @typedef {object} AccountView
	 * @property {string} id The internal account identifier
	 * @property {string} name The account's name, suitable for display to users
	 * @property {?string} identifier The identifier of the account from the user's perspective
	 * @property {?string} amount The most important associated value to be displayed
	 * @property {?string} currency Account currency
	 */

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_75__;

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_76__;

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_77__;

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_78__;

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = paymentModel;
	
	var _libBbModelErrors = __webpack_require__(80);
	
	var _accountModel = __webpack_require__(81);
	
	var _accountModel2 = _interopRequireDefault(_accountModel);
	
	var _constants = __webpack_require__(82);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* eslint max-len: ["error", { "ignoreComments": true }] */
	
	/**
	 * @description
	 * Extracting data set from raw response
	 *
	 * @inner
	 * @param rawData - response
	 * @returns [object] data response
	 */
	var convertRawData = function convertRawData(rawData) {
	  return rawData.data || [];
	};
	
	/**
	 * @description
	 * Method to normalize data
	 *
	 * @inner
	 * @param rawData - response
	 * @returns {AccountView[]}
	 */
	var convertToArray = function convertToArray(rawData) {
	  return Object.keys(rawData).filter(function (kind) {
	    return rawData[kind].products && rawData[kind].products.length > 0;
	  }).reduce(function (memo, kind) {
	    return memo.concat(rawData[kind].products.map((0, _accountModel2.default)(kind)));
	  }, []);
	};
	
	/**
	 * @description
	 * Method to format external contacts data as account kind
	 *
	 * @inner
	 * @param rawData - response
	 * @returns {ProductKind}
	 */
	function convertExternalsToProductKind(rawData) {
	  return _defineProperty({}, _constants.externalType.IDENTIFIER, {
	    name: _constants.externalType.NAME,
	    products: rawData,
	    aggregatedBalance: 0.0
	  });
	}
	
	/**
	 * Model factory for model-bb-payment-ng
	 *
	 * @inner
	 * @type {function}
	 *
	 * @returns {object}
	 */
	function paymentModel(productSummaryData, contactData, paymentData, widget) {
	  /**
	   * @name paymentModel#getAccountsFrom
	   * @type {function}
	   *
	   * @description
	   * Load accounts available to payment from.
	   *
	   * @returns {Promise.<AccountView[]>} A Promise with flat accounts list.
	   */
	  var getAccountsFrom = function getAccountsFrom() {
	    return productSummaryData.getProductsummaryDebitaccounts().then(convertRawData).then(convertToArray).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentModel#getAccountsTo
	   * @type {function}
	   *
	   * @description
	   * Load accounts available for payment to.
	   *
	   * @param {string}  debitAccountId  Filter account list with debitAccountId param
	   * @returns {Promise.<AccountView[]>} A Promise with flat accounts list.
	   */
	  var getAccountsTo = function getAccountsTo(debitAccountId) {
	    return productSummaryData.getProductsummaryCreditaccounts({
	      debitAccountId: debitAccountId
	    }).then(convertRawData).then(convertToArray).then(function (accounts) {
	      return accounts.filter(function (account) {
	        return account.id !== debitAccountId;
	      });
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentModel#getExternals
	   * @type {function}
	   *
	   * @description
	   * Load external accounts from contact list.
	   *
	   * @returns {Promise.<AccountView[]>} A Promise with flat accounts list.
	   */
	  var getExternals = function getExternals() {
	    return contactData.getContacts().then(convertRawData).then(convertExternalsToProductKind).then(convertToArray).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentModel#createContact
	   * @type {function}
	   *
	   * @description
	   * Creates a new contact
	   *
	   * @param {object} contact Contact data
	   * @returns {Promise}
	   */
	  var createContact = function createContact(contact) {
	    return contactData.postContactsRecord(contact).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentModel#makePayment
	   * @type {function}
	   *
	   * @description
	   * Send payment to endpoint.
	   *
	   * @param {object} paymentParams  Payment params to send
	   * @returns {Promise.<object>} A Promise with response.
	   */
	  var makePayment = function makePayment(paymentParams) {
	    return paymentData.postPaymentsRecord(paymentParams).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentModel#getPayments
	   * @type {function}
	   *
	   * @description
	   * Get payments data.
	   *
	   * @param  {object} params Params to send to the request
	   * @returns {Promise.<Payments, ModelError>} A Promise
	   */
	  var getPayments = function getPayments(params) {
	    return paymentData.getPayments(params).then(function (raw) {
	      return {
	        data: raw.data,
	        totalCount: parseInt(raw.headers('x-total-count'), 10) || 0
	      };
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentModel#getStandingOrders
	   * @type {function}
	   *
	   * @description
	   * Get standing orders data.
	   *
	   * @param  {object} params Params to send to the request
	   * @returns {Promise.<Payments, ModelError>} A Promise
	   */
	  var getStandingOrders = function getStandingOrders(params) {
	    return paymentData.getPaymentsStandingOrders(params).then(function (raw) {
	      return {
	        data: raw.data,
	        totalCount: parseInt(raw.headers('x-total-count'), 10) || 0
	      };
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentModel#storeAccounts
	   * @type {function}
	   *
	   * @description
	   * Stores a given list of accounts as current in sync preferences (mobile)
	   *
	   * @param {AccountView[]} accounts Accounts data
	   */
	  function storeAccounts(accounts) {
	    widget.savePreference(_constants.Preference.PAYMENT_ACCOUNTS, JSON.stringify(accounts));
	  }
	
	  /**
	   * @name paymentModel#getAccounts
	   * @type {function}
	   *
	   * @description
	   * Tries to read the current accounts from sync preferences (mobile)
	   *
	   * @returns {AccountView[]} Accounts data
	   */
	  function getAccounts() {
	    try {
	      return JSON.parse(widget.getStringPreference(_constants.Preference.PAYMENT_ACCOUNTS));
	    } catch (ex) {
	      return null;
	    }
	  }
	
	  /**
	   * @name paymentModel#getPayment
	   * @type {function}
	   *
	   * @description
	   * Tries to read the stored payment from sync preferences (mobile)
	   *
	   * @returns {Payment} Payment data
	   */
	  function getPayment() {
	    try {
	      return JSON.parse(widget.getStringPreference(_constants.Preference.PAYMENT));
	    } catch (ex) {
	      return null;
	    }
	  }
	
	  /**
	   * @name paymentModel#storePayment
	   * @type {function}
	   *
	   * @description
	   * Stores a given payment as current in sync preferences (mobile)
	   *
	   * @param {Payment} payment Payment data
	   */
	  function storePayment(payment) {
	    widget.savePreference(_constants.Preference.PAYMENT, JSON.stringify(payment));
	  }
	
	  /**
	   * @name paymentModel#getPaymentPreferences
	   * @type {function}
	   *
	   * @description
	   * Tries to read the stored payment from sync preferences (mobile)
	   *
	   * @returns {Payment} Payment data
	   */
	  function getPaymentPreferences() {
	    var paymentPreferences = {};
	
	    paymentPreferences.showExchangeRate = widget.getBooleanPreference(_constants.Preference.SHOW_EXCHANGE_RATE);
	    paymentPreferences.recurring = widget.getBooleanPreference(_constants.Preference.RECURRING);
	    paymentPreferences.reviewStep =
	    // For backward compatibility we return true if the preference is not set
	    // TODO: Remove this logic when the widget version is bumped to v2.0.0
	    widget.getStringPreference(_constants.Preference.PAYMENT_REVIEW_STEP) !== null ? widget.getBooleanPreference(_constants.Preference.PAYMENT_REVIEW_STEP) : true;
	    paymentPreferences.REGEX = widget.getStringPreference(_constants.Preference.DESCRIPTION_REGEX) || _constants.description.REGEX;
	    paymentPreferences.notificationDismissTime = widget.getLongPreference(_constants.Preference.NOTIFICATION_DISMISS);
	    paymentPreferences.maxNavPages = widget.getLongPreference(_constants.Preference.PAYMENT_MAX_NAV_PAGES);
	    paymentPreferences.paginationType = widget.getStringPreference(_constants.Preference.PAYMENT_PAGINATION_TYPE);
	    paymentPreferences.paymentOrderPageSize = widget.getLongPreference(_constants.Preference.PAYMENT_ORDER_PAGE_SIZE);
	    paymentPreferences.standingOrderPageSize = widget.getLongPreference(_constants.Preference.STANDING_ORDER_PAGE_SIZE);
	    paymentPreferences.authorizationPageSize = widget.getLongPreference(_constants.Preference.AUTHORIZATION_PAGE_SIZE);
	    paymentPreferences.directDebitPageSize = widget.getLongPreference(_constants.Preference.DIRECT_DEBIT_PAGE_SIZE);
	    paymentPreferences.urgent = widget.getBooleanPreference(_constants.Preference.URGENT);
	    paymentPreferences.directDebitMaxNavPages = widget.getLongPreference(_constants.Preference.DIRECT_DEBIT_MAX_NAV_PAGES);
	    paymentPreferences.directDebitPaginationType = widget.getStringPreference(_constants.Preference.DIRECT_DEBIT_PAGINATION_TYPE);
	    paymentPreferences.showPin = widget.getBooleanPreference(_constants.Preference.SHOW_PIN);
	
	    return paymentPreferences;
	  }
	
	  /**
	   * @description
	   * Compiles "schedule" object according to the schema
	   *
	   * @name paymentModel#getPaymentSchedule
	   * @type {function}
	   * @param {Payment} payment
	   * @param {string} endingType
	   * @returns {object} schedule object
	   */
	  var getPaymentSchedule = function getPaymentSchedule(_ref2, endingType, transactionDayCallback) {
	    var _ref2$schedule = _ref2.schedule,
	        transferFrequency = _ref2$schedule.transferFrequency,
	        startDate = _ref2$schedule.startDate,
	        endDate = _ref2$schedule.endDate,
	        repeat = _ref2$schedule.repeat,
	        on = _ref2$schedule.on;
	
	    var paymentMode = !transferFrequency || transferFrequency.value === _constants.singleTransfer.value ? _constants.paymentModes.SINGLE : _constants.paymentModes.RECURRING;
	
	    var reqPaymentMode = {
	      paymentMode: paymentMode
	    };
	
	    var reqAddition = paymentMode === _constants.paymentModes.SINGLE ? {
	      date: startDate
	    } : {
	      schedule: {
	        transferFrequency: transferFrequency.value,
	        every: transferFrequency.every,
	        startDate: startDate,
	        endDate: endingType === _constants.endingTypes.ON ? endDate : null,
	        repeat: endingType === _constants.endingTypes.AFTER ? repeat : null,
	        on: transactionDayCallback ? transactionDayCallback(startDate, transferFrequency) : on
	      }
	    };
	
	    return Object.assign(reqPaymentMode, reqAddition);
	  };
	
	  /**
	   * @description
	   * Create new payment model with default values
	   *
	   * @name paymentModel#newPayment
	   * @type {function}
	   * @returns {Payment}
	   */
	  var newPayment = function newPayment() {
	    var today = new Date();
	    return {
	      debitAccountIdentification: {
	        scheme: 'ID',
	        identification: null
	      },
	      creditAccountIdentification: {
	        scheme: 'ID',
	        identification: null
	      },
	      amount: null,
	      currency: null,
	      description: null,
	      paymentMode: _constants.paymentModes.SINGLE,
	      schedule: {
	        startDate: today,
	        endDate: new Date(today.getFullYear(), today.getMonth() + 1, today.getDate()),
	        transferFrequency: _constants.singleTransfer,
	        repeat: null,
	        on: null
	      }
	    };
	  };
	
	  /**
	   * @typedef {object} Currency
	   * @property {string} id The internal identifier
	   * @property {string} name Currency name, suitable for display to users
	   */
	  /**
	   * @description
	   * Get currencies available for payment.
	   *
	   * @name paymentModel#getCurrencies
	   * @type {function}
	   * @returns {Currency[]}
	   */
	  var getCurrencies = function getCurrencies() {
	    return paymentData.getPaymentsCurrencies().then(convertRawData).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @typedef {object} Rate
	   * @property {number} rate
	   */
	  /**
	   * @description
	   * Get currencies available for payment.
	   *
	   * @name paymentModel#getRate
	   * @type {function}
	   * @returns {Rate} rate
	   */
	  var getRate = function getRate(rateParams) {
	    return paymentData.getPaymentsRate(rateParams).then(convertRawData).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentModel#getPaymentsAuthorizations
	   * @type {function}
	   * @description
	   * Retrieve list of only payments, which can be authorized or rejected.
	   * @param {object} params Parameters for the query string
	   * @returns {Promise.<array>} A Promise with an array of payment authorisations.
	   */
	  var getPaymentsAuthorizations = function getPaymentsAuthorizations(params) {
	    return paymentData.getPaymentsAuthorizations(params).then(function (raw) {
	      return {
	        data: raw.data,
	        totalCount: parseInt(raw.headers('x-total-count'), 10) || 0
	      };
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentModel#authorizePayment
	   * @type {function}
	   * @description
	   * Authorizes a payment.
	   * @returns {Promise}
	   */
	  var authorizePayment = function authorizePayment(paymentId) {
	    return paymentData.postPaymentsAuthorizationsRecord(paymentId).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentModel#authorizeMultiplePayments
	   * @type {function}
	   * @description
	   * Authorizes multiple payments at once.
	   * @returns {Promise}
	   */
	  var authorizeMultiplePayments = function authorizeMultiplePayments(paymentsId) {
	    var succeeded = [];
	    var failed = [];
	    var promises = paymentsId.map(function (id) {
	      return paymentData.postPaymentsAuthorizationsRecord(id).then(function () {
	        return succeeded.push(id);
	      }).catch(function () {
	        return failed.push(id);
	      });
	    });
	
	    return Promise.all(promises).then(function () {
	      return {
	        succeeded: succeeded,
	        failed: failed
	      };
	    });
	  };
	
	  /**
	   * @name paymentModel#rejectPayment
	   * @type {function}
	   * @description
	   * Authorizes a payment.
	   * @returns {Promise}
	   */
	  var rejectPayment = function rejectPayment(paymentId) {
	    return paymentData.postPaymentsRejectionsRecord(paymentId).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentModel#rejectMultiplePayments
	   * @type {function}
	   * @description
	   * Rejects multiple payments at once.
	   * @returns {Promise}
	   */
	  var rejectMultiplePayments = function rejectMultiplePayments(paymentIds) {
	    var succeeded = [];
	    var failed = [];
	    var promises = paymentIds.map(function (id) {
	      return paymentData.postPaymentsRejectionsRecord(id).then(function () {
	        return succeeded.push(id);
	      }).catch(function () {
	        return failed.push(id);
	      });
	    });
	
	    return Promise.all(promises).then(function () {
	      return {
	        succeeded: succeeded,
	        failed: failed
	      };
	    });
	  };
	
	  /**
	   * @name paymentModel#deletePayment
	   * @type {function}
	   * @description
	   * Delete a single payment.
	   * @param {string} paymentId Id of the payment
	   * @returns {Promise}
	   */
	  var deletePayment = function deletePayment(paymentId) {
	    return paymentData.deletePaymentsRecord(paymentId).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentModel#deleteMultiplePayments
	   * @type {function}
	   * @description
	   * Deletes multiple payments at once.
	   * @returns {Promise}
	   */
	  var deleteMultiplePayments = function deleteMultiplePayments(paymentIds) {
	    var succeeded = [];
	    var failed = [];
	    var promises = paymentIds.map(function (id) {
	      return paymentData.deletePaymentsRecord(id).then(function () {
	        return succeeded.push(id);
	      }).catch(function () {
	        return failed.push(id);
	      });
	    });
	
	    return Promise.all(promises).then(function () {
	      return {
	        succeeded: succeeded,
	        failed: failed
	      };
	    });
	  };
	
	  /**
	   * @name paymentModel#getDirectDebits
	   * @type {function}
	   *
	   * @description
	   * Get direct debits data.
	   *
	   * @param  {object} params Params to send to the request
	   * @returns {Promise.<DirectDebits, ModelError>} A Promise
	   */
	  var getDirectDebits = function getDirectDebits(params) {
	    return paymentData.getPaymentsDirectDebits(params).then(function (raw) {
	      return {
	        data: raw.data,
	        totalCount: parseInt(raw.headers('x-total-count'), 10) || 0
	      };
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentModel#refundDirectDebit
	   * @type {function}
	   *
	   * @description
	   * Refund direct debit.
	   *
	   * @param  {string} directDebitId Direct Debit ID
	   * @param  {object} params Params to send to the request
	   * @returns {Promise.<DirectDebits, ModelError>} A Promise
	   */
	  var refundDirectDebit = function refundDirectDebit(directDebitId, params) {
	    return paymentData.postPaymentsDirectDebitsRefundsRecord(directDebitId, params).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentModel#refuseDirectDebit
	   * @type {function}
	   *
	   * @description
	   * Refuse direct debit.
	   *
	   * @param  {string} directDebitId Direct Debit ID
	   * @param  {object} params Params to send to the request
	   * @returns {Promise.<DirectDebits, ModelError>} A Promise
	   */
	  var refuseDirectDebit = function refuseDirectDebit(directDebitId, params) {
	    return paymentData.postPaymentsDirectDebitsRefusalsRecord(directDebitId, params).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	  * @name paymentModel
	  * @type {object}
	  *
	  * @description
	  * Payment widget and Authorization widget model service.
	  */
	  return {
	    // constants
	    singleTransfer: _constants.singleTransfer,
	    endingTypes: _constants.endingTypes,
	    paymentModes: _constants.paymentModes,
	    // methods
	    getAccountsFrom: getAccountsFrom,
	    getAccountsTo: getAccountsTo,
	    getExternals: getExternals,
	    createContact: createContact,
	    makePayment: makePayment,
	    getPayments: getPayments,
	    getStandingOrders: getStandingOrders,
	    storeAccounts: storeAccounts,
	    getAccounts: getAccounts,
	    newPayment: newPayment,
	    getPayment: getPayment,
	    storePayment: storePayment,
	    getPaymentSchedule: getPaymentSchedule,
	    getPaymentPreferences: getPaymentPreferences,
	    getCurrencies: getCurrencies,
	    getRate: getRate,
	    getPaymentsAuthorizations: getPaymentsAuthorizations,
	    authorizePayment: authorizePayment,
	    authorizeMultiplePayments: authorizeMultiplePayments,
	    rejectPayment: rejectPayment,
	    rejectMultiplePayments: rejectMultiplePayments,
	    deletePayment: deletePayment,
	    deleteMultiplePayments: deleteMultiplePayments,
	    getDirectDebits: getDirectDebits,
	    refundDirectDebit: refundDirectDebit,
	    refuseDirectDebit: refuseDirectDebit
	  };
	}
	
	/**
	 * @typedef {object} AccountIdentification
	 * @property {string} scheme Identification of the product
	 * @property {?string} counterpartyName Name of the counterparty
	 * @property {string} identification Unique identification of the product
	 */
	
	/**
	 * @typedef {object} Schedule
	 * @description
	 * Schedule for recurring transfer. Mandatory if paymentMode is RECURRING
	 *
	 * @property {string} nonWorkingDayExecutionStrategy
	 * @property {string} transferFrequency - Denotes frequency type of transfer
	 * @property {number} on - Denotes day on which transfer should be executed
	 * @property {number} repeat - Number of transfer to be executed
	 * @property {number} every - Indicates skip interval of transfer
	 * @property {date} startDate - When to start executing the schedule
	 * @property {date} endDate - When to stop transfers
	 */
	
	/**
	 * Payments type definition
	 * @typedef {object} Payments
	 * @property {Payment[]}  data   Array of Payment orders
	 * @property {number} totalCount Number of items in the collection
	 */
	
	/**
	 * @typedef {object} Payment
	 * @property {string} status Authorization status of the payment
	 * @property {?AccountIdentification} debitAccountIdentification Data of the payment source account
	 * @property {?AccountIdentification} creditAccountIdentification Data of the payment target account
	 * @property {number} amount Amount of the payment
	 * @property {string} currency Currency of the payment
	 * @property {string} date  Execution date of the payment
	 * @property {string} description Description of the payment
	 * @property {string} paymentMode Mode of the payment
	 * @property {Schedule} schedule Schedule for recurring transfer
	 * @property {?boolean} urgent Flag if it is an urgent payment
	 */
	
	/**
	 * Direct Debits type definition
	 * @typedef {object} DirectDebits
	 * @property {DirectDebit[]} data Direct Debits orders
	 * @property {number} totalCount Number of items in the collection
	 */
	
	/**
	 * Direct Debit type definition
	 * @typedef {object} DirectDebit
	 * @property {string} id Direct Debit ID
	 * @property {string} status Direct Debit status
	 * @property {?number} refundDayCount
	 * @property {string} creditorReference Creditor ID
	 * @property {string} mandateReference Mandate ID
	 * @property {AccountIdentification} debitAccountIdentification Data of the payment debit account
	 * @property {AccountIdentification} creditAccountIdentification Data of the payment credit account
	 * @property {number} amount Amount of the payment
	 * @property {string} currency Currency of the payment
	 * @property {string} date  Execution date of the payment
	 * @property {string} description Description of the payment
	 * @property {string} paymentMode Mode of the payment
	 * @property {Schedule} schedule Schedule for recurring transfer
	 */

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_80__;

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(82);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var maskCardNumber = function maskCardNumber(suffix) {
	  var masked = '';
	  if (suffix) {
	    masked = 'XXXX-XXXX-XXXX-' + suffix;
	  }
	  return masked;
	};
	
	var defaultViewModelFactory = function defaultViewModelFactory(_ref) {
	  var id = _ref.id,
	      name = _ref.name,
	      currency = _ref.currency,
	      externalTransferAllowed = _ref.externalTransferAllowed,
	      crossCurrencyAllowed = _ref.crossCurrencyAllowed;
	  return {
	    id: id,
	    name: name,
	    currency: currency,
	    externalTransferAllowed: externalTransferAllowed,
	    crossCurrencyAllowed: crossCurrencyAllowed
	  };
	};
	
	var viewModelFactories = _defineProperty({
	  currentAccounts: function currentAccounts(account) {
	    return Object.assign({
	      identifier: account.IBAN || account.BBAN,
	      amount: account.availableBalance
	    }, account);
	  },
	
	  savingsAccounts: function savingsAccounts(account) {
	    return Object.assign({
	      identifier: account.BBAN || account.IBAN,
	      amount: account.bookedBalance
	    }, account);
	  },
	
	  termDeposits: function termDeposits(account) {
	    return Object.assign({
	      amount: account.principalAmount
	    }, account);
	  },
	
	  loans: function loans(account) {
	    return Object.assign({
	      amount: account.bookedBalance
	    }, account);
	  },
	
	  creditCards: function creditCards(account) {
	    return Object.assign({
	      identifier: maskCardNumber(account.cardNumberSuffix),
	      amount: account.availableBalance
	    }, account);
	  },
	
	  investmentAccounts: function investmentAccounts(account) {
	    return Object.assign({
	      amount: account.currentInvestmentValue
	    }, account);
	  }
	
	}, _constants.externalType.IDENTIFIER, function (contact) {
	  return Object.assign({
	    identifier: contact.accounts[0].IBAN,
	    external: true
	  }, contact);
	});
	
	var viewModelFactory = function viewModelFactory(kind, account) {
	  return (viewModelFactories[kind] || defaultViewModelFactory)(account);
	};
	
	/**
	 * Prepare the fields of a account into a form ready for display to the User
	 *
	 * @inner
	 * @param {object} account The source account from the API
	 * @returns {AccountView}
	 */
	
	exports.default = function (kindId) {
	  return function (account) {
	    return viewModelFactory(kindId, account);
	  };
	};

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Widget preferences enum
	 * @type {object}
	 */
	var Preference = exports.Preference = {
	  PAYMENT: 'bb.payment.payment',
	  PAYMENT_ACCOUNTS: 'bb.payment.accounts',
	  RECURRING: 'bb.payment.recurring',
	  SHOW_EXCHANGE_RATE: 'bb.payment.show.exchange',
	  PAYMENT_REVIEW_STEP: 'bb.payment.review.step',
	  DESCRIPTION_REGEX: 'bb.payment.description.REGEX',
	  NOTIFICATION_DISMISS: 'bb.authorization.notificationDismissTime',
	  PAYMENT_ORDER_PAGE_SIZE: 'bb.paymentOrder.pageSize',
	  STANDING_ORDER_PAGE_SIZE: 'bb.standingOrder.pageSize',
	  AUTHORIZATION_PAGE_SIZE: 'bb.authorization.pageSize',
	  DIRECT_DEBIT_PAGE_SIZE: 'bb.directDebit.pageSize',
	  URGENT: 'bb.payment.urgent',
	  PAYMENT_MAX_NAV_PAGES: 'bb.payment.maxNavPages',
	  PAYMENT_PAGINATION_TYPE: 'bb.payment.paginationType',
	  DIRECT_DEBIT_MAX_NAV_PAGES: 'bb.directDebit.maxNavPages',
	  DIRECT_DEBIT_PAGINATION_TYPE: 'bb.directDebit.paginationType',
	  SHOW_PIN: 'bb.payment.show.pin'
	};
	
	/**
	 * @description
	 * Payment description condition values
	 *
	 * @name description
	 * @type {object}
	 */
	var description = exports.description = {
	  REGEX: '^[ \\w_@./#!*()=+-]{0,140}$'
	};
	
	/**
	 * @description
	 * Single transfer frequency object
	 *
	 * @name singleTransfer
	 * @type {object}
	 */
	var singleTransfer = exports.singleTransfer = {
	  name: 'form.schedule.frequency.once',
	  value: 'ONCE'
	};
	
	/**
	 * @description
	 * Available payment modes
	 *
	 * @name paymentModes
	 * @type {object}
	 */
	var paymentModes = exports.paymentModes = {
	  SINGLE: 'SINGLE',
	  RECURRING: 'RECURRING'
	};
	
	/**
	 * @description
	 * Available payment ending types
	 *
	 * @name endingTypes
	 * @type {object}
	 */
	var endingTypes = exports.endingTypes = {
	  NEVER: 'never',
	  ON: 'on',
	  AFTER: 'after'
	};
	
	/**
	 * @description
	 * Identifier and name for external account product kind
	 *
	 * @name externalType
	 * @type {object}
	 */
	var externalType = exports.externalType = {
	  IDENTIFIER: 'ExternalAccounts',
	  NAME: 'Contacts'
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=model-bb-payment-ng.js.map