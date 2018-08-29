(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("model-bb-payment-orders-ng"), require("lib-bb-permissions-ng"), require("lib-bb-state-container-ng"), require("lib-bb-extension-intents-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-initiate-us-payment-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-model-errors", "lib-bb-event-bus-ng", "lib-bb-widget-extension-ng", "lib-bb-intent-ng", "model-bb-payment-orders-ng", "lib-bb-permissions-ng", "lib-bb-state-container-ng", "lib-bb-extension-intents-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-initiate-us-payment-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("model-bb-payment-orders-ng"), require("lib-bb-permissions-ng"), require("lib-bb-state-container-ng"), require("lib-bb-extension-intents-ng"));
	else
		root["widget-bb-initiate-us-payment-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-model-errors"], root["lib-bb-event-bus-ng"], root["lib-bb-widget-extension-ng"], root["lib-bb-intent-ng"], root["model-bb-payment-orders-ng"], root["lib-bb-permissions-ng"], root["lib-bb-state-container-ng"], root["lib-bb-extension-intents-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_142__, __WEBPACK_EXTERNAL_MODULE_148__, __WEBPACK_EXTERNAL_MODULE_193__, __WEBPACK_EXTERNAL_MODULE_194__, __WEBPACK_EXTERNAL_MODULE_195__, __WEBPACK_EXTERNAL_MODULE_196__, __WEBPACK_EXTERNAL_MODULE_197__, __WEBPACK_EXTERNAL_MODULE_203__, __WEBPACK_EXTERNAL_MODULE_204__) {
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

	module.exports = __webpack_require__(202);

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_142__;

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

/***/ 197:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_197__;

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Preference = undefined;
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(194);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbEventBusNg = __webpack_require__(193);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbWidgetNg = __webpack_require__(142);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbIntentNg = __webpack_require__(195);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _modelBbPaymentOrdersNg = __webpack_require__(196);
	
	var _modelBbPaymentOrdersNg2 = _interopRequireDefault(_modelBbPaymentOrdersNg);
	
	var _libBbPermissionsNg = __webpack_require__(197);
	
	var _libBbPermissionsNg2 = _interopRequireDefault(_libBbPermissionsNg);
	
	var _libBbStateContainerNg = __webpack_require__(203);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _libBbExtensionIntentsNg = __webpack_require__(204);
	
	var _libBbExtensionIntentsNg2 = _interopRequireDefault(_libBbExtensionIntentsNg);
	
	var _service = __webpack_require__(205);
	
	var _service2 = _interopRequireDefault(_service);
	
	var _viewModel = __webpack_require__(208);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	var _router = __webpack_require__(220);
	
	var _router2 = _interopRequireDefault(_router);
	
	var _postActions = __webpack_require__(221);
	
	var _postActions2 = _interopRequireDefault(_postActions);
	
	var _controller = __webpack_require__(222);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(223);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'widget-bb-initiate-us-payment-ng'; /**
	                                                     * @module widget-bb-initiate-us-payment-ng
	                                                     *
	                                                     * @description
	                                                     * Initiate US payment widget
	                                                     */
	
	var hooksKey = moduleKey + ':hooks';
	var serviceKey = moduleKey + ':service';
	var viewModelKey = moduleKey + ':view-model';
	var routerKey = moduleKey + ':router';
	var postActionsKey = moduleKey + ':post-actions';
	
	var Preference = exports.Preference = {
	  URGENT: 'bb.payment.urgent',
	  RECURRING: 'bb.payment.recurring',
	  DISMISS_TIME: 'bb.payment.notificationDismissTime',
	  TYPE_SELECTOR_ENABLED: 'bb.payment.typeSelector.enabled',
	  HIDDEN: 'bb.payment.hidden',
	  PAGE_SIZE: 'bb.payment.list.pageSize',
	  BENEFICIARY_SELECT_TYPE: 'bb.payment.beneficiary.select.type',
	  EDIT_ROLE: 'bb.payment.edit.role'
	};
	
	var getPreferences = function getPreferences(bbWidget) {
	  var preferences = {};
	
	  preferences.urgent = bbWidget.getBooleanPreference(Preference.URGENT);
	  preferences.recurring = bbWidget.getBooleanPreference(Preference.RECURRING);
	  preferences.editRole = bbWidget.getBooleanPreference(Preference.EDIT_ROLE);
	  preferences.dismissTime = bbWidget.getLongPreference(Preference.DISMISS_TIME);
	  preferences.typeSelectorEnabled = bbWidget.getBooleanPreference(Preference.TYPE_SELECTOR_ENABLED);
	  preferences.hidden = bbWidget.getBooleanPreference(Preference.HIDDEN);
	  preferences.pageSize = bbWidget.getLongPreference(Preference.PAGE_SIZE);
	  preferences.beneficiarySelectType = bbWidget.getStringPreference(Preference.BENEFICIARY_SELECT_TYPE);
	
	  return preferences;
	};
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbEventBusNg2.default, _modelBbPaymentOrdersNg2.default, _libBbStateContainerNg2.default, _libBbWidgetNg2.default, _libBbIntentNg2.default, _libBbPermissionsNg2.default, _libBbExtensionIntentsNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey, hooksKey,
	/* into */
	_viewModel2.default]).factory(serviceKey, [_modelBbPaymentOrdersNg.modelPaymentOrdersKey, viewModelKey, _libBbPermissionsNg.bbPermissionsKey, '$q', _libBbEventBusNg.eventBusKey,
	/* into */
	_service2.default]).factory(routerKey, [_libBbStateContainerNg.bbStateContainerKey,
	/* into */
	_router2.default]).factory(postActionsKey, [serviceKey, routerKey,
	/* into */
	_postActions2.default]).controller('USPaymentController', [
	// dependencies to inject
	serviceKey, routerKey, _libBbEventBusNg.eventBusKey, postActionsKey,
	/* into */
	_controller2.default]).factory(_libBbWidgetExtensionNg.extensionContextKey, [serviceKey, routerKey, postActionsKey, '$timeout',
	/* into */
	function (service, router, postActions, $timeout) {
	  return {
	    service: service,
	    router: router,
	    postActions: postActions,
	    $timeout: $timeout
	  };
	}]).factory(_libBbExtensionIntentsNg.extensionIntentsContextKey, [serviceKey, '$timeout',
	/* into */
	function (service, $timeout) {
	  return {
	    service: service,
	    $timeout: $timeout
	  };
	}]).run([_libBbIntentNg.bbIntentKey, _libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, _libBbStateContainerNg.bbStateContainerKey, viewModelKey, function (bbIntent, bus, widget, bbStateContainer, viewModel) {
	  viewModel.init(getPreferences(widget));
	
	  bbIntent.init().then(function () {
	    bus.publish('cxp.item.loaded', {
	      id: widget.getId()
	    });
	  });
	}]).name;

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_203__;

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_204__;

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _message = __webpack_require__(206);
	
	var _constants = __webpack_require__(207);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var isNotEmptyString = function isNotEmptyString(str) {
	  return Boolean(typeof str === 'string' && str.trim().length);
	};
	var cachedDebitAccounts = {};
	var shareSameKeyValues = function shareSameKeyValues(source, target) {
	  if (source === null || (typeof source === 'undefined' ? 'undefined' : _typeof(source)) !== 'object') {
	    return source === target;
	  }
	
	  return !Object.keys(source).find(function (key) {
	    var value = source[key];
	    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
	      return !shareSameKeyValues(value, target[key]);
	    }
	    return value !== target[key];
	  });
	};
	
	exports.default = function (model, vm, bbPermissions, Promise, bus) {
	  var getDebitAccounts = function getDebitAccounts(searchQuery) {
	    var promise = void 0;
	    vm.debitAccounts.beforeLoad();
	    var parameters = {
	      searchQuery: isNotEmptyString(searchQuery) ? searchQuery : null,
	      debitAccount: true
	    };
	
	    if (searchQuery in cachedDebitAccounts) {
	      promise = Promise.resolve(cachedDebitAccounts[searchQuery]);
	    } else {
	      promise = model.getContextArrangements(model.Context[vm.state.payment.type], parameters).then(function (debitAccounts) {
	        cachedDebitAccounts[searchQuery] = debitAccounts;
	        return debitAccounts;
	      });
	    }
	
	    return promise.then(function (arrangements) {
	      vm.debitAccounts.afterLoadSuccess(arrangements);
	      return vm.state.debitAccounts.data;
	    }).catch(function (error) {
	      vm.debitAccounts.afterLoadError((0, _message.createAccountsLoadErrorMessage)(error));
	      throw error;
	    });
	  };
	
	  /**
	   * @description
	   * Get credit accounts available based on params provided
	   *
	   * @name Service#getBeneficiaryAccounts
	   * @type {Function}
	   *
	   * @param {Object} params Request parameters and callback
	   * @returns {Promise.<Object>} A Promise with flat accounts list and total number of items
	   */
	  var getBeneficiaryAccounts = function getBeneficiaryAccounts(params) {
	    vm.creditAccounts.beforeLoad();
	
	    return model.getContextArrangements(model.Context[vm.state.payment.type], params.request, true).then(function (response) {
	      vm.creditAccounts.afterLoadSuccessTotals({
	        data: params.overwrite ? response.data : [].concat(_toConsumableArray(vm.state.creditAccounts.data || []), _toConsumableArray(response.data)),
	        totalCount: response.totalCount
	      });
	
	      // modify request params
	      var hasMore = response.data.length > 0 && vm.state.creditAccounts.data.length < response.totalCount;
	
	      if (typeof params.done === 'function') {
	        params.done(hasMore);
	      }
	    }).catch(function (err) {
	      if (typeof params.done === 'function') {
	        params.done(err);
	      }
	
	      vm.creditAccounts.afterLoadError((0, _message.createAccountsLoadErrorMessage)(err));
	      throw err;
	    });
	  };
	
	  /**
	   * @description
	   * Get contacts available based on params provided
	   *
	   * @name Service#getBeneficiaryContacts
	   * @type {Function}
	   *
	   * @param {Object} params Request parameters and callback function
	   * @returns {Promise.<Object>} A Promise with flat contacts list with total items number
	   */
	  var getBeneficiaryContacts = function getBeneficiaryContacts(params) {
	    vm.contacts.beforeLoad();
	
	    return model.getContacts(params.request).then(function (response) {
	      vm.contacts.afterLoadSuccessTotals({
	        data: params.overwrite ? response.data : [].concat(_toConsumableArray(vm.state.contacts.data || []), _toConsumableArray(response.data)),
	        totalCount: response.totalCount
	      });
	
	      // modify request params
	      var hasMore = response.data.length > 0 && vm.state.contacts.data.length < response.totalCount;
	
	      if (typeof params.done === 'function') {
	        params.done(hasMore);
	      }
	    }).catch(function (err) {
	      if (typeof params.done === 'function') {
	        params.done(err);
	      }
	
	      vm.contacts.afterLoadError(err);
	    });
	  };
	
	  /**
	   * @name Service
	   * @type {Object}
	   */
	  return {
	    start: function start() {
	      vm.create.init({
	        hidden: vm.state.preferences.hidden
	      });
	      vm.privileges.setup({
	        configuration: _constants.Privileges,
	        constants: {
	          resource: _constants.Resource,
	          function: model.Context
	        }
	      });
	    },
	
	    getDebitAccounts: getDebitAccounts,
	
	    getCreditAccounts: function getCreditAccounts() {
	      vm.creditAccounts.beforeLoad();
	      var parameters = {
	        creditAccount: true
	      };
	      return model.getContextArrangements(model.Context[vm.state.payment.type], parameters).then(function (arrangements) {
	        vm.creditAccounts.afterLoadSuccess(arrangements);
	        return vm.state.creditAccounts.data;
	      }).catch(function (error) {
	        vm.creditAccounts.afterLoadError((0, _message.createAccountsLoadErrorMessage)(error));
	        throw error;
	      });
	    },
	
	    selectDebitAccount: function selectDebitAccount(account) {
	      vm.debitAccounts.select(account);
	    },
	
	    getContactsByName: function getContactsByName(name) {
	      vm.contacts.beforeLoad();
	      return model.getContactsByName(name).then(function (contacts) {
	        vm.contacts.afterLoadSuccess(contacts);
	        return vm.contacts.getContacts();
	      }).catch(vm.contacts.afterLoadError);
	    },
	
	    setBeneficiary: function setBeneficiary(beneficiary) {
	      if (beneficiary.name) {
	        vm.beneficiary.setName(beneficiary.name);
	      }
	      vm.beneficiary.setPostalAddress(beneficiary.postalAddress);
	      vm.beneficiary.setBank(beneficiary.bank);
	    },
	
	    resetBeneficiary: function resetBeneficiary() {
	      vm.beneficiary.reset();
	    },
	
	    resetPayment: function resetPayment() {
	      vm.create.reset();
	    },
	
	    clearMessages: function clearMessages() {
	      vm.create.clearMessages();
	      vm.draft.clearMessages();
	    },
	
	    createContact: function createContact(contact) {
	      return model.createContact(contact);
	    },
	
	    createPayment: function createPayment(payment) {
	      vm.create.beforeCreate();
	      return model.createPaymentOrder(payment).then(function (response) {
	        if (vm.state.payment.isDraft) {
	          model.deleteDraft(vm.state.payment.data.id);
	        }
	        vm.create.afterCreateSuccess(response.data.status);
	        return response.data;
	      }).catch(function (error) {
	        vm.create.afterCreateError((0, _message.createPaymentErrorMessage)(error));
	        throw error;
	      });
	    },
	
	    updatePayment: function updatePayment(payment) {
	      return model.updatePayment(payment.id, payment).then(function (response) {
	        vm.create.afterCreateSuccess(response.data.status);
	        return response.data;
	      }).catch(function (error) {
	        vm.create.afterCreateError((0, _message.createPaymentErrorMessage)(error));
	        throw error;
	      });
	    },
	
	    approvePayment: function approvePayment(paymentId) {
	      vm.create.beforeApprove();
	      return model.authorizePayment(paymentId).then(vm.create.afterApproveSuccess).catch(function (error) {
	        vm.create.afterApproveError((0, _message.createPaymentErrorMessage)(error));
	        throw error;
	      });
	    },
	
	    saveDraft: function saveDraft(payment) {
	      vm.draft.beforeSave();
	      return model.saveDraft(payment).then(vm.draft.afterSuccesfulSave).then(vm.draft.clonePayment).catch(vm.draft.afterErrorSave);
	    },
	
	    updateDraft: function updateDraft(payment) {
	      vm.draft.beforeSave();
	      return model.editDraft(payment.id, payment).then(vm.draft.clonePayment).catch(vm.draft.afterErrorSave);
	    },
	
	    getRate: function getRate(rateParams) {
	      vm.rate.beforeRequest();
	      return model.getRate(rateParams).then(vm.rate.afterSuccesfulRequest).catch(vm.rate.afterErrorRequest);
	    },
	
	    getCurrencies: function getCurrencies() {
	      vm.currencies.beforeLoad();
	      return model.getCurrencies().then(vm.currencies.afterLoadSuccess).catch(vm.currencies.afterLoadError);
	    },
	
	    /**
	     * @name Service#updateAmount
	     * @description
	     * After to amount has been manually changed, update from amount automatically.
	     *
	     * @type {Function}
	     * @param {Amount} values Calculated from amount based on to amount
	     */
	    updateAmount: function updateAmount(values) {
	      vm.payment.updateAmount(values);
	    },
	
	    /**
	     * @name Service#updateToAmount
	     * @description
	     * After from amount has been manually changed, update to amount automatically.
	     *
	     * @type {Function}
	     * @param {Amount} values Calculated to amount based on from amount
	     */
	    updateToAmount: function updateToAmount(values) {
	      vm.payment.updateToAmount(values);
	    },
	
	    /**
	     * @name Service#updateToAmountByCurrency
	     * @description
	     * After to currency has been manually changed, update to amount automatically.
	     *
	     * @type {Function}
	     * @param {Amount} values Calculated to amount based on from amount
	     */
	    updateToAmountByCurrency: function updateToAmountByCurrency(values) {
	      vm.payment.updateToAmountByCurrency(values);
	    },
	
	    /**
	     * @name Service#updateFromEditChanged
	     * @description
	     * Update from edit changed value,to know if any changed after set up edited payment
	     *
	     * @type {Function}
	     * @param {Boolean} value true/false
	     */
	    updateFromEditChanged: function updateFromEditChanged(value) {
	      return vm.payment.updateFromEditChanged(value);
	    },
	
	    getPermissions: function getPermissions() {
	      vm.privileges.beforeRequest();
	      return bbPermissions.getPermissions(vm.state.privileges.configuration).then(vm.privileges.afterSuccesfulRequest, vm.privileges.afterErrorRequest);
	    },
	
	    setDraftPayment: function setDraftPayment(initialPaymentData) {
	      vm.draft.beforeLoad();
	      getDebitAccounts('').then(function () {
	        vm.create.setPayment(initialPaymentData);
	        vm.draft.clonePayment();
	      });
	    },
	
	    setEditPayment: function setEditPayment(paymentData) {
	      vm.create.reset();
	      vm.create.clearMessages();
	      getDebitAccounts('').then(function () {
	        vm.create.setPayment(paymentData);
	      });
	    },
	
	    deleteDraft: function deleteDraft(id) {
	      return model.deleteDraft(id);
	    },
	
	    show: function show() {
	      return vm.create.show();
	    },
	
	    hide: function hide() {
	      return vm.create.hide();
	    },
	
	    editRole: function editRole() {
	      return vm.state.preferences.editRole;
	    },
	
	    get PaymentType() {
	      return model.PaymentType;
	    },
	
	    paymentHasChanged: function paymentHasChanged() {
	      if (vm.state.payment.isDraft) {
	        return vm.draft.hasChanged();
	      }
	
	      return !shareSameKeyValues(vm.helpers.initialPayment, vm.state.payment.data);
	    },
	
	    showPaymentSelectorConfirmation: function showPaymentSelectorConfirmation(paymentType) {
	      vm.create.showPaymentSelectorConfirmation(paymentType);
	    },
	
	    publishPaymentTypeChange: function publishPaymentTypeChange(paymentType) {
	      bus.publish(_constants.Event.PAYMENT_TYPE_SELECTED, paymentType);
	    },
	
	    publishPaymentEditDone: function publishPaymentEditDone() {
	      return bus.publish(_constants.Event.PAYMENT_EDIT_DONE);
	    },
	
	    publishPaymentEditCanceled: function publishPaymentEditCanceled() {
	      return bus.publish(_constants.Event.PAYMENT_EDIT_CANCELLED);
	    },
	
	    getBeneficiaryAccounts: getBeneficiaryAccounts,
	    getBeneficiaryContacts: getBeneficiaryContacts
	  };
	};
	
	/**
	 * @typedef Amount
	 * @type {Object}
	 * @property {Number} value    - Amount numerical value
	 * @property {String} currency - ISO 4217 currency code
	 */

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createPaymentErrorMessage = exports.createAccountsLoadErrorMessage = undefined;
	
	var _accountsErrorMessage, _paymentErrorMessages;
	
	var _libBbModelErrors = __webpack_require__(148);
	
	var _constants = __webpack_require__(207);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var accountsErrorMessages = (_accountsErrorMessage = {}, _defineProperty(_accountsErrorMessage, _libBbModelErrors.E_AUTH, 'account.model.error.auth'), _defineProperty(_accountsErrorMessage, _libBbModelErrors.E_CONNECTIVITY, 'account.model.error.connectivity'), _defineProperty(_accountsErrorMessage, _libBbModelErrors.E_USER, 'account.model.error.user'), _defineProperty(_accountsErrorMessage, _libBbModelErrors.E_UNEXPECTED, 'account.model.error.unexpected'), _accountsErrorMessage);
	
	var paymentErrorMessages = (_paymentErrorMessages = {}, _defineProperty(_paymentErrorMessages, _libBbModelErrors.E_AUTH, 'payment.model.error.auth'), _defineProperty(_paymentErrorMessages, _libBbModelErrors.E_CONNECTIVITY, 'payment.model.error.connectivity'), _defineProperty(_paymentErrorMessages, _libBbModelErrors.E_USER, 'payment.model.error.user'), _defineProperty(_paymentErrorMessages, _libBbModelErrors.E_UNEXPECTED, 'payment.model.error.unexpected'), _paymentErrorMessages);
	
	/**
	 * @name breachIsShadow
	 * @description
	 * Returns true if the report is "shadow" and false otherwise
	 * @inner
	 *
	 * @param {object[]} report
	 * @returns {boolean}
	 */
	var breachIsShadow = function breachIsShadow() {
	  var report = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  return report.length === 1 && report[0].shadow || report.length > 1 && report.filter(function (item) {
	    return item.shadow === true;
	  }).length === report.length;
	};
	
	/**
	 * @name createPaymentLimitsBreachMessage
	 * @description
	 * Create a view object to show
	 * complex message in case of limits breach
	 *
	 * @inner
	 * @type {function}
	 * @param {module:lib-bb-model-errors.ModelError} modelError Error from the model
	 * @returns {object|null} New payment limits breach error object
	 */
	var createPaymentLimitsBreachMessage = function createPaymentLimitsBreachMessage(modelError) {
	  return modelError[_constants.BreachReport.key] ? {
	    messageKey: breachIsShadow(modelError[_constants.BreachReport.key]) ? _constants.BreachReport.shadowMessageKey : _constants.BreachReport.messageKey,
	    breach: true,
	    shadow: breachIsShadow(modelError[_constants.BreachReport.key]),
	    report: modelError[_constants.BreachReport.key],
	    type: 'danger'
	  } : null;
	};
	
	/**
	 * @description
	 * Create i18n error key from error model based on error message code
	 *
	 * @inner
	 * @type {function}
	 * @param {module:lib-bb-model-errors.ModelError} modelError Error from the model
	 * @returns {object} Accounts load error
	 */
	var createAccountsLoadErrorMessage = exports.createAccountsLoadErrorMessage = function createAccountsLoadErrorMessage(modelError) {
	  return {
	    messageKey: accountsErrorMessages[modelError.code] || accountsErrorMessages[_libBbModelErrors.E_UNEXPECTED],
	    type: 'warning'
	  };
	};
	
	/**
	 * @description
	 * Create i18n error key from error model based on error message code
	 *
	 * @inner
	 * @type {function}
	 * @param {module:lib-bb-model-errors.ModelError} modelError Error from the model
	 * @returns {object} New payment order error
	 */
	var createPaymentErrorMessage = exports.createPaymentErrorMessage = function createPaymentErrorMessage(modelError) {
	  return createPaymentLimitsBreachMessage(modelError) || {
	    messageKey: paymentErrorMessages[modelError.code] || paymentErrorMessages[_libBbModelErrors.E_UNEXPECTED],
	    type: 'warning'
	  };
	};

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name singleTransfer
	 * @description
	 * Single transfer constant
	 *
	 * @type {Object}
	 * @inner
	 */
	var singleTransfer = exports.singleTransfer = {
	  name: 'form.schedule.frequency.once',
	  value: 'ONCE'
	};
	
	/**
	 * @name EndingType
	 * @description
	 * Available payment order ending types
	 *
	 * @type {Object}
	 * @inner
	 */
	var EndingType = exports.EndingType = {
	  NEVER: 'NEVER',
	  ON: 'ON',
	  AFTER: 'AFTER'
	};
	
	/**
	 * @name BreachReport
	 * @description
	 * Limit breach report constants
	 *
	 * @type {Object}
	 * @inner
	 */
	var BreachReport = exports.BreachReport = {
	  key: 'breachReport',
	  messageKey: 'payment.model.error.breach',
	  shadowMessageKey: 'payment.model.error.breach.shadow'
	};
	
	/**
	 * @name SubmitPostActions
	 * @description
	 * Types of actions to perform after submit payment
	 *
	 * @type {SubmitPostActions}
	 * @inner
	 */
	var SubmitPostActions = exports.SubmitPostActions = {
	  NONE: Symbol('NONE'),
	  CREATE: Symbol('CREATE'),
	  APPROVE: Symbol('APPROVE')
	};
	
	/**
	 * @name Resource
	 * @description
	 * Map of resources
	 *
	 * @type {Resource}
	 * @inner
	 */
	var Resource = exports.Resource = {
	  PAYMENTS: 'Payments',
	  CONTACTS: 'Contacts'
	};
	
	/**
	 * @name Privileges
	 * @description
	 * User privileges configuration
	 *
	 * @type {Privilege[]}
	 * @inner
	 */
	var Privileges = exports.Privileges = [{
	  resource: Resource.PAYMENTS,
	  function: 'US Domestic Wire',
	  privileges: ['create', 'approve']
	}, {
	  resource: Resource.PAYMENTS,
	  function: 'US Foreign Wire',
	  privileges: ['create', 'approve']
	}, {
	  resource: Resource.CONTACTS,
	  function: 'Contacts',
	  privileges: ['view']
	}];
	
	/**
	 * @name BENEFICIARY_LOAD_TYPES
	 * @description
	 * Map of beneficiary loading types
	 * @type {Object}
	 */
	var BENEFICIARY_LOAD_TYPES = exports.BENEFICIARY_LOAD_TYPES = {
	  CONTACTS: 'contacts',
	  ACCOUNTS: 'accounts'
	};
	
	/**
	 * @name Event
	 * @description
	 * Widget events
	 * @type {Object}
	 */
	var Event = exports.Event = {
	  PAYMENT_EDIT_DONE: 'bb.event.payment.edit.done',
	  PAYMENT_TYPE_SELECTED: 'widget-bb-initiate-us-payment.payment-type.selected',
	  PAYMENT_EDIT_CANCELLED: 'bb.event.payment.edit.cancelled'
	};
	
	/**
	 * @typedef {Object} SubmitPostActions
	 * @property {String} NONE    - Default empty action
	 * @property {String} CREATE  - Go to create new payment
	 * @property {String} APPROVE - If allowed approve created payment
	 */
	
	/**
	 * @typedef {Object} Resource
	 * @property {String} PAYMENTS - Identifier for payments resource
	 * @property {String} CONTACTS - Identifier for contacts resource
	 */
	
	/**
	 * @typedef {Object} Privilege
	 * @property {String}   resource   - Name of the resource
	 * @property {String}   function   - Business function name
	 * @property {String[]} privileges - Collection of privileges to check
	 *   (read, create, view, execute, approve)
	 */

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _initialState = __webpack_require__(209);
	
	var _initialState2 = _interopRequireDefault(_initialState);
	
	var _create = __webpack_require__(210);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _debitAccounts = __webpack_require__(211);
	
	var _debitAccounts2 = _interopRequireDefault(_debitAccounts);
	
	var _creditAccounts = __webpack_require__(212);
	
	var _creditAccounts2 = _interopRequireDefault(_creditAccounts);
	
	var _contacts = __webpack_require__(213);
	
	var _contacts2 = _interopRequireDefault(_contacts);
	
	var _beneficiary = __webpack_require__(214);
	
	var _beneficiary2 = _interopRequireDefault(_beneficiary);
	
	var _draft = __webpack_require__(215);
	
	var _draft2 = _interopRequireDefault(_draft);
	
	var _privileges = __webpack_require__(216);
	
	var _privileges2 = _interopRequireDefault(_privileges);
	
	var _rate = __webpack_require__(217);
	
	var _rate2 = _interopRequireDefault(_rate);
	
	var _currencies = __webpack_require__(218);
	
	var _currencies2 = _interopRequireDefault(_currencies);
	
	var _payment = __webpack_require__(219);
	
	var _payment2 = _interopRequireDefault(_payment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (vm, hooks) {
	  return {
	    init: vm.createAction(function () {
	      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _initialState2.default)(hooks);
	      var preferences = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      return Object.assign({}, state, {
	        preferences: preferences
	      });
	    }),
	
	    create: (0, _create2.default)(vm, hooks),
	
	    debitAccounts: (0, _debitAccounts2.default)(vm, hooks),
	
	    creditAccounts: (0, _creditAccounts2.default)(vm, hooks),
	
	    contacts: (0, _contacts2.default)(vm, hooks),
	
	    beneficiary: (0, _beneficiary2.default)(vm, hooks),
	
	    draft: (0, _draft2.default)(vm, hooks),
	
	    privileges: (0, _privileges2.default)(vm, hooks),
	
	    rate: (0, _rate2.default)(vm, hooks),
	
	    currencies: (0, _currencies2.default)(vm, hooks),
	
	    payment: (0, _payment2.default)(vm, hooks),
	
	    get state() {
	      return vm.getState();
	    },
	
	    helpers: {
	      initialPayment: (0, _initialState.getInitialPayment)(hooks)
	    }
	  };
	};

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getInitialCounter = exports.getInitialPayment = exports.getInitialToAmount = exports.getInitialAmount = exports.getInitialBeneficiary = undefined;
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _constants = __webpack_require__(207);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getInitialPostalAddress = function getInitialPostalAddress(hooks) {
	  return {
	    addressLine1: null,
	    addressLine2: null,
	    streetName: null,
	    postCode: null,
	    town: null,
	    countrySubDivision: null,
	    country: hooks.defaultCountry()
	  };
	};
	
	var getInitialSchedule = function getInitialSchedule(hooks) {
	  var today = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
	  return {
	    startDate: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0),
	    endDate: new Date(today.getFullYear(), today.getMonth() + 1, today.getDate(), 0, 0, 0),
	    transferFrequency: _vendorBbAngular2.default.copy(_constants.singleTransfer),
	    repeat: hooks.defaultScheduleRepeat()
	  };
	};
	
	var getInitialBeneficiary = exports.getInitialBeneficiary = function getInitialBeneficiary(hooks) {
	  return {
	    name: null,
	    postalAddress: getInitialPostalAddress(hooks),
	    message: null,
	    bank: {
	      name: null,
	      accountNumber: null,
	      accountType: null,
	      code: null,
	      bic: null,
	      postalAddress: getInitialPostalAddress(hooks),
	      message: null
	    },
	    correspondentBank: {
	      name: null,
	      code: null
	    },
	    intermediaryBank: {
	      type: 'SWIFT/BIC',
	      name: null,
	      code: null,
	      bic: null,
	      postalAddress: getInitialPostalAddress(hooks)
	    }
	  };
	};
	
	var getInitialAmount = exports.getInitialAmount = function getInitialAmount(hooks) {
	  return {
	    value: null,
	    currency: hooks.defaultCurrency() || undefined
	  };
	};
	
	var getInitialToAmount = exports.getInitialToAmount = function getInitialToAmount() {
	  return {
	    value: null,
	    currency: undefined
	  };
	};
	
	var getInitialPayment = exports.getInitialPayment = function getInitialPayment(hooks) {
	  return {
	    id: null,
	    amount: getInitialAmount(hooks),
	    toAmount: getInitialToAmount(),
	    debitAccount: null,
	    paymentReference: null,
	    beneficiary: getInitialBeneficiary(hooks),
	    schedule: getInitialSchedule(hooks),
	    endingType: _constants.EndingType.NEVER,
	    urgent: false,
	    exchangeRate: 1
	  };
	};
	
	var getInitialCounter = exports.getInitialCounter = function getInitialCounter() {
	  return {
	    counter: 0,
	    isValid: true
	  };
	};
	
	exports.default = function (hooks) {
	  return {
	    payment: {
	      data: getInitialPayment(hooks),
	      type: hooks.defaultPaymentType(),
	      saveNewContact: false,
	      isDraft: false,
	      createdAt: null,
	      messageToBeneficiaryCounter: getInitialCounter(),
	      messageToBankCounter: getInitialCounter(),
	      isCorrespondentEnabled: false,
	      isIntermediaryEnabled: false,
	      error: null,
	      response: null,
	      loading: false,
	      hidden: true,
	      hasToAmountChanged: false,
	      fromEditChanged: false
	    },
	    review: {
	      isDiscardPaymentPopupOpen: false
	    },
	    form: {
	      isCancelPaymentPopupOpen: false
	    },
	    debitAccounts: {
	      data: null,
	      error: null,
	      loading: false
	    },
	    creditAccounts: {
	      data: null,
	      error: null,
	      loading: false
	    },
	    currencies: {
	      data: null,
	      error: null,
	      loading: false
	    },
	    draft: {
	      deleteConfirmOpened: false,
	      editConfirmOpened: false,
	      data: null,
	      response: null,
	      error: null,
	      loading: false
	    },
	    paymentTypeSelector: {
	      confirmOpened: false,
	      selectedType: null
	    },
	    privileges: {},
	    preferences: {},
	    contacts: {
	      data: null,
	      error: null,
	      loading: false
	    },
	    rate: {
	      data: null,
	      error: null,
	      loading: false
	    },
	    notifications: [],
	    template: '#widget-bb-initiate-us-payment-ng/form.html',
	    route: {
	      name: 'form',
	      params: {}
	    }
	  };
	};

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _initialState = __webpack_require__(209);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	exports.default = function (vm, hooks) {
	  return {
	    init: vm.createAction(function (state, options) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, options)
	      });
	    }),
	
	    reset: vm.createAction(function (state) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          saveNewContact: false,
	          isDraft: false,
	          createdAt: null,
	          messageToBeneficiaryCounter: (0, _initialState.getInitialCounter)(),
	          messageToBankCounter: (0, _initialState.getInitialCounter)(),
	          isCorrespondentEnabled: false,
	          isIntermediaryEnabled: false,
	          hasToAmountChanged: false,
	          data: (0, _initialState.getInitialPayment)(hooks)
	        }),
	        review: Object.assign({}, state.review, {
	          isDiscardPaymentPopupOpen: false
	        })
	      });
	    }),
	
	    show: vm.createAction(function (state) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          hidden: false
	        })
	      });
	    }),
	
	    hide: vm.createAction(function (state) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          hidden: true
	        })
	      });
	    }),
	
	    startCreate: vm.createAction(function (state, debitAccounts) {
	      return Object.assign({}, state, {
	        debitAccounts: debitAccounts
	      });
	    }),
	
	    beforeCreate: vm.createAction(function (state) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          loading: true
	        })
	      });
	    }),
	
	    afterCreateSuccess: vm.createAction(function (state, response) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          response: response,
	          error: null,
	          loading: false
	        })
	      });
	    }),
	
	    afterCreateError: vm.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          error: error,
	          loading: false
	        })
	      });
	    }),
	
	    beforeApprove: vm.createAction(function (state) {
	      return Object.assign({}, state);
	    }),
	
	    afterApproveSuccess: vm.createAction(function (state) {
	      return Object.assign({}, state, {
	        notifications: [].concat(_toConsumableArray(state.notifications), [{ type: 'approve', result: true }])
	      });
	    }),
	
	    afterApproveError: vm.createAction(function (state) {
	      return Object.assign({}, state, {
	        notifications: [].concat(_toConsumableArray(state.notifications), [{ type: 'approve', result: false }])
	      });
	    }),
	
	    clearMessages: vm.createAction(function (state) {
	      return Object.assign({}, state, {
	        notifications: [],
	        payment: Object.assign({}, state.payment, {
	          error: null,
	          response: null
	        })
	      });
	    }),
	
	    saveContact: vm.createSelector(function (state) {
	      return state.payment.saveNewContact;
	    }),
	
	    setPayment: vm.createAction(function (state, payment) {
	      var hasToAmountChanged = Boolean(payment.data.toAmount && payment.data.amount.currency !== hooks.defaultCurrency());
	      var getAmount = function getAmount(amount) {
	        return Object.assign({}, amount || {});
	      };
	      var amount = !hasToAmountChanged ? getAmount(payment.data.amount) : (0, _initialState.getInitialAmount)(hooks);
	      var toAmount = !hasToAmountChanged ? getAmount(payment.data.toAmount) : getAmount(payment.data.amount);
	
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          createdAt: payment.createdAt,
	          isCorrespondentEnabled: Boolean(payment.data.beneficiary && payment.data.beneficiary.correspondentBank),
	          isIntermediaryEnabled: Boolean(payment.data.beneficiary && payment.data.beneficiary.intermediaryBank),
	          hasToAmountChanged: hasToAmountChanged,
	          data: Object.assign({}, state.payment.data, {
	            id: payment.data.id,
	            amount: amount,
	            toAmount: toAmount,
	            debitAccount: payment.data.debitAccount ? _vendorBbAngular2.default.copy(state.debitAccounts.data.find(function (account) {
	              return account.id === payment.data.debitAccount.id;
	            })) : null,
	            paymentReference: payment.data.paymentReference,
	            beneficiary: Object.assign({}, state.payment.data.beneficiary, _vendorBbAngular2.default.copy(payment.data.beneficiary), {
	              postalAddress: Object.assign({}, state.payment.data.beneficiary.postalAddress, payment.data.beneficiary ? _vendorBbAngular2.default.copy(payment.data.beneficiary.postalAddress) : null),
	              bank: Object.assign({}, state.payment.data.beneficiary.bank, payment.data.beneficiary ? _vendorBbAngular2.default.copy(payment.data.beneficiary.bank) : null, {
	                postalAddress: Object.assign({}, state.payment.data.beneficiary.bank.postalAddress, payment.data.beneficiary && payment.data.beneficiary.bank ? _vendorBbAngular2.default.copy(payment.data.beneficiary.bank.postalAddress) : null)
	              }),
	              correspondentBank: Object.assign({}, state.payment.data.beneficiary.correspondentBank, payment.data.beneficiary ? _vendorBbAngular2.default.copy(payment.data.beneficiary.correspondentBank) : null),
	              intermediaryBank: Object.assign({}, state.payment.data.beneficiary.intermediaryBank, payment.data.beneficiary ? _vendorBbAngular2.default.copy(payment.data.beneficiary.intermediaryBank) : null)
	            }),
	            schedule: Object.assign({}, state.payment.data.schedule, _vendorBbAngular2.default.copy(payment.data.schedule)),
	            endingType: payment.data.endingType
	          })
	        })
	      });
	    }),
	
	    hasChanged: vm.createSelector(function (state) {
	      return !_vendorBbAngular2.default.equals((0, _initialState.getInitialPayment)(hooks), state.payment.data);
	    }),
	
	    showPaymentSelectorConfirmation: vm.createAction(function (state, paymentType) {
	      return Object.assign({}, state, {
	        paymentTypeSelector: {
	          confirmOpened: true,
	          selectedType: paymentType
	        }
	      });
	    })
	  };
	};

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (vm, hooks) {
	  return {
	    beforeLoad: vm.createAction(function (state) {
	      return Object.assign({}, state, {
	        debitAccounts: Object.assign({}, state.debitAccounts, {
	          loading: true
	        })
	      });
	    }),
	
	    afterLoadSuccess: vm.createAction(function (state, debitAccounts) {
	      return Object.assign({}, state, {
	        debitAccounts: Object.assign({}, state.debitAccounts, {
	          data: hooks.processDebitAccounts(debitAccounts),
	          error: null,
	          loading: false
	        })
	      });
	    }),
	
	    afterLoadError: vm.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        debitAccounts: Object.assign({}, state.debitAccounts, {
	          error: error,
	          loading: false
	        })
	      });
	    }),
	
	    select: vm.createAction(function (state, account) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          data: Object.assign({}, state.payment.data, {
	            debitAccount: _vendorBbAngular2.default.copy(account)
	          })
	        })
	      });
	    })
	  };
	};

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (vm, hooks) {
	  return {
	    beforeLoad: vm.createAction(function (state) {
	      return Object.assign({}, state, {
	        creditAccounts: Object.assign({}, state.creditAccounts, {
	          loading: true
	        })
	      });
	    }),
	
	    afterLoadSuccess: vm.createAction(function (state, creditAccounts) {
	      return Object.assign({}, state, {
	        creditAccounts: Object.assign({}, state.creditAccounts, {
	          data: hooks.processCreditAccounts(creditAccounts),
	          error: null,
	          loading: false
	        })
	      });
	    }),
	
	    afterLoadSuccessTotals: vm.createAction(function (state, payload) {
	      return Object.assign({}, state, {
	        creditAccounts: Object.assign({}, state.creditAccounts, {
	          data: hooks.processCreditAccounts(payload.data),
	          error: null,
	          loading: false,
	          totalCount: payload.totalCount
	        })
	      });
	    }),
	
	    afterLoadError: vm.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        creditAccounts: Object.assign({}, state.creditAccounts, {
	          error: error,
	          loading: false
	        })
	      });
	    }),
	
	    select: vm.createAction(function (state, account) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          data: Object.assign({}, state.payment.data, {
	            creditAccount: _vendorBbAngular2.default.copy(account)
	          })
	        })
	      });
	    })
	  };
	};

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (vm, hooks) {
	  return {
	    beforeLoad: vm.createAction(function (state) {
	      return Object.assign({}, state, {
	        contacts: Object.assign({}, state.contacts, {
	          error: null,
	          loading: true
	        })
	      });
	    }),
	
	    afterLoadSuccess: vm.createAction(function (state, contacts) {
	      return Object.assign({}, state, {
	        contacts: Object.assign({}, state.contacts, {
	          data: hooks.processContacts(contacts),
	          error: null,
	          loading: false
	        })
	      });
	    }),
	
	    afterLoadSuccessTotals: vm.createAction(function (state, payload) {
	      return Object.assign({}, state, {
	        contacts: Object.assign({}, state.contacts, {
	          data: hooks.processContacts(payload.data),
	          error: null,
	          loading: false,
	          totalCount: payload.totalCount
	        })
	      });
	    }),
	
	    afterLoadError: vm.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        contacts: Object.assign({}, state.contacts, {
	          error: error,
	          loading: false
	        })
	      });
	    }),
	
	    getContacts: vm.createSelector(function (state) {
	      return state.contacts.data;
	    })
	  };
	};

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _initialState = __webpack_require__(209);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (vm, hooks) {
	  return {
	    reset: vm.createAction(function (state) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          saveNewContact: false,
	          data: Object.assign({}, state.payment.data, {
	            beneficiary: (0, _initialState.getInitialBeneficiary)(hooks)
	          })
	        })
	      });
	    }),
	
	    setName: vm.createAction(function (state, name) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          data: Object.assign({}, state.payment.data, {
	            beneficiary: Object.assign({}, state.payment.data.beneficiary, {
	              name: name
	            })
	          })
	        })
	      });
	    }),
	
	    setPostalAddress: vm.createAction(function (state, postalAddress) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          data: Object.assign({}, state.payment.data, {
	            beneficiary: Object.assign({}, state.payment.data.beneficiary, {
	              postalAddress: Object.assign({}, state.payment.data.beneficiary.postalAddress, _vendorBbAngular2.default.copy(postalAddress))
	            })
	          })
	        })
	      });
	    }),
	
	    setBank: vm.createAction(function (state, bank) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          data: Object.assign({}, state.payment.data, {
	            beneficiary: Object.assign({}, state.payment.data.beneficiary, {
	              bank: Object.assign({}, state.payment.data.beneficiary.bank, _vendorBbAngular2.default.copy(bank), {
	                postalAddress: Object.assign({}, state.payment.data.beneficiary.bank.postalAddress, _vendorBbAngular2.default.copy(bank.postalAddress))
	              })
	            })
	          })
	        })
	      });
	    })
	
	  };
	};

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (vm) {
	  return {
	    beforeSave: vm.createAction(function (state) {
	      return Object.assign({}, state, {
	        draft: Object.assign({}, state.draft, {
	          response: null,
	          error: null,
	          loading: true
	        })
	      });
	    }),
	
	    afterSuccesfulSave: vm.createAction(function (state, response) {
	      return Object.assign({}, state, {
	        draft: Object.assign({}, state.draft, {
	          response: response,
	          loading: false
	        })
	      });
	    }),
	
	    afterErrorSave: vm.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        draft: Object.assign({}, state.draft, {
	          error: error,
	          loading: false
	        })
	      });
	    }),
	
	    clearMessages: vm.createAction(function (state) {
	      return Object.assign({}, state, {
	        draft: Object.assign({}, state.draft, {
	          error: null,
	          response: null
	        })
	      });
	    }),
	
	    beforeLoad: vm.createAction(function (state) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          isDraft: true
	        })
	      });
	    }),
	
	    clonePayment: vm.createAction(function (state) {
	      return Object.assign({}, state, {
	        draft: Object.assign({}, state.draft, {
	          data: _vendorBbAngular2.default.copy(state.payment.data)
	        })
	      });
	    }),
	
	    hasChanged: vm.createSelector(function (state) {
	      return !_vendorBbAngular2.default.equals(state.draft.data, state.payment.data);
	    })
	  };
	};

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (vm, hooks) {
	  return {
	    setup: vm.createAction(function (state, privileges) {
	      return Object.assign({}, state, {
	        privileges: Object.assign({}, state.privileges, {
	          configuration: hooks.processPrivileges(privileges)
	        })
	      });
	    }),
	
	    beforeRequest: vm.createAction(function (state) {
	      return Object.assign({}, state, {
	        privileges: Object.assign({}, state.privileges, {
	          response: null,
	          error: null,
	          loading: true
	        })
	      });
	    }),
	
	    afterSuccesfulRequest: vm.createAction(function (state, response) {
	      return Object.assign({}, state, {
	        privileges: Object.assign({}, state.privileges, {
	          response: response,
	          loading: false
	        })
	      });
	    }),
	
	    afterErrorRequest: vm.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        privileges: Object.assign({}, state.privileges, {
	          error: error,
	          loading: false
	        })
	      });
	    })
	
	  };
	};

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (vm, hooks) {
	  return {
	    setup: vm.createAction(function (state, rate) {
	      return Object.assign({}, state, {
	        rate: hooks.processRate(rate)
	      });
	    }),
	
	    beforeRequest: vm.createAction(function (state) {
	      return Object.assign({}, state, {
	        rate: Object.assign({}, state.rate, {
	          data: null,
	          error: null,
	          loading: true
	        })
	      });
	    }),
	
	    afterSuccesfulRequest: vm.createAction(function (state, data) {
	      return Object.assign({}, state, {
	        rate: Object.assign({}, state.rate, {
	          data: data,
	          loading: false
	        })
	      });
	    }),
	
	    afterErrorRequest: vm.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        rate: Object.assign({}, state.rate, {
	          error: error,
	          loading: false
	        })
	      });
	    })
	
	  };
	};

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (vm, hooks) {
	  return {
	    beforeLoad: vm.createAction(function (state) {
	      return Object.assign({}, state, {
	        currencies: Object.assign({}, state.currencies, {
	          error: null,
	          loading: true
	        })
	      });
	    }),
	
	    afterLoadSuccess: vm.createAction(function (state, currencies) {
	      return Object.assign({}, state, {
	        currencies: Object.assign({}, state.currencies, {
	          data: hooks.processCurrencies(currencies),
	          error: null,
	          loading: false
	        })
	      });
	    }),
	
	    afterLoadError: vm.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        currencies: Object.assign({}, state.currencies, {
	          error: error,
	          loading: false
	        })
	      });
	    })
	
	  };
	};

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (vm) {
	  return {
	    updateAmount: vm.createAction(function (state, values) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          hasToAmountChanged: true,
	          data: Object.assign({}, state.payment.data, {
	            amount: Object.assign({}, state.payment.data.amount, values)
	          })
	        })
	      });
	    }),
	
	    updateToAmount: vm.createAction(function (state, values) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          hasToAmountChanged: false,
	          data: Object.assign({}, state.payment.data, {
	            toAmount: Object.assign({}, state.payment.data.toAmount, values)
	          })
	        })
	      });
	    }),
	
	    updateToAmountByCurrency: vm.createAction(function (state, values) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          data: Object.assign({}, state.payment.data, {
	            toAmount: Object.assign({}, state.payment.data.toAmount, values)
	          })
	        })
	      });
	    }),
	
	    updateFromEditChanged: vm.createAction(function (state, value) {
	      return Object.assign({}, state, {
	        payment: Object.assign({}, state.payment, {
	          fromEditChanged: value
	        })
	      });
	    })
	
	  };
	};

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/* global window */
	exports.default = function (stateContainer) {
	  var subscribers = [];
	
	  var setRoute = stateContainer.createAction(function (state, _ref) {
	    var name = _ref.name,
	        params = _ref.params;
	    return Object.assign({}, state, {
	      route: {
	        name: name,
	        params: params
	      }
	    });
	  });
	
	  var notifySubscribers = function notifySubscribers(name, params) {
	    subscribers.forEach(function (subscriber) {
	      subscriber(name, params);
	    });
	  };
	
	  return {
	    goto: function goto(name) {
	      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	      setRoute({ name: name, params: params });
	      notifySubscribers(name, params);
	      window.scrollTo(0, 0);
	    },
	
	    getParams: stateContainer.createSelector(function (state) {
	      return state.route.params;
	    }),
	    getRoute: stateContainer.createSelector(function (state) {
	      return state.route.name;
	    }),
	
	    subscribe: function subscribe(callback) {
	      subscribers = [].concat(_toConsumableArray(subscribers), [callback]);
	      return function () {
	        subscribers = subscribers.filter(function (sub) {
	          return sub !== callback;
	        });
	      };
	    }
	  };
	};

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @name PostActions
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @description
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Actions to be executed after submit a payment
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @type {Object}
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */
	
	
	var _constants = __webpack_require__(207);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	exports.default = function (service, router) {
	  var _postActions;
	
	  var postActions = (_postActions = {}, _defineProperty(_postActions, _constants.SubmitPostActions.NONE, function () {
	    router.goto('review');
	  }), _defineProperty(_postActions, _constants.SubmitPostActions.CREATE, function () {
	    service.resetPayment();
	    router.goto('form');
	  }), _defineProperty(_postActions, _constants.SubmitPostActions.APPROVE, function (_ref) {
	    var _ref2 = _slicedToArray(_ref, 1),
	        paymentId = _ref2[0];
	
	    service.approvePayment(paymentId);
	    router.goto('review');
	  }), _postActions);
	
	  return {
	    /**
	     * @name PostActions#run
	     * @description
	     * It executes the callback configured for the `type` argument
	     * @type {Function}
	     * @param {SubmitPostActions} type Key to access post action callback
	     * @throws {Error} Will throw an error when `type` is not found
	     */
	    run: function run(type) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      if (!(type in postActions)) {
	        throw new Error('There is no \'' + type + '\' configured.');
	      }
	
	      postActions[type](args);
	    },
	
	    /**
	     * @name PostActions#type
	     * @description
	     * Constant keys for post actions
	     * @type {SubmitPostActions}
	     */
	    type: _constants.SubmitPostActions
	  };
	};

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(207);
	
	/**
	 * @name USPaymentController
	 * @ngkey USPaymentController
	 *
	 * @description
	 * Controller used by initiate us payments extensions
	 * - ext-bus-initiate-payment-us-domestic-wire-ng
	 *
	 * @type {Object}
	 */
	exports.default = function (service, router, bus, postActions) {
	  return {
	    /**
	     * @name USPaymentController#$onInit
	     * @description
	     * AngularJS Lifecycle hook used to initialize the controller.
	     * Initializes payment form.
	     * @type {Function}
	     */
	    $onInit: function $onInit() {
	      service.start();
	      service.getPermissions();
	      service.getCurrencies();
	      /** All data for benificiary selector or Eagerly fetched, waiting for ticket DBSA{}
	       * to solve this properly */
	      service.getContactsByName();
	      service.getCreditAccounts();
	    },
	
	
	    /**
	     * @deprecated Since 1.12.0
	     * @name USPaymentController#loadUsDomesticWireDebitAccounts
	     * @description
	     * This method is deprecated and will removed in next major update.
	     * Use loadDebitAccounts instead.
	     * @type {Function}
	     * @param {String} query Text to search for in arrangements
	     * @throws {Error} Will throw an error if `query` is not a String
	     * @returns {Promise} To be fulfilled with arrangements collection
	     */
	    loadUsDomesticWireDebitAccounts: function loadUsDomesticWireDebitAccounts(query) {
	      // eslint-disable-next-line max-len, no-console
	      console.warn('DEPRECATED - This method will removed in next major update. Use loadDebitAccounts instead.');
	
	      if (typeof query !== 'string') {
	        throw new Error('loadDebitAccounts:query is not a string');
	      }
	
	      return service.getDebitAccounts(query.trim());
	    },
	
	
	    /**
	     * @name USPaymentController#loadDebitAccounts
	     * @description
	     * Loads arrangements according to `query` search, if not provided it returns entire
	     * allowed arrangements collection. Result is cached by `query` key, next time same `query` is
	     * requested it will return cached collection
	     * @type {Function}
	     * @param {String} query Text to search for in arrangements
	     * @throws {Error} Will throw an error if `query` is not a String
	     * @returns {Promise} To be fulfilled with arrangements collection
	     */
	    loadDebitAccounts: function loadDebitAccounts(query) {
	      if (typeof query !== 'string') {
	        throw new Error('loadDebitAccounts:query is not a string');
	      }
	
	      return service.getDebitAccounts(query.trim());
	    },
	
	
	    /**
	     * @name USPaymentController#selectDebitAccount
	     * @description
	     * Save selected account to be used as debtor in the payment
	     * @type {Function}
	     * @param {Object} account Account to be selected
	     */
	    selectDebitAccount: function selectDebitAccount(account) {
	      if (account) {
	        service.selectDebitAccount(account);
	      }
	    },
	
	
	    /**
	     * @name USPaymentController#clearPayment
	     * @description
	     * Resets payment form fields
	     * @type {Function}
	     */
	    clearPayment: function clearPayment() {
	      service.resetPayment();
	    },
	
	
	    /**
	     * @name USPaymentController#reviewPayment
	     * @description
	     * Move to review step
	     * @type {Function}
	     */
	    reviewPayment: function reviewPayment() {
	      service.clearMessages();
	      router.goto('review');
	    },
	
	
	    /**
	     * @name USPaymentController#discardPayment
	     * @description
	     * Discard current payment and move to create payment form
	     * @type {Function}
	     */
	    discardPayment: function discardPayment() {
	      service.resetPayment();
	      service.clearMessages();
	      router.goto('form');
	    },
	
	
	    /**
	     * @name USPaymentController#cancelPayment
	     * @description
	     * Cancel payment form with current entered payment filled,
	     * hide widget and publish cancelation event
	     * @type {Function}
	     */
	    cancelPayment: function cancelPayment() {
	      service.resetPayment();
	      service.clearMessages();
	      service.hide();
	      service.publishPaymentEditCanceled();
	    },
	
	
	    /**
	     * @name USPaymentController#editPayment
	     * @description
	     * Move to payment form with current entered payment filled
	     * @type {Function}
	     */
	    editPayment: function editPayment() {
	      service.clearMessages();
	      router.goto('form');
	    },
	
	
	    /**
	     * @name USPaymentController#makePayment
	     * @description
	     * Creates new payment, save the beneficiary if provided and executes post submit actions
	     * after payment has been created succesfully
	     * @type {Function}
	     * @param {MakePaymentArgument} param Object containing baneficiary and payment
	     * @param {PostActions} postAction Type of post action to be executed
	     */
	    makePayment: function makePayment(_ref) {
	      var contact = _ref.contact,
	          payment = _ref.payment;
	      var postAction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : postActions.type.NONE;
	
	      if (contact) {
	        service.createContact(contact);
	      }
	
	      if (service.editRole()) {
	        service.updatePayment(payment).then(function () {
	          router.goto('form');
	          service.hide();
	          service.publishPaymentEditDone();
	        }).catch(function () {});
	      } else {
	        service.createPayment(payment).then(function (response) {
	          postActions.run(postAction, response.id);
	        }).catch(function () {
	          postActions.run(postActions.type.NONE);
	        });
	      }
	    },
	
	
	    /**
	     * @name USPaymentController#saveDraft
	     * @description
	     * Saves current payment as draft and resets payment form
	     * @type {Function}
	     * @param {Object} payment Payment to save as draft
	     */
	    saveDraft: function saveDraft(payment) {
	      service.clearMessages();
	      service.saveDraft(payment).then(function () {
	        service.resetPayment();
	        router.goto('form');
	      });
	    },
	
	
	    /**
	     * @name USPaymentController#selectPaymentType
	     * @description Triggers the selected payment type global event in case there are many
	     * {@link module:widget-bb-initiate-us-payment-ng} in the same page.
	     * It will hide current extension and show selected payment type extension.
	     * @type {Function}
	     * @param {module:model-bb-payment-orders-ng.PaymentType} paymentType Payment type identifier
	     */
	    selectPaymentType: function selectPaymentType(paymentType) {
	      service.resetPayment();
	      bus.publish(_constants.Event.PAYMENT_TYPE_SELECTED, paymentType);
	    },
	
	
	    /**
	     * @name USPaymentController#modalSelectorLoadMore
	     * @type {function}
	     *
	     * @description
	     * Dispatches "load more" request from beneficiary selector
	     *
	     * @param {Object} params
	     */
	    modalSelectorLoadMore: function modalSelectorLoadMore() {
	      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      switch (params.type) {
	        case _constants.BENEFICIARY_LOAD_TYPES.ACCOUNTS:
	          service.getBeneficiaryAccounts(params);
	          break;
	        case _constants.BENEFICIARY_LOAD_TYPES.CONTACTS:
	          service.getBeneficiaryContacts(params);
	          break;
	        default:
	          break;
	      }
	    }
	  };
	};
	
	/**
	 * @typedef {Object} MakePaymentArgument
	 * @property {Object} contact Beneficiary data to be created
	 * @property {Object} payment Payment data to be created
	 */

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.processRate = exports.processPrivileges = exports.defaultScheduleRepeat = exports.defaultPaymentType = exports.defaultCountry = exports.defaultCurrency = exports.processContacts = exports.processCreditAccounts = exports.processDebitAccounts = exports.processCurrencies = undefined;
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name Hooks
	 * @description
	 * Hooks for widget-bb-initiate-us-payment-ng
	 *
	 * @type {Object}
	 */
	
	/**
	 * @name Hooks#processCurrencies
	 * @type {Function}
	 *
	 * @description
	 * Processes currencies array returned from the service
	 *
	 * @param {Object[]} currencies Initial currencies
	 * @returns {Object[]} Processed currencies
	 */
	var processCurrencies = exports.processCurrencies = function processCurrencies(currencies) {
	  return currencies;
	};
	
	/**
	 * @name Hooks#processDebitAccounts
	 * @type {Function}
	 *
	 * @description
	 *
	 * @param {Object[]} currencies Initial debit accounts
	 * @returns {Object[]} Processed debit accounts
	 */
	var processDebitAccounts = exports.processDebitAccounts = function processDebitAccounts(debitAccounts) {
	  return debitAccounts;
	};
	
	/**
	 * @name Hooks#processCreditAccounts
	 * @type {Function}
	 *
	 * @description
	 *
	 * @param {Object[]} creditAccounts
	 * @returns {Object[]} Processed creditAccounts
	 */
	var processCreditAccounts = exports.processCreditAccounts = function processCreditAccounts(creditAccounts) {
	  return creditAccounts;
	};
	
	/**
	 * @name Hooks#processContacts
	 * @type {Function}
	 *
	 * @description
	 *
	 * @param {Object[]} contacts Initial contacts
	 * @returns {Object[]} Processed contacts
	 */
	var processContacts = exports.processContacts = function processContacts(contacts) {
	  return contacts;
	};
	
	/**
	 * @name Hooks#defaultCurrency
	 * @type {Function}
	 *
	 * @description
	 *
	 * @returns {String} Default currency
	 */
	var defaultCurrency = exports.defaultCurrency = function defaultCurrency() {
	  return 'USD';
	};
	
	/**
	 * @name Hooks#defaultCountry
	 * @type {Function}
	 *
	 * @description
	 * Set beneficiary postal address country by default
	 *
	 * @returns {String} Returns the country code, which should either be the empty string or
	 *                   an uppercase ISO 3166 2-letter code
	 */
	var defaultCountry = exports.defaultCountry = function defaultCountry() {
	  return 'US';
	};
	
	/**
	 * @name Hooks#defaultPaymentType
	 * @type {Function}
	 *
	 * @description
	 *
	 * @returns {String} Default payment type
	 */
	var defaultPaymentType = exports.defaultPaymentType = function defaultPaymentType() {
	  return 'US_DOMESTIC_WIRE';
	};
	
	/**
	   * @name Hooks#defaultScheduleRepeat
	   * @type {Function}
	   *
	   * @description
	   * Get the default repeat value of minimum ocurrences
	   *
	   * @returns {Number} Default schedule repeat default value
	   */
	var defaultScheduleRepeat = exports.defaultScheduleRepeat = function defaultScheduleRepeat() {
	  return 1;
	};
	
	/**
	 * @name Hooks#processPrivileges
	 * @description
	 * Allows to modify any property of the configured privileges
	 * @type {Function}
	 *
	 * @param {PrivilegesConfiguration} privileges Base collection of privileges
	 *
	 * @returns {Privilege[]} Processed collection of privileges
	 *
	 * @example
	 * // Privilege collection
	 * [
	 *  {
	 *     resource: 'Payments',
	 *     function: 'US Domestic Wire',
	 *     privileges: ['create', 'approve'],
	 *   },
	 *   {
	 *     resource: 'Contacts',
	 *     function: 'Contacts',
	 *     privileges: ['view'],
	 *   },
	 * ]
	 */
	var processPrivileges = exports.processPrivileges = function processPrivileges(privileges) {
	  var configuration = privileges.configuration,
	      constants = privileges.constants;
	
	  return _vendorBbAngular2.default.copy(configuration).map(function (privilege) {
	    if (privilege.resource === constants.resource.PAYMENTS) {
	      Object.assign(privilege, { function: constants.function.US_DOMESTIC_WIRE });
	    }
	    return privilege;
	  });
	};
	
	/**
	 * @name Hooks#processRate
	 * @type {function}
	 *
	 * @param {number} rate Currency exchange rate
	 * @returns {number} Processed rate
	 */
	var processRate = exports.processRate = function processRate(rate) {
	  return rate;
	};
	
	/**
	 * @typedef {Object} PrivilegesConstants
	 * @property {Resource}                                         resource - Resource map
	 * @property {module:model-bb-payment-orders-ng.PaymentContext} function - Function map
	 */
	
	/**
	  * @typedef {Object} PrivilegesConfiguration
	  * @property {Privilege[]} configuration     - Base collection of privileges
	  * @property {PrivilegesConstants} constants - Allowed values for every privilege
	  */

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-initiate-us-payment-ng.js.map