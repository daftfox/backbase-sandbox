(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else if(typeof define === 'function' && define.amd)
		define("mock.data-bb-notifications-http-ng", ["vendor-bb-angular", "lib-bb-storage-ng"], factory);
	else if(typeof exports === 'object')
		exports["mock.data-bb-notifications-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else
		root["mock.data-bb-notifications-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage-ng"]);
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
	exports.notificationsDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStorageNg = __webpack_require__(3);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _dataBbNotificationsHttp = __webpack_require__(4);
	
	var _dataBbNotificationsHttp2 = _interopRequireDefault(_dataBbNotificationsHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var notificationsDataModuleKey = 'data-bb-notifications-http-ng'; /* eslint-disable */
	var notificationsDataKey = exports.notificationsDataKey = 'data-bb-notifications-http-ng:notificationsData';
	
	exports.default = _vendorBbAngular2.default.module(notificationsDataModuleKey, [_libBbStorageNg2.default]).provider(notificationsDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  return {
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	    $get: ['$q', _libBbStorageNg.bbStorageServiceKey, '$httpParamSerializer',
	    /* into */
	    (0, _dataBbNotificationsHttp2.default)(config)]
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
	
	    var STORAGE_KEY = 'MOCK_STATE_notificationsDataModuleKey';
	    var state = {
	      "{version}/notifications": [{
	        "id": "1234-5678-9021",
	        "title": "Payment completed",
	        "message": "Your payment to John Doe was completed successfully.",
	        "level": "SUCCESS",
	        "createdOn": "2017-08-07T08:00:36Z",
	        "read": false,
	        "origin": "Transactions"
	      }, {
	        "id": "1234-5678-9022",
	        "title": "Payment rejected",
	        "message": "Your payment to A. Smith was rejected due to insufficient fonds on you current account.",
	        "level": "ALERT",
	        "createdOn": "2017-08-06T14:01:36Z",
	        "read": false,
	        "origin": "Transactions"
	      }, {
	        "id": "1234-5678-9023",
	        "title": "Scheduled payment alert",
	        "message": "Don`t forget: 50 euro will be withdrawn from the account on 2018-10-04",
	        "level": "INFO",
	        "createdOn": "2017-08-04T14:07:36Z",
	        "expiresOn": "2018-10-06T14:07:36Z",
	        "read": true,
	        "origin": "Security"
	      }, {
	        "id": "1234-5678-9024",
	        "title": "http://support.dashboard.backbase.com Updates",
	        "message": "You are using an old version of application. Please update it as soon as possible. To get the new version click the {{link}}.",
	        "level": "WARNING",
	        "createdOn": "2017-08-03T12:13:36Z",
	        "link": "http://support.dashboard.backbase.com",
	        "expiresOn": "2018-11-22T14:41:36Z",
	        "read": true,
	        "origin": "Security"
	      }, {
	        "id": "1234-5678-9025",
	        "title": "Planned maintenance",
	        "message": "The server will be down at October 4 due to some problems you should not care about. Sorry for inconvenience. For more information check the {{link}}.",
	        "level": "WARNING",
	        "createdOn": "2017-07-27T14:59:36Z",
	        "link": "http://support.dashboard.backbase.com",
	        "validFrom": "2017-07-28T14:59:36Z",
	        "expiresOn": "2018-09-28T14:59:36Z",
	        "read": false,
	        "origin": "Maintenance"
	      }, {
	        "id": "1234-5678-9026",
	        "title": "Payment completed",
	        "message": "Your payment to John Doe was completed successfully.",
	        "level": "INFO",
	        "createdOn": "2017-07-26T15:55:36Z",
	        "read": false,
	        "origin": "Transactions"
	      }, {
	        "id": "1234-5678-9027",
	        "title": "Payment rejected because of the very very long reason which I wouldn`t describe",
	        "message": "Your payment to A. Smith was rejected due to insufficient fonds on you current account. For additional information please click the {{link}}.",
	        "level": "ALERT",
	        "createdOn": "2017-07-25T16:53:36Z",
	        "link": "http://support.dashboard.backbase.com",
	        "read": false,
	        "origin": "Transactions"
	      }, {
	        "id": "1234-5678-9028",
	        "title": "Scheduled payment alert",
	        "message": "Don`t forget: 50 euro will be withdrawn from the account on 2018-10-04",
	        "level": "WARNING",
	        "createdOn": "2017-07-24T17:54:36Z",
	        "expiresOn": "2018-09-24T18:54:36Z",
	        "read": true,
	        "origin": "Security"
	      }, {
	        "id": "1234-5678-9029",
	        "title": "Updates",
	        "message": "You are using an old version of application. Please update it as soon as possible. To get the new version click the {{link}}.",
	        "level": "WARNING",
	        "createdOn": "2017-07-15T17:13:36Z",
	        "link": "http://support.dashboard.backbase.com",
	        "expiresOn": "2018-09-22T18:54:36Z",
	        "read": true,
	        "origin": "Security"
	      }, {
	        "id": "1234-5678-9030",
	        "title": "Planned maintenance",
	        "message": "The server will be down at October 4 due to some problems you should not care about. Sorry for inconvenience. For more information check the {{link}}.",
	        "level": "WARNING",
	        "createdOn": "2017-07-16T19:54:36Z",
	        "link": "http://support.dashboard.backbase.com",
	        "validFrom": "2017-07-17T19:54:36Z",
	        "expiresOn": "2018-09-17T19:54:36Z",
	        "read": false,
	        "origin": "Maintenance"
	      }, {
	        "id": "1234-5678-9031",
	        "title": "Payment completed",
	        "message": "Your payment to John Doe was completed successfully.",
	        "level": "INFO",
	        "createdOn": "2017-07-14T21:54:36Z",
	        "read": false,
	        "origin": "Transactions"
	      }, {
	        "id": "1234-5678-9032",
	        "title": "Payment rejected",
	        "message": "Your payment to A. Smith was rejected due to insufficient fonds on you current account. For additional information please {{click}}.",
	        "level": "WARNING",
	        "createdOn": "2017-07-12T22:54:36Z",
	        "link": "http://support.dashboard.backbase.com",
	        "read": false,
	        "origin": "Transactions"
	      }, {
	        "id": "1234-5678-9033",
	        "title": "Scheduled payment alert",
	        "message": "Don`t forget: 50 euro will be withdrawn from the account on 2018-10-04",
	        "level": "WARNING",
	        "createdOn": "2017-07-10T14:54:36Z",
	        "expiresOn": "2018-09-10T14:54:36Z",
	        "read": true,
	        "origin": "Security"
	      }, {
	        "id": "1234-5678-9034",
	        "title": "Updates",
	        "message": "You are using an old version of application. Please update it as soon as possible. To get the new version click the {{link}}.",
	        "level": "WARNING",
	        "createdOn": "2017-07-05T13:13:36Z",
	        "link": "http://support.dashboard.backbase.com",
	        "expiresOn": "2018-11-22T15:54:36Z",
	        "read": true,
	        "origin": "Security"
	      }, {
	        "id": "1234-5678-9035",
	        "title": "Planned maintenance",
	        "message": "The server will be down at October 4 due to some problems you should not care about. Sorry for inconvenience. For more information check the link below.",
	        "level": "WARNING",
	        "createdOn": "2017-06-04T11:54:36Z",
	        "link": "http://support.dashboard.backbase.com",
	        "validFrom": "2017-08-04T14:54:36Z",
	        "expiresOn": "2019-10-04T14:54:36Z",
	        "read": false,
	        "origin": "Maintenance"
	      }, {
	        "id": "1234-5678-9036",
	        "title": "Message without link",
	        "message": "Message without link",
	        "level": "INFO",
	        "createdOn": "2018-06-04T10:54:36Z",
	        "read": false,
	        "origin": "Transactions"
	      }, {
	        "id": "1234-5678-9037",
	        "title": "Message with link",
	        "message": "Message with {{link}}",
	        "level": "WARNING",
	        "createdOn": "2017-06-03T15:30:36Z",
	        "link": "http://support.dashboard.backbase.com",
	        "read": false,
	        "origin": "Transactions"
	      }, {
	        "id": "1234-5678-9038",
	        "title": "Sticky message",
	        "message": "Sticky message",
	        "level": "WARNING",
	        "createdOn": "2017-06-03T14:42:36Z",
	        "expiresOn": "2018-10-04T14:54:36Z",
	        "read": true,
	        "origin": "Security"
	      }, {
	        "id": "1234-5678-9039",
	        "title": "Message shown in future (unless it's past June 2018 :)",
	        "message": "Message shown in future (unless it's past June 2018 :)",
	        "level": "WARNING",
	        "createdOn": "2017-06-03T10:48:36Z",
	        "validFrom": "2018-06-03T11:48:36Z",
	        "expiresOn": "2019-06-03T11:48:36Z",
	        "read": false,
	        "origin": "Maintenance"
	      }],
	      "{version}/notifications/stream": [{
	        "id": "1234-5678-9040",
	        "title": "Message without link",
	        "message": "Message without link",
	        "level": "INFO",
	        "createdOn": "2017-10-04T14:54:36Z"
	      }, {
	        "id": "1234-5678-9041",
	        "title": "Message with link",
	        "message": "Message with {{link}}",
	        "level": "WARNING",
	        "createdOn": "2017-10-04T14:54:36Z",
	        "link": "http://support.dashboard.backbase.com"
	      }, {
	        "id": "1234-5678-9042",
	        "title": "Sticky message",
	        "message": "Sticky message",
	        "level": "WARNING",
	        "createdOn": "2017-10-04T14:54:36Z",
	        "expiresOn": "2017-11-04T14:54:36Z"
	      }, {
	        "id": "1234-5678-9043",
	        "title": "Message shown in future (unless it's past June 2018 :)",
	        "message": "Message shown in future (unless it's past June 2018 :)",
	        "level": "WARNING",
	        "createdOn": "2017-10-04T14:55:36Z",
	        "validFrom": "2018-10-04T14:55:36Z",
	        "expiresOn": "2019-11-04T14:55:36Z"
	      }]
	    };
	
	    bbStorage.subscribe(STORAGE_KEY, function (newState) {
	      state = newState;
	    });
	
	    var persistState = function persistState(newState) {
	      bbStorage.setItem(STORAGE_KEY, newState);
	    };
	
	    var responses = {
	
	      getNotifications: [{ "status": 200, "data": [{ "id": "1234-5678-9021", "title": "Payment completed", "message": "Your payment to John Doe was completed successfully.", "level": "SUCCESS", "createdOn": "2017-08-07T08:00:36Z", "read": false, "origin": "Transactions" }, { "id": "1234-5678-9022", "title": "Payment rejected", "message": "Your payment to A. Smith was rejected due to insufficient fonds on you current account.", "level": "ALERT", "createdOn": "2017-08-06T14:01:36Z", "read": false, "origin": "Transactions" }, { "id": "1234-5678-9023", "title": "Scheduled payment alert", "message": "Don`t forget: 50 euro will be withdrawn from the account on 2018-10-04", "level": "INFO", "createdOn": "2017-08-04T14:07:36Z", "expiresOn": "2018-10-06T14:07:36Z", "read": true, "origin": "Security" }, { "id": "1234-5678-9024", "title": "http://support.dashboard.backbase.com Updates", "message": "You are using an old version of application. Please update it as soon as possible. To get the new version click the {{link}}.", "level": "WARNING", "createdOn": "2017-08-03T12:13:36Z", "link": "http://support.dashboard.backbase.com", "expiresOn": "2018-11-22T14:41:36Z", "read": true, "origin": "Security" }, { "id": "1234-5678-9025", "title": "Planned maintenance", "message": "The server will be down at October 4 due to some problems you should not care about. Sorry for inconvenience. For more information check the {{link}}.", "level": "WARNING", "createdOn": "2017-07-27T14:59:36Z", "link": "http://support.dashboard.backbase.com", "validFrom": "2017-07-28T14:59:36Z", "expiresOn": "2018-09-28T14:59:36Z", "read": false, "origin": "Maintenance" }, { "id": "1234-5678-9026", "title": "Payment completed", "message": "Your payment to John Doe was completed successfully.", "level": "INFO", "createdOn": "2017-07-26T15:55:36Z", "read": false, "origin": "Transactions" }, { "id": "1234-5678-9027", "title": "Payment rejected because of the very very long reason which I wouldn`t describe", "message": "Your payment to A. Smith was rejected due to insufficient fonds on you current account. For additional information please click the {{link}}.", "level": "ALERT", "createdOn": "2017-07-25T16:53:36Z", "link": "http://support.dashboard.backbase.com", "read": false, "origin": "Transactions" }, { "id": "1234-5678-9028", "title": "Scheduled payment alert", "message": "Don`t forget: 50 euro will be withdrawn from the account on 2018-10-04", "level": "WARNING", "createdOn": "2017-07-24T17:54:36Z", "expiresOn": "2018-09-24T18:54:36Z", "read": true, "origin": "Security" }, { "id": "1234-5678-9029", "title": "Updates", "message": "You are using an old version of application. Please update it as soon as possible. To get the new version click the {{link}}.", "level": "WARNING", "createdOn": "2017-07-15T17:13:36Z", "link": "http://support.dashboard.backbase.com", "expiresOn": "2018-09-22T18:54:36Z", "read": true, "origin": "Security" }, { "id": "1234-5678-9030", "title": "Planned maintenance", "message": "The server will be down at October 4 due to some problems you should not care about. Sorry for inconvenience. For more information check the {{link}}.", "level": "WARNING", "createdOn": "2017-07-16T19:54:36Z", "link": "http://support.dashboard.backbase.com", "validFrom": "2017-07-17T19:54:36Z", "expiresOn": "2018-09-17T19:54:36Z", "read": false, "origin": "Maintenance" }, { "id": "1234-5678-9031", "title": "Payment completed", "message": "Your payment to John Doe was completed successfully.", "level": "INFO", "createdOn": "2017-07-14T21:54:36Z", "read": false, "origin": "Transactions" }, { "id": "1234-5678-9032", "title": "Payment rejected", "message": "Your payment to A. Smith was rejected due to insufficient fonds on you current account. For additional information please {{click}}.", "level": "WARNING", "createdOn": "2017-07-12T22:54:36Z", "link": "http://support.dashboard.backbase.com", "read": false, "origin": "Transactions" }, { "id": "1234-5678-9033", "title": "Scheduled payment alert", "message": "Don`t forget: 50 euro will be withdrawn from the account on 2018-10-04", "level": "WARNING", "createdOn": "2017-07-10T14:54:36Z", "expiresOn": "2018-09-10T14:54:36Z", "read": true, "origin": "Security" }, { "id": "1234-5678-9034", "title": "Updates", "message": "You are using an old version of application. Please update it as soon as possible. To get the new version click the {{link}}.", "level": "WARNING", "createdOn": "2017-07-05T13:13:36Z", "link": "http://support.dashboard.backbase.com", "expiresOn": "2018-11-22T15:54:36Z", "read": true, "origin": "Security" }, { "id": "1234-5678-9035", "title": "Planned maintenance", "message": "The server will be down at October 4 due to some problems you should not care about. Sorry for inconvenience. For more information check the link below.", "level": "WARNING", "createdOn": "2017-06-04T11:54:36Z", "link": "http://support.dashboard.backbase.com", "validFrom": "2017-08-04T14:54:36Z", "expiresOn": "2019-10-04T14:54:36Z", "read": false, "origin": "Maintenance" }, { "id": "1234-5678-9036", "title": "Message without link", "message": "Message without link", "level": "INFO", "createdOn": "2018-06-04T10:54:36Z", "read": false, "origin": "Transactions" }, { "id": "1234-5678-9037", "title": "Message with link", "message": "Message with {{link}}", "level": "WARNING", "createdOn": "2017-06-03T15:30:36Z", "link": "http://support.dashboard.backbase.com", "read": false, "origin": "Transactions" }, { "id": "1234-5678-9038", "title": "Sticky message", "message": "Sticky message", "level": "WARNING", "createdOn": "2017-06-03T14:42:36Z", "expiresOn": "2018-10-04T14:54:36Z", "read": true, "origin": "Security" }, { "id": "1234-5678-9039", "title": "Message shown in future (unless it's past June 2018 :)", "message": "Message shown in future (unless it's past June 2018 :)", "level": "WARNING", "createdOn": "2017-06-03T10:48:36Z", "validFrom": "2018-06-03T11:48:36Z", "expiresOn": "2019-06-03T11:48:36Z", "read": false, "origin": "Maintenance" }] }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 403, "data": null }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      postNotificationsRecord: [{ "status": 201, "data": [{ "id": "1234-5678-9012-3432" }, { "id": "1234-5678-9012-3433" }, { "id": "1234-5678-9012-3434" }, { "id": "1234-5678-9012-3435" }] }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 403, "data": null }, { "status": 422, "data": { "message": "Validation error(s) occurred during creation of the notification", "errorFields": [{ "fieldName": "message", "message": "Message must contain '{{link}}' placeholder to replace presented link. Remove link or insert placeholder into your message text" }, { "fieldName": "validFrom", "message": "The notification should be valid from some time in future" }] } }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      getNotificationsUnreadCount: [{ "status": 200, "data": { "unread": 19 } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 403, "data": null }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      getNotificationsStream: [{ "status": 200, "data": [{ "id": "1234-5678-9040", "title": "Message without link", "message": "Message without link", "level": "INFO", "createdOn": "2017-10-04T14:54:36Z" }, { "id": "1234-5678-9041", "title": "Message with link", "message": "Message with {{link}}", "level": "WARNING", "createdOn": "2017-10-04T14:54:36Z", "link": "http://support.dashboard.backbase.com" }, { "id": "1234-5678-9042", "title": "Sticky message", "message": "Sticky message", "level": "WARNING", "createdOn": "2017-10-04T14:54:36Z", "expiresOn": "2017-11-04T14:54:36Z" }, { "id": "1234-5678-9043", "title": "Message shown in future (unless it's past June 2018 :)", "message": "Message shown in future (unless it's past June 2018 :)", "level": "WARNING", "createdOn": "2017-10-04T14:55:36Z", "validFrom": "2018-10-04T14:55:36Z", "expiresOn": "2019-11-04T14:55:36Z" }] }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 403, "data": null }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      deleteNotificationsRecord: [{ "status": 200, "data": null }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 500, "data": { "message": "Description of error" } }],
	
	      putNotificationsReadRecord: [{ "status": 200, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 422, "data": { "message": "Validation error(s) occurred during creation of the notification", "errorFields": [{ "fieldName": "message", "message": "Message must contain '{{link}}' placeholder to replace presented link. Remove link or insert placeholder into your message text" }, { "fieldName": "validFrom", "message": "The notification should be valid from some time in future" }] } }, { "status": 500, "data": { "message": "Description of error" } }]
	
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
	
	    var plugins = (_plugins = {}, _defineProperty(_plugins, PLUGINS_ALL, []), _defineProperty(_plugins, 'getNotifications', []), _defineProperty(_plugins, 'postNotificationsRecord', []), _defineProperty(_plugins, 'getNotificationsUnreadCount', []), _defineProperty(_plugins, 'getNotificationsStream', []), _defineProperty(_plugins, 'deleteNotificationsRecord', []), _defineProperty(_plugins, 'putNotificationsReadRecord', []), _plugins);
	
	    if (!plugins['getNotifications']) {
	      console.warn('%cThere is no "getNotifications" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getNotifications'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['postNotificationsRecord']) {
	      console.warn('%cThere is no "postNotificationsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['postNotificationsRecord'].push(function (result, args, uri) {
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
	
	    if (!plugins['deleteNotificationsRecord']) {
	      console.warn('%cThere is no "deleteNotificationsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['deleteNotificationsRecord'].push(function (result, args, uri, method) {
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
	
	    if (!plugins['getNotificationsStream']) {
	      console.warn('%cThere is no "getNotificationsStream" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getNotificationsStream'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['getNotifications']) {
	      console.warn('%cThere is no "getNotifications" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getNotifications'].push(function (result, args) {
	        var data = result.data;
	        var params = args[args.length - 2] || {};
	        var size = parseInt(params.size, 10);
	        var cursor = parseInt(params.cursor, 10);
	
	        // the cursor is based on the date of creation of the notification
	        var parseCursor = function parseCursor(item) {
	          return Date.parse(item.createdOn);
	        };
	
	        // modifies list of notifications according to the cursor value
	        if (!isNaN(size)) {
	          if (!isNaN(cursor)) {
	            var cursorItemIndex = data.findIndex(function (item) {
	              return parseCursor(item) === cursor;
	            });
	
	            if (cursorItemIndex !== -1) {
	              data = data.slice(cursorItemIndex);
	            }
	          }
	        }
	
	        // adds header function that returns the actual cursor
	        var newCursor = data[size] ? parseCursor(data[size]) : null;
	        var headers = function headers(header) {
	          if (header === 'x-cursor') return newCursor;
	
	          return result.headers(header);
	        };
	
	        return Object.assign({}, result, { data: data, headers: headers });
	      });
	    }
	
	    if (!plugins['putNotificationsReadRecord']) {
	      console.warn('%cThere is no "putNotificationsReadRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['putNotificationsReadRecord'].push(function (result, args) {
	        var id = args[args.length - 3];
	        var params = args[args.length - 2] || {};
	        var read = params.read;
	        var collection = state['{version}/notifications'] || [];
	
	        // Changes notification read status in the state
	        collection.map(function (item) {
	          if (item.id === id) Object.assign(item, { read: read });
	
	          return item;
	        });
	
	        return result;
	      });
	    }
	
	    if (!plugins['getNotifications']) {
	      console.warn('%cThere is no "getNotifications" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getNotifications'].push(function (result, args) {
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
	
	    function getNotifications(params, headers) {
	      var url = '' + baseUri + version + '/notifications';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getNotifications', 200)).then(pluginMocks('getNotifications', [params, headers], '{version}/notifications')).catch(handleError('getNotifications'));
	    }
	
	    function postNotificationsRecord(data, headers) {
	      var url = '' + baseUri + version + '/notifications';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postNotificationsRecord', 201)).then(pluginMocks('postNotificationsRecord', [data, headers], '{version}/notifications')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postNotificationsRecord'));
	    }
	
	    function getNotificationsUnreadCount(params, headers) {
	      var url = '' + baseUri + version + '/notifications/unread-count';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getNotificationsUnreadCount', 200)).then(pluginMocks('getNotificationsUnreadCount', [params, headers], '{version}/notifications/unread-count')).catch(handleError('getNotificationsUnreadCount'));
	    }
	
	    function getNotificationsStream(params, headers) {
	      var url = '' + baseUri + version + '/notifications/stream';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getNotificationsStream', 200)).then(pluginMocks('getNotificationsStream', [params, headers], '{version}/notifications/stream')).catch(handleError('getNotificationsStream'));
	    }
	
	    function deleteNotificationsRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/notifications/' + id;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deleteNotificationsRecord', 200)).then(pluginMocks('deleteNotificationsRecord', [id, params, headers], '{version}/notifications/{id}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deleteNotificationsRecord'));
	    }
	
	    function putNotificationsReadRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/notifications/' + id + '/read';
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putNotificationsReadRecord', 200)).then(pluginMocks('putNotificationsReadRecord', [id, data, headers], '{version}/notifications/{id}/read')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putNotificationsReadRecord'));
	    }
	
	    schemas.postNotificationsRecord = { "properties": { "recipients": { "type": "array", "items": { "properties": { "userId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true } } }, "required": false }, "legalEntities": { "type": "array", "items": { "properties": { "leId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true } } }, "required": false }, "title": { "type": "string", "minLength": 1, "maxLength": 512, "required": false }, "message": { "type": "string", "minLength": 1, "maxLength": 1024, "required": true }, "level": { "type": "string", "enum": ["ALERT", "WARNING", "SUCCESS", "INFO"], "required": true }, "targetGroup": { "type": "string", "enum": ["GLOBAL", "CUSTOMER", "USER"], "required": true }, "link": { "type": "string", "maxLength": 512, "required": false }, "validFrom": { "type": "string", "format": "date-time", "required": false }, "expiresOn": { "type": "string", "format": "date-time", "required": false }, "origin": { "type": "string", "minLength": 1, "maxLength": 200, "required": true } } };
	
	    schemas.putNotificationsReadRecord = { "properties": { "read": { "type": "boolean", "required": true } } };
	
	    return {
	
	      getNotifications: getNotifications,
	
	      postNotificationsRecord: postNotificationsRecord,
	
	      getNotificationsUnreadCount: getNotificationsUnreadCount,
	
	      getNotificationsStream: getNotificationsStream,
	
	      deleteNotificationsRecord: deleteNotificationsRecord,
	
	      putNotificationsReadRecord: putNotificationsReadRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=mock.data-bb-notifications-http-ng.js.map