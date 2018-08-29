(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-format-amount-ng"), require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-transaction-details-ng", ["ui-bb-format-amount-ng", "vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-transaction-details-ng"] = factory(require("ui-bb-format-amount-ng"), require("vendor-bb-angular"));
	else
		root["ui-bb-transaction-details-ng"] = factory(root["ui-bb-format-amount-ng"], root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_72__) {
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

	module.exports = __webpack_require__(82);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_72__;

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(72);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbFormatAmountNg = __webpack_require__(4);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _component = __webpack_require__(83);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _controller = __webpack_require__(84);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 *
	 * @description
	 * The angular module name
	 */
	/**
	 * @module ui-bb-transaction-details-ng
	 * @description
	 * UI transaction-details component
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbTransactionDetailsKey from 'ui-bb-transaction-details-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbTransactionDetailsKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <li ng-repeat="transaction in $ctrl.transactions">
	 *   <ui-bb-transaction-details-ng
	 *     transaction="transaction"
	 *     show-account-number="$ctrl.isMultipleAccounts"
	 *     on-change-category="$ctrl.onChangeCategory"
	 *     button-labels="{
	 *       changeCategory: 'Change Category',
	 *     }"
	 *     field-labels="{
	 *       accountNumber: 'Account Number',
	 *       transactionType: 'Transaction Type',
	 *       counterPartyName: 'Counter Party Name',
	 *       counterPartyAccountNumber: 'Counter Party Account Number',
	 *       scheduledDate: 'Scheduled Date',
	 *       transactionReference: 'Transaction Reference',
	 *       instructedCurrency: 'Instructed Currency',
	 *       currencyExchangeRate: 'Currency Exchange Rate',
	 *       instructedAmount: 'Instructed Amount',
	 *       description: 'Description',
	 *       category: 'Category',
	 *       checkSerialNumber: 'Check Number',
	 *       runningBalance: 'Running Balance',
	 *     }"
	 *   >
	 *   </ui-bb-transaction-details-ng>
	 * </li>
	 */
	
	exports.default = _vendorBbAngular2.default.module('ui-bb-transaction-details-ng', [_uiBbFormatAmountNg2.default]).component('uiBbTransactionDetailsNg', _component2.default).controller('uiBbTransactionDetailsController', _controller2.default).name;

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable max-len */
	
	var uiBbTransactionDetailsComponent = {
	  controller: 'uiBbTransactionDetailsController',
	  bindings: {
	    transaction: '<',
	    showAccountNumber: '<',
	    onChangeCategory: '&?',
	    buttonLabels: '<',
	    fieldLabels: '<'
	  },
	  template: '\n    <div class="transaction-details">\n      <div class="transaction-details-change-category-btn row" data-ng-if="$ctrl.transaction.category && $ctrl.onChangeCategory">\n        <p class="col-12">\n          <button class="btn btn-link p-0" data-ng-click="$ctrl.changeCategory()" data-ng-bind="$ctrl.buttonLabels.changeCategory"></button>\n        </p>\n      </div>\n      <div class="transaction-details-account-number row" data-ng-if="$ctrl.showAccountNumber">\n        <p class="transaction-details-label col-6 col-md-4 font-weight-bold" data-ng-bind="$ctrl.fieldLabels.accountNumber"></p>\n        <p class="transaction-details-value col-6 col-md-8" data-ng-bind="$ctrl.transaction.accountNumber"></p>\n      </div>\n      <div class="transaction-details-type-group row" data-ng-if="$ctrl.transaction.typeGroup">\n        <p class="transaction-details-label col-6 col-md-4 font-weight-bold" data-ng-bind="$ctrl.fieldLabels.transactionType"></p>\n        <p class="transaction-details-value col-6 col-md-8" data-ng-bind="$ctrl.transaction.typeGroup"></p>\n      </div>\n      <div class="transaction-details-counter-party-name row" data-ng-if="$ctrl.transaction.counterPartyName">\n        <p class="transaction-details-label col-6 col-md-4 font-weight-bold" data-ng-bind="$ctrl.fieldLabels.counterPartyName"></p>\n        <p class="transaction-details-value col-6 col-md-8" data-ng-bind="$ctrl.transaction.counterPartyName"></p>\n      </div>\n      <div class="transaction-details-counter-party-account-number row" data-ng-if="$ctrl.transaction.counterPartyAccountNumber">\n        <p class="transaction-details-label col-6 col-md-4 font-weight-bold" data-ng-bind="$ctrl.fieldLabels.counterPartyAccountNumber"></p>\n        <p class="transaction-details-value col-6 col-md-8" data-ng-bind="$ctrl.transaction.counterPartyAccountNumber"></p>\n      </div>\n      <div class="transaction-details-scheduled-date row" data-ng-if="$ctrl.transaction.scheduledDate">\n        <p class="transaction-details-label col-6 col-md-4 font-weight-bold" data-ng-bind="$ctrl.fieldLabels.scheduledDate"></p>\n        <p class="transaction-details-value col-6 col-md-8" data-ng-bind="$ctrl.transaction.scheduledDate"></p>\n      </div>\n      <div class="transaction-details-reference row" data-ng-if="$ctrl.transaction.reference">\n        <p class="transaction-details-label col-6 col-md-4 font-weight-bold" data-ng-bind="$ctrl.fieldLabels.transactionReference"></p>\n        <p class="transaction-details-value col-6 col-md-8" data-ng-bind="$ctrl.transaction.reference"></p>\n      </div>\n      <div class="transaction-details-instructed-currency row" data-ng-if="$ctrl.transaction.instructedCurrency">\n        <p class="transaction-details-label col-6 col-md-4 font-weight-bold" data-ng-bind="$ctrl.fieldLabels.instructedCurrency"></p>\n        <p class="transaction-details-value col-6 col-md-8" data-ng-bind="$ctrl.transaction.instructedCurrency"></p>\n      </div>\n      <div class="transaction-details-exchange-rate row" data-ng-if="$ctrl.transaction.currencyExchangeRate">\n        <div class="transaction-details-label col-6 col-md-4 font-weight-bold" data-ng-bind="$ctrl.fieldLabels.currencyExchangeRate"></div>\n        <div class="transaction-details-value col-6 col-md-8" data-ng-bind="$ctrl.transaction.currencyExchangeRate"></div>\n      </div>\n      <div class="transaction-details-instructed-amount row" data-ng-if="$ctrl.transaction.instructedAmount">\n        <p class="transaction-details-label col-6 col-md-4 font-weight-bold" data-ng-bind="$ctrl.fieldLabels.instructedAmount"></p>\n        <p class="transaction-details-value col-6 col-md-8">\n          <span class="debit-credit-sign" data-ng-bind="$ctrl.transaction.debitCreditSign"></span>\n          <ui-bb-format-amount-ng\n            class="amount-regular-color"\n            data-amount="$ctrl.transaction.instructedAmount"\n            data-currency="$ctrl.transaction.instructedCurrency">\n          </ui-bb-format-amount-ng>\n        </p>\n      </div>\n      <div class="transaction-details-description row" data-ng-if="$ctrl.transaction.description">\n        <p class="transaction-details-label col-6 col-md-4 font-weight-bold" data-ng-bind="$ctrl.fieldLabels.description"></p>\n        <p class="transaction-details-value col-6 col-md-8" data-ng-bind="$ctrl.transaction.description"></p>\n      </div>\n      <div class="transaction-details-category row" data-ng-if="$ctrl.transaction.category">\n        <p class="transaction-details-label col-6 col-md-4 font-weight-bold" data-ng-bind="$ctrl.fieldLabels.category"></p>\n        <p class="transaction-details-value col-6 col-md-8" data-ng-bind="$ctrl.transaction.category"></p>\n      </div>\n      <div class="transaction-details-check-serial-number row" data-ng-if="$ctrl.transaction.checkSerialNumber">\n        <p class="transaction-details-label col-6 col-md-4 font-weight-bold" data-ng-bind="$ctrl.fieldLabels.checkSerialNumber"></p>\n        <p class="transaction-details-value col-6 col-md-8" data-ng-bind="$ctrl.transaction.checkSerialNumber"></p>\n      </div>\n      <div class="transaction-details-running-balance row" data-ng-if="$ctrl.transaction.runningBalance">\n        <p class="transaction-details-label col-6 col-md-4 font-weight-bold" data-ng-bind="$ctrl.fieldLabels.runningBalance"></p>\n        <p class="transaction-details-value col-6 col-md-8">\n          <ui-bb-format-amount-ng\n            class="amount-regular-color"\n            data-amount="$ctrl.transaction.runningBalance">\n          </ui-bb-format-amount-ng>\n        </p>\n      </div>\n    </div>\n  '
	};
	
	exports.default = uiBbTransactionDetailsComponent;

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbTransactionDetailsController;
	/**
	 * @name uiBbTransactionDetailsController
	 * @ngkey uiBbTransactionDetailsController
	 * @type {object}
	 *
	 * @description
	 * Transaction details controller
	 */
	function uiBbTransactionDetailsController() {
	  var $ctrl = this;
	
	  /**
	   * @name uiBbTransactionDetailsController#changeCategory
	   * @type {function}
	   *
	   * @description
	   * Calls the function passed in the onChangeCategory binding, passing the transaction object used
	   * in this component
	   */
	  var changeCategory = function changeCategory() {
	    $ctrl.onChangeCategory({ transaction: $ctrl.transaction });
	  };
	
	  Object.assign($ctrl, {
	    changeCategory: changeCategory
	  });
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-transaction-details-ng.js.map