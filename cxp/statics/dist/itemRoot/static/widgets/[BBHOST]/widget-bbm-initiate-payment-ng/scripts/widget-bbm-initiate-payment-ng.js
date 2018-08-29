(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-storage-ng"), require("lib-bb-model-errors"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("model-bb-payment-orders-ng"), require("lib-bb-state-container-ng"), require("lib-bb-extension-intents-ng"), require("lib-bb-extension-helpers-ng"), require("lib-bb-extension-events-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bbm-initiate-payment-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-storage-ng", "lib-bb-model-errors", "lib-bb-event-bus-ng", "lib-bb-widget-extension-ng", "lib-bb-intent-ng", "model-bb-payment-orders-ng", "lib-bb-state-container-ng", "lib-bb-extension-intents-ng", "lib-bb-extension-helpers-ng", "lib-bb-extension-events-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bbm-initiate-payment-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-storage-ng"), require("lib-bb-model-errors"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("model-bb-payment-orders-ng"), require("lib-bb-state-container-ng"), require("lib-bb-extension-intents-ng"), require("lib-bb-extension-helpers-ng"), require("lib-bb-extension-events-ng"));
	else
		root["widget-bbm-initiate-payment-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-storage-ng"], root["lib-bb-model-errors"], root["lib-bb-event-bus-ng"], root["lib-bb-widget-extension-ng"], root["lib-bb-intent-ng"], root["model-bb-payment-orders-ng"], root["lib-bb-state-container-ng"], root["lib-bb-extension-intents-ng"], root["lib-bb-extension-helpers-ng"], root["lib-bb-extension-events-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_142__, __WEBPACK_EXTERNAL_MODULE_146__, __WEBPACK_EXTERNAL_MODULE_148__, __WEBPACK_EXTERNAL_MODULE_193__, __WEBPACK_EXTERNAL_MODULE_194__, __WEBPACK_EXTERNAL_MODULE_195__, __WEBPACK_EXTERNAL_MODULE_196__, __WEBPACK_EXTERNAL_MODULE_203__, __WEBPACK_EXTERNAL_MODULE_204__, __WEBPACK_EXTERNAL_MODULE_248__, __WEBPACK_EXTERNAL_MODULE_249__) {
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

	module.exports = __webpack_require__(247);

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_142__;

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_146__;

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_148__;

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_193__;

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_194__;

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_195__;

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_196__;

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_203__;

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_204__;

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(142);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(193);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbIntentNg = __webpack_require__(195);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbWidgetExtensionNg = __webpack_require__(194);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbStateContainerNg = __webpack_require__(203);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _modelBbPaymentOrdersNg = __webpack_require__(196);
	
	var _modelBbPaymentOrdersNg2 = _interopRequireDefault(_modelBbPaymentOrdersNg);
	
	var _libBbStorageNg = __webpack_require__(146);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _libBbExtensionHelpersNg = __webpack_require__(248);
	
	var _libBbExtensionHelpersNg2 = _interopRequireDefault(_libBbExtensionHelpersNg);
	
	var _libBbExtensionEventsNg = __webpack_require__(249);
	
	var _libBbExtensionEventsNg2 = _interopRequireDefault(_libBbExtensionEventsNg);
	
	var _libBbExtensionIntentsNg = __webpack_require__(204);
	
	var _libBbExtensionIntentsNg2 = _interopRequireDefault(_libBbExtensionIntentsNg);
	
	var _constants = __webpack_require__(250);
	
	var _form = __webpack_require__(251);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _events = __webpack_require__(252);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _service = __webpack_require__(253);
	
	var _service2 = _interopRequireDefault(_service);
	
	var _viewModel = __webpack_require__(254);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	var _defaultHooks = __webpack_require__(262);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'widget-bbm-initiate-payment-ng'; /**
	                                                   * @module widget-bbm-initiate-payment-ng
	                                                   *
	                                                   * @description
	                                                   * Mobile Initiate Payment widget.
	                                                   *
	                                                   * @example
	                                                   *  <!-- Initiate Payment Form Extension -->
	                                                   *  <div ng-controller="FormController as $ctrl">
	                                                   *    <form name="initiate-payment-form">
	                                                   *      <input
	                                                   *        type="text"
	                                                   *        name="description"
	                                                   *        value="$ctrl.state.payment.data.description"/>
	                                                   *    </form>
	                                                   *  </div>
	                                                   */
	
	var eventServiceKey = moduleKey + ':events';
	var hooksKey = moduleKey + ':hooks';
	var serviceKey = moduleKey + ':service';
	var viewModelKey = moduleKey + ':viewModel';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [
	// dependencies to inject
	_libBbExtensionHelpersNg2.default, _libBbExtensionEventsNg2.default, _libBbExtensionIntentsNg2.default, _libBbStorageNg2.default, _libBbEventBusNg2.default, _libBbIntentNg2.default, _modelBbPaymentOrdersNg2.default, _libBbStateContainerNg2.default, _libBbWidgetNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).factory(viewModelKey, [
	// dependencies to inject
	_libBbStateContainerNg.bbStateContainerKey, _libBbStorageNg.bbStorageServiceKey, hooksKey,
	
	// into
	_viewModel2.default]).factory(eventServiceKey, [
	// dependencies to inject
	_libBbEventBusNg.eventBusKey,
	
	// into
	_events2.default]).factory(serviceKey, [
	// dependencies to inject
	_libBbWidgetNg.widgetKey, _modelBbPaymentOrdersNg.modelPaymentOrdersKey, viewModelKey, _libBbStateContainerNg.bbStateContainerKey, hooksKey, eventServiceKey, _libBbEventBusNg.eventBusKey, '$q',
	
	// into
	_service2.default]).factory(_libBbExtensionHelpersNg.extensionHelpersContextKey, [
	// dependencies to inject
	_libBbIntentNg.bbIntentKey, serviceKey, _libBbEventBusNg.eventBusKey,
	
	// into
	function (bbIntent, service, bus) {
	  return { bbIntent: bbIntent, service: service, bus: bus };
	}]).factory(_libBbExtensionEventsNg.extensionEventsContextKey, [
	// dependencies to inject
	_libBbIntentNg.bbIntentKey, _libBbStateContainerNg.bbStateContainerKey, serviceKey, _libBbEventBusNg.eventBusKey,
	
	// into
	function (bbIntent, stateContainer, service, bus) {
	  return {
	    bbIntent: bbIntent,
	    stateContainer: stateContainer,
	    service: service,
	    bus: bus
	  };
	}]).factory(_libBbExtensionIntentsNg.extensionIntentsContextKey, [
	// dependencies to inject
	serviceKey,
	
	// into
	function (service) {
	  return { service: service };
	}]).controller('FormController', [
	// dependencies to inject
	serviceKey, eventServiceKey, _libBbEventBusNg.eventBusKey,
	
	// into
	_form2.default]).run([
	// dependencies to inject
	viewModelKey, _libBbIntentNg.bbIntentKey, _libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey,
	
	// into
	function (viewModel, bbIntents, eventBus, widget) {
	  viewModel.init();
	
	  bbIntents.init().then(function () {
	    // This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
	    // and will be removed with the update to widget collection 3 (WC3)
	    eventBus.publish(_constants.Event.CXP_ITEM_LOADED, {
	      id: widget.getId()
	    });
	
	    eventBus.publish(_constants.Event.BB_ITEM_LOADED, {
	      id: widget.getId()
	    });
	  });
	}]).name;
	
	/**
	 * @typedef {Object} AccountView
	 * @property {string} id The internal account identifier
	 * @property {string} name The account's name, suitable for display to users
	 * @property {?string} identifier The identifier of the account from the user's perspective
	 * @property {?string} amount The most important associated value to be displayed
	 * @property {?string} currency Account currency
	 * @property {?boolean} external Whether the account is external
	 */

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_248__;

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_249__;

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var AccountType = exports.AccountType = {
	  DEBIT: 'debit',
	  CREDIT: 'credit'
	};
	
	/**
	 * Pubsub events
	 * @type {Object}
	 */
	var Event = exports.Event = {
	  CXP_ITEM_LOADED: 'cxp.item.loaded',
	  BB_ITEM_LOADED: 'bb.item.loaded',
	
	  CONTACT_CREATE_START: 'bb.event.contact.create.start',
	  CONTACT_CREATE_DONE: 'bb.event.contact.create.done',
	  CONTACT_CREATE_FAILED: 'bb.event.contact.create.failed',
	  CONTACT_DELETE_DONE: 'bb.event.contact.delete.done',
	  CONTACT_UPDATE_DONE: 'bb.event.contact.update.done',
	
	  BENEFICIARIES_LOAD_FAILED: 'bb.event.payment.beneficiaries.load.failed',
	  DEBIT_ACCOUNTS_LOAD_FAILED: 'bb.event.payment.debitAccounts.load.failed',
	
	  PAYMENT_DONE: 'bb.event.payment.done',
	  PAYMENT_FAILED: 'bb.event.payment.failed',
	  PAYMENT_START: 'bb.event.payment.started',
	
	  SELECT_ACCOUNT_LOAD_START: 'bb.event.payment.selectAccount.load.start',
	  SELECT_ACCOUNT_LOAD_DONE: 'bb.event.payment.selectAccount.load.done',
	  SELECT_ACCOUNT_FAILED: 'bb.event.payment.selectAccount.failed',
	
	  SHOW_PIN: 'bb.action.pin.show',
	  PIN_CONFIRMATION_SUCCESSFUL: 'bb.event.pin.confirmation.success'
	};
	
	/**
	 * Payment mode. Denotes whether payment will be single or will be recurring.
	 * @type {Object}
	 */
	var PaymentMode = exports.PaymentMode = {
	  SINGLE: 'SINGLE',
	  RECURRING: 'RECURRING'
	};
	
	/**
	 * Options when to end a recurring payment.
	 * @type {Object}
	 */
	var RecurrenceEnding = exports.RecurrenceEnding = {
	  NEVER: 'NEVER',
	  ON: 'ON',
	  AFTER: 'AFTER'
	};
	
	/**
	 * Storage keys
	 * @type {Object}
	 */
	var StorageKey = exports.StorageKey = {
	  PAYMENT: 'bb.payment.payment'
	};
	
	/**
	 * Transfer frequency. Denotes how frequently the transfer should be made.
	 * @type {Object}
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
	 * Widget preferences enum
	 * @name Preference
	 * @type {object}
	 */
	var Preference = exports.Preference = {
	  REVIEW_STEP: 'bb.payment.review.step',
	  SHOW_PIN: 'bb.payment.show.pin',
	  URGENT: 'bb.payment.urgent',
	  RECURRING: 'bb.payment.recurring',
	  DESCRIPTION_REGEX: 'bb.payment.description.REGEX'
	};

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = FormController;
	
	var _constants = __webpack_require__(250);
	
	function FormController(service, events, bus) {
	  /**
	   * @name FormController
	   * @ngkey FormController
	   *
	   * @description
	   * Initiate payment widget form controller.
	   * Loads debit accounts and beneficiaries on start.
	   * Provides API to make a payment.
	   *
	   * @type {Object}
	   */
	  var ctrl = this;
	
	  /**
	   * @name bindEvents
	   * @type {function}
	   * @description
	   * Subscribes to events.
	   * @inner
	   */
	  var bindEvents = function bindEvents() {
	    bus.subscribe(_constants.Event.CONTACT_CREATE_DONE, function () {
	      service.updateBeneficiaries();
	    });
	
	    bus.subscribe(_constants.Event.CONTACT_UPDATE_DONE, function () {
	      service.updateBeneficiaries();
	    });
	
	    bus.subscribe(_constants.Event.CONTACT_DELETE_DONE, function () {
	      service.updateBeneficiaries();
	    });
	  };
	
	  /**
	   * @name FormController#$onInit
	   * @type {function}
	   * @description
	   * AngularJS Lifecycle hook used to initialize the controller.
	   * Initializes payment form.
	   */
	  var $onInit = function $onInit() {
	    service.initPaymentForm();
	    bindEvents();
	  };
	
	  Object.assign(ctrl, {
	    $onInit: $onInit
	  });
	}

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(250);
	
	exports.default = function (bus) {
	  return {
	    beforeContactCreate: function beforeContactCreate() {
	      bus.publish(_constants.Event.CONTACT_CREATE_START);
	    },
	    afterContactCreateSuccess: function afterContactCreateSuccess() {
	      bus.publish(_constants.Event.CONTACT_CREATE_DONE);
	    },
	    afterContactCreateError: function afterContactCreateError(error) {
	      bus.publish(_constants.Event.CONTACT_CREATE_FAILED, {
	        error: error
	      });
	    },
	    afterBeneficiariesLoadError: function afterBeneficiariesLoadError(error) {
	      bus.publish(_constants.Event.BENEFICIARIES_LOAD_FAILED, {
	        error: error
	      });
	    },
	    afterDebitAccountsLoadError: function afterDebitAccountsLoadError(error) {
	      bus.publish(_constants.Event.DEBIT_ACCOUNTS_LOAD_FAILED, {
	        error: error
	      });
	    },
	    beforePayment: function beforePayment() {
	      bus.publish(_constants.Event.PAYMENT_START);
	    },
	    afterPaymentSuccess: function afterPaymentSuccess() {
	      bus.publish(_constants.Event.PAYMENT_DONE);
	    },
	    afterPaymentError: function afterPaymentError(error) {
	      bus.publish(_constants.Event.PAYMENT_FAILED, {
	        error: error
	      });
	    },
	    beforeOpenSelectAccount: function beforeOpenSelectAccount(type) {
	      bus.publish(_constants.Event.SELECT_ACCOUNT_LOAD_START, {
	        type: type
	      });
	    },
	    afterOpenSelectAccountSuccess: function afterOpenSelectAccountSuccess(type) {
	      bus.publish(_constants.Event.SELECT_ACCOUNT_LOAD_DONE, {
	        type: type
	      });
	    },
	    afterOpenSelectAccountError: function afterOpenSelectAccountError(type, error) {
	      bus.publish(_constants.Event.SELECT_ACCOUNT_FAILED, {
	        error: error,
	        type: type
	      });
	    }
	  };
	};

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _constants = __webpack_require__(250);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * @name InitiatePaymentService
	                                                                                                                                                                                                     * @type {Object}
	                                                                                                                                                                                                     * @ngkey widget-bbm-initiate-payment-ng:service
	                                                                                                                                                                                                     * @description
	                                                                                                                                                                                                     * The service encapsulates the core functionality of the Initiate Payment Widget.
	                                                                                                                                                                                                     */
	
	exports.default = function (widget, model, viewModel, stateContainer, hooks, events, bus, Promise) {
	  /**
	   * @name debitAccountsPromise
	   * @type {Promise}
	   * @description
	   * The promise of the request to load debit accounts.
	   * @inner
	   */
	  var debitAccountsPromise = void 0;
	
	  /**
	   * @name beneficiariesPromise
	   * @type {Promise}
	   * @description
	   * The promise of the request to load beneficiaries.
	   * @inner
	   */
	  var beneficiariesPromise = void 0;
	
	  var preferences = {
	    urgent: widget.getBooleanPreference(_constants.Preference.URGENT),
	    recurring: widget.getBooleanPreference(_constants.Preference.RECURRING),
	    showPin: widget.getBooleanPreference(_constants.Preference.SHOW_PIN),
	    reviewStep: widget.getBooleanPreference(_constants.Preference.REVIEW_STEP),
	    descriptionRegex: widget.getStringPreference(_constants.Preference.DESCRIPTION_REGEX)
	  };
	
	  /**
	   * @name InitiatePaymentService#getPreferences
	   * @type {function}
	   * @description
	   * Returns widget preferences.
	   * @returns {Object}
	   */
	  var getPreferences = function getPreferences() {
	    return preferences;
	  };
	
	  var formatDate = function formatDate(dateArg) {
	    var date = new Date(dateArg);
	
	    var month = String(date.getMonth() + 1);
	    var day = String(date.getDate());
	    var year = String(date.getFullYear());
	
	    return year + '-' + month.padStart(2, '0') + '-' + day.padStart(2, '0');
	  };
	
	  /**
	   * @name isSameAccount
	   * @type {function}
	   * @description
	   * Checks if the given accountA is the same account as the given accountB.
	   * @param {AccountView} accountA
	   * @param {AccountView} accountB
	   * @returns {boolean}
	   * @inner
	   */
	  var isSameAccount = function isSameAccount(accountA, accountB) {
	    return accountA.identifier === accountB.identifier && accountA.identifier && accountB.identifier;
	  };
	
	  /**
	   * @name getPayment
	   * @type {function}
	   * @description
	   * Returns the payment object.
	   * @returns {Payment}
	   * @inner
	   */
	  var getPayment = stateContainer.createSelector(function (state) {
	    return state.payment.data;
	  });
	
	  /**
	   * @name getSelectedBeneficiary
	   * @type {function}
	   * @description
	   * Returns the selected beneficiary of the payment.
	   * @returns {Beneficiary}
	   * @inner
	   */
	  var getSelectedBeneficiary = function getSelectedBeneficiary() {
	    return getPayment() ? getPayment().beneficiary : null;
	  };
	
	  /**
	   * @name getBeneficiaries
	   * @type {function}
	   * @description
	   * Returns the list of beneficiaries.
	   * @returns {*}
	   * @inner
	   */
	  var getBeneficiaries = stateContainer.createSelector(function (state) {
	    return state.beneficiaries.data;
	  });
	
	  /**
	   * @name getContacts
	   * @type {function}
	   * @description
	   * Returns list of contacts.
	   * @returns {Array.<AccountView>}
	   * @inner
	   */
	  var getContacts = stateContainer.createSelector(function (state) {
	    return state.contacts;
	  });
	
	  /**
	   * @name getCurrencies
	   * @type {function}
	   * @description
	   * Returns the list of all currencies.
	   * @returns {Array.<Currency>}
	   * @inner
	   */
	  var getCurrencies = stateContainer.createSelector(function (state) {
	    return state.currencies.data;
	  });
	
	  /**
	   * @name getDebitAccounts
	   * @type {function}
	   * @description
	   * Returns the list of debit accounts.
	   * @returns {*}
	   * @inner
	   */
	  var getDebitAccounts = stateContainer.createSelector(function (state) {
	    return state.debitAccounts.data;
	  });
	
	  /**
	   * @name getSaveContact
	   * @type {function}
	   * @description
	   * Returns the value of the "Save contact" flag.
	   * @returns {boolean}
	   * @inner
	   */
	  var getSaveContact = stateContainer.createSelector(function () {
	    return getPayment() ? getPayment().saveContact : false;
	  });
	
	  /**
	   * @name getSelectedDebitAccount
	   * @type {function}
	   * @description
	   * Returns the selected debit account of the payment.
	   * @returns {AccountView}
	   * @inner
	   */
	  var getSelectedDebitAccount = stateContainer.createSelector(function () {
	    return getPayment() ? getPayment().debitAccount : null;
	  });
	
	  /**
	   * @name getSelectedBeneficiaryAccount
	   * @type {function}
	   * @description
	   * Returns the selected beneficiary account of the payment.
	   * @returns {(AccountView|null)}
	   * @inner
	   */
	  var getSelectedBeneficiaryAccount = function getSelectedBeneficiaryAccount() {
	    var beneficiary = getSelectedBeneficiary();
	    var beneficiaries = getBeneficiaries();
	
	    if (!beneficiary || !beneficiaries) {
	      return null;
	    }
	
	    var beneficiaryAccount = beneficiaries.creditAccounts.find(function (item) {
	      return isSameAccount(item, beneficiary);
	    });
	
	    return beneficiaryAccount || null;
	  };
	
	  /**
	   * @name isBeneficiaryComplete
	   * @type {function}
	   * @description
	   * Checks if all the required fields for a beneficiary have been filled.
	   * @returns {boolean}
	   * @inner
	   */
	  var isBeneficiaryComplete = function isBeneficiaryComplete() {
	    var beneficiary = getSelectedBeneficiary();
	    return Boolean(beneficiary && beneficiary.name && beneficiary.identifier);
	  };
	
	  /**
	   * @name isBeneficiaryExternal
	   * @type {function}
	   * @description
	   * Checks if the beneficiary is external.
	   * @returns {boolean}
	   * @inner
	   */
	  var isBeneficiaryExternal = function isBeneficiaryExternal() {
	    return getSelectedBeneficiaryAccount() === null;
	  };
	
	  /**
	   * @name isBeneficiaryNew
	   * @type {function}
	   * @description
	   * Checks if the beneficiary is a new one meaning that it is not presented
	   * in the list of known beneficiaries.
	   * @returns {boolean}
	   * @inner
	   */
	  var isBeneficiaryNew = function isBeneficiaryNew() {
	    var beneficiary = getSelectedBeneficiary();
	    var beneficiaries = getBeneficiaries();
	
	    if (beneficiary && beneficiaries) {
	      var contacts = beneficiaries.contacts,
	          creditAccounts = beneficiaries.creditAccounts;
	
	
	      var allBeneficiaries = [].concat(_toConsumableArray(creditAccounts), _toConsumableArray(contacts));
	
	      var isBeneficiaryExisting = allBeneficiaries.some(function (item) {
	        return isSameAccount(item, beneficiary);
	      });
	
	      return !isBeneficiaryExisting;
	    }
	
	    return false;
	  };
	
	  /**
	   * @name isRecurring
	   * @type {function}
	   * @description
	   * Checks if the given schedule is a recurring one.
	   * @param {Schedule} schedule
	   * @returns {boolean}
	   * @inner
	   */
	  var isRecurring = function isRecurring(schedule) {
	    return schedule.transferFrequency !== _constants.TransferFrequency.ONCE;
	  };
	
	  /**
	   * @name getContactIdentification
	   * @type {function}
	   * @description
	   * Returns the identification of the given contact.
	   * @returns {ContactIdentification}
	   * @inner
	   */
	  var getContactIdentification = function getContactIdentification() {
	    var beneficiary = getSelectedBeneficiary();
	    return {
	      name: beneficiary ? beneficiary.name : null,
	      identification: {
	        identification: beneficiary ? beneficiary.identifier : null,
	        schemeName: 'IBAN'
	      }
	    };
	  };
	
	  /**
	   * @name getCreditAccountIdentification
	   * @type {function}
	   * @description
	   * Returns the identification of the given credit account.
	   * @returns {CreditAccountIdentification}
	   * @inner
	   */
	  var getCreditAccountIdentification = function getCreditAccountIdentification() {
	    var creditAccount = getSelectedBeneficiaryAccount();
	    return {
	      identification: {
	        identification: creditAccount ? creditAccount.id : null,
	        schemeName: 'ID'
	      }
	    };
	  };
	
	  /**
	   * @name getBeneficiaryIdentification
	   * @type {function}
	   * @description
	   * Returns the creditor account of the given beneficiary.
	   * @returns {ContactIdentification|CreditAccountIdentification}
	   * @inner
	   */
	  var getBeneficiaryIdentification = function getBeneficiaryIdentification() {
	    return isBeneficiaryExternal() ? getContactIdentification() : getCreditAccountIdentification();
	  };
	
	  /**
	   * @name getScheduleRecurringDay
	   * @type {function}
	   * @description
	   * Returns a day of a recurring payment for the given schedule.
	   * @param {Schedule} schedule
	   * @returns {number}
	   * @inner
	   */
	  var getScheduleRecurringDay = function getScheduleRecurringDay(schedule) {
	    var startDate = schedule.startDate,
	        transferFrequency = schedule.transferFrequency;
	
	    var date = new Date(startDate);
	
	    if (transferFrequency === _constants.TransferFrequency.WEEKLY) {
	      var dayOfWeek = date.getDay();
	      return dayOfWeek === 0 ? 7 : dayOfWeek;
	    }
	
	    if (transferFrequency === _constants.TransferFrequency.MONTHLY) {
	      return date.getDate();
	    }
	
	    if (transferFrequency === _constants.TransferFrequency.YEARLY) {
	      return date.getMonth() + 1;
	    }
	
	    return 1;
	  };
	
	  /**
	   * @name getSchedulePayload
	   * @type {function}
	   * @description
	   * Creates a payload for the payment schedule.
	   * @param {Schedule} schedule
	   * @returns {SchedulePayload}
	   * @inner
	   */
	  var getSchedulePayload = function getSchedulePayload(schedule) {
	    var end = schedule.end,
	        every = schedule.every,
	        repeat = schedule.repeat,
	        transferFrequency = schedule.transferFrequency;
	
	    var on = getScheduleRecurringDay(schedule);
	
	    var startDate = formatDate(schedule.startDate);
	    var endDate = formatDate(schedule.endDate);
	
	    var schedulePayload = {
	      every: every,
	      on: on,
	      startDate: startDate,
	      transferFrequency: transferFrequency
	    };
	
	    if (end === _constants.RecurrenceEnding.ON) {
	      Object.assign(schedulePayload, { endDate: endDate });
	    }
	
	    if (end === _constants.RecurrenceEnding.AFTER) {
	      Object.assign(schedulePayload, { repeat: repeat });
	    }
	
	    return schedulePayload;
	  };
	
	  /**
	   * @name getPaymentPayload
	   * @type {function}
	   * @description
	   * Creates a payload for making a payment.
	   * @param {Payment} payment
	   * @returns {PaymentPayload}
	   * @inner
	   */
	  var getPaymentPayload = function getPaymentPayload(payment) {
	    var _payment$debitAccount = payment.debitAccount,
	        debitAccount = _payment$debitAccount === undefined ? {} : _payment$debitAccount,
	        beneficiary = payment.beneficiary,
	        schedule = payment.schedule,
	        amount = payment.amount,
	        additions = payment.additions;
	
	
	    var creditorAccount = getBeneficiaryIdentification();
	    var requestedExecutionDate = formatDate(schedule.startDate);
	
	    var payload = {
	      debtorAccount: {
	        arrangementId: debitAccount.id,
	        identification: {
	          schemeName: 'ID',
	          identification: debitAccount.id
	        },
	        name: debitAccount.name
	      },
	      requestedExecutionDate: requestedExecutionDate,
	      paymentMode: isRecurring(schedule) ? _constants.PaymentMode.RECURRING : _constants.PaymentMode.SINGLE,
	      creditTransferTransactionInformation: [{
	        instructedAmount: {
	          amount: amount.value,
	          currencyCode: amount.currency
	        },
	        creditor: {
	          name: beneficiary.name
	        },
	        creditorAccount: creditorAccount
	      }]
	    };
	
	    if (payment.urgent) {
	      Object.assign(payload, { instructionPriority: 'HIGH' });
	    }
	
	    if (payment.description) {
	      Object.assign(payload.creditTransferTransactionInformation[0], {
	        remittanceInformation: payment.description
	      });
	    }
	
	    if (isRecurring(schedule)) {
	      Object.assign(payload, {
	        schedule: getSchedulePayload(schedule)
	      });
	    }
	
	    if (additions) {
	      Object.assign(payload, { additions: additions });
	    }
	
	    return hooks.processPaymentPayload(payload, payment);
	  };
	
	  /**
	   * @name getContactPayload
	   * @type {function}
	   * @description
	   * Creates a payload for creating a contact.
	   * @param {AccountView} contact
	   * @returns {ContactCreatePayload}
	   * @inner
	   */
	  var getContactPayload = function getContactPayload(contact) {
	    return {
	      accounts: [{
	        IBAN: contact.identifier
	      }],
	      name: contact.name
	    };
	  };
	
	  /**
	   * @name loadDebitAccounts
	   * @type {function}
	   * @description
	   * Loads debit accounts.
	   * @returns {Promise.<Array>}
	   * @inner
	   */
	  var loadDebitAccounts = function loadDebitAccounts() {
	    viewModel.debitAccounts.beforeDebitAccountsLoad();
	
	    debitAccountsPromise = model.getAccountsFrom().then(function (data) {
	      viewModel.debitAccounts.afterDebitAccountsLoadSuccess(data);
	      return getDebitAccounts();
	    }).catch(function (error) {
	      viewModel.debitAccounts.afterDebitAccountsLoadError(error);
	      events.afterDebitAccountsLoadError(error);
	
	      throw error;
	    });
	
	    return debitAccountsPromise;
	  };
	
	  /**
	   * @name showPin
	   * @type {function}
	   * @description
	   * Shows the PIN screen.
	   * @fires bb.payment.show.pin
	   * @inner
	   */
	  var showPin = function showPin() {
	    return bus.publish(_constants.Event.SHOW_PIN);
	  };
	
	  /**
	   * @name authorizePayment
	   * @type {function}
	   * @description
	   * Subscribes to the event that will be fired once the pin is successful
	   * and calls the showPin function which will show the pin verification screen.
	   * @inner
	   */
	  var authorizePayment = function authorizePayment() {
	    return new Promise(function (resolve) {
	      bus.subscribe(_constants.Event.PIN_CONFIRMATION_SUCCESSFUL, resolve);
	
	      showPin();
	    });
	  };
	
	  /**
	   * @name authorizePaymentIfNeeded
	   * @type {function}
	   * @description
	   * Checks whether the payment should be authorized via pin code and
	   * calls the pin code screen if needed or resolves immediately so the payment
	   * can continue.
	   * @returns {Promise}
	   * @inner
	   */
	  var authorizePaymentIfNeeded = function authorizePaymentIfNeeded() {
	    return preferences.showPin ? authorizePayment() : Promise.resolve();
	  };
	
	  /**
	   * @name saveContact
	   * @type {function}
	   * @description
	   * Saves the given contact to the address book.
	   * @param {AccountView} contact
	   * @inner
	   */
	  var saveContact = function saveContact(contact) {
	    var payload = getContactPayload(contact);
	
	    events.beforeContactCreate();
	
	    return model.createContact(payload).then(function () {
	      events.afterContactCreateSuccess();
	    }).catch(function (error) {
	      events.afterContactCreateError(error);
	    });
	  };
	
	  /**
	   * @name isExternalTransferAllowed
	   * @type {function}
	   * @description
	   * Checks whether external transfers are allowed for the given debitAccount.
	   * @param {AccountView} debitAccount
	   * @returns {boolean}
	   * @inner
	   */
	  var isExternalTransferAllowed = function isExternalTransferAllowed(debitAccount) {
	    return !debitAccount || !debitAccount.id || debitAccount.externalTransferAllowed;
	  };
	
	  /**
	   * @name loadContacts
	   * @description
	   * Loads contacts.
	   * @type {function}
	   * @returns {Promise.<Array>}
	   * @inner
	   */
	  var loadContacts = function loadContacts() {
	    if (getContacts()) {
	      return Promise.resolve(getContacts());
	    }
	
	    return model.getExternals().then(function (contacts) {
	      viewModel.contacts.afterContactsLoadSuccess(contacts);
	      return contacts;
	    });
	  };
	
	  /**
	   * @name loadCreditAccounts
	   * @type {function}
	   * @description
	   * Loads the list of credit accounts for the given debit account.
	   * @param {AccountView} debitAccount
	   * @returns {Promise.<Array>}
	   * @inner
	   */
	  var loadCreditAccounts = function loadCreditAccounts(debitAccount) {
	    return model.getAccountsTo(debitAccount ? debitAccount.id : null);
	  };
	
	  /**
	   * @name loadCurrencies
	   * @type {function}
	   * @description
	   * Loads currencies.
	   * @returns {Promise.<Array.Currency>}
	   * @inner
	   */
	  var loadCurrencies = function loadCurrencies() {
	    viewModel.currencies.beforeCurrenciesLoad();
	
	    return model.getCurrencies().then(function (currencies) {
	      viewModel.currencies.afterCurrenciesLoadSuccess(currencies);
	      viewModel.payment.updatePaymentCurrency();
	    }).catch(function (error) {
	      viewModel.currencies.afterCurrenciesLoadError(error);
	      throw error;
	    });
	  };
	
	  /**
	   * @name loadBeneficiaries
	   * @type {function}
	   * @description
	   * Loads the list of beneficiaries.
	   * @returns {Promise.<Array>}
	   * @inner
	   */
	  var loadBeneficiaries = function loadBeneficiaries() {
	    var debitAccount = getSelectedDebitAccount();
	
	    var requests = [loadCreditAccounts(debitAccount), isExternalTransferAllowed(debitAccount) ? loadContacts() : []];
	
	    viewModel.beneficiaries.beforeBeneficiariesLoad();
	
	    beneficiariesPromise = Promise.all(requests).then(function (_ref) {
	      var _ref2 = _slicedToArray(_ref, 2),
	          creditAccounts = _ref2[0],
	          contacts = _ref2[1];
	
	      viewModel.beneficiaries.afterBeneficiariesLoadSuccess({
	        creditAccounts: creditAccounts,
	        contacts: contacts
	      });
	      return getBeneficiaries();
	    }).catch(function (error) {
	      viewModel.beneficiaries.afterBeneficiariesLoadError(error);
	      events.afterBeneficiariesLoadError(error);
	
	      throw error;
	    });
	
	    return beneficiariesPromise;
	  };
	
	  /**
	   * @name InitiatePaymentService#canSaveContact
	   * @type {function}
	   * @description
	   * Checks whether the beneficiary can be saved to the address book as a new contact.
	   * @returns {boolean}
	   */
	  var canSaveContact = function canSaveContact() {
	    return isBeneficiaryComplete() && isBeneficiaryNew();
	  };
	
	  /**
	   * @name InitiatePaymentService#isUrgentPaymentAllowed
	   * @type {function}
	   * @description
	   * Checks if an urgent payment is allowed.
	   * @param {Payment} payment
	   * @returns {boolean}
	   */
	  var isUrgentPaymentAllowed = function isUrgentPaymentAllowed(payment) {
	    if (!payment) {
	      return false;
	    }
	
	    var isAllowedByAccount = Boolean(payment.debitAccount && payment.debitAccount.urgentTransferAllowed);
	
	    var currentDate = new Date();
	    var startDate = new Date(payment.schedule.startDate);
	    var isNotFuture = currentDate >= startDate;
	
	    return isAllowedByAccount && !isRecurring(payment.schedule) && isNotFuture;
	  };
	
	  /**
	   * @name InitiatePaymentService#makePayment
	   * @type {function}
	   * @description
	   * Makes a payment using the current state to get a payload for the request.
	   * @fires "bb.event.payment.done"
	   * @fires "bb.event.payment.failed"
	   * @fires "bb.event.payment.started"
	   * @returns {Promise}
	   */
	  var makePayment = function makePayment() {
	    var payment = getPayment();
	    var payload = getPaymentPayload(payment);
	
	    viewModel.payment.beforePayment();
	    events.beforePayment();
	
	    return model.createPaymentOrder(payload).then(function () {
	      viewModel.payment.afterPaymentSuccess();
	      events.afterPaymentSuccess();
	    }).catch(function (error) {
	      viewModel.payment.afterPaymentError(error);
	      events.afterPaymentError(error);
	
	      throw error;
	    });
	  };
	
	  /**
	   * @name InitiatePaymentService#makePaymentWithAuthorization
	   * @type {function}
	   * @description
	   * Checks whether the payment should be authorized via pin code and
	   * calls the pin code screen if needed.
	   * @returns {Promise}
	   */
	  var makePaymentWithAuthorization = function makePaymentWithAuthorization() {
	    return authorizePaymentIfNeeded().then(function () {
	      return makePayment();
	    });
	  };
	
	  /**
	   * @name resetBeneficiaryIfNeeded
	   * @type {function}
	   * @description
	   * Resets the payment beneficiary, if it is not valid for the currently selected
	   * debit account.
	   * @inner
	   */
	  var resetBeneficiaryIfNeeded = function resetBeneficiaryIfNeeded() {
	    var beneficiary = getSelectedBeneficiary();
	    var debitAccount = getSelectedDebitAccount();
	
	    if (beneficiary && debitAccount) {
	      var isBeneficiaryInvalid = isSameAccount(beneficiary, debitAccount) || isBeneficiaryExternal() && !isExternalTransferAllowed(debitAccount);
	
	      if (isBeneficiaryInvalid) {
	        viewModel.payment.resetPaymentBeneficiary();
	      }
	    }
	  };
	
	  /**
	   * @name InitiatePaymentService#saveContactIfNeeded
	   * @type {function}
	   * @description
	   * Saves the selected beneficiary to the address book if needed.
	   */
	  var saveContactIfNeeded = function saveContactIfNeeded() {
	    if (getSaveContact() && canSaveContact()) {
	      saveContact(getSelectedBeneficiary());
	    }
	  };
	
	  /**
	   * @name InitiatePaymentService#prepareBeneficiaries
	   * @type {function}
	   * @description
	   * Prepares the list of beneficiaries.
	   * @fires "bb.event.payment.selectAccount.load.start"
	   * @fires "bb.event.payment.selectAccount.load.done"
	   * @fires "bb.event.payment.selectAccount.failed"
	   * @returns {Promise}
	   */
	  var prepareBeneficiaries = function prepareBeneficiaries() {
	    var type = _constants.AccountType.CREDIT;
	
	    if (!beneficiariesPromise) {
	      return Promise.reject('Payment form must be initialized');
	    }
	
	    events.beforeOpenSelectAccount(type);
	
	    return Promise.resolve(beneficiariesPromise).then(function () {
	      events.afterOpenSelectAccountSuccess(type);
	    }).catch(function (error) {
	      events.afterOpenSelectAccountError(type, error);
	      throw error;
	    });
	  };
	
	  /**
	   * @name InitiatePaymentService#prepareDebitAccounts
	   * @type {function}
	   * @description
	   * Prepares the list of debit accounts.
	   * @fires "bb.event.payment.selectAccount.load.start"
	   * @fires "bb.event.payment.selectAccount.load.done"
	   * @fires "bb.event.payment.selectAccount.failed"
	   * @returns {Promise}
	   */
	  var prepareDebitAccounts = function prepareDebitAccounts() {
	    var type = _constants.AccountType.DEBIT;
	
	    if (!debitAccountsPromise) {
	      return Promise.reject('Payment form must be initialized');
	    }
	
	    events.beforeOpenSelectAccount(type);
	
	    return Promise.resolve(debitAccountsPromise).then(function () {
	      events.afterOpenSelectAccountSuccess(type);
	    }).catch(function (error) {
	      events.afterOpenSelectAccountError(type, error);
	      throw error;
	    });
	  };
	
	  /**
	   * @name InitiatePaymentService#setBeneficiary
	   * @type {function}
	   * @description
	   * Handles the intent to change the selected beneficiary.
	   * @param {AccountView} beneficiary
	   */
	  var setBeneficiary = function setBeneficiary(beneficiary) {
	    viewModel.payment.setPaymentBeneficiary(beneficiary);
	  };
	
	  /**
	   * @name InitiatePaymentService#setDebitAccount
	   * @type {function}
	   * @description
	   * Handles the intent to change the selected debit account.
	   * @param {AccountView} account
	   */
	  var setDebitAccount = function setDebitAccount(account) {
	    viewModel.payment.setPaymentDebitAccount(account);
	    viewModel.payment.updatePaymentCurrency();
	
	    loadBeneficiaries();
	    resetBeneficiaryIfNeeded();
	  };
	
	  /**
	   * @name InitiatePaymentService#setPayment
	   * @type {function}
	   * @description
	   * Updates the payment state with the given payment object.
	   * @param {Object} payment
	   */
	  var setPayment = function setPayment(payment) {
	    viewModel.payment.setPayment(payment);
	  };
	
	  /**
	   * @name InitiatePaymentService#setSaveContact
	   * @type {function}
	   * @description
	   * Updates state of the "Save contact" flag.
	   * @param {boolean} saveContactValue
	   */
	  var setSaveContact = function setSaveContact(saveContactValue) {
	    viewModel.payment.setSaveContact(saveContactValue);
	  };
	
	  /**
	   * @name InitiatePaymentService#setSchedule
	   * @type {function}
	   * @description
	   * Updates state of the payment schedule.
	   * @param {Object} schedule
	   */
	  var setSchedule = function setSchedule(schedule) {
	    viewModel.payment.setSchedule(schedule);
	  };
	
	  /**
	   * @name InitiatePaymentService#setUrgentPayment
	   * @type {function}
	   * @description
	   * Updates state of the "urgent" flag.
	   * @param {boolean} urgent
	   */
	  var setUrgentPayment = function setUrgentPayment(urgent) {
	    viewModel.payment.setPaymentUrgent(urgent);
	  };
	
	  /**
	   * @name InitiatePaymentService#updateBeneficiaries
	   * @type {function}
	   * @description
	   * Reloads beneficiaries.
	   * @returns {Promise}
	   */
	  var updateBeneficiaries = function updateBeneficiaries() {
	    // Delete cached contacts in order to force a request to the server
	    viewModel.contacts.resetContacts();
	    return loadBeneficiaries();
	  };
	
	  /**
	   * @name initPaymentData
	   * @type {function}
	   * @description
	   * Initializes the payment state.
	   * @param {boolean} doReset
	   * @inner
	   */
	  var initPaymentData = function initPaymentData(doReset) {
	    if (!getPayment() || doReset) {
	      viewModel.payment.resetPayment();
	    }
	  };
	
	  /**
	   * @name initBeneficiaries
	   * @type {function}
	   * @description
	   * Initializes the list of beneficiaries.
	   * @returns {Promise}
	   * @inner
	   */
	  var initBeneficiaries = function initBeneficiaries() {
	    var beneficiaries = getBeneficiaries();
	
	    if (beneficiaries) {
	      beneficiariesPromise = Promise.resolve(beneficiaries);
	      return beneficiariesPromise;
	    }
	
	    return loadBeneficiaries();
	  };
	
	  /**
	   * @name initCurrencies
	   * @type {function}
	   * @description
	   * Initializes the list of currencies.
	   * @returns {Promise}
	   * @inner
	   */
	  var initCurrencies = function initCurrencies() {
	    return getCurrencies() ? Promise.resolve(getCurrencies()) : loadCurrencies();
	  };
	
	  /**
	   * @name initDebitAccounts
	   * @type {function}
	   * @description
	   * Initializes the list of debit accounts.
	   * @returns {Promise}
	   * @inner
	   */
	  var initDebitAccounts = function initDebitAccounts() {
	    var debitAccounts = getDebitAccounts();
	
	    if (debitAccounts) {
	      debitAccountsPromise = Promise.resolve(debitAccounts);
	      return debitAccountsPromise;
	    }
	
	    return loadDebitAccounts();
	  };
	
	  /**
	   * @name InitiatePaymentService#initPaymentForm
	   * @type {function}
	   * @description
	   * Initializes the form.
	   * @returns {Promise.<Array>}
	   */
	  var initPaymentForm = function initPaymentForm() {
	    return Promise.all([initPaymentData(), initDebitAccounts(), initBeneficiaries(), initCurrencies()]);
	  };
	
	  /**
	   * @name InitiatePaymentService#resetPayment
	   * @type {function}
	   * @description
	   * Resets the payment form.
	   */
	  var resetPayment = function resetPayment() {
	    initPaymentData(true);
	  };
	
	  /**
	   * @name InitiatePaymentService#startNewPayment
	   * @type {function}
	   * @description
	   * Starts a new payment.
	   * @param {Object} [initialPaymentData]
	   */
	  var startNewPayment = function startNewPayment(initialPaymentData) {
	    resetPayment();
	
	    if (initialPaymentData) {
	      var debitAccount = initialPaymentData.debitAccount;
	
	      if (debitAccount) {
	        setDebitAccount(debitAccount);
	      }
	    }
	  };
	
	  return {
	    canSaveContact: canSaveContact,
	    initPaymentForm: initPaymentForm,
	    isUrgentPaymentAllowed: isUrgentPaymentAllowed,
	    makePayment: makePayment,
	    makePaymentWithAuthorization: makePaymentWithAuthorization,
	    getPreferences: getPreferences,
	    prepareBeneficiaries: prepareBeneficiaries,
	    prepareDebitAccounts: prepareDebitAccounts,
	    resetPayment: resetPayment,
	    saveContactIfNeeded: saveContactIfNeeded,
	    setBeneficiary: setBeneficiary,
	    setDebitAccount: setDebitAccount,
	    setPayment: setPayment,
	    setSaveContact: setSaveContact,
	    setSchedule: setSchedule,
	    setUrgentPayment: setUrgentPayment,
	    startNewPayment: startNewPayment,
	    updateBeneficiaries: updateBeneficiaries
	  };
	};
	
	/**
	 * @typedef {Object} ContactIdentification
	 * @property {string} counterpartyName Counterparty name. Only required when 'scheme'
	 *   is set to IBAN/BBAN.
	 * @property {string} identification Identification of the product. Different schemes
	 *   are supported: IBAN, BBAN, ID
	 * @property {string} scheme  The name of the scheme. For contacts is always "IBAN".
	 */
	
	/**
	 * @typedef {Object} CreditAccountIdentification
	 * @property {string} identification Credit account ID
	 * @property {string} scheme The name of the scheme. For credit accounts is always "ID".
	 */
	
	/**
	 * @typedef {Object} DebitAccountIdentification
	 * @property {string} identification Debit account ID
	 * @property {string} scheme The name of the scheme. For debit accounts is always "ID".
	 */
	
	/**
	 * @typedef {Object} PaymentPayload
	 * @property {DebitAccountIdentification} debitAccountIdentification Identification of the payment
	 *   debit account
	 * @property {CreditAccountIdentification} creditAccountIdentification Identification of the payment
	 *   credit account
	 * @property {number} amount The amount of the payment
	 * @property {string} currency The alpha-3 code (complying with ISO 4217) of
	 *   the currency that qualifies the amount
	 * @property {string} description The description for the payment.
	 * @property {string} paymentMode Denotes whether payment will be single or will be recurring.
	 *   Possible values are "SINGLE" and "RECURRING"
	 */
	
	/**
	 * @typedef {Object} SchedulePayload
	 * @property {string} transferFrequency Denotes how frequently the transfer should be made
	 * @property {number} on Denotes day on which transfer should be executed. For weekly
	 *   it will be 1..7 indicating weekday. For monthly it will be 1..31 indicating day of month.
	 *   For yearly it will be 1..12 indicating month of the year
	 * @property {string} startDate When to start executing the schedule. First transfer
	 *   will be executed on first calculated date by schedule after this date
	 * @property {number} repeat Number of transfer to be executed. Only one of endDate
	 *   and repeat is possible. If neither repeat nor endDate is provided transfer
	 *   will be executed until canceled
	 * @property {number} every Indicates skip interval of transfer.
	 *   1 would mean execute every time, 2 - every other time
	 * @property {?string} endDate When to stop transfers. Transfers will not be executed
	 *   after this date. Only one of endDate and repeat is possible. If neither repeat
	 *   nor endDate is provided transfer will be executed until canceled
	 */
	
	/**
	 * @typedef {Object} ContactAccount
	 * @property {string} IBAN Contact's IBAN
	 */
	
	/**
	 * @typedef {Object} ContactCreatePayload
	 * @property {string} name Contact's name
	 * @property {Array.<ContactAccount>} accounts List of contact's accounts
	 */

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _initialState = __webpack_require__(255);
	
	var _initialState2 = _interopRequireDefault(_initialState);
	
	var _beneficiaries = __webpack_require__(256);
	
	var _beneficiaries2 = _interopRequireDefault(_beneficiaries);
	
	var _contacts = __webpack_require__(258);
	
	var _contacts2 = _interopRequireDefault(_contacts);
	
	var _currencies = __webpack_require__(259);
	
	var _currencies2 = _interopRequireDefault(_currencies);
	
	var _debitAccounts = __webpack_require__(260);
	
	var _debitAccounts2 = _interopRequireDefault(_debitAccounts);
	
	var _payment = __webpack_require__(261);
	
	var _payment2 = _interopRequireDefault(_payment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (stateContainer, bbStorage, hooks) {
	  var initialState = (0, _initialState2.default)({ hooks: hooks });
	
	  /**
	   * @name ViewModel
	   * @type {object}
	   * @inner
	   */
	  return {
	    /**
	     * @name ViewModel#init
	     * @description Initialises view model with initial state
	     * @type {function}
	     * @return {PaymentView}
	     * @inner
	     */
	    init: stateContainer.createAction(function () {
	      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	      return state;
	    }),
	
	    /**
	     * @name ViewModel#beneficiaries
	     * @type {ViewModelBeneficiariesActions}
	     * @description
	     * Actions for updating the parts of the `ViewState` related to the list of beneficiaries.
	     * @inner
	     */
	    beneficiaries: (0, _beneficiaries2.default)({
	      stateContainer: stateContainer,
	      hooks: hooks
	    }),
	
	    /**
	     * @name ViewModel#contacts
	     * @type {ViewModelContactsActions}
	     * @description
	     * Actions for updating the parts of the `ViewState` related to list of contacts.
	     * @inner
	     */
	    contacts: (0, _contacts2.default)({
	      stateContainer: stateContainer,
	      hooks: hooks
	    }),
	
	    /**
	     * @name ViewModel#currencies
	     * @type {ViewModelCurrenciesActions}
	     * @description
	     * Actions for updating the parts of the `ViewState` related to the list of currencies.
	     * @inner
	     */
	    currencies: (0, _currencies2.default)({
	      stateContainer: stateContainer,
	      hooks: hooks
	    }),
	
	    /**
	     * @name ViewModel#debitAccounts
	     * @type {ViewModelDebitAccountsActions}
	     * @description
	     * Actions for updating the parts of the `ViewState` related to the list of debit accounts.
	     * @inner
	     */
	    debitAccounts: (0, _debitAccounts2.default)({
	      stateContainer: stateContainer,
	      hooks: hooks
	    }),
	
	    /**
	     * @name ViewModel#payment
	     * @type {ViewModelPaymentActions}
	     * @description
	     * Actions for updating the parts of the `ViewState` related to the payment.
	     * @inner
	     */
	    payment: (0, _payment2.default)({
	      stateContainer: stateContainer,
	      hooks: hooks
	    })
	  };
	};

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getInitialPayment = exports.getInitialBeneficiary = exports.defaultCurrency = undefined;
	
	var _constants = __webpack_require__(250);
	
	var getInitialSchedule = function getInitialSchedule() {
	  var today = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
	  return {
	    transferFrequency: _constants.TransferFrequency.ONCE,
	    startDate: today,
	    end: _constants.RecurrenceEnding.NEVER,
	    endDate: null,
	    every: 1,
	    repeat: 5
	  };
	};
	
	var defaultCurrency = exports.defaultCurrency = {
	  name: 'EUR'
	};
	
	var getInitialBeneficiary = exports.getInitialBeneficiary = function getInitialBeneficiary() {
	  return {
	    name: '',
	    identifier: ''
	  };
	};
	
	var getInitialPayment = exports.getInitialPayment = function getInitialPayment() {
	  return {
	    amount: {
	      currency: defaultCurrency.name,
	      value: null
	    },
	    beneficiary: getInitialBeneficiary(),
	    debitAccount: null,
	    description: null,
	    saveContact: false,
	    schedule: getInitialSchedule(),
	    urgent: false
	  };
	};
	
	exports.default = function (_ref) {
	  var hooks = _ref.hooks;
	  return hooks.processInitialPaymentState({
	    allowedCurrencies: [defaultCurrency],
	
	    contacts: null,
	
	    currencies: {
	      error: null,
	      loading: false,
	      data: null
	    },
	
	    beneficiaries: {
	      error: null,
	      loading: false,
	      data: null
	    },
	
	    debitAccounts: {
	      error: null,
	      loading: false,
	      data: null
	    },
	
	    payment: {
	      error: null,
	      loading: false,
	      data: null
	    }
	  });
	};
	
	/**
	 * @typedef {Object} PaymentView
	 * @property {Array.<Currency>} allowedCurrencies List of allowed currencies
	 * @property {Array} contacts List of contacts
	 * @property {CurrenciesState} currencies List of currencies
	 * @property {BeneficiariesState} beneficiaries State of the beneficiaries
	 * @property {DebitAccountsState} debitAccounts State of the debit accounts
	 * @property {PaymentState} payment State of the payment
	 */
	
	/**
	 * @typedef {Object} Currency
	 * @property {string} name Currency name, suitable for display to users
	 */
	
	/**
	 * @typedef {Object} CurrenciesState
	 * @property {Error} error Error if the request to retrieve currencies failed
	 * @property {boolean} loading Indicates whether the list of currencies is being loading
	 * @property {Array.<Currency>} data List of currencies
	 */
	
	/**
	 * @typedef {Object} BeneficiariesState
	 * @property {Error} error Error if beneficiaries request failed
	 * @property {boolean} loading Indicates whether beneficiaries are being loading
	 * @property {Array.<AccountView>} data List of beneficiaries
	 */
	
	/**
	 * @typedef {Object} DebitAccountsState
	 * @property {Error} error Error if accounts request failed
	 * @property {boolean} loading Indicates whether debit accounts are being loading
	 * @property {Array.<AccountView>} data List of accounts
	 */
	
	/**
	 * @typedef {Object} PaymentState
	 * @property {Error} error Error if payment request failed
	 * @property {boolean} loading Indicates whether a payment request is being sending
	 * @property {Payment} data Payment data
	 */
	
	/**
	 * @typedef {Object} Payment
	 * @property {AccountView} debitAccount Selected debit account
	 * @property {Beneficiary} beneficiary Selected beneficiary
	 * @property {Amount} amount Amount and currency of the payment
	 * @property {string} description Description of the payment
	 * @property {boolean} saveContact Whether the beneficiary should be saved to address book
	 * @property {Schedule} schedule Schedule for recurring transfer
	 */
	
	/**
	 * @typedef {Object} Schedule
	 * @property {string} transferFrequency How frequently the transfer should be made
	 * @property {Date} startDate When to start executing the schedule
	 * @property {?Date} endDate When to stop transfers
	 */
	
	/**
	 * @typedef {Object} Beneficiary
	 * @property {string} name Beneficiary name
	 * @property {string} identifier Beneficiary identifier
	 */
	
	/**
	 * @typedef {Object} Amount
	 * @property {string} currency Currency code
	 * @property {number} value Amount value
	 */

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(257);
	
	exports.default = function (_ref) {
	  var stateContainer = _ref.stateContainer;
	  return {
	    /**
	     * @name ViewModelBeneficiariesActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelBeneficiariesActions#beforeBeneficiariesLoad
	     * @type {function}
	     * @description
	     * Updates the state before loading the list of beneficiaries.
	     * @inner
	     */
	    beforeBeneficiariesLoad: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        beneficiaries: Object.assign({}, state.beneficiaries, {
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelBeneficiariesActions#afterBeneficiariesLoadSuccess
	     * @type {function}
	     * @description
	     * Updates the state after loading the list of beneficiaries.
	     * @param {Object} beneficiaries
	     * @inner
	     */
	    afterBeneficiariesLoadSuccess: stateContainer.createAction(function (state, beneficiaries) {
	      return Object.assign({}, state, {
	        beneficiaries: {
	          data: beneficiaries,
	          error: null,
	          loading: false
	        }
	      });
	    }),
	
	    /**
	     * @name ViewModelBeneficiariesActions#afterBeneficiariesLoadError
	     * @type {function}
	     * @description
	     * Updates the state when loading the list of beneficiaries failed.
	     * @param {Error} error
	     * @inner
	     */
	    afterBeneficiariesLoadError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        beneficiaries: Object.assign({}, state.beneficiaries, {
	          error: (0, _helpers.uiError)(error),
	          loading: false
	        })
	      });
	    })
	  };
	};

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.uiError = exports.getAllowedCurrencies = exports.getAccountCurrency = undefined;
	
	var _errorMessages;
	
	var _libBbModelErrors = __webpack_require__(148);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'model.error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'model.error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'model.error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'model.error.unexpected'), _errorMessages);
	
	/**
	 * @name addCurrency
	 * @type {function}
	 * @description
	 * Adds the given currency to the given list of currencies.
	 * @param {Array.<Currency>} currencies
	 * @param {Currency} currency
	 * @inner
	 */
	var addCurrency = function addCurrency(currencies, currency) {
	  var includes = currencies.some(function (curr) {
	    return curr.name === currency.name;
	  });
	  if (!includes) {
	    currencies.unshift(currency);
	  }
	};
	
	/**
	 * @name getAccountCurrency
	 * @type {function}
	 * @description
	 * Returns the currency of the given account.
	 * @param {AccountView} account
	 * @returns {Currency}
	 * @inner
	 */
	var getAccountCurrency = exports.getAccountCurrency = function getAccountCurrency(account) {
	  return account && account.currency ? { name: account.currency } : null;
	};
	
	/**
	 * @name getAllowedCurrencies
	 * @type {function}
	 * @description
	 * Returns a list of currencies, that are allowed for the given debit account.
	 * @param {AccountView} debitAccount
	 * @param {Array.<Currency>} currencies
	 * @param {Currency} defaultCurrency
	 * @inner
	 */
	var getAllowedCurrencies = exports.getAllowedCurrencies = function getAllowedCurrencies(debitAccount, currencies, defaultCurrency) {
	  var crossCurrencyAllowed = debitAccount ? debitAccount.crossCurrencyAllowed : true;
	
	  var allCurrencies = currencies || [];
	  var allowedCurrencies = crossCurrencyAllowed ? [].concat(_toConsumableArray(allCurrencies)) : [];
	
	  var debitAccountCurrency = getAccountCurrency(debitAccount);
	
	  // Add debit account currency
	  if (debitAccountCurrency) {
	    addCurrency(allowedCurrencies, debitAccountCurrency);
	  }
	
	  // Add default currency
	  if (crossCurrencyAllowed) {
	    addCurrency(allowedCurrencies, defaultCurrency);
	  }
	
	  return allowedCurrencies;
	};
	
	/**
	 * @name uiError
	 * @type {function}
	 * @description
	 * Converts the given error to a UI error
	 * @param {Error} error
	 * @returns {Object}
	 */
	var uiError = exports.uiError = function uiError(error) {
	  return {
	    message: errorMessages[error.code]
	  };
	};

/***/ }),

/***/ 258:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (_ref) {
	  var stateContainer = _ref.stateContainer;
	  return {
	    /**
	     * @name ViewModelContactsActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelContactsActions#afterContactsLoadSuccess
	     * @type {function}
	     * @description
	     * Updates the state when the list of contacts is loaded.
	     * @param {Array.<AccountView>} contacts
	     * @inner
	     */
	    afterContactsLoadSuccess: stateContainer.createAction(function (state, contacts) {
	      return Object.assign({}, state, {
	        contacts: contacts
	      });
	    }),
	
	    /**
	     * @name resetContacts
	     * @type {function}
	     * @description
	     * Resets the list of contacts.
	     * @inner
	     */
	    resetContacts: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        contacts: null
	      });
	    })
	  };
	};

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(257);
	
	var _initialState = __webpack_require__(255);
	
	exports.default = function (_ref) {
	  var stateContainer = _ref.stateContainer;
	  return {
	    /**
	     * @name ViewModelCurrenciesActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelCurrenciesActions#beforeCurrenciesLoad
	     * @type {function}
	     * @description
	     * Updates the state before loading the list of currencies.
	     * @inner
	     */
	    beforeCurrenciesLoad: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        currencies: Object.assign({}, state.currencies, {
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelCurrenciesActions#afterCurrenciesLoadSuccess
	     * @type {function}
	     * @description
	     * Updates the state when the list of currencies is loaded.
	     * @param {Array.<Currency>} currencies
	     * @inner
	     */
	    afterCurrenciesLoadSuccess: stateContainer.createAction(function (state, currencies) {
	      var debitAccount = state.payment.data.debitAccount;
	
	      var allowedCurrencies = (0, _helpers.getAllowedCurrencies)(debitAccount, currencies, _initialState.defaultCurrency);
	
	      return Object.assign({}, state, {
	        allowedCurrencies: allowedCurrencies,
	        currencies: {
	          data: currencies,
	          error: null,
	          loading: false
	        }
	      });
	    }),
	
	    /**
	     * @name ViewModelCurrenciesActions#afterCurrenciesLoadError
	     * @type {function}
	     * @description
	     * Updates the state when the list of currencies failed.
	     * @param {Error} error
	     * @inner
	     */
	    afterCurrenciesLoadError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        currencies: Object.assign({}, state.currencies, {
	          error: (0, _helpers.uiError)(error),
	          loading: false
	        })
	      });
	    })
	  };
	};

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(257);
	
	exports.default = function (_ref) {
	  var stateContainer = _ref.stateContainer;
	  return {
	    /**
	     * @name ViewModelDebitAccountsActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelDebitAccountsActions#beforeDebitAccountsLoad
	     * @type {function}
	     * @description
	     * Updates the state before loading the list of debit accounts.
	     * @inner
	     */
	    beforeDebitAccountsLoad: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        debitAccounts: Object.assign({}, state.debitAccounts, {
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelDebitAccountsActions#afterDebitAccountsLoadSuccess
	     * @type {function}
	     * @description
	     * Updates the state after loading the list of debit accounts.
	     * @param {Array.<AccountView>} debitAccounts
	     * @inner
	     */
	    afterDebitAccountsLoadSuccess: stateContainer.createAction(function (state, debitAccounts) {
	      return Object.assign({}, state, {
	        debitAccounts: {
	          data: debitAccounts,
	          error: null,
	          loading: false
	        }
	      });
	    }),
	
	    /**
	     * @name ViewModelDebitAccountsActions#afterDebitAccountsLoadError
	     * @type {function}
	     * @description
	     * Updates the state when loading the list of debit accounts failed.
	     * @param {Error} error
	     * @inner
	     */
	    afterDebitAccountsLoadError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        debitAccounts: Object.assign({}, state.debitAccounts, {
	          error: (0, _helpers.uiError)(error),
	          loading: false
	        })
	      });
	    })
	  };
	};

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _initialState = __webpack_require__(255);
	
	var _helpers = __webpack_require__(257);
	
	exports.default = function (_ref) {
	  var stateContainer = _ref.stateContainer,
	      hooks = _ref.hooks;
	  return {
	    /**
	     * @name ViewModelPaymentActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelPaymentActions#beforePayment
	     * @type {function}
	     * @description
	     * Updates the state before making a payment.
	     * @inner
	     */
	    beforePayment: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelPaymentActions#afterPaymentError
	     * @type {function}
	     * @description
	     * Updates the state after payment fail.
	     * @param {Error} error
	     * @inner
	     */
	    afterPaymentError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          error: (0, _helpers.uiError)(error),
	          loading: false
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelPaymentActions#afterPaymentSuccess
	     * @type {function}
	     * @description
	     * Updates the state after payment success.
	     * @inner
	     */
	    afterPaymentSuccess: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          error: null,
	          loading: false
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelPaymentActions#resetPayment
	     * @type {function}
	     * @description
	     * Resets payment using an initial payment, processed with a corresponding hook.
	     * @inner
	     */
	    resetPayment: stateContainer.createAction(function (state) {
	      var initialPayment = (0, _initialState.getInitialPayment)();
	      var processedInitialPayment = hooks.processInitialPaymentState(initialPayment);
	
	      return Object.assign({}, state, {
	        payment: {
	          data: processedInitialPayment,
	          error: null,
	          loading: false
	        }
	      });
	    }),
	
	    /**
	     * @name ViewModelPaymentActions#resetPaymentBeneficiary
	     * @type {function}
	     * @description
	     * Resets the payment beneficiary to the initial value.
	     * @inner
	     */
	    resetPaymentBeneficiary: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          data: Object.assign({}, state.payment.data, {
	            beneficiary: (0, _initialState.getInitialBeneficiary)()
	          })
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelPaymentActions#setPaymentUrgent
	     * @type {function}
	     * @description
	     * Updates payment's urgent flag with the given value.
	     * @param {boolean} urgent
	     */
	    setPaymentUrgent: stateContainer.createAction(function (state, urgent) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          data: Object.assign({}, state.payment.data, {
	            urgent: Boolean(urgent)
	          })
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelPaymentActions#setPayment
	     * @type {function}
	     * @description
	     * Sets the payment.
	     * @param {Payment} payment
	     */
	    setPayment: stateContainer.createAction(function (state, payment) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          data: payment
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelPaymentActions#setPaymentBeneficiary
	     * @type {function}
	     * @description
	     * Sets the payment beneficiary.
	     * @param {AccountView} beneficiary
	     * @inner
	     */
	    setPaymentBeneficiary: stateContainer.createAction(function (state, beneficiaryAccount) {
	      var alias = beneficiaryAccount.alias,
	          name = beneficiaryAccount.name,
	          identifier = beneficiaryAccount.identifier;
	
	
	      var beneficiary = {
	        name: String(alias || name),
	        identifier: String(identifier),
	        isNew: false
	      };
	
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          data: Object.assign({}, state.payment.data, {
	            beneficiary: beneficiary
	          })
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelPaymentActions#setPaymentDebitAccount
	     * @type {function}
	     * @description
	     * Sets the payment beneficiary.
	     * @param {AccountView} debitAccount
	     * @inner
	     */
	    setPaymentDebitAccount: stateContainer.createAction(function (state, debitAccount) {
	      var currencies = state.currencies.data;
	
	      var allowedCurrencies = (0, _helpers.getAllowedCurrencies)(debitAccount, currencies, _initialState.defaultCurrency);
	
	      return Object.assign({}, state, {
	        allowedCurrencies: allowedCurrencies,
	        payment: Object.assign({}, state.payment, {
	          data: Object.assign({}, state.payment.data, {
	            debitAccount: debitAccount
	          })
	        })
	      });
	    }),
	
	    /**
	     * @description
	     * Updates saveContact flag with the given value.
	     *
	     * @name setSaveContact
	     * @type {function}
	     *
	     * @param {boolean} saveContact
	     */
	    setSaveContact: stateContainer.createAction(function (state, saveContact) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          data: Object.assign({}, state.payment.data, {
	            saveContact: Boolean(saveContact)
	          })
	        })
	      });
	    }),
	
	    /**
	     * @description
	     * Updates the schedule with the given value.
	     *
	     * @name setSchedule
	     * @type {function}
	     *
	     * @param {Object} schedule
	     */
	    setSchedule: stateContainer.createAction(function (state, schedule) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          data: Object.assign({}, state.payment.data, {
	            schedule: schedule
	          })
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelPaymentActions#updatePaymentCurrency
	     * @type {function}
	     * @description
	     * Updates the payment currency according, making sure
	     * the currency of the payment is allowed.
	     * @inner
	     */
	    updatePaymentCurrency: stateContainer.createAction(function (state) {
	      var debitAccount = state.payment.data.debitAccount;
	      var debitAccountCurrency = (0, _helpers.getAccountCurrency)(debitAccount);
	
	      var currency = (debitAccountCurrency || _initialState.defaultCurrency).name;
	
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          data: Object.assign({}, state.payment.data, {
	            amount: Object.assign({}, state.payment.data.amount, {
	              currency: currency
	            })
	          })
	        })
	      });
	    })
	  };
	};

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description
	 * Hooks for widget-bbm-initiate-payment-ng.
	 *
	 * @name Hooks
	 * @type {object}
	 */
	
	/**
	 * @description
	 * Processes the initial payment object.
	 *
	 * The widget uses this hook on start when the initial payment object is created.
	 * Also the widget uses this when it resets the payment and starts another one.
	 *
	 * Use it to add custom properties to the payment object.
	 *
	 * @name Hooks#processInitialPaymentState
	 * @type {function}
	 *
	 * @param {Payment} payment Payment state, that is supposed to be processed
	 * @returns {Payment}
	 */
	var processInitialPaymentState = exports.processInitialPaymentState = function processInitialPaymentState(payment) {
	  return payment;
	};
	
	/**
	 * @description
	 * Processes the payload of a the payment.
	 *
	 * @name Hooks#processPaymentPayload
	 * @type {function}
	 *
	 * @param {PaymentPayload} paymentPayload Payment payload, that is supposed to be processed
	 * @returns {Payment}
	 */
	var processPaymentPayload = exports.processPaymentPayload = function processPaymentPayload(paymentPayload) {
	  return paymentPayload;
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bbm-initiate-payment-ng.js.map