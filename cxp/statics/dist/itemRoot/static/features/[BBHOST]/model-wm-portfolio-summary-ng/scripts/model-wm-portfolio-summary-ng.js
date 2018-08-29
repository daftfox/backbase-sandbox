(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib-bb-model-errors"), require("data-bb-portfolio-summary-http-ng"), require("lib-bb-storage-ng"), require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("model-wm-portfolio-summary-ng", ["lib-bb-model-errors", "data-bb-portfolio-summary-http-ng", "lib-bb-storage-ng", "vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["model-wm-portfolio-summary-ng"] = factory(require("lib-bb-model-errors"), require("data-bb-portfolio-summary-http-ng"), require("lib-bb-storage-ng"), require("vendor-bb-angular"));
	else
		root["model-wm-portfolio-summary-ng"] = factory(root["lib-bb-model-errors"], root["data-bb-portfolio-summary-http-ng"], root["lib-bb-storage-ng"], root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_91__, __WEBPACK_EXTERNAL_MODULE_92__, __WEBPACK_EXTERNAL_MODULE_93__) {
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

	module.exports = __webpack_require__(90);

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modelPortfolioSummaryKey = undefined;
	
	var _dataBbPortfolioSummaryHttpNg = __webpack_require__(91);
	
	var _dataBbPortfolioSummaryHttpNg2 = _interopRequireDefault(_dataBbPortfolioSummaryHttpNg);
	
	var _libBbStorageNg = __webpack_require__(92);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _vendorBbAngular = __webpack_require__(93);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _portfolioSummary = __webpack_require__(94);
	
	var _portfolioSummary2 = _interopRequireDefault(_portfolioSummary);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module model-wm-portfolio-summary-ng
	 *
	 * @description
	 * Model-wm-portfolio-summary-ng
	 *
	 * @example
	 * import modelPortfolioSummaryModuleKey, { modelPortfolioSummaryKey }
	 * from 'model-wm-portfolio-summary-ng';
	 *
	 * angular
	 *   .module('ExampleModule', [
	 *     modelPortfolioSummaryModuleKey,
	 *   ])
	 *   .factory('someFactory', [
	 *     modelPortfolioSummaryKey,
	 *     // into
	 *     function someFactory(portfolioSummaryModel) {
	 *       // ...
	 *     },
	 *   ]);
	 */
	var moduleKey = 'model-wm-portfolio-summary-ng';
	var modelPortfolioSummaryKey = exports.modelPortfolioSummaryKey = moduleKey + ':model';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_dataBbPortfolioSummaryHttpNg2.default, _libBbStorageNg2.default]).factory(modelPortfolioSummaryKey, [_dataBbPortfolioSummaryHttpNg.portfolioSummaryDataKey, _libBbStorageNg.bbStorageServiceKey,
	/* into */
	_portfolioSummary2.default]).name;
	
	/**
	* Portfolio type definition
	* @typedef {Object} Portfolio
	* @property {string}        IBAN               - International Bank Account Number
	* @property {string}        clientName         - Client name
	* @property {string}        alias              - A portfolio name manually set by the client
	* @property {assetClass[]}  assetClasses       - Asset classes list for portfolio
	* @property {object}        valuation          - Total cost of all assets in the portfolio
	* @property {object}        inCashTotal        - Incoming cash for the period of time
	* @property {object}        outCashTotal       - Outgoing cash for the period of time
	* @property {number}        performanceMTD     - Portfolio performance for month
	* @property {number}        performanceMTDpct  - Portfolio performance for month in percents
	* @property {number}        performanceYTD     - Portfolio performance amount for year
	* @property {number}        performanceYTDpct  - Portfolio performance amount for year in percents
	* @property {string}        riskClass          - Risk of portfolio investement strategy
	* @property {manager[]}     managers           - Managers of portfolio
	* @property {attorney[]}    attorneys          - Attorneys of portfolio
	* @property {BBSeries[]}    dataseries         - data in format suitable for chart UI components
	*/
	
	/**
	* BBSeries data object used to draw charts
	* @typedef {object} BBSeries
	* @property {string[]} labels Array chart slices labels
	* @property {Dataset[]} datasets Array of chart datasets
	*/
	
	/**
	* Dataset object for chart data
	* @typedef {object} Dataset
	* @property {number[]} data Array of data points for chart slices
	*/
	
	/**
	 * Dataset object for chart data
	 * @typedef {object} AssetClass
	 * @property {string} name name of asset class
	 * @property {number} valuePct value that represents percentage of asset
	 */
	
	/**
	* Dataset object for chart data
	* @typedef {object} attorney
	* @property {string} id id of a portfolio manager
	* @property {string} name name of a portfolio manager
	*/
	
	/**
	* Dataset object for chart data
	* @typedef {object} manager
	* @property {string} id id of a portfolio manager
	* @property {string} name name of a portfolio manager
	*/

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_91__;

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_92__;

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_93__;

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = portfolioSummaryModel;
	
	var _libBbModelErrors = __webpack_require__(8);
	
	var _constants = __webpack_require__(95);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Model factory for model-wm-portfolio-summary-ng
	 *
	 * @inner
	 * @type {function}
	 *
	 * @return {Object}
	 */
	/* eslint-disable no-param-reassign */
	function portfolioSummaryModel(portfoliosData, bbStorage) {
	  /**
	   * @name portfolioSummaryModel#load
	   * @type {function}
	   *
	   * @description
	   * Load portfolios.
	   * @param {?object} params Optional configuration object.
	   * @returns {Promise.<Portfolios, ModelError>}
	   * A Promise resolving to object with Portfolios.
	   */
	  function load(params) {
	    return portfoliosData.getPortfoliosummary(params).then(function (response) {
	      return {
	        totalCount: parseInt(response.headers('x-total-count'), 10) || 0,
	        data: response.data
	      };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * @name portfolioSummaryModel#loadPortfoliosOrder
	   * @type {function}
	   *
	   * @description
	   * Load portfolios order.
	   * @returns {Promise.<Array<string>, ModelError>}
	   * A Promise resolving to array with Portfolios IBANs.
	   */
	  function loadPortfoliosOrder() {
	    return portfoliosData.getPortfoliosummaryOrder().catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * @name portfolioSummaryModel#savePortfoliosOrder
	   * @type {function}
	   *
	   * @description
	   * Load portfolios order.
	   * @param {Array.<string>} order Array of portfolios IBANs
	   * @returns {Promise.<Array<string>, ModelError>}
	   * A Promise resolving to array with Portfolios IBANs.
	   */
	  function savePortfoliosOrder(order) {
	    return portfoliosData.postPortfoliosummaryClientOrderRecord({ portfolios: order }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * @name portfolioSummaryModel#savePortfolioAlias
	   * @type {function}
	   *
	   * @description
	   * Save portfolio with new alias name.
	   * @param {string} IBAN Changed portfolio IBAN
	   * @param {string} alias New alias name
	   */
	  function savePortfolioAlias(IBAN, alias) {
	    return portfoliosData.postPortfoliosummaryAliasRecord({ IBAN: IBAN, alias: alias }).then(function (response) {
	      return {
	        data: response.data
	      };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * @name portfolioSummaryModel#loadPortfolioSummaryRecord
	   * @type {function}
	   *
	   * @description
	   * Load specific portfolio
	   * @param {string} portfolioId ID of portfolio to load
	   * @returns {Promise.<Portfolio, ModelError>}
	   * A Promise resolving to object with Portfolio
	   */
	  function loadPortfolioSummaryRecord(portfolioId) {
	    return portfoliosData.getPortfoliosummaryRecord(portfolioId).then(function (response) {
	      return {
	        data: response.data
	      };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * @name portfolioSummaryModel#loadPortfolioPositions
	   * @type {function}
	   *
	   * @description
	   * Load portfolio positions.
	   * @param {string} portfolioId ID of portfolio to load
	   * @returns {Promise.<Positions, ModelError>}
	   * A Promise resolving to object with Portfolio positions.
	   */
	  function loadPortfolioPositions(portfolioId) {
	    return portfoliosData.getPortfoliosummaryPositions(portfolioId).then(function (response) {
	      return {
	        data: response.data
	      };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * @public
	   * @name portfolioSummaryModel#getSelectedPortfolioId
	   * @type {function}
	   *
	   * @description
	   * Get current selected portfolio id.
	   *
	   * @returns {Promise.<string, ModelError>} A Promise with portfolio id.
	   */
	  var getSelectedPortfolioId = function getSelectedPortfolioId() {
	    return bbStorage.getItem(_constants2.default.PORTFOLIO_ID_SELECTED);
	  };
	
	  /**
	   * @public
	   * @name portfolioSummaryModel#getSelectedCustomList
	   * @type {function}
	   *
	   * @description
	   * Get current selected custom list
	   *
	   * @returns {Promise.<string, ModelError>} A Promise with custom list
	   */
	  var getCustomListSelected = function getCustomListSelected() {
	    return bbStorage.getItem(_constants2.default.CUSTOM_LIST_SELECTED);
	  };
	
	  /**
	   * @name portfolioSummaryModel#loadAllocationClasses
	   * @type {function}
	   *
	   * @description
	   * Load allocation classes.
	   * @param {string} portfolioId ID of portfolio to load
	   * @returns {Promise.<Allocations, ModelError>}
	   * A Promise resolving to object with Allocation classes.
	   */
	  function loadAllocationClasses(portfolioId) {
	    return portfoliosData.getPortfoliosummaryAllocationsAsset(portfolioId).then(function (response) {
	      return { data: response.data };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * @name portfolioSummaryModel#loadAllocationCurrencies
	   * @type {function}
	   *
	   * @description
	   * Load allocation currencies.
	   * @param {string} portfolioId ID of portfolio to load
	   * @returns {Promise.<Allocations, ModelError>}
	   * A Promise resolving to object with Allocation currencies.
	   */
	  function loadAllocationCurrencies(portfolioId) {
	    return portfoliosData.getPortfoliosummaryAllocationsCurrency(portfolioId).then(function (response) {
	      return { data: response.data };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * @name portfolioSummaryModel#loadTransactions
	   * @type {function}
	   *
	   * @description
	   * Load portfolio transactions.
	   * @param {number} portfolioId ID of portfolio to load
	   * @param {string} params Filter params
	   * @returns {Promise.<PortfolioTransactions, ModelError>}
	   * A Promise resolving to object with Portfolio transactions.
	   */
	  function loadTransactions(portfolioId, params) {
	    return portfoliosData.getPortfoliosummaryTransactions(portfolioId, params).then(function (response) {
	      return { data: response.data };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * @name portfolioSummaryModel#loadTransactionDetails
	   * @type {function}
	   *
	   * @description
	   * Load portfolio transaction detailed data.
	   * @param {number} portfolioId ID of portfolio to load
	   * @param {number} transactionId ID of transaction to load
	   * @param {string} params Filter params
	   * @returns {Promise.<PortfolioTransaction, ModelError>}
	   * A Promise resolving to object with Portfolio transaction.
	   */
	  function loadTransactionDetails(portfolioId, transactionId, params) {
	    return portfoliosData.getPortfoliosummaryTransactionsRecord(portfolioId, transactionId, params).then(function (response) {
	      return { data: response.data };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * @name portfolioSummaryModel#loadTransactionsFilterOptions
	   * @type {function}
	   *
	   * @description
	   * Load filter options for portfolio transactions` filter.
	   *
	   * @param {number} portfolioId ID to load data for
	   * @returns {Promise.<PortfolioTransactionsFilterOptions, ModelError>}
	   * A Promise resolving to object with Portfolio transactions` filter options.
	   */
	  function loadTransactionsFilterOptions(portfolioId) {
	    return portfoliosData.getPortfoliosummaryTransactionFilterOptions(portfolioId).then(function (response) {
	      return { data: response.data };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * @name portfolioSummaryModel#loadPerformanceValuation
	   * @type {function}
	   *
	   * @description
	   * Load performance valuation data.
	   * @param {string} portfolioId ID of portfolio to load
	   * @param {granularity} Granularity of data to load
	   * @param {fromDate} Date to load data from
	   * @param {toDate} Date to load data to
	   * @returns {Promise.<ValuationData, ModelError>}
	   * A Promise resolving to object with Performance valuation data.
	   */
	  function loadPerformanceValuation(portfolioId, granularity, fromDate, toDate) {
	    return portfoliosData.getPortfoliosummaryValuationChart(portfolioId, {
	      granularity: granularity,
	      fromDate: fromDate,
	      toDate: toDate
	    }).then(function (response) {
	      return { data: response.data };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * @name portfolioSummaryModel#loadPerformanceChart
	   * @type {function}
	   *
	   * @description
	   * Load data for portfolio performance chart.
	   *
	   * @param {number} portfolioId ID to load data for
	   * @returns {Promise.<PortfolioPerformance, ModelError>}
	   * A Promise resolving to object with Portfolio performance chart data.
	   */
	  function loadPerformanceChart(portfolioId, fromDate, toDate) {
	    return portfoliosData.getPortfoliosummaryPerformanceChart(portfolioId, { fromDate: fromDate, toDate: toDate }).then(function (response) {
	      return { data: response.data };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * @name portfolioSummaryModel#setPortfolioIdSelected
	   * @type {function}
	   *
	   * @description
	   * Set current selected portfolio id
	   *
	   * @param {string} portfolioId portfolio id to set selected
	   */
	  var setPortfolioIdSelected = function setPortfolioIdSelected(portfolioId) {
	    if (portfolioId) {
	      bbStorage.setItem(_constants2.default.PORTFOLIO_ID_SELECTED, portfolioId);
	    } else {
	      bbStorage.removeItem(_constants2.default.PORTFOLIO_ID_SELECTED);
	    }
	  };
	
	  /**
	   * @name portfolioSummaryModel#setCustomListSelected
	   * @type {function}
	   *
	   * @description
	   * Set current selected custom list
	   *
	   * @param {string} customList custom list to set selected
	   */
	  var setCustomListSelected = function setCustomListSelected(customList) {
	    if (customList) {
	      bbStorage.setItem(_constants2.default.CUSTOM_LIST_SELECTED, customList);
	    }
	  };
	
	  /**
	   * @name portfolioSummaryModel#loadCustomList
	   * @type {function}
	   *
	   * @description
	   * Load custom lists.
	   * @returns {Promise.<CustomList, ModelError>}
	   * A Promise resolving to object with Custom lists.
	   */
	  function loadCustomList() {
	    return portfoliosData.getPortfoliosummaryCustomList().then(function (response) {
	      return { data: response.data };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * @name portfolioSummaryModel#createCustomList
	   * @type {function}
	   *
	   * @description
	   * Create custom list.
	   * @param {object} requestData request body data
	   * @returns {Promise.<CustomList, ModelError>}
	   * A Promise resolving to object with Custom list.
	   */
	  function createCustomList(requestData) {
	    return portfoliosData.postPortfoliosummaryCustomListRecord(requestData).then(function (response) {
	      return { data: response.data };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * @name portfolioSummaryModel#setPortfoliosToCustomList
	   * @type {function}
	   *
	   * @description
	   * Add portfolios to custom list
	   *
	   * @param {string} uuid Identifier of custom list
	   * @param {array} portfolios List of portfolio ids
	   *
	   * @returns {Promise.<string>}
	   * Uuid of custom list
	   */
	  function setPortfoliosToCustomList(uuid, portfolios) {
	    return portfoliosData.postPortfoliosummaryCustomListPortfolioRecord(uuid, { portfolios: portfolios }).then(function (response) {
	      return { data: response.data };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * @name portfolioSummaryModel#deleteCustomList
	   * @type {function}
	   *
	   * @description
	   * Delete custom list.
	   * @param {string} uuid customlist uuid
	   * @returns {Promise.<string, ModelError>}
	   */
	  function deleteCustomList(uuid) {
	    return portfoliosData.deletePortfoliosummaryCustomListRecord(uuid).then(function (response) {
	      return { data: response.data };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * @name portfolioSummaryModel#deletePortfoliosFromCustomList
	   * @type {function}
	   *
	   * @description
	   * Delete portfolios from custom list.
	   * @param {array.<string>} portfolios List of portfolios ids to remove from custom list
	   * @param {string} uuid customlist uuid
	   * @returns {Promise.<string, ModelError>}
	   */
	  function deletePortfoliosFromCustomList(portfolios, uuid) {
	    return portfoliosData.deletePortfoliosummaryCustomListPortfolioRecord(uuid, portfolios.join(',')).then(function (response) {
	      return { data: response.data };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * @name portfolioSummaryModel#renameCustomList
	   * @type {function}
	   *
	   * @description
	   * Rename custom list.
	   * @param {object} uuid customlist uuid
	   * @param {object} list object with a list name property
	   * @returns {Promise.<string, ModelError>}
	   */
	  function renameCustomList(uuid, list) {
	    return portfoliosData.putPortfoliosummaryCustomListRecord(uuid, list).then(function (_ref) {
	      var data = _ref.data;
	      return data;
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * @name portfolioSummaryModel#updateFavoriteStatusOfPortfolio
	   * @type {function}
	   *
	   * @description
	   * Update `favorite` status of portfolio.
	   * @param {string} IBAN Portfolio IBAN
	   * @param {boolean} isFavorite Flag that stands for 'favorite' status of portfolio
	   * @returns {Promise.<string, ModelError>}
	   */
	  function updateFavoriteStatusOfPortfolio(IBAN, isFavorite) {
	    var doChange = function doChange() {
	      return isFavorite ? portfoliosData.putPortfoliosummaryFavoritesRecord({ IBAN: IBAN }) : portfoliosData.deletePortfoliosummaryFavoritesRecord(IBAN);
	    };
	
	    return doChange().then(function (_ref2) {
	      var data = _ref2.data;
	      return data;
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * @name portfolioSummaryModel
	   * @type {Object}
	   */
	  return {
	    load: load,
	    loadPortfoliosOrder: loadPortfoliosOrder,
	    savePortfoliosOrder: savePortfoliosOrder,
	    loadPortfolioPositions: loadPortfolioPositions,
	    loadPortfolioSummaryRecord: loadPortfolioSummaryRecord,
	    loadAllocationClasses: loadAllocationClasses,
	    loadAllocationCurrencies: loadAllocationCurrencies,
	    loadPerformanceValuation: loadPerformanceValuation,
	    loadPerformanceChart: loadPerformanceChart,
	    setPortfolioIdSelected: setPortfolioIdSelected,
	    setCustomListSelected: setCustomListSelected,
	    getSelectedPortfolioId: getSelectedPortfolioId,
	    getCustomListSelected: getCustomListSelected,
	    loadTransactions: loadTransactions,
	    loadTransactionDetails: loadTransactionDetails,
	    loadTransactionsFilterOptions: loadTransactionsFilterOptions,
	    loadCustomList: loadCustomList,
	    createCustomList: createCustomList,
	    setPortfoliosToCustomList: setPortfoliosToCustomList,
	    deleteCustomList: deleteCustomList,
	    renameCustomList: renameCustomList,
	    deletePortfoliosFromCustomList: deletePortfoliosFromCustomList,
	    updateFavoriteStatusOfPortfolio: updateFavoriteStatusOfPortfolio,
	    savePortfolioAlias: savePortfolioAlias
	  };
	}

/***/ }),

/***/ 95:
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
	  PORTFOLIO_ID_SELECTED: 'bb.portfolioId.selected',
	  CUSTOM_LIST_SELECTED: 'bb.customList.selected'
	};
	
	exports.default = BbStorageKeys;

/***/ })

/******/ })
});
;
//# sourceMappingURL=model-wm-portfolio-summary-ng.js.map