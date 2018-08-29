(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("lib-bb-widget-ng"), require("lib-bb-intent-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-fx-navigation-back-ng", ["vendor-bb-angular", "lib-bb-widget-extension-ng", "lib-bb-widget-ng", "lib-bb-intent-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-fx-navigation-back-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("lib-bb-widget-ng"), require("lib-bb-intent-ng"));
	else
		root["widget-fx-navigation-back-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-extension-ng"], root["lib-bb-widget-ng"], root["lib-bb-intent-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_40__) {
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

	module.exports = __webpack_require__(37);

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(27);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(38);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbWidgetNg = __webpack_require__(39);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbIntentNg = __webpack_require__(40);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _controller = __webpack_require__(41);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(43);
	
	var _defaultHooks2 = _interopRequireDefault(_defaultHooks);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-fx-navigation-back-ng
	 *
	 * @description
	 * FX navigation back widget.
	 *
	 *
	 * @example
	 * <div data-ng-controller="FXNavigationToController as $ctrl">
	 *   <button
	 *     class="btn btn-link ml-2"
	 *     aria-label="{{ back | i18n }}"
	 *     data-role="navigate-back"
	 *     data-ng-click="$ctrl.navigateTo();$event.stopPropagation();"
	 *   >
	 *     <i class="fas fa-chevron-left pr-2"></i>
	 *     <span data-i18n-key="back"></span>
	 *   </button>
	 * </div>
	 */
	var hooksKey = 'widget-fx-rate-table-ng:hooks';
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('widget-fx-navigation-back-ng', [_libBbWidgetNg2.default, _libBbIntentNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(_defaultHooks2.default)).controller('FXNavigationToController', [_libBbWidgetNg.widgetKey, _libBbIntentNg.bbIntentKey,
	/* into */
	_controller2.default]).name;

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_40__;

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = FXNavigationToController;
	
	var _constants = __webpack_require__(42);
	
	/**
	 * @name FXNavigationToController
	 * @ngkey FXNavigationToController
	 * @type {object}
	 * @description
	 * FX navigation to controller.
	 */
	
	function FXNavigationToController(widgetInstance, bbIntents) {
	  var $ctrl = this;
	
	  /**
	   * @name routeNavigateTo
	   * @type {Number} routeNavigateTo
	   * @description
	   * Route navigate to
	   */
	  var routeNavigateTo = widgetInstance.getPreference(_constants.Preference.CURRENCYPAIRS_TABLE);
	
	  /**
	   * @description
	   * A set of intents that the FX navigation back controller uses or handles.
	   *
	   * @name intents
	   * @type {Object}
	   * @inner
	   */
	  var intents = {
	    navigateTo: bbIntents.create(routeNavigateTo)
	  };
	
	  /**
	   * @name navigateTo
	   *
	   * @description
	   * Navigate to currency pairs table
	   *
	   * @type {function}
	   */
	  var navigateTo = function navigateTo() {
	    intents.navigateTo();
	  };
	
	  Object.assign($ctrl, {
	    navigateTo: navigateTo
	  });
	
	  return $ctrl;
	} /* global angular*/

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Preference
	 * @type {object}
	 *
	 * @description
	 * Widget preferences enum
	 *
	 * @property {string} CURRENCYPAIRS_TABLE Defines route for navigation to currencypairs table
	 */
	// eslint-disable-next-line import/prefer-default-export
	var Preference = exports.Preference = {
	  CURRENCYPAIRS_TABLE: 'bb.navigateTo'
	};

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

	"use strict";

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-fx-navigation-back-ng.js.map