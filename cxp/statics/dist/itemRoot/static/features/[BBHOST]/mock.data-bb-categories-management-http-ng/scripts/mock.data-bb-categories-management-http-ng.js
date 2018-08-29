(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else if(typeof define === 'function' && define.amd)
		define("mock.data-bb-categories-management-http-ng", ["vendor-bb-angular", "lib-bb-storage-ng"], factory);
	else if(typeof exports === 'object')
		exports["mock.data-bb-categories-management-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else
		root["mock.data-bb-categories-management-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage-ng"]);
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
	exports.categoriesManagementDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStorageNg = __webpack_require__(3);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _dataBbCategoriesManagementHttp = __webpack_require__(4);
	
	var _dataBbCategoriesManagementHttp2 = _interopRequireDefault(_dataBbCategoriesManagementHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var categoriesManagementDataModuleKey = 'data-bb-categories-management-http-ng'; /* eslint-disable */
	var categoriesManagementDataKey = exports.categoriesManagementDataKey = 'data-bb-categories-management-http-ng:categoriesManagementData';
	
	exports.default = _vendorBbAngular2.default.module(categoriesManagementDataModuleKey, [_libBbStorageNg2.default]).provider(categoriesManagementDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  return {
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	    $get: ['$q', _libBbStorageNg.bbStorageServiceKey, '$httpParamSerializer',
	    /* into */
	    (0, _dataBbCategoriesManagementHttp2.default)(config)]
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
	
	    var STORAGE_KEY = 'MOCK_STATE_categoriesManagementDataModuleKey';
	    var state = {
	      "{version}/categories": [{
	        "categoryId": 1,
	        "categoryName": "Home",
	        "categoryType": "Expenses",
	        "subCategories": [{
	          "categoryId": 2,
	          "categoryName": "Mortgage",
	          "categoryType": "Expenses",
	          "parentId": 1
	        }, {
	          "categoryId": 3,
	          "categoryName": "Rent",
	          "categoryType": "Expenses",
	          "parentId": 1
	        }]
	      }, {
	        "categoryId": 4,
	        "categoryName": "Food & Drinks",
	        "categoryType": "Expenses",
	        "subCategories": [{
	          "categoryId": 5,
	          "categoryName": "Alcohol & Bars",
	          "categoryType": "Expenses",
	          "parentId": 4
	        }, {
	          "categoryId": 6,
	          "categoryName": "Fast Food",
	          "categoryType": "Expenses",
	          "parentId": 4
	        }, {
	          "categoryId": 7,
	          "categoryName": "Groceries",
	          "categoryType": "Expenses",
	          "parentId": 4
	        }, {
	          "categoryId": 8,
	          "categoryName": "Restaurants",
	          "categoryType": "Expenses",
	          "parentId": 4
	        }]
	      }, {
	        "categoryId": 9,
	        "categoryName": "Health & Beauty",
	        "categoryType": "Expenses",
	        "subCategories": [{
	          "categoryId": 10,
	          "categoryName": "Beauty",
	          "categoryType": "Expenses",
	          "parentId": 9
	        }, {
	          "categoryId": 11,
	          "categoryName": "Health & Fitness",
	          "categoryType": "Expenses",
	          "parentId": 9
	        }]
	      }, {
	        "categoryId": 12,
	        "categoryName": "Transportation",
	        "categoryType": "Expenses",
	        "subCategories": [{
	          "categoryId": 13,
	          "categoryName": "Car",
	          "categoryType": "Expenses",
	          "parentId": 12
	        }, {
	          "categoryId": 14,
	          "categoryName": "Public Transport",
	          "categoryType": "Expenses",
	          "parentId": 12
	        }]
	      }, {
	        "categoryId": 15,
	        "categoryName": "Shopping",
	        "categoryType": "Expenses",
	        "subCategories": [{
	          "categoryId": 16,
	          "categoryName": "Clothing",
	          "categoryType": "Expenses",
	          "parentId": 15
	        }, {
	          "categoryId": 17,
	          "categoryName": "Electronics",
	          "categoryType": "Expenses",
	          "parentId": 15
	        }]
	      }, {
	        "categoryId": 18,
	        "categoryName": "Hobbies & Entertainment",
	        "categoryType": "Expenses"
	      }, {
	        "categoryId": 19,
	        "categoryName": "Bills & Utilities",
	        "categoryType": "Expenses",
	        "subCategories": [{
	          "categoryId": 20,
	          "categoryName": "Internet",
	          "categoryType": "Expenses",
	          "parentId": 19
	        }, {
	          "categoryId": 21,
	          "categoryName": "Mobile Phone",
	          "categoryType": "Expenses",
	          "parentId": 19
	        }, {
	          "categoryId": 22,
	          "categoryName": "Utilities",
	          "categoryType": "Expenses",
	          "parentId": 19
	        }]
	      }, {
	        "categoryId": 23,
	        "categoryName": "Income",
	        "categoryType": "Income",
	        "subCategories": [{
	          "categoryId": 24,
	          "categoryName": "Bonus",
	          "categoryType": "Income",
	          "parentId": 23
	        }, {
	          "categoryId": 25,
	          "categoryName": "Salary/Wages",
	          "categoryType": "Income",
	          "parentId": 23
	        }]
	      }, {
	        "categoryId": 26,
	        "categoryName": "Other Income",
	        "categoryType": "Income",
	        "subCategories": [{
	          "categoryId": 27,
	          "categoryName": "Interest Income",
	          "categoryType": "Income",
	          "parentId": 26
	        }, {
	          "categoryId": 28,
	          "categoryName": "Rental Income",
	          "categoryType": "Income",
	          "parentId": 26
	        }]
	      }, {
	        "categoryId": 29,
	        "categoryName": "Transfers",
	        "categoryType": "Transfer"
	      }, {
	        "categoryId": 30,
	        "categoryName": "Uncategorised",
	        "categoryType": "General"
	      }]
	    };
	
	    bbStorage.subscribe(STORAGE_KEY, function (newState) {
	      state = newState;
	    });
	
	    var persistState = function persistState(newState) {
	      bbStorage.setItem(STORAGE_KEY, newState);
	    };
	
	    var responses = {
	
	      postCategoriesRecord: [{ "status": 201, "data": { "id": 1 } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      getCategories: [{ "status": 200, "data": [{ "categoryId": 1, "categoryName": "Home", "categoryType": "Expenses", "subCategories": [{ "categoryId": 2, "categoryName": "Mortgage", "categoryType": "Expenses", "parentId": 1 }, { "categoryId": 3, "categoryName": "Rent", "categoryType": "Expenses", "parentId": 1 }] }, { "categoryId": 4, "categoryName": "Food & Drinks", "categoryType": "Expenses", "subCategories": [{ "categoryId": 5, "categoryName": "Alcohol & Bars", "categoryType": "Expenses", "parentId": 4 }, { "categoryId": 6, "categoryName": "Fast Food", "categoryType": "Expenses", "parentId": 4 }, { "categoryId": 7, "categoryName": "Groceries", "categoryType": "Expenses", "parentId": 4 }, { "categoryId": 8, "categoryName": "Restaurants", "categoryType": "Expenses", "parentId": 4 }] }, { "categoryId": 9, "categoryName": "Health & Beauty", "categoryType": "Expenses", "subCategories": [{ "categoryId": 10, "categoryName": "Beauty", "categoryType": "Expenses", "parentId": 9 }, { "categoryId": 11, "categoryName": "Health & Fitness", "categoryType": "Expenses", "parentId": 9 }] }, { "categoryId": 12, "categoryName": "Transportation", "categoryType": "Expenses", "subCategories": [{ "categoryId": 13, "categoryName": "Car", "categoryType": "Expenses", "parentId": 12 }, { "categoryId": 14, "categoryName": "Public Transport", "categoryType": "Expenses", "parentId": 12 }] }, { "categoryId": 15, "categoryName": "Shopping", "categoryType": "Expenses", "subCategories": [{ "categoryId": 16, "categoryName": "Clothing", "categoryType": "Expenses", "parentId": 15 }, { "categoryId": 17, "categoryName": "Electronics", "categoryType": "Expenses", "parentId": 15 }] }, { "categoryId": 18, "categoryName": "Hobbies & Entertainment", "categoryType": "Expenses" }, { "categoryId": 19, "categoryName": "Bills & Utilities", "categoryType": "Expenses", "subCategories": [{ "categoryId": 20, "categoryName": "Internet", "categoryType": "Expenses", "parentId": 19 }, { "categoryId": 21, "categoryName": "Mobile Phone", "categoryType": "Expenses", "parentId": 19 }, { "categoryId": 22, "categoryName": "Utilities", "categoryType": "Expenses", "parentId": 19 }] }, { "categoryId": 23, "categoryName": "Income", "categoryType": "Income", "subCategories": [{ "categoryId": 24, "categoryName": "Bonus", "categoryType": "Income", "parentId": 23 }, { "categoryId": 25, "categoryName": "Salary/Wages", "categoryType": "Income", "parentId": 23 }] }, { "categoryId": 26, "categoryName": "Other Income", "categoryType": "Income", "subCategories": [{ "categoryId": 27, "categoryName": "Interest Income", "categoryType": "Income", "parentId": 26 }, { "categoryId": 28, "categoryName": "Rental Income", "categoryType": "Income", "parentId": 26 }] }, { "categoryId": 29, "categoryName": "Transfers", "categoryType": "Transfer" }, { "categoryId": 30, "categoryName": "Uncategorised", "categoryType": "General" }] }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": null }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      getCategoriesRecord: [{ "status": 200, "data": { "categoryId": 1, "categoryName": "Home", "categoryType": "Expenses", "subCategories": [{ "categoryId": 2, "categoryName": "Mortgage", "categoryType": "Expenses", "parentId": 1 }, { "categoryId": 3, "categoryName": "Rent", "categoryType": "Expenses", "parentId": 1 }] } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": null }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      deleteCategoriesRecord: [{ "status": 204, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": null }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      putCategoriesRecord: [{ "status": 204, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": null }, { "status": 500, "data": { "message": "Description of error" } }]
	
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
	
	    var plugins = (_plugins = {}, _defineProperty(_plugins, PLUGINS_ALL, []), _defineProperty(_plugins, 'postCategoriesRecord', []), _defineProperty(_plugins, 'getCategories', []), _defineProperty(_plugins, 'getCategoriesRecord', []), _defineProperty(_plugins, 'deleteCategoriesRecord', []), _defineProperty(_plugins, 'putCategoriesRecord', []), _plugins);
	
	    if (!plugins['getCategories']) {
	      console.warn('%cThere is no "getCategories" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getCategories'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['postCategoriesRecord']) {
	      console.warn('%cThere is no "postCategoriesRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['postCategoriesRecord'].push(function (result, args, uri) {
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
	
	    if (!plugins['getCategories']) {
	      console.warn('%cThere is no "getCategories" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getCategories'].push(function (collection, args) {
	        var level = (args[0] || {}).level;
	
	        if (level !== 'ALL') {
	          // strip subcategories
	          return Object.assign(collection, {
	            data: collection.data.map(function (item) {
	              delete item.subCategories;
	              return item;
	            })
	          });
	        }
	
	        return collection;
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
	
	    function postCategoriesRecord(data, headers) {
	      var url = '' + baseUri + version + '/categories';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postCategoriesRecord', 201)).then(pluginMocks('postCategoriesRecord', [data, headers], '{version}/categories')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postCategoriesRecord'));
	    }
	
	    function getCategories(params, headers) {
	      var url = '' + baseUri + version + '/categories';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getCategories', 200)).then(pluginMocks('getCategories', [params, headers], '{version}/categories')).catch(handleError('getCategories'));
	    }
	
	    function getCategoriesRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/categories/' + id;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getCategoriesRecord', 200)).then(pluginMocks('getCategoriesRecord', [id, params, headers], '{version}/categories/{id}')).catch(handleError('getCategoriesRecord'));
	    }
	
	    function deleteCategoriesRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/categories/' + id;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deleteCategoriesRecord', 204)).then(pluginMocks('deleteCategoriesRecord', [id, params, headers], '{version}/categories/{id}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deleteCategoriesRecord'));
	    }
	
	    function putCategoriesRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/categories/' + id;
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putCategoriesRecord', 204)).then(pluginMocks('putCategoriesRecord', [id, data, headers], '{version}/categories/{id}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putCategoriesRecord'));
	    }
	
	    schemas.postCategoriesRecord = { "properties": { "categoryId": { "type": "integer", "required": true }, "transactionId": { "type": "string", "required": false }, "categoryName": { "type": "string", "required": true }, "iconLocation": { "type": "string", "required": false }, "categoryType": { "type": "string", "required": true }, "parentId": { "type": "integer", "required": false }, "subCategories": { "type": "array", "items": { "properties": { "categoryId": { "type": "integer", "required": true }, "transactionId": { "type": "string", "required": false }, "categoryName": { "type": "string", "required": true }, "iconLocation": { "type": "string", "required": false }, "categoryType": { "type": "string", "required": true }, "parentId": { "type": "integer", "required": false }, "subCategories": { "type": "array", "items": { "properties": {} }, "required": false } } }, "required": false } } };
	
	    schemas.putCategoriesRecord = { "properties": { "categoryId": { "type": "integer", "required": true }, "transactionId": { "type": "string", "required": false }, "categoryName": { "type": "string", "required": true }, "iconLocation": { "type": "string", "required": false }, "categoryType": { "type": "string", "required": true }, "parentId": { "type": "integer", "required": false }, "subCategories": { "type": "array", "items": { "properties": { "categoryId": { "type": "integer", "required": true }, "transactionId": { "type": "string", "required": false }, "categoryName": { "type": "string", "required": true }, "iconLocation": { "type": "string", "required": false }, "categoryType": { "type": "string", "required": true }, "parentId": { "type": "integer", "required": false }, "subCategories": { "type": "array", "items": { "properties": {} }, "required": false } } }, "required": false } } };
	
	    return {
	
	      postCategoriesRecord: postCategoriesRecord,
	
	      getCategories: getCategories,
	
	      getCategoriesRecord: getCategoriesRecord,
	
	      deleteCategoriesRecord: deleteCategoriesRecord,
	
	      putCategoriesRecord: putCategoriesRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=mock.data-bb-categories-management-http-ng.js.map