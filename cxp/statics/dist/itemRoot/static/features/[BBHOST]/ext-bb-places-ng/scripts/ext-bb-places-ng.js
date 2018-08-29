(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("ui-bb-maps-ng"), require("ui-bb-substitute-error-ng"), require("vendor-bb-angular-ng-aria"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-places-ng", ["ui-bb-i18n-ng", "ui-bb-maps-ng", "ui-bb-substitute-error-ng", "vendor-bb-angular-ng-aria"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-places-ng"] = factory(require("ui-bb-i18n-ng"), require("ui-bb-maps-ng"), require("ui-bb-substitute-error-ng"), require("vendor-bb-angular-ng-aria"));
	else
		root["ext-bb-places-ng"] = factory(root["ui-bb-i18n-ng"], root["ui-bb-maps-ng"], root["ui-bb-substitute-error-ng"], root["vendor-bb-angular-ng-aria"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11);

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _uiBbI18nNg = __webpack_require__(2);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbMapsNg = __webpack_require__(3);
	
	var _uiBbMapsNg2 = _interopRequireDefault(_uiBbMapsNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(5);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _vendorBbAngularNgAria = __webpack_require__(6);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _hooks = __webpack_require__(12);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbI18nNg2.default, _uiBbMapsNg2.default, _uiBbSubstituteErrorNg2.default, _vendorBbAngularNgAria2.default]; /**
	                                                                                                                                                               * @module ext-bb-places-ng
	                                                                                                                                                               *
	                                                                                                                                                               * @description
	                                                                                                                                                               * Places widget map extension.
	                                                                                                                                                               *
	                                                                                                                                                               * @requires ui-bb-substitute-error-ng
	                                                                                                                                                               * @requires ui-bb-i18n-ng
	                                                                                                                                                               * @requires ui-bb-maps-ng
	                                                                                                                                                               * @requires vendor-bb-angular-ng-aria
	                                                                                                                                                               *
	                                                                                                                                                               * @example
	                                                                                                                                                               * <!-- places widget model.xml -->
	                                                                                                                                                               * <property name="extension" viewHint="text-input,admin">
	                                                                                                                                                               *   <value type="string">ext-bb-places-ng</value>
	                                                                                                                                                               * </property>
	                                                                                                                                                               *
	                                                                                                                                                               * Usage of ui-bb-maps-ng component in template
	                                                                                                                                                               *
	                                                                                                                                                               * <g-map-api preferences="$ctrl.getPlacesPreferences()">
	                                                                                                                                                               *   <g-map places="$ctrl.loadPlaces">
	                                                                                                                                                               *     <div class="form-group has-feedback">
	                                                                                                                                                               *       <g-map-search></g-map-search>
	                                                                                                                                                               *       <span class="fa fa-search text-muted form-control-feedback" aria-hidden="true"></span>
	                                                                                                                                                               *       <span class="sr-only" data-i18n-key="places.input.search"></span>
	                                                                                                                                                               *     </div>
	                                                                                                                                                               *   </g-map>
	                                                                                                                                                               * </g-map-api>
	                                                                                                                                                               *
	                                                                                                                                                               * where
	                                                                                                                                                               * places {object[]} Array of map points to be placed on map
	                                                                                                                                                               * places.latitude {number} Latitude of one point
	                                                                                                                                                               * places.longitude {number} Longitude of one point
	                                                                                                                                                               * preferences {object} Preference object containing api key, zoom level, etc.
	                                                                                                                                                               */
	var hooks = exports.hooks = extHooks;
	
	var helpers = exports.helpers = {};
	
	var events = exports.events = {};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.onContainerToggle = exports.processPlaces = undefined;
	
	var _helpers = __webpack_require__(13);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name Hooks#processPlaces
	 * @type {function}
	 *
	 * @description
	 * Hook for processing places list
	 * Assigned to [$ctrl.loadPlaces]
	 *
	 * @param {Place[]} places Array of places
	 * @returns {Place[]} Processed array of places
	 */
	var processPlaces = exports.processPlaces = function processPlaces(places) {
	  var assetsPath = _helpers2.default.getExtensionAssetsPath();
	  return (places || []).map(function (place) {
	    Object.assign(place, {
	      icon: assetsPath + '/images/atm-marker.png'
	    });
	    return place;
	  });
	};
	
	/**
	 * @name Hooks#onContainerToggle
	 * @type {function}
	 *
	 * @description
	 * Hook that is being triggered in case when parent container
	 * that has the ability to show/hide part of it's content (tabs, deck, carousel)
	 * toggles the child element
	 * Assigned to [$ctrl.$onInit]
	 *
	 * @param {object} activatedElement Child element that became visible
	 * @returns {void}
	 */
	/* eslint-disable import/prefer-default-export */
	/* global window, google, angular */
	var onContainerToggle = exports.onContainerToggle = function onContainerToggle(activatedElement) {
	  var mapElements = angular.element(activatedElement).find('.places-map');
	  if (mapElements.length === 0) {
	    return;
	  }
	
	  google.maps.event.trigger(mapElements.data('map'), 'resize');
	};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(14);
	
	var helpers = {
	  /**
	   * @description
	   * Get extension assets' directory path
	   *
	   * @returns {string}
	   */
	  getExtensionAssetsPath: function getExtensionAssetsPath() {
	    var configuredContextRoot = window.BB && window.BB.config && window.BB.config.contextRoot;
	    var v6ContextRoot = function v6ContextRoot() {
	      var cxpFeature = window.portalClient && window.portalClient.getFeature && window.portalClient.getFeature('cxp');
	      return cxpFeature && cxpFeature.config.get('contextRoot');
	    };
	
	    var v5ContextRoot = function v5ContextRoot() {
	      return window.b$ && window.b$.portal && window.b$.portal.config.resourceRoot;
	    };
	
	    var contextRoot = configuredContextRoot || v6ContextRoot() || v5ContextRoot() || _constants.DEFAULT_CONTEXT_ROOT;
	    return contextRoot + '/static/features/%5BBBHOST%5D/' + _constants.EXTENSION_NAME + '/assets';
	  }
	}; /* globals window */
	
	exports.default = helpers;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Default context root
	 * @type {string}
	 */
	var DEFAULT_CONTEXT_ROOT = exports.DEFAULT_CONTEXT_ROOT = '/portalserver';
	
	/**
	 * Default extension name
	 * @type {string}
	 */
	var EXTENSION_NAME = exports.EXTENSION_NAME = 'ext-bb-places-ng';

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-places-ng.js.map