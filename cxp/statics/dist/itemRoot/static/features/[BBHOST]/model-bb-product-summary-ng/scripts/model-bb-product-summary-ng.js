(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"), require("data-bb-product-summary-http-ng"), require("data-bb-arrangements-http-ng"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"));
	else if(typeof define === 'function' && define.amd)
		define("model-bb-product-summary-ng", ["vendor-bb-angular", "lib-bb-storage-ng", "data-bb-product-summary-http-ng", "data-bb-arrangements-http-ng", "lib-bb-widget-ng", "lib-bb-model-errors"], factory);
	else if(typeof exports === 'object')
		exports["model-bb-product-summary-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"), require("data-bb-product-summary-http-ng"), require("data-bb-arrangements-http-ng"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"));
	else
		root["model-bb-product-summary-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage-ng"], root["data-bb-product-summary-http-ng"], root["data-bb-arrangements-http-ng"], root["lib-bb-widget-ng"], root["lib-bb-model-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_99__, __WEBPACK_EXTERNAL_MODULE_100__, __WEBPACK_EXTERNAL_MODULE_101__, __WEBPACK_EXTERNAL_MODULE_102__, __WEBPACK_EXTERNAL_MODULE_103__, __WEBPACK_EXTERNAL_MODULE_105__) {
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

	module.exports = __webpack_require__(98);

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modelProductSummaryKey = exports.BadRequestError = undefined;
	
	var _vendorBbAngular = __webpack_require__(99);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStorageNg = __webpack_require__(100);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _dataBbProductSummaryHttpNg = __webpack_require__(101);
	
	var _dataBbProductSummaryHttpNg2 = _interopRequireDefault(_dataBbProductSummaryHttpNg);
	
	var _dataBbArrangementsHttpNg = __webpack_require__(102);
	
	var _dataBbArrangementsHttpNg2 = _interopRequireDefault(_dataBbArrangementsHttpNg);
	
	var _libBbWidgetNg = __webpack_require__(103);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _productSummary = __webpack_require__(104);
	
	var _productSummary2 = _interopRequireDefault(_productSummary);
	
	var _constants = __webpack_require__(106);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.BadRequestError = _constants.BadRequestError;
	
	/**
	 * Injector name of the model service
	 * @name modelProductSummaryKey
	 * @type {string}
	 */
	
	/**
	 * @name BadRequestError
	 * @type {Object}
	 * @description
	 * Additional errors thrown from the model
	 */
	/**
	 * @module model-bb-product-summary-ng
	 *
	 * @description
	 * Product summary widget model.
	 *
	 * @usage
	 * import modelProductSummaryModuleKey, {
	 *   modelProductSummaryKey,
	 * } from 'model-bb-product-summary-ng';
	 *
	 * angular.module('widget-bb-product-summary-ng', [
	 *   modelProductSummaryModuleKey,
	 * ])
	 * .controller('ProductSummaryController', [
	 *   modelProductSummaryKey,
	 *   ...,
	 * ])
	 */
	
	var modelProductSummaryKey = exports.modelProductSummaryKey = 'model-bb-product-summary-ng:model';
	
	exports.default = _vendorBbAngular2.default.module('model-bb-product-summary-ng', [_dataBbProductSummaryHttpNg2.default, _dataBbArrangementsHttpNg2.default, _libBbStorageNg2.default, _libBbWidgetNg2.default]).factory(modelProductSummaryKey, [_dataBbProductSummaryHttpNg.productSummaryDataKey, _dataBbArrangementsHttpNg.arrangementsDataKey, _libBbStorageNg.bbStorageServiceKey, '$q', _libBbWidgetNg.widgetKey,
	/* into */
	_productSummary2.default]).name;

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_99__;

/***/ }),

/***/ 100:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_100__;

/***/ }),

/***/ 101:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_101__;

/***/ }),

/***/ 102:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_102__;

/***/ }),

/***/ 103:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_103__;

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = productSummaryModel;
	
	var _libBbModelErrors = __webpack_require__(105);
	
	var _constants = __webpack_require__(106);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * Method to normalize data
	 * @private
	 * @param rawData {Object} http data response
	 * @returns {ProductKind[]}
	 */
	function convertToArray(rawData) {
	  return Object.keys(rawData).filter(function (kind) {
	    return rawData[kind].products && rawData[kind].products.length > 0;
	  }).map(function (kind) {
	    var rawKind = rawData[kind];
	    var products = rawKind.products.map(function (product) {
	      return Object.assign({ kind: kind }, product);
	    });
	
	    return Object.assign({}, rawKind, { id: kind, products: products });
	  });
	}
	
	/**
	 * Product summary model service
	 * @name ProductSummaryModel
	 * @param {ProductSummaryData} productSummaryData
	 *   A Data module to allow access to product summary data.
	 * @param {ArrangementsData} arrangementsData
	 *   A Data module to allow access to arrangements data.
	 * @param {Object} bbStorage storage instance
	 * @param {object} Promise An ES2015 compatible `Promise` object.
	 * @return {ProductSummaryModel}
	 * @inner
	 */
	function productSummaryModel(productSummaryData, arrangementsData, bbStorage, Promise, widget) {
	  /**
	   * @description
	   * Processed Product Summary data
	   * @type {ProductKinds}
	   */
	  var processedSummaryData = void 0;
	
	  /**
	   * @description
	   * CXP preference for disabling storing product summary data in session storage.
	   *
	   * @name bb.productSummary.disableSessionStorage
	   * @type {boolean}
	   * @inner
	   */
	  var disableSessionStorage = widget.getBooleanPreference(_constants.Preference.PRODUCT_SUMMARY_DISABLE_SESSION_STORAGE) || false;
	
	  /**
	   * @name ProductSummaryModel#fromHttpOrBadRequestError
	   * @description
	   * The exception that is thrown when there is a error communication with backend.
	   * Returns default fromHttp response, or bad request with custom message from back-end
	   * if the response status is 400
	   * @inner
	   * @type {function}
	   * @param {object} httpResponse response error object
	   */
	  var fromHttpOrBadRequestError = function fromHttpOrBadRequestError(httpResponse) {
	    if (httpResponse.status === 400 && httpResponse.data.errors && httpResponse.data.errors.length) {
	      var codes = httpResponse.data.errors.map(function (e) {
	        return e.key;
	      });
	      return {
	        code: codes[0],
	        codes: codes,
	        __httpResponse: httpResponse
	      };
	    }
	    return (0, _libBbModelErrors.fromHttpError)(httpResponse);
	  };
	
	  /**
	   * @name ProductSummaryModel#patchArrangement
	   * @type {function}
	   * @description Perform Patch request for arrangement
	   * @param {ArrangementsData.ArrangementPatch} arrangement
	   * Arrangement data to be sent as the request message data.
	   * @returns {Promise.<Response>}
	   */
	  var patchArrangement = function patchArrangement(arrangement) {
	    return arrangementsData.patchArrangementsRecord(arrangement).catch(function (e) {
	      throw fromHttpOrBadRequestError(e);
	    });
	  };
	
	  var loadProductSummary = function loadProductSummary() {
	    return productSummaryData.getProductsummary().then(function (_ref) {
	      var data = _ref.data;
	
	      if (!disableSessionStorage) {
	        bbStorage.setItem(_constants.BbStorageKeys.PRODUCT_SUMMARY, data);
	      }
	      return data;
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  };
	
	  /**
	   * @name ProductSummaryModel#load
	   * @type {function}
	   *
	   * @description
	   * Load Product Summary data.
	   *
	   * @param {object} forceLoad True if should always load data from server
	   * @returns {Promise.<ProductKinds, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to object with ProductsKinds and TotalBalance.
	   */
	  var load = function load() {
	    var forceLoad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	    return bbStorage.getItem(_constants.BbStorageKeys.PRODUCT_SUMMARY).then(function (data) {
	      return !forceLoad && data || loadProductSummary();
	    }).then(function (data) {
	      var aggregatedBalance = data.aggregatedBalance;
	
	      processedSummaryData = {
	        productKinds: convertToArray(data),
	        total: aggregatedBalance
	      };
	      return processedSummaryData;
	    });
	  };
	
	  /**
	   * @name ProductSummaryModel#getProductSelectedId
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Tries to read selected product id from storage.
	   *
	   * @returns {Promise<?string>} a Promise with ID
	   */
	  var getProductSelectedId = function getProductSelectedId() {
	    return bbStorage.getItem(_constants.BbStorageKeys.PRODUCT_SELECTED);
	  };
	
	  /**
	   * @name ProductSummaryModel#findProductById
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Get product by ID.
	   *
	   * @param {object} id Product ID
	   * @param {ProductKind[]} data Products list
	   * @returns {Promise.<Product|null, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to object with default Product or null.
	   */
	  var findProductById = function findProductById(id, data) {
	    var idx = data.length;
	
	    while (idx--) {
	      var kind = data[idx];
	      var foundProduct = kind.products.find(function (product) {
	        return product.id === id;
	      });
	
	      if (foundProduct) {
	        return foundProduct;
	      }
	    }
	
	    return null;
	  };
	  /**
	   * @name ProductSummaryModel#getFirstVisibleProduct
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Get the first visible product.
	   *
	   * @param {object} kinds All Product kinds
	   * @returns {Product|null} firstProduct
	   * Returns first visible Product.
	   */
	  var getFirstVisibleProduct = function getFirstVisibleProduct(kinds) {
	    var firstKindWithVisibleProduct = kinds.find(function (kind) {
	      return kind.products.find(function (product) {
	        return product.visible;
	      });
	    });
	
	    var _firstKindWithVisible = firstKindWithVisibleProduct.products.filter(function (product) {
	      return product.visible;
	    }),
	        _firstKindWithVisible2 = _slicedToArray(_firstKindWithVisible, 1),
	        _firstKindWithVisible3 = _firstKindWithVisible2[0],
	        firstProduct = _firstKindWithVisible3 === undefined ? null : _firstKindWithVisible3;
	
	    return firstProduct;
	  };
	
	  /**
	   * @name ProductSummaryModel#getAllVisibleProducts
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Get all visible products.
	   *
	   * @param {object} kinds All Product kinds
	   * @returns {Product[]} all visible products
	   * Returns all visible Products.
	   */
	  var getAllVisibleProducts = function getAllVisibleProducts(kinds) {
	    return kinds.map(function (kind) {
	      return kind.products;
	    }).reduce(function (allProducts, products) {
	      return [].concat(_toConsumableArray(allProducts), _toConsumableArray(products));
	    }, []).filter(function (product) {
	      return product.visible;
	    });
	  };
	
	  /**
	   * @name ProductSummaryModel#setProductSelected
	   * @type {function}
	   *
	   * @description
	   * Set current selected product
	   *
	   * @param {Product} product A product to select
	   */
	  var setProductSelected = function setProductSelected(product) {
	    if (product) {
	      bbStorage.setItem(_constants.BbStorageKeys.PRODUCT_SELECTED, product.id);
	    } else {
	      bbStorage.removeItem(_constants.BbStorageKeys.PRODUCT_SELECTED);
	    }
	  };
	
	  /**
	   * @name ProductSummaryModel#setProductsSelected
	   * @type {function}
	   *
	   * @description
	   * Set currently selected products array
	   *
	   * @param {Product[]} products Array of products to select
	   */
	  var setProductsSelected = function setProductsSelected(products) {
	    if (products && products.length) {
	      bbStorage.setItem(_constants.BbStorageKeys.PRODUCTS_SELECTED, products.map(function (product) {
	        return product.id;
	      }).filter(function (id) {
	        return id;
	      }));
	    } else {
	      bbStorage.removeItem(_constants.BbStorageKeys.PRODUCTS_SELECTED);
	    }
	  };
	
	  /**
	   * @name ProductSummaryModel#getProductFromList
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Get product from list.
	   * If sessionStorage doesn't have selected id, set the default product id to it
	   *
	   * @param {object} id Product ID
	   * @param {boolean} getFirstInstead True if should return first product if does not have selected
	   * @returns {Promise.<?Product, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to object with Product or null.
	   */
	  var getProductFromList = function getProductFromList(id, getFirstInstead) {
	    return Promise.resolve(processedSummaryData || load(false)).then(function (_ref2) {
	      var productKinds = _ref2.productKinds;
	
	      var defaultProduct = null;
	      if (getFirstInstead) {
	        defaultProduct = getFirstVisibleProduct(productKinds);
	      }
	
	      if (!id) {
	        setProductSelected(defaultProduct);
	        setProductsSelected(); // Remove PRODUCTS_SELECTED from sessionStorage
	        return defaultProduct;
	      }
	
	      return findProductById(id, productKinds) || defaultProduct;
	    });
	  };
	
	  /**
	   * @name ProductSummaryModel#getProductsFromList
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Get products from list
	   *
	   * @param {string[]} ids array of Products IDs
	   * @param {boolean} getDefault True if should return all products if does not have selected
	   * @returns {Promise.<?Product[], module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to an array with Products or null
	   */
	  var getProductsFromList = function getProductsFromList(ids, getDefault) {
	    return Promise.resolve(processedSummaryData || load(false)).then(function (_ref3) {
	      var productKinds = _ref3.productKinds;
	
	      if (getDefault && (!ids || !ids.length)) {
	        var allVisibleProducts = getAllVisibleProducts(productKinds);
	        setProductsSelected(allVisibleProducts);
	        setProductSelected(); // Remove PRODUCT_SELECTED from sessionStorage
	        return allVisibleProducts;
	      }
	
	      // in case user unselect all products
	      if (!ids || !ids.length) {
	        return [];
	      }
	
	      return ids.map(function (id) {
	        return findProductById(id, productKinds);
	      });
	    });
	  };
	
	  /**
	   * @name ProductSummaryModel#getProductSelected
	   * @type {function}
	   *
	   * @description
	   * Temporary. Get current selected product
	   *
	   * @param {?Boolean} getFirstInstead Get first product if there is no
	   * product selected in the storage (default true)
	   * @returns {Promise.<Product>} A Promise resolving to Product.
	   */
	  var getProductSelected = function getProductSelected() {
	    var getFirstInstead = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	    return getProductSelectedId().then(function (id) {
	      return getProductFromList(id, getFirstInstead);
	    });
	  };
	
	  /**
	   * @name ProductSummaryModel#getProductsSelected
	   * @type {function}
	   *
	   * @description
	   * Get currently selected products array
	   *
	   * @param {?Boolean} getDefault Get all products if there are no
	   * products selected in the storage (default true)
	   * @returns {Promise.<Product[]>} A Promise resolving to Product array
	   */
	  var getProductsSelected = function getProductsSelected() {
	    var getDefault = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	    return bbStorage.getItem(_constants.BbStorageKeys.PRODUCTS_SELECTED).then(function (items) {
	      return getProductsFromList(items, getDefault);
	    });
	  };
	
	  /**
	   * @name ProductSummaryModel#loadByLegalEntityId
	   * @type {function}
	   *
	   * @description
	   * Load some data.
	   *
	   * @param {?object} params - optional configuration object
	   * @returns {Promise.<Products, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to object with Accounts by legalEntityId.
	   */
	  var loadByLegalEntityId = function loadByLegalEntityId(params) {
	    return productSummaryData.getProductsummaryArrangements(params).then(function (raw) {
	      return {
	        data: raw.data,
	        totalCount: parseInt(raw.headers('x-total-count'), 10)
	      };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  };
	
	  /**
	   * @name ProductSummaryModel#loadContextArrangements
	   * @type {function}
	   *
	   * @description
	   * Load arrangements collection for a given context
	   *
	   * @param {?object} params - optional configuration object
	   * @returns {Promise.<Products, module:lib-bb-model-errors.ModelError>} A Promise resolving to
	   *   a collection containing products.
	   */
	  var loadContextArrangements = function loadContextArrangements(params) {
	    return productSummaryData.getProductsummaryContextArrangements(params).then(function (raw) {
	      return {
	        data: raw.data,
	        totalCount: parseInt(raw.headers('x-total-count'), 10)
	      };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  };
	
	  /**
	   * @name ProductSummaryModel#getProductDetails
	   * @type {function}
	   *
	   * @description
	   * Get all the details of a product.
	   *
	   * @param {string} productId Id of the requested product
	   * @returns {Promise.<ProductDetails, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to object with Account details.
	   */
	  var getProductDetails = function getProductDetails(productId) {
	    return arrangementsData.getArrangementsRecord(productId).then(function (raw) {
	      return raw.data;
	    }).catch(function (e) {
	      throw fromHttpOrBadRequestError(e);
	    });
	  };
	
	  /**
	   * @name ProductSummaryModel#getAccountsOverviewPreferences
	   * @type {function}
	   *
	   * @description
	   * Getting accounts preferences from widget
	   *
	   * @returns {Object} Preferences object
	   */
	  function getAccountsOverviewPreferences() {
	    var accountsOverviewPreferences = {};
	
	    accountsOverviewPreferences.pageSize = widget.getLongPreference(_constants.Preference.ACCOUNTS_PAGE_SIZE);
	    accountsOverviewPreferences.maxNavPages = widget.getLongPreference(_constants.Preference.ACCOUNTS_MAX_NAV_PAGES);
	    accountsOverviewPreferences.paginationType = widget.getStringPreference(_constants.Preference.ACCOUNTS_PAGINATION_TYPE);
	    accountsOverviewPreferences.dissmissMessageTime = widget.getLongPreference(_constants.Preference.ACCOUNTS_DISSMISS_MESSAGE_TIME) || 5;
	    accountsOverviewPreferences.sortableColumn = widget.getStringPreference(_constants.Preference.ACCOUNTS_SORTABLE_COLUMN);
	    accountsOverviewPreferences.productKindName = _constants.SupportedProductKinds.includes(widget.getStringPreference(_constants.Preference.PRODUCT_KIND_NAME)) ? widget.getStringPreference(_constants.Preference.PRODUCT_KIND_NAME) : '';
	    accountsOverviewPreferences.chartsEnabled = widget.getBooleanPreference(_constants.Preference.CHARTS_ENABLED) || false;
	    accountsOverviewPreferences.businessFunction = widget.getStringPreference(_constants.Preference.ACCOUNTS_BUSINESS_FUNCTION);
	    accountsOverviewPreferences.resourceName = widget.getStringPreference(_constants.Preference.ACCOUNTS_RESOURCE_NAME);
	    accountsOverviewPreferences.privilegeType = widget.getStringPreference(_constants.Preference.ACCOUNTS_PRIVILEGE_TYPE);
	    accountsOverviewPreferences.sortableDirection = widget.getStringPreference(_constants.Preference.ACCOUNTS_SORTABLE_DIRECTION);
	    accountsOverviewPreferences.accountsSelectorSelectAll = widget.getBooleanPreference(_constants.Preference.ACCOUNTS_SELECTOR_SELECT_ALL) || false;
	
	    return accountsOverviewPreferences;
	  }
	  /**
	   * @name ProductSummaryModel#getBalanceHistory
	   * @type {function}
	   *
	   * @description
	   * Get Balance history for given arrangements
	   *
	   * @param {string[]} arrangementsId Ids of the requested arrangements
	   * @param {?object} params - optional configuration object
	   * @returns {Promise.<BalanceHistory, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to object with Balance history.
	   */
	  var getBalanceHistory = function getBalanceHistory(arrangementsId, params) {
	    return arrangementsData.getAccountsBalanceHistoryRecord(arrangementsId, params).then(function (raw) {
	      return raw.data;
	    }).catch(function (e) {
	      throw fromHttpOrBadRequestError(e);
	    });
	  };
	
	  /**
	   * @name ProductSummaryModel#processSeries
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * process series to be sutable for chart UI component
	   *
	   * @param {BalanceHistoryItem} dataSeries Balance History series
	   * @returns Data in format suitable for chart UI components
	   */
	  var processSeries = function processSeries(dataSeries) {
	    var series = {
	      labels: dataSeries.map(function (item) {
	        return new Date(item.dateTo).getTime();
	      })
	    };
	    Object.assign(series, {
	      datasets: [{
	        data: dataSeries.map(function (item) {
	          return item.value.balance;
	        })
	      }]
	    });
	    return series;
	  };
	
	  /**
	   * @name ProductSummaryModel#transformToSeries
	   * @type {function}
	   *
	   * @description
	   * Transforms data per arrangement into format suitable for chart UI components
	   *
	   * @param {BalanceHistory} data Balance History data
	   * @returns {BalanceHistorySeries} Data in format suitable for chart UI components
	   */
	  var transformToSeries = function transformToSeries(data) {
	    var balanceHistory = data && data.items ? data.items : [];
	
	    return balanceHistory.reduce(function (memo, item) {
	      return Object.assign(memo, _defineProperty({}, item.arrangementId, processSeries(item.balanceHistory)));
	    }, {});
	  };
	
	  /**
	   * @name ProductSummaryModel
	   * @type {Object}
	   *
	   * @description
	   * Product Summary model service
	   */
	  return {
	    load: load,
	    getProductSelected: getProductSelected,
	    setProductSelected: setProductSelected,
	    getProductsSelected: getProductsSelected,
	    setProductsSelected: setProductsSelected,
	
	    // TODO: Remove this deprecated method when component version will be bumped to v2.0.0
	    getSelectedAccount: function getSelectedAccount() {
	      // eslint-disable-next-line max-len, no-console
	      console.warn('DEPRECATED - This method will removed in next major update. Use getProductSelected instead.');
	      return getProductSelected();
	    },
	
	    // TODO: Remove this deprecated method when component version will be bumped to v2.0.0
	    setSelectedAccount: function setSelectedAccount(account) {
	      // eslint-disable-next-line max-len, no-console
	      console.warn('DEPRECATED - This method will removed in next major update. Use setProductSelected instead.');
	      return setProductSelected(account);
	    },
	    //
	    loadByLegalEntityId: loadByLegalEntityId,
	    getProductDetails: getProductDetails,
	    getAccountsOverviewPreferences: getAccountsOverviewPreferences,
	    getBalanceHistory: getBalanceHistory,
	    transformToSeries: transformToSeries,
	    patchArrangement: patchArrangement,
	
	    loadContextArrangements: loadContextArrangements
	  };
	}
	
	/**
	 * ProductKind type definition
	 * @typedef {Object} ProductKinds
	 * @property {TotalBalance}   total               - total balance of products
	 * @property {ProductKind[]}  productKinds        - array of Products Kinds
	 */
	
	/**
	 * ProductKind type definition
	 * @typedef {Object} ProductKind
	 * @property {!string}    id                      - id of the ProductKind
	 * (currentAccounts, savingsAccounts, termDeposits, creditCards, debitCards, loans,
	 *  investmentAccounts)
	 * @property {!string}    name                    - name of the ProductKind
	 * @property {string}     aggregatedBalance       - aggregated balance
	 * @property {string}     currency                - currency code
	 * @property {Product[]}  products                - array of Products
	 */
	
	/**
	 * ProductKind type definition
	 * @typedef {Object} Products
	 * @property {number}     totalCount              - total number of products
	 * @property {Product[]}  products                - array of Products
	 */
	
	/**
	 * Product type definition
	 * @typedef {Object} Product
	 * @property {!string}    id                      - id of the Product
	 * @property {!string}    name                    - name of the Product
	 * @property {!string}    kind                    - id of the ProductKind
	 * @property {string}     alias                   - alias of the Product
	 * @property {string}     IBAN                    - International Bank Account Number
	 * @property {string}     BBAN                    - Basic Bank Account Number
	 * @property {string}     currency                - currency code
	 * @property {string}     PANSuffix               - Primary Account Number Suffix
	 * @property {string}     bookedBalance           - booked balance
	 * @property {string}     availableBalance        - available balance
	 * @property {string}     creditLimit             - credit limit
	 * @property {string}     currentInvestmentValue  - current investment value
	 * @property {string}     principalAmount         - principal amount
	 * @property {string}     accruedInterest         - accrued interest
	 */
	
	/**
	 * @typedef {Object} TotalBalance
	 * @property {string} aggregatedBalance - aggregated balance
	 * @property {string} currency - currency code
	 */
	
	/**
	 * Product details definition
	 * @typedef {Object} ProductDetails
	 * @property {!string}     externalArrangementId      - id of the external arrangement
	 * @property {!string}     externalLegalEntityId      - id of the external legal entity
	 * @property {!string}     externalProductId          - id of the external product
	 * @property {string}      name                       - name of the account
	 * @property {string}      alias                      - alias of the account
	 * @property {number}      bookedBalance              - booked balance
	 * @property {number}      availableBalance           - available balance
	 * @property {number}      creditLimit                - credit limit
	 * @property {string}      IBAN                       - International Bank Account Number
	 * @property {string}      BBAN                       - Basic Bank Account Number
	 * @property {string}      currency                   - 3 characteres currency code
	 * @property {boolean}     externalTransferAllowed    - is external transfer allowed
	 * @property {boolean}     urgentTransferAllowed      - is urgent transfer allowed
	 * @property {string}      accruedInterest            - accrued interest
	 * @property {string}      number                     - number
	 * @property {number}      principalAmount            - principal amount
	 * @property {number}      currentInvestmentValue     - current investment value
	 * @property {!string}     legalEntityId              - id of the legal entity
	 * @property {!string}     productId                  - id of the product
	 * @property {string}      productNumber              - number of the product
	 * @property {string}      accountOpeningDate         - date when account was opened
	 * @property {number}      accountInterestRate        - account interest rate
	 * @property {number}      valueDateBalance           - value date balance
	 * @property {number}      overdraftAmount            - overdraft amount
	 * @property {number}      overdraftInterestRate      - overdraft interest rate
	 * @property {number}      overdraftExpiryDate        - overdraft expiry date
	 * @property {number}      overdraftLimit             - overdraft limit
	 * @property {string}      bankBranchCode             - bank branch code
	 * @property {date}        startDate                  - start date
	 * @property {string}      term                       - term
	 * @property {date}        maturityDate               - maturity date
	 * @property {number}      maturityAmount             - maturity amount
	 * @property {boolean}     autoRenevalIndicator       - is auto renewal enabled
	 * @property {string}      interestPaymentFrequency   - interest payment frequency
	 * @property {string}      interestSettlementAccount  - interest settlement account
	 * @property {number}      outstandingPrincipal       - outstanding principal
	 * @property {number}      monthlyInstalmentAmount    - monthly instalment amount
	 * @property {number}      minimumRequiredBalance     - minimum required balance
	 * @property {string}      creditCardAccountNumber    - credit card account number
	 * @property {date}        validThru                  - credit card validity through date
	 * @property {number}      applicableInterestRate     - applicable interest rate
	 * @property {number}      remainingCredit            - remaining credit
	 * @property {number}      outstandingPayment         - outstanding payment
	 * @property {number}      minimunPayment             - minimum payment
	 * @property {date}        minimunPaymentDueDate      - minimum payment due date
	 * @property {number}      totalInvestmentValue       - total investment value
	 * @property {DebitCard[]} debitCard                  - debit card collection
	 */
	
	/**
	 * @typedef {Object} DebitCard
	 * @property {string} number      - debit card number
	 * @property {date}   expiryDate  - debit card expiry date
	 */
	
	/**
	 * @typedef ArrangementsData.ArrangementPatch
	 * @type {Object}
	 * @property {string} id Internally used unique identification of arrangement
	 * @property {?string} alias User specific naming for an arrangement
	 * @property {?boolean} visible User specific visibility for an arrangement
	 * @property {?Object} additions Container object for custom API extensions
	 */
	
	/**
	 * @typedef Response
	 * @type {Object}
	 * @property {Object} data See method descriptions for possible return types
	 * @property {function} headers Getter headers function
	 * @property {number} status HTTP status code of the response.
	 * @property {string} statusText HTTP status text of the response.
	 */
	
	/**
	 * Error desctiption for bad request status 400
	 * @typedef ErrorBadRequest
	 * @type {Object}
	 * @property {string} message Message description for bad request
	 * @property {Errors[]} errors List of errors
	 */
	
	/**
	 * Errors type definition
	 * @typedef {Object} Errors
	 * @property {string} message error message discription
	 * @property {string} key error key
	 */
	
	/**
	 * @typedef ErrorsResponseKeys
	 * @type {Object}
	 * @property {string} ERR_ACCOUNT_ARRANGEMENT_NOT_EXIST error key when
	 *  arrangement does not exist
	 * @property {string} ERR_ACCOUNT_ARRANGEMENT_NO_PRIVILEGES error key when
	 *  no privileges were found for arrangement
	 * @property {string} ERR_ACCOUNT_ARRANGEMENT_NOT_ENTITLED_TO_SEE error key when
	 *  not entitled to see arrangement
	 * @property {string} ERR_ACCOUNT_PRODUCT_NOT_EXIST error key when
	 *  Product does not exist
	 * @property {string} ERR_ACCOUNT_PRODUCT_UPDATE_SIZE error key when
	 *  size must be in allowed range
	 * @property {string} ERR_ARRANGEMENT_NOT_FOUND error key when
	 *  arrangement not found
	 * @property {string} ERR_ARRANGEMENT_NOT_EXIST_PRODUCT_KIND_NAME error key when
	 *  given product kind name does not exist
	 * @property {string} ERR_PRODUCT_SUMMARY_LEGAL_ENTITY_NOT_ALLOWED error key when
	 *  not allowed to list arrangements for this legal entity id
	 * @property {string} ERR_PRODUCT_SUMMARY_REQUEST_SIZE error key when
	 *  invalid paging size velue must be greater than or equal to 1
	 * @property {string} ERR_PRODUCT_SUMMARY_REQUEST_FROM error key when
	 *  invalid paging from value must be greater than or equal to 0
	 * @property {string} ERR_PRODUCT_SUMMARY_REQUEST_ORDER_BY error key when
	 *  invalid sorting order by value must match name
	 * @property {string} ERR_PRODUCT_SUMMARY_REQUEST_DIRECTION error key when
	 *  invalid sorting direction by value must be in must match asc|desc
	 * @property {string} ERR_BALANCE_HISTORY_ARRANGEMENT_IDS_ARE_EMPTY error key when
	 *  request object arrangements ids are empty for balance history
	 * @property {string} ERR_BALANCE_HISTORY_INVALID_COMBO_OF_RANGE_PERIOD error key when
	 *  request object for balance history has invalid combination of range/period
	 * @property {string} ERR_BALANCE_HISTORY_INVALID_DATE_FROM_TO_RANGE_PERIOD error key when
	 *  request object has invalid combination of from and to date
	 * @property {string} ERR_BALANCE_HISTORY_INVALID_FROM_DATE error key when
	 *  request object date is less than allowed years from now
	 */
	
	/**
	 * Balance History object
	 * Arrangements with balace history
	 * @typedef {Object} BalanceHistory
	 * @type {Object}
	 * @property {BalanceHistoryItem[]} items List of balance history items for
	 *  given Arrangement id's
	 */
	
	/**
	 * Arrangement balance history
	 * balance history object for given Arrangement id's
	 * @typedef BalanceHistoryItem
	 * @type {Object}
	 * @property {string} arrangementId - Arrangement Id
	 * @property {balanceHistory[]} balanceHistory - balance history data for arrangement id
	 */
	
	/**
	 * Balance History
	 * @typedef {Object} balanceHistory
	 * @type {Object}
	 * @property {string} dateFrom - date from
	 * @property {string} dateTo - date to
	 * @property {string} valuePtc - balance history value
	 * @property {object} value - balance history values that holds currency and balance value
	 * @property {string} currency - currency for balance history (yAxes)
	 * @property {string} balance - balance value (xAxes)
	 */
	
	/**
	 * BalanceHistorySeries Data in format suitable for chart UI components
	 * @typedef {Object} BalanceHistorySeries
	 * @type {Object}
	 * @property {string} arrangementId Arrangement Id for mapping balance history
	 * @property {number[]} labels label data for x-axis
	 * @property {Array.<DataSets>} datasets label data for x-axis
	 */
	
	/**
	* @typedef {Object} DataSets
	* @type {Object}
	* @property {string[]} data Data that is shown on axis
	*/

/***/ }),

/***/ 105:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_105__;

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Widget preferences enum
	 * @type {object}
	 */
	var Preference = exports.Preference = {
	  ACCOUNTS_PAGE_SIZE: 'bb.accountsOverview.pageSize',
	  ACCOUNTS_MAX_NAV_PAGES: 'bb.accountsOverview.maxNavPages',
	  ACCOUNTS_PAGINATION_TYPE: 'bb.accountsOverview.paginationType',
	  ACCOUNTS_SORTABLE_COLUMN: 'bb.accountsOverview.defaultSortableColumn',
	  ACCOUNTS_DISSMISS_MESSAGE_TIME: 'bb.accountsOverview.dismissMessageTime',
	  PRODUCT_KIND_NAME: 'bb.accountsOverview.productKindName',
	  PRODUCT_SUMMARY_DISABLE_SESSION_STORAGE: 'bb.productSummary.disableSessionStorage',
	  CHARTS_ENABLED: 'bb.accountsOverview.chartsEnabled',
	  ACCOUNTS_BUSINESS_FUNCTION: 'bb.accountsOverview.businessFunction',
	  ACCOUNTS_RESOURCE_NAME: 'bb.accountsOverview.resourceName',
	  ACCOUNTS_PRIVILEGE_TYPE: 'bb.accountsOverview.privilegeType',
	  ACCOUNTS_SORTABLE_DIRECTION: 'bb.accountsOverview.defaultSortableDirection',
	  ACCOUNTS_SELECTOR_SELECT_ALL: 'bb.accountsOverview.accountsSelectorAll'
	};
	
	/**
	 * bbStorage keys enum
	 * @type {object}
	 */
	var BbStorageKeys = exports.BbStorageKeys = {
	  PRODUCT_SELECTED: 'bb.product.selected',
	  PRODUCTS_SELECTED: 'bb.products.selected',
	  PRODUCT_SUMMARY: 'bb.product.summary.data'
	};
	
	/**
	 * Supported account types
	 * @type {array<string>}
	 */
	var SupportedProductKinds = exports.SupportedProductKinds = ['Aggregated Balance', 'Current Account', 'Savings Account', 'Term Deposit', 'Loan', 'Credit Card', 'Debit Card', 'Investment Account'];
	
	/**
	 * Bad request errors enum
	 * @type {object}
	 */
	var BadRequestError = exports.BadRequestError = {
	  ERR_ACCOUNT_ARRANGEMENT_NOT_EXIST: 'account.api.arrangement.notExist',
	  ERR_ACCOUNT_ARRANGEMENT_NO_PRIVILEGES: 'account.api.arrangementNoPrivilege',
	  ERR_ACCOUNT_ARRANGEMENT_NOT_ENTITLED_TO_SEE: 'account.api.arrangement.notEntitledToSee',
	
	  ERR_ACCOUNT_PRODUCT_NOT_EXIST: 'account.api.product.notExist',
	  ERR_ACCOUNT_PRODUCT_UPDATE_SIZE: 'api.Size.alias',
	
	  ERR_ARRANGEMENT_NOT_FOUND: 'arrangements.api.notFound.arrangement',
	  ERR_ARRANGEMENT_NOT_EXIST_PRODUCT_KIND_NAME: 'arrangements.api.notExist.productKindName',
	
	  ERR_PRODUCT_SUMMARY_LEGAL_ENTITY_NOT_ALLOWED: 'product.summary.api.legalEntity.notAllowed',
	  ERR_PRODUCT_SUMMARY_REQUEST_SIZE: 'product.summary.api.size',
	  ERR_PRODUCT_SUMMARY_REQUEST_FROM: 'product.summary.api.from',
	  ERR_PRODUCT_SUMMARY_REQUEST_ORDER_BY: 'product.summary.api.orderBy',
	  ERR_PRODUCT_SUMMARY_REQUEST_DIRECTION: 'product.summary.api.direction',
	
	  ERR_BALANCE_HISTORY_ARRANGEMENT_IDS_ARE_EMPTY: 'account.api.arrangement.emptyArrangementsIds',
	  ERR_BALANCE_HISTORY_INVALID_COMBO_OF_RANGE_PERIOD: 'account.api.arrangement.invalidComboOfPeriodRange',
	  ERR_BALANCE_HISTORY_INVALID_DATE_FROM_TO_RANGE_PERIOD: 'account.api.arrangement.fromToDateBadCombo',
	  ERR_BALANCE_HISTORY_INVALID_FROM_DATE: 'account.api.arrangement.invalidFromDate'
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=model-bb-product-summary-ng.js.map