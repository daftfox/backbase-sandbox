(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else if(typeof define === 'function' && define.amd)
		define("mock.data-bb-places-http-ng", ["vendor-bb-angular", "lib-bb-storage-ng"], factory);
	else if(typeof exports === 'object')
		exports["mock.data-bb-places-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else
		root["mock.data-bb-places-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage-ng"]);
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
	exports.placesDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStorageNg = __webpack_require__(3);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _dataBbPlacesHttp = __webpack_require__(4);
	
	var _dataBbPlacesHttp2 = _interopRequireDefault(_dataBbPlacesHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var placesDataModuleKey = 'data-bb-places-http-ng'; /* eslint-disable */
	var placesDataKey = exports.placesDataKey = 'data-bb-places-http-ng:placesData';
	
	exports.default = _vendorBbAngular2.default.module(placesDataModuleKey, [_libBbStorageNg2.default]).provider(placesDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  return {
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	    $get: ['$q', _libBbStorageNg.bbStorageServiceKey, '$httpParamSerializer',
	    /* into */
	    (0, _dataBbPlacesHttp2.default)(config)]
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
	
	    var STORAGE_KEY = 'MOCK_STATE_placesDataModuleKey';
	    var state = {
	      "{version}/places": [{
	        "id": "32c91a0b-199e-4275-bbe9-7097af217a7a",
	        "name": "Branch 1",
	        "address": {
	          "addressLine1": "Plantage Middenlaan 43",
	          "postalCode": "1018 DC",
	          "country": "The Netherlands"
	        },
	        "latitude": 52.366886,
	        "longitude": 4.915426,
	        "placeType": "branch"
	      }, {
	        "id": "283fbe06-5184-41e2-b79e-4b80173afe57",
	        "name": "Branch 2",
	        "address": {
	          "addressLine1": "John Doe",
	          "addressLine2": "10 10th Street",
	          "addressLine3": "Suite 325",
	          "postalCode": "10013",
	          "country": "USA"
	        },
	        "latitude": 40.71816,
	        "longitude": -74.00085,
	        "placeType": "branch"
	      }, {
	        "id": "c447b1f5-993e-4a31-b7be-c7a89f69b831",
	        "name": "Branch 3",
	        "address": {
	          "addressLine1": "Ardenham Court",
	          "addressLine2": "app 6",
	          "addressLine3": "1 Oxford Road",
	          "postalCode": "HP19 8HT",
	          "country": "United Kingdom"
	        },
	        "latitude": 40.72847,
	        "longitude": -74.0054,
	        "placeType": "branch"
	      }, {
	        "id": "f7ccb9d0-1810-48e7-952b-5c8a663915f0",
	        "name": "Branch 4",
	        "address": {
	          "addressLine1": "MONKEY MAN GROUP",
	          "addressLine2": "Suite 150",
	          "addressLine3": "Floor 3  120 Wandaloo ESP",
	          "postalCode": "3184",
	          "country": "Australia"
	        },
	        "latitude": 40.72872,
	        "longitude": -74.00524,
	        "placeType": "branch"
	      }, {
	        "id": "6c8c9efd-a243-48b9-a81b-29ab1ea8f550",
	        "name": "Branch 5",
	        "address": {
	          "addressLine1": "INIT building",
	          "addressLine2": "Jacob Bontiusplaats 9",
	          "postalCode": "1018 LL",
	          "country": "The Netherlands"
	        },
	        "latitude": 40.72152,
	        "longitude": -73.99574,
	        "placeType": "branch"
	      }, {
	        "id": "0f1e2a3a-cf3e-4b18-86b4-4f1919b745bf",
	        "name": "Branch 6",
	        "address": {
	          "addressLine1": "195 Grand St",
	          "postalCode": "10013",
	          "country": "USA"
	        },
	        "latitude": 40.71909,
	        "longitude": -73.9971,
	        "placeType": "branch"
	      }, {
	        "id": "a956dbc7-a84d-46fe-91c3-bc40561ffdee",
	        "name": "XCEL FCU",
	        "address": {
	          "addressLine1": "Jane Doe",
	          "addressLine2": "26 Federal Plaza",
	          "postalCode": "10278",
	          "country": "USA"
	        },
	        "latitude": 40.71558,
	        "longitude": -74.00417,
	        "placeType": "branch"
	      }, {
	        "id": "d6cdb083-ea55-4760-9ca7-10b1ce0792fd",
	        "name": "Justice FCU",
	        "address": {
	          "addressLine1": "26 Federal Plaza",
	          "postalCode": "10278",
	          "country": "USA"
	        },
	        "latitude": 40.71558,
	        "longitude": -74.00417,
	        "placeType": "branch"
	      }, {
	        "id": "40c154d3-344b-48c9-966d-23aaf7369c1f",
	        "name": "7-ELEVEN",
	        "address": {
	          "addressLine1": "135 W 3rd St",
	          "postalCode": "10012",
	          "country": "USA"
	        },
	        "latitude": 40.73101,
	        "longitude": -74.00079,
	        "placeType": "branch"
	      }, {
	        "id": "82cd9c3b-2c91-4631-9b25-71281179fa0d",
	        "name": "Chrystie Garage",
	        "address": {
	          "addressLine1": "89 Chrysie St",
	          "addressLine2": "p.o. box 213",
	          "postalCode": "10002",
	          "country": "USA"
	        },
	        "latitude": 40.7177,
	        "longitude": -73.99442,
	        "placeType": "branch"
	      }, {
	        "id": "0edb7a6e-8969-493e-9787-90fe967843ce",
	        "name": "Gryfice",
	        "address": {
	          "addressLine1": "Akacjowa",
	          "addressLine2": "Gryfice",
	          "country": "Poland"
	        },
	        "latitude": 53.9127245,
	        "longitude": 15.2098384,
	        "placeType": "branch"
	      }]
	    };
	
	    bbStorage.subscribe(STORAGE_KEY, function (newState) {
	      state = newState;
	    });
	
	    var persistState = function persistState(newState) {
	      bbStorage.setItem(STORAGE_KEY, newState);
	    };
	
	    var responses = {
	
	      getPlaces: [{ "status": 200, "data": [{ "id": "32c91a0b-199e-4275-bbe9-7097af217a7a", "name": "Branch 1", "address": { "addressLine1": "Plantage Middenlaan 43", "postalCode": "1018 DC", "country": "The Netherlands" }, "latitude": 52.366886, "longitude": 4.915426, "placeType": "branch" }, { "id": "283fbe06-5184-41e2-b79e-4b80173afe57", "name": "Branch 2", "address": { "addressLine1": "John Doe", "addressLine2": "10 10th Street", "addressLine3": "Suite 325", "postalCode": "10013", "country": "USA" }, "latitude": 40.71816, "longitude": -74.00085, "placeType": "branch" }, { "id": "c447b1f5-993e-4a31-b7be-c7a89f69b831", "name": "Branch 3", "address": { "addressLine1": "Ardenham Court", "addressLine2": "app 6", "addressLine3": "1 Oxford Road", "postalCode": "HP19 8HT", "country": "United Kingdom" }, "latitude": 40.72847, "longitude": -74.0054, "placeType": "branch" }, { "id": "f7ccb9d0-1810-48e7-952b-5c8a663915f0", "name": "Branch 4", "address": { "addressLine1": "MONKEY MAN GROUP", "addressLine2": "Suite 150", "addressLine3": "Floor 3  120 Wandaloo ESP", "postalCode": "3184", "country": "Australia" }, "latitude": 40.72872, "longitude": -74.00524, "placeType": "branch" }, { "id": "6c8c9efd-a243-48b9-a81b-29ab1ea8f550", "name": "Branch 5", "address": { "addressLine1": "INIT building", "addressLine2": "Jacob Bontiusplaats 9", "postalCode": "1018 LL", "country": "The Netherlands" }, "latitude": 40.72152, "longitude": -73.99574, "placeType": "branch" }, { "id": "0f1e2a3a-cf3e-4b18-86b4-4f1919b745bf", "name": "Branch 6", "address": { "addressLine1": "195 Grand St", "postalCode": "10013", "country": "USA" }, "latitude": 40.71909, "longitude": -73.9971, "placeType": "branch" }, { "id": "a956dbc7-a84d-46fe-91c3-bc40561ffdee", "name": "XCEL FCU", "address": { "addressLine1": "Jane Doe", "addressLine2": "26 Federal Plaza", "postalCode": "10278", "country": "USA" }, "latitude": 40.71558, "longitude": -74.00417, "placeType": "branch" }, { "id": "d6cdb083-ea55-4760-9ca7-10b1ce0792fd", "name": "Justice FCU", "address": { "addressLine1": "26 Federal Plaza", "postalCode": "10278", "country": "USA" }, "latitude": 40.71558, "longitude": -74.00417, "placeType": "branch" }, { "id": "40c154d3-344b-48c9-966d-23aaf7369c1f", "name": "7-ELEVEN", "address": { "addressLine1": "135 W 3rd St", "postalCode": "10012", "country": "USA" }, "latitude": 40.73101, "longitude": -74.00079, "placeType": "branch" }, { "id": "82cd9c3b-2c91-4631-9b25-71281179fa0d", "name": "Chrystie Garage", "address": { "addressLine1": "89 Chrysie St", "addressLine2": "p.o. box 213", "postalCode": "10002", "country": "USA" }, "latitude": 40.7177, "longitude": -73.99442, "placeType": "branch" }, { "id": "0edb7a6e-8969-493e-9787-90fe967843ce", "name": "Gryfice", "address": { "addressLine1": "Akacjowa", "addressLine2": "Gryfice", "country": "Poland" }, "latitude": 53.9127245, "longitude": 15.2098384, "placeType": "branch" }] }, { "status": 400, "data": null }, { "status": 500, "data": null }]
	
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
	
	    var plugins = (_plugins = {}, _defineProperty(_plugins, PLUGINS_ALL, []), _defineProperty(_plugins, 'getPlaces', []), _plugins);
	
	    if (!plugins['getPlaces']) {
	      console.warn('%cThere is no "getPlaces" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPlaces'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
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
	
	    function getPlaces(params, headers) {
	      var url = '' + baseUri + version + '/places';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getPlaces', 200)).then(pluginMocks('getPlaces', [params, headers], '{version}/places')).catch(handleError('getPlaces'));
	    }
	
	    return {
	
	      getPlaces: getPlaces,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=mock.data-bb-places-http-ng.js.map