(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-bill-pay-http-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-bill-pay-http-ng"] = factory(require("vendor-bb-angular"));
	else
		root["data-bb-bill-pay-http-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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
	exports.billPayDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbBillPayHttp = __webpack_require__(3);
	
	var _dataBbBillPayHttp2 = _interopRequireDefault(_dataBbBillPayHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	/**
	 * @module data-bb-bill-pay-http-ng
	 *
	 * @description A data module for accessing the Bill Pay REST API.
	 *
	 * @returns {String} `data-bb-bill-pay-http-ng`
	 * @example
	 * import billPayDataModuleKey, {
	 *   billPayDataKey,
	 * } from 'data-bb-bill-pay-http-ng';
	 */
	
	var billPayDataModuleKey = 'data-bb-bill-pay-http-ng';
	/**
	 * @name billPayDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the BillPayData service
	 */
	var billPayDataKey = exports.billPayDataKey = 'data-bb-bill-pay-http-ng:billPayData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(billPayDataModuleKey, [])
	
	/**
	 * @constructor BillPayData
	 * @type {object}
	 *
	 * @description Public api for data-bb-bill-pay-http-ng service
	 *
	 */
	.provider(billPayDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name BillPayDataProvider
	   * @type {object}
	   * @ngkey data-bb-bill-pay-http-ng:billPayDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-bill-pay-http-ng:billPayDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-bill-pay-http-ng:billPayDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name BillPayDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name BillPayDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http', '$httpParamSerializer',
	    /* into */
	    (0, _dataBbBillPayHttp2.default)(config)]
	  };
	}]).name;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
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
	
	    definedTypes['BillPayData.AccountsGetResponse'] = { "properties": { "accounts": { "type": "array", "items": { "properties": { "accountNumber": { "type": "string", "minLength": 1, "maxLength": 20, "required": true }, "accountNickName": { "type": "string", "minLength": 1, "maxLength": 30, "required": false }, "accountType": { "type": "string", "minLength": 1, "maxLength": 100, "required": true }, "routingNumber": { "type": "string", "minLength": 1, "maxLength": 30, "required": true }, "balance": { "type": "number", "required": false } } }, "required": false } } };
	
	    definedTypes['BillPayData.PayeesPostRequest'] = { "properties": { "payee": { "type": "object", "properties": { "name": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "nickName": { "type": "string", "minLength": 2, "maxLength": 100, "required": false }, "phoneNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "address": { "type": "object", "properties": { "address1": { "type": "string", "minLength": 1, "maxLength": 40, "required": true }, "address2": { "type": "string", "minLength": 1, "maxLength": 40, "required": false }, "city": { "type": "string", "minLength": 1, "maxLength": 32, "required": true }, "state": { "type": "string", "minLength": 2, "maxLength": 2, "required": true }, "postalCode": { "type": "string", "minLength": 5, "maxLength": 9, "required": true } }, "required": true }, "accountNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": false } }, "required": true } } };
	
	    definedTypes['BillPayData.PayeesGetResponse'] = { "properties": { "payee": { "type": "object", "properties": { "id": { "type": "string", "required": true }, "name": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "nickName": { "type": "string", "minLength": 2, "maxLength": 100, "required": false }, "phoneNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "address": { "type": "object", "properties": { "address1": { "type": "string", "minLength": 1, "maxLength": 40, "required": true }, "address2": { "type": "string", "minLength": 1, "maxLength": 40, "required": false }, "city": { "type": "string", "minLength": 1, "maxLength": 32, "required": true }, "state": { "type": "string", "minLength": 2, "maxLength": 2, "required": true }, "postalCode": { "type": "string", "minLength": 5, "maxLength": 9, "required": true } }, "required": true }, "accountNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": false }, "overnightDeliveryAddress": { "type": "object", "properties": { "address1": { "type": "string", "minLength": 1, "maxLength": 40, "required": true }, "address2": { "type": "string", "minLength": 1, "maxLength": 40, "required": false }, "city": { "type": "string", "minLength": 1, "maxLength": 32, "required": true }, "state": { "type": "string", "minLength": 2, "maxLength": 2, "required": true }, "postalCode": { "type": "string", "minLength": 5, "maxLength": 9, "required": true } }, "required": false } }, "required": true } } };
	
	    definedTypes['BillPayData.PayeesPutRequest'] = { "properties": { "payee": { "type": "object", "properties": { "name": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "nickName": { "type": "string", "minLength": 2, "maxLength": 100, "required": false }, "phoneNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "address": { "type": "object", "properties": { "address1": { "type": "string", "minLength": 1, "maxLength": 40, "required": true }, "address2": { "type": "string", "minLength": 1, "maxLength": 40, "required": false }, "city": { "type": "string", "minLength": 1, "maxLength": 32, "required": true }, "state": { "type": "string", "minLength": 2, "maxLength": 2, "required": true }, "postalCode": { "type": "string", "minLength": 5, "maxLength": 9, "required": true } }, "required": true }, "accountNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": false }, "modifyPendingPayments": { "type": "boolean", "required": true } }, "required": true } } };
	
	    definedTypes['BillPayData.PayeesElectronicPostRequest'] = { "properties": { "payee": { "type": "object", "properties": { "name": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "nickName": { "type": "string", "minLength": 2, "maxLength": 100, "required": false }, "merchantID": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "merchantZipCode": { "type": "string", "minLength": 5, "maxLength": 10, "required": false }, "accountNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true } }, "required": true } } };
	
	    definedTypes['BillPayData.PayeesElectronicGetResponse'] = { "properties": { "payee": { "type": "object", "properties": { "id": { "type": "string", "required": true }, "name": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "nickName": { "type": "string", "minLength": 2, "maxLength": 100, "required": false }, "accountNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "overnightDeliveryAddress": { "type": "object", "properties": { "address1": { "type": "string", "minLength": 1, "maxLength": 40, "required": true }, "address2": { "type": "string", "minLength": 1, "maxLength": 40, "required": false }, "city": { "type": "string", "minLength": 1, "maxLength": 32, "required": true }, "state": { "type": "string", "minLength": 2, "maxLength": 2, "required": true }, "postalCode": { "type": "string", "minLength": 5, "maxLength": 9, "required": true } }, "required": false } }, "required": true } } };
	
	    definedTypes['BillPayData.PayeesElectronicPutRequest'] = { "properties": { "payee": { "type": "object", "properties": { "name": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "nickName": { "type": "string", "minLength": 2, "maxLength": 100, "required": false }, "accountNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "modifyPendingPayments": { "type": "boolean", "required": true } }, "required": true } } };
	
	    definedTypes['BillPayData.PayeesSearchGetResponse'] = { "properties": { "payees": { "type": "array", "items": { "properties": { "merchantID": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "name": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "zipRequired": { "type": "boolean", "required": true }, "phoneNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": false }, "address": { "type": "object", "properties": { "address1": { "type": "string", "minLength": 1, "maxLength": 40, "required": true }, "address2": { "type": "string", "minLength": 1, "maxLength": 40, "required": false }, "city": { "type": "string", "minLength": 1, "maxLength": 32, "required": true }, "state": { "type": "string", "minLength": 2, "maxLength": 2, "required": true }, "postalCode": { "type": "string", "minLength": 5, "maxLength": 9, "required": true } }, "required": false } } }, "required": false } } };
	
	    definedTypes['BillPayData.PayeesSummaryGetResponse'] = { "properties": { "payeeSummaries": { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true }, "name": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "nickName": { "type": "string", "minLength": 2, "maxLength": 100, "required": false }, "electronic": { "type": "boolean", "required": true }, "paymentServices": { "type": "array", "items": { "properties": { "cutoffTime": { "type": "string", "format": "date-time", "required": true }, "earliestPaymentDate": { "type": "string", "format": "date-time", "required": true }, "nextPaymentDate": { "type": "string", "format": "date-time", "required": true }, "paymentServiceType": { "type": "string", "required": false }, "deliveryDays": { "type": "integer", "required": false }, "paymentFee": { "type": "number", "required": false } } }, "required": false }, "nextPayment": { "type": "object", "properties": { "paymentDate": { "type": "string", "format": "date-time", "required": true }, "paymentAmount": { "type": "number", "required": true }, "recurring": { "type": "boolean", "required": true }, "paymentFee": { "type": "number", "required": false } }, "required": false }, "ebill": { "type": "object", "properties": { "capable": { "type": "boolean", "required": true }, "enabled": { "type": "boolean", "required": true }, "latestBill": { "type": "object", "properties": { "paymentDate": { "type": "string", "format": "date-time", "required": false }, "paymentAmount": { "type": "number", "required": false }, "url": { "type": "string", "required": false } }, "required": false } }, "required": false }, "overnightDeliveryAddress": { "type": "object", "properties": { "address1": { "type": "string", "minLength": 1, "maxLength": 40, "required": true }, "address2": { "type": "string", "minLength": 1, "maxLength": 40, "required": false }, "city": { "type": "string", "minLength": 1, "maxLength": 32, "required": true }, "state": { "type": "string", "minLength": 2, "maxLength": 2, "required": true }, "postalCode": { "type": "string", "minLength": 5, "maxLength": 9, "required": true } }, "required": false } } }, "required": false } } };
	
	    definedTypes['BillPayData.PaymentsGetResponse'] = { "properties": { "payments": { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true }, "payeeName": { "type": "string", "minLength": 1, "maxLength": 100, "required": true }, "payeeAccountNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": false }, "payeeNickName": { "type": "string", "minLength": 1, "maxLength": 30, "required": false }, "paymentAmount": { "type": "number", "required": true }, "paymentDate": { "type": "string", "format": "date-time", "required": true }, "paymentMemo": { "type": "string", "minLength": 1, "maxLength": 255, "required": false }, "paymentAccountNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "paymentAccountNickName": { "type": "string", "minLength": 1, "maxLength": 100, "required": false }, "recurring": { "type": "boolean", "required": true }, "paymentFee": { "type": "number", "required": false }, "numberOfInstances": { "type": "integer", "minimum": 1, "required": false }, "frequency": { "type": "string", "minLength": 1, "maxLength": 20, "required": false }, "paymentScheduledAlert": { "type": "boolean", "required": false }, "paymentSentAlert": { "type": "boolean", "required": false }, "modelExpirationAlert": { "type": "boolean", "required": false }, "status": { "type": "string", "minLength": 1, "maxLength": 20, "required": true } } }, "required": true }, "totalCount": { "type": "number", "required": true } } };
	
	    definedTypes['BillPayData.PaymentsPostRequest'] = { "properties": { "payments": { "type": "array", "items": { "properties": { "payeeID": { "type": "string", "minLength": 1, "maxLength": 100, "required": true }, "paymentAccount": { "type": "object", "properties": { "accountNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "routingNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "accountType": { "type": "string", "minLength": 2, "maxLength": 100, "required": true } }, "required": true }, "paymentAmount": { "type": "number", "required": true }, "paymentDate": { "type": "string", "format": "date", "required": true }, "paymentMemo": { "type": "string", "minLength": 1, "maxLength": 255, "required": false }, "overnightDeliveryAddress": { "type": "object", "properties": { "address1": { "type": "string", "minLength": 1, "maxLength": 40, "required": true }, "address2": { "type": "string", "minLength": 1, "maxLength": 40, "required": false }, "city": { "type": "string", "minLength": 1, "maxLength": 32, "required": true }, "state": { "type": "string", "minLength": 2, "maxLength": 2, "required": true }, "postalCode": { "type": "string", "minLength": 5, "maxLength": 9, "required": true } }, "required": false } } }, "minItems": 1, "maxItems": 50, "required": true } } };
	
	    definedTypes['BillPayData.PaymentsPostResponse'] = { "properties": { "payments": { "type": "array", "items": { "properties": { "payeeID": { "type": "string", "minLength": 1, "maxLength": 100, "required": true }, "paymentID": { "type": "string", "minLength": 1, "maxLength": 100, "required": false }, "errors": { "type": "array", "items": { "properties": {} }, "required": true } } }, "required": true } } };
	
	    definedTypes['BillPayData.PaymentsPostError'] = { "properties": { "message": { "type": "string", "required": true }, "errors": { "type": "array", "items": { "properties": {} }, "required": false }, "payments": { "type": "array", "items": { "properties": { "payeeID": { "type": "string", "minLength": 1, "maxLength": 100, "required": true }, "errors": { "type": "array", "items": { "properties": {} }, "required": true } } }, "required": false } } };
	
	    definedTypes['BillPayData.PaymentsPutRequest'] = { "properties": { "payment": { "type": "object", "properties": { "payeeID": { "type": "string", "minLength": 1, "maxLength": 100, "required": true }, "paymentAccount": { "type": "object", "properties": { "accountNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "routingNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "accountType": { "type": "string", "minLength": 2, "maxLength": 100, "required": true } }, "required": true }, "paymentAmount": { "type": "number", "required": true }, "paymentDate": { "type": "string", "format": "date", "required": true }, "paymentMemo": { "type": "string", "minLength": 1, "maxLength": 255, "required": false }, "overnightDeliveryAddress": { "type": "object", "properties": { "address1": { "type": "string", "minLength": 1, "maxLength": 40, "required": true }, "address2": { "type": "string", "minLength": 1, "maxLength": 40, "required": false }, "city": { "type": "string", "minLength": 1, "maxLength": 32, "required": true }, "state": { "type": "string", "minLength": 2, "maxLength": 2, "required": true }, "postalCode": { "type": "string", "minLength": 5, "maxLength": 9, "required": true } }, "required": false } }, "required": true } } };
	
	    definedTypes['BillPayData.PaymentsGetByIdResponse'] = { "properties": { "payment": { "type": "object", "properties": { "id": { "type": "string", "required": true }, "payeeName": { "type": "string", "minLength": 1, "maxLength": 100, "required": true }, "payeeAccountNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": false }, "payeeNickName": { "type": "string", "minLength": 1, "maxLength": 30, "required": false }, "paymentAmount": { "type": "number", "required": true }, "paymentDate": { "type": "string", "format": "date-time", "required": true }, "paymentMemo": { "type": "string", "minLength": 1, "maxLength": 255, "required": false }, "paymentAccountNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "paymentAccountNickName": { "type": "string", "minLength": 1, "maxLength": 100, "required": false }, "recurring": { "type": "boolean", "required": true }, "paymentFee": { "type": "number", "required": false }, "status": { "type": "string", "minLength": 1, "maxLength": 20, "required": true } }, "required": true } } };
	
	    definedTypes['BillPayData.RecurringPaymentsPostRequest'] = { "properties": { "payment": { "type": "object", "properties": { "payeeID": { "type": "string", "minLength": 1, "maxLength": 100, "required": true }, "paymentAccount": { "type": "object", "properties": { "accountNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "routingNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "accountType": { "type": "string", "minLength": 2, "maxLength": 100, "required": true } }, "required": true }, "paymentAmount": { "type": "number", "required": true }, "paymentDate": { "type": "string", "format": "date", "required": true }, "numberOfInstances": { "type": "integer", "minimum": 1, "required": false }, "frequency": { "type": "string", "minLength": 1, "maxLength": 20, "required": true }, "paymentScheduledAlert": { "type": "boolean", "required": true }, "paymentSentAlert": { "type": "boolean", "required": true }, "modelExpirationAlert": { "type": "boolean", "required": true } }, "required": true } } };
	
	    definedTypes['BillPayData.RecurringPaymentsPutRequest'] = { "properties": { "payment": { "type": "object", "properties": { "payeeID": { "type": "string", "minLength": 1, "maxLength": 100, "required": true }, "paymentAccount": { "type": "object", "properties": { "accountNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "routingNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "accountType": { "type": "string", "minLength": 2, "maxLength": 100, "required": true } }, "required": true }, "paymentAmount": { "type": "number", "required": true }, "paymentDate": { "type": "string", "format": "date", "required": true }, "numberOfInstances": { "type": "integer", "minimum": 1, "required": false }, "frequency": { "type": "string", "minLength": 1, "maxLength": 20, "required": true }, "paymentScheduledAlert": { "type": "boolean", "required": true }, "paymentSentAlert": { "type": "boolean", "required": true }, "modelExpirationAlert": { "type": "boolean", "required": true } }, "required": true } } };
	
	    definedTypes['BillPayData.RecurringPaymentsGetByIdResponse'] = { "properties": { "payment": { "type": "object", "properties": { "id": { "type": "string", "required": true }, "payeeName": { "type": "string", "minLength": 1, "maxLength": 100, "required": true }, "payeeAccountNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": false }, "payeeNickName": { "type": "string", "minLength": 1, "maxLength": 30, "required": false }, "paymentAmount": { "type": "number", "required": true }, "paymentDate": { "type": "string", "format": "date-time", "required": true }, "paymentMemo": { "type": "string", "minLength": 1, "maxLength": 255, "required": false }, "paymentAccountNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "paymentAccountNickName": { "type": "string", "minLength": 1, "maxLength": 100, "required": false }, "recurring": { "type": "boolean", "required": true }, "paymentFee": { "type": "number", "required": false }, "numberOfInstances": { "type": "integer", "minimum": 1, "required": false }, "frequency": { "type": "string", "minLength": 1, "maxLength": 20, "required": false }, "paymentScheduledAlert": { "type": "boolean", "required": false }, "paymentSentAlert": { "type": "boolean", "required": false }, "modelExpirationAlert": { "type": "boolean", "required": false }, "status": { "type": "string", "minLength": 1, "maxLength": 20, "required": true } }, "required": true } } };
	
	    definedTypes['BillPayData.EnrolmentGetResponse'] = { "properties": { "enrolment": { "type": "object", "properties": { "enrolled": { "type": "boolean", "required": true } }, "required": true } } };
	
	    definedTypes['BillPayData.BillPayResponse'] = { "properties": { "message": { "type": "string", "required": false }, "warnings": { "type": "array", "items": { "properties": { "message": { "type": "string", "required": false }, "key": { "type": "string", "required": false }, "context": { "type": "object", "properties": {}, "required": false } } }, "required": true } } };
	
	    definedTypes['BillPayData.BillPayPutPostResponse'] = { "properties": { "id": { "type": "string", "required": true } } };
	
	    /**
	     * @typedef BillPayData.AccountsGetResponse
	     * @type {Object}
	     * @property {?Array.<Account>} accounts
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.Address
	     * @type {Object}
	     * @property {String} address1
	     * @property {?String} address2
	     * @property {String} city
	     * @property {String} state
	     * @property {String} postalCode
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.BillPayPutPostResponse
	     * @type {Object}
	     * @property {String} id Internally used unique identification
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.BillPayResponse
	     * @type {Object}
	     * @property {?String} message Any further information
	     * @property {Array.<ErrorItem>} warnings Detailed field warnings/errors
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.Enrolment
	     * @type {Object}
	     * @property {Boolean} enrolled
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.EnrolmentGetResponse
	     * @type {Object}
	     * @property {BillPayData.Enrolment} enrolment
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.OneOffPayment
	     * @type {Object}
	     * @property {String} id
	     * @property {String} payeeName
	     * @property {?String} payeeAccountNumber
	     * @property {?String} payeeNickName
	     * @property {Number} paymentAmount
	     * @property {String} paymentDate
	     * @property {?String} paymentMemo
	     * @property {String} paymentAccountNumber
	     * @property {?String} paymentAccountNickName
	     * @property {Boolean} recurring
	     * @property {?Number} paymentFee
	     * @property {String} status
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.Payee
	     * @type {Object}
	     * @property {String} id
	     * @property {String} name
	     * @property {?String} nickName
	     * @property {String} phoneNumber
	     * @property {BillPayData.Address} address
	     * @property {?String} accountNumber
	     * @property {?BillPayData.Address} overnightDeliveryAddress
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.PayeeCreate
	     * @type {Object}
	     * @property {String} name
	     * @property {?String} nickName
	     * @property {String} phoneNumber
	     * @property {BillPayData.Address} address
	     * @property {?String} accountNumber
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.PayeeElectronic
	     * @type {Object}
	     * @property {String} id
	     * @property {String} name
	     * @property {?String} nickName
	     * @property {String} accountNumber
	     * @property {?BillPayData.Address} overnightDeliveryAddress
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.PayeeElectronicCreate
	     * @type {Object}
	     * @property {String} name
	     * @property {?String} nickName
	     * @property {String} merchantID
	     * @property {?String} merchantZipCode
	     * @property {String} accountNumber
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.PayeeElectronicUpdate
	     * @type {Object}
	     * @property {String} name
	     * @property {?String} nickName
	     * @property {String} accountNumber
	     * @property {Boolean} modifyPendingPayments
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.PayeeUpdate
	     * @type {Object}
	     * @property {String} name
	     * @property {?String} nickName
	     * @property {String} phoneNumber
	     * @property {BillPayData.Address} address
	     * @property {?String} accountNumber
	     * @property {Boolean} modifyPendingPayments
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.PayeesElectronicGetResponse
	     * @type {Object}
	     * @property {BillPayData.PayeeElectronic} payee
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.PayeesElectronicPostRequest
	     * @type {Object}
	     * @property {BillPayData.PayeeElectronicCreate} payee
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.PayeesElectronicPutRequest
	     * @type {Object}
	     * @property {BillPayData.PayeeElectronicUpdate} payee
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.PayeesGetResponse
	     * @type {Object}
	     * @property {BillPayData.Payee} payee
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.PayeesPostRequest
	     * @type {Object}
	     * @property {BillPayData.PayeeCreate} payee
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.PayeesPutRequest
	     * @type {Object}
	     * @property {BillPayData.PayeeUpdate} payee
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.PayeesSearchGetResponse
	     * @type {Object}
	     * @property {?Array.<PayeeSearch>} payees
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.PayeesSummaryGetResponse
	     * @type {Object}
	     * @property {?Array.<PayeeSummary>} payeeSummaries
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.PaymentAccount
	     * @type {Object}
	     * @property {String} accountNumber
	     * @property {String} routingNumber
	     * @property {String} accountType
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.PaymentRequest
	     * @type {Object}
	     * @property {String} payeeID
	     * @property {BillPayData.PaymentAccount} paymentAccount
	     * @property {Number} paymentAmount
	     * @property {String} paymentDate
	     * @property {?String} paymentMemo
	     * @property {?BillPayData.Address} overnightDeliveryAddress
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.PaymentResponse
	     * @type {Object}
	     * @property {String} id
	     * @property {String} payeeName
	     * @property {?String} payeeAccountNumber
	     * @property {?String} payeeNickName
	     * @property {Number} paymentAmount
	     * @property {String} paymentDate
	     * @property {?String} paymentMemo
	     * @property {String} paymentAccountNumber
	     * @property {?String} paymentAccountNickName
	     * @property {Boolean} recurring
	     * @property {?Number} paymentFee
	     * @property {?Integer} numberOfInstances
	     * @property {?String} frequency
	     * @property {?Boolean} paymentScheduledAlert
	     * @property {?Boolean} paymentSentAlert
	     * @property {?Boolean} modelExpirationAlert
	     * @property {String} status
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.PaymentsGetByIdResponse
	     * @type {Object}
	     * @property {BillPayData.OneOffPayment} payment
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.PaymentsGetResponse
	     * @type {Object}
	     * @property {Array.<BillPayData.PaymentResponse>} payments
	     * @property {Number} totalCount Total count of payments matching the query
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.PaymentsPostError
	     * @type {Object}
	     * @property {String} message Any further information
	     * @property {?Array.<*>} errors Detailed error information
	     * @property {?Array.<PaymentsError>} payments
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.PaymentsPostRequest
	     * @type {Object}
	     * @property {Array.<BillPayData.PaymentRequest>} payments
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.PaymentsPostResponse
	     * @type {Object}
	     * @property {Array.<PaymentsResponse>} payments
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.PaymentsPutRequest
	     * @type {Object}
	     * @property {BillPayData.PaymentRequest} payment
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.RecurringPayment
	     * @type {Object}
	     * @property {String} payeeID
	     * @property {BillPayData.PaymentAccount} paymentAccount
	     * @property {Number} paymentAmount
	     * @property {String} paymentDate
	     * @property {?Integer} numberOfInstances
	     * @property {String} frequency
	     * @property {Boolean} paymentScheduledAlert
	     * @property {Boolean} paymentSentAlert
	     * @property {Boolean} modelExpirationAlert
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.RecurringPaymentsGetByIdResponse
	     * @type {Object}
	     * @property {BillPayData.PaymentResponse} payment
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.RecurringPaymentsPostRequest
	     * @type {Object}
	     * @property {BillPayData.RecurringPayment} payment
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BillPayData.RecurringPaymentsPutRequest
	     * @type {Object}
	     * @property {BillPayData.RecurringPayment} payment
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
	     * @name BillPayData#getBillPayPayments
	     * @type {Function}
	     * @description Get payments for the Bill Pay user ordering by payment date descending, supports filtering and pagination.
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.status Restrict results by the payment status (supported status filters include PENDING, HISTORICAL or ALL). Eg: PENDING.
	       
	     * @param {?string} params.startDate Restrict results to payments with a date of, or after, 00:00 on this date, UTC. Eg: 2017-06-28.
	       
	     * @param {?string} params.endDate Restrict results to payments with a date of, or before, 23:59 on this date, UTC. Eg: 2017-07-28.
	       
	     * @param {?string} params.payeeID Restrict results to payments for the specified payee ID. Eg: qwerty12345.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?number} params.size Limit the number of elements on the response. Eg: 80. (defaults to 1000)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link BillPayData.PaymentsGetResponse} on success 
	     *
	     * @example
	     * billPayData
	     *  .getBillPayPayments(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getBillPayPayments(params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payments';
	
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
	     * @name BillPayData#postBillPayPaymentsRecord
	     * @type {Function}
	     * @description Create new Bill Pay payments.
	     
	     * @param {BillPayData.PaymentsPostRequest} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link BillPayData.PaymentsPostResponse} on success  or rejects with data of {@link BillPayData.PaymentsPostError} on error
	     *
	     * @example
	     * billPayData
	     *  .postBillPayPaymentsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postBillPayPaymentsRecord(data, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payments';
	
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
	     * @name BillPayData#getBillPayAccounts
	     * @type {Function}
	     * @description Get all of the accounts for the Bill Pay user registered with the Bill Pay provider.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link BillPayData.AccountsGetResponse} on success 
	     *
	     * @example
	     * billPayData
	     *  .getBillPayAccounts(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getBillPayAccounts(params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/accounts';
	
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
	     * @name BillPayData#getBillPayPayeesSearch
	     * @type {Function}
	     * @description Search for payees by name
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.name The name of the payee to search for. Eg: Backbase.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link BillPayData.PayeesSearchGetResponse} on success 
	     *
	     * @example
	     * billPayData
	     *  .getBillPayPayeesSearch(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getBillPayPayeesSearch(params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payees-search';
	
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
	     * @name BillPayData#postBillPayPayeesRecord
	     * @type {Function}
	     * @description Create a new payee for the Bill Pay user.
	     
	     * @param {BillPayData.PayeesPostRequest} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link BillPayData.BillPayPutPostResponse} on success 
	     *
	     * @example
	     * billPayData
	     *  .postBillPayPayeesRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postBillPayPayeesRecord(data, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payees';
	
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
	     * @name BillPayData#getBillPayPayeesSummary
	     * @type {Function}
	     * @description Get all payees with their associated payment services and any next payment scheduled.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link BillPayData.PayeesSummaryGetResponse} on success 
	     *
	     * @example
	     * billPayData
	     *  .getBillPayPayeesSummary(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getBillPayPayeesSummary(params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payees-summary';
	
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
	     * @name BillPayData#getBillPayEnrolment
	     * @type {Function}
	     * @description Get the enrolment state for the current user.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link BillPayData.EnrolmentGetResponse} on success 
	     *
	     * @example
	     * billPayData
	     *  .getBillPayEnrolment(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getBillPayEnrolment(params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/enrolment';
	
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
	     * @name BillPayData#postBillPayEnrolmentRecord
	     * @type {Function}
	     * @description Enrol in Bill Pay, enrolment data is supplied in the integration service.
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * billPayData
	     *  .postBillPayEnrolmentRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postBillPayEnrolmentRecord(data, headers) {
	      var url = '' + baseUri + version + '/bill-pay/enrolment';
	
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
	     * @name BillPayData#getBillPayPaymentsRecord
	     * @type {Function}
	     * @description Get an existing payment.
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link BillPayData.PaymentsGetByIdResponse} on success 
	     *
	     * @example
	     * billPayData
	     *  .getBillPayPaymentsRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getBillPayPaymentsRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payments/' + id;
	
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
	     * @name BillPayData#putBillPayPaymentsRecord
	     * @type {Function}
	     * @description Modify a payment.
	     
	     * @param {string} id 
	       
	     
	     * @param {BillPayData.PaymentsPutRequest} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link BillPayData.BillPayPutPostResponse} on success 
	     *
	     * @example
	     * billPayData
	     *  .putBillPayPaymentsRecord(id, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putBillPayPaymentsRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payments/' + id;
	
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
	     * @name BillPayData#deleteBillPayPaymentsRecord
	     * @type {Function}
	     * @description Delete a payment.
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * billPayData
	     *  .deleteBillPayPaymentsRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deleteBillPayPaymentsRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payments/' + id;
	
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
	     * @name BillPayData#postBillPayPaymentsRecurringRecord
	     * @type {Function}
	     * @description Create a new recurring payment.
	     
	     * @param {BillPayData.RecurringPaymentsPostRequest} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link BillPayData.BillPayPutPostResponse} on success 
	     *
	     * @example
	     * billPayData
	     *  .postBillPayPaymentsRecurringRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postBillPayPaymentsRecurringRecord(data, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payments/recurring';
	
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
	     * @name BillPayData#getBillPayPaymentsRecurringRecord
	     * @type {Function}
	     * @description Get a recurring payment.
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link BillPayData.RecurringPaymentsGetByIdResponse} on success 
	     *
	     * @example
	     * billPayData
	     *  .getBillPayPaymentsRecurringRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getBillPayPaymentsRecurringRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payments/recurring/' + id;
	
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
	     * @name BillPayData#deleteBillPayPaymentsRecurringRecord
	     * @type {Function}
	     * @description Delete a recurring payment.
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * billPayData
	     *  .deleteBillPayPaymentsRecurringRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deleteBillPayPaymentsRecurringRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payments/recurring/' + id;
	
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
	     * @name BillPayData#putBillPayPaymentsRecurringRecord
	     * @type {Function}
	     * @description Modify a recurring payment.
	     
	     * @param {string} id 
	       
	     
	     * @param {BillPayData.RecurringPaymentsPutRequest} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link BillPayData.BillPayPutPostResponse} on success 
	     *
	     * @example
	     * billPayData
	     *  .putBillPayPaymentsRecurringRecord(id, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putBillPayPaymentsRecurringRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payments/recurring/' + id;
	
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
	     * @name BillPayData#getBillPayPayeesRecord
	     * @type {Function}
	     * @description Get a payee.
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link BillPayData.PayeesGetResponse} on success 
	     *
	     * @example
	     * billPayData
	     *  .getBillPayPayeesRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getBillPayPayeesRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payees/' + id;
	
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
	     * @name BillPayData#putBillPayPayeesRecord
	     * @type {Function}
	     * @description Modify a payee.
	     
	     * @param {string} id 
	       
	     
	     * @param {BillPayData.PayeesPutRequest} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link BillPayData.BillPayPutPostResponse} on success 
	     *
	     * @example
	     * billPayData
	     *  .putBillPayPayeesRecord(id, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putBillPayPayeesRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payees/' + id;
	
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
	     * @name BillPayData#deleteBillPayPayeesRecord
	     * @type {Function}
	     * @description Delete a payee.
	     
	     * @param {string} id 
	       
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.cancelPendingPayments Indicates whether to cancel any existing pending payments for this payee before deleting it.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * billPayData
	     *  .deleteBillPayPayeesRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deleteBillPayPayeesRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payees/' + id;
	
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
	     * @name BillPayData#postBillPayPayeesElectronicRecord
	     * @type {Function}
	     * @description Create a new payee for the Bill Pay user.
	     
	     * @param {BillPayData.PayeesElectronicPostRequest} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link BillPayData.BillPayPutPostResponse} on success 
	     *
	     * @example
	     * billPayData
	     *  .postBillPayPayeesElectronicRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postBillPayPayeesElectronicRecord(data, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payees/electronic';
	
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
	     * @name BillPayData#getBillPayPayeesElectronicRecord
	     * @type {Function}
	     * @description Get a payee.
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link BillPayData.PayeesElectronicGetResponse} on success 
	     *
	     * @example
	     * billPayData
	     *  .getBillPayPayeesElectronicRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getBillPayPayeesElectronicRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payees/electronic/' + id;
	
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
	     * @name BillPayData#putBillPayPayeesElectronicRecord
	     * @type {Function}
	     * @description Modify a payee.
	     
	     * @param {string} id 
	       
	     
	     * @param {BillPayData.PayeesElectronicPutRequest} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link BillPayData.BillPayPutPostResponse} on success 
	     *
	     * @example
	     * billPayData
	     *  .putBillPayPayeesElectronicRecord(id, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putBillPayPayeesElectronicRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payees/electronic/' + id;
	
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
	     * @name BillPayData#deleteBillPayPayeesElectronicRecord
	     * @type {Function}
	     * @description Delete a payee.
	     
	     * @param {string} id 
	       
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.cancelPendingPayments Indicates whether to cancel any existing pending payments for this payee before deleting it.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * billPayData
	     *  .deleteBillPayPayeesElectronicRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deleteBillPayPayeesElectronicRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payees/electronic/' + id;
	
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
	     * @name BillPayData#schemas
	     * @type {Object}
	     */
	    var schemas = {};
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postBillPayPaymentsRecord method
	     *
	     * @name BillPayData#schemas.postBillPayPaymentsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "payments": {
	        "type": "array",
	        "items": {
	          "properties": {
	            "payeeID": {
	              "type": "string",
	              "minLength": 1,
	              "maxLength": 100,
	              "required": true
	            },
	            "paymentAccount": {
	              "type": "object",
	              "properties": {
	                "accountNumber": {
	                  "type": "string",
	                  "minLength": 2,
	                  "maxLength": 100,
	                  "required": true
	                },
	                "routingNumber": {
	                  "type": "string",
	                  "minLength": 2,
	                  "maxLength": 100,
	                  "required": true
	                },
	                "accountType": {
	                  "type": "string",
	                  "minLength": 2,
	                  "maxLength": 100,
	                  "required": true
	                }
	              },
	              "required": true
	            },
	            "paymentAmount": {
	              "type": "number",
	              "required": true
	            },
	            "paymentDate": {
	              "type": "string",
	              "format": "date",
	              "required": true
	            },
	            "paymentMemo": {
	              "type": "string",
	              "minLength": 1,
	              "maxLength": 255,
	              "required": false
	            },
	            "overnightDeliveryAddress": {
	              "type": "object",
	              "properties": {
	                "address1": {
	                  "type": "string",
	                  "minLength": 1,
	                  "maxLength": 40,
	                  "required": true
	                },
	                "address2": {
	                  "type": "string",
	                  "minLength": 1,
	                  "maxLength": 40,
	                  "required": false
	                },
	                "city": {
	                  "type": "string",
	                  "minLength": 1,
	                  "maxLength": 32,
	                  "required": true
	                },
	                "state": {
	                  "type": "string",
	                  "minLength": 2,
	                  "maxLength": 2,
	                  "required": true
	                },
	                "postalCode": {
	                  "type": "string",
	                  "minLength": 5,
	                  "maxLength": 9,
	                  "required": true
	                }
	              },
	              "required": false
	            }
	          }
	        },
	        "minItems": 1,
	        "maxItems": 50,
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postBillPayPaymentsRecord = definedTypes['BillPayData.PaymentsPostRequest'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postBillPayPayeesRecord method
	     *
	     * @name BillPayData#schemas.postBillPayPayeesRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "payee": {
	        "type": "object",
	        "properties": {
	          "name": {
	            "type": "string",
	            "minLength": 2,
	            "maxLength": 100,
	            "required": true
	          },
	          "nickName": {
	            "type": "string",
	            "minLength": 2,
	            "maxLength": 100,
	            "required": false
	          },
	          "phoneNumber": {
	            "type": "string",
	            "minLength": 2,
	            "maxLength": 100,
	            "required": true
	          },
	          "address": {
	            "type": "object",
	            "properties": {
	              "address1": {
	                "type": "string",
	                "minLength": 1,
	                "maxLength": 40,
	                "required": true
	              },
	              "address2": {
	                "type": "string",
	                "minLength": 1,
	                "maxLength": 40,
	                "required": false
	              },
	              "city": {
	                "type": "string",
	                "minLength": 1,
	                "maxLength": 32,
	                "required": true
	              },
	              "state": {
	                "type": "string",
	                "minLength": 2,
	                "maxLength": 2,
	                "required": true
	              },
	              "postalCode": {
	                "type": "string",
	                "minLength": 5,
	                "maxLength": 9,
	                "required": true
	              }
	            },
	            "required": true
	          },
	          "accountNumber": {
	            "type": "string",
	            "minLength": 2,
	            "maxLength": 100,
	            "required": false
	          }
	        },
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postBillPayPayeesRecord = definedTypes['BillPayData.PayeesPostRequest'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putBillPayPaymentsRecord method
	     *
	     * @name BillPayData#schemas.putBillPayPaymentsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "payment": {
	        "type": "object",
	        "properties": {
	          "payeeID": {
	            "type": "string",
	            "minLength": 1,
	            "maxLength": 100,
	            "required": true
	          },
	          "paymentAccount": {
	            "type": "object",
	            "properties": {
	              "accountNumber": {
	                "type": "string",
	                "minLength": 2,
	                "maxLength": 100,
	                "required": true
	              },
	              "routingNumber": {
	                "type": "string",
	                "minLength": 2,
	                "maxLength": 100,
	                "required": true
	              },
	              "accountType": {
	                "type": "string",
	                "minLength": 2,
	                "maxLength": 100,
	                "required": true
	              }
	            },
	            "required": true
	          },
	          "paymentAmount": {
	            "type": "number",
	            "required": true
	          },
	          "paymentDate": {
	            "type": "string",
	            "format": "date",
	            "required": true
	          },
	          "paymentMemo": {
	            "type": "string",
	            "minLength": 1,
	            "maxLength": 255,
	            "required": false
	          },
	          "overnightDeliveryAddress": {
	            "type": "object",
	            "properties": {
	              "address1": {
	                "type": "string",
	                "minLength": 1,
	                "maxLength": 40,
	                "required": true
	              },
	              "address2": {
	                "type": "string",
	                "minLength": 1,
	                "maxLength": 40,
	                "required": false
	              },
	              "city": {
	                "type": "string",
	                "minLength": 1,
	                "maxLength": 32,
	                "required": true
	              },
	              "state": {
	                "type": "string",
	                "minLength": 2,
	                "maxLength": 2,
	                "required": true
	              },
	              "postalCode": {
	                "type": "string",
	                "minLength": 5,
	                "maxLength": 9,
	                "required": true
	              }
	            },
	            "required": false
	          }
	        },
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.putBillPayPaymentsRecord = definedTypes['BillPayData.PaymentsPutRequest'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postBillPayPaymentsRecurringRecord method
	     *
	     * @name BillPayData#schemas.postBillPayPaymentsRecurringRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "payment": {
	        "type": "object",
	        "properties": {
	          "payeeID": {
	            "type": "string",
	            "minLength": 1,
	            "maxLength": 100,
	            "required": true
	          },
	          "paymentAccount": {
	            "type": "object",
	            "properties": {
	              "accountNumber": {
	                "type": "string",
	                "minLength": 2,
	                "maxLength": 100,
	                "required": true
	              },
	              "routingNumber": {
	                "type": "string",
	                "minLength": 2,
	                "maxLength": 100,
	                "required": true
	              },
	              "accountType": {
	                "type": "string",
	                "minLength": 2,
	                "maxLength": 100,
	                "required": true
	              }
	            },
	            "required": true
	          },
	          "paymentAmount": {
	            "type": "number",
	            "required": true
	          },
	          "paymentDate": {
	            "type": "string",
	            "format": "date",
	            "required": true
	          },
	          "numberOfInstances": {
	            "type": "integer",
	            "minimum": 1,
	            "required": false
	          },
	          "frequency": {
	            "type": "string",
	            "minLength": 1,
	            "maxLength": 20,
	            "required": true
	          },
	          "paymentScheduledAlert": {
	            "type": "boolean",
	            "required": true
	          },
	          "paymentSentAlert": {
	            "type": "boolean",
	            "required": true
	          },
	          "modelExpirationAlert": {
	            "type": "boolean",
	            "required": true
	          }
	        },
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postBillPayPaymentsRecurringRecord = definedTypes['BillPayData.RecurringPaymentsPostRequest'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putBillPayPaymentsRecurringRecord method
	     *
	     * @name BillPayData#schemas.putBillPayPaymentsRecurringRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "payment": {
	        "type": "object",
	        "properties": {
	          "payeeID": {
	            "type": "string",
	            "minLength": 1,
	            "maxLength": 100,
	            "required": true
	          },
	          "paymentAccount": {
	            "type": "object",
	            "properties": {
	              "accountNumber": {
	                "type": "string",
	                "minLength": 2,
	                "maxLength": 100,
	                "required": true
	              },
	              "routingNumber": {
	                "type": "string",
	                "minLength": 2,
	                "maxLength": 100,
	                "required": true
	              },
	              "accountType": {
	                "type": "string",
	                "minLength": 2,
	                "maxLength": 100,
	                "required": true
	              }
	            },
	            "required": true
	          },
	          "paymentAmount": {
	            "type": "number",
	            "required": true
	          },
	          "paymentDate": {
	            "type": "string",
	            "format": "date",
	            "required": true
	          },
	          "numberOfInstances": {
	            "type": "integer",
	            "minimum": 1,
	            "required": false
	          },
	          "frequency": {
	            "type": "string",
	            "minLength": 1,
	            "maxLength": 20,
	            "required": true
	          },
	          "paymentScheduledAlert": {
	            "type": "boolean",
	            "required": true
	          },
	          "paymentSentAlert": {
	            "type": "boolean",
	            "required": true
	          },
	          "modelExpirationAlert": {
	            "type": "boolean",
	            "required": true
	          }
	        },
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.putBillPayPaymentsRecurringRecord = definedTypes['BillPayData.RecurringPaymentsPutRequest'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putBillPayPayeesRecord method
	     *
	     * @name BillPayData#schemas.putBillPayPayeesRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "payee": {
	        "type": "object",
	        "properties": {
	          "name": {
	            "type": "string",
	            "minLength": 2,
	            "maxLength": 100,
	            "required": true
	          },
	          "nickName": {
	            "type": "string",
	            "minLength": 2,
	            "maxLength": 100,
	            "required": false
	          },
	          "phoneNumber": {
	            "type": "string",
	            "minLength": 2,
	            "maxLength": 100,
	            "required": true
	          },
	          "address": {
	            "type": "object",
	            "properties": {
	              "address1": {
	                "type": "string",
	                "minLength": 1,
	                "maxLength": 40,
	                "required": true
	              },
	              "address2": {
	                "type": "string",
	                "minLength": 1,
	                "maxLength": 40,
	                "required": false
	              },
	              "city": {
	                "type": "string",
	                "minLength": 1,
	                "maxLength": 32,
	                "required": true
	              },
	              "state": {
	                "type": "string",
	                "minLength": 2,
	                "maxLength": 2,
	                "required": true
	              },
	              "postalCode": {
	                "type": "string",
	                "minLength": 5,
	                "maxLength": 9,
	                "required": true
	              }
	            },
	            "required": true
	          },
	          "accountNumber": {
	            "type": "string",
	            "minLength": 2,
	            "maxLength": 100,
	            "required": false
	          },
	          "modifyPendingPayments": {
	            "type": "boolean",
	            "required": true
	          }
	        },
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.putBillPayPayeesRecord = definedTypes['BillPayData.PayeesPutRequest'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postBillPayPayeesElectronicRecord method
	     *
	     * @name BillPayData#schemas.postBillPayPayeesElectronicRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "payee": {
	        "type": "object",
	        "properties": {
	          "name": {
	            "type": "string",
	            "minLength": 2,
	            "maxLength": 100,
	            "required": true
	          },
	          "nickName": {
	            "type": "string",
	            "minLength": 2,
	            "maxLength": 100,
	            "required": false
	          },
	          "merchantID": {
	            "type": "string",
	            "minLength": 2,
	            "maxLength": 100,
	            "required": true
	          },
	          "merchantZipCode": {
	            "type": "string",
	            "minLength": 5,
	            "maxLength": 10,
	            "required": false
	          },
	          "accountNumber": {
	            "type": "string",
	            "minLength": 2,
	            "maxLength": 100,
	            "required": true
	          }
	        },
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postBillPayPayeesElectronicRecord = definedTypes['BillPayData.PayeesElectronicPostRequest'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putBillPayPayeesElectronicRecord method
	     *
	     * @name BillPayData#schemas.putBillPayPayeesElectronicRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "payee": {
	        "type": "object",
	        "properties": {
	          "name": {
	            "type": "string",
	            "minLength": 2,
	            "maxLength": 100,
	            "required": true
	          },
	          "nickName": {
	            "type": "string",
	            "minLength": 2,
	            "maxLength": 100,
	            "required": false
	          },
	          "accountNumber": {
	            "type": "string",
	            "minLength": 2,
	            "maxLength": 100,
	            "required": true
	          },
	          "modifyPendingPayments": {
	            "type": "boolean",
	            "required": true
	          }
	        },
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.putBillPayPayeesElectronicRecord = definedTypes['BillPayData.PayeesElectronicPutRequest'];
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return {
	
	      getBillPayPayments: getBillPayPayments,
	
	      postBillPayPaymentsRecord: postBillPayPaymentsRecord,
	
	      getBillPayAccounts: getBillPayAccounts,
	
	      getBillPayPayeesSearch: getBillPayPayeesSearch,
	
	      postBillPayPayeesRecord: postBillPayPayeesRecord,
	
	      getBillPayPayeesSummary: getBillPayPayeesSummary,
	
	      getBillPayEnrolment: getBillPayEnrolment,
	
	      postBillPayEnrolmentRecord: postBillPayEnrolmentRecord,
	
	      getBillPayPaymentsRecord: getBillPayPaymentsRecord,
	
	      putBillPayPaymentsRecord: putBillPayPaymentsRecord,
	
	      deleteBillPayPaymentsRecord: deleteBillPayPaymentsRecord,
	
	      postBillPayPaymentsRecurringRecord: postBillPayPaymentsRecurringRecord,
	
	      getBillPayPaymentsRecurringRecord: getBillPayPaymentsRecurringRecord,
	
	      deleteBillPayPaymentsRecurringRecord: deleteBillPayPaymentsRecurringRecord,
	
	      putBillPayPaymentsRecurringRecord: putBillPayPaymentsRecurringRecord,
	
	      getBillPayPayeesRecord: getBillPayPayeesRecord,
	
	      putBillPayPayeesRecord: putBillPayPayeesRecord,
	
	      deleteBillPayPayeesRecord: deleteBillPayPayeesRecord,
	
	      postBillPayPayeesElectronicRecord: postBillPayPayeesElectronicRecord,
	
	      getBillPayPayeesElectronicRecord: getBillPayPayeesElectronicRecord,
	
	      putBillPayPayeesElectronicRecord: putBillPayPayeesElectronicRecord,
	
	      deleteBillPayPayeesElectronicRecord: deleteBillPayPayeesElectronicRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-bill-pay-http-ng.js.map