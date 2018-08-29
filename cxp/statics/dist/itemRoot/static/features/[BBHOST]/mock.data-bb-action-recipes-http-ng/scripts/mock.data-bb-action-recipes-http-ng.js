(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else if(typeof define === 'function' && define.amd)
		define("mock.data-bb-action-recipes-http-ng", ["vendor-bb-angular", "lib-bb-storage-ng"], factory);
	else if(typeof exports === 'object')
		exports["mock.data-bb-action-recipes-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else
		root["mock.data-bb-action-recipes-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage-ng"]);
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
	
	var _libBbStorageNg = __webpack_require__(3);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _dataBbActionRecipesHttp = __webpack_require__(4);
	
	var _dataBbActionRecipesHttp2 = _interopRequireDefault(_dataBbActionRecipesHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var actionRecipesDataModuleKey = 'data-bb-action-recipes-http-ng'; /* eslint-disable */
	var actionRecipesDataKey = exports.actionRecipesDataKey = 'data-bb-action-recipes-http-ng:actionRecipesData';
	
	exports.default = _vendorBbAngular2.default.module(actionRecipesDataModuleKey, [_libBbStorageNg2.default]).provider(actionRecipesDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  return {
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	    $get: ['$q', _libBbStorageNg.bbStorageServiceKey, '$httpParamSerializer',
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
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/* eslint-disable */
	exports.default = function (conf) {
	  return function (Promise, bbStorage, serializeParams) {
	    var _plugins;
	
	    // Base param constants
	    var baseUri = conf.baseUri || '';
	
	    var version = 'v2';
	
	    var schemas = {};
	
	    var STORAGE_KEY = 'MOCK_STATE_actionRecipesDataModuleKey';
	    var state = {};
	
	    bbStorage.subscribe(STORAGE_KEY, function (newState) {
	      state = newState;
	    });
	
	    var persistState = function persistState(newState) {
	      bbStorage.setItem(STORAGE_KEY, newState);
	    };
	
	    var responses = {
	
	      getActionRecipeSpecifications: [{ "status": 200, "data": { "actionRecipeSpecifications": [{ "id": "1", "name": "New Transaction", "userDefinable": true, "type": "newTransaction", "actions": [{ "type": "notification", "templateId": "1" }, { "type": "email", "templateId": "1" }, { "type": "sms", "templateId": "1" }] }, { "id": "2", "name": "Account Low Balance", "userDefinable": true, "type": "accountLowBalance", "actions": [{ "type": "notification", "templateId": "1" }, { "type": "email", "templateId": "1" }, { "type": "sms", "templateId": "1" }] }] } }, { "status": 401, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to invalid credentials.", "key": "common.api.token", "context": { "accessToken": "expired" } }] } }],
	
	      getActionRecipes: [{ "status": 200, "data": { "totalCount": 14, "actionRecipes": [{ "id": "1", "name": "Transaction > 100 EUR", "active": true, "specificationId": "1", "userId": "kjordan", "actions": [{ "type": "notification", "enabled": true }, { "type": "email", "enabled": false }, { "type": "sms", "enabled": false }], "amount": "100", "arrangementId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "createdOn": "2018-01-31T12:12:12Z" }, { "id": "2", "name": "Account Low Balance < 1000 EUR", "active": true, "specificationId": "2", "userId": "kjordan", "actions": [{ "type": "notification", "enabled": true }, { "type": "email", "enabled": false }, { "type": "sms", "enabled": false }], "amount": "300", "arrangementId": "2cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "createdOn": "2018-01-31T12:12:12Z" }, { "id": "3", "name": "Transaction > 300 EUR", "active": true, "specificationId": "1", "userId": "kjordan", "actions": [{ "type": "notification", "enabled": true }, { "type": "email", "enabled": false }, { "type": "sms", "enabled": false }], "amount": "300", "arrangementId": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "createdOn": "2018-01-31T12:12:12Z" }, { "id": "4", "name": "Account Low Balance < 1000 EUR", "active": true, "specificationId": "2", "userId": "kjordan", "actions": [{ "type": "notification", "enabled": true }, { "type": "email", "enabled": false }, { "type": "sms", "enabled": false }], "amount": "300", "arrangementId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "createdOn": "2018-01-31T12:12:12Z" }, { "id": "5", "name": "Transaction > 100 EUR", "active": true, "specificationId": "1", "userId": "kjordan", "actions": [{ "type": "notification", "enabled": true }, { "type": "email", "enabled": false }, { "type": "sms", "enabled": false }], "amount": "100", "arrangementId": "2cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "createdOn": "2018-01-31T12:12:12Z" }, { "id": "6", "name": "Account Low Balance < 1000 EUR", "active": true, "specificationId": "2", "userId": "kjordan", "actions": [{ "type": "notification", "enabled": true }, { "type": "email", "enabled": false }, { "type": "sms", "enabled": false }], "amount": "300", "arrangementId": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "createdOn": "2018-01-31T12:12:12Z" }, { "id": "7", "name": "Transaction > 100 EUR", "active": true, "specificationId": "1", "userId": "kjordan", "actions": [{ "type": "notification", "enabled": true }, { "type": "email", "enabled": false }, { "type": "sms", "enabled": false }], "amount": "100", "arrangementId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "createdOn": "2018-01-31T12:12:12Z" }, { "id": "8", "name": "Account Low Balance < 1000 EUR", "active": true, "specificationId": "2", "userId": "kjordan", "actions": [{ "type": "notification", "enabled": true }, { "type": "email", "enabled": false }, { "type": "sms", "enabled": false }], "amount": "300", "arrangementId": "2cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "createdOn": "2018-01-31T12:12:12Z" }, { "id": "9", "name": "Transaction > 100 EUR", "active": true, "specificationId": "1", "userId": "kjordan", "actions": [{ "type": "notification", "enabled": true }, { "type": "email", "enabled": false }, { "type": "sms", "enabled": false }], "amount": "100", "arrangementId": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "createdOn": "2018-01-31T12:12:12Z" }, { "id": "10", "name": "Account Low Balance < 1000 EUR", "active": true, "specificationId": "2", "userId": "kjordan", "actions": [{ "type": "notification", "enabled": true }, { "type": "email", "enabled": false }, { "type": "sms", "enabled": false }], "amount": "300", "arrangementId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "createdOn": "2018-01-31T12:12:12Z" }, { "id": "11", "name": "Transaction > 100 EUR", "active": true, "specificationId": "1", "userId": "kjordan", "actions": [{ "type": "notification", "enabled": true }, { "type": "email", "enabled": false }, { "type": "sms", "enabled": false }], "amount": "100", "arrangementId": "2cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "createdOn": "2018-01-31T12:12:12Z" }, { "id": "12", "name": "Account Low Balance < 1000 EUR", "active": true, "specificationId": "2", "userId": "kjordan", "actions": [{ "type": "notification", "enabled": true }, { "type": "email", "enabled": false }, { "type": "sms", "enabled": false }], "amount": "300", "arrangementId": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "createdOn": "2018-01-31T12:12:12Z" }, { "id": "13", "name": "Transaction > 100 EUR", "active": true, "specificationId": "1", "userId": "kjordan", "actions": [{ "type": "notification", "enabled": true }, { "type": "email", "enabled": false }, { "type": "sms", "enabled": false }], "amount": "100", "arrangementId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "createdOn": "2018-01-31T12:12:12Z" }, { "id": "14", "name": "Account Low Balance < 1000 EUR", "active": true, "specificationId": "2", "userId": "kjordan", "actions": [{ "type": "notification", "enabled": true }, { "type": "email", "enabled": false }, { "type": "sms", "enabled": false }], "amount": "300", "arrangementId": "2cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "createdOn": "2018-01-31T12:12:12Z" }] } }, { "status": 403, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to an insufficient user quota of {quota}.", "key": "common.api.quota", "context": { "quota": "someQuota" } }] } }],
	
	      postActionRecipesRecord: [{ "status": 202, "data": { "id": "e92bbe7d-10cf-4d7c-b7b5-eadb7632812a" } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 403, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to an insufficient user quota of {quota}.", "key": "common.api.quota", "context": { "quota": "someQuota" } }] } }],
	
	      getActionRecipesRecord: [{ "status": 200, "data": { "id": "1", "name": "Transaction > 100 EUR", "active": true, "specificationId": "1", "userId": "kjordan", "actions": [{ "type": "notification", "enabled": true }, { "type": "email", "enabled": false }, { "type": "sms", "enabled": false }], "amount": "100", "arrangementId": "123" } }, { "status": 403, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to an insufficient user quota of {quota}.", "key": "common.api.quota", "context": { "quota": "someQuota" } }] } }, { "status": 404, "data": { "message": "Resource not found.", "errors": [{ "message": "Unable to find the resource requested resource: {resource}.", "key": "common.api.resource", "context": { "resource": "aResource" } }] } }],
	
	      putActionRecipesRecord: [{ "status": 202, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 403, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to an insufficient user quota of {quota}.", "key": "common.api.quota", "context": { "quota": "someQuota" } }] } }, { "status": 404, "data": { "message": "Resource not found.", "errors": [{ "message": "Unable to find the resource requested resource: {resource}.", "key": "common.api.resource", "context": { "resource": "aResource" } }] } }],
	
	      deleteActionRecipesRecord: [{ "status": 202, "data": null }, { "status": 401, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to invalid credentials.", "key": "common.api.token", "context": { "accessToken": "expired" } }] } }, { "status": 403, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to an insufficient user quota of {quota}.", "key": "common.api.quota", "context": { "quota": "someQuota" } }] } }, { "status": 404, "data": { "message": "Resource not found.", "errors": [{ "message": "Unable to find the resource requested resource: {resource}.", "key": "common.api.resource", "context": { "resource": "aResource" } }] } }],
	
	      getActionRecipesHistory: [{ "status": 200, "data": { "actionEventsHistory": [{ "alertName": "Low balance alert", "deliveryMethod": "sms", "alertDate": "2018-01-31T12:12:12Z", "alertText": "Warning! Your account balance is below 20 EUR.", "destinations": ["+380987654321", "+380123456789"] }, { "alertName": "Low balance alert", "deliveryMethod": "email", "alertDate": "2018-01-31T12:12:12Z", "alertText": "Warning! Your account balance is below 20 EUR.", "destinations": ["user@domain.com", "resu@domain.com"] }, { "alertName": "Low balance alert", "deliveryMethod": "notification", "alertDate": "2018-01-31T12:12:12Z", "alertText": "Warning! Your account balance is below 20 EUR.", "destinations": ["userId"] }] } }, { "status": 403, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to an insufficient user quota of {quota}.", "key": "common.api.quota", "context": { "quota": "someQuota" } }] } }],
	
	      postActionRecipesActivationRequestRecord: [{ "status": 202, "data": null }, { "status": 403, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to an insufficient user quota of {quota}.", "key": "common.api.quota", "context": { "quota": "someQuota" } }] } }, { "status": 404, "data": { "message": "Resource not found.", "errors": [{ "message": "Unable to find the resource requested resource: {resource}.", "key": "common.api.resource", "context": { "resource": "aResource" } }] } }],
	
	      postActionRecipesDeactivationRequestRecord: [{ "status": 202, "data": null }, { "status": 403, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to an insufficient user quota of {quota}.", "key": "common.api.quota", "context": { "quota": "someQuota" } }] } }, { "status": 404, "data": { "message": "Resource not found.", "errors": [{ "message": "Unable to find the resource requested resource: {resource}.", "key": "common.api.resource", "context": { "resource": "aResource" } }] } }],
	
	      getActionRecipesHistoryRecord: [{ "status": 200, "data": { "actionEventsHistory": [{ "alertName": "Low balance alert", "deliveryMethod": "sms", "alertDate": "2018-01-31T12:12:12Z", "alertText": "Warning! Your account balance is below 20 EUR.", "destinations": ["+380987654321", "+380123456789"] }, { "alertName": "Low balance alert", "deliveryMethod": "email", "alertDate": "2018-01-31T12:12:12Z", "alertText": "Warning! Your account balance is below 20 EUR.", "destinations": ["user@domain.com", "resu@domain.com"] }, { "alertName": "Low balance alert", "deliveryMethod": "notification", "alertDate": "2018-01-31T12:12:12Z", "alertText": "Warning! Your account balance is below 20 EUR.", "destinations": ["userId"] }] } }, { "status": 403, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to an insufficient user quota of {quota}.", "key": "common.api.quota", "context": { "quota": "someQuota" } }] } }, { "status": 404, "data": { "message": "Resource not found.", "errors": [{ "message": "Unable to find the resource requested resource: {resource}.", "key": "common.api.resource", "context": { "resource": "aResource" } }] } }]
	
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
	
	    var plugins = (_plugins = {}, _defineProperty(_plugins, PLUGINS_ALL, []), _defineProperty(_plugins, 'getActionRecipeSpecifications', []), _defineProperty(_plugins, 'getActionRecipes', []), _defineProperty(_plugins, 'postActionRecipesRecord', []), _defineProperty(_plugins, 'getActionRecipesRecord', []), _defineProperty(_plugins, 'putActionRecipesRecord', []), _defineProperty(_plugins, 'deleteActionRecipesRecord', []), _defineProperty(_plugins, 'getActionRecipesHistory', []), _defineProperty(_plugins, 'postActionRecipesActivationRequestRecord', []), _defineProperty(_plugins, 'postActionRecipesDeactivationRequestRecord', []), _defineProperty(_plugins, 'getActionRecipesHistoryRecord', []), _plugins);
	
	    if (!plugins['getActionRecipes']) {
	      console.warn('%cThere is no "getActionRecipes" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getActionRecipes'].push(function (result, args) {
	        var data = result.data.actionRecipes;
	        var totalCount = data.length;
	
	        var params = args[args.length - 2] || {};
	        var size = parseInt(params.limit, 10);
	        if (!isNaN(size)) {
	          var startIndex = parseInt(params.offset, 10) || 0;
	
	          data = data.slice(startIndex, startIndex + size);
	        }
	
	        return Object.assign({}, result, { data: { actionRecipes: data, totalCount: totalCount } });
	      });
	    }
	
	    if (!plugins['getActionRecipesHistory']) {
	      console.warn('%cThere is no "getActionRecipesHistory" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getActionRecipesHistory'].push(function (result, args) {
	        var data = result.data.actionRecipes;
	        var totalCount = data.length;
	
	        var params = args[args.length - 2] || {};
	        var size = parseInt(params.limit, 10);
	        if (!isNaN(size)) {
	          var startIndex = parseInt(params.offset, 10) || 0;
	
	          data = data.slice(startIndex, startIndex + size);
	        }
	
	        return Object.assign({}, result, { data: { actionRecipes: data, totalCount: totalCount } });
	      });
	    }
	
	    if (!plugins['getActionRecipesHistoryRecord']) {
	      console.warn('%cThere is no "getActionRecipesHistoryRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getActionRecipesHistoryRecord'].push(function (result, args) {
	        var data = result.data.actionRecipes;
	        var totalCount = data.length;
	
	        var params = args[args.length - 2] || {};
	        var size = parseInt(params.limit, 10);
	        if (!isNaN(size)) {
	          var startIndex = parseInt(params.offset, 10) || 0;
	
	          data = data.slice(startIndex, startIndex + size);
	        }
	
	        return Object.assign({}, result, { data: { actionRecipes: data, totalCount: totalCount } });
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
	
	    function getActionRecipeSpecifications(params, headers) {
	      var url = '' + baseUri + version + '/action-recipe-specifications';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getActionRecipeSpecifications', 200)).then(pluginMocks('getActionRecipeSpecifications', [params, headers], '{version}/action-recipe-specifications')).catch(handleError('getActionRecipeSpecifications'));
	    }
	
	    function getActionRecipes(params, headers) {
	      var url = '' + baseUri + version + '/action-recipes';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getActionRecipes', 200)).then(pluginMocks('getActionRecipes', [params, headers], '{version}/action-recipes')).catch(handleError('getActionRecipes'));
	    }
	
	    function postActionRecipesRecord(data, headers) {
	      var url = '' + baseUri + version + '/action-recipes';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postActionRecipesRecord', 202)).then(pluginMocks('postActionRecipesRecord', [data, headers], '{version}/action-recipes')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postActionRecipesRecord'));
	    }
	
	    function getActionRecipesRecord(recipeId, params, headers) {
	      var url = '' + baseUri + version + '/action-recipes/' + recipeId;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getActionRecipesRecord', 200)).then(pluginMocks('getActionRecipesRecord', [recipeId, params, headers], '{version}/action-recipes/{recipeId}')).catch(handleError('getActionRecipesRecord'));
	    }
	
	    function putActionRecipesRecord(recipeId, data, headers) {
	      var url = '' + baseUri + version + '/action-recipes/' + recipeId;
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putActionRecipesRecord', 202)).then(pluginMocks('putActionRecipesRecord', [recipeId, data, headers], '{version}/action-recipes/{recipeId}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putActionRecipesRecord'));
	    }
	
	    function deleteActionRecipesRecord(recipeId, params, headers) {
	      var url = '' + baseUri + version + '/action-recipes/' + recipeId;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deleteActionRecipesRecord', 202)).then(pluginMocks('deleteActionRecipesRecord', [recipeId, params, headers], '{version}/action-recipes/{recipeId}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deleteActionRecipesRecord'));
	    }
	
	    function getActionRecipesHistory(params, headers) {
	      var url = '' + baseUri + version + '/action-recipes/history';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getActionRecipesHistory', 200)).then(pluginMocks('getActionRecipesHistory', [params, headers], '{version}/action-recipes/history')).catch(handleError('getActionRecipesHistory'));
	    }
	
	    function postActionRecipesActivationRequestRecord(recipeId, data, headers) {
	      var url = '' + baseUri + version + '/action-recipes/' + recipeId + '/activation-request';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postActionRecipesActivationRequestRecord', 202)).then(pluginMocks('postActionRecipesActivationRequestRecord', [recipeId, data, headers], '{version}/action-recipes/{recipeId}/activation-request')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postActionRecipesActivationRequestRecord'));
	    }
	
	    function postActionRecipesDeactivationRequestRecord(recipeId, data, headers) {
	      var url = '' + baseUri + version + '/action-recipes/' + recipeId + '/deactivation-request';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postActionRecipesDeactivationRequestRecord', 202)).then(pluginMocks('postActionRecipesDeactivationRequestRecord', [recipeId, data, headers], '{version}/action-recipes/{recipeId}/deactivation-request')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postActionRecipesDeactivationRequestRecord'));
	    }
	
	    function getActionRecipesHistoryRecord(userId, params, headers) {
	      var url = '' + baseUri + version + '/action-recipes/history/' + userId;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getActionRecipesHistoryRecord', 200)).then(pluginMocks('getActionRecipesHistoryRecord', [userId, params, headers], '{version}/action-recipes/history/{userId}')).catch(handleError('getActionRecipesHistoryRecord'));
	    }
	
	    schemas.postActionRecipesRecord = { "properties": {} };
	
	    schemas.putActionRecipesRecord = { "properties": { "actions": { "type": "array", "items": { "properties": { "type": { "type": "string", "enum": ["notification", "email", "sms"], "required": true }, "destination": { "type": "object", "properties": {}, "required": false } } }, "minItems": 1, "maxItems": 3, "required": true }, "amount": { "type": "string", "maximum": 1000000000000000000, "required": false }, "arrangementId": { "type": "string", "minLength": 1, "maxLength": 64, "required": false } } };
	
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
//# sourceMappingURL=mock.data-bb-action-recipes-http-ng.js.map