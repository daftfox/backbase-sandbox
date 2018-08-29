(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-date-label-filter-ng"), require("ui-bb-message-ng"), require("ui-bb-load-more-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-confirm-ng"), require("vendor-bb-uib-tooltip"), require("vendor-bb-angular-sanitize"), require("ui-bb-notification-stripe-ng"), require("ui-bb-paginator-ng"), require("ui-bb-notifications-filter-ng"), require("ui-bb-ellipsis-tooltip-ng"), require("ui-bb-empty-state-ng"), require("vendor-bb-uib-dropdown"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-notification-center-ng", ["vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "ui-bb-date-label-filter-ng", "ui-bb-message-ng", "ui-bb-load-more-ng", "ui-bb-substitute-error-ng", "ui-bb-loading-overlay-ng", "ui-bb-confirm-ng", "vendor-bb-uib-tooltip", "vendor-bb-angular-sanitize", "ui-bb-notification-stripe-ng", "ui-bb-paginator-ng", "ui-bb-notifications-filter-ng", "ui-bb-ellipsis-tooltip-ng", "ui-bb-empty-state-ng", "vendor-bb-uib-dropdown"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-notification-center-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-date-label-filter-ng"), require("ui-bb-message-ng"), require("ui-bb-load-more-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-confirm-ng"), require("vendor-bb-uib-tooltip"), require("vendor-bb-angular-sanitize"), require("ui-bb-notification-stripe-ng"), require("ui-bb-paginator-ng"), require("ui-bb-notifications-filter-ng"), require("ui-bb-ellipsis-tooltip-ng"), require("ui-bb-empty-state-ng"), require("vendor-bb-uib-dropdown"));
	else
		root["ext-bb-notification-center-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["ui-bb-date-label-filter-ng"], root["ui-bb-message-ng"], root["ui-bb-load-more-ng"], root["ui-bb-substitute-error-ng"], root["ui-bb-loading-overlay-ng"], root["ui-bb-confirm-ng"], root["vendor-bb-uib-tooltip"], root["vendor-bb-angular-sanitize"], root["ui-bb-notification-stripe-ng"], root["ui-bb-paginator-ng"], root["ui-bb-notifications-filter-ng"], root["ui-bb-ellipsis-tooltip-ng"], root["ui-bb-empty-state-ng"], root["vendor-bb-uib-dropdown"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__) {
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

	module.exports = __webpack_require__(12);

/***/ }),
/* 1 */,
/* 2 */,
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
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.helpers = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(3);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _vendorBbUibTooltip = __webpack_require__(13);
	
	var _vendorBbUibTooltip2 = _interopRequireDefault(_vendorBbUibTooltip);
	
	var _vendorBbAngularSanitize = __webpack_require__(14);
	
	var _vendorBbAngularSanitize2 = _interopRequireDefault(_vendorBbAngularSanitize);
	
	var _uiBbMessageNg = __webpack_require__(6);
	
	var _uiBbMessageNg2 = _interopRequireDefault(_uiBbMessageNg);
	
	var _uiBbLoadMoreNg = __webpack_require__(7);
	
	var _uiBbLoadMoreNg2 = _interopRequireDefault(_uiBbLoadMoreNg);
	
	var _uiBbConfirmNg = __webpack_require__(10);
	
	var _uiBbConfirmNg2 = _interopRequireDefault(_uiBbConfirmNg);
	
	var _uiBbI18nNg = __webpack_require__(4);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(8);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbNotificationStripeNg = __webpack_require__(15);
	
	var _uiBbNotificationStripeNg2 = _interopRequireDefault(_uiBbNotificationStripeNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(9);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBbDateLabelFilterNg = __webpack_require__(5);
	
	var _uiBbDateLabelFilterNg2 = _interopRequireDefault(_uiBbDateLabelFilterNg);
	
	var _uiBbPaginatorNg = __webpack_require__(16);
	
	var _uiBbPaginatorNg2 = _interopRequireDefault(_uiBbPaginatorNg);
	
	var _uiBbNotificationsFilterNg = __webpack_require__(17);
	
	var _uiBbNotificationsFilterNg2 = _interopRequireDefault(_uiBbNotificationsFilterNg);
	
	var _uiBbEllipsisTooltipNg = __webpack_require__(18);
	
	var _uiBbEllipsisTooltipNg2 = _interopRequireDefault(_uiBbEllipsisTooltipNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(19);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _vendorBbUibDropdown = __webpack_require__(20);
	
	var _vendorBbUibDropdown2 = _interopRequireDefault(_vendorBbUibDropdown);
	
	var _helpers = __webpack_require__(21);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var helpers = exports.helpers = _helpers2.default; /**
	                                                    * @module ext-bb-notification-center-ng
	                                                    *
	                                                    * @description
	                                                    * Default extension for notifications center.
	                                                    *
	                                                    * @example
	                                                    * <!-- widget's model.xml -->
	                                                    * <property name="extension" viewHint="text-input,admin">
	                                                    *  <value type="string">ext-bb-notification-center-ng</value>
	                                                    * </property>
	                                                    */
	var dependencyKeys = exports.dependencyKeys = [_uiBbMessageNg2.default, _uiBbLoadMoreNg2.default, _uiBbConfirmNg2.default, _uiBbI18nNg2.default, _uiBbSubstituteErrorNg2.default, _uiBbNotificationStripeNg2.default, _uiBbLoadingOverlayNg2.default, _uiBbDateLabelFilterNg2.default, _uiBbEmptyStateNg2.default, _vendorBbAngularNgAria2.default, _uiBbPaginatorNg2.default, _uiBbNotificationsFilterNg2.default, _uiBbEllipsisTooltipNg2.default, _vendorBbUibTooltip2.default, _vendorBbAngularSanitize2.default, _vendorBbUibDropdown2.default];

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

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
	
	var _DateLabelKey;
	
	var _uiBbDateLabelFilterNg = __webpack_require__(5);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * @description
	 * Date label enum
	 *
	 * @name DateLabelKey
	 * @enum {string}
	 */
	var DateLabelKey = (_DateLabelKey = {}, _defineProperty(_DateLabelKey, _uiBbDateLabelFilterNg.TimePeriod.NOW, 'calendar.label.now'), _defineProperty(_DateLabelKey, _uiBbDateLabelFilterNg.TimePeriod.TODAY, 'calendar.label.today'), _defineProperty(_DateLabelKey, _uiBbDateLabelFilterNg.TimePeriod.YESTERDAY, 'calendar.label.yesterday'), _DateLabelKey);
	
	/**
	 * @description
	 * Level objects enum
	 *
	 * @name Level
	 * @enum {object}
	 */
	var Level = {
	  ALERT: {
	    icon: 'fa-exclamation-circle text-danger',
	    suffix: 'alert'
	  },
	  WARNING: {
	    icon: 'fa-exclamation-triangle text-warning',
	    suffix: 'warning'
	  },
	  INFO: {
	    icon: 'fa-info-circle text-info',
	    suffix: 'info'
	  },
	  SUCCESS: {
	    icon: 'fa-check-circle text-success',
	    suffix: 'success'
	  }
	};
	
	exports.default = function (_ref) {
	  var $filter = _ref.$filter;
	
	  var i18nFilter = $filter('i18n');
	  var dateFilter = $filter('date');
	  var dateLabelFilter = $filter('dateLabel');
	
	  /**
	   * @name Helpers#toggleDetails
	   * @type {Function}
	   *
	   * @description
	   * Toggles notification details
	   *
	   * @param {String} notification notification object
	   * @param {Object} ext extension reference
	   * @param {Object} ctrl extension reference
	   */
	  var toggleDetails = function toggleDetails(notification, ext, ctrl) {
	    Object.assign(ext, {
	      toggledId: notification.id === ext.toggledId ? null : notification.id
	    });
	
	    if (!notification.read) {
	      ctrl.markNotification(notification.id, !notification.read);
	    }
	  };
	
	  /**
	   * @name Helpers#getLevelIcon
	   * @type {function}
	   *
	   * @description
	   * Helper to get severity level icon
	   *
	   * @param {string} level severity level
	   *
	   * @returns {string} Severity level icon class
	   */
	  var getLevelIcon = function getLevelIcon(level) {
	    return Level[level].icon;
	  };
	
	  /**
	   * @name Helpers#getLevelTitle
	   * @type {function}
	   *
	   * @description
	   * Helper to get severity level title
	   *
	   * @param {string} read severity level
	   *
	   * @returns {string} Severity level title
	   */
	  var getLevelTitle = function getLevelTitle(level) {
	    return i18nFilter('notification.level.' + Level[level].suffix);
	  };
	
	  /**
	   * @name Helpers#getReadBtnLabel
	   * @type {function}
	   *
	   * @description
	   * Helper to get read status label
	   *
	   * @param {string} read read status
	   *
	   * @returns {string} Read status label
	   */
	  var getReadBtnLabel = function getReadBtnLabel(read) {
	    return i18nFilter('notification.label.' + (!read ? 'read' : 'unread'));
	  };
	
	  /**
	   * @name Helpers#getDateLabel
	   * @type {function}
	   *
	   * @description
	   * Helper to get date label
	   *
	   * @param {object} item Notification object
	   * @param {?object} format Date format
	   *
	   * @returns {string} Date label
	   */
	  var getDateLabel = function getDateLabel(item) {
	    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'longDate';
	
	    var date = item.validFrom || item.createdOn;
	    var labelKey = DateLabelKey[dateLabelFilter(date)];
	
	    return labelKey ? i18nFilter(labelKey) : dateFilter(date, format);
	  };
	
	  /**
	   * @description
	   * Checkes if actual pagination type matches the one, defined in properties
	   *
	   * @name Helpers#isPaginationTypeMatch
	   * @type {function}
	   * @param {function} $ctrl      Current controller
	   * @param {string} type         Description of pagination type (pagination, load-more)
	   *
	   * @returns {boolean}
	   */
	  var isPaginationTypeMatch = function isPaginationTypeMatch($ctrl, type) {
	    return $ctrl.paginationType === type;
	  };
	
	  /**
	   * @name Helpers#getEmptyMessage
	   * @type {function}
	   *
	   * @description
	   * Helper to get empty message
	   *
	   * @param {boolean} isFilterApplied Filter applied status
	   *
	   * @returns {string} Empty message string
	   */
	  var getEmptyMessage = function getEmptyMessage(isFilterApplied) {
	    return i18nFilter('notification.message.' + (isFilterApplied ? 'not.found' : 'empty'));
	  };
	
	  /**
	   * @name Helpers#confirmDeleteNotification
	   * @type {Function}
	   *
	   * @description
	   * Shows confirmation popup dialog for deleting notification
	   *
	   * @param {String} notification notification object
	   * @param {Object} ext extension reference
	   * @param {Object} ctrl extension reference
	   */
	  var confirmDeleteNotification = function confirmDeleteNotification(notification, ext) {
	    Object.assign(ext, {
	      deleteItemId: notification.id,
	      deleteConfirmOpened: true
	    });
	  };
	
	  return {
	    toggleDetails: toggleDetails,
	    getLevelIcon: getLevelIcon,
	    getLevelTitle: getLevelTitle,
	    getReadBtnLabel: getReadBtnLabel,
	    getDateLabel: getDateLabel,
	    isPaginationTypeMatch: isPaginationTypeMatch,
	    getEmptyMessage: getEmptyMessage,
	    confirmDeleteNotification: confirmDeleteNotification
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-notification-center-ng.js.map