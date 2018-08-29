(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-product-summary-http-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-product-summary-http-ng"] = factory(require("vendor-bb-angular"));
	else
		root["data-bb-product-summary-http-ng"] = factory(root["vendor-bb-angular"]);
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
	exports.productSummaryDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbProductSummaryHttp = __webpack_require__(3);
	
	var _dataBbProductSummaryHttp2 = _interopRequireDefault(_dataBbProductSummaryHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	/**
	 * @module data-bb-product-summary-http-ng
	 *
	 * @description A data module for accessing the Product Summary REST API.
	 *
	 * @returns {String} `data-bb-product-summary-http-ng`
	 * @example
	 * import productSummaryDataModuleKey, {
	 *   productSummaryDataKey,
	 * } from 'data-bb-product-summary-http-ng';
	 */
	
	var productSummaryDataModuleKey = 'data-bb-product-summary-http-ng';
	/**
	 * @name productSummaryDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the ProductSummaryData service
	 */
	var productSummaryDataKey = exports.productSummaryDataKey = 'data-bb-product-summary-http-ng:productSummaryData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(productSummaryDataModuleKey, [])
	
	/**
	 * @constructor ProductSummaryData
	 * @type {object}
	 *
	 * @description Public api for data-bb-product-summary-http-ng service
	 *
	 */
	.provider(productSummaryDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name ProductSummaryDataProvider
	   * @type {object}
	   * @ngkey data-bb-product-summary-http-ng:productSummaryDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-product-summary-http-ng:productSummaryDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-product-summary-http-ng:productSummaryDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name ProductSummaryDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name ProductSummaryDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http', '$httpParamSerializer',
	    /* into */
	    (0, _dataBbProductSummaryHttp2.default)(config)]
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
	
	    definedTypes['ProductSummaryData.Productsummary-GET'] = { "properties": { "aggregatedBalance": { "type": "object", "properties": { "currency": { "type": "string", "required": false }, "value": { "type": "string", "required": false } }, "required": false }, "currentAccounts": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 50, "required": false }, "products": { "type": "array", "items": { "properties": { "bookedBalance": { "type": "string", "required": false }, "availableBalance": { "type": "string", "required": false }, "creditLimit": { "type": "string", "required": false }, "IBAN": { "type": "string", "maxLength": 34, "pattern": "^(AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW).*", "required": false }, "BBAN": { "type": "string", "maxLength": 50, "required": false }, "currency": { "type": "string", "required": false }, "urgentTransferAllowed": { "type": "boolean", "required": false }, "BIC": { "type": "string", "maxLength": 11, "required": false }, "bankBranchCode": { "type": "string", "maxLength": 20, "required": false }, "accountInterestRate": { "type": "number", "required": false }, "valueDateBalance": { "type": "number", "required": false }, "creditLimitUsage": { "type": "number", "required": false }, "creditLimitInterestRate": { "type": "number", "required": false }, "creditLimitExpiryDate": { "type": "string", "format": "date-time", "required": false }, "accruedInterest": { "type": "number", "required": false }, "debitCardsItems": { "type": "array", "items": { "properties": { "number": { "type": "string", "maxLength": 36, "required": false }, "expiryDate": { "type": "string", "maxLength": 32, "required": false } } }, "uniqueItems": true, "required": false }, "accountHolderName": { "type": "string", "maxLength": 64, "required": false }, "startDate": { "type": "string", "format": "date-time", "required": false }, "minimumRequiredBalance": { "type": "number", "required": false }, "accountHolderAddressLine1": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine2": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine3": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine4": { "type": "string", "maxLength": 70, "required": false }, "accountHolderStreetName": { "type": "string", "maxLength": 70, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "creditAccount": { "type": "boolean", "required": false }, "debitAccount": { "type": "boolean", "required": false }, "accountHolderCountry": { "enum": ["AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "CI", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RO", "RU", "RW", "RE", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW"], "required": false } } }, "required": false }, "aggregatedBalance": { "type": "object", "properties": { "currency": { "type": "string", "required": false }, "value": { "type": "string", "required": false } }, "required": false } }, "required": false }, "savingsAccounts": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 50, "required": false }, "products": { "type": "array", "items": { "properties": { "bookedBalance": { "type": "string", "required": false }, "accruedInterest": { "type": "number", "required": false }, "IBAN": { "type": "string", "maxLength": 34, "pattern": "^(AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW).*", "required": false }, "BBAN": { "type": "string", "maxLength": 50, "required": false }, "currency": { "type": "string", "required": false }, "urgentTransferAllowed": { "type": "boolean", "required": false }, "BIC": { "type": "string", "maxLength": 11, "required": false }, "bankBranchCode": { "type": "string", "maxLength": 20, "required": false }, "accountInterestRate": { "type": "number", "required": false }, "minimumRequiredBalance": { "type": "number", "required": false }, "startDate": { "type": "string", "format": "date-time", "required": false }, "termUnit": { "enum": ["D", "W", "M", "Y"], "required": false }, "termNumber": { "type": "number", "required": false }, "maturityDate": { "type": "string", "format": "date-time", "required": false }, "maturityAmount": { "type": "number", "required": false }, "autoRenewalIndicator": { "type": "boolean", "required": false }, "interestPaymentFrequencyUnit": { "enum": ["D", "W", "M", "Y"], "required": false }, "interestPaymentFrequencyNumber": { "type": "number", "required": false }, "principalAmount": { "type": "number", "required": false }, "interestSettlementAccount": { "type": "string", "maxLength": 32, "required": false }, "accountHolderName": { "type": "string", "maxLength": 64, "required": false }, "valueDateBalance": { "type": "number", "required": false }, "accountHolderAddressLine1": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine2": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine3": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine4": { "type": "string", "maxLength": 70, "required": false }, "accountHolderStreetName": { "type": "string", "maxLength": 70, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "accountHolderCountry": { "enum": ["AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "CI", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RO", "RU", "RW", "RE", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW"], "required": false }, "creditAccount": { "type": "boolean", "required": false }, "debitAccount": { "type": "boolean", "required": false } } }, "required": false }, "aggregatedBalance": { "type": "object", "properties": { "currency": { "type": "string", "required": false }, "value": { "type": "string", "required": false } }, "required": false } }, "required": false }, "termDeposits": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 50, "required": false }, "products": { "type": "array", "items": { "properties": { "bookedBalance": { "type": "string", "required": false }, "principalAmount": { "type": "string", "required": false }, "accruedInterest": { "type": "number", "required": false }, "IBAN": { "type": "string", "maxLength": 34, "pattern": "^(AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW).*", "required": false }, "currency": { "type": "string", "required": false }, "urgentTransferAllowed": { "type": "boolean", "required": false }, "productNumber": { "type": "string", "maxLength": 36, "required": false }, "accountInterestRate": { "type": "number", "required": false }, "startDate": { "type": "string", "format": "date-time", "required": false }, "termUnit": { "enum": ["D", "W", "M", "Y"], "required": false }, "termNumber": { "type": "number", "required": false }, "maturityDate": { "type": "string", "format": "date-time", "required": false }, "maturityAmount": { "type": "number", "required": false }, "autoRenewalIndicator": { "type": "boolean", "required": false }, "interestPaymentFrequencyUnit": { "enum": ["D", "W", "M", "Y"], "required": false }, "interestPaymentFrequencyNumber": { "type": "number", "required": false }, "interestSettlementAccount": { "type": "string", "maxLength": 32, "required": false }, "valueDateBalance": { "type": "number", "required": false }, "accountHolderName": { "type": "string", "maxLength": 64, "required": false }, "outstandingPrincipalAmount": { "type": "number", "required": false }, "creditAccount": { "type": "boolean", "required": false }, "debitAccount": { "type": "boolean", "required": false }, "minimumRequiredBalance": { "type": "number", "required": false } } }, "required": false }, "aggregatedBalance": { "type": "object", "properties": { "currency": { "type": "string", "required": false }, "value": { "type": "string", "required": false } }, "required": false } }, "required": false }, "loans": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 50, "required": false }, "products": { "type": "array", "items": { "properties": { "bookedBalance": { "type": "string", "required": false }, "principalAmount": { "type": "string", "required": false }, "currency": { "type": "string", "required": false }, "urgentTransferAllowed": { "type": "boolean", "required": false }, "productNumber": { "type": "string", "maxLength": 36, "required": false }, "accountInterestRate": { "type": "number", "required": false }, "termUnit": { "enum": ["D", "W", "M", "Y"], "required": false }, "termNumber": { "type": "number", "required": false }, "outstandingPrincipalAmount": { "type": "number", "required": false }, "monthlyInstalmentAmount": { "type": "number", "required": false }, "amountInArrear": { "type": "number", "required": false }, "interestSettlementAccount": { "type": "string", "maxLength": 32, "required": false }, "accruedInterest": { "type": "number", "required": false }, "accountHolderName": { "type": "string", "maxLength": 64, "required": false }, "maturityDate": { "type": "string", "format": "date-time", "required": false }, "valueDateBalance": { "type": "number", "required": false }, "creditAccount": { "type": "boolean", "required": false }, "debitAccount": { "type": "boolean", "required": false } } }, "required": false }, "aggregatedBalance": { "type": "object", "properties": { "currency": { "type": "string", "required": false }, "value": { "type": "string", "required": false } }, "required": false } }, "required": false }, "creditCards": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 50, "required": false }, "products": { "type": "array", "items": { "properties": { "bookedBalance": { "type": "string", "required": false }, "availableBalance": { "type": "string", "required": false }, "creditLimit": { "type": "string", "required": false }, "number": { "type": "string", "maxLength": 36, "required": false }, "currency": { "type": "string", "required": false }, "urgentTransferAllowed": { "type": "boolean", "required": false }, "cardNumber": { "type": "number", "required": false }, "creditCardAccountNumber": { "type": "string", "maxLength": 32, "required": false }, "validThru": { "type": "string", "format": "date-time", "required": false }, "applicableInterestRate": { "type": "number", "required": false }, "remainingCredit": { "type": "number", "required": false }, "outstandingPayment": { "type": "number", "required": false }, "minimumPayment": { "type": "number", "required": false }, "minimumPaymentDueDate": { "type": "string", "format": "date-time", "required": false }, "accountInterestRate": { "type": "number", "required": false }, "accountHolderName": { "type": "string", "maxLength": 64, "required": false }, "creditLimitUsage": { "type": "number", "required": false }, "creditLimitInterestRate": { "type": "number", "required": false }, "accruedInterest": { "type": "number", "required": false } } }, "required": false }, "aggregatedBalance": { "type": "object", "properties": { "currency": { "type": "string", "required": false }, "value": { "type": "string", "required": false } }, "required": false } }, "required": false }, "debitCards": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 50, "required": false }, "products": { "type": "array", "items": { "properties": { "number": { "type": "string", "maxLength": 36, "required": false }, "urgentTransferAllowed": { "type": "boolean", "required": false }, "cardNumber": { "type": "number", "required": false }, "accountInterestRate": { "type": "number", "required": false }, "accountHolderName": { "type": "string", "maxLength": 64, "required": false }, "debitCardsItems": { "type": "array", "items": { "properties": { "number": { "type": "string", "maxLength": 36, "required": false }, "expiryDate": { "type": "string", "maxLength": 32, "required": false } } }, "uniqueItems": true, "required": false }, "startDate": { "type": "string", "format": "date-time", "required": false }, "validThru": { "type": "string", "format": "date-time", "required": false } } }, "required": false }, "aggregatedBalance": { "type": "object", "properties": { "currency": { "type": "string", "required": false }, "value": { "type": "string", "required": false } }, "required": false } }, "required": false }, "investmentAccounts": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 50, "required": false }, "products": { "type": "array", "items": { "properties": { "currentInvestmentValue": { "type": "string", "required": false }, "currency": { "type": "string", "required": false }, "urgentTransferAllowed": { "type": "boolean", "required": false }, "productNumber": { "type": "string", "maxLength": 36, "required": false } } }, "required": false }, "aggregatedBalance": { "type": "object", "properties": { "currency": { "type": "string", "required": false }, "value": { "type": "string", "required": false } }, "required": false } }, "required": false } } };
	
	    definedTypes['ProductSummaryData.Productsummary-EXAMPLE'] = { "properties": {} };
	
	    definedTypes['ProductSummaryData.ProductsummaryFlatStructure-GET'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "maxLength": 36, "required": true }, "externalArrangementId": { "type": "string", "maxLength": 50, "required": true }, "externalLegalEntityId": { "type": "string", "maxLength": 50, "required": true }, "externalProductId": { "type": "string", "maxLength": 50, "required": true }, "name": { "type": "string", "maxLength": 50, "required": false }, "alias": { "type": "string", "maxLength": 50, "required": false }, "bookedBalance": { "type": "number", "required": false }, "availableBalance": { "type": "number", "required": false }, "creditLimit": { "type": "number", "required": false }, "IBAN": { "type": "string", "maxLength": 34, "pattern": "^(AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW).*", "required": false }, "BBAN": { "type": "string", "maxLength": 50, "required": false }, "currency": { "enum": ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "YER", "ZAR", "ZMW", "ZWL"], "required": false }, "externalTransferAllowed": { "type": "boolean", "required": false }, "urgentTransferAllowed": { "type": "boolean", "required": false }, "accruedInterest": { "type": "number", "required": false }, "number": { "type": "string", "maxLength": 36, "required": false }, "principalAmount": { "type": "number", "required": false }, "currentInvestmentValue": { "type": "number", "required": false }, "legalEntityId": { "type": "string", "maxLength": 36, "required": false }, "productId": { "type": "string", "maxLength": 36, "required": false }, "productNumber": { "type": "string", "maxLength": 36, "required": false }, "productKindName": { "type": "string", "maxLength": 50, "required": false }, "productTypeName": { "type": "string", "maxLength": 50, "required": false }, "BIC": { "type": "string", "maxLength": 11, "required": false }, "bankBranchCode": { "type": "string", "maxLength": 20, "required": false }, "visible": { "type": "boolean", "required": false }, "accountOpeningDate": { "type": "string", "format": "date-time", "required": false }, "accountInterestRate": { "type": "number", "required": false }, "valueDateBalance": { "type": "number", "required": false }, "creditLimitUsage": { "type": "number", "required": false }, "creditLimitInterestRate": { "type": "number", "required": false }, "creditLimitExpiryDate": { "type": "string", "format": "date-time", "required": false }, "startDate": { "type": "string", "format": "date-time", "required": false }, "termUnit": { "enum": ["D", "W", "M", "Y"], "required": false }, "termNumber": { "type": "number", "required": false }, "interestPaymentFrequencyUnit": { "enum": ["D", "W", "M", "Y"], "required": false }, "interestPaymentFrequencyNumber": { "type": "number", "required": false }, "maturityDate": { "type": "string", "format": "date-time", "required": false }, "maturityAmount": { "type": "number", "required": false }, "autoRenewalIndicator": { "type": "boolean", "required": false }, "interestSettlementAccount": { "type": "string", "maxLength": 32, "required": false }, "outstandingPrincipalAmount": { "type": "number", "required": false }, "monthlyInstalmentAmount": { "type": "number", "required": false }, "amountInArrear": { "type": "number", "required": false }, "minimumRequiredBalance": { "type": "number", "required": false }, "creditCardAccountNumber": { "type": "string", "maxLength": 32, "required": false }, "validThru": { "type": "string", "format": "date-time", "required": false }, "applicableInterestRate": { "type": "number", "required": false }, "remainingCredit": { "type": "number", "required": false }, "outstandingPayment": { "type": "number", "required": false }, "minimumPayment": { "type": "number", "required": false }, "minimumPaymentDueDate": { "type": "string", "format": "date-time", "required": false }, "totalInvestmentValue": { "type": "number", "required": false }, "debitCards": { "type": "array", "items": { "properties": { "number": { "type": "string", "maxLength": 36, "required": false }, "expiryDate": { "type": "string", "maxLength": 32, "required": false } } }, "uniqueItems": true, "required": false }, "accountHolderAddressLine1": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine2": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine3": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine4": { "type": "string", "maxLength": 70, "required": false }, "accountHolderStreetName": { "type": "string", "maxLength": 70, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "accountHolderName": { "type": "string", "maxLength": 64, "required": false }, "accountHolderCountry": { "enum": ["AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "CI", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RO", "RU", "RW", "RE", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW"], "required": false }, "creditAccount": { "type": "boolean", "required": false }, "debitAccount": { "type": "boolean", "required": false }, "lastUpdateDate": { "type": "string", "format": "date-time", "required": false } } } };
	
	    definedTypes['ProductSummaryData.ProductsummaryFlatStructureNoBalances-GET'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "maxLength": 36, "required": true }, "externalArrangementId": { "type": "string", "maxLength": 50, "required": true }, "externalLegalEntityId": { "type": "string", "maxLength": 50, "required": true }, "externalProductId": { "type": "string", "maxLength": 50, "required": true }, "name": { "type": "string", "maxLength": 50, "required": false }, "alias": { "type": "string", "maxLength": 50, "required": false }, "creditLimit": { "type": "number", "required": false }, "IBAN": { "type": "string", "maxLength": 34, "pattern": "^(AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW).*", "required": false }, "BBAN": { "type": "string", "maxLength": 50, "required": false }, "currency": { "enum": ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "YER", "ZAR", "ZMW", "ZWL"], "required": false }, "externalTransferAllowed": { "type": "boolean", "required": false }, "urgentTransferAllowed": { "type": "boolean", "required": false }, "accruedInterest": { "type": "number", "required": false }, "number": { "type": "string", "maxLength": 36, "required": false }, "principalAmount": { "type": "number", "required": false }, "currentInvestmentValue": { "type": "number", "required": false }, "legalEntityId": { "type": "string", "maxLength": 36, "required": false }, "productId": { "type": "string", "maxLength": 36, "required": false }, "productNumber": { "type": "string", "maxLength": 36, "required": false }, "productKindName": { "type": "string", "maxLength": 50, "required": false }, "productTypeName": { "type": "string", "maxLength": 50, "required": false }, "BIC": { "type": "string", "maxLength": 11, "required": false }, "bankBranchCode": { "type": "string", "maxLength": 20, "required": false }, "visible": { "type": "boolean", "required": false }, "accountOpeningDate": { "type": "string", "format": "date-time", "required": false }, "accountInterestRate": { "type": "number", "required": false }, "valueDateBalance": { "type": "number", "required": false }, "creditLimitUsage": { "type": "number", "required": false }, "creditLimitInterestRate": { "type": "number", "required": false }, "creditLimitExpiryDate": { "type": "string", "format": "date-time", "required": false }, "startDate": { "type": "string", "format": "date-time", "required": false }, "termUnit": { "enum": ["D", "W", "M", "Y"], "required": false }, "termNumber": { "type": "number", "required": false }, "interestPaymentFrequencyUnit": { "enum": ["D", "W", "M", "Y"], "required": false }, "interestPaymentFrequencyNumber": { "type": "number", "required": false }, "maturityDate": { "type": "string", "format": "date-time", "required": false }, "maturityAmount": { "type": "number", "required": false }, "autoRenewalIndicator": { "type": "boolean", "required": false }, "interestSettlementAccount": { "type": "string", "maxLength": 32, "required": false }, "outstandingPrincipalAmount": { "type": "number", "required": false }, "monthlyInstalmentAmount": { "type": "number", "required": false }, "amountInArrear": { "type": "number", "required": false }, "minimumRequiredBalance": { "type": "number", "required": false }, "creditCardAccountNumber": { "type": "string", "maxLength": 32, "required": false }, "validThru": { "type": "string", "format": "date-time", "required": false }, "applicableInterestRate": { "type": "number", "required": false }, "remainingCredit": { "type": "number", "required": false }, "outstandingPayment": { "type": "number", "required": false }, "minimumPayment": { "type": "number", "required": false }, "minimumPaymentDueDate": { "type": "string", "format": "date-time", "required": false }, "totalInvestmentValue": { "type": "number", "required": false }, "debitCards": { "type": "array", "items": { "properties": { "number": { "type": "string", "maxLength": 36, "required": false }, "expiryDate": { "type": "string", "maxLength": 32, "required": false } } }, "uniqueItems": true, "required": false }, "accountHolderAddressLine1": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine2": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine3": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine4": { "type": "string", "maxLength": 70, "required": false }, "accountHolderStreetName": { "type": "string", "maxLength": 70, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "accountHolderName": { "type": "string", "maxLength": 64, "required": false }, "accountHolderCountry": { "enum": ["AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "CI", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RO", "RU", "RW", "RE", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW"], "required": false }, "creditAccount": { "type": "boolean", "required": false }, "debitAccount": { "type": "boolean", "required": false }, "lastUpdateDate": { "type": "string", "format": "date-time", "required": false } } } };
	
	    /**
	     * @typedef ProductSummaryData.AggregatedBalance
	     * @type {Object}
	     * @property {?String} currency
	     * @property {?String} value
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.Productsummary-EXAMPLE
	     * @type {*}
	     */
	
	    /**
	     * @typedef ProductSummaryData.Productsummary-GET
	     * @type {Object}
	     * @property {?ProductSummaryData.AggregatedBalance} aggregatedBalance
	     * @property {?ProductSummaryData.currentAccounts} currentAccounts
	     * @property {?ProductSummaryData.savingsAccounts} savingsAccounts
	     * @property {?ProductSummaryData.termDeposits} termDeposits
	     * @property {?ProductSummaryData.loans} loans
	     * @property {?ProductSummaryData.creditCards} creditCards
	     * @property {?ProductSummaryData.debitCards} debitCards
	     * @property {?ProductSummaryData.investmentAccounts} investmentAccounts
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.ProductsummaryFlatStructure-GET
	     * @type {Array.<ProductSummaryData.ProductsummaryItem>}
	     */
	
	    /**
	     * @typedef ProductSummaryData.ProductsummaryFlatStructureNoBalances-GET
	     * @type {Array.<ProductSummaryData.ProductsummaryItemNoBalances>}
	     */
	
	    /**
	     * @typedef ProductSummaryData.ProductsummaryItem
	     * @type {Object}
	     * @property {String} id A unique identifier for the Arrangement object that is generated and used Internally in DBS.
	     * @property {String} externalArrangementId A unique external identifier for the arrangement
	     * @property {String} externalLegalEntityId A unique identifier for the legal entity for which the arrangement is assigned to.
	     * @property {String} externalProductId A unique identifier for the product that the arrangement applies to 
	     * @property {?String} name The name that can be assigned by the bank to label a arrangement.
	     * @property {?String} alias The name that can be assigned by the customer to label the arrangement.
	     * @property {?Number} bookedBalance Amount of money available before any adjustments have been made for deposits in transit, checks that have not yet been cleared, reserve requirements and interest received.
	     * @property {?Number} availableBalance The amount that is available for transactions.
	     * @property {?Number} creditLimit The maximum amount of credit that the financial institution will extend to the account holder for this arrangement.
	     * @property {?String} IBAN Specifying the IBAN of the account.
	     * @property {?String} BBAN Specifying the BBAN of the account.
	     * @property {?String} currency The currency qualifies the amounts specified above.
	     * @property {?Boolean} externalTransferAllowed Defines if transfer to another party is allowed.
	     * @property {?Boolean} urgentTransferAllowed Defines if urgent transfer is allowed.
	     * @property {?Number} accruedInterest The interest that is earned (credit interest) or due (debit interest) but not settled yet.
	     * @property {?String} number Last 4 digits of a Payment card.
	     * @property {?Number} principalAmount The amount that was (originally) contracted for the respective product. This is mainly used in the context of loans and deposits.
	     * @property {?Number} currentInvestmentValue The total current value of all the securities kept in the account.
	     * @property {?String} legalEntityId Reference to the legal entity that is the owner of the arrangement.
	     * @property {?String} productId Reference to the product of which the arrangement is an instantiation.
	     * @property {?String} productNumber The number identifying the contract.
	     * @property {?String} productKindName The label/name that is used for the respective product kind
	     * @property {?String} productTypeName The label/name that is used to label a specific product type
	     * @property {?String} BIC Bank Identifier Code - international bank code that identifies particular banks worldwide
	     * @property {?String} bankBranchCode (This is to accomodate additional country specific fields like Sort Code in UK)
	     * @property {?Boolean} visible indicator whether to show or hide the arrangement on the widget
	     * @property {?String} accountOpeningDate The date of activation of the account in the bank's system.
	     * @property {?Number} accountInterestRate The annualized cost of credit or debt-capital computed as the percentage ratio of interest to the principal.
	     * @property {?Number} valueDateBalance The balance of the account on a specific date that needs to be used for the calculation of interest. NB! If no date is specified (like for the book date balance) the current date can be assumed.
	     * @property {?Number} creditLimitUsage Monetary amount of the used overdraft.
	     * @property {?Number} creditLimitInterestRate Overdraft Interest is an interest applied to the account for any time throughout the month when the account is overdrawn.
	     * @property {?String} creditLimitExpiryDate The date after which overdraft will no longer be available to the account (renewed automatically or cancelled).
	     * @property {?String} startDate
	     * @property {?String} termUnit The period of time and/or the interest rate arranged between Bank and customer.
	     * @property {?Number} termNumber The number of times interest rate is paid on the settlement account.
	     * @property {?String} interestPaymentFrequencyUnit Number of times per year when the accumulated interest is settled to the account on a regular basis. The frequency could be yearly, half-yearly, quarterly, monthly, weekly, daily (or not at all, until maturity).
	     * @property {?Number} interestPaymentFrequencyNumber
	     * @property {?String} maturityDate End term of a holding period.
	     * @property {?Number} maturityAmount Amount payable at the end of a holding period of a product (maturity date). For deposit all of the interest is usualy paid at maturity date (IF the term is shorter then one year).
	     * @property {?Boolean} autoRenewalIndicator Indicates whether or not an arrangement is to be continued after maturity automatically. Usually the product is renewed using the same principal and term unless renegotiation has taken place prior to expiration.
	     * @property {?String} interestSettlementAccount Account that provides quick access to accumulated cash to facilitate daily settlements with other businesses.
	     * @property {?Number} outstandingPrincipalAmount This IS the value date balance of the arrangement.
	     * @property {?Number} monthlyInstalmentAmount A fixed payment amount paid by a borrower to the bank at a specified date each calendar month.
	     * @property {?Number} amountInArrear The part of a debt that is overdue after missing one or more required payments. The amount of the arrears is the amount accrued from the date on which the first missed payment was due.
	     * @property {?Number} minimumRequiredBalance Minimum amount that a customer must have in an account in order to receive some sort of service, such as keeping the account open or receive interest.
	     * @property {?String} creditCardAccountNumber The number of the account the credit card transactions settle on (so actually the reference to the settlement account of the card)?
	     * @property {?String} validThru Expiration date of a credit card, after which is no longer valid.
	     * @property {?Number} applicableInterestRate The interest rate or rates which would be used for a particular arrangement.
	     * @property {?Number} remainingCredit
	     * @property {?Number} outstandingPayment
	     * @property {?Number} minimumPayment The minimum payment set a percentage of balance, or a fixed cash amount.
	     * @property {?String} minimumPaymentDueDate Minimum Payment Due Date shown on your monthly statement to remain in good standing.
	     * @property {?Number} totalInvestmentValue
	     * @property {?Array.<DebitCardItem>} debitCards
	     * @property {?String} accountHolderAddressLine1 Address of the Payer/Payee - Alternate address line for the account.
	     * @property {?String} accountHolderAddressLine2 Address of the Payer/Payee - Alternate address line for the account.
	     * @property {?String} accountHolderAddressLine3 Deprecated. In future will be replace with accountHolderStreetName
	     * @property {?String} accountHolderAddressLine4 Deprecated. In future will be replace with town
	     * @property {?String} accountHolderStreetName Street name of the Payer/Payee - Alternate street name for the account.
	     * @property {?String} town Town of the Payer/Payee - Alternate town for the account.
	     * @property {?String} postCode
	     * @property {?String} countrySubDivision
	     * @property {?String} accountHolderName
	     * @property {?String} accountHolderCountry ISO Country code 2 chars
	     * @property {?Boolean} creditAccount Indicator whether or not the arrangement can be used in payment orders as credit account.
	     * @property {?Boolean} debitAccount Indicator whether or not the arrangement can be used in payment orders as debit account.
	     * @property {?String} lastUpdateDate Last date of parameter update for the arrangement.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.ProductsummaryItemNoBalances
	     * @type {Object}
	     * @property {String} id A unique identifier for the Arrangement object that is generated and used Internally in DBS.
	     * @property {String} externalArrangementId A unique external identifier for the arrangement
	     * @property {String} externalLegalEntityId A unique identifier for the legal entity for which the arrangement is assigned to.
	     * @property {String} externalProductId A unique identifier for the product that the arrangement applies to 
	     * @property {?String} name The name that can be assigned by the bank to label a arrangement.
	     * @property {?String} alias The name that can be assigned by the customer to label the arrangement.
	     * @property {?Number} creditLimit The maximum amount of credit that the financial institution will extend to the account holder for this arrangement.
	     * @property {?String} IBAN Specifying the IBAN of the account.
	     * @property {?String} BBAN Specifying the BBAN of the account.
	     * @property {?String} currency The currency qualifies the amounts specified above.
	     * @property {?Boolean} externalTransferAllowed Defines if transfer to another party is allowed.
	     * @property {?Boolean} urgentTransferAllowed Defines if urgent transfer is allowed.
	     * @property {?Number} accruedInterest The interest that is earned (credit interest) or due (debit interest) but not settled yet.
	     * @property {?String} number Last 4 digits of a Payment card.
	     * @property {?Number} principalAmount The amount that was (originally) contracted for the respective product. This is mainly used in the context of loans and deposits.
	     * @property {?Number} currentInvestmentValue The total current value of all the securities kept in the account.
	     * @property {?String} legalEntityId Reference to the legal entity that is the owner of the arrangement.
	     * @property {?String} productId Reference to the product of which the arrangement is an instantiation.
	     * @property {?String} productNumber The number identifying the contract.
	     * @property {?String} productKindName The label/name that is used for the respective product kind
	     * @property {?String} productTypeName The label/name that is used to label a specific product type
	     * @property {?String} BIC Bank Identifier Code - international bank code that identifies particular banks worldwide
	     * @property {?String} bankBranchCode (This is to accomodate additional country specific fields like Sort Code in UK)
	     * @property {?Boolean} visible indicator whether to show or hide the arrangement on the widget
	     * @property {?String} accountOpeningDate The date of activation of the account in the bank's system.
	     * @property {?Number} accountInterestRate The annualized cost of credit or debt-capital computed as the percentage ratio of interest to the principal.
	     * @property {?Number} valueDateBalance The balance of the account on a specific date that needs to be used for the calculation of interest. NB! If no date is specified (like for the book date balance) the current date can be assumed.
	     * @property {?Number} creditLimitUsage Monetary amount of the used overdraft.
	     * @property {?Number} creditLimitInterestRate Overdraft Interest is an interest applied to the account for any time throughout the month when the account is overdrawn.
	     * @property {?String} creditLimitExpiryDate The date after which overdraft will no longer be available to the account (renewed automatically or cancelled).
	     * @property {?String} startDate
	     * @property {?String} termUnit The period of time and/or the interest rate arranged between Bank and customer.
	     * @property {?Number} termNumber The number of times interest rate is paid on the settlement account.
	     * @property {?String} interestPaymentFrequencyUnit Number of times per year when the accumulated interest is settled to the account on a regular basis. The frequency could be yearly, half-yearly, quarterly, monthly, weekly, daily (or not at all, until maturity).
	     * @property {?Number} interestPaymentFrequencyNumber
	     * @property {?String} maturityDate End term of a holding period.
	     * @property {?Number} maturityAmount Amount payable at the end of a holding period of a product (maturity date). For deposit all of the interest is usualy paid at maturity date (IF the term is shorter then one year).
	     * @property {?Boolean} autoRenewalIndicator Indicates whether or not an arrangement is to be continued after maturity automatically. Usually the product is renewed using the same principal and term unless renegotiation has taken place prior to expiration.
	     * @property {?String} interestSettlementAccount Account that provides quick access to accumulated cash to facilitate daily settlements with other businesses.
	     * @property {?Number} outstandingPrincipalAmount This IS the value date balance of the arrangement.
	     * @property {?Number} monthlyInstalmentAmount A fixed payment amount paid by a borrower to the bank at a specified date each calendar month.
	     * @property {?Number} amountInArrear The part of a debt that is overdue after missing one or more required payments. The amount of the arrears is the amount accrued from the date on which the first missed payment was due.
	     * @property {?Number} minimumRequiredBalance Minimum amount that a customer must have in an account in order to receive some sort of service, such as keeping the account open or receive interest.
	     * @property {?String} creditCardAccountNumber The number of the account the credit card transactions settle on (so actually the reference to the settlement account of the card)?
	     * @property {?String} validThru Expiration date of a credit card, after which is no longer valid.
	     * @property {?Number} applicableInterestRate The interest rate or rates which would be used for a particular arrangement.
	     * @property {?Number} remainingCredit
	     * @property {?Number} outstandingPayment
	     * @property {?Number} minimumPayment The minimum payment set a percentage of balance, or a fixed cash amount.
	     * @property {?String} minimumPaymentDueDate Minimum Payment Due Date shown on your monthly statement to remain in good standing.
	     * @property {?Number} totalInvestmentValue
	     * @property {?Array.<DebitCardItem>} debitCards
	     * @property {?String} accountHolderAddressLine1 Address of the Payer/Payee - Alternate address line for the account.
	     * @property {?String} accountHolderAddressLine2 Address of the Payer/Payee - Alternate address line for the account.
	     * @property {?String} accountHolderAddressLine3 Deprecated. In future will be replace with accountHolderStreetName
	     * @property {?String} accountHolderAddressLine4 Deprecated. In future will be replace with town
	     * @property {?String} accountHolderStreetName Street name of the Payer/Payee - Alternate street name for the account.
	     * @property {?String} town Town of the Payer/Payee - Alternate town for the account.
	     * @property {?String} postCode
	     * @property {?String} countrySubDivision
	     * @property {?String} accountHolderName
	     * @property {?String} accountHolderCountry ISO Country code 2 chars
	     * @property {?Boolean} creditAccount Indicator whether or not the arrangement can be used in payment orders as credit account.
	     * @property {?Boolean} debitAccount Indicator whether or not the arrangement can be used in payment orders as debit account.
	     * @property {?String} lastUpdateDate Last date of parameter update for the arrangement.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.creditCards
	     * @type {Object}
	     * @property {?String} name
	     * @property {?Array.<CreditCard>} products
	     * @property {?ProductSummaryData.AggregatedBalance} aggregatedBalance
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.currentAccounts
	     * @type {Object}
	     * @property {?String} name
	     * @property {?Array.<CurrentAccount>} products
	     * @property {?ProductSummaryData.AggregatedBalance} aggregatedBalance
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.debitCards
	     * @type {Object}
	     * @property {?String} name
	     * @property {?Array.<DebitCard>} products
	     * @property {?ProductSummaryData.AggregatedBalance} aggregatedBalance
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.investmentAccounts
	     * @type {Object}
	     * @property {?String} name
	     * @property {?Array.<InvestmentAccount>} products
	     * @property {?ProductSummaryData.AggregatedBalance} aggregatedBalance
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.loans
	     * @type {Object}
	     * @property {?String} name
	     * @property {?Array.<Loan>} products
	     * @property {?ProductSummaryData.AggregatedBalance} aggregatedBalance
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.savingsAccounts
	     * @type {Object}
	     * @property {?String} name
	     * @property {?Array.<SavingsAccount>} products
	     * @property {?ProductSummaryData.AggregatedBalance} aggregatedBalance
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.termDeposits
	     * @type {Object}
	     * @property {?String} name
	     * @property {?Array.<TermDeposit>} products
	     * @property {?ProductSummaryData.AggregatedBalance} aggregatedBalance
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
	     * @name ProductSummaryData#getProductsummary
	     * @type {Function}
	     * @description Retrieve list of products summaries.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link ProductSummaryData.Productsummary-GET} on success 
	     *
	     * @example
	     * productSummaryData
	     *  .getProductsummary(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getProductsummary(params, headers) {
	      var url = '' + baseUri + version + '/productsummary';
	
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
	     * @name ProductSummaryData#getProductsummaryDebitaccounts
	     * @type {Function}
	     * @description Retrieve a list of accounts when debitAccounts is selected true
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link ProductSummaryData.Productsummary-GET} on success 
	     *
	     * @example
	     * productSummaryData
	     *  .getProductsummaryDebitaccounts(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getProductsummaryDebitaccounts(params, headers) {
	      var url = '' + baseUri + version + '/productsummary/debitaccounts';
	
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
	     * @name ProductSummaryData#getProductsummaryCreditaccounts
	     * @type {Function}
	     * @description Retrieve a list of accounts when creditAccounts is selected true
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link ProductSummaryData.Productsummary-GET} on success 
	     *
	     * @example
	     * productSummaryData
	     *  .getProductsummaryCreditaccounts(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getProductsummaryCreditaccounts(params, headers) {
	      var url = '' + baseUri + version + '/productsummary/creditaccounts';
	
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
	     * @name ProductSummaryData#getProductsummaryArrangements
	     * @type {Function}
	     * @description Retrieve list of products summaries, flat structure.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?string} params.legalEntityId legalEntityId. Eg: id9876543210.
	       
	     * @param {?string} params.productKindName Product kind name. Eg: Current Account.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     * @param {?string} params.orderBy Order by field: "name", "externalArrangementId", "externalLegalEntityId", "externalProductId", "alias", "bookedBalance", "availableBalance", "creditLimit", "IBAN", "BBAN", "BIC", "currency", "externalTransferAllowed", "urgentTransferAllowed", "accruedInterest", "Number", "principalAmount", "currentInvestmentValue", "legalEntityId", "productId", "productNumber", "accountOpeningDate", "accountInterestRate", "valueDateBalance", "creditLimitUsage", "creditLimitInterestRate", "creditLimitExpiryDate", "debitCards", "startDate", "termUnit", "termNumber", "maturityDate", "maturityAmount", "autoRenewalIndicator", "interestPaymentFrequencyUnit", "interestPaymentFrequencyNumber", "interestSettlementAccount", "outstandingPrincipalAmount", "monthlyInstalmentAmount", "amountInArrear", "minimumRequiredBalance", "creditCardAccountNumber", "validThru", "applicableInterestRate", "remainingCredit", "outstandingPayment", "minimumPayment", "minimumPaymentDueDate", "totalInvestmentValue", "accountHolderAddressLine1", "accountHolderAddressLine2", "accountHolderAddressLine3", "accountHolderAddressLine4", "accountHolderStreetName", "postCode", "town", "countrySubDivision", "accountHolderCountry", "creditAccount", "debitAccount","productKindName","productTypeName".
	       
	     * @param {?string} params.direction Direction. (defaults to DESC)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link ProductSummaryData.ProductsummaryFlatStructure-GET} on success 
	     *
	     * @example
	     * productSummaryData
	     *  .getProductsummaryArrangements(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getProductsummaryArrangements(params, headers) {
	      var url = '' + baseUri + version + '/productsummary/arrangements';
	
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
	     * @name ProductSummaryData#getProductsummaryConfigurationRecord
	     * @type {Function}
	     * @description Retrieve list of products summaries, flat structure.
	     
	     * @param {string} legalEntityId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     * @param {?string} params.orderBy Order by field: "name", "externalArrangementId", "externalLegalEntityId", "externalProductId", "alias", "bookedBalance", "availableBalance", "creditLimit", "IBAN", "BBAN", "BIC", "currency", "externalTransferAllowed", "urgentTransferAllowed", "accruedInterest", "Number", "principalAmount", "currentInvestmentValue", "legalEntityId", "productId", "productNumber", "accountOpeningDate", "accountInterestRate", "valueDateBalance", "creditLimitUsage", "creditLimitInterestRate", "creditLimitExpiryDate", "debitCards", "startDate", "termUnit", "termNumber", "maturityDate", "maturityAmount", "autoRenewalIndicator", "interestPaymentFrequencyUnit", "interestPaymentFrequencyNumber", "interestSettlementAccount", "outstandingPrincipalAmount", "monthlyInstalmentAmount", "amountInArrear", "minimumRequiredBalance", "creditCardAccountNumber", "validThru", "applicableInterestRate", "remainingCredit", "outstandingPayment", "minimumPayment", "minimumPaymentDueDate", "totalInvestmentValue", "accountHolderAddressLine1", "accountHolderAddressLine2", "accountHolderAddressLine3", "accountHolderAddressLine4", "accountHolderStreetName", "postCode", "town", "countrySubDivision", "accountHolderCountry", "creditAccount", "debitAccount","productKindName","productTypeName".
	       
	     * @param {?string} params.direction Direction. (defaults to DESC)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link ProductSummaryData.ProductsummaryFlatStructure-GET} on success 
	     *
	     * @example
	     * productSummaryData
	     *  .getProductsummaryConfigurationRecord(legalEntityId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getProductsummaryConfigurationRecord(legalEntityId, params, headers) {
	      var url = '' + baseUri + version + '/productsummary/configuration/' + legalEntityId;
	
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
	     * @name ProductSummaryData#getProductsummaryContextArrangements
	     * @type {Function}
	     * @description Get a list of arrangements according to a given business function
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.businessFunction Provide the context for retrieving arrangements. Eg: Product Summary.
	       
	     * @param {string} params.resourceName Provide the resource for retrieving arrangements. Eg: Product Summary.
	       
	     * @param {string} params.privilege Privilege for the arrangements. Eg: view.
	       
	     * @param {?string} params.externalTransferAllowed Privilege for external transfers. Eg: false.
	       
	     * @param {?string} params.creditAccount Type of account. Eg: true.
	       
	     * @param {?string} params.debitAccount Type of account. Eg: true.
	       
	     * @param {?string} params.productKindName Product Kind Name. Eg: Current Account.
	       
	     * @param {?string} params.searchTerm Full text search. Eg: Account X.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     * @param {?string} params.orderBy Order by field: "name", "externalArrangementId", "externalLegalEntityId", "externalProductId", "alias", "bookedBalance", "availableBalance", "creditLimit", "IBAN", "BBAN", "BIC", "currency", "externalTransferAllowed", "urgentTransferAllowed", "accruedInterest", "Number", "principalAmount", "currentInvestmentValue", "legalEntityId", "productId", "productNumber", "accountOpeningDate", "accountInterestRate", "valueDateBalance", "creditLimitUsage", "creditLimitInterestRate", "creditLimitExpiryDate", "debitCards", "startDate", "termUnit", "termNumber", "maturityDate", "maturityAmount", "autoRenewalIndicator", "interestPaymentFrequencyUnit", "interestPaymentFrequencyNumber", "interestSettlementAccount", "outstandingPrincipalAmount", "monthlyInstalmentAmount", "amountInArrear", "minimumRequiredBalance", "creditCardAccountNumber", "validThru", "applicableInterestRate", "remainingCredit", "outstandingPayment", "minimumPayment", "minimumPaymentDueDate", "totalInvestmentValue", "accountHolderAddressLine1", "accountHolderAddressLine2", "accountHolderAddressLine3", "accountHolderAddressLine4", "accountHolderStreetName", "postCode", "town", "countrySubDivision", "accountHolderCountry", "creditAccount", "debitAccount","productKindName","productTypeName".
	       
	     * @param {?string} params.direction Direction. (defaults to DESC)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link ProductSummaryData.ProductsummaryFlatStructure-GET} on success 
	     *
	     * @example
	     * productSummaryData
	     *  .getProductsummaryContextArrangements(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getProductsummaryContextArrangements(params, headers) {
	      var url = '' + baseUri + version + '/productsummary/context/arrangements';
	
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
	     * @name ProductSummaryData#getProductsummaryContextArrangementsWithoutBalances
	     * @type {Function}
	     * @description Get a list of arrangements according to a given business function
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.businessFunction Provide the context for retrieving arrangements. Eg: Product Summary.
	       
	     * @param {string} params.resourceName Provide the resource for retrieving arrangements. Eg: Product Summary.
	       
	     * @param {string} params.privilege Privilege for the arrangements. Eg: view.
	       
	     * @param {?string} params.externalTransferAllowed Privilege for external transfers. Eg: false.
	       
	     * @param {?string} params.creditAccount Type of account. Eg: true.
	       
	     * @param {?string} params.debitAccount Type of account. Eg: true.
	       
	     * @param {?string} params.productKindName Product Kind Name. Eg: Current Account.
	       
	     * @param {?string} params.searchTerm Full text search. Eg: Account X.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     * @param {?string} params.orderBy Order by field: "name", "externalArrangementId", "externalLegalEntityId", "externalProductId", "alias", "bookedBalance", "availableBalance", "creditLimit", "IBAN", "BBAN", "BIC", "currency", "externalTransferAllowed", "urgentTransferAllowed", "accruedInterest", "Number", "principalAmount", "currentInvestmentValue", "legalEntityId", "productId", "productNumber", "accountOpeningDate", "accountInterestRate", "valueDateBalance", "creditLimitUsage", "creditLimitInterestRate", "creditLimitExpiryDate", "debitCards", "startDate", "termUnit", "termNumber", "maturityDate", "maturityAmount", "autoRenewalIndicator", "interestPaymentFrequencyUnit", "interestPaymentFrequencyNumber", "interestSettlementAccount", "outstandingPrincipalAmount", "monthlyInstalmentAmount", "amountInArrear", "minimumRequiredBalance", "creditCardAccountNumber", "validThru", "applicableInterestRate", "remainingCredit", "outstandingPayment", "minimumPayment", "minimumPaymentDueDate", "totalInvestmentValue", "accountHolderAddressLine1", "accountHolderAddressLine2", "accountHolderAddressLine3", "accountHolderAddressLine4", "accountHolderStreetName", "postCode", "town", "countrySubDivision", "accountHolderCountry", "creditAccount", "debitAccount","productKindName","productTypeName".
	       
	     * @param {?string} params.direction Direction. (defaults to DESC)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link ProductSummaryData.ProductsummaryFlatStructureNoBalances-GET} on success 
	     *
	     * @example
	     * productSummaryData
	     *  .getProductsummaryContextArrangementsWithoutBalances(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getProductsummaryContextArrangementsWithoutBalances(params, headers) {
	      var url = '' + baseUri + version + '/productsummary/context/arrangements/withoutBalances';
	
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
	
	      getProductsummary: getProductsummary,
	
	      getProductsummaryDebitaccounts: getProductsummaryDebitaccounts,
	
	      getProductsummaryCreditaccounts: getProductsummaryCreditaccounts,
	
	      getProductsummaryArrangements: getProductsummaryArrangements,
	
	      getProductsummaryConfigurationRecord: getProductsummaryConfigurationRecord,
	
	      getProductsummaryContextArrangements: getProductsummaryContextArrangements,
	
	      getProductsummaryContextArrangementsWithoutBalances: getProductsummaryContextArrangementsWithoutBalances,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-product-summary-http-ng.js.map