(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("lib-wm-compose-selectors", [], factory);
	else if(typeof exports === 'object')
		exports["lib-wm-compose-selectors"] = factory();
	else
		root["lib-wm-compose-selectors"] = factory();
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
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(80);

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// The code below is taken from https://github.com/reactjs/reselect library.
	// It was simplified, unneeded features were removed.
	
	/**
	 * @name areArgumentsShallowlyEqual
	 * @description Compares previous and current arguments by references
	 * @inner
	 * @type {function}
	 * @param {Array | null} prev Previous arguments
	 * @param {Array | null} next Current arguments
	 * @returns {boolean} Whether previous and current arguments equal by reference
	 */
	function areArgumentsShallowlyEqual(prev, next) {
	  if (prev === null || next === null || prev.length !== next.length) {
	    return false;
	  }
	
	  // In case the main selector is invoked without arguments.
	  // Yeah, we support not pure functions as selectors to compose from...
	  // Todo: remove this code, when library will be merged into stateContainer
	  if (!prev.length && !next.length) {
	    return false;
	  }
	
	  // Do this in a for loop (and not a `forEach` or an `every`)
	  // so we can determine equality as fast as possible.
	  var length = prev.length;
	  for (var i = 0; i < length; i++) {
	    if (prev[i] !== next[i]) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	/**
	 * @name memoize
	 * @type {function}
	 * @description Wrap functions and allows to memoize its result by arguments
	 * @inner
	 * @param {function} func Function to wrap to allow
	 * @returns {Function} wrapper of passed function with memoization skill
	 */
	function memoize(func) {
	  var lastArgs = null;
	  var lastResult = null;
	  // we reference arguments instead of spreading them for performance reasons
	  return function () {
	    // eslint-disable-next-line prefer-rest-params
	    if (!areArgumentsShallowlyEqual(lastArgs, arguments)) {
	      // apply arguments instead of spreading for performance.
	      // eslint-disable-next-line prefer-rest-params
	      lastResult = func.apply(null, arguments);
	    }
	
	    // eslint-disable-next-line prefer-rest-params
	    lastArgs = arguments;
	    return lastResult;
	  };
	}
	
	/**
	 * @name composeSelectors
	 * @type {function}
	 * @inner
	 * @description Function composing selectors into one
	 * @param funcs Functions to compose selectors from.
	 *        The last function is the result function of selector,
	 *        on selector invocation it will be invoked with
	 *        all previous functions` results as arguments
	 * @returns {Function} Selector function
	 */
	var composeSelectors = function composeSelectors() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  var resultFunc = funcs.pop();
	  var dependencies = funcs;
	
	  var memoizedResultFunc = memoize(resultFunc);
	
	  // If a selector is called with the exact same arguments
	  // we don't need to traverse our dependencies again.
	  return memoize(function () {
	    var params = [];
	    var length = dependencies.length;
	
	    for (var i = 0; i < length; i++) {
	      // apply arguments instead of spreading and mutate a local list of params for performance.
	      // eslint-disable-next-line prefer-rest-params
	      params.push(dependencies[i].apply(null, arguments));
	    }
	
	    // apply arguments instead of spreading for performance.
	    return memoizedResultFunc.apply(null, params);
	  });
	};
	
	exports.default = composeSelectors;

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-wm-compose-selectors.js.map