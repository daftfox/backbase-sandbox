(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib-bb-styles"));
	else if(typeof define === 'function' && define.amd)
		define("lib-wm-colorset", ["lib-bb-styles"], factory);
	else if(typeof exports === 'object')
		exports["lib-wm-colorset"] = factory(require("lib-bb-styles"));
	else
		root["lib-wm-colorset"] = factory(root["lib-bb-styles"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_15__) {
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

	module.exports = __webpack_require__(79);

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getColorClassByIndex = exports.getColorByIndex = exports.getColorset = undefined;
	
	var _libBbStyles = __webpack_require__(15);
	
	var _libBbStyles2 = _interopRequireDefault(_libBbStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var colors = [].concat(_toConsumableArray(Array(20))).map(function (_, index) {
	  return (0, _libBbStyles2.default)('.chart-color-' + (index + 1), 'color');
	});
	
	/**
	 * @description
	 * Gets colors for given length of data
	 *
	 * @public
	 * @name getColorset
	 * @type {function}
	 * @param {number} length Length of data
	 * @returns {string[]} Array of colors
	 */
	var getColorset = exports.getColorset = function getColorset() {
	  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : colors.length;
	  return [].concat(_toConsumableArray(Array(length))).map(function (_, index) {
	    return colors[index % colors.length];
	  });
	};
	
	/**
	 * @description
	 * Gets color from colorset for given data index
	 *
	 * @public
	 * @type {function}
	 * @name getColorByIndex
	 * @param {number} index Index of data item
	 * @returns {string} Color for given index
	 */
	var getColorByIndex = exports.getColorByIndex = function getColorByIndex(index) {
	  return colors[index % colors.length];
	};
	
	/**
	 * @description
	 * Gets class with color for given data index
	 *
	 * @public
	 * @type {function}
	 * @name getColorClassByIndex
	 * @param {number} index Index of data item
	 * @returns {string} Class with color for given index
	 */
	var getColorClassByIndex = exports.getColorClassByIndex = function getColorClassByIndex(index) {
	  return 'chart-color-' + index % colors.length;
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-wm-colorset.js.map