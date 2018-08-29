(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("data-bb-cxp-authentication-http-ng"), require("data-bb-accessgroups-http-ng"), require("lib-bb-model-errors"));
	else if(typeof define === 'function' && define.amd)
		define("model-bb-select-context-ng", ["vendor-bb-angular", "data-bb-cxp-authentication-http-ng", "data-bb-accessgroups-http-ng", "lib-bb-model-errors"], factory);
	else if(typeof exports === 'object')
		exports["model-bb-select-context-ng"] = factory(require("vendor-bb-angular"), require("data-bb-cxp-authentication-http-ng"), require("data-bb-accessgroups-http-ng"), require("lib-bb-model-errors"));
	else
		root["model-bb-select-context-ng"] = factory(root["vendor-bb-angular"], root["data-bb-cxp-authentication-http-ng"], root["data-bb-accessgroups-http-ng"], root["lib-bb-model-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_44__, __WEBPACK_EXTERNAL_MODULE_46__) {
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

	module.exports = __webpack_require__(43);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modelSelectContextKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbAccessgroupsHttpNg = __webpack_require__(44);
	
	var _dataBbAccessgroupsHttpNg2 = _interopRequireDefault(_dataBbAccessgroupsHttpNg);
	
	var _dataBbCxpAuthenticationHttpNg = __webpack_require__(37);
	
	var _dataBbCxpAuthenticationHttpNg2 = _interopRequireDefault(_dataBbCxpAuthenticationHttpNg);
	
	var _selectContext = __webpack_require__(45);
	
	var _selectContext2 = _interopRequireDefault(_selectContext);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module model-bb-select-context-ng
	 *
	 * @description
	 * Model for widget-bb-select-context-ng
	 *
	 * @example
	 * import modelSelectContextModuleKey, { modelSelectContextKey } from 'model-bb-select-context-ng';
	 *
	 * angular
	 *   .module('ExampleModule', [
	 *     modelSelectContextModuleKey,
	 *   ])
	 *   .factory('someFactory', [
	 *     modelSelectContextKey,
	 *     // into
	 *     function someFactory(selectContextModel) {
	 *       // ...
	 *     },
	 *   ]);
	 */
	var moduleKey = 'model-bb-select-context-ng';
	var modelSelectContextKey = exports.modelSelectContextKey = moduleKey + ':model';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_dataBbAccessgroupsHttpNg2.default, _dataBbCxpAuthenticationHttpNg2.default]).factory(modelSelectContextKey, ['$q', _dataBbAccessgroupsHttpNg.accessGroupsDataKey, _dataBbCxpAuthenticationHttpNg.cXPAuthenticationDataKey,
	/* into */
	_selectContext2.default]).name;

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_44__;

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = selectContextModel;
	
	var _libBbModelErrors = __webpack_require__(46);
	
	/**
	 * Model factory for model-bb-select-context-ng
	 *
	 * @inner
	 * @type {function}
	 * @param {Object} Promise    An ES2015 compatible `Promise` object.
	 * @param {Object} accessData Access data module
	 *
	 * @return {Object}
	 */
	function selectContextModel(Promise, accessData, cxpData) {
	  /**
	   * @name selectContextModel#getServiceAgreements
	   * @type {function}
	   *
	   * @description
	   * Get list of Service Agreements
	   *
	   * @param  {object} params Params to send to the request
	   * @returns {Promise.<ServiceAgreements, ModelError>} A Promise
	   */
	  var getServiceAgreements = function getServiceAgreements(params) {
	    return accessData.getAccessgroupsUsercontextServiceagreements(params).then(function (resp) {
	      return {
	        data: resp.data,
	        totalItems: parseInt(resp.headers('x-total-count'), 10) || 0
	      };
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name selectContextModel#getLegalEntities
	   * @type {function}
	   *
	   * @description
	   * Get list of available Legal Entities for selected Service Agreement
	   *
	   * @param {string} id     Service Agreement ID
	   * @param {Object} params Search parameters
	   * @returns {Promise.<LegalEntities, ModelError>} A Promise
	   */
	  var getLegalEntities = function getLegalEntities(id, params) {
	    return accessData.getAccessgroupsUsercontextServiceagreementsLegalentities(id, params).then(function (resp) {
	      return {
	        data: resp.data,
	        totalItems: parseInt(resp.headers('x-total-count'), 10) || 0
	      };
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name selectContextModel#selectUserContext
	   * @type {function}
	   *
	   * @description
	   * Request user context with selected Service Agreement and Legal Entity
	   *
	   * @param {string} serviceAgreementId
	   * @param {string} legalEntityId
	   * @returns {Promise}
	   */
	  var selectUserContext = function selectUserContext(serviceAgreementId, legalEntityId) {
	    return accessData.postAccessgroupsUsercontextRecord({ serviceAgreementId: serviceAgreementId, legalEntityId: legalEntityId }).then(function (resp) {
	      return resp.status === 204;
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name selectContextModel#logout
	   * @type {function}
	   *
	   * @description
	   * Makes a logout request
	   *
	   * @returns {Promise}
	   */
	  var logout = function logout() {
	    return cxpData.postLogout();
	  };
	
	  /**
	   * @name selectContextModel#getProfile
	   * @type {function}
	   *
	   * @description
	   * Retrieves profile information
	   *
	   * @returns {Promise}
	   */
	  var getProfile = function getProfile() {
	    return cxpData.getProfile().then(function (res) {
	      return res.data;
	    });
	  };
	
	  /**
	   * @name selectContextModel
	   * @type {Object}
	   */
	  return {
	    getServiceAgreements: getServiceAgreements,
	    getLegalEntities: getLegalEntities,
	    selectUserContext: selectUserContext,
	    logout: logout,
	    getProfile: getProfile
	  };
	}

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_46__;

/***/ })

/******/ })
});
;
//# sourceMappingURL=model-bb-select-context-ng.js.map