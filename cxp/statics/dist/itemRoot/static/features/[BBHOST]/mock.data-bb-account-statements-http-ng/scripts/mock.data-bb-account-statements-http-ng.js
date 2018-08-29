(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else if(typeof define === 'function' && define.amd)
		define("mock.data-bb-account-statements-http-ng", ["vendor-bb-angular", "lib-bb-storage-ng"], factory);
	else if(typeof exports === 'object')
		exports["mock.data-bb-account-statements-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else
		root["mock.data-bb-account-statements-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage-ng"]);
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
	exports.accountStatementsDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStorageNg = __webpack_require__(3);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _dataBbAccountStatementsHttp = __webpack_require__(4);
	
	var _dataBbAccountStatementsHttp2 = _interopRequireDefault(_dataBbAccountStatementsHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var accountStatementsDataModuleKey = 'data-bb-account-statements-http-ng'; /* eslint-disable */
	var accountStatementsDataKey = exports.accountStatementsDataKey = 'data-bb-account-statements-http-ng:accountStatementsData';
	
	exports.default = _vendorBbAngular2.default.module(accountStatementsDataModuleKey, [_libBbStorageNg2.default]).provider(accountStatementsDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  return {
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	    $get: ['$q', _libBbStorageNg.bbStorageServiceKey, '$httpParamSerializer',
	    /* into */
	    (0, _dataBbAccountStatementsHttp2.default)(config)]
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
	
	    var STORAGE_KEY = 'MOCK_STATE_accountStatementsDataModuleKey';
	    var state = {
	      "{version}/account/statements": [{
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2016-02-15",
	        "category": "Credit Card",
	        "description": "Credit Card statement - February 2016",
	        "documents": [{
	          "url": "http://server.com/documentsdepo/uid_1",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2016-03-15",
	        "category": "Credit Card",
	        "description": "Credit Card statement - March 2016",
	        "documents": [{
	          "uid": "uid_2",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2016-04-15",
	        "category": "Credit Card",
	        "description": "Credit Card statement - April 2016",
	        "documents": [{
	          "uid": "uid_3",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2016-05-15",
	        "category": "Credit Card",
	        "description": "Credit Card statement - May 2016",
	        "documents": [{
	          "url": "http://server.com/documentsdepo/uid_4",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2016-06-15",
	        "category": "Credit Card",
	        "description": "Credit Card statement - June 2016",
	        "documents": [{
	          "uid": "uid_5",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2016-07-15",
	        "category": "Credit Card",
	        "description": "Credit Card statement - July 2016",
	        "documents": [{
	          "url": "http://server.com/documentsdepo/uid_6",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2016-08-15",
	        "category": "Credit Card",
	        "description": "Credit Card statement - August 2016",
	        "documents": [{
	          "uid": "uid_7",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2016-09-15",
	        "category": "Credit Card",
	        "description": "Credit Card statement - September 2016",
	        "documents": [{
	          "uid": "uid_8",
	          "url": "",
	          "contentType": ""
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-01-31",
	        "category": "Account",
	        "description": "Account statement - January 2017",
	        "documents": [{
	          "uid": "uid_9_1",
	          "contentType": "application/pdf"
	        }, {
	          "url": "http://server.com/documentsdepo/uid_9_2",
	          "contentType": "text/csv"
	        }, {
	          "uid": "uid_9_3",
	          "url": "http://server.com/documentsdepo/uid_9_3",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-02-28",
	        "category": "Account",
	        "description": "Account statement - February 2017",
	        "documents": [{
	          "uid": "uid_10_1",
	          "contentType": "application/pdf"
	        }, {
	          "uid": "uid_10_2",
	          "contentType": "text/csv"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-03-31",
	        "category": "Account",
	        "description": "Account statement - March 2017",
	        "documents": [{
	          "url": "http://server.com/documentsdepo/uid_11_1",
	          "contentType": "application/pdf"
	        }, {
	          "uid": "uid_11_2",
	          "url": "http://server.com/documentsdepo/uid_11_2",
	          "contentType": "text/csv"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-04-30",
	        "category": "Account",
	        "description": "Account statement - April 2017",
	        "documents": [{
	          "url": "http://server.com/documentsdepo/uid_12_1",
	          "contentType": "application/pdf"
	        }, {
	          "url": "http://server.com/documentsdepo/uid_12_2",
	          "contentType": "text/csv"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-05-31",
	        "category": "Account",
	        "description": "Account statement - May 2017",
	        "documents": [{
	          "uid": "uid_13_1",
	          "contentType": "application/pdf"
	        }, {
	          "uid": "uid_13_2",
	          "contentType": "text/csv"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-06-30",
	        "category": "Account",
	        "description": "Account statement - June 2017",
	        "documents": [{
	          "url": "http://server.com/documentsdepo/uid_14_1",
	          "contentType": "application/pdf"
	        }, {
	          "uid": "uid_14_2",
	          "contentType": "text/csv"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-07-31",
	        "category": "Account",
	        "description": "Account statement - July 2017",
	        "documents": [{
	          "url": "http://server.com/documentsdepo/uid_15_1",
	          "contentType": "application/pdf"
	        }, {
	          "url": "http://server.com/documentsdepo/uid_15_2",
	          "contentType": "text/csv"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-08-31",
	        "category": "Account",
	        "description": "Account statement - August 2017",
	        "documents": [{
	          "uid": "uid_16_1",
	          "url": "http://server.com/documentsdepo/uid_16_1",
	          "contentType": "application/pdf"
	        }, {
	          "uid": "uid_16_2",
	          "url": "http://server.com/documentsdepo/uid_16_2",
	          "contentType": "text/csv"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-09-30",
	        "description": "Statement - September 2017",
	        "documents": [{
	          "uid": "uid_17_2",
	          "contentType": "text/csv"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-10-31",
	        "category": "Account",
	        "description": "Account statement - October 2017",
	        "documents": [{
	          "uid": "uid_18_1",
	          "contentType": "application/pdf"
	        }, {
	          "uid": "uid_18_2",
	          "contentType": "text/csv"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-11-30",
	        "category": "Account",
	        "description": "Account statement - November 2017",
	        "documents": [{
	          "url": "http://server.com/documentsdepo/uid_19_1",
	          "contentType": "application/pdf"
	        }, {
	          "url": "http://server.com/documentsdepo/uid_19_2",
	          "contentType": "text/csv"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-12-31",
	        "category": "Account",
	        "description": "Account statement - December 2017",
	        "documents": [{
	          "uid": "uid_20_1",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-05-19",
	        "category": "Mortgage",
	        "description": "Mortgage statement - May 2017",
	        "documents": [{
	          "url": "http://server.com/documentsdepo/uid_21",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-06-19",
	        "category": "Mortgage",
	        "description": "Mortgage statement - June 2017",
	        "documents": [{
	          "uid": "uid_22",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-07-19",
	        "category": "Mortgage",
	        "description": "Mortgage statement - July 2017",
	        "documents": [{
	          "url": "http://server.com/documentsdepo/uid_23",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-08-19",
	        "category": "Mortgage",
	        "description": "Mortgage statement - August 2017",
	        "documents": [{
	          "uid": "uid_24",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-09-19",
	        "category": "Mortgage",
	        "description": "Mortgage statement - September 2017",
	        "documents": [{
	          "url": "http://server.com/documentsdepo/uid_25",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-10-19",
	        "category": "Mortgage",
	        "description": "Mortgage statement - October 2017",
	        "documents": [{
	          "uid": "uid_26",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-11-19",
	        "category": "Mortgage",
	        "description": "Mortgage statement - November 2017",
	        "documents": [{
	          "uid": "uid_27",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-12-19",
	        "category": "Mortgage",
	        "description": "Mortgage statement - December 2017",
	        "documents": [{
	          "url": "http://server.com/documentsdepo/uid_28",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2018-01-19",
	        "category": "Mortgage",
	        "description": "Mortgage statement - January 2018",
	        "documents": [{
	          "uid": "uid_29",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-12-31",
	        "category": "Tax Forms",
	        "description": "Tax form - 2017",
	        "documents": [{
	          "uid": "uid_30",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2016-02-09",
	        "category": "Credit Card",
	        "description": "Credit Card statement - February 2016",
	        "documents": [{
	          "url": "http://server.com/documentsdepo/uid_31",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2016-03-09",
	        "category": "Credit Card",
	        "description": "Credit Card statement - March 2016",
	        "documents": [{
	          "uid": "uid_32",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2016-04-09",
	        "category": "Credit Card",
	        "description": "Credit Card statement - April 2016",
	        "documents": [{
	          "url": "http://server.com/documentsdepo/uid_33",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2016-05-09",
	        "category": "Credit Card",
	        "description": "Credit Card statement - May 2016",
	        "documents": [{
	          "uid": "uid_34",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2016-06-09",
	        "category": "Credit Card",
	        "description": "Credit Card statement - June 2016",
	        "documents": [{
	          "url": "http://server.com/documentsdepo/uid_35",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2016-07-09",
	        "category": "Credit Card",
	        "description": "Credit Card statement - July 2016",
	        "documents": [{
	          "uid": "uid_36",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2016-08-09",
	        "category": "Credit Card",
	        "description": "Credit Card statement - August 2016",
	        "documents": [{
	          "url": "http://server.com/documentsdepo/uid_37",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2016-09-09",
	        "category": "Credit Card",
	        "description": "Credit Card statement - September 2016",
	        "documents": [{
	          "uid": "uid_38",
	          "url": "",
	          "contentType": ""
	        }]
	      }, {
	        "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-01-31",
	        "category": "Account",
	        "description": "Account statement - January 2017",
	        "documents": [{
	          "uid": "",
	          "contentType": "application/pdf"
	        }, {
	          "uid": "uid_39_2",
	          "contentType": "text/csv"
	        }]
	      }, {
	        "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-02-28",
	        "category": "Account",
	        "description": "Account statement - February 2017",
	        "documents": [{
	          "url": "http://server.com/documentsdepo/uid_40_1",
	          "contentType": "application/pdf"
	        }, {
	          "url": "",
	          "contentType": "text/csv"
	        }]
	      }, {
	        "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-03-31",
	        "category": "Account",
	        "description": "Account statement - March 2017",
	        "documents": [{
	          "uid": "uid_41_1",
	          "contentType": "application/pdf"
	        }, {
	          "url": "http://server.com/documentsdepo/uid_41_2",
	          "contentType": "text/csv"
	        }]
	      }, {
	        "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-04-30",
	        "category": "Account",
	        "description": "Account statement - April 2017",
	        "documents": [{
	          "uid": "uid_42_1",
	          "contentType": "application/pdf"
	        }, {
	          "url": "http://server.com/documentsdepo/uid_42_2",
	          "contentType": "text/csv"
	        }]
	      }, {
	        "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-05-31",
	        "category": "Account",
	        "description": "Account statement - May 2017",
	        "documents": [{
	          "uid": "uid_43_1",
	          "contentType": "application/pdf"
	        }, {
	          "url": "http://server.com/documentsdepo/uid_43_2",
	          "contentType": "text/csv"
	        }]
	      }, {
	        "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-06-30",
	        "category": "Account",
	        "description": "Account statement - June 2017",
	        "documents": [{
	          "url": "http://server.com/documentsdepo/uid_44_1",
	          "contentType": "application/pdf"
	        }, {
	          "uid": "uid_44_2",
	          "contentType": "text/csv"
	        }]
	      }, {
	        "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-07-31",
	        "category": "Account",
	        "description": "Account statement - July 2017",
	        "documents": [{
	          "uid": "uid_45_1",
	          "contentType": "application/pdf"
	        }, {
	          "uid": "uid_45_2",
	          "contentType": "text/csv"
	        }]
	      }, {
	        "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-08-31",
	        "category": "Account",
	        "description": "Account statement - August 2017",
	        "documents": [{
	          "url": "http://server.com/documentsdepo/uid_46_1",
	          "contentType": "application/pdf"
	        }, {
	          "url": "http://server.com/documentsdepo/uid_46_2",
	          "contentType": "text/csv"
	        }]
	      }, {
	        "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-09-30",
	        "description": "Statement - September 2017",
	        "documents": [{
	          "uid": "uid_47_2",
	          "contentType": "text/csv"
	        }]
	      }, {
	        "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-10-31",
	        "category": "Account",
	        "description": "Account statement - October 2017",
	        "documents": [{
	          "uid": "uid_48_1",
	          "contentType": "application/pdf"
	        }, {
	          "uid": "uid_48_2",
	          "contentType": "text/csv"
	        }]
	      }, {
	        "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-11-30",
	        "category": "Account",
	        "description": "Account statement - November 2017",
	        "documents": [{
	          "url": "http://server.com/documentsdepo/uid_49_1",
	          "contentType": "application/pdf"
	        }, {
	          "url": "http://server.com/documentsdepo/uid_49_2",
	          "contentType": "text/csv"
	        }]
	      }, {
	        "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-12-31",
	        "category": "Account",
	        "description": "Account statement - December 2017",
	        "documents": [{
	          "uid": "uid_50_1",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-05-19",
	        "category": "Mortgage",
	        "description": "Mortgage statement - May 2017",
	        "documents": [{
	          "url": "http://server.com/documentsdepo/uid_51",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-06-19",
	        "category": "Mortgage",
	        "description": "Mortgage statement - June 2017",
	        "documents": [{
	          "uid": "uid_52",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-06-20",
	        "category": "Mortgage",
	        "description": "Mortgage statement - July 2017",
	        "documents": [{
	          "url": "http://server.com/documentsdepo/uid_53",
	          "contentType": "application/pdf"
	        }]
	      }, {
	        "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "date": "2017-08-19",
	        "category": "Mortgage",
	        "description": "Mortgage statement - August 2017",
	        "documents": [{
	          "uid": "uid_54",
	          "contentType": "application/pdf"
	        }]
	      }]
	    };
	
	    bbStorage.subscribe(STORAGE_KEY, function (newState) {
	      state = newState;
	    });
	
	    var persistState = function persistState(newState) {
	      bbStorage.setItem(STORAGE_KEY, newState);
	    };
	
	    var responses = {
	
	      getAccountStatements: [{ "status": 200, "data": [{ "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2016-02-15", "category": "Credit Card", "description": "Credit Card statement - February 2016", "documents": [{ "url": "http://server.com/documentsdepo/uid_1", "contentType": "application/pdf" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2016-03-15", "category": "Credit Card", "description": "Credit Card statement - March 2016", "documents": [{ "uid": "uid_2", "contentType": "application/pdf" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2016-04-15", "category": "Credit Card", "description": "Credit Card statement - April 2016", "documents": [{ "uid": "uid_3", "contentType": "application/pdf" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2016-05-15", "category": "Credit Card", "description": "Credit Card statement - May 2016", "documents": [{ "url": "http://server.com/documentsdepo/uid_4", "contentType": "application/pdf" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2016-06-15", "category": "Credit Card", "description": "Credit Card statement - June 2016", "documents": [{ "uid": "uid_5", "contentType": "application/pdf" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2016-07-15", "category": "Credit Card", "description": "Credit Card statement - July 2016", "documents": [{ "url": "http://server.com/documentsdepo/uid_6", "contentType": "application/pdf" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2016-08-15", "category": "Credit Card", "description": "Credit Card statement - August 2016", "documents": [{ "uid": "uid_7", "contentType": "application/pdf" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2016-09-15", "category": "Credit Card", "description": "Credit Card statement - September 2016", "documents": [{ "uid": "uid_8", "url": "", "contentType": "" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-01-31", "category": "Account", "description": "Account statement - January 2017", "documents": [{ "uid": "uid_9_1", "contentType": "application/pdf" }, { "url": "http://server.com/documentsdepo/uid_9_2", "contentType": "text/csv" }, { "uid": "uid_9_3", "url": "http://server.com/documentsdepo/uid_9_3", "contentType": "application/pdf" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-02-28", "category": "Account", "description": "Account statement - February 2017", "documents": [{ "uid": "uid_10_1", "contentType": "application/pdf" }, { "uid": "uid_10_2", "contentType": "text/csv" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-03-31", "category": "Account", "description": "Account statement - March 2017", "documents": [{ "url": "http://server.com/documentsdepo/uid_11_1", "contentType": "application/pdf" }, { "uid": "uid_11_2", "url": "http://server.com/documentsdepo/uid_11_2", "contentType": "text/csv" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-04-30", "category": "Account", "description": "Account statement - April 2017", "documents": [{ "url": "http://server.com/documentsdepo/uid_12_1", "contentType": "application/pdf" }, { "url": "http://server.com/documentsdepo/uid_12_2", "contentType": "text/csv" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-05-31", "category": "Account", "description": "Account statement - May 2017", "documents": [{ "uid": "uid_13_1", "contentType": "application/pdf" }, { "uid": "uid_13_2", "contentType": "text/csv" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-06-30", "category": "Account", "description": "Account statement - June 2017", "documents": [{ "url": "http://server.com/documentsdepo/uid_14_1", "contentType": "application/pdf" }, { "uid": "uid_14_2", "contentType": "text/csv" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-07-31", "category": "Account", "description": "Account statement - July 2017", "documents": [{ "url": "http://server.com/documentsdepo/uid_15_1", "contentType": "application/pdf" }, { "url": "http://server.com/documentsdepo/uid_15_2", "contentType": "text/csv" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-08-31", "category": "Account", "description": "Account statement - August 2017", "documents": [{ "uid": "uid_16_1", "url": "http://server.com/documentsdepo/uid_16_1", "contentType": "application/pdf" }, { "uid": "uid_16_2", "url": "http://server.com/documentsdepo/uid_16_2", "contentType": "text/csv" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-09-30", "description": "Statement - September 2017", "documents": [{ "uid": "uid_17_2", "contentType": "text/csv" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-10-31", "category": "Account", "description": "Account statement - October 2017", "documents": [{ "uid": "uid_18_1", "contentType": "application/pdf" }, { "uid": "uid_18_2", "contentType": "text/csv" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-11-30", "category": "Account", "description": "Account statement - November 2017", "documents": [{ "url": "http://server.com/documentsdepo/uid_19_1", "contentType": "application/pdf" }, { "url": "http://server.com/documentsdepo/uid_19_2", "contentType": "text/csv" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-12-31", "category": "Account", "description": "Account statement - December 2017", "documents": [{ "uid": "uid_20_1", "contentType": "application/pdf" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-05-19", "category": "Mortgage", "description": "Mortgage statement - May 2017", "documents": [{ "url": "http://server.com/documentsdepo/uid_21", "contentType": "application/pdf" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-06-19", "category": "Mortgage", "description": "Mortgage statement - June 2017", "documents": [{ "uid": "uid_22", "contentType": "application/pdf" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-07-19", "category": "Mortgage", "description": "Mortgage statement - July 2017", "documents": [{ "url": "http://server.com/documentsdepo/uid_23", "contentType": "application/pdf" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-08-19", "category": "Mortgage", "description": "Mortgage statement - August 2017", "documents": [{ "uid": "uid_24", "contentType": "application/pdf" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-09-19", "category": "Mortgage", "description": "Mortgage statement - September 2017", "documents": [{ "url": "http://server.com/documentsdepo/uid_25", "contentType": "application/pdf" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-10-19", "category": "Mortgage", "description": "Mortgage statement - October 2017", "documents": [{ "uid": "uid_26", "contentType": "application/pdf" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-11-19", "category": "Mortgage", "description": "Mortgage statement - November 2017", "documents": [{ "uid": "uid_27", "contentType": "application/pdf" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-12-19", "category": "Mortgage", "description": "Mortgage statement - December 2017", "documents": [{ "url": "http://server.com/documentsdepo/uid_28", "contentType": "application/pdf" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2018-01-19", "category": "Mortgage", "description": "Mortgage statement - January 2018", "documents": [{ "uid": "uid_29", "contentType": "application/pdf" }] }, { "accountId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-12-31", "category": "Tax Forms", "description": "Tax form - 2017", "documents": [{ "uid": "uid_30", "contentType": "application/pdf" }] }, { "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2016-02-09", "category": "Credit Card", "description": "Credit Card statement - February 2016", "documents": [{ "url": "http://server.com/documentsdepo/uid_31", "contentType": "application/pdf" }] }, { "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2016-03-09", "category": "Credit Card", "description": "Credit Card statement - March 2016", "documents": [{ "uid": "uid_32", "contentType": "application/pdf" }] }, { "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2016-04-09", "category": "Credit Card", "description": "Credit Card statement - April 2016", "documents": [{ "url": "http://server.com/documentsdepo/uid_33", "contentType": "application/pdf" }] }, { "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2016-05-09", "category": "Credit Card", "description": "Credit Card statement - May 2016", "documents": [{ "uid": "uid_34", "contentType": "application/pdf" }] }, { "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2016-06-09", "category": "Credit Card", "description": "Credit Card statement - June 2016", "documents": [{ "url": "http://server.com/documentsdepo/uid_35", "contentType": "application/pdf" }] }, { "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2016-07-09", "category": "Credit Card", "description": "Credit Card statement - July 2016", "documents": [{ "uid": "uid_36", "contentType": "application/pdf" }] }, { "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2016-08-09", "category": "Credit Card", "description": "Credit Card statement - August 2016", "documents": [{ "url": "http://server.com/documentsdepo/uid_37", "contentType": "application/pdf" }] }, { "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2016-09-09", "category": "Credit Card", "description": "Credit Card statement - September 2016", "documents": [{ "uid": "uid_38", "url": "", "contentType": "" }] }, { "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-01-31", "category": "Account", "description": "Account statement - January 2017", "documents": [{ "uid": "", "contentType": "application/pdf" }, { "uid": "uid_39_2", "contentType": "text/csv" }] }, { "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-02-28", "category": "Account", "description": "Account statement - February 2017", "documents": [{ "url": "http://server.com/documentsdepo/uid_40_1", "contentType": "application/pdf" }, { "url": "", "contentType": "text/csv" }] }, { "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-03-31", "category": "Account", "description": "Account statement - March 2017", "documents": [{ "uid": "uid_41_1", "contentType": "application/pdf" }, { "url": "http://server.com/documentsdepo/uid_41_2", "contentType": "text/csv" }] }, { "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-04-30", "category": "Account", "description": "Account statement - April 2017", "documents": [{ "uid": "uid_42_1", "contentType": "application/pdf" }, { "url": "http://server.com/documentsdepo/uid_42_2", "contentType": "text/csv" }] }, { "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-05-31", "category": "Account", "description": "Account statement - May 2017", "documents": [{ "uid": "uid_43_1", "contentType": "application/pdf" }, { "url": "http://server.com/documentsdepo/uid_43_2", "contentType": "text/csv" }] }, { "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-06-30", "category": "Account", "description": "Account statement - June 2017", "documents": [{ "url": "http://server.com/documentsdepo/uid_44_1", "contentType": "application/pdf" }, { "uid": "uid_44_2", "contentType": "text/csv" }] }, { "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-07-31", "category": "Account", "description": "Account statement - July 2017", "documents": [{ "uid": "uid_45_1", "contentType": "application/pdf" }, { "uid": "uid_45_2", "contentType": "text/csv" }] }, { "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-08-31", "category": "Account", "description": "Account statement - August 2017", "documents": [{ "url": "http://server.com/documentsdepo/uid_46_1", "contentType": "application/pdf" }, { "url": "http://server.com/documentsdepo/uid_46_2", "contentType": "text/csv" }] }, { "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-09-30", "description": "Statement - September 2017", "documents": [{ "uid": "uid_47_2", "contentType": "text/csv" }] }, { "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-10-31", "category": "Account", "description": "Account statement - October 2017", "documents": [{ "uid": "uid_48_1", "contentType": "application/pdf" }, { "uid": "uid_48_2", "contentType": "text/csv" }] }, { "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-11-30", "category": "Account", "description": "Account statement - November 2017", "documents": [{ "url": "http://server.com/documentsdepo/uid_49_1", "contentType": "application/pdf" }, { "url": "http://server.com/documentsdepo/uid_49_2", "contentType": "text/csv" }] }, { "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-12-31", "category": "Account", "description": "Account statement - December 2017", "documents": [{ "uid": "uid_50_1", "contentType": "application/pdf" }] }, { "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-05-19", "category": "Mortgage", "description": "Mortgage statement - May 2017", "documents": [{ "url": "http://server.com/documentsdepo/uid_51", "contentType": "application/pdf" }] }, { "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-06-19", "category": "Mortgage", "description": "Mortgage statement - June 2017", "documents": [{ "uid": "uid_52", "contentType": "application/pdf" }] }, { "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-06-20", "category": "Mortgage", "description": "Mortgage statement - July 2017", "documents": [{ "url": "http://server.com/documentsdepo/uid_53", "contentType": "application/pdf" }] }, { "accountId": "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "date": "2017-08-19", "category": "Mortgage", "description": "Mortgage statement - August 2017", "documents": [{ "uid": "uid_54", "contentType": "application/pdf" }] }] }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      getAccountStatementsCategories: [{ "status": 200, "data": { "categories": ["Account", "Credit Card", "Mortgage", "Tax Form", "LOC", "EELOC"] } }]
	
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
	
	    var plugins = (_plugins = {}, _defineProperty(_plugins, PLUGINS_ALL, []), _defineProperty(_plugins, 'getAccountStatements', []), _defineProperty(_plugins, 'getAccountStatementsCategories', []), _plugins);
	
	    if (!plugins['getAccountStatements']) {
	      console.warn('%cThere is no "getAccountStatements" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getAccountStatements'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['getAccountStatements']) {
	      console.warn('%cThere is no "getAccountStatements" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getAccountStatements'].push(function (result, args) {
	        var data = result.data;
	        var params = args[0] || {};
	        var date = params.date ? new Date(params.date) : undefined;
	        var categories = params.category || [];
	        var accountId = params.accountId;
	
	        var parseDate = function parseDate(item) {
	          return new Date(item.date);
	        };
	        var compare = function compare(x, y) {
	          if (x < y) return -1;
	          return x === y ? 0 : 1;
	        };
	        var compareDates = function compareDates(date1, date2) {
	          var results = compare(date1.getFullYear(), date2.getFullYear());
	
	          if (results !== 0) {
	            return results;
	          }
	
	          results = compare(date1.getMonth(), date2.getMonth());
	
	          if (results !== 0) {
	            return results;
	          }
	
	          return compare(date1.getDay(), date2.getDay());
	        };
	
	        var dateFilter = function dateFilter(item) {
	          return !date || compareDates(parseDate(item), date) >= 0;
	        };
	        var accountIdFilter = function accountIdFilter(item) {
	          return !accountId || item.accountId === accountId;
	        };
	        var categoriesFilter = function categoriesFilter(item) {
	          return categories.length === 0 || categories.includes(item.category);
	        };
	
	        data = data.filter(function (item) {
	          return dateFilter(item) && accountIdFilter(item) && categoriesFilter(item);
	        });
	
	        return Object.assign({}, result, { data: data });
	      });
	    }
	
	    if (!plugins['getAccountStatements']) {
	      console.warn('%cThere is no "getAccountStatements" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getAccountStatements'].push(function anonymous(result, args
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
	
	    if (!plugins['getAccountStatements']) {
	      console.warn('%cThere is no "getAccountStatements" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getAccountStatements'].push(function (result, args) {
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
	
	    function getAccountStatements(params, headers) {
	      var url = '' + baseUri + version + '/account/statements';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccountStatements', 200)).then(pluginMocks('getAccountStatements', [params, headers], '{version}/account/statements')).catch(handleError('getAccountStatements'));
	    }
	
	    function getAccountStatementsCategories(params, headers) {
	      var url = '' + baseUri + version + '/account/statements/categories';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccountStatementsCategories', 200)).then(pluginMocks('getAccountStatementsCategories', [params, headers], '{version}/account/statements/categories')).catch(handleError('getAccountStatementsCategories'));
	    }
	
	    function getAccountStatementsDownloadRecordUrl(uid, params) {
	      return '' + baseUri + version + '/account/statements/download/' + uid + '?' + serializeParams(params);
	    }
	
	    return {
	
	      getAccountStatements: getAccountStatements,
	
	      getAccountStatementsCategories: getAccountStatementsCategories,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=mock.data-bb-account-statements-http-ng.js.map