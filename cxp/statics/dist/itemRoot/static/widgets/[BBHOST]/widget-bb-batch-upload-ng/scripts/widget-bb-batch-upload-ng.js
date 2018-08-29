(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("model-bb-batch-ng"), require("lib-bb-widget-ng"), require("lib-bb-intent-ng"), require("vendor-bb-ng-file-upload"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-batch-upload-ng", ["vendor-bb-angular", "lib-bb-model-errors", "model-bb-batch-ng", "lib-bb-widget-ng", "lib-bb-intent-ng", "vendor-bb-ng-file-upload"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-batch-upload-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("model-bb-batch-ng"), require("lib-bb-widget-ng"), require("lib-bb-intent-ng"), require("vendor-bb-ng-file-upload"));
	else
		root["widget-bb-batch-upload-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-model-errors"], root["model-bb-batch-ng"], root["lib-bb-widget-ng"], root["lib-bb-intent-ng"], root["vendor-bb-ng-file-upload"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_35__) {
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

	module.exports = __webpack_require__(34);

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(19);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _vendorBbNgFileUpload = __webpack_require__(35);
	
	var _vendorBbNgFileUpload2 = _interopRequireDefault(_vendorBbNgFileUpload);
	
	var _libBbWidgetNg = __webpack_require__(28);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbIntentNg = __webpack_require__(30);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _modelBbBatchNg = __webpack_require__(27);
	
	var _modelBbBatchNg2 = _interopRequireDefault(_modelBbBatchNg);
	
	var _controller = __webpack_require__(36);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	/**
	 * @module widget-bb-batch-upload-ng
	 *
	 * @description
	 * Batch upload.
	 *
	 */
	exports.default = _vendorBbAngular2.default.module('widget-bb-batch-upload-ng', [_libBbWidgetNg2.default, _modelBbBatchNg2.default, _vendorBbNgFileUpload2.default.name, _libBbIntentNg2.default]).controller('BatchUploadController', [
	// dependencies to inject
	_libBbWidgetNg.widgetKey, _modelBbBatchNg.modelBatchKey, '$q',
	/* into */
	_controller2.default]).run([_libBbIntentNg.bbIntentKey, function (bbIntent) {
	  bbIntent.init();
	}]).name;

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_35__;

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = BatchUploadController;
	
	var _libBbModelErrors = __webpack_require__(22);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* eslint-disable no-param-reassign */
	
	function BatchUploadController(widget, model, Promise) {
	  var _errorMessages;
	
	  /**
	   * @name BatchUploadController
	   * @ngkey BatchUploadController
	   * @type {object}
	   * @description
	   * Batch upload controller.
	   */
	  var $ctrl = this;
	
	  var StatusType = {
	    SUCCESS: 'SUCCESS',
	    ERROR: 'ERROR'
	  };
	
	  var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'error.unexpected'), _errorMessages);
	
	  /**
	   * @name  Page
	   * @description Defines widget page enumeration
	   * @enum {string}
	   * @type {object}
	   */
	  var Page = {
	    SELECT_TYPE: 'SELECT_TYPE',
	    UPLOAD_FILES: 'UPLOAD_FILES'
	  };
	
	  /**
	   * @name BatchUploadController#state
	   * @description Controller's state object
	   * @type {object}
	   * @property {object} status Controller's actions status
	   * @property {Array} files An array of queued files
	   * @property {number} uploadedFilesNumber Number of successfully uploaded files
	   * @property {number} filedUploadFilesNumber Number of unsuccessfully uploaded files
	   */
	  var state = {
	    status: null,
	    files: [],
	    uploadedFilesNumber: 0,
	    failedUploadFilesNumber: 0,
	    selectedUploadOption: null,
	    step: Page.SELECT_TYPE
	  };
	
	  /**
	   * @name  BatchUploadController#config
	   * @description Configuration of the component that will select files to upload.
	   * @type {object}
	   * @property {string} maxFileSize The maximum file size allowed to upload.
	   *                                Represents a human readable string size
	   *                                like `1KB`, `2MB`, `3GB`, `4TB`.
	   */
	  var config = {
	    maxFileSize: widget.getStringPreference('maxFileSize')
	  };
	
	  /**
	   * @name getInvalidStatusMessage
	   * @description Builds the error message and data to be shown in the message
	   * @typedef {function}
	   * @inner
	   * @param  {Array} valid   Collection of valid files
	   * @param  {Array} invalid Collection of invalid files
	   * @return {object}
	   */
	  var getInvalidStatusMessage = function getInvalidStatusMessage(valid, invalid) {
	    var message = void 0;
	    var data = {
	      validCount: valid.length,
	      filesCount: valid.length + invalid.length
	    };
	    var invalidFormat = [];
	    var invalidMaxSize = [];
	
	    invalid.forEach(function (file) {
	      if (file.$errorMessages.maxSize) {
	        invalidMaxSize.push(file);
	      } else {
	        invalidFormat.push(file);
	      }
	    });
	
	    if (invalidMaxSize.length && invalidFormat.length) {
	      message = 'error.invalid_files';
	      data.invalidFormatCount = invalidFormat.length;
	      data.invalidMaxSizeCount = invalidMaxSize.length;
	      data.fileMaxSize = invalidMaxSize[0].$errorParam;
	    } else if (invalidMaxSize.length) {
	      message = 'error.max_size_files';
	      data.invalidMaxSizeCount = invalidMaxSize.length;
	      data.fileMaxSize = invalidMaxSize[0].$errorParam;
	    } else {
	      message = 'error.invalid_format_files';
	      data.invalidFormatCount = invalidFormat.length;
	    }
	
	    return {
	      message: message,
	      data: data,
	      type: StatusType.ERROR
	    };
	  };
	
	  /**
	   * @name BatchUploadController#addFiles
	   *
	   * @description
	   * Adds new files to the queue. Will set error status when invalid files added.
	   *
	   * @type {function}
	   * @param {Array} files New valid files
	   * @param {Array} invalidFiles Invalid files
	   */
	  var addFiles = function addFiles(files, invalidFiles) {
	    var _state$files;
	
	    var filesToAdd = files.map(function (file) {
	      return {
	        data: file,
	        uploading: false,
	        uploaded: false,
	        uploadFailed: false,
	        progress: 0
	      };
	    });
	    (_state$files = state.files).push.apply(_state$files, _toConsumableArray(filesToAdd));
	
	    if (invalidFiles.length) {
	      state.status = getInvalidStatusMessage(files, invalidFiles);
	    }
	  };
	
	  /**
	   * @name BatchUploadController#clearStatus
	   * @description Clears controller status
	   * @type {function}
	   */
	  var clearStatus = function clearStatus() {
	    state.status = null;
	  };
	
	  /**
	   * @name BatchUploadController#onUploadFinished
	   * @description Handles successfuly uploaded files
	   * @type {function}
	   * @param  {object} file Uploaded file
	   * @inner
	   */
	  var onUploadFinished = function onUploadFinished(file) {
	    return function () {
	      file.uploaded = true;
	      file.uploadFailed = false;
	      state.uploadedFilesNumber++;
	    };
	  };
	
	  /**
	   * @name BatchUploadController#onUploadFailed
	   * @description Handles unsuccessfuly uploaded files
	   * @type {function}
	   * @param  {object} file Uploaded file
	   * @param {boolean} supressError Error status will not be set if parameter set to true
	   * @inner
	   */
	  var onUploadFailed = function onUploadFailed(file, supressError) {
	    return function (error) {
	      if (!file.uploadFailed) {
	        file.uploadFailed = true;
	        state.failedUploadFilesNumber++;
	      }
	      file.uploadError = errorMessages[error.code];
	
	      if (!supressError) {
	        state.status = {
	          message: errorMessages[error.code],
	          type: StatusType.ERROR
	        };
	      }
	    };
	  };
	
	  /**
	   * @description
	   * Uploads a single file to the server
	   *
	   * @name BatchUploadController#uploadFile
	   * @type {function}
	   * @param {object} file The file object to upload
	   * @param {boolean} supressError Error status will not be set if parameter set to true
	   * @return {object} An upload promise
	   */
	  var uploadFile = function uploadFile(file, supressError) {
	    if (!file || file.uploading || file.uploaded) return Promise.resolve();
	
	    file.uploading = true;
	    file.uploaded = false;
	    file.progress = 0;
	
	    return model.uploadBatchFile('legalentityId', file.data).then(onUploadFinished(file)).catch(onUploadFailed(file, supressError)).finally(function () {
	      file.progress = 100;
	      file.uploading = false;
	    });
	  };
	
	  /**
	   * @name BatchUploadController#isUploading
	   * @description Indicates is any of the files in the queue are being uploaded at the moment
	   * @type {function}
	   * @return {boolean} Returns true if there are active uploads, false otherwise.
	   */
	  var isUploading = function isUploading() {
	    return state.files.some(function (file) {
	      return file.uploading;
	    });
	  };
	
	  /**
	   * @description
	   * Process a collection files to be uploaded
	   *
	   * @name BatchUploadController#uploadFiles
	   * @type {function}
	   * @return {Array} An upload promise
	   */
	  var uploadFiles = function uploadFiles() {
	    var filesToUpload = state.files.filter(function (file) {
	      return !file.uploaded;
	    });
	    if ($ctrl.isUploading() || !filesToUpload.length) return Promise.resolve();
	
	    var uploadPromises = filesToUpload.map(function (file) {
	      return $ctrl.uploadFile(file, true);
	    });
	    return Promise.all(uploadPromises).finally(function () {
	      if (state.failedUploadFilesNumber) {
	        var message = state.failedUploadFilesNumber === 1 ? 'error.upload_file_failed' : 'error.upload_files_failed';
	
	        state.status = {
	          message: message,
	          type: StatusType.ERROR,
	          data: {
	            number: state.failedUploadFilesNumber
	          }
	        };
	      }
	    });
	  };
	
	  /**
	   * @description
	   * Removes a file from the upload queue.
	   * Mutates the internal files collection.
	   *
	   * @name  BatchUploadController#removeFile
	   * @type {function}
	   * @param  {object} file File to be removed
	   */
	  var removeFile = function removeFile(file) {
	    if (file.uploading) return;
	
	    var index = state.files.indexOf(file);
	    if (index === -1) return;
	
	    state.files.splice(index, 1);
	    if (file.uploaded) {
	      state.uploadedFilesNumber--;
	    } else if (file.uploadFailed) {
	      state.failedUploadFilesNumber--;
	    }
	    if (!state.files.length) {
	      clearStatus();
	    }
	  };
	
	  /**
	   * @name BatchUploadController#clearFiles
	   * @description Completely clears files upload queue
	   * @type {function}
	   */
	  var clearFiles = function clearFiles() {
	    if ($ctrl.isUploading()) return;
	
	    state.files = [];
	    state.uploadedFilesNumber = 0;
	    state.failedUploadFilesNumber = 0;
	  };
	
	  /**
	   * @name BatchUploadController#finishUploadSession
	   * @description Finishes current upload session by clearing upload queue
	   * @type {function}
	   */
	  var finishUploadSession = function finishUploadSession() {
	    $ctrl.clearFiles();
	    $ctrl.clearStatus();
	  };
	
	  /**
	   * @name BatchUploadController#showSelectTypePage
	   * @description Show select type page
	   * @type {function}
	   */
	  var showSelectTypePage = function showSelectTypePage() {
	    $ctrl.state.step = Page.SELECT_TYPE;
	    $ctrl.state.files = [];
	  };
	
	  Object.assign($ctrl, {
	    state: state,
	    config: config,
	    addFiles: addFiles,
	    uploadFiles: uploadFiles,
	    uploadFile: uploadFile,
	    removeFile: removeFile,
	    clearStatus: clearStatus,
	    clearFiles: clearFiles,
	    isUploading: isUploading,
	    finishUploadSession: finishUploadSession,
	    showSelectTypePage: showSelectTypePage
	  });
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-batch-upload-ng.js.map