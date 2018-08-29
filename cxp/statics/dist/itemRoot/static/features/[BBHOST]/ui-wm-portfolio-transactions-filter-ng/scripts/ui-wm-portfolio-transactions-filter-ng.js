(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-dropdown-select-ng"), require("vendor-bb-angular-ng-messages"), require("vendor-bb-angular"), require("lib-bb-event-bus-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-wm-portfolio-transactions-filter-ng", ["ui-bb-dropdown-select-ng", "vendor-bb-angular-ng-messages", "vendor-bb-angular", "lib-bb-event-bus-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-wm-portfolio-transactions-filter-ng"] = factory(require("ui-bb-dropdown-select-ng"), require("vendor-bb-angular-ng-messages"), require("vendor-bb-angular"), require("lib-bb-event-bus-ng"));
	else
		root["ui-wm-portfolio-transactions-filter-ng"] = factory(root["ui-bb-dropdown-select-ng"], root["vendor-bb-angular-ng-messages"], root["vendor-bb-angular"], root["lib-bb-event-bus-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_54__, __WEBPACK_EXTERNAL_MODULE_93__, __WEBPACK_EXTERNAL_MODULE_120__) {
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

	module.exports = __webpack_require__(119);

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_54__;

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_93__;

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libBbEventBusNg = __webpack_require__(120);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _vendorBbAngular = __webpack_require__(93);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _vendorBbAngularNgMessages = __webpack_require__(54);
	
	var _vendorBbAngularNgMessages2 = _interopRequireDefault(_vendorBbAngularNgMessages);
	
	var _uiBbDropdownSelectNg = __webpack_require__(27);
	
	var _uiBbDropdownSelectNg2 = _interopRequireDefault(_uiBbDropdownSelectNg);
	
	var _component = __webpack_require__(121);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	
	/**
	 * @typedef {Object}               initialFilterState  - Initial state of transactions` filter
	 * @property {String}              instrumentName      - Name of the instrument in transaction
	 * @property {String}              isin                - Instrument/asset international code
	 * @property {String}              counterpartyName    - Name of counterparty of the transaction
	 * @property {String}              counterpartyAccount - Account id of counterpart in transaction
	 * @property {timePeriod}          timePeriod          - Time period of transactions to filter
	 * @property {assetClass}          assetClass          - Asset class selected to filter
	 * @property {transactionCategory} transactionCategory - Transactions category selected to filter
	 * @property {account}             account             - Acount selected to filter
	 * @property {Number}              amountRangeFrom     - Amount to filter from
	 * @property {Number}              amountRangeTo       - Amount to filter to
	 */
	
	/**
	* @typedef {Object}        timePeriod
	* @property {Date}         startDate                  - start date
	* @property {Date}         endDate                    - end date
	*/
	
	/**
	* @typedef {Object}        assetClass
	* @property {String}       name                       - asset class name
	* @property {String}       id                         - id of asset class
	*/
	
	/**
	* @typedef {Object}        transactionCategory
	* @property {String}       name                       - transaction category name
	* @property {String}       id                         - id of transaction category
	*/
	
	/**
	* @typedef {Object}        account
	* @property {String}       name                       - account name
	* @property {String}       id                         - id of account
	*/
	
	/**
	* @typedef {Object}        validation
	* @property {String}       nameInputValidationPattern   - validation pattern for name fields
	* @property {String}       nameInputMaxLength           - maximum length for input
	* @property {String}       numberInputValidationPattern - validation pattern for amount
	*/
	
	var dependencyKeys = [_uiBbDropdownSelectNg2.default, _vendorBbAngularNgMessages2.default, _libBbEventBusNg2.default]; /**
	                                                                                                                        * @module ext-portfolio-transactions-filter
	                                                                                                                        *
	                                                                                                                        * @description
	                                                                                                                        * Transactions filter`s module.
	                                                                                                                        *
	                                                                                                                        * @example
	                                                                                                                        * // In an extension:
	                                                                                                                        * // file: scripts/index.js
	                                                                                                                        * import uiBbPortfolioTransactionsFilterKey from 'ui-wm-portfolio-transactions-filter-ng';
	                                                                                                                        *
	                                                                                                                        * export const dependencyKeys = [
	                                                                                                                        *   uiBbPortfolioTransactionsFilterKey,
	                                                                                                                        * ];
	                                                                                                                        *
	                                                                                                                        */
	exports.default = _vendorBbAngular2.default.module('ui-wm-portfolio-transactions-filter-ng', dependencyKeys).component('uiWmPortfolioTransactionsFilter', _component2.default).name;

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_120__;

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libBbEventBusNg = __webpack_require__(120);
	
	var _controller = __webpack_require__(122);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _template = __webpack_require__(123);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name TransactionsFilterComponent
	 * @ngkey transactionsFilter
	 * @type {object}
	 * @description
	 * Transactions filter component.
	 *
	 * @example
	 * <div class="col-xs-12">
	 *   <ui-wm-portfolio-transactions-filter
	 *   data-on-filter-apply="$ctrl.applyFilter($filter)"
	 *   data-on-filter-cancel="$ctrl.closeFilter()"
	 *   data-filter-time-period-config="ext.helpers.filterTimePeriodConfig"
	 *   data-filter-transaction-categories="ext.helpers.transactionCategories"
	 *   data-filter-accounts="ext.helpers.accounts"
	 *   data-filter-asset-classes="ext.helpers.assetClasses"
	 *   data-filter-btn-label="portfolioTransactions.filter"
	 *   data-filter-labels="{
	 *       instrumentName: ('portfolioTransactions.filter.instrumentName' | i18n),
	 *       counterpartyName: ('portfolioTransactions.filter.counterpartyName' | i18n),
	 *       counterpartyNameExample: ('portfolioTransactions.filter.counterpartyNameExample' | i18n),
	 *       counterpartyAccount: ('portfolioTransactions.filter.counterpartyAccount' | i18n),
	 *       counterpartyAccountExample: ('portfolioTransactions.filter.counterpartyAccountEx' | i18n),
	 *       instrumentNameExample: ('portfolioTransactions.filter.instrumentNameExample' | i18n),
	 *       ISIN: ('portfolioTransactions.filter.ISIN' | i18n),
	 *       ISINExample: ('portfolioTransactions.filter.ISINExample' | i18n),
	 *       timePeriod: ('portfolioTransactions.filter.timePeriod' | i18n),
	 *       assetClass: ('portfolioTransactions.filter.assetClass' | i18n),
	 *       transactionCategory: ('portfolioTransactions.filter.transactionCategory' | i18n),
	 *       account: ('portfolioTransactions.filter.account' | i18n),
	 *       amountRange: ('portfolioTransactions.filter.amountRange' | i18n),
	 *       amountRangeFrom: ('portfolioTransactions.filter.amountRangeFrom' | i18n),
	 *       amountRangeTo: ('portfolioTransactions.filter.amountRangeTo' | i18n),
	 *       amountRangeExample: ('portfolioTransactions.filter.amountRangeExample' | i18n),
	 *       clearSelected: ('portfolioTransactions.filter.clearSelected' | i18n),
	 *       cancel: ('portfolioTransactions.filter.cancel' | i18n),
	 *       applyFilters: ('portfolioTransactions.filter.applyFilters' | i18n)
	 *   }">
	 </ui-wm-portfolio-transactions-filter>
	 * </div>
	 */
	
	var TransactionsFilterComponent = {
	  template: _template2.default,
	  controller: [_libBbEventBusNg.eventBusKey, _controller2.default],
	  controllerAs: '$transactionsFilterCtrl',
	  bindings: {
	    onFilterApply: '&',
	    onFilterCancel: '&',
	    setFilterOnEvent: '@',
	    filterTimePeriodConfig: '<',
	    filterAssetClasses: '<',
	    filterTransactionCategories: '<',
	    filterAccounts: '<',
	    filterLabels: '<',
	    filterErrors: '<',
	    initialFilterState: '<'
	  }
	};
	
	exports.default = TransactionsFilterComponent;

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = TransactionsFilterController;
	/* global angular */
	
	var NAME_INPUT_VALIDATION_PATTERN = '^[^&%<>#"~^\']*$';
	var MAX_LENGTH = 100;
	var NUMBER_INPUT_VALIDATION_PATTERN = '^-?[0-9]+[,|.]?[0-9]{0,2}$';
	
	function getStartDate() {
	  var startDate = new Date();
	  startDate.setMonth(startDate.getMonth() - 3);
	  return startDate.getDate() !== new Date().getDate() ? new Date(startDate.setDate(1)) : new Date(startDate.setDate(startDate.getDate() + 1));
	}
	
	/**
	 * @name defaultInitialFilterState
	 * @type {initialFilterState}
	 * @description Initial state of transactions` filter
	 */
	var defaultInitialFilterState = exports.defaultInitialFilterState = {
	  instrumentName: '',
	  isin: '',
	  counterpartyName: '',
	  counterpartyAccount: '',
	  timePeriod: {
	    startDate: getStartDate(),
	    endDate: new Date()
	  },
	  assetClass: {
	    name: 'All',
	    id: null
	  },
	  transactionCategory: {
	    name: 'All',
	    id: null
	  },
	  account: {
	    name: 'All',
	    id: null
	  },
	  amountRangeFrom: null,
	  amountRangeTo: null
	};
	
	/**
	 * @name TransactionsFilterController
	 * @ngkey TransactionsFilterController
	 * @type {object}
	 * @description
	 * Portfolio Transactions controller.
	 */
	function TransactionsFilterController(eventBus) {
	  var $ctrl = this;
	  var initialFilterState = $ctrl.initialFilterState || defaultInitialFilterState;
	
	  /**
	   * @name TransactionsFilterController#state
	   * @description Controller's state object
	   * @type {object}
	   * @property {object}       filter          - Current state of filter
	   * @property {object}       appliedFilter   - Filter state that was applied to transactions` list
	   * @property {validation}   validation      - Properties related to filer validation
	   */
	  var state = {
	    filter: angular.copy(initialFilterState),
	    validation: {
	      nameInputValidationPattern: NAME_INPUT_VALIDATION_PATTERN,
	      nameInputMaxLength: MAX_LENGTH,
	      numberInputValidationPattern: NUMBER_INPUT_VALIDATION_PATTERN
	    },
	    appliedFilter: null
	  };
	
	  /**
	   * @description
	   * Closes filter popover
	   *
	   * @private
	   * @name TransactionsFilterController#closeFilter
	   * @type {function}
	   */
	  var closeFilter = function closeFilter() {
	    if ($ctrl.onFilterCancel) {
	      $ctrl.onFilterCancel();
	    }
	  };
	
	  /**
	   * @description
	   * Method to apply selected filters. Updates inner state of controller,
	   * invokes components callback 'onFilterApply',
	   * closes filter popover
	   *
	   * @public
	   * @name TransactionsFilterController#applyFilters
	   * @type {function}
	   */
	  var applyFilters = function applyFilters() {
	    $ctrl.state.appliedFilter = angular.equals($ctrl.state.filter, initialFilterState) ? null : angular.copy($ctrl.state.filter);
	
	    closeFilter();
	
	    if ($ctrl.onFilterApply) {
	      $ctrl.onFilterApply({
	        $filter: $ctrl.state.appliedFilter
	      });
	    }
	  };
	
	  /**
	   * @description
	   * Informs whether filter is applied to transactions` list
	   *
	   * @public
	   * @name TransactionsFilterController#isFilterApplied
	   * @type {function}
	   */
	  var isFilterApplied = function isFilterApplied() {
	    return $ctrl.state.appliedFilter !== null;
	  };
	
	  /**
	   * @description
	   * Resets filter state to state that filter had before current filter popup`s opening,
	   * closes filter popover
	   *
	   * @public
	   * @name TransactionsFilterController#cancelFilter
	   * @type {function}
	   */
	  var cancelFilter = function cancelFilter() {
	    $ctrl.state.filter = angular.copy($ctrl.state.appliedFilter ? $ctrl.state.appliedFilter : initialFilterState);
	    closeFilter();
	  };
	
	  /**
	   * @description
	   * Resets filter`s state to initial filter`s state
	   *
	   * @public
	   * @name TransactionsFilterController#clearSelectedFilters
	   * @type {function}
	   * Resets filter state to initial state
	   */
	  var clearSelectedFilters = function clearSelectedFilters() {
	    $ctrl.state.filter = angular.copy(initialFilterState);
	  };
	
	  /**
	   * @description
	   * Set filter according to the data passed
	   *
	   * @private
	   * @type {function}
	   */
	  var setFilter = function setFilter(_ref) {
	    var account = _ref.account,
	        instrumentName = _ref.instrumentName;
	
	    $ctrl.state.filter = angular.copy(initialFilterState);
	
	    var selectedAccount = $ctrl.filterAccounts.filter(function (item) {
	      return item.id === account.id;
	    })[0];
	    var accountClone = angular.copy(selectedAccount);
	
	    Object.assign($ctrl.state.filter, { account: accountClone, instrumentName: instrumentName });
	    $ctrl.applyFilters();
	  };
	
	  /**
	   * @description Adds subscriptions to bus events
	   * @type {function}
	   */
	  var bindEvents = function bindEvents() {
	    if ($ctrl.setFilterOnEvent) {
	      eventBus.subscribe($ctrl.setFilterOnEvent, setFilter);
	    }
	  };
	
	  var $onInit = function $onInit() {
	    bindEvents();
	  };
	
	  Object.assign($ctrl, {
	    state: state,
	    $onInit: $onInit,
	    applyFilters: applyFilters,
	    isFilterApplied: isFilterApplied,
	    cancelFilter: cancelFilter,
	    clearSelectedFilters: clearSelectedFilters
	  });
	}

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

	module.exports = "<form\n  name=\"transactionsFilterForm\"\n  class=\"clearfix\"\n  data-ng-submit=\"$transactionsFilterCtrl.applyFilters();\"\n  data-role=\"portfolio-transactions-filter\"\n>\n  <div class=\"row\">\n    <div class=\"col-12 col-sm-10 col-md-8 col-lg-6\">\n\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <div\n            class=\"form-group\"\n            data-ng-class=\"{\n              'has-error':\n                transactionsFilterForm.instrumentName.$error.pattern ||\n                transactionsFilterForm.instrumentName.$error.maxlength\n            }\"\n          >\n            <label data-ng-bind=\"$transactionsFilterCtrl.filterLabels.instrumentName\"></label>\n            <input\n              name=\"instrumentName\"\n              class=\"form-control\"\n              data-ng-model=\"$transactionsFilterCtrl.state.filter.instrumentName\"\n              data-role=\"transaction-instrument-name\"\n              data-ng-pattern=\"$transactionsFilterCtrl.state.validation.nameInputValidationPattern\"\n              data-ng-maxlength=\"$transactionsFilterCtrl.state.validation.nameInputMaxLength\"\n            />\n            <small\n              class=\"text-muted\"\n              data-ng-hide=\"\n                transactionsFilterForm.instrumentName.$error.pattern ||\n                transactionsFilterForm.instrumentName.$error.maxlength\n              \"\n              data-ng-bind=\"$transactionsFilterCtrl.filterLabels.instrumentNameExample\"\n            ></small>\n            <small\n              data-ng-messages=\"transactionsFilterForm.instrumentName.$error\"\n              data-role=\"alert\"\n              class=\"text-danger\"\n            >\n              <span\n                data-ng-message=\"pattern\"\n                data-ng-bind=\"$transactionsFilterCtrl.filterErrors.instrumentName\"\n              ></span>\n              <span\n                data-ng-message=\"maxlength\"\n                data-ng-bind=\"$transactionsFilterCtrl.filterErrors.maxLength\"\n              ></span>\n            </small>\n          </div>\n        </div>\n        <div class=\"col-6\">\n          <div\n            class=\"form-group\"\n            data-ng-class=\"{\n              'has-error':\n                transactionsFilterForm.isin.$error.pattern ||\n                transactionsFilterForm.isin.$error.maxlength\n            }\"\n          >\n            <label data-ng-bind=\"$transactionsFilterCtrl.filterLabels.ISIN\"></label>\n            <input\n              name=\"isin\"\n              class=\"form-control\"\n              data-ng-model=\"$transactionsFilterCtrl.state.filter.isin\"\n              data-role=\"transaction-isin\"\n              data-ng-pattern=\"$transactionsFilterCtrl.state.validation.nameInputValidationPattern\"\n              data-ng-maxlength=\"$transactionsFilterCtrl.state.validation.nameInputMaxLength\"\n            />\n            <small\n              class=\"text-muted\"\n              data-ng-bind=\"$transactionsFilterCtrl.filterLabels.ISINExample\"\n              data-ng-hide=\"\n                transactionsFilterForm.isin.$error.pattern ||\n                transactionsFilterForm.isin.$error.maxlength\n              \"\n            ></small>\n            <small\n              data-ng-messages=\"transactionsFilterForm.isin.$error\"\n              data-role=\"alert\"\n              class=\"text-danger\"\n            >\n              <span\n                data-ng-message=\"pattern\"\n                data-ng-bind=\"$transactionsFilterCtrl.filterErrors.isin\"\n              ></span>\n              <span\n                data-ng-message=\"maxlength\"\n                data-ng-bind=\"$transactionsFilterCtrl.filterErrors.maxLength\"\n              ></span>\n            </small>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <div\n            class=\"form-group\"\n            data-ng-class=\"{\n              'has-error':\n                transactionsFilterForm.counterpartyName.$error.pattern ||\n                transactionsFilterForm.counterpartyName.$error.maxlength\n            }\"\n          >\n            <label data-ng-bind=\"$transactionsFilterCtrl.filterLabels.counterpartyName\"></label>\n            <input\n              name=\"counterpartyName\"\n              class=\"form-control\"\n              data-ng-model=\"$transactionsFilterCtrl.state.filter.counterpartyName\"\n              data-role=\"transaction-counterparty-name\"\n              data-ng-maxlength=\"$transactionsFilterCtrl.state.validation.nameInputMaxLength\"\n              data-ng-pattern=\"$transactionsFilterCtrl.state.validation.nameInputValidationPattern\"\n            />\n            <small\n              class=\"text-muted\"\n              data-ng-hide=\"\n                transactionsFilterForm.counterpartyName.$error.pattern ||\n                transactionsFilterForm.counterpartyName.$error.maxlength\n              \"\n              data-ng-bind=\"$transactionsFilterCtrl.filterLabels.counterpartyNameExample\"\n            ></small>\n            <small\n              data-ng-messages=\"transactionsFilterForm.counterpartyName.$error\"\n              data-role=\"alert\"\n              class=\"text-danger\"\n            >\n              <span\n                data-ng-message=\"pattern\"\n                data-ng-bind=\"$transactionsFilterCtrl.filterErrors.counterpartyName\"\n              ></span>\n              <span\n                data-ng-message=\"maxlength\"\n                data-ng-bind=\"$transactionsFilterCtrl.filterErrors.maxLength\"\n              ></span>\n            </small>\n          </div>\n        </div>\n        <div class=\"col-6\">\n          <div\n            class=\"form-group\"\n            data-ng-class=\"{\n              'has-error':\n                transactionsFilterForm.counterpartyAccount.$error.pattern ||\n                transactionsFilterForm.counterpartyAccount.$error.maxlength\n            }\"\n          >\n            <label data-ng-bind=\"$transactionsFilterCtrl.filterLabels.counterpartyAccount\"></label>\n            <input\n              name=\"counterpartyAccount\"\n              class=\"form-control\"\n              data-ng-model=\"$transactionsFilterCtrl.state.filter.counterpartyAccount\"\n              data-role=\"transaction-counterparty-account\"\n              data-ng-maxlength=\"$transactionsFilterCtrl.state.validation.nameInputMaxLength\"\n              data-ng-pattern=\"$transactionsFilterCtrl.state.validation.nameInputValidationPattern\">\n            <small\n              class=\"text-muted\"\n              data-ng-hide=\"\n                transactionsFilterForm.counterpartyAccount.$error.pattern ||\n                transactionsFilterForm.counterpartyAccount.$error.maxlength\n              \"\n              data-ng-bind=\"$transactionsFilterCtrl.filterLabels.counterpartyAccountExample\"\n            ></small>\n            <small\n              data-ng-messages=\"transactionsFilterForm.counterpartyAccount.$error\"\n              data-role=\"alert\"\n              class=\"text-danger\"\n            >\n              <span\n                data-ng-message=\"pattern\"\n                data-ng-bind=\"$transactionsFilterCtrl.filterErrors.counterpartyAccount\"\n              ></span>\n              <span\n                data-ng-message=\"maxlength\"\n                data-ng-bind=\"$transactionsFilterCtrl.filterErrors.maxLength\"\n              ></span>\n            </small>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <div class=\"form-group\">\n            <label data-ng-bind=\"$transactionsFilterCtrl.filterLabels.assetClass\"></label>\n            <ui-bb-dropdown-select-ng\n              data-ng-model=\"$transactionsFilterCtrl.state.filter.assetClass\"\n              data-selected-as=\"$option.name\"\n            >\n              <ui-bb-dropdown-option-ng\n                data-option=\"item\"\n                data-role=\"transaction-asset-class\"\n                data-ng-repeat=\"item in $transactionsFilterCtrl.filterAssetClasses\"\n                class=\"list-group-item-text\"\n              >\n                <a href=\"javascript:void(0)\">\n                  {{::$option.name}}\n                </a>\n              </ui-bb-dropdown-option-ng>\n            </ui-bb-dropdown-select-ng>\n          </div>\n        </div>\n        <div class=\"col-6\">\n          <div class=\"form-group\">\n            <label data-ng-bind=\"$transactionsFilterCtrl.filterLabels.transactionCategory\"></label>\n            <ui-bb-dropdown-select-ng\n              data-ng-model=\"$transactionsFilterCtrl.state.filter.transactionCategory\"\n              data-selected-as=\"$option.name\"\n            >\n              <ui-bb-dropdown-option-ng\n                data-option=\"item\"\n                data-role=\"transaction-category\"\n                data-ng-repeat=\"item in $transactionsFilterCtrl.filterTransactionCategories\"\n                class=\"list-group-item-text\"\n              >\n                <a href=\"javascript:void(0)\">\n                  {{::$option.name}}\n                </a>\n              </ui-bb-dropdown-option-ng>\n            </ui-bb-dropdown-select-ng>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <div class=\"form-group\">\n            <label data-ng-bind=\"$transactionsFilterCtrl.filterLabels.timePeriod\"></label>\n            <ui-bb-calendar-popup-ng\n              data-config=\"$transactionsFilterCtrl.filterTimePeriodConfig\"\n              data-role=\"transactions-time-period\"\n              data-date-range=\"$transactionsFilterCtrl.state.filter.timePeriod\"\n            ></ui-bb-calendar-popup-ng>\n          </div>\n        </div>\n        <div class=\"col-6\">\n          <div class=\"form-group\">\n            <label data-ng-bind=\"$transactionsFilterCtrl.filterLabels.account\"></label>\n            <ui-bb-dropdown-select-ng\n              data-ng-model=\"$transactionsFilterCtrl.state.filter.account\"\n              data-selected-as=\"$option.name\"\n            >\n              <ui-bb-dropdown-option-ng\n                data-option=\"item\"\n                data-role=\"transaction-account\"\n                data-ng-repeat=\"item in $transactionsFilterCtrl.filterAccounts\"\n                class=\"list-group-item-text\"\n              >\n                <a href=\"javascript:void(0)\">\n                  {{::$option.name}}\n                </a>\n              </ui-bb-dropdown-option-ng>\n            </ui-bb-dropdown-select-ng>\n          </div>\n        </div>\n      </div>\n\n      <div\n        class=\"form-group\"\n        data-ng-class=\"{ 'has-error': transactionsFilterForm.amountTo.$error.required }\"\n      >\n        <label data-ng-bind=\"$transactionsFilterCtrl.filterLabels.amountRange\"></label>\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <input\n              name=\"amountFrom\"\n              class=\"form-control\"\n              data-role=\"transaction-amount-range-from\"\n              data-ng-model=\"$transactionsFilterCtrl.state.filter.amountRangeFrom\"\n              data-ng-required=\"$transactionsFilterCtrl.state.filter.amountRangeTo\"\n              data-ng-pattern=\"$transactionsFilterCtrl.state.validation.numberInputValidationPattern\"\n              placeholder=\"{{$transactionsFilterCtrl.filterLabels.amountRangeFrom}}\"\n            />\n            <small\n              class=\"text-muted\"\n              data-ng-hide=\"\n                transactionsFilterForm.amountFrom.$error.required ||\n                transactionsFilterForm.amountFrom.$error.pattern\n              \"\n              data-ng-bind=\"$transactionsFilterCtrl.filterLabels.amountRangeExample\"\n            ></small>\n            <small\n              data-ng-messages=\"transactionsFilterForm.amountFrom.$error\"\n              data-role=\"alert\"\n              class=\"text-danger\"\n            >\n              <span\n                data-ng-message=\"required\"\n                data-ng-bind=\"$transactionsFilterCtrl.filterErrors.amountRange\"\n              ></span>\n              <span\n                data-ng-message=\"pattern\"\n                data-ng-bind=\"$transactionsFilterCtrl.filterErrors.onlyNumbers\"\n              ></span>\n            </small>\n          </div>\n          <div class=\"col-6\">\n            <input\n              name=\"amountTo\"\n              class=\"form-control\"\n              data-role=\"transaction-amount-range-to\"\n              data-ng-model=\"$transactionsFilterCtrl.state.filter.amountRangeTo\"\n              data-ng-required=\"$transactionsFilterCtrl.state.filter.amountRangeFrom\"\n              data-ng-pattern=\"$transactionsFilterCtrl.state.validation.numberInputValidationPattern\"\n              placeholder=\"{{$transactionsFilterCtrl.filterLabels.amountRangeTo}}\"\n            />\n            <small\n              data-ng-messages=\"transactionsFilterForm.amountTo.$error\"\n              data-role=\"alert\"\n              class=\"text-danger\"\n            >\n              <span\n                data-ng-message=\"required\"\n                data-ng-bind=\"$transactionsFilterCtrl.filterErrors.amountRange\"\n              ></span>\n              <span\n                data-ng-message=\"pattern\"\n                data-ng-bind=\"$transactionsFilterCtrl.filterErrors.onlyNumbers\"\n              ></span>\n            </small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"float-right\">\n    <button\n      class=\"btn btn-link portfolio-transactions-filter-panel-footer-action\"\n      type=\"button\"\n      data-ng-click=\"$transactionsFilterCtrl.clearSelectedFilters()\"\n    >\n      <span data-ng-bind=\"$transactionsFilterCtrl.filterLabels.clearSelected\"></span>\n    </button>\n    <button\n      class=\"btn btn-outline-secondary\"\n      type=\"button\"\n      data-ng-click=\"$transactionsFilterCtrl.cancelFilter()\"\n    >\n      <span data-ng-bind=\"$transactionsFilterCtrl.filterLabels.cancel\"></span>\n    </button>\n    <button\n      class=\"btn btn-primary\"\n      data-ng-disabled=\"transactionsFilterForm.$invalid\"\n      type=\"submit\"\n    >\n      <span data-ng-bind=\"$transactionsFilterCtrl.filterLabels.applyFilters\"></span>\n    </button>\n  </div>\n</form>"

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-wm-portfolio-transactions-filter-ng.js.map