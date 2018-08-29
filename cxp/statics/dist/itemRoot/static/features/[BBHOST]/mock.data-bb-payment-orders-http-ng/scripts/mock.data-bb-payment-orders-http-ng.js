(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else if(typeof define === 'function' && define.amd)
		define("mock.data-bb-payment-orders-http-ng", ["vendor-bb-angular", "lib-bb-storage-ng"], factory);
	else if(typeof exports === 'object')
		exports["mock.data-bb-payment-orders-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else
		root["mock.data-bb-payment-orders-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage-ng"]);
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
	exports.paymentOrdersDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStorageNg = __webpack_require__(3);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _dataBbPaymentOrdersHttp = __webpack_require__(4);
	
	var _dataBbPaymentOrdersHttp2 = _interopRequireDefault(_dataBbPaymentOrdersHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var paymentOrdersDataModuleKey = 'data-bb-payment-orders-http-ng'; /* eslint-disable */
	var paymentOrdersDataKey = exports.paymentOrdersDataKey = 'data-bb-payment-orders-http-ng:paymentOrdersData';
	
	exports.default = _vendorBbAngular2.default.module(paymentOrdersDataModuleKey, [_libBbStorageNg2.default]).provider(paymentOrdersDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  return {
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	    $get: ['$q', _libBbStorageNg.bbStorageServiceKey, '$httpParamSerializer',
	    /* into */
	    (0, _dataBbPaymentOrdersHttp2.default)(config)]
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
	
	    var STORAGE_KEY = 'MOCK_STATE_paymentOrdersDataModuleKey';
	    var state = {
	      "{version}/payment-orders": [{
	        "id": "7d34169c-6714-11e7-907b-a6006ad3dba0",
	        "approvalId": "49dad7ab-604b-407a-ba47-a61ad93f31ce",
	        "status": "ENTERED",
	        "debtorAccount": {
	          "arrangementId": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	          "externalArrangementId": "a3f8defe-f447-4475-b5c1-d3971ec7a273",
	          "identification": {
	            "identification": "NL81TRIO0212471066",
	            "schemeName": "IBAN"
	          }
	        },
	        "debtor": {
	          "name": "Smith Bonus Savings",
	          "postalAddress": {
	            "addressLine1": "Jacob Bontiusplaats 9, 1018LL, Amsterdam"
	          }
	        },
	        "instructionPriority": "HIGH",
	        "requestedExecutionDate": "2018-08-16",
	        "paymentMode": "SINGLE",
	        "paymentType": "SEPA_CREDIT_TRANSFER",
	        "creditTransferTransactionInformation": [{
	          "endToEndIdentification": "Some reference",
	          "instructedAmount": {
	            "amount": "749.99",
	            "currencyCode": "EUR"
	          },
	          "creditorAccount": {
	            "identification": {
	              "identification": "MR1300020001010000123456753",
	              "schemeName": "IBAN"
	            },
	            "arrangementId": "fe9d66ae-b927-4ac7-8799-c5a38a596ff2",
	            "externalArrangementId": "9669274787995385962"
	          },
	          "creditor": {
	            "name": "John Smith"
	          }
	        }],
	        "actions": ["APPROVE"],
	        "createdBy": "U00243",
	        "createdAt": "2017-05-12T14:33:13.452Z",
	        "version": 1
	      }, {
	        "id": "0d0b6350-0ff9-11e8-b642-0ed5f89f718b",
	        "approvalId": "518bbd4a-0ff9-11e8-b642-0ed5f89f718b",
	        "status": "PROCESSED",
	        "bankStatus": "FINISHED",
	        "debtorAccount": {
	          "arrangementId": "729190df-a421-4937-94fd-5e1a3da132cc",
	          "externalArrangementId": "729190421493794513132",
	          "identification": {
	            "identification": "NL18INGB0664923638",
	            "schemeName": "IBAN"
	          },
	          "name": "Credit Account"
	        },
	        "debtor": {
	          "name": "Random Account",
	          "postalAddress": {
	            "country": "NL"
	          }
	        },
	        "batchBooking": true,
	        "instructionPriority": "NORM",
	        "requestedExecutionDate": "2018-08-11",
	        "paymentMode": "RECURRING",
	        "paymentType": "SEPA_CREDIT_TRANSFER",
	        "schedule": {
	          "transferFrequency": "MONTHLY",
	          "on": 1,
	          "startDate": "2017-08-12",
	          "every": 1,
	          "nextExecutionDate": "2018-08-15",
	          "endDate": "2018-05-12"
	        },
	        "creditTransferTransactionInformation": [{
	          "instructedAmount": {
	            "amount": "100.00",
	            "currencyCode": "EUR"
	          },
	          "creditorAccount": {
	            "identification": {
	              "identification": "NO9386011117947",
	              "schemeName": "IBAN"
	            }
	          },
	          "creditor": {
	            "name": "Jack Yellow"
	          },
	          "remittanceInformation": {
	            "type": "STRUCTURED",
	            "content": "<some-xml-tags>structured content with XML</some-xml-tags>"
	          }
	        }],
	        "createdBy": "U00243",
	        "createdAt": "2017-05-12T14:33:13.452Z",
	        "version": 1
	      }, {
	        "id": "7d341c28-6714-11e7-907b-a6006ad3dba0",
	        "approvalId": "c383c69f-38bf-4e3e-ad3f-5f58cf971bb1",
	        "status": "REJECTED",
	        "bankStatus": "ACCOUNT_BLOCKED",
	        "reasonCode": "AB01",
	        "reasonText": "Account blocked",
	        "errorDescription": "Blocked by bank.",
	        "debtorAccount": {
	          "arrangementId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	          "externalArrangementId": "bcf10f4d-4b2f-4413-9bab-31ff693608b5",
	          "identification": {
	            "identification": "FR188388353832IH3CAWFYXAA36",
	            "schemeName": "IBAN"
	          }
	        },
	        "debtor": {
	          "name": "Mr and Mrs J. Smith"
	        },
	        "instructionPriority": "NORM",
	        "requestedExecutionDate": "2018-07-16",
	        "paymentType": "SEPA_CREDIT_TRANSFER",
	        "creditTransferTransactionInformation": [{
	          "instructedAmount": {
	            "amount": "5000.55",
	            "currencyCode": "EUR"
	          },
	          "creditorAccount": {
	            "identification": {
	              "identification": "LT121000011101001000",
	              "schemeName": "IBAN"
	            },
	            "name": "ABN Amro"
	          },
	          "creditor": {
	            "name": "Backbase",
	            "postalAddress": {
	              "addressLine1": "Jacob Bontiusplaats 9, 1018LL, Amsterdam",
	              "country": "NL"
	            }
	          },
	          "remittanceInformation": {
	            "type": "UNSTRUCTURED",
	            "content": "Return a debt"
	          }
	        }],
	        "createdBy": "U00243",
	        "createdAt": "2017-05-12T14:33:13.452Z",
	        "version": 1
	      }, {
	        "id": "7d34215a-6714-11e7-907b-a6006ad3dba0",
	        "approvalId": "ae01c614-d473-48d6-af7d-f516292b39cb",
	        "status": "ACCEPTED",
	        "bankStatus": "ACCEPTEDTECHNICALVALIDATION",
	        "reasonCode": "AC01",
	        "reasonText": "Accepted by bank",
	        "debtorAccount": {
	          "arrangementId": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	          "externalArrangementId": "a3f8defe-f447-4475-b5c1-d3971ec7a273",
	          "identification": {
	            "identification": "NL81TRIO0212471066",
	            "schemeName": "IBAN"
	          }
	        },
	        "debtor": {
	          "name": "Smith Bonus Savings"
	        },
	        "batchBooking": false,
	        "requestedExecutionDate": "2018-07-23",
	        "paymentMode": "SINGLE",
	        "paymentType": "SEPA_CREDIT_TRANSFER",
	        "creditTransferTransactionInformation": [{
	          "endToEndIdentification": "Some reference",
	          "instructedAmount": {
	            "amount": "749.99",
	            "currencyCode": "EUR"
	          },
	          "creditorAccount": {
	            "identification": {
	              "identification": "LI21088100002324013AA",
	              "schemeName": "IBAN"
	            }
	          },
	          "creditor": {
	            "name": "Delivery Service"
	          }
	        }],
	        "actions": ["APPROVE", "REJECT"],
	        "createdBy": "U00243",
	        "createdAt": "2017-05-12T14:33:13.452Z",
	        "version": 1
	      }, {
	        "id": "7d342c15-6714-11e7-907b-a6006ad3dba0",
	        "approvalId": "ae01a624-d473-48d6-af7d-f516292b39cb",
	        "status": "ACCEPTED",
	        "bankStatus": "ACCEPTEDTECHNICALVALIDATION",
	        "reasonCode": "AC01",
	        "reasonText": "Accepted by bank",
	        "debtorAccount": {
	          "arrangementId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	          "externalArrangementId": "bcf10f4d-4b2f-4413-9bab-31ff693608b5",
	          "identification": {
	            "identification": "FR188388353832IH3CAWFYXAA36",
	            "schemeName": "IBAN"
	          }
	        },
	        "debtor": {
	          "name": "Mr and Mrs J. Smith"
	        },
	        "batchBooking": false,
	        "requestedExecutionDate": "2018-06-12",
	        "paymentMode": "SINGLE",
	        "paymentType": "SEPA_CREDIT_TRANSFER",
	        "creditTransferTransactionInformation": [{
	          "endToEndIdentification": "Some reference",
	          "instructedAmount": {
	            "amount": "99.99",
	            "currencyCode": "EUR"
	          },
	          "creditorAccount": {
	            "identification": {
	              "identification": "MR1300020001010000123456753",
	              "schemeName": "IBAN"
	            },
	            "arrangementId": "fe9d66ae-b927-4ac7-8799-c5a38a596ff2",
	            "externalArrangementId": "9669274787995385962"
	          },
	          "creditor": {
	            "name": "John Smith"
	          }
	        }],
	        "actions": ["APPROVE", "REJECT"],
	        "createdBy": "U00243",
	        "createdAt": "2017-05-12T14:33:13.452Z",
	        "version": 1
	      }, {
	        "id": "7d341a2a-6714-11e7-907b-a6006ad3dba0",
	        "approvalId": "264b69e4-3df0-49c1-8cda-e2bb437461e8",
	        "status": "ACCEPTED",
	        "bankStatus": "FINISHED",
	        "debtorAccount": {
	          "arrangementId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	          "externalArrangementId": "bcf10f4d-4b2f-4413-9bab-31ff693608b5",
	          "identification": {
	            "identification": "FR188388353832IH3CAWFYXAA36",
	            "schemeName": "IBAN"
	          }
	        },
	        "debtor": {
	          "name": "Mr and Mrs J. Smith"
	        },
	        "batchBooking": true,
	        "instructionPriority": "NORM",
	        "requestedExecutionDate": "2018-08-11",
	        "paymentMode": "RECURRING",
	        "paymentType": "SEPA_CREDIT_TRANSFER",
	        "schedule": {
	          "transferFrequency": "MONTHLY",
	          "on": 1,
	          "startDate": "2017-08-12",
	          "every": 1,
	          "nextExecutionDate": "2018-08-15",
	          "endDate": "2018-05-12"
	        },
	        "creditTransferTransactionInformation": [{
	          "instructedAmount": {
	            "amount": "133.33",
	            "currencyCode": "EUR"
	          },
	          "creditorAccount": {
	            "identification": {
	              "identification": "NO9386011117947",
	              "schemeName": "IBAN"
	            }
	          },
	          "creditor": {
	            "name": "Jack Yellow"
	          },
	          "remittanceInformation": {
	            "type": "STRUCTURED",
	            "content": "<some-xml-tags>structured content with XML</some-xml-tags>"
	          }
	        }],
	        "createdBy": "U00243",
	        "createdAt": "2017-05-12T14:33:13.452Z",
	        "version": 9312
	      }, {
	        "id": "5cea81b2-0ff9-11e8-b642-0ed5f89f718b",
	        "approvalId": "61624e82-0ff9-11e8-b642-0ed5f89f718b",
	        "status": "ACCEPTED",
	        "bankStatus": "FINISHED",
	        "debtorAccount": {
	          "arrangementId": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	          "externalArrangementId": "a3f8defe-f447-4475-b5c1-d3971ec7a273",
	          "identification": {
	            "identification": "NL81TRIO0212471066",
	            "schemeName": "IBAN"
	          }
	        },
	        "debtor": {
	          "name": "Smith Bonus Savings",
	          "postalAddress": {
	            "addressLine1": "Jacob Bontiusplaats 9, 1018LL, Amsterdam"
	          }
	        },
	        "batchBooking": true,
	        "instructionPriority": "NORM",
	        "requestedExecutionDate": "2018-08-11",
	        "paymentMode": "RECURRING",
	        "paymentType": "SEPA_CREDIT_TRANSFER",
	        "schedule": {
	          "transferFrequency": "MONTHLY",
	          "on": 1,
	          "startDate": "2017-08-12",
	          "every": 1,
	          "nextExecutionDate": "2018-08-15",
	          "endDate": "2018-05-12"
	        },
	        "creditTransferTransactionInformation": [{
	          "instructedAmount": {
	            "amount": "166.66",
	            "currencyCode": "EUR"
	          },
	          "creditorAccount": {
	            "identification": {
	              "identification": "HU42117730161111101800000000",
	              "schemeName": "IBAN"
	            }
	          },
	          "creditor": {
	            "name": "Jack Brown"
	          },
	          "remittanceInformation": {
	            "type": "STRUCTURED",
	            "content": "<some-xml-tags>structured content with XML</some-xml-tags>"
	          }
	        }],
	        "createdBy": "U00243",
	        "createdAt": "2017-05-12T14:33:13.452Z",
	        "version": 42
	      }, {
	        "id": "06db9298-189b-11e8-accf-0ed5f89f718b",
	        "approvalId": "11863018-189b-11e8-accf-0ed5f89f718b",
	        "status": "ENTERED",
	        "debtorAccount": {
	          "arrangementId": "729190df-a421-4937-94fd-5e1a3da132cc",
	          "identification": {
	            "identification": "0260-0959-3",
	            "schemeName": "BBAN"
	          }
	        },
	        "debtor": {
	          "name": "John Doe",
	          "postalAddress": {
	            "addressLine1": "228 Park Ave S",
	            "town": "New York"
	          }
	        },
	        "batchBooking": false,
	        "instructionPriority": "NORM",
	        "requestedExecutionDate": "2017-08-12",
	        "paymentMode": "RECURRING",
	        "paymentType": "US_FOREIGN_WIRE",
	        "schedule": {
	          "transferFrequency": "MONTHLY",
	          "on": 1,
	          "startDate": "2017-08-12",
	          "every": 1,
	          "nextExecutionDate": "2017-09-12",
	          "endDate": "2018-05-12"
	        },
	        "creditTransferTransactionInformation": [{
	          "endToEndIdentification": "TRNSCT REF 1234567890",
	          "instructedAmount": {
	            "amount": "104.66",
	            "currencyCode": "USD"
	          },
	          "creditorAccount": {
	            "identification": {
	              "identification": "NL91 ABNA 0417 1643 00",
	              "schemeName": "IBAN"
	            }
	          },
	          "creditor": {
	            "name": "Jack Brown",
	            "postalAddress": {
	              "addressLine1": "2589 Peaceful Lane",
	              "postCode": "44128",
	              "town": "Warrensville Heights",
	              "country": "US"
	            }
	          },
	          "remittanceInformation": {
	            "type": "UNSTRUCTURED",
	            "content": "Unstructured content"
	          },
	          "creditorBank": {
	            "bankBranchCode": "082000549",
	            "name": "Morgan Chase",
	            "postalAddress": {
	              "addressLine1": "4789 Vernon Street",
	              "postCode": "92028",
	              "town": "Fallbrook",
	              "country": "US"
	            }
	          },
	          "correspondentBank": {
	            "bankBranchCode": "122105155",
	            "name": "Bank of America"
	          },
	          "intermediaryBank": {
	            "bic": "DABAIE2D",
	            "bankBranchCode": "102000021",
	            "name": "SNSB"
	          },
	          "messageToBank": "My us international wire payment explanation.",
	          "targetCurrency": "EUR"
	        }],
	        "createdBy": "U00243",
	        "createdAt": "2017-05-12T14:33:13.452Z",
	        "version": 42
	      }, {
	        "id": "fa088818-623a-4260-bc46-1ff678de8dae",
	        "approvalId": "8605dc85-726c-4795-9b55-ff698ad2d1e4",
	        "status": "ENTERED",
	        "debtorAccount": {
	          "arrangementId": "07642680-2b6f-11e8-b467-0ed5f89f718b",
	          "identification": {
	            "identification": "00400440116243",
	            "schemeName": "BBAN"
	          }
	        },
	        "debtor": {
	          "name": "Mr John Usmith",
	          "postalAddress": {
	            "addressLine1": "Jacob Bontiusplaats 9, 1018LL, New York"
	          }
	        },
	        "instructionPriority": "HIGH",
	        "requestedExecutionDate": "2018-08-16",
	        "paymentMode": "SINGLE",
	        "paymentType": "INTERNAL",
	        "creditTransferTransactionInformation": [{
	          "endToEndIdentification": "Some reference",
	          "instructedAmount": {
	            "amount": "749.99",
	            "currencyCode": "USD"
	          },
	          "creditorAccount": {
	            "accountType": "SAVING",
	            "identification": {
	              "identification": "3242342348899",
	              "schemeName": "BBAN"
	            },
	            "arrangementId": "fe9d66ae-b927-4ac7-8799-c5a38a596ff2"
	          },
	          "creditor": {
	            "name": "John Doe"
	          }
	        }],
	        "actions": ["APPROVE"],
	        "createdBy": "U00243",
	        "createdAt": "2017-05-12T14:33:13.452Z",
	        "version": 1
	      }, {
	        "id": "f58a410e-469c-41f1-8c51-21b6d24bd3c1",
	        "approvalId": "7527c230-01a7-41b8-a021-dc29aca98fe3",
	        "status": "ENTERED",
	        "debtorAccount": {
	          "arrangementId": "07642680-2b6f-11e8-b467-0ed5f89f718b",
	          "identification": {
	            "identification": "00400440116243",
	            "schemeName": "BBAN"
	          }
	        },
	        "debtor": {
	          "name": "Mr John Usmith",
	          "postalAddress": {
	            "addressLine1": "Jacob Bontiusplaats 9, 1018LL, Los Angeles"
	          }
	        },
	        "instructionPriority": "HIGH",
	        "requestedExecutionDate": "2018-08-16",
	        "paymentMode": "SINGLE",
	        "paymentType": "INTERNAL",
	        "creditTransferTransactionInformation": [{
	          "endToEndIdentification": "Some reference",
	          "instructedAmount": {
	            "amount": "134",
	            "currencyCode": "USD"
	          },
	          "creditorAccount": {
	            "accountType": "CHECKING",
	            "identification": {
	              "identification": "3242342123899",
	              "schemeName": "BBAN"
	            },
	            "arrangementId": "fe9d66ae-b927-4ac7-8799-c5a38a596ff2"
	          },
	          "creditor": {
	            "name": "Dan Brown"
	          },
	          "remittanceInformation": {
	            "type": "UNSTRUCTURED",
	            "content": "Return a debt`"
	          }
	        }],
	        "actions": ["APPROVE"],
	        "createdBy": "U00243",
	        "createdAt": "2017-05-12T14:33:13.452Z",
	        "version": 1
	      }],
	      "{version}/payment-order-drafts": [{
	        "id": "7d34169c-6714-11e7-907b-a6006ad3dba0",
	        "approvalId": "49dad7ab-604b-407a-ba47-a61ad93f31ce",
	        "status": "ENTERED",
	        "debtorAccount": {
	          "arrangementId": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	          "externalArrangementId": "a3f8defe-f447-4475-b5c1-d3971ec7a273",
	          "identification": {
	            "identification": "NL81TRIO0212471066",
	            "schemeName": "IBAN"
	          }
	        },
	        "debtor": {
	          "name": "Smith Bonus Savings",
	          "postalAddress": {
	            "addressLine1": "Jacob Bontiusplaats 9, 1018LL, Amsterdam"
	          }
	        },
	        "instructionPriority": "HIGH",
	        "requestedExecutionDate": "2018-08-16",
	        "paymentMode": "SINGLE",
	        "paymentType": "SEPA_CREDIT_TRANSFER",
	        "creditTransferTransactionInformation": [{
	          "endToEndIdentification": "Some reference",
	          "instructedAmount": {
	            "amount": "749.99",
	            "currencyCode": "EUR"
	          },
	          "creditorAccount": {
	            "identification": {
	              "identification": "MR1300020001010000123456753",
	              "schemeName": "IBAN"
	            },
	            "arrangementId": "fe9d66ae-b927-4ac7-8799-c5a38a596ff2",
	            "externalArrangementId": "9669274787995385962"
	          },
	          "creditor": {
	            "name": "John Smith"
	          }
	        }],
	        "actions": ["APPROVE"],
	        "createdBy": "U00243",
	        "createdAt": "2017-05-12T14:33:13.452Z",
	        "version": 1
	      }, {
	        "id": "0d0b6350-0ff9-11e8-b642-0ed5f89f718b",
	        "approvalId": "518bbd4a-0ff9-11e8-b642-0ed5f89f718b",
	        "status": "PROCESSED",
	        "bankStatus": "FINISHED",
	        "debtorAccount": {
	          "arrangementId": "729190df-a421-4937-94fd-5e1a3da132cc",
	          "externalArrangementId": "729190421493794513132",
	          "identification": {
	            "identification": "NL18INGB0664923638",
	            "schemeName": "IBAN"
	          },
	          "name": "Credit Account"
	        },
	        "debtor": {
	          "name": "Random Account",
	          "postalAddress": {
	            "country": "NL"
	          }
	        },
	        "batchBooking": true,
	        "instructionPriority": "NORM",
	        "requestedExecutionDate": "2018-08-11",
	        "paymentMode": "RECURRING",
	        "paymentType": "SEPA_CREDIT_TRANSFER",
	        "schedule": {
	          "transferFrequency": "MONTHLY",
	          "on": 1,
	          "startDate": "2017-08-12",
	          "every": 1,
	          "nextExecutionDate": "2018-08-15",
	          "endDate": "2018-05-12"
	        },
	        "creditTransferTransactionInformation": [{
	          "instructedAmount": {
	            "amount": "100.00",
	            "currencyCode": "EUR"
	          },
	          "creditorAccount": {
	            "identification": {
	              "identification": "NO9386011117947",
	              "schemeName": "IBAN"
	            }
	          },
	          "creditor": {
	            "name": "Jack Yellow"
	          },
	          "remittanceInformation": {
	            "type": "STRUCTURED",
	            "content": "<some-xml-tags>structured content with XML</some-xml-tags>"
	          }
	        }],
	        "createdBy": "U00243",
	        "createdAt": "2017-05-12T14:33:13.452Z",
	        "version": 1
	      }, {
	        "id": "7d341c28-6714-11e7-907b-a6006ad3dba0",
	        "approvalId": "c383c69f-38bf-4e3e-ad3f-5f58cf971bb1",
	        "status": "REJECTED",
	        "bankStatus": "ACCOUNT_BLOCKED",
	        "reasonCode": "AB01",
	        "reasonText": "Account blocked",
	        "errorDescription": "Blocked by bank.",
	        "debtorAccount": {
	          "arrangementId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	          "externalArrangementId": "bcf10f4d-4b2f-4413-9bab-31ff693608b5",
	          "identification": {
	            "identification": "FR188388353832IH3CAWFYXAA36",
	            "schemeName": "IBAN"
	          }
	        },
	        "debtor": {
	          "name": "Mr and Mrs J. Smith"
	        },
	        "instructionPriority": "NORM",
	        "requestedExecutionDate": "2018-07-16",
	        "paymentType": "SEPA_CREDIT_TRANSFER",
	        "creditTransferTransactionInformation": [{
	          "instructedAmount": {
	            "amount": "5000.55",
	            "currencyCode": "EUR"
	          },
	          "creditorAccount": {
	            "identification": {
	              "identification": "LT121000011101001000",
	              "schemeName": "IBAN"
	            },
	            "name": "ABN Amro"
	          },
	          "creditor": {
	            "name": "Backbase",
	            "postalAddress": {
	              "addressLine1": "Jacob Bontiusplaats 9, 1018LL, Amsterdam",
	              "country": "NL"
	            }
	          },
	          "remittanceInformation": {
	            "type": "UNSTRUCTURED",
	            "content": "Return a debt"
	          }
	        }],
	        "createdBy": "U00243",
	        "createdAt": "2017-05-12T14:33:13.452Z",
	        "version": 1
	      }, {
	        "id": "7d34215a-6714-11e7-907b-a6006ad3dba0",
	        "approvalId": "ae01c614-d473-48d6-af7d-f516292b39cb",
	        "status": "ACCEPTED",
	        "bankStatus": "ACCEPTEDTECHNICALVALIDATION",
	        "reasonCode": "AC01",
	        "reasonText": "Accepted by bank",
	        "debtorAccount": {
	          "arrangementId": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	          "externalArrangementId": "a3f8defe-f447-4475-b5c1-d3971ec7a273",
	          "identification": {
	            "identification": "NL81TRIO0212471066",
	            "schemeName": "IBAN"
	          }
	        },
	        "debtor": {
	          "name": "Smith Bonus Savings"
	        },
	        "batchBooking": false,
	        "requestedExecutionDate": "2018-07-23",
	        "paymentMode": "SINGLE",
	        "paymentType": "SEPA_CREDIT_TRANSFER",
	        "creditTransferTransactionInformation": [{
	          "endToEndIdentification": "Some reference",
	          "instructedAmount": {
	            "amount": "749.99",
	            "currencyCode": "EUR"
	          },
	          "creditorAccount": {
	            "identification": {
	              "identification": "LI21088100002324013AA",
	              "schemeName": "IBAN"
	            }
	          },
	          "creditor": {
	            "name": "Delivery Service"
	          }
	        }],
	        "actions": ["APPROVE", "REJECT"],
	        "createdBy": "U00243",
	        "createdAt": "2017-05-12T14:33:13.452Z",
	        "version": 1
	      }, {
	        "id": "7d342c15-6714-11e7-907b-a6006ad3dba0",
	        "approvalId": "ae01a624-d473-48d6-af7d-f516292b39cb",
	        "status": "ACCEPTED",
	        "bankStatus": "ACCEPTEDTECHNICALVALIDATION",
	        "reasonCode": "AC01",
	        "reasonText": "Accepted by bank",
	        "debtorAccount": {
	          "arrangementId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	          "externalArrangementId": "bcf10f4d-4b2f-4413-9bab-31ff693608b5",
	          "identification": {
	            "identification": "FR188388353832IH3CAWFYXAA36",
	            "schemeName": "IBAN"
	          }
	        },
	        "debtor": {
	          "name": "Mr and Mrs J. Smith"
	        },
	        "batchBooking": false,
	        "requestedExecutionDate": "2018-06-12",
	        "paymentMode": "SINGLE",
	        "paymentType": "SEPA_CREDIT_TRANSFER",
	        "creditTransferTransactionInformation": [{
	          "endToEndIdentification": "Some reference",
	          "instructedAmount": {
	            "amount": "99.99",
	            "currencyCode": "EUR"
	          },
	          "creditorAccount": {
	            "identification": {
	              "identification": "MR1300020001010000123456753",
	              "schemeName": "IBAN"
	            },
	            "arrangementId": "fe9d66ae-b927-4ac7-8799-c5a38a596ff2",
	            "externalArrangementId": "9669274787995385962"
	          },
	          "creditor": {
	            "name": "John Smith"
	          }
	        }],
	        "actions": ["APPROVE", "REJECT"],
	        "createdBy": "U00243",
	        "createdAt": "2017-05-12T14:33:13.452Z",
	        "version": 1
	      }, {
	        "id": "7d341a2a-6714-11e7-907b-a6006ad3dba0",
	        "approvalId": "264b69e4-3df0-49c1-8cda-e2bb437461e8",
	        "status": "ACCEPTED",
	        "bankStatus": "FINISHED",
	        "debtorAccount": {
	          "arrangementId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	          "externalArrangementId": "bcf10f4d-4b2f-4413-9bab-31ff693608b5",
	          "identification": {
	            "identification": "FR188388353832IH3CAWFYXAA36",
	            "schemeName": "IBAN"
	          }
	        },
	        "debtor": {
	          "name": "Mr and Mrs J. Smith"
	        },
	        "batchBooking": true,
	        "instructionPriority": "NORM",
	        "requestedExecutionDate": "2018-08-11",
	        "paymentMode": "RECURRING",
	        "paymentType": "SEPA_CREDIT_TRANSFER",
	        "schedule": {
	          "transferFrequency": "MONTHLY",
	          "on": 1,
	          "startDate": "2017-08-12",
	          "every": 1,
	          "nextExecutionDate": "2018-08-15",
	          "endDate": "2018-05-12"
	        },
	        "creditTransferTransactionInformation": [{
	          "instructedAmount": {
	            "amount": "133.33",
	            "currencyCode": "EUR"
	          },
	          "creditorAccount": {
	            "identification": {
	              "identification": "NO9386011117947",
	              "schemeName": "IBAN"
	            }
	          },
	          "creditor": {
	            "name": "Jack Yellow"
	          },
	          "remittanceInformation": {
	            "type": "STRUCTURED",
	            "content": "<some-xml-tags>structured content with XML</some-xml-tags>"
	          }
	        }],
	        "createdBy": "U00243",
	        "createdAt": "2017-05-12T14:33:13.452Z",
	        "version": 9312
	      }, {
	        "id": "5cea81b2-0ff9-11e8-b642-0ed5f89f718b",
	        "approvalId": "61624e82-0ff9-11e8-b642-0ed5f89f718b",
	        "status": "ACCEPTED",
	        "bankStatus": "FINISHED",
	        "debtorAccount": {
	          "arrangementId": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	          "externalArrangementId": "a3f8defe-f447-4475-b5c1-d3971ec7a273",
	          "identification": {
	            "identification": "NL81TRIO0212471066",
	            "schemeName": "IBAN"
	          }
	        },
	        "debtor": {
	          "name": "Smith Bonus Savings",
	          "postalAddress": {
	            "addressLine1": "Jacob Bontiusplaats 9, 1018LL, Amsterdam"
	          }
	        },
	        "batchBooking": true,
	        "instructionPriority": "NORM",
	        "requestedExecutionDate": "2018-08-11",
	        "paymentMode": "RECURRING",
	        "paymentType": "SEPA_CREDIT_TRANSFER",
	        "schedule": {
	          "transferFrequency": "MONTHLY",
	          "on": 1,
	          "startDate": "2017-08-12",
	          "every": 1,
	          "nextExecutionDate": "2018-08-15",
	          "endDate": "2018-05-12"
	        },
	        "creditTransferTransactionInformation": [{
	          "instructedAmount": {
	            "amount": "166.66",
	            "currencyCode": "EUR"
	          },
	          "creditorAccount": {
	            "identification": {
	              "identification": "HU42117730161111101800000000",
	              "schemeName": "IBAN"
	            }
	          },
	          "creditor": {
	            "name": "Jack Brown"
	          },
	          "remittanceInformation": {
	            "type": "STRUCTURED",
	            "content": "<some-xml-tags>structured content with XML</some-xml-tags>"
	          }
	        }],
	        "createdBy": "U00243",
	        "createdAt": "2017-05-12T14:33:13.452Z",
	        "version": 42
	      }, {
	        "id": "06db9298-189b-11e8-accf-0ed5f89f718b",
	        "approvalId": "11863018-189b-11e8-accf-0ed5f89f718b",
	        "status": "ENTERED",
	        "debtorAccount": {
	          "arrangementId": "729190df-a421-4937-94fd-5e1a3da132cc",
	          "identification": {
	            "identification": "0260-0959-3",
	            "schemeName": "BBAN"
	          }
	        },
	        "debtor": {
	          "name": "John Doe",
	          "postalAddress": {
	            "addressLine1": "228 Park Ave S",
	            "town": "New York"
	          }
	        },
	        "batchBooking": false,
	        "instructionPriority": "NORM",
	        "requestedExecutionDate": "2017-08-12",
	        "paymentMode": "RECURRING",
	        "paymentType": "US_FOREIGN_WIRE",
	        "schedule": {
	          "transferFrequency": "MONTHLY",
	          "on": 1,
	          "startDate": "2017-08-12",
	          "every": 1,
	          "nextExecutionDate": "2017-09-12",
	          "endDate": "2018-05-12"
	        },
	        "creditTransferTransactionInformation": [{
	          "endToEndIdentification": "TRNSCT REF 1234567890",
	          "instructedAmount": {
	            "amount": "104.66",
	            "currencyCode": "USD"
	          },
	          "creditorAccount": {
	            "identification": {
	              "identification": "NL91 ABNA 0417 1643 00",
	              "schemeName": "IBAN"
	            }
	          },
	          "creditor": {
	            "name": "Jack Brown",
	            "postalAddress": {
	              "addressLine1": "2589 Peaceful Lane",
	              "postCode": "44128",
	              "town": "Warrensville Heights",
	              "country": "US"
	            }
	          },
	          "remittanceInformation": {
	            "type": "UNSTRUCTURED",
	            "content": "Unstructured content"
	          },
	          "creditorBank": {
	            "bankBranchCode": "082000549",
	            "name": "Morgan Chase",
	            "postalAddress": {
	              "addressLine1": "4789 Vernon Street",
	              "postCode": "92028",
	              "town": "Fallbrook",
	              "country": "US"
	            }
	          },
	          "correspondentBank": {
	            "bankBranchCode": "122105155",
	            "name": "Bank of America"
	          },
	          "intermediaryBank": {
	            "bic": "DABAIE2D",
	            "bankBranchCode": "102000021",
	            "name": "SNSB"
	          },
	          "messageToBank": "My us international wire payment explanation.",
	          "targetCurrency": "EUR"
	        }],
	        "createdBy": "U00243",
	        "createdAt": "2017-05-12T14:33:13.452Z",
	        "version": 42
	      }, {
	        "id": "fa088818-623a-4260-bc46-1ff678de8dae",
	        "approvalId": "8605dc85-726c-4795-9b55-ff698ad2d1e4",
	        "status": "ENTERED",
	        "debtorAccount": {
	          "arrangementId": "07642680-2b6f-11e8-b467-0ed5f89f718b",
	          "identification": {
	            "identification": "00400440116243",
	            "schemeName": "BBAN"
	          }
	        },
	        "debtor": {
	          "name": "Mr John Usmith",
	          "postalAddress": {
	            "addressLine1": "Jacob Bontiusplaats 9, 1018LL, New York"
	          }
	        },
	        "instructionPriority": "HIGH",
	        "requestedExecutionDate": "2018-08-16",
	        "paymentMode": "SINGLE",
	        "paymentType": "INTERNAL",
	        "creditTransferTransactionInformation": [{
	          "endToEndIdentification": "Some reference",
	          "instructedAmount": {
	            "amount": "749.99",
	            "currencyCode": "USD"
	          },
	          "creditorAccount": {
	            "accountType": "SAVING",
	            "identification": {
	              "identification": "3242342348899",
	              "schemeName": "BBAN"
	            },
	            "arrangementId": "fe9d66ae-b927-4ac7-8799-c5a38a596ff2"
	          },
	          "creditor": {
	            "name": "John Doe"
	          }
	        }],
	        "actions": ["APPROVE"],
	        "createdBy": "U00243",
	        "createdAt": "2017-05-12T14:33:13.452Z",
	        "version": 1
	      }, {
	        "id": "f58a410e-469c-41f1-8c51-21b6d24bd3c1",
	        "approvalId": "7527c230-01a7-41b8-a021-dc29aca98fe3",
	        "status": "ENTERED",
	        "debtorAccount": {
	          "arrangementId": "07642680-2b6f-11e8-b467-0ed5f89f718b",
	          "identification": {
	            "identification": "00400440116243",
	            "schemeName": "BBAN"
	          }
	        },
	        "debtor": {
	          "name": "Mr John Usmith",
	          "postalAddress": {
	            "addressLine1": "Jacob Bontiusplaats 9, 1018LL, Los Angeles"
	          }
	        },
	        "instructionPriority": "HIGH",
	        "requestedExecutionDate": "2018-08-16",
	        "paymentMode": "SINGLE",
	        "paymentType": "INTERNAL",
	        "creditTransferTransactionInformation": [{
	          "endToEndIdentification": "Some reference",
	          "instructedAmount": {
	            "amount": "134",
	            "currencyCode": "USD"
	          },
	          "creditorAccount": {
	            "accountType": "CHECKING",
	            "identification": {
	              "identification": "3242342123899",
	              "schemeName": "BBAN"
	            },
	            "arrangementId": "fe9d66ae-b927-4ac7-8799-c5a38a596ff2"
	          },
	          "creditor": {
	            "name": "Dan Brown"
	          },
	          "remittanceInformation": {
	            "type": "UNSTRUCTURED",
	            "content": "Return a debt`"
	          }
	        }],
	        "actions": ["APPROVE"],
	        "createdBy": "U00243",
	        "createdAt": "2017-05-12T14:33:13.452Z",
	        "version": 1
	      }],
	      "{version}/payment-orders/currencies": [{
	        "code": "EUR"
	      }, {
	        "code": "USD"
	      }, {
	        "code": "GBP"
	      }, {
	        "code": "ISK"
	      }, {
	        "code": "KWD"
	      }],
	      "productSummaryData": [{
	        "id": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
	        "externalArrangementId": "bcf10f4d-4b2f-4413-9bab-31ff693608b5",
	        "externalLegalEntityId": "27263171-94d5-4d82-975c-61d8c41644d0",
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
	        "externalLegalEntityId": "db792960-9574-434c-9fa9-9c3c82229472",
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
	        "externalLegalEntityId": "48dd9c4a-c47b-429a-9b86-e1f7f98ba531",
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
	        "externalLegalEntityId": "21dec57a-86c0-4089-90e4-b9ef2d0ad6d4",
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
	        "externalLegalEntityId": "b410db32-02a8-4e5c-b373-964714050246",
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
	        "externalLegalEntityId": "b410db32-02a8-4e5c-b373-964714050246",
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
	      }]
	    };
	
	    bbStorage.subscribe(STORAGE_KEY, function (newState) {
	      state = newState;
	    });
	
	    var persistState = function persistState(newState) {
	      bbStorage.setItem(STORAGE_KEY, newState);
	    };
	
	    var responses = {
	
	      getPaymentOrders: [{ "status": 200, "data": [{ "id": "7d34169c-6714-11e7-907b-a6006ad3dba0", "approvalId": "49dad7ab-604b-407a-ba47-a61ad93f31ce", "status": "ENTERED", "debtorAccount": { "arrangementId": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "a3f8defe-f447-4475-b5c1-d3971ec7a273", "identification": { "identification": "NL81TRIO0212471066", "schemeName": "IBAN" } }, "debtor": { "name": "Smith Bonus Savings", "postalAddress": { "addressLine1": "Jacob Bontiusplaats 9, 1018LL, Amsterdam" } }, "instructionPriority": "HIGH", "requestedExecutionDate": "2018-08-16", "paymentMode": "SINGLE", "paymentType": "SEPA_CREDIT_TRANSFER", "creditTransferTransactionInformation": [{ "endToEndIdentification": "Some reference", "instructedAmount": { "amount": "749.99", "currencyCode": "EUR" }, "creditorAccount": { "identification": { "identification": "MR1300020001010000123456753", "schemeName": "IBAN" }, "arrangementId": "fe9d66ae-b927-4ac7-8799-c5a38a596ff2", "externalArrangementId": "9669274787995385962" }, "creditor": { "name": "John Smith" } }], "actions": ["APPROVE"], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z", "version": 1 }, { "id": "0d0b6350-0ff9-11e8-b642-0ed5f89f718b", "approvalId": "518bbd4a-0ff9-11e8-b642-0ed5f89f718b", "status": "PROCESSED", "bankStatus": "FINISHED", "debtorAccount": { "arrangementId": "729190df-a421-4937-94fd-5e1a3da132cc", "externalArrangementId": "729190421493794513132", "identification": { "identification": "NL18INGB0664923638", "schemeName": "IBAN" }, "name": "Credit Account" }, "debtor": { "name": "Random Account", "postalAddress": { "country": "NL" } }, "batchBooking": true, "instructionPriority": "NORM", "requestedExecutionDate": "2018-08-11", "paymentMode": "RECURRING", "paymentType": "SEPA_CREDIT_TRANSFER", "schedule": { "transferFrequency": "MONTHLY", "on": 1, "startDate": "2017-08-12", "every": 1, "nextExecutionDate": "2018-08-15", "endDate": "2018-05-12" }, "creditTransferTransactionInformation": [{ "instructedAmount": { "amount": "100.00", "currencyCode": "EUR" }, "creditorAccount": { "identification": { "identification": "NO9386011117947", "schemeName": "IBAN" } }, "creditor": { "name": "Jack Yellow" }, "remittanceInformation": { "type": "STRUCTURED", "content": "<some-xml-tags>structured content with XML</some-xml-tags>" } }], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z", "version": 1 }, { "id": "7d341c28-6714-11e7-907b-a6006ad3dba0", "approvalId": "c383c69f-38bf-4e3e-ad3f-5f58cf971bb1", "status": "REJECTED", "bankStatus": "ACCOUNT_BLOCKED", "reasonCode": "AB01", "reasonText": "Account blocked", "errorDescription": "Blocked by bank.", "debtorAccount": { "arrangementId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "bcf10f4d-4b2f-4413-9bab-31ff693608b5", "identification": { "identification": "FR188388353832IH3CAWFYXAA36", "schemeName": "IBAN" } }, "debtor": { "name": "Mr and Mrs J. Smith" }, "instructionPriority": "NORM", "requestedExecutionDate": "2018-07-16", "paymentType": "SEPA_CREDIT_TRANSFER", "creditTransferTransactionInformation": [{ "instructedAmount": { "amount": "5000.55", "currencyCode": "EUR" }, "creditorAccount": { "identification": { "identification": "LT121000011101001000", "schemeName": "IBAN" }, "name": "ABN Amro" }, "creditor": { "name": "Backbase", "postalAddress": { "addressLine1": "Jacob Bontiusplaats 9, 1018LL, Amsterdam", "country": "NL" } }, "remittanceInformation": { "type": "UNSTRUCTURED", "content": "Return a debt" } }], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z", "version": 1 }, { "id": "7d34215a-6714-11e7-907b-a6006ad3dba0", "approvalId": "ae01c614-d473-48d6-af7d-f516292b39cb", "status": "ACCEPTED", "bankStatus": "ACCEPTEDTECHNICALVALIDATION", "reasonCode": "AC01", "reasonText": "Accepted by bank", "debtorAccount": { "arrangementId": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "a3f8defe-f447-4475-b5c1-d3971ec7a273", "identification": { "identification": "NL81TRIO0212471066", "schemeName": "IBAN" } }, "debtor": { "name": "Smith Bonus Savings" }, "batchBooking": false, "requestedExecutionDate": "2018-07-23", "paymentMode": "SINGLE", "paymentType": "SEPA_CREDIT_TRANSFER", "creditTransferTransactionInformation": [{ "endToEndIdentification": "Some reference", "instructedAmount": { "amount": "749.99", "currencyCode": "EUR" }, "creditorAccount": { "identification": { "identification": "LI21088100002324013AA", "schemeName": "IBAN" } }, "creditor": { "name": "Delivery Service" } }], "actions": ["APPROVE", "REJECT"], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z", "version": 1 }, { "id": "7d342c15-6714-11e7-907b-a6006ad3dba0", "approvalId": "ae01a624-d473-48d6-af7d-f516292b39cb", "status": "ACCEPTED", "bankStatus": "ACCEPTEDTECHNICALVALIDATION", "reasonCode": "AC01", "reasonText": "Accepted by bank", "debtorAccount": { "arrangementId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "bcf10f4d-4b2f-4413-9bab-31ff693608b5", "identification": { "identification": "FR188388353832IH3CAWFYXAA36", "schemeName": "IBAN" } }, "debtor": { "name": "Mr and Mrs J. Smith" }, "batchBooking": false, "requestedExecutionDate": "2018-06-12", "paymentMode": "SINGLE", "paymentType": "SEPA_CREDIT_TRANSFER", "creditTransferTransactionInformation": [{ "endToEndIdentification": "Some reference", "instructedAmount": { "amount": "99.99", "currencyCode": "EUR" }, "creditorAccount": { "identification": { "identification": "MR1300020001010000123456753", "schemeName": "IBAN" }, "arrangementId": "fe9d66ae-b927-4ac7-8799-c5a38a596ff2", "externalArrangementId": "9669274787995385962" }, "creditor": { "name": "John Smith" } }], "actions": ["APPROVE", "REJECT"], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z", "version": 1 }, { "id": "7d341a2a-6714-11e7-907b-a6006ad3dba0", "approvalId": "264b69e4-3df0-49c1-8cda-e2bb437461e8", "status": "ACCEPTED", "bankStatus": "FINISHED", "debtorAccount": { "arrangementId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "bcf10f4d-4b2f-4413-9bab-31ff693608b5", "identification": { "identification": "FR188388353832IH3CAWFYXAA36", "schemeName": "IBAN" } }, "debtor": { "name": "Mr and Mrs J. Smith" }, "batchBooking": true, "instructionPriority": "NORM", "requestedExecutionDate": "2018-08-11", "paymentMode": "RECURRING", "paymentType": "SEPA_CREDIT_TRANSFER", "schedule": { "transferFrequency": "MONTHLY", "on": 1, "startDate": "2017-08-12", "every": 1, "nextExecutionDate": "2018-08-15", "endDate": "2018-05-12" }, "creditTransferTransactionInformation": [{ "instructedAmount": { "amount": "133.33", "currencyCode": "EUR" }, "creditorAccount": { "identification": { "identification": "NO9386011117947", "schemeName": "IBAN" } }, "creditor": { "name": "Jack Yellow" }, "remittanceInformation": { "type": "STRUCTURED", "content": "<some-xml-tags>structured content with XML</some-xml-tags>" } }], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z", "version": 9312 }, { "id": "5cea81b2-0ff9-11e8-b642-0ed5f89f718b", "approvalId": "61624e82-0ff9-11e8-b642-0ed5f89f718b", "status": "ACCEPTED", "bankStatus": "FINISHED", "debtorAccount": { "arrangementId": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "a3f8defe-f447-4475-b5c1-d3971ec7a273", "identification": { "identification": "NL81TRIO0212471066", "schemeName": "IBAN" } }, "debtor": { "name": "Smith Bonus Savings", "postalAddress": { "addressLine1": "Jacob Bontiusplaats 9, 1018LL, Amsterdam" } }, "batchBooking": true, "instructionPriority": "NORM", "requestedExecutionDate": "2018-08-11", "paymentMode": "RECURRING", "paymentType": "SEPA_CREDIT_TRANSFER", "schedule": { "transferFrequency": "MONTHLY", "on": 1, "startDate": "2017-08-12", "every": 1, "nextExecutionDate": "2018-08-15", "endDate": "2018-05-12" }, "creditTransferTransactionInformation": [{ "instructedAmount": { "amount": "166.66", "currencyCode": "EUR" }, "creditorAccount": { "identification": { "identification": "HU42117730161111101800000000", "schemeName": "IBAN" } }, "creditor": { "name": "Jack Brown" }, "remittanceInformation": { "type": "STRUCTURED", "content": "<some-xml-tags>structured content with XML</some-xml-tags>" } }], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z", "version": 42 }, { "id": "06db9298-189b-11e8-accf-0ed5f89f718b", "approvalId": "11863018-189b-11e8-accf-0ed5f89f718b", "status": "ENTERED", "debtorAccount": { "arrangementId": "729190df-a421-4937-94fd-5e1a3da132cc", "identification": { "identification": "0260-0959-3", "schemeName": "BBAN" } }, "debtor": { "name": "John Doe", "postalAddress": { "addressLine1": "228 Park Ave S", "town": "New York" } }, "batchBooking": false, "instructionPriority": "NORM", "requestedExecutionDate": "2017-08-12", "paymentMode": "RECURRING", "paymentType": "US_FOREIGN_WIRE", "schedule": { "transferFrequency": "MONTHLY", "on": 1, "startDate": "2017-08-12", "every": 1, "nextExecutionDate": "2017-09-12", "endDate": "2018-05-12" }, "creditTransferTransactionInformation": [{ "endToEndIdentification": "TRNSCT REF 1234567890", "instructedAmount": { "amount": "104.66", "currencyCode": "USD" }, "creditorAccount": { "identification": { "identification": "NL91 ABNA 0417 1643 00", "schemeName": "IBAN" } }, "creditor": { "name": "Jack Brown", "postalAddress": { "addressLine1": "2589 Peaceful Lane", "postCode": "44128", "town": "Warrensville Heights", "country": "US" } }, "remittanceInformation": { "type": "UNSTRUCTURED", "content": "Unstructured content" }, "creditorBank": { "bankBranchCode": "082000549", "name": "Morgan Chase", "postalAddress": { "addressLine1": "4789 Vernon Street", "postCode": "92028", "town": "Fallbrook", "country": "US" } }, "correspondentBank": { "bankBranchCode": "122105155", "name": "Bank of America" }, "intermediaryBank": { "bic": "DABAIE2D", "bankBranchCode": "102000021", "name": "SNSB" }, "messageToBank": "My us international wire payment explanation.", "targetCurrency": "EUR" }], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z", "version": 42 }, { "id": "fa088818-623a-4260-bc46-1ff678de8dae", "approvalId": "8605dc85-726c-4795-9b55-ff698ad2d1e4", "status": "ENTERED", "debtorAccount": { "arrangementId": "07642680-2b6f-11e8-b467-0ed5f89f718b", "identification": { "identification": "00400440116243", "schemeName": "BBAN" } }, "debtor": { "name": "Mr John Usmith", "postalAddress": { "addressLine1": "Jacob Bontiusplaats 9, 1018LL, New York" } }, "instructionPriority": "HIGH", "requestedExecutionDate": "2018-08-16", "paymentMode": "SINGLE", "paymentType": "INTERNAL", "creditTransferTransactionInformation": [{ "endToEndIdentification": "Some reference", "instructedAmount": { "amount": "749.99", "currencyCode": "USD" }, "creditorAccount": { "accountType": "SAVING", "identification": { "identification": "3242342348899", "schemeName": "BBAN" }, "arrangementId": "fe9d66ae-b927-4ac7-8799-c5a38a596ff2" }, "creditor": { "name": "John Doe" } }], "actions": ["APPROVE"], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z", "version": 1 }, { "id": "f58a410e-469c-41f1-8c51-21b6d24bd3c1", "approvalId": "7527c230-01a7-41b8-a021-dc29aca98fe3", "status": "ENTERED", "debtorAccount": { "arrangementId": "07642680-2b6f-11e8-b467-0ed5f89f718b", "identification": { "identification": "00400440116243", "schemeName": "BBAN" } }, "debtor": { "name": "Mr John Usmith", "postalAddress": { "addressLine1": "Jacob Bontiusplaats 9, 1018LL, Los Angeles" } }, "instructionPriority": "HIGH", "requestedExecutionDate": "2018-08-16", "paymentMode": "SINGLE", "paymentType": "INTERNAL", "creditTransferTransactionInformation": [{ "endToEndIdentification": "Some reference", "instructedAmount": { "amount": "134", "currencyCode": "USD" }, "creditorAccount": { "accountType": "CHECKING", "identification": { "identification": "3242342123899", "schemeName": "BBAN" }, "arrangementId": "fe9d66ae-b927-4ac7-8799-c5a38a596ff2" }, "creditor": { "name": "Dan Brown" }, "remittanceInformation": { "type": "UNSTRUCTURED", "content": "Return a debt`" } }], "actions": ["APPROVE"], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z", "version": 1 }] }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      postPaymentOrdersRecord: [{ "status": 201, "data": { "id": "af2599ef-759a-4b78-8e67-4949055a532b", "status": "ENTERED" } }, { "status": 202, "data": { "id": "af2599ef-759a-4b78-8e67-4949055a532b", "status": "ENTERED" } }, { "status": 400, "data": null }, { "status": 401, "data": { "message": "You are not authorized to perform this action" } }, { "status": 403, "data": { "message": "Limits has been breached, check the report for more details", "payment": { "id": "7d341c28-6714-11e7-907b-a6006ad3dba0", "status": "ENTERED", "debtorAccount": { "arrangementId": "729190df-a421-4937-94fd-5e1a3da132cc", "identification": { "identification": "NL53RABO0309349755", "schemeName": "IBAN" } }, "instructionPriority": "NORM", "requestedExecutionDate": "2017-07-16", "creditTransferTransactionInformation": [{ "name": "Jack Jackson", "instructedAmount": { "amount": "5000.55", "currencyCode": "EUR" }, "creditorAccount": { "identification": { "identification": "FR708933019952AUNHQNQ0KZ", "schemeName": "IBAN" }, "arrangementId": "fe9d66ae-b927-4ac7-8799-c5a38a596ff2" }, "creditor": { "name": "Backbase", "postalAddress": { "addressLine1": "Jacob Bontiusplaats 9", "zipcode": "1018LL", "city": "Amsterdam", "country": "NL" } }, "remittanceInformation": { "type": "UNSTRUCTURED", "content": "Return a debt" } }], "version": 0 }, "checkTime": "2017-01-31T12:12:12Z", "breachReport": [{ "limitedEntity": [{ "ref": "1234567-12312-123123", "type": "Service Agreement", "description": "Kuhic, Gislason and Kemmer. SERVICE AGREEMENT" }], "shadow": false, "currency": "EUR", "user-BBID": "oleksii", "breachInfo": [{ "breachType": "THRESHOLD", "timeframe": { "period": "daily", "startTime": "2017-01-31T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "250.0", "currentThreshold": "499.9" }, { "breachType": "CONSUMPTION", "timeframe": { "period": "monthly", "startTime": "2017-01-01T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "9950.0", "currentThreshold": "10000.0" }] }, { "user-BBID": "oleksii", "shadow": false, "currency": "EUR", "breachInfo": [{ "breachType": "CONSUMPTION", "timeframe": { "period": "daily", "startTime": "2017-01-31T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "500.0", "currentThreshold": "1000.0" }] }, { "limitedEntity": [{ "ref": "1234567-12312-123123", "type": "Function Access Group", "description": "Payments approvers" }, { "ref": "1234567-12312-123123", "type": "Function", "description": "Domestic payments" }, { "ref": "Approve", "type": "Privilege", "description": "Approve" }], "shadow": false, "currency": "EUR", "breachInfo": [{ "breachType": "THRESHOLD", "timeframe": { "period": "daily", "startTime": "2017-01-31T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "250.0", "currentThreshold": "499.9" }] }, { "limitedEntity": [{ "ref": "1234567-12312-123123", "type": "Legal Entity", "description": "Kuhic, Gislason and Kemmer" }], "shadow": false, "currency": "EUR", "breachInfo": [{ "breachType": "CONSUMPTION", "timeframe": { "period": "quarterly", "startTime": "2017-01-01T00:00:00Z", "endTime": "2017-03-31T23:59:59Z" }, "currentConsumption": "99950.0", "currentThreshold": "100000.0" }] }] } }, { "status": 500, "data": null }],
	
	      getPaymentOrderDrafts: [{ "status": 200, "data": [{ "id": "7d34169c-6714-11e7-907b-a6006ad3dba0", "approvalId": "49dad7ab-604b-407a-ba47-a61ad93f31ce", "status": "ENTERED", "debtorAccount": { "arrangementId": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "a3f8defe-f447-4475-b5c1-d3971ec7a273", "identification": { "identification": "NL81TRIO0212471066", "schemeName": "IBAN" } }, "debtor": { "name": "Smith Bonus Savings", "postalAddress": { "addressLine1": "Jacob Bontiusplaats 9, 1018LL, Amsterdam" } }, "instructionPriority": "HIGH", "requestedExecutionDate": "2018-08-16", "paymentMode": "SINGLE", "paymentType": "SEPA_CREDIT_TRANSFER", "creditTransferTransactionInformation": [{ "endToEndIdentification": "Some reference", "instructedAmount": { "amount": "749.99", "currencyCode": "EUR" }, "creditorAccount": { "identification": { "identification": "MR1300020001010000123456753", "schemeName": "IBAN" }, "arrangementId": "fe9d66ae-b927-4ac7-8799-c5a38a596ff2", "externalArrangementId": "9669274787995385962" }, "creditor": { "name": "John Smith" } }], "actions": ["APPROVE"], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z", "version": 1 }, { "id": "0d0b6350-0ff9-11e8-b642-0ed5f89f718b", "approvalId": "518bbd4a-0ff9-11e8-b642-0ed5f89f718b", "status": "PROCESSED", "bankStatus": "FINISHED", "debtorAccount": { "arrangementId": "729190df-a421-4937-94fd-5e1a3da132cc", "externalArrangementId": "729190421493794513132", "identification": { "identification": "NL18INGB0664923638", "schemeName": "IBAN" }, "name": "Credit Account" }, "debtor": { "name": "Random Account", "postalAddress": { "country": "NL" } }, "batchBooking": true, "instructionPriority": "NORM", "requestedExecutionDate": "2018-08-11", "paymentMode": "RECURRING", "paymentType": "SEPA_CREDIT_TRANSFER", "schedule": { "transferFrequency": "MONTHLY", "on": 1, "startDate": "2017-08-12", "every": 1, "nextExecutionDate": "2018-08-15", "endDate": "2018-05-12" }, "creditTransferTransactionInformation": [{ "instructedAmount": { "amount": "100.00", "currencyCode": "EUR" }, "creditorAccount": { "identification": { "identification": "NO9386011117947", "schemeName": "IBAN" } }, "creditor": { "name": "Jack Yellow" }, "remittanceInformation": { "type": "STRUCTURED", "content": "<some-xml-tags>structured content with XML</some-xml-tags>" } }], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z", "version": 1 }, { "id": "7d341c28-6714-11e7-907b-a6006ad3dba0", "approvalId": "c383c69f-38bf-4e3e-ad3f-5f58cf971bb1", "status": "REJECTED", "bankStatus": "ACCOUNT_BLOCKED", "reasonCode": "AB01", "reasonText": "Account blocked", "errorDescription": "Blocked by bank.", "debtorAccount": { "arrangementId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "bcf10f4d-4b2f-4413-9bab-31ff693608b5", "identification": { "identification": "FR188388353832IH3CAWFYXAA36", "schemeName": "IBAN" } }, "debtor": { "name": "Mr and Mrs J. Smith" }, "instructionPriority": "NORM", "requestedExecutionDate": "2018-07-16", "paymentType": "SEPA_CREDIT_TRANSFER", "creditTransferTransactionInformation": [{ "instructedAmount": { "amount": "5000.55", "currencyCode": "EUR" }, "creditorAccount": { "identification": { "identification": "LT121000011101001000", "schemeName": "IBAN" }, "name": "ABN Amro" }, "creditor": { "name": "Backbase", "postalAddress": { "addressLine1": "Jacob Bontiusplaats 9, 1018LL, Amsterdam", "country": "NL" } }, "remittanceInformation": { "type": "UNSTRUCTURED", "content": "Return a debt" } }], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z", "version": 1 }, { "id": "7d34215a-6714-11e7-907b-a6006ad3dba0", "approvalId": "ae01c614-d473-48d6-af7d-f516292b39cb", "status": "ACCEPTED", "bankStatus": "ACCEPTEDTECHNICALVALIDATION", "reasonCode": "AC01", "reasonText": "Accepted by bank", "debtorAccount": { "arrangementId": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "a3f8defe-f447-4475-b5c1-d3971ec7a273", "identification": { "identification": "NL81TRIO0212471066", "schemeName": "IBAN" } }, "debtor": { "name": "Smith Bonus Savings" }, "batchBooking": false, "requestedExecutionDate": "2018-07-23", "paymentMode": "SINGLE", "paymentType": "SEPA_CREDIT_TRANSFER", "creditTransferTransactionInformation": [{ "endToEndIdentification": "Some reference", "instructedAmount": { "amount": "749.99", "currencyCode": "EUR" }, "creditorAccount": { "identification": { "identification": "LI21088100002324013AA", "schemeName": "IBAN" } }, "creditor": { "name": "Delivery Service" } }], "actions": ["APPROVE", "REJECT"], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z", "version": 1 }, { "id": "7d342c15-6714-11e7-907b-a6006ad3dba0", "approvalId": "ae01a624-d473-48d6-af7d-f516292b39cb", "status": "ACCEPTED", "bankStatus": "ACCEPTEDTECHNICALVALIDATION", "reasonCode": "AC01", "reasonText": "Accepted by bank", "debtorAccount": { "arrangementId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "bcf10f4d-4b2f-4413-9bab-31ff693608b5", "identification": { "identification": "FR188388353832IH3CAWFYXAA36", "schemeName": "IBAN" } }, "debtor": { "name": "Mr and Mrs J. Smith" }, "batchBooking": false, "requestedExecutionDate": "2018-06-12", "paymentMode": "SINGLE", "paymentType": "SEPA_CREDIT_TRANSFER", "creditTransferTransactionInformation": [{ "endToEndIdentification": "Some reference", "instructedAmount": { "amount": "99.99", "currencyCode": "EUR" }, "creditorAccount": { "identification": { "identification": "MR1300020001010000123456753", "schemeName": "IBAN" }, "arrangementId": "fe9d66ae-b927-4ac7-8799-c5a38a596ff2", "externalArrangementId": "9669274787995385962" }, "creditor": { "name": "John Smith" } }], "actions": ["APPROVE", "REJECT"], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z", "version": 1 }, { "id": "7d341a2a-6714-11e7-907b-a6006ad3dba0", "approvalId": "264b69e4-3df0-49c1-8cda-e2bb437461e8", "status": "ACCEPTED", "bankStatus": "FINISHED", "debtorAccount": { "arrangementId": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "bcf10f4d-4b2f-4413-9bab-31ff693608b5", "identification": { "identification": "FR188388353832IH3CAWFYXAA36", "schemeName": "IBAN" } }, "debtor": { "name": "Mr and Mrs J. Smith" }, "batchBooking": true, "instructionPriority": "NORM", "requestedExecutionDate": "2018-08-11", "paymentMode": "RECURRING", "paymentType": "SEPA_CREDIT_TRANSFER", "schedule": { "transferFrequency": "MONTHLY", "on": 1, "startDate": "2017-08-12", "every": 1, "nextExecutionDate": "2018-08-15", "endDate": "2018-05-12" }, "creditTransferTransactionInformation": [{ "instructedAmount": { "amount": "133.33", "currencyCode": "EUR" }, "creditorAccount": { "identification": { "identification": "NO9386011117947", "schemeName": "IBAN" } }, "creditor": { "name": "Jack Yellow" }, "remittanceInformation": { "type": "STRUCTURED", "content": "<some-xml-tags>structured content with XML</some-xml-tags>" } }], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z", "version": 9312 }, { "id": "5cea81b2-0ff9-11e8-b642-0ed5f89f718b", "approvalId": "61624e82-0ff9-11e8-b642-0ed5f89f718b", "status": "ACCEPTED", "bankStatus": "FINISHED", "debtorAccount": { "arrangementId": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "externalArrangementId": "a3f8defe-f447-4475-b5c1-d3971ec7a273", "identification": { "identification": "NL81TRIO0212471066", "schemeName": "IBAN" } }, "debtor": { "name": "Smith Bonus Savings", "postalAddress": { "addressLine1": "Jacob Bontiusplaats 9, 1018LL, Amsterdam" } }, "batchBooking": true, "instructionPriority": "NORM", "requestedExecutionDate": "2018-08-11", "paymentMode": "RECURRING", "paymentType": "SEPA_CREDIT_TRANSFER", "schedule": { "transferFrequency": "MONTHLY", "on": 1, "startDate": "2017-08-12", "every": 1, "nextExecutionDate": "2018-08-15", "endDate": "2018-05-12" }, "creditTransferTransactionInformation": [{ "instructedAmount": { "amount": "166.66", "currencyCode": "EUR" }, "creditorAccount": { "identification": { "identification": "HU42117730161111101800000000", "schemeName": "IBAN" } }, "creditor": { "name": "Jack Brown" }, "remittanceInformation": { "type": "STRUCTURED", "content": "<some-xml-tags>structured content with XML</some-xml-tags>" } }], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z", "version": 42 }, { "id": "06db9298-189b-11e8-accf-0ed5f89f718b", "approvalId": "11863018-189b-11e8-accf-0ed5f89f718b", "status": "ENTERED", "debtorAccount": { "arrangementId": "729190df-a421-4937-94fd-5e1a3da132cc", "identification": { "identification": "0260-0959-3", "schemeName": "BBAN" } }, "debtor": { "name": "John Doe", "postalAddress": { "addressLine1": "228 Park Ave S", "town": "New York" } }, "batchBooking": false, "instructionPriority": "NORM", "requestedExecutionDate": "2017-08-12", "paymentMode": "RECURRING", "paymentType": "US_FOREIGN_WIRE", "schedule": { "transferFrequency": "MONTHLY", "on": 1, "startDate": "2017-08-12", "every": 1, "nextExecutionDate": "2017-09-12", "endDate": "2018-05-12" }, "creditTransferTransactionInformation": [{ "endToEndIdentification": "TRNSCT REF 1234567890", "instructedAmount": { "amount": "104.66", "currencyCode": "USD" }, "creditorAccount": { "identification": { "identification": "NL91 ABNA 0417 1643 00", "schemeName": "IBAN" } }, "creditor": { "name": "Jack Brown", "postalAddress": { "addressLine1": "2589 Peaceful Lane", "postCode": "44128", "town": "Warrensville Heights", "country": "US" } }, "remittanceInformation": { "type": "UNSTRUCTURED", "content": "Unstructured content" }, "creditorBank": { "bankBranchCode": "082000549", "name": "Morgan Chase", "postalAddress": { "addressLine1": "4789 Vernon Street", "postCode": "92028", "town": "Fallbrook", "country": "US" } }, "correspondentBank": { "bankBranchCode": "122105155", "name": "Bank of America" }, "intermediaryBank": { "bic": "DABAIE2D", "bankBranchCode": "102000021", "name": "SNSB" }, "messageToBank": "My us international wire payment explanation.", "targetCurrency": "EUR" }], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z", "version": 42 }, { "id": "fa088818-623a-4260-bc46-1ff678de8dae", "approvalId": "8605dc85-726c-4795-9b55-ff698ad2d1e4", "status": "ENTERED", "debtorAccount": { "arrangementId": "07642680-2b6f-11e8-b467-0ed5f89f718b", "identification": { "identification": "00400440116243", "schemeName": "BBAN" } }, "debtor": { "name": "Mr John Usmith", "postalAddress": { "addressLine1": "Jacob Bontiusplaats 9, 1018LL, New York" } }, "instructionPriority": "HIGH", "requestedExecutionDate": "2018-08-16", "paymentMode": "SINGLE", "paymentType": "INTERNAL", "creditTransferTransactionInformation": [{ "endToEndIdentification": "Some reference", "instructedAmount": { "amount": "749.99", "currencyCode": "USD" }, "creditorAccount": { "accountType": "SAVING", "identification": { "identification": "3242342348899", "schemeName": "BBAN" }, "arrangementId": "fe9d66ae-b927-4ac7-8799-c5a38a596ff2" }, "creditor": { "name": "John Doe" } }], "actions": ["APPROVE"], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z", "version": 1 }, { "id": "f58a410e-469c-41f1-8c51-21b6d24bd3c1", "approvalId": "7527c230-01a7-41b8-a021-dc29aca98fe3", "status": "ENTERED", "debtorAccount": { "arrangementId": "07642680-2b6f-11e8-b467-0ed5f89f718b", "identification": { "identification": "00400440116243", "schemeName": "BBAN" } }, "debtor": { "name": "Mr John Usmith", "postalAddress": { "addressLine1": "Jacob Bontiusplaats 9, 1018LL, Los Angeles" } }, "instructionPriority": "HIGH", "requestedExecutionDate": "2018-08-16", "paymentMode": "SINGLE", "paymentType": "INTERNAL", "creditTransferTransactionInformation": [{ "endToEndIdentification": "Some reference", "instructedAmount": { "amount": "134", "currencyCode": "USD" }, "creditorAccount": { "accountType": "CHECKING", "identification": { "identification": "3242342123899", "schemeName": "BBAN" }, "arrangementId": "fe9d66ae-b927-4ac7-8799-c5a38a596ff2" }, "creditor": { "name": "Dan Brown" }, "remittanceInformation": { "type": "UNSTRUCTURED", "content": "Return a debt`" } }], "actions": ["APPROVE"], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z", "version": 1 }] }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 405, "data": null }, { "status": 500, "data": null }],
	
	      postPaymentOrderDraftsRecord: [{ "status": 201, "data": { "id": "af2599ef-759a-4b78-8e67-4949055a532b", "status": "ENTERED" } }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      postPaymentOrdersValidateRecord: [{ "status": 200, "data": { "debtorAccount": { "arrangementId": "729190df-a421-4937-94fd-5e1a3da132cc", "externalArrangementId": "729190421493794513132", "identification": { "identification": "NL53RABO0309349755", "schemeName": "IBAN" } }, "debtor": { "name": "Credit Account", "postalAddress": { "addressLine1": "Jacob Bontiusplaats 9, 1018LL, Amsterdam" } }, "instructionPriority": "NORM", "requestedExecutionDate": "2017-07-16", "paymentType": "SEPA_CREDIT_TRANSFER", "creditTransferTransactionInformation": [{ "instructedAmount": { "amount": "5000.55", "currencyCode": "EUR" }, "creditorAccount": { "identification": { "identification": "FR708933019952AUNHQNQ0KZ", "schemeName": "IBAN" }, "name": "ABN Amro" }, "creditor": { "name": "Backbase", "postalAddress": { "addressLine1": "Jacob Bontiusplaats 9, 1018LL, Amsterdam", "country": "NL" } }, "remittanceInformation": { "type": "UNSTRUCTURED", "content": "Return a debt" } }] } }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      putPaymentOrdersBulkApprovalsRecord: [{ "status": 200, "data": { "approvalStatus": "APPROVED", "paymentOrders": [{ "paymentOrderId": "7d34169c-6714-11e7-907b-a6006ad3dba0", "paymentOrder": { "id": "7d34169c-6714-11e7-907b-a6006ad3dba0", "approvalId": "49dad7ab-604b-407a-ba47-a61ad93f31ce", "status": "ENTERED", "debtorAccount": { "arrangementId": "729190df-a421-4937-94fd-5e1a3da132cc", "externalArrangementId": "729190421493794513132", "identification": { "identification": "NL81TRIO0212471066", "schemeName": "IBAN" } }, "debtor": { "name": "Smith Bonus Savings", "postalAddress": { "addressLine1": "Jacob Bontiusplaats 9, 1018LL, Amsterdam" } }, "instructionPriority": "HIGH", "requestedExecutionDate": "2017-08-16", "paymentMode": "SINGLE", "creditTransferTransactionInformation": [{ "endToEndIdentification": "Some reference", "instructedAmount": { "amount": "749.99", "currencyCode": "EUR" }, "creditorAccount": { "identification": { "identification": "MR1300020001010000123456753", "schemeName": "IBAN" }, "arrangementId": "fe9d66ae-b927-4ac7-8799-c5a38a596ff2", "externalArrangementId": "9669274787995385962" }, "creditor": { "name": "John Smith" } }], "actions": ["APPROVE"], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z", "version": 2 }, "approvalStatus": "PENDING", "status": { "code": "OK" } }, { "paymentOrderId": "d2ff7c65-24ae-430f-92b9-c7ca5b143081", "paymentOrder": { "id": "d2ff7c65-24ae-430f-92b9-c7ca5b143081", "approvalId": "2d9367dc-8af1-411d-81f6-9e28c46dd189", "status": "REJECTED", "debtorAccount": { "arrangementId": "729190df-a421-4937-94fd-5e1a3da132cc", "externalArrangementId": "729190421493794513132", "identification": { "identification": "NL81TRIO0212471066", "schemeName": "IBAN" } }, "debtor": { "name": "Smith Bonus Savings", "postalAddress": { "addressLine1": "Jacob Bontiusplaats 9, 1018LL, Amsterdam" } }, "instructionPriority": "HIGH", "requestedExecutionDate": "2017-08-16", "paymentMode": "SINGLE", "creditTransferTransactionInformation": [{ "endToEndIdentification": "Some reference", "instructedAmount": { "amount": "749.99", "currencyCode": "EUR" }, "creditorAccount": { "identification": { "identification": "MR1300020001010000123456753", "schemeName": "IBAN" }, "arrangementId": "fe9d66ae-b927-4ac7-8799-c5a38a596ff2", "externalArrangementId": "9669274787995385962" }, "creditor": { "name": "John Smith" } }], "actions": [], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z", "version": 2 }, "approvalStatus": "REJECTED", "status": { "code": "ERROR", "details": { "message": "Not allowed to update this approval, status is final", "errors": [{ "message": "Not allowed to update this approval, status is final", "key": "approval.api.UpdateApproval.FinalStatus", "context": { "status": "REJECTED" } }] } } }, { "paymentOrderId": "9a20be2b-b8f3-45dc-a625-55635235de4c", "status": { "code": "ERROR", "details": { "message": "Payment not found", "errors": [{ "message": "Payment not found", "key": "paymentorder.api.PaymentOrder.NotFound" }] } } }, { "paymentOrderId": "c7653c55-ee9b-4f65-96db-cbda76efd3ae", "paymentOrder": { "id": "c7653c55-ee9b-4f65-96db-cbda76efd3ae", "approvalId": "fe383f48-df2e-4b17-a0d2-3443b2e3738c", "status": "ENTERED", "debtorAccount": { "arrangementId": "729190df-a421-4937-94fd-5e1a3da132cc", "externalArrangementId": "729190421493794513132", "identification": { "identification": "NL81TRIO0212471066", "schemeName": "IBAN" } }, "debtor": { "name": "Smith Bonus Savings", "postalAddress": { "addressLine1": "Jacob Bontiusplaats 9, 1018LL, Amsterdam" } }, "instructionPriority": "HIGH", "requestedExecutionDate": "2017-08-16", "paymentMode": "SINGLE", "creditTransferTransactionInformation": [{ "endToEndIdentification": "Some reference", "instructedAmount": { "amount": "749.99", "currencyCode": "EUR" }, "creditorAccount": { "identification": { "identification": "MR1300020001010000123456753", "schemeName": "IBAN" }, "arrangementId": "fe9d66ae-b927-4ac7-8799-c5a38a596ff2", "externalArrangementId": "9669274787995385962" }, "creditor": { "name": "John Smith" } }], "actions": [], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z", "version": 2 }, "status": { "code": "ERROR", "details": { "message": "Approval not found", "errors": [{ "message": "Approval not found", "key": "approval.api.ApprovalNotFound" }] } } }], "successCount": 1, "failCount": 3 } }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 405, "data": null }, { "status": 500, "data": null }],
	
	      getPaymentOrdersRecord: [{ "status": 200, "data": { "id": "7d341c28-6714-11e7-907b-a6006ad3dba0", "approvalId": "49dad7ab-604b-407a-ba47-a61ad93f31ce", "status": "ACCEPTED", "bankStatus": "ACCEPTEDTECHNICALVALIDATION", "reasonCode": "AC01", "reasonText": "Accepted by bank", "debtorAccount": { "arrangementId": "729190df-a421-4937-94fd-5e1a3da132cc", "externalArrangementId": "729190421493794513132", "identification": { "identification": "NL53RABO0309349755", "schemeName": "IBAN" } }, "instructionPriority": "NORM", "requestedExecutionDate": "2017-07-16", "paymentType": "SEPA_CREDIT_TRANSFER", "creditTransferTransactionInformation": [{ "instructedAmount": { "amount": "5000.55", "currencyCode": "EUR" }, "creditorAccount": { "identification": { "identification": "FR708933019952AUNHQNQ0KZ", "schemeName": "IBAN" }, "arrangementId": "fe9d66ae-b927-4ac7-8799-c5a38a596ff2", "externalArrangementId": "9669274787995385962" }, "creditor": { "name": "Backbase", "postalAddress": { "addressLine1": "Jacob Bontiusplaats 9, 1018LL, Amsterdam", "country": "NL" } }, "remittanceInformation": { "type": "UNSTRUCTURED", "content": "Return a debt" } }], "actions": [], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z" } }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 405, "data": null }, { "status": 500, "data": null }],
	
	      deletePaymentOrdersRecord: [{ "status": 204, "data": null }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 405, "data": null }, { "status": 500, "data": null }],
	
	      putPaymentOrdersRecord: [{ "status": 201, "data": { "id": "af2599ef-759a-4b78-8e67-4949055a532b", "status": "ENTERED" } }, { "status": 202, "data": { "id": "af2599ef-759a-4b78-8e67-4949055a532b", "status": "ENTERED" } }, { "status": 400, "data": null }, { "status": 401, "data": { "message": "You are not authorized to perform this action" } }, { "status": 403, "data": { "message": "Limits has been breached, check the report for more details", "payment": { "id": "7d341c28-6714-11e7-907b-a6006ad3dba0", "status": "ENTERED", "debtorAccount": { "arrangementId": "729190df-a421-4937-94fd-5e1a3da132cc", "identification": { "identification": "NL53RABO0309349755", "schemeName": "IBAN" } }, "instructionPriority": "NORM", "requestedExecutionDate": "2017-07-16", "creditTransferTransactionInformation": [{ "name": "Jack Jackson", "instructedAmount": { "amount": "5000.55", "currencyCode": "EUR" }, "creditorAccount": { "identification": { "identification": "FR708933019952AUNHQNQ0KZ", "schemeName": "IBAN" }, "arrangementId": "fe9d66ae-b927-4ac7-8799-c5a38a596ff2" }, "creditor": { "name": "Backbase", "postalAddress": { "addressLine1": "Jacob Bontiusplaats 9", "zipcode": "1018LL", "city": "Amsterdam", "country": "NL" } }, "remittanceInformation": { "type": "UNSTRUCTURED", "content": "Return a debt" } }], "version": 0 }, "checkTime": "2017-01-31T12:12:12Z", "breachReport": [{ "limitedEntity": [{ "ref": "1234567-12312-123123", "type": "Service Agreement", "description": "Kuhic, Gislason and Kemmer. SERVICE AGREEMENT" }], "shadow": false, "currency": "EUR", "user-BBID": "oleksii", "breachInfo": [{ "breachType": "THRESHOLD", "timeframe": { "period": "daily", "startTime": "2017-01-31T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "250.0", "currentThreshold": "499.9" }, { "breachType": "CONSUMPTION", "timeframe": { "period": "monthly", "startTime": "2017-01-01T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "9950.0", "currentThreshold": "10000.0" }] }, { "user-BBID": "oleksii", "shadow": false, "currency": "EUR", "breachInfo": [{ "breachType": "CONSUMPTION", "timeframe": { "period": "daily", "startTime": "2017-01-31T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "500.0", "currentThreshold": "1000.0" }] }, { "limitedEntity": [{ "ref": "1234567-12312-123123", "type": "Function Access Group", "description": "Payments approvers" }, { "ref": "1234567-12312-123123", "type": "Function", "description": "Domestic payments" }, { "ref": "Approve", "type": "Privilege", "description": "Approve" }], "shadow": false, "currency": "EUR", "breachInfo": [{ "breachType": "THRESHOLD", "timeframe": { "period": "daily", "startTime": "2017-01-31T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "250.0", "currentThreshold": "499.9" }] }, { "limitedEntity": [{ "ref": "1234567-12312-123123", "type": "Legal Entity", "description": "Kuhic, Gislason and Kemmer" }], "shadow": false, "currency": "EUR", "breachInfo": [{ "breachType": "CONSUMPTION", "timeframe": { "period": "quarterly", "startTime": "2017-01-01T00:00:00Z", "endTime": "2017-03-31T23:59:59Z" }, "currentConsumption": "99950.0", "currentThreshold": "100000.0" }] }] } }, { "status": 500, "data": null }],
	
	      putPaymentOrdersApprovalsRecord: [{ "status": 200, "data": { "approval": { "paymentOrder": { "id": "7d34169c-6714-11e7-907b-a6006ad3dba0", "approvalId": "49dad7ab-604b-407a-ba47-a61ad93f31ce", "status": "ENTERED", "debtorAccount": { "arrangementId": "729190df-a421-4937-94fd-5e1a3da132cc", "externalArrangementId": "729190421493794513132", "identification": { "identification": "NL81TRIO0212471066", "schemeName": "IBAN" } }, "debtor": { "name": "Smith Bonus Savings", "postalAddress": { "addressLine1": "Jacob Bontiusplaats 9, 1018LL, Amsterdam" } }, "instructionPriority": "HIGH", "requestedExecutionDate": "2017-08-16", "paymentMode": "SINGLE", "creditTransferTransactionInformation": [{ "endToEndIdentification": "Some reference", "instructedAmount": { "amount": "749.99", "currencyCode": "EUR" }, "creditorAccount": { "identification": { "identification": "MR1300020001010000123456753", "schemeName": "IBAN" }, "arrangementId": "fe9d66ae-b927-4ac7-8799-c5a38a596ff2", "externalArrangementId": "9669274787995385962" }, "creditor": { "name": "John Smith" } }], "actions": ["APPROVE"], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z", "version": 2 }, "approvalStatus": "PENDING" } } }, { "status": 201, "data": { "id": "af2599ef-759a-4b78-8e67-4949055a532b", "status": "ENTERED" } }, { "status": 202, "data": { "id": "af2599ef-759a-4b78-8e67-4949055a532b", "status": "ENTERED" } }, { "status": 400, "data": null }, { "status": 403, "data": { "message": "Limits has been breached, check the report for more details", "payment": { "id": "7d341c28-6714-11e7-907b-a6006ad3dba0", "status": "ENTERED", "debtorAccount": { "arrangementId": "729190df-a421-4937-94fd-5e1a3da132cc", "identification": { "identification": "NL53RABO0309349755", "schemeName": "IBAN" } }, "instructionPriority": "NORM", "requestedExecutionDate": "2017-07-16", "creditTransferTransactionInformation": [{ "name": "Jack Jackson", "instructedAmount": { "amount": "5000.55", "currencyCode": "EUR" }, "creditorAccount": { "identification": { "identification": "FR708933019952AUNHQNQ0KZ", "schemeName": "IBAN" }, "arrangementId": "fe9d66ae-b927-4ac7-8799-c5a38a596ff2" }, "creditor": { "name": "Backbase", "postalAddress": { "addressLine1": "Jacob Bontiusplaats 9", "zipcode": "1018LL", "city": "Amsterdam", "country": "NL" } }, "remittanceInformation": { "type": "UNSTRUCTURED", "content": "Return a debt" } }], "version": 0 }, "checkTime": "2017-01-31T12:12:12Z", "breachReport": [{ "limitedEntity": [{ "ref": "1234567-12312-123123", "type": "Service Agreement", "description": "Kuhic, Gislason and Kemmer. SERVICE AGREEMENT" }], "shadow": false, "currency": "EUR", "user-BBID": "oleksii", "breachInfo": [{ "breachType": "THRESHOLD", "timeframe": { "period": "daily", "startTime": "2017-01-31T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "250.0", "currentThreshold": "499.9" }, { "breachType": "CONSUMPTION", "timeframe": { "period": "monthly", "startTime": "2017-01-01T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "9950.0", "currentThreshold": "10000.0" }] }, { "user-BBID": "oleksii", "shadow": false, "currency": "EUR", "breachInfo": [{ "breachType": "CONSUMPTION", "timeframe": { "period": "daily", "startTime": "2017-01-31T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "500.0", "currentThreshold": "1000.0" }] }, { "limitedEntity": [{ "ref": "1234567-12312-123123", "type": "Function Access Group", "description": "Payments approvers" }, { "ref": "1234567-12312-123123", "type": "Function", "description": "Domestic payments" }, { "ref": "Approve", "type": "Privilege", "description": "Approve" }], "shadow": false, "currency": "EUR", "breachInfo": [{ "breachType": "THRESHOLD", "timeframe": { "period": "daily", "startTime": "2017-01-31T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "250.0", "currentThreshold": "499.9" }] }, { "limitedEntity": [{ "ref": "1234567-12312-123123", "type": "Legal Entity", "description": "Kuhic, Gislason and Kemmer" }], "shadow": false, "currency": "EUR", "breachInfo": [{ "breachType": "CONSUMPTION", "timeframe": { "period": "quarterly", "startTime": "2017-01-01T00:00:00Z", "endTime": "2017-03-31T23:59:59Z" }, "currentConsumption": "99950.0", "currentThreshold": "100000.0" }] }] } }, { "status": 404, "data": null }, { "status": 405, "data": null }, { "status": 500, "data": null }],
	
	      postPaymentOrdersCancelRecord: [{ "status": 200, "data": { "accepted": true } }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 405, "data": null }, { "status": 500, "data": null }],
	
	      putPaymentOrdersUpdateStatusRecord: [{ "status": 200, "data": { "bankReferenceId": "12312312", "status": "ACCEPTED", "bankStatus": "ACCEPTEDTECHNICALVALIDATION", "reasonCode": "AC01", "reasonText": "Accepted by bank", "reasonDescription": "Accepted by bank.", "nextExecutionDate": "2018-12-23" } }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      putPaymentOrdersRetryOrdersRecord: [{ "status": 200, "data": { "successCount": 1999, "failCount": 1 } }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      getPaymentOrdersCurrencies: [{ "status": 200, "data": [{ "code": "EUR" }, { "code": "USD" }, { "code": "GBP" }, { "code": "ISK" }, { "code": "KWD" }] }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      getPaymentOrdersRate: [{ "status": 200, "data": { "rate": 1.07 } }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      getPaymentOrderDraftsRecord: [{ "status": 200, "data": { "id": "7d341c28-6714-11e7-907b-a6006ad3dba0", "approvalId": "49dad7ab-604b-407a-ba47-a61ad93f31ce", "status": "ACCEPTED", "bankStatus": "ACCEPTEDTECHNICALVALIDATION", "reasonCode": "AC01", "reasonText": "Accepted by bank", "debtorAccount": { "arrangementId": "729190df-a421-4937-94fd-5e1a3da132cc", "externalArrangementId": "729190421493794513132", "identification": { "identification": "NL53RABO0309349755", "schemeName": "IBAN" } }, "instructionPriority": "NORM", "requestedExecutionDate": "2017-07-16", "paymentType": "SEPA_CREDIT_TRANSFER", "creditTransferTransactionInformation": [{ "instructedAmount": { "amount": "5000.55", "currencyCode": "EUR" }, "creditorAccount": { "identification": { "identification": "FR708933019952AUNHQNQ0KZ", "schemeName": "IBAN" }, "arrangementId": "fe9d66ae-b927-4ac7-8799-c5a38a596ff2", "externalArrangementId": "9669274787995385962" }, "creditor": { "name": "Backbase", "postalAddress": { "addressLine1": "Jacob Bontiusplaats 9, 1018LL, Amsterdam", "country": "NL" } }, "remittanceInformation": { "type": "UNSTRUCTURED", "content": "Return a debt" } }], "actions": [], "createdBy": "U00243", "createdAt": "2017-05-12T14:33:13.452Z" } }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 405, "data": null }, { "status": 500, "data": null }],
	
	      deletePaymentOrderDraftsRecord: [{ "status": 204, "data": null }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 405, "data": null }, { "status": 500, "data": null }],
	
	      putPaymentOrderDraftsRecord: [{ "status": 202, "data": { "id": "af2599ef-759a-4b78-8e67-4949055a532b", "status": "ENTERED" } }, { "status": 400, "data": null }, { "status": 500, "data": null }]
	
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
	
	    var plugins = (_plugins = {}, _defineProperty(_plugins, PLUGINS_ALL, []), _defineProperty(_plugins, 'getPaymentOrders', []), _defineProperty(_plugins, 'postPaymentOrdersRecord', []), _defineProperty(_plugins, 'getPaymentOrderDrafts', []), _defineProperty(_plugins, 'postPaymentOrderDraftsRecord', []), _defineProperty(_plugins, 'postPaymentOrdersValidateRecord', []), _defineProperty(_plugins, 'putPaymentOrdersBulkApprovalsRecord', []), _defineProperty(_plugins, 'getPaymentOrdersRecord', []), _defineProperty(_plugins, 'deletePaymentOrdersRecord', []), _defineProperty(_plugins, 'putPaymentOrdersRecord', []), _defineProperty(_plugins, 'putPaymentOrdersApprovalsRecord', []), _defineProperty(_plugins, 'postPaymentOrdersCancelRecord', []), _defineProperty(_plugins, 'putPaymentOrdersUpdateStatusRecord', []), _defineProperty(_plugins, 'putPaymentOrdersRetryOrdersRecord', []), _defineProperty(_plugins, 'getPaymentOrdersCurrencies', []), _defineProperty(_plugins, 'getPaymentOrdersRate', []), _defineProperty(_plugins, 'getPaymentOrderDraftsRecord', []), _defineProperty(_plugins, 'deletePaymentOrderDraftsRecord', []), _defineProperty(_plugins, 'putPaymentOrderDraftsRecord', []), _plugins);
	
	    if (!plugins['getPaymentOrders']) {
	      console.warn('%cThere is no "getPaymentOrders" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPaymentOrders'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['postPaymentOrdersRecord']) {
	      console.warn('%cThere is no "postPaymentOrdersRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['postPaymentOrdersRecord'].push(function (result, args, uri) {
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
	
	    if (!plugins['getPaymentOrdersRecord']) {
	      console.warn('%cThere is no "getPaymentOrdersRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPaymentOrdersRecord'].push(function (result, args, uri, method) {
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
	
	    if (!plugins['putPaymentOrdersRecord']) {
	      console.warn('%cThere is no "putPaymentOrdersRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['putPaymentOrdersRecord'].push(function (result, args, uri, method) {
	        // Assuming body to update is the last argument, and item id is last but one
	        var id = args[args.length - 3];
	        var body = args[args.length - 2];
	        // Cut off uri parameter
	        uri = uri.substring(0, uri.lastIndexOf('/'));
	
	        // Update item in the state, if available
	        // (state variable is available in the mock module context)
	        var item = (state[uri] || []).find(function (item) {
	          return item.id === id;
	        });
	        if (item) {
	          Object.assign(item, body);
	
	          /* 
	          * If fields are present in body as well as result data: 
	          * update the value in response with value from body.
	          */
	          if (result && result.data && _typeof(result.data) === 'object') {
	            Object.keys(result.data).map(function (key) {
	              if (body && key in body) result.data[key] = body[key];
	            });
	          }
	        } else {
	          // Return NOT FOUND response, if available
	          // (getResponse method is available in the mock module context)
	          return Promise.reject(getResponse(method, 404));
	        }
	
	        return result;
	      });
	    }
	
	    if (!plugins['deletePaymentOrdersRecord']) {
	      console.warn('%cThere is no "deletePaymentOrdersRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['deletePaymentOrdersRecord'].push(function (result, args, uri, method) {
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
	
	    if (!plugins['putPaymentOrdersApprovalsRecord']) {
	      console.warn('%cThere is no "putPaymentOrdersApprovalsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['putPaymentOrdersApprovalsRecord'].push(function (result, args, uri, method) {
	        // Assuming body to update is the last argument, and item id is last but one
	        var id = args[args.length - 3];
	        var body = args[args.length - 2];
	        // Cut off uri parameter
	        uri = uri.substring(0, uri.lastIndexOf('/'));
	
	        // Update item in the state, if available
	        // (state variable is available in the mock module context)
	        var item = (state[uri] || []).find(function (item) {
	          return item.id === id;
	        });
	        if (item) {
	          Object.assign(item, body);
	
	          /* 
	          * If fields are present in body as well as result data: 
	          * update the value in response with value from body.
	          */
	          if (result && result.data && _typeof(result.data) === 'object') {
	            Object.keys(result.data).map(function (key) {
	              if (body && key in body) result.data[key] = body[key];
	            });
	          }
	        } else {
	          // Return NOT FOUND response, if available
	          // (getResponse method is available in the mock module context)
	          return Promise.reject(getResponse(method, 404));
	        }
	
	        return result;
	      });
	    }
	
	    if (!plugins['getPaymentOrderDrafts']) {
	      console.warn('%cThere is no "getPaymentOrderDrafts" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPaymentOrderDrafts'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['postPaymentOrderDraftsRecord']) {
	      console.warn('%cThere is no "postPaymentOrderDraftsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['postPaymentOrderDraftsRecord'].push(function (result, args, uri) {
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
	
	    if (!plugins['getPaymentOrderDraftsRecord']) {
	      console.warn('%cThere is no "getPaymentOrderDraftsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPaymentOrderDraftsRecord'].push(function (result, args, uri, method) {
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
	
	    if (!plugins['putPaymentOrderDraftsRecord']) {
	      console.warn('%cThere is no "putPaymentOrderDraftsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['putPaymentOrderDraftsRecord'].push(function (result, args, uri, method) {
	        // Assuming body to update is the last argument, and item id is last but one
	        var id = args[args.length - 3];
	        var body = args[args.length - 2];
	        // Cut off uri parameter
	        uri = uri.substring(0, uri.lastIndexOf('/'));
	
	        // Update item in the state, if available
	        // (state variable is available in the mock module context)
	        var item = (state[uri] || []).find(function (item) {
	          return item.id === id;
	        });
	        if (item) {
	          Object.assign(item, body);
	
	          /* 
	          * If fields are present in body as well as result data: 
	          * update the value in response with value from body.
	          */
	          if (result && result.data && _typeof(result.data) === 'object') {
	            Object.keys(result.data).map(function (key) {
	              if (body && key in body) result.data[key] = body[key];
	            });
	          }
	        } else {
	          // Return NOT FOUND response, if available
	          // (getResponse method is available in the mock module context)
	          return Promise.reject(getResponse(method, 404));
	        }
	
	        return result;
	      });
	    }
	
	    if (!plugins['deletePaymentOrderDraftsRecord']) {
	      console.warn('%cThere is no "deletePaymentOrderDraftsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['deletePaymentOrderDraftsRecord'].push(function (result, args, uri, method) {
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
	
	    if (!plugins['getPaymentOrdersCurrencies']) {
	      console.warn('%cThere is no "getPaymentOrdersCurrencies" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPaymentOrdersCurrencies'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['getPaymentOrderDrafts']) {
	      console.warn('%cThere is no "getPaymentOrderDrafts" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPaymentOrderDrafts'].push(function (result, args) {
	        // modifies each payment object in case if one of them was updated (put method gets `ID` as accounts identificator but get payment should return payments with `IBAN` is account identificator ).
	        result.data = result.data.map(function (item) {
	          var debtorAccount = state.productSummaryData.find(function (account) {
	            return account.id === item.debtorAccount.identification.identification;
	          });
	          var creditorAccount = state.productSummaryData.find(function (account) {
	            return account.id === item.creditTransferTransactionInformation[0].creditorAccount.identification.identification;
	          });
	
	          if (debtorAccount) {
	            Object.assign(item.debtorAccount, {
	              arrangementId: debtorAccount.id,
	              identification: {
	                schemaName: debtorAccount.IBAN ? 'IBAN' : 'BBAN',
	                identification: debtorAccount.IBAN || debtorAccount.BBAN
	              }
	            });
	          }
	
	          if (creditorAccount) {
	            Object.assign(item.creditTransferTransactionInformation[0], {
	              creditorAccount: {
	                arrangementId: creditorAccount.id,
	                identification: {
	                  schemaName: creditorAccount.IBAN ? 'IBAN' : 'BBAN',
	                  identification: creditorAccount.IBAN || creditorAccount.BBAN
	                }
	              }
	            });
	          }
	
	          return item;
	        });
	
	        var query = void 0;
	
	        if (args && args.length && args[0]) {
	          query = args[0].query;
	        }
	
	        if (query) {
	          query = query.toUpperCase();
	          result.data = result.data.filter(function (payment) {
	            if (payment.creditTransferTransactionInformation) {
	              var creditor = payment.creditTransferTransactionInformation[0];
	              if (creditor.creditor && creditor.creditor.name && creditor.creditor.name.toUpperCase().includes(query)) {
	                return true;
	              } else if (creditor.creditorAccount && creditor.creditorAccount.identification && creditor.creditorAccount.identification.identification.toUpperCase().includes(query)) {
	                return true;
	              }
	            }
	
	            if (payment.debtor && payment.debtor.name && payment.debtor.name.toUpperCase().includes(query)) {
	              return true;
	            }
	
	            if (payment.debtorAccount && payment.debtorAccount.identification && payment.debtorAccount.identification.identification && payment.debtorAccount.identification.identification.toUpperCase().includes(query)) {
	              return true;
	            }
	
	            return false;
	          });
	        }
	
	        return result;
	      });
	    }
	
	    if (!plugins['getPaymentOrders']) {
	      console.warn('%cThere is no "getPaymentOrders" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPaymentOrders'].push(function (result, args) {
	        // modifies each payment object in case if one of them was updated (put method gets `ID` as accounts identificator but get payment should return payments with `IBAN` is account identificator ).
	        result.data = result.data.map(function (item) {
	          var debtorAccount = state.productSummaryData.find(function (account) {
	            return account.id === item.debtorAccount.identification.identification;
	          });
	          var creditorAccount = state.productSummaryData.find(function (account) {
	            return account.id === item.creditTransferTransactionInformation[0].creditorAccount.identification.identification;
	          });
	
	          if (debtorAccount) {
	            Object.assign(item.debtorAccount, {
	              arrangementId: debtorAccount.id,
	              identification: {
	                schemaName: debtorAccount.IBAN ? 'IBAN' : 'BBAN',
	                identification: debtorAccount.IBAN || debtorAccount.BBAN
	              }
	            });
	          }
	
	          if (creditorAccount) {
	            Object.assign(item.creditTransferTransactionInformation[0], {
	              creditorAccount: {
	                arrangementId: creditorAccount.id,
	                identification: {
	                  schemaName: creditorAccount.IBAN ? 'IBAN' : 'BBAN',
	                  identification: creditorAccount.IBAN || creditorAccount.BBAN
	                }
	              }
	            });
	          }
	
	          return item;
	        });
	
	        var query = void 0;
	
	        if (args && args.length && args[0]) {
	          query = args[0].query;
	        }
	
	        if (query) {
	          query = query.toUpperCase();
	          result.data = result.data.filter(function (payment) {
	            if (payment.creditTransferTransactionInformation) {
	              var creditor = payment.creditTransferTransactionInformation[0];
	              if (creditor.creditor && creditor.creditor.name && creditor.creditor.name.toUpperCase().includes(query)) {
	                return true;
	              } else if (creditor.creditorAccount && creditor.creditorAccount.identification && creditor.creditorAccount.identification.identification.toUpperCase().includes(query)) {
	                return true;
	              }
	            }
	
	            if (payment.debtor && payment.debtor.name && payment.debtor.name.toUpperCase().includes(query)) {
	              return true;
	            }
	
	            if (payment.debtorAccount && payment.debtorAccount.identification && payment.debtorAccount.identification.identification && payment.debtorAccount.identification.identification.toUpperCase().includes(query)) {
	              return true;
	            }
	
	            return false;
	          });
	        }
	
	        return result;
	      });
	    }
	
	    if (!plugins['getPaymentOrders']) {
	      console.warn('%cThere is no "getPaymentOrders" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPaymentOrders'].push(function anonymous(result, args
	      /**/) {
	
	        var params = args[args.length - 2] || {};
	        var orderDirection = params.direction === 'ASC' ? 1 : -1;
	        var orderBy = params.orderBy;
	        var data = result.data;
	
	        if (orderBy) {
	          var getValueFn = function getValueFn(propName, obj) {
	            switch (propName) {
	              case 'debtorName':
	                return obj.debtor ? obj.debtor.name : null;
	              case 'creditorName':
	                return obj.creditTransferTransactionInformation.length > 0 && obj.creditTransferTransactionInformation[0].creditor ? obj.creditTransferTransactionInformation[0].creditor.name : null;
	              case 'currency':
	                return obj.creditTransferTransactionInformation.length > 0 && obj.creditTransferTransactionInformation[0].currencyCode ? obj.creditTransferTransactionInformation[0].instructedAmount.currencyCode : null;
	              case 'amount':
	                return obj.creditTransferTransactionInformation.length > 0 && obj.creditTransferTransactionInformation[0].instructedAmount ? parseInt(obj.creditTransferTransactionInformation[0].instructedAmount.amount, 10) : null;
	              default:
	                return obj[propName];
	            }
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
	
	    if (!plugins['getPaymentOrderDrafts']) {
	      console.warn('%cThere is no "getPaymentOrderDrafts" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPaymentOrderDrafts'].push(function anonymous(result, args
	      /**/) {
	
	        var params = args[args.length - 2] || {};
	        var orderDirection = params.direction === 'ASC' ? 1 : -1;
	        var orderBy = params.orderBy;
	        var data = result.data;
	
	        if (orderBy) {
	          var getValueFn = function getValueFn(propName, obj) {
	            switch (propName) {
	              case 'debtorName':
	                return obj.debtor ? obj.debtor.name : null;
	              case 'creditorName':
	                return obj.creditTransferTransactionInformation.length > 0 && obj.creditTransferTransactionInformation[0].creditor ? obj.creditTransferTransactionInformation[0].creditor.name : null;
	              case 'currency':
	                return obj.creditTransferTransactionInformation.length > 0 && obj.creditTransferTransactionInformation[0].currencyCode ? obj.creditTransferTransactionInformation[0].instructedAmount.currencyCode : null;
	              case 'amount':
	                return obj.creditTransferTransactionInformation.length > 0 && obj.creditTransferTransactionInformation[0].instructedAmount ? parseInt(obj.creditTransferTransactionInformation[0].instructedAmount.amount, 10) : null;
	              default:
	                return obj[propName];
	            }
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
	
	    if (!plugins['getPaymentOrdersRate']) {
	      console.warn('%cThere is no "getPaymentOrdersRate" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPaymentOrdersRate'].push(function (result, args) {
	        var params = args[0];
	
	        var rate = 1;
	
	        if (params.currencyFrom !== params.currencyTo) {
	          rate = (result.data.rate + 1 / (params.currencyFrom.charCodeAt(0) - params.currencyTo.charCodeAt(0))).toFixed(2);
	        }
	
	        return Object.assign(result, {
	          data: { rate: rate }
	        });
	      });
	    }
	
	    if (!plugins['getPaymentOrders']) {
	      console.warn('%cThere is no "getPaymentOrders" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPaymentOrders'].push(function (result, args) {
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
	
	    if (!plugins['getPaymentOrderDrafts']) {
	      console.warn('%cThere is no "getPaymentOrderDrafts" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPaymentOrderDrafts'].push(function (result, args) {
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
	
	    function getPaymentOrders(params, headers) {
	      var url = '' + baseUri + version + '/payment-orders';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getPaymentOrders', 200)).then(pluginMocks('getPaymentOrders', [params, headers], '{version}/payment-orders')).catch(handleError('getPaymentOrders'));
	    }
	
	    function postPaymentOrdersRecord(data, headers) {
	      var url = '' + baseUri + version + '/payment-orders';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postPaymentOrdersRecord', 201)).then(pluginMocks('postPaymentOrdersRecord', [data, headers], '{version}/payment-orders')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postPaymentOrdersRecord'));
	    }
	
	    function getPaymentOrderDrafts(params, headers) {
	      var url = '' + baseUri + version + '/payment-order-drafts';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getPaymentOrderDrafts', 200)).then(pluginMocks('getPaymentOrderDrafts', [params, headers], '{version}/payment-order-drafts')).catch(handleError('getPaymentOrderDrafts'));
	    }
	
	    function postPaymentOrderDraftsRecord(data, headers) {
	      var url = '' + baseUri + version + '/payment-order-drafts';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postPaymentOrderDraftsRecord', 201)).then(pluginMocks('postPaymentOrderDraftsRecord', [data, headers], '{version}/payment-order-drafts')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postPaymentOrderDraftsRecord'));
	    }
	
	    function postPaymentOrdersValidateRecord(data, headers) {
	      var url = '' + baseUri + version + '/payment-orders/validate';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postPaymentOrdersValidateRecord', 200)).then(pluginMocks('postPaymentOrdersValidateRecord', [data, headers], '{version}/payment-orders/validate')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postPaymentOrdersValidateRecord'));
	    }
	
	    function putPaymentOrdersBulkApprovalsRecord(data, headers) {
	      var url = '' + baseUri + version + '/payment-orders/bulk-approvals';
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putPaymentOrdersBulkApprovalsRecord', 200)).then(pluginMocks('putPaymentOrdersBulkApprovalsRecord', [data, headers], '{version}/payment-orders/bulk-approvals')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putPaymentOrdersBulkApprovalsRecord'));
	    }
	
	    function getPaymentOrdersRecord(paymentOrderId, params, headers) {
	      var url = '' + baseUri + version + '/payment-orders/' + paymentOrderId;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getPaymentOrdersRecord', 200)).then(pluginMocks('getPaymentOrdersRecord', [paymentOrderId, params, headers], '{version}/payment-orders/{paymentOrderId}')).catch(handleError('getPaymentOrdersRecord'));
	    }
	
	    function deletePaymentOrdersRecord(paymentOrderId, params, headers) {
	      var url = '' + baseUri + version + '/payment-orders/' + paymentOrderId;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deletePaymentOrdersRecord', 204)).then(pluginMocks('deletePaymentOrdersRecord', [paymentOrderId, params, headers], '{version}/payment-orders/{paymentOrderId}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deletePaymentOrdersRecord'));
	    }
	
	    function putPaymentOrdersRecord(paymentOrderId, data, headers) {
	      var url = '' + baseUri + version + '/payment-orders/' + paymentOrderId;
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putPaymentOrdersRecord', 201)).then(pluginMocks('putPaymentOrdersRecord', [paymentOrderId, data, headers], '{version}/payment-orders/{paymentOrderId}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putPaymentOrdersRecord'));
	    }
	
	    function putPaymentOrdersApprovalsRecord(paymentOrderId, data, headers) {
	      var url = '' + baseUri + version + '/payment-orders/' + paymentOrderId + '/approvals';
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putPaymentOrdersApprovalsRecord', 200)).then(pluginMocks('putPaymentOrdersApprovalsRecord', [paymentOrderId, data, headers], '{version}/payment-orders/{paymentOrderId}/approvals')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putPaymentOrdersApprovalsRecord'));
	    }
	
	    function postPaymentOrdersCancelRecord(paymentOrderId, data, headers) {
	      var url = '' + baseUri + version + '/payment-orders/' + paymentOrderId + '/cancel';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postPaymentOrdersCancelRecord', 200)).then(pluginMocks('postPaymentOrdersCancelRecord', [paymentOrderId, data, headers], '{version}/payment-orders/{paymentOrderId}/cancel')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postPaymentOrdersCancelRecord'));
	    }
	
	    function putPaymentOrdersUpdateStatusRecord(data, headers) {
	      var url = '' + baseUri + version + '/payment-orders/update-status';
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putPaymentOrdersUpdateStatusRecord', 200)).then(pluginMocks('putPaymentOrdersUpdateStatusRecord', [data, headers], '{version}/payment-orders/update-status')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putPaymentOrdersUpdateStatusRecord'));
	    }
	
	    function putPaymentOrdersRetryOrdersRecord(data, headers) {
	      var url = '' + baseUri + version + '/payment-orders/retry-orders';
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putPaymentOrdersRetryOrdersRecord', 200)).then(pluginMocks('putPaymentOrdersRetryOrdersRecord', [data, headers], '{version}/payment-orders/retry-orders')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putPaymentOrdersRetryOrdersRecord'));
	    }
	
	    function getPaymentOrdersCurrencies(params, headers) {
	      var url = '' + baseUri + version + '/payment-orders/currencies';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getPaymentOrdersCurrencies', 200)).then(pluginMocks('getPaymentOrdersCurrencies', [params, headers], '{version}/payment-orders/currencies')).catch(handleError('getPaymentOrdersCurrencies'));
	    }
	
	    function getPaymentOrdersRate(params, headers) {
	      var url = '' + baseUri + version + '/payment-orders/rate';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getPaymentOrdersRate', 200)).then(pluginMocks('getPaymentOrdersRate', [params, headers], '{version}/payment-orders/rate')).catch(handleError('getPaymentOrdersRate'));
	    }
	
	    function getPaymentOrderDraftsRecord(draftPaymentOrderId, params, headers) {
	      var url = '' + baseUri + version + '/payment-order-drafts/' + draftPaymentOrderId;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getPaymentOrderDraftsRecord', 200)).then(pluginMocks('getPaymentOrderDraftsRecord', [draftPaymentOrderId, params, headers], '{version}/payment-order-drafts/{draftPaymentOrderId}')).catch(handleError('getPaymentOrderDraftsRecord'));
	    }
	
	    function deletePaymentOrderDraftsRecord(draftPaymentOrderId, params, headers) {
	      var url = '' + baseUri + version + '/payment-order-drafts/' + draftPaymentOrderId;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deletePaymentOrderDraftsRecord', 204)).then(pluginMocks('deletePaymentOrderDraftsRecord', [draftPaymentOrderId, params, headers], '{version}/payment-order-drafts/{draftPaymentOrderId}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deletePaymentOrderDraftsRecord'));
	    }
	
	    function putPaymentOrderDraftsRecord(draftPaymentOrderId, data, headers) {
	      var url = '' + baseUri + version + '/payment-order-drafts/' + draftPaymentOrderId;
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putPaymentOrderDraftsRecord', 202)).then(pluginMocks('putPaymentOrderDraftsRecord', [draftPaymentOrderId, data, headers], '{version}/payment-order-drafts/{draftPaymentOrderId}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putPaymentOrderDraftsRecord'));
	    }
	
	    schemas.postPaymentOrdersRecord = { "properties": { "debtorAccount": { "type": "object", "properties": { "identification": { "type": "object", "properties": { "identification": { "type": "string", "maxLength": 36, "required": true }, "schemeName": { "type": "string", "enum": ["IBAN", "BBAN", "ID"], "required": true } }, "required": true }, "name": { "type": "string", "maxLength": 140, "required": false } }, "required": true }, "batchBooking": { "type": "boolean", "default": false, "required": false }, "instructionPriority": { "type": "string", "enum": ["NORM", "HIGH"], "default": "NORM", "required": false }, "requestedExecutionDate": { "type": "string", "format": "date", "required": true }, "paymentMode": { "type": "string", "enum": ["SINGLE", "RECURRING"], "default": "SINGLE", "required": false }, "paymentType": { "type": "string", "minLength": 1, "maxLength": 20, "default": "SEPA_CREDIT_TRANSFER", "required": false }, "schedule": { "type": "object", "properties": { "nonWorkingDayExecutionStrategy": { "type": "string", "enum": ["BEFORE", "AFTER", "NONE"], "required": false }, "transferFrequency": { "type": "string", "enum": ["ONCE", "DAILY", "WEEKLY", "MONTHLY", "QUARTERLY", "YEARLY"], "required": true }, "on": { "type": "integer", "required": true }, "startDate": { "type": "string", "format": "date", "required": true }, "endDate": { "type": "string", "format": "date", "required": false }, "repeat": { "type": "integer", "required": false }, "every": { "type": "integer", "enum": [1, 2], "required": true }, "nextExecutionDate": { "type": "string", "format": "date", "required": false } }, "required": false }, "creditTransferTransactionInformation": { "type": "array", "items": { "properties": { "instructedAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true }, "creditor": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 140, "required": true }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false } }, "required": true }, "creditorAccount": { "type": "object", "properties": { "accountType": { "type": "string", "enum": ["CHECKING", "SAVING"], "required": false } }, "required": true }, "creditorBank": { "type": "object", "properties": { "bankBranchCode": { "type": "string", "maxLength": 11, "required": false }, "name": { "type": "string", "maxLength": 140, "required": false }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false }, "bic": { "type": "string", "pattern": "^([A-Z0-9]){4}([A-Z]){2}([A-Z0-9]){2}([A-Z0-9]{3})?$", "required": false } }, "required": false }, "correspondentBank": { "type": "object", "properties": { "bankBranchCode": { "type": "string", "maxLength": 11, "required": false }, "name": { "type": "string", "maxLength": 140, "required": false }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false }, "bic": { "type": "string", "pattern": "^([A-Z0-9]){4}([A-Z]){2}([A-Z0-9]){2}([A-Z0-9]{3})?$", "required": false } }, "required": false }, "intermediaryBank": { "type": "object", "properties": { "bankBranchCode": { "type": "string", "maxLength": 11, "required": false }, "name": { "type": "string", "maxLength": 140, "required": false }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false }, "bic": { "type": "string", "pattern": "^([A-Z0-9]){4}([A-Z]){2}([A-Z0-9]){2}([A-Z0-9]{3})?$", "required": false } }, "required": false }, "messageToBank": { "type": "string", "maxLength": 140, "required": false }, "targetCurrency": { "type": "string", "pattern": "^[A-Z]{3}$", "required": false }, "remittanceInformation": { "type": "string", "maxLength": 140, "required": false }, "endToEndIdentification": { "type": "string", "maxLength": 35, "required": false } } }, "minItems": 1, "maxItems": 1, "required": true } } };
	
	    schemas.postPaymentOrderDraftsRecord = { "properties": { "debtorAccount": { "type": "object", "properties": { "identification": { "type": "object", "properties": { "identification": { "type": "string", "maxLength": 36, "required": true }, "schemeName": { "type": "string", "enum": ["IBAN", "BBAN", "ID"], "required": true } }, "required": false }, "name": { "type": "string", "maxLength": 140, "required": false } }, "required": false }, "batchBooking": { "type": "boolean", "default": false, "required": false }, "instructionPriority": { "type": "string", "enum": ["NORM", "HIGH"], "default": "NORM", "required": false }, "requestedExecutionDate": { "type": "string", "format": "date", "required": false }, "paymentMode": { "type": "string", "enum": ["SINGLE", "RECURRING"], "default": "SINGLE", "required": false }, "paymentType": { "type": "string", "minLength": 1, "maxLength": 20, "default": "SEPA_CREDIT_TRANSFER", "required": false }, "schedule": { "type": "object", "properties": { "nonWorkingDayExecutionStrategy": { "type": "string", "enum": ["BEFORE", "AFTER", "NONE"], "required": false }, "transferFrequency": { "type": "string", "enum": ["ONCE", "DAILY", "WEEKLY", "MONTHLY", "QUARTERLY", "YEARLY"], "required": false }, "on": { "type": "integer", "required": false }, "startDate": { "type": "string", "format": "date", "required": false }, "endDate": { "type": "string", "format": "date", "required": false }, "repeat": { "type": "integer", "required": false }, "every": { "type": "integer", "enum": [1, 2], "required": false } }, "required": false }, "creditTransferTransactionInformation": { "type": "array", "items": { "properties": { "instructedAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "creditor": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 140, "required": false }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false } }, "required": false }, "creditorAccount": { "type": "object", "properties": { "accountType": { "type": "string", "enum": ["CHECKING", "SAVING"], "required": false } }, "required": false }, "creditorBank": { "type": "object", "properties": { "bankBranchCode": { "type": "string", "maxLength": 11, "required": false }, "name": { "type": "string", "maxLength": 140, "required": false }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false }, "bic": { "type": "string", "pattern": "^([A-Z0-9]){4}([A-Z]){2}([A-Z0-9]){2}([A-Z0-9]{3})?$", "required": false } }, "required": false }, "correspondentBank": { "type": "object", "properties": { "bankBranchCode": { "type": "string", "maxLength": 11, "required": false }, "name": { "type": "string", "maxLength": 140, "required": false }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false }, "bic": { "type": "string", "pattern": "^([A-Z0-9]){4}([A-Z]){2}([A-Z0-9]){2}([A-Z0-9]{3})?$", "required": false } }, "required": false }, "intermediaryBank": { "type": "object", "properties": { "bankBranchCode": { "type": "string", "maxLength": 11, "required": false }, "name": { "type": "string", "maxLength": 140, "required": false }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false }, "bic": { "type": "string", "pattern": "^([A-Z0-9]){4}([A-Z]){2}([A-Z0-9]){2}([A-Z0-9]{3})?$", "required": false } }, "required": false }, "messageToBank": { "type": "string", "maxLength": 140, "required": false }, "targetCurrency": { "type": "string", "pattern": "^[A-Z]{3}$", "required": false }, "remittanceInformation": { "type": "string", "maxLength": 140, "required": false }, "endToEndIdentification": { "type": "string", "maxLength": 35, "required": false } } }, "minItems": 0, "maxItems": 1, "required": false } } };
	
	    schemas.postPaymentOrdersValidateRecord = { "properties": {} };
	
	    schemas.putPaymentOrdersBulkApprovalsRecord = { "properties": { "approvalStatus": { "type": "string", "enum": ["APPROVED", "REJECTED"], "required": true }, "paymentOrderIds": { "type": "array", "items": { "properties": {} }, "minItems": 1, "maxItems": 100, "required": true } } };
	
	    schemas.putPaymentOrdersRecord = { "properties": { "id": { "type": "string", "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$", "required": true } } };
	
	    schemas.putPaymentOrdersApprovalsRecord = { "properties": { "approvalStatus": { "type": "string", "enum": ["APPROVED", "REJECTED"], "required": true } } };
	
	    schemas.postPaymentOrdersCancelRecord = { "properties": { "version": { "type": "integer", "required": true } } };
	
	    schemas.putPaymentOrdersUpdateStatusRecord = { "properties": { "bankReferenceId": { "type": "string", "maxLength": 64, "required": true }, "status": { "type": "string", "enum": ["DRAFT", "ENTERED", "READY", "ACCEPTED", "PROCESSED", "REJECTED", "CANCELLED", "CANCELLATION_PENDING"], "required": true }, "bankStatus": { "type": "string", "maxLength": 35, "required": true }, "reasonCode": { "type": "string", "maxLength": 4, "required": false }, "reasonText": { "type": "string", "maxLength": 35, "required": false }, "errorDescription": { "type": "string", "maxLength": 105, "required": false }, "nextExecutionDate": { "type": "string", "format": "date", "required": false }, "paymentSetupId": { "type": "string", "maxLength": 128, "required": false }, "paymentSubmissionId": { "type": "string", "maxLength": 128, "required": false } } };
	
	    schemas.putPaymentOrdersRetryOrdersRecord = { "properties": { "selectionMaxSize": { "type": "number", "required": false }, "untilDate": { "type": "string", "format": "date", "required": false } } };
	
	    schemas.putPaymentOrderDraftsRecord = { "properties": { "id": { "type": "string", "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$", "required": true } } };
	
	    return {
	
	      getPaymentOrders: getPaymentOrders,
	
	      postPaymentOrdersRecord: postPaymentOrdersRecord,
	
	      getPaymentOrderDrafts: getPaymentOrderDrafts,
	
	      postPaymentOrderDraftsRecord: postPaymentOrderDraftsRecord,
	
	      postPaymentOrdersValidateRecord: postPaymentOrdersValidateRecord,
	
	      putPaymentOrdersBulkApprovalsRecord: putPaymentOrdersBulkApprovalsRecord,
	
	      getPaymentOrdersRecord: getPaymentOrdersRecord,
	
	      deletePaymentOrdersRecord: deletePaymentOrdersRecord,
	
	      putPaymentOrdersRecord: putPaymentOrdersRecord,
	
	      putPaymentOrdersApprovalsRecord: putPaymentOrdersApprovalsRecord,
	
	      postPaymentOrdersCancelRecord: postPaymentOrdersCancelRecord,
	
	      putPaymentOrdersUpdateStatusRecord: putPaymentOrdersUpdateStatusRecord,
	
	      putPaymentOrdersRetryOrdersRecord: putPaymentOrdersRetryOrdersRecord,
	
	      getPaymentOrdersCurrencies: getPaymentOrdersCurrencies,
	
	      getPaymentOrdersRate: getPaymentOrdersRate,
	
	      getPaymentOrderDraftsRecord: getPaymentOrderDraftsRecord,
	
	      deletePaymentOrderDraftsRecord: deletePaymentOrderDraftsRecord,
	
	      putPaymentOrderDraftsRecord: putPaymentOrderDraftsRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=mock.data-bb-payment-orders-http-ng.js.map