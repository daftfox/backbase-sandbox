(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else if(typeof define === 'function' && define.amd)
		define("mock.data-bb-message-center-http-ng", ["vendor-bb-angular", "lib-bb-storage-ng"], factory);
	else if(typeof exports === 'object')
		exports["mock.data-bb-message-center-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else
		root["mock.data-bb-message-center-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage-ng"]);
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
	exports.messageCenterDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStorageNg = __webpack_require__(3);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _dataBbMessageCenterHttp = __webpack_require__(4);
	
	var _dataBbMessageCenterHttp2 = _interopRequireDefault(_dataBbMessageCenterHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var messageCenterDataModuleKey = 'data-bb-message-center-http-ng'; /* eslint-disable */
	var messageCenterDataKey = exports.messageCenterDataKey = 'data-bb-message-center-http-ng:messageCenterData';
	
	exports.default = _vendorBbAngular2.default.module(messageCenterDataModuleKey, [_libBbStorageNg2.default]).provider(messageCenterDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  return {
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	    $get: ['$q', _libBbStorageNg.bbStorageServiceKey, '$httpParamSerializer',
	    /* into */
	    (0, _dataBbMessageCenterHttp2.default)(config)]
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
	
	    var version = 'v4';
	
	    var schemas = {};
	
	    var STORAGE_KEY = 'MOCK_STATE_messageCenterDataModuleKey';
	    var state = {
	      "{version}/message-center/topics": [{
	        "id": "40219526-aa79-4a81-a0a5-ffd12ffed8a3",
	        "code": "ma",
	        "name": "Mortgage application"
	      }, {
	        "id": "b0069a89-3dcb-4bdc-b7da-fc65643064a6",
	        "code": "ln",
	        "name": "Loans"
	      }, {
	        "id": "4fb026ec-62e5-41c8-aa28-149d7544b704",
	        "code": "pym",
	        "name": "Problems with making a payment"
	      }],
	      "{version}/message-center/drafts": [{
	        "id": "5862c866-85f6-4a2d-ae26-077d8b3bc2e1",
	        "sender": "John Doe",
	        "updatedDate": "2017-10-02T10:42:04Z",
	        "body": "Good afternoon,\r\n\r\nI would like to get more details regarding the rejection of my application.\r\n\r\nJohn Doe,",
	        "subject": "Application Rejected",
	        "category": "ma",
	        "recipients": ["Lisa Nijenhuis"],
	        "important": true,
	        "additions": {
	          "somePropertyKey": "somePropertyValue"
	        }
	      }],
	      "{version}/message-center/conversations": [{
	        "id": "ae9f9fdd-f4ed-4a6e-bc19-9eeeb17395e7",
	        "otherUser": "John Doe",
	        "category": "ma",
	        "body": "Good afternoon,\r\n\r\nI would like to get more details regarding the rejection of my application. I look forward to hearing from you soon.\r\n\r\nJohn Doe,",
	        "subject": "Application Rejected",
	        "containsUnread": true,
	        "important": true,
	        "numberOfMessages": 1,
	        "timestamp": "2017-10-02T10:51:30Z"
	      }],
	      "{version}/message-center/topics/{topicId}/subscriptions": [{
	        "id": "08ee5037-8dce-43ab-b734-e2b90a189b82",
	        "externalUserId": "admin",
	        "subscriptionDate": "2017-08-22T11:07:27.752Z"
	      }, {
	        "id": "58ee5037-8dce-43ab-b734-e2b90a189b81",
	        "externalUserId": "lisa",
	        "subscriptionDate": "2017-08-22T11:07:27.752Z"
	      }],
	      "{version}/message-center/conversations/{conversationId}/drafts": [{
	        "id": "6b92bc2a-8b1f-415e-a4ff-68ffbfe46ee3",
	        "sender": "Lisa Nijenhuis",
	        "updatedDate": "2017-10-02T10:53:04Z",
	        "body": "Dear client,\r\n\r\nWe are sorry for the inconvenience. Our technical team is investigating it. We will contact you as soon as the issue is resolved.\r\n\r\nSincerely,",
	        "subject": "Application Rejected",
	        "category": "ma",
	        "recipients": ["John Doe"],
	        "important": true,
	        "additions": {
	          "somePropertyKey": "somePropertyValue"
	        }
	      }],
	      "{version}/message-center/conversations/{conversationId}/messages": [{
	        "id": "e712938d-d010-4b1c-9ec0-2b6be7d7fca0",
	        "body": "Good afternoon,\r\n\r\nI would like to get more details regarding the rejection of my application. I look forward to hearing from you soon.\r\n\r\nJohn Doe,",
	        "subject": "Application Rejected",
	        "category": "ma",
	        "sender": "John Doe",
	        "status": "DELIVERED",
	        "deliveredOn": "2017-10-02T10:51:30Z",
	        "important": true,
	        "additions": {
	          "somePropertyKey": "somePropertyValue"
	        }
	      }, {
	        "id": "a1233r-g124g-jh34-6ne7-4l6p7pg984",
	        "body": "Dear John,\r\n\r\nYour request has been accepted and will be processed shortly.\r\n\r\nMichael Brown,",
	        "subject": "Application Rejected",
	        "category": "ma",
	        "sender": "Michael Brown",
	        "status": "DELIVERED",
	        "deliveredOn": "2017-10-03T12:45:16Z",
	        "important": true,
	        "additions": {
	          "somePropertyKey": "somePropertyValue"
	        }
	      }]
	    };
	
	    bbStorage.subscribe(STORAGE_KEY, function (newState) {
	      state = newState;
	    });
	
	    var persistState = function persistState(newState) {
	      bbStorage.setItem(STORAGE_KEY, newState);
	    };
	
	    var responses = {
	
	      getMessageCenterTopics: [{ "status": 200, "data": [{ "id": "40219526-aa79-4a81-a0a5-ffd12ffed8a3", "code": "ma", "name": "Mortgage application" }, { "id": "b0069a89-3dcb-4bdc-b7da-fc65643064a6", "code": "ln", "name": "Loans" }, { "id": "4fb026ec-62e5-41c8-aa28-149d7544b704", "code": "pym", "name": "Problems with making a payment" }] }, { "status": 401, "data": { "timestamp": 1512577881012, "status": 401, "error": "Unauthorized", "message": "Full authentication is required to access this resource", "path": "/path/to/resource" } }],
	
	      postMessageCenterTopicsRecord: [{ "status": 202, "data": { "id": "79754562-57f6-4cf7-81dc-ec757e4d4c04" } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 401, "data": { "timestamp": 1512577881012, "status": 401, "error": "Unauthorized", "message": "Full authentication is required to access this resource", "path": "/path/to/resource" } }, { "status": 403, "data": { "timestamp": 1512654644355, "status": 403, "error": "Forbidden", "message": "Access is denied", "path": "/v3/message-center/users/admin/topics" } }],
	
	      getMessageCenterUnreadConversationCount: [{ "status": 200, "data": { "unreadCount": 5 } }, { "status": 401, "data": { "timestamp": 1512577881012, "status": 401, "error": "Unauthorized", "message": "Full authentication is required to access this resource", "path": "/path/to/resource" } }],
	
	      getMessageCenterDrafts: [{ "status": 200, "data": [{ "id": "5862c866-85f6-4a2d-ae26-077d8b3bc2e1", "sender": "John Doe", "updatedDate": "2017-10-02T10:42:04Z", "body": "Good afternoon,\r\n\r\nI would like to get more details regarding the rejection of my application.\r\n\r\nJohn Doe,", "subject": "Application Rejected", "category": "ma", "recipients": ["Lisa Nijenhuis"], "important": true, "additions": { "somePropertyKey": "somePropertyValue" } }] }, { "status": 401, "data": { "timestamp": 1512577881012, "status": 401, "error": "Unauthorized", "message": "Full authentication is required to access this resource", "path": "/path/to/resource" } }],
	
	      postMessageCenterDraftsRecord: [{ "status": 202, "data": { "id": "79754562-57f6-4cf7-81dc-ec757e4d4c04" } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 401, "data": { "timestamp": 1512577881012, "status": 401, "error": "Unauthorized", "message": "Full authentication is required to access this resource", "path": "/path/to/resource" } }],
	
	      getMessageCenterConversations: [{ "status": 200, "data": [{ "id": "ae9f9fdd-f4ed-4a6e-bc19-9eeeb17395e7", "otherUser": "John Doe", "category": "ma", "body": "Good afternoon,\r\n\r\nI would like to get more details regarding the rejection of my application. I look forward to hearing from you soon.\r\n\r\nJohn Doe,", "subject": "Application Rejected", "containsUnread": true, "important": true, "numberOfMessages": 1, "timestamp": "2017-10-02T10:51:30Z" }] }, { "status": 401, "data": { "timestamp": 1512577881012, "status": 401, "error": "Unauthorized", "message": "Full authentication is required to access this resource", "path": "/path/to/resource" } }],
	
	      deleteMessageCenterTopicsRecord: [{ "status": 202, "data": null }, { "status": 401, "data": { "timestamp": 1512577881012, "status": 401, "error": "Unauthorized", "message": "Full authentication is required to access this resource", "path": "/path/to/resource" } }, { "status": 403, "data": { "timestamp": 1512654644355, "status": 403, "error": "Forbidden", "message": "Access is denied", "path": "/v3/message-center/users/admin/topics" } }, { "status": 404, "data": { "message": "Resource not found" } }],
	
	      getMessageCenterTopicsSubscriptions: [{ "status": 200, "data": [{ "id": "08ee5037-8dce-43ab-b734-e2b90a189b82", "externalUserId": "admin", "subscriptionDate": "2017-08-22T11:07:27.752Z" }, { "id": "58ee5037-8dce-43ab-b734-e2b90a189b81", "externalUserId": "lisa", "subscriptionDate": "2017-08-22T11:07:27.752Z" }] }, { "status": 401, "data": { "timestamp": 1512577881012, "status": 401, "error": "Unauthorized", "message": "Full authentication is required to access this resource", "path": "/path/to/resource" } }, { "status": 403, "data": { "timestamp": 1512654644355, "status": 403, "error": "Forbidden", "message": "Access is denied", "path": "/v3/message-center/users/admin/topics" } }, { "status": 404, "data": { "message": "Resource not found" } }],
	
	      postMessageCenterTopicsSubscriptionsRecord: [{ "status": 202, "data": { "id": "79754562-57f6-4cf7-81dc-ec757e4d4c04" } }, { "status": 401, "data": { "timestamp": 1512577881012, "status": 401, "error": "Unauthorized", "message": "Full authentication is required to access this resource", "path": "/path/to/resource" } }, { "status": 403, "data": { "timestamp": 1512654644355, "status": 403, "error": "Forbidden", "message": "Access is denied", "path": "/v3/message-center/users/admin/topics" } }, { "status": 404, "data": { "message": "Resource not found" } }],
	
	      deleteMessageCenterTopicsSubscriptionsRecord: [{ "status": 202, "data": null }, { "status": 401, "data": { "timestamp": 1512577881012, "status": 401, "error": "Unauthorized", "message": "Full authentication is required to access this resource", "path": "/path/to/resource" } }, { "status": 403, "data": { "timestamp": 1512654644355, "status": 403, "error": "Forbidden", "message": "Access is denied", "path": "/v3/message-center/users/admin/topics" } }, { "status": 404, "data": { "message": "Resource not found" } }],
	
	      putMessageCenterDraftsRecord: [{ "status": 202, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 401, "data": { "timestamp": 1512577881012, "status": 401, "error": "Unauthorized", "message": "Full authentication is required to access this resource", "path": "/path/to/resource" } }, { "status": 404, "data": { "message": "Resource not found" } }],
	
	      deleteMessageCenterDraftsRecord: [{ "status": 202, "data": null }, { "status": 401, "data": { "timestamp": 1512577881012, "status": 401, "error": "Unauthorized", "message": "Full authentication is required to access this resource", "path": "/path/to/resource" } }, { "status": 404, "data": { "message": "Resource not found" } }],
	
	      postMessageCenterDraftsSendDraftRequestRecord: [{ "status": 202, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 401, "data": { "timestamp": 1512577881012, "status": 401, "error": "Unauthorized", "message": "Full authentication is required to access this resource", "path": "/path/to/resource" } }, { "status": 404, "data": { "message": "Resource not found" } }],
	
	      deleteMessageCenterConversationsRecord: [{ "status": 202, "data": null }, { "status": 401, "data": { "timestamp": 1512577881012, "status": 401, "error": "Unauthorized", "message": "Full authentication is required to access this resource", "path": "/path/to/resource" } }, { "status": 404, "data": { "message": "Resource not found" } }],
	
	      postMessageCenterConversationsArchiveConversationRequestRecord: [{ "status": 202, "data": null }, { "status": 401, "data": { "timestamp": 1512577881012, "status": 401, "error": "Unauthorized", "message": "Full authentication is required to access this resource", "path": "/path/to/resource" } }, { "status": 404, "data": { "message": "Resource not found" } }],
	
	      getMessageCenterConversationsDrafts: [{ "status": 200, "data": [{ "id": "6b92bc2a-8b1f-415e-a4ff-68ffbfe46ee3", "sender": "Lisa Nijenhuis", "updatedDate": "2017-10-02T10:53:04Z", "body": "Dear client,\r\n\r\nWe are sorry for the inconvenience. Our technical team is investigating it. We will contact you as soon as the issue is resolved.\r\n\r\nSincerely,", "subject": "Application Rejected", "category": "ma", "recipients": ["John Doe"], "important": true, "additions": { "somePropertyKey": "somePropertyValue" } }] }, { "status": 401, "data": { "timestamp": 1512577881012, "status": 401, "error": "Unauthorized", "message": "Full authentication is required to access this resource", "path": "/path/to/resource" } }, { "status": 404, "data": { "message": "Resource not found" } }],
	
	      postMessageCenterConversationsDraftsRecord: [{ "status": 202, "data": { "id": "e92bbe7d-10cf-4d7c-b7b5-eadb7632812a" } }, { "status": 401, "data": { "timestamp": 1512577881012, "status": 401, "error": "Unauthorized", "message": "Full authentication is required to access this resource", "path": "/path/to/resource" } }, { "status": 404, "data": { "message": "Resource not found" } }],
	
	      getMessageCenterConversationsMessages: [{ "status": 200, "data": [{ "id": "e712938d-d010-4b1c-9ec0-2b6be7d7fca0", "body": "Good afternoon,\r\n\r\nI would like to get more details regarding the rejection of my application. I look forward to hearing from you soon.\r\n\r\nJohn Doe,", "subject": "Application Rejected", "category": "ma", "sender": "John Doe", "status": "DELIVERED", "deliveredOn": "2017-10-02T10:51:30Z", "important": true, "additions": { "somePropertyKey": "somePropertyValue" } }, { "id": "a1233r-g124g-jh34-6ne7-4l6p7pg984", "body": "Dear John,\r\n\r\nYour request has been accepted and will be processed shortly.\r\n\r\nMichael Brown,", "subject": "Application Rejected", "category": "ma", "sender": "Michael Brown", "status": "DELIVERED", "deliveredOn": "2017-10-03T12:45:16Z", "important": true, "additions": { "somePropertyKey": "somePropertyValue" } }] }, { "status": 401, "data": { "timestamp": 1512577881012, "status": 401, "error": "Unauthorized", "message": "Full authentication is required to access this resource", "path": "/path/to/resource" } }, { "status": 404, "data": { "message": "Resource not found" } }],
	
	      putMessageCenterConversationsDraftsRecord: [{ "status": 202, "data": null }, { "status": 401, "data": { "timestamp": 1512577881012, "status": 401, "error": "Unauthorized", "message": "Full authentication is required to access this resource", "path": "/path/to/resource" } }, { "status": 404, "data": { "message": "Resource not found" } }],
	
	      postMessageCenterConversationsMessagesReadMessageRequestRecord: [{ "status": 202, "data": null }, { "status": 401, "data": { "timestamp": 1512577881012, "status": 401, "error": "Unauthorized", "message": "Full authentication is required to access this resource", "path": "/path/to/resource" } }, { "status": 404, "data": { "message": "Resource not found" } }]
	
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
	
	    var plugins = (_plugins = {}, _defineProperty(_plugins, PLUGINS_ALL, []), _defineProperty(_plugins, 'getMessageCenterTopics', []), _defineProperty(_plugins, 'postMessageCenterTopicsRecord', []), _defineProperty(_plugins, 'getMessageCenterUnreadConversationCount', []), _defineProperty(_plugins, 'getMessageCenterDrafts', []), _defineProperty(_plugins, 'postMessageCenterDraftsRecord', []), _defineProperty(_plugins, 'getMessageCenterConversations', []), _defineProperty(_plugins, 'deleteMessageCenterTopicsRecord', []), _defineProperty(_plugins, 'getMessageCenterTopicsSubscriptions', []), _defineProperty(_plugins, 'postMessageCenterTopicsSubscriptionsRecord', []), _defineProperty(_plugins, 'deleteMessageCenterTopicsSubscriptionsRecord', []), _defineProperty(_plugins, 'putMessageCenterDraftsRecord', []), _defineProperty(_plugins, 'deleteMessageCenterDraftsRecord', []), _defineProperty(_plugins, 'postMessageCenterDraftsSendDraftRequestRecord', []), _defineProperty(_plugins, 'deleteMessageCenterConversationsRecord', []), _defineProperty(_plugins, 'postMessageCenterConversationsArchiveConversationRequestRecord', []), _defineProperty(_plugins, 'getMessageCenterConversationsDrafts', []), _defineProperty(_plugins, 'postMessageCenterConversationsDraftsRecord', []), _defineProperty(_plugins, 'getMessageCenterConversationsMessages', []), _defineProperty(_plugins, 'putMessageCenterConversationsDraftsRecord', []), _defineProperty(_plugins, 'postMessageCenterConversationsMessagesReadMessageRequestRecord', []), _plugins);
	
	    if (!plugins['getMessageCenterTopics']) {
	      console.warn('%cThere is no "getMessageCenterTopics" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getMessageCenterTopics'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['postMessageCenterTopicsRecord']) {
	      console.warn('%cThere is no "postMessageCenterTopicsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['postMessageCenterTopicsRecord'].push(function (result, args, uri) {
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
	
	    if (!plugins['deleteMessageCenterTopicsRecord']) {
	      console.warn('%cThere is no "deleteMessageCenterTopicsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['deleteMessageCenterTopicsRecord'].push(function (result, args, uri, method) {
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
	
	    if (!plugins['getMessageCenterDrafts']) {
	      console.warn('%cThere is no "getMessageCenterDrafts" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getMessageCenterDrafts'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['postMessageCenterDraftsRecord']) {
	      console.warn('%cThere is no "postMessageCenterDraftsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['postMessageCenterDraftsRecord'].push(function (result, args, uri) {
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
	
	    if (!plugins['putMessageCenterDraftsRecord']) {
	      console.warn('%cThere is no "putMessageCenterDraftsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['putMessageCenterDraftsRecord'].push(function (result, args, uri, method) {
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
	
	    if (!plugins['deleteMessageCenterDraftsRecord']) {
	      console.warn('%cThere is no "deleteMessageCenterDraftsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['deleteMessageCenterDraftsRecord'].push(function (result, args, uri, method) {
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
	
	    if (!plugins['getMessageCenterConversations']) {
	      console.warn('%cThere is no "getMessageCenterConversations" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getMessageCenterConversations'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['deleteMessageCenterConversationsRecord']) {
	      console.warn('%cThere is no "deleteMessageCenterConversationsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['deleteMessageCenterConversationsRecord'].push(function (result, args, uri, method) {
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
	
	    if (!plugins['getMessageCenterTopicsSubscriptions']) {
	      console.warn('%cThere is no "getMessageCenterTopicsSubscriptions" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getMessageCenterTopicsSubscriptions'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['postMessageCenterTopicsSubscriptionsRecord']) {
	      console.warn('%cThere is no "postMessageCenterTopicsSubscriptionsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['postMessageCenterTopicsSubscriptionsRecord'].push(function (result, args, uri) {
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
	
	    if (!plugins['deleteMessageCenterTopicsSubscriptionsRecord']) {
	      console.warn('%cThere is no "deleteMessageCenterTopicsSubscriptionsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['deleteMessageCenterTopicsSubscriptionsRecord'].push(function (result, args, uri, method) {
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
	
	    if (!plugins['getMessageCenterConversationsDrafts']) {
	      console.warn('%cThere is no "getMessageCenterConversationsDrafts" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getMessageCenterConversationsDrafts'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
	      });
	    }
	
	    if (!plugins['postMessageCenterConversationsDraftsRecord']) {
	      console.warn('%cThere is no "postMessageCenterConversationsDraftsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['postMessageCenterConversationsDraftsRecord'].push(function (result, args, uri) {
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
	
	    if (!plugins['putMessageCenterConversationsDraftsRecord']) {
	      console.warn('%cThere is no "putMessageCenterConversationsDraftsRecord" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['putMessageCenterConversationsDraftsRecord'].push(function (result, args, uri, method) {
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
	
	    if (!plugins['getMessageCenterConversationsMessages']) {
	      console.warn('%cThere is no "getMessageCenterConversationsMessages" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getMessageCenterConversationsMessages'].push(function (result, args, uri) {
	        var isSuccess = Math.floor(result.status / 100) === 2;
	
	        // Return local state data
	        // (state variable is available in the mock module context)
	        return isSuccess ? Object.assign({}, result, { data: state[uri] }) : result;
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
	
	    function getMessageCenterTopics(params, headers) {
	      var url = '' + baseUri + version + '/message-center/topics';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getMessageCenterTopics', 200)).then(pluginMocks('getMessageCenterTopics', [params, headers], '{version}/message-center/topics')).catch(handleError('getMessageCenterTopics'));
	    }
	
	    function postMessageCenterTopicsRecord(data, headers) {
	      var url = '' + baseUri + version + '/message-center/topics';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postMessageCenterTopicsRecord', 202)).then(pluginMocks('postMessageCenterTopicsRecord', [data, headers], '{version}/message-center/topics')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postMessageCenterTopicsRecord'));
	    }
	
	    function getMessageCenterUnreadConversationCount(params, headers) {
	      var url = '' + baseUri + version + '/message-center/unread-conversation-count';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getMessageCenterUnreadConversationCount', 200)).then(pluginMocks('getMessageCenterUnreadConversationCount', [params, headers], '{version}/message-center/unread-conversation-count')).catch(handleError('getMessageCenterUnreadConversationCount'));
	    }
	
	    function getMessageCenterDrafts(params, headers) {
	      var url = '' + baseUri + version + '/message-center/drafts';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getMessageCenterDrafts', 200)).then(pluginMocks('getMessageCenterDrafts', [params, headers], '{version}/message-center/drafts')).catch(handleError('getMessageCenterDrafts'));
	    }
	
	    function postMessageCenterDraftsRecord(data, headers) {
	      var url = '' + baseUri + version + '/message-center/drafts';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postMessageCenterDraftsRecord', 202)).then(pluginMocks('postMessageCenterDraftsRecord', [data, headers], '{version}/message-center/drafts')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postMessageCenterDraftsRecord'));
	    }
	
	    function getMessageCenterConversations(params, headers) {
	      var url = '' + baseUri + version + '/message-center/conversations';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getMessageCenterConversations', 200)).then(pluginMocks('getMessageCenterConversations', [params, headers], '{version}/message-center/conversations')).catch(handleError('getMessageCenterConversations'));
	    }
	
	    function deleteMessageCenterTopicsRecord(topicId, params, headers) {
	      var url = '' + baseUri + version + '/message-center/topics/' + topicId;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deleteMessageCenterTopicsRecord', 202)).then(pluginMocks('deleteMessageCenterTopicsRecord', [topicId, params, headers], '{version}/message-center/topics/{topicId}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deleteMessageCenterTopicsRecord'));
	    }
	
	    function getMessageCenterTopicsSubscriptions(topicId, params, headers) {
	      var url = '' + baseUri + version + '/message-center/topics/' + topicId + '/subscriptions';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getMessageCenterTopicsSubscriptions', 200)).then(pluginMocks('getMessageCenterTopicsSubscriptions', [topicId, params, headers], '{version}/message-center/topics/{topicId}/subscriptions')).catch(handleError('getMessageCenterTopicsSubscriptions'));
	    }
	
	    function postMessageCenterTopicsSubscriptionsRecord(topicId, data, headers) {
	      var url = '' + baseUri + version + '/message-center/topics/' + topicId + '/subscriptions';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postMessageCenterTopicsSubscriptionsRecord', 202)).then(pluginMocks('postMessageCenterTopicsSubscriptionsRecord', [topicId, data, headers], '{version}/message-center/topics/{topicId}/subscriptions')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postMessageCenterTopicsSubscriptionsRecord'));
	    }
	
	    function deleteMessageCenterTopicsSubscriptionsRecord(topicId, subscriptionId, params, headers) {
	      var url = '' + baseUri + version + '/message-center/topics/' + topicId + '/subscriptions/' + subscriptionId;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deleteMessageCenterTopicsSubscriptionsRecord', 202)).then(pluginMocks('deleteMessageCenterTopicsSubscriptionsRecord', [topicId, subscriptionId, params, headers], '{version}/message-center/topics/{topicId}/subscriptions/{subscriptionId}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deleteMessageCenterTopicsSubscriptionsRecord'));
	    }
	
	    function putMessageCenterDraftsRecord(draftId, data, headers) {
	      var url = '' + baseUri + version + '/message-center/drafts/' + draftId;
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putMessageCenterDraftsRecord', 202)).then(pluginMocks('putMessageCenterDraftsRecord', [draftId, data, headers], '{version}/message-center/drafts/{draftId}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putMessageCenterDraftsRecord'));
	    }
	
	    function deleteMessageCenterDraftsRecord(draftId, params, headers) {
	      var url = '' + baseUri + version + '/message-center/drafts/' + draftId;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deleteMessageCenterDraftsRecord', 202)).then(pluginMocks('deleteMessageCenterDraftsRecord', [draftId, params, headers], '{version}/message-center/drafts/{draftId}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deleteMessageCenterDraftsRecord'));
	    }
	
	    function postMessageCenterDraftsSendDraftRequestRecord(draftId, data, headers) {
	      var url = '' + baseUri + version + '/message-center/drafts/' + draftId + '/send-draft-request';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postMessageCenterDraftsSendDraftRequestRecord', 202)).then(pluginMocks('postMessageCenterDraftsSendDraftRequestRecord', [draftId, data, headers], '{version}/message-center/drafts/{draftId}/send-draft-request')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postMessageCenterDraftsSendDraftRequestRecord'));
	    }
	
	    function deleteMessageCenterConversationsRecord(conversationId, params, headers) {
	      var url = '' + baseUri + version + '/message-center/conversations/' + conversationId;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deleteMessageCenterConversationsRecord', 202)).then(pluginMocks('deleteMessageCenterConversationsRecord', [conversationId, params, headers], '{version}/message-center/conversations/{conversationId}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deleteMessageCenterConversationsRecord'));
	    }
	
	    function postMessageCenterConversationsArchiveConversationRequestRecord(conversationId, data, headers) {
	      var url = '' + baseUri + version + '/message-center/conversations/' + conversationId + '/archive-conversation-request';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postMessageCenterConversationsArchiveConversationRequestRecord', 202)).then(pluginMocks('postMessageCenterConversationsArchiveConversationRequestRecord', [conversationId, data, headers], '{version}/message-center/conversations/{conversationId}/archive-conversation-request')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postMessageCenterConversationsArchiveConversationRequestRecord'));
	    }
	
	    function getMessageCenterConversationsDrafts(conversationId, params, headers) {
	      var url = '' + baseUri + version + '/message-center/conversations/' + conversationId + '/drafts';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getMessageCenterConversationsDrafts', 200)).then(pluginMocks('getMessageCenterConversationsDrafts', [conversationId, params, headers], '{version}/message-center/conversations/{conversationId}/drafts')).catch(handleError('getMessageCenterConversationsDrafts'));
	    }
	
	    function postMessageCenterConversationsDraftsRecord(conversationId, data, headers) {
	      var url = '' + baseUri + version + '/message-center/conversations/' + conversationId + '/drafts';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postMessageCenterConversationsDraftsRecord', 202)).then(pluginMocks('postMessageCenterConversationsDraftsRecord', [conversationId, data, headers], '{version}/message-center/conversations/{conversationId}/drafts')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postMessageCenterConversationsDraftsRecord'));
	    }
	
	    function getMessageCenterConversationsMessages(conversationId, params, headers) {
	      var url = '' + baseUri + version + '/message-center/conversations/' + conversationId + '/messages';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getMessageCenterConversationsMessages', 200)).then(pluginMocks('getMessageCenterConversationsMessages', [conversationId, params, headers], '{version}/message-center/conversations/{conversationId}/messages')).catch(handleError('getMessageCenterConversationsMessages'));
	    }
	
	    function putMessageCenterConversationsDraftsRecord(conversationId, draftId, data, headers) {
	      var url = '' + baseUri + version + '/message-center/conversations/' + conversationId + '/drafts/' + draftId;
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putMessageCenterConversationsDraftsRecord', 202)).then(pluginMocks('putMessageCenterConversationsDraftsRecord', [conversationId, draftId, data, headers], '{version}/message-center/conversations/{conversationId}/drafts/{draftId}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putMessageCenterConversationsDraftsRecord'));
	    }
	
	    function postMessageCenterConversationsMessagesReadMessageRequestRecord(conversationId, messageId, data, headers) {
	      var url = '' + baseUri + version + '/message-center/conversations/' + conversationId + '/messages/' + messageId + '/read-message-request';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postMessageCenterConversationsMessagesReadMessageRequestRecord', 202)).then(pluginMocks('postMessageCenterConversationsMessagesReadMessageRequestRecord', [conversationId, messageId, data, headers], '{version}/message-center/conversations/{conversationId}/messages/{messageId}/read-message-request')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postMessageCenterConversationsMessagesReadMessageRequestRecord'));
	    }
	
	    schemas.postMessageCenterTopicsRecord = { "properties": {} };
	
	    schemas.postMessageCenterDraftsRecord = { "properties": {} };
	
	    schemas.postMessageCenterTopicsSubscriptionsRecord = { "properties": { "externalUserId": { "type": "string", "required": true } } };
	
	    schemas.putMessageCenterDraftsRecord = { "properties": {} };
	
	    schemas.postMessageCenterDraftsSendDraftRequestRecord = { "properties": {} };
	
	    schemas.postMessageCenterConversationsDraftsRecord = { "properties": {} };
	
	    schemas.putMessageCenterConversationsDraftsRecord = { "properties": {} };
	
	    return {
	
	      getMessageCenterTopics: getMessageCenterTopics,
	
	      postMessageCenterTopicsRecord: postMessageCenterTopicsRecord,
	
	      getMessageCenterUnreadConversationCount: getMessageCenterUnreadConversationCount,
	
	      getMessageCenterDrafts: getMessageCenterDrafts,
	
	      postMessageCenterDraftsRecord: postMessageCenterDraftsRecord,
	
	      getMessageCenterConversations: getMessageCenterConversations,
	
	      deleteMessageCenterTopicsRecord: deleteMessageCenterTopicsRecord,
	
	      getMessageCenterTopicsSubscriptions: getMessageCenterTopicsSubscriptions,
	
	      postMessageCenterTopicsSubscriptionsRecord: postMessageCenterTopicsSubscriptionsRecord,
	
	      deleteMessageCenterTopicsSubscriptionsRecord: deleteMessageCenterTopicsSubscriptionsRecord,
	
	      putMessageCenterDraftsRecord: putMessageCenterDraftsRecord,
	
	      deleteMessageCenterDraftsRecord: deleteMessageCenterDraftsRecord,
	
	      postMessageCenterDraftsSendDraftRequestRecord: postMessageCenterDraftsSendDraftRequestRecord,
	
	      deleteMessageCenterConversationsRecord: deleteMessageCenterConversationsRecord,
	
	      postMessageCenterConversationsArchiveConversationRequestRecord: postMessageCenterConversationsArchiveConversationRequestRecord,
	
	      getMessageCenterConversationsDrafts: getMessageCenterConversationsDrafts,
	
	      postMessageCenterConversationsDraftsRecord: postMessageCenterConversationsDraftsRecord,
	
	      getMessageCenterConversationsMessages: getMessageCenterConversationsMessages,
	
	      putMessageCenterConversationsDraftsRecord: putMessageCenterConversationsDraftsRecord,
	
	      postMessageCenterConversationsMessagesReadMessageRequestRecord: postMessageCenterConversationsMessagesReadMessageRequestRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=mock.data-bb-message-center-http-ng.js.map