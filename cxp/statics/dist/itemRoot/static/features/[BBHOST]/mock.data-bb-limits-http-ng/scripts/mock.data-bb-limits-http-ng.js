(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else if(typeof define === 'function' && define.amd)
		define("mock.data-bb-limits-http-ng", ["vendor-bb-angular", "lib-bb-storage-ng"], factory);
	else if(typeof exports === 'object')
		exports["mock.data-bb-limits-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else
		root["mock.data-bb-limits-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage-ng"]);
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
	exports.limitsDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStorageNg = __webpack_require__(3);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _dataBbLimitsHttp = __webpack_require__(4);
	
	var _dataBbLimitsHttp2 = _interopRequireDefault(_dataBbLimitsHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var limitsDataModuleKey = 'data-bb-limits-http-ng'; /* eslint-disable */
	var limitsDataKey = exports.limitsDataKey = 'data-bb-limits-http-ng:limitsData';
	
	exports.default = _vendorBbAngular2.default.module(limitsDataModuleKey, [_libBbStorageNg2.default]).provider(limitsDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  return {
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	    $get: ['$q', _libBbStorageNg.bbStorageServiceKey, '$httpParamSerializer',
	    /* into */
	    (0, _dataBbLimitsHttp2.default)(config)]
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
	
	    var STORAGE_KEY = 'MOCK_STATE_limitsDataModuleKey';
	    var state = {
	      "{version}/limits/limitablePrivileges": [{
	        "name": "Create"
	      }, {
	        "name": "Approve"
	      }],
	      "{version}/limits/periods": [{
	        "name": "DAILY"
	      }, {
	        "name": "WEEKLY"
	      }, {
	        "name": "MONTHLY"
	      }, {
	        "name": "QUARTERLY"
	      }, {
	        "name": "YEARLY"
	      }],
	      "{version}/limits/{paymentRef}/breachreport": [{
	        "payment": {
	          "refNo": "4563-3474-34553-24556",
	          "user-BBID": "550e8400-e29b-41d4-a716-446655440000",
	          "amount": "599.99",
	          "effectiveDate": "2017-01-31T12:12:12Z",
	          "currency": "EUR",
	          "paymentType": "Domestic Payments",
	          "state": "NEW"
	        },
	        "matchedLimits": 1,
	        "consumption": [{
	          "limitId": "4563-3474-34553-24556",
	          "limitCcy": "EUR",
	          "consumedAmount": "599.99",
	          "consumedOn": "2017-01-31T12:12:12Z",
	          "state": "CONSUMED"
	        }],
	        "checkTime": "2017-01-31T12:12:12Z",
	        "breachReport": [{
	          "limitedEntity": [{
	            "ref": "1234567-12312-123123",
	            "type": "Service Agreement",
	            "description": "Kuhic, Gislason and Kemmer. SERVICE AGREEMENT"
	          }],
	          "shadow": false,
	          "currency": "EUR",
	          "user-BBID": "oleksii",
	          "breachInfo": [{
	            "breachType": "THRESHOLD",
	            "breachedLimitType": "PERIODIC",
	            "timeframe": {
	              "period": "daily",
	              "startTime": "2017-01-31T00:00:00Z",
	              "endTime": "2017-01-31T23:59:59Z"
	            },
	            "currentConsumption": "250.0",
	            "currentThreshold": "499.9"
	          }, {
	            "breachType": "CONSUMPTION",
	            "breachedLimitType": "PERIODIC",
	            "timeframe": {
	              "period": "monthly",
	              "startTime": "2017-01-01T00:00:00Z",
	              "endTime": "2017-01-31T23:59:59Z"
	            },
	            "currentConsumption": "9950.0",
	            "currentThreshold": "10000.0"
	          }]
	        }, {
	          "user-BBID": "oleksii",
	          "shadow": false,
	          "currency": "EUR",
	          "breachInfo": [{
	            "breachType": "CONSUMPTION",
	            "breachedLimitType": "PERIODIC",
	            "timeframe": {
	              "period": "daily",
	              "startTime": "2017-01-31T00:00:00Z",
	              "endTime": "2017-01-31T23:59:59Z"
	            },
	            "currentConsumption": "500.0",
	            "currentThreshold": "1000.0"
	          }]
	        }, {
	          "limitedEntity": [{
	            "ref": "1234567-12312-123123",
	            "type": "Function Access Group",
	            "description": "Payments approvers"
	          }, {
	            "ref": "1234567-12312-123123",
	            "type": "Function",
	            "description": "Domestic payments"
	          }, {
	            "ref": "Approve",
	            "type": "Privilege",
	            "description": "Approve"
	          }],
	          "shadow": false,
	          "currency": "EUR",
	          "breachInfo": [{
	            "breachType": "THRESHOLD",
	            "breachedLimitType": "PERIODIC",
	            "timeframe": {
	              "period": "daily",
	              "startTime": "2017-01-31T00:00:00Z",
	              "endTime": "2017-01-31T23:59:59Z"
	            },
	            "currentConsumption": "250.0",
	            "currentThreshold": "499.9"
	          }]
	        }, {
	          "limitedEntity": [{
	            "ref": "1234567-12312-123123",
	            "type": "Legal Entity",
	            "description": "Kuhic, Gislason and Kemmer"
	          }],
	          "shadow": false,
	          "currency": "EUR",
	          "breachInfo": [{
	            "breachType": "CONSUMPTION",
	            "breachedLimitType": "PERIODIC",
	            "timeframe": {
	              "period": "quarterly",
	              "startTime": "2017-01-01T00:00:00Z",
	              "endTime": "2017-03-31T23:59:59Z"
	            },
	            "currentConsumption": "99950.0",
	            "currentThreshold": "100000.0"
	          }, {
	            "breachType": "THRESHOLD",
	            "breachedLimitType": "TRANSACTIONAL",
	            "currentThreshold": "499.9"
	          }]
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
	
	      postLimitsPeriodicRecord: [{ "status": 201, "data": { "id": 42 } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "50", "min": "1" } }] } }, { "status": 403, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to an insufficient user quota of {quota}.", "key": "common.api.quota", "context": { "quota": "someQuota" } }] } }, { "status": 409, "data": null }, { "status": 422, "data": null }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      putLimitsPeriodicRecord: [{ "status": 200, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "50", "min": "1" } }] } }, { "status": 403, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to an insufficient user quota of {quota}.", "key": "common.api.quota", "context": { "quota": "someQuota" } }] } }, { "status": 404, "data": { "message": "Resource not found.", "errors": [{ "message": "Unable to find the resource requested resource: {resource}.", "key": "common.api.resource", "context": { "resource": "aResource" } }] } }, { "status": 422, "data": null }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      postLimitsTransactionalRecord: [{ "status": 201, "data": { "id": 42 } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "50", "min": "1" } }] } }, { "status": 403, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to an insufficient user quota of {quota}.", "key": "common.api.quota", "context": { "quota": "someQuota" } }] } }, { "status": 409, "data": null }, { "status": 422, "data": null }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      putLimitsTransactionalRecord: [{ "status": 200, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "50", "min": "1" } }] } }, { "status": 403, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to an insufficient user quota of {quota}.", "key": "common.api.quota", "context": { "quota": "someQuota" } }] } }, { "status": 404, "data": { "message": "Resource not found.", "errors": [{ "message": "Unable to find the resource requested resource: {resource}.", "key": "common.api.resource", "context": { "resource": "aResource" } }] } }, { "status": 422, "data": null }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      postLimitsCheckRecord: [{ "status": 200, "data": { "payment": { "refNo": "4563-3474-34553-24556", "user-BBID": "550e8400-e29b-41d4-a716-446655440000", "amount": "599.99", "effectiveDate": "2017-01-31T12:12:12Z", "currency": "EUR", "paymentType": "Domestic Payments", "state": "NEW" }, "matchedLimits": 1, "consumption": [{ "limitId": "4563-3474-34553-24556", "limitCcy": "EUR", "consumedAmount": "599.99", "consumedOn": "2017-01-31T12:12:12Z", "state": "CONSUMED" }], "checkTime": "2017-01-31T12:12:12Z", "breachReport": [{ "limitedEntity": [{ "ref": "1234567-12312-123123", "type": "Service Agreement", "description": "Kuhic, Gislason and Kemmer. SERVICE AGREEMENT" }], "shadow": false, "currency": "EUR", "user-BBID": "oleksii", "breachInfo": [{ "breachType": "THRESHOLD", "breachedLimitType": "PERIODIC", "timeframe": { "period": "daily", "startTime": "2017-01-31T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "250.0", "currentThreshold": "499.9" }, { "breachType": "CONSUMPTION", "breachedLimitType": "PERIODIC", "timeframe": { "period": "monthly", "startTime": "2017-01-01T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "9950.0", "currentThreshold": "10000.0" }] }, { "user-BBID": "oleksii", "shadow": false, "currency": "EUR", "breachInfo": [{ "breachType": "CONSUMPTION", "breachedLimitType": "PERIODIC", "timeframe": { "period": "daily", "startTime": "2017-01-31T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "500.0", "currentThreshold": "1000.0" }] }, { "limitedEntity": [{ "ref": "1234567-12312-123123", "type": "Function Access Group", "description": "Payments approvers" }, { "ref": "1234567-12312-123123", "type": "Function", "description": "Domestic payments" }, { "ref": "Approve", "type": "Privilege", "description": "Approve" }], "shadow": false, "currency": "EUR", "breachInfo": [{ "breachType": "THRESHOLD", "breachedLimitType": "PERIODIC", "timeframe": { "period": "daily", "startTime": "2017-01-31T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "250.0", "currentThreshold": "499.9" }] }, { "limitedEntity": [{ "ref": "1234567-12312-123123", "type": "Legal Entity", "description": "Kuhic, Gislason and Kemmer" }], "shadow": false, "currency": "EUR", "breachInfo": [{ "breachType": "CONSUMPTION", "breachedLimitType": "PERIODIC", "timeframe": { "period": "quarterly", "startTime": "2017-01-01T00:00:00Z", "endTime": "2017-03-31T23:59:59Z" }, "currentConsumption": "99950.0", "currentThreshold": "100000.0" }, { "breachType": "THRESHOLD", "breachedLimitType": "TRANSACTIONAL", "currentThreshold": "499.9" }] }] } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "50", "min": "1" } }] } }, { "status": 403, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to an insufficient user quota of {quota}.", "key": "common.api.quota", "context": { "quota": "someQuota" } }] } }, { "status": 409, "data": null }, { "status": 422, "data": null }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      postLimitsRetrievalRecord: [{ "status": 200, "data": [{ "uuid": "1234-5678-9101-1121", "user-BBID": "uuid-user-id", "entities": [{ "etype": "LE", "eref": "550e8400-e29b-41d4-a716-446655440000" }], "currency": "EUR", "periodic-limits-bounds": { "daily": "100.0", "weekly": "120.0", "monthly": "300.0", "quarterly": "600.0", "customPeriods": [{ "period": "biweekly", "amount": "100" }] }, "shadow": true }] }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "50", "min": "1" } }] } }, { "status": 403, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to an insufficient user quota of {quota}.", "key": "common.api.quota", "context": { "quota": "someQuota" } }] } }, { "status": 422, "data": null }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      getLimitsLimitablePrivileges: [{ "status": 200, "data": [{ "name": "Create" }, { "name": "Approve" }] }, { "status": 403, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to an insufficient user quota of {quota}.", "key": "common.api.quota", "context": { "quota": "someQuota" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      getLimitsPeriods: [{ "status": 200, "data": [{ "name": "DAILY" }, { "name": "WEEKLY" }, { "name": "MONTHLY" }, { "name": "QUARTERLY" }, { "name": "YEARLY" }] }, { "status": 403, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to an insufficient user quota of {quota}.", "key": "common.api.quota", "context": { "quota": "someQuota" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      postLimitsRollbackRecord: [{ "status": 200, "data": { "paymentInfo": { "refNo": "4563-3474-34553-24556", "amount": "599.99", "effectiveDate": "2017-01-31T12:12:12Z", "currency": "EUR", "state": "NEW" }, "rollbackInfo": [{ "limitedEntities": [{ "etype": "FAG", "eref": "950e8400-e29b-41d4-a716-446655440000" }, { "etype": "FUN", "eref": "750e8400-e29b-41d4-a716-446655440000" }, { "etype": "PRV", "eref": "850e8400-e29b-41d4-a716-446655440000" }], "currency": "EUR", "shadow": true }, { "limitedEntities": [], "currency": "USD", "shadow": false, "user-BBID": "Johnny" }] } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "50", "min": "1" } }] } }, { "status": 403, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to an insufficient user quota of {quota}.", "key": "common.api.quota", "context": { "quota": "someQuota" } }] } }, { "status": 404, "data": { "message": "Resource not found.", "errors": [{ "message": "Unable to find the resource requested resource: {resource}.", "key": "common.api.resource", "context": { "resource": "aResource" } }] } }, { "status": 409, "data": null }, { "status": 422, "data": null }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      getLimitsBreachreport: [{ "status": 200, "data": [{ "payment": { "refNo": "4563-3474-34553-24556", "user-BBID": "550e8400-e29b-41d4-a716-446655440000", "amount": "599.99", "effectiveDate": "2017-01-31T12:12:12Z", "currency": "EUR", "paymentType": "Domestic Payments", "state": "NEW" }, "matchedLimits": 1, "consumption": [{ "limitId": "4563-3474-34553-24556", "limitCcy": "EUR", "consumedAmount": "599.99", "consumedOn": "2017-01-31T12:12:12Z", "state": "CONSUMED" }], "checkTime": "2017-01-31T12:12:12Z", "breachReport": [{ "limitedEntity": [{ "ref": "1234567-12312-123123", "type": "Service Agreement", "description": "Kuhic, Gislason and Kemmer. SERVICE AGREEMENT" }], "shadow": false, "currency": "EUR", "user-BBID": "oleksii", "breachInfo": [{ "breachType": "THRESHOLD", "breachedLimitType": "PERIODIC", "timeframe": { "period": "daily", "startTime": "2017-01-31T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "250.0", "currentThreshold": "499.9" }, { "breachType": "CONSUMPTION", "breachedLimitType": "PERIODIC", "timeframe": { "period": "monthly", "startTime": "2017-01-01T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "9950.0", "currentThreshold": "10000.0" }] }, { "user-BBID": "oleksii", "shadow": false, "currency": "EUR", "breachInfo": [{ "breachType": "CONSUMPTION", "breachedLimitType": "PERIODIC", "timeframe": { "period": "daily", "startTime": "2017-01-31T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "500.0", "currentThreshold": "1000.0" }] }, { "limitedEntity": [{ "ref": "1234567-12312-123123", "type": "Function Access Group", "description": "Payments approvers" }, { "ref": "1234567-12312-123123", "type": "Function", "description": "Domestic payments" }, { "ref": "Approve", "type": "Privilege", "description": "Approve" }], "shadow": false, "currency": "EUR", "breachInfo": [{ "breachType": "THRESHOLD", "breachedLimitType": "PERIODIC", "timeframe": { "period": "daily", "startTime": "2017-01-31T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "250.0", "currentThreshold": "499.9" }] }, { "limitedEntity": [{ "ref": "1234567-12312-123123", "type": "Legal Entity", "description": "Kuhic, Gislason and Kemmer" }], "shadow": false, "currency": "EUR", "breachInfo": [{ "breachType": "CONSUMPTION", "breachedLimitType": "PERIODIC", "timeframe": { "period": "quarterly", "startTime": "2017-01-01T00:00:00Z", "endTime": "2017-03-31T23:59:59Z" }, "currentConsumption": "99950.0", "currentThreshold": "100000.0" }, { "breachType": "THRESHOLD", "breachedLimitType": "TRANSACTIONAL", "currentThreshold": "499.9" }] }] }] }, { "status": 404, "data": { "message": "Resource not found.", "errors": [{ "message": "Unable to find the resource requested resource: {resource}.", "key": "common.api.resource", "context": { "resource": "aResource" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      getLimitsCurrency: [{ "status": 200, "data": { "defaultCurrency": "EUR", "allowedCurrencyList": ["EUR", "USD", "AED"] } }, { "status": 403, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to an insufficient user quota of {quota}.", "key": "common.api.quota", "context": { "quota": "someQuota" } }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      deleteLimitsPeriodicRecord: [{ "status": 200, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "50", "min": "1" } }] } }, { "status": 403, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to an insufficient user quota of {quota}.", "key": "common.api.quota", "context": { "quota": "someQuota" } }] } }, { "status": 404, "data": { "message": "Resource not found.", "errors": [{ "message": "Unable to find the resource requested resource: {resource}.", "key": "common.api.resource", "context": { "resource": "aResource" } }] } }, { "status": 422, "data": null }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      postLimitsPeriodicPeriodicCheckRecord: [{ "status": 200, "data": { "payment": { "refNo": "4563-3474-34553-24556", "user-BBID": "550e8400-e29b-41d4-a716-446655440000", "amount": "599.99", "effectiveDate": "2017-01-31T12:12:12Z", "currency": "EUR", "paymentType": "Domestic Payments", "state": "NEW" }, "matchedLimits": 1, "consumption": [{ "limitId": "4563-3474-34553-24556", "limitCcy": "EUR", "consumedAmount": "599.99", "consumedOn": "2017-01-31T12:12:12Z", "state": "CONSUMED" }], "checkTime": "2017-01-31T12:12:12Z", "breachReport": [{ "limitedEntity": [{ "ref": "1234567-12312-123123", "type": "Service Agreement", "description": "Kuhic, Gislason and Kemmer. SERVICE AGREEMENT" }], "shadow": false, "currency": "EUR", "user-BBID": "oleksii", "breachInfo": [{ "breachType": "THRESHOLD", "breachedLimitType": "PERIODIC", "timeframe": { "period": "daily", "startTime": "2017-01-31T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "250.0", "currentThreshold": "499.9" }, { "breachType": "CONSUMPTION", "breachedLimitType": "PERIODIC", "timeframe": { "period": "monthly", "startTime": "2017-01-01T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "9950.0", "currentThreshold": "10000.0" }] }, { "user-BBID": "oleksii", "shadow": false, "currency": "EUR", "breachInfo": [{ "breachType": "CONSUMPTION", "breachedLimitType": "PERIODIC", "timeframe": { "period": "daily", "startTime": "2017-01-31T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "500.0", "currentThreshold": "1000.0" }] }, { "limitedEntity": [{ "ref": "1234567-12312-123123", "type": "Function Access Group", "description": "Payments approvers" }, { "ref": "1234567-12312-123123", "type": "Function", "description": "Domestic payments" }, { "ref": "Approve", "type": "Privilege", "description": "Approve" }], "shadow": false, "currency": "EUR", "breachInfo": [{ "breachType": "THRESHOLD", "breachedLimitType": "PERIODIC", "timeframe": { "period": "daily", "startTime": "2017-01-31T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "250.0", "currentThreshold": "499.9" }] }, { "limitedEntity": [{ "ref": "1234567-12312-123123", "type": "Legal Entity", "description": "Kuhic, Gislason and Kemmer" }], "shadow": false, "currency": "EUR", "breachInfo": [{ "breachType": "CONSUMPTION", "breachedLimitType": "PERIODIC", "timeframe": { "period": "quarterly", "startTime": "2017-01-01T00:00:00Z", "endTime": "2017-03-31T23:59:59Z" }, "currentConsumption": "99950.0", "currentThreshold": "100000.0" }, { "breachType": "THRESHOLD", "breachedLimitType": "TRANSACTIONAL", "currentThreshold": "499.9" }] }] } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "50", "min": "1" } }] } }, { "status": 403, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to an insufficient user quota of {quota}.", "key": "common.api.quota", "context": { "quota": "someQuota" } }] } }, { "status": 422, "data": null }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      postLimitsPeriodicSoftCheckRecord: [{ "status": 200, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "50", "min": "1" } }] } }, { "status": 403, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to an insufficient user quota of {quota}.", "key": "common.api.quota", "context": { "quota": "someQuota" } }] } }, { "status": 422, "data": null }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      deleteLimitsTransactionalRecord: [{ "status": 200, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "50", "min": "1" } }] } }, { "status": 403, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to an insufficient user quota of {quota}.", "key": "common.api.quota", "context": { "quota": "someQuota" } }] } }, { "status": 404, "data": { "message": "Resource not found.", "errors": [{ "message": "Unable to find the resource requested resource: {resource}.", "key": "common.api.resource", "context": { "resource": "aResource" } }] } }, { "status": 422, "data": null }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      postLimitsTransactionalTransactionalCheckRecord: [{ "status": 200, "data": { "payment": { "refNo": "4563-3474-34553-24556", "user-BBID": "550e8400-e29b-41d4-a716-446655440000", "amount": "599.99", "effectiveDate": "2017-01-31T12:12:12Z", "currency": "EUR", "paymentType": "Domestic Payments", "state": "NEW" }, "matchedLimits": 1, "consumption": [{ "limitId": "4563-3474-34553-24556", "limitCcy": "EUR", "consumedAmount": "599.99", "consumedOn": "2017-01-31T12:12:12Z", "state": "CONSUMED" }], "checkTime": "2017-01-31T12:12:12Z", "breachReport": [{ "limitedEntity": [{ "ref": "1234567-12312-123123", "type": "Service Agreement", "description": "Kuhic, Gislason and Kemmer. SERVICE AGREEMENT" }], "shadow": false, "currency": "EUR", "user-BBID": "oleksii", "breachInfo": [{ "breachType": "THRESHOLD", "breachedLimitType": "PERIODIC", "timeframe": { "period": "daily", "startTime": "2017-01-31T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "250.0", "currentThreshold": "499.9" }, { "breachType": "CONSUMPTION", "breachedLimitType": "PERIODIC", "timeframe": { "period": "monthly", "startTime": "2017-01-01T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "9950.0", "currentThreshold": "10000.0" }] }, { "user-BBID": "oleksii", "shadow": false, "currency": "EUR", "breachInfo": [{ "breachType": "CONSUMPTION", "breachedLimitType": "PERIODIC", "timeframe": { "period": "daily", "startTime": "2017-01-31T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "500.0", "currentThreshold": "1000.0" }] }, { "limitedEntity": [{ "ref": "1234567-12312-123123", "type": "Function Access Group", "description": "Payments approvers" }, { "ref": "1234567-12312-123123", "type": "Function", "description": "Domestic payments" }, { "ref": "Approve", "type": "Privilege", "description": "Approve" }], "shadow": false, "currency": "EUR", "breachInfo": [{ "breachType": "THRESHOLD", "breachedLimitType": "PERIODIC", "timeframe": { "period": "daily", "startTime": "2017-01-31T00:00:00Z", "endTime": "2017-01-31T23:59:59Z" }, "currentConsumption": "250.0", "currentThreshold": "499.9" }] }, { "limitedEntity": [{ "ref": "1234567-12312-123123", "type": "Legal Entity", "description": "Kuhic, Gislason and Kemmer" }], "shadow": false, "currency": "EUR", "breachInfo": [{ "breachType": "CONSUMPTION", "breachedLimitType": "PERIODIC", "timeframe": { "period": "quarterly", "startTime": "2017-01-01T00:00:00Z", "endTime": "2017-03-31T23:59:59Z" }, "currentConsumption": "99950.0", "currentThreshold": "100000.0" }, { "breachType": "THRESHOLD", "breachedLimitType": "TRANSACTIONAL", "currentThreshold": "499.9" }] }] } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "50", "min": "1" } }] } }, { "status": 403, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to an insufficient user quota of {quota}.", "key": "common.api.quota", "context": { "quota": "someQuota" } }] } }, { "status": 422, "data": null }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      postLimitsTransactionalSoftCheckRecord: [{ "status": 200, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "50", "min": "1" } }] } }, { "status": 403, "data": { "message": "Access to requested resource denied.", "errors": [{ "message": "Resource access denied due to an insufficient user quota of {quota}.", "key": "common.api.quota", "context": { "quota": "someQuota" } }] } }, { "status": 422, "data": null }, { "status": 500, "data": { "message": "Description of error" } }]
	
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
	
	    var plugins = (_plugins = {}, _defineProperty(_plugins, PLUGINS_ALL, []), _defineProperty(_plugins, 'postLimitsPeriodicRecord', []), _defineProperty(_plugins, 'putLimitsPeriodicRecord', []), _defineProperty(_plugins, 'postLimitsTransactionalRecord', []), _defineProperty(_plugins, 'putLimitsTransactionalRecord', []), _defineProperty(_plugins, 'postLimitsCheckRecord', []), _defineProperty(_plugins, 'postLimitsRetrievalRecord', []), _defineProperty(_plugins, 'getLimitsLimitablePrivileges', []), _defineProperty(_plugins, 'getLimitsPeriods', []), _defineProperty(_plugins, 'postLimitsRollbackRecord', []), _defineProperty(_plugins, 'getLimitsBreachreport', []), _defineProperty(_plugins, 'getLimitsCurrency', []), _defineProperty(_plugins, 'deleteLimitsPeriodicRecord', []), _defineProperty(_plugins, 'postLimitsPeriodicPeriodicCheckRecord', []), _defineProperty(_plugins, 'postLimitsPeriodicSoftCheckRecord', []), _defineProperty(_plugins, 'deleteLimitsTransactionalRecord', []), _defineProperty(_plugins, 'postLimitsTransactionalTransactionalCheckRecord', []), _defineProperty(_plugins, 'postLimitsTransactionalSoftCheckRecord', []), _plugins);
	
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
	
	    function postLimitsPeriodicRecord(data, headers) {
	      var url = '' + baseUri + version + '/limits/periodic';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postLimitsPeriodicRecord', 201)).then(pluginMocks('postLimitsPeriodicRecord', [data, headers], '{version}/limits/periodic')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postLimitsPeriodicRecord'));
	    }
	
	    function putLimitsPeriodicRecord(data, headers) {
	      var url = '' + baseUri + version + '/limits/periodic';
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putLimitsPeriodicRecord', 200)).then(pluginMocks('putLimitsPeriodicRecord', [data, headers], '{version}/limits/periodic')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putLimitsPeriodicRecord'));
	    }
	
	    function postLimitsTransactionalRecord(data, headers) {
	      var url = '' + baseUri + version + '/limits/transactional';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postLimitsTransactionalRecord', 201)).then(pluginMocks('postLimitsTransactionalRecord', [data, headers], '{version}/limits/transactional')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postLimitsTransactionalRecord'));
	    }
	
	    function putLimitsTransactionalRecord(data, headers) {
	      var url = '' + baseUri + version + '/limits/transactional';
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putLimitsTransactionalRecord', 200)).then(pluginMocks('putLimitsTransactionalRecord', [data, headers], '{version}/limits/transactional')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putLimitsTransactionalRecord'));
	    }
	
	    function postLimitsCheckRecord(data, headers) {
	      var url = '' + baseUri + version + '/limits/check';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postLimitsCheckRecord', 200)).then(pluginMocks('postLimitsCheckRecord', [data, headers], '{version}/limits/check')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postLimitsCheckRecord'));
	    }
	
	    function postLimitsRetrievalRecord(data, headers) {
	      var url = '' + baseUri + version + '/limits/retrieval';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postLimitsRetrievalRecord', 200)).then(pluginMocks('postLimitsRetrievalRecord', [data, headers], '{version}/limits/retrieval')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postLimitsRetrievalRecord'));
	    }
	
	    function getLimitsLimitablePrivileges(params, headers) {
	      var url = '' + baseUri + version + '/limits/limitablePrivileges';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getLimitsLimitablePrivileges', 200)).then(pluginMocks('getLimitsLimitablePrivileges', [params, headers], '{version}/limits/limitablePrivileges')).catch(handleError('getLimitsLimitablePrivileges'));
	    }
	
	    function getLimitsPeriods(params, headers) {
	      var url = '' + baseUri + version + '/limits/periods';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getLimitsPeriods', 200)).then(pluginMocks('getLimitsPeriods', [params, headers], '{version}/limits/periods')).catch(handleError('getLimitsPeriods'));
	    }
	
	    function postLimitsRollbackRecord(data, headers) {
	      var url = '' + baseUri + version + '/limits/rollback';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postLimitsRollbackRecord', 200)).then(pluginMocks('postLimitsRollbackRecord', [data, headers], '{version}/limits/rollback')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postLimitsRollbackRecord'));
	    }
	
	    function getLimitsBreachreport(paymentRef, params, headers) {
	      var url = '' + baseUri + version + '/limits/' + paymentRef + '/breachreport';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getLimitsBreachreport', 200)).then(pluginMocks('getLimitsBreachreport', [paymentRef, params, headers], '{version}/limits/{paymentRef}/breachreport')).catch(handleError('getLimitsBreachreport'));
	    }
	
	    function getLimitsCurrency(params, headers) {
	      var url = '' + baseUri + version + '/limits/currency';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getLimitsCurrency', 200)).then(pluginMocks('getLimitsCurrency', [params, headers], '{version}/limits/currency')).catch(handleError('getLimitsCurrency'));
	    }
	
	    function deleteLimitsPeriodicRecord(uuid, params, headers) {
	      var url = '' + baseUri + version + '/limits/periodic/' + uuid;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deleteLimitsPeriodicRecord', 200)).then(pluginMocks('deleteLimitsPeriodicRecord', [uuid, params, headers], '{version}/limits/periodic/{uuid}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deleteLimitsPeriodicRecord'));
	    }
	
	    function postLimitsPeriodicPeriodicCheckRecord(data, headers) {
	      var url = '' + baseUri + version + '/limits/periodic/periodic-check';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postLimitsPeriodicPeriodicCheckRecord', 200)).then(pluginMocks('postLimitsPeriodicPeriodicCheckRecord', [data, headers], '{version}/limits/periodic/periodic-check')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postLimitsPeriodicPeriodicCheckRecord'));
	    }
	
	    function postLimitsPeriodicSoftCheckRecord(data, headers) {
	      var url = '' + baseUri + version + '/limits/periodic/soft-check';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postLimitsPeriodicSoftCheckRecord', 200)).then(pluginMocks('postLimitsPeriodicSoftCheckRecord', [data, headers], '{version}/limits/periodic/soft-check')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postLimitsPeriodicSoftCheckRecord'));
	    }
	
	    function deleteLimitsTransactionalRecord(uuid, params, headers) {
	      var url = '' + baseUri + version + '/limits/transactional/' + uuid;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deleteLimitsTransactionalRecord', 200)).then(pluginMocks('deleteLimitsTransactionalRecord', [uuid, params, headers], '{version}/limits/transactional/{uuid}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deleteLimitsTransactionalRecord'));
	    }
	
	    function postLimitsTransactionalTransactionalCheckRecord(data, headers) {
	      var url = '' + baseUri + version + '/limits/transactional/transactional-check';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postLimitsTransactionalTransactionalCheckRecord', 200)).then(pluginMocks('postLimitsTransactionalTransactionalCheckRecord', [data, headers], '{version}/limits/transactional/transactional-check')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postLimitsTransactionalTransactionalCheckRecord'));
	    }
	
	    function postLimitsTransactionalSoftCheckRecord(data, headers) {
	      var url = '' + baseUri + version + '/limits/transactional/soft-check';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postLimitsTransactionalSoftCheckRecord', 200)).then(pluginMocks('postLimitsTransactionalSoftCheckRecord', [data, headers], '{version}/limits/transactional/soft-check')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postLimitsTransactionalSoftCheckRecord'));
	    }
	
	    schemas.postLimitsPeriodicRecord = { "properties": {} };
	
	    schemas.putLimitsPeriodicRecord = { "properties": { "uuid": { "type": "string", "required": true }, "periodic-limits-bounds": { "type": "object", "properties": { "daily": { "type": "string", "maximum": 1000000000000000000, "required": false }, "weekly": { "type": "string", "maximum": 1000000000000000000, "required": false }, "monthly": { "type": "string", "maximum": 1000000000000000000, "required": false }, "quarterly": { "type": "string", "maximum": 1000000000000000000, "required": false }, "yearly": { "type": "string", "maximum": 1000000000000000000, "required": false }, "customPeriods": { "type": "array", "items": { "properties": { "period": { "type": "string", "required": true }, "amount": { "type": "string", "maximum": 1000000000000000000, "required": true } } }, "required": false } }, "required": true } } };
	
	    schemas.postLimitsTransactionalRecord = { "properties": {} };
	
	    schemas.putLimitsTransactionalRecord = { "properties": { "uuid": { "type": "string", "required": true }, "transactional-limits-bound": { "type": "object", "properties": { "amount": { "type": "string", "maximum": 1000000000000000000, "required": false } }, "required": true } } };
	
	    schemas.postLimitsCheckRecord = { "properties": {} };
	
	    schemas.postLimitsRetrievalRecord = { "properties": { "limitsRetrievalOptions": { "type": "array", "items": { "properties": { "user-BBID": { "type": "string", "required": false }, "shadow": { "type": "boolean", "default": false, "required": false }, "lookupKeys": { "type": "array", "items": { "properties": { "eref": { "type": "string", "maxLength": 40, "required": true }, "etype": { "type": "string", "minLength": 2, "maxLength": 16, "required": true } } }, "required": false } } }, "required": true } } };
	
	    schemas.postLimitsRollbackRecord = { "properties": { "paymentRef": { "type": "string", "required": true } } };
	
	    schemas.postLimitsPeriodicPeriodicCheckRecord = { "properties": {} };
	
	    schemas.postLimitsPeriodicSoftCheckRecord = { "properties": {} };
	
	    schemas.postLimitsTransactionalTransactionalCheckRecord = { "properties": {} };
	
	    schemas.postLimitsTransactionalSoftCheckRecord = { "properties": {} };
	
	    return {
	
	      postLimitsPeriodicRecord: postLimitsPeriodicRecord,
	
	      putLimitsPeriodicRecord: putLimitsPeriodicRecord,
	
	      postLimitsTransactionalRecord: postLimitsTransactionalRecord,
	
	      putLimitsTransactionalRecord: putLimitsTransactionalRecord,
	
	      postLimitsCheckRecord: postLimitsCheckRecord,
	
	      postLimitsRetrievalRecord: postLimitsRetrievalRecord,
	
	      getLimitsLimitablePrivileges: getLimitsLimitablePrivileges,
	
	      getLimitsPeriods: getLimitsPeriods,
	
	      postLimitsRollbackRecord: postLimitsRollbackRecord,
	
	      getLimitsBreachreport: getLimitsBreachreport,
	
	      getLimitsCurrency: getLimitsCurrency,
	
	      deleteLimitsPeriodicRecord: deleteLimitsPeriodicRecord,
	
	      postLimitsPeriodicPeriodicCheckRecord: postLimitsPeriodicPeriodicCheckRecord,
	
	      postLimitsPeriodicSoftCheckRecord: postLimitsPeriodicSoftCheckRecord,
	
	      deleteLimitsTransactionalRecord: deleteLimitsTransactionalRecord,
	
	      postLimitsTransactionalTransactionalCheckRecord: postLimitsTransactionalTransactionalCheckRecord,
	
	      postLimitsTransactionalSoftCheckRecord: postLimitsTransactionalSoftCheckRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=mock.data-bb-limits-http-ng.js.map