(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("vendor-bb-chartjs"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-chartjs-chart-line-ng", ["vendor-bb-angular", "vendor-bb-chartjs"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-chartjs-chart-line-ng"] = factory(require("vendor-bb-angular"), require("vendor-bb-chartjs"));
	else
		root["ui-bb-chartjs-chart-line-ng"] = factory(root["vendor-bb-angular"], root["vendor-bb-chartjs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_32__) {
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

	module.exports = __webpack_require__(39);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _vendorBbChartjs = __webpack_require__(32);
	
	var _vendorBbChartjs2 = _interopRequireDefault(_vendorBbChartjs);
	
	var _component = __webpack_require__(40);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @description The angular module name
	 * @name default
	 * @type {string}
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-chartjs-chart-line-ng', []).value('chartjs', _vendorBbChartjs2.default).component('uiBbChartjsChartLineNg', _component2.default).name; /**
	                                                                                                                                                                                                  * @module ui-bb-chartjs-chart-line-ng
	                                                                                                                                                                                                  *
	                                                                                                                                                                                                  * @example
	                                                                                                                                                                                                  * // In an extension:
	                                                                                                                                                                                                  * // file: scripts/index.js
	                                                                                                                                                                                                  * import uiBbChartjsChartLine from 'ui-bb-chartjs-chart-line-ng';
	                                                                                                                                                                                                  *
	                                                                                                                                                                                                  * export const dependencyKeys = [
	                                                                                                                                                                                                  *   uiBbChartjsChartLine,
	                                                                                                                                                                                                  * ];
	                                                                                                                                                                                                  *
	                                                                                                                                                                                                  * // file: templates/template.ng.html
	                                                                                                                                                                                                  * <ui-bb-chartjs-chart-line-ng class="col-xs-12"
	                                                                                                                                                                                                  *   data-series="$ctrl.series"
	                                                                                                                                                                                                  *   data-title="$ctrl.title"
	                                                                                                                                                                                                  *   data-legend="ext.helpers.customizeLegend"
	                                                                                                                                                                                                  *   data-tooltip="ext.helpers.customizeTooltip"
	                                                                                                                                                                                                  *   data-plugins="ext.helpers.chartPlugins"
	                                                                                                                                                                                                  *   data-options="ext.helpers.chartOptions"
	                                                                                                                                                                                                  *   data-x-formatter="ext.helpers.formatX"
	                                                                                                                                                                                                  *   data-y-formatter="ext.helpers.formatY"
	                                                                                                                                                                                                  * />
	                                                                                                                                                                                                  */

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(41);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name uiBbChartjsChartLineComponent
	 * @type {object}
	 * @description
	 * Chart.js line chart component object
	 *
	 * @property {string} title Title of the chart
	 * @property {ChartjsLineSeries} series Object used to draw Chartjs line chart
	 * @property {function} tooltip Method for drawing custom tooltip. If this property is not
	 * used, default tooltip will be rendered. Otherwise, this method will be provided with:
	 * <div>tooltip: Chart.js tooltip object</div>
	 * <div>element: tooltip DOM element</div>
	 * <div>data: series used to draw chart</div>
	 * <div>chart: Chart.js chart object</div>
	 * Custom method needs at least to fill in internal HTML of custom tooltip
	 * by injecting the content into element provided
	 * <div>Example:</div>
	 * customTooltip: (tooltip, element, data, chart) =>
	 * Object.assign(element, { innerHTML: '&lt;div&gt;Custom content&lt;/div&gt;' }),
	 * @property {ChartjsLegend} legend Object used to define chart's legend behavior and look
	 * @property {ChartjsPlugin[]} plugins
	 * Array of plugins that will be registered upon chart rendering
	 * @property {function} xFormatter Callback that receives all x axes ticks and series data.
	 * It should return array of formatted ticks
	 * @property {function} yFormatter Callback that receives all y axes ticks and series data.
	 * It should return array of formatted ticks
	 * @property {ChartjsSettings} options Object that overrides any property of
	 * Chart.js default settings object
	 */
	var uiBbChartjsChartLineComponent = {
	  controller: ['$element', '$scope', 'chartjs', _controller2.default],
	  bindings: {
	    title: '@',
	    series: '<',
	    tooltip: '<',
	    legend: '<',
	    plugins: '<',
	    xFormatter: '&',
	    yFormatter: '&',
	    options: '<'
	  },
	  template: '\n    <div class="line-chart-container">\n      <canvas></canvas>\n    </div>'
	};
	
	exports.default = uiBbChartjsChartLineComponent;
	
	/**
	 * Series object used to draw Chartjs line chart. Compatible with BBSeries generated
	 * by model modules.
	 * @typedef {object} ChartjsLineSeries
	 * @property {string[]} labels Array of x axis labels
	 * @property {ChartjsLineDataset[]} datasets Array of datasets
	 */
	
	/**
	 * Dataset object for line chart as defined by Chart.js library.
	 * Compatible with BBDataset object used in BBSeries.
	 * It is required for it to contain data as array of values.
	 * More info about additional (optional) properties can be found at
	 * {@link http://www.chartjs.org/docs/latest/charts/line.html#dataset-properties}
	 * @typedef {object} ChartjsLineDataset
	 * @property {number[]} data Array of data points to be drawn for each label
	 */
	
	/**
	 * Legend object as defined in Chart.js library.
	 * More info
	 * {@link http://www.chartjs.org/docs/latest/configuration/legend.html#configuration-options}
	 * @typedef {object} ChartjsLegend
	 */
	
	/**
	 * Plugin object as defined in Chart.js library. It should define at least one hook from
	 * {@link http://www.chartjs.org/docs/latest/developers/plugins.html#plugin-core-api}
	 * @typedef {object} ChartjsPlugin
	 */
	
	/**
	 * Settings object with options available for line chart.
	 * More info {@link http://www.chartjs.org/docs/latest/charts/line.html}
	 * @typedef {object} ChartjsSettings
	 */

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/* global angular, document */
	/**
	 * @name uiBbChartjsChartLineController
	 * @ngkey uiBbChartjsChartLineController
	 * @type {function}
	 *
	 * @description
	 * Chart.js line chart controller
	 */
	var uiBbChartjsChartLineController = function uiBbChartjsChartLineController($element, $scope, Chartjs) {
	  var $ctrl = this;
	
	  /**
	   * @name removeEmptyProperty
	   * @type {function}
	   * @inner
	   * @description
	   * Returns a copy of the scanned object without selected property
	   * if the property is null or undefined
	   *
	   * @param {string} prop Name of the property
	   * @param {object} obj Object to be scanned
	   * @returns {object} Cleared object
	   */
	  var removeEmptyProperty = function removeEmptyProperty(prop, obj) {
	    var target = obj;
	    var item = target[prop];
	    if (item === null || item === undefined) {
	      delete target[prop];
	    } else if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
	      angular.forEach(item, function (value, key) {
	        return removeEmptyProperty(key, item);
	      });
	    }
	
	    return target;
	  };
	
	  /**
	   * @name removeEmptyProperties
	   * @type {function}
	   * @inner
	   * @description
	   * Removes all null or undefined properties from an object
	   *
	   * @param {object} obj Object to be scanned
	   */
	  var removeEmptyProperties = function removeEmptyProperties(obj) {
	    return angular.forEach(obj, function (value, key) {
	      return removeEmptyProperty(key, obj);
	    });
	  };
	
	  /**
	   * @name drawTooltip
	   * @type {function}
	   * @inner
	   * @description
	   * In case there is custom tooltip callback, this method will prepare
	   * DOM element and provide reference to it, additionally with all
	   * series data and chart instance
	   *
	   * @param {object} tooltip Chart.js tooltip object
	   */
	  var drawTooltip = function drawTooltip(tooltip) {
	    // retrieve existing tooltip DOM element or create a new one
	    var tooltipDataAttr = 'data-chartjs-tooltip';
	    var tooltipSelector = 'div[' + tooltipDataAttr + ']';
	    var tooltipEl = $element[0].querySelector(tooltipSelector);
	    if (!tooltipEl) {
	      tooltipEl = document.createElement('div');
	      tooltipEl.setAttribute(tooltipDataAttr, '');
	      // prevent flickering when hovering above tooltip that covers part of the chart
	      tooltipEl.setAttribute('onmouseenter', 'event.target.style.display = \'inherit\'');
	      tooltipEl.setAttribute('onmouseleave', 'event.target.style.display = \'none\'');
	      $ctrl.chart.canvas.parentNode.appendChild(tooltipEl);
	    }
	
	    // if tooltip should not be visible, hide it and stop execution
	    if (tooltip.opacity === 0) {
	      tooltipEl.style.display = 'none';
	      return;
	    }
	
	    tooltipEl.style.display = 'inherit';
	    // execute custom tooltip builder
	    $ctrl.tooltip(tooltip, tooltipEl, $ctrl.series, $ctrl.chart);
	  };
	
	  /**
	   * @name getAxesOptions
	   * @type {function}
	   * @inner
	   * @description
	   * Builds axes JSON configuration
	   *
	   * @param {function} formatter Axis tick formatter
	   */
	  var getAxesOptions = function getAxesOptions(formatter) {
	    return [{
	      beforeCalculateTickRotation: function beforeCalculateTickRotation(axis) {
	        Object.assign(axis, {
	          ticks: formatter(axis.ticks, $ctrl.series)
	        });
	      }
	    }];
	  };
	
	  /**
	   * @name getChartOptions
	   * @type {function}
	   * @inner
	   * @description
	   * Builds JSON structure needed for chart rendering
	   */
	  var getChartOptions = function getChartOptions() {
	    // if there are no formatters use dummy callback
	    var xFormatter = $ctrl.xFormatter() || function (v) {
	      return v;
	    };
	    var yFormatter = $ctrl.yFormatter() || function (v) {
	      return v;
	    };
	    // legend is displayed by default, so if there is no legend data
	    // create an object that forces it to be hidden
	    var legend = $ctrl.legend ? Object.assign($ctrl.legend, { display: true }) : { display: false };
	
	    var options = {
	      title: {
	        display: !!$ctrl.title,
	        text: $ctrl.title
	      },
	      scales: {
	        xAxes: getAxesOptions(xFormatter),
	        yAxes: getAxesOptions(yFormatter)
	      },
	      legend: legend,
	      tooltips: {
	        enabled: !$ctrl.HAS_CUSTOM_TOOLTIP,
	        custom: $ctrl.HAS_CUSTOM_TOOLTIP ? function (tooltip) {
	          return drawTooltip(tooltip);
	        } : null
	      }
	    };
	
	    removeEmptyProperties(options);
	    return options;
	  };
	
	  /**
	   * @name createChart
	   * @type {function}
	   * @inner
	   * @description
	   * Creates new chart instance
	   */
	  var createChart = function createChart() {
	    // generate chart with all the options combined
	    $ctrl.chart = Object.assign(new Chartjs($ctrl.element, {
	      type: 'line',
	      data: $ctrl.series,
	      options: angular.merge(getChartOptions(), $ctrl.options),
	      plugins: $ctrl.plugins
	    }), { $scope: $scope });
	  };
	
	  /**
	   * @name updateChart
	   * @type {function}
	   * @inner
	   * @description
	   * Redraws chart with the new data
	   */
	  var updateChart = function updateChart() {
	    $ctrl.chart.data = $ctrl.series;
	    $ctrl.chart.options = angular.merge($ctrl.chart.config.options, $ctrl.options);
	    $ctrl.chart.update();
	  };
	
	  /**
	   * AngularJS Lifecycle hook used to draw chart
	   *
	   * @name $onInit
	   * @type {function}
	   * @returns {void}
	   */
	  var $onInit = function $onInit() {
	    $ctrl.element = $element.find('canvas')[0];
	    $ctrl.HAS_CUSTOM_TOOLTIP = typeof $ctrl.tooltip === 'function';
	
	    createChart();
	  };
	
	  /**
	   * AngularJS Lifecycle hook used to update chart
	   *
	   * @name $onChanges
	   * @type {function}
	   * @returns {void}
	   */
	  var $onChanges = function $onChanges() {
	    // Skip update before init
	    if ($ctrl.chart) {
	      updateChart();
	    }
	  };
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	    $onChanges: $onChanges
	  });
	};
	
	exports.default = uiBbChartjsChartLineController;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-chartjs-chart-line-ng.js.map