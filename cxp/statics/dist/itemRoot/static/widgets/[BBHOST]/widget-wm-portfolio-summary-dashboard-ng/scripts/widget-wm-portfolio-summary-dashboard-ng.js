(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib-bb-state-container-ng"), require("lib-wm-portfolio-view-model-helper"), require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("model-wm-portfolio-summary-ng"), require("lib-bb-intent-ng"), require("lib-bb-widget-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-wm-portfolio-summary-dashboard-ng", ["lib-bb-state-container-ng", "lib-wm-portfolio-view-model-helper", "vendor-bb-angular", "lib-bb-widget-extension-ng", "model-wm-portfolio-summary-ng", "lib-bb-intent-ng", "lib-bb-widget-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-wm-portfolio-summary-dashboard-ng"] = factory(require("lib-bb-state-container-ng"), require("lib-wm-portfolio-view-model-helper"), require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("model-wm-portfolio-summary-ng"), require("lib-bb-intent-ng"), require("lib-bb-widget-ng"));
	else
		root["widget-wm-portfolio-summary-dashboard-ng"] = factory(root["lib-bb-state-container-ng"], root["lib-wm-portfolio-view-model-helper"], root["vendor-bb-angular"], root["lib-bb-widget-extension-ng"], root["model-wm-portfolio-summary-ng"], root["lib-bb-intent-ng"], root["lib-bb-widget-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_86__, __WEBPACK_EXTERNAL_MODULE_88__, __WEBPACK_EXTERNAL_MODULE_93__, __WEBPACK_EXTERNAL_MODULE_125__, __WEBPACK_EXTERNAL_MODULE_126__, __WEBPACK_EXTERNAL_MODULE_129__, __WEBPACK_EXTERNAL_MODULE_152__) {
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

	module.exports = __webpack_require__(151);

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_86__;

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_88__;

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_93__;

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_125__;

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_126__;

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_129__;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(93);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(125);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbStateContainerNg = __webpack_require__(86);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _libBbWidgetNg = __webpack_require__(152);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _modelWmPortfolioSummaryNg = __webpack_require__(126);
	
	var _modelWmPortfolioSummaryNg2 = _interopRequireDefault(_modelWmPortfolioSummaryNg);
	
	var _libBbIntentNg = __webpack_require__(129);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _controller = __webpack_require__(153);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(155);
	
	var _defaultHooks2 = _interopRequireDefault(_defaultHooks);
	
	var _service = __webpack_require__(156);
	
	var _service2 = _interopRequireDefault(_service);
	
	var _viewModel = __webpack_require__(157);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-wm-portfolio-summary-dashboard-ng
	 *
	 * @description
	 * Portfolio summary dashboard widget.
	 *
	 *
	 * @example
	 *  <div ng-controller="PortfolioSummaryController as $ctrl">
	 *    <ul>
	 *       <li ng-repeat="portfolio in $ctrl.portfolios">{{portfolio.id}}</li>
	 *    </ul>
	 *  </div>
	 */
	var hooksKey = 'widget-wm-portfolio-summary-dashboard-ng:hooks';
	var serviceKey = 'widget-wm-portfolio-summary-dashboard-ng:service';
	var viewModelKey = 'widget-wm-portfolio-summary-dashboard-ng:viewModel';
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('widget-wm-portfolio-summary-dashboard-ng', [_modelWmPortfolioSummaryNg2.default, _libBbWidgetNg2.default, _libBbIntentNg2.default, _libBbStateContainerNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(_defaultHooks2.default)).factory(serviceKey, [_modelWmPortfolioSummaryNg.modelPortfolioSummaryKey, viewModelKey, _service2.default]).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey, _libBbWidgetNg.widgetKey, hooksKey, _viewModel2.default]).controller('PortfolioSummaryController', [_libBbIntentNg.bbIntentKey, serviceKey, viewModelKey,
	/* into */
	_controller2.default]).name;
	
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
	 * Asset class object
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

/***/ 152:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_152__;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = PortfolioSummaryController;
	
	var _constants = __webpack_require__(154);
	
	/**
	 * @name PortfolioSummaryController
	 * @ngkey PortfolioSummaryController
	 * @type {object}
	 * @description
	 * Portfolio summary controller.
	 */
	
	function PortfolioSummaryController(bbIntents, service, viewModel) {
	  var $ctrl = this;
	
	  /**
	   * @description
	   * A set of intents that the Portfolio Summary controller uses or handles.
	   *
	   * @name intents
	   * @type {Object}
	   * @inner
	   */
	  var intents = {
	    viewPortfolioDetails: bbIntents.create(_constants.IntentsKeys.PORTFOLIO_DETAILS)
	  };
	
	  /**
	   * @description
	   * Handles loading portfolios
	   *
	   * @public
	   * @name PortfolioSummaryController#load
	   * @type {function}
	   * Load portfolios
	   * @returns {promise.<array>}
	   */
	  var load = function load() {
	    return service.loadPortfolioSummary();
	  };
	
	  /**
	   * @name viewPortfolioDetails
	   *
	   * @description
	   * Navigate to portfolio details
	   *
	   * @param {string} portfolioId ID of portfolio to load
	   * @type {function}
	   */
	  var viewPortfolioDetails = function viewPortfolioDetails(portfolioId) {
	    service.setPortfolioIdSelected(portfolioId);
	    intents.viewPortfolioDetails();
	  };
	
	  /**
	   * @name updatePortfolio
	   *
	   * @description
	   * Saves portfolio with new alias.
	   *
	   * @param {object} portfolio Selected portfolio
	   * @type {function}
	   */
	  var updatePortfolio = function updatePortfolio(portfolio) {
	    return service.savePortfolioAlias(portfolio.IBAN, portfolio.alias).then(function (response) {
	      if (!portfolio.alias) {
	        return load();
	      }
	      return response;
	    }).catch(function (error) {
	      throw error;
	    });
	  };
	
	  /*
	   * Widget initialization logic.
	   * Loads portfolios and portfolios order.
	   * @public
	   */
	  var $onInit = function $onInit() {
	    viewModel.init();
	    return load();
	  };
	
	  /**
	   * @name saveOrder
	   *
	   * @description
	   * Saves portfolios order.
	   *
	   * @param {Array.<string>} order Array of portfolios IBANs
	   * @type {function}
	   * @returns {promise.<Array.<string>>} Promise resolving to array of portfolios IBAN
	   */
	  var saveOrder = function saveOrder(order) {
	    var prevSavedOrder = viewModel.getState().portfolios.order;
	    if (angular.equals(order, prevSavedOrder)) {
	      return false;
	    }
	    return service.savePortfoliosOrder(order);
	  };
	
	  Object.assign($ctrl, {
	    viewPortfolioDetails: viewPortfolioDetails,
	    $onInit: $onInit,
	    load: load,
	    updatePortfolio: updatePortfolio,
	    saveOrder: saveOrder
	  });
	
	  return Object.assign({
	    get state() {
	      return viewModel.getState();
	    },
	    get errors() {
	      return viewModel.getState().errors;
	    }
	  }, $ctrl);
	} /* global angular*/

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description
	 * Widget intents to be handled
	 *
	 * @name IntentsKeys
	 * @type {object}
	 */
	var IntentsKeys = exports.IntentsKeys = {
	  PORTFOLIO_DETAILS: 'view.portfolio.details'
	};
	
	/**
	 * @description
	 * Maximum size of client`s portfolios collection.
	 * This value appears because of size default value 10 in BB traits.
	 * This is because current widget uses end point requiring size param for pagination,
	 * but not having pagination itself.
	 *
	 * @name MAX_SIZE_OF_PORTFOLIOS_COLLECTION
	 * @type {number}
	 */
	var MAX_SIZE_OF_PORTFOLIOS_COLLECTION = exports.MAX_SIZE_OF_PORTFOLIOS_COLLECTION = 1000;
	
	/**
	 * @description
	 * Key for portfolios order specified by user
	 *
	 * @name USER_ORDER
	 * @type {string}
	 */
	var USER_ORDER = exports.USER_ORDER = 'userOrder';

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

	"use strict";

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(154);
	
	exports.default = function (model, viewModel) {
	  /**
	   * @description
	   * Handles saving of portfolios order
	   * @public
	   * @name savePortfoliosOrder
	   * @type {function}
	   * @param {Array.<string>} order Array of portfolios IBANs
	   * @returns {promise.<array>}
	   */
	  var savePortfoliosOrder = function savePortfoliosOrder(order) {
	    viewModel.afterSavePortfoliosOrderSuccess(order);
	
	    return model.savePortfoliosOrder(order);
	  };
	
	  /**
	   * @description
	   * Handles saving of portfolio with new alias
	   * @public
	   * @name savePortfolioAlias
	   * @type {function}
	   * @param {string} IBAN Portfolio IBAN
	   * @param {string} aliasName New alias name
	   */
	  var savePortfolioAlias = function savePortfolioAlias(IBAN, aliasName) {
	    return model.savePortfolioAlias(IBAN, aliasName).then(function () {
	      viewModel.afterSavePortfoliosAliasSuccess({ IBAN: IBAN, aliasName: aliasName });
	    }).catch(function (error) {
	      throw error;
	    });
	  };
	
	  /**
	   * @description
	   * Handles loading porfolio summary
	   * @public
	   * @name loadPortfolioSummary
	   * @type {function}
	   * Load allocations
	   * @returns {promise.<array>}
	   */
	  var loadPortfolioSummary = function loadPortfolioSummary() {
	    viewModel.beforeLoadPortfolioSummary();
	    return model.load({ size: _constants.MAX_SIZE_OF_PORTFOLIOS_COLLECTION, orderBy: _constants.USER_ORDER }).then(function (data) {
	      viewModel.afterLoadPortfolioSummarySuccess({
	        data: data.data
	      });
	      return data;
	    }).catch(function (error) {
	      viewModel.afterLoadPortfolioSummaryError(error);
	      throw error;
	    });
	  };
	
	  return {
	    loadPortfolioSummary: loadPortfolioSummary,
	    savePortfoliosOrder: savePortfoliosOrder,
	    savePortfolioAlias: savePortfolioAlias,
	
	    /**
	     * @name setPortfolioIdSelected
	     * @type {function}
	     * @description
	     * Set current selected portfolio id
	     * @param {string} portfolioId portfolio id to set selected
	     */
	    setPortfolioIdSelected: function setPortfolioIdSelected(portfolioId) {
	      model.setPortfolioIdSelected(portfolioId);
	    }
	  };
	}; /* global angular */

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (stateContainer) {
	  /**
	   * @name initialState
	   * @description Initial state of porfolios store
	   * @type {object}
	   * @property {object} portfolios      an object of portfolios
	   * @property {boolean} initialLoading Boolean flag of initial loading
	   * @property {object} pageParams      parameters of the page
	   * @property {object} errors          portfolios errors
	   */
	  var initialState = {
	    portfolios: {
	      list: {},
	      order: [],
	      loading: false,
	      portfolioSelected: { id: null, showInput: false }
	    },
	    initialLoading: true,
	    errors: {
	      portfoliosError: null
	    }
	  };
	
	  return Object.assign({
	    getState: function getState() {
	      return stateContainer.getState();
	    }
	  }, (0, _libWmPortfolioViewModelHelper.wrapActions)(stateContainer, {
	    init: function init() {
	      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	      return state;
	    },
	    beforeLoadPortfolioSummary: function beforeLoadPortfolioSummary() {
	      return {
	        portfolios: {
	          loading: true
	        }
	      };
	    },
	    afterLoadPortfolioSummaryError: function afterLoadPortfolioSummaryError(state, error) {
	      return {
	        initialLoading: false,
	        portfolios: {
	          loading: false
	        },
	        errors: {
	          portfoliosError: error.code
	        }
	      };
	    },
	    afterSavePortfoliosOrderSuccess: function afterSavePortfoliosOrderSuccess(state, data) {
	      return {
	        portfolios: {
	          order: data
	        }
	      };
	    },
	    afterSavePortfoliosAliasSuccess: function afterSavePortfoliosAliasSuccess(state, _ref) {
	      var IBAN = _ref.IBAN,
	          aliasName = _ref.aliasName;
	      return {
	        portfolios: {
	          list: _defineProperty({}, IBAN, {
	            alias: aliasName
	          })
	        }
	      };
	    }
	  }), {
	    afterLoadPortfolioSummarySuccess: stateContainer.createAction(function (state, _ref2) {
	      var data = _ref2.data;
	      return Object.assign({}, state, {
	        initialLoading: false,
	        portfolios: {
	          order: data.map(function (_ref3) {
	            var IBAN = _ref3.IBAN;
	            return IBAN;
	          }),
	          list: data.reduce(function (list, current) {
	            return Object.assign({}, list, _defineProperty({}, current.IBAN, current));
	          }, {}),
	          loading: false,
	          portfolioSelected: { id: null, showInput: false }
	        },
	        errors: {
	          portfoliosError: null
	        }
	      });
	    })
	  });
	};
	
	var _libWmPortfolioViewModelHelper = __webpack_require__(88);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-wm-portfolio-summary-dashboard-ng.js.map