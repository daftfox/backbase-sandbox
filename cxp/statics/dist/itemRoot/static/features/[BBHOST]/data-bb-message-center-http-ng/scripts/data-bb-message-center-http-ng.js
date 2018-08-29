(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-message-center-http-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-message-center-http-ng"] = factory(require("vendor-bb-angular"));
	else
		root["data-bb-message-center-http-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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
	
	var _dataBbMessageCenterHttp = __webpack_require__(3);
	
	var _dataBbMessageCenterHttp2 = _interopRequireDefault(_dataBbMessageCenterHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	/**
	 * @module data-bb-message-center-http-ng
	 *
	 * @description A data module for accessing the Message Center REST API.
	 *
	 * @returns {String} `data-bb-message-center-http-ng`
	 * @example
	 * import messageCenterDataModuleKey, {
	 *   messageCenterDataKey,
	 * } from 'data-bb-message-center-http-ng';
	 */
	
	var messageCenterDataModuleKey = 'data-bb-message-center-http-ng';
	/**
	 * @name messageCenterDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the MessageCenterData service
	 */
	var messageCenterDataKey = exports.messageCenterDataKey = 'data-bb-message-center-http-ng:messageCenterData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(messageCenterDataModuleKey, [])
	
	/**
	 * @constructor MessageCenterData
	 * @type {object}
	 *
	 * @description Public api for data-bb-message-center-http-ng service
	 *
	 */
	.provider(messageCenterDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name MessageCenterDataProvider
	   * @type {object}
	   * @ngkey data-bb-message-center-http-ng:messageCenterDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-message-center-http-ng:messageCenterDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-message-center-http-ng:messageCenterDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name MessageCenterDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name MessageCenterDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http', '$httpParamSerializer',
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

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/* eslint-disable */
	exports.default = function (conf) {
	  return function (httpClient, serializeParams) {
	    // Base param constants
	    var baseUri = conf.baseUri || '';
	
	    var version = 'v4';
	
	    /**
	     * The root defined types from the RAML.
	     * @private
	     */
	    var definedTypes = {};
	
	    /*
	     * @name parse
	     * @type {Function}
	     * @private
	     * @description Should be overwritten by transformResponse on a project level
	     */
	    function parse(res) {
	      return {
	        data: res.data,
	        headers: res.headers,
	        status: res.status,
	        statusText: res.statusText
	      };
	    }
	
	    /**
	     * @name MessageCenterData#getMessageCenterTopics
	     * @type {Function}
	     * @description Returns a list of available topics. Each topic is associated with a list of subscribers. Selection of a topic
	    determines a target destination of a message as well.
	      
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * messageCenterData
	     *  .getMessageCenterTopics(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getMessageCenterTopics(params, headers) {
	      var url = '' + baseUri + version + '/message-center/topics';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name MessageCenterData#postMessageCenterTopicsRecord
	     * @type {Function}
	     * @description Creates a new topic
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * messageCenterData
	     *  .postMessageCenterTopicsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postMessageCenterTopicsRecord(data, headers) {
	      var url = '' + baseUri + version + '/message-center/topics';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name MessageCenterData#getMessageCenterUnreadConversationCount
	     * @type {Function}
	     * @description Returns a total number of unread conversations for the given user
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * messageCenterData
	     *  .getMessageCenterUnreadConversationCount(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getMessageCenterUnreadConversationCount(params, headers) {
	      var url = '' + baseUri + version + '/message-center/unread-conversation-count';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name MessageCenterData#getMessageCenterDrafts
	     * @type {Function}
	     * @description Returns a list of draft messages that has been created by the given user
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?string} params.recipients It is a filtering parameter. It represents a list of recipients that a resulting draft is to be addressed
	    to. Recipients are identified by an external user ID. A semicolon character (i.e., ";") is used as a
	    delimiter. Eg: sarah;john.
	       
	     * @param {?string} params.sort Represents a comma separated list of field names. Each name is to be used for sorting. The order of the
	    names is important as it determines the order in which the fields are utilized. That is, Nth field name
	    is used if and only if a value of (N-1)th field is found more than once. The sorting may be either
	    ascending or descending. This can be controlled by utilizing a special prefix. The prefix is a dash symbol
	    (i.e., "-"). If the prefix is provided, a result list will be ordered in a descending fashion, otherwise
	    it is going to be sorted in an ascending fashion. Eg: subject,-sentDateTime.
	       
	     * @param {?string} params.category Represents a type of a conversation/draft/message. A category is also referred to as 'topic'. It is used
	    as a filtering parameter. Eg: Loans.
	       
	     * @param {?string} params.subject Represents a short explanation of the purpose that a conversation/draft/message was created for. It is used
	    as a filtering parameter. Eg: Inquiry About the Loans.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * messageCenterData
	     *  .getMessageCenterDrafts(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getMessageCenterDrafts(params, headers) {
	      var url = '' + baseUri + version + '/message-center/drafts';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name MessageCenterData#postMessageCenterDraftsRecord
	     * @type {Function}
	     * @description Creates a draft with the specified user as an author
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {Object} headers Map of custom header attributes.
	       
	     * @param {string} headers.X-BBSVC-Request-Id Uniquely identifies a request. It is utilized in order to support idempotency. In case of an uncertain state
	    of a response, a client is expected to be able to retry the request by providing the same request identifier.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * messageCenterData
	     *  .postMessageCenterDraftsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postMessageCenterDraftsRecord(data, headers) {
	      var url = '' + baseUri + version + '/message-center/drafts';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name MessageCenterData#getMessageCenterConversations
	     * @type {Function}
	     * @description Returns a list of conversations available for a user
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?string} params.status Represents a type of a conversation. It is used as a filtering parameter. Essentially it defines a
	    mailbox. Currently supported types: received (i.e., inbox), sent (i.e., outbox), archived (i.e., archive).
	    If the parameter is not specified, received (non archived, non deleted) conversations are returned by
	    default.
	       
	     * @param {?string} params.sender Represents a user that takes part in a conversation. It is used as a filtering parameter. It is an
	    external user ID. The resulting list will include only those conversatons where the specified user takes
	    part in it. Eg: lisa.
	       
	     * @param {?number} params.from Represents an offset of the first result that is to be included into a response. It should be utilized in
	    order to control pagination. Eg: 3. (defaults to 0)
	       
	     * @param {?number} params.size Represents a maximum number of elements that are to be included into a response. It should be utilized in
	    order to control pagination. Eg: 20. (defaults to 10)
	       
	     * @param {?string} params.sort Represents a comma separated list of field names. Each name is to be used for sorting. The order of the
	    names is important as it determines the order in which the fields are utilized. That is, Nth field name
	    is used if and only if a value of (N-1)th field is found more than once. The sorting may be either
	    ascending or descending. This can be controlled by utilizing a special prefix. The prefix is a dash symbol
	    (i.e., "-"). If the prefix is provided, a result list will be ordered in a descending fashion, otherwise
	    it is going to be sorted in an ascending fashion. Eg: subject,-sentDateTime.
	       
	     * @param {?string} params.category Represents a type of a conversation/draft/message. A category is also referred to as 'topic'. It is used
	    as a filtering parameter. Eg: Loans.
	       
	     * @param {?string} params.subject Represents a short explanation of the purpose that a conversation/draft/message was created for. It is used
	    as a filtering parameter. Eg: Inquiry About the Loans.
	       
	     
	     * @param {Object} headers Map of custom header attributes.
	       
	     * @param {number} headers.X-Total-Count Contains total number of all conversations.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * messageCenterData
	     *  .getMessageCenterConversations(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getMessageCenterConversations(params, headers) {
	      var url = '' + baseUri + version + '/message-center/conversations';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name MessageCenterData#deleteMessageCenterTopicsRecord
	     * @type {Function}
	     * @description Deletes a topic of the given ID
	     
	     * @param {string} topicId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * messageCenterData
	     *  .deleteMessageCenterTopicsRecord(topicId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deleteMessageCenterTopicsRecord(topicId, params, headers) {
	      var url = '' + baseUri + version + '/message-center/topics/' + topicId;
	
	      return httpClient({
	        method: 'DELETE',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name MessageCenterData#getMessageCenterTopicsSubscriptions
	     * @type {Function}
	     * @description Returns a list of subscriptions that are associated with the specified topic
	     
	     * @param {string} topicId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?number} params.from Represents an offset of the first result that is to be included into a response. It should be utilized in
	    order to control pagination. Eg: 3. (defaults to 0)
	       
	     * @param {?number} params.size Represents a maximum number of elements that are to be included into a response. It should be utilized in
	    order to control pagination. Eg: 20. (defaults to 10)
	       
	     
	     * @param {Object} headers Map of custom header attributes.
	       
	     * @param {number} headers.X-Total-Count Contains total number of all subscriptions.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * messageCenterData
	     *  .getMessageCenterTopicsSubscriptions(topicId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getMessageCenterTopicsSubscriptions(topicId, params, headers) {
	      var url = '' + baseUri + version + '/message-center/topics/' + topicId + '/subscriptions';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name MessageCenterData#postMessageCenterTopicsSubscriptionsRecord
	     * @type {Function}
	     * @description Adds a new subscription to the given topic
	     
	     * @param {string} topicId 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * messageCenterData
	     *  .postMessageCenterTopicsSubscriptionsRecord(topicId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postMessageCenterTopicsSubscriptionsRecord(topicId, data, headers) {
	      var url = '' + baseUri + version + '/message-center/topics/' + topicId + '/subscriptions';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name MessageCenterData#deleteMessageCenterTopicsSubscriptionsRecord
	     * @type {Function}
	     * @description Remove a subscription for a topic
	     
	     * @param {string} topicId 
	       
	     
	     * @param {string} subscriptionId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * messageCenterData
	     *  .deleteMessageCenterTopicsSubscriptionsRecord(topicId, subscriptionId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deleteMessageCenterTopicsSubscriptionsRecord(topicId, subscriptionId, params, headers) {
	      var url = '' + baseUri + version + '/message-center/topics/' + topicId + '/subscriptions/' + subscriptionId;
	
	      return httpClient({
	        method: 'DELETE',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name MessageCenterData#putMessageCenterDraftsRecord
	     * @type {Function}
	     * @description Updates a draft with provided details
	     
	     * @param {string} draftId 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {Object} headers Map of custom header attributes.
	       
	     * @param {string} headers.X-BBSVC-Request-Id Uniquely identifies a request. It is utilized in order to support idempotency. In case of an uncertain state
	    of a response, a client is expected to be able to retry the request by providing the same request identifier.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * messageCenterData
	     *  .putMessageCenterDraftsRecord(draftId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putMessageCenterDraftsRecord(draftId, data, headers) {
	      var url = '' + baseUri + version + '/message-center/drafts/' + draftId;
	
	      return httpClient({
	        method: 'PUT',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name MessageCenterData#deleteMessageCenterDraftsRecord
	     * @type {Function}
	     * @description Deletes a draft
	     
	     * @param {string} draftId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * messageCenterData
	     *  .deleteMessageCenterDraftsRecord(draftId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deleteMessageCenterDraftsRecord(draftId, params, headers) {
	      var url = '' + baseUri + version + '/message-center/drafts/' + draftId;
	
	      return httpClient({
	        method: 'DELETE',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name MessageCenterData#postMessageCenterDraftsSendDraftRequestRecord
	     * @type {Function}
	     * @description Sends a draft. If a body part is added to the request, then a draft will be updated with the provided
	    data before being sent.
	      
	     * @param {string} draftId 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {Object} headers Map of custom header attributes.
	       
	     * @param {string} headers.X-BBSVC-Request-Id Uniquely identifies a request. It is utilized in order to support idempotency. In case of an uncertain state
	    of a response, a client is expected to be able to retry the request by providing the same request identifier.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * messageCenterData
	     *  .postMessageCenterDraftsSendDraftRequestRecord(draftId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postMessageCenterDraftsSendDraftRequestRecord(draftId, data, headers) {
	      var url = '' + baseUri + version + '/message-center/drafts/' + draftId + '/send-draft-request';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name MessageCenterData#deleteMessageCenterConversationsRecord
	     * @type {Function}
	     * @description Removes the user from the given conversation. After the reques is handled, the conversation is not
	    available for the given user only. If, however, any other participant of the conversation decides to send
	    a new message, then the conversation gets reinstated as well.
	      
	     * @param {string} conversationId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {Object} headers Map of custom header attributes.
	       
	     * @param {string} headers.X-BBSVC-Request-Id Uniquely identifies a request. It is utilized in order to support idempotency. In case of an uncertain state
	    of a response, a client is expected to be able to retry the request by providing the same request identifier.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * messageCenterData
	     *  .deleteMessageCenterConversationsRecord(conversationId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deleteMessageCenterConversationsRecord(conversationId, params, headers) {
	      var url = '' + baseUri + version + '/message-center/conversations/' + conversationId;
	
	      return httpClient({
	        method: 'DELETE',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name MessageCenterData#postMessageCenterConversationsArchiveConversationRequestRecord
	     * @type {Function}
	     * @description Moves the given conversation from an inbox to an archive
	     
	     * @param {string} conversationId 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {Object} headers Map of custom header attributes.
	       
	     * @param {string} headers.X-BBSVC-Request-Id Uniquely identifies a request. It is utilized in order to support idempotency. In case of an uncertain state
	    of a response, a client is expected to be able to retry the request by providing the same request identifier.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * messageCenterData
	     *  .postMessageCenterConversationsArchiveConversationRequestRecord(conversationId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postMessageCenterConversationsArchiveConversationRequestRecord(conversationId, data, headers) {
	      var url = '' + baseUri + version + '/message-center/conversations/' + conversationId + '/archive-conversation-request';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name MessageCenterData#getMessageCenterConversationsDrafts
	     * @type {Function}
	     * @description Returns a list of drafts that have been created by the given user in response to the given conversation
	      
	     * @param {string} conversationId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?number} params.limit Represents a maximum number of drafts that are to be included into a response.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * messageCenterData
	     *  .getMessageCenterConversationsDrafts(conversationId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getMessageCenterConversationsDrafts(conversationId, params, headers) {
	      var url = '' + baseUri + version + '/message-center/conversations/' + conversationId + '/drafts';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name MessageCenterData#postMessageCenterConversationsDraftsRecord
	     * @type {Function}
	     * @description Creates a draft in response to the given conversation
	     
	     * @param {string} conversationId 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {Object} headers Map of custom header attributes.
	       
	     * @param {string} headers.X-BBSVC-Request-Id Uniquely identifies a request. It is utilized in order to support idempotency. In case of an uncertain state
	    of a response, a client is expected to be able to retry the request by providing the same request identifier.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * messageCenterData
	     *  .postMessageCenterConversationsDraftsRecord(conversationId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postMessageCenterConversationsDraftsRecord(conversationId, data, headers) {
	      var url = '' + baseUri + version + '/message-center/conversations/' + conversationId + '/drafts';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name MessageCenterData#getMessageCenterConversationsMessages
	     * @type {Function}
	     * @description Returns all messages that has been sent in relation to the given conversation
	      
	     * @param {string} conversationId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?number} params.from Represents an offset of the first result that is to be included into a response. It should be utilized in
	    order to control pagination. Eg: 3. (defaults to 0)
	       
	     * @param {?number} params.size Represents a maximum number of elements that are to be included into a response. It should be utilized in
	    order to control pagination. Eg: 20. (defaults to 10)
	       
	     * @param {?string} params.sort Represents a comma separated list of field names. Each name is to be used for sorting. The order of the
	    names is important as it determines the order in which the fields are utilized. That is, Nth field name
	    is used if and only if a value of (N-1)th field is found more than once. The sorting may be either
	    ascending or descending. This can be controlled by utilizing a special prefix. The prefix is a dash symbol
	    (i.e., "-"). If the prefix is provided, a result list will be ordered in a descending fashion, otherwise
	    it is going to be sorted in an ascending fashion. Eg: subject,-sentDateTime.
	       
	     
	     * @param {Object} headers Map of custom header attributes.
	       
	     * @param {number} headers.X-Total-Count Contains total number of messages in conversation.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * messageCenterData
	     *  .getMessageCenterConversationsMessages(conversationId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getMessageCenterConversationsMessages(conversationId, params, headers) {
	      var url = '' + baseUri + version + '/message-center/conversations/' + conversationId + '/messages';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name MessageCenterData#putMessageCenterConversationsDraftsRecord
	     * @type {Function}
	     * @description Updates content of the specified draft that was created in response to the given conversation
	      
	     * @param {string} conversationId 
	       
	     
	     * @param {string} draftId 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {Object} headers Map of custom header attributes.
	       
	     * @param {string} headers.X-BBSVC-Request-Id Uniquely identifies a request. It is utilized in order to support idempotency. In case of an uncertain state
	    of a response, a client is expected to be able to retry the request by providing the same request identifier.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * messageCenterData
	     *  .putMessageCenterConversationsDraftsRecord(conversationId, draftId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putMessageCenterConversationsDraftsRecord(conversationId, draftId, data, headers) {
	      var url = '' + baseUri + version + '/message-center/conversations/' + conversationId + '/drafts/' + draftId;
	
	      return httpClient({
	        method: 'PUT',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name MessageCenterData#postMessageCenterConversationsMessagesReadMessageRequestRecord
	     * @type {Function}
	     * @description Marks the given message as read
	     
	     * @param {string} conversationId 
	       
	     
	     * @param {string} messageId 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {Object} headers Map of custom header attributes.
	       
	     * @param {string} headers.X-BBSVC-Request-Id Uniquely identifies a request. It is utilized in order to support idempotency. In case of an uncertain state
	    of a response, a client is expected to be able to retry the request by providing the same request identifier.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * messageCenterData
	     *  .postMessageCenterConversationsMessagesReadMessageRequestRecord(conversationId, messageId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postMessageCenterConversationsMessagesReadMessageRequestRecord(conversationId, messageId, data, headers) {
	      var url = '' + baseUri + version + '/message-center/conversations/' + conversationId + '/messages/' + messageId + '/read-message-request';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @description
	     * Schema data. Keys of the object are names of the POST and PUT methods
	     *
	     * Note: The schema is not strictly a JSON schema. It is a whitelisted set of
	     * keys for each object property. The keys that are exposed are meant for validation
	     * purposes.
	     *
	     * The full list of *possible* keys for each property is:
	     * type, minimum, maximum, minLength, maxLength, pattern, enum, format, default,
	     * properties, items, minItems, maxItems, uniqueItems and required.
	     *
	     * See http://json-schema.org/latest/json-schema-validation.html for more details
	     * on the meaning of these keys.
	     *
	     * The "required" array from JSON schema is tranformed into a "required" boolean
	     * on each property. This is for ease of use.
	     *
	     * @name MessageCenterData#schemas
	     * @type {Object}
	     */
	    var schemas = {};
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postMessageCenterTopicsRecord method
	     *
	     * @name MessageCenterData#schemas.postMessageCenterTopicsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {}
	    }
	     */
	
	    schemas.postMessageCenterTopicsRecord = { "properties": {} };
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postMessageCenterDraftsRecord method
	     *
	     * @name MessageCenterData#schemas.postMessageCenterDraftsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {}
	    }
	     */
	
	    schemas.postMessageCenterDraftsRecord = { "properties": {} };
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postMessageCenterTopicsSubscriptionsRecord method
	     *
	     * @name MessageCenterData#schemas.postMessageCenterTopicsSubscriptionsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "externalUserId": {
	        "type": "string",
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postMessageCenterTopicsSubscriptionsRecord = { "properties": { "externalUserId": { "type": "string", "required": true } } };
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putMessageCenterDraftsRecord method
	     *
	     * @name MessageCenterData#schemas.putMessageCenterDraftsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {}
	    }
	     */
	
	    schemas.putMessageCenterDraftsRecord = { "properties": {} };
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postMessageCenterDraftsSendDraftRequestRecord method
	     *
	     * @name MessageCenterData#schemas.postMessageCenterDraftsSendDraftRequestRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {}
	    }
	     */
	
	    schemas.postMessageCenterDraftsSendDraftRequestRecord = { "properties": {} };
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postMessageCenterConversationsDraftsRecord method
	     *
	     * @name MessageCenterData#schemas.postMessageCenterConversationsDraftsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {}
	    }
	     */
	
	    schemas.postMessageCenterConversationsDraftsRecord = { "properties": {} };
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putMessageCenterConversationsDraftsRecord method
	     *
	     * @name MessageCenterData#schemas.putMessageCenterConversationsDraftsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {}
	    }
	     */
	
	    schemas.putMessageCenterConversationsDraftsRecord = { "properties": {} };
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
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
//# sourceMappingURL=data-bb-message-center-http-ng.js.map