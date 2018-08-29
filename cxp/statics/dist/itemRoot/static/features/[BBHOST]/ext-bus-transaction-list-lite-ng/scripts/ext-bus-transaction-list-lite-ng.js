(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-navigate-to-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bus-transaction-list-lite-ng", ["vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "ui-bb-substitute-error-ng", "ui-bb-empty-state-ng", "ui-bb-loading-overlay-ng", "ui-bb-navigate-to-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bus-transaction-list-lite-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-navigate-to-ng"));
	else
		root["ext-bus-transaction-list-lite-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["ui-bb-substitute-error-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-loading-overlay-ng"], root["ui-bb-navigate-to-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_51__, __WEBPACK_EXTERNAL_MODULE_52__) {
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

	module.exports = __webpack_require__(50);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(3);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(51);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBbI18nNg = __webpack_require__(7);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(8);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(9);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBbNavigateToNg = __webpack_require__(52);
	
	var _uiBbNavigateToNg2 = _interopRequireDefault(_uiBbNavigateToNg);
	
	var _helpers = __webpack_require__(53);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _hooks = __webpack_require__(54);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bus-transaction-list-lite-ng
	 *
	 * @description
	 * Business Banking: transaction table view.
	 *
	 * @requires ui-bb-loading-indicator-ng
	 * @requires ui-bb-i18n-ng
	 * @requires ui-bb-substitute-error-ng
	 *
	 * @example
	 * <!-- payment widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bus-transaction-list-lite-ng</value>
	 * </property>
	 */
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbLoadingOverlayNg2.default, _uiBbI18nNg2.default, _uiBbSubstituteErrorNg2.default, _uiBbEmptyStateNg2.default, _uiBbNavigateToNg2.default];
	
	var hooks = exports.hooks = extHooks;
	var helpers = exports.helpers = _helpers2.default;

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_51__;

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_52__;

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var helpers = function helpers(_ref) {
	  var $filter = _ref.$filter;
	
	  var i18n = $filter('i18n');
	  var isProductSelected = function isProductSelected($ctrl) {
	    return !!$ctrl.product && $ctrl.product.productId !== -1;
	  };
	
	  return {
	    /**
	     * @description
	     * Configuration for table headers
	     *
	     * @name headers
	     * @type {array.<Header>}
	     *
	     */
	    headers: [{
	      label: 'details.label.product',
	      class: ''
	    }, {
	      label: 'details.label.counterParty',
	      class: ''
	    }, {
	      label: 'details.label.currency',
	      class: 'text-right'
	    }, {
	      label: 'details.label.amount',
	      class: 'text-right'
	    }, {
	      label: 'details.label.bookingDate',
	      class: 'text-right'
	    }],
	
	    /**
	     * @name isProductSelected
	     * @type {function}
	     * @param {object} $ctrl  Current controller
	     *
	     * @description
	     * Returns boolean true if product is selected, false - otherwise
	     *
	     * @returns {boolean}
	     */
	    isProductSelected: isProductSelected,
	
	    /**
	     * @description
	     * Get the correct transalated empty message when product is selected or not
	     *
	     * @name getEmptyMessage
	     * @type {function}
	     * @param {object} $ctrl  Current controller
	     *
	     * @returns {string}
	     */
	    getEmptyMessage: function getEmptyMessage($ctrl) {
	      var selectedMessage = 'message.no.transactions.subtitle';
	      var notSelectedMessage = 'message.noTransactionsForAccount';
	
	      return i18n(isProductSelected($ctrl) ? selectedMessage : notSelectedMessage);
	    }
	  };
	};
	
	exports.default = helpers;
	
	/**
	 * Header configuration object
	 * @typedef {object} Header
	 * @property {string} label       Translation key
	 * @property {string} class       CSS class name
	 * @property {function} isHidden  Check if header is hidden
	 * @property {Sortable} sortable  Sortable configuration
	 */

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name isDefaultProductFirst
	 *
	 * @description
	 * True if should return first product if selected product is not set.
	 *
	 * @type {function}
	 * @returns {boolean}
	 */
	exports.default = function () {
	  return false;
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bus-transaction-list-lite-ng.js.map