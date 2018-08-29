(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("ui-bb-calendar-popup-ng"), require("ui-bb-track-form-changes-ng"), require("ui-bb-search-box-ng"), require("ui-bb-dropdown-select-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-transaction-search-filter-ng", ["vendor-bb-angular", "ui-bb-calendar-popup-ng", "ui-bb-track-form-changes-ng", "ui-bb-search-box-ng", "ui-bb-dropdown-select-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-transaction-search-filter-ng"] = factory(require("vendor-bb-angular"), require("ui-bb-calendar-popup-ng"), require("ui-bb-track-form-changes-ng"), require("ui-bb-search-box-ng"), require("ui-bb-dropdown-select-ng"));
	else
		root["ui-bb-transaction-search-filter-ng"] = factory(root["vendor-bb-angular"], root["ui-bb-calendar-popup-ng"], root["ui-bb-track-form-changes-ng"], root["ui-bb-search-box-ng"], root["ui-bb-dropdown-select-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_63__, __WEBPACK_EXTERNAL_MODULE_74__, __WEBPACK_EXTERNAL_MODULE_75__, __WEBPACK_EXTERNAL_MODULE_76__, __WEBPACK_EXTERNAL_MODULE_77__) {
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

	module.exports = __webpack_require__(73);

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_63__;

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(63);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbCalendarPopupNg = __webpack_require__(74);
	
	var _uiBbCalendarPopupNg2 = _interopRequireDefault(_uiBbCalendarPopupNg);
	
	var _uiBbTrackFormChangesNg = __webpack_require__(75);
	
	var _uiBbTrackFormChangesNg2 = _interopRequireDefault(_uiBbTrackFormChangesNg);
	
	var _uiBbSearchBoxNg = __webpack_require__(76);
	
	var _uiBbSearchBoxNg2 = _interopRequireDefault(_uiBbSearchBoxNg);
	
	var _uiBbDropdownSelectNg = __webpack_require__(77);
	
	var _uiBbDropdownSelectNg2 = _interopRequireDefault(_uiBbDropdownSelectNg);
	
	var _component = __webpack_require__(78);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _controller = __webpack_require__(79);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 *
	 * @description
	 * The angular module name
	 */
	
	exports.default = _vendorBbAngular2.default.module('ui-bb-transaction-search-filter-ng', [_uiBbCalendarPopupNg2.default, _uiBbTrackFormChangesNg2.default, _uiBbSearchBoxNg2.default, _uiBbDropdownSelectNg2.default]).component('uiBbTransactionSearchFilterNg', _component2.default).controller('uiBbTransactionSearchFilterController', ['$scope', _controller2.default]).name; /**
	                                                                                                                                                                                                                                                                                                                                                                                    * @module ui-bb-transaction-search-filter-ng
	                                                                                                                                                                                                                                                                                                                                                                                    * @description
	                                                                                                                                                                                                                                                                                                                                                                                    * UI transaction-search filter component
	                                                                                                                                                                                                                                                                                                                                                                                    *
	                                                                                                                                                                                                                                                                                                                                                                                    * @example
	                                                                                                                                                                                                                                                                                                                                                                                    * // In an extension:
	                                                                                                                                                                                                                                                                                                                                                                                    * // file: scripts/index.js
	                                                                                                                                                                                                                                                                                                                                                                                    * import uiBbTransactionSearchFilterKey from 'ui-bb-transaction-search-filter-ng';
	                                                                                                                                                                                                                                                                                                                                                                                    *
	                                                                                                                                                                                                                                                                                                                                                                                    * export const dependencyKeys = [
	                                                                                                                                                                                                                                                                                                                                                                                    *   uiBbTransactionSearchFilterKey,
	                                                                                                                                                                                                                                                                                                                                                                                    * ];
	                                                                                                                                                                                                                                                                                                                                                                                    *
	                                                                                                                                                                                                                                                                                                                                                                                    * // file: templates/template.ng.html
	                                                                                                                                                                                                                                                                                                                                                                                    * <ui-bb-transaction-search-filter-ng
	                                                                                                                                                                                                                                                                                                                                                                                    * on-filter="$ctrl.filter()"
	                                                                                                                                                                                                                                                                                                                                                                                    * button-labels="{
	                                                                                                                                                                                                                                                                                                                                                                                    *  main: 'Filter',
	                                                                                                                                                                                                                                                                                                                                                                                    *  apply: 'Apply',
	                                                                                                                                                                                                                                                                                                                                                                                    *  cancel: 'Cancel',
	                                                                                                                                                                                                                                                                                                                                                                                    * }"
	                                                                                                                                                                                                                                                                                                                                                                                    * field-labels="{
	                                                                                                                                                                                                                                                                                                                                                                                    *  transaction: 'Transaction',
	                                                                                                                                                                                                                                                                                                                                                                                    *  credit: 'Credit',
	                                                                                                                                                                                                                                                                                                                                                                                    *  debit: 'Debit',
	                                                                                                                                                                                                                                                                                                                                                                                    *  dateRange: 'Date range',
	                                                                                                                                                                                                                                                                                                                                                                                    *  amountRange: 'Amount range',
	                                                                                                                                                                                                                                                                                                                                                                                    *  amountFrom: 'Amount from',
	                                                                                                                                                                                                                                                                                                                                                                                    *  amountTo: 'Amount to',
	                                                                                                                                                                                                                                                                                                                                                                                    *  billed: 'Billed',
	                                                                                                                                                                                                                                                                                                                                                                                    *  unbilled: 'Unbilled',
	                                                                                                                                                                                                                                                                                                                                                                                    *  pending: 'Pending',
	                                                                                                                                                                                                                                                                                                                                                                                    *  billingStatus: 'Billing status'
	                                                                                                                                                                                                                                                                                                                                                                                    * }">
	                                                                                                                                                                                                                                                                                                                                                                                    * </ui-bb-transaction-search-filter-ng>
	                                                                                                                                                                                                                                                                                                                                                                                    */

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_74__;

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_75__;

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_76__;

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_77__;

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var uiBbTransactionSearchFilterComponent = {
	  controller: 'uiBbTransactionSearchFilterController',
	  bindings: {
	    onFilter: '&',
	    buttonLabels: '<',
	    fieldLabels: '<',
	    currencies: '<',
	    categories: '<',
	    transactionsEnumValues: '<',
	    filters: '<'
	  },
	  template: '\n    <div class="border">\n      <div class="input-group p-3">\n        <ui-bb-search-box-ng\n          class="float-left pr-2"\n          data-config="{\n            hideButton: false,\n            showIcon: false,\n            labels: {\n              title: $ctrl.fieldLabels.search,\n              placeholder: $ctrl.fieldLabels.search,\n              clear: $ctrl.fieldLabels.clearSearch,\n              submit: $ctrl.fieldLabels.submitSearch,\n            }\n          }"\n          data-ng-model="$ctrl.filterParams.query"\n          data-on-submit="$ctrl.onApplyFilter(searchFilterForm)"\n          data-on-clear="$ctrl.onApplyFilter(searchFilterForm)">\n        </ui-bb-search-box-ng>\n        <button\n          type="button"\n          data-ng-class="{ \'active\' : $ctrl.state.isFilterOpen }"\n          class="btn btn-outline-secondary btn-filter float-left"\n          data-role="filter"\n          data-ng-click="$ctrl.toggleFilter()"\n          title="{{ $ctrl.buttonLabels.main }}">\n          <i class="fa fa-filter" aria-hidden="true"></i>\n          <span class="d-none d-sm-inline">{{ $ctrl.buttonLabels.main }}</span>\n        </button>\n      </div>\n\n      <form data-role="search"\n        name="searchFilterForm"\n        data-ng-submit="$ctrl.onApplyFilter(searchFilterForm)"\n        data-ui-bb-track-changes-ng="$ctrl.filterParams">\n        \n        <div data-ng-show="$ctrl.state.isFilterOpen">\n          <div class="card-body card-body-dark">\n            <div class="row">\n              <div ng-repeat="filter in $ctrl.filters" class="col-lg-6">\n                <ng-include src="\'ui-bb-transaction-search-filter-ng/\' + filter + \'.html\'">\n                </ng-include>\n              </div>\n            </div>\n          </div>\n          \n          <div class="card-footer card-footer-darker">\n            <div class="d-flex flex-column-reverse flex-md-row justify-content-md-end">\n              <div class="d-none d-md-block text-right">\n                <button \n                  type="button"\n                  class="btn btn-link"\n                  data-ng-show="searchFilterForm.$dirty"\n                  data-ng-click="$ctrl.onClearFilter(searchFilterForm)"\n                  title="{{ $ctrl.buttonLabels.clearAll }}"\n                  data-role="clear-all">\n                  {{ $ctrl.buttonLabels.clearAll }}\n                </button>\n                <button\n                  type="button" \n                  class="btn btn-secondary"\n                  data-ng-click="$ctrl.toggleFilter()"\n                  title="{{ $ctrl.buttonLabels.closePanel }}"\n                  data-role="cancel">\n                  {{ $ctrl.buttonLabels.closePanel }}\n                </button>\n                <button\n                  data-ng-disabled="$ctrl.isFormValid(searchFilterForm)"\n                  class="btn btn-primary"\n                  title="{{ $ctrl.buttonLabels.apply }}"\n                  data-ng-click="$ctrl.toggleFilter()"\n                  data-role="apply">\n                  {{ $ctrl.buttonLabels.apply }}\n                </button>\n              </div>\n              <div class="d-block d-md-none">\n                <button\n                  data-ng-disabled="$ctrl.isFormValid(searchFilterForm)"\n                  class="btn btn-primary btn-block"\n                  title="{{ $ctrl.buttonLabels.apply }}"\n                  data-ng-click="$ctrl.toggleFilter()"\n                  data-role="apply">\n                  {{ $ctrl.buttonLabels.apply }}\n                </button>\n                <button\n                  type="button" \n                  class="btn btn-secondary btn-block"\n                  data-ng-click="$ctrl.toggleFilter()"\n                  title="{{ $ctrl.buttonLabels.closePanel }}"\n                  data-role="cancel">\n                  {{ $ctrl.buttonLabels.closePanel }}\n                </button>\n                <button \n                  type="button"\n                  class="btn btn-link btn-block"\n                  data-ng-show="searchFilterForm.$dirty"\n                  data-ng-click="$ctrl.onClearFilter(searchFilterForm)"\n                  title="{{ $ctrl.buttonLabels.clearAll }}"\n                  data-role="clear-all">\n                  {{ $ctrl.buttonLabels.clearAll }}\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n\n    <!-- Credit Debit Indicator -->\n    <script\n      type="text/ng-template"\n      id="ui-bb-transaction-search-filter-ng/creditDebitIndicator.html">\n      <div class="form-group">\n        <label data-role="credit-debit-indicator-label">\n          {{ $ctrl.fieldLabels.transaction }}\n        </label>\n        <ui-bb-dropdown-select-ng\n          data-ng-model="$ctrl.filterParams.creditDebitIndicator"\n          data-role="select-debit-credit"\n          data-selected-as="$option.label">\n          <ui-bb-dropdown-option-ng\n            data-option="option"\n            data-role="{{ $option.role }}"\n            data-arrow-navigation="true"\n            data-ng-repeat="option in $ctrl.creditDebitIndicatorOptions"\n            class="list-group-item-text">\n              {{ $option.label }}\n          </ui-bb-dropdown-option-ng>\n        </ui-bb-dropdown-select-ng>\n      </div>\n    </script>\n\n    <!-- Billing Status -->\n    <script type="text/ng-template" id="ui-bb-transaction-search-filter-ng/billingStatus.html">\n      <div data-ng-if="$ctrl.fieldLabels.billingStatus">\n        <div class="form-group">\n          <label data-role="billing-status-label">\n            {{ $ctrl.fieldLabels.billingStatus }}\n          </label>\n          <ui-bb-dropdown-select-ng\n            data-ng-model="$ctrl.filterParams.billingStatus"\n            data-role="select-billing-status"\n            data-selected-as="$option.labelKey | i18n">\n            <ui-bb-dropdown-option-ng\n              data-option="option"\n              data-role="{{ $option.role }}"\n              data-arrow-navigation="true"\n              data-ng-repeat="option in\n                ($ctrl.transactionsEnumValues.billingStatus || $ctrl.billingStatusOptions)"\n              class="list-group-item-text">\n                {{ $option.labelKey | i18n }}\n            </ui-bb-dropdown-option-ng>\n          </ui-bb-dropdown-select-ng>\n        </div>\n      </div>\n    </script>\n\n    <!-- Currency -->\n    <script type="text/ng-template" id="ui-bb-transaction-search-filter-ng/currency.html">\n      <div data-ng-if="$ctrl.currencies">\n        <div class="form-group">\n          <label data-role="currency-label">{{ $ctrl.fieldLabels.currency }}</label>\n          <div>\n            <select class="form-control"\n              data-ng-model="$ctrl.filterParams.currency"\n              data-role="select-currency">\n              <option" value="" disabled>{{ $ctrl.fieldLabels.select }}</option>\n              <option\n                data-ng-repeat="currency in $ctrl.currencies"\n                data-role="currency-{{ currency.name }}"\n                value="{{ currency.name }}">\n                {{ currency.name }}\n              </option>\n            </select>\n          </div>\n        </div>\n      </div>\n    </script>\n\n    <!-- Amount Range -->\n    <script type="text/ng-template" id="ui-bb-transaction-search-filter-ng/amountRange.html">\n      <label data-role="amount-range-label">{{ $ctrl.fieldLabels.amountRange }}</label>\n      <div class="row">\n        <div class="col-lg-6">\n          <div class="form-group">\n            <input\n              type="number"\n              min="0"\n              class="amount-range-start form-control"\n              data-ng-model="$ctrl.filterParams.amountFrom"\n              data-ng-keypress="$ctrl.validateAmountKeypress($event)"\n              data-ng-paste="$ctrl.validateAmountPaste($event)"\n              placeholder="{{ $ctrl.fieldLabels.amountFrom }}"\n              title="{{ $ctrl.fieldLabels.amountFrom }}"\n              data-role="amount-from"/>\n            </div>\n        </div>\n        <div class="col-lg-6">\n          <div class="form-group">\n            <input\n              type="number"\n              min="0"\n              class="amount-range-end form-control"\n              data-ng-model="$ctrl.filterParams.amountTo"\n              data-ng-keypress="$ctrl.validateAmountKeypress($event)"\n              data-ng-paste="$ctrl.validateAmountPaste($event)"\n              placeholder="{{ $ctrl.fieldLabels.amountTo }}"\n              title="{{ $ctrl.fieldLabels.amountTo }}"\n              data-role="amount-to"/>\n            </div>\n        </div>\n      </div>\n    </script>\n\n    <!-- Date Range -->\n    <script type="text/ng-template" id="ui-bb-transaction-search-filter-ng/dateRange.html">\n      <div class="form-group">\n        <label data-role="date-range-label">{{ $ctrl.fieldLabels.dateRange }}</label>\n        <ui-bb-calendar-popup-ng\n          class="date-range-start"\n          data-config="$ctrl.calendarPopupConfig"\n          data-date-range="$ctrl.filterParams.dateRange"\n          disabled="false"\n          data-role="from-date">\n        </ui-bb-calendar-popup-ng>\n      </div>\n    </script>\n\n    <!-- Categories -->\n    <script type="text/ng-template" id="ui-bb-transaction-search-filter-ng/categories.html">\n      <div data-ng-if="$ctrl.categories">\n        <div class="form-group">\n          <label data-role="category-label">{{ $ctrl.fieldLabels.category }}</label>\n          <ui-bb-dropdown-select-ng\n            data-ng-model="$ctrl.filterParams.categories"\n            data-multiple="true"\n            data-template-url="ui-bb-transaction-search-filter-ng/categoryList.html"\n            data-menu-class="dropdown-menu-no-checkmarks py-0">\n            <ui-bb-list-ng class="d-block pre-scrollable">\n              <div data-ng-repeat="category in $ctrl.categories">\n                <ui-bb-dropdown-option-ng\n                  data-option="category"\n                  data-arrow-navigation="true"\n                  class="{{ category.subCategories ? \'card-header border-top\' : \'\' }}">\n                  <input type="checkbox"\n                    value="{{ $option.id }}"\n                    tabindex="-1"\n                    data-ng-click="$ctrl.select(); $event.stopPropagation()"\n                    data-ng-checked="$ctrl.isSelected()"\n                    data-ng-disabled="$option.disabled">\n                  <span aria-hidden="true"\n                    class="bb-transaction-category bb-transaction-category-icon\n                      bb-transaction-category-icon-small {{ ::$option.categoryIconClass }}">\n                  </span>\n                  {{ ::$option.categoryName }}\n                </ui-bb-dropdown-option-ng>\n                <div\n                  class="list-group list-group-flush"\n                  data-ng-if="category.subCategories">\n                  <ui-bb-dropdown-option-ng\n                    data-option="subCategory"\n                    data-arrow-navigation="true"\n                    data-ng-repeat="subCategory in category.subCategories"\n                    class="list-group-item pl-5">\n                    <input type="checkbox"\n                      value="{{ $option.id }}"\n                      tabindex="-1"\n                      class="mr-2"\n                      data-ng-click="$ctrl.select(); $event.stopPropagation()"\n                      data-ng-checked="$ctrl.isSelected()"\n                      data-ng-disabled="$option.disabled">\n                    {{ ::$option.categoryName }}\n                  </ui-bb-dropdown-option-ng>\n                </div>\n              </div>\n            </ui-bb-list-ng>\n          </ui-bb-dropdown-select-ng>\n        </div>\n      </div>\n    </script>\n\n    <script type="text/ng-template" id="ui-bb-transaction-search-filter-ng/categoryList.html">\n      <span data-ng-repeat="category in $option">\n        {{ category.categoryName }}{{ $last ? \'\' : \', \' }}\n      </span>\n    </script>\n\n    <!-- Check Serial Number -->\n    <script\n      type="text/ng-template"\n      id="ui-bb-transaction-search-filter-ng/checkSerialNumberRange.html">\n      <div data-ng-if="$ctrl.fieldLabels.checkSerialNumberRange">\n        <label data-role="check-serial-number-range-label">\n          {{ $ctrl.fieldLabels.checkSerialNumberRange }}\n        </label>\n        <div class="row">\n          <div class="col-lg-6">\n            <div class="form-group">\n              <input\n                type="number"\n                min="0"\n                class="check-serial-number-range-start form-control"\n                data-ng-model="$ctrl.filterParams.checkSerialNumberFrom"\n                data-ng-keypress="$ctrl.validateAmountKeypress($event)"\n                data-ng-paste="$ctrl.validateAmountPaste($event)"\n                placeholder="{{ $ctrl.fieldLabels.checkSerialNumberFrom }}"\n                title="{{ $ctrl.fieldLabels.checkSerialNumberFrom }}"\n                data-role="check-serial-number-from"/>\n            </div>\n          </div>\n          <div class="col-lg-6">\n            <div class="form-group">\n              <input\n                type="number"\n                min="0"\n                class="check-serial-number-range-end form-control"\n                data-ng-model="$ctrl.filterParams.checkSerialNumberTo"\n                data-ng-keypress="$ctrl.validateAmountKeypress($event)"\n                data-ng-paste="$ctrl.validateAmountPaste($event)"\n                placeholder="{{ $ctrl.fieldLabels.checkSerialNumberTo }}"\n                title="{{ $ctrl.fieldLabels.checkSerialNumberTo }}"\n                data-role="check-serial-number-to"/>\n            </div>\n          </div>\n        </div>\n      </div>\n    </script>\n  '
	};
	
	exports.default = uiBbTransactionSearchFilterComponent;

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbTransactionSearchFilterController;
	
	var _constants = __webpack_require__(80);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function uiBbTransactionSearchFilterController() {
	  /**
	   * @name uiBbTransactionSearchFilterController
	   * @ngkey uiBbTransactionSearchFilterController
	   * @type {object}
	   *
	   * @description
	   * TransactionSearch filter controller
	   */
	  var $ctrl = this;
	
	  /**
	   * @name uiBbTransactionSearchFilterController#state
	   * @type {object}
	   *
	   * @description
	   * State object.
	   */
	  var state = {
	    isFilterOpen: false
	  };
	  /**
	   * @name uiBbTransactionSearchFilterController#immutableFilter
	   * @type {object}
	   * @inner
	   *
	   * @description
	   * Immutable filter parameters `immutableFilter` object.
	   */
	  var immutableFilter = Object.assign({}, _constants2.default);
	
	  /**
	   * @name uiBbTransactionSearchFilterController#filterParams
	   * @type {object}
	   *
	   * @description
	   * `filterParams` parameters object.
	   */
	  var filterParams = Object.assign({ query: '' }, angular.copy(immutableFilter));
	
	  var calendarPopupConfig = { minDate: '0', maxDate: new Date(), maxMode: 'year' };
	
	  /**
	   * @name creditDebitIndicatorOptions
	   * @type {object[]}
	   *
	   * @description
	   * Array of selectable Credit/Debit indicator options
	   */
	  var creditDebitIndicatorOptions = void 0;
	
	  /**
	   * @name billingStatusOptions
	   * @type {object[]}
	   *
	   * @description
	   * Array of selectable Billing status options
	   */
	  var billingStatusOptions = void 0;
	
	  /**
	   * @name uiBbTransactionSearchFilterController#toggleFilter
	   * @type {function}
	   * @returns {boolean} A status of filter component
	   *
	   * @description
	   * Toggle filter component.
	   */
	  var toggleFilter = function toggleFilter() {
	    return state.isFilterOpen = !state.isFilterOpen;
	  };
	
	  /**
	   * @name uiBbTransactionSearchFilterController#getNormalizedDate
	   * @type {function}
	   * @inner
	   * @returns {String|null} Date string or null
	   *
	   * @description
	   * Normalize date to required format.
	   */
	  var getNormalizedDate = function getNormalizedDate(date) {
	    if (date === null || date === undefined) {
	      return null;
	    }
	    var userOffset = date.getTimezoneOffset() * 60000;
	    return '' + new Date(date - userOffset).toISOString().slice(0, 10);
	  };
	
	  /**
	   * @name uiBbTransactionSearchFilterController#normalizeQueryParam
	   * @type {function}
	   * @inner
	   * @returns {String|null} Query parameter string or null
	   *
	   * @description
	   * Normalize search query param.
	   */
	  var normalizeQueryParam = function normalizeQueryParam(param) {
	    return param === '' ? null : param;
	  };
	
	  /**
	   * @name uiBbTransactionSearchFilterController#normalizeCreditDebitIndicatorParam
	   * @type {function}
	   * @inner
	   * @returns {String|null} Selected value string or null
	   *
	   * @description
	   * Normalize creditDebitIndicator query param.
	   */
	  var normalizeCreditDebitIndicatorParam = function normalizeCreditDebitIndicatorParam(param) {
	    return !param ? null : param.value;
	  };
	
	  /**
	   * @name uiBbTransactionSearchFilterController#normalizeBillingStatusParam
	   * @type {function}
	   * @inner
	   * @returns {String|null} Selected value string or null
	   *
	   * @description
	   * Normalize billingStatus query param.
	   */
	  var normalizeBillingStatusParam = function normalizeBillingStatusParam(param) {
	    return !param ? null : param.value;
	  };
	
	  /**
	   * @name uiBbTransactionSearchFilterController#normalizeCategoriesParam
	   * @type {function}
	   * @inner
	   * @returns {String[]|null} Array of categories or null
	   *
	   * @description
	   * Normalize categories query param.
	   */
	  var normalizeCategoriesParam = function normalizeCategoriesParam(categoriesArray) {
	    return categoriesArray.length === 0 ? null : categoriesArray.map(function (category) {
	      return category.categoryName;
	    });
	  };
	
	  /**
	   * @name uiBbTransactionSearchFilterController#getParams
	   * @type {function}
	   * @inner
	   * @returns {Object} Object with normalized filter parameters
	   *
	   * @description
	   * Get all filter params.
	   */
	  var getParams = function getParams() {
	    return Object.assign({}, {
	      query: normalizeQueryParam(filterParams.query),
	      fromDate: getNormalizedDate(filterParams.dateRange.startDate),
	      toDate: getNormalizedDate(filterParams.dateRange.endDate),
	      amountFrom: filterParams.amountFrom,
	      amountTo: filterParams.amountTo,
	      currency: filterParams.currency,
	      creditDebitIndicator: normalizeCreditDebitIndicatorParam(filterParams.creditDebitIndicator),
	      billingStatus: normalizeBillingStatusParam(filterParams.billingStatus),
	      categories: normalizeCategoriesParam(filterParams.categories),
	      checkSerialNumberFrom: filterParams.checkSerialNumberFrom,
	      checkSerialNumberTo: filterParams.checkSerialNumberTo
	    });
	  };
	
	  /**
	   * @name uiBbTransactionSearchFilterController#resetFormState
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Reset form state method.
	   */
	  var resetFormState = function resetFormState(form) {
	    if (form) {
	      form.$setUntouched();
	      form.$setPristine();
	    }
	  };
	
	  /**
	   * @name uiBbTransactionSearchFilterController#onApplyFilter
	   * @type {function}
	   *
	   * @description
	   * Call filter method.
	   */
	  var onApplyFilter = function onApplyFilter() {
	    $ctrl.onFilter({ params: getParams() });
	  };
	
	  /**
	   * @name uiBbTransactionSearchFilterController#onClearFilter
	   * @type {function}
	   *
	   * @description
	   * Reset filter parameters.
	   */
	  var onClearFilter = function onClearFilter(form) {
	    Object.assign(filterParams, angular.copy(immutableFilter));
	
	    onApplyFilter(form);
	    resetFormState(form);
	  };
	
	  /**
	   * @name uiBbTransactionSearchFilterController#validateAmountKeypress
	   * @type {function}
	   * @param {KeyboardEvent} event - the browser event
	   *
	   * @description
	   * Validates the key pressed in the number input field.
	   * Prevents the event if the key is an invalid one (not a number)
	   * Allows arrow keys
	   */
	  var validateAmountKeypress = function validateAmountKeypress(event) {
	    var validKey = event.metaKey // ctrl/alt/cmd
	    || event.which <= 0 // arrow keys
	    || event.which === 8 // delete key
	    || /[0-9]/.test(String.fromCharCode(event.which)); // numbers
	
	    if (!validKey) {
	      event.preventDefault();
	    }
	  };
	
	  /**
	   * @name uiBbTransactionSearchFilterController#validateAmountPaste
	   * @type {function}
	   * @param {KeyboardEvent} event - the browser event
	   *
	   * @description
	   * Validates the pasted value in the input field.
	   * Prevents the event if the value is an invalid one (not a number)
	   */
	  var validateAmountPaste = function validateAmountPaste(event) {
	    var pasteData = event.clipboardData.getData('text/plain');
	    if (pasteData.match(/[^0-9]/)) {
	      event.preventDefault();
	    }
	  };
	
	  /**
	   * @name uiBbTransactionSearchFilterController#isFormValid
	   * @type {function}
	   *
	   * @description
	   * Check if form state is pristine or invalid.
	   */
	  var isFormValid = function isFormValid(form) {
	    return !form || form.$pristine || form.$invalid;
	  };
	
	  /**
	   * @name uiBbTransactionSearchFilterController#validateFilters
	   * @type {function}
	   * @inner
	   * @param {Array.<string>} filters List of filters
	   * @returns {Array.<string>} List of valid filters
	   *
	   * @description
	   * Check if filters passed to component are valid.  Removes unknown filters or returns default
	   * set of filters if empty.
	   */
	  var validateFilters = function validateFilters(filters) {
	    if (filters.length === 0) {
	      return _constants.defaultFilters;
	    }
	
	    var validFilters = Object.values(_constants.Filter);
	    return filters.filter(function (filter) {
	      return validFilters.indexOf(filter) > -1;
	    });
	  };
	
	  var $onInit = function $onInit() {
	    $ctrl.filters = validateFilters($ctrl.filters || []);
	
	    $ctrl.creditDebitIndicatorOptions = _constants.creditDebitIndicators.map(function (option) {
	      return Object.assign(option, {
	        label: $ctrl.fieldLabels ? $ctrl.fieldLabels[option.labelKey] : option.labelKey,
	        role: option.labelKey
	      });
	    });
	
	    $ctrl.billingStatusOptions = _constants.billingStatuses.map(function (option) {
	      return Object.assign(option, {
	        label: $ctrl.fieldLabels ? $ctrl.fieldLabels[option.labelKey] : option.labelKey,
	        role: option.labelKey
	      });
	    });
	  };
	
	  Object.assign($ctrl, {
	    state: state,
	    calendarPopupConfig: calendarPopupConfig,
	    filterParams: filterParams,
	    onApplyFilter: onApplyFilter,
	    onClearFilter: onClearFilter,
	    toggleFilter: toggleFilter,
	    isFormValid: isFormValid,
	    validateAmountKeypress: validateAmountKeypress,
	    validateAmountPaste: validateAmountPaste,
	    creditDebitIndicatorOptions: creditDebitIndicatorOptions,
	    billingStatusOptions: billingStatusOptions,
	    $onInit: $onInit
	  });
	} /* global angular */

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name filterConstants
	 * @type {object}
	 *
	 * @description
	 * `filterConstants` parameters object.
	 */
	var filterConstants = {
	  amountFrom: null,
	  amountTo: null,
	  currency: null,
	  dateRange: {
	    startDate: null,
	    endDate: null
	  },
	  creditDebitIndicator: null,
	  billingStatus: null,
	  categories: [],
	  checkSerialNumberFrom: null,
	  checkSerialNumberTo: null
	};
	
	/**
	 * @name Filter
	 * @type {object}
	 *
	 * @description
	 * Filter enum
	 */
	var Filter = exports.Filter = {
	  CREDIT_DEBIT_INDICATOR: 'creditDebitIndicator',
	  BILLING_STATUS: 'billingStatus',
	  CURRENCY: 'currency',
	  AMOUNT_RANGE: 'amountRange',
	  DATE_RANGE: 'dateRange',
	  CATEGORIES: 'categories',
	  CHECK_SERIAL_NUMBER_RANGE: 'checkSerialNumberRange'
	};
	
	/**
	 * @name defaultFilters
	 * @type {Array.<string>}
	 */
	var defaultFilters = exports.defaultFilters = [Filter.CREDIT_DEBIT_INDICATOR, Filter.BILLING_STATUS, Filter.AMOUNT_RANGE, Filter.DATE_RANGE, Filter.CATEGORIES, Filter.CHECK_SERIAL_NUMBER_RANGE];
	
	/**
	 * @name creditDebitIndicators
	 * @type {Array.<object>}
	 *
	 * @description
	 * Available options in creditDebitIndicator dropdown
	 */
	var creditDebitIndicators = exports.creditDebitIndicators = [{
	  labelKey: 'credit',
	  value: 'CRDT'
	}, {
	  labelKey: 'debit',
	  value: 'DBIT'
	}];
	
	/**
	 * @name billingStatuses
	 * @type {Array.<object>}
	 *
	 * @description
	 * Available options in billingStatus dropdown
	 */
	var billingStatuses = exports.billingStatuses = [{
	  labelKey: 'billing.status.label.billed',
	  value: 'BILLED'
	}, {
	  labelKey: 'billing.status.label.unbilled',
	  value: 'UNBILLED'
	}, {
	  labelKey: 'billing.status.label.pending',
	  value: 'PENDING'
	}];
	
	exports.default = filterConstants;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-transaction-search-filter-ng.js.map