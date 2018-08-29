(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("ui-bb-date-label-filter-ng"), require("ui-bbm-textfield-ng"), require("lib-bbm-plugins"), require("ui-bbm-datepicker-ng"), require("ui-bbm-dropdown-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-initiate-payment-schedule-ng", ["ui-bb-i18n-ng", "ui-bb-date-label-filter-ng", "ui-bbm-textfield-ng", "lib-bbm-plugins", "ui-bbm-datepicker-ng", "ui-bbm-dropdown-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-initiate-payment-schedule-ng"] = factory(require("ui-bb-i18n-ng"), require("ui-bb-date-label-filter-ng"), require("ui-bbm-textfield-ng"), require("lib-bbm-plugins"), require("ui-bbm-datepicker-ng"), require("ui-bbm-dropdown-ng"));
	else
		root["ext-bbm-initiate-payment-schedule-ng"] = factory(root["ui-bb-i18n-ng"], root["ui-bb-date-label-filter-ng"], root["ui-bbm-textfield-ng"], root["lib-bbm-plugins"], root["ui-bbm-datepicker-ng"], root["ui-bbm-dropdown-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_49__, __WEBPACK_EXTERNAL_MODULE_51__, __WEBPACK_EXTERNAL_MODULE_65__, __WEBPACK_EXTERNAL_MODULE_66__) {
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

	module.exports = __webpack_require__(64);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_49__;

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_51__;

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.intents = exports.helpers = undefined;
	
	var _uiBbI18nNg = __webpack_require__(3);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbmDatepickerNg = __webpack_require__(65);
	
	var _uiBbmDatepickerNg2 = _interopRequireDefault(_uiBbmDatepickerNg);
	
	var _uiBbmDropdownNg = __webpack_require__(66);
	
	var _uiBbmDropdownNg2 = _interopRequireDefault(_uiBbmDropdownNg);
	
	var _uiBbmTextfieldNg = __webpack_require__(49);
	
	var _uiBbmTextfieldNg2 = _interopRequireDefault(_uiBbmTextfieldNg);
	
	var _helpers = __webpack_require__(67);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _intents = __webpack_require__(68);
	
	var _intents2 = _interopRequireDefault(_intents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bbm-initiate-payment-schedule-ng
	 *
	 * @description
	 * Mobile extension for the payment schedule view in the Mobile initiate payment widget.
	 *
	 * @example
	 * <!-- File model.xml of widget-bbm-initiate-payment-ng -->
	 * <property name="extension" viewHint="text-input,admin">
	 *   <value type="string">ext-bbm-initiate-payment-schedule-ng</value>
	 * </property>
	 */
	var helpers = exports.helpers = _helpers2.default;
	var intents = exports.intents = _intents2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbI18nNg2.default, _uiBbmDatepickerNg2.default, _uiBbmDropdownNg2.default, _uiBbmTextfieldNg2.default];

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_65__;

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_66__;

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libBbmPlugins = __webpack_require__(51);
	
	var _libBbmPlugins2 = _interopRequireDefault(_libBbmPlugins);
	
	var _uiBbDateLabelFilterNg = __webpack_require__(38);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // Temporary disable capsInNew until it fixed in lib-bbm-plugins
	/* eslint new-cap: ["error", { "capIsNew": false }] */
	
	
	var RecurrenceEnding = {
	  NEVER: 'NEVER',
	  ON: 'ON',
	  AFTER: 'AFTER'
	};
	
	var TransferFrequency = {
	  ONCE: 'ONCE',
	  DAILY: 'DAILY',
	  WEEKLY: 'WEEKLY',
	  MONTHLY: 'MONTHLY',
	  QUARTERLY: 'QUARTERLY',
	  YEARLY: 'YEARLY'
	};
	
	/**
	 * @description
	 * Helpers for ext-bbm-initiate-payment-schedule-ng
	 *
	 * @name Helpers
	 * @type {Object}
	 */
	
	exports.default = function (_ref) {
	  var $filter = _ref.$filter,
	      intents = _ref.intents,
	      service = _ref.service,
	      stateContainer = _ref.stateContainer;
	
	  var date = $filter('date');
	  var i18n = $filter('i18n');
	
	  var frequencyOptions = [{ id: TransferFrequency.ONCE, text: i18n('message.payment.schedule.frequency.once') }, { id: TransferFrequency.DAILY, text: i18n('message.payment.schedule.frequency.daily') }, { id: TransferFrequency.WEEKLY, text: i18n('message.payment.schedule.frequency.weekly') }, { id: TransferFrequency.MONTHLY, text: i18n('message.payment.schedule.frequency.monthly') }, { id: TransferFrequency.QUARTERLY, text: i18n('message.payment.schedule.frequency.quarterly') }, { id: TransferFrequency.YEARLY, text: i18n('message.payment.schedule.frequency.yearly') }];
	
	  var recurrenceEndingOptions = [{ id: RecurrenceEnding.NEVER, text: i18n('recurrence.ending.never') }, { id: RecurrenceEnding.ON, text: i18n('recurrence.ending.on') }, { id: RecurrenceEnding.AFTER, text: i18n('recurrence.ending.after') }];
	
	  var getPayment = stateContainer.createSelector(function (state) {
	    return state.payment.data;
	  });
	
	  /**
	   * @name Helpers#getSchedule
	   * @type {function}
	   * @description
	   * Returns the schedule object.
	   * @returns {module:widget-bbm-initiate-payment-ng.Schedule}
	   */
	  var getSchedule = stateContainer.createSelector(function () {
	    return getPayment() ? getPayment().schedule : null;
	  });
	
	  var getToday = function getToday() {
	    return date(Date.now(), 'yyyy-MM-ddTHH:mm:ssZ');
	  };
	
	  var getDayStart = function getDayStart(dateStr) {
	    return new Date(dateStr).setHours(0, 0, 0, 0);
	  };
	
	  var isPaymentRecurring = function isPaymentRecurring() {
	    return getSchedule().transferFrequency !== TransferFrequency.ONCE;
	  };
	
	  var isEndDateValid = function isEndDateValid(_ref2) {
	    var endDate = _ref2.endDate,
	        startDate = _ref2.startDate;
	    return getDayStart(startDate) <= getDayStart(endDate);
	  };
	
	  var isRepeatValid = function isRepeatValid(_ref3) {
	    var repeat = _ref3.repeat;
	    return repeat > 0 && repeat <= 99;
	  };
	
	  var checkValidity = function checkValidity() {
	    if (isPaymentRecurring()) {
	      var schedule = getSchedule();
	
	      // End date is not entered
	      if (schedule.end === RecurrenceEnding.ON && !schedule.endDate) {
	        _libBbmPlugins2.default.Snackbar().error(i18n('errors.payment.schedule.endDate.required'));
	        return false;
	      }
	
	      // End date is not valid
	      if (schedule.end === RecurrenceEnding.ON && !isEndDateValid(schedule)) {
	        _libBbmPlugins2.default.Snackbar().error(i18n('errors.payment.schedule.endDate.invalid'));
	        return false;
	      }
	
	      // Repeat is not valid
	      if (schedule.end === RecurrenceEnding.AFTER && !isRepeatValid(schedule)) {
	        _libBbmPlugins2.default.Snackbar().error(i18n('errors.payment.schedule.repeat.invalid'));
	        return false;
	      }
	    }
	
	    return true;
	  };
	
	  /**
	   * @name Helpers#getFrequencyOptions
	   * @type {function}
	   * @description
	   * Returns a list of frequency options.
	   * @returns {Array.<PaymentFrequency>}
	   */
	  var getFrequencyOptions = function getFrequencyOptions() {
	    return frequencyOptions;
	  };
	
	  /**
	   * @name Helpers#getMinimumRecurrenceEndDate
	   * @type {function}
	   * @description
	   * Returns a minimum allowed date to start a recurring payment.
	   * @returns {string}
	   */
	  var getMinimumRecurrenceEndDate = function getMinimumRecurrenceEndDate() {
	    return getSchedule().startDate;
	  };
	
	  /**
	   * @name Helpers#getMinimumExecutionDate
	   * @type {function}
	   * @description
	   * Returns a minimum allowed date to make a payment.
	   * @returns {string}
	   */
	  var getMinimumExecutionDate = function getMinimumExecutionDate() {
	    return getToday();
	  };
	
	  /**
	   * @name Helpers#getMinimumStartDate
	   * @type {function}
	   * @description
	   * Returns a minimum allowed date to start a recurring payment.
	   * @returns {string}
	   */
	  var getMinimumRecurrenceStartDate = function getMinimumRecurrenceStartDate() {
	    return getToday();
	  };
	
	  /**
	   * @name Helpers#getRecurrenceEndingOptions
	   * @type {function}
	   * @description
	   * Returns a list of possible recurring payment endings.
	   * @returns {Array.<RecurrenceEnding>}
	   */
	  var getRecurrenceEndingOptions = function getRecurrenceEndingOptions() {
	    return recurrenceEndingOptions;
	  };
	
	  /**
	   * @name Helpers#getStartDateLabel
	   * @type {function}
	   * @description
	   * Returns the label of the start date field.
	   * @returns {string}
	   */
	  var getStartDateLabel = function getStartDateLabel() {
	    return isPaymentRecurring() ? i18n('form.label.startDate') : i18n('form.label.executionDate');
	  };
	
	  /**
	   * @name Helpers#getStartDateTitle
	   * @type {function}
	   * @description
	   * Returns the title of the start date datepicker.
	   * @returns {string}
	   */
	  var getStartDateTitle = function getStartDateTitle() {
	    return isPaymentRecurring() ? i18n('form.title.selectStartDate') : i18n('form.title.selectExecutionDate');
	  };
	
	  /**
	   * @name Helpers#hasPayment
	   * @type {function}
	   * @description
	   * Returns true, if there is already a payment object available. False otherwise.
	   * @returns {boolean}
	   */
	  var hasPayment = function hasPayment() {
	    return Boolean(getPayment());
	  };
	
	  /**
	   * @description
	   * Fulfils the select schedule intent with the given data.
	   *
	   * @name Helpers#submitSchedule
	   * @type {function}
	   */
	  var submitSchedule = function submitSchedule() {
	    intents.selectSchedule(getSchedule());
	  };
	
	  /**
	   * @name Helpers#onScheduleFormSubmit
	   * @type {function}
	   * @description
	   * Handles submit of the schedule payment form.
	   * @returns {string}
	   */
	  var onScheduleFormSubmit = function onScheduleFormSubmit() {
	    if (checkValidity()) {
	      submitSchedule();
	    }
	  };
	
	  /**
	   * @name Helpers#isRecurringPaymentAllowed
	   * @type {function}
	   * @description
	   * Returns true, if recurring payments are allowed in preferences and false otherwise.
	   * @returns {boolean}
	   */
	  var isRecurringPaymentAllowed = function isRecurringPaymentAllowed() {
	    return Boolean(service.getPreferences().recurring);
	  };
	
	  /**
	   * @name Helpers#showEndingControl
	   * @type {function}
	   * @description
	   * Returns true, if the ending control should be shown.
	   * @returns {boolean}
	   */
	  var showEndingControl = function showEndingControl() {
	    return isRecurringPaymentAllowed() && isPaymentRecurring();
	  };
	
	  /**
	   * @name Helpers#showEndDateControl
	   * @type {function}
	   * @description
	   * Returns true, if the end date control should be shown.
	   * @returns {boolean}
	   */
	  var showEndDateControl = function showEndDateControl() {
	    return isRecurringPaymentAllowed() && isPaymentRecurring() && getSchedule().end === RecurrenceEnding.ON;
	  };
	
	  /**
	   * @name Helpers#showRepeatControl
	   * @type {function}
	   * @description
	   * Returns true, if the repeat control should be shown.
	   * @returns {boolean}
	   */
	  var showRepeatControl = function showRepeatControl() {
	    return isRecurringPaymentAllowed() && isPaymentRecurring() && getSchedule().end === RecurrenceEnding.AFTER;
	  };
	
	  /**
	   * @name Helpers.dateLabels
	   * @type {Object}
	   * @description
	   * Set of date labels.
	   */
	  var dateLabels = _defineProperty({}, _uiBbDateLabelFilterNg.TimePeriod.TODAY, i18n('calendar.label.today'));
	
	  return {
	    getFrequencyOptions: getFrequencyOptions,
	    getMinimumExecutionDate: getMinimumExecutionDate,
	    getMinimumRecurrenceEndDate: getMinimumRecurrenceEndDate,
	    getMinimumRecurrenceStartDate: getMinimumRecurrenceStartDate,
	    getRecurrenceEndingOptions: getRecurrenceEndingOptions,
	    getSchedule: getSchedule,
	    getStartDateLabel: getStartDateLabel,
	    getStartDateTitle: getStartDateTitle,
	    hasPayment: hasPayment,
	    isRecurringPaymentAllowed: isRecurringPaymentAllowed,
	    onScheduleFormSubmit: onScheduleFormSubmit,
	    showEndingControl: showEndingControl,
	    showEndDateControl: showEndDateControl,
	    showRepeatControl: showRepeatControl,
	    dateLabels: dateLabels
	  };
	};
	
	/**
	 * @typedef {Object} PaymentFrequency
	 * @property {string} id Frequency identifier
	 * @property {string} text Frequency as a text to be displayed
	 */

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(69);
	
	/**
	 * @name Intents
	 * @type {Object}
	 */
	exports.default = function (_ref) {
	  var createRequest = _ref.createRequest,
	      handleRequest = _ref.handleRequest;
	  return {
	    /**
	     * @name Intents#selectSchedule
	     * @description The intent to select schedule.
	     * @type {function}
	     */
	    selectSchedule: createRequest(_constants.Intent.SELECT_SCHEDULE),
	
	    /**
	     * @name Intents#showSchedule
	     * @description Handles the intent to show schedule.
	     * @type {function}
	     * @param {Object} schedule
	     */
	    showSchedule: handleRequest(_constants.Intent.SHOW_SCHEDULE)
	  };
	};

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint import/prefer-default-export: "off" */
	
	/**
	 * Intents
	 * @type {Object}
	 */
	var Intent = exports.Intent = {
	  SELECT_SCHEDULE: 'intent.rbm.paymentOrder.schedule.select',
	  SHOW_SCHEDULE: 'intent.rbm.paymentOrder.schedule.show'
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bbm-initiate-payment-schedule-ng.js.map