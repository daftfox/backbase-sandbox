(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-date-label-filter-ng"), require("ui-bb-message-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-loading-overlay-ng"), require("vendor-bb-uib-tooltip"), require("vendor-bb-angular-sanitize"), require("ui-bb-ellipsis-tooltip-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-navigate-to-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bus-notification-center-lite-ng", ["vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "ui-bb-date-label-filter-ng", "ui-bb-message-ng", "ui-bb-substitute-error-ng", "ui-bb-loading-overlay-ng", "vendor-bb-uib-tooltip", "vendor-bb-angular-sanitize", "ui-bb-ellipsis-tooltip-ng", "ui-bb-empty-state-ng", "ui-bb-navigate-to-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bus-notification-center-lite-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-date-label-filter-ng"), require("ui-bb-message-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-loading-overlay-ng"), require("vendor-bb-uib-tooltip"), require("vendor-bb-angular-sanitize"), require("ui-bb-ellipsis-tooltip-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-navigate-to-ng"));
	else
		root["ext-bus-notification-center-lite-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["ui-bb-date-label-filter-ng"], root["ui-bb-message-ng"], root["ui-bb-substitute-error-ng"], root["ui-bb-loading-overlay-ng"], root["vendor-bb-uib-tooltip"], root["vendor-bb-angular-sanitize"], root["ui-bb-ellipsis-tooltip-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-navigate-to-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_39__) {
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

	module.exports = __webpack_require__(38);

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
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
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
/* 19 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
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
/* 36 */,
/* 37 */,
/* 38 */
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
	
	var _uiBbI18nNg = __webpack_require__(4);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(8);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbDateLabelFilterNg = __webpack_require__(5);
	
	var _uiBbDateLabelFilterNg2 = _interopRequireDefault(_uiBbDateLabelFilterNg);
	
	var _uiBbEllipsisTooltipNg = __webpack_require__(18);
	
	var _uiBbEllipsisTooltipNg2 = _interopRequireDefault(_uiBbEllipsisTooltipNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(19);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBbNavigateToNg = __webpack_require__(39);
	
	var _uiBbNavigateToNg2 = _interopRequireDefault(_uiBbNavigateToNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(9);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _helpers = __webpack_require__(40);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bus-notification-center-lite-ng
	 *
	 * @description
	 * Default extension for notifications center.
	 *
	 * @example
	 * <!-- widget's model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bus-notification-center-lite-ng</value>
	 * </property>
	 */
	var helpers = exports.helpers = _helpers2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _vendorBbUibTooltip2.default, _vendorBbAngularSanitize2.default, _uiBbMessageNg2.default, _uiBbI18nNg2.default, _uiBbSubstituteErrorNg2.default, _uiBbDateLabelFilterNg2.default, _uiBbEmptyStateNg2.default, _uiBbEllipsisTooltipNg2.default, _uiBbNavigateToNg2.default, _uiBbLoadingOverlayNg2.default];

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.headers = undefined;
	
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
	
	/**
	 * @description
	 * Read status objects enum
	 *
	 * @name Status
	 * @enum {object}
	 */
	var Status = {
	  READ: {
	    icon: 'fa-check-circle',
	    suffix: 'read'
	  },
	  UNREAD: {
	    icon: 'fa-check-circle-o',
	    suffix: 'unread'
	  }
	};
	
	/**
	 * @name headers
	 * @type {Array}
	 *
	 * @description
	 * List of table headers
	 */
	var headers = exports.headers = [{
	  label: 'notification.header.status',
	  class: ''
	}, {
	  label: 'notification.header.description',
	  class: ''
	}, {
	  label: 'notification.header.date',
	  class: ''
	}];
	
	/**
	 * @description
	 * Lines length enum
	 *
	 * @name LinesLength
	 * @enum {number}
	 */
	var LinesLength = {
	  HAS_TITLE: 1,
	  HAS_NOT_TITLE: 2
	};
	
	exports.default = function (_ref) {
	  var $filter = _ref.$filter;
	
	  var i18nFilter = $filter('i18n');
	  var dateFilter = $filter('date');
	  var dateLabelFilter = $filter('dateLabel');
	
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
	    var parent = event.target.parentNode && event.target.parentNode.nodeName.toUpperCase();
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
	  var toggleDetails = function toggleDetails(id, event) {
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
	  var isToggled = function isToggled(id) {
	    return id === toggled;
	  };
	
	  /**
	   * @name getLevelIcon
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
	   * @name getLevelTitle
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
	   * @name getReadBtnLabel
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
	    return i18nFilter('notification.label.' + Status[read ? 'READ' : 'UNREAD'].suffix);
	  };
	
	  /**
	   * @name getReadBtnIcon
	   * @type {function}
	   *
	   * @description
	   * Helper to get read status label
	   *
	   * @param {string} read read status
	   *
	   * @returns {string} Read status label
	   */
	  var getReadBtnIcon = function getReadBtnIcon(read) {
	    return Status[read ? 'READ' : 'UNREAD'].icon;
	  };
	
	  /**
	   * @name getDateLabel
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
	    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'shortDate';
	
	    var date = item.validFrom || item.createdOn;
	    var labelKey = void 0;
	    if (!item.isOpen) {
	      labelKey = DateLabelKey[dateLabelFilter(date)];
	    }
	    return labelKey ? i18nFilter(labelKey) : dateFilter(date, format);
	  };
	
	  /**
	   * @description
	   * Helper to get visible lines length
	   *
	   * @public
	   * @name getVisibleLinesLength
	   * @type {function}
	   * @param {object} item Notification object
	   *
	   * @returns {number} Visible lines length
	   */
	  var getVisibleLinesLength = function getVisibleLinesLength(item) {
	    return item.title ? LinesLength.HAS_TITLE : LinesLength.HAS_NOT_TITLE;
	  };
	
	  /**
	   * @name getEmptyMessage
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
	
	  return {
	    headers: headers,
	    toggleDetails: toggleDetails,
	    isToggled: isToggled,
	    getLevelIcon: getLevelIcon,
	    getLevelTitle: getLevelTitle,
	    getReadBtnLabel: getReadBtnLabel,
	    getReadBtnIcon: getReadBtnIcon,
	    getDateLabel: getDateLabel,
	    getVisibleLinesLength: getVisibleLinesLength,
	    getEmptyMessage: getEmptyMessage
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bus-notification-center-lite-ng.js.map