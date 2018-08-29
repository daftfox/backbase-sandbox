(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("vendor-bb-angular-ng-aria"), require("ui-bb-substitute-error-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-format-amount-ng"), require("ui-bb-currency-input-ng"), require("vendor-bb-uib-progressbar"), require("ui-bb-modal-ng"), require("ui-bb-notification-stripe-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-saving-goals-ng", ["ui-bb-i18n-ng", "vendor-bb-angular-ng-aria", "ui-bb-substitute-error-ng", "ui-bb-loading-indicator-ng", "ui-bb-format-amount-ng", "ui-bb-currency-input-ng", "vendor-bb-uib-progressbar", "ui-bb-modal-ng", "ui-bb-notification-stripe-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-saving-goals-ng"] = factory(require("ui-bb-i18n-ng"), require("vendor-bb-angular-ng-aria"), require("ui-bb-substitute-error-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-format-amount-ng"), require("ui-bb-currency-input-ng"), require("vendor-bb-uib-progressbar"), require("ui-bb-modal-ng"), require("ui-bb-notification-stripe-ng"));
	else
		root["ext-bb-saving-goals-ng"] = factory(root["ui-bb-i18n-ng"], root["vendor-bb-angular-ng-aria"], root["ui-bb-substitute-error-ng"], root["ui-bb-loading-indicator-ng"], root["ui-bb-format-amount-ng"], root["ui-bb-currency-input-ng"], root["vendor-bb-uib-progressbar"], root["ui-bb-modal-ng"], root["ui-bb-notification-stripe-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__) {
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
	exports.events = exports.helpers = exports.intents = exports.dependencyKeys = undefined;
	
	var _intents = __webpack_require__(2);
	
	Object.defineProperty(exports, 'intents', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_intents).default;
	  }
	});
	
	var _helpers = __webpack_require__(3);
	
	Object.defineProperty(exports, 'helpers', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_helpers).default;
	  }
	});
	
	var _events = __webpack_require__(5);
	
	Object.defineProperty(exports, 'events', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_events).default;
	  }
	});
	
	var _uiBbI18nNg = __webpack_require__(6);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _vendorBbAngularNgAria = __webpack_require__(7);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(8);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(9);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbFormatAmountNg = __webpack_require__(10);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _uiBbCurrencyInputNg = __webpack_require__(11);
	
	var _uiBbCurrencyInputNg2 = _interopRequireDefault(_uiBbCurrencyInputNg);
	
	var _vendorBbUibProgressbar = __webpack_require__(12);
	
	var _vendorBbUibProgressbar2 = _interopRequireDefault(_vendorBbUibProgressbar);
	
	var _uiBbModalNg = __webpack_require__(13);
	
	var _uiBbModalNg2 = _interopRequireDefault(_uiBbModalNg);
	
	var _uiBbNotificationStripeNg = __webpack_require__(14);
	
	var _uiBbNotificationStripeNg2 = _interopRequireDefault(_uiBbNotificationStripeNg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbI18nNg2.default, _vendorBbAngularNgAria2.default, _uiBbSubstituteErrorNg2.default, _uiBbLoadingIndicatorNg2.default, _uiBbFormatAmountNg2.default, _uiBbCurrencyInputNg2.default, _vendorBbUibProgressbar2.default, _uiBbModalNg2.default, _uiBbNotificationStripeNg2.default];
	
	/**
	 * @name intents
	 * @type {module:lib-bb-extension-intents-ng.ExtensionIntents}
	 */
	/**
	 * @module ext-bb-saving-goals-ng
	 * @extends module:widget-bb-saving-goals-ng.Extension
	 */

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return {};
	};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(4);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
	                                                                                                                                                                                                                   * @name Helpers
	                                                                                                                                                                                                                   * @type {object}
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * @description
	                                                                                                                                                                                                                   * Helpers for the extension
	                                                                                                                                                                                                                   */
	
	/**
	 * @name isDefined
	 *
	 * @type {function}
	 * @inner
	 * @description A helper to check if item is NOT undefined and is NOT a null
	 *
	 * @param {any} value - an item to be assessed
	 * @returns {boolean} true in case an item is not undefined and is not null
	 */
	var isDefined = function isDefined(value) {
	  return value !== undefined && value !== null;
	};
	
	/**
	 * @name hasCurrencyCode
	 *
	 * @type {function}
	 * @description A helper to check if item has currency code property
	 * @inner
	 * @param {object} value - an item to be assessed
	 * @returns {boolean} true in case an item has currency code property
	 */
	var hasCurrencyCode = function hasCurrencyCode() {
	  var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  return isDefined(item.currencyCode);
	};
	
	/**
	 * @name shouldHaveCurrencyCode
	 *
	 * @type {function}
	 * @description A helper to check if according to schema property should
	 * have a currency code defined
	 * @inner
	 * @param {object} schema - a schema item to be used
	 * @param {any} preferenceName - a preference name to be verified
	 * @returns {boolean} true in case an item should have currency code property
	 */
	var shouldHaveCurrencyCode = function shouldHaveCurrencyCode() {
	  var schema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var preferenceName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	  return isDefined(schema[preferenceName]) && isDefined(schema[preferenceName].properties) && isDefined(schema[preferenceName].properties.currencyCode);
	};
	
	exports.default = function (_ref) {
	  var widget = _ref.widget,
	      stateContainer = _ref.stateContainer,
	      router = _ref.router,
	      getRule = _ref.getRule;
	
	  var isSavingGoalsFormActive = router.getRoute() === 'form';
	  var isCancelConfirmationActive = false;
	  var isDeleteConfirmationActive = false;
	  var isFormDirty = false;
	  var deleteMethod = null;
	  var selectedGoal = {};
	
	  /**
	   * @name preferences
	   *
	   * @inner
	   * @type {object}
	   * @description Set of preferences relevant for extensions (including default values)
	   */
	  var preferences = function () {
	    var notificationDismissTime = widget.getLongPreference(_constants.Preferences.NOTIFICATION_DISMISS_TIME.key);
	    notificationDismissTime = !isDefined(notificationDismissTime) ? _constants.Preferences.NOTIFICATION_DISMISS_TIME.defaultValue : notificationDismissTime;
	
	    var savingGoalProductKinds = widget.getStringPreference(_constants.Preferences.PRODUCT_KINDS_WITH_SAVING_GOALS.key);
	    savingGoalProductKinds = !isDefined(savingGoalProductKinds) ? _constants.Preferences.PRODUCT_KINDS_WITH_SAVING_GOALS.defaultValue : savingGoalProductKinds;
	
	    return {
	      notificationDismissTime: notificationDismissTime,
	      savingGoalProductKinds: savingGoalProductKinds
	    };
	  }();
	
	  /**
	   * @name getNotifications
	   *
	   * @type {function}
	   * @description Selector for notifications from the widget state
	   */
	  var getNotifications = stateContainer.createSelector(function (state) {
	    return state.notifications || [];
	  });
	
	  /**
	   * @name updateNotifications
	   *
	   * @type {function}
	   * @description Function to set notifications in the state
	   * @param {object} notifications notifications object
	   */
	  var updateNotifications = stateContainer.createAction(function (current, notifications) {
	    return Object.assign({}, current, {
	      notifications: notifications
	    });
	  });
	
	  /**
	   * @name savingGoalsSchema
	   *
	   * @type {function}
	   * @description State selector for saving goals schema
	   */
	  var savingGoalsSchema = stateContainer.createSelector(function (state) {
	    return state.schema;
	  });
	
	  /**
	   * @name pushNotification
	   * @type {function}
	   * @description Helper to push new notification into the list
	   * @inner
	   * @param {object} notification notification to be displayed
	   */
	  var pushNotification = function pushNotification(notification) {
	    if (!isDefined(notification)) {
	      return;
	    }
	    var notifications = getNotifications();
	    notifications.push(notification);
	    updateNotifications(notifications);
	  };
	
	  /**
	   * @name handleExtensionError
	   *
	   * @type {function}
	   * @description Internal for extension UI errors handler
	   * @param {Error} err error code to be transformed to the message
	   */
	  var handleExtensionError = function handleExtensionError(err) {
	    pushNotification({ message: err.message, level: 'danger' });
	    throw err;
	  };
	
	  /**
	   * @name createModelHandlers
	   *
	   * @type {function}
	   * @description Method to create a set of handlers for saving function
	   * This method can be used to add extra fields
	   * @param {object} schema savingGoalsSchema to be used for validation if necessary
	   * @returns {object} set of handlers for form fields
	   * to be transformed and passed to the model
	   */
	  var createModelHandlers = function createModelHandlers() {
	    var schema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    return {
	      /**
	       * @name id
	       *
	       * @type {function}
	       * @description Handler for id property of the model
	       * @param {object} formObj form state object
	       * @return {string} id if it's defined
	       */
	      id: function id(formObj) {
	        return formObj.id;
	      },
	
	      /**
	       * @name goalName
	       *
	       * @type {function}
	       * @description Handler for goalName property of the model
	       * @param {object} formObj form state object
	       * @return {string} goal name
	       */
	      goalName: function goalName(formObj) {
	        if (!formObj.goalName || formObj.goalName.length === 0) {
	          throw new Error(_constants.ErrorCodes.NAME_EMPTY);
	        }
	
	        return formObj.goalName;
	      },
	
	      /**
	       * @name goalAmount
	       *
	       * @type {function}
	       * @description Handler for goal amount
	       * @throws {Error} if goal amount is not an integer greater then 0
	       * @param {object} formObj form state object
	       * @returns {object} goalAmount object with an amount and currency
	       * if currecy is not defined default one is used.
	       */
	      goalAmount: function goalAmount(formObj) {
	        var product = stateContainer.getState().product;
	        var targetAmount = formObj.goalAmount || {};
	        // map form properties into properties expected by currency input
	        Object.assign(targetAmount, {
	          value: targetAmount.amount || targetAmount.value,
	          currency: targetAmount.currencyCode || targetAmount.currency
	        });
	
	        if (shouldHaveCurrencyCode(schema, 'goalAmount') && !hasCurrencyCode(targetAmount)) {
	          Object.assign(targetAmount, { currencyCode: product.currency });
	        }
	
	        // get amount from currency input component object
	        var amount = parseFloat(targetAmount.value, 10);
	        if (!amount || amount <= 0) {
	          throw new Error(_constants.ErrorCodes.INSUFFICIENT_AMOUNT);
	        }
	
	        Object.assign(targetAmount, { amount: amount });
	        return {
	          currencyCode: targetAmount.currencyCode,
	          amount: amount
	        };
	      }
	    };
	  };
	
	  /**
	   * @name isStateValid
	   *
	   * @type {function}
	   * @inner
	   * @description Checks validity of the state object
	   * @param {object} formObj form state object
	   * @returns {boolean}
	   */
	  var isStateValid = function isStateValid(formObj) {
	    try {
	      var handlers = createModelHandlers(savingGoalsSchema());
	      handlers.goalAmount(formObj);
	      handlers.goalName(formObj);
	      return true;
	    } catch (_) {
	      return false;
	    }
	  };
	
	  return {
	    /**
	     * @name initEditingForm
	     *
	     * @type {function}
	     * @description Sets initial step on form init
	     */
	    initEditingForm: function initEditingForm() {
	      isFormDirty = false;
	    },
	
	    /**
	     * @name cancelConfirmation
	     *
	     * @type {function}
	     * @description Cancels confirmation dialog
	     */
	    cancelConfirmation: function cancelConfirmation() {
	      isCancelConfirmationActive = false;
	      isDeleteConfirmationActive = false;
	    },
	
	    /**
	     * @name isFormActive
	     *
	     * @type {function}
	     * @description A getter of the modal window state
	     * @returns {boolean} true if form is active
	     */
	    get isFormActive() {
	      return isSavingGoalsFormActive;
	    },
	
	    /**
	     * @name isFormActive
	     *
	     * @type {function}
	     * @description A setter for isFormActive, which is using router
	     * to close the form
	     * @param {boolean} value - new value of the state,
	     * being used to define if we shall navigate to list
	     */
	    set isFormActive(value) {
	      isSavingGoalsFormActive = !!value;
	    },
	
	    /**
	     * @name handleChanging
	     *
	     * @type {function}
	     * @description Function to initiate create/edit action
	     * @param {function} changeMethod function to be called
	     * @param {any} item to be passed to the saving function
	     * @returns {any} changing method result
	     */
	    handleChanging: function handleChanging(changeMethod, item) {
	      isSavingGoalsFormActive = true;
	      return changeMethod(item);
	    },
	
	    /**
	     * @name handleSaving
	     *
	     * @type {function}
	     * @description Handler for saving an item
	     * @param {function} saveMethod save method to be called
	     * @param {object} formObj an item to be transformed and saved
	     * @returns {any} saving method result
	     */
	    handleSaving: function handleSaving(saveMethod, formObj) {
	      isSavingGoalsFormActive = false;
	      return saveMethod(this.formToModelFields(formObj));
	    },
	
	    /**
	     * @name startDelete
	     *
	     * @type {function}
	     * @description Function that prepares everything for saving goal deletion
	     * and triggers confirmation dialog
	     * @param {function} method function to be called if delete is confirmed
	     * @param {any} item to be passed to the delete function
	     */
	    startDelete: function startDelete(method, item) {
	      isDeleteConfirmationActive = true;
	      selectedGoal = item;
	      deleteMethod = method;
	    },
	
	    /**
	     * @name handleDelete
	     *
	     * @type {function}
	     * @description Function to initiate delete action
	     * @returns {any} delete method result
	     */
	    handleDelete: function handleDelete() {
	      isDeleteConfirmationActive = false;
	      return deleteMethod(selectedGoal);
	    },
	
	    /**
	     * @name formToModelFields
	     *
	     * @type {function}
	     * @description A function to process form object before it gets passed to the model.
	     * @param {object} form - item to be transformed
	     * @returns {object} modelItem
	     */
	    formToModelFields: function formToModelFields() {
	      var form = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      var modelHandlers = createModelHandlers(savingGoalsSchema());
	      try {
	        return Object.keys(modelHandlers).reduce(function (acc, prop) {
	          var transformedValue = modelHandlers[prop](form);
	          return isDefined(transformedValue) ? Object.assign(acc, _defineProperty({}, prop, transformedValue)) : acc;
	        }, {});
	      } catch (err) {
	        handleExtensionError(err);
	        return null;
	      }
	    },
	
	    /**
	     * @name isConfirmationActive
	     *
	     * @type {function}
	     * @description A getter of the confirmation modal window state
	     * @returns {boolean} true if confirmation modal is active
	     */
	    get isConfirmationActive() {
	      return isCancelConfirmationActive;
	    },
	
	    /**
	     * @name isConfirmationActive
	     *
	     * @type {function}
	     * @description A setter for the confirmation modal window state
	     * @param {boolean} value new value of the state,
	     * which will change confirmation modal apperance
	     */
	    set isConfirmationActive(value) {
	      isCancelConfirmationActive = !!value;
	    },
	
	    /**
	     * @name selectedGoal
	     *
	     * @type {function}
	     * @description A getter of the saving goal item selected to be deleted
	     * @returns {object}
	     */
	    get selectedGoal() {
	      return selectedGoal;
	    },
	
	    /**
	     * @name isDeleteConfirmationActive
	     *
	     * @type {function}
	     * @description A getter of the delete confirmation modal window state
	     * @returns {boolean} true if delete confirmation modal is active
	     */
	    get isDeleteConfirmationActive() {
	      return isDeleteConfirmationActive;
	    },
	
	    /**
	     * @name isDeleteConfirmationActive
	     *
	     * @type {function}
	     * @description A setter for the delete confirmation modal window state
	     * @param {boolean} value new value of the state,
	     * which will change delete confirmation modal apperance
	     */
	    set isDeleteConfirmationActive(value) {
	      isDeleteConfirmationActive = !!value;
	    },
	
	    /**
	     * @name isFormDirty
	     *
	     * @type {function}
	     * @description A getter of the state of the form
	     * @returns {boolean} true if form is changed
	     */
	    get isFormDirty() {
	      return isFormDirty;
	    },
	
	    /**
	     * @name isFormDirty
	     *
	     * @type {function}
	     * @description A setter for form state
	     * @param {boolean} value new value of the state,
	     * being used to define if the form data has been changed
	     */
	    set isFormDirty(value) {
	      isFormDirty = !!value;
	    },
	
	    /**
	     * @name notificationDismissTime
	     *
	     * @type {function}
	     * @description Returns notifications dismissing time preference value
	     * @returns {number} time to dismiss notification
	     */
	    get notificationDismissTime() {
	      return preferences.notificationDismissTime;
	    },
	
	    /**
	     * @name shiftNotification
	     *
	     * @type {function}
	     * @description Helper to remove notification from the list
	     * @param {object} notification
	     * @param {array} notificationsList
	     */
	    shiftNotification: function shiftNotification() {
	      var notifications = getNotifications();
	      notifications.shift();
	      updateNotifications(notifications);
	    },
	
	    /**
	     * @name cancelEdit
	     *
	     * @type {function}
	     * @description Cancels editing form
	     * @param {?Boolean} force If set to true, check if there were some changes will be skipped.
	     * Default false, which means that, in case there were some changes, another dialog with
	     * cancel confirmation will appear
	     */
	    cancelEdit: function cancelEdit() {
	      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	      // check if additional confirmation is needed
	      if (!force && isFormDirty) {
	        isCancelConfirmationActive = true;
	        return;
	      }
	
	      isCancelConfirmationActive = false;
	      isSavingGoalsFormActive = false;
	    },
	
	    /**
	     * @name allowSave
	     *
	     * @type {function}
	     * @description Checks if the form is ready (valid) for save
	     * @param {object} formObj form state object
	     * @returns {boolean}
	     */
	    allowSave: function allowSave(formObj) {
	      if (!formObj) {
	        return false;
	      }
	      // check if we are creating or updating
	      if (formObj.id) {
	        // preserve original state
	        var originalAmount = parseFloat(formObj.goalAmount.value, 10);
	        var originalName = formObj.goalName;
	        if (!formObj.originalAmount) {
	          Object.assign(formObj, { originalAmount: originalAmount, originalName: originalName });
	        }
	
	        isFormDirty = originalAmount !== formObj.originalAmount || originalName !== formObj.originalName;
	      } else {
	        isFormDirty = !!(formObj.goalAmount && formObj.goalAmount.value || formObj.goalName);
	      }
	
	      return isFormDirty && isStateValid(formObj);
	    },
	
	    /**
	     * @name getSymbol
	     *
	     * @type {function}
	     * @description Converts currency code into currency symbol
	     * @param {string} code
	     * @returns {string}
	     */
	    getSymbol: function getSymbol(code) {
	      return (getRule(code) || {}).symbol || code;
	    },
	
	    /**
	     * @name savingGoalsEnabledForKind
	     *
	     * @type {function}
	     * @description Checks if saving goals are enabled for a specific product kind
	     * @param {string} kind
	     * @returns {boolean}
	     */
	    savingGoalsEnabledForKind: function savingGoalsEnabledForKind(kind) {
	      return preferences.savingGoalProductKinds.split(',').indexOf(kind) >= 0;
	    }
	  };
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Preferences
	 *
	 * @type {object}
	 * @description
	 * Set of extension specific properties constants which contains
	 * pairs of key and default values where key is the property
	 * name and the defaultValue is it's value by default
	 */
	var Preferences = exports.Preferences = {
	  /**
	   * @name NOTIFICATION_DISMISS_TIME
	   *
	   * @type {object}
	   * @description notifications timeout in seconds
	   */
	  NOTIFICATION_DISMISS_TIME: {
	    key: 'dismissNotificationsTime',
	    defaultValue: 3
	  },
	
	  /**
	   * @name PRODUCT_KINDS_WITH_SAVING_GOALS
	   *
	   * @type {object}
	   * @deprecated
	   * @description Which product kinds are allowed to have saving goals
	   */
	  PRODUCT_KINDS_WITH_SAVING_GOALS: {
	    key: 'productKinds',
	    defaultValue: 'savingsAccounts'
	  }
	};
	
	/**
	 * @name ErrorCodes
	 *
	 * @type {object}
	 * @description A set of constants which defines ui error codes
	 * of the extension
	 */
	var ErrorCodes = exports.ErrorCodes = {
	  NAME_EMPTY: 'saving.goals.errors.name.empty',
	  INSUFFICIENT_AMOUNT: 'saving.goals.errors.amount.insufficient'
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name Events
	 * @type {object}
	 *
	 * @description
	 * Event subscribtions object for the extension
	 */
	exports.default = function () {
	  return {};
	};

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

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-saving-goals-ng.js.map