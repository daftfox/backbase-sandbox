(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else if(typeof define === 'function' && define.amd)
		define("mock.data-bb-legalentity-http-ng", ["vendor-bb-angular", "lib-bb-storage-ng"], factory);
	else if(typeof exports === 'object')
		exports["mock.data-bb-legalentity-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else
		root["mock.data-bb-legalentity-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage-ng"]);
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
	exports.legalEntityDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStorageNg = __webpack_require__(3);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _dataBbLegalentityHttp = __webpack_require__(4);
	
	var _dataBbLegalentityHttp2 = _interopRequireDefault(_dataBbLegalentityHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var legalEntityDataModuleKey = 'data-bb-legalentity-http-ng'; /* eslint-disable */
	var legalEntityDataKey = exports.legalEntityDataKey = 'data-bb-legalentity-http-ng:legalEntityData';
	
	exports.default = _vendorBbAngular2.default.module(legalEntityDataModuleKey, [_libBbStorageNg2.default]).provider(legalEntityDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  return {
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	    $get: ['$q', _libBbStorageNg.bbStorageServiceKey, '$httpParamSerializer',
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

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/* eslint-disable */
	exports.default = function (conf) {
	  return function (Promise, bbStorage, serializeParams) {
	    var _plugins;
	
	    // Base param constants
	    var baseUri = conf.baseUri || '';
	
	    var version = 'v2';
	
	    var schemas = {};
	
	    var STORAGE_KEY = 'MOCK_STATE_legalEntityDataModuleKey';
	    var state = {
	      "{version}/legalentities": [{
	        "id": "c7a382786d514262b75ab9531b749a2b",
	        "externalId": "Bank",
	        "name": "Bank",
	        "type": "BANK",
	        "isParent": true
	      }, {
	        "id": "dbc9e566d44f4cd9a1f09ad3f6729f15",
	        "externalId": "KPMG",
	        "name": "KPMG",
	        "parentId": "c7a382786d514262b75ab9531b749a2b",
	        "type": "CUSTOMER",
	        "isParent": false
	      }, {
	        "id": "77f8c4cd11c8436ba77f8ca34e6a173d",
	        "externalId": "Backbase",
	        "name": "Backbase",
	        "parentId": "c7a382786d514262b75ab9531b749a2b",
	        "type": "CUSTOMER",
	        "isParent": true
	      }, {
	        "id": "c9fc30f4e5fb492c97ed0a05f926aecc",
	        "externalId": "Backbase Amsterdam",
	        "name": "Backbase Amsterdam",
	        "parentId": "77f8c4cd11c8436ba77f8ca34e6a173d",
	        "type": "CUSTOMER",
	        "isParent": false
	      }, {
	        "id": "0f6d14f40e064deeaee351befd53d3e7",
	        "externalId": "Backbase Cardiff",
	        "name": "Backbase Cardiff",
	        "parentId": "77f8c4cd11c8436ba77f8ca34e6a173d",
	        "type": "CUSTOMER",
	        "isParent": false
	      }],
	      "{version}/legalentities/sub-entities": [{
	        "id": "c7a382786d514262b75ab9531b749a2b",
	        "externalId": "Bank",
	        "name": "Bank",
	        "type": "BANK",
	        "isParent": true
	      }, {
	        "id": "dbc9e566d44f4cd9a1f09ad3f6729f15",
	        "externalId": "KPMG",
	        "name": "KPMG",
	        "parentId": "c7a382786d514262b75ab9531b749a2b",
	        "type": "CUSTOMER",
	        "isParent": false
	      }, {
	        "id": "77f8c4cd11c8436ba77f8ca34e6a173d",
	        "externalId": "Backbase",
	        "name": "Backbase",
	        "parentId": "c7a382786d514262b75ab9531b749a2b",
	        "type": "CUSTOMER",
	        "isParent": true
	      }, {
	        "id": "c9fc30f4e5fb492c97ed0a05f926aecc",
	        "externalId": "Backbase Amsterdam",
	        "name": "Backbase Amsterdam",
	        "parentId": "77f8c4cd11c8436ba77f8ca34e6a173d",
	        "type": "CUSTOMER",
	        "isParent": false
	      }, {
	        "id": "0f6d14f40e064deeaee351befd53d3e7",
	        "externalId": "Backbase Cardiff",
	        "name": "Backbase Cardiff",
	        "parentId": "77f8c4cd11c8436ba77f8ca34e6a173d",
	        "type": "CUSTOMER",
	        "isParent": false
	      }]
	    };
	
	    bbStorage.subscribe(STORAGE_KEY, function (newState) {
	      state = newState;
	    });
	
	    var persistState = function persistState(newState) {
	      bbStorage.setItem(STORAGE_KEY, newState);
	    };
	
	    var responses = {
	
	      getLegalentities: [{ "status": 200, "data": [{ "id": "c7a382786d514262b75ab9531b749a2b", "externalId": "Bank", "name": "Bank", "type": "BANK", "isParent": true }, { "id": "dbc9e566d44f4cd9a1f09ad3f6729f15", "externalId": "KPMG", "name": "KPMG", "parentId": "c7a382786d514262b75ab9531b749a2b", "type": "CUSTOMER", "isParent": false }, { "id": "77f8c4cd11c8436ba77f8ca34e6a173d", "externalId": "Backbase", "name": "Backbase", "parentId": "c7a382786d514262b75ab9531b749a2b", "type": "CUSTOMER", "isParent": true }, { "id": "c9fc30f4e5fb492c97ed0a05f926aecc", "externalId": "Backbase Amsterdam", "name": "Backbase Amsterdam", "parentId": "77f8c4cd11c8436ba77f8ca34e6a173d", "type": "CUSTOMER", "isParent": false }, { "id": "0f6d14f40e064deeaee351befd53d3e7", "externalId": "Backbase Cardiff", "name": "Backbase Cardiff", "parentId": "77f8c4cd11c8436ba77f8ca34e6a173d", "type": "CUSTOMER", "isParent": false }] }, { "status": 400, "data": { "status": 400, "message": "Bad Request", "errorCode": "message.ErrorCode", "errors": [{ "path": "key1.key2", "code": "value", "message": "A Message" }] } }, { "status": 403, "data": { "status": 403, "message": "Description of error", "errorCode": "error.code" } }, { "status": 500, "data": { "status": 500, "message": "Description of error" } }],
	
	      postLegalentitiesRecord: [{ "status": 201, "data": { "id": "0955e686-d31e-4216-b3dd-5d66161d536d" } }, { "status": 400, "data": { "status": 400, "message": "Bad Request", "errorCode": "message.ErrorCode", "errors": [{ "path": "key1.key2", "code": "value", "message": "A Message" }] } }, { "status": 403, "data": { "status": 403, "message": "Description of error", "errorCode": "error.code" } }, { "status": 500, "data": { "status": 500, "message": "Description of error" } }],
	
	      putLegalentitiesRecord: [{ "status": 207, "data": [{ "status": "200", "resourceId": "SA-001" }, { "status": "400", "resourceId": "SA-002", "errors": ["Invalid property 'id'", "Property 'name' cannot be null"] }] }, { "status": 400, "data": { "status": 400, "message": "Bad Request", "errorCode": "message.ErrorCode", "errors": [{ "path": "key1.key2", "code": "value", "message": "A Message" }] } }, { "status": 500, "data": { "status": 500, "message": "Description of error" } }],
	
	      getLegalentitiesRecord: [{ "status": 200, "data": { "id": "1", "externalId": "ext1", "name": "Endava", "parentId": "321321", "type": "CUSTOMER", "isParent": false } }, { "status": 400, "data": { "status": 400, "message": "Bad Request", "errorCode": "message.ErrorCode", "errors": [{ "path": "key1.key2", "code": "value", "message": "A Message" }] } }, { "status": 403, "data": { "status": 403, "message": "Description of error", "errorCode": "error.code" } }, { "status": 404, "data": null }, { "status": 500, "data": { "status": 500, "message": "Description of error" } }],
	
	      getLegalentitiesMe: [{ "status": 200, "data": { "id": "1", "externalId": "ext1", "name": "Endava", "parentId": "321321", "type": "CUSTOMER", "isParent": false } }, { "status": 500, "data": { "status": 500, "message": "Description of error" } }],
	
	      getLegalentitiesSubEntities: [{ "status": 200, "data": [{ "id": "c7a382786d514262b75ab9531b749a2b", "externalId": "Bank", "name": "Bank", "type": "BANK", "isParent": true }, { "id": "dbc9e566d44f4cd9a1f09ad3f6729f15", "externalId": "KPMG", "name": "KPMG", "parentId": "c7a382786d514262b75ab9531b749a2b", "type": "CUSTOMER", "isParent": false }, { "id": "77f8c4cd11c8436ba77f8ca34e6a173d", "externalId": "Backbase", "name": "Backbase", "parentId": "c7a382786d514262b75ab9531b749a2b", "type": "CUSTOMER", "isParent": true }, { "id": "c9fc30f4e5fb492c97ed0a05f926aecc", "externalId": "Backbase Amsterdam", "name": "Backbase Amsterdam", "parentId": "77f8c4cd11c8436ba77f8ca34e6a173d", "type": "CUSTOMER", "isParent": false }, { "id": "0f6d14f40e064deeaee351befd53d3e7", "externalId": "Backbase Cardiff", "name": "Backbase Cardiff", "parentId": "77f8c4cd11c8436ba77f8ca34e6a173d", "type": "CUSTOMER", "isParent": false }] }, { "status": 400, "data": { "status": 400, "message": "Bad Request", "errorCode": "message.ErrorCode", "errors": [{ "path": "key1.key2", "code": "value", "message": "A Message" }] } }, { "status": 403, "data": { "status": 403, "message": "Description of error", "errorCode": "error.code" } }, { "status": 500, "data": { "status": 500, "message": "Description of error" } }],
	
	      postLegalentitiesExternalRecord: [{ "status": 200, "data": [{ "id": "c7a382786d514262b75ab9531b749a2b", "externalId": "Bank", "name": "Bank", "type": "BANK", "isParent": true }, { "id": "dbc9e566d44f4cd9a1f09ad3f6729f15", "externalId": "KPMG", "name": "KPMG", "parentId": "c7a382786d514262b75ab9531b749a2b", "type": "CUSTOMER", "isParent": false }, { "id": "77f8c4cd11c8436ba77f8ca34e6a173d", "externalId": "Backbase", "name": "Backbase", "parentId": "c7a382786d514262b75ab9531b749a2b", "type": "CUSTOMER", "isParent": true }, { "id": "c9fc30f4e5fb492c97ed0a05f926aecc", "externalId": "Backbase Amsterdam", "name": "Backbase Amsterdam", "parentId": "77f8c4cd11c8436ba77f8ca34e6a173d", "type": "CUSTOMER", "isParent": false }, { "id": "0f6d14f40e064deeaee351befd53d3e7", "externalId": "Backbase Cardiff", "name": "Backbase Cardiff", "parentId": "77f8c4cd11c8436ba77f8ca34e6a173d", "type": "CUSTOMER", "isParent": false }] }, { "status": 400, "data": { "status": 400, "message": "Bad Request", "errorCode": "message.ErrorCode", "errors": [{ "path": "key1.key2", "code": "value", "message": "A Message" }] } }, { "status": 403, "data": { "status": 403, "message": "Description of error", "errorCode": "error.code" } }, { "status": 500, "data": { "status": 500, "message": "Description of error" } }],
	
	      postLegalentitiesBulkExternalIdsRecord: [{ "status": 200, "data": [{ "id": "c7a382786d514262b75ab9531b749a2b", "externalId": "Bank", "name": "Bank", "type": "BANK", "isParent": true }, { "id": "dbc9e566d44f4cd9a1f09ad3f6729f15", "externalId": "KPMG", "name": "KPMG", "parentId": "c7a382786d514262b75ab9531b749a2b", "type": "CUSTOMER", "isParent": false }, { "id": "77f8c4cd11c8436ba77f8ca34e6a173d", "externalId": "Backbase", "name": "Backbase", "parentId": "c7a382786d514262b75ab9531b749a2b", "type": "CUSTOMER", "isParent": true }, { "id": "c9fc30f4e5fb492c97ed0a05f926aecc", "externalId": "Backbase Amsterdam", "name": "Backbase Amsterdam", "parentId": "77f8c4cd11c8436ba77f8ca34e6a173d", "type": "CUSTOMER", "isParent": false }, { "id": "0f6d14f40e064deeaee351befd53d3e7", "externalId": "Backbase Cardiff", "name": "Backbase Cardiff", "parentId": "77f8c4cd11c8436ba77f8ca34e6a173d", "type": "CUSTOMER", "isParent": false }] }],
	
	      getLegalentitiesServiceagreementsMaster: [{ "status": 200, "data": { "id": "0001", "name": "Broker deal 1", "description": "Agreement between Backbase and Apple", "creatorLegalEntity": "001", "isMaster": true, "status": "ENABLED" } }, { "status": 400, "data": { "status": 400, "message": "Bad Request", "errorCode": "message.ErrorCode", "errors": [{ "path": "key1.key2", "code": "value", "message": "A Message" }] } }, { "status": 403, "data": { "status": 403, "message": "Description of error", "errorCode": "error.code" } }, { "status": 404, "data": null }, { "status": 500, "data": { "status": 500, "message": "Description of error" } }],
	
	      getLegalentitiesExternalRecord: [{ "status": 200, "data": { "id": "1", "externalId": "ext1", "type": "CUSTOMER", "name": "Endava" } }, { "status": 400, "data": { "status": 400, "message": "Bad Request", "errorCode": "message.ErrorCode", "errors": [{ "path": "key1.key2", "code": "value", "message": "A Message" }] } }, { "status": 403, "data": { "status": 403, "message": "Description of error", "errorCode": "error.code" } }, { "status": 404, "data": null }, { "status": 500, "data": { "status": 500, "message": "Description of error" } }],
	
	      putLegalentitiesExternalRecord: [{ "status": 200, "data": null }, { "status": 400, "data": { "status": 400, "message": "Bad Request", "errorCode": "message.ErrorCode", "errors": [{ "path": "key1.key2", "code": "value", "message": "A Message" }] } }, { "status": 404, "data": null }, { "status": 500, "data": { "status": 500, "message": "Description of error" } }],
	
	      getLegalentitiesExternalServiceagreementsMaster: [{ "status": 200, "data": { "id": "0001", "name": "Broker deal 1", "description": "Agreement between Backbase and Apple", "creatorLegalEntity": "001", "isMaster": true, "status": "ENABLED" } }, { "status": 400, "data": { "status": 400, "message": "Bad Request", "errorCode": "message.ErrorCode", "errors": [{ "path": "key1.key2", "code": "value", "message": "A Message" }] } }, { "status": 403, "data": { "status": 403, "message": "Description of error", "errorCode": "error.code" } }, { "status": 404, "data": null }, { "status": 500, "data": { "status": 500, "message": "Description of error" } }]
	
	    };
	
	    var DEFAULT_MOCK = {
	      data: {},
	      status: 200,
	      headers: function headers(header) {
	        return header === 'content-type' && this.data ? 'application/json' : null;
	      },
	      config: {},
	      statusText: 'OK'
	    };
	
	    var getResponse = function getResponse(method, status) {
	      var response = (responses[method] || []).find(function (response) {
	        return response.status === status;
	      });
	      return Object.assign({}, DEFAULT_MOCK, response);
	    };
	
	    var PLUGINS_ALL = '__all__';
	
	    var plugins = (_plugins = {}, _defineProperty(_plugins, PLUGINS_ALL, []), _defineProperty(_plugins, 'getLegalentities', []), _defineProperty(_plugins, 'postLegalentitiesRecord', []), _defineProperty(_plugins, 'putLegalentitiesRecord', []), _defineProperty(_plugins, 'getLegalentitiesRecord', []), _defineProperty(_plugins, 'getLegalentitiesMe', []), _defineProperty(_plugins, 'getLegalentitiesSubEntities', []), _defineProperty(_plugins, 'postLegalentitiesExternalRecord', []), _defineProperty(_plugins, 'postLegalentitiesBulkExternalIdsRecord', []), _defineProperty(_plugins, 'getLegalentitiesServiceagreementsMaster', []), _defineProperty(_plugins, 'getLegalentitiesExternalRecord', []), _defineProperty(_plugins, 'putLegalentitiesExternalRecord', []), _defineProperty(_plugins, 'getLegalentitiesExternalServiceagreementsMaster', []), _plugins);
	
	    if (!plugins['getLegalentities']) {
	      console.warn('%cThere is no "getLegalentities" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getLegalentities'].push(function (result, args) {
	        var queryParams = args[args.length - 2] || {};
	        var parentEntityId = queryParams.parentEntityId;
	
	        result.data = result.data.filter(function (legalEntity) {
	          return legalEntity.parentId === parentEntityId;
	        });
	
	        return result;
	      });
	    }
	
	    var pluginMocks = function pluginMocks(method, args, uri) {
	      var methodPlugins = plugins[method] || [];
	      var commonPlugins = plugins[PLUGINS_ALL] || [];
	      var allPlugins = methodPlugins.concat(commonPlugins);
	
	      return function (initialResult) {
	        return allPlugins.reduce(function (result, plugin) {
	          return result.then(function (nextResult) {
	            return plugin(nextResult, args, uri, method);
	          });
	        }, Promise.resolve(initialResult));
	      };
	    };
	
	    var handleError = function handleError(method) {
	      return function (error) {
	        // If error object is one of the error responses, assume it returned intentionally from one of the plugins
	        var isIntendedError = error && error.status && error.status >= 400;
	        var response = isIntendedError ? error : getResponse(method, 500);
	
	        console.log(method + ' request rejected because of ', error);
	        return Promise.reject(response);
	      };
	    };
	
	    function getLegalentities(params, headers) {
	      var url = '' + baseUri + version + '/legalentities';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getLegalentities', 200)).then(pluginMocks('getLegalentities', [params, headers], '{version}/legalentities')).catch(handleError('getLegalentities'));
	    }
	
	    function postLegalentitiesRecord(data, headers) {
	      var url = '' + baseUri + version + '/legalentities';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postLegalentitiesRecord', 201)).then(pluginMocks('postLegalentitiesRecord', [data, headers], '{version}/legalentities')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postLegalentitiesRecord'));
	    }
	
	    function putLegalentitiesRecord(data, headers) {
	      var url = '' + baseUri + version + '/legalentities';
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putLegalentitiesRecord', 207)).then(pluginMocks('putLegalentitiesRecord', [data, headers], '{version}/legalentities')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putLegalentitiesRecord'));
	    }
	
	    function getLegalentitiesRecord(legalEntityId, params, headers) {
	      var url = '' + baseUri + version + '/legalentities/' + legalEntityId;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getLegalentitiesRecord', 200)).then(pluginMocks('getLegalentitiesRecord', [legalEntityId, params, headers], '{version}/legalentities/{legalEntityId}')).catch(handleError('getLegalentitiesRecord'));
	    }
	
	    function getLegalentitiesMe(params, headers) {
	      var url = '' + baseUri + version + '/legalentities/me';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getLegalentitiesMe', 200)).then(pluginMocks('getLegalentitiesMe', [params, headers], '{version}/legalentities/me')).catch(handleError('getLegalentitiesMe'));
	    }
	
	    function getLegalentitiesSubEntities(params, headers) {
	      var url = '' + baseUri + version + '/legalentities/sub-entities';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getLegalentitiesSubEntities', 200)).then(pluginMocks('getLegalentitiesSubEntities', [params, headers], '{version}/legalentities/sub-entities')).catch(handleError('getLegalentitiesSubEntities'));
	    }
	
	    function postLegalentitiesExternalRecord(data, headers) {
	      var url = '' + baseUri + version + '/legalentities/external';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postLegalentitiesExternalRecord', 200)).then(pluginMocks('postLegalentitiesExternalRecord', [data, headers], '{version}/legalentities/external')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postLegalentitiesExternalRecord'));
	    }
	
	    function postLegalentitiesBulkExternalIdsRecord(data, headers) {
	      var url = '' + baseUri + version + '/legalentities/bulk/externalIds';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postLegalentitiesBulkExternalIdsRecord', 200)).then(pluginMocks('postLegalentitiesBulkExternalIdsRecord', [data, headers], '{version}/legalentities/bulk/externalIds')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postLegalentitiesBulkExternalIdsRecord'));
	    }
	
	    function getLegalentitiesServiceagreementsMaster(legalEntityId, params, headers) {
	      var url = '' + baseUri + version + '/legalentities/' + legalEntityId + '/serviceagreements/master';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getLegalentitiesServiceagreementsMaster', 200)).then(pluginMocks('getLegalentitiesServiceagreementsMaster', [legalEntityId, params, headers], '{version}/legalentities/{legalEntityId}/serviceagreements/master')).catch(handleError('getLegalentitiesServiceagreementsMaster'));
	    }
	
	    function getLegalentitiesExternalRecord(externalId, params, headers) {
	      var url = '' + baseUri + version + '/legalentities/external/' + externalId;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getLegalentitiesExternalRecord', 200)).then(pluginMocks('getLegalentitiesExternalRecord', [externalId, params, headers], '{version}/legalentities/external/{externalId}')).catch(handleError('getLegalentitiesExternalRecord'));
	    }
	
	    function putLegalentitiesExternalRecord(externalId, data, headers) {
	      var url = '' + baseUri + version + '/legalentities/external/' + externalId;
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putLegalentitiesExternalRecord', 200)).then(pluginMocks('putLegalentitiesExternalRecord', [externalId, data, headers], '{version}/legalentities/external/{externalId}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putLegalentitiesExternalRecord'));
	    }
	
	    function getLegalentitiesExternalServiceagreementsMaster(externalId, params, headers) {
	      var url = '' + baseUri + version + '/legalentities/external/' + externalId + '/serviceagreements/master';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getLegalentitiesExternalServiceagreementsMaster', 200)).then(pluginMocks('getLegalentitiesExternalServiceagreementsMaster', [externalId, params, headers], '{version}/legalentities/external/{externalId}/serviceagreements/master')).catch(handleError('getLegalentitiesExternalServiceagreementsMaster'));
	    }
	
	    schemas.postLegalentitiesRecord = { "properties": { "externalId": { "type": "string", "minLength": 1, "maxLength": 64, "required": true }, "name": { "type": "string", "minLength": 1, "maxLength": 64, "pattern": "^\\S(.*(\\S))?$", "required": true }, "parentExternalId": { "type": "string", "minLength": 1, "maxLength": 64, "required": false }, "type": { "type": "string", "enum": ["CUSTOMER", "BANK"], "required": true } } };
	
	    schemas.putLegalentitiesRecord = { "type": "array", "items": { "properties": { "legalEntity": { "type": "object", "properties": { "externalId": { "type": "string", "minLength": 1, "maxLength": 64, "required": true }, "name": { "type": "string", "minLength": 1, "maxLength": 64, "pattern": "^\\S(.*(\\S))?$", "required": true }, "parentExternalId": { "type": "string", "minLength": 1, "maxLength": 64, "required": false }, "type": { "type": "string", "enum": ["CUSTOMER", "BANK"], "required": true } }, "required": true }, "externalId": { "type": "string", "minLength": 1, "maxLength": 64, "required": true } } } };
	
	    schemas.postLegalentitiesExternalRecord = { "properties": { "ids": { "type": "array", "items": { "properties": {} }, "minItems": 1, "uniqueItems": true, "required": true } } };
	
	    schemas.postLegalentitiesBulkExternalIdsRecord = { "properties": { "ids": { "type": "array", "items": { "properties": {} }, "minItems": 1, "uniqueItems": true, "required": true } } };
	
	    schemas.putLegalentitiesExternalRecord = { "properties": { "type": { "type": "string", "enum": ["CUSTOMER", "BANK"], "required": true } } };
	
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
//# sourceMappingURL=mock.data-bb-legalentity-http-ng.js.map