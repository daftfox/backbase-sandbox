(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-avatar-ng"), require("ui-bb-i18n-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-personal-profile-ng", ["ui-bb-avatar-ng", "ui-bb-i18n-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-personal-profile-ng"] = factory(require("ui-bb-avatar-ng"), require("ui-bb-i18n-ng"));
	else
		root["ext-bbm-personal-profile-ng"] = factory(root["ui-bb-avatar-ng"], root["ui-bb-i18n-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_7__) {
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

	module.exports = __webpack_require__(25);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.intents = exports.helpers = undefined;
	
	var _uiBbAvatarNg = __webpack_require__(2);
	
	var _uiBbAvatarNg2 = _interopRequireDefault(_uiBbAvatarNg);
	
	var _uiBbI18nNg = __webpack_require__(7);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _helpers = __webpack_require__(26);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _intents = __webpack_require__(27);
	
	var _intents2 = _interopRequireDefault(_intents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bbm-personal-profile-ng
	 *
	 * @description
	 * Mobile extension for personal profile widget.
	 *
	 * @example
	 * <!-- personal profile widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bbm-personal-profile-ng</value>
	 * </property>
	 */
	var helpers = exports.helpers = _helpers2.default;
	var intents = exports.intents = _intents2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbAvatarNg2.default, _uiBbI18nNg2.default];

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/* global angular */
	/**
	 * @description
	 * Helpers for ext-bbm-personal-profile-ng
	 *
	 * @name Helpers
	 * @type {Object}
	 */
	exports.default = function (_ref) {
	  var stateContainer = _ref.stateContainer,
	      service = _ref.service,
	      intents = _ref.intents;
	
	  /**
	   * @name processUser
	   * @description Processes the user.
	   * @type {function}
	   *
	   * @param {module:model-bb-personal-profile-ng.UserProfile} user
	   * @returns {object} processed user.
	   * @inner
	   */
	  var processUser = function processUser(user) {
	    return user;
	  };
	
	  /**
	   * @name getLoading
	   * @description Returns the loading state.
	   * @type {function}
	   *
	   * @returns {boolean}
	   * @inner
	   */
	  var getLoading = stateContainer.createSelector(function (state) {
	    return state.user.loading;
	  });
	
	  /**
	   * @name getLoadingError
	   * @description Returns the error state.
	   * @type {function}
	   *
	   * @returns {boolean}
	   * @inner
	   */
	  var getLoadingError = stateContainer.createSelector(function (state) {
	    return state.user.error;
	  });
	
	  /**
	   * @name getUserData
	   * @description Returns a user.
	   * @type {function}
	   *
	   * @returns {module:model-bb-personal-profile-ng.UserProfile}
	   * @inner
	   */
	  var getUserData = stateContainer.createSelector(function (state) {
	    return state.user.data;
	  });
	
	  /**
	   * @name Helpers#hasUser
	   * @description Checks if the user is loaded.
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var hasUser = function hasUser() {
	    return Boolean(getUserData());
	  };
	
	  /**
	   * @name Helpers#getProcessedUser
	   * @description Returns a processed user.
	   * @type {function}
	   *
	   * @returns {object|null}
	   */
	  var getProcessedUser = stateContainer.createSelector(function (state) {
	    return state.user.data ? processUser(state.user.data) : null;
	  });
	
	  /**
	   * @name Helpers#showLoadingState
	   * @description Checks for the loading.
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var showLoadingState = function showLoadingState() {
	    return getLoading() && !hasUser();
	  };
	
	  /**
	   * @name Helpers#showErrorState
	   * @description Checks for the error state.
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var showErrorState = function showErrorState() {
	    return getLoadingError() && !getLoading();
	  };
	
	  /**
	   * @name Helpers#showAddPhoneForm
	   * @description Shows a form to create a new phone.
	   * @type {function}
	   *
	   * @return {void}
	   */
	  var showAddPhoneForm = function showAddPhoneForm() {
	    service.setInitialPhoneForm();
	    intents.showAddPhoneForm();
	  };
	
	  /**
	   * @name Helpers#showAddEmailForm
	   * @description Shows a form to create a new email.
	   * @type {function}
	   *
	   * @return {void}
	   */
	  var showAddEmailForm = function showAddEmailForm() {
	    service.setInitialEmailForm();
	    intents.showAddEmailForm();
	  };
	
	  /**
	   * @name Helpers#showEditPhoneForm
	   * @description Shows a form to edit an existed phone.
	   * @type {function}
	   *
	   * @param {module:model-bb-personal-profile-ng.Phone} phone
	   * @param {number} phoneIdx The position of the phone in the user's phone list.
	   * @return {void}
	   */
	  var showEditPhoneForm = function showEditPhoneForm(phone, phoneIdx) {
	    var phoneCopy = angular.copy(phone);
	
	    service.selectPhone(phoneIdx);
	    service.setPhoneForm(phoneCopy);
	    intents.showEditPhoneForm(phoneCopy);
	  };
	
	  /**
	   * @name Helpers#showEditEmailForm
	   * @description Shows a form to edit an existed email.
	   * @type {function}
	   *
	   * @param {module:model-bb-personal-profile-ng.Email} email
	   * @param {number} emailIdx The position of the email in the user's email list.
	   * @return {void}
	   */
	  var showEditEmailForm = function showEditEmailForm(email, emailIdx) {
	    var emailCopy = angular.copy(email);
	
	    service.selectEmail(emailIdx);
	    service.setEmailForm(emailCopy);
	    intents.showEditEmailForm(emailCopy);
	  };
	
	  return {
	    hasUser: hasUser,
	    getProcessedUser: getProcessedUser,
	    showLoadingState: showLoadingState,
	    showErrorState: showErrorState,
	    showAddPhoneForm: showAddPhoneForm,
	    showAddEmailForm: showAddEmailForm,
	    showEditPhoneForm: showEditPhoneForm,
	    showEditEmailForm: showEditEmailForm
	  };
	};

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(28);
	
	/**
	 * @name Intents
	 * @type {Object}
	 */
	exports.default = function (_ref) {
	  var createRequest = _ref.createRequest,
	      handleRequest = _ref.handleRequest;
	  return {
	    /**
	     * @name Intents#showPersonalProfileDetails
	     * @description Handler of the 'intent.bb.personalProfile.details.show' intent.
	     * @type {function}
	     */
	    showPersonalProfileDetails: handleRequest(_constants.Intent.SHOW_PERSONAL_PROFILE_DETAILS, function () {}),
	
	    /**
	     * @name Intents#showAddEmailForm
	     * @description The intent to show the form to create an email.
	     * @type {function}
	     */
	    showAddEmailForm: createRequest(_constants.Intent.SHOW_ADD_EMAIL_FORM),
	
	    /**
	     * @name Intents#showAddPhoneForm
	     * @description The intent to show the form to create a phone.
	     * @type {function}
	     */
	    showAddPhoneForm: createRequest(_constants.Intent.SHOW_ADD_PHONE_FORM),
	
	    /**
	     * @name Intents#showEditEmailForm
	     * @description The intent to show the form to edit an email.
	     * @type {function}
	     */
	    showEditEmailForm: createRequest(_constants.Intent.SHOW_EDIT_EMAIL_FORM),
	
	    /**
	     * @name Intents#showEditPhoneForm
	     * @description The intent to show the form to edit a phone.
	     * @type {function}
	     */
	    showEditPhoneForm: createRequest(_constants.Intent.SHOW_EDIT_PHONE_FORM)
	  };
	};

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable import/prefer-default-export */
	/**
	 * Extension intent enum
	 * @name Intent
	 * @type {object}
	 * @inner
	 */
	var Intent = exports.Intent = {
	  SHOW_PERSONAL_PROFILE_DETAILS: 'intent.rbm.personalProfile.details.show',
	  SHOW_EDIT_PHONE_FORM: 'intent.rbm.personalProfile.phone.edit',
	  SHOW_EDIT_EMAIL_FORM: 'intent.rbm.personalProfile.email.edit',
	  SHOW_ADD_PHONE_FORM: 'intent.rbm.personalProfile.phone.add',
	  SHOW_ADD_EMAIL_FORM: 'intent.rbm.personalProfile.email.add'
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bbm-personal-profile-ng.js.map