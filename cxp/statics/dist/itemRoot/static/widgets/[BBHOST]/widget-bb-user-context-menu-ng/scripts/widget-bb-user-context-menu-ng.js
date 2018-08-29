(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("lib-bb-widget-ng"), require("lib-bb-storage-ng"), require("model-bb-login-ng"), require("lib-bb-user-data-ng"), require("model-bb-select-context-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-user-context-menu-ng", ["vendor-bb-angular", "lib-bb-widget-extension-ng", "lib-bb-intent-ng", "lib-bb-widget-ng", "lib-bb-storage-ng", "model-bb-login-ng", "lib-bb-user-data-ng", "model-bb-select-context-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-user-context-menu-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("lib-bb-widget-ng"), require("lib-bb-storage-ng"), require("model-bb-login-ng"), require("lib-bb-user-data-ng"), require("model-bb-select-context-ng"));
	else
		root["widget-bb-user-context-menu-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-extension-ng"], root["lib-bb-intent-ng"], root["lib-bb-widget-ng"], root["lib-bb-storage-ng"], root["model-bb-login-ng"], root["lib-bb-user-data-ng"], root["model-bb-select-context-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_50__, __WEBPACK_EXTERNAL_MODULE_51__, __WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_62__, __WEBPACK_EXTERNAL_MODULE_64__, __WEBPACK_EXTERNAL_MODULE_68__, __WEBPACK_EXTERNAL_MODULE_69__) {
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

	module.exports = __webpack_require__(75);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_50__;

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_51__;

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_62__;

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_64__;

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_68__;

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_69__;

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(53);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbIntentNg = __webpack_require__(51);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbUserDataNg = __webpack_require__(68);
	
	var _libBbUserDataNg2 = _interopRequireDefault(_libBbUserDataNg);
	
	var _modelBbLoginNg = __webpack_require__(64);
	
	var _modelBbLoginNg2 = _interopRequireDefault(_modelBbLoginNg);
	
	var _modelBbSelectContextNg = __webpack_require__(69);
	
	var _modelBbSelectContextNg2 = _interopRequireDefault(_modelBbSelectContextNg);
	
	var _libBbWidgetExtensionNg = __webpack_require__(50);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbStorageNg = __webpack_require__(62);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _controller = __webpack_require__(76);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(78);
	
	var _defaultHooks2 = _interopRequireDefault(_defaultHooks);
	
	var _viewModel = __webpack_require__(79);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'widget-bb-user-context-menu-ng'; /**
	                                                   * @module widget-bb-user-context-menu-ng
	                                                   *
	                                                   * @description
	                                                   * User Context Menu widget
	                                                   */
	
	var hooksKey = moduleKey + ':hooks';
	var viewModelKey = moduleKey + ':viewModel';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbWidgetNg2.default, _modelBbLoginNg2.default, _modelBbSelectContextNg2.default, _libBbIntentNg2.default, _libBbUserDataNg2.default, _libBbStorageNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(_defaultHooks2.default)).factory(viewModelKey, [_viewModel2.default]).controller('UserContextMenuController', [
	// dependencies to inject
	hooksKey, _modelBbLoginNg.modelLoginKey, _modelBbSelectContextNg.modelSelectContextKey, _libBbUserDataNg.bbUserDataServiceKey, _libBbWidgetNg.widgetKey, viewModelKey, '$window', _libBbStorageNg.bbStorageServiceKey,
	/* into */
	_controller2.default]).run([_libBbIntentNg.bbIntentKey, function (bbIntent) {
	  bbIntent.init();
	}]).name;
	
	/**
	 * @typedef {object} User
	 * @property {string} name Name that should be displayed on page
	 * @property {?string} username Internal user identifier
	 */
	
	/**
	 * @typedef {object} Portal
	 * @property {string} loggedInUserId Internally used unique identification of the user
	 */

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = UserContextMenuController;
	
	var _constants = __webpack_require__(77);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name UserContextMenuController
	 * @type {object}
	 *
	 * @description
	 * User Context Menu widget
	 */
	function UserContextMenuController(hooks, model, contextModel, userDataService, widgetInstance, viewModel, $window, bbStorage) {
	  var $ctrl = this;
	  var portal = window.b$ && window.b$.portal;
	
	  var logoutRedirectPage = widgetInstance.getStringPreference(_constants2.default.LOGOUT_REDIRECT_PAGE);
	  var userDataUrl = widgetInstance.getStringPreference(_constants2.default.USER_DATA_URL);
	  var changeContextRedirectPage = widgetInstance.getStringPreference(_constants2.default.CHANGE_CONTEXT_REDIRECT_PAGE) || _constants.DEFAULT_CHANGE_CONTEXT_REDIRECT_PAGE;
	  var cookieTTL = widgetInstance.getStringPreference(_constants2.default.REMEMBER_PREFERENCES_TTL);
	  var listSize = widgetInstance.getLongPreference(_constants2.default.LIST_SIZE) || _constants.DEFAULT_LIST_SIZE;
	
	  var changeContextRedirectUrl = portal ? portal.config.serverRoot + '/' + portal.portalName + '/' + changeContextRedirectPage : changeContextRedirectPage;
	
	  var logoutRedirectUrl = portal ? portal.config.serverRoot + '/' + portal.portalName + '/' + logoutRedirectPage : logoutRedirectPage;
	
	  $ctrl.debounce = _constants.DEBOUNCE_TIME;
	
	  var from = {
	    sa: 0,
	    le: 0
	  };
	
	  /**
	   * @name  UserContextMenuController#logout
	   * @type {function}
	   *
	   * @description
	   * Log user out and redirect to the login page
	   */
	  var logout = function logout() {
	    model.logout().then(function () {
	      bbStorage.removeItem(_constants.BbStorageKeys.PRODUCT_SUMMARY);
	      bbStorage.removeItem(_constants.BbStorageKeys.PRODUCT_SELECTED);
	      bbStorage.removeItem(_constants.BbStorageKeys.PRODUCTS_SELECTED);
	      bbStorage.removeItem(_constants.BbStorageKeys.CONTACT_SELECTED);
	    }).then(function () {
	      $window.location.assign(logoutRedirectUrl);
	    });
	  };
	
	  var loggedUser = function loggedUser() {
	    // eslint-disable-next-line max-len, no-console
	    console.warn('DEPRECATED - loggedUser method will be removed in the next component major release. Use \'currentUser\' object instead.');
	    return $ctrl.currentUser.name || '';
	  };
	
	  /**
	   * @name UserContextMenuController#getCurrentContext
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Read user's context from the cookie. Log user out if context names not found
	   */
	  var getCurrentContext = function getCurrentContext() {
	    try {
	      $ctrl.contextNames = JSON.parse(hooks.getCookie(_constants.contextCookieNames.CONTEXT_NAMES));
	    } catch (error) {
	      $ctrl.contextNames = _constants.NO_CONTEXT_NAMES;
	    }
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
	
	  var $onInit = function $onInit() {
	    getCurrentContext();
	    return getUserFromPortal();
	  };
	
	  /**
	   * @name UserContextMenuController#resetServiceAgreements
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
	   * @name UserContextMenuController#resetLegalEntities
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
	   * @name  UserContextMenuController#changeUserContext
	   * @type {function}
	   *
	   * @description
	   * Change user context by Service Agreemenet and Legal Entity IDs combination
	   *
	   * @param {string} serviceAgreementId
	   * @param {string} legalEntityId
	   * @return {Promise}
	   */
	  var changeUserContext = function changeUserContext(serviceAgreementId, legalEntityId) {
	    return contextModel.selectUserContext(serviceAgreementId, legalEntityId).then(function (isSuccess) {
	      if (isSuccess) {
	        // TODO: Enable "Remember me" functionality when service is ready
	        // if ($ctrl.savePreferences) {
	        //   hooks.setCookie(contextCookieNames.REMEMBER_ME_COOKIE_NAME, true, cookieTTL);
	        // } else {
	        //   hooks.setCookie(contextCookieNames.REMEMBER_ME_COOKIE_NAME, false, 0);
	        // }
	
	        hooks.setCookie(_constants.contextCookieNames.CONTEXT_NAMES, {
	          contract: viewModel.getServiceAgreementName(),
	          company: viewModel.getLegalEntityName()
	        }, cookieTTL);
	
	        $window.location.assign(changeContextRedirectUrl);
	      } else {
	        return Promise.reject('Failed while creating a User Context');
	      }
	
	      return isSuccess;
	    }).catch(function () {
	      $ctrl.selectContextError = true;
	    });
	  };
	
	  /**
	   * @name UserContextMenuController#getLegalEntities
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
	      viewModel.appendLegalEntities(resp);
	      if (resp.totalItems === 1 && !options.searchQuery) {
	        viewModel.setLegalEntity(resp.data[0].id, resp.data[0].name);
	      }
	
	      from.le++;
	      return viewModel.getLegalEntities();
	    }).catch(function () {
	      from.le--;
	      $ctrl.fetchError = true;
	    });
	  };
	
	  /**
	   * @name  UserContextMenuController#selectServiceAgreement
	   * @type {function}
	   *
	   * @description
	   * Define Service Agreement ID and request Legal Entities list for it
	   *
	   * @param {object} model Service Agreement item
	   */
	  var selectServiceAgreement = function selectServiceAgreement(_ref) {
	    var id = _ref.id,
	        name = _ref.name;
	
	    from.le = 0;
	    viewModel.setServiceAgreement(id, name);
	    return getLegalEntities(id);
	  };
	
	  /**
	   * @name UserContextMenuController#getServiceAgreements
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
	      viewModel.appendServiceAgreements(resp);
	
	      if (!options.isLoadMore) {
	        if (resp.data && $ctrl.contextNames.contract && !viewModel.getServiceAgreementId()) {
	          var currentServiceAgreement = resp.data.find(function (item) {
	            return item.name === $ctrl.contextNames.contract;
	          });
	          if (currentServiceAgreement) {
	            viewModel.setServiceAgreement(currentServiceAgreement.id);
	            getLegalEntities(currentServiceAgreement.id);
	          }
	        }
	      }
	
	      from.sa++;
	      return viewModel.getServiceAgreements();
	    }).catch(function () {
	      from.sa--;
	      $ctrl.fetchError = true;
	    });
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
	   * @name UserContextMenuController#togglePopover
	   * @type {function}
	   *
	   * @desription
	   * Request Service Agreements on toggle popover
	   *
	   * @returns {Promise.<ServiceAgreements, ModelError>}   A Promise
	   */
	  var togglePopover = function togglePopover() {
	    return getServiceAgreements();
	  };
	
	  Object.defineProperty($ctrl, 'state', {
	    get: function get() {
	      return viewModel.state;
	    }
	  });
	
	  Object.assign($ctrl, {
	    /**
	     * @description AngularJS Lifecycle hook used to initialize the controller
	     * @type {function}
	     *
	     * @name UserContextMenuController#$onInit
	     * @returns {Promise.<void>}
	     */
	    $onInit: $onInit,
	    /**
	     * @description Logout function
	     * @type {function}
	     *
	     * @name UserContextMenuController#logout
	     * @returns {Promise}
	     */
	    logout: logout,
	    /**
	     * @description Currently logged in user's data object
	     * @name UserContextMenuController#currentUser
	     * @type {User}
	     */
	    currentUser: {},
	    /**
	     * @description Retrieves logged in user id
	     * Returns empty string if user is not found (deprecated)
	     * @type {function}
	     *
	     * @name UserContextMenuController#loggedUser
	     * @returns {string}
	     */
	    loggedUser: loggedUser,
	    /**
	     * @description URL that leads to the page with additional user data
	     * @name UserContextMenuController#userDataUrl
	     * @type {string}
	     */
	    userDataUrl: userDataUrl,
	    /**
	     * @description Request available Service Agreements
	     * @type {function}
	     *
	     * @name UserContextMenuController#getServiceAgreements
	     * @returns {Promise}
	     */
	    getServiceAgreements: getServiceAgreements,
	    /**
	     * @description Request available Legal Entities
	     * @type {function}
	     *
	     * @name UserContextMenuController#getLegalEntities
	     * @returns {Promise}
	     */
	    getLegalEntities: getLegalEntities,
	    /**
	     * @description Select Service Agreement and request available Legal Entities
	     * @type {function}
	     *
	     * @name UserContextMenuController#selectServiceAgreement
	     * @returns {Promise}
	     */
	    selectServiceAgreement: selectServiceAgreement,
	    /**
	     * @description Select Legal Entity
	     * @type {function}
	     *
	     * @name UserContextMenuController#selectLegalEntity
	     * @returns {Promise}
	     */
	    selectLegalEntity: selectLegalEntity,
	    /**
	     * @description Change User Context by specifying new combination of
	     * User Agreement and Legal Entity
	     * @type {function}
	     *
	     * @name UserContextMenuController#changeUserContext
	     * @returns {Promise}
	     */
	    changeUserContext: changeUserContext,
	    /**
	     * @description Show change User Context form
	     * @type {function}
	     *
	     * @name UserContextMenuController#togglePopover
	     * @returns {Promise}
	     */
	    togglePopover: togglePopover,
	    /**
	     * @description Clear selected Service Agreement and Legal Entities list
	     * @type {function}
	     *
	     * @name UserContextMenuController#resetServiceAgreements
	     * @returns {Promise}
	     */
	    resetServiceAgreements: resetServiceAgreements
	  });
	} /* global window */

/***/ }),

/***/ 77:
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
	  CHANGE_CONTEXT_REDIRECT_PAGE: 'changeContextRedirectPage',
	  LOGOUT_REDIRECT_PAGE: 'logoutRedirectPage',
	  REMEMBER_PREFERENCES_TTL: 'rememberPreferencesTTL',
	  USER_DATA_URL: 'userDataUrl',
	  LIST_SIZE: 'listSize'
	};
	
	/**
	 * User context cookie names
	 * @type {{REMEMBER_ME_COOKIE_NAME: string, CONTEXT_NAMES: string}}
	 */
	
	var contextCookieNames = exports.contextCookieNames = {
	  REMEMBER_ME_COOKIE_NAME: 'REMEMBER_USER_CONTEXT',
	  CONTEXT_NAMES: 'context-names'
	};
	
	/**
	 * Amount of items on autocomplete scroll
	 * @type {number}
	 */
	var DEFAULT_LIST_SIZE = exports.DEFAULT_LIST_SIZE = 7;
	
	/**
	 * Default change context redirect page
	 * @type {string}
	 */
	var DEFAULT_CHANGE_CONTEXT_REDIRECT_PAGE = exports.DEFAULT_CHANGE_CONTEXT_REDIRECT_PAGE = 'index';
	
	/**
	 * Debounce time on autocomplete
	 * @type {number}
	 */
	var DEBOUNCE_TIME = exports.DEBOUNCE_TIME = 300;
	
	/**
	 * Default empty values for context names
	 * @type {object}
	 */
	var NO_CONTEXT_NAMES = exports.NO_CONTEXT_NAMES = { contract: ' ', company: ' ' };
	
	/**
	 * @name BbStorageKeys
	 *
	 * @description
	 * bbStorage keys enum.
	 *
	 * @type {object}
	 */
	var BbStorageKeys = exports.BbStorageKeys = {
	  PRODUCT_SUMMARY: 'bb.product.summary.data',
	  PRODUCT_SELECTED: 'bb.product.selected',
	  PRODUCTS_SELECTED: 'bb.event.products.selected',
	  CONTACT_SELECTED: 'bb.contact.selected'
	};

/***/ }),

/***/ 78:
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
	 * Default hooks for widget-bb-user-context-menu-ng
	 */
	
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
	var processProfileData = function processProfileData(user) {
	  return user;
	};
	
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
	 * @name default-hooks#getCookie
	 * @type {function}
	 *
	 * @description
	 * Read cookies
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
	
	exports.default = {
	  processProfileData: processProfileData,
	  setCookie: setCookie,
	  getCookie: getCookie
	};

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * @name ViewModel
	 * @type {object}
	 *
	 * @description
	 * View model for widget-bb-user-context-menu-ng
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
	   * @param {array} newItems      Array of new items
	   * @param {array} existingItems Array of existing items to append to
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
	  var setLegalEntity = function setLegalEntity() {
	    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
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
	
	    if (raw.totalItems > 1) {
	      setLegalEntitiesDisabled(false);
	    }
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

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-user-context-menu-ng.js.map