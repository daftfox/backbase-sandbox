(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-dropdown-select-ng"), require("ui-bb-loading-overlay-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-user-identity-details-ng", ["vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "ui-bb-dropdown-select-ng", "ui-bb-loading-overlay-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-user-identity-details-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-dropdown-select-ng"), require("ui-bb-loading-overlay-ng"));
	else
		root["ext-bb-user-identity-details-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["ui-bb-dropdown-select-ng"], root["ui-bb-loading-overlay-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__) {
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

	module.exports = __webpack_require__(8);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _helpers = __webpack_require__(9);
	
	Object.defineProperty(exports, 'helpers', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_helpers).default;
	  }
	});
	
	var _vendorBbAngularNgAria = __webpack_require__(3);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbI18nNg = __webpack_require__(7);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbDropdownSelectNg = __webpack_require__(10);
	
	var _uiBbDropdownSelectNg2 = _interopRequireDefault(_uiBbDropdownSelectNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(11);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bb-user-identity-details-ng
	 *
	 * @description
	 * Default extension for widget-bb-user-identity-details-ng
	 *
	 * @requires vendor-bb-angular-ng-aria
	 */
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbI18nNg2.default, _uiBbDropdownSelectNg2.default, _uiBbLoadingOverlayNg2.default];
	
	var hooks = exports.hooks = {};
	
	var events = exports.events = {};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var templates = {
	  viewDetails: '#ext-bb-user-identity-details-ng/view-details.html'
	};
	
	/**
	 * @name itemsFromModel
	 *
	 * @type {function}
	 * @description Function to process model item in order
	 * to have it suitable for the usage within the actual template
	 *
	 * @param {object} item from the state container to be transformed
	 * @returns {object} item to be used in the extension
	 */
	
	exports.default = function (_ref) {
	  var router = _ref.router;
	
	  /**
	   * @name auditLogIntentDefaultParams
	   *
	   * @type {function}
	   * @description Returns intent configuration to send to the audit widget
	   * @param {object} userIdentity The current user identity
	   * @param {string} userIdentity.externalId The username of the current user identity
	   * @returns {object} Intent configuration
	   * @inner
	   */
	  var auditLogIntentDefaultParams = function auditLogIntentDefaultParams(_ref2) {
	    var externalId = _ref2.externalId;
	    return {
	      usernames: {
	        value: externalId,
	        disabled: true
	      }
	    };
	  };
	
	  return {
	    /**
	     * @name template
	     *
	     * @type {function}
	     * @description Returns a current template
	     * @returns {string} template id
	     */
	    get template() {
	      return templates[router.getRoute()];
	    },
	
	    /**
	     * @name auditLogIntentDefaultParams
	     *
	     * @type {function}
	     * @description Returns intent configuration to send to the audit widget
	     * @param {object} userIdentity The current user identity
	     * @param {string} userIdentity.externalId The username of the current user identity
	     * @returns {object} Intent configuration
	     */
	    auditLogIntentDefaultParams: auditLogIntentDefaultParams,
	
	    /**
	     * @name auditLogIntentPaymentsParams
	     *
	     * @type {function}
	     * @description Returns intent configuration to send to the audit widget
	     * @param {object} userIdentity The current user identity
	     * @param {string} userIdentity.externalId The username of the current user identity
	     * @returns {object} Intent configuration
	     */
	    auditLogIntentPaymentsParams: function auditLogIntentPaymentsParams(_ref3) {
	      var externalId = _ref3.externalId;
	      return Object.assign({}, auditLogIntentDefaultParams({ externalId: externalId }), {
	        eventCategories: {
	          value: 'Payments',
	          disabled: true
	        }
	      });
	    }
	  };
	};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-user-identity-details-ng.js.map