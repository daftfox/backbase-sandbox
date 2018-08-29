(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-format-amount-ng"), require("lib-bb-model-errors"), require("lib-wm-colorset"), require("ui-bb-chartjs-chart-donut-ng"), require("lib-bb-styles"));
	else if(typeof define === 'function' && define.amd)
		define("ext-wm-allocations-donut-ng", ["ui-bb-loading-indicator-ng", "ui-bb-i18n-ng", "ui-bb-empty-state-ng", "ui-bb-format-amount-ng", "lib-bb-model-errors", "lib-wm-colorset", "ui-bb-chartjs-chart-donut-ng", "lib-bb-styles"], factory);
	else if(typeof exports === 'object')
		exports["ext-wm-allocations-donut-ng"] = factory(require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-format-amount-ng"), require("lib-bb-model-errors"), require("lib-wm-colorset"), require("ui-bb-chartjs-chart-donut-ng"), require("lib-bb-styles"));
	else
		root["ext-wm-allocations-donut-ng"] = factory(root["ui-bb-loading-indicator-ng"], root["ui-bb-i18n-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-format-amount-ng"], root["lib-bb-model-errors"], root["lib-wm-colorset"], root["ui-bb-chartjs-chart-donut-ng"], root["lib-bb-styles"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_15__) {
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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11);

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.helpers = undefined;
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(2);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbI18nNg = __webpack_require__(3);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(4);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBbFormatAmountNg = __webpack_require__(6);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _uiBbChartjsChartDonutNg = __webpack_require__(12);
	
	var _uiBbChartjsChartDonutNg2 = _interopRequireDefault(_uiBbChartjsChartDonutNg);
	
	var _helpers = __webpack_require__(13);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-wm-allocations-donut-ng
	 *
	 * @description
	 * Donut chart extension for allocations widget.
	 *
	 *
	 * @requires ui-bb-chartjs-chart-donut-ng
	 * @example
	 * <!-- allocations widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-wm-allocations-donut-ng</value>
	 * </property>
	 *
	 *
	 */
	
	var helpers = exports.helpers = _helpers2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbLoadingIndicatorNg2.default, _uiBbChartjsChartDonutNg2.default, _uiBbI18nNg2.default, _uiBbEmptyStateNg2.default, _uiBbFormatAmountNg2.default];
	
	/**
	 * Allocation type definition
	 * @typedef {Object} Allocation
	 * @property {string}
	 */

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _errors;
	
	var _libWmColorset = __webpack_require__(9);
	
	var _libBbModelErrors = __webpack_require__(8);
	
	var _constants = __webpack_require__(14);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* global angular */
	
	
	/**
	 * @description
	 * Map of error code to message, title and icon to display to user
	 *
	 * @public
	 * @name errors
	 * @type {object.<E_AUTH | E_CONNECTIVITY | E_UNEXPECTED | E_USER, errorMessageDescriptor>}
	 */
	var errors = (_errors = {}, _defineProperty(_errors, _libBbModelErrors.E_AUTH, {
	  message: 'model.error.auth.message',
	  title: 'model.error.auth.title',
	  icon: 'fa-sign-in-alt'
	}), _defineProperty(_errors, _libBbModelErrors.E_CONNECTIVITY, {
	  message: 'model.error.connectivity.message',
	  title: 'model.error.connectivity.title',
	  icon: 'fa-exclamation-triangle'
	}), _defineProperty(_errors, _libBbModelErrors.E_USER, {
	  message: 'model.error.user.message',
	  title: 'model.error.user.title',
	  icon: 'fa-user'
	}), _defineProperty(_errors, _libBbModelErrors.E_UNEXPECTED, {
	  message: 'model.error.unexpected.message',
	  title: 'model.error.unexpected.title',
	  icon: 'fa-server'
	}), _errors);
	
	exports.default = function (_ref) {
	  var stateContainer = _ref.stateContainer,
	      $filter = _ref.$filter,
	      getRule = _ref.getRule;
	
	  var numberFilter = $filter('number');
	  var getSymbol = function getSymbol(code) {
	    if (!code) {
	      return '';
	    }
	    var rule = getRule(code);
	    if (!rule) {
	      return '';
	    }
	    return rule.symbol || code;
	  };
	
	  /**
	   * @description
	   * Checks if allocations' data is available
	   *
	   * @name isAllocationsAvailable
	   * @type {function}
	   * @returns {boolean} returns true if allocations data is present
	   */
	  var isAllocationsAvailable = stateContainer.createSelector(function (state) {
	    return state.allocations.data.allocations.length > 0;
	  });
	
	  /**
	   * @description
	   * Compares allocations % value
	   *
	   * @name allocationsComparator
	   * @type {function}
	   * @returns {number} return positive or negative number
	   */
	  var allocationsComparator = function allocationsComparator(item1, item2) {
	    return item2.allocationPct - item1.allocationPct;
	  };
	
	  /**
	   * @description
	   * Sorts allocations by comparator
	   *
	   * @name getSortedAllocations
	   * @type {function}
	   * @param {array} allocations Array of allocations
	   * @returns {array} Allocations sorted by percentage value
	   */
	  var getSortedAllocations = function getSortedAllocations(allocations) {
	    return allocations.slice().sort(allocationsComparator);
	  };
	
	  /**
	   * @description
	   * Gets allocations data and transforms it for spiderweb chart
	   *
	   * @name getAllocations
	   * @type {function}
	   * @returns {array} Allocations' data
	   */
	  var getAllocations = stateContainer.createSelector(function (state) {
	    return getSortedAllocations(state.allocations.data.allocations);
	  });
	
	  /**
	   * @description
	   * Gets colors for chart
	   *
	   * @name getColors
	   * @type {function}
	   * @returns {array} Colors for chart
	   */
	  var getColors = stateContainer.createSelector(function (state) {
	    return (0, _libWmColorset.getColorset)(state.allocations.data.allocations.length);
	  });
	
	  /**
	   * @description
	   * Forms data series for chart
	   *
	   * @name getChartDataSeries
	   * @type {function}
	   * @returns {object} Data series with allocations' data for chart
	   */
	  var getChartDataSeries = stateContainer.createSelector(function () {
	    var allocations = getAllocations().filter(function (allocation) {
	      return allocation.allocationPct >= 0;
	    });
	
	    var labels = allocations.map(function (allocation) {
	      return allocation.name;
	    });
	    var data = allocations.map(function (allocation) {
	      return allocation.allocationPct;
	    });
	    var backgroundColor = allocations.map(function (_, index) {
	      return (0, _libWmColorset.getColorByIndex)(index);
	    });
	
	    return {
	      labels: labels,
	      datasets: [{
	        data: data,
	        backgroundColor: backgroundColor,
	        borderColor: _constants.BORDER_COLOR,
	        hoverBorderColor: _constants.BORDER_COLOR
	      }]
	    };
	  });
	
	  /**
	   * @description
	   * Checks if asset-classes is selected
	   *
	   * @name isClass
	   * @type {function}
	   * @returns {boolean}
	   */
	  var isClass = stateContainer.createSelector(function (state) {
	    return state.route.name === 'asset-classes';
	  });
	
	  var currentAnimatedSector = null;
	  var chartInstance = null;
	  var $scope = null;
	
	  /**
	   * @description
	   * Forms dataset for chart
	   *
	   * @name getDatatset
	   * @type {function}
	   * @returns {void}
	   */
	  var getDataset = function getDataset() {
	    var _chartInstance = chartInstance,
	        datasets = _chartInstance.config.data.datasets;
	
	    return datasets[0];
	  };
	
	  /**
	   * @description
	   * Gets array of all sectors for chart
	   *
	   * @name getSectorsArray
	   * @type {function}
	   * @returns {array} Array with sectors for chart
	   */
	  var getSectorsArray = function getSectorsArray() {
	    var datasets = getDataset();
	
	    // eslint-disable-next-line quote-props
	    var meta = datasets['_meta'];
	    var sectorsArray = meta[Object.keys(meta)[0]].data;
	
	
	    return sectorsArray;
	  };
	
	  /**
	   * @description
	   * Informs whether sector with given index is selected
	   *
	   * @name isSectorSelected
	   * @type {function}
	   * @param {number} index Index of a given sector
	   * @returns {boolean} Flag that informs whether given sector is selected
	   */
	  var isSectorSelected = function isSectorSelected(index) {
	    return (
	      // eslint-disable-next-line dot-notation
	      !!currentAnimatedSector && currentAnimatedSector['_index'] === index
	    );
	  };
	
	  /**
	   * @description
	   * Selects color or inactive color by given index
	   *
	   * @name colorSector
	   * @type {function}
	   * @param {string} color Sector's active color
	   * @param {number} index Index of sector
	   * @returns {string} Selected color
	   */
	  var colorSector = function colorSector(color, index) {
	    return isSectorSelected(index) || !currentAnimatedSector ? color : _constants.SECTOR_INACTIVE_COLOR;
	  };
	
	  /**
	   * @description
	   * Adds background colors for chart's datasets
	   *
	   * @name colorSectors
	   * @type {function}
	   * @returns {void}
	   */
	  var colorSectors = function colorSectors() {
	    Object.assign(getDataset(), { backgroundColor: getColors().map(colorSector) });
	  };
	
	  /**
	   * @description
	   * Changes chart's radius as if it is unselected
	   *
	   * @name unselectSector
	   * @type {function}
	   * @returns {void}
	   */
	  var unselectSector = function unselectSector() {
	    Object.assign(chartInstance, { outerRadius: chartInstance.outerRadius });
	  };
	
	  /**
	   * @description
	   * Counts new radius for sector
	   *
	   * @name countNewRadius
	   * @type {function}
	   * @param {number} outerRadius Radius for sector
	   * @returns {number} New radius value
	   */
	  var countNewRadius = function countNewRadius(outerRadius) {
	    var sectorWidth = outerRadius - outerRadius * (_constants.CUTOUT_PERCENTAGE / 100);
	    return outerRadius - sectorWidth + sectorWidth * _constants.CHART_EXPANSION;
	  };
	
	  /**
	   * @description
	   * Visualizes selection of sector on a chart
	   *
	   * @name selectSector
	   * @type {function}
	   * @param {object} sector Selected sector
	   * @returns {void}
	   */
	  var selectSector = function selectSector(sector) {
	    // eslint-disable-next-line dot-notation
	    Object.assign(sector['_model'], {
	      outerRadius: countNewRadius(chartInstance.outerRadius)
	    });
	    chartInstance.render(_constants.CHART_ANIMATION_DURATION, false);
	  };
	
	  /**
	   * @description
	   * Animates chart's sector on select
	   *
	   * @name tryToExpandSector
	   * @type {function}
	   * @param {object} sector Chart's selected sector
	   * @param {function} onSectorChange Function, fired when sector is changed
	   * @returns {void}
	   */
	  var tryToExpandSector = function tryToExpandSector(sector) {
	    var onSectorChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : angular.noop;
	
	    if (sector && sector === currentAnimatedSector) {
	      return;
	    }
	
	    currentAnimatedSector = sector;
	
	    unselectSector();
	    colorSectors();
	    chartInstance.update();
	    onSectorChange();
	
	    if (sector) {
	      selectSector(sector);
	    }
	  };
	
	  /**
	   * @description onClick handler with a visualisation for donut sector
	   *
	   * @name onDonutChartSectorHoverAnimation
	   * @type {function}
	   * @param {*} chartInstance - the Chart.js object
	   * @param {*} event - Chart.js click event object with a clicked area
	   * @returns {object} name and isSelected flag of the active sector (category)
	   */
	  var onDonutChartSectorHoverAnimation = function onDonutChartSectorHoverAnimation(event) {
	    var activeSector = chartInstance.getElementsAtEvent(event)[0];
	
	    tryToExpandSector(activeSector, function () {
	      return $scope.$apply();
	    });
	  };
	
	  /**
	   * @description
	   * Object with chart options that need to be overriden
	   *
	   * @name chartOptions
	   * @type {ChartjsSettings}
	   */
	  var chartOptions = {
	    layout: {
	      padding: {
	        left: _constants.CHART_SECTOR_SHIFT_SIZE,
	        right: _constants.CHART_SECTOR_SHIFT_SIZE,
	        top: _constants.CHART_SECTOR_SHIFT_SIZE,
	        bottom: _constants.CHART_SECTOR_SHIFT_SIZE
	      }
	    },
	    tooltips: {
	      enabled: false
	    },
	    hover: {
	      mode: 'index',
	      onHover: onDonutChartSectorHoverAnimation
	    },
	    cutoutPercentage: _constants.CUTOUT_PERCENTAGE
	  };
	
	  /**
	   * @description
	   * Event, fired when mouse enters chart's legend area
	   *
	   * @name onMouseLegendEnter
	   * @type {function}
	   * @param {number} index Index of hovered legend item
	   * @returns {void}
	   */
	  var onMouseLegendEnter = function onMouseLegendEnter(index) {
	    var sector = getSectorsArray()[index];
	    // eslint-disable-next-line dot-notation
	    tryToExpandSector(sector);
	  };
	
	  /**
	   * @description
	   * Event, fired when mouse leaves chart's legend area
	   *
	   * @name onMouseLegendLeave
	   * @type {function}
	   * @returns {void}
	   */
	  var onMouseLegendLeave = function onMouseLegendLeave() {
	    tryToExpandSector(null);
	  };
	
	  /**
	   * @description
	   * Holds options of chart's plugins
	   *
	   * @name chartPlugins
	   * @type {object}
	   */
	  var chartPlugins = {
	    afterInit: function afterInit(chart) {
	      chartInstance = chart;
	    }
	  };
	
	  /**
	   * @description
	   * Creates closure on parent's scope
	   *
	   * @name registerScope
	   * @type {function}
	   * @param {object} scope Parent's scope
	   * @returns {void}
	   */
	  var registerScope = function registerScope(scope) {
	    $scope = scope;
	  };
	
	  /**
	   * @description
	   * Appends + or - sign if number is positive or negative
	   *
	   * @public
	   * @name showSign
	   * @type {function}
	   * @param {number} number     Number inputed
	   *
	   * @returns {string}          String with appended sign and number
	   */
	  var showSign = function showSign(number) {
	    var absNumber = Math.abs(number).toFixed(_constants.PRECISION);
	    var sign = number > 0 ? '+' : '-';
	    var localizedNumber = numberFilter(absNumber, _constants.PRECISION);
	    return sign + ' ' + localizedNumber;
	  };
	
	  /**
	   * @description
	   * Returns allocation item by it's index
	   *
	   * @name getSelectedItem
	   * @type {function}
	   * @param {number} index Index of selected allocation item
	   * @returns {object} Selected allocation item
	   */
	  var getSelectedItem = function getSelectedItem(index) {
	    var state = stateContainer.getState();
	    return getSortedAllocations(state.allocations.data.allocations)[index];
	  };
	
	  /**
	   * @description
	   * Creates function which will be fired on chart's section click
	   *
	   * @name createSectionClickHandler
	   * @type {function}
	   * @param {function} viewAssetsInPositions
	   * Controller's function that has to be called on section click
	   * @param {object} event Mouse click event
	   * @param {object} item Chart's clicked item
	   * @returns {void}
	   */
	  var createSectionClickHandler = function createSectionClickHandler(viewAssetsInPositions) {
	    return function (event, item) {
	      if (!item[0]) {
	        return;
	      }
	      // eslint-disable-next-line no-underscore-dangle
	      viewAssetsInPositions(getSelectedItem(item[0]._index));
	    };
	  };
	
	  /**
	   * @description
	   * Fires given function on click and passes selected allocation to it
	   *
	   * @name onDetailsClick
	   * @type {function}
	   * @param {function} viewAssetsInPositions Controller's function that has to be called on click
	   * @param {number} index Index of selected allocation item
	   * @returns {void}
	   */
	  var onDetailsClick = function onDetailsClick(viewAssetsInPositions, index) {
	    viewAssetsInPositions(getSelectedItem(index));
	  };
	
	  /**
	   * @description
	   * Shows value as it is or adds two decimal zeroes if needed
	   *
	   * @name formatAmount
	   * @type {function}
	   * @param {number} value Value to format
	   * @returns {number} Formatted value
	   */
	  var formatAmount = function formatAmount(value) {
	    if (!value) {
	      return '';
	    }
	    var decimalsLength = (value.toString().split('.')[1] || []).length;
	    var fractionSize = decimalsLength < 2 ? 2 : decimalsLength;
	    return numberFilter(value, fractionSize);
	  };
	
	  /**
	   * @description
	   * Returns error object by error code
	   *
	   * @public
	   * @name getError
	   * @type {Object}
	   * @returns {errorMessageDescriptor} Descriptor of the error
	   */
	  var getError = function getError(code) {
	    return errors[code];
	  };
	
	  return {
	    getChartDataSeries: getChartDataSeries,
	    chartOptions: chartOptions,
	    chartPlugins: chartPlugins,
	    isAllocationsAvailable: isAllocationsAvailable,
	    getAllocations: getAllocations,
	    getColors: getColors,
	    isClass: isClass,
	    showSign: showSign,
	    onMouseLegendEnter: onMouseLegendEnter,
	    onMouseLegendLeave: onMouseLegendLeave,
	    isSectorSelected: isSectorSelected,
	    registerScope: registerScope,
	    createSectionClickHandler: createSectionClickHandler,
	    onDetailsClick: onDetailsClick,
	    getSymbol: getSymbol,
	    formatAmount: formatAmount,
	    getColorClassByIndex: _libWmColorset.getColorClassByIndex,
	    getError: getError
	  };
	};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CHART_ANIMATION_DURATION = exports.PRECISION = exports.CUTOUT_PERCENTAGE = exports.CHART_EXPANSION = exports.SECTOR_INACTIVE_COLOR = exports.BORDER_COLOR = exports.CHART_SECTOR_SHIFT_SIZE = undefined;
	
	var _libBbStyles = __webpack_require__(15);
	
	var _libBbStyles2 = _interopRequireDefault(_libBbStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CHART_SECTOR_SHIFT_SIZE = exports.CHART_SECTOR_SHIFT_SIZE = 20;
	var BORDER_COLOR = exports.BORDER_COLOR = 'transparent';
	var SECTOR_INACTIVE_COLOR = exports.SECTOR_INACTIVE_COLOR = (0, _libBbStyles2.default)('.btn-outline-secondary', 'color');
	var CHART_EXPANSION = exports.CHART_EXPANSION = 1.2;
	var CUTOUT_PERCENTAGE = exports.CUTOUT_PERCENTAGE = 65;
	var PRECISION = exports.PRECISION = 2;
	var CHART_ANIMATION_DURATION = exports.CHART_ANIMATION_DURATION = 400;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-wm-allocations-donut-ng.js.map