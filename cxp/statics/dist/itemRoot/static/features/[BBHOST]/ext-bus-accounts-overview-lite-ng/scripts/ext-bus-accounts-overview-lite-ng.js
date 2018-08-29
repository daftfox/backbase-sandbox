(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-format-amount-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-navigate-to-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-inline-status-ng"), require("ui-bb-ellipsis-tooltip-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bus-accounts-overview-lite-ng", ["ui-bb-format-amount-ng", "ui-bb-substitute-error-ng", "ui-bb-i18n-ng", "ui-bb-empty-state-ng", "ui-bb-navigate-to-ng", "ui-bb-loading-overlay-ng", "ui-bb-inline-status-ng", "ui-bb-ellipsis-tooltip-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bus-accounts-overview-lite-ng"] = factory(require("ui-bb-format-amount-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-navigate-to-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-inline-status-ng"), require("ui-bb-ellipsis-tooltip-ng"));
	else
		root["ext-bus-accounts-overview-lite-ng"] = factory(root["ui-bb-format-amount-ng"], root["ui-bb-substitute-error-ng"], root["ui-bb-i18n-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-navigate-to-ng"], root["ui-bb-loading-overlay-ng"], root["ui-bb-inline-status-ng"], root["ui-bb-ellipsis-tooltip-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_63__, __WEBPACK_EXTERNAL_MODULE_64__, __WEBPACK_EXTERNAL_MODULE_74__, __WEBPACK_EXTERNAL_MODULE_75__) {
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

	module.exports = __webpack_require__(73);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_63__;

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_64__;

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(5);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbInlineStatusNg = __webpack_require__(74);
	
	var _uiBbInlineStatusNg2 = _interopRequireDefault(_uiBbInlineStatusNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(64);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBbEllipsisTooltipNg = __webpack_require__(75);
	
	var _uiBbEllipsisTooltipNg2 = _interopRequireDefault(_uiBbEllipsisTooltipNg);
	
	var _uiBbFormatAmountNg = __webpack_require__(3);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(10);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBbNavigateToNg = __webpack_require__(63);
	
	var _uiBbNavigateToNg2 = _interopRequireDefault(_uiBbNavigateToNg);
	
	var _helpers = __webpack_require__(76);
	
	var extHelpers = _interopRequireWildcard(_helpers);
	
	var _hooks = __webpack_require__(77);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bus-accounts-ng
	 *
	 * @description
	 * Buisness extension for accounts.
	 *
	 * @example
	 * <!-- widget's model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bus-accounts-ng</value>
	 * </property>
	 */
	var dependencyKeys = exports.dependencyKeys = [_uiBbI18nNg2.default, _uiBbSubstituteErrorNg2.default, _uiBbInlineStatusNg2.default, _uiBbLoadingOverlayNg2.default, _uiBbEllipsisTooltipNg2.default, _uiBbFormatAmountNg2.default, _uiBbEmptyStateNg2.default, _uiBbNavigateToNg2.default];
	
	var hooks = exports.hooks = extHooks;
	
	var helpers = exports.helpers = extHelpers;

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_74__;

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_75__;

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description
	 * Table headers configuration
	 * @type {Array}
	 * @name headers
	 */
	var headers = exports.headers = [{
	  label: 'accounts.header.name'
	}, {
	  label: 'accounts.header.currency'
	}, {
	  label: 'accounts.header.availableBalance',
	  class: 'text-right'
	}, {
	  label: '', // Action buttons group
	  sortable: {}
	}];
	
	/**
	 * @description
	 * Gets the accounts collection from controller state
	 * @name getAccounts
	 * @type {function}
	 * @param  {object} $ctrl Current controller
	 * @return {array}        Accounts collection
	 */
	var getAccounts = exports.getAccounts = function getAccounts($ctrl) {
	  return $ctrl.state.accounts.data;
	};

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getRequestedPrivileges = undefined;
	
	var _constants = __webpack_require__(78);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name Hooks#getRequestedPrivileges
	 *
	 * @description
	 * Prepare required privileges into a form ready for template
	 *
	 * @type {Function}
	 * @returns {Array.<Object>} Required privileges array
	 */
	var getRequestedPrivileges = exports.getRequestedPrivileges = function getRequestedPrivileges() {
	  return _constants2.default;
	}; /* eslint-disable import/prefer-default-export */

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Required privileges array
	 * @type {Array.<Object>}
	 */
	exports.default = [{
	  resource: 'Transactions',
	  function: 'Transactions',
	  privileges: ['view']
	}, {
	  resource: 'Payments',
	  function: 'SEPA CT',
	  privileges: ['create']
	}];

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bus-accounts-overview-lite-ng.js.map