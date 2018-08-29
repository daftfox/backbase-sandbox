(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-account-selector-ng"), require("ui-bb-currency-input-ng"), require("ui-bb-char-counter-ng"), require("ui-bb-calendar-popup-ng"), require("ui-bb-expandable-ng"), require("vendor-bb-angular-ng-messages"), require("ui-bb-account-card-ng"), require("vendor-bb-uib-alert"), require("ui-bb-confirm-ng"), require("ui-bb-autocomplete-search-ng"), require("ui-bb-format-amount-ng"), require("ui-bb-switcher-ng"), require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-initiate-payment-internal-ng", ["vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "ui-bb-loading-overlay-ng", "ui-bb-account-selector-ng", "ui-bb-currency-input-ng", "ui-bb-char-counter-ng", "ui-bb-calendar-popup-ng", "ui-bb-expandable-ng", "vendor-bb-angular-ng-messages", "ui-bb-account-card-ng", "vendor-bb-uib-alert", "ui-bb-confirm-ng", "ui-bb-autocomplete-search-ng", "ui-bb-format-amount-ng", "ui-bb-switcher-ng", "vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-initiate-payment-internal-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-account-selector-ng"), require("ui-bb-currency-input-ng"), require("ui-bb-char-counter-ng"), require("ui-bb-calendar-popup-ng"), require("ui-bb-expandable-ng"), require("vendor-bb-angular-ng-messages"), require("ui-bb-account-card-ng"), require("vendor-bb-uib-alert"), require("ui-bb-confirm-ng"), require("ui-bb-autocomplete-search-ng"), require("ui-bb-format-amount-ng"), require("ui-bb-switcher-ng"), require("vendor-bb-angular"));
	else
		root["ext-bb-initiate-payment-internal-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["ui-bb-loading-overlay-ng"], root["ui-bb-account-selector-ng"], root["ui-bb-currency-input-ng"], root["ui-bb-char-counter-ng"], root["ui-bb-calendar-popup-ng"], root["ui-bb-expandable-ng"], root["vendor-bb-angular-ng-messages"], root["ui-bb-account-card-ng"], root["vendor-bb-uib-alert"], root["ui-bb-confirm-ng"], root["ui-bb-autocomplete-search-ng"], root["ui-bb-format-amount-ng"], root["ui-bb-switcher-ng"], root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_18__) {
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

	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.hooks = exports.helpers = exports.dependencyKeys = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(2);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbI18nNg = __webpack_require__(3);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(4);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBbAccountSelectorNg = __webpack_require__(5);
	
	var _uiBbAccountSelectorNg2 = _interopRequireDefault(_uiBbAccountSelectorNg);
	
	var _uiBbCurrencyInputNg = __webpack_require__(6);
	
	var _uiBbCurrencyInputNg2 = _interopRequireDefault(_uiBbCurrencyInputNg);
	
	var _uiBbCharCounterNg = __webpack_require__(7);
	
	var _uiBbCharCounterNg2 = _interopRequireDefault(_uiBbCharCounterNg);
	
	var _uiBbCalendarPopupNg = __webpack_require__(8);
	
	var _uiBbCalendarPopupNg2 = _interopRequireDefault(_uiBbCalendarPopupNg);
	
	var _uiBbExpandableNg = __webpack_require__(9);
	
	var _uiBbExpandableNg2 = _interopRequireDefault(_uiBbExpandableNg);
	
	var _vendorBbAngularNgMessages = __webpack_require__(10);
	
	var _vendorBbAngularNgMessages2 = _interopRequireDefault(_vendorBbAngularNgMessages);
	
	var _uiBbAccountCardNg = __webpack_require__(11);
	
	var _uiBbAccountCardNg2 = _interopRequireDefault(_uiBbAccountCardNg);
	
	var _vendorBbUibAlert = __webpack_require__(12);
	
	var _vendorBbUibAlert2 = _interopRequireDefault(_vendorBbUibAlert);
	
	var _uiBbConfirmNg = __webpack_require__(13);
	
	var _uiBbConfirmNg2 = _interopRequireDefault(_uiBbConfirmNg);
	
	var _uiBbAutocompleteSearchNg = __webpack_require__(14);
	
	var _uiBbAutocompleteSearchNg2 = _interopRequireDefault(_uiBbAutocompleteSearchNg);
	
	var _uiBbFormatAmountNg = __webpack_require__(15);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _uiBbSwitcherNg = __webpack_require__(16);
	
	var _uiBbSwitcherNg2 = _interopRequireDefault(_uiBbSwitcherNg);
	
	var _helpers = __webpack_require__(17);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _hooks = __webpack_require__(20);
	
	var _hooks2 = _interopRequireDefault(_hooks);
	
	var _events = __webpack_require__(21);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bb-initiate-payment-us-m-2-m-ng
	 *
	 * @description
	 * Default extension for widget-bb-initiate-payment-us-m2m-ng
	 *
	 * @requires vendor-bb-angular-ng-aria
	 */
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbI18nNg2.default, _uiBbLoadingOverlayNg2.default, _uiBbAccountSelectorNg2.default, _uiBbCurrencyInputNg2.default, _uiBbCharCounterNg2.default, _uiBbCalendarPopupNg2.default, _uiBbExpandableNg2.default, _vendorBbAngularNgMessages2.default, _uiBbAccountCardNg2.default, _vendorBbUibAlert2.default, _uiBbConfirmNg2.default, _uiBbAutocompleteSearchNg2.default, _uiBbFormatAmountNg2.default, _uiBbSwitcherNg2.default];
	
	var helpers = exports.helpers = _helpers2.default;
	var hooks = exports.hooks = _hooks2.default;
	var events = exports.events = _events2.default;

/***/ }),
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
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fromModelToForm = undefined;
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _constants = __webpack_require__(19);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var templates = {
	  form: '#' + _constants.ExtensionName + '/form.html',
	  review: '#' + _constants.ExtensionName + '/review.html'
	};
	
	var currencies = [];
	var minOccurrences = 2;
	var maxOccurrences = 200;
	var maxDigits = 13;
	
	var fromContactToBeneficiary = function fromContactToBeneficiary(contact) {
	  return {
	    name: contact.name,
	    bank: {
	      accountNumber: contact.accountNumber
	    }
	  };
	};
	
	var flattenContactAccounts = function flattenContactAccounts(contacts) {
	  var resultContacts = [];
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = contacts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var contact = _step.value;
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = contact.accounts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var account = _step2.value;
	
	          Object.assign(account, Object.assign({}, contact, {
	            // following line overwrites account.accountName with this preference
	            accountName: account.accountName || account.alias || account.name,
	            external: true
	          }));
	          resultContacts.push(account);
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
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
	
	  return resultContacts;
	};
	
	var fromArrangementToContact = function fromArrangementToContact(arrangement) {
	  return {
	    name: arrangement.name,
	    accountNumber: arrangement.BBAN,
	    amount: arrangement.amount,
	    currency: arrangement.currency
	  };
	};
	
	var fromBeneficiaryToContact = function fromBeneficiaryToContact(beneficiary) {
	  return {
	    name: beneficiary.name,
	    accounts: [{
	      name: beneficiary.name,
	      accountNumber: beneficiary.bank.accountNumber,
	      accountType: beneficiary.bank.accountType.value
	    }]
	  };
	};
	
	/**
	 * @name getDateOnly
	 * @inner
	 * @type {function}
	 *
	 * @description
	 * Parses a javascript date to a yyyy-MM-DD format string, dropping time and timezone information.
	 *
	 * @param {date} dateArg the date to parse
	 * @returns {string} the formatted string/date
	 */
	var getDateOnly = function getDateOnly(dateArg) {
	  if (!dateArg) {
	    return null;
	  }
	  var date = new Date(dateArg);
	
	  var month = String(date.getMonth() + 1);
	  var day = String(date.getDate());
	  var year = String(date.getFullYear());
	
	  return year + '-' + month.padStart(2, '0') + '-' + day.padStart(2, '0');
	};
	
	/**
	 * @name getRecurringTransactionDay
	 * @inner
	 * @type {function}
	 *
	 * @description
	 * Denotes day on which transfer should be executed.
	 * For weekly it will be 1..7 indicating weekday.
	 * For monthly it will be 1..31 indicating day of month.
	 * For yearly it will be 1..12 indicating month of the year
	 *
	 * @param {object} schedule Recurring payment schedule object
	 * @returns {number} Recurring transaction day
	 */
	var getRecurringTransactionDay = function getRecurringTransactionDay(schedule) {
	  switch (schedule.transferFrequency.value) {
	    case _constants.TransferFrequency.YEARLY:
	      return schedule.startDate.getMonth() + 1;
	    case _constants.TransferFrequency.MONTHLY:
	      return schedule.startDate.getDate();
	    default:
	      return schedule.startDate.getDay() + 1;
	  }
	};
	
	/**
	 * @name Helpers#fromModelToForm
	 * @description
	 * Transforms payment model coming from server to for model
	 * @type {Function}
	 * @param {Object} payment Payment model from server
	 * @returns {Object} Transformed payment
	 */
	var fromModelToForm = exports.fromModelToForm = function fromModelToForm(payment) {
	  var paymentForm = {
	    createdAt: payment.createdAt ? new Date(payment.createdAt) : null,
	    data: {
	      id: payment.id ? payment.id : null
	    }
	  };
	
	  // select debtor info
	  if (payment.debtorAccount) {
	    paymentForm.data.debitAccount = Object.assign({}, _vendorBbAngular2.default.copy(payment.debtorAccount), {
	      id: payment.debtorAccount.arrangementId
	    });
	  }
	
	  // creditor info
	  if (payment.creditTransferTransactionInformation && payment.creditTransferTransactionInformation.length) {
	    var creditInfo = payment.creditTransferTransactionInformation[0];
	    // amount and currency
	    if (creditInfo.instructedAmount) {
	      Object.assign(paymentForm.data, {
	        amount: {
	          currency: creditInfo.instructedAmount.currencyCode || null,
	          value: creditInfo.instructedAmount.amount || null
	        }
	      });
	    }
	
	    Object.assign(paymentForm.data, {
	      beneficiary: {
	        name: creditInfo.creditor ? creditInfo.creditor.name : null,
	        postalAddress: creditInfo.creditor ? creditInfo.creditor.postalAddress : null,
	        message: creditInfo.remittanceInformation ? creditInfo.remittanceInformation.content : null,
	        bank: {
	          name: creditInfo.creditorBank ? creditInfo.creditorBank.name : null,
	          accountNumber: creditInfo.creditorAccount && creditInfo.creditorAccount.identification ? creditInfo.creditorAccount.identification.identification : null,
	          code: creditInfo.creditorBank ? creditInfo.creditorBank.bankBranchCode : null,
	          postalAddress: creditInfo.creditorBank ? creditInfo.creditorBank.postalAddress : null,
	          message: creditInfo.messageToBank || null,
	          accountType: _constants.AccountTypes.find(function (item) {
	            return item.value === creditInfo.creditorAccount.accountType;
	          })
	        }
	      }
	    });
	
	    if (creditInfo.correspondentBank) {
	      Object.assign(paymentForm.data.beneficiary, {
	        correspondentBank: {
	          name: creditInfo.correspondentBank.name || null,
	          code: creditInfo.correspondentBank.bankBranchCode
	        }
	      });
	    }
	
	    // reference and description
	    Object.assign(paymentForm.data, {
	      paymentReference: creditInfo.endToEndIdentification || null
	    });
	  }
	
	  // schedule
	  if (payment.schedule) {
	    Object.assign(paymentForm.data, {
	      schedule: {
	        transferFrequency: {
	          value: payment.schedule.transferFrequency
	        }
	      }
	    });
	
	    if (payment.schedule.transferFrequency === 'WEEKLY') {
	      paymentForm.data.schedule.transferFrequency.name = 'form.schedule.frequency.weekly';
	    } else if (payment.schedule.transferFrequency === 'DAILY') {
	      paymentForm.data.schedule.transferFrequency.name = 'form.schedule.frequency.daily';
	    } else if (payment.schedule.transferFrequency === 'MONTHLY') {
	      paymentForm.data.schedule.transferFrequency.name = 'form.schedule.frequency.monthly';
	    } else if (payment.schedule.transferFrequency === 'QUARTERLY') {
	      paymentForm.data.schedule.transferFrequency.name = 'form.schedule.frequency.quarterly';
	    } else if (payment.schedule.transferFrequency === 'YEARLY') {
	      paymentForm.data.schedule.transferFrequency.name = 'form.schedule.frequency.annually';
	    }
	
	    paymentForm.data.schedule.startDate = payment.schedule.startDate ? new Date(payment.schedule.startDate) : null;
	
	    if (payment.schedule.every) {
	      paymentForm.data.schedule.transferFrequency.every = parseInt(payment.schedule.every, 10);
	    }
	
	    if (payment.schedule.endDate) {
	      paymentForm.data.schedule.endDate = new Date(payment.schedule.endDate);
	    }
	
	    if (payment.schedule.repeat) {
	      paymentForm.data.schedule.repeat = payment.schedule.repeat;
	      paymentForm.data.endingType = _constants.RecurrenceEnding.AFTER;
	    } else if (payment.schedule.endDate) {
	      paymentForm.data.endingType = _constants.RecurrenceEnding.ON;
	    }
	  } else {
	    Object.assign(paymentForm.data, {
	      endingType: _constants.RecurrenceEnding.NEVER,
	      schedule: {
	        transferFrequency: _vendorBbAngular2.default.copy(_constants.SingleFrequency),
	        startDate: new Date(payment.requestedExecutionDate),
	        endDate: new Date(payment.requestedExecutionDate)
	      }
	    });
	  }
	
	  return paymentForm;
	};
	
	exports.default = function (_ref) {
	  var stateContainer = _ref.stateContainer,
	      router = _ref.router,
	      $filter = _ref.$filter,
	      service = _ref.service;
	
	  var i18nFilter = $filter('i18n');
	  var dateFilter = $filter('date');
	
	  /**
	   * @description
	   * Retrieve save new contact flag from state
	   * @name saveNewContact
	   * @inner
	   * @type {Function}
	   * @returns {Boolean}
	   */
	  var saveNewContact = stateContainer.createSelector(function (state) {
	    return state.payment.saveNewContact;
	  });
	
	  /**
	   * @description
	   * Retrieve payment data from state store
	   * @name Helpers#getContacts
	   * @type {Function}
	   * @returns {Object}
	   */
	  var getContacts = stateContainer.createSelector(function (state) {
	    return state.contacts.data;
	  });
	
	  /**
	   * @description
	   * Retrieve payment data from state store
	   * @name Helpers#getPayment
	   * @type {Function}
	   * @returns {Object}
	   */
	  var getPayment = stateContainer.createSelector(function (state) {
	    return state.payment.data;
	  });
	
	  /**
	   * @description
	   * Retrieve debit accounts data from state store
	   * @name Helpers#getDebitAccounts
	   * @type {Function}
	   * @returns {Object}
	   */
	  var getDebitAccounts = stateContainer.createSelector(function (state) {
	    return state.debitAccounts;
	  });
	
	  /**
	   * @description
	   * Retrieve credit accounts data from state store
	   * @name Helpers#getCreditAccounts
	   * @type {Function}
	   * @returns {Array}
	   */
	  var getCreditAccounts = stateContainer.createSelector(function (state) {
	    return state.creditAccounts.data;
	  });
	
	  /**
	   * @description
	   * Retrieve payment beneficiary data from state store
	   * @name Helpers#getBeneficiary
	   * @type {Function}
	   * @returns {Object}
	   */
	  var getBeneficiary = stateContainer.createSelector(function () {
	    return getPayment().beneficiary;
	  });
	
	  /**
	   * @description
	   * Retrieve beneficiary bank data from state store
	   * @name Helpers#getBeneficiaryBank
	   * @type {Function}
	   * @returns {Object}
	   */
	  var getBeneficiaryBank = stateContainer.createSelector(function () {
	    return getBeneficiary().bank;
	  });
	
	  /**
	   * @description
	   * Retrieve payment schedule data from state store
	   * @name Helpers#getSchedule
	   * @type {Function}
	   * @returns {Object}
	   */
	  var getSchedule = stateContainer.createSelector(function () {
	    return getPayment().schedule;
	  });
	
	  /**
	   * @description
	   * Returns frequencies for payment depending on occurences number
	   *
	   * @name Helpers#getFrequencies
	   * @type {function}
	   * @returns {array<object>} Array of transfer frequencies
	   */
	  var getFrequencies = stateContainer.createSelector(function (state) {
	    return [_constants.SingleFrequency].concat(state.preferences.recurring ? _constants.RecurrenceFrequencies : []);
	  });
	
	  /**
	   * @description
	   * Retrieve review from state store
	   * @name Helpers#getReview
	   * @type {Function}
	   * @returns {Object}
	   */
	  var getReview = stateContainer.createSelector(function (state) {
	    return state.review;
	  });
	
	  /**
	   * @description
	   * Retrieve form from state store
	   * @name Helpers#getForm
	   * @type {Function}
	   * @returns {Object}
	   */
	  var getForm = stateContainer.createSelector(function (state) {
	    return state.form;
	  });
	
	  /**
	   * @description
	   * Retrieve "fromEditChanged" value from state store
	   * @name Helpers#getFromEditChanged
	   * @type {Function}
	   * @returns {Object}
	   */
	  var getFromEditChanged = stateContainer.createSelector(function (state) {
	    return state.payment.fromEditChanged;
	  });
	
	  /**
	   * @description
	   * Retrieve edit role value from state store
	   * @name Helpers#getEditRole
	   * @type {Function}
	   * @returns {Object}
	   */
	  var getEditRole = stateContainer.createSelector(function (state) {
	    return state.preferences.editRole;
	  });
	
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
	    var payment = getPayment();
	    var schedule = getSchedule();
	    var words = [];
	    var today = new Date().setHours(0, 0, 0, 0);
	    var startDate = new Date(schedule.startDate);
	    var isToday = startDate.setHours(0, 0, 0, 0) === today;
	    var multipleOccurrences = schedule.transferFrequency.value !== _constants.TransferFrequency.ONCE;
	    var hasEnd = payment.endingType !== _constants.RecurrenceEnding.NEVER;
	    var isEndingAfter = payment.endingType === _constants.RecurrenceEnding.AFTER;
	
	    // add frequency
	    words.push(i18nFilter(schedule.transferFrequency.name));
	    words.push('-');
	
	    // if there are multiple occurrences, add word starting
	    if (multipleOccurrences) {
	      words.push(i18nFilter('form.schedule.starting'));
	    }
	
	    // if start date is today use word instead of date
	    if (isToday) {
	      var todayString = i18nFilter('form.schedule.today');
	      // for multiple occurrences, there is a prefix word, so this on should be lowercase
	      if (multipleOccurrences) {
	        todayString = todayString.toLowerCase();
	      }
	
	      words.push(todayString);
	    }
	
	    // for single transfer in the future, we need prefix word on
	    if (!multipleOccurrences && !isToday) {
	      words.push(i18nFilter('form.schedule.on').toLowerCase());
	    }
	
	    if (!isToday) {
	      words.push(dateFilter(schedule.startDate));
	    }
	
	    var hasLimitedOccurences = hasEnd && multipleOccurrences;
	    var isMinOccurences = !schedule.repeat || schedule.repeat < minOccurrences;
	
	    // if there are limited number of occurrences,
	    // add comma for the last word, so that there is no space between them
	    if (hasLimitedOccurences && !(isEndingAfter && isMinOccurences)) {
	      words[words.length - 1] += ',';
	    }
	
	    if (hasEnd && multipleOccurrences) {
	      // there is an end for this schedule
	      // based on the type of ending construct words differently
	      if (payment.endingType === _constants.RecurrenceEnding.ON) {
	        words.push(i18nFilter('form.schedule.until'));
	        words.push(dateFilter(schedule.endDate));
	      } else if (schedule.repeat >= minOccurrences) {
	        words.push(schedule.repeat);
	        words.push(schedule.repeat ? i18nFilter('form.schedule.repeat.count') : '');
	      }
	    }
	
	    // output everything together
	    return words.join(' ');
	  };
	
	  /**
	   * @description
	   * Updates scheduled end date
	   *
	   * @name Helpers#setEndDate
	   * @type {function}
	   */
	  var setEndDate = function setEndDate() {
	    var schedule = getSchedule();
	    schedule.endDate = getMinDate(schedule.startDate, schedule.transferFrequency);
	  };
	
	  /**
	   * @description
	   * Check that `account` is not in the current list of beneficiaries
	   * @name removeSelectedDebitAccount
	   * @type {Function}
	   * @inner
	   * @param {Object} account The debit account to check
	   * @returns {Boolean}
	   */
	  var removeSelectedDebitAccount = function removeSelectedDebitAccount(account) {
	    var selectedDebitAccount = getPayment().debitAccount;
	
	    if (!selectedDebitAccount || !selectedDebitAccount.BBAN) {
	      return true;
	    }
	
	    return account.BBAN !== selectedDebitAccount.BBAN;
	  };
	
	  /**
	   * @description
	   * Loads list of contacts filtered by contact name
	   *
	   * @param {string} name Name of the contact
	   * @return {Promise.<Object>}
	   *
	   * @name Helpers#loadContactsByName
	   * @type {function}
	   */
	  var loadContactsByName = function loadContactsByName(name) {
	    var contacts = getContacts();
	    var creditAccounts = getCreditAccounts() || [];
	
	    var combinedAccounts = [].concat(_toConsumableArray(creditAccounts.filter(removeSelectedDebitAccount).map(fromArrangementToContact)), _toConsumableArray(flattenContactAccounts(contacts)));
	
	    if (name) {
	      combinedAccounts = combinedAccounts.filter(function (account) {
	        return account.name.toUpperCase().includes(name.toUpperCase()) || account.accountName && account.accountName.toUpperCase().includes(name.toUpperCase()) || account.accountNumber && account.accountNumber.toUpperCase().includes(name.toUpperCase());
	      });
	    }
	
	    // add groupheaders
	    var ownAccsHeaderSet = false;
	    var prevName = '';
	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;
	
	    try {
	      for (var _iterator3 = combinedAccounts[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	        var account = _step3.value;
	
	        if (!account.external && !ownAccsHeaderSet) {
	          ownAccsHeaderSet = true;
	          account.group = i18nFilter('form.beneficiary.group.internal');
	        } else if (account.external) {
	          account.group = prevName !== account.name ? account.name : null;
	          prevName = account.name;
	        } else {
	          account.group = null;
	        }
	      }
	    } catch (err) {
	      _didIteratorError3 = true;
	      _iteratorError3 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion3 && _iterator3.return) {
	          _iterator3.return();
	        }
	      } finally {
	        if (_didIteratorError3) {
	          throw _iteratorError3;
	        }
	      }
	    }
	
	    return Promise.resolve({
	      data: combinedAccounts,
	      totalItems: combinedAccounts.length
	    });
	  };
	
	  /**
	   * @description
	   * Set beneficiary fields when selecting contact
	   *
	   * @param {object} model Contact model
	   * @name Helpers#selectContact
	   * @type {function}
	   */
	  var selectContact = function selectContact(model) {
	    return service.setBeneficiary(fromContactToBeneficiary(model));
	  };
	
	  /**
	   * @description
	   * Resets all the beneficiary fields
	   *
	   * @name Helpers#resetContact
	   * @type {function}
	   */
	  var resetContact = function resetContact() {
	    service.resetBeneficiary();
	  };
	
	  /**
	   * @description
	   * Sets starting ocurrences number if not defined use default one
	   *
	   * @name Helpers#setDefaultOcurrencesValue
	   * @type {function}
	   */
	  var setDefaultOcurrencesValue = function setDefaultOcurrencesValue() {
	    var schedule = getSchedule();
	    if (!schedule.repeat) {
	      schedule.repeat = minOccurrences;
	    }
	  };
	
	  /**
	   * @description
	   * Check if contact is not in address book
	   *
	   * @returns {boolean}
	   *
	   * @name Helpers#isNewContact
	   * @inner
	   * @type {function}
	   */
	  var isNewContact = function isNewContact() {
	    var beneficiary = getBeneficiary();
	    var contacts = getContacts();
	
	    return !Boolean(contacts && contacts.find(function (contact) {
	      return contact.name === beneficiary.name && contact.accountNumber === beneficiary.bank.accountNumber && contact.accountType === beneficiary.bank.accountType.value;
	    }));
	  };
	
	  /**
	   * @description
	   * Check if beneficiary fields are set
	   *
	   * @returns {boolean}
	   *
	   * @name Helpers#isBeneficiarySet
	   * @inner
	   * @type {function}
	   */
	  var isBeneficiarySet = function isBeneficiarySet() {
	    var beneficiary = getBeneficiary();
	
	    return Boolean(beneficiary.name && beneficiary.bank.accountNumber && beneficiary.bank.accountType);
	  };
	
	  /**
	   * @description
	   * Checks if save new contact checkbox should be enabled
	   *
	   * @returns {boolean}
	   *
	   * @name Helpers#isSaveNewContactEnabled
	   * @type {function}
	   */
	  var isSaveNewContactEnabled = function isSaveNewContactEnabled() {
	    return isBeneficiarySet() && isNewContact();
	  };
	
	  /**
	   * @description
	   * Transforms form fields to contact model to be saved
	   *
	   * @param {object} beneficiary The beneficiary fields
	   * @returns {object}
	   *
	   * @name Helpers#formToContact
	   * @type {function}
	   */
	  var formToContact = function formToContact(beneficiary) {
	    return isSaveNewContactEnabled() && saveNewContact() && fromBeneficiaryToContact(beneficiary);
	  };
	
	  /**
	   * @description
	   * Transforms form fields to payment model to be saved
	   *
	   * @param {object} payment The payment fields
	   * @returns {object}
	   *
	   * @name Helpers#formToPayment
	   * @type {function}
	   */
	  var formToPayment = function formToPayment(payment) {
	    var beneficiary = payment.beneficiary,
	        debitAccount = payment.debitAccount,
	        schedule = payment.schedule,
	        amount = payment.amount;
	
	    var isSinglePayment = !schedule.transferFrequency || schedule.transferFrequency.value === _constants.SingleFrequency.value;
	
	    var debtorAccount = debitAccount ? {
	      identification: {
	        identification: debitAccount.id,
	        schemeName: 'ID'
	      }
	    } : null;
	
	    if (debitAccount && debitAccount.name) {
	      Object.assign(debtorAccount, { name: debitAccount.name });
	    }
	
	    var creditTransferTransactionInformation = [{
	      instructedAmount: {
	        amount: amount.value,
	        currencyCode: amount.currency
	      },
	      creditorAccount: {
	        identification: {
	          identification: beneficiary.bank.accountNumber,
	          schemeName: 'BBAN'
	        },
	        name: beneficiary.name,
	        accountType: beneficiary.bank.accountType.value
	      },
	      creditor: {
	        name: beneficiary.name
	      }
	    }];
	
	    if (beneficiary.message) {
	      Object.assign(creditTransferTransactionInformation[0], {
	        remittanceInformation: beneficiary.message
	      });
	    }
	
	    var paymentOrder = {
	      debtorAccount: debtorAccount,
	      requestedExecutionDate: getDateOnly(schedule.startDate),
	      paymentMode: isSinglePayment ? 'SINGLE' : 'RECURRING',
	      paymentType: 'INTERNAL',
	      creditTransferTransactionInformation: creditTransferTransactionInformation
	    };
	
	    if (!isSinglePayment) {
	      Object.assign(paymentOrder, {
	        schedule: {
	          transferFrequency: schedule.transferFrequency.value,
	          on: getRecurringTransactionDay(schedule),
	          startDate: getDateOnly(schedule.startDate),
	          every: schedule.transferFrequency.every,
	          endDate: payment.endingType === _constants.RecurrenceEnding.ON ? getDateOnly(schedule.endDate) : null,
	          repeat: payment.endingType === _constants.RecurrenceEnding.AFTER ? schedule.repeat : null
	        }
	      });
	    }
	
	    if (payment.id) {
	      Object.assign(paymentOrder, { id: payment.id });
	    }
	
	    return paymentOrder;
	  };
	
	  /**
	   * Transforms the form into a pristine state after binding all fields
	   *
	   * @name setFormPristine
	   * @type {function}
	   * @param {object} scope Current ng scope with form
	   */
	  var setFormPristine = function setFormPristine(scope) {
	    scope.$watch(function () {
	      return getFromEditChanged();
	    }, function (newValue) {
	      if (newValue) {
	        scope.$evalAsync(function () {
	          scope.paymentForm.$setPristine();
	          service.updateFromEditChanged(false);
	        });
	      }
	    });
	  };
	
	  return {
	    get template() {
	      return templates[router.getRoute()];
	    },
	    get recurrenceEnding() {
	      return _constants.RecurrenceEnding;
	    },
	    get singleFrequency() {
	      return _constants.SingleFrequency;
	    },
	    get accountTypes() {
	      return _constants.AccountTypes;
	    },
	    maxDigits: maxDigits,
	    currencies: currencies,
	    minOccurrences: minOccurrences,
	    maxOccurrences: maxOccurrences,
	    getPayment: getPayment,
	    getSchedule: getSchedule,
	    getBeneficiary: getBeneficiary,
	    getBeneficiaryBank: getBeneficiaryBank,
	    getDebitAccounts: getDebitAccounts,
	    getReview: getReview,
	    getForm: getForm,
	    getMinDate: getMinDate,
	    getScheduleText: getScheduleText,
	    getFrequencies: getFrequencies,
	    setEndDate: setEndDate,
	    loadContactsByName: loadContactsByName,
	    selectContact: selectContact,
	    resetContact: resetContact,
	    isSaveNewContactEnabled: isSaveNewContactEnabled,
	    setDefaultOcurrencesValue: setDefaultOcurrencesValue,
	    formToContact: formToContact,
	    formToPayment: formToPayment,
	    setFormPristine: setFormPristine,
	    getEditRole: getEditRole
	  };
	};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Constants
	 * @type {object}
	 */
	
	/**
	 * @description
	 * Extension name
	 *
	 * @name Contacts#WidgetName
	 * @type {string}
	 */
	var ExtensionName = exports.ExtensionName = 'ext-bb-initiate-payment-internal-ng';
	
	/**
	 * @description
	 * Payment type identifier
	 *
	 * @name Constants#PaymentType
	 * @type {string}
	 */
	var PaymentType = exports.PaymentType = 'INTERNAL';
	
	/**
	 * @description
	 * Widget recurrence ending enum
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
	 * Widget transfer frequencies enum
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
	 * @description
	 * Minimum ocurrences value by default
	 * @name Constants#ScheduleRepeatValue
	 * @type {Number}
	 */
	var ScheduleRepeatValue = exports.ScheduleRepeatValue = 2;
	
	/**
	 * @description
	 * Array of account type objects with the following properties (all mandatory)
	 *
	 * @property {string} name Translation key of the label that will be displayed to the end user
	 * @property {string} value Denotes type of account. Possible values: CHECKING/SAVING
	 *
	 * @name Constants#AccountTypes
	 * @type {Array}
	 */
	var AccountTypes = exports.AccountTypes = [{
	  name: 'form.account.type.checking',
	  value: 'CHECKING'
	}, {
	  name: 'form.account.type.saving',
	  value: 'SAVING'
	}];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(19);
	
	/**
	 * @name Hooks
	 * @type {Object}
	 */
	exports.default = {
	  /**
	   * @name Hooks#defaultPaymentType
	   * @type {Function}
	   *
	   * @description
	   * Gets the current extension payment type
	   *
	   * @returns {String} Default payment type
	   */
	  defaultPaymentType: function defaultPaymentType() {
	    return _constants.PaymentType;
	  },
	
	  /**
	   * @name Hooks#defaultScheduleRepeat
	   * @type {Function}
	   *
	   * @description
	   * Get the default repeat value of minimum ocurrences
	   *
	   * @returns {Number} Default schedule repeat default value
	   */
	  defaultScheduleRepeat: function defaultScheduleRepeat() {
	    return _constants.ScheduleRepeatValue;
	  }
	};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(17);
	
	exports.default = function (_ref) {
	  var service = _ref.service;
	  return {
	    'bb.event.payment.edit.internal': function bbEventPaymentEditInternal(payment) {
	      service.setEditPayment((0, _helpers.fromModelToForm)(payment));
	      service.updateFromEditChanged(true);
	      service.show();
	    }
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-initiate-payment-internal-ng.js.map