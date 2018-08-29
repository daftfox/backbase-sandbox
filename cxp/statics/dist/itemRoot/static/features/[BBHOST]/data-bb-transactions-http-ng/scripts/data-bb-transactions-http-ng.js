(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-transactions-http-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-transactions-http-ng"] = factory(require("vendor-bb-angular"));
	else
		root["data-bb-transactions-http-ng"] = factory(root["vendor-bb-angular"]);
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
	exports.transactionsDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbTransactionsHttp = __webpack_require__(3);
	
	var _dataBbTransactionsHttp2 = _interopRequireDefault(_dataBbTransactionsHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	/**
	 * @module data-bb-transactions-http-ng
	 *
	 * @description A data module for accessing the Transactions REST API.
	 *
	 * @returns {String} `data-bb-transactions-http-ng`
	 * @example
	 * import transactionsDataModuleKey, {
	 *   transactionsDataKey,
	 * } from 'data-bb-transactions-http-ng';
	 */
	
	var transactionsDataModuleKey = 'data-bb-transactions-http-ng';
	/**
	 * @name transactionsDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the TransactionsData service
	 */
	var transactionsDataKey = exports.transactionsDataKey = 'data-bb-transactions-http-ng:transactionsData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(transactionsDataModuleKey, [])
	
	/**
	 * @constructor TransactionsData
	 * @type {object}
	 *
	 * @description Public api for data-bb-transactions-http-ng service
	 *
	 */
	.provider(transactionsDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name TransactionsDataProvider
	   * @type {object}
	   * @ngkey data-bb-transactions-http-ng:transactionsDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-transactions-http-ng:transactionsDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-transactions-http-ng:transactionsDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name TransactionsDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name TransactionsDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http', '$httpParamSerializer',
	    /* into */
	    (0, _dataBbTransactionsHttp2.default)(config)]
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
	
	    definedTypes['TransactionsData.TransactionsGet'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "maxLength": 50, "required": true }, "arrangementId": { "type": "string", "maxLength": 50, "required": true }, "reference": { "type": "string", "maxLength": 36, "required": false }, "description": { "type": "string", "maxLength": 128, "required": true }, "typeGroup": { "type": "string", "maxLength": 36, "required": true }, "type": { "type": "string", "maxLength": 36, "required": true }, "category": { "type": "string", "maxLength": 50, "required": false }, "bookingDate": { "type": "string", "format": "date", "required": true }, "valueDate": { "type": "string", "format": "date", "required": false }, "amount": { "type": "number", "required": true }, "currency": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true }, "creditDebitIndicator": { "type": "string", "enum": ["CRDT", "DBIT"], "required": true }, "instructedAmount": { "type": "number", "required": false }, "instructedCurrency": { "type": "string", "pattern": "^[A-Z]{3}$", "required": false }, "currencyExchangeRate": { "type": "number", "required": false }, "counterPartyName": { "type": "string", "maxLength": 128, "required": false }, "counterPartyAccountNumber": { "type": "string", "maxLength": 36, "required": false }, "counterPartyBIC": { "type": "string", "maxLength": 11, "required": false }, "counterPartyCountry": { "type": "string", "minLength": 2, "maxLength": 2, "required": false }, "counterPartyBankName": { "type": "string", "maxLength": 128, "required": false }, "creditorId": { "type": "string", "maxLength": 19, "required": false }, "mandateReference": { "type": "string", "maxLength": 128, "required": false }, "billingStatus": { "type": "string", "maxLength": 8, "required": false }, "checkSerialNumber": { "type": "integer", "minimum": 0, "maximum": 10000000000000000, "required": false }, "notes": { "type": "string", "maxLength": 4000, "required": false }, "runningBalance": { "type": "number", "required": false } } } };
	
	    definedTypes['TransactionsData.TransactionsPost'] = { "type": "array", "items": { "properties": { "arrangementId": { "type": "string", "maxLength": 36, "required": false }, "externalId": { "type": "string", "maxLength": 50, "required": true }, "externalArrangementId": { "type": "string", "maxLength": 50, "required": true }, "reference": { "type": "string", "maxLength": 36, "required": false }, "description": { "type": "string", "maxLength": 128, "required": true }, "typeGroup": { "type": "string", "maxLength": 36, "required": true }, "type": { "type": "string", "maxLength": 36, "required": true }, "category": { "type": "string", "maxLength": 50, "required": false }, "bookingDate": { "type": "string", "format": "date", "required": true }, "valueDate": { "type": "string", "format": "date", "required": false }, "amount": { "type": "number", "required": true }, "currency": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true }, "creditDebitIndicator": { "type": "string", "enum": ["CRDT", "DBIT"], "required": true }, "instructedAmount": { "type": "number", "required": false }, "instructedCurrency": { "type": "string", "pattern": "^[A-Z]{3}$", "required": false }, "currencyExchangeRate": { "type": "number", "required": false }, "counterPartyName": { "type": "string", "maxLength": 128, "required": false }, "counterPartyAccountNumber": { "type": "string", "maxLength": 36, "required": false }, "counterPartyBIC": { "type": "string", "maxLength": 11, "required": false }, "counterPartyCountry": { "type": "string", "minLength": 2, "maxLength": 2, "required": false }, "counterPartyBankName": { "type": "string", "maxLength": 128, "required": false }, "creditorId": { "type": "string", "maxLength": 19, "required": false }, "mandateReference": { "type": "string", "maxLength": 128, "required": false }, "billingStatus": { "type": "string", "maxLength": 8, "required": false }, "checkSerialNumber": { "type": "number", "minimum": 0, "maximum": 10000000000000000, "required": false }, "sequenceNumber": { "type": "string", "maxLength": 20, "pattern": "(^[1-9][0-9]*)|0$", "required": false }, "runningBalance": { "type": "number", "required": false } } } };
	
	    definedTypes['TransactionsData.TransactionsPatch'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "maxLength": 50, "required": true }, "arrangementId": { "type": "string", "maxLength": 50, "required": true }, "category": { "type": "string", "maxLength": 50, "required": false }, "billingStatus": { "type": "string", "maxLength": 8, "required": false }, "notes": { "type": "string", "maxLength": 4000, "required": false } } } };
	
	    definedTypes['TransactionsData.TransactionsIds'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true }, "externalId": { "type": "string", "required": true } } } };
	
	    definedTypes['TransactionsData.GetEnumValues'] = { "type": "array", "items": { "properties": { "value": { "type": "string", "required": true } } } };
	
	    definedTypes['TransactionsData.TurnoversGet'] = { "properties": { "arrangementIds": { "type": "array", "items": { "properties": {} }, "required": false }, "intervalDuration": { "enum": ["DAY", "WEEK", "MONTH", "YEAR"], "required": false }, "turnovers": { "type": "array", "items": { "properties": { "intervalStartDate": { "type": "string", "format": "date-time", "required": true }, "creditAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true }, "debitAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true }, "balance": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true } } }, "required": false } } };
	
	    definedTypes['TransactionsData.CategoryTotalsGet'] = { "properties": { "total": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "items": { "type": "array", "items": { "properties": { "category": { "type": "string", "required": true }, "totalAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true }, "trend": { "type": "number", "required": true }, "portion": { "type": "number", "required": true } } }, "required": false } } };
	
	    /**
	     * @typedef TransactionsData.CategoryTotalsGet
	     * @type {Object}
	     * @property {?TransactionsData.Currency} total The aggregate amount of all returned categories
	     * @property {?Array.<CategoryTotalsItem>} items
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef TransactionsData.Currency
	     * @type {Object}
	     * @property {String} amount The amount in the specified currency
	     * @property {String} currencyCode The alpha-3 code (complying with ISO 4217) of the currency that qualifies the amount
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef TransactionsData.DefaultValueGetResponse
	     * @type {Object}
	     * @property {String} value
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef TransactionsData.GetEnumValues
	     * @type {Array.<TransactionsData.DefaultValueGetResponse>}
	     */
	
	    /**
	     * @typedef TransactionsData.TransactionIds
	     * @type {Object}
	     * @property {String} id Internally used unique identification
	     * @property {String} externalId Externally used unique identification
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef TransactionsData.TransactionItem
	     * @type {Object}
	     * @property {String} id Internally used unique identification of the transaction
	     * @property {String} arrangementId Reference to the product to which the transaction belongs
	     * @property {?String} reference A tag/label issued by the initiator of the transaction in order to be able to refer to the respective transaction
	     * @property {String} description
	     * @property {String} typeGroup Bank specific code of the group the transaaction type belangs to this to be mapped to in integration
	     * @property {String} type Bank specific code to be mapped to generic type in integration
	     * @property {?String} category Transaction category
	     * @property {String} bookingDate The date the amount is posted to the balance of an account from a book keeping perspective.
	     * @property {?String} valueDate The date on which an amount posted to an account becomes interest bearing
	     * @property {Number} amount The amount of the transaction
	     * @property {String} currency The alpha-3 code (complying with ISO 4217) of the currency that qualifies the amount
	     * @property {String} creditDebitIndicator
	     * @property {?Number} instructedAmount Only present if the transaction currency<>account currency
	     * @property {?String} instructedCurrency The alpha-3 code (complying with ISO 4217) of the currency that qualifies the amount
	     * @property {?Number} currencyExchangeRate The exchange rate (between both account and transaction currency) that was used for the conversion. To be used if those currencies are not the same
	     * @property {?String} counterPartyName The name of the counterparty
	     * @property {?String} counterPartyAccountNumber The International Bank Account Number of the counterparty
	     * @property {?String} counterPartyBIC The BIC of the counterparty
	     * @property {?String} counterPartyCountry ISO Country code
	     * @property {?String} counterPartyBankName The bank name of the counterparty
	     * @property {?String} creditorId Id of the creditor (Only for SEPA DD)
	     * @property {?String} mandateReference Mandate Reference (Only for SEPA DD)
	     * @property {?String} billingStatus
	     * @property {?Integer} checkSerialNumber Serial number of the check. Each check has a different number for identification purposes.
	     * @property {?String} notes
	     * @property {?Number} runningBalance Indicates the balance of the account at that moment when the transaction was executed
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef TransactionsData.TransactionItemPatch
	     * @type {Object}
	     * @property {String} id Unique identification for the transaction as used in the external system
	     * @property {String} arrangementId Unique identification for the arrangement of the transaction
	     * @property {?String} category Transaction category
	     * @property {?String} billingStatus
	     * @property {?String} notes
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef TransactionsData.TransactionItemPost
	     * @type {Object}
	     * @property {?String} arrangementId Reference to the product to which the transaction belongs
	     * @property {String} externalId Internally used unique external identification of the transaction
	     * @property {String} externalArrangementId External reference to the product to which the transaction belongs
	     * @property {?String} reference A tag/label issued by the initiator of the transaction in order to be able to refer to the respective transaction
	     * @property {String} description
	     * @property {String} typeGroup Bank specific code of the group the transaaction type belangs to this to be mapped to in integration
	     * @property {String} type Bank specific code to be mapped to generic type in integration
	     * @property {?String} category Transaction category
	     * @property {String} bookingDate The date the amount is posted to the balance of an account from a book keeping perspective.
	     * @property {?String} valueDate The date on which an amount posted to an account becomes interest bearing
	     * @property {Number} amount The amount of the transaction
	     * @property {String} currency The alpha-3 code (complying with ISO 4217) of the currency that qualifies the amount
	     * @property {String} creditDebitIndicator
	     * @property {?Number} instructedAmount Only present if the transaction currency<>account currency
	     * @property {?String} instructedCurrency The alpha-3 code (complying with ISO 4217) of the currency that qualifies the amount
	     * @property {?Number} currencyExchangeRate The exchange rate (between both account and transaction currency) that was used for the conversion. To be used if those currencies are not the same
	     * @property {?String} counterPartyName The name of the counterparty
	     * @property {?String} counterPartyAccountNumber The International Bank Account Number of the counterparty
	     * @property {?String} counterPartyBIC The BIC of the counterparty
	     * @property {?String} counterPartyCountry ISO Country code
	     * @property {?String} counterPartyBankName The bank name of the counterparty
	     * @property {?String} creditorId Id of the creditor (Only for SEPA DD)
	     * @property {?String} mandateReference Mandate Reference (Only for SEPA DD)
	     * @property {?String} billingStatus
	     * @property {?Number} checkSerialNumber Serial number of the check. Each check has a different number for identification purposes.
	     * @property {?String} sequenceNumber
	     * @property {?Number} runningBalance Indicates the balance of the account at that moment when the transaction was executed
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef TransactionsData.TransactionsGet
	     * @type {Array.<TransactionsData.TransactionItem>}
	     */
	
	    /**
	     * @typedef TransactionsData.TransactionsIds
	     * @type {Array.<TransactionsData.TransactionIds>}
	     */
	
	    /**
	     * @typedef TransactionsData.TransactionsPatch
	     * @type {Array.<TransactionsData.TransactionItemPatch>}
	     */
	
	    /**
	     * @typedef TransactionsData.TransactionsPost
	     * @type {Array.<TransactionsData.TransactionItemPost>}
	     */
	
	    /**
	     * @typedef TransactionsData.TurnoversGet
	     * @type {Object}
	     * @property {?Array.<String>} arrangementIds Reference to the arrangements to which the periodic balances belong
	     * @property {?String} intervalDuration
	     * @property {?Array.<TurnoverItem>} turnovers
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
	     * @name TransactionsData#getTransactions
	     * @type {Function}
	     * @description Retrieves a list of pages limited in size and number by the page selection parameters, sorted and filtered
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?number} params.amountGreaterThan Amount greater than equal to. Eg: 5.
	       
	     * @param {?number} params.amountLessThan Amount less than equal to. Eg: 5.
	       
	     * @param {?string} params.bookingDateGreaterThan Booking date greater than equal to. Eg: 2016-05-16.
	       
	     * @param {?string} params.bookingDateLessThan Booking date less than equal to. Eg: 2016-05-16.
	       
	     * @param {?string} params.type Type category. Eg: International payment.
	       
	     * @param {?string} params.description The description of transaction. Eg: description.
	       
	     * @param {?string} params.reference reference. Eg: reference.
	       
	     * @param {?string} params.typeGroup The type group. Eg: Payment.
	       
	     * @param {?string} params.counterPartyName The name of the counterparty. Eg: counterPartyName.
	       
	     * @param {?string} params.counterPartyAccountNumber The International Bank Account Number of the counterparty. Eg: counterPartyAccountNumber.
	       
	     * @param {?string} params.creditDebitIndicator Indicates whether the amount is credited or debited. Eg: CRDT.
	       
	     * @param {?string} params.category Category of the transactions - Depricated. Eg: Transportation.
	       
	     * @param {?string} params.categories An array of transaction categories. Eg: Transportation,Salary,Home.
	       
	     * @param {?string} params.billingStatus Billing status of the transaction. Eg: BILLED.
	       
	     * @param {?string} params.currency Transaction currency. Eg: EUR.
	       
	     * @param {?number} params.notes If notes of the transaction are present. Eg: 1.
	       
	     * @param {?string} params.id The transaction id. Eg: 8a48e0585f49dfcb015f57e92e2d0040.
	       
	     * @param {?string} params.productId The arrangement id @deprecated since 2.11.0. Eg: 11-22-33.
	       
	     * @param {?string} params.arrangementId The arrangement id. Eg: 11-22-33.
	       
	     * @param {?string} params.arrangementsIds Array of arrangement ids. Eg: 8a48e0585f49dfcb015f57e92e2d0040,8a48e0585f49dfcb015f4ea2eabb001c.
	       
	     * @param {?number} params.fromCheckSerialNumber value greater than or equal to. Eg: 52444.
	       
	     * @param {?number} params.toCheckSerialNumber value less than or equal to. Eg: 78543.
	       
	     * @param {?string} params.checkSerialNumbers Array of checkSerialNumbers. Eg: 32124234,5423534.
	       
	     * @param {?string} params.query The search term used to search for transactions.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     * @param {?string} params.orderBy Order by field: description, bookingDate, arrangementId, reference, typeGroup, type, category, valueDate, amount, currency, creditDebitIndicator, instructedAmount, instructedCurrency, currencyExchangeRate, counterPartyName, counterPartyAccountNumber, checkSerialNumber.
	       
	     * @param {?string} params.direction Direction. (defaults to DESC)
	       
	     * @param {?string} params.secDirection Secondary Direction. (defaults to DESC)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link TransactionsData.TransactionsGet} on success 
	     *
	     * @example
	     * transactionsData
	     *  .getTransactions(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getTransactions(params, headers) {
	      var url = '' + baseUri + version + '/transactions';
	
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
	     * @name TransactionsData#postTransactionsRecord
	     * @type {Function}
	     * @description # Transaction
	    This EndPoint allows creating of Business/Retail banking transactions
	     
	     * @param {TransactionsData.TransactionsPost} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link TransactionsData.TransactionsIds} on success 
	     *
	     * @example
	     * transactionsData
	     *  .postTransactionsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postTransactionsRecord(data, headers) {
	      var url = '' + baseUri + version + '/transactions';
	
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
	     * @name TransactionsData#patchTransactionsRecord
	     * @type {Function}
	     * @description # Transaction Update
	    This EndPoint allows update of Business/Retail banking transactions
	     
	     * @param {TransactionsData.TransactionsPatch} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * transactionsData
	     *  .patchTransactionsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function patchTransactionsRecord(data, headers) {
	      var url = '' + baseUri + version + '/transactions';
	
	      return httpClient({
	        method: 'PATCH',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name TransactionsData#getTurnovers
	     * @type {Function}
	     * @description get request
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {?string} params.arrangementIds Reference to the arrangements to which the periodic balances belong.
	       
	     * @param {string} params.periodStartDate Date of the turnovers evaluation period start. Eg: 2016-12-31.
	       
	     * @param {string} params.periodEndDate Date of a turnovers evaluation period end. Eg: 2017-04-30.
	       
	     * @param {string} params.intervalDuration Length of each periodic interval. Eg: MONTH.
	       
	     * @param {?number} params.intervalStartDay Day of a month to start turnover interval. Eg: 1.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link TransactionsData.TurnoversGet} on success 
	     *
	     * @example
	     * transactionsData
	     *  .getTurnovers(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getTurnovers(params, headers) {
	      var url = '' + baseUri + version + '/turnovers';
	
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
	     * @name TransactionsData#getCategorytotals
	     * @type {Function}
	     * @description get request
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.creditDebitIndicator Flag to determine if credit or debit transactions will be aggregated.
	       
	     * @param {?string} params.arrangementIds Reference to the arrangements to which the income/spending analysis belong.
	       
	     * @param {string} params.periodStartDate Date of the income/spending evaluation period start. Eg: 2016-12-31.
	       
	     * @param {string} params.periodEndDate Date of a income/spending evaluation period end. Eg: 2017-04-30.
	       
	     * @param {?string} params.intervalDuration Length of each periodic interval. (defaults to MONTH)
	       
	     * @param {?string} params.parentCategory If this is present the responce will have all child categories of that parent.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link TransactionsData.CategoryTotalsGet} on success 
	     *
	     * @example
	     * transactionsData
	     *  .getCategorytotals(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getCategorytotals(params, headers) {
	      var url = '' + baseUri + version + '/categorytotals';
	
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
	     * @name TransactionsData#getTransactionsEnumValuesRecord
	     * @type {Function}
	     * @description Retrieves a list of possible values for specific attributes
	     
	     * @param {string} attributeName 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link TransactionsData.GetEnumValues} on success 
	     *
	     * @example
	     * transactionsData
	     *  .getTransactionsEnumValuesRecord(attributeName, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getTransactionsEnumValuesRecord(attributeName, params, headers) {
	      var url = '' + baseUri + version + '/transactions/enumValues/' + attributeName;
	
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
	     * @name TransactionsData#getTransactionsCsvUrl
	     * @type {Function}
	     * @description Retrieves a list of pages in csv format limited in size and number by the page selection parameters, sorted and filtered
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?number} params.amountGreaterThan Amount greater than equal to. Eg: 5.
	       
	     * @param {?number} params.amountLessThan Amount less than equal to. Eg: 5.
	       
	     * @param {?string} params.bookingDateGreaterThan Booking date greater than equal to. Eg: 2016-05-16.
	       
	     * @param {?string} params.bookingDateLessThan Booking date less than equal to. Eg: 2016-05-16.
	       
	     * @param {?string} params.type Type category. Eg: International payment.
	       
	     * @param {?string} params.description The description of transaction. Eg: description.
	       
	     * @param {?string} params.reference reference. Eg: reference.
	       
	     * @param {?string} params.typeGroup The type group. Eg: Payment.
	       
	     * @param {?string} params.counterPartyName The name of the counterparty. Eg: counterPartyName.
	       
	     * @param {?string} params.counterPartyAccountNumber The International Bank Account Number of the counterparty. Eg: counterPartyAccountNumber.
	       
	     * @param {?string} params.creditDebitIndicator Indicates whether the amount is credited or debited. Eg: CRDT.
	       
	     * @param {?string} params.category Category of the transactions - Depricated. Eg: Transportation.
	       
	     * @param {?string} params.categories An array of transaction categories. Eg: Transportation,Salary,Home.
	       
	     * @param {?string} params.billingStatus Billing status of the transaction. Eg: BILLED.
	       
	     * @param {?string} params.currency Transaction currency. Eg: EUR.
	       
	     * @param {?number} params.notes If notes of the transaction are present. Eg: 1.
	       
	     * @param {?string} params.id The transaction id. Eg: 8a48e0585f49dfcb015f57e92e2d0040.
	       
	     * @param {?string} params.productId The arrangement id @deprecated since 2.11.0. Eg: 11-22-33.
	       
	     * @param {?string} params.arrangementId The arrangement id. Eg: 11-22-33.
	       
	     * @param {?string} params.arrangementsIds Array of arrangement ids. Eg: 8a48e0585f49dfcb015f57e92e2d0040,8a48e0585f49dfcb015f4ea2eabb001c.
	       
	     * @param {?number} params.fromCheckSerialNumber value greater than or equal to. Eg: 52444.
	       
	     * @param {?number} params.toCheckSerialNumber value less than or equal to. Eg: 78543.
	       
	     * @param {?string} params.checkSerialNumbers Array of checkSerialNumbers. Eg: 32124234,5423534.
	       
	     * @param {?string} params.query The search term used to search for transactions.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20.
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80.
	       
	     * @param {?string} params.orderBy Order by field: description, bookingDate, arrangementId, reference, typeGroup, type, category, valueDate, amount, currency, creditDebitIndicator, instructedAmount, instructedCurrency, currencyExchangeRate, counterPartyName, counterPartyAccountNumber, checkSerialNumber.
	       
	     * @param {?string} params.direction Direction. (defaults to DESC)
	       
	     * @param {?string} params.secDirection Secondary Direction. (defaults to DESC)
	       
	     
	     * @returns {string} Request URL
	     *
	     * @example
	     * const url = transactionsData.getTransactionsCsvUrl(params)
	     * $http({ url })
	     *  .then(function(result){
	     *    console.log('result', result);
	     *  });
	     */
	    function getTransactionsCsvUrl(params) {
	      return '' + baseUri + version + '/transactions/csv?' + serializeParams(params);
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
	     * @name TransactionsData#schemas
	     * @type {Object}
	     */
	    var schemas = {};
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postTransactionsRecord method
	     *
	     * @name TransactionsData#schemas.postTransactionsRecord
	     * @type {Object}
	     * @example
	     * {
	    "type": "array",
	    "items": {
	      "properties": {
	        "arrangementId": {
	          "type": "string",
	          "maxLength": 36,
	          "required": false
	        },
	        "externalId": {
	          "type": "string",
	          "maxLength": 50,
	          "required": true
	        },
	        "externalArrangementId": {
	          "type": "string",
	          "maxLength": 50,
	          "required": true
	        },
	        "reference": {
	          "type": "string",
	          "maxLength": 36,
	          "required": false
	        },
	        "description": {
	          "type": "string",
	          "maxLength": 128,
	          "required": true
	        },
	        "typeGroup": {
	          "type": "string",
	          "maxLength": 36,
	          "required": true
	        },
	        "type": {
	          "type": "string",
	          "maxLength": 36,
	          "required": true
	        },
	        "category": {
	          "type": "string",
	          "maxLength": 50,
	          "required": false
	        },
	        "bookingDate": {
	          "type": "string",
	          "format": "date",
	          "required": true
	        },
	        "valueDate": {
	          "type": "string",
	          "format": "date",
	          "required": false
	        },
	        "amount": {
	          "type": "number",
	          "required": true
	        },
	        "currency": {
	          "type": "string",
	          "pattern": "^[A-Z]{3}$",
	          "required": true
	        },
	        "creditDebitIndicator": {
	          "type": "string",
	          "enum": [
	            "CRDT",
	            "DBIT"
	          ],
	          "required": true
	        },
	        "instructedAmount": {
	          "type": "number",
	          "required": false
	        },
	        "instructedCurrency": {
	          "type": "string",
	          "pattern": "^[A-Z]{3}$",
	          "required": false
	        },
	        "currencyExchangeRate": {
	          "type": "number",
	          "required": false
	        },
	        "counterPartyName": {
	          "type": "string",
	          "maxLength": 128,
	          "required": false
	        },
	        "counterPartyAccountNumber": {
	          "type": "string",
	          "maxLength": 36,
	          "required": false
	        },
	        "counterPartyBIC": {
	          "type": "string",
	          "maxLength": 11,
	          "required": false
	        },
	        "counterPartyCountry": {
	          "type": "string",
	          "minLength": 2,
	          "maxLength": 2,
	          "required": false
	        },
	        "counterPartyBankName": {
	          "type": "string",
	          "maxLength": 128,
	          "required": false
	        },
	        "creditorId": {
	          "type": "string",
	          "maxLength": 19,
	          "required": false
	        },
	        "mandateReference": {
	          "type": "string",
	          "maxLength": 128,
	          "required": false
	        },
	        "billingStatus": {
	          "type": "string",
	          "maxLength": 8,
	          "required": false
	        },
	        "checkSerialNumber": {
	          "type": "number",
	          "minimum": 0,
	          "maximum": 10000000000000000,
	          "required": false
	        },
	        "sequenceNumber": {
	          "type": "string",
	          "maxLength": 20,
	          "pattern": "(^[1-9][0-9]*)|0$",
	          "required": false
	        },
	        "runningBalance": {
	          "type": "number",
	          "required": false
	        }
	      }
	    }
	    }
	     */
	
	    schemas.postTransactionsRecord = definedTypes['TransactionsData.TransactionsPost'];
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return {
	
	      getTransactions: getTransactions,
	
	      postTransactionsRecord: postTransactionsRecord,
	
	      patchTransactionsRecord: patchTransactionsRecord,
	
	      getTurnovers: getTurnovers,
	
	      getCategorytotals: getCategorytotals,
	
	      getTransactionsEnumValuesRecord: getTransactionsEnumValuesRecord,
	
	      getTransactionsCsvUrl: getTransactionsCsvUrl,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-transactions-http-ng.js.map