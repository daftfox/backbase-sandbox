(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("data-bb-user-http-ng"), require("data-bb-legalentity-http-ng"));
	else if(typeof define === 'function' && define.amd)
		define("model-bb-user-ng", ["vendor-bb-angular", "data-bb-user-http-ng", "data-bb-legalentity-http-ng"], factory);
	else if(typeof exports === 'object')
		exports["model-bb-user-ng"] = factory(require("vendor-bb-angular"), require("data-bb-user-http-ng"), require("data-bb-legalentity-http-ng"));
	else
		root["model-bb-user-ng"] = factory(root["vendor-bb-angular"], root["data-bb-user-http-ng"], root["data-bb-legalentity-http-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_40__) {
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

	module.exports = __webpack_require__(39);

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_35__;

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modelLegalEntitiesKey = exports.modelUserKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(35);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbUserHttpNg = __webpack_require__(36);
	
	var _dataBbUserHttpNg2 = _interopRequireDefault(_dataBbUserHttpNg);
	
	var _dataBbLegalentityHttpNg = __webpack_require__(40);
	
	var _dataBbLegalentityHttpNg2 = _interopRequireDefault(_dataBbLegalentityHttpNg);
	
	var _user = __webpack_require__(41);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _legalEntities = __webpack_require__(42);
	
	var _legalEntities2 = _interopRequireDefault(_legalEntities);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'model-bb-user-ng'; /**
	                                     * @module model-bb-user-ng
	                                     *
	                                     * @description
	                                     * Model for widget-bb-user-ng
	                                     *
	                                     * @example
	                                     * import modelUserModuleKey, { modelUserKey } from 'model-bb-user-ng';
	                                     *
	                                     * angular
	                                     *   .module('ExampleModule', [
	                                     *     modelUserModuleKey,
	                                     *   ])
	                                     *   .factory('someFactory', [
	                                     *     modelUserKey,
	                                     *     // into
	                                     *     function someFactory(userModel) {
	                                     *       // ...
	                                     *     },
	                                     *   ]);
	                                     */
	
	var legalEntitiesModuleKey = 'model-bb-legal-entities-ng';
	var modelUserKey = exports.modelUserKey = moduleKey + ':model';
	var modelLegalEntitiesKey = exports.modelLegalEntitiesKey = legalEntitiesModuleKey + ':model';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_dataBbUserHttpNg2.default, _dataBbLegalentityHttpNg2.default]).factory(modelLegalEntitiesKey, ['$q', _dataBbLegalentityHttpNg.legalEntityDataKey,
	/* into */
	_legalEntities2.default]).factory(modelUserKey, ['$q', _dataBbUserHttpNg.userDataKey,
	/* into */
	_user2.default]).name;

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_40__;

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = userModel;
	/**
	 * Model factory for model-bb-user-ng
	 *
	 * @inner
	 * @type {function}
	 * @param {Object} Promise An ES2015 compatible `Promise` object.
	 *
	 * @return {Object}
	 */
	function userModel(Promise, userData) {
	  /**
	   * @name userModel#postUsersIdentitiesRecord
	   * @type {function}
	   *
	   * @description
	   * Post users identities record
	   *
	   * @returns {Promise.<Object>} A Promise
	   */
	  function postUsersIdentitiesRecord(data) {
	    return userData.postUsersIdentitiesRecord(data);
	  }
	
	  /**
	   *
	   * @name userModel#getUsersIdentities
	   * @type {function}
	   * @param {Object} params Any parameters for the API call
	   * @returns {Promise<Array<Object>, module:lib-bb-model-errors.ModelError>}
	   * @description Returns a list of users paged and filtered if passed
	   */
	  function getUsersIdentities(data) {
	    return userData.getUsersIdentities(data);
	  }
	
	  /**
	   *
	   * @name userModel#getUsersIdentitiesRecord
	   * @type {function}
	   * @param {string} id User identity Id
	   * @param {Object} params Any parameters for the API call
	   * @returns {Promise<module:data-bb-user-http-ng.UserIdentitiesGetResponse,
	   *  module:lib-bb-model-errors.ModelError>}
	   * @description Returns user identity record
	   */
	  function getUsersIdentitiesRecord(id, params) {
	    return userData.getUsersIdentitiesRecord(id, params);
	  }
	
	  /**
	   * @name userModel
	   * @type {Object}
	   */
	  return {
	    postUsersIdentitiesRecord: postUsersIdentitiesRecord,
	    getUsersIdentities: getUsersIdentities,
	    getUsersIdentitiesRecord: getUsersIdentitiesRecord
	  };
	}

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = legalEntitiesModel;
	/**
	 * Model factory for model-bb-legal-entities-ng
	 *
	 * @inner
	 * @type {function}
	 * @param {Object} Promise An ES2015 compatible `Promise` object.
	 *
	 * @return {Object}
	 */
	function legalEntitiesModel(Promise, legalEntitiesData) {
	  /**
	   * @name legalEntitiesModel#getLegalEntitiesRecord
	   * @type {function}
	   * @description Get legal entity record
	   * @param {string} id
	   * @param {object} params
	   * @returns {Promise.<Object>} A Promise
	   */
	  function getLegalEntitiesRecord(id, params) {
	    return legalEntitiesData.getLegalentitiesRecord(id, params);
	  }
	
	  /**
	   * @name legalEntitiesModel
	   * @type {Object}
	   */
	  return {
	    getLegalEntitiesRecord: getLegalEntitiesRecord
	  };
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=model-bb-user-ng.js.map