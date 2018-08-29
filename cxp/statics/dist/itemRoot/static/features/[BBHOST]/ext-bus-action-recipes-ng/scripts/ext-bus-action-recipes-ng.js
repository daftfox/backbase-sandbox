(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-substitute-error-ng"), require("ui-bb-i18n-ng"), require("ui-bb-account-selector-ng"), require("ui-bb-dropdown-select-ng"), require("ui-bb-currency-input-ng"), require("ui-bb-format-amount-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-confirm-ng"), require("ui-bb-switcher-ng"), require("ui-bb-load-more-ng"), require("ui-bb-empty-state-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bus-action-recipes-ng", ["vendor-bb-angular-ng-aria", "ui-bb-substitute-error-ng", "ui-bb-i18n-ng", "ui-bb-account-selector-ng", "ui-bb-dropdown-select-ng", "ui-bb-currency-input-ng", "ui-bb-format-amount-ng", "ui-bb-loading-indicator-ng", "ui-bb-confirm-ng", "ui-bb-switcher-ng", "ui-bb-load-more-ng", "ui-bb-empty-state-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bus-action-recipes-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-substitute-error-ng"), require("ui-bb-i18n-ng"), require("ui-bb-account-selector-ng"), require("ui-bb-dropdown-select-ng"), require("ui-bb-currency-input-ng"), require("ui-bb-format-amount-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-confirm-ng"), require("ui-bb-switcher-ng"), require("ui-bb-load-more-ng"), require("ui-bb-empty-state-ng"));
	else
		root["ext-bus-action-recipes-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-substitute-error-ng"], root["ui-bb-i18n-ng"], root["ui-bb-account-selector-ng"], root["ui-bb-dropdown-select-ng"], root["ui-bb-currency-input-ng"], root["ui-bb-format-amount-ng"], root["ui-bb-loading-indicator-ng"], root["ui-bb-confirm-ng"], root["ui-bb-switcher-ng"], root["ui-bb-load-more-ng"], root["ui-bb-empty-state-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_16__) {
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

	module.exports = __webpack_require__(15);

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
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
/* 10 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hooks = exports.events = exports.helpers = exports.dependencyKeys = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(2);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(3);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbI18nNg = __webpack_require__(4);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbAccountSelectorNg = __webpack_require__(5);
	
	var _uiBbAccountSelectorNg2 = _interopRequireDefault(_uiBbAccountSelectorNg);
	
	var _uiBbDropdownSelectNg = __webpack_require__(6);
	
	var _uiBbDropdownSelectNg2 = _interopRequireDefault(_uiBbDropdownSelectNg);
	
	var _uiBbCurrencyInputNg = __webpack_require__(7);
	
	var _uiBbCurrencyInputNg2 = _interopRequireDefault(_uiBbCurrencyInputNg);
	
	var _uiBbFormatAmountNg = __webpack_require__(8);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(9);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbConfirmNg = __webpack_require__(10);
	
	var _uiBbConfirmNg2 = _interopRequireDefault(_uiBbConfirmNg);
	
	var _uiBbSwitcherNg = __webpack_require__(11);
	
	var _uiBbSwitcherNg2 = _interopRequireDefault(_uiBbSwitcherNg);
	
	var _uiBbLoadMoreNg = __webpack_require__(12);
	
	var _uiBbLoadMoreNg2 = _interopRequireDefault(_uiBbLoadMoreNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(16);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _helpers = __webpack_require__(17);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _events = __webpack_require__(18);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _hooks = __webpack_require__(19);
	
	var _hooks2 = _interopRequireDefault(_hooks);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbSubstituteErrorNg2.default, _uiBbI18nNg2.default, _uiBbAccountSelectorNg2.default, _uiBbDropdownSelectNg2.default, _uiBbCurrencyInputNg2.default, _uiBbFormatAmountNg2.default, _uiBbLoadingIndicatorNg2.default, _uiBbConfirmNg2.default, _uiBbSwitcherNg2.default, _uiBbLoadMoreNg2.default, _uiBbEmptyStateNg2.default]; /**
	                                                                                                                                                                                                                                                                                                                                                                                                                  * @module ext-bb-action-recipes-ng
	                                                                                                                                                                                                                                                                                                                                                                                                                  *
	                                                                                                                                                                                                                                                                                                                                                                                                                  * @description
	                                                                                                                                                                                                                                                                                                                                                                                                                  * Action Recipes default extension.
	                                                                                                                                                                                                                                                                                                                                                                                                                  *
	                                                                                                                                                                                                                                                                                                                                                                                                                  * @example
	                                                                                                                                                                                                                                                                                                                                                                                                                  * <!-- messages widget model.xml -->
	                                                                                                                                                                                                                                                                                                                                                                                                                  * <property name="extension" viewHint="text-input,admin">
	                                                                                                                                                                                                                                                                                                                                                                                                                  *   <value type="string">ext-bb-action-recipes-ng</value>
	                                                                                                                                                                                                                                                                                                                                                                                                                  * </property>
	                                                                                                                                                                                                                                                                                                                                                                                                                  */
	
	var helpers = exports.helpers = _helpers2.default;
	var events = exports.events = _events2.default;
	var hooks = exports.hooks = _hooks2.default;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  /**
	   * @name Helpers#isValid
	   * @description
	   * Validates recipe data
	   * @type {Function}
	   * @param {Object} recipe Recipe object
	   * @returns {Boolean} True if recipe passes the validation
	   */
	  var isValid = function isValid(recipe) {
	    return recipe.account && recipe.amount.value && recipe.actions.isSelected();
	  };
	
	  return {
	    isValid: isValid
	  };
	};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var events = function events(_ref) {
	  var notifications = _ref.notifications,
	      $filter = _ref.$filter;
	  return {
	    'bb.event.actionrecipe.activate.failed': function bbEventActionrecipeActivateFailed() {
	      notifications.notifyAlert($filter('i18n')('error.recipe.activation.failed'));
	    },
	    'bb.event.actionrecipe.deactivate.failed': function bbEventActionrecipeDeactivateFailed() {
	      notifications.notifyAlert($filter('i18n')('error.recipe.deactivation.failed'));
	    }
	  };
	};
	
	exports.default = events;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Hooks
	 * @type {Object}
	 */
	exports.default = {
	  /**
	   * @description
	   * Do check need or no to get permissions.
	   * @name Hooks#shouldCheckPermisstions
	   * @type {Function}
	   * @returns {Boolean} true value for bussiness ext
	   */
	  shouldCheckPermissions: function shouldCheckPermissions() {
	    return true;
	  }
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bus-action-recipes-ng.js.map