(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-iban-ng"), require("ui-bb-i18n-ng"), require("vendor-bb-angular-ng-messages"), require("ui-bbm-textfield-ng"), require("lib-bbm-plugins"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-contact-form-ng", ["ui-bb-iban-ng", "ui-bb-i18n-ng", "vendor-bb-angular-ng-messages", "ui-bbm-textfield-ng", "lib-bbm-plugins"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-contact-form-ng"] = factory(require("ui-bb-iban-ng"), require("ui-bb-i18n-ng"), require("vendor-bb-angular-ng-messages"), require("ui-bbm-textfield-ng"), require("lib-bbm-plugins"));
	else
		root["ext-bbm-contact-form-ng"] = factory(root["ui-bb-iban-ng"], root["ui-bb-i18n-ng"], root["vendor-bb-angular-ng-messages"], root["ui-bbm-textfield-ng"], root["lib-bbm-plugins"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_28__) {
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

	module.exports = __webpack_require__(25);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
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
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.intents = exports.helpers = exports.events = undefined;
	
	var _uiBbIbanNg = __webpack_require__(7);
	
	var _uiBbIbanNg2 = _interopRequireDefault(_uiBbIbanNg);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _vendorBbAngularNgMessages = __webpack_require__(12);
	
	var _vendorBbAngularNgMessages2 = _interopRequireDefault(_vendorBbAngularNgMessages);
	
	var _uiBbmTextfieldNg = __webpack_require__(26);
	
	var _uiBbmTextfieldNg2 = _interopRequireDefault(_uiBbmTextfieldNg);
	
	var _events = __webpack_require__(27);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _helpers = __webpack_require__(30);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _intents = __webpack_require__(31);
	
	var _intents2 = _interopRequireDefault(_intents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var events = exports.events = _events2.default; /**
	                                                 * @module ext-bbm-contact-form-ng
	                                                 *
	                                                 * @description
	                                                 * Mobile extension for a contact form in the Contacts widget.
	                                                 *
	                                                 * @example
	                                                 * <!-- Contact widget model.xml -->
	                                                 * <property name="extension" viewHint="text-input,admin">
	                                                 *   <value type="string">ext-bbm-contact-form-ng</value>
	                                                 * </property>
	                                                 */
	var helpers = exports.helpers = _helpers2.default;
	var intents = exports.intents = _intents2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbIbanNg2.default, _uiBbI18nNg2.default, _vendorBbAngularNgMessages2.default, _uiBbmTextfieldNg2.default];

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libBbmPlugins = __webpack_require__(28);
	
	var _libBbmPlugins2 = _interopRequireDefault(_libBbmPlugins);
	
	var _constants = __webpack_require__(29);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // Temporary disable capsInNew until it fixed in lib-bbm-plugins
	/* eslint new-cap: ["error", { "capIsNew": false }] */
	
	
	exports.default = function (_ref) {
	  var _withNativeEvents2;
	
	  var $filter = _ref.$filter,
	      stateContainer = _ref.stateContainer,
	      service = _ref.service,
	      bus = _ref.bus,
	      withNativeEvents = _ref.withNativeEvents;
	
	  var i18n = $filter('i18n');
	
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
	
	  return withNativeEvents(_defineProperty({}, _constants.ToolbarButtonEvent.DELETE_CONTACT, function () {
	    var confirmOptions = {
	      title: i18n('message.contact.delete.confirm.title'),
	      message: i18n('message.contact.delete.confirm.message'),
	      buttons: [{
	        type: _constants.ButtonType.POSITIVE,
	        text: i18n('message.contact.delete.confirm.button.ok'),
	        callbackFn: _constants.ConfirmAction.CONFIRM
	      }, {
	        type: _constants.ButtonType.NEGATIVE,
	        text: i18n('message.contact.delete.confirm.button.cancel'),
	        callbackFn: _constants.ConfirmAction.CANCEL
	      }]
	    };
	
	    _libBbmPlugins2.default.AlertDialog().show(confirmOptions).then(function (response) {
	      return response.callback === _constants.ConfirmAction.CONFIRM;
	    }).then(function (isConfirmed) {
	      if (isConfirmed) {
	        var contact = getSelectedContact();
	        service.deleteContact(contact).then(function () {
	          bus.publish(_constants.Event.SHOW_CONTACT_LIST);
	        });
	      }
	    });
	  }), (_withNativeEvents2 = {}, _defineProperty(_withNativeEvents2, _constants.Event.CONTACT_DELETE_START, function () {
	    _libBbmPlugins2.default.ActivityIndicator().show(i18n('message.contact.delete.start'));
	  }), _defineProperty(_withNativeEvents2, _constants.Event.CONTACT_DELETE_DONE, function () {
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    _libBbmPlugins2.default.Snackbar().success(i18n('message.contact.delete.done'));
	  }), _defineProperty(_withNativeEvents2, _constants.Event.CONTACT_DELETE_FAILED, function () {
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    _libBbmPlugins2.default.Snackbar().error(i18n('message.contact.delete.failed'));
	  }), _defineProperty(_withNativeEvents2, _constants.Event.CONTACT_UPDATE_START, function () {
	    _libBbmPlugins2.default.ActivityIndicator().show(i18n('message.contact.update.start'));
	  }), _defineProperty(_withNativeEvents2, _constants.Event.CONTACT_UPDATE_DONE, function () {
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    _libBbmPlugins2.default.Snackbar().success(i18n('message.contact.update.done'));
	  }), _defineProperty(_withNativeEvents2, _constants.Event.CONTACT_UPDATE_FAILED, function () {
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    _libBbmPlugins2.default.Snackbar().error(i18n('message.contact.update.failed'));
	  }), _defineProperty(_withNativeEvents2, _constants.Event.CONTACT_CREATE_START, function () {
	    _libBbmPlugins2.default.ActivityIndicator().show(i18n('message.contact.create.start'));
	  }), _defineProperty(_withNativeEvents2, _constants.Event.CONTACT_CREATE_DONE, function () {
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    _libBbmPlugins2.default.Snackbar().success(i18n('message.contact.create.done'));
	  }), _defineProperty(_withNativeEvents2, _constants.Event.CONTACT_CREATE_FAILED, function () {
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    _libBbmPlugins2.default.Snackbar().error(i18n('message.contact.create.failed'));
	  }), _withNativeEvents2));
	};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),
/* 29 */
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
	  DELETE_CONTACT: 'bb.action.contact.delete'
	};
	
	/**
	 * Confirm dialog button types
	 * @type {Object}
	 * @inner
	 */
	var ButtonType = exports.ButtonType = {
	  POSITIVE: 'POSITIVE',
	  NEGATIVE: 'NEGATIVE'
	};
	
	/**
	 * Confirm dialog actions
	 * @type {Object}
	 * @inner
	 */
	var ConfirmAction = exports.ConfirmAction = {
	  CANCEL: 'cancel',
	  CONFIRM: 'confirm'
	};
	
	/**
	 * Intents enum
	 * @name Intent
	 * @type {Object}
	 * @inner
	 */
	var Intent = exports.Intent = {
	  CREATE_CONTACT: 'intent.rbm.contact.create',
	  EDIT_CONTACT: 'intent.rbm.contact.edit'
	};
	
	/**
	 * Pubsub events
	 * @name Event
	 * @type {Object}
	 * @inner
	 */
	var Event = exports.Event = {
	  /**
	   * A contact will be created on the server
	   * @event bb.event.contact.create.start
	   * @type {string}
	   */
	  CONTACT_CREATE_START: 'bb.event.contact.create.start',
	
	  /**
	   * A contact has been created on the server
	   * @event bb.event.contact.create.done
	   * @type {string}
	   */
	  CONTACT_CREATE_DONE: 'bb.event.contact.create.done',
	
	  /**
	   * A contact fails to be created on the server
	   * @event bb.event.contact.create.failed
	   * @type {string}
	   */
	  CONTACT_CREATE_FAILED: 'bb.event.contact.create.failed',
	
	  /**
	   * A contact will be updated on the server
	   * @event bb.event.contact.update.start
	   * @type {string}
	   */
	  CONTACT_UPDATE_START: 'bb.event.contact.update.start',
	
	  /**
	   * A contact has been updated on the server
	   * @event bb.event.contact.update.done
	   * @type {string}
	   */
	  CONTACT_UPDATE_DONE: 'bb.event.contact.update.done',
	
	  /**
	   * A contact fails to be updated on the server
	   * @event bb.event.contact.update.failed
	   * @type {string}
	   */
	  CONTACT_UPDATE_FAILED: 'bb.event.contact.update.failed',
	
	  /**
	   * A contact will be deleted on the server
	   * @event bb.event.contact.delete.start
	   * @type {string}
	   */
	  CONTACT_DELETE_START: 'bb.event.contact.delete.start',
	
	  /**
	   * A contact has been deleted on the server
	   * @event bb.event.contact.delete.done
	   * @type {string}
	   */
	  CONTACT_DELETE_DONE: 'bb.event.contact.delete.done',
	
	  /**
	   * A contact fails to be deleted on the server
	   * @event bb.event.contact.delete.failed
	   * @type {string}
	   */
	  CONTACT_DELETE_FAILED: 'bb.event.contact.delete.failed',
	
	  /**
	   * An event to navigate to the contact list
	   * @event bb.action.contact.list.show
	   * @type {string}
	   */
	  SHOW_CONTACT_LIST: 'bb.action.contact.list.show',
	
	  /**
	   * An event to navigate to the contact details
	   * @event bb.action.contact.details.show
	   * @type {string}
	   */
	  SHOW_CONTACT_DETAILS: 'bb.action.contact.details.show'
	};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(29);
	
	/**
	 * @description
	 * Helpers for ext-bbm-contact-form-ng.
	 *
	 * @name Helpers
	 * @type {Object}
	 */
	exports.default = function (_ref) {
	  var service = _ref.service,
	      bus = _ref.bus,
	      stateContainer = _ref.stateContainer;
	
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
	   * Saves the edited contact and reset the form state
	   *
	   * @name Helpers#saveContact
	   * @type {function}
	   * @param {Object} contactForm The angular contact form object
	   */
	  var saveContact = function saveContact(contactForm) {
	    return service.saveContact().then(function () {
	      contactForm.$setUntouched();
	      contactForm.$setPristine();
	
	      bus.publish(service.isNewContact() ? _constants.Event.SHOW_CONTACT_LIST : _constants.Event.SHOW_CONTACT_DETAILS);
	    });
	  };
	
	  return {
	    getSelectedContact: getSelectedContact,
	    saveContact: saveContact
	  };
	};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(29);
	
	/**
	 * @name Intents
	 * @type {Object}
	 */
	exports.default = function (_ref) {
	  var handleRequest = _ref.handleRequest,
	      service = _ref.service;
	  return {
	    /**
	     * @name Intents#createContact
	     * @description Handles the intent to create a new contact
	     * @type {function}
	     */
	    createContact: handleRequest(_constants.Intent.CREATE_CONTACT, function () {
	      service.setInitialContact();
	    }),
	
	    /**
	     * @name Intents#editContact
	     * @description Handles the intent to edit a contact
	     * @type {function}
	     * @param {Object} contact The contact to edit
	     */
	    editContact: handleRequest(_constants.Intent.EDIT_CONTACT, function (contact) {
	      if (contact) {
	        service.setSelectedContact(contact);
	      } else {
	        throw new Error('Contact is undefined. Please pass a contact object as the payload of the intent');
	      }
	    })
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bbm-contact-form-ng.js.map