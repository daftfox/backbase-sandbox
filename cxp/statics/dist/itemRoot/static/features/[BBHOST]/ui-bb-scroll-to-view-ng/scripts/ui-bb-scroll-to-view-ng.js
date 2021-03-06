(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-scroll-to-view-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-scroll-to-view-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-scroll-to-view-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_93__) {
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

	module.exports = __webpack_require__(96);

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_93__;

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(93);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _directive = __webpack_require__(97);
	
	var _directive2 = _interopRequireDefault(_directive);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	/**
	 * @module ui-bb-scroll-to-view-module
	 *
	 * @description
	 * Module containing directive used for scroll to view.
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbScrollToViewKey from 'ui-bb-scroll-to-view-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbScrollToViewKey,
	 * ];
	 *
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-scroll-to-view-ng', []).directive('uiBbScrollToView', _directive2.default).name;

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ScrollToViewDirective;
	/**
	 * @name ScrollToViewDirective
	 * @ngkey uiBbScrollToView
	 * @type {object}
	 * @description
	 * Scroll to view component.
	 *
	 * @example
	 * <ui-bb-scroll-to-view="'Asset class name'">
	 * </ui-bb-scroll-to-view>
	 */
	
	function ScrollToViewDirective() {
	  return {
	    restrict: 'A',
	    link: function link(scope, element, attr) {
	      scope.$watch(function () {
	        return attr.uiBbScrollToView;
	      }, function (newValue, oldValue) {
	        if (newValue === oldValue || !newValue) return;
	        setTimeout(function () {
	          var elemScrollTo = element[0].querySelector('[data-scroll-to="' + newValue + '"]');
	          if (elemScrollTo) {
	            elemScrollTo.scrollIntoView(true);
	            if (attr.onFinishScroll) {
	              scope.$eval(attr.onFinishScroll);
	            }
	          }
	        }, 0);
	      });
	    },
	    controller: function controller() {},
	
	    controllerAs: '$scrollToViewCtrl'
	  };
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-scroll-to-view-ng.js.map