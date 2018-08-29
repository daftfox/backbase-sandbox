(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("data-bb-saving-goals-http-ng"), require("data-bb-product-summary-http-ng"), require("lib-bb-storage-ng"), require("lib-bb-model-errors"));
	else if(typeof define === 'function' && define.amd)
		define("model-bb-saving-goals-ng", ["vendor-bb-angular", "data-bb-saving-goals-http-ng", "data-bb-product-summary-http-ng", "lib-bb-storage-ng", "lib-bb-model-errors"], factory);
	else if(typeof exports === 'object')
		exports["model-bb-saving-goals-ng"] = factory(require("vendor-bb-angular"), require("data-bb-saving-goals-http-ng"), require("data-bb-product-summary-http-ng"), require("lib-bb-storage-ng"), require("lib-bb-model-errors"));
	else
		root["model-bb-saving-goals-ng"] = factory(root["vendor-bb-angular"], root["data-bb-saving-goals-http-ng"], root["data-bb-product-summary-http-ng"], root["lib-bb-storage-ng"], root["lib-bb-model-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_21__) {
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
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modelSavingGoalsKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(16);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbSavingGoalsHttpNg = __webpack_require__(17);
	
	var _dataBbSavingGoalsHttpNg2 = _interopRequireDefault(_dataBbSavingGoalsHttpNg);
	
	var _dataBbProductSummaryHttpNg = __webpack_require__(18);
	
	var _dataBbProductSummaryHttpNg2 = _interopRequireDefault(_dataBbProductSummaryHttpNg);
	
	var _libBbStorageNg = __webpack_require__(19);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _savingGoals = __webpack_require__(20);
	
	var _savingGoals2 = _interopRequireDefault(_savingGoals);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'model-bb-saving-goals-ng'; /**
	                                             * @module model-bb-saving-goals-ng
	                                             *
	                                             * @description
	                                             * Saving goals widget model
	                                             *
	                                             * @example
	                                             * import modelSavingGoalsModuleKey, { modelSavingGoalsKey } from 'model-bb-saving-goals-ng';
	                                             */
	var modelSavingGoalsKey = exports.modelSavingGoalsKey = moduleKey + ':model';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_dataBbSavingGoalsHttpNg2.default, _dataBbProductSummaryHttpNg2.default, _libBbStorageNg2.default]).factory(modelSavingGoalsKey, ['$q', _dataBbSavingGoalsHttpNg.savingGoalsDataKey, _dataBbProductSummaryHttpNg.productSummaryDataKey, _libBbStorageNg.bbStorageServiceKey, _savingGoals2.default]).name;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = savingGoalsModel;
	
	var _libBbModelErrors = __webpack_require__(21);
	
	var _constants = __webpack_require__(22);
	
	/**
	 * @inner
	 * @type {function}
	 * @param {object} Promise An ES2015 compatible `Promise` object.
	 * @param {object} savingGoalsData saving goals data module
	 *
	 * @return {object} model object
	 */
	/* eslint max-len: ["error", 100, { "ignoreComments": true }]*/
	function savingGoalsModel(Promise, savingGoalsData, productSummaryData, bbStorage) {
	  var defaultErrorHandler = function defaultErrorHandler(httpErrorResponse) {
	    throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	  };
	
	  /**
	   * @name savingGoalsModel#loadProducts
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Load products from API.
	   *
	   * @returns {Promise.<module:model-bb-product-summary-ng.ProductKinds, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to object with ProductsKinds and TotalBalance.
	   */
	  var loadProducts = function loadProducts() {
	    return productSummaryData.getProductsummary().then(function (_ref) {
	      var data = _ref.data;
	
	      bbStorage.setItem(_constants.BbStorageKeys.PRODUCT_SUMMARY, data);
	      return data;
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  };
	
	  /**
	   * @name savingGoalsModel#productKindHasProducts
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Checks if product kind has any products
	   *
	   * @param {Object} productKind a product kind object
	   * @return {boolean} 'true' if has any products
	   */
	  var productKindHasProducts = function productKindHasProducts(productKind) {
	    return productKind.products && productKind.products.length;
	  };
	
	  /**
	   * @name savingGoalsModel#getProducts
	   * @type {function}
	   *
	   * @description
	   * Get products either from storage or from the service
	   *
	   * @returns {Promise.<module:model-bb-product-summary-ng.ProductKinds, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to object with ProductsKinds and TotalBalance.
	   */
	  var getProducts = function getProducts() {
	    return bbStorage.getItem(_constants.BbStorageKeys.PRODUCT_SUMMARY).then(function (data) {
	      return data || loadProducts();
	    });
	  };
	
	  /**
	   * @name savingGoalsModel#getProductsArray
	   * @type {function}
	   *
	   * @description
	   * Get products.
	   *
	   * @param {boolean} keepEmptyProducts defines if empty product kinds should be passed.
	   *
	   * @returns {Promise.<module:model-bb-product-summary-ng.Product[], module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to array with Products.
	   */
	  var getProductsArray = function getProductsArray() {
	    var keepEmptyProducts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	    return getProducts().then(function (data) {
	      return Object.keys(data).filter(function (kind) {
	        return keepEmptyProducts || productKindHasProducts(data[kind]);
	      }).reduce(function (products, kind) {
	        var extendedProducts = data[kind].products.map(function (product) {
	          return Object.assign(product, { kind: kind });
	        });
	        return products.concat(extendedProducts);
	      }, []);
	    });
	  };
	
	  /**
	   * @name savingGoalsModel#getProductByID
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Get product by id
	   *
	   * @param {any} productId product ID to get a stored product record
	   *
	   * @returns {Promise.<module:model-bb-product-summary-ng.Product, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to a product with specified id
	   */
	  var getProductByID = function getProductByID(productId) {
	    return getProductsArray().then(function (products) {
	      var defaultProduct = products[0] || null;
	
	      return productId ? products.find(function (product) {
	        return product.id === productId;
	      }) : defaultProduct;
	    });
	  };
	
	  /**
	   * @name savingGoalsModel#getSelectedProduct
	   * @type {function}
	   *
	   * @description
	   * Get current selected product.
	   *
	   * @returns {Promise.<module:model-bb-product-summary-ng.Product, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to a selected product object.
	   */
	  var getSelectedProduct = function getSelectedProduct() {
	    return bbStorage.getItem(_constants.BbStorageKeys.PRODUCT_SELECTED).then(function (id) {
	      return getProductByID(id);
	    });
	  };
	
	  /**
	   * @name savingGoalsModel#getSchema
	   * @type {function}
	   *
	   * @description
	   * Gets the saving goals item schema from the data (RAML)
	   *
	   * @returns {SavingGoalsSchema}
	   */
	  var getSchema = function getSchema() {
	    return savingGoalsData.schemas.postSavinggoalsRecord.properties;
	  };
	
	  /**
	   * @name savingGoalsModel#getSavingGoals
	   * @type {function}
	   *
	   * @description
	   * Gets the list of saving goals
	   *
	   * @param {object} params Parameters to be passed.
	   * @returns {Promise.<SavingGoalsResponse>} A Promise with an array of saving goals
	   */
	  var getSavingGoals = function getSavingGoals() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    return savingGoalsData.getSavinggoals(params).then(function (response) {
	      return {
	        items: response.data
	      };
	    }).catch(defaultErrorHandler);
	  };
	
	  /**
	   * @name savingGoalsModel#createSavingGoal
	   * @type {function}
	   *
	   * @description
	   * Creates a new saving goal
	   *
	   * @param {object} item Saving goal data
	   * @returns {Promise} A Promise with response data
	   */
	  var createSavingGoal = function createSavingGoal(item) {
	    return savingGoalsData.postSavinggoalsRecord(item).catch(defaultErrorHandler);
	  };
	
	  /**
	   * @name savingGoalsModel#updateSavingGoal
	   * @type {function}
	   *
	   * @description
	   * Updates an existing saving goal
	   *
	   * @param {string} savingGoalId Saving goal id
	   * @param {object} savingGoal Saving goal object
	   * @returns {Promise} A Promise with response data
	   */
	  var updateSavingGoal = function updateSavingGoal(savingGoalId, savingGoal) {
	    return savingGoalsData.putSavinggoalsRecord(savingGoalId, savingGoal).catch(defaultErrorHandler);
	  };
	
	  /**
	   * @name savingGoalsModel#deleteSavingGoal
	   * @type {function}
	   *
	   * @description
	   * Deletes a saving goal
	   *
	   * @param {string} savingGoalId Saving goal id
	   * @param {object} savingGoal Saving goal data
	   * @returns {Promise} A Promise with response data
	   */
	  var deleteSavingGoal = function deleteSavingGoal(savingGoalId, savingGoal) {
	    return savingGoalsData.deleteSavinggoalsRecord(savingGoalId, savingGoal).catch(defaultErrorHandler);
	  };
	
	  /**
	   * @name savingGoalsModel
	   * @type {Object}
	   */
	  return {
	    getSchema: getSchema,
	    getSelectedProduct: getSelectedProduct,
	    getSavingGoals: getSavingGoals,
	    createSavingGoal: createSavingGoal,
	    updateSavingGoal: updateSavingGoal,
	    deleteSavingGoal: deleteSavingGoal
	  };
	}
	
	/**
	 * @typedef {object} SavingGoalsResponse
	 * @property {Array.<SavingGoalItem>} data
	 */
	
	/**
	 * @typedef {object} SavingGoalItem
	 * @extends module:data-bb-saving-goals-http-ng.savingGoalsData
	 */
	
	/**
	 * @typedef {object} SavingGoalsSchema
	 * @extends module:data-bb-saving-goals-http-ng.schemas
	 */

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable import/prefer-default-export */
	
	/**
	 * @name BbStorageKeys
	 * @description
	 * bbStorage keys enum
	 * @type {object}
	 */
	var BbStorageKeys = exports.BbStorageKeys = {
	  PRODUCT_SELECTED: 'bb.product.selected',
	  PRODUCT_SUMMARY: 'bb.product.summary.data'
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=model-bb-saving-goals-ng.js.map