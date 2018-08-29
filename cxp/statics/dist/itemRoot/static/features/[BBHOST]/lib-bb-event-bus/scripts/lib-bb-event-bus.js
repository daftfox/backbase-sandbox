(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-event-bus", [], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-event-bus"] = factory();
	else
		root["lib-bb-event-bus"] = factory();
})(this, function() {
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

	module.exports = __webpack_require__(11);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _eventBus = __webpack_require__(12);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_eventBus).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _detectBus = __webpack_require__(13);
	
	var _detectBus2 = _interopRequireDefault(_detectBus);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module lib-bb-event-bus
	 *
	 * @description Event bus module, wrapper around CXP's gadgets.pubsub.
	 */
	exports.default = function (widget) {
	  var events = (0, _detectBus2.default)(window, widget);
	  if (!events) {
	    throw new Error('pubsub is not available.');
	  }
	
	  /**
	   * @name EventBus
	   * @type {object}
	   * @description
	   */
	  var eventBus = {
	    /**
	     * @name EventBus#publish
	     * @type {function}
	     * @description Publish an event to the bus. Any subscribers should be notified
	     * @param {string} topic The name of the event, this value is needed to subscribe
	     * @param {any} payload The data payload to provide additional context to the event
	     *
	     * @example
	     * bbEventBus
	     *  .publish('test', {})
	     */
	    publish: function publish(topic, payload) {
	      return events.publish(topic, payload);
	    },
	
	    /**
	     * @name EventBus#subscribe
	     * @type {function}
	     * @description Subscribe to be notified when an event on the same topic event is `publish`ed.
	     * The callback will trigger an angular digest.
	     *
	     * @param {string} topic
	     * @param {Callback} callback To be called when an event is published on the same topic
	     * @return {Subscription}
	     *
	     * @example
	     * bbEventBus
	     *  .subscribe('test', function(){
	     *    console.log('event')
	     *  })
	     */
	    subscribe: function subscribe(topic, callback) {
	      var subscription = events.subscribe(topic, callback);
	
	      if (subscription && subscription.unsubscribe) {
	        return subscription.unsubscribe.bind(subscription);
	      }
	
	      return function () {
	        return events.unsubscribe(topic, callback);
	      };
	    }
	  };
	  return eventBus;
	};
	
	/**
	 * @typedef Callback
	 * @type {function}
	 * @param {any} payload The data payload that was `publish`ed with the event
	 * @returns {void}
	 */
	
	/**
	 * @typedef Subscription
	 * @type {Object}
	 * @property {function} unsubscribe The function to unsubscribe the subscription
	 */
	/* global window */

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (global, widget) {
	  return widget && widget.features && widget.features.pubsub || global && global.gadgets && global.gadgets.pubsub;
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=lib-bb-event-bus.js.map