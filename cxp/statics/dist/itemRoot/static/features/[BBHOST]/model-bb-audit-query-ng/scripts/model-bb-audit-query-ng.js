(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("data-bb-audit-http-ng"), require("data-bb-legalentity-http-ng"), require("data-bb-accessgroups-http-ng"), require("lib-bb-model-errors"));
	else if(typeof define === 'function' && define.amd)
		define("model-bb-audit-query-ng", ["vendor-bb-angular", "data-bb-audit-http-ng", "data-bb-legalentity-http-ng", "data-bb-accessgroups-http-ng", "lib-bb-model-errors"], factory);
	else if(typeof exports === 'object')
		exports["model-bb-audit-query-ng"] = factory(require("vendor-bb-angular"), require("data-bb-audit-http-ng"), require("data-bb-legalentity-http-ng"), require("data-bb-accessgroups-http-ng"), require("lib-bb-model-errors"));
	else
		root["model-bb-audit-query-ng"] = factory(root["vendor-bb-angular"], root["data-bb-audit-http-ng"], root["data-bb-legalentity-http-ng"], root["data-bb-accessgroups-http-ng"], root["lib-bb-model-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_22__) {
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

	module.exports = __webpack_require__(17);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modelAccessGroupsKey = exports.modelLegalEntitiesKey = exports.modelAuditQueryKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(5);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbAuditHttpNg = __webpack_require__(18);
	
	var _dataBbAuditHttpNg2 = _interopRequireDefault(_dataBbAuditHttpNg);
	
	var _dataBbLegalentityHttpNg = __webpack_require__(19);
	
	var _dataBbLegalentityHttpNg2 = _interopRequireDefault(_dataBbLegalentityHttpNg);
	
	var _dataBbAccessgroupsHttpNg = __webpack_require__(20);
	
	var _dataBbAccessgroupsHttpNg2 = _interopRequireDefault(_dataBbAccessgroupsHttpNg);
	
	var _auditQuery = __webpack_require__(21);
	
	var _auditQuery2 = _interopRequireDefault(_auditQuery);
	
	var _legalEntities = __webpack_require__(23);
	
	var _legalEntities2 = _interopRequireDefault(_legalEntities);
	
	var _accessGroups = __webpack_require__(24);
	
	var _accessGroups2 = _interopRequireDefault(_accessGroups);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'model-bb-audit-query-ng'; /**
	                                            * @module model-bb-audit-query-ng
	                                            *
	                                            * @description
	                                            * Model for widget-bb-audit-query-ng
	                                            *
	                                            * @example
	                                            * import modelAuditQueryModuleKey, { modelAuditQueryKey } from 'model-bb-audit-query-ng';
	                                            *
	                                            * angular
	                                            *   .module('ExampleModule', [
	                                            *     modelAuditQueryModuleKey,
	                                            *   ])
	                                            *   .factory('someFactory', [
	                                            *     modelAuditQueryKey,
	                                            *     // into
	                                            *     function someFactory(auditQueryModel) {
	                                            *       // ...
	                                            *     },
	                                            *   ]);
	                                            */
	
	var legalEntitiesModuleKey = 'model-bb-legal-entities-ng';
	var accessGroupsModuleKey = 'model-bb-access-groups-ng';
	var modelAuditQueryKey = exports.modelAuditQueryKey = moduleKey + ':model';
	var modelLegalEntitiesKey = exports.modelLegalEntitiesKey = legalEntitiesModuleKey + ':model';
	var modelAccessGroupsKey = exports.modelAccessGroupsKey = accessGroupsModuleKey + ':model';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_dataBbAuditHttpNg2.default, _dataBbLegalentityHttpNg2.default, _dataBbAccessgroupsHttpNg2.default]).factory(modelLegalEntitiesKey, ['$q', _dataBbLegalentityHttpNg.legalEntityDataKey,
	/* into */
	_legalEntities2.default]).factory(modelAccessGroupsKey, ['$q', _dataBbAccessgroupsHttpNg.accessGroupsDataKey,
	/* into */
	_accessGroups2.default]).factory(modelAuditQueryKey, ['$q', _dataBbAuditHttpNg.auditDataKey, _dataBbLegalentityHttpNg.legalEntityDataKey,
	/* into */
	_auditQuery2.default]).name;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = AuditQueryModel;
	
	var _libBbModelErrors = __webpack_require__(22);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var knownParms = ['startDate', 'endDate', 'eventCategories', 'objectType', 'eventAction', 'usernames', 'userId', 'legalEntityIds', 'serviceAgreementId', 'from', 'size'];
	
	/**
	 * @typedef {Object} QueryParameters
	 * @property {?string} startDate - in format YYYY-MM-DD
	 * @property {?string} endDate - in format YYYY-MM-DD
	 * @property {?string[]} eventCategories - to filter by
	 * @property {?string} objectType - to filter by
	 * @property {?string} eventAction - to filter by
	 * @property {?string[]} usernames - to filter by
	 * @property {?string} userId - to filter by
	 * @property {?string[]} legalEntityIds - to filter by
	 * @property {?string} serviceAgreementId - to filter by
	 */
	
	/**
	 * @typedef {Object} MappedQueryParameters
	 * @property {?string} startDate - in format YYYY-MM-DD
	 * @property {?string} endDate - in format YYYY-MM-DD
	 * @property {?string} eventCategories - comma separated list to filter by
	 * @property {?string} objectType - to filter by
	 * @property {?string} eventAction - to filter by
	 * @property {?string} usernames - comma separated list to filter by
	 * @property {?string} userId - to filter by
	 * @property {?string} legalEntityIds - comma separated list to filter by
	 * @property {?string} serviceAgreementId - to filter by
	 */
	
	/**
	 *
	 * @name AuditQueryModel
	 * @type {function}
	 * @param {Object} Promise An ES2015 compatible `Promise` object.
	 * @param {module:data-bb-audit-query-http-ng.AuditQueryData} auditQueryData
	 * @return {Object}
	 *
	 * @description Model factory for model-bb-audit-query-ng
	 */
	function AuditQueryModel(Promise, auditQueryData) {
	  /**
	   * @name AuditQueryModel#mapParameters
	   * @inner
	   * @param {QueryParameters} parms - raw parameters.
	   * @type {function}
	   * @returns {MappedQueryParameters}
	   *
	   * @description Map known parameters through to the data api.
	   * Converting any string arrays to comma separated strings.
	   */
	  var mapParameters = function mapParameters(parms) {
	    // traditional function rather than arrow function to avoid es-lint no-confusing-arrow
	    function mapVal(val) {
	      return Array.isArray(val) ? val.join(',') : val;
	    }
	    var parmsWithValue = Object.entries(parms).filter(function (_ref) {
	      var _ref2 = _slicedToArray(_ref, 2),
	          key = _ref2[0],
	          val = _ref2[1];
	
	      return knownParms.includes(key) && (Array.isArray(val) ? val.length : val);
	    });
	    return parmsWithValue.reduce(function (acc, _ref3) {
	      var _ref4 = _slicedToArray(_ref3, 2),
	          key = _ref4[0],
	          val = _ref4[1];
	
	      return Object.assign(acc, _defineProperty({}, key, mapVal(val)));
	    }, {});
	  };
	
	  /**
	   * @name AuditQueryModel#getAuditLogMessages
	   * @param {QueryParameters} parms - raw parameters.
	   * @type {function}
	   * @returns {Promise<AuditResponse, ModelError>}
	   *
	   * @description Get the response of a list of audit query messages and the header information
	   */
	  var getAuditLogMessages = function getAuditLogMessages(params, headerParams) {
	    var mappedParameters = mapParameters(params);
	    return auditQueryData.getAuditLogMessages(mappedParameters, headerParams).then(function (_ref5) {
	      var headers = _ref5.headers,
	          data = _ref5.data;
	      return { headers: headers, data: data };
	    }).catch(function (error) {
	      throw (0, _libBbModelErrors.fromHttpError)(error);
	    });
	  };
	
	  /**
	   * @name AuditQueryModel#getAuditLogEventCategories
	   * @type {function}
	   * @returns {Promise<AuditEventCategoryResponse, ModelError>}
	   *
	   * @description Get the response of a list of event Categories
	   *   with nested types and statuses
	   */
	  var getAuditLogEventCategories = function getAuditLogEventCategories() {
	    return auditQueryData.getAuditLogEventCategories().then(function (data) {
	      return data;
	    }).catch(function (error) {
	      throw (0, _libBbModelErrors.fromHttpError)(error);
	    });
	  };
	
	  /**
	   * @name AuditQueryModel
	   * @type {Object}
	   *
	   * @description Audit Query model service
	   */
	  return {
	    getAuditLogMessages: getAuditLogMessages,
	    getAuditLogEventCategories: getAuditLogEventCategories
	  };
	}
	
	/**
	 * Audit Response type definition - header total count and data
	 * @typedef {Object} AuditResponse
	 * @property {number} totalCount
	 * @property {Array<module:data-bb-audit-query-http-ng.AuditMessage>} auditMessages
	 */
	
	/**
	 * Event Data type definition
	 * @typedef {Object} EventData
	 * @property {string} key - key
	 * @property {string} value - value
	 */
	
	/**
	 * Audit Response type definition - header total count and data
	 * @typedef {Object} AuditEventCategoryResponse
	 * @property {Array<EventCategory>} eventCategories
	 */
	
	/**
	 * Audit event category type definition
	 * @typedef {Object} EventCategory
	 * @property {string} eventCategory - name of the event category
	 * @property {Array<EventCategoryObjectType>} objectTypes - object types
	 */
	
	/**
	 * Audit event category type definition
	 * @typedef {Object} EventCategoryObjectType
	 * @property {string} objectType - name of object type
	 * @property {Array<String>} eventActions - event actions
	 */
	
	/**
	 * Audit Log type definition
	 * @typedef {Object} AuditMessage
	 * @property {string} messageSetId       - id of the message set
	 * @property {string} eventCategory      - event category
	 * @property {string} objectType         - object type
	 * @property {string} eventAction        - event action
	 * @property {string} username           - user name
	 * @property {string} userId             - user id
	 * @property {string} timestamp          - time stamp
	 * @property {string} eventDescription   - event description
	 * @property {string} legalEntityId      - legal entity id
	 * @property {string} serviceAgreementId - service agreement id
	 * @property {EventData[]} eventData     - event data collection
	 */

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = LegalEntitiesModel;
	
	var _libBbModelErrors = __webpack_require__(22);
	
	/**
	 *
	 * @name LegalEntitiesModel
	 * @type {function}
	 * @param {Object} Promise An ES2015 compatible `Promise` object.
	 * @param {module:data-bb-legal-entity-http-ng.LegalEntityQueryData} legalEntityQueryData
	 * @return {Object}
	 *
	 * @description Model factory for model-bb-audit-query-ng
	 */
	function LegalEntitiesModel(Promise, legalEntityQueryData) {
	  /**
	   * @name LegalEntitiesModel#searchLegalEntities
	   * @param {string} query
	   * @type {function}
	   * @returns {Promise<Object, ModelError>}
	   *
	   * @description Get a list of legal entities based on query param
	   */
	  var searchLegalEntities = function searchLegalEntities(query) {
	    return legalEntityQueryData.getLegalentitiesSubEntities({ query: query }).then(function (data) {
	      return data;
	    }).catch(function (error) {
	      throw (0, _libBbModelErrors.fromHttpError)(error);
	    });
	  };
	
	  /**
	   * @name LegalEntitiesModel
	   * @type {Object}
	   *
	   * @description Legal Entities model service
	   */
	  return {
	    searchLegalEntities: searchLegalEntities
	  };
	}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = AccessGroupsModel;
	
	var _libBbModelErrors = __webpack_require__(22);
	
	/**
	 *
	 * @name AccessGroupsModel
	 * @type {function}
	 * @param {Object} Promise An ES2015 compatible `Promise` object.
	 * @param {module:data-bb-legal-entity-http-ng.AccessGroupQueryData} AccessGroupQueryData
	 * @return {Object}
	 *
	 * @description Model factory for model-bb-audit-query-ng
	 */
	function AccessGroupsModel(Promise, accessGroupQueryData) {
	  /**
	   * @name AccessGroupsModel#searchServiceAgreements
	   * @param {string} query
	   * @type {function}
	   * @returns {Promise<Object, ModelError>}
	   *
	   * @description Get a list of service agreements based on query param
	   */
	  var searchServiceAgreements = function searchServiceAgreements(query) {
	    return accessGroupQueryData.getAccessgroupsUsercontextServiceagreements({ query: query }).then(function (data) {
	      return data;
	    }).catch(function (error) {
	      throw (0, _libBbModelErrors.fromHttpError)(error);
	    });
	  };
	
	  /**
	   * @name AccessGroupsModel
	   * @type {Object}
	   *
	   * @description Access Groups model service
	   */
	  return {
	    searchServiceAgreements: searchServiceAgreements
	  };
	}

/***/ })
/******/ ])
});
;
//# sourceMappingURL=model-bb-audit-query-ng.js.map