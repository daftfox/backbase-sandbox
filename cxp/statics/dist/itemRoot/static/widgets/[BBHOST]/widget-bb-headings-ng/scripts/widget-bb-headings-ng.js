(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-event-bus-ng"), require("lib-bb-intent-ng"), require("lib-bb-widget-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-headings-ng", ["vendor-bb-angular", "lib-bb-event-bus-ng", "lib-bb-intent-ng", "lib-bb-widget-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-headings-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-event-bus-ng"), require("lib-bb-intent-ng"), require("lib-bb-widget-ng"));
	else
		root["widget-bb-headings-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-event-bus-ng"], root["lib-bb-intent-ng"], root["lib-bb-widget-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_33__, __WEBPACK_EXTERNAL_MODULE_51__, __WEBPACK_EXTERNAL_MODULE_53__) {
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

	module.exports = __webpack_require__(56);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_33__;

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_51__;

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(53);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(33);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbIntentNg = __webpack_require__(51);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _controller = __webpack_require__(57);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _vendorBbAngular2.default.module('widget-bb-headings-ng', [_libBbEventBusNg2.default, _libBbIntentNg2.default, _libBbWidgetNg2.default]).controller('HeadingsController', [_libBbWidgetNg.widgetKey, _libBbIntentNg.bbIntentKey, _libBbEventBusNg.eventBusKey,
	/* into */
	_controller2.default]).run([_libBbIntentNg.bbIntentKey, _libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, function (bbIntent) {
	  bbIntent.init();
	}]).name; /**
	           * @module widget-bb-headings-ng
	           *
	           * @description
	           * Headings widget
	           */

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = HeadingsController;
	
	var _constants = __webpack_require__(58);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Defines the default heading type
	 * as defined in the widget model.xml
	 * @type {string}
	 */
	var DEFAULT_HEADING_TYPE = 'h1';
	
	/**
	 * @name HeadingsController
	 * @type {object}
	 *
	 * @description
	 * Headings component
	 *
	 * @usage
	 * <div ng-controller="HeadingsController as $ctrl">
	 *   <!-- ... -->
	 * </div>
	 */
	/* global document */
	function HeadingsController(widget, bbIntent, bus) {
	  /**
	   * @description
	   * List of valid heading values
	   *
	   * @type {Array}
	   * @inner
	   */
	  var validHeadings = [];
	  for (var i = 1; i <= 6; i++) {
	    validHeadings.push('h' + i);
	  }
	
	  var headingType = validHeadings.includes(widget.getStringPreference(_constants2.default.HEADING_TYPE)) ? widget.getStringPreference(_constants2.default.HEADING_TYPE) : DEFAULT_HEADING_TYPE;
	
	  var isTitleAsHeading = widget.getBooleanPreference(_constants2.default.PAGE_TITLE_AS_HEADING) || false;
	
	  var heading = widget.getStringPreference(_constants2.default.HEADING) || (isTitleAsHeading ? document.title : '');
	
	  var actionIntentKey = widget.getStringPreference(_constants2.default.ACTION_INTENT_KEY);
	  var buttonClasses = widget.getStringPreference(_constants2.default.BUTTON_CLASSES);
	  var buttonTitle = widget.getStringPreference(_constants2.default.BUTTON_TITLE);
	
	  /**
	   * @name HeadingsController#pageConfig
	   * @type {Object}
	   * @description Headings configuration
	   * @property {string} headingType Type of heading (H1 - H6)
	   * @property {string} heading Heading text
	   * @property {boolean} isTitleAsHeading Should heading match the active
	   * menu item
	   */
	  var pageConfig = {
	    headingType: headingType,
	    heading: heading,
	    isTitleAsHeading: isTitleAsHeading,
	    buttonClasses: buttonClasses,
	    buttonTitle: buttonTitle
	  };
	
	  var action = null;
	
	  var $onInit = function $onInit() {
	    action = bbIntent.create(actionIntentKey);
	
	    /**
	     * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
	     * and will be removed with the update to widget collection 3 (WC3)
	     */
	    bus.publish('cxp.item.loaded', {
	      id: widget.getId()
	    });
	
	    bus.publish('bb.item.loaded', {
	      id: widget.getId()
	    });
	  };
	
	  var doAction = function doAction() {
	    return action();
	  };
	
	  return {
	    pageConfig: pageConfig,
	    doAction: doAction,
	    /* Lifecycle hooks */
	    $onInit: $onInit
	  };
	}

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Widget preferences enum
	 * @name  preference
	 * @enum {string}
	 * @type {object}
	 */
	exports.default = {
	  HEADING_TYPE: 'headingType',
	  HEADING: 'heading',
	  PAGE_TITLE_AS_HEADING: 'isTitleAsHeading',
	  ACTION_INTENT_KEY: 'actionIntentKey',
	  BUTTON_CLASSES: 'buttonClasses',
	  BUTTON_TITLE: 'buttonTitle'
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-headings-ng.js.map