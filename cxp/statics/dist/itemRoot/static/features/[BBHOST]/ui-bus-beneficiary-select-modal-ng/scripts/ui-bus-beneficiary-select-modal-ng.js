(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-iban"), require("ui-bb-list-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bus-beneficiary-select-modal-ng", ["vendor-bb-angular", "lib-bb-iban", "ui-bb-list-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-bus-beneficiary-select-modal-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-iban"), require("ui-bb-list-ng"));
	else
		root["ui-bus-beneficiary-select-modal-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-iban"], root["ui-bb-list-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_93__, __WEBPACK_EXTERNAL_MODULE_184__) {
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

	module.exports = __webpack_require__(183);

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_93__;

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbListNg = __webpack_require__(184);
	
	var _uiBbListNg2 = _interopRequireDefault(_uiBbListNg);
	
	var _component = __webpack_require__(185);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _controller = __webpack_require__(187);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _vendorBbAngular2.default.module('ui-bus-beneficiary-select-modal-ng', [_uiBbListNg2.default]).component('uiBusBeneficiarySelectModalNg', _component2.default).controller('uiBusBeneficiarySelectModalNgController', ['$scope', '$timeout', _controller2.default]).filter('searchFilter', function () {
	  return function (input, query) {
	    if (input && query) {
	      return input.replace(RegExp('(' + query + ')', 'gi'), '<b>$1</b>');
	    }
	    return input;
	  };
	}).name;

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_184__;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var component = {
	  bindings: {
	    isOpen: '=',
	    contacts: '<',
	    accounts: '<',
	    config: '<',
	    onSelect: '&',
	    loadMore: '&'
	  },
	  controller: 'uiBusBeneficiarySelectModalNgController',
	  // eslint-disable-next-line global-require
	  template: __webpack_require__(186)
	};
	
	exports.default = component;

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

	module.exports = "<ui-bb-modal-ng data-is-open=\"$ctrl.isOpen\">\n  <div class=\"p-3\">\n    <header class=\"d-flex justify-content-between\">\n      <h5 data-role=\"heading\">{{:: $ctrl.config.labels.headerText }}</h5>\n      <button type=\"button\" class=\"close\" data-ng-click=\"$ctrl.isOpen = false\">\n        <i class=\"fa fa-times\"></i>\n      </button>\n    </header>\n\n    <!-- Tabs -->\n    <ul class=\"nav nav-tabs\" role=\"tablist\">\n      <li tabindex=\"1\" class=\"nav-item\"\n          data-ng-click=\"$ctrl.selectTab($ctrl.Tabs.CONTACTS)\"\n          data-ng-class=\"{active: $ctrl.state.activeTab === $ctrl.Tabs.CONTACTS}\">\n        <a class=\"nav-link\" href=\"javascript:void(0)\" role=\"tab\">\n          {{:: $ctrl.config.labels.contactsTab }} (<span data-ng-if=\"$ctrl.contacts.totalCount > 0 && $ctrl.contacts.totalCount !== $ctrl.state[$ctrl.Tabs.CONTACTS].totalCount\">{{ $ctrl.contacts.totalCount }} {{ $ctrl.config.labels.outOf }} </span>{{ $ctrl.state[$ctrl.Tabs.CONTACTS].totalCount }})</a>\n      </li>\n      <li tabindex=\"2\" class=\"nav-item\"\n          data-ng-click=\"$ctrl.selectTab($ctrl.Tabs.ACCOUNTS)\"\n          data-ng-class=\"{active: $ctrl.state.activeTab === $ctrl.Tabs.ACCOUNTS}\">\n        <a class=\"nav-link\" href=\"javascript:void(0)\" role=\"tab\">\n          {{:: $ctrl.config.labels.ownAccountsTab }} (<span data-ng-if=\"$ctrl.accounts.totalCount > 0 && $ctrl.accounts.totalCount !== $ctrl.state[$ctrl.Tabs.ACCOUNTS].totalCount\">{{ $ctrl.accounts.totalCount }} {{ $ctrl.config.labels.outOf }} </span>{{ $ctrl.state[$ctrl.Tabs.ACCOUNTS].totalCount }})</a>\n      </li>\n    </ul>\n\n    <!-- Tabs content -->\n    <div data-ng-hide=\"$ctrl.state.activeTab !== $ctrl.Tabs.CONTACTS\">\n      <div data-ng-include=\"'templates/beneficiary-select-modal/contacts.html'\"></div>\n    </div>\n    <div data-ng-hide=\"$ctrl.state.activeTab !== $ctrl.Tabs.ACCOUNTS\">\n      <div data-ng-include=\"'templates/beneficiary-select-modal/accounts.html'\"></div>\n    </div>\n  </div>\n</ui-bb-modal-ng>\n\n<!-- CONTACTS -->\n<script type=\"text/ng-template\" id=\"templates/beneficiary-select-modal/contacts.html\">\n  <div class=\"list-group pt-3\">\n    <ui-bb-search-box-ng\n      class=\"pb-3\"\n      data-ng-model=\"$ctrl.state.contacts.params.query\"\n      data-ng-model-options=\"{ debounce: 500 }\"\n      data-config=\"{ labels: { placeholder: $ctrl.config.labels.placeholderContacts } }\"\n      data-on-change=\"$ctrl.onSearchContacts(search)\"\n      data-on-clear=\"$ctrl.onSearchClearContacts()\"\n      data-is-loading=\"$ctrl.state.contacts.loading\"\n      data-forced-submit=\"true\">\n    </ui-bb-search-box-ng>\n    <ui-bb-list-ng class=\"pre-scrollable\"\n                   data-on-scrolled-to-bottom=\"$ctrl.loadMoreContactsWithDigest()\">\n      <div class=\"list-group-item pb-2\"\n           data-ng-repeat=\"contact in $ctrl.contacts.data track by $index\"\n           data-ng-click=\"$ctrl.onSelect($ctrl.getItemContact(contact, $ctrl.config.direct)); $ctrl.isOpen = false;\">\n        <div class=\"alert alert-secondary d-inline-block\"\n             data-ng-if=\"$ctrl.signature[contact.name[0].toUpperCase()] === $index\"\n             data-ng-bind-html=\"contact.name[0].toUpperCase() | searchFilter:$ctrl.state.contacts.params.query\">\n        </div>\n        <div><span data-ng-bind-html=\"contact.name | searchFilter:$ctrl.state.contacts.params.query\"></span> &mdash; <span data-ng-bind-html=\"contact.accounts[0].name | searchFilter:$ctrl.state.contacts.params.query\"></span></div>\n        <div class=\"text-muted\" data-ng-bind-html=\"($ctrl.formatIban(contact.accounts[0].IBAN) || contact.accounts[0].accountNumber || contact.accounts[0].BBAN).toUpperCase() | searchFilter:$ctrl.state.contacts.params.query\"></div>\n      </div>\n    </ui-bb-list-ng>\n    <div class=\"text-center\" data-ng-if=\"$ctrl.state.contacts.params.query && !$ctrl.contacts.data.length\">\n      <!-- No search results -->\n      <div class=\"p-5 text-muted\">{{:: $ctrl.config.labels.noSearchResults }}</div>\n    </div>\n    <div class=\"text-center text-muted mt-2\" data-ng-if=\"$ctrl.state.contacts.loading\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n  </div>\n</script>\n\n<!-- ACCOUNTS -->\n<script type=\"text/ng-template\" id=\"templates/beneficiary-select-modal/accounts.html\">\n  <div class=\"list-group pt-3\">\n    <ui-bb-search-box-ng\n      class=\"pb-3\"\n      data-ng-model=\"$ctrl.state.accounts.params.query\"\n      data-ng-model-options=\"{ debounce: 500 }\"\n      data-config=\"{ labels: { placeholder: $ctrl.config.labels.placeholderAccounts } }\"\n      data-on-change=\"$ctrl.onSearchAccounts(search)\"\n      data-on-clear=\"$ctrl.onSearchClearAccounts()\"\n      data-is-loading=\"$ctrl.state.accounts.loading\"\n      data-forced-submit=\"true\">\n    </ui-bb-search-box-ng>\n    <ui-bb-list-ng class=\"pre-scrollable\"\n                   data-on-scrolled-to-bottom=\"$ctrl.loadMoreAccountsWithDigest()\">\n      <div class=\"list-group-item d-flex align-items-center row mr-0 ml-0\"\n           data-ng-repeat=\"account in $ctrl.accounts.data track by $index\"\n           data-ng-click=\"$ctrl.onSelect($ctrl.getItemAccount(account)); $ctrl.isOpen = false;\">\n        <div class=\"col-sm-8 p-0\">\n          <div data-ng-bind-html=\"account.name | searchFilter:$ctrl.state.accounts.params.query\"></div>\n          <div class=\"text-muted\" data-ng-bind-html=\"$ctrl.formattedIdentifier(account)  | searchFilter:$ctrl.state.accounts.params.query\"></div>\n        </div>\n        <div class=\"text-info text-right col-sm-4 p-0\">\n          <ui-bus-format-amount-ng\n            data-amount=\"account.amount\"\n            data-currency=\"account.currency\">\n          </ui-bus-format-amount-ng>\n        </div>\n      </div>\n    </ui-bb-list-ng>\n    <div class=\"text-center\" data-ng-if=\"$ctrl.state.accounts.params.query && !$ctrl.accounts.data.length\">\n      <!-- No search results -->\n      <div class=\"p-5 text-muted\">{{:: $ctrl.config.labels.noSearchResults }}</div>\n    </div>\n    <div class=\"text-center text-muted mt-2\" data-ng-if=\"$ctrl.state.accounts.loading\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n  </div>\n</script>"

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = controller;
	
	var _libBbIban = __webpack_require__(93);
	
	var _constants = __webpack_require__(188);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _state = __webpack_require__(189);
	
	var _state2 = _interopRequireDefault(_state);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function controller($scope, $timeout) {
	  var $ctrl = this;
	
	  // Contacts letter signature
	  var signature = void 0;
	
	  // Paging parameter
	  var pageSize = void 0;
	
	  /**
	   * @name uiBusBeneficiarySelectModalNgController#selectTab
	   * @type {function}
	   * @description
	   * Selects tab by its name
	   *
	   * @param {String} tab Tab name
	   */
	  var selectTab = function selectTab(tab) {
	    $ctrl.state = _state2.default.setActiveTab($ctrl.state, { tab: tab });
	  };
	
	  /**
	   * @name uiBusBeneficiarySelectModalNgController#formattedIdentifier
	   * @type {function}
	   * @description
	   * Format account if it is IBAN, and leaves untouched otherwise
	   *
	   * @param {Object} account
	   * @param {String} account.identifier
	   * @param {String} account.IBAN
	   * @returns {String}
	   */
	  var formattedIdentifier = function formattedIdentifier(_ref) {
	    var identifier = _ref.identifier,
	        IBAN = _ref.IBAN;
	    return IBAN === identifier ? (0, _libBbIban.formatByGroups)(identifier) : identifier;
	  };
	
	  /**
	   * @name uiBusBeneficiarySelectModalNgController#formatIban
	   * @type {function}
	   * @description
	   * Format account if it is IBAN, and leaves untouched otherwise
	   *
	   * @param {String} iban
	   * @returns {String}
	   */
	  var formatIban = function formatIban(iban) {
	    return (0, _libBbIban.isValidIBAN)(iban) ? (0, _libBbIban.formatByGroups)(iban) : iban;
	  };
	
	  /**
	   * @name uiBusBeneficiarySelectModalNgController#getItemContact
	   * @type {function}
	   * @description
	   * Format selected contact to use as selected item
	   *
	   * @param {Object} contact
	   * @param {Boolean} direct flag for US widgets
	   * @returns {Object}
	   */
	  var getItemContact = function getItemContact(contact) {
	    var direct = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	    var account = contact.accounts[0];
	
	    if (direct) {
	      return { account: Object.assign({}, account, contact) };
	    }
	
	    return { account: Object.assign({}, account, { name: contact.name }) };
	  };
	
	  /**
	   * @name uiBusBeneficiarySelectModalNgController#getItemAccount
	   * @type {function}
	   * @description
	   * Format selected account to use as selected item
	   *
	   * @param {Object} account
	   * @returns {Object}
	   */
	  var getItemAccount = function getItemAccount(account) {
	    return { account: account };
	  };
	
	  /**
	   * @name uiBusBeneficiarySelectModalNgController#getProcessedContacts
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Flatten contacts with several accounts into one
	   *
	   * @param {Object[]} contacts
	   * @returns {Object[]}
	   */
	  var getProcessedContacts = function getProcessedContacts(contacts) {
	    var result = [];
	
	    (contacts || []).forEach(function (contact) {
	      if (contact.accounts && contact.accounts.length > 1) {
	        contact.accounts.forEach(function (account) {
	          result.push(Object.assign({}, contact, {
	            accounts: [account]
	          }));
	        });
	      } else {
	        result.push(contact);
	      }
	    });
	
	    return result;
	  };
	
	  /**
	   * @name uiBusBeneficiarySelectModalNgController#firstLetterList
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Calculates letters "signature" for items list
	   * @param {Object[]} list
	   */
	  var firstLetterList = function firstLetterList(list) {
	    return (list || []).reduce(function (acc, val, index) {
	      return [].concat(_toConsumableArray(acc), [{ letter: val.name[0].toUpperCase(), index: index }]);
	    }, []).reduce(function (acc, val) {
	      var accumulator = acc;
	      if (accumulator[val.letter] === undefined) {
	        accumulator[val.letter] = val.index;
	      }
	      return accumulator;
	    }, {});
	  };
	
	  /**
	   * @name uiBusBeneficiarySelectModalNgController#doneLoadMoreAccounts
	   * @type {function}
	   * @description
	   * Callback after load more accounts finishes
	   * @inner
	   * @param {Boolean} [hasMore] flag to indicate if there should be more requests
	   */
	  var doneLoadMoreAccounts = function doneLoadMoreAccounts(hasMore) {
	    var hasMoreItems = hasMore === true;
	
	    // hide loadMore spinner
	    $ctrl.state = _state2.default.setSpinner($ctrl.state, { tab: _constants2.default.ACCOUNTS, flag: false });
	
	    // set Load More ability
	    $ctrl.state = _state2.default.setLoadMore($ctrl.state, { tab: _constants2.default.ACCOUNTS, hasMoreItems: hasMoreItems });
	
	    // Increase paging param (if needed)
	    $ctrl.state = _state2.default.setIncrementedPage($ctrl.state, {
	      tab: _constants2.default.ACCOUNTS,
	      hasMoreItems: hasMoreItems,
	      pageSize: pageSize
	    });
	
	    $timeout(function () {
	      // If no search -- save total count
	      if (!$ctrl.state[_constants2.default.ACCOUNTS].params.query) {
	        $ctrl.state = _state2.default.setTotalCounter($ctrl.state, {
	          tab: _constants2.default.ACCOUNTS,
	          totalCount: $ctrl.accounts && $ctrl.accounts.totalCount || 0
	        });
	      }
	    });
	  };
	
	  /**
	   * @name uiBusBeneficiarySelectModalNgController#doneLoadMoreContacts
	   * @type {function}
	   * @description
	   * Callback after load more contacts finishes
	   * @inner
	   * @param {Boolean|Object} hasMore flag to indicate if there should be more requests
	   */
	  var doneLoadMoreContacts = function doneLoadMoreContacts(hasMore) {
	    var hasMoreItems = hasMore === true;
	
	    // hide loadMore spinner
	    $ctrl.state = _state2.default.setSpinner($ctrl.state, { tab: _constants2.default.CONTACTS, flag: false });
	
	    // set Load More ability
	    $ctrl.state = _state2.default.setLoadMore($ctrl.state, { tab: _constants2.default.CONTACTS, hasMoreItems: hasMoreItems });
	
	    // Increase paging param (if needed)
	    $ctrl.state = _state2.default.setIncrementedPage($ctrl.state, {
	      tab: _constants2.default.CONTACTS,
	      hasMoreItems: hasMoreItems,
	      pageSize: pageSize
	    });
	
	    $timeout(function () {
	      if ($ctrl.contacts) {
	        $ctrl.contacts.data = getProcessedContacts($ctrl.contacts.data);
	        $ctrl.signature = firstLetterList($ctrl.contacts.data);
	      }
	
	      // If no search -- save total count
	      if (!$ctrl.state[_constants2.default.CONTACTS].params.query) {
	        $ctrl.state = _state2.default.setTotalCounter($ctrl.state, {
	          tab: _constants2.default.CONTACTS,
	          totalCount: $ctrl.contacts && $ctrl.contacts.totalCount || 0
	        });
	      }
	    });
	  };
	
	  /**
	   * @name uiBusBeneficiarySelectModalNgController#loadMoreAccounts
	   * @type {function}
	   *
	   * @description
	   * Starts load more accounts flow
	   * @param {Boolean} [overwrite] Flag to indicate if the new response
	   *                              should overwrite previous list
	   */
	  var loadMoreAccounts = function loadMoreAccounts() {
	    var overwrite = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	    if (!overwrite && $ctrl.state.accounts.stopLoadingMore) {
	      return;
	    }
	
	    // show loadMore spinner
	    $ctrl.state = _state2.default.setSpinner($ctrl.state, { tab: _constants2.default.ACCOUNTS, flag: true });
	
	    $ctrl.loadMore({
	      params: {
	        type: _constants2.default.ACCOUNTS,
	        done: doneLoadMoreAccounts,
	        request: $ctrl.state.accounts.params,
	        overwrite: overwrite
	      }
	    });
	  };
	
	  /**
	   * @name uiBusBeneficiarySelectModalNgController#loadMoreContacts
	   * @type {function}
	   *
	   * @description
	   * Starts load more contacts flow
	   * @param {Boolean} [overwrite] Flag to indicate if the new response
	   *                              should overwrite previous list
	   */
	  var loadMoreContacts = function loadMoreContacts() {
	    var overwrite = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	    if (!overwrite && $ctrl.state.contacts.stopLoadingMore) {
	      return;
	    }
	
	    // show loadMore spinner
	    $ctrl.state = _state2.default.setSpinner($ctrl.state, { tab: _constants2.default.CONTACTS, flag: true });
	
	    $ctrl.loadMore({
	      params: {
	        type: _constants2.default.CONTACTS,
	        done: doneLoadMoreContacts,
	        request: $ctrl.state.contacts.params,
	        overwrite: overwrite
	      }
	    });
	  };
	
	  /**
	   * @name uiBusBeneficiarySelectModalNgController#loadMoreAccountsWithDigest
	   * @type {function}
	   *
	   * @description
	   * Starts load more contacts flow with $digest
	   */
	  var loadMoreAccountsWithDigest = function loadMoreAccountsWithDigest() {
	    loadMoreAccounts();
	    $scope.$digest();
	  };
	
	  /**
	   * @name uiBusBeneficiarySelectModalNgController#loadMoreContactsWithDigest
	   * @type {function}
	   *
	   * @description
	   * Starts load more contacts flow with $digest
	   */
	  var loadMoreContactsWithDigest = function loadMoreContactsWithDigest() {
	    loadMoreContacts();
	    $scope.$digest();
	  };
	
	  /**
	   * @name uiBusBeneficiarySelectModalNgController#onSearchClearAccounts
	   * @type {function}
	   *
	   * @description
	   * Clears search and loads default first page of accounts
	   */
	  var onSearchClearAccounts = function onSearchClearAccounts() {
	    $ctrl.state = _state2.default.setRequestParams($ctrl.state, { tab: _constants2.default.ACCOUNTS, params: { from: 0, query: null } });
	    loadMoreAccounts(true); // overwrite
	  };
	
	  /**
	   * @name uiBusBeneficiarySelectModalNgController#onSearchClearContacts
	   * @type {function}
	   *
	   * @description
	   * Clears search and loads default first page of contatcs
	   */
	  var onSearchClearContacts = function onSearchClearContacts() {
	    $ctrl.state = _state2.default.setRequestParams($ctrl.state, { tab: _constants2.default.CONTACTS, params: { from: 0, query: null } });
	    loadMoreContacts(true); // overwrite
	  };
	
	  /**
	   * @name uiBusBeneficiarySelectModalNgController#onSearchAccounts
	   * @type {function}
	   *
	   * @description
	   * Initiates search of accounts
	   * @param {String} query
	   * @param {Number} [limit]
	   */
	  var onSearchAccounts = function onSearchAccounts() {
	    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
	
	    if (query && query.length >= limit) {
	      $ctrl.state = _state2.default.setRequestParams($ctrl.state, { tab: _constants2.default.ACCOUNTS, params: { from: 0, query: query } });
	      loadMoreAccounts(true); // overwrite
	    }
	
	    if (!query) {
	      onSearchClearAccounts();
	    }
	  };
	
	  /**
	   * @name uiBusBeneficiarySelectModalNgController#onSearchContacts
	   * @type {function}
	   *
	   * @description
	   * Initiates search of contacts
	   * @param {String} query
	   * @param {Number} [limit]
	   */
	  var onSearchContacts = function onSearchContacts() {
	    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
	
	    if (query && query.length >= limit) {
	      $ctrl.state = _state2.default.setRequestParams($ctrl.state, { tab: _constants2.default.CONTACTS, params: { from: 0, query: query } });
	      loadMoreContacts(true); // overwrite
	    }
	
	    if (!query) {
	      onSearchClearContacts();
	    }
	  };
	
	  /**
	   * $onInit hook
	   */
	  function $onInit() {
	    // Init state
	    $ctrl.state = _state2.default.getInitialState();
	    pageSize = parseInt($ctrl.config.pageSize, 10);
	
	    // Initial loading
	    loadMoreAccounts();
	    loadMoreContacts();
	
	    // Init request params for Accounts
	    $ctrl.state = _state2.default.setRequestParams($ctrl.state, { tab: _constants2.default.ACCOUNTS, params: { size: pageSize } });
	
	    // Init request params for Contacts
	    $ctrl.state = _state2.default.setRequestParams($ctrl.state, { tab: _constants2.default.CONTACTS, params: { size: pageSize } });
	  }
	
	  // Assign $ctrl props
	  Object.assign($ctrl, {
	    Tabs: _constants2.default,
	    signature: signature,
	    state: null,
	
	    selectTab: selectTab,
	    formattedIdentifier: formattedIdentifier,
	    formatIban: formatIban,
	    getItemContact: getItemContact,
	    getItemAccount: getItemAccount,
	    loadMoreAccounts: loadMoreAccounts,
	    loadMoreContacts: loadMoreContacts,
	    loadMoreAccountsWithDigest: loadMoreAccountsWithDigest,
	    loadMoreContactsWithDigest: loadMoreContactsWithDigest,
	    onSearchAccounts: onSearchAccounts,
	    onSearchContacts: onSearchContacts,
	    onSearchClearAccounts: onSearchClearAccounts,
	    onSearchClearContacts: onSearchClearContacts,
	    $onInit: $onInit
	  });
	}

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Constants#tabs
	 * @description
	 * Map of tab types
	 * @type {Object}
	 */
	var Tabs = {
	  CONTACTS: 'contacts',
	  ACCOUNTS: 'accounts'
	};
	
	exports.default = Tabs;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(188);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * @name getInitialState
	 * @type {function}
	 * @description
	 * Returns initial state
	 */
	var getInitialState = function getInitialState() {
	  var _ref;
	
	  return _ref = {
	    activeTab: _constants2.default.CONTACTS
	  }, _defineProperty(_ref, _constants2.default.CONTACTS, {
	    params: {
	      from: 0,
	      size: 30,
	      query: null
	    },
	    loading: false
	  }), _defineProperty(_ref, _constants2.default.ACCOUNTS, {
	    params: {
	      from: 0,
	      size: 30,
	      orderBy: 'name',
	      direction: 'ASC',
	      query: null
	    },
	    loading: false
	  }), _ref;
	};
	
	/**
	 * @name setRequestParams
	 * @type {function}
	 * @description
	 * Sets request params
	 *
	 * @param {Object} state
	 * @param {Object} payload
	 */
	var setRequestParams = function setRequestParams(state, payload) {
	  return Object.assign({}, state, _defineProperty({}, payload.tab, Object.assign({}, state[payload.tab], {
	    params: Object.assign({}, state[payload.tab].params, payload.params)
	  })));
	};
	
	/**
	 * @name setSpinner
	 * @type {function}
	 * @description
	 * Sets flag, which toggles (shows/hides) loading spinner
	 *
	 * @param {Object} state
	 * @param {Object} payload
	 */
	var setSpinner = function setSpinner(state, payload) {
	  return Object.assign({}, state, _defineProperty({}, payload.tab, Object.assign({}, state[payload.tab], {
	    loading: payload.flag
	  })));
	};
	
	/**
	 * @name setLoadMore
	 * @type {function}
	 * @description
	 * Sets flag, which stops loading items for specific Tab
	 *
	 * @param {Object} state
	 * @param {Object} payload
	 */
	var setLoadMore = function setLoadMore(state, payload) {
	  return Object.assign({}, state, _defineProperty({}, payload.tab, Object.assign({}, state[payload.tab], {
	    stopLoadingMore: !payload.hasMoreItems
	  })));
	};
	
	/**
	 * @name setActiveTab
	 * @type {function}
	 * @description
	 * Update state with selected tab
	 *
	 * @param {Object} state
	 * @param {Object} payload
	 */
	var setActiveTab = function setActiveTab(state, payload) {
	  return Object.assign({}, state, {
	    activeTab: payload.tab
	  });
	};
	
	/**
	 * @name setIncrementedPage
	 * @type {function}
	 * @description
	 * Update state with incremented paging param (if needed)
	 *
	 * @param {Object} state
	 * @param {Object} payload
	 */
	var setIncrementedPage = function setIncrementedPage(state, payload) {
	  return setRequestParams(state, {
	    tab: payload.tab,
	    params: {
	      from: payload.hasMoreItems ? state[payload.tab].params.from + 1 : state[payload.tab].params.from
	    }
	  });
	};
	
	/**
	 * @name setTotalCounter
	 * @type {function}
	 * @description
	 * Update state with total items counter
	 *
	 * @param {Object} state
	 * @param {Object} payload
	 */
	var setTotalCounter = function setTotalCounter(state, payload) {
	  return Object.assign({}, state, _defineProperty({}, payload.tab, Object.assign({}, state[payload.tab], {
	    totalCount: payload.totalCount
	  })));
	};
	
	exports.default = {
	  getInitialState: getInitialState,
	  setRequestParams: setRequestParams,
	  setSpinner: setSpinner,
	  setLoadMore: setLoadMore,
	  setActiveTab: setActiveTab,
	  setIncrementedPage: setIncrementedPage,
	  setTotalCounter: setTotalCounter
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bus-beneficiary-select-modal-ng.js.map