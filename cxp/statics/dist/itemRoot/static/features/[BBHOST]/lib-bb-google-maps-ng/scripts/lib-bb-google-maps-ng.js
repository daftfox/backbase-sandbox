(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-google-maps-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-google-maps-ng"] = factory(require("vendor-bb-angular"));
	else
		root["lib-bb-google-maps-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_16__) {
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
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15);

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(16);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _googleMapsHelper = __webpack_require__(17);
	
	var _googleMapsHelper2 = _interopRequireDefault(_googleMapsHelper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module lib-bb-google-maps-ng
	 * @description Library to load the Google Maps API (not more than once)
	 */
	
	var moduleKey = 'lib-bb-google-maps-ng';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, []).factory('getGoogleMapsApi', ['$q', _googleMapsHelper2.default]).name;

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* global google, document, window */
	
	var Promise = void 0;
	
	function loadGoogleMapsApi(url, mapKey, callback) {
	  var cbFuncName = 'googleMapsAPILoad';
	
	  // Ugly global function -- cannot be avoided...
	  window[cbFuncName] = function () {
	    callback();
	    delete window[cbFuncName];
	  };
	
	  var script = document.createElement('script');
	  script.type = 'text/javascript';
	  script.async = 'true';
	  script.src = url + '/js?libraries=geometry,places&key=' + mapKey + '&callback=' + cbFuncName;
	
	  document.querySelector('head').appendChild(script);
	}
	
	var getGoogleMapsApiSingleton = function () {
	  var deferred = void 0;
	
	  return function getGoogleMapsApi(url, mapKey) {
	    if (deferred) {
	      return deferred.promise;
	    }
	
	    deferred = Promise.defer();
	
	    loadGoogleMapsApi(url, mapKey, function () {
	      // This promise is resolved when the google maps API is loaded, which
	      // means the google.maps object is available on window.
	      deferred.resolve(google.maps);
	    });
	
	    return deferred.promise;
	  };
	}();
	
	/**
	 * Load and get a reference to the Google Maps API.  The API is only loaded
	 * once on the page.
	 *
	 * @name getGoogleMapsApi
	 * @type {function}
	 * @param {Promise} $q Instance of the Promise API
	 * @returns {function} A function that returns a promise that will resolve as
	 * soon as Google Maps is loaded.
	 */
	var getGoogleMapsApi = function getGoogleMapsApi($q) {
	  Promise = $q;
	
	  return getGoogleMapsApiSingleton;
	};
	
	exports.default = getGoogleMapsApi;

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-bb-google-maps-ng.js.map