(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-substitute-error-ng"), require("ui-bb-i18n-ng"), require("ui-bb-account-selector-ng"), require("ui-bb-dropdown-select-ng"), require("ui-bb-currency-input-ng"), require("ui-bb-format-amount-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-confirm-ng"), require("ui-bb-switcher-ng"), require("ui-bb-load-more-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-action-recipes-ng", ["vendor-bb-angular-ng-aria", "ui-bb-substitute-error-ng", "ui-bb-i18n-ng", "ui-bb-account-selector-ng", "ui-bb-dropdown-select-ng", "ui-bb-currency-input-ng", "ui-bb-format-amount-ng", "ui-bb-loading-indicator-ng", "ui-bb-confirm-ng", "ui-bb-switcher-ng", "ui-bb-load-more-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-action-recipes-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-substitute-error-ng"), require("ui-bb-i18n-ng"), require("ui-bb-account-selector-ng"), require("ui-bb-dropdown-select-ng"), require("ui-bb-currency-input-ng"), require("ui-bb-format-amount-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-confirm-ng"), require("ui-bb-switcher-ng"), require("ui-bb-load-more-ng"));
	else
		root["ext-bb-action-recipes-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-substitute-error-ng"], root["ui-bb-i18n-ng"], root["ui-bb-account-selector-ng"], root["ui-bb-dropdown-select-ng"], root["ui-bb-currency-input-ng"], root["ui-bb-format-amount-ng"], root["ui-bb-loading-indicator-ng"], root["ui-bb-confirm-ng"], root["ui-bb-switcher-ng"], root["ui-bb-load-more-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__) {
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
	exports.events = exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(2);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(3);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbI18nNg = __webpack_require__(4);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbAccountSelectorNg = __webpack_require__(5);
	
	var _uiBbAccountSelectorNg2 = _interopRequireDefault(_uiBbAccountSelectorNg);
	
	var _uiBbDropdownSelectNg = __webpack_require__(6);
	
	var _uiBbDropdownSelectNg2 = _interopRequireDefault(_uiBbDropdownSelectNg);
	
	var _uiBbCurrencyInputNg = __webpack_require__(7);
	
	var _uiBbCurrencyInputNg2 = _interopRequireDefault(_uiBbCurrencyInputNg);
	
	var _uiBbFormatAmountNg = __webpack_require__(8);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(9);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbConfirmNg = __webpack_require__(10);
	
	var _uiBbConfirmNg2 = _interopRequireDefault(_uiBbConfirmNg);
	
	var _uiBbSwitcherNg = __webpack_require__(11);
	
	var _uiBbSwitcherNg2 = _interopRequireDefault(_uiBbSwitcherNg);
	
	var _uiBbLoadMoreNg = __webpack_require__(12);
	
	var _uiBbLoadMoreNg2 = _interopRequireDefault(_uiBbLoadMoreNg);
	
	var _helpers = __webpack_require__(13);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _hooks = __webpack_require__(14);
	
	var _hooks2 = _interopRequireDefault(_hooks);
	
	var _events = __webpack_require__(19);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bb-action-recipes-ng
	 *
	 * @description
	 * Action Recipes default extension.
	 *
	 * @example
	 * <!-- messages widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *   <value type="string">ext-bb-action-recipes-ng</value>
	 * </property>
	 */
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbSubstituteErrorNg2.default, _uiBbI18nNg2.default, _uiBbAccountSelectorNg2.default, _uiBbDropdownSelectNg2.default, _uiBbCurrencyInputNg2.default, _uiBbFormatAmountNg2.default, _uiBbLoadingIndicatorNg2.default, _uiBbConfirmNg2.default, _uiBbSwitcherNg2.default, _uiBbLoadMoreNg2.default];
	
	var hooks = exports.hooks = _hooks2.default;
	var helpers = exports.helpers = _helpers2.default;
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

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CONDITION_OPTIONS = ['lt', 'gt'];
	
	/**
	 * @description
	 * Validate Recipe data.
	 * @name isValid
	 * @type {function}
	 * @return {boolean} true if recipe passes the validation
	 */
	var isValid = function isValid(recipe) {
	  return recipe.account && recipe.amount.value && recipe.actions.isSelected();
	};
	
	exports.default = {
	  conditions: CONDITION_OPTIONS,
	  isValid: isValid
	};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _creditTransaction = __webpack_require__(15);
	
	var _lowBalance = __webpack_require__(18);
	
	exports.default = {
	  createRecipeFilter: function createRecipeFilter(specification, trigger, accounts) {
	    switch (specification.type) {
	      case _creditTransaction.CREDIT_TRANSACTION_TYPE:
	        return new _creditTransaction.CreditTransactionFilter(trigger, accounts);
	      case _lowBalance.ACCOUNT_LOW_BALANCE_TYPE:
	        return new _lowBalance.AccountLowBalanceFilter(trigger, accounts);
	      default:
	        return null;
	    }
	  }
	};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CreditTransactionFilter = exports.CREDIT_TRANSACTION_TYPE = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _constants = __webpack_require__(16);
	
	var _filterHelpers = __webpack_require__(17);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ACCOUNT_ID = 'transaction.arrangementId';
	var TRANSACTION_TYPE_PARAM = 'transaction.creditDebitIndicator';
	var TRANSACTION_TYPE_CREDIT = 'CRDT';
	var TRANSACTION_AMOUNT_PARAM = 'transaction.amount';
	var DEFAULT_AMOUNT = '0';
	var TEMPLATE_ID = 'credit-transaction';
	
	var CREDIT_TRANSACTION_TYPE = exports.CREDIT_TRANSACTION_TYPE = 'newTransaction';
	
	/**
	 * @name CreditTransactionFilter
	 * @type {object}
	 */
	
	var CreditTransactionFilter = exports.CreditTransactionFilter = function () {
	  function CreditTransactionFilter(trigger, accounts) {
	    _classCallCheck(this, CreditTransactionFilter);
	
	    var condition = _constants.Operator.greaterOrEqual;
	    var amount = DEFAULT_AMOUNT;
	
	    // When a recipe is already created
	    if (trigger) {
	      if (!(0, _filterHelpers.isTriggerFilterEmpty)(trigger.filter)) {
	        var transactionAmountFilter = (0, _filterHelpers.findFilter)(trigger.filter, TRANSACTION_AMOUNT_PARAM);
	
	        amount = transactionAmountFilter.value.toString();
	        condition = transactionAmountFilter.operator;
	      }
	
	      if (!(0, _filterHelpers.isTriggerSelectorsEmpty)(trigger.selectors)) {
	        var accountIdSelector = trigger.selectors.find(function (item) {
	          return item.path === ACCOUNT_ID;
	        });
	
	        if (accounts) {
	          this.account = accounts.find(function (acc) {
	            return acc.id === accountIdSelector.value;
	          });
	        }
	      }
	    }
	
	    this.templateId = TEMPLATE_ID;
	    this.amount = { value: amount, currency: 'USD' };
	    this.condition = condition;
	  }
	
	  _createClass(CreditTransactionFilter, [{
	    key: 'validate',
	    value: function validate() {
	      return Boolean(this.account && this.amount && this.amount.value && this.amount.value > 0 && this.condition);
	    }
	
	    /**
	     * @name CreditTransactionFilter#changeAccount
	     * @description Handles change of selected account. Changes the currency of this filter to
	     * the currency of the selected account. Retains the old inputted amount value.
	     * @param {object} account the newly selected account
	     * @type {function} * @typedef CreditTransactionFilter
	     */
	
	  }, {
	    key: 'changeAccount',
	    value: function changeAccount(account) {
	      this.amount = {
	        value: this.amount.value,
	        currency: account.currency
	      };
	      this.account = account;
	    }
	  }, {
	    key: 'toApiModel',
	    value: function toApiModel() {
	      return {
	        selectors: [{
	          path: ACCOUNT_ID,
	          value: this.account.id
	        }],
	        filter: {
	          and: [_defineProperty({}, _constants.Operator.equals, [{ pathValue: [TRANSACTION_TYPE_PARAM] }, TRANSACTION_TYPE_CREDIT]), _defineProperty({}, this.condition, [{ pathValue: [TRANSACTION_AMOUNT_PARAM] }, parseFloat(this.amount.value)])]
	        }
	      };
	    }
	  }]);

	  return CreditTransactionFilter;
	}();

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Operator = exports.Operator = {
	  greaterThan: 'gt',
	  lessThan: 'lt',
	  equals: 'eq',
	  greaterOrEqual: 'gte',
	  lessOrEqual: 'lte'
	};
	
	exports.default = {
	  Operator: Operator
	};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name filterHelpers
	 * @type {object}
	 */
	
	/**
	 * @name filterHelpers#findFilter
	 * @param {Object} trigger trigger to check
	 * @type {function}
	 * @returns {Object}
	 */
	var findFilter = exports.findFilter = function findFilter(filterDefinition, searchKey) {
	  var operator = Object.keys(filterDefinition)[0]; // Get function operator
	  var fnParams = filterDefinition[operator];
	  var result = null;
	
	  // Leaf logic
	  if (fnParams[0].pathValue) {
	    if (fnParams[0].pathValue[0] === searchKey) {
	      return {
	        operator: operator,
	        value: fnParams[1]
	      };
	    }
	    return null;
	  }
	
	  // Branch logic
	  for (var i = 0; result == null && i < fnParams.length; i++) {
	    result = findFilter(fnParams[i], searchKey);
	  }
	
	  return result;
	};
	
	/**
	 * @description Checks empty state the given trigger's filter.
	 * @name filterHelpers#isTriggerFilterEmpty
	 * @param {Object} trigger trigger to check
	 * @type {function}
	 * @returns {boolean} True if trigger's filter is empty
	 */
	var isTriggerFilterEmpty = exports.isTriggerFilterEmpty = function isTriggerFilterEmpty(filter) {
	  return Boolean(filter) && Object.keys(filter).length === 0;
	};
	
	/**
	 * @description Checks empty state the given trigger's selectors.
	 * @name filterHelpers#isTriggerSelectorsEmpty
	 * @param {Object} trigger trigger to check
	 * @type {function}
	 * @returns {boolean} True if trigger's selectors is empty
	 */
	var isTriggerSelectorsEmpty = exports.isTriggerSelectorsEmpty = function isTriggerSelectorsEmpty(selectors) {
	  return Boolean(selectors) && selectors.length === 0;
	};
	
	/**
	 * @description Checks empty state the given trigger (looks on trigger's filter and its selectors).
	 * @name filterHelpers#isTriggerEmpty
	 * @param {Object} trigger trigger to check
	 * @type {function}
	 * @returns {boolean} True if trigger's filter and its selectors are empty
	 */
	var isTriggerEmpty = exports.isTriggerEmpty = function isTriggerEmpty(_ref) {
	  var filter = _ref.filter,
	      selectors = _ref.selectors;
	  return isTriggerFilterEmpty(filter) && isTriggerSelectorsEmpty(selectors);
	};
	
	exports.default = {
	  findFilter: findFilter,
	  isTriggerFilterEmpty: isTriggerFilterEmpty,
	  isTriggerSelectorsEmpty: isTriggerSelectorsEmpty,
	  isTriggerEmpty: isTriggerEmpty
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AccountLowBalanceFilter = exports.ACCOUNT_LOW_BALANCE_TYPE = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _constants = __webpack_require__(16);
	
	var _filterHelpers = __webpack_require__(17);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ACCOUNT_ID = 'account.arrangementId';
	var ACCOUNT_CURRENT_BALANCE_PARAM = 'account.currentBalance';
	var ACCOUNT_PREVIOUS_BALANCE_PARAM = 'account.previousBalance';
	var DEFAULT_AMOUNT = '0';
	var TEMPLATE_ID = 'low-balance';
	
	var ACCOUNT_LOW_BALANCE_TYPE = exports.ACCOUNT_LOW_BALANCE_TYPE = 'accountLowBalance';
	
	/**
	 * @name AccountLowBalanceFilter
	 * @type {object}
	 */
	
	var AccountLowBalanceFilter = exports.AccountLowBalanceFilter = function () {
	  function AccountLowBalanceFilter(trigger, accounts) {
	    _classCallCheck(this, AccountLowBalanceFilter);
	
	    var condition = _constants.Operator.lessThan;
	    var amount = DEFAULT_AMOUNT;
	
	    // When a recipe is already created
	    if (trigger) {
	      if (!(0, _filterHelpers.isTriggerFilterEmpty)(trigger.filter)) {
	        var lowBalanceFilter = (0, _filterHelpers.findFilter)(trigger.filter, ACCOUNT_CURRENT_BALANCE_PARAM);
	
	        amount = lowBalanceFilter.value.toString();
	        condition = lowBalanceFilter.operator;
	      }
	
	      if (!(0, _filterHelpers.isTriggerSelectorsEmpty)(trigger.selectors)) {
	        var accountIdSelector = trigger.selectors.find(function (item) {
	          return item.path === ACCOUNT_ID;
	        });
	
	        if (accounts) {
	          this.account = accounts.find(function (acc) {
	            return acc.id === accountIdSelector.value;
	          });
	        }
	      }
	    }
	
	    this.templateId = TEMPLATE_ID;
	    this.amount = { value: amount, currency: 'USD' };
	    this.condition = condition;
	  }
	
	  _createClass(AccountLowBalanceFilter, [{
	    key: 'validate',
	    value: function validate() {
	      return Boolean(this.account && this.amount && this.amount.value && this.amount.value > 0 && this.condition);
	    }
	
	    /**
	     * @name AccountLowBalanceFilter#changeAccount
	     * @description Handles change of selected account. Changes the currency of this filter to
	     * the currency of the selected account. Retains the old inputted amount value.
	     * @param {object} account the newly selected account
	     * @type {function} * @typedef AccountLowBalanceFilter
	     */
	
	  }, {
	    key: 'changeAccount',
	    value: function changeAccount(account) {
	      this.amount = {
	        value: this.amount.value,
	        currency: account.currency
	      };
	      this.account = account;
	    }
	  }, {
	    key: 'toApiModel',
	    value: function toApiModel() {
	      var amount = parseFloat(this.amount.value);
	
	      return {
	        selectors: [{
	          path: ACCOUNT_ID,
	          value: this.account.id
	        }],
	        filter: {
	          and: [_defineProperty({}, _constants.Operator.greaterOrEqual, [{ pathValue: [ACCOUNT_PREVIOUS_BALANCE_PARAM] }, amount]), _defineProperty({}, this.condition, [{ pathValue: [ACCOUNT_CURRENT_BALANCE_PARAM] }, amount])]
	        }
	      };
	    }
	  }]);

	  return AccountLowBalanceFilter;
	}();

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var events = function events(_ref) {
	  var notifications = _ref.notifications,
	      $filter = _ref.$filter;
	  return {
	    'bb.event.actionrecipe.activate.failed': function bbEventActionrecipeActivateFailed() {
	      notifications.notifyAlert($filter('i18n')('error.recipe.activation.failed'));
	    },
	    'bb.event.actionrecipe.deactivate.failed': function bbEventActionrecipeDeactivateFailed() {
	      notifications.notifyAlert($filter('i18n')('error.recipe.deactivation.failed'));
	    }
	  };
	};
	
	exports.default = events;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-action-recipes-ng.js.map