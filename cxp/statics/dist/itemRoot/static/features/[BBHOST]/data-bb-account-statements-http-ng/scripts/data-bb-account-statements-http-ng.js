(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-account-statements-http-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-account-statements-http-ng"] = factory(require("vendor-bb-angular"));
	else
		root["data-bb-account-statements-http-ng"] = factory(root["vendor-bb-angular"]);
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
	exports.accountStatementsDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbAccountStatementsHttp = __webpack_require__(3);
	
	var _dataBbAccountStatementsHttp2 = _interopRequireDefault(_dataBbAccountStatementsHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	/**
	 * @module data-bb-account-statements-http-ng
	 *
	 * @description A data module for accessing the Account Statements REST API.
	 *
	 * @returns {String} `data-bb-account-statements-http-ng`
	 * @example
	 * import accountStatementsDataModuleKey, {
	 *   accountStatementsDataKey,
	 * } from 'data-bb-account-statements-http-ng';
	 */
	
	var accountStatementsDataModuleKey = 'data-bb-account-statements-http-ng';
	/**
	 * @name accountStatementsDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the AccountStatementsData service
	 */
	var accountStatementsDataKey = exports.accountStatementsDataKey = 'data-bb-account-statements-http-ng:accountStatementsData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(accountStatementsDataModuleKey, [])
	
	/**
	 * @constructor AccountStatementsData
	 * @type {object}
	 *
	 * @description Public api for data-bb-account-statements-http-ng service
	 *
	 */
	.provider(accountStatementsDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name AccountStatementsDataProvider
	   * @type {object}
	   * @ngkey data-bb-account-statements-http-ng:accountStatementsDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-account-statements-http-ng:accountStatementsDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-account-statements-http-ng:accountStatementsDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name AccountStatementsDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name AccountStatementsDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http', '$httpParamSerializer',
	    /* into */
	    (0, _dataBbAccountStatementsHttp2.default)(config)]
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
	
	    definedTypes['AccountStatementsData.InternalServerError'] = { "properties": { "message": { "type": "string", "required": true } } };
	
	    definedTypes['AccountStatementsData.BadRequest'] = { "properties": { "message": { "type": "string", "required": true } } };
	
	    definedTypes['AccountStatementsData.UnprocessableEntity'] = { "properties": { "message": { "type": "string", "required": true } } };
	
	    definedTypes['AccountStatementsData.NotFound'] = { "properties": { "message": { "type": "string", "required": true } } };
	
	    definedTypes['AccountStatementsData.Forbidden'] = { "properties": { "message": { "type": "string", "required": true } } };
	
	    definedTypes['AccountStatementsData.AccountStatementsResponse'] = { "type": "array", "items": { "properties": { "accountId": { "type": "string", "required": false }, "date": { "type": "string", "format": "date", "required": true }, "description": { "type": "string", "required": false }, "category": { "type": "string", "required": false }, "documents": { "type": "array", "items": { "properties": { "uid": { "type": "string", "required": false }, "url": { "type": "string", "required": false }, "contentType": { "type": "string", "required": false } } }, "required": true } } } };
	
	    definedTypes['AccountStatementsData.AccountStatementsCategoriesResponse'] = { "properties": { "categories": { "type": "array", "items": { "properties": {} }, "required": true } } };
	
	    /**
	     * @typedef AccountStatementsData.AccountStatement
	     * @type {Object}
	     * @property {?String} accountId Reference to the account to which the statement belongs
	     * @property {String} date The context agnostic statement date
	     * @property {?String} description The description of the statement
	     * @property {?String} category Category of the account statement
	     * @property {Array.<AccountStatementIdentification>} documents List of documents provided by the bank
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccountStatementsData.AccountStatementsCategoriesResponse
	     * @type {Object}
	     * @property {Array.<String>} categories
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccountStatementsData.AccountStatementsResponse
	     * @type {Array.<AccountStatementsData.AccountStatement>}
	     */
	
	    /**
	     * @typedef AccountStatementsData.BadRequest
	     * @type {Object}
	     * @property {String} message
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccountStatementsData.Forbidden
	     * @type {Object}
	     * @property {String} message
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccountStatementsData.InternalServerError
	     * @type {Object}
	     * @property {String} message
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccountStatementsData.NotFound
	     * @type {Object}
	     * @property {String} message
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccountStatementsData.UnprocessableEntity
	     * @type {Object}
	     * @property {String} message
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
	     * @name AccountStatementsData#getAccountStatements
	     * @type {Function}
	     * @description Get the list of 'available' statements
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?string} params.accountId accountId.
	       
	     * @param {?string} params.dateFrom Date from which the statements should be retrieved. Eg: 2017-02-03.
	       
	     * @param {?string} params.dateTo Date to which the statements should be retrieved. Eg: 2017-02-03.
	       
	     * @param {?string} params.category Categories to filter on. Eg: cat_1,cat_2.
	       
	     * @param {?number} params.from Skip over a page of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?string} params.cursor As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     * @param {?string} params.orderBy Order by field.
	       
	     * @param {?string} params.direction Direction. (defaults to DESC)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccountStatementsData.AccountStatementsResponse} on success 
	     *
	     * @example
	     * accountStatementsData
	     *  .getAccountStatements(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccountStatements(params, headers) {
	      var url = '' + baseUri + version + '/account/statements';
	
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
	     * @name AccountStatementsData#getAccountStatementsCategories
	     * @type {Function}
	     * @description Get the list of 'available' categories
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccountStatementsData.AccountStatementsCategoriesResponse} on success 
	     *
	     * @example
	     * accountStatementsData
	     *  .getAccountStatementsCategories(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccountStatementsCategories(params, headers) {
	      var url = '' + baseUri + version + '/account/statements/categories';
	
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
	     * @name AccountStatementsData#getAccountStatementsDownloadRecordUrl
	     * @type {Function}
	     * @description Download account statements
	     
	     * @param {string} uid 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @returns {string} Request URL
	     *
	     * @example
	     * const url = accountStatementsData.getAccountStatementsDownloadRecordUrl(uid, params)
	     * $http({ url })
	     *  .then(function(result){
	     *    console.log('result', result);
	     *  });
	     */
	    function getAccountStatementsDownloadRecordUrl(uid, params) {
	      return '' + baseUri + version + '/account/statements/download/' + uid + '?' + serializeParams(params);
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
	
	      getAccountStatements: getAccountStatements,
	
	      getAccountStatementsCategories: getAccountStatementsCategories,
	
	      getAccountStatementsDownloadRecordUrl: getAccountStatementsDownloadRecordUrl,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-account-statements-http-ng.js.map