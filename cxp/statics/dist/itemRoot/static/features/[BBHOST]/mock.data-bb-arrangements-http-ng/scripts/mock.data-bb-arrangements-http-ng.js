(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else if(typeof define === 'function' && define.amd)
		define("mock.data-bb-arrangements-http-ng", ["vendor-bb-angular", "lib-bb-storage-ng"], factory);
	else if(typeof exports === 'object')
		exports["mock.data-bb-arrangements-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else
		root["mock.data-bb-arrangements-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage-ng"]);
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
	exports.arrangementsDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStorageNg = __webpack_require__(3);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _dataBbArrangementsHttp = __webpack_require__(4);
	
	var _dataBbArrangementsHttp2 = _interopRequireDefault(_dataBbArrangementsHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var arrangementsDataModuleKey = 'data-bb-arrangements-http-ng'; /* eslint-disable */
	var arrangementsDataKey = exports.arrangementsDataKey = 'data-bb-arrangements-http-ng:arrangementsData';
	
	exports.default = _vendorBbAngular2.default.module(arrangementsDataModuleKey, [_libBbStorageNg2.default]).provider(arrangementsDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  return {
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	    $get: ['$q', _libBbStorageNg.bbStorageServiceKey, '$httpParamSerializer',
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
	
	    var STORAGE_KEY = 'MOCK_STATE_arrangementsDataModuleKey';
	    var state = {
	      "{version}/products": [{
	        "id": "id0",
	        "externalProductId": "externalProductId",
	        "externalProductKindId": "externalProductKindId",
	        "productKindName": "Current Account",
	        "externalProductTypeId": "externalProductTypeId",
	        "productTypeName": "productTypeName"
	      }, {
	        "id": "id1",
	        "externalProductId": "externalProductId",
	        "externalProductKindId": "externalProductKindId",
	        "productKindName": "Current Account",
	        "externalProductTypeId": "externalProductTypeId",
	        "productTypeName": "productTypeName"
	      }],
	      "{version}/accounts/balance": [{
	        "arrangementId": "A02",
	        "bookedBalance": 2000.2,
	        "availableBalance": 200000.2
	      }]
	    };
	
	    bbStorage.subscribe(STORAGE_KEY, function (newState) {
	      state = newState;
	    });
	
	    var persistState = function persistState(newState) {
	      bbStorage.setItem(STORAGE_KEY, newState);
	    };
	
	    var responses = {
	
	      getArrangements: [{ "status": 200, "data": { "totalElements": 2, "arrangementElements": [{ "id": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "kjh4567-asd1-11e7-b114-b2f933d50000", "externalLegalEntityId": "COOOOO1", "externalProductId": "1234567", "name": "Mr and Mrs J. Smith", "productKindName": "Current Account", "alias": "Secret account", "bookedBalance": 100.1, "availableBalance": 100.2, "creditLimit": 100.3, "IBAN": "MKIBAN", "BBAN": "BBAN", "currency": "EUR", "externalTransferAllowed": true, "urgentTransferAllowed": false, "accruedInterest": 2.2, "PANSuffix": "PANSuffix", "principalAmount": 100.4, "currentInvestmentValue": 100.5, "legalEntityId": "legalEntityId", "productId": "36c8fc42-ec97-4f83-8a7c-d622625007f3", "productTypeName": "Current Account", "BIC": "BICExample1", "bankBranchCode": "bankBranchCode1", "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "4578", "expiryDate": "2018-08-22T16:41:41.090Z" }, { "number": "3241", "expiryDate": "2019-01-14T16:41:41.090Z" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "creditAccount": true, "debitAccount": true, "visible": true, "lastUpdateDate": "2019-09-28T16:41:41.090Z" }, { "id": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4610", "externalArrangementId": "kjh4567-asd1-11e7-b114-b2f933d50000", "externalLegalEntityId": "COOOOO1", "externalProductId": "1234567", "name": "Mr and Mrs J. Smith", "productKindName": "Current Account", "alias": "Secret account", "bookedBalance": 100.1, "availableBalance": 100.2, "creditLimit": 100.3, "IBAN": "MKIBAN", "BBAN": "BBAN", "currency": "EUR", "externalTransferAllowed": true, "urgentTransferAllowed": false, "accruedInterest": 2.2, "PANSuffix": "PANSuffix", "principalAmount": 100.4, "currentInvestmentValue": 100.5, "legalEntityId": "legalEntityId", "productId": "36c8fc42-ec97-4f83-8a7c-d622625007f3", "productTypeName": "Current Account", "BIC": "BICExample2", "bankBranchCode": "bankBranchCode1", "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "6378", "expiryDate": "2018-02-12T16:41:41.090Z" }, { "number": "5111", "expiryDate": "2019-03-24T16:41:41.090Z" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "creditAccount": true, "debitAccount": true, "visible": true, "lastUpdateDate": "2019-09-28T16:41:41.090Z" }] } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": { "message": "Base Error", "errors": [{ "message": "arrangement has no privileges", "key": "account.api.noPrivilege.arrangement", "context": { "arrangementId": "kj123-123nj123-bh345hb-343" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      postArrangementsRecord: [{ "status": 201, "data": { "id": "729190df-a421-4937-94fd-5e1a3da132cc" } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      putArrangementsRecord: [{ "status": 204, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 403, "data": { "message": "Base Error", "errors": [{ "message": "arrangement has no privileges", "key": "account.api.noPrivilege.arrangement", "context": { "arrangementId": "kj123-123nj123-bh345hb-343" } }] } }, { "status": 404, "data": { "message": "Base Error", "errors": [{ "message": "arrangement has no privileges", "key": "account.api.noPrivilege.arrangement", "context": { "arrangementId": "kj123-123nj123-bh345hb-343" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      patchArrangementsRecord: [{ "status": 204, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 403, "data": { "message": "Base Error", "errors": [{ "message": "arrangement has no privileges", "key": "account.api.noPrivilege.arrangement", "context": { "arrangementId": "kj123-123nj123-bh345hb-343" } }] } }, { "status": 404, "data": { "message": "Base Error", "errors": [{ "message": "arrangement has no privileges", "key": "account.api.noPrivilege.arrangement", "context": { "arrangementId": "kj123-123nj123-bh345hb-343" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      postProductsRecord: [{ "status": 201, "data": { "id": "0955e686-d31e-4216-b3dd-5d66161d536d" } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      putProductsRecord: [{ "status": 204, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": { "message": "Base Error", "errors": [{ "message": "arrangement has no privileges", "key": "account.api.noPrivilege.arrangement", "context": { "arrangementId": "kj123-123nj123-bh345hb-343" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      getProducts: [{ "status": 200, "data": [{ "id": "id0", "externalProductId": "externalProductId", "externalProductKindId": "externalProductKindId", "productKindName": "Current Account", "externalProductTypeId": "externalProductTypeId", "productTypeName": "productTypeName" }, { "id": "id1", "externalProductId": "externalProductId", "externalProductKindId": "externalProductKindId", "productKindName": "Current Account", "externalProductTypeId": "externalProductTypeId", "productTypeName": "productTypeName" }] }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      deleteArrangementsRecord: [{ "status": 204, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": { "message": "Base Error", "errors": [{ "message": "arrangement has no privileges", "key": "account.api.noPrivilege.arrangement", "context": { "arrangementId": "kj123-123nj123-bh345hb-343" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      getArrangementsInternalRecord: [{ "status": 200, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": { "message": "Base Error", "errors": [{ "message": "arrangement has no privileges", "key": "account.api.noPrivilege.arrangement", "context": { "arrangementId": "kj123-123nj123-bh345hb-343" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      getArrangementsRecord: [{ "status": 200, "data": { "id": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "kjh4567-asd1-11e7-b114-b2f933d50000", "externalLegalEntityId": "COOOOO1", "externalProductId": "1234567", "name": "Mr and Mrs J. Smith", "productKindName": "Current Account", "alias": "Secret account", "bookedBalance": 100.1, "availableBalance": 100.2, "creditLimit": 100.3, "IBAN": "MKIBAN", "BBAN": "BBAN", "currency": "EUR", "externalTransferAllowed": true, "urgentTransferAllowed": false, "accruedInterest": 2.2, "number": "PANSuffix", "principalAmount": 100.4, "currentInvestmentValue": 100.5, "legalEntityId": "legalEntityId", "productId": "36c8fc42-ec97-4f83-8a7c-d622625007f3", "productTypeName": "Current Account", "BIC": "BICExample1", "bankBranchCode": "bankBranchCode1", "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "4578", "expiryDate": "2018-08-22T16:41:41.090Z" }, { "number": "3241", "expiryDate": "2019-01-14T16:41:41.090Z" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "creditAccount": true, "debitAccount": true, "visible": true, "lastUpdateDate": "2019-09-28T16:41:41.090Z" } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": { "message": "Base Error", "errors": [{ "message": "arrangement has no privileges", "key": "account.api.noPrivilege.arrangement", "context": { "arrangementId": "kj123-123nj123-bh345hb-343" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      getArrangementsWithLiveBalances: [{ "status": 200, "data": { "totalElements": 2, "arrangementElements": [{ "id": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "kjh4567-asd1-11e7-b114-b2f933d50000", "externalLegalEntityId": "COOOOO1", "externalProductId": "1234567", "name": "Mr and Mrs J. Smith", "productKindName": "Current Account", "alias": "Secret account", "bookedBalance": 100.1, "availableBalance": 100.2, "creditLimit": 100.3, "IBAN": "MKIBAN", "BBAN": "BBAN", "currency": "EUR", "externalTransferAllowed": true, "urgentTransferAllowed": false, "accruedInterest": 2.2, "PANSuffix": "PANSuffix", "principalAmount": 100.4, "currentInvestmentValue": 100.5, "legalEntityId": "legalEntityId", "productId": "36c8fc42-ec97-4f83-8a7c-d622625007f3", "productTypeName": "Current Account", "BIC": "BICExample1", "bankBranchCode": "bankBranchCode1", "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "4578", "expiryDate": "2018-08-22T16:41:41.090Z" }, { "number": "3241", "expiryDate": "2019-01-14T16:41:41.090Z" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "creditAccount": true, "debitAccount": true, "visible": true, "lastUpdateDate": "2019-09-28T16:41:41.090Z" }, { "id": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4610", "externalArrangementId": "kjh4567-asd1-11e7-b114-b2f933d50000", "externalLegalEntityId": "COOOOO1", "externalProductId": "1234567", "name": "Mr and Mrs J. Smith", "productKindName": "Current Account", "alias": "Secret account", "bookedBalance": 100.1, "availableBalance": 100.2, "creditLimit": 100.3, "IBAN": "MKIBAN", "BBAN": "BBAN", "currency": "EUR", "externalTransferAllowed": true, "urgentTransferAllowed": false, "accruedInterest": 2.2, "PANSuffix": "PANSuffix", "principalAmount": 100.4, "currentInvestmentValue": 100.5, "legalEntityId": "legalEntityId", "productId": "36c8fc42-ec97-4f83-8a7c-d622625007f3", "productTypeName": "Current Account", "BIC": "BICExample2", "bankBranchCode": "bankBranchCode1", "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "6378", "expiryDate": "2018-02-12T16:41:41.090Z" }, { "number": "5111", "expiryDate": "2019-03-24T16:41:41.090Z" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "creditAccount": true, "debitAccount": true, "visible": true, "lastUpdateDate": "2019-09-28T16:41:41.090Z" }] } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": { "message": "Resource not found.", "errors": [{ "message": "Unable to find the resource requested resource: {resource}.", "key": "common.api.resource", "context": { "resource": "aResource" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      getAccountsBalance: [{ "status": 200, "data": [{ "arrangementId": "A02", "bookedBalance": 2000.2, "availableBalance": 200000.2 }] }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": { "message": "Base Error", "errors": [{ "message": "arrangement has no privileges", "key": "account.api.noPrivilege.arrangement", "context": { "arrangementId": "kj123-123nj123-bh345hb-343" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      postAccountsBalanceHistoryRecord: [{ "status": 201, "data": { "id": "okm2a34-a421-1232-94fd-5e1a3da132cc" } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      getAccountsBalanceHistoryRecord: [{ "status": 200, "data": { "items": [{ "arrangementId": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "balanceHistory": [{ "dateFrom": "2017-05-10T00:00:00.000Z", "dateTo": "2017-06-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "12" }, "valuePtc": "232" }, { "dateFrom": "2017-05-11T00:00:00.000Z", "dateTo": "2017-06-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "22" }, "valuePtc": "22" }, { "dateFrom": "2017-05-23T00:00:00.000Z", "dateTo": "2017-06-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "32" }, "valuePtc": "32" }, { "dateFrom": "2017-06-01T00:00:00.000Z", "dateTo": "2017-06-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "54" }, "valuePtc": "54" }, { "dateFrom": "2017-06-02T00:00:00.000Z", "dateTo": "2017-07-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "34" }, "valuePtc": "34" }, { "dateFrom": "2017-06-12T00:00:00.000Z", "dateTo": "2017-07-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "4" }, "valuePtc": "4" }, { "dateFrom": "2017-06-18T00:00:00.000Z", "dateTo": "2017-07-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "-14" }, "valuePtc": "-14" }] }, { "arrangementId": "5cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "balanceHistory": [{ "dateFrom": "2017-02-11T00:00:00.000Z", "dateTo": "2017-04-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "-120" }, "valuePtc": "-12" }, { "dateFrom": "2017-02-17T00:00:00.000Z", "dateTo": "2017-04-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "-100" }, "valuePtc": "-100" }, { "dateFrom": "2017-02-22T00:00:00.000Z", "dateTo": "2017-04-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "-60" }, "valuePtc": "-60" }, { "dateFrom": "2017-03-04T00:00:00.000Z", "dateTo": "2017-04-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "-10" }, "valuePtc": "-10" }, { "dateFrom": "2017-03-12T00:00:00.000Z", "dateTo": "2017-04-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "0" }, "valuePtc": "0" }, { "dateFrom": "2017-03-21T00:00:00.000Z", "dateTo": "2017-04-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "10" }, "valuePtc": "10" }, { "dateFrom": "2017-03-27T00:00:00.000Z", "dateTo": "2017-04-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "40" }, "valuePtc": "40" }, { "dateFrom": "2017-04-01T00:00:00.000Z", "dateTo": "2017-04-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "80" }, "valuePtc": "80" }] }, { "arrangementId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "balanceHistory": [{ "dateFrom": "2017-02-11T00:00:00.000Z", "dateTo": "2017-04-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "1234" }, "valuePtc": "1234" }, { "dateFrom": "2017-02-17T00:00:00.000Z", "dateTo": "2017-04-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "4098" }, "valuePtc": "4098" }, { "dateFrom": "2017-02-22T00:00:00.000Z", "dateTo": "2017-04-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "10" }, "valuePtc": "10" }, { "dateFrom": "2017-03-04T00:00:00.000Z", "dateTo": "2017-04-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "-2938" }, "valuePtc": "-2938" }, { "dateFrom": "2017-03-12T00:00:00.000Z", "dateTo": "2017-04-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "-1000" }, "valuePtc": "-100" }, { "dateFrom": "2017-03-21T00:00:00.000Z", "dateTo": "2017-04-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "0" }, "valuePtc": "0" }, { "dateFrom": "2017-03-27T00:00:00.000Z", "dateTo": "2017-04-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "5098" }, "valuePtc": "5098" }, { "dateFrom": "2017-04-01T00:00:00.000Z", "dateTo": "2017-04-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "0" }, "valuePtc": "0" }] }, { "arrangementId": "7cdb2224-8926-4b4d-a99f-1c9dfbbb4611", "balanceHistory": [{ "dateFrom": "2017-02-11T00:00:00.000Z", "dateTo": "2017-04-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "765" }, "valuePtc": "765" }, { "dateFrom": "2017-02-17T00:00:00.000Z", "dateTo": "2017-04-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "656" }, "valuePtc": "656" }, { "dateFrom": "2017-02-22T00:00:00.000Z", "dateTo": "2017-04-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "745" }, "valuePtc": "745" }, { "dateFrom": "2017-03-04T00:00:00.000Z", "dateTo": "2017-04-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "654" }, "valuePtc": "654" }, { "dateFrom": "2017-03-12T00:00:00.000Z", "dateTo": "2017-04-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "987" }, "valuePtc": "987" }, { "dateFrom": "2017-03-21T00:00:00.000Z", "dateTo": "2017-04-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "345" }, "valuePtc": "345" }, { "dateFrom": "2017-03-27T00:00:00.000Z", "dateTo": "2017-04-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "234" }, "valuePtc": "234" }, { "dateFrom": "2017-04-01T00:00:00.000Z", "dateTo": "2017-04-01T00:00:00.000Z", "value": { "currency": "EUR", "balance": "12" }, "valuePtc": "12" }] }] } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": { "message": "Base Error", "errors": [{ "message": "arrangement has no privileges", "key": "account.api.noPrivilege.arrangement", "context": { "arrangementId": "kj123-123nj123-bh345hb-343" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      getProductsRecord: [{ "status": 200, "data": { "externalProductId": "externalProductId", "externalProductKindId": "externalProductKindId", "productKindName": "Current Account", "externalProductTypeId": "externalProductTypeId", "productTypeName": "productTypeName" } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": { "message": "Base Error", "errors": [{ "message": "arrangement has no privileges", "key": "account.api.noPrivilege.arrangement", "context": { "arrangementId": "kj123-123nj123-bh345hb-343" } }] } }, { "status": 500, "data": { "message": "Description of error" } }]
	
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
	
	    var plugins = (_plugins = {}, _defineProperty(_plugins, PLUGINS_ALL, []), _defineProperty(_plugins, 'getArrangements', []), _defineProperty(_plugins, 'postArrangementsRecord', []), _defineProperty(_plugins, 'putArrangementsRecord', []), _defineProperty(_plugins, 'patchArrangementsRecord', []), _defineProperty(_plugins, 'postProductsRecord', []), _defineProperty(_plugins, 'putProductsRecord', []), _defineProperty(_plugins, 'getProducts', []), _defineProperty(_plugins, 'deleteArrangementsRecord', []), _defineProperty(_plugins, 'getArrangementsInternalRecord', []), _defineProperty(_plugins, 'getArrangementsRecord', []), _defineProperty(_plugins, 'getArrangementsWithLiveBalances', []), _defineProperty(_plugins, 'getAccountsBalance', []), _defineProperty(_plugins, 'postAccountsBalanceHistoryRecord', []), _defineProperty(_plugins, 'getAccountsBalanceHistoryRecord', []), _defineProperty(_plugins, 'getProductsRecord', []), _plugins);
	
	    if (!plugins['getProducts']) {
	      console.warn('%cThere is no "getProducts" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getProducts'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['postProductsRecord']) {
	      console.warn('%cThere is no "postProductsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['postProductsRecord'].push(function (result, args, uri) {
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
	
	    if (!plugins['getProductsRecord']) {
	      console.warn('%cThere is no "getProductsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getProductsRecord'].push(function (result, args, uri, method) {
	        // Assuming item id to read item is the last but one argument
	        var id = args[args.length - 3];
	        // Cut off uri parameter
	        uri = uri.substring(0, uri.lastIndexOf('/'));
	
	        // Find item in the state, if available
	        // (state variable is available in the mock module context)
	        var item = (state[uri] || []).find(function (item) {
	          return item.id === id;
	        });
	        return item ? Object.assign({}, result, { data: item }) : Promise.reject(getResponse(method, 404));
	      });
	    }
	
	    if (!plugins['getAccountsBalance']) {
	      console.warn('%cThere is no "getAccountsBalance" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getAccountsBalance'].push(function (result, args, uri) {
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
	
	    function getArrangements(params, headers) {
	      var url = '' + baseUri + version + '/arrangements';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getArrangements', 200)).then(pluginMocks('getArrangements', [params, headers], '{version}/arrangements')).catch(handleError('getArrangements'));
	    }
	
	    function postArrangementsRecord(data, headers) {
	      var url = '' + baseUri + version + '/arrangements';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postArrangementsRecord', 201)).then(pluginMocks('postArrangementsRecord', [data, headers], '{version}/arrangements')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postArrangementsRecord'));
	    }
	
	    function putArrangementsRecord(data, headers) {
	      var url = '' + baseUri + version + '/arrangements';
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putArrangementsRecord', 204)).then(pluginMocks('putArrangementsRecord', [data, headers], '{version}/arrangements')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putArrangementsRecord'));
	    }
	
	    function patchArrangementsRecord(data, headers) {
	      var url = '' + baseUri + version + '/arrangements';
	      var mocking = {
	        method: 'PATCH',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('patchArrangementsRecord', 204)).then(pluginMocks('patchArrangementsRecord', [data, headers], '{version}/arrangements')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('patchArrangementsRecord'));
	    }
	
	    function postProductsRecord(data, headers) {
	      var url = '' + baseUri + version + '/products';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postProductsRecord', 201)).then(pluginMocks('postProductsRecord', [data, headers], '{version}/products')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postProductsRecord'));
	    }
	
	    function putProductsRecord(data, headers) {
	      var url = '' + baseUri + version + '/products';
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putProductsRecord', 204)).then(pluginMocks('putProductsRecord', [data, headers], '{version}/products')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putProductsRecord'));
	    }
	
	    function getProducts(params, headers) {
	      var url = '' + baseUri + version + '/products';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getProducts', 200)).then(pluginMocks('getProducts', [params, headers], '{version}/products')).catch(handleError('getProducts'));
	    }
	
	    function deleteArrangementsRecord(externalArrangementId, params, headers) {
	      var url = '' + baseUri + version + '/arrangements/' + externalArrangementId;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deleteArrangementsRecord', 204)).then(pluginMocks('deleteArrangementsRecord', [externalArrangementId, params, headers], '{version}/arrangements/{externalArrangementId}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deleteArrangementsRecord'));
	    }
	
	    function getArrangementsInternalRecord(externalId, params, headers) {
	      var url = '' + baseUri + version + '/arrangements/internal/' + externalId;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getArrangementsInternalRecord', 200)).then(pluginMocks('getArrangementsInternalRecord', [externalId, params, headers], '{version}/arrangements/internal/{externalId}')).catch(handleError('getArrangementsInternalRecord'));
	    }
	
	    function getArrangementsRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/arrangements/' + id;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getArrangementsRecord', 200)).then(pluginMocks('getArrangementsRecord', [id, params, headers], '{version}/arrangements/{id}')).catch(handleError('getArrangementsRecord'));
	    }
	
	    function getArrangementsWithLiveBalances(params, headers) {
	      var url = '' + baseUri + version + '/arrangements/withLiveBalances';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getArrangementsWithLiveBalances', 200)).then(pluginMocks('getArrangementsWithLiveBalances', [params, headers], '{version}/arrangements/withLiveBalances')).catch(handleError('getArrangementsWithLiveBalances'));
	    }
	
	    function getAccountsBalance(params, headers) {
	      var url = '' + baseUri + version + '/accounts/balance';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccountsBalance', 200)).then(pluginMocks('getAccountsBalance', [params, headers], '{version}/accounts/balance')).catch(handleError('getAccountsBalance'));
	    }
	
	    function postAccountsBalanceHistoryRecord(data, headers) {
	      var url = '' + baseUri + version + '/accounts/balance-history';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postAccountsBalanceHistoryRecord', 201)).then(pluginMocks('postAccountsBalanceHistoryRecord', [data, headers], '{version}/accounts/balance-history')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postAccountsBalanceHistoryRecord'));
	    }
	
	    function getAccountsBalanceHistoryRecord(arrangementsIds, params, headers) {
	      var url = '' + baseUri + version + '/accounts/balance-history/' + arrangementsIds;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccountsBalanceHistoryRecord', 200)).then(pluginMocks('getAccountsBalanceHistoryRecord', [arrangementsIds, params, headers], '{version}/accounts/balance-history/{arrangementsIds}')).catch(handleError('getAccountsBalanceHistoryRecord'));
	    }
	
	    function getProductsRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/products/' + id;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getProductsRecord', 200)).then(pluginMocks('getProductsRecord', [id, params, headers], '{version}/products/{id}')).catch(handleError('getProductsRecord'));
	    }
	
	    schemas.postArrangementsRecord = { "properties": { "externalLegalEntityId": { "type": "string", "maxLength": 50, "required": true }, "externalProductId": { "type": "string", "maxLength": 50, "required": true }, "alias": { "type": "string", "maxLength": 50, "required": false }, "legalEntityId": { "type": "string", "maxLength": 36, "required": false }, "productId": { "type": "string", "maxLength": 36, "required": false } } };
	
	    schemas.putArrangementsRecord = { "properties": { "externalArrangementId": { "type": "string", "maxLength": 50, "required": true }, "name": { "type": "string", "maxLength": 50, "required": false }, "bookedBalance": { "type": "number", "required": false }, "availableBalance": { "type": "number", "required": false }, "creditLimit": { "type": "number", "required": false }, "IBAN": { "type": "string", "maxLength": 34, "pattern": "^(AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW).*", "required": false }, "BBAN": { "type": "string", "maxLength": 50, "required": false }, "currency": { "enum": ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "YER", "ZAR", "ZMW", "ZWL"], "required": true }, "externalTransferAllowed": { "type": "boolean", "required": false }, "urgentTransferAllowed": { "type": "boolean", "required": false }, "accruedInterest": { "type": "number", "required": false }, "number": { "type": "string", "maxLength": 36, "required": false }, "principalAmount": { "type": "number", "required": false }, "currentInvestmentValue": { "type": "number", "minimum": 0, "required": false }, "productNumber": { "type": "string", "maxLength": 36, "required": false }, "BIC": { "type": "string", "maxLength": 11, "required": false }, "bankBranchCode": { "type": "string", "maxLength": 20, "required": false }, "accountOpeningDate": { "type": "string", "format": "date-time", "required": false }, "accountInterestRate": { "type": "number", "required": false }, "valueDateBalance": { "type": "number", "required": false }, "creditLimitUsage": { "type": "number", "required": false }, "creditLimitInterestRate": { "type": "number", "required": false }, "creditLimitExpiryDate": { "type": "string", "format": "date-time", "required": false }, "startDate": { "type": "string", "format": "date-time", "required": false }, "termUnit": { "enum": ["D", "W", "M", "Y"], "required": false }, "termNumber": { "type": "number", "required": false }, "interestPaymentFrequencyUnit": { "enum": ["D", "W", "M", "Y"], "required": false }, "interestPaymentFrequencyNumber": { "type": "number", "required": false }, "maturityDate": { "type": "string", "format": "date-time", "required": false }, "maturityAmount": { "type": "number", "required": false }, "autoRenewalIndicator": { "type": "boolean", "required": false }, "interestSettlementAccount": { "type": "string", "maxLength": 32, "required": false }, "outstandingPrincipalAmount": { "type": "number", "required": false }, "monthlyInstalmentAmount": { "type": "number", "required": false }, "amountInArrear": { "type": "number", "required": false }, "minimumRequiredBalance": { "type": "number", "required": false }, "creditCardAccountNumber": { "type": "string", "maxLength": 32, "required": false }, "validThru": { "type": "string", "format": "date-time", "required": false }, "applicableInterestRate": { "type": "number", "required": false }, "remainingCredit": { "type": "number", "required": false }, "outstandingPayment": { "type": "number", "required": false }, "minimumPayment": { "type": "number", "required": false }, "minimumPaymentDueDate": { "type": "string", "format": "date-time", "required": false }, "totalInvestmentValue": { "type": "number", "required": false }, "debitCards": { "type": "array", "items": { "properties": { "number": { "type": "string", "maxLength": 36, "required": false }, "expiryDate": { "type": "string", "maxLength": 32, "required": false } } }, "uniqueItems": true, "required": false }, "accountHolderAddressLine1": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine2": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine3": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine4": { "type": "string", "maxLength": 70, "required": false }, "accountHolderStreetName": { "type": "string", "maxLength": 70, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "accountHolderName": { "type": "string", "maxLength": 64, "required": false }, "accountHolderCountry": { "enum": ["AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "CI", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RO", "RU", "RW", "RE", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW"], "required": false }, "creditAccount": { "type": "boolean", "default": true, "required": false }, "debitAccount": { "type": "boolean", "default": true, "required": false }, "lastUpdateDate": { "type": "string", "format": "date-time", "required": false }, "alias": { "type": "string", "maxLength": 50, "required": false } } };
	
	    schemas.postProductsRecord = { "properties": { "externalProductId": { "type": "string", "required": true }, "externalProductKindId": { "type": "string", "required": true }, "productKindName": { "type": "string", "enum": ["Current Account", "Credit Card", "Debit Card", "Loan", "Savings Account", "Investment Account", "Term Deposit"], "required": true }, "externalProductTypeId": { "type": "string", "required": false }, "productTypeName": { "type": "string", "required": false } } };
	
	    schemas.putProductsRecord = { "properties": { "externalProductId": { "type": "string", "required": true }, "externalProductKindId": { "type": "string", "required": true }, "productKindName": { "type": "string", "enum": ["Current Account", "Credit Card", "Debit Card", "Loan", "Savings Account", "Investment Account", "Term Deposit"], "required": true }, "externalProductTypeId": { "type": "string", "required": false }, "productTypeName": { "type": "string", "required": false } } };
	
	    schemas.postAccountsBalanceHistoryRecord = { "properties": { "externalArrangementId": { "type": "string", "maxLength": 50, "required": true }, "balance": { "type": "number", "required": true }, "updatedDate": { "type": "string", "format": "date-time", "required": true } } };
	
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
//# sourceMappingURL=mock.data-bb-arrangements-http-ng.js.map