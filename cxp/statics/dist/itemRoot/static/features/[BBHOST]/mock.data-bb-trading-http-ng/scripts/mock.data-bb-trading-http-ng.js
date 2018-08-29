(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else if(typeof define === 'function' && define.amd)
		define("mock.data-bb-trading-http-ng", ["vendor-bb-angular", "lib-bb-storage-ng"], factory);
	else if(typeof exports === 'object')
		exports["mock.data-bb-trading-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else
		root["mock.data-bb-trading-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage-ng"]);
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
	exports.tradingDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStorageNg = __webpack_require__(3);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _dataBbTradingHttp = __webpack_require__(4);
	
	var _dataBbTradingHttp2 = _interopRequireDefault(_dataBbTradingHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var tradingDataModuleKey = 'data-bb-trading-http-ng'; /* eslint-disable */
	var tradingDataKey = exports.tradingDataKey = 'data-bb-trading-http-ng:tradingData';
	
	exports.default = _vendorBbAngular2.default.module(tradingDataModuleKey, [_libBbStorageNg2.default]).provider(tradingDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  return {
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	    $get: ['$q', _libBbStorageNg.bbStorageServiceKey, '$httpParamSerializer',
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
	
	    var STORAGE_KEY = 'MOCK_STATE_tradingDataModuleKey';
	    var state = {
	      "{version}/trading/currencypair": [{
	        "pairKey": "AUD/CAD",
	        "prevClose": 1.591,
	        "open": 1.6926,
	        "isBuyEnabled": true,
	        "isSellEnabled": false,
	        "accounts": [{
	          "IBAN": "TM514519240979",
	          "name": "Main Account",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "AUD"
	          }
	        }, {
	          "IBAN": "FR119340766811",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "AUD"
	          }
	        }, {
	          "IBAN": "MN1254740787123",
	          "name": "Savings",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "CAD"
	          }
	        }, {
	          "IBAN": "NM763798266398",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "101734.12",
	            "currencyCode": "CAD"
	          }
	        }]
	      }, {
	        "pairKey": "EUR/GBP",
	        "prevClose": 1.3527,
	        "open": 1.4945,
	        "isBuyEnabled": true,
	        "isSellEnabled": true,
	        "accounts": [{
	          "IBAN": "IP530801010806",
	          "name": "Main Account",
	          "balance": {
	            "amount": "702551.42",
	            "currencyCode": "EUR"
	          }
	        }, {
	          "IBAN": "AX587548273605",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "854585.83",
	            "currencyCode": "EUR"
	          }
	        }, {
	          "IBAN": "HG76354827764",
	          "name": "Savings",
	          "balance": {
	            "amount": "237685.13",
	            "currencyCode": "EUR"
	          }
	        }, {
	          "IBAN": "HG76354827764",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "87465.85",
	            "currencyCode": "GBP"
	          }
	        }, {
	          "IBAN": "HJ7635487853",
	          "name": "Obligations Account",
	          "balance": {
	            "amount": "75764.64",
	            "currencyCode": "GBP"
	          }
	        }]
	      }, {
	        "pairKey": "AUD/CNH",
	        "prevClose": 1.3467,
	        "open": 1.1264,
	        "isBuyEnabled": false,
	        "isSellEnabled": false,
	        "accounts": [{
	          "IBAN": "TM514519240979",
	          "name": "Main Account",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "AUD"
	          }
	        }, {
	          "IBAN": "FR119340766811",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "AUD"
	          }
	        }, {
	          "IBAN": "BN814639938764",
	          "name": "Account",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "CNH"
	          }
	        }, {
	          "IBAN": "KH74653987352",
	          "name": "Account",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "CNH"
	          }
	        }]
	      }, {
	        "pairKey": "CHF/JPY",
	        "prevClose": 1.6537,
	        "open": 1.8946,
	        "isBuyEnabled": true,
	        "isSellEnabled": true,
	        "accounts": [{
	          "IBAN": "GL585567292147",
	          "name": "Main Account",
	          "balance": {
	            "amount": "882502.61",
	            "currencyCode": "CHF"
	          }
	        }, {
	          "IBAN": "KL335015373671",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "774024.48",
	            "currencyCode": "CHF"
	          }
	        }, {
	          "IBAN": "BN87636398364",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "12040.14",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "KH764368756294",
	          "name": "Account",
	          "balance": {
	            "amount": "25117.35",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "NB76493398753",
	          "name": "Account",
	          "balance": {
	            "amount": "50550.21",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "MX74821826473",
	          "name": "Account",
	          "balance": {
	            "amount": "37382.07",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "FG62905329857",
	          "name": "Account",
	          "balance": {
	            "amount": "7520.17",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "HG749373193872",
	          "name": "Account",
	          "balance": {
	            "amount": "3150.57",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "NB648733184632",
	          "name": "Account",
	          "balance": {
	            "amount": "110450.87",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "TR284643185762",
	          "name": "Account",
	          "balance": {
	            "amount": "40760.67",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "MN784623198361",
	          "name": "Account",
	          "balance": {
	            "amount": "80120.45",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "HG759833192745",
	          "name": "Account",
	          "balance": {
	            "amount": "150.11",
	            "currencyCode": "JPY"
	          }
	        }]
	      }, {
	        "pairKey": "USD/CNH",
	        "prevClose": 1.1422,
	        "open": 1.9032,
	        "isBuyEnabled": false,
	        "isSellEnabled": true,
	        "accounts": [{
	          "IBAN": "NB647830587564",
	          "name": "Main Account",
	          "balance": {
	            "amount": "16492.43",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "TM230301954201",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "175616.71",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "KL461859983394",
	          "name": "Savings",
	          "balance": {
	            "amount": "528335.64",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "MX3897549998473",
	          "name": "Account",
	          "balance": {
	            "amount": "1387.63",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "FR294629948721",
	          "name": "Account",
	          "balance": {
	            "amount": "335.24",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "BN814639938764",
	          "name": "Account",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "CNH"
	          }
	        }, {
	          "IBAN": "KH74653987352",
	          "name": "Account",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "CNH"
	          }
	        }]
	      }, {
	        "pairKey": "NOK/NZD",
	        "prevClose": 1.3128,
	        "open": 1.0846,
	        "isBuyEnabled": false,
	        "isSellEnabled": false,
	        "accounts": [{
	          "IBAN": "HR849665508929",
	          "name": "Main Account",
	          "balance": {
	            "amount": "10000.00",
	            "currencyCode": "NOK"
	          }
	        }]
	      }, {
	        "pairKey": "SEK/TRY",
	        "prevClose": 1.6971,
	        "open": 1.2112,
	        "isBuyEnabled": false,
	        "isSellEnabled": false,
	        "accounts": [{
	          "IBAN": "FR684583630314",
	          "name": "Main Account",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "SEK"
	          }
	        }]
	      }, {
	        "pairKey": "MXN/TRY",
	        "prevClose": 1.8517,
	        "open": 1.679,
	        "isBuyEnabled": false,
	        "isSellEnabled": false,
	        "accounts": []
	      }, {
	        "pairKey": "AUD/CHF",
	        "prevClose": 1.8622,
	        "open": 1.2515,
	        "isBuyEnabled": true,
	        "isSellEnabled": false,
	        "accounts": [{
	          "IBAN": "TM514519240979",
	          "name": "Main Account",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "AUD"
	          }
	        }, {
	          "IBAN": "FR119340766811",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "AUD"
	          }
	        }, {
	          "IBAN": "GL585567292147",
	          "name": "Main Account",
	          "balance": {
	            "amount": "882502.61",
	            "currencyCode": "CHF"
	          }
	        }, {
	          "IBAN": "KL335015373671",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "774024.48",
	            "currencyCode": "CHF"
	          }
	        }]
	      }, {
	        "pairKey": "AUD/JPY",
	        "prevClose": 1.2262,
	        "open": 1.8924,
	        "isBuyEnabled": true,
	        "isSellEnabled": false,
	        "accounts": [{
	          "IBAN": "TM514519240979",
	          "name": "Main Account",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "AUD"
	          }
	        }, {
	          "IBAN": "FR119340766811",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "AUD"
	          }
	        }, {
	          "IBAN": "BN87636398364",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "12040.14",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "KH764368756294",
	          "name": "Account",
	          "balance": {
	            "amount": "25117.35",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "NB76493398753",
	          "name": "Account",
	          "balance": {
	            "amount": "50550.21",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "MX74821826473",
	          "name": "Account",
	          "balance": {
	            "amount": "37382.07",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "FG62905329857",
	          "name": "Account",
	          "balance": {
	            "amount": "7520.17",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "HG749373193872",
	          "name": "Account",
	          "balance": {
	            "amount": "3150.57",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "NB648733184632",
	          "name": "Account",
	          "balance": {
	            "amount": "110450.87",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "TR284643185762",
	          "name": "Account",
	          "balance": {
	            "amount": "40760.67",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "MN784623198361",
	          "name": "Account",
	          "balance": {
	            "amount": "80120.45",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "HG759833192745",
	          "name": "Account",
	          "balance": {
	            "amount": "150.11",
	            "currencyCode": "JPY"
	          }
	        }]
	      }, {
	        "pairKey": "AUD/NZD",
	        "prevClose": 1.1126,
	        "open": 1.5407,
	        "isBuyEnabled": false,
	        "isSellEnabled": false,
	        "accounts": [{
	          "IBAN": "TM514519240979",
	          "name": "Main Account",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "AUD"
	          }
	        }, {
	          "IBAN": "FR119340766811",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "AUD"
	          }
	        }]
	      }, {
	        "pairKey": "AUD/USD",
	        "prevClose": 1.3973,
	        "open": 1.7087,
	        "isBuyEnabled": true,
	        "isSellEnabled": false,
	        "accounts": [{
	          "IBAN": "TM514519240979",
	          "name": "Main Account",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "AUD"
	          }
	        }, {
	          "IBAN": "FR119340766811",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "AUD"
	          }
	        }, {
	          "IBAN": "NB647830587564",
	          "name": "Main Account",
	          "balance": {
	            "amount": "16492.43",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "TM230301954201",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "175616.71",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "KL461859983394",
	          "name": "Savings",
	          "balance": {
	            "amount": "528335.64",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "MX3897549998473",
	          "name": "Account",
	          "balance": {
	            "amount": "1387.63",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "FR294629948721",
	          "name": "Account",
	          "balance": {
	            "amount": "335.24",
	            "currencyCode": "USD"
	          }
	        }]
	      }, {
	        "pairKey": "CAD/CHF",
	        "prevClose": 1.4997,
	        "open": 1.8867,
	        "isBuyEnabled": true,
	        "isSellEnabled": true,
	        "accounts": [{
	          "IBAN": "MN1254740787123",
	          "name": "Savings",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "CAD"
	          }
	        }, {
	          "IBAN": "NM763798266398",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "101734.12",
	            "currencyCode": "CAD"
	          }
	        }, {
	          "IBAN": "GL585567292147",
	          "name": "Main Account",
	          "balance": {
	            "amount": "882502.61",
	            "currencyCode": "CHF"
	          }
	        }, {
	          "IBAN": "KL335015373671",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "774024.48",
	            "currencyCode": "CHF"
	          }
	        }]
	      }, {
	        "pairKey": "CAD/JPY",
	        "prevClose": 1.6318,
	        "open": 1.4413,
	        "isBuyEnabled": true,
	        "isSellEnabled": true,
	        "accounts": [{
	          "IBAN": "MN1254740787123",
	          "name": "Savings",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "CAD"
	          }
	        }, {
	          "IBAN": "NM763798266398",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "101734.12",
	            "currencyCode": "CAD"
	          }
	        }, {
	          "IBAN": "BN87636398364",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "12040.14",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "KH764368756294",
	          "name": "Account",
	          "balance": {
	            "amount": "25117.35",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "NB76493398753",
	          "name": "Account",
	          "balance": {
	            "amount": "50550.21",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "MX74821826473",
	          "name": "Account",
	          "balance": {
	            "amount": "37382.07",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "FG62905329857",
	          "name": "Account",
	          "balance": {
	            "amount": "7520.17",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "HG749373193872",
	          "name": "Account",
	          "balance": {
	            "amount": "3150.57",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "NB648733184632",
	          "name": "Account",
	          "balance": {
	            "amount": "110450.87",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "TR284643185762",
	          "name": "Account",
	          "balance": {
	            "amount": "40760.67",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "MN784623198361",
	          "name": "Account",
	          "balance": {
	            "amount": "80120.45",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "HG759833192745",
	          "name": "Account",
	          "balance": {
	            "amount": "150.11",
	            "currencyCode": "JPY"
	          }
	        }]
	      }, {
	        "pairKey": "EUR/AUD",
	        "prevClose": 1.7953,
	        "open": 1.1315,
	        "isBuyEnabled": false,
	        "isSellEnabled": true,
	        "accounts": [{
	          "IBAN": "IP530801010806",
	          "name": "Main Account",
	          "balance": {
	            "amount": "702551.42",
	            "currencyCode": "EUR"
	          }
	        }, {
	          "IBAN": "AX587548273605",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "854585.83",
	            "currencyCode": "EUR"
	          }
	        }, {
	          "IBAN": "HG76354827764",
	          "name": "Savings",
	          "balance": {
	            "amount": "237685.13",
	            "currencyCode": "EUR"
	          }
	        }, {
	          "IBAN": "TM514519240979",
	          "name": "Main Account",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "AUD"
	          }
	        }, {
	          "IBAN": "FR119340766811",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "AUD"
	          }
	        }]
	      }, {
	        "pairKey": "EUR/CAD",
	        "prevClose": 1.729,
	        "open": 1.9705,
	        "isBuyEnabled": true,
	        "isSellEnabled": true,
	        "accounts": [{
	          "IBAN": "IP530801010806",
	          "name": "Main Account",
	          "balance": {
	            "amount": "702551.42",
	            "currencyCode": "EUR"
	          }
	        }, {
	          "IBAN": "AX587548273605",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "854585.83",
	            "currencyCode": "EUR"
	          }
	        }, {
	          "IBAN": "HG76354827764",
	          "name": "Savings",
	          "balance": {
	            "amount": "237685.13",
	            "currencyCode": "EUR"
	          }
	        }, {
	          "IBAN": "MN1254740787123",
	          "name": "Savings",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "CAD"
	          }
	        }, {
	          "IBAN": "NM763798266398",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "101734.12",
	            "currencyCode": "CAD"
	          }
	        }]
	      }, {
	        "pairKey": "EUR/CHF",
	        "prevClose": 1.8366,
	        "open": 1.1452,
	        "isBuyEnabled": true,
	        "isSellEnabled": true,
	        "accounts": [{
	          "IBAN": "IP530801010806",
	          "name": "Main Account",
	          "balance": {
	            "amount": "702551.42",
	            "currencyCode": "EUR"
	          }
	        }, {
	          "IBAN": "AX587548273605",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "854585.83",
	            "currencyCode": "EUR"
	          }
	        }, {
	          "IBAN": "HG76354827764",
	          "name": "Savings",
	          "balance": {
	            "amount": "237685.13",
	            "currencyCode": "EUR"
	          }
	        }, {
	          "IBAN": "GL585567292147",
	          "name": "Main Account",
	          "balance": {
	            "amount": "882502.61",
	            "currencyCode": "CHF"
	          }
	        }, {
	          "IBAN": "KL335015373671",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "774024.48",
	            "currencyCode": "CHF"
	          }
	        }]
	      }, {
	        "pairKey": "EUR/JPY",
	        "prevClose": 1.0457,
	        "open": 1.6756,
	        "isBuyEnabled": true,
	        "isSellEnabled": true,
	        "accounts": [{
	          "IBAN": "VO513653008917",
	          "name": "Main Account",
	          "balance": {
	            "amount": "745349.03",
	            "currencyCode": "EUR"
	          }
	        }, {
	          "IBAN": "VY223164828286",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "270954.65",
	            "currencyCode": "EUR"
	          }
	        }, {
	          "IBAN": "BN87636398364",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "12040.14",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "KH764368756294",
	          "name": "Account",
	          "balance": {
	            "amount": "25117.35",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "NB76493398753",
	          "name": "Account",
	          "balance": {
	            "amount": "50550.21",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "MX74821826473",
	          "name": "Account",
	          "balance": {
	            "amount": "37382.07",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "FG62905329857",
	          "name": "Account",
	          "balance": {
	            "amount": "7520.17",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "HG749373193872",
	          "name": "Account",
	          "balance": {
	            "amount": "3150.57",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "NB648733184632",
	          "name": "Account",
	          "balance": {
	            "amount": "110450.87",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "TR284643185762",
	          "name": "Account",
	          "balance": {
	            "amount": "40760.67",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "MN784623198361",
	          "name": "Account",
	          "balance": {
	            "amount": "80120.45",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "HG759833192745",
	          "name": "Account",
	          "balance": {
	            "amount": "150.11",
	            "currencyCode": "JPY"
	          }
	        }]
	      }, {
	        "pairKey": "EUR/NZD",
	        "prevClose": 1.0123,
	        "open": 1.4254,
	        "isBuyEnabled": false,
	        "isSellEnabled": false,
	        "accounts": [{
	          "IBAN": "GV466050307380",
	          "name": "Main Account",
	          "balance": {
	            "amount": "886209.62",
	            "currencyCode": "EUR"
	          }
	        }, {
	          "IBAN": "DR330437502490",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "281371.28",
	            "currencyCode": "EUR"
	          }
	        }]
	      }, {
	        "pairKey": "EUR/TRY",
	        "prevClose": 1.502,
	        "open": 1.4966,
	        "isBuyEnabled": false,
	        "isSellEnabled": false,
	        "accounts": [{
	          "IBAN": "BT070739687682",
	          "name": "Main Account",
	          "balance": {
	            "amount": "950781.62",
	            "currencyCode": "EUR"
	          }
	        }, {
	          "IBAN": "OB463642446586",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "647652.51",
	            "currencyCode": "EUR"
	          }
	        }, {
	          "IBAN": "OS242740623874",
	          "name": "Savings",
	          "balance": {
	            "amount": "561396.78",
	            "currencyCode": "EUR"
	          }
	        }]
	      }, {
	        "pairKey": "EUR/USD",
	        "prevClose": 1.8152,
	        "open": 1.7258,
	        "isBuyEnabled": true,
	        "isSellEnabled": true,
	        "accounts": [{
	          "IBAN": "RI649944442350",
	          "name": "Main Account",
	          "balance": {
	            "amount": "552317.28",
	            "currencyCode": "EUR"
	          }
	        }, {
	          "IBAN": "FW892849685711",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "892836.42",
	            "currencyCode": "EUR"
	          }
	        }, {
	          "IBAN": "SA912694816846",
	          "name": "Savings",
	          "balance": {
	            "amount": "272308.56",
	            "currencyCode": "EUR"
	          }
	        }, {
	          "IBAN": "NB647830587564",
	          "name": "Main Account",
	          "balance": {
	            "amount": "16492.43",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "TM230301954201",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "175616.71",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "KL461859983394",
	          "name": "Savings",
	          "balance": {
	            "amount": "528335.64",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "MX3897549998473",
	          "name": "Account",
	          "balance": {
	            "amount": "1387.63",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "FR294629948721",
	          "name": "Account",
	          "balance": {
	            "amount": "335.24",
	            "currencyCode": "USD"
	          }
	        }]
	      }, {
	        "pairKey": "GBP/AUD",
	        "prevClose": 1.6281,
	        "open": 1.7056,
	        "isBuyEnabled": false,
	        "isSellEnabled": true,
	        "accounts": [{
	          "IBAN": "HG76354827764",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "87465.85",
	            "currencyCode": "GBP"
	          }
	        }, {
	          "IBAN": "HJ7635487853",
	          "name": "Obligations Account",
	          "balance": {
	            "amount": "75764.64",
	            "currencyCode": "GBP"
	          }
	        }, {
	          "IBAN": "TM514519240979",
	          "name": "Main Account",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "AUD"
	          }
	        }, {
	          "IBAN": "FR119340766811",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "AUD"
	          }
	        }]
	      }, {
	        "pairKey": "GBP/CAD",
	        "prevClose": 1.8353,
	        "open": 1.1483,
	        "isBuyEnabled": true,
	        "isSellEnabled": true,
	        "accounts": [{
	          "IBAN": "HG76354827764",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "87465.85",
	            "currencyCode": "GBP"
	          }
	        }, {
	          "IBAN": "HJ7635487853",
	          "name": "Obligations Account",
	          "balance": {
	            "amount": "75764.64",
	            "currencyCode": "GBP"
	          }
	        }, {
	          "IBAN": "MN1254740787123",
	          "name": "Savings",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "CAD"
	          }
	        }, {
	          "IBAN": "NM763798266398",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "101734.12",
	            "currencyCode": "CAD"
	          }
	        }]
	      }, {
	        "pairKey": "GBP/CHF",
	        "prevClose": 1.6378,
	        "open": 1.1249,
	        "isBuyEnabled": true,
	        "isSellEnabled": true,
	        "accounts": [{
	          "IBAN": "HG76354827764",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "87465.85",
	            "currencyCode": "GBP"
	          }
	        }, {
	          "IBAN": "HJ7635487853",
	          "name": "Obligations Account",
	          "balance": {
	            "amount": "75764.64",
	            "currencyCode": "GBP"
	          }
	        }, {
	          "IBAN": "GL585567292147",
	          "name": "Main Account",
	          "balance": {
	            "amount": "882502.61",
	            "currencyCode": "CHF"
	          }
	        }, {
	          "IBAN": "KL335015373671",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "774024.48",
	            "currencyCode": "CHF"
	          }
	        }]
	      }, {
	        "pairKey": "GBP/JPY",
	        "prevClose": 1.9661,
	        "open": 1.0808,
	        "isBuyEnabled": true,
	        "isSellEnabled": true,
	        "accounts": [{
	          "IBAN": "HG76354827764",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "87465.85",
	            "currencyCode": "GBP"
	          }
	        }, {
	          "IBAN": "HJ7635487853",
	          "name": "Obligations Account",
	          "balance": {
	            "amount": "75764.64",
	            "currencyCode": "GBP"
	          }
	        }, {
	          "IBAN": "BN87636398364",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "12040.14",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "KH764368756294",
	          "name": "Account",
	          "balance": {
	            "amount": "25117.35",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "NB76493398753",
	          "name": "Account",
	          "balance": {
	            "amount": "50550.21",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "MX74821826473",
	          "name": "Account",
	          "balance": {
	            "amount": "37382.07",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "FG62905329857",
	          "name": "Account",
	          "balance": {
	            "amount": "7520.17",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "HG749373193872",
	          "name": "Account",
	          "balance": {
	            "amount": "3150.57",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "NB648733184632",
	          "name": "Account",
	          "balance": {
	            "amount": "110450.87",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "TR284643185762",
	          "name": "Account",
	          "balance": {
	            "amount": "40760.67",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "MN784623198361",
	          "name": "Account",
	          "balance": {
	            "amount": "80120.45",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "HG759833192745",
	          "name": "Account",
	          "balance": {
	            "amount": "150.11",
	            "currencyCode": "JPY"
	          }
	        }]
	      }, {
	        "pairKey": "GBP/NZD",
	        "prevClose": 1.853,
	        "open": 1.6541,
	        "isBuyEnabled": false,
	        "isSellEnabled": false,
	        "accounts": [{
	          "IBAN": "HG76354827764",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "87465.85",
	            "currencyCode": "GBP"
	          }
	        }, {
	          "IBAN": "HJ7635487853",
	          "name": "Obligations Account",
	          "balance": {
	            "amount": "75764.64",
	            "currencyCode": "GBP"
	          }
	        }]
	      }, {
	        "pairKey": "GBP/USD",
	        "prevClose": 1.6523,
	        "open": 1.1367,
	        "isBuyEnabled": true,
	        "isSellEnabled": true,
	        "accounts": [{
	          "IBAN": "HG76354827764",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "87465.85",
	            "currencyCode": "GBP"
	          }
	        }, {
	          "IBAN": "HJ7635487853",
	          "name": "Obligations Account",
	          "balance": {
	            "amount": "75764.64",
	            "currencyCode": "GBP"
	          }
	        }, {
	          "IBAN": "NB647830587564",
	          "name": "Main Account",
	          "balance": {
	            "amount": "16492.43",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "TM230301954201",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "175616.71",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "KL461859983394",
	          "name": "Savings",
	          "balance": {
	            "amount": "528335.64",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "MX3897549998473",
	          "name": "Account",
	          "balance": {
	            "amount": "1387.63",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "FR294629948721",
	          "name": "Account",
	          "balance": {
	            "amount": "335.24",
	            "currencyCode": "USD"
	          }
	        }]
	      }, {
	        "pairKey": "NZD/CAD",
	        "prevClose": 1.1071,
	        "open": 1.1521,
	        "isBuyEnabled": false,
	        "isSellEnabled": false,
	        "accounts": [{
	          "IBAN": "MN1254740787123",
	          "name": "Savings",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "CAD"
	          }
	        }, {
	          "IBAN": "NM763798266398",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "101734.12",
	            "currencyCode": "CAD"
	          }
	        }]
	      }, {
	        "pairKey": "NZD/CHF",
	        "prevClose": 1.9662,
	        "open": 1.6132,
	        "isBuyEnabled": false,
	        "isSellEnabled": false,
	        "accounts": [{
	          "IBAN": "GL585567292147",
	          "name": "Main Account",
	          "balance": {
	            "amount": "882502.61",
	            "currencyCode": "CHF"
	          }
	        }, {
	          "IBAN": "KL335015373671",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "774024.48",
	            "currencyCode": "CHF"
	          }
	        }]
	      }, {
	        "pairKey": "NZD/JPY",
	        "prevClose": 1.016,
	        "open": 1.1891,
	        "isBuyEnabled": false,
	        "isSellEnabled": false,
	        "accounts": [{
	          "IBAN": "BN87636398364",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "12040.14",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "KH764368756294",
	          "name": "Account",
	          "balance": {
	            "amount": "25117.35",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "NB76493398753",
	          "name": "Account",
	          "balance": {
	            "amount": "50550.21",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "MX74821826473",
	          "name": "Account",
	          "balance": {
	            "amount": "37382.07",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "FG62905329857",
	          "name": "Account",
	          "balance": {
	            "amount": "7520.17",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "HG749373193872",
	          "name": "Account",
	          "balance": {
	            "amount": "3150.57",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "NB648733184632",
	          "name": "Account",
	          "balance": {
	            "amount": "110450.87",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "TR284643185762",
	          "name": "Account",
	          "balance": {
	            "amount": "40760.67",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "MN784623198361",
	          "name": "Account",
	          "balance": {
	            "amount": "80120.45",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "HG759833192745",
	          "name": "Account",
	          "balance": {
	            "amount": "150.11",
	            "currencyCode": "JPY"
	          }
	        }]
	      }, {
	        "pairKey": "NZD/USD",
	        "prevClose": 1.7699,
	        "open": 1.9246,
	        "isBuyEnabled": false,
	        "isSellEnabled": false,
	        "accounts": [{
	          "IBAN": "NB647830587564",
	          "name": "Main Account",
	          "balance": {
	            "amount": "16492.43",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "TM230301954201",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "175616.71",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "KL461859983394",
	          "name": "Savings",
	          "balance": {
	            "amount": "528335.64",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "MX3897549998473",
	          "name": "Account",
	          "balance": {
	            "amount": "1387.63",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "FR294629948721",
	          "name": "Account",
	          "balance": {
	            "amount": "335.24",
	            "currencyCode": "USD"
	          }
	        }]
	      }, {
	        "pairKey": "TRY/JPY",
	        "prevClose": 1.482,
	        "open": 1.4708,
	        "isBuyEnabled": false,
	        "isSellEnabled": false,
	        "accounts": [{
	          "IBAN": "BN87636398364",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "12040.14",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "KH764368756294",
	          "name": "Account",
	          "balance": {
	            "amount": "25117.35",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "NB76493398753",
	          "name": "Account",
	          "balance": {
	            "amount": "50550.21",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "MX74821826473",
	          "name": "Account",
	          "balance": {
	            "amount": "37382.07",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "FG62905329857",
	          "name": "Account",
	          "balance": {
	            "amount": "7520.17",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "HG749373193872",
	          "name": "Account",
	          "balance": {
	            "amount": "3150.57",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "NB648733184632",
	          "name": "Account",
	          "balance": {
	            "amount": "110450.87",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "TR284643185762",
	          "name": "Account",
	          "balance": {
	            "amount": "40760.67",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "MN784623198361",
	          "name": "Account",
	          "balance": {
	            "amount": "80120.45",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "HG759833192745",
	          "name": "Account",
	          "balance": {
	            "amount": "150.11",
	            "currencyCode": "JPY"
	          }
	        }]
	      }, {
	        "pairKey": "USD/CAD",
	        "prevClose": 1.0308,
	        "open": 1.2405,
	        "isBuyEnabled": true,
	        "isSellEnabled": true,
	        "accounts": [{
	          "IBAN": "NB647830587564",
	          "name": "Main Account",
	          "balance": {
	            "amount": "16492.43",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "TM230301954201",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "175616.71",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "KL461859983394",
	          "name": "Savings",
	          "balance": {
	            "amount": "528335.64",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "MX3897549998473",
	          "name": "Account",
	          "balance": {
	            "amount": "1387.63",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "FR294629948721",
	          "name": "Account",
	          "balance": {
	            "amount": "335.24",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "MN1254740787123",
	          "name": "Savings",
	          "balance": {
	            "amount": "0",
	            "currencyCode": "CAD"
	          }
	        }, {
	          "IBAN": "NM763798266398",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "101734.12",
	            "currencyCode": "CAD"
	          }
	        }]
	      }, {
	        "pairKey": "USD/CHF",
	        "prevClose": 1.8819,
	        "open": 1.2657,
	        "isBuyEnabled": false,
	        "isSellEnabled": true,
	        "accounts": [{
	          "IBAN": "NB647830587564",
	          "name": "Main Account",
	          "balance": {
	            "amount": "16492.43",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "TM230301954201",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "175616.71",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "KL461859983394",
	          "name": "Savings",
	          "balance": {
	            "amount": "528335.64",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "MX3897549998473",
	          "name": "Account",
	          "balance": {
	            "amount": "1387.63",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "FR294629948721",
	          "name": "Account",
	          "balance": {
	            "amount": "335.24",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "GL585567292147",
	          "name": "Main Account",
	          "balance": {
	            "amount": "882502.61",
	            "currencyCode": "CHF"
	          }
	        }, {
	          "IBAN": "KL335015373671",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "774024.48",
	            "currencyCode": "CHF"
	          }
	        }]
	      }, {
	        "pairKey": "USD/JPY",
	        "prevClose": 1.6529,
	        "open": 1.8276,
	        "isBuyEnabled": true,
	        "isSellEnabled": true,
	        "accounts": [{
	          "IBAN": "NB647830587564",
	          "name": "Main Account",
	          "balance": {
	            "amount": "16492.43",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "TM230301954201",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "175616.71",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "KL461859983394",
	          "name": "Savings",
	          "balance": {
	            "amount": "528335.64",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "MX3897549998473",
	          "name": "Account",
	          "balance": {
	            "amount": "1387.63",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "FR294629948721",
	          "name": "Account",
	          "balance": {
	            "amount": "335.24",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "BN87636398364",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "12040.14",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "KH764368756294",
	          "name": "Account",
	          "balance": {
	            "amount": "25117.35",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "NB76493398753",
	          "name": "Account",
	          "balance": {
	            "amount": "50550.21",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "MX74821826473",
	          "name": "Account",
	          "balance": {
	            "amount": "37382.07",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "FG62905329857",
	          "name": "Account",
	          "balance": {
	            "amount": "7520.17",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "HG749373193872",
	          "name": "Account",
	          "balance": {
	            "amount": "3150.57",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "NB648733184632",
	          "name": "Account",
	          "balance": {
	            "amount": "110450.87",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "TR284643185762",
	          "name": "Account",
	          "balance": {
	            "amount": "40760.67",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "MN784623198361",
	          "name": "Account",
	          "balance": {
	            "amount": "80120.45",
	            "currencyCode": "JPY"
	          }
	        }, {
	          "IBAN": "HG759833192745",
	          "name": "Account",
	          "balance": {
	            "amount": "150.11",
	            "currencyCode": "JPY"
	          }
	        }]
	      }, {
	        "pairKey": "USD/NOK",
	        "prevClose": 1.3125,
	        "open": 1.6162,
	        "isBuyEnabled": true,
	        "isSellEnabled": false,
	        "accounts": [{
	          "IBAN": "NB647830587564",
	          "name": "Main Account",
	          "balance": {
	            "amount": "16492.43",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "TM230301954201",
	          "name": "Bonds Account",
	          "balance": {
	            "amount": "175616.71",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "KL461859983394",
	          "name": "Savings",
	          "balance": {
	            "amount": "528335.64",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "MX3897549998473",
	          "name": "Account",
	          "balance": {
	            "amount": "1387.63",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "FR294629948721",
	          "name": "Account",
	          "balance": {
	            "amount": "335.24",
	            "currencyCode": "USD"
	          }
	        }, {
	          "IBAN": "HR849665508929",
	          "name": "Main Account",
	          "balance": {
	            "amount": "10000.00",
	            "currencyCode": "NOK"
	          }
	        }]
	      }],
	      "{version}/trading/currencyrate": [{
	        "pairKey": "AUD/CAD",
	        "price": 1.9438,
	        "change": -0.9802,
	        "changePct": 0.07,
	        "bid": 1.2234,
	        "ask": 1.8126,
	        "rateSell": 1.0847,
	        "rateBuy": 0.1188,
	        "ytdReturn": 0.13,
	        "wkRangeFrom": 0.3675,
	        "wkRangeTo": 1.9836,
	        "dayRangeFrom": 0.028,
	        "dayRangeTo": 1.6524
	      }, {
	        "pairKey": "EUR/GBP",
	        "price": 1.0582,
	        "change": -0.1273,
	        "changePct": -0.29,
	        "bid": 1.5105,
	        "ask": 1.1551,
	        "rateSell": 0.6587,
	        "rateBuy": 1.0849,
	        "ytdReturn": 0.44,
	        "wkRangeFrom": 0.0807,
	        "wkRangeTo": 1.2696,
	        "dayRangeFrom": 0.4754,
	        "dayRangeTo": 1.4791
	      }, {
	        "pairKey": "CHF/JPY",
	        "price": 1.7254,
	        "change": 0.4709,
	        "changePct": -0.52,
	        "bid": 1.7161,
	        "ask": 1.5531,
	        "rateSell": 0.7011,
	        "rateBuy": 0.0186,
	        "ytdReturn": 0.42,
	        "wkRangeFrom": 0.0358,
	        "wkRangeTo": 1.0432,
	        "dayRangeFrom": 0.3069,
	        "dayRangeTo": 1.1622
	      }, {
	        "pairKey": "AUD/CNH",
	        "price": 1.4875,
	        "change": 0.3475,
	        "changePct": 0.27,
	        "bid": 1.7235,
	        "ask": 1.5463,
	        "rateSell": 0.6012,
	        "rateBuy": 0.0287,
	        "ytdReturn": 0.31,
	        "wkRangeFrom": 0.0451,
	        "wkRangeTo": 1.0312,
	        "dayRangeFrom": 0.2068,
	        "dayRangeTo": 1.1512
	      }, {
	        "pairKey": "USD/CNH",
	        "price": 1.2517,
	        "change": -0.7849,
	        "changePct": 0.09,
	        "bid": 1.8886,
	        "ask": 1.344,
	        "rateSell": 0.8803,
	        "rateBuy": 1.0998,
	        "ytdReturn": 0.7,
	        "wkRangeFrom": 0.3711,
	        "wkRangeTo": 1.3747,
	        "dayRangeFrom": 0.3653,
	        "dayRangeTo": 1.2059
	      }, {
	        "pairKey": "NOK/NZD",
	        "price": 1.7179,
	        "change": 0.7085,
	        "changePct": -0.63,
	        "bid": 1.2668,
	        "ask": 1.0533,
	        "rateSell": 1.6277,
	        "rateBuy": 0.9225,
	        "ytdReturn": 0.11,
	        "wkRangeFrom": 0.2923,
	        "wkRangeTo": 1.409,
	        "dayRangeFrom": 0.1684,
	        "dayRangeTo": 1.6088
	      }, {
	        "pairKey": "SEK/TRY",
	        "price": 1.3033,
	        "change": -0.953,
	        "changePct": 0.21,
	        "bid": 1.9122,
	        "ask": 1.2369,
	        "rateSell": 1.146,
	        "rateBuy": 0.6263,
	        "ytdReturn": 0.58,
	        "wkRangeFrom": 0.7257,
	        "wkRangeTo": 1.7473,
	        "dayRangeFrom": 0.8523,
	        "dayRangeTo": 1.4839
	      }, {
	        "pairKey": "MXN/TRY",
	        "price": 1.979,
	        "change": 0.5272,
	        "changePct": -0.49,
	        "bid": 1.7585,
	        "ask": 1.6392,
	        "rateSell": 1.7809,
	        "rateBuy": 1.7433,
	        "ytdReturn": 0.63,
	        "wkRangeFrom": 0.2783,
	        "wkRangeTo": 1.2404,
	        "dayRangeFrom": 0.8739,
	        "dayRangeTo": 1.8219
	      }, {
	        "pairKey": "AUD/CHF",
	        "price": 1.1881,
	        "change": -0.6139,
	        "changePct": -0.15,
	        "bid": 1.2485,
	        "ask": 1.6611,
	        "rateSell": 1.8105,
	        "rateBuy": 1.6393,
	        "ytdReturn": 0.64,
	        "wkRangeFrom": 0.4117,
	        "wkRangeTo": 1.1086,
	        "dayRangeFrom": 0.5801,
	        "dayRangeTo": 1.7804
	      }, {
	        "pairKey": "AUD/JPY",
	        "price": 1.78,
	        "change": -0.2106,
	        "changePct": 0.4,
	        "bid": 1.6976,
	        "ask": 1.2415,
	        "rateSell": 1.8123,
	        "rateBuy": 1.2749,
	        "ytdReturn": 0.92,
	        "wkRangeFrom": 0.9562,
	        "wkRangeTo": 1.3921,
	        "dayRangeFrom": 0.3007,
	        "dayRangeTo": 1.9307
	      }, {
	        "pairKey": "AUD/NZD",
	        "price": 1.487,
	        "change": 0.8609,
	        "changePct": -0.48,
	        "bid": 1.8252,
	        "ask": 1.68,
	        "rateSell": 0.8255,
	        "rateBuy": 0.7922,
	        "ytdReturn": 0.76,
	        "wkRangeFrom": 0.1343,
	        "wkRangeTo": 1.8646,
	        "dayRangeFrom": 0.7689,
	        "dayRangeTo": 1.9837
	      }, {
	        "pairKey": "AUD/USD",
	        "price": 1.1267,
	        "change": 0.3327,
	        "changePct": -0.66,
	        "bid": 1.801,
	        "ask": 1.2506,
	        "rateSell": 0.9182,
	        "rateBuy": 0.8885,
	        "ytdReturn": 0.46,
	        "wkRangeFrom": 0.267,
	        "wkRangeTo": 1.8606,
	        "dayRangeFrom": 0.7152,
	        "dayRangeTo": 1.5886
	      }, {
	        "pairKey": "CAD/CHF",
	        "price": 1.949,
	        "change": 0.6404,
	        "changePct": -0.91,
	        "bid": 1.0093,
	        "ask": 1.2128,
	        "rateSell": 0.931,
	        "rateBuy": 0.2371,
	        "ytdReturn": 0.12,
	        "wkRangeFrom": 0.6567,
	        "wkRangeTo": 1.6484,
	        "dayRangeFrom": 0.4722,
	        "dayRangeTo": 1.5944
	      }, {
	        "pairKey": "CAD/JPY",
	        "price": 1.6646,
	        "change": -0.8607,
	        "changePct": -0.63,
	        "bid": 1.6431,
	        "ask": 1.1411,
	        "rateSell": 0.9855,
	        "rateBuy": 1.4742,
	        "ytdReturn": 0.79,
	        "wkRangeFrom": 0.1274,
	        "wkRangeTo": 1.8871,
	        "dayRangeFrom": 0.1563,
	        "dayRangeTo": 1.6692
	      }, {
	        "pairKey": "EUR/AUD",
	        "price": 1.8202,
	        "change": 0.0145,
	        "changePct": 0.22,
	        "bid": 1.657,
	        "ask": 1.163,
	        "rateSell": 1.4477,
	        "rateBuy": 1.941,
	        "ytdReturn": 0.96,
	        "wkRangeFrom": 0.1219,
	        "wkRangeTo": 1.1691,
	        "dayRangeFrom": 0.6233,
	        "dayRangeTo": 1.5687
	      }, {
	        "pairKey": "EUR/CAD",
	        "price": 1.51,
	        "change": 0.2291,
	        "changePct": 0.49,
	        "bid": 1.8418,
	        "ask": 1.6458,
	        "rateSell": 1.752,
	        "rateBuy": 1.2575,
	        "ytdReturn": 0.74,
	        "wkRangeFrom": 0.6695,
	        "wkRangeTo": 1.3682,
	        "dayRangeFrom": 0.3905,
	        "dayRangeTo": 1.4167
	      }, {
	        "pairKey": "EUR/CHF",
	        "price": 1.6062,
	        "change": -0.1531,
	        "changePct": -0.72,
	        "bid": 1.6414,
	        "ask": 1.1936,
	        "rateSell": 1.7398,
	        "rateBuy": 0.2263,
	        "ytdReturn": 0.79,
	        "wkRangeFrom": 0.3935,
	        "wkRangeTo": 1.7999,
	        "dayRangeFrom": 0.1173,
	        "dayRangeTo": 1.6603
	      }, {
	        "pairKey": "EUR/JPY",
	        "price": 1.5298,
	        "change": -0.2608,
	        "changePct": 0.27,
	        "bid": 1.9499,
	        "ask": 1.5734,
	        "rateSell": 0.7628,
	        "rateBuy": 1.6503,
	        "ytdReturn": 0.37,
	        "wkRangeFrom": 0.1506,
	        "wkRangeTo": 1.0868,
	        "dayRangeFrom": 0.9701,
	        "dayRangeTo": 1.0123
	      }, {
	        "pairKey": "EUR/NZD",
	        "price": 1.2089,
	        "change": -0.9473,
	        "changePct": -0.6,
	        "bid": 1.5788,
	        "ask": 1.9393,
	        "rateSell": 1.0492,
	        "rateBuy": 1.2104,
	        "ytdReturn": 0.11,
	        "wkRangeFrom": 0.0014,
	        "wkRangeTo": 1.1856,
	        "dayRangeFrom": 0.9541,
	        "dayRangeTo": 1.0744
	      }, {
	        "pairKey": "EUR/TRY",
	        "price": 1.3329,
	        "change": 0.854,
	        "changePct": -0.41,
	        "bid": 1.4728,
	        "ask": 1.2934,
	        "rateSell": 0.3789,
	        "rateBuy": 0.5512,
	        "ytdReturn": 0.78,
	        "wkRangeFrom": 0.0132,
	        "wkRangeTo": 1.6509,
	        "dayRangeFrom": 0.7773,
	        "dayRangeTo": 1.3028
	      }, {
	        "pairKey": "EUR/USD",
	        "price": 1.2434,
	        "change": 0.0561,
	        "changePct": 0.48,
	        "bid": 1.1852,
	        "ask": 1.4451,
	        "rateSell": 0.8044,
	        "rateBuy": 1.7227,
	        "ytdReturn": 0.13,
	        "wkRangeFrom": 0.653,
	        "wkRangeTo": 1.5039,
	        "dayRangeFrom": 0.8468,
	        "dayRangeTo": 1.7595
	      }, {
	        "pairKey": "GBP/AUD",
	        "price": 1.9308,
	        "change": -0.8977,
	        "changePct": 0.34,
	        "bid": 1.9753,
	        "ask": 1.2177,
	        "rateSell": 0.3134,
	        "rateBuy": 0.8379,
	        "ytdReturn": 0.66,
	        "wkRangeFrom": 0.9249,
	        "wkRangeTo": 1.8425,
	        "dayRangeFrom": 0.3295,
	        "dayRangeTo": 1.3255
	      }, {
	        "pairKey": "GBP/CAD",
	        "price": 1.7665,
	        "change": 0.9445,
	        "changePct": 0.21,
	        "bid": 1.6695,
	        "ask": 1.2122,
	        "rateSell": 1.8466,
	        "rateBuy": 1.0291,
	        "ytdReturn": 0.32,
	        "wkRangeFrom": 0.3046,
	        "wkRangeTo": 1.033,
	        "dayRangeFrom": 0.4324,
	        "dayRangeTo": 1.7964
	      }, {
	        "pairKey": "GBP/CHF",
	        "price": 1.786,
	        "change": -0.7054,
	        "changePct": 0.63,
	        "bid": 1.991,
	        "ask": 1.8592,
	        "rateSell": 0.4432,
	        "rateBuy": 1.6889,
	        "ytdReturn": 0.42,
	        "wkRangeFrom": 0.9076,
	        "wkRangeTo": 1.069,
	        "dayRangeFrom": 0.4892,
	        "dayRangeTo": 1.9916
	      }, {
	        "pairKey": "GBP/JPY",
	        "price": 1.6573,
	        "change": 0.0495,
	        "changePct": 0.61,
	        "bid": 1.9297,
	        "ask": 1.7053,
	        "rateSell": 1.1719,
	        "rateBuy": 1.2074,
	        "ytdReturn": 0.24,
	        "wkRangeFrom": 0.9044,
	        "wkRangeTo": 1.0686,
	        "dayRangeFrom": 0.6441,
	        "dayRangeTo": 1.0788
	      }, {
	        "pairKey": "GBP/NZD",
	        "price": 1.8569,
	        "change": -0.3582,
	        "changePct": 0.13,
	        "bid": 1.8365,
	        "ask": 1.6353,
	        "rateSell": 1.0236,
	        "rateBuy": 1.5201,
	        "ytdReturn": 0.69,
	        "wkRangeFrom": 0.2956,
	        "wkRangeTo": 1.1069,
	        "dayRangeFrom": 0.2337,
	        "dayRangeTo": 1.3236
	      }, {
	        "pairKey": "GBP/USD",
	        "price": 1.6111,
	        "change": -0.9372,
	        "changePct": 0.33,
	        "bid": 1.8688,
	        "ask": 1.4312,
	        "rateSell": 0.0858,
	        "rateBuy": 1.3712,
	        "ytdReturn": 0.91,
	        "wkRangeFrom": 0.2671,
	        "wkRangeTo": 1.3366,
	        "dayRangeFrom": 0.1925,
	        "dayRangeTo": 1.3391
	      }, {
	        "pairKey": "NZD/CAD",
	        "price": 1.907,
	        "change": 0.6857,
	        "changePct": 0.03,
	        "bid": 1.028,
	        "ask": 1.3384,
	        "rateSell": 1.9368,
	        "rateBuy": 1.7129,
	        "ytdReturn": 0.38,
	        "wkRangeFrom": 0.7846,
	        "wkRangeTo": 1.5615,
	        "dayRangeFrom": 0.0765,
	        "dayRangeTo": 1.9515
	      }, {
	        "pairKey": "NZD/CHF",
	        "price": 1.4683,
	        "change": -0.1949,
	        "changePct": 0.36,
	        "bid": 1.716,
	        "ask": 1.927,
	        "rateSell": 0.2712,
	        "rateBuy": 0.3087,
	        "ytdReturn": 0.55,
	        "wkRangeFrom": 0.0148,
	        "wkRangeTo": 1.201,
	        "dayRangeFrom": 0.5665,
	        "dayRangeTo": 1.575
	      }, {
	        "pairKey": "NZD/JPY",
	        "price": 1.9366,
	        "change": 0.6054,
	        "changePct": 0.66,
	        "bid": 1.1144,
	        "ask": 1.2932,
	        "rateSell": 0.6349,
	        "rateBuy": 1.2064,
	        "ytdReturn": 0.84,
	        "wkRangeFrom": 0.1851,
	        "wkRangeTo": 1.4921,
	        "dayRangeFrom": 0.8856,
	        "dayRangeTo": 1.0469
	      }, {
	        "pairKey": "NZD/USD",
	        "price": 1.7726,
	        "change": -0.908,
	        "changePct": 0.61,
	        "bid": 1.566,
	        "ask": 1.9327,
	        "rateSell": 0.5231,
	        "rateBuy": 0.7962,
	        "ytdReturn": 0.49,
	        "wkRangeFrom": 0.7819,
	        "wkRangeTo": 1.2752,
	        "dayRangeFrom": 0.1121,
	        "dayRangeTo": 1.0402
	      }, {
	        "pairKey": "TRY/JPY",
	        "price": 1.2318,
	        "change": 0.3884,
	        "changePct": -0.13,
	        "bid": 1.6453,
	        "ask": 1.63,
	        "rateSell": 0.9784,
	        "rateBuy": 1.0219,
	        "ytdReturn": 0.02,
	        "wkRangeFrom": 0.726,
	        "wkRangeTo": 1.9098,
	        "dayRangeFrom": 0.8867,
	        "dayRangeTo": 1.2575
	      }, {
	        "pairKey": "USD/CAD",
	        "price": 1.942,
	        "change": -0.4345,
	        "changePct": -0.14,
	        "bid": 1.7957,
	        "ask": 1.5261,
	        "rateSell": 1.3141,
	        "rateBuy": 1.9961,
	        "ytdReturn": 0.28,
	        "wkRangeFrom": 0.3519,
	        "wkRangeTo": 1.4187,
	        "dayRangeFrom": 0.1407,
	        "dayRangeTo": 1.5005
	      }, {
	        "pairKey": "USD/CHF",
	        "price": 1.6736,
	        "change": 0.6802,
	        "changePct": 0.17,
	        "bid": 1.0171,
	        "ask": 1.9243,
	        "rateSell": 0.3979,
	        "rateBuy": 1.9181,
	        "ytdReturn": 0.57,
	        "wkRangeFrom": 0.0181,
	        "wkRangeTo": 1.1457,
	        "dayRangeFrom": 0.6075,
	        "dayRangeTo": 1.3409
	      }, {
	        "pairKey": "USD/JPY",
	        "price": 1.3299,
	        "change": 0.1482,
	        "changePct": -0.25,
	        "bid": 1.1672,
	        "ask": 1.3142,
	        "rateSell": 1.5062,
	        "rateBuy": 1.3882,
	        "ytdReturn": 0.09,
	        "wkRangeFrom": 0.6214,
	        "wkRangeTo": 1.5894,
	        "dayRangeFrom": 0.9017,
	        "dayRangeTo": 1.369
	      }, {
	        "pairKey": "USD/NOK",
	        "price": 1.6196,
	        "change": -0.88,
	        "changePct": 0.02,
	        "bid": 1.451,
	        "ask": 1.4267,
	        "rateSell": 1.5326,
	        "rateBuy": 1.7603,
	        "ytdReturn": 0.78,
	        "wkRangeFrom": 0.1049,
	        "wkRangeTo": 1.7781,
	        "dayRangeFrom": 0.853,
	        "dayRangeTo": 1.8801
	      }]
	    };
	
	    bbStorage.subscribe(STORAGE_KEY, function (newState) {
	      state = newState;
	    });
	
	    var persistState = function persistState(newState) {
	      bbStorage.setItem(STORAGE_KEY, newState);
	    };
	
	    var responses = {
	
	      getTradingCurrencypair: [{ "status": 200, "data": [{ "pairKey": "AUD/CAD", "prevClose": 1.591, "open": 1.6926, "isBuyEnabled": true, "isSellEnabled": false, "accounts": [{ "IBAN": "TM514519240979", "name": "Main Account", "balance": { "amount": "0", "currencyCode": "AUD" } }, { "IBAN": "FR119340766811", "name": "Bonds Account", "balance": { "amount": "0", "currencyCode": "AUD" } }, { "IBAN": "MN1254740787123", "name": "Savings", "balance": { "amount": "0", "currencyCode": "CAD" } }, { "IBAN": "NM763798266398", "name": "Bonds Account", "balance": { "amount": "101734.12", "currencyCode": "CAD" } }] }, { "pairKey": "EUR/GBP", "prevClose": 1.3527, "open": 1.4945, "isBuyEnabled": true, "isSellEnabled": true, "accounts": [{ "IBAN": "IP530801010806", "name": "Main Account", "balance": { "amount": "702551.42", "currencyCode": "EUR" } }, { "IBAN": "AX587548273605", "name": "Bonds Account", "balance": { "amount": "854585.83", "currencyCode": "EUR" } }, { "IBAN": "HG76354827764", "name": "Savings", "balance": { "amount": "237685.13", "currencyCode": "EUR" } }, { "IBAN": "HG76354827764", "name": "Bonds Account", "balance": { "amount": "87465.85", "currencyCode": "GBP" } }, { "IBAN": "HJ7635487853", "name": "Obligations Account", "balance": { "amount": "75764.64", "currencyCode": "GBP" } }] }, { "pairKey": "AUD/CNH", "prevClose": 1.3467, "open": 1.1264, "isBuyEnabled": false, "isSellEnabled": false, "accounts": [{ "IBAN": "TM514519240979", "name": "Main Account", "balance": { "amount": "0", "currencyCode": "AUD" } }, { "IBAN": "FR119340766811", "name": "Bonds Account", "balance": { "amount": "0", "currencyCode": "AUD" } }, { "IBAN": "BN814639938764", "name": "Account", "balance": { "amount": "0", "currencyCode": "CNH" } }, { "IBAN": "KH74653987352", "name": "Account", "balance": { "amount": "0", "currencyCode": "CNH" } }] }, { "pairKey": "CHF/JPY", "prevClose": 1.6537, "open": 1.8946, "isBuyEnabled": true, "isSellEnabled": true, "accounts": [{ "IBAN": "GL585567292147", "name": "Main Account", "balance": { "amount": "882502.61", "currencyCode": "CHF" } }, { "IBAN": "KL335015373671", "name": "Bonds Account", "balance": { "amount": "774024.48", "currencyCode": "CHF" } }, { "IBAN": "BN87636398364", "name": "Bonds Account", "balance": { "amount": "12040.14", "currencyCode": "JPY" } }, { "IBAN": "KH764368756294", "name": "Account", "balance": { "amount": "25117.35", "currencyCode": "JPY" } }, { "IBAN": "NB76493398753", "name": "Account", "balance": { "amount": "50550.21", "currencyCode": "JPY" } }, { "IBAN": "MX74821826473", "name": "Account", "balance": { "amount": "37382.07", "currencyCode": "JPY" } }, { "IBAN": "FG62905329857", "name": "Account", "balance": { "amount": "7520.17", "currencyCode": "JPY" } }, { "IBAN": "HG749373193872", "name": "Account", "balance": { "amount": "3150.57", "currencyCode": "JPY" } }, { "IBAN": "NB648733184632", "name": "Account", "balance": { "amount": "110450.87", "currencyCode": "JPY" } }, { "IBAN": "TR284643185762", "name": "Account", "balance": { "amount": "40760.67", "currencyCode": "JPY" } }, { "IBAN": "MN784623198361", "name": "Account", "balance": { "amount": "80120.45", "currencyCode": "JPY" } }, { "IBAN": "HG759833192745", "name": "Account", "balance": { "amount": "150.11", "currencyCode": "JPY" } }] }, { "pairKey": "USD/CNH", "prevClose": 1.1422, "open": 1.9032, "isBuyEnabled": false, "isSellEnabled": true, "accounts": [{ "IBAN": "NB647830587564", "name": "Main Account", "balance": { "amount": "16492.43", "currencyCode": "USD" } }, { "IBAN": "TM230301954201", "name": "Bonds Account", "balance": { "amount": "175616.71", "currencyCode": "USD" } }, { "IBAN": "KL461859983394", "name": "Savings", "balance": { "amount": "528335.64", "currencyCode": "USD" } }, { "IBAN": "MX3897549998473", "name": "Account", "balance": { "amount": "1387.63", "currencyCode": "USD" } }, { "IBAN": "FR294629948721", "name": "Account", "balance": { "amount": "335.24", "currencyCode": "USD" } }, { "IBAN": "BN814639938764", "name": "Account", "balance": { "amount": "0", "currencyCode": "CNH" } }, { "IBAN": "KH74653987352", "name": "Account", "balance": { "amount": "0", "currencyCode": "CNH" } }] }, { "pairKey": "NOK/NZD", "prevClose": 1.3128, "open": 1.0846, "isBuyEnabled": false, "isSellEnabled": false, "accounts": [{ "IBAN": "HR849665508929", "name": "Main Account", "balance": { "amount": "10000.00", "currencyCode": "NOK" } }] }, { "pairKey": "SEK/TRY", "prevClose": 1.6971, "open": 1.2112, "isBuyEnabled": false, "isSellEnabled": false, "accounts": [{ "IBAN": "FR684583630314", "name": "Main Account", "balance": { "amount": "0", "currencyCode": "SEK" } }] }, { "pairKey": "MXN/TRY", "prevClose": 1.8517, "open": 1.679, "isBuyEnabled": false, "isSellEnabled": false, "accounts": [] }, { "pairKey": "AUD/CHF", "prevClose": 1.8622, "open": 1.2515, "isBuyEnabled": true, "isSellEnabled": false, "accounts": [{ "IBAN": "TM514519240979", "name": "Main Account", "balance": { "amount": "0", "currencyCode": "AUD" } }, { "IBAN": "FR119340766811", "name": "Bonds Account", "balance": { "amount": "0", "currencyCode": "AUD" } }, { "IBAN": "GL585567292147", "name": "Main Account", "balance": { "amount": "882502.61", "currencyCode": "CHF" } }, { "IBAN": "KL335015373671", "name": "Bonds Account", "balance": { "amount": "774024.48", "currencyCode": "CHF" } }] }, { "pairKey": "AUD/JPY", "prevClose": 1.2262, "open": 1.8924, "isBuyEnabled": true, "isSellEnabled": false, "accounts": [{ "IBAN": "TM514519240979", "name": "Main Account", "balance": { "amount": "0", "currencyCode": "AUD" } }, { "IBAN": "FR119340766811", "name": "Bonds Account", "balance": { "amount": "0", "currencyCode": "AUD" } }, { "IBAN": "BN87636398364", "name": "Bonds Account", "balance": { "amount": "12040.14", "currencyCode": "JPY" } }, { "IBAN": "KH764368756294", "name": "Account", "balance": { "amount": "25117.35", "currencyCode": "JPY" } }, { "IBAN": "NB76493398753", "name": "Account", "balance": { "amount": "50550.21", "currencyCode": "JPY" } }, { "IBAN": "MX74821826473", "name": "Account", "balance": { "amount": "37382.07", "currencyCode": "JPY" } }, { "IBAN": "FG62905329857", "name": "Account", "balance": { "amount": "7520.17", "currencyCode": "JPY" } }, { "IBAN": "HG749373193872", "name": "Account", "balance": { "amount": "3150.57", "currencyCode": "JPY" } }, { "IBAN": "NB648733184632", "name": "Account", "balance": { "amount": "110450.87", "currencyCode": "JPY" } }, { "IBAN": "TR284643185762", "name": "Account", "balance": { "amount": "40760.67", "currencyCode": "JPY" } }, { "IBAN": "MN784623198361", "name": "Account", "balance": { "amount": "80120.45", "currencyCode": "JPY" } }, { "IBAN": "HG759833192745", "name": "Account", "balance": { "amount": "150.11", "currencyCode": "JPY" } }] }, { "pairKey": "AUD/NZD", "prevClose": 1.1126, "open": 1.5407, "isBuyEnabled": false, "isSellEnabled": false, "accounts": [{ "IBAN": "TM514519240979", "name": "Main Account", "balance": { "amount": "0", "currencyCode": "AUD" } }, { "IBAN": "FR119340766811", "name": "Bonds Account", "balance": { "amount": "0", "currencyCode": "AUD" } }] }, { "pairKey": "AUD/USD", "prevClose": 1.3973, "open": 1.7087, "isBuyEnabled": true, "isSellEnabled": false, "accounts": [{ "IBAN": "TM514519240979", "name": "Main Account", "balance": { "amount": "0", "currencyCode": "AUD" } }, { "IBAN": "FR119340766811", "name": "Bonds Account", "balance": { "amount": "0", "currencyCode": "AUD" } }, { "IBAN": "NB647830587564", "name": "Main Account", "balance": { "amount": "16492.43", "currencyCode": "USD" } }, { "IBAN": "TM230301954201", "name": "Bonds Account", "balance": { "amount": "175616.71", "currencyCode": "USD" } }, { "IBAN": "KL461859983394", "name": "Savings", "balance": { "amount": "528335.64", "currencyCode": "USD" } }, { "IBAN": "MX3897549998473", "name": "Account", "balance": { "amount": "1387.63", "currencyCode": "USD" } }, { "IBAN": "FR294629948721", "name": "Account", "balance": { "amount": "335.24", "currencyCode": "USD" } }] }, { "pairKey": "CAD/CHF", "prevClose": 1.4997, "open": 1.8867, "isBuyEnabled": true, "isSellEnabled": true, "accounts": [{ "IBAN": "MN1254740787123", "name": "Savings", "balance": { "amount": "0", "currencyCode": "CAD" } }, { "IBAN": "NM763798266398", "name": "Bonds Account", "balance": { "amount": "101734.12", "currencyCode": "CAD" } }, { "IBAN": "GL585567292147", "name": "Main Account", "balance": { "amount": "882502.61", "currencyCode": "CHF" } }, { "IBAN": "KL335015373671", "name": "Bonds Account", "balance": { "amount": "774024.48", "currencyCode": "CHF" } }] }, { "pairKey": "CAD/JPY", "prevClose": 1.6318, "open": 1.4413, "isBuyEnabled": true, "isSellEnabled": true, "accounts": [{ "IBAN": "MN1254740787123", "name": "Savings", "balance": { "amount": "0", "currencyCode": "CAD" } }, { "IBAN": "NM763798266398", "name": "Bonds Account", "balance": { "amount": "101734.12", "currencyCode": "CAD" } }, { "IBAN": "BN87636398364", "name": "Bonds Account", "balance": { "amount": "12040.14", "currencyCode": "JPY" } }, { "IBAN": "KH764368756294", "name": "Account", "balance": { "amount": "25117.35", "currencyCode": "JPY" } }, { "IBAN": "NB76493398753", "name": "Account", "balance": { "amount": "50550.21", "currencyCode": "JPY" } }, { "IBAN": "MX74821826473", "name": "Account", "balance": { "amount": "37382.07", "currencyCode": "JPY" } }, { "IBAN": "FG62905329857", "name": "Account", "balance": { "amount": "7520.17", "currencyCode": "JPY" } }, { "IBAN": "HG749373193872", "name": "Account", "balance": { "amount": "3150.57", "currencyCode": "JPY" } }, { "IBAN": "NB648733184632", "name": "Account", "balance": { "amount": "110450.87", "currencyCode": "JPY" } }, { "IBAN": "TR284643185762", "name": "Account", "balance": { "amount": "40760.67", "currencyCode": "JPY" } }, { "IBAN": "MN784623198361", "name": "Account", "balance": { "amount": "80120.45", "currencyCode": "JPY" } }, { "IBAN": "HG759833192745", "name": "Account", "balance": { "amount": "150.11", "currencyCode": "JPY" } }] }, { "pairKey": "EUR/AUD", "prevClose": 1.7953, "open": 1.1315, "isBuyEnabled": false, "isSellEnabled": true, "accounts": [{ "IBAN": "IP530801010806", "name": "Main Account", "balance": { "amount": "702551.42", "currencyCode": "EUR" } }, { "IBAN": "AX587548273605", "name": "Bonds Account", "balance": { "amount": "854585.83", "currencyCode": "EUR" } }, { "IBAN": "HG76354827764", "name": "Savings", "balance": { "amount": "237685.13", "currencyCode": "EUR" } }, { "IBAN": "TM514519240979", "name": "Main Account", "balance": { "amount": "0", "currencyCode": "AUD" } }, { "IBAN": "FR119340766811", "name": "Bonds Account", "balance": { "amount": "0", "currencyCode": "AUD" } }] }, { "pairKey": "EUR/CAD", "prevClose": 1.729, "open": 1.9705, "isBuyEnabled": true, "isSellEnabled": true, "accounts": [{ "IBAN": "IP530801010806", "name": "Main Account", "balance": { "amount": "702551.42", "currencyCode": "EUR" } }, { "IBAN": "AX587548273605", "name": "Bonds Account", "balance": { "amount": "854585.83", "currencyCode": "EUR" } }, { "IBAN": "HG76354827764", "name": "Savings", "balance": { "amount": "237685.13", "currencyCode": "EUR" } }, { "IBAN": "MN1254740787123", "name": "Savings", "balance": { "amount": "0", "currencyCode": "CAD" } }, { "IBAN": "NM763798266398", "name": "Bonds Account", "balance": { "amount": "101734.12", "currencyCode": "CAD" } }] }, { "pairKey": "EUR/CHF", "prevClose": 1.8366, "open": 1.1452, "isBuyEnabled": true, "isSellEnabled": true, "accounts": [{ "IBAN": "IP530801010806", "name": "Main Account", "balance": { "amount": "702551.42", "currencyCode": "EUR" } }, { "IBAN": "AX587548273605", "name": "Bonds Account", "balance": { "amount": "854585.83", "currencyCode": "EUR" } }, { "IBAN": "HG76354827764", "name": "Savings", "balance": { "amount": "237685.13", "currencyCode": "EUR" } }, { "IBAN": "GL585567292147", "name": "Main Account", "balance": { "amount": "882502.61", "currencyCode": "CHF" } }, { "IBAN": "KL335015373671", "name": "Bonds Account", "balance": { "amount": "774024.48", "currencyCode": "CHF" } }] }, { "pairKey": "EUR/JPY", "prevClose": 1.0457, "open": 1.6756, "isBuyEnabled": true, "isSellEnabled": true, "accounts": [{ "IBAN": "VO513653008917", "name": "Main Account", "balance": { "amount": "745349.03", "currencyCode": "EUR" } }, { "IBAN": "VY223164828286", "name": "Bonds Account", "balance": { "amount": "270954.65", "currencyCode": "EUR" } }, { "IBAN": "BN87636398364", "name": "Bonds Account", "balance": { "amount": "12040.14", "currencyCode": "JPY" } }, { "IBAN": "KH764368756294", "name": "Account", "balance": { "amount": "25117.35", "currencyCode": "JPY" } }, { "IBAN": "NB76493398753", "name": "Account", "balance": { "amount": "50550.21", "currencyCode": "JPY" } }, { "IBAN": "MX74821826473", "name": "Account", "balance": { "amount": "37382.07", "currencyCode": "JPY" } }, { "IBAN": "FG62905329857", "name": "Account", "balance": { "amount": "7520.17", "currencyCode": "JPY" } }, { "IBAN": "HG749373193872", "name": "Account", "balance": { "amount": "3150.57", "currencyCode": "JPY" } }, { "IBAN": "NB648733184632", "name": "Account", "balance": { "amount": "110450.87", "currencyCode": "JPY" } }, { "IBAN": "TR284643185762", "name": "Account", "balance": { "amount": "40760.67", "currencyCode": "JPY" } }, { "IBAN": "MN784623198361", "name": "Account", "balance": { "amount": "80120.45", "currencyCode": "JPY" } }, { "IBAN": "HG759833192745", "name": "Account", "balance": { "amount": "150.11", "currencyCode": "JPY" } }] }, { "pairKey": "EUR/NZD", "prevClose": 1.0123, "open": 1.4254, "isBuyEnabled": false, "isSellEnabled": false, "accounts": [{ "IBAN": "GV466050307380", "name": "Main Account", "balance": { "amount": "886209.62", "currencyCode": "EUR" } }, { "IBAN": "DR330437502490", "name": "Bonds Account", "balance": { "amount": "281371.28", "currencyCode": "EUR" } }] }, { "pairKey": "EUR/TRY", "prevClose": 1.502, "open": 1.4966, "isBuyEnabled": false, "isSellEnabled": false, "accounts": [{ "IBAN": "BT070739687682", "name": "Main Account", "balance": { "amount": "950781.62", "currencyCode": "EUR" } }, { "IBAN": "OB463642446586", "name": "Bonds Account", "balance": { "amount": "647652.51", "currencyCode": "EUR" } }, { "IBAN": "OS242740623874", "name": "Savings", "balance": { "amount": "561396.78", "currencyCode": "EUR" } }] }, { "pairKey": "EUR/USD", "prevClose": 1.8152, "open": 1.7258, "isBuyEnabled": true, "isSellEnabled": true, "accounts": [{ "IBAN": "RI649944442350", "name": "Main Account", "balance": { "amount": "552317.28", "currencyCode": "EUR" } }, { "IBAN": "FW892849685711", "name": "Bonds Account", "balance": { "amount": "892836.42", "currencyCode": "EUR" } }, { "IBAN": "SA912694816846", "name": "Savings", "balance": { "amount": "272308.56", "currencyCode": "EUR" } }, { "IBAN": "NB647830587564", "name": "Main Account", "balance": { "amount": "16492.43", "currencyCode": "USD" } }, { "IBAN": "TM230301954201", "name": "Bonds Account", "balance": { "amount": "175616.71", "currencyCode": "USD" } }, { "IBAN": "KL461859983394", "name": "Savings", "balance": { "amount": "528335.64", "currencyCode": "USD" } }, { "IBAN": "MX3897549998473", "name": "Account", "balance": { "amount": "1387.63", "currencyCode": "USD" } }, { "IBAN": "FR294629948721", "name": "Account", "balance": { "amount": "335.24", "currencyCode": "USD" } }] }, { "pairKey": "GBP/AUD", "prevClose": 1.6281, "open": 1.7056, "isBuyEnabled": false, "isSellEnabled": true, "accounts": [{ "IBAN": "HG76354827764", "name": "Bonds Account", "balance": { "amount": "87465.85", "currencyCode": "GBP" } }, { "IBAN": "HJ7635487853", "name": "Obligations Account", "balance": { "amount": "75764.64", "currencyCode": "GBP" } }, { "IBAN": "TM514519240979", "name": "Main Account", "balance": { "amount": "0", "currencyCode": "AUD" } }, { "IBAN": "FR119340766811", "name": "Bonds Account", "balance": { "amount": "0", "currencyCode": "AUD" } }] }, { "pairKey": "GBP/CAD", "prevClose": 1.8353, "open": 1.1483, "isBuyEnabled": true, "isSellEnabled": true, "accounts": [{ "IBAN": "HG76354827764", "name": "Bonds Account", "balance": { "amount": "87465.85", "currencyCode": "GBP" } }, { "IBAN": "HJ7635487853", "name": "Obligations Account", "balance": { "amount": "75764.64", "currencyCode": "GBP" } }, { "IBAN": "MN1254740787123", "name": "Savings", "balance": { "amount": "0", "currencyCode": "CAD" } }, { "IBAN": "NM763798266398", "name": "Bonds Account", "balance": { "amount": "101734.12", "currencyCode": "CAD" } }] }, { "pairKey": "GBP/CHF", "prevClose": 1.6378, "open": 1.1249, "isBuyEnabled": true, "isSellEnabled": true, "accounts": [{ "IBAN": "HG76354827764", "name": "Bonds Account", "balance": { "amount": "87465.85", "currencyCode": "GBP" } }, { "IBAN": "HJ7635487853", "name": "Obligations Account", "balance": { "amount": "75764.64", "currencyCode": "GBP" } }, { "IBAN": "GL585567292147", "name": "Main Account", "balance": { "amount": "882502.61", "currencyCode": "CHF" } }, { "IBAN": "KL335015373671", "name": "Bonds Account", "balance": { "amount": "774024.48", "currencyCode": "CHF" } }] }, { "pairKey": "GBP/JPY", "prevClose": 1.9661, "open": 1.0808, "isBuyEnabled": true, "isSellEnabled": true, "accounts": [{ "IBAN": "HG76354827764", "name": "Bonds Account", "balance": { "amount": "87465.85", "currencyCode": "GBP" } }, { "IBAN": "HJ7635487853", "name": "Obligations Account", "balance": { "amount": "75764.64", "currencyCode": "GBP" } }, { "IBAN": "BN87636398364", "name": "Bonds Account", "balance": { "amount": "12040.14", "currencyCode": "JPY" } }, { "IBAN": "KH764368756294", "name": "Account", "balance": { "amount": "25117.35", "currencyCode": "JPY" } }, { "IBAN": "NB76493398753", "name": "Account", "balance": { "amount": "50550.21", "currencyCode": "JPY" } }, { "IBAN": "MX74821826473", "name": "Account", "balance": { "amount": "37382.07", "currencyCode": "JPY" } }, { "IBAN": "FG62905329857", "name": "Account", "balance": { "amount": "7520.17", "currencyCode": "JPY" } }, { "IBAN": "HG749373193872", "name": "Account", "balance": { "amount": "3150.57", "currencyCode": "JPY" } }, { "IBAN": "NB648733184632", "name": "Account", "balance": { "amount": "110450.87", "currencyCode": "JPY" } }, { "IBAN": "TR284643185762", "name": "Account", "balance": { "amount": "40760.67", "currencyCode": "JPY" } }, { "IBAN": "MN784623198361", "name": "Account", "balance": { "amount": "80120.45", "currencyCode": "JPY" } }, { "IBAN": "HG759833192745", "name": "Account", "balance": { "amount": "150.11", "currencyCode": "JPY" } }] }, { "pairKey": "GBP/NZD", "prevClose": 1.853, "open": 1.6541, "isBuyEnabled": false, "isSellEnabled": false, "accounts": [{ "IBAN": "HG76354827764", "name": "Bonds Account", "balance": { "amount": "87465.85", "currencyCode": "GBP" } }, { "IBAN": "HJ7635487853", "name": "Obligations Account", "balance": { "amount": "75764.64", "currencyCode": "GBP" } }] }, { "pairKey": "GBP/USD", "prevClose": 1.6523, "open": 1.1367, "isBuyEnabled": true, "isSellEnabled": true, "accounts": [{ "IBAN": "HG76354827764", "name": "Bonds Account", "balance": { "amount": "87465.85", "currencyCode": "GBP" } }, { "IBAN": "HJ7635487853", "name": "Obligations Account", "balance": { "amount": "75764.64", "currencyCode": "GBP" } }, { "IBAN": "NB647830587564", "name": "Main Account", "balance": { "amount": "16492.43", "currencyCode": "USD" } }, { "IBAN": "TM230301954201", "name": "Bonds Account", "balance": { "amount": "175616.71", "currencyCode": "USD" } }, { "IBAN": "KL461859983394", "name": "Savings", "balance": { "amount": "528335.64", "currencyCode": "USD" } }, { "IBAN": "MX3897549998473", "name": "Account", "balance": { "amount": "1387.63", "currencyCode": "USD" } }, { "IBAN": "FR294629948721", "name": "Account", "balance": { "amount": "335.24", "currencyCode": "USD" } }] }, { "pairKey": "NZD/CAD", "prevClose": 1.1071, "open": 1.1521, "isBuyEnabled": false, "isSellEnabled": false, "accounts": [{ "IBAN": "MN1254740787123", "name": "Savings", "balance": { "amount": "0", "currencyCode": "CAD" } }, { "IBAN": "NM763798266398", "name": "Bonds Account", "balance": { "amount": "101734.12", "currencyCode": "CAD" } }] }, { "pairKey": "NZD/CHF", "prevClose": 1.9662, "open": 1.6132, "isBuyEnabled": false, "isSellEnabled": false, "accounts": [{ "IBAN": "GL585567292147", "name": "Main Account", "balance": { "amount": "882502.61", "currencyCode": "CHF" } }, { "IBAN": "KL335015373671", "name": "Bonds Account", "balance": { "amount": "774024.48", "currencyCode": "CHF" } }] }, { "pairKey": "NZD/JPY", "prevClose": 1.016, "open": 1.1891, "isBuyEnabled": false, "isSellEnabled": false, "accounts": [{ "IBAN": "BN87636398364", "name": "Bonds Account", "balance": { "amount": "12040.14", "currencyCode": "JPY" } }, { "IBAN": "KH764368756294", "name": "Account", "balance": { "amount": "25117.35", "currencyCode": "JPY" } }, { "IBAN": "NB76493398753", "name": "Account", "balance": { "amount": "50550.21", "currencyCode": "JPY" } }, { "IBAN": "MX74821826473", "name": "Account", "balance": { "amount": "37382.07", "currencyCode": "JPY" } }, { "IBAN": "FG62905329857", "name": "Account", "balance": { "amount": "7520.17", "currencyCode": "JPY" } }, { "IBAN": "HG749373193872", "name": "Account", "balance": { "amount": "3150.57", "currencyCode": "JPY" } }, { "IBAN": "NB648733184632", "name": "Account", "balance": { "amount": "110450.87", "currencyCode": "JPY" } }, { "IBAN": "TR284643185762", "name": "Account", "balance": { "amount": "40760.67", "currencyCode": "JPY" } }, { "IBAN": "MN784623198361", "name": "Account", "balance": { "amount": "80120.45", "currencyCode": "JPY" } }, { "IBAN": "HG759833192745", "name": "Account", "balance": { "amount": "150.11", "currencyCode": "JPY" } }] }, { "pairKey": "NZD/USD", "prevClose": 1.7699, "open": 1.9246, "isBuyEnabled": false, "isSellEnabled": false, "accounts": [{ "IBAN": "NB647830587564", "name": "Main Account", "balance": { "amount": "16492.43", "currencyCode": "USD" } }, { "IBAN": "TM230301954201", "name": "Bonds Account", "balance": { "amount": "175616.71", "currencyCode": "USD" } }, { "IBAN": "KL461859983394", "name": "Savings", "balance": { "amount": "528335.64", "currencyCode": "USD" } }, { "IBAN": "MX3897549998473", "name": "Account", "balance": { "amount": "1387.63", "currencyCode": "USD" } }, { "IBAN": "FR294629948721", "name": "Account", "balance": { "amount": "335.24", "currencyCode": "USD" } }] }, { "pairKey": "TRY/JPY", "prevClose": 1.482, "open": 1.4708, "isBuyEnabled": false, "isSellEnabled": false, "accounts": [{ "IBAN": "BN87636398364", "name": "Bonds Account", "balance": { "amount": "12040.14", "currencyCode": "JPY" } }, { "IBAN": "KH764368756294", "name": "Account", "balance": { "amount": "25117.35", "currencyCode": "JPY" } }, { "IBAN": "NB76493398753", "name": "Account", "balance": { "amount": "50550.21", "currencyCode": "JPY" } }, { "IBAN": "MX74821826473", "name": "Account", "balance": { "amount": "37382.07", "currencyCode": "JPY" } }, { "IBAN": "FG62905329857", "name": "Account", "balance": { "amount": "7520.17", "currencyCode": "JPY" } }, { "IBAN": "HG749373193872", "name": "Account", "balance": { "amount": "3150.57", "currencyCode": "JPY" } }, { "IBAN": "NB648733184632", "name": "Account", "balance": { "amount": "110450.87", "currencyCode": "JPY" } }, { "IBAN": "TR284643185762", "name": "Account", "balance": { "amount": "40760.67", "currencyCode": "JPY" } }, { "IBAN": "MN784623198361", "name": "Account", "balance": { "amount": "80120.45", "currencyCode": "JPY" } }, { "IBAN": "HG759833192745", "name": "Account", "balance": { "amount": "150.11", "currencyCode": "JPY" } }] }, { "pairKey": "USD/CAD", "prevClose": 1.0308, "open": 1.2405, "isBuyEnabled": true, "isSellEnabled": true, "accounts": [{ "IBAN": "NB647830587564", "name": "Main Account", "balance": { "amount": "16492.43", "currencyCode": "USD" } }, { "IBAN": "TM230301954201", "name": "Bonds Account", "balance": { "amount": "175616.71", "currencyCode": "USD" } }, { "IBAN": "KL461859983394", "name": "Savings", "balance": { "amount": "528335.64", "currencyCode": "USD" } }, { "IBAN": "MX3897549998473", "name": "Account", "balance": { "amount": "1387.63", "currencyCode": "USD" } }, { "IBAN": "FR294629948721", "name": "Account", "balance": { "amount": "335.24", "currencyCode": "USD" } }, { "IBAN": "MN1254740787123", "name": "Savings", "balance": { "amount": "0", "currencyCode": "CAD" } }, { "IBAN": "NM763798266398", "name": "Bonds Account", "balance": { "amount": "101734.12", "currencyCode": "CAD" } }] }, { "pairKey": "USD/CHF", "prevClose": 1.8819, "open": 1.2657, "isBuyEnabled": false, "isSellEnabled": true, "accounts": [{ "IBAN": "NB647830587564", "name": "Main Account", "balance": { "amount": "16492.43", "currencyCode": "USD" } }, { "IBAN": "TM230301954201", "name": "Bonds Account", "balance": { "amount": "175616.71", "currencyCode": "USD" } }, { "IBAN": "KL461859983394", "name": "Savings", "balance": { "amount": "528335.64", "currencyCode": "USD" } }, { "IBAN": "MX3897549998473", "name": "Account", "balance": { "amount": "1387.63", "currencyCode": "USD" } }, { "IBAN": "FR294629948721", "name": "Account", "balance": { "amount": "335.24", "currencyCode": "USD" } }, { "IBAN": "GL585567292147", "name": "Main Account", "balance": { "amount": "882502.61", "currencyCode": "CHF" } }, { "IBAN": "KL335015373671", "name": "Bonds Account", "balance": { "amount": "774024.48", "currencyCode": "CHF" } }] }, { "pairKey": "USD/JPY", "prevClose": 1.6529, "open": 1.8276, "isBuyEnabled": true, "isSellEnabled": true, "accounts": [{ "IBAN": "NB647830587564", "name": "Main Account", "balance": { "amount": "16492.43", "currencyCode": "USD" } }, { "IBAN": "TM230301954201", "name": "Bonds Account", "balance": { "amount": "175616.71", "currencyCode": "USD" } }, { "IBAN": "KL461859983394", "name": "Savings", "balance": { "amount": "528335.64", "currencyCode": "USD" } }, { "IBAN": "MX3897549998473", "name": "Account", "balance": { "amount": "1387.63", "currencyCode": "USD" } }, { "IBAN": "FR294629948721", "name": "Account", "balance": { "amount": "335.24", "currencyCode": "USD" } }, { "IBAN": "BN87636398364", "name": "Bonds Account", "balance": { "amount": "12040.14", "currencyCode": "JPY" } }, { "IBAN": "KH764368756294", "name": "Account", "balance": { "amount": "25117.35", "currencyCode": "JPY" } }, { "IBAN": "NB76493398753", "name": "Account", "balance": { "amount": "50550.21", "currencyCode": "JPY" } }, { "IBAN": "MX74821826473", "name": "Account", "balance": { "amount": "37382.07", "currencyCode": "JPY" } }, { "IBAN": "FG62905329857", "name": "Account", "balance": { "amount": "7520.17", "currencyCode": "JPY" } }, { "IBAN": "HG749373193872", "name": "Account", "balance": { "amount": "3150.57", "currencyCode": "JPY" } }, { "IBAN": "NB648733184632", "name": "Account", "balance": { "amount": "110450.87", "currencyCode": "JPY" } }, { "IBAN": "TR284643185762", "name": "Account", "balance": { "amount": "40760.67", "currencyCode": "JPY" } }, { "IBAN": "MN784623198361", "name": "Account", "balance": { "amount": "80120.45", "currencyCode": "JPY" } }, { "IBAN": "HG759833192745", "name": "Account", "balance": { "amount": "150.11", "currencyCode": "JPY" } }] }, { "pairKey": "USD/NOK", "prevClose": 1.3125, "open": 1.6162, "isBuyEnabled": true, "isSellEnabled": false, "accounts": [{ "IBAN": "NB647830587564", "name": "Main Account", "balance": { "amount": "16492.43", "currencyCode": "USD" } }, { "IBAN": "TM230301954201", "name": "Bonds Account", "balance": { "amount": "175616.71", "currencyCode": "USD" } }, { "IBAN": "KL461859983394", "name": "Savings", "balance": { "amount": "528335.64", "currencyCode": "USD" } }, { "IBAN": "MX3897549998473", "name": "Account", "balance": { "amount": "1387.63", "currencyCode": "USD" } }, { "IBAN": "FR294629948721", "name": "Account", "balance": { "amount": "335.24", "currencyCode": "USD" } }, { "IBAN": "HR849665508929", "name": "Main Account", "balance": { "amount": "10000.00", "currencyCode": "NOK" } }] }] }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": null }],
	
	      getTradingCurrencyrate: [{ "status": 200, "data": [{ "pairKey": "AUD/CAD", "price": 1.9438, "change": -0.9802, "changePct": 0.07, "bid": 1.2234, "ask": 1.8126, "rateSell": 1.0847, "rateBuy": 0.1188, "ytdReturn": 0.13, "wkRangeFrom": 0.3675, "wkRangeTo": 1.9836, "dayRangeFrom": 0.028, "dayRangeTo": 1.6524 }, { "pairKey": "EUR/GBP", "price": 1.0582, "change": -0.1273, "changePct": -0.29, "bid": 1.5105, "ask": 1.1551, "rateSell": 0.6587, "rateBuy": 1.0849, "ytdReturn": 0.44, "wkRangeFrom": 0.0807, "wkRangeTo": 1.2696, "dayRangeFrom": 0.4754, "dayRangeTo": 1.4791 }, { "pairKey": "CHF/JPY", "price": 1.7254, "change": 0.4709, "changePct": -0.52, "bid": 1.7161, "ask": 1.5531, "rateSell": 0.7011, "rateBuy": 0.0186, "ytdReturn": 0.42, "wkRangeFrom": 0.0358, "wkRangeTo": 1.0432, "dayRangeFrom": 0.3069, "dayRangeTo": 1.1622 }, { "pairKey": "AUD/CNH", "price": 1.4875, "change": 0.3475, "changePct": 0.27, "bid": 1.7235, "ask": 1.5463, "rateSell": 0.6012, "rateBuy": 0.0287, "ytdReturn": 0.31, "wkRangeFrom": 0.0451, "wkRangeTo": 1.0312, "dayRangeFrom": 0.2068, "dayRangeTo": 1.1512 }, { "pairKey": "USD/CNH", "price": 1.2517, "change": -0.7849, "changePct": 0.09, "bid": 1.8886, "ask": 1.344, "rateSell": 0.8803, "rateBuy": 1.0998, "ytdReturn": 0.7, "wkRangeFrom": 0.3711, "wkRangeTo": 1.3747, "dayRangeFrom": 0.3653, "dayRangeTo": 1.2059 }, { "pairKey": "NOK/NZD", "price": 1.7179, "change": 0.7085, "changePct": -0.63, "bid": 1.2668, "ask": 1.0533, "rateSell": 1.6277, "rateBuy": 0.9225, "ytdReturn": 0.11, "wkRangeFrom": 0.2923, "wkRangeTo": 1.409, "dayRangeFrom": 0.1684, "dayRangeTo": 1.6088 }, { "pairKey": "SEK/TRY", "price": 1.3033, "change": -0.953, "changePct": 0.21, "bid": 1.9122, "ask": 1.2369, "rateSell": 1.146, "rateBuy": 0.6263, "ytdReturn": 0.58, "wkRangeFrom": 0.7257, "wkRangeTo": 1.7473, "dayRangeFrom": 0.8523, "dayRangeTo": 1.4839 }, { "pairKey": "MXN/TRY", "price": 1.979, "change": 0.5272, "changePct": -0.49, "bid": 1.7585, "ask": 1.6392, "rateSell": 1.7809, "rateBuy": 1.7433, "ytdReturn": 0.63, "wkRangeFrom": 0.2783, "wkRangeTo": 1.2404, "dayRangeFrom": 0.8739, "dayRangeTo": 1.8219 }, { "pairKey": "AUD/CHF", "price": 1.1881, "change": -0.6139, "changePct": -0.15, "bid": 1.2485, "ask": 1.6611, "rateSell": 1.8105, "rateBuy": 1.6393, "ytdReturn": 0.64, "wkRangeFrom": 0.4117, "wkRangeTo": 1.1086, "dayRangeFrom": 0.5801, "dayRangeTo": 1.7804 }, { "pairKey": "AUD/JPY", "price": 1.78, "change": -0.2106, "changePct": 0.4, "bid": 1.6976, "ask": 1.2415, "rateSell": 1.8123, "rateBuy": 1.2749, "ytdReturn": 0.92, "wkRangeFrom": 0.9562, "wkRangeTo": 1.3921, "dayRangeFrom": 0.3007, "dayRangeTo": 1.9307 }, { "pairKey": "AUD/NZD", "price": 1.487, "change": 0.8609, "changePct": -0.48, "bid": 1.8252, "ask": 1.68, "rateSell": 0.8255, "rateBuy": 0.7922, "ytdReturn": 0.76, "wkRangeFrom": 0.1343, "wkRangeTo": 1.8646, "dayRangeFrom": 0.7689, "dayRangeTo": 1.9837 }, { "pairKey": "AUD/USD", "price": 1.1267, "change": 0.3327, "changePct": -0.66, "bid": 1.801, "ask": 1.2506, "rateSell": 0.9182, "rateBuy": 0.8885, "ytdReturn": 0.46, "wkRangeFrom": 0.267, "wkRangeTo": 1.8606, "dayRangeFrom": 0.7152, "dayRangeTo": 1.5886 }, { "pairKey": "CAD/CHF", "price": 1.949, "change": 0.6404, "changePct": -0.91, "bid": 1.0093, "ask": 1.2128, "rateSell": 0.931, "rateBuy": 0.2371, "ytdReturn": 0.12, "wkRangeFrom": 0.6567, "wkRangeTo": 1.6484, "dayRangeFrom": 0.4722, "dayRangeTo": 1.5944 }, { "pairKey": "CAD/JPY", "price": 1.6646, "change": -0.8607, "changePct": -0.63, "bid": 1.6431, "ask": 1.1411, "rateSell": 0.9855, "rateBuy": 1.4742, "ytdReturn": 0.79, "wkRangeFrom": 0.1274, "wkRangeTo": 1.8871, "dayRangeFrom": 0.1563, "dayRangeTo": 1.6692 }, { "pairKey": "EUR/AUD", "price": 1.8202, "change": 0.0145, "changePct": 0.22, "bid": 1.657, "ask": 1.163, "rateSell": 1.4477, "rateBuy": 1.941, "ytdReturn": 0.96, "wkRangeFrom": 0.1219, "wkRangeTo": 1.1691, "dayRangeFrom": 0.6233, "dayRangeTo": 1.5687 }, { "pairKey": "EUR/CAD", "price": 1.51, "change": 0.2291, "changePct": 0.49, "bid": 1.8418, "ask": 1.6458, "rateSell": 1.752, "rateBuy": 1.2575, "ytdReturn": 0.74, "wkRangeFrom": 0.6695, "wkRangeTo": 1.3682, "dayRangeFrom": 0.3905, "dayRangeTo": 1.4167 }, { "pairKey": "EUR/CHF", "price": 1.6062, "change": -0.1531, "changePct": -0.72, "bid": 1.6414, "ask": 1.1936, "rateSell": 1.7398, "rateBuy": 0.2263, "ytdReturn": 0.79, "wkRangeFrom": 0.3935, "wkRangeTo": 1.7999, "dayRangeFrom": 0.1173, "dayRangeTo": 1.6603 }, { "pairKey": "EUR/JPY", "price": 1.5298, "change": -0.2608, "changePct": 0.27, "bid": 1.9499, "ask": 1.5734, "rateSell": 0.7628, "rateBuy": 1.6503, "ytdReturn": 0.37, "wkRangeFrom": 0.1506, "wkRangeTo": 1.0868, "dayRangeFrom": 0.9701, "dayRangeTo": 1.0123 }, { "pairKey": "EUR/NZD", "price": 1.2089, "change": -0.9473, "changePct": -0.6, "bid": 1.5788, "ask": 1.9393, "rateSell": 1.0492, "rateBuy": 1.2104, "ytdReturn": 0.11, "wkRangeFrom": 0.0014, "wkRangeTo": 1.1856, "dayRangeFrom": 0.9541, "dayRangeTo": 1.0744 }, { "pairKey": "EUR/TRY", "price": 1.3329, "change": 0.854, "changePct": -0.41, "bid": 1.4728, "ask": 1.2934, "rateSell": 0.3789, "rateBuy": 0.5512, "ytdReturn": 0.78, "wkRangeFrom": 0.0132, "wkRangeTo": 1.6509, "dayRangeFrom": 0.7773, "dayRangeTo": 1.3028 }, { "pairKey": "EUR/USD", "price": 1.2434, "change": 0.0561, "changePct": 0.48, "bid": 1.1852, "ask": 1.4451, "rateSell": 0.8044, "rateBuy": 1.7227, "ytdReturn": 0.13, "wkRangeFrom": 0.653, "wkRangeTo": 1.5039, "dayRangeFrom": 0.8468, "dayRangeTo": 1.7595 }, { "pairKey": "GBP/AUD", "price": 1.9308, "change": -0.8977, "changePct": 0.34, "bid": 1.9753, "ask": 1.2177, "rateSell": 0.3134, "rateBuy": 0.8379, "ytdReturn": 0.66, "wkRangeFrom": 0.9249, "wkRangeTo": 1.8425, "dayRangeFrom": 0.3295, "dayRangeTo": 1.3255 }, { "pairKey": "GBP/CAD", "price": 1.7665, "change": 0.9445, "changePct": 0.21, "bid": 1.6695, "ask": 1.2122, "rateSell": 1.8466, "rateBuy": 1.0291, "ytdReturn": 0.32, "wkRangeFrom": 0.3046, "wkRangeTo": 1.033, "dayRangeFrom": 0.4324, "dayRangeTo": 1.7964 }, { "pairKey": "GBP/CHF", "price": 1.786, "change": -0.7054, "changePct": 0.63, "bid": 1.991, "ask": 1.8592, "rateSell": 0.4432, "rateBuy": 1.6889, "ytdReturn": 0.42, "wkRangeFrom": 0.9076, "wkRangeTo": 1.069, "dayRangeFrom": 0.4892, "dayRangeTo": 1.9916 }, { "pairKey": "GBP/JPY", "price": 1.6573, "change": 0.0495, "changePct": 0.61, "bid": 1.9297, "ask": 1.7053, "rateSell": 1.1719, "rateBuy": 1.2074, "ytdReturn": 0.24, "wkRangeFrom": 0.9044, "wkRangeTo": 1.0686, "dayRangeFrom": 0.6441, "dayRangeTo": 1.0788 }, { "pairKey": "GBP/NZD", "price": 1.8569, "change": -0.3582, "changePct": 0.13, "bid": 1.8365, "ask": 1.6353, "rateSell": 1.0236, "rateBuy": 1.5201, "ytdReturn": 0.69, "wkRangeFrom": 0.2956, "wkRangeTo": 1.1069, "dayRangeFrom": 0.2337, "dayRangeTo": 1.3236 }, { "pairKey": "GBP/USD", "price": 1.6111, "change": -0.9372, "changePct": 0.33, "bid": 1.8688, "ask": 1.4312, "rateSell": 0.0858, "rateBuy": 1.3712, "ytdReturn": 0.91, "wkRangeFrom": 0.2671, "wkRangeTo": 1.3366, "dayRangeFrom": 0.1925, "dayRangeTo": 1.3391 }, { "pairKey": "NZD/CAD", "price": 1.907, "change": 0.6857, "changePct": 0.03, "bid": 1.028, "ask": 1.3384, "rateSell": 1.9368, "rateBuy": 1.7129, "ytdReturn": 0.38, "wkRangeFrom": 0.7846, "wkRangeTo": 1.5615, "dayRangeFrom": 0.0765, "dayRangeTo": 1.9515 }, { "pairKey": "NZD/CHF", "price": 1.4683, "change": -0.1949, "changePct": 0.36, "bid": 1.716, "ask": 1.927, "rateSell": 0.2712, "rateBuy": 0.3087, "ytdReturn": 0.55, "wkRangeFrom": 0.0148, "wkRangeTo": 1.201, "dayRangeFrom": 0.5665, "dayRangeTo": 1.575 }, { "pairKey": "NZD/JPY", "price": 1.9366, "change": 0.6054, "changePct": 0.66, "bid": 1.1144, "ask": 1.2932, "rateSell": 0.6349, "rateBuy": 1.2064, "ytdReturn": 0.84, "wkRangeFrom": 0.1851, "wkRangeTo": 1.4921, "dayRangeFrom": 0.8856, "dayRangeTo": 1.0469 }, { "pairKey": "NZD/USD", "price": 1.7726, "change": -0.908, "changePct": 0.61, "bid": 1.566, "ask": 1.9327, "rateSell": 0.5231, "rateBuy": 0.7962, "ytdReturn": 0.49, "wkRangeFrom": 0.7819, "wkRangeTo": 1.2752, "dayRangeFrom": 0.1121, "dayRangeTo": 1.0402 }, { "pairKey": "TRY/JPY", "price": 1.2318, "change": 0.3884, "changePct": -0.13, "bid": 1.6453, "ask": 1.63, "rateSell": 0.9784, "rateBuy": 1.0219, "ytdReturn": 0.02, "wkRangeFrom": 0.726, "wkRangeTo": 1.9098, "dayRangeFrom": 0.8867, "dayRangeTo": 1.2575 }, { "pairKey": "USD/CAD", "price": 1.942, "change": -0.4345, "changePct": -0.14, "bid": 1.7957, "ask": 1.5261, "rateSell": 1.3141, "rateBuy": 1.9961, "ytdReturn": 0.28, "wkRangeFrom": 0.3519, "wkRangeTo": 1.4187, "dayRangeFrom": 0.1407, "dayRangeTo": 1.5005 }, { "pairKey": "USD/CHF", "price": 1.6736, "change": 0.6802, "changePct": 0.17, "bid": 1.0171, "ask": 1.9243, "rateSell": 0.3979, "rateBuy": 1.9181, "ytdReturn": 0.57, "wkRangeFrom": 0.0181, "wkRangeTo": 1.1457, "dayRangeFrom": 0.6075, "dayRangeTo": 1.3409 }, { "pairKey": "USD/JPY", "price": 1.3299, "change": 0.1482, "changePct": -0.25, "bid": 1.1672, "ask": 1.3142, "rateSell": 1.5062, "rateBuy": 1.3882, "ytdReturn": 0.09, "wkRangeFrom": 0.6214, "wkRangeTo": 1.5894, "dayRangeFrom": 0.9017, "dayRangeTo": 1.369 }, { "pairKey": "USD/NOK", "price": 1.6196, "change": -0.88, "changePct": 0.02, "bid": 1.451, "ask": 1.4267, "rateSell": 1.5326, "rateBuy": 1.7603, "ytdReturn": 0.78, "wkRangeFrom": 0.1049, "wkRangeTo": 1.7781, "dayRangeFrom": 0.853, "dayRangeTo": 1.8801 }] }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": null }],
	
	      getTradingCurrencypairRecord: [{ "status": 200, "data": { "pairKey": "AUD/CAD", "prevClose": 1.591, "open": 1.6926, "isBuyEnabled": true, "isSellEnabled": false, "accounts": [{ "IBAN": "TM514519240979", "name": "Main Account", "balance": { "amount": "0", "currencyCode": "AUD" } }, { "IBAN": "FR119340766811", "name": "Bonds Account", "balance": { "amount": "0", "currencyCode": "AUD" } }, { "IBAN": "MN1254740787123", "name": "Savings", "balance": { "amount": "0", "currencyCode": "CAD" } }, { "IBAN": "NM763798266398", "name": "Bonds Account", "balance": { "amount": "101734.12", "currencyCode": "CAD" } }] } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": null }]
	
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
	
	    var plugins = (_plugins = {}, _defineProperty(_plugins, PLUGINS_ALL, []), _defineProperty(_plugins, 'getTradingCurrencypair', []), _defineProperty(_plugins, 'getTradingCurrencyrate', []), _defineProperty(_plugins, 'getTradingCurrencypairRecord', []), _plugins);
	
	    if (!plugins['getTradingCurrencypair']) {
	      console.warn('%cThere is no "getTradingCurrencypair" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getTradingCurrencypair'].push(function (result, args) {
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
	
	    if (!plugins['getTradingCurrencyrate']) {
	      console.warn('%cThere is no "getTradingCurrencyrate" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getTradingCurrencyrate'].push(function (response, args) {
	        var currencypairs = args[0].currencypair;
	
	
	        return Object.assign({}, response, {
	          data: response.data.filter(function (item) {
	            return currencypairs.includes(item.pairKey);
	          })
	        });
	      });
	    }
	
	    if (!plugins['getTradingCurrencyrate']) {
	      console.warn('%cThere is no "getTradingCurrencyrate" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getTradingCurrencyrate'].push(function (response, args) {
	        var randomVariation = function randomVariation() {
	          return +(Math.sin(new Date().getTime()) / 17).toFixed(4);
	        };
	
	        var fieldsToMutate = ['price', 'change', 'changePct', 'bid', 'ask', 'rateSell', 'rateBuy', 'ytdReturn', 'wkRangeFrom', 'wkRangeTo', 'dayRangeFrom', 'dayRangeTo'];
	
	        return Object.assign({}, response, {
	          data: response.data.map(function (item) {
	            var mutation = fieldsToMutate.reduce(function (acc, field) {
	              return Object.assign(acc, _defineProperty({}, field, +(item[field] + randomVariation()).toFixed(4)));
	            }, {});
	
	            return Object.assign({}, item, mutation);
	          })
	        });
	      });
	    }
	
	    if (!plugins['getTradingCurrencypair']) {
	      console.warn('%cThere is no "getTradingCurrencypair" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getTradingCurrencypair'].push(function (response, args) {
	        if (args[0].from || args[0].size) {
	          return response;
	        }
	        var currencyPairId = args[0];
	        var currencyPairData = response.data.filter(function (item) {
	          return item.pairKey === currencyPairId;
	        });
	
	        return Object.assign({}, response, {
	          data: currencyPairData[0]
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
	
	    function getTradingCurrencypair(params, headers) {
	      var url = '' + baseUri + version + '/trading/currencypair';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getTradingCurrencypair', 200)).then(pluginMocks('getTradingCurrencypair', [params, headers], '{version}/trading/currencypair')).catch(handleError('getTradingCurrencypair'));
	    }
	
	    function getTradingCurrencyrate(params, headers) {
	      var url = '' + baseUri + version + '/trading/currencyrate';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getTradingCurrencyrate', 200)).then(pluginMocks('getTradingCurrencyrate', [params, headers], '{version}/trading/currencyrate')).catch(handleError('getTradingCurrencyrate'));
	    }
	
	    function getTradingCurrencypairRecord(currencypairId, params, headers) {
	      var url = '' + baseUri + version + '/trading/currencypair/' + currencypairId;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getTradingCurrencypairRecord', 200)).then(pluginMocks('getTradingCurrencypairRecord', [currencypairId, params, headers], '{version}/trading/currencypair/{currencypairId}')).catch(handleError('getTradingCurrencypairRecord'));
	    }
	
	    return {
	
	      getTradingCurrencypair: getTradingCurrencypair,
	
	      getTradingCurrencyrate: getTradingCurrencyrate,
	
	      getTradingCurrencypairRecord: getTradingCurrencypairRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=mock.data-bb-trading-http-ng.js.map