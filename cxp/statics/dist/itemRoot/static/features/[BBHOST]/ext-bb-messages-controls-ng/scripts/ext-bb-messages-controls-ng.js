(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("vendor-bb-uib-accordion"), require("ui-bb-confirm-ng"), require("ui-bb-modal-ng"), require("ui-bb-draft-edit-ng"), require("ui-bb-i18n-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-messages-controls-ng", ["vendor-bb-angular-ng-aria", "vendor-bb-uib-accordion", "ui-bb-confirm-ng", "ui-bb-modal-ng", "ui-bb-draft-edit-ng", "ui-bb-i18n-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-messages-controls-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("vendor-bb-uib-accordion"), require("ui-bb-confirm-ng"), require("ui-bb-modal-ng"), require("ui-bb-draft-edit-ng"), require("ui-bb-i18n-ng"));
	else
		root["ext-bb-messages-controls-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["vendor-bb-uib-accordion"], root["ui-bb-confirm-ng"], root["ui-bb-modal-ng"], root["ui-bb-draft-edit-ng"], root["ui-bb-i18n-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
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

	module.exports = __webpack_require__(2);

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.helpers = exports.dependencyKeys = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(3);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _vendorBbUibAccordion = __webpack_require__(4);
	
	var _vendorBbUibAccordion2 = _interopRequireDefault(_vendorBbUibAccordion);
	
	var _uiBbConfirmNg = __webpack_require__(5);
	
	var _uiBbConfirmNg2 = _interopRequireDefault(_uiBbConfirmNg);
	
	var _uiBbModalNg = __webpack_require__(6);
	
	var _uiBbModalNg2 = _interopRequireDefault(_uiBbModalNg);
	
	var _uiBbDraftEditNg = __webpack_require__(7);
	
	var _uiBbDraftEditNg2 = _interopRequireDefault(_uiBbDraftEditNg);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _helpers = __webpack_require__(9);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbDraftEditNg2.default, _vendorBbUibAccordion2.default, _uiBbI18nNg2.default, _uiBbConfirmNg2.default, _uiBbModalNg2.default]; /**
	                                                                                                                                                                                                                   * @module ext-bb-messages-controls-ng
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * @description
	                                                                                                                                                                                                                   * Message center default extension.
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * @example
	                                                                                                                                                                                                                   * <!-- messages widget model.xml -->
	                                                                                                                                                                                                                   * <property name="extension" viewHint="text-input,admin">
	                                                                                                                                                                                                                   *  <value type="string">ext-bb-messages-controls-ng</value>
	                                                                                                                                                                                                                   * </property>
	                                                                                                                                                                                                                   */
	var helpers = exports.helpers = _helpers2.default;

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

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Helpers
	 * @type {Object}
	 */
	var helpers = function helpers() {
	  /**
	   * @description
	   * Opens the modal window
	   *
	   * @name Helpers#openModalWindow
	   * @type {function}
	   *
	   * @param {object} ext            extension reference
	   */
	  var openModalWindow = function openModalWindow(ext) {
	    Object.assign(ext, { showModal: true });
	  };
	
	  /**
	   * @description
	   * Close the modal window
	   *
	   * @name Helpers#closeModalWindow
	   * @type {function}
	   *
	   * @param {object} ext         extension reference
	   */
	  var closeModalWindow = function closeModalWindow(ext) {
	    Object.assign(ext, { showModal: false });
	  };
	
	  /**
	   * @description
	   * Set confirmation popup state
	   *
	   * @name Helpers#setConfirmationState
	   * @type {function}
	   *
	   * @param {object} ext         extension reference
	   * @param {boolean} isEmpty         true/false value from message form
	   */
	  var setConfirmationState = function setConfirmationState(ext, draftCtrl, isEmpty) {
	    // The checking will open confirmation popup, if any field's form has not empty value
	    if (isEmpty) {
	      Object.assign(ext, { cancelConfirmOpened: true });
	    } else {
	      closeModalWindow(ext);
	      draftCtrl.dismiss();
	    }
	  };
	
	  return {
	    openModalWindow: openModalWindow,
	    closeModalWindow: closeModalWindow,
	    setConfirmationState: setConfirmationState
	  };
	};
	
	exports.default = helpers;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-messages-controls-ng.js.map