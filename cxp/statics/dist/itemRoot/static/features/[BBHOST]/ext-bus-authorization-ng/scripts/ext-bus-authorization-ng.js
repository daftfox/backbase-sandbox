(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-confirm-ng"), require("ui-bb-i18n-ng"), require("vendor-bb-angular-ng-aria"), require("ui-bb-format-amount-ng"), require("ui-bb-load-more-ng"), require("ui-bb-inline-status-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-sortable-column-ng"), require("ui-bb-ellipsis-tooltip-ng"), require("ui-bb-paginator-ng"), require("ui-bus-format-amount-ng"), require("ui-bb-modal-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bus-authorization-ng", ["ui-bb-confirm-ng", "ui-bb-i18n-ng", "vendor-bb-angular-ng-aria", "ui-bb-format-amount-ng", "ui-bb-load-more-ng", "ui-bb-inline-status-ng", "ui-bb-notification-stripe-ng", "ui-bb-sortable-column-ng", "ui-bb-ellipsis-tooltip-ng", "ui-bb-paginator-ng", "ui-bus-format-amount-ng", "ui-bb-modal-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bus-authorization-ng"] = factory(require("ui-bb-confirm-ng"), require("ui-bb-i18n-ng"), require("vendor-bb-angular-ng-aria"), require("ui-bb-format-amount-ng"), require("ui-bb-load-more-ng"), require("ui-bb-inline-status-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-sortable-column-ng"), require("ui-bb-ellipsis-tooltip-ng"), require("ui-bb-paginator-ng"), require("ui-bus-format-amount-ng"), require("ui-bb-modal-ng"));
	else
		root["ext-bus-authorization-ng"] = factory(root["ui-bb-confirm-ng"], root["ui-bb-i18n-ng"], root["vendor-bb-angular-ng-aria"], root["ui-bb-format-amount-ng"], root["ui-bb-load-more-ng"], root["ui-bb-inline-status-ng"], root["ui-bb-notification-stripe-ng"], root["ui-bb-sortable-column-ng"], root["ui-bb-ellipsis-tooltip-ng"], root["ui-bb-paginator-ng"], root["ui-bus-format-amount-ng"], root["ui-bb-modal-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_33__, __WEBPACK_EXTERNAL_MODULE_34__, __WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_36__) {
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

	module.exports = __webpack_require__(27);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
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
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.hooks = exports.helpers = exports.dependencyKeys = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(18);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbI18nNg = __webpack_require__(15);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbFormatAmountNg = __webpack_require__(28);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _uiBbLoadMoreNg = __webpack_require__(29);
	
	var _uiBbLoadMoreNg2 = _interopRequireDefault(_uiBbLoadMoreNg);
	
	var _uiBbInlineStatusNg = __webpack_require__(30);
	
	var _uiBbInlineStatusNg2 = _interopRequireDefault(_uiBbInlineStatusNg);
	
	var _uiBbNotificationStripeNg = __webpack_require__(31);
	
	var _uiBbNotificationStripeNg2 = _interopRequireDefault(_uiBbNotificationStripeNg);
	
	var _uiBbConfirmNg = __webpack_require__(4);
	
	var _uiBbConfirmNg2 = _interopRequireDefault(_uiBbConfirmNg);
	
	var _uiBbSortableColumnNg = __webpack_require__(32);
	
	var _uiBbSortableColumnNg2 = _interopRequireDefault(_uiBbSortableColumnNg);
	
	var _uiBbEllipsisTooltipNg = __webpack_require__(33);
	
	var _uiBbEllipsisTooltipNg2 = _interopRequireDefault(_uiBbEllipsisTooltipNg);
	
	var _uiBbPaginatorNg = __webpack_require__(34);
	
	var _uiBbPaginatorNg2 = _interopRequireDefault(_uiBbPaginatorNg);
	
	var _uiBusFormatAmountNg = __webpack_require__(35);
	
	var _uiBusFormatAmountNg2 = _interopRequireDefault(_uiBusFormatAmountNg);
	
	var _uiBbModalNg = __webpack_require__(36);
	
	var _uiBbModalNg2 = _interopRequireDefault(_uiBbModalNg);
	
	var _hooks = __webpack_require__(37);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	var _events = __webpack_require__(39);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _helpers = __webpack_require__(40);
	
	var extHelpers = _interopRequireWildcard(_helpers);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbI18nNg2.default, _uiBbFormatAmountNg2.default, _uiBbLoadMoreNg2.default, _uiBbInlineStatusNg2.default, _uiBbNotificationStripeNg2.default, _uiBbConfirmNg2.default, _uiBbSortableColumnNg2.default, _uiBbEllipsisTooltipNg2.default, _uiBbPaginatorNg2.default, _uiBusFormatAmountNg2.default, _uiBbModalNg2.default]; /**
	                                                                                                                                                                                                                                                                                                                                                                                                             * @module ext-bb-authorization-ng
	                                                                                                                                                                                                                                                                                                                                                                                                             *
	                                                                                                                                                                                                                                                                                                                                                                                                             * @description
	                                                                                                                                                                                                                                                                                                                                                                                                             * Payment authorization extension.
	                                                                                                                                                                                                                                                                                                                                                                                                             *
	                                                                                                                                                                                                                                                                                                                                                                                                             * @example
	                                                                                                                                                                                                                                                                                                                                                                                                             * <!-- payment widget model.xml -->
	                                                                                                                                                                                                                                                                                                                                                                                                             * <property name="extension" viewHint="text-input,admin">
	                                                                                                                                                                                                                                                                                                                                                                                                             *  <value type="string">ext-bb-authorization-ng</value>
	                                                                                                                                                                                                                                                                                                                                                                                                             * </property>
	                                                                                                                                                                                                                                                                                                                                                                                                             *
	                                                                                                                                                                                                                                                                                                                                                                                                             * @requires vendor-bb-angular-ng-aria
	                                                                                                                                                                                                                                                                                                                                                                                                             * @requires ui-bb-i18n-ng
	                                                                                                                                                                                                                                                                                                                                                                                                             * @requires ui-bb-format-amount-ng
	                                                                                                                                                                                                                                                                                                                                                                                                             * @requires ui-bb-load-more-ng
	                                                                                                                                                                                                                                                                                                                                                                                                             * @requires ui-bb-inline-status-ng
	                                                                                                                                                                                                                                                                                                                                                                                                             * @requires ui-bb-sortable-column-ng
	                                                                                                                                                                                                                                                                                                                                                                                                             * @requires ui-bb-ellipsis-tooltip-ng
	                                                                                                                                                                                                                                                                                                                                                                                                             *
	                                                                                                                                                                                                                                                                                                                                                                                                             */
	var helpers = exports.helpers = extHelpers;
	var hooks = exports.hooks = extHooks;
	var events = exports.events = _events2.default;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_33__;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_34__;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_35__;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defaultSortableColumn = exports.processPayments = undefined;
	
	var _setStatus = __webpack_require__(38);
	
	var _setStatus2 = _interopRequireDefault(_setStatus);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name processPayments
	 * @description
	 * Hook for processing payments list.
	 *
	 * @type {function}
	 * @param {object[]} payments List of payments
	 * @returns {object[]} Formatted list of payments.
	 */
	var processPayments = exports.processPayments = function processPayments(payments) {
	  return payments.map(_setStatus2.default);
	};
	
	/**
	 * @name defaultSortableColumn
	 *
	 * @description
	 * Return the key of the default sort column
	 *
	 * @type {function}
	 * @returns {string|null} Returns column key
	 */
	var defaultSortableColumn = exports.defaultSortableColumn = function defaultSortableColumn() {
	  return 'date';
	};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var statusTexts = {
	  large: {
	    UNAUTHORIZED: 'paymentStatus.new',
	    PARTIALLY_AUTHORIZED: 'paymentStatus.partially_authorized',
	    AUTHORIZED: 'paymentStatus.authorized'
	  },
	  small: {
	    UNAUTHORIZED: 'paymentStatus.U',
	    PARTIALLY_AUTHORIZED: 'paymentStatus.PA',
	    AUTHORIZED: 'paymentStatus.A'
	  }
	};
	
	/**
	 * @description
	 *
	 * @param {object} payment Payment object
	 */
	
	exports.default = function (payment) {
	  return Object.assign({}, payment, {
	    statusLabel: statusTexts.large[payment.status],
	    statusLabelShort: statusTexts.small[payment.status]
	  });
	};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var Event = {
	  PAYMENT_AUTH_SUCCESS: 'bb.event.payment.auth.success',
	  PAYMENT_AUTH_FAIL: 'bb.event.payment.auth.fail',
	  PAYMENT_AUTH_MULTIPLE_SUCCESS: 'bb.event.payment.multiple.auth.success',
	  PAYMENT_AUTH_MULTIPLE_FAIL: 'bb.event.payment.multiple.auth.fail',
	  PAYMENT_REJECT_SUCCESS: 'bb.event.payment.reject.success',
	  PAYMENT_REJECT_FAIL: 'bb.event.payment.reject.fail',
	  PAYMENT_REJECT_MULTIPLE_SUCCESS: 'bb.event.payment.multiple.reject.success',
	  PAYMENT_REJECT_MULTIPLE_FAIL: 'bb.event.payment.multiple.reject.fail'
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
	  }), _defineProperty(_ref2, Event.PAYMENT_AUTH_MULTIPLE_SUCCESS, function (num) {
	    notifications.notifySuccess(i18n('notification.auth.multiple.success', { number: num }));
	  }), _defineProperty(_ref2, Event.PAYMENT_AUTH_MULTIPLE_FAIL, function (num) {
	    notifications.notifyAlert(i18n('notification.auth.multiple.fail', { number: num }));
	  }), _defineProperty(_ref2, Event.PAYMENT_REJECT_SUCCESS, function () {
	    notifications.notifySuccess(i18n('notification.reject.success'));
	  }), _defineProperty(_ref2, Event.PAYMENT_REJECT_FAIL, function () {
	    notifications.notifyAlert(i18n('notification.reject.fail'));
	  }), _defineProperty(_ref2, Event.PAYMENT_REJECT_MULTIPLE_SUCCESS, function (num) {
	    notifications.notifySuccess(i18n('notification.reject.multiple.success', { number: num }));
	  }), _defineProperty(_ref2, Event.PAYMENT_REJECT_MULTIPLE_FAIL, function (num) {
	    notifications.notifyAlert(i18n('notification.reject.multiple.fail', { number: num }));
	  }), _ref2;
	};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name isSelected
	 *
	 * @description
	 * Helper to know if the payment is selected.
	 *
	 * @param {string} id
	 * @param {object} selState
	 * @type {function}
	 * @returns {boolean}
	 */
	var isSelected = exports.isSelected = function isSelected(id, selState) {
	  return selState.selectedPayments.some(function (item) {
	    return item === id;
	  });
	};
	
	/**
	 * @name isAnySelected
	 *
	 * @description
	 * Helper to know if any payment is selected.
	 *
	 * @param {object} selState
	 * @type {function}
	 * @returns {boolean}
	 */
	var isAnySelected = exports.isAnySelected = function isAnySelected(selState) {
	  return selState.selectedPayments.length > 0;
	};
	
	/**
	 * @name howManySelected
	 *
	 * @description
	 * Helper to know how many payments are selected.
	 *
	 * @param {object} selState
	 * @type {function}
	 * @returns {boolean}
	 */
	var howManySelected = exports.howManySelected = function howManySelected(selState) {
	  return selState.selectedPayments.length;
	};
	
	/**
	 * @name isSelectedAllStrict
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
	  var selected = selState.selectedPayments;
	
	  if (payments.length !== selected.length) {
	    return false;
	  }
	
	  var matches = payments.filter(function (item) {
	    return selected.indexOf(item.id) !== -1;
	  });
	  return matches.length === payments.length;
	};
	
	/**
	 * @name isSelectedAll
	 *
	 * @description
	 * Helper to know if ALL payments are selected.
	 *
	 * @param {array} payments
	 * @param {object} selState
	 * @type {function}
	 * @returns {boolean}
	 */
	var isSelectedAll = exports.isSelectedAll = function isSelectedAll(payments, selState) {
	  return payments && payments.length > 0 && isSelectedAllStrict(payments, selState);
	};
	
	/**
	 * @name isSelectedPart
	 *
	 * @description
	 * Helper to know if at least one payment is selected.
	 *
	 * @param {array} payments
	 * @param {object} selState
	 * @type {function}
	 * @returns {boolean}
	 */
	var isSelectedPart = exports.isSelectedPart = function isSelectedPart(payments, selState) {
	  return isAnySelected(selState) && !isSelectedAll(payments, selState);
	};
	
	/**
	 * @name toggleAllPayments
	 *
	 * @description
	 * Helper to select/deselect all payments loaded.
	 *
	 * @param {array} payments
	 * @param {object} selState
	 * @type {function}
	 * @returns {null}
	 */
	var toggleAllPayments = exports.toggleAllPayments = function toggleAllPayments(payments, selState) {
	  var state = selState;
	  if (isSelectedAll(payments, selState)) {
	    state.selectedPayments = [];
	  } else {
	    state.selectedPayments = payments.map(function (item) {
	      return item.id;
	    });
	  }
	};
	
	/**
	 * @name deselectPayments
	 *
	 * @description
	 * Helper to deselect all payments selected.
	 *
	 * @param {object} selState
	 * @type {function}
	 * @returns {null}
	 */
	var deselectPayments = exports.deselectPayments = function deselectPayments(selState) {
	  var state = selState;
	  state.selectedPayments = [];
	};
	
	/**
	 * @name toggleSelection
	 *
	 * @description
	 * Helper to select/deselect single payment.
	 *
	 * @param {string} id
	 * @param {object} selState
	 * @type {function}
	 * @returns {null}
	 */
	var toggleSelection = exports.toggleSelection = function toggleSelection(id, selState) {
	  var state = selState;
	
	  if (isSelected(id, state)) {
	    state.selectedPayments = state.selectedPayments.filter(function (item) {
	      return item !== id;
	    });
	  } else {
	    state.selectedPayments.push(id);
	  }
	};
	
	/**
	 * @name removeNotification
	 *
	 * @description
	 * Helper to remove notification from the list
	 *
	 * @param {object} payment
	 * @param {array} list
	 * @type {function}
	 * @returns {null}
	 */
	var removeNotification = exports.removeNotification = function removeNotification(notification, notificationsList) {
	  return notificationsList.filter(function (item) {
	    return item !== notification;
	  });
	};
	
	var headers = exports.headers = [{
	  label: 'header.status',
	  sortable: {
	    key: 'status',
	    direction: 'ASC'
	  }
	}, {
	  label: 'header.debtor',
	  class: '',
	  sortable: {
	    key: 'debitAccountIdentification',
	    direction: 'ASC'
	  }
	}, {
	  label: 'header.creditor',
	  class: '',
	  sortable: {
	    key: 'creditAccountIdentification',
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
	    key: 'date',
	    direction: 'DESC'
	  }
	}];
	
	var isSortableActive = exports.isSortableActive = function isSortableActive(sortable, $ctrl) {
	  return sortable.key === $ctrl.state.authorizations.orderBy;
	};
	
	/**
	 * @description
	 * Checkes if actual pagination type matches the one, defined in properties
	 *
	 * @public
	 * @name isPaginationTypeMatch
	 * @type {function}
	 * @param {function} $ctrl      Current controller
	 * @param {string} type         Description of pagination type (pagination, load-more)
	 *
	 * @returns {boolean}
	 */
	var isPaginationTypeMatch = exports.isPaginationTypeMatch = function isPaginationTypeMatch($ctrl, type) {
	  return $ctrl.state.pageParams.paginationType === type;
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
	var hasValue = exports.hasValue = function hasValue(value) {
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
	var openModalWindow = exports.openModalWindow = function openModalWindow(ext, selectedPayment) {
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
	var closeModalWindow = exports.closeModalWindow = function closeModalWindow(ext) {
	  Object.assign(ext, { showModal: false, payment: null });
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bus-authorization-ng.js.map