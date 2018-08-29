(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("ui-bb-format-amount-ng"), require("lib-bbm-plugins"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-initiate-payment-review-ng", ["ui-bb-i18n-ng", "ui-bb-format-amount-ng", "lib-bbm-plugins"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-initiate-payment-review-ng"] = factory(require("ui-bb-i18n-ng"), require("ui-bb-format-amount-ng"), require("lib-bbm-plugins"));
	else
		root["ext-bbm-initiate-payment-review-ng"] = factory(root["ui-bb-i18n-ng"], root["ui-bb-format-amount-ng"], root["lib-bbm-plugins"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_51__) {
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

	module.exports = __webpack_require__(59);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_51__;

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.intents = exports.helpers = exports.events = undefined;
	
	var _uiBbFormatAmountNg = __webpack_require__(15);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _uiBbI18nNg = __webpack_require__(3);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _events = __webpack_require__(60);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _helpers = __webpack_require__(61);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _intents = __webpack_require__(62);
	
	var _intents2 = _interopRequireDefault(_intents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var events = exports.events = _events2.default; /**
	                                                 * @module ext-bbm-initiate-payment-review-ng
	                                                 *
	                                                 * @description
	                                                 * Mobile extension for a payment review step in the Mobile initiate payment widget.
	                                                 *
	                                                 * @example
	                                                 * <!-- Contact widget model.xml -->
	                                                 * <property name="extension" viewHint="text-input,admin">
	                                                 *   <value type="string">ext-bbm-initiate-payment-review-ng</value>
	                                                 * </property>
	                                                 */
	var helpers = exports.helpers = _helpers2.default;
	var intents = exports.intents = _intents2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbI18nNg2.default, _uiBbFormatAmountNg2.default];

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libBbmPlugins = __webpack_require__(51);
	
	var _libBbmPlugins2 = _interopRequireDefault(_libBbmPlugins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // Temporary disable capsInNew until it fixed in lib-bbm-plugins
	/* eslint new-cap: ["error", { "capIsNew": false }] */
	
	
	/**
	 * @description
	 * Events that the extension subscribes to.
	 *
	 * @name Event
	 * @type {Object}
	 * @inner
	 */
	var Event = {
	  PAYMENT_DONE: 'bb.event.payment.done',
	  PAYMENT_FAILED: 'bb.event.payment.failed',
	  PAYMENT_START: 'bb.event.payment.started'
	};
	
	/**
	 * @name Preference
	 * @type {Object}
	 * @inner
	 */
	var Preference = {
	  PAYMENT_REVIEW_STEP: 'bb.payment.review.step'
	};
	
	exports.default = function (_ref) {
	  var $filter = _ref.$filter,
	      widget = _ref.widget;
	
	  var i18n = $filter('i18n');
	  var hasReviewStep = widget.getBooleanPreference(Preference.PAYMENT_REVIEW_STEP);
	  var events = {};
	
	  if (hasReviewStep) {
	    var _Object$assign;
	
	    Object.assign(events, (_Object$assign = {}, _defineProperty(_Object$assign, Event.PAYMENT_START, function () {
	      _libBbmPlugins2.default.ActivityIndicator().show(i18n('message.payment.start'));
	    }), _defineProperty(_Object$assign, Event.PAYMENT_DONE, function () {
	      _libBbmPlugins2.default.ActivityIndicator().hide();
	      _libBbmPlugins2.default.Snackbar().success(i18n('message.payment.done'));
	    }), _defineProperty(_Object$assign, Event.PAYMENT_FAILED, function () {
	      _libBbmPlugins2.default.ActivityIndicator().hide();
	      _libBbmPlugins2.default.Snackbar().error(i18n('message.payment.failed'));
	    }), _Object$assign));
	  }
	
	  return events;
	};

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _TransferFrequencyMes;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
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
	
	var TransferFrequencyMessage = (_TransferFrequencyMes = {}, _defineProperty(_TransferFrequencyMes, TransferFrequency.ONCE, 'message.payment.schedule.frequency.once'), _defineProperty(_TransferFrequencyMes, TransferFrequency.DAILY, 'message.payment.schedule.frequency.daily'), _defineProperty(_TransferFrequencyMes, TransferFrequency.WEEKLY, 'message.payment.schedule.frequency.weekly'), _defineProperty(_TransferFrequencyMes, TransferFrequency.MONTHLY, 'message.payment.schedule.frequency.monthly'), _defineProperty(_TransferFrequencyMes, TransferFrequency.QUARTERLY, 'message.payment.schedule.frequency.quarterly'), _defineProperty(_TransferFrequencyMes, TransferFrequency.YEARLY, 'message.payment.schedule.frequency.yearly'), _TransferFrequencyMes);
	
	var isToday = function isToday(dateStr) {
	  var date = new Date(dateStr);
	  var today = new Date();
	
	  return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
	};
	
	/**
	 * @description
	 * Helpers for ext-bbm-initiate-payment-form-ng
	 *
	 * @name Helpers
	 * @type {Object}
	 */
	
	exports.default = function (_ref) {
	  var _RecurrenceEndingStri;
	
	  var $filter = _ref.$filter,
	      intents = _ref.intents,
	      service = _ref.service,
	      stateContainer = _ref.stateContainer;
	
	  var dateFilter = $filter('date');
	  var i18n = $filter('i18n');
	
	  var RecurrenceEndingString = (_RecurrenceEndingStri = {}, _defineProperty(_RecurrenceEndingStri, RecurrenceEnding.NEVER, function () {
	    return i18n('message.payment.schedule.frequency.end.never');
	  }), _defineProperty(_RecurrenceEndingStri, RecurrenceEnding.AFTER, function (schedule) {
	    return schedule.repeat + ' ' + i18n('message.payment.schedule.frequency.end.after');
	  }), _defineProperty(_RecurrenceEndingStri, RecurrenceEnding.ON, function (schedule) {
	    var endDate = dateFilter(schedule.endDate, 'mediumDate');
	    return i18n('message.payment.schedule.frequency.end.on') + ' ' + endDate;
	  }), _RecurrenceEndingStri);
	
	  var getScheduleFrequencyString = function getScheduleFrequencyString(schedule) {
	    return i18n(TransferFrequencyMessage[schedule.transferFrequency]);
	  };
	
	  var getScheduleEndingString = function getScheduleEndingString(schedule) {
	    return RecurrenceEndingString[schedule.end](schedule);
	  };
	
	  var getScheduleStartDateString = function getScheduleStartDateString(schedule) {
	    return isToday(schedule.startDate) ? i18n('message.payment.schedule.today') : 'on ' + dateFilter(schedule.startDate, 'mediumDate');
	  };
	
	  var isRecurring = function isRecurring(schedule) {
	    return schedule.transferFrequency !== TransferFrequency.ONCE;
	  };
	
	  var getAccountDisplayAmount = function getAccountDisplayAmount(account) {
	    return account ? account.primaryValue || account.amount : '';
	  };
	
	  var getAccountDisplayName = function getAccountDisplayName(account) {
	    return account ? account.alias || account.name || '' : '';
	  };
	
	  /**
	   * @name Helpers#getPayment
	   * @type {function}
	   * @description
	   * Returns the payment object.
	   * @returns {module:widget-bbm-initiate-payment-ng.Payment}
	   */
	  var getPayment = stateContainer.createSelector(function (state) {
	    return state.payment.data;
	  });
	
	  var getSchedule = stateContainer.createSelector(function () {
	    return getPayment() ? getPayment().schedule : null;
	  });
	
	  /**
	   * @name Helpers#Beneficiary
	   * @type {function}
	   * @description
	   * Returns selected beneficiary of the payment.
	   * @returns {module:widget-bbm-initiate-payment-ng.AccountView}
	   */
	  var getBeneficiary = stateContainer.createSelector(function () {
	    return getPayment() ? getPayment().beneficiary : null;
	  });
	
	  /**
	   * @name Helpers#getBeneficiaryDisplayName
	   * @type {function}
	   * @description
	   * Returns a string that will be displayed as the name of the beneficiary.
	   * @returns {string}
	   */
	  var getBeneficiaryDisplayName = function getBeneficiaryDisplayName() {
	    return getAccountDisplayName(getBeneficiary());
	  };
	
	  /**
	   * @name Helpers#getBeneficiaryIdentifier
	   * @type {function}
	   * @description
	   * Returns the beneficiary identifier.
	   * @returns {string}
	   */
	  var getBeneficiaryIdentifier = stateContainer.createSelector(function () {
	    return getBeneficiary() ? getBeneficiary().identifier || '' : '';
	  });
	
	  /**
	   * @name Helpers#getDebitAccount
	   * @type {function}
	   * @description
	   * Returns selected debit account of the payment.
	   * @returns {module:widget-bbm-initiate-payment-ng.AccountView}
	   */
	  var getDebitAccount = stateContainer.createSelector(function () {
	    return getPayment() ? getPayment().debitAccount : null;
	  });
	
	  /**
	   * @name Helpers#getDebitAccountCurrency
	   * @type {function}
	   * @description
	   * Returns the amount of the debit account that should be displayed.
	   * @returns {string}
	   */
	  var getDebitAccountCurrency = stateContainer.createSelector(function () {
	    return getDebitAccount() ? getDebitAccount().currency || '' : '';
	  });
	
	  /**
	   * @name Helpers#getDebitAccountDisplayAmount
	   * @type {function}
	   * @description
	   * Returns the amount of the debit account that should be displayed.
	   * @returns {string}
	   */
	  var getDebitAccountDisplayAmount = function getDebitAccountDisplayAmount() {
	    return getAccountDisplayAmount(getDebitAccount());
	  };
	
	  /**
	   * @name Helpers#getDebitAccountDisplayName
	   * @type {function}
	   * @description
	   * Returns a string that will be displayed as the name of the debit account.
	   * @returns {string}
	   */
	  var getDebitAccountDisplayName = function getDebitAccountDisplayName() {
	    return getAccountDisplayName(getDebitAccount());
	  };
	
	  /**
	   * @name Helpers#getDebitAccountIdentifier
	   * @type {function}
	   * @description
	   * Returns the debit account identifier.
	   * @returns {string}
	   */
	  var getDebitAccountIdentifier = stateContainer.createSelector(function () {
	    return getDebitAccount() ? getDebitAccount().identifier || '' : '';
	  });
	
	  /**
	   * @name Helpers#getDescription
	   * @type {function}
	   * @description
	   * Returns the description of the payment.
	   * @returns {string}
	   */
	  var getDescription = stateContainer.createSelector(function () {
	    return getPayment() ? getPayment().description : '';
	  });
	
	  /**
	   * @name Helpers#getPaymentAmount
	   * @type {function}
	   * @description
	   * Returns the amount of the payment.
	   * @returns {string}
	   */
	  var getPaymentAmount = stateContainer.createSelector(function () {
	    return getPayment() ? getPayment().amount.value : '';
	  });
	
	  /**
	   * @name Helpers#getPaymentCurrency
	   * @type {function}
	   * @description
	   * Returns the currency of the payment.
	   * @returns {string}
	   */
	  var getPaymentCurrency = stateContainer.createSelector(function () {
	    return getPayment() ? getPayment().amount.currency : '';
	  });
	
	  var getSaveContact = stateContainer.createSelector(function () {
	    return getPayment() ? getPayment().saveContact : false;
	  });
	
	  /**
	   * @name Helpers#getScheduleSummary
	   * @type {function}
	   * @description
	   * Returns a summary of the given payment schedule as a string.
	   * @returns {string}
	   */
	  var getScheduleSummary = function getScheduleSummary() {
	    var schedule = getSchedule();
	
	    if (!schedule) return '';
	
	    var startingFrom = i18n('message.payment.schedule.startingFrom');
	
	    var startDate = getScheduleStartDateString(schedule);
	    var frequency = getScheduleFrequencyString(schedule);
	    var ending = getScheduleEndingString(schedule);
	
	    return isRecurring(schedule) ? frequency + ', ' + startingFrom + ' ' + startDate + ', ' + ending : frequency + ', ' + startDate;
	  };
	
	  /**
	   * @name Helpers#showBeneficiaryIdentifier
	   * @type {function}
	   * @description
	   * Returns true, if the beneficiary name should be shown, or false otherwise.
	   * @returns {boolean}
	   */
	  var showBeneficiaryIdentifier = function showBeneficiaryIdentifier() {
	    return Boolean(getBeneficiaryIdentifier());
	  };
	
	  /**
	   * @name Helpers#showBeneficiaryName
	   * @type {function}
	   * @description
	   * Returns true, if the beneficiary name should be shown, or false otherwise.
	   * @returns {boolean}
	   */
	  var showBeneficiaryName = function showBeneficiaryName() {
	    return Boolean(getBeneficiaryDisplayName());
	  };
	
	  /**
	   * @name Helpers#showDebitAccount
	   * @type {function}
	   * @description
	   * Returns true, if the debit account should be shown, or false otherwise.
	   * @returns {boolean}
	   */
	  var showDebitAccount = function showDebitAccount() {
	    return Boolean(getDebitAccount());
	  };
	
	  /**
	   * @name Helpers#showDescription
	   * @type {function}
	   * @description
	   * Returns true, if the payment description should be shown, or false otherwise.
	   * @returns {boolean}
	   */
	  var showDescription = function showDescription() {
	    return Boolean(getDescription());
	  };
	
	  /**
	   * @name Helpers#showSaveContact
	   * @type {function}
	   * @description
	   * Returns true, if the save contact message should be shown, or false otherwise.
	   * @returns {boolean}
	   */
	  var showSaveContact = function showSaveContact() {
	    return Boolean(getSaveContact() && service.canSaveContact());
	  };
	
	  /**
	   * @name Helpers#showUrgentPayment
	   * @type {function}
	   * @description
	   * Returns true, if the urgent payment message should be shown, or false otherwise.
	   * @returns {boolean}
	   */
	  var showUrgentPayment = function showUrgentPayment() {
	    return Boolean(getPayment().urgent);
	  };
	
	  /**
	   * @name Helpers#submitPayment
	   * @type {function}
	   * @description
	   * Submits the payment.
	   * @returns {Promise}
	   */
	  var submitPayment = function submitPayment() {
	    service.saveContactIfNeeded();
	
	    return service.makePaymentWithAuthorization().then(function () {
	      intents.initiatePayment();
	    });
	  };
	
	  return {
	    getBeneficiaryDisplayName: getBeneficiaryDisplayName,
	    getBeneficiaryIdentifier: getBeneficiaryIdentifier,
	    getDebitAccountCurrency: getDebitAccountCurrency,
	    getDebitAccountDisplayAmount: getDebitAccountDisplayAmount,
	    getDebitAccountDisplayName: getDebitAccountDisplayName,
	    getDebitAccountIdentifier: getDebitAccountIdentifier,
	    getDescription: getDescription,
	    getPaymentCurrency: getPaymentCurrency,
	    getPaymentAmount: getPaymentAmount,
	    getScheduleSummary: getScheduleSummary,
	    showBeneficiaryIdentifier: showBeneficiaryIdentifier,
	    showBeneficiaryName: showBeneficiaryName,
	    showDebitAccount: showDebitAccount,
	    showDescription: showDescription,
	    showSaveContact: showSaveContact,
	    showUrgentPayment: showUrgentPayment,
	    submitPayment: submitPayment
	  };
	};

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(63);
	
	/**
	 * @name Intents
	 * @type {Object}
	 */
	exports.default = function (_ref) {
	  var createRequest = _ref.createRequest,
	      handleRequest = _ref.handleRequest;
	  return {
	    /**
	     * @name Intents#initiatePayment
	     * @description The intent to start a new payment.
	     * @type {function}
	     */
	    initiatePayment: createRequest(_constants.Intent.INITIATE_PAYMENT),
	
	    /**
	     * @name Intents#showReview
	     * @description Handles the intent to review a payment.
	     * @type {function}
	     */
	    showReview: handleRequest(_constants.Intent.SHOW_REVIEW)
	  };
	};

/***/ }),

/***/ 63:
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
	  INITIATE_PAYMENT: 'intent.rbm.paymentOrder.payment.initiate',
	  SHOW_REVIEW: 'intent.rbm.paymentOrder.review.show'
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bbm-initiate-payment-review-ng.js.map