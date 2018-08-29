(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("lib-bb-widget-ng"), require("lib-bb-storage-ng"), require("lib-bb-login-logout-notifier-ng"), require("model-bb-login-ng"), require("lib-bb-user-data-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-user-menu-ng", ["vendor-bb-angular", "lib-bb-widget-extension-ng", "lib-bb-intent-ng", "lib-bb-widget-ng", "lib-bb-storage-ng", "lib-bb-login-logout-notifier-ng", "model-bb-login-ng", "lib-bb-user-data-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-user-menu-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("lib-bb-widget-ng"), require("lib-bb-storage-ng"), require("lib-bb-login-logout-notifier-ng"), require("model-bb-login-ng"), require("lib-bb-user-data-ng"));
	else
		root["widget-bb-user-menu-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-extension-ng"], root["lib-bb-intent-ng"], root["lib-bb-widget-ng"], root["lib-bb-storage-ng"], root["lib-bb-login-logout-notifier-ng"], root["model-bb-login-ng"], root["lib-bb-user-data-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_50__, __WEBPACK_EXTERNAL_MODULE_51__, __WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_62__, __WEBPACK_EXTERNAL_MODULE_63__, __WEBPACK_EXTERNAL_MODULE_64__, __WEBPACK_EXTERNAL_MODULE_68__) {
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

	module.exports = __webpack_require__(80);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_50__;

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_51__;

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_62__;

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_63__;

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_64__;

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_68__;

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(53);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbIntentNg = __webpack_require__(51);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbUserDataNg = __webpack_require__(68);
	
	var _libBbUserDataNg2 = _interopRequireDefault(_libBbUserDataNg);
	
	var _modelBbLoginNg = __webpack_require__(64);
	
	var _modelBbLoginNg2 = _interopRequireDefault(_modelBbLoginNg);
	
	var _libBbLoginLogoutNotifierNg = __webpack_require__(63);
	
	var _libBbLoginLogoutNotifierNg2 = _interopRequireDefault(_libBbLoginLogoutNotifierNg);
	
	var _libBbWidgetExtensionNg = __webpack_require__(50);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbStorageNg = __webpack_require__(62);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _controller = __webpack_require__(81);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(83);
	
	var _defaultHooks2 = _interopRequireDefault(_defaultHooks);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bb-user-menu-ng
	 *
	 * @description
	 * User Menu widget
	 */
	var moduleKey = 'widget-bb-user-menu-ng';
	var hooksKey = moduleKey + ':hooks';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbWidgetNg2.default, _modelBbLoginNg2.default, _libBbIntentNg2.default, _libBbUserDataNg2.default, _libBbLoginLogoutNotifierNg2.default, _libBbStorageNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(_defaultHooks2.default)).controller('UserMenuController', [
	// dependencies to inject
	hooksKey, _modelBbLoginNg.modelLoginKey, _libBbUserDataNg.bbUserDataServiceKey, _libBbWidgetNg.widgetKey, _libBbLoginLogoutNotifierNg.bbLoginLogoutNotifierServiceKey, _libBbStorageNg.bbStorageServiceKey, '$window',
	/* into */
	_controller2.default]).run([_libBbIntentNg.bbIntentKey, function (bbIntent) {
	  bbIntent.init();
	}]).name;
	
	/**
	 * @typedef {object} User
	 * @property {string} name Name that should be displayed on page
	 * @property {?string} username Internal user identifier
	 */
	
	/**
	 * @typedef {object} Portal
	 * @property {string} loggedInUserId Internally used unique identification of the user
	 */

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = UserMenuController;
	
	var _constants = __webpack_require__(82);
	
	/* global window */
	/* eslint no-underscore-dangle: ["error", { "allow": ["_portalConfiguration"] }] */
	/**
	 * @name UserMenuController
	 * @type {object}
	 *
	 * @description
	 * User Menu widget
	 */
	function UserMenuController(hooks, model, userDataService, widgetInstance, loginLogoutNotifier, bbStorage, $window) {
	  var $ctrl = this;
	
	  var logoutRedirectPage = widgetInstance.getStringPreference('logoutRedirectPage');
	  var userDataUrl = widgetInstance.getStringPreference('userDataUrl');
	
	  var cx5Portal = $window.b$ && $window.b$.portal;
	  var cx6Portal = $window._portalConfiguration;
	
	  var urlRoot = cx5Portal ? cx5Portal.config.serverRoot : cx6Portal.linkRoot;
	  var logoutRedirectUrl = cx5Portal || cx6Portal ? urlRoot + '/' + (cx5Portal || cx6Portal).portalName + '/' + logoutRedirectPage : logoutRedirectPage;
	
	  var unsubscribeFromUserLogout = function unsubscribeFromUserLogout() {};
	
	  var logout = function logout() {
	    return model.logout().then(function () {
	      bbStorage.removeItem(_constants.BbStorageKeys.PRODUCT_SUMMARY);
	      bbStorage.removeItem(_constants.BbStorageKeys.PRODUCT_SELECTED);
	      bbStorage.removeItem(_constants.BbStorageKeys.PRODUCTS_SELECTED);
	      bbStorage.removeItem(_constants.BbStorageKeys.CONTACT_SELECTED);
	    }).then(function () {
	      loginLogoutNotifier.setUserLoggedOut();
	      $window.location.assign(logoutRedirectUrl);
	    });
	  };
	
	  var loggedUser = function loggedUser() {
	    // eslint-disable-next-line max-len, no-console
	    console.warn('DEPRECATED - loggedUser method will be removed in the next component major release. Use \'currentUser\' object instead.');
	    return $ctrl.currentUser.name || '';
	  };
	
	  /**
	   * @name getUserFromPortal
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Retrieves information about currently logged in user from CX endpoint or CXP global object
	   *
	   * @returns {Promise}
	   */
	  var getUserFromPortal = function getUserFromPortal() {
	    return userDataService.getUserData().then(function (userData) {
	      $ctrl.currentUser = hooks.processProfileData(userData);
	    });
	  };
	
	  var $onInit = function $onInit() {
	    unsubscribeFromUserLogout = loginLogoutNotifier.subscribeToUserLogout(function () {
	      $window.location.assign(logoutRedirectUrl);
	    });
	
	    return getUserFromPortal();
	  };
	
	  var $onDestroy = function $onDestroy() {
	    unsubscribeFromUserLogout();
	  };
	
	  Object.assign($ctrl, {
	    /**
	     * @description AngularJS Lifecycle hook used to initialize the controller
	     * @type {function}
	     *
	     * @name UserMenuController#$onInit
	     * @returns {Promise.<void>}
	     */
	    $onInit: $onInit,
	    /**
	     * @description AngularJS Lifecycle hook used to destroy the controller
	     * @type {function}
	     *
	     * @name UserMenuController#$onDestroy
	     * @returns {Promise.<void>}
	     */
	    $onDestroy: $onDestroy,
	    /**
	     * @description Logout function
	     * @type {function}
	     *
	     * @name UserMenuController#logout
	     * @returns {Promise}
	     */
	    logout: logout,
	    /**
	     * @description Currently logged in user's data object
	     * @name UserMenuController#currentUser
	     * @type {User}
	     */
	    currentUser: {},
	    /**
	     * @description Retrieves logged in user id
	     * Returns empty string if user is not found (deprecated)
	     * @type {function}
	     *
	     * @name UserMenuController#loggedUser
	     * @returns {string}
	     */
	    loggedUser: loggedUser,
	    /**
	     * @description URL that leads to the page with additional user data
	     * @name UserMenuController#userDataUrl
	     * @type {string}
	     */
	    userDataUrl: userDataUrl
	  });
	}

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable import/prefer-default-export */
	
	/**
	 * @name BbStorageKeys
	 *
	 * @description
	 * bbStorage keys enum.
	 *
	 * @type {object}
	 */
	var BbStorageKeys = exports.BbStorageKeys = {
	  PRODUCT_SUMMARY: 'bb.product.summary.data',
	  PRODUCT_SELECTED: 'bb.product.selected',
	  PRODUCTS_SELECTED: 'bb.event.products.selected',
	  CONTACT_SELECTED: 'bb.contact.selected'
	};

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name default-hooks
	 * @type {object}
	 *
	 * @description
	 * Default hooks for widget-bb-user-menu-ng
	 */
	
	/**
	 * @name default-hooks#processProfileData
	 * @type {function}
	 *
	 * @description
	 * Processes user data retrieved from user profile endpoint
	 *
	 * @param {User} user User data
	 * @returns {User} Processed data
	 */
	var processProfileData = function processProfileData(user) {
	  return user;
	};
	
	exports.default = {
	  processProfileData: processProfileData
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-user-menu-ng.js.map