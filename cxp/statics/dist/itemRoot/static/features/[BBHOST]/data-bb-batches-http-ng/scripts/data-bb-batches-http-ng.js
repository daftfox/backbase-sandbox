(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-batches-http-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-batches-http-ng"] = factory(require("vendor-bb-angular"));
	else
		root["data-bb-batches-http-ng"] = factory(root["vendor-bb-angular"]);
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
	exports.batchesDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbBatchesHttp = __webpack_require__(3);
	
	var _dataBbBatchesHttp2 = _interopRequireDefault(_dataBbBatchesHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	/**
	 * @module data-bb-batches-http-ng
	 *
	 * @description A data module for accessing the Batches REST API.
	 *
	 * @returns {String} `data-bb-batches-http-ng`
	 * @example
	 * import batchesDataModuleKey, {
	 *   batchesDataKey,
	 * } from 'data-bb-batches-http-ng';
	 */
	
	var batchesDataModuleKey = 'data-bb-batches-http-ng';
	/**
	 * @name batchesDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the BatchesData service
	 */
	var batchesDataKey = exports.batchesDataKey = 'data-bb-batches-http-ng:batchesData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(batchesDataModuleKey, [])
	
	/**
	 * @constructor BatchesData
	 * @type {object}
	 *
	 * @description Public api for data-bb-batches-http-ng service
	 *
	 */
	.provider(batchesDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name BatchesDataProvider
	   * @type {object}
	   * @ngkey data-bb-batches-http-ng:batchesDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-batches-http-ng:batchesDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-batches-http-ng:batchesDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name BatchesDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name BatchesDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http', '$httpParamSerializer',
	    /* into */
	    (0, _dataBbBatchesHttp2.default)(config)]
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
	
	    definedTypes['BatchesData.Batches'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$", "required": true }, "fileName": { "type": "string", "required": true }, "fileSize": { "type": "integer", "required": true }, "creationDate": { "type": "string", "format": "date-time", "required": true }, "creationUser": { "type": "object", "properties": { "firstName": { "type": "string", "required": false }, "lastName": { "type": "string", "required": true } }, "required": true }, "status": { "type": "string", "enum": ["UNAUTHORIZED", "PARTIALLY_AUTHORIZED", "AUTHORIZED", "REJECTED_BY_USER"], "required": true }, "type": { "type": "string", "enum": ["SEPA CT"], "required": true }, "reference": { "type": "string", "minLength": 1, "maxLength": 35, "pattern": "^[0-9a-zA-Z]*$", "required": true }, "amount": { "type": "number", "required": true }, "currency": { "type": "string", "enum": ["EUR"], "required": true }, "executionDate": { "type": "string", "format": "date", "required": true }, "paymentsCount": { "type": "integer", "minimum": 1, "required": true } } } };
	
	    definedTypes['BatchesData.UploadBatch'] = { "properties": { "id": { "type": "string", "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$", "required": true } } };
	
	    definedTypes['BatchesData.BatchPayments'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$", "required": true }, "creditAccountIdentification": { "type": "object", "properties": { "counterpartyName": { "type": "string", "required": true }, "scheme": { "type": "string", "enum": ["BBAN", "IBAN", "ID"], "required": true }, "identification": { "type": "string", "required": true } }, "required": false }, "amount": { "type": "string", "required": true }, "currency": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true }, "description": { "type": "string", "required": false }, "transactionReferece": { "type": "string", "maxLength": 35, "required": true } } } };
	
	    definedTypes['BatchesData.Authorizations'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$", "required": true }, "fileName": { "type": "string", "required": true }, "fileSize": { "type": "integer", "required": true }, "creationDate": { "type": "string", "format": "date-time", "required": true }, "creationUser": { "type": "object", "properties": { "firstName": { "type": "string", "required": false }, "lastName": { "type": "string", "required": true } }, "required": true }, "status": { "type": "string", "enum": ["UNAUTHORIZED", "PARTIALLY_AUTHORIZED", "AUTHORIZED", "REJECTED_BY_USER"], "required": true }, "type": { "type": "string", "enum": ["SEPA CT"], "required": true }, "reference": { "type": "string", "minLength": 1, "maxLength": 35, "pattern": "^[0-9a-zA-Z]*$", "required": true }, "amount": { "type": "number", "required": true }, "currency": { "type": "string", "enum": ["EUR"], "required": true }, "executionDate": { "type": "string", "format": "date", "required": true }, "paymentsCount": { "type": "integer", "minimum": 1, "required": true } } } };
	
	    /**
	     * @typedef BatchesData.AccountIdentification
	     * @type {Object}
	     * @property {String} counterpartyName Counterparty name. Only required when 'scheme' is set to IBAN/BBAN.
	     * @property {String} scheme One of "BBAN", "IBAN", "ID"
	     * @property {String} identification Unique identification of the product
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BatchesData.Authorizations
	     * @type {Array.<BatchesData.Batch>}
	     */
	
	    /**
	     * @typedef BatchesData.Batch
	     * @type {Object}
	     * @property {String} id
	     * @property {String} fileName Uploaded file name
	     * @property {Integer} fileSize Uploaded file size (in bytes)
	     * @property {String} creationDate Creation date and time of the uploaded file
	     * @property {BatchesData.creationUser} creationUser User which uploaded batch file
	     * @property {String} status One of "UNAUTHORIZED", "PARTIALLY_AUTHORIZED", "AUTHORIZED", "REJECTED_BY_USER"
	     * @property {String} type One of "SEPA CT"
	     * @property {String} reference Alphanumeric uniqe reference number of the batch
	     * @property {Number} amount The total amount of all payment orders inside batch
	     * @property {String} currency One of "EUR"
	     * @property {String} executionDate Execution date of the batch
	     * @property {Integer} paymentsCount Number of payment orders inside batch
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BatchesData.BatchPayments
	     * @type {Array.<BatchesData.Payment>}
	     */
	
	    /**
	     * @typedef BatchesData.Batches
	     * @type {Array.<BatchesData.Batch>}
	     */
	
	    /**
	     * @typedef BatchesData.Payment
	     * @type {Object}
	     * @property {String} id
	     * @property {?BatchesData.AccountIdentification} creditAccountIdentification
	     * @property {String} amount The amount of the payment
	     * @property {String} currency The alpha-3 code (complying with ISO 4217) of the currency that qualifies the amount
	     * @property {?String} description The description for the payment.
	     * @property {String} transactionReferece The reference for the payment, provided by the client from the batch file
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BatchesData.UploadBatch
	     * @type {Object}
	     * @property {String} id
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BatchesData.creationUser
	     * @type {Object}
	     * @property {?String} firstName The given name of a user
	     * @property {String} lastName The family name of a user
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
	     * @name BatchesData#getBatchesLegalentityRecord
	     * @type {Function}
	     * @description Retrieve list of uploaded batch files
	     
	     * @param {string} legalEntityId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     * @param {?string} params.orderBy Order by field: status, type, paymentsCount, currency, amount, executionDate, creationUser, creationDate.
	       
	     * @param {?string} params.direction Direction. (defaults to DESC)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link BatchesData.Batches} on success 
	     *
	     * @example
	     * batchesData
	     *  .getBatchesLegalentityRecord(legalEntityId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getBatchesLegalentityRecord(legalEntityId, params, headers) {
	      var url = '' + baseUri + version + '/batches/legalentity/' + legalEntityId;
	
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
	     * @name BatchesData#postBatchesLegalentityRecord
	     * @type {Function}
	     * @description Upload new batch file
	     
	     * @param {string} legalEntityId 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link BatchesData.UploadBatch} on success 
	     *
	     * @example
	     * batchesData
	     *  .postBatchesLegalentityRecord(legalEntityId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postBatchesLegalentityRecord(legalEntityId, data, headers) {
	      var url = '' + baseUri + version + '/batches/legalentity/' + legalEntityId;
	
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
	     * @name BatchesData#getBatchesLegalentityAuthorizations
	     * @type {Function}
	     * @description Retrieve list of batches, which can be authorized or rejected.
	     
	     * @param {string} legalEntityId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     * @param {?string} params.orderBy Order by field: status, type, paymentsCount, currency, amount, executionDate, creationUser, creationDate.
	       
	     * @param {?string} params.direction Direction. (defaults to DESC)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link BatchesData.Authorizations} on success 
	     *
	     * @example
	     * batchesData
	     *  .getBatchesLegalentityAuthorizations(legalEntityId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getBatchesLegalentityAuthorizations(legalEntityId, params, headers) {
	      var url = '' + baseUri + version + '/batches/legalentity/' + legalEntityId + '/authorizations';
	
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
	     * @name BatchesData#getBatchesLegalentityPayments
	     * @type {Function}
	     * @description Retrieve list of batch payments
	     
	     * @param {string} legalEntityId 
	       
	     
	     * @param {string} batchId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link BatchesData.BatchPayments} on success 
	     *
	     * @example
	     * batchesData
	     *  .getBatchesLegalentityPayments(legalEntityId, batchId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getBatchesLegalentityPayments(legalEntityId, batchId, params, headers) {
	      var url = '' + baseUri + version + '/batches/legalentity/' + legalEntityId + '/' + batchId + '/payments';
	
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
	     * @name BatchesData#postBatchesLegalentityAuthorizationsRecord
	     * @type {Function}
	     * @description Authorize batch.
	     
	     * @param {string} legalEntityId 
	       
	     
	     * @param {string} batchId 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * batchesData
	     *  .postBatchesLegalentityAuthorizationsRecord(legalEntityId, batchId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postBatchesLegalentityAuthorizationsRecord(legalEntityId, batchId, data, headers) {
	      var url = '' + baseUri + version + '/batches/legalentity/' + legalEntityId + '/authorizations/' + batchId;
	
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
	     * @name BatchesData#postBatchesLegalentityRejectionsRecord
	     * @type {Function}
	     * @description Reject batch.
	     
	     * @param {string} legalEntityId 
	       
	     
	     * @param {string} batchId 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * batchesData
	     *  .postBatchesLegalentityRejectionsRecord(legalEntityId, batchId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postBatchesLegalentityRejectionsRecord(legalEntityId, batchId, data, headers) {
	      var url = '' + baseUri + version + '/batches/legalentity/' + legalEntityId + '/rejections/' + batchId;
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    var schemas = {};
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return {
	
	      getBatchesLegalentityRecord: getBatchesLegalentityRecord,
	
	      postBatchesLegalentityRecord: postBatchesLegalentityRecord,
	
	      getBatchesLegalentityAuthorizations: getBatchesLegalentityAuthorizations,
	
	      getBatchesLegalentityPayments: getBatchesLegalentityPayments,
	
	      postBatchesLegalentityAuthorizationsRecord: postBatchesLegalentityAuthorizationsRecord,
	
	      postBatchesLegalentityRejectionsRecord: postBatchesLegalentityRejectionsRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-batches-http-ng.js.map