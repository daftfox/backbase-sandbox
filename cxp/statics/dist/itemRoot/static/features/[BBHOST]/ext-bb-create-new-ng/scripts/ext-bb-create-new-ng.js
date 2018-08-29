(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("vendor-bb-uib-dropdown"), require("ui-bb-is-permitted-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-create-new-ng", ["vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "vendor-bb-uib-dropdown", "ui-bb-is-permitted-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-create-new-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("vendor-bb-uib-dropdown"), require("ui-bb-is-permitted-ng"));
	else
		root["ext-bb-create-new-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["vendor-bb-uib-dropdown"], root["ui-bb-is-permitted-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) {
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

	module.exports = __webpack_require__(5);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(6);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbI18nNg = __webpack_require__(7);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _vendorBbUibDropdown = __webpack_require__(8);
	
	var _vendorBbUibDropdown2 = _interopRequireDefault(_vendorBbUibDropdown);
	
	var _uiBbIsPermittedNg = __webpack_require__(9);
	
	var _uiBbIsPermittedNg2 = _interopRequireDefault(_uiBbIsPermittedNg);
	
	var _hooks = __webpack_require__(10);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// uncomment below to include CSS in your extension
	// import '../styles/index.css';
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbI18nNg2.default, _vendorBbUibDropdown2.default, _uiBbIsPermittedNg2.default]; /**
	                                                                                                                                                                    * @module ext-bb-create-new-ng
	                                                                                                                                                                    *
	                                                                                                                                                                    * @description
	                                                                                                                                                                    * Default extension for widget-bb-create-new-ng
	                                                                                                                                                                    *
	                                                                                                                                                                    * @requires vendor-bb-angular-ng-aria
	                                                                                                                                                                    */
	var hooks = exports.hooks = extHooks;
	
	var helpers = exports.helpers = {};
	
	var events = exports.events = {};

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getRequestedPrivileges = exports.getActionEvents = exports.getActionNames = exports.getActionsList = undefined;
	
	var _constants = __webpack_require__(11);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PAYMENT = _constants2.default.PAYMENT,
	    CONTACT = _constants2.default.CONTACT;
	
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for ext-bb-create-new-ng extension
	 */
	
	/**
	 * @description
	 * List of actions which allowed to invoke by the user
	 *
	 * @inner
	 * @type {array}
	 */
	
	var actions = [{
	  key: 'menu.item.label.payment',
	  action: 'payment',
	  intent: 'go.payment.create',
	  permission: PAYMENT.resource + '.' + PAYMENT.function + '.' + PAYMENT.privileges[0]
	}, {
	  key: 'menu.item.label.contact',
	  action: 'contact',
	  intent: 'go.contact.create',
	  permission: CONTACT.resource + '.' + CONTACT.function + '.' + CONTACT.privileges[0]
	}, {
	  key: 'menu.item.label.action',
	  action: 'action',
	  intent: 'go.action.create',
	  permission: ''
	}, {
	  key: 'menu.item.label.message',
	  action: 'message',
	  intent: 'go.message.create',
	  permission: ''
	}, {
	  key: 'menu.item.label.batch',
	  action: 'batch',
	  intent: 'go.batch.import',
	  permission: ''
	}];
	
	/**
	 * @name Hooks#getActionsList
	 * @type {function}
	 *
	 * @description
	 * Returns a collection of actions allowed for a user
	 *
	 * @return {array}
	 */
	var getActionsList = exports.getActionsList = function getActionsList() {
	  return actions;
	};
	
	/**
	 * @name Hooks#getActionNames
	 * @type {function}
	 *
	 * @description
	 * Returns a list of action names allowed for a user
	 *
	 * @return {array}
	 */
	var getActionNames = exports.getActionNames = function getActionNames() {
	  return actions.map(function (item) {
	    return item.action;
	  });
	};
	
	/**
	 * @name Hooks#getActionEvents
	 * @type {function}
	 *
	 * @description
	 * Returns a list of event names
	 *
	 * @return {array}
	 */
	var getActionEvents = exports.getActionEvents = function getActionEvents() {
	  return actions.map(function (item) {
	    return item.intent;
	  });
	};
	
	/**
	 * @name Hooks#getRequestedPrivileges
	 * @type {Function}
	 *
	 * @description
	 * Prepare required privileges into a form ready for template
	
	 * @returns {Array.<Object>} Required privileges array
	 */
	var getRequestedPrivileges = exports.getRequestedPrivileges = function getRequestedPrivileges() {
	  return [_constants2.default.PAYMENT, _constants2.default.CONTACT];
	};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var permissions = {
	  CONTACT: {
	    resource: 'Contacts',
	    function: 'Contacts',
	    privileges: ['create']
	  },
	  PAYMENT: {
	    resource: 'Payments',
	    function: 'SEPA CT',
	    privileges: ['create']
	  }
	};
	
	exports.default = permissions;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-create-new-ng.js.map