(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-wm-portfolio-positions-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-wm-portfolio-positions-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-wm-portfolio-positions-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_93__) {
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

	module.exports = __webpack_require__(110);

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_93__;

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(93);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _component = __webpack_require__(111);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _component3 = __webpack_require__(113);
	
	var _component4 = _interopRequireDefault(_component3);
	
	var _component5 = __webpack_require__(115);
	
	var _component6 = _interopRequireDefault(_component5);
	
	var _directive = __webpack_require__(117);
	
	var _directive2 = _interopRequireDefault(_directive);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('ui-wm-portfolio-positions-ng', []).directive('uiWmPositionsPositionsTable', _directive2.default).component('uiWmPositionsPortfolioRow', _component2.default).component('uiWmPositionsAssetClassRow', _component4.default).component('uiWmPositionsRegionRow', _component6.default).name; /**
	                                                                                                                                                                                                                                                                                                                                              * @module ext-portfolio-positions-module
	                                                                                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                                                                                              * @description
	                                                                                                                                                                                                                                                                                                                                              * Module containing components and directives used by positions widget.
	                                                                                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                                                                                              * @example
	                                                                                                                                                                                                                                                                                                                                              * // In an extension:
	                                                                                                                                                                                                                                                                                                                                              * // file: scripts/index.js
	                                                                                                                                                                                                                                                                                                                                              * import uiBbPortfolioPositionsKey from 'ui-wm-portfolio-positions-ng';
	                                                                                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                                                                                              * export const dependencyKeys = [
	                                                                                                                                                                                                                                                                                                                                              *   uiBbPortfolioPositionsKey,
	                                                                                                                                                                                                                                                                                                                                              * ];
	                                                                                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                                                                                              */

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _template = __webpack_require__(112);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name PortfolioRow
	 * @ngkey uiWmPositionsPortfolioRow
	 * @type {object}
	 * @description
	 * Positions Portfolio row component.
	 *
	 * @example
	 *<ui-wm-positions-portfolio-row
	 *   data-portfolio="item">
	 *</ui-wm-positions-portfolio-row>
	 */
	
	var PortfolioRow = {
	  template: _template2.default,
	  controller: function controller() {},
	
	  controllerAs: '$portfolioRowCtrl',
	  bindings: {
	    portfolio: '<',
	    labels: '<'
	  }
	};
	
	exports.default = PortfolioRow;

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

	module.exports = "<div class=\"row align-items-center\">\n  <div class=\"col-6\">\n    <span\n      class=\"h5\"\n      data-ng-bind=\"$portfolioRowCtrl.portfolio.name\"\n      data-role=\"portfolio-name\"\n    ></span>\n  </div>\n  <div class=\"col-2 text-right\">\n    <div>\n      <strong\n        class=\"small text-muted\"\n        data-ng-bind=\"$portfolioRowCtrl.portfolio.valuation.currencyCode\"\n        data-role=\"portfolio-currency-code\"\n      ></strong>\n      <strong\n        class=\"small text-muted\"\n        data-ng-bind=\"$portfolioRowCtrl.labels.valuation\"\n      ></strong>\n    </div>\n    <div class=\"pull-right\">\n      <ui-bb-format-amount-ng\n        class=\"h6\"\n        data-no-map\n        data-amount=\"$portfolioRowCtrl.portfolio.valuation.amount\"\n        data-role=\"portfolio-valuation\"\n      ></ui-bb-format-amount-ng>\n    </div>\n  </div>\n  <div class=\"col-2 text-right\">\n    <strong\n      class=\"small text-muted\">\n      % <span data-ng-bind=\"$portfolioRowCtrl.labels.performance\"></span>\n    </strong>\n    <div data-role=\"portfolio-performance-pct\">\n      <span\n        class=\"h6\"\n        data-ng-bind=\"$portfolioRowCtrl.portfolio.performancePct | number : 2\"\n      ></span>\n      <span class=\"h6\">%</span>\n    </div>\n  </div>\n  <div class=\"col-2 text-right\">\n    <strong class=\"small text-muted\">\n      % <span data-ng-bind=\"$portfolioRowCtrl.labels.parent\"></span>\n    </strong>\n    <div data-role=\"portfolio-performance-pct\">\n      <span\n        class=\"h6\"\n        data-ng-bind=\"$portfolioRowCtrl.portfolio.parentPct | number : 2\"\n      ></span>\n      <strong class=\"h6 text-muted\">%</strong>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _template = __webpack_require__(114);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name AssetClassRow
	 * @ngkey uiWmPositionsAssetClassRow
	 * @type {object}
	 * @description
	 * Positions Asset Class row component.
	 *
	 * @example
	 * <ui-wm-positions-asset-class-row
	 *      data-asset-class="item"
	 *      data-labels="{
	 *                 accruedInterest: ('positions.accruedInterest' | i18n)
	 *                 valuation: ('positions.valuation' | i18n)
	 *                 unrealizedPL: ('positions.unrealizedPL' | i18n)
	 *                 portfolio: ('positions.portfolio' | i18n)
	 *                 parent: ('positions.parent' | i18n)
	 *               }">
	 * </ui-wm-positions-asset-class-row>
	 */
	
	var AssetClassRow = {
	  template: _template2.default,
	  controller: function controller() {},
	
	  controllerAs: '$assetClassRowCtrl',
	  bindings: {
	    assetClass: '<',
	    labels: '<'
	  }
	};
	
	exports.default = AssetClassRow;

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

	module.exports = "<div class=\"row align-items-center\">\n  <div class=\"col-2\">\n    <span\n      class=\"h6\"\n      data-ng-bind=\"$assetClassRowCtrl.assetClass.name\"\n      data-role=\"asset-class-name\"\n    ></span>\n  </div>\n  <div class=\"col-2 text-right\">\n    <strong\n      class=\"small text-muted\"\n      data-ng-bind=\"$assetClassRowCtrl.assetClass.accruedInterest.currencyCode\"\n      data-role=\"asset-class-currency-code\"\n    ></strong>\n    <strong\n      class=\"small text-muted\"\n      data-ng-bind=\"$assetClassRowCtrl.labels.accruedInterest\"\n    ></strong>\n    <div>\n      <ui-bb-format-amount-ng\n        class=\"h6\"\n        data-no-map\n        data-amount=\"$assetClassRowCtrl.assetClass.accruedInterest.amount\"\n        data-role=\"asset-class-accured-interest\"\n      ></ui-bb-format-amount-ng>\n    </div>\n  </div>\n  <div class=\"col-2 text-right\">\n    <strong\n      class=\"small text-muted\"\n      data-ng-bind=\"$assetClassRowCtrl.assetClass.valuation.currencyCode\"\n      data-role=\"asset-class-valuation-currency-code\"\n    ></strong>\n    <strong\n      class=\"small text-muted\"\n      data-ng-bind=\"$assetClassRowCtrl.labels.valuation\"\n    ></strong>\n    <div>\n      <ui-bb-format-amount-ng\n        class=\"h6\"\n        data-no-map\n        data-amount=\"$assetClassRowCtrl.assetClass.valuation.amount\"\n        data-role=\"asset-class-valuation\"\n      ></ui-bb-format-amount-ng>\n    </div>\n  </div>\n  <div class=\"col-2 text-right\">\n    <strong\n      class=\"small text-muted\"\n      data-ng-bind=\"$assetClassRowCtrl.assetClass.unrealizedPL.currencyCode\"\n      data-role=\"asset-class-unrealized-pl-currency-code\"\n    ></strong>\n    <strong\n      class=\"small text-muted\"\n      data-ng-bind=\"$assetClassRowCtrl.labels.unrealizedPL\"\n    ></strong>\n    <div>\n      <ui-bb-format-amount-ng\n        class=\"h6\"\n        data-no-map\n        data-amount=\"$assetClassRowCtrl.assetClass.unrealizedPL.amount\"\n        data-role=\"asset-class-unrealized-pl\"\n      ></ui-bb-format-amount-ng>\n    </div>\n  </div>\n  <div class=\"col-2 text-right\">\n    <strong\n      class=\"small text-muted\">\n      % <span data-ng-bind=\"$assetClassRowCtrl.labels.portfolio\"></span>\n    </strong>\n    <div>\n      <span\n        class=\"h6\"\n        data-ng-bind=\"$assetClassRowCtrl.assetClass.portfolioPct | number : 2\"\n        data-role=\"asset-class-portfolio-pct\"\n      ></span>\n      <span class=\"h6\">%</span>\n    </div>\n  </div>\n  <div class=\"col-2 text-right\">\n    <strong\n      class=\"small text-muted\">\n      % <span data-ng-bind=\"$assetClassRowCtrl.labels.parent\"></span>\n    </strong>\n    <div>\n      <span\n        class=\"h6\"\n        data-ng-bind=\"$assetClassRowCtrl.assetClass.parentPct | number : 2\"\n        data-role=\"asset-class-parent-pct\"\n      ></span>\n      <span class=\"h6\">%</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _template = __webpack_require__(116);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name RegionRow
	 * @ngkey uiWmPositionsRegionRow
	 * @type {object}
	 * @description
	 * Positions region row component.
	 *
	 * @example
	 *  <ui-wm-positions-region-row
	 *    data-region="item"
	 *    data-labels="{
	 *      accruedInterest: ('accruedInterest' | i18n)
	        valuation: ('valuation' | i18n)
	        unrealizedPL: ('unrealizedPL' | i18n)
	        portfolio: ('portfolio' | i18n)
	        parent: ('parent' | i18n)
	 *    }">
	 *  </ui-wm-positions-region-row>
	 */
	
	var RegionRow = {
	  template: _template2.default,
	  controller: function controller() {},
	
	  controllerAs: '$regionRowCtrl',
	  bindings: {
	    region: '<',
	    labels: '<'
	  }
	};
	
	exports.default = RegionRow;

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

	module.exports = "<div class=\"row align-items-center\">\n  <div class=\"col-2\">\n    <span class=\"h6 pl-2\">\n      -\n      <span\n        class=\"h6\"\n        data-ng-bind=\"$regionRowCtrl.region.name\"\n        data-role=\"region-name\"\n      ></span>\n      <span data-ng-if=\"$regionRowCtrl.region.countries.length\">\n        (<span\n        class=\"h6\"\n        data-ng-bind=\"$regionRowCtrl.region.countries.length\"\n        data-role=\"region-countries-list\"\n      ></span>)\n      </span>\n    </span>\n  </div>\n  <div class=\"col-2 text-right\">\n    <strong\n      class=\"text-secondary small\"\n      data-ng-bind=\"$regionRowCtrl.region.accruedInterest.currencyCode\"\n      data-role=\"region-accrued-interest-currency-code\"\n    ></strong>\n    <strong\n      class=\"text-secondary small\"\n      data-ng-bind=\"$regionRowCtrl.labels.accruedInterest\"\n    ></strong>\n    <div>\n      <ui-bb-format-amount-ng\n        class=\"h6\"\n        data-no-map\n        data-amount=\"$regionRowCtrl.region.accruedInterest.amount\"\n        data-role=\"region-accrued-interest\"\n      ></ui-bb-format-amount-ng>\n    </div>\n  </div>\n  <div class=\"col-2 text-right\">\n    <strong\n      class=\"text-secondary small\"\n      data-ng-bind=\"$regionRowCtrl.region.valuation.currencyCode\"\n      data-role=\"region-valuation-currency-code\"\n    ></strong>\n    <strong\n      class=\"text-secondary small\"\n      data-ng-bind=\"$regionRowCtrl.labels.valuation\"\n    ></strong>\n    <div>\n      <ui-bb-format-amount-ng\n        class=\"h6\"\n        data-no-map\n        data-amount=\"$regionRowCtrl.region.valuation.amount\"\n        data-role=\"region-valuation\"\n      ></ui-bb-format-amount-ng>\n    </div>\n  </div>\n  <div class=\"col-2 text-right\">\n    <strong\n      class=\"text-secondary small\"\n      data-ng-bind=\"$regionRowCtrl.region.unrealizedPL.currencyCode\"\n      data-role=\"region-unrealized-pl-currency-code\"\n    ></strong>\n    <strong\n      class=\"text-secondary small\"\n      data-ng-bind=\"$regionRowCtrl.labels.unrealizedPL\"\n    ></strong>\n    <div>\n      <ui-bb-format-amount-ng\n        class=\"h6\"\n        data-no-map\n        data-amount=\"$regionRowCtrl.region.unrealizedPL.amount\"\n        data-role=\"region-unrealized-pl\"\n      ></ui-bb-format-amount-ng>\n    </div>\n  </div>\n  <div class=\"col-2 text-right\">\n    <strong class=\"text-secondary small\">\n      %\n      <span data-ng-bind=\"$regionRowCtrl.labels.portfolio\"></span>\n    </strong>\n    <div>\n      <span class=\"h6\">\n        <span\n          data-ng-bind=\"$regionRowCtrl.region.portfolioPct | number : 2\"\n          data-role=\"region-portfolio-pct\"\n        ></span> %\n      </span>\n    </div>\n  </div>\n  <div class=\"col-2 text-right\">\n    <strong class=\"text-secondary small\">\n      %\n      <span data-ng-bind=\"$regionRowCtrl.labels.parent\"></span>\n    </strong>\n    <div>\n      <span class=\"h6\">\n        <span\n          data-ng-bind=\"$regionRowCtrl.region.parentPct | number : 2\"\n          data-role=\"region-parent-pct\"\n        ></span> %\n      </span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = PositionsTableDirective;
	
	var _template = __webpack_require__(118);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name PortfolioPositionsTableDirective
	 * @ngkey uiWmPositionsPositionsTable
	 * @type {object}
	 * @description
	 * Positions table directive.
	 *
	 * @example
	 * <table
	 *    class="table
	 *    table-vertical-align
	 *    table-cells-fixed-height
	 *    table-fixed-first-column
	 *    table-fixed-last-column
	 *    table-fixed-columns
	 *    table-cells-sm
	 *    panel-no-offset
	 *    portfolio-stripe-table">
	 *   <tbody data-ui-wm-positions-positions-table="" <!-- directive is used here -->
	 *             data-ng-repeat="country in region.countries"
	 *             data-positions="country.positions"
	 *             data-country-name="country.name"
	 *             data-labels="{
	 *                    quantity: ('positions.quantity' | i18n),
	 *                    price: ('positions.price' | i18n),
	 *                    exchangeRate: ('positions.exchangeRate' | i18n),
	 *                    valuation: ('positions.valuation' | i18n),
	 *                    accruedInterest: ('positions.accruedInterest' | i18n),
	 *                    costPrice: ('positions.costPrice' | i18n),
	 *                    costExchangeRate: ('positions.costExchangeRate' | i18n),
	 *                    unrealizedPL: ('positions.unrealizedPL' | i18n),
	 *                    unrealizedPlLocal: ('positions.unrealizedPlLocal' | i18n),
	 *                    assetClass: ('positions.assetClass' | i18n),
	 *                    portfolio: ('positions.portfolio' | i18n),
	 *                    parent: ('positions.parent' | i18n)
	 *                }"
	 *             >
	 *        </tbody>
	 * </table>
	 */
	
	function PositionsTableDirective() {
	  return {
	    restrict: 'A',
	    scope: {
	      countryName: '=',
	      positions: '=',
	      labels: '=',
	      accountId: '=',
	      onTransactionIconClick: '&'
	    },
	    replace: true,
	    controller: function controller() {},
	
	    controllerAs: '$positionsTableCtrl',
	    bindToController: true,
	    template: _template2.default
	  };
	}

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

	module.exports = "<tbody class=\"bg-light\">\n<tr class=\"text-truncate\">\n  <th class=\"border-right\">\n    <small>\n      <strong\n        class=\"pl-3\"\n        data-ng-bind=\"$positionsTableCtrl.countryName\"\n        data-role=\"positions-country-name\"\n      ></strong>\n      <small>\n  </th>\n  <th class=\"text-right\">\n    <small>\n      <strong\n        data-ng-bind=\"$positionsTableCtrl.labels.quantity\"\n      ></strong>\n    </small>\n  </th>\n  <th class=\"text-right\">\n    <small>\n      <strong\n        data-ng-bind=\"$positionsTableCtrl.labels.price\"\n      ></strong>\n    </small>\n  </th>\n  <th class=\"text-right\">\n    <small>\n      <strong\n        data-ng-bind=\"$positionsTableCtrl.labels.exchangeRate\"\n      ></strong>\n    </small>\n  </th>\n  <th class=\"text-right\">\n    <small>\n      <strong\n        data-ng-bind=\"secondLevelItem.valuation.currencyCode\"\n      ></strong>\n    </small>\n    <small>\n      <strong\n        data-ng-bind=\"$positionsTableCtrl.labels.valuation\"\n      ></strong>\n    </small>\n  </th>\n  <th class=\"text-right\">\n    <small>\n      <strong\n        data-ng-bind=\"$positionsTableCtrl.labels.accruedInterest\"\n      ></strong>\n    </small>\n  </th>\n  <th class=\"text-right\">\n    <small>\n      <strong\n        data-ng-bind=\"$positionsTableCtrl.labels.costPrice\"\n      ></strong>\n    </small>\n  </th>\n  <th class=\"text-right\">\n    <small>\n      <strong\n        data-ng-bind=\"$positionsTableCtrl.labels.costExchangeRate\"\n      ></strong>\n    </small>\n  </th>\n  <th class=\"text-right\">\n    <small>\n      <strong\n        data-ng-bind=\"secondLevelItem.unrealizedPL.currencyCode\"\n      ></strong>\n    </small>\n    <small>\n      <strong\n        data-ng-bind=\"$positionsTableCtrl.labels.unrealizedPL\"\n      ></strong>\n    </small>\n  </th>\n  <th class=\"text-right\">\n    <small>\n      <strong\n        data-ng-bind=\"secondLevelItem.unrealizedPL.currencyCode\"\n      ></strong>\n    </small>\n    <small>\n      <strong\n        data-ng-bind=\"$positionsTableCtrl.labels.unrealizedPL\"\n      ></strong>\n    </small>\n    <small>\n      <strong>%</strong>\n    </small>\n  </th>\n  <th class=\"text-right\">\n    <small>\n      <strong\n        data-ng-bind=\"$positionsTableCtrl.labels.unrealizedPlLocal\"\n      ></strong>\n    </small>\n  </th>\n  <th class=\"text-right\">\n    <small>\n      <strong>%</strong>\n    </small>\n    <small>\n      <strong\n        data-ng-bind=\"$positionsTableCtrl.labels.unrealizedPlLocal\"\n      ></strong>\n    </small>\n  </th>\n  <th class=\"text-right\">\n    <small>\n      <strong>%</strong>\n    </small>\n    <small>\n      <strong\n        data-ng-bind=\"$positionsTableCtrl.labels.assetClass\"\n      ></strong>\n    </small>\n  </th>\n  <th class=\"text-right\">\n    <small>\n      <strong>%</strong>\n    </small>\n    <small>\n      <strong\n        data-ng-bind=\"$positionsTableCtrl.labels.portfolio\"\n      ></strong>\n    </small>\n  </th>\n  <th class=\"text-right\">\n    <small>\n      <strong>%</strong>\n    </small>\n    <small>\n      <strong\n        data-ng-bind=\"$positionsTableCtrl.labels.parent\"\n      ></strong>\n    </small>\n  </th>\n  <th class=\"border-left\"></th>\n</tr>\n<tr data-ng-repeat=\"position in $positionsTableCtrl.positions\">\n  <td class=\"border-right\">\n    <ui-bb-ellipsis-tooltip-ng data-tooltip=\"{{ ::position.instrumentName }}\">\n      <small\n        class=\"pl-3\"\n        data-ng-bind=\"position.instrumentName\"\n        data-role=\"position-instrument-name\"\n      ></small>\n    </ui-bb-ellipsis-tooltip-ng>\n    <ui-bb-ellipsis-tooltip-ng\n      data-tooltip=\"{{ ::position.instrumentCurrency }} {{ ::position.instrumentCode }}\"\n    >\n      <small class=\"pl-3\">\n        <small\n          data-ng-bind=\"position.instrumentCurrency\"\n          data-role=\"position-instrument-currency\"\n        ></small>\n        |\n        <small\n          data-ng-bind=\"position.instrumentCode\"\n          data-role=\"position-instrument-code\"\n        ></small>\n      </small>\n    </ui-bb-ellipsis-tooltip-ng>\n  </td>\n  <td class=\"text-right align-middle\">\n    <small>\n      <strong\n        class=\"text-muted\"\n        data-ng-bind=\"position.quantity | number : 2\"\n        data-role=\"position-quantity\"\n      ></strong>\n    </small>\n  </td>\n  <td class=\"text-right align-middle\">\n    <ui-bb-format-amount-ng\n      class=\"small font-weight-bold text-muted\"\n      data-no-map\n      data-amount=\"position.price.amount\"\n      data-role=\"position-price-amount\"\n    ></ui-bb-format-amount-ng>\n  </td>\n  <td class=\"text-right align-middle\">\n    <small>\n      <strong\n        class=\"text-muted\"\n        data-ng-bind=\"position.exchangeRate | number : 2\"\n        data-role=\"position-exchange-rate\"\n      ></strong>\n    </small>\n  </td>\n  <td class=\"text-right align-middle\">\n    <ui-bb-format-amount-ng\n      class=\"small font-weight-bold text-muted\"\n      data-no-map\n      data-amount=\"position.valuation.amount\"\n      data-role=\"position-valuation-amount\"\n    ></ui-bb-format-amount-ng>\n  </td>\n  <td class=\"text-right align-middle\">\n    <ui-bb-format-amount-ng\n      class=\"small font-weight-bold text-muted\"\n      data-no-map\n      data-amount=\"position.accruedInterest.amount\"\n      data-role=\"position-accrued-interest-amount\"\n    ></ui-bb-format-amount-ng>\n  </td>\n  <td class=\"text-right align-middle\">\n    <ui-bb-format-amount-ng\n      class=\"small font-weight-bold text-muted\"\n      data-no-map\n      data-amount=\"position.costPrice.amount\"\n      data-role=\"position-cost-price-amount\"\n    ></ui-bb-format-amount-ng>\n  </td>\n  <td class=\"text-right align-middle\">\n    <small>\n      <strong\n        class=\"text-muted\"\n        data-ng-bind=\"position.costExchangeRate | number : 2\"\n        data-role=\"position-cost-exchange-rate\"\n      ></strong>\n    </small>\n  </td>\n  <td class=\"text-right align-middle\">\n    <ui-bb-format-amount-ng\n      class=\"small font-weight-bold text-muted\"\n      data-no-map\n      data-amount=\"position.unrealizedPL.amount\"\n      data-role=\"position-unrealized-pl-amount\"\n    ></ui-bb-format-amount-ng>\n  </td>\n  <td class=\"text-right align-middle\">\n    <small>\n      <strong\n        class=\"text-muted\"\n        data-ng-bind=\"position.unrealizedPLPct | number : 2\"\n        data-role=\"position-unrealized-pl-pct\"\n      ></strong>\n      <small>\n  </td>\n  <td class=\"text-right align-middle\">\n    <ui-bb-format-amount-ng\n      class=\"small font-weight-bold text-muted\"\n      data-no-map\n      data-role=\"position-unrealized-pl-amount\"\n      data-amount=\"position.unrealizedPL.amount\"\n    ></ui-bb-format-amount-ng>\n  </td>\n  <td class=\"text-right align-middle\">\n    <small>\n      <strong\n        class=\"text-muted\"\n        data-ng-bind=\"position.unrealizedPLPct | number : 2\"\n        data-role=\"position-unrealized-pl-pct\"\n      ></strong>\n    </small>\n  </td>\n  <td class=\"text-right align-middle\">\n    <small>\n      <strong\n        class=\"text-muted\"\n        data-ng-bind=\"position.assetClassPct | number : 2\"\n        data-role=\"position-asset-class-pct\"\n      ></strong>\n    </small>\n  </td>\n  <td class=\"text-right align-middle\">\n    <small>\n      <strong\n        class=\"text-muted\"\n        data-ng-bind=\"secondLevelItem.portfolioPct | number : 2\"\n      ></strong>\n    </small>\n  </td>\n  <td class=\"text-right align-middle\">\n    <small>\n      <strong\n        class=\"text-muted\"\n        data-ng-bind=\"secondLevelItem.parentPct | number : 2\"\n      ></strong>\n    </small>\n  </td>\n  <td class=\"align-middle border-left\">\n    <button\n      class=\"btn btn-link btn-toggle\"\n      data-role=\"view-transactions\"\n      data-ng-click=\"$positionsTableCtrl.onTransactionIconClick({\n           $accountId: $positionsTableCtrl.accountId,\n           $positionId: position.id,\n           $positionInstrumentName: position.instrumentName})\"\n      aria-label=\"{{'positions.viewTransactions' | i18n}}\"\n    >\n      <i class=\"fas fa-exchange-alt\"\n         aria-hidden=\"true\">\n      </i>\n    </button>\n  </td>\n</tr>\n</tbody>"

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-wm-portfolio-positions-ng.js.map