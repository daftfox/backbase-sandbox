(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib-bb-state-container-ng"), require("lib-wm-portfolio-view-model-helper"), require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("model-wm-portfolio-summary-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-wm-performance-ng", ["lib-bb-state-container-ng", "lib-wm-portfolio-view-model-helper", "vendor-bb-angular", "lib-bb-widget-extension-ng", "model-wm-portfolio-summary-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-wm-performance-ng"] = factory(require("lib-bb-state-container-ng"), require("lib-wm-portfolio-view-model-helper"), require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("model-wm-portfolio-summary-ng"));
	else
		root["widget-wm-performance-ng"] = factory(root["lib-bb-state-container-ng"], root["lib-wm-portfolio-view-model-helper"], root["vendor-bb-angular"], root["lib-bb-widget-extension-ng"], root["model-wm-portfolio-summary-ng"]);
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

	module.exports = __webpack_require__(138);

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

/***/ 138:
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
	
	var _controller = __webpack_require__(139);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _viewModel = __webpack_require__(140);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	var _service = __webpack_require__(141);
	
	var _service2 = _interopRequireDefault(_service);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var viewModelKey = 'viewModel'; /**
	                                 * @module widget-wm-performance-ng
	                                 *
	                                 * @description
	                                 * Portfolio performance widget
	                                 *
	                                 *
	                                 * @example
	                                 *  <div ng-controller="PortfolioPerformanceController as $ctrl">
	                                 *  </div>
	                                 */
	
	var performanceServiceKey = 'performanceService';
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('widget-wm-performance-ng', [_modelWmPortfolioSummaryNg2.default, _libBbStateContainerNg2.default]).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey, _viewModel2.default]).factory(performanceServiceKey, [_modelWmPortfolioSummaryNg.modelPortfolioSummaryKey, viewModelKey, _service2.default]).factory(_libBbWidgetExtensionNg.extensionContextKey, [performanceServiceKey, function (performanceService) {
	  return { performanceService: performanceService };
	}]).controller('PortfolioPerformanceController', [_modelWmPortfolioSummaryNg.modelPortfolioSummaryKey, viewModelKey, performanceServiceKey,
	/* into */
	_controller2.default]).run([viewModelKey, function (viewModel) {
	  viewModel.init();
	}]).name;
	
	/**
	* Portfolio cumulative performance
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

/***/ 139:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = PortfolioPerformanceController;
	/**
	 * @name PortfolioPerformanceController
	 * @ngkey PortfolioPerformanceController
	 * @type {object}
	 * @description
	 * Porftolio performance controller.
	 */
	
	function PortfolioPerformanceController(model, viewModel, performanceService) {
	  var $ctrl = this;
	
	  /**
	   * @description
	   * Handles loading of portfolio performance chart
	   *
	   * @private
	   * @name PortfolioPerformanceController#loadPerformanceChart
	   * @type {function}
	   * Load performance chart
	   * @returns {promise.<array>}
	   */
	  var loadPerformanceChart = function loadPerformanceChart() {
	    return performanceService.loadPerformanceChart();
	  };
	
	  /**
	   * @description
	   * Sets selected period
	   *
	   * @private
	   * @name PortfolioPerformanceController#setPeriod
	   * @type {function}
	   * @param {string} period Period to load data for
	   */
	  var setPeriod = function setPeriod(period) {
	    var periodParams = {
	      dateFrom: new Date(new Date(period.dateFrom).setHours(0, 0, 0, 0)),
	      dateTo: new Date(new Date(period.dateTo).setHours(23, 59, 59, 999))
	    };
	    viewModel.setPeriod(periodParams);
	    return loadPerformanceChart();
	  };
	
	  Object.assign($ctrl, {
	    setPeriod: setPeriod,
	    loadPerformanceChart: loadPerformanceChart
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

/***/ 140:
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
	 * @property {object} portfolioPerformance performance initial state object
	 *
	 * @property {boolean} initialLoading Boolean flag of initial loading
	 */
	var initialState = {
	  portfolioPerformance: {
	    data: null,
	    loading: false,
	    period: {
	      dateFrom: null,
	      dateTo: null
	    }
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
	    beforeLoadPerformance: function beforeLoadPerformance() {
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
	    afterLoadPerformanceSuccess: function afterLoadPerformanceSuccess(state, raw) {
	      return {
	        initialLoading: false,
	        portfolioPerformance: {
	          loading: false,
	          data: raw.data
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
	        errors: {
	          portfolioPerformanceError: error.code
	        }
	      };
	    }
	  }));
	};

/***/ }),

/***/ 141:
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
	     * @name PortfolioPerformanceController#loadPerformanceChart
	     * @type {function}
	     * Load performance chart data
	     * @returns {promise.<array>}
	     */
	    loadPerformanceChart: function loadPerformanceChart() {
	      var period = viewModel.getState().portfolioPerformance.period;
	      viewModel.beforeLoadPerformance();
	
	      return model.getSelectedPortfolioId().then(function (portfolioId) {
	        return model.loadPerformanceChart(portfolioId, period.dateFrom, period.dateTo);
	      }).then(viewModel.afterLoadPerformanceSuccess).catch(viewModel.afterLoadPerformanceError);
	    }
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-wm-performance-ng.js.map