(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else if(typeof define === 'function' && define.amd)
		define("mock.data-bb-contact-http-ng", ["vendor-bb-angular", "lib-bb-storage-ng"], factory);
	else if(typeof exports === 'object')
		exports["mock.data-bb-contact-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else
		root["mock.data-bb-contact-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage-ng"]);
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
	exports.contactDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStorageNg = __webpack_require__(3);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _dataBbContactHttp = __webpack_require__(4);
	
	var _dataBbContactHttp2 = _interopRequireDefault(_dataBbContactHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var contactDataModuleKey = 'data-bb-contact-http-ng'; /* eslint-disable */
	var contactDataKey = exports.contactDataKey = 'data-bb-contact-http-ng:contactData';
	
	exports.default = _vendorBbAngular2.default.module(contactDataModuleKey, [_libBbStorageNg2.default]).provider(contactDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  return {
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	    $get: ['$q', _libBbStorageNg.bbStorageServiceKey, '$httpParamSerializer',
	    /* into */
	    (0, _dataBbContactHttp2.default)(config)]
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
	
	    var STORAGE_KEY = 'MOCK_STATE_contactDataModuleKey';
	    var state = {
	      "{version}/contacts": [{
	        "id": "0855e686-d31e-4216-b3dd-5d66161d536d",
	        "name": "John Doe",
	        "alias": "John",
	        "category": "Employee",
	        "contactPerson": "Jane Doe",
	        "phoneNumber": "055512345678",
	        "emailId": "john@example.com",
	        "addressLine1": "Backbase enterprise",
	        "addressLine2": "",
	        "streetName": "Jacob Bontiusplaats 9",
	        "town": "Amsterdam",
	        "postCode": "1018 LL",
	        "countrySubDivision": "North Holland",
	        "country": "NL",
	        "accounts": [{
	          "name": "Saving account",
	          "alias": "Savings",
	          "IBAN": "FI21 1234 5600 0007 85",
	          "bankName": "Test Bank",
	          "bankAddressLine1": "QA Bank",
	          "bankAddressLine2": "",
	          "bankStreetName": "Jodenbreestraat 96",
	          "bankTown": "Amsterdam",
	          "bankPostCode": "1011NS",
	          "bankCountrySubDivision": "North Holland",
	          "bankCountry": "NL",
	          "accountHolderAddressLine1": "",
	          "accountHolderAddressLine2": "",
	          "accountHolderStreetName": "Woestduinstraat 114-3",
	          "accountHolderTown": "Amsterdam",
	          "accountHolderPostCode": "1059 SP",
	          "accountHolderCountrySubDivision": "North Holland",
	          "accountHolderCountry": "NL"
	        }],
	        "accessContextScope": "SA"
	      }, {
	        "id": "0855e686-d31e-4216-b3dd-5d66161d536e",
	        "name": "Jane Doe",
	        "alias": "Jane",
	        "category": "Manager",
	        "contactPerson": "John Doe",
	        "phoneNumber": "055512345678",
	        "emailId": "jane@example.com",
	        "addressLine1": "Backbase enterprise",
	        "addressLine2": "",
	        "streetName": "Jacob Bontiusplaats 9",
	        "town": "Amsterdam",
	        "postCode": "1018 LL",
	        "countrySubDivision": "North Holland",
	        "country": "NL",
	        "accounts": [{
	          "name": "Saving account",
	          "alias": "Savings",
	          "IBAN": "FI21 1234 5600 0007 85",
	          "bankName": "Test Bank",
	          "bankAddressLine1": "Test Bank Co",
	          "bankAddressLine2": "",
	          "bankStreetName": "Jodenbreestraat 96",
	          "bankTown": "Amsterdam",
	          "bankPostCode": "1011NS",
	          "bankCountrySubDivision": "North Holland",
	          "bankCountry": "NL"
	        }],
	        "accessContextScope": "LE"
	      }],
	      "{version}/approvals": [{
	        "id": 102,
	        "creatorBbId": "john@example.com",
	        "creationTime": "2017-05-12T14:33:13.452Z",
	        "action": "CREATE",
	        "status": "PENDING",
	        "data": {
	          "id": "0855e686-d31e-4216-b3dd-5d66161d536d",
	          "name": "John Doe",
	          "alias": "John",
	          "category": "Employee",
	          "contactPerson": "Jane Doe",
	          "phoneNumber": "055512345678",
	          "emailId": "john@example.com",
	          "addressLine1": "Backbase enterprise",
	          "addressLine2": "",
	          "streetName": "Jacob Bontiusplaats 9",
	          "town": "Amsterdam",
	          "postCode": "1018 LL",
	          "countrySubDivision": "North Holland",
	          "country": "NL",
	          "accounts": [{
	            "name": "Saving account",
	            "alias": "Savings",
	            "IBAN": "FI21 1234 5600 0007 85",
	            "bankName": "Test Bank",
	            "bankAddressLine1": "Test Bank Co",
	            "bankAddressLine2": "",
	            "bankStreetName": "Jodenbreestraat 96",
	            "bankTown": "Amsterdam",
	            "bankPostCode": "1011NS",
	            "bankCountrySubDivision": "North Holland",
	            "bankCountry": "NL"
	          }],
	          "accessContextScope": "USER"
	        }
	      }],
	      "{version}/approvals/me": [{
	        "id": 102,
	        "creatorBbId": "john@example.com",
	        "creationTime": "2017-05-12T14:33:13Z",
	        "action": "CREATE",
	        "status": "PENDING",
	        "data": {
	          "id": "0855e686-d31e-4216-b3dd-5d66161d536d",
	          "name": "John Doe",
	          "alias": "John",
	          "category": "Employee",
	          "contactPerson": "Jane Doe",
	          "phoneNumber": "055512345678",
	          "emailId": "john@example.com",
	          "addressLine1": "Backbase enterprise",
	          "addressLine2": "",
	          "streetName": "Jacob Bontiusplaats 9",
	          "town": "Amsterdam",
	          "postCode": "1018 LL",
	          "countrySubDivision": "North Holland",
	          "country": "NL",
	          "accounts": [{
	            "name": "Saving account",
	            "alias": "Savings",
	            "IBAN": "FI21 1234 5600 0007 85",
	            "bankName": "Test Bank",
	            "bankAddressLine1": "Test Bank Co",
	            "bankAddressLine2": "",
	            "bankStreetName": "Jodenbreestraat 96",
	            "bankTown": "Amsterdam",
	            "bankPostCode": "1011NS",
	            "bankCountrySubDivision": "North Holland",
	            "bankCountry": "NL"
	          }],
	          "accessContextScope": "USER"
	        }
	      }],
	      "{version}/iban-restrictions/countries": [{
	        "countryCode": "NL",
	        "ibanLength": 18
	      }, {
	        "countryCode": "TR",
	        "ibanLength": 26
	      }]
	    };
	
	    bbStorage.subscribe(STORAGE_KEY, function (newState) {
	      state = newState;
	    });
	
	    var persistState = function persistState(newState) {
	      bbStorage.setItem(STORAGE_KEY, newState);
	    };
	
	    var responses = {
	
	      getContacts: [{ "status": 200, "data": [{ "id": "0855e686-d31e-4216-b3dd-5d66161d536d", "name": "John Doe", "alias": "John", "category": "Employee", "contactPerson": "Jane Doe", "phoneNumber": "055512345678", "emailId": "john@example.com", "addressLine1": "Backbase enterprise", "addressLine2": "", "streetName": "Jacob Bontiusplaats 9", "town": "Amsterdam", "postCode": "1018 LL", "countrySubDivision": "North Holland", "country": "NL", "accounts": [{ "name": "Saving account", "alias": "Savings", "IBAN": "FI21 1234 5600 0007 85", "bankName": "Test Bank", "bankAddressLine1": "QA Bank", "bankAddressLine2": "", "bankStreetName": "Jodenbreestraat 96", "bankTown": "Amsterdam", "bankPostCode": "1011NS", "bankCountrySubDivision": "North Holland", "bankCountry": "NL", "accountHolderAddressLine1": "", "accountHolderAddressLine2": "", "accountHolderStreetName": "Woestduinstraat 114-3", "accountHolderTown": "Amsterdam", "accountHolderPostCode": "1059 SP", "accountHolderCountrySubDivision": "North Holland", "accountHolderCountry": "NL" }], "accessContextScope": "SA" }, { "id": "0855e686-d31e-4216-b3dd-5d66161d536e", "name": "Jane Doe", "alias": "Jane", "category": "Manager", "contactPerson": "John Doe", "phoneNumber": "055512345678", "emailId": "jane@example.com", "addressLine1": "Backbase enterprise", "addressLine2": "", "streetName": "Jacob Bontiusplaats 9", "town": "Amsterdam", "postCode": "1018 LL", "countrySubDivision": "North Holland", "country": "NL", "accounts": [{ "name": "Saving account", "alias": "Savings", "IBAN": "FI21 1234 5600 0007 85", "bankName": "Test Bank", "bankAddressLine1": "Test Bank Co", "bankAddressLine2": "", "bankStreetName": "Jodenbreestraat 96", "bankTown": "Amsterdam", "bankPostCode": "1011NS", "bankCountrySubDivision": "North Holland", "bankCountry": "NL" }], "accessContextScope": "LE" }] }, { "status": 400, "data": null }, { "status": 401, "data": null }, { "status": 404, "data": null }, { "status": 500, "data": null }],
	
	      postContactsRecord: [{ "status": 201, "data": { "id": "0955e686-d31e-4216-b3dd-5d66161d536d" } }, { "status": 202, "data": { "status": "APPROVAL_REQUIRED", "approvalId": 1 } }, { "status": 400, "data": null }, { "status": 401, "data": null }, { "status": 500, "data": null }],
	
	      getApprovals: [{ "status": 200, "data": [{ "id": 102, "creatorBbId": "john@example.com", "creationTime": "2017-05-12T14:33:13.452Z", "action": "CREATE", "status": "PENDING", "data": { "id": "0855e686-d31e-4216-b3dd-5d66161d536d", "name": "John Doe", "alias": "John", "category": "Employee", "contactPerson": "Jane Doe", "phoneNumber": "055512345678", "emailId": "john@example.com", "addressLine1": "Backbase enterprise", "addressLine2": "", "streetName": "Jacob Bontiusplaats 9", "town": "Amsterdam", "postCode": "1018 LL", "countrySubDivision": "North Holland", "country": "NL", "accounts": [{ "name": "Saving account", "alias": "Savings", "IBAN": "FI21 1234 5600 0007 85", "bankName": "Test Bank", "bankAddressLine1": "Test Bank Co", "bankAddressLine2": "", "bankStreetName": "Jodenbreestraat 96", "bankTown": "Amsterdam", "bankPostCode": "1011NS", "bankCountrySubDivision": "North Holland", "bankCountry": "NL" }], "accessContextScope": "USER" } }] }, { "status": 400, "data": null }, { "status": 401, "data": null }, { "status": 404, "data": null }, { "status": 500, "data": null }],
	
	      getContactsRecord: [{ "status": 200, "data": { "id": "0855e686-d31e-4216-b3dd-5d66161d536d", "name": "John Doe", "alias": "John", "category": "Employee", "contactPerson": "Jane Doe", "phoneNumber": "055512345678", "emailId": "john@example.com", "addressLine1": "Backbase enterprise", "addressLine2": "", "streetName": "Jacob Bontiusplaats 9", "town": "Amsterdam", "postCode": "1018 LL", "countrySubDivision": "North Holland", "country": "NL", "accounts": [{ "name": "Saving account", "alias": "Savings", "IBAN": "FI21 1234 5600 0007 85", "bankName": "Test Bank", "bankAddressLine1": "Test Bank Co", "bankAddressLine2": "", "bankStreetName": "Jodenbreestraat 96", "bankTown": "Amsterdam", "bankPostCode": "1011NS", "bankCountrySubDivision": "North Holland", "bankCountry": "NL", "accountHolderAddressLine1": "Backbase enterprise", "accountHolderAddressLine2": "", "accountHolderStreetName": "Jacob Bontiusplaats 9", "accountHolderTown": "Amsterdam", "accountHolderPostCode": "1018 LL", "accountHolderCountrySubDivision": "North Holland", "accountHolderCountry": "NL" }], "accessContextScope": "USER" } }, { "status": 400, "data": null }, { "status": 401, "data": null }, { "status": 404, "data": null }, { "status": 500, "data": null }],
	
	      putContactsRecord: [{ "status": 202, "data": { "status": "REQUEST_ACCEPTED" } }, { "status": 400, "data": null }, { "status": 401, "data": null }, { "status": 404, "data": null }, { "status": 409, "data": { "message": "Approval request already exist with this contact." } }, { "status": 500, "data": null }],
	
	      deleteContactsRecord: [{ "status": 202, "data": { "status": "REQUEST_ACCEPTED" } }, { "status": 400, "data": null }, { "status": 401, "data": null }, { "status": 404, "data": null }, { "status": 409, "data": { "message": "Approval request already exist with this contact." } }, { "status": 422, "data": { "message": "Entity could not be processed" } }, { "status": 500, "data": null }],
	
	      postApprovalsApprovalRecordsRecord: [{ "status": 201, "data": null }, { "status": 400, "data": null }, { "status": 401, "data": null }, { "status": 404, "data": null }, { "status": 500, "data": null }],
	
	      postApprovalsRejectionRecordsRecord: [{ "status": 201, "data": null }, { "status": 400, "data": null }, { "status": 401, "data": null }, { "status": 404, "data": null }, { "status": 500, "data": null }],
	
	      getApprovalsMe: [{ "status": 200, "data": [{ "id": 102, "creatorBbId": "john@example.com", "creationTime": "2017-05-12T14:33:13Z", "action": "CREATE", "status": "PENDING", "data": { "id": "0855e686-d31e-4216-b3dd-5d66161d536d", "name": "John Doe", "alias": "John", "category": "Employee", "contactPerson": "Jane Doe", "phoneNumber": "055512345678", "emailId": "john@example.com", "addressLine1": "Backbase enterprise", "addressLine2": "", "streetName": "Jacob Bontiusplaats 9", "town": "Amsterdam", "postCode": "1018 LL", "countrySubDivision": "North Holland", "country": "NL", "accounts": [{ "name": "Saving account", "alias": "Savings", "IBAN": "FI21 1234 5600 0007 85", "bankName": "Test Bank", "bankAddressLine1": "Test Bank Co", "bankAddressLine2": "", "bankStreetName": "Jodenbreestraat 96", "bankTown": "Amsterdam", "bankPostCode": "1011NS", "bankCountrySubDivision": "North Holland", "bankCountry": "NL" }], "accessContextScope": "USER" } }] }],
	
	      getIbanRestrictionsCountries: [{ "status": 200, "data": [{ "countryCode": "NL", "ibanLength": 18 }, { "countryCode": "TR", "ibanLength": 26 }] }, { "status": 400, "data": null }, { "status": 401, "data": null }, { "status": 404, "data": null }, { "status": 500, "data": null }],
	
	      getIbanRestrictionsCountriesRecord: [{ "status": 200, "data": { "ibanLength": 18 } }, { "status": 400, "data": null }, { "status": 401, "data": null }, { "status": 404, "data": null }, { "status": 500, "data": null }]
	
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
	
	    var plugins = (_plugins = {}, _defineProperty(_plugins, PLUGINS_ALL, []), _defineProperty(_plugins, 'getContacts', []), _defineProperty(_plugins, 'postContactsRecord', []), _defineProperty(_plugins, 'getApprovals', []), _defineProperty(_plugins, 'getContactsRecord', []), _defineProperty(_plugins, 'putContactsRecord', []), _defineProperty(_plugins, 'deleteContactsRecord', []), _defineProperty(_plugins, 'postApprovalsApprovalRecordsRecord', []), _defineProperty(_plugins, 'postApprovalsRejectionRecordsRecord', []), _defineProperty(_plugins, 'getApprovalsMe', []), _defineProperty(_plugins, 'getIbanRestrictionsCountries', []), _defineProperty(_plugins, 'getIbanRestrictionsCountriesRecord', []), _plugins);
	
	    if (!plugins['getContacts']) {
	      console.warn('%cThere is no "getContacts" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getContacts'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['postContactsRecord']) {
	      console.warn('%cThere is no "postContactsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['postContactsRecord'].push(function (result, args, uri) {
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
	
	    if (!plugins['getContactsRecord']) {
	      console.warn('%cThere is no "getContactsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getContactsRecord'].push(function (result, args, uri, method) {
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
	
	    if (!plugins['putContactsRecord']) {
	      console.warn('%cThere is no "putContactsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['putContactsRecord'].push(function (result, args, uri, method) {
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
	
	    if (!plugins['deleteContactsRecord']) {
	      console.warn('%cThere is no "deleteContactsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['deleteContactsRecord'].push(function (result, args, uri, method) {
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
	
	    if (!plugins['getApprovals']) {
	      console.warn('%cThere is no "getApprovals" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getApprovals'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['getApprovalsMe']) {
	      console.warn('%cThere is no "getApprovalsMe" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getApprovalsMe'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['getIbanRestrictionsCountries']) {
	      console.warn('%cThere is no "getIbanRestrictionsCountries" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getIbanRestrictionsCountries'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['getIbanRestrictionsCountriesRecord']) {
	      console.warn('%cThere is no "getIbanRestrictionsCountriesRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getIbanRestrictionsCountriesRecord'].push(function (result, args, uri, method) {
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
	
	    if (!plugins['getContacts']) {
	      console.warn('%cThere is no "getContacts" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getContacts'].push(function (result, args) {
	        var query = void 0;
	
	        if (args && args.length && args[0]) {
	          query = args[0].query;
	        }
	
	        if (query) {
	          query = query.toUpperCase();
	
	          result.data = result.data.filter(function (contact) {
	            return contact.name.toUpperCase().startsWith(query) || contact.alias.toUpperCase().startsWith(query);
	          });
	        }
	        return result;
	      }, function (result) {
	        if (result.data.length > 0) {
	          result.data.sort(function (a, b) {
	            return a.name > b.name ? 1 : -1;
	          });
	        }
	        return result;
	      });
	    }
	
	    if (!plugins['postApprovalsApprovalRecordsRecord']) {
	      console.warn('%cThere is no "postApprovalsApprovalRecordsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['postApprovalsApprovalRecordsRecord'].push(function (result, args) {
	        // Assuming id is the last but one argument
	        var id = Number(args[args.length - 3]);
	
	        // Remove approval from the state
	        var collection = state['{version}/approvals/me'] || [];
	        var index = collection.findIndex(function (item) {
	          return item.id === id;
	        });
	        if (index >= 0) {
	          collection.splice(index, 1);
	        }
	
	        collection = state['{version}/approvals'] || [];
	        index = collection.findIndex(function (item) {
	          return item.id === id;
	        });
	
	        if (index >= 0) {
	          // Approved so add as new contact
	          var contactsCollection = state['{version}/contacts'] || [];
	          contactsCollection.push(collection[index]);
	
	          // remove from approval collection
	          collection.splice(index, 1);
	        } else {
	          // Return NOT FOUND response, if available
	          // (getResponse method is available in the mock module context)
	          return Promise.reject(getResponse(method, 404));
	        }
	
	        return result;
	      });
	    }
	
	    if (!plugins['postApprovalsRejectionRecordsRecord']) {
	      console.warn('%cThere is no "postApprovalsRejectionRecordsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['postApprovalsRejectionRecordsRecord'].push(function (result, args) {
	        // Assuming id is the last but one argument
	        var id = Number(args[args.length - 3]);
	
	        // Remove approval from the state
	        var collection = state['{version}/approvals/me'] || [];
	        var index = collection.findIndex(function (item) {
	          return item.id === id;
	        });
	        if (index >= 0) {
	          collection.splice(index, 1);
	        }
	
	        collection = state['{version}/approvals'] || [];
	        index = collection.findIndex(function (item) {
	          return item.id === id;
	        });
	        if (index >= 0) {
	          collection.splice(index, 1);
	        } else {
	          // Return NOT FOUND response, if available
	          // (getResponse method is available in the mock module context)
	          return Promise.reject(getResponse(method, 404));
	        }
	
	        return result;
	      });
	    }
	
	    if (!plugins['getContacts']) {
	      console.warn('%cThere is no "getContacts" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getContacts'].push(function (result, args) {
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
	
	    function getContacts(params, headers) {
	      var url = '' + baseUri + version + '/contacts';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getContacts', 200)).then(pluginMocks('getContacts', [params, headers], '{version}/contacts')).catch(handleError('getContacts'));
	    }
	
	    function postContactsRecord(data, headers) {
	      var url = '' + baseUri + version + '/contacts';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postContactsRecord', 201)).then(pluginMocks('postContactsRecord', [data, headers], '{version}/contacts')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postContactsRecord'));
	    }
	
	    function getApprovals(params, headers) {
	      var url = '' + baseUri + version + '/approvals';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getApprovals', 200)).then(pluginMocks('getApprovals', [params, headers], '{version}/approvals')).catch(handleError('getApprovals'));
	    }
	
	    function getContactsRecord(contactId, params, headers) {
	      var url = '' + baseUri + version + '/contacts/' + contactId;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getContactsRecord', 200)).then(pluginMocks('getContactsRecord', [contactId, params, headers], '{version}/contacts/{contactId}')).catch(handleError('getContactsRecord'));
	    }
	
	    function putContactsRecord(contactId, data, headers) {
	      var url = '' + baseUri + version + '/contacts/' + contactId;
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putContactsRecord', 202)).then(pluginMocks('putContactsRecord', [contactId, data, headers], '{version}/contacts/{contactId}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putContactsRecord'));
	    }
	
	    function deleteContactsRecord(contactId, params, headers) {
	      var url = '' + baseUri + version + '/contacts/' + contactId;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deleteContactsRecord', 202)).then(pluginMocks('deleteContactsRecord', [contactId, params, headers], '{version}/contacts/{contactId}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deleteContactsRecord'));
	    }
	
	    function postApprovalsApprovalRecordsRecord(requestId, data, headers) {
	      var url = '' + baseUri + version + '/approvals/' + requestId + '/approvalRecords';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postApprovalsApprovalRecordsRecord', 201)).then(pluginMocks('postApprovalsApprovalRecordsRecord', [requestId, data, headers], '{version}/approvals/{requestId}/approvalRecords')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postApprovalsApprovalRecordsRecord'));
	    }
	
	    function postApprovalsRejectionRecordsRecord(requestId, data, headers) {
	      var url = '' + baseUri + version + '/approvals/' + requestId + '/rejectionRecords';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postApprovalsRejectionRecordsRecord', 201)).then(pluginMocks('postApprovalsRejectionRecordsRecord', [requestId, data, headers], '{version}/approvals/{requestId}/rejectionRecords')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postApprovalsRejectionRecordsRecord'));
	    }
	
	    function getApprovalsMe(params, headers) {
	      var url = '' + baseUri + version + '/approvals/me';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getApprovalsMe', 200)).then(pluginMocks('getApprovalsMe', [params, headers], '{version}/approvals/me')).catch(handleError('getApprovalsMe'));
	    }
	
	    function getIbanRestrictionsCountries(params, headers) {
	      var url = '' + baseUri + version + '/iban-restrictions/countries';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getIbanRestrictionsCountries', 200)).then(pluginMocks('getIbanRestrictionsCountries', [params, headers], '{version}/iban-restrictions/countries')).catch(handleError('getIbanRestrictionsCountries'));
	    }
	
	    function getIbanRestrictionsCountriesRecord(code, params, headers) {
	      var url = '' + baseUri + version + '/iban-restrictions/countries/' + code;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getIbanRestrictionsCountriesRecord', 200)).then(pluginMocks('getIbanRestrictionsCountriesRecord', [code, params, headers], '{version}/iban-restrictions/countries/{code}')).catch(handleError('getIbanRestrictionsCountriesRecord'));
	    }
	
	    schemas.postContactsRecord = { "properties": { "accessContext": { "type": "object", "properties": { "legalEntityId": { "type": "string", "maxLength": 36, "required": false }, "serviceAgreementId": { "type": "string", "maxLength": 36, "required": false } }, "required": false } } };
	
	    schemas.putContactsRecord = { "properties": { "name": { "type": "string", "maxLength": 140, "required": true }, "alias": { "type": "string", "maxLength": 70, "required": false }, "category": { "type": "string", "maxLength": 70, "required": false }, "contactPerson": { "type": "string", "maxLength": 70, "required": false }, "phoneNumber": { "type": "string", "maxLength": 30, "required": false }, "emailId": { "type": "string", "format": "email", "required": false }, "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "minLength": 2, "maxLength": 2, "required": false }, "accounts": { "type": "array", "items": { "properties": { "name": { "type": "string", "maxLength": 140, "required": false }, "alias": { "type": "string", "maxLength": 34, "required": false }, "accountNumber": { "type": "string", "maxLength": 34, "required": false }, "IBAN": { "type": "string", "maxLength": 34, "required": false }, "BIC": { "type": "string", "required": false }, "bankCode": { "type": "string", "maxLength": 11, "required": false }, "bankName": { "type": "string", "maxLength": 140, "required": false }, "bankAddressLine1": { "type": "string", "maxLength": 70, "required": false }, "bankAddressLine2": { "type": "string", "maxLength": 70, "required": false }, "bankStreetName": { "type": "string", "maxLength": 70, "required": false }, "bankTown": { "type": "string", "maxLength": 35, "required": false }, "bankPostCode": { "type": "string", "maxLength": 16, "required": false }, "bankCountrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "bankCountry": { "type": "string", "minLength": 2, "maxLength": 2, "required": false }, "accountHolderAddressLine1": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine2": { "type": "string", "maxLength": 70, "required": false }, "accountHolderStreetName": { "type": "string", "maxLength": 70, "required": false }, "accountHolderTown": { "type": "string", "maxLength": 35, "required": false }, "accountHolderPostCode": { "type": "string", "maxLength": 16, "required": false }, "accountHolderCountrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "accountHolderCountry": { "type": "string", "minLength": 2, "maxLength": 2, "required": false } } }, "minItems": 1, "required": true }, "accessContextScope": { "type": "string", "enum": ["SA", "LE", "USER"], "default": "USER", "required": false } } };
	
	    return {
	
	      getContacts: getContacts,
	
	      postContactsRecord: postContactsRecord,
	
	      getApprovals: getApprovals,
	
	      getContactsRecord: getContactsRecord,
	
	      putContactsRecord: putContactsRecord,
	
	      deleteContactsRecord: deleteContactsRecord,
	
	      postApprovalsApprovalRecordsRecord: postApprovalsApprovalRecordsRecord,
	
	      postApprovalsRejectionRecordsRecord: postApprovalsRejectionRecordsRecord,
	
	      getApprovalsMe: getApprovalsMe,
	
	      getIbanRestrictionsCountries: getIbanRestrictionsCountries,
	
	      getIbanRestrictionsCountriesRecord: getIbanRestrictionsCountriesRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=mock.data-bb-contact-http-ng.js.map