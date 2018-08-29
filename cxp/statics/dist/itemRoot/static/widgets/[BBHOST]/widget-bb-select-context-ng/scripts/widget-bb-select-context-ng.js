(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("lib-bb-widget-ng"), require("lib-bb-user-data-ng"), require("model-bb-select-context-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-select-context-ng", ["vendor-bb-angular", "lib-bb-widget-extension-ng", "lib-bb-widget-ng", "lib-bb-user-data-ng", "model-bb-select-context-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-select-context-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("lib-bb-widget-ng"), require("lib-bb-user-data-ng"), require("model-bb-select-context-ng"));
	else
		root["widget-bb-select-context-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-extension-ng"], root["lib-bb-widget-ng"], root["lib-bb-user-data-ng"], root["model-bb-select-context-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_50__, __WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_68__, __WEBPACK_EXTERNAL_MODULE_69__) {
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

	module.exports = __webpack_require__(67);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_50__;

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(50);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbWidgetNg = __webpack_require__(53);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbUserDataNg = __webpack_require__(68);
	
	var _libBbUserDataNg2 = _interopRequireDefault(_libBbUserDataNg);
	
	var _modelBbSelectContextNg = __webpack_require__(69);
	
	var _modelBbSelectContextNg2 = _interopRequireDefault(_modelBbSelectContextNg);
	
	var _viewModel = __webpack_require__(70);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	var _defaultHooks = __webpack_require__(71);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	var _controller = __webpack_require__(72);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bb-select-context-ng
	 *
	 * @description
	 * Select context widget
	 */
	var moduleKey = 'widget-bb-select-context-ng';
	var hooksKey = moduleKey + ':hooks';
	var viewModelKey = moduleKey + ':viewModel';
	
	exports.default = _vendorBbAngular2.default.module('widget-bb-select-context-ng', [_modelBbSelectContextNg2.default, _libBbWidgetNg2.default, _libBbUserDataNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).factory(viewModelKey, [_viewModel2.default]).controller('SelectContextController', [
	// dependencies to inject
	_modelBbSelectContextNg.modelSelectContextKey, _libBbUserDataNg.bbUserDataServiceKey, _libBbWidgetNg.widgetKey, viewModelKey, hooksKey, '$window',
	/* into */
	_controller2.default]).name;

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_68__;

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_69__;

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * @name ViewModel
	 * @type {object}
	 *
	 * @description
	 * View model for widget-bb-select-context-ng
	 */
	
	exports.default = function () {
	  var viewModel = {};
	
	  /**
	   * @name ViewModel#append
	   * @inner
	   *
	   * @description
	   * Merges new items with existing items
	   *
	   * @type {function}
	   * @returns {array} Merged array of old and new items
	   */
	  var append = function append(newItems, existingItems) {
	    return [].concat(_toConsumableArray(existingItems), _toConsumableArray(newItems));
	  };
	
	  /**
	   * @name ViewModel#getServiceAgreementId
	   * @type {function}
	   *
	   * @description
	   * Returns the Service Agreement ID
	   *
	   * @returns {string}
	   * @inner
	   */
	  var getServiceAgreementId = function getServiceAgreementId() {
	    return viewModel.state.serviceAgreementId;
	  };
	
	  /**
	   * @name ViewModel#serviceAgreementName
	   * @type {function}
	   *
	   * @description
	   * Returns the Service Agreement name
	   *
	   * @returns {string}
	   * @inner
	   */
	  var getServiceAgreementName = function getServiceAgreementName() {
	    return viewModel.state.serviceAgreementName;
	  };
	
	  /**
	   * @name ViewModel#getLegalEntityId
	   * @type {function}
	   *
	   * @description
	   * Returns the Legal Entity ID
	   *
	   * @returns {string}
	   * @inner
	   */
	  var getLegalEntityId = function getLegalEntityId() {
	    return viewModel.state.legalEntityId;
	  };
	
	  /**
	   * @name ViewModel#getLegalEntityName
	   * @type {function}
	   *
	   * @description
	   * Returns the Legal Entity name
	   *
	   * @returns {string}
	   * @inner
	   */
	  var getLegalEntityName = function getLegalEntityName() {
	    return viewModel.state.legalEntityName;
	  };
	
	  /**
	   * @name ViewModel#isServiceAgreementsShown
	   * @type {function}
	   *
	   * @description
	   * Checks if Service Agreements should be displayed
	   *
	   * @returns {boolean}
	   * @inner
	   */
	  var isServiceAgreementsShown = function isServiceAgreementsShown() {
	    return Boolean(viewModel.state.showServiceAgreements);
	  };
	
	  /**
	   * @name ViewModel#isLegalEntitiesDisabled
	   * @type {function}
	   *
	   * @description
	   * Checks if Legal Entities should be disabled
	   *
	   * @returns {boolean}
	   * @inner
	   */
	  var isLegalEntitiesDisabled = function isLegalEntitiesDisabled() {
	    return Boolean(viewModel.state.disableLegalEntities);
	  };
	
	  /**
	   * @name ViewModel#setServiceAgreementId
	   * @type {function}
	   *
	   * @description
	   * Sets the given parameter as the Service Agreement ID
	   *
	   * @param {string} id
	   * @param {string} name
	   * @inner
	   */
	  var setServiceAgreement = function setServiceAgreement(id, name) {
	    return Object.assign(viewModel.state, { serviceAgreementId: id, serviceAgreementName: name });
	  };
	
	  /**
	   * @name ViewModel#setBeneficiaries
	   * @type {function}
	   *
	   * @description
	   * Sets the given parameter as the Legal Entity ID
	   *
	   * @param {string} id
	   * @param {string} name
	   * @inner
	   */
	  var setLegalEntity = function setLegalEntity(id, name) {
	    return Object.assign(viewModel.state, { legalEntityId: id, legalEntityName: name });
	  };
	
	  /**
	   * @name ViewModel#setServiceAgreementsShown
	   * @type {function}
	   *
	   * @description
	   * Defines is Service Agreements should be displayed
	   *
	   * @param {boolean} value
	   * @inner
	   */
	  var setServiceAgreementsShown = function setServiceAgreementsShown(value) {
	    return Object.assign(viewModel.state, { showServiceAgreements: value });
	  };
	
	  /**
	   * @name ViewModel#setLegalEntitiesDisabled
	   * @type {function}
	   *
	   * @description
	   * Defines is Legal Entity should be disabled
	   *
	   * @param {boolean} value
	   * @inner
	   */
	  var setLegalEntitiesDisabled = function setLegalEntitiesDisabled(value) {
	    return Object.assign(viewModel.state, { disableLegalEntities: value });
	  };
	
	  /**
	   * @name ViewModel#hasMoreServiceAgreements
	   * @type {function}
	   *
	   * @description
	   * Define if there are more Service Agreements available
	   *
	   * @param {number} totalItems Amount of all matched items
	   * @inner
	   */
	  var hasMoreServiceAgreements = function hasMoreServiceAgreements(totalItems) {
	    viewModel.state.serviceAgreements.totalItems = totalItems;
	
	    viewModel.state.serviceAgreements.hasMore = viewModel.state.serviceAgreements.rawItems.length < totalItems;
	  };
	
	  /**
	   * @name ViewModel#appendServiceAgreements
	   * @type {function}
	   *
	   * @description
	   * Append new results to the existing ones
	   *
	   * @param {array} raw Array of new Service Agreements
	   */
	  var appendServiceAgreements = function appendServiceAgreements(raw) {
	    viewModel.state.serviceAgreements.rawItems = append(raw.data, viewModel.state.serviceAgreements.rawItems);
	    hasMoreServiceAgreements(raw.totalItems);
	
	    if (raw.totalItems > 1) {
	      setServiceAgreementsShown(true);
	    }
	  };
	
	  /**
	   * @name ViewModel#getServiceAgreements
	   * @type {function}
	   *
	   * @description
	   * Get result list and state
	   *
	   * @returns {object}
	   */
	  var getServiceAgreements = function getServiceAgreements() {
	    return {
	      data: viewModel.state.serviceAgreements.rawItems,
	      totalItems: viewModel.state.serviceAgreements.totalItems,
	      hasMore: viewModel.state.serviceAgreements.hasMore
	    };
	  };
	
	  /**
	   * @name ViewModel#resetServiceAgreements
	   * @type {function}
	   *
	   * @description
	   * Clear Service Agreements array and reset state to initial
	   *
	   * @param {?boolean} resetLegalEntity Is selected Legal Entity should be reset
	   */
	  var resetServiceAgreements = function resetServiceAgreements() {
	    var resetLegalEntity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	    viewModel.state.serviceAgreements = {
	      rawItems: [],
	      totalItems: 0,
	      hasMore: false
	    };
	
	    if (resetLegalEntity) {
	      setLegalEntitiesDisabled(true);
	      setLegalEntity();
	    }
	  };
	
	  /**
	   * @name ViewModel#hasMoreLegalEntities
	   * @type {function}
	   *
	   * @description
	   * Define if there are more Legal Entities available
	   *
	   * @param {number} totalItems Amount of all matched items
	   * @inner
	   */
	  var hasMoreLegalEntities = function hasMoreLegalEntities(totalItems) {
	    viewModel.state.legalEntities.totalItems = totalItems;
	
	    viewModel.state.legalEntities.hasMore = viewModel.state.legalEntities.rawItems.length < totalItems;
	  };
	
	  /**
	   * @name ViewModel#appendLegalEntities
	   * @type {function}
	   *
	   * @description
	   * Append new results to the existing ones
	   *
	   * @param {array} raw Array of new Legal Entities
	   */
	  var appendLegalEntities = function appendLegalEntities(raw) {
	    viewModel.state.legalEntities.rawItems = append(raw.data, viewModel.state.legalEntities.rawItems);
	    hasMoreLegalEntities(raw.totalItems);
	
	    setLegalEntitiesDisabled(false);
	  };
	
	  /**
	   * @name ViewModel#getLegalEntities
	   * @type {function}
	   *
	   * @description
	   * Get result list and state
	   *
	   * @returns {object}
	   */
	  var getLegalEntities = function getLegalEntities() {
	    return {
	      data: viewModel.state.legalEntities.rawItems,
	      totalItems: viewModel.state.legalEntities.totalItems,
	      hasMore: viewModel.state.legalEntities.hasMore
	    };
	  };
	
	  /**
	   * @name ViewModel#resetLegalEntities
	   * @type {function}
	   *
	   * @description
	   * Clear Legal Entities array and reset state to initial
	   */
	  var resetLegalEntities = function resetLegalEntities() {
	    viewModel.state.legalEntities = {
	      rawItems: [],
	      totalItems: 0,
	      hasMore: false
	    };
	  };
	
	  /**
	   * @description
	   * Returns the initial state of the view model.
	   *
	   * @name ViewModel#getInitialState
	   * @type {function}
	   *
	   * @returns {SelectContextView}
	   * @inner
	   */
	  var getInitialState = function getInitialState() {
	    return {
	      serviceAgreements: {
	        rawItems: [],
	        hasMore: false
	      },
	      legalEntities: {
	        rawItems: [],
	        hasMore: false
	      },
	      serviceAgreementId: null,
	      legalEntityId: null,
	      showServiceAgreements: false,
	      disableLegalEntities: true
	    };
	  };
	
	  Object.assign(viewModel, {
	    state: getInitialState(),
	
	    getServiceAgreementId: getServiceAgreementId,
	    getServiceAgreementName: getServiceAgreementName,
	    getLegalEntityId: getLegalEntityId,
	    getLegalEntityName: getLegalEntityName,
	
	    isServiceAgreementsShown: isServiceAgreementsShown,
	    isLegalEntitiesDisabled: isLegalEntitiesDisabled,
	
	    setServiceAgreement: setServiceAgreement,
	    setLegalEntity: setLegalEntity,
	    setServiceAgreementsShown: setServiceAgreementsShown,
	    setLegalEntitiesDisabled: setLegalEntitiesDisabled,
	
	    appendServiceAgreements: appendServiceAgreements,
	    getServiceAgreements: getServiceAgreements,
	
	    appendLegalEntities: appendLegalEntities,
	    getLegalEntities: getLegalEntities,
	
	    resetServiceAgreements: resetServiceAgreements,
	    resetLegalEntities: resetLegalEntities
	  });
	
	  return viewModel;
	};

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/* global document */
	
	/**
	 * @name default-hooks
	 * @type {object}
	 *
	 * @description
	 * Default hooks for widget-bb-select-context-ng
	 */
	
	/**
	 * @name default-hooks#setCookie
	 * @type {function}
	 *
	 * @description
	 * Save cookie
	 *
	 * @param {string} name Cookie name
	 * @param {*} value     Cookie value
	 * @param {number} days Cookie TTL (days)
	 */
	var setCookie = exports.setCookie = function setCookie(name, value) {
	  var days = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;
	
	  var date = new Date();
	  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	  document.cookie = name + '=' + JSON.stringify(value) + '; expires=' + date.toGMTString() + '; path=/';
	};
	
	/**
	 * @name default-hooks#setCookie
	 * @type {function}
	 *
	 * @description
	 * Read context preferences from cookies
	 *
	 * @param {string} name Cookie name
	 * @return {*}
	 */
	var getCookie = exports.getCookie = function getCookie(name) {
	  return document.cookie.split('; ').reduce(function (cookies, cookie) {
	    var _cookie$split = cookie.split('='),
	        _cookie$split2 = _slicedToArray(_cookie$split, 2),
	        key = _cookie$split2[0],
	        value = _cookie$split2[1];
	
	    return Object.assign(cookies, _defineProperty({}, key, decodeURIComponent(value)));
	  }, {})[name] || null;
	};
	
	/**
	 * @name default-hooks#processPortalObject
	 * @type {function}
	 * @deprecated
	 *
	 * @description
	 * Processes object retrieved from portal global object
	 *
	 * @param {Portal} portal portal data
	 * @returns {User} Processed data
	 */
	var processPortalObject = exports.processPortalObject = function processPortalObject(portal) {
	  // eslint-disable-next-line max-len, no-console
	  console.warn('DEPRECATED - processPortalObject method will be removed in the next component major release. Use \'processProfileData\' method instead.');
	  return { name: portal.loggedInUserId };
	};
	
	/**
	 * @name default-hooks#processProfileData
	 * @type {function}
	 *
	 * @description
	 * Processes user data retrieved from user profile endpoint
	 *
	 * @param {User} user User data
	 * @returns {User} Processed data
	 */
	var processProfileData = exports.processProfileData = function processProfileData(user) {
	  return user;
	};

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = SelectContextController;
	
	var _constants = __webpack_require__(73);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name SelectContextController
	 * @type {object}
	 *
	 * @description
	 * Select Context widget
	 */
	function SelectContextController(contextModel, userDataService, widgetInstance, viewModel, hooks, $window) {
	  var $ctrl = this;
	  var portal = window.b$ && window.b$.portal;
	
	  var selectContextRedirectPage = widgetInstance.getStringPreference(_constants2.default.SELECT_CONTEXT_REDIRECT_PAGE);
	  var logoutRedirectPage = widgetInstance.getStringPreference(_constants2.default.LOGOUT_REDIRECT_PAGE);
	  var cookieTTL = widgetInstance.getStringPreference(_constants2.default.REMEMBER_PREFERENCES_TTL);
	  var listSize = widgetInstance.getLongPreference(_constants2.default.LIST_SIZE) || _constants.DEFAULT_LIST_SIZE;
	
	  var selectContextRedirectUrl = portal ? portal.config.serverRoot + '/' + portal.portalName + '/' + selectContextRedirectPage : selectContextRedirectPage;
	
	  var logoutRedirectUrl = portal ? portal.config.serverRoot + '/' + portal.portalName + '/' + logoutRedirectPage : logoutRedirectPage;
	
	  // Check if User Context selector should be shown
	  $ctrl.showContextSelector = false;
	  $ctrl.debounce = _constants.DEBOUNCE_TIME;
	
	  var from = {
	    sa: 0,
	    le: 0
	  };
	
	  /**
	   * @name getUserFromPortal
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Retrieves information about currently logged in user from CX endpoint or CXP global object
	   *
	   * @returns {Promise}
	   */
	  var getUserFromPortal = function getUserFromPortal() {
	    return userDataService.getUserData().then(function (userData) {
	      $ctrl.currentUser = hooks.processProfileData(userData);
	    });
	  };
	
	  /**
	   * @name SelectContextController#resetServiceAgreements
	   * @type {function}
	   *
	   * @desription
	   * Clear Service Agreement selector and reset Legal Entities list
	   *
	   * @param {?boolean} resetLegalEntity Is selected Legal Entity should be reset
	   */
	  var resetServiceAgreements = function resetServiceAgreements() {
	    var resetLegalEntity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	    viewModel.resetServiceAgreements(resetLegalEntity);
	    from.sa = 0;
	  };
	
	  /**
	   * @name SelectContextController#resetLegalEntities
	   * @type {function}
	   *
	   * @inner
	   *
	   * @desription
	   * Clear Legal Entities selector
	   */
	  var resetLegalEntities = function resetLegalEntities() {
	    viewModel.resetLegalEntities();
	    from.le = 0;
	  };
	
	  /**
	   * @name  SelectContextController#selectUserContext
	   * @type {function}
	   *
	   * @description
	   * Select user context by Service Agreemenet and Legal Entity IDs combination
	   *
	   * @param {string} serviceAgreementId
	   * @param {string} legalEntityId
	   * @return {Promise}
	   */
	  var selectUserContext = function selectUserContext(serviceAgreementId, legalEntityId) {
	    $ctrl.loading = true;
	    return contextModel.selectUserContext(serviceAgreementId, legalEntityId).then(function (isSuccess) {
	      $ctrl.loading = false;
	      if (isSuccess) {
	        // TODO: Enable "Remember me" functionality when service is ready
	        // if ($ctrl.savePreferences) {
	        //   hooks.setCookie(contextCookieNames.REMEMBER_ME_COOKIE_NAME, true, cookieTTL);
	        // } else {
	        //   hooks.setCookie(contextCookieNames.REMEMBER_ME_COOKIE_NAME, false, 0);
	        // }
	
	        hooks.setCookie(_constants.contextCookieNames.CONTEXT_NAMES, { contract: viewModel.getServiceAgreementName(),
	          company: viewModel.getLegalEntityName() }, cookieTTL);
	
	        $window.location.assign(selectContextRedirectUrl);
	      } else {
	        return Promise.reject('Failed while creating a User Context');
	      }
	
	      return isSuccess;
	    }).catch(function () {
	      $ctrl.loading = false;
	      $ctrl.selectContextError = true;
	    });
	  };
	
	  /**
	   * @name SelectContextController#getLegalEntities
	   * @type {function}
	   *
	   * @description
	   * Request Legal Entities list by Service Agreement ID and searched name
	   *
	   * @param {string} id                                   Service Agreement ID
	   * @param  {object} options                             Params to send to the request
	   * @returns {Promise.<ServiceAgreements, ModelError>}   A Promise
	   */
	  var getLegalEntities = function getLegalEntities(id) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    if (!options.isLoadMore) {
	      resetLegalEntities();
	    }
	
	    var requestParams = { from: from.le, size: listSize, query: options.searchQuery };
	    return contextModel.getLegalEntities(viewModel.getServiceAgreementId(), requestParams).then(function (resp) {
	      $ctrl.loading = false;
	      viewModel.appendLegalEntities(resp);
	
	      if (resp.totalItems === 1 && !options.searchQuery) {
	        viewModel.setLegalEntity(resp.data[0].id, resp.data[0].name);
	        // There are single available Service Agreement and Legal Entity options
	        if (viewModel.getServiceAgreementId() && options.autoSelect) {
	          selectUserContext(viewModel.getServiceAgreementId(), viewModel.getLegalEntityId());
	        }
	      } else {
	        $ctrl.showContextSelector = true;
	      }
	
	      from.le++;
	      return viewModel.getLegalEntities();
	    }).catch(function () {
	      from.le--;
	      $ctrl.loading = false;
	      $ctrl.fetchError = true;
	    });
	  };
	
	  /**
	   * @name  SelectContextController#selectServiceAgreement
	   * @type {function}
	   *
	   * @description
	   * Define Service Agreement ID and request Legal Entities list for it
	   *
	   * @param {object} model        Service Agreement item
	   * @param {boolean} autoSelect  Select user context automatically
	   */
	  var selectServiceAgreement = function selectServiceAgreement(_ref) {
	    var id = _ref.id,
	        name = _ref.name;
	    var autoSelect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	    from.le = 0;
	    viewModel.setServiceAgreement(id, name);
	    return getLegalEntities(id, { autoSelect: autoSelect });
	  };
	
	  /**
	   * @name  SelectContextController#selectLegalEntity
	   * @type {function}
	   *
	   * @description
	   * Define Legal Entity ID
	   *
	   * @param {object} model Legal Entity item
	   */
	  var selectLegalEntity = function selectLegalEntity(_ref2) {
	    var id = _ref2.id,
	        name = _ref2.name;
	
	    viewModel.setLegalEntity(id, name);
	  };
	
	  /**
	   * @name SelectContextController#getServiceAgreements
	   * @type {function}
	   *
	   * @description
	   * Request Service Agreements list by searched name
	   *
	   * @param  {object} options                             Params to send to the request
	   * @returns {Promise.<ServiceAgreements, ModelError>}   A Promise
	   */
	  var getServiceAgreements = function getServiceAgreements() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    if (!options.isLoadMore) {
	      resetServiceAgreements();
	    }
	
	    var requestParams = { from: from.sa, size: listSize, query: options.searchQuery };
	    return contextModel.getServiceAgreements(requestParams).then(function (resp) {
	      $ctrl.loading = false;
	      viewModel.appendServiceAgreements(resp);
	
	      from.sa++;
	      return viewModel.getServiceAgreements();
	    }).catch(function (e) {
	      from.le--;
	      $ctrl.loading = false;
	      $ctrl.fetchError = true;
	      throw e;
	    });
	  };
	
	  /**
	   * @name  SelectContextController#logout
	   * @type {function}
	   *
	   * @description
	   * Log user out and redirect to the login page
	   */
	  var logout = function logout(options) {
	    contextModel.logout().then(function () {
	      if (options && options.saError) {
	        var paramChar = logoutRedirectUrl.indexOf('?') === -1 ? '?' : '&';
	        $window.location.assign('' + logoutRedirectUrl + paramChar + 'sa-error');
	      } else {
	        $window.location.assign(logoutRedirectUrl);
	      }
	    });
	  };
	
	  // TODO: Enable "Remember me" functionality when service is ready
	  // const isUserContextRemembered = () => {
	  //   try {
	  //     return hooks.getCookie(contextCookieNames.USER_CONTEXT) &&
	  //     JSON.parse(hooks.getCookie(contextCookieNames.REMEMBER_ME_COOKIE_NAME)) === true;
	  //   } catch (error) {
	  //     return false;
	  //   }
	  // };
	
	  /**
	   * @description
	   * AngularJS Lifecycle hook used to initialize the controller
	   * @type {function}
	   *
	   * @name SelectContextController#$onInit
	   * @return {*}
	   */
	  var $onInit = function $onInit() {
	    $ctrl.loading = true;
	    // TODO: Enable "Remember me" functionality when service is ready
	    // if (isUserContextRemembered()) {
	    //   return Promise.resolve($window.location.assign(selectContextRedirectUrl));
	    // }
	    getUserFromPortal();
	    return getServiceAgreements().then(function (resp) {
	      if (resp.totalItems === 1) {
	        selectServiceAgreement(resp.data[0], true);
	      } else {
	        $ctrl.showContextSelector = true;
	      }
	    }).catch(function () {
	      logout({ saError: true });
	    });
	  };
	
	  Object.defineProperty($ctrl, 'state', {
	    get: function get() {
	      return viewModel.state;
	    }
	  });
	
	  Object.assign($ctrl, {
	    getServiceAgreements: getServiceAgreements,
	    getLegalEntities: getLegalEntities,
	    selectServiceAgreement: selectServiceAgreement,
	    selectLegalEntity: selectLegalEntity,
	    selectUserContext: selectUserContext,
	    resetServiceAgreements: resetServiceAgreements,
	    logout: logout,
	    $onInit: $onInit
	  });
	} /* global window */

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Context selection page redirection keys
	 * @type {Object}
	 */
	exports.default = {
	  SELECT_CONTEXT_REDIRECT_PAGE: 'selectContextRedirectPage',
	  LOGOUT_REDIRECT_PAGE: 'logoutRedirectPage',
	  REMEMBER_PREFERENCES_TTL: 'rememberPreferencesTTL',
	  LIST_SIZE: 'listSize'
	};
	
	/**
	 * User context cookie names
	 * @type {{REMEMBER_ME_COOKIE_NAME: string, USER_CONTEXT: string, CONTEXT_NAMES: string}}
	 */
	
	var contextCookieNames = exports.contextCookieNames = {
	  REMEMBER_ME_COOKIE_NAME: 'REMEMBER_USER_CONTEXT',
	  USER_CONTEXT: 'USER_CONTEXT',
	  CONTEXT_NAMES: 'context-names'
	};
	
	/**
	 * Amount of items on autocomplete scroll
	 * @type {number}
	 */
	var DEFAULT_LIST_SIZE = exports.DEFAULT_LIST_SIZE = 7;
	
	/**
	 * Debounce time on autocomplete
	 * @type {number}
	 */
	var DEBOUNCE_TIME = exports.DEBOUNCE_TIME = 300;

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-select-context-ng.js.map