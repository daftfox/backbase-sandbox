(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib-bb-model-errors"), require("data-bb-trading-http-ng"), require("lib-bb-storage-ng"), require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("model-fx-trading-ng", ["lib-bb-model-errors", "data-bb-trading-http-ng", "lib-bb-storage-ng", "vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["model-fx-trading-ng"] = factory(require("lib-bb-model-errors"), require("data-bb-trading-http-ng"), require("lib-bb-storage-ng"), require("vendor-bb-angular"));
	else
		root["model-fx-trading-ng"] = factory(root["lib-bb-model-errors"], root["data-bb-trading-http-ng"], root["lib-bb-storage-ng"], root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_27__) {
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
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
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
	exports.modelFxTradingKey = undefined;
	
	var _dataBbTradingHttpNg = __webpack_require__(25);
	
	var _dataBbTradingHttpNg2 = _interopRequireDefault(_dataBbTradingHttpNg);
	
	var _libBbStorageNg = __webpack_require__(26);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _vendorBbAngular = __webpack_require__(27);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _tradingFx = __webpack_require__(28);
	
	var _tradingFx2 = _interopRequireDefault(_tradingFx);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module model-fx-trading-ng
	 *
	 * @description
	 * model-fx-trading-ng
	 *
	 * @example
	 * import modeltradingfxModuleKey, { modeltradingfxKey }
	 * from 'model-fx-trading-ng';
	 *
	 * angular
	 *   .module('ExampleModule', [
	 *     modeltradingfxModuleKey,
	 *   ])
	 *   .factory('someFactory', [
	 *     modeltradingfxKey,
	 *     // into
	 *     function someFactory(tradingfxModel) {
	 *       // ...
	 *     },
	 *   ]);
	 */
	var moduleKey = 'model-fx-trading-ng';
	var modelFxTradingKey = exports.modelFxTradingKey = moduleKey + ':model';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_dataBbTradingHttpNg2.default, _libBbStorageNg2.default]).factory(modelFxTradingKey, [_dataBbTradingHttpNg.tradingDataKey, _libBbStorageNg.bbStorageServiceKey,
	/* into */
	_tradingFx2.default]).name;
	
	/**
	* CurrencyPair type definition
	* @typedef {Object} CurrencyPair
	* @property {string}        pairKey          - Currency pair id
	*/
	
	/**
	* CurrencyRate type definition
	* @typedef {Object} CurrencyRate
	* @property {string}        pairKey          - Currency pair id
	* @property {number}        price            - Last executed price for the currency pair
	* @property {number}        change           - Today's price change
	* @property {number}        changePct        - Today's price change in percent
	* @property {number}        bid              - Bid price available for the currency pair
	* @property {number}        ask              - Ask price available for the currency pair
	*/

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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = tradingFxModel;
	
	var _libBbModelErrors = __webpack_require__(12);
	
	var _constants = __webpack_require__(29);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Model factory for model-fx-trading-ng
	 *
	 * @inner
	 * @type {function}
	 *
	 * @return {Object}
	 */
	/* eslint-disable no-param-reassign */
	function tradingFxModel(tradingFxData, bbStorage) {
	  /**
	   * @name tradingFxModel#loadCurrencyPairs
	   * @type {function}
	   *
	   * @description
	   * Load trading currency pairs.
	   * @param {?object} params Optional configuration object.
	   * @returns {Promise.<CurrencyPairs, ModelError>}
	   * A Promise resolving to object with CurrencyPairs.
	   */
	  function loadCurrencyPairs(params) {
	    return tradingFxData.getTradingCurrencypair(params).then(function (response) {
	      return {
	        totalCount: parseInt(response.headers('x-total-count'), 10) || 0,
	        data: response.data
	      };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * @name tradingFxModel#loadCurrencyPairDetails
	   * @type {function}
	   *
	   * @description
	   * Load specific currency pair
	   * @param {string} currencypairId ID of currency pair to load
	   * @returns {Promise.<CurrencyPair, ModelError>}
	   * A Promise resolving to object with currency pair
	   */
	  function loadCurrencyPairDetails(currencypairId) {
	    return tradingFxData.getTradingCurrencypair(currencypairId).then(function (response) {
	      return {
	        data: response.data
	      };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * @name tradingFxModel#setCurrencyPairIdSelected
	   * @type {function}
	   *
	   * @description
	   * Set current selected currency pair id
	   *
	   * @param {string} currencyPairId currency pair id to set selected
	   */
	  var setCurrencyPairIdSelected = function setCurrencyPairIdSelected(currencyPairId) {
	    if (currencyPairId) {
	      bbStorage.setItem(_constants2.default.CURRENCY_PAIR_ID_SELECTED, currencyPairId);
	    } else {
	      bbStorage.removeItem(_constants2.default.CURRENCY_PAIR_ID_SELECTED);
	    }
	  };
	
	  /**
	   * @name tradingFxModel#setPageNumberSelected
	   * @type {function}
	   *
	   * @description
	   * Set current selected page number
	   *
	   * @param {string} page number of page to set selected
	   */
	  var setPageNumberSelected = function setPageNumberSelected(page) {
	    if (page) {
	      bbStorage.setItem(_constants2.default.PAGE_NUMBER_SELECTED, page);
	    } else {
	      bbStorage.removeItem(_constants2.default.PAGE_NUMBER_SELECTED);
	    }
	  };
	
	  /**
	   * @public
	   * @name tradingFxModel#getSelectedCurrencyPairId
	   * @type {function}
	   *
	   * @description
	   * Get current selected currency pair id.
	   *
	   * @returns {Promise.<string, ModelError>} A Promise with currency pair id.
	   */
	  var getSelectedCurrencyPairId = function getSelectedCurrencyPairId() {
	    return bbStorage.getItem(_constants2.default.CURRENCY_PAIR_ID_SELECTED);
	  };
	
	  /**
	   * @public
	   * @name tradingFxModel#getPageNumberSelected
	   * @type {function}
	   *
	   * @description
	   * Get selected page number.
	   *
	   * @returns {Promise.<string, ModelError>} A Promise with page number.
	   */
	  var getPageNumberSelected = function getPageNumberSelected() {
	    return bbStorage.getItem(_constants2.default.PAGE_NUMBER_SELECTED);
	  };
	
	  /**
	   * @name tradingFxModel#loadCurrencyRates
	   * @type {function}
	   *
	   * @description
	   * Load trading currency rates.
	   * @param {?object} params Optional configuration object.
	   * @returns {Promise.<CurrencyRates, ModelError>}
	   * A Promise resolving to object with CurrencyRates.
	   */
	  function loadCurrencyRates(params) {
	    return tradingFxData.getTradingCurrencyrate(params).then(function (response) {
	      return {
	        data: response.data
	      };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * @name tradingFxModel
	   * @type {Object}
	   */
	  return {
	    loadCurrencyPairs: loadCurrencyPairs,
	    loadCurrencyPairDetails: loadCurrencyPairDetails,
	    loadCurrencyRates: loadCurrencyRates,
	    setCurrencyPairIdSelected: setCurrencyPairIdSelected,
	    getSelectedCurrencyPairId: getSelectedCurrencyPairId,
	    setPageNumberSelected: setPageNumberSelected,
	    getPageNumberSelected: getPageNumberSelected
	  };
	}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * bbStorage keys enum
	 * @type {object}
	 */
	var BbStorageKeys = {
	  CURRENCY_PAIR_ID_SELECTED: 'bb.currencyPairId.selected',
	  CURRENCY_PAIR_SELECTED: 'bb.currencyPair.selected',
	  PAGE_NUMBER_SELECTED: 'bb.pageNumber.selected'
	};
	
	exports.default = BbStorageKeys;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=model-fx-trading-ng.js.map