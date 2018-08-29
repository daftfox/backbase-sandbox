(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-arrangements-http-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-arrangements-http-ng"] = factory(require("vendor-bb-angular"));
	else
		root["data-bb-arrangements-http-ng"] = factory(root["vendor-bb-angular"]);
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
	exports.arrangementsDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbArrangementsHttp = __webpack_require__(3);
	
	var _dataBbArrangementsHttp2 = _interopRequireDefault(_dataBbArrangementsHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	/**
	 * @module data-bb-arrangements-http-ng
	 *
	 * @description A data module for accessing the Arrangements REST API.
	 *
	 * @returns {String} `data-bb-arrangements-http-ng`
	 * @example
	 * import arrangementsDataModuleKey, {
	 *   arrangementsDataKey,
	 * } from 'data-bb-arrangements-http-ng';
	 */
	
	var arrangementsDataModuleKey = 'data-bb-arrangements-http-ng';
	/**
	 * @name arrangementsDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the ArrangementsData service
	 */
	var arrangementsDataKey = exports.arrangementsDataKey = 'data-bb-arrangements-http-ng:arrangementsData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(arrangementsDataModuleKey, [])
	
	/**
	 * @constructor ArrangementsData
	 * @type {object}
	 *
	 * @description Public api for data-bb-arrangements-http-ng service
	 *
	 */
	.provider(arrangementsDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name ArrangementsDataProvider
	   * @type {object}
	   * @ngkey data-bb-arrangements-http-ng:arrangementsDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-arrangements-http-ng:arrangementsDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-arrangements-http-ng:arrangementsDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name ArrangementsDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name ArrangementsDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http', '$httpParamSerializer',
	    /* into */
	    (0, _dataBbArrangementsHttp2.default)(config)]
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
	
	    definedTypes['ArrangementsData.ArrangementItemPost'] = { "properties": { "externalLegalEntityId": { "type": "string", "maxLength": 50, "required": true }, "externalProductId": { "type": "string", "maxLength": 50, "required": true }, "alias": { "type": "string", "maxLength": 50, "required": false }, "legalEntityId": { "type": "string", "maxLength": 36, "required": false }, "productId": { "type": "string", "maxLength": 36, "required": false } } };
	
	    definedTypes['ArrangementsData.ArrangemenItemBase'] = { "properties": { "externalArrangementId": { "type": "string", "maxLength": 50, "required": true }, "name": { "type": "string", "maxLength": 50, "required": false }, "bookedBalance": { "type": "number", "required": false }, "availableBalance": { "type": "number", "required": false }, "creditLimit": { "type": "number", "required": false }, "IBAN": { "type": "string", "maxLength": 34, "pattern": "^(AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW).*", "required": false }, "BBAN": { "type": "string", "maxLength": 50, "required": false }, "currency": { "enum": ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "YER", "ZAR", "ZMW", "ZWL"], "required": true }, "externalTransferAllowed": { "type": "boolean", "required": false }, "urgentTransferAllowed": { "type": "boolean", "required": false }, "accruedInterest": { "type": "number", "required": false }, "number": { "type": "string", "maxLength": 36, "required": false }, "principalAmount": { "type": "number", "required": false }, "currentInvestmentValue": { "type": "number", "minimum": 0, "required": false }, "productNumber": { "type": "string", "maxLength": 36, "required": false }, "BIC": { "type": "string", "maxLength": 11, "required": false }, "bankBranchCode": { "type": "string", "maxLength": 20, "required": false }, "accountOpeningDate": { "type": "string", "format": "date-time", "required": false }, "accountInterestRate": { "type": "number", "required": false }, "valueDateBalance": { "type": "number", "required": false }, "creditLimitUsage": { "type": "number", "required": false }, "creditLimitInterestRate": { "type": "number", "required": false }, "creditLimitExpiryDate": { "type": "string", "format": "date-time", "required": false }, "startDate": { "type": "string", "format": "date-time", "required": false }, "termUnit": { "enum": ["D", "W", "M", "Y"], "required": false }, "termNumber": { "type": "number", "required": false }, "interestPaymentFrequencyUnit": { "enum": ["D", "W", "M", "Y"], "required": false }, "interestPaymentFrequencyNumber": { "type": "number", "required": false }, "maturityDate": { "type": "string", "format": "date-time", "required": false }, "maturityAmount": { "type": "number", "required": false }, "autoRenewalIndicator": { "type": "boolean", "required": false }, "interestSettlementAccount": { "type": "string", "maxLength": 32, "required": false }, "outstandingPrincipalAmount": { "type": "number", "required": false }, "monthlyInstalmentAmount": { "type": "number", "required": false }, "amountInArrear": { "type": "number", "required": false }, "minimumRequiredBalance": { "type": "number", "required": false }, "creditCardAccountNumber": { "type": "string", "maxLength": 32, "required": false }, "validThru": { "type": "string", "format": "date-time", "required": false }, "applicableInterestRate": { "type": "number", "required": false }, "remainingCredit": { "type": "number", "required": false }, "outstandingPayment": { "type": "number", "required": false }, "minimumPayment": { "type": "number", "required": false }, "minimumPaymentDueDate": { "type": "string", "format": "date-time", "required": false }, "totalInvestmentValue": { "type": "number", "required": false }, "debitCards": { "type": "array", "items": { "properties": { "number": { "type": "string", "maxLength": 36, "required": false }, "expiryDate": { "type": "string", "maxLength": 32, "required": false } } }, "uniqueItems": true, "required": false }, "accountHolderAddressLine1": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine2": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine3": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine4": { "type": "string", "maxLength": 70, "required": false }, "accountHolderStreetName": { "type": "string", "maxLength": 70, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "accountHolderName": { "type": "string", "maxLength": 64, "required": false }, "accountHolderCountry": { "enum": ["AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "CI", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RO", "RU", "RW", "RE", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW"], "required": false }, "creditAccount": { "type": "boolean", "default": true, "required": false }, "debitAccount": { "type": "boolean", "default": true, "required": false }, "lastUpdateDate": { "type": "string", "format": "date-time", "required": false }, "alias": { "type": "string", "maxLength": 50, "required": false } } };
	
	    definedTypes['ArrangementsData.ArrangementItem'] = { "properties": { "id": { "type": "string", "maxLength": 36, "required": true }, "productKindName": { "type": "string", "maxLength": 50, "required": false }, "visible": { "type": "boolean", "required": false }, "legalEntityId": { "type": "string", "maxLength": 36, "required": true }, "productId": { "type": "string", "maxLength": 36, "required": true }, "productTypeName": { "type": "string", "maxLength": 50, "required": false }, "externalLegalEntityId": { "type": "string", "maxLength": 50, "required": true }, "externalProductId": { "type": "string", "maxLength": 50, "required": true } } };
	
	    definedTypes['ArrangementsData.ArrangementItems'] = { "properties": { "totalElements": { "type": "number", "required": true }, "arrangementElements": { "type": "array", "items": { "properties": { "id": { "type": "string", "maxLength": 36, "required": true }, "productKindName": { "type": "string", "maxLength": 50, "required": false }, "visible": { "type": "boolean", "required": false }, "legalEntityId": { "type": "string", "maxLength": 36, "required": true }, "productId": { "type": "string", "maxLength": 36, "required": true }, "productTypeName": { "type": "string", "maxLength": 50, "required": false }, "externalLegalEntityId": { "type": "string", "maxLength": 50, "required": true }, "externalProductId": { "type": "string", "maxLength": 50, "required": true } } }, "required": true } } };
	
	    definedTypes['ArrangementsData.BalanceItem'] = { "type": "array", "items": { "properties": { "arrangementId": { "type": "string", "required": true }, "bookedBalance": { "type": "number", "required": true }, "availableBalance": { "type": "number", "required": true } } } };
	
	    definedTypes['ArrangementsData.ArrangementAddedResponse'] = { "properties": { "id": { "type": "string", "required": true } } };
	
	    definedTypes['ArrangementsData.ArrangementPatch'] = { "properties": { "id": { "type": "string", "required": true }, "alias": { "type": "string", "maxLength": 64, "required": false }, "visible": { "type": "boolean", "required": false } } };
	
	    definedTypes['ArrangementsData.ProductItem'] = { "properties": { "externalProductId": { "type": "string", "required": true }, "externalProductKindId": { "type": "string", "required": true }, "productKindName": { "type": "string", "enum": ["Current Account", "Credit Card", "Debit Card", "Loan", "Savings Account", "Investment Account", "Term Deposit"], "required": true }, "externalProductTypeId": { "type": "string", "required": false }, "productTypeName": { "type": "string", "required": false } } };
	
	    definedTypes['ArrangementsData.ProductId'] = { "properties": { "id": { "type": "string", "required": true } } };
	
	    definedTypes['ArrangementsData.ProductsGet'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true } } } };
	
	    definedTypes['ArrangementsData.ArrangementsWithBalanceHistory'] = { "properties": { "items": { "type": "array", "items": { "properties": { "arrangementId": { "type": "string", "required": true }, "balanceHistory": { "type": "array", "items": { "properties": { "dateFrom": { "type": "string", "required": true }, "dateTo": { "type": "string", "required": true }, "valuePtc": { "type": "string", "required": true }, "value": { "type": "object", "properties": { "currency": { "type": "string", "required": false }, "balance": { "type": "string", "required": false } }, "required": true } } }, "required": true } } }, "required": true } } };
	
	    definedTypes['ArrangementsData.BalanceHistoryItem'] = { "properties": { "externalArrangementId": { "type": "string", "maxLength": 50, "required": true }, "balance": { "type": "number", "required": true }, "updatedDate": { "type": "string", "format": "date-time", "required": true } } };
	
	    definedTypes['ArrangementsData.BalanceHistoryItemAddedResponse'] = { "properties": { "id": { "type": "string", "required": true } } };
	
	    /**
	     * @typedef ArrangementsData.ArrangemenItemBase
	     * @type {Object}
	     * @property {String} externalArrangementId A unique external identifier for the arrangement
	     * @property {?String} name The name that can be assigned by the bank to label a arrangement
	     * @property {?Number} bookedBalance Amount of money available before any adjustments have been made for deposits in transit, checks that have not yet been cleared, reserve requirements and interest received
	     * @property {?Number} availableBalance The amount that is available for transactions
	     * @property {?Number} creditLimit The maximum amount of credit that the financial institution will extend to the account holder for this arrangement
	     * @property {?String} IBAN Specifying the IBAN of the account
	     * @property {?String} BBAN Specifying the BBAN of the account
	     * @property {String} currency
	     * @property {?Boolean} externalTransferAllowed Defines if transfer to another party is allowed
	     * @property {?Boolean} urgentTransferAllowed Defines if urgent transfer is allowed
	     * @property {?Number} accruedInterest The interest that is earned (credit interest) or due (debit interest) but not settled yet
	     * @property {?String} number Last 4 digits of a Payment card
	     * @property {?Number} principalAmount The amount that was (originally) contracted for the respective product. This is mainly used in the context of loans and deposits. 
	     * @property {?Number} currentInvestmentValue The total current value of all the securities kept in the account
	     * @property {?String} productNumber The number identifying the contract
	     * @property {?String} BIC Bank Identifier Code - international bank code that identifies particular banks worldwide
	     * @property {?String} bankBranchCode This is to accomodate additional country specific fields like Sort Code in UK
	     * @property {?String} accountOpeningDate The date of activation of the account in the bank's system
	     * @property {?Number} accountInterestRate The annualized cost of credit or debt-capital computed as the percentage ratio of interest to the principal.
	     * @property {?Number} valueDateBalance The balance of the account on a specific date that needs to be used for the calculation of interest. NB! If no date is specified (like for the book date balance) the current date can be assumed.
	     * @property {?Number} creditLimitUsage Monetary amount of the used overdraft
	     * @property {?Number} creditLimitInterestRate Overdraft Interest is an interest applied to the account for any time throughout the month when the account is overdrawn
	     * @property {?String} creditLimitExpiryDate The date after which overdraft will no longer be available to the account (renewed automatically or cancelled)
	     * @property {?String} startDate
	     * @property {?String} termUnit
	     * @property {?Number} termNumber The number of times interest rate is paid on the settlement account.
	     * @property {?String} interestPaymentFrequencyUnit Number of times per year when the accumulated interest is settled to the account on a regular basis. The frequency could be yearly, half-yearly, quarterly, monthly, weekly, daily (or not at all, until maturity).
	     * @property {?Number} interestPaymentFrequencyNumber
	     * @property {?String} maturityDate End term of a holding period
	     * @property {?Number} maturityAmount Amount payable at the end of a holding period of a product (maturity date). For deposit all of the interest is usualy paid at maturity date (IF the term is shorter then one year).
	     * @property {?Boolean} autoRenewalIndicator Indicates whether or not an arrangement is to be continued after maturity automatically. Usually the product is renewed using the same principal and term unless renegotiation has taken place prior to expiration.
	     * @property {?String} interestSettlementAccount Account that provides quick access to accumulated cash to facilitate daily settlements with other businesses
	     * @property {?Number} outstandingPrincipalAmount This IS the value date balance of the arrangement.
	     * @property {?Number} monthlyInstalmentAmount A fixed payment amount paid by a borrower to the bank at a specified date each calendar month.
	     * @property {?Number} amountInArrear The part of a debt that is overdue after missing one or more required payments. The amount of the arrears is the amount accrued from the date on which the first missed payment was due.
	     * @property {?Number} minimumRequiredBalance Minimum amount that a customer must have in an account in order to receive some sort of service, such as keeping the account open or receive interest
	     * @property {?String} creditCardAccountNumber The number of the account the credit card transactions settle on
	     * @property {?String} validThru Expiration date of a credit card, after which is no longer valid
	     * @property {?Number} applicableInterestRate The interest rate or rates which would be used for a particular arrangement
	     * @property {?Number} remainingCredit
	     * @property {?Number} outstandingPayment
	     * @property {?Number} minimumPayment The minimum payment set a percentage of balance, or a fixed cash amount
	     * @property {?String} minimumPaymentDueDate Minimum Payment Due Date shown on your monthly statement to remain in good standing
	     * @property {?Number} totalInvestmentValue
	     * @property {?Array.<DebitCardItem>} debitCards
	     * @property {?String} accountHolderAddressLine1 Address of the Payer/Payee - Alternate address line for the account
	     * @property {?String} accountHolderAddressLine2 Address of the Payer/Payee - Alternate address line for the account
	     * @property {?String} accountHolderAddressLine3 Deprecated. In future will be replace with accountHolderStreetName
	     * @property {?String} accountHolderAddressLine4 Deprecated. In future will be replace with town
	     * @property {?String} accountHolderStreetName Street name of the Payer/Payee - Alternate street name for the account.
	     * @property {?String} town Town of the Payer/Payee - Alternate town for the account.
	     * @property {?String} postCode
	     * @property {?String} countrySubDivision
	     * @property {?String} accountHolderName The name that can be assigned by the bank holder of a given arrangement
	     * @property {?String} accountHolderCountry
	     * @property {?Boolean} creditAccount Indicator wether or not the arrangement can be used in payment orders as credit account
	     * @property {?Boolean} debitAccount Indicator wether or not the arrangement can be used in payment orders as debit account
	     * @property {?String} lastUpdateDate Last date of parametar update for the arrangement
	     * @property {?String} alias The name that can be assigned by the customer to label the arrangement
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ArrangementsData.ArrangementAddedResponse
	     * @type {Object}
	     * @property {String} id Internally used unique identification
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ArrangementsData.ArrangementItem
	     * @type {Object}
	     * @property {String} id A unique identifier for the Arrangement object that is generated and used Internally in DBS
	     * @property {?String} productKindName
	     * @property {?Boolean} visible User specific visibility for an arrangement
	     * @property {String} legalEntityId Reference to the legal entity that is the owner of the arrangement.
	     * @property {String} productId Reference to the product of which the arrangement is an instantiation.
	     * @property {?String} productTypeName
	     * @property {String} externalLegalEntityId A unique identifier for the legal entity for which the arrangement is assigned to.
	     * @property {String} externalProductId A unique identifier for the product that the arrangement applies to
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ArrangementsData.ArrangementItemPost
	     * @type {Object}
	     * @property {String} externalLegalEntityId A unique identifier for the legal entity for which the arrangement is assigned to.
	     * @property {String} externalProductId A unique identifier for the product that the arrangement applies to
	     * @property {?String} alias The name that can be assigned by the customer to label the arrangement
	     * @property {?String} legalEntityId Reference to the legal entity that is the owner of the arrangement.
	     * @property {?String} productId Reference to the product of which the arrangement is an instantiation.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ArrangementsData.ArrangementItems
	     * @type {Object}
	     * @property {Number} totalElements total number of elements matching the query
	     * @property {Array.<ArrangementsData.ArrangementItem>} arrangementElements
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ArrangementsData.ArrangementPatch
	     * @type {Object}
	     * @property {String} id Internally used unique identification of arrangement
	     * @property {?String} alias User specific naming for an arrangement
	     * @property {?Boolean} visible User specific visibility for an arrangement
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ArrangementsData.ArrangementsWithBalanceHistory
	     * @type {Object}
	     * @property {Array.<ArrangementWithBalanceHistory>} items
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ArrangementsData.BalanceHistoryItem
	     * @type {Object}
	     * @property {String} externalArrangementId Externally used unique identification of the balance item.
	     * @property {Number} balance The value of the balance item.
	     * @property {String} updatedDate Date and time when the balance item was updated.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ArrangementsData.BalanceHistoryItemAddedResponse
	     * @type {Object}
	     * @property {String} id Internally used unique identification
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ArrangementsData.BalanceItem
	     * @type {Array.<ArrangementsData.BalanceItem>}
	     */
	
	    /**
	     * @typedef ArrangementsData.ProductId
	     * @type {Object}
	     * @property {String} id Internally used unique identification
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ArrangementsData.ProductItem
	     * @type {Object}
	     * @property {String} externalProductId A unique identifier for the product
	     * @property {String} externalProductKindId The ID that is internally used to uniquely identify the kind of product
	     * @property {String} productKindName One of "Current Account", "Credit Card", "Debit Card", "Loan", "Savings Account", "Investment Account", "Term Deposit"
	     * @property {?String} externalProductTypeId The ID that is used by the Bank to identify the Product
	     * @property {?String} productTypeName The name that is used by the bank to label a specific product type
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ArrangementsData.ProductsGet
	     * @type {Array.<ArrangementsData.ProductItem>}
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
	     * @name ArrangementsData#getArrangements
	     * @type {Function}
	     * @description Get a list of arrangements with a corresponding product from pandp service based on query of provided IBAN (note: only one arrangement is returned for IBAN) or an array of arrangements ids
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?string} params.iban The IBAN is an internationally agreed system of identifying bank accounts across national borders. Eg: FR188388353832IH3CAWFYXAA36.
	       
	     * @param {?string} params.arrangementsIds A list of internal arrangements ids. Eg: oiuoioi-3893ower-oji23-lelw,13132fds-sfdfdsfd12-dsfsfd-123.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link ArrangementsData.ArrangementItems} on success 
	     *
	     * @example
	     * arrangementsData
	     *  .getArrangements(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getArrangements(params, headers) {
	      var url = '' + baseUri + version + '/arrangements';
	
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
	     * @name ArrangementsData#postArrangementsRecord
	     * @type {Function}
	     * @description Create a arrangement with external arrangement id and returns the internal arrangement id
	     
	     * @param {ArrangementsData.ArrangementItemPost} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link ArrangementsData.ArrangementAddedResponse} on success 
	     *
	     * @example
	     * arrangementsData
	     *  .postArrangementsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postArrangementsRecord(data, headers) {
	      var url = '' + baseUri + version + '/arrangements';
	
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
	     * @name ArrangementsData#putArrangementsRecord
	     * @type {Function}
	     * @description Update arrangement by an arrangement id
	     
	     * @param {ArrangementsData.ArrangemenItemBase} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * arrangementsData
	     *  .putArrangementsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putArrangementsRecord(data, headers) {
	      var url = '' + baseUri + version + '/arrangements';
	
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
	     * @name ArrangementsData#patchArrangementsRecord
	     * @type {Function}
	     * @description Updates limited set of fields for an arrangement by an arrangement id
	     
	     * @param {ArrangementsData.ArrangementPatch} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * arrangementsData
	     *  .patchArrangementsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function patchArrangementsRecord(data, headers) {
	      var url = '' + baseUri + version + '/arrangements';
	
	      return httpClient({
	        method: 'PATCH',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name ArrangementsData#postProductsRecord
	     * @type {Function}
	     * @description # Product 
	    This EndPoint allows creating/retrieving of Business/Retail banking products with the associate arrangements
	     
	     * @param {ArrangementsData.ProductItem} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link ArrangementsData.ProductId} on success 
	     *
	     * @example
	     * arrangementsData
	     *  .postProductsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postProductsRecord(data, headers) {
	      var url = '' + baseUri + version + '/products';
	
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
	     * @name ArrangementsData#putProductsRecord
	     * @type {Function}
	     * @description # Product 
	    This JMS EndPoint allows updating of Business/Retail banking products
	     
	     * @param {ArrangementsData.ProductItem} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * arrangementsData
	     *  .putProductsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putProductsRecord(data, headers) {
	      var url = '' + baseUri + version + '/products';
	
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
	     * @name ArrangementsData#getProducts
	     * @type {Function}
	     * @description get request
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link ArrangementsData.ProductsGet} on success 
	     *
	     * @example
	     * arrangementsData
	     *  .getProducts(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getProducts(params, headers) {
	      var url = '' + baseUri + version + '/products';
	
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
	     * @name ArrangementsData#deleteArrangementsRecord
	     * @type {Function}
	     * @description # Delete Arrangement
	      
	     * @param {string} externalArrangementId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * arrangementsData
	     *  .deleteArrangementsRecord(externalArrangementId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deleteArrangementsRecord(externalArrangementId, params, headers) {
	      var url = '' + baseUri + version + '/arrangements/' + externalArrangementId;
	
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
	     * @name ArrangementsData#getArrangementsInternalRecord
	     * @type {Function}
	     * @description Retrieve Internal Arrangement Id for External Id.
	     
	     * @param {string} externalId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * arrangementsData
	     *  .getArrangementsInternalRecord(externalId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getArrangementsInternalRecord(externalId, params, headers) {
	      var url = '' + baseUri + version + '/arrangements/internal/' + externalId;
	
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
	     * @name ArrangementsData#getArrangementsRecord
	     * @type {Function}
	     * @description Retrieve a single arrangement with details.
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link ArrangementsData.ArrangementItem} on success 
	     *
	     * @example
	     * arrangementsData
	     *  .getArrangementsRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getArrangementsRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/arrangements/' + id;
	
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
	     * @name ArrangementsData#getArrangementsWithLiveBalances
	     * @type {Function}
	     * @description # JMS endpoint for getting arrangements with live balances for the provided list of pair BBAN and bankBranchCode
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.identifiersPairs A json list of identifiers. Currently the pair consists of BBAN and bankBranchCode. Eg: [object Object],[object Object].
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link ArrangementsData.ArrangementItems} on success 
	     *
	     * @example
	     * arrangementsData
	     *  .getArrangementsWithLiveBalances(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getArrangementsWithLiveBalances(params, headers) {
	      var url = '' + baseUri + version + '/arrangements/withLiveBalances';
	
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
	     * @name ArrangementsData#getAccountsBalance
	     * @type {Function}
	     * @description Retrieve balance by the following parameter: arrangementIds
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?string} params.arrangementIds arrangementIds. Eg: 1cdb2224-8926-4b4d-a99f-1c9dfbbb4699,kjh4567-asd1-11e7-b114-b2f933d50000.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link ArrangementsData.BalanceItem} on success 
	     *
	     * @example
	     * arrangementsData
	     *  .getAccountsBalance(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccountsBalance(params, headers) {
	      var url = '' + baseUri + version + '/accounts/balance';
	
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
	     * @name ArrangementsData#postAccountsBalanceHistoryRecord
	     * @type {Function}
	     * @description Supplements supplied balance history item with internal arrangement id and sends it to arrangement pandp service.
	     
	     * @param {ArrangementsData.BalanceHistoryItem} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link ArrangementsData.BalanceHistoryItemAddedResponse} on success 
	     *
	     * @example
	     * arrangementsData
	     *  .postAccountsBalanceHistoryRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccountsBalanceHistoryRecord(data, headers) {
	      var url = '' + baseUri + version + '/accounts/balance-history';
	
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
	     * @name ArrangementsData#getAccountsBalanceHistoryRecord
	     * @type {Function}
	     * @description Retrieve balance history per arraingement for given arraingement ids.
	     
	     * @param {string} arrangementsIds 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?string} params.dateFrom Bottom value of date range. Eg: 2016-01-28T16:41:41.090Z.
	       
	     * @param {?string} params.dateTo Top value of date range. Eg: 2017-01-28T16:41:41.090Z.
	       
	     * @param {?string} params.timePeriod Defined time period for showing graph oscillations. Eg: lastWeek.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link ArrangementsData.ArrangementsWithBalanceHistory} on success 
	     *
	     * @example
	     * arrangementsData
	     *  .getAccountsBalanceHistoryRecord(arrangementsIds, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccountsBalanceHistoryRecord(arrangementsIds, params, headers) {
	      var url = '' + baseUri + version + '/accounts/balance-history/' + arrangementsIds;
	
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
	     * @name ArrangementsData#getProductsRecord
	     * @type {Function}
	     * @description Retrieve a single product.
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link ArrangementsData.ProductItem} on success 
	     *
	     * @example
	     * arrangementsData
	     *  .getProductsRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getProductsRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/products/' + id;
	
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
	     * @name ArrangementsData#schemas
	     * @type {Object}
	     */
	    var schemas = {};
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postArrangementsRecord method
	     *
	     * @name ArrangementsData#schemas.postArrangementsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "externalLegalEntityId": {
	        "type": "string",
	        "maxLength": 50,
	        "required": true
	      },
	      "externalProductId": {
	        "type": "string",
	        "maxLength": 50,
	        "required": true
	      },
	      "alias": {
	        "type": "string",
	        "maxLength": 50,
	        "required": false
	      },
	      "legalEntityId": {
	        "type": "string",
	        "maxLength": 36,
	        "required": false
	      },
	      "productId": {
	        "type": "string",
	        "maxLength": 36,
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.postArrangementsRecord = definedTypes['ArrangementsData.ArrangementItemPost'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putArrangementsRecord method
	     *
	     * @name ArrangementsData#schemas.putArrangementsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "externalArrangementId": {
	        "type": "string",
	        "maxLength": 50,
	        "required": true
	      },
	      "name": {
	        "type": "string",
	        "maxLength": 50,
	        "required": false
	      },
	      "bookedBalance": {
	        "type": "number",
	        "required": false
	      },
	      "availableBalance": {
	        "type": "number",
	        "required": false
	      },
	      "creditLimit": {
	        "type": "number",
	        "required": false
	      },
	      "IBAN": {
	        "type": "string",
	        "maxLength": 34,
	        "pattern": "^(AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW).*",
	        "required": false
	      },
	      "BBAN": {
	        "type": "string",
	        "maxLength": 50,
	        "required": false
	      },
	      "currency": {
	        "enum": [
	          "AED",
	          "AFN",
	          "ALL",
	          "AMD",
	          "ANG",
	          "AOA",
	          "ARS",
	          "AUD",
	          "AWG",
	          "AZN",
	          "BAM",
	          "BBD",
	          "BDT",
	          "BGN",
	          "BHD",
	          "BIF",
	          "BMD",
	          "BND",
	          "BOB",
	          "BOV",
	          "BRL",
	          "BSD",
	          "BTN",
	          "BWP",
	          "BYN",
	          "BZD",
	          "CAD",
	          "CDF",
	          "CHE",
	          "CHW",
	          "CLF",
	          "CLP",
	          "CNY",
	          "COP",
	          "COU",
	          "CRC",
	          "CUC",
	          "CUP",
	          "CVE",
	          "CZK",
	          "DJF",
	          "DKK",
	          "DOP",
	          "DZD",
	          "EGP",
	          "ERN",
	          "ETB",
	          "EUR",
	          "FJD",
	          "FKP",
	          "GBP",
	          "GEL",
	          "GHS",
	          "GIP",
	          "GMD",
	          "GNF",
	          "GTQ",
	          "GYD",
	          "HKD",
	          "HNL",
	          "HRK",
	          "HTG",
	          "HUF",
	          "IDR",
	          "ILS",
	          "INR",
	          "IQD",
	          "IRR",
	          "ISK",
	          "JMD",
	          "JOD",
	          "JPY",
	          "KES",
	          "KGS",
	          "KHR",
	          "KMF",
	          "KPW",
	          "KWD",
	          "KYD",
	          "KZT",
	          "LAK",
	          "LBP",
	          "LKR",
	          "LRD",
	          "LSL",
	          "LYD",
	          "MAD",
	          "MDL",
	          "MGA",
	          "MKD",
	          "MMK",
	          "MNT",
	          "MOP",
	          "MRO",
	          "MUR",
	          "MVR",
	          "MWK",
	          "MXN",
	          "MXV",
	          "MYR",
	          "MZN",
	          "NAD",
	          "NGN",
	          "NIO",
	          "NOK",
	          "NPR",
	          "NZD",
	          "OMR",
	          "PAB",
	          "PEN",
	          "PGK",
	          "PHP",
	          "PKR",
	          "PLN",
	          "PYG",
	          "QAR",
	          "RON",
	          "RSD",
	          "RUB",
	          "RWF",
	          "SAR",
	          "SBD",
	          "SCR",
	          "SDG",
	          "SEK",
	          "SGD",
	          "SHP",
	          "SLL",
	          "SOS",
	          "SRD",
	          "SSP",
	          "STD",
	          "SVC",
	          "SYP",
	          "SZL",
	          "THB",
	          "TJS",
	          "TMT",
	          "TND",
	          "TOP",
	          "TRY",
	          "TTD",
	          "TWD",
	          "TZS",
	          "UAH",
	          "UGX",
	          "USD",
	          "USN",
	          "UYI",
	          "UYU",
	          "UZS",
	          "VEF",
	          "VND",
	          "VUV",
	          "WST",
	          "YER",
	          "ZAR",
	          "ZMW",
	          "ZWL"
	        ],
	        "required": true
	      },
	      "externalTransferAllowed": {
	        "type": "boolean",
	        "required": false
	      },
	      "urgentTransferAllowed": {
	        "type": "boolean",
	        "required": false
	      },
	      "accruedInterest": {
	        "type": "number",
	        "required": false
	      },
	      "number": {
	        "type": "string",
	        "maxLength": 36,
	        "required": false
	      },
	      "principalAmount": {
	        "type": "number",
	        "required": false
	      },
	      "currentInvestmentValue": {
	        "type": "number",
	        "minimum": 0,
	        "required": false
	      },
	      "productNumber": {
	        "type": "string",
	        "maxLength": 36,
	        "required": false
	      },
	      "BIC": {
	        "type": "string",
	        "maxLength": 11,
	        "required": false
	      },
	      "bankBranchCode": {
	        "type": "string",
	        "maxLength": 20,
	        "required": false
	      },
	      "accountOpeningDate": {
	        "type": "string",
	        "format": "date-time",
	        "required": false
	      },
	      "accountInterestRate": {
	        "type": "number",
	        "required": false
	      },
	      "valueDateBalance": {
	        "type": "number",
	        "required": false
	      },
	      "creditLimitUsage": {
	        "type": "number",
	        "required": false
	      },
	      "creditLimitInterestRate": {
	        "type": "number",
	        "required": false
	      },
	      "creditLimitExpiryDate": {
	        "type": "string",
	        "format": "date-time",
	        "required": false
	      },
	      "startDate": {
	        "type": "string",
	        "format": "date-time",
	        "required": false
	      },
	      "termUnit": {
	        "enum": [
	          "D",
	          "W",
	          "M",
	          "Y"
	        ],
	        "required": false
	      },
	      "termNumber": {
	        "type": "number",
	        "required": false
	      },
	      "interestPaymentFrequencyUnit": {
	        "enum": [
	          "D",
	          "W",
	          "M",
	          "Y"
	        ],
	        "required": false
	      },
	      "interestPaymentFrequencyNumber": {
	        "type": "number",
	        "required": false
	      },
	      "maturityDate": {
	        "type": "string",
	        "format": "date-time",
	        "required": false
	      },
	      "maturityAmount": {
	        "type": "number",
	        "required": false
	      },
	      "autoRenewalIndicator": {
	        "type": "boolean",
	        "required": false
	      },
	      "interestSettlementAccount": {
	        "type": "string",
	        "maxLength": 32,
	        "required": false
	      },
	      "outstandingPrincipalAmount": {
	        "type": "number",
	        "required": false
	      },
	      "monthlyInstalmentAmount": {
	        "type": "number",
	        "required": false
	      },
	      "amountInArrear": {
	        "type": "number",
	        "required": false
	      },
	      "minimumRequiredBalance": {
	        "type": "number",
	        "required": false
	      },
	      "creditCardAccountNumber": {
	        "type": "string",
	        "maxLength": 32,
	        "required": false
	      },
	      "validThru": {
	        "type": "string",
	        "format": "date-time",
	        "required": false
	      },
	      "applicableInterestRate": {
	        "type": "number",
	        "required": false
	      },
	      "remainingCredit": {
	        "type": "number",
	        "required": false
	      },
	      "outstandingPayment": {
	        "type": "number",
	        "required": false
	      },
	      "minimumPayment": {
	        "type": "number",
	        "required": false
	      },
	      "minimumPaymentDueDate": {
	        "type": "string",
	        "format": "date-time",
	        "required": false
	      },
	      "totalInvestmentValue": {
	        "type": "number",
	        "required": false
	      },
	      "debitCards": {
	        "type": "array",
	        "items": {
	          "properties": {
	            "number": {
	              "type": "string",
	              "maxLength": 36,
	              "required": false
	            },
	            "expiryDate": {
	              "type": "string",
	              "maxLength": 32,
	              "required": false
	            }
	          }
	        },
	        "uniqueItems": true,
	        "required": false
	      },
	      "accountHolderAddressLine1": {
	        "type": "string",
	        "maxLength": 70,
	        "required": false
	      },
	      "accountHolderAddressLine2": {
	        "type": "string",
	        "maxLength": 70,
	        "required": false
	      },
	      "accountHolderAddressLine3": {
	        "type": "string",
	        "maxLength": 70,
	        "required": false
	      },
	      "accountHolderAddressLine4": {
	        "type": "string",
	        "maxLength": 70,
	        "required": false
	      },
	      "accountHolderStreetName": {
	        "type": "string",
	        "maxLength": 70,
	        "required": false
	      },
	      "town": {
	        "type": "string",
	        "maxLength": 35,
	        "required": false
	      },
	      "postCode": {
	        "type": "string",
	        "maxLength": 16,
	        "required": false
	      },
	      "countrySubDivision": {
	        "type": "string",
	        "maxLength": 35,
	        "required": false
	      },
	      "accountHolderName": {
	        "type": "string",
	        "maxLength": 64,
	        "required": false
	      },
	      "accountHolderCountry": {
	        "enum": [
	          "AF",
	          "AL",
	          "DZ",
	          "AS",
	          "AD",
	          "AO",
	          "AI",
	          "AQ",
	          "AG",
	          "AR",
	          "AM",
	          "AW",
	          "AU",
	          "AT",
	          "AZ",
	          "BS",
	          "BH",
	          "BD",
	          "BB",
	          "BY",
	          "BE",
	          "BZ",
	          "BJ",
	          "BM",
	          "BT",
	          "BO",
	          "BQ",
	          "BA",
	          "BW",
	          "BV",
	          "BR",
	          "IO",
	          "BN",
	          "BG",
	          "BF",
	          "BI",
	          "KH",
	          "CM",
	          "CA",
	          "CV",
	          "KY",
	          "CF",
	          "TD",
	          "CL",
	          "CN",
	          "CX",
	          "CC",
	          "CO",
	          "KM",
	          "CG",
	          "CD",
	          "CK",
	          "CR",
	          "HR",
	          "CU",
	          "CW",
	          "CY",
	          "CZ",
	          "CI",
	          "DK",
	          "DJ",
	          "DM",
	          "DO",
	          "EC",
	          "EG",
	          "SV",
	          "GQ",
	          "ER",
	          "EE",
	          "ET",
	          "FK",
	          "FO",
	          "FJ",
	          "FI",
	          "FR",
	          "GF",
	          "PF",
	          "TF",
	          "GA",
	          "GM",
	          "GE",
	          "DE",
	          "GH",
	          "GI",
	          "GR",
	          "GL",
	          "GD",
	          "GP",
	          "GU",
	          "GT",
	          "GG",
	          "GN",
	          "GW",
	          "GY",
	          "HT",
	          "HM",
	          "VA",
	          "HN",
	          "HK",
	          "HU",
	          "IS",
	          "IN",
	          "ID",
	          "IR",
	          "IQ",
	          "IE",
	          "IM",
	          "IL",
	          "IT",
	          "JM",
	          "JP",
	          "JE",
	          "JO",
	          "KZ",
	          "KE",
	          "KI",
	          "KP",
	          "KR",
	          "KW",
	          "KG",
	          "LA",
	          "LV",
	          "LB",
	          "LS",
	          "LR",
	          "LY",
	          "LI",
	          "LT",
	          "LU",
	          "MO",
	          "MK",
	          "MG",
	          "MW",
	          "MY",
	          "MV",
	          "ML",
	          "MT",
	          "MH",
	          "MQ",
	          "MR",
	          "MU",
	          "YT",
	          "MX",
	          "FM",
	          "MD",
	          "MC",
	          "MN",
	          "ME",
	          "MS",
	          "MA",
	          "MZ",
	          "MM",
	          "NA",
	          "NR",
	          "NP",
	          "NL",
	          "NC",
	          "NZ",
	          "NI",
	          "NE",
	          "NG",
	          "NU",
	          "NF",
	          "MP",
	          "NO",
	          "OM",
	          "PK",
	          "PW",
	          "PS",
	          "PA",
	          "PG",
	          "PY",
	          "PE",
	          "PH",
	          "PN",
	          "PL",
	          "PT",
	          "PR",
	          "QA",
	          "RO",
	          "RU",
	          "RW",
	          "RE",
	          "BL",
	          "SH",
	          "KN",
	          "LC",
	          "MF",
	          "PM",
	          "VC",
	          "WS",
	          "SM",
	          "ST",
	          "SA",
	          "SN",
	          "RS",
	          "SC",
	          "SL",
	          "SG",
	          "SX",
	          "SK",
	          "SI",
	          "SB",
	          "SO",
	          "ZA",
	          "GS",
	          "SS",
	          "ES",
	          "LK",
	          "SD",
	          "SR",
	          "SJ",
	          "SZ",
	          "SE",
	          "CH",
	          "SY",
	          "TW",
	          "TJ",
	          "TZ",
	          "TH",
	          "TL",
	          "TG",
	          "TK",
	          "TO",
	          "TT",
	          "TN",
	          "TR",
	          "TM",
	          "TC",
	          "TV",
	          "UG",
	          "UA",
	          "AE",
	          "GB",
	          "US",
	          "UM",
	          "UY",
	          "UZ",
	          "VU",
	          "VE",
	          "VN",
	          "VG",
	          "VI",
	          "WF",
	          "EH",
	          "YE",
	          "ZM",
	          "ZW"
	        ],
	        "required": false
	      },
	      "creditAccount": {
	        "type": "boolean",
	        "default": true,
	        "required": false
	      },
	      "debitAccount": {
	        "type": "boolean",
	        "default": true,
	        "required": false
	      },
	      "lastUpdateDate": {
	        "type": "string",
	        "format": "date-time",
	        "required": false
	      },
	      "alias": {
	        "type": "string",
	        "maxLength": 50,
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.putArrangementsRecord = definedTypes['ArrangementsData.ArrangemenItemBase'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postProductsRecord method
	     *
	     * @name ArrangementsData#schemas.postProductsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "externalProductId": {
	        "type": "string",
	        "required": true
	      },
	      "externalProductKindId": {
	        "type": "string",
	        "required": true
	      },
	      "productKindName": {
	        "type": "string",
	        "enum": [
	          "Current Account",
	          "Credit Card",
	          "Debit Card",
	          "Loan",
	          "Savings Account",
	          "Investment Account",
	          "Term Deposit"
	        ],
	        "required": true
	      },
	      "externalProductTypeId": {
	        "type": "string",
	        "required": false
	      },
	      "productTypeName": {
	        "type": "string",
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.postProductsRecord = definedTypes['ArrangementsData.ProductItem'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putProductsRecord method
	     *
	     * @name ArrangementsData#schemas.putProductsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "externalProductId": {
	        "type": "string",
	        "required": true
	      },
	      "externalProductKindId": {
	        "type": "string",
	        "required": true
	      },
	      "productKindName": {
	        "type": "string",
	        "enum": [
	          "Current Account",
	          "Credit Card",
	          "Debit Card",
	          "Loan",
	          "Savings Account",
	          "Investment Account",
	          "Term Deposit"
	        ],
	        "required": true
	      },
	      "externalProductTypeId": {
	        "type": "string",
	        "required": false
	      },
	      "productTypeName": {
	        "type": "string",
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.putProductsRecord = definedTypes['ArrangementsData.ProductItem'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccountsBalanceHistoryRecord method
	     *
	     * @name ArrangementsData#schemas.postAccountsBalanceHistoryRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "externalArrangementId": {
	        "type": "string",
	        "maxLength": 50,
	        "required": true
	      },
	      "balance": {
	        "type": "number",
	        "required": true
	      },
	      "updatedDate": {
	        "type": "string",
	        "format": "date-time",
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postAccountsBalanceHistoryRecord = definedTypes['ArrangementsData.BalanceHistoryItem'];
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return {
	
	      getArrangements: getArrangements,
	
	      postArrangementsRecord: postArrangementsRecord,
	
	      putArrangementsRecord: putArrangementsRecord,
	
	      patchArrangementsRecord: patchArrangementsRecord,
	
	      postProductsRecord: postProductsRecord,
	
	      putProductsRecord: putProductsRecord,
	
	      getProducts: getProducts,
	
	      deleteArrangementsRecord: deleteArrangementsRecord,
	
	      getArrangementsInternalRecord: getArrangementsInternalRecord,
	
	      getArrangementsRecord: getArrangementsRecord,
	
	      getArrangementsWithLiveBalances: getArrangementsWithLiveBalances,
	
	      getAccountsBalance: getAccountsBalance,
	
	      postAccountsBalanceHistoryRecord: postAccountsBalanceHistoryRecord,
	
	      getAccountsBalanceHistoryRecord: getAccountsBalanceHistoryRecord,
	
	      getProductsRecord: getProductsRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-arrangements-http-ng.js.map