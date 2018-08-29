(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("ui-bb-format-amount-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-notification-stripe-ng"), require("lib-bb-model-errors"), require("ui-fx-account-selector-ng"), require("ui-bb-modal-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-fx-trade-order-ng", ["ui-bb-i18n-ng", "ui-bb-format-amount-ng", "ui-bb-loading-indicator-ng", "ui-bb-empty-state-ng", "ui-bb-notification-stripe-ng", "lib-bb-model-errors", "ui-fx-account-selector-ng", "ui-bb-modal-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-fx-trade-order-ng"] = factory(require("ui-bb-i18n-ng"), require("ui-bb-format-amount-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-notification-stripe-ng"), require("lib-bb-model-errors"), require("ui-fx-account-selector-ng"), require("ui-bb-modal-ng"));
	else
		root["ext-fx-trade-order-ng"] = factory(root["ui-bb-i18n-ng"], root["ui-bb-format-amount-ng"], root["ui-bb-loading-indicator-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-notification-stripe-ng"], root["lib-bb-model-errors"], root["ui-fx-account-selector-ng"], root["ui-bb-modal-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__) {
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

	module.exports = __webpack_require__(18);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
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
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.hooks = exports.helpers = undefined;
	
	var _uiBbI18nNg = __webpack_require__(3);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbFormatAmountNg = __webpack_require__(7);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _uiFxAccountSelectorNg = __webpack_require__(19);
	
	var _uiFxAccountSelectorNg2 = _interopRequireDefault(_uiFxAccountSelectorNg);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(8);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(9);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBbNotificationStripeNg = __webpack_require__(10);
	
	var _uiBbNotificationStripeNg2 = _interopRequireDefault(_uiBbNotificationStripeNg);
	
	var _uiBbModalNg = __webpack_require__(20);
	
	var _uiBbModalNg2 = _interopRequireDefault(_uiBbModalNg);
	
	var _helpers = __webpack_require__(21);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _hooks = __webpack_require__(22);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var helpers = exports.helpers = _helpers2.default;
	
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-fx-rate-table-details-ng
	 */
	/**
	 * @module ext-fx-rate-table-details-ng
	 *
	 * @description
	 * Additional extension for fx rate rable details widget.
	 *
	 *
	 * @example
	 * <!-- fx rate table details widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-fx-rate-table-details-ng</value>
	 * </property>
	 *
	 *
	 */
	
	var hooks = exports.hooks = extHooks;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbI18nNg2.default, _uiBbFormatAmountNg2.default, _uiFxAccountSelectorNg2.default, _uiBbLoadingIndicatorNg2.default, _uiBbEmptyStateNg2.default, _uiBbNotificationStripeNg2.default, _uiBbModalNg2.default];

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _errors;
	
	var _libBbModelErrors = __webpack_require__(12);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* eslint max-len: ["error", { "ignoreComments": true }] */
	
	
	/**
	 * @typedef {Object} errorMessageDescriptor
	 * @property {string} message Localization key of the error message
	 * @property {string} title Localization key of the error message`s title
	 * @property {string} icon CSS class for icon
	 */
	
	/**
	 * @description
	 * Map of error code to message, title and icon to display to user
	 *
	 * @public
	 * @name errors
	 * @type {object.<E_AUTH | E_CONNECTIVITY | E_UNEXPECTED | E_USER, errorMessageDescriptor>}
	 */
	var errors = (_errors = {}, _defineProperty(_errors, _libBbModelErrors.E_AUTH, {
	  message: 'model.error.auth.message',
	  title: 'model.error.auth.title',
	  icon: 'fa-sign-in'
	}), _defineProperty(_errors, _libBbModelErrors.E_CONNECTIVITY, {
	  message: 'model.error.connectivity.message',
	  title: 'model.error.connectivity.title',
	  icon: 'fa-exclamation-triangle'
	}), _defineProperty(_errors, _libBbModelErrors.E_USER, {
	  message: 'model.error.user.message',
	  title: 'model.error.user.title',
	  icon: 'fa-user'
	}), _defineProperty(_errors, _libBbModelErrors.E_UNEXPECTED, {
	  message: 'model.error.unexpected.message',
	  title: 'model.error.unexpected.title',
	  icon: 'fa-server'
	}), _errors);
	
	exports.default = function (_ref) {
	  var $filter = _ref.$filter,
	      stateContainer = _ref.stateContainer;
	
	  var numberFilter = $filter('number');
	  /**
	   * @name currencyPair
	   * @type {function}
	   *
	   * @description
	   * Selector for currency pair data processing
	   *
	   * @returns {object} currency pair with rates data object
	   */
	  var currencyPair = stateContainer.createSelector(function (state) {
	    var currencyPairData = Object.assign({}, state.currencyPair.data, state.currencyRates.data);
	    return currencyPairData;
	  });
	
	  /**
	   * @name accountsPayingFrom
	   * @type {function}
	   *
	   * @description
	   * Selector for accounts paying from data processing
	   *
	   * @returns {array} accounts paying from with account data
	   */
	  var accountsPayingFrom = stateContainer.createSelector(function (state) {
	    var currencySell = state.currencyPair.data.pairKey.split('/')[0];
	    return state.currencyPair.data.accounts.filter(function (account) {
	      return account.balance.currencyCode === currencySell;
	    }).sort(function (item1, item2) {
	      return item2.balance.amount - item1.balance.amount;
	    });
	  });
	
	  /**
	   * @name accountsPayingTo
	   * @type {function}
	   *
	   * @description
	   * Selector for accounts paying to data processing
	   *
	   * @returns {array} accounts paying to with account data
	   */
	  var accountsPayingTo = stateContainer.createSelector(function (state) {
	    var currencyBuy = state.currencyPair.data.pairKey.split('/')[1];
	    return state.currencyPair.data.accounts.filter(function (account) {
	      return account.balance.currencyCode === currencyBuy;
	    }).sort(function (item1, item2) {
	      return item2.balance.amount - item1.balance.amount;
	    });
	  });
	
	  /**
	   * @description
	   * Checks if currency pair data is available
	   *
	   * @name isCurrencyPairAvailable
	   * @type {function}
	   * @param {object} currencyPair
	   * @returns {boolean} returns true if currency pair data is not present
	   */
	  var isCurrencyPairAvailable = stateContainer.createSelector(function (state) {
	    return Object.keys(state.currencyPair.data).length;
	  });
	
	  /**
	   * @description
	   * Returns error object by error code
	   *
	   * @public
	   * @name getError
	   * @type {function}
	   */
	  var getError = function getError(code) {
	    return errors[code];
	  };
	
	  /**
	   * @description
	   * Appends + or - sign if number is positive or negative
	   *
	   * @public
	   * @name showSign
	   * @type {function}
	   * @param {number} number     Number inputed
	   * @param {number} decimals   Number of decimals
	   *
	   * @returns {string}          String with appended sign and number
	   */
	  var showSign = function showSign(number, decimals) {
	    var absNumber = decimals ? Math.abs(number).toFixed(decimals) : Math.abs(number);
	    var sign = number > 0 ? '+' : '-';
	    var localizedNumber = decimals ? numberFilter(absNumber, decimals) : absNumber;
	    return sign + ' ' + localizedNumber;
	  };
	
	  return {
	    currencyPair: currencyPair,
	    isCurrencyPairAvailable: isCurrencyPairAvailable,
	    accountsPayingFrom: accountsPayingFrom,
	    accountsPayingTo: accountsPayingTo,
	    getError: getError,
	    showSign: showSign
	  };
	};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	"use strict";

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-fx-trade-order-ng.js.map