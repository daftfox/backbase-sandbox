(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-country-ng", ["ui-bb-i18n-ng", "vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-country-ng"] = factory(require("ui-bb-i18n-ng"), require("vendor-bb-angular"));
	else
		root["ui-bb-country-ng"] = factory(root["ui-bb-i18n-ng"], root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_53__) {
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

	module.exports = __webpack_require__(77);

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(53);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * The angular module name
	 * @name default
	 * @type {string}
	 */
	/**
	 * @module ui-bb-country-ng
	 *
	 * @description Filter to translate two-chars country code to human readable and translated string
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbCountryNgKey from 'ui-bb-country-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbCountryNgKey,
	 * ];
	 *
	 * // file: assets/messages.json
	 * {
	 *   "en-US": {
	 *     "country.cn": "China",
	 *     "country.nl": "Netherlands"
	 *   },
	 *   "nl-NL": {
	 *     "country.cn": "China",
	 *     "country.nl": "Nederland"
	 *   }
	 * }
	 *
	 * // file: templates/template.ng.html
	 * <p>{{ 'CN' | country }}</p>
	 * <p>{{ 'uk' | country }}</p>
	 * <p>{{ item.countryCode | country }}</p>
	 */
	
	exports.default = _vendorBbAngular2.default.module('ui-bb-country-ng', [_uiBbI18nNg2.default])
	
	/**
	 * Translates country ISO code (two chars) into human readable, translated string.
	 * Since country name will be internationalised, translations for the countries
	 * should be present in messages.json file in a format "country.[COUNTRY_CODE_LOWER_CASED]".
	 * See example for details.
	 *
	 * @name countryFilter
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbCountryNgKey from 'ui-bb-country-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbCountryNgKey,
	 * ];
	 *
	 * // file: assets/messages.json
	 * {
	 *   "en-US": {
	 *     "country.cn": "China",
	 *     "country.nl": "Netherlands"
	 *   },
	 *   "nl-NL": {
	 *     "country.cn": "China",
	 *     "country.nl": "Nederland"
	 *   }
	 * }
	 *
	 * // file: templates/template.ng.html
	 * <p>{{ 'CN' | country }}</p>
	 * <p>{{ 'uk' | country }}</p>
	 * <p>{{ item.countryCode | country }}</p>
	 *
	 * @type {function}
	 * @param key {string} The country code
	 * @returns {string} The translated country name.
	 *                   If no translation is available, the empty string.
	 */
	.filter('country', ['i18nFilter',
	/* into */
	function (i18n) {
	  return function (key) {
	    return key && i18n(('country.' + key).toLowerCase());
	  };
	}]).name;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-country-ng.js.map