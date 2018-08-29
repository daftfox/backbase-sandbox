(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else if(typeof define === 'function' && define.amd)
		define("mock.data-bb-saving-goals-http-ng", ["vendor-bb-angular", "lib-bb-storage-ng"], factory);
	else if(typeof exports === 'object')
		exports["mock.data-bb-saving-goals-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else
		root["mock.data-bb-saving-goals-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage-ng"]);
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
	exports.savingGoalsDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStorageNg = __webpack_require__(3);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _dataBbSavingGoalsHttp = __webpack_require__(4);
	
	var _dataBbSavingGoalsHttp2 = _interopRequireDefault(_dataBbSavingGoalsHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var savingGoalsDataModuleKey = 'data-bb-saving-goals-http-ng'; /* eslint-disable */
	var savingGoalsDataKey = exports.savingGoalsDataKey = 'data-bb-saving-goals-http-ng:savingGoalsData';
	
	exports.default = _vendorBbAngular2.default.module(savingGoalsDataModuleKey, [_libBbStorageNg2.default]).provider(savingGoalsDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  return {
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	    $get: ['$q', _libBbStorageNg.bbStorageServiceKey, '$httpParamSerializer',
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

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/* eslint-disable */
	exports.default = function (conf) {
	  return function (Promise, bbStorage, serializeParams) {
	    var _plugins;
	
	    // Base param constants
	    var baseUri = conf.baseUri || '';
	
	    var version = 'v2';
	
	    var schemas = {};
	
	    var STORAGE_KEY = 'MOCK_STATE_savingGoalsDataModuleKey';
	    var state = {
	      "{version}/savinggoals": [{
	        "id": "1955e686-d31e-4216-b3dd-5d66161d536b",
	        "goalName": "Holiday to Hawaii",
	        "goalAmount": {
	          "amount": "2000.00",
	          "currencyCode": "EUR"
	        },
	        "arrangementId": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "amountProgress": {
	          "amount": "550.00",
	          "currencyCode": "EUR"
	        },
	        "progressPercentage": 27.5,
	        "amountRemaining": {
	          "amount": "1450.00",
	          "currencyCode": "EUR"
	        }
	      }, {
	        "id": "1955e686-d31e-4216-b3dd-5d66161d536d",
	        "goalName": "iPhone",
	        "goalAmount": {
	          "amount": "999.00",
	          "currencyCode": "EUR"
	        },
	        "arrangementId": "7cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "amountProgress": {
	          "amount": "274.72",
	          "currencyCode": "EUR"
	        },
	        "progressPercentage": 27.5,
	        "amountRemaining": {
	          "amount": "724.28",
	          "currencyCode": "EUR"
	        }
	      }]
	    };
	
	    bbStorage.subscribe(STORAGE_KEY, function (newState) {
	      state = newState;
	    });
	
	    var persistState = function persistState(newState) {
	      bbStorage.setItem(STORAGE_KEY, newState);
	    };
	
	    var responses = {
	
	      postSavinggoalsRecord: [{ "status": 201, "data": { "id": "0955e686-d31e-4216-b3dd-5d77161d536d" } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      getSavinggoals: [{ "status": 200, "data": [{ "id": "1955e686-d31e-4216-b3dd-5d66161d536b", "goalName": "Holiday to Hawaii", "goalAmount": { "amount": "2000.00", "currencyCode": "EUR" }, "arrangementId": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "amountProgress": { "amount": "550.00", "currencyCode": "EUR" }, "progressPercentage": 27.5, "amountRemaining": { "amount": "1450.00", "currencyCode": "EUR" } }, { "id": "1955e686-d31e-4216-b3dd-5d66161d536d", "goalName": "iPhone", "goalAmount": { "amount": "999.00", "currencyCode": "EUR" }, "arrangementId": "7cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "amountProgress": { "amount": "274.72", "currencyCode": "EUR" }, "progressPercentage": 27.5, "amountRemaining": { "amount": "724.28", "currencyCode": "EUR" } }] }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      getSavinggoalsRecord: [{ "status": 200, "data": { "id": "1955e686-d31e-4216-b3dd-5d66161d536b", "goalName": "Holiday to Hawaii", "goalAmount": { "amount": "2000.00", "currencyCode": "EUR" }, "arrangementId": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "amountProgress": { "amount": "550.00", "currencyCode": "EUR" }, "progressPercentage": 27.5, "amountRemaining": { "amount": "1450.00", "currencyCode": "EUR" } } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": null }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      deleteSavinggoalsRecord: [{ "status": 204, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": null }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      putSavinggoalsRecord: [{ "status": 204, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": null }, { "status": 500, "data": { "message": "Description of error" } }]
	
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
	
	    var plugins = (_plugins = {}, _defineProperty(_plugins, PLUGINS_ALL, []), _defineProperty(_plugins, 'postSavinggoalsRecord', []), _defineProperty(_plugins, 'getSavinggoals', []), _defineProperty(_plugins, 'getSavinggoalsRecord', []), _defineProperty(_plugins, 'deleteSavinggoalsRecord', []), _defineProperty(_plugins, 'putSavinggoalsRecord', []), _plugins);
	
	    if (!plugins['postSavinggoalsRecord']) {
	      console.warn('%cThere is no "postSavinggoalsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['postSavinggoalsRecord'].push(function anonymous(result, args
	      /**/) {
	
	        var fillFn = function fillFn(data) {
	          var currency = data.goalAmount.currencyCode;
	          var goal = data.goalAmount.amount;
	          // assign random saved percentage and do necessary calculations
	          var percentage = parseInt(Math.random() * 100, 10);
	
	          return Object.assign(data, {
	            progressPercentage: percentage,
	            amountProgress: {
	              currencyCode: currency,
	              amount: goal * percentage / 100
	            },
	            amountRemaining: {
	              currencyCode: currency,
	              amount: Math.abs(goal - goal * percentage / 100)
	            }
	          });
	        };
	        Object.assign(result.data, fillFn(args[args.length - 2]));
	        return result;
	      });
	    }
	
	    if (!plugins['putSavinggoalsRecord']) {
	      console.warn('%cThere is no "putSavinggoalsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['putSavinggoalsRecord'].push(function anonymous(result, args
	      /**/) {
	
	        var fillFn = function fillFn(data) {
	          var currency = data.goalAmount.currencyCode;
	          var goal = data.goalAmount.amount;
	          // assign random saved percentage and do necessary calculations
	          var percentage = parseInt(Math.random() * 100, 10);
	
	          return Object.assign(data, {
	            progressPercentage: percentage,
	            amountProgress: {
	              currencyCode: currency,
	              amount: goal * percentage / 100
	            },
	            amountRemaining: {
	              currencyCode: currency,
	              amount: Math.abs(goal - goal * percentage / 100)
	            }
	          });
	        };
	        return Object.assign(result, { data: fillFn(args[args.length - 2]) });
	      });
	    }
	
	    if (!plugins['getSavinggoals']) {
	      console.warn('%cThere is no "getSavinggoals" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getSavinggoals'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['postSavinggoalsRecord']) {
	      console.warn('%cThere is no "postSavinggoalsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['postSavinggoalsRecord'].push(function (result, args, uri) {
	        var guidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
	        var guid = function guid() {
	          var s4 = function s4() {
	            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	          };
	          return '' + s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	        };
	
	        var body = args[args.length - 2];
	        var id = result.data && result.data.id;
	
	        if (guidRegex.test(id)) {
	          id = guid();
	          body = Object.assign({}, body, { id: id });
	        }
	
	        /* 
	        * If fields are present in body as well as result data: 
	        * update the value in response with value from body.
	        */
	        if (result && result.data && _typeof(result.data) === 'object') {
	          Object.keys(result.data).map(function (key) {
	            if (body && key in body) result.data[key] = body[key];
	          });
	        }
	
	        // Add newly created object to the state collection
	        // (state variable is available in the mock module context)
	        state[uri].push(body);
	
	        return result;
	      });
	    }
	
	    if (!plugins['getSavinggoalsRecord']) {
	      console.warn('%cThere is no "getSavinggoalsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getSavinggoalsRecord'].push(function (result, args, uri, method) {
	        // Assuming item id to read item is the last but one argument
	        var id = args[args.length - 3];
	        // Cut off uri parameter
	        uri = uri.substring(0, uri.lastIndexOf('/'));
	
	        // Find item in the state, if available
	        // (state variable is available in the mock module context)
	        var item = (state[uri] || []).find(function (item) {
	          return item.id === id;
	        });
	        return item ? Object.assign({}, result, { data: item }) : Promise.reject(getResponse(method, 404));
	      });
	    }
	
	    if (!plugins['putSavinggoalsRecord']) {
	      console.warn('%cThere is no "putSavinggoalsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['putSavinggoalsRecord'].push(function (result, args, uri, method) {
	        // Assuming body to update is the last argument, and item id is last but one
	        var id = args[args.length - 3];
	        var body = args[args.length - 2];
	        // Cut off uri parameter
	        uri = uri.substring(0, uri.lastIndexOf('/'));
	
	        // Update item in the state, if available
	        // (state variable is available in the mock module context)
	        var item = (state[uri] || []).find(function (item) {
	          return item.id === id;
	        });
	        if (item) {
	          Object.assign(item, body);
	
	          /* 
	          * If fields are present in body as well as result data: 
	          * update the value in response with value from body.
	          */
	          if (result && result.data && _typeof(result.data) === 'object') {
	            Object.keys(result.data).map(function (key) {
	              if (body && key in body) result.data[key] = body[key];
	            });
	          }
	        } else {
	          // Return NOT FOUND response, if available
	          // (getResponse method is available in the mock module context)
	          return Promise.reject(getResponse(method, 404));
	        }
	
	        return result;
	      });
	    }
	
	    if (!plugins['deleteSavinggoalsRecord']) {
	      console.warn('%cThere is no "deleteSavinggoalsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['deleteSavinggoalsRecord'].push(function (result, args, uri, method) {
	        // Assuming item id to delete is the last but one argument
	        var id = args[args.length - 3];
	        // Cut off uri parameter
	        uri = uri.substring(0, uri.lastIndexOf('/'));
	
	        // Delete item from the state
	        // (state variable is available in the mock module context)
	        var index = (state[uri] || []).findIndex(function (item) {
	          return item.id === id;
	        });
	        if (index >= 0) {
	          state[uri].splice(index, 1);
	        } else {
	          // Return NOT FOUND response, if available
	          // (getResponse method is available in the mock module context)
	          return Promise.reject(getResponse(method, 404));
	        }
	
	        return result;
	      });
	    }
	
	    if (!plugins['getSavinggoals']) {
	      console.warn('%cThere is no "getSavinggoals" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getSavinggoals'].push(function (collection, args) {
	        var params = args[0];
	        var filtered = params.arrangementId ? collection.data.filter(function (item) {
	          return item.arrangementId === params.arrangementId;
	        }) : collection.data;
	
	        return Object.assign(collection, {
	          data: filtered
	        });
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
	
	    function postSavinggoalsRecord(data, headers) {
	      var url = '' + baseUri + version + '/savinggoals';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postSavinggoalsRecord', 201)).then(pluginMocks('postSavinggoalsRecord', [data, headers], '{version}/savinggoals')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postSavinggoalsRecord'));
	    }
	
	    function getSavinggoals(params, headers) {
	      var url = '' + baseUri + version + '/savinggoals';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getSavinggoals', 200)).then(pluginMocks('getSavinggoals', [params, headers], '{version}/savinggoals')).catch(handleError('getSavinggoals'));
	    }
	
	    function getSavinggoalsRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/savinggoals/' + id;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getSavinggoalsRecord', 200)).then(pluginMocks('getSavinggoalsRecord', [id, params, headers], '{version}/savinggoals/{id}')).catch(handleError('getSavinggoalsRecord'));
	    }
	
	    function deleteSavinggoalsRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/savinggoals/' + id;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deleteSavinggoalsRecord', 204)).then(pluginMocks('deleteSavinggoalsRecord', [id, params, headers], '{version}/savinggoals/{id}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deleteSavinggoalsRecord'));
	    }
	
	    function putSavinggoalsRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/savinggoals/' + id;
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putSavinggoalsRecord', 204)).then(pluginMocks('putSavinggoalsRecord', [id, data, headers], '{version}/savinggoals/{id}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putSavinggoalsRecord'));
	    }
	
	    schemas.postSavinggoalsRecord = { "properties": { "goalName": { "type": "string", "required": true }, "goalAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true }, "arrangementId": { "type": "string", "required": true } } };
	
	    schemas.putSavinggoalsRecord = { "properties": { "goalName": { "type": "string", "maxLength": 50, "required": true }, "goalAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true } } };
	
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
//# sourceMappingURL=mock.data-bb-saving-goals-http-ng.js.map