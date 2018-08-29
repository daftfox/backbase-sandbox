(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("model-bb-messages-ng"), require("lib-bb-widget-ng"), require("lib-bb-user-data-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-intent-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-messages-ng", ["vendor-bb-angular", "lib-bb-model-errors", "lib-bb-widget-extension-ng", "model-bb-messages-ng", "lib-bb-widget-ng", "lib-bb-user-data-ng", "lib-bb-event-bus-ng", "lib-bb-intent-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-messages-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("model-bb-messages-ng"), require("lib-bb-widget-ng"), require("lib-bb-user-data-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-intent-ng"));
	else
		root["widget-bb-messages-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-model-errors"], root["lib-bb-widget-extension-ng"], root["model-bb-messages-ng"], root["lib-bb-widget-ng"], root["lib-bb-user-data-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-intent-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_54__, __WEBPACK_EXTERNAL_MODULE_55__, __WEBPACK_EXTERNAL_MODULE_56__, __WEBPACK_EXTERNAL_MODULE_57__, __WEBPACK_EXTERNAL_MODULE_58__, __WEBPACK_EXTERNAL_MODULE_59__) {
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
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(53);

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(28);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(54);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _modelBbMessagesNg = __webpack_require__(55);
	
	var _modelBbMessagesNg2 = _interopRequireDefault(_modelBbMessagesNg);
	
	var _libBbWidgetNg = __webpack_require__(56);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbUserDataNg = __webpack_require__(57);
	
	var _libBbUserDataNg2 = _interopRequireDefault(_libBbUserDataNg);
	
	var _libBbEventBusNg = __webpack_require__(58);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbIntentNg = __webpack_require__(59);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _controller = __webpack_require__(60);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _draft = __webpack_require__(62);
	
	var _draft2 = _interopRequireDefault(_draft);
	
	var _conversation = __webpack_require__(63);
	
	var _conversation2 = _interopRequireDefault(_conversation);
	
	var _defaultHooks = __webpack_require__(64);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var hooksKey = 'widget-bb-messages-ng:hooks'; /**
	                                               * @module widget-bb-messages-ng
	                                               *
	                                               * @description
	                                               * Message Center Widget
	                                               */
	
	
	function run(widget, bus, bbIntents) {
	  bus.publish('cxp.item.loaded', {
	    id: widget.getId()
	  });
	
	  bbIntents.init(function () {});
	}
	
	exports.default = _vendorBbAngular2.default.module('widget-bb-messages-ng', [_modelBbMessagesNg2.default, _libBbWidgetNg2.default, _libBbUserDataNg2.default, _libBbEventBusNg2.default, _libBbIntentNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).controller('MessagesController', [
	// dependencies to inject
	
	// dependencies to inject
	_modelBbMessagesNg.modelMessagesKey, _libBbUserDataNg.bbUserDataServiceKey, hooksKey, '$q', _libBbWidgetNg.widgetKey,
	// dependencies to inject
	_libBbEventBusNg.eventBusKey,
	/* into */
	_controller2.default]).controller('DraftController', [_modelBbMessagesNg.modelMessagesKey, _libBbWidgetNg.widgetKey, _libBbEventBusNg.eventBusKey, '$q', _libBbIntentNg.bbIntentKey,
	/* into */
	_draft2.default]).controller('ConversationController', [_libBbEventBusNg.eventBusKey, _modelBbMessagesNg.modelMessagesKey, _libBbUserDataNg.bbUserDataServiceKey, '$q',
	// into
	_conversation2.default]).run([_libBbWidgetNg.widgetKey, _libBbEventBusNg.eventBusKey, _libBbIntentNg.bbIntentKey, run]).name;

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_54__;

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_55__;

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_56__;

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_57__;

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_58__;

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_59__;

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _errorMessages;
	
	exports.default = MessagesController;
	
	var _libBbModelErrors = __webpack_require__(31);
	
	var _constants = __webpack_require__(61);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, _constants.Text.ERROR_AUTH), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, _constants.Text.ERROR_CONNECTION), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, _constants.Text.ERROR_UNEXPECTED), _errorMessages);
	
	function MessagesController(model, userDataService, hooks, $q, widget, bus) {
	  var _this = this;
	
	  /**
	   * @name MessagesController
	   * @ngkey MessagesController
	   * @type {object}
	   * @description Controller for message conversations list.
	   */
	  var $ctrl = this;
	
	  /**
	   * @name MessagesController#getInitialConversationData
	   * @description Gets an object with initial state of conversation data.
	   * @type {function}
	   * @returns {ConversationData}
	   */
	  var getInitialConversationData = function getInitialConversationData() {
	    return {
	      items: null, // null means not loaded
	      totalCount: 0,
	      currentPage: 1,
	      loading: false
	    };
	  };
	
	  var onNewItemsLoaded = function onNewItemsLoaded(itemsWrapper) {
	    $ctrl.state.currentFolder.items = itemsWrapper.items;
	    $ctrl.state.currentFolder.totalCount = itemsWrapper.totalCount;
	  };
	
	  /**
	   * @name MessagesController#logGlobalError
	   * @description Registers global error.
	   * This blocks from using the widget.
	   * @param {object} modelError Error retuned from Data module
	   * @type {function}
	   */
	  var logGlobalError = function logGlobalError(modelError) {
	    var error = '';
	    if (modelError && modelError.code) {
	      error = errorMessages[modelError.code];
	    }
	
	    $ctrl.state.globalError = {
	      message: error
	    };
	  };
	
	  /**
	   * @name MessagesController#logStatus
	   * @description Registers action.
	   * This does not block the user form using other parts of the widget.
	   * @param {string} messageKey Message key
	   * @param {string} isError True if it is error status
	   * @type {function}
	   */
	  var logStatus = function logStatus(messageKey) {
	    var isError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	    $ctrl.state.status.data = { i18n: messageKey, isError: isError };
	  };
	  /**
	   * @name MessagesController#hideMailbox
	   * @description Turn mailbox display OFF
	   * @type {function}
	   * @inner
	   */
	  function hideMailbox() {
	    $ctrl.state.showMailbox = false;
	  }
	
	  /**
	   * @name MessagesController#showMailbox
	   * @description Turn mailbox display ON
	   * @type {function}
	   * @inner
	   */
	  function showMailbox() {
	    $ctrl.state.showMailbox = true;
	  }
	
	  var fetchData = function fetchData(loadFn) {
	    $ctrl.state.currentFolder.loading = true;
	
	    return loadFn().catch(function (err) {
	      bus.publish(_constants.Event.CONVERSATION_LOAD_FAILED, err);
	    }).finally(function () {
	      $ctrl.state.currentFolder.loading = false;
	      return;
	    });
	  };
	
	  /**
	   * @description Enriches conversations with sender field.
	   * If the sender parameter is undefined, conversation.otherUserName is mapped
	   * to the sender field.
	   *
	   * @param {Array<Conversation>} conversations array of conversations
	   * @param {string?} sender sender's name to be mapped to conversations.
	   * If not specified, conversation.otherUserName is used.
	   * @type {function}
	   */
	  var enrichWithSenderField = function enrichWithSenderField(conversations, sender) {
	    return conversations.map(function (conversation) {
	      var conversationSender = sender || conversation.otherUserName;
	      if (conversationSender) {
	        return Object.assign({
	          sender: conversationSender
	        }, conversation);
	      }
	      return conversation;
	    });
	  };
	
	  /**
	   * @description
	   * Loads items for given view. The number of returned items is always equal or lower than limit.
	   * This method can both be used with "ui-bb-load-more-ng" component.
	   * @name MessagesController#loadPage
	   * @param {string} view view for which the page should be loaded
	   * @param {number} [offset] offset, from which the items will be collected.
	   * @param {number} [limit] limit, which determines the maximum amount of returned items.
	   * @param {function} [finallyCallback] optional callback function to be executed after page is
	   *                                   loaded. It will be executed both on successful and failing
	   *                                   loads.
	   * @type {function}
	   */
	  var loadItems = function loadItems(view, offset, finallyCallback) {
	    var sliceConfig = {
	      from: offset,
	      size: $ctrl.config.pageSize
	    };
	
	    var loadFn = void 0;
	    var sender = void 0;
	    switch (view) {
	      case _constants.Views.inbox:
	        loadFn = model.loadConversations;
	        break;
	
	      case _constants.Views.archived:
	        loadFn = model.loadArchivedConversations;
	        break;
	
	      case _constants.Views.sent:
	        loadFn = model.loadSentConversations;
	        sender = $ctrl.currentUser.username;
	        break;
	
	      case _constants.Views.drafts:
	        loadFn = model.loadDrafts;
	        break;
	
	      default:
	        throw new _constants.Error('Unknown view ' + view + '. Unable to fetch data.');
	    }
	
	    var promise = fetchData(loadFn.bind(model, sliceConfig)).then(function (itemsWrapper) {
	      var items = enrichWithSenderField(itemsWrapper.conversations || itemsWrapper.drafts || [], sender);
	
	      return {
	        items: items,
	        totalCount: itemsWrapper.totalCount
	      };
	    }).then(function (itemsWrapper) {
	      return hooks.transformConversations(itemsWrapper, $ctrl.state.currentFolder.items);
	    }).then(onNewItemsLoaded.bind(_this));
	
	    if (finallyCallback) {
	      promise.finally(finallyCallback);
	    }
	
	    return promise;
	  };
	
	  /**
	   * @description
	   * Loads a page of items for given view. Pages are counted starting with 1.
	   * This method can both be used with "ui-bb-load-more-ng" and "uib-pagination" components.
	   * @name MessagesController#loadPage
	   * @param {string} view view for which the page should be loaded
	   * @param {number} [pageNo=1] Optional page number to load. Numbering starts to 1. Defaults to 1.
	   * @param {function} [finallyCallback] optional callback function to be executed after page is
	   *                                   loaded. It will be executed both on successful and failing
	   *                                   loads.
	   * @type {function}
	   */
	  var loadPage = function loadPage(view) {
	    var pageNo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	    var finallyCallback = arguments[2];
	
	    var offset = (pageNo - 1) * $ctrl.config.pageSize;
	    return loadItems(view, offset, finallyCallback).then(function () {
	      $ctrl.state.currentFolder.currentPage = pageNo;
	    });
	  };
	
	  /**
	   * @name MessagesController#fetchUnreadMessagesCount
	   * @description Counts user's unread messages and updates the model value
	   * @type {function}
	   * @returns {Promise.<{unreadMessagesCount: number}>}
	   *          a promise holding user's unread messages count
	   */
	  var fetchUnreadMessagesCount = function fetchUnreadMessagesCount() {
	    return model.getUnreadMessagesCount().then(function (countWrapper) {
	      $ctrl.state.unreadMessagesCount = countWrapper.unreadMessagesCount;
	      return countWrapper;
	    });
	  };
	
	  /**
	   * @description
	   * Switches mailbox view between different conversation lists.
	   * E.g. from Drafts to Archived.
	   * @name MessagesController#openFolder
	   * @param {string} view View for which folder should be revealed
	   * @type {function}
	   */
	  var openFolder = function openFolder(view) {
	    /* Clear selections */
	    $ctrl.state.showMailbox = true;
	    $ctrl.state.selectedConversations = [];
	    $ctrl.state.currentView = view;
	    $ctrl.state.currentFolder = getInitialConversationData();
	
	    /* Load items if not loaded */
	    if (!$ctrl.state.currentFolder.items) {
	      loadPage(view);
	    }
	  };
	
	  /**
	   * @name MessagesController#countUnreadItems
	   * @description
	   * Returns unread item count for user Inbox.
	   * Returns 0, if inbox is loading.
	   *
	   * @type {function}
	   * @returns {number}
	   */
	  var countUnreadItems = function countUnreadItems() {
	    return $ctrl.state.unreadMessagesCount;
	  };
	
	  /**
	   * @deprecated
	   * @description Handles conversation selection
	   * @name MessagesController#onItemSelected
	   * @param {Conversation} conversation Conversation to be selected
	   * @type {function}
	   */
	  function onItemSelected(conversation) {
	    // eslint-disable-next-line max-len, no-console
	    console.warn('DEPRECATED - This method will be removed in next major update. Use extensions helper method instead.');
	    $ctrl.state.selectedConversations.push(conversation);
	  }
	
	  /**
	   * @deprecated
	   * @description Handles conversation de-selection
	   * @name MessagesController#onItemDeselected
	   * @param {Conversation} conversation Conversation to be de-selected
	   * @type {function}
	   */
	  function onItemDeselected(conversation) {
	    // eslint-disable-next-line max-len, no-console
	    console.warn('DEPRECATED - This method will be removed in next major update. Use extensions helper method instead.');
	    $ctrl.state.selectedConversations.splice($ctrl.state.selectedConversations.indexOf(conversation), 1);
	  }
	
	  /**
	   * @name MessagesController#decrementUnreadMessagesCount
	   * @description Decrements unread messages count
	   * @type {function}
	   * @inner
	   */
	  var decrementUnreadMessagesCount = function decrementUnreadMessagesCount() {
	    if ($ctrl.state.unreadMessagesCount > 0) {
	      $ctrl.state.unreadMessagesCount--;
	    }
	  };
	
	  /**
	   * @description Removes given conversation
	   * @name MessagesController#removeItem
	   * @param {Object} conversation Converstation to be removed
	   * @type {function}
	   * @return {Promise} succesful promise if removal of given conversation succeeded
	   */
	  var removeItem = function removeItem(conversation) {
	    var single = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    var currentFolder = $ctrl.state.currentFolder;
	    var conversations = currentFolder.items;
	
	    currentFolder.totalCount--;
	    Object.assign(conversation, {
	      deleteInProgress: true,
	      selected: false
	    });
	
	    return model.removeConversation(conversation.id).then(function () {
	      conversations.splice(conversations.indexOf(conversation), 1);
	      if (conversation.containsUnread && conversation.status === 'inbox') {
	        decrementUnreadMessagesCount();
	      }
	
	      if (single) {
	        logStatus(_constants.Success.CONVERSATION_REMOVE);
	        showMailbox();
	      }
	    }).catch(function (err) {
	      currentFolder.totalCount++;
	      Object.assign(conversation, { deleteInProgress: false });
	
	      /*
	       * Event indicates that removal of a conversation has failed.
	       *
	       * <p> Payload contains server-side error </p>
	       * @event bb.event.messaging.delete.failed
	       * @type {string}
	       */
	      bus.publish(_constants.Event.CONVERSATION_DELETE_FAILED, err);
	
	      if (single) {
	        logStatus(_constants.Error.CONVERSATION_REMOVE, true);
	      }
	
	      throw err;
	    });
	  };
	
	  /**
	   * @deprecated
	   * Removes selected conversations.
	   * <p>Selected conversations are tracked in "selectedConversations" property in controller's
	   * state object.</p>
	   * @name MessagesController#removeSelectedItems
	   * @type {function}
	   * @return {Promise} succesful promise if removal of all selected conversations succeeded
	   */
	  function removeSelectedItems() {
	    // eslint-disable-next-line max-len, no-console
	    console.warn('DEPRECATED - This method will be removed in next major update. Use extensions helper method instead.');
	    var promises = [];
	
	    $ctrl.state.selectedConversations.forEach(function (selectedConversation) {
	      promises.push(removeItem(selectedConversation, false));
	
	      return;
	    });
	    $ctrl.state.selectedConversations = [];
	
	    return $q.all(promises).then(function () {
	      logStatus(_constants.Success.CONVERSATIONS_REMOVE);
	    }).catch(function () {
	      logStatus(_constants.Error.CONVERSATIONS_REMOVE, true);
	    });
	  }
	
	  /**
	   * @name MessagesController#bindEvents
	   * @description Adds subscriptions to bus events
	   *
	   * @inner
	   * @type {function}
	   */
	  function bindEvents() {
	    bus.subscribe(_constants.Event.CONVERSATION_CLOSE, showMailbox);
	    bus.subscribe(_constants.Event.CONVERSATION_OPEN, hideMailbox);
	    bus.subscribe(_constants.Event.CONVERSATION_LOAD_FAILED, logGlobalError);
	
	    // Error handling
	    bus.subscribe(_constants.Event.ERROR, function (error) {
	      logStatus(error, true);
	    });
	
	    // Success handling
	    bus.subscribe(_constants.Event.SUCCESS, function (message) {
	      logStatus(message);
	    });
	  }
	
	  /*
	   * @description Widget initialization logic.
	   * @type {function}
	   */
	  var $onInit = function $onInit() {
	    bindEvents();
	    userDataService.getUserData().then(function (userData) {
	      $ctrl.currentUser = userData;
	      $ctrl.userData = userData;
	
	      return model.getTopics();
	    }).then(function (topics) {
	      $ctrl.topics = Object.freeze(topics);
	    }).finally(function () {
	      $ctrl.state.initialLoading = false;
	    });
	  };
	
	  /**
	   * Opens given conversation item. Hides currently viewed mailbox and
	   * publishes event to open conversation.
	   * @name MessagesController#openItem
	   * @type {function}
	   * @param {Conversation} conversation conversation to open
	   * @fires bb.event.messaging.conversation.open
	   */
	  function openItem(conversation) {
	    if (conversation.containsUnread && conversation.status === 'inbox') {
	      decrementUnreadMessagesCount();
	    }
	    /*
	     * Event indicates that user has initiated opening of a single conversation.
	     * <p>Payload is of Conversation type</p>
	     * @event bb.event.messaging.conversation.open
	     * @type {string}
	     */
	    bus.publish(_constants.Event.CONVERSATION_OPEN, conversation);
	  }
	
	  Object.assign($ctrl, {
	    /**
	     * Config mapped from widget's preferences.
	     *
	     * <p>"showUnreadConversationsCount" is mapped from "showUnreadConversationsCount" preference
	     * </p>
	     * @name MessagesController#config
	     * @type {MessagesControllerConfig}
	     */
	    config: Object.freeze({
	      showUnreadConversationsCount: widget.getBooleanPreference('showUnreadConversationsCount'),
	      pageSize: widget.getLongPreference('pageSize')
	    }),
	
	    /**
	     *  Holds static data of controller.
	     *  @name MessagesController#statics
	     *  @type {MessagesControllerStatics}
	     */
	    statics: {
	      views: _constants.Views
	    },
	
	    /**
	     * @description Keeps state related data
	     * @name MessagesController#state
	     * @type {MessagesControllerState}
	     */
	    state: {
	      showMailbox: true,
	      currentView: _constants.Views.INBOX,
	      currentFolder: getInitialConversationData(),
	      folders: {
	        inbox: getInitialConversationData(),
	        sent: getInitialConversationData(),
	        archived: getInitialConversationData(),
	        drafts: getInitialConversationData()
	      },
	      selectedConversations: [],
	      error: null,
	      initialLoading: true,
	      status: {
	        dismissTime: 3,
	        data: null
	      }
	    },
	
	    openFolder: openFolder,
	    loadItems: loadItems,
	    loadPage: loadPage,
	    fetchUnreadMessagesCount: fetchUnreadMessagesCount,
	    countUnreadItems: countUnreadItems,
	    onItemSelected: onItemSelected,
	    onItemDeselected: onItemDeselected,
	    openItem: openItem,
	    removeSelectedItems: removeSelectedItems,
	    removeItem: removeItem,
	    /* Lifecycle hooks */
	    $onInit: $onInit
	  });
	}
	
	/**
	 * @typedef {Object} ConversationData
	 * @property {Array<Conversation>} items List of conversations. Null value means that
	 *                                       conversations haven't been loaded yet.
	 * @property {number} totalCount total count of items in the backend. Used to determine if there
	 *                               are more pages to load.
	 * @property {number} currentPage current page. Numbering starts at 1.
	 * @property {boolean} loading Flag indicating whether conversation data is currently being loaded
	 */
	
	/**
	 * @typedef {Object} MessagesControllerConfig
	 * @property {Number} subjectMaxLength Max allowed length for new draft subject.
	 * @property {Number} pageSize Number of items to be displayed in a single page load
	 */
	
	/**
	 * @typedef {Object} MessagesControllerState State of MessagesController
	 * @property {boolean} showMailbox Mailbox show/hide flag
	 * @property {string} currentView Tracks the state of which Folder the user has active
	 * @property {ConversationData} currentFolder Data of currently opened folder
	 * @property {Object<string, ConversationData>} folders Holds users mailbox data. Keys as folders
	 * @property {Array<Conversation>} selectedConversations An array of currently selected
	 *                                                       conversations
	 * @property {boolean} initialLoading True if initial loading is in progress.
	 * @property {string} error Recent error code, if any.
	 * @property {string} globalError Global error, if any.
	 * @property {number} unreadMessagesCount Unread messages count,
	                                          undefined if the call to backend failed.
	 */
	
	/**
	 * @typedef {Object} Conversation
	 * @property {string} id ID of the conversation
	 * @property {string} category category of the conversation
	 * @property {string} otherUser other user's LDAP user string
	 * @property {string} otherUserName other user's name
	 * @property {string} sender name of the conversation sender
	 * @property {string} body body of last message in the conversation
	 * @property {string} subject conversation subject
	 * @property {boolean} containsUnread flag indicating whether the conversation has unread messages
	 * @property {boolean} important importance flag
	 * @property {number} numberOfMessages count of number of messages in the conversation
	 * @property {string} timestamp last modification time
	 */
	
	/**
	 * @typedef {Object} MessagesControllerStatics
	 * @property {Views} views views supported by controller
	 */

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description Different views the user can toggle between
	 * @name Views
	 * @type {Views}
	 */
	var Views = exports.Views = {
	  inbox: 'inbox',
	  sent: 'sent',
	  archived: 'archived',
	  drafts: 'drafts'
	};
	
	/**
	 * @description
	 * Widget static keys for error messages
	 *
	 * @name Error
	 * @type {object}
	 */
	var Error = exports.Error = {
	  DRAFT_SAVE: 'error.draft.save',
	  DRAFT_SENT: 'error.draft.send',
	  CONVERSATION_SAVE_REPLY: 'error.conversation.save-reply',
	  CONVERSATION_SEND_REPLY: 'error.conversation.send-reply',
	  CONVERSATION_REMOVE: 'error.conversation.remove',
	  CONVERSATIONS_REMOVE: 'error.conversations.remove'
	};
	
	/**
	 * @description
	 * Widget static keys for success messages
	 *
	 * @name Success
	 * @type {object}
	 */
	var Success = exports.Success = {
	  DRAFT_SENT: 'success.draft.send',
	  CONVERSATION_SEND_REPLY: 'success.conversation.send-reply',
	  CONVERSATION_REMOVE: 'success.conversation.remove',
	  CONVERSATIONS_REMOVE: 'success.conversations.remove'
	};
	
	/**
	 * @description
	 * Widget static texts for the template
	 *
	 * @name Text
	 * @type {object}
	 */
	var Text = exports.Text = {
	  ERROR_AUTH: 'error.auth',
	  ERROR_CONNECTION: 'error.connection',
	  ERROR_UNEXPECTED: 'error.unexpected'
	};
	
	/**
	 * Widget events enum
	 * @name Event
	 * @type {Object}
	 */
	var Event = exports.Event = {
	  /**
	   * @event bb.event.messaging.error
	   * @description Event payload is a string with error code.
	   * @type {string}
	   */
	  ERROR: 'bb.event.messaging.error',
	  /**
	   * @event bb.event.messaging.success
	   * @description Event payload is a string with success code.
	   * @type {string}
	   */
	  SUCCESS: 'bb.event.messaging.success',
	
	  DRAFT_CREATE: 'bb.event.messaging.draft.create',
	  DRAFT_SENT: 'bb.event.messaging.draft.sent',
	  DRAFT_DISMISS: 'bb.event.messaging.draft.dismiss',
	
	  CONVERSATION_OPEN: 'bb.event.messaging.conversation.open',
	  CONVERSATION_CLOSE: 'bb.event.messaging.conversation.close',
	  CONVERSATION_DELETE_FAILED: 'bb.event.messaging.delete.failed',
	  CONVERSATION_LOAD_FAILED: 'bb.event.messaging.load.failed'
	};
	
	/**
	 * @description
	 * Widget intents to be handled
	 *
	 * @name IntentsKeys
	 * @type {object}
	 */
	var IntentsKeys = exports.IntentsKeys = {
	  MESSAGE_CREATE: 'go.message.create'
	};
	
	/**
	 * Contains dynamic properties with view names. Example: {inbox: "inbox"}.
	 * @typedef {Object} Views
	 */

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = DraftController;
	
	var _constants = __webpack_require__(61);
	
	function DraftController(model, widget, bus, $q, bbIntents) {
	  /**
	   * @name DraftController
	   * @ngkey DraftController
	   * @type {object}
	   * @description Draft Controller is responsible for draft creation and sending.
	   */
	  var $draftCtrl = this;
	
	  /**
	   * @description Handles logic after draft has been sent
	   * @name DraftController#afterSent
	   * @type {function}
	   * @fires bb.event.messaging.draft.sent
	   * @fires bb.event.messaging.success
	   * @inner
	   */
	  var afterSent = function afterSent() {
	    bus.publish(_constants.Event.DRAFT_SENT);
	    bus.publish(_constants.Event.SUCCESS, _constants.Success.DRAFT_SENT);
	    $draftCtrl.state.opened = false;
	  };
	
	  /**
	   * @description Sends out given draft letter
	   * @name DraftController#send
	   * @param {Draft} pDraft Draft letter to send
	   * @fires bb.event.messaging.draft.sent
	   * @fires bb.event.messaging.error
	   * @type {function}
	   * @return {Promise} succesful promise if draft has been sent successfully
	   */
	  var send = function send(pDraft) {
	    var draft = Object.assign({}, pDraft);
	    var promise = !draft.id ? model.createDraft(draft) : $q.when(draft);
	
	    return promise.then(function (response) {
	      draft.id = response.id;
	      model.sendDraft(draft.id).then(afterSent).catch(function () {
	        bus.publish(_constants.Event.ERROR, _constants.Error.DRAFT_SAVE);
	      });
	    }).catch(function () {
	      $draftCtrl.sendMessageError = true;
	      bus.publish(_constants.Event.ERROR, _constants.Error.DRAFT_SAVE);
	      return;
	    });
	  };
	
	  /**
	   * @description Cancel draft editing
	   * @name DraftController#dismiss
	   * @type {function}
	   * @fires bb.event.messaging.draft.dismiss
	   */
	  var dismiss = function dismiss() {
	    /**
	     * @event bb.event.messaging.draft.dismiss
	     * @description Event fired when user dismisses draft creation. Event carries no payload.
	     * @type {string}
	     */
	    bus.publish(_constants.Event.DRAFT_DISMISS);
	    $draftCtrl.state.opened = false;
	  };
	
	  /**
	   * @description Initiate draft creation/editing
	   * @name DraftController#open
	   * @type {function}
	   * @fires bb.event.messaging.draft.create
	   */
	  var open = function open() {
	    /**
	     * @event bb.event.messaging.draft.create
	     * @description Event fired when user opens draft creation. Event carries no payload.
	     * @type {string}
	     */
	    bus.publish(_constants.Event.DRAFT_CREATE);
	    $draftCtrl.state.opened = true;
	  };
	
	  /*
	   * @description Widget initialization logic.
	   * @type {function}
	   */
	  var $onInit = function $onInit() {
	    bbIntents.handle(_constants.IntentsKeys.MESSAGE_CREATE, function () {
	      open();
	    });
	  };
	
	  Object.assign($draftCtrl, {
	
	    /**
	     * Config mapped from widget's preferences.
	     *
	     * <p>"subjectMaxLength" is mapped from "subjectMaxLength" preference</p>
	     * @name DraftController#config
	     * @type {DraftControllerConfig}
	     */
	    config: Object.freeze({
	      subjectMaxLength: widget.getStringPreference('subjectMaxLength')
	    }),
	
	    /**
	     * Holds controller's state
	     * @name DraftController#state
	     * @type {DraftControllerState}
	     */
	    state: {
	      opened: false
	    },
	
	    open: open,
	    dismiss: dismiss,
	    send: send,
	    /* Lifecycle hooks */
	    $onInit: $onInit
	  });
	}
	
	/**
	 * @typedef {Object} DraftControllerState
	 * @property {boolean} opened indicates whether draft editing is currently opened
	 */
	
	/**
	 * @typedef {Object} DraftControllerConfig
	 * @property {number} subjectMaxLength Max allowed length for new draft subject.
	 */
	/**
	 * @typedef {Object} Draft
	 * @property {string} body
	 * @property {string} subject
	 * @property {string} recipient LDAP X500Principle representation of recipient
	 * @property {string} category category of the draft
	 * @property {boolean} important flag indicating importance of the message
	 * @property {object} additions API extension additions
	 */

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ConversationController;
	
	var _constants = __webpack_require__(61);
	
	function ConversationController(bus, model, userDataService, Promise) {
	  /**
	   * Conversation controller handles logic of viewing and operating a list of
	   * messages in a single conversation.
	   * @name ConversationController
	   * @ngkey ConversationController
	   * @type {Object}
	   */
	  var $ctrl = this;
	
	  /**
	   * The currently opened conversation
	   * @name ConversationController#conversation
	   * @type {Conversation}
	   */
	  this.conversation = null;
	
	  /**
	   * Messages of currently opened conversation.
	   * @name ConversationController#messages
	   * @type {Array<Message>}
	   */
	  this.messages = [];
	
	  /**
	   * Reply draft.
	   * @name ConversationController#draft
	   * @type {Draft}
	   */
	  this.draft = {};
	
	  var getMessageText = function getMessageText(content) {
	    return content.replace(/<[^>]+>/ig, ' ');
	  };
	
	  /**
	   * @description
	   * Save draft body to property like initial value of draft body
	   * @name ConversationController#setDraftInitialBody
	   * @type {function}
	   * @inner
	   * @return {Object} Draft object
	   */
	  var setDraftInitialBody = function setDraftInitialBody(draft) {
	    return Object.assign({}, draft, { initialBody: draft.body });
	  };
	
	  function fetchMessages(conversation) {
	    $ctrl.messages = [];
	    return model.loadMessages(conversation.id).then(function (messages) {
	      return messages.map(function (msg) {
	        return Object.assign({}, msg, { text: getMessageText(msg.body) });
	      });
	    }).then(function (messages) {
	      $ctrl.messages = messages;
	      return messages;
	    });
	  }
	
	  function fetchDrafts(conversation) {
	    $ctrl.draft = {};
	    return model.getLatestConversationDraft(conversation.id).then(function (draft) {
	      $ctrl.draft = setDraftInitialBody(draft);
	      return;
	    });
	  }
	
	  function markConversationMessagesAsRead(pConversation, messages) {
	    var conversation = pConversation;
	    return model.markUnreadMessagesAsRead(conversation, messages).then(function () {
	      conversation.containsUnread = false;
	    });
	  }
	
	  /**
	   * Presents messages of the conversation for viewing. Also, marks unread messages of
	   * conversation as read.
	   * @name ConversationController#viewConversation
	   * @type {function}
	   * @param {Conversation} conversation conversation to view
	   * @return {Promise} a succesful promise when all data has been loaded
	   */
	  function viewConversation(conversation) {
	    $ctrl.conversation = conversation;
	    $ctrl.state.open = true;
	
	    var fetchMessagesPromise = fetchMessages(conversation);
	    var markMessagesAsRead = fetchMessagesPromise.then(function (messages) {
	      return markConversationMessagesAsRead(conversation, messages);
	    });
	
	    return Promise.all([markMessagesAsRead, fetchDrafts(conversation)]);
	  }
	
	  /**
	   * Closes conversation view.
	   * @name ConversationController#close
	   * @type {function}
	   * @fires bb.event.messaging.conversation.close
	   */
	  function close() {
	    $ctrl.state.open = false;
	    $ctrl.conversation = null;
	    $ctrl.messages = [];
	
	    /**
	     * Event is fired when user closes single conversation view. Event carries no payload.
	     * @event bb.event.messaging.conversation.close
	     * @type {string}
	     */
	    bus.publish(_constants.Event.CONVERSATION_CLOSE);
	  }
	
	  function $onInit() {
	    bus.subscribe(_constants.Event.CONVERSATION_OPEN, viewConversation);
	
	    userDataService.getUserData().then(function (userData) {
	      $ctrl.currentUser = userData;
	    });
	  }
	
	  /**
	   * @description Handles logic after draft has been sent
	   * @name ConversationController#afterSent
	   * @type {function}
	   * @fires bb.event.messaging.success
	   * @inner
	   */
	  var afterSent = function afterSent() {
	    return bus.publish(_constants.Event.SUCCESS, _constants.Success.CONVERSATION_SEND_REPLY);
	  };
	
	  /**
	   * Sends out a draft as reply to the given conversation
	   * @name ConversationController#sendReply
	   * @param {string} conversationId ID of the conversation to which the draft should be sent
	   * as a reply
	   * @type {function}
	   * @param {Draft} draft the draft to send
	   * @fires bb.event.messaging.error
	   * @return {Promise} a successful promise of reply draft has been sent successfully
	   */
	  function sendReply(conversationId, draft) {
	    var draftId = draft.id;
	    var saveDraft = model.saveConversationDraft(conversationId, draft);
	
	    if (draftId === undefined) {
	      saveDraft.then(function (idHolder) {
	        draftId = idHolder.id;
	        return;
	      });
	    }
	
	    return saveDraft.then(function () {
	      $ctrl.messages.push({
	        id: draftId,
	        senderName: $ctrl.currentUser.username,
	        body: draft.body,
	        deliveredOn: new Date().toISOString(),
	        text: getMessageText(draft.body)
	      });
	
	      $ctrl.draft = {};
	      return;
	    }).then(function () {
	      model.sendDraft(draftId, draft.body).then(afterSent).catch(function () {
	        $ctrl.messages = $ctrl.messages.filter(function (message) {
	          return message.id !== draftId;
	        });
	        bus.publish(_constants.Event.ERROR, _constants.Error.CONVERSATION_SEND_REPLY);
	      });
	    }).catch(function () {
	      bus.publish(_constants.Event.ERROR, _constants.Error.CONVERSATION_SAVE_REPLY);
	    });
	  }
	
	  /**
	   * Toggles reply form block
	   * @name ConversationController#toggleReplyForm
	   * @type {function}
	   */
	  var toggleReplyForm = function toggleReplyForm() {
	    if ($ctrl.state.replyForm.open) {
	      $ctrl.draft.body = $ctrl.draft.initialBody;
	    }
	
	    $ctrl.state.replyForm.open = !$ctrl.state.replyForm.open;
	  };
	
	  Object.assign($ctrl, {
	    viewConversation: viewConversation,
	    close: close,
	    sendReply: sendReply,
	    toggleReplyForm: toggleReplyForm,
	    /**
	     * Holds state of controller.
	     * @name ConversationController#state
	     * @type {ConversationControllerState}
	     */
	    state: {
	      open: false,
	      replyForm: {
	        open: false
	      }
	    },
	
	    $onInit: $onInit
	  });
	}
	
	/**
	 * @typedef {Object} ConversationControllerState
	 * @property {boolean} open flag inidicating whether single conversation view is open
	 * @property {boolean} replyForm.open flag inidicating whether reply form is open
	 */
	
	/**
	 * @typedef {Object} Message
	 * @property {string} id ID of the message
	 * @property {string} subject subject of the conversation the message belongs to
	 * @property {string} body message body
	 * @property {string} category category of the conversation the message belongs to
	 * @property {string} status message status (READ, DELIVERED, etc)
	 * @property {string} sender message sender's X500Principle string representation
	 * @property {string} senderName message sender's name
	 * @property {string} deliveredOn message's delivery timestamp
	 * @property {boolean} important flag indicating importance of conversation the message belongs to
	 */

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.transformConversations = transformConversations;
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-bb-messages-ng
	 */
	
	/**
	 * @description
	 * A hook which will be called when a page of items is loaded.
	 * This hook can be used to customize how the new page is displayed.
	 * For example, if "Show more" functionality used for paging,
	 * then this hook should just append new items to current items.
	 * As another example, if pagination component is used,
	 * this hook should just return the new items.
	 * @name Hooks#transformConversations
	 * @param {itemsWrapper} itemsWrapper a wrapper for newly loaded page items. The object will have
	 *                                    the following structures: {items: [], totalCount: 0}
	 * @param {object} currentItems list of current items displayed in the folder
	 * @returns {object} a wrapper object of items which will be used as items to display in current
	 *                   folder. Object structure should be as follow: {items: [], totalCount: 0}
	 * @type {function}
	 */
	function transformConversations(itemsWrapper) {
	  return itemsWrapper;
	}
	
	exports.default = transformConversations;

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-messages-ng.js.map