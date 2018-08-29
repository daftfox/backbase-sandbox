(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-intent-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-navigate-to-ng", ["vendor-bb-angular", "lib-bb-intent-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-navigate-to-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-intent-ng"));
	else
		root["ui-bb-navigate-to-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-intent-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_106__) {
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

	module.exports = __webpack_require__(105);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbIntentNg = __webpack_require__(106);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _component = __webpack_require__(107);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _controller = __webpack_require__(108);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ui-bb-navigate-to-ng
	 * @description
	 * Create navigation link to specified page
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbNavigateToNg from 'ui-bb-navigate-to-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbNavigateToNg,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-navigate-to-ng
	 *   data-action="'notifications'"
	 *   data-label="'label.allNotifications' | i18n">
	 * </ui-bb-navigate-to-ng>
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-navigate-to-ng', [_libBbIntentNg2.default]).component('uiBbNavigateToNg', _component2.default).controller('controller', [_libBbIntentNg.bbIntentKey, _controller2.default]).name;

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_106__;

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbNavigateToComponent
	 * @type {object}
	 * @description
	 * Navigate To Component Object
	 *
	 * @property {string} action Intent name to navigate to
	 * @property {string} label The navigation link text
	 */
	var component = {
	  bindings: {
	    action: '<',
	    label: '<'
	  },
	  controller: 'controller',
	  template: '\n    <nav class="navigate-to">\n      <div class="float-right">\n        <a href="javascript:void(0)" \n          data-ng-click="$ctrl.navigateTo()" \n          data-ng-bind="$ctrl.label"></a>\n      </div>\n    </nav>\n  '
	};
	
	exports.default = component;

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = controller;
	/**
	 * @name uiBbNavigateController
	 * @type {function}
	 *
	 * @description
	 * Navigate to widget controller
	 */
	function controller(bbIntents) {
	  var ctrl = this;
	
	  /**
	   * @name navigateTo
	   * @type {function}
	   *
	   * @description
	   * Navigate to selected widget
	   */
	  var navigateTo = function navigateTo() {
	    if (ctrl.action) {
	      var intent = bbIntents.create(ctrl.action);
	
	      if (intent) {
	        intent();
	      }
	    }
	  };
	
	  Object.assign(ctrl, {
	    navigateTo: navigateTo
	  });
	
	  return ctrl;
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-navigate-to-ng.js.map