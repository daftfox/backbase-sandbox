(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("vendor-bb-chartjs"));
	else if(typeof define === 'function' && define.amd)
		define("ui-wm-chartjs-ranges-ng", ["vendor-bb-angular", "vendor-bb-chartjs"], factory);
	else if(typeof exports === 'object')
		exports["ui-wm-chartjs-ranges-ng"] = factory(require("vendor-bb-angular"), require("vendor-bb-chartjs"));
	else
		root["ui-wm-chartjs-ranges-ng"] = factory(root["vendor-bb-angular"], root["vendor-bb-chartjs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_93__, __WEBPACK_EXTERNAL_MODULE_99__) {
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

	module.exports = __webpack_require__(98);

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_93__;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(93);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _vendorBbChartjs = __webpack_require__(99);
	
	var _vendorBbChartjs2 = _interopRequireDefault(_vendorBbChartjs);
	
	var _component = __webpack_require__(100);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @description The angular module name
	 * @name default
	 * @type {string}
	 */
	exports.default = _vendorBbAngular2.default.module('ui-wm-chartjs-ranges-ng', []).value('chartjs', _vendorBbChartjs2.default).component('uiWmChartjsRangesNg', _component2.default).name;

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_99__;

/***/ }),

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(101);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _template = __webpack_require__(102);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name uiWmChartjsChartRangesComponent
	 * @type {object}
	 * @description Chart.js polar and radar charts combined
	 *
	 * @property {object} rangesData Data representing ranges on a chart
	 * @property {object} dotsData Data representing dots on a chart
	 */
	var uiWmChartjsChartRangesComponent = {
	  controller: ['$element', '$scope', 'chartjs', _controller2.default],
	  transclude: true,
	  bindings: {
	    rangesData: '<',
	    dotsData: '<'
	  },
	  template: _template2.default
	};
	
	exports.default = uiWmChartjsChartRangesComponent;
	
	/**
	 * Series item that is used for building charts.
	 * @typedef {object} ChartRangesSeries
	 * @property {string} name Label of item
	 * @property {number} value Value of item
	 * @property {number} min Lower value of optimal area for item
	 * @property {number} max Higher value of optimal area for item
	 */

/***/ }),

/***/ 101:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiWmChartjsChartRangesController;
	/* global angular */
	
	function uiWmChartjsChartRangesController($element, $scope, Chartjs) {
	  var _this = this;
	
	  var rangesCanvas = void 0;
	  var dotsCanvas = void 0;
	
	  /**
	   * @name createRangesChart
	   * @type {function}
	   * @inner
	   * @description
	   * Creates new ranges chart instance
	   */
	  var createRangesChart = function createRangesChart(_ref) {
	    var data = _ref.data,
	        options = _ref.options;
	
	    if (!data) {
	      return false;
	    }
	    rangesCanvas = $element[0].getElementsByTagName('canvas')[0];
	
	    return new Chartjs(rangesCanvas, {
	      type: 'horizontalBar',
	      data: data,
	      options: options
	    });
	  };
	
	  /**
	   * @name createDotsChart
	   * @type {function}
	   * @inner
	   * @description
	   * Creates new dots chart instance
	   */
	  var createDotsChart = function createDotsChart(_ref2) {
	    var data = _ref2.data,
	        options = _ref2.options;
	
	    if (!data) {
	      return false;
	    }
	    dotsCanvas = $element[0].getElementsByTagName('canvas')[1];
	
	    if (options && options.tooltips && options.tooltips.custom) {
	      var customTooltipFunc = options.tooltips.custom;
	      Object.assign(options.tooltips, { custom: function custom(tooltipModel) {
	          return customTooltipFunc(tooltipModel, $element[0], data.series);
	        } });
	    }
	
	    return new Chartjs(dotsCanvas, {
	      type: 'bubble',
	      data: data,
	      options: options
	    });
	  };
	
	  /**
	   * @name createCharts
	   * @type {function}
	   * @inner
	   * @description
	   * Creates new chart instances
	   */
	  var createCharts = function createCharts(dotsData, rangesData) {
	    if (!dotsData) {
	      return false;
	    }
	
	    _this.dotsChart = Object.assign(createDotsChart(dotsData), { $scope: $scope });
	    _this.rangesChart = Object.assign(createRangesChart(rangesData), { $scope: $scope });
	
	    return {
	      dotsChart: _this.dotsChart,
	      rangesChart: _this.rangesChart
	    };
	  };
	
	  /**
	   * @name updateDotsChart
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Redraws chart with the new data
	   *
	   * @param {array} currentValue Updated series of data for chart
	   * @returns {void}
	   */
	  var updateDotsChart = function updateDotsChart(_ref3) {
	    var data = _ref3.data,
	        options = _ref3.options;
	
	    if (!data) {
	      return;
	    }
	    if (options && options.tooltips && options.tooltips.custom) {
	      var customTooltipFunc = options.tooltips.custom;
	      Object.assign(options.tooltips, { custom: function custom(tooltipModel) {
	          return customTooltipFunc(tooltipModel, $element[0], data.series);
	        } });
	    }
	
	    _this.dotsChart.data = data;
	    _this.dotsChart.options = angular.merge(_this.dotsChart.options, options);
	    _this.dotsChart.update();
	  };
	
	  /**
	   * @name updateRangesChart
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Redraws chart with the new data
	   *
	   * @param {array} currentValue Updated series of data for chart
	   * @returns {void}
	   */
	  var updateRangesChart = function updateRangesChart(_ref4) {
	    var data = _ref4.data,
	        options = _ref4.options;
	
	    if (!data) {
	      return;
	    }
	    _this.rangesChart.data = data;
	    _this.rangesChart.options = angular.merge(_this.rangesChart.options, options);
	    _this.rangesChart.update();
	  };
	
	  /**
	   * @name updateCharts
	   * @type {function}
	   * @inner
	   *
	   * @param {object} dotsData Data for chart's dots
	   * @param {object} rangesData Data for chart's ranges
	   *
	   * @description
	   * Updates charts depending on received data
	   *
	   * @returns {void}
	   */
	  var updateCharts = function updateCharts(dotsData, rangesData) {
	    if (dotsData) {
	      updateDotsChart(dotsData);
	    }
	    if (rangesData) {
	      updateRangesChart(rangesData);
	    }
	  };
	
	  /**
	   * @name processCharts
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Updates or creates charts depending on received data
	   *
	   * @returns {void}
	   */
	  var processCharts = function processCharts() {
	    if (_this.rangesChart && _this.dotsChart) {
	      updateCharts(_this.dotsData, _this.rangesData);
	    } else {
	      createCharts(_this.dotsData, _this.rangesData);
	    }
	  };
	
	  /**
	   * AngularJS Lifecycle hook used to draw chart
	   *
	   * @name $postLink
	   * @type {function}
	   * @returns {void}
	   */
	  var $postLink = function $postLink() {
	    return processCharts();
	  };
	
	  /**
	   * @name $onChanges
	   * @type {function}
	   *
	   *
	   * @description
	   * AngularJS Lifecycle hook used to update chart
	   *
	   * @param {object} state Changed params
	   * @returns {void}
	   */
	  var $onChanges = function $onChanges() {
	    return processCharts();
	  };
	
	  Object.assign(this, {
	    $postLink: $postLink,
	    $onChanges: $onChanges
	  });
	}

/***/ }),

/***/ 102:
/***/ (function(module, exports) {

	module.exports = "<div class=\"position-relative\">\n  <div>\n    <canvas class=\"position-relative\"></canvas>\n    <canvas class=\"position-absolute fixed-top\"></canvas>\n  </div>\n  <div data-ng-transclude></div>\n</div>\n"

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-wm-chartjs-ranges-ng.js.map