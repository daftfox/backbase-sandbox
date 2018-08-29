(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-format-amount-ng"), require("lib-bb-model-errors"), require("vendor-bb-uib-accordion"), require("vendor-bb-angular-ng-aria"), require("ui-bb-ellipsis-tooltip-ng"), require("vendor-bb-uib-tooltip"), require("ui-wm-portfolio-positions-ng"), require("ui-wm-portfolio-collapse-expand-all-ng"), require("ui-bb-scroll-to-view-ng"), require("lib-wm-portfolio-positions-builder-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-wm-positions-AcAsRCP-ng", ["ui-bb-loading-indicator-ng", "ui-bb-i18n-ng", "ui-bb-empty-state-ng", "ui-bb-format-amount-ng", "lib-bb-model-errors", "vendor-bb-uib-accordion", "vendor-bb-angular-ng-aria", "ui-bb-ellipsis-tooltip-ng", "vendor-bb-uib-tooltip", "ui-wm-portfolio-positions-ng", "ui-wm-portfolio-collapse-expand-all-ng", "ui-bb-scroll-to-view-ng", "lib-wm-portfolio-positions-builder-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-wm-positions-AcAsRCP-ng"] = factory(require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-format-amount-ng"), require("lib-bb-model-errors"), require("vendor-bb-uib-accordion"), require("vendor-bb-angular-ng-aria"), require("ui-bb-ellipsis-tooltip-ng"), require("vendor-bb-uib-tooltip"), require("ui-wm-portfolio-positions-ng"), require("ui-wm-portfolio-collapse-expand-all-ng"), require("ui-bb-scroll-to-view-ng"), require("lib-wm-portfolio-positions-builder-ng"));
	else
		root["ext-wm-positions-AcAsRCP-ng"] = factory(root["ui-bb-loading-indicator-ng"], root["ui-bb-i18n-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-format-amount-ng"], root["lib-bb-model-errors"], root["vendor-bb-uib-accordion"], root["vendor-bb-angular-ng-aria"], root["ui-bb-ellipsis-tooltip-ng"], root["vendor-bb-uib-tooltip"], root["ui-wm-portfolio-positions-ng"], root["ui-wm-portfolio-collapse-expand-all-ng"], root["ui-bb-scroll-to-view-ng"], root["lib-wm-portfolio-positions-builder-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_40__, __WEBPACK_EXTERNAL_MODULE_64__, __WEBPACK_EXTERNAL_MODULE_65__, __WEBPACK_EXTERNAL_MODULE_66__, __WEBPACK_EXTERNAL_MODULE_68__) {
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

	module.exports = __webpack_require__(69);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_40__;

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_64__;

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_65__;

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_66__;

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_68__;

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.helpers = undefined;
	
	var _vendorBbUibAccordion = __webpack_require__(17);
	
	var _vendorBbUibAccordion2 = _interopRequireDefault(_vendorBbUibAccordion);
	
	var _vendorBbUibTooltip = __webpack_require__(40);
	
	var _vendorBbUibTooltip2 = _interopRequireDefault(_vendorBbUibTooltip);
	
	var _vendorBbAngularNgAria = __webpack_require__(18);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbFormatAmountNg = __webpack_require__(6);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _uiBbEllipsisTooltipNg = __webpack_require__(39);
	
	var _uiBbEllipsisTooltipNg2 = _interopRequireDefault(_uiBbEllipsisTooltipNg);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(2);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbI18nNg = __webpack_require__(3);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(4);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiWmPortfolioPositionsNg = __webpack_require__(64);
	
	var _uiWmPortfolioPositionsNg2 = _interopRequireDefault(_uiWmPortfolioPositionsNg);
	
	var _uiWmPortfolioCollapseExpandAllNg = __webpack_require__(65);
	
	var _uiWmPortfolioCollapseExpandAllNg2 = _interopRequireDefault(_uiWmPortfolioCollapseExpandAllNg);
	
	var _uiBbScrollToViewNg = __webpack_require__(66);
	
	var _uiBbScrollToViewNg2 = _interopRequireDefault(_uiBbScrollToViewNg);
	
	var _helpers = __webpack_require__(70);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-wm-positions-AcAsRCP-ng
	 *
	 * @description
	 * Default extension for positions widget.
	 *
	 *
	 * @requires vendor-bb-uib-accordion
	 * @example
	 * <!-- positions widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-wm-positions-AcAsRCP-ng</value>
	 * </property>
	 *
	 *
	 */
	var helpers = exports.helpers = _helpers2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbUibAccordion2.default, _vendorBbUibTooltip2.default, _vendorBbAngularNgAria2.default, _uiBbFormatAmountNg2.default, _uiBbEllipsisTooltipNg2.default, _uiBbLoadingIndicatorNg2.default, _uiBbI18nNg2.default, _uiBbEmptyStateNg2.default, _uiWmPortfolioPositionsNg2.default, _uiWmPortfolioCollapseExpandAllNg2.default, _uiBbScrollToViewNg2.default];

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libWmPortfolioPositionsBuilderNg = __webpack_require__(68);
	
	var _libWmPortfolioPositionsBuilderNg2 = _interopRequireDefault(_libWmPortfolioPositionsBuilderNg);
	
	var _libBbModelErrors = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var helpers = function helpers(_ref) {
	  var _errors;
	
	  var stateContainer = _ref.stateContainer;
	
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
	   * @name processPositionsData
	   * @type {function}
	   *
	   * @description
	   * Transforming plain positions` data into hierarchy
	   *
	   * @returns {Object} positions data hierarchy
	   */
	  var positionsData = stateContainer.createSelector(function (state) {
	    var data = state.positions.data;
	    if (!data) {
	      return [];
	    }
	    return (0, _libWmPortfolioPositionsBuilderNg2.default)({
	      $field: 'accounts',
	      $source: data.accounts,
	      $idField: 'id',
	      $leftJoin: {
	        $field: 'assetClasses',
	        $source: data.assetClasses,
	        $filterBy: ['accountId'],
	        $idField: 'id',
	        $leftJoin: {
	          $field: 'regions',
	          $source: data.regions,
	          $filterBy: ['accountId', 'assetClassId'],
	          $idField: 'id',
	          $leftJoin: {
	            $field: 'countries',
	            $source: data.countries,
	            $filterBy: ['accountId', 'assetClassId', 'regionId'],
	            $idField: 'id',
	            $leftJoin: {
	              $field: 'positions',
	              $source: data.positions,
	              $filterBy: ['accountId', 'assetClassId', 'regionId', 'countryId']
	            }
	          }
	        }
	      }
	    });
	  });
	
	  /**
	   * @description
	   * Checks if positions' data is available
	   *
	   * @name isPositionsAvailable
	   * @type {function}
	   * @param {object} positions
	   * @returns {boolean} returns true if positions data is present
	   */
	  var isPositionsAvailable = stateContainer.createSelector(function (state) {
	    var data = state.positions.data;
	    return data && data.accounts && data.accounts.length > 0;
	  });
	
	  /**
	   * @description
	   * Returns error object by error code
	   *
	   * @public
	   * @name getError
	   * @type {function}
	   * @returns {errorMessageDescriptor} Descriptor of the error
	   */
	  var getError = function getError(code) {
	    return errors[code];
	  };
	
	  return {
	    positionsData: positionsData,
	    isPositionsAvailable: isPositionsAvailable,
	    getError: getError
	  };
	};
	
	exports.default = helpers;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-wm-positions-AcAsRCP-ng.js.map