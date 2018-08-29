(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else if(typeof define === 'function' && define.amd)
		define("mock.data-bb-batches-http-ng", ["vendor-bb-angular", "lib-bb-storage-ng"], factory);
	else if(typeof exports === 'object')
		exports["mock.data-bb-batches-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else
		root["mock.data-bb-batches-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage-ng"]);
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
	exports.batchesDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStorageNg = __webpack_require__(3);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _dataBbBatchesHttp = __webpack_require__(4);
	
	var _dataBbBatchesHttp2 = _interopRequireDefault(_dataBbBatchesHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var batchesDataModuleKey = 'data-bb-batches-http-ng'; /* eslint-disable */
	var batchesDataKey = exports.batchesDataKey = 'data-bb-batches-http-ng:batchesData';
	
	exports.default = _vendorBbAngular2.default.module(batchesDataModuleKey, [_libBbStorageNg2.default]).provider(batchesDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  return {
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	    $get: ['$q', _libBbStorageNg.bbStorageServiceKey, '$httpParamSerializer',
	    /* into */
	    (0, _dataBbBatchesHttp2.default)(config)]
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
	
	    var STORAGE_KEY = 'MOCK_STATE_batchesDataModuleKey';
	    var state = {
	      "{version}/batches/legalentity/{legalEntityId}": [{
	        "id": "62851fcc-7c22-11e6-ae22-56b6b6499611",
	        "fileName": "Salary_Paymets_August_004.xml",
	        "fileSize": 45783,
	        "creationDate": "2016-09-16T12:34:23Z",
	        "creationUser": {
	          "firstName": "Kelly",
	          "lastName": "Slater"
	        },
	        "status": "UNAUTHORIZED",
	        "type": "SEPA CT",
	        "reference": "dj38dy2uh",
	        "amount": 78992,
	        "currency": "EUR",
	        "executionDate": "2016-12-12",
	        "paymentsCount": 4234
	      }, {
	        "id": "549278ce-7847-4c26-853d-c1c1cea9ac32",
	        "fileName": "Bulk_august_3.csv",
	        "fileSize": 112323,
	        "creationDate": "2015-11-04T18:00:11Z",
	        "creationUser": {
	          "lastName": "Moriarty"
	        },
	        "status": "PARTIALLY_AUTHORIZED",
	        "type": "SEPA CT",
	        "reference": "bj8403KDJHjjf8fbh",
	        "amount": 67862223,
	        "currency": "EUR",
	        "executionDate": "2017-01-23",
	        "paymentsCount": 33
	      }, {
	        "id": "1d67c99f-595f-41d4-85b1-b4cd1e8eb5d9",
	        "fileName": "Bulk_payments.csv",
	        "fileSize": 3221,
	        "creationDate": "2015-12-24T10:01:02Z",
	        "creationUser": {
	          "firstName": "Mick",
	          "lastName": "Fanning"
	        },
	        "status": "AUTHORIZED",
	        "type": "SEPA CT",
	        "reference": "SH2732hdh33JjjdhNVow847202asd32BDhd",
	        "amount": 12,
	        "currency": "EUR",
	        "executionDate": "2016-12-31",
	        "paymentsCount": 1
	      }],
	      "{version}/batches/legalentity/{legalEntityId}/authorizations": [{
	        "id": "62851fcc-7c22-11e6-ae22-56b6b6499611",
	        "fileName": "Salary_Paymets_August_004.xml",
	        "fileSize": 45783,
	        "creationDate": "2016-09-16T12:34:23Z",
	        "creationUser": {
	          "firstName": "Kelly",
	          "lastName": "Slater"
	        },
	        "status": "UNAUTHORIZED",
	        "type": "SEPA CT",
	        "reference": "dj38dy2uh",
	        "amount": 78992,
	        "currency": "EUR",
	        "executionDate": "2016-12-12",
	        "paymentsCount": 4234
	      }, {
	        "id": "549278ce-7847-4c26-853d-c1c1cea9ac32",
	        "fileName": "Bulk_august_3.csv",
	        "fileSize": 112323,
	        "creationDate": "2015-11-04T18:00:11Z",
	        "creationUser": {
	          "lastName": "Moriarty"
	        },
	        "status": "PARTIALLY_AUTHORIZED",
	        "type": "SEPA CT",
	        "reference": "bj8403KDJHjjf8fbh",
	        "amount": 67862223,
	        "currency": "EUR",
	        "executionDate": "2017-01-23",
	        "paymentsCount": 33
	      }],
	      "{version}/batches/legalentity/{legalEntityId}/{batchId}/payments": [{
	        "id": "fd18f72d-ff05-4481-9429-19963b32dc65",
	        "creditAccountIdentification": {
	          "scheme": "ID",
	          "identification": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4691",
	          "counterpartyName": "Hello World"
	        },
	        "amount": "10.29",
	        "currency": "EUR",
	        "description": "Return a debt",
	        "transactionReferece": "gasdlf372khsd9323"
	      }, {
	        "id": "a8a014ae-3af2-4ab7-a3ea-6e95938fbd69",
	        "creditAccountIdentification": {
	          "scheme": "ID",
	          "identification": "65fac8be-dd7b-48c2-97e3-66301437448d",
	          "counterpartyName": "Very Big Company"
	        },
	        "amount": "100.00",
	        "currency": "EUR",
	        "description": "",
	        "transactionReferece": "3hk23723hisdgaifugadf"
	      }, {
	        "id": "e2a12438-3890-4fb0-b0a7-607d3d843a23",
	        "creditAccountIdentification": {
	          "scheme": "IBAN",
	          "identification": "NL91ABNA0417164300",
	          "counterpartyName": "Another Counterparty Name"
	        },
	        "amount": "5000.55",
	        "currency": "EUR",
	        "description": "Salary",
	        "transactionReferece": "HLKDS83hdhs8HDS482Ghsh3"
	      }]
	    };
	
	    bbStorage.subscribe(STORAGE_KEY, function (newState) {
	      state = newState;
	    });
	
	    var persistState = function persistState(newState) {
	      bbStorage.setItem(STORAGE_KEY, newState);
	    };
	
	    var responses = {
	
	      getBatchesLegalentityRecord: [{ "status": 200, "data": [{ "id": "62851fcc-7c22-11e6-ae22-56b6b6499611", "fileName": "Salary_Paymets_August_004.xml", "fileSize": 45783, "creationDate": "2016-09-16T12:34:23Z", "creationUser": { "firstName": "Kelly", "lastName": "Slater" }, "status": "UNAUTHORIZED", "type": "SEPA CT", "reference": "dj38dy2uh", "amount": 78992, "currency": "EUR", "executionDate": "2016-12-12", "paymentsCount": 4234 }, { "id": "549278ce-7847-4c26-853d-c1c1cea9ac32", "fileName": "Bulk_august_3.csv", "fileSize": 112323, "creationDate": "2015-11-04T18:00:11Z", "creationUser": { "lastName": "Moriarty" }, "status": "PARTIALLY_AUTHORIZED", "type": "SEPA CT", "reference": "bj8403KDJHjjf8fbh", "amount": 67862223, "currency": "EUR", "executionDate": "2017-01-23", "paymentsCount": 33 }, { "id": "1d67c99f-595f-41d4-85b1-b4cd1e8eb5d9", "fileName": "Bulk_payments.csv", "fileSize": 3221, "creationDate": "2015-12-24T10:01:02Z", "creationUser": { "firstName": "Mick", "lastName": "Fanning" }, "status": "AUTHORIZED", "type": "SEPA CT", "reference": "SH2732hdh33JjjdhNVow847202asd32BDhd", "amount": 12, "currency": "EUR", "executionDate": "2016-12-31", "paymentsCount": 1 }] }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      postBatchesLegalentityRecord: [{ "status": 201, "data": { "id": "15aae84c-7bf7-11e6-ae22-56b6b6499611" } }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      getBatchesLegalentityAuthorizations: [{ "status": 200, "data": [{ "id": "62851fcc-7c22-11e6-ae22-56b6b6499611", "fileName": "Salary_Paymets_August_004.xml", "fileSize": 45783, "creationDate": "2016-09-16T12:34:23Z", "creationUser": { "firstName": "Kelly", "lastName": "Slater" }, "status": "UNAUTHORIZED", "type": "SEPA CT", "reference": "dj38dy2uh", "amount": 78992, "currency": "EUR", "executionDate": "2016-12-12", "paymentsCount": 4234 }, { "id": "549278ce-7847-4c26-853d-c1c1cea9ac32", "fileName": "Bulk_august_3.csv", "fileSize": 112323, "creationDate": "2015-11-04T18:00:11Z", "creationUser": { "lastName": "Moriarty" }, "status": "PARTIALLY_AUTHORIZED", "type": "SEPA CT", "reference": "bj8403KDJHjjf8fbh", "amount": 67862223, "currency": "EUR", "executionDate": "2017-01-23", "paymentsCount": 33 }] }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      getBatchesLegalentityPayments: [{ "status": 200, "data": [{ "id": "fd18f72d-ff05-4481-9429-19963b32dc65", "creditAccountIdentification": { "scheme": "ID", "identification": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4691", "counterpartyName": "Hello World" }, "amount": "10.29", "currency": "EUR", "description": "Return a debt", "transactionReferece": "gasdlf372khsd9323" }, { "id": "a8a014ae-3af2-4ab7-a3ea-6e95938fbd69", "creditAccountIdentification": { "scheme": "ID", "identification": "65fac8be-dd7b-48c2-97e3-66301437448d", "counterpartyName": "Very Big Company" }, "amount": "100.00", "currency": "EUR", "description": "", "transactionReferece": "3hk23723hisdgaifugadf" }, { "id": "e2a12438-3890-4fb0-b0a7-607d3d843a23", "creditAccountIdentification": { "scheme": "IBAN", "identification": "NL91ABNA0417164300", "counterpartyName": "Another Counterparty Name" }, "amount": "5000.55", "currency": "EUR", "description": "Salary", "transactionReferece": "HLKDS83hdhs8HDS482Ghsh3" }] }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      postBatchesLegalentityAuthorizationsRecord: [{ "status": 204, "data": null }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 405, "data": null }, { "status": 500, "data": null }],
	
	      postBatchesLegalentityRejectionsRecord: [{ "status": 204, "data": null }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 405, "data": null }, { "status": 500, "data": null }]
	
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
	
	    var plugins = (_plugins = {}, _defineProperty(_plugins, PLUGINS_ALL, []), _defineProperty(_plugins, 'getBatchesLegalentityRecord', []), _defineProperty(_plugins, 'postBatchesLegalentityRecord', []), _defineProperty(_plugins, 'getBatchesLegalentityAuthorizations', []), _defineProperty(_plugins, 'getBatchesLegalentityPayments', []), _defineProperty(_plugins, 'postBatchesLegalentityAuthorizationsRecord', []), _defineProperty(_plugins, 'postBatchesLegalentityRejectionsRecord', []), _plugins);
	
	    if (!plugins['getBatchesLegalentityRecord']) {
	      console.warn('%cThere is no "getBatchesLegalentityRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getBatchesLegalentityRecord'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['postBatchesLegalentityRecord']) {
	      console.warn('%cThere is no "postBatchesLegalentityRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['postBatchesLegalentityRecord'].push(function (result, args, uri) {
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
	
	    if (!plugins['getBatchesLegalentityAuthorizations']) {
	      console.warn('%cThere is no "getBatchesLegalentityAuthorizations" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getBatchesLegalentityAuthorizations'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['getBatchesLegalentityPayments']) {
	      console.warn('%cThere is no "getBatchesLegalentityPayments" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getBatchesLegalentityPayments'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['getBatchesLegalentityRecord']) {
	      console.warn('%cThere is no "getBatchesLegalentityRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getBatchesLegalentityRecord'].push(function anonymous(result, args
	      /**/) {
	
	        var params = args[args.length - 2] || {};
	        var orderDirection = params.direction === 'ASC' ? 1 : -1;
	        var orderBy = params.orderBy;
	        var data = result.data;
	
	        if (orderBy) {
	          var getValueFn = function getValueFn(propName, obj) {
	            return obj[propName];
	          };
	          var compareFn = function compareFn(a, b) {
	            var aValue = getValueFn(orderBy, a);
	            var bValue = getValueFn(orderBy, b);
	            if (aValue === bValue) {
	              return 0;
	            }
	            return aValue > bValue ? orderDirection : -orderDirection;
	          };
	
	          data = [].concat(data).sort(compareFn);
	        }
	        return Object.assign({}, result, { data: data });
	      });
	    }
	
	    if (!plugins['getBatchesLegalentityAuthorizations']) {
	      console.warn('%cThere is no "getBatchesLegalentityAuthorizations" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getBatchesLegalentityAuthorizations'].push(function anonymous(result, args
	      /**/) {
	
	        var params = args[args.length - 2] || {};
	        var orderDirection = params.direction === 'ASC' ? 1 : -1;
	        var orderBy = params.orderBy;
	        var data = result.data;
	
	        if (orderBy) {
	          var getValueFn = function getValueFn(propName, obj) {
	            return obj[propName];
	          };
	          var compareFn = function compareFn(a, b) {
	            var aValue = getValueFn(orderBy, a);
	            var bValue = getValueFn(orderBy, b);
	            if (aValue === bValue) {
	              return 0;
	            }
	            return aValue > bValue ? orderDirection : -orderDirection;
	          };
	
	          data = [].concat(data).sort(compareFn);
	        }
	        return Object.assign({}, result, { data: data });
	      });
	    }
	
	    if (!plugins['getBatchesLegalentityRecord']) {
	      console.warn('%cThere is no "getBatchesLegalentityRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getBatchesLegalentityRecord'].push(function (result, args) {
	        var data = result.data;
	        var totalCount = data.length;
	        var headers = function headers(header) {
	          return header === 'x-total-count' ? totalCount : result.headers(header);
	        };
	
	        var params = args[args.length - 2] || {};
	        var size = parseInt(params.size, 10);
	        if (!isNaN(size)) {
	          var from = parseInt(params.from, 10) || 0;
	          var startIndex = from * size;
	
	          data = data.slice(startIndex, startIndex + size);
	        }
	
	        return Object.assign({}, result, { headers: headers, data: data });
	      });
	    }
	
	    if (!plugins['getBatchesLegalentityAuthorizations']) {
	      console.warn('%cThere is no "getBatchesLegalentityAuthorizations" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getBatchesLegalentityAuthorizations'].push(function (result, args) {
	        var data = result.data;
	        var totalCount = data.length;
	        var headers = function headers(header) {
	          return header === 'x-total-count' ? totalCount : result.headers(header);
	        };
	
	        var params = args[args.length - 2] || {};
	        var size = parseInt(params.size, 10);
	        if (!isNaN(size)) {
	          var from = parseInt(params.from, 10) || 0;
	          var startIndex = from * size;
	
	          data = data.slice(startIndex, startIndex + size);
	        }
	
	        return Object.assign({}, result, { headers: headers, data: data });
	      });
	    }
	
	    if (!plugins['getBatchesLegalentityPayments']) {
	      console.warn('%cThere is no "getBatchesLegalentityPayments" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getBatchesLegalentityPayments'].push(function (result, args) {
	        var data = result.data;
	        var totalCount = data.length;
	        var headers = function headers(header) {
	          return header === 'x-total-count' ? totalCount : result.headers(header);
	        };
	
	        var params = args[args.length - 2] || {};
	        var size = parseInt(params.size, 10);
	        if (!isNaN(size)) {
	          var from = parseInt(params.from, 10) || 0;
	          var startIndex = from * size;
	
	          data = data.slice(startIndex, startIndex + size);
	        }
	
	        return Object.assign({}, result, { headers: headers, data: data });
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
	
	    function getBatchesLegalentityRecord(legalEntityId, params, headers) {
	      var url = '' + baseUri + version + '/batches/legalentity/' + legalEntityId;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getBatchesLegalentityRecord', 200)).then(pluginMocks('getBatchesLegalentityRecord', [legalEntityId, params, headers], '{version}/batches/legalentity/{legalEntityId}')).catch(handleError('getBatchesLegalentityRecord'));
	    }
	
	    function postBatchesLegalentityRecord(legalEntityId, data, headers) {
	      var url = '' + baseUri + version + '/batches/legalentity/' + legalEntityId;
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postBatchesLegalentityRecord', 201)).then(pluginMocks('postBatchesLegalentityRecord', [legalEntityId, data, headers], '{version}/batches/legalentity/{legalEntityId}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postBatchesLegalentityRecord'));
	    }
	
	    function getBatchesLegalentityAuthorizations(legalEntityId, params, headers) {
	      var url = '' + baseUri + version + '/batches/legalentity/' + legalEntityId + '/authorizations';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getBatchesLegalentityAuthorizations', 200)).then(pluginMocks('getBatchesLegalentityAuthorizations', [legalEntityId, params, headers], '{version}/batches/legalentity/{legalEntityId}/authorizations')).catch(handleError('getBatchesLegalentityAuthorizations'));
	    }
	
	    function getBatchesLegalentityPayments(legalEntityId, batchId, params, headers) {
	      var url = '' + baseUri + version + '/batches/legalentity/' + legalEntityId + '/' + batchId + '/payments';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getBatchesLegalentityPayments', 200)).then(pluginMocks('getBatchesLegalentityPayments', [legalEntityId, batchId, params, headers], '{version}/batches/legalentity/{legalEntityId}/{batchId}/payments')).catch(handleError('getBatchesLegalentityPayments'));
	    }
	
	    function postBatchesLegalentityAuthorizationsRecord(legalEntityId, batchId, data, headers) {
	      var url = '' + baseUri + version + '/batches/legalentity/' + legalEntityId + '/authorizations/' + batchId;
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postBatchesLegalentityAuthorizationsRecord', 204)).then(pluginMocks('postBatchesLegalentityAuthorizationsRecord', [legalEntityId, batchId, data, headers], '{version}/batches/legalentity/{legalEntityId}/authorizations/{batchId}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postBatchesLegalentityAuthorizationsRecord'));
	    }
	
	    function postBatchesLegalentityRejectionsRecord(legalEntityId, batchId, data, headers) {
	      var url = '' + baseUri + version + '/batches/legalentity/' + legalEntityId + '/rejections/' + batchId;
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postBatchesLegalentityRejectionsRecord', 204)).then(pluginMocks('postBatchesLegalentityRejectionsRecord', [legalEntityId, batchId, data, headers], '{version}/batches/legalentity/{legalEntityId}/rejections/{batchId}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postBatchesLegalentityRejectionsRecord'));
	    }
	
	    return {
	
	      getBatchesLegalentityRecord: getBatchesLegalentityRecord,
	
	      postBatchesLegalentityRecord: postBatchesLegalentityRecord,
	
	      getBatchesLegalentityAuthorizations: getBatchesLegalentityAuthorizations,
	
	      getBatchesLegalentityPayments: getBatchesLegalentityPayments,
	
	      postBatchesLegalentityAuthorizationsRecord: postBatchesLegalentityAuthorizationsRecord,
	
	      postBatchesLegalentityRejectionsRecord: postBatchesLegalentityRejectionsRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=mock.data-bb-batches-http-ng.js.map