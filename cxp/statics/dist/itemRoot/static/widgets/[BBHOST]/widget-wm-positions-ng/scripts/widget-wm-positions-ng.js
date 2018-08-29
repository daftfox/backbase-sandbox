(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib-bb-state-container-ng"), require("lib-wm-portfolio-view-model-helper"), require("vendor-bb-angular"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("model-wm-portfolio-summary-ng"), require("lib-bb-intent-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-wm-positions-ng", ["lib-bb-state-container-ng", "lib-wm-portfolio-view-model-helper", "vendor-bb-angular", "lib-bb-event-bus-ng", "lib-bb-widget-extension-ng", "model-wm-portfolio-summary-ng", "lib-bb-intent-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-wm-positions-ng"] = factory(require("lib-bb-state-container-ng"), require("lib-wm-portfolio-view-model-helper"), require("vendor-bb-angular"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("model-wm-portfolio-summary-ng"), require("lib-bb-intent-ng"));
	else
		root["widget-wm-positions-ng"] = factory(root["lib-bb-state-container-ng"], root["lib-wm-portfolio-view-model-helper"], root["vendor-bb-angular"], root["lib-bb-event-bus-ng"], root["lib-bb-widget-extension-ng"], root["model-wm-portfolio-summary-ng"], root["lib-bb-intent-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_86__, __WEBPACK_EXTERNAL_MODULE_88__, __WEBPACK_EXTERNAL_MODULE_93__, __WEBPACK_EXTERNAL_MODULE_120__, __WEBPACK_EXTERNAL_MODULE_125__, __WEBPACK_EXTERNAL_MODULE_126__, __WEBPACK_EXTERNAL_MODULE_129__) {
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

	module.exports = __webpack_require__(169);

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

/***/ 120:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_120__;

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

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(93);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(125);
	
	var _libBbEventBusNg = __webpack_require__(120);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _modelWmPortfolioSummaryNg = __webpack_require__(126);
	
	var _modelWmPortfolioSummaryNg2 = _interopRequireDefault(_modelWmPortfolioSummaryNg);
	
	var _libBbStateContainerNg = __webpack_require__(86);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _libBbIntentNg = __webpack_require__(129);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _controller = __webpack_require__(170);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _viewModel = __webpack_require__(172);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	var _service = __webpack_require__(173);
	
	var _service2 = _interopRequireDefault(_service);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var viewModelKey = 'widget-wm-positions-ng:viewModel'; /**
	                                                        * @module widget-wm-positions-ng
	                                                        *
	                                                        * @description
	                                                        * Positions widget.
	                                                        *
	                                                        *
	                                                        * @example
	                                                        *  <div ng-controller="PositionsController as $ctrl">
	                                                        *    <ul>
	                                                        *       <li ng-repeat="position in $ctrl.positions">{{position.id}}</li>
	                                                        *    </ul>
	                                                        *  </div>
	                                                        */
	
	var serviceKey = 'widget-wm-positions-ng:service';
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('widget-wm-positions-ng', [_modelWmPortfolioSummaryNg2.default, _libBbStateContainerNg2.default, _libBbEventBusNg2.default, _libBbIntentNg2.default]).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey, _viewModel2.default]).factory(serviceKey, [_modelWmPortfolioSummaryNg.modelPortfolioSummaryKey, viewModelKey, _service2.default]).factory(_libBbWidgetExtensionNg.extensionContextKey, [serviceKey, function (service) {
	  return { service: service };
	}]).controller('PositionsController', [viewModelKey, serviceKey, _libBbEventBusNg.eventBusKey, _libBbIntentNg.bbIntentKey,
	/* into */
	_controller2.default]).run([viewModelKey, function (viewModel) {
	  viewModel.init();
	}]).name;
	
	/**
	* @description Portfolio type definition
	* @typedef {object} position
	* @property {string} id                  Id of the position.
	* @property {srting} accountId           Identifier of an Account.
	* @property {string} assetClassId        Identifier of an Asset Class.
	* @property {srting} regionId            Identifier of a Region.
	* @property {string} countryId           Identifier of a Country.
	* @property {string} instrumentName      Official name of the instrument.
	* @property {string} instrumentCurrency  Currency in which the instrument is traded.
	* @property {string} instrumentCode      Code of the instrument used by the Bank.
	* @property {number} quantity            Total quantity of units
	*                                        in the Position.
	* @property {object} price               Price of one unit of the position
	*                                        in the instrument currency.
	* @property {number} exchangeRate        The current market exchange rate between
	*                                        client reference currency and instrument currency.
	* @property {object} valuation           Total cost/valuation of all assets/constituents.
	* @property {object} accruedInterest     Accrued Interest in the Client's currency.
	* @property {object} costPrice           The price in the currency of instrument used
	*                                        in the last transaciton.
	* @property {number} costExchangeRate    The exchange rate used in last transaction.
	* @property {object} unrealizedPL        The total amount of all potentially unrealized cash
	*                                        for all constituents of the given Asset Class.
	* @property {number} unrealizedPLPct     In percents the amount of unrealised PL.
	* @property {number} assetClassPct       In percents. The amount of the given position.
	* @property {number} portfolioPct        The amount of the current asset class.
	*/

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = PositionsController;
	
	var _constants = __webpack_require__(171);
	
	/**
	 * @name PositionsController
	 * @ngkey PositionsController
	 * @type {object}
	 * @description
	 * Positions controller.
	 */
	
	function PositionsController(viewModel, service, eventBus, bbIntents) {
	  var viewTransactionsIntent = bbIntents.create(_constants.Intent.TRANSACTION_LIST);
	
	  /**
	   * @name postponedTasks
	   * @type {Array}
	   * @inner
	   * @description
	   * list of tasks that will be invoked when positions data is loaded
	   */
	  var postponedTasks = [];
	
	  /**
	   * @name invokePostponedTasks
	   * @type {function}
	   * @inner
	   * @description
	   * Function invoking postponed tasks
	   * @return {void}
	   */
	  var invokePostponedTasks = function invokePostponedTasks() {
	    postponedTasks.forEach(function (task) {
	      return task();
	    });
	    postponedTasks.length = 0;
	  };
	
	  /**
	   * @name addToPostponedTasks
	   * @type {function}
	   * @inner
	   * @description
	   * Function adding task to the list of postponed tasks to invoke it after positions data is loaded
	   * @return {void}
	   */
	  var addToPostponedTasks = function addToPostponedTasks(task) {
	    return postponedTasks.push(task);
	  };
	
	  /**
	   * @description
	   * Function opening specific asset class in case data is already loaded, and postponing opening
	   * if positions data loading is in progress
	   * @type {function}
	   * @inner
	   * @param {Object} assetClass asset class to open
	   */
	  var tryOpenAssetClass = function tryOpenAssetClass(assetClass) {
	    if (!viewModel.getState().initialLoading) {
	      viewModel.openAssetClass(assetClass);
	    } else {
	      addToPostponedTasks(function () {
	        return viewModel.openAssetClass(assetClass);
	      });
	    }
	  };
	
	  /**
	   * @private
	   * @description Initialize intents to listen to ASSETS_IN_POSITION event
	   * to open specific asset class
	   * @type {function}
	   */
	  var initIntents = function initIntents() {
	    bbIntents.handle(_constants.Intent.ASSETS_IN_POSITIONS, tryOpenAssetClass);
	    bbIntents.init(function () {
	      return null;
	    });
	  };
	
	  /**
	   * @name viewTransactions
	   *
	   * @description
	   * Navigate to transactions list page
	   *
	   * @param {string} portfolioId ID of portfolio to load
	   * @param {string} positionId ID of positions to load
	   * @param {string} position instrument name of positions to load
	   * @type {function}
	   * @fires view.transactions
	   */
	  var viewTransactions = function viewTransactions(portfolioId, positionId, positionInstrumentName) {
	    /**
	     * @name params
	     * @type {object}
	     * @inner
	     * @property {string} portfolioId ID of portfolio to load
	     * @property {string} positionId ID of positions to load
	     */
	    var params = {
	      portfolioId: portfolioId,
	      positionId: positionId,
	      positionInstrumentName: positionInstrumentName
	    };
	
	    // @FIXME Publish event here in order tabs container can catch it and open needed tab.
	    // Once tabs container can understand intents (in the future), we will remove this part.
	    eventBus.publish(_constants.Event.TRANSACTION_LIST, params);
	
	    viewTransactionsIntent(params);
	  };
	
	  /**
	   * @description
	   * Handles loading positions
	   *
	   * @private
	   * @name PositionsController#loadPositions
	   * @type {function}
	   * Load positions
	   * @returns {promise.<array>}
	   */
	  var loadPositions = function loadPositions() {
	    return service.loadPositions();
	  };
	
	  /**
	   * @name $onInit
	   * @type {function}
	   * @description Init logic of widget. Invokes initialization of view model
	   */
	  var $onInit = function $onInit() {
	    initIntents();
	    return loadPositions().then(invokePostponedTasks);
	  };
	
	  /**
	   * @name onFinishScroll
	   * @type {function}
	   * @description Callback function. Invokes when scroll to view finishing
	   */
	  var onFinishScroll = function onFinishScroll() {
	    viewModel.onScrollToAssetClassFinished();
	  };
	
	  return {
	    $onInit: $onInit,
	    loadPositions: loadPositions,
	    viewTransactions: viewTransactions,
	    onFinishScroll: onFinishScroll,
	    get state() {
	      return viewModel.getState();
	    },
	    get errors() {
	      return viewModel.getState().errors;
	    }
	  };
	}

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Intent
	 * @type {object}
	 *
	 * @description
	 * Widget intents to be handled
	 *
	 * @property {string} TRANSACTION_LIST  Used when clicking on the transaction icon
	 * to move to the transaction list
	 */
	var Intent = exports.Intent = {
	  TRANSACTION_LIST: 'view.transactions',
	  ASSETS_IN_POSITIONS: 'view.portfolio.positions.assets'
	};
	
	/**
	 * @name Event
	 * @type {object}
	 *
	 * @description
	 * Widget events to be handled
	 *
	 * @property {string} TRANSACTION_LIST  Used when clicking on the transaction icon
	 * to move to the transaction list
	 */
	var Event = exports.Event = {
	  TRANSACTION_LIST: 'view.transactions'
	};

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libWmPortfolioViewModelHelper = __webpack_require__(88);
	
	/**
	 * @name initialState
	 * @description Initial state of widgets store
	 * @type {object}
	 * @property {object} positions an object of positions
	 * @property {boolean} initialLoading Boolean flag of initial loading
	 * @property {errors} errors Errors model
	 */
	var initialState = {
	  positions: {
	    data: {
	      accounts: [],
	      assetClasses: [],
	      regions: [],
	      countries: [],
	      positions: []
	    },
	    loading: false
	  },
	  errors: {
	    positionsError: null
	  },
	  initialLoading: true
	};
	
	exports.default = function (stateContainer) {
	  return Object.assign({
	    getState: stateContainer.getState
	  }, (0, _libWmPortfolioViewModelHelper.wrapActions)(stateContainer, {
	    init: function init() {
	      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	      return state;
	    },
	    beforeLoadPositions: function beforeLoadPositions() {
	      return {
	        initialLoading: true,
	        positions: {
	          loading: true
	        }
	      };
	    },
	    afterLoadPositionsSuccess: function afterLoadPositionsSuccess(state, raw) {
	      return {
	        initialLoading: false,
	        positions: {
	          loading: false,
	          data: raw.data
	        },
	        errors: {
	          positionsError: null
	        }
	      };
	    },
	    afterLoadPositionsError: function afterLoadPositionsError(state, error) {
	      return {
	        initialLoading: false,
	        positions: {
	          loading: false,
	          data: null
	        },
	        errors: {
	          positionsError: error.code
	        }
	      };
	    },
	    openAssetClass: function openAssetClass(state, _ref) {
	      var assetClassName = _ref.assetClassName;
	
	      var accounts = state.positions.data.accounts;
	      var assetClasses = state.positions.data.assetClasses;
	
	      if (!assetClasses || !assetClasses.length) {
	        return state;
	      }
	
	      var openAccountIds = [];
	
	      assetClasses = assetClasses.map(function (assetClass) {
	        var isOpen = false;
	        if (assetClass.name === assetClassName) {
	          isOpen = true;
	          openAccountIds.push(assetClass.accountId);
	        }
	
	        return Object.assign({}, assetClass, {
	          isOpen: isOpen
	        });
	      });
	
	      accounts = accounts.map(function (account) {
	        return Object.assign({}, account, {
	          isOpen: !!openAccountIds.find(function (id) {
	            return id === account.id;
	          })
	        });
	      });
	
	      return {
	        positions: {
	          assetToScrollTo: assetClassName,
	          data: {
	            accounts: accounts,
	            assetClasses: assetClasses
	          }
	        }
	      };
	    },
	    onScrollToAssetClassFinished: function onScrollToAssetClassFinished() {
	      return {
	        positions: {
	          assetToScrollTo: null
	        }
	      };
	    }
	  }));
	};

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (model, viewModel) {
	  return {
	    /**
	     * @description
	     * Handles loading of positions
	     *
	     * @private
	     * @name PositionsController#loadPositions
	     * @type {function}
	     * @returns {promise.<array>}
	     */
	    loadPositions: function loadPositions() {
	      viewModel.beforeLoadPositions();
	      return model.getSelectedPortfolioId().then(function (portfolioId) {
	        return model.loadPortfolioPositions(portfolioId);
	      }).then(viewModel.afterLoadPositionsSuccess).catch(viewModel.afterLoadPositionsError);
	    }
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-wm-positions-ng.js.map