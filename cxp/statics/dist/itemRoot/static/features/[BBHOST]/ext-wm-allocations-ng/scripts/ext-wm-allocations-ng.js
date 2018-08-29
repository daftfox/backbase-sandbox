(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-format-amount-ng"), require("lib-bb-model-errors"), require("lib-wm-colorset"), require("lib-bb-styles"), require("vendor-bb-uib-accordion"), require("vendor-bb-angular-ng-aria"));
	else if(typeof define === 'function' && define.amd)
		define("ext-wm-allocations-ng", ["ui-bb-loading-indicator-ng", "ui-bb-i18n-ng", "ui-bb-empty-state-ng", "ui-bb-format-amount-ng", "lib-bb-model-errors", "lib-wm-colorset", "lib-bb-styles", "vendor-bb-uib-accordion", "vendor-bb-angular-ng-aria"], factory);
	else if(typeof exports === 'object')
		exports["ext-wm-allocations-ng"] = factory(require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-format-amount-ng"), require("lib-bb-model-errors"), require("lib-wm-colorset"), require("lib-bb-styles"), require("vendor-bb-uib-accordion"), require("vendor-bb-angular-ng-aria"));
	else
		root["ext-wm-allocations-ng"] = factory(root["ui-bb-loading-indicator-ng"], root["ui-bb-i18n-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-format-amount-ng"], root["lib-bb-model-errors"], root["lib-wm-colorset"], root["lib-bb-styles"], root["vendor-bb-uib-accordion"], root["vendor-bb-angular-ng-aria"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__) {
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

	module.exports = __webpack_require__(16);

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.helpers = undefined;
	
	var _vendorBbUibAccordion = __webpack_require__(17);
	
	var _vendorBbUibAccordion2 = _interopRequireDefault(_vendorBbUibAccordion);
	
	var _uiBbFormatAmountNg = __webpack_require__(6);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _vendorBbAngularNgAria = __webpack_require__(18);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(2);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbI18nNg = __webpack_require__(3);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(4);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _helpers = __webpack_require__(19);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var helpers = exports.helpers = _helpers2.default; /**
	                                                    * @module ext-wm-allocations-ng
	                                                    *
	                                                    * @description
	                                                    * Default extension for allocations widget.
	                                                    *
	                                                    *
	                                                    * @requires vendor-bb-uib-popover
	                                                    * @requires vendor-bb-uib-accordion
	                                                    * @example
	                                                    * <!-- allocations widget model.xml -->
	                                                    * <property name="extension" viewHint="text-input,admin">
	                                                    *  <value type="string">ext-wm-allocations-ng</value>
	                                                    * </property>
	                                                    *
	                                                    *
	                                                    */
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbUibAccordion2.default, _uiBbFormatAmountNg2.default, _vendorBbAngularNgAria2.default, _uiBbLoadingIndicatorNg2.default, _uiBbI18nNg2.default, _uiBbEmptyStateNg2.default];
	
	/**
	 * Allocation type definition
	 * @typedef {Object} Allocation
	 * @property {string}
	 */

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _errors;
	
	var _libBbModelErrors = __webpack_require__(8);
	
	var _libWmColorset = __webpack_require__(9);
	
	var _constants = __webpack_require__(20);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * @typedef {Object} errorMessageDescriptor
	 * @property {string} message Localization key of the error message
	 * @property {string} title Localization key of the error message`s title
	 * @property {string} icon CSS class for icon
	 */
	
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
	
	/**
	 * @private
	 * @name extendAllocationsWithBarData
	 * @type {function}
	 *
	 * @description
	 * Extends allocations with data needed to build bar chart over assets list
	 *
	 * @param {(Asset[] | Allocation[])} data    original assets or allocations
	 */
	function extendAllocationsWithBarData(items) {
	  if (!items.length) {
	    return [];
	  }
	
	  var min = items[items.length - 1].allocationPct;
	  var max = Math.max(items[0].allocationPct, 100);
	  var shift = min < 0 ? Math.abs(min) : 0;
	  var coefficient = 100 / (max + shift);
	  var negativeBarWidth = shift * coefficient;
	
	  return items.map(function (item) {
	    return Object.assign({}, item, {
	      barData: {
	        x: item.allocationPct > 0 ? negativeBarWidth : negativeBarWidth + item.allocationPct * coefficient,
	        width: Math.abs(item.allocationPct) * coefficient
	      }
	    });
	  });
	}
	
	function allocationsComparator(item1, item2) {
	  return item2.allocationPct - item1.allocationPct;
	}
	
	/**
	 * @name mapOfOpenItems
	 * @type {map}
	 *
	 * @description
	 * Keeps ids of items that were toggled
	 */
	var mapOfOpenItems = new Map();
	
	exports.default = function (_ref) {
	  var stateContainer = _ref.stateContainer;
	  return {
	    /**
	     * @description
	     * Checks if allocations' data is available
	     *
	     * @name isAllocationsAvailable
	     * @type {function}
	     * @param {object} allocations
	     * @returns {boolean} returns true if allocations data is present
	     */
	    isAllocationsAvailable: stateContainer.createSelector(function (state) {
	      return state.allocations.data.allocations.length > 0;
	    }),
	
	    /**
	     * @description
	     * Returns current table header
	     *
	     * @name getHeaderTranslationKey
	     * @type {function}
	     * @param {boolean} isClass
	     * @returns {string} returns i18n label
	     */
	    getHeaderTranslationKey: function getHeaderTranslationKey(isClass) {
	      return isClass ? 'allocations.currency' : 'allocations.assetClass';
	    },
	
	    /**
	     * @description
	     * Returns error object by error code
	     *
	     * @public
	     * @name getError
	     * @type {Object}
	     * @returns {errorMessageDescriptor} Descriptor of the error
	     */
	    getError: function getError(code) {
	      return errors[code];
	    },
	
	    /**
	     * @description
	     * Selector for allocations data
	     *
	     * @public
	     * @type {function}
	     * @name allocations
	     * @returns {array} Set of allocations
	     */
	    allocations: stateContainer.createSelector(function (state) {
	      var sorted = state.allocations.data.allocations.slice().sort(allocationsComparator);
	      var extended = extendAllocationsWithBarData(sorted);
	
	      return extended.map(function (item) {
	        var sortedChildren = item.allocations.slice().sort(allocationsComparator);
	        return Object.assign({}, item, {
	          allocations: extendAllocationsWithBarData(sortedChildren)
	        });
	      });
	    }),
	
	    /**
	     * @description
	     * Checks if current route is asset-classes
	     *
	     * @public
	     * @type {function}
	     * @name isClass
	     * @returns {boolean} Flage that tells whether current route name is 'asset-classes'
	     */
	    isClass: stateContainer.createSelector(function (state) {
	      return state.route.name === 'asset-classes';
	    }),
	
	    /**
	     * @description
	     * Toggles open state for given item
	     *
	     * @public
	     * @name toggleItem
	     * @type {function}
	     * @param {object} allocation Selected allocation
	     * @returns {void}
	     */
	    toggleItem: function toggleItem(allocation) {
	      var allocationFromMap = mapOfOpenItems.get(allocation);
	      mapOfOpenItems.set(allocation, Object.assign({}, allocation, {
	        isOpen: allocationFromMap ? !allocationFromMap.isOpen : true
	      }));
	    },
	
	    /**
	     * @description
	     * Removes all allocations from map of open allocations
	     *
	     * @public
	     * @name clearOpenAllocations
	     * @type {function}
	     * @returns {void}
	     */
	    clearOpenAllocations: function clearOpenAllocations() {
	      return mapOfOpenItems.clear();
	    },
	
	    /**
	     * @name isOpen
	     * @type {function}
	     * @public
	     * @description Tells, whether item's open property is truthy
	     * @param {object} allocation Allocation item
	     * @returns {boolean} Flag (true|false) that stands for open state of item
	     */
	    isOpen: function isOpen(allocation) {
	      var allocationFromMap = mapOfOpenItems.get(allocation);
	      return allocationFromMap ? allocationFromMap.isOpen : false;
	    },
	
	    getColorByIndex: _libWmColorset.getColorByIndex,
	
	    /**
	     * @description
	     * Gets required color for given allocation
	     *
	     * @public
	     * @type {function}
	     * @name getAllocationColorByIndex
	     * @param {number} index Index of allocation
	     * @returns {string} Color for given allocation
	     */
	    getAllocationColorByIndex: function getAllocationColorByIndex(index) {
	      var isAnyPanelOpen = false;
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = mapOfOpenItems.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var value = _step.value;
	
	          if (value.isOpen) {
	            isAnyPanelOpen = true;
	            break;
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      if (isAnyPanelOpen) {
	        return _constants.BADGE_SECONDARY_COLOR;
	      }
	      return (0, _libWmColorset.getColorByIndex)(index);
	    }
	  };
	};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BADGE_SECONDARY_COLOR = undefined;
	
	var _libBbStyles = __webpack_require__(15);
	
	var _libBbStyles2 = _interopRequireDefault(_libBbStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BADGE_SECONDARY_COLOR = exports.BADGE_SECONDARY_COLOR = (0, _libBbStyles2.default)('.badge-secondary', 'background-color'); /* eslint-disable import/prefer-default-export */

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-wm-allocations-ng.js.map