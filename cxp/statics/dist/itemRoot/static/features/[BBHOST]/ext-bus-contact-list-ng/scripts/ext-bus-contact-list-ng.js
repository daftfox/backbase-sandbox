(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-inline-status-ng"), require("ui-bb-confirm-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-iban-ng"), require("ui-bb-i18n-ng"), require("ui-bb-load-more-ng"), require("ui-bb-track-form-changes-ng"), require("vendor-bb-angular-ng-messages"), require("vendor-bb-angular-ng-aria"), require("ui-bb-search-box-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-avatar-ng"), require("ui-bb-country-ng"), require("ui-bb-focus-ng"), require("ui-bb-paginator-ng"), require("ui-bb-modal-ng"), require("ui-bb-is-permitted-ng"), require("vendor-bb-uib-accordion"), require("ui-bb-highlight-text-ng"), require("ui-bb-email-ng"), require("ui-bb-form-navigate-away-ng"), require("vendor-bb-angular"), require("lib-bb-iban"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bus-contact-list-ng", ["ui-bb-inline-status-ng", "ui-bb-confirm-ng", "ui-bb-substitute-error-ng", "ui-bb-notification-stripe-ng", "ui-bb-iban-ng", "ui-bb-i18n-ng", "ui-bb-load-more-ng", "ui-bb-track-form-changes-ng", "vendor-bb-angular-ng-messages", "vendor-bb-angular-ng-aria", "ui-bb-search-box-ng", "ui-bb-loading-overlay-ng", "ui-bb-empty-state-ng", "ui-bb-avatar-ng", "ui-bb-country-ng", "ui-bb-focus-ng", "ui-bb-paginator-ng", "ui-bb-modal-ng", "ui-bb-is-permitted-ng", "vendor-bb-uib-accordion", "ui-bb-highlight-text-ng", "ui-bb-email-ng", "ui-bb-form-navigate-away-ng", "vendor-bb-angular", "lib-bb-iban"], factory);
	else if(typeof exports === 'object')
		exports["ext-bus-contact-list-ng"] = factory(require("ui-bb-inline-status-ng"), require("ui-bb-confirm-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-iban-ng"), require("ui-bb-i18n-ng"), require("ui-bb-load-more-ng"), require("ui-bb-track-form-changes-ng"), require("vendor-bb-angular-ng-messages"), require("vendor-bb-angular-ng-aria"), require("ui-bb-search-box-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-avatar-ng"), require("ui-bb-country-ng"), require("ui-bb-focus-ng"), require("ui-bb-paginator-ng"), require("ui-bb-modal-ng"), require("ui-bb-is-permitted-ng"), require("vendor-bb-uib-accordion"), require("ui-bb-highlight-text-ng"), require("ui-bb-email-ng"), require("ui-bb-form-navigate-away-ng"), require("vendor-bb-angular"), require("lib-bb-iban"));
	else
		root["ext-bus-contact-list-ng"] = factory(root["ui-bb-inline-status-ng"], root["ui-bb-confirm-ng"], root["ui-bb-substitute-error-ng"], root["ui-bb-notification-stripe-ng"], root["ui-bb-iban-ng"], root["ui-bb-i18n-ng"], root["ui-bb-load-more-ng"], root["ui-bb-track-form-changes-ng"], root["vendor-bb-angular-ng-messages"], root["vendor-bb-angular-ng-aria"], root["ui-bb-search-box-ng"], root["ui-bb-loading-overlay-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-avatar-ng"], root["ui-bb-country-ng"], root["ui-bb-focus-ng"], root["ui-bb-paginator-ng"], root["ui-bb-modal-ng"], root["ui-bb-is-permitted-ng"], root["vendor-bb-uib-accordion"], root["ui-bb-highlight-text-ng"], root["ui-bb-email-ng"], root["ui-bb-form-navigate-away-ng"], root["vendor-bb-angular"], root["lib-bb-iban"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_40__, __WEBPACK_EXTERNAL_MODULE_41__, __WEBPACK_EXTERNAL_MODULE_46__, __WEBPACK_EXTERNAL_MODULE_47__, __WEBPACK_EXTERNAL_MODULE_48__, __WEBPACK_EXTERNAL_MODULE_49__, __WEBPACK_EXTERNAL_MODULE_50__, __WEBPACK_EXTERNAL_MODULE_51__, __WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_55__) {
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

	module.exports = __webpack_require__(45);

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
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_40__;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_41__;

/***/ }),
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.helpers = exports.hooks = undefined;
	
	var _uiBbAvatarNg = __webpack_require__(20);
	
	var _uiBbAvatarNg2 = _interopRequireDefault(_uiBbAvatarNg);
	
	var _uiBbInlineStatusNg = __webpack_require__(3);
	
	var _uiBbInlineStatusNg2 = _interopRequireDefault(_uiBbInlineStatusNg);
	
	var _uiBbConfirmNg = __webpack_require__(4);
	
	var _uiBbConfirmNg2 = _interopRequireDefault(_uiBbConfirmNg);
	
	var _uiBbModalNg = __webpack_require__(46);
	
	var _uiBbModalNg2 = _interopRequireDefault(_uiBbModalNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(5);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbNotificationStripeNg = __webpack_require__(6);
	
	var _uiBbNotificationStripeNg2 = _interopRequireDefault(_uiBbNotificationStripeNg);
	
	var _uiBbIbanNg = __webpack_require__(7);
	
	var _uiBbIbanNg2 = _interopRequireDefault(_uiBbIbanNg);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbLoadMoreNg = __webpack_require__(9);
	
	var _uiBbLoadMoreNg2 = _interopRequireDefault(_uiBbLoadMoreNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(15);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBbCountryNg = __webpack_require__(39);
	
	var _uiBbCountryNg2 = _interopRequireDefault(_uiBbCountryNg);
	
	var _uiBbFocusNg = __webpack_require__(40);
	
	var _uiBbFocusNg2 = _interopRequireDefault(_uiBbFocusNg);
	
	var _vendorBbAngularNgMessages = __webpack_require__(12);
	
	var _vendorBbAngularNgMessages2 = _interopRequireDefault(_vendorBbAngularNgMessages);
	
	var _vendorBbAngularNgAria = __webpack_require__(13);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbTrackFormChangesNg = __webpack_require__(11);
	
	var _uiBbTrackFormChangesNg2 = _interopRequireDefault(_uiBbTrackFormChangesNg);
	
	var _uiBbPaginatorNg = __webpack_require__(41);
	
	var _uiBbPaginatorNg2 = _interopRequireDefault(_uiBbPaginatorNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(16);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBbSearchBoxNg = __webpack_require__(14);
	
	var _uiBbSearchBoxNg2 = _interopRequireDefault(_uiBbSearchBoxNg);
	
	var _uiBbIsPermittedNg = __webpack_require__(47);
	
	var _uiBbIsPermittedNg2 = _interopRequireDefault(_uiBbIsPermittedNg);
	
	var _vendorBbUibAccordion = __webpack_require__(48);
	
	var _vendorBbUibAccordion2 = _interopRequireDefault(_vendorBbUibAccordion);
	
	var _uiBbHighlightTextNg = __webpack_require__(49);
	
	var _uiBbHighlightTextNg2 = _interopRequireDefault(_uiBbHighlightTextNg);
	
	var _uiBbEmailNg = __webpack_require__(50);
	
	var _uiBbEmailNg2 = _interopRequireDefault(_uiBbEmailNg);
	
	var _uiBbFormNavigateAwayNg = __webpack_require__(51);
	
	var _uiBbFormNavigateAwayNg2 = _interopRequireDefault(_uiBbFormNavigateAwayNg);
	
	var _hooks = __webpack_require__(52);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	var _helpers = __webpack_require__(54);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var hooks = exports.hooks = extHooks; /**
	                                       * @module ext-bus-contact-list-ng
	                                       *
	                                       * @description
	                                       * Business banking extension for a contacts list in a contact widget.
	                                       *
	                                       * @example
	                                       * <!-- payment widget model.xml -->
	                                       * <property name="extension" viewHint="text-input,admin">
	                                       *   <value type="string">ext-bus-contact-list-ng</value>
	                                       * </property>
	                                       */
	var helpers = exports.helpers = _helpers2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbAvatarNg2.default, _uiBbInlineStatusNg2.default, _uiBbConfirmNg2.default, _uiBbModalNg2.default, _uiBbSubstituteErrorNg2.default, _uiBbNotificationStripeNg2.default, _uiBbIbanNg2.default, _uiBbI18nNg2.default, _uiBbLoadMoreNg2.default, _uiBbLoadingOverlayNg2.default, _uiBbFocusNg2.default, _vendorBbAngularNgMessages2.default, _vendorBbAngularNgAria2.default, _uiBbCountryNg2.default, _uiBbTrackFormChangesNg2.default, _uiBbPaginatorNg2.default, _uiBbEmptyStateNg2.default, _uiBbSearchBoxNg2.default, _uiBbIsPermittedNg2.default, _vendorBbUibAccordion2.default, _uiBbHighlightTextNg2.default, _uiBbEmailNg2.default, _uiBbFormNavigateAwayNg2.default];

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_46__;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_47__;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_48__;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_49__;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_50__;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_51__;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deleteContact = deleteContact;
	exports.processContacts = processContacts;
	exports.processSearchContacts = processSearchContacts;
	exports.getSelectedContact = getSelectedContact;
	exports.selectPrevContact = selectPrevContact;
	exports.returnContactIfExists = returnContactIfExists;
	exports.processContactBeforeSave = processContactBeforeSave;
	
	var _vendorBbAngular = __webpack_require__(53);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name Hooks
	 * @description
	 * Hooks for ext-bus-contact-list-ng
	 *
	 * @type {Object}
	 */
	
	/**
	 * @name Hooks#deleteContact
	 *
	 * @description
	 * Delete contact action handler
	 *
	 * @param {object} contact Contact object
	 * @type {function}
	 * @param {function} confirm Called to confirm delete action
	 */
	function deleteContact(contact, confirm) {
	  confirm();
	}
	
	/**
	 * Returns first letter of the Contact's name, uppercased
	 * @param  {object} contact Contact object
	 * @return {string} Contact's first letter
	 * @inner
	 */
	function getContactNameChar(contact) {
	  return contact.name ? contact.name.charAt(0).toUpperCase() : null;
	}
	
	/**
	 * Groups contacts by first char of the name
	 * @param  {array} contacts Contacts array
	 * @return {object} Grouped contacts
	 * @inner
	 */
	function groupContacts(contacts) {
	  return contacts.reduce(function (groups, contact) {
	    var char = getContactNameChar(contact);
	    if (!groups[char]) {
	      // Allow mutation of a local empty object
	      // See: https://github.com/airbnb/javascript/issues/719
	      /* eslint-disable no-param-reassign */
	      groups[char] = [];
	      /* eslint-enable no-param-reassign */
	    }
	
	    groups[char].push(contact);
	    return groups;
	  }, {});
	}
	
	/**
	 * @name Hooks#processContacts
	 *
	 * @description
	 * Extension hook for pre-processing contacts
	 *
	 * @param {array} contacts
	 * @type {function}
	 * @returns {array} contacts Array of contacts
	 */
	function processContacts() {
	  var contacts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	  var groups = groupContacts(contacts);
	  return Object.keys(groups).map(function (char) {
	    return {
	      char: char,
	      contacts: groups[char].splice(0)
	    };
	  });
	}
	
	/**
	 * @name Hooks#processSearchContacts
	 *
	 * @description
	 * Extension hook for pre-processing search contacts
	 *
	 * @param {array} contacts
	 * @type {function}
	 * @returns {array} contacts Array of contacts
	 */
	function processSearchContacts() {
	  var contacts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	  var groups = groupContacts(contacts);
	  return Object.keys(groups).map(function (char) {
	    return {
	      char: char,
	      contacts: groups[char].splice(0)
	    };
	  });
	}
	
	/**
	 * @name Hooks#getSelectedContact
	 *
	 * @description
	 * Selects the contact from contacts by id
	 * Or returns null if nothing is found
	 *
	 * @param {array} contacts Array of contacts
	 * @param {object} contact Contact object
	 * @type {function}
	 * @returns {object|null} Returns found contact or null
	 */
	function getSelectedContact() {
	  var contactGroups = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var contact = arguments[1];
	
	  var firstContact = Array.isArray(contactGroups) && contactGroups[0] ? contactGroups[0].contacts[0] : null;
	  // decoupling original contact list from selected contact
	  firstContact = _vendorBbAngular2.default.copy(firstContact);
	
	  if (!contact) {
	    return firstContact;
	  }
	
	  var char = getContactNameChar(contact);
	  var group = contactGroups.find(function (contactGroup) {
	    return contactGroup.char === char;
	  });
	  var foundContact = group ? group.contacts.find(function (item) {
	    return item.id === contact.id;
	  }) : null;
	  return _vendorBbAngular2.default.copy(foundContact) || firstContact;
	}
	
	/**
	 * @name Hooks#selectPrevContact
	 *
	 * @description
	 * Returns previous (or the first) contact based
	 * on the currently selected item id or item index (deprecated).
	 *
	 * @param {*} contacts Processed contacts
	 * @param {number} [index=0] Currently selected contact index (deprecated)
	 * @param {object} [contact] Currently selected contact
	 * @type {function}
	 * @returns {object} Previous or the first contact from the contacts
	 */
	function selectPrevContact(contacts) {
	  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	  var contact = arguments[2];
	
	  var data = contacts || [];
	  var firstContact = data && data[0] && data[0].contacts[0] || null;
	
	  if (!contact) {
	    return firstContact;
	  }
	
	  var char = getContactNameChar(contact);
	  var groupIndex = data.findIndex(function (contactGroup) {
	    return contactGroup.char === char;
	  });
	
	  if (groupIndex === -1) {
	    return firstContact;
	  }
	
	  var contactIndex = data[groupIndex].contacts.findIndex(function (item) {
	    return item.id === contact.id;
	  });
	
	  if (contactIndex > 0) {
	    // If contact is not first in the group => return previous contact
	    return data[groupIndex].contacts[contactIndex - 1];
	  } else if (contactIndex === 0 && groupIndex > 0) {
	    // If contact is first, but his group is not first => return last contact from previous group
	    var contactsArray = data[groupIndex - 1].contacts;
	    return contactsArray[contactsArray.length - 1];
	  }
	
	  return firstContact;
	}
	
	/**
	 * @name Hooks#returnContactIfExists
	 * @type {function}
	 * @description
	 * Returns contact if it exists in contacts group, otherwise returns false result
	 *
	 * @param contactGroups Array of contacts
	 * @param contact Contact object
	 * @return {*} Specifies if contact exists in the array
	 */
	function returnContactIfExists(contactGroups, contact) {
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = contactGroups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var group = _step.value;
	
	      var index = group.contacts.findIndex(function (item) {
	        return item.id === contact.id;
	      });
	      if (index >= 0) {
	        return group.contacts[index];
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  return false;
	}
	
	/**
	 * @name Hooks#processContactBeforeSave
	 * @type {function}
	 * @description
	 * Returns a new contact object with IBAN and BBAN fields in electronic format (without spaces)
	 * for each account.
	 *
	 * @param {object} contact Contact object to be created/updated
	 * @returns {object} Processed Contact object
	 */
	function processContactBeforeSave(contact) {
	  var contactClone = _vendorBbAngular2.default.copy(contact);
	  var detectSpaces = /\s+/g;
	
	  if (contactClone.accounts && contactClone.accounts.length) {
	    Object.assign(contactClone, {
	      accounts: contactClone.accounts.map(function (account) {
	        if (typeof account.IBAN === 'string') {
	          Object.assign(account, { IBAN: account.IBAN.replace(detectSpaces, '') });
	        }
	        return account;
	      })
	    });
	  }
	
	  return contactClone;
	}

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EmptyStateConfig;
	
	var _libBbIban = __webpack_require__(55);
	
	var _constants = __webpack_require__(56);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* global window */
	
	
	var NO_ITEMS = Symbol('NO_ITEMS');
	var NO_ITEMS_CREATE = Symbol('NO_ITEMS_CREATE');
	var SEARCH = Symbol('SEARCH');
	
	var EmptyStateConfig = (_EmptyStateConfig = {}, _defineProperty(_EmptyStateConfig, NO_ITEMS, {
	  iconClassName: 'far fa-address-book',
	  title: 'contacts.empty.title',
	  description: 'contacts.empty.message.noContact'
	}), _defineProperty(_EmptyStateConfig, NO_ITEMS_CREATE, {
	  iconClassName: 'far fa-address-book',
	  title: 'contacts.empty.title',
	  description: 'contacts.empty.message.create.noContact'
	}), _defineProperty(_EmptyStateConfig, SEARCH, {
	  iconClassName: 'fa fa-search',
	  title: 'contacts.loadMore.emptySearch',
	  description: 'contacts.loadMore.emptySearchMessage'
	}), _EmptyStateConfig);
	
	var isCreating = function isCreating($ctrl) {
	  return $ctrl.state.page === 'new';
	};
	
	var getEmptyStateConfig = function getEmptyStateConfig($ctrl) {
	  var emptyState = void 0;
	  if ($ctrl.state.searching) {
	    emptyState = SEARCH;
	  } else {
	    emptyState = isCreating($ctrl) ? NO_ITEMS_CREATE : NO_ITEMS;
	  }
	  return EmptyStateConfig[emptyState];
	};
	
	var resetFormState = function resetFormState(form) {
	  if (form) {
	    form.$setUntouched();
	    form.$setPristine();
	  }
	};
	
	var isFormPristine = function isFormPristine(form) {
	  return !form || form.$pristine;
	};
	
	var cancelEditForm = function cancelEditForm(ext, $ctrl) {
	  if (ext.contactForm) {
	    resetFormState(ext.contactForm);
	    Object.assign(ext, { contactForm: null });
	  }
	
	  if (ext.newContact) {
	    Object.assign(ext, { newContact: null });
	    $ctrl.showNewContactForm();
	  } else if (ext.selectedContact) {
	    $ctrl.selectContact(ext.selectedContact);
	    Object.assign(ext, { selectedContact: null });
	  } else {
	    $ctrl.cancelContactForm();
	  }
	};
	
	var showNewContactForm = function showNewContactForm(ext, $ctrl) {
	  if (isFormPristine(ext.contactForm)) {
	    $ctrl.showNewContactForm();
	  } else {
	    Object.assign(ext, { cancelFormConfirmOpened: true, newContact: true });
	  }
	};
	
	var tryToCancelEditForm = function tryToCancelEditForm(ext, $ctrl) {
	  if (isFormPristine(ext.contactForm)) {
	    cancelEditForm(ext, $ctrl);
	  } else {
	    Object.assign(ext, { cancelFormConfirmOpened: true });
	  }
	};
	
	var capitalize = function capitalize(str) {
	  return str.substr(0, 1).toUpperCase() + str.substr(1);
	};
	
	var getAddressProperties = function getAddressProperties(prefix) {
	  return ['addressLine1', 'addressLine2', 'streetName', 'postCode', 'town', 'countrySubDivision'].map(function (prop) {
	    return prefix ? prefix + capitalize(prop) : prop;
	  });
	};
	
	var getAllProperties = function getAllProperties(prefix, props) {
	  return props.includes('address') ? props.concat(getAddressProperties(prefix)) : props;
	};
	
	var notEmptyFilter = function notEmptyFilter(value) {
	  return !!value;
	};
	
	/**
	 * @name scrollToFirstError
	 * @description Focus or scroll to first error in ```form``` depending if it is visible or not.
	 * @inner
	 * @type {Function}
	 * @param {Object} form Angular form object to check errors
	 * @returns {Object} First angular element that is invalid
	 */
	var scrollToFirstError = function scrollToFirstError(form) {
	  var firstError = form.$$controls.find(function (control) {
	    return control.$invalid;
	  }).$$element;
	  var isVisible = !firstError.hasClass('ng-hide');
	
	  if (isVisible) {
	    firstError[0].focus();
	  } else {
	    window.scrollTo({
	      top: firstError[0].parentNode.offsetTop,
	      behavior: 'smooth'
	    });
	  }
	
	  return firstError;
	};
	
	/**
	 * @description
	 * Helpers for ext-bus-contact-list-ng
	 *
	 * @name Helpers
	 * @type {Object}
	 */
	var helpers = function helpers(_ref) {
	  var $filter = _ref.$filter;
	
	  var i18n = $filter('i18n');
	  var country = $filter('country');
	  var extensionReference = void 0;
	  var controllerReference = void 0;
	
	  return {
	    cancelEditForm: cancelEditForm,
	    tryToCancelEditForm: tryToCancelEditForm,
	    showNewContactForm: showNewContactForm,
	
	    saveContact: function saveContact($ctrl, form) {
	      if (form.$valid) {
	        var contact = $ctrl.state.contact.data;
	        return $ctrl.saveContact(contact).then(function () {
	          return resetFormState(form);
	        });
	      }
	
	      scrollToFirstError(form);
	      return Promise.reject();
	    },
	
	    searchContact: function searchContact($ctrl) {
	      var queryString = $ctrl.state.contactsSearch.query;
	      if (queryString) {
	        $ctrl.search(queryString, undefined, { from: 0 });
	      } else {
	        $ctrl.cancelSearch();
	      }
	    },
	
	    getListData: function getListData($ctrl) {
	      return $ctrl.state.searching && $ctrl.state.contactsSearch.data ? $ctrl.state.contactsSearch.data : $ctrl.state.contacts.data;
	    },
	
	    showContactBlock: function showContactBlock($ctrl) {
	      var contactProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	      return getAllProperties('', contactProperties).some(function (prop) {
	        return $ctrl.state.contact.data && !!$ctrl.state.contact.data[prop];
	      });
	    },
	
	    showBankBlock: function showBankBlock(account) {
	      var accountProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	      return getAllProperties('bank', accountProperties).some(function (prop) {
	        return !!account[prop];
	      });
	    },
	
	    showHolderBlock: function showHolderBlock(account) {
	      var accountProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	      return getAllProperties('accountHolder', accountProperties).some(function (prop) {
	        return !!account[prop];
	      });
	    },
	
	    getContactAddress: function getContactAddress(dataObj) {
	      return getAddressProperties('').map(function (prop) {
	        return dataObj[prop];
	      }).filter(function (address) {
	        return !!address;
	      }).join(', ');
	    },
	
	    getBankAddress: function getBankAddress(account) {
	      return getAddressProperties('bank').map(function (prop) {
	        return account[prop];
	      }).concat(country(account.bankCountry)).filter(notEmptyFilter).join(', ');
	    },
	
	    getHolderAddress: function getHolderAddress(account) {
	      return getAddressProperties('accountHolder').map(function (prop) {
	        return account[prop];
	      }).concat(country(account.accountHolderCountry)).filter(notEmptyFilter).join(', ');
	    },
	
	    getAccountBank: function getAccountBank(account) {
	      var bankCode = [account.BIC, account.bankCode].filter(notEmptyFilter).join(' - ');
	
	      return [account.bankName, bankCode ? '(' + bankCode + ')' : null].filter(notEmptyFilter).join(' ');
	    },
	
	    /**
	     * @description
	     * Checkes if actual pagination type matches the one, defined in properties
	     *
	     * @public
	     * @name Helpers#isPaginationTypeMatch
	     * @type {function}
	     * @param {Object.<module:widget-bb-contact-ng.ContactController>} $ctrl Current controller
	     * @param {string} type Description of pagination type (pagination, load-more)
	     *
	     * @returns {boolean}
	     */
	    isPaginationTypeMatch: function isPaginationTypeMatch($ctrl, type) {
	      return $ctrl.state.pageParams.paginationType === type;
	    },
	
	    /**
	     * @name Helpers#isSearching
	     * @description
	     * Check if the search action is in progress
	     * @type {function}
	     * @param {Object.<module:widget-bb-contact-ng.ContactController>} $ctrl Current controller
	     * @return {boolean} Flag indicating search status
	     */
	    isSearching: function isSearching($ctrl) {
	      return $ctrl.state.contactsSearch.loading;
	    },
	
	    /**
	     * @name Helpers#isLoading
	     * @description
	     * Check if the loading action is in progress
	     * @type {function}
	     * @param {Object.<module:widget-bb-contact-ng.ContactController>} $ctrl Current controller
	     * @return {boolean} Flag indicating loading status
	     */
	    isLoading: function isLoading($ctrl) {
	      return $ctrl.state.contact.updating || $ctrl.state.contacts.loading;
	    },
	
	    /**
	     * @name Helpers#getSupportedCountries
	     * @type {function}
	     *
	     * @description
	     * Get listed of countries
	     *
	     * @return {Array} countries List of countries
	     */
	    getSupportedCountries: function getSupportedCountries() {
	      return _constants2.default;
	    },
	
	    /**
	     * @name Helpers#openAccountForm
	     * @type {function}
	     *
	     * @description
	     * Add new or edit existing account
	     *
	     * @param {Object.<module:widget-bb-contact-ng.ContactController>} $ctrl Current controller
	     * @param ext
	     * @param accountIndex
	     */
	    openAccountForm: function openAccountForm($ctrl, ext, accountIndex) {
	      extensionReference = ext;
	      controllerReference = $ctrl;
	      extensionReference.$ctrl = $ctrl;
	      extensionReference.account = $ctrl.getAccount(accountIndex) || {};
	      extensionReference.accountIndex = accountIndex;
	      extensionReference.open = true;
	    },
	
	    /**
	     * @name Helpers#submitAccountForm
	     * @type {function}
	     *
	     * @description
	     * Save or update existing account
	     *
	     * @param {object} account - account data
	     * @param {number} accountIndex - account index
	     * @param {object} form - account form
	     */
	    submitAccountForm: function submitAccountForm(account, accountIndex, form) {
	      if (form.$invalid) {
	        scrollToFirstError(form);
	        return;
	      }
	
	      if (extensionReference) {
	        extensionReference.open = false;
	      }
	
	      Object.keys(account).forEach(function (fieldName) {
	        if (account[fieldName] === '') {
	          Object.assign(account, _defineProperty({}, fieldName, null));
	        }
	      });
	
	      if (controllerReference) {
	        if (controllerReference.getAccount(accountIndex)) {
	          controllerReference.updateAccount(account, accountIndex);
	        } else {
	          controllerReference.addAccount(account);
	        }
	      }
	    },
	
	    /**
	     * @name Helpers#deleteContactAccount
	     * @type {function}
	     *
	     * @description
	     * Delete selected account by its index
	     *
	     * @param {Object.<module:widget-bb-contact-ng.ContactController>} $ctrl Current controller
	     * @param {number} accountIndex index of account to delete
	     */
	    deleteContactAccount: function deleteContactAccount($ctrl, accountIndex) {
	      $ctrl.deleteContactAccount(accountIndex);
	    },
	
	    /**
	     * @name Helpers#dismissAccount
	     * @type {function}
	     *
	     * @description
	     * Dismiss creating new account
	     */
	    dismissAccount: function dismissAccount() {
	      if (extensionReference) {
	        extensionReference.open = false;
	      }
	    },
	
	    /**
	     * @description
	     * Check if create contact form is being used
	     *
	     * @name Helpers#isCreating
	     * @type {function}
	     * @param {Object.<module:widget-bb-contact-ng.ContactController>} $ctrl Current controller
	     * @returns {boolean}
	     */
	    isCreating: isCreating,
	
	    /**
	     * @description
	     * Returns the empty state icon classes
	     *
	     * @name Helpers#getEmptyIconClasses
	     * @type {function}
	     * @param {Object.<module:widget-bb-contact-ng.ContactController>} $ctrl Current controller
	     * @returns {string}
	     */
	    getEmptyIconClasses: function getEmptyIconClasses($ctrl) {
	      return getEmptyStateConfig($ctrl).iconClassName + ' fa-4x text-muted';
	    },
	
	    /**
	     * @description
	     * Returns the empty state translated title
	     *
	     * @name Helpers#getEmptyTitle
	     * @type {function}
	     * @param {Object.<module:widget-bb-contact-ng.ContactController>} $ctrl Current controller
	     * @returns {string}
	     */
	    getEmptyTitle: function getEmptyTitle($ctrl) {
	      return i18n(getEmptyStateConfig($ctrl).title);
	    },
	
	    /**
	     * @description
	     * Returns the empty state translated description
	     *
	     * @name Helpers#getEmptyDescription
	     * @type {function}
	     * @param {Object.<module:widget-bb-contact-ng.ContactController>} $ctrl Current controller
	     * @returns {string}
	     */
	    getEmptyDescription: function getEmptyDescription($ctrl) {
	      return i18n(getEmptyStateConfig($ctrl).description);
	    },
	
	    /**
	     * @description
	     * Checks if there is any account loaded in the list, regardless if it is searching or not
	     *
	     * @name Helpers#isContactListEmpty
	     * @type {function}
	     * @param {Object.<module:widget-bb-contact-ng.ContactController>} $ctrl Current controller
	     * @returns {boolean}
	     */
	    isContactListEmpty: function isContactListEmpty($ctrl) {
	      if ($ctrl.state.searching) {
	        return !$ctrl.state.contactsSearch.loading && !$ctrl.hasSearchContacts();
	      }
	
	      return !$ctrl.state.contacts.loading && !$ctrl.hasContacts();
	    },
	
	    showAccountDeleteConfirmation: function showAccountDeleteConfirmation(ext, index, account) {
	      return Object.assign(ext, {
	        accIndexToDelete: index,
	        accNameToDelete: account.alias || account.name || '',
	        deleteAccConfirmOpened: true
	      });
	    },
	
	    /**
	     * @name Helpers#formatIBAN
	     * @type {function}
	     *
	     * @description
	     * Convert an IBAN to human format adding a space every 4 characters.
	     *
	     * @param {string} IBAN IBAN account number
	     *
	     * @returns {string} Human readable IBAN account number
	     */
	    formatIBAN: _libBbIban.formatByGroups,
	
	    /**
	     * @name Helpers#isInvalid
	     * @type {Function}
	     *
	     * @description
	     * Checks control with ```controlName``` validity within the ```form```
	     *
	     * @param {Object} form Angular form where control is placed in
	     * @param {String} controlName  Name that identifies control in ```form```
	     *
	     * @returns {Boolean} Flag indicating control validity
	     */
	    isInvalid: function isInvalid(form, controlName) {
	      return form.$submitted && form[controlName].$invalid;
	    }
	
	  };
	};
	
	exports.default = helpers;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_55__;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Constants
	 * @description
	 * Constants for ext-bus-contact-list-ng
	 *
	 * @type {Object}
	 */
	/**
	 * @name Constants#countries
	 * @description
	 * Supported account countries list
	 *
	 * @type {Array.<String>}
	 */
	exports.default = ['nl', 'in', 'uk', 'us', 'es'];

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bus-contact-list-ng.js.map