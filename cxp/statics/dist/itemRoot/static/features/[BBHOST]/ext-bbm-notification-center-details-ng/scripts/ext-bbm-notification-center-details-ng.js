(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("ui-bb-date-label-filter-ng"), require("ui-bb-list-ng"), require("lib-bbm-plugins"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-notification-center-details-ng", ["ui-bb-i18n-ng", "ui-bb-date-label-filter-ng", "ui-bb-list-ng", "lib-bbm-plugins"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-notification-center-details-ng"] = factory(require("ui-bb-i18n-ng"), require("ui-bb-date-label-filter-ng"), require("ui-bb-list-ng"), require("lib-bbm-plugins"));
	else
		root["ext-bbm-notification-center-details-ng"] = factory(root["ui-bb-i18n-ng"], root["ui-bb-date-label-filter-ng"], root["ui-bb-list-ng"], root["lib-bbm-plugins"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_28__) {
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

	module.exports = __webpack_require__(25);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
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
	
	var _uiBbListNg = __webpack_require__(26);
	
	var _uiBbListNg2 = _interopRequireDefault(_uiBbListNg);
	
	var _events = __webpack_require__(27);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _intents = __webpack_require__(30);
	
	var _intents2 = _interopRequireDefault(_intents);
	
	var _helpers = __webpack_require__(31);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bbm-notification-center-details-ng
	 *
	 * @description
	 * Mobile extension for a notiication center details.
	 *
	 * @example
	 * <!-- Contact widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *   <value type="string">ext-bbm-notification-details-ng</value>
	 * </property>
	 */
	var events = exports.events = _events2.default;
	var intents = exports.intents = _intents2.default;
	var helpers = exports.helpers = _helpers2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbI18nNg2.default, _uiBbDateLabelFilterNg2.default, _uiBbListNg2.default];

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libBbmPlugins = __webpack_require__(28);
	
	var _libBbmPlugins2 = _interopRequireDefault(_libBbmPlugins);
	
	var _constants = __webpack_require__(29);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // Temporary disable capsInNew until it fixed in lib-bbm-plugins
	/* eslint new-cap: ["error", { "capIsNew": false }] */
	
	
	exports.default = function (_ref) {
	  var _withNativeEvents, _withNativeEvents2;
	
	  var $filter = _ref.$filter,
	      stateContainer = _ref.stateContainer,
	      service = _ref.service,
	      bus = _ref.bus,
	      withNativeEvents = _ref.withNativeEvents;
	
	  var i18n = $filter('i18n');
	
	  /**
	   * @description
	   * Returns the current selected `notification` from the state
	   *
	   * @name getSelectedNotification
	   * @type {function}
	   * @returns {Object} notification Notification from the state
	   * @inner
	   */
	  var getSelectedNotification = stateContainer.createSelector(function (state) {
	    return state.notification.data;
	  });
	
	  return withNativeEvents((_withNativeEvents = {}, _defineProperty(_withNativeEvents, _constants.ToolbarButtonEvent.NOTIFICATION_CHANGE_READ_STATUS, function () {
	    var notification = getSelectedNotification();
	    service.toggleNotificationReadStatus(notification);
	  }), _defineProperty(_withNativeEvents, _constants.ToolbarButtonEvent.DELETE_NOTIFICATION, function () {
	    var confirmOptions = {
	      title: i18n('message.notification.delete.confirm.title'),
	      message: i18n('message.notification.delete.confirm.message'),
	      buttons: [{
	        type: _constants.ButtonType.POSITIVE,
	        text: i18n('message.notification.delete.confirm.button.ok'),
	        callbackFn: _constants.ConfirmAction.CONFIRM
	      }, {
	        type: _constants.ButtonType.NEGATIVE,
	        text: i18n('message.notification.delete.confirm.button.cancel'),
	        callbackFn: _constants.ConfirmAction.CANCEL
	      }]
	    };
	
	    _libBbmPlugins2.default.AlertDialog().show(confirmOptions).then(function (response) {
	      return response.callback === _constants.ConfirmAction.CONFIRM;
	    }).then(function (isConfirmed) {
	      if (isConfirmed) {
	        var notificationId = getSelectedNotification().id;
	        service.deleteNotification(notificationId).then(function () {
	          bus.publish(_constants.Event.SHOW_NOTIFICATION_LIST);
	        });
	      }
	    });
	  }), _withNativeEvents), (_withNativeEvents2 = {}, _defineProperty(_withNativeEvents2, _constants.Event.BEFORE_NOTIFICATION_DELETE, function () {
	    _libBbmPlugins2.default.ActivityIndicator().show(i18n('message.notification.delete.start'));
	  }), _defineProperty(_withNativeEvents2, _constants.Event.AFTER_NOTIFICATION_DELETE_SUCCESS, function () {
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    _libBbmPlugins2.default.Snackbar().success(i18n('message.notification.delete.done'));
	  }), _defineProperty(_withNativeEvents2, _constants.Event.AFTER_NOTIFICATION_DELETE_ERROR, function () {
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    _libBbmPlugins2.default.Snackbar().error(i18n('message.notification.delete.failed'));
	  }), _withNativeEvents2));
	};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Event = exports.Intent = exports.ConfirmAction = exports.ButtonType = exports.ToolbarButtonEvent = exports.DateLabel = exports.LevelIcon = undefined;
	
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
	  WARNING: 'fa-exclamation-triangle',
	  INFO: 'fa-info-circle',
	  SUCCESS: 'fa-check-circle'
	};
	
	/**
	 * Date labels
	 * @name DateLabel
	 * @type {Object}
	 * @inner
	 */
	var DateLabel = exports.DateLabel = (_DateLabel = {}, _defineProperty(_DateLabel, _uiBbDateLabelFilterNg.TimePeriod.NOW, 'calendar.label.now'), _defineProperty(_DateLabel, _uiBbDateLabelFilterNg.TimePeriod.TODAY, 'calendar.label.today'), _defineProperty(_DateLabel, _uiBbDateLabelFilterNg.TimePeriod.YESTERDAY, 'calendar.label.yesterday'), _DateLabel);
	
	/**
	 * Toolbar button events enum
	 * @name ToolbarButtonEvent
	 * @type {Object}
	 * @inner
	 */
	var ToolbarButtonEvent = exports.ToolbarButtonEvent = {
	  DELETE_NOTIFICATION: 'bb.action.notification.delete',
	  NOTIFICATION_CHANGE_READ_STATUS: 'bb.action.notification.read.change'
	};
	
	/**
	 * Confirm dialog button types
	 * @type {Object}
	 * @inner
	 */
	var ButtonType = exports.ButtonType = {
	  POSITIVE: 'POSITIVE',
	  NEGATIVE: 'NEGATIVE'
	};
	
	/**
	 * Confirm dialog actions
	 * @type {Object}
	 * @inner
	 */
	var ConfirmAction = exports.ConfirmAction = {
	  CANCEL: 'cancel',
	  CONFIRM: 'confirm'
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
	
	var Event = exports.Event = {
	  /**
	   * An event to navigate to the notifications list.
	   * @event bb.action.notification.list.show
	   * @type {string}
	   */
	  SHOW_NOTIFICATION_LIST: 'bb.action.notification.list.show',
	
	  /**
	   * A notification is submitted for deletion from the server
	   * @event bb.event.notification.delete.start
	   * @type {string}
	   */
	  BEFORE_NOTIFICATION_DELETE: 'bb.event.notification.delete.start',
	
	  /**
	   * A notification is deleted on the server
	   * @event bb.event.notification.delete.done
	   * @property {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem}
	   *  notification Notification item
	   * @type {string}
	   */
	  AFTER_NOTIFICATION_DELETE_SUCCESS: 'bb.event.notification.delete.done',
	
	  /**
	   * A notification fails to be deleted on the server
	   * @event bb.event.notification.delete.failed
	   * @type {string}
	   * @property {module:lib-bb-model-ng.ModelError} error Model error
	   */
	  AFTER_NOTIFICATION_DELETE_ERROR: 'bb.event.notification.delete.failed'
	};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(29);
	
	/**
	 * @name Intents
	 * @type {Object}
	 */
	exports.default = function (_ref) {
	  var handleRequest = _ref.handleRequest,
	      service = _ref.service;
	  return {
	    /**
	     * @name Intents#showNotificationDetails
	     * @description Handles the intent to show the notification details
	     * @type {function}
	     */
	    showNotificationDetails: handleRequest(_constants.Intent.SHOW_NOTIFICATION_DETAILS, function (notification) {
	      if (notification) {
	        service.setSelectedNotification(notification);
	        if (!notification.read) {
	          service.setNotificationReadStatus(notification.id, true);
	        }
	      } else {
	        throw new Error('Notification is undefined. \n        Please pass a notification object as the payload of the intent');
	      }
	    })
	  };
	};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _uiBbDateLabelFilterNg = __webpack_require__(5);
	
	var _constants = __webpack_require__(29);
	
	// Temporary disable capsInNew until it fixed in lib-bbm-plugins
	/* eslint new-cap: ["error", { "capIsNew": false }] */
	/* global window */
	
	/**
	 * @description
	 * Helpers for ext-bbm-notification-center-details-ng
	 *
	 * @name Helpers
	 * @type {Object}
	 */
	
	exports.default = function (_ref) {
	  var $filter = _ref.$filter,
	      stateContainer = _ref.stateContainer;
	
	  /**
	   * @description
	   * Returns the `notifications` from the state
	   *
	   * @name Helpers#getNotifications
	   * @type {function}
	   * @returns {Array} notifications List of notifications from the state
	   */
	  var getNotification = stateContainer.createSelector(function (state) {
	    return state.notification.data;
	  });
	
	  /**
	   * The standard ISO-8601 supports the following formats for time offsets:
	   * ±[hh]:[mm], ±[hh][mm], or ±[hh]
	   * However iOS does support only ±[hh]:[mm] format.
	   * Thus we make sure that the given date string has the following
	   * variation of the ISO-8601 standard:
	   * "YYYY-MM-DDThh:mm:ss.SSS±hh:mm"
	   * @name normalizeDate
	   * @inner
	   * @param dateStr
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
	   * @returns {string}
	   */
	  var getLevelIcon = function getLevelIcon(level) {
	    return _constants.LevelIcon[level];
	  };
	
	  /**
	   * @description
	   * Returns a date label for the given notification.
	   *
	   * @name Helpers#getDateLabel
	   * @type {function}
	   *
	   * @param {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem} notification
	   *   Notification item
	   * @returns {string}
	   */
	  var getDateLabel = function getDateLabel(notification) {
	    if (!notification) {
	      return '';
	    }
	
	    var date = normalizeDate(notification.createdOn);
	
	    var labelKey = void 0;
	    var resultDateLabel = void 0;
	
	    if (!notification.isOpen) {
	      var dateType = $filter('dateLabel')(date);
	      labelKey = _constants.DateLabel[dateType];
	    }
	
	    resultDateLabel = labelKey ? $filter('i18n')(labelKey) : $filter('date')(date, 'd MMMM yyyy');
	
	    if (labelKey !== _constants.DateLabel[_uiBbDateLabelFilterNg.TimePeriod.NOW]) {
	      resultDateLabel += $filter('i18n')('calendar.label.at') + $filter('date')(date, 'hh:mm');
	    }
	
	    return resultDateLabel;
	  };
	
	  return {
	    getNotification: getNotification,
	    getDateLabel: getDateLabel,
	    getLevelIcon: getLevelIcon
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bbm-notification-center-details-ng.js.map