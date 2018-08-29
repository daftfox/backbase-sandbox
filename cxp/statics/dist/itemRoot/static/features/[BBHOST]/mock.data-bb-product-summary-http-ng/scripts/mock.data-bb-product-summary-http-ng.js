(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else if(typeof define === 'function' && define.amd)
		define("mock.data-bb-product-summary-http-ng", ["vendor-bb-angular", "lib-bb-storage-ng"], factory);
	else if(typeof exports === 'object')
		exports["mock.data-bb-product-summary-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else
		root["mock.data-bb-product-summary-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage-ng"]);
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
	exports.productSummaryDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStorageNg = __webpack_require__(3);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _dataBbProductSummaryHttp = __webpack_require__(4);
	
	var _dataBbProductSummaryHttp2 = _interopRequireDefault(_dataBbProductSummaryHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var productSummaryDataModuleKey = 'data-bb-product-summary-http-ng'; /* eslint-disable */
	var productSummaryDataKey = exports.productSummaryDataKey = 'data-bb-product-summary-http-ng:productSummaryData';
	
	exports.default = _vendorBbAngular2.default.module(productSummaryDataModuleKey, [_libBbStorageNg2.default]).provider(productSummaryDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  return {
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	    $get: ['$q', _libBbStorageNg.bbStorageServiceKey, '$httpParamSerializer',
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
	
	    var STORAGE_KEY = 'MOCK_STATE_productSummaryDataModuleKey';
	    var state = {
	      "{version}/productsummary/arrangements": [{
	        "id": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "externalArrangementId": "bcf10f4d-4b2f-4413-9bab-31ff693608b5",
	        "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b",
	        "externalProductId": "fade7867-533e-465e-90cb-e41675c54400",
	        "name": "Mr and Mrs J. Smith",
	        "productKindName": "Current Account",
	        "alias": "Our joined account",
	        "bookedBalance": 1000,
	        "availableBalance": 1500,
	        "creditLimit": 442.12,
	        "currency": "EUR",
	        "externalTransferAllowed": true,
	        "accruedInterest": 0.54,
	        "number": "PANS",
	        "principalAmount": 620.54,
	        "currentInvestmentValue": 0.16,
	        "legalEntityId": "47dbac45-a297-47d5-9d11-c83b7c9eed91",
	        "productId": "36c8fc42-ec97-4f83-8a7c-d622625007f3",
	        "productTypeName": "Current Account",
	        "BIC": "AABAFI22",
	        "bankBranchCode": "bankBranchCode",
	        "visible": false,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "2935",
	          "expiryDate": "10-2019"
	        }, {
	          "number": "1714",
	          "expiryDate": "02-2019"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderStreetName": "accountHolderStreetName1",
	        "town": "Skopje",
	        "postCode": "2000",
	        "countrySubDivision": "countrySubDivision1",
	        "accountHolderName": "accountHolderName_1",
	        "creditAccount": true,
	        "debitAccount": true,
	        "IBAN": "FR188388353832IH3CAWFYXAA36",
	        "BBAN": "FR596129172765GE6UQ2U8TYD56",
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }, {
	        "id": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "externalArrangementId": "a3f8defe-f447-4475-b5c1-d3971ec7a273",
	        "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b",
	        "externalProductId": "df40193b-22a9-4dd6-ae25-db68cd5bbd47",
	        "name": "Smith Bonus Savings",
	        "productKindName": "Savings Account",
	        "alias": "Langosh, Okuneva and Spencer",
	        "bookedBalance": 5500,
	        "creditLimit": 267.41,
	        "currency": "EUR",
	        "externalTransferAllowed": false,
	        "accruedInterest": 36.16,
	        "principalAmount": 375.73,
	        "currentInvestmentValue": 0.06,
	        "legalEntityId": "b6c52e85-c9a7-404d-84b1-ffd8d9007f40",
	        "productId": "ffb7b827-33b2-4c93-83ad-41511f788a56",
	        "productNumber": "ffdd939c-ac4a-4441-ae47-70a7259899e7",
	        "productTypeName": "productTypeName",
	        "BIC": "OKOYFIHH",
	        "bankBranchCode": "bankBranchCode",
	        "visible": true,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "2455",
	          "expiryDate": "10-2020"
	        }, {
	          "number": "9990",
	          "expiryDate": "12-2017"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderName": "accountHolderName_2",
	        "creditAccount": true,
	        "debitAccount": true,
	        "BBAN": "22-44-33-1556",
	        "IBAN": "NL81TRIO0212471066",
	        "crossCurrencyAllowed": true,
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }, {
	        "id": "6c1261e8-7b6b-4c14-9bb4-e976d834c730",
	        "externalArrangementId": "bf0ad157-96e6-4d92-8cdb-a642d74f5ea5",
	        "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b",
	        "externalProductId": "19d57714-52c5-4c3c-8172-a70a2f13779d",
	        "name": "3 Month Deposit Investment",
	        "productKindName": "Investment Account",
	        "alias": "Schaefer, Reichert and Pollich",
	        "bookedBalance": 631.37,
	        "creditLimit": 177.37,
	        "currency": "EUR",
	        "externalTransferAllowed": false,
	        "accruedInterest": 12.32,
	        "principalAmount": 10000,
	        "currentInvestmentValue": 0.88,
	        "legalEntityId": "078335f8-5695-45ed-807c-b87cd7e7b03b",
	        "productId": "89d58325-9cc4-4012-bf5e-7cb1110eb746",
	        "productNumber": "5fbd5aec-5e37-4ceb-95e0-7787ca42886f",
	        "productTypeName": "Investment Account",
	        "BIC": "HANDFIHH",
	        "bankBranchCode": "bankBranchCode",
	        "visible": true,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "8182",
	          "expiryDate": "05-2022"
	        }, {
	          "number": "4996",
	          "expiryDate": "11-2018"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderName": "accountHolderName_3",
	        "creditAccount": true,
	        "debitAccount": true,
	        "crossCurrencyAllowed": false,
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }, {
	        "id": "5cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "externalArrangementId": "828ea599-d4e1-42c1-a64b-e91d58291017",
	        "externalLegalEntityId": "89a382786d514262b75ab9531b749a2b",
	        "externalProductId": "e526eabc-a616-4842-af79-7d93570a5815",
	        "name": "Short term variable interest",
	        "productKindName": "Loan",
	        "alias": "BoehmCronin",
	        "bookedBalance": 150000,
	        "creditLimit": 414.66,
	        "IBAN": "MK12 680B CNMX VMFA Y60",
	        "currency": "EUR",
	        "externalTransferAllowed": false,
	        "accruedInterest": 0.61,
	        "principalAmount": 200000,
	        "currentInvestmentValue": 0.79,
	        "legalEntityId": "ff1cc415-2af5-4b3e-8aa7-4275b72beb41",
	        "productId": "717d27e1-2002-4ac3-aa74-1e2df4038c2d",
	        "productTypeName": "Loan",
	        "BIC": "OKOYFIHH",
	        "bankBranchCode": "bankBranchCode",
	        "visible": true,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "1890",
	          "expiryDate": "05-2020"
	        }, {
	          "number": "2113",
	          "expiryDate": "11-2018"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderName": "accountHolderName_4",
	        "creditAccount": true,
	        "debitAccount": true,
	        "productNumber": "79f5a3ac-e505-41d7-88e9-7568fe4c13c3",
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }, {
	        "id": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "externalArrangementId": "72ab334c-9a5f-4864-a476-f3250d606e5e",
	        "externalLegalEntityId": "89a382786d514262b75ab9531b749a2b",
	        "externalProductId": "a5bf8a16-118e-4bd3-9d57-f20e23677d00",
	        "name": "Jason Smith",
	        "productKindName": "Current Account",
	        "alias": "Morissette Inc",
	        "bookedBalance": 1250,
	        "availableBalance": 0,
	        "creditLimit": 5000,
	        "IBAN": "PK76FBGRHWSUBJF4QBMQ9FV0",
	        "BBAN": "ME62 7594 8447 2463 0782 04",
	        "currency": "EUR",
	        "externalTransferAllowed": false,
	        "accruedInterest": 0.69,
	        "principalAmount": 466.83,
	        "currentInvestmentValue": 0.33,
	        "legalEntityId": "e13d23a0-4131-4676-a043-58d020304c93",
	        "productId": "2cf3c2c0-8ad7-482b-9cb1-a0cf9224a5dd",
	        "productTypeName": "Current Account",
	        "BIC": "AABAFI22",
	        "bankBranchCode": "bankBranchCode",
	        "visible": true,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "8517",
	          "expiryDate": "03-2019"
	        }, {
	          "number": "7376",
	          "expiryDate": "07-2018"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderName": "accountHolderName_5",
	        "creditAccount": true,
	        "debitAccount": true,
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }, {
	        "id": "7cdb2224-8926-4b4d-a99f-1c9dfbbb4611",
	        "externalArrangementId": "72ab334c-9a5f-4864-a476-f3250d606e5e",
	        "externalLegalEntityId": "89a382786d514262b75ab9531b749a2b",
	        "externalProductId": "a5bf8a16-118e-4bd3-9d57-f20e23677d00",
	        "name": "Mr J. Smith",
	        "productKindName": "Debit Card",
	        "bookedBalance": 1350,
	        "availableBalance": 1350,
	        "productNumber": "ffdd939c-ac4a-4441-ae47-70a7259899e8",
	        "number": "1234",
	        "BIC": "AABAFI23",
	        "currency": "EUR",
	        "validThru": "2021-02-28T16:41:41.090Z",
	        "startDate": "2017-02-28T16:41:41.090Z",
	        "accountHolderName": "Jason Smith"
	      }, {
	        "id": "07642680-2b6f-11e8-b467-0ed5f89f718b",
	        "externalArrangementId": "07642c8e-2b6f-11e8-b467-0ed5f89f718b",
	        "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b",
	        "externalProductId": "07642e00-2b6f-11e8-b467-0ed5f89f718b",
	        "name": "Mr John Usmith",
	        "productKindName": "Current Account",
	        "alias": "Our joined account",
	        "bookedBalance": 1000,
	        "availableBalance": 1666,
	        "creditLimit": 442.12,
	        "currency": "USD",
	        "externalTransferAllowed": true,
	        "accruedInterest": 0.54,
	        "number": "PANS",
	        "principalAmount": 620.54,
	        "currentInvestmentValue": 0.16,
	        "legalEntityId": "47dbac45-a297-47d5-9d11-c83b7c9eed91",
	        "productId": "36c8fc42-ec97-4f83-8a7c-d622625007f3",
	        "productTypeName": "Current Account",
	        "bankBranchCode": "026009593",
	        "visible": false,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "2935",
	          "expiryDate": "10-2019"
	        }, {
	          "number": "1714",
	          "expiryDate": "02-2019"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderStreetName": "accountHolderStreetName1",
	        "accountHolderCountry": "US",
	        "town": "Los Angeles",
	        "postCode": "2000",
	        "countrySubDivision": "countrySubDivision1",
	        "accountHolderName": "accountHolderName_1",
	        "creditAccount": true,
	        "debitAccount": true,
	        "BBAN": "00400440116243",
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }, {
	        "id": "ccde2c90-2dad-11e8-b467-0ed5f89f718b",
	        "externalArrangementId": "ccde2a24-2dad-11e8-b467-0ed5f89f718b",
	        "externalLegalEntityId": "c7a382756d514262b75ab9531b749a2b",
	        "externalProductId": "0ed95692-2dae-11e8-b467-0ed5f89f718b",
	        "name": "Mrs Amanda Usmith",
	        "productKindName": "Current Account",
	        "alias": "Our joined account",
	        "bookedBalance": 1000,
	        "availableBalance": 7777,
	        "creditLimit": 442.12,
	        "currency": "USD",
	        "externalTransferAllowed": true,
	        "accruedInterest": 0.54,
	        "number": "PANS",
	        "principalAmount": 620.54,
	        "currentInvestmentValue": 0.16,
	        "legalEntityId": "47dbac45-a297-47d5-9d11-c83b7c9eed91",
	        "productId": "36c8fc42-ec97-4f83-8a7c-d622625007f3",
	        "productTypeName": "Current Account",
	        "bankBranchCode": "026008573",
	        "visible": false,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "2935",
	          "expiryDate": "10-2019"
	        }, {
	          "number": "1714",
	          "expiryDate": "02-2019"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderStreetName": "accountHolderStreetName1",
	        "accountHolderCountry": "US",
	        "town": "New York",
	        "postCode": "2000",
	        "countrySubDivision": "countrySubDivision1",
	        "accountHolderName": "accountHolderName_1",
	        "creditAccount": true,
	        "debitAccount": true,
	        "BBAN": "08000000192000145399",
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }],
	      "{version}/productsummary/configuration/{legalEntityId}": [{
	        "id": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "externalArrangementId": "bcf10f4d-4b2f-4413-9bab-31ff693608b5",
	        "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b",
	        "externalProductId": "fade7867-533e-465e-90cb-e41675c54400",
	        "name": "Mr and Mrs J. Smith",
	        "productKindName": "Current Account",
	        "alias": "Our joined account",
	        "bookedBalance": 1000,
	        "availableBalance": 1500,
	        "creditLimit": 442.12,
	        "currency": "EUR",
	        "externalTransferAllowed": true,
	        "accruedInterest": 0.54,
	        "number": "PANS",
	        "principalAmount": 620.54,
	        "currentInvestmentValue": 0.16,
	        "legalEntityId": "47dbac45-a297-47d5-9d11-c83b7c9eed91",
	        "productId": "36c8fc42-ec97-4f83-8a7c-d622625007f3",
	        "productTypeName": "Current Account",
	        "BIC": "AABAFI22",
	        "bankBranchCode": "bankBranchCode",
	        "visible": false,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "2935",
	          "expiryDate": "10-2019"
	        }, {
	          "number": "1714",
	          "expiryDate": "02-2019"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderStreetName": "accountHolderStreetName1",
	        "town": "Skopje",
	        "postCode": "2000",
	        "countrySubDivision": "countrySubDivision1",
	        "accountHolderName": "accountHolderName_1",
	        "creditAccount": true,
	        "debitAccount": true,
	        "IBAN": "FR188388353832IH3CAWFYXAA36",
	        "BBAN": "FR596129172765GE6UQ2U8TYD56",
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }, {
	        "id": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "externalArrangementId": "a3f8defe-f447-4475-b5c1-d3971ec7a273",
	        "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b",
	        "externalProductId": "df40193b-22a9-4dd6-ae25-db68cd5bbd47",
	        "name": "Smith Bonus Savings",
	        "productKindName": "Savings Account",
	        "alias": "Langosh, Okuneva and Spencer",
	        "bookedBalance": 5500,
	        "creditLimit": 267.41,
	        "currency": "EUR",
	        "externalTransferAllowed": false,
	        "accruedInterest": 36.16,
	        "principalAmount": 375.73,
	        "currentInvestmentValue": 0.06,
	        "legalEntityId": "b6c52e85-c9a7-404d-84b1-ffd8d9007f40",
	        "productId": "ffb7b827-33b2-4c93-83ad-41511f788a56",
	        "productNumber": "ffdd939c-ac4a-4441-ae47-70a7259899e7",
	        "productTypeName": "productTypeName",
	        "BIC": "OKOYFIHH",
	        "bankBranchCode": "bankBranchCode",
	        "visible": true,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "2455",
	          "expiryDate": "10-2020"
	        }, {
	          "number": "9990",
	          "expiryDate": "12-2017"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderName": "accountHolderName_2",
	        "creditAccount": true,
	        "debitAccount": true,
	        "BBAN": "22-44-33-1556",
	        "IBAN": "NL81TRIO0212471066",
	        "crossCurrencyAllowed": true,
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }, {
	        "id": "6c1261e8-7b6b-4c14-9bb4-e976d834c730",
	        "externalArrangementId": "bf0ad157-96e6-4d92-8cdb-a642d74f5ea5",
	        "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b",
	        "externalProductId": "19d57714-52c5-4c3c-8172-a70a2f13779d",
	        "name": "3 Month Deposit Investment",
	        "productKindName": "Investment Account",
	        "alias": "Schaefer, Reichert and Pollich",
	        "bookedBalance": 631.37,
	        "creditLimit": 177.37,
	        "currency": "EUR",
	        "externalTransferAllowed": false,
	        "accruedInterest": 12.32,
	        "principalAmount": 10000,
	        "currentInvestmentValue": 0.88,
	        "legalEntityId": "078335f8-5695-45ed-807c-b87cd7e7b03b",
	        "productId": "89d58325-9cc4-4012-bf5e-7cb1110eb746",
	        "productNumber": "5fbd5aec-5e37-4ceb-95e0-7787ca42886f",
	        "productTypeName": "Investment Account",
	        "BIC": "HANDFIHH",
	        "bankBranchCode": "bankBranchCode",
	        "visible": true,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "8182",
	          "expiryDate": "05-2022"
	        }, {
	          "number": "4996",
	          "expiryDate": "11-2018"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderName": "accountHolderName_3",
	        "creditAccount": true,
	        "debitAccount": true,
	        "crossCurrencyAllowed": false,
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }, {
	        "id": "5cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "externalArrangementId": "828ea599-d4e1-42c1-a64b-e91d58291017",
	        "externalLegalEntityId": "89a382786d514262b75ab9531b749a2b",
	        "externalProductId": "e526eabc-a616-4842-af79-7d93570a5815",
	        "name": "Short term variable interest",
	        "productKindName": "Loan",
	        "alias": "BoehmCronin",
	        "bookedBalance": 150000,
	        "creditLimit": 414.66,
	        "IBAN": "MK12 680B CNMX VMFA Y60",
	        "currency": "EUR",
	        "externalTransferAllowed": false,
	        "accruedInterest": 0.61,
	        "principalAmount": 200000,
	        "currentInvestmentValue": 0.79,
	        "legalEntityId": "ff1cc415-2af5-4b3e-8aa7-4275b72beb41",
	        "productId": "717d27e1-2002-4ac3-aa74-1e2df4038c2d",
	        "productTypeName": "Loan",
	        "BIC": "OKOYFIHH",
	        "bankBranchCode": "bankBranchCode",
	        "visible": true,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "1890",
	          "expiryDate": "05-2020"
	        }, {
	          "number": "2113",
	          "expiryDate": "11-2018"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderName": "accountHolderName_4",
	        "creditAccount": true,
	        "debitAccount": true,
	        "productNumber": "79f5a3ac-e505-41d7-88e9-7568fe4c13c3",
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }, {
	        "id": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "externalArrangementId": "72ab334c-9a5f-4864-a476-f3250d606e5e",
	        "externalLegalEntityId": "89a382786d514262b75ab9531b749a2b",
	        "externalProductId": "a5bf8a16-118e-4bd3-9d57-f20e23677d00",
	        "name": "Jason Smith",
	        "productKindName": "Current Account",
	        "alias": "Morissette Inc",
	        "bookedBalance": 1250,
	        "availableBalance": 0,
	        "creditLimit": 5000,
	        "IBAN": "PK76FBGRHWSUBJF4QBMQ9FV0",
	        "BBAN": "ME62 7594 8447 2463 0782 04",
	        "currency": "EUR",
	        "externalTransferAllowed": false,
	        "accruedInterest": 0.69,
	        "principalAmount": 466.83,
	        "currentInvestmentValue": 0.33,
	        "legalEntityId": "e13d23a0-4131-4676-a043-58d020304c93",
	        "productId": "2cf3c2c0-8ad7-482b-9cb1-a0cf9224a5dd",
	        "productTypeName": "Current Account",
	        "BIC": "AABAFI22",
	        "bankBranchCode": "bankBranchCode",
	        "visible": true,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "8517",
	          "expiryDate": "03-2019"
	        }, {
	          "number": "7376",
	          "expiryDate": "07-2018"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderName": "accountHolderName_5",
	        "creditAccount": true,
	        "debitAccount": true,
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }, {
	        "id": "7cdb2224-8926-4b4d-a99f-1c9dfbbb4611",
	        "externalArrangementId": "72ab334c-9a5f-4864-a476-f3250d606e5e",
	        "externalLegalEntityId": "89a382786d514262b75ab9531b749a2b",
	        "externalProductId": "a5bf8a16-118e-4bd3-9d57-f20e23677d00",
	        "name": "Mr J. Smith",
	        "productKindName": "Debit Card",
	        "bookedBalance": 1350,
	        "availableBalance": 1350,
	        "productNumber": "ffdd939c-ac4a-4441-ae47-70a7259899e8",
	        "number": "1234",
	        "BIC": "AABAFI23",
	        "currency": "EUR",
	        "validThru": "2021-02-28T16:41:41.090Z",
	        "startDate": "2017-02-28T16:41:41.090Z",
	        "accountHolderName": "Jason Smith"
	      }, {
	        "id": "07642680-2b6f-11e8-b467-0ed5f89f718b",
	        "externalArrangementId": "07642c8e-2b6f-11e8-b467-0ed5f89f718b",
	        "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b",
	        "externalProductId": "07642e00-2b6f-11e8-b467-0ed5f89f718b",
	        "name": "Mr John Usmith",
	        "productKindName": "Current Account",
	        "alias": "Our joined account",
	        "bookedBalance": 1000,
	        "availableBalance": 1666,
	        "creditLimit": 442.12,
	        "currency": "USD",
	        "externalTransferAllowed": true,
	        "accruedInterest": 0.54,
	        "number": "PANS",
	        "principalAmount": 620.54,
	        "currentInvestmentValue": 0.16,
	        "legalEntityId": "47dbac45-a297-47d5-9d11-c83b7c9eed91",
	        "productId": "36c8fc42-ec97-4f83-8a7c-d622625007f3",
	        "productTypeName": "Current Account",
	        "bankBranchCode": "026009593",
	        "visible": false,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "2935",
	          "expiryDate": "10-2019"
	        }, {
	          "number": "1714",
	          "expiryDate": "02-2019"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderStreetName": "accountHolderStreetName1",
	        "accountHolderCountry": "US",
	        "town": "Los Angeles",
	        "postCode": "2000",
	        "countrySubDivision": "countrySubDivision1",
	        "accountHolderName": "accountHolderName_1",
	        "creditAccount": true,
	        "debitAccount": true,
	        "BBAN": "00400440116243",
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }, {
	        "id": "ccde2c90-2dad-11e8-b467-0ed5f89f718b",
	        "externalArrangementId": "ccde2a24-2dad-11e8-b467-0ed5f89f718b",
	        "externalLegalEntityId": "c7a382756d514262b75ab9531b749a2b",
	        "externalProductId": "0ed95692-2dae-11e8-b467-0ed5f89f718b",
	        "name": "Mrs Amanda Usmith",
	        "productKindName": "Current Account",
	        "alias": "Our joined account",
	        "bookedBalance": 1000,
	        "availableBalance": 7777,
	        "creditLimit": 442.12,
	        "currency": "USD",
	        "externalTransferAllowed": true,
	        "accruedInterest": 0.54,
	        "number": "PANS",
	        "principalAmount": 620.54,
	        "currentInvestmentValue": 0.16,
	        "legalEntityId": "47dbac45-a297-47d5-9d11-c83b7c9eed91",
	        "productId": "36c8fc42-ec97-4f83-8a7c-d622625007f3",
	        "productTypeName": "Current Account",
	        "bankBranchCode": "026008573",
	        "visible": false,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "2935",
	          "expiryDate": "10-2019"
	        }, {
	          "number": "1714",
	          "expiryDate": "02-2019"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderStreetName": "accountHolderStreetName1",
	        "accountHolderCountry": "US",
	        "town": "New York",
	        "postCode": "2000",
	        "countrySubDivision": "countrySubDivision1",
	        "accountHolderName": "accountHolderName_1",
	        "creditAccount": true,
	        "debitAccount": true,
	        "BBAN": "08000000192000145399",
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }],
	      "{version}/productsummary/context/arrangements": [{
	        "id": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "externalArrangementId": "bcf10f4d-4b2f-4413-9bab-31ff693608b5",
	        "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b",
	        "externalProductId": "fade7867-533e-465e-90cb-e41675c54400",
	        "name": "Mr and Mrs J. Smith",
	        "productKindName": "Current Account",
	        "alias": "Our joined account",
	        "bookedBalance": 1000,
	        "availableBalance": 1500,
	        "creditLimit": 442.12,
	        "currency": "EUR",
	        "externalTransferAllowed": true,
	        "accruedInterest": 0.54,
	        "number": "PANS",
	        "principalAmount": 620.54,
	        "currentInvestmentValue": 0.16,
	        "legalEntityId": "47dbac45-a297-47d5-9d11-c83b7c9eed91",
	        "productId": "36c8fc42-ec97-4f83-8a7c-d622625007f3",
	        "productTypeName": "Current Account",
	        "BIC": "AABAFI22",
	        "bankBranchCode": "bankBranchCode",
	        "visible": false,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "2935",
	          "expiryDate": "10-2019"
	        }, {
	          "number": "1714",
	          "expiryDate": "02-2019"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderStreetName": "accountHolderStreetName1",
	        "town": "Skopje",
	        "postCode": "2000",
	        "countrySubDivision": "countrySubDivision1",
	        "accountHolderName": "accountHolderName_1",
	        "creditAccount": true,
	        "debitAccount": true,
	        "IBAN": "FR188388353832IH3CAWFYXAA36",
	        "BBAN": "FR596129172765GE6UQ2U8TYD56",
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }, {
	        "id": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "externalArrangementId": "a3f8defe-f447-4475-b5c1-d3971ec7a273",
	        "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b",
	        "externalProductId": "df40193b-22a9-4dd6-ae25-db68cd5bbd47",
	        "name": "Smith Bonus Savings",
	        "productKindName": "Savings Account",
	        "alias": "Langosh, Okuneva and Spencer",
	        "bookedBalance": 5500,
	        "creditLimit": 267.41,
	        "currency": "EUR",
	        "externalTransferAllowed": false,
	        "accruedInterest": 36.16,
	        "principalAmount": 375.73,
	        "currentInvestmentValue": 0.06,
	        "legalEntityId": "b6c52e85-c9a7-404d-84b1-ffd8d9007f40",
	        "productId": "ffb7b827-33b2-4c93-83ad-41511f788a56",
	        "productNumber": "ffdd939c-ac4a-4441-ae47-70a7259899e7",
	        "productTypeName": "productTypeName",
	        "BIC": "OKOYFIHH",
	        "bankBranchCode": "bankBranchCode",
	        "visible": true,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "2455",
	          "expiryDate": "10-2020"
	        }, {
	          "number": "9990",
	          "expiryDate": "12-2017"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderName": "accountHolderName_2",
	        "creditAccount": true,
	        "debitAccount": true,
	        "BBAN": "22-44-33-1556",
	        "IBAN": "NL81TRIO0212471066",
	        "crossCurrencyAllowed": true,
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }, {
	        "id": "6c1261e8-7b6b-4c14-9bb4-e976d834c730",
	        "externalArrangementId": "bf0ad157-96e6-4d92-8cdb-a642d74f5ea5",
	        "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b",
	        "externalProductId": "19d57714-52c5-4c3c-8172-a70a2f13779d",
	        "name": "3 Month Deposit Investment",
	        "productKindName": "Investment Account",
	        "alias": "Schaefer, Reichert and Pollich",
	        "bookedBalance": 631.37,
	        "creditLimit": 177.37,
	        "currency": "EUR",
	        "externalTransferAllowed": false,
	        "accruedInterest": 12.32,
	        "principalAmount": 10000,
	        "currentInvestmentValue": 0.88,
	        "legalEntityId": "078335f8-5695-45ed-807c-b87cd7e7b03b",
	        "productId": "89d58325-9cc4-4012-bf5e-7cb1110eb746",
	        "productNumber": "5fbd5aec-5e37-4ceb-95e0-7787ca42886f",
	        "productTypeName": "Investment Account",
	        "BIC": "HANDFIHH",
	        "bankBranchCode": "bankBranchCode",
	        "visible": true,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "8182",
	          "expiryDate": "05-2022"
	        }, {
	          "number": "4996",
	          "expiryDate": "11-2018"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderName": "accountHolderName_3",
	        "creditAccount": true,
	        "debitAccount": true,
	        "crossCurrencyAllowed": false,
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }, {
	        "id": "5cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "externalArrangementId": "828ea599-d4e1-42c1-a64b-e91d58291017",
	        "externalLegalEntityId": "89a382786d514262b75ab9531b749a2b",
	        "externalProductId": "e526eabc-a616-4842-af79-7d93570a5815",
	        "name": "Short term variable interest",
	        "productKindName": "Loan",
	        "alias": "BoehmCronin",
	        "bookedBalance": 150000,
	        "creditLimit": 414.66,
	        "IBAN": "MK12 680B CNMX VMFA Y60",
	        "currency": "EUR",
	        "externalTransferAllowed": false,
	        "accruedInterest": 0.61,
	        "principalAmount": 200000,
	        "currentInvestmentValue": 0.79,
	        "legalEntityId": "ff1cc415-2af5-4b3e-8aa7-4275b72beb41",
	        "productId": "717d27e1-2002-4ac3-aa74-1e2df4038c2d",
	        "productTypeName": "Loan",
	        "BIC": "OKOYFIHH",
	        "bankBranchCode": "bankBranchCode",
	        "visible": true,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "1890",
	          "expiryDate": "05-2020"
	        }, {
	          "number": "2113",
	          "expiryDate": "11-2018"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderName": "accountHolderName_4",
	        "creditAccount": true,
	        "debitAccount": true,
	        "productNumber": "79f5a3ac-e505-41d7-88e9-7568fe4c13c3",
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }, {
	        "id": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "externalArrangementId": "72ab334c-9a5f-4864-a476-f3250d606e5e",
	        "externalLegalEntityId": "89a382786d514262b75ab9531b749a2b",
	        "externalProductId": "a5bf8a16-118e-4bd3-9d57-f20e23677d00",
	        "name": "Jason Smith",
	        "productKindName": "Current Account",
	        "alias": "Morissette Inc",
	        "bookedBalance": 1250,
	        "availableBalance": 0,
	        "creditLimit": 5000,
	        "IBAN": "PK76FBGRHWSUBJF4QBMQ9FV0",
	        "BBAN": "ME62 7594 8447 2463 0782 04",
	        "currency": "EUR",
	        "externalTransferAllowed": false,
	        "accruedInterest": 0.69,
	        "principalAmount": 466.83,
	        "currentInvestmentValue": 0.33,
	        "legalEntityId": "e13d23a0-4131-4676-a043-58d020304c93",
	        "productId": "2cf3c2c0-8ad7-482b-9cb1-a0cf9224a5dd",
	        "productTypeName": "Current Account",
	        "BIC": "AABAFI22",
	        "bankBranchCode": "bankBranchCode",
	        "visible": true,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "8517",
	          "expiryDate": "03-2019"
	        }, {
	          "number": "7376",
	          "expiryDate": "07-2018"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderName": "accountHolderName_5",
	        "creditAccount": true,
	        "debitAccount": true,
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }, {
	        "id": "7cdb2224-8926-4b4d-a99f-1c9dfbbb4611",
	        "externalArrangementId": "72ab334c-9a5f-4864-a476-f3250d606e5e",
	        "externalLegalEntityId": "89a382786d514262b75ab9531b749a2b",
	        "externalProductId": "a5bf8a16-118e-4bd3-9d57-f20e23677d00",
	        "name": "Mr J. Smith",
	        "productKindName": "Debit Card",
	        "bookedBalance": 1350,
	        "availableBalance": 1350,
	        "productNumber": "ffdd939c-ac4a-4441-ae47-70a7259899e8",
	        "number": "1234",
	        "BIC": "AABAFI23",
	        "currency": "EUR",
	        "validThru": "2021-02-28T16:41:41.090Z",
	        "startDate": "2017-02-28T16:41:41.090Z",
	        "accountHolderName": "Jason Smith"
	      }, {
	        "id": "07642680-2b6f-11e8-b467-0ed5f89f718b",
	        "externalArrangementId": "07642c8e-2b6f-11e8-b467-0ed5f89f718b",
	        "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b",
	        "externalProductId": "07642e00-2b6f-11e8-b467-0ed5f89f718b",
	        "name": "Mr John Usmith",
	        "productKindName": "Current Account",
	        "alias": "Our joined account",
	        "bookedBalance": 1000,
	        "availableBalance": 1666,
	        "creditLimit": 442.12,
	        "currency": "USD",
	        "externalTransferAllowed": true,
	        "accruedInterest": 0.54,
	        "number": "PANS",
	        "principalAmount": 620.54,
	        "currentInvestmentValue": 0.16,
	        "legalEntityId": "47dbac45-a297-47d5-9d11-c83b7c9eed91",
	        "productId": "36c8fc42-ec97-4f83-8a7c-d622625007f3",
	        "productTypeName": "Current Account",
	        "bankBranchCode": "026009593",
	        "visible": false,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "2935",
	          "expiryDate": "10-2019"
	        }, {
	          "number": "1714",
	          "expiryDate": "02-2019"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderStreetName": "accountHolderStreetName1",
	        "accountHolderCountry": "US",
	        "town": "Los Angeles",
	        "postCode": "2000",
	        "countrySubDivision": "countrySubDivision1",
	        "accountHolderName": "accountHolderName_1",
	        "creditAccount": true,
	        "debitAccount": true,
	        "BBAN": "00400440116243",
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }, {
	        "id": "ccde2c90-2dad-11e8-b467-0ed5f89f718b",
	        "externalArrangementId": "ccde2a24-2dad-11e8-b467-0ed5f89f718b",
	        "externalLegalEntityId": "c7a382756d514262b75ab9531b749a2b",
	        "externalProductId": "0ed95692-2dae-11e8-b467-0ed5f89f718b",
	        "name": "Mrs Amanda Usmith",
	        "productKindName": "Current Account",
	        "alias": "Our joined account",
	        "bookedBalance": 1000,
	        "availableBalance": 7777,
	        "creditLimit": 442.12,
	        "currency": "USD",
	        "externalTransferAllowed": true,
	        "accruedInterest": 0.54,
	        "number": "PANS",
	        "principalAmount": 620.54,
	        "currentInvestmentValue": 0.16,
	        "legalEntityId": "47dbac45-a297-47d5-9d11-c83b7c9eed91",
	        "productId": "36c8fc42-ec97-4f83-8a7c-d622625007f3",
	        "productTypeName": "Current Account",
	        "bankBranchCode": "026008573",
	        "visible": false,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "2935",
	          "expiryDate": "10-2019"
	        }, {
	          "number": "1714",
	          "expiryDate": "02-2019"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderStreetName": "accountHolderStreetName1",
	        "accountHolderCountry": "US",
	        "town": "New York",
	        "postCode": "2000",
	        "countrySubDivision": "countrySubDivision1",
	        "accountHolderName": "accountHolderName_1",
	        "creditAccount": true,
	        "debitAccount": true,
	        "BBAN": "08000000192000145399",
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }],
	      "{version}/productsummary/context/arrangements/withoutBalances": [{
	        "id": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "externalArrangementId": "bcf10f4d-4b2f-4413-9bab-31ff693608b5",
	        "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b",
	        "externalProductId": "fade7867-533e-465e-90cb-e41675c54400",
	        "name": "Mr and Mrs J. Smith",
	        "productKindName": "Current Account",
	        "alias": "Our joined account",
	        "creditLimit": 442.12,
	        "currency": "EUR",
	        "externalTransferAllowed": true,
	        "accruedInterest": 0.54,
	        "number": "PANS",
	        "principalAmount": 620.54,
	        "currentInvestmentValue": 0.16,
	        "legalEntityId": "47dbac45-a297-47d5-9d11-c83b7c9eed91",
	        "productId": "36c8fc42-ec97-4f83-8a7c-d622625007f3",
	        "productTypeName": "Current Account",
	        "BIC": "AABAFI22",
	        "bankBranchCode": "bankBranchCode",
	        "visible": false,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "2935",
	          "expiryDate": "10-2019"
	        }, {
	          "number": "1714",
	          "expiryDate": "02-2019"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderStreetName": "accountHolderStreetName1",
	        "town": "Skopje",
	        "postCode": "2000",
	        "countrySubDivision": "countrySubDivision1",
	        "accountHolderName": "accountHolderName_1",
	        "creditAccount": true,
	        "debitAccount": true,
	        "IBAN": "FR188388353832IH3CAWFYXAA36",
	        "BBAN": "FR596129172765GE6UQ2U8TYD56",
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }, {
	        "id": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "externalArrangementId": "a3f8defe-f447-4475-b5c1-d3971ec7a273",
	        "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b",
	        "externalProductId": "df40193b-22a9-4dd6-ae25-db68cd5bbd47",
	        "name": "Smith Bonus Savings",
	        "productKindName": "Savings Account",
	        "alias": "Langosh, Okuneva and Spencer",
	        "currency": "EUR",
	        "externalTransferAllowed": false,
	        "accruedInterest": 36.16,
	        "principalAmount": 375.73,
	        "currentInvestmentValue": 0.06,
	        "legalEntityId": "b6c52e85-c9a7-404d-84b1-ffd8d9007f40",
	        "productId": "ffb7b827-33b2-4c93-83ad-41511f788a56",
	        "productNumber": "ffdd939c-ac4a-4441-ae47-70a7259899e7",
	        "productTypeName": "productTypeName",
	        "BIC": "OKOYFIHH",
	        "bankBranchCode": "bankBranchCode",
	        "visible": true,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "2455",
	          "expiryDate": "10-2020"
	        }, {
	          "number": "9990",
	          "expiryDate": "12-2017"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderName": "accountHolderName_2",
	        "creditAccount": true,
	        "debitAccount": true,
	        "BBAN": "22-44-33-1556",
	        "IBAN": "NL81TRIO0212471066",
	        "crossCurrencyAllowed": true,
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }, {
	        "id": "6c1261e8-7b6b-4c14-9bb4-e976d834c730",
	        "externalArrangementId": "bf0ad157-96e6-4d92-8cdb-a642d74f5ea5",
	        "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b",
	        "externalProductId": "19d57714-52c5-4c3c-8172-a70a2f13779d",
	        "name": "3 Month Deposit Investment",
	        "productKindName": "Investment Account",
	        "alias": "Schaefer, Reichert and Pollich",
	        "currency": "EUR",
	        "externalTransferAllowed": false,
	        "accruedInterest": 12.32,
	        "principalAmount": 10000,
	        "currentInvestmentValue": 0.88,
	        "legalEntityId": "078335f8-5695-45ed-807c-b87cd7e7b03b",
	        "productId": "89d58325-9cc4-4012-bf5e-7cb1110eb746",
	        "productNumber": "5fbd5aec-5e37-4ceb-95e0-7787ca42886f",
	        "productTypeName": "Investment Account",
	        "BIC": "HANDFIHH",
	        "bankBranchCode": "bankBranchCode",
	        "visible": true,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "8182",
	          "expiryDate": "05-2022"
	        }, {
	          "number": "4996",
	          "expiryDate": "11-2018"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderName": "accountHolderName_3",
	        "creditAccount": true,
	        "debitAccount": true,
	        "crossCurrencyAllowed": false,
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }, {
	        "id": "5cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "externalArrangementId": "828ea599-d4e1-42c1-a64b-e91d58291017",
	        "externalLegalEntityId": "89a382786d514262b75ab9531b749a2b",
	        "externalProductId": "e526eabc-a616-4842-af79-7d93570a5815",
	        "name": "Short term variable interest",
	        "productKindName": "Loan",
	        "alias": "BoehmCronin",
	        "creditLimit": 414.66,
	        "IBAN": "MK12 680B CNMX VMFA Y60",
	        "currency": "EUR",
	        "externalTransferAllowed": false,
	        "accruedInterest": 0.61,
	        "principalAmount": 200000,
	        "currentInvestmentValue": 0.79,
	        "legalEntityId": "ff1cc415-2af5-4b3e-8aa7-4275b72beb41",
	        "productId": "717d27e1-2002-4ac3-aa74-1e2df4038c2d",
	        "productTypeName": "Loan",
	        "BIC": "OKOYFIHH",
	        "bankBranchCode": "bankBranchCode",
	        "visible": true,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "1890",
	          "expiryDate": "05-2020"
	        }, {
	          "number": "2113",
	          "expiryDate": "11-2018"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderName": "accountHolderName_4",
	        "creditAccount": true,
	        "debitAccount": true,
	        "productNumber": "79f5a3ac-e505-41d7-88e9-7568fe4c13c3",
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }, {
	        "id": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "externalArrangementId": "72ab334c-9a5f-4864-a476-f3250d606e5e",
	        "externalLegalEntityId": "89a382786d514262b75ab9531b749a2b",
	        "externalProductId": "a5bf8a16-118e-4bd3-9d57-f20e23677d00",
	        "name": "Jason Smith",
	        "productKindName": "Current Account",
	        "alias": "Morissette Inc",
	        "creditLimit": 5000,
	        "IBAN": "PK76FBGRHWSUBJF4QBMQ9FV0",
	        "BBAN": "ME62 7594 8447 2463 0782 04",
	        "currency": "EUR",
	        "externalTransferAllowed": false,
	        "accruedInterest": 0.69,
	        "principalAmount": 466.83,
	        "currentInvestmentValue": 0.33,
	        "legalEntityId": "e13d23a0-4131-4676-a043-58d020304c93",
	        "productId": "2cf3c2c0-8ad7-482b-9cb1-a0cf9224a5dd",
	        "productTypeName": "Current Account",
	        "BIC": "AABAFI22",
	        "bankBranchCode": "bankBranchCode",
	        "visible": true,
	        "accountOpeningDate": "2016-01-28T16:41:41.090Z",
	        "accountInterestRate": 100.2,
	        "valueDateBalance": 100.1,
	        "creditLimitUsage": 100.3,
	        "creditLimitInterestRate": 100.4,
	        "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z",
	        "debitCards": [{
	          "number": "8517",
	          "expiryDate": "03-2019"
	        }, {
	          "number": "7376",
	          "expiryDate": "07-2018"
	        }],
	        "startDate": "2016-02-28T16:41:41.090Z",
	        "termUnit": "Y",
	        "termNumber": 50,
	        "maturityDate": "2017-02-28T16:41:41.090Z",
	        "maturityAmount": 99.5,
	        "autoRenewalIndicator": true,
	        "interestPaymentFrequencyUnit": "M",
	        "interestPaymentFrequencyNumber": 15,
	        "interestSettlementAccount": "interestSettlementAccount1",
	        "outstandingPrincipalAmount": 100.2,
	        "monthlyInstalmentAmount": 100.1,
	        "amountInArrear": 100.3,
	        "minimumRequiredBalance": 80.4,
	        "creditCardAccountNumber": "123456",
	        "validThru": "2019-02-28T16:41:41.090Z",
	        "applicableInterestRate": 101.2,
	        "remainingCredit": 50,
	        "outstandingPayment": 105.5,
	        "minimumPayment": 51.1,
	        "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z",
	        "totalInvestmentValue": 110.2,
	        "accountHolderAddressLine1": "accountHolderAddressLine11",
	        "accountHolderAddressLine2": "accountHolderAddressLine12",
	        "accountHolderAddressLine3": "accountHolderAddressLine13",
	        "accountHolderAddressLine4": "accountHolderAddressLine14",
	        "accountHolderName": "accountHolderName_5",
	        "creditAccount": true,
	        "debitAccount": true,
	        "lastUpdateDate": "2016-01-28T16:41:41.090Z"
	      }, {
	        "id": "7cdb2224-8926-4b4d-a99f-1c9dfbbb4611",
	        "externalArrangementId": "72ab334c-9a5f-4864-a476-f3250d606e5e",
	        "externalLegalEntityId": "89a382786d514262b75ab9531b749a2b",
	        "externalProductId": "a5bf8a16-118e-4bd3-9d57-f20e23677d00",
	        "name": "Mr J. Smith",
	        "productKindName": "Debit Card",
	        "productNumber": "ffdd939c-ac4a-4441-ae47-70a7259899e8",
	        "number": "1234",
	        "BIC": "AABAFI23",
	        "currency": "EUR",
	        "validThru": "2021-02-28T16:41:41.090Z",
	        "startDate": "2017-02-28T16:41:41.090Z",
	        "accountHolderName": "Jason Smith"
	      }]
	    };
	
	    bbStorage.subscribe(STORAGE_KEY, function (newState) {
	      state = newState;
	    });
	
	    var persistState = function persistState(newState) {
	      bbStorage.setItem(STORAGE_KEY, newState);
	    };
	
	    var responses = {
	
	      getProductsummary: [{ "status": 200, "data": { "aggregatedBalance": { "value": "126692.78", "currency": "EUR" }, "currentAccounts": { "name": "Current Account", "products": [{ "id": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "name": "Mr and Mrs J. Smith", "alias": "Our joined account", "bookedBalance": "1000.00", "availableBalance": "1500.00", "creditLimit": "442.12", "currency": "EUR", "IBAN": "FR188388353832IH3CAWFYXAA36", "BBAN": "FR596129172765GE6UQ2U8TYD56", "externalTransferAllowed": true, "urgentTransferAllowed": true, "crossCurrencyAllowed": true, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "2935", "expiryDate": "10-2019" }, { "number": "1714", "expiryDate": "02-2019" }], "accruedInterest": 0.54, "bankBranchCode": "bankBranchCode", "visible": true, "creditAccount": true, "debitAccount": true, "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "name": "Jason Smith", "alias": "Morissette Inc", "bookedBalance": "1250.00", "availableBalance": "0.00", "creditLimit": "5000.00", "currency": "EUR", "IBAN": "PK76FBGRHWSUBJF4QBMQ9FV0", "BBAN": "ME62 7594 8447 2463 0782 04", "externalTransferAllowed": false, "urgentTransferAllowed": true, "crossCurrencyAllowed": true, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "8517", "expiryDate": "03-2019" }, { "number": "7376", "expiryDate": "07-2018" }], "accruedInterest": 0.69, "bankBranchCode": "bankBranchCode", "visible": true, "creditAccount": true, "debitAccount": true, "lastUpdateDate": "2016-01-28T16:41:41.090Z" }], "aggregatedBalance": { "value": "2250.00", "currency": "EUR" } }, "savingsAccounts": { "name": "Savings Account", "products": [{ "id": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "name": "Smith Bonus Savings", "alias": "Langosh, Okuneva and Spencer", "productKindName": "Savings Account", "productTypeName": "productTypeName", "bookedBalance": "5500.00", "accruedInterest": 36.16, "currency": "EUR", "BBAN": "22-44-33-1556", "IBAN": "NL81TRIO0212471066", "externalTransferAllowed": false, "crossCurrencyAllowed": true, "accountInterestRate": 100.2, "minimumRequiredBalance": 80.4, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "bankBranchCode": "bankBranchCode", "visible": true, "creditAccount": true, "debitAccount": true, "lastUpdateDate": "2016-01-28T16:41:41.090Z" }], "aggregatedBalance": { "value": "5500.00", "currency": "EUR" } }, "termDeposits": { "name": "Term Deposit", "products": [{ "id": "4cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "name": "3 Month Deposit", "principalAmount": "100", "bookedBalance": "5500.00", "accruedInterest": 12.32, "IBAN": "NL81TRIO0212471066", "currency": "EUR", "externalTransferAllowed": false, "crossCurrencyAllowed": false, "accountInterestRate": 100.2, "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "interestSettlementAccount": "interestSettlementAccount1", "visible": true, "lastUpdateDate": "2016-01-28T16:41:41.090Z" }], "aggregatedBalance": { "value": "10000.00", "currency": "EUR" } }, "loans": { "name": "Loan", "products": [{ "id": "5cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "name": "Short term variable interest", "bookedBalance": "150000.00", "principalAmount": "200000.00", "currency": "EUR", "externalTransferAllowed": false, "crossCurrencyAllowed": false, "accountInterestRate": 100.2, "termUnit": "Y", "termNumber": 50, "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "interestSettlementAccount": "interestSettlementAccount1", "visible": true, "creditAccount": true, "debitAccount": true, "lastUpdateDate": "2016-01-28T16:41:41.090Z" }], "aggregatedBalance": { "value": "150000.00", "currency": "EUR" } }, "creditCards": { "name": "Credit Card", "products": [{ "id": "2d94d333-471d-4cd7-84d2-24e822d5ca68", "name": "Jason Smith Credit Card", "externalTransferAllowed": true, "crossCurrencyAllowed": true, "productKindName": "Credit Card", "productTypeName": "productTypeName", "currency": "EUR", "bookedBalance": "1250.00", "availableBalance": "750.00", "creditLimit": "5000.00", "number": "1234", "urgentTransferAllowed": true, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "visible": true, "lastUpdateDate": "2016-01-28T16:41:41.090Z" }], "aggregatedBalance": { "value": "1250.00", "currency": "EUR" } }, "debitCards": { "name": "Debit Card", "products": [{ "id": "7cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "name": "Mr J. Smith", "externalTransferAllowed": false, "crossCurrencyAllowed": false, "productKindName": "Debit Card", "productTypeName": "productTypeName", "number": "1234", "urgentTransferAllowed": true, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "visible": true, "lastUpdateDate": "2016-01-28T16:41:41.090Z" }], "aggregatedBalance": { "value": "1250.00", "currency": "EUR" } }, "investmentAccounts": { "name": "Investment Account", "products": [{ "id": "8cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "name": "Mr J. Smith Execution only portfolio", "externalTransferAllowed": false, "crossCurrencyAllowed": false, "productKindName": "Investment Account", "productTypeName": "productTypeName", "currency": "EUR", "currentInvestmentValue": "75789.00", "urgentTransferAllowed": true, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "visible": true, "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "6c1261e8-7b6b-4c14-9bb4-e976d834c730", "name": "3 Month Deposit Investment", "alias": "Schaefer, Reichert and Pollich", "externalTransferAllowed": false, "crossCurrencyAllowed": false, "productKindName": "Investment Account", "productTypeName": "Investment Account", "currency": "EUR", "currentInvestmentValue": "0.88", "urgentTransferAllowed": false, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "visible": true, "lastUpdateDate": "2016-01-28T16:41:41.090Z" }], "aggregatedBalance": { "value": "75789.88", "currency": "EUR" } } } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      getProductsummaryDebitaccounts: [{ "status": 200, "data": { "currentAccounts": { "name": "Current Account", "products": [{ "id": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "name": "Standard Current Account", "externalTransferAllowed": true, "crossCurrencyAllowed": true, "productKindName": "Current Account", "productTypeName": "Product type name", "alias": "Standard Current Account Alias", "bookedBalance": "12345.67", "availableBalance": "13345.67", "creditLimit": "500.00", "IBAN": "NL66INGB0280680451", "BBAN": "280680451", "currency": "USD", "urgentTransferAllowed": true, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "DC1": "CARD_1" }, { "DC2": "CARD_2" }], "accruedInterest": 0.09, "bankBranchCode": "bankBranchCode", "visible": true, "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "2cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "name": "USD Current Account", "externalTransferAllowed": true, "crossCurrencyAllowed": true, "productKindName": "Current Account", "productTypeName": "Product type name", "alias": "USD Current Account Alias", "bookedBalance": "-123.45", "availableBalance": "376.55", "creditLimit": "500.00", "IBAN": "NL66INGB0280680451", "BBAN": "280680452", "currency": "USD", "urgentTransferAllowed": true, "visible": false, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "DC1": "CARD_1" }, { "DC2": "CARD_2" }], "accruedInterest": 0.09, "bankBranchCode": "bankBranchCode1", "lastUpdateDate": "2016-01-28T16:41:41.090Z" }], "aggregatedBalance": { "value": "13722.22", "currency": "USD" } }, "savingsAccounts": { "name": "Savings Account", "products": [{ "id": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "name": "Junior's New Computer", "externalTransferAllowed": false, "crossCurrencyAllowed": false, "productKindName": "Savings Account", "productTypeName": "Product type name", "bookedBalance": "12345.67", "accruedInterest": 13345.67, "BBAN": "280680453", "IBAN": "NL81TRIO0212471066", "currency": "PLN", "urgentTransferAllowed": true, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "minimumRequiredBalance": 80.4, "bankBranchCode": "bankBranchCode", "visible": true, "lastUpdateDate": "2016-01-28T16:41:41.090Z" }], "aggregatedBalance": { "value": "13345.67", "currency": "PLN" } } } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      getProductsummaryCreditaccounts: [{ "status": 200, "data": { "currentAccounts": { "name": "Current Account", "products": [{ "id": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "name": "Standard Current Account", "externalTransferAllowed": true, "crossCurrencyAllowed": true, "productKindName": "Current Account", "productTypeName": "Product type name", "alias": "Standard Current Account Alias", "bookedBalance": "12345.67", "availableBalance": "13345.67", "creditLimit": "500.00", "IBAN": "NL66INGB0280680451", "BBAN": "280680451", "currency": "USD", "urgentTransferAllowed": true, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "DC1": "CARD_1" }, { "DC2": "CARD_2" }], "accruedInterest": 0.09, "bankBranchCode": "bankBranchCode", "visible": true, "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "2cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "name": "USD Current Account", "externalTransferAllowed": true, "crossCurrencyAllowed": true, "productKindName": "Current Account", "productTypeName": "Product type name", "alias": "USD Current Account Alias", "bookedBalance": "-123.45", "availableBalance": "376.55", "creditLimit": "500.00", "IBAN": "NL66INGB0280680451", "BBAN": "280680452", "currency": "USD", "urgentTransferAllowed": true, "visible": false, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "DC1": "CARD_1" }, { "DC2": "CARD_2" }], "accruedInterest": 0.09, "bankBranchCode": "bankBranchCode1", "lastUpdateDate": "2016-01-28T16:41:41.090Z" }], "aggregatedBalance": { "value": "13722.22", "currency": "USD" } }, "savingsAccounts": { "name": "Savings Account", "products": [{ "id": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "name": "Junior's New Computer", "externalTransferAllowed": false, "crossCurrencyAllowed": false, "productKindName": "Savings Account", "productTypeName": "Product type name", "bookedBalance": "12345.67", "accruedInterest": 13345.67, "BBAN": "280680453", "IBAN": "NL81TRIO0212471066", "currency": "PLN", "urgentTransferAllowed": true, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "minimumRequiredBalance": 80.4, "bankBranchCode": "bankBranchCode", "visible": true, "lastUpdateDate": "2016-01-28T16:41:41.090Z" }], "aggregatedBalance": { "value": "13345.67", "currency": "PLN" } } } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      getProductsummaryArrangements: [{ "status": 200, "data": [{ "id": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "bcf10f4d-4b2f-4413-9bab-31ff693608b5", "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b", "externalProductId": "fade7867-533e-465e-90cb-e41675c54400", "name": "Mr and Mrs J. Smith", "productKindName": "Current Account", "alias": "Our joined account", "bookedBalance": 1000, "availableBalance": 1500, "creditLimit": 442.12, "currency": "EUR", "externalTransferAllowed": true, "accruedInterest": 0.54, "number": "PANS", "principalAmount": 620.54, "currentInvestmentValue": 0.16, "legalEntityId": "47dbac45-a297-47d5-9d11-c83b7c9eed91", "productId": "36c8fc42-ec97-4f83-8a7c-d622625007f3", "productTypeName": "Current Account", "BIC": "AABAFI22", "bankBranchCode": "bankBranchCode", "visible": false, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "2935", "expiryDate": "10-2019" }, { "number": "1714", "expiryDate": "02-2019" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderStreetName": "accountHolderStreetName1", "town": "Skopje", "postCode": "2000", "countrySubDivision": "countrySubDivision1", "accountHolderName": "accountHolderName_1", "creditAccount": true, "debitAccount": true, "IBAN": "FR188388353832IH3CAWFYXAA36", "BBAN": "FR596129172765GE6UQ2U8TYD56", "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "a3f8defe-f447-4475-b5c1-d3971ec7a273", "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b", "externalProductId": "df40193b-22a9-4dd6-ae25-db68cd5bbd47", "name": "Smith Bonus Savings", "productKindName": "Savings Account", "alias": "Langosh, Okuneva and Spencer", "bookedBalance": 5500, "creditLimit": 267.41, "currency": "EUR", "externalTransferAllowed": false, "accruedInterest": 36.16, "principalAmount": 375.73, "currentInvestmentValue": 0.06, "legalEntityId": "b6c52e85-c9a7-404d-84b1-ffd8d9007f40", "productId": "ffb7b827-33b2-4c93-83ad-41511f788a56", "productNumber": "ffdd939c-ac4a-4441-ae47-70a7259899e7", "productTypeName": "productTypeName", "BIC": "OKOYFIHH", "bankBranchCode": "bankBranchCode", "visible": true, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "2455", "expiryDate": "10-2020" }, { "number": "9990", "expiryDate": "12-2017" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderName": "accountHolderName_2", "creditAccount": true, "debitAccount": true, "BBAN": "22-44-33-1556", "IBAN": "NL81TRIO0212471066", "crossCurrencyAllowed": true, "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "6c1261e8-7b6b-4c14-9bb4-e976d834c730", "externalArrangementId": "bf0ad157-96e6-4d92-8cdb-a642d74f5ea5", "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b", "externalProductId": "19d57714-52c5-4c3c-8172-a70a2f13779d", "name": "3 Month Deposit Investment", "productKindName": "Investment Account", "alias": "Schaefer, Reichert and Pollich", "bookedBalance": 631.37, "creditLimit": 177.37, "currency": "EUR", "externalTransferAllowed": false, "accruedInterest": 12.32, "principalAmount": 10000, "currentInvestmentValue": 0.88, "legalEntityId": "078335f8-5695-45ed-807c-b87cd7e7b03b", "productId": "89d58325-9cc4-4012-bf5e-7cb1110eb746", "productNumber": "5fbd5aec-5e37-4ceb-95e0-7787ca42886f", "productTypeName": "Investment Account", "BIC": "HANDFIHH", "bankBranchCode": "bankBranchCode", "visible": true, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "8182", "expiryDate": "05-2022" }, { "number": "4996", "expiryDate": "11-2018" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderName": "accountHolderName_3", "creditAccount": true, "debitAccount": true, "crossCurrencyAllowed": false, "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "5cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "828ea599-d4e1-42c1-a64b-e91d58291017", "externalLegalEntityId": "89a382786d514262b75ab9531b749a2b", "externalProductId": "e526eabc-a616-4842-af79-7d93570a5815", "name": "Short term variable interest", "productKindName": "Loan", "alias": "BoehmCronin", "bookedBalance": 150000, "creditLimit": 414.66, "IBAN": "MK12 680B CNMX VMFA Y60", "currency": "EUR", "externalTransferAllowed": false, "accruedInterest": 0.61, "principalAmount": 200000, "currentInvestmentValue": 0.79, "legalEntityId": "ff1cc415-2af5-4b3e-8aa7-4275b72beb41", "productId": "717d27e1-2002-4ac3-aa74-1e2df4038c2d", "productTypeName": "Loan", "BIC": "OKOYFIHH", "bankBranchCode": "bankBranchCode", "visible": true, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "1890", "expiryDate": "05-2020" }, { "number": "2113", "expiryDate": "11-2018" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderName": "accountHolderName_4", "creditAccount": true, "debitAccount": true, "productNumber": "79f5a3ac-e505-41d7-88e9-7568fe4c13c3", "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "72ab334c-9a5f-4864-a476-f3250d606e5e", "externalLegalEntityId": "89a382786d514262b75ab9531b749a2b", "externalProductId": "a5bf8a16-118e-4bd3-9d57-f20e23677d00", "name": "Jason Smith", "productKindName": "Current Account", "alias": "Morissette Inc", "bookedBalance": 1250, "availableBalance": 0, "creditLimit": 5000, "IBAN": "PK76FBGRHWSUBJF4QBMQ9FV0", "BBAN": "ME62 7594 8447 2463 0782 04", "currency": "EUR", "externalTransferAllowed": false, "accruedInterest": 0.69, "principalAmount": 466.83, "currentInvestmentValue": 0.33, "legalEntityId": "e13d23a0-4131-4676-a043-58d020304c93", "productId": "2cf3c2c0-8ad7-482b-9cb1-a0cf9224a5dd", "productTypeName": "Current Account", "BIC": "AABAFI22", "bankBranchCode": "bankBranchCode", "visible": true, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "8517", "expiryDate": "03-2019" }, { "number": "7376", "expiryDate": "07-2018" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderName": "accountHolderName_5", "creditAccount": true, "debitAccount": true, "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "7cdb2224-8926-4b4d-a99f-1c9dfbbb4611", "externalArrangementId": "72ab334c-9a5f-4864-a476-f3250d606e5e", "externalLegalEntityId": "89a382786d514262b75ab9531b749a2b", "externalProductId": "a5bf8a16-118e-4bd3-9d57-f20e23677d00", "name": "Mr J. Smith", "productKindName": "Debit Card", "bookedBalance": 1350, "availableBalance": 1350, "productNumber": "ffdd939c-ac4a-4441-ae47-70a7259899e8", "number": "1234", "BIC": "AABAFI23", "currency": "EUR", "validThru": "2021-02-28T16:41:41.090Z", "startDate": "2017-02-28T16:41:41.090Z", "accountHolderName": "Jason Smith" }, { "id": "07642680-2b6f-11e8-b467-0ed5f89f718b", "externalArrangementId": "07642c8e-2b6f-11e8-b467-0ed5f89f718b", "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b", "externalProductId": "07642e00-2b6f-11e8-b467-0ed5f89f718b", "name": "Mr John Usmith", "productKindName": "Current Account", "alias": "Our joined account", "bookedBalance": 1000, "availableBalance": 1666, "creditLimit": 442.12, "currency": "USD", "externalTransferAllowed": true, "accruedInterest": 0.54, "number": "PANS", "principalAmount": 620.54, "currentInvestmentValue": 0.16, "legalEntityId": "47dbac45-a297-47d5-9d11-c83b7c9eed91", "productId": "36c8fc42-ec97-4f83-8a7c-d622625007f3", "productTypeName": "Current Account", "bankBranchCode": "026009593", "visible": false, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "2935", "expiryDate": "10-2019" }, { "number": "1714", "expiryDate": "02-2019" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderStreetName": "accountHolderStreetName1", "accountHolderCountry": "US", "town": "Los Angeles", "postCode": "2000", "countrySubDivision": "countrySubDivision1", "accountHolderName": "accountHolderName_1", "creditAccount": true, "debitAccount": true, "BBAN": "00400440116243", "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "ccde2c90-2dad-11e8-b467-0ed5f89f718b", "externalArrangementId": "ccde2a24-2dad-11e8-b467-0ed5f89f718b", "externalLegalEntityId": "c7a382756d514262b75ab9531b749a2b", "externalProductId": "0ed95692-2dae-11e8-b467-0ed5f89f718b", "name": "Mrs Amanda Usmith", "productKindName": "Current Account", "alias": "Our joined account", "bookedBalance": 1000, "availableBalance": 7777, "creditLimit": 442.12, "currency": "USD", "externalTransferAllowed": true, "accruedInterest": 0.54, "number": "PANS", "principalAmount": 620.54, "currentInvestmentValue": 0.16, "legalEntityId": "47dbac45-a297-47d5-9d11-c83b7c9eed91", "productId": "36c8fc42-ec97-4f83-8a7c-d622625007f3", "productTypeName": "Current Account", "bankBranchCode": "026008573", "visible": false, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "2935", "expiryDate": "10-2019" }, { "number": "1714", "expiryDate": "02-2019" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderStreetName": "accountHolderStreetName1", "accountHolderCountry": "US", "town": "New York", "postCode": "2000", "countrySubDivision": "countrySubDivision1", "accountHolderName": "accountHolderName_1", "creditAccount": true, "debitAccount": true, "BBAN": "08000000192000145399", "lastUpdateDate": "2016-01-28T16:41:41.090Z" }] }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      getProductsummaryConfigurationRecord: [{ "status": 200, "data": [{ "id": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "bcf10f4d-4b2f-4413-9bab-31ff693608b5", "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b", "externalProductId": "fade7867-533e-465e-90cb-e41675c54400", "name": "Mr and Mrs J. Smith", "productKindName": "Current Account", "alias": "Our joined account", "bookedBalance": 1000, "availableBalance": 1500, "creditLimit": 442.12, "currency": "EUR", "externalTransferAllowed": true, "accruedInterest": 0.54, "number": "PANS", "principalAmount": 620.54, "currentInvestmentValue": 0.16, "legalEntityId": "47dbac45-a297-47d5-9d11-c83b7c9eed91", "productId": "36c8fc42-ec97-4f83-8a7c-d622625007f3", "productTypeName": "Current Account", "BIC": "AABAFI22", "bankBranchCode": "bankBranchCode", "visible": false, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "2935", "expiryDate": "10-2019" }, { "number": "1714", "expiryDate": "02-2019" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderStreetName": "accountHolderStreetName1", "town": "Skopje", "postCode": "2000", "countrySubDivision": "countrySubDivision1", "accountHolderName": "accountHolderName_1", "creditAccount": true, "debitAccount": true, "IBAN": "FR188388353832IH3CAWFYXAA36", "BBAN": "FR596129172765GE6UQ2U8TYD56", "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "a3f8defe-f447-4475-b5c1-d3971ec7a273", "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b", "externalProductId": "df40193b-22a9-4dd6-ae25-db68cd5bbd47", "name": "Smith Bonus Savings", "productKindName": "Savings Account", "alias": "Langosh, Okuneva and Spencer", "bookedBalance": 5500, "creditLimit": 267.41, "currency": "EUR", "externalTransferAllowed": false, "accruedInterest": 36.16, "principalAmount": 375.73, "currentInvestmentValue": 0.06, "legalEntityId": "b6c52e85-c9a7-404d-84b1-ffd8d9007f40", "productId": "ffb7b827-33b2-4c93-83ad-41511f788a56", "productNumber": "ffdd939c-ac4a-4441-ae47-70a7259899e7", "productTypeName": "productTypeName", "BIC": "OKOYFIHH", "bankBranchCode": "bankBranchCode", "visible": true, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "2455", "expiryDate": "10-2020" }, { "number": "9990", "expiryDate": "12-2017" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderName": "accountHolderName_2", "creditAccount": true, "debitAccount": true, "BBAN": "22-44-33-1556", "IBAN": "NL81TRIO0212471066", "crossCurrencyAllowed": true, "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "6c1261e8-7b6b-4c14-9bb4-e976d834c730", "externalArrangementId": "bf0ad157-96e6-4d92-8cdb-a642d74f5ea5", "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b", "externalProductId": "19d57714-52c5-4c3c-8172-a70a2f13779d", "name": "3 Month Deposit Investment", "productKindName": "Investment Account", "alias": "Schaefer, Reichert and Pollich", "bookedBalance": 631.37, "creditLimit": 177.37, "currency": "EUR", "externalTransferAllowed": false, "accruedInterest": 12.32, "principalAmount": 10000, "currentInvestmentValue": 0.88, "legalEntityId": "078335f8-5695-45ed-807c-b87cd7e7b03b", "productId": "89d58325-9cc4-4012-bf5e-7cb1110eb746", "productNumber": "5fbd5aec-5e37-4ceb-95e0-7787ca42886f", "productTypeName": "Investment Account", "BIC": "HANDFIHH", "bankBranchCode": "bankBranchCode", "visible": true, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "8182", "expiryDate": "05-2022" }, { "number": "4996", "expiryDate": "11-2018" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderName": "accountHolderName_3", "creditAccount": true, "debitAccount": true, "crossCurrencyAllowed": false, "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "5cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "828ea599-d4e1-42c1-a64b-e91d58291017", "externalLegalEntityId": "89a382786d514262b75ab9531b749a2b", "externalProductId": "e526eabc-a616-4842-af79-7d93570a5815", "name": "Short term variable interest", "productKindName": "Loan", "alias": "BoehmCronin", "bookedBalance": 150000, "creditLimit": 414.66, "IBAN": "MK12 680B CNMX VMFA Y60", "currency": "EUR", "externalTransferAllowed": false, "accruedInterest": 0.61, "principalAmount": 200000, "currentInvestmentValue": 0.79, "legalEntityId": "ff1cc415-2af5-4b3e-8aa7-4275b72beb41", "productId": "717d27e1-2002-4ac3-aa74-1e2df4038c2d", "productTypeName": "Loan", "BIC": "OKOYFIHH", "bankBranchCode": "bankBranchCode", "visible": true, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "1890", "expiryDate": "05-2020" }, { "number": "2113", "expiryDate": "11-2018" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderName": "accountHolderName_4", "creditAccount": true, "debitAccount": true, "productNumber": "79f5a3ac-e505-41d7-88e9-7568fe4c13c3", "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "72ab334c-9a5f-4864-a476-f3250d606e5e", "externalLegalEntityId": "89a382786d514262b75ab9531b749a2b", "externalProductId": "a5bf8a16-118e-4bd3-9d57-f20e23677d00", "name": "Jason Smith", "productKindName": "Current Account", "alias": "Morissette Inc", "bookedBalance": 1250, "availableBalance": 0, "creditLimit": 5000, "IBAN": "PK76FBGRHWSUBJF4QBMQ9FV0", "BBAN": "ME62 7594 8447 2463 0782 04", "currency": "EUR", "externalTransferAllowed": false, "accruedInterest": 0.69, "principalAmount": 466.83, "currentInvestmentValue": 0.33, "legalEntityId": "e13d23a0-4131-4676-a043-58d020304c93", "productId": "2cf3c2c0-8ad7-482b-9cb1-a0cf9224a5dd", "productTypeName": "Current Account", "BIC": "AABAFI22", "bankBranchCode": "bankBranchCode", "visible": true, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "8517", "expiryDate": "03-2019" }, { "number": "7376", "expiryDate": "07-2018" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderName": "accountHolderName_5", "creditAccount": true, "debitAccount": true, "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "7cdb2224-8926-4b4d-a99f-1c9dfbbb4611", "externalArrangementId": "72ab334c-9a5f-4864-a476-f3250d606e5e", "externalLegalEntityId": "89a382786d514262b75ab9531b749a2b", "externalProductId": "a5bf8a16-118e-4bd3-9d57-f20e23677d00", "name": "Mr J. Smith", "productKindName": "Debit Card", "bookedBalance": 1350, "availableBalance": 1350, "productNumber": "ffdd939c-ac4a-4441-ae47-70a7259899e8", "number": "1234", "BIC": "AABAFI23", "currency": "EUR", "validThru": "2021-02-28T16:41:41.090Z", "startDate": "2017-02-28T16:41:41.090Z", "accountHolderName": "Jason Smith" }, { "id": "07642680-2b6f-11e8-b467-0ed5f89f718b", "externalArrangementId": "07642c8e-2b6f-11e8-b467-0ed5f89f718b", "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b", "externalProductId": "07642e00-2b6f-11e8-b467-0ed5f89f718b", "name": "Mr John Usmith", "productKindName": "Current Account", "alias": "Our joined account", "bookedBalance": 1000, "availableBalance": 1666, "creditLimit": 442.12, "currency": "USD", "externalTransferAllowed": true, "accruedInterest": 0.54, "number": "PANS", "principalAmount": 620.54, "currentInvestmentValue": 0.16, "legalEntityId": "47dbac45-a297-47d5-9d11-c83b7c9eed91", "productId": "36c8fc42-ec97-4f83-8a7c-d622625007f3", "productTypeName": "Current Account", "bankBranchCode": "026009593", "visible": false, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "2935", "expiryDate": "10-2019" }, { "number": "1714", "expiryDate": "02-2019" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderStreetName": "accountHolderStreetName1", "accountHolderCountry": "US", "town": "Los Angeles", "postCode": "2000", "countrySubDivision": "countrySubDivision1", "accountHolderName": "accountHolderName_1", "creditAccount": true, "debitAccount": true, "BBAN": "00400440116243", "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "ccde2c90-2dad-11e8-b467-0ed5f89f718b", "externalArrangementId": "ccde2a24-2dad-11e8-b467-0ed5f89f718b", "externalLegalEntityId": "c7a382756d514262b75ab9531b749a2b", "externalProductId": "0ed95692-2dae-11e8-b467-0ed5f89f718b", "name": "Mrs Amanda Usmith", "productKindName": "Current Account", "alias": "Our joined account", "bookedBalance": 1000, "availableBalance": 7777, "creditLimit": 442.12, "currency": "USD", "externalTransferAllowed": true, "accruedInterest": 0.54, "number": "PANS", "principalAmount": 620.54, "currentInvestmentValue": 0.16, "legalEntityId": "47dbac45-a297-47d5-9d11-c83b7c9eed91", "productId": "36c8fc42-ec97-4f83-8a7c-d622625007f3", "productTypeName": "Current Account", "bankBranchCode": "026008573", "visible": false, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "2935", "expiryDate": "10-2019" }, { "number": "1714", "expiryDate": "02-2019" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderStreetName": "accountHolderStreetName1", "accountHolderCountry": "US", "town": "New York", "postCode": "2000", "countrySubDivision": "countrySubDivision1", "accountHolderName": "accountHolderName_1", "creditAccount": true, "debitAccount": true, "BBAN": "08000000192000145399", "lastUpdateDate": "2016-01-28T16:41:41.090Z" }] }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      getProductsummaryContextArrangements: [{ "status": 200, "data": [{ "id": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "bcf10f4d-4b2f-4413-9bab-31ff693608b5", "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b", "externalProductId": "fade7867-533e-465e-90cb-e41675c54400", "name": "Mr and Mrs J. Smith", "productKindName": "Current Account", "alias": "Our joined account", "bookedBalance": 1000, "availableBalance": 1500, "creditLimit": 442.12, "currency": "EUR", "externalTransferAllowed": true, "accruedInterest": 0.54, "number": "PANS", "principalAmount": 620.54, "currentInvestmentValue": 0.16, "legalEntityId": "47dbac45-a297-47d5-9d11-c83b7c9eed91", "productId": "36c8fc42-ec97-4f83-8a7c-d622625007f3", "productTypeName": "Current Account", "BIC": "AABAFI22", "bankBranchCode": "bankBranchCode", "visible": false, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "2935", "expiryDate": "10-2019" }, { "number": "1714", "expiryDate": "02-2019" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderStreetName": "accountHolderStreetName1", "town": "Skopje", "postCode": "2000", "countrySubDivision": "countrySubDivision1", "accountHolderName": "accountHolderName_1", "creditAccount": true, "debitAccount": true, "IBAN": "FR188388353832IH3CAWFYXAA36", "BBAN": "FR596129172765GE6UQ2U8TYD56", "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "a3f8defe-f447-4475-b5c1-d3971ec7a273", "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b", "externalProductId": "df40193b-22a9-4dd6-ae25-db68cd5bbd47", "name": "Smith Bonus Savings", "productKindName": "Savings Account", "alias": "Langosh, Okuneva and Spencer", "bookedBalance": 5500, "creditLimit": 267.41, "currency": "EUR", "externalTransferAllowed": false, "accruedInterest": 36.16, "principalAmount": 375.73, "currentInvestmentValue": 0.06, "legalEntityId": "b6c52e85-c9a7-404d-84b1-ffd8d9007f40", "productId": "ffb7b827-33b2-4c93-83ad-41511f788a56", "productNumber": "ffdd939c-ac4a-4441-ae47-70a7259899e7", "productTypeName": "productTypeName", "BIC": "OKOYFIHH", "bankBranchCode": "bankBranchCode", "visible": true, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "2455", "expiryDate": "10-2020" }, { "number": "9990", "expiryDate": "12-2017" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderName": "accountHolderName_2", "creditAccount": true, "debitAccount": true, "BBAN": "22-44-33-1556", "IBAN": "NL81TRIO0212471066", "crossCurrencyAllowed": true, "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "6c1261e8-7b6b-4c14-9bb4-e976d834c730", "externalArrangementId": "bf0ad157-96e6-4d92-8cdb-a642d74f5ea5", "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b", "externalProductId": "19d57714-52c5-4c3c-8172-a70a2f13779d", "name": "3 Month Deposit Investment", "productKindName": "Investment Account", "alias": "Schaefer, Reichert and Pollich", "bookedBalance": 631.37, "creditLimit": 177.37, "currency": "EUR", "externalTransferAllowed": false, "accruedInterest": 12.32, "principalAmount": 10000, "currentInvestmentValue": 0.88, "legalEntityId": "078335f8-5695-45ed-807c-b87cd7e7b03b", "productId": "89d58325-9cc4-4012-bf5e-7cb1110eb746", "productNumber": "5fbd5aec-5e37-4ceb-95e0-7787ca42886f", "productTypeName": "Investment Account", "BIC": "HANDFIHH", "bankBranchCode": "bankBranchCode", "visible": true, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "8182", "expiryDate": "05-2022" }, { "number": "4996", "expiryDate": "11-2018" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderName": "accountHolderName_3", "creditAccount": true, "debitAccount": true, "crossCurrencyAllowed": false, "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "5cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "828ea599-d4e1-42c1-a64b-e91d58291017", "externalLegalEntityId": "89a382786d514262b75ab9531b749a2b", "externalProductId": "e526eabc-a616-4842-af79-7d93570a5815", "name": "Short term variable interest", "productKindName": "Loan", "alias": "BoehmCronin", "bookedBalance": 150000, "creditLimit": 414.66, "IBAN": "MK12 680B CNMX VMFA Y60", "currency": "EUR", "externalTransferAllowed": false, "accruedInterest": 0.61, "principalAmount": 200000, "currentInvestmentValue": 0.79, "legalEntityId": "ff1cc415-2af5-4b3e-8aa7-4275b72beb41", "productId": "717d27e1-2002-4ac3-aa74-1e2df4038c2d", "productTypeName": "Loan", "BIC": "OKOYFIHH", "bankBranchCode": "bankBranchCode", "visible": true, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "1890", "expiryDate": "05-2020" }, { "number": "2113", "expiryDate": "11-2018" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderName": "accountHolderName_4", "creditAccount": true, "debitAccount": true, "productNumber": "79f5a3ac-e505-41d7-88e9-7568fe4c13c3", "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "72ab334c-9a5f-4864-a476-f3250d606e5e", "externalLegalEntityId": "89a382786d514262b75ab9531b749a2b", "externalProductId": "a5bf8a16-118e-4bd3-9d57-f20e23677d00", "name": "Jason Smith", "productKindName": "Current Account", "alias": "Morissette Inc", "bookedBalance": 1250, "availableBalance": 0, "creditLimit": 5000, "IBAN": "PK76FBGRHWSUBJF4QBMQ9FV0", "BBAN": "ME62 7594 8447 2463 0782 04", "currency": "EUR", "externalTransferAllowed": false, "accruedInterest": 0.69, "principalAmount": 466.83, "currentInvestmentValue": 0.33, "legalEntityId": "e13d23a0-4131-4676-a043-58d020304c93", "productId": "2cf3c2c0-8ad7-482b-9cb1-a0cf9224a5dd", "productTypeName": "Current Account", "BIC": "AABAFI22", "bankBranchCode": "bankBranchCode", "visible": true, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "8517", "expiryDate": "03-2019" }, { "number": "7376", "expiryDate": "07-2018" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderName": "accountHolderName_5", "creditAccount": true, "debitAccount": true, "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "7cdb2224-8926-4b4d-a99f-1c9dfbbb4611", "externalArrangementId": "72ab334c-9a5f-4864-a476-f3250d606e5e", "externalLegalEntityId": "89a382786d514262b75ab9531b749a2b", "externalProductId": "a5bf8a16-118e-4bd3-9d57-f20e23677d00", "name": "Mr J. Smith", "productKindName": "Debit Card", "bookedBalance": 1350, "availableBalance": 1350, "productNumber": "ffdd939c-ac4a-4441-ae47-70a7259899e8", "number": "1234", "BIC": "AABAFI23", "currency": "EUR", "validThru": "2021-02-28T16:41:41.090Z", "startDate": "2017-02-28T16:41:41.090Z", "accountHolderName": "Jason Smith" }, { "id": "07642680-2b6f-11e8-b467-0ed5f89f718b", "externalArrangementId": "07642c8e-2b6f-11e8-b467-0ed5f89f718b", "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b", "externalProductId": "07642e00-2b6f-11e8-b467-0ed5f89f718b", "name": "Mr John Usmith", "productKindName": "Current Account", "alias": "Our joined account", "bookedBalance": 1000, "availableBalance": 1666, "creditLimit": 442.12, "currency": "USD", "externalTransferAllowed": true, "accruedInterest": 0.54, "number": "PANS", "principalAmount": 620.54, "currentInvestmentValue": 0.16, "legalEntityId": "47dbac45-a297-47d5-9d11-c83b7c9eed91", "productId": "36c8fc42-ec97-4f83-8a7c-d622625007f3", "productTypeName": "Current Account", "bankBranchCode": "026009593", "visible": false, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "2935", "expiryDate": "10-2019" }, { "number": "1714", "expiryDate": "02-2019" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderStreetName": "accountHolderStreetName1", "accountHolderCountry": "US", "town": "Los Angeles", "postCode": "2000", "countrySubDivision": "countrySubDivision1", "accountHolderName": "accountHolderName_1", "creditAccount": true, "debitAccount": true, "BBAN": "00400440116243", "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "ccde2c90-2dad-11e8-b467-0ed5f89f718b", "externalArrangementId": "ccde2a24-2dad-11e8-b467-0ed5f89f718b", "externalLegalEntityId": "c7a382756d514262b75ab9531b749a2b", "externalProductId": "0ed95692-2dae-11e8-b467-0ed5f89f718b", "name": "Mrs Amanda Usmith", "productKindName": "Current Account", "alias": "Our joined account", "bookedBalance": 1000, "availableBalance": 7777, "creditLimit": 442.12, "currency": "USD", "externalTransferAllowed": true, "accruedInterest": 0.54, "number": "PANS", "principalAmount": 620.54, "currentInvestmentValue": 0.16, "legalEntityId": "47dbac45-a297-47d5-9d11-c83b7c9eed91", "productId": "36c8fc42-ec97-4f83-8a7c-d622625007f3", "productTypeName": "Current Account", "bankBranchCode": "026008573", "visible": false, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "2935", "expiryDate": "10-2019" }, { "number": "1714", "expiryDate": "02-2019" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderStreetName": "accountHolderStreetName1", "accountHolderCountry": "US", "town": "New York", "postCode": "2000", "countrySubDivision": "countrySubDivision1", "accountHolderName": "accountHolderName_1", "creditAccount": true, "debitAccount": true, "BBAN": "08000000192000145399", "lastUpdateDate": "2016-01-28T16:41:41.090Z" }] }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      getProductsummaryContextArrangementsWithoutBalances: [{ "status": 200, "data": [{ "id": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "bcf10f4d-4b2f-4413-9bab-31ff693608b5", "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b", "externalProductId": "fade7867-533e-465e-90cb-e41675c54400", "name": "Mr and Mrs J. Smith", "productKindName": "Current Account", "alias": "Our joined account", "creditLimit": 442.12, "currency": "EUR", "externalTransferAllowed": true, "accruedInterest": 0.54, "number": "PANS", "principalAmount": 620.54, "currentInvestmentValue": 0.16, "legalEntityId": "47dbac45-a297-47d5-9d11-c83b7c9eed91", "productId": "36c8fc42-ec97-4f83-8a7c-d622625007f3", "productTypeName": "Current Account", "BIC": "AABAFI22", "bankBranchCode": "bankBranchCode", "visible": false, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "2935", "expiryDate": "10-2019" }, { "number": "1714", "expiryDate": "02-2019" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderStreetName": "accountHolderStreetName1", "town": "Skopje", "postCode": "2000", "countrySubDivision": "countrySubDivision1", "accountHolderName": "accountHolderName_1", "creditAccount": true, "debitAccount": true, "IBAN": "FR188388353832IH3CAWFYXAA36", "BBAN": "FR596129172765GE6UQ2U8TYD56", "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "a3f8defe-f447-4475-b5c1-d3971ec7a273", "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b", "externalProductId": "df40193b-22a9-4dd6-ae25-db68cd5bbd47", "name": "Smith Bonus Savings", "productKindName": "Savings Account", "alias": "Langosh, Okuneva and Spencer", "currency": "EUR", "externalTransferAllowed": false, "accruedInterest": 36.16, "principalAmount": 375.73, "currentInvestmentValue": 0.06, "legalEntityId": "b6c52e85-c9a7-404d-84b1-ffd8d9007f40", "productId": "ffb7b827-33b2-4c93-83ad-41511f788a56", "productNumber": "ffdd939c-ac4a-4441-ae47-70a7259899e7", "productTypeName": "productTypeName", "BIC": "OKOYFIHH", "bankBranchCode": "bankBranchCode", "visible": true, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "2455", "expiryDate": "10-2020" }, { "number": "9990", "expiryDate": "12-2017" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderName": "accountHolderName_2", "creditAccount": true, "debitAccount": true, "BBAN": "22-44-33-1556", "IBAN": "NL81TRIO0212471066", "crossCurrencyAllowed": true, "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "6c1261e8-7b6b-4c14-9bb4-e976d834c730", "externalArrangementId": "bf0ad157-96e6-4d92-8cdb-a642d74f5ea5", "externalLegalEntityId": "c7a382786d514262b75ab9531b749a2b", "externalProductId": "19d57714-52c5-4c3c-8172-a70a2f13779d", "name": "3 Month Deposit Investment", "productKindName": "Investment Account", "alias": "Schaefer, Reichert and Pollich", "currency": "EUR", "externalTransferAllowed": false, "accruedInterest": 12.32, "principalAmount": 10000, "currentInvestmentValue": 0.88, "legalEntityId": "078335f8-5695-45ed-807c-b87cd7e7b03b", "productId": "89d58325-9cc4-4012-bf5e-7cb1110eb746", "productNumber": "5fbd5aec-5e37-4ceb-95e0-7787ca42886f", "productTypeName": "Investment Account", "BIC": "HANDFIHH", "bankBranchCode": "bankBranchCode", "visible": true, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "8182", "expiryDate": "05-2022" }, { "number": "4996", "expiryDate": "11-2018" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderName": "accountHolderName_3", "creditAccount": true, "debitAccount": true, "crossCurrencyAllowed": false, "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "5cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "828ea599-d4e1-42c1-a64b-e91d58291017", "externalLegalEntityId": "89a382786d514262b75ab9531b749a2b", "externalProductId": "e526eabc-a616-4842-af79-7d93570a5815", "name": "Short term variable interest", "productKindName": "Loan", "alias": "BoehmCronin", "creditLimit": 414.66, "IBAN": "MK12 680B CNMX VMFA Y60", "currency": "EUR", "externalTransferAllowed": false, "accruedInterest": 0.61, "principalAmount": 200000, "currentInvestmentValue": 0.79, "legalEntityId": "ff1cc415-2af5-4b3e-8aa7-4275b72beb41", "productId": "717d27e1-2002-4ac3-aa74-1e2df4038c2d", "productTypeName": "Loan", "BIC": "OKOYFIHH", "bankBranchCode": "bankBranchCode", "visible": true, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "1890", "expiryDate": "05-2020" }, { "number": "2113", "expiryDate": "11-2018" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderName": "accountHolderName_4", "creditAccount": true, "debitAccount": true, "productNumber": "79f5a3ac-e505-41d7-88e9-7568fe4c13c3", "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "72ab334c-9a5f-4864-a476-f3250d606e5e", "externalLegalEntityId": "89a382786d514262b75ab9531b749a2b", "externalProductId": "a5bf8a16-118e-4bd3-9d57-f20e23677d00", "name": "Jason Smith", "productKindName": "Current Account", "alias": "Morissette Inc", "creditLimit": 5000, "IBAN": "PK76FBGRHWSUBJF4QBMQ9FV0", "BBAN": "ME62 7594 8447 2463 0782 04", "currency": "EUR", "externalTransferAllowed": false, "accruedInterest": 0.69, "principalAmount": 466.83, "currentInvestmentValue": 0.33, "legalEntityId": "e13d23a0-4131-4676-a043-58d020304c93", "productId": "2cf3c2c0-8ad7-482b-9cb1-a0cf9224a5dd", "productTypeName": "Current Account", "BIC": "AABAFI22", "bankBranchCode": "bankBranchCode", "visible": true, "accountOpeningDate": "2016-01-28T16:41:41.090Z", "accountInterestRate": 100.2, "valueDateBalance": 100.1, "creditLimitUsage": 100.3, "creditLimitInterestRate": 100.4, "creditLimitExpiryDate": "2019-09-28T16:41:41.090Z", "debitCards": [{ "number": "8517", "expiryDate": "03-2019" }, { "number": "7376", "expiryDate": "07-2018" }], "startDate": "2016-02-28T16:41:41.090Z", "termUnit": "Y", "termNumber": 50, "maturityDate": "2017-02-28T16:41:41.090Z", "maturityAmount": 99.5, "autoRenewalIndicator": true, "interestPaymentFrequencyUnit": "M", "interestPaymentFrequencyNumber": 15, "interestSettlementAccount": "interestSettlementAccount1", "outstandingPrincipalAmount": 100.2, "monthlyInstalmentAmount": 100.1, "amountInArrear": 100.3, "minimumRequiredBalance": 80.4, "creditCardAccountNumber": "123456", "validThru": "2019-02-28T16:41:41.090Z", "applicableInterestRate": 101.2, "remainingCredit": 50, "outstandingPayment": 105.5, "minimumPayment": 51.1, "minimumPaymentDueDate": "2018-02-28T16:41:41.090Z", "totalInvestmentValue": 110.2, "accountHolderAddressLine1": "accountHolderAddressLine11", "accountHolderAddressLine2": "accountHolderAddressLine12", "accountHolderAddressLine3": "accountHolderAddressLine13", "accountHolderAddressLine4": "accountHolderAddressLine14", "accountHolderName": "accountHolderName_5", "creditAccount": true, "debitAccount": true, "lastUpdateDate": "2016-01-28T16:41:41.090Z" }, { "id": "7cdb2224-8926-4b4d-a99f-1c9dfbbb4611", "externalArrangementId": "72ab334c-9a5f-4864-a476-f3250d606e5e", "externalLegalEntityId": "89a382786d514262b75ab9531b749a2b", "externalProductId": "a5bf8a16-118e-4bd3-9d57-f20e23677d00", "name": "Mr J. Smith", "productKindName": "Debit Card", "productNumber": "ffdd939c-ac4a-4441-ae47-70a7259899e8", "number": "1234", "BIC": "AABAFI23", "currency": "EUR", "validThru": "2021-02-28T16:41:41.090Z", "startDate": "2017-02-28T16:41:41.090Z", "accountHolderName": "Jason Smith" }] }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }]
	
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
	
	    var plugins = (_plugins = {}, _defineProperty(_plugins, PLUGINS_ALL, []), _defineProperty(_plugins, 'getProductsummary', []), _defineProperty(_plugins, 'getProductsummaryDebitaccounts', []), _defineProperty(_plugins, 'getProductsummaryCreditaccounts', []), _defineProperty(_plugins, 'getProductsummaryArrangements', []), _defineProperty(_plugins, 'getProductsummaryConfigurationRecord', []), _defineProperty(_plugins, 'getProductsummaryContextArrangements', []), _defineProperty(_plugins, 'getProductsummaryContextArrangementsWithoutBalances', []), _plugins);
	
	    if (!plugins['getProductsummaryArrangements']) {
	      console.warn('%cThere is no "getProductsummaryArrangements" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getProductsummaryArrangements'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['getProductsummaryConfigurationRecord']) {
	      console.warn('%cThere is no "getProductsummaryConfigurationRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getProductsummaryConfigurationRecord'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['getProductsummaryContextArrangements']) {
	      console.warn('%cThere is no "getProductsummaryContextArrangements" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getProductsummaryContextArrangements'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['getProductsummaryContextArrangementsWithoutBalances']) {
	      console.warn('%cThere is no "getProductsummaryContextArrangementsWithoutBalances" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getProductsummaryContextArrangementsWithoutBalances'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['getProductsummaryContextArrangements']) {
	      console.warn('%cThere is no "getProductsummaryContextArrangements" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getProductsummaryContextArrangements'].push(function anonymous(result, args
	      /**/) {
	
	        try {
	          var query = args[0].searchTerm;
	
	          var flexFilter = function flexFilter(value) {
	            return ~value.toLowerCase().indexOf(query.toLowerCase());
	          };
	
	          var data = result.data.filter(function (item) {
	            if (['name', 'IBAN', 'alias', 'BIC', 'BBAN', 'bankBranchCode', 'productKindName', 'number'].some(function (field) {
	              return flexFilter(item[field] || '');
	            })) {
	              return item;
	            }
	          });
	
	          return Object.assign({}, result, { data: data });
	        } catch (e) {
	          return result;
	        }
	      });
	    }
	
	    if (!plugins['getProductsummaryContextArrangementsWithoutBalances']) {
	      console.warn('%cThere is no "getProductsummaryContextArrangementsWithoutBalances" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getProductsummaryContextArrangementsWithoutBalances'].push(function anonymous(result, args
	      /**/) {
	
	        try {
	          var query = args[0].searchTerm;
	
	          var flexFilter = function flexFilter(value) {
	            return ~value.toLowerCase().indexOf(query.toLowerCase());
	          };
	
	          var data = result.data.filter(function (item) {
	            if (['name', 'IBAN', 'alias', 'BIC', 'BBAN', 'bankBranchCode', 'productKindName', 'number'].some(function (field) {
	              return flexFilter(item[field] || '');
	            })) {
	              return item;
	            }
	          });
	
	          return Object.assign({}, result, { data: data });
	        } catch (e) {
	          return result;
	        }
	      });
	    }
	
	    if (!plugins['getProductsummaryArrangements']) {
	      console.warn('%cThere is no "getProductsummaryArrangements" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getProductsummaryArrangements'].push(function anonymous(result, args
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
	
	    if (!plugins['getProductsummaryConfigurationRecord']) {
	      console.warn('%cThere is no "getProductsummaryConfigurationRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getProductsummaryConfigurationRecord'].push(function anonymous(result, args
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
	
	    if (!plugins['getProductsummaryContextArrangements']) {
	      console.warn('%cThere is no "getProductsummaryContextArrangements" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getProductsummaryContextArrangements'].push(function anonymous(result, args
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
	
	    if (!plugins['getProductsummaryContextArrangementsWithoutBalances']) {
	      console.warn('%cThere is no "getProductsummaryContextArrangementsWithoutBalances" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getProductsummaryContextArrangementsWithoutBalances'].push(function anonymous(result, args
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
	
	    if (!plugins['getProductsummaryArrangements']) {
	      console.warn('%cThere is no "getProductsummaryArrangements" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getProductsummaryArrangements'].push(function (result, args) {
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
	
	    if (!plugins['getProductsummaryConfigurationRecord']) {
	      console.warn('%cThere is no "getProductsummaryConfigurationRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getProductsummaryConfigurationRecord'].push(function (result, args) {
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
	
	    if (!plugins['getProductsummaryContextArrangements']) {
	      console.warn('%cThere is no "getProductsummaryContextArrangements" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getProductsummaryContextArrangements'].push(function (result, args) {
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
	
	    if (!plugins['getProductsummaryContextArrangementsWithoutBalances']) {
	      console.warn('%cThere is no "getProductsummaryContextArrangementsWithoutBalances" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getProductsummaryContextArrangementsWithoutBalances'].push(function (result, args) {
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
	
	    if (!plugins['getProductsummaryContextArrangements']) {
	      console.warn('%cThere is no "getProductsummaryContextArrangements" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getProductsummaryContextArrangements'].push(function (collection, args) {
	        var params = args[0];
	
	        // Filter by currency for US M2M payment
	        var filtered = params.businessFunction === 'INTERNAL' ? collection.data.filter(function (item) {
	          return item.currency === 'USD';
	        }) : collection.data;
	
	        return Object.assign(collection, {
	          data: filtered
	        });
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
	
	    function getProductsummary(params, headers) {
	      var url = '' + baseUri + version + '/productsummary';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getProductsummary', 200)).then(pluginMocks('getProductsummary', [params, headers], '{version}/productsummary')).catch(handleError('getProductsummary'));
	    }
	
	    function getProductsummaryDebitaccounts(params, headers) {
	      var url = '' + baseUri + version + '/productsummary/debitaccounts';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getProductsummaryDebitaccounts', 200)).then(pluginMocks('getProductsummaryDebitaccounts', [params, headers], '{version}/productsummary/debitaccounts')).catch(handleError('getProductsummaryDebitaccounts'));
	    }
	
	    function getProductsummaryCreditaccounts(params, headers) {
	      var url = '' + baseUri + version + '/productsummary/creditaccounts';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getProductsummaryCreditaccounts', 200)).then(pluginMocks('getProductsummaryCreditaccounts', [params, headers], '{version}/productsummary/creditaccounts')).catch(handleError('getProductsummaryCreditaccounts'));
	    }
	
	    function getProductsummaryArrangements(params, headers) {
	      var url = '' + baseUri + version + '/productsummary/arrangements';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getProductsummaryArrangements', 200)).then(pluginMocks('getProductsummaryArrangements', [params, headers], '{version}/productsummary/arrangements')).catch(handleError('getProductsummaryArrangements'));
	    }
	
	    function getProductsummaryConfigurationRecord(legalEntityId, params, headers) {
	      var url = '' + baseUri + version + '/productsummary/configuration/' + legalEntityId;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getProductsummaryConfigurationRecord', 200)).then(pluginMocks('getProductsummaryConfigurationRecord', [legalEntityId, params, headers], '{version}/productsummary/configuration/{legalEntityId}')).catch(handleError('getProductsummaryConfigurationRecord'));
	    }
	
	    function getProductsummaryContextArrangements(params, headers) {
	      var url = '' + baseUri + version + '/productsummary/context/arrangements';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getProductsummaryContextArrangements', 200)).then(pluginMocks('getProductsummaryContextArrangements', [params, headers], '{version}/productsummary/context/arrangements')).catch(handleError('getProductsummaryContextArrangements'));
	    }
	
	    function getProductsummaryContextArrangementsWithoutBalances(params, headers) {
	      var url = '' + baseUri + version + '/productsummary/context/arrangements/withoutBalances';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getProductsummaryContextArrangementsWithoutBalances', 200)).then(pluginMocks('getProductsummaryContextArrangementsWithoutBalances', [params, headers], '{version}/productsummary/context/arrangements/withoutBalances')).catch(handleError('getProductsummaryContextArrangementsWithoutBalances'));
	    }
	
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
//# sourceMappingURL=mock.data-bb-product-summary-http-ng.js.map