(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-intent-ng"), require("lib-bb-widget-ng"), require("lib-bb-storage-ng"), require("lib-bb-login-logout-notifier-ng"), require("model-bb-login-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-login-ng", ["vendor-bb-angular", "lib-bb-intent-ng", "lib-bb-widget-ng", "lib-bb-storage-ng", "lib-bb-login-logout-notifier-ng", "model-bb-login-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-login-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-intent-ng"), require("lib-bb-widget-ng"), require("lib-bb-storage-ng"), require("lib-bb-login-logout-notifier-ng"), require("model-bb-login-ng"));
	else
		root["widget-bb-login-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-intent-ng"], root["lib-bb-widget-ng"], root["lib-bb-storage-ng"], root["lib-bb-login-logout-notifier-ng"], root["model-bb-login-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_51__, __WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_62__, __WEBPACK_EXTERNAL_MODULE_63__, __WEBPACK_EXTERNAL_MODULE_64__) {
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

	module.exports = __webpack_require__(61);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_51__;

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),

/***/ 61:
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
	
	var _libBbStorageNg = __webpack_require__(62);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _libBbLoginLogoutNotifierNg = __webpack_require__(63);
	
	var _libBbLoginLogoutNotifierNg2 = _interopRequireDefault(_libBbLoginLogoutNotifierNg);
	
	var _modelBbLoginNg = __webpack_require__(64);
	
	var _modelBbLoginNg2 = _interopRequireDefault(_modelBbLoginNg);
	
	var _controller = __webpack_require__(65);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _vendorBbAngular2.default.module('widget-bb-login-ng', [_modelBbLoginNg2.default, _libBbWidgetNg2.default, _libBbIntentNg2.default, _libBbLoginLogoutNotifierNg2.default, _libBbStorageNg2.default]).controller('LoginController', [
	// dependencies to inject
	_modelBbLoginNg.modelLoginKey, _libBbWidgetNg.widgetKey, '$window', _libBbLoginLogoutNotifierNg.bbLoginLogoutNotifierServiceKey, _libBbStorageNg.bbStorageServiceKey,
	/* into */
	_controller2.default])
	
	// Initialize intent library
	.run([_libBbIntentNg.bbIntentKey, function (intents) {
	  intents.init();
	}]).name; /**
	           * @module widget-bb-login-ng
	           *
	           * @description
	           * Login widget
	           */

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

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = LoginController;
	
	var _constants = __webpack_require__(66);
	
	/* global window */
	
	/**
	 * @name LoginController
	 * @type {object}
	 *
	 * @description
	 * Login widget
	 */
	function LoginController(model, widgetInstance, $window, loginLogoutNotifier, bbStorage) {
	  var $ctrl = this;
	  var portal = $window.b$ && $window.b$.portal;
	
	  var loginRedirectPage = widgetInstance.getStringPreference('loginRedirectPage');
	
	  var loginRedirectUrl = portal ? portal.config.serverRoot + '/' + portal.portalName + '/' + loginRedirectPage : loginRedirectPage;
	
	  var $onInit = function $onInit() {
	    if ($window.location.search && $window.location.search.indexOf('sa-error') !== -1) {
	      $ctrl.loginError = true;
	      $ctrl.loginErrorCode = 'sa-error';
	    }
	  };
	
	  var login = function login() {
	    $ctrl.isLoading = true;
	    return model.login($ctrl.username, $ctrl.password, $ctrl.extraFormFields).then(function (response) {
	      $ctrl.isLoading = false;
	      if (response.status === 200) {
	        loginLogoutNotifier.setUserLoggedIn();
	        bbStorage.removeItem(_constants.BbStorageKeys.PRODUCT_SUMMARY);
	        bbStorage.removeItem(_constants.BbStorageKeys.PRODUCT_SELECTED);
	        bbStorage.removeItem(_constants.BbStorageKeys.PRODUCTS_SELECTED);
	        bbStorage.removeItem(_constants.BbStorageKeys.CONTACT_SELECTED);
	        $window.location.assign(loginRedirectUrl);
	      }
	    }).catch(function (response) {
	      $ctrl.isLoading = false;
	      $ctrl.loginError = true;
	      $ctrl.loginErrorCode = response.status;
	      $ctrl.password = '';
	    });
	  };
	
	  Object.assign($ctrl, {
	    /**
	     * @description
	     * AngularJS Lifecycle hook used to initialize the controller
	     * @type {function}
	     *
	     * @name LoginController#$onInit
	     * @returns {void}
	     */
	    $onInit: $onInit,
	    /**
	     * @description Login function
	     * @type {function}
	     *
	     * @name LoginController#login
	     * @returns {Promise}
	     */
	    login: login,
	    /**
	     * @name LoginController#username
	     * @type {string}
	     */
	    username: '',
	    /**
	     * @name LoginController#password
	     * @type {string}
	     */
	    password: '',
	    /**
	     * @name LoginController#extraFormFields
	     * @type {object}
	     */
	    extraFormFields: {},
	    /**
	     * @name LoginController#loginError
	     * @type {boolean}
	     */
	    loginError: false,
	    /**
	     * @name LoginController#loginErrorCode
	     * @type {number}
	     */
	    loginErrorCode: 0,
	    /**
	     * @description
	     * Loading status
	     *
	     * @name isLoading
	     * @type {boolean}
	     */
	    isLoading: false
	  });
	}

/***/ }),

/***/ 66:
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

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-login-ng.js.map