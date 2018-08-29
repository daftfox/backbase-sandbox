(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-payments-http-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-payments-http-ng"] = factory(require("vendor-bb-angular"));
	else
		root["data-bb-payments-http-ng"] = factory(root["vendor-bb-angular"]);
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
	exports.paymentsDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbPaymentsHttp = __webpack_require__(3);
	
	var _dataBbPaymentsHttp2 = _interopRequireDefault(_dataBbPaymentsHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	/**
	 * @module data-bb-payments-http-ng
	 *
	 * @description A data module for accessing the Payments REST API.
	 *
	 * @returns {String} `data-bb-payments-http-ng`
	 * @example
	 * import paymentsDataModuleKey, {
	 *   paymentsDataKey,
	 * } from 'data-bb-payments-http-ng';
	 */
	
	var paymentsDataModuleKey = 'data-bb-payments-http-ng';
	/**
	 * @name paymentsDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the PaymentsData service
	 */
	var paymentsDataKey = exports.paymentsDataKey = 'data-bb-payments-http-ng:paymentsData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(paymentsDataModuleKey, [])
	
	/**
	 * @constructor PaymentsData
	 * @type {object}
	 *
	 * @description Public api for data-bb-payments-http-ng service
	 *
	 */
	.provider(paymentsDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name PaymentsDataProvider
	   * @type {object}
	   * @ngkey data-bb-payments-http-ng:paymentsDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-payments-http-ng:paymentsDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-payments-http-ng:paymentsDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name PaymentsDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name PaymentsDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http', '$httpParamSerializer',
	    /* into */
	    (0, _dataBbPaymentsHttp2.default)(config)]
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
	
	    definedTypes['PaymentsData.DirectDebits'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$", "required": true }, "status": { "type": "string", "enum": ["ANNOUNCED", "PROCESSED", "REJECTED", "REFUNDED", "REFUSED", "REFUND_REQUESTED", "REFUSAL_REQUESTED"], "required": true }, "type": { "type": "string", "enum": ["CORE", "B2B"], "required": false }, "refundDayCount": { "type": "integer", "required": false }, "creditorReference": { "type": "string", "maxLength": 35, "required": true }, "mandateReference": { "type": "string", "maxLength": 35, "required": true } } } };
	
	    /**
	     * @typedef PaymentsData.DirectDebit
	     * @type {Object}
	     * @property {String} id
	     * @property {String} status One of "ANNOUNCED", "PROCESSED", "REJECTED", "REFUNDED", "REFUSED", "REFUND_REQUESTED", "REFUSAL_REQUESTED"
	     * @property {?String} type One of "CORE", "B2B"
	     * @property {?Integer} refundDayCount The number of days that indicates how many days the refund is available after the direct debit was processed
	     * @property {String} creditorReference Client reference creditor alphanumeric number like 123AB0078
	     * @property {String} mandateReference Client reference mandate alphanumeric number like 123AB0078
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentsData.DirectDebits
	     * @type {Array.<PaymentsData.DirectDebit>}
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
	     * @name PaymentsData#getPayments
	     * @type {Function}
	     * @description Retrieve list of payments.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?number} params.from Skip over a page of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?string} params.cursor As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     * @param {?string} params.orderBy Order by field.
	       
	     * @param {?string} params.direction Direction. (defaults to DESC)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * paymentsData
	     *  .getPayments(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPayments(params, headers) {
	      var url = '' + baseUri + version + '/payments';
	
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
	     * @name PaymentsData#postPaymentsRecord
	     * @type {Function}
	     * @description Create new payment.
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * paymentsData
	     *  .postPaymentsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postPaymentsRecord(data, headers) {
	      var url = '' + baseUri + version + '/payments';
	
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
	     * @name PaymentsData#getPaymentsRecord
	     * @type {Function}
	     * @description Retrieve single payment.
	     
	     * @param {string} paymentId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * paymentsData
	     *  .getPaymentsRecord(paymentId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPaymentsRecord(paymentId, params, headers) {
	      var url = '' + baseUri + version + '/payments/' + paymentId;
	
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
	     * @name PaymentsData#deletePaymentsRecord
	     * @type {Function}
	     * @description Delete a single payment by Id
	     
	     * @param {string} paymentId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * paymentsData
	     *  .deletePaymentsRecord(paymentId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deletePaymentsRecord(paymentId, params, headers) {
	      var url = '' + baseUri + version + '/payments/' + paymentId;
	
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
	     * @name PaymentsData#getPaymentsStandingOrders
	     * @type {Function}
	     * @description Retrieve list of standing orders
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?number} params.from Skip over a page of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?string} params.cursor As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     * @param {?string} params.orderBy Order by field.
	       
	     * @param {?string} params.direction Direction. (defaults to DESC)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * paymentsData
	     *  .getPaymentsStandingOrders(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPaymentsStandingOrders(params, headers) {
	      var url = '' + baseUri + version + '/payments/standing-orders';
	
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
	     * @name PaymentsData#getPaymentsAuthorizations
	     * @type {Function}
	     * @description Retrieve list of only payments, which can be authorized or rejected.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?number} params.from Skip over a page of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?string} params.cursor As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     * @param {?string} params.orderBy Order by field.
	       
	     * @param {?string} params.direction Direction. (defaults to DESC)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * paymentsData
	     *  .getPaymentsAuthorizations(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPaymentsAuthorizations(params, headers) {
	      var url = '' + baseUri + version + '/payments/authorizations';
	
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
	     * @name PaymentsData#getPaymentsDirectDebits
	     * @type {Function}
	     * @description Retrieve list of direct debits.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?number} params.from Skip over a page of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?string} params.cursor As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     * @param {?string} params.orderBy Order by field.
	       
	     * @param {?string} params.direction Direction. (defaults to DESC)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PaymentsData.DirectDebits} on success 
	     *
	     * @example
	     * paymentsData
	     *  .getPaymentsDirectDebits(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPaymentsDirectDebits(params, headers) {
	      var url = '' + baseUri + version + '/payments/direct-debits';
	
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
	     * @name PaymentsData#getPaymentsCurrencies
	     * @type {Function}
	     * @description Get currencies available for payment.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * paymentsData
	     *  .getPaymentsCurrencies(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPaymentsCurrencies(params, headers) {
	      var url = '' + baseUri + version + '/payments/currencies';
	
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
	     * @name PaymentsData#getPaymentsRate
	     * @type {Function}
	     * @description Get available rate for currencies.
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.currencyFrom Currency transfer from. Eg: EUR.
	       
	     * @param {string} params.currencyTo Currency transfer to. Eg: USD.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * paymentsData
	     *  .getPaymentsRate(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPaymentsRate(params, headers) {
	      var url = '' + baseUri + version + '/payments/rate';
	
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
	     * @name PaymentsData#postPaymentsAuthorizationsRecord
	     * @type {Function}
	     * @description Authorize payment.
	     
	     * @param {string} paymentId 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * paymentsData
	     *  .postPaymentsAuthorizationsRecord(paymentId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postPaymentsAuthorizationsRecord(paymentId, data, headers) {
	      var url = '' + baseUri + version + '/payments/authorizations/' + paymentId;
	
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
	     * @name PaymentsData#postPaymentsRejectionsRecord
	     * @type {Function}
	     * @description Reject payment.
	     
	     * @param {string} paymentId 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * paymentsData
	     *  .postPaymentsRejectionsRecord(paymentId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postPaymentsRejectionsRecord(paymentId, data, headers) {
	      var url = '' + baseUri + version + '/payments/rejections/' + paymentId;
	
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
	     * @name PaymentsData#postPaymentsDirectDebitsRefundsRecord
	     * @type {Function}
	     * @description Refund direct debit.
	     
	     * @param {string} directDebitId 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * paymentsData
	     *  .postPaymentsDirectDebitsRefundsRecord(directDebitId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postPaymentsDirectDebitsRefundsRecord(directDebitId, data, headers) {
	      var url = '' + baseUri + version + '/payments/direct-debits/' + directDebitId + '/refunds';
	
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
	     * @name PaymentsData#postPaymentsDirectDebitsRefusalsRecord
	     * @type {Function}
	     * @description Refuse direct debit.
	     
	     * @param {string} directDebitId 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * paymentsData
	     *  .postPaymentsDirectDebitsRefusalsRecord(directDebitId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postPaymentsDirectDebitsRefusalsRecord(directDebitId, data, headers) {
	      var url = '' + baseUri + version + '/payments/direct-debits/' + directDebitId + '/refusals';
	
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
	     * @name PaymentsData#schemas
	     * @type {Object}
	     */
	    var schemas = {};
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postPaymentsRecord method
	     *
	     * @name PaymentsData#schemas.postPaymentsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "debitAccountIdentification": {
	        "type": "object",
	        "properties": {
	          "counterpartyName": {
	            "type": "string",
	            "maxLength": 256,
	            "required": true
	          },
	          "scheme": {
	            "type": "string",
	            "enum": [
	              "BBAN",
	              "IBAN",
	              "ID"
	            ],
	            "required": true
	          },
	          "identification": {
	            "type": "string",
	            "required": true
	          },
	          "counterpartyBIC": {
	            "type": "string",
	            "pattern": "[A-Z]{6,6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3,3}){0,1}",
	            "required": false
	          },
	          "counterpartyCountry": {
	            "type": "string",
	            "minLength": 2,
	            "maxLength": 2,
	            "required": false
	          },
	          "counterpartyBankName": {
	            "type": "string",
	            "maxLength": 256,
	            "required": false
	          }
	        },
	        "required": false
	      },
	      "creditAccountIdentification": {
	        "type": "object",
	        "properties": {
	          "counterpartyName": {
	            "type": "string",
	            "maxLength": 256,
	            "required": true
	          },
	          "scheme": {
	            "type": "string",
	            "enum": [
	              "BBAN",
	              "IBAN",
	              "ID"
	            ],
	            "required": true
	          },
	          "identification": {
	            "type": "string",
	            "required": true
	          },
	          "counterpartyBIC": {
	            "type": "string",
	            "pattern": "[A-Z]{6,6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3,3}){0,1}",
	            "required": false
	          },
	          "counterpartyCountry": {
	            "type": "string",
	            "minLength": 2,
	            "maxLength": 2,
	            "required": false
	          },
	          "counterpartyBankName": {
	            "type": "string",
	            "maxLength": 256,
	            "required": false
	          }
	        },
	        "required": false
	      },
	      "amount": {
	        "type": "string",
	        "required": true
	      },
	      "currency": {
	        "type": "string",
	        "pattern": "^[A-Z]{3}$",
	        "required": true
	      },
	      "paymentMode": {
	        "type": "string",
	        "enum": [
	          "SINGLE",
	          "RECURRING"
	        ],
	        "default": "SINGLE",
	        "required": true
	      },
	      "date": {
	        "type": "string",
	        "format": "date",
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
	      "description": {
	        "type": "string",
	        "maxLength": 256,
	        "required": false
	      },
	      "urgent": {
	        "type": "boolean",
	        "required": false
	      },
	      "paymentReference": {
	        "type": "string",
	        "maxLength": 256,
	        "required": false
	      },
	      "createdBy": {
	        "type": "string",
	        "maxLength": 256,
	        "required": false
	      },
	      "createdAt": {
	        "type": "string",
	        "format": "date-time",
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.postPaymentsRecord = { "properties": { "debitAccountIdentification": { "type": "object", "properties": { "counterpartyName": { "type": "string", "maxLength": 256, "required": true }, "scheme": { "type": "string", "enum": ["BBAN", "IBAN", "ID"], "required": true }, "identification": { "type": "string", "required": true }, "counterpartyBIC": { "type": "string", "pattern": "[A-Z]{6,6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3,3}){0,1}", "required": false }, "counterpartyCountry": { "type": "string", "minLength": 2, "maxLength": 2, "required": false }, "counterpartyBankName": { "type": "string", "maxLength": 256, "required": false } }, "required": false }, "creditAccountIdentification": { "type": "object", "properties": { "counterpartyName": { "type": "string", "maxLength": 256, "required": true }, "scheme": { "type": "string", "enum": ["BBAN", "IBAN", "ID"], "required": true }, "identification": { "type": "string", "required": true }, "counterpartyBIC": { "type": "string", "pattern": "[A-Z]{6,6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3,3}){0,1}", "required": false }, "counterpartyCountry": { "type": "string", "minLength": 2, "maxLength": 2, "required": false }, "counterpartyBankName": { "type": "string", "maxLength": 256, "required": false } }, "required": false }, "amount": { "type": "string", "required": true }, "currency": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true }, "paymentMode": { "type": "string", "enum": ["SINGLE", "RECURRING"], "default": "SINGLE", "required": true }, "date": { "type": "string", "format": "date", "required": false }, "schedule": { "type": "object", "properties": { "nonWorkingDayExecutionStrategy": { "type": "string", "enum": ["BEFORE", "AFTER", "NONE"], "required": false }, "transferFrequency": { "type": "string", "enum": ["ONCE", "DAILY", "WEEKLY", "MONTHLY", "QUARTERLY", "YEARLY"], "required": true }, "on": { "type": "integer", "required": true }, "startDate": { "type": "string", "format": "date", "required": true }, "endDate": { "type": "string", "format": "date", "required": false }, "repeat": { "type": "integer", "required": false }, "every": { "type": "integer", "enum": [1, 2], "required": true }, "nextExecutionDate": { "type": "string", "format": "date", "required": false } }, "required": false }, "description": { "type": "string", "maxLength": 256, "required": false }, "urgent": { "type": "boolean", "required": false }, "paymentReference": { "type": "string", "maxLength": 256, "required": false }, "createdBy": { "type": "string", "maxLength": 256, "required": false }, "createdAt": { "type": "string", "format": "date-time", "required": false } } };
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return {
	
	      getPayments: getPayments,
	
	      postPaymentsRecord: postPaymentsRecord,
	
	      getPaymentsRecord: getPaymentsRecord,
	
	      deletePaymentsRecord: deletePaymentsRecord,
	
	      getPaymentsStandingOrders: getPaymentsStandingOrders,
	
	      getPaymentsAuthorizations: getPaymentsAuthorizations,
	
	      getPaymentsDirectDebits: getPaymentsDirectDebits,
	
	      getPaymentsCurrencies: getPaymentsCurrencies,
	
	      getPaymentsRate: getPaymentsRate,
	
	      postPaymentsAuthorizationsRecord: postPaymentsAuthorizationsRecord,
	
	      postPaymentsRejectionsRecord: postPaymentsRejectionsRecord,
	
	      postPaymentsDirectDebitsRefundsRecord: postPaymentsDirectDebitsRefundsRecord,
	
	      postPaymentsDirectDebitsRefusalsRecord: postPaymentsDirectDebitsRefusalsRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-payments-http-ng.js.map