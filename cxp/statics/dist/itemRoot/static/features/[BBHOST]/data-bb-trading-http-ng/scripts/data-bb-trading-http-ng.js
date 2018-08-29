(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-trading-http-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-trading-http-ng"] = factory(require("vendor-bb-angular"));
	else
		root["data-bb-trading-http-ng"] = factory(root["vendor-bb-angular"]);
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
	exports.tradingDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbTradingHttp = __webpack_require__(3);
	
	var _dataBbTradingHttp2 = _interopRequireDefault(_dataBbTradingHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	/**
	 * @module data-bb-trading-http-ng
	 *
	 * @description A data module for accessing the Trading REST API.
	 *
	 * @returns {String} `data-bb-trading-http-ng`
	 * @example
	 * import tradingDataModuleKey, {
	 *   tradingDataKey,
	 * } from 'data-bb-trading-http-ng';
	 */
	
	var tradingDataModuleKey = 'data-bb-trading-http-ng';
	/**
	 * @name tradingDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the TradingData service
	 */
	var tradingDataKey = exports.tradingDataKey = 'data-bb-trading-http-ng:tradingData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(tradingDataModuleKey, [])
	
	/**
	 * @constructor TradingData
	 * @type {object}
	 *
	 * @description Public api for data-bb-trading-http-ng service
	 *
	 */
	.provider(tradingDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name TradingDataProvider
	   * @type {object}
	   * @ngkey data-bb-trading-http-ng:tradingDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-trading-http-ng:tradingDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-trading-http-ng:tradingDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name TradingDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name TradingDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http', '$httpParamSerializer',
	    /* into */
	    (0, _dataBbTradingHttp2.default)(config)]
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
	
	    definedTypes['TradingData.TradingCurrenciesPairsGet'] = { "type": "array", "items": { "properties": { "pairKey": { "type": "string", "minLength": 6, "maxLength": 7, "required": true } } } };
	
	    definedTypes['TradingData.TradingCurrenciesRatesGet'] = { "type": "array", "items": { "properties": { "pairKey": { "type": "string", "minLength": 6, "maxLength": 7, "required": true }, "price": { "type": "number", "required": true }, "change": { "type": "number", "required": false }, "changePct": { "type": "number", "required": false }, "bid": { "type": "number", "required": true }, "ask": { "type": "number", "required": true } } } };
	
	    /**
	     * @typedef TradingData.TradingCurrenciesPairsGet
	     * @type {Array.<TradingData.TradingCurrenciesPairsItem>}
	     */
	
	    /**
	     * @typedef TradingData.TradingCurrenciesPairsItem
	     * @type {Object}
	     * @property {String} pairKey The id of the currency pair according to international conventions.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef TradingData.TradingCurrenciesRatesGet
	     * @type {Array.<TradingData.TradingCurrenciesRatesItem>}
	     */
	
	    /**
	     * @typedef TradingData.TradingCurrenciesRatesItem
	     * @type {Object}
	     * @property {String} pairKey The id of the currency pair according to international conventions.
	     * @property {Number} price The last executed price for the currency pair.
	     * @property {?Number} change Today's price change.
	     * @property {?Number} changePct Today's price change in percent.
	     * @property {Number} bid Bid price available for the currency pair.
	     * @property {Number} ask Ask price available for the currency pair.
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
	     * @name TradingData#getTradingCurrencypair
	     * @type {Function}
	     * @description Retrieve list of trading currencies pairs.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?string} params.query The search term used to search for trading currencies pairs.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link TradingData.TradingCurrenciesPairsGet} on success 
	     *
	     * @example
	     * tradingData
	     *  .getTradingCurrencypair(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getTradingCurrencypair(params, headers) {
	      var url = '' + baseUri + version + '/trading/currencypair';
	
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
	     * @name TradingData#getTradingCurrencyrate
	     * @type {Function}
	     * @description Retrieve list of trading currency rate.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?string} params.currencypair The currency rate.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link TradingData.TradingCurrenciesRatesGet} on success 
	     *
	     * @example
	     * tradingData
	     *  .getTradingCurrencyrate(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getTradingCurrencyrate(params, headers) {
	      var url = '' + baseUri + version + '/trading/currencyrate';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    var schemas = {};
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return {
	
	      getTradingCurrencypair: getTradingCurrencypair,
	
	      getTradingCurrencyrate: getTradingCurrencyrate,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-trading-http-ng.js.map