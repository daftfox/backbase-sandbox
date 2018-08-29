(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib-bb-state-container-ng"), require("lib-wm-portfolio-view-model-helper"), require("vendor-bb-angular"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("model-wm-portfolio-summary-ng"), require("lib-bb-currency-ng"), require("lib-wm-portfolio-router-ng"), require("lib-bb-intent-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-wm-allocations-advanced-ng", ["lib-bb-state-container-ng", "lib-wm-portfolio-view-model-helper", "vendor-bb-angular", "lib-bb-event-bus-ng", "lib-bb-widget-extension-ng", "model-wm-portfolio-summary-ng", "lib-bb-currency-ng", "lib-wm-portfolio-router-ng", "lib-bb-intent-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-wm-allocations-advanced-ng"] = factory(require("lib-bb-state-container-ng"), require("lib-wm-portfolio-view-model-helper"), require("vendor-bb-angular"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("model-wm-portfolio-summary-ng"), require("lib-bb-currency-ng"), require("lib-wm-portfolio-router-ng"), require("lib-bb-intent-ng"));
	else
		root["widget-wm-allocations-advanced-ng"] = factory(root["lib-bb-state-container-ng"], root["lib-wm-portfolio-view-model-helper"], root["vendor-bb-angular"], root["lib-bb-event-bus-ng"], root["lib-bb-widget-extension-ng"], root["model-wm-portfolio-summary-ng"], root["lib-bb-currency-ng"], root["lib-wm-portfolio-router-ng"], root["lib-bb-intent-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_86__, __WEBPACK_EXTERNAL_MODULE_88__, __WEBPACK_EXTERNAL_MODULE_93__, __WEBPACK_EXTERNAL_MODULE_120__, __WEBPACK_EXTERNAL_MODULE_125__, __WEBPACK_EXTERNAL_MODULE_126__, __WEBPACK_EXTERNAL_MODULE_127__, __WEBPACK_EXTERNAL_MODULE_128__, __WEBPACK_EXTERNAL_MODULE_129__) {
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

	module.exports = __webpack_require__(124);

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

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(93);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(125);
	
	var _modelWmPortfolioSummaryNg = __webpack_require__(126);
	
	var _modelWmPortfolioSummaryNg2 = _interopRequireDefault(_modelWmPortfolioSummaryNg);
	
	var _libBbCurrencyNg = __webpack_require__(127);
	
	var _libWmPortfolioRouterNg = __webpack_require__(128);
	
	var _libWmPortfolioRouterNg2 = _interopRequireDefault(_libWmPortfolioRouterNg);
	
	var _libBbStateContainerNg = __webpack_require__(86);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _libBbIntentNg = __webpack_require__(129);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbEventBusNg = __webpack_require__(120);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _controller = __webpack_require__(130);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _viewModel = __webpack_require__(132);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	var _service = __webpack_require__(133);
	
	var _service2 = _interopRequireDefault(_service);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var viewModelKey = 'viewModel'; /**
	                                 * @module widget-wm-allocations-advanced-ng
	                                 *
	                                 * @description
	                                 * Allocations widget.
	                                 *
	                                 *
	                                 * @example
	                                 *  <div ng-controller="AllocationsController as $ctrl">
	                                 *    <ul>
	                                 *       <li ng-repeat="allocation in $ctrl.allocations">{{allocation.id}}</li>
	                                 *    </ul>
	                                 *  </div>
	                                 */
	
	var allocationsServiceKey = 'allocationsService';
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('widget-wm-allocations-advanced-ng', [_modelWmPortfolioSummaryNg2.default, _libBbStateContainerNg2.default, _libWmPortfolioRouterNg2.default, _libBbIntentNg2.default, _libBbEventBusNg2.default]).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey, _viewModel2.default]).factory(allocationsServiceKey, [_modelWmPortfolioSummaryNg.modelPortfolioSummaryKey, viewModelKey, _service2.default]).factory(_libBbWidgetExtensionNg.extensionContextKey, [allocationsServiceKey, _libBbCurrencyNg.bbCurrencyRuleKey, function (allocationsService, getRule) {
	  return { allocationsService: allocationsService, getRule: getRule };
	}]).controller('AllocationsController', [viewModelKey, allocationsServiceKey, _libWmPortfolioRouterNg.routerKey, _libBbIntentNg.bbIntentKey, _libBbEventBusNg.eventBusKey,
	/* into */
	_controller2.default]).run([viewModelKey, function (viewModel) {
	  viewModel.init();
	}]).name;

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_125__;

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_126__;

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_127__;

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_128__;

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_129__;

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ASSET_CLASSES_ROUTE = exports.CURRENCIES_ROUTE = undefined;
	exports.default = AllocationsController;
	
	var _constants = __webpack_require__(131);
	
	var CURRENCIES_ROUTE = exports.CURRENCIES_ROUTE = 'currencies';
	var ASSET_CLASSES_ROUTE = exports.ASSET_CLASSES_ROUTE = 'asset-classes';
	
	/**
	 * @name AllocationsController
	 * @ngkey AllocationsController
	 * @type {object}
	 * @description
	 * Allocations controller.
	 */
	function AllocationsController(viewModel, allocationsService, router, bbIntents, eventBus) {
	  var $ctrl = this;
	  var unsubscribe = void 0;
	
	  /**
	   * @description
	   * A set of intents that Allocations controller uses or handles.
	   *
	   * @name intents
	   * @type {Object}
	   * @inner
	   */
	  var intents = {
	    viewAssetsInPositions: bbIntents.create(_constants.IntentsKeys.ASSETS_IN_POSITIONS)
	  };
	
	  /**
	   * @description
	   * Redirects widget depending on current route
	   *
	   * @public
	   * @name AllocationsController#switchAllocations
	   * @type {function}
	   */
	  var switchAllocations = function switchAllocations() {
	    if (router.getRoute() !== CURRENCIES_ROUTE) {
	      router.goto(CURRENCIES_ROUTE);
	    } else {
	      router.goto(ASSET_CLASSES_ROUTE);
	    }
	  };
	
	  /**
	   * @description
	   * Loads allocations currencies data or allocations asset classes
	   *  data depending on current application route
	   *
	   * @public
	   * @name AllocationsController#load
	   * @type {function}
	   * @returns {promise.<array.<Allocation>>}
	   */
	  var load = function load(currentRoute) {
	    switch (currentRoute) {
	      case CURRENCIES_ROUTE:
	        return allocationsService.loadCurrencies();
	      default:
	        return allocationsService.loadAssetClasses();
	    }
	  };
	
	  /**
	   * @name viewAssetsInPositions
	   *
	   * @description
	   * Navigate to positions with selected asset class
	   *
	   * @param {object} item Asset class to open
	   * @type {function}
	   */
	  var viewAssetsInPositions = function viewAssetsInPositions(item) {
	    var params = { assetClassName: item.name };
	
	    // @FIXME Publish event here in order tabs container can catch it and open needed tab.
	    // Once tabs container can understand intents (in the future), we will remove this part.
	    eventBus.publish(_constants.IntentsKeys.ASSETS_IN_POSITIONS, params);
	    intents.viewAssetsInPositions(params);
	  };
	
	  /**
	   * @description
	   * Widget initialization logic.
	   * Subscribes to changing of the route.
	   * Invokes initial loading of data
	   */
	  var $onInit = function $onInit() {
	    unsubscribe = router.subscribe(function (currentRoute) {
	      load(currentRoute);
	    });
	
	    allocationsService.loadPortfolioDetails();
	    return load();
	  };
	
	  var $onDestroy = function $onDestroy() {
	    return unsubscribe();
	  };
	
	  Object.assign($ctrl, {
	    load: load,
	    switchAllocations: switchAllocations,
	    viewAssetsInPositions: viewAssetsInPositions,
	    $onInit: $onInit,
	    $onDestroy: $onDestroy
	  });
	
	  return Object.assign({
	    get state() {
	      return viewModel.getState();
	    },
	    get errors() {
	      return viewModel.getState().errors;
	    }
	  }, $ctrl);
	}

/***/ }),

/***/ 131:
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
	// eslint-disable-next-line import/prefer-default-export
	var IntentsKeys = exports.IntentsKeys = {
	  ASSETS_IN_POSITIONS: 'view.portfolio.positions.assets'
	};

/***/ }),

/***/ 132:
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
	 * @property {Object} allocations Allocations data
	 * @property {object} portfolioDetails an object of portfolio details
	 * @property {errors} errors Errors model
	 * @property {boolean} initialLoading Boolean flag of initial loading
	 * @property {object} route Router model
	 */
	var initialState = {
	  allocations: {
	    data: {
	      allocations: [],
	      additions: {}
	    },
	    loading: false
	  },
	  portfolioDetails: {
	    data: null,
	    loading: false
	  },
	  errors: {
	    allocationsError: null
	  },
	  route: {
	    name: 'asset-classes',
	    params: {}
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
	    beforeLoadAssetClasses: function beforeLoadAssetClasses() {
	      return {
	        allocations: {
	          loading: true
	        }
	      };
	    },
	    afterLoadAssetClassesSuccess: function afterLoadAssetClassesSuccess(state, raw) {
	      return {
	        initialLoading: false,
	        allocations: {
	          loading: false,
	          data: raw.data
	        },
	        errors: {
	          allocationsError: null
	        }
	      };
	    },
	    afterLoadAssetClassesError: function afterLoadAssetClassesError(state, error) {
	      return {
	        initialLoading: false,
	        allocations: {
	          loading: false,
	          data: []
	        },
	        errors: {
	          allocationsError: error.code
	        }
	      };
	    },
	    beforeLoadCurrencies: function beforeLoadCurrencies() {
	      return {
	        allocations: {
	          loading: true
	        }
	      };
	    },
	    afterLoadCurrenciesSuccess: function afterLoadCurrenciesSuccess(state, raw) {
	      return {
	        initialLoading: false,
	        allocations: {
	          loading: false,
	          data: raw.data
	        },
	        errors: {
	          allocationsError: null
	        }
	      };
	    },
	    afterLoadCurrenciesError: function afterLoadCurrenciesError(state, error) {
	      return {
	        initialLoading: false,
	        allocations: {
	          loading: false,
	          data: []
	        },
	        errors: {
	          allocationsError: error.code
	        }
	      };
	    },
	    beforeLoadPortfolioDetails: function beforeLoadPortfolioDetails() {
	      return {
	        portfolioDetails: {
	          loading: true
	        }
	      };
	    },
	    afterLoadPortfolioDetailsSuccess: function afterLoadPortfolioDetailsSuccess(state, raw) {
	      return {
	        portfolioDetails: {
	          loading: false,
	          data: raw.data
	        },
	        errors: {
	          allocationsError: null
	        }
	      };
	    },
	    afterLoadPortfolioDetailsError: function afterLoadPortfolioDetailsError(state, error) {
	      return {
	        portfolioDetails: {
	          loading: false,
	          data: null
	        },
	        errors: {
	          allocationsError: error.code
	        }
	      };
	    }
	  }));
	};

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (model, viewModel) {
	  return {
	    /**
	     * @description
	     * Handles loading of portfolio details
	     *
	     * @public
	     * @name loadPortfolioDetails
	     * @type {function}
	     * @returns {promise.<array>}
	     */
	    loadPortfolioDetails: function loadPortfolioDetails() {
	      viewModel.beforeLoadPortfolioDetails();
	      return model.getSelectedPortfolioId().then(function (portfolioId) {
	        return model.loadPortfolioSummaryRecord(portfolioId);
	      }).then(viewModel.afterLoadPortfolioDetailsSuccess).catch(viewModel.afterLoadPortfolioDetailsError);
	    },
	
	    /**
	     * @description
	     * Initial state of porfolio details store
	     *
	     * @public
	     * @name AllocationsController#loadAssetClasses
	     * @type {function}
	     * Load allocations
	     * @returns {promise.<array>}
	     */
	    loadAssetClasses: function loadAssetClasses() {
	      viewModel.beforeLoadAssetClasses();
	
	      return model.getSelectedPortfolioId().then(model.loadAllocationClasses).then(viewModel.afterLoadAssetClassesSuccess).catch(function (error) {
	        viewModel.afterLoadAssetClassesError(error);
	        throw error;
	      });
	    },
	
	    /**
	     * @description
	     * Handles loading allocations currencies data
	     *
	     * @public
	     * @name AllocationsController#loadCurrencies
	     * @type {function}
	     * Load allocations
	     * @returns {promise.<array>}
	     */
	    loadCurrencies: function loadCurrencies() {
	      viewModel.beforeLoadCurrencies();
	
	      return model.getSelectedPortfolioId().then(model.loadAllocationCurrencies).then(viewModel.afterLoadCurrenciesSuccess).catch(viewModel.afterLoadCurrenciesError);
	    }
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-wm-allocations-advanced-ng.js.map