(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-format-amount-ng"), require("lib-bb-model-errors"), require("lib-wm-colorset"), require("lib-bb-styles"), require("ui-wm-chartjs-ranges-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-wm-allocations-ranges-ng", ["ui-bb-loading-indicator-ng", "ui-bb-i18n-ng", "ui-bb-empty-state-ng", "ui-bb-format-amount-ng", "lib-bb-model-errors", "lib-wm-colorset", "lib-bb-styles", "ui-wm-chartjs-ranges-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-wm-allocations-ranges-ng"] = factory(require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-format-amount-ng"), require("lib-bb-model-errors"), require("lib-wm-colorset"), require("lib-bb-styles"), require("ui-wm-chartjs-ranges-ng"));
	else
		root["ext-wm-allocations-ranges-ng"] = factory(root["ui-bb-loading-indicator-ng"], root["ui-bb-i18n-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-format-amount-ng"], root["lib-bb-model-errors"], root["lib-wm-colorset"], root["lib-bb-styles"], root["ui-wm-chartjs-ranges-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_22__) {
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

	module.exports = __webpack_require__(21);

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
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
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
	
	var _uiWmChartjsRangesNg = __webpack_require__(22);
	
	var _uiWmChartjsRangesNg2 = _interopRequireDefault(_uiWmChartjsRangesNg);
	
	var _uiBbFormatAmountNg = __webpack_require__(6);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _helpers = __webpack_require__(23);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-wm-allocations-ranges-ng
	 *
	 * @description
	 * Ranges chart extension for allocations widget.
	 *
	 * @requires ui-wm-chartjs-ranges-ng
	 * @example
	 * <!-- allocations widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-wm-allocations-ranges-ng</value>
	 * </property>
	 */
	
	var helpers = exports.helpers = _helpers2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbLoadingIndicatorNg2.default, _uiBbI18nNg2.default, _uiBbEmptyStateNg2.default, _uiWmChartjsRangesNg2.default, _uiBbFormatAmountNg2.default];
	
	/**
	 * Allocation type definition
	 * @typedef {Object} Allocation
	 * @property {string}
	 */

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _errors;
	
	var _libBbModelErrors = __webpack_require__(8);
	
	var _libWmColorset = __webpack_require__(9);
	
	var _constants = __webpack_require__(24);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
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
	      $filter = _ref.$filter;
	
	  var numberFilter = $filter('number');
	
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
	   * @name getAllocationsRangesOptions
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Options for ranges chart
	   *
	   * @param {number} minX Minimal value of dataset
	   * @param {number} maxX Maximal value of chart
	   * @returns {object} Options for ranges chart
	   */
	  var getAllocationsRangesOptions = function getAllocationsRangesOptions(minX, maxX) {
	    return {
	      responsive: true,
	      scales: {
	        xAxes: [{
	          gridLines: {
	            zeroLineColor: minX < 0 ? _constants.ZERO_LINE_ACTIVE_COLOR : _constants.TRANSPARENT
	          },
	          stacked: true,
	          ticks: {
	            min: minX,
	            max: maxX,
	            stepSize: _constants.STEP_SIZE,
	            fontColor: _constants.DEFAULT_FONT_COLOR,
	            fontSize: _constants.FONT_SIZE
	          }
	        }],
	        yAxes: [{
	          stacked: true,
	          barPercentage: _constants.BAR_PERCENTAGE,
	          ticks: {
	            fontColor: _constants.DEFAULT_FONT_COLOR,
	            fontSize: _constants.FONT_SIZE
	          }
	        }]
	      },
	      legend: { display: false }
	    };
	  };
	
	  /**
	   * @description
	   * Gets allocations data and transforms it for ranges chart
	   *
	   * @name getAllocationsRangesData
	   * @type {function}
	   * @returns {array} Allocations' data transformed for ranges chart
	   */
	  var getAllocationsRangesData = stateContainer.createSelector(function (state) {
	    var emptyData = [];
	    var rangesData = [];
	    var labels = [];
	
	    state.allocations.data.allocations.slice().sort(function (item1, item2) {
	      if (item1.allocationPct === item2.allocationPct) {
	        if (item1.name < item2.name) return -1;
	        if (item1.name > item2.name) return 1;
	        return 0;
	      }
	      return item2.allocationPct - item1.allocationPct;
	    }).forEach(function (allocation) {
	      var recommendedRange = allocation.allocationMaxPct - allocation.allocationMinPct;
	      emptyData.push(allocation.allocationMinPct);
	      rangesData.push(recommendedRange > 0 ? recommendedRange : 0);
	      labels.push(allocation.name);
	    });
	
	    var minValue = Math.min.apply(Math, _toConsumableArray(state.allocations.data.allocations.map(function (item) {
	      return item.allocationPct;
	    })));
	    var maxValue = Math.max.apply(Math, _toConsumableArray(state.allocations.data.allocations.map(function (item) {
	      return item.allocationPct;
	    })));
	    var maxRangesValue = Math.max.apply(Math, _toConsumableArray(state.allocations.data.allocations.map(function (item) {
	      return item.allocationMaxPct || 0;
	    })));
	    var minX = minValue >= 0 ? 0 : Math.floor(minValue / 10) * 10;
	    var maxX = Math.ceil(Math.max(maxValue, maxRangesValue) / 10) * 10;
	
	    return {
	      data: {
	        labels: labels,
	        datasets: [{
	          data: emptyData,
	          backgroundColor: _constants.TRANSPARENT
	        }, {
	          data: rangesData,
	          backgroundColor: _constants.RANGES_BAR_BACKGROUND
	        }]
	      },
	      options: getAllocationsRangesOptions(minX, maxX)
	    };
	  });
	
	  /**
	   * @description
	   * Sets styling and content for custom tooltip
	   *
	   * @name getCustomTooltip
	   * @type {function}
	   * @param {object} tooltipModel Chartjs model of selected item
	   * @param {object} tooltipWrap Tooltip element link
	   * @param {array} series Array of chart data
	   * @returns {void}
	   */
	  var getCustomTooltip = function getCustomTooltip(tooltipModel, tooltipWrap, series) {
	    var tooltipEl = tooltipWrap.querySelector('.popover');
	    var arrow = tooltipEl.querySelector('.arrow');
	
	    if (tooltipModel.opacity === 0) {
	      tooltipEl.classList.remove('show');
	      if (!tooltipEl.classList.contains('d-none')) {
	        tooltipEl.classList.add('d-none');
	      }
	      return;
	    }
	
	    var index = tooltipModel.dataPoints[0].datasetIndex;
	    var item = series[index];
	
	    tooltipEl.classList.remove('bs-popover-right');
	    tooltipEl.classList.remove('bs-popover-left');
	    tooltipEl.classList.add('bs-popover-' + (tooltipModel.xAlign === 'left' ? 'right' : 'left'));
	
	    var titleWrapper = tooltipWrap.querySelector('.popover-title-content');
	    titleWrapper.innerHTML = item.name;
	
	    var circleWrapper = tooltipWrap.querySelector('.popover-title-circle');
	    circleWrapper.style.color = tooltipModel.labelColors[0].backgroundColor;
	
	    var valuationCurrency = tooltipWrap.querySelector('.popover-currency');
	    valuationCurrency.innerHTML = item.valuation.currencyCode;
	
	    var valuationWrapper = tooltipWrap.querySelector('.popover-valuation');
	    valuationWrapper.innerHTML = numberFilter(item.valuation.amount, 2);
	
	    var percentageWrapper = tooltipWrap.querySelector('.popover-percentage');
	    percentageWrapper.innerHTML = numberFilter(item.value, 2) + '%';
	
	    var rangesWrapper = tooltipWrap.querySelector('.popover-ranges');
	    var rangeValuesWrapper = tooltipWrap.querySelector('.popover-range');
	    if (!item.min && !item.max) {
	      Object.assign(rangesWrapper.style, { display: 'none' });
	    } else {
	      Object.assign(rangesWrapper.style, { display: 'block' });
	      rangeValuesWrapper.innerHTML = numberFilter(item.min) + '% - ' + numberFilter(item.max) + '%';
	    }
	
	    tooltipEl.classList.remove('d-none');
	
	    var left = void 0;
	    if (tooltipModel.xAlign === 'right') {
	      left = tooltipModel.caretX - tooltipEl.offsetWidth - _constants.POPOVER_SHIFT + 'px';
	    } else {
	      left = tooltipModel.caretX + _constants.POPOVER_SHIFT + 'px';
	    }
	
	    Object.assign(tooltipEl.style, {
	      left: left,
	      top: tooltipModel.caretY + 'px',
	      transform: 'translateY(-50%)'
	    });
	    Object.assign(arrow.style, {
	      top: tooltipEl.offsetHeight / 2 + 'px',
	      transform: 'translateY(-50%)'
	    });
	    tooltipEl.classList.add('show');
	  };
	
	  /**
	   * @name getAllocationsDotsOptions
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Options for dots chart
	   *
	   * @param {number} minX Minimal value of dataset
	   * @param {number} maxX Maximal value of chart
	   * @param {array} series Current dataset
	   * @returns {object} Options for dots chart
	   */
	  var getAllocationsDotsOptions = function getAllocationsDotsOptions(minX, maxX, series) {
	    return {
	      title: {
	        display: false
	      },
	      legend: {
	        display: false
	      },
	      scales: {
	        xAxes: [{
	          gridLines: {
	            display: false,
	            color: _constants.TRANSPARENT
	          },
	          ticks: {
	            fontColor: _constants.TRANSPARENT,
	            min: minX,
	            max: maxX,
	            stepSize: _constants.STEP_SIZE
	          }
	        }],
	        yAxes: [{
	          gridLines: {
	            display: false,
	            color: _constants.TRANSPARENT
	          },
	          ticks: {
	            min: 0,
	            max: series.length,
	            fontColor: _constants.TRANSPARENT,
	            stepSize: 1,
	            callback: function callback(value) {
	              if (!series[value]) {
	                return null;
	              }
	              return series[value].name;
	            }
	          }
	        }]
	      },
	      tooltips: {
	        enabled: false,
	        mode: 'nearest',
	        custom: getCustomTooltip
	      }
	    };
	  };
	
	  /**
	   * @description
	   * Gets allocations data and transforms it for dots chart
	   *
	   * @name getAllocationsDotsData
	   * @type {function}
	   * @returns {array} Allocations' data transformed for dots chart
	   */
	  var getAllocationsDotsData = stateContainer.createSelector(function (state) {
	    var series = [];
	    var labels = [];
	    var datasets = [];
	
	    state.allocations.data.allocations.slice().sort(function (item1, item2) {
	      if (item1.allocationPct === item2.allocationPct) {
	        if (item1.name < item2.name) return 1;
	        if (item1.name > item2.name) return -1;
	        return 0;
	      }
	      return item1.allocationPct - item2.allocationPct;
	    }).forEach(function (item, index, array) {
	      series.push({
	        name: item.name,
	        min: item.allocationMinPct,
	        max: item.allocationMaxPct,
	        value: item.allocationPct,
	        valuation: item.valuation
	      });
	
	      labels.push('');
	
	      datasets.push({
	        label: item.name,
	        backgroundColor: (0, _libWmColorset.getColorByIndex)(array.length - 1 - index),
	        hoverRadius: _constants.HOVER_RADIUS,
	        data: [{ x: item.allocationPct, y: index + 0.5, r: _constants.DOT_RADIUS }]
	      });
	    });
	
	    var minValue = Math.min.apply(Math, _toConsumableArray(series.map(function (item) {
	      return item.value;
	    })));
	    var minX = minValue >= 0 ? 0 : Math.floor(minValue / 10) * 10;
	    var maxValue = Math.max.apply(Math, _toConsumableArray(series.map(function (item) {
	      return item.value;
	    })));
	    var maxRangesValue = Math.max.apply(Math, _toConsumableArray(series.map(function (item) {
	      return item.max || 0;
	    })));
	    var maxX = Math.ceil(Math.max(maxValue, maxRangesValue) / 10) * 10;
	
	    return {
	      data: {
	        series: series,
	        labels: labels,
	        datasets: datasets
	      },
	      options: getAllocationsDotsOptions(minX, maxX, series)
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
	    isAllocationsAvailable: isAllocationsAvailable,
	    isClass: isClass,
	    getAllocationsRangesData: getAllocationsRangesData,
	    getAllocationsDotsData: getAllocationsDotsData,
	    getError: getError
	  };
	};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HOVER_RADIUS = exports.DOT_RADIUS = exports.BAR_PERCENTAGE = exports.STEP_SIZE = exports.RANGES_BAR_BACKGROUND = exports.ZERO_LINE_ACTIVE_COLOR = exports.DEFAULT_FONT_COLOR = exports.TRANSPARENT = exports.FONT_SIZE = exports.POPOVER_SHIFT = undefined;
	
	var _libBbStyles = __webpack_require__(15);
	
	var _libBbStyles2 = _interopRequireDefault(_libBbStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var POPOVER_SHIFT = exports.POPOVER_SHIFT = 20;
	var FONT_SIZE = exports.FONT_SIZE = 13;
	var TRANSPARENT = exports.TRANSPARENT = 'transparent';
	var DEFAULT_FONT_COLOR = exports.DEFAULT_FONT_COLOR = (0, _libBbStyles2.default)('.btn-outline-dark', 'color');
	var ZERO_LINE_ACTIVE_COLOR = exports.ZERO_LINE_ACTIVE_COLOR = (0, _libBbStyles2.default)('.btn-danger', 'backgroundColor');
	var RANGES_BAR_BACKGROUND = exports.RANGES_BAR_BACKGROUND = (0, _libBbStyles2.default)('.btn-outline-secondary', 'color');
	var STEP_SIZE = exports.STEP_SIZE = 10;
	var BAR_PERCENTAGE = exports.BAR_PERCENTAGE = 0.7;
	var DOT_RADIUS = exports.DOT_RADIUS = 8;
	var HOVER_RADIUS = exports.HOVER_RADIUS = 0;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-wm-allocations-ranges-ng.js.map