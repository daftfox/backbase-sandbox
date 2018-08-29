(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("ui-bb-date-label-filter-ng"), require("ui-bbm-scroll-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-notification-center-list-ng", ["ui-bb-i18n-ng", "ui-bb-date-label-filter-ng", "ui-bbm-scroll-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-notification-center-list-ng"] = factory(require("ui-bb-i18n-ng"), require("ui-bb-date-label-filter-ng"), require("ui-bbm-scroll-ng"));
	else
		root["ext-bbm-notification-center-list-ng"] = factory(root["ui-bb-i18n-ng"], root["ui-bb-date-label-filter-ng"], root["ui-bbm-scroll-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_33__) {
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

	module.exports = __webpack_require__(32);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.helpers = exports.intents = exports.events = undefined;
	
	var _uiBbI18nNg = __webpack_require__(4);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbDateLabelFilterNg = __webpack_require__(5);
	
	var _uiBbDateLabelFilterNg2 = _interopRequireDefault(_uiBbDateLabelFilterNg);
	
	var _uiBbmScrollNg = __webpack_require__(33);
	
	var _uiBbmScrollNg2 = _interopRequireDefault(_uiBbmScrollNg);
	
	var _events = __webpack_require__(34);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _intents = __webpack_require__(36);
	
	var _intents2 = _interopRequireDefault(_intents);
	
	var _helpers = __webpack_require__(37);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bbm-notification-center-list-ng
	 *
	 * @description
	 * Mobile extension for a notiication center list.
	 *
	 * @example
	 * <!-- Contact widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *   <value type="string">ext-bbm-notification-list-ng</value>
	 * </property>
	 */
	var events = exports.events = _events2.default;
	var intents = exports.intents = _intents2.default;
	var helpers = exports.helpers = _helpers2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbI18nNg2.default, _uiBbDateLabelFilterNg2.default, _uiBbmScrollNg2.default];

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_33__;

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(35);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	exports.default = function (_ref) {
	  var _ref2;
	
	  var service = _ref.service;
	  return _ref2 = {}, _defineProperty(_ref2, _constants.Event.NOTIFICATION_CHANGE_READ, function () {
	    service.reloadNotifications();
	  }), _defineProperty(_ref2, _constants.Event.AFTER_NOTIFICATION_DELETE_SUCCESS, function () {
	    service.reloadNotifications();
	  }), _ref2;
	};

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Intent = exports.Event = exports.DateLabel = exports.LevelIcon = undefined;
	
	var _DateLabel;
	
	var _uiBbDateLabelFilterNg = __webpack_require__(5);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * Level icons
	 * @name LevelIcon
	 * @type {Object}
	 * @inner
	 */
	var LevelIcon = exports.LevelIcon = {
	  ALERT: 'fa-exclamation-circle',
	  INFO: 'fa-info-circle',
	  SUCCESS: 'fa-check-circle',
	  WARNING: 'fa-exclamation-triangle'
	};
	
	/**
	 * Date labels
	 * @name DateLabel
	 * @type {Object}
	 * @inner
	 */
	var DateLabel = exports.DateLabel = (_DateLabel = {}, _defineProperty(_DateLabel, _uiBbDateLabelFilterNg.TimePeriod.NOW, 'calendar.label.now'), _defineProperty(_DateLabel, _uiBbDateLabelFilterNg.TimePeriod.TODAY, 'calendar.label.today'), _defineProperty(_DateLabel, _uiBbDateLabelFilterNg.TimePeriod.YESTERDAY, 'calendar.label.yesterday'), _DateLabel);
	
	var Event = exports.Event = {
	  /**
	   * A notification was successfully deleted.
	   * @event bb.event.notification.delete.done
	   * @type {string}
	   */
	  AFTER_NOTIFICATION_DELETE_SUCCESS: 'bb.event.notification.delete.done',
	
	  /**
	   * The read status of a notification was changed.
	   * @event bb.event.notification.read.change
	   * @type {string}
	   */
	  NOTIFICATION_CHANGE_READ: 'bb.event.notification.read.change'
	};
	
	/**
	 * Intents enum
	 * @name Intent
	 * @type {Object}
	 * @inner
	 */
	var Intent = exports.Intent = {
	  SHOW_NOTIFICATION_LIST: 'intent.rbm.notification.list.show',
	  SHOW_NOTIFICATION_DETAILS: 'intent.rbm.notification.details.show'
	};

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(35);
	
	/**
	 * @name Intents
	 * @type {Object}
	 */
	exports.default = function (_ref) {
	  var createRequest = _ref.createRequest;
	  return {
	    /**
	     * @name Intents#showNotificationDetails
	     * @description The intent to show the notification details
	     * @type {function}
	     */
	    showNotificationDetails: createRequest(_constants.Intent.SHOW_NOTIFICATION_DETAILS)
	  };
	};

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _uiBbDateLabelFilterNg = __webpack_require__(5);
	
	var _constants = __webpack_require__(35);
	
	/**
	 * @description
	 * Helpers for ext-bbm-notification-center-list-ng
	 *
	 * @name Helpers
	 * @type {Object}
	 */
	exports.default = function (_ref) {
	  var $filter = _ref.$filter,
	      service = _ref.service,
	      stateContainer = _ref.stateContainer,
	      intents = _ref.intents;
	
	  /**
	   * @description
	   * Returns the `notifications` from the state
	   *
	   * @name Helpers#getNotifications
	   * @type {function}
	   * @returns {Array} notifications List of notifications from the state
	   * @inner
	   */
	  var getNotifications = stateContainer.createSelector(function (state) {
	    return state.notifications.data;
	  });
	
	  /**
	   * The standard ISO-8601 supports the following formats for time offsets:
	   * ±[hh]:[mm], ±[hh][mm], or ±[hh]
	   * However iOS does support only ±[hh]:[mm] format.
	   * Thus we make sure that the given date string has the following
	   * variation of the ISO-8601 standard:
	   * "YYYY-MM-DDThh:mm:ss.SSS±hh:mm"
	   * @name normalizeDate
	   * @type {function}
	   *
	   * @param dateStr
	   * @inner
	   */
	  var normalizeDate = function normalizeDate(dateStr) {
	    var filteredDate = $filter('date')(dateStr, 'yyyy-MM-ddTHH:mm:ss.sssZ');
	    return filteredDate.replace(/(\d{2}):?(\d{2})$/, '$1:$2');
	  };
	
	  /**
	   * @description
	   * Returns CSS class for icon according to the given level.
	   *
	   * @name Helpers#getLevelIcon
	   * @type {function}
	   *
	   * @param {string} level Notification level
	   * @return {string}
	   */
	  var getLevelIcon = function getLevelIcon(level) {
	    return _constants.LevelIcon[level];
	  };
	
	  /**
	   * @description
	   * Returns a date label for the given notification.
	   * @name Helpers#getDateLabel
	   * @type {function}
	   * @param {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem} notification
	   *   Notification item
	   * @return {string}
	   */
	  var getDateLabel = function getDateLabel(notification) {
	    var date = normalizeDate(notification.createdOn);
	    var labelKey = void 0;
	    var resultDateLabel = void 0;
	
	    if (!notification.isOpen) {
	      labelKey = _constants.DateLabel[$filter('dateLabel')(date)];
	      if (labelKey) {
	        if (labelKey === _constants.DateLabel[_uiBbDateLabelFilterNg.TimePeriod.NOW]) {
	          resultDateLabel = $filter('i18n')(labelKey);
	        } else {
	          resultDateLabel = $filter('i18n')(labelKey) + $filter('i18n')('calendar.label.at') + $filter('date')(date, 'hh:mm');
	        }
	      }
	    }
	
	    return labelKey ? resultDateLabel : $filter('date')(date, 'd MMMM yyyy');
	  };
	
	  /**
	   * @description
	   * Checks if there are notifications.
	   *
	   * @name Helpers#hasNotifications
	   * @type {function}
	   *
	   * @return {boolean}
	   */
	  var hasNotifications = stateContainer.createSelector(function (state) {
	    return Boolean(state.notifications.data && state.notifications.data.length);
	  });
	
	  /**
	   * @description
	   * Checks for the loading state.
	   *
	   * @name Helpers#showLoadingState
	   * @type {function}
	   *
	   * @return {boolean}
	   */
	  var showLoadingState = stateContainer.createSelector(function (state) {
	    return Boolean(state.notifications.loading && !state.notifications.data && !state.notifications.error);
	  });
	
	  /**
	   * @description
	   * Checks for the load more's loading state.
	   *
	   * @name Helpers#showLoadMoreLoading
	   * @type {function}
	   *
	   * @return {boolean}
	   */
	  var showLoadMoreLoading = stateContainer.createSelector(function (state) {
	    return Boolean(state.notifications.loading && state.notifications.data);
	  });
	
	  /**
	   * @description
	   * Checks for the load more states.
	   *
	   * @name Helpers#showLoadMore
	   * @type {function}
	   *
	   * @return {boolean}
	   */
	  var showLoadMore = function showLoadMore() {
	    return showLoadMoreLoading();
	  };
	
	  /**
	   * @description
	   * Checks for the error state.
	   *
	   * @name Helpers#showErrorState
	   * @type {function}
	   *
	   * @return {boolean}
	   */
	  var showErrorState = stateContainer.createSelector(function (state) {
	    return Boolean(state.notifications.error && !state.notifications.loading);
	  });
	
	  /**
	   * @description
	   * Checks for the empty state.
	   *
	   * @name Helpers#showEmptyState
	   * @type {function}
	   *
	   * @return {boolean}
	   */
	  var showEmptyState = stateContainer.createSelector(function (state) {
	    return Boolean(Boolean(state.notifications.data && !state.notifications.data.length) && !state.notifications.error && !state.notifications.loading);
	  });
	
	  /**
	   * @description
	   * Sets the selected notification and fires the intent to show the notification details
	   *
	   * @name Helpers#selectNotification
	   * @type {function}
	   * @param {Object} notification The notification to select
	   * @inner
	   */
	  var selectNotification = function selectNotification(notification) {
	    service.setSelectedNotification(notification);
	    return intents.showNotificationDetails(notification);
	  };
	
	  /**
	   * @description
	   * Loads more notifications
	   *
	   * @name Helpers#loadMoreNotifications
	   * @type {function}
	   */
	  var loadMoreNotifications = function loadMoreNotifications() {
	    return service.loadMoreNotifications();
	  };
	
	  return {
	    getDateLabel: getDateLabel,
	    getLevelIcon: getLevelIcon,
	    getNotifications: getNotifications,
	    hasNotifications: hasNotifications,
	    loadMoreNotifications: loadMoreNotifications,
	    selectNotification: selectNotification,
	    showEmptyState: showEmptyState,
	    showErrorState: showErrorState,
	    showLoadingState: showLoadingState,
	    showLoadMore: showLoadMore,
	    showLoadMoreLoading: showLoadMoreLoading
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bbm-notification-center-list-ng.js.map