(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("lib-wm-portfolio-view-model-helper", [], factory);
	else if(typeof exports === 'object')
		exports["lib-wm-portfolio-view-model-helper"] = factory();
	else
		root["lib-wm-portfolio-view-model-helper"] = factory();
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

	module.exports = __webpack_require__(89);

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var isObject = function isObject(obj) {
	  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null;
	};
	var isArray = function isArray(arr) {
	  return Array.isArray(arr);
	};
	var isDate = function isDate(date) {
	  return date instanceof Date;
	};
	
	/**
	 * @name mergeStatesFields
	 * @description Decides how initial state field and new state field should be merged
	 *
	 * @private
	 * @type {function}
	 * @param {object | number | string} initialStateField
	 * @param {object | number | string} stateChunkField
	 * @param {function} mergeStatesFn
	 * @return {object}
	 */
	var mergeStatesFields = function mergeStatesFields(initialState, stateChunk, key, mergeStatesFn) {
	  if (!(key in stateChunk)) {
	    return initialState[key];
	  } else if (isObject(stateChunk[key]) && isObject(initialState[key]) && !isArray(stateChunk[key]) && !isArray(initialState[key]) && !isDate(stateChunk[key]) && !isDate(initialState[key])) {
	    return mergeStatesFn(initialState[key], stateChunk[key]);
	  }
	  return stateChunk[key];
	};
	
	/**
	 * @name mergeStates
	 * @description Merges state chunk into current state returning
	 *              new object (does not modify passed state)
	 *
	 * @public
	 * @type {function}
	 * @param {object} currentState
	 * @param {object} stateChunk
	 * @return {object}
	 */
	var mergeStates = exports.mergeStates = function mergeStates(currentState, stateChunk) {
	  if (!currentState) {
	    return stateChunk;
	  }
	
	  var keysSet = new Set(Object.keys(currentState).concat(Object.keys(stateChunk)));
	
	  return [].concat(_toConsumableArray(keysSet)).reduce(function (newState, key) {
	    return Object.assign({}, newState, _defineProperty({}, key, mergeStatesFields(currentState, stateChunk, key, mergeStates)));
	  }, {});
	};
	
	/**
	 * @name wrapActions
	 * @description Wraps action into stateContainer`s createAction
	 *              and merges result of action with current state.
	 *              Does not modify current state, but returns new object.
	 *              Allows to simplify store reducers, taking care
	 *              about merging new and previous states.
	 *
	 * @public
	 * @type {function}
	 * @param {StateContainer} stateContainer State container
	 * @param {object} action action to wrap
	 * @return {object} action wrapped with stateContainer`s createAction
	 */
	var wrapAction = exports.wrapAction = function wrapAction(stateContainer, action) {
	  return stateContainer.createAction(function (state) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    return mergeStates(state, action.apply(undefined, [state].concat(args)));
	  });
	};
	
	/**
	 * @name wrapActions
	 * @description Loops through methods on view model and wrap them
	 *              into stateContainer`s createAction and merges their result into new state.
	 *              Allows to simplify store reducers, taking care
	 *              about merging new and previous states.
	 *
	 * @public
	 * @type {function}
	 * @param {StateContainer} stateContainer State container
	 * @param {object} viewModel Object containing store reducers to wrap
	 * @return {object} viewModel with methods wrapped with stateContainer`s createAction
	 */
	var wrapActions = exports.wrapActions = function wrapActions(stateContainer, viewModel) {
	  return Object.keys(viewModel).reduce(function (vm, key) {
	    return Object.assign(vm, _defineProperty({}, key, wrapAction(stateContainer, viewModel[key])));
	  }, {});
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-wm-portfolio-view-model-helper.js.map