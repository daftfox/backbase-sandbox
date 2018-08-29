(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-inline-status-ng"), require("ui-bb-ellipsis-tooltip-ng"), require("ui-bb-navigate-to-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bus-manage-payment-orders-lite-ng", ["vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "ui-bb-loading-overlay-ng", "ui-bb-substitute-error-ng", "ui-bb-loading-indicator-ng", "ui-bb-empty-state-ng", "ui-bb-inline-status-ng", "ui-bb-ellipsis-tooltip-ng", "ui-bb-navigate-to-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bus-manage-payment-orders-lite-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-inline-status-ng"), require("ui-bb-ellipsis-tooltip-ng"), require("ui-bb-navigate-to-ng"));
	else
		root["ext-bus-manage-payment-orders-lite-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["ui-bb-loading-overlay-ng"], root["ui-bb-substitute-error-ng"], root["ui-bb-loading-indicator-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-inline-status-ng"], root["ui-bb-ellipsis-tooltip-ng"], root["ui-bb-navigate-to-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_108__, __WEBPACK_EXTERNAL_MODULE_111__, __WEBPACK_EXTERNAL_MODULE_119__) {
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

	module.exports = __webpack_require__(118);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_35__;

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_108__;

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_111__;

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.hooks = exports.helpers = exports.dependencyKeys = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(2);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbI18nNg = __webpack_require__(3);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbInlineStatusNg = __webpack_require__(108);
	
	var _uiBbInlineStatusNg2 = _interopRequireDefault(_uiBbInlineStatusNg);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(35);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(25);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbEllipsisTooltipNg = __webpack_require__(111);
	
	var _uiBbEllipsisTooltipNg2 = _interopRequireDefault(_uiBbEllipsisTooltipNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(4);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(37);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBbNavigateToNg = __webpack_require__(119);
	
	var _uiBbNavigateToNg2 = _interopRequireDefault(_uiBbNavigateToNg);
	
	var _hooks = __webpack_require__(120);
	
	var _hooks2 = _interopRequireDefault(_hooks);
	
	var _helpers = __webpack_require__(121);
	
	var extHelpers = _interopRequireWildcard(_helpers);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbI18nNg2.default, _uiBbInlineStatusNg2.default, _uiBbLoadingIndicatorNg2.default, _uiBbSubstituteErrorNg2.default, _uiBbEllipsisTooltipNg2.default, _uiBbLoadingOverlayNg2.default, _uiBbEmptyStateNg2.default, _uiBbNavigateToNg2.default]; /**
	                                                                                                                                                                                                                                                                                                                                  * @module ext-bus-manage-payment-orders-lite-ng
	                                                                                                                                                                                                                                                                                                                                  *
	                                                                                                                                                                                                                                                                                                                                  * @description
	                                                                                                                                                                                                                                                                                                                                  * Payment order overview extension.
	                                                                                                                                                                                                                                                                                                                                  *
	                                                                                                                                                                                                                                                                                                                                  * @example
	                                                                                                                                                                                                                                                                                                                                  * <!-- payment order widget model.xml -->
	                                                                                                                                                                                                                                                                                                                                  * <property name="extension" viewHint="text-input,admin">
	                                                                                                                                                                                                                                                                                                                                  *  <value type="string">ext-bus-manage-payment-orders-lite-ng</value>
	                                                                                                                                                                                                                                                                                                                                  * </property>
	                                                                                                                                                                                                                                                                                                                                  *
	                                                                                                                                                                                                                                                                                                                                  */
	var helpers = exports.helpers = extHelpers;
	
	var hooks = exports.hooks = { processPaymentOrders: _hooks2.default };
	
	var events = exports.events = {};

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_119__;

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @type {function}
	 *
	 * @description
	 * Simplification of PaymentOrder transaction information data structure
	 *
	 * @param {array<object>} paymentOrders Array of payment order objects
	 * @return {array<object>} array of payment order objects with shallow structure
	 */
	exports.default = function (paymentOrders) {
	  return paymentOrders.map(function (paymentOrder) {
	    return Object.assign({}, paymentOrder, { transactionInformation: paymentOrder.creditTransferTransactionInformation[0] });
	  });
	};

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getStatusLabelKey = exports.getStatusIcon = exports.headers = undefined;
	
	var _constants = __webpack_require__(122);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var headers = exports.headers = [{
	  label: 'header.status'
	}, {
	  label: 'header.debtor'
	}, {
	  label: 'header.creditor'
	}, {
	  label: 'header.currency'
	}, {
	  label: 'header.amount',
	  class: 'text-right'
	}, {
	  label: 'header.exec',
	  class: 'text-right'
	}];
	
	/**
	 * @description
	 * return the icon name/class from the matching payment status lookup object
	 * It returns 'secondary' by default
	 *
	 * @name Helpers#getStatusIcon
	 * @type {function}
	 *
	 * return {String} ex: 'warning' || 'danger' ...
	 */
	var getStatusIcon = exports.getStatusIcon = function getStatusIcon(statusKey) {
	  return _constants2.default[statusKey].icon || 'secondary';
	};
	
	/**
	 * @name Helpers#getStatusLabelKey
	 * @type {function}
	 *
	 * @description
	 * Find the matching object in paymentStatusLookup by the status key (ex: 'APPROVED'),
	 * Extract the name attribute
	 * Generate the correct key for translation message
	 *
	 * @param {String} status property on payment object
	 * @param {Boolean} enble/disable translation key postfix ('.short')
	 *
	 * @returns {string} Translation key for status label
	 */
	var getStatusLabelKey = exports.getStatusLabelKey = function getStatusLabelKey(status, postfix) {
	  var traslationKeyPostfix = '';
	
	  if (postfix === true) {
	    traslationKeyPostfix = '.short';
	  }
	
	  return 'payment.status.' + _constants2.default[status].name + traslationKeyPostfix;
	};

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description
	 * Lookup for different payment statues
	 * Each object has the following properties:
	 * icon: the type of icon, primary | warning | success | danger
	 * name: name is used as a key for translation | i18n
	 *
	 * @name paymentStatusLookup
	 * @type {Object}
	 */
	var paymentStatusLookup = {
	  ENTERED: {
	    icon: 'primary',
	    name: 'entered'
	  },
	
	  READY: {
	    icon: 'primary',
	    name: 'ready'
	  },
	
	  ACCEPTED: {
	    icon: 'warning',
	    name: 'accepted'
	  },
	
	  APPROVED: {
	    icon: 'success',
	    name: 'approved'
	  },
	
	  PROCESSED: {
	    icon: 'success',
	    name: 'processed'
	  },
	
	  REJECTED: {
	    icon: 'danger',
	    name: 'rejected'
	  },
	
	  CANCELLED: {
	    icon: 'warning',
	    name: 'cancelled'
	  },
	
	  CANCELLATION_PENDING: {
	    icon: 'warning',
	    name: 'cancellation-pending'
	  }
	};
	
	exports.default = paymentStatusLookup;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bus-manage-payment-orders-lite-ng.js.map