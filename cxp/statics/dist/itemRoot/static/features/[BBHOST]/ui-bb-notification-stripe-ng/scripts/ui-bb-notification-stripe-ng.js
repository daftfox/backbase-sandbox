(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-notification-stripe-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-notification-stripe-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-notification-stripe-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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

	module.exports = __webpack_require__(109);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _notificationStripe = __webpack_require__(110);
	
	var _notificationStripe2 = _interopRequireDefault(_notificationStripe);
	
	var _notificationStripe3 = __webpack_require__(111);
	
	var _notificationStripe4 = _interopRequireDefault(_notificationStripe3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @description The angular module name
	 * @name default
	 * @type {string}
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-notification-stripe-ng', []).controller('uiBbNotificationStripeController', ['$scope', '$sce', '$timeout',
	/* into */
	_notificationStripe4.default]).component('uiBbNotificationStripeNg', _notificationStripe2.default).name; /**
	                                                                                                          * @module ui-bb-notification-stripe-ng
	                                                                                                          *
	                                                                                                          * @example
	                                                                                                          * // In an extension:
	                                                                                                          * // file: scripts/index.js
	                                                                                                          * import uiBbNotificationStripeNgKey from 'ui-bb-notification-stripe-ng';
	                                                                                                          *
	                                                                                                          * export const dependencyKeys = [
	                                                                                                          *   uiBbNotificationStripeNgKey,
	                                                                                                          * ];
	                                                                                                          *
	                                                                                                          * // file: templates/template.ng.html
	                                                                                                          * <ui-bb-notification-stripe-ng
	                                                                                                          * message="{{ $ctrl.status.text }}"
	                                                                                                          * on-close="$ctrl.status = null;"
	                                                                                                          * type="bg-{{ $ctrl.status.class }}"
	                                                                                                          * timeout-second="5">
	                                                                                                          * </ui-bb-notification-stripe-ng>
	                                                                                                          */

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbNotificationStripeComponent
	 * @type {object}
	 * @description
	 * Notification Stripe Component Object
	 *
	 * @property {function} on-close function to be invoked on clicking "✕"
	 * @property {string} message message -> messageHtmlSafe, processed in controller
	 * @property {string} type css class to be added to wrapper element
	 * @property {number} timeout-second delay in seconds after which onClose will be invoked
	 * @property {string} icon-classes font-awesome icon classes. If provided it will add that icon
	 */
	var uiBbNotificationStripeComponent = {
	  bindings: {
	    onClose: '&',
	    message: '@',
	    type: '@',
	    timeoutSecond: '@',
	    iconClasses: '@',
	    shouldTransclude: '@'
	  },
	  transclude: true,
	  controller: 'uiBbNotificationStripeController',
	  template: '\n    <div\n      class="notification-stripe d-block px-4 py-6 my-4 w-100\n      alert alert-success\n      d-inline-flex align-items-center justify-content-between"\n      data-ng-class="$ctrl.type">\n      <i\n        data-ng-if="$ctrl.iconClasses"\n        data-ng-class="$ctrl.iconClasses"\n        class="notification-stripe-icon col-1 px-3"\n        aria-hidden="true"\n      ></i>\n      <div data-ng-if="$ctrl.shouldTransclude" data-ng-transclude></div>\n      <div data-ng-if="!$ctrl.shouldTransclude"\n        data-ng-bind-html="$ctrl.messageHtmlSafe">\n      </div>\n      <button\n        type="button"\n        class="close ml-auto p-2"\n        data-ng-click="$ctrl.onClose()"\n      >\n        <span aria-hidden="true">&times;</span>\n      </button>\n    </div>\n  '
	};
	
	exports.default = uiBbNotificationStripeComponent;

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbNotificationStripeController
	 * @ngkey uiBbNotificationStripeController
	 * @type {function}
	 * @description
	 * Notification Stripe Controller
	 */
	var uiBbNotificationStripeController = function uiBbNotificationStripeController($scope, $sce, $timeout) {
	  var _this = this;
	
	  this.$onInit = function () {
	    $scope.$watch(function () {
	      return _this.message;
	    }, function (newVal) {
	      // Message could have html tags inside -- making it safe
	      _this.messageHtmlSafe = $sce.trustAsHtml(newVal);
	    });
	
	    // Check if timeout is passed to component
	    if (_this.timeoutSecond && parseInt(_this.timeoutSecond, 10) > 0 && typeof _this.onClose === 'function') {
	      // invoke closing function after delay
	      $timeout(_this.onClose, parseInt(_this.timeoutSecond, 10) * 1000);
	    }
	  };
	};
	
	exports.default = uiBbNotificationStripeController;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-notification-stripe-ng.js.map