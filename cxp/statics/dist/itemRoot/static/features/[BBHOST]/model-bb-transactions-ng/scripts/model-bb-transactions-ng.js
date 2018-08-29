(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("data-bb-transactions-http-ng"), require("data-bb-product-summary-http-ng"), require("data-bb-payment-orders-http-ng"), require("data-bb-categories-management-http-ng"), require("lib-bb-storage-ng"), require("lib-bb-model-errors"));
	else if(typeof define === 'function' && define.amd)
		define("model-bb-transactions-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "data-bb-transactions-http-ng", "data-bb-product-summary-http-ng", "data-bb-payment-orders-http-ng", "data-bb-categories-management-http-ng", "lib-bb-storage-ng", "lib-bb-model-errors"], factory);
	else if(typeof exports === 'object')
		exports["model-bb-transactions-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("data-bb-transactions-http-ng"), require("data-bb-product-summary-http-ng"), require("data-bb-payment-orders-http-ng"), require("data-bb-categories-management-http-ng"), require("lib-bb-storage-ng"), require("lib-bb-model-errors"));
	else
		root["model-bb-transactions-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["data-bb-transactions-http-ng"], root["data-bb-product-summary-http-ng"], root["data-bb-payment-orders-http-ng"], root["data-bb-categories-management-http-ng"], root["lib-bb-storage-ng"], root["lib-bb-model-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_63__, __WEBPACK_EXTERNAL_MODULE_64__, __WEBPACK_EXTERNAL_MODULE_65__, __WEBPACK_EXTERNAL_MODULE_66__, __WEBPACK_EXTERNAL_MODULE_67__, __WEBPACK_EXTERNAL_MODULE_68__, __WEBPACK_EXTERNAL_MODULE_69__, __WEBPACK_EXTERNAL_MODULE_71__) {
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

	module.exports = __webpack_require__(62);

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BadRequestErrors = exports.modelTransactionsKey = exports.modelTransactionsModuleKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(63);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(64);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _dataBbTransactionsHttpNg = __webpack_require__(65);
	
	var _dataBbTransactionsHttpNg2 = _interopRequireDefault(_dataBbTransactionsHttpNg);
	
	var _dataBbProductSummaryHttpNg = __webpack_require__(66);
	
	var _dataBbProductSummaryHttpNg2 = _interopRequireDefault(_dataBbProductSummaryHttpNg);
	
	var _dataBbPaymentOrdersHttpNg = __webpack_require__(67);
	
	var _dataBbPaymentOrdersHttpNg2 = _interopRequireDefault(_dataBbPaymentOrdersHttpNg);
	
	var _dataBbCategoriesManagementHttpNg = __webpack_require__(68);
	
	var _dataBbCategoriesManagementHttpNg2 = _interopRequireDefault(_dataBbCategoriesManagementHttpNg);
	
	var _libBbStorageNg = __webpack_require__(69);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _transactions = __webpack_require__(70);
	
	var _transactions2 = _interopRequireDefault(_transactions);
	
	var _constants = __webpack_require__(72);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var modelTransactionsModuleKey = exports.modelTransactionsModuleKey = 'model-bb-transactions-ng'; /**
	                                                                                                   * @module model-bb-transactions-ng
	                                                                                                   *
	                                                                                                   * @description
	                                                                                                   * Transactions model module.
	                                                                                                   *
	                                                                                                   * @usage
	                                                                                                   * import modelTransactionsModuleKey, {
	                                                                                                   *   modelTransactionsKey,
	                                                                                                   * } from 'model-bb-transactions-ng';
	                                                                                                   *
	                                                                                                   * angular.module('widget-bb-transactions-ng', [
	                                                                                                   *   modelTransactionsModuleKey,
	                                                                                                   * ])
	                                                                                                   * .controller('TransactionsController', [
	                                                                                                   *   modelTransactionsKey,
	                                                                                                   *   ...,
	                                                                                                   * ])
	                                                                                                   */
	var modelTransactionsKey = exports.modelTransactionsKey = 'model-bb-transactions-ng:model';
	
	/**
	 * @name BadRequestErrors
	 * @type {Object}
	 *
	 * @description
	 * Additional errors thrown from the model
	 */
	exports.BadRequestErrors = _constants.BadRequestErrors;
	
	/**
	 * @name default
	 * @type {string}
	 *
	 * @description
	 * Transactions Model
	 */
	
	exports.default = _vendorBbAngular2.default.module(modelTransactionsModuleKey, [_dataBbTransactionsHttpNg2.default, _dataBbProductSummaryHttpNg2.default, _dataBbPaymentOrdersHttpNg2.default, _dataBbCategoriesManagementHttpNg2.default, _libBbWidgetNg2.default, _libBbStorageNg2.default]).factory(modelTransactionsKey, [_dataBbTransactionsHttpNg.transactionsDataKey, _dataBbProductSummaryHttpNg.productSummaryDataKey, _dataBbPaymentOrdersHttpNg.paymentOrdersDataKey, _dataBbCategoriesManagementHttpNg.categoriesManagementDataKey, _libBbWidgetNg.widgetKey, _libBbStorageNg.bbStorageServiceKey,
	/* into */
	_transactions2.default]).name;

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_63__;

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_64__;

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_65__;

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_66__;

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_67__;

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_68__;

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_69__;

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /* eslint max-len: ["error", 100, { "ignoreComments": true }]*/
	
	
	exports.default = transactionsModel;
	
	var _libBbModelErrors = __webpack_require__(71);
	
	var _constants = __webpack_require__(72);
	
	/**
	 * @name transactionsModel
	 * @returns {object}
	 * @inner
	 */
	function transactionsModel(transactionsData, productSummaryData, paymentOrdersData, transactionCategoriesData, widget, bbStorage) {
	  /**
	   * @name transactionsModel#fromHttpOrBadRequestError
	   * @type {function}
	   * @inner
	   * @param {object} httpErrorResponse response error object
	   * @returns {module:lib-bb-model-errors.ModelError} Default `fromHttpError` result, which, in case
	   * the response status is 400 and the response data contains error information according to the
	   * proper S-SDK schema, is augmented with this extra error information.
	   *
	   * @description
	   * The exception that is thrown when there is a communication error with back-end.
	   */
	  var fromHttpOrBadRequestError = function fromHttpOrBadRequestError(httpErrorResponse) {
	    var modelError = (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	
	    if (httpErrorResponse.status === 400) {
	      var errors = httpErrorResponse.data.errors;
	      if (errors && errors.length) {
	        Object.assign(modelError, {
	          badRequestErrors: errors
	        });
	      }
	    }
	
	    return modelError;
	  };
	
	  /**
	   * @name transactionsModel#loadProducts
	   * @type {function}
	   * @inner
	   * @returns {Promise.<module:model-bb-product-summary-ng.ProductKinds, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to object with ProductsKinds and TotalBalance.
	   *
	   * @description
	   * Load products.
	   */
	  var loadProductSummary = function loadProductSummary() {
	    return productSummaryData.getProductsummary().then(function (_ref) {
	      var data = _ref.data;
	
	      bbStorage.setItem(_constants.BbStorageKeys.PRODUCT_SUMMARY, data);
	      return data;
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  };
	
	  /**
	   * @name transactionsModel#getProducts
	   * @type {function}
	   * @inner
	   * @returns {Promise.<module:model-bb-product-summary-ng.ProductKinds, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to array with products.
	   *
	   * @description
	   * Get product list.
	   */
	  var getProducts = function getProducts() {
	    return bbStorage.getItem(_constants.BbStorageKeys.PRODUCT_SUMMARY).then(function (data) {
	      return data || loadProductSummary();
	    }).then(function (data) {
	      return Object.keys(data).filter(function (kind) {
	        return data[kind].products && data[kind].products.length;
	      }).reduce(function (products, kind) {
	        var extendedProducts = data[kind].products.map(function (product) {
	          return Object.assign(product, { kind: kind });
	        });
	        return products.concat(extendedProducts);
	      }, []);
	    });
	  };
	
	  /**
	   * @name transactionsModel#getProductViewModel
	   * @inner
	   * @type {function}
	   * @param {module:model-bb-product-summary-ng.Product} product Product
	   * @returns {ProductViewModel} product view model
	   *
	   * @description
	   * Get product view model contains product name and product number.
	   */
	  var getProductViewModel = function getProductViewModel(product) {
	    return {
	      accountHolderName: product.accountHolderName || product.name,
	      accountNumber: product.IBAN || product.BBAN || product.number || product.productNumber
	    };
	  };
	
	  /**
	   * @name transactionsModel#processResponse
	   * @type {function}
	   * @inner
	   * @param {module:model-bb-product-summary-ng.Product} product Product
	   * @returns {Promise.<Array>} Processed transaction data.
	   *
	   * @description
	   * Process response of loading transaction list.
	   */
	  var processResponse = function processResponse(response) {
	    return getProducts().then(function (products) {
	      var data = response.data.map(function (transaction) {
	        var accountOfTransaction = products.find(function (product) {
	          return product.id === transaction.arrangementId;
	        });
	
	        if (accountOfTransaction) {
	          Object.assign(transaction, getProductViewModel(accountOfTransaction));
	        }
	
	        return transaction;
	      });
	
	      return {
	        totalCount: parseInt(response.headers('x-total-count'), 10) || 0,
	        data: data
	      };
	    });
	  };
	
	  /**
	   * @name transactionsModel#load
	   * @type {function}
	   * @param {object} params Request parameters
	   * @returns {Promise.<TransactionItem[]>} List of transactions as a promise.
	   *
	   * @description
	   * Load transactions.
	   */
	  var load = function load(params) {
	    if (!params.productId && !params.arrangementId && (!params.arrangementsIds || !params.arrangementsIds.length)) {
	      return new Promise(function (resolve) {
	        return resolve({
	          totalCount: 0,
	          data: []
	        });
	      });
	    }
	
	    return transactionsData.getTransactions(params).then(processResponse).catch(function (e) {
	      throw fromHttpOrBadRequestError(e);
	    });
	  };
	
	  /**
	   * @name transactions@getExportFileResource
	   * @type {function}
	   * @param {object} params Request parameters
	   * @param {string} format Export format
	   * @returns {string} URL to export file
	   *
	   * @description
	   * Compound URI by data module method and query parameters
	   */
	  var getExportFileResource = function getExportFileResource(params, format) {
	    if (format === _constants.ExportFormat.CSV) {
	      return transactionsData.getTransactionsCsvUrl(params);
	    }
	
	    // fallback for unknown/undefined formats
	    return transactionsData.getTransactionsCsvUrl(params);
	  };
	
	  /**
	   * @name transactionsModel#getDefaultProduct
	   * @type {function}
	   * @inner
	   * @param {object} id Product ID
	   * @param {Product[]} products Products list
	   * @returns {Promise.<module:model-bb-product-summary-ng.Product|null, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to object with default Product or null.
	   *
	   * @description
	   * Get default product.
	   */
	  var findProductById = function findProductById(id, products) {
	    return products.find(function (product) {
	      return product.id === id;
	    });
	  };
	
	  /**
	   * @name transactionsModel#filterProductByVisibleArrangement
	   * @type {function}
	   * @inner
	   * @param {Product[]} products Products list
	   * @returns {Promise.<module:model-bb-product-summary-ng.Product[], module:lib-bb-model-errors.ModelError>}
	   * Returning array of filtered visible Products or empty array.
	   *
	   * @description
	   * Filter products list by visibility.
	   */
	  var filterProductByVisibleArrangement = function filterProductByVisibleArrangement(products) {
	    return products.filter(function (product) {
	      return product.visible;
	    });
	  };
	
	  /**
	   * @name transactionsModel#getProductFromList
	   * @type {function}
	   * @inner
	   * @param {object} id Product ID or Products IDs
	   * @param {object} getFirstInstead Product ID
	   * @returns {Promise.<module:model-bb-product-summary-ng.Product, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to object with Product/Products or null.
	   *
	   * @description
	   * Get product/products from list.
	   */
	  var getProductFromList = function getProductFromList(id, getFirstInstead) {
	    return getProducts().then(function (products) {
	      if (Array.isArray(id)) {
	        // if there's no products but empty [], it will return all products' IDs
	        var selectedProducts = id.length > 0 ? products.filter(function (product) {
	          return id.includes(product.id);
	        }) : products;
	
	        return selectedProducts;
	      }
	
	      var _filterProductByVisib = filterProductByVisibleArrangement(products),
	          _filterProductByVisib2 = _slicedToArray(_filterProductByVisib, 1),
	          _filterProductByVisib3 = _filterProductByVisib2[0],
	          firstFilteredProduct = _filterProductByVisib3 === undefined ? null : _filterProductByVisib3;
	
	      var defaultProduct = getFirstInstead && firstFilteredProduct;
	      return id ? findProductById(id, products) || defaultProduct : defaultProduct;
	    });
	  };
	
	  /**
	   * @name transactionsModel#getSelectedProduct
	   * @type {function}
	   * @returns {Promise.<module:model-bb-product-summary-ng.Product, module:lib-bb-model-errors.ModelError>}
	   * A Promise with Product
	   *
	   * @description
	   * Get current selected product
	   */
	  var getSelectedProduct = function getSelectedProduct() {
	    var getFirstInstead = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	    return Promise.all([bbStorage.getItem(_constants.BbStorageKeys.PRODUCT_SELECTED), bbStorage.getItem(_constants.BbStorageKeys.PRODUCTS_SELECTED)]).then(function (_ref2) {
	      var _ref3 = _slicedToArray(_ref2, 2),
	          id = _ref3[0],
	          ids = _ref3[1];
	
	      return getProductFromList(id || ids, getFirstInstead);
	    });
	  };
	
	  /**
	   * @name transactionsModel#getCurrentTransaction
	   * @type {function}
	   * @returns {object} Transaction data
	   *
	   * @description
	   * Tries to read the current transaction from sync preferences
	   */
	  var getCurrentTransaction = function getCurrentTransaction() {
	    return bbStorage.getItem(_constants.BbStorageKeys.TRANSACTION_SELECTED);
	  };
	
	  /**
	   * @name transactionsModel#storeTransactionAsCurrent
	   * @type {function}
	   * @param {object} transaction Transaction data
	   *
	   * @description
	   * Stores a given transaction as current in sync preferences
	   */
	  var storeTransactionAsCurrent = function storeTransactionAsCurrent(transaction) {
	    return bbStorage.setItem(_constants.BbStorageKeys.TRANSACTION_SELECTED, transaction);
	  };
	
	  /**
	   * @name transactionsModel#updateTransactionCategory
	   * @type {function}
	   * @param {string} id Transaction identifier
	   * @param {string} arrangementId Related arrangement identifier
	   * @param {string} category Category name
	   * @returns {Promise.<boolean, module:lib-bb-model-errors.ModelError>}
	   * A Promise with Transaction item or error
	   *
	   * @description
	   * Updates the transaction's category
	   */
	  var updateTransactionCategory = function updateTransactionCategory(id, arrangementId, category) {
	    return transactionsData.patchTransactionsRecord([{ id: id, arrangementId: arrangementId, category: category }]).then(Promise.resolve(true)).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  };
	
	  /**
	   * @name transactionsModel#getCurrencies
	   * @type {function}
	   * @returns {Promise.<object[]>} A Promise with response.
	   *
	   * @description
	   * Get available currencies.
	   */
	  var getCurrencies = function getCurrencies() {
	    return paymentOrdersData.getPaymentOrdersCurrencies()
	    // Convert currencies format to the format used in the widgets
	    .then(function (_ref4) {
	      var data = _ref4.data;
	      return data.map(function (_ref5) {
	        var code = _ref5.code;
	        return { name: code };
	      });
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name transactionsModel#getCategories
	   * @type {function}
	   * @param {object} params Request parameters
	   * @returns {Array.<module:data-bb-categories-management-http-ng.CategoriesManagement.Category>}
	   * categories array
	   *
	   * @description
	   * Request categories list
	   */
	  var getCategories = function getCategories() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.defaultCategoriesParams;
	    return transactionCategoriesData.getCategories(params).then(function (response) {
	      return response.data;
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name transactionsModel#getTransactionsEnumValues
	   * @type {function}
	   * @param {object} params Request parameters
	   * @returns {Promise.<Array.<module:data-bb-transactions-http-ng.TransactionsData.DefaultValueGetResponse>, module:lib-bb-model-errors.ModelError>}
	   * A Promise with transactions enum values or error.
	   *
	   * @description
	   * Request transactions enum values
	   */
	  var getTransactionsEnumValues = function getTransactionsEnumValues() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    return transactionsData.getTransactionsEnumValuesRecord(params.attributeName).then(function (response) {
	      return response.data;
	    }).catch(function (httpErrorResponse) {
	      throw fromHttpOrBadRequestError(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name transactionsModel
	   * @type {object}
	   */
	  return {
	    load: load,
	    getSelectedProduct: getSelectedProduct,
	    getCurrentTransaction: getCurrentTransaction,
	    storeTransactionAsCurrent: storeTransactionAsCurrent,
	    getCurrencies: getCurrencies,
	    getExportFileResource: getExportFileResource,
	    updateTransactionCategory: updateTransactionCategory,
	    getCategories: getCategories,
	    getTransactionsEnumValues: getTransactionsEnumValues
	  };
	}
	
	/**
	 * TransactionItem type definition
	 * @typedef {Object} TransactionItem
	 * @property {string} id Internally used unique identification of the transaction
	 * @property {string} arrangementId Reference to the product to which the transaction belongs
	 * @property {string} productId Reference to the product to which the transaction belongs
	 * @property {string} reference A tag/label issued by the initiator of the transaction in order to be able
	 * to refer to the respective transaction
	 * @property {string} description Transaction description
	 * @property {string} typeGroup Bank specific code of the group the transaaction type belangs to this to be
	 * mapped to in integration
	 * @property {string} type Bank specific code to be mapped to generic type in integration
	 * @property {string} category Transaction category
	 * @property {string} bookingDate The date the amount is posted to the balance of
	 * an account from a book keeping perspective
	 * @property {string} valueDate The date on which an amount posted to an account becomes interest bearing
	 * @property {number} amount The amount of the transaction
	 * @property {string} currency Currency code
	 * @property {string} creditDebitIndicator Indicator if transaction is incoming our outgoing
	 * @property {number} instructedAmount Only present if the transaction currency <> account currency
	 * @property {string} instructedCurrency Currency code of instructed amount
	 * @property {number} currencyExchangeRate The exchange rate (between both account and transaction currency)
	 * that was used for the conversion. To be used if those currencies are not the same
	 * @property {string} counterPartyName The name of the counterparty
	 * @property {string} counterPartyAccountNumber The International Bank Account Number of the counterparty
	 * @property {string} counterPartyBIC The BIC of the counterparty
	 * @property {string} counterPartyCountry ISO Country code
	 * @property {string} counterPartyBankName The bank name of the counterparty
	 * @property {string} creditorId Id of the creditor (Only for SEPA DD)
	 * @property {string} mandateReference Mandate Reference (Only for SEPA DD)
	 */
	
	/**
	 * Product view model type definition
	 * @typedef {Object} ProductViewModel
	 * @property {string} productName name of the Product
	 * @property {string} productNumber number of the Product
	 */

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_71__;

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Widget preferences enum
	 * @type {object}
	 */
	var Preference = exports.Preference = {};
	
	/**
	 * bbStorage keys enum
	 * @type {object}
	 */
	var BbStorageKeys = exports.BbStorageKeys = {
	  PRODUCT_SELECTED: 'bb.product.selected',
	  PRODUCTS_SELECTED: 'bb.products.selected',
	  PRODUCT_SUMMARY: 'bb.product.summary.data',
	  TRANSACTION_SELECTED: 'bb.transaction.selected'
	};
	
	/**
	 * Bad request error keys enum
	 * @type {object}
	 */
	var BadRequestErrors = exports.BadRequestErrors = {
	  ERR_INVALID_ARR_ID: 'transactions.api.invalidId.arrangement',
	  ERR_ARR_NOT_FOUND: 'transactions.api.notFound.arrangement',
	  ERR_INVALID_TRAN_BODY: 'transactions.api.invalidBody.transaction',
	  ERR_INVALID_TRAN_PARAMS: 'transactions.api.invalidParameters.transaction',
	  ERR_TRAN_EXISTS: 'transactions.api.alreadyExists.transaction',
	  ERR_ARR_NO_PRIVILEGES: 'transactions.api.noPrivilege.arrangement',
	  ERR_INVALID_ACCESS_GROUP_BODY: 'transactions.api.invalidBody.accessGroup',
	  ERR_INVALID_USER_BODY: 'transactions.api.invalidBody.user',
	  ERR_USER_NOT_FOUND: 'transactions.api.notFound.user',
	  ERR_INVALID_PRIVILEGES_REQUESTED: 'transactions.api.invalidPrivileges.arrangement',
	  ERR_INVALID_CHECK_SERIAL_NUMBER_VALUE: 'transactions.api.invalid.fromCheckSerialNumber.value'
	};
	
	/**
	 * Default parameters for get categories request
	 * @type {object}
	 */
	var defaultCategoriesParams = exports.defaultCategoriesParams = {
	  level: 'ALL'
	};
	
	/**
	 * Export format enum
	 * @type {object}
	 */
	var ExportFormat = exports.ExportFormat = {
	  CSV: 'csv'
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=model-bb-transactions-ng.js.map