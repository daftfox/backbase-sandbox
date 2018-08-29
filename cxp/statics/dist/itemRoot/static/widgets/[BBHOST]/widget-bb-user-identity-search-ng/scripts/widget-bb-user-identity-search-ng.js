(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-intent-ng"), require("model-bb-user-ng"), require("lib-bb-state-container-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-user-identity-search-ng", ["vendor-bb-angular", "lib-bb-widget-extension-ng", "lib-bb-widget-ng", "lib-bb-event-bus-ng", "lib-bb-intent-ng", "model-bb-user-ng", "lib-bb-state-container-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-user-identity-search-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-intent-ng"), require("model-bb-user-ng"), require("lib-bb-state-container-ng"));
	else
		root["widget-bb-user-identity-search-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-extension-ng"], root["lib-bb-widget-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-intent-ng"], root["model-bb-user-ng"], root["lib-bb-state-container-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_44__, __WEBPACK_EXTERNAL_MODULE_46__, __WEBPACK_EXTERNAL_MODULE_47__, __WEBPACK_EXTERNAL_MODULE_48__, __WEBPACK_EXTERNAL_MODULE_52__, __WEBPACK_EXTERNAL_MODULE_53__) {
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

	module.exports = __webpack_require__(74);

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_35__;

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_44__;

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_46__;

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_47__;

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_48__;

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_52__;

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(35);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(46);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(47);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbWidgetExtensionNg = __webpack_require__(44);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbStateContainerNg = __webpack_require__(53);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _libBbIntentNg = __webpack_require__(48);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _modelBbUserNg = __webpack_require__(52);
	
	var _modelBbUserNg2 = _interopRequireDefault(_modelBbUserNg);
	
	var _router = __webpack_require__(75);
	
	var _router2 = _interopRequireDefault(_router);
	
	var _service = __webpack_require__(76);
	
	var _service2 = _interopRequireDefault(_service);
	
	var _viewModel = __webpack_require__(77);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	var _controller = __webpack_require__(80);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(82);
	
	var _defaultHooks2 = _interopRequireDefault(_defaultHooks);
	
	var _events = __webpack_require__(83);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'widget-bb-user-identity-search-ng'; /**
	                                                      * @module widget-bb-user-identity-search-ng
	                                                      *
	                                                      * @description
	                                                      * Search for a user identity
	                                                      */
	
	var hooksKey = moduleKey + ':hooks';
	var serviceKey = moduleKey + ':service';
	var viewModelKey = moduleKey + ':view-model';
	var routerKey = moduleKey + ':router';
	var eventServiceKey = moduleKey + ':events';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbWidgetNg2.default, _libBbEventBusNg2.default, _libBbStateContainerNg2.default, _libBbIntentNg2.default, _modelBbUserNg2.default]).factory(eventServiceKey, [_libBbEventBusNg.eventBusKey,
	/* into */
	_events2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(_defaultHooks2.default)).factory(serviceKey, [viewModelKey, _modelBbUserNg.modelUserKey, eventServiceKey,
	/* into */
	_service2.default]).factory(routerKey, [_libBbStateContainerNg.bbStateContainerKey,
	/* into */
	_router2.default]).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey,
	/* into */
	_viewModel2.default]).controller('UserIdentitySearchController', [serviceKey, routerKey, _libBbWidgetNg.widgetKey, viewModelKey, _libBbIntentNg.bbIntentKey,
	/* into */
	_controller2.default])
	
	// Add `service` to the `context` object
	// provided to the extension `helpers`, `events`, and `intents`
	.factory(_libBbWidgetExtensionNg.extensionContextKey, [serviceKey, routerKey,
	/* into */
	function (service, router) {
	  return {
	    service: service,
	    router: router
	  };
	}]).run([_libBbIntentNg.bbIntentKey, _libBbStateContainerNg.bbStateContainerKey, _libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, viewModelKey, function (bbIntent, bbStateContainer, eventBus, widget, viewModel) {
	  // Initialize the viewModel with an initial state
	  viewModel.init();
	
	  // Persist the current state of the widget when navigating to fulfill an intent
	  bbIntent.persist(bbStateContainer.getState, bbStateContainer.setState);
	
	  // Handle any incoming intents
	  bbIntent.init().then(function () {
	    // Mobile SDK < 3.0
	    eventBus.publish('cxp.item.loaded', {
	      id: widget.getId()
	    });
	
	    // Mobile SDK >= 3.0
	    eventBus.publish('bb.item.loaded', {
	      id: widget.getId()
	    });
	  });
	}]).name;
	
	/**
	 * @typedef HelperContext
	 * @type {object}
	 * @extends module:lib-bb-extension-helpers-ng.HelperContext
	 * @property {UserIdentitiySearchService} service
	 */
	
	/**
	 * @typedef IntentContext
	 * @type {object}
	 * @extends module:lib-bb-extension-intents-ng.IntentContext
	 * @property {UserIdentitySearchService} service
	 */
	
	/**
	 * @typedef EventContext
	 * @type {object}
	 * @extends module:lib-bb-extension-events-ng.EventContext
	 * @property {UserIdentitySearchService} service
	 */

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * The router service of the UserIdentitySearch widget
	 *
	 * @constructor Router
	 * @param {StateContainer} stateContainer
	 */
	exports.default = function (stateContainer) {
	  var subscribers = [];
	
	  /**
	   * @name setRoute
	   *
	   * @inner
	   * @description Inner method to update state with a new route
	   * @type {function}
	   * @param {{name: string, params: object}} route New route object
	   * @returns {ViewState}
	   */
	  var setRoute = stateContainer.createAction(function (state, _ref) {
	    var name = _ref.name,
	        params = _ref.params;
	    return Object.assign({}, state, {
	      route: {
	        name: name,
	        params: params
	      }
	    });
	  });
	
	  /**
	   * @name notifySubscribers
	   *
	   * @inner
	   * @description Inner method to notify subscribers
	   * @type {function}
	   * @param {string} name New route name
	   * @param {object} params New route parameters object
	   */
	  var notifySubscribers = function notifySubscribers(name, params) {
	    subscribers.forEach(function (subscriber) {
	      subscriber(name, params);
	    });
	  };
	
	  return {
	    /**
	     * @name Router#goto
	     *
	     * @description Method to navigate to a specific route
	     * @type {function}
	     * @param {string} name New route name
	     * @param {object} params New route parameters object
	     */
	    goto: function goto(name) {
	      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	      setRoute({ name: name, params: params });
	      notifySubscribers(name, params);
	    },
	
	    /**
	     * @name Router#getParams
	     *
	     * @description Method to get current route params from the {@link ViewState}
	     * @type {function}
	     * @returns {object} current parameters object
	     */
	    getParams: stateContainer.createSelector(function (state) {
	      return state.route.params;
	    }),
	
	    /**
	     * @name Router#getRoute
	     *
	     * @description Method to get current route name from the state
	     * @type {function}
	     */
	    getRoute: stateContainer.createSelector(function (state) {
	      return state.route.name;
	    }),
	
	    /**
	     * @name Router#subscribe
	     *
	     * @description Method to subscribe to a route change
	     * @type {function}
	     * @param {function} callback A callback to be subscribed
	     * @returns {function} The method to unsubscribe
	     */
	    subscribe: function subscribe(callback) {
	      subscribers = [].concat(_toConsumableArray(subscribers), [callback]);
	      return function () {
	        subscribers = subscribers.filter(function (sub) {
	          return sub !== callback;
	        });
	      };
	    }
	  };
	};

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name UserIdentitySearchService
	 * @type {object}
	 * @description
	 * The service encapsulates the core functionality of the UserIdentitySearch
	 * Widget. It co-ordinates the communication of data from the `Model`
	 * with the communication with the user by updating the {@link ViewState}.
	 *
	 * Asynchronous methods update the {@link ViewState} in 3 potential
	 * stages; "before", "success", and "error", to allow the view to
	 * provide feedback to the user.
	 */
	
	/**
	 * @name createUserIdentitySearchService
	 * @inner
	 * @type {object}
	
	 * @param {ViewModel} viewModel
	 * @param {module:model-bb-user-ng.UserModel} userModel
	 * @param {object} events
	 * @return {UserIdentitySearchService}
	 */
	exports.default = function (viewModel, userModel, events) {
	  return {
	    /**
	     * @name UserIdentitySearchService#getUsersIdentities
	     * @type {function}
	     * @description Update the view with an list of
	     * items
	     * @param {object} params A set of params for the request
	     * @return {Promise.<void>}
	     */
	    getUsersIdentities: function getUsersIdentities(params) {
	      viewModel.list.beforeGetUsersIdentities();
	      events.beforeGetUsersIdentities();
	      return userModel.getUsersIdentities(params).then(function (_ref) {
	        var data = _ref.data,
	            headers = _ref.headers;
	
	        var totalCountHeader = headers('x-total-count');
	        var totalCount = totalCountHeader ? parseInt(totalCountHeader, 10) : 0;
	        viewModel.list.afterGetUsersIdentitiesSuccess(Object.assign({
	          data: data,
	          totalCount: totalCount
	        }, params && { from: params.from }));
	        events.afterGetUsersIdentitiesSuccess(data, headers);
	      }).catch(function (error) {
	        viewModel.list.afterGetUsersIdentitiesError();
	        events.afterGetUsersIdentitiesError(error);
	      });
	    }
	  };
	};

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _list = __webpack_require__(78);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _initialState = __webpack_require__(79);
	
	var _initialState2 = _interopRequireDefault(_initialState);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModel#init
	     * @type {function}
	     * @description Initialize the container with the initial state if
	     * it isn't already initialized (i.e. the current state is `undefined`)
	     * @param {ViewState} current The current state of the widget
	     * @return {ViewState} The new state of the widget
	     */
	    init: stateContainer.createAction(function () {
	      var current = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _initialState2.default)();
	      return current;
	    }),
	    list: (0, _list2.default)(stateContainer)
	  };
	};

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModel#beforeGetUsersIdentities
	     * @type {function}
	     * @description Amend the view with a loading state
	     * @return {ViewState} The new state of the view model
	     */
	    beforeGetUsersIdentities: stateContainer.createAction(function (current) {
	      return Object.assign({}, current, {
	        loadingUserIdentities: true
	      });
	    }),
	
	    /**
	     * @name ViewModel#afterGetUsersIdentitiesSuccess
	     * @type {function}
	     * @description Amend the view with the list of users and loading false and currentPage
	     *   starting index from 1 to support bootstrap pager value
	     * @param {Object} response
	     * @param {Object} response.data response data
	     * @param {Array} response.data.identities list of user identities
	     * @param {number} [response.totalCount] defaults to 0 if none provided
	     * @param {number} [response.from] 0 indexed value of the fetched page
	     * @return {ViewState} The new state of the view model
	     */
	    afterGetUsersIdentitiesSuccess: stateContainer.createAction(function (current, _ref) {
	      var data = _ref.data,
	          _ref$totalCount = _ref.totalCount,
	          totalCount = _ref$totalCount === undefined ? 0 : _ref$totalCount,
	          _ref$from = _ref.from,
	          from = _ref$from === undefined ? 0 : _ref$from;
	      return Object.assign({}, current, {
	        items: data.identities || [],
	        totalCount: totalCount,
	        loadingUserIdentities: false,
	        currentPage: from + 1
	      });
	    }),
	
	    /**
	     * @name ViewModel#afterGetUsersIdentitiesError
	     * @type {function}
	     * @description Amend the view with the error
	     * @param {Object} error
	     * @return {ViewState} The new state of the view model
	     */
	    afterGetUsersIdentitiesError: stateContainer.createAction(function (current, error) {
	      return Object.assign({}, current, {
	        loadingUserIdentities: false,
	        error: error
	      });
	    }),
	
	    /**
	     * @name ViewModel#setWidgetPreferences
	     * @type {function}
	     * @description Amend the view with widget preferences
	     * @param {Object} preferences the widget preferences to be set
	     * @return {ViewState} The new state of the view model
	     */
	    setWidgetPreferences: stateContainer.createAction(function (current) {
	      var preferences = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      return Object.assign({}, current, preferences);
	    })
	  };
	};

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return {
	    items: [],
	    route: {
	      name: 'list',
	      params: {}
	    },
	    currentPage: 1
	  };
	};
	
	/**
	 * @typedef {object} ViewState
	 * @description
	 * The current state of the [ViewModel]{@link module:lib-bb-view-model-ng}.
	 * @property {Array.<any>} items
	 * @property {object} route Indicates current router state
	 */

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Controller;
	
	var _constants = __webpack_require__(81);
	
	/**
	 * @module widget-bb-user-identity-search-ng
	 * @name UserIdentitySearchController
	 *
	 * @description
	 * Search for a user identity
	 *
	 * @param {UserIdentitySearchService} service
	 * @param {Router} router
	 * @param {Widget} widget
	 * @param {module:lib-bb-state-container-ng.StateContainer} viewModel
	 * @param {module:lib-bb-intent-ng.BbIntentProvider} bbIntent Widget navigation
	 */
	function Controller(service, router, widget, viewModel, bbIntent) {
	  var $ctrl = this;
	  var unsubscribe = null;
	  var list = viewModel.list;
	
	  var viewDetailsIntent = bbIntent.create('intent.bus.user-identity-details.view');
	
	  /**
	   * @name getWidgetPreferences
	   * @type {function}
	   * @description Get the widget preferences or defaults if none present
	   * @inner
	   */
	  var getWidgetPreferences = function getWidgetPreferences() {
	    return {
	      resultsPerPage: widget.getLongPreference('resultsPerPage') || _constants.pagerDefaults.resultsPerPage,
	      maxNavPages: widget.getLongPreference('maxNavPages') || _constants.pagerDefaults.maxNavPages
	    };
	  };
	
	  /**
	   * @name transformSearchRequest
	   * @type {function}
	   * @description Transform the request data for the current selected page
	   *   or the first page as default
	   * @param state
	   * @param {Object} state The current view state
	   * @param {number} state.resultsPerPage Number of results per page
	   * @param {number} from The page to get
	   * @inner
	   */
	  var transformSearchRequest = function transformSearchRequest(_ref) {
	    var resultsPerPage = _ref.resultsPerPage;
	    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    return {
	      from: from,
	      size: resultsPerPage,
	      externalId: $ctrl.state && $ctrl.state.externalId || ''
	    };
	  };
	
	  /**
	   * @name Controller#searchForPage
	   * @type {function}
	   * @param state
	   * @param {Object} state The current view state
	   * @param {number} [page] The page to be fetched, defaulted to 0
	   *
	   * @description Transform the request data for a specified page
	   */
	  var searchForPage = function searchForPage(state) {
	    var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	    var requestParams = transformSearchRequest(state, page);
	    return service.getUsersIdentities(requestParams);
	  };
	
	  /**
	   * @name Controller#searchByPaginator
	   * @type {function}
	   * @param state
	   * @param {Object} state The current view state
	   * @param {number} state.resultsPerPage Number of results displayed per page
	   * @param {Object} [pagerParams] Bootstrap pager params
	   * @param {Number} [pagerParams.currentPage] Bootstrap current page
	   *
	   * @description Transform the request data for the current selected page
	   *   or the first page as default
	   */
	  var searchByPaginator = function searchByPaginator(state) {
	    var pagerParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var currentPage = pagerParams.currentPage;
	
	    return $ctrl.searchForPage(state, currentPage - 1 || 0);
	  };
	
	  /**
	   * @name Controller#goToUserIdentityDetails
	   * @type {function}
	   * @param {Object} userIdentity The selected user identity
	   * @param {string} userIdentity.id The internal Id of the user
	   * @param {Number} userIdentity.legalEntityName The friendly legal identity name
	   *
	   * @description Transform the request data for the current selected page
	   *   or the first page as default
	   */
	  var goToUserIdentityDetails = function goToUserIdentityDetails(_ref2) {
	    var id = _ref2.id,
	        legalEntityName = _ref2.legalEntityName;
	    return viewDetailsIntent({ internalId: id, legalEntityName: legalEntityName });
	  };
	
	  /**
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @name UserIdentitySearchController#$onInit
	   * @type {function}
	   * @returns {void}
	   */
	  var $onInit = function $onInit() {
	    // set the widget preferences on the state
	    var preferences = getWidgetPreferences();
	    list.setWidgetPreferences(preferences);
	
	    service.getUsersIdentities({
	      externalId: '',
	      from: 0,
	      size: preferences.resultsPerPage
	    });
	    unsubscribe = router.subscribe(function (route) {
	      if (route === 'list') {
	        $ctrl.searchForPage({ preferences: preferences }, 0);
	      }
	    });
	  };
	
	  /**
	   * AngularJS Lifecycle hook used to destroy the controller
	   *
	   * @name UserIdentitySearchController#$onDestroy
	   * @type {function}
	   * @returns {void}
	   */
	  var $onDestroy = function $onDestroy() {
	    if (unsubscribe) unsubscribe();
	  };
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	    $onDestroy: $onDestroy,
	    searchForPage: searchForPage,
	    searchByPaginator: searchByPaginator,
	    goToUserIdentityDetails: goToUserIdentityDetails
	  });
	}

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable import/prefer-default-export */
	
	/**
	 * @description
	 * Default values for the pager if not set on the widget
	 *
	 * @name pagerDefaults
	 * @type {object}
	 */
	var pagerDefaults = exports.pagerDefaults = {
	  resultsPerPage: 10,
	  maxNavPages: 3
	};

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description Events that the widget fires
	 * @type {object}
	 */
	var Events = {
	  BEFORE_GET_USERS_IDENTITIES: 'bb.event.getUsersIdentities.before',
	  AFTER_GET_USERS_IDENTITIES_SUCCESS: 'bb.event.getUsersIdentitiesSuccess.after',
	  AFTER_GET_USERS_IDENTITIES_ERROR: 'bb.event.getUsersIdentitiesError.after'
	};
	
	exports.default = function (bus) {
	  return {
	
	    /**
	     * @name beforeGetUsersIdentities
	     * @type {function}
	     * @description Before get users identities
	     */
	    beforeGetUsersIdentities: function beforeGetUsersIdentities() {
	      bus.publish(Events.BEFORE_GET_USERS_IDENTITIES);
	    },
	
	    /**
	     * @name afterGetUsersIdentitiesSuccess
	     * @type {function}
	     * @param {Array} data User Data
	     * @param {object} headers Request headers that contain information
	     *   such as total count
	     * @description After get users identities success
	     */
	    afterGetUsersIdentitiesSuccess: function afterGetUsersIdentitiesSuccess(data, headers) {
	      bus.publish(Events.AFTER_GET_USERS_IDENTITIES_SUCCESS, { data: data, headers: headers });
	    },
	
	    /**
	     * @name afterGetUsersIdentitiesError
	     * @type {function}
	     * @param {object} error Error while getting users identities
	     * @description After get users identities error
	     */
	    afterGetUsersIdentitiesError: function afterGetUsersIdentitiesError(error) {
	      bus.publish(Events.AFTER_GET_USERS_IDENTITIES_ERROR, { error: error });
	    }
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-user-identity-search-ng.js.map