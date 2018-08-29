(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-intent-ng"), require("model-bb-user-ng"), require("lib-bb-state-container-ng"), require("lib-bb-storage-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-user-identity-details-ng", ["vendor-bb-angular", "lib-bb-widget-extension-ng", "lib-bb-widget-ng", "lib-bb-event-bus-ng", "lib-bb-intent-ng", "model-bb-user-ng", "lib-bb-state-container-ng", "lib-bb-storage-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-user-identity-details-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-intent-ng"), require("model-bb-user-ng"), require("lib-bb-state-container-ng"), require("lib-bb-storage-ng"));
	else
		root["widget-bb-user-identity-details-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-extension-ng"], root["lib-bb-widget-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-intent-ng"], root["model-bb-user-ng"], root["lib-bb-state-container-ng"], root["lib-bb-storage-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_44__, __WEBPACK_EXTERNAL_MODULE_46__, __WEBPACK_EXTERNAL_MODULE_47__, __WEBPACK_EXTERNAL_MODULE_48__, __WEBPACK_EXTERNAL_MODULE_52__, __WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_65__) {
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

	module.exports = __webpack_require__(64);

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

/***/ 64:
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
	
	var _libBbStorageNg = __webpack_require__(65);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _router = __webpack_require__(66);
	
	var _router2 = _interopRequireDefault(_router);
	
	var _service = __webpack_require__(67);
	
	var _service2 = _interopRequireDefault(_service);
	
	var _viewModel = __webpack_require__(68);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	var _controller = __webpack_require__(71);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(72);
	
	var _defaultHooks2 = _interopRequireDefault(_defaultHooks);
	
	var _events = __webpack_require__(73);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bb-user-identity-details-ng
	 *
	 * @description
	 * User identity details
	 */
	var moduleKey = 'widget-bb-user-identity-details-ng';
	var hooksKey = moduleKey + ':hooks';
	var serviceKey = moduleKey + ':service';
	var viewModelKey = moduleKey + ':view-model';
	var routerKey = moduleKey + ':router';
	var eventServiceKey = moduleKey + ':events';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbWidgetNg2.default, _libBbEventBusNg2.default, _libBbStateContainerNg2.default, _libBbIntentNg2.default, _modelBbUserNg2.default, _libBbIntentNg2.default, _libBbStorageNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(_defaultHooks2.default)).factory(eventServiceKey, [_libBbEventBusNg.eventBusKey,
	/* into */
	_events2.default]).factory(serviceKey, [_modelBbUserNg.modelUserKey, _modelBbUserNg.modelLegalEntitiesKey, viewModelKey, eventServiceKey,
	/* into */
	_service2.default]).factory(routerKey, [_libBbStateContainerNg.bbStateContainerKey,
	/* into */
	_router2.default]).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey,
	/* into */
	_viewModel2.default]).controller('UserIdentityDetailsController', [serviceKey, routerKey, _libBbIntentNg.bbIntentKey, _libBbStorageNg.bbStorageServiceKey, _libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, viewModelKey,
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
	}]).name;
	
	/**
	 * @typedef HelperContext
	 * @type {object}
	 * @extends module:lib-bb-extension-helpers-ng.HelperContext
	 * @property {UserIdentityDetailsService} service
	 */
	
	/**
	 * @typedef IntentContext
	 * @type {object}
	 * @extends module:lib-bb-extension-intents-ng.IntentContext
	 * @property {UserIdentityDetailsService} service
	 */
	
	/**
	 * @typedef EventContext
	 * @type {object}
	 * @extends module:lib-bb-extension-events-ng.EventContext
	 * @property {UserIdentityDetailsService} service
	 */

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_65__;

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * The router service of the UserIdentityDetails widget
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

/***/ 67:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name UserIdentityDetailsService
	 * @type {object}
	 * @description
	 * The service encapsulates the core functionality of the UserIdentityDetails
	 * Widget. It co-ordinates the communication of data from the `Model`
	 * with the communication with the user by updating the {@link ViewState}.
	 *
	 * Asynchronous methods update the {@link ViewState} in 3 potential
	 * stages; "before", "success", and "error", to allow the view to
	 * provide feedback to the user.
	 */
	
	/**
	 * @name createUserIdentityDetailsService
	 * @type {function}
	 * @param {module:model-bb-user-ng.UserModel} userModel
	 * @param {module:model-bb-legal-entities-ng.LegalEntities} legalEntitiesModel
	 * @param {ViewModel} viewModel
	 * @param {object} events
	 * @return {UserIdentityDetailsService}
	 *
	 * @inner
	 */
	exports.default = function (userModel, legalEntitiesModel, viewModel, events) {
	  var viewDetails = viewModel.viewDetails;
	  /**
	   * @name UserIdentityDetailsService#getUsersIdentitiesRecord
	   * @type {function}
	   * @description Update the view with a user identity
	   * @param {string} id User identity ID
	   * @param {object} params A set of params for the request
	   * @return {Promise.<void>}
	   */
	
	  var getUsersIdentitiesRecord = function getUsersIdentitiesRecord(id, params) {
	    viewDetails.beforeGetUserIdentityDetails();
	    events.beforeGetUsersIdentitiesRecord();
	    return userModel.getUsersIdentitiesRecord(id, params).then(function (response) {
	      viewDetails.afterGetUserIdentityDetailsSuccess(response.data);
	      events.afterGetUsersIdentitiesRecordSuccess(response.data);
	      return response.data;
	    }).catch(function (error) {
	      viewDetails.afterGetUserIdentityDetailsError(error);
	      events.afterGetUsersIdentitiesRecordError(error);
	    });
	  };
	
	  /**
	   * @name UserIdentityDetailsService#getLegalEntitiesRecord
	   * @type {function}
	   * @description Update the view with the user's legal entity
	   * @param {string} id Legal entity ID
	   * @param {object} params A set of params for the request
	   * @return {Promise.<void>}
	   */
	  var getLegalEntitiesRecord = function getLegalEntitiesRecord(id, params) {
	    viewDetails.beforeGetUserIdentityLegalEntity();
	    events.beforeGetUserIdentityLegalEntity();
	    return legalEntitiesModel.getLegalEntitiesRecord(id, params).then(function (response) {
	      viewDetails.afterGetUserIdentityLegalEntitySuccess(response.data);
	      events.afterGetUserIdentityLegalEntitySuccess(response.data);
	      return response.data;
	    }).catch(function (error) {
	      viewDetails.afterGetUserIdentityDetailsError(error);
	      events.afterGetUserIdentityLegalEntityError(error);
	    });
	  };
	
	  return {
	    getUsersIdentitiesRecord: getUsersIdentitiesRecord,
	    getLegalEntitiesRecord: getLegalEntitiesRecord
	  };
	};

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _viewDetails = __webpack_require__(69);
	
	var _viewDetails2 = _interopRequireDefault(_viewDetails);
	
	var _initialState = __webpack_require__(70);
	
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
	    viewDetails: (0, _viewDetails2.default)(stateContainer)
	  };
	};

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModel#beforeGetUserIdentityDetails
	     * @type {function}
	     * @description Amend the view with the user identity
	     * @param {Object} userIdentity
	     * @return {ViewState} The new state of the view model
	     */
	    beforeGetUserIdentityDetails: stateContainer.createAction(function (current) {
	      return Object.assign({}, current, {
	        loadingUserIdentity: true
	      });
	    }),
	
	    /**
	     * @name ViewModel#afterGetUserIdentityDetailsSuccess
	     * @type {function}
	     * @description Amend the view with the user identity
	     * @param {Object} userIdentity
	     * @return {ViewState} The new state of the view model
	     */
	    afterGetUserIdentityDetailsSuccess: stateContainer.createAction(function (current) {
	      var userIdentity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      return Object.assign({}, current, {
	        userIdentity: userIdentity,
	        loadingUserIdentity: false
	      });
	    }),
	
	    /**
	     * @name ViewModel#afterGetUserIdentityDetailsError
	     * @type {function}
	     * @description Amend the view with the error
	     * @param {Object} error
	     * @return {ViewState} The new state of the view model
	     */
	    afterGetUserIdentityDetailsError: stateContainer.createAction(function (current, error) {
	      return Object.assign({}, current, {
	        error: error,
	        loadingUserIdentity: false
	      });
	    }),
	
	    // Legal entity state actions ----------
	    /**
	     * @name ViewModel#beforeGetUserIdentityLegalEntity
	     * @type {function}
	     * @description Amend the view with a loading state for Legal entity
	     * @return {ViewState} The new state of the view model
	     */
	    beforeGetUserIdentityLegalEntity: stateContainer.createAction(function (current) {
	      return Object.assign({}, current, {
	        loadingLegalEntity: true
	      });
	    }),
	
	    /**
	     * @name ViewModel#afterGetUserIdentityLegalEntitySuccess
	     * @type {function}
	     * @description Amend the view with the user's legal entity details
	     * @param {Object} userIdentityLegalEntity
	     * @return {ViewState} The new state of the view model
	     */
	    afterGetUserIdentityLegalEntitySuccess: stateContainer.createAction(function (current, userIdentityLegalEntity) {
	      return Object.assign({}, current, {
	        userIdentityLegalEntity: userIdentityLegalEntity,
	        loadingLegalEntity: false
	      });
	    }),
	
	    /**
	     * @name ViewModel#afterGetUserIdentityLegalEntityError
	     * @type {function}
	     * @description Amend the view with the error
	     * @param {Object} error
	     * @return {ViewState} The new state of the view model
	     */
	    afterGetUserIdentityLegalEntityError: stateContainer.createAction(function (current, error) {
	      return Object.assign({}, current, {
	        error: error,
	        loadingLegalEntity: false
	      });
	    }),
	
	    /**
	     * @name ViewModel#afterGetUserIdentityLegalEntityName
	     * @type {function}
	     * @description Amend the view with the user's legal entity name
	     * @param {string} name The legal entity friendly display name
	     * @return {ViewState} The new state of the view model
	     */
	    afterGetUserIdentityLegalEntityName: stateContainer.createAction(function (current, name) {
	      return Object.assign({}, current, {
	        userIdentityLegalEntity: Object.assign({}, current.userIdentityLegalEntity, {
	          name: name
	        })
	      });
	    })
	
	  };
	};

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return {
	    items: [],
	    route: {
	      name: 'viewDetails',
	      params: {}
	    },
	    loadingUserIdentity: false,
	    loadingLegalEntity: false
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

/***/ 71:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @module widget-bb-user-identity-details-ng
	 * @name UserIdentityDetailsController
	 *
	 * @description
	 * User identity details
	 *
	 * @param {UserIdentityDetailsService} service
	 * @param {Router} router
	 * @param {module:lib-bb-intent-ng.BbIntentProvider} bbIntent Widget navigation
	 * @param {module:lib-bb-storage-ng.bbStorage} bbStorage
	 * @param {module:lib-bb-event-bus-ng.EventBus} eventBus
	 * @param {module:lib-bb-widget-ng.Widget} widget
	 * @param {ViewModel} viewModel
	 */
	
	exports.default = function (service, router, bbIntent, bbStorage, eventBus, widget, viewModel) {
	  var viewDetails = viewModel.viewDetails;
	
	  var STORAGE_USER_IDENTITY_VIEW_DETAILS_DATA = 'user.viewUserIdentityDetails.data';
	  var userIdentitySearchIntent = bbIntent.create('intent.bus.user-identity-search.list');
	  var auditLogIntent = bbIntent.create('intent.bus.audit.table.search');
	
	  /**
	   * @name updateViewDetailsStorageAndState
	   * @type {function}
	   * @description Updates the state and storage with values either from the intent
	   *   or the requests made for the data
	   * @param {object} storageData Object passed from the intent or storage
	   * @inner
	   */
	  var updateViewDetailsStorageAndState = function updateViewDetailsStorageAndState(storageData) {
	    if (storageData.legalEntityName) {
	      viewDetails.afterGetUserIdentityLegalEntityName(storageData.legalEntityName);
	    }
	    bbStorage.setItem(STORAGE_USER_IDENTITY_VIEW_DETAILS_DATA, JSON.stringify(storageData));
	  };
	
	  /**
	   * @name handleGettingUserAndLegalEntityData
	   * @type {function}
	   * @description Gets the user identity and legal entity data from an internalId
	   *   passed to the method, or navigates to the user list if the internalId is missing
	   * @param {object} [knownUserData] Object passed from the intent or storage
	   * @param {string} knownUserData.indernalId The username
	   * @param {string} knownUserData.legalEntityName The name of the user's legal entity
	   * @inner
	   */
	  var handleGettingUserAndLegalEntityData = function handleGettingUserAndLegalEntityData() {
	    var knownUserData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    if (knownUserData.internalId) {
	      var internalId = knownUserData.internalId,
	          legalEntityName = knownUserData.legalEntityName;
	
	      service.getUsersIdentitiesRecord(internalId).then(function (userIdentityData) {
	        var storageData = {
	          internalId: internalId,
	          legalEntityName: legalEntityName
	        };
	        updateViewDetailsStorageAndState(storageData);
	        if (legalEntityName === undefined) {
	          service.getLegalEntitiesRecord(userIdentityData.legalEntityInternalId).then(function (legalEntityData) {
	            storageData.legalEntityName = legalEntityData.name;
	            updateViewDetailsStorageAndState(storageData);
	          });
	        }
	      });
	    } else {
	      userIdentitySearchIntent();
	    }
	  };
	
	  return {
	    /**
	     * AngularJS Lifecycle hook used to initialize the controller
	     *
	     * @name UserIdentityDetailsController#$onInit
	     * @type {function}
	     */
	    $onInit: function $onInit() {
	      bbIntent.handle('intent.bus.user-identity-details.view', function (intentData) {
	        handleGettingUserAndLegalEntityData(intentData);
	      });
	
	      // default intent handling
	      bbIntent.initHandler(function () {
	        bbStorage.getItem(STORAGE_USER_IDENTITY_VIEW_DETAILS_DATA).then(function (storageData) {
	          handleGettingUserAndLegalEntityData(JSON.parse(storageData));
	        });
	      });
	
	      bbIntent.init();
	
	      // Mobile SDK < 3.0
	      eventBus.publish('cxp.item.loaded', {
	        id: widget.getId()
	      });
	
	      // Mobile SDK >= 3.0
	      eventBus.publish('bb.item.loaded', {
	        id: widget.getId()
	      });
	    },
	
	
	    /**
	     * @name UserIdentityDetailsController#goToUserIdentitySearch
	     * @type {function}
	     * @description Navigate to the user identity search widget
	     */
	    goToUserIdentitySearch: userIdentitySearchIntent,
	
	    /**
	     * @name UserIdentityDetailsController#goToAuditLog
	     * @type {function}
	     * @description Navigate to the audit log widget with intent params passed
	     * @param {object} intentData The data to send with the intent
	     */
	    goToAuditLog: auditLogIntent
	  };
	};

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),

/***/ 73:
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
	  BEFORE_GET_USERS_IDENTITIES_RECORD: 'bb.event.getUsersIdentitiesRecord.before',
	  AFTER_GET_USERS_IDENTITIES_RECORD_SUCCESS: 'bb.event.getUsersIdentitiesRecordSuccess.after',
	  AFTER_GET_USERS_IDENTITIES_RECORD_ERROR: 'bb.event.getUsersIdentitiesRecordError.error',
	
	  BEFORE_GET_USERS_IDENTITY_LEGAL_ENTITY: 'bb.event.getUserIdentityLegalEntity.before',
	  AFTER_GET_USERS_IDENTITY_LEGAL_ENTITY_SUCCESS: 'bb.event.getUserIdentityLegalEntity.after',
	  AFTER_GET_USERS_IDENTITY_LEGAL_ENTITY_ERROR: 'bb.event.getUserIdentityLegalEntity.error'
	};
	
	exports.default = function (bus) {
	  return {
	
	    /**
	     * @name beforeGetUsersIdentitiesRecord
	     * @type {function}
	     * @description Before get users identities record
	     */
	    beforeGetUsersIdentitiesRecord: function beforeGetUsersIdentitiesRecord() {
	      bus.publish(Events.BEFORE_GET_USERS_IDENTITIES_RECORD);
	    },
	
	    /**
	     * @name afterGetUsersIdentitiesRecordSuccess
	     * @type {function}
	     * @param {object} userIdentityRecord The user identity record
	     * @description After get users identities record success
	     */
	    afterGetUsersIdentitiesRecordSuccess: function afterGetUsersIdentitiesRecordSuccess(userIdentityRecord) {
	      bus.publish(Events.AFTER_GET_USERS_IDENTITIES_RECORD_SUCCESS, userIdentityRecord);
	    },
	
	    /**
	     * @name afterGetUsersIdentitiesRecordError
	     * @type {function}
	     * @param {object} error Error while getting users identities record
	     * @description After get users identities record error
	     */
	    afterGetUsersIdentitiesRecordError: function afterGetUsersIdentitiesRecordError(error) {
	      bus.publish(Events.AFTER_GET_USERS_IDENTITIES_RECORD_ERROR, { error: error });
	    },
	
	    /**
	     * @name beforeGetUserIdentityLegalEntity
	     * @type {function}
	     * @description Before get users identities record
	     */
	    beforeGetUserIdentityLegalEntity: function beforeGetUserIdentityLegalEntity() {
	      bus.publish(Events.BEFORE_GET_USERS_IDENTITY_LEGAL_ENTITY);
	    },
	
	    /**
	     * @name afterGetUserIdentityLegalEntitySuccess
	     * @type {function}
	     * @param {object} legalEntity Legal Entity details object
	     * @description After get users identities legal entity success
	     */
	    afterGetUserIdentityLegalEntitySuccess: function afterGetUserIdentityLegalEntitySuccess(legalEntity) {
	      bus.publish(Events.AFTER_GET_USERS_IDENTITY_LEGAL_ENTITY_SUCCESS, legalEntity);
	    },
	
	    /**
	     * @name afterGetUserIdentityLegalEntityError
	     * @type {function}
	     * @param {object} error Error while getting users identities legal entity record
	     * @description After get users identities legal entity error
	     */
	    afterGetUserIdentityLegalEntityError: function afterGetUserIdentityLegalEntityError(error) {
	      bus.publish(Events.AFTER_GET_USERS_IDENTITY_LEGAL_ENTITY_ERROR, { error: error });
	    }
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-user-identity-details-ng.js.map