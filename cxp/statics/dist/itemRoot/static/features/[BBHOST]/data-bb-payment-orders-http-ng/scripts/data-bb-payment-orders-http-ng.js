(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-challenge-ng"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-payment-orders-http-ng", ["vendor-bb-angular", "lib-bb-challenge-ng"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-payment-orders-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-challenge-ng"));
	else
		root["data-bb-payment-orders-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-challenge-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
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
	exports.paymentOrdersDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbChallengeNg = __webpack_require__(3);
	
	var _libBbChallengeNg2 = _interopRequireDefault(_libBbChallengeNg);
	
	var _dataBbPaymentOrdersHttp = __webpack_require__(4);
	
	var _dataBbPaymentOrdersHttp2 = _interopRequireDefault(_dataBbPaymentOrdersHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var paymentOrdersDataModuleKey = 'data-bb-payment-orders-http-ng';
	/**
	 * @name paymentOrdersDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the PaymentOrdersData service
	 */
	/* eslint-disable */
	/**
	 * @module data-bb-payment-orders-http-ng
	 *
	 * @description A data module for accessing the Payment Orders REST API.
	 *
	 * @returns {String} `data-bb-payment-orders-http-ng`
	 * @example
	 * import paymentOrdersDataModuleKey, {
	 *   paymentOrdersDataKey,
	 * } from 'data-bb-payment-orders-http-ng';
	 */
	
	var paymentOrdersDataKey = exports.paymentOrdersDataKey = 'data-bb-payment-orders-http-ng:paymentOrdersData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(paymentOrdersDataModuleKey, [_libBbChallengeNg2.default]).config(['$httpProvider', function ($httpProvider) {
	  $httpProvider.interceptors.push(_libBbChallengeNg.bbChallengeKey);
	}])
	
	/**
	 * @constructor PaymentOrdersData
	 * @type {object}
	 *
	 * @description Public api for data-bb-payment-orders-http-ng service
	 *
	 */
	.provider(paymentOrdersDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name PaymentOrdersDataProvider
	   * @type {object}
	   * @ngkey data-bb-payment-orders-http-ng:paymentOrdersDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-payment-orders-http-ng:paymentOrdersDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-payment-orders-http-ng:paymentOrdersDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name PaymentOrdersDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name PaymentOrdersDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http', '$httpParamSerializer',
	    /* into */
	    (0, _dataBbPaymentOrdersHttp2.default)(config)]
	  };
	}]).name;

/***/ }),
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

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/* eslint-disable */
	exports.default = function (conf) {
	  return function (httpClient, serializeParams) {
	    // Base param constants
	    var baseUri = conf.baseUri || '';
	
	    var version = 'v2';
	
	    /**
	     * The root defined types from the RAML.
	     * @private
	     */
	    var definedTypes = {};
	
	    definedTypes['PaymentOrdersData.PaymentOrderDraft-GET'] = { "properties": {} };
	
	    definedTypes['PaymentOrdersData.PaymentOrderDrafts-GET'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$", "required": true }, "debtor": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 140, "required": false }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false } }, "required": false }, "debtorAccount": { "type": "object", "properties": { "arrangementId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true } }, "required": false }, "batchBooking": { "type": "boolean", "default": false, "required": false }, "instructionPriority": { "type": "string", "enum": ["NORM", "HIGH"], "default": "NORM", "required": false }, "requestedExecutionDate": { "type": "string", "format": "date", "required": false }, "paymentMode": { "type": "string", "enum": ["SINGLE", "RECURRING"], "default": "SINGLE", "required": false }, "paymentType": { "type": "string", "minLength": 1, "maxLength": 20, "default": "SEPA_CREDIT_TRANSFER", "required": false }, "schedule": { "type": "object", "properties": { "nonWorkingDayExecutionStrategy": { "type": "string", "enum": ["BEFORE", "AFTER", "NONE"], "required": false }, "transferFrequency": { "type": "string", "enum": ["ONCE", "DAILY", "WEEKLY", "MONTHLY", "QUARTERLY", "YEARLY"], "required": false }, "on": { "type": "integer", "required": false }, "startDate": { "type": "string", "format": "date", "required": false }, "endDate": { "type": "string", "format": "date", "required": false }, "repeat": { "type": "integer", "required": false }, "every": { "type": "integer", "enum": [1, 2], "required": false } }, "required": false }, "creditTransferTransactionInformation": { "type": "array", "items": { "properties": { "instructedAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true }, "creditor": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 140, "required": false }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false } }, "required": true }, "creditorAccount": { "type": "object", "properties": { "accountType": { "type": "string", "enum": ["CHECKING", "SAVING"], "required": false } }, "required": true }, "creditorBank": { "type": "object", "properties": { "bankBranchCode": { "type": "string", "maxLength": 11, "required": false }, "name": { "type": "string", "maxLength": 140, "required": false }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false }, "bic": { "type": "string", "pattern": "^([A-Z0-9]){4}([A-Z]){2}([A-Z0-9]){2}([A-Z0-9]{3})?$", "required": false } }, "required": false }, "correspondentBank": { "type": "object", "properties": { "bankBranchCode": { "type": "string", "maxLength": 11, "required": false }, "name": { "type": "string", "maxLength": 140, "required": false }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false }, "bic": { "type": "string", "pattern": "^([A-Z0-9]){4}([A-Z]){2}([A-Z0-9]){2}([A-Z0-9]{3})?$", "required": false } }, "required": false }, "intermediaryBank": { "type": "object", "properties": { "bankBranchCode": { "type": "string", "maxLength": 11, "required": false }, "name": { "type": "string", "maxLength": 140, "required": false }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false }, "bic": { "type": "string", "pattern": "^([A-Z0-9]){4}([A-Z]){2}([A-Z0-9]){2}([A-Z0-9]{3})?$", "required": false } }, "required": false }, "messageToBank": { "type": "string", "maxLength": 140, "required": false }, "targetCurrency": { "type": "string", "pattern": "^[A-Z]{3}$", "required": false }, "remittanceInformation": { "type": "object", "properties": { "type": { "type": "string", "enum": ["STRUCTURED", "UNSTRUCTURED"], "default": "UNSTRUCTURED", "required": true }, "content": { "type": "string", "maxLength": 140, "required": true } }, "required": false }, "endToEndIdentification": { "type": "string", "maxLength": 35, "required": false } } }, "minItems": 1, "maxItems": 1, "required": false }, "totalAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "status": { "type": "string", "enum": ["DRAFT", "ENTERED", "READY", "ACCEPTED", "PROCESSED", "REJECTED", "CANCELLED", "CANCELLATION_PENDING"], "required": true }, "createdBy": { "type": "string", "maxLength": 128, "required": false }, "createdAt": { "type": "string", "format": "date-time", "required": false }, "version": { "type": "integer", "required": true } } } };
	
	    definedTypes['PaymentOrdersData.PaymentOrderDrafts-POST'] = { "properties": { "debtorAccount": { "type": "object", "properties": { "identification": { "type": "object", "properties": { "identification": { "type": "string", "maxLength": 36, "required": true }, "schemeName": { "type": "string", "enum": ["IBAN", "BBAN", "ID"], "required": true } }, "required": false }, "name": { "type": "string", "maxLength": 140, "required": false } }, "required": false }, "batchBooking": { "type": "boolean", "default": false, "required": false }, "instructionPriority": { "type": "string", "enum": ["NORM", "HIGH"], "default": "NORM", "required": false }, "requestedExecutionDate": { "type": "string", "format": "date", "required": false }, "paymentMode": { "type": "string", "enum": ["SINGLE", "RECURRING"], "default": "SINGLE", "required": false }, "paymentType": { "type": "string", "minLength": 1, "maxLength": 20, "default": "SEPA_CREDIT_TRANSFER", "required": false }, "schedule": { "type": "object", "properties": { "nonWorkingDayExecutionStrategy": { "type": "string", "enum": ["BEFORE", "AFTER", "NONE"], "required": false }, "transferFrequency": { "type": "string", "enum": ["ONCE", "DAILY", "WEEKLY", "MONTHLY", "QUARTERLY", "YEARLY"], "required": false }, "on": { "type": "integer", "required": false }, "startDate": { "type": "string", "format": "date", "required": false }, "endDate": { "type": "string", "format": "date", "required": false }, "repeat": { "type": "integer", "required": false }, "every": { "type": "integer", "enum": [1, 2], "required": false } }, "required": false }, "creditTransferTransactionInformation": { "type": "array", "items": { "properties": { "instructedAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "creditor": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 140, "required": false }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false } }, "required": false }, "creditorAccount": { "type": "object", "properties": { "accountType": { "type": "string", "enum": ["CHECKING", "SAVING"], "required": false } }, "required": false }, "creditorBank": { "type": "object", "properties": { "bankBranchCode": { "type": "string", "maxLength": 11, "required": false }, "name": { "type": "string", "maxLength": 140, "required": false }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false }, "bic": { "type": "string", "pattern": "^([A-Z0-9]){4}([A-Z]){2}([A-Z0-9]){2}([A-Z0-9]{3})?$", "required": false } }, "required": false }, "correspondentBank": { "type": "object", "properties": { "bankBranchCode": { "type": "string", "maxLength": 11, "required": false }, "name": { "type": "string", "maxLength": 140, "required": false }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false }, "bic": { "type": "string", "pattern": "^([A-Z0-9]){4}([A-Z]){2}([A-Z0-9]){2}([A-Z0-9]{3})?$", "required": false } }, "required": false }, "intermediaryBank": { "type": "object", "properties": { "bankBranchCode": { "type": "string", "maxLength": 11, "required": false }, "name": { "type": "string", "maxLength": 140, "required": false }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false }, "bic": { "type": "string", "pattern": "^([A-Z0-9]){4}([A-Z]){2}([A-Z0-9]){2}([A-Z0-9]{3})?$", "required": false } }, "required": false }, "messageToBank": { "type": "string", "maxLength": 140, "required": false }, "targetCurrency": { "type": "string", "pattern": "^[A-Z]{3}$", "required": false }, "remittanceInformation": { "type": "string", "maxLength": 140, "required": false }, "endToEndIdentification": { "type": "string", "maxLength": 35, "required": false } } }, "minItems": 0, "maxItems": 1, "required": false } } };
	
	    definedTypes['PaymentOrdersData.PaymentOrderDrafts-PUT'] = { "properties": { "id": { "type": "string", "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$", "required": true } } };
	
	    definedTypes['PaymentOrdersData.PaymentOrdersDrafts-POST-Response'] = { "properties": { "id": { "type": "string", "required": true } } };
	
	    definedTypes['PaymentOrdersData.PaymentOrdersValidate-POST'] = { "properties": {} };
	
	    definedTypes['PaymentOrdersData.PaymentOrdersValidate-POST-Response'] = { "properties": { "paymentSetupId": { "type": "string", "maxLength": 128, "required": false }, "paymentSubmissionId": { "type": "string", "maxLength": 128, "required": false }, "debtor": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 140, "required": true }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false } }, "required": false }, "debtorAccount": { "type": "object", "properties": { "arrangementId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true } }, "required": false }, "batchBooking": { "type": "boolean", "default": false, "required": false }, "instructionPriority": { "type": "string", "enum": ["NORM", "HIGH"], "default": "NORM", "required": false }, "requestedExecutionDate": { "type": "string", "format": "date", "required": false }, "paymentMode": { "type": "string", "enum": ["SINGLE", "RECURRING"], "default": "SINGLE", "required": false }, "paymentType": { "type": "string", "minLength": 1, "maxLength": 20, "default": "SEPA_CREDIT_TRANSFER", "required": false }, "schedule": { "type": "object", "properties": { "nonWorkingDayExecutionStrategy": { "type": "string", "enum": ["BEFORE", "AFTER", "NONE"], "required": false }, "transferFrequency": { "type": "string", "enum": ["ONCE", "DAILY", "WEEKLY", "MONTHLY", "QUARTERLY", "YEARLY"], "required": true }, "on": { "type": "integer", "required": true }, "startDate": { "type": "string", "format": "date", "required": true }, "endDate": { "type": "string", "format": "date", "required": false }, "repeat": { "type": "integer", "required": false }, "every": { "type": "integer", "enum": [1, 2], "required": true }, "nextExecutionDate": { "type": "string", "format": "date", "required": false } }, "required": false }, "creditTransferTransactionInformation": { "type": "array", "items": { "properties": { "instructedAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true }, "creditor": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 140, "required": true }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false } }, "required": true }, "creditorAccount": { "type": "object", "properties": { "accountType": { "type": "string", "enum": ["CHECKING", "SAVING"], "required": false } }, "required": true }, "creditorBank": { "type": "object", "properties": { "bankBranchCode": { "type": "string", "maxLength": 11, "required": false }, "name": { "type": "string", "maxLength": 140, "required": false }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false }, "bic": { "type": "string", "pattern": "^([A-Z0-9]){4}([A-Z]){2}([A-Z0-9]){2}([A-Z0-9]{3})?$", "required": false } }, "required": false }, "correspondentBank": { "type": "object", "properties": { "bankBranchCode": { "type": "string", "maxLength": 11, "required": false }, "name": { "type": "string", "maxLength": 140, "required": false }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false }, "bic": { "type": "string", "pattern": "^([A-Z0-9]){4}([A-Z]){2}([A-Z0-9]){2}([A-Z0-9]{3})?$", "required": false } }, "required": false }, "intermediaryBank": { "type": "object", "properties": { "bankBranchCode": { "type": "string", "maxLength": 11, "required": false }, "name": { "type": "string", "maxLength": 140, "required": false }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false }, "bic": { "type": "string", "pattern": "^([A-Z0-9]){4}([A-Z]){2}([A-Z0-9]){2}([A-Z0-9]{3})?$", "required": false } }, "required": false }, "messageToBank": { "type": "string", "maxLength": 140, "required": false }, "targetCurrency": { "type": "string", "pattern": "^[A-Z]{3}$", "required": false }, "remittanceInformation": { "type": "object", "properties": { "type": { "type": "string", "enum": ["STRUCTURED", "UNSTRUCTURED"], "default": "UNSTRUCTURED", "required": true }, "content": { "type": "string", "maxLength": 140, "required": true } }, "required": false }, "endToEndIdentification": { "type": "string", "maxLength": 35, "required": false } } }, "minItems": 1, "maxItems": 1, "required": false }, "totalAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false } } };
	
	    definedTypes['PaymentOrdersData.PaymentOrders-POST'] = { "properties": { "debtorAccount": { "type": "object", "properties": { "identification": { "type": "object", "properties": { "identification": { "type": "string", "maxLength": 36, "required": true }, "schemeName": { "type": "string", "enum": ["IBAN", "BBAN", "ID"], "required": true } }, "required": true }, "name": { "type": "string", "maxLength": 140, "required": false } }, "required": true }, "batchBooking": { "type": "boolean", "default": false, "required": false }, "instructionPriority": { "type": "string", "enum": ["NORM", "HIGH"], "default": "NORM", "required": false }, "requestedExecutionDate": { "type": "string", "format": "date", "required": true }, "paymentMode": { "type": "string", "enum": ["SINGLE", "RECURRING"], "default": "SINGLE", "required": false }, "paymentType": { "type": "string", "minLength": 1, "maxLength": 20, "default": "SEPA_CREDIT_TRANSFER", "required": false }, "schedule": { "type": "object", "properties": { "nonWorkingDayExecutionStrategy": { "type": "string", "enum": ["BEFORE", "AFTER", "NONE"], "required": false }, "transferFrequency": { "type": "string", "enum": ["ONCE", "DAILY", "WEEKLY", "MONTHLY", "QUARTERLY", "YEARLY"], "required": true }, "on": { "type": "integer", "required": true }, "startDate": { "type": "string", "format": "date", "required": true }, "endDate": { "type": "string", "format": "date", "required": false }, "repeat": { "type": "integer", "required": false }, "every": { "type": "integer", "enum": [1, 2], "required": true }, "nextExecutionDate": { "type": "string", "format": "date", "required": false } }, "required": false }, "creditTransferTransactionInformation": { "type": "array", "items": { "properties": { "instructedAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true }, "creditor": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 140, "required": true }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false } }, "required": true }, "creditorAccount": { "type": "object", "properties": { "accountType": { "type": "string", "enum": ["CHECKING", "SAVING"], "required": false } }, "required": true }, "creditorBank": { "type": "object", "properties": { "bankBranchCode": { "type": "string", "maxLength": 11, "required": false }, "name": { "type": "string", "maxLength": 140, "required": false }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false }, "bic": { "type": "string", "pattern": "^([A-Z0-9]){4}([A-Z]){2}([A-Z0-9]){2}([A-Z0-9]{3})?$", "required": false } }, "required": false }, "correspondentBank": { "type": "object", "properties": { "bankBranchCode": { "type": "string", "maxLength": 11, "required": false }, "name": { "type": "string", "maxLength": 140, "required": false }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false }, "bic": { "type": "string", "pattern": "^([A-Z0-9]){4}([A-Z]){2}([A-Z0-9]){2}([A-Z0-9]{3})?$", "required": false } }, "required": false }, "intermediaryBank": { "type": "object", "properties": { "bankBranchCode": { "type": "string", "maxLength": 11, "required": false }, "name": { "type": "string", "maxLength": 140, "required": false }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false }, "bic": { "type": "string", "pattern": "^([A-Z0-9]){4}([A-Z]){2}([A-Z0-9]){2}([A-Z0-9]{3})?$", "required": false } }, "required": false }, "messageToBank": { "type": "string", "maxLength": 140, "required": false }, "targetCurrency": { "type": "string", "pattern": "^[A-Z]{3}$", "required": false }, "remittanceInformation": { "type": "string", "maxLength": 140, "required": false }, "endToEndIdentification": { "type": "string", "maxLength": 35, "required": false } } }, "minItems": 1, "maxItems": 1, "required": true } } };
	
	    definedTypes['PaymentOrdersData.PaymentOrders-POST-Response'] = { "properties": { "id": { "type": "string", "required": true }, "status": { "type": "string", "enum": ["DRAFT", "ENTERED", "READY", "ACCEPTED", "PROCESSED", "REJECTED", "CANCELLED", "CANCELLATION_PENDING"], "required": true } } };
	
	    definedTypes['PaymentOrdersData.PaymentOrder-GET'] = { "properties": {} };
	
	    definedTypes['PaymentOrdersData.PaymentOrder-PUT'] = { "properties": { "id": { "type": "string", "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$", "required": true } } };
	
	    definedTypes['PaymentOrdersData.PaymentOrders-GET'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$", "required": true }, "approvalId": { "type": "string", "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$", "required": false }, "status": { "type": "string", "enum": ["DRAFT", "ENTERED", "READY", "ACCEPTED", "PROCESSED", "REJECTED", "CANCELLED", "CANCELLATION_PENDING"], "required": true }, "bankStatus": { "type": "string", "maxLength": 35, "required": false }, "reasonCode": { "type": "string", "maxLength": 4, "required": false }, "reasonText": { "type": "string", "maxLength": 35, "required": false }, "errorDescription": { "type": "string", "maxLength": 105, "required": false }, "createdBy": { "type": "string", "maxLength": 128, "required": false }, "createdAt": { "type": "string", "format": "date-time", "required": false }, "actions": { "type": "array", "items": { "properties": {} }, "minItems": 0, "required": false }, "version": { "type": "integer", "required": true } } } };
	
	    definedTypes['PaymentOrdersData.UpdateStatus-PUT'] = { "properties": { "bankReferenceId": { "type": "string", "maxLength": 64, "required": true }, "status": { "type": "string", "enum": ["DRAFT", "ENTERED", "READY", "ACCEPTED", "PROCESSED", "REJECTED", "CANCELLED", "CANCELLATION_PENDING"], "required": true }, "bankStatus": { "type": "string", "maxLength": 35, "required": true }, "reasonCode": { "type": "string", "maxLength": 4, "required": false }, "reasonText": { "type": "string", "maxLength": 35, "required": false }, "errorDescription": { "type": "string", "maxLength": 105, "required": false }, "nextExecutionDate": { "type": "string", "format": "date", "required": false }, "paymentSetupId": { "type": "string", "maxLength": 128, "required": false }, "paymentSubmissionId": { "type": "string", "maxLength": 128, "required": false } } };
	
	    definedTypes['PaymentOrdersData.RetryOrdersRequest'] = { "properties": { "selectionMaxSize": { "type": "number", "required": false }, "untilDate": { "type": "string", "format": "date", "required": false } } };
	
	    definedTypes['PaymentOrdersData.RetryOrdersResponse'] = { "properties": { "successCount": { "type": "integer", "minimum": 0, "required": false }, "failCount": { "type": "integer", "minimum": 0, "required": false } } };
	
	    definedTypes['PaymentOrdersData.Currencies-GET'] = { "type": "array", "items": { "properties": { "code": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } } } };
	
	    definedTypes['PaymentOrdersData.Rate-GET'] = { "properties": { "rate": { "type": "number", "required": true } } };
	
	    definedTypes['PaymentOrdersData.BreachReportError'] = { "properties": { "message": { "type": "string", "required": true }, "payment": { "type": "object", "properties": { "id": { "type": "string", "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$", "required": true }, "approvalId": { "type": "string", "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$", "required": false }, "status": { "type": "string", "enum": ["DRAFT", "ENTERED", "READY", "ACCEPTED", "PROCESSED", "REJECTED", "CANCELLED", "CANCELLATION_PENDING"], "required": true }, "bankStatus": { "type": "string", "maxLength": 35, "required": false }, "reasonCode": { "type": "string", "maxLength": 4, "required": false }, "reasonText": { "type": "string", "maxLength": 35, "required": false }, "errorDescription": { "type": "string", "maxLength": 105, "required": false }, "createdBy": { "type": "string", "maxLength": 128, "required": false }, "createdAt": { "type": "string", "format": "date-time", "required": false }, "actions": { "type": "array", "items": { "properties": {} }, "minItems": 0, "required": false }, "version": { "type": "integer", "required": true } }, "required": false }, "checkTime": { "type": "string", "format": "date-time", "required": false }, "breachReport": { "type": "array", "items": { "properties": { "limitedEntity": { "type": "array", "items": { "properties": { "ref": { "type": "string", "required": true }, "type": { "type": "string", "required": true }, "description": { "type": "string", "required": true } } }, "required": false }, "shadow": { "type": "boolean", "required": false }, "currency": { "type": "string", "required": false }, "user-BBID": { "type": "string", "required": false }, "breachInfo": { "type": "array", "items": { "properties": { "breachType": { "type": "string", "enum": ["THRESHOLD", "CONSUMPTION"], "required": true }, "timeframe": { "type": "object", "properties": { "period": { "type": "string", "required": true }, "startTime": { "type": "string", "format": "date-time", "required": true }, "endTime": { "type": "string", "format": "date-time", "required": true } }, "required": true }, "currentConsumption": { "type": "string", "required": true }, "currentThreshold": { "type": "string", "required": true } } }, "required": true } } }, "required": false } } };
	
	    definedTypes['PaymentOrdersData.Unauthorized-Error'] = { "properties": { "message": { "type": "string", "required": true } } };
	
	    definedTypes['PaymentOrdersData.PaymentOrderApproval-PUT-Response'] = { "properties": { "approval": { "type": "object", "properties": { "paymentOrder": { "type": "object", "properties": { "id": { "type": "string", "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$", "required": true }, "approvalId": { "type": "string", "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$", "required": false }, "status": { "type": "string", "enum": ["DRAFT", "ENTERED", "READY", "ACCEPTED", "PROCESSED", "REJECTED", "CANCELLED", "CANCELLATION_PENDING"], "required": true }, "bankStatus": { "type": "string", "maxLength": 35, "required": false }, "reasonCode": { "type": "string", "maxLength": 4, "required": false }, "reasonText": { "type": "string", "maxLength": 35, "required": false }, "errorDescription": { "type": "string", "maxLength": 105, "required": false }, "createdBy": { "type": "string", "maxLength": 128, "required": false }, "createdAt": { "type": "string", "format": "date-time", "required": false }, "actions": { "type": "array", "items": { "properties": {} }, "minItems": 0, "required": false }, "version": { "type": "integer", "required": true } }, "required": true }, "approvalStatus": { "type": "string", "maxLength": 70, "required": true } }, "required": false } } };
	
	    definedTypes['PaymentOrdersData.PaymentOrderApproval-PUT-Request'] = { "properties": { "approvalStatus": { "type": "string", "enum": ["APPROVED", "REJECTED"], "required": true } } };
	
	    definedTypes['PaymentOrdersData.PaymentOrderCancel-POST-Response'] = { "properties": { "accepted": { "type": "boolean", "required": true } } };
	
	    definedTypes['PaymentOrdersData.PaymentOrderCancel-POST-Request'] = { "properties": { "version": { "type": "integer", "required": true } } };
	
	    definedTypes['PaymentOrdersData.BulkPaymentOrdersApproval-PUT-Request'] = { "properties": { "approvalStatus": { "type": "string", "enum": ["APPROVED", "REJECTED"], "required": true }, "paymentOrderIds": { "type": "array", "items": { "properties": {} }, "minItems": 1, "maxItems": 100, "required": true } } };
	
	    definedTypes['PaymentOrdersData.BulkPaymentOrdersApproval-PUT-Response'] = { "properties": { "approvalStatus": { "type": "string", "enum": ["APPROVED", "REJECTED"], "required": true }, "paymentOrders": { "type": "array", "items": { "properties": { "paymentOrderId": { "type": "string", "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$", "required": true }, "paymentOrder": { "type": "object", "properties": { "id": { "type": "string", "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$", "required": true }, "approvalId": { "type": "string", "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$", "required": false }, "status": { "type": "string", "enum": ["DRAFT", "ENTERED", "READY", "ACCEPTED", "PROCESSED", "REJECTED", "CANCELLED", "CANCELLATION_PENDING"], "required": true }, "bankStatus": { "type": "string", "maxLength": 35, "required": false }, "reasonCode": { "type": "string", "maxLength": 4, "required": false }, "reasonText": { "type": "string", "maxLength": 35, "required": false }, "errorDescription": { "type": "string", "maxLength": 105, "required": false }, "createdBy": { "type": "string", "maxLength": 128, "required": false }, "createdAt": { "type": "string", "format": "date-time", "required": false }, "actions": { "type": "array", "items": { "properties": {} }, "minItems": 0, "required": false }, "version": { "type": "integer", "required": true } }, "required": false }, "approvalStatus": { "type": "string", "maxLength": 70, "required": false }, "status": { "type": "object", "properties": { "code": { "enum": ["OK", "ERROR"], "required": true }, "message": { "type": "string", "required": false }, "errors": { "type": "array", "items": { "properties": { "message": { "type": "string", "required": false }, "key": { "type": "string", "required": false }, "context": { "type": "object", "properties": {}, "required": false } } }, "required": false } }, "required": true } } }, "required": true }, "successCount": { "type": "integer", "minimum": 0, "required": true }, "failCount": { "type": "integer", "minimum": 0, "required": true } } };
	
	    /**
	     * @typedef PaymentOrdersData.AccountIdentification
	     * @type {Object}
	     * @property {?PaymentOrdersData.Definitions/identification} identification
	     * @property {?String} name This is the name of the account, and not the name of the account holder.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.BulkPaymentOrdersApproval-PUT-Request
	     * @type {Object}
	     * @property {String} approvalStatus The status to apply to all the payment orders
	     * @property {Array.<String>} paymentOrderIds The list of ids of the payment orders to bulk update.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.Currencies-GET
	     * @type {Array.<PaymentOrdersData.Currency>}
	     */
	
	    /**
	     * @typedef PaymentOrdersData.Currency
	     * @type {Object}
	     * @property {String} amount The amount in the specified currency
	     * @property {String} currencyCode The alpha-3 code (complying with ISO 4217) of the currency that qualifies the amount
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.DebtorAccount
	     * @type {Object}
	     * @property {String} arrangementId
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.Definitions/identification
	     * @type {Object}
	     * @property {String} identification The identifier of the account. Can be a regular account number, or an ID.
	     * @property {String} schemeName Specifies the kind of the account identifier
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.Definitions/postalAddress
	     * @type {Object}
	     * @property {?String} addressLine1
	     * @property {?String} addressLine2
	     * @property {?String} streetName
	     * @property {?String} postCode
	     * @property {?String} town
	     * @property {?String} countrySubDivision
	     * @property {?String} country
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.IdentifiedPaymentOrder
	     * @type {Object}
	     * @property {String} id
	     * @property {?PaymentOrdersData.InvolvedParty} debtor The identification of the debtor party
	     * @property {?PaymentOrdersData.DebtorAccount} debtorAccount This identified debtor account with arrangement id.
	     * @property {?Boolean} batchBooking
	     * @property {?String} instructionPriority
	     * @property {?String} requestedExecutionDate
	     * @property {?String} paymentMode
	     * @property {?String} paymentType
	     * @property {?PaymentOrdersData.StandingOrderSchedule} schedule
	     * @property {?Array.<IdentifiedCreditTransaction>} creditTransferTransactionInformation An array of transactions. Currently we only support single payments (SEPA and US domestic wire) so the limit is temporarily set to 1.
	     * @property {?PaymentOrdersData.Currency} totalAmount
	     * @property {String} status
	     * @property {?String} createdBy Creator user info.
	     * @property {?String} createdAt Date and time indicating when the payment was created
	     * @property {Integer} version Indication of what version the payment order currently has
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.InvolvedParty
	     * @type {Object}
	     * @property {?String} name
	     * @property {?PaymentOrdersData.Definitions/postalAddress} postalAddress
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.PaymentOrder-GET
	     * @type {Object}
	     */
	
	    /**
	     * @typedef PaymentOrdersData.PaymentOrder-PUT
	     * @type {Object}
	     * @property {String} id
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.PaymentOrderApproval-PUT-Request
	     * @type {Object}
	     * @property {String} approvalStatus
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.PaymentOrderCancel-POST-Request
	     * @type {Object}
	     * @property {Integer} version Indication of what version the payment the user wants to cancel
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.PaymentOrderCancel-POST-Response
	     * @type {Object}
	     * @property {Boolean} accepted Indication if the cancel request was accepted
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.PaymentOrderDraft-GET
	     * @type {Object}
	     */
	
	    /**
	     * @typedef PaymentOrdersData.PaymentOrderDrafts-GET
	     * @type {Array.<PaymentOrdersData.IdentifiedPaymentOrder>}
	     */
	
	    /**
	     * @typedef PaymentOrdersData.PaymentOrderDrafts-POST
	     * @type {Object}
	     * @property {?PaymentOrdersData.AccountIdentification} debtorAccount
	     * @property {?Boolean} batchBooking
	     * @property {?String} instructionPriority
	     * @property {?String} requestedExecutionDate
	     * @property {?String} paymentMode
	     * @property {?String} paymentType
	     * @property {?PaymentOrdersData.StandingOrderSchedule} schedule
	     * @property {?Array.<InitiateCreditTransaction>} creditTransferTransactionInformation An array of transactions. Currently we only support single payments (SEPA and US domestic wire) so the limit is temporarily set to 1.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.PaymentOrderDrafts-PUT
	     * @type {Object}
	     * @property {String} id This id is filled from the URI parameters. Any value in the PUT body is overwritten.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.PaymentOrders-POST
	     * @type {Object}
	     * @property {PaymentOrdersData.AccountIdentification} debtorAccount
	     * @property {?Boolean} batchBooking
	     * @property {?String} instructionPriority
	     * @property {String} requestedExecutionDate
	     * @property {?String} paymentMode
	     * @property {?String} paymentType
	     * @property {?PaymentOrdersData.StandingOrderSchedule} schedule
	     * @property {Array.<InitiateCreditTransaction>} creditTransferTransactionInformation An array of transactions. Currently we only support single payments (SEPA and US domestic wire) so the limit is temporarily set to 1.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.PaymentOrders-POST-Response
	     * @type {Object}
	     * @property {String} id
	     * @property {String} status
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.PaymentOrdersDrafts-POST-Response
	     * @type {Object}
	     * @property {String} id
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.PaymentOrdersValidate-POST
	     * @type {Object}
	     */
	
	    /**
	     * @typedef PaymentOrdersData.Rate-GET
	     * @type {Object}
	     * @property {Number} rate Rate for given currencies
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.RetryOrdersRequest
	     * @type {Object}
	     * @property {?Number} selectionMaxSize The maximum number of payment orders to attempt to process in this request. Optional, when not specified all eligible payment orders will be retried.
	     * @property {?String} untilDate The date used when selecting the payment orders with execution date on or before specified date. Optional, when not specified the system date is used.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.RetryOrdersResponse
	     * @type {Object}
	     * @property {?Integer} successCount The number of payment orders processed successfully.
	     * @property {?Integer} failCount The number of payment orders that failed processing.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.StandingOrderSchedule
	     * @type {Object}
	     * @property {?String} nonWorkingDayExecutionStrategy One of "BEFORE", "AFTER", "NONE"
	     * @property {?String} transferFrequency One of "ONCE", "DAILY", "WEEKLY", "MONTHLY", "QUARTERLY", "YEARLY"
	     * @property {?Integer} on Denotes day on which transfer should be executed. For weekly it will be 1..7 indicating weekday. For monthly it will be 1..31 indicating day of month. For yearly it will be 1..12 indicating month of the year
	     * @property {?String} startDate When to start executing the schedule. First transfer will be executed on first calculated date by schedule after this date
	     * @property {?String} endDate When to stop transfers. Transfers will not be executed after this date. Only one of endDate and repeat is possible. If neither repeat nor endDate is provided transfer will be executed until canceled
	     * @property {?Integer} repeat Number of transfer to be executed. Only one of endDate and repeat is possible. If neither repeat nor endDate is provided transfer will be executed until canceled
	     * @property {?Number} every One of 1, 2
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.Unauthorized-Error
	     * @type {Object}
	     * @property {String} message
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.UpdateStatus-PUT
	     * @type {Object}
	     * @property {String} bankReferenceId This is the internal identifier from the bank that represents the payment order
	     * @property {String} status
	     * @property {String} bankStatus Internal status of the payment order in the core banking system.
	     * @property {?String} reasonCode Reason code the core banking system accepted/rejected the payment
	     * @property {?String} reasonText Human readable reason the core banking system accepted/rejected the payment
	     * @property {?String} errorDescription Additional information from the core banking system on why the payment was refused
	     * @property {?String} nextExecutionDate
	     * @property {?String} paymentSetupId
	     * @property {?String} paymentSubmissionId
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /*
	     * @name parse
	     * @type {Function}
	     * @private
	     * @description Should be overwritten by transformResponse on a project level
	     */
	    function parse(res) {
	      return {
	        data: res.data,
	        headers: res.headers,
	        status: res.status,
	        statusText: res.statusText
	      };
	    }
	
	    /**
	     * @name PaymentOrdersData#getPaymentOrders
	     * @type {Function}
	     * @description Retrieve list of payments orders
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?string} params.status status.
	       
	     * @param {?string} params.query The search term used to make partial search on properties account holder name and iban/bban. Minimum length is 3. Eg: John.
	       
	     * @param {?number} params.amountFrom Lower value of the range search. The value is inclusive so this is acting as >=. Eg: 1000.
	       
	     * @param {?number} params.amountTo Upper value of the range search. The value is inclusive so this is acting as <=. Eg: 10000.
	       
	     * @param {?string} params.executionDate Exact value to match against the requested execution date. Eg: 2015-05-23.
	       
	     * @param {?string} params.executionDateFrom Lower value of the range search. The value is inclusive so this is acting as >=. Eg: 2015-05-24.
	       
	     * @param {?string} params.executionDateTo Upper value of the range search. The value is inclusive so this is acting as <=. Eg: 2015-05-25.
	       
	     * @param {?string} params.nextExecutionDate Next execution date equals to. Eg: 2015-05-26.
	       
	     * @param {?string} params.nextExecutionDateFrom Lower value of the range search. The value is inclusive so this is acting as >=. Eg: 2017-07-25.
	       
	     * @param {?string} params.nextExecutionDateTo Upper value of the range search. The value is inclusive so this is acting as <=. Eg: 2017-07-26.
	       
	     * @param {?string} params.paymentMode Whether to return recurring or single payment orders only.
	       
	     * @param {?string} params.paymentSetupId Field used for searching by exact matches on payment setup id. Eg: abc.
	       
	     * @param {?string} params.transferFrequency Field for searching on transfer frequencies.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     * @param {?string} params.orderBy Order by field: status, debtorName, debtorAccount, creditorName, creditorAccount, currency, amount, requestedExecutionDate.
	       
	     * @param {?string} params.direction Direction. (defaults to DESC)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PaymentOrdersData.PaymentOrders-GET} on success 
	     *
	     * @example
	     * paymentOrdersData
	     *  .getPaymentOrders(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPaymentOrders(params, headers) {
	      var url = '' + baseUri + version + '/payment-orders';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name PaymentOrdersData#postPaymentOrdersRecord
	     * @type {Function}
	     * @description Start a new Payment Order initiation process
	     
	     * @param {PaymentOrdersData.PaymentOrders-POST} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     * @param {?string} headers.X-MFA Challenge payload response. Eg: sms challenge="123456789".
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PaymentOrdersData.PaymentOrders-POST-Response}, {@link PaymentOrdersData.PaymentOrders-POST-Response} on success  or rejects with data of {@link PaymentOrdersData.Unauthorized-Error}, {@link PaymentOrdersData.BreachReportError} on error
	     *
	     * @example
	     * paymentOrdersData
	     *  .postPaymentOrdersRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postPaymentOrdersRecord(data, headers) {
	      var url = '' + baseUri + version + '/payment-orders';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name PaymentOrdersData#getPaymentOrderDrafts
	     * @type {Function}
	     * @description Retrieve a list of draft payment orders
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?string} params.query The search term used to make partial search on properties account holder name and iban/bban. Minimum length is 3. Eg: John.
	       
	     * @param {?number} params.amountFrom Lower value of the range search. The value is inclusive so this is acting as >=. Eg: 1000.
	       
	     * @param {?number} params.amountTo Upper value of the range search. The value is inclusive so this is acting as <=. Eg: 10000.
	       
	     * @param {?string} params.executionDate Exact value to match against the requested execution date. Eg: 2015-05-23.
	       
	     * @param {?string} params.executionDateFrom Lower value of the range search. The value is inclusive so this is acting as >=. Eg: 2015-05-24.
	       
	     * @param {?string} params.executionDateTo Upper value of the range search. The value is inclusive so this is acting as <=. Eg: 2015-05-25.
	       
	     * @param {?string} params.nextExecutionDate Next execution date equals to. Eg: 2015-05-26.
	       
	     * @param {?string} params.nextExecutionDateFrom Lower value of the range search. The value is inclusive so this is acting as >=. Eg: 2017-07-25.
	       
	     * @param {?string} params.nextExecutionDateTo Upper value of the range search. The value is inclusive so this is acting as <=. Eg: 2017-07-26.
	       
	     * @param {?string} params.paymentMode Whether to return recurring or single payment orders only.
	       
	     * @param {?string} params.paymentSetupId Field used for searching by exact matches on payment setup id. Eg: abc.
	       
	     * @param {?string} params.transferFrequency Field for searching on transfer frequencies.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     * @param {?string} params.orderBy Order by field: status, debtorName, debtorAccount, creditorName, creditorAccount, currency, amount, requestedExecutionDate.
	       
	     * @param {?string} params.direction Direction. (defaults to DESC)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PaymentOrdersData.PaymentOrderDrafts-GET} on success 
	     *
	     * @example
	     * paymentOrdersData
	     *  .getPaymentOrderDrafts(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPaymentOrderDrafts(params, headers) {
	      var url = '' + baseUri + version + '/payment-order-drafts';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name PaymentOrdersData#postPaymentOrderDraftsRecord
	     * @type {Function}
	     * @description Creates a draft payment
	     
	     * @param {PaymentOrdersData.PaymentOrderDrafts-POST} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PaymentOrdersData.PaymentOrdersDrafts-POST-Response} on success 
	     *
	     * @example
	     * paymentOrdersData
	     *  .postPaymentOrderDraftsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postPaymentOrderDraftsRecord(data, headers) {
	      var url = '' + baseUri + version + '/payment-order-drafts';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name PaymentOrdersData#postPaymentOrdersValidateRecord
	     * @type {Function}
	     * @description Validate a payment order
	     
	     * @param {PaymentOrdersData.PaymentOrdersValidate-POST} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PaymentOrdersData.PaymentOrdersValidate-POST-Response} on success 
	     *
	     * @example
	     * paymentOrdersData
	     *  .postPaymentOrdersValidateRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postPaymentOrdersValidateRecord(data, headers) {
	      var url = '' + baseUri + version + '/payment-orders/validate';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name PaymentOrdersData#putPaymentOrdersBulkApprovalsRecord
	     * @type {Function}
	     * @description Approve or reject a set of given payment orders at once
	     
	     * @param {PaymentOrdersData.BulkPaymentOrdersApproval-PUT-Request} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PaymentOrdersData.BulkPaymentOrdersApproval-PUT-Response} on success 
	     *
	     * @example
	     * paymentOrdersData
	     *  .putPaymentOrdersBulkApprovalsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putPaymentOrdersBulkApprovalsRecord(data, headers) {
	      var url = '' + baseUri + version + '/payment-orders/bulk-approvals';
	
	      return httpClient({
	        method: 'PUT',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name PaymentOrdersData#getPaymentOrdersRecord
	     * @type {Function}
	     * @description Retrieve the single payment order
	     
	     * @param {string} paymentOrderId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PaymentOrdersData.PaymentOrder-GET} on success 
	     *
	     * @example
	     * paymentOrdersData
	     *  .getPaymentOrdersRecord(paymentOrderId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPaymentOrdersRecord(paymentOrderId, params, headers) {
	      var url = '' + baseUri + version + '/payment-orders/' + paymentOrderId;
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name PaymentOrdersData#deletePaymentOrdersRecord
	     * @type {Function}
	     * @description Deletes a payment order if:
	    - The version is the exact same as the stored database.
	    - The payment status in DBS is Entered
	    - Has no approvals or approval is disabled
	    - Request comes from a user who is the creator/initiator of the payment
	    - The user has the required entitlement:
	    - ‘Delete' permission for the corresponding business function (respective payment type) and arrangement id
	     
	     * @param {string} paymentOrderId 
	       
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {number} params.version version.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * paymentOrdersData
	     *  .deletePaymentOrdersRecord(paymentOrderId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deletePaymentOrdersRecord(paymentOrderId, params, headers) {
	      var url = '' + baseUri + version + '/payment-orders/' + paymentOrderId;
	
	      return httpClient({
	        method: 'DELETE',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name PaymentOrdersData#putPaymentOrdersRecord
	     * @type {Function}
	     * @description ### Updates a single payment order.  
	    Editing a payment can only be done when the status is one of the following:
	    - ENTERED
	    
	    Editing a payment will:
	    - clear any approvals gathered so far (if approval is enabled)
	    - roll back old limits (if limits is enabled)
	    - re-enter submit payment flow
	     
	     * @param {string} paymentOrderId 
	       
	     
	     * @param {PaymentOrdersData.PaymentOrder-PUT} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     * @param {?string} headers.X-MFA Challenge payload response. Eg: sms challenge="123456789".
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PaymentOrdersData.PaymentOrders-POST-Response}, {@link PaymentOrdersData.PaymentOrders-POST-Response} on success  or rejects with data of {@link PaymentOrdersData.Unauthorized-Error}, {@link PaymentOrdersData.BreachReportError} on error
	     *
	     * @example
	     * paymentOrdersData
	     *  .putPaymentOrdersRecord(paymentOrderId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putPaymentOrdersRecord(paymentOrderId, data, headers) {
	      var url = '' + baseUri + version + '/payment-orders/' + paymentOrderId;
	
	      return httpClient({
	        method: 'PUT',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name PaymentOrdersData#putPaymentOrdersApprovalsRecord
	     * @type {Function}
	     * @description Approves or rejects a given payment order
	     
	     * @param {string} paymentOrderId 
	       
	     
	     * @param {PaymentOrdersData.PaymentOrderApproval-PUT-Request} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PaymentOrdersData.PaymentOrderApproval-PUT-Response}, {@link PaymentOrdersData.PaymentOrders-POST-Response}, {@link PaymentOrdersData.PaymentOrders-POST-Response} on success  or rejects with data of {@link PaymentOrdersData.BreachReportError} on error
	     *
	     * @example
	     * paymentOrdersData
	     *  .putPaymentOrdersApprovalsRecord(paymentOrderId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putPaymentOrdersApprovalsRecord(paymentOrderId, data, headers) {
	      var url = '' + baseUri + version + '/payment-orders/' + paymentOrderId + '/approvals';
	
	      return httpClient({
	        method: 'PUT',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name PaymentOrdersData#postPaymentOrdersCancelRecord
	     * @type {Function}
	     * @description Cancel a single payment order.
	     
	     * @param {string} paymentOrderId 
	       
	     
	     * @param {PaymentOrdersData.PaymentOrderCancel-POST-Request} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PaymentOrdersData.PaymentOrderCancel-POST-Response} on success 
	     *
	     * @example
	     * paymentOrdersData
	     *  .postPaymentOrdersCancelRecord(paymentOrderId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postPaymentOrdersCancelRecord(paymentOrderId, data, headers) {
	      var url = '' + baseUri + version + '/payment-orders/' + paymentOrderId + '/cancel';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name PaymentOrdersData#putPaymentOrdersUpdateStatusRecord
	     * @type {Function}
	     * @description Update payment order status
	     
	     * @param {PaymentOrdersData.UpdateStatus-PUT} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PaymentOrdersData.UpdateStatus-PUT} on success 
	     *
	     * @example
	     * paymentOrdersData
	     *  .putPaymentOrdersUpdateStatusRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putPaymentOrdersUpdateStatusRecord(data, headers) {
	      var url = '' + baseUri + version + '/payment-orders/update-status';
	
	      return httpClient({
	        method: 'PUT',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name PaymentOrdersData#putPaymentOrdersRetryOrdersRecord
	     * @type {Function}
	     * @description Update payment order status
	     
	     * @param {PaymentOrdersData.RetryOrdersRequest} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PaymentOrdersData.RetryOrdersResponse} on success 
	     *
	     * @example
	     * paymentOrdersData
	     *  .putPaymentOrdersRetryOrdersRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putPaymentOrdersRetryOrdersRecord(data, headers) {
	      var url = '' + baseUri + version + '/payment-orders/retry-orders';
	
	      return httpClient({
	        method: 'PUT',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name PaymentOrdersData#getPaymentOrdersCurrencies
	     * @type {Function}
	     * @description Get currencies available for payment
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PaymentOrdersData.Currencies-GET} on success 
	     *
	     * @example
	     * paymentOrdersData
	     *  .getPaymentOrdersCurrencies(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPaymentOrdersCurrencies(params, headers) {
	      var url = '' + baseUri + version + '/payment-orders/currencies';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name PaymentOrdersData#getPaymentOrdersRate
	     * @type {Function}
	     * @description Get available rate for currencies
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.currencyFrom Currency transfer from. Eg: EUR.
	       
	     * @param {string} params.currencyTo Currency transfer to. Eg: USD.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PaymentOrdersData.Rate-GET} on success 
	     *
	     * @example
	     * paymentOrdersData
	     *  .getPaymentOrdersRate(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPaymentOrdersRate(params, headers) {
	      var url = '' + baseUri + version + '/payment-orders/rate';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name PaymentOrdersData#getPaymentOrderDraftsRecord
	     * @type {Function}
	     * @description Retrieve the single payment order
	     
	     * @param {string} draftPaymentOrderId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PaymentOrdersData.PaymentOrderDraft-GET} on success 
	     *
	     * @example
	     * paymentOrdersData
	     *  .getPaymentOrderDraftsRecord(draftPaymentOrderId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPaymentOrderDraftsRecord(draftPaymentOrderId, params, headers) {
	      var url = '' + baseUri + version + '/payment-order-drafts/' + draftPaymentOrderId;
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name PaymentOrdersData#deletePaymentOrderDraftsRecord
	     * @type {Function}
	     * @description Delete a single draft payment order
	     
	     * @param {string} draftPaymentOrderId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * paymentOrdersData
	     *  .deletePaymentOrderDraftsRecord(draftPaymentOrderId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deletePaymentOrderDraftsRecord(draftPaymentOrderId, params, headers) {
	      var url = '' + baseUri + version + '/payment-order-drafts/' + draftPaymentOrderId;
	
	      return httpClient({
	        method: 'DELETE',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name PaymentOrdersData#putPaymentOrderDraftsRecord
	     * @type {Function}
	     * @description Update an existing draft payment with new information.
	     
	     * @param {string} draftPaymentOrderId 
	       
	     
	     * @param {PaymentOrdersData.PaymentOrderDrafts-PUT} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PaymentOrdersData.PaymentOrdersDrafts-POST-Response} on success 
	     *
	     * @example
	     * paymentOrdersData
	     *  .putPaymentOrderDraftsRecord(draftPaymentOrderId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putPaymentOrderDraftsRecord(draftPaymentOrderId, data, headers) {
	      var url = '' + baseUri + version + '/payment-order-drafts/' + draftPaymentOrderId;
	
	      return httpClient({
	        method: 'PUT',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @description
	     * Schema data. Keys of the object are names of the POST and PUT methods
	     *
	     * Note: The schema is not strictly a JSON schema. It is a whitelisted set of
	     * keys for each object property. The keys that are exposed are meant for validation
	     * purposes.
	     *
	     * The full list of *possible* keys for each property is:
	     * type, minimum, maximum, minLength, maxLength, pattern, enum, format, default,
	     * properties, items, minItems, maxItems, uniqueItems and required.
	     *
	     * See http://json-schema.org/latest/json-schema-validation.html for more details
	     * on the meaning of these keys.
	     *
	     * The "required" array from JSON schema is tranformed into a "required" boolean
	     * on each property. This is for ease of use.
	     *
	     * @name PaymentOrdersData#schemas
	     * @type {Object}
	     */
	    var schemas = {};
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postPaymentOrdersRecord method
	     *
	     * @name PaymentOrdersData#schemas.postPaymentOrdersRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "debtorAccount": {
	        "type": "object",
	        "properties": {
	          "identification": {
	            "type": "object",
	            "properties": {
	              "identification": {
	                "type": "string",
	                "maxLength": 36,
	                "required": true
	              },
	              "schemeName": {
	                "type": "string",
	                "enum": [
	                  "IBAN",
	                  "BBAN",
	                  "ID"
	                ],
	                "required": true
	              }
	            },
	            "required": true
	          },
	          "name": {
	            "type": "string",
	            "maxLength": 140,
	            "required": false
	          }
	        },
	        "required": true
	      },
	      "batchBooking": {
	        "type": "boolean",
	        "default": false,
	        "required": false
	      },
	      "instructionPriority": {
	        "type": "string",
	        "enum": [
	          "NORM",
	          "HIGH"
	        ],
	        "default": "NORM",
	        "required": false
	      },
	      "requestedExecutionDate": {
	        "type": "string",
	        "format": "date",
	        "required": true
	      },
	      "paymentMode": {
	        "type": "string",
	        "enum": [
	          "SINGLE",
	          "RECURRING"
	        ],
	        "default": "SINGLE",
	        "required": false
	      },
	      "paymentType": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 20,
	        "default": "SEPA_CREDIT_TRANSFER",
	        "required": false
	      },
	      "schedule": {
	        "type": "object",
	        "properties": {
	          "nonWorkingDayExecutionStrategy": {
	            "type": "string",
	            "enum": [
	              "BEFORE",
	              "AFTER",
	              "NONE"
	            ],
	            "required": false
	          },
	          "transferFrequency": {
	            "type": "string",
	            "enum": [
	              "ONCE",
	              "DAILY",
	              "WEEKLY",
	              "MONTHLY",
	              "QUARTERLY",
	              "YEARLY"
	            ],
	            "required": true
	          },
	          "on": {
	            "type": "integer",
	            "required": true
	          },
	          "startDate": {
	            "type": "string",
	            "format": "date",
	            "required": true
	          },
	          "endDate": {
	            "type": "string",
	            "format": "date",
	            "required": false
	          },
	          "repeat": {
	            "type": "integer",
	            "required": false
	          },
	          "every": {
	            "type": "integer",
	            "enum": [
	              1,
	              2
	            ],
	            "required": true
	          },
	          "nextExecutionDate": {
	            "type": "string",
	            "format": "date",
	            "required": false
	          }
	        },
	        "required": false
	      },
	      "creditTransferTransactionInformation": {
	        "type": "array",
	        "items": {
	          "properties": {
	            "instructedAmount": {
	              "type": "object",
	              "properties": {
	                "amount": {
	                  "type": "string",
	                  "required": true
	                },
	                "currencyCode": {
	                  "type": "string",
	                  "pattern": "^[A-Z]{3}$",
	                  "required": true
	                }
	              },
	              "required": true
	            },
	            "creditor": {
	              "type": "object",
	              "properties": {
	                "name": {
	                  "type": "string",
	                  "maxLength": 140,
	                  "required": true
	                },
	                "postalAddress": {
	                  "type": "object",
	                  "properties": {
	                    "addressLine1": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "addressLine2": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "streetName": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "postCode": {
	                      "type": "string",
	                      "maxLength": 16,
	                      "required": false
	                    },
	                    "town": {
	                      "type": "string",
	                      "maxLength": 35,
	                      "required": false
	                    },
	                    "countrySubDivision": {
	                      "type": "string",
	                      "maxLength": 35,
	                      "required": false
	                    },
	                    "country": {
	                      "type": "string",
	                      "maxLength": 2,
	                      "required": false
	                    }
	                  },
	                  "required": false
	                }
	              },
	              "required": true
	            },
	            "creditorAccount": {
	              "type": "object",
	              "properties": {
	                "accountType": {
	                  "type": "string",
	                  "enum": [
	                    "CHECKING",
	                    "SAVING"
	                  ],
	                  "required": false
	                }
	              },
	              "required": true
	            },
	            "creditorBank": {
	              "type": "object",
	              "properties": {
	                "bankBranchCode": {
	                  "type": "string",
	                  "maxLength": 11,
	                  "required": false
	                },
	                "name": {
	                  "type": "string",
	                  "maxLength": 140,
	                  "required": false
	                },
	                "postalAddress": {
	                  "type": "object",
	                  "properties": {
	                    "addressLine1": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "addressLine2": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "streetName": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "postCode": {
	                      "type": "string",
	                      "maxLength": 16,
	                      "required": false
	                    },
	                    "town": {
	                      "type": "string",
	                      "maxLength": 35,
	                      "required": false
	                    },
	                    "countrySubDivision": {
	                      "type": "string",
	                      "maxLength": 35,
	                      "required": false
	                    },
	                    "country": {
	                      "type": "string",
	                      "maxLength": 2,
	                      "required": false
	                    }
	                  },
	                  "required": false
	                },
	                "bic": {
	                  "type": "string",
	                  "pattern": "^([A-Z0-9]){4}([A-Z]){2}([A-Z0-9]){2}([A-Z0-9]{3})?$",
	                  "required": false
	                }
	              },
	              "required": false
	            },
	            "correspondentBank": {
	              "type": "object",
	              "properties": {
	                "bankBranchCode": {
	                  "type": "string",
	                  "maxLength": 11,
	                  "required": false
	                },
	                "name": {
	                  "type": "string",
	                  "maxLength": 140,
	                  "required": false
	                },
	                "postalAddress": {
	                  "type": "object",
	                  "properties": {
	                    "addressLine1": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "addressLine2": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "streetName": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "postCode": {
	                      "type": "string",
	                      "maxLength": 16,
	                      "required": false
	                    },
	                    "town": {
	                      "type": "string",
	                      "maxLength": 35,
	                      "required": false
	                    },
	                    "countrySubDivision": {
	                      "type": "string",
	                      "maxLength": 35,
	                      "required": false
	                    },
	                    "country": {
	                      "type": "string",
	                      "maxLength": 2,
	                      "required": false
	                    }
	                  },
	                  "required": false
	                },
	                "bic": {
	                  "type": "string",
	                  "pattern": "^([A-Z0-9]){4}([A-Z]){2}([A-Z0-9]){2}([A-Z0-9]{3})?$",
	                  "required": false
	                }
	              },
	              "required": false
	            },
	            "intermediaryBank": {
	              "type": "object",
	              "properties": {
	                "bankBranchCode": {
	                  "type": "string",
	                  "maxLength": 11,
	                  "required": false
	                },
	                "name": {
	                  "type": "string",
	                  "maxLength": 140,
	                  "required": false
	                },
	                "postalAddress": {
	                  "type": "object",
	                  "properties": {
	                    "addressLine1": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "addressLine2": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "streetName": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "postCode": {
	                      "type": "string",
	                      "maxLength": 16,
	                      "required": false
	                    },
	                    "town": {
	                      "type": "string",
	                      "maxLength": 35,
	                      "required": false
	                    },
	                    "countrySubDivision": {
	                      "type": "string",
	                      "maxLength": 35,
	                      "required": false
	                    },
	                    "country": {
	                      "type": "string",
	                      "maxLength": 2,
	                      "required": false
	                    }
	                  },
	                  "required": false
	                },
	                "bic": {
	                  "type": "string",
	                  "pattern": "^([A-Z0-9]){4}([A-Z]){2}([A-Z0-9]){2}([A-Z0-9]{3})?$",
	                  "required": false
	                }
	              },
	              "required": false
	            },
	            "messageToBank": {
	              "type": "string",
	              "maxLength": 140,
	              "required": false
	            },
	            "targetCurrency": {
	              "type": "string",
	              "pattern": "^[A-Z]{3}$",
	              "required": false
	            },
	            "remittanceInformation": {
	              "type": "string",
	              "maxLength": 140,
	              "required": false
	            },
	            "endToEndIdentification": {
	              "type": "string",
	              "maxLength": 35,
	              "required": false
	            }
	          }
	        },
	        "minItems": 1,
	        "maxItems": 1,
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postPaymentOrdersRecord = definedTypes['PaymentOrdersData.PaymentOrders-POST'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postPaymentOrderDraftsRecord method
	     *
	     * @name PaymentOrdersData#schemas.postPaymentOrderDraftsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "debtorAccount": {
	        "type": "object",
	        "properties": {
	          "identification": {
	            "type": "object",
	            "properties": {
	              "identification": {
	                "type": "string",
	                "maxLength": 36,
	                "required": true
	              },
	              "schemeName": {
	                "type": "string",
	                "enum": [
	                  "IBAN",
	                  "BBAN",
	                  "ID"
	                ],
	                "required": true
	              }
	            },
	            "required": false
	          },
	          "name": {
	            "type": "string",
	            "maxLength": 140,
	            "required": false
	          }
	        },
	        "required": false
	      },
	      "batchBooking": {
	        "type": "boolean",
	        "default": false,
	        "required": false
	      },
	      "instructionPriority": {
	        "type": "string",
	        "enum": [
	          "NORM",
	          "HIGH"
	        ],
	        "default": "NORM",
	        "required": false
	      },
	      "requestedExecutionDate": {
	        "type": "string",
	        "format": "date",
	        "required": false
	      },
	      "paymentMode": {
	        "type": "string",
	        "enum": [
	          "SINGLE",
	          "RECURRING"
	        ],
	        "default": "SINGLE",
	        "required": false
	      },
	      "paymentType": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 20,
	        "default": "SEPA_CREDIT_TRANSFER",
	        "required": false
	      },
	      "schedule": {
	        "type": "object",
	        "properties": {
	          "nonWorkingDayExecutionStrategy": {
	            "type": "string",
	            "enum": [
	              "BEFORE",
	              "AFTER",
	              "NONE"
	            ],
	            "required": false
	          },
	          "transferFrequency": {
	            "type": "string",
	            "enum": [
	              "ONCE",
	              "DAILY",
	              "WEEKLY",
	              "MONTHLY",
	              "QUARTERLY",
	              "YEARLY"
	            ],
	            "required": false
	          },
	          "on": {
	            "type": "integer",
	            "required": false
	          },
	          "startDate": {
	            "type": "string",
	            "format": "date",
	            "required": false
	          },
	          "endDate": {
	            "type": "string",
	            "format": "date",
	            "required": false
	          },
	          "repeat": {
	            "type": "integer",
	            "required": false
	          },
	          "every": {
	            "type": "integer",
	            "enum": [
	              1,
	              2
	            ],
	            "required": false
	          }
	        },
	        "required": false
	      },
	      "creditTransferTransactionInformation": {
	        "type": "array",
	        "items": {
	          "properties": {
	            "instructedAmount": {
	              "type": "object",
	              "properties": {
	                "amount": {
	                  "type": "string",
	                  "required": true
	                },
	                "currencyCode": {
	                  "type": "string",
	                  "pattern": "^[A-Z]{3}$",
	                  "required": true
	                }
	              },
	              "required": false
	            },
	            "creditor": {
	              "type": "object",
	              "properties": {
	                "name": {
	                  "type": "string",
	                  "maxLength": 140,
	                  "required": false
	                },
	                "postalAddress": {
	                  "type": "object",
	                  "properties": {
	                    "addressLine1": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "addressLine2": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "streetName": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "postCode": {
	                      "type": "string",
	                      "maxLength": 16,
	                      "required": false
	                    },
	                    "town": {
	                      "type": "string",
	                      "maxLength": 35,
	                      "required": false
	                    },
	                    "countrySubDivision": {
	                      "type": "string",
	                      "maxLength": 35,
	                      "required": false
	                    },
	                    "country": {
	                      "type": "string",
	                      "maxLength": 2,
	                      "required": false
	                    }
	                  },
	                  "required": false
	                }
	              },
	              "required": false
	            },
	            "creditorAccount": {
	              "type": "object",
	              "properties": {
	                "accountType": {
	                  "type": "string",
	                  "enum": [
	                    "CHECKING",
	                    "SAVING"
	                  ],
	                  "required": false
	                }
	              },
	              "required": false
	            },
	            "creditorBank": {
	              "type": "object",
	              "properties": {
	                "bankBranchCode": {
	                  "type": "string",
	                  "maxLength": 11,
	                  "required": false
	                },
	                "name": {
	                  "type": "string",
	                  "maxLength": 140,
	                  "required": false
	                },
	                "postalAddress": {
	                  "type": "object",
	                  "properties": {
	                    "addressLine1": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "addressLine2": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "streetName": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "postCode": {
	                      "type": "string",
	                      "maxLength": 16,
	                      "required": false
	                    },
	                    "town": {
	                      "type": "string",
	                      "maxLength": 35,
	                      "required": false
	                    },
	                    "countrySubDivision": {
	                      "type": "string",
	                      "maxLength": 35,
	                      "required": false
	                    },
	                    "country": {
	                      "type": "string",
	                      "maxLength": 2,
	                      "required": false
	                    }
	                  },
	                  "required": false
	                },
	                "bic": {
	                  "type": "string",
	                  "pattern": "^([A-Z0-9]){4}([A-Z]){2}([A-Z0-9]){2}([A-Z0-9]{3})?$",
	                  "required": false
	                }
	              },
	              "required": false
	            },
	            "correspondentBank": {
	              "type": "object",
	              "properties": {
	                "bankBranchCode": {
	                  "type": "string",
	                  "maxLength": 11,
	                  "required": false
	                },
	                "name": {
	                  "type": "string",
	                  "maxLength": 140,
	                  "required": false
	                },
	                "postalAddress": {
	                  "type": "object",
	                  "properties": {
	                    "addressLine1": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "addressLine2": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "streetName": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "postCode": {
	                      "type": "string",
	                      "maxLength": 16,
	                      "required": false
	                    },
	                    "town": {
	                      "type": "string",
	                      "maxLength": 35,
	                      "required": false
	                    },
	                    "countrySubDivision": {
	                      "type": "string",
	                      "maxLength": 35,
	                      "required": false
	                    },
	                    "country": {
	                      "type": "string",
	                      "maxLength": 2,
	                      "required": false
	                    }
	                  },
	                  "required": false
	                },
	                "bic": {
	                  "type": "string",
	                  "pattern": "^([A-Z0-9]){4}([A-Z]){2}([A-Z0-9]){2}([A-Z0-9]{3})?$",
	                  "required": false
	                }
	              },
	              "required": false
	            },
	            "intermediaryBank": {
	              "type": "object",
	              "properties": {
	                "bankBranchCode": {
	                  "type": "string",
	                  "maxLength": 11,
	                  "required": false
	                },
	                "name": {
	                  "type": "string",
	                  "maxLength": 140,
	                  "required": false
	                },
	                "postalAddress": {
	                  "type": "object",
	                  "properties": {
	                    "addressLine1": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "addressLine2": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "streetName": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "postCode": {
	                      "type": "string",
	                      "maxLength": 16,
	                      "required": false
	                    },
	                    "town": {
	                      "type": "string",
	                      "maxLength": 35,
	                      "required": false
	                    },
	                    "countrySubDivision": {
	                      "type": "string",
	                      "maxLength": 35,
	                      "required": false
	                    },
	                    "country": {
	                      "type": "string",
	                      "maxLength": 2,
	                      "required": false
	                    }
	                  },
	                  "required": false
	                },
	                "bic": {
	                  "type": "string",
	                  "pattern": "^([A-Z0-9]){4}([A-Z]){2}([A-Z0-9]){2}([A-Z0-9]{3})?$",
	                  "required": false
	                }
	              },
	              "required": false
	            },
	            "messageToBank": {
	              "type": "string",
	              "maxLength": 140,
	              "required": false
	            },
	            "targetCurrency": {
	              "type": "string",
	              "pattern": "^[A-Z]{3}$",
	              "required": false
	            },
	            "remittanceInformation": {
	              "type": "string",
	              "maxLength": 140,
	              "required": false
	            },
	            "endToEndIdentification": {
	              "type": "string",
	              "maxLength": 35,
	              "required": false
	            }
	          }
	        },
	        "minItems": 0,
	        "maxItems": 1,
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.postPaymentOrderDraftsRecord = definedTypes['PaymentOrdersData.PaymentOrderDrafts-POST'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postPaymentOrdersValidateRecord method
	     *
	     * @name PaymentOrdersData#schemas.postPaymentOrdersValidateRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {}
	    }
	     */
	
	    schemas.postPaymentOrdersValidateRecord = definedTypes['PaymentOrdersData.PaymentOrdersValidate-POST'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putPaymentOrdersBulkApprovalsRecord method
	     *
	     * @name PaymentOrdersData#schemas.putPaymentOrdersBulkApprovalsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "approvalStatus": {
	        "type": "string",
	        "enum": [
	          "APPROVED",
	          "REJECTED"
	        ],
	        "required": true
	      },
	      "paymentOrderIds": {
	        "type": "array",
	        "items": {
	          "properties": {}
	        },
	        "minItems": 1,
	        "maxItems": 100,
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.putPaymentOrdersBulkApprovalsRecord = definedTypes['PaymentOrdersData.BulkPaymentOrdersApproval-PUT-Request'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putPaymentOrdersRecord method
	     *
	     * @name PaymentOrdersData#schemas.putPaymentOrdersRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "id": {
	        "type": "string",
	        "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$",
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.putPaymentOrdersRecord = definedTypes['PaymentOrdersData.PaymentOrder-PUT'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putPaymentOrdersApprovalsRecord method
	     *
	     * @name PaymentOrdersData#schemas.putPaymentOrdersApprovalsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "approvalStatus": {
	        "type": "string",
	        "enum": [
	          "APPROVED",
	          "REJECTED"
	        ],
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.putPaymentOrdersApprovalsRecord = definedTypes['PaymentOrdersData.PaymentOrderApproval-PUT-Request'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postPaymentOrdersCancelRecord method
	     *
	     * @name PaymentOrdersData#schemas.postPaymentOrdersCancelRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "version": {
	        "type": "integer",
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postPaymentOrdersCancelRecord = definedTypes['PaymentOrdersData.PaymentOrderCancel-POST-Request'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putPaymentOrdersUpdateStatusRecord method
	     *
	     * @name PaymentOrdersData#schemas.putPaymentOrdersUpdateStatusRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "bankReferenceId": {
	        "type": "string",
	        "maxLength": 64,
	        "required": true
	      },
	      "status": {
	        "type": "string",
	        "enum": [
	          "DRAFT",
	          "ENTERED",
	          "READY",
	          "ACCEPTED",
	          "PROCESSED",
	          "REJECTED",
	          "CANCELLED",
	          "CANCELLATION_PENDING"
	        ],
	        "required": true
	      },
	      "bankStatus": {
	        "type": "string",
	        "maxLength": 35,
	        "required": true
	      },
	      "reasonCode": {
	        "type": "string",
	        "maxLength": 4,
	        "required": false
	      },
	      "reasonText": {
	        "type": "string",
	        "maxLength": 35,
	        "required": false
	      },
	      "errorDescription": {
	        "type": "string",
	        "maxLength": 105,
	        "required": false
	      },
	      "nextExecutionDate": {
	        "type": "string",
	        "format": "date",
	        "required": false
	      },
	      "paymentSetupId": {
	        "type": "string",
	        "maxLength": 128,
	        "required": false
	      },
	      "paymentSubmissionId": {
	        "type": "string",
	        "maxLength": 128,
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.putPaymentOrdersUpdateStatusRecord = definedTypes['PaymentOrdersData.UpdateStatus-PUT'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putPaymentOrdersRetryOrdersRecord method
	     *
	     * @name PaymentOrdersData#schemas.putPaymentOrdersRetryOrdersRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "selectionMaxSize": {
	        "type": "number",
	        "required": false
	      },
	      "untilDate": {
	        "type": "string",
	        "format": "date",
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.putPaymentOrdersRetryOrdersRecord = definedTypes['PaymentOrdersData.RetryOrdersRequest'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putPaymentOrderDraftsRecord method
	     *
	     * @name PaymentOrdersData#schemas.putPaymentOrderDraftsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "id": {
	        "type": "string",
	        "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$",
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.putPaymentOrderDraftsRecord = definedTypes['PaymentOrdersData.PaymentOrderDrafts-PUT'];
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return {
	
	      getPaymentOrders: getPaymentOrders,
	
	      postPaymentOrdersRecord: postPaymentOrdersRecord,
	
	      getPaymentOrderDrafts: getPaymentOrderDrafts,
	
	      postPaymentOrderDraftsRecord: postPaymentOrderDraftsRecord,
	
	      postPaymentOrdersValidateRecord: postPaymentOrdersValidateRecord,
	
	      putPaymentOrdersBulkApprovalsRecord: putPaymentOrdersBulkApprovalsRecord,
	
	      getPaymentOrdersRecord: getPaymentOrdersRecord,
	
	      deletePaymentOrdersRecord: deletePaymentOrdersRecord,
	
	      putPaymentOrdersRecord: putPaymentOrdersRecord,
	
	      putPaymentOrdersApprovalsRecord: putPaymentOrdersApprovalsRecord,
	
	      postPaymentOrdersCancelRecord: postPaymentOrdersCancelRecord,
	
	      putPaymentOrdersUpdateStatusRecord: putPaymentOrdersUpdateStatusRecord,
	
	      putPaymentOrdersRetryOrdersRecord: putPaymentOrdersRetryOrdersRecord,
	
	      getPaymentOrdersCurrencies: getPaymentOrdersCurrencies,
	
	      getPaymentOrdersRate: getPaymentOrdersRate,
	
	      getPaymentOrderDraftsRecord: getPaymentOrderDraftsRecord,
	
	      deletePaymentOrderDraftsRecord: deletePaymentOrderDraftsRecord,
	
	      putPaymentOrderDraftsRecord: putPaymentOrderDraftsRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-payment-orders-http-ng.js.map