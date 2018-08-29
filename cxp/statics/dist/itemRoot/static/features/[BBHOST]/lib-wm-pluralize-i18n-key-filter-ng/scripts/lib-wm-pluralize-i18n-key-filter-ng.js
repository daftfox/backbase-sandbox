(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("lib-wm-pluralize-i18n-key-filter-ng", [], factory);
	else if(typeof exports === 'object')
		exports["lib-wm-pluralize-i18n-key-filter-ng"] = factory();
	else
		root["lib-wm-pluralize-i18n-key-filter-ng"] = factory();
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

	module.exports = __webpack_require__(81);

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _pluralizeFilter = __webpack_require__(82);
	
	var _pluralizeFilter2 = _interopRequireDefault(_pluralizeFilter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'ui-wm-pluralize-filter-module'; /* global angular */
	exports.default = angular.module(moduleKey, []).filter('i18nPluralize', [_pluralizeFilter2.default]).name;

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = PluralizeFilter;
	function PluralizeFilter() {
	  return function (i18nKey, itemsNumber) {
	    var suffix = itemsNumber === 1 ? 'single' : 'plural';
	    return i18nKey + '.' + suffix;
	  };
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-wm-pluralize-i18n-key-filter-ng.js.map