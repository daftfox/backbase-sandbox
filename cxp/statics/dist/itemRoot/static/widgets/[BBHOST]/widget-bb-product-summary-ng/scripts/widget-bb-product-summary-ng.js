(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("model-bb-product-summary-ng"), require("lib-bb-intent-ng"), require("lib-bb-event-bus-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-product-summary-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-model-errors", "lib-bb-widget-extension-ng", "model-bb-product-summary-ng", "lib-bb-intent-ng", "lib-bb-event-bus-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-product-summary-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("model-bb-product-summary-ng"), require("lib-bb-intent-ng"), require("lib-bb-event-bus-ng"));
	else
		root["widget-bb-product-summary-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-model-errors"], root["lib-bb-widget-extension-ng"], root["model-bb-product-summary-ng"], root["lib-bb-intent-ng"], root["lib-bb-event-bus-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_99__, __WEBPACK_EXTERNAL_MODULE_103__, __WEBPACK_EXTERNAL_MODULE_105__, __WEBPACK_EXTERNAL_MODULE_119__, __WEBPACK_EXTERNAL_MODULE_121__, __WEBPACK_EXTERNAL_MODULE_122__, __WEBPACK_EXTERNAL_MODULE_124__) {
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

	module.exports = __webpack_require__(134);

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_99__;

/***/ }),

/***/ 103:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_103__;

/***/ }),

/***/ 105:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_105__;

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_119__;

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_121__;

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_122__;

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_124__;

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(99);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(119);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbWidgetNg = __webpack_require__(103);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _modelBbProductSummaryNg = __webpack_require__(121);
	
	var _modelBbProductSummaryNg2 = _interopRequireDefault(_modelBbProductSummaryNg);
	
	var _libBbEventBusNg = __webpack_require__(124);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbIntentNg = __webpack_require__(122);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _controller = __webpack_require__(135);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(138);
	
	var _defaultHooks2 = _interopRequireDefault(_defaultHooks);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bb-product-summary-ng
	 *
	 * @description
	 * Product summary.
	 *
	 * @borrows module:model-bb-product-summary-ng.Product as Product
	 * @borrows module:model-bb-product-summary-ng.ProductKind as ProductKind
	 * @borrows module:lib-bb-model-errors.ModelError as ModelError
	 *
	 * @example
	 *  <div ng-controller="ProductSummaryController as $ctrl">
	 *    <ul>
	 *       <li ng-repeat="product in $ctrl.products">{{product.id}}</li>
	 *    </ul>
	 *  </div>
	 */
	var hooksKey = 'widget-bb-product-summary-ng:hooks';
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('widget-bb-product-summary-ng', [_modelBbProductSummaryNg2.default, _libBbEventBusNg2.default, _libBbWidgetNg2.default, _libBbIntentNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(_defaultHooks2.default)).controller('ProductSummaryController', [_modelBbProductSummaryNg.modelProductSummaryKey, hooksKey, _libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, _libBbIntentNg.bbIntentKey,
	/* into */
	_controller2.default]).run([_libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, _libBbIntentNg.bbIntentKey, function (bus, widget, bbIntent) {
	  bus.publish('cxp.item.loaded', {
	    id: widget.getId()
	  });
	  bbIntent.init();
	}]).name;

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ProductSummaryController;
	
	var _constants = __webpack_require__(136);
	
	var _message = __webpack_require__(137);
	
	var _message2 = _interopRequireDefault(_message);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PRODUCT_SELECTED = _message2.default.PRODUCT_SELECTED,
	    PRODUCTS_SELECTED = _message2.default.PRODUCTS_SELECTED,
	    REFLOW_TRIGGERED = _message2.default.REFLOW_TRIGGERED;
	function ProductSummaryController(model, hooks, eventBus, widget, bbIntent) {
	  var enableIntentOnProductSelection = widget.getBooleanPreference('enableIntentOnProductSelection');
	
	  /**
	   * @description
	   * CXP preference for loading arrangement details.
	   *
	   * @name enableLoadingDetails
	   * @type {boolean}
	   * @inner
	   */
	  var enableLoadingDetails = widget.getBooleanPreference('enableLoadingDetails');
	
	  /**
	   * @description
	   * CXP preference for identifying if multicurrency should be disabled.
	   * This is added on the explorer not widget preferences.
	   * It will be used only for insights page to prevent multicurrency.
	   *
	   * @name isMultiCurrencyEnabled
	   * @type {boolean}
	   * @inner
	   */
	  var isMultiCurrencyEnabled = widget.getBooleanPreference('multicurrency');
	
	  /**
	   * @name ProductSummaryController
	   * @ngkey ProductSummaryController
	   * @type {object}
	   * @description
	   * Product summary controller.
	   *
	   */
	  var $ctrl = this;
	
	  /**
	   * @description
	   * A set of intents that the controller uses or handles.
	   *
	   * @name intents
	   * @type {Object}
	   * @inner
	   */
	  var intents = {};
	
	  /**
	   * @description
	   * Sets the alternate workflow when a user selects a Product from the overview.
	   *
	   * @name ProductSummaryController#selectProduct
	   * @type {function}
	   * @param {Product} product Product to select.
	   * @fires bb.event.product.selected
	   * @fires bb.event.product.selected.[product-kind]
	   */
	  var selectProduct = function selectProduct(product) {
	    model.setProductSelected(product);
	    eventBus.publish(PRODUCT_SELECTED, { product: product });
	    // for all accounts selection, do not send per kind event
	    if (product && product.kind) {
	      eventBus.publish(PRODUCT_SELECTED + '.' + product.kind, { product: product });
	    }
	
	    if (enableIntentOnProductSelection) {
	      intents.productSelected({ product: product });
	    }
	  };
	
	  /**
	   * @description
	   * Sets the alternate workflow when a user selects multiple Products from the overview or selector
	   *
	   * @name ProductSummaryController#selectProducts
	   * @type {function}
	   * @param {Product[]} products Array of Products to select
	   * @fires bb.event.products.selected
	   */
	  var selectProducts = function selectProducts(products) {
	    model.setProductsSelected(products);
	    eventBus.publish(PRODUCTS_SELECTED, { products: products });
	  };
	
	  /**
	   * @description
	   * Check if value is defined, not null and not empty
	   * @inner
	   * @name hasValue
	   * @type {function}
	   * @param  {*} value  The value to check
	   * @return {boolean}
	   */
	  var hasValue = function hasValue(value) {
	    return typeof value !== 'undefined' && value !== null && value !== '';
	  };
	
	  /**
	   * @description
	   * Loading extended parameters for a given product
	   *
	   * @inner
	   * @name ProductSummaryController#loadProductDetails
	   * @type {function}
	   *
	   * @returns {Promise.<void>}
	   */
	  var loadProductDetails = function loadProductDetails(product) {
	    model.getProductDetails(product.id).then(function (extendedProduct) {
	      if (!hasValue(extendedProduct.productKindName)) {
	        Object.assign(extendedProduct, {
	          productKindName: product.productKindName
	        });
	      }
	      Object.assign(extendedProduct, {
	        productTypeName: product.productKindName
	      });
	      $ctrl.extendedProduct = hooks.processExtendedProduct(extendedProduct);
	    }).catch(function (error) {
	      $ctrl.productDetailsError = { message: _message2.default.dataProductsErrorMessage(error) };
	    });
	  };
	
	  /**
	   * @description
	   * Handles product select
	   *
	   * @name ProductSummaryController#updateProductSelected
	   * @type {function}
	   *
	   * @returns {Promise.<void>}
	   */
	  function updateProductSelected() {
	    model.getProductSelected().then(function (productSelected) {
	      $ctrl.productSelected = hooks.processProductSelected(productSelected);
	      if (productSelected !== null && enableLoadingDetails) {
	        loadProductDetails(productSelected);
	      }
	    }).catch(function (error) {
	      $ctrl.productKindsError = { message: _message2.default.dataProductsErrorMessage(error) };
	    });
	  }
	
	  /**
	   * @description
	   * Handles multiple product selection
	   *
	   * @name ProductSummaryController#updateProductsSelected
	   * @type {function}
	   *
	   * @returns {Promise.<void>}
	   */
	  function updateProductsSelected() {
	    var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	    model.getProductsSelected(initial).then(function (productsSelected) {
	      $ctrl.productsSelected = hooks.processProductsSelected(productsSelected);
	      if (initial) {
	        eventBus.publish(PRODUCTS_SELECTED, { products: $ctrl.productsSelected });
	      }
	    });
	  }
	
	  /**
	   * @description
	   * Products loading logic
	   *
	   * @name ProductSummaryController#loadProducts
	   * @type {function}
	   *
	   * @returns {Promise.<void>}
	   */
	  var loadProducts = function loadProducts(_ref) {
	    var _ref$initial = _ref.initial,
	        initial = _ref$initial === undefined ? false : _ref$initial,
	        _ref$forceLoad = _ref.forceLoad,
	        forceLoad = _ref$forceLoad === undefined ? true : _ref$forceLoad;
	
	    $ctrl.isProductLoading = true;
	
	    return model.load(forceLoad).then(function (_ref2) {
	      var productKinds = _ref2.productKinds,
	          total = _ref2.total;
	
	      $ctrl.isProductLoading = false;
	      $ctrl.total = total;
	      $ctrl.productKinds = hooks.processKinds(productKinds);
	    }).then(function () {
	      return hooks.isSelectMultiple() ? updateProductsSelected(initial) : updateProductSelected();
	    }).catch(function (error) {
	      $ctrl.isProductLoading = false;
	      $ctrl.productKindsError = { message: _message2.default.dataProductsErrorMessage(error) };
	    });
	  };
	
	  /**
	   * @description
	   * Adds subscriptions to bus events
	   *
	   * @name ProductSummaryController#bindEvents
	   * @type {function}
	   */
	  function bindEvents() {
	    eventBus.subscribe(PRODUCT_SELECTED, updateProductSelected);
	    // updateProductsSelected should not take payload as argument
	    eventBus.subscribe(PRODUCTS_SELECTED, function () {
	      return updateProductsSelected();
	    });
	    eventBus.subscribe(REFLOW_TRIGGERED, loadProducts);
	  }
	
	  /**
	   * @description
	   * Handles the intent to switch the view to product summary
	   *
	   * @type {function}
	   * @name ProductSummary#viewManageProducts
	   */
	  var viewManageProducts = function viewManageProducts() {
	    if (intents.viewManageProducts) {
	      intents.viewManageProducts();
	    }
	  };
	
	  /**
	   * @description
	   * Inits the bbIntent and adds intent handlers.
	   *
	   * @inner
	   * @name ManageProductsController#initIntent
	   * @type {function}
	   */
	  var initIntent = function initIntent() {
	    intents.viewManageProducts = bbIntent.create(_constants.Intent.VIEW_MANAGE_PRODUCTS);
	    intents.productSelected = bbIntent.create(_constants.Intent.PRODUCT_SELECTED);
	
	    bbIntent.handle(_constants.Intent.VIEW_PRODUCT_SUMMARY, function () {
	      loadProducts();
	    });
	  };
	
	  /*
	   * Widget initialization logic.
	   */
	  var $onInit = function $onInit() {
	    /**
	     * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
	     * and will be removed with the update to widget collection 3 (WC3)
	     */
	    eventBus.publish('cxp.item.loaded', {
	      id: widget.getId()
	    });
	
	    eventBus.publish('bb.item.loaded', {
	      id: widget.getId()
	    });
	
	    return loadProducts({ initial: true }).then(bindEvents).then(initIntent);
	  };
	
	  Object.assign($ctrl, {
	    /**
	     * @description
	     * If you use product-select-multiple extension with another widget that
	     * does not support multicurrencies like Insights page, you will need to
	     * add this property to false on explorer properties
	     *
	     * @name ProductSummaryController#isMultiCurrencyEnabled
	     * @type {boolean}
	     */
	    get isMultiCurrencyEnabled() {
	      return isMultiCurrencyEnabled === undefined ? true : isMultiCurrencyEnabled;
	    },
	    /**
	     * @description
	     * The selected product.
	     * The value returned from {@link Hooks.processProductSelected} hook
	     *
	     * @name ProductSummaryController#productSelected
	     * @type {any}
	     */
	    productSelected: null,
	    /**
	     * @description
	     * Array of selected products.
	     * The value returned from {@link Hooks.processProductsSelected} hook
	     *
	     * @name ProductSummaryController#productsSelected
	     * @type {array}
	     */
	    productsSelected: [],
	    /**
	     * @description
	     * The selected product extended with arrangement details.
	     *
	     * @name ProductSummaryController#extendedProduct
	     * @type {any}
	     */
	    extendedProduct: null,
	    /**
	     * @description
	     * The value returned from {@link Hooks.processKinds} hook.
	     * null if the products aren't loaded.
	     *
	     * @name ProductSummaryController#productKinds
	     * @type {any}
	     */
	    productKinds: null,
	    /**
	     * @description
	     * Loading status of the products
	     *
	     * @name ProductSummaryController#isProductLoading
	     * @type {boolean}
	     */
	    isProductLoading: false,
	    /**
	     * @description
	     * The error encountered when attempting to fetch the products from the model
	     *
	     * @name ProductSummaryController#productKindsError
	     * @type {ModelError}
	     */
	    productKindsError: null,
	    /**
	     * @description
	     * The error encountered when attempting to fetch the
	     * selected product details from the model
	     *
	     * @name ProductSummaryController#productDetailsError
	     * @type {ModelError}
	     */
	    productDetailsError: null,
	    /**
	     * @description
	     * Checks the list is empty or not
	     *
	     * @name ProductSummaryController#hasProducts
	     * @type {function}
	     * @returns {boolean} false if product list is empty
	     */
	    hasProducts: function hasProducts() {
	      return !!$ctrl.productKinds.length;
	    },
	    /**
	     * @description
	     * The total balance for the products
	     *
	     * @name ProductSummaryController#total
	     * @type {TotalBalance}
	     */
	    total: null,
	    selectProduct: selectProduct,
	    selectProducts: selectProducts,
	    $onInit: $onInit,
	    viewManageProducts: viewManageProducts
	  });
	}
	
	/**
	 * @typedef {Object} TotalBalance
	 * @property {string} aggregatedBalance - aggregated balance
	 * @property {string} currency - currency code
	 */

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Intent = exports.errorMessages = undefined;
	
	var _errorMessages;
	
	var _libBbModelErrors = __webpack_require__(105);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * @name errorMessages
	 *
	 * @description
	 * Error messages keys for connectivity, user, auth and unexpected errors.
	 *
	 * @type {object}
	 */
	var errorMessages = exports.errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'model.error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'model.error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'model.error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'model.error.unexpected'), _errorMessages);
	
	/**
	 * Widget intent enum
	 * @type {object}
	 */
	var Intent = exports.Intent = {
	  VIEW_PRODUCT_SUMMARY: 'intent.bb.product.summary.view',
	  VIEW_MANAGE_PRODUCTS: 'intent.bb.manage.products.view',
	  PRODUCT_SELECTED: 'intent.rb.product.selected'
	};

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DataProductsErrorMessage = undefined;
	
	var _DataProductsErrorMes;
	
	var _libBbModelErrors = __webpack_require__(105);
	
	var _modelBbProductSummaryNg = __webpack_require__(121);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * @name MessageHandler#DataProductsErrorMessage
	 * @description
	 * Object for mapping errors used in extension
	 * @type {Object}
	 */
	var DataProductsErrorMessage = exports.DataProductsErrorMessage = (_DataProductsErrorMes = {}, _defineProperty(_DataProductsErrorMes, _libBbModelErrors.E_AUTH, 'model.error.auth'), _defineProperty(_DataProductsErrorMes, _libBbModelErrors.E_CONNECTIVITY, 'model.error.connectivity'), _defineProperty(_DataProductsErrorMes, _libBbModelErrors.E_USER, 'model.error.user'), _defineProperty(_DataProductsErrorMes, _libBbModelErrors.E_UNEXPECTED, 'model.error.unexpected'), _defineProperty(_DataProductsErrorMes, _modelBbProductSummaryNg.BadRequestError.ERR_PRODUCT_SUMMARY_LEGAL_ENTITY_NOT_ALLOWED, 'product.summary.error.legal.entity.not.allowed'), _defineProperty(_DataProductsErrorMes, _modelBbProductSummaryNg.BadRequestError.ERR_PRODUCT_SUMMARY_REQUEST_SIZE, 'product.summary.error.paging.size'), _defineProperty(_DataProductsErrorMes, _modelBbProductSummaryNg.BadRequestError.ERR_PRODUCT_SUMMARY_REQUEST_FROM, 'product.summary.error.paging.from'), _defineProperty(_DataProductsErrorMes, _modelBbProductSummaryNg.BadRequestError.ERR_PRODUCT_SUMMARY_REQUEST_ORDER_BY, 'product.summary.error.sorting.orderBy'), _defineProperty(_DataProductsErrorMes, _modelBbProductSummaryNg.BadRequestError.ERR_PRODUCT_SUMMARY_REQUEST_DIRECTION, 'product.summary.error.sorting.direction'), _defineProperty(_DataProductsErrorMes, _modelBbProductSummaryNg.BadRequestError.ERR_ARRANGEMENT_NOT_FOUND, 'arrangements.error.not.found'), _defineProperty(_DataProductsErrorMes, _modelBbProductSummaryNg.BadRequestError.ERR_ARRANGEMENT_NOT_EXIST_PRODUCT_KIND_NAME, 'arrangements.error.not.exist.product.kindName'), _DataProductsErrorMes);
	
	/**
	 * @name MessageHandler#dataProductsErrorMessage
	 * @description
	 * Create error message array for product
	 * Checks if message has one or more then one error
	 * @type {function}
	 * @param {ModelError} modelError response error object
	 * @returns {MessageArray} message array
	 */
	var dataProductsErrorMessage = function dataProductsErrorMessage(modelError) {
	  if (modelError.codes) {
	    return modelError.codes.map(function (e) {
	      return DataProductsErrorMessage[e];
	    });
	  }
	
	  return [DataProductsErrorMessage[modelError.code]];
	};
	
	exports.default = {
	  /**
	   * Triggered when product is selected.
	   * @event bb.event.product.selected
	   * @type {Product}
	   */
	  PRODUCT_SELECTED: 'bb.event.product.selected',
	  /**
	   * Triggered when multiple products are selected.
	   * @event bb.event.products.selected
	   * @type {Product[]}
	   */
	  PRODUCTS_SELECTED: 'bb.event.products.selected',
	  REFLOW_TRIGGERED: 'bb.event.product.accounts.reflow',
	  dataProductsErrorMessage: dataProductsErrorMessage
	};

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-bb-product-summary-ng
	 */
	
	var identity = function identity(a) {
	  return a;
	};
	
	exports.default = {
	  /**
	   * @name Hooks#isSelectMultiple
	   * @type {function}
	   *
	   * @description
	   * Hook for extension to specify whether it depends on multiple or single products
	   *
	   * @returns {boolean} Depends on hook implementation.
	   */
	  isSelectMultiple: function isSelectMultiple() {
	    return false;
	  },
	  /**
	   * @name Hooks#processKinds
	   * @type {function}
	   *
	   * @description
	   * Hook for processing product kinds after initialization.
	   * Assigned to [$ctrl.productKinds]{@link ProductSummaryController#productKinds}
	   *
	   * @param items {array} ProductKinds to process
	   * @returns {array} Depends on hook implementation.
	   */
	  processKinds: identity,
	
	  /**
	   * @name Hooks#processProductSelected
	   * @type {function}
	   *
	   * @description
	   * Hook for processing selected product after selection update
	   * Assigned to [$ctrl.productSelected]{@link ProductSummaryController#productSelected}
	   *
	   * @param item {object} Product to process
	   * @returns {object} Depends on hook implementation.
	   */
	  processProductSelected: identity,
	
	  /**
	   * @name Hooks#processProductsSelected
	   * @type {function}
	   *
	   * @description
	   * Hook for processing selected array of products after selection update
	   * Assigned to [$ctrl.productsSelected]{@link ProductSummaryController#productsSelected}
	   *
	   * @param products {array} Products to process
	   * @returns {array} Depends on hook implementation.
	   */
	  processProductsSelected: identity,
	
	  /**
	   * @name Hooks#processExtendedProduct
	   * @type {function}
	   *
	   * @description
	   * Hook for processing extended product after selection update
	   * Assigned to [$ctrl.extendedProduct]{@link ProductSummaryController#extendedProduct}
	   *
	   * @param product {Product} Product to process
	   * @returns {any} Depends on hook implementation.
	   */
	  processExtendedProduct: identity
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-product-summary-ng.js.map