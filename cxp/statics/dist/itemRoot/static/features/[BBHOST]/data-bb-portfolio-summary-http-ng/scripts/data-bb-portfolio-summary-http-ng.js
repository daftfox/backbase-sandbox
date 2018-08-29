(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-portfolio-summary-http-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-portfolio-summary-http-ng"] = factory(require("vendor-bb-angular"));
	else
		root["data-bb-portfolio-summary-http-ng"] = factory(root["vendor-bb-angular"]);
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
	exports.portfolioSummaryDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbPortfolioSummaryHttp = __webpack_require__(3);
	
	var _dataBbPortfolioSummaryHttp2 = _interopRequireDefault(_dataBbPortfolioSummaryHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	/**
	 * @module data-bb-portfolio-summary-http-ng
	 *
	 * @description A data module for accessing the Portfolio Summary REST API.
	 *
	 * @returns {String} `data-bb-portfolio-summary-http-ng`
	 * @example
	 * import portfolioSummaryDataModuleKey, {
	 *   portfolioSummaryDataKey,
	 * } from 'data-bb-portfolio-summary-http-ng';
	 */
	
	var portfolioSummaryDataModuleKey = 'data-bb-portfolio-summary-http-ng';
	/**
	 * @name portfolioSummaryDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the PortfolioSummaryData service
	 */
	var portfolioSummaryDataKey = exports.portfolioSummaryDataKey = 'data-bb-portfolio-summary-http-ng:portfolioSummaryData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(portfolioSummaryDataModuleKey, [])
	
	/**
	 * @constructor PortfolioSummaryData
	 * @type {object}
	 *
	 * @description Public api for data-bb-portfolio-summary-http-ng service
	 *
	 */
	.provider(portfolioSummaryDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name PortfolioSummaryDataProvider
	   * @type {object}
	   * @ngkey data-bb-portfolio-summary-http-ng:portfolioSummaryDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-portfolio-summary-http-ng:portfolioSummaryDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-portfolio-summary-http-ng:portfolioSummaryDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name PortfolioSummaryDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name PortfolioSummaryDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http', '$httpParamSerializer',
	    /* into */
	    (0, _dataBbPortfolioSummaryHttp2.default)(config)]
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
	
	    definedTypes['PortfolioSummaryData.PortfolioSummaryGet'] = { "type": "array", "items": { "properties": { "IBAN": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "clientName": { "type": "string", "required": true }, "alias": { "type": "string", "required": false }, "valuation": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "inCashTotal": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "outCashTotal": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "performanceMTD": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "performanceMTDpct": { "type": "number", "required": false }, "performanceYTD": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "performanceYTDpct": { "type": "number", "required": false }, "riskClass": { "type": "string", "required": false }, "assetClasses": { "type": "array", "items": { "properties": { "valuePct": { "type": "number", "required": true }, "name": { "type": "string", "required": true } } }, "required": false }, "managers": { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true }, "name": { "type": "string", "required": true } } }, "required": false }, "attorneys": { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true }, "name": { "type": "string", "required": true } } }, "required": false }, "isFavorite": { "type": "boolean", "required": false } } } };
	
	    definedTypes['PortfolioSummaryData.PortfolioSummaryItemGet'] = { "properties": { "IBAN": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "clientName": { "type": "string", "required": true }, "alias": { "type": "string", "required": false }, "valuation": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "inCashTotal": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "outCashTotal": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "performanceMTD": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "performanceMTDpct": { "type": "number", "required": false }, "performanceYTD": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "performanceYTDpct": { "type": "number", "required": false }, "riskClass": { "type": "string", "required": false }, "assetClasses": { "type": "array", "items": { "properties": { "valuePct": { "type": "number", "required": true }, "name": { "type": "string", "required": true } } }, "required": false }, "managers": { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true }, "name": { "type": "string", "required": true } } }, "required": false }, "attorneys": { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true }, "name": { "type": "string", "required": true } } }, "required": false }, "isFavorite": { "type": "boolean", "required": false } } };
	
	    definedTypes['PortfolioSummaryData.PositionsGet'] = { "properties": { "accounts": { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true }, "name": { "type": "string", "required": true }, "valuation": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "performancePct": { "type": "number", "required": false }, "parentPct": { "type": "number", "required": false } } }, "required": false }, "assetClasses": { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true }, "accountId": { "type": "string", "required": true } } }, "required": false }, "regions": { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true }, "accountId": { "type": "string", "required": true }, "assetClassId": { "type": "string", "required": true } } }, "required": false }, "countries": { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true }, "accountId": { "type": "string", "required": true }, "assetClassId": { "type": "string", "required": true }, "regionId": { "type": "string", "required": true }, "name": { "type": "string", "required": true } } }, "required": false }, "positions": { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true }, "accountId": { "type": "string", "required": false }, "assetClassId": { "type": "string", "required": false }, "regionId": { "type": "string", "required": false }, "countryId": { "type": "string", "required": false }, "instrumentName": { "type": "string", "required": false }, "instrumentCurrency": { "type": "string", "required": false }, "instrumentCode": { "type": "string", "required": false }, "quantity": { "type": "number", "required": false }, "price": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "exchangeRate": { "type": "number", "required": false }, "valuation": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true }, "accruedInterest": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "costPrice": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "costExchangeRate": { "type": "number", "required": false }, "unrealizedPL": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "unrealizedPLPct": { "type": "number", "required": false }, "assetClassPct": { "type": "number", "required": false }, "portfolioPct": { "type": "number", "required": false } } }, "required": true } } };
	
	    definedTypes['PortfolioSummaryData.TransactionsGet'] = { "type": "array", "items": { "properties": { "id": { "type": "number", "required": true }, "transactionDate": { "type": "string", "format": "date-time", "required": true }, "category": { "type": "string", "required": false }, "assetClass": { "type": "string", "required": false }, "instrumentName": { "type": "string", "required": false }, "quantity": { "type": "number", "required": false }, "price": { "required": false }, "amount": { "required": false }, "balanceAsset": { "type": "number", "required": false }, "balanceAmount": { "required": false }, "assetKey": { "type": "string", "required": true }, "counterpartyName": { "type": "string", "required": false }, "statusId": { "type": "string", "required": true }, "statusName": { "type": "string", "required": false }, "statusAbbr": { "type": "string", "required": true }, "positionType": { "type": "string", "required": true }, "counterpartyAccount": { "type": "string", "required": false }, "subPortfolioId": { "type": "string", "required": false }, "positionId": { "type": "string", "required": false }, "iSIN": { "type": "string", "required": false } } } };
	
	    definedTypes['PortfolioSummaryData.TransactionsDetailsGet'] = { "properties": { "instrumentNameLong": { "type": "string", "required": false }, "valueDate": { "type": "string", "format": "date-time", "required": true }, "market": { "type": "string", "required": false }, "orderType": { "type": "string", "required": false }, "grossAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "exchangeRate": { "type": "number", "required": false }, "taxesLocal": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "taxesForeign": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "feesLocal": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "feesForeign": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "instrumentCodeCustom": { "type": "string", "required": false }, "officialCode": { "type": "string", "required": false }, "assetSubClass": { "type": "string", "required": false }, "notes": { "type": "string", "required": false }, "instrumentCurrency": { "type": "string", "required": false } } };
	
	    definedTypes['PortfolioSummaryData.TransactionsFilterOptionsGet'] = { "properties": { "accounts": { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true }, "name": { "type": "string", "required": true } } }, "required": true }, "assetClasses": { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true }, "name": { "type": "string", "required": true } } }, "required": true }, "categories": { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true }, "name": { "type": "string", "required": true } } }, "required": true } } };
	
	    definedTypes['PortfolioSummaryData.AllocationsAssetGet'] = { "properties": { "allocations": { "type": "array", "items": { "properties": { "name": { "type": "string", "required": true }, "allocationPct": { "type": "number", "required": false }, "valuation": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "allocationMinPct": { "type": "number", "required": false }, "allocationMaxPct": { "type": "number", "required": false }, "allocations": { "type": "array", "items": { "properties": { "name": { "type": "string", "required": true }, "allocationPct": { "type": "number", "required": false }, "valuation": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false } } }, "required": true } } }, "required": false } } };
	
	    definedTypes['PortfolioSummaryData.AllocationsCurrencyGet'] = { "properties": { "allocations": { "type": "array", "items": { "properties": { "name": { "type": "string", "required": true }, "allocationPct": { "type": "number", "required": false }, "valuation": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "allocationMinPct": { "type": "number", "required": false }, "allocationMaxPct": { "type": "number", "required": false }, "allocations": { "type": "array", "items": { "properties": { "name": { "type": "string", "required": true }, "allocationPct": { "type": "number", "required": false }, "valuation": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false } } }, "required": true } } }, "required": false } } };
	
	    definedTypes['PortfolioSummaryData.ValuationChartDataGet'] = { "properties": { "chartData": { "type": "array", "items": { "properties": { "dateFrom": { "type": "string", "format": "date-time", "required": true }, "dateTo": { "type": "string", "format": "date-time", "required": true }, "value": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "valuePct": { "type": "number", "required": false } } }, "required": false } } };
	
	    definedTypes['PortfolioSummaryData.CumulativePerformanceChartDataGet'] = { "properties": { "chartData": { "type": "array", "items": { "properties": { "dateFrom": { "type": "string", "format": "date-time", "required": true }, "dateTo": { "type": "string", "format": "date-time", "required": true }, "value": { "type": "number", "required": false } } }, "required": false } } };
	
	    definedTypes['PortfolioSummaryData.CreatePortfolioCustomListRequest'] = { "properties": { "name": { "type": "string", "minLength": 3, "maxLength": 30, "required": true } } };
	
	    definedTypes['PortfolioSummaryData.MarkPortfolioAsFavoriteRequest'] = { "properties": { "IBAN": { "type": "string", "minLength": 1, "maxLength": 36, "required": true } } };
	
	    definedTypes['PortfolioSummaryData.GetPortfolioCustomList'] = { "type": "array", "items": { "properties": { "name": { "type": "string", "minLength": 3, "maxLength": 30, "required": true }, "uuid": { "type": "string", "maxLength": 36, "required": true } } } };
	
	    definedTypes['PortfolioSummaryData.RenameCustomList'] = { "properties": { "name": { "type": "string", "minLength": 3, "maxLength": 30, "required": true } } };
	
	    definedTypes['PortfolioSummaryData.CustomListAddPortfolios'] = { "properties": {} };
	
	    definedTypes['PortfolioSummaryData.CustomListResponse'] = { "properties": { "uuid": { "type": "string", "maxLength": 36, "required": false } } };
	
	    definedTypes['PortfolioSummaryData.PortfolioClientOrder'] = { "properties": {} };
	
	    definedTypes['PortfolioSummaryData.PostPortfolioAlias'] = { "properties": { "IBAN": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "alias": { "type": "string", "maxLength": 30, "required": false } } };
	
	    /**
	     * @typedef PortfolioSummaryData.AllocationsAssetGet
	     * @type {Object}
	     * @property {?Array.<AllocationsParentItem>} allocations
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PortfolioSummaryData.AllocationsCurrencyGet
	     * @type {Object}
	     * @property {?Array.<AllocationsParentItem>} allocations
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PortfolioSummaryData.CreatePortfolioCustomListRequest
	     * @type {Object}
	     * @property {String} name Custom list name
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PortfolioSummaryData.CumulativePerformanceChartDataGet
	     * @type {Object}
	     * @property {?Array.<CumulativePerformanceChartItem>} chartData The list of items to build the chart.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PortfolioSummaryData.Currency
	     * @type {Object}
	     * @property {String} amount The amount in the specified currency
	     * @property {String} currencyCode The alpha-3 code (complying with ISO 4217) of the currency that qualifies the amount
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PortfolioSummaryData.CustomListAddPortfolios
	     * @type {Object}
	     */
	
	    /**
	     * @typedef PortfolioSummaryData.CustomListResponse
	     * @type {Object}
	     * @property {?String} uuid Custom list create or update response
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PortfolioSummaryData.GetPortfolioCustomList
	     * @type {Array.<PortfolioSummaryData.PortfolioCustomListGetItem>}
	     */
	
	    /**
	     * @typedef PortfolioSummaryData.MarkPortfolioAsFavoriteRequest
	     * @type {Object}
	     * @property {String} IBAN Portfolio IBAN
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PortfolioSummaryData.PortfolioClientOrder
	     * @type {Object}
	     */
	
	    /**
	     * @typedef PortfolioSummaryData.PortfolioCustomListGetItem
	     * @type {Object}
	     * @property {String} name Custom list name
	     * @property {String} uuid Custom list uuid
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PortfolioSummaryData.PortfolioSummaryGet
	     * @type {Array.<PortfolioSummaryData.PortfolioSummaryItemGet>}
	     */
	
	    /**
	     * @typedef PortfolioSummaryData.PortfolioSummaryItemGet
	     * @type {Object}
	     * @property {String} IBAN Account ID
	     * @property {String} clientName The name of the client
	     * @property {?String} alias A portfolio name manually set by the client
	     * @property {?PortfolioSummaryData.Currency} valuation Total cost of all assets in the portfolio
	     * @property {?PortfolioSummaryData.Currency} inCashTotal Incoming cash for the period of time
	     * @property {?PortfolioSummaryData.Currency} outCashTotal Outgoing cash for the period of time
	     * @property {?PortfolioSummaryData.Currency} performanceMTD A calculated portfolio performance amount from the mounth start to date
	     * @property {?Number} performanceMTDpct A calculated percentage of portfolio amount growth in percents
	     * @property {?PortfolioSummaryData.Currency} performanceYTD A calculated portfolio performance amount from the year start to date
	     * @property {?Number} performanceYTDpct A calculated percentage of portfolio amount growth in percents
	     * @property {?String} riskClass Risk associated with portfolio investement strategy
	     * @property {?Array.<PortfoliosAssetClassItem>} assetClasses The chart to display the asset allocation within a portfolio
	     * @property {?Array.<PortfoliosManagerItem>} managers Managers of portfolio
	     * @property {?Array.<PortfoliosAttorneyItem>} attorneys Attorneys of portfolio
	     * @property {?Boolean} isFavorite This flag responsible for Favorite marker
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PortfolioSummaryData.PositionsGet
	     * @type {Object}
	     * @property {?Array.<PositionsAccountItem>} accounts The list of Accounts within the client Portfolio.
	     * @property {?Array.<PositionsAssetClassItem>} assetClasses The list of Asset Classes within each Account.
	     * @property {?Array.<PositionsRegionItem>} regions The list of Regions for each Asset Class and Account, to which positions are allocated.
	     * @property {?Array.<PositionsCountryItem>} countries The list of Countries for each Region and AssetClass and Account, to which positions are allocated.
	     * @property {Array.<PositionsItem>} positions The list of Positions.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PortfolioSummaryData.PostPortfolioAlias
	     * @type {Object}
	     * @property {String} IBAN Portfolio IBAN
	     * @property {?String} alias Portfolio alias
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PortfolioSummaryData.TransactionsDetailsGet
	     * @type {Object}
	     * @property {?String} instrumentNameLong The long name of the instrument the given transaction is related to.
	     * @property {String} valueDate The date when transaction was executed.
	     * @property {?String} market The marketplace where the transaction was executed.
	     * @property {?String} orderType The type of the order.
	     * @property {?PortfolioSummaryData.Currency} grossAmount The gross amount (price*quantity) of the transaction in the given curency. Usually is including taxes and fees.
	     * @property {?Number} exchangeRate The currency exchange rate(FX) applied to the transaction on the transaction date.
	     * @property {?PortfolioSummaryData.Currency} taxesLocal Local taxes in the given currency applied to the transaction.
	     * @property {?PortfolioSummaryData.Currency} taxesForeign Foreign taxes in the given currency applied to the transaction.
	     * @property {?PortfolioSummaryData.Currency} feesLocal Local fees in the given currency applied to the transaction.
	     * @property {?PortfolioSummaryData.Currency} feesForeign Foreign fees in the given currency applied to the transaction.
	     * @property {?String} instrumentCodeCustom The instrument/asset internal or custom code used within the bank.
	     * @property {?String} officialCode The instrument/asset official code that shown.
	     * @property {?String} assetSubClass The name of the asset sub-class the transaction belongs to.
	     * @property {?String} notes The description or notes related to the operation.
	     * @property {?String} instrumentCurrency The currency of the financial instrument.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PortfolioSummaryData.TransactionsFilterOptionsGet
	     * @type {Object}
	     * @property {Array.<TransactionsFilterOptionsAccountItem>} accounts This is the list of all accounts.
	     * @property {Array.<TransactionsFilterOptionsAssetClassItem>} assetClasses This is the list of all asset classes.
	     * @property {Array.<TransactionsFilterOptionsCategoryItem>} categories This is the list of all transaction categories.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PortfolioSummaryData.TransactionsGet
	     * @type {Array.<PortfolioSummaryData.TransactionsItem>}
	     */
	
	    /**
	     * @typedef PortfolioSummaryData.TransactionsItem
	     * @type {Object}
	     * @property {Number} id Numerical ID of the transaction
	     * @property {String} transactionDate The date on which the transaction was booked.
	     * @property {?String} category The name of the transaction category. E.g. Buy/Sell or Redemption or other.
	     * @property {?String} assetClass The name of the asset class the transaction belongs to.
	     * @property {?String} instrumentName The short name of the instrument, the given transaction is related to.
	     * @property {?Number} quantity The quantity of units in the transaction operation.
	     * @property {?*} price The price of one unit of transaction instrument in the instrument currency.
	     * @property {?*} amount The amount of the transaction (price*quantity) in the client reference currency.
	     * @property {?Number} balanceAsset The quantitative balance state after transaction.
	     * @property {?*} balanceAmount The amount balance state after transaction in the client reference currency.
	     * @property {String} assetKey The key used for asset/instrument identification.
	     * @property {?String} counterpartyName A name of the transaction counterparty.
	     * @property {String} statusId A status identificator of the transaction. String type to be able to accomodate both numerical and string statuses.
	     * @property {?String} statusName A name or description of the transaction status. E.g. Live, Pending
	     * @property {String} statusAbbr The abbreviation of the transaction status the way it must be displayed on the UI.
	     * @property {String} positionType A type of the position the given transaction belongs to. E.g. Cash position or Security.
	     * @property {?String} counterpartyAccount The account id of the counterpart of the transaction.
	     * @property {?String} subPortfolioId An subPortfolio id the transaction belongs to.
	     * @property {?String} positionId A position id the transaction belongs to.
	     * @property {?String} iSIN The instrument/asset international code.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PortfolioSummaryData.ValuationChartDataGet
	     * @type {Object}
	     * @property {?Array.<ValuationChartItem>} chartData The list of items to build the chart.
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
	     * @name PortfolioSummaryData#getPortfoliosummary
	     * @type {Function}
	     * @description Retrieve list of portfolio summary.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?string} params.query The search term used to search for portfolios.
	       
	     * @param {?string} params.customListUuid The search term used to return portfolios by custom list.
	       
	     * @param {?string} params.justFavorites Flag to return just favorite portfolios.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     * @param {?string} params.orderBy Order by field: clientName, alias, riskClass, valuation.currencyCode, valuation.amount, performanceYTDpct, userOrder.
	       
	     * @param {?string} params.direction Direction. (defaults to DESC)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PortfolioSummaryData.PortfolioSummaryGet} on success 
	     *
	     * @example
	     * portfolioSummaryData
	     *  .getPortfoliosummary(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPortfoliosummary(params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary';
	
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
	     * @name PortfolioSummaryData#getPortfoliosummaryRecord
	     * @type {Function}
	     * @description Retrieve single portfolio.
	     
	     * @param {string} portfolioId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PortfolioSummaryData.PortfolioSummaryItemGet} on success 
	     *
	     * @example
	     * portfolioSummaryData
	     *  .getPortfoliosummaryRecord(portfolioId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPortfoliosummaryRecord(portfolioId, params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/' + portfolioId;
	
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
	     * @name PortfolioSummaryData#postPortfoliosummaryCustomListRecord
	     * @type {Function}
	     * @description Endpoint for creation Portfolio Custom List
	     
	     * @param {PortfolioSummaryData.CreatePortfolioCustomListRequest} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PortfolioSummaryData.CustomListResponse} on success 
	     *
	     * @example
	     * portfolioSummaryData
	     *  .postPortfoliosummaryCustomListRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postPortfoliosummaryCustomListRecord(data, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/custom-list';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name PortfolioSummaryData#getPortfoliosummaryCustomList
	     * @type {Function}
	     * @description Get current user all Custom Lists
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PortfolioSummaryData.GetPortfolioCustomList} on success 
	     *
	     * @example
	     * portfolioSummaryData
	     *  .getPortfoliosummaryCustomList(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPortfoliosummaryCustomList(params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/custom-list';
	
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
	     * @name PortfolioSummaryData#putPortfoliosummaryFavoritesRecord
	     * @type {Function}
	     * @description Marks portfolio as favorite
	     
	     * @param {PortfolioSummaryData.MarkPortfolioAsFavoriteRequest} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * portfolioSummaryData
	     *  .putPortfoliosummaryFavoritesRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putPortfoliosummaryFavoritesRecord(data, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/favorites';
	
	      return httpClient({
	        method: 'PUT',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name PortfolioSummaryData#postPortfoliosummaryClientOrderRecord
	     * @type {Function}
	     * @description post request
	     
	     * @param {PortfolioSummaryData.PortfolioClientOrder} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * portfolioSummaryData
	     *  .postPortfoliosummaryClientOrderRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postPortfoliosummaryClientOrderRecord(data, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/client-order';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name PortfolioSummaryData#postPortfoliosummaryAliasRecord
	     * @type {Function}
	     * @description post request
	     
	     * @param {PortfolioSummaryData.PostPortfolioAlias} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * portfolioSummaryData
	     *  .postPortfoliosummaryAliasRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postPortfoliosummaryAliasRecord(data, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/alias';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name PortfolioSummaryData#getPortfoliosummaryPositions
	     * @type {Function}
	     * @description The operations that involve using portfolio id
	     
	     * @param {string} portfolioId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PortfolioSummaryData.PositionsGet} on success 
	     *
	     * @example
	     * portfolioSummaryData
	     *  .getPortfoliosummaryPositions(portfolioId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPortfoliosummaryPositions(portfolioId, params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/' + portfolioId + '/positions';
	
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
	     * @name PortfolioSummaryData#getPortfoliosummaryAllocationsAsset
	     * @type {Function}
	     * @description Displaying all portfolio allocations by Asset Class.
	     
	     * @param {string} portfolioId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PortfolioSummaryData.AllocationsAssetGet} on success 
	     *
	     * @example
	     * portfolioSummaryData
	     *  .getPortfoliosummaryAllocationsAsset(portfolioId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPortfoliosummaryAllocationsAsset(portfolioId, params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/' + portfolioId + '/allocations-asset';
	
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
	     * @name PortfolioSummaryData#getPortfoliosummaryAllocationsCurrency
	     * @type {Function}
	     * @description Displaying all portfolio allocations by Currency.
	     
	     * @param {string} portfolioId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PortfolioSummaryData.AllocationsCurrencyGet} on success 
	     *
	     * @example
	     * portfolioSummaryData
	     *  .getPortfoliosummaryAllocationsCurrency(portfolioId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPortfoliosummaryAllocationsCurrency(portfolioId, params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/' + portfolioId + '/allocations-currency';
	
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
	     * @name PortfolioSummaryData#getPortfoliosummaryTransactions
	     * @type {Function}
	     * @description Getting the list of transactions for the given portfolio.
	     
	     * @param {string} portfolioId 
	       
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.fromDate Transaction date from which to show transactions. Eg: 2017-07-16.
	       
	     * @param {string} params.toDate Transaction date untill which to show transactions. Eg: 2017-08-16.
	       
	     * @param {?string} params.fromAmount Transaction amount from which to show transactions.
	       
	     * @param {?string} params.toAmount Transaction amount untill which to show transactions.
	       
	     * @param {?string} params.category Transaction category like buy or sell.
	       
	     * @param {?string} params.instrumentName Transaction instrument name.
	       
	     * @param {?string} params.counterpartyName Transaction counter party name.
	       
	     * @param {?string} params.counterpartyAccount Transaction counter party account.
	       
	     * @param {?string} params.subPortfolioId Subportfolio to load transactions for.
	       
	     * @param {?string} params.iSIN ISIN of transaction.
	       
	     * @param {?string} params.positionId ID of position to load transactions for.
	       
	     * @param {?string} params.assetKey The key for instrument/asset exact identification.
	       
	     * @param {?string} params.assetClass Asset class category like stock or bond.
	       
	     * @param {number} params.size The number of items per page.
	       
	     * @param {number} params.from The number of pages to offset.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PortfolioSummaryData.TransactionsGet} on success 
	     *
	     * @example
	     * portfolioSummaryData
	     *  .getPortfoliosummaryTransactions(portfolioId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPortfoliosummaryTransactions(portfolioId, params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/' + portfolioId + '/transactions';
	
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
	     * @name PortfolioSummaryData#getPortfoliosummaryTransactionFilterOptions
	     * @type {Function}
	     * @description Returns object containing all asset classes, transactions categories, and accounts.
	     
	     * @param {string} portfolioId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PortfolioSummaryData.TransactionsFilterOptionsGet} on success 
	     *
	     * @example
	     * portfolioSummaryData
	     *  .getPortfoliosummaryTransactionFilterOptions(portfolioId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPortfoliosummaryTransactionFilterOptions(portfolioId, params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/' + portfolioId + '/transaction-filter-options';
	
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
	     * @name PortfolioSummaryData#getPortfoliosummaryValuationChart
	     * @type {Function}
	     * @description Portfolio Valuation Chart data
	     
	     * @param {string} portfolioId 
	       
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.fromDate A date from which to request data for the chart. Eg: 2017-07-16.
	       
	     * @param {string} params.toDate A date until which to request data for the chart. Eg: 2017-08-16.
	       
	     * @param {string} params.granularity Granularity of displayed data (e.g. monthly, weekly). Eg: monthly.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PortfolioSummaryData.ValuationChartDataGet} on success 
	     *
	     * @example
	     * portfolioSummaryData
	     *  .getPortfoliosummaryValuationChart(portfolioId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPortfoliosummaryValuationChart(portfolioId, params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/' + portfolioId + '/valuation-chart';
	
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
	     * @name PortfolioSummaryData#getPortfoliosummaryPerformanceChart
	     * @type {Function}
	     * @description Portfolio Cumulative Performance Chart data
	     
	     * @param {string} portfolioId 
	       
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.fromDate A date from which to request data for the chart. Eg: 2017-07-16.
	       
	     * @param {string} params.toDate A date until which to request data for the chart. Eg: 2017-08-16.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PortfolioSummaryData.CumulativePerformanceChartDataGet} on success 
	     *
	     * @example
	     * portfolioSummaryData
	     *  .getPortfoliosummaryPerformanceChart(portfolioId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPortfoliosummaryPerformanceChart(portfolioId, params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/' + portfolioId + '/performance-chart';
	
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
	     * @name PortfolioSummaryData#getPortfoliosummaryTransactionsRecord
	     * @type {Function}
	     * @description Retrieve a transaction detials
	     
	     * @param {string} portfolioId 
	       
	     
	     * @param {string} transactionId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PortfolioSummaryData.TransactionsDetailsGet} on success 
	     *
	     * @example
	     * portfolioSummaryData
	     *  .getPortfoliosummaryTransactionsRecord(portfolioId, transactionId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPortfoliosummaryTransactionsRecord(portfolioId, transactionId, params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/' + portfolioId + '/transactions/' + transactionId;
	
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
	     * @name PortfolioSummaryData#deletePortfoliosummaryCustomListRecord
	     * @type {Function}
	     * @description Delete custom list by uuid 
	     
	     * @param {string} uuid 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * portfolioSummaryData
	     *  .deletePortfoliosummaryCustomListRecord(uuid, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deletePortfoliosummaryCustomListRecord(uuid, params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/custom-list/' + uuid;
	
	      return httpClient({
	        method: 'DELETE',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name PortfolioSummaryData#putPortfoliosummaryCustomListRecord
	     * @type {Function}
	     * @description Rename the custom list by UUID
	     
	     * @param {string} uuid 
	       
	     
	     * @param {PortfolioSummaryData.RenameCustomList} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PortfolioSummaryData.CustomListResponse} on success 
	     *
	     * @example
	     * portfolioSummaryData
	     *  .putPortfoliosummaryCustomListRecord(uuid, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putPortfoliosummaryCustomListRecord(uuid, data, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/custom-list/' + uuid;
	
	      return httpClient({
	        method: 'PUT',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name PortfolioSummaryData#postPortfoliosummaryCustomListPortfolioRecord
	     * @type {Function}
	     * @description post request
	     
	     * @param {string} uuid 
	       
	     
	     * @param {PortfolioSummaryData.CustomListAddPortfolios} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * portfolioSummaryData
	     *  .postPortfoliosummaryCustomListPortfolioRecord(uuid, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postPortfoliosummaryCustomListPortfolioRecord(uuid, data, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/custom-list/' + uuid + '/portfolio';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name PortfolioSummaryData#deletePortfoliosummaryCustomListPortfolioRecord
	     * @type {Function}
	     * @description delete request
	     
	     * @param {string} uuid 
	       
	     
	     * @param {string} portfolioIbanList 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * portfolioSummaryData
	     *  .deletePortfoliosummaryCustomListPortfolioRecord(uuid, portfolioIbanList, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deletePortfoliosummaryCustomListPortfolioRecord(uuid, portfolioIbanList, params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/custom-list/' + uuid + '/portfolio/' + portfolioIbanList;
	
	      return httpClient({
	        method: 'DELETE',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name PortfolioSummaryData#deletePortfoliosummaryFavoritesRecord
	     * @type {Function}
	     * @description Marks portfolio as not favorite
	     
	     * @param {string} iban 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * portfolioSummaryData
	     *  .deletePortfoliosummaryFavoritesRecord(iban, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deletePortfoliosummaryFavoritesRecord(iban, params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/favorites/' + iban;
	
	      return httpClient({
	        method: 'DELETE',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @description
	     * Schema data. Keys of the object are names of the POST and PUT methods
	     *
	     * Note: The schema is not strictly a JSON schema. It is a whitelisted set of
	     * keys for each object property. The keys that are exposed are meant for validation
	     * purposes.
	     *
	     * The full list of *possible* keys for each property is:
	     * type, minimum, maximum, minLength, maxLength, pattern, enum, format, default,
	     * properties, items, minItems, maxItems, uniqueItems and required.
	     *
	     * See http://json-schema.org/latest/json-schema-validation.html for more details
	     * on the meaning of these keys.
	     *
	     * The "required" array from JSON schema is tranformed into a "required" boolean
	     * on each property. This is for ease of use.
	     *
	     * @name PortfolioSummaryData#schemas
	     * @type {Object}
	     */
	    var schemas = {};
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postPortfoliosummaryCustomListRecord method
	     *
	     * @name PortfolioSummaryData#schemas.postPortfoliosummaryCustomListRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "name": {
	        "type": "string",
	        "minLength": 3,
	        "maxLength": 30,
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postPortfoliosummaryCustomListRecord = definedTypes['PortfolioSummaryData.CreatePortfolioCustomListRequest'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putPortfoliosummaryFavoritesRecord method
	     *
	     * @name PortfolioSummaryData#schemas.putPortfoliosummaryFavoritesRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "IBAN": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 36,
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.putPortfoliosummaryFavoritesRecord = definedTypes['PortfolioSummaryData.MarkPortfolioAsFavoriteRequest'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postPortfoliosummaryClientOrderRecord method
	     *
	     * @name PortfolioSummaryData#schemas.postPortfoliosummaryClientOrderRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {}
	    }
	     */
	
	    schemas.postPortfoliosummaryClientOrderRecord = definedTypes['PortfolioSummaryData.PortfolioClientOrder'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postPortfoliosummaryAliasRecord method
	     *
	     * @name PortfolioSummaryData#schemas.postPortfoliosummaryAliasRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "IBAN": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 36,
	        "required": true
	      },
	      "alias": {
	        "type": "string",
	        "maxLength": 30,
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.postPortfoliosummaryAliasRecord = definedTypes['PortfolioSummaryData.PostPortfolioAlias'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putPortfoliosummaryCustomListRecord method
	     *
	     * @name PortfolioSummaryData#schemas.putPortfoliosummaryCustomListRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "name": {
	        "type": "string",
	        "minLength": 3,
	        "maxLength": 30,
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.putPortfoliosummaryCustomListRecord = definedTypes['PortfolioSummaryData.RenameCustomList'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postPortfoliosummaryCustomListPortfolioRecord method
	     *
	     * @name PortfolioSummaryData#schemas.postPortfoliosummaryCustomListPortfolioRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {}
	    }
	     */
	
	    schemas.postPortfoliosummaryCustomListPortfolioRecord = definedTypes['PortfolioSummaryData.CustomListAddPortfolios'];
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return {
	
	      getPortfoliosummary: getPortfoliosummary,
	
	      getPortfoliosummaryRecord: getPortfoliosummaryRecord,
	
	      postPortfoliosummaryCustomListRecord: postPortfoliosummaryCustomListRecord,
	
	      getPortfoliosummaryCustomList: getPortfoliosummaryCustomList,
	
	      putPortfoliosummaryFavoritesRecord: putPortfoliosummaryFavoritesRecord,
	
	      postPortfoliosummaryClientOrderRecord: postPortfoliosummaryClientOrderRecord,
	
	      postPortfoliosummaryAliasRecord: postPortfoliosummaryAliasRecord,
	
	      getPortfoliosummaryPositions: getPortfoliosummaryPositions,
	
	      getPortfoliosummaryAllocationsAsset: getPortfoliosummaryAllocationsAsset,
	
	      getPortfoliosummaryAllocationsCurrency: getPortfoliosummaryAllocationsCurrency,
	
	      getPortfoliosummaryTransactions: getPortfoliosummaryTransactions,
	
	      getPortfoliosummaryTransactionFilterOptions: getPortfoliosummaryTransactionFilterOptions,
	
	      getPortfoliosummaryValuationChart: getPortfoliosummaryValuationChart,
	
	      getPortfoliosummaryPerformanceChart: getPortfoliosummaryPerformanceChart,
	
	      getPortfoliosummaryTransactionsRecord: getPortfoliosummaryTransactionsRecord,
	
	      deletePortfoliosummaryCustomListRecord: deletePortfoliosummaryCustomListRecord,
	
	      putPortfoliosummaryCustomListRecord: putPortfoliosummaryCustomListRecord,
	
	      postPortfoliosummaryCustomListPortfolioRecord: postPortfoliosummaryCustomListPortfolioRecord,
	
	      deletePortfoliosummaryCustomListPortfolioRecord: deletePortfoliosummaryCustomListPortfolioRecord,
	
	      deletePortfoliosummaryFavoritesRecord: deletePortfoliosummaryFavoritesRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-portfolio-summary-http-ng.js.map