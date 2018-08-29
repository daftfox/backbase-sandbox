(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("vendor-bb-uib-collapse"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-expandable-ng", ["vendor-bb-angular", "vendor-bb-uib-collapse"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-expandable-ng"] = factory(require("vendor-bb-angular"), require("vendor-bb-uib-collapse"));
	else
		root["ui-bb-expandable-ng"] = factory(root["vendor-bb-angular"], root["vendor-bb-uib-collapse"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_66__) {
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

	module.exports = __webpack_require__(65);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _vendorBbUibCollapse = __webpack_require__(66);
	
	var _vendorBbUibCollapse2 = _interopRequireDefault(_vendorBbUibCollapse);
	
	var _component = __webpack_require__(67);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _controller = __webpack_require__(68);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * The angular module name
	 * @name default
	 * @type {string}
	 */
	/**
	 * @module ui-bb-expandable-ng
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbExpandableNgKey from 'ui-bb-expandable-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbExpandableNgKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-expandable-ng chevron="true">
	 *  <ui-bb-expandable-summary-ng>
	 *      Hello
	 *  </ui-bb-expandable-summary-ng>
	 *  <ui-bb-expandable-details-ng>
	 *      World!
	 *  </ui-bb-expandable-details-ng>
	 * </ui-bb-expandable-ng>
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-expandable-ng', [_vendorBbUibCollapse2.default]).component('uiBbExpandableNg', _component2.default).controller('uiBbExpandableController', _controller2.default).name;

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_66__;

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbExpandableComponent
	 * @type {object}
	 * @description
	 * Expandable Component Object
	 *
	 * @property {string} summary Transcluded content of <ui-bb-expandable-summary-ng>
	 * @property {string} details Transcluded content of <ui-bb-expandable-details-ng>
	 * @property {string} chevron Condition to show/hide chevron arrow
	 */
	var component = {
	  transclude: {
	    summary: 'uiBbExpandableSummaryNg',
	    details: 'uiBbExpandableDetailsNg'
	  },
	  bindings: {
	    chevron: '<'
	  },
	  controller: 'uiBbExpandableController',
	  template: '\n    <div ng-click="$ctrl.toggle()" class="dropdown-select p-2 d-flex justify-content-between">\n      <div ng-transclude="summary" class="bb-expandable-summary"></div>\n      <i ng-if="$ctrl.chevron" class="fa chevron-icon d-flex align-items-center"\n        role="button"\n        ng-class="{ \'fa-chevron-down chevron-down\': $ctrl.isCollapsed,\n                    \'fa-chevron-up chevron-up\': !$ctrl.isCollapsed }"\n      ></i>\n    </div>\n    <div ng-transclude="details" class="bb-expandable-details pt-2 px-2 border-top"\n      uib-collapse="$ctrl.isCollapsed"></div>\n  '
	};
	
	exports.default = component;

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbExpandableController
	 * @type {function}
	 * @description Component's controller
	 */
	function uiBbExpandableController() {
	  var _this = this;
	
	  this.isCollapsed = true;
	  this.toggle = function () {
	    _this.isCollapsed = !_this.isCollapsed;
	  };
	}
	
	exports.default = uiBbExpandableController;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-expandable-ng.js.map