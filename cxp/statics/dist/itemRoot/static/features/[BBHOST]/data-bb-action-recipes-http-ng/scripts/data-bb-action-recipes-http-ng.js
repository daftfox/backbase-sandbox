(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-challenge-ng"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-action-recipes-http-ng", ["vendor-bb-angular", "lib-bb-challenge-ng"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-action-recipes-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-challenge-ng"));
	else
		root["data-bb-action-recipes-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-challenge-ng"]);
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
	exports.actionRecipesDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbChallengeNg = __webpack_require__(3);
	
	var _libBbChallengeNg2 = _interopRequireDefault(_libBbChallengeNg);
	
	var _dataBbActionRecipesHttp = __webpack_require__(4);
	
	var _dataBbActionRecipesHttp2 = _interopRequireDefault(_dataBbActionRecipesHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var actionRecipesDataModuleKey = 'data-bb-action-recipes-http-ng';
	/**
	 * @name actionRecipesDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the ActionRecipesData service
	 */
	/* eslint-disable */
	/**
	 * @module data-bb-action-recipes-http-ng
	 *
	 * @description A data module for accessing the Action Recipes REST API.
	 *
	 * @returns {String} `data-bb-action-recipes-http-ng`
	 * @example
	 * import actionRecipesDataModuleKey, {
	 *   actionRecipesDataKey,
	 * } from 'data-bb-action-recipes-http-ng';
	 */
	
	var actionRecipesDataKey = exports.actionRecipesDataKey = 'data-bb-action-recipes-http-ng:actionRecipesData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(actionRecipesDataModuleKey, [_libBbChallengeNg2.default]).config(['$httpProvider', function ($httpProvider) {
	  $httpProvider.interceptors.push(_libBbChallengeNg.bbChallengeKey);
	}])
	
	/**
	 * @constructor ActionRecipesData
	 * @type {object}
	 *
	 * @description Public api for data-bb-action-recipes-http-ng service
	 *
	 */
	.provider(actionRecipesDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name ActionRecipesDataProvider
	   * @type {object}
	   * @ngkey data-bb-action-recipes-http-ng:actionRecipesDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-action-recipes-http-ng:actionRecipesDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-action-recipes-http-ng:actionRecipesDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name ActionRecipesDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name ActionRecipesDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http', '$httpParamSerializer',
	    /* into */
	    (0, _dataBbActionRecipesHttp2.default)(config)]
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
	     * @name ActionRecipesData#getActionRecipeSpecifications
	     * @type {Function}
	     * @description get request
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * actionRecipesData
	     *  .getActionRecipeSpecifications(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getActionRecipeSpecifications(params, headers) {
	      var url = '' + baseUri + version + '/action-recipe-specifications';
	
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
	     * @name ActionRecipesData#getActionRecipes
	     * @type {Function}
	     * @description Returns a list of action recipes
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?string} params.specificationId specificationId.
	       
	     * @param {?string} params.active active.
	       
	     * @param {?number} params.offset Represents an offset for fetching results. Eg: 3. (defaults to 0)
	       
	     * @param {?number} params.limit Represents a maximum number of elements that need to be returned. Eg: 20. (defaults to 10)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * actionRecipesData
	     *  .getActionRecipes(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getActionRecipes(params, headers) {
	      var url = '' + baseUri + version + '/action-recipes';
	
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
	     * @name ActionRecipesData#postActionRecipesRecord
	     * @type {Function}
	     * @description Creates a new action recipe
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * actionRecipesData
	     *  .postActionRecipesRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postActionRecipesRecord(data, headers) {
	      var url = '' + baseUri + version + '/action-recipes';
	
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
	     * @name ActionRecipesData#getActionRecipesRecord
	     * @type {Function}
	     * @description Retrieves a specified action recipe
	     
	     * @param {string} recipeId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * actionRecipesData
	     *  .getActionRecipesRecord(recipeId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getActionRecipesRecord(recipeId, params, headers) {
	      var url = '' + baseUri + version + '/action-recipes/' + recipeId;
	
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
	     * @name ActionRecipesData#putActionRecipesRecord
	     * @type {Function}
	     * @description Updates a specified action recipe
	     
	     * @param {string} recipeId 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * actionRecipesData
	     *  .putActionRecipesRecord(recipeId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putActionRecipesRecord(recipeId, data, headers) {
	      var url = '' + baseUri + version + '/action-recipes/' + recipeId;
	
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
	     * @name ActionRecipesData#deleteActionRecipesRecord
	     * @type {Function}
	     * @description Removes a specified action recipe
	     
	     * @param {string} recipeId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * actionRecipesData
	     *  .deleteActionRecipesRecord(recipeId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deleteActionRecipesRecord(recipeId, params, headers) {
	      var url = '' + baseUri + version + '/action-recipes/' + recipeId;
	
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
	     * @name ActionRecipesData#getActionRecipesHistory
	     * @type {Function}
	     * @description Retrieves all actions history for logged in user
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?number} params.offset Represents an offset for fetching results. Eg: 3. (defaults to 0)
	       
	     * @param {?number} params.limit Represents a maximum number of elements that need to be returned. Eg: 20. (defaults to 10)
	       
	     
	     * @param {Object} headers Map of custom header attributes.
	       
	     * @param {number} headers.X-Total-Count Contains total number of all action event history items.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * actionRecipesData
	     *  .getActionRecipesHistory(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getActionRecipesHistory(params, headers) {
	      var url = '' + baseUri + version + '/action-recipes/history';
	
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
	     * @name ActionRecipesData#postActionRecipesActivationRequestRecord
	     * @type {Function}
	     * @description post request
	     
	     * @param {string} recipeId 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * actionRecipesData
	     *  .postActionRecipesActivationRequestRecord(recipeId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postActionRecipesActivationRequestRecord(recipeId, data, headers) {
	      var url = '' + baseUri + version + '/action-recipes/' + recipeId + '/activation-request';
	
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
	     * @name ActionRecipesData#postActionRecipesDeactivationRequestRecord
	     * @type {Function}
	     * @description post request
	     
	     * @param {string} recipeId 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * actionRecipesData
	     *  .postActionRecipesDeactivationRequestRecord(recipeId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postActionRecipesDeactivationRequestRecord(recipeId, data, headers) {
	      var url = '' + baseUri + version + '/action-recipes/' + recipeId + '/deactivation-request';
	
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
	     * @name ActionRecipesData#getActionRecipesHistoryRecord
	     * @type {Function}
	     * @description Retrieves all actions history for CSR users by user id
	     
	     * @param {string} userId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?number} params.offset Represents an offset for fetching results. Eg: 3. (defaults to 0)
	       
	     * @param {?number} params.limit Represents a maximum number of elements that need to be returned. Eg: 20. (defaults to 10)
	       
	     
	     * @param {Object} headers Map of custom header attributes.
	       
	     * @param {number} headers.X-Total-Count Contains total number of all action event history items.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * actionRecipesData
	     *  .getActionRecipesHistoryRecord(userId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getActionRecipesHistoryRecord(userId, params, headers) {
	      var url = '' + baseUri + version + '/action-recipes/history/' + userId;
	
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
	     * @name ActionRecipesData#schemas
	     * @type {Object}
	     */
	    var schemas = {};
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postActionRecipesRecord method
	     *
	     * @name ActionRecipesData#schemas.postActionRecipesRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {}
	    }
	     */
	
	    schemas.postActionRecipesRecord = { "properties": {} };
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putActionRecipesRecord method
	     *
	     * @name ActionRecipesData#schemas.putActionRecipesRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "actions": {
	        "type": "array",
	        "items": {
	          "properties": {
	            "type": {
	              "type": "string",
	              "enum": [
	                "notification",
	                "email",
	                "sms"
	              ],
	              "required": true
	            },
	            "destination": {
	              "type": "object",
	              "properties": {},
	              "required": false
	            }
	          }
	        },
	        "minItems": 1,
	        "maxItems": 3,
	        "required": true
	      },
	      "amount": {
	        "type": "string",
	        "maximum": 1000000000000000000,
	        "required": false
	      },
	      "arrangementId": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 64,
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.putActionRecipesRecord = { "properties": { "actions": { "type": "array", "items": { "properties": { "type": { "type": "string", "enum": ["notification", "email", "sms"], "required": true }, "destination": { "type": "object", "properties": {}, "required": false } } }, "minItems": 1, "maxItems": 3, "required": true }, "amount": { "type": "string", "maximum": 1000000000000000000, "required": false }, "arrangementId": { "type": "string", "minLength": 1, "maxLength": 64, "required": false } } };
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return {
	
	      getActionRecipeSpecifications: getActionRecipeSpecifications,
	
	      getActionRecipes: getActionRecipes,
	
	      postActionRecipesRecord: postActionRecipesRecord,
	
	      getActionRecipesRecord: getActionRecipesRecord,
	
	      putActionRecipesRecord: putActionRecipesRecord,
	
	      deleteActionRecipesRecord: deleteActionRecipesRecord,
	
	      getActionRecipesHistory: getActionRecipesHistory,
	
	      postActionRecipesActivationRequestRecord: postActionRecipesActivationRequestRecord,
	
	      postActionRecipesDeactivationRequestRecord: postActionRecipesDeactivationRequestRecord,
	
	      getActionRecipesHistoryRecord: getActionRecipesHistoryRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-action-recipes-http-ng.js.map