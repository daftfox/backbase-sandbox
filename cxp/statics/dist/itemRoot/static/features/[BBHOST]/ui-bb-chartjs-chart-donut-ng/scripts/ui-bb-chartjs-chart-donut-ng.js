(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("vendor-bb-chartjs"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-chartjs-chart-donut-ng", ["vendor-bb-angular", "vendor-bb-chartjs"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-chartjs-chart-donut-ng"] = factory(require("vendor-bb-angular"), require("vendor-bb-chartjs"));
	else
		root["ui-bb-chartjs-chart-donut-ng"] = factory(root["vendor-bb-angular"], root["vendor-bb-chartjs"]);
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

	module.exports = __webpack_require__(35);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _vendorBbChartjs = __webpack_require__(32);
	
	var _vendorBbChartjs2 = _interopRequireDefault(_vendorBbChartjs);
	
	var _component = __webpack_require__(36);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @description The angular module name
	 * @name default
	 * @type {string}
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-chartjs-chart-donut-ng', []).value('chartjs', _vendorBbChartjs2.default).component('uiBbChartjsChartDonutNg', _component2.default).name; /**
	                                                                                                                                                                                                    * @module ui-bb-chartjs-chart-donut-ng
	                                                                                                                                                                                                    *
	                                                                                                                                                                                                    * @example
	                                                                                                                                                                                                    * // In an extension:
	                                                                                                                                                                                                    * // file: scripts/index.js
	                                                                                                                                                                                                    * import uiBbChartjsChartDonut from 'ui-bb-chartjs-chart-donut-ng';
	                                                                                                                                                                                                    *
	                                                                                                                                                                                                    * export const dependencyKeys = [
	                                                                                                                                                                                                    *   uiBbChartjsChartDonut,
	                                                                                                                                                                                                    * ];
	                                                                                                                                                                                                    *
	                                                                                                                                                                                                    * // file: templates/template.ng.html
	                                                                                                                                                                                                    * <ui-bb-chartjs-chart-donut-ng
	                                                                                                                                                                                                    *   data-series="$ctrl.series"
	                                                                                                                                                                                                    *   data-title="$ctrl.title"
	                                                                                                                                                                                                    *   data-cutout-percentage="30"
	                                                                                                                                                                                                    *   data-legend="ext.helpers.customizeLegend"
	                                                                                                                                                                                                    *   data-options="ext.helpers.chartOptions"
	                                                                                                                                                                                                    *   data-click-getter="ext.helpers.getClickHandler($ctrl)">
	                                                                                                                                                                                                    *     <!-- Optional content that can be inserted over the canvas -->
	                                                                                                                                                                                                    *     <div class="absolute-center">Total amount: 100</div>
	                                                                                                                                                                                                    * </ui-bb-chartjs-chart-donut-ng>
	                                                                                                                                                                                                    */

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(37);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name uiBbChartjsChartDonutComponent
	 * @type {object}
	 * @description
	 * Chart.js Donut chart component object
	 *
	 * @property {string} title Title of the chart
	 * @property {ChartjsDonutSeries} series Object used to draw Chartjs donut chart
	 * @property {ChartjsLegend} legend Object used to define chart's legend behavior and look
	 * @property {number} cutoutPercentage The percentage of the chart that is cut out of the middle.
	 * Example: 50 - for doughnut, 0 - for pie
	 * @property {function} tooltip Method for drawing custom tooltip. If this property is not
	 * used, default tooltip will be rendered. Otherwise, this method will be provided with:
	 * - tooltip: Chart.js tooltip object
	 * - element: tooltip DOM element
	 * - data: series used to draw chart
	 * - chart: Chart.js chart object
	 * Custom method needs at least to fill in internal HTML of custom tooltip
	 * by injecting the content into element provided
	 * - Example:
	 * customTooltip: (tooltip, element, data, chart) =>
	 * Object.assign(element, { innerHTML: '<div>Custom content</div>' }),
	 * @property {ChartjsPlugin[]} plugins
	 * @property {ChartjsSettings} options Object that overrides any property of
	 * Chart.js default settings object
	 * @property {ChartjsEvents} clickGetter Function, which returns click handler
	 * for the Donut chart.
	 */
	var component = {
	  controller: ['$element', '$scope', 'chartjs', _controller2.default],
	  bindings: {
	    title: '@',
	    series: '<',
	    legend: '<',
	    cutoutPercentage: '<',
	    tooltip: '<',
	    plugins: '<',
	    options: '<',
	    clickGetter: '&'
	  },
	  transclude: true,
	  template: '\n    <div class="donut-chart-container">\n      <ng-transclude></ng-transclude>\n      <div class="donut-chart-canvas-container position-relative">\n        <canvas></canvas>\n      </div>\n    </div>'
	};
	
	exports.default = component;
	
	/**
	 * Series object used to draw Chartjs donut chart. Compatible with BBSeries generated
	 * by model modules.
	 * @typedef {object} ChartjsDonutSeries
	 * @property {string[]} labels Array of chart labels
	 * @property {ChartjsDonutDataset[]} datasets Array of datasets
	 */
	
	/**
	 * Dataset object for donut chart as defined by Chart.js library.
	 * Compatible with BBDataset object used in BBSeries.
	 * It is required for it to contain data as array of values.
	 * More info about additional (optional) properties can be found at
	 * {@link http://www.chartjs.org/docs/latest/charts/doughnut.html#dataset-properties}
	 * @typedef {object} ChartjsDonutDataset
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
	 * Settings object with options available for Donut chart.
	 * More info {@link http://www.chartjs.org/docs/latest/charts/doughnut.html}
	 * @typedef {object} ChartjsSettings
	 */
	
	/**
	 * Function, which returns click handler for the Donut chart.
	 * More info {@link http://www.chartjs.org/docs/latest/general/interactions/events.html}
	 * @typedef {object} ChartjsEvents
	 */

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(38);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var uiBbChartjsChartDonutController = function uiBbChartjsChartDonutController($element, $scope, Chartjs) {
	  var $ctrl = this;
	
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
	   * @name getChartOptions
	   * @type {function}
	   * @inner
	   * @description
	   * Builds JSON structure needed for chart rendering
	   */
	  var getChartOptions = function getChartOptions() {
	    // legend is displayed by default, so if there is no legend data
	    // create an object that forces it to be hidden
	    var legend = $ctrl.legend ? Object.assign($ctrl.legend, { display: true }) : { display: false };
	
	    var options = {
	      title: {
	        display: !!$ctrl.title,
	        text: $ctrl.title
	      },
	      legend: legend,
	      cutoutPercentage: $ctrl.cutoutPercentage,
	      tooltips: {
	        enabled: !$ctrl.HAS_CUSTOM_TOOLTIP,
	        custom: $ctrl.HAS_CUSTOM_TOOLTIP ? function (tooltip) {
	          return drawTooltip(tooltip);
	        } : null
	      }
	    };
	    _utils2.default.removeEmptyProperties(options);
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
	      type: 'doughnut',
	      options: angular.merge(getChartOptions(), $ctrl.options, {
	        onClick: $ctrl.clickGetter()
	      }),
	      data: $ctrl.series,
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
	    $ctrl.chart.options = angular.merge($ctrl.chart.options, $ctrl.options);
	    $ctrl.chart.update();
	  };
	
	  /**
	   * AngularJS Lifecycle hook used to initialize the controller
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
	}; /* global angular, document */
	
	/**
	 * @name uiBbChartjsChartDonutController
	 * @ngkey uiBbChartjsChartDonutController
	 * @type {function}
	 *
	 * @description
	 * Chart.js donut chart controller
	 */
	
	exports.default = uiBbChartjsChartDonutController;

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/* global angular */
	// TODO: move to common library
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
	
	exports.default = {
	  removeEmptyProperty: removeEmptyProperty,
	  removeEmptyProperties: removeEmptyProperties
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-chartjs-chart-donut-ng.js.map