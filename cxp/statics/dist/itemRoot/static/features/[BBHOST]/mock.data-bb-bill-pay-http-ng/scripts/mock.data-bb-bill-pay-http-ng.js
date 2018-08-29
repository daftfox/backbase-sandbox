(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else if(typeof define === 'function' && define.amd)
		define("mock.data-bb-bill-pay-http-ng", ["vendor-bb-angular", "lib-bb-storage-ng"], factory);
	else if(typeof exports === 'object')
		exports["mock.data-bb-bill-pay-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else
		root["mock.data-bb-bill-pay-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage-ng"]);
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
	exports.billPayDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStorageNg = __webpack_require__(3);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _dataBbBillPayHttp = __webpack_require__(4);
	
	var _dataBbBillPayHttp2 = _interopRequireDefault(_dataBbBillPayHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var billPayDataModuleKey = 'data-bb-bill-pay-http-ng'; /* eslint-disable */
	var billPayDataKey = exports.billPayDataKey = 'data-bb-bill-pay-http-ng:billPayData';
	
	exports.default = _vendorBbAngular2.default.module(billPayDataModuleKey, [_libBbStorageNg2.default]).provider(billPayDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  return {
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	    $get: ['$q', _libBbStorageNg.bbStorageServiceKey, '$httpParamSerializer',
	    /* into */
	    (0, _dataBbBillPayHttp2.default)(config)]
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
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/* eslint-disable */
	exports.default = function (conf) {
	  return function (Promise, bbStorage, serializeParams) {
	    var _plugins;
	
	    // Base param constants
	    var baseUri = conf.baseUri || '';
	
	    var version = 'v2';
	
	    var schemas = {};
	
	    var STORAGE_KEY = 'MOCK_STATE_billPayDataModuleKey';
	    var state = {};
	
	    bbStorage.subscribe(STORAGE_KEY, function (newState) {
	      state = newState;
	    });
	
	    var persistState = function persistState(newState) {
	      bbStorage.setItem(STORAGE_KEY, newState);
	    };
	
	    var responses = {
	
	      getBillPayPayments: [{ "status": 200, "data": { "payments": [{ "id": "8a9483495f058d2f015f058d366b0045", "payeeName": "Soccer Shots", "payeeNickName": "Kids Soccer", "paymentAmount": 10.99, "paymentDate": "2017-02-21T00:00:00.000-04:00", "paymentAccountNumber": "11111111", "paymentAccountNickName": "Current Account", "recurring": false, "status": "PENDING", "paymentFee": 9.99 }, { "id": "8a9483495f058d2f015f058d366a003c", "payeeName": "Gas Bill", "payeeAccountNumber": "100000001", "paymentAmount": 100.99, "paymentDate": "2017-02-22T00:00:00.000-04:00", "paymentAccountNumber": "22222222", "recurring": true, "frequency": "MONTHLY", "numberOfInstances": 2, "paymentScheduledAlert": true, "paymentSentAlert": true, "modelExpirationAlert": true, "status": "FAILED" }], "totalCount": 2 } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }, { "status": 501, "data": { "message": "Operation not supported" } }],
	
	      postBillPayPaymentsRecord: [{ "status": 201, "data": { "payments": [{ "payeeID": "payee1", "paymentID": "payment1", "errors": [] }, { "payeeID": "payee2", "paymentID": "payment2", "errors": [] }, { "payeeID": "payee3", "errors": [{ "message": "Invalid next payment date", "key": "billpay.api.invalidNextPaymentDate" }, { "message": "Payment already exists", "key": "billpay.api.paymentAlreadyExists" }] }, { "payeeID": "payee4", "paymentID": "payment4", "errors": [] }] } }, { "status": 400, "data": { "message": "Bad Request", "errors": [], "payments": [{ "payeeID": "1", "errors": [{ "message": "The payee is invalid", "key": "billpay.api.invalidPayee" }] }, { "payeeID": "2", "errors": [{ "message": "The payee is invalid", "key": "billpay.api.invalidPayee" }] }] } }, { "status": 500, "data": { "message": "Description of error" } }, { "status": 501, "data": { "message": "Operation not supported" } }],
	
	      getBillPayAccounts: [{ "status": 200, "data": { "accounts": [{ "accountNumber": "000000001", "accountNickName": "Joint Account", "accountType": "CHECKING_ACCOUNT", "routingNumber": "000000011", "balance": 1000.01 }, { "accountNumber": "000000002", "accountType": "SAVINGS_ACCOUNT", "routingNumber": "000000022" }, { "accountNumber": "000000003", "accountType": "CHECKING_ACCOUNT", "routingNumber": "000000033", "balance": 1000.03 }] } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }, { "status": 501, "data": { "message": "Operation not supported" } }],
	
	      getBillPayPayeesSearch: [{ "status": 200, "data": { "payees": [{ "merchantID": "10000001", "name": "Backbase UK", "zipRequired": true }, { "merchantID": "10000002", "name": "Backbase AMS", "zipRequired": false }, { "merchantID": "10000003", "name": "Backbase US", "zipRequired": false }, { "merchantID": "10000004", "name": "adventescent", "zipRequired": false }, { "merchantID": "10000005", "name": "animadvent", "zipRequired": false }, { "merchantID": "10000006", "name": "circumadvent", "zipRequired": false }, { "merchantID": "10000007", "name": "syadvent", "zipRequired": true }, { "merchantID": "10000008", "name": "maladvent", "zipRequired": false }, { "merchantID": "10000009", "name": "sucadvent", "zipRequired": false }, { "merchantID": "10000010", "name": "sysadvent", "zipRequired": false }, { "merchantID": "10000011", "name": "adventacious", "zipRequired": true }, { "merchantID": "10000012", "name": "adventack", "zipRequired": false }, { "merchantID": "10000013", "name": "belladvent", "zipRequired": false }, { "merchantID": "10000014", "name": "coradvent", "zipRequired": false }, { "merchantID": "10000015", "name": "polyadvent", "zipRequired": true }, { "merchantID": "10000016", "name": "adventous", "zipRequired": false }, { "merchantID": "10000017", "name": "adventant", "zipRequired": true }, { "merchantID": "10000018", "name": "vivadvent", "zipRequired": false }, { "merchantID": "10000019", "name": "foradvent", "zipRequired": true }, { "merchantID": "10000020", "name": "inadvent", "zipRequired": false }, { "merchantID": "10000021", "name": "bovadvent", "zipRequired": false }, { "merchantID": "10000022", "name": "adventize", "zipRequired": false }, { "merchantID": "10000023", "name": "postadvent", "zipRequired": true }, { "merchantID": "10000024", "name": "lunadvent", "zipRequired": false }, { "merchantID": "10000025", "name": "amadvent", "zipRequired": true }, { "merchantID": "10000026", "name": "symadvent", "zipRequired": false }, { "merchantID": "10000027", "name": "advental", "zipRequired": false }, { "merchantID": "10000028", "name": "adventic", "zipRequired": true }, { "merchantID": "10000029", "name": "lupadvent", "zipRequired": false }, { "merchantID": "10000030", "name": "sufadvent", "zipRequired": false }, { "merchantID": "10000031", "name": "adventari", "zipRequired": true }, { "merchantID": "10000032", "name": "adventism", "zipRequired": true }, { "merchantID": "10000033", "name": "comadvent", "zipRequired": false }, { "merchantID": "10000034", "name": "laudadvent", "zipRequired": false }, { "merchantID": "10000035", "name": "adventose", "zipRequired": true }, { "merchantID": "10000036", "name": "enadvent", "zipRequired": true }, { "merchantID": "10000037", "name": "misadvent", "zipRequired": true }, { "merchantID": "10000038", "name": "portadvent", "zipRequired": true }, { "merchantID": "10000039", "name": "adventor", "zipRequired": true }, { "merchantID": "10000040", "name": "venadvent", "zipRequired": false }, { "merchantID": "10000041", "name": "tenadvent", "zipRequired": false }, { "merchantID": "10000042", "name": "adventation", "zipRequired": false }, { "merchantID": "10000043", "name": "adventicious", "zipRequired": true }, { "merchantID": "10000044", "name": "adventill", "zipRequired": true }, { "merchantID": "10000045", "name": "fortadvent", "zipRequired": true }, { "merchantID": "10000046", "name": "adventil", "zipRequired": true }, { "merchantID": "10000047", "name": "rhyadvent", "zipRequired": false }, { "merchantID": "10000048", "name": "aceradvent", "zipRequired": true }, { "merchantID": "10000049", "name": "difadvent", "zipRequired": false }, { "merchantID": "10000050", "name": "adventand", "zipRequired": false }, { "merchantID": "10000051", "name": "adventible", "zipRequired": false }, { "merchantID": "10000052", "name": "peradvent", "zipRequired": false }, { "merchantID": "10000053", "name": "interadvent", "zipRequired": true }, { "merchantID": "10000054", "name": "podadvent", "zipRequired": true }, { "merchantID": "10000055", "name": "adventend", "zipRequired": true }, { "merchantID": "10000056", "name": "maradvent", "zipRequired": false }, { "merchantID": "10000057", "name": "uberadvent", "zipRequired": false }, { "merchantID": "10000058", "name": "movadvent", "zipRequired": true }, { "merchantID": "10000059", "name": "adventile", "zipRequired": true }, { "merchantID": "10000060", "name": "exadvent", "zipRequired": false }, { "merchantID": "10000061", "name": "frontadvent", "zipRequired": false }, { "merchantID": "10000062", "name": "pedadvent", "zipRequired": false }, { "merchantID": "10000063", "name": "outadvent", "zipRequired": false }, { "merchantID": "10000064", "name": "myadvent", "zipRequired": true }, { "merchantID": "10000065", "name": "finadvent", "zipRequired": true }, { "merchantID": "10000066", "name": "adventac", "zipRequired": false }, { "merchantID": "10000067", "name": "adventaid", "zipRequired": true }, { "merchantID": "10000068", "name": "dominadvent", "zipRequired": false }, { "merchantID": "10000069", "name": "transadvent", "zipRequired": false }, { "merchantID": "10000070", "name": "suradvent", "zipRequired": false }, { "merchantID": "10000071", "name": "sumadvent", "zipRequired": false }, { "merchantID": "10000072", "name": "adventive", "zipRequired": false }, { "merchantID": "10000073", "name": "feladvent", "zipRequired": false }, { "merchantID": "10000074", "name": "adventa", "zipRequired": false }, { "merchantID": "10000075", "name": "domadvent", "zipRequired": false }, { "merchantID": "10000076", "name": "anadvent", "zipRequired": true }, { "merchantID": "10000077", "name": "adventoid", "zipRequired": true }, { "merchantID": "10000078", "name": "hyperadvent", "zipRequired": false }, { "merchantID": "10000079", "name": "adventore", "zipRequired": true }, { "merchantID": "10000080", "name": "adventate", "zipRequired": false }, { "merchantID": "10000081", "name": "adventosis", "zipRequired": true }, { "merchantID": "10000082", "name": "albadvent", "zipRequired": false }, { "merchantID": "10000083", "name": "synadvent", "zipRequired": true }, { "merchantID": "10000084", "name": "canadvent", "zipRequired": false }, { "merchantID": "10000085", "name": "supadvent", "zipRequired": false }, { "merchantID": "10000086", "name": "midadvent", "zipRequired": false }, { "merchantID": "10000087", "name": "esadvent", "zipRequired": true }, { "merchantID": "10000088", "name": "skyadvent", "zipRequired": true }, { "merchantID": "10000089", "name": "susadvent", "zipRequired": false }, { "merchantID": "10000090", "name": "archadvent", "zipRequired": false }, { "merchantID": "10000091", "name": "locadvent", "zipRequired": false }, { "merchantID": "10000092", "name": "insuladvent", "zipRequired": true }, { "merchantID": "10000093", "name": "sugadvent", "zipRequired": true }, { "merchantID": "10000094", "name": "capadvent", "zipRequired": false }, { "merchantID": "10000095", "name": "falcadvent", "zipRequired": false }, { "merchantID": "10000096", "name": "monadvent", "zipRequired": false }, { "merchantID": "10000097", "name": "syladvent", "zipRequired": true }, { "merchantID": "10000098", "name": "conadvent", "zipRequired": false }, { "merchantID": "10000099", "name": "cisadvent", "zipRequired": false }, { "merchantID": "10000100", "name": "kayadvent", "zipRequired": true }, { "merchantID": "20000001", "name": "cedadvent", "zipRequired": false }, { "merchantID": "20000002", "name": "veradvent", "zipRequired": false }, { "merchantID": "20000003", "name": "cervadvent", "zipRequired": false }, { "merchantID": "20000004", "name": "audadvent", "zipRequired": false }, { "merchantID": "20000005", "name": "coladvent", "zipRequired": false }, { "merchantID": "20000006", "name": "vertadvent", "zipRequired": false }, { "merchantID": "20000007", "name": "adventashun", "zipRequired": true }, { "merchantID": "20000008", "name": "suradvent", "zipRequired": true }, { "merchantID": "20000009", "name": "subadvent", "zipRequired": false }, { "merchantID": "20000010", "name": "superadvent", "zipRequired": true }, { "merchantID": "20000011", "name": "doladvent", "zipRequired": true }, { "merchantID": "20000012", "name": "nonadvent", "zipRequired": true }, { "merchantID": "20000013", "name": "garadvent", "zipRequired": true }, { "merchantID": "20000014", "name": "adventalt", "zipRequired": true }, { "merchantID": "20000015", "name": "premadvent", "zipRequired": true }, { "merchantID": "20000016", "name": "adventity", "zipRequired": true }, { "merchantID": "20000017", "name": "bonadvent", "zipRequired": true }, { "merchantID": "20000018", "name": "adventise", "zipRequired": true }, { "merchantID": "20000019", "name": "genadvent", "zipRequired": false }, { "merchantID": "20000019", "name": "adventist", "zipRequired": false }, { "merchantID": "20000020", "name": "adventable", "zipRequired": false }, { "merchantID": "20000021", "name": "auradvent", "zipRequired": false }, { "merchantID": "20000022", "name": "adventent", "zipRequired": false }, { "merchantID": "20000023", "name": "disadvent", "zipRequired": false }, { "merchantID": "20000024", "name": "panadvent", "zipRequired": false }, { "merchantID": "20000025", "name": "adventer", "zipRequired": false }, { "merchantID": "20000026", "name": "calcadvent", "zipRequired": true }, { "merchantID": "20000027", "name": "unadvent", "zipRequired": false }, { "merchantID": "20000028", "name": "adventall", "zipRequired": false }] } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }, { "status": 501, "data": { "message": "Operation not supported" } }],
	
	      postBillPayPayeesRecord: [{ "status": 201, "data": { "id": "0955e686-d31e-4216-b3dd-5d66161d536d" } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }, { "status": 501, "data": { "message": "Operation not supported" } }],
	
	      getBillPayPayeesSummary: [{ "status": 200, "data": { "payeeSummaries": [{ "id": "0001", "name": "Citibank", "nickName": "My Bank", "electronic": true, "nextPayment": { "paymentAmount": 100.99, "paymentDate": "2017-02-22T00:00:00.000-04:00", "recurring": true, "paymentFee": 9.99 }, "paymentServices": [{ "cutoffTime": "2015-09-21T15:00:00.000-04:00", "earliestPaymentDate": "2015-09-22T00:00:00.000-04:00", "nextPaymentDate": "2015-09-23T00:00:00.000-04:00", "paymentServiceType": "EXPEDITED_PAYMENT", "deliveryDays": 3, "paymentFee": 9.99 }, { "cutoffTime": "2015-09-22T15:00:00.000-04:00", "earliestPaymentDate": "2015-09-23T00:00:00.000-04:00", "nextPaymentDate": "2015-09-24T00:00:00.000-04:00", "paymentServiceType": "REGULAR_PAYMENT" }], "ebill": { "capable": true, "enabled": true, "latestBill": { "paymentAmount": 100.99, "paymentDate": "2017-02-22T00:00:00.000-04:00", "url": "http://my.ebill.pdf" } }, "overnightDeliveryAddress": { "state": "FL", "city": "Saint Petersburg", "address1": "560 Carillon Parkway", "postalCode": "33717" } }, { "id": "0002", "name": "Electric Company", "electronic": true, "nextPayment": { "paymentAmount": 101.99, "paymentDate": "2017-02-23T00:00:00.000-04:00", "recurring": false }, "paymentServices": [{ "cutoffTime": "2015-09-22T15:00:00.000-04:00", "earliestPaymentDate": "2015-09-23T00:00:00.000-04:00", "nextPaymentDate": "2015-09-24T00:00:00.000-04:00", "paymentServiceType": "REGULAR_PAYMENT" }], "ebill": { "capable": true, "enabled": true } }, { "id": "0003", "name": "John Doe", "electronic": false, "paymentServices": [{ "cutoffTime": "2015-09-22T15:00:00.000-04:00", "earliestPaymentDate": "2015-09-23T00:00:00.000-04:00", "nextPaymentDate": "2015-09-24T00:00:00.000-04:00", "paymentServiceType": "REGULAR_PAYMENT" }] }, { "id": "0955e686-d31e-4216-b3dd-5d66161d536d", "name": "Gas Company", "electronic": true, "nextPayment": { "paymentAmount": 20.99, "paymentDate": "2017-02-25T00:00:00.000-04:00", "recurring": false }, "paymentServices": [{ "cutoffTime": "2015-09-21T15:00:00.000-04:00", "earliestPaymentDate": "2015-09-22T00:00:00.000-04:00", "nextPaymentDate": "2015-09-23T00:00:00.000-04:00", "paymentServiceType": "EXPEDITED_PAYMENT", "deliveryDays": 3, "paymentFee": 0 }, { "cutoffTime": "2015-09-22T15:00:00.000-04:00", "earliestPaymentDate": "2015-09-23T00:00:00.000-04:00", "nextPaymentDate": "2015-09-24T00:00:00.000-04:00", "paymentServiceType": "REGULAR_PAYMENT" }], "ebill": { "capable": true, "enabled": true } }, { "id": "0004", "name": "Water Company", "electronic": true, "nextPayment": { "paymentAmount": 2001.89, "paymentDate": "2017-02-23T00:00:00.000-04:00", "recurring": false }, "paymentServices": [{ "cutoffTime": "2015-09-22T15:00:00.000-04:00", "earliestPaymentDate": "2015-09-23T00:00:00.000-04:00", "nextPaymentDate": "2015-09-24T00:00:00.000-04:00", "paymentServiceType": "OVERNIGHT_CHECK", "deliveryDays": 3, "paymentFee": 9.99 }, { "cutoffTime": "2015-09-22T15:00:00.000-04:00", "earliestPaymentDate": "2015-09-23T00:00:00.000-04:00", "nextPaymentDate": "2015-09-24T00:00:00.000-04:00", "paymentServiceType": "REGULAR_PAYMENT" }], "ebill": { "capable": true, "enabled": false } }, { "id": "0005", "name": "Phone Company", "electronic": true, "nextPayment": { "paymentAmount": 45.23, "paymentDate": "2017-02-23T00:00:00.000-04:00", "recurring": false }, "paymentServices": [{ "cutoffTime": "2015-09-22T15:00:00.000-04:00", "earliestPaymentDate": "2015-09-23T00:00:00.000-04:00", "nextPaymentDate": "2015-09-25T00:00:00.000-04:00", "paymentServiceType": "OVERNIGHT_CHECK", "deliveryDays": 3, "paymentFee": 9.99 }, { "cutoffTime": "2015-09-25T15:00:00.000-04:00", "earliestPaymentDate": "2015-09-26T00:00:00.000-04:00", "nextPaymentDate": "2015-09-27T00:00:00.000-04:00", "paymentServiceType": "REGULAR_PAYMENT" }], "ebill": { "capable": true, "enabled": false } }] } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }, { "status": 501, "data": { "message": "Operation not supported" } }],
	
	      getBillPayEnrolment: [{ "status": 200, "data": { "enrolment": { "enrolled": true } } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }, { "status": 501, "data": { "message": "Operation not supported" } }],
	
	      postBillPayEnrolmentRecord: [{ "status": 204, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }, { "status": 501, "data": { "message": "Operation not supported" } }],
	
	      getBillPayPaymentsRecord: [{ "status": 200, "data": { "payment": { "id": "8a9483495f058d2f015f058d366a003c", "payeeName": "Citibank", "payeeAccountNumber": "100000001", "paymentAmount": 100.99, "paymentDate": "2017-02-22T00:00:00.000-04:00", "paymentAccountNumber": "000000001", "recurring": false, "status": "PENDING", "paymentFee": 9.99 } } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": { "message": "Resource not found.", "errors": [{ "message": "Unable to find the resource requested resource: {resource}.", "key": "common.api.resource", "context": { "resource": "aResource" } }] } }, { "status": 500, "data": { "message": "Description of error" } }, { "status": 501, "data": { "message": "Operation not supported" } }],
	
	      putBillPayPaymentsRecord: [{ "status": 200, "data": { "id": "0955e686-d31e-4216-b3dd-5d66161d536d" } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": { "message": "Resource not found.", "errors": [{ "message": "Unable to find the resource requested resource: {resource}.", "key": "common.api.resource", "context": { "resource": "aResource" } }] } }, { "status": 500, "data": { "message": "Description of error" } }, { "status": 501, "data": { "message": "Operation not supported" } }],
	
	      deleteBillPayPaymentsRecord: [{ "status": 204, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": { "message": "Resource not found.", "errors": [{ "message": "Unable to find the resource requested resource: {resource}.", "key": "common.api.resource", "context": { "resource": "aResource" } }] } }, { "status": 500, "data": { "message": "Description of error" } }, { "status": 501, "data": { "message": "Operation not supported" } }],
	
	      postBillPayPaymentsRecurringRecord: [{ "status": 201, "data": { "id": "0955e686-d31e-4216-b3dd-5d66161d536d" } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }, { "status": 501, "data": { "message": "Operation not supported" } }],
	
	      getBillPayPaymentsRecurringRecord: [{ "status": 200, "data": { "payment": { "id": "8a9483495f058d2f015f058d366a003c", "payeeName": "Citibank", "payeeAccountNumber": "100000001", "paymentAmount": 100.99, "paymentDate": "2017-02-22T00:00:00.000-04:00", "paymentAccountNumber": "000000001", "recurring": true, "frequency": "MONTHLY", "numberOfInstances": 2, "paymentScheduledAlert": true, "paymentSentAlert": true, "modelExpirationAlert": true, "status": "PENDING" } } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": { "message": "Resource not found.", "errors": [{ "message": "Unable to find the resource requested resource: {resource}.", "key": "common.api.resource", "context": { "resource": "aResource" } }] } }, { "status": 500, "data": { "message": "Description of error" } }, { "status": 501, "data": { "message": "Operation not supported" } }],
	
	      deleteBillPayPaymentsRecurringRecord: [{ "status": 204, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": { "message": "Resource not found.", "errors": [{ "message": "Unable to find the resource requested resource: {resource}.", "key": "common.api.resource", "context": { "resource": "aResource" } }] } }, { "status": 500, "data": { "message": "Description of error" } }, { "status": 501, "data": { "message": "Operation not supported" } }],
	
	      putBillPayPaymentsRecurringRecord: [{ "status": 200, "data": { "id": "0955e686-d31e-4216-b3dd-5d66161d536d" } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": { "message": "Resource not found.", "errors": [{ "message": "Unable to find the resource requested resource: {resource}.", "key": "common.api.resource", "context": { "resource": "aResource" } }] } }, { "status": 500, "data": { "message": "Description of error" } }, { "status": 501, "data": { "message": "Operation not supported" } }],
	
	      getBillPayPayeesRecord: [{ "status": 200, "data": { "payee": { "id": "1", "name": "Backbase", "phoneNumber": "1234567890", "address": { "state": "SD", "city": "SIOUX FALLS", "address1": "PO BOX 6001", "postalCode": "12345" }, "overnightDeliveryAddress": { "state": "FL", "city": "Saint Petersburg", "address1": "560 Carillon Parkway", "postalCode": "33717" } } } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": { "message": "Resource not found.", "errors": [{ "message": "Unable to find the resource requested resource: {resource}.", "key": "common.api.resource", "context": { "resource": "aResource" } }] } }, { "status": 500, "data": { "message": "Description of error" } }, { "status": 501, "data": { "message": "Operation not supported" } }],
	
	      putBillPayPayeesRecord: [{ "status": 200, "data": { "id": "0955e686-d31e-4216-b3dd-5d66161d536d" } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": { "message": "Resource not found.", "errors": [{ "message": "Unable to find the resource requested resource: {resource}.", "key": "common.api.resource", "context": { "resource": "aResource" } }] } }, { "status": 500, "data": { "message": "Description of error" } }, { "status": 501, "data": { "message": "Operation not supported" } }],
	
	      deleteBillPayPayeesRecord: [{ "status": 204, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": { "message": "Resource not found.", "errors": [{ "message": "Unable to find the resource requested resource: {resource}.", "key": "common.api.resource", "context": { "resource": "aResource" } }] } }, { "status": 500, "data": { "message": "Description of error" } }, { "status": 501, "data": { "message": "Operation not supported" } }],
	
	      postBillPayPayeesElectronicRecord: [{ "status": 201, "data": { "id": "0955e686-d31e-4216-b3dd-5d66161d536d" } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }, { "status": 501, "data": { "message": "Operation not supported" } }],
	
	      getBillPayPayeesElectronicRecord: [{ "status": 200, "data": { "payee": { "id": "123456789", "name": "Backbase", "nickName": "My Backbase", "accountNumber": "987654321" } } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": { "message": "Resource not found.", "errors": [{ "message": "Unable to find the resource requested resource: {resource}.", "key": "common.api.resource", "context": { "resource": "aResource" } }] } }, { "status": 500, "data": { "message": "Description of error" } }, { "status": 501, "data": { "message": "Operation not supported" } }],
	
	      putBillPayPayeesElectronicRecord: [{ "status": 200, "data": { "id": "0955e686-d31e-4216-b3dd-5d66161d536d" } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": { "message": "Resource not found.", "errors": [{ "message": "Unable to find the resource requested resource: {resource}.", "key": "common.api.resource", "context": { "resource": "aResource" } }] } }, { "status": 500, "data": { "message": "Description of error" } }, { "status": 501, "data": { "message": "Operation not supported" } }],
	
	      deleteBillPayPayeesElectronicRecord: [{ "status": 204, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 404, "data": { "message": "Resource not found.", "errors": [{ "message": "Unable to find the resource requested resource: {resource}.", "key": "common.api.resource", "context": { "resource": "aResource" } }] } }, { "status": 500, "data": { "message": "Description of error" } }, { "status": 501, "data": { "message": "Operation not supported" } }]
	
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
	
	    var plugins = (_plugins = {}, _defineProperty(_plugins, PLUGINS_ALL, []), _defineProperty(_plugins, 'getBillPayPayments', []), _defineProperty(_plugins, 'postBillPayPaymentsRecord', []), _defineProperty(_plugins, 'getBillPayAccounts', []), _defineProperty(_plugins, 'getBillPayPayeesSearch', []), _defineProperty(_plugins, 'postBillPayPayeesRecord', []), _defineProperty(_plugins, 'getBillPayPayeesSummary', []), _defineProperty(_plugins, 'getBillPayEnrolment', []), _defineProperty(_plugins, 'postBillPayEnrolmentRecord', []), _defineProperty(_plugins, 'getBillPayPaymentsRecord', []), _defineProperty(_plugins, 'putBillPayPaymentsRecord', []), _defineProperty(_plugins, 'deleteBillPayPaymentsRecord', []), _defineProperty(_plugins, 'postBillPayPaymentsRecurringRecord', []), _defineProperty(_plugins, 'getBillPayPaymentsRecurringRecord', []), _defineProperty(_plugins, 'deleteBillPayPaymentsRecurringRecord', []), _defineProperty(_plugins, 'putBillPayPaymentsRecurringRecord', []), _defineProperty(_plugins, 'getBillPayPayeesRecord', []), _defineProperty(_plugins, 'putBillPayPayeesRecord', []), _defineProperty(_plugins, 'deleteBillPayPayeesRecord', []), _defineProperty(_plugins, 'postBillPayPayeesElectronicRecord', []), _defineProperty(_plugins, 'getBillPayPayeesElectronicRecord', []), _defineProperty(_plugins, 'putBillPayPayeesElectronicRecord', []), _defineProperty(_plugins, 'deleteBillPayPayeesElectronicRecord', []), _plugins);
	
	    if (!plugins['__all__']) {
	      console.warn('%cThere is no "__all__" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['__all__'].push(function anonymous(result
	      /**/) {
	
	        var min = parseInt('500', 10) || 0;
	        var max = parseInt('2000', 10) || 0;
	        var order = Math.floor(Math.log(max) / Math.LN10);
	        var rnd = Math.floor(Math.random() * Math.pow(10, order + 1));
	        var delay = Math.max(min, rnd % (max + 1));
	
	        return new Promise(function (resolve) {
	          setTimeout(function () {
	            resolve(result);
	          }, delay);
	        });
	      });
	    }
	
	    if (!plugins['getBillPayPayeesSummary']) {
	      console.warn('%cThere is no "getBillPayPayeesSummary" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getBillPayPayeesSummary'].push(function (resultData) {
	        var result = JSON.parse(JSON.stringify(resultData));
	
	        // The base "today" date from the orginal mock data
	        var BASE_DATE = new Date('2015-09-21T00:00:00.000-04:00');
	        var MS_PER_DAY = 1000 * 60 * 60 * 24;
	
	        // a and b are javascript Date objects
	        var dateDiffInDays = function dateDiffInDays(a, b) {
	          // Discard the time and time-zone information.
	          var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
	          var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
	
	          return Math.floor((utc2 - utc1) / MS_PER_DAY);
	        };
	
	        var daysDiff = dateDiffInDays(BASE_DATE, new Date());
	        var timeDiff = daysDiff * MS_PER_DAY;
	
	        result.data.payeeSummaries.map(function (payee) {
	          if (!payee.paymentServices) return payee;
	
	          payee.paymentServices.map(function (service) {
	            var keys = Object.keys(service);
	
	            keys.forEach(function (key) {
	              if (key === 'earliestPaymentDate' || key === 'nextPaymentDate') {
	                var oldDate = new Date(service[key]);
	                var newDate = new Date(oldDate.getTime() + timeDiff);
	                // if weekend just push date on to next weekday
	                if (newDate.getDay() === 0) {
	                  newDate.setDate(newDate.getDate() + 1);
	                }
	                if (newDate.getDay() === 6) {
	                  newDate.setDate(newDate.getDate() + 2);
	                }
	                Object.assign(service, _defineProperty({}, key, newDate.toISOString()));
	              }
	              if (key === 'cutoffTime') {
	                // make cutoff time 2 minutes in future to test rollovers 
	                var _newDate = new Date();
	                _newDate.setMinutes(_newDate.getMinutes() + 2);
	                Object.assign(service, _defineProperty({}, key, _newDate.toISOString()));
	              }
	            });
	            return service;
	          });
	          return payee;
	        });
	        return result;
	      });
	    }
	
	    if (!plugins['getBillPayPayeesSearch']) {
	      console.warn('%cThere is no "getBillPayPayeesSearch" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getBillPayPayeesSearch'].push(function (result, args) {
	        var _args = _slicedToArray(args, 1),
	            _args$ = _args[0],
	            params = _args$ === undefined ? {} : _args$;
	
	        if (params.name && params.name.length) {
	          var allPayees = result.data.payees;
	          var filteredPayees = allPayees.filter(function (payee) {
	            return payee.name.toLowerCase().startsWith(params.name);
	          });
	          return Object.assign({}, result, { data: { payees: filteredPayees } });
	        }
	
	        return result;
	      });
	    }
	
	    if (!plugins['getBillPayPayeesRecord']) {
	      console.warn('%cThere is no "getBillPayPayeesRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getBillPayPayeesRecord'].push(function (result, args) {
	        var _args2 = _slicedToArray(args, 1),
	            payeeId = _args2[0];
	
	        var mockPayeeData = [{
	          id: '0001',
	          name: 'Backbase',
	          phoneNumber: '1234567890',
	          address: {
	            state: 'SD',
	            city: 'SIOUX FALLS',
	            address1: 'PO BOX 6001',
	            postalCode: '57104'
	          }
	        }, {
	          id: '0002',
	          name: 'Electric Company',
	          phoneNumber: '6719251352',
	          address: {
	            state: 'HI',
	            city: 'Honolulu',
	            address1: '1001 Bishop St',
	            postalCode: '96808'
	          }
	        }, {
	          id: '0003',
	          name: 'John Doe',
	          phoneNumber: '1255464478',
	          address: {
	            state: 'MO',
	            city: 'Jefferson City',
	            address1: '301 Stadium Blvd',
	            postalCode: '65101'
	          }
	        }, {
	          id: '0004',
	          name: 'Gas Company',
	          phoneNumber: '1255464478',
	          address: {
	            state: 'MO',
	            city: 'Jefferson City',
	            address1: '301 Stadium Blvd',
	            postalCode: '65101'
	          }
	        }];
	
	        var selectedMockPayee = mockPayeeData.find(function (_ref) {
	          var id = _ref.id;
	          return id === payeeId;
	        });
	        if (selectedMockPayee) {
	          return Object.assign({}, result, { data: { payee: selectedMockPayee } });
	        }
	        return Object.assign({}, result);
	      });
	    }
	
	    if (!plugins['postBillPayPayeesRecord']) {
	      console.warn('%cThere is no "postBillPayPayeesRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['postBillPayPayeesRecord'].push(function (result, args) {
	        var params = args.length === 3 ? args[1] : args[0];
	        var name = params.payee.name || '';
	
	        var errorMap = {};
	
	        // All APIs
	        errorMap.error101 = { message: 'Invalid Request', key: 'billpay.api.invalidRequest', context: {} };
	        errorMap.error100 = { message: 'Invalid Request', key: 'billpay.api.invalidRequest', context: {} };
	        errorMap.error400 = { message: 'Invalid Request', key: 'billpay.api.invalidRequest', context: {} };
	        errorMap.error301 = { message: 'Subscriber does not exist.', key: 'billpay.api.subscriberDoesNotExist', context: {} };
	        errorMap.error500 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.internalError', context: {} };
	        errorMap.error99999 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.internalError', context: {} };
	
	        // Payee APIs
	        errorMap.error200 = { message: 'The payee already exists.', key: 'billpay.api.payeeAlreadyExists', context: {} };
	        errorMap.error266 = { message: 'Invalid Zip Code.', key: 'billpay.api.invalidZipCode', context: {} };
	        errorMap.error1034 = { message: 'Invalid account number', key: 'billpay.api.invalidAccountNumber', context: {} };
	        errorMap.error1042 = { message: 'Invalid address information', key: 'billpay.api.invalidAddressInformation', context: {} };
	        errorMap.error1043 = { message: 'Invalid city name', key: 'billpay.api.invalidCityName', context: {} };
	        errorMap.error1045 = { message: 'Invalid state code', key: 'billpay.api.invalidStateCode', context: {} };
	        errorMap.error1052 = { message: 'Invalid status', key: 'billpay.api.invalidStatus', context: {} };
	        errorMap.error1065 = { message: 'Account scheming failed', key: 'billpay.api.accountSchemingFailed', context: {} };
	
	        // Payment (including recurring) APIs
	
	        errorMap.error103 = { message: 'Too many payments requested', key: 'billpay.api.tooManyPaymentsRequested', context: {} };
	        errorMap.error370 = { message: 'Missing payment information', key: 'billpay.api.missingPaymentInformation', context: {} };
	        errorMap.error1300 = { message: '', key: '', context: {} };
	        errorMap.error1301 = { message: 'Invalid next payment date', key: 'billpay.api.invalidNextPaymentDate', context: {} };
	        errorMap.error1302 = { message: 'Payment already exists', key: 'billpay.api.paymentAlreadyExists', context: {} };
	        errorMap.error1303 = { message: 'Invalid payment amount', key: 'billpay.api.invalidPaymentAmount', context: {} };
	        errorMap.error1304 = { message: 'Payment amount too large', key: 'billpay.api.paymentAmountTooLarge', context: {} };
	        errorMap.error1305 = { message: 'Invalid payment date', key: 'billpay.api.invalidPaymentDate', context: {} };
	        errorMap.error1306 = { message: 'Invalid Ebill ID', key: 'billpay.api.invalidEBillID', context: {} };
	        errorMap.error1307 = { message: 'The payee is inactive', key: 'billpay.api.inactivePayee', context: {} };
	        errorMap.error1308 = { message: 'The payee is invalid', key: 'billpay.api.invalidPayee', context: {} };
	        errorMap.error1309 = { message: 'The payee is invalid', key: 'billpay.api.invalidPayee', context: {} };
	        errorMap.error1310 = { message: 'Payment already exists', key: 'billpay.api.paymentAlreadyExists', context: {} };
	        errorMap.error1311 = { message: 'Invalid bank account', key: 'billpay.api.invalidBankAccount', context: {} };
	        errorMap.error1312 = { message: 'Invalid bank account', key: 'billpay.api.invalidBankAccount', context: {} };
	        errorMap.error1313 = { message: 'Payment amount is too small', key: 'billpay.api.paymentAmountTooSmall', context: {} };
	        errorMap.error1314 = { message: 'Payment is too far in advance', key: 'billpay.api.paymentTooFarInAdvance', context: {} };
	        errorMap.error1315 = { message: 'The daily limit has been exceeded', key: 'billpay.api.dailyLimitExceeded', context: {} };
	        errorMap.error1317 = { message: 'Payment is too far in advance', key: 'billpay.api.paymentTooFarInAdvance', context: {} };
	        errorMap.error1318 = { message: 'Invalid payment date', key: 'billpay.api.invalidPaymentDate', context: {} };
	        errorMap.error1319 = { message: '', key: '', context: {} };
	        errorMap.error1320 = { message: 'Payments could not be taken.', key: 'billpay.api.riskCheckFailed', context: {} };
	        errorMap.error1350 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.failedToChangePaymentState', context: {} };
	        errorMap.error1351 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.failedToChangePaymentState', context: {} };
	        errorMap.error1900 = { message: 'Payments could not be taken.', key: 'billpay.api.fraudCheckFailed', context: {} };
	
	        // Recurring payments only
	
	        errorMap.error1340 = { message: 'The final date cannot be after the first date', key: 'billpay.api.finalDateBeforeFirstDate', context: {} };
	        errorMap.error1341 = { message: 'Payment already exists', key: 'billpay.api.paymentAlreadyExists', context: {} };
	        errorMap.error1342 = { message: 'The quantity of payment is too large', key: 'billpay.api.paymentQuantityExceeded', context: {} };
	        errorMap.error1343 = { message: 'The card is invalid', key: 'billpay.api.invalidCardRequest', context: {} };
	
	        // Search payee
	
	        errorMap.error375 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.invalidStatus', context: {} };
	
	        // raml errors
	        errorMap.errorRamlSizeName = { message: 'size must be between 2 and 100', key: 'api.Size.payee.name', context: {} };
	        errorMap.errorRamlSizeNickName = { message: 'size must be between 2 and 100', key: 'api.Size.payee.nickName', context: {} };
	
	        var triggerToError = [{
	          trigger: function trigger(payee) {
	            return payee.name === 'invalidRequest' || payee.nickName === 'invalidRequest';
	          },
	          error: errorMap.error101
	        }, {
	          trigger: function trigger(payee) {
	            return payee.name === 'internalError' || payee.nickName === 'internalError';
	          },
	          error: errorMap.error500
	        }, {
	          trigger: function trigger(payee) {
	            return payee.name === 'payeeAlreadyExists';
	          },
	          error: errorMap.error200
	        }, {
	          trigger: function trigger(payee) {
	            return payee.name === 'invalidStatus' || payee.nickName === 'invalidStatus';
	          },
	          error: errorMap.error1052
	        }, {
	          trigger: function trigger(payee) {
	            return payee.name === 'accountSchemingFailed' || payee.nickName === 'accountSchemingFailed';
	          },
	          error: errorMap.error1065
	        }, {
	          trigger: function trigger(payee) {
	            return payee.address && payee.address.postalCode === '91919';
	          },
	          error: errorMap.error266
	        }, {
	          trigger: function trigger(payee) {
	            return payee.accountNumber === 'invalidAccountNumber';
	          },
	          error: errorMap.error1034
	        }, {
	          trigger: function trigger(payee) {
	            return payee.address && payee.address.address1 === 'invalidAddressInformation';
	          },
	          error: errorMap.error1042
	        }, {
	          trigger: function trigger(payee) {
	            return payee.address && payee.address.city === 'invalidCityName';
	          },
	          error: errorMap.error1043
	        }, {
	          trigger: function trigger(payee) {
	            return payee.address && (payee.address.state === 'XX' || payee.address.state === 'WY');
	          },
	          error: errorMap.error1045
	        }, {
	          trigger: function trigger(payee) {
	            return payee.name === 'invalidRamlSize';
	          },
	          error: errorMap.errorRamlSizeName
	        }, {
	          trigger: function trigger(payee) {
	            return payee.nickName === 'invalidRamlSize';
	          },
	          error: errorMap.errorRamlSizeNickName
	        }];
	
	        var errorsByTestTrigger = function errorsByTestTrigger(data) {
	          return triggerToError.filter(function (i) {
	            return i.trigger(data.payee);
	          }).map(function (i) {
	            return i.error;
	          });
	        };
	
	        var errorsByName = name.split(',').map(function (subName) {
	          return errorMap[subName.trim()];
	        }).filter(function (item) {
	          return item;
	        });
	
	        var errorsToReturn = errorsByName.length ? errorsByName : errorsByTestTrigger(params);
	
	        if (errorsToReturn.length) {
	          var error = {
	            status: 400,
	            data: {
	              message: 'Bad Request',
	              errors: errorsToReturn
	            }
	          };
	          return Promise.reject(error);
	        }
	        return result;
	      });
	    }
	
	    if (!plugins['deleteBillPayPayeesRecord']) {
	      console.warn('%cThere is no "deleteBillPayPayeesRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['deleteBillPayPayeesRecord'].push(function (result, args) {
	        var _args3 = _slicedToArray(args, 1),
	            payeeId = _args3[0];
	
	        // 0004 is a user id used for displaying an error when
	        // deleting a payee with the matching ID using the FE mocks
	
	
	        if (payeeId === '0004') {
	          var error500 = {
	            message: 'Sorry, the request could not be completed at this time.',
	            key: 'billpay.api.internalError',
	            context: {}
	          };
	
	          var error = {
	            status: 400,
	            statusText: 'Invalid Server Error',
	            data: {
	              message: 'Bad Request',
	              errors: [error500]
	            }
	          };
	          return Promise.reject(error);
	        }
	        return result;
	      });
	    }
	
	    if (!plugins['putBillPayPayeesRecord']) {
	      console.warn('%cThere is no "putBillPayPayeesRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['putBillPayPayeesRecord'].push(function (result, args) {
	        var params = args.length === 3 ? args[1] : args[0];
	        var name = params.payee.name || '';
	
	        var errorMap = {};
	
	        // All APIs
	        errorMap.error101 = { message: 'Invalid Request', key: 'billpay.api.invalidRequest', context: {} };
	        errorMap.error100 = { message: 'Invalid Request', key: 'billpay.api.invalidRequest', context: {} };
	        errorMap.error400 = { message: 'Invalid Request', key: 'billpay.api.invalidRequest', context: {} };
	        errorMap.error301 = { message: 'Subscriber does not exist.', key: 'billpay.api.subscriberDoesNotExist', context: {} };
	        errorMap.error500 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.internalError', context: {} };
	        errorMap.error99999 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.internalError', context: {} };
	
	        // Payee APIs
	        errorMap.error200 = { message: 'The payee already exists.', key: 'billpay.api.payeeAlreadyExists', context: {} };
	        errorMap.error266 = { message: 'Invalid Zip Code.', key: 'billpay.api.invalidZipCode', context: {} };
	        errorMap.error1034 = { message: 'Invalid account number', key: 'billpay.api.invalidAccountNumber', context: {} };
	        errorMap.error1042 = { message: 'Invalid address information', key: 'billpay.api.invalidAddressInformation', context: {} };
	        errorMap.error1043 = { message: 'Invalid city name', key: 'billpay.api.invalidCityName', context: {} };
	        errorMap.error1045 = { message: 'Invalid state code', key: 'billpay.api.invalidStateCode', context: {} };
	        errorMap.error1052 = { message: 'Invalid status', key: 'billpay.api.invalidStatus', context: {} };
	        errorMap.error1065 = { message: 'Account scheming failed', key: 'billpay.api.accountSchemingFailed', context: {} };
	
	        // Payment (including recurring) APIs
	
	        errorMap.error103 = { message: 'Too many payments requested', key: 'billpay.api.tooManyPaymentsRequested', context: {} };
	        errorMap.error370 = { message: 'Missing payment information', key: 'billpay.api.missingPaymentInformation', context: {} };
	        errorMap.error1300 = { message: '', key: '', context: {} };
	        errorMap.error1301 = { message: 'Invalid next payment date', key: 'billpay.api.invalidNextPaymentDate', context: {} };
	        errorMap.error1302 = { message: 'Payment already exists', key: 'billpay.api.paymentAlreadyExists', context: {} };
	        errorMap.error1303 = { message: 'Invalid payment amount', key: 'billpay.api.invalidPaymentAmount', context: {} };
	        errorMap.error1304 = { message: 'Payment amount too large', key: 'billpay.api.paymentAmountTooLarge', context: {} };
	        errorMap.error1305 = { message: 'Invalid payment date', key: 'billpay.api.invalidPaymentDate', context: {} };
	        errorMap.error1306 = { message: 'Invalid Ebill ID', key: 'billpay.api.invalidEBillID', context: {} };
	        errorMap.error1307 = { message: 'The payee is inactive', key: 'billpay.api.inactivePayee', context: {} };
	        errorMap.error1308 = { message: 'The payee is invalid', key: 'billpay.api.invalidPayee', context: {} };
	        errorMap.error1309 = { message: 'The payee is invalid', key: 'billpay.api.invalidPayee', context: {} };
	        errorMap.error1310 = { message: 'Payment already exists', key: 'billpay.api.paymentAlreadyExists', context: {} };
	        errorMap.error1311 = { message: 'Invalid bank account', key: 'billpay.api.invalidBankAccount', context: {} };
	        errorMap.error1312 = { message: 'Invalid bank account', key: 'billpay.api.invalidBankAccount', context: {} };
	        errorMap.error1313 = { message: 'Payment amount is too small', key: 'billpay.api.paymentAmountTooSmall', context: {} };
	        errorMap.error1314 = { message: 'Payment is too far in advance', key: 'billpay.api.paymentTooFarInAdvance', context: {} };
	        errorMap.error1315 = { message: 'The daily limit has been exceeded', key: 'billpay.api.dailyLimitExceeded', context: {} };
	        errorMap.error1317 = { message: 'Payment is too far in advance', key: 'billpay.api.paymentTooFarInAdvance', context: {} };
	        errorMap.error1318 = { message: 'Invalid payment date', key: 'billpay.api.invalidPaymentDate', context: {} };
	        errorMap.error1319 = { message: '', key: '', context: {} };
	        errorMap.error1320 = { message: 'Payments could not be taken.', key: 'billpay.api.riskCheckFailed', context: {} };
	        errorMap.error1350 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.failedToChangePaymentState', context: {} };
	        errorMap.error1351 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.failedToChangePaymentState', context: {} };
	        errorMap.error1900 = { message: 'Payments could not be taken.', key: 'billpay.api.fraudCheckFailed', context: {} };
	
	        // Recurring payments only
	
	        errorMap.error1340 = { message: 'The final date cannot be after the first date', key: 'billpay.api.finalDateBeforeFirstDate', context: {} };
	        errorMap.error1341 = { message: 'Payment already exists', key: 'billpay.api.paymentAlreadyExists', context: {} };
	        errorMap.error1342 = { message: 'The quantity of payment is too large', key: 'billpay.api.paymentQuantityExceeded', context: {} };
	        errorMap.error1343 = { message: 'The card is invalid', key: 'billpay.api.invalidCardRequest', context: {} };
	
	        // Search payee
	
	        errorMap.error375 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.invalidStatus', context: {} };
	
	        // raml errors
	        errorMap.errorRamlSizeName = { message: 'size must be between 2 and 100', key: 'api.Size.payee.name', context: {} };
	        errorMap.errorRamlSizeNickName = { message: 'size must be between 2 and 100', key: 'api.Size.payee.nickName', context: {} };
	
	        var triggerToError = [{
	          trigger: function trigger(payee) {
	            return payee.name === 'invalidRequest' || payee.nickName === 'invalidRequest';
	          },
	          error: errorMap.error101
	        }, {
	          trigger: function trigger(payee) {
	            return payee.name === 'internalError' || payee.nickName === 'internalError';
	          },
	          error: errorMap.error500
	        }, {
	          trigger: function trigger(payee) {
	            return payee.name === 'payeeAlreadyExists';
	          },
	          error: errorMap.error200
	        }, {
	          trigger: function trigger(payee) {
	            return payee.name === 'invalidStatus' || payee.nickName === 'invalidStatus';
	          },
	          error: errorMap.error1052
	        }, {
	          trigger: function trigger(payee) {
	            return payee.name === 'accountSchemingFailed' || payee.nickName === 'accountSchemingFailed';
	          },
	          error: errorMap.error1065
	        }, {
	          trigger: function trigger(payee) {
	            return payee.address && payee.address.postalCode === '91919';
	          },
	          error: errorMap.error266
	        }, {
	          trigger: function trigger(payee) {
	            return payee.accountNumber === 'invalidAccountNumber';
	          },
	          error: errorMap.error1034
	        }, {
	          trigger: function trigger(payee) {
	            return payee.address && payee.address.address1 === 'invalidAddressInformation';
	          },
	          error: errorMap.error1042
	        }, {
	          trigger: function trigger(payee) {
	            return payee.address && payee.address.city === 'invalidCityName';
	          },
	          error: errorMap.error1043
	        }, {
	          trigger: function trigger(payee) {
	            return payee.address && (payee.address.state === 'XX' || payee.address.state === 'WY');
	          },
	          error: errorMap.error1045
	        }, {
	          trigger: function trigger(payee) {
	            return payee.name === 'invalidRamlSize';
	          },
	          error: errorMap.errorRamlSizeName
	        }, {
	          trigger: function trigger(payee) {
	            return payee.nickName === 'invalidRamlSize';
	          },
	          error: errorMap.errorRamlSizeNickName
	        }];
	
	        var errorsByTestTrigger = function errorsByTestTrigger(data) {
	          return triggerToError.filter(function (i) {
	            return i.trigger(data.payee);
	          }).map(function (i) {
	            return i.error;
	          });
	        };
	
	        var errorsByName = name.split(',').map(function (subName) {
	          return errorMap[subName.trim()];
	        }).filter(function (item) {
	          return item;
	        });
	
	        var errorsToReturn = errorsByName.length ? errorsByName : errorsByTestTrigger(params);
	
	        if (errorsToReturn.length) {
	          var error = {
	            status: 400,
	            data: {
	              message: 'Bad Request',
	              errors: errorsToReturn
	            }
	          };
	          return Promise.reject(error);
	        }
	        return result;
	      });
	    }
	
	    if (!plugins['postBillPayPaymentsRecord']) {
	      console.warn('%cThere is no "postBillPayPaymentsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['postBillPayPaymentsRecord'].push(function (result, args) {
	        var _args4 = _slicedToArray(args, 1),
	            payments = _args4[0].payments;
	
	        var errorMap = {};
	
	        // All APIs
	        errorMap.error101 = { message: 'Invalid Request', key: 'billpay.api.invalidRequest', context: {} };
	        errorMap.error500 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.internalError', context: {} };
	
	        // Payment (including recurring) APIs
	        errorMap.error103 = { message: 'Too many payments requested', key: 'billpay.api.tooManyPaymentsRequested', context: {} };
	        errorMap.error370 = { message: 'Missing payment information', key: 'billpay.api.missingPaymentInformation', context: {} };
	        errorMap.error1300 = { message: '', key: '', context: {} };
	        errorMap.error1301 = { message: 'Invalid next payment date', key: 'billpay.api.invalidNextPaymentDate', context: {} };
	        errorMap.error1302 = { message: 'Payment already exists', key: 'billpay.api.paymentAlreadyExists', context: {} };
	        errorMap.error1303 = { message: 'Invalid payment amount', key: 'billpay.api.invalidPaymentAmount', context: {} };
	        errorMap.error1304 = { message: 'Payment amount too large', key: 'billpay.api.paymentAmountTooLarge', context: {} };
	        errorMap.error1305 = { message: 'Invalid payment date', key: 'billpay.api.invalidPaymentDate', context: {} };
	        errorMap.error1306 = { message: 'Invalid Ebill ID', key: 'billpay.api.invalidEBillID', context: {} };
	        errorMap.error1307 = { message: 'The payee is inactive', key: 'billpay.api.inactivePayee', context: {} };
	        errorMap.error1308 = { message: 'The payee is invalid', key: 'billpay.api.invalidPayee', context: {} };
	        errorMap.error1311 = { message: 'Invalid bank account', key: 'billpay.api.invalidBankAccount', context: {} };
	        errorMap.error1313 = { message: 'Payment amount is too small', key: 'billpay.api.paymentAmountTooSmall', context: {} };
	        errorMap.error1314 = { message: 'Payment is too far in advance', key: 'billpay.api.paymentTooFarInAdvance', context: {} };
	        errorMap.error1315 = { message: 'The daily limit has been exceeded', key: 'billpay.api.dailyLimitExceeded', context: {} };
	        errorMap.error1320 = { message: 'Payments could not be taken.', key: 'billpay.api.riskCheckFailed', context: {} };
	        errorMap.error1900 = { message: 'Payments could not be taken.', key: 'billpay.api.fraudCheckFailed', context: {} };
	
	        // Recurring payments only - not currently wired up
	        errorMap.error1340 = { message: 'The final date cannot be after the first date', key: 'billpay.api.finalDateBeforeFirstDate', context: {} };
	        errorMap.error1341 = { message: 'Payment already exists', key: 'billpay.api.paymentAlreadyExists', context: {} };
	        errorMap.error1342 = { message: 'The quantity of payment is too large', key: 'billpay.api.paymentQuantityExceeded', context: {} };
	        errorMap.error1343 = { message: 'The card is invalid', key: 'billpay.api.invalidCardRequest', context: {} };
	
	        var triggerToError = [{
	          trigger: function trigger(errorTriggers) {
	            return errorTriggers.indexOf('invalidRequest') >= 0;
	          },
	          error: errorMap.error101,
	          code: 400
	        }, {
	          trigger: function trigger(errorTriggers) {
	            return errorTriggers.indexOf('internalError') >= 0;
	          },
	          error: errorMap.error500,
	          code: 500
	        }, {
	          trigger: function trigger(errorTriggers) {
	            return errorTriggers.indexOf('tooManyPaymentsRequested') >= 0;
	          },
	          error: errorMap.error103,
	          code: 400
	        }, {
	          trigger: function trigger(errorTriggers) {
	            return errorTriggers.indexOf('missingPaymentInformation') >= 0;
	          },
	          error: errorMap.error370,
	          code: 201
	        }, {
	          trigger: function trigger(errorTriggers) {
	            return errorTriggers.indexOf('invalidNextPaymentDate') >= 0;
	          },
	          error: errorMap.error1301,
	          code: 201
	        }, {
	          trigger: function trigger(errorTriggers) {
	            return errorTriggers.indexOf('paymentAlreadyExists') >= 0;
	          },
	          error: errorMap.error1302,
	          code: 201
	        }, {
	          trigger: function trigger(errorTriggers) {
	            return errorTriggers.indexOf('invalidPaymentAmount') >= 0;
	          },
	          error: errorMap.error1303,
	          code: 201
	        }, {
	          trigger: function trigger(errorTriggers) {
	            return errorTriggers.indexOf('paymentAmountTooLarge') >= 0;
	          },
	          error: errorMap.error1304,
	          code: 201
	        }, {
	          trigger: function trigger(errorTriggers) {
	            return errorTriggers.indexOf('invalidPaymentDate') >= 0;
	          },
	          error: errorMap.error1305,
	          code: 201
	        }, {
	          trigger: function trigger(errorTriggers) {
	            return errorTriggers.indexOf('invalidEbillId') >= 0;
	          },
	          error: errorMap.error1306,
	          code: 201
	        }, {
	          trigger: function trigger(errorTriggers) {
	            return errorTriggers.indexOf('inactivePayee') >= 0;
	          },
	          error: errorMap.error1307,
	          code: 201
	        }, {
	          trigger: function trigger(errorTriggers) {
	            return errorTriggers.indexOf('invalidPayee') >= 0;
	          },
	          error: errorMap.error1308,
	          code: 201
	        }, {
	          trigger: function trigger(errorTriggers) {
	            return errorTriggers.indexOf('invalidBankAccount') >= 0;
	          },
	          error: errorMap.error1311,
	          code: 201
	        }, {
	          trigger: function trigger(errorTriggers) {
	            return errorTriggers.indexOf('paymentAmountTooSmall') >= 0;
	          },
	          error: errorMap.error1313,
	          code: 201
	        }, {
	          trigger: function trigger(errorTriggers) {
	            return errorTriggers.indexOf('paymentTooFarInAdvance') >= 0;
	          },
	          error: errorMap.error1314,
	          code: 201
	        }, {
	          trigger: function trigger(errorTriggers) {
	            return errorTriggers.indexOf('dailyLimitExceeded') >= 0;
	          },
	          error: errorMap.error1315,
	          code: 201
	        }, {
	          trigger: function trigger(errorTriggers) {
	            return errorTriggers.indexOf('riskCheckFailed') >= 0;
	          },
	          error: errorMap.error1320,
	          code: 400
	        }, {
	          trigger: function trigger(errorTriggers) {
	            return errorTriggers.indexOf('fraudCheckFailed') >= 0;
	          },
	          error: errorMap.error1900,
	          code: 400
	        }];
	
	        var getRequestErrors = function getRequestErrors(payment) {
	          var hasMemo = payment.paymentMemo && payment.paymentMemo.length;
	          var errorTriggers = hasMemo ? payment.paymentMemo.split(',') : [];
	
	          return triggerToError.filter(function (triggerItem) {
	            return triggerItem.trigger(errorTriggers);
	          }).map(function (triggerItem) {
	            return {
	              error: triggerItem.error,
	              code: triggerItem.code
	            };
	          });
	        };
	
	        var requestErrorCodes = [];
	        var paymentsResponse = payments.map(function (payment) {
	          var requestErrors = getRequestErrors(payment);
	          var errors = requestErrors.map(function (i) {
	            return i.error;
	          });
	          requestErrorCodes.push(requestErrors.map(function (i) {
	            return i.code;
	          }));
	
	          var responseObject = {
	            payeeID: payment.payeeID,
	            errors: errors
	          };
	
	          if (!errors.length) {
	            // faking a payment ID that would have been created on success
	            var paymentId = payment.payeeID + '-001';
	            Object.assign(responseObject, { paymentId: paymentId });
	          }
	          return responseObject;
	        });
	
	        // if any internal server error codes are present return 500
	        var hasInternalErrors = requestErrorCodes.indexOf(500) >= 0;
	        if (hasInternalErrors) {
	          var error = {
	            status: 500,
	            data: {}
	          };
	          return Promise.reject(error);
	        }
	
	        // if any payments have an error present then return 400
	        if (paymentsResponse.some(function (payment) {
	          return payment.errors.length > 0;
	        })) {
	          return Promise.reject(Object.assign(result, {
	            message: 'Bad Request',
	            status: 400,
	            errors: [],
	            data: {
	              payments: paymentsResponse
	            }
	          }));
	        }
	
	        return result;
	      });
	    }
	
	    if (!plugins['putBillPayPaymentsRecord']) {
	      console.warn('%cThere is no "putBillPayPaymentsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['putBillPayPaymentsRecord'].push(function (result, args) {
	        var _args5 = _slicedToArray(args, 2),
	            payment = _args5[1].payment;
	
	        var errorMap = {};
	
	        // All APIs
	        errorMap.error101 = { message: 'Invalid Request', key: 'billpay.api.invalidRequest', context: {} };
	        errorMap.error100 = { message: 'Invalid Request', key: 'billpay.api.invalidRequest', context: {} };
	        errorMap.error400 = { message: 'Invalid Request', key: 'billpay.api.invalidRequest', context: {} };
	        errorMap.error301 = { message: 'Subscriber does not exist.', key: 'billpay.api.subscriberDoesNotExist', context: {} };
	        errorMap.error500 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.internalError', context: {} };
	        errorMap.error99999 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.internalError', context: {} };
	
	        // Payment (including recurring) APIs
	        errorMap.error103 = { message: 'Too many payments requested', key: 'billpay.api.tooManyPaymentsRequested', context: {} };
	        errorMap.error370 = { message: 'Missing payment information', key: 'billpay.api.missingPaymentInformation', context: {} };
	        errorMap.error1300 = { message: '', key: '', context: {} };
	        errorMap.error1301 = { message: 'Invalid next payment date', key: 'billpay.api.invalidNextPaymentDate', context: {} };
	        errorMap.error1302 = { message: 'Payment already exists', key: 'billpay.api.paymentAlreadyExists', context: {} };
	        errorMap.error1303 = { message: 'Invalid payment amount', key: 'billpay.api.invalidPaymentAmount', context: {} };
	        errorMap.error1304 = { message: 'Payment amount too large', key: 'billpay.api.paymentAmountTooLarge', context: {} };
	        errorMap.error1305 = { message: 'Invalid payment date', key: 'billpay.api.invalidPaymentDate', context: {} };
	        errorMap.error1306 = { message: 'Invalid Ebill ID', key: 'billpay.api.invalidEBillID', context: {} };
	        errorMap.error1307 = { message: 'The payee is inactive', key: 'billpay.api.inactivePayee', context: {} };
	        errorMap.error1308 = { message: 'The payee is invalid', key: 'billpay.api.invalidPayee', context: {} };
	        errorMap.error1309 = { message: 'The payee is invalid', key: 'billpay.api.invalidPayee', context: {} };
	        errorMap.error1310 = { message: 'Payment already exists', key: 'billpay.api.paymentAlreadyExists', context: {} };
	        errorMap.error1311 = { message: 'Invalid bank account', key: 'billpay.api.invalidBankAccount', context: {} };
	        errorMap.error1312 = { message: 'Invalid bank account', key: 'billpay.api.invalidBankAccount', context: {} };
	        errorMap.error1313 = { message: 'Payment amount is too small', key: 'billpay.api.paymentAmountTooSmall', context: {} };
	        errorMap.error1314 = { message: 'Payment is too far in advance', key: 'billpay.api.paymentTooFarInAdvance', context: {} };
	        errorMap.error1315 = { message: 'The daily limit has been exceeded', key: 'billpay.api.dailyLimitExceeded', context: {} };
	        errorMap.error1317 = { message: 'Payment is too far in advance', key: 'billpay.api.paymentTooFarInAdvance', context: {} };
	        errorMap.error1318 = { message: 'Invalid payment date', key: 'billpay.api.invalidPaymentDate', context: {} };
	        errorMap.error1319 = { message: '', key: '', context: {} };
	        errorMap.error1320 = { message: 'Payments could not be taken.', key: 'billpay.api.riskCheckFailed', context: {} };
	        errorMap.error1350 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.failedToChangePaymentState', context: {} };
	        errorMap.error1351 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.failedToChangePaymentState', context: {} };
	        errorMap.error1900 = { message: 'Payments could not be taken.', key: 'billpay.api.fraudCheckFailed', context: {} };
	
	        var triggerToError = [{
	          trigger: function trigger(pment) {
	            return pment.paymentMemo === 'invalidRequest';
	          },
	          error: errorMap.error101,
	          code: 400
	        }, {
	          trigger: function trigger(pment) {
	            return pment.paymentMemo === 'internalError';
	          },
	          error: errorMap.error500,
	          code: 400
	        }, {
	          trigger: function trigger(pment) {
	            return pment.paymentMemo === 'tooManyPaymentsRequested';
	          },
	          error: errorMap.error103,
	          code: 400
	        }, {
	          trigger: function trigger(pment) {
	            return pment.paymentMemo === 'missingPaymentInformation';
	          },
	          error: errorMap.error370,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return pment.paymentMemo === 'invalidNextPaymentDate';
	          },
	          error: errorMap.error1301,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return pment.paymentMemo === 'paymentAlreadyExists';
	          },
	          error: errorMap.error1302,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return pment.paymentMemo === 'invalidPaymentAmount';
	          },
	          error: errorMap.error1303,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return pment.paymentMemo === 'paymentAmountTooLarge';
	          },
	          error: errorMap.error1304,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return pment.paymentMemo === 'invalidPaymentDate';
	          },
	          error: errorMap.error1305,
	          code: 201
	        }, {
	          trigger: function trigger() {
	            return false;
	          }, // todo  ?
	          error: errorMap.error1306,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return pment.paymentMemo === 'inactivePayee';
	          },
	          error: errorMap.error1307,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return pment.paymentMemo === 'invalidPayee';
	          },
	          error: errorMap.error1308,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return pment.paymentMemo === 'invalidPayee';
	          },
	          error: errorMap.error1309,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return pment.paymentMemo === 'paymentAlreadyExists';
	          },
	          error: errorMap.error1310,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return pment.paymentMemo === 'invalidBankAccount';
	          },
	          error: errorMap.error1311,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return pment.paymentMemo === 'invalidBankAccount';
	          },
	          error: errorMap.error1312,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return pment.paymentMemo === 'paymentAmountTooSmall';
	          },
	          error: errorMap.error1313,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return pment.paymentMemo === 'paymentTooFarInAdvance';
	          },
	          error: errorMap.error1314,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return pment.paymentMemo === 'dailyLimitExceeded';
	          },
	          error: errorMap.error1315,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return pment.paymentMemo === 'paymentTooFarInAdvance';
	          },
	          error: errorMap.error1317,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return pment.paymentMemo === 'invalidPaymentDate';
	          },
	          error: errorMap.error1318,
	          code: 201
	        }, {
	          trigger: function trigger() {
	            return false;
	          }, // todo
	          error: errorMap.error1319,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return pment.paymentMemo === 'riskCheckFailed';
	          },
	          error: errorMap.error1320,
	          code: 400
	        }, {
	          trigger: function trigger() {
	            return false;
	          }, // todo
	          error: errorMap.error1350,
	          code: 400
	        }, {
	          trigger: function trigger() {
	            return false;
	          }, // todo
	          error: errorMap.error1351,
	          code: 400
	        }, {
	          trigger: function trigger(pment) {
	            return pment.paymentMemo === 'fraudCheckFailed';
	          },
	          error: errorMap.error1900,
	          code: 400
	        }];
	
	        var errorsByTestTrigger = function errorsByTestTrigger(pment) {
	          return triggerToError.filter(function (i) {
	            return i.trigger(pment);
	          }).map(function (i) {
	            return i.error;
	          });
	        };
	
	        var errorsToReturn = errorsByTestTrigger(payment);
	
	        if (errorsToReturn.length) {
	          var error = {
	            status: 400,
	            data: {
	              message: 'Bad Request',
	              errors: errorsToReturn
	            }
	          };
	          return Promise.reject(error);
	        }
	
	        return result;
	      });
	    }
	
	    if (!plugins['postBillPayPaymentsRecurringRecord']) {
	      console.warn('%cThere is no "postBillPayPaymentsRecurringRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['postBillPayPaymentsRecurringRecord'].push(function (result, args) {
	        var _args6 = _slicedToArray(args, 1),
	            payment = _args6[0].payment;
	
	        var errorMap = {};
	
	        // All APIs
	        errorMap.error101 = { message: 'Invalid Request', key: 'billpay.api.invalidRequest', context: {} };
	        errorMap.error100 = { message: 'Invalid Request', key: 'billpay.api.invalidRequest', context: {} };
	        errorMap.error400 = { message: 'Invalid Request', key: 'billpay.api.invalidRequest', context: {} };
	        errorMap.error301 = { message: 'Subscriber does not exist.', key: 'billpay.api.subscriberDoesNotExist', context: {} };
	        errorMap.error500 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.internalError', context: {} };
	        errorMap.error99999 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.internalError', context: {} };
	
	        // Payment (including recurring) APIs
	        errorMap.error103 = { message: 'Too many payments requested', key: 'billpay.api.tooManyPaymentsRequested', context: {} };
	        errorMap.error370 = { message: 'Missing payment information', key: 'billpay.api.missingPaymentInformation', context: {} };
	        errorMap.error1300 = { message: '', key: '', context: {} };
	        errorMap.error1301 = { message: 'Invalid next payment date', key: 'billpay.api.invalidNextPaymentDate', context: {} };
	        errorMap.error1302 = { message: 'Payment already exists', key: 'billpay.api.paymentAlreadyExists', context: {} };
	        errorMap.error1303 = { message: 'Invalid payment amount', key: 'billpay.api.invalidPaymentAmount', context: {} };
	        errorMap.error1304 = { message: 'Payment amount too large', key: 'billpay.api.paymentAmountTooLarge', context: {} };
	        errorMap.error1305 = { message: 'Invalid payment date', key: 'billpay.api.invalidPaymentDate', context: {} };
	        errorMap.error1306 = { message: 'Invalid Ebill ID', key: 'billpay.api.invalidEBillID', context: {} };
	        errorMap.error1307 = { message: 'The payee is inactive', key: 'billpay.api.inactivePayee', context: {} };
	        errorMap.error1308 = { message: 'The payee is invalid', key: 'billpay.api.invalidPayee', context: {} };
	        errorMap.error1309 = { message: 'The payee is invalid', key: 'billpay.api.invalidPayee', context: {} };
	        errorMap.error1310 = { message: 'Payment already exists', key: 'billpay.api.paymentAlreadyExists', context: {} };
	        errorMap.error1311 = { message: 'Invalid bank account', key: 'billpay.api.invalidBankAccount', context: {} };
	        errorMap.error1312 = { message: 'Invalid bank account', key: 'billpay.api.invalidBankAccount', context: {} };
	        errorMap.error1313 = { message: 'Payment amount is too small', key: 'billpay.api.paymentAmountTooSmall', context: {} };
	        errorMap.error1314 = { message: 'Payment is too far in advance', key: 'billpay.api.paymentTooFarInAdvance', context: {} };
	        errorMap.error1315 = { message: 'The daily limit has been exceeded', key: 'billpay.api.dailyLimitExceeded', context: {} };
	        errorMap.error1317 = { message: 'Payment is too far in advance', key: 'billpay.api.paymentTooFarInAdvance', context: {} };
	        errorMap.error1318 = { message: 'Invalid payment date', key: 'billpay.api.invalidPaymentDate', context: {} };
	        errorMap.error1319 = { message: '', key: '', context: {} };
	        errorMap.error1320 = { message: 'Payments could not be taken.', key: 'billpay.api.riskCheckFailed', context: {} };
	        errorMap.error1350 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.failedToChangePaymentState', context: {} };
	        errorMap.error1351 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.failedToChangePaymentState', context: {} };
	        errorMap.error1900 = { message: 'Payments could not be taken.', key: 'billpay.api.fraudCheckFailed', context: {} };
	
	        // Recurring Payment APIs
	        errorMap.error1340 = { message: 'The final date cannot be before the first date', key: 'billpay.api.finalDateBeforeFirstDate', context: {} };
	        errorMap.error1341 = { message: 'Payment already exists ', key: 'billpay.api.paymentAlreadyExists', context: {} };
	        errorMap.error1342 = { message: 'The quantity of payment is too large.', key: 'billpay.api.paymentQuantityExceeded', context: {} };
	        errorMap.error1343 = { message: 'The card is invalid', key: 'billpay.api.invalidCardRequest', context: {} };
	
	        var triggerCheck = function triggerCheck(pment, errorNumber) {
	          return pment.numberOfInstances === 900 && pment.paymentAmount === errorNumber;
	        };
	
	        var triggerToError = [{
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 101);
	          },
	          error: errorMap.error101,
	          code: 400
	        }, {
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 500);
	          },
	          error: errorMap.error500,
	          code: 400
	        }, {
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 103);
	          },
	          error: errorMap.error103,
	          code: 400
	        }, {
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 370);
	          },
	          error: errorMap.error370,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 1301);
	          },
	          error: errorMap.error1301,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 1302);
	          },
	          error: errorMap.error1302,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 1303);
	          },
	          error: errorMap.error1303,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 1304);
	          },
	          error: errorMap.error1304,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 1305);
	          },
	          error: errorMap.error1305,
	          code: 201
	        }, {
	          trigger: function trigger() {
	            return false;
	          }, // todo  ?
	          error: errorMap.error1306,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 1307);
	          },
	          error: errorMap.error1307,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 1308);
	          },
	          error: errorMap.error1308,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 1309);
	          },
	          error: errorMap.error1309,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 1310);
	          },
	          error: errorMap.error1310,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 1311);
	          },
	          error: errorMap.error1311,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 1312);
	          },
	          error: errorMap.error1312,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 1313);
	          },
	          error: errorMap.error1313,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 1314);
	          },
	          error: errorMap.error1314,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 1315);
	          },
	          error: errorMap.error1315,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 1317);
	          },
	          error: errorMap.error1317,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 1318);
	          },
	          error: errorMap.error1318,
	          code: 201
	        }, {
	          trigger: function trigger() {
	            return false;
	          }, // todo
	          error: errorMap.error1319,
	          code: 201
	        }, {
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 1320);
	          },
	          error: errorMap.error1320,
	          code: 400
	        }, {
	          trigger: function trigger() {
	            return false;
	          }, // todo
	          error: errorMap.error1350,
	          code: 400
	        }, {
	          trigger: function trigger() {
	            return false;
	          }, // todo
	          error: errorMap.error1351,
	          code: 400
	        }, {
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 1900);
	          },
	          error: errorMap.error1900,
	          code: 400
	        }, {
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 1340);
	          },
	          error: errorMap.error1340,
	          code: 400
	        }, {
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 1341);
	          },
	          error: errorMap.error1341,
	          code: 400
	        }, {
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 1342);
	          },
	          error: errorMap.error1342,
	          code: 400
	        }, {
	          trigger: function trigger(pment) {
	            return triggerCheck(pment, 1343);
	          },
	          error: errorMap.error1343,
	          code: 400
	        }];
	
	        var errorsByTestTrigger = function errorsByTestTrigger(pment) {
	          return triggerToError.filter(function (i) {
	            return i.trigger(pment);
	          }).map(function (i) {
	            return i.error;
	          });
	        };
	
	        var errorsToReturn = errorsByTestTrigger(payment);
	
	        if (errorsToReturn.length) {
	          var error = {
	            status: 400,
	            data: {
	              message: 'Bad Request',
	              errors: errorsToReturn
	            }
	          };
	          return Promise.reject(error);
	        }
	
	        return result;
	      });
	    }
	
	    if (!plugins['getBillPayPayments']) {
	      console.warn('%cThere is no "getBillPayPayments" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getBillPayPayments'].push(function (result, args) {
	        var params = args[0] || {};
	
	        var pageData = function pageData(data) {
	          var size = parseInt(params.size, 10);
	          if (!isNaN(size)) {
	            var from = parseInt(params.from, 10) || 0;
	            var startIndex = from * size;
	            return data.slice(startIndex, startIndex + size);
	          }
	          return data;
	        };
	
	        var totalResults = result.data.payments.length;
	        var headers = function headers(header) {
	          return header === 'x-total-count' ? totalResults : result.headers(header);
	        };
	        var pagedData = pageData(result.data.payments);
	        return Object.assign({}, result, { headers: headers, data: { payments: pagedData } });
	      });
	    }
	
	    if (!plugins['getBillPayPayeesElectronicRecord']) {
	      console.warn('%cThere is no "getBillPayPayeesElectronicRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getBillPayPayeesElectronicRecord'].push(function (result, args) {
	        var _args7 = _slicedToArray(args, 1),
	            payeeId = _args7[0];
	
	        var mockPayeeData = [{
	          id: '0001',
	          name: 'Backbase',
	          accountNumber: '09876'
	        }, {
	          id: '0002',
	          name: 'Electric Company',
	          accountNumber: '23232',
	          nickName: 'electric'
	        }, {
	          id: '0003',
	          name: 'John Doe',
	          accountNumber: '02021',
	          nickName: 'jdoe'
	        }, {
	          id: '0004',
	          name: 'Gas Company',
	          phoneNumber: '1255464478',
	          accountNumber: '11111'
	        }];
	
	        var selectedMockPayee = mockPayeeData.find(function (_ref2) {
	          var id = _ref2.id;
	          return id === payeeId;
	        });
	        if (selectedMockPayee) {
	          return Object.assign({}, result, { data: { payee: selectedMockPayee } });
	        }
	        return Object.assign({}, result);
	      });
	    }
	
	    if (!plugins['postBillPayPayeesElectronicRecord']) {
	      console.warn('%cThere is no "postBillPayPayeesElectronicRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['postBillPayPayeesElectronicRecord'].push(function (result, args) {
	        var params = args.length === 3 ? args[1] : args[0];
	        var name = params.payee.name || '';
	
	        var errorMap = {};
	
	        // All APIs
	        errorMap.error101 = { message: 'Invalid Request', key: 'billpay.api.invalidRequest', context: {} };
	        errorMap.error100 = { message: 'Invalid Request', key: 'billpay.api.invalidRequest', context: {} };
	        errorMap.error400 = { message: 'Invalid Request', key: 'billpay.api.invalidRequest', context: {} };
	        errorMap.error301 = { message: 'Subscriber does not exist.', key: 'billpay.api.subscriberDoesNotExist', context: {} };
	        errorMap.error500 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.internalError', context: {} };
	        errorMap.error99999 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.internalError', context: {} };
	
	        // Payee APIs
	        errorMap.error200 = { message: 'The payee already exists.', key: 'billpay.api.payeeAlreadyExists', context: {} };
	        errorMap.error266 = { message: 'Invalid Zip Code.', key: 'billpay.api.invalidZipCode', context: {} };
	        errorMap.error1034 = { message: 'Invalid account number', key: 'billpay.api.invalidAccountNumber', context: {} };
	        errorMap.error1042 = { message: 'Invalid address information', key: 'billpay.api.invalidAddressInformation', context: {} };
	        errorMap.error1043 = { message: 'Invalid city name', key: 'billpay.api.invalidCityName', context: {} };
	        errorMap.error1045 = { message: 'Invalid state code', key: 'billpay.api.invalidStateCode', context: {} };
	        errorMap.error1052 = { message: 'Invalid status', key: 'billpay.api.invalidStatus', context: {} };
	        errorMap.error1065 = { message: 'Account scheming failed', key: 'billpay.api.accountSchemingFailed', context: {} };
	
	        // Payment (including recurring) APIs
	
	        errorMap.error103 = { message: 'Too many payments requested', key: 'billpay.api.tooManyPaymentsRequested', context: {} };
	        errorMap.error370 = { message: 'Missing payment information', key: 'billpay.api.missingPaymentInformation', context: {} };
	        errorMap.error1300 = { message: '', key: '', context: {} };
	        errorMap.error1301 = { message: 'Invalid next payment date', key: 'billpay.api.invalidNextPaymentDate', context: {} };
	        errorMap.error1302 = { message: 'Payment already exists', key: 'billpay.api.paymentAlreadyExists', context: {} };
	        errorMap.error1303 = { message: 'Invalid payment amount', key: 'billpay.api.invalidPaymentAmount', context: {} };
	        errorMap.error1304 = { message: 'Payment amount too large', key: 'billpay.api.paymentAmountTooLarge', context: {} };
	        errorMap.error1305 = { message: 'Invalid payment date', key: 'billpay.api.invalidPaymentDate', context: {} };
	        errorMap.error1306 = { message: 'Invalid Ebill ID', key: 'billpay.api.invalidEBillID', context: {} };
	        errorMap.error1307 = { message: 'The payee is inactive', key: 'billpay.api.inactivePayee', context: {} };
	        errorMap.error1308 = { message: 'The payee is invalid', key: 'billpay.api.invalidPayee', context: {} };
	        errorMap.error1309 = { message: 'The payee is invalid', key: 'billpay.api.invalidPayee', context: {} };
	        errorMap.error1310 = { message: 'Payment already exists', key: 'billpay.api.paymentAlreadyExists', context: {} };
	        errorMap.error1311 = { message: 'Invalid bank account', key: 'billpay.api.invalidBankAccount', context: {} };
	        errorMap.error1312 = { message: 'Invalid bank account', key: 'billpay.api.invalidBankAccount', context: {} };
	        errorMap.error1313 = { message: 'Payment amount is too small', key: 'billpay.api.paymentAmountTooSmall', context: {} };
	        errorMap.error1314 = { message: 'Payment is too far in advance', key: 'billpay.api.paymentTooFarInAdvance', context: {} };
	        errorMap.error1315 = { message: 'The daily limit has been exceeded', key: 'billpay.api.dailyLimitExceeded', context: {} };
	        errorMap.error1317 = { message: 'Payment is too far in advance', key: 'billpay.api.paymentTooFarInAdvance', context: {} };
	        errorMap.error1318 = { message: 'Invalid payment date', key: 'billpay.api.invalidPaymentDate', context: {} };
	        errorMap.error1319 = { message: '', key: '', context: {} };
	        errorMap.error1320 = { message: 'Payments could not be taken.', key: 'billpay.api.riskCheckFailed', context: {} };
	        errorMap.error1350 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.failedToChangePaymentState', context: {} };
	        errorMap.error1351 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.failedToChangePaymentState', context: {} };
	        errorMap.error1900 = { message: 'Payments could not be taken.', key: 'billpay.api.fraudCheckFailed', context: {} };
	
	        // Recurring payments only
	
	        errorMap.error1340 = { message: 'The final date cannot be after the first date', key: 'billpay.api.finalDateBeforeFirstDate', context: {} };
	        errorMap.error1341 = { message: 'Payment already exists', key: 'billpay.api.paymentAlreadyExists', context: {} };
	        errorMap.error1342 = { message: 'The quantity of payment is too large', key: 'billpay.api.paymentQuantityExceeded', context: {} };
	        errorMap.error1343 = { message: 'The card is invalid', key: 'billpay.api.invalidCardRequest', context: {} };
	
	        // Search payee
	
	        errorMap.error375 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.invalidStatus', context: {} };
	
	        // raml errors
	        errorMap.errorRamlSizeName = { message: 'size must be between 2 and 100', key: 'api.Size.payee.name', context: {} };
	        errorMap.errorRamlSizeNickName = { message: 'size must be between 2 and 100', key: 'api.Size.payee.nickName', context: {} };
	
	        var triggerToError = [{
	          trigger: function trigger(payee) {
	            return payee.name === 'invalidRequest' || payee.nickName === 'invalidRequest';
	          },
	          error: errorMap.error101
	        }, {
	          trigger: function trigger(payee) {
	            return payee.name === 'internalError' || payee.nickName === 'internalError';
	          },
	          error: errorMap.error500
	        }, {
	          trigger: function trigger(payee) {
	            return payee.name === 'payeeAlreadyExists';
	          },
	          error: errorMap.error200
	        }, {
	          trigger: function trigger(payee) {
	            return payee.name === 'invalidStatus' || payee.nickName === 'invalidStatus';
	          },
	          error: errorMap.error1052
	        }, {
	          trigger: function trigger(payee) {
	            return payee.name === 'accountSchemingFailed' || payee.nickName === 'accountSchemingFailed';
	          },
	          error: errorMap.error1065
	        }, {
	          trigger: function trigger(payee) {
	            return payee.address && payee.address.postalCode === '91919';
	          },
	          error: errorMap.error266
	        }, {
	          trigger: function trigger(payee) {
	            return payee.accountNumber === 'invalidAccountNumber';
	          },
	          error: errorMap.error1034
	        }, {
	          trigger: function trigger(payee) {
	            return payee.address && payee.address.address1 === 'invalidAddressInformation';
	          },
	          error: errorMap.error1042
	        }, {
	          trigger: function trigger(payee) {
	            return payee.address && payee.address.city === 'invalidCityName';
	          },
	          error: errorMap.error1043
	        }, {
	          trigger: function trigger(payee) {
	            return payee.address && (payee.address.state === 'XX' || payee.address.state === 'WY');
	          },
	          error: errorMap.error1045
	        }, {
	          trigger: function trigger(payee) {
	            return payee.name === 'invalidRamlSize';
	          },
	          error: errorMap.errorRamlSizeName
	        }, {
	          trigger: function trigger(payee) {
	            return payee.nickName === 'invalidRamlSize';
	          },
	          error: errorMap.errorRamlSizeNickName
	        }];
	
	        var errorsByTestTrigger = function errorsByTestTrigger(data) {
	          return triggerToError.filter(function (i) {
	            return i.trigger(data.payee);
	          }).map(function (i) {
	            return i.error;
	          });
	        };
	
	        var errorsByName = name.split(',').map(function (subName) {
	          return errorMap[subName.trim()];
	        }).filter(function (item) {
	          return item;
	        });
	
	        var errorsToReturn = errorsByName.length ? errorsByName : errorsByTestTrigger(params);
	
	        if (errorsToReturn.length) {
	          var error = {
	            status: 400,
	            data: {
	              message: 'Bad Request',
	              errors: errorsToReturn
	            }
	          };
	          return Promise.reject(error);
	        }
	        return result;
	      });
	    }
	
	    if (!plugins['deleteBillPayPayeesElectronicRecord']) {
	      console.warn('%cThere is no "deleteBillPayPayeesElectronicRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['deleteBillPayPayeesElectronicRecord'].push(function (result, args) {
	        var _args8 = _slicedToArray(args, 1),
	            payeeId = _args8[0];
	
	        // 0004 is a user id used for displaying an error when
	        // deleting a payee with the matching ID using the FE mocks
	
	
	        if (payeeId === '0004') {
	          var error500 = {
	            message: 'Sorry, the request could not be completed at this time.',
	            key: 'billpay.api.internalError',
	            context: {}
	          };
	
	          var error = {
	            status: 400,
	            statusText: 'Invalid Server Error',
	            data: {
	              message: 'Bad Request',
	              errors: [error500]
	            }
	          };
	          return Promise.reject(error);
	        }
	        return result;
	      });
	    }
	
	    if (!plugins['putBillPayPayeesElectronicRecord']) {
	      console.warn('%cThere is no "putBillPayPayeesElectronicRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['putBillPayPayeesElectronicRecord'].push(function (result, args) {
	        var params = args.length === 3 ? args[1] : args[0];
	        var name = params.payee.name || '';
	
	        var errorMap = {};
	
	        // All APIs
	        errorMap.error101 = { message: 'Invalid Request', key: 'billpay.api.invalidRequest', context: {} };
	        errorMap.error100 = { message: 'Invalid Request', key: 'billpay.api.invalidRequest', context: {} };
	        errorMap.error400 = { message: 'Invalid Request', key: 'billpay.api.invalidRequest', context: {} };
	        errorMap.error301 = { message: 'Subscriber does not exist.', key: 'billpay.api.subscriberDoesNotExist', context: {} };
	        errorMap.error500 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.internalError', context: {} };
	        errorMap.error99999 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.internalError', context: {} };
	
	        // Payee APIs
	        errorMap.error200 = { message: 'The payee already exists.', key: 'billpay.api.payeeAlreadyExists', context: {} };
	        errorMap.error266 = { message: 'Invalid Zip Code.', key: 'billpay.api.invalidZipCode', context: {} };
	        errorMap.error1034 = { message: 'Invalid account number', key: 'billpay.api.invalidAccountNumber', context: {} };
	        errorMap.error1042 = { message: 'Invalid address information', key: 'billpay.api.invalidAddressInformation', context: {} };
	        errorMap.error1043 = { message: 'Invalid city name', key: 'billpay.api.invalidCityName', context: {} };
	        errorMap.error1045 = { message: 'Invalid state code', key: 'billpay.api.invalidStateCode', context: {} };
	        errorMap.error1052 = { message: 'Invalid status', key: 'billpay.api.invalidStatus', context: {} };
	        errorMap.error1065 = { message: 'Account scheming failed', key: 'billpay.api.accountSchemingFailed', context: {} };
	
	        // Payment (including recurring) APIs
	
	        errorMap.error103 = { message: 'Too many payments requested', key: 'billpay.api.tooManyPaymentsRequested', context: {} };
	        errorMap.error370 = { message: 'Missing payment information', key: 'billpay.api.missingPaymentInformation', context: {} };
	        errorMap.error1300 = { message: '', key: '', context: {} };
	        errorMap.error1301 = { message: 'Invalid next payment date', key: 'billpay.api.invalidNextPaymentDate', context: {} };
	        errorMap.error1302 = { message: 'Payment already exists', key: 'billpay.api.paymentAlreadyExists', context: {} };
	        errorMap.error1303 = { message: 'Invalid payment amount', key: 'billpay.api.invalidPaymentAmount', context: {} };
	        errorMap.error1304 = { message: 'Payment amount too large', key: 'billpay.api.paymentAmountTooLarge', context: {} };
	        errorMap.error1305 = { message: 'Invalid payment date', key: 'billpay.api.invalidPaymentDate', context: {} };
	        errorMap.error1306 = { message: 'Invalid Ebill ID', key: 'billpay.api.invalidEBillID', context: {} };
	        errorMap.error1307 = { message: 'The payee is inactive', key: 'billpay.api.inactivePayee', context: {} };
	        errorMap.error1308 = { message: 'The payee is invalid', key: 'billpay.api.invalidPayee', context: {} };
	        errorMap.error1309 = { message: 'The payee is invalid', key: 'billpay.api.invalidPayee', context: {} };
	        errorMap.error1310 = { message: 'Payment already exists', key: 'billpay.api.paymentAlreadyExists', context: {} };
	        errorMap.error1311 = { message: 'Invalid bank account', key: 'billpay.api.invalidBankAccount', context: {} };
	        errorMap.error1312 = { message: 'Invalid bank account', key: 'billpay.api.invalidBankAccount', context: {} };
	        errorMap.error1313 = { message: 'Payment amount is too small', key: 'billpay.api.paymentAmountTooSmall', context: {} };
	        errorMap.error1314 = { message: 'Payment is too far in advance', key: 'billpay.api.paymentTooFarInAdvance', context: {} };
	        errorMap.error1315 = { message: 'The daily limit has been exceeded', key: 'billpay.api.dailyLimitExceeded', context: {} };
	        errorMap.error1317 = { message: 'Payment is too far in advance', key: 'billpay.api.paymentTooFarInAdvance', context: {} };
	        errorMap.error1318 = { message: 'Invalid payment date', key: 'billpay.api.invalidPaymentDate', context: {} };
	        errorMap.error1319 = { message: '', key: '', context: {} };
	        errorMap.error1320 = { message: 'Payments could not be taken.', key: 'billpay.api.riskCheckFailed', context: {} };
	        errorMap.error1350 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.failedToChangePaymentState', context: {} };
	        errorMap.error1351 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.failedToChangePaymentState', context: {} };
	        errorMap.error1900 = { message: 'Payments could not be taken.', key: 'billpay.api.fraudCheckFailed', context: {} };
	
	        // Recurring payments only
	
	        errorMap.error1340 = { message: 'The final date cannot be after the first date', key: 'billpay.api.finalDateBeforeFirstDate', context: {} };
	        errorMap.error1341 = { message: 'Payment already exists', key: 'billpay.api.paymentAlreadyExists', context: {} };
	        errorMap.error1342 = { message: 'The quantity of payment is too large', key: 'billpay.api.paymentQuantityExceeded', context: {} };
	        errorMap.error1343 = { message: 'The card is invalid', key: 'billpay.api.invalidCardRequest', context: {} };
	
	        // Search payee
	
	        errorMap.error375 = { message: 'Sorry, the request could not be completed at this time.', key: 'billpay.api.invalidStatus', context: {} };
	
	        // raml errors
	        errorMap.errorRamlSizeName = { message: 'size must be between 2 and 100', key: 'api.Size.payee.name', context: {} };
	        errorMap.errorRamlSizeNickName = { message: 'size must be between 2 and 100', key: 'api.Size.payee.nickName', context: {} };
	
	        var triggerToError = [{
	          trigger: function trigger(payee) {
	            return payee.name === 'invalidRequest' || payee.nickName === 'invalidRequest';
	          },
	          error: errorMap.error101
	        }, {
	          trigger: function trigger(payee) {
	            return payee.name === 'internalError' || payee.nickName === 'internalError';
	          },
	          error: errorMap.error500
	        }, {
	          trigger: function trigger(payee) {
	            return payee.name === 'payeeAlreadyExists';
	          },
	          error: errorMap.error200
	        }, {
	          trigger: function trigger(payee) {
	            return payee.name === 'invalidStatus' || payee.nickName === 'invalidStatus';
	          },
	          error: errorMap.error1052
	        }, {
	          trigger: function trigger(payee) {
	            return payee.name === 'accountSchemingFailed' || payee.nickName === 'accountSchemingFailed';
	          },
	          error: errorMap.error1065
	        }, {
	          trigger: function trigger(payee) {
	            return payee.address && payee.address.postalCode === '91919';
	          },
	          error: errorMap.error266
	        }, {
	          trigger: function trigger(payee) {
	            return payee.accountNumber === 'invalidAccountNumber';
	          },
	          error: errorMap.error1034
	        }, {
	          trigger: function trigger(payee) {
	            return payee.address && payee.address.address1 === 'invalidAddressInformation';
	          },
	          error: errorMap.error1042
	        }, {
	          trigger: function trigger(payee) {
	            return payee.address && payee.address.city === 'invalidCityName';
	          },
	          error: errorMap.error1043
	        }, {
	          trigger: function trigger(payee) {
	            return payee.address && (payee.address.state === 'XX' || payee.address.state === 'WY');
	          },
	          error: errorMap.error1045
	        }, {
	          trigger: function trigger(payee) {
	            return payee.name === 'invalidRamlSize';
	          },
	          error: errorMap.errorRamlSizeName
	        }, {
	          trigger: function trigger(payee) {
	            return payee.nickName === 'invalidRamlSize';
	          },
	          error: errorMap.errorRamlSizeNickName
	        }];
	
	        var errorsByTestTrigger = function errorsByTestTrigger(data) {
	          return triggerToError.filter(function (i) {
	            return i.trigger(data.payee);
	          }).map(function (i) {
	            return i.error;
	          });
	        };
	
	        var errorsByName = name.split(',').map(function (subName) {
	          return errorMap[subName.trim()];
	        }).filter(function (item) {
	          return item;
	        });
	
	        var errorsToReturn = errorsByName.length ? errorsByName : errorsByTestTrigger(params);
	
	        if (errorsToReturn.length) {
	          var error = {
	            status: 400,
	            data: {
	              message: 'Bad Request',
	              errors: errorsToReturn
	            }
	          };
	          return Promise.reject(error);
	        }
	        return result;
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
	
	    function getBillPayPayments(params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payments';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getBillPayPayments', 200)).then(pluginMocks('getBillPayPayments', [params, headers], '{version}/bill-pay/payments')).catch(handleError('getBillPayPayments'));
	    }
	
	    function postBillPayPaymentsRecord(data, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payments';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postBillPayPaymentsRecord', 201)).then(pluginMocks('postBillPayPaymentsRecord', [data, headers], '{version}/bill-pay/payments')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postBillPayPaymentsRecord'));
	    }
	
	    function getBillPayAccounts(params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/accounts';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getBillPayAccounts', 200)).then(pluginMocks('getBillPayAccounts', [params, headers], '{version}/bill-pay/accounts')).catch(handleError('getBillPayAccounts'));
	    }
	
	    function getBillPayPayeesSearch(params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payees-search';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getBillPayPayeesSearch', 200)).then(pluginMocks('getBillPayPayeesSearch', [params, headers], '{version}/bill-pay/payees-search')).catch(handleError('getBillPayPayeesSearch'));
	    }
	
	    function postBillPayPayeesRecord(data, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payees';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postBillPayPayeesRecord', 201)).then(pluginMocks('postBillPayPayeesRecord', [data, headers], '{version}/bill-pay/payees')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postBillPayPayeesRecord'));
	    }
	
	    function getBillPayPayeesSummary(params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payees-summary';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getBillPayPayeesSummary', 200)).then(pluginMocks('getBillPayPayeesSummary', [params, headers], '{version}/bill-pay/payees-summary')).catch(handleError('getBillPayPayeesSummary'));
	    }
	
	    function getBillPayEnrolment(params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/enrolment';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getBillPayEnrolment', 200)).then(pluginMocks('getBillPayEnrolment', [params, headers], '{version}/bill-pay/enrolment')).catch(handleError('getBillPayEnrolment'));
	    }
	
	    function postBillPayEnrolmentRecord(data, headers) {
	      var url = '' + baseUri + version + '/bill-pay/enrolment';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postBillPayEnrolmentRecord', 204)).then(pluginMocks('postBillPayEnrolmentRecord', [data, headers], '{version}/bill-pay/enrolment')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postBillPayEnrolmentRecord'));
	    }
	
	    function getBillPayPaymentsRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payments/' + id;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getBillPayPaymentsRecord', 200)).then(pluginMocks('getBillPayPaymentsRecord', [id, params, headers], '{version}/bill-pay/payments/{id}')).catch(handleError('getBillPayPaymentsRecord'));
	    }
	
	    function putBillPayPaymentsRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payments/' + id;
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putBillPayPaymentsRecord', 200)).then(pluginMocks('putBillPayPaymentsRecord', [id, data, headers], '{version}/bill-pay/payments/{id}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putBillPayPaymentsRecord'));
	    }
	
	    function deleteBillPayPaymentsRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payments/' + id;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deleteBillPayPaymentsRecord', 204)).then(pluginMocks('deleteBillPayPaymentsRecord', [id, params, headers], '{version}/bill-pay/payments/{id}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deleteBillPayPaymentsRecord'));
	    }
	
	    function postBillPayPaymentsRecurringRecord(data, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payments/recurring';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postBillPayPaymentsRecurringRecord', 201)).then(pluginMocks('postBillPayPaymentsRecurringRecord', [data, headers], '{version}/bill-pay/payments/recurring')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postBillPayPaymentsRecurringRecord'));
	    }
	
	    function getBillPayPaymentsRecurringRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payments/recurring/' + id;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getBillPayPaymentsRecurringRecord', 200)).then(pluginMocks('getBillPayPaymentsRecurringRecord', [id, params, headers], '{version}/bill-pay/payments/recurring/{id}')).catch(handleError('getBillPayPaymentsRecurringRecord'));
	    }
	
	    function deleteBillPayPaymentsRecurringRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payments/recurring/' + id;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deleteBillPayPaymentsRecurringRecord', 204)).then(pluginMocks('deleteBillPayPaymentsRecurringRecord', [id, params, headers], '{version}/bill-pay/payments/recurring/{id}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deleteBillPayPaymentsRecurringRecord'));
	    }
	
	    function putBillPayPaymentsRecurringRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payments/recurring/' + id;
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putBillPayPaymentsRecurringRecord', 200)).then(pluginMocks('putBillPayPaymentsRecurringRecord', [id, data, headers], '{version}/bill-pay/payments/recurring/{id}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putBillPayPaymentsRecurringRecord'));
	    }
	
	    function getBillPayPayeesRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payees/' + id;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getBillPayPayeesRecord', 200)).then(pluginMocks('getBillPayPayeesRecord', [id, params, headers], '{version}/bill-pay/payees/{id}')).catch(handleError('getBillPayPayeesRecord'));
	    }
	
	    function putBillPayPayeesRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payees/' + id;
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putBillPayPayeesRecord', 200)).then(pluginMocks('putBillPayPayeesRecord', [id, data, headers], '{version}/bill-pay/payees/{id}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putBillPayPayeesRecord'));
	    }
	
	    function deleteBillPayPayeesRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payees/' + id;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deleteBillPayPayeesRecord', 204)).then(pluginMocks('deleteBillPayPayeesRecord', [id, params, headers], '{version}/bill-pay/payees/{id}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deleteBillPayPayeesRecord'));
	    }
	
	    function postBillPayPayeesElectronicRecord(data, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payees/electronic';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postBillPayPayeesElectronicRecord', 201)).then(pluginMocks('postBillPayPayeesElectronicRecord', [data, headers], '{version}/bill-pay/payees/electronic')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postBillPayPayeesElectronicRecord'));
	    }
	
	    function getBillPayPayeesElectronicRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payees/electronic/' + id;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getBillPayPayeesElectronicRecord', 200)).then(pluginMocks('getBillPayPayeesElectronicRecord', [id, params, headers], '{version}/bill-pay/payees/electronic/{id}')).catch(handleError('getBillPayPayeesElectronicRecord'));
	    }
	
	    function putBillPayPayeesElectronicRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payees/electronic/' + id;
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putBillPayPayeesElectronicRecord', 200)).then(pluginMocks('putBillPayPayeesElectronicRecord', [id, data, headers], '{version}/bill-pay/payees/electronic/{id}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putBillPayPayeesElectronicRecord'));
	    }
	
	    function deleteBillPayPayeesElectronicRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/bill-pay/payees/electronic/' + id;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deleteBillPayPayeesElectronicRecord', 204)).then(pluginMocks('deleteBillPayPayeesElectronicRecord', [id, params, headers], '{version}/bill-pay/payees/electronic/{id}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deleteBillPayPayeesElectronicRecord'));
	    }
	
	    schemas.postBillPayPaymentsRecord = { "properties": { "payments": { "type": "array", "items": { "properties": { "payeeID": { "type": "string", "minLength": 1, "maxLength": 100, "required": true }, "paymentAccount": { "type": "object", "properties": { "accountNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "routingNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "accountType": { "type": "string", "minLength": 2, "maxLength": 100, "required": true } }, "required": true }, "paymentAmount": { "type": "number", "required": true }, "paymentDate": { "type": "string", "format": "date", "required": true }, "paymentMemo": { "type": "string", "minLength": 1, "maxLength": 255, "required": false }, "overnightDeliveryAddress": { "type": "object", "properties": { "address1": { "type": "string", "minLength": 1, "maxLength": 40, "required": true }, "address2": { "type": "string", "minLength": 1, "maxLength": 40, "required": false }, "city": { "type": "string", "minLength": 1, "maxLength": 32, "required": true }, "state": { "type": "string", "minLength": 2, "maxLength": 2, "required": true }, "postalCode": { "type": "string", "minLength": 5, "maxLength": 9, "required": true } }, "required": false } } }, "minItems": 1, "maxItems": 50, "required": true } } };
	
	    schemas.postBillPayPayeesRecord = { "properties": { "payee": { "type": "object", "properties": { "name": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "nickName": { "type": "string", "minLength": 2, "maxLength": 100, "required": false }, "phoneNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "address": { "type": "object", "properties": { "address1": { "type": "string", "minLength": 1, "maxLength": 40, "required": true }, "address2": { "type": "string", "minLength": 1, "maxLength": 40, "required": false }, "city": { "type": "string", "minLength": 1, "maxLength": 32, "required": true }, "state": { "type": "string", "minLength": 2, "maxLength": 2, "required": true }, "postalCode": { "type": "string", "minLength": 5, "maxLength": 9, "required": true } }, "required": true }, "accountNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": false } }, "required": true } } };
	
	    schemas.putBillPayPaymentsRecord = { "properties": { "payment": { "type": "object", "properties": { "payeeID": { "type": "string", "minLength": 1, "maxLength": 100, "required": true }, "paymentAccount": { "type": "object", "properties": { "accountNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "routingNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "accountType": { "type": "string", "minLength": 2, "maxLength": 100, "required": true } }, "required": true }, "paymentAmount": { "type": "number", "required": true }, "paymentDate": { "type": "string", "format": "date", "required": true }, "paymentMemo": { "type": "string", "minLength": 1, "maxLength": 255, "required": false }, "overnightDeliveryAddress": { "type": "object", "properties": { "address1": { "type": "string", "minLength": 1, "maxLength": 40, "required": true }, "address2": { "type": "string", "minLength": 1, "maxLength": 40, "required": false }, "city": { "type": "string", "minLength": 1, "maxLength": 32, "required": true }, "state": { "type": "string", "minLength": 2, "maxLength": 2, "required": true }, "postalCode": { "type": "string", "minLength": 5, "maxLength": 9, "required": true } }, "required": false } }, "required": true } } };
	
	    schemas.postBillPayPaymentsRecurringRecord = { "properties": { "payment": { "type": "object", "properties": { "payeeID": { "type": "string", "minLength": 1, "maxLength": 100, "required": true }, "paymentAccount": { "type": "object", "properties": { "accountNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "routingNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "accountType": { "type": "string", "minLength": 2, "maxLength": 100, "required": true } }, "required": true }, "paymentAmount": { "type": "number", "required": true }, "paymentDate": { "type": "string", "format": "date", "required": true }, "numberOfInstances": { "type": "integer", "minimum": 1, "required": false }, "frequency": { "type": "string", "minLength": 1, "maxLength": 20, "required": true }, "paymentScheduledAlert": { "type": "boolean", "required": true }, "paymentSentAlert": { "type": "boolean", "required": true }, "modelExpirationAlert": { "type": "boolean", "required": true } }, "required": true } } };
	
	    schemas.putBillPayPaymentsRecurringRecord = { "properties": { "payment": { "type": "object", "properties": { "payeeID": { "type": "string", "minLength": 1, "maxLength": 100, "required": true }, "paymentAccount": { "type": "object", "properties": { "accountNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "routingNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "accountType": { "type": "string", "minLength": 2, "maxLength": 100, "required": true } }, "required": true }, "paymentAmount": { "type": "number", "required": true }, "paymentDate": { "type": "string", "format": "date", "required": true }, "numberOfInstances": { "type": "integer", "minimum": 1, "required": false }, "frequency": { "type": "string", "minLength": 1, "maxLength": 20, "required": true }, "paymentScheduledAlert": { "type": "boolean", "required": true }, "paymentSentAlert": { "type": "boolean", "required": true }, "modelExpirationAlert": { "type": "boolean", "required": true } }, "required": true } } };
	
	    schemas.putBillPayPayeesRecord = { "properties": { "payee": { "type": "object", "properties": { "name": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "nickName": { "type": "string", "minLength": 2, "maxLength": 100, "required": false }, "phoneNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "address": { "type": "object", "properties": { "address1": { "type": "string", "minLength": 1, "maxLength": 40, "required": true }, "address2": { "type": "string", "minLength": 1, "maxLength": 40, "required": false }, "city": { "type": "string", "minLength": 1, "maxLength": 32, "required": true }, "state": { "type": "string", "minLength": 2, "maxLength": 2, "required": true }, "postalCode": { "type": "string", "minLength": 5, "maxLength": 9, "required": true } }, "required": true }, "accountNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": false }, "modifyPendingPayments": { "type": "boolean", "required": true } }, "required": true } } };
	
	    schemas.postBillPayPayeesElectronicRecord = { "properties": { "payee": { "type": "object", "properties": { "name": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "nickName": { "type": "string", "minLength": 2, "maxLength": 100, "required": false }, "merchantID": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "merchantZipCode": { "type": "string", "minLength": 5, "maxLength": 10, "required": false }, "accountNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true } }, "required": true } } };
	
	    schemas.putBillPayPayeesElectronicRecord = { "properties": { "payee": { "type": "object", "properties": { "name": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "nickName": { "type": "string", "minLength": 2, "maxLength": 100, "required": false }, "accountNumber": { "type": "string", "minLength": 2, "maxLength": 100, "required": true }, "modifyPendingPayments": { "type": "boolean", "required": true } }, "required": true } } };
	
	    return {
	
	      getBillPayPayments: getBillPayPayments,
	
	      postBillPayPaymentsRecord: postBillPayPaymentsRecord,
	
	      getBillPayAccounts: getBillPayAccounts,
	
	      getBillPayPayeesSearch: getBillPayPayeesSearch,
	
	      postBillPayPayeesRecord: postBillPayPayeesRecord,
	
	      getBillPayPayeesSummary: getBillPayPayeesSummary,
	
	      getBillPayEnrolment: getBillPayEnrolment,
	
	      postBillPayEnrolmentRecord: postBillPayEnrolmentRecord,
	
	      getBillPayPaymentsRecord: getBillPayPaymentsRecord,
	
	      putBillPayPaymentsRecord: putBillPayPaymentsRecord,
	
	      deleteBillPayPaymentsRecord: deleteBillPayPaymentsRecord,
	
	      postBillPayPaymentsRecurringRecord: postBillPayPaymentsRecurringRecord,
	
	      getBillPayPaymentsRecurringRecord: getBillPayPaymentsRecurringRecord,
	
	      deleteBillPayPaymentsRecurringRecord: deleteBillPayPaymentsRecurringRecord,
	
	      putBillPayPaymentsRecurringRecord: putBillPayPaymentsRecurringRecord,
	
	      getBillPayPayeesRecord: getBillPayPayeesRecord,
	
	      putBillPayPayeesRecord: putBillPayPayeesRecord,
	
	      deleteBillPayPayeesRecord: deleteBillPayPayeesRecord,
	
	      postBillPayPayeesElectronicRecord: postBillPayPayeesElectronicRecord,
	
	      getBillPayPayeesElectronicRecord: getBillPayPayeesElectronicRecord,
	
	      putBillPayPayeesElectronicRecord: putBillPayPayeesElectronicRecord,
	
	      deleteBillPayPayeesElectronicRecord: deleteBillPayPayeesElectronicRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=mock.data-bb-bill-pay-http-ng.js.map