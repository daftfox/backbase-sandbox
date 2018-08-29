(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("lib-bb-permissions-ng"), require("lib-bb-widget-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-create-new-ng", ["vendor-bb-angular", "lib-bb-event-bus-ng", "lib-bb-widget-extension-ng", "lib-bb-intent-ng", "lib-bb-permissions-ng", "lib-bb-widget-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-create-new-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("lib-bb-permissions-ng"), require("lib-bb-widget-ng"));
	else
		root["widget-bb-create-new-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-event-bus-ng"], root["lib-bb-widget-extension-ng"], root["lib-bb-intent-ng"], root["lib-bb-permissions-ng"], root["lib-bb-widget-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_33__, __WEBPACK_EXTERNAL_MODULE_50__, __WEBPACK_EXTERNAL_MODULE_51__, __WEBPACK_EXTERNAL_MODULE_52__, __WEBPACK_EXTERNAL_MODULE_53__) {
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

	module.exports = __webpack_require__(49);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_33__;

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(50);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbIntentNg = __webpack_require__(51);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbPermissionsNg = __webpack_require__(52);
	
	var _libBbPermissionsNg2 = _interopRequireDefault(_libBbPermissionsNg);
	
	var _libBbWidgetNg = __webpack_require__(53);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(33);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _controller = __webpack_require__(54);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(55);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bb-create-new-ng
	 *
	 * @description
	 * Redirect user to "create new" locations of other widgets
	 *
	 *
	 * @example
	 *  <div ng-controller="CreateNewController as $ctrl">
	 *  </div>
	 */
	
	var hooksKey = 'widget-bb-create-new-ng:hooks';
	
	/**
	 * @name default
	 * @type {string}
	 *
	 * @description
	 * Create New Widget
	 */
	exports.default = _vendorBbAngular2.default.module('widget-bb-create-new-ng', [_libBbWidgetNg2.default, _libBbEventBusNg2.default, _libBbIntentNg2.default, _libBbPermissionsNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).config([_libBbPermissionsNg.bbPermissionsKey + 'Provider', function (permissionsProvider) {
	  permissionsProvider.enableDownloadOnInit(true);
	  permissionsProvider.setCacheEnabled(false);
	}]).controller('CreateNewController', [
	// dependencies to inject
	hooksKey, _libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, _libBbIntentNg.bbIntentKey, _libBbPermissionsNg.bbPermissionsKey,
	/* into */
	_controller2.default]).run([_libBbIntentNg.bbIntentKey, function (bbIntent) {
	  bbIntent.init();
	}]).name;

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_50__;

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_51__;

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_52__;

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = CreateNewController;
	var state = {
	  actions: [],
	  isPermitted: false
	};
	
	/**
	 * @name CreateNewController
	 * @ngkey CreateNewController
	 *
	 * @type {object}
	 *
	 * @description
	 * Create new widget controller.
	 */
	function CreateNewController(hooks, bus, widget, bbIntents, permissions) {
	  /**
	   * @description
	   * List of intents allowed
	   *
	   * @inner
	   * @type {object}
	   */
	  var intentsList = {};
	
	  /**
	   * @description
	   * List of action names
	   *
	   * @inner
	   * @type {array}
	   */
	  var actionNames = void 0;
	
	  /**
	   * @description
	   * List of event names
	   *
	   * @inner
	   * @type {array}
	   */
	  var eventNames = void 0;
	
	  /**
	   * @name CreateNewController#navigateTo
	   * @type {function}
	   *
	   * @description
	   * Navigate to selected widget
	   *
	   * @param {string} action
	   * @returns {undefined}
	   */
	  var navigateTo = function navigateTo(action) {
	    intentsList[action]();
	  };
	
	  /**
	   * @name CreateNewController#getPermissions
	   * @type {Function}
	   * @inner
	   *
	   * @description
	   * Loads user permission for the extension
	   *
	   * @returns {Promise.<void>}
	   */
	  var getPermissions = function getPermissions() {
	    var privileges = hooks.getRequestedPrivileges();
	
	    return permissions.getPermissions(privileges).then(function (resp) {
	      Object.values(resp).forEach(function (res) {
	        var func = Object.values(res)[0];
	        var privs = Boolean(Object.values(func)[0]);
	
	        state.isPermitted = privs || state.isPermitted;
	      });
	    });
	  };
	
	  var $onInit = function $onInit() {
	    actionNames = hooks.getActionNames();
	    eventNames = hooks.getActionEvents();
	    getPermissions();
	
	    // Populate list with intents
	    actionNames.forEach(function (name, index) {
	      intentsList[name] = bbIntents.create(eventNames[index]);
	    });
	
	    /**
	     * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
	     * and will be removed with the update to widget collection 3 (WC3)
	     */
	    bus.publish('cxp.item.loaded', {
	      id: widget.getId()
	    });
	
	    bus.publish('bb.item.loaded', {
	      id: widget.getId()
	    });
	
	    state.actions = hooks.getActionsList();
	  };
	
	  return {
	    state: state,
	    navigateTo: navigateTo,
	    /* Lifecycle hooks */
	    $onInit: $onInit
	  };
	}

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Default hooks for widget-bb-create-new-ng
	 */
	
	/**
	 * @name Hooks#getActionsList
	 * @type {function}
	 *
	 * @description
	 * Hook for getting the list of allowed redirections
	 *
	 * @returns {array} actions
	 */
	var getActionsList = exports.getActionsList = function getActionsList() {
	  return [];
	};
	
	/**
	 * @name Hooks#getActionNames
	 * @type {function}
	 *
	 * @description
	 * Returns a list of action names allowed for a user
	 *
	 * @return {array}
	 */
	var getActionNames = exports.getActionNames = function getActionNames() {
	  return [];
	};
	
	/**
	 * @name Hooks#getActionEvents
	 * @type {function}
	 *
	 * @description
	 * Returns a list of event names
	 *
	 * @return {array}
	 */
	var getActionEvents = exports.getActionEvents = function getActionEvents() {
	  return [];
	};
	
	/**
	 * @name Hooks#getRequestedPrivileges
	 * @type {Function}
	 *
	 * @description
	 * Prepare required privileges into a form ready for template
	
	 * @returns {Array.<Object>} Required privileges array
	 */
	var getRequestedPrivileges = exports.getRequestedPrivileges = function getRequestedPrivileges() {
	  return [];
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-create-new-ng.js.map