(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-account-selector-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-product-select-multiple-ng", ["vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "ui-bb-account-selector-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-product-select-multiple-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-account-selector-ng"));
	else
		root["ext-bb-product-select-multiple-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["ui-bb-account-selector-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_20__) {
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

	module.exports = __webpack_require__(19);

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(2);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbAccountSelectorNg = __webpack_require__(20);
	
	var _uiBbAccountSelectorNg2 = _interopRequireDefault(_uiBbAccountSelectorNg);
	
	var _hooks = __webpack_require__(21);
	
	var _hooks2 = _interopRequireDefault(_hooks);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bb-product-select-multiple-ng
	 *
	 * @description
	 * Product select multiple extension for product summary widget.
	 *
	 * @requires ui-bb-account-selector
	 *
	 * @example
	 * <!-- payment widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bb-product-select-multiple-ng</value>
	 * </property>
	 */
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbI18nNg2.default, _uiBbAccountSelectorNg2.default];
	
	var hooks = exports.hooks = _hooks2.default;
	var helpers = exports.helpers = {};
	var events = exports.events = {};
	
	/**
	 * @typedef {Object} ProductKindView
	 * @property {string} id The Product Kind identifier
	 * @property {string} name The name of the Kind, suitable for display to users
	 * @property {Array.<ProductView>} products The products of this Kind
	 */
	
	/**
	 * @typedef {Object} ProductView
	 * @property {string} id The internal Product Identifier
	 * @property {string} name The product's name, suitable for display to users
	 * @property {?string} identifier The identifier of the Product from the user's perspective
	 * @property {?string} amount The most important associated value to be displayed
	 * @property {?string} currency ISO currency code
	 */

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _productKindView = __webpack_require__(22);
	
	var _productKindView2 = _interopRequireDefault(_productKindView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-bb-product-summary-ng
	 */
	exports.default = {
	  /**
	   * @name Hooks#isSelectMultiple
	   * @description
	   * Hook for specifying whether the extension select single or multiple products
	   *
	   * @type {function}
	   * @returns {bolean}
	   */
	  isSelectMultiple: function isSelectMultiple() {
	    return true;
	  },
	  /**
	   * @name Hooks#processKinds
	   * @description
	   * Hook for process products
	   *
	   * Make flat list
	   *
	   * Map to view model
	   *
	   * @type {function}
	   * @param {array} product The source Product from the widget controller
	   * @returns {array<ProductView>}
	   */
	  processKinds: _productKindView2.default,
	  /**
	   * @name Hooks#processProductSelected
	   * @type {function}
	   *
	   * @description
	   * Hook for processing selected products after selection update
	   * Prepares the fields of the selected products into a form ready for display to the User
	   *
	   * @param {object} product Product to process
	   * @returns {object}
	   */
	  processProductsSelected: function processProductsSelected(products) {
	    return products.map(_productKindView.productKindView);
	  }
	};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var maskCardNumber = function maskCardNumber(suffix) {
	  return suffix && "XXXX-XXXX-XXXX-" + suffix;
	};
	
	var defaultViewModel = function defaultViewModel(product) {
	  return {
	    id: product.id,
	    name: product.name
	  };
	};
	
	var viewModelFactories = {
	  currentAccounts: function currentAccounts(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      identifier: product.IBAN,
	      amount: product.bookedBalance,
	      currency: product.currency
	    };
	  },
	
	  termDeposits: function termDeposits(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      identifier: product.BBAN,
	      amount: product.principalAmount,
	      currency: product.currency
	    };
	  },
	
	  savingsAccounts: function savingsAccounts(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      identifier: product.BBAN,
	      amount: product.bookedBalance,
	      currency: product.currency
	    };
	  },
	
	  creditCards: function creditCards(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      identifier: maskCardNumber(product.cardNumberSuffix),
	      amount: product.bookedBalance,
	      currency: product.currency
	    };
	  },
	
	  debitCards: function debitCards(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      identifier: maskCardNumber(product.cardNumberSuffix)
	    };
	  },
	
	  loans: function loans(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      identifier: product.BBAN,
	      amount: product.bookedBalance,
	      currency: product.currency
	    };
	  },
	
	  investmentAccounts: function investmentAccounts(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      identifier: product.BBAN,
	      amount: product.currentInvestmentValue,
	      currency: product.currency
	    };
	  }
	};
	
	/**
	 * @description
	 * Prepare the fields of a Product into a form ready for display to the User
	 *
	 * @inner
	 * @type {function}
	 * @param {object} product The source Product from the API
	 * @returns {ProductView}
	 */
	var productKindView = exports.productKindView = function productKindView(product) {
	  return Object.assign(product, viewModelFactories[product.kind](product) || defaultViewModel(product));
	};
	
	/**
	 * @description
	 * Prepare the fields of a Product Kind into a form ready for display to the User
	 *
	 * @private
	 * @type {function}
	 * @param {array<object>} kinds The source ProductKinds from the API
	 * @returns {array<ProductKindView>}
	 */
	
	exports.default = function (kinds) {
	  return kinds.reduce(function (memo, _ref) {
	    var products = _ref.products;
	    return memo.concat(products && products.length ? products.map(productKindView) : []);
	  }, []);
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-product-select-multiple-ng.js.map