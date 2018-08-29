(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib-bb-state-container-ng"), require("lib-wm-portfolio-view-model-helper"), require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("model-wm-portfolio-summary-ng"), require("lib-wm-portfolio-router-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-wm-allocations-ng", ["lib-bb-state-container-ng", "lib-wm-portfolio-view-model-helper", "vendor-bb-angular", "lib-bb-widget-extension-ng", "model-wm-portfolio-summary-ng", "lib-wm-portfolio-router-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-wm-allocations-ng"] = factory(require("lib-bb-state-container-ng"), require("lib-wm-portfolio-view-model-helper"), require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("model-wm-portfolio-summary-ng"), require("lib-wm-portfolio-router-ng"));
	else
		root["widget-wm-allocations-ng"] = factory(root["lib-bb-state-container-ng"], root["lib-wm-portfolio-view-model-helper"], root["vendor-bb-angular"], root["lib-bb-widget-extension-ng"], root["model-wm-portfolio-summary-ng"], root["lib-wm-portfolio-router-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_86__, __WEBPACK_EXTERNAL_MODULE_88__, __WEBPACK_EXTERNAL_MODULE_93__, __WEBPACK_EXTERNAL_MODULE_125__, __WEBPACK_EXTERNAL_MODULE_126__, __WEBPACK_EXTERNAL_MODULE_128__) {
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

	module.exports = __webpack_require__(134);

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

/***/ 128:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_128__;

/***/ }),

/***/ 134:
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
	
	var _libWmPortfolioRouterNg = __webpack_require__(128);
	
	var _libWmPortfolioRouterNg2 = _interopRequireDefault(_libWmPortfolioRouterNg);
	
	var _libBbStateContainerNg = __webpack_require__(86);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _controller = __webpack_require__(135);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _viewModel = __webpack_require__(136);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	var _service = __webpack_require__(137);
	
	var _service2 = _interopRequireDefault(_service);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-wm-allocations-ng
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
	var viewModelKey = 'viewModel';
	var allocationsServiceKey = 'allocationsService';
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('widget-wm-allocations-ng', [_modelWmPortfolioSummaryNg2.default, _libBbStateContainerNg2.default, _libWmPortfolioRouterNg2.default]).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey, _viewModel2.default]).factory(allocationsServiceKey, [_modelWmPortfolioSummaryNg.modelPortfolioSummaryKey, viewModelKey, _service2.default]).factory(_libBbWidgetExtensionNg.extensionContextKey, [allocationsServiceKey, function (allocationsService) {
	  return { allocationsService: allocationsService };
	}]).controller('AllocationsController', [viewModelKey, allocationsServiceKey, _libWmPortfolioRouterNg.routerKey,
	/* into */
	_controller2.default]).run([viewModelKey, function (viewModel) {
	  viewModel.init();
	}]).name;

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = AllocationsController;
	var CURRENCIES_ROUTE = exports.CURRENCIES_ROUTE = 'currencies';
	var ASSET_CLASSES_ROUTE = exports.ASSET_CLASSES_ROUTE = 'asset-classes';
	
	/**
	 * @name AllocationsController
	 * @ngkey AllocationsController
	 * @type {object}
	 * @description
	 * Allocations controller.
	 */
	function AllocationsController(viewModel, allocationsService, router) {
	  var $ctrl = this;
	  var unsubscribe = void 0;
	
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
	
	  /*
	   * @description
	   * Widget initialization logic.
	   * Subscribes to changing of the route.
	   * Invokes initial loading of data
	   */
	  var $onInit = function $onInit() {
	    unsubscribe = router.subscribe(function (currentRoute) {
	      load(currentRoute);
	    });
	
	    return load();
	  };
	
	  var $onDestroy = function $onDestroy() {
	    return unsubscribe();
	  };
	
	  Object.assign($ctrl, {
	    load: load,
	    switchAllocations: switchAllocations,
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

/***/ 136:
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
	    }
	  }));
	};

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (model, viewModel) {
	  return {
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
	
	      return model.getSelectedPortfolioId().then(model.loadAllocationClasses).then(viewModel.afterLoadAssetClassesSuccess).catch(viewModel.afterLoadAssetClassesError);
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
//# sourceMappingURL=widget-wm-allocations-ng.js.map