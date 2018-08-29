(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else if(typeof define === 'function' && define.amd)
		define("mock.data-bb-budgeting-http-ng", ["vendor-bb-angular", "lib-bb-storage-ng"], factory);
	else if(typeof exports === 'object')
		exports["mock.data-bb-budgeting-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else
		root["mock.data-bb-budgeting-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage-ng"]);
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
	exports.budgetingDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStorageNg = __webpack_require__(3);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _dataBbBudgetingHttp = __webpack_require__(4);
	
	var _dataBbBudgetingHttp2 = _interopRequireDefault(_dataBbBudgetingHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var budgetingDataModuleKey = 'data-bb-budgeting-http-ng'; /* eslint-disable */
	var budgetingDataKey = exports.budgetingDataKey = 'data-bb-budgeting-http-ng:budgetingData';
	
	exports.default = _vendorBbAngular2.default.module(budgetingDataModuleKey, [_libBbStorageNg2.default]).provider(budgetingDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  return {
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	    $get: ['$q', _libBbStorageNg.bbStorageServiceKey, '$httpParamSerializer',
	    /* into */
	    (0, _dataBbBudgetingHttp2.default)(config)]
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
	
	    var STORAGE_KEY = 'MOCK_STATE_budgetingDataModuleKey';
	    var state = {
	      "{version}/budgets": [{
	        "id": "1955e686-d31e-4216-b3dd-5d66161d536d",
	        "categoryName": "Groceries",
	        "budgetName": "Groceries",
	        "budgetIcon": "groceries",
	        "spendingLimit": {
	          "amount": "350.00",
	          "currencyCode": "EUR"
	        },
	        "frequency": "MONTHLY",
	        "spent": {
	          "amount": "550.00",
	          "currencyCode": "EUR"
	        },
	        "spentPercentage": 100,
	        "available": {
	          "amount": "200.00",
	          "currencyCode": "EUR"
	        },
	        "period": {
	          "startDate": "2017-06-01T16:41:41.090Z",
	          "endDate": "2017-06-17T16:41:41.090Z"
	        }
	      }, {
	        "id": "2955e686-d31e-4216-b3dd-5d66161d536d",
	        "categoryName": "Home",
	        "budgetName": "Home",
	        "budgetIcon": "home",
	        "spendingLimit": {
	          "amount": "700.00",
	          "currencyCode": "EUR"
	        },
	        "frequency": "MONTHLY",
	        "spent": {
	          "amount": "550.00",
	          "currencyCode": "EUR"
	        },
	        "spentPercentage": 80,
	        "available": {
	          "amount": "150.00",
	          "currencyCode": "EUR"
	        },
	        "period": {
	          "startDate": "2017-06-01T16:41:41.090Z"
	        }
	      }, {
	        "id": "4955e686-d31e-4216-b3dd-5d66161d536d",
	        "categoryName": "Shopping",
	        "budgetName": "Shopping",
	        "budgetIcon": "shopping",
	        "spendingLimit": {
	          "amount": "800.00",
	          "currencyCode": "EUR"
	        },
	        "frequency": "MONTHLY",
	        "spent": {
	          "amount": "270.00",
	          "currencyCode": "EUR"
	        },
	        "spentPercentage": 30,
	        "available": {
	          "amount": "530.00",
	          "currencyCode": "EUR"
	        },
	        "period": {
	          "startDate": "2017-06-01T16:41:41.090Z"
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
	
	      postBudgetsRecord: [{ "status": 201, "data": { "id": "0955e686-d31e-4216-b3dd-5d77161d536d" } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      getBudgets: [{ "status": 200, "data": [{ "id": "1955e686-d31e-4216-b3dd-5d66161d536d", "categoryName": "Groceries", "budgetName": "Groceries", "budgetIcon": "groceries", "spendingLimit": { "amount": "350.00", "currencyCode": "EUR" }, "frequency": "MONTHLY", "spent": { "amount": "550.00", "currencyCode": "EUR" }, "spentPercentage": 100, "available": { "amount": "200.00", "currencyCode": "EUR" }, "period": { "startDate": "2017-06-01T16:41:41.090Z", "endDate": "2017-06-17T16:41:41.090Z" } }, { "id": "2955e686-d31e-4216-b3dd-5d66161d536d", "categoryName": "Home", "budgetName": "Home", "budgetIcon": "home", "spendingLimit": { "amount": "700.00", "currencyCode": "EUR" }, "frequency": "MONTHLY", "spent": { "amount": "550.00", "currencyCode": "EUR" }, "spentPercentage": 80, "available": { "amount": "150.00", "currencyCode": "EUR" }, "period": { "startDate": "2017-06-01T16:41:41.090Z" } }, { "id": "4955e686-d31e-4216-b3dd-5d66161d536d", "categoryName": "Shopping", "budgetName": "Shopping", "budgetIcon": "shopping", "spendingLimit": { "amount": "800.00", "currencyCode": "EUR" }, "frequency": "MONTHLY", "spent": { "amount": "270.00", "currencyCode": "EUR" }, "spentPercentage": 30, "available": { "amount": "530.00", "currencyCode": "EUR" }, "period": { "startDate": "2017-06-01T16:41:41.090Z" } }] }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      deleteBudgetsRecord: [{ "status": 204, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": null }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      putBudgetsRecord: [{ "status": 204, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": null }, { "status": 500, "data": { "message": "Description of error" } }]
	
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
	
	    var plugins = (_plugins = {}, _defineProperty(_plugins, PLUGINS_ALL, []), _defineProperty(_plugins, 'postBudgetsRecord', []), _defineProperty(_plugins, 'getBudgets', []), _defineProperty(_plugins, 'deleteBudgetsRecord', []), _defineProperty(_plugins, 'putBudgetsRecord', []), _plugins);
	
	    if (!plugins['postBudgetsRecord']) {
	      console.warn('%cThere is no "postBudgetsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['postBudgetsRecord'].push(function anonymous(result, args
	      /**/) {
	
	        var fillFn = function fillFn(data) {
	          var currency = data.spendingLimit.currencyCode;
	          var limit = data.spendingLimit.amount;
	          // assign random spent percentage and do necessary calculations
	          var percentage = parseFloat((Math.random() * 100).toFixed(2), 10);
	
	          // transform budget name to icon CSS class
	          var nameToIconClass = function nameToIconClass(name) {
	            return name.toLowerCase().replace(/\W/g, '-').replace(/-{2,}/g, '-');
	          };
	
	          return Object.assign(data, {
	            budgetName: data.categoryName,
	            budgetIcon: nameToIconClass(data.categoryName),
	            spentPercentage: percentage,
	            spent: {
	              currencyCode: currency,
	              amount: Math.round(limit * percentage / 100)
	            },
	            available: {
	              currencyCode: currency,
	              amount: Math.round(limit - limit * percentage / 100)
	            }
	          });
	        };
	        Object.assign(result.data, fillFn(args[args.length - 2]));
	        return result;
	      });
	    }
	
	    if (!plugins['putBudgetsRecord']) {
	      console.warn('%cThere is no "putBudgetsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['putBudgetsRecord'].push(function anonymous(result, args
	      /**/) {
	
	        var fillFn = function fillFn(data) {
	          var currency = data.spendingLimit.currencyCode;
	          var limit = data.spendingLimit.amount;
	          // assign random spent percentage and do necessary calculations
	          var percentage = parseFloat((Math.random() * 100).toFixed(2), 10);
	
	          // transform budget name to icon CSS class
	          var nameToIconClass = function nameToIconClass(name) {
	            return name.toLowerCase().replace(/\W/g, '-').replace(/-{2,}/g, '-');
	          };
	
	          return Object.assign(data, {
	            budgetName: data.categoryName,
	            budgetIcon: nameToIconClass(data.categoryName),
	            spentPercentage: percentage,
	            spent: {
	              currencyCode: currency,
	              amount: Math.round(limit * percentage / 100)
	            },
	            available: {
	              currencyCode: currency,
	              amount: Math.round(limit - limit * percentage / 100)
	            }
	          });
	        };
	        return Object.assign(result, { data: fillFn(args[args.length - 2]) });
	      });
	    }
	
	    if (!plugins['getBudgets']) {
	      console.warn('%cThere is no "getBudgets" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getBudgets'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['postBudgetsRecord']) {
	      console.warn('%cThere is no "postBudgetsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['postBudgetsRecord'].push(function (result, args, uri) {
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
	
	    if (!plugins['putBudgetsRecord']) {
	      console.warn('%cThere is no "putBudgetsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['putBudgetsRecord'].push(function (result, args, uri, method) {
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
	
	    if (!plugins['deleteBudgetsRecord']) {
	      console.warn('%cThere is no "deleteBudgetsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['deleteBudgetsRecord'].push(function (result, args, uri, method) {
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
	
	    function postBudgetsRecord(data, headers) {
	      var url = '' + baseUri + version + '/budgets';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postBudgetsRecord', 201)).then(pluginMocks('postBudgetsRecord', [data, headers], '{version}/budgets')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postBudgetsRecord'));
	    }
	
	    function getBudgets(params, headers) {
	      var url = '' + baseUri + version + '/budgets';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getBudgets', 200)).then(pluginMocks('getBudgets', [params, headers], '{version}/budgets')).catch(handleError('getBudgets'));
	    }
	
	    function deleteBudgetsRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/budgets/' + id;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deleteBudgetsRecord', 204)).then(pluginMocks('deleteBudgetsRecord', [id, params, headers], '{version}/budgets/{id}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deleteBudgetsRecord'));
	    }
	
	    function putBudgetsRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/budgets/' + id;
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putBudgetsRecord', 204)).then(pluginMocks('putBudgetsRecord', [id, data, headers], '{version}/budgets/{id}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putBudgetsRecord'));
	    }
	
	    schemas.postBudgetsRecord = { "properties": { "categoryName": { "type": "string", "minLength": 1, "maxLength": 50, "required": true }, "budgetName": { "type": "string", "minLength": 1, "maxLength": 50, "required": true }, "budgetIcon": { "type": "string", "maxLength": 50, "required": false }, "spendingLimit": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true }, "frequency": { "type": "string", "enum": ["MONTHLY", "ONCE"], "required": true }, "period": { "type": "object", "properties": { "startDate": { "type": "string", "format": "date-time", "required": true }, "endDate": { "type": "string", "format": "date-time", "required": false } }, "required": true } } };
	
	    schemas.putBudgetsRecord = { "properties": { "budgetName": { "type": "string", "minLength": 1, "maxLength": 50, "required": true }, "spendingLimit": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true } } };
	
	    return {
	
	      postBudgetsRecord: postBudgetsRecord,
	
	      getBudgets: getBudgets,
	
	      deleteBudgetsRecord: deleteBudgetsRecord,
	
	      putBudgetsRecord: putBudgetsRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=mock.data-bb-budgeting-http-ng.js.map