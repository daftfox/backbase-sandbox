(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("ui-bb-calendar-popup-ng"), require("ui-bb-track-form-changes-ng"), require("ui-bb-filter-form-actions-ng"), require("ui-bb-dropdown-select-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-notifications-filter-ng", ["vendor-bb-angular", "ui-bb-calendar-popup-ng", "ui-bb-track-form-changes-ng", "ui-bb-filter-form-actions-ng", "ui-bb-dropdown-select-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-notifications-filter-ng"] = factory(require("vendor-bb-angular"), require("ui-bb-calendar-popup-ng"), require("ui-bb-track-form-changes-ng"), require("ui-bb-filter-form-actions-ng"), require("ui-bb-dropdown-select-ng"));
	else
		root["ui-bb-notifications-filter-ng"] = factory(root["vendor-bb-angular"], root["ui-bb-calendar-popup-ng"], root["ui-bb-track-form-changes-ng"], root["ui-bb-filter-form-actions-ng"], root["ui-bb-dropdown-select-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_42__, __WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_54__, __WEBPACK_EXTERNAL_MODULE_55__, __WEBPACK_EXTERNAL_MODULE_56__) {
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

	module.exports = __webpack_require__(52);

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_42__;

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(42);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbCalendarPopupNg = __webpack_require__(53);
	
	var _uiBbCalendarPopupNg2 = _interopRequireDefault(_uiBbCalendarPopupNg);
	
	var _uiBbTrackFormChangesNg = __webpack_require__(54);
	
	var _uiBbTrackFormChangesNg2 = _interopRequireDefault(_uiBbTrackFormChangesNg);
	
	var _uiBbFilterFormActionsNg = __webpack_require__(55);
	
	var _uiBbFilterFormActionsNg2 = _interopRequireDefault(_uiBbFilterFormActionsNg);
	
	var _uiBbDropdownSelectNg = __webpack_require__(56);
	
	var _uiBbDropdownSelectNg2 = _interopRequireDefault(_uiBbDropdownSelectNg);
	
	var _component = __webpack_require__(57);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _controller = __webpack_require__(58);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description The angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-notifications-filter-ng', [_uiBbCalendarPopupNg2.default, _uiBbTrackFormChangesNg2.default, _uiBbFilterFormActionsNg2.default, _uiBbDropdownSelectNg2.default]).component('uiBbNotificationsFilterNg', _component2.default).controller('uiBbNotificationsFilterController', ['$scope', _controller2.default]).name; /**
	                                                                                                                                                                                                                                                                                                                                                                               * @module ui-bb-notifications-filter-ng
	                                                                                                                                                                                                                                                                                                                                                                               * @description
	                                                                                                                                                                                                                                                                                                                                                                               * UI notifications filter component
	                                                                                                                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                                                                                                                               * @example
	                                                                                                                                                                                                                                                                                                                                                                               * // In an extension:
	                                                                                                                                                                                                                                                                                                                                                                               * // file: scripts/index.js
	                                                                                                                                                                                                                                                                                                                                                                               * import uiBbNotificationsFilterKey from 'ui-bb-notifications-filter-ng';
	                                                                                                                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                                                                                                                               * export const dependencyKeys = [
	                                                                                                                                                                                                                                                                                                                                                                               *   uiBbNotificationsFilterKey,
	                                                                                                                                                                                                                                                                                                                                                                               * ];
	                                                                                                                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                                                                                                                               * // file: templates/template.ng.html
	                                                                                                                                                                                                                                                                                                                                                                               * <ui-bb-notifications-filter-ng on-filter="$ctrl.filter()"
	                                                                                                                                                                                                                                                                                                                                                                               * header-labels="{
	                                                                                                                                                                                                                                                                                                                                                                               *  date: 'Date', searchInText: 'Search', searchInType: 'Search in type', level: 'Levels'
	                                                                                                                                                                                                                                                                                                                                                                               * }"
	                                                                                                                                                                                                                                                                                                                                                                               * level-labels="{ info: 'Info', alert: 'Alert', warning: 'Warning', success: 'Success' }"
	                                                                                                                                                                                                                                                                                                                                                                               * status-labels="{ read: 'Read', unread: 'Unread', all: 'All' }"
	                                                                                                                                                                                                                                                                                                                                                                               * button-labels="{
	                                                                                                                                                                                                                                                                                                                                                                               *  main: 'Filter',
	                                                                                                                                                                                                                                                                                                                                                                               *  apply: 'Apply',
	                                                                                                                                                                                                                                                                                                                                                                               *  reset: 'Reset',
	                                                                                                                                                                                                                                                                                                                                                                               *  clearFromDate: 'Clear "from" date"',
	                                                                                                                                                                                                                                                                                                                                                                               *  clearToDate: 'Clear "to" date"',
	                                                                                                                                                                                                                                                                                                                                                                               * }"
	                                                                                                                                                                                                                                                                                                                                                                               * on-clear-filter="$ctrl.clearFilter">
	                                                                                                                                                                                                                                                                                                                                                                               * </ui-bb-notifications-filter-ng>
	                                                                                                                                                                                                                                                                                                                                                                               */

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_54__;

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_55__;

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_56__;

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var uiBbNotificationsFilterComponent = {
	  bindings: {
	    onFilter: '&?',
	    headerLabels: '<',
	    levelLabels: '<',
	    statusLabels: '<',
	    buttonLabels: '<'
	  },
	  controller: 'uiBbNotificationsFilterController',
	  template: '\n    <div class="card-header text-right">\n      <button class="btn btn-secondary"\n        type="button"\n        data-ng-click="$ctrl.toggleFilter()"\n        title="{{ $ctrl.buttonLabels.main }}">\n        <i class="fa fa-sliders-h" aria-hidden="true"></i>\n        <span data-ng-bind="$ctrl.buttonLabels.main"></span>\n      </button>\n    </div>\n    <form data-ng-show="$ctrl.isOpen"\n      data-role="search"\n      name="filterForm"\n      data-ng-submit="$ctrl.onApplyFilter()"\n      data-ui-bb-track-changes="$ctrl.filterParams">\n      <div class="card-body">\n        <div class="row">\n          <div class="col-12 col-lg-4">\n            <label data-ng-bind="$ctrl.headerLabels.date"></label>\n            <div class="form-group">\n              <ui-bb-calendar-popup-ng\n                data-config="$ctrl.datePickerParams.config"\n                data-date-range="$ctrl.filterParams"\n              >\n              </ui-bb-calendar-popup-ng>\n            </div>\n          </div>\n        </div>\n        <div class="row">\n          <div class="col-12 col-lg-4">\n            <label data-ng-bind="$ctrl.headerLabels.level"></label>\n            <div class="form-group">\n              <ui-bb-dropdown-select-ng\n                class="form-control"\n                data-multiple="true"\n                data-template-url=\n                  "ui-bb-notifications-filter-ng/option-multiple-selected-template.html"\n                data-ng-model="$ctrl.filterParams.levels"\n                data-role="ui-bb-notifications-filter-ng"\n                data-ng-init="$ctrl.setDefaultSeverityLevel()"\n                data-ng-change="$ctrl.checkSelectedLevels()"\n              >\n                <ui-bb-dropdown-option-ng\n                  data-option="level"\n                  data-ng-repeat="level in $ctrl.levels track by $index"\n                  class="list-group-item-text"\n                >\n                  <a href="#" data-ng-bind="$parent.$ctrl.levelLabels[$option.key]"></a>\n                </ui-bb-dropdown-option-ng>\n              </ui-bb-dropdown-select-ng>\n            </div>\n          </div>\n        </div>\n        <div class="row">\n          <div class="col-12 col-lg-5">\n            <label data-ng-bind="$ctrl.headerLabels.status"></label>\n            <div class="form-group">\n              <label class="form-check form-check-inline"\n                data-ng-repeat="status in $ctrl.statuses track by $index">\n                <input type="radio"\n                  class="form-check-input"\n                  name="{{ $ctrl.statuses.name }}"\n                  data-ng-model="$ctrl.filterParams.status"\n                  data-ng-checked="status.checked"\n                  data-ng-value="status.value">\n                <span data-ng-bind="$ctrl.statusLabels[status.key]"></span>\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n      <ui-bb-filter-form-actions-ng data-filter-params="$ctrl.filterParams"\n        data-search-filter-form="filterForm"\n        data-on-close="$ctrl.toggleFilter()"\n        data-on-filter="$ctrl.onApplyFilter()"\n        data-on-clear="$ctrl.onClearFilter()"\n        data-button-labels="{\n          apply: $ctrl.buttonLabels.apply,\n          closePanel: $ctrl.buttonLabels.cancel,\n          clearAll: $ctrl.buttonLabels.clear\n        }">\n      </ui-bb-filter-form-actions-ng>\n    </form>\n    <script type="text/ng-template"\n      id="ui-bb-notifications-filter-ng/option-multiple-selected-template.html"\n    >\n      <span data-ng-bind="$parent.$ctrl.setSelectedOptions($option)"></span>\n    </script>\n  '
	};
	
	/**
	 * @name uiBbNotificationsFilterComponent
	 * @type {object}
	 */
	exports.default = uiBbNotificationsFilterComponent;

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbNotificationsFilterController;
	function uiBbNotificationsFilterController($scope) {
	  /**
	   * @name uiBbNotificationsFilterController
	   * @ngkey uiBbNotificationsFilterController
	   * @type {object}
	   * @description Notifications filter controller
	   */
	  var $ctrl = this;
	
	  var defaultFilterParams = {
	    levels: [],
	    status: null,
	    fromDate: null,
	    toDate: null,
	    startDate: null,
	    endDate: null
	  };
	
	  /**
	   * @description
	   * `filterParams` parameters object.
	   *
	   * @name uiBbNotificationsFilterController#filterParams
	   * @type {object}
	   */
	  var filterParams = Object.assign({}, defaultFilterParams);
	
	  /**
	   * @description
	   * Array of `Severity levels` parameters objects.
	   *
	   * @name uiBbNotificationsFilterController#levels
	   * @type {array}
	   */
	  var levels = [{ key: 'all', value: '' }, { key: 'info', value: 'INFO' }, { key: 'warning', value: 'WARNING' }, { key: 'alert', value: 'ALERT' }, { key: 'success', value: 'SUCCESS' }];
	
	  /**
	   * @description
	   * Array of `Statuses` parameters objects.
	   *
	   * @name uiBbNotificationsFilterController#statuses
	   * @type {array}
	   */
	  var statuses = [{ key: 'all', value: null, checked: false }, { key: 'read', value: true, checked: false }, { key: 'unread', value: false, checked: false }];
	
	  /**
	   * @description
	   * Date picker parameters object.
	   *
	   * @name uiBbNotificationsFilterController#datePickerParams
	   * @type {object}
	   */
	  var datePickerParams = {
	    config: {
	      minDate: null,
	      maxDate: new Date(),
	      maxMode: 'year',
	      enableRestrictedRange: true
	    }
	  };
	
	  /**
	   * @description
	   * Watcher object evaluating current startDate param config.
	   *
	   * @type {object}
	   */
	  $scope.$watch(function () {
	    return filterParams.startDate;
	  }, function (newVal) {
	    datePickerParams.config = Object.assign(datePickerParams.config, {
	      minDate: newVal ? new Date(newVal) : null
	    });
	  });
	
	  /**
	   * @description
	   * Watcher object evaluation current endDate param config.
	   *
	   * @type {object}
	   */
	  $scope.$watch(function () {
	    return filterParams.endDate;
	  }, function (newVal) {
	    datePickerParams.config = Object.assign(datePickerParams.config, {
	      maxDate: newVal ? new Date(newVal) : new Date()
	    });
	  });
	
	  /**
	   * @description
	   * Normalize date to required format.
	   *
	   * @inner
	   * @name uiBbNotificationsFilterController#getNormalizedDate
	   * @type {function}
	   * @param {object} date Date string
	   * @param {object} correction Number of miliseconds added to given date
	   * @returns {Date|null} Date object or null
	   */
	  var getNormalizedDate = function getNormalizedDate(date) {
	    var correction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	    var timeStamp = Date.parse(date) + correction;
	
	    // add timezone to returned date
	    return date ? new Date(timeStamp).toISOString().slice(0, -5) + 'Z' : null;
	  };
	
	  /**
	   * @description
	   * Get all filter params.
	   *
	   * @name uiBbNotificationsFilterController#getParams
	   * @type {function}
	   * @returns {object} Filter params
	   */
	  var getParams = function getParams() {
	    return {
	      levels: filterParams.levels && !$ctrl.isAllLevelSelected(filterParams.levels[0]) ? filterParams.levels.map(function (item) {
	        return item.value;
	      }).join() : null,
	      read: filterParams.status,
	      fromDate: getNormalizedDate(filterParams.startDate),
	      toDate: getNormalizedDate(filterParams.endDate || filterParams.startDate, 1000 * 60 * 60 * 24)
	    };
	  };
	
	  /**
	   * @description
	   * Uncheck checkbox input.
	   *
	   * @name uiBbNotificationsFilterController#clearCheckedMapper
	   * @type {function}
	   * @param {object} item Checkbox input object
	   * @returns {object} Processed checkbox input object
	   */
	  var clearCheckedMapper = function clearCheckedMapper(item) {
	    return Object.assign(item, {
	      checked: false
	    });
	  };
	
	  /**
	   * @description
	   * Call filter method.
	   *
	   * @name uiBbNotificationsFilterController#onApplyFilter
	   * @type {function}
	   * @returns {Promise|null} A Promise that returns from filter method or null if method isn't set
	   */
	  var onApplyFilter = function onApplyFilter() {
	    return $ctrl.onFilter ? $ctrl.onFilter({ params: getParams() }) : null;
	  };
	
	  /**
	   * @description
	   * Reset filter parameters.
	   *
	   * @name uiBbNotificationsFilterController#onClearFilter
	   * @param {object} form Angular form object
	   * @type {function}
	   */
	  var onClearFilter = function onClearFilter() {
	    $ctrl.filterParams.levels = new Array($ctrl.levels[0]);
	    $ctrl.statuses = $ctrl.statuses.map(clearCheckedMapper);
	  };
	
	  /**
	   * @description
	   * Toggle filter component.
	   *
	   * @name uiBbNotificationsFilterController#toggleFilter
	   * @type {function}
	   * @returns {boolean} A status of filter component
	   */
	  var toggleFilter = function toggleFilter() {
	    return $ctrl.isOpen = !$ctrl.isOpen;
	  };
	
	  /**
	   * @description
	   * Check if filter is pristine or not.
	   *
	   * @name uiBbNotificationsFilterController#isFilterPristine
	   * @type {function}
	   * @param {object} form Angular form object
	   * @returns {boolean} True if filter is pristine
	   */
	  var isFilterPristine = function isFilterPristine(form) {
	    return form.$pristine;
	  };
	
	  /**
	   * @description
	   * Check if severity level selected is all or not.
	   *
	   * @name uiBbNotificationsFilterController#isAllLevelSelected
	   * @type {function}
	   * @param {object} level severity level option
	   * @returns {boolean} True if severity level is all
	   */
	  var isAllLevelSelected = function isAllLevelSelected(level) {
	    return level.key === $ctrl.levels[0].key;
	  };
	
	  /**
	   * @description
	   * set default severity level.
	   *
	   * @name uiBbNotificationsFilterController#setDefaultSeverityLevel
	   * @type {function}
	   * @returns {Object} Filter params with updated levels
	   */
	  var setDefaultSeverityLevel = function setDefaultSeverityLevel() {
	    var selected = $ctrl.levels.find(function (item) {
	      return $ctrl.isAllLevelSelected(item);
	    });
	    return Object.assign($ctrl.filterParams, { levels: new Array(selected) });
	  };
	
	  /**
	   * @description
	   * Update selected levels if 'all' option  was/wasn't s applied
	   *
	   * @name uiBbNotificationsFilterController#checkSelectedLevels
	   * @type {function}
	   * @returns {Object} Filter params with updated levels
	   */
	  var checkSelectedLevels = function checkSelectedLevels() {
	    var lastItem = $ctrl.filterParams.levels[$ctrl.filterParams.levels.length - 1];
	
	    if (lastItem && $ctrl.isAllLevelSelected(lastItem)) {
	      Object.assign($ctrl.filterParams, { levels: new Array(lastItem) });
	    } else {
	      Object.assign($ctrl.filterParams, { levels: $ctrl.filterParams.levels.filter(function (item) {
	          return !$ctrl.isAllLevelSelected(item);
	        }) });
	    }
	  };
	
	  /**
	   * @description
	   * Convert selected options to string for view as selected fields
	   *
	   * @name uiBbNotificationsFilterController#setSelectedOptions
	   * @type {function}
	   * @returns {String} String of selected severity levels
	   */
	  var setSelectedOptions = function setSelectedOptions(options) {
	    return options.map(function (item) {
	      return $ctrl.levelLabels[item.key];
	    }).join(', ');
	  };
	
	  Object.assign($ctrl, {
	    isOpen: false,
	    filterParams: filterParams,
	    levels: levels,
	    statuses: statuses,
	    datePickerParams: datePickerParams,
	    onApplyFilter: onApplyFilter,
	    onClearFilter: onClearFilter,
	    toggleFilter: toggleFilter,
	    isFilterPristine: isFilterPristine,
	    setDefaultSeverityLevel: setDefaultSeverityLevel,
	    checkSelectedLevels: checkSelectedLevels,
	    isAllLevelSelected: isAllLevelSelected,
	    setSelectedOptions: setSelectedOptions
	  });
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-notifications-filter-ng.js.map