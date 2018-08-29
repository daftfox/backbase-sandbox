(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("vendor-bb-chartjs"));
	else if(typeof define === 'function' && define.amd)
		define("ui-wm-chartjs-spiderweb-ng", ["vendor-bb-angular", "vendor-bb-chartjs"], factory);
	else if(typeof exports === 'object')
		exports["ui-wm-chartjs-spiderweb-ng"] = factory(require("vendor-bb-angular"), require("vendor-bb-chartjs"));
	else
		root["ui-wm-chartjs-spiderweb-ng"] = factory(root["vendor-bb-angular"], root["vendor-bb-chartjs"]);
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

	module.exports = __webpack_require__(103);

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_93__;

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_99__;

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(93);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _vendorBbChartjs = __webpack_require__(99);
	
	var _vendorBbChartjs2 = _interopRequireDefault(_vendorBbChartjs);
	
	var _component = __webpack_require__(104);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @description The angular module name
	 * @name default
	 * @type {string}
	 */
	exports.default = _vendorBbAngular2.default.module('ui-wm-chartjs-spiderweb-ng', []).value('chartjs', _vendorBbChartjs2.default).component('uiWmChartjsSpiderwebNg', _component2.default).name;

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(105);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name uiWmChartjsChartSpiderwebComponent
	 * @type {object}
	 * @description Chart.js polar and radar charts combined
	 *
	 * @property {ChartSpiderwebSeries[]} series Array used to draw Chartjs bar chart
	 * @property {object} radarOptions Options for radar chart. Default options of chart.js library
	 * @property {object} radarDatasetOptions Datasets' options for radar chart.
	 *                                        Default options of chart.js library's datasets
	 * @property {object} polarOptions Options for polar chart. Default options of chart.js library
	 * @property {object} polarDatasetOptions Datasets' options for polar chart.
	 *                                        Default options of chart.js library's datasets
	 */
	var uiWmChartjsChartSpiderwebComponent = {
	  controller: ['$element', '$scope', 'chartjs', '$timeout', _controller2.default],
	  transclude: {
	    chartSpiderwebTooltip: 'chartSpiderwebTooltip'
	  },
	  bindings: {
	    series: '<',
	    radarOptions: '<',
	    radarDatasetOptions: '<',
	    polarOptions: '<',
	    polarDatasetsOptions: '<'
	  },
	  template: '\n    <div>\n      <div class="position-relative">\n        <canvas class="position-relative"></canvas>\n        <div class="radar">\n          <canvas class="position-absolute fixed-top"></canvas>\n        </div>\n      </div>\n      <div data-ng-transclude="chartSpiderwebTooltip"></div>\n    </div>\n  '
	};
	
	exports.default = uiWmChartjsChartSpiderwebComponent;
	
	/**
	 * Series item that is used for building charts.
	 * @typedef {object} ChartSpiderwebSeries
	 * @property {string} name Label of item
	 * @property {number} value Value of item
	 * @property {number} min Lower value of optimal area for item
	 * @property {number} max Higher value of optimal area for item
	 */

/***/ }),

/***/ 105:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiWmChartjsChartSpiderwebController;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/* global angular, document */
	
	var CHART_PADDING = 8;
	
	/**
	 * @name getDefaultRadarOptions
	 * @type {function}
	 * @inner
	 * @description Default styling options for radar chart
	 * @returns {object} Default styling options for radar chart
	 */
	var getDefaultRadarOptions = function getDefaultRadarOptions() {
	  var chartMin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	  var chartMax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
	  return {
	    layout: {
	      padding: CHART_PADDING
	    },
	    title: {
	      display: false
	    },
	    legend: {
	      display: false
	    },
	    scale: {
	      ticks: {
	        beginAtZero: true,
	        min: chartMin,
	        max: chartMax,
	        fontColor: '#878787',
	        backdropColor: 'rgba(0, 0, 0, 0)',
	        fontSize: 12,
	        fontWeight: 400
	      },
	      gridLines: {
	        circular: true,
	        color: '#e3e3e3'
	      },
	      pointLabels: {
	        display: false
	      },
	      angleLines: {
	        color: '#e6e6e6'
	      }
	    }
	  };
	};
	
	/**
	 * @name getDefaultRadarDatasetOptions
	 * @type {function}
	 * @inner
	 * @description Default styling options for radar chart datasets
	 * @returns {object} Default styling options for radar chart datasets
	 */
	var getDefaultRadarDatasetOptions = function getDefaultRadarDatasetOptions() {
	  return {
	    backgroundColor: 'rgba(0, 0, 0, 0)',
	    borderColor: 'rgba(0, 0, 0, 0)',
	    borderWidth: 0,
	    pointRadius: 6,
	    pointBackgroundColor: ['#79CBFF', '#F48B8F', '#FFCC78', '#74D1BC', '#B181DA'],
	    pointBorderWidth: 0,
	    pointBorderColor: 'transparent',
	    pointHoverBorderWidth: 0,
	    pointHoverRadius: 6
	  };
	};
	
	/**
	 * @name getDefaultPolarOptions
	 * @type {function}
	 * @inner
	 * @description Default styling options for polar chart
	 * @returns {object} Default styling options for polar chart
	 */
	var getDefaultPolarOptions = function getDefaultPolarOptions() {
	  var chartMin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	  var chartMax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
	  var startAngle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -0.5 * Math.PI;
	  return {
	    layout: {
	      padding: CHART_PADDING
	    },
	    startAngle: startAngle,
	    legend: {
	      display: false
	    },
	    scale: {
	      ticks: {
	        beginAtZero: true,
	        min: chartMin,
	        max: chartMax,
	        fontColor: 'rgba(0, 0, 0, 0)',
	        backdropColor: 'rgba(0, 0, 0, 0)'
	      },
	      gridLines: {
	        display: false
	      }
	    }
	  };
	};
	
	/**
	 * @name getDefaultPolarDatasetsOptions
	 * @type {function}
	 * @inner
	 * @description Default styling options for polar chart datasets
	 * @returns {object} Default styling options for polar chart datasets
	 */
	var getDefaultPolarDatasetsOptions = function getDefaultPolarDatasetsOptions() {
	  return {
	    negative: {
	      backgroundColor: 'transparent',
	      borderColor: 'rgba(0, 0, 0, 0)'
	    },
	    min: {
	      backgroundColor: '#ffffff',
	      borderWidth: 1,
	      borderColor: '#ffffff'
	    },
	    max: {
	      backgroundColor: '#f2f2f2',
	      borderWidth: 0
	    }
	  };
	};
	
	/**
	 * @name getRadarChartData
	 * @type {function}
	 * @inner
	 *
	 * @description
	 * Forms data object for radar chart
	 *
	 * @param {array} series Array of values for radar chart
	 * @param {object} radarDatasetOptions Set of options for radar chart
	 * @returns {object} Data needed to draw radar chart
	 */
	var getRadarChartData = function getRadarChartData(series, radarDatasetOptions) {
	  var radarData = series.map(function (item) {
	    return item.value;
	  });
	  var labels = series.map(function (item) {
	    return item.name;
	  });
	
	  return {
	    datasets: [Object.assign({
	      data: radarData
	    }, getDefaultRadarDatasetOptions(), radarDatasetOptions)],
	    labels: labels
	  };
	};
	
	/**
	 * @name getPolarChartData
	 * @type {function}
	 * @inner
	 *
	 * @description
	 * Forms data object for polar chart
	 *
	 * @param {array} series Array of values for polar chart
	 * @param {object} polarDatasetsOptions Set of options for polar chart
	 * @returns {object} Data needed to draw polar chart
	 */
	var getPolarChartData = function getPolarChartData(series, polarDatasetsOptions) {
	  var minData = series.map(function (item) {
	    return item.min || 0;
	  });
	  var maxData = series.map(function (item) {
	    return item.max || 0;
	  });
	  var radarData = series.map(function (item) {
	    return item.value;
	  });
	  var radarDataMin = Math.min.apply(Math, _toConsumableArray(radarData));
	
	  return {
	    datasets: [Object.assign({
	      data: radarDataMin < 0 ? [0] : []
	    }, polarDatasetsOptions.negative), Object.assign({
	      data: minData
	    }, polarDatasetsOptions.min), Object.assign({
	      data: maxData
	    }, polarDatasetsOptions.max)],
	    labels: []
	  };
	};
	
	/**
	 * @name getStartAngle
	 * @type {function}
	 * @inner
	 *
	 * @description
	 * Calculates start angle for chart
	 *
	 * @param {number} seriesLength Amount of items in chart
	 * @returns {number} Start angle in radians
	 */
	var getStartAngle = function getStartAngle(seriesLength) {
	  return Math.PI * (1 / seriesLength - 0.5 - 2 / seriesLength);
	};
	
	/**
	 * @description
	 * Checks, whether element is hidden
	 *
	 * @name isHidden
	 * @type {function}
	 * @param {object} element Element to be checked
	 * @returns {boolean} Flag, that tells whether element is hidden
	 */
	var isHidden = function isHidden(element) {
	  var rect = element.getBoundingClientRect();
	  return rect.width === 0 || rect.height === 0;
	};
	
	function uiWmChartjsChartSpiderwebController($element, $scope, Chartjs, $timeout) {
	  var _this = this;
	
	  var canvasItems = $element[0].getElementsByTagName('canvas');
	  var radarWrapper = $element[0].querySelector('.radar');
	  var polarCanvas = canvasItems[0];
	  var radarCanvas = canvasItems[1];
	
	  var CHART_MAX = 100;
	
	  /**
	   * @name createPolarChart
	   * @type {function}
	   * @inner
	   * @description
	   * Creates new polar chart instance
	   * @param {array} series Array of data for chart
	   * @param {object} polarOptions Options for radar chart
	   * @param {object} polarDatasetsOptions Options for radar chart datasets
	   * @param {number} chartMin Chart's minimum
	   * @param {number} startAngle Start angle of chart
	   * @returns {void}
	   */
	  var createPolarChart = function createPolarChart(series, polarOptions, polarDatasetsOptions, chartMin, startAngle) {
	    var polarOptionsMerged = angular.merge(getDefaultPolarOptions(chartMin, CHART_MAX, startAngle), polarOptions);
	
	    var polarDatasetsOptionsMerged = angular.merge(getDefaultPolarDatasetsOptions(), polarDatasetsOptions);
	
	    _this.polarChart = Object.assign(new Chartjs(polarCanvas, {
	      type: 'polarArea',
	      data: getPolarChartData(series, polarDatasetsOptionsMerged),
	      options: polarOptionsMerged
	    }), { $scope: $scope });
	  };
	
	  /**
	   * @name createRadarChart
	   * @type {function}
	   * @inner
	   * @description
	   * Creates new radar chart instance
	   * @param {array} series Array of data for chart
	   * @param {object} radarOptions Options for radar chart
	   * @param {object} radarDatasetOptions Options for radar chart datasets
	   * @param {number} chartMin Chart's minimum
	   * @returns {void}
	   */
	  var createRadarChart = function createRadarChart(series, radarOptions, radarDatasetOptions, chartMin) {
	    var radarOptionsMerged = angular.merge(getDefaultRadarOptions(chartMin, CHART_MAX), radarOptions);
	
	    var radarDatasetOptionsMerged = angular.merge(getDefaultRadarDatasetOptions(), radarDatasetOptions);
	
	    if (radarOptionsMerged.tooltips && radarOptionsMerged.tooltips.custom) {
	      var customTooltipFunc = radarOptionsMerged.tooltips.custom;
	      radarOptionsMerged.tooltips.custom = function (tooltipModel) {
	        return customTooltipFunc(tooltipModel, $element[0], series);
	      };
	    }
	
	    _this.radarChart = new Chartjs(radarCanvas, {
	      type: 'radar',
	      data: getRadarChartData(series, radarDatasetOptionsMerged),
	      options: radarOptionsMerged
	    });
	  };
	
	  /**
	   * @name createCharts
	   * @type {function}
	   * @inner
	   * @description
	   * Creates new chart instances
	   * @param {array} series Array of data for chart
	   * @param {object} radarOptions Options for radar chart
	   * @param {object} radarDatasetOptions Options for radar chart datasets
	   * @param {object} polarOptions Options for polar chart
	   * @param {object} polarDatasetsOptions Options for polar chart datasets
	   * @returns {void}
	   */
	  var createCharts = function createCharts(series, radarOptions, radarDatasetOptions, polarOptions, polarDatasetsOptions) {
	    if (!series) {
	      return;
	    }
	
	    var seriesLength = series.length;
	    var radarData = series.map(function (item) {
	      return item.value;
	    });
	    var startAngle = getStartAngle(seriesLength);
	    var radarDataMin = Math.min.apply(Math, _toConsumableArray(radarData));
	    var chartMin = radarDataMin < 0 ? radarDataMin - 10 : -10;
	
	    createPolarChart(series, polarOptions, polarDatasetsOptions, chartMin, startAngle);
	    $timeout(function () {
	      return createRadarChart(series, radarOptions, radarDatasetOptions, chartMin);
	    }, 0);
	  };
	
	  /**
	   * @name updatePolarChart
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Redraws chart with the new data
	   *
	   * @param {array} series Updated series of data for chart
	   * @param {object} polarOptions Updated options for polar chart
	   * @param {object} polarDatasetsOptions Options of chart's datasets
	   * @returns {void}
	   */
	  var updatePolarChart = function updatePolarChart(series, polarOptions, polarDatasetsOptions) {
	    var datasetsOptions = angular.merge(getDefaultPolarDatasetsOptions(), polarDatasetsOptions);
	    _this.polarChart.options.startAngle = getStartAngle(series.length);
	    _this.polarChart.options = angular.merge(_this.polarChart.options, polarOptions);
	    _this.polarChart.data = getPolarChartData(series, datasetsOptions);
	    _this.polarChart.update();
	  };
	
	  /**
	   * @description
	   * Removes old radar canvase and creates new one
	   *
	   * @public
	   * @name resetRadarCanvas
	   * @type {function}
	   * @returns {void}
	   */
	  var resetRadarCanvas = function resetRadarCanvas() {
	    radarWrapper.innerHTML = '';
	    var newCanvas = document.createElement('canvas');
	    newCanvas.classList.add('position-absolute');
	    newCanvas.classList.add('fixed-top');
	    radarCanvas = newCanvas;
	    radarWrapper.appendChild(newCanvas);
	  };
	
	  /**
	   * @name updateRadarChart
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Redraws chart with the new data
	   *
	   * @param {array} series Updated series of data for chart
	   * @param {object} radarOptions Options of chart
	   * @param {object} radarDatasetOptions Options of chart's datasets
	   * @returns {void}
	   */
	  var updateRadarChart = function updateRadarChart(series, radarOptions, radarDatasetOptions) {
	    var radarData = series.map(function (item) {
	      return item.value;
	    });
	    var radarDataMin = Math.min.apply(Math, _toConsumableArray(radarData));
	    var chartMin = radarDataMin < 0 ? radarDataMin - 10 : -10;
	
	    resetRadarCanvas();
	    createRadarChart(series, radarOptions, radarDatasetOptions, chartMin);
	  };
	
	  /**
	   * @name updateCharts
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Triggers chart update with new data
	   *
	   * @param {array} series Updated series of data for charts
	   * @param {object} radarOptions Options of chart
	   * @param {object} radarDatasetOptions Options of chart's datasets
	   * @param {object} polarOptions Updated options for polar chart
	   * @param {object} polarDatasetsOptions Options of chart's datasets
	   * @returns {void}
	   */
	  var updateCharts = function updateCharts(series, radarOptions, radarDatasetOptions, polarOptions, polarDatasetsOptions) {
	    if (!series) {
	      return;
	    }
	    updatePolarChart(series, polarOptions, polarDatasetsOptions);
	    updateRadarChart(series, radarOptions, radarDatasetOptions);
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
	    if (!_this.series || _this.series.length === 0) {
	      return;
	    }
	    if (isHidden($element[0])) {
	      setTimeout(function () {
	        processCharts();
	      }, 500);
	
	      return;
	    }
	
	    if (_this.radarChart && _this.polarChart) {
	      updateCharts(_this.series, _this.radarOptions, _this.radarDatasetOptions, _this.polarOptions, _this.polarDatasetOptions);
	    } else {
	      createCharts(_this.series, _this.radarOptions, _this.radarDatasetOptions, _this.polarOptions, _this.polarDatasetOptions);
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

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-wm-chartjs-spiderweb-ng.js.map