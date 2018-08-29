(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("vendor-bb-uib-accordion"), require("ui-bb-confirm-ng"), require("ui-bb-i18n-ng"), require("ui-bb-paginator-ng"), require("ui-bb-conversation-view-ng"), require("ui-bb-conversation-list-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-notification-stripe-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-messages-inbox-ng", ["vendor-bb-angular-ng-aria", "vendor-bb-uib-accordion", "ui-bb-confirm-ng", "ui-bb-i18n-ng", "ui-bb-paginator-ng", "ui-bb-conversation-view-ng", "ui-bb-conversation-list-ng", "ui-bb-substitute-error-ng", "ui-bb-notification-stripe-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-messages-inbox-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("vendor-bb-uib-accordion"), require("ui-bb-confirm-ng"), require("ui-bb-i18n-ng"), require("ui-bb-paginator-ng"), require("ui-bb-conversation-view-ng"), require("ui-bb-conversation-list-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-notification-stripe-ng"));
	else
		root["ext-bb-messages-inbox-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["vendor-bb-uib-accordion"], root["ui-bb-confirm-ng"], root["ui-bb-i18n-ng"], root["ui-bb-paginator-ng"], root["ui-bb-conversation-view-ng"], root["ui-bb-conversation-list-ng"], root["ui-bb-substitute-error-ng"], root["ui-bb-notification-stripe-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__) {
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

	module.exports = __webpack_require__(10);

/***/ }),
/* 1 */,
/* 2 */,
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

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.helpers = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(3);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _vendorBbUibAccordion = __webpack_require__(4);
	
	var _vendorBbUibAccordion2 = _interopRequireDefault(_vendorBbUibAccordion);
	
	var _uiBbPaginatorNg = __webpack_require__(11);
	
	var _uiBbPaginatorNg2 = _interopRequireDefault(_uiBbPaginatorNg);
	
	var _uiBbConversationViewNg = __webpack_require__(12);
	
	var _uiBbConversationViewNg2 = _interopRequireDefault(_uiBbConversationViewNg);
	
	var _uiBbConversationListNg = __webpack_require__(13);
	
	var _uiBbConversationListNg2 = _interopRequireDefault(_uiBbConversationListNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(14);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbNotificationStripeNg = __webpack_require__(15);
	
	var _uiBbNotificationStripeNg2 = _interopRequireDefault(_uiBbNotificationStripeNg);
	
	var _uiBbConfirmNg = __webpack_require__(5);
	
	var _uiBbConfirmNg2 = _interopRequireDefault(_uiBbConfirmNg);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _helpers = __webpack_require__(16);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bb-messages-inbox-ng
	 *
	 * @description
	 * Message center inbox extension.
	 *
	 * @example
	 * <!-- messages widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bb-messages-inbox-ng</value>
	 * </property>
	 */
	var helpers = exports.helpers = _helpers2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbConversationListNg2.default, _uiBbConversationViewNg2.default, _uiBbSubstituteErrorNg2.default, _uiBbNotificationStripeNg2.default, _vendorBbUibAccordion2.default, _uiBbConfirmNg2.default, _uiBbPaginatorNg2.default, _uiBbI18nNg2.default];

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var helpers = {
	  /**
	   * Removes selected conversations and updates conversation list
	   * @name removeSelectedConversations
	   * @type {function}
	   * @param  {Object} $ctrl The extension controller
	   * @return {Promise}       Promise to be fulfilled after loading list
	   */
	  removeSelectedConversations: function removeSelectedConversations($ctrl) {
	    return $ctrl.removeSelectedItems().then(function () {
	      var _$ctrl$state$currentF = $ctrl.state.currentFolder,
	          currentPage = _$ctrl$state$currentF.currentPage,
	          totalCount = _$ctrl$state$currentF.totalCount;
	
	      var pageSize = $ctrl.config.pageSize;
	
	      if (totalCount > 0) {
	        var maxPage = Math.ceil(totalCount / pageSize);
	        // only the last page can dissapear after conversations are deleted
	        var newPage = Math.min(currentPage, maxPage);
	
	        return $ctrl.loadPage($ctrl.state.currentView, newPage);
	      }
	      return Promise.resolve();
	    });
	  },
	
	  /**
	   * Function, which should be called with ng-init at the extension's
	   * root element. This function opens the inbox folder and fetches
	   * the total unread messages count
	   * @name init
	   * @type {function}
	   * @param  {Object} $ctrl The extension controller
	   */
	  init: function init($ctrl) {
	    $ctrl.openFolder($ctrl.statics.views.inbox);
	    $ctrl.fetchUnreadMessagesCount();
	  }
	};
	
	exports.default = helpers;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-messages-inbox-ng.js.map