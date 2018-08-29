(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("ui-bb-account-selector-ng"), require("ui-bus-format-amount-ng"), require("ui-bb-loading-overlay-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bus-account-select-ng", ["ui-bb-i18n-ng", "ui-bb-account-selector-ng", "ui-bus-format-amount-ng", "ui-bb-loading-overlay-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bus-account-select-ng"] = factory(require("ui-bb-i18n-ng"), require("ui-bb-account-selector-ng"), require("ui-bus-format-amount-ng"), require("ui-bb-loading-overlay-ng"));
	else
		root["ext-bus-account-select-ng"] = factory(root["ui-bb-i18n-ng"], root["ui-bb-account-selector-ng"], root["ui-bus-format-amount-ng"], root["ui-bb-loading-overlay-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_61__, __WEBPACK_EXTERNAL_MODULE_64__) {
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

	module.exports = __webpack_require__(70);

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_61__;

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_64__;

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _uiBbAccountSelectorNg = __webpack_require__(20);
	
	var _uiBbAccountSelectorNg2 = _interopRequireDefault(_uiBbAccountSelectorNg);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(64);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBusFormatAmountNg = __webpack_require__(61);
	
	var _uiBusFormatAmountNg2 = _interopRequireDefault(_uiBusFormatAmountNg);
	
	var _helpers = __webpack_require__(71);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _hooks = __webpack_require__(72);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bus-account-select-ng
	 *
	 * @description
	 * Product select extension for accounts overview widget.
	 *
	 *
	 * @example
	 * <!-- payment widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bus-account-select-ng</value>
	 * </property>
	 */
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbAccountSelectorNg2.default, _uiBbI18nNg2.default, _uiBbLoadingOverlayNg2.default, _uiBusFormatAmountNg2.default];
	
	var hooks = exports.hooks = extHooks;
	
	var helpers = exports.helpers = _helpers2.default;
	
	var events = exports.events = {};

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Helpers for ext-bus-product-select-ng
	 * @name Helpers
	 * @type {Object}
	 */
	var helpers = function helpers(context) {
	  var filter = context.$filter;
	  var i18n = filter('i18n');
	
	  /**
	   * Contains translated string for account selector component
	   * @name Helpers#labels
	   * @type {module:ui-bb-search-box-ng.Labels}
	   */
	  var labels = {
	    allAccounts: i18n('accountSelect.label.allAccounts'),
	    accounts: i18n('accountSelect.label.accounts'),
	    account: i18n('accountSelect.label.account'),
	    noAccounts: i18n('accountSelect.label.noAccounts')
	  };
	
	  /**
	   * Contains configuration object for search box in account selector component
	   * @name Helpers#searchBox
	   * @type {SearchBox}
	   */
	  var searchBox = {
	    config: {
	      labels: {
	        placeholder: i18n('accountSelect.searchPlaceholder')
	      }
	    }
	  };
	
	  return {
	    labels: labels,
	    searchBox: searchBox
	  };
	};
	
	exports.default = helpers;
	
	/**
	 * @typedef {Object} SearchBox
	 * @property {?Number} minLength Determines minimum length of query string to apply search
	 * @property {?module:ui-bb-search-box-ng.Config} config Search box config object
	 */

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Hooks for ext-bus-product-select-ng
	 * @name Hooks
	 * @type {Object}
	 */
	
	var viewModel = function viewModel(account) {
	  return {
	    id: account.id,
	    name: account.name,
	    identifier: account.IBAN || account.BBAN || account.productNumber,
	    amount: account.availableBalance,
	    currency: account.currency
	  };
	};
	
	/**
	 * Prepare the fields of a Accounts into a form ready for display to the User
	 * @name Hooks#processAccounts
	 * @type {Function}
	 * @param {Object[]} accounts The source accounts from the API
	 * @returns {ProcessedAccount[]} Processed accounts
	 */
	var processAccounts = exports.processAccounts = function processAccounts(accounts) {
	  return accounts.map(viewModel);
	};
	
	/**
	 * Prepare the fields of a Account into a form ready for display to the User
	 * @name Hooks#processSelectedAccount
	 * @type {Function}
	 * @param {Object} account The source account from the API
	 * @returns {ProcessedAccount} Processed account
	 */
	var processSelectedAccount = exports.processSelectedAccount = function processSelectedAccount(account) {
	  return viewModel(account);
	};
	
	/**
	 * @typedef {Object} ProcessedAccount
	 * @property {String} id Account ID
	 * @property {String} name Account name
	 * @property {String} identifier Account identifier
	 * @property {String} amount Account amount
	 * @property {String} currency Account amount currency
	 */

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bus-account-select-ng.js.map