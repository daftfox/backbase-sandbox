(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-intent-ng"), require("model-bus-contact-approvals-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bus-contact-approvals-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-model-errors", "lib-bb-widget-extension-ng", "lib-bb-event-bus-ng", "lib-bb-intent-ng", "model-bus-contact-approvals-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bus-contact-approvals-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-intent-ng"), require("model-bus-contact-approvals-ng"));
	else
		root["widget-bus-contact-approvals-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-model-errors"], root["lib-bb-widget-extension-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-intent-ng"], root["model-bus-contact-approvals-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_69__, __WEBPACK_EXTERNAL_MODULE_73__, __WEBPACK_EXTERNAL_MODULE_84__, __WEBPACK_EXTERNAL_MODULE_86__, __WEBPACK_EXTERNAL_MODULE_87__, __WEBPACK_EXTERNAL_MODULE_109__) {
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

	module.exports = __webpack_require__(108);

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_69__;

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_73__;

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_84__;

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_86__;

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_87__;

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(53);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(84);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _modelBusContactApprovalsNg = __webpack_require__(109);
	
	var _modelBusContactApprovalsNg2 = _interopRequireDefault(_modelBusContactApprovalsNg);
	
	var _libBbWidgetNg = __webpack_require__(69);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(86);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbIntentNg = __webpack_require__(87);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _controller = __webpack_require__(110);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(112);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* global window */
	/**
	 * @module widget-bus-contact-approvals-ng
	 *
	 * @description
	 * Contact Approvals widget
	 */
	var hooksKey = 'widget-bus-contact-approvals-ng:hooks';
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('widget-bus-contact-approvals-ng', [_modelBusContactApprovalsNg2.default, _libBbEventBusNg2.default, _libBbWidgetNg2.default, _libBbIntentNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).controller('ContactApprovalsController', [_modelBusContactApprovalsNg.modelContactApprovalsKey, hooksKey, _libBbEventBusNg.eventBusKey, '$q', _libBbWidgetNg.widgetKey,
	/* into */
	_controller2.default]).run([_libBbIntentNg.bbIntentKey, function (bbIntent) {
	  bbIntent.init();
	}]).name;

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_109__;

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _errorMessages;
	
	exports.default = ContactApprovalsController;
	
	var _vendorBbAngular = __webpack_require__(53);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbModelErrors = __webpack_require__(73);
	
	var _constants = __webpack_require__(111);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* global window */
	
	
	var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'approval.model.error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'approval.model.error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'approval.model.error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'approval.model.error.unexpected'), _errorMessages);
	
	/**
	 * Defines the default pageSize for the contact approvals page
	 * which is 50, as defined in the widget model.xml
	 * @inner
	 * @type {number}
	 */
	var DEFAULT_PAGE_SIZE = 50;
	
	/**
	 * Defines the default maxNavPages for the contact approvals page
	 * as defined in the widget model.xml
	 * @inner
	 * @type {number}
	 */
	var DEFAULT_MAX_NAV_PAGES = 3;
	
	/**
	 * Defines the default paginationType for the contact approvals page
	 * as defined in the widget model.xml
	 * @inner
	 * @type {string}
	 */
	var DEFAULT_PAGINATION_TYPE = 'load-more';
	
	/**
	 * @description
	 * Defines default time in seconds after which
	 * notification dismisses
	 * @inner
	 * @type {number}
	 */
	var DEFAULT_DISMISS_TIME = 3;
	
	/**
	 * Defines widget page enumeration
	 * @inner
	 * @enum {string}
	 * @type {object}
	 */
	var Page = {
	  DETAILS: 'details',
	  LIST: 'list'
	};
	
	/**
	 * @description
	 * Creates an error object for template
	 *
	 * @name uiError
	 *
	 * @inner
	 * @param {object} modelError Error object
	 * @type {function}
	 * @returns {{message: string}}
	 */
	var uiError = function uiError(modelError) {
	  var message = '';
	
	  if (modelError && modelError.code) {
	    message = errorMessages[modelError.code];
	  }
	
	  return { message: message };
	};
	
	/**
	 * @name ContactApprovalsController
	 *
	 * @description
	 * Contact Approvals widget controller
	 *
	 * @type {function}
	 */
	function ContactApprovalsController(model, hooks, bus, Promise, widget) {
	  var pageSize = widget.getLongPreference('bb.contact-approvals.pageSize') || DEFAULT_PAGE_SIZE;
	  var maxNavPages = widget.getLongPreference('bb.contact-approvals.maxNavPages') || DEFAULT_MAX_NAV_PAGES;
	  var paginationType = widget.getStringPreference('bb.contact-approvals.paginationType') || DEFAULT_PAGINATION_TYPE;
	  var dismissTime = widget.getLongPreference('bb.contact-approvals.notificationDismissTime') || DEFAULT_DISMISS_TIME;
	
	  var approvals = {
	    rawItems: [],
	    params: {
	      from: 0,
	      size: pageSize,
	      maxNavPages: maxNavPages,
	      paginationType: paginationType
	    }
	  };
	
	  /**
	   * @description
	   * Holds current controller state made by
	   * previous method executions
	   *
	   * @name state
	   *
	   * @type {object}
	   */
	  var state = {
	    approval: {
	      data: null,
	      updating: false
	    },
	    approvals: {
	      data: null,
	      loading: false,
	      hasMore: false
	    },
	    error: null,
	    initialLoading: true,
	    page: Page.LIST,
	    pageParams: approvals.params,
	    notifications: []
	  };
	
	  /**
	   * @name navigateTo
	   * @description Changes current page in widget
	   * @type {function}
	   * @inner
	   * @param {string} page Page to navigate to
	   */
	  function navigateTo(page) {
	    state.page = page;
	  }
	
	  /**
	   * @name closeContactApprovalDetails
	   *
	   * @description
	   * Handles click on Back button on Contact Approval details page.
	   * Navigates the user to the Contact Approvals list view.
	   *
	   * @type {function}
	   */
	  function closeContactApprovalDetails() {
	    navigateTo(Page.LIST);
	  }
	
	  /**
	   * Returns deep copy of currently selected approval
	   *
	   * @inner
	   * @param {object} defaultValue Default value to return
	   * @returns {object} Selected approval
	   */
	  function getSelectedApproval(defaultValue) {
	    return _vendorBbAngular2.default.copy(hooks.getSelectedApproval(state.approvals.data, defaultValue));
	  }
	
	  /**
	   * @name hasApprovals
	   * @description
	   * If contact approvals found returns true, else false
	   *
	   * @type {function}
	   * @returns {boolean}
	   */
	  function hasApprovals() {
	    return Boolean(state.approvals.data && state.approvals.data.length);
	  }
	
	  /**
	   * @name selectApproval
	   * @description
	   * Handles clicks on contact approval in the list.
	   * Navigates the user to the details view.
	   *
	   * @param {object} contact Contact approval object
	   * @type {function}
	   * @fires bb.event.contact.selected
	   */
	  function selectApproval(approval) {
	    state.approval.data = _vendorBbAngular2.default.copy(approval);
	
	    navigateTo(Page.DETAILS);
	  }
	
	  /**
	   * Merges new items with existing items
	   *
	   * @inner
	   * @name append
	   * @type {function}
	   * @returns {array} merged array of old and new items
	   */
	  function append(newItems, existingItems) {
	    return [].concat(_toConsumableArray(existingItems), _toConsumableArray(newItems));
	  }
	
	  /**
	   * Replaces existing items with new items
	   *
	   * @inner
	   * @name replace
	   * @type {function}
	   * @returns {array} new items
	   */
	  function replace(items) {
	    return items;
	  }
	
	  /**
	   * Returns Model method based on the provided type
	   *
	   * @name getLoadMethod
	   * @inner
	   * @type {function}
	   * @param {string} methodType Model method type
	   */
	  function getLoadMethod(methodType) {
	    switch (methodType) {
	      case _constants.LoadMethod.APPROVALS:
	        return model.getApprovals;
	      case _constants.LoadMethod.USER_APPROVALS:
	        return model.getUserApprovals;
	      default:
	        throw new Error('Model method of type ' + methodType + ' doesn\'t exist.');
	    }
	  }
	
	  /**
	   * @name load
	   *
	   * @description
	   * Loads contact approval data
	   *
	   * @inner
	   * @type {function}
	   * @param {{ size: {number} }} params Request params
	   * @param {function} merge Function to merge loaded contact approvals to the previous ones
	   * @returns {Promise} Promise which is resolved once contact approvals
	   * are loaded and processed, or rejected in case of errors.
	   */
	  function load(params) {
	    var merge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : replace;
	
	    var loadApprovals = getLoadMethod(hooks.getLoadMethodType(_constants.LoadMethod));
	    var requestParams = hooks.processRequestParams(approvals.params, params);
	
	    state.approvals.loading = true;
	
	    return loadApprovals(requestParams).then(function (raw) {
	      approvals.rawItems = merge(raw.data, approvals.rawItems);
	      state.approvals.hasMore = approvals.rawItems.length < raw.totalCount;
	      state.pageParams.totalItems = raw.totalCount || 0;
	      return approvals.rawItems;
	    }).then(hooks.processApprovals).then(function (processedApprovals) {
	      state.approvals.data = processedApprovals;
	      state.approval.data = getSelectedApproval(state.approval.data);
	      state.approvals.loading = false;
	    }).catch(function (error) {
	      state.error = uiError(error);
	      state.approvals.loading = false;
	      bus.publish(_constants.Event.CONTACT_SERVER_ERROR, error);
	    });
	  }
	
	  /**
	   * @description
	   * Get params for request.
	   *
	   * @name ContactApprovalsController#getRequestParams
	   *
	   * @inner
	   * @param {Object} params Custom params
	   * @type {function}
	   * @returns {Object} A request params
	   */
	  var getRequestParams = function getRequestParams(params) {
	    return Object.assign({}, approvals.params, {
	      // In BE services pagination starts from 0 page, but in bootstrap directive it's 1
	      from: params.currentPage - 1
	    }, params);
	  };
	
	  /**
	   * @description
	   * Change page of displayed contact approvals.
	   *
	   * @name ContactApprovalsController#changePage
	   * @type {function}
	   * @returns {Promise.<module:model-bus-contact-approvals-ng.ContactApprovals, ModelError>}
	   * A Promise with loaded contact approvals
	   */
	  var changePage = function changePage() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var currentParams = getRequestParams(params);
	
	    return load(currentParams);
	  };
	
	  /**
	   * @name reload
	   *
	   * @description
	   * Reloads the entire list of stored contact approvals
	   *
	   * @inner
	   * @type {function}
	   * @return {Promise}
	   */
	  function reload() {
	    var from = 0;
	
	    var pagesCount = approvals.params.from + 1;
	    var size = pagesCount * approvals.params.size;
	
	    return load({ from: from, size: size }, replace);
	  }
	
	  /**
	   * @name loadMore
	   *
	   * @description
	   * Loads more contact approvals if they are available.
	   *
	   * @type {function}
	   * @param {function} done Callback to be called when load action finishes
	   * @returns {Promise}
	   */
	  function loadMore(done) {
	    if (!state.approvals.hasMore || state.approvals.loading) {
	      return Promise.resolve();
	    }
	
	    approvals.params.from++;
	
	    return load({}, append).then(done).catch(function () {
	      approvals.params.from--;
	      done();
	    });
	  }
	
	  /**
	   * @name bindEvents
	   *
	   * @description
	   * Adds subscriptions to bus events
	   *
	   * @inner
	   * @type {function}
	   */
	  function bindEvents() {
	    bus.subscribe(_constants.Event.NOTIFICATION_EVENT, function (notification) {
	      state.notifications.push(notification);
	    });
	  }
	
	  /**
	   * @name notifyOnAuthSuccess
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on authorization request's success.
	   *
	   * @fires bb.event.contact.auth.success
	   *
	   * @returns {object}
	   */
	  var notifyOnAuthSuccess = function notifyOnAuthSuccess(res) {
	    bus.publish(_constants.Event.CONTACT_AUTH_SUCCESS, res);
	  };
	
	  /**
	   * @name notifyOnAuthFail
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on authorization request's failure.
	   *
	   * @fires bb.event.contact.auth.fail
	   *
	   * @returns {object}
	   */
	  var notifyOnAuthFail = function notifyOnAuthFail(err) {
	    bus.publish(_constants.Event.CONTACT_AUTH_FAIL, err);
	  };
	
	  /**
	   * @name authorize
	   * @type {function}
	   *
	   * @description
	   * Authorize contact approval request
	   *
	   * @param {string} requestId Id of the contact approval request
	   * @returns {Promise}
	   */
	  var authorize = function authorize(requestId) {
	    state.approval.updating = true;
	
	    return model.authorizeContact(requestId).then(function (res) {
	      state.approval.updating = false;
	
	      notifyOnAuthSuccess(res);
	      closeContactApprovalDetails();
	      reload();
	    }).catch(function (error) {
	      state.approval.updating = false;
	      notifyOnAuthFail(error);
	    });
	  };
	
	  /**
	   * @name notifyOnRejectSuccess
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on rejection request's success.
	   *
	   * @fires bb.event.contact.reject.success
	   *
	   * @returns {object}
	   */
	  var notifyOnRejectSuccess = function notifyOnRejectSuccess(res) {
	    bus.publish(_constants.Event.CONTACT_REJECT_SUCCESS, res);
	  };
	
	  /**
	   * @name notifyOnRejectFail
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Emit events based on rejection request's failure.
	   *
	   * @fires bb.event.contact.reject.fail
	   *
	   * @returns {object}
	   */
	  var notifyOnRejectFail = function notifyOnRejectFail(err) {
	    bus.publish(_constants.Event.CONTACT_REJECT_FAIL, err);
	  };
	
	  /**
	   * @name reject
	   * @type {function}
	   *
	   * @description
	   * Reject contact approval request
	   *
	   * @param {string} requestId Id of the contact approval request
	   * @returns {Promise}
	   */
	  var reject = function reject(requestId) {
	    state.approval.updating = true;
	
	    return model.rejectContact(requestId).then(function (res) {
	      state.approval.updating = false;
	
	      notifyOnRejectSuccess(res);
	      closeContactApprovalDetails();
	      reload();
	    }).catch(function (error) {
	      state.approval.updating = false;
	      notifyOnRejectFail(error);
	    });
	  };
	
	  /**
	   * @name ContactApprovalsController#$onInit
	   *
	   * @description
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @type {function}
	   * @returns {Promise} Promise which is resolved once contoller is initialized,
	   *   or rejected in case of errors
	   */
	  function $onInit() {
	    var loadPromise = load().then(function () {
	      state.initialLoading = false;
	    });
	
	    bindEvents();
	
	    bus.publish(_constants.Event.CXP_ITEM_LOADED, {
	      id: widget.getId()
	    });
	
	    bus.publish(_constants.Event.BB_ITEM_LOADED, {
	      id: widget.getId()
	    });
	
	    return loadPromise;
	  }
	
	  Object.assign(this, {
	    state: state,
	    dismissTime: dismissTime,
	    selectApproval: selectApproval,
	    hasApprovals: hasApprovals,
	    loadMore: loadMore,
	    closeContactApprovalDetails: closeContactApprovalDetails,
	    authorize: authorize,
	    reject: reject,
	    changePage: changePage,
	    /* Lifecycle hooks */
	    $onInit: $onInit
	  });
	}

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description
	 * Widget events enum (events generated by the widget)
	 *
	 * @name Event
	 * @type {object}
	 */
	var Event = exports.Event = {
	  CONTACT_AUTH_SUCCESS: 'bb.event.contact-approvals.auth.success',
	  CONTACT_AUTH_FAIL: 'bb.event.contact-approvals.auth.fail',
	  CONTACT_REJECT_SUCCESS: 'bb.event.contact-approvals.reject.success',
	  CONTACT_REJECT_FAIL: 'bb.event.contact-approvals.reject.fail',
	  CONTACT_SERVER_ERROR: 'bb.event.contact-approvals.server.error',
	  NOTIFICATION_EVENT: 'bb.event.notifications.notify',
	
	  CXP_ITEM_LOADED: 'cxp.item.loaded',
	  BB_ITEM_LOADED: 'bb.item.loaded'
	};
	
	/**
	 * @description
	 * Widget keys to define which model method
	 * to use to load list of contact approvals
	 * (depends on extension)
	 *
	 * @name LoadMethod
	 * @type {object}
	 */
	var LoadMethod = exports.LoadMethod = {
	  APPROVALS: 'APPROVALS',
	  USER_APPROVALS: 'USER_APPROVALS'
	};

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getSelectedApproval = getSelectedApproval;
	exports.processApprovals = processApprovals;
	exports.processRequestParams = processRequestParams;
	exports.getLoadMethodType = getLoadMethodType;
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-bus-contact-approvals-ng
	 */
	
	/**
	 * @name getSelectedApproval
	 *
	 * @description
	 * getSelectedApproval default hook
	 *
	 * @param {object} approvals Approvals list
	 * @param {object} selectedApproval Selected approval
	 * @type {function}
	 * @returns {object} selectedApproval
	 */
	function getSelectedApproval(approvals, selectedApproval) {
	  return selectedApproval;
	}
	
	/**
	 * @name processApprovals
	 *
	 * @description
	 * processApprovals default hook
	 *
	 * @param {array.<object>} approvals Raw approvals collection
	 * @type {function}
	 * @returns {array.<object>} Processed approvals
	 */
	function processApprovals(approvals) {
	  return approvals;
	}
	
	/**
	 * @name processRequestParams
	 *
	 * @description
	 * processRequestParams default hook
	 *
	 * @param {object} defaultParams
	 * @param {object} params
	 * @type {function}
	 * @returns {object} processed request parameters
	 */
	function processRequestParams(defaultParams, params) {
	  return Object.assign({}, defaultParams, params);
	}
	
	/**
	 * @name getLoadMethodType
	 *
	 * @description
	 * Returns load method type
	 *
	 * @type {function}
	 * @param {object} LoadMethod Predefined enumeration of available load methods
	 * @returns {string} Load method type
	 */
	function getLoadMethodType(LoadMethod) {
	  return LoadMethod.APPROVALS;
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bus-contact-approvals-ng.js.map