(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("ui-bb-avatar-ng"), require("ui-bb-format-amount-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-account-card-ng", ["vendor-bb-angular", "ui-bb-avatar-ng", "ui-bb-format-amount-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-account-card-ng"] = factory(require("vendor-bb-angular"), require("ui-bb-avatar-ng"), require("ui-bb-format-amount-ng"));
	else
		root["ui-bb-account-card-ng"] = factory(root["vendor-bb-angular"], root["ui-bb-avatar-ng"], root["ui-bb-format-amount-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
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

	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbAvatarNg = __webpack_require__(3);
	
	var _uiBbAvatarNg2 = _interopRequireDefault(_uiBbAvatarNg);
	
	var _uiBbFormatAmountNg = __webpack_require__(4);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _card = __webpack_require__(5);
	
	var _card2 = _interopRequireDefault(_card);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description The angular module name
	 */
	/**
	 * @module ui-bb-account-card-ng
	 * @description
	 * UI component for displaying account card.
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbAccountCard from 'ui-bb-account-card-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbAccountCard,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-account-card-ng
	 *   account-name="$ctrl.payment.from.name"
	 *   account-number="$ctrl.payment.from.name.account"
	 *   amount="$ctrl.payment.from.amount"
	 *   currency="$ctrl.payment.from.currency"
	 *   show-avatar="true">
	 * </ui-bb-account-card-ng>
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-account-card-ng', [_uiBbFormatAmountNg2.default, _uiBbAvatarNg2.default]).component('uiBbAccountCardNg', _card2.default).name;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbAccountCard
	 * @type {object}
	 *
	 * @property {string} accountName Account name
	 * @property {string} accountImage Image url, shown in avatar field (if it is enabled)
	 * @property {string} accountNumber Account number
	 * @property {number} amount Account's balance
	 * @property {string} currency Currency's ISO 4217 code
	 * @property {AdditionalInfo[]} additionalInfo Array with additional card info objects
	 * @property {boolean} showAvatar Display avatar field with image or name initials
	 */
	
	/**
	 * @typedef {Object} AdditionalInfo
	 * @property {?string} name Additional info label
	 * @property {?number} amount Additional info row's amount
	 * @property {?string} currency Currency's ISO 4217 code
	 */
	
	var uiBbAccountCard = {
	  bindings: {
	    accountName: '<',
	    accountImage: '<',
	    accountNumber: '<',
	    amount: '<',
	    currency: '<',
	    additionalInfo: '<',
	    showAvatar: '<'
	  },
	  template: '\n    <div class="card">\n      <div class="card-body d-inline-flex flex-wrap justify-content-between">\n\n        <div class="d-inline-flex justify-content-between d-flex flex-wrap \n          align-items-center flex-basis pb-2">\n\n          <div\n            data-ng-if="$ctrl.showAvatar">\n            <ui-bb-avatar-ng\n              class="bb-avatar media rounded-circle img-thumbnail \n              text-center mr-3"\n              data-name="$ctrl.accountName"\n              data-image="$ctrl.accountImage">\n            </ui-bb-avatar-ng>\n          </div>\n\n          <div class="d-flex flex-column">\n            <span class="font-weight-bold">{{ $ctrl.accountName }}</span>\n            <span>{{ $ctrl.accountNumber }}</span>\n          </div>\n\n          <span class="text-right card-account-balance">\n            <ui-bb-format-amount-ng\n              data-amount="$ctrl.amount"\n              data-currency="$ctrl.currency"\n              data-wrap\n            ></ui-bb-format-amount-ng>\n          </span>\n\n        </div>\n\n        <div class="flex-basis">\n          <div class="d-flex flex-column">\n            <div class="d-flex justify-content-between text-left text-muted"\n              data-ng-repeat="additional in $ctrl.additionalInfo track by additional.name"\n              >\n              <small class="text-left">{{ additional.name }}</small>\n              <small>\n                <ui-bb-format-amount-ng\n                  class="text-right"\n                  data-amount="additional.amount"\n                  data-currency="additional.currency"\n                  data-wrap\n                ></ui-bb-format-amount-ng>\n              </small>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  '
	};
	
	exports.default = uiBbAccountCard;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ui-bb-account-card-ng.js.map