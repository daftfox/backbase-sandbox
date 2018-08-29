(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("model-bb-product-summary-ng"), require("lib-bb-intent-ng"), require("lib-bb-event-bus-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-manage-products-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-model-errors", "lib-bb-widget-extension-ng", "model-bb-product-summary-ng", "lib-bb-intent-ng", "lib-bb-event-bus-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-manage-products-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("model-bb-product-summary-ng"), require("lib-bb-intent-ng"), require("lib-bb-event-bus-ng"));
	else
		root["widget-bb-manage-products-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-model-errors"], root["lib-bb-widget-extension-ng"], root["model-bb-product-summary-ng"], root["lib-bb-intent-ng"], root["lib-bb-event-bus-ng"]);
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

	module.exports = __webpack_require__(129);

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

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(99);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(103);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(124);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbIntentNg = __webpack_require__(122);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbWidgetExtensionNg = __webpack_require__(119);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _modelBbProductSummaryNg = __webpack_require__(121);
	
	var _modelBbProductSummaryNg2 = _interopRequireDefault(_modelBbProductSummaryNg);
	
	var _controller = __webpack_require__(130);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(133);
	
	var _defaultHooks2 = _interopRequireDefault(_defaultHooks);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bb-manage-products-ng
	 *
	 * @description
	 * Manage products
	 */
	var moduleKey = 'widget-bb-manage-products-ng';
	var hooksKey = moduleKey + ':hooks';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_modelBbProductSummaryNg2.default, _libBbWidgetNg2.default, _libBbEventBusNg2.default, _libBbIntentNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(_defaultHooks2.default)).controller('ManageProductsController', [
	// dependencies to inject
	_modelBbProductSummaryNg.modelProductSummaryKey, _libBbEventBusNg.eventBusKey, hooksKey, _libBbIntentNg.bbIntentKey,
	/* into */
	_controller2.default]).run([_libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, _libBbIntentNg.bbIntentKey, function (bus, widget, bbIntent) {
	  bus.publish('cxp.item.loaded', {
	    id: widget.getId()
	  });
	  bbIntent.init();
	}]).name;

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ManageProductsController;
	
	var _constants = __webpack_require__(131);
	
	var _message = __webpack_require__(132);
	
	var _message2 = _interopRequireDefault(_message);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name ManageProductsController
	 *
	 * @description
	 * Manage products widget controller
	 *
	 * @type {function}
	 */
	function ManageProductsController(model, bus, hooks, bbIntent) {
	  var $ctrl = this;
	
	  var state = {
	    status: null,
	    productKinds: null,
	    productSelected: { id: null, showInput: null },
	    isProductLoading: true,
	    productKindsError: null
	  };
	
	  /**
	   * @description
	   * A set of intents that the controller uses or handles.
	   *
	   * @name ManageProductsController#intents
	   * @type {Object}
	   * @inner
	   */
	  var intents = {};
	
	  /**
	   * @name ManageProductsController#getProducts
	   *
	   * @description
	   * Gets all products from the model, track the loading
	   * and create error if there is error during the loading
	   *
	   * @type {function}
	   *
	   * @returns {Promise.<void>}
	   */
	  var getProducts = function getProducts() {
	    $ctrl.state.isProductLoading = true;
	
	    return model.load().then(function (_ref) {
	      var productKinds = _ref.productKinds;
	
	      $ctrl.state.productKinds = hooks.processKinds(productKinds);
	      $ctrl.state.isProductLoading = false;
	    }).catch(function (error) {
	      $ctrl.state.isProductLoading = false;
	      $ctrl.state.productKindsError = {
	        message: _message2.default.dataManageProductsErrorMessage(error)
	      };
	    });
	  };
	
	  /**
	   * @name ManageProductsController#updateProduct
	   *
	   * @description
	   * Updates the product,
	   * sets the status for the notification
	   * and reloads the products if the update is successful
	   *
	   * @type {function}
	   *
	   * @param {object} id product/account id
	   * @param {object} alias product/account alias
	   * @param {boolean} visible visibility property for the product/account
	   *
	   * @returns {Promise.<void>}
	   */
	  var updateProduct = function updateProduct(id, alias, visible) {
	    return model.patchArrangement({ id: id, alias: alias, visible: visible }).then(function () {
	      $ctrl.state.status = { message: [_constants.UPDATED_PRODUCT_SUCCESS_KEY], isError: false };
	      $ctrl.state.productSelected = { id: null, showInput: null };
	      return getProducts();
	    }).catch(function (error) {
	      $ctrl.state.status = {
	        message: _message2.default.dataManageProductsErrorMessage(error),
	        isError: true
	      };
	      $ctrl.state.productSelected = { id: null, showInput: null };
	      getProducts();
	    });
	  };
	
	  /**
	   * @name ManageProductsController#removeProductFromStorage
	   *
	   * @description
	   * Get selected product from storage and check if visibility changed
	   * and update accordingly
	   *
	   * @inner
	   * @type {function}
	   *
	   * @returns {Promise.<void>}
	   */
	  var removeProductFromStorage = function removeProductFromStorage() {
	    return model.setProductSelected().catch(function (error) {
	      $ctrl.state.productKindsError = { message: _message2.default.dataManageProductsErrorMessage(error) };
	    });
	  };
	
	  /**
	   * @name ManageProductsController#checkSelectedProductFromStorage
	   *
	   * @description
	   * Get selected product from storage and check if visibility changed
	   * and update accordingly
	   *
	   * @type {function}
	   *
	   * @returns {Promise.<void>}
	   */
	  var checkSelectedProductFromStorage = function checkSelectedProductFromStorage(product) {
	    return model.getProductSelected().then(function (selectedProduct) {
	      if (product.id === selectedProduct.id && product.visible) {
	        removeProductFromStorage();
	      }
	    }).catch(function (error) {
	      $ctrl.state.productKindsError = { message: _message2.default.dataManageProductsErrorMessage(error) };
	    });
	  };
	
	  /**
	   * @description
	   * Handles the intent to switch the view to product summary
	   *
	   * @type {function}
	   *
	   * @name ManageProductsController#viewProductSummary
	   */
	  var viewProductSummary = function viewProductSummary() {
	    if (intents.viewProductSummary) {
	      intents.viewProductSummary();
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
	    intents.viewProductSummary = bbIntent.create(_constants.Intent.VIEW_PRODUCT_SUMMARY);
	
	    bbIntent.handle(_constants.Intent.VIEW_MANAGE_PRODUCTS, function () {
	      getProducts();
	    });
	  };
	
	  /**
	   * @name ManageProductsController#$onInit
	   *
	   * @description
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @type {function}
	   *
	   * @returns {void}
	   */
	  var $onInit = function $onInit() {
	    return getProducts().then(initIntent);
	  };
	
	  Object.assign($ctrl, {
	    state: state,
	    dismissTime: _constants.DEFAULT_DISMISS_TIME,
	    updateProduct: updateProduct,
	    getProducts: getProducts,
	    $onInit: $onInit,
	    viewProductSummary: viewProductSummary,
	    checkSelectedProductFromStorage: checkSelectedProductFromStorage
	  });
	}

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Intent = exports.UPDATED_PRODUCT_ERROR_KEY = exports.UPDATED_PRODUCT_SUCCESS_KEY = exports.DEFAULT_DISMISS_TIME = exports.errorMessages = undefined;
	
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
	 * @name DEFAULT_DISMISS_TIME
	 *
	 * @description
	 * Default notification dismiss time.
	 *
	 * @type {number}
	 */
	var DEFAULT_DISMISS_TIME = exports.DEFAULT_DISMISS_TIME = 3;
	
	/**
	 * @name UPDATED_PRODUCT_SUCCESS_KEY
	 *
	 * @description
	 * Key string for notification success message
	 *
	 * @type {string}
	 */
	var UPDATED_PRODUCT_SUCCESS_KEY = exports.UPDATED_PRODUCT_SUCCESS_KEY = 'product.notification.updated.success';
	
	/**
	 * @name UPDATED_PRODUCT_ERROR_KEY
	 *
	 * @description
	 * Key string for notification error message
	 *
	 * @type {string}
	 */
	var UPDATED_PRODUCT_ERROR_KEY = exports.UPDATED_PRODUCT_ERROR_KEY = 'product.notification.updated.error';
	
	/**
	 * Widget intent enum
	 * @type {object}
	 */
	var Intent = exports.Intent = {
	  VIEW_PRODUCT_SUMMARY: 'intent.bb.product.summary.view',
	  VIEW_MANAGE_PRODUCTS: 'intent.bb.manage.products.view'
	};

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DataManageProductsErrorMessage = undefined;
	
	var _DataManageProductsEr;
	
	var _libBbModelErrors = __webpack_require__(105);
	
	var _modelBbProductSummaryNg = __webpack_require__(121);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * @name MessageHandler#DataManageProductsErrorMessage
	 * @description
	 * Object for mapping errors used in extension
	 * @type {Object}
	 */
	var DataManageProductsErrorMessage = exports.DataManageProductsErrorMessage = (_DataManageProductsEr = {}, _defineProperty(_DataManageProductsEr, _libBbModelErrors.E_AUTH, 'model.error.auth'), _defineProperty(_DataManageProductsEr, _libBbModelErrors.E_CONNECTIVITY, 'model.error.connectivity'), _defineProperty(_DataManageProductsEr, _libBbModelErrors.E_USER, 'model.error.user'), _defineProperty(_DataManageProductsEr, _libBbModelErrors.E_UNEXPECTED, 'model.error.unexpected'), _defineProperty(_DataManageProductsEr, _modelBbProductSummaryNg.BadRequestError.ERR_ACCOUNT_ARRANGEMENT_NOT_EXIST, 'account.error.arrangement.not.exist'), _defineProperty(_DataManageProductsEr, _modelBbProductSummaryNg.BadRequestError.ERR_ACCOUNT_ARRANGEMENT_NO_PRIVILEGES, 'account.error.arrangement.no.privilege'), _defineProperty(_DataManageProductsEr, _modelBbProductSummaryNg.BadRequestError.ERR_ACCOUNT_ARRANGEMENT_NOT_ENTITLED_TO_SEE, 'account.error.arrangement.not.entitled.to.see'), _defineProperty(_DataManageProductsEr, _modelBbProductSummaryNg.BadRequestError.ERR_ACCOUNT_PRODUCT_NOT_EXIST, 'account.error.product.not.exist'), _defineProperty(_DataManageProductsEr, _modelBbProductSummaryNg.BadRequestError.ERR_ACCOUNT_PRODUCT_UPDATE_SIZE, 'account.error.product.size.between'), _defineProperty(_DataManageProductsEr, _modelBbProductSummaryNg.BadRequestError.ERR_ARRANGEMENT_NOT_FOUND, 'arrangements.error.not.found'), _defineProperty(_DataManageProductsEr, _modelBbProductSummaryNg.BadRequestError.ERR_ARRANGEMENT_NOT_EXIST_PRODUCT_KIND_NAME, 'arrangements.error.not.exist.product.kindName'), _DataManageProductsEr);
	
	/**
	 * @name MessageHandler#dataManageProductsErrorMessage
	 * @description
	 * Create error message array for update product
	 * Checks if message has one or more then one error
	 * @type {function}
	 * @param {ModelError} modelError response error object
	 * @returns {MessageArray} message array
	 */
	var dataManageProductsErrorMessage = function dataManageProductsErrorMessage(modelError) {
	  if (modelError.codes) {
	    return modelError.codes.map(function (e) {
	      return DataManageProductsErrorMessage[e];
	    });
	  }
	
	  return [DataManageProductsErrorMessage[modelError.code]];
	};
	
	/**
	 * @name MessageHandler
	 * @type {object}
	 * @description list of message handlers
	 */
	exports.default = {
	  dataManageProductsErrorMessage: dataManageProductsErrorMessage
	};

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Hooks
	 *
	 * @description
	 * Hooks for widget-bb-manage-products-ng
	 *
	 * @type {object}
	 */
	
	/**
	 * @name processKinds
	 *
	 * @description
	 * Hook for processing productKinds.
	 *
	 * @type {function}
	 *
	 * @param {module:model-bb-product-summary-ng.ProductKind[]} productKinds ProductKinds to process
	 * @returns {module:model-bb-product-summary-ng.ProductKind[]} Processed  productKinds
	 */
	var processKinds = function processKinds(productKinds) {
	  return productKinds;
	};
	
	exports.default = {
	  processKinds: processKinds
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-manage-products-ng.js.map