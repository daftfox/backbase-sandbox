(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-intent-ng"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-challenge-ng", ["vendor-bb-angular", "lib-bb-intent-ng"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-challenge-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-intent-ng"));
	else
		root["lib-bb-challenge-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-intent-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
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

	module.exports = __webpack_require__(4);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bbChallengeKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(5);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbIntentNg = __webpack_require__(6);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _interceptors = __webpack_require__(7);
	
	var _interceptors2 = _interopRequireDefault(_interceptors);
	
	var _configuration = __webpack_require__(10);
	
	var _configuration2 = _interopRequireDefault(_configuration);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module lib-bb-challenge
	 * @description Library to provide a support for the MFA to a widget.
	 * When the library is included in a data-module  it intercepts HTTP 401
	 * unauthorized/challenge responses from the server and calls the specified widget.
	 *
	 *
	 * Please note, the library has following limitations:
	 * - It can only work with one request at a time.
	 * - It can only work if the intent is handled on the same page.
	 * On web, that could be a modal. On mobile if it navigates away,
	 * the original page would need to be "retained".
	 *
	 * The library relies on a challenge definition in a RAML specification. E.g. if it looks like this:
	 *
	 * ```
	 *  challengable:
	 *    headers:
	 *      X-MFA:
	 *        description: Challenge payload response
	 *        required: false
	 *        example: sms challenge="123456789"
	 *    responses:
	 *      401:
	 *        description: Unauthorized
	 *        headers:
	 *          WWW-Authenticate:
	 *            description: Comma separated challenges
	 *            required: false
	 *            example: sms challenge="", pki challenge="Z8nlwZe0daUNWCWIbfJe3iIgauh"
	 *        body:
	 *          application/json:
	 *            type: Unauthorized-Error
	 * ```
	 *
	 * The flow will be:
	 * * Initial request sent by a widget (e.g. new payment, which should have step up authentication);
	 * * Service responds with `401` status and `WWW-Authenticate` header,
	 * it will require a specific challenge type, e.g. `"sms challenge"`;
	 * * Library triggers intent and passes the information to the mediator-widget.
	 * I.e. intent payload will be `{'sms challenge': ''}`
	 * * Then the mediator-widget will send the intent response: `{'sms challenge':'123456789'}`
	 * * This will be result in a second request to the backend,
	 * which will contain a header: `X-MFA: sms challenge="123456789"`
	 *
	 * @example
	 * The best place to inject library is the data module of capability that requires MFA
	 * // index.js
	 *
	 * // Import lib-bb-challenge-ng
	 * import bbChallengeModuleKey, {
	 *   bbChallengeKey,
	 * } from 'lib-bb-challenge-ng';
	 *
	 * // Inject it in your data module
	 * export default angular
	 *   .module(moduleKey, [
	 *     cXPAuthenticationDataModuleKey,
	 *     ...
	 *     bbChallengeModuleKey,
	 *   ])
	 *   .provider(cXPAuthenticationDataKey, [() => {
	 *     ...
	 *     return {
	 *       $get: [
	 *         bbChallengeKey,
	 *         // Into
	 *         cXPAuthenticationData,
	 *       ],
	 *     }
	 *   }])
	 *   .config(['$httpProvider', ($httpProvider) => {
	 *     // Configure $http service to use challenge interceptor
	 *     $httpProvider.interceptors.push(bbChallengeKey);
	 *   }])
	 */
	var moduleKey = 'lib-bb-challenge-ng';
	
	/**
	 * The dependency injection key for the BbChallenge Service
	 * @name bbChallengeKey
	 * @type {string}
	 */
	var bbChallengeKey = exports.bbChallengeKey = moduleKey + ':challenge';
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbIntentNg2.default])
	/**
	 * @name BbChallengeProvider
	 * @ngkey lib-bb-challenge-ng:challengeProvider
	 * @type {object}
	 * @description A provider that allows configuration
	 * of the challenge type/intent key map.
	 * @example
	 * // General usage:
	 * angular.module(...)
	 *   .config([
	 *     `${bbChallengeKey}Provider`,
	 *     (challengeProvider) => {
	 *       challengeProvider.setChallengeToIntent(...);
	 *     }
	 *   ]);
	 *
	 * export default [
	 *   ['lib-bb-challenge-ng:challengeProvider', (challenges) => {
	 *       challenges.setChallengeToIntent({sms: 'some.intent'});
	 *   }],
	 * ];
	 */
	.provider(bbChallengeKey, function () {
	  var challengeToIntent = _configuration2.default;
	
	  return {
	    /**
	     * @name BbChallengeProvider#setChallengeToIntent
	     * @type {function}
	     * @description The setter for setChallengeToIntent mapping
	     * which can be customized in config-bb-providers
	     * @param {object.<string>} routes A map of challenge types to intent keys
	     */
	    setChallengeToIntent: function setChallengeToIntent(challengeToIntentObject) {
	      if (challengeToIntentObject && challengeToIntentObject.constructor === Object) {
	        challengeToIntent = Object.assign(_configuration2.default, challengeToIntentObject);
	      }
	    },
	
	    /**
	     * @name BbChallengeProvider#$get
	     * @type {function}
	     * @description $get method of the provider for instantiation
	     * @returns {Interceptor} Challenge service
	     */
	    $get: [_libBbIntentNg.bbIntentKey, '$injector', '$q', function (bbIntent, $injector, Promise) {
	      return (0, _interceptors2.default)(bbIntent, $injector, Promise, challengeToIntent);
	    }]
	  };
	}).name;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(8);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _constants = __webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	exports.default = function (bbIntent, $injector, Promise, challengeToIntent) {
	  var intents = {};
	  var noop = function noop() {};
	
	  var resolveIntent = noop;
	  // create all the intents upfront
	  Object.keys(challengeToIntent).forEach(function (key) {
	    var intentKey = challengeToIntent[key];
	
	    intents[intentKey] = bbIntent.create(intentKey, function (intentResponse) {
	      resolveIntent(intentResponse);
	    });
	  });
	
	  /**
	   * @name interceptor
	   * @description The object to handle interception of challengable responses.
	   * for more details
	   * @type {Interceptor}
	   */
	  var interceptor = {
	    /**
	     * @name interceptor#responseError
	     * @type {function}
	     * @description This function determines if the request is "challengable" or not.
	     * It also implements handling of a requests with challenge.
	     * @param {object} response  original http response object
	     * @returns {Promise} Returns the response object as a promise.
	     */
	    responseError: function responseError(response) {
	      var header = response.headers(_constants.challengeResponse.HEADER_ATTRIBUTE) || response.config.headers[_constants.challengeResponse.HEADER_ATTRIBUTE];
	      var $http = $injector.get('$http');
	
	      if (!_utils2.default.isChallengeResponse(response.status, header)) {
	        return Promise.reject(response);
	      }
	
	      return new Promise(function (newResolve) {
	        var intentKey = challengeToIntent[_utils2.default.getChallengeTypeKey(header)];
	        resolveIntent = newResolve;
	        intents[intentKey](_utils2.default.parseChallengeHeader(header));
	      }).then(function (intentResponse) {
	        var headerResult = _utils2.default.processChallengeResponse(intentResponse);
	        var customHeaders = _defineProperty({}, _constants.challengeRequest.HEADER_ATTRIBUTE, headerResult);
	        // eslint-disable-next-line no-param-reassign
	        delete response.config.headers[_constants.challengeResponse.HEADER_ATTRIBUTE];
	
	        Object.assign(response.config.headers, customHeaders);
	        resolveIntent = noop;
	      }).then(function () {
	        return $http(response.config);
	      });
	    }
	  };
	
	  return interceptor;
	};
	
	/**
	 * @typedef {object} Interceptor
	 * @description The object to handle interception. Please
	 * see [angularjs interceptiors docs](https://docs.angularjs.org/api/ng/service/$http#interceptors)
	 * for more details on other types of interceptors.
	 * @property {ResponseError} responseError
	 */
	
	/**
	 * @typedef {function} ResponseError
	 * @description The interceptor gets called when a previous
	 * interceptor threw an error or resolved with a rejection.
	 * @param {object} _response  interceptors get called with http response object
	 * @returns {Promise} Returns the response object as a promise
	 */

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _constants = __webpack_require__(9);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * @name getChallengeTypeKey
	 * @type {function}
	 * @description Helper to get the challenge type key
	 * from the challengeType string
	 * @inner
	 * @param {string} challengeType string with the challenge type
	 * @returns {string} challengeTypeKey
	 */
	var getChallengeTypeKey = function getChallengeTypeKey(challengeType) {
	  return challengeType.split(' ')[0];
	};
	
	/**
	 * @name isChallengeStatus
	 * @type {function}
	 * @inner
	 * @description A helper to determine if
	 * the response status is the challenge one
	 * @param {number} responseStatus the response status code
	 * @returns {boolean} true if the response has the challenge status
	 */
	var isChallengeStatus = function isChallengeStatus(responseStatus) {
	  return responseStatus === _constants.challengeResponse.STATUS_CODE;
	};
	
	/**
	 * @name isChallengeResponse
	 * @type {function}
	 * @inner
	 * @description A helper to determine if the response
	 * is challengable
	 * @param {number} status response status to be verified
	 * @param {string} header response header
	 * @returns {Boolean} Returns true if the passed status is challenge response status
	 * and the header is defined
	 */
	var isChallengeResponse = function isChallengeResponse(status, header) {
	  return Boolean(isChallengeStatus(status) && header);
	};
	
	/**
	 * @name processChallengeResponse
	 * @type {function}
	 * @inner
	 * @description A helper to stringify the challenge response object
	 * @param {object} response the response object
	 * @returns {string} stringified response object
	 */
	var processChallengeResponse = function processChallengeResponse(response) {
	  return Object.entries(response).map(function (_ref) {
	    var _ref2 = _slicedToArray(_ref, 2),
	        key = _ref2[0],
	        value = _ref2[1];
	
	    if (typeof value === 'string') {
	      return key + '="' + value + '"';
	    }
	    return key + '=' + value;
	  }).join(', ');
	};
	
	/**
	 * @name parseChallengeHeader
	 * @type {function}
	 * @inner
	 * @description Handler to parse header
	 * @param {string} header the header string
	 * @returns {object} JSON object with all the headers being represented as K:V pairs
	 */
	var parseChallengeHeader = function parseChallengeHeader(header) {
	  var DELIMITER = ',';
	  var KEY_VALUE_SEPARATOR = '=';
	
	  return header.split(DELIMITER).reduce(function (acc, item) {
	    var _item$split = item.split(KEY_VALUE_SEPARATOR),
	        _item$split2 = _slicedToArray(_item$split, 2),
	        key = _item$split2[0],
	        value = _item$split2[1];
	
	    return Object.assign(acc, _defineProperty({}, key.trim(), JSON.parse(value)));
	  }, {});
	};
	
	exports.default = {
	  getChallengeTypeKey: getChallengeTypeKey,
	  parseChallengeHeader: parseChallengeHeader,
	  isChallengeResponse: isChallengeResponse,
	  processChallengeResponse: processChallengeResponse
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name challengeResponse
	 * @type {object}
	 *
	 * @inner
	 *
	 * Default challenge response constant
	 * It defines http response status code
	 * and header attribute
	 */
	var challengeResponse = exports.challengeResponse = {
	  STATUS_CODE: 401,
	  HEADER_ATTRIBUTE: 'WWW-Authenticate'
	};
	
	/**
	 * @name challengeRequest
	 * @type {object}
	 *
	 * @inner
	 *
	 * Default challenge request constant
	 * It defines http request header attribute
	 * for the MFA challenge
	 */
	var challengeRequest = exports.challengeRequest = {
	  HEADER_ATTRIBUTE: 'X-MFA'
	};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name challengeToIntentConf
	 * @type {object}
	 * @description Challenge type to intent key map
	 * It can be customized in config-bb-providers
	 * @example
	 * export default [
	 *   ['lib-bb-challenge-ng:challengeProvider', (challenges) => {
	 *       challenges.setChallengeToIntent({sms: 'some.intent'});
	 *   }],
	 * ];
	 */
	exports.default = {
	  sms: 'sms.auth.step'
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=lib-bb-challenge-ng.js.map