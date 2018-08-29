(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("ui-bb-avatar-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-contact-details-ng", ["ui-bb-i18n-ng", "ui-bb-avatar-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-contact-details-ng"] = factory(require("ui-bb-i18n-ng"), require("ui-bb-avatar-ng"));
	else
		root["ext-bbm-contact-details-ng"] = factory(root["ui-bb-i18n-ng"], root["ui-bb-avatar-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_20__) {
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

	module.exports = __webpack_require__(19);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.intents = exports.helpers = exports.events = undefined;
	
	var _uiBbAvatarNg = __webpack_require__(20);
	
	var _uiBbAvatarNg2 = _interopRequireDefault(_uiBbAvatarNg);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _events = __webpack_require__(21);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _helpers = __webpack_require__(23);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _intents = __webpack_require__(24);
	
	var _intents2 = _interopRequireDefault(_intents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var events = exports.events = _events2.default; /**
	                                                 * @module ext-bbm-contact-details-ng
	                                                 *
	                                                 * @description
	                                                 * Mobile extension for a contact details view in the Contacts widget.
	                                                 *
	                                                 * @example
	                                                 * <!-- Contact widget model.xml -->
	                                                 * <property name="extension" viewHint="text-input,admin">
	                                                 *   <value type="string">ext-bbm-contact-details-ng</value>
	                                                 * </property>
	                                                 */
	var helpers = exports.helpers = _helpers2.default;
	var intents = exports.intents = _intents2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbAvatarNg2.default, _uiBbI18nNg2.default];

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(22);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	exports.default = function (_ref) {
	  var _withNativeEvents2;
	
	  var stateContainer = _ref.stateContainer,
	      service = _ref.service,
	      withNativeEvents = _ref.withNativeEvents,
	      intents = _ref.intents;
	
	  /**
	   * @description
	   * Returns the current selected `contact` from the state
	   *
	   * @name getSelectedContact
	   * @type {function}
	   * @returns {Object} contact Contact from the state
	   * @inner
	   */
	  var getSelectedContact = stateContainer.createSelector(function (state) {
	    return state.contact.data;
	  });
	
	  return withNativeEvents(_defineProperty({}, _constants.ToolbarButtonEvent.EDIT_CONTACT, function () {
	    var contact = getSelectedContact();
	    intents.editContact(contact);
	  }), (_withNativeEvents2 = {}, _defineProperty(_withNativeEvents2, _constants.Event.CONTACT_CREATE_DONE, function (_ref2) {
	    var contact = _ref2.contact;
	
	    service.setSelectedContact(contact);
	  }), _defineProperty(_withNativeEvents2, _constants.Event.CONTACT_UPDATE_DONE, function (_ref3) {
	    var contact = _ref3.contact;
	
	    service.setSelectedContact(contact);
	  }), _withNativeEvents2));
	};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Toolbar button events enum
	 * @name ToolbarButtonEvent
	 * @type {Object}
	 * @inner
	 */
	var ToolbarButtonEvent = exports.ToolbarButtonEvent = {
	  EDIT_CONTACT: 'bb.action.contact.edit'
	};
	
	/**
	 * Intents enum
	 * @name Intent
	 * @type {Object}
	 * @inner
	 */
	var Intent = exports.Intent = {
	  EDIT_CONTACT: 'intent.rbm.contact.edit',
	  SHOW_CONTACT_DETAILS: 'intent.rbm.contact.details.show'
	};
	
	/**
	 * Pubsub events
	 * @name Event
	 * @type {Object}
	 * @inner
	 */
	var Event = exports.Event = {
	  /**
	   * A contact has been created on the server
	   * @event bb.event.contact.create.done
	   * @type {string}
	   */
	  CONTACT_CREATE_DONE: 'bb.event.contact.create.done',
	
	  /**
	   * A contact has been updated on the server
	   * @event bb.event.contact.update.done
	   * @type {string}
	   */
	  CONTACT_UPDATE_DONE: 'bb.event.contact.update.done'
	};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @description
	 * Helpers for ext-bbm-contact-details-ng.
	 *
	 * @name Helpers
	 * @type {Object}
	 */
	exports.default = function (_ref) {
	  var stateContainer = _ref.stateContainer;
	
	  /**
	   * @description
	   * Returns the selected `contact` from the state
	   *
	   * @name Helpers#getSelectedContact
	   * @type {function}
	   * @returns {Object} contact The current selected contact from the state
	   */
	  var getSelectedContact = stateContainer.createSelector(function (state) {
	    return state.contact.data;
	  });
	
	  /**
	   * @description
	   * Returns true if the preference is set to show an avatar. Otherwise returns false.
	   *
	   * @name Helpers#showAvatar
	   * @type {function}
	   * @returns {boolean}
	   */
	  var showAvatar = stateContainer.createSelector(function (state) {
	    return Boolean(state.showAvatar);
	  });
	
	  return {
	    getSelectedContact: getSelectedContact,
	    showAvatar: showAvatar
	  };
	};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(22);
	
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
	     * @name Intents#editContact
	     * @description The intent to edit the contact
	     * @type {function}
	     */
	    editContact: createRequest(_constants.Intent.EDIT_CONTACT),
	
	    /**
	     * @name Intents#showContactDetails
	     * @description Handles the intent to show the contact details
	     * @type {function}
	     * @param {Object} contact The contact to show.
	     */
	    showContactDetails: handleRequest(_constants.Intent.SHOW_CONTACT_DETAILS, function (contact) {
	      if (contact) {
	        service.setSelectedContact(contact);
	      } else {
	        throw new Error('Contact is undefined. \n        Please pass a contact object as the payload of the intent');
	      }
	    })
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bbm-contact-details-ng.js.map