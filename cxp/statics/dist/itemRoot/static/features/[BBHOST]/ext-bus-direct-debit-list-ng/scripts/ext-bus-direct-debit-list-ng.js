(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-confirm-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("vendor-bb-angular-ng-aria"), require("ui-bb-load-more-ng"), require("ui-bb-inline-status-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-sortable-column-ng"), require("ui-bb-ellipsis-tooltip-ng"), require("ui-bb-paginator-ng"), require("vendor-bb-uib-dropdown"), require("ui-bus-payment-order-details-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bus-direct-debit-list-ng", ["ui-bb-confirm-ng", "ui-bb-substitute-error-ng", "ui-bb-loading-indicator-ng", "ui-bb-i18n-ng", "vendor-bb-angular-ng-aria", "ui-bb-load-more-ng", "ui-bb-inline-status-ng", "ui-bb-notification-stripe-ng", "ui-bb-sortable-column-ng", "ui-bb-ellipsis-tooltip-ng", "ui-bb-paginator-ng", "vendor-bb-uib-dropdown", "ui-bus-payment-order-details-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bus-direct-debit-list-ng"] = factory(require("ui-bb-confirm-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("vendor-bb-angular-ng-aria"), require("ui-bb-load-more-ng"), require("ui-bb-inline-status-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-sortable-column-ng"), require("ui-bb-ellipsis-tooltip-ng"), require("ui-bb-paginator-ng"), require("vendor-bb-uib-dropdown"), require("ui-bus-payment-order-details-ng"));
	else
		root["ext-bus-direct-debit-list-ng"] = factory(root["ui-bb-confirm-ng"], root["ui-bb-substitute-error-ng"], root["ui-bb-loading-indicator-ng"], root["ui-bb-i18n-ng"], root["vendor-bb-angular-ng-aria"], root["ui-bb-load-more-ng"], root["ui-bb-inline-status-ng"], root["ui-bb-notification-stripe-ng"], root["ui-bb-sortable-column-ng"], root["ui-bb-ellipsis-tooltip-ng"], root["ui-bb-paginator-ng"], root["vendor-bb-uib-dropdown"], root["ui-bus-payment-order-details-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_33__, __WEBPACK_EXTERNAL_MODULE_34__, __WEBPACK_EXTERNAL_MODULE_42__, __WEBPACK_EXTERNAL_MODULE_43__) {
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

	module.exports = __webpack_require__(41);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
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
/* 27 */,
/* 28 */,
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
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.hooks = exports.helpers = exports.dependencyKeys = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(18);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _vendorBbUibDropdown = __webpack_require__(42);
	
	var _vendorBbUibDropdown2 = _interopRequireDefault(_vendorBbUibDropdown);
	
	var _uiBbI18nNg = __webpack_require__(15);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbInlineStatusNg = __webpack_require__(30);
	
	var _uiBbInlineStatusNg2 = _interopRequireDefault(_uiBbInlineStatusNg);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(14);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(6);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbSortableColumnNg = __webpack_require__(32);
	
	var _uiBbSortableColumnNg2 = _interopRequireDefault(_uiBbSortableColumnNg);
	
	var _uiBbLoadMoreNg = __webpack_require__(29);
	
	var _uiBbLoadMoreNg2 = _interopRequireDefault(_uiBbLoadMoreNg);
	
	var _uiBusPaymentOrderDetailsNg = __webpack_require__(43);
	
	var _uiBusPaymentOrderDetailsNg2 = _interopRequireDefault(_uiBusPaymentOrderDetailsNg);
	
	var _uiBbEllipsisTooltipNg = __webpack_require__(33);
	
	var _uiBbEllipsisTooltipNg2 = _interopRequireDefault(_uiBbEllipsisTooltipNg);
	
	var _uiBbConfirmNg = __webpack_require__(4);
	
	var _uiBbConfirmNg2 = _interopRequireDefault(_uiBbConfirmNg);
	
	var _uiBbNotificationStripeNg = __webpack_require__(31);
	
	var _uiBbNotificationStripeNg2 = _interopRequireDefault(_uiBbNotificationStripeNg);
	
	var _uiBbPaginatorNg = __webpack_require__(34);
	
	var _uiBbPaginatorNg2 = _interopRequireDefault(_uiBbPaginatorNg);
	
	var _hooks = __webpack_require__(44);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	var _helpers = __webpack_require__(45);
	
	var extHelpers = _interopRequireWildcard(_helpers);
	
	var _events = __webpack_require__(46);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bus-direct-debit-list-ng
	 *
	 * @description
	 * Business direct debits extension.
	 *
	 * @example
	 * <!-- payment order widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bus-direct-debit-list-ng</value>
	 * </property>
	 *
	 */
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbI18nNg2.default, _uiBbInlineStatusNg2.default, _uiBbLoadingIndicatorNg2.default, _uiBbSubstituteErrorNg2.default, _uiBbSortableColumnNg2.default, _uiBbLoadMoreNg2.default, _uiBusPaymentOrderDetailsNg2.default, _uiBbEllipsisTooltipNg2.default, _uiBbConfirmNg2.default, _vendorBbUibDropdown2.default, _uiBbNotificationStripeNg2.default, _uiBbPaginatorNg2.default];
	
	var helpers = exports.helpers = extHelpers;
	
	var hooks = exports.hooks = extHooks;
	
	var events = exports.events = _events2.default;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_42__;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_43__;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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
	
	/**
	 * @name defaultSortableDirection
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

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name headers
	 * @type {Array}
	 *
	 * @description
	 * List of table headers
	 */
	var headers = exports.headers = [{
	  label: 'header.status',
	  sortable: {
	    key: 'status',
	    direction: 'ASC'
	  }
	}, {
	  label: 'header.type',
	  sortable: {
	    key: 'type',
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
	  sortable: {
	    key: 'amount',
	    direction: 'DESC'
	  },
	  class: 'text-right'
	}, {
	  label: 'header.date',
	  sortable: {
	    key: 'date',
	    direction: 'DESC'
	  },
	  class: 'text-right'
	}];
	
	/**
	 * @name isSortableActive
	 * @type {function}
	 *
	 * @description
	 * Helper to check if header sortable column is active or not
	 *
	 * @param {object} sortable Sortable object
	 * @param {object} $ctrl Controller object
	 *
	 * @returns {boolean} True if sortable column is active
	 */
	var isSortableActive = exports.isSortableActive = function isSortableActive(sortable, $ctrl) {
	  return sortable && sortable.key === $ctrl.state.directDebits.orderBy;
	};
	
	var statuses = {
	  large: {
	    ANNOUNCED: {
	      translationKey: 'announced',
	      class: 'unauthorized'
	    },
	    PROCESSED: {
	      translationKey: 'processed',
	      class: 'authorized'
	    },
	    REJECTED: {
	      translationKey: 'rejected',
	      class: 'rejected'
	    },
	    REFUNDED: {
	      translationKey: 'refunded',
	      class: 'authorized'
	    },
	    REFUSED: {
	      translationKey: 'refused',
	      class: 'rejected'
	    },
	    REFUND_REQUESTED: {
	      translationKey: 'refundRequested',
	      class: 'pending'
	    },
	    REFUSAL_REQUESTED: {
	      translationKey: 'refusalRequested',
	      class: 'pending'
	    }
	  },
	  small: {
	    ANNOUNCED: {
	      translationKey: 'A'
	    },
	    PROCESSED: {
	      translationKey: 'P'
	    },
	    REJECTED: {
	      translationKey: 'R'
	    },
	    REFUNDED: {
	      translationKey: 'RF'
	    },
	    REFUSED: {
	      translationKey: 'RB'
	    },
	    REFUND_REQUESTED: {
	      translationKey: 'RFR'
	    },
	    REFUSAL_REQUESTED: {
	      translationKey: 'RR'
	    }
	  }
	};
	
	var actionKeys = {
	  ANNOUNCED: 'refuse',
	  PROCESSED: 'refund'
	};
	
	var actionIcons = {
	  ANNOUNCED: 'fa-ban',
	  PROCESSED: 'fa-undo'
	};
	
	/**
	 * @name isStatusDisplayed
	 * @type {function}
	 *
	 * @description
	 * Helper to check if status displayed or not
	 *
	 * @param {string} status Direct debit status
	 *
	 * @returns {boolean} True if status must be displayed
	 */
	var isStatusDisplayed = exports.isStatusDisplayed = function isStatusDisplayed(status) {
	  return !!statuses.large[status];
	};
	
	/**
	 * @name getStatusLabel
	 * @type {function}
	 *
	 * @description
	 * Helper to get status label
	 *
	 * @param {string} status Direct debit status
	 * @param {string} type of status label (small, large)
	 *
	 * @returns {string} Translation key for status label
	 */
	var getStatusLabel = exports.getStatusLabel = function getStatusLabel(status) {
	  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'large';
	  return 'directDebit.status.' + statuses[type][status].translationKey;
	};
	
	/**
	 * @name getStatusClass
	 * @type {function}
	 *
	 * @description
	 * Helper to get status class
	 *
	 * @param {string} status Direct debit status
	 *
	 * @returns {string} Class for status
	 */
	var getStatusClass = exports.getStatusClass = function getStatusClass(status) {
	  return statuses.large[status].class;
	};
	
	/**
	 * @name hasAction
	 * @type {function}
	 *
	 * @description
	 * Helper to check if direct debit has action
	 *
	 * @param {string} status Direct debit status
	 *
	 * @returns {boolean} True if direct debit has action
	 */
	var hasAction = exports.hasAction = function hasAction(status) {
	  return !!actionKeys[status];
	};
	
	/**
	 * @name getActionLabel
	 * @type {function}
	 *
	 * @description
	 * Helper to get action label according status
	 *
	 * @param {string} status Direct debit status
	 *
	 * @returns {string} Translation key for action label
	 */
	var getActionLabel = exports.getActionLabel = function getActionLabel(status) {
	  return 'directDebit.action.' + actionKeys[status];
	};
	
	/**
	 * @name getActionIcon
	 * @type {function}
	 *
	 * @description
	 * Helper to get action icon according to status
	 *
	 * @param {string} status Direct debit status
	 *
	 * @returns {string} Translation key for action icon
	 */
	var getActionIcon = exports.getActionIcon = function getActionIcon(status) {
	  return actionIcons[status];
	};
	
	/**
	 * @name getConfirmTitle
	 * @type {function}
	 *
	 * @description
	 * Helper to get confirm title text according status
	 *
	 * @param {string} status Direct debit status
	 *
	 * @returns {string} Translation key for confirm title text
	 */
	var getConfirmTitle = exports.getConfirmTitle = function getConfirmTitle(status) {
	  return 'directDebit.dialog.' + actionKeys[status] + '.title';
	};
	
	/**
	 * @name getConfirmBody
	 * @type {function}
	 *
	 * @description
	 * Helper to get confirm body text according status
	 *
	 * @param {string} status Direct debit status
	 *
	 * @returns {string} Translation key for confirm body text
	 */
	var getConfirmBody = exports.getConfirmBody = function getConfirmBody(status) {
	  return 'directDebit.dialog.' + actionKeys[status] + '.body';
	};
	
	/**
	 * @name getConfirmSubmit
	 * @type {function}
	 *
	 * @description
	 * Helper to get submit confirm label according status
	 *
	 * @param {string} status Direct debit status
	 *
	 * @returns {string} Translation key for submit confirm label
	 */
	var getConfirmSubmit = exports.getConfirmSubmit = function getConfirmSubmit(status) {
	  return 'directDebit.dialog.' + actionKeys[status] + '.yes';
	};
	
	var frequencyKeys = {
	  ONCE: 'once',
	  DAILY: 'daily',
	  WEEKLY: 'weekly',
	  MONTHLY: 'monthly',
	  YEARLY: 'yearly'
	};
	
	/**
	 * @name getFrequencyLabel
	 * @type {function}
	 *
	 * @description
	 * Helper to get direct debit frequency
	 *
	 * @param {string} frequency Direct debit frequency
	 *
	 * @returns {string} Translation key for frequency label
	 */
	var getFrequencyLabel = exports.getFrequencyLabel = function getFrequencyLabel(mode, frequency) {
	  return 'directDebit.frequency.' + (mode === 'SINGLE' ? frequencyKeys.ONCE : frequencyKeys[frequency]);
	};
	
	/**
	 * @name addDayNumberToDate
	 * @inner
	 * @type {function}
	 *
	 * @description
	 * Adds days count to date
	 *
	 * @param {string} date Date string
	 * @param {number} dayNumber Days count
	 *
	 * @returns {number} New timestamp with added days
	 */
	var addDayNumberToDate = function addDayNumberToDate(date, dayNumber) {
	  var parsedDate = Date.parse(date);
	  var parsedDayNumber = dayNumber * 1000 * 60 * 60 * 24;
	
	  return parsedDate + parsedDayNumber;
	};
	
	/**
	 * @name getRefundDate
	 * @type {function}
	 *
	 * @description
	 * Helper to get refund deadline if available
	 *
	 * @param {object} item Direct debit object
	 *
	 * @returns {null|number} New timestamp with added days or null if is not applicable
	 */
	var getRefundDate = exports.getRefundDate = function getRefundDate(item) {
	  return item.status === 'PROCESSED' ? addDayNumberToDate(item.date, item.refundDayCount) : null;
	};
	
	/**
	 * @name toggled
	 * @inner
	 * @type {null|string}
	 *
	 * @description
	 * Stores id of toggled direct debit
	 */
	var toggled = null;
	
	/**
	 * @name canBeToggled
	 * @inner
	 * @type {function}
	 *
	 * @description
	 * Check if current click event allows toggle direct debit
	 *
	 * @param {object} event click object
	 *
	 * @returns {boolean} True if event allows toggle direct debit
	 */
	var canBeToggled = function canBeToggled(event) {
	  var target = event.target.nodeName.toUpperCase();
	  var parent = event.target.parentNode.nodeName.toUpperCase();
	  var unavailableNodes = ['INPUT', 'BUTTON', 'A'];
	
	  return unavailableNodes.indexOf(target) === -1 && unavailableNodes.indexOf(parent) === -1 && !event.view.getSelection().toString();
	};
	
	/**
	 * @name toggleDetails
	 * @type {function}
	 *
	 * @description
	 * Show/hide (toggle) direct debit details row
	 *
	 * @param {string} id row identification
	 * @param {object} event click object
	 */
	var toggleDetails = exports.toggleDetails = function toggleDetails(id, event) {
	  if (canBeToggled(event)) {
	    toggled = id === toggled ? null : id;
	  }
	};
	
	/**
	 * @name isToggled
	 * @type {function}
	 *
	 * @description
	 * Helper to check if direct debit is toggled or not
	 *
	 * @param {string} id row identification
	 *
	 * @returns {boolean} True if direct debit is toggled
	 */
	var isToggled = exports.isToggled = function isToggled(id) {
	  return id === toggled;
	};
	
	/**
	 * @name removeNotification
	 *
	 * @description
	 * Helper to remove notification from the list
	 *
	 * @param {object} notification
	 * @param {Array} notificationsList
	 * @type {function}
	 * @returns {null}
	 */
	var removeNotification = exports.removeNotification = function removeNotification(notification, notificationsList) {
	  return notificationsList.filter(function (item) {
	    return item !== notification;
	  });
	};
	
	var notificationClasses = {
	  SUCCESS: 'bg-success',
	  ALERT: 'bg-warning'
	};
	
	/**
	 * @name getNotificationClass
	 *
	 * @description
	 * Helper to get notification class
	 *
	 * @param {string} level Notification level
	 * @type {function}
	 * @returns {string}
	 */
	var getNotificationClass = exports.getNotificationClass = function getNotificationClass(level) {
	  return notificationClasses[level];
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

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var Event = {
	  DIRECT_DEBIT_REFUND_SUCCESS: 'bb.event.direct.debit.refund.success',
	  DIRECT_DEBIT_REFUND_FAIL: 'bb.event.direct.debit.refund.fail',
	  DIRECT_DEBIT_REFUSE_SUCCESS: 'bb.event.direct.debit.refuse.success',
	  DIRECT_DEBIT_REFUSE_FAIL: 'bb.event.direct.debit.refuse.fail'
	};
	
	exports.default = function (_ref) {
	  var _ref2;
	
	  var notifications = _ref.notifications,
	      $filter = _ref.$filter;
	
	  var i18n = $filter('i18n');
	  return _ref2 = {}, _defineProperty(_ref2, Event.DIRECT_DEBIT_REFUND_SUCCESS, function () {
	    notifications.notifySuccess(i18n('direct.debit.notification.refund.success'));
	  }), _defineProperty(_ref2, Event.DIRECT_DEBIT_REFUND_FAIL, function () {
	    notifications.notifyAlert(i18n('direct.debit.notification.action.fail'));
	  }), _defineProperty(_ref2, Event.DIRECT_DEBIT_REFUSE_SUCCESS, function () {
	    notifications.notifySuccess(i18n('direct.debit.notification.refuse.success'));
	  }), _defineProperty(_ref2, Event.DIRECT_DEBIT_REFUSE_FAIL, function () {
	    notifications.notifyAlert(i18n('direct.debit.notification.action.fail'));
	  }), _ref2;
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bus-direct-debit-list-ng.js.map