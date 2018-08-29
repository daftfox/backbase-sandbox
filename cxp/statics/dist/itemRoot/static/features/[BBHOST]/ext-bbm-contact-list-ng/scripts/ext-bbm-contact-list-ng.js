(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("ui-bb-avatar-ng"), require("ui-bbm-scroll-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-contact-list-ng", ["ui-bb-i18n-ng", "ui-bb-avatar-ng", "ui-bbm-scroll-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-contact-list-ng"] = factory(require("ui-bb-i18n-ng"), require("ui-bb-avatar-ng"), require("ui-bbm-scroll-ng"));
	else
		root["ext-bbm-contact-list-ng"] = factory(root["ui-bb-i18n-ng"], root["ui-bb-avatar-ng"], root["ui-bbm-scroll-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_33__) {
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

	module.exports = __webpack_require__(32);

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.intents = exports.helpers = exports.events = undefined;
	
	var _uiBbAvatarNg = __webpack_require__(20);
	
	var _uiBbAvatarNg2 = _interopRequireDefault(_uiBbAvatarNg);
	
	var _uiBbmScrollNg = __webpack_require__(33);
	
	var _uiBbmScrollNg2 = _interopRequireDefault(_uiBbmScrollNg);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _events = __webpack_require__(34);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _helpers = __webpack_require__(36);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _intents = __webpack_require__(37);
	
	var _intents2 = _interopRequireDefault(_intents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bbm-contact-list-ng
	 *
	 * @description
	 * Mobile extension for a contact list in the Contacts widget.
	 *
	 * @example
	 * <!-- Contact widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *   <value type="string">ext-bbm-contact-list-ng</value>
	 * </property>
	 */
	var events = exports.events = _events2.default;
	var helpers = exports.helpers = _helpers2.default;
	var intents = exports.intents = _intents2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbAvatarNg2.default, _uiBbI18nNg2.default, _uiBbmScrollNg2.default];

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_33__;

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(35);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * Defines the min length for the search query
	 * @type {number}
	 * @inner
	 */
	var SEARCH_MIN_QUERY = 2;
	
	/**
	 * Defines the debouncing time for a search to happen (in ms)
	 * @type {number}
	 * @inner
	 */
	var SEARCH_INPUT_THRESHOLD = 1000;
	
	/**
	 * @description
	 * Throttles some action by a given delay (threshold)
	 *
	 * @name throttle
	 *
	 * @param {function} fn - function to execute
	 * @param {int} threshold - delay in execution (in ms)
	 * @type {function}
	 * @returns {function}
	 * @inner
	 */
	var throttle = function throttle(fn, threshold) {
	  var last = void 0;
	  var timeout = void 0;
	
	  return function throttledFn() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var context = this;
	    var now = Date.now();
	    var timeDifference = now - last;
	
	    if (last && timeDifference < threshold) {
	      clearTimeout(timeout);
	      timeout = setTimeout(function () {
	        last = now;
	        fn.apply(context, args);
	      }, threshold - timeDifference);
	    } else {
	      last = now;
	      fn.apply(context, args);
	    }
	  };
	};
	
	exports.default = function (_ref) {
	  var _withNativeEvents, _withNativeEvents2;
	
	  var service = _ref.service,
	      withNativeEvents = _ref.withNativeEvents,
	      intents = _ref.intents;
	
	  /**
	   * @description
	   * Throttles and handles the search of contacts for the given search query
	   *
	   * @name onSearchInput
	   * @type {function}
	   * @inner
	   */
	  var onSearchInput = throttle(function (value) {
	    if (value.length >= SEARCH_MIN_QUERY) {
	      service.setSearchQuery(value);
	    }
	  }, SEARCH_INPUT_THRESHOLD);
	
	  return withNativeEvents((_withNativeEvents = {}, _defineProperty(_withNativeEvents, _constants.ToolbarButtonEvent.CREATE_CONTACT, function () {
	    intents.createContact();
	  }), _defineProperty(_withNativeEvents, _constants.ToolbarButtonEvent.SEARCH_CONTACT, function (_ref2) {
	    var detail = _ref2.detail;
	
	    if (detail.action === _constants.SearchActions.INPUT) {
	      onSearchInput(detail.text);
	    } else if (detail.action === _constants.SearchActions.CANCEL) {
	      service.cancelSearch();
	    }
	  }), _withNativeEvents), (_withNativeEvents2 = {}, _defineProperty(_withNativeEvents2, _constants.Event.CONTACT_CREATE_DONE, function () {
	    service.reloadContacts();
	  }), _defineProperty(_withNativeEvents2, _constants.Event.CONTACT_UPDATE_DONE, function () {
	    service.reloadContacts();
	  }), _defineProperty(_withNativeEvents2, _constants.Event.CONTACT_DELETE_DONE, function () {
	    service.reloadContacts();
	  }), _withNativeEvents2));
	};

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Defines widget search action enumeration
	 * @enum {string}
	 * @type {object}
	 * @inner
	 */
	var SearchActions = exports.SearchActions = {
	  CANCEL: 'cancel',
	  INPUT: 'input'
	};
	
	/**
	 * Toolbar button events enum
	 * @name ToolbarButtonEvent
	 * @type {Object}
	 * @inner
	 */
	var ToolbarButtonEvent = exports.ToolbarButtonEvent = {
	  CREATE_CONTACT: 'bb.action.contact.create',
	  SEARCH_CONTACT: 'bb.event.contact.search'
	};
	
	/**
	 * Intents enum
	 * @name Intent
	 * @type {Object}
	 * @inner
	 */
	var Intent = exports.Intent = {
	  CREATE_CONTACT: 'intent.rbm.contact.create',
	  SHOW_CONTACT_DETAILS: 'intent.rbm.contact.details.show',
	  SHOW_CONTACT_LIST: 'intent.rbm.contact.list.show'
	};
	
	/**
	 * Pubsub events
	 * @name Event
	 * @type {Object}
	 * @inner
	 */
	var Event = exports.Event = {
	  /**
	   * A contact was created on the server
	   * @event bb.event.contact.create.done
	   * @type {string}
	   */
	  CONTACT_CREATE_DONE: 'bb.event.contact.create.done',
	
	  /**
	   * A contact was updated on the server
	   * @event bb.event.contact.update.done
	   * @type {string}
	   */
	  CONTACT_UPDATE_DONE: 'bb.event.contact.update.done',
	
	  /**
	   * A contact was deleted on the server
	   * @event bb.event.contact.delete.done
	   * @type {string}
	   */
	  CONTACT_DELETE_DONE: 'bb.event.contact.delete.done'
	};

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @param {string} strA
	 * @param {string} strB
	 * @returns {number}
	 * @inner
	 */
	var compareStr = function compareStr(strA, strB) {
	  if (strA > strB) {
	    return 1;
	  } else if (strA < strB) {
	    return -1;
	  }
	  return 0;
	};
	
	/**
	 * @param {Object} contact
	 * @returns {string}
	 * @private
	 */
	var getContactSortStr = function getContactSortStr(contact) {
	  return contact.name.toLowerCase();
	};
	
	/**
	 * Returns first letter of the Contact's name, uppercased
	 * @param  {Object} contact Contact Object
	 * @return {string} Contact's first letter
	 * @inner
	 */
	var getContactNameChar = function getContactNameChar(contact) {
	  return contact.name ? contact.name.charAt(0).toUpperCase() : null;
	};
	
	/**
	 * @param {Array<Object>} contacts
	 * @returns {Object}
	 * @inner
	 */
	function groupContacts(contacts) {
	  return contacts.reduce(function (result, contact) {
	    var char = getContactNameChar(contact);
	
	    if (!result[char]) {
	      // Allow mutation of a local empty Object
	      // See: https://github.com/airbnb/javascript/issues/719
	      /* eslint-disable no-param-reassign */
	      result[char] = [];
	      /* eslint-enable no-param-reassign */
	    }
	
	    result[char].push(contact);
	
	    return result;
	  }, {});
	}
	
	/**
	 * @name getContactsToDisplay
	 * @description
	 * Processes the list of contacts.
	 *
	 * @type {function}
	 * @param {Array<Object>} contacts The original contacts from the API
	 * @returns {Array<Object>} The list of processed contacts
	 */
	var getContactsToDisplay = function getContactsToDisplay(contacts) {
	  var groups = groupContacts(contacts);
	
	  return Object.keys(groups).sort(compareStr).map(function (char) {
	    return {
	      contacts: groups[char].sort(function (contactA, contactB) {
	        return compareStr(getContactSortStr(contactA), getContactSortStr(contactB));
	      }),
	      char: char
	    };
	  });
	};
	
	/**
	 * @description
	 * Helpers for ext-bbm-contacts-list-ng.
	 *
	 * @name Helpers
	 * @type {Object}
	 */
	
	exports.default = function (_ref) {
	  var service = _ref.service,
	      stateContainer = _ref.stateContainer,
	      intents = _ref.intents;
	
	  /**
	   * @description
	   * Returns the `contacts` from the state
	   *
	   * @name Helpers#getContacts
	   * @type {function}
	   *
	   * @returns {Array} contacts List of contacts from the state
	   */
	  var getContacts = stateContainer.createSelector(function (state) {
	    return getContactsToDisplay(state.contacts.data);
	  });
	
	  /**
	   * @description
	   * Returns the `contacts` from the state
	   *
	   * @name Helpers#getContacts
	   * @type {function}
	   *
	   * @returns {Array} contacts List of contacts from the state
	   */
	  var getSearchContacts = stateContainer.createSelector(function (state) {
	    return state.search.data;
	  });
	
	  /**
	   * @description
	   * Returns true if there are `contacts` on the state. Otherwise returns false.
	   *
	   * @name Helpers#hasContacts
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var hasContacts = stateContainer.createSelector(function (state) {
	    return Boolean(state.contacts.data && state.contacts.data.length > 0);
	  });
	
	  /**
	   * @description
	   * Returns true if there are searched `contacts` on the state. Otherwise returns false.
	   *
	   * @name Helpers#hasSearchContacts
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var hasSearchContacts = stateContainer.createSelector(function (state) {
	    return Boolean(state.search.data && state.search.data.length > 0);
	  });
	
	  /**
	   * @description
	   * Returns true if the preference is set to show an avatar. Otherwise returns false.
	   *
	   * @name Helpers#showAvatar
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var showAvatar = stateContainer.createSelector(function (state) {
	    return Boolean(state.showAvatar);
	  });
	
	  /**
	   * @description
	   * Returns true if the user is not searching. Otherwise returns false.
	   *
	   * @name Helpers#showAvatar
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var showList = stateContainer.createSelector(function (state) {
	    return Boolean(!state.searching);
	  });
	
	  /**
	   * @description
	   * Checks for initial loading.
	   *
	   * @name Helpers#showLoadingState
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var showLoadingState = stateContainer.createSelector(function (state) {
	    return Boolean(state.contacts.loading && !state.contacts.data && !state.contacts.error);
	  });
	
	  /**
	   * @description
	   * Determines if the empty state view should be shown
	   *
	   * @name Helpers#showEmptyState
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var showEmptyState = stateContainer.createSelector(function (state) {
	    return Boolean(!state.searching && Boolean(state.contacts.data && !state.contacts.data.length > 0) && !state.contacts.loading && !state.contacts.error);
	  });
	
	  /**
	   * @description
	   * Determines if the error state view should be shown
	   *
	   * @name Helpers#showErrorState
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var showErrorState = stateContainer.createSelector(function (state) {
	    return Boolean(!state.searching && !state.contacts.loading && state.contacts.error);
	  });
	
	  /**
	   * @description
	   * Checks for the load more's loading state.
	   *
	   * @name Helpers#showLoadMoreLoading
	   * @type {function}
	   *
	   * @return {boolean}
	   */
	  var showLoadMoreLoading = stateContainer.createSelector(function (state) {
	    return Boolean(state.contacts.loading && state.contacts.data);
	  });
	
	  /**
	   * @description
	   * Determines if the search view should be shown
	   *
	   * @name Helpers#showSearch
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var showSearch = stateContainer.createSelector(function (state) {
	    return Boolean(state.searching);
	  });
	
	  /**
	   * @description
	   * Determines if the search error view should be shown
	   *
	   * @name Helpers#showSearchErrorState
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var showSearchErrorState = stateContainer.createSelector(function (state) {
	    return Boolean(state.searching && state.search.error && !state.search.loading);
	  });
	
	  /**
	   * @description
	   * Determines if the search empty state view should be shown
	   *
	   * @name Helpers#showSearchEmptyState
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var showSearchEmptyState = stateContainer.createSelector(function (state) {
	    return Boolean(state.searching && Boolean(state.search.data && !state.search.data.length > 0) && !state.search.error && !state.search.loading);
	  });
	
	  /**
	   * @description
	   * Determines if the search empty state view should be shown
	   *
	   * @name Helpers#showSearchLoadingState
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var showSearchLoadingState = stateContainer.createSelector(function (state) {
	    return Boolean(state.searching && state.search.loading && !state.search.data && !state.search.error);
	  });
	
	  /**
	   * @description
	   * Checks for the load more's loading state.
	   *
	   * @name Helpers#showSearchLoadMoreLoading
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var showSearchLoadMoreLoading = stateContainer.createSelector(function (state) {
	    return Boolean(state.searching && state.search.loading && state.search.data);
	  });
	
	  /**
	   * @description
	   * Checks if the load more message should be visible.
	   *
	   * @name Helpers#showLoadMore
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var showLoadMore = function showLoadMore() {
	    return showLoadMoreLoading();
	  };
	
	  /**
	   * @description
	   * Checks if the load more message should be visible.
	   *
	   * @name Helpers#showSearchLoadMore
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var showSearchLoadMore = function showSearchLoadMore() {
	    return showSearchLoadMoreLoading();
	  };
	
	  /**
	   * @description
	   * Sets the selected contact and fires the intent to show the contact details
	   *
	   * @name Helpers#selectContact
	   * @type {function}
	   * @param {Object} contact The contact to select
	   */
	  var selectContact = function selectContact(contact) {
	    service.setSelectedContact(contact);
	    return intents.showContactDetails(contact);
	  };
	
	  /**
	   * @description
	   * Loads more contacts
	   *
	   * @name Helpers#loadMore
	   * @type {function}
	   */
	  var loadMore = function loadMore() {
	    return service.loadMoreContacts();
	  };
	
	  /**
	   * @description
	   * Loads more contacts for the active search query
	   *
	   * @name Helpers#searchMore
	   * @type {function}
	   */
	  var searchMore = function searchMore() {
	    return service.searchMoreContacts();
	  };
	
	  return {
	    getContacts: getContacts,
	    getSearchContacts: getSearchContacts,
	    hasContacts: hasContacts,
	    hasSearchContacts: hasSearchContacts,
	    loadMore: loadMore,
	    searchMore: searchMore,
	    selectContact: selectContact,
	    showAvatar: showAvatar,
	    showEmptyState: showEmptyState,
	    showErrorState: showErrorState,
	    showList: showList,
	    showLoadingState: showLoadingState,
	    showLoadMore: showLoadMore,
	    showLoadMoreLoading: showLoadMoreLoading,
	    showSearch: showSearch,
	    showSearchEmptyState: showSearchEmptyState,
	    showSearchLoadingState: showSearchLoadingState,
	    showSearchErrorState: showSearchErrorState,
	    showSearchLoadMore: showSearchLoadMore,
	    showSearchLoadMoreLoading: showSearchLoadMoreLoading
	  };
	};

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(35);
	
	/**
	 * @name Intents
	 * @type {Object}
	 */
	exports.default = function (_ref) {
	  var createRequest = _ref.createRequest,
	      handleRequest = _ref.handleRequest,
	      service = _ref.service;
	  return {
	    /**
	     * @name Intents#createContact
	     * @description The intent to edit the contact
	     * @type {function}
	     */
	    createContact: createRequest(_constants.Intent.CREATE_CONTACT),
	
	    /**
	     * @name Intents#showContactDetails
	     * @description The intent to edit the contact
	     * @type {function}
	     */
	    showContactDetails: createRequest(_constants.Intent.SHOW_CONTACT_DETAILS),
	
	    /**
	     * @name Intents#showContactList
	     * @description Handles the intent to show the contact list
	     * @type {function}
	     */
	    showContactList: handleRequest(_constants.Intent.SHOW_CONTACT_LIST, function () {
	      service.setContacts();
	    })
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bbm-contact-list-ng.js.map