(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-event-bus"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-event-bus-ng", ["vendor-bb-angular", "lib-bb-event-bus"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-event-bus-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-event-bus"));
	else
		root["lib-bb-event-bus-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-event-bus"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_15__) {
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

	module.exports = __webpack_require__(14);

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.eventBusKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(5);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbEventBus = __webpack_require__(15);
	
	var _libBbEventBus2 = _interopRequireDefault(_libBbEventBus);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module lib-bb-event-bus-ng
	 *
	 * @description Event bus module, angular wrapper around CXP's gadgets.pubsub.
	 *
	 * @example
	 * import bbEventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';
	 *
	 * angular.module('MyModule', [bbEventBusModuleKey])
	 *   .controller('Controller1', [eventBusKey, (eventBus) => ({
	 *     $onInit: () => {
	 *       eventBus.publish('example.event', { msg: 'Hello' });
	 *     },
	 *   })])
	 *   .controller('Controller2', [eventBusKey, (eventBus) => ({
	 *     $onInit: () => {
	 *       eventBus.subscribe('example.event', ({ msg }) => {
	 *         console.log(`Controller 1 says ${msg}`);
	 *       });
	 *     },
	 *   })])
	 */
	
	var moduleKey = 'lib-bb-event-bus';
	/**
	 * @name eventBusKey
	 * @type {string}
	 * @description Injector name of [EventBus](#EventBus) instance
	 */
	var eventBusKey = exports.eventBusKey = 'lib-bb-event-bus:eventBus';
	
	/**
	 * Checks the current phase before executing the function
	 * @inner
	 * @param scope - angular scope
	 * @returns {function(*=)}
	 */
	var safeApply = function safeApply(scope, fn) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var phase = scope.$root.$$phase;
	    if (phase === '$apply' || phase === '$digest') {
	      if (fn && typeof fn === 'function') {
	        fn.apply(undefined, args);
	      }
	    } else {
	      scope.$apply(function () {
	        return fn.apply(undefined, args);
	      });
	    }
	  };
	};
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module(moduleKey, [])
	
	/**
	 * @name EventBusProvider
	 * @type {object}
	 */
	.provider(eventBusKey, [function () {
	  var widget = undefined;
	
	  return {
	    /**
	     * @name EventBusProvider#setWidget
	     * @type {function}
	     * @param {Object} portalWidget portal client widget instance (a.k.a __WIDGET__)
	     * @return {void}
	     */
	    setWidget: function setWidget(widgetInstance) {
	      widget = widgetInstance;
	    },
	
	    /**
	     * @name EventBusProvider#$get
	     * @type {function}
	     * @return {EventBus} An [EventBus](#EventBus) service
	     */
	    $get: ['$rootScope', function ($rootScope) {
	      var service = (0, _libBbEventBus2.default)(widget);
	
	      var subscribe = function subscribe(topic, callback) {
	        return service.subscribe(topic, safeApply($rootScope, callback));
	      };
	
	      return {
	        subscribe: subscribe,
	        publish: service.publish
	      };
	    }]
	  };
	}]).name;

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-bb-event-bus-ng.js.map