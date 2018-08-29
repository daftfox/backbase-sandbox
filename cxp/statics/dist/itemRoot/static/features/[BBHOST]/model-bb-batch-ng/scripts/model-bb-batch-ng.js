(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("data-bb-batches-http-ng"), require("lib-bb-model-errors"));
	else if(typeof define === 'function' && define.amd)
		define("model-bb-batch-ng", ["vendor-bb-angular", "data-bb-batches-http-ng", "lib-bb-model-errors"], factory);
	else if(typeof exports === 'object')
		exports["model-bb-batch-ng"] = factory(require("vendor-bb-angular"), require("data-bb-batches-http-ng"), require("lib-bb-model-errors"));
	else
		root["model-bb-batch-ng"] = factory(root["vendor-bb-angular"], root["data-bb-batches-http-ng"], root["lib-bb-model-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_22__) {
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

	module.exports = __webpack_require__(18);

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modelBatchKey = exports.moduleKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(19);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbBatchesHttpNg = __webpack_require__(20);
	
	var _dataBbBatchesHttpNg2 = _interopRequireDefault(_dataBbBatchesHttpNg);
	
	var _batch = __webpack_require__(21);
	
	var _batch2 = _interopRequireDefault(_batch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = exports.moduleKey = 'model-bb-batch-ng'; /**
	                                                          * @module model-bb-batch-ng
	                                                          *
	                                                          * @description
	                                                          * Batches widget model.
	                                                          *
	                                                          * @usage
	                                                          * import modelModuleKey, {
	                                                          *   modelBatchKey,
	                                                          * } from 'model-bb-batch-ng';
	                                                          *
	                                                          * angular.module('widget-bb-batch-ng', [
	                                                          *   modelModuleKey,
	                                                          * ])
	                                                          * .controller('BatchController', [
	                                                          *   modelBatchKey,
	                                                          *   ...,
	                                                          * ])
	                                                          */
	var modelBatchKey = exports.modelBatchKey = 'model-bb-batch-ng:model';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_dataBbBatchesHttpNg2.default]).factory(modelBatchKey, [_dataBbBatchesHttpNg.batchesDataKey,
	/* into */
	_batch2.default]).name;

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = batchModel;
	
	var _libBbModelErrors = __webpack_require__(22);
	
	/**
	 * Batches model factory
	 * @returns {object}
	 * @inner
	 */
	function batchModel(data) {
	  /**
	   * @name handleError
	   *
	   * @description
	   * Throws new error based on initial network error.
	   * @type {function}
	   * @param {object} error Network request error
	   * @returns {promise.<Object>} A Promise for batch file upload.
	   * @inner
	   */
	  var handleError = function handleError(error) {
	    throw (0, _libBbModelErrors.fromHttpError)(error);
	  };
	
	  /**
	   * @name batchModel#uploadBatchFile
	   *
	   * @description
	   * Uploads batch file.
	   *
	   * @type {function}
	   * @param {string} legalEntityId Id of the legal entity for the batch file.
	   * @param {object} file Batch file data
	   * @returns {promise.<Object>} A Promise for batch file upload.
	   */
	  var uploadBatchFile = function uploadBatchFile(legalEntityId, file) {
	    return data.postBatchesLegalentityRecord(legalEntityId, file).catch(handleError);
	  };
	
	  /**
	   * @name batchModel#getBatches
	   *
	   * @description
	   * Gets a list of batches.
	   *
	   * @type {function}
	   * @param {string} legalEntityId Id of the legal entity for the batch file
	   * @param {?BatchesRequestParams} requestParams Contains each parameter to build the request querystring
	   * @returns {promise.<array>} A Promise for a collection of batches
	   */
	  var getBatches = function getBatches(legalEntityId, requestParams) {
	    return data.getBatchesLegalentityRecord(legalEntityId, requestParams).then(function (raw) {
	      return {
	        data: raw.data,
	        totalCount: parseInt(raw.headers('x-total-count'), 10)
	      };
	    }).catch(handleError);
	  };
	
	  /**
	   * @name batchModel#getBatchesAuthorizations
	   *
	   * @description
	   * Get a list of batches with pending authorization.
	   *
	   * @type {function}
	   * @param {string} legalEntityId Id of the legal entity for the batch file
	   * @param {?BatchesRequestParams} requestParams Contains each parameter to build the request query string
	   * @returns {promise.<array>} A Promise for a collection of pending authorization batches
	   */
	  var getBatchesAuthorizations = function getBatchesAuthorizations(legalEntityId, requestParams) {
	    return data.getBatchesLegalentityAuthorizations(legalEntityId, requestParams).then(function (raw) {
	      return {
	        data: raw.data,
	        totalCount: parseInt(raw.headers('x-total-count'), 10) || 0
	      };
	    }).catch(handleError);
	  };
	
	  /**
	   * @name batchModel#authorizeBatch
	   * @type {function}
	   * @description
	   * Authorizes a batch of payments.
	   * @param {string} legalEntityId Id of the legal entity for the batch file
	   * @param {string} batchId Id of the batch
	   * @returns {Promise}
	   */
	  var authorizeBatch = function authorizeBatch(legalEntityId, batchId) {
	    return data.postBatchesLegalentityAuthorizationsRecord(legalEntityId, batchId).catch(handleError);
	  };
	
	  /**
	   * @name batchModel#authorizeMultipleBatches
	   * @type {function}
	   * @description
	   * Authorizes multiple batches at once.
	   * @param {string} legalEntityId Id of the legal entity for the batch file
	   * @param {array} batchIds Collection of batch ids
	   * @returns {Promise}
	   */
	  var authorizeMultipleBatches = function authorizeMultipleBatches(legalEntityId, batchIds) {
	    var succeeded = [];
	    var failed = [];
	    var promises = batchIds.map(function (id) {
	      return data.postBatchesLegalentityAuthorizationsRecord(legalEntityId, id).then(function () {
	        return succeeded.push(id);
	      }).catch(function () {
	        return failed.push(id);
	      });
	    });
	
	    return Promise.all(promises).then(function () {
	      return {
	        succeeded: succeeded,
	        failed: failed
	      };
	    });
	  };
	
	  /**
	   * @name batchModel#rejectBatch
	   * @type {function}
	   * @description
	   * Rejects a batch of payments.
	   * @param {string} legalEntityId Id of the legal entity for the batch file
	   * @param {string} batchId Id of the batch
	   * @returns {Promise}
	   */
	  var rejectBatch = function rejectBatch(legalEntityId, batchId) {
	    return data.postBatchesLegalentityRejectionsRecord(legalEntityId, batchId).catch(handleError);
	  };
	
	  /**
	   * @name batchModel#rejectMultipleBatches
	   * @type {function}
	   * @description
	   * Rejects multiple batches at once.
	   * @param {string} legalEntityId Id of the legal entity for the batch file
	   * @param {array} batchIds Collection of batch ids
	   * @returns {Promise}
	   */
	  var rejectMultipleBatches = function rejectMultipleBatches(legalEntityId, batchIds) {
	    var succeeded = [];
	    var failed = [];
	    var promises = batchIds.map(function (id) {
	      return data.postBatchesLegalentityRejectionsRecord(legalEntityId, id).then(function () {
	        return succeeded.push(id);
	      }).catch(function () {
	        return failed.push(id);
	      });
	    });
	
	    return Promise.all(promises).then(function () {
	      return {
	        succeeded: succeeded,
	        failed: failed
	      };
	    });
	  };
	
	  /**
	   * @name batchModel
	   * @type {object}
	   */
	  return {
	    uploadBatchFile: uploadBatchFile,
	    getBatches: getBatches,
	    getBatchesAuthorizations: getBatchesAuthorizations,
	    authorizeBatch: authorizeBatch,
	    authorizeMultipleBatches: authorizeMultipleBatches,
	    rejectBatch: rejectBatch,
	    rejectMultipleBatches: rejectMultipleBatches
	  };
	}
	
	/**
	 * @typedef {object} BatchesRequestParams
	 * @property {string} orderBy Key of the column to sort the returned list of batches
	 * @property {string} direction Sort direction `ASC` or `DESC`. By default is `DESC`
	 */
	/* eslint max-len: ["error", { "ignoreComments": true }] */

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ })

/******/ })
});
;
//# sourceMappingURL=model-bb-batch-ng.js.map