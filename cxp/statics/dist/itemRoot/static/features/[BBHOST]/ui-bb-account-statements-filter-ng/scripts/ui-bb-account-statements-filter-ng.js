(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("ui-bb-calendar-popup-ng"), require("ui-bb-track-form-changes-ng"), require("ui-bb-account-statements-category-filter-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-account-statements-filter-ng", ["vendor-bb-angular", "ui-bb-calendar-popup-ng", "ui-bb-track-form-changes-ng", "ui-bb-account-statements-category-filter-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-account-statements-filter-ng"] = factory(require("vendor-bb-angular"), require("ui-bb-calendar-popup-ng"), require("ui-bb-track-form-changes-ng"), require("ui-bb-account-statements-category-filter-ng"));
	else
		root["ui-bb-account-statements-filter-ng"] = factory(root["vendor-bb-angular"], root["ui-bb-calendar-popup-ng"], root["ui-bb-track-form-changes-ng"], root["ui-bb-account-statements-category-filter-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_37__) {
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

	module.exports = __webpack_require__(34);

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(25);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbCalendarPopupNg = __webpack_require__(35);
	
	var _uiBbCalendarPopupNg2 = _interopRequireDefault(_uiBbCalendarPopupNg);
	
	var _uiBbTrackFormChangesNg = __webpack_require__(36);
	
	var _uiBbTrackFormChangesNg2 = _interopRequireDefault(_uiBbTrackFormChangesNg);
	
	var _uiBbAccountStatementsCategoryFilterNg = __webpack_require__(37);
	
	var _uiBbAccountStatementsCategoryFilterNg2 = _interopRequireDefault(_uiBbAccountStatementsCategoryFilterNg);
	
	var _component = __webpack_require__(38);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _controller = __webpack_require__(39);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description The angular module name
	 */
	/**
	 * @module ui-bb-account-statements-filter-ng
	 * @description
	 * UI account statements filter component
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbAccountStatementsFilterKey from 'ui-bb-account-statements-filter-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbAccountStatementsFilterKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-account-statements-filter-ng on-filter="$ctrl.filter()">
	 * </ui-bb-account-statement-filter-ng>
	 */
	
	exports.default = _vendorBbAngular2.default.module('ui-bb-account-statements-filter-ng', [_uiBbCalendarPopupNg2.default, _uiBbTrackFormChangesNg2.default, _uiBbAccountStatementsCategoryFilterNg2.default]).component('uiBbAccountStatementsFilterNg', _component2.default).controller('uiBbAccountStatementsFilterController', [_controller2.default]).name;

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_35__;

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name uiBbAccountStatementsFilter
	 * @type {Object}
	 *
	 * @property {Function} onFilter Function to be called once the filter is applied
	 * @property {Function} onClear Function to be called once the filter is cleared
	 * @property {ButtonLabels} buttonLabels Object with translated button labels
	 * @property {FieldLabels} fieldLabels Object with translated field labels
	 * @property {Object} datepickerConfig Object with config for datePicker
	 */
	var uiBbAccountStatementsFilterComponent = {
	  bindings: {
	    onFilter: '&',
	    onClear: '&?',
	    buttonLabels: '<',
	    fieldLabels: '<',
	    datepickerConfig: '<',
	    categoryConfig: '<',
	    showCategories: '<'
	  },
	  controller: 'uiBbAccountStatementsFilterController',
	  template: '\n  <div class="card card-flat">\n    <form data-role="search"\n      name="searchFilterForm"\n      data-ng-submit="$ctrl.onApplyFilter(searchFilterForm);$ctrl.toggleFilter()"\n      data-ui-bb-track-changes-ng="$ctrl.state.params">\n      <div class="card-header">\n        <div class="col-12 p-0 text-right">\n          <button type="button"\n            data-ng-class="{ \'active\' : $ctrl.state.isFilterOpen }"\n            class="btn btn-secondary btn-filter"\n            data-role="filter"\n            data-ng-click="$ctrl.toggleFilter()"\n            title="{{ $ctrl.buttonLabels.main }}">\n            <i class="fa fa-filter" aria-hidden="true"></i>\n            {{ $ctrl.buttonLabels.main }}\n          </button>\n        </div>\n      </div>\n      <div data-ng-show="$ctrl.state.isFilterOpen">\n        <div class="card-body card-body-dark">\n          <div class="row">\n            <div class="col-lg-6">\n              <div class="form-group"\n                data-ng-if="$ctrl.categoryConfig \n                  && $ctrl.categoryConfig.categories.length > 0 \n                  && $ctrl.showCategories">\n                <label data-role="category-label"\n                  data-ng-bind="$ctrl.fieldLabels.category">\n                </label>\n                <ui-bb-account-statements-category-filter-ng\n                  data-ng-model="$ctrl.state.params.category"\n                  data-on-change="searchFilterForm.$setDirty()"\n                  data-multi="$ctrl.categoryConfig.isMultiCategory"\n                  data-options="$ctrl.categoryConfig.categories">\n                </ui-bb-account-statements-category-filter-ng>\n              </div>\n              <div class="form-group">\n                <label data-role="date-range-label"\n                  data-ng-bind="$ctrl.fieldLabels.dateRange">\n                </label>\n                <ui-bb-calendar-popup-ng class="date-range-start"\n                  data-config="$ctrl.state.datePickerConfig"\n                  data-date-range="$ctrl.state.params.dateRange"\n                  disabled="false"\n                  data-role="date-range">\n                </ui-bb-calendar-popup-ng>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="card-footer card-footer-darker">\n          <div class="row">\n            <div class="col-12">\n              <div class="d-none d-md-block text-right">\n                <button type="button"\n                  class="btn btn-link"\n                  data-ng-show="searchFilterForm.$dirty"\n                  data-ng-click="$ctrl.onClearFilter(searchFilterForm)"\n                  title="{{ $ctrl.buttonLabels.clearAll }}"\n                  data-role="clear-all"\n                  data-ng-bind="$ctrl.buttonLabels.clearAll">\n                </button>\n                <button type="button"\n                  class="btn btn-secondary"\n                  data-ng-click="$ctrl.toggleFilter()"\n                  title="{{ $ctrl.buttonLabels.closePanel }}"\n                  data-role="cancel"\n                  data-ng-bind="$ctrl.buttonLabels.closePanel">\n                </button>\n                <button data-ng-disabled="$ctrl.isFormValid(searchFilterForm)"\n                  class="btn btn-primary"\n                  title="{{ $ctrl.buttonLabels.apply }}"\n                  data-role="apply"\n                  data-ng-bind="$ctrl.buttonLabels.apply">\n                </button>\n              </div>\n              <div class="d-block d-md-none">\n                <button\n                  data-ng-disabled="$ctrl.isFormValid(searchFilterForm)"\n                  class="btn btn-primary btn-block"\n                  title="{{ $ctrl.buttonLabels.apply }}"\n                  data-role="apply"\n                  data-ng-bind="$ctrl.buttonLabels.apply">\n                </button>\n                <button\n                  type="button"\n                  class="btn btn-secondary btn-block"\n                  data-ng-click="$ctrl.toggleFilter()"\n                  title="{{ $ctrl.buttonLabels.closePanel }}"\n                  data-role="cancel"\n                  data-ng-bind="$ctrl.buttonLabels.closePanel">\n                </button>\n                <button\n                  type="button"\n                  class="btn btn-link btn-block"\n                  data-ng-show="searchFilterForm.$dirty"\n                  data-ng-click="$ctrl.onClearFilter(searchFilterForm)"\n                  title="{{ $ctrl.buttonLabels.clearAll }}"\n                  data-role="clear-all"\n                  data-ng-bind="$ctrl.buttonLabels.clearAll">\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  '
	};
	
	exports.default = uiBbAccountStatementsFilterComponent;
	
	/**
	 * Labels type definition
	 * @typedef {Object} ButtonLabels
	 * @property {String} main Label for main filter button
	 * @property {String} apply Label for button that applies filter
	 * @property {String} closePanel Label for button that closes filter card
	 * @property {String} clearAll Label for button that clears filter
	 */
	
	/**
	 * Labels type definition
	 * @typedef {Object} FieldLabels
	 * @property {String} dateRange Datepicker label
	 */

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbAccountStatementsFilterController;
	function uiBbAccountStatementsFilterController() {
	  /**
	   * @name uiBbAccountStatementsFilterController
	   * @ngkey uiBbAccountStatementsFilterController
	   * @type {object}
	   * @description Account Statements filter controller
	   */
	  var ctrl = this;
	
	  var maxDate = new Date();
	
	  var defaultDatePickerConfig = {
	    minDate: new Date(maxDate.getFullYear() - 3, maxDate.getMonth(), maxDate.getDate()),
	    maxDate: maxDate,
	    maxMode: 'year',
	    enableRestrictedRange: true
	  };
	
	  /**
	   * @description
	   * Filter state object.
	   *
	   * @name uiBbAccountStatementsFilterController#state
	   * @type {Object}
	   */
	  var state = {
	    isFilterOpen: false,
	    datePickerConfig: defaultDatePickerConfig,
	    params: {
	      category: null,
	      dateRange: {
	        startDate: null,
	        endDate: null
	      }
	    }
	  };
	
	  /**
	   * @description
	   * this is init function to assign the used datepicker and categeories config after loading
	   */
	  ctrl.$onInit = function () {
	    state.datePickerConfig = Object.assign({}, defaultDatePickerConfig, ctrl.datepickerConfig || {});
	  };
	
	  /**
	   * @description
	   * Toggle filter component.
	   *
	   * @public
	   * @name uiBbAccountStatementsFilterController#toggleFilter
	   * @type {function}
	   * @returns {boolean} A status of filter component
	   */
	  var toggleFilter = function toggleFilter() {
	    return state.isFilterOpen = !state.isFilterOpen;
	  };
	
	  /**
	   * @description
	   * Normalize date to required format.
	   *
	   * @inner
	   * @name uiBbAccountStatementsFilterController#getNormalizedDate
	   * @type {function}
	   * @param {object} date Date string
	   * @returns {String|null} Date object or null
	   */
	  var getNormalizedDate = function getNormalizedDate(date) {
	    if (date === null || date === undefined) {
	      return null;
	    }
	    var userOffset = date.getTimezoneOffset() * 60000;
	
	    return '' + new Date(date - userOffset).toISOString().slice(0, 10);
	  };
	
	  /**
	   * @description
	   * Normalize the categories object value
	   * The categories paramenter can also be a string
	   * in case the multiple categories prefrence is setted to false
	   *
	   * @inner
	   * @name uiBbAccountStatementsFilterController#getNormalizedCategory
	   * @type {function}
	   * @param {object|string} categories Object with booleans - {"category1":true,"category2":false}
	   * @returns {Array} List with all selected categories - ["category1"]
	   */
	  var getNormalizedCategory = function getNormalizedCategory(categories) {
	    if (!categories) {
	      return [];
	    }
	
	    if (typeof categories === 'string') {
	      return [categories];
	    }
	
	    return Object.keys(categories).filter(function (key) {
	      return categories[key];
	    });
	  };
	
	  /**
	   * @description
	   * Get all filter params.
	   *
	   * @inner
	   * @name uiBbAccountStatementsFilterController#getParams
	   * @type {function}
	   * @returns {object} Filter params
	   */
	  var getParams = function getParams() {
	    return {
	      dateFrom: getNormalizedDate(state.params.dateRange.startDate),
	      dateTo: getNormalizedDate(state.params.dateRange.endDate),
	      category: getNormalizedCategory(state.params.category)
	    };
	  };
	
	  /**
	   * @description
	   * Reset form state method.
	   *
	   * @inner
	   * @name uiBbAccountStatementsFilterController#resetFormState
	   * @type {function}
	   */
	  var resetFormState = function resetFormState(form) {
	    if (form) {
	      form.$setUntouched();
	      form.$setPristine();
	    }
	  };
	
	  /**
	   * @description
	   * Call filter method.
	   *
	   * @name uiBbAccountStatementsFilterController#onApplyFilter
	   * @type {function}
	   */
	  var onApplyFilter = function onApplyFilter() {
	    ctrl.onFilter({ params: getParams() });
	  };
	
	  /**
	   * @description
	   * Reset filter parameters.
	   *
	   * @name uiBbAccountStatementsFilterController#onClearFilter
	   * @type {function}
	   */
	  var onClearFilter = function onClearFilter(form) {
	    Object.assign(state.params, {
	      category: null,
	      dateRange: {
	        startDate: null,
	        endDate: null
	      }
	    });
	
	    onApplyFilter();
	    resetFormState(form);
	    ctrl.onClear();
	  };
	
	  /**
	   * @description
	   * Check if form state is pristine or invalid.
	   *
	   * @public
	   * @name uiBbAccountStatementsFilterController#isFormValid
	   * @type {function}
	   */
	  var isFormValid = function isFormValid(form) {
	    return !form || form.$pristine || form.$invalid;
	  };
	
	  Object.assign(ctrl, {
	    state: state,
	    onApplyFilter: onApplyFilter,
	    onClearFilter: onClearFilter,
	    toggleFilter: toggleFilter,
	    isFormValid: isFormValid
	  });
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-account-statements-filter-ng.js.map