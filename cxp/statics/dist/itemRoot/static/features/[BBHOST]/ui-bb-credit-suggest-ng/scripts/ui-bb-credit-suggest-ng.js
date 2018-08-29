(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("vendor-bb-angular"), require("ui-bb-iban-ng"), require("ui-bb-avatar-ng"), require("lib-bb-iban"), require("ui-bb-iban-autocomplete-search-ng"), require("vendor-bb-uib-debounce"), require("vendor-bb-uib-position"), require("vendor-bb-uib-typeahead"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-credit-suggest-ng", ["ui-bb-i18n-ng", "vendor-bb-angular", "ui-bb-iban-ng", "ui-bb-avatar-ng", "lib-bb-iban", "ui-bb-iban-autocomplete-search-ng", "vendor-bb-uib-debounce", "vendor-bb-uib-position", "vendor-bb-uib-typeahead"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-credit-suggest-ng"] = factory(require("ui-bb-i18n-ng"), require("vendor-bb-angular"), require("ui-bb-iban-ng"), require("ui-bb-avatar-ng"), require("lib-bb-iban"), require("ui-bb-iban-autocomplete-search-ng"), require("vendor-bb-uib-debounce"), require("vendor-bb-uib-position"), require("vendor-bb-uib-typeahead"));
	else
		root["ui-bb-credit-suggest-ng"] = factory(root["ui-bb-i18n-ng"], root["vendor-bb-angular"], root["ui-bb-iban-ng"], root["ui-bb-avatar-ng"], root["lib-bb-iban"], root["ui-bb-iban-autocomplete-search-ng"], root["vendor-bb-uib-debounce"], root["vendor-bb-uib-position"], root["vendor-bb-uib-typeahead"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_45__, __WEBPACK_EXTERNAL_MODULE_71__, __WEBPACK_EXTERNAL_MODULE_93__, __WEBPACK_EXTERNAL_MODULE_156__, __WEBPACK_EXTERNAL_MODULE_157__, __WEBPACK_EXTERNAL_MODULE_158__, __WEBPACK_EXTERNAL_MODULE_159__) {
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

	module.exports = __webpack_require__(155);

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

/***/ 71:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_71__;

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_93__;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbIbanNg = __webpack_require__(45);
	
	var _uiBbIbanNg2 = _interopRequireDefault(_uiBbIbanNg);
	
	var _uiBbIbanAutocompleteSearchNg = __webpack_require__(156);
	
	var _uiBbIbanAutocompleteSearchNg2 = _interopRequireDefault(_uiBbIbanAutocompleteSearchNg);
	
	var _vendorBbUibDebounce = __webpack_require__(157);
	
	var _vendorBbUibDebounce2 = _interopRequireDefault(_vendorBbUibDebounce);
	
	var _vendorBbUibPosition = __webpack_require__(158);
	
	var _vendorBbUibPosition2 = _interopRequireDefault(_vendorBbUibPosition);
	
	var _vendorBbUibTypeahead = __webpack_require__(159);
	
	var _vendorBbUibTypeahead2 = _interopRequireDefault(_vendorBbUibTypeahead);
	
	var _uiBbAvatarNg = __webpack_require__(71);
	
	var _uiBbAvatarNg2 = _interopRequireDefault(_uiBbAvatarNg);
	
	var _uiBbI18nNg = __webpack_require__(3);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _component = __webpack_require__(160);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _controller = __webpack_require__(162);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ui-bb-credit-suggest-ng
	 * @description
	 * Credit suggest input UI component
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbCreditSuggestKey from 'ui-bb-credit-suggest-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbCreditSuggestKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-credit-suggest-ng
	 *   name="credit"
	 *   data-ng-model="$ctrl.payment.to"
	 *   data-accounts="$ctrl.accountsTo"
	 *   data-iban-validation-classes
	 *   required
	 * ></ui-bb-credit-suggest-ng>
	 */
	
	exports.default = _vendorBbAngular2.default.module('ui-bb-credit-suggest-ng', [_vendorBbUibDebounce2.default, _vendorBbUibPosition2.default, _vendorBbUibTypeahead2.default, _uiBbI18nNg2.default, _uiBbIbanNg2.default, _uiBbIbanAutocompleteSearchNg2.default, _uiBbAvatarNg2.default]).component('uiBbCreditSuggestNg', _component2.default).controller('uiBBCreditSuggestNgController', ['$element', '$attrs', '$filter', '$templateCache', _controller2.default]).name;

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_156__;

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_157__;

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_158__;

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_159__;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(161);
	
	/**
	 * @name uiBBCreditSuggest
	 * @type {object}
	 *
	 * @property {object[]} accounts List of accounts to filter and select with user input
	 * @property {object} messages Localized messages
	 * @property {string} custom-template-id Template ID (or URL)
	 * which will be rendered as an option in dropdown
	 * @property {boolean} allow-external Are external accounts included in list.
	 * If not, IBAN field stays disabled
	 * @property {boolean} hide-account-number
	 * Hides account number (bban) and searching by bban functionality
	 * @property {function} get-accounts
	 * External method for transform accounts array into custom structure
	 * Can be defined in extensions helpers
	 * @property {void} iban-validation-classes Append has-success and has-error classes
	 * to IBAN field on validation
	 * @property {?String} formatAmountTemplateUrl Custom template url for popup element.
	 */
	var component = {
	  bindings: {
	    accounts: '<',
	    /**
	     * @description
	     * List of messages to be shown by component
	     *
	     * @name uiBBCreditSuggest#messages
	     * @type {object} messages
	     */
	    messages: '<',
	    /**
	     * @description
	     * Template ID (or URL) which will be rendered
	     * as an option in dropdown
	     *
	     * @name uiBBCreditSuggest#customTemplateId
	     * @type {string} customTemplateId
	     */
	    customTemplateId: '@',
	    allowExternal: '<',
	    getAccounts: '&',
	    formatAmountTemplateUrl: '@?',
	    hideAccountNumber: '<?',
	    config: '<',
	    modalSelectorContacts: '<',
	    modalSelectorAccounts: '<',
	    modalSelectorLoadMore: '&',
	    form: '<'
	  },
	  controller: 'uiBBCreditSuggestNgController',
	  template: '\n    <div class="credit-suggest has-feedback">\n      <div class="form-group"\n        data-ng-class="{ \'is-invalid\': $ctrl.form.creditName.$error.required &&\n          $ctrl.form.showSpecialValidationMessages }">\n        <label data-i18n-key="form.label.name"></label>\n        <span data-i18n-key="form.label.required" class="text-muted"></span>\n        <div class="input-group col-12 p-0">\n\n          <ui-bb-autocomplete-search-ng\n            name="creditName"\n            class="col-12 p-0"\n            data-ng-required="true"\n            data-label-key="name"\n            data-ng-model="$ctrl.searchModel.name"\n            data-search-min-length="$ctrl.config.searchMinLength"\n            data-load-result="$ctrl.filterAccounts(options, \'name\')"\n            data-ng-model-options="{\n              getterSetter: true,\n              allowInvalid: true\n            }"\n            data-on-select="$ctrl.selectedSetter($model)"\n            data-on-clear="$ctrl.clearSelected()"\n            data-search-box-config="{\n              labels: { placeholder: $ctrl.messages.filterPlaceholder },\n              iconClasses: $ctrl.config.isModal ? \'fa fa-address-book\' : \'fa fa-chevron-down\',\n              submitSearchCustom: $ctrl.config.isModal,\n            }"\n            data-submit-search-custom="$ctrl.toggleModalSelector()"\n            data-match-template-url="ui-bb-credit-suggest-ng/autocomplete_match_custom.html"\n            data-messages="{\n                result: $ctrl.messages.oneResultFound,\n                results: $ctrl.messages.resultsFound\n              }"\n            data-role="ui-bb-credit-suggest-ng-name">\n          </ui-bb-autocomplete-search-ng>\n          \n          <div data-ng-show="$ctrl.form.showSpecialValidationMessages"\n               data-ng-messages="$ctrl.form.creditName.$error" role="alert" class="text-danger">\n            <div data-ng-message="required" data-i18n-key="form.error.required"\n                 data-role="ext-bus-initiate-payment-ng-credit-name-required-error"></div>\n          </div>\n          \n          <ui-bb-char-counter-ng\n            data-state="$ctrl.nameCreditCounterState"\n            data-config="{ blockTyping: true,\n              maxChars: 140, initStyling: \'d-none\' }"\n            data-text-el-query="ui-bb-autocomplete-search-ng[data-label-key=name] input">\n          </ui-bb-char-counter-ng>\n\n          <!-- Modal beneficiary select -->\n          <ui-bus-beneficiary-select-modal-ng\n            data-ng-if="$ctrl.config.isModal"\n            data-is-open="$ctrl.isModalSelectorOpen"\n            data-on-select="$ctrl.selectedSetter(account)"\n            data-load-more="$ctrl.modalSelectorLoadMore({params})"\n            data-contacts="$ctrl.modalSelectorContacts"\n            data-accounts="$ctrl.modalSelectorAccounts"\n            data-config="{\n             labels: {\n               headerText: $ctrl.messages.modalHeaderText,\n               contactsTab: $ctrl.messages.modalContactsTab,\n               ownAccountsTab: $ctrl.messages.modalOwnAccountsTab,\n               noSearchResults: $ctrl.messages.modalNoSearchResults,\n               placeholderContacts: $ctrl.messages.modalPlaceholderContacts,\n               placeholderAccounts: $ctrl.messages.modalPlaceholderAccounts,\n               outOf: $ctrl.messages.modalOutOf,\n             },\n             pageSize: $ctrl.config.modalPageSize,\n            }"\n          >\n          </ui-bus-beneficiary-select-modal-ng>\n\n        </div>\n      </div>\n      <div class="form-group"\n           data-ng-class="{ \'is-invalid\': $ctrl.form.creditIban.$error.required &&\n             $ctrl.form.showSpecialValidationMessages || $ctrl.form.credit.$error.iban }">\n        <label data-i18n-key="form.label.iban"></label>\n        <span data-i18n-key="form.label.required" class="text-muted"></span>\n        <ui-bb-iban-autocomplete-search-ng\n          name="creditIban"\n          data-ng-required="!$ctrl.searchModel.BBAN"\n          data-label-key="IBAN"\n          data-disabled="$ctrl.searchModel.BBAN"\n          data-search-min-length="3"\n          data-ng-model="$ctrl.searchModel.IBAN"\n          data-ng-model-options="{\n            getterSetter: true,\n            allowInvalid: false\n          }"\n          data-load-result="$ctrl.filterAccounts(options, \'iban\')"\n          data-on-select="$ctrl.selectedSetter($model)"\n          data-on-clear="$ctrl.clearSelected()"\n          data-search-box-config="{\n             showIcon : false,\n             hideButton : true,\n             maxlength: 44,\n             inputClasses: \'initialism\',\n             labels: { placeholder: $ctrl.messages.accountPlaceholder },\n           }"\n          data-match-template-url="ui-bb-credit-suggest-ng/autocomplete_match_custom.html"\n          data-messages="{\n              result: $ctrl.messages.oneResultFound,\n              results: $ctrl.messages.resultsFound,\n              noResults: $ctrl.messages.noResultsFound,\n          }"\n          data-role="ui-bb-credit-suggest-ng-iban">\n        </ui-bb-iban-autocomplete-search-ng>\n\n        <div data-ng-messages="$ctrl.form.credit.$error" role="alert" class="text-danger">\n          <div data-ng-message="iban" data-i18n-key="form.credit.iban"\n            data-role="ext-bus-initiate-payment-ng-form-creditor-iban-error-message"></div>\n          <div data-ng-message="credit" data-i18n-key="form.credit.select"\n            data-role="ext-bus-initiate-payment-ng-form-creditor-select-error-message"></div>\n        </div>\n        <div data-ng-show="$ctrl.form.showSpecialValidationMessages"\n          data-ng-messages="$ctrl.form.creditIban.$error" role="alert" class="text-danger">\n          <div data-ng-message="required" data-i18n-key="form.error.required"\n            data-role="ext-bus-initiate-payment-ng-form-credit-name-required-error"></div>\n        </div>\n        \n        <ui-bb-char-counter-ng\n          data-state="$ctrl.ibanCreditCounterState"\n          data-config="{ blockTyping: true,\n            maxChars: 34, excludeSpaces: true, initStyling: \'d-none\' }"\n          data-text-el-query="ui-bb-iban-autocomplete-search-ng[data-label-key=IBAN] input">\n        </ui-bb-char-counter-ng>\n        \n      </div>\n      <div class="form-group"\n        data-ng-if="!$ctrl.hideAccountNumber">\n        <label data-i18n-key="form.label.accountnumber"></label>\n        <ui-bb-autocomplete-search-ng\n          data-ng-required="!$ctrl.searchModel.IBAN"\n          data-disabled="$ctrl.searchModel.IBAN"\n          data-label-key="BBAN"\n          data-ng-model="$ctrl.searchModel.BBAN"\n          data-ng-model-options="{\n            getterSetter: true,\n            allowInvalid: true\n          }"\n          data-load-result="$ctrl.filterAccounts(options, \'bban\')"\n          data-on-select="$ctrl.selectedSetter($model)"\n          data-on-clear="$ctrl.clearSelected()"\n          data-search-box-config="{\n            showIcon : false,\n            hideButton : true,\n            labels: { placeholder: $ctrl.messages.accountnumberPlaceholder },\n            forcedSubmit: false,\n          }"\n          data-match-template-url="ui-bb-credit-suggest-ng/autocomplete_match_custom.html"\n          data-messages="{\n            result: $ctrl.messages.oneResultFound,\n            results: $ctrl.messages.resultsFound\n          }"\n          data-role="ui-bb-credit-suggest-ng-account-number">\n        </ui-bb-autocomplete-search-ng>\n\n      </div>\n    </div>\n\n    <script type="text/ng-template" id="ui-bb-credit-suggest-ng/autocomplete_match_custom.html">\n      <!-- Group Name / Header -->\n      <p\n        class="h6 m-0"\n        data-ng-if="match.model.group"\n        data-ng-bind-html="match.model.group"\n        data-role="ui-bb-credit-suggest-ng-search-result-header">\n      </p>\n\n      <!-- List item content -->\n      <div class="row" data-ng-if="!match.model.group">\n        <div class="col-8">\n          <span\n            data-ng-if="match.model.name"\n            data-ng-bind-html="match.model.filteredBy == \'name\' ?\n            (match.model.name | uibTypeaheadHighlight:query) : match.model.name"\n            data-role="ui-bb-credit-suggest-ng-search-result-account-name"\n            class="text-truncate">\n          </span>\n          <span data-ng-if="match.model.accountName"> &mdash; \n            <span data-ng-bind-html="match.model.accountName | uibTypeaheadHighlight:query"></span>\n          </span>\n\n          <div\n            data-ng-bind-html="match.model.filteredBy === \'iban\'\n            || match.model.filteredBy === \'bban\' ?\n            (match.model.formatIban(match.model.identifier) | uibTypeaheadHighlight:query) : \n            match.model.formatIban(match.model.identifier)"\n            data-role="ui-bb-credit-suggest-ng-search-result-iban"\n            class="text-truncate text-muted">\n          </div>\n        </div>\n\n        <div\n          class="col-4 d-flex align-items-center justify-content-end"\n          data-ng-if="match.model.amount" >\n          <div\n            class="text-primary"\n            data-ng-include="\'' + _constants.FORMAT_AMOUNT_TEMPLATE_URL + '\'"\n            data-ng-init="$option=match.model">\n          </div>\n        </div>\n      </div>\n\n      <!-- More items indicator -->\n      <div\n        class="text-center py-1"\n        data-ng-if="match.model.more"\n        data-ng-bind-html="match.model.more">\n      </div>\n    </script>\n\n    <script type="text/ng-template" id="' + _constants.FORMAT_AMOUNT_TEMPLATE_URL + '">\n      <ui-bb-format-amount\n        class="float-right search-result-ammount"\n        data-amount="$option.amount"\n        data-currency="$option.currency"\n        data-wrap>\n      </ui-bb-format-amount>\n    </script>\n  '
	};
	
	exports.default = component;

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var FORMAT_AMOUNT_TEMPLATE_URL = exports.FORMAT_AMOUNT_TEMPLATE_URL = 'ui-bb-credit-suggest-ng/format-amount-template.html';
	
	/**
	 * @name BENEFICIARY_LIST_SIZE
	 * @type {number}
	 * @description
	 * Max number of item that should be visible in beneficiary account seleter listbox
	 */
	var BENEFICIARY_LIST_SIZE = exports.BENEFICIARY_LIST_SIZE = 10;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = controller;
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbIban = __webpack_require__(93);
	
	var _constants = __webpack_require__(161);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* globals document */
	
	
	/**
	 * @name uiBbCreditSuggestController
	 * @ngkey uiBbCreditSuggestController
	 * @type {object}
	 * @description
	 * Credit suggest component controller.
	 */
	function controller($element, $attrs, $filter, $templateCache) {
	  var i18nFilter = $filter('i18n');
	
	  var GroupName = {
	    INTERNAL: i18nFilter('ui-bb-credit-suggest-ng.group.internal'),
	    EXTERNAL: i18nFilter('ui-bb-credit-suggest-ng.group.external')
	  };
	
	  var ctrl = {};
	
	  var EMPTY_VALUE = {
	    name: '',
	    bban: '',
	    iban: '',
	    isNew: true
	  };
	
	  var ngModelCtrl = $element.controller('ngModel');
	  var ibanInput = $element.find('input').eq(1);
	
	  var isMyAccount = function isMyAccount(identifier) {
	    return ctrl.accounts && !!ctrl.accounts.find(function (acc) {
	      return !acc.external && acc.identifier === identifier;
	    });
	  };
	
	  /**
	   * @description
	   * Checks if iban should be validated, and if so, sets the result on model.
	   *
	   * @name uiBbCreditSuggestController#validateIban
	   * @inner
	   * @param {string} iban to be validated
	   * @type {function} validateIban
	   */
	  var validateIban = function validateIban() {
	    var isIbanFocused = $element[0].querySelector('input:focus') === ibanInput[0];
	    /* ctrl.searchmodel.IBAN is not reflecting the current state of the IBAN value in all cases,
	       so grap by value */
	    var iban = ibanInput[0].value;
	
	    var isValid = !iban || isIbanFocused || isMyAccount(iban) || (0, _libBbIban.isValidIBAN)(iban);
	
	    ngModelCtrl.$setValidity('iban', isValid);
	    return isValid;
	  };
	
	  var filterByAccountOrContactName = function filterByAccountOrContactName(list, search) {
	    return list.filter(function (it) {
	      return it.name && it.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 || it.contactPerson && it.contactPerson.toLowerCase().indexOf(search.toLowerCase()) !== -1 || it.accountName && it.accountName.toLowerCase().indexOf(search.toLowerCase()) !== -1;
	    });
	  };
	
	  var filterByIban = function filterByIban(list, search) {
	    return list.filter(function (item) {
	      return item.IBAN && item.IBAN.toLowerCase().replace(/\s/g, '').indexOf(search.toLowerCase().replace(/\s/g, '')) !== -1;
	    });
	  };
	
	  var filterByBban = function filterByBban(list, search) {
	    return list.filter(function (item) {
	      return !item.IBAN && item.BBAN && item.BBAN.toLowerCase().replace(/\s/g, '').indexOf(search.toLowerCase().replace(/\s/g, '')) !== -1;
	    });
	  };
	
	  /**
	   * @description
	   * Restructure the normalized accounts' list by adding an extra item to that list
	   * just before the start of each group of accounts,that extra item
	   * represents the group like the following
	   *
	   * So:
	   *  [
	   *    {name: 'Joost', id:'1', external: true},
	   *    {name: 'SomeInternal', id:'3'},
	   *    {name: 'Joost', id:'4', external: true}
	   *  ]
	   *
	   * Will be:
	   *  [
	   *    {group: 'GroupName.INTERNAL'} // start of the INTERNAL group
	   *    {name: 'SomeInternal', id:'3'},
	   *    {group: 'GroupName.EXTERNAL'} // start of the EXTERNAL group
	   *    {name: 'Joost', id:'1'},
	   *    {name: 'Joost', id:'4'},
	   *  ]
	   *
	   * @name uiBbCreditSuggestController#addGroupHeaders
	   * @inner
	   * @param {array} normalisedAccounts
	   * @param {number} totalItemsCount
	   * @type {function} addGroupHeaders
	   */
	  var addGroupHeaders = function addGroupHeaders(normalisedAccounts, totalItemsCount) {
	    // accounts without external:true are considered internal
	    var internalGroup = normalisedAccounts.filter(function (account) {
	      return !account.external;
	    });
	
	    if (internalGroup.length) {
	      internalGroup = [{ group: GroupName.INTERNAL }].concat(_toConsumableArray(internalGroup));
	    }
	
	    var externalGroup = normalisedAccounts.filter(function (account) {
	      return account.external;
	    });
	    // sort on name then within that on accountName. Two statements for readability
	    if (externalGroup.length) {
	      externalGroup.sort(function (a, b) {
	        return a.name < b.name ? -1 : 1;
	      });
	      externalGroup.sort(function (a, b) {
	        if (a.name === b.name) {
	          if (a.accountName < b.accountName) return -1;
	          return 1;
	        }
	        return 0;
	      });
	    }
	
	    if (externalGroup.length) {
	      externalGroup = [{ group: GroupName.EXTERNAL }].concat(_toConsumableArray(externalGroup));
	    }
	
	    var list = [].concat(_toConsumableArray(internalGroup), _toConsumableArray(externalGroup));
	
	    // add extra item as indicator for more results
	    if (totalItemsCount > _constants.BENEFICIARY_LIST_SIZE) {
	      list.push({
	        more: i18nFilter('ui-bb-credit-suggest-ng.group.more', {
	          count: totalItemsCount - _constants.BENEFICIARY_LIST_SIZE // count remaining items
	        })
	      });
	    }
	
	    return list;
	  };
	
	  /**
	   * @description
	   * Filters accounts by name
	   * Called by the uiBBAutocomplete load-result - uses as a data composer for accounts
	   *
	   * @name uiBbCreditSuggestController#filterAccounts
	   * @type {function}
	   * @param {object} options as provided by uiBBAutocomplete, we only use searchQuery prop
	   * @param {string} filterBy specifies which field triggers filtering (name, iban or bban).
	   * @param {number} [size=10] - Number of returned items
	   */
	  var filterAccounts = function filterAccounts(options, filterBy) {
	    var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
	
	    if (options && options.searchQuery) {
	      var normalisedAccounts = ctrl.getAccounts({ accounts: ctrl.accounts }) || ctrl.accounts;
	
	      var filteredAccounts = void 0;
	      if (filterBy === 'iban') {
	        filteredAccounts = filterByIban(normalisedAccounts, options.searchQuery);
	      } else if (filterBy === 'bban') {
	        filteredAccounts = filterByBban(normalisedAccounts, options.searchQuery);
	      } else {
	        filteredAccounts = filterByAccountOrContactName(normalisedAccounts, options.searchQuery);
	      }
	
	      filteredAccounts.forEach(function (item) {
	        return Object.assign(item, {
	          filteredBy: filterBy,
	          formatIban: function formatIban(acc) {
	            return (0, _libBbIban.isValidIBAN)(acc) ? (0, _libBbIban.formatByGroups)(acc) : acc;
	          }
	        });
	      });
	      return Promise.resolve({
	        totalItems: filteredAccounts.length,
	        data: addGroupHeaders(filteredAccounts.slice(0, size), filteredAccounts.length)
	      });
	      // eslint-disable-next-line no-else-return
	    } else {
	      var _normalisedAccounts = ctrl.getAccounts({ accounts: ctrl.accounts }) || ctrl.accounts;
	      return Promise.resolve({
	        totalItems: _normalisedAccounts.length,
	        data: addGroupHeaders(_normalisedAccounts.slice(0, size), _normalisedAccounts.length)
	      });
	    }
	  };
	
	  /**
	  * @description
	  * Clears the selected beneficiary account
	  *
	  * @name uiBbCreditSuggestController#$clearSelected
	  * @inner
	  * @type {function} clearSelected
	  */
	  var clearSelected = function clearSelected() {
	    ctrl.selected = Object.assign({}, EMPTY_VALUE);
	    ctrl.searchModel = {
	      name: null,
	      IBAN: null,
	      BBAN: null
	    };
	  };
	
	  /**
	   * @name uiBbCreditSuggestController#isSearchModelEmpty
	   * @inner
	   * @description
	   * Checks if the search model is empty
	   *
	   * @param {Object} searchModel Search model reference
	   * @returns {boolean}
	   */
	  var isSearchModelEmpty = function isSearchModelEmpty(searchModel) {
	    return !searchModel.name && !searchModel.IBAN && !searchModel.BBAN;
	  };
	
	  /**
	   * @name uiBbCreditSuggestController#setSearchModelValue
	   * @inner
	   * @description
	   * Sets search model with new values
	   *
	   * @param {Object} newValue New search model object
	   */
	  var setSearchModelValue = function setSearchModelValue(newValue) {
	    if (newValue.IBAN || ctrl.hideAccountNumber) {
	      ctrl.searchModel.IBAN = newValue.IBAN;
	      ctrl.searchModel.BBAN = '';
	    } else {
	      ctrl.searchModel.BBAN = newValue.BBAN;
	      ctrl.searchModel.IBAN = '';
	    }
	    ctrl.searchModel.name = newValue.name;
	  };
	
	  /**
	   * @description
	   * Default angular function running on digest cycle
	   * Applies selected credit to model.
	   *
	   * @name uiBbCreditSuggestController#$doCheck
	   * @type {function} $doCheck
	   */
	  var $doCheck = function $doCheck() {
	    var selected = ctrl.selected;
	
	    /* IBAN could be set from autosearch selection callback, manually by user, via clear
	       function or could be initially set via edit drafs/edit payment. So on-blur is not enough,
	       and the on-change call is not working icw the ui-bb-autocomplete-search-ng component so
	       include this cheap check action within every cycle.
	    */
	    validateIban();
	
	    if (selected) {
	      if (isSearchModelEmpty(ctrl.searchModel)) {
	        setSearchModelValue(selected);
	      } else {
	        selected.IBAN = ctrl.searchModel.IBAN ? ctrl.searchModel.IBAN : '';
	        selected.BBAN = ctrl.searchModel.BBAN ? ctrl.searchModel.BBAN : '';
	        selected.identifier = ctrl.searchModel.IBAN === null ? selected.identifier : ctrl.searchModel.IBAN.replace(/\s+/g, '') || ctrl.searchModel.BBAN && ctrl.searchModel.BBAN.replace(/\s+/g, '');
	        ctrl.selected.name = ctrl.searchModel.name === null ? selected.name : ctrl.searchModel.name;
	      }
	    } else {
	      ngModelCtrl.$setPristine();
	      clearSelected();
	    }
	
	    ngModelCtrl.$setViewValue(selected);
	  };
	
	  /**
	   * @description
	   * Sets the beneficiary account
	   *
	   * @name uiBbCreditSuggestController#$selectedSetter
	   * @type {function} selectedSetter
	   */
	  var selectedSetter = function selectedSetter(newValue) {
	    if (newValue || (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object') {
	      ctrl.selected = Object.assign({}, newValue);
	      setSearchModelValue(newValue);
	
	      setTimeout(function () {
	        // Trigger IBAN format on item select (via DOM event)
	        ibanInput.triggerHandler('keyup');
	
	        // Close dropdown on select - in case of program selecting (draft)
	        _vendorBbAngular2.default.element(document).triggerHandler('click');
	      });
	    }
	
	    return ctrl.selected;
	  };
	
	  /**
	   * @description
	   * Called after this controller's element and its children have been linked
	   * Initialize necessary functionality
	   *
	   * @name uiBbCreditSuggestController#$postLink
	   * @type {function} $postLink
	   */
	  var $postLink = function $postLink() {
	    if (ctrl.formatAmountTemplateUrl) {
	      var formatAmountTemplate = $templateCache.get(ctrl.formatAmountTemplateUrl);
	      $templateCache.put(_constants.FORMAT_AMOUNT_TEMPLATE_URL, formatAmountTemplate);
	    }
	  };
	
	  /**
	   * @description
	   * Called after in case of binding changes
	   *
	   * @name uiBbCreditSuggestController#$onChanges
	   * @type {function} $onChanges
	   */
	  var $onChanges = function $onChanges() {
	    if (ctrl.selected && ctrl.accounts) {
	      var isListed = ctrl.accounts.filter(function (item) {
	        return item.name === ctrl.selected.name && (item.identifier === ctrl.selected.IBAN || item.identifier === ctrl.selected.BBAN || item.accounts && item.accounts.length && item.accounts.filter(function (acc) {
	          return acc.identifier === ctrl.selected.IBAN || acc.identifier === ctrl.selected.BBAN;
	        }));
	      }).length;
	
	      if (isListed) {
	        selectedSetter(ctrl.selected);
	      }
	    }
	  };
	
	  /**
	   * @description
	   * Toggle modal selector popup visibility (show/hide)
	   *
	   * @name uiBbCreditSuggestController#toggleModalSelector
	   * @type {function}
	   */
	  var toggleModalSelector = function toggleModalSelector() {
	    ctrl.isModalSelectorOpen = !ctrl.isModalSelectorOpen;
	  };
	
	  ngModelCtrl.$formatters.push(function (credit) {
	    ctrl.selected = credit;
	  });
	
	  Object.assign(ctrl, {
	    // models
	    /**
	     * @name uiBbCreditSuggestController#selected
	     * @type {AccountView} selected
	     */
	    selected: undefined,
	    searchModel: {},
	    selectedSetter: selectedSetter,
	
	    // methods
	    $postLink: $postLink,
	    $doCheck: $doCheck,
	    $onChanges: $onChanges,
	    filterAccounts: filterAccounts,
	    validateIban: validateIban,
	    clearSelected: clearSelected,
	    toggleModalSelector: toggleModalSelector,
	
	    // flags
	    filterInFocus: false,
	    ibanInFocus: false,
	    markIbanStatus: false,
	    isModalSelectorOpen: null
	  });
	
	  return ctrl;
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-credit-suggest-ng.js.map