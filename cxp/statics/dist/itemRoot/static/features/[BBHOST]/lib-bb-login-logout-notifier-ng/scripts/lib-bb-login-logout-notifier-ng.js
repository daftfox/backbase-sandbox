(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-event-bus-ng"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-login-logout-notifier-ng", ["vendor-bb-angular", "lib-bb-event-bus-ng"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-login-logout-notifier-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-event-bus-ng"));
	else
		root["lib-bb-login-logout-notifier-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-event-bus-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_33__) {
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

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bbLoginLogoutNotifierServiceKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbEventBusNg = __webpack_require__(33);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _bbLoginLogoutNotifier = __webpack_require__(34);
	
	var _bbLoginLogoutNotifier2 = _interopRequireDefault(_bbLoginLogoutNotifier);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'lib-bb-login-logout-notifier-ng';
	/**
	 * @name userDataServiceKey
	 * @type {string}
	 * @description User data service name
	 */
	/**
	 * @module lib-bb-login-logout-notifier
	 * @description
	 * Provides a cross-browser interface for tabs logout using localStorage
	 * It provides a flag 'IsLoggedIn' that is persisted in localStorage between Pages with 'true'
	 * when the user is logged in and should be removed when the user logs out.
	 * If there's no localStorage it fallsback to normal behavior (one tab logs out and
	 * others needs a refresh)
	 *
	 * @example
	 * import bbLoginLogoutNotifierModuleKey,
	 *  { bbLoginLogoutNotifierServiceKey } from 'lib-bb-login-logout-notifier-ng';
	 *
	 * angular
	 *   .module('ExampleModule', [
	 *     bbLoginLogoutNotifierModuleKey,
	 *   ])
	 *   .controller('MyController', [
	 *     bbLoginLogoutNotifierServiceKey,
	 *     // into //
	 *     (loginLogoutNotifier) => {
	 *       const $ctrl = this;
	 *       let unsubscribe = () => {};
	 *
	 *       const counterStorage = 'counter';
	 *
	 *       $ctrl.$onInit = () => {
	 *         unsubscribe = loginLogoutNotifier.subscribeToUserLogout(() => {
	 *           // Refresh page to respond to the logout
	 *           window.location.assign(logoutRedirectUrl);
	 *          });
	 *       };
	 *
	 *       $ctrl.$onDestroy = () => {
	 *         unsubscribe();
	 *       };
	 *
	 *       const logout = () => {
	 *          model.logout()
	 *           .then(() => {
	 *              // Update localStorage flag to be logged out
	 *              loginLogoutNotifier.setUserLoggedOut();
	 *              window.location.assign(logoutRedirectUrl);
	 *             });
	 *         };
	 *   ]);
	 */
	
	var bbLoginLogoutNotifierServiceKey = exports.bbLoginLogoutNotifierServiceKey = moduleKey + ':loginLogoutNotifierService';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbEventBusNg2.default]).factory(bbLoginLogoutNotifierServiceKey, [_libBbEventBusNg.eventBusKey, '$log', '$window',
	/* into */
	_bbLoginLogoutNotifier2.default]).run([bbLoginLogoutNotifierServiceKey, function (loginLogoutNotifier) {
	  loginLogoutNotifier.init();
	}]).name;

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
	
	exports.default = function (eventBus, $log, $window) {
	  var storage = $window.localStorage;
	  /**
	   * @name isLocalStorageAvailable
	   * @type {function}
	   * @returns {Boolean}
	   * @description Checks if local storage is available on current browser
	   */
	  var isLocalStorageAvailable = function isLocalStorageAvailable() {
	    try {
	      var x = '__storage_test__';
	      storage.setItem(x, x);
	      storage.removeItem(x);
	      return true;
	    } catch (e) {
	      return e instanceof DOMException && (
	      // everything except Firefox
	      e.code === 22 ||
	      // Firefox
	      e.code === 1014 ||
	      // test name field too, because code might not be present
	      // everything except Firefox
	      e.name === 'QuotaExceededError' ||
	      // Firefox
	      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
	      // acknowledge QuotaExceededError only if there's something already stored
	      storage.length !== 0;
	    }
	  };
	
	  /**
	   * @name setUserLoggedIn
	   * @type {function}
	   * @description The property IsLoggedIn should be set true
	   * if tuser log in
	   */
	  var setUserLoggedIn = function setUserLoggedIn() {
	    return isLocalStorageAvailable() ? storage.setItem(_constants.LOCAL_STORAGE_KEY, true) : false;
	  };
	
	  /**
	   * @name setUserLoggedOut
	   * @type {function}
	   * @description The property IsLoggedIn should be set false
	   * if tuser log out
	   */
	  var setUserLoggedOut = function setUserLoggedOut() {
	    return isLocalStorageAvailable() ? storage.removeItem(_constants.LOCAL_STORAGE_KEY) : false;
	  };
	
	  /**
	   * @name subscribeToUserLogout
	   * @type {function}
	   * @returns {Function} unsubscribe from the logout event
	   * @description listen for Logout event to execute whatever widgets
	   * needs after logout (Ex: refresh pages to logout from all pages)
	   */
	  var subscribeToUserLogout = function subscribeToUserLogout(callback) {
	    if (!isLocalStorageAvailable()) {
	      return false;
	    }
	
	    eventBus.subscribe(_constants.NOTIFICATION_LOGOUT_EVENT, callback);
	
	    return function () {
	      return eventBus.unsubscribe(_constants.NOTIFICATION_LOGOUT_EVENT);
	    };
	  };
	
	  /**
	   * @name init
	   * @type {function}
	   * @description Binds 'storage' change event
	   **/
	  var init = function init() {
	    if (!isLocalStorageAvailable()) {
	      return false;
	    }
	
	    return $window.addEventListener('storage', function (evt) {
	      // is user logged out
	      if (evt.key === _constants.LOCAL_STORAGE_KEY && JSON.parse(evt.newValue) !== true) {
	        eventBus.publish(_constants.NOTIFICATION_LOGOUT_EVENT);
	      }
	    });
	  };
	
	  return {
	    init: init,
	    setUserLoggedIn: setUserLoggedIn,
	    setUserLoggedOut: setUserLoggedOut,
	    subscribeToUserLogout: subscribeToUserLogout
	  };
	};
	
	var _constants = __webpack_require__(35);

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name NOTIFICATION_LOGOUT_EVENT
	 *
	 * @type {string}
	 * @description
	 * event name that should be triggered once user logout
	 */
	var NOTIFICATION_LOGOUT_EVENT = exports.NOTIFICATION_LOGOUT_EVENT = 'bb.event.logout.notify';
	
	/**
	 * @name LOCAL_STORAGE_KEY
	 *
	 * @type {string}
	 * @description
	 * The flag name which will be true when user are logged in
	 */
	var LOCAL_STORAGE_KEY = exports.LOCAL_STORAGE_KEY = 'bb.is.user.logged.in';

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-bb-login-logout-notifier-ng.js.map