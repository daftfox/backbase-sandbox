(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-file-size-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-file-size-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-file-size-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_19__) {
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

	module.exports = __webpack_require__(23);

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(19);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _fileSize = __webpack_require__(24);
	
	var _fileSize2 = _interopRequireDefault(_fileSize);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _vendorBbAngular2.default.module('ui-bb-file-size-ng', []).filter('fileSize', _fileSize2.default).name;

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var kiloByte = 1024;
	  /**
	   * Kilobyte, Megabyte, Gigabyte, Terabyte, Petabyte, Exabyte, Zettabyte, Yottabyte
	   */
	  var units = ['byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	
	  /**
	   * @description
	   * The filter will take a number representing bytes and will return a human
	   * readable formatted string representing the file size.
	   *
	   * @name fileSize
	   * @type {function}
	   * @param {number} size The number of bytes.
	   * @returns {string} The formatted file size.
	   *
	   * @example
	   * <span id="file-size">
	   *   {{ $ctrl.files[0].size | fileSize }}
	   * </span>
	   */
	  return function fileSize(size) {
	    var index = 0;
	    var result = isNaN(+size) ? 0 : +size;
	    var remainder = 0;
	    var fraction = 0;
	    var unit = void 0;
	
	    while (result >= kiloByte) {
	      remainder = result % kiloByte;
	      result /= kiloByte;
	      index++;
	    }
	
	    unit = units[index];
	
	    if (index > 0) {
	      result = Math.floor(result);
	      fraction = Math.round(remainder / kiloByte * 10);
	    } else if (result !== 1) {
	      unit += 's';
	    }
	
	    return '' + result + (fraction > 0 ? ',' + fraction : '') + ' ' + unit;
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-file-size-ng.js.map