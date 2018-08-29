(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-saving-goals-http-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-saving-goals-http-ng"] = factory(require("vendor-bb-angular"));
	else
		root["data-bb-saving-goals-http-ng"] = factory(root["vendor-bb-angular"]);
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
	exports.savingGoalsDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbSavingGoalsHttp = __webpack_require__(3);
	
	var _dataBbSavingGoalsHttp2 = _interopRequireDefault(_dataBbSavingGoalsHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	/**
	 * @module data-bb-saving-goals-http-ng
	 *
	 * @description A data module for accessing the Saving Goals REST API.
	 *
	 * @returns {String} `data-bb-saving-goals-http-ng`
	 * @example
	 * import savingGoalsDataModuleKey, {
	 *   savingGoalsDataKey,
	 * } from 'data-bb-saving-goals-http-ng';
	 */
	
	var savingGoalsDataModuleKey = 'data-bb-saving-goals-http-ng';
	/**
	 * @name savingGoalsDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the SavingGoalsData service
	 */
	var savingGoalsDataKey = exports.savingGoalsDataKey = 'data-bb-saving-goals-http-ng:savingGoalsData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(savingGoalsDataModuleKey, [])
	
	/**
	 * @constructor SavingGoalsData
	 * @type {object}
	 *
	 * @description Public api for data-bb-saving-goals-http-ng service
	 *
	 */
	.provider(savingGoalsDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name SavingGoalsDataProvider
	   * @type {object}
	   * @ngkey data-bb-saving-goals-http-ng:savingGoalsDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-saving-goals-http-ng:savingGoalsDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-saving-goals-http-ng:savingGoalsDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name SavingGoalsDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name SavingGoalsDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http', '$httpParamSerializer',
	    /* into */
	    (0, _dataBbSavingGoalsHttp2.default)(config)]
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
	
	    definedTypes['SavingGoalsData.Goal-GET'] = { "properties": { "id": { "type": "string", "required": true }, "goalName": { "type": "string", "required": true }, "goalAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true }, "arrangementId": { "type": "string", "required": false }, "progressPercentage": { "type": "number", "required": false }, "amountProgress": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "amountRemaining": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false } } };
	
	    definedTypes['SavingGoalsData.Goal-UPDATE'] = { "properties": { "goalName": { "type": "string", "maxLength": 50, "required": true }, "goalAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true } } };
	
	    definedTypes['SavingGoalsData.Goal-POST'] = { "properties": { "goalName": { "type": "string", "required": true }, "goalAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true }, "arrangementId": { "type": "string", "required": true } } };
	
	    definedTypes['SavingGoalsData.Goal-LIST'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true }, "goalName": { "type": "string", "required": true }, "goalAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true }, "arrangementId": { "type": "string", "required": false }, "progressPercentage": { "type": "number", "required": false }, "amountProgress": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "amountRemaining": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false } } } };
	
	    definedTypes['SavingGoalsData.Goal-NOT-FOUND'] = { "properties": { "message": { "type": "string", "required": true }, "errors": { "type": "array", "items": { "properties": { "message": { "type": "string", "required": false }, "key": { "type": "string", "required": false }, "context": { "type": "object", "properties": {}, "required": false } } }, "required": false } } };
	
	    definedTypes['SavingGoalsData.GoalId'] = { "properties": { "id": { "type": "string", "required": true } } };
	
	    /**
	     * @typedef SavingGoalsData.Currency
	     * @type {Object}
	     * @property {String} amount The amount in the specified currency
	     * @property {String} currencyCode The alpha-3 code (complying with ISO 4217) of the currency that qualifies the amount
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef SavingGoalsData.Goal-GET
	     * @type {Object}
	     * @property {String} id Saving goal unique Id
	     * @property {String} goalName This is the specific saving goal name chosen by the user
	     * @property {SavingGoalsData.Currency} goalAmount
	     * @property {?String} arrangementId Arrangement id linked to the saving goal
	     * @property {?Number} progressPercentage
	     * @property {?SavingGoalsData.Currency} amountProgress
	     * @property {?SavingGoalsData.Currency} amountRemaining
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef SavingGoalsData.Goal-LIST
	     * @type {Array.<SavingGoalsData.GoalGET>}
	     */
	
	    /**
	     * @typedef SavingGoalsData.Goal-NOT-FOUND
	     * @type {Object}
	     * @property {String} message Any further information
	     * @property {?Array.<ErrorItem>} errors Detailed error information
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef SavingGoalsData.Goal-POST
	     * @type {Object}
	     * @property {String} goalName This is the specific saving goal name chosen by the user
	     * @property {SavingGoalsData.Currency} goalAmount
	     * @property {String} arrangementId Arrangement id linked to the saving goal
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef SavingGoalsData.Goal-UPDATE
	     * @type {Object}
	     * @property {String} goalName This is the specific saving goal name chosen by the user
	     * @property {SavingGoalsData.Currency} goalAmount
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef SavingGoalsData.GoalGET
	     * @type {Object}
	     * @property {String} id Saving goal unique Id
	     * @property {String} goalName This is the specific saving goal name chosen by the user
	     * @property {SavingGoalsData.Currency} goalAmount
	     * @property {?String} arrangementId Arrangement id linked to the saving goal
	     * @property {?Number} progressPercentage
	     * @property {?SavingGoalsData.Currency} amountProgress
	     * @property {?SavingGoalsData.Currency} amountRemaining
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef SavingGoalsData.GoalId
	     * @type {Object}
	     * @property {String} id Internally used unique identification
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
	     * @name SavingGoalsData#postSavinggoalsRecord
	     * @type {Function}
	     * @description Create saving goals
	     
	     * @param {SavingGoalsData.Goal-POST} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link SavingGoalsData.GoalId} on success 
	     *
	     * @example
	     * savingGoalsData
	     *  .postSavinggoalsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postSavinggoalsRecord(data, headers) {
	      var url = '' + baseUri + version + '/savinggoals';
	
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
	     * @name SavingGoalsData#getSavinggoals
	     * @type {Function}
	     * @description Retrieve list of saving goals
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.arrangementId Reference to the arrangement to which the saving goals belong.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link SavingGoalsData.Goal-LIST} on success 
	     *
	     * @example
	     * savingGoalsData
	     *  .getSavinggoals(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getSavinggoals(params, headers) {
	      var url = '' + baseUri + version + '/savinggoals';
	
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
	     * @name SavingGoalsData#getSavinggoalsRecord
	     * @type {Function}
	     * @description Get Saving Goal by id
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link SavingGoalsData.Goal-GET} on success  or rejects with data of {@link SavingGoalsData.Goal-NOT-FOUND} on error
	     *
	     * @example
	     * savingGoalsData
	     *  .getSavinggoalsRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getSavinggoalsRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/savinggoals/' + id;
	
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
	     * @name SavingGoalsData#deleteSavinggoalsRecord
	     * @type {Function}
	     * @description Delete the saving goal by Id
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as void on success or rejects with data of {@link SavingGoalsData.Goal-NOT-FOUND} on error
	     *
	     * @example
	     * savingGoalsData
	     *  .deleteSavinggoalsRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deleteSavinggoalsRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/savinggoals/' + id;
	
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
	     * @name SavingGoalsData#putSavinggoalsRecord
	     * @type {Function}
	     * @description Update saving goal by an Id
	     
	     * @param {string} id 
	       
	     
	     * @param {SavingGoalsData.Goal-UPDATE} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as void on success or rejects with data of {@link SavingGoalsData.Goal-NOT-FOUND} on error
	     *
	     * @example
	     * savingGoalsData
	     *  .putSavinggoalsRecord(id, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putSavinggoalsRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/savinggoals/' + id;
	
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
	     * @name SavingGoalsData#schemas
	     * @type {Object}
	     */
	    var schemas = {};
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postSavinggoalsRecord method
	     *
	     * @name SavingGoalsData#schemas.postSavinggoalsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "goalName": {
	        "type": "string",
	        "required": true
	      },
	      "goalAmount": {
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
	      "arrangementId": {
	        "type": "string",
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postSavinggoalsRecord = definedTypes['SavingGoalsData.Goal-POST'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putSavinggoalsRecord method
	     *
	     * @name SavingGoalsData#schemas.putSavinggoalsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "goalName": {
	        "type": "string",
	        "maxLength": 50,
	        "required": true
	      },
	      "goalAmount": {
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
	      }
	    }
	    }
	     */
	
	    schemas.putSavinggoalsRecord = definedTypes['SavingGoalsData.Goal-UPDATE'];
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return {
	
	      postSavinggoalsRecord: postSavinggoalsRecord,
	
	      getSavinggoals: getSavinggoals,
	
	      getSavinggoalsRecord: getSavinggoalsRecord,
	
	      deleteSavinggoalsRecord: deleteSavinggoalsRecord,
	
	      putSavinggoalsRecord: putSavinggoalsRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-saving-goals-http-ng.js.map