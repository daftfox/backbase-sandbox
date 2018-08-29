(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-audit-http-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-audit-http-ng"] = factory(require("vendor-bb-angular"));
	else
		root["data-bb-audit-http-ng"] = factory(root["vendor-bb-angular"]);
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
	exports.auditDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbAuditHttp = __webpack_require__(3);
	
	var _dataBbAuditHttp2 = _interopRequireDefault(_dataBbAuditHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	/**
	 * @module data-bb-audit-http-ng
	 *
	 * @description A data module for accessing the Audit REST API.
	 *
	 * @returns {String} `data-bb-audit-http-ng`
	 * @example
	 * import auditDataModuleKey, {
	 *   auditDataKey,
	 * } from 'data-bb-audit-http-ng';
	 */
	
	var auditDataModuleKey = 'data-bb-audit-http-ng';
	/**
	 * @name auditDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the AuditData service
	 */
	var auditDataKey = exports.auditDataKey = 'data-bb-audit-http-ng:auditData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(auditDataModuleKey, [])
	
	/**
	 * @constructor AuditData
	 * @type {object}
	 *
	 * @description Public api for data-bb-audit-http-ng service
	 *
	 */
	.provider(auditDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name AuditDataProvider
	   * @type {object}
	   * @ngkey data-bb-audit-http-ng:auditDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-audit-http-ng:auditDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-audit-http-ng:auditDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name AuditDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name AuditDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http', '$httpParamSerializer',
	    /* into */
	    (0, _dataBbAuditHttp2.default)(config)]
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
	
	    definedTypes['AuditData.AuditLogGetResponseBody'] = { "properties": { "auditMessages": { "type": "array", "items": { "properties": { "eventCategory": { "type": "string", "minLength": 1, "maxLength": 35, "required": true }, "objectType": { "type": "string", "minLength": 1, "maxLength": 35, "required": true }, "eventAction": { "type": "string", "minLength": 1, "maxLength": 35, "required": true }, "username": { "type": "string", "minLength": 1, "maxLength": 64, "required": true }, "userId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "timestamp": { "type": "string", "format": "date-time", "required": true }, "eventDescription": { "type": "string", "minLength": 1, "maxLength": 255, "required": true }, "legalEntityId": { "type": "string", "minLength": 1, "maxLength": 36, "required": false }, "serviceAgreementId": { "type": "string", "minLength": 1, "maxLength": 36, "required": false }, "messageSetId": { "type": "string", "minLength": 36, "maxLength": 36, "required": false }, "eventData": { "type": "array", "items": { "properties": { "key": { "type": "string", "minLength": 1, "maxLength": 255, "required": true }, "value": { "type": "string", "maxLength": 255, "required": false } } }, "maxItems": 50, "required": false } } }, "required": false }, "totalCount": { "type": "number", "required": false } } };
	
	    definedTypes['AuditData.AuditMessagesPostRequestBody'] = { "properties": { "auditMessages": { "type": "array", "items": { "properties": { "eventCategory": { "type": "string", "minLength": 1, "maxLength": 35, "required": true }, "objectType": { "type": "string", "minLength": 1, "maxLength": 35, "required": true }, "eventAction": { "type": "string", "minLength": 1, "maxLength": 35, "required": true }, "username": { "type": "string", "minLength": 1, "maxLength": 64, "required": true }, "userId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "timestamp": { "type": "string", "format": "date-time", "required": true }, "eventDescription": { "type": "string", "minLength": 1, "maxLength": 255, "required": true }, "legalEntityId": { "type": "string", "minLength": 1, "maxLength": 36, "required": false }, "serviceAgreementId": { "type": "string", "minLength": 1, "maxLength": 36, "required": false }, "messageSetId": { "type": "string", "minLength": 36, "maxLength": 36, "required": false }, "eventData": { "type": "array", "items": { "properties": { "key": { "type": "string", "minLength": 1, "maxLength": 255, "required": true }, "value": { "type": "string", "maxLength": 255, "required": false } } }, "maxItems": 50, "required": false } } }, "minItems": 1, "maxItems": 50, "required": true } } };
	
	    definedTypes['AuditData.AuditMessagesPostResponseBody'] = { "properties": { "message": { "type": "string", "required": false }, "warnings": { "type": "array", "items": { "properties": { "message": { "type": "string", "required": false }, "key": { "type": "string", "required": false }, "context": { "type": "object", "properties": {}, "required": false } } }, "required": true } } };
	
	    /**
	     * @typedef AuditData.AuditLogGetResponseBody
	     * @type {Object}
	     * @property {?Array.<AuditMessage>} auditMessages
	     * @property {?Number} totalCount Total count of audit messages matching the query
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AuditData.AuditMessagesPostRequestBody
	     * @type {Object}
	     * @property {Array.<AuditMessage>} auditMessages
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AuditData.AuditMessagesPostResponseBody
	     * @type {Object}
	     * @property {?String} message Any further information
	     * @property {Array.<ErrorItem>} warnings Detailed field warnings/errors
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
	     * @name AuditData#postAuditMessagesRecord
	     * @type {Function}
	     * @description Create new audit log entry that contains one or more audit messages. Single string values that are longer than the
	    specified limits will be truncated.
	      
	     * @param {AuditData.AuditMessagesPostRequestBody} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AuditData.AuditMessagesPostResponseBody} on success 
	     *
	     * @example
	     * auditData
	     *  .postAuditMessagesRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAuditMessagesRecord(data, headers) {
	      var url = '' + baseUri + version + '/audit-messages';
	
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
	     * @name AuditData#getAuditLogMessages
	     * @type {Function}
	     * @description Get audit log messages in the system. Supports filtering and pagination of retrieved audit messages based on the provided filter and pagination parameters.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?string} params.startDate Restrict results to audit logs with a timestamp of, or after, 00:00 on this date, UTC. Eg: 2017-06-28.
	       
	     * @param {?string} params.endDate Restrict results to audit logs with a timestamp of, or before, 23:59 on this date, UTC. Eg: 2017-07-28.
	       
	     * @param {?string} params.eventCategories Restrict results to audit logs with an event category matching any of the supplied event categories, comma separated list. Eg: Authentication,Payments.
	       
	     * @param {?string} params.objectType Restrict results to audit logs with an event object type matching the supplied object type. Eg: Login.
	       
	     * @param {?string} params.eventAction Restrict results to audit logs with an event action matching the supplied value. Eg: Success.
	       
	     * @param {?string} params.usernames Restrict results to audit logs with a username matching any of the supplied usernames, comma separated list. Eg: User1,User2.
	       
	     * @param {?string} params.userId Restrict results to audit logs with a user ID matching the supplied value. Eg: f8501d76-a86b-442a-a4da-43119ce5ecd4.
	       
	     * @param {?string} params.legalEntityIds Restrict results to audit logs with a legalEntityId matching any of the supplied legalEntityIds, comma separated list. Eg: 04d6b7b6-bc28-4fbe-8aec-58f954348da2,87418545-59db-42e4-b671-e5cf8c341ed0.
	       
	     * @param {?string} params.serviceAgreementId Restrict results to audit logs with a service agreement ID matching the supplied value. Eg: 87418545-59db-42e4-b671-e5cf8c341ed0.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?number} params.size Limit the number of elements on the response. Eg: 80. (defaults to 25)
	       
	     * @param {?string} params.orderBy Order by field: "eventCategory", "objectType", "eventAction", "username", "userId", "timestamp", "eventDescription", "legalEntityId", "serviceAgreementId", "messageSetId", "eventData.value".
	       
	     * @param {?string} params.direction Direction. (defaults to DESC)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AuditData.AuditLogGetResponseBody} on success 
	     *
	     * @example
	     * auditData
	     *  .getAuditLogMessages(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAuditLogMessages(params, headers) {
	      var url = '' + baseUri + version + '/audit-log/messages';
	
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
	     * @name AuditData#getAuditLogEventCategories
	     * @type {Function}
	     * @description Gets the distinct event categories, object types, and event actions.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * auditData
	     *  .getAuditLogEventCategories(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAuditLogEventCategories(params, headers) {
	      var url = '' + baseUri + version + '/audit-log/event-categories';
	
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
	     * @name AuditData#schemas
	     * @type {Object}
	     */
	    var schemas = {};
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAuditMessagesRecord method
	     *
	     * @name AuditData#schemas.postAuditMessagesRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "auditMessages": {
	        "type": "array",
	        "items": {
	          "properties": {
	            "eventCategory": {
	              "type": "string",
	              "minLength": 1,
	              "maxLength": 35,
	              "required": true
	            },
	            "objectType": {
	              "type": "string",
	              "minLength": 1,
	              "maxLength": 35,
	              "required": true
	            },
	            "eventAction": {
	              "type": "string",
	              "minLength": 1,
	              "maxLength": 35,
	              "required": true
	            },
	            "username": {
	              "type": "string",
	              "minLength": 1,
	              "maxLength": 64,
	              "required": true
	            },
	            "userId": {
	              "type": "string",
	              "minLength": 1,
	              "maxLength": 36,
	              "required": true
	            },
	            "timestamp": {
	              "type": "string",
	              "format": "date-time",
	              "required": true
	            },
	            "eventDescription": {
	              "type": "string",
	              "minLength": 1,
	              "maxLength": 255,
	              "required": true
	            },
	            "legalEntityId": {
	              "type": "string",
	              "minLength": 1,
	              "maxLength": 36,
	              "required": false
	            },
	            "serviceAgreementId": {
	              "type": "string",
	              "minLength": 1,
	              "maxLength": 36,
	              "required": false
	            },
	            "messageSetId": {
	              "type": "string",
	              "minLength": 36,
	              "maxLength": 36,
	              "required": false
	            },
	            "eventData": {
	              "type": "array",
	              "items": {
	                "properties": {
	                  "key": {
	                    "type": "string",
	                    "minLength": 1,
	                    "maxLength": 255,
	                    "required": true
	                  },
	                  "value": {
	                    "type": "string",
	                    "maxLength": 255,
	                    "required": false
	                  }
	                }
	              },
	              "maxItems": 50,
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
	
	    schemas.postAuditMessagesRecord = definedTypes['AuditData.AuditMessagesPostRequestBody'];
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return {
	
	      postAuditMessagesRecord: postAuditMessagesRecord,
	
	      getAuditLogMessages: getAuditLogMessages,
	
	      getAuditLogEventCategories: getAuditLogEventCategories,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-audit-http-ng.js.map