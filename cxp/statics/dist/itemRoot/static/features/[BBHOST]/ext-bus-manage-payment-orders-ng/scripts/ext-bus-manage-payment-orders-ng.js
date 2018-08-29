(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-calendar-popup-ng"), require("vendor-bb-uib-alert"), require("ui-bb-confirm-ng"), require("ui-bb-autocomplete-search-ng"), require("vendor-bb-angular"), require("ui-bb-substitute-error-ng"), require("ui-bb-load-more-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bus-format-amount-ng"), require("lib-bb-iban"), require("vendor-bb-uib-dropdown"), require("ui-bb-inline-status-ng"), require("ui-bb-sortable-column-ng"), require("ui-bus-payment-order-details-ng"), require("ui-bb-ellipsis-tooltip-ng"), require("ui-bb-search-box-ng"), require("ui-bb-paginator-ng"), require("ui-bb-modal-ng"), require("ui-bb-highlight-text-ng"), require("ui-bb-filter-form-actions-ng"), require("ui-bb-indeterminate-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bus-manage-payment-orders-ng", ["vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "ui-bb-loading-overlay-ng", "ui-bb-calendar-popup-ng", "vendor-bb-uib-alert", "ui-bb-confirm-ng", "ui-bb-autocomplete-search-ng", "vendor-bb-angular", "ui-bb-substitute-error-ng", "ui-bb-load-more-ng", "ui-bb-empty-state-ng", "ui-bb-notification-stripe-ng", "ui-bus-format-amount-ng", "lib-bb-iban", "vendor-bb-uib-dropdown", "ui-bb-inline-status-ng", "ui-bb-sortable-column-ng", "ui-bus-payment-order-details-ng", "ui-bb-ellipsis-tooltip-ng", "ui-bb-search-box-ng", "ui-bb-paginator-ng", "ui-bb-modal-ng", "ui-bb-highlight-text-ng", "ui-bb-filter-form-actions-ng", "ui-bb-indeterminate-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bus-manage-payment-orders-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-calendar-popup-ng"), require("vendor-bb-uib-alert"), require("ui-bb-confirm-ng"), require("ui-bb-autocomplete-search-ng"), require("vendor-bb-angular"), require("ui-bb-substitute-error-ng"), require("ui-bb-load-more-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bus-format-amount-ng"), require("lib-bb-iban"), require("vendor-bb-uib-dropdown"), require("ui-bb-inline-status-ng"), require("ui-bb-sortable-column-ng"), require("ui-bus-payment-order-details-ng"), require("ui-bb-ellipsis-tooltip-ng"), require("ui-bb-search-box-ng"), require("ui-bb-paginator-ng"), require("ui-bb-modal-ng"), require("ui-bb-highlight-text-ng"), require("ui-bb-filter-form-actions-ng"), require("ui-bb-indeterminate-ng"));
	else
		root["ext-bus-manage-payment-orders-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["ui-bb-loading-overlay-ng"], root["ui-bb-calendar-popup-ng"], root["vendor-bb-uib-alert"], root["ui-bb-confirm-ng"], root["ui-bb-autocomplete-search-ng"], root["vendor-bb-angular"], root["ui-bb-substitute-error-ng"], root["ui-bb-load-more-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-notification-stripe-ng"], root["ui-bus-format-amount-ng"], root["lib-bb-iban"], root["vendor-bb-uib-dropdown"], root["ui-bb-inline-status-ng"], root["ui-bb-sortable-column-ng"], root["ui-bus-payment-order-details-ng"], root["ui-bb-ellipsis-tooltip-ng"], root["ui-bb-search-box-ng"], root["ui-bb-paginator-ng"], root["ui-bb-modal-ng"], root["ui-bb-highlight-text-ng"], root["ui-bb-filter-form-actions-ng"], root["ui-bb-indeterminate-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_80__, __WEBPACK_EXTERNAL_MODULE_93__, __WEBPACK_EXTERNAL_MODULE_107__, __WEBPACK_EXTERNAL_MODULE_108__, __WEBPACK_EXTERNAL_MODULE_109__, __WEBPACK_EXTERNAL_MODULE_110__, __WEBPACK_EXTERNAL_MODULE_111__, __WEBPACK_EXTERNAL_MODULE_112__, __WEBPACK_EXTERNAL_MODULE_113__, __WEBPACK_EXTERNAL_MODULE_124__, __WEBPACK_EXTERNAL_MODULE_125__, __WEBPACK_EXTERNAL_MODULE_126__, __WEBPACK_EXTERNAL_MODULE_127__) {
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

	module.exports = __webpack_require__(123);

/***/ }),
/* 1 */,
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
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
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

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),
/* 38 */,
/* 39 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_80__;

/***/ }),
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_93__;

/***/ }),
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_107__;

/***/ }),
/* 108 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_108__;

/***/ }),
/* 109 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_109__;

/***/ }),
/* 110 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_110__;

/***/ }),
/* 111 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_111__;

/***/ }),
/* 112 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_112__;

/***/ }),
/* 113 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_113__;

/***/ }),
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.hooks = exports.helpers = exports.dependencyKeys = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(2);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbI18nNg = __webpack_require__(3);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbInlineStatusNg = __webpack_require__(108);
	
	var _uiBbInlineStatusNg2 = _interopRequireDefault(_uiBbInlineStatusNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(25);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbLoadMoreNg = __webpack_require__(36);
	
	var _uiBbLoadMoreNg2 = _interopRequireDefault(_uiBbLoadMoreNg);
	
	var _uiBbSortableColumnNg = __webpack_require__(109);
	
	var _uiBbSortableColumnNg2 = _interopRequireDefault(_uiBbSortableColumnNg);
	
	var _uiBusPaymentOrderDetailsNg = __webpack_require__(110);
	
	var _uiBusPaymentOrderDetailsNg2 = _interopRequireDefault(_uiBusPaymentOrderDetailsNg);
	
	var _uiBbEllipsisTooltipNg = __webpack_require__(111);
	
	var _uiBbEllipsisTooltipNg2 = _interopRequireDefault(_uiBbEllipsisTooltipNg);
	
	var _uiBbPaginatorNg = __webpack_require__(113);
	
	var _uiBbPaginatorNg2 = _interopRequireDefault(_uiBbPaginatorNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(4);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(37);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBusFormatAmountNg = __webpack_require__(80);
	
	var _uiBusFormatAmountNg2 = _interopRequireDefault(_uiBusFormatAmountNg);
	
	var _uiBbModalNg = __webpack_require__(124);
	
	var _uiBbModalNg2 = _interopRequireDefault(_uiBbModalNg);
	
	var _uiBbSearchBoxNg = __webpack_require__(112);
	
	var _uiBbSearchBoxNg2 = _interopRequireDefault(_uiBbSearchBoxNg);
	
	var _uiBbHighlightTextNg = __webpack_require__(125);
	
	var _uiBbHighlightTextNg2 = _interopRequireDefault(_uiBbHighlightTextNg);
	
	var _uiBbFilterFormActionsNg = __webpack_require__(126);
	
	var _uiBbFilterFormActionsNg2 = _interopRequireDefault(_uiBbFilterFormActionsNg);
	
	var _uiBbAutocompleteSearchNg = __webpack_require__(14);
	
	var _uiBbAutocompleteSearchNg2 = _interopRequireDefault(_uiBbAutocompleteSearchNg);
	
	var _uiBbCalendarPopupNg = __webpack_require__(8);
	
	var _uiBbCalendarPopupNg2 = _interopRequireDefault(_uiBbCalendarPopupNg);
	
	var _uiBbNotificationStripeNg = __webpack_require__(39);
	
	var _uiBbNotificationStripeNg2 = _interopRequireDefault(_uiBbNotificationStripeNg);
	
	var _uiBbConfirmNg = __webpack_require__(13);
	
	var _uiBbConfirmNg2 = _interopRequireDefault(_uiBbConfirmNg);
	
	var _uiBbIndeterminateNg = __webpack_require__(127);
	
	var _uiBbIndeterminateNg2 = _interopRequireDefault(_uiBbIndeterminateNg);
	
	var _vendorBbUibDropdown = __webpack_require__(107);
	
	var _vendorBbUibDropdown2 = _interopRequireDefault(_vendorBbUibDropdown);
	
	var _vendorBbUibAlert = __webpack_require__(12);
	
	var _vendorBbUibAlert2 = _interopRequireDefault(_vendorBbUibAlert);
	
	var _hooks = __webpack_require__(128);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	var _helpers = __webpack_require__(129);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _events = __webpack_require__(131);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bus-manage-payment-orders-ng
	 *
	 * @description
	 * Payment order overview extension.
	 *
	 * @example
	 * <!-- payment order widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bus-manage-payment-orders-ng</value>
	 * </property>
	 *
	 */
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbI18nNg2.default, _uiBbInlineStatusNg2.default, _uiBbSubstituteErrorNg2.default, _uiBbLoadMoreNg2.default, _uiBbSortableColumnNg2.default, _uiBusPaymentOrderDetailsNg2.default, _uiBbEllipsisTooltipNg2.default, _uiBbPaginatorNg2.default, _uiBbLoadingOverlayNg2.default, _uiBbEmptyStateNg2.default, _uiBusFormatAmountNg2.default, _uiBbModalNg2.default, _uiBbSearchBoxNg2.default, _uiBbHighlightTextNg2.default, _uiBbFilterFormActionsNg2.default, _uiBbAutocompleteSearchNg2.default, _uiBbCalendarPopupNg2.default, _uiBbNotificationStripeNg2.default, _uiBbConfirmNg2.default, _uiBbIndeterminateNg2.default, _vendorBbUibDropdown2.default, _vendorBbUibAlert2.default];
	
	var helpers = exports.helpers = _helpers2.default;
	
	var hooks = exports.hooks = extHooks;
	
	var events = exports.events = _events2.default;

/***/ }),
/* 124 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_124__;

/***/ }),
/* 125 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_125__;

/***/ }),
/* 126 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_126__;

/***/ }),
/* 127 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_127__;

/***/ }),
/* 128 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Hooks
	 * @type {Object}
	 */
	
	/**
	 * @name Hooks#defaultSortableColumn
	 *
	 * @description
	 * Return the key of the default sort column
	 *
	 * @type {function}
	 * @returns {string|null} Returns column key
	 */
	var defaultSortableColumn = exports.defaultSortableColumn = function defaultSortableColumn() {
	  return 'requestedExecutionDate';
	};
	
	/**
	 * @name Hooks#defaultSortableDirection
	 *
	 * @description
	 * defaultSortableDirection default hook
	 *
	 * @type {function}
	 * @returns {?string}
	 */
	var defaultSortableDirection = exports.defaultSortableDirection = function defaultSortableDirection() {
	  return 'DESC';
	};
	
	/**
	 * @name Hooks#processPaymentOrders
	 *
	 * @description
	 * Adds transactionInformation field to every payment order
	 *
	 * @type {function}
	 * @param {array} paymentOrders Collection of payment orders
	 * @returns {array}
	 */
	var processPaymentOrders = exports.processPaymentOrders = function processPaymentOrders(paymentOrders) {
	  return paymentOrders.map(function (paymentOrder) {
	    return Object.assign({}, paymentOrder, { transactionInformation: paymentOrder.creditTransferTransactionInformation[0] });
	  });
	};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libBbIban = __webpack_require__(93);
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _constants = __webpack_require__(130);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* globals window, document */
	
	
	/**
	 * @name Helpers
	 * @type {Object}
	 */
	
	var headers = [{
	  label: 'header.status',
	  sortable: {
	    key: 'status',
	    direction: 'ASC'
	  }
	}, {
	  label: 'header.debtor',
	  sortable: {
	    key: 'debtorName',
	    direction: 'ASC'
	  }
	}, {
	  label: 'header.creditor',
	  sortable: {
	    key: 'creditorName',
	    direction: 'ASC'
	  }
	}, {
	  label: 'header.currency',
	  sortable: {
	    key: 'currency',
	    direction: 'ASC'
	  }
	}, {
	  label: 'header.amount',
	  class: 'text-right',
	  sortable: {
	    key: 'amount',
	    direction: 'DESC'
	  }
	}, {
	  label: 'header.exec',
	  class: 'text-right',
	  sortable: {
	    key: 'requestedExecutionDate',
	    direction: 'DESC'
	  }
	}, {
	  label: 'header.actions',
	  class: 'text-center'
	}];
	
	/**
	 * @name Helpers#action
	 * @type {Object}
	 * @description Populate Actions's constant
	 */
	var action = Object.assign({}, _constants.Action);
	
	var isSortableActive = function isSortableActive(sortable, $ctrl) {
	  return sortable && sortable.key === $ctrl.state.paymentOrders.orderBy;
	};
	
	var calendarPopupConfig = {
	  minDate: _constants.Preferences.MIN_DATE,
	  maxMode: _constants.Preferences.MAX_MODE
	};
	
	/**
	 * @description
	 * Check if value is defined, not null and not empty
	 *
	 * @name Helpers#hasValue
	 * @type {function}
	 *
	 * @param {*} value  The value to check
	 * @return {boolean}
	 */
	var hasValue = function hasValue(value) {
	  return !!value;
	};
	
	/**
	 * @description
	 * Opens the modal window with selected Payment Order
	 *
	 * @name Helpers#openModalWindow
	 * @type {function}
	 *
	 * @param {object} ext                  extension reference
	 * @param {object} selectedPayment      Payment Order to be shown
	 */
	var openModalWindow = function openModalWindow(ext, selectedPayment) {
	  Object.assign(ext, { showModal: true, payment: selectedPayment });
	};
	
	/**
	 * @description
	 * Toggle row details visibility
	 *
	 * @name Helpers#closeModalWindow
	 * @type {function}
	 *
	 * @param {object} ext                extension reference
	 */
	var closeModalWindow = function closeModalWindow(ext) {
	  Object.assign(ext, { showModal: false, payment: null });
	};
	
	/**
	 * @name Helpers#isPaginationTypeMatch
	 *
	 * @description
	 * Checks if actual pagination type matches the one, defined in properties
	 *
	 * @type {Function}
	 * @param {Function} $ctrl      Current controller
	 * @param {String} type         Description of pagination type (pagination, load-more)
	 *
	 * @returns {Boolean}
	 */
	var isPaginationTypeMatch = function isPaginationTypeMatch($ctrl, type) {
	  return $ctrl.state.pagination.paginationType === type;
	};
	
	/**
	 * @name Helpers#getSearchQuery
	 * @type {function}
	 * @param {function} $ctrl      Current controller
	 * @description
	 * If search enabled returns current search query, otherwise false
	 * @returns {string|boolean}
	 */
	var getSearchQuery = function getSearchQuery($ctrl) {
	  return $ctrl.state.paymentOrders.searching && $ctrl.state.search.query;
	};
	
	exports.default = function (context) {
	  var _formatBySchema;
	
	  var i18n = context.$filter('i18n');
	
	  /**
	   * @name Helpers#searchLabelsTranslations
	   * @type {function}
	   * @description
	   * Returns object with translated labels necessary for search box component
	   * @returns {object}
	   */
	  var searchLabelsTranslations = function searchLabelsTranslations() {
	    return {
	      title: i18n('label.search.title'),
	      placeholder: i18n('label.search.placeholder'),
	      clear: i18n('label.search.clear'),
	      submit: i18n('label.search.submit')
	    };
	  };
	
	  /**
	   * @name Helpers#thereAreMatches
	   * @type {function}
	   * @description
	   * Checks if there has been any match result when searching
	   * @param {object} $ctrl Current controller
	   * @returns {boolean}
	   */
	  var thereAreMatches = function thereAreMatches($ctrl) {
	    return Boolean(!$ctrl.state.paymentOrders.loading && $ctrl.state.paymentOrders.searching && $ctrl.state.pagination.totalItems);
	  };
	
	  /**
	   * @name ifSearchingThen
	   * @inner
	   * @type {function}
	   * @description
	   * Returns `$then` if it is searching `$else` otherwise
	   * @param {object} $ctrl Current controller
	   * @param {*} $then It can be anything
	   * @param {*} $else It can be anything
	   * @returns {*}
	   */
	  var ifSearchingThen = function ifSearchingThen($ctrl, $then, $else) {
	    return $ctrl.state.paymentOrders.searching ? $then : $else;
	  };
	
	  /**
	   * @name Helpers#getEmptyIcon
	   * @type {function}
	   * @description
	   * Returns correct icon to be used when empty results
	   * @param {object} $ctrl Current controller
	   * @returns {boolean}
	   */
	  var getEmptyIcon = function getEmptyIcon($ctrl) {
	    return ifSearchingThen($ctrl, 'fas fa-search', 'far fa-money-bill-alt');
	  };
	
	  /**
	   * @name Helpers#getEmptyTitle
	   * @type {function}
	   * @description
	   * Returns translated title to be used when empty results
	   * @param {object} $ctrl Current controller
	   * @returns {boolean}
	   */
	  var getEmptyTitle = function getEmptyTitle($ctrl) {
	    return i18n(ifSearchingThen($ctrl, 'label.search.empty.title', 'label.noItems.title'));
	  };
	
	  /**
	   * @name Helpers#getEmptyDescription
	   * @type {function}
	   * @description
	   * Returns translated description to be used when empty results
	   * @param {object} $ctrl Current controller
	   * @returns {boolean}
	   */
	  var getEmptyDescription = function getEmptyDescription($ctrl) {
	    return i18n(ifSearchingThen($ctrl, 'label.search.empty.description', 'label.noItems.description'));
	  };
	
	  /**
	   * @name Helpers#toggleFilter
	   * @type {function}
	   *
	   * @description
	   * Toggle filter component.
	   *
	   * @public
	   * @returns {boolean} A status of filter component
	   */
	  var toggleFilter = function toggleFilter(ext) {
	    return Object.assign(ext, { showFilter: !ext.showFilter });
	  };
	
	  /**
	   * @name Helpers#canPerformAction
	   * @type {Function}
	   * @description
	   * Checks if the current user able to perform target action per `payment`
	   *
	   * @param {Object} payment - The object payment to check
	   * @param {String} actionName - target action name
	   *
	   * @returns {Boolean} Flag indicating if able to perform the target action
	   */
	  var canPerformAction = function canPerformAction(payment, actionName) {
	    return Boolean(Array.isArray(payment.actions) && payment.actions.indexOf(actionName) >= 0);
	  };
	
	  /**
	   * @name Helpers#authorize
	   * @type {function}
	   * @description
	   * Initiate payment order authorize procedure
	   *
	   * @param {object} $ctrl Current controller
	   * @param {object} payment payment object
	   * @param {object} e DOM click event
	   */
	  var authorize = function authorize($ctrl, payment, e) {
	    e.stopPropagation();
	    if (canPerformAction(payment, _constants.Action.APPROVE)) {
	      $ctrl.authorize(payment.id);
	    }
	  };
	
	  /**
	   * @name Helpers#rejectInit
	   * @type {function}
	   * @description
	   * Open rejection popup
	   *
	   * @param {object} payment object
	   * @param {object} e DOM click event
	   * @param {object} ext extension
	   */
	  var rejectInit = function rejectInit(payment, e, ext) {
	    e.stopPropagation();
	    if (canPerformAction(payment, _constants.Action.REJECT)) {
	      Object.assign(ext, {
	        rejectOpened: true,
	        rejectPaymentId: payment.id
	      });
	    }
	  };
	
	  /**
	   * @name Helpers#removeNotification
	   * @type {function}
	   *
	   * @description
	   * Helper to remove notification from the list
	   *
	   * @param {object} notification
	   * @param {Array} notificationsList
	   * @returns {Array}
	   */
	  var removeNotification = function removeNotification(notification, notificationsList) {
	    return notificationsList.filter(function (item) {
	      return item !== notification;
	    });
	  };
	
	  /**
	   * @name Helpers#formatAccountNumber
	   * @type {Function}
	   *
	   * @description
	   * Splits the string up with spaces by groups of 4.
	   * "IE47FNLL45049097007367" => "IE47 FNLL 4504 9097 0073 67"
	   *
	   * @param {String} str Account number
	   * @param {String} symbol Separator symbol
	   * @param {Number} groupLen Number of digits to group by
	   * @return {String} Formatted account number
	   *
	   * @deprecated [A new function introduced (getAccountNumber)]
	   */
	  var formatAccountNumber = _libBbIban.formatByGroups;
	
	  /**
	   *
	   * @name Helpers#formatBySchema
	   * @type {Object}
	   *
	   * @inner
	   *
	   * @description
	   * Map account's schemaName to a function that accepts the account number and
	   * return it formatted or not based on the schemaName.
	   *
	   * It only formats account number with IBAN schema.
	   *
	   * Formatting: Splits the string up with spaces by groups of 4.
	   * "IE47FNLL45049097007367" => "IE47 FNLL 4504 9097 0073 67"
	   *
	   */
	  var formatBySchema = (_formatBySchema = {}, _defineProperty(_formatBySchema, _constants.AccountSchema.IBAN, function (identification) {
	    return (0, _libBbIban.formatByGroups)(identification);
	  }), _defineProperty(_formatBySchema, _constants.AccountSchema.BBAN, function (identification) {
	    return identification;
	  }), _formatBySchema);
	
	  /**
	   * @name Helpers#getAccountNumber
	   * @type {Function}
	   *
	   * @description
	   * It accepts the identification Object for creditor or debtor account.
	   * Map the (schemeName) to the expected format using (formatBySchema) Object
	   *
	   * @param {Object} accountIdentification - Creditor or Debtor identification Object
	   * that includes the schemaName and the identification (account number)
	   *
	   * @return {String} account number formated or not based on the schema
	   */
	  var getAccountNumber = function getAccountNumber(accountIdentification) {
	    var schemeName = accountIdentification.schemeName,
	        identification = accountIdentification.identification;
	
	    return formatBySchema[schemeName](identification);
	  };
	
	  /**
	   * @name Helpers#isSelected
	   *
	   * @description
	   * Helper to know if the payment is selected.
	   *
	   * @param {Object} payment
	   * @param {Object} selState
	   * @type {Function}
	   * @returns {Boolean}
	   */
	  var isSelected = function isSelected(payment, selState) {
	    return selState.selectedPaymentsIds.includes(payment.id);
	  };
	
	  /**
	   * @name Helpers#isAnySelected
	   *
	   * @description
	   * Helper to know if any payment is selected.
	   *
	   * @param {object} selState
	   * @type {function}
	   * @returns {boolean}
	   */
	  var isAnySelected = function isAnySelected(selState) {
	    return selState.selectedPayments.length > 0;
	  };
	
	  /**
	   * @name Helpers#howManySelected
	   *
	   * @description
	   * Helper to know how many payments are selected.
	   *
	   * @param {object} selState
	   * @type {function}
	   * @returns {boolean}
	   */
	  var howManySelected = function howManySelected(selState) {
	    return selState.selectedPayments.length;
	  };
	
	  /**
	   * @name Helpers#listPaymentsIDs
	   * @type {Function}
	   *
	   * @inner
	   * @description build a list of payment orders' IDs
	   *
	   * @param {Array} payments - array of payments
	   *
	   * @returns {Array} payment orders' IDs
	   */
	  var listPaymentsIDs = function listPaymentsIDs(payments) {
	    return payments.map(function (p) {
	      return p.id;
	    });
	  };
	
	  /**
	   * @name Helpers#isSelectedAllStrict
	   * @inner
	   *
	   * @description
	   * Strictly compare selected items ids and model list
	   *
	   * @param {array} payments
	   * @param {object} selState
	   * @type {function}
	   * @returns {boolean}
	   */
	  var isSelectedAllStrict = function isSelectedAllStrict(payments, selState) {
	    var selected = selState.selectedPaymentsIds;
	
	    if (payments.length !== selected.length) {
	      return false;
	    }
	
	    var matches = payments.filter(function (item) {
	      return selected.indexOf(item.id) !== -1;
	    });
	    return matches.length === payments.length;
	  };
	
	  /**
	   * @name Helpers#isSelectedAll
	   *
	   * @description
	   * Helper to know if ALL payments are selected.
	   *
	   * @param {array} payments
	   * @param {object} selState
	   * @type {function}
	   * @returns {boolean}
	   */
	  var isSelectedAll = function isSelectedAll(payments, selState) {
	    return payments && payments.length > 0 && isSelectedAllStrict(payments, selState);
	  };
	
	  /**
	   * @name Helpers#updateSelectedPaymentState
	   * @type {Function}
	   * @inner
	   *
	   * @description
	   * Update the selected payments state based on available actions "Approve & reject"
	   *
	   * @param {Object} selectionState
	   * @param {Object} stateUpdate
	   */
	  var updateSelectedPaymentState = function updateSelectedPaymentState(selectionState, stateUpdate) {
	    var _selectedPaymentsActi;
	
	    var _stateUpdate = Object.assign({}, stateUpdate),
	        selectedPayments = _stateUpdate.selectedPayments;
	
	    var selectedPaymentsActionGrouped = (_selectedPaymentsActi = {}, _defineProperty(_selectedPaymentsActi, _constants.Action.APPROVE, []), _defineProperty(_selectedPaymentsActi, _constants.Action.REJECT, []), _selectedPaymentsActi);
	
	    selectedPayments.forEach(function (singleSelectedPayment) {
	      if (canPerformAction(singleSelectedPayment, _constants.Action.APPROVE)) {
	        selectedPaymentsActionGrouped[_constants.Action.APPROVE].push(singleSelectedPayment);
	      }
	
	      if (canPerformAction(singleSelectedPayment, _constants.Action.REJECT)) {
	        selectedPaymentsActionGrouped[_constants.Action.REJECT].push(singleSelectedPayment);
	      }
	    });
	
	    Object.assign(selectionState, Object.assign({}, stateUpdate, {
	      selectedPaymentsActionGrouped: selectedPaymentsActionGrouped,
	      selectedPaymentsIds: listPaymentsIDs(selectedPayments)
	    }));
	  };
	
	  /**
	   * @name Helpers#isSelectedPart
	   *
	   * @description
	   * Helper to know if at least one payment is selected.
	   *
	   * @param {array} payments
	   * @param {object} selState
	   * @type {function}
	   * @returns {boolean}
	   */
	  var isSelectedPart = function isSelectedPart(payments, selState) {
	    return isAnySelected(selState) && !isSelectedAll(payments, selState);
	  };
	
	  /**
	   * @name Helpers#toggleAllPayments
	   *
	   * @description
	   * Helper to select/deselect all payments loaded.
	   *
	   * @param {array} payments
	   * @param {object} selState
	   * @type {function}
	   * @returns {null}
	   */
	  var toggleAllPayments = function toggleAllPayments(payments, selState) {
	    var state = selState;
	    var stateUpdate = {};
	
	    if (isSelectedAll(payments, selState)) {
	      Object.assign(stateUpdate, { selectedPayments: [] });
	    } else {
	      Object.assign(stateUpdate, { selectedPayments: [].concat(_toConsumableArray(payments)) });
	    }
	
	    updateSelectedPaymentState(state, stateUpdate);
	  };
	
	  /**
	   * @name Helpers#deselectPayments
	   *
	   * @description
	   * Helper to deselect all payments selected.
	   *
	   * @param {object} selState
	   * @type {function}
	   * @returns {null}
	   */
	  var deselectPayments = function deselectPayments(selState) {
	    updateSelectedPaymentState(selState, { selectedPayments: [] });
	  };
	
	  /**
	   * @name Helpers#toggleSelection
	   *
	   * @description
	   * Helper to select/deselect single payment.
	   *
	   * @param {object} payment
	   * @param {object} selState
	   * @param {object} $event DOM click event
	   * @type {function}
	   * @returns {null}
	   */
	  var toggleSelection = function toggleSelection(payment, selState, $event) {
	    $event.stopPropagation();
	    var state = selState;
	    var stateUpdate = {};
	
	    if (isSelected(payment, state)) {
	      Object.assign(stateUpdate, {
	        selectedPayments: state.selectedPayments.filter(function (item) {
	          return item.id !== payment.id;
	        })
	      });
	    } else {
	      Object.assign(stateUpdate, {
	        selectedPayments: [].concat(_toConsumableArray(state.selectedPayments), [payment])
	      });
	    }
	
	    updateSelectedPaymentState(state, stateUpdate);
	  };
	
	  /**
	   * @name Helpers#confirmPaymentCancel
	   * @type {Function}
	   * @description
	   * Open confirmation modal for cancel payment
	   * populate target paymentId & version
	   *
	   * @param {Object} payment object
	   * @param {Object} event DOM click event
	   * @param {Object} ext extension
	   */
	  var confirmPaymentCancel = function confirmPaymentCancel(event, payment, ext) {
	    event.stopPropagation();
	    if (canPerformAction(payment, _constants.Action.CANCEL)) {
	      Object.assign(ext, {
	        cancelOpened: true,
	        cancelPaymentId: payment.id,
	        paymentVersion: payment.version
	      });
	    }
	  };
	
	  /**
	   * @name Helpers#confirmPaymentDelete
	   * @type {Function}
	   * @description
	   * Open confirmation modal for delete payment
	   * populate target paymentId
	   *
	   * @param {Object} payment object
	   * @param {Object} event DOM click event
	   * @param {Object} ext extension
	   */
	  var confirmPaymentDelete = function confirmPaymentDelete(event, payment, ext) {
	    event.stopPropagation();
	    if (canPerformAction(payment, _constants.Action.DELETE)) {
	      Object.assign(ext, {
	        deleteOpened: true,
	        deletePaymentId: payment.id,
	        paymentVersion: payment.version
	      });
	    }
	  };
	
	  /**
	   * @name Helpers#getAddressText
	   *
	   * @description
	   * Helper to format address data
	   *
	   * @type {function}
	   *
	   * @param {Object} postalAddress
	   * @returns {string}
	   */
	  var getAddressText = function getAddressText(postalAddress) {
	    return [postalAddress.addressLine1, postalAddress.addressLine2, postalAddress.streetName, postalAddress.postCode, postalAddress.town, postalAddress.countrySubDivision].reduce(function (accumulator, currentValue) {
	      if (typeof currentValue === 'string' && currentValue.trim()) {
	        accumulator.push(currentValue.trim());
	      }
	      return accumulator;
	    }, []).join(', ');
	  };
	
	  /**
	   * @name Helpers#getIntermediaryBankType
	   *
	   * @description
	   * Helper to get bank type based on provided code
	   *
	   * @type {function}
	   *
	   * @param {Object} intermediaryBank
	   * @returns {string}
	   */
	  var getIntermediaryBankType = function getIntermediaryBankType(intermediaryBank) {
	    return intermediaryBank.bic ? 'SWIFT/BIC' : 'ABA';
	  };
	
	  /**
	   * @description
	   * Return list of status filters.
	   * Filter paymentStatusLookup and reture all statuses that can be used as filters
	   *
	   * @name Helpers#paymentStatusFiltersLookup
	   * @type {function}
	   *
	   * return {Object[]} Array of different payment status lookup Object
	   * ex: [{icon: 'warning', key: 'CANCELLED', name: 'cancelled', isFilter: true}]
	   */
	  var paymentStatusFiltersLookup = function paymentStatusFiltersLookup() {
	    var statusFilters = [];
	
	    _vendorBbAngular2.default.forEach(_constants.paymentStatusLookup, function (value, key) {
	      if (value.isFilter) {
	        statusFilters = [].concat(_toConsumableArray(statusFilters), [Object.assign(value, { key: key })]);
	      }
	    });
	
	    return statusFilters;
	  };
	
	  /**
	   * @description
	   * return the icon name/class from the matching payment status lookup object
	   * It returns 'secondary' by default
	   *
	   * @name Helpers#getStatusIcon
	   * @type {function}
	   *
	   * return {String} ex: 'warning' || 'danger' ...
	   */
	  var getStatusIcon = function getStatusIcon(statusKey) {
	    return _constants.paymentStatusLookup[statusKey].icon || 'secondary';
	  };
	
	  /**
	   * @name Helpers#getStatusLabelKey
	   * @type {function}
	   *
	   * @description
	   * Find the matching object in paymentStatusLookup by the status key (ex: 'APPROVED'),
	   * Extract the name attribute
	   * Generate the correct key for translation message
	   *
	   * @param {String} status property on payment object
	   * @param {Boolean} enble/disable translation key postfix ('.short')
	   *
	   * @returns {string} Translation key for status label
	   */
	  var getStatusLabelKey = function getStatusLabelKey(status, postfix) {
	    var traslationKeyPostfix = '';
	
	    if (postfix === true) {
	      traslationKeyPostfix = '.short';
	    }
	
	    return 'payment.status.' + _constants.paymentStatusLookup[status].name + traslationKeyPostfix;
	  };
	
	  /**
	   * @name Helpers#canPerformActionForBulk
	   * @type {Function}
	   *
	   * @description
	   * Check if can perform an action "approve or reject" on the selected payment orders
	   *
	   * @param {Object} state
	   * @param {String} actionName
	   *
	   * @returns {Boolean}
	   */
	  var canPerformActionForBulk = function canPerformActionForBulk(state, actionName) {
	    var selections = state.selections;
	
	    var actionGroup = selections.selectedPaymentsActionGrouped[actionName];
	    return Boolean(actionGroup && actionGroup.length && actionGroup.length === selections.selectedPayments.length);
	  };
	
	  /**
	   * @name Helpers#confirmActionOnBulk
	   * @type {Function}
	   *
	   * @description
	   * Open the confirmation modal window based on action "approve or reject"
	   *
	   * @param {Object} ext extension
	   * @param {String} actionName
	   */
	  var confirmActionOnBulk = function confirmActionOnBulk(ext, actionName) {
	    if (actionName === _constants.Action.APPROVE) {
	      Object.assign(ext, { confirmBulkApprove: true });
	    }
	
	    if (actionName === _constants.Action.REJECT) {
	      Object.assign(ext, { confirmBulkReject: true });
	    }
	  };
	
	  /**
	   * @name Helpers#showBulkActionDetails
	   * @type {function}
	   *
	   * @description
	   * Show a modal window that contain bulk action warning details
	   *
	   * @param {Object} ext
	   * @param {Object} payload
	   */
	  var showBulkActionDetails = function showBulkActionDetails(ext, payload) {
	    Object.assign(ext, { showBulkActionDetails: true, context: payload });
	  };
	
	  /**
	   * @name Helpers#dismissBulkActionWarning
	   * @type {function}
	   *
	   * @description
	   * Dismiss the warning alert for bulk action by updating the state
	   *
	   * @param {Object} $ctrl
	   */
	  var dismissBulkActionWarning = function dismissBulkActionWarning($ctrl) {
	    Object.assign($ctrl.state, {
	      bulkActionNotification: {
	        isVisible: false
	      }
	    });
	  };
	
	  /**
	   * @name Helpers#printModalWindow
	   * @type {Function}
	   *
	   * @description
	   * Initiates printing dialog to print modal content and adds a
	   * fallback for Safari browsers (it fails to print popup content with
	   * default window.print() method).
	   *
	   * @param {String} contentElQuery DOM query to printable content
	   */
	  var printModalWindow = function printModalWindow(contentElQuery) {
	    if (!window.safari) {
	      window.print();
	    } else {
	      // Safari browser fallback
	      var divToPrint = document.querySelector(contentElQuery).innerHTML;
	      var cssLinkList = document.querySelectorAll('link[rel=stylesheet]');
	      var popupWin = window.open('', '_blank', 'width=700,height=800');
	
	      popupWin.document.writeln(divToPrint);
	
	      [].concat(_toConsumableArray(cssLinkList)).forEach(function (node) {
	        var head = popupWin.document.head;
	        var link = popupWin.document.createElement('link');
	
	        link.type = 'text/css';
	        link.rel = 'stylesheet';
	        link.href = node.href;
	
	        head.appendChild(link);
	      });
	
	      popupWin.focus();
	      popupWin.print();
	
	      setTimeout(function () {
	        popupWin.close();
	      }, 1000);
	    }
	  };
	
	  return {
	    headers: headers,
	    action: action,
	    isSortableActive: isSortableActive,
	    hasValue: hasValue,
	    openModalWindow: openModalWindow,
	    closeModalWindow: closeModalWindow,
	    isPaginationTypeMatch: isPaginationTypeMatch,
	    searchLabelsTranslations: searchLabelsTranslations,
	    thereAreMatches: thereAreMatches,
	    getSearchQuery: getSearchQuery,
	    getEmptyIcon: getEmptyIcon,
	    getEmptyTitle: getEmptyTitle,
	    getEmptyDescription: getEmptyDescription,
	    toggleFilter: toggleFilter,
	    calendarPopupConfig: calendarPopupConfig,
	    authorize: authorize,
	    rejectInit: rejectInit,
	    canPerformAction: canPerformAction,
	    removeNotification: removeNotification,
	    formatAccountNumber: formatAccountNumber,
	    getAccountNumber: getAccountNumber,
	    get paymentTypeId() {
	      return _constants.PaymentTypeId;
	    },
	
	    isSelected: isSelected,
	    isAnySelected: isAnySelected,
	    howManySelected: howManySelected,
	    isSelectedAll: isSelectedAll,
	    isSelectedPart: isSelectedPart,
	    toggleAllPayments: toggleAllPayments,
	    deselectPayments: deselectPayments,
	    toggleSelection: toggleSelection,
	
	    confirmPaymentCancel: confirmPaymentCancel,
	    getAddressText: getAddressText,
	    getIntermediaryBankType: getIntermediaryBankType,
	
	    paymentStatusFiltersLookup: paymentStatusFiltersLookup,
	    getStatusIcon: getStatusIcon,
	    getStatusLabelKey: getStatusLabelKey,
	
	    confirmPaymentDelete: confirmPaymentDelete,
	
	    canPerformActionForBulk: canPerformActionForBulk,
	    confirmActionOnBulk: confirmActionOnBulk,
	    showBulkActionDetails: showBulkActionDetails,
	    dismissBulkActionWarning: dismissBulkActionWarning,
	    printModalWindow: printModalWindow
	  };
	};

/***/ }),
/* 130 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Preferences enum
	 * @name Preferences
	 * @type {Object}
	 */
	var Preferences = exports.Preferences = {
	  MIN_DATE: '0',
	  MAX_MODE: 'year'
	};
	
	/**
	 * Payment actions enum
	 * @name Action
	 * @type {Object}
	 */
	var Action = exports.Action = {
	  APPROVE: 'APPROVE',
	  REJECT: 'REJECT',
	  CANCEL: 'CANCEL',
	  DELETE: 'DELETE'
	};
	
	/**
	 * Account number schema
	 * @name Action
	 * @type {Object}
	 */
	var AccountSchema = exports.AccountSchema = {
	  IBAN: 'IBAN',
	  BBAN: 'BBAN'
	};
	
	/**
	 * @description
	 * Map of payment types to configure payment details template
	 * @name PaymentTypeId
	 * @type {Object}
	 */
	var PaymentTypeId = exports.PaymentTypeId = {
	  SEPA_CREDIT_TRANSFER: 'sepa',
	  US_DOMESTIC_WIRE: 'domestic-wire',
	  US_FOREIGN_WIRE: 'international-wire'
	};
	
	/**
	 * @description
	 * Lookup for different payment statues
	 * Each object has the following properties:
	 * icon: the type of icon, primary | warning | success | danger
	 * name: name is used as a key for translation | i18n
	 * isFilter: boolean | flag, indicates which status can be used as a filter
	 *
	 * @name paymentStatusLookup
	 * @type {Object}
	 */
	var paymentStatusLookup = exports.paymentStatusLookup = {
	  ENTERED: {
	    icon: 'primary',
	    name: 'entered',
	    isFilter: true
	  },
	
	  READY: {
	    icon: 'primary',
	    name: 'ready',
	    isFilter: true
	  },
	
	  ACCEPTED: {
	    icon: 'warning',
	    name: 'accepted',
	    isFilter: true
	  },
	
	  APPROVED: {
	    icon: 'success',
	    name: 'approved',
	    isFilter: false
	  },
	
	  PROCESSED: {
	    icon: 'success',
	    name: 'processed',
	    isFilter: true
	  },
	
	  REJECTED: {
	    icon: 'danger',
	    name: 'rejected',
	    isFilter: true
	  },
	
	  CANCELLED: {
	    icon: 'warning',
	    name: 'cancelled',
	    isFilter: true
	  },
	
	  CANCELLATION_PENDING: {
	    icon: 'warning',
	    name: 'cancellation-pending',
	    isFilter: true
	  }
	};

/***/ }),
/* 131 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var Event = {
	  PAYMENT_AUTH_SUCCESS: 'bb.event.payment.auth.success',
	  PAYMENT_AUTH_FAIL: 'bb.event.payment.auth.fail',
	  PAYMENT_REJECT_SUCCESS: 'bb.event.payment.reject.success',
	  PAYMENT_REJECT_FAIL: 'bb.event.payment.reject.fail',
	  PAYMENT_CANCEL_SUCCESS: 'bb.event.payment.cancel.success',
	  PAYMENT_CANCEL_FAIL: 'bb.event.payment.cancel.fail',
	  PAYMENT_DELETE_SUCCESS: 'bb.event.payment.delete.success',
	  PAYMENT_DELETE_FAIL: 'bb.event.payment.delete.fail',
	  PAYMENT_BULK_APPROVE_SUCCESS: 'bb.event.payment.bulk.approve.success',
	  PAYMENT_BULK_APPROVE_FAIL: 'bb.event.payment.bulk.approve.fail',
	  PAYMENT_BULK_REJECT_SUCCESS: 'bb.event.payment.bulk.reject.success',
	  PAYMENT_BULK_REJECT_FAIL: 'bb.event.payment.bulk.reject.fail'
	};
	
	exports.default = function (_ref) {
	  var _ref2;
	
	  var notifications = _ref.notifications,
	      $filter = _ref.$filter;
	
	  var i18n = $filter('i18n');
	  return _ref2 = {}, _defineProperty(_ref2, Event.PAYMENT_AUTH_SUCCESS, function () {
	    notifications.notifySuccess(i18n('notification.auth.success'));
	  }), _defineProperty(_ref2, Event.PAYMENT_AUTH_FAIL, function () {
	    notifications.notifyAlert(i18n('notification.auth.fail'));
	  }), _defineProperty(_ref2, Event.PAYMENT_REJECT_SUCCESS, function () {
	    notifications.notifySuccess(i18n('notification.reject.success'));
	  }), _defineProperty(_ref2, Event.PAYMENT_REJECT_FAIL, function () {
	    notifications.notifyAlert(i18n('notification.reject.fail'));
	  }), _defineProperty(_ref2, Event.PAYMENT_CANCEL_SUCCESS, function () {
	    notifications.notifySuccess(i18n('notification.cancel.success'));
	  }), _defineProperty(_ref2, Event.PAYMENT_CANCEL_FAIL, function () {
	    notifications.notifyAlert(i18n('notification.cancel.fail'));
	  }), _defineProperty(_ref2, Event.PAYMENT_DELETE_SUCCESS, function () {
	    notifications.notifySuccess(i18n('notification.delete.success'));
	  }), _defineProperty(_ref2, Event.PAYMENT_DELETE_FAIL, function () {
	    notifications.notifyAlert(i18n('notification.delete.fail'));
	  }), _defineProperty(_ref2, Event.PAYMENT_BULK_APPROVE_SUCCESS, function () {
	    notifications.notifySuccess(i18n('notification.bulk.approve.success'));
	  }), _defineProperty(_ref2, Event.PAYMENT_BULK_APPROVE_FAIL, function () {
	    notifications.notifyAlert(i18n('notification.bulk.approve.fail'));
	  }), _defineProperty(_ref2, Event.PAYMENT_BULK_REJECT_SUCCESS, function () {
	    notifications.notifySuccess(i18n('notification.bulk.reject.success'));
	  }), _defineProperty(_ref2, Event.PAYMENT_BULK_REJECT_FAIL, function () {
	    notifications.notifyAlert(i18n('notification.bulk.reject.fail'));
	  }), _ref2;
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bus-manage-payment-orders-ng.js.map