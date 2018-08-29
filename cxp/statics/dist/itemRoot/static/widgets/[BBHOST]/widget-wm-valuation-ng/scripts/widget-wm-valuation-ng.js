(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib-bb-state-container-ng"), require("lib-wm-portfolio-view-model-helper"), require("vendor-bb-angular"), require("model-wm-portfolio-summary-ng"), require("lib-bb-currency-ng"), require("lib-wm-portfolio-router-ng"), require("lib-bb-widget-ng"), require("lib-bb-extension-helpers-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-wm-valuation-ng", ["lib-bb-state-container-ng", "lib-wm-portfolio-view-model-helper", "vendor-bb-angular", "model-wm-portfolio-summary-ng", "lib-bb-currency-ng", "lib-wm-portfolio-router-ng", "lib-bb-widget-ng", "lib-bb-extension-helpers-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-wm-valuation-ng"] = factory(require("lib-bb-state-container-ng"), require("lib-wm-portfolio-view-model-helper"), require("vendor-bb-angular"), require("model-wm-portfolio-summary-ng"), require("lib-bb-currency-ng"), require("lib-wm-portfolio-router-ng"), require("lib-bb-widget-ng"), require("lib-bb-extension-helpers-ng"));
	else
		root["widget-wm-valuation-ng"] = factory(root["lib-bb-state-container-ng"], root["lib-wm-portfolio-view-model-helper"], root["vendor-bb-angular"], root["model-wm-portfolio-summary-ng"], root["lib-bb-currency-ng"], root["lib-wm-portfolio-router-ng"], root["lib-bb-widget-ng"], root["lib-bb-extension-helpers-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_86__, __WEBPACK_EXTERNAL_MODULE_88__, __WEBPACK_EXTERNAL_MODULE_93__, __WEBPACK_EXTERNAL_MODULE_126__, __WEBPACK_EXTERNAL_MODULE_127__, __WEBPACK_EXTERNAL_MODULE_128__, __WEBPACK_EXTERNAL_MODULE_152__, __WEBPACK_EXTERNAL_MODULE_175__) {
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

	module.exports = __webpack_require__(174);

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name VALUATION_ROUTE
	 * @type {string}
	 * @description
	 * Constant for valuation route
	 */
	var VALUATION_ROUTE = exports.VALUATION_ROUTE = 'VALUATION_ROUTE';
	/**
	 * @name VARIATION_ROUTE
	 * @type {string}
	 * @description
	 * Constant for variation route
	 */
	var VARIATION_ROUTE = exports.VARIATION_ROUTE = 'VARIATION_ROUTE';
	
	/**
	 * @name Preferences
	 * @type {Object}
	 * @description
	 * Const for widget properties/preferences
	 */
	var Preferences = exports.Preferences = {
	  DISPLAY_VALUATION_CHART: 'displayValuationChart',
	  DISPLAY_VARIATION_CHART: 'displayVariationChart'
	};

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

/***/ 152:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_152__;

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libBbCurrencyNg = __webpack_require__(127);
	
	var _libBbCurrencyNg2 = _interopRequireDefault(_libBbCurrencyNg);
	
	var _libBbExtensionHelpersNg = __webpack_require__(175);
	
	var _libBbExtensionHelpersNg2 = _interopRequireDefault(_libBbExtensionHelpersNg);
	
	var _libBbWidgetNg = __webpack_require__(152);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbStateContainerNg = __webpack_require__(86);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _vendorBbAngular = __webpack_require__(93);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _modelWmPortfolioSummaryNg = __webpack_require__(126);
	
	var _modelWmPortfolioSummaryNg2 = _interopRequireDefault(_modelWmPortfolioSummaryNg);
	
	var _libWmPortfolioRouterNg = __webpack_require__(128);
	
	var _libWmPortfolioRouterNg2 = _interopRequireDefault(_libWmPortfolioRouterNg);
	
	var _controller = __webpack_require__(176);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _viewModel = __webpack_require__(177);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	var _service = __webpack_require__(178);
	
	var _service2 = _interopRequireDefault(_service);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-wm-valuation-ng
	 *
	 * @description
	 * Valuation widget.
	 *
	 *
	 * @example
	 *  <div ng-controller="ValuationController as $ctrl">
	 *    <ul>
	 *       <li ng-repeat="item in $ctrl.state.performance.data">{{item.id}}</li>
	 *    </ul>
	 *  </div>
	 */
	var viewModelKey = 'widget-wm-valuation-ng:viewModel';
	var serviceKey = 'widget-wm-valuation-ng:service';
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('widget-wm-valuation-ng', [_modelWmPortfolioSummaryNg2.default, _libBbCurrencyNg2.default, _libBbExtensionHelpersNg2.default, _libBbStateContainerNg2.default, _libWmPortfolioRouterNg2.default, _libBbWidgetNg2.default]).factory(_libBbExtensionHelpersNg.extensionHelpersContextKey, ['$compile', _libBbCurrencyNg.bbCurrencyRuleKey, function ($compile, getRule) {
	  return {
	    $compile: $compile,
	    getRule: getRule
	  };
	}]).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey, _viewModel2.default]).factory(serviceKey, [_modelWmPortfolioSummaryNg.modelPortfolioSummaryKey, viewModelKey, _service2.default]).controller('ValuationController', [_modelWmPortfolioSummaryNg.modelPortfolioSummaryKey, serviceKey, viewModelKey, _libWmPortfolioRouterNg.routerKey, _libBbWidgetNg.widgetKey,
	/* into */
	_controller2.default]).name;
	
	/**
	 * @description Portfolio type definition
	 * @typedef {object} PerformanceValuation
	 * @property {ChartData} chartData Valuation data to be displayed by widget
	 * @property {boolean} valuePctDataDisplay Flag informing whether variation data can be displayed
	 * @property {boolean} valueDataDisplay Flag informing whether valuation data can be displayed
	 */
	
	/**
	 * @description ChartData object definition
	 * @typedef {object} ChartData
	 * @property {string} dateFrom Start date of period value belongs to
	 * @property {string} dateTo End date of period value belongs to
	 * @property {Money} value Money valuation of the portfolio
	 * @property {number} valuePct Percent of how initial valuation of portfolio changed
	 */
	
	/**
	 * @description Money object definition
	 * @typedef {object} Money
	 * @property {number} amount Amount of money
	 * @property {string} currency Currency code
	 */

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_175__;

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ValuationController;
	
	var _constants = __webpack_require__(78);
	
	/**
	 * @name ValuationController
	 * @ngkey ValuationController
	 * @type {object}
	 * @description
	 * Valuation controller.
	 */
	function ValuationController(model, service, viewModel, router, widget) {
	  /**
	   * @description
	   * Switches asValuation flag
	   *
	   * @public
	   * @name ValuationController#switchDisplayMode
	   * @type {function}
	   */
	  var switchDisplayMode = function switchDisplayMode() {
	    return router.getRoute() !== _constants.VARIATION_ROUTE ? router.goto(_constants.VARIATION_ROUTE) : router.goto(_constants.VALUATION_ROUTE);
	  };
	
	  /**
	   * @description
	   * Handles loading valuation data
	   *
	   * @public
	   * @name ValuationController#loadValuationData
	   * @type {function}
	   * @returns {promise.<array>}
	   */
	  var loadValuationData = function loadValuationData() {
	    return service.loadValuationData();
	  };
	
	  /**
	   * @description
	   * Sets selected granularity
	   *
	   * @public
	   * @name ValuationController#setGranularity
	   * @type {function}
	   * @param {string} granularity Granularity of valuation data to load
	   */
	  var setGranularity = viewModel.setGranularity;
	
	  /**
	   * @description
	   * Sets selected period
	   *
	   * @public
	   * @name ValuationController#setPeriod
	   * @type {function}
	   * @param {object} period Period to load data for
	   */
	  var setPeriod = function setPeriod(period) {
	    var periodParams = {
	      dateFrom: new Date(new Date(period.dateFrom).setHours(0, 0, 0, 0)),
	      dateTo: new Date(new Date(period.dateTo).setHours(23, 59, 59, 999))
	    };
	    viewModel.setPeriod(periodParams);
	  };
	
	  /**
	   * @name $onInit
	   * @type {function}
	   * @description Init logic of widget. Invokes initialization of view model
	   */
	  var $onInit = function $onInit() {
	    viewModel.init();
	
	    router.goto(widget.getBooleanPreference(_constants.Preferences.DISPLAY_VARIATION_CHART) ? _constants.VARIATION_ROUTE : _constants.VALUATION_ROUTE);
	  };
	
	  return {
	    $onInit: $onInit,
	    setGranularity: setGranularity,
	    setPeriod: setPeriod,
	    get state() {
	      return viewModel.getState();
	    },
	    get errors() {
	      return viewModel.getState().errors;
	    },
	    switchDisplayMode: switchDisplayMode,
	    loadValuationData: loadValuationData
	  };
	}

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libWmPortfolioViewModelHelper = __webpack_require__(88);
	
	var _controller = __webpack_require__(176);
	
	/**
	 * @name errors
	 * @type {errors} errors - errors model
	 */
	var errors = {
	  valuationError: null,
	  clearError: function clearError(key) {
	    errors[key] = null;
	  }
	};
	
	/**
	 * @name initialState
	 * @description Initial state of the widget
	 * @type {object}
	 * @property {object} valuation An object of valuation related data
	 * @property {boolean} initialLoading Boolean flag of initial loading
	 * @property {errors} errors Errors model
	 */
	var initialState = {
	  valuation: {
	    data: null,
	    loading: false,
	    isValuation: false,
	    granularity: null,
	    period: {
	      dateFrom: null,
	      dateTo: null
	    }
	  },
	  errors: errors,
	  route: {
	    name: _controller.VARIATION_ROUTE
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
	    beforeLoadValuationData: function beforeLoadValuationData() {
	      return {
	        valuation: {
	          loading: true
	        }
	      };
	    },
	
	    afterLoadValuationDataSuccess: function afterLoadValuationDataSuccess(state, raw) {
	      return {
	        valuation: {
	          data: raw.data,
	          loading: false
	        },
	        initialLoading: false,
	        errors: {
	          valuationError: null
	        }
	      };
	    },
	
	    afterLoadValuationDataError: function afterLoadValuationDataError(state, error) {
	      return {
	        errors: {
	          valuationError: error.code
	        },
	        valuation: {
	          loading: false
	        },
	        initialLoading: false
	      };
	    },
	
	    setGranularity: function setGranularity(state, granularity) {
	      return {
	        valuation: {
	          granularity: granularity
	        }
	      };
	    },
	
	    setPeriod: function setPeriod(state, _ref) {
	      var dateFrom = _ref.dateFrom,
	          dateTo = _ref.dateTo;
	      return {
	        valuation: {
	          period: {
	            dateFrom: dateFrom,
	            dateTo: dateTo
	          }
	        }
	      };
	    }
	  }));
	};

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (model, viewModel) {
	  return {
	    /**
	     * @description
	     * Handles loading of valuation data
	     *
	     * @public
	     * @name loadValuationData
	     * @type {function}
	     * @returns {promise.<array>}
	     */
	    loadValuationData: function loadValuationData() {
	      viewModel.beforeLoadValuationData();
	
	      var _viewModel$getState$v = viewModel.getState().valuation,
	          granularity = _viewModel$getState$v.granularity,
	          period = _viewModel$getState$v.period;
	
	      return model.getSelectedPortfolioId().then(function (portfolioId) {
	        return model.loadPerformanceValuation(portfolioId, granularity, period.dateFrom, period.dateTo);
	      }).then(viewModel.afterLoadValuationDataSuccess).catch(viewModel.afterLoadValuationDataError);
	    }
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-wm-valuation-ng.js.map