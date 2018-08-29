(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("vendor-bb-uib-accordion"), require("ui-bb-confirm-ng"), require("ui-bb-draft-edit-ng"), require("ui-bb-i18n-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-notification-stripe-ng"), require("vendor-bb-uib-tabs"), require("ui-bb-load-more-ng"), require("ui-bb-indeterminate-ng"), require("vendor-bb-uib-dropdown"), require("ui-bb-loading-overlay-ng"), require("ui-bb-empty-state-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-messages-ng", ["vendor-bb-angular-ng-aria", "vendor-bb-uib-accordion", "ui-bb-confirm-ng", "ui-bb-draft-edit-ng", "ui-bb-i18n-ng", "ui-bb-substitute-error-ng", "ui-bb-notification-stripe-ng", "vendor-bb-uib-tabs", "ui-bb-load-more-ng", "ui-bb-indeterminate-ng", "vendor-bb-uib-dropdown", "ui-bb-loading-overlay-ng", "ui-bb-empty-state-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-messages-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("vendor-bb-uib-accordion"), require("ui-bb-confirm-ng"), require("ui-bb-draft-edit-ng"), require("ui-bb-i18n-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-notification-stripe-ng"), require("vendor-bb-uib-tabs"), require("ui-bb-load-more-ng"), require("ui-bb-indeterminate-ng"), require("vendor-bb-uib-dropdown"), require("ui-bb-loading-overlay-ng"), require("ui-bb-empty-state-ng"));
	else
		root["ext-bb-messages-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["vendor-bb-uib-accordion"], root["ui-bb-confirm-ng"], root["ui-bb-draft-edit-ng"], root["ui-bb-i18n-ng"], root["ui-bb-substitute-error-ng"], root["ui-bb-notification-stripe-ng"], root["vendor-bb-uib-tabs"], root["ui-bb-load-more-ng"], root["ui-bb-indeterminate-ng"], root["vendor-bb-uib-dropdown"], root["ui-bb-loading-overlay-ng"], root["ui-bb-empty-state-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_23__) {
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

	module.exports = __webpack_require__(17);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.hooks = exports.helpers = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(3);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _vendorBbUibAccordion = __webpack_require__(4);
	
	var _vendorBbUibAccordion2 = _interopRequireDefault(_vendorBbUibAccordion);
	
	var _vendorBbUibTabs = __webpack_require__(18);
	
	var _vendorBbUibTabs2 = _interopRequireDefault(_vendorBbUibTabs);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(14);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbNotificationStripeNg = __webpack_require__(15);
	
	var _uiBbNotificationStripeNg2 = _interopRequireDefault(_uiBbNotificationStripeNg);
	
	var _uiBbDraftEditNg = __webpack_require__(7);
	
	var _uiBbDraftEditNg2 = _interopRequireDefault(_uiBbDraftEditNg);
	
	var _uiBbConfirmNg = __webpack_require__(5);
	
	var _uiBbConfirmNg2 = _interopRequireDefault(_uiBbConfirmNg);
	
	var _uiBbLoadMoreNg = __webpack_require__(19);
	
	var _uiBbLoadMoreNg2 = _interopRequireDefault(_uiBbLoadMoreNg);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbIndeterminateNg = __webpack_require__(20);
	
	var _uiBbIndeterminateNg2 = _interopRequireDefault(_uiBbIndeterminateNg);
	
	var _vendorBbUibDropdown = __webpack_require__(21);
	
	var _vendorBbUibDropdown2 = _interopRequireDefault(_vendorBbUibDropdown);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(22);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(23);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _helpers = __webpack_require__(24);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _hooks = __webpack_require__(26);
	
	var _hooks2 = _interopRequireDefault(_hooks);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var helpers = exports.helpers = _helpers2.default; /**
	                                                    * @module ext-bb-messages-ng
	                                                    *
	                                                    * @description
	                                                    * Message center default extension.
	                                                    *
	                                                    * @example
	                                                    * <!-- messages widget model.xml -->
	                                                    * <property name="extension" viewHint="text-input,admin">
	                                                    *  <value type="string">ext-bb-messages-ng</value>
	                                                    * </property>
	                                                    */
	var hooks = exports.hooks = _hooks2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbSubstituteErrorNg2.default, _uiBbNotificationStripeNg2.default, _vendorBbUibAccordion2.default, _vendorBbUibTabs2.default, _uiBbDraftEditNg2.default, _uiBbConfirmNg2.default, _uiBbLoadMoreNg2.default, _uiBbI18nNg2.default, _uiBbIndeterminateNg2.default, _vendorBbUibDropdown2.default, _uiBbLoadingOverlayNg2.default, _uiBbEmptyStateNg2.default];

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(25);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var helpers = function helpers(context) {
	  var i18n = context.$filter('i18n');
	
	  var headers = [{
	    label: 'header.sender'
	  }, {
	    label: 'header.subject'
	  }, {
	    label: 'header.topic'
	  }, {
	    label: 'header.favorite',
	    hidden: true
	  }, {
	    label: 'header.date'
	  }, {
	    label: 'header.actions',
	    hidden: true
	  }];
	
	  /**
	   * @name Helpers#getTopicType
	   * @type {function}
	   *
	   * @description
	   * Helper to get topic type
	   *
	   * @param {string} topic Topic of conversation
	   * @returns {string} Type of topic
	   */
	  var getTopicType = function getTopicType(topic) {
	    return _constants.TopicType[topic] || _constants.TopicType.default;
	  };
	
	  /**
	   * @name Helpers#getTopicLabel
	   * @type {function}
	   *
	   * @description
	   * Helper to get topic label
	   *
	   * @param {string} topic List of topics
	   * @param {string} topic Topic of conversation
	   * @returns {string} Topic label
	   */
	  var getTopicLabel = function getTopicLabel() {
	    var topics = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var topic = arguments[1];
	    return (topics.find(function (item) {
	      return item.code === topic;
	    }) || {}).name || topic;
	  };
	  /**
	   * @name Helpers#isSelected
	   *
	   * @description
	   * Helper to know if the conversation is selected.
	   *
	   * @param {Object} conversation
	   * @param {Array} selected
	   * @type {function}
	   * @returns {boolean}
	   */
	  var isSelected = function isSelected(conversation, selected) {
	    return selected.indexOf(conversation) !== -1;
	  };
	
	  /**
	   * @name Helpers#isSelectedAllStrict
	   * @inner
	   *
	   * @description
	   * Strictly compare selected items ids and model list
	   *
	   * @param {Array} conversations
	   * @param {Array} selected
	   * @type {function}
	   * @returns {boolean}
	   */
	  var isSelectedAllStrict = function isSelectedAllStrict(conversations, selected) {
	    if (conversations.length !== selected.length) {
	      return false;
	    }
	
	    var matches = conversations.filter(function (item) {
	      return isSelected(item, selected);
	    });
	
	    return matches.length === conversations.length;
	  };
	
	  /**
	   * @name Helpers#isSelectedAll
	   *
	   * @description
	   * Helper to know if ALL conversations are selected.
	   *
	   * @param {array} conversations
	   * @param {Array} selected
	   * @type {function}
	   * @returns {boolean}
	   */
	  var isSelectedAll = function isSelectedAll(conversations, selected) {
	    return conversations && conversations.length > 0 && isSelectedAllStrict(conversations, selected);
	  };
	
	  /**
	   * @name Helpers#isSelectedPart
	   *
	   * @description
	   * Helper to know if at least one conversation is selected.
	   *
	   * @param {array} conversations
	   * @param {Array} selected
	   * @type {function}
	   * @returns {boolean}
	   */
	  var isSelectedPart = function isSelectedPart(conversations, selected) {
	    return selected.length > 0 && !isSelectedAll(conversations, selected);
	  };
	
	  /**
	   * @name Helpers#toggleSelection
	   *
	   * @description
	   * Helper to select/deselect single conversation.
	   *
	   * @param {Object} conversation
	   * @param {Array} selected
	   * @param {Object} event DOM click event
	   * @type {function}
	   */
	  var toggleSelection = function toggleSelection(conversation, selected, event) {
	    event.stopPropagation();
	
	    if (isSelected(conversation, selected)) {
	      selected.splice(selected.findIndex(function (item) {
	        return item === conversation;
	      }), 1);
	    } else {
	      selected.push(conversation);
	    }
	  };
	
	  /**
	   * @name Helpers#toggleAllConversations
	   *
	   * @description
	   * Helper to select/deselect all conversations loaded.
	   *
	   * @param {array} conversations
	   * @param {Array} selected
	   * @type {function}
	   */
	  var toggleAllConversations = function toggleAllConversations(conversations, selected) {
	    if (isSelectedAll(conversations, selected)) {
	      selected.splice(0, selected.length);
	    } else {
	      selected.push.apply(selected, _toConsumableArray(conversations.filter(function (item) {
	        return !isSelected(item, selected);
	      })));
	    }
	  };
	
	  /**
	   * @name Helpers#confirmConversationRemove
	   *
	   * @description
	   * Opens confirmation modal for remove conversation.
	   *
	   * @param {Object} conversation
	   * @param {Array} selected
	   * @param {Object} event DOM click event
	   * @type {function}
	   */
	  var confirmConversationRemove = function confirmConversationRemove(conversation, ext, event) {
	    event.stopPropagation();
	    Object.assign(ext, {
	      removeConfirmOpened: true,
	      conversationToRemove: conversation
	    });
	  };
	
	  return {
	    headers: headers,
	    getTopicType: getTopicType,
	    getTopicLabel: getTopicLabel,
	    isSelected: isSelected,
	    isSelectedAll: isSelectedAll,
	    isSelectedPart: isSelectedPart,
	    toggleSelection: toggleSelection,
	    toggleAllConversations: toggleAllConversations,
	    confirmConversationRemove: confirmConversationRemove,
	    messageFromError: function messageFromError(error) {
	      return _constants.ErrorMessage[error];
	    },
	    statusMessage: function statusMessage(statusObject) {
	      if (statusObject.i18n) {
	        return i18n(statusObject.i18n);
	      }
	
	      return statusObject.text || '';
	    }
	  };
	};
	
	exports.default = helpers;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ErrorMessage = exports.ErrorMessage = {
	  ERR_SEND_CONVERSATION_REPLY: 'label.error.conversation-reply-failed',
	  ERR_REMOVE_CONVERSATION: 'label.error.removed-failed'
	};
	
	var TopicType = exports.TopicType = {
	  ma: 'danger',
	  ln: 'success',
	  pym: 'warning',
	  default: 'primary'
	};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Hooks
	 * @type {object}
	 * @description Hook extensions for ext-bb-messages-ng extension
	 */
	exports.default = {
	
	  /**
	   * @name Hooks#transformConversations
	   * @description Hook extension function which appends newly loaded items to already existing
	   *              items. Such functionality is used together with ui-bb-load-more-ng component
	   *              in order to have a "Load more" button.
	   * @param {itemsWrapper} itemsWrapper a wrapper for newly loaded page items. The object will have
	   *                                    the following structure: {items: [], totalCount: 0}
	   * @param {object} currentItems list of current items displayed in the folder
	   * @returns {object} a wrapper object of items which contains newly loaded items appended to
	   *                   current items. Wrapper structure is as follow: {items: [], totalCount: 0}
	   * @type {function}
	   */
	  transformConversations: function transformConversations(itemsWrapper, currentItems) {
	    var result = {
	      items: (currentItems || []).slice(),
	      totalCount: itemsWrapper.totalCount
	    };
	
	    itemsWrapper.items.forEach(function (item) {
	      if (!result.items.some(function (existingItem) {
	        return item.id === existingItem.id;
	      })) {
	        result.items.push(Object.assign({}, item));
	      }
	    });
	
	    return result;
	  }
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-messages-ng.js.map