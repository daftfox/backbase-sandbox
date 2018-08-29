(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("data-bb-categories-management-http-ng"), require("lib-bb-storage-ng"), require("lib-bb-model-errors"));
	else if(typeof define === 'function' && define.amd)
		define("model-bb-transaction-categories-ng", ["vendor-bb-angular", "data-bb-categories-management-http-ng", "lib-bb-storage-ng", "lib-bb-model-errors"], factory);
	else if(typeof exports === 'object')
		exports["model-bb-transaction-categories-ng"] = factory(require("vendor-bb-angular"), require("data-bb-categories-management-http-ng"), require("lib-bb-storage-ng"), require("lib-bb-model-errors"));
	else
		root["model-bb-transaction-categories-ng"] = factory(root["vendor-bb-angular"], root["data-bb-categories-management-http-ng"], root["lib-bb-storage-ng"], root["lib-bb-model-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_16__) {
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

	module.exports = __webpack_require__(11);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modelTransactionCategoriesKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(12);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbCategoriesManagementHttpNg = __webpack_require__(13);
	
	var _dataBbCategoriesManagementHttpNg2 = _interopRequireDefault(_dataBbCategoriesManagementHttpNg);
	
	var _libBbStorageNg = __webpack_require__(14);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _transactionCategories = __webpack_require__(15);
	
	var _transactionCategories2 = _interopRequireDefault(_transactionCategories);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module model-bb-transaction-categories-ng
	 *
	 * @description
	 * Model for widget-bb-transaction-categories-ng
	 *
	 * @example
	 * import modelTransactionCategoriesModuleKey, {
	 *  modelTransactionCategoriesKey
	 * } from 'model-bb-transaction-categories-ng';
	 *
	 * angular
	 *   .module('ExampleModule', [
	 *     modelTransactionCategoriesModuleKey,
	 *   ])
	 *   .factory('someFactory', [
	 *     modelTransactionCategoriesKey,
	 *     // into
	 *     function someFactory(transactionCategoriesModel) {
	 *       // ...
	 *     },
	 *   ]);
	 */
	var moduleKey = 'model-bb-transaction-categories-ng';
	
	var modelTransactionCategoriesKey = exports.modelTransactionCategoriesKey = moduleKey + ':model';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_dataBbCategoriesManagementHttpNg2.default, _libBbStorageNg2.default]).factory(modelTransactionCategoriesKey, [_dataBbCategoriesManagementHttpNg.categoriesManagementDataKey, _libBbStorageNg.bbStorageServiceKey,
	/* into */
	_transactionCategories2.default]).name;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = transactionCategoriesModel;
	
	var _libBbModelErrors = __webpack_require__(16);
	
	var _constants = __webpack_require__(17);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Model factory for model-bb-transaction-categories-ng
	 *
	 * @inner
	 * @type {function}
	 * @param {Object} Promise An ES2015 compatible `Promise` object.
	 *
	 * @return {Object}
	 */
	function transactionCategoriesModel(transactionCategoriesData, bbStorage) {
	  /**
	   * @name transactionCategoriesModel#getCategoriesLevel
	   * @type {function}
	   *
	   * @description
	   * Get current categories' level
	   *
	   * @returns {Promise.<String>} A Promise with current categories' level.
	   */
	  var getCategoriesLevel = function getCategoriesLevel() {
	    return bbStorage.getItem(_constants2.default.TRANSACTION_CATEGORIES_LEVEL);
	  };
	
	  /**
	   * @name transactionCategoriesModel#loadCategories
	   * @type {function}
	   *
	   * @description
	   * Load the availabe categories.
	   *
	   * @param {Object} params Get request parameters
	   *
	   * @returns {Promise.<Object>} A Promise with all of the availabe categories.
	   */
	  var loadCategories = function loadCategories(params) {
	    return transactionCategoriesData.getCategories(params).then(function (data) {
	      bbStorage.setItem(_constants2.default.TRANSACTION_CATEGORIES_LIST, data);
	      bbStorage.setItem(_constants2.default.TRANSACTION_CATEGORIES_LEVEL, params.level);
	      return data;
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  };
	
	  /**
	   * @name transactionCategoriesModel#isLevelChanged
	   * @type {function}
	   *
	   * @inner
	   * @description
	   * Check if categorie's preference level is changed
	   *
	   * @level {string} level from preference
	   *
	   * @returns {Promise.<Boolean>} it returns a promis with true if user changed level preference
	   */
	  var isLevelChanged = function isLevelChanged(level) {
	    return getCategoriesLevel().then(function (currentLevel) {
	      return currentLevel !== level;
	    });
	  };
	
	  /**
	   * @name transactionCategoriesModel#getCachedCategories
	   * @type {function}
	   *
	   * @inner
	   * @description
	   * get cached categories
	   *
	   * @returns {Promise.<Object>} it returns promise with data object
	   */
	  var getCachedCategories = function getCachedCategories() {
	    return bbStorage.getItem(_constants2.default.TRANSACTION_CATEGORIES_LIST);
	  };
	
	  /**
	   * @name transactionCategoriesModel#getCategories
	   * @type {function}
	   *
	   * @description
	   * Load the availabe categories from server or storage.
	   *
	   * @param {?Object} params Get request parameters
	   *
	   * @returns {Promise.<Object>} A Promise with all of the availabe categories.
	   */
	  var getCategories = function getCategories() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    return isLevelChanged(params.level).then(function (levelChanged) {
	      return levelChanged ? null : getCachedCategories();
	    }).then(function (data) {
	      return data || loadCategories(params);
	    });
	  };
	
	  /**
	   * @name transactionCategoriesModel
	   * @type {Object}
	   */
	  return {
	    getCategories: getCategories
	  };
	}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name bbStorageKeys
	 * @description
	 * bbStorage keys enum
	 * @type {object}
	 */
	var bbStorageKeys = {
	  TRANSACTION_CATEGORIES_LIST: 'bb.transaction.categories.list',
	  TRANSACTION_CATEGORIES_LEVEL: 'bb.transaction.categories.level'
	};
	
	exports.default = bbStorageKeys;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=model-bb-transaction-categories-ng.js.map