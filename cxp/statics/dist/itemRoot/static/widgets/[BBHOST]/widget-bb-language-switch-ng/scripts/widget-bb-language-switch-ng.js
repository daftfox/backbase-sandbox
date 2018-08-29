(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("ui-bb-i18n-ng"), require("vendor-bb-uib-dropdown"), require("lib-bb-widget-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-language-switch-ng", ["vendor-bb-angular", "ui-bb-i18n-ng", "vendor-bb-uib-dropdown", "lib-bb-widget-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-language-switch-ng"] = factory(require("vendor-bb-angular"), require("ui-bb-i18n-ng"), require("vendor-bb-uib-dropdown"), require("lib-bb-widget-ng"));
	else
		root["widget-bb-language-switch-ng"] = factory(root["vendor-bb-angular"], root["ui-bb-i18n-ng"], root["vendor-bb-uib-dropdown"], root["lib-bb-widget-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_53__) {
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

	module.exports = __webpack_require__(59);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(53);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _uiBbI18nNg = __webpack_require__(7);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _vendorBbUibDropdown = __webpack_require__(8);
	
	var _vendorBbUibDropdown2 = _interopRequireDefault(_vendorBbUibDropdown);
	
	var _controller = __webpack_require__(60);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'widget-bb-language-switch-ng'; /**
	                                                 * @module widget-bb-language-switch-ng
	                                                 *
	                                                 * @description
	                                                 * Language switch
	                                                 */
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbWidgetNg2.default, _uiBbI18nNg2.default, _vendorBbUibDropdown2.default]).controller('LanguageSwitchController', [
	// dependencies to inject
	'$window', _libBbWidgetNg.widgetKey,
	/* into */
	_controller2.default]).name;

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = LanguageSwitchController;
	/**
	 * @typedef {object} Locale
	 * @property {string} label Language bound to locale, e.g. Nederlands
	 * @property {string} locale Locale code, e.g. nl-NL
	 */
	
	/**
	 * @name LanguageSwitchController
	 * @type {function}
	 *
	 * @description
	 * Language switch
	 */
	function LanguageSwitchController($window, widgetInstance) {
	  var $ctrl = this;
	
	  /**
	   * @public
	   * @name LanguageSwitchController#locales
	   * @description
	   * List of locales available for selection
	   *
	   * @type {Array.<Locale>}
	   */
	  var locales = [];
	
	  /**
	   * @inner
	   * @name prepareLocales
	   * @description
	   * Transforms locales configured through preferences to
	   * array of locale objects
	   * @param localesString
	   * @type {function}
	   *
	   * @returns {Array}
	   */
	  var prepareLocales = function prepareLocales(localesString) {
	    return localesString.split(';').map(function (localeStr) {
	      var _localeStr$split = localeStr.split(','),
	          _localeStr$split2 = _slicedToArray(_localeStr$split, 2),
	          lang = _localeStr$split2[0],
	          locale = _localeStr$split2[1];
	
	      return {
	        label: lang,
	        locale: locale
	      };
	    });
	  };
	
	  /**
	   * @public
	   * @description
	   * AngularJS Lifecycle hook used to initialize the controller
	   * Initializes locales available from widget preferences
	   * @type {function}
	   *
	   * @name LanguageSwitchController#$onInit
	   * @returns {void}
	   *
	   */
	  var $onInit = function $onInit() {
	    var bbLocale = $window.localStorage.getItem('bb-locale');
	    var preferenceLocales = prepareLocales(widgetInstance.getPreference('locales'));
	    var selectedLocale = preferenceLocales.find(function (item) {
	      return item.locale === bbLocale;
	    }) || preferenceLocales[0];
	
	    Object.assign($ctrl, {
	      locales: preferenceLocales,
	      locale: selectedLocale
	    });
	  };
	
	  /**
	   * @description
	   * Switches language
	   * @param {Object} locale wrapper containing locale field
	   * @type {function}
	   */
	  var switchLanguageTo = function switchLanguageTo(_ref) {
	    var locale = _ref.locale;
	
	    $window.localStorage.setItem('bb-locale', locale);
	    $window.location.reload();
	  };
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	    switchLanguageTo: switchLanguageTo,
	    locales: locales
	  });
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-language-switch-ng.js.map