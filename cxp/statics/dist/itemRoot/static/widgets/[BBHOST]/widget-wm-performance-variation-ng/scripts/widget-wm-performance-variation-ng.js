(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib-bb-state-container-ng"), require("lib-wm-portfolio-view-model-helper"), require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("model-wm-portfolio-summary-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-wm-performance-variation-ng", ["lib-bb-state-container-ng", "lib-wm-portfolio-view-model-helper", "vendor-bb-angular", "lib-bb-widget-extension-ng", "model-wm-portfolio-summary-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-wm-performance-variation-ng"] = factory(require("lib-bb-state-container-ng"), require("lib-wm-portfolio-view-model-helper"), require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("model-wm-portfolio-summary-ng"));
	else
		root["widget-wm-performance-variation-ng"] = factory(root["lib-bb-state-container-ng"], root["lib-wm-portfolio-view-model-helper"], root["vendor-bb-angular"], root["lib-bb-widget-extension-ng"], root["model-wm-portfolio-summary-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_86__, __WEBPACK_EXTERNAL_MODULE_88__, __WEBPACK_EXTERNAL_MODULE_93__, __WEBPACK_EXTERNAL_MODULE_125__, __WEBPACK_EXTERNAL_MODULE_126__) {
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

	module.exports = __webpack_require__(142);

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

/***/ 142:
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
	
	var _libBbStateContainerNg = __webpack_require__(86);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _controller = __webpack_require__(143);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _viewModel = __webpack_require__(144);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	var _service = __webpack_require__(145);
	
	var _service2 = _interopRequireDefault(_service);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var viewModelKey = 'viewModel'; /**
	                                 * @module widget-wm-performance-ng
	                                 *
	                                 * @description
	                                 * Portfolio performance variation widget
	                                 *
	                                 *
	                                 * @example
	                                 *  <div ng-controller="PortfolioPerformanceVariationController as $ctrl">
	                                 *  </div>
	                                 */
	
	var serviceKey = 'performanceVariationService';
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('widget-wm-performance-variation-ng', [_modelWmPortfolioSummaryNg2.default, _libBbStateContainerNg2.default]).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey, _viewModel2.default]).factory(serviceKey, [_modelWmPortfolioSummaryNg.modelPortfolioSummaryKey, viewModelKey, _service2.default]).factory(_libBbWidgetExtensionNg.extensionContextKey, [serviceKey, function (service) {
	  return { service: service };
	}]).controller('PortfolioPerformanceVariationController', [_modelWmPortfolioSummaryNg.modelPortfolioSummaryKey, viewModelKey, serviceKey, '$scope',
	/* into */
	_controller2.default]).run([viewModelKey, function (viewModel) {
	  viewModel.init();
	}]).name;
	
	/**
	 * Portfolio cumulative performance and variation
	 * @property {object}        period             - Dates period with from date to date values
	 * @property {data[]}        chartData          - Data in format suitable for
	 *                                                line chart UI component
	 */
	
	/**
	 * Data object used to draw line performance chart
	 * @typedef {object} data
	 * @property {date} dateFrom date from of period
	 * @property {date} dateTo date to of period
	 * @property {number} value point line chart value
	 */
	
	/**
	 * Dataset object for period
	 * @typedef {object} period
	 * @property {date} dateFrom date from of period
	 * @property {date} dateTo date to of period
	 */

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = PortfolioPerformanceVariationController;
	/**
	 * @name PortfolioPerformanceVariationController
	 * @ngkey PortfolioPerformanceVariationController
	 * @type {object}
	 * @description
	 * Porftolio performance variation controller.
	 */
	
	function PortfolioPerformanceVariationController(model, viewModel, performanceVariationService, $scope) {
	  var $ctrl = this;
	
	  /**
	   * @description
	   * Handles loading of portfolio performance variation chart
	   *
	   * @public
	   * @name PortfolioPerformanceVariationController#loadPerformanceVariationChart
	   * @type {function}
	   * Load performance variation chart
	   * @returns {promise.<array>}
	   */
	  var loadPerformanceVariationChart = performanceVariationService.loadPerformanceVariationChart;
	
	  /**
	   * @description
	   * Sets selected period
	   *
	   * @public
	   * @name PortfolioPerformanceVariationController#setPeriod
	   * @type {function}
	   * @param {string} period Period to load data for
	   */
	  var setPeriod = function setPeriod(period) {
	    var periodParams = {
	      dateFrom: new Date(new Date(period.value.dateFrom).setHours(0, 0, 0, 0)),
	      dateTo: new Date(new Date(period.value.dateTo).setHours(23, 59, 59, 999))
	    };
	    viewModel.setGranularity(period.granularity);
	    viewModel.setPeriod(periodParams);
	    return loadPerformanceVariationChart();
	  };
	
	  /**
	   * @description
	   * Sets performance active item in context of angular's digest cycle
	   *
	   * @public
	   * @name PortfolioPerformanceVariationController#setActiveItem
	   * @type {function}
	   * @param {number} index Index of selected item
	   */
	  var setActiveItem = function setActiveItem(index) {
	    $scope.$apply(function () {
	      viewModel.setActiveItem(index);
	    });
	  };
	
	  var $onInit = function $onInit() {
	    return loadPerformanceVariationChart();
	  };
	
	  Object.assign($ctrl, {
	    setPeriod: setPeriod,
	    loadPerformanceVariationChart: loadPerformanceVariationChart,
	    setActiveItem: setActiveItem,
	    $onInit: $onInit
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

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _libWmPortfolioViewModelHelper = __webpack_require__(88);
	
	var today = new Date();
	var startOfYear = new Date(today.getFullYear(), 0, 1);
	var endOfYear = new Date(new Date(today.getFullYear(), 11, 31).setHours(23, 59, 59, 999));
	
	/**
	 * @private
	 * @name initialState
	 * @description Initial state of widgets store
	 * @type {object}
	 * @property {object} portfolioPerformance Keeps data and options of portfolio performance
	 * @property {object} valuation Keeps data and options of portfolio valuation
	 * @property {object} errors Keeps errors is they occur
	 * @property {boolean} initialLoading Boolean flag of initial loading
	 */
	var initialState = {
	  portfolioPerformance: {
	    data: null,
	    loading: false,
	    granularity: 'monthly',
	    period: {
	      dateFrom: startOfYear,
	      dateTo: endOfYear
	    }
	  },
	  valuation: {
	    data: null,
	    loading: false
	  },
	  errors: {
	    portfolioPerformanceError: null
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
	    beforeLoadPerformanceVariation: function beforeLoadPerformanceVariation() {
	      return {
	        portfolioPerformance: {
	          loading: true
	        }
	      };
	    },
	    setPeriod: function setPeriod(state, _ref) {
	      var dateFrom = _ref.dateFrom,
	          dateTo = _ref.dateTo;
	      return {
	        portfolioPerformance: {
	          period: {
	            dateFrom: dateFrom,
	            dateTo: dateTo
	          }
	        }
	      };
	    },
	    setGranularity: function setGranularity(state, granularity) {
	      return {
	        portfolioPerformance: {
	          granularity: granularity
	        }
	      };
	    },
	    afterLoadPerformanceSuccess: function afterLoadPerformanceSuccess(state, _ref2) {
	      var _ref3 = _slicedToArray(_ref2, 2),
	          portfolioPerformance = _ref3[0],
	          valuation = _ref3[1];
	
	      return {
	        initialLoading: false,
	        portfolioPerformance: {
	          loading: false,
	          data: portfolioPerformance.data
	        },
	        valuation: {
	          loading: false,
	          data: valuation.data
	        },
	        errors: {
	          portfolioPerformanceError: null
	        }
	      };
	    },
	    afterLoadPerformanceError: function afterLoadPerformanceError(state, error) {
	      return {
	        initialLoading: false,
	        portfolioPerformance: {
	          loading: false,
	          data: null
	        },
	        valuation: {
	          loading: false,
	          data: null
	        },
	        errors: {
	          portfolioPerformanceError: error.code
	        }
	      };
	    },
	    setActiveItem: function setActiveItem(state, index) {
	      return {
	        activeItem: index
	      };
	    }
	  }));
	};

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (model, viewModel) {
	  return {
	
	    /**
	     * @description
	     * Handles loading performance data
	     *
	     * @public
	     * @name loadPerformanceChart
	     * @type {function}
	     * @returns {promise.<array>}
	     */
	    loadPerformanceVariationChart: function loadPerformanceVariationChart() {
	      var _viewModel$getState$p = viewModel.getState().portfolioPerformance,
	          granularity = _viewModel$getState$p.granularity,
	          period = _viewModel$getState$p.period;
	
	
	      viewModel.beforeLoadPerformanceVariation();
	
	      return model.getSelectedPortfolioId().then(function (portfolioId) {
	        return Promise.all([model.loadPerformanceChart(portfolioId, period.dateFrom, period.dateTo), model.loadPerformanceValuation(portfolioId, granularity, period.dateFrom, period.dateTo)]);
	      }).then(viewModel.afterLoadPerformanceSuccess).catch(viewModel.afterLoadPerformanceError);
	    }
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-wm-performance-variation-ng.js.map