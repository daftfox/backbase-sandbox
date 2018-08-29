(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("ui-bbm-switch-ng"), require("ui-bbm-textfield-ng"), require("lib-bbm-plugins"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-personal-profile-email-form-ng", ["ui-bb-i18n-ng", "ui-bbm-switch-ng", "ui-bbm-textfield-ng", "lib-bbm-plugins"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-personal-profile-email-form-ng"] = factory(require("ui-bb-i18n-ng"), require("ui-bbm-switch-ng"), require("ui-bbm-textfield-ng"), require("lib-bbm-plugins"));
	else
		root["ext-bbm-personal-profile-email-form-ng"] = factory(root["ui-bb-i18n-ng"], root["ui-bbm-switch-ng"], root["ui-bbm-textfield-ng"], root["lib-bbm-plugins"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_21__) {
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
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.intents = exports.helpers = exports.events = undefined;
	
	var _uiBbI18nNg = __webpack_require__(7);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbmSwitchNg = __webpack_require__(18);
	
	var _uiBbmSwitchNg2 = _interopRequireDefault(_uiBbmSwitchNg);
	
	var _uiBbmTextfieldNg = __webpack_require__(19);
	
	var _uiBbmTextfieldNg2 = _interopRequireDefault(_uiBbmTextfieldNg);
	
	var _events = __webpack_require__(20);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _helpers = __webpack_require__(23);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _intents = __webpack_require__(24);
	
	var _intents2 = _interopRequireDefault(_intents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bbm-personal-profile-email-form-ng
	 *
	 * @description
	 * Mobile extension for a personal profile email form in the Mobile Personal Profile widget.
	 *
	 * @example
	 * <!-- Mobile Personal Profile widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *   <value type="string">ext-bbm-personal-profile-email-form-ng</value>
	 * </property>
	 */
	var events = exports.events = _events2.default;
	var helpers = exports.helpers = _helpers2.default;
	var intents = exports.intents = _intents2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbI18nNg2.default, _uiBbmSwitchNg2.default, _uiBbmTextfieldNg2.default];

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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libBbmPlugins = __webpack_require__(21);
	
	var _libBbmPlugins2 = _interopRequireDefault(_libBbmPlugins);
	
	var _constants = __webpack_require__(22);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // Temporary disable capsInNew until it fixed in lib-bbm-plugins
	/* eslint new-cap: ["error", { "capIsNew": false }] */
	
	
	exports.default = function (_ref) {
	  var _withNativeEvents2;
	
	  var $filter = _ref.$filter,
	      withNativeEvents = _ref.withNativeEvents,
	      service = _ref.service,
	      intents = _ref.intents;
	
	  var i18n = $filter('i18n');
	
	  return withNativeEvents(_defineProperty({}, _constants.ToolbarButtonEvent.DELETE, function () {
	    var confirmOptions = {
	      title: i18n('message.personalProfile.email.delete.confirm.title'),
	      message: i18n('message.personalProfile.email.delete.confirm.message'),
	      buttons: [{
	        type: _constants.ButtonType.POSITIVE,
	        text: i18n('message.personalProfile.email.delete.confirm.button.ok'),
	        callbackFn: _constants.ConfirmAction.CONFIRM
	      }, {
	        type: _constants.ButtonType.NEGATIVE,
	        text: i18n('message.personalProfile.email.delete.confirm.button.cancel'),
	        callbackFn: _constants.ConfirmAction.CANCEL
	      }]
	    };
	
	    _libBbmPlugins2.default.AlertDialog().show(confirmOptions).then(function (response) {
	      return response.callback === _constants.ConfirmAction.CONFIRM;
	    }).then(function (isConfirmed) {
	      if (isConfirmed) {
	        service.deleteUserEmail().then(function () {
	          intents.showPersonalProfileDetails();
	        });
	      }
	    });
	  }), (_withNativeEvents2 = {}, _defineProperty(_withNativeEvents2, _constants.Event.EMAIL_DELETE_START, function () {
	    _libBbmPlugins2.default.ActivityIndicator().show(i18n('message.personalProfile.email.delete.start'));
	  }), _defineProperty(_withNativeEvents2, _constants.Event.EMAIL_DELETE_DONE, function () {
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    _libBbmPlugins2.default.Snackbar().success(i18n('message.personalProfile.email.delete.done'));
	  }), _defineProperty(_withNativeEvents2, _constants.Event.EMAIL_DELETE_FAILED, function () {
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    _libBbmPlugins2.default.Snackbar().error(i18n('message.personalProfile.email.delete.failed'));
	  }), _defineProperty(_withNativeEvents2, _constants.Event.EMAIL_CREATE_START, function () {
	    _libBbmPlugins2.default.ActivityIndicator().show(i18n('message.personalProfile.email.create.start'));
	  }), _defineProperty(_withNativeEvents2, _constants.Event.EMAIL_CREATE_DONE, function () {
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    _libBbmPlugins2.default.Snackbar().success(i18n('message.personalProfile.email.create.done'));
	  }), _defineProperty(_withNativeEvents2, _constants.Event.EMAIL_CREATE_FAILED, function () {
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    _libBbmPlugins2.default.Snackbar().error(i18n('message.personalProfile.email.create.failed'));
	  }), _defineProperty(_withNativeEvents2, _constants.Event.EMAIL_EDIT_START, function () {
	    _libBbmPlugins2.default.ActivityIndicator().show(i18n('message.personalProfile.email.edit.start'));
	  }), _defineProperty(_withNativeEvents2, _constants.Event.EMAIL_EDIT_DONE, function () {
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    _libBbmPlugins2.default.Snackbar().success(i18n('message.personalProfile.email.edit.done'));
	  }), _defineProperty(_withNativeEvents2, _constants.Event.EMAIL_EDIT_FAILED, function () {
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    _libBbmPlugins2.default.Snackbar().error(i18n('message.personalProfile.email.edit.failed'));
	  }), _withNativeEvents2));
	};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

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
	  DELETE: 'bb.action.personalProfile.email.delete'
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
	 * Extension intent enum
	 * @name Intent
	 * @type {object}
	 * @inner
	 */
	var Intent = exports.Intent = {
	  SHOW_PERSONAL_PROFILE_DETAILS: 'intent.rbm.personalProfile.details.show',
	  SHOW_EDIT_EMAIL_FORM: 'intent.rbm.personalProfile.email.edit',
	  SHOW_ADD_EMAIL_FORM: 'intent.rbm.personalProfile.email.add'
	};
	
	/**
	 * Pubsub events
	 * @type {Object}
	 */
	var Event = exports.Event = {
	  /**
	   * An e-mail address will be deleted on the server
	   * @event bb.event.personalProfile.email.delete.start
	   * @type {string}
	   */
	  EMAIL_DELETE_START: 'bb.event.personalProfile.email.delete.start',
	
	  /**
	   * An e-mail address was deleted on the server
	   * @event bb.event.personalProfile.email.delete.done
	   * @type {string}
	   */
	  EMAIL_DELETE_DONE: 'bb.event.personalProfile.email.delete.done',
	
	  /**
	   * An e-mail address fails to be deleted on the server
	   * @event bb.event.personalProfile.email.delete.failed
	   * @type {string}
	   */
	  EMAIL_DELETE_FAILED: 'bb.event.personalProfile.email.delete.failed',
	
	  /**
	   * An e-mail address will be created on the server
	   * @event bb.event.personalProfile.email.create.start
	   * @type {string}
	   */
	  EMAIL_CREATE_START: 'bb.event.personalProfile.email.create.start',
	
	  /**
	   * An e-mail address was created on the server
	   * @event bb.event.personalProfile.email.create.done
	   * @type {string}
	   */
	  EMAIL_CREATE_DONE: 'bb.event.personalProfile.email.create.done',
	
	  /**
	   * An e-mail address fails to be created on the server
	   * @event bb.event.personalProfile.email.create.failed
	   * @type {string}
	   */
	  EMAIL_CREATE_FAILED: 'bb.event.personalProfile.email.create.failed',
	
	  /**
	   * An e-mail address will be updated on the server
	   * @event bb.event.personalProfile.email.edit.start
	   * @type {string}
	   */
	  EMAIL_EDIT_START: 'bb.event.personalProfile.email.edit.start',
	
	  /**
	   * An e-mail address was updated on the server
	   * @event bb.event.personalProfile.email.edit.done
	   * @type {string}
	   */
	  EMAIL_EDIT_DONE: 'bb.event.personalProfile.email.edit.done',
	
	  /**
	   * An e-mail address fails to be updated on the server
	   * @event bb.event.personalProfile.email.edit.failed
	   * @type {string}
	   */
	  EMAIL_EDIT_FAILED: 'bb.event.personalProfile.email.edit.failed'
	};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name Helpers
	 * @description Helpers for ext-bbm-personal-profile-email-form-ng.
	 * @type {Object}
	 */
	exports.default = function (_ref) {
	  var service = _ref.service,
	      stateContainer = _ref.stateContainer,
	      intents = _ref.intents;
	
	  /**
	   * @name Helpers#getEmailForm
	   * @description Retrieves an email's form data.
	   * @type {function}
	   *
	   * @returns {module:model-bb-personal-profile-ng.Email}
	   */
	  var getEmailFormData = stateContainer.createSelector(function (state) {
	    return state.form.data.email;
	  });
	
	  /**
	   * @name Helpers#updateUserEmail
	   * @description Updates a user email.
	   * @type {function}
	   *
	   * @returns {Promise}
	   */
	  var updateUserEmail = function updateUserEmail() {
	    return service.updateUserEmail().then(function () {
	      intents.showPersonalProfileDetails();
	    });
	  };
	
	  /**
	   * @name Helpers#isFormValid
	   * @description Checks the form validation status.
	   * @type {function}
	   *
	   * @param {Object} form
	   * @return {boolean}
	   */
	  var isFormValid = function isFormValid(form) {
	    return Boolean(form.$valid && form.$dirty);
	  };
	
	  return {
	    isFormValid: isFormValid,
	    getEmailFormData: getEmailFormData,
	    updateUserEmail: updateUserEmail
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
	     * @name Intents#showPersonalProfileDetails
	     * @description The intent to show the personal profile details.
	     * @type {function}
	     */
	    showPersonalProfileDetails: createRequest(_constants.Intent.SHOW_PERSONAL_PROFILE_DETAILS),
	
	    /**
	     * @name Intents#showAddEmailForm
	     * @description Handler of the 'intent.bb.personalProfile.email.add' intent.
	     * @type {function}
	     */
	    showAddEmailForm: handleRequest(_constants.Intent.SHOW_ADD_EMAIL_FORM, function () {
	      service.resetSelectedEmailIfNeeded();
	      service.setInitialEmailForm();
	    }),
	
	    /**
	     * @name Intents#showEditEmailForm
	     * @description Handler of the 'intent.bb.personalProfile.email.edit' intent.
	     * @type {function}
	     */
	    showEditEmailForm: handleRequest(_constants.Intent.SHOW_EDIT_EMAIL_FORM, function (email) {
	      if (email) {
	        service.setEmailForm(email);
	      } else {
	        throw new Error('Email is undefined.\n        Please make sure to pass an email object as the payload of the intent.');
	      }
	    })
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bbm-personal-profile-email-form-ng.js.map