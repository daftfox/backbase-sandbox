(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-model-errors"), require("model-bb-notifications-ng"), require("lib-bb-intent-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-state-container-ng"), require("lib-bb-extension-helpers-ng"), require("lib-bb-extension-events-ng"), require("lib-bb-extension-intents-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bbm-notification-center-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-event-bus-ng", "lib-bb-model-errors", "model-bb-notifications-ng", "lib-bb-intent-ng", "lib-bb-widget-extension-ng", "lib-bb-state-container-ng", "lib-bb-extension-helpers-ng", "lib-bb-extension-events-ng", "lib-bb-extension-intents-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bbm-notification-center-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-model-errors"), require("model-bb-notifications-ng"), require("lib-bb-intent-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-state-container-ng"), require("lib-bb-extension-helpers-ng"), require("lib-bb-extension-events-ng"), require("lib-bb-extension-intents-ng"));
	else
		root["widget-bbm-notification-center-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-model-errors"], root["model-bb-notifications-ng"], root["lib-bb-intent-ng"], root["lib-bb-widget-extension-ng"], root["lib-bb-state-container-ng"], root["lib-bb-extension-helpers-ng"], root["lib-bb-extension-events-ng"], root["lib-bb-extension-intents-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_42__, __WEBPACK_EXTERNAL_MODULE_44__, __WEBPACK_EXTERNAL_MODULE_45__, __WEBPACK_EXTERNAL_MODULE_47__, __WEBPACK_EXTERNAL_MODULE_60__, __WEBPACK_EXTERNAL_MODULE_61__, __WEBPACK_EXTERNAL_MODULE_71__, __WEBPACK_EXTERNAL_MODULE_72__, __WEBPACK_EXTERNAL_MODULE_73__, __WEBPACK_EXTERNAL_MODULE_74__, __WEBPACK_EXTERNAL_MODULE_75__) {
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

	module.exports = __webpack_require__(70);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
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
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_42__;

/***/ }),
/* 43 */,
/* 44 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_44__;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_45__;

/***/ }),
/* 46 */,
/* 47 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_47__;

/***/ }),
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
/* 60 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_60__;

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_61__;

/***/ }),
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(42);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(71);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbWidgetNg = __webpack_require__(44);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbIntentNg = __webpack_require__(61);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbEventBusNg = __webpack_require__(45);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbStateContainerNg = __webpack_require__(72);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _modelBbNotificationsNg = __webpack_require__(60);
	
	var _modelBbNotificationsNg2 = _interopRequireDefault(_modelBbNotificationsNg);
	
	var _libBbExtensionHelpersNg = __webpack_require__(73);
	
	var _libBbExtensionHelpersNg2 = _interopRequireDefault(_libBbExtensionHelpersNg);
	
	var _libBbExtensionEventsNg = __webpack_require__(74);
	
	var _libBbExtensionEventsNg2 = _interopRequireDefault(_libBbExtensionEventsNg);
	
	var _libBbExtensionIntentsNg = __webpack_require__(75);
	
	var _libBbExtensionIntentsNg2 = _interopRequireDefault(_libBbExtensionIntentsNg);
	
	var _list = __webpack_require__(76);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _details = __webpack_require__(77);
	
	var _details2 = _interopRequireDefault(_details);
	
	var _defaultHooks = __webpack_require__(78);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	var _index = __webpack_require__(79);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _service = __webpack_require__(84);
	
	var _service2 = _interopRequireDefault(_service);
	
	var _events = __webpack_require__(85);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _constants = __webpack_require__(86);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'widget-bbm-notification-center-ng'; /**
	                                                      * @module widget-bbm-notification-ng
	                                                      *
	                                                      * @description
	                                                      * Mobile notifications widget.
	                                                      */
	
	var hooksKey = moduleKey + ':hooks';
	var eventServiceKey = moduleKey + ':events';
	var serviceKey = moduleKey + ':service';
	var viewModelKey = moduleKey + ':viewModel';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_modelBbNotificationsNg2.default, _libBbWidgetNg2.default, _libBbEventBusNg2.default, _libBbIntentNg2.default, _libBbStateContainerNg2.default, _libBbExtensionHelpersNg2.default, _libBbExtensionEventsNg2.default, _libBbExtensionIntentsNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).factory(eventServiceKey, [_libBbEventBusNg.eventBusKey,
	/* into */
	_events2.default]).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey, _libBbWidgetNg.widgetKey, hooksKey,
	/* into */
	_index2.default]).factory(serviceKey, [_modelBbNotificationsNg.modelNotificationsKey, viewModelKey, hooksKey, _libBbStateContainerNg.bbStateContainerKey, eventServiceKey,
	/* into */
	_service2.default]).factory(_libBbExtensionHelpersNg.extensionHelpersContextKey, [_libBbIntentNg.bbIntentKey, serviceKey, function (bbIntent, service) {
	  return { bbIntent: bbIntent, service: service };
	}]).factory(_libBbExtensionEventsNg.extensionEventsContextKey, [_libBbIntentNg.bbIntentKey, _libBbStateContainerNg.bbStateContainerKey, serviceKey, _libBbEventBusNg.eventBusKey, function (bbIntent, stateContainer, service, bus) {
	  return {
	    bbIntent: bbIntent,
	    stateContainer: stateContainer,
	    service: service,
	    bus: bus
	  };
	}]).factory(_libBbExtensionIntentsNg.extensionIntentsContextKey, [serviceKey, function (service) {
	  return { service: service };
	}]).controller('NotificationsListController', [serviceKey,
	/* into */
	_list2.default]).controller('NotificationsDetailsController', [
	
	/* into */
	_details2.default]).run([viewModelKey, _libBbIntentNg.bbIntentKey, _libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, function (viewModel, bbIntents, eventBus, widget) {
	  viewModel.init();
	
	  bbIntents.init().then(function () {
	    /**
	     * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
	     * and will be removed with the update to widget collection 3 (WC3)
	     */
	    eventBus.publish(_constants.Event.CXP_ITEM_LOADED, {
	      id: widget.getId()
	    });
	
	    eventBus.publish(_constants.Event.BB_ITEM_LOADED, {
	      id: widget.getId()
	    });
	  });
	}]).name;

/***/ }),
/* 71 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_71__;

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_72__;

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_73__;

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_74__;

/***/ }),
/* 75 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_75__;

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = NotificationsListController;
	/**
	 * @name NotificationsListController
	 * @ngkey NotificationsListController
	 * @type {object}
	 * @description
	 * Notifications widget list controller
	 */
	function NotificationsListController(service) {
	  /**
	   * @description
	   * Widget initialization logic - called automatically during the angular cycle.
	   *
	   * @name NotificationsListController#$onInit
	   * @type {function}
	   */
	  var $onInit = function $onInit() {
	    return service.setNotifications();
	  };
	
	  return {
	    /* Lifecycle hooks */
	    $onInit: $onInit
	  };
	}

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = NotificationsDetailsController;
	/**
	 * @name NotificationsDetailsController
	 * @ngkey NotificationsDetailsController
	 * @type {object}
	 * @description
	 * Notifications widget details controller
	 */
	function NotificationsDetailsController() {}

/***/ }),
/* 78 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.processRequestParams = processRequestParams;
	exports.processReloadRequestParams = processReloadRequestParams;
	/* eslint-disable import/prefer-default-export */
	
	/**
	 * @description
	 * Hooks for widget-bbm-notification-center-ng.
	 *
	 * @name defaultHooks
	 * @type {Object}
	 */
	
	/**
	 * @name defaultHooks#processRequestParams
	 * @type {function}
	 *
	 * @description
	 * Default hook for notifications query params processing/extending
	 *
	 * @param {object} params to process
	 * @param {?number} params.from The page to list from
	 * @param {?number} params.size The number of results per page
	 * @returns {Object} Processed params
	 */
	function processRequestParams(params) {
	  return params;
	}
	
	/**
	 * @name defaultHooks#processReloadRequestParams
	 * @type {function}
	 *
	 * @description
	 * Default hook for notifications reloading query params processing/extending
	 *
	 * @param {object} params to process
	 * @param {?number} params.from The page to list from
	 * @param {?number} params.size The number of results per page
	 * @returns {Object} Processed params
	 */
	function processReloadRequestParams(params) {
	  return params;
	}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _initialState = __webpack_require__(80);
	
	var _initialState2 = _interopRequireDefault(_initialState);
	
	var _list = __webpack_require__(81);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _notification = __webpack_require__(83);
	
	var _notification2 = _interopRequireDefault(_notification);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Defines the default page size for the notifications page
	 * @type {number}
	 * @inner
	 */
	var DEFAULT_PAGE_SIZE = 10; // Combine state reducers
	
	exports.default = function (stateContainer, widget) {
	  var stateParams = {
	    pageSize: widget.getLongPreference('bb.notification.pageSize') || DEFAULT_PAGE_SIZE
	  };
	
	  var initialState = (0, _initialState2.default)(stateParams);
	
	  /**
	   * @name ViewModel
	   * @type {object}
	   * @ngKey widget-bb-notifications-ng:viewModel
	   * @inner
	   */
	  return {
	    /**
	     * @name ViewModel#init
	     * @description Initialises view model with initial state
	     * @type {function}
	     * @inner
	     * @return {ViewState}
	     */
	    init: stateContainer.createAction(function () {
	      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	      return state;
	    }),
	
	    /**
	     * @name ViewModel#getState
	     * @description Returns view state
	     * @type {function}
	     * @inner
	     * @return {ViewState}
	     */
	    getState: stateContainer.getState,
	
	    /**
	     * @name ViewModel#list
	     * @description
	     * Actions for updating the parts of the `ViewState` related to notifications list
	     * @type {ViewModelListActions}
	     * @inner
	     */
	    list: (0, _list2.default)(stateContainer),
	
	    /**
	     * @name ViewModel#notification
	     * @description
	     * Actions for updating the parts of the `ViewState` related to notification state
	     * @type {ViewModelNotificationActions}
	     * @inner
	     */
	    notification: (0, _notification2.default)(stateContainer)
	  };
	};

/***/ }),
/* 80 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (params) {
	  return {
	    notification: {
	      data: null,
	      error: null,
	      loading: false
	    },
	    notifications: {
	      data: null,
	      error: null,
	      loading: false,
	      requestParams: {
	        from: null,
	        size: params.pageSize
	      },
	      totalCount: 0
	    }
	  };
	};
	
	/**
	 * @typedef {Object} ViewState
	 * @description
	 * The current state of the [ViewModel]{@link module:lib-bb-view-model-ng}.
	 *
	 * @property {Object} notification
	 * @property {Object} notification.data Current notification object
	 * @property {Object} notification.error The last encountered error
	 * @property {String} notification.error.message Error message
	 * @property {boolean} notification.loading Indicates if the notification is being loaded
	 *
	 * @property {Object} notifications
	 * @property {Object[]} notifications.data Collection of notifications
	 * @property {Object} notifications.error The last encountered error
	 * @property {string} notifications.error.message Error message
	 * @property {boolean} notifications.loading Indicates if notifications are loading at the moment
	 * @property {RequestParams}
	 * notifications.requestParams A set of request params for loading notifications
	 * @property {number} notifications.totalCount Total number of notifications
	 */
	
	/**
	 * @typedef {Object} RequestParams
	 * @description
	 * A set of request params that defines how to load the requested data.
	 *
	 * @property {number} from The current page (0 indexed), null from the start
	 * @property {number} pageSize The number of notifications in the page
	 */

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(82);
	
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelListActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelListActions#beforeLoad
	     * @description Update the `ViewState` before loading notifications
	     * @type {function}
	     * @inner
	     * @return {void}
	     */
	    init: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        notifications: Object.assign({}, state.notifications, {
	          data: null,
	          error: null,
	          loading: false,
	          requestParams: Object.assign({}, state.notifications.requestParams, {
	            from: null
	          }),
	          totalCount: 0
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#beforeLoad
	     * @description Update the `ViewState` before loading notifications
	     * @type {function}
	     * @inner
	     * @return {void}
	     */
	    beforeLoad: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        notifications: Object.assign({}, state.notifications, {
	          error: null,
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterLoadSuccess
	     * @description Update the `ViewState` after successfully loading notifications
	     * @type {function}
	     * @inner
	     * @param {NotificationsResponse} response Notifications load response
	     * @return {void}
	     */
	    afterLoadSuccess: stateContainer.createAction(function (state, response) {
	      return Object.assign({}, state, {
	        notifications: Object.assign({}, state.notifications, {
	          data: response.data,
	          error: null,
	          loading: false,
	          requestParams: Object.assign({}, state.notifications.requestParams, {
	            from: response.requestParams.from
	          }),
	          totalCount: response.totalCount
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterLoadError
	     * @description Update the `ViewState` after unsuccessful notifications load
	     * @type {function}
	     * @inner
	     * @param {module:lib-bb-model-errors.ModelError} error Response error
	     * @return {void}
	     */
	    afterLoadError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        notifications: Object.assign({}, state.notifications, {
	          error: (0, _helpers.uiError)(error),
	          loading: false
	        })
	      });
	    })
	  };
	};
	
	/**
	 * @typedef {object} NotificationsResponse
	 * @property {object[]} data Loaded notifications array
	 * @property {number} totalCount Total number of notifications
	 * @property {LoadRequestParams} requestParams Request parameters object
	 */
	
	/**
	 * @typedef {object} LoadRequestParams
	 * @property {number} from Page number to load
	 * @property {number} size Page size to load
	 * @property {string} productId Product ID of notifications to load
	 */

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.uiError = undefined;
	
	var _errorMessages;
	
	var _libBbModelErrors = __webpack_require__(47);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* eslint-disable import/prefer-default-export */
	
	
	var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'model.error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'model.error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'model.error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'model.error.unexpected'), _errorMessages);
	
	var uiError = exports.uiError = function uiError(error) {
	  return {
	    message: errorMessages[error.code]
	  };
	};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(82);
	
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelNotificationActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelNotificationActions#setNotification
	     * @description Update the `ViewState` with the selected notification
	     * @type {function}
	     * @inner
	     * @param {object} data Notification object
	     * @return {void}
	     */
	    setNotification: stateContainer.createAction(function (state, data) {
	      return Object.assign({}, state, {
	        notification: Object.assign({}, state.notification, {
	          data: data
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelNotificationActions#afterNotificationReadStatusChangeSuccess
	     * @description Update the `ViewState` with the read status
	     * @type {function}
	     * @inner
	     * @param {object} readStatus The read status of the notification
	     * @return {void}
	     */
	    afterNotificationReadStatusChangeSuccess: stateContainer.createAction(function (state, readStatus) {
	      return Object.assign({}, state, {
	        notification: Object.assign({}, state.notification, {
	          data: Object.assign({}, state.notification.data, {
	            read: readStatus
	          })
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelNotificationActions#afterNotificationReadStatusChangeError
	     * @description Update the `ViewState` after an unsuccessful read status change
	     * @type {function}
	     * @inner
	     * @param {module:model-bb-notification-ng.ModelError} error Response error
	     * @return {void}
	     */
	    afterNotificationReadStatusChangeError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        notification: Object.assign({}, state.notification, {
	          loading: false,
	          error: (0, _helpers.uiError)(error)
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelNotificationActions#beforeNotificationDelete
	     * @description Update the `ViewState` before a notification is submitted to delete.
	     * @type {function}
	     *
	     * @return {void}
	     * @inner
	     */
	    beforeNotificationDelete: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        notification: Object.assign({}, state.notification, {
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelNotificationActions#afterNotificationDeleteSuccess
	     * @description Update the `ViewState` after a successful notification delete.
	     * @type {function}
	     *
	     * @param {module:model-bb-notifications-ng.Notification} notification
	     * @return {void}
	     * @inner
	     */
	    afterNotificationDeleteSuccess: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        notification: {
	          data: null,
	          loading: false,
	          error: null
	        }
	      });
	    }),
	
	    /**
	     * @name ViewModelNotificationActions#afterNotificationDeleteError
	     * @description Update the `ViewState` after an unsuccessful notification delete.
	     * @type {function}
	     *
	     * @param {module:model-bb-notifications-ng.ModelError} error Response error
	     * @return {void}
	     * @inner
	     */
	    afterNotificationDeleteError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        notification: Object.assign({}, state.notification, {
	          loading: false,
	          error: (0, _helpers.uiError)(error)
	        })
	      });
	    })
	  };
	};

/***/ }),
/* 84 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/* global window */
	/**
	 * @name NotificationService
	 * @type {Object}
	 * @ngkey widget-bbm-notifications-ng:service
	 * @description
	 * The service encapsulates the core functionality of the Notifications
	 * Widget. It co-ordinates the communication of data from the `Model`
	 * with the communication with the user by updating the {@link ViewState}.
	 *
	 * Asynchronous methods update the {@link ViewState} in 3 potential
	 * stages; "before", "success", and "error", to allow the view to
	 * provide feedback to the user.
	 */
	
	/**
	 * @name createNotificationService
	 * @inner
	 * @type {function}
	 * @param {module:model-bb-notifications-ng.notificationsModel} model Notifications model
	 * @param {ViewModel} viewModel
	 * @param {defaultHooks} hooks
	 * @param {module:lib-bb-state-container-ng.StateContainer} stateContainer
	 * @param {widgetEvents} events
	 * @return {NotificationService}
	 */
	exports.default = function (model, viewModel, hooks, stateContainer, events) {
	  /**
	   * @name getRequestParams
	   * @type {function}
	   * @description
	   * returns the request params from the state
	   * @returns {Object} requestParams Request params from the state
	   * @inner
	   */
	  var getRequestParams = stateContainer.createSelector(function (state) {
	    return state.notifications.requestParams;
	  });
	
	  /**
	   * @name getNotifications
	   * @type {function}
	   * @description
	   * returns the current list of `notifications`
	   * @returns {Array} notifications List of notifications from the state
	   * @inner
	   */
	  var getNotifications = stateContainer.createSelector(function (state) {
	    return state.notifications.data;
	  });
	
	  /**
	   * @name getSelectedNotification
	   * @type {function}
	   * @description
	   * returns the current selected `notification`
	   * @returns {Object} notification Notification from the state
	   * @inner
	   */
	  var getSelectedNotification = stateContainer.createSelector(function (state) {
	    return state.notification.data;
	  });
	
	  /**
	   * @name isAllNotificationsLoaded
	   * @type {function}
	   * @description
	   * Calculates if all the notifications have been loaded
	   * @returns {boolean}
	   * @inner
	   */
	  var isAllNotificationsLoaded = stateContainer.createSelector(function (state) {
	    return Boolean(state.notifications.data && state.notifications.data.length >= state.notifications.totalCount);
	  });
	
	  /**
	   * @name getNextRequestParams
	   * @type {function}
	   * @description
	   * Calculates the request params to load the data for the next request.
	   * Note: It also calculates the data for the first request. Therefore the
	   *       Initial from params need to be null and not 0.
	   * @returns {Object} params Processed request params
	   * @inner
	   */
	  var getNextRequestParams = function getNextRequestParams() {
	    var requestParams = getRequestParams();
	
	    var from = requestParams.from === null ? 0 : requestParams.from + 1;
	    var size = requestParams.size;
	
	    return hooks.processRequestParams({
	      from: from,
	      size: size
	    });
	  };
	
	  /**
	   * @name getReloadRequestParams
	   * @type {function}
	   * @description
	   * Calculates the request params to load the data for the next request.
	   * Note: It also calculates the data for the first request. Therefore the
	   *       Initial from params need to be null and not 0.
	   * @returns {Object} params Processed request params
	   * @inner
	   */
	  var getReloadRequestParams = function getReloadRequestParams() {
	    var requestParams = getRequestParams();
	
	    var from = 0;
	    var size = requestParams.from === null ? requestParams.size : requestParams.size * (requestParams.from + 1);
	
	    return hooks.processReloadRequestParams({
	      from: from,
	      size: size
	    });
	  };
	
	  /**
	   * @name recalculateRequestParams
	   * @type {function}
	   * @description
	   * Recalculates the request params to load the data for the next request.
	   * @returns {Object} data Data used to calculate the request params
	   * @inner
	   */
	  var recalculateRequestParams = function recalculateRequestParams(data) {
	    var requestParams = getRequestParams();
	
	    var from = Math.floor(data.length / requestParams.size);
	    var size = requestParams.size;
	
	    return hooks.processRequestParams({
	      from: from,
	      size: size
	    });
	  };
	
	  /**
	   * @name appendNotifications
	   * @type {function}
	   * @description
	   * Creates a duplicate-free version of an array
	   * @param {Array} array Array of items
	   * @inner
	   */
	  var uniqueArray = function uniqueArray(array) {
	    return array.filter(function (itemOuter, index) {
	      return array.findIndex(function (itemInner) {
	        return itemOuter.id === itemInner.id;
	      }) === index;
	    });
	  };
	
	  /**
	   * @name appendNotifications
	   * @type {function}
	   * @description
	   * Appends the given list of `notifications` to the current list of `notifications`
	   * if this function is used as a merge strategy function
	   * @param {Array} notifications List of `notifications`
	   * @returns {Array} notifications Merged list of `notifications`
	   * @inner
	   */
	  var appendNotifications = function appendNotifications(notifications) {
	    return uniqueArray([].concat(_toConsumableArray(getNotifications() || []), _toConsumableArray(notifications)));
	  };
	
	  /**
	   * @name replaceNotifications
	   * @type {function}
	   * @description
	   * Returns the given list of `notifications` immediately and therefore replaces
	   * the list of `notifications` if this function is used as a merge strategy function
	   * @param {Array} notifications List of `notifications`
	   * @returns {Array} notifications List of `notifications`
	   * @inner
	   */
	  var replaceNotifications = function replaceNotifications(notifications) {
	    return notifications;
	  };
	
	  /**
	   * @name loadNotifications
	   * @type {function}
	   * @description
	   * Fetch a `page` of `notifications` from the model and
	   * update the {@link ViewState} to display them.
	   * @param {function} mergeFn function defining the merge strategy
	   * @returns {Promise}
	   * @inner
	   */
	  var loadNotifications = function loadNotifications(mergeFn) {
	    var requestParams = getNextRequestParams();
	
	    viewModel.list.beforeLoad();
	
	    return model.load(requestParams).then(function (_ref) {
	      var data = _ref.data,
	          totalCount = _ref.totalCount;
	
	      viewModel.list.afterLoadSuccess({
	        data: mergeFn(data),
	        requestParams: requestParams,
	        totalCount: totalCount
	      });
	    }).catch(function (error) {
	      viewModel.list.afterLoadError(error);
	      throw error;
	    });
	  };
	
	  /**
	   * @name NotificationService#loadMoreNotifications
	   * @type {function}
	   * @description
	   * Loads more `notifications` for the currently selected product.
	   */
	  var loadMoreNotifications = function () {
	    var loadMoreNotificationsPromise = void 0;
	
	    return function () {
	      if (loadMoreNotificationsPromise || isAllNotificationsLoaded()) {
	        return loadMoreNotificationsPromise;
	      }
	
	      loadMoreNotificationsPromise = loadNotifications(appendNotifications).then(function () {
	        loadMoreNotificationsPromise = null;
	      }).catch(function (error) {
	        loadMoreNotificationsPromise = null;
	        throw error;
	      });
	
	      return loadMoreNotificationsPromise;
	    };
	  }();
	
	  /**
	   * @name reloadNotifications
	   * @type {function}
	   * @description
	   * Fetch a `page` of `notifications` from the model and
	   * update the {@link ViewState} to display them.
	   * @returns {Promise}
	   * @inner
	   */
	  var reloadNotifications = function reloadNotifications() {
	    var reloadRequestParams = getReloadRequestParams();
	
	    viewModel.list.beforeLoad();
	
	    return model.load(reloadRequestParams).then(function (_ref2) {
	      var data = _ref2.data,
	          totalCount = _ref2.totalCount;
	
	      viewModel.list.afterLoadSuccess({
	        data: replaceNotifications(data),
	        requestParams: recalculateRequestParams(data),
	        totalCount: totalCount
	      });
	    }).catch(function (error) {
	      viewModel.list.afterLoadError(error);
	      throw error;
	    });
	  };
	
	  /**
	   * @name NotificationService#setSelectedNotification
	   * @type {function}
	   * @description
	   * Sets the selected notification and updates the {@link ViewState} to display it.
	   * @param {Object} notification Notification to select
	   */
	  var setSelectedNotification = function setSelectedNotification(notification) {
	    viewModel.notification.setNotification(notification);
	  };
	
	  /**
	   * @name NotificationService#setNotifictations
	   * @type {function}
	   * @description
	   * Sets the notifications and updates the {@link ViewState} to display them.
	   */
	  var setNotifications = function setNotifications() {
	    viewModel.list.init();
	
	    return loadNotifications(replaceNotifications);
	  };
	
	  /**
	   * @name NotificationService#deleteNotification
	   * @type {function}
	   * @description
	   * Deletes the notification
	   * @param {Object} notificationId Id of the notification to delete
	   */
	  var deleteNotification = function deleteNotification(notificationId) {
	    viewModel.notification.beforeNotificationDelete();
	    events.beforeNotificationDelete();
	
	    return model.deleteRecord(notificationId).then(function () {
	      viewModel.notification.afterNotificationDeleteSuccess(notificationId);
	      events.afterNotificationDeleteSuccess(notificationId);
	    }).catch(function (error) {
	      viewModel.notification.afterNotificationDeleteError(error);
	      events.afterNotificationDeleteError(error);
	      throw error;
	    });
	  };
	
	  /**
	   * @name NotificationService#setNotificationReadStatus
	   * @type {function}
	   * @description
	   * Updates the read status of a notification
	   * @param {Object} notificationId Id of the notification to update
	   * @param {boolean} readStatus new read status for the notification
	   */
	  var setNotificationReadStatus = function setNotificationReadStatus(notificationId, readStatus) {
	    var id = String(notificationId);
	    var read = Boolean(readStatus);
	
	    return model.putReadRecord(id, { read: read }).then(function () {
	      viewModel.notification.afterNotificationReadStatusChangeSuccess(read);
	      events.afterNotificationReadStatusChangeSuccess(id, read);
	    }).catch(function (error) {
	      viewModel.notification.afterNotificationReadStatusChangeError(error);
	      throw error;
	    });
	  };
	
	  /**
	   * @name NotificationService#toggleNotificationReadStatus
	   * @type {function}
	   * @description
	   * Toggles the read status of a notification
	   * @param {Object} notification Notification to toggle the read status for
	   */
	  var toggleNotificationReadStatus = function toggleNotificationReadStatus(notification) {
	    if (notification) {
	      var currentRead = notification.read;
	      return setNotificationReadStatus(notification.id, !currentRead);
	    }
	
	    return Promise.resolve();
	  };
	
	  return {
	    deleteNotification: deleteNotification,
	    getSelectedNotification: getSelectedNotification,
	    loadMoreNotifications: loadMoreNotifications,
	    reloadNotifications: reloadNotifications,
	    setNotifications: setNotifications,
	    setNotificationReadStatus: setNotificationReadStatus,
	    setSelectedNotification: setSelectedNotification,
	    toggleNotificationReadStatus: toggleNotificationReadStatus
	  };
	};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(86);
	
	/**
	 * @description
	 * Events for widget-bbm-notification-center-ng.
	 *
	 * @name Events
	 * @type {function}
	 */
	exports.default = function (bus) {
	  return {
	    afterNotificationReadStatusChangeSuccess: function afterNotificationReadStatusChangeSuccess(id, read) {
	      bus.publish(_constants.Event.AFTER_NOTIFICATION_CHANGE_READ_SUCCESS, { id: id, read: read });
	    },
	    beforeNotificationDelete: function beforeNotificationDelete() {
	      bus.publish(_constants.Event.BEFORE_NOTIFICATION_DELETE);
	    },
	    afterNotificationDeleteSuccess: function afterNotificationDeleteSuccess(notification) {
	      bus.publish(_constants.Event.AFTER_NOTIFICATION_DELETE_SUCCESS, { notification: notification });
	    },
	    afterNotificationDeleteError: function afterNotificationDeleteError(error) {
	      bus.publish(_constants.Event.AFTER_NOTIFICATION_DELETE_ERROR, { error: error });
	    }
	  };
	};

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable import/prefer-default-export */
	var Event = exports.Event = {
	  /**
	   * The widget is bootstrapped (data may not be loaded).
	   * @event cxp.item.loaded
	   * @type {string}
	   * @property {string} id The widget ID
	   */
	  CXP_ITEM_LOADED: 'cxp.item.loaded',
	
	  /**
	   * The widget is bootstrapped (data may not be loaded).
	   * @event bb.item.loaded
	   * @type {string}
	   * @property {string} id The widget ID
	   */
	  BB_ITEM_LOADED: 'bb.item.loaded',
	
	  /**
	   * The read status of a notification has been changed
	   * @event bb.event.notification.read.change
	   * @type {string}
	   * @property {boolean} read The read status of the notification
	   */
	  AFTER_NOTIFICATION_CHANGE_READ_SUCCESS: 'bb.event.notification.read.change',
	
	  /**
	   * A notification is submitted for deletion from the server
	   * @event bb.event.notification.delete.start
	   * @type {string}
	   */
	  BEFORE_NOTIFICATION_DELETE: 'bb.event.notification.delete.start',
	
	  /**
	   * A notification is deleted on the server
	   * @event bb.event.notification.delete.done
	   * @property {module:model-bb-notifications-ng.Contact} notification
	   * @type {string}
	   */
	  AFTER_NOTIFICATION_DELETE_SUCCESS: 'bb.event.notification.delete.done',
	
	  /**
	   * A notification fails to be deleted on the server
	   * @event bb.event.notification.delete.failed
	   * @type {string}
	   * @property {module:lib-bb-model-ng.ModelError} error
	   */
	  AFTER_NOTIFICATION_DELETE_ERROR: 'bb.event.notification.delete.failed'
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=widget-bbm-notification-center-ng.js.map