(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("vendor-bb-uib-datepicker"), require("vendor-bb-uib-position"), require("vendor-bb-uib-datepicker-popup"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-calendar-popup-ng", ["vendor-bb-angular", "vendor-bb-uib-datepicker", "vendor-bb-uib-position", "vendor-bb-uib-datepicker-popup"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-calendar-popup-ng"] = factory(require("vendor-bb-angular"), require("vendor-bb-uib-datepicker"), require("vendor-bb-uib-position"), require("vendor-bb-uib-datepicker-popup"));
	else
		root["ui-bb-calendar-popup-ng"] = factory(root["vendor-bb-angular"], root["vendor-bb-uib-datepicker"], root["vendor-bb-uib-position"], root["vendor-bb-uib-datepicker-popup"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_24__) {
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
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
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
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _vendorBbUibDatepicker = __webpack_require__(22);
	
	var _vendorBbUibDatepicker2 = _interopRequireDefault(_vendorBbUibDatepicker);
	
	var _vendorBbUibPosition = __webpack_require__(23);
	
	var _vendorBbUibPosition2 = _interopRequireDefault(_vendorBbUibPosition);
	
	var _vendorBbUibDatepickerPopup = __webpack_require__(24);
	
	var _vendorBbUibDatepickerPopup2 = _interopRequireDefault(_vendorBbUibDatepickerPopup);
	
	var _calendarPopup = __webpack_require__(25);
	
	var _calendarPopup2 = _interopRequireDefault(_calendarPopup);
	
	var _calendarPopup3 = __webpack_require__(26);
	
	var _calendarPopup4 = _interopRequireDefault(_calendarPopup3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ui-bb-calendar-popup-ng
	 * @description
	 * UI datepicker popup component
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbCalendarPopupKey from 'ui-bb-calendar-popup-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbCalendarPopupKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-calendar-popup-ng
	 *   data-date="$ctrl.date"
	 *   data-config="$ctrl.calendarPopupConfig"
	 *   data-disabled="false">
	 * </ui-bb-calendar-popup-ng>
	 */
	
	var dependencyKeys = [_vendorBbUibPosition2.default, _vendorBbUibDatepicker2.default, _vendorBbUibDatepickerPopup2.default];
	
	/**
	 * @name default
	 * @type {string}
	 * @description The angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-calendar-popup-ng', dependencyKeys).controller('uiBbCalendarPopupController', ['$filter', '$locale', '$scope', '$templateCache', _calendarPopup2.default]).component('uiBbCalendarPopupNg', _calendarPopup4.default).name;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbCalendarPopupController;
	/**
	 * @description
	 * Css-classes for date-range selection
	 *
	 * @name DateRangeClass
	 * @enum {string}
	 */
	var DateRangeClass = {
	  START_DATE: 'date-range-start',
	  END_DATE: 'date-range-end',
	  CAPTURED_DATE: 'date-range-captured',
	  ONE_DAY_RANGE: 'one-day-range'
	};
	
	function uiBbCalendarPopupController($filter, $locale, $scope, $templateCache) {
	  /**
	   * @description
	   * Calendar Popup controller
	   *
	   * @name uiBbCalendarPopupController
	   * @ngkey uiBbCalendarPopupController
	   * @type {Function}
	   */
	  var $ctrl = this;
	  var today = new Date();
	  var dateFormat = 'shortDate';
	
	  $templateCache.put('bb/template/datepicker/day.html', '\n  <table class="uib-daypicker" \n    role="grid"\n    aria-labelledby="{{::uniqueId}}-title" \n    aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th>\n        <button type="button"\n          class="btn btn-link btn-sm p-0 float-left uib-left"\n          data-ng-click="((datepickerOptions.minDate | date :\n            datepickerOptions.formatDayTitle).toString() !== title) ?\n            move(-1) : return;"\n          data-ng-disabled="(datepickerOptions.minDate | date :\n            datepickerOptions.formatDayTitle).toString() === title" tabindex="-1">\n          <i class="fas fa-chevron-left"></i>\n        </button>\n      </th>\n      <th colspan="{{::5 + showWeeks}}">\n        <button id="{{::uniqueId}}-title"\n          role="heading" aria-live="assertive"\n          aria-atomic="true" type="button"\n          class="btn btn-link btn-sm uib-title" data-ng-click="toggleMode()"\n          data-ng-disabled="datepickerMode === maxMode" tabindex="-1">\n          <strong>{{title}}</strong>\n        </button>\n      </th>\n      <th>\n        <button type="button" class="btn btn-link btn-sm float-right uib-right"\n          data-ng-click="((datepickerOptions.maxDate | date :\n            datepickerOptions.formatDayTitle).toString() !== title) ?\n            move(1) : return;"\n          data-ng-disabled="(datepickerOptions.maxDate | date :\n            datepickerOptions.formatDayTitle).toString() === title" tabindex="-1">\n          <i class="fas fa-chevron-right"></i>\n        </button>\n      </th>\n    </tr>\n    <tr>\n      <th data-ng-if="showWeeks" class="text-center"></th>\n      <th data-ng-repeat="label in ::labels track by $index" class="text-center">\n        <small aria-label="{{::label.full}}">{{::label.abbr}}</small>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-weeks" data-ng-repeat="row in rows track by $index">\n      <td data-ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td data-ng-repeat="dt in row" class="uib-day text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        data-ng-class="::dt.customClass">\n        <button type="button" class="btn btn-link p-0 btn-sm"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          data-ng-click="select(dt.date)"\n          data-ng-disabled="::dt.disabled"\n          tabindex="-1">\n          <span data-ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">\n            {{::dt.label}}\n          </span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n  </table>\n  ');
	
	  $templateCache.put('bb/template/datepicker/month.html', '\n    <table class="uib-monthpicker" role="grid" \n    aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n    <thead>\n      <tr>\n        <th>\n          <button type="button" \n            class="btn btn-secondary btn-sm float-left uib-left"\n            data-ng-click="((datepickerOptions.minDate | date : \n              \'yyyy\').toString() !== title) ? \n              move(-1) : return;"\n            data-ng-disabled="(datepickerOptions.minDate | date :\n             \'yyyy\').toString() === title" tabindex="-1">\n            <i class="fas fa-chevron-left"></i>\n          </button>\n        </th>\n        <th>\n          <button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" \n            aria-atomic="true" type="button" class="btn btn-secondary btn-sm uib-title" \n            data-ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1">\n            <strong>{{title}}</strong>\n          </button>\n        </th>\n        <th>\n          <button type="button" class="btn btn-secondary btn-sm float-right uib-right"\n            data-ng-click="((datepickerOptions.maxDate | date : \n            \'yyyy\').toString() !== title) ? \n            move(1) : return;"\n            data-ng-disabled="(datepickerOptions.maxDate | date : \n              \'yyyy\').toString() === title" tabindex="-1">\n            <i class="fas fa-chevron-right"></i>\n          </button>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr class="uib-months" data-ng-repeat="row in rows track by $index">\n        <td data-ng-repeat="dt in row" class="uib-month text-center" role="gridcell"\n          id="{{::dt.uid}}"\n          data-ng-class="::dt.customClass">\n          <button type="button" class="btn btn-secondary"\n            uib-is-class="\n              \'btn-info\' for selectedDt,\n              \'active\' for activeDt\n              on dt"\n            data-ng-click="select(dt.date)"\n            ng-disabled="::dt.disabled"\n            tabindex="-1"><span data-ng-class="::{\'text-info\': dt.current}">\n            {{::dt.label}}</span></button>\n        </td>\n      </tr>\n    </tbody>\n    </table>\n  ');
	
	  $templateCache.put('bb/template/datepicker/year.html', '\n    <table class="uib-yearpicker" role="grid" aria-labelledby="{{::uniqueId}}-title"\n      aria-activedescendant="{{activeDateId}}">\n    <thead>\n      <tr>\n        <th>\n          <button type="button" \n            class="btn btn-secondary btn-sm float-left uib-left"\n            data-ng-click="(datepickerOptions.minDate | date : \'yyyy\') < title.substring(0, 4) ? \n              move(-1) : return;"\n            data-ng-disabled="(datepickerOptions.minDate | date : \'yyyy\') >= title.substring(0, 4)" \n            tabindex="-1">\n            <i class="fas fa-chevron-left"></i>\n          </button>\n        </th>\n        <th colspan="{{::columns - 2}}">\n          <button id="{{::uniqueId}}-title" role="heading" \n            aria-live="assertive" aria-atomic="true" type="button" class="btn btn-secondary \n            btn-sm uib-title" data-ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" \n            tabindex="-1"><strong>{{title}}</strong>\n          </button>\n        </th>\n        <th>\n          <button type="button" class="btn btn-secondary btn-sm float-right uib-right"\n            data-ng-click="(datepickerOptions.maxDate | date : \'yyyy\') > \n            title.substring(title.length-4, title.length) ? move(1) : return;"\n            data-ng-disabled="(datepickerOptions.maxDate | date : \'yyyy\') <= \n            title.substring(title.length-4, title.length)" tabindex="-1">\n            <i class="fas fa-chevron-right"></i>\n          </button>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr class="uib-years" data-ng-repeat="row in rows track by $index">\n        <td data-ng-repeat="dt in row" class="uib-year text-center" role="gridcell"\n          id="{{::dt.uid}}"\n          data-ng-class="::dt.customClass">\n          <button type="button" class="btn btn-secondary"\n            uib-is-class="\n              \'btn-info\' for selectedDt,\n              \'active\' for activeDt\n              on dt"\n            data-ng-click="select(dt.date)"\n            ng-disabled="::dt.disabled"\n            tabindex="-1"><span data-ng-class="::{\'text-info\': dt.current}">\n              {{::dt.label}}</span></button>\n        </td>\n      </tr>\n    </tbody>\n    </table>\n  ');
	
	  $templateCache.put('bb/template/datepicker/datepicker.html', '\n  <div class="uib-datepicker" data-ng-switch="datepickerMode"\n    role="application" data-ng-keydown="keydown($event)">\n    <uib-daypicker data-ng-if="datepickerOptions.enableRestrictedRange" data-ng-switch-when="day" \n      tabindex="0" template-url="bb/template/datepicker/day.html"></uib-daypicker>\n    <uib-daypicker data-ng-if="!datepickerOptions.enableRestrictedRange" data-ng-switch-when="day" \n      tabindex="0"></uib-daypicker>\n    <uib-monthpicker data-ng-if="datepickerOptions.enableRestrictedRange" \n      data-ng-switch-when="month" tabindex="0" \n      template-url="bb/template/datepicker/month.html"></uib-monthpicker>\n    <uib-monthpicker data-ng-if="!datepickerOptions.enableRestrictedRange" \n      data-ng-switch-when="month" tabindex="0">\n      </uib-monthpicker>\n    <uib-yearpicker data-ng-if="datepickerOptions.enableRestrictedRange" \n      data-ng-switch-when="year" tabindex="0" \n      template-url="bb/template/datepicker/year.html"></uib-yearpicker>\n    <uib-yearpicker data-ng-if="!datepickerOptions.enableRestrictedRange" \n      data-ng-switch-when="year" tabindex="0">\n    </uib-yearpicker>\n  </div>\n\n  ');
	
	  /**
	   * @description
	   * Default datepicker config.
	   *
	   * @name uiBbCalendarPopupController#defaultConfig
	   * @inner
	   * @type {Object}
	   */
	  var defaultConfig = {
	    formatDayHeader: 'EEE',
	    formatDayTitle: 'MMM yyyy',
	    formatMonth: 'MMM',
	    maxMode: 'day',
	    minDate: today,
	    maxDate: new Date(today.getFullYear() + 2, today.getMonth(), today.getDate()),
	    showWeeks: false,
	    enableRestrictedRange: false
	  };
	
	  /**
	   * @description
	   * Datepicker config.
	   *
	   * @name uiBbCalendarPopupController#options
	   * @type {Object}
	   */
	  var options = {};
	
	  /**
	   * @description
	   * Compares given dates
	   *
	   * @name compareDates
	   * @inner
	   * @type {Function}
	   * @param {String} date1 Date string
	   * @param {String} date2 Date string
	   * @returns {Number}
	   * -1 : if a < b
	   *  0 : if a = b
	   *  1 : if a > b
	   */
	  var compareDates = function compareDates(date1, date2) {
	    return (date1 > date2) - (date2 > date1);
	  };
	
	  /**
	   * @description
	   * Gets day difference between two dates
	   *
	   * @name getDayDiff
	   * @inner
	   * @type {Function}
	   * @param {String} date1 Date string
	   * @param {String} date2 Date string
	   * @returns {String}
	   */
	  var getDayDiff = function getDayDiff(date1, date2) {
	    return Math.round((date1 - date2) / (1000 * 60 * 60 * 24));
	  };
	
	  /**
	   * @description
	   * Gets true if dates of date-range are equal
	   *
	   * @name isOneDayRange
	   * @inner
	   * @type {Function}
	   * @returns {Boolean}
	   */
	  var isOneDayRange = function isOneDayRange() {
	    return !!$ctrl.dateRange.endDate && compareDates($ctrl.dateRange.startDate, $ctrl.dateRange.endDate) === 0;
	  };
	
	  /**
	   * @description
	   * Gets true if range is set
	   *
	   * @name isRangeSet
	   * @inner
	   * @type {Function}
	   * @returns {String}
	   */
	  var isRangeSet = function isRangeSet() {
	    return !!$ctrl.dateRange.startDate && !!$ctrl.dateRange.startDate;
	  };
	
	  /**
	   * @description
	   * Gets true if date is included in date range
	   *
	   * @name isDateInRange
	   * @inner
	   * @type {Function}
	   * @param {String} date Date string
	   * @returns {Boolean} True if date is included in date range
	   */
	  var isDateInRange = function isDateInRange(date) {
	    return compareDates(date, $ctrl.dateRange.startDate) === 1 && compareDates(date, $ctrl.dateRange.endDate) === -1;
	  };
	
	  /**
	   * @description
	   * Gets true if date is boundary in date range
	   *
	   * @name isBoundaryDate
	   * @inner
	   * @type {Function}
	   * @param {String} date Date string
	   * @returns {Boolean} True if date is boundary in date range
	   */
	  var isBoundaryDate = function isBoundaryDate(date) {
	    return compareDates(date, $ctrl.dateRange.startDate) === 0 || compareDates(date, $ctrl.dateRange.endDate) === 0;
	  };
	
	  /**
	   * @description
	   * Gets css class for each day in calendar
	   *
	   * @name getDayClass
	   * @inner
	   * @type {Function}
	   * @param {Object} obj Date object
	   * @param {String} obj.date Date string
	   * @param {String} obj.mode Calendar mode
	   * @returns {Boolean} Css class for each day in calendar
	   */
	  var getDayClass = function getDayClass(_ref) {
	    var date = _ref.date,
	        mode = _ref.mode;
	
	    if (mode === 'day') {
	      var formattedDate = new Date(date).setHours(0, 0, 0, 0);
	
	      if (isRangeSet() && (compareDates(date, $ctrl.dateRange.startDate) < 0 || compareDates(date, $ctrl.dateRange.endDate) > 0) && compareDates(formattedDate, $ctrl.dateRange.endDate) !== 0) {
	        return 'range-set-inactive';
	      }
	
	      if (compareDates(formattedDate, $ctrl.dateRange.startDate) === 0) {
	        return isOneDayRange() ? DateRangeClass.ONE_DAY_RANGE : DateRangeClass.START_DATE;
	      } else if (compareDates(formattedDate, $ctrl.dateRange.endDate) === 0) {
	        return DateRangeClass.END_DATE;
	      } else if (isDateInRange(formattedDate)) {
	        return DateRangeClass.CAPTURED_DATE;
	      }
	    }
	
	    return '';
	  };
	
	  /**
	   * @description
	   * Setup date range values
	   *
	   * @name setDateRange
	   * @inner
	   * @type {Function}
	   * @param {String} startDate Start date string
	   * @param {String} endDate End date string
	   */
	  var setDateRange = function setDateRange(startDate, endDate) {
	    $ctrl.dateRange.startDate = startDate;
	    $ctrl.dateRange.endDate = endDate;
	
	    $ctrl.date = null;
	  };
	
	  /**
	   * @description
	   * Method fires when $ctrl.date was changed
	   *
	   * @name onDateChange
	   * @inner
	   * @type {Function}
	   * @param {String} newVal New date value
	   */
	  var onDateChange = function onDateChange(newVal) {
	    if (!newVal) {
	      return;
	    }
	
	    // situation when date range is not set or dates is included in date-range
	    if (!isRangeSet() || isDateInRange(newVal) || isBoundaryDate(newVal)) {
	      setDateRange(newVal, newVal);
	    } else {
	      if (isOneDayRange()) {
	        if (getDayDiff($ctrl.dateRange.startDate, newVal) > 0) {
	          setDateRange(newVal, $ctrl.dateRange.startDate);
	        } else {
	          setDateRange($ctrl.dateRange.startDate, newVal);
	        }
	      } else {
	        // when selected date is after of the range
	        if (compareDates(newVal, $ctrl.dateRange.endDate) === 1) {
	          setDateRange($ctrl.dateRange.startDate, newVal);
	          // when selected date is before of the range
	        } else if (compareDates(newVal, $ctrl.dateRange.startDate) === -1) {
	          setDateRange(newVal, $ctrl.dateRange.endDate);
	        }
	      }
	    }
	  };
	
	  /**
	   * @description
	   * Enables ability to select date-range
	   *
	   * @name enableDateRangePicker
	   * @inner
	   * @type {Function}
	   */
	  var enableDateRangePicker = function enableDateRangePicker() {
	    Object.assign($ctrl.options, { customClass: getDayClass });
	
	    $scope.$watch(function () {
	      return $ctrl.date;
	    }, onDateChange);
	  };
	
	  /**
	   * @description
	   * Gets formatted date value or translation of "calendar.label.today" key or "today" string when
	   * today date is selected
	   *
	   * @name getSingleDateValue
	   * @inner
	   * @type {Function}
	   * @param {String} date Date string
	   * @returns {String}
	   */
	  var getSingleDateValue = function getSingleDateValue(date) {
	    return compareDates(date, today) !== 0 ? $filter('date')(date, dateFormat) : $filter('i18n')('calendar.label.today') || 'today';
	  };
	
	  /**
	   * @description
	   * Displays translation of "calendar.label.today" key or "today" string in the input field
	   * when today date is selected
	   *
	   * @name formatViewValue
	   * @type {Function}
	   * @returns {String}
	   */
	  var formatViewValue = function formatViewValue() {
	    if ($ctrl.dateRange && isRangeSet()) {
	      var startDate = new Date($ctrl.dateRange.startDate);
	      var endDate = new Date($ctrl.dateRange.endDate);
	
	      if (compareDates(startDate, endDate) === 0) {
	        return getSingleDateValue(startDate);
	      }
	
	      return getSingleDateValue(startDate) + ' - ' + getSingleDateValue(endDate);
	    } else if ($ctrl.date) {
	      var date = new Date($ctrl.date);
	
	      return getSingleDateValue(date);
	    }
	
	    return '';
	  };
	
	  /**
	   * @description
	   * Toggling open/close state of the calendar
	   *
	   * @name toggle
	   * @type {Function}
	   */
	  var toggle = function toggle() {
	    $ctrl.opened = !$ctrl.opened;
	  };
	
	  /**
	   * @description
	   * Adjusts selected date, minDate and maxDate of current control
	   * to the value passed through a binding
	   *
	   * @name $onChanges
	   * @type {Function}
	   * @param {Object} changesObject Object containing changes in one-way bindings
	   */
	  var $onChanges = function $onChanges(changesObject) {
	    if (!changesObject.config) {
	      return;
	    }
	
	    var changes = changesObject.config.currentValue;
	
	    if (changes && changes.minDate) {
	      // update minDate setting
	      $ctrl.options.minDate = changes.minDate;
	
	      // update selected date if mindate is later than selected date
	      if ($ctrl.date && $ctrl.date - changes.minDate < 0) {
	        $ctrl.date = changes.minDate;
	      }
	    }
	
	    if (changes && changes.maxDate) {
	      // update maxDate setting
	      $ctrl.options.maxDate = changes.maxDate;
	
	      // update selected date if maxdate is before than selected date
	      if ($ctrl.date && $ctrl.date - changes.maxDate > 0) {
	        $ctrl.date = changes.maxDate;
	      }
	    }
	  };
	
	  /**
	   * @description
	   * Set default value on icon click
	   *
	   * @name $onInit
	   * @type {Function}
	   */
	  var $onInit = function $onInit() {
	    var dateFormatPlaceholder = $locale.DATETIME_FORMATS[dateFormat].toLowerCase();
	
	    $ctrl.options = Object.assign(defaultConfig, $ctrl.config);
	
	    $ctrl.onClick = $ctrl.onClick === undefined ? true : $ctrl.onClick;
	    Object.assign(options, $ctrl.config);
	
	    if ($ctrl.dateRange) {
	      $ctrl.dateFormatPlaceholder = dateFormatPlaceholder + ' - ' + dateFormatPlaceholder;
	      enableDateRangePicker();
	    } else {
	      $ctrl.dateFormatPlaceholder = dateFormatPlaceholder;
	    }
	  };
	
	  Object.assign($ctrl, {
	    options: options,
	    $onInit: $onInit,
	    $onChanges: $onChanges,
	    formatViewValue: formatViewValue,
	    toggle: toggle
	  });
	}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbCalendarPopupComponent
	 * @type {Object}
	 *
	 * @property {String} date Date model
	 * @property {DateRange} dateRange Date-range model
	 * @property {Object} config Configuration object
	 * @property {Object} messages Object with translated messages
	 * @property {Boolean} disabled Defines whether or not component is disabled
	 * @property {Boolean} onClick Defines whether or not component is toggled on click
	 * @property {Boolean} onFocus Defines whether or not component is toggled on focus
	 */
	var uiBbCalendarPopupComponent = {
	  bindings: {
	    date: '=?',
	    dateRange: '=?',
	    config: '<',
	    messages: '<',
	    disabled: '<',
	    onClick: '<',
	    onFocus: '<'
	  },
	  template: '\n  <div class="input-group"\n    data-uib-datepicker-popup=""\n    data-close-on-date-selection="!$ctrl.dateRange"\n    data-datepicker-options="$ctrl.options"\n    data-datepicker-template-url="bb/template/datepicker/datepicker.html"\n    data-is-open="$ctrl.opened"\n    data-show-button-bar="false"\n    data-ng-model="$ctrl.date"\n    data-ng-disabled="$ctrl.disabled"\n    data-ng-focus="!$ctrl.onFocus || $ctrl.toggle()"\n    data-ng-click="!$ctrl.onClick || $ctrl.toggle()">\n    <input type="text"\n      class="form-control"\n      readonly\n      tabindex="-1"\n      placeholder="{{$ctrl.dateFormatPlaceholder}}"\n      data-ng-value="$ctrl.formatViewValue()"\n      data-ng-disabled="$ctrl.disabled"\n      data-role="ui-bb-calendar-popup-ng-input"/>\n    <span class="input-group-append">\n      <button type="button"\n        aria-label="{{ $ctrl.messages.calendarBtn }}"\n        class="btn btn-secondary"\n        tabindex="-1"\n        data-ng-disabled="$ctrl.disabled"\n        data-role="ui-bb-calendar-popup-ng-button">\n        <i class="fa fa-calendar" aria-hidden="true"></i>\n      </button>\n    </span>\n  </div>\n  ',
	  controller: 'uiBbCalendarPopupController'
	};
	
	exports.default = uiBbCalendarPopupComponent;
	
	/**
	 * DateRange type definition
	 * @typedef {Object} DateRange
	 * @property {String} startDate Start date of date-range
	 * @property {String} endDate End date of date-range
	 */

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ui-bb-calendar-popup-ng.js.map