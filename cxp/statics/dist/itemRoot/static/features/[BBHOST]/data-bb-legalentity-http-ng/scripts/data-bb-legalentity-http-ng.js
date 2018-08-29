(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-legalentity-http-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-legalentity-http-ng"] = factory(require("vendor-bb-angular"));
	else
		root["data-bb-legalentity-http-ng"] = factory(root["vendor-bb-angular"]);
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
	exports.legalEntityDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbLegalentityHttp = __webpack_require__(3);
	
	var _dataBbLegalentityHttp2 = _interopRequireDefault(_dataBbLegalentityHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	/**
	 * @module data-bb-legalentity-http-ng
	 *
	 * @description A data module for accessing the LegalEntity REST API.
	 *
	 * @returns {String} `data-bb-legalentity-http-ng`
	 * @example
	 * import legalEntityDataModuleKey, {
	 *   legalEntityDataKey,
	 * } from 'data-bb-legalentity-http-ng';
	 */
	
	var legalEntityDataModuleKey = 'data-bb-legalentity-http-ng';
	/**
	 * @name legalEntityDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the LegalEntityData service
	 */
	var legalEntityDataKey = exports.legalEntityDataKey = 'data-bb-legalentity-http-ng:legalEntityData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(legalEntityDataModuleKey, [])
	
	/**
	 * @constructor LegalEntityData
	 * @type {object}
	 *
	 * @description Public api for data-bb-legalentity-http-ng service
	 *
	 */
	.provider(legalEntityDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name LegalEntityDataProvider
	   * @type {object}
	   * @ngkey data-bb-legalentity-http-ng:legalEntityDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-legalentity-http-ng:legalEntityDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-legalentity-http-ng:legalEntityDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name LegalEntityDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name LegalEntityDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http', '$httpParamSerializer',
	    /* into */
	    (0, _dataBbLegalentityHttp2.default)(config)]
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
	
	    definedTypes['LegalEntityData.GetLegalEntities'] = { "type": "array", "items": { "properties": { "parentId": { "type": "string", "minLength": 1, "maxLength": 36, "required": false }, "isParent": { "type": "boolean", "default": false, "required": false } } } };
	
	    definedTypes['LegalEntityData.GetLegalEntitiesBase'] = { "type": "array", "items": { "properties": {} } };
	
	    definedTypes['LegalEntityData.LegalEntityItem'] = { "properties": { "parentId": { "type": "string", "minLength": 1, "maxLength": 36, "required": false }, "isParent": { "type": "boolean", "default": false, "required": false } } };
	
	    definedTypes['LegalEntityData.LegalEntityItemBase'] = { "properties": {} };
	
	    definedTypes['LegalEntityData.LegalEntityCreateItem'] = { "properties": { "externalId": { "type": "string", "minLength": 1, "maxLength": 64, "required": true }, "name": { "type": "string", "minLength": 1, "maxLength": 64, "pattern": "^\\S(.*(\\S))?$", "required": true }, "parentExternalId": { "type": "string", "minLength": 1, "maxLength": 64, "required": false }, "type": { "type": "string", "enum": ["CUSTOMER", "BANK"], "required": true } } };
	
	    definedTypes['LegalEntityData.LegalEntityItemId'] = { "properties": { "id": { "type": "string", "required": true } } };
	
	    definedTypes['LegalEntityData.GetServiceAgreement'] = { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "externalId": { "type": "string", "minLength": 1, "maxLength": 64, "required": false }, "name": { "type": "string", "minLength": 1, "maxLength": 128, "required": true }, "description": { "type": "string", "minLength": 1, "maxLength": 255, "required": true }, "creatorLegalEntity": { "type": "string", "minLength": 1, "maxLength": 36, "required": false }, "isMaster": { "type": "boolean", "default": false, "required": false }, "status": { "type": "string", "enum": ["ENABLED", "DISABLED"], "required": false } } };
	
	    definedTypes['LegalEntityData.LegalEntityIds'] = { "properties": { "ids": { "type": "array", "items": { "properties": {} }, "minItems": 1, "uniqueItems": true, "required": true } } };
	
	    definedTypes['LegalEntityData.LegalEntityUpdateItem'] = { "properties": { "type": { "type": "string", "enum": ["CUSTOMER", "BANK"], "required": true } } };
	
	    definedTypes['LegalEntityData.LegalEntitiesBatchPut'] = { "type": "array", "items": { "properties": { "legalEntity": { "type": "object", "properties": { "externalId": { "type": "string", "minLength": 1, "maxLength": 64, "required": true }, "name": { "type": "string", "minLength": 1, "maxLength": 64, "pattern": "^\\S(.*(\\S))?$", "required": true }, "parentExternalId": { "type": "string", "minLength": 1, "maxLength": 64, "required": false }, "type": { "type": "string", "enum": ["CUSTOMER", "BANK"], "required": true } }, "required": true }, "externalId": { "type": "string", "minLength": 1, "maxLength": 64, "required": true } } } };
	
	    /**
	     * @typedef LegalEntityData.GetLegalEntities
	     * @type {Array.<LegalEntityData.LegalEntityItem>}
	     */
	
	    /**
	     * @typedef LegalEntityData.GetLegalEntitiesBase
	     * @type {Array.<Object>}
	     */
	
	    /**
	     * @typedef LegalEntityData.GetServiceAgreement
	     * @type {Object}
	     * @property {String} id
	     * @property {?String} externalId External ID of Service Agreement
	     * @property {String} name
	     * @property {String} description
	     * @property {?String} creatorLegalEntity
	     * @property {?Boolean} isMaster
	     * @property {?String} status
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef LegalEntityData.LegalEntitiesBatchPut
	     * @type {Array.<LegalEntityData.LegalentityItemPut>}
	     */
	
	    /**
	     * @typedef LegalEntityData.LegalEntityCreateItem
	     * @type {Object}
	     * @property {String} externalId External Id of the legal entity
	     * @property {String} name Legal Entity name
	     * @property {?String} parentExternalId External Id of the parent Legal Entity
	     * @property {String} type
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef LegalEntityData.LegalEntityIds
	     * @type {Object}
	     * @property {Array.<String>} ids
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef LegalEntityData.LegalEntityItem
	     * @type {Object}
	     * @property {?String} parentId
	     * @property {?Boolean} isParent
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef LegalEntityData.LegalEntityItemBase
	     * @type {Object}
	     */
	
	    /**
	     * @typedef LegalEntityData.LegalEntityItemId
	     * @type {Object}
	     * @property {String} id Internally used unique identification
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef LegalEntityData.LegalEntityUpdateItem
	     * @type {Object}
	     * @property {String} type
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef LegalEntityData.LegalentityCreateItem
	     * @type {Object}
	     * @property {String} externalId External Id of the legal entity
	     * @property {String} name Legal Entity name
	     * @property {?String} parentExternalId External Id of the parent Legal Entity
	     * @property {String} type
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef LegalEntityData.LegalentityItemPut
	     * @type {Object}
	     * @property {LegalEntityData.LegalentityCreateItem} legalEntity
	     * @property {String} externalId
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
	     * @name LegalEntityData#getLegalentities
	     * @type {Function}
	     * @description Retrieve list of all legalentities.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?string} params.parentEntityId Id of the Legal Entity's parent. Eg: 12.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link LegalEntityData.GetLegalEntities} on success 
	     *
	     * @example
	     * legalEntityData
	     *  .getLegalentities(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getLegalentities(params, headers) {
	      var url = '' + baseUri + version + '/legalentities';
	
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
	     * @name LegalEntityData#postLegalentitiesRecord
	     * @type {Function}
	     * @description # Creates new legal entity.
	     
	     * @param {LegalEntityData.LegalEntityCreateItem} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link LegalEntityData.LegalEntityItemId} on success 
	     *
	     * @example
	     * legalEntityData
	     *  .postLegalentitiesRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postLegalentitiesRecord(data, headers) {
	      var url = '' + baseUri + version + '/legalentities';
	
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
	     * @name LegalEntityData#putLegalentitiesRecord
	     * @type {Function}
	     * @description # Legal Entity Batch Put
	    Update batch of legal entities.
	     
	     * @param {LegalEntityData.LegalEntitiesBatchPut} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * legalEntityData
	     *  .putLegalentitiesRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putLegalentitiesRecord(data, headers) {
	      var url = '' + baseUri + version + '/legalentities';
	
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
	     * @name LegalEntityData#getLegalentitiesRecord
	     * @type {Function}
	     * @description Retrieve a single Legal Entity.
	     
	     * @param {string} legalEntityId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link LegalEntityData.LegalEntityItem} on success 
	     *
	     * @example
	     * legalEntityData
	     *  .getLegalentitiesRecord(legalEntityId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getLegalentitiesRecord(legalEntityId, params, headers) {
	      var url = '' + baseUri + version + '/legalentities/' + legalEntityId;
	
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
	     * @name LegalEntityData#getLegalentitiesMe
	     * @type {Function}
	     * @description Retrieve the Legal Entity for the current User
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link LegalEntityData.LegalEntityItem} on success 
	     *
	     * @example
	     * legalEntityData
	     *  .getLegalentitiesMe(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getLegalentitiesMe(params, headers) {
	      var url = '' + baseUri + version + '/legalentities/me';
	
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
	     * @name LegalEntityData#getLegalentitiesSubEntities
	     * @type {Function}
	     * @description Retrieve a list of all children of the given Legal Entity.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     * @param {?string} params.query The search term used to search. Eg: backb.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link LegalEntityData.GetLegalEntitiesBase} on success 
	     *
	     * @example
	     * legalEntityData
	     *  .getLegalentitiesSubEntities(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getLegalentitiesSubEntities(params, headers) {
	      var url = '' + baseUri + version + '/legalentities/sub-entities';
	
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
	     * @name LegalEntityData#postLegalentitiesExternalRecord
	     * @type {Function}
	     * @description # Legal Entities list
	    Initial call to retrieve a Legal Entities from the backbase platform with the given Legal Entity external ids.
	     
	     * @param {LegalEntityData.LegalEntityIds} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link LegalEntityData.GetLegalEntitiesBase} on success 
	     *
	     * @example
	     * legalEntityData
	     *  .postLegalentitiesExternalRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postLegalentitiesExternalRecord(data, headers) {
	      var url = '' + baseUri + version + '/legalentities/external';
	
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
	     * @name LegalEntityData#postLegalentitiesBulkExternalIdsRecord
	     * @type {Function}
	     * @description # Legal Entities list
	    Initial call to retrieve a Legal Entities from the backbase platform with the given Legal Entity external ids.
	     
	     * @param {LegalEntityData.LegalEntityIds} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link LegalEntityData.GetLegalEntitiesBase} on success 
	     *
	     * @example
	     * legalEntityData
	     *  .postLegalentitiesBulkExternalIdsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postLegalentitiesBulkExternalIdsRecord(data, headers) {
	      var url = '' + baseUri + version + '/legalentities/bulk/externalIds';
	
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
	     * @name LegalEntityData#getLegalentitiesServiceagreementsMaster
	     * @type {Function}
	     * @description Retrieve the master service agreement for a Legal Entity.
	     
	     * @param {string} legalEntityId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link LegalEntityData.GetServiceAgreement} on success 
	     *
	     * @example
	     * legalEntityData
	     *  .getLegalentitiesServiceagreementsMaster(legalEntityId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getLegalentitiesServiceagreementsMaster(legalEntityId, params, headers) {
	      var url = '' + baseUri + version + '/legalentities/' + legalEntityId + '/serviceagreements/master';
	
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
	     * @name LegalEntityData#getLegalentitiesExternalRecord
	     * @type {Function}
	     * @description # Legal Entities list
	    Initial call to retrieve a Legal Entity from the backbase platform with the given Legal Entity external reference.
	     
	     * @param {string} externalId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link LegalEntityData.LegalEntityItemBase} on success 
	     *
	     * @example
	     * legalEntityData
	     *  .getLegalentitiesExternalRecord(externalId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getLegalentitiesExternalRecord(externalId, params, headers) {
	      var url = '' + baseUri + version + '/legalentities/external/' + externalId;
	
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
	     * @name LegalEntityData#putLegalentitiesExternalRecord
	     * @type {Function}
	     * @description # Update legal entity.
	    Updates the type of the Legal Entity by it's external ID.
	     
	     * @param {string} externalId 
	       
	     
	     * @param {LegalEntityData.LegalEntityUpdateItem} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * legalEntityData
	     *  .putLegalentitiesExternalRecord(externalId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putLegalentitiesExternalRecord(externalId, data, headers) {
	      var url = '' + baseUri + version + '/legalentities/external/' + externalId;
	
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
	     * @name LegalEntityData#getLegalentitiesExternalServiceagreementsMaster
	     * @type {Function}
	     * @description Retrieve the master service agreement for a external Legal Entity.
	     
	     * @param {string} externalId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link LegalEntityData.GetServiceAgreement} on success 
	     *
	     * @example
	     * legalEntityData
	     *  .getLegalentitiesExternalServiceagreementsMaster(externalId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getLegalentitiesExternalServiceagreementsMaster(externalId, params, headers) {
	      var url = '' + baseUri + version + '/legalentities/external/' + externalId + '/serviceagreements/master';
	
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
	     * @name LegalEntityData#schemas
	     * @type {Object}
	     */
	    var schemas = {};
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postLegalentitiesRecord method
	     *
	     * @name LegalEntityData#schemas.postLegalentitiesRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "externalId": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 64,
	        "required": true
	      },
	      "name": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 64,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "parentExternalId": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 64,
	        "required": false
	      },
	      "type": {
	        "type": "string",
	        "enum": [
	          "CUSTOMER",
	          "BANK"
	        ],
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postLegalentitiesRecord = definedTypes['LegalEntityData.LegalEntityCreateItem'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putLegalentitiesRecord method
	     *
	     * @name LegalEntityData#schemas.putLegalentitiesRecord
	     * @type {Object}
	     * @example
	     * {
	    "type": "array",
	    "items": {
	      "properties": {
	        "legalEntity": {
	          "type": "object",
	          "properties": {
	            "externalId": {
	              "type": "string",
	              "minLength": 1,
	              "maxLength": 64,
	              "required": true
	            },
	            "name": {
	              "type": "string",
	              "minLength": 1,
	              "maxLength": 64,
	              "pattern": "^\\S(.*(\\S))?$",
	              "required": true
	            },
	            "parentExternalId": {
	              "type": "string",
	              "minLength": 1,
	              "maxLength": 64,
	              "required": false
	            },
	            "type": {
	              "type": "string",
	              "enum": [
	                "CUSTOMER",
	                "BANK"
	              ],
	              "required": true
	            }
	          },
	          "required": true
	        },
	        "externalId": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 64,
	          "required": true
	        }
	      }
	    }
	    }
	     */
	
	    schemas.putLegalentitiesRecord = definedTypes['LegalEntityData.LegalEntitiesBatchPut'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postLegalentitiesExternalRecord method
	     *
	     * @name LegalEntityData#schemas.postLegalentitiesExternalRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "ids": {
	        "type": "array",
	        "items": {
	          "properties": {}
	        },
	        "minItems": 1,
	        "uniqueItems": true,
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postLegalentitiesExternalRecord = definedTypes['LegalEntityData.LegalEntityIds'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postLegalentitiesBulkExternalIdsRecord method
	     *
	     * @name LegalEntityData#schemas.postLegalentitiesBulkExternalIdsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "ids": {
	        "type": "array",
	        "items": {
	          "properties": {}
	        },
	        "minItems": 1,
	        "uniqueItems": true,
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postLegalentitiesBulkExternalIdsRecord = definedTypes['LegalEntityData.LegalEntityIds'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putLegalentitiesExternalRecord method
	     *
	     * @name LegalEntityData#schemas.putLegalentitiesExternalRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "type": {
	        "type": "string",
	        "enum": [
	          "CUSTOMER",
	          "BANK"
	        ],
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.putLegalentitiesExternalRecord = definedTypes['LegalEntityData.LegalEntityUpdateItem'];
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return {
	
	      getLegalentities: getLegalentities,
	
	      postLegalentitiesRecord: postLegalentitiesRecord,
	
	      putLegalentitiesRecord: putLegalentitiesRecord,
	
	      getLegalentitiesRecord: getLegalentitiesRecord,
	
	      getLegalentitiesMe: getLegalentitiesMe,
	
	      getLegalentitiesSubEntities: getLegalentitiesSubEntities,
	
	      postLegalentitiesExternalRecord: postLegalentitiesExternalRecord,
	
	      postLegalentitiesBulkExternalIdsRecord: postLegalentitiesBulkExternalIdsRecord,
	
	      getLegalentitiesServiceagreementsMaster: getLegalentitiesServiceagreementsMaster,
	
	      getLegalentitiesExternalRecord: getLegalentitiesExternalRecord,
	
	      putLegalentitiesExternalRecord: putLegalentitiesExternalRecord,
	
	      getLegalentitiesExternalServiceagreementsMaster: getLegalentitiesExternalServiceagreementsMaster,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-legalentity-http-ng.js.map