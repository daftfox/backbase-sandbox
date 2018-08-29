(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("vendor-bb-angular"), require("ui-bb-iban-ng"), require("ui-bbm-textfield-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bbm-beneficiary-select-ng", ["ui-bb-i18n-ng", "vendor-bb-angular", "ui-bb-iban-ng", "ui-bbm-textfield-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-bbm-beneficiary-select-ng"] = factory(require("ui-bb-i18n-ng"), require("vendor-bb-angular"), require("ui-bb-iban-ng"), require("ui-bbm-textfield-ng"));
	else
		root["ui-bbm-beneficiary-select-ng"] = factory(root["ui-bb-i18n-ng"], root["vendor-bb-angular"], root["ui-bb-iban-ng"], root["ui-bbm-textfield-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_45__, __WEBPACK_EXTERNAL_MODULE_49__) {
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

	module.exports = __webpack_require__(179);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_45__;

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_49__;

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbI18nNg = __webpack_require__(3);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbIbanNg = __webpack_require__(45);
	
	var _uiBbIbanNg2 = _interopRequireDefault(_uiBbIbanNg);
	
	var _uiBbmTextfieldNg = __webpack_require__(49);
	
	var _uiBbmTextfieldNg2 = _interopRequireDefault(_uiBbmTextfieldNg);
	
	var _component = __webpack_require__(180);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _controller = __webpack_require__(181);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ui-bbm-beneficiary-select-ng
	 * @description
	 * Credit suggest input mobile UI component
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbmBeneficiarySelectKey from 'ui-bbm-beneficiary-select-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbmBeneficiarySelectKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bbm-beneficiary-select-ng
	 *   name="beneficiary"
	 *   ng-model="$ctrl.payment.to"
	 *   accounts="$ctrl.accountsTo"
	 *   debit-account="$ctrl.payment.to.debitAccount"
	 *   allowCreate="!$ctrl.payment.from || $ctrl.payment.from.externalTransferAllowed"
	 *   on-button-click="ext.helpers.onPaymentToAccountsClick($ctrl)"
	 *   messages="{
	 *     identifierPlaceholder: ('label.beneficiaryIdentifier' | i18n),
	 *     namePlaceholder: ('label.beneficiaryName' | i18n),
	 *   }">
	 * </ui-bbm-beneficiary-select-ng>
	 */
	
	exports.default = _vendorBbAngular2.default.module('ui-bbm-beneficiary-select-ng', [_uiBbI18nNg2.default, _uiBbIbanNg2.default, _uiBbmTextfieldNg2.default]).component('uiBbmBeneficiarySelectNg', _component2.default).controller('controller', ['$element', '$scope', '$timeout', '$document', _controller2.default]).name;

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBBMBeneficiarySelect
	 * @type {Object}
	 *
	 * @property {Array.<AccountsView>} accounts List of accounts to filter and select with user input
	 * @property {boolean} allowCreate Is creating of a new beneficiary allowed
	 * @property {Object} messages Localized messages
	 * @property {Object} debitAccount Debit Account
	 * @property {Beneficiary} ngModel Beneficiary object
	 * @property {function} onButtonClick Handler for button clicks
	 */
	var component = {
	  bindings: {
	    allowCreate: '<',
	    debitAccount: '<',
	    accounts: '<',
	    messages: '<',
	    ngModel: '<',
	    onButtonClick: '&'
	  },
	  controller: 'controller',
	  template: '\n    <div \n      class="bbm-beneficiary-select"\n      data-ng-class="{\n        \'bbm-beneficiary-select-has-focus\': $ctrl.state.activeField,\n        \'bbm-beneficiary-select-has-focus-name\': $ctrl.state.activeField === \'name\',\n        \'bbm-beneficiary-select-has-focus-identifier\': $ctrl.state.activeField === \'identifier\'\n      }"\n      data-role="beneficiary-select">\n      <div class="bbm-beneficiary-select-inner">\n        <div class="bbm-beneficiary-select-name form-group form-group-md">\n          <ui-bbm-textfield-ng\n            data-type="text"\n            data-name="beneficiary-name"\n            data-label="{{ $ctrl.messages.nameLabel }}"\n            data-placeholder="{{ $ctrl.messages.namePlaceholder }}"\n            data-role="beneficiary-select-name"\n            data-ng-model="$ctrl.state.beneficiary.name"\n            data-clear-button="true">\n          </ui-bbm-textfield-ng>\n        </div>\n        <div class="bbm-beneficiary-select-identifier form-group form-group-md">\n          <ui-bbm-textfield-ng\n            data-type="text"\n            data-name="beneficiary-identifier"\n            data-label="{{ $ctrl.messages.identifierLabel }}"\n            data-placeholder="{{ $ctrl.messages.identifierPlaceholder }}"\n            data-role="beneficiary-select-identifier"\n            data-disabled="$ctrl.isIbanDisabled()"\n            data-ng-required="$ctrl.isExternalAccount()"\n            data-ng-model="$ctrl.state.beneficiary.identifier"\n            data-ng-model-options="{ allowInvalid: true }"\n            data-clear-button="true"\n            data-ui-bb-iban-ng>\n            <ng-messages\n              for="$ctrl.identifierModelCtrl.$error"\n              data-ng-show="$ctrl.identifierModelCtrl.$dirty &&\n                            $ctrl.identifierModelCtrl.$touched &&\n                            $ctrl.identifierModelCtrl.$invalid"\n              role="alert">\n              <ng-message\n                when="uiBbIban"\n                data-i18n-key="errors.invalidAccountIBAN">\n              </ng-message>\n              <ng-message\n                when="required"\n                data-i18n-key="errors.requiredAccountIBAN">\n              </ng-message>\n              <ng-message\n                when="sameUiBbIban"\n                data-i18n-key="errors.sameAccountIBAN">\n              </ng-message>\n              <ng-message\n                when="createBeneficiary"\n                data-i18n-key="errors.createBeneficiary">\n              </ng-message>\n            </ng-messages>\n          </ui-bbm-textfield-ng>\n        </div>\n\n        <div \n          class="bbm-beneficiary-select-list"          \n          data-role="beneficiary-select-list"\n          data-ng-if="$ctrl.state.isListOpened">\n          <div class="bbm-list">\n            <div class="bbm-list-group">\n              <ul class="bbm-list-group-items">\n                <li\n                  class="bbm-list-item"\n                  data-role="beneficiary-select-list-item"\n                  data-ng-repeat="account in $ctrl.state.suggestions track by $index"\n                  data-ng-click="$ctrl.onAccountClick(account)">\n                  <div class="bbm-beneficiary-select-account">\n                    <h4\n                      class="bbm-beneficiary-select-account-name"\n                      data-role="beneficiary-select-account-name"\n                      data-ng-bind="$ctrl.getAccountDisplayName(account)">\n                    </h4>\n                    <div\n                      class="bbm-beneficiary-select-account-identifier"\n                      data-ng-if="account.identifier">\n                      <span\n                        class="prevent-ios-click"\n                        data-role="beneficiary-select-account-identifier"\n                        data-ng-bind="account.identifier">\n                      </span>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n        <div class="bbm-beneficiary-select-button">\n          <button\n            class="btn btn-icon"\n            type="button"\n            data-role="beneficiary-select-button"\n            data-ng-click="$ctrl.onButtonClick()"\n            data-ng-hide="$ctrl.isButtonHidden()">\n            <span class="bbm-icon bbm-icon-lg bbm-icon-addressbook fa fa-address-book-o"></span>\n          </button>\n        </div>\n      </div>\n    </div>\n  '
	};
	
	exports.default = component;
	
	/**
	 * @typedef {Object} Beneficiary
	 * @property {string} name Beneficiary name
	 * @property {string} identifier Beneficiary identifier
	 * @property {boolean} isNew If true, the beneficiary was entered by the user manually.
	 *   False indicates that the beneficiary was selected from the list.
	 */

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = controller;
	
	var _utils = __webpack_require__(182);
	
	/**
	 * Field names enumeration
	 * @type {Object}
	 */
	var FieldName = {
	  NAME: 'name',
	  IDENTIFIER: 'identifier'
	};
	
	var IBAN_VALIDATOR_KEY = 'uiBbIban';
	var SAME_ACCOUNT_VALIDATOR_KEY = 'sameUiBbIban';
	
	/**
	 * Component controller
	 */
	function controller($element, $scope, $timeout, $document) {
	  var ctrl = this;
	
	  var applyScope = (0, _utils.safeApply)($scope);
	
	  var nameTextfield = $element.find('ui-bbm-textfield-ng').eq(0);
	  var identifierTextfield = $element.find('ui-bbm-textfield-ng').eq(1);
	
	  var nameInput = nameTextfield.find('input').eq(0);
	  var identifierInput = identifierTextfield.find('input').eq(0);
	
	  var searchIndex = [];
	
	  var blurTimeout = void 0;
	  var hasFocus = false;
	
	  var ibanValidator = void 0;
	
	  /**
	   * ------------------------------------------------------------------------------------
	   * Public state
	   * ------------------------------------------------------------------------------------
	   */
	
	  /**
	   * UI state
	   * @type {Object}
	   */
	  var state = {};
	
	  /**
	   * Name of the active field, when component has focus.
	   * Possible values are 'name', or 'identifier', or empty string if component doesn't have focus.
	   * @type {FieldName}
	   */
	  state.activeField = '';
	
	  /**
	   * Whether the list is opened
	   * @type {boolean}
	   */
	  state.isListOpened = false;
	
	  /**
	   * Selected beneficiary
	   * @type {Object}
	   */
	  state.beneficiary = {};
	
	  /**
	   * List of matching accounts
	   * @type {Array.<Object>}
	   */
	  state.suggestions = [];
	
	  /**
	   * ------------------------------------------------------------------------------------
	   * Inner functions
	   * ------------------------------------------------------------------------------------
	   */
	
	  var closeList = function closeList() {
	    state.isListOpened = false;
	  };
	
	  var getAccountDisplayName = function getAccountDisplayName(account) {
	    return account.alias || account.name || '';
	  };
	
	  var getActiveFieldValue = function getActiveFieldValue() {
	    var value = '';
	
	    if (hasFocus) {
	      value = state.activeField === FieldName.NAME ? ctrl.nameModelCtrl.$viewValue : ctrl.identifierModelCtrl.$viewValue;
	    }
	
	    return value || '';
	  };
	
	  var getSelectedAccount = function getSelectedAccount() {
	    var beneficiary = state.beneficiary;
	
	    if (beneficiary) {
	      return (ctrl.accounts || []).find(function (account) {
	        return beneficiary.identifier === account.identifier;
	      }) || null;
	    }
	
	    return null;
	  };
	
	  var openList = function openList() {
	    state.isListOpened = true;
	  };
	
	  var accountToBeneficiary = function accountToBeneficiary(_ref) {
	    var alias = _ref.alias,
	        name = _ref.name,
	        identifier = _ref.identifier;
	    return {
	      name: String(alias || name),
	      identifier: String(identifier),
	      isNew: false
	    };
	  };
	
	  var setBeneficiary = function setBeneficiary(beneficiaryToSet) {
	    state.beneficiary = beneficiaryToSet;
	    if (ctrl.modelCtrl) {
	      ctrl.modelCtrl.$setViewValue(beneficiaryToSet);
	    }
	  };
	
	  var convertToNewBeneficiary = function convertToNewBeneficiary() {
	    var nameFromInput = String(ctrl.nameModelCtrl.$viewValue);
	
	    setBeneficiary({
	      name: nameFromInput,
	      identifier: '',
	      isNew: true
	    });
	  };
	
	  var convertToNewBeneficiaryIfNeeded = function convertToNewBeneficiaryIfNeeded() {
	    if (ctrl.ngModel && !ctrl.ngModel.isNew) {
	      convertToNewBeneficiary();
	    }
	  };
	
	  var setUntouched = function setUntouched() {
	    if (ctrl.nameModelCtrl) {
	      ctrl.nameModelCtrl.$setUntouched();
	      ctrl.identifierModelCtrl.$setUntouched();
	    }
	  };
	
	  var scrollToTop = function scrollToTop() {
	    /* eslint-disable no-param-reassign */
	    $document[0].body.scrollTop = 0;
	  };
	
	  var setFocus = function setFocus(fieldName) {
	    state.activeField = fieldName;
	    hasFocus = true;
	  };
	
	  var isButtonHidden = function isButtonHidden() {
	    var name = ctrl.nameModelCtrl.$viewValue || '';
	    return state.activeField === FieldName.NAME && name.length > 0;
	  };
	
	  var isNewAccount = function isNewAccount() {
	    return Boolean(state.beneficiary && state.beneficiary.isNew);
	  };
	
	  var isOwnAccount = function isOwnAccount() {
	    if (isNewAccount()) {
	      return false;
	    }
	
	    var selectedAccount = getSelectedAccount();
	    return Boolean(selectedAccount && !selectedAccount.external);
	  };
	
	  var isExternalAccount = function isExternalAccount() {
	    return !isOwnAccount();
	  };
	
	  var isIbanDisabled = function isIbanDisabled() {
	    return isOwnAccount();
	  };
	
	  var isSameAccountSelected = function isSameAccountSelected() {
	    var identifier = ctrl.identifierModelCtrl.$modelValue;
	    return ctrl.debitAccount && ctrl.debitAccount.IBAN === identifier;
	  };
	
	  var isSet = function isSet() {
	    return Boolean(state.beneficiary && state.beneficiary.identifier);
	  };
	
	  var setValidity = function setValidity(validatorKey, isValid) {
	    if (ctrl.modelCtrl) {
	      ctrl.modelCtrl.$setValidity(validatorKey, isValid);
	    }
	  };
	
	  var setIdentifierValidity = function setIdentifierValidity(validatorKey, isValid) {
	    if (ctrl.identifierModelCtrl) {
	      ctrl.identifierModelCtrl.$setValidity(validatorKey, isValid);
	    }
	  };
	
	  var validateIban = function validateIban() {
	    var value = ctrl.identifierModelCtrl.$modelValue;
	    var isValid = isIbanDisabled() || ibanValidator(value);
	
	    setValidity(IBAN_VALIDATOR_KEY, isValid);
	
	    return isValid;
	  };
	
	  var validateSameIban = function validateSameIban() {
	    var isValid = !isSameAccountSelected();
	
	    setValidity(SAME_ACCOUNT_VALIDATOR_KEY, isValid);
	
	    return isValid;
	  };
	
	  var unsetFocus = function unsetFocus() {
	    state.activeField = '';
	    hasFocus = false;
	  };
	
	  var updateListState = function updateListState() {
	    if (getActiveFieldValue()) {
	      openList();
	    } else {
	      closeList();
	    }
	  };
	
	  var updateSuggestions = function updateSuggestions() {
	    var query = getActiveFieldValue();
	    var searchQuery = query.toLowerCase().trim();
	    var accounts = ctrl.accounts || [];
	
	    state.suggestions = accounts.filter(function (account, idx) {
	      return (0, _utils.matches)(searchQuery, searchIndex[idx]);
	    });
	
	    updateListState();
	  };
	
	  var validate = function validate() {
	    var isReady = Boolean(ctrl.ngModel && ctrl.accounts && state.beneficiary);
	    if (isReady) {
	      var createBeneficiaryValidity = true;
	
	      if (isSet() && isNewAccount() && !ctrl.allowCreate) {
	        createBeneficiaryValidity = false;
	      }
	
	      setValidity('createBeneficiary', createBeneficiaryValidity);
	      setIdentifierValidity('createBeneficiary', createBeneficiaryValidity);
	    }
	  };
	
	  var $onChanges = function $onChanges(_ref2) {
	    var accounts = _ref2.accounts,
	        allowCreate = _ref2.allowCreate,
	        ngModel = _ref2.ngModel;
	
	    if (accounts && accounts.currentValue) {
	      searchIndex = (0, _utils.createSearchIndex)(ctrl.accounts);
	    }
	
	    if (ngModel && ctrl.ngModel) {
	      if (ctrl.ngModel !== state.beneficiary) {
	        setBeneficiary(ctrl.ngModel);
	        setUntouched();
	        validate();
	      }
	    }
	
	    if (allowCreate) {
	      validate();
	    }
	  };
	
	  var attachValidator = function attachValidator(key, validatorFn) {
	    ctrl.identifierModelCtrl.$validators[key] = validatorFn;
	  };
	
	  var overrideIbanValidator = function overrideIbanValidator() {
	    ibanValidator = ctrl.identifierModelCtrl.$validators[IBAN_VALIDATOR_KEY];
	    attachValidator(IBAN_VALIDATOR_KEY, validateIban);
	  };
	
	  var bindDomEvents = function bindDomEvents() {
	    var onBlur = function onBlur() {
	      // Zero timeout is used in order to prevent closing the list too early,
	      // when a user taps a suggestion from the dropdown list
	      blurTimeout = $timeout(function () {
	        validate();
	        unsetFocus();
	        closeList();
	      }, 100);
	    };
	
	    nameInput.on('focus', function () {
	      return applyScope(function () {
	        $timeout.cancel(blurTimeout);
	
	        setFocus(FieldName.NAME);
	        scrollToTop();
	        updateSuggestions();
	      });
	    });
	
	    identifierInput.on('focus', function () {
	      return applyScope(function () {
	        $timeout.cancel(blurTimeout);
	
	        setFocus(FieldName.IDENTIFIER);
	        scrollToTop();
	        updateSuggestions();
	      });
	    });
	
	    nameInput.on('blur', onBlur);
	    identifierInput.on('blur', onBlur);
	  };
	
	  var $postLink = function $postLink() {
	    ctrl.modelCtrl = $element.controller('ngModel');
	    ctrl.nameModelCtrl = nameTextfield.controller('ngModel');
	    ctrl.identifierModelCtrl = identifierTextfield.controller('ngModel');
	
	    ctrl.nameModelCtrl.$viewChangeListeners.push(convertToNewBeneficiaryIfNeeded, updateSuggestions);
	
	    ctrl.identifierModelCtrl.$viewChangeListeners.push(updateSuggestions);
	
	    overrideIbanValidator();
	    attachValidator(SAME_ACCOUNT_VALIDATOR_KEY, validateSameIban);
	    bindDomEvents();
	  };
	
	  var onAccountClick = function onAccountClick(account) {
	    setBeneficiary(accountToBeneficiary(account));
	    closeList();
	  };
	
	  /**
	   * ------------------------------------------------------------------------------------
	   * Public API
	   * ------------------------------------------------------------------------------------
	   */
	
	  Object.assign(ctrl, {
	    $onChanges: $onChanges,
	    $postLink: $postLink,
	    getAccountDisplayName: getAccountDisplayName,
	    isButtonHidden: isButtonHidden,
	    isExternalAccount: isExternalAccount,
	    isIbanDisabled: isIbanDisabled,
	    onAccountClick: onAccountClick,
	    state: state
	  });
	}

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Removes whitespaces from a given string
	 * @param {string} str
	 * @returns {string}
	 * @inner
	 */
	var removeWhitespaces = function removeWhitespaces(str) {
	  return str.replace(/\s/g, '');
	};
	
	/**
	 * Creates a search index for the given list of accounts
	 * @param {Array<object>} accounts
	 * @returns {Array<object>}
	 * @inner
	 */
	var createSearchIndex = exports.createSearchIndex = function createSearchIndex(accounts) {
	  return (accounts || []).map(function (account) {
	    var iban = (account.identifier || '').toLowerCase().trim();
	    var name = (account.alias || account.name || '').toLowerCase();
	    return [name, iban, removeWhitespaces(iban)];
	  });
	};
	
	/**
	 * Returns true, if the name of the given account matches
	 * to the given query string. False otherwise.
	 * @param {string} query
	 * @param {Array<string>} accountSearchStrings
	 * @returns {boolean}
	 * @inner
	 */
	var matches = exports.matches = function matches(query, accountSearchStrings) {
	  return query && accountSearchStrings.some(function (str) {
	    return str.includes(query);
	  });
	};
	
	/*
	 * Safe way of calling $scope.$apply function.
	 * $scope.$apply will only be called if application is not in $apply or $digest phase.
	 *
	 * @param {Object} scope Angular Scope object.
	 * @param {string|Function} [exp] An angular expression to be executed.
	 * @inner
	 */
	var safeApply = exports.safeApply = function safeApply(scope) {
	  return function (exp) {
	    var phase = scope.$root && scope.$root.$$phase;
	    if (phase === '$apply' || phase === '$digest') {
	      scope.$eval(exp);
	    } else {
	      scope.$apply(exp);
	    }
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bbm-beneficiary-select-ng.js.map