(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("ui-bbm-textfield-ng"), require("lib-bbm-plugins"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-product-details-form-ng", ["ui-bb-i18n-ng", "ui-bbm-textfield-ng", "lib-bbm-plugins"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-product-details-form-ng"] = factory(require("ui-bb-i18n-ng"), require("ui-bbm-textfield-ng"), require("lib-bbm-plugins"));
	else
		root["ext-bbm-product-details-form-ng"] = factory(root["ui-bb-i18n-ng"], root["ui-bbm-textfield-ng"], root["lib-bbm-plugins"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_38__) {
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

	module.exports = __webpack_require__(35);

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.intents = exports.helpers = exports.events = undefined;
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbmTextfieldNg = __webpack_require__(36);
	
	var _uiBbmTextfieldNg2 = _interopRequireDefault(_uiBbmTextfieldNg);
	
	var _events = __webpack_require__(37);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _helpers = __webpack_require__(40);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _intents = __webpack_require__(41);
	
	var _intents2 = _interopRequireDefault(_intents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var events = exports.events = _events2.default; /**
	                                                 * @module ext-bbm-product-details-form-ng
	                                                 *
	                                                 * @description
	                                                 * Mobile extension for the product details form in the Mobile Product Details widget.
	                                                 *
	                                                 * @example
	                                                 * <!-- Mobile Product Details Widget widget model.xml -->
	                                                 * <property name="extension" viewHint="text-input,admin">
	                                                 *   <value type="string">ext-bbm-product-details-form-ng</value>
	                                                 * </property>
	                                                 */
	var helpers = exports.helpers = _helpers2.default;
	var intents = exports.intents = _intents2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbI18nNg2.default, _uiBbmTextfieldNg2.default];

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libBbmPlugins = __webpack_require__(38);
	
	var _libBbmPlugins2 = _interopRequireDefault(_libBbmPlugins);
	
	var _constants = __webpack_require__(39);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // Temporary disable capsInNew until it fixed in lib-bbm-plugins
	/* eslint new-cap: ["error", { "capIsNew": false }] */
	
	
	exports.default = function (_ref) {
	  var _withNativeEvents;
	
	  var $filter = _ref.$filter,
	      withNativeEvents = _ref.withNativeEvents;
	
	  var i18n = $filter('i18n');
	
	  return withNativeEvents({}, (_withNativeEvents = {}, _defineProperty(_withNativeEvents, _constants.Event.BEFORE_PRODUCT_ALIAS_UPDATE, function () {
	    _libBbmPlugins2.default.ActivityIndicator().show(i18n('message.productDetails.alias.edit.start'));
	  }), _defineProperty(_withNativeEvents, _constants.Event.AFTER_PRODUCT_ALIAS_UPDATE_SUCCESS, function () {
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    _libBbmPlugins2.default.Snackbar().success(i18n('message.productDetails.alias.edit.done'));
	  }), _defineProperty(_withNativeEvents, _constants.Event.AFTER_PRODUCT_ALIAS_UPDATE_ERROR, function () {
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    _libBbmPlugins2.default.Snackbar().error(i18n('message.personalProfile.alias.edit.failed'));
	  }), _withNativeEvents));
	};

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable import/prefer-default-export */
	
	/**
	 * Pubsub events
	 * @type {Object}
	 */
	var Event = exports.Event = {
	  BEFORE_PRODUCT_ALIAS_UPDATE: 'bb.event.productDetails.alias.edit.start',
	  AFTER_PRODUCT_ALIAS_UPDATE_SUCCESS: 'bb.event.productDetails.alias.edit.done',
	  AFTER_PRODUCT_ALIAS_UPDATE_ERROR: 'bb.event.productDetails.alias.edit.failed'
	};
	
	/**
	 * Intent
	 * @type {Object}
	 */
	var Intent = exports.Intent = {
	  SHOW_PRODUCT_DETAILS_VIEW: 'intent.rbm.productDetails.view.show',
	  SHOW_PRODUCT_ALIAS_FORM: 'intent.rbm.productDetails.alias.edit'
	};

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name Helpers
	 * @type {Object}
	 *
	 * @description
	 * Helpers for ext-bbm-product-details-form-ng
	 */
	exports.default = function (_ref) {
	  var stateContainer = _ref.stateContainer,
	      service = _ref.service,
	      intents = _ref.intents;
	
	  /**
	   * @name Helpers#getProductDetails
	   * @description Returns product details data.
	   * @type {function}
	   *
	   * @returns {object}
	   */
	  var getProductDetails = stateContainer.createSelector(function (state) {
	    return state.productDetails.data;
	  });
	
	  /**
	   * @name Helpers#getFormData
	   * @description Retrieves form data.
	   * @type {function}
	   *
	   * @returns {object}
	   */
	  var getFormData = stateContainer.createSelector(function (state) {
	    return state.form.data;
	  });
	
	  /**
	   * @name Helpers#isFormValid
	   * @description
	   * Helper to get the form validation status.
	   * @type {function}
	   *
	   * @param {Object} form
	   * @return {boolean} validation status.
	   */
	  var isFormValid = function isFormValid(form) {
	    return Boolean(form.$valid && form.$dirty);
	  };
	
	  /**
	   * @name Helpers#updateProductAlias
	   * @description
	   * Helper to update a product alias.
	   * @type {function}
	   *
	   * @return {Promise}
	   */
	  var updateProductAlias = function updateProductAlias() {
	    var _getProductDetails = getProductDetails(),
	        id = _getProductDetails.id;
	
	    var _getFormData = getFormData(),
	        alias = _getFormData.alias;
	
	    return service.updateProductAlias({ id: id, alias: alias }).then(function () {
	      service.patchProductDetailsDataState({ alias: alias });
	      intents.showProductDetailsView(id);
	    });
	  };
	
	  return {
	    getProductDetails: getProductDetails,
	    getFormData: getFormData,
	    updateProductAlias: updateProductAlias,
	    isFormValid: isFormValid
	  };
	};

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(39);
	
	/**
	 * @name Intents
	 * @type {Object}
	 */
	exports.default = function (_ref) {
	  var createRequest = _ref.createRequest,
	      handleRequest = _ref.handleRequest,
	      service = _ref.service;
	  return {
	    /**
	     * @name Intents#showProductDetailsView
	     * @description The intent to show the product details view.
	     * @type {function}
	     */
	    showProductDetailsView: createRequest(_constants.Intent.SHOW_PRODUCT_DETAILS_VIEW),
	
	    /**
	     * @name Intents#showProductAliasForm
	     * @description Handler of the 'intent.bb.productDetails.alias.edit' intent.
	     * @type {function}
	     */
	    showProductAliasForm: handleRequest(_constants.Intent.SHOW_PRODUCT_ALIAS_FORM, function () {
	      service.setProductAliasForm();
	    })
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bbm-product-details-form-ng.js.map