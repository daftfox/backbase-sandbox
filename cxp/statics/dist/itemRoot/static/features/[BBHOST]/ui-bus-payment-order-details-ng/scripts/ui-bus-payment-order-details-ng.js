(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bus-payment-order-details-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bus-payment-order-details-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bus-payment-order-details-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_18__) {
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

	module.exports = __webpack_require__(190);

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _directive = __webpack_require__(191);
	
	var _directive2 = _interopRequireDefault(_directive);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ui-bus-payment-order-details-ng
	 * @description
	 * Adds a <tr> row after each data row in order
	 * to show item details
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBusPaymentOrderDetailsNg from 'ui-bus-payment-order-details-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBusPaymentOrderDetailsNg,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <tr ui-bus-payment-order-details-ng item="payment" toggler="toggle"
	 * ng-click="toggle = ext.helpers.toggleDetails(toggle, payment.id)">
	 * ...
	 * </tr>
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bus-payment-order-details-ng', []).directive('uiBusPaymentOrderDetailsNg', ['$compile', _directive2.default]).name;

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var template = '\n  <tr data-ng-if="toggler === item.id" class="bb-table-details">\n    <td colspan="{{ colspan }}">\n      <div class="row">\n        <div class="col-12 col-md-4">\n          <strong>{{ \'details.to\' | i18n }}</strong>\n          <div data-role="details-counter-party-name">\n            {{ item.transactionInformation.creditor.name }}</div>\n          <div data-role="details-identification">\n            {{ item.transactionInformation.creditorAccount.identification.identification }}</div>\n          <div data-role="details-counter-party-bank-name">\n            {{ item.transactionInformation.creditorAccount.name }}</div>\n          <div data-role="details-counter-party-country">\n            {{ item.creditAccountIdentification.counterpartyCountry }}</div>\n        </div>\n        <div class="col-12 col-md-8">\n          <div data-ng-if="item.createdBy ">\n            <strong>{{ \'details.created.by\' | i18n }}</strong>\n            <div data-role="details-created-by">\n              {{ item.createdBy }} \n              <span data-ng-if="item.requestedExecutionDate">\n                {{ \'details.on\' | i18n }} {{ item.createdAt | date:dateFormat }}\n                {{ \'details.at\' | i18n }} {{ item.createdAt | date:\'hh:mm\' }}\n              </span></div>\n          </div>\n          <br>\n          <div class="row">\n            <div \n              data-ng-if="item.transactionInformation.endToEndIdentification" \n              class="col-12 col-md-4">\n              <strong>{{ \'details.transaction.id\' | i18n }}</strong>\n              <div data-role="details-payment-reference">\n                {{ item.transactionInformation.endToEndIdentification }}\n                </div>\n            </div>\n            <div class="col-12"\n              data-ng-class="{\n                \'col-sm-8\': item.transactionInformation.endToEndIdentification, \n                \'col-sm-12\': !item.transactionInformation.endToEndIdentification}">\n              <strong>{{ \'details.description\' | i18n }}</strong>\n              <div data-role="details-description">\n                {{ item.transactionInformation.remittanceInformation.content || \'---\' }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </td>\n  </tr>\n';
	
	var directive = function directive($compile) {
	  return {
	    scope: {
	      item: '<',
	      toggler: '=',
	      template: '<',
	      helpers: '<',
	      colspan: '<'
	    },
	    link: function link($scope, $el) {
	      var el = $el[0];
	      var tr = _vendorBbAngular2.default.element($scope.template || template);
	      var parentDiv = el.parentNode;
	      $compile(tr)($scope);
	
	      parentDiv.insertBefore(tr[0], el.nextSibling);
	    }
	  };
	};
	
	exports.default = directive;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bus-payment-order-details-ng.js.map