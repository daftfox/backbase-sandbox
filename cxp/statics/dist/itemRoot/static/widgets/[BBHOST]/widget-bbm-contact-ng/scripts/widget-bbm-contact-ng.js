(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("model-bb-contact-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-intent-ng"), require("lib-bb-state-container-ng"), require("lib-bb-extension-helpers-ng"), require("lib-bb-extension-events-ng"), require("lib-bb-extension-intents-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bbm-contact-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-model-errors", "lib-bb-widget-extension-ng", "model-bb-contact-ng", "lib-bb-event-bus-ng", "lib-bb-intent-ng", "lib-bb-state-container-ng", "lib-bb-extension-helpers-ng", "lib-bb-extension-events-ng", "lib-bb-extension-intents-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bbm-contact-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("model-bb-contact-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-intent-ng"), require("lib-bb-state-container-ng"), require("lib-bb-extension-helpers-ng"), require("lib-bb-extension-events-ng"), require("lib-bb-extension-intents-ng"));
	else
		root["widget-bbm-contact-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-model-errors"], root["lib-bb-widget-extension-ng"], root["model-bb-contact-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-intent-ng"], root["lib-bb-state-container-ng"], root["lib-bb-extension-helpers-ng"], root["lib-bb-extension-events-ng"], root["lib-bb-extension-intents-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_69__, __WEBPACK_EXTERNAL_MODULE_73__, __WEBPACK_EXTERNAL_MODULE_84__, __WEBPACK_EXTERNAL_MODULE_85__, __WEBPACK_EXTERNAL_MODULE_86__, __WEBPACK_EXTERNAL_MODULE_87__, __WEBPACK_EXTERNAL_MODULE_93__, __WEBPACK_EXTERNAL_MODULE_94__, __WEBPACK_EXTERNAL_MODULE_95__, __WEBPACK_EXTERNAL_MODULE_96__) {
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

	module.exports = __webpack_require__(92);

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

/***/ 85:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_85__;

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_86__;

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_87__;

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(53);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(84);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbWidgetNg = __webpack_require__(69);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbIntentNg = __webpack_require__(87);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbEventBusNg = __webpack_require__(86);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbStateContainerNg = __webpack_require__(93);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _modelBbContactNg = __webpack_require__(85);
	
	var _modelBbContactNg2 = _interopRequireDefault(_modelBbContactNg);
	
	var _libBbExtensionHelpersNg = __webpack_require__(94);
	
	var _libBbExtensionHelpersNg2 = _interopRequireDefault(_libBbExtensionHelpersNg);
	
	var _libBbExtensionEventsNg = __webpack_require__(95);
	
	var _libBbExtensionEventsNg2 = _interopRequireDefault(_libBbExtensionEventsNg);
	
	var _libBbExtensionIntentsNg = __webpack_require__(96);
	
	var _libBbExtensionIntentsNg2 = _interopRequireDefault(_libBbExtensionIntentsNg);
	
	var _list = __webpack_require__(97);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _defaultHooks = __webpack_require__(98);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	var _index = __webpack_require__(99);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _service = __webpack_require__(105);
	
	var _service2 = _interopRequireDefault(_service);
	
	var _events = __webpack_require__(106);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _constants = __webpack_require__(107);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bbm-contact-ng
	 *
	 * @description
	 * Mobile contact widget.
	 */
	var moduleKey = 'widget-bbm-contact-ng';
	var hooksKey = moduleKey + ':hooks';
	var eventServiceKey = moduleKey + ':events';
	var serviceKey = moduleKey + ':service';
	var viewModelKey = moduleKey + ':viewModel';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_modelBbContactNg2.default, _libBbWidgetNg2.default, _libBbEventBusNg2.default, _libBbIntentNg2.default, _libBbStateContainerNg2.default, _libBbExtensionHelpersNg2.default, _libBbExtensionEventsNg2.default, _libBbExtensionIntentsNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).factory(eventServiceKey, [_libBbEventBusNg.eventBusKey,
	/* into */
	_events2.default]).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey, _libBbWidgetNg.widgetKey, hooksKey,
	/* into */
	_index2.default]).factory(serviceKey, [_modelBbContactNg.modelContactKey, viewModelKey, hooksKey, _libBbStateContainerNg.bbStateContainerKey, eventServiceKey,
	
	/* into */
	_service2.default]).factory(_libBbExtensionHelpersNg.extensionHelpersContextKey, [_libBbIntentNg.bbIntentKey, serviceKey, _libBbEventBusNg.eventBusKey, function (bbIntent, service, bus) {
	  return { bbIntent: bbIntent, service: service, bus: bus };
	}]).factory(_libBbExtensionEventsNg.extensionEventsContextKey, [_libBbIntentNg.bbIntentKey, _libBbStateContainerNg.bbStateContainerKey, serviceKey, _libBbEventBusNg.eventBusKey, function (bbIntent, stateContainer, service, bus) {
	  return {
	    bbIntent: bbIntent,
	    stateContainer: stateContainer,
	    service: service,
	    bus: bus
	  };
	}]).factory(_libBbExtensionIntentsNg.extensionIntentsContextKey, [serviceKey, function (service) {
	  return { service: service };
	}]).controller('ContactListController', [serviceKey,
	
	/* into */
	_list2.default]).run([viewModelKey, _libBbIntentNg.bbIntentKey, _libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, function (viewModel, bbIntents, eventBus, widget) {
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

/***/ 93:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_93__;

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_94__;

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_95__;

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_96__;

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ContactListController;
	/**
	 * @name ContactListController
	 * @ngkey ContactListController
	 * @description
	 * Mobile contact widget controller
	 * @type {object}
	 */
	function ContactListController(service) {
	  /**
	   * @description
	   * Widget initialization logic - called automatically during the angular cycle.
	   *
	   * @name ContactListController#$onInit
	   * @type {function}
	   */
	  var $onInit = function $onInit() {
	    return service.setContacts();
	  };
	
	  return {
	    /* Lifecycle hooks */
	    $onInit: $onInit
	  };
	}

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name defaultHooks
	 * @type {object}
	 *
	 * @description
	 * Default hooks for widget-bbm-contact-ng
	 */
	
	/**
	 * @name defaultHooks#processRequestParams
	 * @type {function}
	 *
	 * @description
	 * Default hook for contact loading query params processing/extending
	 *
	 * @param {object} params to process
	 * @param {?number} params.from The page to list from
	 * @param {?number} params.size The number of results per page
	 * @returns {Object} Processed params
	 */
	var processRequestParams = exports.processRequestParams = function processRequestParams(params) {
	  return params;
	};
	
	/**
	 * @name defaultHooks#processReloadRequestParams
	 * @type {function}
	 *
	 * @description
	 * Default hook for contact reloading query params processing/extending
	 *
	 * @param {object} params to process
	 * @param {?number} params.from The page to list from
	 * @param {?number} params.size The number of results per page
	 * @returns {Object} Processed params
	 */
	var processReloadRequestParams = exports.processReloadRequestParams = function processReloadRequestParams(params) {
	  return params;
	};
	
	/**
	 * @name defaultHooks#processSearchRequestParams
	 * @type {function}
	 *
	 * @description
	 * Default hook for contact search query params processing/extending
	 *
	 * @param {object} params to process
	 * @param {?number} params.from The page to list from
	 * @param {?string} params.query The search term used to search for contact
	 * @param {?number} params.size The number of results per page
	 * @returns {Object} Processed params
	 */
	var processSearchRequestParams = exports.processSearchRequestParams = function processSearchRequestParams(params) {
	  return params;
	};
	
	/**
	 * @name defaultHooks#processNewContactObject
	 *
	 * @description
	 * processNewContactObject default hook
	 *
	 * @param {object} contact New Contact object
	 * @type {function}
	 * @returns {object} Processed new Contact object
	 */
	var processNewContactObject = exports.processNewContactObject = function processNewContactObject(contact) {
	  return contact;
	};
	
	/**
	 * @name defaultHooks#processContactBeforeSave
	 *
	 * @description
	 * processContactBeforeSave default hook
	 *
	 * @param {object} contact Contact object to be created/updated
	 * @type {function}
	 * @returns {object} Processed Contact object
	 */
	var processContactBeforeSave = exports.processContactBeforeSave = function processContactBeforeSave(contact) {
	  return contact;
	};

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _initialState = __webpack_require__(100);
	
	var _initialState2 = _interopRequireDefault(_initialState);
	
	var _list = __webpack_require__(101);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _search = __webpack_require__(103);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _contact = __webpack_require__(104);
	
	var _contact2 = _interopRequireDefault(_contact);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Defines the default page size for the contacts page
	 * @type {number}
	 * @inner
	 */
	// Combine state reducers
	var DEFAULT_PAGE_SIZE = 10;
	
	exports.default = function (stateContainer, widget) {
	  var stateParams = {
	    pageSize: widget.getLongPreference('pageSize') || DEFAULT_PAGE_SIZE,
	    showAvatar: widget.getBooleanPreference('showAvatar') || false
	  };
	
	  var initialState = (0, _initialState2.default)(stateParams);
	
	  /**
	   * @name ViewModel
	   * @type {object}
	   * @ngKey widget-bbm-contact-ng:viewModel
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
	     * Actions for updating the parts of the `ViewState` related to contacts list
	     * @type {ViewModelListActions}
	     * @inner
	     */
	    list: (0, _list2.default)(stateContainer),
	
	    /**
	     * @name ViewModel#search
	     * @description
	     * Actions for updating the parts of the `ViewState` related to contacts search
	     * @type {ViewModelSearchActions}
	     * @inner
	     */
	    search: (0, _search2.default)(stateContainer),
	
	    /**
	     * @name ViewModel#contact
	     * @description
	     * Actions for updating the parts of the `ViewState` related to contact state
	     * @type {ViewModelContactActions}
	     * @inner
	     */
	    contact: (0, _contact2.default)(stateContainer)
	  };
	};

/***/ }),

/***/ 100:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (params) {
	  return {
	    contact: {
	      data: null,
	      error: null,
	      loading: false
	    },
	    contacts: {
	      data: null,
	      error: null,
	      loading: false,
	      requestParams: {
	        from: null,
	        size: params.pageSize
	      },
	      totalCount: 0
	    },
	    searching: false,
	    search: {
	      data: null,
	      error: null,
	      loading: false,
	      requestParams: {
	        from: null,
	        size: params.pageSize,
	        query: null
	      },
	      totalCount: 0
	    },
	    showAvatar: params.showAvatar
	  };
	};
	
	/**
	 * @typedef {Object} ViewState
	 * @description
	 * The current state of the [ViewModel]{@link module:lib-bb-view-model-ng}.
	 *
	 * @property {Object} contact
	 * @property {Object} contact.data Current contact object
	 * @property {Object} contact.error The last encountered error
	 * @property {String} contact.error.message Error message
	 * @property {boolean} contact.loading Indicates if the contact is being loaded
	 *
	 * @property {Object} contacts
	 * @property {Object[]} contacts.data Collection of contacts
	 * @property {Object} contacts.error The last encountered error
	 * @property {string} contacts.error.message Error message
	 * @property {boolean} contacts.loading Indicates if contacts are loading at the moment
	 * @property {RequestParams}
	 * contacts.requestParams A set of request params for loading contacts
	 * @property {number} contacts.totalCount Total number of contacts
	 *
	 * @property {boolean} searching Indicates if contacts search is active at the moment
	 *
	 * @property {Object} search
	 * @property {Object[]} search.data Collection of searched contacts
	 * @property {Object} search.error The last encountered error
	 * @property {string} search.error.message Error message
	 * @property {boolean} search.loading Indicates if search contacts are loading at the moment
	 * @property {RequestParams}
	 * search.requestParams A set of request params for searching contacts
	 * @property {number} search.totalCount Total number of search results
	 */
	
	/**
	 * @typedef {Object} RequestParams
	 * @description
	 * A set of request params that defines how to load the requested data.
	 *
	 * @property {number} from The current page (0 indexed), null from the start
	 * @property {number} size The number of contacts in the page
	 * @property {?string} query Query search parameter
	 */

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(102);
	
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelListActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelListActions#init
	     * @description Initialize the `ViewState` before loading contacts
	     * @type {function}
	     * @inner
	     * @return {void}
	     */
	    init: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        contacts: Object.assign({}, state.contacts, {
	          data: null,
	          error: null,
	          loading: false,
	          requestParams: Object.assign({}, state.contacts.requestParams, {
	            from: null
	          }),
	          totalCount: 0
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#beforeLoad
	     * @description Update the `ViewState` before loading contacts
	     * @type {function}
	     * @inner
	     * @return {void}
	     */
	    beforeLoad: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        contacts: Object.assign({}, state.contacts, {
	          error: null,
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterLoadSuccess
	     * @description Update the `ViewState` after successfully loading contacts
	     * @type {function}
	     * @inner
	     * @param {ContactsResponse} response Contacts load response
	     * @return {void}
	     */
	    afterLoadSuccess: stateContainer.createAction(function (state, response) {
	      return Object.assign({}, state, {
	        contacts: Object.assign({}, state.contacts, {
	          data: response.data,
	          error: null,
	          loading: false,
	          requestParams: Object.assign({}, state.contacts.requestParams, {
	            from: response.requestParams.from
	          }),
	          totalCount: response.totalCount
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterLoadError
	     * @description Update the `ViewState` after unsuccessful contacts load
	     * @type {function}
	     * @inner
	     * @param {module:lib-bb-model-errors.ModelError} error Response error
	     * @return {void}
	     */
	    afterLoadError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        contacts: Object.assign({}, state.contacts, {
	          error: (0, _helpers.uiError)(error),
	          loading: false
	        })
	      });
	    })
	  };
	};
	
	/**
	 * @typedef {object} ContactsResponse
	 * @property {object[]} data Loaded contacts array
	 * @property {number} totalCount Total number of contacts
	 * @property {LoadRequestParams} requestParams Request parameters object
	 */
	
	/**
	 * @typedef {object} LoadRequestParams
	 * @property {number} from Page number to load
	 * @property {number} size Page size to load
	 */

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.uiError = undefined;
	
	var _errorMessages;
	
	var _libBbModelErrors = __webpack_require__(73);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* eslint-disable import/prefer-default-export */
	
	
	var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'model.error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'model.error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'model.error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'model.error.unexpected'), _errorMessages);
	
	var uiError = exports.uiError = function uiError(error) {
	  return {
	    message: errorMessages[error.code]
	  };
	};

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(102);
	
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelSearchActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelSearchActions#setSearch
	     * @description Set the `ViewState` to prepare the search
	     * @type {function}
	     * @inner
	     * @param {SearchRequestParams} params Search request parameters
	     * @return {void}
	     */
	    setSearch: stateContainer.createAction(function (state, params) {
	      return Object.assign({}, state, {
	        search: Object.assign({}, state.search, {
	          data: null,
	          requestParams: Object.assign({}, state.search.requestParams, {
	            from: null, // reset from for each new search request
	            query: params.query || null
	          })
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelSearchActions#beforeSearch
	     * @description Update the `ViewState` before search contacts
	     * @type {function}
	     * @inner
	     * @param {SearchRequestParams} params Search request parameters
	     * @return {void}
	     */
	    beforeSearch: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        searching: true,
	        search: Object.assign({}, state.search, {
	          error: null,
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelSearchActions#afterSearchSuccess
	     * @description Update the `ViewState` after successful contacts search
	     * @type {function}
	     * @inner
	     * @param {ContactSearchResponse} response Search response
	     * @return {void}
	     */
	    afterSearchSuccess: stateContainer.createAction(function (state, response) {
	      return Object.assign({}, state, {
	        search: Object.assign({}, state.search, {
	          data: response.data,
	          error: null,
	          loading: false,
	          requestParams: Object.assign({}, state.search.requestParams, {
	            from: response.requestParams.from
	          }),
	          totalCount: response.totalCount
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelSearchActions#afterSearchError
	     * @description Update the `ViewState` after unsuccessful contacts search
	     * @type {function}
	     * @inner
	     * @param {module:lib-bb-model-errors.ModelError} error Response error
	     * @return {void}
	     */
	    afterSearchError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        search: Object.assign({}, state.search, {
	          error: (0, _helpers.uiError)(error),
	          loading: false
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelSearchActions#cancel
	     * @description Update the `ViewState` when contacts search canceled
	     * @type {function}
	     * @inner
	     * @return {void}
	     */
	    cancel: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        searching: false,
	        search: Object.assign({}, state.search, {
	          error: null,
	          loading: false,
	          requestParams: Object.assign({}, state.search.requestParams, {
	            from: null,
	            query: null
	          }),
	          totalCount: 0
	        })
	      });
	    })
	  };
	};
	
	/**
	 * @typedef {object} ContactSearchResponse
	 * @property {object[]} data Search contacts array
	 * @property {number} totalCount Total number of found contacts
	 * @property {SearchRequestParams} requestParams Request parameters object
	 */
	
	/**
	 * @typedef {object} SearchRequestParams
	 * @property {number} from Page number to load
	 * @property {number} size Page size to load
	 * @property {?string} query Query search parameter
	 */

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(102);
	
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelContactActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelContactActions#setContact
	     * @description Update the `ViewState` with the selected contact
	     * @type {function}
	     * @inner
	     * @param {object} data Contact object
	     * @return {void}
	     */
	    setContact: stateContainer.createAction(function (state, data) {
	      return Object.assign({}, state, {
	        contact: Object.assign({}, state.contact, {
	          data: data
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelContactActions#beforeContactCreate
	     * @description Update the `ViewState` before a contact is submitted to create.
	     * @type {function}
	     *
	     * @return {void}
	     * @inner
	     */
	    beforeContactCreate: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        contact: Object.assign({}, state.contact, {
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelContactActions#afterContactCreateSuccess
	     * @description Update the `ViewState` after a successful contact create.
	     * @type {function}
	     *
	     * @param {module:model-bb-contact-ng.Contact} contact
	     * @return {void}
	     * @inner
	     */
	    afterContactCreateSuccess: stateContainer.createAction(function (state, contact) {
	      return Object.assign({}, state, {
	        contact: Object.assign({}, state.contact, {
	          data: contact,
	          loading: false,
	          error: null
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelContactActions#afterContactCreateError
	     * @description Update the `ViewState` after an unsuccessful contact create.
	     * @type {function}
	     *
	     * @param {module:model-bb-contact-ng.ModelError} error Response error
	     * @return {void}
	     * @inner
	     */
	    afterContactCreateError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        contact: Object.assign({}, state.contact, {
	          loading: false,
	          error: (0, _helpers.uiError)(error)
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelContactActions#beforeContactUpdate
	     * @description Update the `ViewState` before a contact is submitted to update.
	     * @type {function}
	     *
	     * @return {void}
	     * @inner
	     */
	    beforeContactUpdate: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        contact: Object.assign({}, state.contact, {
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelContactActions#afterContactUpdateSuccess
	     * @description Update the `ViewState` after a successful contact update.
	     * @type {function}
	     *
	     * @param {module:model-bb-contact-ng.Contact} contact
	     * @return {void}
	     * @inner
	     */
	    afterContactUpdateSuccess: stateContainer.createAction(function (state, contact) {
	      return Object.assign({}, state, {
	        contact: Object.assign({}, state.contact, {
	          data: contact,
	          loading: false,
	          error: null
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelContactActions#afterContactUpdateError
	     * @description Update the `ViewState` after an unsuccessful contact update.
	     * @type {function}
	     *
	     * @param {module:model-bb-contact-ng.ModelError} error Response error
	     * @return {void}
	     * @inner
	     */
	    afterContactUpdateError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        contact: Object.assign({}, state.contact, {
	          loading: false,
	          error: (0, _helpers.uiError)(error)
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelContactActions#beforeContactDelete
	     * @description Update the `ViewState` before a contact is submitted to delete.
	     * @type {function}
	     *
	     * @return {void}
	     * @inner
	     */
	    beforeContactDelete: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        contact: Object.assign({}, state.contact, {
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelContactActions#afterContactDeleteSuccess
	     * @description Update the `ViewState` after a successful contact delete.
	     * @type {function}
	     *
	     * @param {module:model-bb-contact-ng.Contact} contact
	     * @return {void}
	     * @inner
	     */
	    afterContactDeleteSuccess: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        contact: {
	          data: null,
	          loading: false,
	          error: null
	        }
	      });
	    }),
	
	    /**
	     * @name ViewModelContactActions#afterContactDeleteError
	     * @description Update the `ViewState` after an unsuccessful contact delete.
	     * @type {function}
	     *
	     * @param {module:model-bb-contact-ng.ModelError} error Response error
	     * @return {void}
	     * @inner
	     */
	    afterContactDeleteError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        contact: Object.assign({}, state.contact, {
	          loading: false,
	          error: (0, _helpers.uiError)(error)
	        })
	      });
	    })
	  };
	};

/***/ }),

/***/ 105:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/* global angular */
	/**
	 * @name ContactService
	 * @type {Object}
	 * @ngkey widget-bbm-contact-ng:service
	 * @description
	 * The service encapsulates the core functionality of the Contact
	 * Widget. It co-ordinates the communication of data from the `Model`
	 * with the communication with the user by updating the {@link ViewState}.
	 *
	 * Asynchronous methods update the {@link ViewState} in 3 potential
	 * stages; "before", "success", and "error", to allow the view to
	 * provide feedback to the user.
	 */
	
	/**
	 * @name createContactService
	 * @inner
	 * @type {function}
	 * @param {module:model-bb-contact-ng.contactModel} model Contacts model
	 * @param {ViewModel} viewModel
	 * @param {defaultHooks} hooks
	 * @param {module:lib-bb-state-container-ng.StateContainer} stateContainer
	 * @param {object} events
	 * @return {ContactService}
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
	    return state.contacts.requestParams;
	  });
	
	  /**
	   * @name getSearchRequestParams
	   * @type {function}
	   * @description
	   * returns the search request params from the state
	   * @returns {Object} requestParams Request params from the state
	   * @inner
	   */
	  var getSearchRequestParams = stateContainer.createSelector(function (state) {
	    return state.search.requestParams;
	  });
	
	  /**
	   * @name getContacts
	   * @type {function}
	   * @description
	   * returns the current list of `contacts`
	   * @returns {Array} contacts List of contacts from the state
	   * @inner
	   */
	  var getContacts = stateContainer.createSelector(function (state) {
	    return state.contacts.data;
	  });
	
	  /**
	   * @name getSelectedContact
	   * @type {function}
	   * @description
	   * returns the current selected `transaction`
	   * @returns {Object} transaction Transaction from the state
	   * @inner
	   */
	  var getSelectedContact = stateContainer.createSelector(function (state) {
	    return state.contact.data;
	  });
	
	  /**
	   * @name isAllContactsLoaded
	   * @type {function}
	   * @description
	   * Calculates if all the contacts have been loaded
	   * @returns {boolean}
	   * @inner
	   */
	  var isAllContactsLoaded = stateContainer.createSelector(function (state) {
	    return Boolean(state.contacts.data && state.contacts.data.length >= state.contacts.totalCount);
	  });
	
	  /**
	   * @name isNewContact
	   * @type {function}
	   * @description
	   * Determines if the contact is new or was already existing
	   * @returns {boolean}
	   * @inner
	   */
	  var isNewContact = stateContainer.createSelector(function (state) {
	    return Boolean(state.contact.data && !state.contact.data.id);
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
	   * @name getNextSearchRequestParams
	   * @type {function}
	   * @description
	   * Calculates the request params to load the data for the next search request.
	   * Note: It also calculates the data for the first request. Therefore the
	   *       Initial from params need to be null and not 0.
	   * @returns {Object} params Processed search request params
	   * @inner
	   */
	  var getNextSearchRequestParams = function getNextSearchRequestParams() {
	    var requestParams = getSearchRequestParams();
	
	    var from = requestParams.from === null ? 0 : requestParams.from + 1;
	    var size = requestParams.size;
	    var query = requestParams.query;
	
	    return hooks.processSearchRequestParams({
	      from: from,
	      size: size,
	      query: query
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
	   * @name appendContacts
	   * @type {function}
	   * @description
	   * Appends the given list of `contacts` to the current list of `contacts`
	   * if this function is used as a merge strategy function
	   * @param {Array} contacts List of `contacts`
	   * @returns {Array} contacts Merged list of `contacts`
	   * @inner
	   */
	  var appendContacts = function appendContacts(contacts) {
	    return uniqueArray([].concat(_toConsumableArray(getContacts() || []), _toConsumableArray(contacts)));
	  };
	
	  /**
	   * @name replaceContacts
	   * @type {function}
	   * @description
	   * Returns the given list of `contacts` immediately and therefore replaces
	   * the list of `contacts` if this function is used as a merge strategy function
	   * @param {Array} contacts List of `contacts`
	   * @returns {Array} contacts List of `contacts`
	   * @inner
	   */
	  var replaceContacts = function replaceContacts(contacts) {
	    return contacts;
	  };
	
	  /**
	   * @name loadContacts
	   * @type {function}
	   * @description
	   * Fetch a `page` of `contacts` from the model and
	   * update the {@link ViewState} to display them.
	   * @param {function} mergeFn function defining the merge strategy
	   * @returns {Promise}
	   * @inner
	   */
	  var loadContacts = function loadContacts(mergeFn) {
	    var requestParams = getNextRequestParams();
	
	    viewModel.list.beforeLoad();
	
	    return model.getContacts(requestParams).then(function (_ref) {
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
	   * @name ContactService#loadMoreContacts
	   * @type {function}
	   * @description
	   * Loads more `contacts` for the currently selected product.
	   */
	  var loadMoreContacts = function () {
	    var loadMoreContactsPromise = void 0;
	
	    return function () {
	      if (loadMoreContactsPromise || isAllContactsLoaded()) {
	        return loadMoreContactsPromise;
	      }
	
	      loadMoreContactsPromise = loadContacts(appendContacts).then(function () {
	        loadMoreContactsPromise = null;
	      }).catch(function (error) {
	        loadMoreContactsPromise = null;
	        throw error;
	      });
	
	      return loadMoreContactsPromise;
	    };
	  }();
	
	  /**
	   * @name reloadContacts
	   * @type {function}
	   * @description
	   * Fetch a `page` of `contacts` from the model and
	   * update the {@link ViewState} to display them.
	   * @param {function} mergeFn function defining the merge strategy
	   * @returns {Promise}
	   * @inner
	   */
	  var reloadContacts = function reloadContacts() {
	    var reloadRequestParams = getReloadRequestParams();
	
	    viewModel.list.beforeLoad();
	
	    return model.getContacts(reloadRequestParams).then(function (_ref2) {
	      var data = _ref2.data,
	          totalCount = _ref2.totalCount;
	
	      viewModel.list.afterLoadSuccess({
	        data: replaceContacts(data),
	        requestParams: recalculateRequestParams(data),
	        totalCount: totalCount
	      });
	    }).catch(function (error) {
	      viewModel.list.afterLoadError(error);
	      throw error;
	    });
	  };
	
	  /**
	   * @name searchContacts
	   * @type {function}
	   * @description
	   * Fetch a `page` of `contacts` from the model that meet the given search query and
	   * update the {@link ViewState} to display them.
	   * @param {function} mergeFn function defining the merge strategy
	   * @returns {Promise}
	   * @inner
	   */
	  var searchContacts = function searchContacts(mergeFn) {
	    var requestParams = getNextSearchRequestParams();
	    viewModel.search.beforeSearch();
	
	    return model.getContacts(requestParams).then(function (_ref3) {
	      var data = _ref3.data,
	          totalCount = _ref3.totalCount;
	
	      viewModel.search.afterSearchSuccess({
	        data: mergeFn(data),
	        requestParams: requestParams,
	        totalCount: totalCount
	      });
	    }).catch(function (error) {
	      viewModel.search.afterSearchError(error);
	      throw error;
	    });
	  };
	
	  /**
	   * @name ContactService#searchMoreContacts
	   * @type {function}
	   * @description
	   * Loads more `contacts` for the currently selected product.
	   */
	  var searchMoreContacts = function () {
	    var searchMoreContactsPromise = void 0;
	
	    return function () {
	      if (searchMoreContactsPromise || isAllContactsLoaded()) {
	        return searchMoreContactsPromise;
	      }
	
	      searchMoreContactsPromise = searchContacts(appendContacts).then(function () {
	        searchMoreContactsPromise = null;
	      }).catch(function (error) {
	        searchMoreContactsPromise = null;
	        throw error;
	      });
	
	      return searchMoreContactsPromise;
	    };
	  }();
	
	  /**
	   * @name ContactService#setContacts
	   * @type {function}
	   * @description
	   * Sets the selected contact and updates the {@link ViewState} to display it.
	   */
	  var setContacts = function setContacts() {
	    viewModel.list.init();
	
	    return loadContacts(replaceContacts);
	  };
	
	  /**
	   * @name ContactService#setInitialContact
	   * @type {function}
	   * @description
	   * Sets the initial contact and updates the {@link ViewState} to display it.
	   */
	  var setInitialContact = function setInitialContact() {
	    var contact = angular.copy(hooks.processNewContactObject(model.getNewContactObject()));
	
	    viewModel.contact.setContact(contact);
	  };
	
	  /**
	   * @name ContactService#setSelectedContact
	   * @type {function}
	   * @description
	   * Sets the selected contact and updates the {@link ViewState} to display it.
	   * @param {Object} contact Contact to select
	   */
	  var setSelectedContact = function setSelectedContact(contact) {
	    viewModel.contact.setContact(contact);
	  };
	
	  /**
	   * @name ContactService#setSearchQuery
	   * @type {function}
	   * @description
	   * Cancels the search and resets the search on the {@link ViewState}.
	   */
	  var setSearchQuery = function setSearchQuery(query) {
	    viewModel.search.setSearch({ query: query });
	
	    return searchContacts(replaceContacts);
	  };
	
	  /**
	   * @name ContactService#createContact
	   * @type {function}
	   * @description
	   * Creates the new contact
	   */
	  function createContact(contact) {
	    viewModel.contact.beforeContactCreate();
	    events.beforeContactCreate();
	
	    return model.createContact(contact).then(function () {
	      viewModel.contact.afterContactCreateSuccess(contact);
	      events.afterContactCreateSuccess(contact);
	    }).catch(function (error) {
	      viewModel.contact.afterContactCreateError(error);
	      events.afterContactCreateError(error);
	      throw error;
	    });
	  }
	
	  /**
	   * @name ContactService#updateContact
	   * @type {function}
	   * @description
	   * Updates the contact
	   */
	  function updateContact(contact) {
	    viewModel.contact.beforeContactUpdate();
	    events.beforeContactUpdate();
	
	    return model.updateContact(contact).then(function () {
	      viewModel.contact.afterContactUpdateSuccess(contact);
	      events.afterContactUpdateSuccess(contact);
	    }).catch(function (error) {
	      viewModel.contact.afterContactUpdateError(error);
	      events.afterContactUpdateError(error);
	      throw error;
	    });
	  }
	
	  /**
	   * @name ContactService#saveContact
	   * @type {function}
	   * @description
	   * Determines if the contact should be created or updated and saves the contact
	   */
	  var saveContact = function saveContact() {
	    var processedContact = hooks.processContactBeforeSave(getSelectedContact());
	
	    return isNewContact() ? createContact(processedContact) : updateContact(processedContact);
	  };
	
	  /**
	   * @name ContactService#deleteContact
	   * @type {function}
	   * @description
	   * Deletes the contact
	   */
	  var deleteContact = function deleteContact(contact) {
	    viewModel.contact.beforeContactDelete();
	    events.beforeContactDelete();
	
	    return model.deleteContact(contact).then(function () {
	      viewModel.contact.afterContactDeleteSuccess(contact);
	      events.afterContactDeleteSuccess(contact);
	    }).catch(function (error) {
	      viewModel.contact.afterContactDeleteError(error);
	      events.afterContactDeleteError(error);
	      throw error;
	    });
	  };
	
	  /**
	   * @name ContactService#cancelSearch
	   * @type {function}
	   * @description
	   * Cancels the search and resets the search on the {@link ViewState}.
	   */
	  var cancelSearch = function cancelSearch() {
	    return viewModel.search.cancel();
	  };
	
	  return {
	    cancelSearch: cancelSearch,
	    deleteContact: deleteContact,
	    isNewContact: isNewContact,
	    loadMoreContacts: loadMoreContacts,
	    reloadContacts: reloadContacts,
	    saveContact: saveContact,
	    searchMoreContacts: searchMoreContacts,
	    setContacts: setContacts,
	    setInitialContact: setInitialContact,
	    setSearchQuery: setSearchQuery,
	    setSelectedContact: setSelectedContact
	  };
	};

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Event = exports.Event = {
	  /**
	   * A newly created contact is submitted to the server
	   * @event bb.event.contact.create.start
	   * @type {string}
	   */
	  BEFORE_CONTACT_CREATE: 'bb.event.contact.create.start',
	
	  /**
	   * A new contact is created on the server
	   * @event bb.event.contact.create.done
	   * @property {module:model-bb-contact-ng.Contact} contact
	   * @type {string}
	   */
	  AFTER_CONTACT_CREATE_SUCCESS: 'bb.event.contact.create.done',
	
	  /**
	   * A new contact fails to be created on the server
	   * @event bb.event.contact.create.failed
	   * @type {string}
	   * @property {module:lib-bb-model-ng.ModelError} error
	   */
	  AFTER_CONTACT_CREATE_ERROR: 'bb.event.contact.create.failed',
	
	  /**
	   * A contact is submitted for update to the server
	   * @event bb.event.contact.edit.start
	   * @type {string}
	   */
	  BEFORE_CONTACT_UPDATE: 'bb.event.contact.update.start',
	
	  /**
	   * A contact is updated on the server
	   * @event bb.event.contact.edit.done
	   * @property {module:model-bb-contact-ng.Contact} contact
	   * @type {string}
	   */
	  AFTER_CONTACT_UPDATE_SUCCESS: 'bb.event.contact.update.done',
	
	  /**
	   * A contact fails to be updated on the server
	   * @event bb.event.contact.edit.failed
	   * @property {module:lib-bb-model-ng.ModelError} error
	   * @type {string}
	   */
	  AFTER_CONTACT_UPDATE_ERROR: 'bb.event.contact.update.failed',
	
	  /**
	   * A contact is submitted for deletion from the server
	   * @event bb.event.contact.delete.start
	   * @type {string}
	   */
	  BEFORE_CONTACT_DELETE: 'bb.event.contact.delete.start',
	
	  /**
	   * A contact is deleted on the server
	   * @event bb.event.contact.delete.done
	   * @property {module:model-bb-contact-ng.Contact} contact
	   * @type {string}
	   */
	  AFTER_CONTACT_DELETE_SUCCESS: 'bb.event.contact.delete.done',
	
	  /**
	   * A contact fails to be deleted on the server
	   * @event bb.event.contact.delete.failed
	   * @type {string}
	   * @property {module:lib-bb-model-ng.ModelError} error
	   */
	  AFTER_CONTACT_DELETE_ERROR: 'bb.event.contact.delete.failed'
	};
	
	exports.default = function (bus) {
	  return {
	    beforeContactCreate: function beforeContactCreate() {
	      bus.publish(Event.BEFORE_CONTACT_CREATE);
	    },
	    afterContactCreateSuccess: function afterContactCreateSuccess(contact) {
	      bus.publish(Event.AFTER_CONTACT_CREATE_SUCCESS, { contact: contact });
	    },
	    afterContactCreateError: function afterContactCreateError(error) {
	      bus.publish(Event.AFTER_CONTACT_CREATE_ERROR, { error: error });
	    },
	    beforeContactUpdate: function beforeContactUpdate() {
	      bus.publish(Event.BEFORE_CONTACT_UPDATE);
	    },
	    afterContactUpdateSuccess: function afterContactUpdateSuccess(contact) {
	      bus.publish(Event.AFTER_CONTACT_UPDATE_SUCCESS, { contact: contact });
	    },
	    afterContactUpdateError: function afterContactUpdateError(error) {
	      bus.publish(Event.AFTER_CONTACT_UPDATE_ERROR, { error: error });
	    },
	    beforeContactDelete: function beforeContactDelete() {
	      bus.publish(Event.BEFORE_CONTACT_DELETE);
	    },
	    afterContactDeleteSuccess: function afterContactDeleteSuccess(contact) {
	      bus.publish(Event.AFTER_CONTACT_DELETE_SUCCESS, { contact: contact });
	    },
	    afterContactDeleteError: function afterContactDeleteError(error) {
	      bus.publish(Event.AFTER_CONTACT_DELETE_ERROR, { error: error });
	    }
	  };
	};

/***/ }),

/***/ 107:
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
	  BB_ITEM_LOADED: 'bb.item.loaded'
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bbm-contact-ng.js.map