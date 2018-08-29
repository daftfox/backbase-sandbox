(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("ui-wm-chartjs-spiderweb-ng"), require("ui-bb-format-amount-ng"), require("lib-bb-model-errors"), require("lib-wm-colorset"), require("lib-wm-compose-selectors"));
	else if(typeof define === 'function' && define.amd)
		define("ext-wm-allocations-chart-ng", ["ui-bb-loading-indicator-ng", "ui-bb-i18n-ng", "ui-bb-empty-state-ng", "ui-wm-chartjs-spiderweb-ng", "ui-bb-format-amount-ng", "lib-bb-model-errors", "lib-wm-colorset", "lib-wm-compose-selectors"], factory);
	else if(typeof exports === 'object')
		exports["ext-wm-allocations-chart-ng"] = factory(require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("ui-wm-chartjs-spiderweb-ng"), require("ui-bb-format-amount-ng"), require("lib-bb-model-errors"), require("lib-wm-colorset"), require("lib-wm-compose-selectors"));
	else
		root["ext-wm-allocations-chart-ng"] = factory(root["ui-bb-loading-indicator-ng"], root["ui-bb-i18n-ng"], root["ui-bb-empty-state-ng"], root["ui-wm-chartjs-spiderweb-ng"], root["ui-bb-format-amount-ng"], root["lib-bb-model-errors"], root["lib-wm-colorset"], root["lib-wm-compose-selectors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__) {
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

	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
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
	
	var _uiWmChartjsSpiderwebNg = __webpack_require__(5);
	
	var _uiWmChartjsSpiderwebNg2 = _interopRequireDefault(_uiWmChartjsSpiderwebNg);
	
	var _uiBbFormatAmountNg = __webpack_require__(6);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _helpers = __webpack_require__(7);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-wm-allocations-chart-ng
	 *
	 * @description
	 * Spiderweb chart extension for allocations widget.
	 *
	 *
	 * @requires ui-wm-chartjs-spiderweb-ng
	 * @example
	 * <!-- allocations widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-wm-allocations-chart-ng</value>
	 * </property>
	 *
	 *
	 */
	
	var helpers = exports.helpers = _helpers2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbLoadingIndicatorNg2.default, _uiBbI18nNg2.default, _uiBbEmptyStateNg2.default, _uiWmChartjsSpiderwebNg2.default, _uiBbFormatAmountNg2.default];
	
	/**
	 * Allocation type definition
	 * @typedef {Object} Allocation
	 * @property {string}
	 */

/***/ }),
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
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _errors;
	
	var _libBbModelErrors = __webpack_require__(8);
	
	var _libWmColorset = __webpack_require__(9);
	
	var _libWmComposeSelectors = __webpack_require__(10);
	
	var _libWmComposeSelectors2 = _interopRequireDefault(_libWmComposeSelectors);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var POPOVER_SHIFT = 20;
	
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
	
	    var index = tooltipModel.dataPoints[0].index;
	    var item = series[index];
	
	    var titleWrapper = tooltipWrap.querySelector('.popover-title-content');
	    titleWrapper.innerHTML = item.name;
	
	    var circleWrapper = tooltipWrap.querySelector('.popover-title-circle');
	    circleWrapper.style.color = (0, _libWmColorset.getColorByIndex)(index);
	
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
	
	    Object.assign(tooltipEl.style, {
	      left: tooltipModel.caretX + POPOVER_SHIFT + 'px',
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
	   * @description
	   * Describes predefined options for radar chart
	   *
	   * @name radarOptions
	   * @type {object}
	   */
	  var radarOptions = {
	    tooltips: {
	      enabled: false,
	      mode: 'nearest',
	      custom: getCustomTooltip
	    }
	  };
	
	  /**
	   * @description
	   * Selector for allocations
	   *
	   * @private
	   * @name allocationsSelector
	   * @type {function}
	   * @returns {array} Array of allocations received from state
	   */
	  var allocationsSelector = stateContainer.createSelector(function (state) {
	    return state.allocations.data.allocations;
	  });
	
	  /**
	   * @description
	   * Gets predefined options for radar chart dataset
	   *
	   * @name getRadarDatasetOptions
	   * @type {function}
	   * @returns {object} Radar dataset options
	   */
	  var getRadarDatasetOptions = (0, _libWmComposeSelectors2.default)(allocationsSelector, function (data) {
	    return { pointBackgroundColor: (0, _libWmColorset.getColorset)(data.length) };
	  });
	
	  /**
	   * @description
	   * Checks if allocations' data is available
	   *
	   * @name isAllocationsAvailable
	   * @type {function}
	   * @returns {boolean} returns true if allocations data is present
	   */
	  var isAllocationsAvailable = (0, _libWmComposeSelectors2.default)(allocationsSelector, function (data) {
	    return data.length > 0;
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
	    return item2.value - item1.value;
	  };
	
	  /**
	   * @description
	   * Gets allocations data and transforms it for spiderweb chart
	   *
	   * @name getAllocations
	   * @type {function}
	   * @returns {array} Allocations' data
	   */
	  var getAllocations = (0, _libWmComposeSelectors2.default)(allocationsSelector, function (data) {
	    return data.map(function (allocation) {
	      return {
	        name: allocation.name,
	        min: allocation.allocationMinPct,
	        max: allocation.allocationMaxPct,
	        value: allocation.allocationPct,
	        valuation: allocation.valuation
	      };
	    }).slice().sort(allocationsComparator);
	  });
	
	  /**
	   * @description
	   * Gets predefined options for radar chart
	   *
	   * @name getRadarOptions
	   * @type {function}
	   * @returns {object} Radar options
	   */
	  var getRadarOptions = function getRadarOptions() {
	    return radarOptions;
	  };
	
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
	    getRadarOptions: getRadarOptions,
	    getAllocations: getAllocations,
	    getRadarDatasetOptions: getRadarDatasetOptions,
	    isClass: isClass,
	    getError: getError,
	    getColorClassByIndex: _libWmColorset.getColorClassByIndex
	  };
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-wm-allocations-chart-ng.js.map