(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("data-bb-account-statements-http-ng"), require("data-bb-product-summary-http-ng"), require("lib-bb-storage-ng"), require("lib-bb-model-errors"));
	else if(typeof define === 'function' && define.amd)
		define("model-bb-account-statements-ng", ["vendor-bb-angular", "data-bb-account-statements-http-ng", "data-bb-product-summary-http-ng", "lib-bb-storage-ng", "lib-bb-model-errors"], factory);
	else if(typeof exports === 'object')
		exports["model-bb-account-statements-ng"] = factory(require("vendor-bb-angular"), require("data-bb-account-statements-http-ng"), require("data-bb-product-summary-http-ng"), require("lib-bb-storage-ng"), require("lib-bb-model-errors"));
	else
		root["model-bb-account-statements-ng"] = factory(root["vendor-bb-angular"], root["data-bb-account-statements-http-ng"], root["data-bb-product-summary-http-ng"], root["lib-bb-storage-ng"], root["lib-bb-model-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_30__) {
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

	module.exports = __webpack_require__(24);

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
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modelAccountStatementsKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(25);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbAccountStatementsHttpNg = __webpack_require__(26);
	
	var _dataBbAccountStatementsHttpNg2 = _interopRequireDefault(_dataBbAccountStatementsHttpNg);
	
	var _dataBbProductSummaryHttpNg = __webpack_require__(27);
	
	var _dataBbProductSummaryHttpNg2 = _interopRequireDefault(_dataBbProductSummaryHttpNg);
	
	var _libBbStorageNg = __webpack_require__(28);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _accountStatements = __webpack_require__(29);
	
	var _accountStatements2 = _interopRequireDefault(_accountStatements);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'model-bb-account-statements-ng'; /**
	                                                   * @module model-bb-account-statements-ng
	                                                   *
	                                                   * @description
	                                                   * Model for widget-bb-account-statements-ng
	                                                   *
	                                                   * @example
	                                                   * import modelAccountStatementsModuleKey, {
	                                                   *   modelAccountStatementsKey
	                                                   * } from 'model-bb-account-statements-ng';
	                                                   *
	                                                   * angular
	                                                   *   .module('ExampleModule', [
	                                                   *     modelAccountStatementsModuleKey,
	                                                   *   ])
	                                                   *   .factory('someFactory', [
	                                                   *     modelAccountStatementsKey,
	                                                   *     // into
	                                                   *     function someFactory(accountStatementsModel) {
	                                                   *       // ...
	                                                   *     },
	                                                   *   ]);
	                                                   */
	var modelAccountStatementsKey = exports.modelAccountStatementsKey = moduleKey + ':model';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_dataBbAccountStatementsHttpNg2.default, _dataBbProductSummaryHttpNg2.default, _libBbStorageNg2.default]).factory(modelAccountStatementsKey, [_dataBbAccountStatementsHttpNg.accountStatementsDataKey, _dataBbProductSummaryHttpNg.productSummaryDataKey, _libBbStorageNg.bbStorageServiceKey,
	/* into */
	_accountStatements2.default]).name;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = AccountStatementsModel;
	
	var _libBbModelErrors = __webpack_require__(30);
	
	var _constants = __webpack_require__(31);
	
	/**
	 * Model factory for model-bb-account-statements-ng
	 *
	 * @inner
	 * @type {function}
	 * @param {object} accountStatementsData
	 * @param {object} productSummaryData
	 * @param {Object} bbStorage
	 *
	 * @return {Object}
	 */
	function AccountStatementsModel(accountStatementsData, productSummaryData, bbStorage) {
	  /**
	   * @name AccountStatementsModel#loadAccounts
	   * @type {function}
	   *
	   * @description
	   * Retrieves list of accounts.
	   *
	   * @param {?object} params Optional configuration object.
	   * @returns {Promise.<Accounts, ModelError>}
	   * A Promise resolving to object with List of Accounts.
	   */
	  var loadAccounts = function loadAccounts() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    return productSummaryData.getProductsummaryArrangements(params).then(function (response) {
	      return {
	        data: response.data,
	        totalCount: parseInt(response.headers('x-total-count'), 10) || 0
	      };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  };
	
	  /**
	   * @name AccountStatementsModel#getSelectedAccountId
	   * @type {function}
	   *
	   * @description
	   * Retrieves selected account id.
	   *
	   * @returns {Promise.<String, ModelError>}
	   * A Promise resolving selected account ID.
	   */
	  var getSelectedAccountId = function getSelectedAccountId() {
	    return bbStorage.getItem(_constants.BbStorageKeys.ACCOUNT_SELECTED);
	  };
	
	  /**
	   * @name AccountStatementsModel#load
	   * @type {function}
	   *
	   * @description
	   * Gets the list of account statements.
	   *
	   * @param {?object} params Optional configuration object.
	   * @returns {Promise.<AccountStatements, ModelError>}
	   * A Promise resolving to object with the list of account statements.
	   */
	  var load = function load() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    return accountStatementsData.getAccountStatements(params).then(function (response) {
	      return {
	        data: response.data,
	        totalCount: parseInt(response.headers('x-total-count'), 10) || 0
	      };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  };
	
	  /**
	   * @name AccountStatementsModel#getStatementUrl
	   * @type {function}
	   *
	   * @description
	   * Retrieves the account statement download record url.
	   *
	   * @param {string} uid The uid of the statement to get the download record url
	   * @returns {String}
	   */
	  var getStatementUrl = function getStatementUrl(uid) {
	    return accountStatementsData.getAccountStatementsDownloadRecordUrl(uid);
	  };
	
	  /**
	   * @name AccountStatementsModel#getCategories
	   * @type {function}
	   *
	   * @description
	   * get all statements categories.
	   *
	   * @returns {Promise.<Categories, ModelError>}
	   */
	  var getCategories = function getCategories() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    return accountStatementsData.getAccountStatementsCategories(params).then(function (response) {
	      return {
	        data: response.data
	      };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  };
	
	  /**
	   * @name AccountStatementsModel
	   * @type {Object}
	   *
	   * @description
	   * Model factory for widget-bb-account-statements-ng
	   */
	  return {
	    load: load,
	    loadAccounts: loadAccounts,
	    getCategories: getCategories,
	    getSelectedAccountId: getSelectedAccountId,
	    getStatementUrl: getStatementUrl
	  };
	}
	
	/**
	 * @typedef {Object} AccountStatements
	 * @property {module:data-bb-account-statements-ng.AccountStatementsData.AccountStatement[]} data
	 *   array of Account statements
	 * @property {?Number} totalCount total count of account statements if needed
	 */
	
	/**
	 * @typedef {Object} Accounts
	 * @property {module:data-bb-product-summary-ng.ProductSummaryData.ProductsummaryItem[]} data
	 *   array of Accountss
	 * @property {?Number} totalCount total count of account statements if needed
	 */

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * bbStorage keys enum
	 * @type {object}
	 */
	// eslint-disable-next-line import/prefer-default-export
	var BbStorageKeys = exports.BbStorageKeys = {
	  PRODUCT_SUMMARY: 'bb.product.summary.data',
	  ACCOUNT_SELECTED: 'bb.product.selected'
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=model-bb-account-statements-ng.js.map