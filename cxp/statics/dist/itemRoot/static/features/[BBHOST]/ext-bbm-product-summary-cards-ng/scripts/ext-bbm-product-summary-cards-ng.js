(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("ui-bbm-product-kind-table-view-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-product-summary-cards-ng", ["ui-bb-i18n-ng", "ui-bbm-product-kind-table-view-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-product-summary-cards-ng"] = factory(require("ui-bb-i18n-ng"), require("ui-bbm-product-kind-table-view-ng"));
	else
		root["ext-bbm-product-summary-cards-ng"] = factory(root["ui-bb-i18n-ng"], root["ui-bbm-product-kind-table-view-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_48__) {
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

	module.exports = __webpack_require__(47);

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.intents = exports.helpers = undefined;
	
	var _uiBbmProductKindTableViewNg = __webpack_require__(48);
	
	var _uiBbmProductKindTableViewNg2 = _interopRequireDefault(_uiBbmProductKindTableViewNg);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _helpers = __webpack_require__(49);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _intents = __webpack_require__(52);
	
	var _intents2 = _interopRequireDefault(_intents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bbm-product-summary-cards-ng
	 *
	 * @description
	 * Mobile extension for the product summary widget.
	 *
	 * @requires ui-bbm-product-kind-table-view-ng
	 * @requires ui-bb-inline-status-ng
	 * @requires ui-bb-i18n-ng
	 *
	 * @example
	 * <!-- product summary widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bbm-product-summary-ng</value>
	 * </property>
	 */
	var helpers = exports.helpers = _helpers2.default;
	var intents = exports.intents = _intents2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbmProductKindTableViewNg2.default, _uiBbI18nNg2.default];

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_48__;

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _productKindView = __webpack_require__(50);
	
	var _productKindView2 = _interopRequireDefault(_productKindView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @description
	 * Helpers for ext-bbm-product-summary-ng.
	 *
	 * @name Helpers
	 * @type {Object}
	 */
	exports.default = function (_ref) {
	  var stateContainer = _ref.stateContainer,
	      intents = _ref.intents;
	
	  /**
	   * @name processKinds
	   * @description
	   * Processes the product kinds.
	   *
	   * @type {function}
	   * @param {module:model-bb-product-summary-ng.ProductKind[]} productKinds ProductKinds to process.
	   *
	   * @returns {object[]}
	   * @inner
	   */
	  var processKinds = function processKinds(productKinds) {
	    return productKinds.map(_productKindView2.default);
	  };
	
	  /**
	   * @name loading
	   * @description
	   * Returns the loading state.
	   * @type {function}
	   *
	   * @returns {boolean}
	   * @inner
	   */
	  var loading = stateContainer.createSelector(function (state) {
	    return state.productKinds.loading;
	  });
	
	  /**
	   * @name loadingError
	   * @description
	   * Returns the error state.
	   * @type {function}
	   *
	   * @returns {boolean}
	   * @inner
	   */
	  var loadingError = stateContainer.createSelector(function (state) {
	    return state.productKinds.error;
	  });
	
	  /**
	   * @name getProducts
	   * @description
	   * Returns the raw products.
	   * @type {function}
	   *
	   * @returns {module:model-bb-product-summary-ng.ProductKind[]}
	   * @inner
	   */
	  var getProducts = stateContainer.createSelector(function (state) {
	    return state.productKinds.data;
	  });
	
	  /**
	   * @name getProduct
	   * @description Retrieves a product.
	   * @type {function}
	   *
	   * @param {object} processedProduct
	   * @returns {module:model-bb-product-summary-ng.Product} product
	   * @inner
	   */
	  var getProduct = function getProduct(processedProduct) {
	    return getProducts().find(function (productKind) {
	      return productKind.id === processedProduct.kind;
	    }).products.find(function (product) {
	      return product.id === processedProduct.id;
	    });
	  };
	
	  /**
	   * @name Helpers#showProductDetails
	   * @description Shows the product details view.
	   * @type {function}
	   *
	   * @param {object} event
	   * @param {string} productId
	   */
	  var showProductDetails = function showProductDetails(event, productId) {
	    event.stopPropagation();
	
	    intents.showProductDetails(productId);
	  };
	
	  /**
	   * @name Helpers#selectProduct
	   * @description
	   * Sets the alternate workflow when a user selects a Product from the overview.
	   *
	   * @type {function}
	   * @param {object} processedProduct
	   */
	  var selectProduct = function selectProduct(processedProduct) {
	    var product = getProduct(processedProduct);
	
	    intents.showTransactions(product);
	  };
	
	  /**
	   * @name Helpers#productKinds
	   * @description
	   * The list of the processed product kinds.
	   * @type {function}
	   *
	   * @returns {object[]}
	   */
	  var getProcessedProducts = stateContainer.createSelector(function (_ref2) {
	    var productKinds = _ref2.productKinds;
	    return productKinds.data ? processKinds(productKinds.data) : null;
	  });
	
	  /**
	   * @name Helpers#hasProducts
	   * @description Checks whether the list is empty.
	   * @type {function}
	   *
	   * @returns {boolean} false if product list is empty.
	   */
	  var hasProducts = function hasProducts() {
	    return Boolean(getProducts() && getProducts().length);
	  };
	
	  /**
	   * @name Helpers#showLoadingState
	   * @description Checks for the loading state.
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var showLoadingState = function showLoadingState() {
	    return loading() && !getProducts();
	  };
	
	  /**
	   * @name Helpers#showEmptyState
	   * @description Checks if there are no products.
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var showEmptyState = function showEmptyState() {
	    return Boolean(getProducts() && !getProducts().length) && !loadingError() && !loading();
	  };
	
	  /**
	   * @name Helpers#showErrorState
	   * @description Checks for the error state.
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var showErrorState = function showErrorState() {
	    return loadingError() && !loading();
	  };
	
	  return {
	    getProcessedProducts: getProcessedProducts,
	    selectProduct: selectProduct,
	    hasProducts: hasProducts,
	    showProductDetails: showProductDetails,
	    showLoadingState: showLoadingState,
	    showEmptyState: showEmptyState,
	    showErrorState: showErrorState
	  };
	};

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _sortingMethods = __webpack_require__(51);
	
	var _sortingMethods2 = _interopRequireDefault(_sortingMethods);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var maskCardNumber = function maskCardNumber(suffix) {
	  return suffix && 'XXXX-XXXX-XXXX-' + suffix;
	};
	
	var defaultViewModel = function defaultViewModel(product) {
	  return product;
	};
	
	var viewModelFactories = {
	  currentAccounts: function currentAccounts(product) {
	    return Object.assign({}, product, {
	      identifier: product.IBAN || product.BBAN,
	      primaryValue: product.bookedBalance,
	      secondaryValue: product.availableBalance,
	      secondaryLabel: 'label.availableBalance',
	      tertiaryValue: product.creditLimit,
	      tertiaryLabel: 'label.creditLimit'
	    });
	  },
	
	  savingsAccounts: function savingsAccounts(product) {
	    return Object.assign({}, product, {
	      identifier: product.BBAN || product.IBAN,
	      primaryValue: product.bookedBalance,
	      secondaryValue: product.accruedInterest,
	      secondaryLabel: 'label.accruedInterestAmount'
	    });
	  },
	
	  termDeposits: function termDeposits(product) {
	    return Object.assign({}, product, {
	      primaryValue: product.principalAmount,
	      secondaryValue: product.accruedInterest,
	      secondaryLabel: 'label.accruedInterestAmount'
	    });
	  },
	
	  creditCards: function creditCards(product) {
	    return Object.assign({}, product, {
	      identifier: maskCardNumber(product.number),
	      primaryValue: product.bookedBalance,
	      secondaryValue: product.creditLimit,
	      secondaryLabel: 'label.creditLimit',
	      tertiaryValue: product.availableBalance,
	      tertiaryLabel: 'label.availableBalance'
	    });
	  },
	
	  debitCards: function debitCards(product) {
	    return Object.assign({}, product, {
	      identifier: maskCardNumber(product.number)
	    });
	  },
	
	  loans: function loans(product) {
	    return Object.assign({}, product, {
	      primaryValue: product.bookedBalance
	    });
	  },
	
	  investmentAccounts: function investmentAccounts(product) {
	    return Object.assign({}, product, {
	      primaryValue: product.currentInvestmentValue
	    });
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
	var productKindView = function productKindView(product) {
	  return viewModelFactories[product.kind](product) || defaultViewModel(product);
	};
	
	/**
	 * @description
	 * Prepare the fields of a Product Kind into a form ready for display to the User
	 *
	 * @private
	 * @type {function}
	 * @param {object} kind The source ProductKind from the API
	 * @returns {ProductKindView}
	 */
	
	exports.default = function (kind) {
	  return {
	    id: kind.id,
	    name: kind.name,
	    products: kind.products.map(productKindView).sort(_sortingMethods2.default.productNameAsc),
	    aggregatedBalance: kind.aggregatedBalance,
	    currency: kind.currency,
	    isOpen: kind.isOpen
	  };
	};
	
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
	 * @property {?string} primaryValue The most important associated value to be displayed
	 * @property {?string} secondaryValue A secondary associated value to be displayed
	 * @property {?string} secondaryLabel A label to describe the secondary value
	 * @property {?string} tertiaryValue A tertiary associated value to be displayed
	 * @property {?string} tertiaryLabel A label to describe the tertiary value
	 * @property {?string} currency ISO currency code
	 */

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Sorting methods for products
	 */
	exports.default = {
	  /**
	   * @name productNameAsc
	   * @description
	   * Sort products alphabetically by name, ascending
	   * @type {function}
	   * @param {Object} productA
	   * @param {Object} productB
	   * @returns {('-1'|'0'|'1')} result
	   */
	  productNameAsc: function productNameAsc(productA, productB) {
	    if (productA.name < productB.name) return -1;
	    if (productA.name > productB.name) return 1;
	    return 0;
	  }
	};

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(53);
	
	/**
	 * @name Intents
	 * @type {Object}
	 */
	exports.default = function (_ref) {
	  var createRequest = _ref.createRequest,
	      handleRequest = _ref.handleRequest,
	      service = _ref.service;
	  return {
	    /**
	     * @name Intents#showProductDetails
	     * @description The intent to show the product details.
	     * @type {function}
	     */
	    showProductDetails: createRequest(_constants.Intent.SHOW_PRODUCT_DETAILS),
	
	    /**
	     * @name Intents#showTransactions
	     * @description The intent to show the transactions.
	     * @type {function}
	     */
	    showTransactions: createRequest(_constants.Intent.SHOW_TRANSACTIONS),
	
	    /**
	     * @name Intents#showProductSummary
	     * @description Handler of the 'intent.bb.product.summary.show' intent.
	     * @type {function}
	     */
	    showProductSummary: handleRequest(_constants.Intent.SHOW_PRODUCT_SUMMARY, function () {
	      service.loadProducts();
	    })
	  };
	};

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable import/prefer-default-export */
	/**
	 * @name Intent
	 * @type {object}
	 * @inner
	 */
	var Intent = exports.Intent = {
	  SHOW_PRODUCT_SUMMARY: 'intent.rbm.productSummary.list.show',
	  SHOW_PRODUCT_DETAILS: 'intent.rbm.productDetails.view.show',
	  SHOW_TRANSACTIONS: 'intent.rbm.transactions.list.show'
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bbm-product-summary-cards-ng.js.map