(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else if(typeof define === 'function' && define.amd)
		define("mock.data-bb-audit-http-ng", ["vendor-bb-angular", "lib-bb-storage-ng"], factory);
	else if(typeof exports === 'object')
		exports["mock.data-bb-audit-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else
		root["mock.data-bb-audit-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage-ng"]);
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
	exports.auditDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStorageNg = __webpack_require__(3);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _dataBbAuditHttp = __webpack_require__(4);
	
	var _dataBbAuditHttp2 = _interopRequireDefault(_dataBbAuditHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var auditDataModuleKey = 'data-bb-audit-http-ng'; /* eslint-disable */
	var auditDataKey = exports.auditDataKey = 'data-bb-audit-http-ng:auditData';
	
	exports.default = _vendorBbAngular2.default.module(auditDataModuleKey, [_libBbStorageNg2.default]).provider(auditDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  return {
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	    $get: ['$q', _libBbStorageNg.bbStorageServiceKey, '$httpParamSerializer',
	    /* into */
	    (0, _dataBbAuditHttp2.default)(config)]
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
	
	    var STORAGE_KEY = 'MOCK_STATE_auditDataModuleKey';
	    var state = {};
	
	    bbStorage.subscribe(STORAGE_KEY, function (newState) {
	      state = newState;
	    });
	
	    var persistState = function persistState(newState) {
	      bbStorage.setItem(STORAGE_KEY, newState);
	    };
	
	    var responses = {
	
	      postAuditMessagesRecord: [{ "status": 201, "data": { "status": 201, "message": "Accepted with warnings", "warnings": [{ "path": "description", "code": "101", "message": "Truncated" }, { "path": "eventCategory", "code": "101", "message": "Truncated" }] } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 403, "data": { "status": 403, "message": "Access denied" } }, { "status": 405, "data": { "status": 405, "message": "Method not allowed : GET" } }, { "status": 500, "data": { "message": "Description of error" } }, { "status": 501, "data": { "status": 501, "message": "Operation not supported" } }],
	
	      getAuditLogMessages: [{ "status": 200, "data": { "auditMessages": [{ "eventCategory": "Authentication", "objectType": "Login", "eventAction": "Success", "username": "TBarnet", "userId": "TBA12051978", "messageSetId": "messageSetId - Query Dates - SDD -50", "timestamp": "2017-09-04T06:35:41.117Z", "eventDescription": "User logged in successfully", "legalEntityId": "LE-111111111111111111-SDD-9999999950", "serviceAgreementId": "SE-SDD-10000000000000-Service-999950", "eventData": [{ "key": "reason", "value": "OTC" }, { "key": "ipAddress", "value": "90.192.221.10" }, { "key": "userAgent", "value": "Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko" }] }, { "eventCategory": "Payment", "objectType": "Standing order", "eventAction": "Fully Authorised", "username": "JSmart", "userId": "JSM12051978", "messageSetId": "messageSetId - Query Dates - SDD -49", "timestamp": "2017-09-03T07:44:57.896Z", "eventDescription": "Standing order was fully authorised", "legalEntityId": "LE-111111111111111111-SDD-9999999951", "serviceAgreementId": "SE-SDD-10000000000000-Service-999951", "eventData": [{ "key": "First Key for Audit Message49", "value": "OTC" }] }, { "eventCategory": "Payment", "objectType": "Standing order", "eventAction": "Part Authorised", "username": "JPetersen", "userId": "JPE12051978", "messageSetId": "messageSetId - Query Dates - SDD -48", "timestamp": "2017-09-02T07:52:42.023Z", "eventDescription": "Standing order was part authorised", "legalEntityId": "LE-111111111111111111-SDD-9999999952", "serviceAgreementId": "SE-SDD-10000000000000-Service-999952", "eventData": [{ "key": "First Key for Audit Message48", "value": "OTC" }] }, { "eventCategory": "Payment", "objectType": "Standing order", "eventAction": "Deleted", "username": "PPoe", "userId": "PPO12051978", "messageSetId": "messageSetId - Query Dates - SDD -47", "timestamp": "2017-09-01T08:48:45.856Z", "eventDescription": "Standing order was deleted", "legalEntityId": "LE-111111111111111111-SDD-9999999953", "serviceAgreementId": "SE-SDD-10000000000000-Service-999953", "eventData": [{ "key": "First Key for Audit Message47", "value": "OTC" }] }, { "eventCategory": "Payment", "objectType": "Standing order", "eventAction": "Updated", "username": "JGate", "userId": "JGA12051978", "messageSetId": "messageSetId - Query Dates - SDD -46", "timestamp": "2017-08-31T08:02:56.109Z", "eventDescription": "Standing order was updated", "legalEntityId": "LE-111111111111111111-SDD-9999999954", "serviceAgreementId": "SE-SDD-10000000000000-Service-999954", "eventData": [{ "key": "First Key for Audit Message46", "value": "OTC" }] }, { "eventCategory": "Payment", "objectType": "Standing order", "eventAction": "Created", "username": "ZAvery", "userId": "ZAV12051978", "messageSetId": "messageSetId - Query Dates - SDD -45", "timestamp": "2017-08-30T06:06:03.195Z", "eventDescription": "Standing order was created", "legalEntityId": "LE-111111111111111111-SDD-9999999955", "serviceAgreementId": "SE-SDD-10000000000000-Service-999955", "eventData": [{ "key": "First Key for Audit Message45", "value": "OTC" }] }, { "eventCategory": "Payment", "objectType": "Direct Debit", "eventAction": "Fully Authorised", "username": "AWright", "userId": "AWR12051978", "messageSetId": "messageSetId - Query Dates - SDD -44", "timestamp": "2017-08-29T06:21:54.380Z", "eventDescription": "Direct debit payment was fully authorised", "legalEntityId": "LE-111111111111111111-SDD-9999999956", "serviceAgreementId": "SE-SDD-10000000000000-Service-999956", "eventData": [{ "key": "First Key for Audit Message44", "value": "OTC" }] }, { "eventCategory": "Payment", "objectType": "Direct Debit", "eventAction": "Part Authorised", "username": "RJones", "userId": "RJO12051978", "messageSetId": "messageSetId - Query Dates - SDD -43", "timestamp": "2017-08-28T08:04:56.433Z", "eventDescription": "Direct debit was part authorised", "legalEntityId": "LE-111111111111111111-SDD-9999999957", "serviceAgreementId": "SE-SDD-10000000000000-Service-999957", "eventData": [{ "key": "First Key for Audit Message43", "value": "OTC" }] }, { "eventCategory": "Payment", "objectType": "Direct Debit", "eventAction": "Deleted", "username": "JSmart", "userId": "JSM12051978", "messageSetId": "messageSetId - Query Dates - SDD -42", "timestamp": "2017-08-27T06:33:44.154Z", "eventDescription": "Direct debit was deleted", "legalEntityId": "LE-111111111111111111-SDD-9999999958", "serviceAgreementId": "SE-SDD-10000000000000-Service-999958", "eventData": [{ "key": "First Key for Audit Message42", "value": "OTC" }] }, { "eventCategory": "Payment", "objectType": "Direct Debit", "eventAction": "Updated", "username": "KNeil", "userId": "KNE12051978", "messageSetId": "messageSetId - Query Dates - SDD -41", "timestamp": "2017-08-26T08:56:56.662Z", "eventDescription": "Direct debit information was updated", "legalEntityId": "LE-111111111111111111-SDD-9999999959", "serviceAgreementId": "SE-SDD-10000000000000-Service-999959", "eventData": [{ "key": "First Key for Audit Message41", "value": "OTC" }] }, { "eventCategory": "Payment", "objectType": "Direct Debit", "eventAction": "Created", "username": "LParr", "userId": "LPA12051978", "messageSetId": "messageSetId - Query Dates - SDD -40", "timestamp": "2017-08-25T08:26:30.254Z", "eventDescription": "Direct debit was created", "legalEntityId": "LE-111111111111111111-SDD-9999999960", "serviceAgreementId": "SE-SDD-10000000000000-Service-999960", "eventData": [{ "key": "First Key for Audit Message40", "value": "OTC" }] }, { "eventCategory": "Payment", "objectType": "Payment", "eventAction": "Fully Authorised", "username": "JSmart", "userId": "JSM12051978", "messageSetId": "messageSetId - Query Dates - SDD -39", "timestamp": "2017-08-24T08:54:56.483Z", "eventDescription": "Payment was fully authorised", "legalEntityId": "LE-111111111111111111-SDD-9999999961", "serviceAgreementId": "SE-SDD-10000000000000-Service-999961", "eventData": [{ "key": "First Key for Audit Message39", "value": "OTC" }] }, { "eventCategory": "Payment", "objectType": "Payment", "eventAction": "Part Authorised", "username": "KNeil", "userId": "KNE12051978", "messageSetId": "messageSetId - Query Dates - SDD -38", "timestamp": "2017-08-23T06:52:50.045Z", "eventDescription": "This is record 13", "legalEntityId": "LE-111111111111111111-SDD-9999999962", "serviceAgreementId": "SE-SDD-10000000000000-Service-999962", "eventData": [{ "key": "First Key for Audit Message38", "value": "OTC" }] }, { "eventCategory": "Payment", "objectType": "Payment", "eventAction": "Deleted", "username": "KNeil", "userId": "KNE12051978", "messageSetId": "messageSetId - Query Dates - SDD -37", "timestamp": "2017-08-22T08:29:16.214Z", "eventDescription": "Payment was deleted", "legalEntityId": "LE-111111111111111111-SDD-9999999963", "serviceAgreementId": "SE-SDD-10000000000000-Service-999963", "eventData": [{ "key": "First Key for Audit Message37", "value": "OTC" }] }, { "eventCategory": "Payment", "objectType": "Payment", "eventAction": "Updated", "username": "LParr", "userId": "LPA12051978", "messageSetId": "messageSetId - Query Dates - SDD -36", "timestamp": "2017-08-21T06:00:50.946Z", "eventDescription": "Payment was updated", "legalEntityId": "LE-111111111111111111-SDD-9999999964", "serviceAgreementId": "SE-SDD-10000000000000-Service-999964", "eventData": [{ "key": "First Key for Audit Message36", "value": "OTC" }] }, { "eventCategory": "Payment", "objectType": "Payment", "eventAction": "Created", "username": "JSmart", "userId": "JSM12051978", "messageSetId": "messageSetId - Query Dates - SDD -35", "timestamp": "2017-08-20T06:33:45.261Z", "eventDescription": "Payment was created", "legalEntityId": "LE-111111111111111111-SDD-9999999965", "serviceAgreementId": "SE-SDD-10000000000000-Service-999965", "eventData": [{ "key": "First Key for Audit Message35", "value": "OTC" }] }, { "eventCategory": "User Entitlement", "objectType": "Ingestion", "eventAction": "Initial Admin Ingested", "username": "ZAvery", "userId": "ZAV12051978", "messageSetId": "messageSetId - Query Dates - SDD -34", "timestamp": "2017-08-19T08:57:22.604Z", "eventDescription": "Initial Admin was ingested by user entitlements", "legalEntityId": "LE-111111111111111111-SDD-9999999966", "serviceAgreementId": "SE-SDD-10000000000000-Service-999966", "eventData": [{ "key": "First Key for Audit Message34", "value": "OTC" }] }, { "eventCategory": "User Entitlement", "objectType": "Ingestion", "eventAction": "Legal Entity Ingested", "username": "TBarnet", "userId": "TBA12051978", "messageSetId": "messageSetId - Query Dates - SDD -33", "timestamp": "2017-08-18T06:14:12.718Z", "eventDescription": "Legal Entity was ingested by user entitlements", "legalEntityId": "LE-111111111111111111-SDD-9999999967", "serviceAgreementId": "SE-SDD-10000000000000-Service-999967", "eventData": [{ "key": "First Key for Audit Message33", "value": "OTC" }] }, { "eventCategory": "User Entitlement", "objectType": "Ingestion", "eventAction": "User Ingested", "username": "AWright", "userId": "AWR12051978", "messageSetId": "messageSetId - Query Dates - SDD -32", "timestamp": "2017-08-17T07:23:38.616Z", "eventDescription": "User was ingested by user entitlements", "legalEntityId": "LE-111111111111111111-SDD-9999999968", "serviceAgreementId": "SE-SDD-10000000000000-Service-999968", "eventData": [{ "key": "First Key for Audit Message32", "value": "OTC" }] }, { "eventCategory": "User Entitlement", "objectType": "Service Agreement", "eventAction": "Permission Assigned", "username": "LParr", "userId": "LPA12051978", "messageSetId": "messageSetId - Query Dates - SDD -31", "timestamp": "2017-08-16T07:58:56.350Z", "eventDescription": "Permission was assigned to the service agreement", "legalEntityId": "LE-111111111111111111-SDD-9999999969", "serviceAgreementId": "SE-SDD-10000000000000-Service-999969", "eventData": [{ "key": "First Key for Audit Message31", "value": "OTC" }] }, { "eventCategory": "User Entitlement", "objectType": "Service Agreement", "eventAction": "User Removed", "username": "LParr", "userId": "LPA12051978", "messageSetId": "messageSetId - Query Dates - SDD -30", "timestamp": "2017-08-15T08:29:09.353Z", "eventDescription": "User was removed from the service agreement", "legalEntityId": "LE-111111111111111111-SDD-9999999970", "serviceAgreementId": "SE-SDD-10000000000000-Service-999970", "eventData": [{ "key": "First Key for Audit Message30", "value": "OTC" }] }, { "eventCategory": "User Entitlement", "objectType": "Service Agreement", "eventAction": "User Assigned", "username": "PPoe", "userId": "PPO12051978", "messageSetId": "messageSetId - Query Dates - SDD -29", "timestamp": "2017-08-14T06:22:41.488Z", "eventDescription": "User was assigned to the service agreement", "legalEntityId": "LE-111111111111111111-SDD-9999999971", "serviceAgreementId": "SE-SDD-10000000000000-Service-999971", "eventData": [{ "key": "First Key for Audit Message29", "value": "OTC" }] }, { "eventCategory": "User Entitlement", "objectType": "Service Agreement", "eventAction": "Pairs removed", "username": "KNeil", "userId": "KNE12051978", "messageSetId": "messageSetId - Query Dates - SDD -28", "timestamp": "2017-08-13T07:50:48.716Z", "eventDescription": "Pairs were removed from the service agreement", "legalEntityId": "LE-111111111111111111-SDD-9999999972", "serviceAgreementId": "SE-SDD-10000000000000-Service-999972", "eventData": [{ "key": "First Key for Audit Message28", "value": "OTC" }] }, { "eventCategory": "User Entitlement", "objectType": "Service Agreement", "eventAction": "Pairs Assigned", "username": "RJones", "userId": "RJO12051978", "messageSetId": "messageSetId - Query Dates - SDD -27", "timestamp": "2017-08-12T06:37:47.491Z", "eventDescription": "Pairs were assigned to the service agreement", "legalEntityId": "LE-111111111111111111-SDD-9999999973", "serviceAgreementId": "SE-SDD-10000000000000-Service-999973", "eventData": [{ "key": "First Key for Audit Message27", "value": "OTC" }] }, { "eventCategory": "User Entitlement", "objectType": "Service Agreement", "eventAction": "removed", "username": "JGate", "userId": "JGA12051978", "messageSetId": "messageSetId - Query Dates - SDD -26", "timestamp": "2017-08-11T08:18:50.828Z", "eventDescription": "Service agreement was removed", "legalEntityId": "LE-111111111111111111-SDD-9999999974", "serviceAgreementId": "SE-SDD-10000000000000-Service-999974", "eventData": [{ "key": "First Key for Audit Message26", "value": "OTC" }] }, { "eventCategory": "User Entitlement", "objectType": "Service Agreement", "eventAction": "Updated", "username": "RJones", "userId": "RJO12051978", "messageSetId": "messageSetId - Query Dates - SDD -25", "timestamp": "2017-08-10T06:54:01.985Z", "eventDescription": "Service agreement was updated", "legalEntityId": "LE-111111111111111111-SDD-9999999975", "serviceAgreementId": "SE-SDD-10000000000000-Service-999975", "eventData": [{ "key": "First Key for Audit Message25", "value": "OTC" }] }, { "eventCategory": "User Entitlement", "objectType": "Service Agreement", "eventAction": "Added", "username": "LParr", "userId": "LPA12051978", "messageSetId": "messageSetId - Query Dates - SDD -24", "timestamp": "2017-08-09T07:49:40.964Z", "eventDescription": "Service agreement was added", "legalEntityId": "LE-1111111111111111111-SDD-999999976", "serviceAgreementId": "SE-SDD-10000000000000-Service-999976", "eventData": [{ "key": "First Key for Audit Message24", "value": "OTC" }] }, { "eventCategory": "User Entitlement", "objectType": "Permissions", "eventAction": "Date Group Removed", "username": "TBarnet", "userId": "TBA12051978", "messageSetId": "messageSetId - Query Dates - SDD -23", "timestamp": "2017-08-08T07:34:51.154Z", "eventDescription": "Data group was removed from permissions", "legalEntityId": "LE-111111111111111111-SDD-9999999977", "serviceAgreementId": "SE-SDD-10000000000000-Service-999977", "eventData": [{ "key": "First Key for Audit Message23", "value": "OTC" }] }, { "eventCategory": "User Entitlement", "objectType": "Permissions", "eventAction": "Data Group Assigned", "username": "LParr", "userId": "LPA12051978", "messageSetId": "messageSetId - Query Dates - SDD -22", "timestamp": "2017-08-07T06:57:18.169Z", "eventDescription": "Data group was assigned new permissions", "legalEntityId": "LE-111111111111111111-SDD-9999999978", "serviceAgreementId": "SE-SDD-10000000000000-Service-999978", "eventData": [{ "key": "First Key for Audit Message22", "value": "OTC" }] }, { "eventCategory": "User Entitlement", "objectType": "Permissions", "eventAction": "Removed from Data Group", "username": "AWright", "userId": "AWR12051978", "messageSetId": "messageSetId - Query Dates - SDD -21", "timestamp": "2017-08-06T06:33:33.044Z", "eventDescription": "Permissions were removed from the data group", "legalEntityId": "LE-111111111111111111-SDD-9999999979", "serviceAgreementId": "SE-SDD-10000000000000-Service-999979", "eventData": [{ "key": "First Key for Audit Message21", "value": "OTC" }] }, { "eventCategory": "User Entitlement", "objectType": "Permissions", "eventAction": "Assigned to Data Group", "username": "KNeil", "userId": "KNE12051978", "messageSetId": "messageSetId - Query Dates - SDD -20", "timestamp": "2017-08-05T08:32:00.726Z", "eventDescription": "Permissions were assigned to the data group", "legalEntityId": "LE-111111111111111111-SDD-9999999980", "serviceAgreementId": "SE-SDD-10000000000000-Service-999980", "eventData": [{ "key": "First Key for Audit Message20", "value": "OTC" }] }, { "eventCategory": "User Entitlement", "objectType": "Permissions", "eventAction": "Removed from Function Group", "username": "ZAvery", "userId": "ZAV12051978", "messageSetId": "messageSetId - Query Dates - SDD -19", "timestamp": "2017-08-04T06:38:51.765Z", "eventDescription": "Remissions were removed from the function group", "legalEntityId": "LE-111111111111111111-SDD-9999999981", "serviceAgreementId": "SE-SDD-10000000000000-Service-999981", "eventData": [{ "key": "First Key for Audit Message19", "value": "OTC" }] }, { "eventCategory": "User Entitlement", "objectType": "Permissions", "eventAction": "Assigned to Function Group", "username": "PPoe", "userId": "PPO12051978", "messageSetId": "messageSetId - Query Dates - SDD -18", "timestamp": "2017-08-03T08:59:22.220Z", "eventDescription": "Permissions were assigned to the function group", "legalEntityId": "LE-111111111111111111-SDD-9999999982", "serviceAgreementId": "SE-SDD-10000000000000-Service-999982", "eventData": [{ "key": "First Key for Audit Message18", "value": "OTC" }] }, { "eventCategory": "User Entitlement", "objectType": "Data Group", "eventAction": "Deleted", "username": "LParr", "userId": "LPA12051978", "messageSetId": "messageSetId - Query Dates - SDD -17", "timestamp": "2017-08-02T06:23:31.254Z", "eventDescription": "Data group was deleted", "legalEntityId": "LE-111111111111111111-SDD-9999999983", "serviceAgreementId": "SE-SDD-10000000000000-Service-999983", "eventData": [{ "key": "First Key for Audit Message17", "value": "OTC" }] }, { "eventCategory": "User Entitlement", "objectType": "Data Group", "eventAction": "Updated", "username": "KNeil", "userId": "KNE12051978", "messageSetId": "messageSetId - Query Dates - SDD -16", "timestamp": "2017-08-01T07:17:13.529Z", "eventDescription": "Data group was updated", "legalEntityId": "LE-111111111111111111-SDD-9999999984", "serviceAgreementId": "SE-SDD-10000000000000-Service-999984", "eventData": [{ "key": "First Key for Audit Message16", "value": "OTC" }] }, { "eventCategory": "User Entitlement", "objectType": "Data Group", "eventAction": "Added", "username": "LParr", "userId": "LPA12051978", "messageSetId": "messageSetId - Query Dates - SDD -15", "timestamp": "2017-07-31T06:38:11.980Z", "eventDescription": "Data group was added", "legalEntityId": "LE-111111111111111111-SDD-9999999985", "serviceAgreementId": "SE-SDD-10000000000000-Service-999985", "eventData": [{ "key": "First Key for Audit Message15", "value": "OTC" }] }, { "eventCategory": "User Entitlement", "objectType": "Function Group", "eventAction": "Deleted", "username": "PPoe", "userId": "PPO12051978", "messageSetId": "messageSetId - Query Dates - SDD -14", "timestamp": "2017-07-30T06:07:59.472Z", "eventDescription": "Function group was deleted", "legalEntityId": "LE-111111111111111111-SDD-9999999986", "serviceAgreementId": "SE-SDD-10000000000000-Service-999986", "eventData": [{ "key": "First Key for Audit Message14", "value": "OTC" }] }, { "eventCategory": "User Entitlement", "objectType": "Function Group", "eventAction": "Updated", "username": "AWright", "userId": "AWR12051978", "messageSetId": "messageSetId - Query Dates - SDD -13", "timestamp": "2017-07-29T08:32:52.773Z", "eventDescription": "Function Group was updated", "legalEntityId": "LE-111111111111111111-SDD-9999999987", "serviceAgreementId": "SE-SDD-10000000000000-Service-999987", "eventData": [{ "key": "First Key for Audit Message13", "value": "OTC" }] }, { "eventCategory": "User Entitlement", "objectType": "Function Group", "eventAction": "Added", "username": "TBarnet", "userId": "TBA12051978", "messageSetId": "messageSetId - Query Dates - SDD -12", "timestamp": "2017-07-28T07:12:58.798Z", "eventDescription": "Function group was added", "legalEntityId": "LE-111111111111111111-SDD-9999999988", "serviceAgreementId": "SE-SDD-10000000000000-Service-999988", "eventData": [{ "key": "First Key for Audit Message 12", "value": "OTC" }] }, { "eventCategory": "Contact", "objectType": "Contact", "eventAction": "Deleted", "username": "JGate", "userId": "JGA12051978", "messageSetId": "messageSetId - Query Dates - SDD -11", "timestamp": "2017-07-27T08:10:39.385Z", "eventDescription": "Contact was deleted", "legalEntityId": "LE-111111111111111111-SDD-9999999989", "serviceAgreementId": "SE-SDD-10000000000000-Service-999989", "eventData": [{ "key": "First Key for Audit Message 11", "value": "OTC" }] }, { "eventCategory": "Contact", "objectType": "Contact", "eventAction": "Updated", "username": "JPetersen", "userId": "JPE12051978", "messageSetId": "messageSetId - Query Dates - SDD -10", "timestamp": "2017-07-26T06:20:29.821Z", "eventDescription": "Contact was updated", "legalEntityId": "LE-111111111111111111-SDD-9999999990", "serviceAgreementId": "SE-SDD-10000000000000-Service-999990", "eventData": [{ "key": "First Key for Audit Message 10", "value": "OTC" }] }, { "eventCategory": "Contact", "objectType": "Contact", "eventAction": "Created", "username": "ZAvery", "userId": "ZAV12051978", "messageSetId": "messageSetId - Query Dates - SDD -09", "timestamp": "2017-07-25T06:28:44.186Z", "eventDescription": "Contact was created", "legalEntityId": "LE-111111111111111111-SDD-9999999991", "serviceAgreementId": "SE-SDD-10000000000000-Service-999991", "eventData": [{ "key": "First Key for Audit Message 9", "value": "OTC" }] }, { "eventCategory": "Contact", "objectType": "Contact", "eventAction": "Authorised", "username": "TBarnet", "userId": "TBA12051978", "messageSetId": "messageSetId - Query Dates - SDD -08", "timestamp": "2017-07-24T06:37:44.762Z", "eventDescription": "Contact was authorised", "legalEntityId": "LE-111111111111111111-SDD-9999999992", "serviceAgreementId": "SE-SDD-10000000000000-Service-999992", "eventData": [{ "key": "First Key for Audit Message 8", "value": "OTC" }] }, { "eventCategory": "Authentication", "objectType": "Account", "eventAction": "Revoked", "username": "RJones", "userId": "RJO12051978", "messageSetId": "messageSetId - Query Dates - SDD -07", "timestamp": "2017-07-23T08:37:06.489Z", "eventDescription": "Account was revoked", "legalEntityId": "LE-111111111111111111-SDD-9999999993", "serviceAgreementId": "SE-SDD-10000000000000-Service-999993", "eventData": [{ "key": "First Key for Audit Message 7", "value": "OTC" }] }, { "eventCategory": "Authentication", "objectType": "Account", "eventAction": "Locked", "username": "KNeil", "userId": "KNE12051978", "messageSetId": "messageSetId - Query Dates - SDD -06", "timestamp": "2017-07-22T07:25:03.183Z", "eventDescription": "Account was locked", "legalEntityId": "LE-111111111111111111-SDD-9999999994", "serviceAgreementId": "SE-SDD-10000000000000-Service-999994", "eventData": [{ "key": "First Key for Audit Message 6", "value": "OTC" }] }, { "eventCategory": "Authentication", "objectType": "Account", "eventAction": "Not Activated", "username": "JGate", "userId": "JGA12051978", "messageSetId": "messageSetId - Query Dates - SDD -05", "timestamp": "2017-07-21T06:07:25.652Z", "eventDescription": "Account was not activated", "legalEntityId": "LE-111111111111111111-SDD-9999999995", "serviceAgreementId": "SE-SDD-10000000000000-Service-999995", "eventData": [{ "key": "First Key for Audit Message 5", "value": "OTC" }] }, { "eventCategory": "Authentication", "objectType": "OTC", "eventAction": "Expired", "username": "AWright", "userId": "AWR12051978", "messageSetId": "messageSetId - Query Dates - SDD -04", "timestamp": "2017-07-20T08:29:34.822Z", "eventDescription": "OTC expired", "legalEntityId": "LE-111111111111111111-SDD-9999999996", "serviceAgreementId": "SE-SDD-10000000000000-Service-999996", "eventData": [{ "key": "First Key for Audit Message 4", "value": "OTC" }] }, { "eventCategory": "Authentication", "objectType": "OTC", "eventAction": "Invalid", "username": "PPoe", "userId": "PPO12051978", "messageSetId": "messageSetId - Query Dates - SDD -03", "timestamp": "2017-07-19T08:19:10.855Z", "eventDescription": "OTC was invalid", "legalEntityId": "LE-111111111111111111-SDD-9999999997", "serviceAgreementId": "SE-SDD-10000000000000-Service-999997", "eventData": [{ "key": "First Key for Audit Message 3", "value": "OTC" }] }, { "eventCategory": "Authentication", "objectType": "Password", "eventAction": "Error", "username": "ZAvery", "userId": "ZAV12051978", "messageSetId": "messageSetId - Query Dates - SDD -02", "timestamp": "2017-07-18T08:13:06.661Z", "eventDescription": "Password error encountered", "legalEntityId": "LE-111111111111111111-SDD-9999999998", "serviceAgreementId": "SE-SDD-10000000000000-Service-999998", "eventData": [{ "key": "First Key for Audit Message 2", "value": "OTC" }] }] } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 403, "data": { "status": 403, "message": "Access denied" } }, { "status": 405, "data": { "status": 405, "message": "Method not allowed : GET" } }, { "status": 406, "data": { "message": "Could not find acceptable representation", "supportedMediaTypes": ["application/json"] } }, { "status": 500, "data": { "message": "Description of error" } }, { "status": 501, "data": { "status": 501, "message": "Operation not supported" } }],
	
	      getAuditLogEventCategories: [{ "status": 200, "data": { "eventCategories": [{ "eventCategory": "Authentication", "objectTypes": [{ "objectType": "Account", "eventActions": ["Revoked", "Locked", "Not Activated"] }, { "objectType": "Login", "eventActions": ["Success"] }, { "objectType": "OTC", "eventActions": ["Expired", "Invalid"] }, { "objectType": "Password", "eventActions": ["Error"] }] }, { "eventCategory": "Contact", "objectTypes": [{ "objectType": "Contact", "eventActions": ["Deleted", "Updated", "Created", "Authorised", "Revoked"] }] }, { "eventCategory": "Payment", "objectTypes": [{ "objectType": "Direct Debit", "eventActions": ["Fully Authorized", "Part Authorized", "Deleted", "Updated", "Created"] }, { "objectType": "Payment", "eventActions": ["Fully Authorized", "Part Authorized", "Deleted", "Updated", "Created"] }, { "objectType": "Standing order", "eventActions": ["Fully Authorized", "Part Authorized", "Deleted", "Updated", "Created"] }] }, { "eventCategory": "User Entitlement", "objectTypes": [{ "objectType": "Data Group", "eventActions": ["Deleted", "Updated", "Added"] }, { "objectType": "Function Group", "eventActions": ["Deleted", "Updated", "Added"] }, { "objectType": "Ingestion", "eventActions": ["Initial Admin Ingested", "Legal Entity Ingested", "User Ingested"] }, { "objectType": "Permissions", "eventActions": ["Data Group Removed", "Data Group Assigned", "Removed from Data Group", "Assigned to Date Group", "Removed from Function Group", "Assigned to Function Group"] }, { "objectType": "Service Agreement", "eventActions": ["Permission Assigned", "User Removed", "User Assigned", "Pairs removed", "Pairs Assigned", "Removed", "Updated", "Added"] }] }] } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 403, "data": { "status": 403, "message": "Access denied" } }, { "status": 405, "data": { "status": 405, "message": "Method not allowed : GET" } }, { "status": 406, "data": { "message": "Could not find acceptable representation", "supportedMediaTypes": ["application/json"] } }, { "status": 500, "data": { "message": "Description of error" } }, { "status": 501, "data": { "status": 501, "message": "Operation not supported" } }]
	
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
	
	    var plugins = (_plugins = {}, _defineProperty(_plugins, PLUGINS_ALL, []), _defineProperty(_plugins, 'postAuditMessagesRecord', []), _defineProperty(_plugins, 'getAuditLogMessages', []), _defineProperty(_plugins, 'getAuditLogEventCategories', []), _plugins);
	
	    if (!plugins['getAuditLogMessages']) {
	      console.warn('%cThere is no "getAuditLogMessages" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getAuditLogMessages'].push(function (result, args) {
	        /* eslint-disable max-len */
	        // this is not indented because it is using template literal 
	        // to read as a correct CSV format with new lines
	        var mockCsvData = 'eventCategory,objectType,eventAction,username,userId,timestamp,eventDescription,legalEntityId,serviceAgreementId,messageSetId,eventData\n"API Access",Authorisation,Initiated,admin,Unknown,"2017-10-03T14:49:21.322+0000","User admin is attempting to access the Audit Query API",,,,[]\n"API Access",Authorisation,Pass,admin,Unknown,"2017-10-03T14:49:12.005+0000","User admin has successfully accessed the Audit Query API",,,,[]\n"API Access",Authorisation,Initiated,admin,Unknown,"2017-10-03T14:49:11.888+0000","User admin is attempting to access the Audit Query API",,,,[]\n"API Access",Authorisation,Pass,admin,Unknown,"2017-10-03T14:46:17.711+0000","User admin has successfully accessed the Audit Query API",,,,[]\n"API Access",Authorisation,Initiated,admin,Unknown,"2017-10-03T14:46:17.458+0000","User admin is attempting to access the Audit Query API",,,,[]\n"API Access",Authorisation,Fail,anonymousUser,Unknown,"2017-10-03T14:46:10.649+0000","User anonymousUser has been unsuccessful in accessing the Audit Query API due to status 406: Not Acceptable",,,,[]\n"API Access",Authorisation,Initiated,anonymousUser,Unknown,"2017-10-03T14:46:10.422+0000","User anonymousUser is attempting to access the Audit Query API",,,,[]\n"API Access",Authorisation,Pass,admin,Unknown,"2017-10-03T14:38:05.327+0000","User admin has successfully accessed the Audit Query API",,,,[]\n"API Access",Authorisation,Initiated,admin,Unknown,"2017-10-03T14:38:05.222+0000","User admin is attempting to access the Audit Query API",,,,[]\n"API Access",Authorisation,Pass,admin,Unknown,"2017-10-03T14:37:56.839+0000","User admin has successfully accessed the Audit Query API",,,,[]\n"API Access",Authorisation,Initiated,admin,Unknown,"2017-10-03T14:37:56.217+0000","User admin is attempting to access the Audit Query API",,,,[]\nAuthentication,Login,Success,atester,"f8501d76-a86b-442a-a4da-43119ce5ecd4","2017-04-19T14:39:57.123+0000","User atester logged in","04d6b7b6-bc28-4fbe-8aec-58f954348da2","87418545-59db-42e4-b671-e5cf8c341ed0",,[]';
	        /* eslint-enable max-len */
	
	        var _args = _slicedToArray(args, 2),
	            params = _args[0],
	            argsAcceptHeader = _args[1];
	
	        var filtersMap = [{
	          paramKey: 'serviceAgreementId'
	        }, {
	          paramKey: 'legalEntityIds',
	          dataKey: 'legalEntityId'
	        }, {
	          paramKey: 'eventCategories',
	          dataKey: 'eventCategory'
	        }, {
	          paramKey: 'objectType'
	        }, {
	          paramKey: 'eventAction'
	        }];
	
	        var isCsvRequest = argsAcceptHeader && argsAcceptHeader.accept === 'text/csv';
	        if (isCsvRequest) {
	          var _headers = function _headers(header) {
	            return header === 'content-disposition' ? 'attachment; filename=audit-log_20170901-20171001.csv' : result.headers(header);
	          };
	          return Object.assign({}, result, { headers: _headers, data: mockCsvData });
	        }
	
	        var multiplyData = function multiplyData() {
	          var originalData = result.data.auditMessages;
	          var multiplier = 4;
	
	          var newDataSet = originalData.map(function (auditMessage, index) {
	            var startSlice = index;
	            var endSlice = index + multiplier;
	
	            if (index % 2 === 0) {
	              endSlice = index;
	              startSlice = index - multiplier;
	            }
	
	            // fake randomise the dates so data doesn't look like a block
	            return originalData.slice(startSlice, endSlice).map(function (innerAuditItem, i) {
	              var timestamp = new Date(innerAuditItem.timestamp);
	              timestamp.setDate(timestamp.getDate() - i);
	              return Object.assign({}, innerAuditItem, { timestamp: timestamp });
	            });
	          });
	          // flatten array back down to single dimension array
	          return [].concat.apply([], newDataSet);
	        };
	
	        var filterByDate = function filterByDate(dataItem) {
	          var startDate = params.startDate,
	              endDate = params.endDate;
	
	          var itemTimestamp = new Date(dataItem.timestamp);
	          var matchesDateFilters = true;
	
	          if (startDate) {
	            matchesDateFilters = itemTimestamp >= new Date(startDate);
	          }
	          if (matchesDateFilters && endDate) {
	            matchesDateFilters = itemTimestamp <= new Date(endDate);
	          }
	          return matchesDateFilters;
	        };
	
	        var filterMatchesItemValue = function filterMatchesItemValue(paramKey, value) {
	          var matchesFilters = true;
	          if (value !== undefined && value.length > 0 && matchesFilters === true && params[paramKey] !== undefined) {
	            // if params have a comma seperated set of values split into an array
	            var paramMap = params[paramKey].split(',');
	            // check that any of the value in the filters matches the item value
	            matchesFilters = paramMap.some(function (param) {
	              return value === param;
	            });
	          }
	          return matchesFilters;
	        };
	
	        var filterDataByParams = function filterDataByParams(dataItem) {
	          var matched = filtersMap.map(function (filter) {
	            var paramKey = filter.paramKey;
	            var dataKey = filter.dataKey;
	
	
	            dataKey = dataKey || paramKey;
	            var matchedFilter = filterMatchesItemValue(paramKey, dataItem[dataKey]);
	            return matchedFilter;
	          });
	          return matched.indexOf(false) < 0;
	        };
	
	        var pageData = function pageData(data) {
	          var size = parseInt(params.size, 10);
	          if (!isNaN(size)) {
	            var from = parseInt(params.from, 10) || 0;
	            var startIndex = from * size;
	
	            return data.slice(startIndex, startIndex + size);
	          }
	          return [];
	        };
	
	        var filterData = function filterData(data) {
	          return data.filter(filterByDate).filter(filterDataByParams);
	        };
	
	        var multipliedDate = multiplyData();
	        var newAuditData = filterData(multipliedDate);
	        var totalResults = newAuditData.length;
	        var headers = function headers(header) {
	          return header === 'x-total-count' ? totalResults : result.headers(header);
	        };
	        var pagedData = pageData(newAuditData);
	        return Object.assign({}, result, { headers: headers, data: { auditMessages: pagedData } });
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
	
	    function postAuditMessagesRecord(data, headers) {
	      var url = '' + baseUri + version + '/audit-messages';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postAuditMessagesRecord', 201)).then(pluginMocks('postAuditMessagesRecord', [data, headers], '{version}/audit-messages')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postAuditMessagesRecord'));
	    }
	
	    function getAuditLogMessages(params, headers) {
	      var url = '' + baseUri + version + '/audit-log/messages';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAuditLogMessages', 200)).then(pluginMocks('getAuditLogMessages', [params, headers], '{version}/audit-log/messages')).catch(handleError('getAuditLogMessages'));
	    }
	
	    function getAuditLogEventCategories(params, headers) {
	      var url = '' + baseUri + version + '/audit-log/event-categories';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAuditLogEventCategories', 200)).then(pluginMocks('getAuditLogEventCategories', [params, headers], '{version}/audit-log/event-categories')).catch(handleError('getAuditLogEventCategories'));
	    }
	
	    schemas.postAuditMessagesRecord = { "properties": { "auditMessages": { "type": "array", "items": { "properties": { "eventCategory": { "type": "string", "minLength": 1, "maxLength": 35, "required": true }, "objectType": { "type": "string", "minLength": 1, "maxLength": 35, "required": true }, "eventAction": { "type": "string", "minLength": 1, "maxLength": 35, "required": true }, "username": { "type": "string", "minLength": 1, "maxLength": 64, "required": true }, "userId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "timestamp": { "type": "string", "format": "date-time", "required": true }, "eventDescription": { "type": "string", "minLength": 1, "maxLength": 255, "required": true }, "legalEntityId": { "type": "string", "minLength": 1, "maxLength": 36, "required": false }, "serviceAgreementId": { "type": "string", "minLength": 1, "maxLength": 36, "required": false }, "messageSetId": { "type": "string", "minLength": 36, "maxLength": 36, "required": false }, "eventData": { "type": "array", "items": { "properties": { "key": { "type": "string", "minLength": 1, "maxLength": 255, "required": true }, "value": { "type": "string", "maxLength": 255, "required": false } } }, "maxItems": 50, "required": false } } }, "minItems": 1, "maxItems": 50, "required": true } } };
	
	    return {
	
	      postAuditMessagesRecord: postAuditMessagesRecord,
	
	      getAuditLogMessages: getAuditLogMessages,
	
	      getAuditLogEventCategories: getAuditLogEventCategories,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=mock.data-bb-audit-http-ng.js.map