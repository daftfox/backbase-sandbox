(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-calendar-popup-ng"), require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-scheduling-ng", ["ui-bb-calendar-popup-ng", "vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-scheduling-ng"] = factory(require("ui-bb-calendar-popup-ng"), require("vendor-bb-angular"));
	else
		root["ui-bb-scheduling-ng"] = factory(root["ui-bb-calendar-popup-ng"], root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_18__) {
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

	module.exports = __webpack_require__(170);

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbCalendarPopupNg = __webpack_require__(8);
	
	var _uiBbCalendarPopupNg2 = _interopRequireDefault(_uiBbCalendarPopupNg);
	
	var _component = __webpack_require__(171);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _controller = __webpack_require__(173);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ui-bb-scheduling-ng
	 * @description
	 * Schedule selector UI component
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbScheduleKey from 'ui-bb-scheduling-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbScheduleKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-scheduling-ng
	 *   data-config="{
	 *     labels: {
	 *       title: 'Schedule',
	 *       execution: 'Execution',
	 *       starting: 'Starting',
	 *       today: 'Today',
	 *       on: 'On',
	 *       until: 'until',
	 *       repeat: 'times',
	 *       ending: 'Ending',
	 *       never: 'Never',
	 *       after: 'After',
	 *       occurrences: 'occurrences',
	 *       frequency: 'Frequency',
	 *       once: 'Once',
	 *       daily: 'Daily',
	 *       weekly: 'Weekly',
	 *       monthly: 'Monthly',
	 *       quarterly: 'Quarterly',
	 *       annually: 'Annually'
	 *     },
	 *     recurring: true
	 *   }"
	 *   data-payment="$ctrl.payment"
	 *   data-schedule="$ctrl.schedule"
	 *   data-indicate-schedule="false"
	 * ></ui-bb-scheduling-ng>
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-scheduling-ng', [_uiBbCalendarPopupNg2.default]).component('uiBbSchedulingNg', _component2.default).controller('uiBbSchedulingController', ['$filter', _controller2.default]).name;

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint global-require: "off" */
	
	/**
	 * @name component
	 * @type {Object}
	 *
	 * @property {Object} config Scheduling component messages keys
	 * @property {Object} payment Payment data object
	 * @property {Object} schedule Payment schedule data object
	 * @property {?Boolean} indicateSchedule True if should display selected schedule,
	 * but hide controls (false by default)
	 */
	var component = {
	  bindings: {
	    config: '<',
	    payment: '<',
	    schedule: '<',
	    indicateSchedule: '<'
	  },
	  controller: 'uiBbSchedulingController',
	  template: __webpack_require__(172)
	};
	
	exports.default = component;

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

	module.exports = "<!-- Indicate selected schedule -->\n<div data-ng-show=\"$ctrl.indicateSchedule\">\n  {{ $ctrl.getScheduleText() }}\n</div>\n\n<!-- Select schedule controls -->\n<div data-ng-show=\"!$ctrl.indicateSchedule\">\n  <h3>{{ ::$ctrl.config.labels.title | i18n }}</h3>\n  <hr/>\n  <div class=\"row\">\n    <div class=\"col-md-9 col-12\">\n      <!-- schedule -->\n      <ui-bb-expandable-ng data-chevron=\"true\">\n        <ui-bb-expandable-summary-ng>\n          {{ $ctrl.getScheduleText() }}\n        </ui-bb-expandable-summary-ng>\n      <ui-bb-expandable-details-ng>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"form-group row\">\n            <div class=\"col-12\">{{ ::$ctrl.config.labels.execution | i18n }}</div>\n            <div class=\"col-6\">\n              <ui-bb-calendar-popup-ng\n                data-date=\"$ctrl.schedule.startDate\"\n                aria-label=\"{{ ::$ctrl.config.labels.execution | i18n }}\">\n              </ui-bb-calendar-popup-ng>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"col-12\">{{ ::$ctrl.config.labels.frequency | i18n }}</div>\n            <div class=\"col-6\">\n              <ui-bb-dropdown-select-ng name=\"repetition\"\n                data-ng-change=\"$ctrl.setEndDate()\"\n                data-ng-model=\"$ctrl.schedule.transferFrequency\"\n                data-ng-disabled=\"!$ctrl.config.recurring\"\n                data-selected-as=\"$option.name | i18n | lowercase\">\n                <ui-bb-dropdown-option-ng\n                  data-option=\"repeatType\"\n                  data-arrow-navigation=\"true\"\n                  class=\"list-group-item-text\"\n                  data-ng-repeat=\"repeatType in $ctrl.getFrequencies() track by $index\">\n                  {{ :: $option.name | i18n }}\n                </ui-bb-dropdown-option-ng>\n              </ui-bb-dropdown-select-ng>\n            </div>\n          </div>\n          <div class=\"form-group\"\n            data-ng-show=\"$ctrl.schedule.transferFrequency.value !== $ctrl.singleFrequency.value\">\n            <div class=\"col-12 p-0 mb-2\">{{ ::$ctrl.config.labels.ending | i18n }}</div>\n            <div class=\"row-fluid mb-4\">\n              <div class=\"col-12 p-0 radio\">\n                <label>\n                  <input type=\"radio\" name=\"endingType\"\n                    data-ng-model=\"$ctrl.payment.endingType\"\n                    value=\"{{ $ctrl.recurrenceEnding.NEVER }}\"\n                    data-ng-checked=\"$ctrl.payment.endingType === $ctrl.recurrenceEnding.NEVER\">\n                    &nbsp;{{ :: $ctrl.config.labels.never | i18n }}\n                </label>\n              </div>\n            </div>\n            <div class=\"row-fluid mb-4\">\n              <div class=\"col-lg-9 col-12 pl-0\">\n                <div class=\"row justify-content-center align-items-center\">\n                  <div class=\"col-4 radio\">\n                    <label>\n                      <input type=\"radio\" name=\"endingType\"\n                        data-ng-model=\"$ctrl.payment.endingType\"\n                        value=\"{{ $ctrl.recurrenceEnding.ON }}\"\n                        data-ng-checked=\"$ctrl.payment.endingType === $ctrl.recurrenceEnding.ON\">\n                        &nbsp;{{ :: $ctrl.config.labels.on | i18n }}\n                    </label>\n                  </div>\n                  <div class=\"col-8 pl-0\">\n                    <div class=\"w-50\">\n                      <ui-bb-calendar-popup-ng\n                        data-date=\"$ctrl.schedule.endDate\"\n                        aria-label=\"$ctrl.config.labels.ending\"\n                        data-disabled=\"$ctrl.payment.endingType !== $ctrl.recurrenceEnding.ON\"\n                        data-config=\"{\n                          minDate: $ctrl.getMinDate($ctrl.schedule.startDate, $ctrl.schedule.transferFrequency)\n                        }\">\n                      </ui-bb-calendar-popup-ng>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row-fluid\">\n              <div class=\"col-lg-9 col-12 pl-0\">\n                <div class=\"row justify-content-center align-items-center\">\n                  <div class=\"col-4 radio\">\n                    <label class=\"mb-0\">\n                      <input type=\"radio\" name=\"endingType\"\n                        data-ng-model=\"$ctrl.payment.endingType\"\n                        value=\"{{ $ctrl.recurrenceEnding.AFTER }}\"\n                        data-ng-checked=\"$ctrl.payment.endingType === $ctrl.recurrenceEnding.AFTER\">\n                      &nbsp;{{ :: $ctrl.config.labels.after | i18n }}\n                    </label>\n                  </div>\n                  <div class=\"col-8 pl-0\">\n                    <input\n                      name=\"repeat\"\n                      type=\"number\"\n                      data-ng-min=\"{{ $ctrl.minOccurrences }}\"\n                      data-ng-max=\"{{ $ctrl.maxOccurrences }}\"\n                      data-ng-pattern=\"/^[0-9]\\d*?$/\"\n                      class=\"form-control occurence-field w-50\"\n                      data-ng-required=\"$ctrl.payment.endingType === $ctrl.recurrenceEnding.AFTER\"\n                      data-ng-disabled=\"$ctrl.payment.endingType !== $ctrl.recurrenceEnding.AFTER\"\n                      data-ng-model=\"$ctrl.schedule.repeat\"\n                      data-ng-init=\"$ctrl.setDefaultOcurrencesValue()\">\n\n                      <span\n                        data-ng-class=\"{ 'text-muted': $ctrl.payment.endingType !== $ctrl.recurrenceEnding.AFTER }\">\n                        {{ :: $ctrl.config.labels.occurrences | i18n }}\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                  <div data-ng-messages=\"paymentForm.repeat.$error\" role=\"alert\"\n                    class=\"text-danger row\">\n                    <div data-ng-message=\"required\">{{ $ctrl.config.labels.min | i18n: { min: $ctrl.minOccurrences } }}</div>\n                    <div data-ng-message=\"min\">{{ $ctrl.config.labels.min | i18n: { min: $ctrl.minOccurrences } }}</div>\n                    <div data-ng-message=\"max\">{{ $ctrl.config.labels.max | i18n: { max: $ctrl.maxOccurences } }}</div>\n                    <div data-ng-message=\"pattern\">{{ $ctrl.config.labels.pattern | i18n }}</div>\n                    <div data-ng-message=\"number\">{{ $ctrl.config.labels.number | i18n }}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ui-bb-expandable-details-ng>\n      </ui-bb-expandable-ng>\n      <!-- end schedule -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = controller;
	
	var _constants = __webpack_require__(174);
	
	function controller($filter) {
	  var $ctrl = this;
	  var dateFilter = $filter('date');
	
	  function $onInit() {
	    $ctrl.recurrenceEnding = _constants.RecurrenceEnding;
	    $ctrl.minOccurrences = _constants.minOccurrences;
	    $ctrl.maxOccurrences = _constants.maxOccurrences;
	
	    if ($ctrl.submitButtonTypes) {
	      $ctrl.submitButtonTypes.forEach(function (item) {
	        // eslint-disable-next-line no-param-reassign
	        item.text = $filter('i18n')(item.key);
	      });
	    }
	  }
	
	  /**
	   * @description
	   * Compiles the scheduling description out of payment object params.
	   * In this process, following translation keys are being used:
	   * form.schedule.starting, for word "Starting"
	   * form.schedule.today, for word "Today"
	   * form.schedule.on, for word "On" (used before date to form "on 01.01.2017")
	   * form.schedule.until, for word "until" (used before date to form "until 01.01.2017")
	   * form.schedule.repeat.count, for word "times" (used after repeat count to form "5 times")
	   * and name of the transfer frequency set in constants file
	   *
	   * @name Helpers#getScheduleText
	   * @type {function}
	   * @returns {string} Compiled text that can be used as scheduling value in views
	   */
	  var getScheduleText = function getScheduleText() {
	    var words = [];
	    var today = new Date().setHours(0, 0, 0, 0);
	    var startDate = new Date($ctrl.schedule.startDate);
	    var isToday = startDate.setHours(0, 0, 0, 0) === today;
	    var multipleOccurrences = $ctrl.schedule.transferFrequency.value !== _constants.TransferFrequency.ONCE;
	    var hasEnd = $ctrl.payment.endingType !== _constants.RecurrenceEnding.NEVER;
	    var isEndingAfter = $ctrl.payment.endingType === _constants.RecurrenceEnding.AFTER;
	
	    // add frequency
	    words.push($filter('i18n')($ctrl.schedule.transferFrequency.name));
	    words.push('-');
	
	    // if there are multiple occurrences, add word starting
	    if (multipleOccurrences) {
	      words.push($filter('i18n')($ctrl.config.labels.starting));
	    }
	
	    // if start date is today use word instead of date
	    if (isToday) {
	      var todayString = $filter('i18n')($ctrl.config.labels.today);
	      // for multiple occurrences, there is a prefix word, so this on should be lowercase
	      if (multipleOccurrences) {
	        todayString = todayString.toLowerCase();
	      }
	
	      words.push(todayString);
	    }
	
	    // for single transfer in the future, we need prefix word on
	    if (!multipleOccurrences && !isToday) {
	      words.push($filter('i18n')($ctrl.config.labels.on).toLowerCase());
	    }
	
	    if (!isToday) {
	      words.push(dateFilter($ctrl.schedule.startDate));
	    }
	
	    var hasLimitedOccurences = hasEnd && multipleOccurrences;
	    var isMinOccurences = !$ctrl.schedule.repeat || $ctrl.schedule.repeat < _constants.minOccurrences;
	
	    // if there are limited number of occurrences,
	    // add comma for the last word, so that there is no space between them
	    if (hasLimitedOccurences && !(isEndingAfter && isMinOccurences)) {
	      words[words.length - 1] += ',';
	    }
	
	    if (hasEnd && multipleOccurrences) {
	      // there is an end for this schedule
	      // based on the type of ending construct words differently
	      if ($ctrl.payment.endingType === _constants.RecurrenceEnding.ON) {
	        words.push($filter('i18n')($ctrl.config.labels.until));
	        words.push(dateFilter($ctrl.schedule.endDate));
	      } else if ($ctrl.schedule.repeat >= _constants.minOccurrences) {
	        words.push($ctrl.schedule.repeat);
	        words.push($ctrl.schedule.repeat ? $filter('i18n')($ctrl.config.labels.count) : '');
	      }
	    }
	
	    // output everything together
	    return words.join(' ');
	  };
	
	  /**
	   * @name Helpers#getMinDate
	   * @type {function}
	   * @description
	   * Get the minimum available date for specific frequency
	   *
	   * @param {date} startDate
	   * @param {object} transferFrequency
	   * @return {date}
	   */
	  var getMinDate = function getMinDate(startDate) {
	    var transferFrequency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    var minDate = void 0;
	
	    var daysInMonth = function daysInMonth(month, year) {
	      return new Date(year, month + 1, 0).getDate();
	    };
	    var addDays = function addDays(toDate, days) {
	      return new Date(toDate.getTime() + days * 24 * 60 * 60 * 1000);
	    };
	    var addWeeks = function addWeeks(toDate, weeks) {
	      return addDays(toDate, weeks * 7);
	    };
	    var addYears = function addYears(toDate, years) {
	      return new Date(toDate.getFullYear() + years, toDate.getMonth(), toDate.getDate() > daysInMonth(toDate.getMonth(), toDate.getFullYear()) ? daysInMonth(toDate.getMonth(), toDate.getFullYear()) : toDate.getDate());
	    };
	    var addMonths = function addMonths(toDate, months) {
	      var newMonth = toDate.getMonth() + months + 1 > 12 ? (toDate.getMonth() + months + 1) % 12 - 1 : toDate.getMonth() + months;
	      var newYear = toDate.getMonth() + months + 1 > 12 ? addYears(toDate, 1).getFullYear() : toDate.getFullYear();
	      var newDay = toDate.getDate() > daysInMonth(newMonth, newYear) ? daysInMonth(newMonth, newYear) : toDate.getDate();
	      return new Date(newYear, newMonth, newDay);
	    };
	
	    switch (transferFrequency.value) {
	      case 'DAILY':
	        minDate = addDays(startDate, transferFrequency.every);
	        break;
	      case 'WEEKLY':
	        minDate = addWeeks(startDate, transferFrequency.every);
	        break;
	      case 'MONTHLY':
	        minDate = addMonths(startDate, transferFrequency.every);
	        break;
	      case 'QUARTERLY':
	        minDate = addMonths(startDate, transferFrequency.every * 3);
	        break;
	      case 'YEARLY':
	        minDate = addYears(startDate, transferFrequency.every);
	        break;
	      default:
	        minDate = startDate;
	    }
	
	    return minDate;
	  };
	
	  /**
	   * @description
	   * Returns frequencies for payment depending on occurences number
	   *
	   * @name Helpers#getFrequencies
	   * @type {function}
	   * @returns {array<object>} Array of transfer frequencies
	   */
	  var getFrequencies = function getFrequencies() {
	    return [_constants.SingleFrequency].concat($ctrl.config.recurring ? _constants.RecurrenceFrequencies : []);
	  };
	
	  /**
	   * @description
	   * Sets starting ocurrences number if not defined use default one
	   *
	   * @name Helpers#setDefaultOcurrencesValue
	   * @type {function}
	   */
	  var setDefaultOcurrencesValue = function setDefaultOcurrencesValue() {
	    if (!$ctrl.schedule.repeat) {
	      $ctrl.schedule.repeat = _constants.minOccurrences;
	    }
	  };
	
	  /**
	   * @description
	   * Updates scheduled end date
	   *
	   * @name Helpers#setEndDate
	   * @type {function}
	   */
	  var setEndDate = function setEndDate() {
	    $ctrl.schedule.endDate = getMinDate($ctrl.schedule.startDate, $ctrl.schedule.transferFrequency);
	  };
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	    get singleFrequency() {
	      return _constants.SingleFrequency;
	    },
	    getMinDate: getMinDate,
	    getScheduleText: getScheduleText,
	    setDefaultOcurrencesValue: setDefaultOcurrencesValue,
	    getFrequencies: getFrequencies,
	    setEndDate: setEndDate
	  });
	}

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description
	 * Component recurrence ending enum
	 *
	 * @name Constants#RecurrenceEnding
	 * @type {object}
	 */
	var RecurrenceEnding = exports.RecurrenceEnding = {
	  NEVER: 'NEVER',
	  ON: 'ON',
	  AFTER: 'AFTER'
	};
	
	/**
	 * @description
	 * Component transfer frequencies enum
	 *
	 * @name Constants#TransferFrequency
	 * @type {object}
	 */
	var TransferFrequency = exports.TransferFrequency = {
	  ONCE: 'ONCE',
	  DAILY: 'DAILY',
	  WEEKLY: 'WEEKLY',
	  MONTHLY: 'MONTHLY',
	  QUARTERLY: 'QUARTERLY',
	  YEARLY: 'YEARLY'
	};
	
	/**
	 * @description
	 * Array of recurring frequency objects with the following properties (all mandatory)
	 *
	 * @property {string} name Translation key of the label
	 * that will be displayed to the end user
	 * @property {string} value Denotes frequency type of transfer.
	 * Possible values: DAILY/WEEKLY/MONTHLY/YEARLY
	 * @property {number} every Indicates skip interval of transfer.
	 * 1 would mean execute every time, 2 - every other time
	 *
	 * @example
	 * {
	 *   name: 'form.schedule.frequency.weekly',
	 *   value: 'WEEKLY',
	 *   every: 1,
	 * },
	 * {
	 *   name: 'form.schedule.frequency.bi.weekly',
	 *   value: 'WEEKLY',
	 *   every: 2,
	 * }
	 *
	 * @name Constants#RecurrenceFrequencies
	 * @type {array}
	 */
	var RecurrenceFrequencies = exports.RecurrenceFrequencies = [{
	  name: 'form.schedule.frequency.daily',
	  value: TransferFrequency.DAILY,
	  every: 1
	}, {
	  name: 'form.schedule.frequency.weekly',
	  value: TransferFrequency.WEEKLY,
	  every: 1
	}, {
	  name: 'form.schedule.frequency.monthly',
	  value: TransferFrequency.MONTHLY,
	  every: 1
	}, {
	  name: 'form.schedule.frequency.quarterly',
	  value: TransferFrequency.QUARTERLY,
	  every: 1
	}, {
	  name: 'form.schedule.frequency.annually',
	  value: TransferFrequency.YEARLY,
	  every: 1
	}];
	
	/**
	 * @description
	 * Object representing single payment
	 *
	 * @property {string} name Translation key of the label
	 * that will be displayed to the end user
	 * @property {string} value Denotes frequency, holds value 'ONCE'
	 *
	 * @name Constants#SingleFrequency
	 * @type {object}
	 */
	var SingleFrequency = exports.SingleFrequency = {
	  name: 'form.schedule.frequency.once',
	  value: TransferFrequency.ONCE
	};
	
	/**
	 * @name Constants#minOccurrences
	 * @type {number}
	 */
	var minOccurrences = exports.minOccurrences = 2;
	
	/**
	 * @name Constants#maxOccurrences
	 * @type {number}
	 */
	var maxOccurrences = exports.maxOccurrences = 200;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-scheduling-ng.js.map