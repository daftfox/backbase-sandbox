(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("data-bb-contact-http-ng"), require("lib-bb-model-errors"));
	else if(typeof define === 'function' && define.amd)
		define("model-bus-contact-approvals-ng", ["vendor-bb-angular", "data-bb-contact-http-ng", "lib-bb-model-errors"], factory);
	else if(typeof exports === 'object')
		exports["model-bus-contact-approvals-ng"] = factory(require("vendor-bb-angular"), require("data-bb-contact-http-ng"), require("lib-bb-model-errors"));
	else
		root["model-bus-contact-approvals-ng"] = factory(root["vendor-bb-angular"], root["data-bb-contact-http-ng"], root["lib-bb-model-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_70__, __WEBPACK_EXTERNAL_MODULE_73__) {
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

	module.exports = __webpack_require__(75);

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_70__;

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_73__;

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modelContactApprovalsKey = exports.moduleKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(53);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbContactHttpNg = __webpack_require__(70);
	
	var _dataBbContactHttpNg2 = _interopRequireDefault(_dataBbContactHttpNg);
	
	var _contactApprovals = __webpack_require__(76);
	
	var _contactApprovals2 = _interopRequireDefault(_contactApprovals);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = exports.moduleKey = 'model-bus-contact-approvals-ng'; /**
	                                                                       * @module model-bus-contact-approvals-ng
	                                                                       *
	                                                                       * @description
	                                                                       * Contact Approvals widget model.
	                                                                       *
	                                                                       * @example
	                                                                       * import modelContactApprovalsModuleKey,
	                                                                       *  { modelContactApprovalsKey } from 'model-bus-contact-approvals-ng';
	                                                                       */
	var modelContactApprovalsKey = exports.modelContactApprovalsKey = '${moduleKey}:model';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_dataBbContactHttpNg2.default]).factory(modelContactApprovalsKey, [_dataBbContactHttpNg.contactDataKey,
	/* into */
	_contactApprovals2.default]).name;

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = contactApprovalsModel;
	
	var _libBbModelErrors = __webpack_require__(73);
	
	var toInt = function toInt(value) {
	  return parseInt(value, 10) || 0;
	};
	
	/**
	 * @inner
	 * @type {function}
	 * @param {object} contactData
	 * @return {object}
	 */
	function contactApprovalsModel(contactData) {
	  /**
	   * @name contactApprovalsModel#getApprovals
	   * @type {function}
	   *
	   * @description
	   * Gets the list of contact approval requests
	   *
	   * @param {object} params Parameters to be passed.
	   * @returns {Promise.<Object>} A Promise with array of contact approval requests.
	   */
	  var getApprovals = function getApprovals(params) {
	    return contactData.getApprovals(params).then(function (raw) {
	      return {
	        data: raw.data,
	        totalCount: toInt(raw.headers('x-total-count'))
	      };
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name contactApprovalsModel#getUserApprovals
	   * @type {function}
	   *
	   * @description
	   * Gets the list of contact approval requests created by current user
	   *
	   * @param {object} params Paramaters to be passed.
	   * @returns {Promise.<Object>} A Promise with array of contact approval requests.
	   */
	  var getUserApprovals = function getUserApprovals(params) {
	    return contactData.getApprovalsMe(params).then(function (raw) {
	      return {
	        data: raw.data,
	        totalCount: toInt(raw.headers('x-total-count'))
	      };
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name contactApprovalsModel#authorizeContact
	   * @type {function}
	   * @description
	   * Authorizes a contact approval request.
	   *
	   * @param {string} requestId ID of the contact request to authorize.
	   * @returns {Promise}
	   */
	  var authorizeContact = function authorizeContact(requestId) {
	    return contactData.postApprovalsApprovalRecordsRecord(requestId).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name contactApprovalsModel#rejectContact
	   * @type {function}
	   * @description
	   * Rejects a contact approval request.
	   *
	   * @param {string} requestId ID of the contact request to reject.
	   * @returns {Promise}
	   */
	  var rejectContact = function rejectContact(requestId) {
	    return contactData.postApprovalsRejectionRecordsRecord(requestId).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name contactApprovalsModel
	   * @type {object}
	   *
	   * @description
	   * Model factory for widget-bus-contact-approvals-ng
	   */
	  return {
	    getApprovals: getApprovals,
	    getUserApprovals: getUserApprovals,
	    authorizeContact: authorizeContact,
	    rejectContact: rejectContact
	  };
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=model-bus-contact-approvals-ng.js.map