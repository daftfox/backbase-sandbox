(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("vendor-bb-uib-tooltip"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-ellipsis-tooltip-ng", ["vendor-bb-angular", "vendor-bb-uib-tooltip"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-ellipsis-tooltip-ng"] = factory(require("vendor-bb-angular"), require("vendor-bb-uib-tooltip"));
	else
		root["ui-bb-ellipsis-tooltip-ng"] = factory(root["vendor-bb-angular"], root["vendor-bb-uib-tooltip"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_61__) {
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

	module.exports = __webpack_require__(60);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _vendorBbUibTooltip = __webpack_require__(61);
	
	var _vendorBbUibTooltip2 = _interopRequireDefault(_vendorBbUibTooltip);
	
	var _directive = __webpack_require__(62);
	
	var _directive2 = _interopRequireDefault(_directive);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description The angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-ellipsis-tooltip-ng', [_vendorBbUibTooltip2.default]).directive('uiBbEllipsisTooltipNg', _directive2.default).name; /**
	                                                                                                                                                                               * @module ui-bb-ellipsis-tooltip-ng
	                                                                                                                                                                               * @description
	                                                                                                                                                                               * UI component that shows tooltip when text is truncated
	                                                                                                                                                                               *
	                                                                                                                                                                               * @example
	                                                                                                                                                                               * // In an extension:
	                                                                                                                                                                               * // file: scripts/index.js
	                                                                                                                                                                               * import uiBbEllipsisTooltipNg from 'ui-bb-ellipsis-tooltip-ng';
	                                                                                                                                                                               *
	                                                                                                                                                                               * export const dependencyKeys = [
	                                                                                                                                                                               *   uiBbEllipsisTooltipNg,
	                                                                                                                                                                               * ];
	                                                                                                                                                                               *
	                                                                                                                                                                               * // file: templates/template.ng.html
	                                                                                                                                                                               * <ui-bb-ellipsis-tooltip-ng
	                                                                                                                                                                               *   tooltip="'Some very long text, that will be truncated'"
	                                                                                                                                                                               * >
	                                                                                                                                                                               *   <span class="dummy">Some very long text</span>
	                                                                                                                                                                               * </ui-bb-ellipsis-tooltip-ng>
	                                                                                                                                                                               */

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_61__;

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbEllipsisTooltipDirective
	 * @type {object}
	 *
	 * @property {string} tooltip Text that will be displayed in the tooltip
	 */
	var directive = function uiBbEllipsisTooltipDirective() {
	  return {
	    restrict: 'E',
	    transclude: true,
	    scope: {
	      tooltip: '@'
	    },
	    template: '\n      <span\n        class="text-truncate d-block"\n        uib-tooltip="{{ tooltip }}"\n        tooltip-trigger="none"\n        tooltip-is-open="tooltipIsOpen"\n        tooltip-placement="auto top"\n        data-ng-transclude\n      ></span>\n    ',
	    link: function link(scope, element) {
	      var el = element[0].firstElementChild;
	
	      element.on('mouseenter', function () {
	        // Definition of offsetWidth and scrollWidth => https://stackoverflow.com/a/21064102/5706293
	        Object.assign(scope, { tooltipIsOpen: el.offsetWidth < el.scrollWidth });
	        scope.$apply();
	      });
	
	      element.on('mouseleave', function () {
	        Object.assign(scope, { tooltipIsOpen: false });
	        scope.$apply();
	      });
	    }
	  };
	};
	
	exports.default = directive;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-ellipsis-tooltip-ng.js.map