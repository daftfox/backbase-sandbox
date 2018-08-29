(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else if(typeof define === 'function' && define.amd)
		define("mock.data-bb-payments-http-ng", ["vendor-bb-angular", "lib-bb-storage-ng"], factory);
	else if(typeof exports === 'object')
		exports["mock.data-bb-payments-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else
		root["mock.data-bb-payments-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage-ng"]);
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
	exports.paymentsDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStorageNg = __webpack_require__(3);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _dataBbPaymentsHttp = __webpack_require__(4);
	
	var _dataBbPaymentsHttp2 = _interopRequireDefault(_dataBbPaymentsHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var paymentsDataModuleKey = 'data-bb-payments-http-ng'; /* eslint-disable */
	var paymentsDataKey = exports.paymentsDataKey = 'data-bb-payments-http-ng:paymentsData';
	
	exports.default = _vendorBbAngular2.default.module(paymentsDataModuleKey, [_libBbStorageNg2.default]).provider(paymentsDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  return {
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	    $get: ['$q', _libBbStorageNg.bbStorageServiceKey, '$httpParamSerializer',
	    /* into */
	    (0, _dataBbPaymentsHttp2.default)(config)]
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
	
	    var STORAGE_KEY = 'MOCK_STATE_paymentsDataModuleKey';
	    var state = {
	      "{version}/payments": [{
	        "id": "fd18f72d-ff05-4481-9429-19963b32dc65",
	        "status": "UNAUTHORIZED",
	        "debitAccountIdentification": {
	          "counterpartyName": "Jack White",
	          "scheme": "IBAN",
	          "identification": "NL25TRIO0253844321"
	        },
	        "creditAccountIdentification": {
	          "counterpartyName": "John Smith",
	          "scheme": "ID",
	          "identification": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4691",
	          "counterpartyBIC": "ABNANL2A",
	          "counterpartyCountry": "NL",
	          "counterpartyBankName": "ABN Amro"
	        },
	        "amount": "10.29",
	        "currency": "EUR",
	        "date": "2016-05-16",
	        "paymentMode": "SINGLE",
	        "description": "Return a debt",
	        "paymentReference": "12345AB000",
	        "createdBy": "StanLee@BB-022",
	        "createdAt": "2017-02-15T09:30:10Z",
	        "urgent": false
	      }, {
	        "id": "a8a014ae-3af2-4ab7-a3ea-6e95938fbd69",
	        "status": "PARTIALLY_AUTHORIZED",
	        "debitAccountIdentification": {
	          "counterpartyName": "Jack Yellow",
	          "scheme": "IBAN",
	          "identification": "LU280019400644750000"
	        },
	        "creditAccountIdentification": {
	          "counterpartyName": "John Honson",
	          "scheme": "ID",
	          "identification": "65fac8be-dd7b-48c2-97e3-66301437448d"
	        },
	        "amount": "100.00",
	        "currency": "EUR",
	        "date": "2016-05-14",
	        "paymentMode": "SINGLE",
	        "description": "",
	        "urgent": true
	      }, {
	        "id": "e2a12438-3890-4fb0-b0a7-607d3d843a23",
	        "status": "AUTHORIZED",
	        "debitAccountIdentification": {
	          "counterpartyName": "Jack Jackson",
	          "scheme": "IBAN",
	          "identification": "MR1300020001010000123456753"
	        },
	        "creditAccountIdentification": {
	          "counterpartyName": "Tax Office",
	          "scheme": "IBAN",
	          "identification": "NL91ABNA0417164300"
	        },
	        "amount": "5000.55",
	        "currency": "EUR",
	        "date": "2015-05-14",
	        "paymentMode": "SINGLE",
	        "description": "Salary",
	        "urgent": false
	      }, {
	        "id": "0617a8bf-7746-4f70-850b-71a7b0a52011",
	        "status": "REJECTED_BY_USER",
	        "debitAccountIdentification": {
	          "counterpartyName": "Walter Fringe",
	          "scheme": "IBAN",
	          "identification": "MR1300020001010000123456753"
	        },
	        "creditAccountIdentification": {
	          "counterpartyName": "Delivery Service",
	          "scheme": "IBAN",
	          "identification": "NL91ABNA0417164300"
	        },
	        "amount": "749.99",
	        "currency": "EUR",
	        "date": "2016-04-23",
	        "paymentMode": "SINGLE",
	        "description": "Packaged item",
	        "urgent": false
	      }, {
	        "id": "1806ca8e-dfc8-4da6-b414-d7a44233a8c6",
	        "status": "AUTHORIZED",
	        "debitAccountIdentification": {
	          "counterpartyName": "Carlos Perkins",
	          "scheme": "IBAN",
	          "identification": "SK7463897688561500690656"
	        },
	        "creditAccountIdentification": {
	          "counterpartyName": "Charles Elliott",
	          "scheme": "IBAN",
	          "identification": "FR708933019952AUNHQNQ0KZ"
	        },
	        "amount": "100.00",
	        "currency": "EUR",
	        "date": "2015-05-14",
	        "paymentMode": "RECURRING",
	        "schedule": {
	          "transferFrequency": "MONTHLY",
	          "on": 1,
	          "startDate": "2015-06-01",
	          "every": 1,
	          "nextExecutionDate": "2017-04-03"
	        },
	        "description": "Parking rental",
	        "urgent": false
	      }],
	      "{version}/payments/standing-orders": [{
	        "id": "fd18f72d-ff05-4481-9429-19963b32dc65",
	        "status": "UNAUTHORIZED",
	        "debitAccountIdentification": {
	          "counterpartyName": "Jack White",
	          "scheme": "IBAN",
	          "identification": "NL25TRIO0253844321"
	        },
	        "creditAccountIdentification": {
	          "counterpartyName": "John Smith",
	          "scheme": "ID",
	          "identification": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4691"
	        },
	        "amount": "980.90",
	        "currency": "EUR",
	        "date": "2016-05-16",
	        "paymentMode": "RECURRING",
	        "schedule": {
	          "transferFrequency": "MONTHLY",
	          "on": 14,
	          "startDate": "2015-06-01",
	          "every": 1,
	          "nextExecutionDate": "2017-04-14"
	        },
	        "description": "Mortgage",
	        "urgent": false
	      }, {
	        "id": "a8a014ae-3af2-4ab7-a3ea-6e95938fbd69",
	        "status": "PARTIALLY_AUTHORIZED",
	        "debitAccountIdentification": {
	          "counterpartyName": "Jack Yellow",
	          "scheme": "IBAN",
	          "identification": "LU280019400644750000"
	        },
	        "creditAccountIdentification": {
	          "counterpartyName": "John Honson",
	          "scheme": "ID",
	          "identification": "65fac8be-dd7b-48c2-97e3-66301437448d"
	        },
	        "amount": "25.10",
	        "currency": "EUR",
	        "date": "2016-05-14",
	        "paymentMode": "RECURRING",
	        "schedule": {
	          "transferFrequency": "WEEKLY",
	          "on": 5,
	          "startDate": "2015-06-01",
	          "every": 1,
	          "nextExecutionDate": "2017-03-10"
	        },
	        "description": "",
	        "urgent": true
	      }, {
	        "id": "e2a12438-3890-4fb0-b0a7-607d3d843a23",
	        "status": "AUTHORIZED",
	        "debitAccountIdentification": {
	          "counterpartyName": "Jack Jackson",
	          "scheme": "IBAN",
	          "identification": "MR1300020001010000123456753"
	        },
	        "creditAccountIdentification": {
	          "counterpartyName": "Tax Office",
	          "scheme": "IBAN",
	          "identification": "NL91ABNA0417164300"
	        },
	        "amount": "5000.55",
	        "currency": "EUR",
	        "date": "2015-05-14",
	        "paymentMode": "RECURRING",
	        "schedule": {
	          "transferFrequency": "YEARLY",
	          "on": 6,
	          "startDate": "2015-06-01",
	          "every": 1,
	          "nextExecutionDate": "2017-06-16"
	        },
	        "description": "Yearly taxes",
	        "urgent": false
	      }, {
	        "id": "1806ca8e-dfc8-4da6-b414-d7a44233a8c6",
	        "status": "AUTHORIZED",
	        "debitAccountIdentification": {
	          "counterpartyName": "Carlos Perkins",
	          "scheme": "IBAN",
	          "identification": "SK7463897688561500690656"
	        },
	        "creditAccountIdentification": {
	          "counterpartyName": "Charles Elliott",
	          "scheme": "IBAN",
	          "identification": "FR708933019952AUNHQNQ0KZ"
	        },
	        "amount": "100.00",
	        "currency": "EUR",
	        "date": "2015-05-14",
	        "paymentMode": "RECURRING",
	        "schedule": {
	          "transferFrequency": "MONTHLY",
	          "on": 1,
	          "startDate": "2015-06-01",
	          "every": 1,
	          "nextExecutionDate": "2017-04-03"
	        },
	        "description": "Parking rental",
	        "urgent": false
	      }],
	      "{version}/payments/authorizations": [{
	        "id": "fd18f72d-ff05-4481-9429-19963b32dc65",
	        "status": "UNAUTHORIZED",
	        "debitAccountIdentification": {
	          "counterpartyName": "Jack White",
	          "scheme": "IBAN",
	          "identification": "NL25TRIO0253844321"
	        },
	        "creditAccountIdentification": {
	          "counterpartyName": "John Honson",
	          "scheme": "ID",
	          "identification": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4691"
	        },
	        "amount": "10.29",
	        "currency": "EUR",
	        "date": "2016-05-16",
	        "paymentMode": "SINGLE",
	        "description": "Return a debt"
	      }, {
	        "id": "a8a014ae-3af2-4ab7-a3ea-6e95938fbd69",
	        "status": "PARTIALLY_AUTHORIZED",
	        "debitAccountIdentification": {
	          "counterpartyName": "Jack Yellow",
	          "scheme": "IBAN",
	          "identification": "LU280019400644750000"
	        },
	        "creditAccountIdentification": {
	          "counterpartyName": "Jack Jackson",
	          "scheme": "ID",
	          "identification": "65fac8be-dd7b-48c2-97e3-66301437448d"
	        },
	        "amount": "100.00",
	        "currency": "EUR",
	        "date": "2016-05-14",
	        "paymentMode": "SINGLE",
	        "description": "",
	        "urgent": true
	      }, {
	        "id": "e2a12438-3890-4fb0-b0a7-607d3d843a23",
	        "status": "AUTHORIZED",
	        "debitAccountIdentification": {
	          "counterpartyName": "John Johnson",
	          "scheme": "IBAN",
	          "identification": "MR1300020001010000123456753"
	        },
	        "creditAccountIdentification": {
	          "counterpartyName": "Tax Office",
	          "scheme": "IBAN",
	          "identification": "NL91ABNA0417164300"
	        },
	        "amount": "5000.55",
	        "currency": "EUR",
	        "date": "2015-05-14",
	        "paymentMode": "SINGLE",
	        "description": "Salary"
	      }],
	      "{version}/payments/direct-debits": [{
	        "id": "fd18f72d-ff05-4481-9429-19963b32dc65",
	        "status": "ANNOUNCED",
	        "type": "CORE",
	        "debitAccountIdentification": {
	          "counterpartyName": "Jack White",
	          "scheme": "IBAN",
	          "identification": "NL25TRIO0253844321"
	        },
	        "creditAccountIdentification": {
	          "counterpartyName": "John Honson",
	          "scheme": "IBAN",
	          "identification": "LU280019400644750000"
	        },
	        "creditorReference": "123AB0078",
	        "mandateReference": "123AB0078",
	        "amount": "10.29",
	        "currency": "EUR",
	        "date": "2016-05-16",
	        "paymentMode": "SINGLE",
	        "description": "Return a debt"
	      }, {
	        "id": "a8a014ae-3af2-4ab7-a3ea-6e95938fbd69",
	        "status": "PROCESSED",
	        "type": "B2B",
	        "debitAccountIdentification": {
	          "counterpartyName": "Jack Yellow",
	          "scheme": "IBAN",
	          "identification": "LU280019400644750000"
	        },
	        "creditAccountIdentification": {
	          "counterpartyName": "Jack Jackson",
	          "scheme": "ID",
	          "identification": "65fac8be-dd7b-48c2-97e3-66301437448d"
	        },
	        "refundDaysCount": 56,
	        "creditorReference": "123AB0078",
	        "mandateReference": "123AB0078",
	        "amount": "100.00",
	        "currency": "EUR",
	        "date": "2016-05-14",
	        "paymentMode": "SINGLE",
	        "description": ""
	      }, {
	        "id": "e2a12438-3890-4fb0-b0a7-607d3d843a23",
	        "status": "REJECTED",
	        "type": "CORE",
	        "debitAccountIdentification": {
	          "counterpartyName": "John Johnson",
	          "scheme": "IBAN",
	          "identification": "MR1300020001010000123456753"
	        },
	        "creditAccountIdentification": {
	          "counterpartyName": "Tax Office",
	          "scheme": "IBAN",
	          "identification": "NL91ABNA0417164300"
	        },
	        "creditorReference": "123AB0078",
	        "mandateReference": "123AB0078",
	        "amount": "5000.55",
	        "currency": "EUR",
	        "date": "2015-05-14",
	        "paymentMode": "SINGLE",
	        "description": "Salary"
	      }, {
	        "id": "e2a12438-3890-4fb0-b0a7-607d3d843a23",
	        "status": "REFUNDED",
	        "type": "B2B",
	        "debitAccountIdentification": {
	          "counterpartyName": "John Johnson",
	          "scheme": "IBAN",
	          "identification": "MR1300020001010000123456753"
	        },
	        "creditAccountIdentification": {
	          "counterpartyName": "Tax Office",
	          "scheme": "IBAN",
	          "identification": "NL91ABNA0417164300"
	        },
	        "creditorReference": "123AB0078",
	        "mandateReference": "123AB0078",
	        "amount": "5000.55",
	        "currency": "EUR",
	        "date": "2015-05-14",
	        "paymentMode": "SINGLE",
	        "description": "Salary"
	      }, {
	        "id": "e2a12438-3890-4fb0-b0a7-607d3d843a23",
	        "status": "REFUSED",
	        "type": "CORE",
	        "debitAccountIdentification": {
	          "counterpartyName": "John Johnson",
	          "scheme": "IBAN",
	          "identification": "MR1300020001010000123456753"
	        },
	        "creditAccountIdentification": {
	          "counterpartyName": "Tax Office",
	          "scheme": "IBAN",
	          "identification": "NL91ABNA0417164300"
	        },
	        "creditorReference": "123AB0078",
	        "mandateReference": "123AB0078",
	        "amount": "5000.55",
	        "currency": "EUR",
	        "date": "2015-05-14",
	        "paymentMode": "SINGLE",
	        "description": "Salary"
	      }, {
	        "id": "e2a12438-3890-4fb0-b0a7-607d3d843a23",
	        "status": "REFUND_REQUESTED",
	        "type": "CORE",
	        "debitAccountIdentification": {
	          "counterpartyName": "John Johnson",
	          "scheme": "IBAN",
	          "identification": "MR1300020001010000123456753"
	        },
	        "creditAccountIdentification": {
	          "counterpartyName": "Tax Office",
	          "scheme": "IBAN",
	          "identification": "NL91ABNA0417164300"
	        },
	        "creditorReference": "123AB0078",
	        "mandateReference": "123AB0078",
	        "amount": "5000.55",
	        "currency": "EUR",
	        "date": "2015-05-14",
	        "paymentMode": "SINGLE",
	        "description": "Salary"
	      }, {
	        "id": "e2a12438-3890-4fb0-b0a7-607d3d843a23",
	        "status": "REFUSAL_REQUESTED",
	        "type": "B2B",
	        "debitAccountIdentification": {
	          "counterpartyName": "John Johnson",
	          "scheme": "IBAN",
	          "identification": "MR1300020001010000123456753"
	        },
	        "creditAccountIdentification": {
	          "counterpartyName": "Tax Office",
	          "scheme": "IBAN",
	          "identification": "NL91ABNA0417164300"
	        },
	        "creditorReference": "123AB0078",
	        "mandateReference": "123AB0078",
	        "amount": "5000.55",
	        "currency": "EUR",
	        "date": "2015-05-14",
	        "paymentMode": "SINGLE",
	        "description": "Salary"
	      }],
	      "{version}/payments/currencies": [{
	        "name": "EUR"
	      }, {
	        "name": "USD"
	      }, {
	        "name": "GBP"
	      }, {
	        "name": "ISK"
	      }, {
	        "name": "KWD"
	      }]
	    };
	
	    bbStorage.subscribe(STORAGE_KEY, function (newState) {
	      state = newState;
	    });
	
	    var persistState = function persistState(newState) {
	      bbStorage.setItem(STORAGE_KEY, newState);
	    };
	
	    var responses = {
	
	      getPayments: [{ "status": 200, "data": [{ "id": "fd18f72d-ff05-4481-9429-19963b32dc65", "status": "UNAUTHORIZED", "debitAccountIdentification": { "counterpartyName": "Jack White", "scheme": "IBAN", "identification": "NL25TRIO0253844321" }, "creditAccountIdentification": { "counterpartyName": "John Smith", "scheme": "ID", "identification": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4691", "counterpartyBIC": "ABNANL2A", "counterpartyCountry": "NL", "counterpartyBankName": "ABN Amro" }, "amount": "10.29", "currency": "EUR", "date": "2016-05-16", "paymentMode": "SINGLE", "description": "Return a debt", "paymentReference": "12345AB000", "createdBy": "StanLee@BB-022", "createdAt": "2017-02-15T09:30:10Z", "urgent": false }, { "id": "a8a014ae-3af2-4ab7-a3ea-6e95938fbd69", "status": "PARTIALLY_AUTHORIZED", "debitAccountIdentification": { "counterpartyName": "Jack Yellow", "scheme": "IBAN", "identification": "LU280019400644750000" }, "creditAccountIdentification": { "counterpartyName": "John Honson", "scheme": "ID", "identification": "65fac8be-dd7b-48c2-97e3-66301437448d" }, "amount": "100.00", "currency": "EUR", "date": "2016-05-14", "paymentMode": "SINGLE", "description": "", "urgent": true }, { "id": "e2a12438-3890-4fb0-b0a7-607d3d843a23", "status": "AUTHORIZED", "debitAccountIdentification": { "counterpartyName": "Jack Jackson", "scheme": "IBAN", "identification": "MR1300020001010000123456753" }, "creditAccountIdentification": { "counterpartyName": "Tax Office", "scheme": "IBAN", "identification": "NL91ABNA0417164300" }, "amount": "5000.55", "currency": "EUR", "date": "2015-05-14", "paymentMode": "SINGLE", "description": "Salary", "urgent": false }, { "id": "0617a8bf-7746-4f70-850b-71a7b0a52011", "status": "REJECTED_BY_USER", "debitAccountIdentification": { "counterpartyName": "Walter Fringe", "scheme": "IBAN", "identification": "MR1300020001010000123456753" }, "creditAccountIdentification": { "counterpartyName": "Delivery Service", "scheme": "IBAN", "identification": "NL91ABNA0417164300" }, "amount": "749.99", "currency": "EUR", "date": "2016-04-23", "paymentMode": "SINGLE", "description": "Packaged item", "urgent": false }, { "id": "1806ca8e-dfc8-4da6-b414-d7a44233a8c6", "status": "AUTHORIZED", "debitAccountIdentification": { "counterpartyName": "Carlos Perkins", "scheme": "IBAN", "identification": "SK7463897688561500690656" }, "creditAccountIdentification": { "counterpartyName": "Charles Elliott", "scheme": "IBAN", "identification": "FR708933019952AUNHQNQ0KZ" }, "amount": "100.00", "currency": "EUR", "date": "2015-05-14", "paymentMode": "RECURRING", "schedule": { "transferFrequency": "MONTHLY", "on": 1, "startDate": "2015-06-01", "every": 1, "nextExecutionDate": "2017-04-03" }, "description": "Parking rental", "urgent": false }] }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      postPaymentsRecord: [{ "status": 202, "data": { "id": "0955e686-d31e-4216-b3dd-5d66161d536d" } }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      getPaymentsRecord: [{ "status": 200, "data": { "id": "fd18f72d-ff05-4481-9429-19963b32dc65", "status": "UNAUTHORIZED", "debitAccountIdentification": { "counterpartyName": "Jack White", "scheme": "IBAN", "identification": "NL25TRIO0253844321" }, "creditAccountIdentification": { "counterpartyName": "John Smith", "scheme": "ID", "identification": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4691", "counterpartyBIC": "ABNANL2A", "counterpartyCountry": "NL", "counterpartyBankName": "ABN Amro" }, "amount": "10.29", "currency": "EUR", "date": "2016-05-16", "paymentMode": "SINGLE", "description": "Return a debt", "paymentReference": "12345AB000", "createdBy": "StanLee@BB-022", "createdAt": "2017-02-15T09:30:10Z", "urgent": false } }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 405, "data": null }, { "status": 500, "data": null }],
	
	      deletePaymentsRecord: [{ "status": 204, "data": null }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 405, "data": null }, { "status": 500, "data": null }],
	
	      getPaymentsStandingOrders: [{ "status": 200, "data": [{ "id": "fd18f72d-ff05-4481-9429-19963b32dc65", "status": "UNAUTHORIZED", "debitAccountIdentification": { "counterpartyName": "Jack White", "scheme": "IBAN", "identification": "NL25TRIO0253844321" }, "creditAccountIdentification": { "counterpartyName": "John Smith", "scheme": "ID", "identification": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4691" }, "amount": "980.90", "currency": "EUR", "date": "2016-05-16", "paymentMode": "RECURRING", "schedule": { "transferFrequency": "MONTHLY", "on": 14, "startDate": "2015-06-01", "every": 1, "nextExecutionDate": "2017-04-14" }, "description": "Mortgage", "urgent": false }, { "id": "a8a014ae-3af2-4ab7-a3ea-6e95938fbd69", "status": "PARTIALLY_AUTHORIZED", "debitAccountIdentification": { "counterpartyName": "Jack Yellow", "scheme": "IBAN", "identification": "LU280019400644750000" }, "creditAccountIdentification": { "counterpartyName": "John Honson", "scheme": "ID", "identification": "65fac8be-dd7b-48c2-97e3-66301437448d" }, "amount": "25.10", "currency": "EUR", "date": "2016-05-14", "paymentMode": "RECURRING", "schedule": { "transferFrequency": "WEEKLY", "on": 5, "startDate": "2015-06-01", "every": 1, "nextExecutionDate": "2017-03-10" }, "description": "", "urgent": true }, { "id": "e2a12438-3890-4fb0-b0a7-607d3d843a23", "status": "AUTHORIZED", "debitAccountIdentification": { "counterpartyName": "Jack Jackson", "scheme": "IBAN", "identification": "MR1300020001010000123456753" }, "creditAccountIdentification": { "counterpartyName": "Tax Office", "scheme": "IBAN", "identification": "NL91ABNA0417164300" }, "amount": "5000.55", "currency": "EUR", "date": "2015-05-14", "paymentMode": "RECURRING", "schedule": { "transferFrequency": "YEARLY", "on": 6, "startDate": "2015-06-01", "every": 1, "nextExecutionDate": "2017-06-16" }, "description": "Yearly taxes", "urgent": false }, { "id": "1806ca8e-dfc8-4da6-b414-d7a44233a8c6", "status": "AUTHORIZED", "debitAccountIdentification": { "counterpartyName": "Carlos Perkins", "scheme": "IBAN", "identification": "SK7463897688561500690656" }, "creditAccountIdentification": { "counterpartyName": "Charles Elliott", "scheme": "IBAN", "identification": "FR708933019952AUNHQNQ0KZ" }, "amount": "100.00", "currency": "EUR", "date": "2015-05-14", "paymentMode": "RECURRING", "schedule": { "transferFrequency": "MONTHLY", "on": 1, "startDate": "2015-06-01", "every": 1, "nextExecutionDate": "2017-04-03" }, "description": "Parking rental", "urgent": false }] }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      getPaymentsAuthorizations: [{ "status": 200, "data": [{ "id": "fd18f72d-ff05-4481-9429-19963b32dc65", "status": "UNAUTHORIZED", "debitAccountIdentification": { "counterpartyName": "Jack White", "scheme": "IBAN", "identification": "NL25TRIO0253844321" }, "creditAccountIdentification": { "counterpartyName": "John Honson", "scheme": "ID", "identification": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4691" }, "amount": "10.29", "currency": "EUR", "date": "2016-05-16", "paymentMode": "SINGLE", "description": "Return a debt" }, { "id": "a8a014ae-3af2-4ab7-a3ea-6e95938fbd69", "status": "PARTIALLY_AUTHORIZED", "debitAccountIdentification": { "counterpartyName": "Jack Yellow", "scheme": "IBAN", "identification": "LU280019400644750000" }, "creditAccountIdentification": { "counterpartyName": "Jack Jackson", "scheme": "ID", "identification": "65fac8be-dd7b-48c2-97e3-66301437448d" }, "amount": "100.00", "currency": "EUR", "date": "2016-05-14", "paymentMode": "SINGLE", "description": "", "urgent": true }, { "id": "e2a12438-3890-4fb0-b0a7-607d3d843a23", "status": "AUTHORIZED", "debitAccountIdentification": { "counterpartyName": "John Johnson", "scheme": "IBAN", "identification": "MR1300020001010000123456753" }, "creditAccountIdentification": { "counterpartyName": "Tax Office", "scheme": "IBAN", "identification": "NL91ABNA0417164300" }, "amount": "5000.55", "currency": "EUR", "date": "2015-05-14", "paymentMode": "SINGLE", "description": "Salary" }] }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      getPaymentsDirectDebits: [{ "status": 200, "data": [{ "id": "fd18f72d-ff05-4481-9429-19963b32dc65", "status": "ANNOUNCED", "type": "CORE", "debitAccountIdentification": { "counterpartyName": "Jack White", "scheme": "IBAN", "identification": "NL25TRIO0253844321" }, "creditAccountIdentification": { "counterpartyName": "John Honson", "scheme": "IBAN", "identification": "LU280019400644750000" }, "creditorReference": "123AB0078", "mandateReference": "123AB0078", "amount": "10.29", "currency": "EUR", "date": "2016-05-16", "paymentMode": "SINGLE", "description": "Return a debt" }, { "id": "a8a014ae-3af2-4ab7-a3ea-6e95938fbd69", "status": "PROCESSED", "type": "B2B", "debitAccountIdentification": { "counterpartyName": "Jack Yellow", "scheme": "IBAN", "identification": "LU280019400644750000" }, "creditAccountIdentification": { "counterpartyName": "Jack Jackson", "scheme": "ID", "identification": "65fac8be-dd7b-48c2-97e3-66301437448d" }, "refundDaysCount": 56, "creditorReference": "123AB0078", "mandateReference": "123AB0078", "amount": "100.00", "currency": "EUR", "date": "2016-05-14", "paymentMode": "SINGLE", "description": "" }, { "id": "e2a12438-3890-4fb0-b0a7-607d3d843a23", "status": "REJECTED", "type": "CORE", "debitAccountIdentification": { "counterpartyName": "John Johnson", "scheme": "IBAN", "identification": "MR1300020001010000123456753" }, "creditAccountIdentification": { "counterpartyName": "Tax Office", "scheme": "IBAN", "identification": "NL91ABNA0417164300" }, "creditorReference": "123AB0078", "mandateReference": "123AB0078", "amount": "5000.55", "currency": "EUR", "date": "2015-05-14", "paymentMode": "SINGLE", "description": "Salary" }, { "id": "e2a12438-3890-4fb0-b0a7-607d3d843a23", "status": "REFUNDED", "type": "B2B", "debitAccountIdentification": { "counterpartyName": "John Johnson", "scheme": "IBAN", "identification": "MR1300020001010000123456753" }, "creditAccountIdentification": { "counterpartyName": "Tax Office", "scheme": "IBAN", "identification": "NL91ABNA0417164300" }, "creditorReference": "123AB0078", "mandateReference": "123AB0078", "amount": "5000.55", "currency": "EUR", "date": "2015-05-14", "paymentMode": "SINGLE", "description": "Salary" }, { "id": "e2a12438-3890-4fb0-b0a7-607d3d843a23", "status": "REFUSED", "type": "CORE", "debitAccountIdentification": { "counterpartyName": "John Johnson", "scheme": "IBAN", "identification": "MR1300020001010000123456753" }, "creditAccountIdentification": { "counterpartyName": "Tax Office", "scheme": "IBAN", "identification": "NL91ABNA0417164300" }, "creditorReference": "123AB0078", "mandateReference": "123AB0078", "amount": "5000.55", "currency": "EUR", "date": "2015-05-14", "paymentMode": "SINGLE", "description": "Salary" }, { "id": "e2a12438-3890-4fb0-b0a7-607d3d843a23", "status": "REFUND_REQUESTED", "type": "CORE", "debitAccountIdentification": { "counterpartyName": "John Johnson", "scheme": "IBAN", "identification": "MR1300020001010000123456753" }, "creditAccountIdentification": { "counterpartyName": "Tax Office", "scheme": "IBAN", "identification": "NL91ABNA0417164300" }, "creditorReference": "123AB0078", "mandateReference": "123AB0078", "amount": "5000.55", "currency": "EUR", "date": "2015-05-14", "paymentMode": "SINGLE", "description": "Salary" }, { "id": "e2a12438-3890-4fb0-b0a7-607d3d843a23", "status": "REFUSAL_REQUESTED", "type": "B2B", "debitAccountIdentification": { "counterpartyName": "John Johnson", "scheme": "IBAN", "identification": "MR1300020001010000123456753" }, "creditAccountIdentification": { "counterpartyName": "Tax Office", "scheme": "IBAN", "identification": "NL91ABNA0417164300" }, "creditorReference": "123AB0078", "mandateReference": "123AB0078", "amount": "5000.55", "currency": "EUR", "date": "2015-05-14", "paymentMode": "SINGLE", "description": "Salary" }] }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      getPaymentsCurrencies: [{ "status": 200, "data": [{ "name": "EUR" }, { "name": "USD" }, { "name": "GBP" }, { "name": "ISK" }, { "name": "KWD" }] }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      getPaymentsRate: [{ "status": 200, "data": { "rate": 1.07 } }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      postPaymentsAuthorizationsRecord: [{ "status": 204, "data": null }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 405, "data": null }, { "status": 500, "data": null }],
	
	      postPaymentsRejectionsRecord: [{ "status": 204, "data": null }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 405, "data": null }, { "status": 500, "data": null }],
	
	      postPaymentsDirectDebitsRefundsRecord: [{ "status": 204, "data": null }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 405, "data": null }, { "status": 500, "data": null }],
	
	      postPaymentsDirectDebitsRefusalsRecord: [{ "status": 204, "data": null }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 405, "data": null }, { "status": 500, "data": null }]
	
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
	
	    var plugins = (_plugins = {}, _defineProperty(_plugins, PLUGINS_ALL, []), _defineProperty(_plugins, 'getPayments', []), _defineProperty(_plugins, 'postPaymentsRecord', []), _defineProperty(_plugins, 'getPaymentsRecord', []), _defineProperty(_plugins, 'deletePaymentsRecord', []), _defineProperty(_plugins, 'getPaymentsStandingOrders', []), _defineProperty(_plugins, 'getPaymentsAuthorizations', []), _defineProperty(_plugins, 'getPaymentsDirectDebits', []), _defineProperty(_plugins, 'getPaymentsCurrencies', []), _defineProperty(_plugins, 'getPaymentsRate', []), _defineProperty(_plugins, 'postPaymentsAuthorizationsRecord', []), _defineProperty(_plugins, 'postPaymentsRejectionsRecord', []), _defineProperty(_plugins, 'postPaymentsDirectDebitsRefundsRecord', []), _defineProperty(_plugins, 'postPaymentsDirectDebitsRefusalsRecord', []), _plugins);
	
	    if (!plugins['getPayments']) {
	      console.warn('%cThere is no "getPayments" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPayments'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['postPaymentsRecord']) {
	      console.warn('%cThere is no "postPaymentsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['postPaymentsRecord'].push(function (result, args, uri) {
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
	
	    if (!plugins['getPaymentsRecord']) {
	      console.warn('%cThere is no "getPaymentsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPaymentsRecord'].push(function (result, args, uri, method) {
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
	
	    if (!plugins['deletePaymentsRecord']) {
	      console.warn('%cThere is no "deletePaymentsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['deletePaymentsRecord'].push(function (result, args, uri, method) {
	        // Assuming item id to delete is the last but one argument
	        var id = args[args.length - 3];
	        // Cut off uri parameter
	        uri = uri.substring(0, uri.lastIndexOf('/'));
	
	        // Delete item from the state
	        // (state variable is available in the mock module context)
	        var index = (state[uri] || []).findIndex(function (item) {
	          return item.id === id;
	        });
	        if (index >= 0) {
	          state[uri].splice(index, 1);
	        } else {
	          // Return NOT FOUND response, if available
	          // (getResponse method is available in the mock module context)
	          return Promise.reject(getResponse(method, 404));
	        }
	
	        return result;
	      });
	    }
	
	    if (!plugins['getPaymentsStandingOrders']) {
	      console.warn('%cThere is no "getPaymentsStandingOrders" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPaymentsStandingOrders'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['getPaymentsAuthorizations']) {
	      console.warn('%cThere is no "getPaymentsAuthorizations" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPaymentsAuthorizations'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['getPaymentsDirectDebits']) {
	      console.warn('%cThere is no "getPaymentsDirectDebits" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPaymentsDirectDebits'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['getPaymentsCurrencies']) {
	      console.warn('%cThere is no "getPaymentsCurrencies" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPaymentsCurrencies'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['getPayments']) {
	      console.warn('%cThere is no "getPayments" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPayments'].push(function anonymous(result, args
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
	
	    if (!plugins['getPaymentsStandingOrders']) {
	      console.warn('%cThere is no "getPaymentsStandingOrders" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPaymentsStandingOrders'].push(function anonymous(result, args
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
	
	    if (!plugins['getPaymentsAuthorizations']) {
	      console.warn('%cThere is no "getPaymentsAuthorizations" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPaymentsAuthorizations'].push(function anonymous(result, args
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
	
	    if (!plugins['getPaymentsDirectDebits']) {
	      console.warn('%cThere is no "getPaymentsDirectDebits" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPaymentsDirectDebits'].push(function anonymous(result, args
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
	
	    if (!plugins['getPayments']) {
	      console.warn('%cThere is no "getPayments" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPayments'].push(function (result, args) {
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
	
	    if (!plugins['getPaymentsStandingOrders']) {
	      console.warn('%cThere is no "getPaymentsStandingOrders" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPaymentsStandingOrders'].push(function (result, args) {
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
	
	    if (!plugins['getPaymentsAuthorizations']) {
	      console.warn('%cThere is no "getPaymentsAuthorizations" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPaymentsAuthorizations'].push(function (result, args) {
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
	
	    if (!plugins['getPaymentsDirectDebits']) {
	      console.warn('%cThere is no "getPaymentsDirectDebits" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPaymentsDirectDebits'].push(function (result, args) {
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
	
	    function getPayments(params, headers) {
	      var url = '' + baseUri + version + '/payments';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getPayments', 200)).then(pluginMocks('getPayments', [params, headers], '{version}/payments')).catch(handleError('getPayments'));
	    }
	
	    function postPaymentsRecord(data, headers) {
	      var url = '' + baseUri + version + '/payments';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postPaymentsRecord', 202)).then(pluginMocks('postPaymentsRecord', [data, headers], '{version}/payments')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postPaymentsRecord'));
	    }
	
	    function getPaymentsRecord(paymentId, params, headers) {
	      var url = '' + baseUri + version + '/payments/' + paymentId;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getPaymentsRecord', 200)).then(pluginMocks('getPaymentsRecord', [paymentId, params, headers], '{version}/payments/{paymentId}')).catch(handleError('getPaymentsRecord'));
	    }
	
	    function deletePaymentsRecord(paymentId, params, headers) {
	      var url = '' + baseUri + version + '/payments/' + paymentId;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deletePaymentsRecord', 204)).then(pluginMocks('deletePaymentsRecord', [paymentId, params, headers], '{version}/payments/{paymentId}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deletePaymentsRecord'));
	    }
	
	    function getPaymentsStandingOrders(params, headers) {
	      var url = '' + baseUri + version + '/payments/standing-orders';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getPaymentsStandingOrders', 200)).then(pluginMocks('getPaymentsStandingOrders', [params, headers], '{version}/payments/standing-orders')).catch(handleError('getPaymentsStandingOrders'));
	    }
	
	    function getPaymentsAuthorizations(params, headers) {
	      var url = '' + baseUri + version + '/payments/authorizations';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getPaymentsAuthorizations', 200)).then(pluginMocks('getPaymentsAuthorizations', [params, headers], '{version}/payments/authorizations')).catch(handleError('getPaymentsAuthorizations'));
	    }
	
	    function getPaymentsDirectDebits(params, headers) {
	      var url = '' + baseUri + version + '/payments/direct-debits';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getPaymentsDirectDebits', 200)).then(pluginMocks('getPaymentsDirectDebits', [params, headers], '{version}/payments/direct-debits')).catch(handleError('getPaymentsDirectDebits'));
	    }
	
	    function getPaymentsCurrencies(params, headers) {
	      var url = '' + baseUri + version + '/payments/currencies';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getPaymentsCurrencies', 200)).then(pluginMocks('getPaymentsCurrencies', [params, headers], '{version}/payments/currencies')).catch(handleError('getPaymentsCurrencies'));
	    }
	
	    function getPaymentsRate(params, headers) {
	      var url = '' + baseUri + version + '/payments/rate';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getPaymentsRate', 200)).then(pluginMocks('getPaymentsRate', [params, headers], '{version}/payments/rate')).catch(handleError('getPaymentsRate'));
	    }
	
	    function postPaymentsAuthorizationsRecord(paymentId, data, headers) {
	      var url = '' + baseUri + version + '/payments/authorizations/' + paymentId;
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postPaymentsAuthorizationsRecord', 204)).then(pluginMocks('postPaymentsAuthorizationsRecord', [paymentId, data, headers], '{version}/payments/authorizations/{paymentId}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postPaymentsAuthorizationsRecord'));
	    }
	
	    function postPaymentsRejectionsRecord(paymentId, data, headers) {
	      var url = '' + baseUri + version + '/payments/rejections/' + paymentId;
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postPaymentsRejectionsRecord', 204)).then(pluginMocks('postPaymentsRejectionsRecord', [paymentId, data, headers], '{version}/payments/rejections/{paymentId}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postPaymentsRejectionsRecord'));
	    }
	
	    function postPaymentsDirectDebitsRefundsRecord(directDebitId, data, headers) {
	      var url = '' + baseUri + version + '/payments/direct-debits/' + directDebitId + '/refunds';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postPaymentsDirectDebitsRefundsRecord', 204)).then(pluginMocks('postPaymentsDirectDebitsRefundsRecord', [directDebitId, data, headers], '{version}/payments/direct-debits/{directDebitId}/refunds')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postPaymentsDirectDebitsRefundsRecord'));
	    }
	
	    function postPaymentsDirectDebitsRefusalsRecord(directDebitId, data, headers) {
	      var url = '' + baseUri + version + '/payments/direct-debits/' + directDebitId + '/refusals';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postPaymentsDirectDebitsRefusalsRecord', 204)).then(pluginMocks('postPaymentsDirectDebitsRefusalsRecord', [directDebitId, data, headers], '{version}/payments/direct-debits/{directDebitId}/refusals')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postPaymentsDirectDebitsRefusalsRecord'));
	    }
	
	    schemas.postPaymentsRecord = { "properties": { "debitAccountIdentification": { "type": "object", "properties": { "counterpartyName": { "type": "string", "maxLength": 256, "required": true }, "scheme": { "type": "string", "enum": ["BBAN", "IBAN", "ID"], "required": true }, "identification": { "type": "string", "required": true }, "counterpartyBIC": { "type": "string", "pattern": "[A-Z]{6,6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3,3}){0,1}", "required": false }, "counterpartyCountry": { "type": "string", "minLength": 2, "maxLength": 2, "required": false }, "counterpartyBankName": { "type": "string", "maxLength": 256, "required": false } }, "required": false }, "creditAccountIdentification": { "type": "object", "properties": { "counterpartyName": { "type": "string", "maxLength": 256, "required": true }, "scheme": { "type": "string", "enum": ["BBAN", "IBAN", "ID"], "required": true }, "identification": { "type": "string", "required": true }, "counterpartyBIC": { "type": "string", "pattern": "[A-Z]{6,6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3,3}){0,1}", "required": false }, "counterpartyCountry": { "type": "string", "minLength": 2, "maxLength": 2, "required": false }, "counterpartyBankName": { "type": "string", "maxLength": 256, "required": false } }, "required": false }, "amount": { "type": "string", "required": true }, "currency": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true }, "paymentMode": { "type": "string", "enum": ["SINGLE", "RECURRING"], "default": "SINGLE", "required": true }, "date": { "type": "string", "format": "date", "required": false }, "schedule": { "type": "object", "properties": { "nonWorkingDayExecutionStrategy": { "type": "string", "enum": ["BEFORE", "AFTER", "NONE"], "required": false }, "transferFrequency": { "type": "string", "enum": ["ONCE", "DAILY", "WEEKLY", "MONTHLY", "QUARTERLY", "YEARLY"], "required": true }, "on": { "type": "integer", "required": true }, "startDate": { "type": "string", "format": "date", "required": true }, "endDate": { "type": "string", "format": "date", "required": false }, "repeat": { "type": "integer", "required": false }, "every": { "type": "integer", "enum": [1, 2], "required": true }, "nextExecutionDate": { "type": "string", "format": "date", "required": false } }, "required": false }, "description": { "type": "string", "maxLength": 256, "required": false }, "urgent": { "type": "boolean", "required": false }, "paymentReference": { "type": "string", "maxLength": 256, "required": false }, "createdBy": { "type": "string", "maxLength": 256, "required": false }, "createdAt": { "type": "string", "format": "date-time", "required": false } } };
	
	    return {
	
	      getPayments: getPayments,
	
	      postPaymentsRecord: postPaymentsRecord,
	
	      getPaymentsRecord: getPaymentsRecord,
	
	      deletePaymentsRecord: deletePaymentsRecord,
	
	      getPaymentsStandingOrders: getPaymentsStandingOrders,
	
	      getPaymentsAuthorizations: getPaymentsAuthorizations,
	
	      getPaymentsDirectDebits: getPaymentsDirectDebits,
	
	      getPaymentsCurrencies: getPaymentsCurrencies,
	
	      getPaymentsRate: getPaymentsRate,
	
	      postPaymentsAuthorizationsRecord: postPaymentsAuthorizationsRecord,
	
	      postPaymentsRejectionsRecord: postPaymentsRejectionsRecord,
	
	      postPaymentsDirectDebitsRefundsRecord: postPaymentsDirectDebitsRefundsRecord,
	
	      postPaymentsDirectDebitsRefusalsRecord: postPaymentsDirectDebitsRefusalsRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=mock.data-bb-payments-http-ng.js.map