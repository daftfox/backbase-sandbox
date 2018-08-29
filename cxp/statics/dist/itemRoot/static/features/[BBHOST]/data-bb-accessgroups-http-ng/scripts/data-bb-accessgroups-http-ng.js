(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-accessgroups-http-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-accessgroups-http-ng"] = factory(require("vendor-bb-angular"));
	else
		root["data-bb-accessgroups-http-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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

	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.accessGroupsDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbAccessgroupsHttp = __webpack_require__(3);
	
	var _dataBbAccessgroupsHttp2 = _interopRequireDefault(_dataBbAccessgroupsHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	/**
	 * @module data-bb-accessgroups-http-ng
	 *
	 * @description A data module for accessing the AccessGroups REST API.
	 *
	 * @returns {String} `data-bb-accessgroups-http-ng`
	 * @example
	 * import accessGroupsDataModuleKey, {
	 *   accessGroupsDataKey,
	 * } from 'data-bb-accessgroups-http-ng';
	 */
	
	var accessGroupsDataModuleKey = 'data-bb-accessgroups-http-ng';
	/**
	 * @name accessGroupsDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the AccessGroupsData service
	 */
	var accessGroupsDataKey = exports.accessGroupsDataKey = 'data-bb-accessgroups-http-ng:accessGroupsData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(accessGroupsDataModuleKey, [])
	
	/**
	 * @constructor AccessGroupsData
	 * @type {object}
	 *
	 * @description Public api for data-bb-accessgroups-http-ng service
	 *
	 */
	.provider(accessGroupsDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name AccessGroupsDataProvider
	   * @type {object}
	   * @ngkey data-bb-accessgroups-http-ng:accessGroupsDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-accessgroups-http-ng:accessGroupsDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-accessgroups-http-ng:accessGroupsDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name AccessGroupsDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name AccessGroupsDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http', '$httpParamSerializer',
	    /* into */
	    (0, _dataBbAccessgroupsHttp2.default)(config)]
	  };
	}]).name;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/* eslint-disable */
	exports.default = function (conf) {
	  return function (httpClient, serializeParams) {
	    var _ref;
	
	    // Base param constants
	    var baseUri = conf.baseUri || '';
	
	    var version = 'v2';
	
	    /**
	     * The root defined types from the RAML.
	     * @private
	     */
	    var definedTypes = {};
	
	    definedTypes['AccessGroupsData.GetDataAccessGroups'] = { "type": "array", "items": { "properties": { "dataAccessGroupId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true } } } };
	
	    definedTypes['AccessGroupsData.DataAccessGroupItem'] = { "properties": { "dataAccessGroupId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true } } };
	
	    definedTypes['AccessGroupsData.DataAccessGroupItemBase'] = { "properties": { "name": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^\\S(.*(\\S))?$", "required": true }, "description": { "type": "string", "minLength": 1, "maxLength": 255, "pattern": "^\\S(.*(\\S))?$", "required": true }, "serviceAgreementId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^[0-9a-f]{32}", "required": false }, "legalEntityId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^\\S(.*(\\S))?$", "required": true }, "type": { "type": "string", "enum": ["ARRANGEMENTS", "CONTACTS"], "required": true }, "items": { "type": "array", "items": { "properties": {} }, "required": true } } };
	
	    definedTypes['AccessGroupsData.GetDataGroups'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^[0-9a-f]{32}", "required": true } } } };
	
	    definedTypes['AccessGroupsData.DataGroupItem'] = { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^[0-9a-f]{32}", "required": true } } };
	
	    definedTypes['AccessGroupsData.DataGroupItemBase'] = { "properties": { "name": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^\\S(.*(\\S))?$", "required": true }, "description": { "type": "string", "minLength": 1, "maxLength": 255, "pattern": "^\\S(.*(\\S))?$", "required": true }, "serviceAgreementId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^\\S(.*(\\S))?$", "required": true }, "type": { "type": "string", "enum": ["ARRANGEMENTS", "CONTACTS"], "required": true }, "items": { "type": "array", "items": { "properties": {} }, "required": true } } };
	
	    definedTypes['AccessGroupsData.DataGroupsBatchPut'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^\\S(.*(\\S))?$", "required": true }, "name": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^\\S(.*(\\S))?$", "required": true }, "description": { "type": "string", "minLength": 1, "maxLength": 255, "pattern": "^\\S(.*(\\S))?$", "required": true }, "externalServiceAgreementId": { "type": "string", "minLength": 1, "maxLength": 64, "required": true }, "type": { "type": "string", "enum": ["ARRANGEMENTS", "CONTACTS"], "required": true }, "items": { "type": "array", "items": { "properties": {} }, "required": true } } } };
	
	    definedTypes['AccessGroupsData.DataGroupBatchDeleteItem'] = { "properties": { "ids": { "type": "array", "items": { "properties": {} }, "minItems": 1, "required": false } } };
	
	    definedTypes['AccessGroupsData.GetFunctionAccessGroups'] = { "type": "array", "items": { "properties": { "functionAccessGroupId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true } } } };
	
	    definedTypes['AccessGroupsData.FunctionAccessGroupItem'] = { "properties": { "functionAccessGroupId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true } } };
	
	    definedTypes['AccessGroupsData.FunctionAccessGroupItemBase'] = { "properties": { "name": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^\\S(.*(\\S))?$", "required": true }, "description": { "type": "string", "minLength": 1, "maxLength": 255, "pattern": "^\\S(.*(\\S))?$", "required": true }, "legalEntityId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^\\S(.*(\\S))?$", "required": true }, "serviceAgreementId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^[0-9a-f]{32}", "required": false }, "permissions": { "type": "array", "items": { "properties": { "functionId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "assignedPrivileges": { "type": "array", "items": { "properties": { "privilege": { "type": "string", "minLength": 1, "maxLength": 16, "required": true }, "limits": { "type": "array", "items": { "properties": { "limitType": { "enum": ["daily", "weekly", "monthly", "upper"], "required": true }, "amount": { "type": "number", "required": false } } }, "required": false } } }, "required": true } } }, "required": false } } };
	
	    definedTypes['AccessGroupsData.FunctionGroupItemBase'] = { "properties": { "name": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^\\S(.*(\\S))?$", "required": true }, "description": { "type": "string", "minLength": 1, "maxLength": 255, "pattern": "^\\S(.*(\\S))?$", "required": true }, "serviceAgreementId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "permissions": { "type": "array", "items": { "properties": { "functionId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "assignedPrivileges": { "type": "array", "items": { "properties": { "privilege": { "type": "string", "minLength": 1, "maxLength": 16, "required": true }, "limits": { "type": "array", "items": { "properties": { "limitType": { "enum": ["daily", "weekly", "monthly", "upper"], "required": true }, "amount": { "type": "number", "required": false } } }, "required": false } } }, "required": true } } }, "required": false } } };
	
	    definedTypes['AccessGroupsData.FunctionGroupItemPut'] = { "properties": { "legalEntityId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^\\S(.*(\\S))?$", "required": false } } };
	
	    definedTypes['AccessGroupsData.FunctionGroupItem'] = { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "legalEntityId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^\\S(.*(\\S))?$", "required": true } } };
	
	    definedTypes['AccessGroupsData.GetFunctionGroups'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "legalEntityId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^\\S(.*(\\S))?$", "required": true } } } };
	
	    definedTypes['AccessGroupsData.GetFunctions'] = { "type": "array", "items": { "properties": { "functionId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "functionCode": { "type": "string", "minLength": 1, "maxLength": 32, "required": true }, "resource": { "type": "string", "minLength": 1, "maxLength": 32, "required": true }, "name": { "type": "string", "minLength": 1, "maxLength": 32, "required": true }, "privileges": { "type": "array", "items": { "properties": { "privilege": { "type": "string", "minLength": 1, "maxLength": 16, "required": true }, "limits": { "type": "array", "items": { "properties": { "limitType": { "enum": ["daily", "weekly", "monthly", "upper"], "required": true }, "amount": { "type": "number", "required": false } } }, "required": false } } }, "required": true } } } };
	
	    definedTypes['AccessGroupsData.UserItem'] = { "properties": { "userId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^\\S+$", "required": true }, "serviceAgreementId": { "type": "string", "required": false } } };
	
	    definedTypes['AccessGroupsData.AssignFunctionAccessGroup'] = { "properties": { "functionAccessGroupIds": { "type": "array", "items": { "properties": {} }, "minItems": 1, "required": true }, "revoke": { "type": "boolean", "required": true } } };
	
	    definedTypes['AccessGroupsData.AssignDataAccessGroup'] = { "properties": { "functionAccessGroupId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "dataAccessGroupIds": { "type": "array", "items": { "properties": {} }, "minItems": 1, "required": true }, "revoke": { "type": "boolean", "required": true } } };
	
	    definedTypes['AccessGroupsData.GetUser'] = { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "userId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^\\S+$", "required": true }, "serviceAgreementId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "dataAccessGroupsByFunctionAccessGroup": { "type": "array", "items": { "properties": { "functionAccessGroupId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "dataAccessGroupIds": { "type": "array", "items": { "properties": {} }, "required": false } } }, "required": false } } };
	
	    definedTypes['AccessGroupsData.GetUsers'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "userId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^\\S+$", "required": true }, "serviceAgreementId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "dataAccessGroupsByFunctionAccessGroup": { "type": "array", "items": { "properties": { "functionAccessGroupId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "dataAccessGroupIds": { "type": "array", "items": { "properties": {} }, "required": false } } }, "required": false } } } };
	
	    definedTypes['AccessGroupsData.GetPrivileges'] = { "type": "array", "items": { "properties": { "privilege": { "type": "string", "minLength": 1, "maxLength": 16, "required": true } } } };
	
	    definedTypes['AccessGroupsData.ArrangementPrivileges'] = { "type": "array", "items": { "properties": { "arrangementId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "privileges": { "type": "array", "items": { "properties": { "privilege": { "type": "string", "minLength": 1, "maxLength": 16, "required": true }, "limits": { "type": "array", "items": { "properties": { "limitType": { "enum": ["daily", "weekly", "monthly", "upper"], "required": true }, "amount": { "type": "number", "required": false } } }, "required": false } } }, "required": true } } } };
	
	    definedTypes['AccessGroupsData.ServiceAgreementPost'] = { "properties": { "name": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^\\S(.*(\\S))?$", "required": true }, "description": { "type": "string", "minLength": 1, "maxLength": 255, "pattern": "^\\S(.*(\\S))?$", "required": true }, "participants": { "type": "array", "items": { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^[0-9a-f]{32}", "required": true }, "sharingUsers": { "type": "boolean", "required": true }, "sharingAccounts": { "type": "boolean", "required": true } } }, "minItems": 1, "required": true }, "status": { "type": "string", "enum": ["ENABLED", "DISABLED"], "default": "ENABLED", "required": false } } };
	
	    definedTypes['AccessGroupsData.ServiceAgreementPut'] = { "properties": { "name": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^\\S(.*(\\S))?$", "required": false }, "description": { "type": "string", "minLength": 1, "maxLength": 255, "pattern": "^\\S(.*(\\S))?$", "required": false }, "externalId": { "type": "string", "minLength": 1, "maxLength": 64, "pattern": "^\\S+$", "required": false }, "status": { "type": "string", "enum": ["ENABLED", "DISABLED"], "required": false } } };
	
	    definedTypes['AccessGroupsData.GetServiceAgreements'] = { "type": "array", "items": { "properties": { "creatorLegalEntity": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "status": { "type": "string", "enum": ["ENABLED", "DISABLED"], "required": true } } } };
	
	    definedTypes['AccessGroupsData.ServiceAgreementItem'] = { "properties": { "creatorLegalEntity": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "status": { "type": "string", "enum": ["ENABLED", "DISABLED"], "required": true } } };
	
	    definedTypes['AccessGroupsData.ServiceAgreementParticipants'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "externalId": { "type": "string", "minLength": 1, "maxLength": 64, "required": true }, "name": { "type": "string", "minLength": 1, "maxLength": 128, "required": true }, "sharingUsers": { "type": "boolean", "required": true }, "sharingAccounts": { "type": "boolean", "required": true } } } };
	
	    definedTypes['AccessGroupsData.IdItem'] = { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^[0-9a-f]{32}", "required": true } } };
	
	    definedTypes['AccessGroupsData.UpdateAdmins'] = { "properties": { "participants": { "type": "array", "items": { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "admins": { "type": "array", "items": { "properties": {} }, "uniqueItems": true, "required": true } } }, "minItems": 1, "required": false } } };
	
	    definedTypes['AccessGroupsData.ServiceAgreementUsers'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "externalId": { "type": "string", "minLength": 1, "maxLength": 64, "required": true }, "legalEntityId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "fullName": { "type": "string", "minLength": 1, "maxLength": 128, "required": true } } } };
	
	    definedTypes['AccessGroupsData.ServiceAgreementUsersBatchIngest'] = { "type": "array", "items": { "properties": { "userId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^[0-9a-f]{32}", "required": true }, "externalServiceAgreementId": { "type": "string", "minLength": 1, "maxLength": 64, "pattern": "^\\S+$", "required": true }, "legalEntityId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^[0-9a-f]{32}", "required": true } } } };
	
	    definedTypes['AccessGroupsData.UsersForServiceAgreement'] = { "properties": { "users": { "type": "array", "items": { "properties": {} }, "minItems": 1, "required": false } } };
	
	    definedTypes['AccessGroupsData.ServicesAgreementIngest'] = { "properties": { "name": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^\\S(.*(\\S))?$", "required": true }, "externalId": { "type": "string", "minLength": 1, "maxLength": 64, "pattern": "^\\S+$", "required": false }, "description": { "type": "string", "minLength": 1, "maxLength": 255, "pattern": "^\\S(.*(\\S))?$", "required": true }, "participantsToIngest": { "type": "array", "items": { "properties": { "externalId": { "type": "string", "minLength": 1, "maxLength": 64, "pattern": "^\\S+$", "required": true }, "sharingUsers": { "type": "boolean", "required": true }, "sharingAccounts": { "type": "boolean", "required": true }, "admins": { "type": "array", "items": { "properties": {} }, "uniqueItems": true, "required": false }, "users": { "type": "array", "items": { "properties": {} }, "uniqueItems": true, "required": false } } }, "minItems": 1, "uniqueItems": true, "required": true }, "status": { "type": "string", "enum": ["ENABLED", "DISABLED"], "default": "ENABLED", "required": false } } };
	
	    definedTypes['AccessGroupsData.UserPermissions'] = { "type": "array", "items": { "properties": { "userId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "legalEntityId": { "type": "string", "minLength": 1, "maxLength": 36, "required": false }, "externalServiceAgreementId": { "type": "string", "minLength": 1, "maxLength": 64, "required": true }, "functionDataPairs": { "type": "array", "items": { "properties": { "functionGroupId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "dataGroupIds": { "type": "array", "items": { "properties": {} }, "required": false } } }, "required": true } } } };
	
	    definedTypes['AccessGroupsData.PermissionsSummary'] = { "type": "array", "items": { "properties": { "resource": { "type": "string", "minLength": 1, "maxLength": 32, "required": true }, "function": { "type": "string", "minLength": 1, "maxLength": 32, "required": true }, "permissions": { "type": "object", "properties": {}, "required": true } } } };
	
	    definedTypes['AccessGroupsData.UserContextServiceAgreements-GET'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^[0-9a-f]{32}", "required": true }, "externalId": { "type": "string", "minLength": 1, "maxLength": 64, "pattern": "^\\S+$", "required": false }, "name": { "type": "string", "minLength": 1, "maxLength": 128, "required": true }, "description": { "type": "string", "minLength": 1, "maxLength": 255, "required": true }, "isMaster": { "type": "boolean", "default": false, "required": true } } } };
	
	    definedTypes['AccessGroupsData.UserContextLegalEntities-GET'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^[0-9a-f]{32}", "required": true }, "name": { "type": "string", "minLength": 1, "maxLength": 128, "required": true } } } };
	
	    definedTypes['AccessGroupsData.UserContext-POST'] = { "properties": { "serviceAgreementId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^[0-9a-f]{32}", "required": true }, "legalEntityId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^[0-9a-f]{32}", "required": false } } };
	
	    definedTypes['AccessGroupsData.FunctionGroupsBatchPut'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^\\S(.*(\\S))?$", "required": true }, "externalLegalEntityId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^\\S(.*(\\S))?$", "required": true }, "name": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^\\S(.*(\\S))?$", "required": true }, "description": { "type": "string", "minLength": 1, "maxLength": 255, "pattern": "^\\S(.*(\\S))?$", "required": true }, "externalServiceAgreementId": { "type": "string", "minLength": 1, "maxLength": 64, "required": true }, "permissions": { "type": "array", "items": { "properties": { "functionId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "assignedPrivileges": { "type": "array", "items": { "properties": { "privilege": { "type": "string", "minLength": 1, "maxLength": 16, "required": true }, "limits": { "type": "array", "items": { "properties": { "limitType": { "enum": ["daily", "weekly", "monthly", "upper"], "required": true }, "amount": { "type": "number", "required": false } } }, "required": false } } }, "required": true } } }, "required": false } } } };
	
	    definedTypes['AccessGroupsData.ServiceAgreementAdminsBatchIngest'] = { "type": "array", "items": { "properties": { "userId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^[0-9a-f]{32}", "required": true }, "externalServiceAgreementId": { "type": "string", "minLength": 1, "maxLength": 64, "pattern": "^\\S+$", "required": true }, "legalEntityId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^[0-9a-f]{32}", "required": true } } } };
	
	    definedTypes['AccessGroupsData.FunctionGroupBatchDeleteItem'] = { "properties": { "ids": { "type": "array", "items": { "properties": {} }, "minItems": 1, "required": false } } };
	
	    definedTypes['AccessGroupsData.Participant'] = { "type": "array", "items": { "properties": { "externalServiceAgreementId": { "type": "string", "minLength": 1, "maxLength": 64, "required": true }, "externalParticipantId": { "type": "string", "minLength": 1, "maxLength": 64, "required": true }, "sharingUsers": { "type": "boolean", "required": true }, "sharingAccounts": { "type": "boolean", "required": true } } } };
	
	    definedTypes['AccessGroupsData.UnexposedUsers'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "externalId": { "type": "string", "minLength": 1, "maxLength": 64, "required": true }, "fullName": { "type": "string", "minLength": 1, "maxLength": 128, "required": true }, "legalEntityId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "legalEntityName": { "type": "string", "minLength": 1, "maxLength": 128, "required": true } } } };
	
	    /**
	     * @typedef AccessGroupsData.ArrangementPrivilegeItem
	     * @type {Object}
	     * @property {String} arrangementId
	     * @property {Array.<PrivilegeItem>} privileges
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ArrangementPrivileges
	     * @type {Array.<AccessGroupsData.ArrangementPrivilegeItem>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.AssignDataAccessGroup
	     * @type {Object}
	     * @property {String} functionAccessGroupId
	     * @property {Array.<String>} dataAccessGroupIds
	     * @property {Boolean} revoke
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.AssignFunctionAccessGroup
	     * @type {Object}
	     * @property {Array.<String>} functionAccessGroupIds
	     * @property {Boolean} revoke
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.DataAccessGroupItem
	     * @type {Object}
	     * @property {String} dataAccessGroupId Data group id
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.DataAccessGroupItemBase
	     * @type {Object}
	     * @property {String} name Data group name
	     * @property {String} description Data group description
	     * @property {?String} serviceAgreementId
	     * @property {String} legalEntityId Id of Legal Entity on which Data group belongs.
	     * @property {String} type
	     * @property {Array.<String>} items Data group items
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.DataGroupBatchDeleteItem
	     * @type {Object}
	     * @property {?Array.<String>} ids
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.DataGroupBatchItemPut
	     * @type {Object}
	     * @property {String} id Data group id.
	     * @property {String} name Data group name
	     * @property {String} description Data group description
	     * @property {String} externalServiceAgreementId Service Agreement id
	     * @property {String} type
	     * @property {Array.<String>} items Data group items
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.DataGroupItem
	     * @type {Object}
	     * @property {String} id Data group id
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.DataGroupItemBase
	     * @type {Object}
	     * @property {String} name Data group name
	     * @property {String} description Data group description
	     * @property {String} serviceAgreementId Id of Service Agreement on which Data group belongs.
	     * @property {String} type
	     * @property {Array.<String>} items Data group items
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.DataGroupsBatchPut
	     * @type {Array.<AccessGroupsData.DataGroupBatchItemPut>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.Definitions/privilege
	     * @type {Object}
	     * @property {String} privilege
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.FunctionAccessGroupItem
	     * @type {Object}
	     * @property {String} functionAccessGroupId Function group id
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.FunctionAccessGroupItemBase
	     * @type {Object}
	     * @property {String} name Function group name
	     * @property {String} description Function group description
	     * @property {String} legalEntityId Id of Legal Entity on which Function group belongs.
	     * @property {?String} serviceAgreementId
	     * @property {?Array.<PermissionItem>} permissions
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.FunctionGroupBatchDeleteItem
	     * @type {Object}
	     * @property {?Array.<String>} ids
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.FunctionGroupItem
	     * @type {Object}
	     * @property {String} id Function group id
	     * @property {String} legalEntityId Function group creator legal entity id.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.FunctionGroupItemBase
	     * @type {Object}
	     * @property {String} name Function group name
	     * @property {String} description Function group description
	     * @property {String} serviceAgreementId Service Agreement id
	     * @property {?Array.<PermissionItem>} permissions
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.FunctionGroupItemPut
	     * @type {Object}
	     * @property {?String} legalEntityId Function group creator legal entity id.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.FunctionGroupPut
	     * @type {Object}
	     * @property {String} id Function group id.
	     * @property {String} externalLegalEntityId Function group creator legal entity id.
	     * @property {String} name Function group name
	     * @property {String} description Function group description
	     * @property {String} externalServiceAgreementId Service Agreement id
	     * @property {?Array.<PermissionItem>} permissions
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.FunctionGroupsBatchPut
	     * @type {Array.<AccessGroupsData.FunctionGroupPut>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.FunctionsItem
	     * @type {Object}
	     * @property {String} functionId
	     * @property {String} functionCode
	     * @property {String} resource
	     * @property {String} name
	     * @property {Array.<PrivilegeItem>} privileges
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.GetDataAccessGroups
	     * @type {Array.<AccessGroupsData.DataAccessGroupItem>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.GetDataGroups
	     * @type {Array.<AccessGroupsData.DataGroupItem>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.GetFunctionAccessGroups
	     * @type {Array.<AccessGroupsData.FunctionAccessGroupItem>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.GetFunctionGroups
	     * @type {Array.<AccessGroupsData.FunctionGroupItem>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.GetFunctions
	     * @type {Array.<AccessGroupsData.FunctionsItem>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.GetPrivileges
	     * @type {Array.<AccessGroupsData.Definitions/privilege>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.GetServiceAgreements
	     * @type {Array.<AccessGroupsData.ServiceAgreementItem>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.GetUser
	     * @type {Object}
	     * @property {String} id
	     * @property {String} userId
	     * @property {String} serviceAgreementId
	     * @property {?Array.<DataaccessgroupsforfunctionaccessgroupItem>} dataAccessGroupsByFunctionAccessGroup
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.GetUsers
	     * @type {Array.<AccessGroupsData.GetUser>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.IdItem
	     * @type {Object}
	     * @property {String} id
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.LegalEntityItem
	     * @type {Object}
	     * @property {String} id
	     * @property {String} name Legal entity name to display
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.Participant
	     * @type {Array.<AccessGroupsData.ParticipantItem>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.ParticipantItem
	     * @type {Object}
	     * @property {String} externalServiceAgreementId External ID of the Service Agreement.
	     * @property {String} externalParticipantId External ID of the legal entity.
	     * @property {Boolean} sharingUsers Boolean value if the Participant is sharing users
	     * @property {Boolean} sharingAccounts Boolean value if the Participant is sharing accounts
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.PermissionsSummary
	     * @type {Array.<AccessGroupsData.PermissionsSummaryItem>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.PermissionsSummaryItem
	     * @type {Object}
	     * @property {String} resource Resource name
	     * @property {String} function Business function name
	     * @property {AccessGroupsData.permissions} permissions Allowed user permissions
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ServiceAgreementAdminsBatchIngest
	     * @type {Array.<AccessGroupsData.ServiceAgreementUserLegalEntityPair>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.ServiceAgreementItem
	     * @type {Object}
	     * @property {String} creatorLegalEntity
	     * @property {String} status
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ServiceAgreementPartialItem
	     * @type {Object}
	     * @property {String} id
	     * @property {?String} externalId External ID of Service Agreement
	     * @property {String} name Service agreement name to display
	     * @property {String} description Brief text to describe service agreement
	     * @property {Boolean} isMaster Defines default service agreement when none selected, only one can hold true value
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ServiceAgreementParticipantItem
	     * @type {Object}
	     * @property {String} id Legal Entity Id
	     * @property {String} externalId External id of the Legal Entity
	     * @property {String} name Name of the Legal Entity
	     * @property {Boolean} sharingUsers Defines if the Legal Entity shares Users in the Service Agreement
	     * @property {Boolean} sharingAccounts Defines if the Legal Entity shares Accounts in the Service Agreement
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ServiceAgreementParticipants
	     * @type {Array.<AccessGroupsData.ServiceAgreementParticipantItem>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.ServiceAgreementPost
	     * @type {Object}
	     * @property {String} name Service Agreement name
	     * @property {String} description Service Agreement description
	     * @property {Array.<AccessGroupsData.Participant>} participants
	     * @property {?String} status
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ServiceAgreementPut
	     * @type {Object}
	     * @property {?String} name Service Agreement name
	     * @property {?String} description Service Agreement description
	     * @property {?String} externalId External ID of Service Agreement
	     * @property {?String} status
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ServiceAgreementUserGet
	     * @type {Object}
	     * @property {String} id
	     * @property {String} externalId
	     * @property {String} legalEntityId
	     * @property {String} fullName
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ServiceAgreementUserLegalEntityPair
	     * @type {Object}
	     * @property {String} userId
	     * @property {String} externalServiceAgreementId
	     * @property {String} legalEntityId
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ServiceAgreementUsers
	     * @type {Array.<AccessGroupsData.ServiceAgreementUserGet>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.ServiceAgreementUsersBatchIngest
	     * @type {Array.<AccessGroupsData.ServiceAgreementUserLegalEntityPair>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.ServicesAgreementIngest
	     * @type {Object}
	     * @property {String} name The service agreement name
	     * @property {?String} externalId External ID of Service Agreement
	     * @property {String} description Description
	     * @property {Array.<ParticipantIngest>} participantsToIngest Participants of the service agreement
	     * @property {?String} status
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.UnexposedUserGet
	     * @type {Object}
	     * @property {String} id
	     * @property {String} externalId
	     * @property {String} fullName
	     * @property {String} legalEntityId
	     * @property {String} legalEntityName
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.UnexposedUsers
	     * @type {Array.<AccessGroupsData.UnexposedUserGet>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.UpdateAdmins
	     * @type {Object}
	     * @property {?Array.<AdminItem>} participants
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.UserContext-POST
	     * @type {Object}
	     * @property {String} serviceAgreementId
	     * @property {?String} legalEntityId
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.UserContextLegalEntities-GET
	     * @type {Array.<AccessGroupsData.LegalEntityItem>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.UserContextServiceAgreements-GET
	     * @type {Array.<AccessGroupsData.ServiceAgreementPartialItem>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.UserItem
	     * @type {Object}
	     * @property {String} userId
	     * @property {?String} serviceAgreementId
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.UserPermissions
	     * @type {Array.<AccessGroupsData.UserPermissionsItem>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.UserPermissionsItem
	     * @type {Object}
	     * @property {String} userId Internal Id of the user
	     * @property {?String} legalEntityId Internal Id of the legal entity the user belongs to
	     * @property {String} externalServiceAgreementId External Id of the service agreement
	     * @property {Array.<FunctionGroupWithDataGroupsPair>} functionDataPairs Function/Data group pairs
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.UsersForServiceAgreement
	     * @type {Object}
	     * @property {?Array.<String>} users
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.permissions
	     * @type {Object}
	     */
	
	    /*
	     * @name parse
	     * @type {Function}
	     * @private
	     * @description Should be overwritten by transformResponse on a project level
	     */
	    function parse(res) {
	      return {
	        data: res.data,
	        headers: res.headers,
	        status: res.status,
	        statusText: res.statusText
	      };
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsData
	     * @type {Function}
	     * @description # List Data Groups
	    Provides a list of all data groups for given Legal Entity ID and type.
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.legalEntityId Id of Legal Entity. Eg: 1002.
	       
	     * @param {string} params.type Type od data group. Eg: arrangements.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.GetDataAccessGroups} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsData(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsData(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#postAccessgroupsDataRecord
	     * @type {Function}
	     * @description # Create Data Group
	    Creates a new data group.
	     
	     * @param {AccessGroupsData.DataAccessGroupItemBase} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.IdItem} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsDataRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsDataRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#postAccessgroupsDataGroupsRecord
	     * @type {Function}
	     * @description # Create Data Group
	    Creates a new data group.
	     
	     * @param {AccessGroupsData.DataGroupItemBase} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.IdItem} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsDataGroupsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsDataGroupsRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data-groups';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#putAccessgroupsDataGroupsRecord
	     * @type {Function}
	     * @description # Data Groups Batch - Put
	    Update batch of data groups.
	     
	     * @param {AccessGroupsData.DataGroupsBatchPut} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .putAccessgroupsDataGroupsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putAccessgroupsDataGroupsRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data-groups';
	
	      return httpClient({
	        method: 'PUT',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsDataGroups
	     * @type {Function}
	     * @description # List Data Groups
	    Provides a list of all data groups for given Legal Entity ID and type.
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.serviceAgreementId Id of Service Agreement. Eg: 1002.
	       
	     * @param {string} params.type Type od data group. Eg: ARRANGEMENTS.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.GetDataGroups} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsDataGroups(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsDataGroups(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data-groups';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsFunction
	     * @type {Function}
	     * @description # List Function Groups
	    Provides a list of all function groups for given Legal Entity ID.
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.legalEntityId Legal Entity ID. Eg: 1002.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.GetFunctionAccessGroups} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsFunction(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsFunction(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#postAccessgroupsFunctionRecord
	     * @type {Function}
	     * @description # Create Function Group
	    Creates a new function group.
	     
	     * @param {AccessGroupsData.FunctionAccessGroupItemBase} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.IdItem} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsFunctionRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsFunctionRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsFunctionGroups
	     * @type {Function}
	     * @description # List Function Groups
	    Provides a list of all function groups for given Legal Entity ID.
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.serviceAgreementId Service Agreement Id. Eg: 1002.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.GetFunctionGroups} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsFunctionGroups(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsFunctionGroups(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function-groups';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#postAccessgroupsFunctionGroupsRecord
	     * @type {Function}
	     * @description # Create Function Group
	    Creates a new function group.
	     
	     * @param {AccessGroupsData.FunctionGroupItemBase} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.IdItem} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsFunctionGroupsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsFunctionGroupsRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function-groups';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#putAccessgroupsFunctionGroupsRecord
	     * @type {Function}
	     * @description # Function Groups Batch - Put
	    Update batch of function groups.
	     
	     * @param {AccessGroupsData.FunctionGroupsBatchPut} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .putAccessgroupsFunctionGroupsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putAccessgroupsFunctionGroupsRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function-groups';
	
	      return httpClient({
	        method: 'PUT',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsConfigFunctions
	     * @type {Function}
	     * @description # List All Business Functions
	    Provides a list of all available business functions that can be used in setting up Entitlements permissions.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.GetFunctions} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsConfigFunctions(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsConfigFunctions(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/config/functions';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#postAccessgroupsUsersRecord
	     * @type {Function}
	     * @description # Create User Access
	    Creates a new user access.
	     
	     * @param {AccessGroupsData.UserItem} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.IdItem} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsUsersRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsUsersRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsUsers
	     * @type {Function}
	     * @description # List User Accesses
	    Provides all user accesses (optionally can be queried by user ID or service agreement ID).
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?string} params.userId User ID. Eg: 8a48e2685d788166015d791b0b9f0003.
	       
	     * @param {?string} params.serviceAgreementId Service agreement ID. Eg: 8a48e2685d787f78015d791ab6ad0002.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.GetUsers} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsUsers(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsUsers(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#postAccessgroupsServiceagreementsRecord
	     * @type {Function}
	     * @description # Create Service Agreement
	    Creates a new Service Agreement.
	     
	     * @param {AccessGroupsData.ServiceAgreementPost} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.IdItem} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsServiceagreementsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsServiceagreementsRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsServiceagreements
	     * @type {Function}
	     * @description # List Service Agreements
	    Provides a list of all service agreements that have been created by given Legal Entity (creator).
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.creatorId Legal entity ID that created the service agreement.
	       
	     * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     * @param {?string} params.query The search term used to search. Eg: backb.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.GetServiceAgreements} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsServiceagreements(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsServiceagreements(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#postAccessgroupsUsercontextRecord
	     * @type {Function}
	     * @description Create user context for current user
	     
	     * @param {AccessGroupsData.UserContext-POST} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsUsercontextRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsUsercontextRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/usercontext';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsDataRecord
	     * @type {Function}
	     * @description # Retrieve Data Group details
	    Retrieves details for a specific data group.
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.DataAccessGroupItem} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsDataRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsDataRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data/' + id;
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#putAccessgroupsDataRecord
	     * @type {Function}
	     * @description # Update Data Group details
	    Updates details for a specific data group.
	     
	     * @param {string} id 
	       
	     
	     * @param {AccessGroupsData.DataAccessGroupItem} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .putAccessgroupsDataRecord(id, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putAccessgroupsDataRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data/' + id;
	
	      return httpClient({
	        method: 'PUT',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#deleteAccessgroupsDataRecord
	     * @type {Function}
	     * @description # Delete Data Group
	    Deletes the specific data group.
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .deleteAccessgroupsDataRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deleteAccessgroupsDataRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data/' + id;
	
	      return httpClient({
	        method: 'DELETE',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#postAccessgroupsDataGroupsDeleteRecord
	     * @type {Function}
	     * @description # Data Groups Batch - Delete
	    Batch delete of data groups by list of provided Data Group IDs.
	     
	     * @param {AccessGroupsData.DataGroupBatchDeleteItem} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsDataGroupsDeleteRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsDataGroupsDeleteRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data-groups/delete';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsDataGroupsRecord
	     * @type {Function}
	     * @description # Retrieve Data Group details
	    Retrieves details for a specific data group.
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.DataGroupItem} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsDataGroupsRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsDataGroupsRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data-groups/' + id;
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#putAccessgroupsDataGroupsRecord
	     * @type {Function}
	     * @description # Update Data Group details
	    Updates details for a specific data group.
	     
	     * @param {string} id 
	       
	     
	     * @param {AccessGroupsData.DataGroupItem} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .putAccessgroupsDataGroupsRecord(id, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putAccessgroupsDataGroupsRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data-groups/' + id;
	
	      return httpClient({
	        method: 'PUT',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#deleteAccessgroupsDataGroupsRecord
	     * @type {Function}
	     * @description # Delete Data Group
	    Deletes the specific data group.
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .deleteAccessgroupsDataGroupsRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deleteAccessgroupsDataGroupsRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data-groups/' + id;
	
	      return httpClient({
	        method: 'DELETE',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsFunctionRecord
	     * @type {Function}
	     * @description # Retrieve Function Group details
	    Retrieves details for a specific function group.
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.FunctionAccessGroupItem} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsFunctionRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsFunctionRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function/' + id;
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#putAccessgroupsFunctionRecord
	     * @type {Function}
	     * @description # Update Function Group details
	    Updates details for a specific function group.
	     
	     * @param {string} id 
	       
	     
	     * @param {AccessGroupsData.FunctionAccessGroupItem} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .putAccessgroupsFunctionRecord(id, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putAccessgroupsFunctionRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function/' + id;
	
	      return httpClient({
	        method: 'PUT',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#deleteAccessgroupsFunctionRecord
	     * @type {Function}
	     * @description # Delete Function Group
	    Deletes the specific function group.
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .deleteAccessgroupsFunctionRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deleteAccessgroupsFunctionRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function/' + id;
	
	      return httpClient({
	        method: 'DELETE',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#postAccessgroupsFunctionGroupsDeleteRecord
	     * @type {Function}
	     * @description # Function Groups Batch - Delete
	    Batch delete of function groups by list of provided Function Group IDs.
	     
	     * @param {AccessGroupsData.FunctionGroupBatchDeleteItem} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsFunctionGroupsDeleteRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsFunctionGroupsDeleteRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function-groups/delete';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsFunctionGroupsRecord
	     * @type {Function}
	     * @description # Retrieve Function Group details
	    Retrieves details for a specific function group.
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.FunctionGroupItem} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsFunctionGroupsRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsFunctionGroupsRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function-groups/' + id;
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#putAccessgroupsFunctionGroupsRecord
	     * @type {Function}
	     * @description # Update Function Group details
	    Updates details for a specific function group.
	     
	     * @param {string} id 
	       
	     
	     * @param {AccessGroupsData.FunctionGroupItemPut} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .putAccessgroupsFunctionGroupsRecord(id, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putAccessgroupsFunctionGroupsRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function-groups/' + id;
	
	      return httpClient({
	        method: 'PUT',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#deleteAccessgroupsFunctionGroupsRecord
	     * @type {Function}
	     * @description # Delete Function Group
	    Deletes the specific function group.
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .deleteAccessgroupsFunctionGroupsRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deleteAccessgroupsFunctionGroupsRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function-groups/' + id;
	
	      return httpClient({
	        method: 'DELETE',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsUsersRecord
	     * @type {Function}
	     * @description # Provides User Access details
	    Provides User Access details such as assigned user id, service agreement id, function groups and data groups.
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.GetUser} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsUsersRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsUsersRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/' + id;
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsUsersPrivileges
	     * @type {Function}
	     * @description # List User privileges for given Business function
	    Provides a list of user privileges for given business function(eg. Contacts).
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.userId User ID. Eg: 8a48e2685d787f78015d791ab6ad0002.
	       
	     * @param {?string} params.serviceAgreementId Service Agreement Id. Eg: 8a48e2685d788166015d791b0b9f0003.
	       
	     * @param {string} params.functionName Name of Function. Eg: Contacts.
	       
	     * @param {string} params.resourceName Name of Resource. Eg: Contacts.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.GetPrivileges} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsUsersPrivileges(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsUsersPrivileges(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/privileges';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsUsersUserPrivileges
	     * @type {Function}
	     * @description # List User privileges for given Business function
	    Provides a list of user privileges for given business function(eg. Contacts).
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.functionName Name of Function. Eg: Contacts.
	       
	     * @param {string} params.resourceName Name of Resource. Eg: Contacts.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.GetPrivileges} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsUsersUserPrivileges(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsUsersUserPrivileges(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/user-privileges';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsUsersPermissions
	     * @type {Function}
	     * @description # Check if User is allowed to perform given action
	    Checks if the user has the specific privileges for given business function.
	      
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.userId User Id. Eg: 8a48e2685d787f78015d791ab6ad0002.
	       
	     * @param {?string} params.serviceAgreementId Service Agreement Id. Eg: 8a48e2685d787f78015d791ab6123456.
	       
	     * @param {string} params.functionName Name of Function. Eg: Contacts.
	       
	     * @param {string} params.resourceName Name of Resource. Eg: Contacts.
	       
	     * @param {string} params.privileges comma-separated privileges. Eg: view,create,execute.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsUsersPermissions(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsUsersPermissions(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/permissions';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#putAccessgroupsUsersPermissionsRecord
	     * @type {Function}
	     * @description # Updates permissions for a list of users. - Put
	    Updates permissions for a list of users.
	     
	     * @param {AccessGroupsData.UserPermissions} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .putAccessgroupsUsersPermissionsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putAccessgroupsUsersPermissionsRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/permissions';
	
	      return httpClient({
	        method: 'PUT',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsUsersUserPermissions
	     * @type {Function}
	     * @description # Check if User is allowed to perform given action
	    Checks if the user has the specific privileges for given business function.
	      
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.functionName Name of Function. Eg: Contacts.
	       
	     * @param {string} params.resourceName Name of Resource. Eg: Contacts.
	       
	     * @param {string} params.privileges comma-separated privileges. Eg: view,create,execute.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsUsersUserPermissions(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsUsersUserPermissions(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/user-permissions';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#postAccessgroupsUsersFunctionRecord
	     * @type {Function}
	     * @description # Assign/remove Function groups to user access
	    Assigns or removes the specified Function Groups to the given User access.
	     
	     * @param {string} id 
	       
	     
	     * @param {AccessGroupsData.AssignFunctionAccessGroup} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsUsersFunctionRecord(id, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsUsersFunctionRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/' + id + '/function';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#postAccessgroupsUsersDataRecord
	     * @type {Function}
	     * @description # Assign/remove Data groups to user access
	    Assigns or removes specified Data Groups to the given User access/function group.
	      
	     * @param {string} id 
	       
	     
	     * @param {AccessGroupsData.AssignDataAccessGroup} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsUsersDataRecord(id, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsUsersDataRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/' + id + '/data';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsUsersPrivilegesArrangements
	     * @type {Function}
	     * @description # List Arrangements that user has access to
	    Provides (retrieve) list of Arrangements along with appropriate privilege(s) that given User has access to.
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.userId User Id. Eg: 8a48e2685d787f78015d791ab6ad0002.
	       
	     * @param {?string} params.serviceAgreementId Service Agreement Id. Eg: 8a48e2685d787f78015d791ab6123456.
	       
	     * @param {string} params.functionName Name of function. Eg: Product Summary.
	       
	     * @param {string} params.resourceName Name of resource. Eg: Product Summary.
	       
	     * @param {?string} params.privilegeName Name of privilege. Eg: view.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.ArrangementPrivileges} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsUsersPrivilegesArrangements(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsUsersPrivilegesArrangements(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/privileges/arrangements';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsUsersPrivilegesArrangementsRecord
	     * @type {Function}
	     * @description # Arrangement permission check.
	    Checks permissions for a single arrangement item.
	     
	     * @param {string} id 
	       
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.userId User ID. Eg: 8a48e2685d787f78015d791ac267000e.
	       
	     * @param {?string} params.serviceAgreementId Service Agreement ID. Eg: 8a48e2685d787f78015d791ac267111e.
	       
	     * @param {string} params.resource Resource name. Eg: Product Summary.
	       
	     * @param {string} params.function function name. Eg: Product Summary.
	       
	     * @param {string} params.privilege Privilege name. Eg: view.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsUsersPrivilegesArrangementsRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsUsersPrivilegesArrangementsRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/privileges/arrangements/' + id;
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsUsersUserPrivilegesArrangements
	     * @type {Function}
	     * @description # List Arrangements that user has access to
	    Provides (retrieve) list of Arrangements along with appropriate privilege(s) that given User has access to.
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.functionName Name of function. Eg: Product Summary.
	       
	     * @param {string} params.resourceName Name of resource. Eg: Product Summary.
	       
	     * @param {?string} params.privilegeName Name of privilege. Eg: view.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.ArrangementPrivileges} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsUsersUserPrivilegesArrangements(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsUsersUserPrivilegesArrangements(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/user-privileges/arrangements';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsUsersUserPrivilegesArrangementsRecord
	     * @type {Function}
	     * @description # Arrangement permission check.
	    Checks permissions for a single arrangement item.
	     
	     * @param {string} id 
	       
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.resource Resource name. Eg: Product Summary.
	       
	     * @param {string} params.function function name. Eg: Product Summary.
	       
	     * @param {string} params.privilege Privilege name. Eg: view.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsUsersUserPrivilegesArrangementsRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsUsersUserPrivilegesArrangementsRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/user-privileges/arrangements/' + id;
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsUsersPermissionsSummary
	     * @type {Function}
	     * @description # User Permissions Summary
	    Returns aggregated summary of user permissions.
	    Returned data structure will contain all allowed Resources + Business Functions + Permissions.
	      
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.PermissionsSummary} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsUsersPermissionsSummary(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsUsersPermissionsSummary(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/permissions/summary';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsServiceagreementsRecord
	     * @type {Function}
	     * @description # Retrieve Service Agreement details
	    Retrieves Service Agreement details by given ID.
	     
	     * @param {string} serviceAgreementId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.ServiceAgreementItem} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsServiceagreementsRecord(serviceAgreementId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsServiceagreementsRecord(serviceAgreementId, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/' + serviceAgreementId;
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#putAccessgroupsServiceagreementsRecord
	     * @type {Function}
	     * @description # Update Service Agreement details
	    Updates name, description and external Id for a specific service agreement.
	     
	     * @param {string} serviceAgreementId 
	       
	     
	     * @param {AccessGroupsData.ServiceAgreementPut} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .putAccessgroupsServiceagreementsRecord(serviceAgreementId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putAccessgroupsServiceagreementsRecord(serviceAgreementId, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/' + serviceAgreementId;
	
	      return httpClient({
	        method: 'PUT',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsServiceagreementsContext
	     * @type {Function}
	     * @description # Retrieve Service Agreement details
	    Retrieves Service Agreement details by given ID.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.ServiceAgreementItem} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsServiceagreementsContext(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsServiceagreementsContext(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/context';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#postAccessgroupsServiceagreementsIngestServiceagreementsRecord
	     * @type {Function}
	     * @description # Ingest Service Agreement
	    Creates new Service Agreement (required to provide Legal Entity participants together with Admins).
	     
	     * @param {AccessGroupsData.ServicesAgreementIngest} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.IdItem} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsServiceagreementsIngestServiceagreementsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsServiceagreementsIngestServiceagreementsRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/ingest/serviceagreements';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsServiceagreementsParticipants
	     * @type {Function}
	     * @description # Retrieve Service Agreement participants
	    Retrieves Legal Entities that are participants in Service Agreement.
	     
	     * @param {string} serviceAgreementId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.ServiceAgreementParticipants} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsServiceagreementsParticipants(serviceAgreementId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsServiceagreementsParticipants(serviceAgreementId, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/' + serviceAgreementId + '/participants';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsServiceagreementsAdmins
	     * @type {Function}
	     * @description # Retrieve Service Agreement admins
	    Retrieves Users that are admins in Service Agreement.
	     
	     * @param {string} serviceAgreementId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.ServiceAgreementUsers} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsServiceagreementsAdmins(serviceAgreementId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsServiceagreementsAdmins(serviceAgreementId, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/' + serviceAgreementId + '/admins';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#putAccessgroupsServiceagreementsAdminsRecord
	     * @type {Function}
	     * @description # Add admins in Service Agreement
	    Adds Admins to a given Service Agreement, per Legal Entity participant.
	     
	     * @param {string} id 
	       
	     
	     * @param {AccessGroupsData.UpdateAdmins} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .putAccessgroupsServiceagreementsAdminsRecord(id, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putAccessgroupsServiceagreementsAdminsRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/' + id + '/admins';
	
	      return httpClient({
	        method: 'PUT',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsServiceagreementsContextParticipants
	     * @type {Function}
	     * @description # Retrieve Service Agreement participants
	    Retrieves Legal Entities that are participants in Service Agreement from the context.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.ServiceAgreementParticipants} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsServiceagreementsContextParticipants(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsServiceagreementsContextParticipants(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/context/participants';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsServiceagreementsContextUsers
	     * @type {Function}
	     * @description # List users in Service Agreement
	    Provides a list of all users that belong to a given Service Agreement.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?string} params.query The search term used to search. Eg: backb.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.ServiceAgreementUsers} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsServiceagreementsContextUsers(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsServiceagreementsContextUsers(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/context/users';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#postAccessgroupsServiceagreementsContextUsersAddRecord
	     * @type {Function}
	     * @description # Add/Remove Users in a Service Agreement
	    Adds/Removes Users in a Service Agreement
	     
	     * @param {AccessGroupsData.UsersForServiceAgreement} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsServiceagreementsContextUsersAddRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsServiceagreementsContextUsersAddRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/context/users/add';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#postAccessgroupsServiceagreementsContextUsersRemoveRecord
	     * @type {Function}
	     * @description # Add/Remove Users in a Service Agreement
	    Adds/Removes Users in a Service Agreement
	     
	     * @param {AccessGroupsData.UsersForServiceAgreement} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsServiceagreementsContextUsersRemoveRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsServiceagreementsContextUsersRemoveRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/context/users/remove';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsServiceagreementsContextUsersUnexposed
	     * @type {Function}
	     * @description # List all unexposed users 
	    Provides a list of all unexposed users that belong to the participants who are sharing users in the given Service Agreement.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?string} params.query The search term used to search. Eg: backb.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.UnexposedUsers} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsServiceagreementsContextUsersUnexposed(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsServiceagreementsContextUsersUnexposed(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/context/users/unexposed';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#postAccessgroupsServiceagreementsIngestServiceagreementsParticipantsRecord
	     * @type {Function}
	     * @description # Add participants to service agreements batch
	    Adds participants to existing service agreement - batch.
	     
	     * @param {AccessGroupsData.Participant} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsServiceagreementsIngestServiceagreementsParticipantsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsServiceagreementsIngestServiceagreementsParticipantsRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/ingest/serviceagreements/participants';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#postAccessgroupsServiceagreementsIngestServiceagreementsUsersAddRecord
	     * @type {Function}
	     * @description # Add users to service agreements batch
	    Adds users to service agreements batch
	     
	     * @param {AccessGroupsData.ServiceAgreementUsersBatchIngest} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsServiceagreementsIngestServiceagreementsUsersAddRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsServiceagreementsIngestServiceagreementsUsersAddRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/ingest/serviceagreements/users/add';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#postAccessgroupsServiceagreementsIngestServiceagreementsUsersRemoveRecord
	     * @type {Function}
	     * @description # Remove users from service agreements batch
	    Removes users from service agreements batch
	     
	     * @param {AccessGroupsData.ServiceAgreementUsersBatchIngest} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsServiceagreementsIngestServiceagreementsUsersRemoveRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsServiceagreementsIngestServiceagreementsUsersRemoveRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/ingest/serviceagreements/users/remove';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#postAccessgroupsServiceagreementsIngestServiceagreementsAdminsAddRecord
	     * @type {Function}
	     * @description # Add admins to service agreements batch
	    Adds admins to service agreements batch
	     
	     * @param {AccessGroupsData.ServiceAgreementAdminsBatchIngest} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsServiceagreementsIngestServiceagreementsAdminsAddRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsServiceagreementsIngestServiceagreementsAdminsAddRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/ingest/serviceagreements/admins/add';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#postAccessgroupsServiceagreementsIngestServiceagreementsAdminsRemoveRecord
	     * @type {Function}
	     * @description # Remove admins to service agreements batch
	    Removes admins of a service agreements in a batch
	     
	     * @param {AccessGroupsData.ServiceAgreementAdminsBatchIngest} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsServiceagreementsIngestServiceagreementsAdminsRemoveRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsServiceagreementsIngestServiceagreementsAdminsRemoveRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/ingest/serviceagreements/admins/remove';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsServiceagreementsExternalRecord
	     * @type {Function}
	     * @description Service agreement retrieved.
	     
	     * @param {string} externalId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.ServiceAgreementItem} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsServiceagreementsExternalRecord(externalId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsServiceagreementsExternalRecord(externalId, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/external/' + externalId;
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsUsercontextServiceagreements
	     * @type {Function}
	     * @description Retrieve the list service agreement of the current user
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?string} params.query The search term used to search. Eg: backb.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.UserContextServiceAgreements-GET} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsUsercontextServiceagreements(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsUsercontextServiceagreements(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/usercontext/serviceagreements';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name AccessGroupsData#getAccessgroupsUsercontextServiceagreementsLegalentities
	     * @type {Function}
	     * @description Retrieve the list legal entities for a service agreement of the current user
	     
	     * @param {string} serviceAgreementId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?string} params.query The search term used to search. Eg: backb.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.UserContextLegalEntities-GET} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsUsercontextServiceagreementsLegalentities(serviceAgreementId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsUsercontextServiceagreementsLegalentities(serviceAgreementId, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/usercontext/serviceagreements/' + serviceAgreementId + '/legalentities';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @description
	     * Schema data. Keys of the object are names of the POST and PUT methods
	     *
	     * Note: The schema is not strictly a JSON schema. It is a whitelisted set of
	     * keys for each object property. The keys that are exposed are meant for validation
	     * purposes.
	     *
	     * The full list of *possible* keys for each property is:
	     * type, minimum, maximum, minLength, maxLength, pattern, enum, format, default,
	     * properties, items, minItems, maxItems, uniqueItems and required.
	     *
	     * See http://json-schema.org/latest/json-schema-validation.html for more details
	     * on the meaning of these keys.
	     *
	     * The "required" array from JSON schema is tranformed into a "required" boolean
	     * on each property. This is for ease of use.
	     *
	     * @name AccessGroupsData#schemas
	     * @type {Object}
	     */
	    var schemas = {};
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsDataRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsDataRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "name": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 128,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "description": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 255,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "serviceAgreementId": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 36,
	        "pattern": "^[0-9a-f]{32}",
	        "required": false
	      },
	      "legalEntityId": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 36,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "type": {
	        "type": "string",
	        "enum": [
	          "ARRANGEMENTS",
	          "CONTACTS"
	        ],
	        "required": true
	      },
	      "items": {
	        "type": "array",
	        "items": {
	          "properties": {}
	        },
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsDataRecord = definedTypes['AccessGroupsData.DataAccessGroupItemBase'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsDataGroupsRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsDataGroupsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "name": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 128,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "description": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 255,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "serviceAgreementId": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 36,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "type": {
	        "type": "string",
	        "enum": [
	          "ARRANGEMENTS",
	          "CONTACTS"
	        ],
	        "required": true
	      },
	      "items": {
	        "type": "array",
	        "items": {
	          "properties": {}
	        },
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsDataGroupsRecord = definedTypes['AccessGroupsData.DataGroupItemBase'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putAccessgroupsDataGroupsRecord method
	     *
	     * @name AccessGroupsData#schemas.putAccessgroupsDataGroupsRecord
	     * @type {Object}
	     * @example
	     * {
	    "type": "array",
	    "items": {
	      "properties": {
	        "id": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 36,
	          "pattern": "^\\S(.*(\\S))?$",
	          "required": true
	        },
	        "name": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 128,
	          "pattern": "^\\S(.*(\\S))?$",
	          "required": true
	        },
	        "description": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 255,
	          "pattern": "^\\S(.*(\\S))?$",
	          "required": true
	        },
	        "externalServiceAgreementId": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 64,
	          "required": true
	        },
	        "type": {
	          "type": "string",
	          "enum": [
	            "ARRANGEMENTS",
	            "CONTACTS"
	          ],
	          "required": true
	        },
	        "items": {
	          "type": "array",
	          "items": {
	            "properties": {}
	          },
	          "required": true
	        }
	      }
	    }
	    }
	     */
	
	    schemas.putAccessgroupsDataGroupsRecord = definedTypes['AccessGroupsData.DataGroupsBatchPut'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsFunctionRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsFunctionRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "name": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 128,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "description": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 255,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "legalEntityId": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 36,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "serviceAgreementId": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 36,
	        "pattern": "^[0-9a-f]{32}",
	        "required": false
	      },
	      "permissions": {
	        "type": "array",
	        "items": {
	          "properties": {
	            "functionId": {
	              "type": "string",
	              "minLength": 1,
	              "maxLength": 36,
	              "required": true
	            },
	            "assignedPrivileges": {
	              "type": "array",
	              "items": {
	                "properties": {
	                  "privilege": {
	                    "type": "string",
	                    "minLength": 1,
	                    "maxLength": 16,
	                    "required": true
	                  },
	                  "limits": {
	                    "type": "array",
	                    "items": {
	                      "properties": {
	                        "limitType": {
	                          "enum": [
	                            "daily",
	                            "weekly",
	                            "monthly",
	                            "upper"
	                          ],
	                          "required": true
	                        },
	                        "amount": {
	                          "type": "number",
	                          "required": false
	                        }
	                      }
	                    },
	                    "required": false
	                  }
	                }
	              },
	              "required": true
	            }
	          }
	        },
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsFunctionRecord = definedTypes['AccessGroupsData.FunctionAccessGroupItemBase'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsFunctionGroupsRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsFunctionGroupsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "name": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 128,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "description": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 255,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "serviceAgreementId": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 36,
	        "required": true
	      },
	      "permissions": {
	        "type": "array",
	        "items": {
	          "properties": {
	            "functionId": {
	              "type": "string",
	              "minLength": 1,
	              "maxLength": 36,
	              "required": true
	            },
	            "assignedPrivileges": {
	              "type": "array",
	              "items": {
	                "properties": {
	                  "privilege": {
	                    "type": "string",
	                    "minLength": 1,
	                    "maxLength": 16,
	                    "required": true
	                  },
	                  "limits": {
	                    "type": "array",
	                    "items": {
	                      "properties": {
	                        "limitType": {
	                          "enum": [
	                            "daily",
	                            "weekly",
	                            "monthly",
	                            "upper"
	                          ],
	                          "required": true
	                        },
	                        "amount": {
	                          "type": "number",
	                          "required": false
	                        }
	                      }
	                    },
	                    "required": false
	                  }
	                }
	              },
	              "required": true
	            }
	          }
	        },
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsFunctionGroupsRecord = definedTypes['AccessGroupsData.FunctionGroupItemBase'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putAccessgroupsFunctionGroupsRecord method
	     *
	     * @name AccessGroupsData#schemas.putAccessgroupsFunctionGroupsRecord
	     * @type {Object}
	     * @example
	     * {
	    "type": "array",
	    "items": {
	      "properties": {
	        "id": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 36,
	          "pattern": "^\\S(.*(\\S))?$",
	          "required": true
	        },
	        "externalLegalEntityId": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 36,
	          "pattern": "^\\S(.*(\\S))?$",
	          "required": true
	        },
	        "name": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 128,
	          "pattern": "^\\S(.*(\\S))?$",
	          "required": true
	        },
	        "description": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 255,
	          "pattern": "^\\S(.*(\\S))?$",
	          "required": true
	        },
	        "externalServiceAgreementId": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 64,
	          "required": true
	        },
	        "permissions": {
	          "type": "array",
	          "items": {
	            "properties": {
	              "functionId": {
	                "type": "string",
	                "minLength": 1,
	                "maxLength": 36,
	                "required": true
	              },
	              "assignedPrivileges": {
	                "type": "array",
	                "items": {
	                  "properties": {
	                    "privilege": {
	                      "type": "string",
	                      "minLength": 1,
	                      "maxLength": 16,
	                      "required": true
	                    },
	                    "limits": {
	                      "type": "array",
	                      "items": {
	                        "properties": {
	                          "limitType": {
	                            "enum": [
	                              "daily",
	                              "weekly",
	                              "monthly",
	                              "upper"
	                            ],
	                            "required": true
	                          },
	                          "amount": {
	                            "type": "number",
	                            "required": false
	                          }
	                        }
	                      },
	                      "required": false
	                    }
	                  }
	                },
	                "required": true
	              }
	            }
	          },
	          "required": false
	        }
	      }
	    }
	    }
	     */
	
	    schemas.putAccessgroupsFunctionGroupsRecord = definedTypes['AccessGroupsData.FunctionGroupsBatchPut'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsUsersRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsUsersRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "userId": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 36,
	        "pattern": "^\\S+$",
	        "required": true
	      },
	      "serviceAgreementId": {
	        "type": "string",
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsUsersRecord = definedTypes['AccessGroupsData.UserItem'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsServiceagreementsRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsServiceagreementsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "name": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 128,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "description": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 255,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "participants": {
	        "type": "array",
	        "items": {
	          "properties": {
	            "id": {
	              "type": "string",
	              "minLength": 1,
	              "maxLength": 36,
	              "pattern": "^[0-9a-f]{32}",
	              "required": true
	            },
	            "sharingUsers": {
	              "type": "boolean",
	              "required": true
	            },
	            "sharingAccounts": {
	              "type": "boolean",
	              "required": true
	            }
	          }
	        },
	        "minItems": 1,
	        "required": true
	      },
	      "status": {
	        "type": "string",
	        "enum": [
	          "ENABLED",
	          "DISABLED"
	        ],
	        "default": "ENABLED",
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsServiceagreementsRecord = definedTypes['AccessGroupsData.ServiceAgreementPost'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsUsercontextRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsUsercontextRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "serviceAgreementId": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 36,
	        "pattern": "^[0-9a-f]{32}",
	        "required": true
	      },
	      "legalEntityId": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 36,
	        "pattern": "^[0-9a-f]{32}",
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsUsercontextRecord = definedTypes['AccessGroupsData.UserContext-POST'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putAccessgroupsDataRecord method
	     *
	     * @name AccessGroupsData#schemas.putAccessgroupsDataRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "dataAccessGroupId": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 36,
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.putAccessgroupsDataRecord = definedTypes['AccessGroupsData.DataAccessGroupItem'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsDataGroupsDeleteRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsDataGroupsDeleteRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "ids": {
	        "type": "array",
	        "items": {
	          "properties": {}
	        },
	        "minItems": 1,
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsDataGroupsDeleteRecord = definedTypes['AccessGroupsData.DataGroupBatchDeleteItem'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putAccessgroupsDataGroupsRecord method
	     *
	     * @name AccessGroupsData#schemas.putAccessgroupsDataGroupsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "id": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 36,
	        "pattern": "^[0-9a-f]{32}",
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.putAccessgroupsDataGroupsRecord = definedTypes['AccessGroupsData.DataGroupItem'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putAccessgroupsFunctionRecord method
	     *
	     * @name AccessGroupsData#schemas.putAccessgroupsFunctionRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "functionAccessGroupId": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 36,
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.putAccessgroupsFunctionRecord = definedTypes['AccessGroupsData.FunctionAccessGroupItem'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsFunctionGroupsDeleteRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsFunctionGroupsDeleteRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "ids": {
	        "type": "array",
	        "items": {
	          "properties": {}
	        },
	        "minItems": 1,
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsFunctionGroupsDeleteRecord = definedTypes['AccessGroupsData.FunctionGroupBatchDeleteItem'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putAccessgroupsFunctionGroupsRecord method
	     *
	     * @name AccessGroupsData#schemas.putAccessgroupsFunctionGroupsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "legalEntityId": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 36,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.putAccessgroupsFunctionGroupsRecord = definedTypes['AccessGroupsData.FunctionGroupItemPut'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putAccessgroupsUsersPermissionsRecord method
	     *
	     * @name AccessGroupsData#schemas.putAccessgroupsUsersPermissionsRecord
	     * @type {Object}
	     * @example
	     * {
	    "type": "array",
	    "items": {
	      "properties": {
	        "userId": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 36,
	          "required": true
	        },
	        "legalEntityId": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 36,
	          "required": false
	        },
	        "externalServiceAgreementId": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 64,
	          "required": true
	        },
	        "functionDataPairs": {
	          "type": "array",
	          "items": {
	            "properties": {
	              "functionGroupId": {
	                "type": "string",
	                "minLength": 1,
	                "maxLength": 36,
	                "required": true
	              },
	              "dataGroupIds": {
	                "type": "array",
	                "items": {
	                  "properties": {}
	                },
	                "required": false
	              }
	            }
	          },
	          "required": true
	        }
	      }
	    }
	    }
	     */
	
	    schemas.putAccessgroupsUsersPermissionsRecord = definedTypes['AccessGroupsData.UserPermissions'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsUsersFunctionRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsUsersFunctionRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "functionAccessGroupIds": {
	        "type": "array",
	        "items": {
	          "properties": {}
	        },
	        "minItems": 1,
	        "required": true
	      },
	      "revoke": {
	        "type": "boolean",
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsUsersFunctionRecord = definedTypes['AccessGroupsData.AssignFunctionAccessGroup'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsUsersDataRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsUsersDataRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "functionAccessGroupId": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 36,
	        "required": true
	      },
	      "dataAccessGroupIds": {
	        "type": "array",
	        "items": {
	          "properties": {}
	        },
	        "minItems": 1,
	        "required": true
	      },
	      "revoke": {
	        "type": "boolean",
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsUsersDataRecord = definedTypes['AccessGroupsData.AssignDataAccessGroup'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putAccessgroupsServiceagreementsRecord method
	     *
	     * @name AccessGroupsData#schemas.putAccessgroupsServiceagreementsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "name": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 128,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": false
	      },
	      "description": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 255,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": false
	      },
	      "externalId": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 64,
	        "pattern": "^\\S+$",
	        "required": false
	      },
	      "status": {
	        "type": "string",
	        "enum": [
	          "ENABLED",
	          "DISABLED"
	        ],
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.putAccessgroupsServiceagreementsRecord = definedTypes['AccessGroupsData.ServiceAgreementPut'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsServiceagreementsIngestServiceagreementsRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsServiceagreementsIngestServiceagreementsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "name": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 128,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "externalId": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 64,
	        "pattern": "^\\S+$",
	        "required": false
	      },
	      "description": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 255,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "participantsToIngest": {
	        "type": "array",
	        "items": {
	          "properties": {
	            "externalId": {
	              "type": "string",
	              "minLength": 1,
	              "maxLength": 64,
	              "pattern": "^\\S+$",
	              "required": true
	            },
	            "sharingUsers": {
	              "type": "boolean",
	              "required": true
	            },
	            "sharingAccounts": {
	              "type": "boolean",
	              "required": true
	            },
	            "admins": {
	              "type": "array",
	              "items": {
	                "properties": {}
	              },
	              "uniqueItems": true,
	              "required": false
	            },
	            "users": {
	              "type": "array",
	              "items": {
	                "properties": {}
	              },
	              "uniqueItems": true,
	              "required": false
	            }
	          }
	        },
	        "minItems": 1,
	        "uniqueItems": true,
	        "required": true
	      },
	      "status": {
	        "type": "string",
	        "enum": [
	          "ENABLED",
	          "DISABLED"
	        ],
	        "default": "ENABLED",
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsServiceagreementsIngestServiceagreementsRecord = definedTypes['AccessGroupsData.ServicesAgreementIngest'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putAccessgroupsServiceagreementsAdminsRecord method
	     *
	     * @name AccessGroupsData#schemas.putAccessgroupsServiceagreementsAdminsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "participants": {
	        "type": "array",
	        "items": {
	          "properties": {
	            "id": {
	              "type": "string",
	              "minLength": 1,
	              "maxLength": 36,
	              "required": true
	            },
	            "admins": {
	              "type": "array",
	              "items": {
	                "properties": {}
	              },
	              "uniqueItems": true,
	              "required": true
	            }
	          }
	        },
	        "minItems": 1,
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.putAccessgroupsServiceagreementsAdminsRecord = definedTypes['AccessGroupsData.UpdateAdmins'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsServiceagreementsContextUsersAddRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsServiceagreementsContextUsersAddRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "users": {
	        "type": "array",
	        "items": {
	          "properties": {}
	        },
	        "minItems": 1,
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsServiceagreementsContextUsersAddRecord = definedTypes['AccessGroupsData.UsersForServiceAgreement'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsServiceagreementsContextUsersRemoveRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsServiceagreementsContextUsersRemoveRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "users": {
	        "type": "array",
	        "items": {
	          "properties": {}
	        },
	        "minItems": 1,
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsServiceagreementsContextUsersRemoveRecord = definedTypes['AccessGroupsData.UsersForServiceAgreement'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsServiceagreementsIngestServiceagreementsParticipantsRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsServiceagreementsIngestServiceagreementsParticipantsRecord
	     * @type {Object}
	     * @example
	     * {
	    "type": "array",
	    "items": {
	      "properties": {
	        "externalServiceAgreementId": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 64,
	          "required": true
	        },
	        "externalParticipantId": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 64,
	          "required": true
	        },
	        "sharingUsers": {
	          "type": "boolean",
	          "required": true
	        },
	        "sharingAccounts": {
	          "type": "boolean",
	          "required": true
	        }
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsServiceagreementsIngestServiceagreementsParticipantsRecord = definedTypes['AccessGroupsData.Participant'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsServiceagreementsIngestServiceagreementsUsersAddRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsServiceagreementsIngestServiceagreementsUsersAddRecord
	     * @type {Object}
	     * @example
	     * {
	    "type": "array",
	    "items": {
	      "properties": {
	        "userId": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 36,
	          "pattern": "^[0-9a-f]{32}",
	          "required": true
	        },
	        "externalServiceAgreementId": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 64,
	          "pattern": "^\\S+$",
	          "required": true
	        },
	        "legalEntityId": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 36,
	          "pattern": "^[0-9a-f]{32}",
	          "required": true
	        }
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsServiceagreementsIngestServiceagreementsUsersAddRecord = definedTypes['AccessGroupsData.ServiceAgreementUsersBatchIngest'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsServiceagreementsIngestServiceagreementsUsersRemoveRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsServiceagreementsIngestServiceagreementsUsersRemoveRecord
	     * @type {Object}
	     * @example
	     * {
	    "type": "array",
	    "items": {
	      "properties": {
	        "userId": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 36,
	          "pattern": "^[0-9a-f]{32}",
	          "required": true
	        },
	        "externalServiceAgreementId": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 64,
	          "pattern": "^\\S+$",
	          "required": true
	        },
	        "legalEntityId": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 36,
	          "pattern": "^[0-9a-f]{32}",
	          "required": true
	        }
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsServiceagreementsIngestServiceagreementsUsersRemoveRecord = definedTypes['AccessGroupsData.ServiceAgreementUsersBatchIngest'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsServiceagreementsIngestServiceagreementsAdminsAddRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsServiceagreementsIngestServiceagreementsAdminsAddRecord
	     * @type {Object}
	     * @example
	     * {
	    "type": "array",
	    "items": {
	      "properties": {
	        "userId": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 36,
	          "pattern": "^[0-9a-f]{32}",
	          "required": true
	        },
	        "externalServiceAgreementId": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 64,
	          "pattern": "^\\S+$",
	          "required": true
	        },
	        "legalEntityId": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 36,
	          "pattern": "^[0-9a-f]{32}",
	          "required": true
	        }
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsServiceagreementsIngestServiceagreementsAdminsAddRecord = definedTypes['AccessGroupsData.ServiceAgreementAdminsBatchIngest'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsServiceagreementsIngestServiceagreementsAdminsRemoveRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsServiceagreementsIngestServiceagreementsAdminsRemoveRecord
	     * @type {Object}
	     * @example
	     * {
	    "type": "array",
	    "items": {
	      "properties": {
	        "userId": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 36,
	          "pattern": "^[0-9a-f]{32}",
	          "required": true
	        },
	        "externalServiceAgreementId": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 64,
	          "pattern": "^\\S+$",
	          "required": true
	        },
	        "legalEntityId": {
	          "type": "string",
	          "minLength": 1,
	          "maxLength": 36,
	          "pattern": "^[0-9a-f]{32}",
	          "required": true
	        }
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsServiceagreementsIngestServiceagreementsAdminsRemoveRecord = definedTypes['AccessGroupsData.ServiceAgreementAdminsBatchIngest'];
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return _ref = {
	
	      getAccessgroupsData: getAccessgroupsData,
	
	      postAccessgroupsDataRecord: postAccessgroupsDataRecord,
	
	      postAccessgroupsDataGroupsRecord: postAccessgroupsDataGroupsRecord,
	
	      putAccessgroupsDataGroupsRecord: putAccessgroupsDataGroupsRecord,
	
	      getAccessgroupsDataGroups: getAccessgroupsDataGroups,
	
	      getAccessgroupsFunction: getAccessgroupsFunction,
	
	      postAccessgroupsFunctionRecord: postAccessgroupsFunctionRecord,
	
	      getAccessgroupsFunctionGroups: getAccessgroupsFunctionGroups,
	
	      postAccessgroupsFunctionGroupsRecord: postAccessgroupsFunctionGroupsRecord,
	
	      putAccessgroupsFunctionGroupsRecord: putAccessgroupsFunctionGroupsRecord,
	
	      getAccessgroupsConfigFunctions: getAccessgroupsConfigFunctions,
	
	      postAccessgroupsUsersRecord: postAccessgroupsUsersRecord,
	
	      getAccessgroupsUsers: getAccessgroupsUsers,
	
	      postAccessgroupsServiceagreementsRecord: postAccessgroupsServiceagreementsRecord,
	
	      getAccessgroupsServiceagreements: getAccessgroupsServiceagreements,
	
	      postAccessgroupsUsercontextRecord: postAccessgroupsUsercontextRecord,
	
	      getAccessgroupsDataRecord: getAccessgroupsDataRecord,
	
	      putAccessgroupsDataRecord: putAccessgroupsDataRecord,
	
	      deleteAccessgroupsDataRecord: deleteAccessgroupsDataRecord,
	
	      postAccessgroupsDataGroupsDeleteRecord: postAccessgroupsDataGroupsDeleteRecord,
	
	      getAccessgroupsDataGroupsRecord: getAccessgroupsDataGroupsRecord
	
	    }, _defineProperty(_ref, 'putAccessgroupsDataGroupsRecord', putAccessgroupsDataGroupsRecord), _defineProperty(_ref, 'deleteAccessgroupsDataGroupsRecord', deleteAccessgroupsDataGroupsRecord), _defineProperty(_ref, 'getAccessgroupsFunctionRecord', getAccessgroupsFunctionRecord), _defineProperty(_ref, 'putAccessgroupsFunctionRecord', putAccessgroupsFunctionRecord), _defineProperty(_ref, 'deleteAccessgroupsFunctionRecord', deleteAccessgroupsFunctionRecord), _defineProperty(_ref, 'postAccessgroupsFunctionGroupsDeleteRecord', postAccessgroupsFunctionGroupsDeleteRecord), _defineProperty(_ref, 'getAccessgroupsFunctionGroupsRecord', getAccessgroupsFunctionGroupsRecord), _defineProperty(_ref, 'putAccessgroupsFunctionGroupsRecord', putAccessgroupsFunctionGroupsRecord), _defineProperty(_ref, 'deleteAccessgroupsFunctionGroupsRecord', deleteAccessgroupsFunctionGroupsRecord), _defineProperty(_ref, 'getAccessgroupsUsersRecord', getAccessgroupsUsersRecord), _defineProperty(_ref, 'getAccessgroupsUsersPrivileges', getAccessgroupsUsersPrivileges), _defineProperty(_ref, 'getAccessgroupsUsersUserPrivileges', getAccessgroupsUsersUserPrivileges), _defineProperty(_ref, 'getAccessgroupsUsersPermissions', getAccessgroupsUsersPermissions), _defineProperty(_ref, 'putAccessgroupsUsersPermissionsRecord', putAccessgroupsUsersPermissionsRecord), _defineProperty(_ref, 'getAccessgroupsUsersUserPermissions', getAccessgroupsUsersUserPermissions), _defineProperty(_ref, 'postAccessgroupsUsersFunctionRecord', postAccessgroupsUsersFunctionRecord), _defineProperty(_ref, 'postAccessgroupsUsersDataRecord', postAccessgroupsUsersDataRecord), _defineProperty(_ref, 'getAccessgroupsUsersPrivilegesArrangements', getAccessgroupsUsersPrivilegesArrangements), _defineProperty(_ref, 'getAccessgroupsUsersPrivilegesArrangementsRecord', getAccessgroupsUsersPrivilegesArrangementsRecord), _defineProperty(_ref, 'getAccessgroupsUsersUserPrivilegesArrangements', getAccessgroupsUsersUserPrivilegesArrangements), _defineProperty(_ref, 'getAccessgroupsUsersUserPrivilegesArrangementsRecord', getAccessgroupsUsersUserPrivilegesArrangementsRecord), _defineProperty(_ref, 'getAccessgroupsUsersPermissionsSummary', getAccessgroupsUsersPermissionsSummary), _defineProperty(_ref, 'getAccessgroupsServiceagreementsRecord', getAccessgroupsServiceagreementsRecord), _defineProperty(_ref, 'putAccessgroupsServiceagreementsRecord', putAccessgroupsServiceagreementsRecord), _defineProperty(_ref, 'getAccessgroupsServiceagreementsContext', getAccessgroupsServiceagreementsContext), _defineProperty(_ref, 'postAccessgroupsServiceagreementsIngestServiceagreementsRecord', postAccessgroupsServiceagreementsIngestServiceagreementsRecord), _defineProperty(_ref, 'getAccessgroupsServiceagreementsParticipants', getAccessgroupsServiceagreementsParticipants), _defineProperty(_ref, 'getAccessgroupsServiceagreementsAdmins', getAccessgroupsServiceagreementsAdmins), _defineProperty(_ref, 'putAccessgroupsServiceagreementsAdminsRecord', putAccessgroupsServiceagreementsAdminsRecord), _defineProperty(_ref, 'getAccessgroupsServiceagreementsContextParticipants', getAccessgroupsServiceagreementsContextParticipants), _defineProperty(_ref, 'getAccessgroupsServiceagreementsContextUsers', getAccessgroupsServiceagreementsContextUsers), _defineProperty(_ref, 'postAccessgroupsServiceagreementsContextUsersAddRecord', postAccessgroupsServiceagreementsContextUsersAddRecord), _defineProperty(_ref, 'postAccessgroupsServiceagreementsContextUsersRemoveRecord', postAccessgroupsServiceagreementsContextUsersRemoveRecord), _defineProperty(_ref, 'getAccessgroupsServiceagreementsContextUsersUnexposed', getAccessgroupsServiceagreementsContextUsersUnexposed), _defineProperty(_ref, 'postAccessgroupsServiceagreementsIngestServiceagreementsParticipantsRecord', postAccessgroupsServiceagreementsIngestServiceagreementsParticipantsRecord), _defineProperty(_ref, 'postAccessgroupsServiceagreementsIngestServiceagreementsUsersAddRecord', postAccessgroupsServiceagreementsIngestServiceagreementsUsersAddRecord), _defineProperty(_ref, 'postAccessgroupsServiceagreementsIngestServiceagreementsUsersRemoveRecord', postAccessgroupsServiceagreementsIngestServiceagreementsUsersRemoveRecord), _defineProperty(_ref, 'postAccessgroupsServiceagreementsIngestServiceagreementsAdminsAddRecord', postAccessgroupsServiceagreementsIngestServiceagreementsAdminsAddRecord), _defineProperty(_ref, 'postAccessgroupsServiceagreementsIngestServiceagreementsAdminsRemoveRecord', postAccessgroupsServiceagreementsIngestServiceagreementsAdminsRemoveRecord), _defineProperty(_ref, 'getAccessgroupsServiceagreementsExternalRecord', getAccessgroupsServiceagreementsExternalRecord), _defineProperty(_ref, 'getAccessgroupsUsercontextServiceagreements', getAccessgroupsUsercontextServiceagreements), _defineProperty(_ref, 'getAccessgroupsUsercontextServiceagreementsLegalentities', getAccessgroupsUsercontextServiceagreementsLegalentities), _defineProperty(_ref, 'schemas', schemas), _ref;
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-accessgroups-http-ng.js.map