(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-autocomplete-search-ng"), require("ui-bb-avatar-ng"), require("vendor-bb-uib-popover"), require("ui-bb-modal-ng"), require("ui-bb-ellipsis-tooltip-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-user-context-menu-ng", ["vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "ui-bb-autocomplete-search-ng", "ui-bb-avatar-ng", "vendor-bb-uib-popover", "ui-bb-modal-ng", "ui-bb-ellipsis-tooltip-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-user-context-menu-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-autocomplete-search-ng"), require("ui-bb-avatar-ng"), require("vendor-bb-uib-popover"), require("ui-bb-modal-ng"), require("ui-bb-ellipsis-tooltip-ng"));
	else
		root["ext-bb-user-context-menu-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["ui-bb-autocomplete-search-ng"], root["ui-bb-avatar-ng"], root["vendor-bb-uib-popover"], root["ui-bb-modal-ng"], root["ui-bb-ellipsis-tooltip-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_26__) {
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

	module.exports = __webpack_require__(22);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
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
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _uiBbAvatarNg = __webpack_require__(23);
	
	var _uiBbAvatarNg2 = _interopRequireDefault(_uiBbAvatarNg);
	
	var _uiBbI18nNg = __webpack_require__(7);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _vendorBbAngularNgAria = __webpack_require__(6);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _vendorBbUibPopover = __webpack_require__(24);
	
	var _vendorBbUibPopover2 = _interopRequireDefault(_vendorBbUibPopover);
	
	var _uiBbModalNg = __webpack_require__(25);
	
	var _uiBbModalNg2 = _interopRequireDefault(_uiBbModalNg);
	
	var _uiBbAutocompleteSearchNg = __webpack_require__(19);
	
	var _uiBbAutocompleteSearchNg2 = _interopRequireDefault(_uiBbAutocompleteSearchNg);
	
	var _uiBbEllipsisTooltipNg = __webpack_require__(26);
	
	var _uiBbEllipsisTooltipNg2 = _interopRequireDefault(_uiBbEllipsisTooltipNg);
	
	var _hooks = __webpack_require__(27);
	
	var _hooks2 = _interopRequireDefault(_hooks);
	
	var _helpers = __webpack_require__(28);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbAvatarNg2.default, _uiBbI18nNg2.default, _vendorBbAngularNgAria2.default, _vendorBbUibPopover2.default, _uiBbModalNg2.default, _uiBbAutocompleteSearchNg2.default, _uiBbEllipsisTooltipNg2.default]; /**
	                                                                                                                                                                                                                                                          * @module ext-bb-user-context-menu-ng
	                                                                                                                                                                                                                                                          *
	                                                                                                                                                                                                                                                          * @description
	                                                                                                                                                                                                                                                          * Default extension for User Context Menu widget.
	                                                                                                                                                                                                                                                          *
	                                                                                                                                                                                                                                                          * @requires ui-bb-avatar-ng
	                                                                                                                                                                                                                                                          * @requires ui-bb-i18n-ng
	                                                                                                                                                                                                                                                          * @requires vendor-bb-angular-ng-aria
	                                                                                                                                                                                                                                                          *
	                                                                                                                                                                                                                                                          * @example
	                                                                                                                                                                                                                                                          * <!-- User Context Menu widget model.xml -->
	                                                                                                                                                                                                                                                          * <property name="extension" viewHint="text-input,admin">
	                                                                                                                                                                                                                                                          *  <value type="string">ext-bb-user-context-menu-ng</value>
	                                                                                                                                                                                                                                                          * </property>
	                                                                                                                                                                                                                                                          */
	var hooks = exports.hooks = _hooks2.default;
	var helpers = exports.helpers = _helpers2.default;
	exports.default = dependencyKeys;
	
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
/* 23 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Hooks#processProfileData
	 * @type {function}
	 *
	 * @description
	 * Processes user data retrieved from user profile endpoint
	 *
	 * @param {User} user User data
	 * @returns {User} Processed data
	 */
	var processProfileData = function processProfileData(user) {
	  return Object.assign(user, { name: user.username });
	};
	
	exports.default = {
	  processProfileData: processProfileData
	};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var helpers = function helpers() {
	  var extensionReference = void 0;
	  var controllerReference = void 0;
	
	  return {
	    /**
	     * @name Helpers#openContextForm
	     * @type {function}
	     *
	     * @description
	     * Open change User Context form
	     *
	     * @param {object} ext   Extension reference
	     * @param {object} $ctrl Controller reference
	     */
	    openContextForm: function openContextForm(ext, $ctrl) {
	      extensionReference = ext;
	      controllerReference = $ctrl;
	      extensionReference.open = true;
	    },
	
	    /**
	     * @name Helpers#dismissAccount
	     * @type {function}
	     *
	     * @description
	     * Dismiss changing User Context
	     */
	    dismissContext: function dismissContext() {
	      if (extensionReference) {
	        extensionReference.open = false;
	        controllerReference.resetServiceAgreements();
	      }
	    },
	
	    /**
	     * @name isContextSelected
	     * @type {function}
	     * @description
	     * Checks if all necessary properties are defined for selecting a context
	     *
	     * @param {object} state Current state
	     * @returns {Boolean}
	     */
	    isContextSelected: function isContextSelected(state) {
	      return state.serviceAgreementId && state.serviceAgreementName && state.legalEntityId && state.legalEntityName;
	    }
	  };
	};
	
	exports.default = helpers;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-user-context-menu-ng.js.map