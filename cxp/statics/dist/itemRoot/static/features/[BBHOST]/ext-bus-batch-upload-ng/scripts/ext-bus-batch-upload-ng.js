(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-confirm-ng"), require("ui-bb-file-size-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bus-batch-upload-ng", ["vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "ui-bb-notification-stripe-ng", "ui-bb-confirm-ng", "ui-bb-file-size-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bus-batch-upload-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-confirm-ng"), require("ui-bb-file-size-ng"));
	else
		root["ext-bus-batch-upload-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["ui-bb-notification-stripe-ng"], root["ui-bb-confirm-ng"], root["ui-bb-file-size-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_17__) {
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

	module.exports = __webpack_require__(15);

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
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _helpers = __webpack_require__(16);
	
	Object.defineProperty(exports, 'helpers', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_helpers).default;
	  }
	});
	
	var _vendorBbAngularNgAria = __webpack_require__(2);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbI18nNg = __webpack_require__(3);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbFileSizeNg = __webpack_require__(17);
	
	var _uiBbFileSizeNg2 = _interopRequireDefault(_uiBbFileSizeNg);
	
	var _uiBbNotificationStripeNg = __webpack_require__(5);
	
	var _uiBbNotificationStripeNg2 = _interopRequireDefault(_uiBbNotificationStripeNg);
	
	var _uiBbConfirmNg = __webpack_require__(9);
	
	var _uiBbConfirmNg2 = _interopRequireDefault(_uiBbConfirmNg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbI18nNg2.default, _uiBbNotificationStripeNg2.default, _uiBbFileSizeNg2.default, _uiBbConfirmNg2.default]; /**
	                                                                                                                                                                                               * @module ext-bus-batch-upload-ng
	                                                                                                                                                                                               *
	                                                                                                                                                                                               * @description
	                                                                                                                                                                                               * Extension for batch upload.
	                                                                                                                                                                                               *
	                                                                                                                                                                                               * @example
	                                                                                                                                                                                               * <!-- batch upload widget model.xml -->
	                                                                                                                                                                                               * <property name="extension" viewHint="text-input,admin">
	                                                                                                                                                                                               *  <value type="string">ext-bus-batch-upload-ng</value>
	                                                                                                                                                                                               * </property>
	                                                                                                                                                                                               */
	var hooks = exports.hooks = {};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  /**
	   * @name isUploadAvailable
	   * @type {function}
	   *
	   * @description
	   * Check if batch upload is available
	   *
	   * @param {object} ctrl object
	   *
	   * @returns {boolean}
	   */
	  isUploadAvailable: function isUploadAvailable(ctrl) {
	    return !ctrl.isUploading() && !ctrl.state.failedUploadFilesNumber;
	  },
	
	  /**
	   * @name isContinueEnabled
	   * @type {function}
	   *
	   * @description
	   * Check if user can proceed after uploading files
	   *
	   * @param {object} ctrl object
	   *
	   * @returns {boolean}
	   */
	  isContinueEnabled: function isContinueEnabled(ctrl) {
	    return !ctrl.isUploading() && ctrl.state.files.every(function (f) {
	      return f.uploaded;
	    });
	  },
	
	  /**
	   * @name isChangeUnavailable
	   * @type {function}
	   *
	   * @description
	   * Check if user can change the type of batch upload
	   *
	   * @param {object} ctrl object
	   *
	   * @returns {boolean}
	   */
	  isChangeUnavailable: function isChangeUnavailable(ctrl) {
	    return ctrl.state.files.length > 0 && ctrl.state.files.every(function (f) {
	      return f.uploaded;
	    });
	  },
	
	  /**
	   * @name getQueueStatus
	   * @type {function}
	   *
	   * @description
	   * Helper to get queue status label
	   *
	   * @param {object} ctrl object
	   *
	   * @returns {string} Queue status string
	   */
	  getQueueStatus: function getQueueStatus(ctrl) {
	    var key = void 0;
	    if (ctrl.isUploading()) {
	      key = ctrl.state.files.length === 1 ? 'label.uploading_file' : 'label.uploading_files';
	    } else {
	      key = ctrl.state.files.length === 1 ? 'label.file_in_queue' : 'label.files_in_queue';
	    }
	    return key;
	  },
	
	  /**
	   * @name getUploadedFilesStatus
	   * @type {function}
	   *
	   * @description
	   * Helper to get label for uploaded files
	   *
	   * @param {object} ctrl object
	   *
	   * @returns {string} Uploaded files status string
	   */
	  getUploadedFilesStatus: function getUploadedFilesStatus(ctrl) {
	    return ctrl.state.uploadedFilesNumber === 1 ? 'label.uploaded_file' : 'label.uploaded_files';
	  },
	
	  /**
	   * @name getUploadFilesFailedStatus
	   * @type {function}
	   *
	   * @description
	   * Helper to get label for failed upload files
	   *
	   * @param {object} ctrl object
	   *
	   * @returns {string} Upload failed files status string
	   */
	  getUploadFilesFailedStatus: function getUploadFilesFailedStatus(ctrl) {
	    return ctrl.state.failedUploadFilesNumber === 1 ? 'label.upload_file_failed' : 'label.upload_files_failed';
	  },
	
	  /**
	   * @name getContinueButtonLabel
	   * @type {function}
	   *
	   * @description
	   * Helper to get label for continue button
	   *
	   * @param {object} ctrl object
	   *
	   * @returns {string} Continue button label string
	   */
	  getContinueButtonLabel: function getContinueButtonLabel(ctrl) {
	    return !ctrl.isUploading() ? 'label.upload.new.batch' : 'label.uploading';
	  },
	
	  /**
	   * @name uploadOptions
	   * @type {Array}
	   *
	   * @description
	   * List of upload options
	   */
	  uploadOptions: [{
	    title: 'label.credit.transfer',
	    code: 'Clieop.001',
	    acceptMIMETypes: ['text/plain'].join(','),
	    supportedExtensions: ['.txt'].join(',')
	  }, {
	    title: 'label.sepa.credit.transfer',
	    code: 'PAIN.001',
	    acceptMIMETypes: ['text/xml'].join(','),
	    supportedExtensions: ['.xml'].join(',')
	  }, {
	    title: 'label.sepa.direct.debit',
	    code: 'PAIN.008',
	    acceptMIMETypes: ['text/xml'].join(','),
	    supportedExtensions: ['.xml'].join(',')
	  }],
	
	  /**
	   * @name handleChangesLinkClick
	   * @type {function}
	   * @description
	   * Shows selectType page or opens confirmation modal for
	   * files list depending on number of uploaded files.
	   * @param {object} ext Extension scope object
	   * @param {object} ctrl Widget controller
	   */
	  handleChangesLinkClick: function handleChangesLinkClick(ext, ctrl) {
	    if (!ctrl.state.files.length) {
	      ctrl.showSelectTypePage();
	    } else {
	      // eslint-disable-next-line no-param-reassign
	      ext.changeConfirmOpened = true;
	    }
	  }
	};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bus-batch-upload-ng.js.map