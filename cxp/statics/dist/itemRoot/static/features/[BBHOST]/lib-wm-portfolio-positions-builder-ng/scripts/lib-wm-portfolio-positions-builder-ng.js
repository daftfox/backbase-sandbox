(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("lib-wm-portfolio-positions-builder-ng", [], factory);
	else if(typeof exports === 'object')
		exports["lib-wm-portfolio-positions-builder-ng"] = factory();
	else
		root["lib-wm-portfolio-positions-builder-ng"] = factory();
})(this, function() {
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

	module.exports = __webpack_require__(83);

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createHierarchy = __webpack_require__(84);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _createHierarchy.createHierarchy;
	  }
	});

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.groupListByFields = groupListByFields;
	exports.createHierarchy = createHierarchy;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/* eslint-disable */
	
	/**
	 * @util join
	 *
	 * @description
	 * Utility for creating hierarchy of nested entities.
	 *
	 * @example Example of query
	 * const query = {
	 *   $field: 'accounts',
	 *   $source: data.accounts,
	 *   $idField: 'id',
	 *   $leftJoin: {
	 *     $field: 'assetClasses',
	 *     $source: data.assetClasses,
	 *     $filterBy: ['accountId'],
	 *     $idField: 'id',
	 *     $leftJoin: {
	 *       $field: 'regions',
	 *       $source: data.regions,
	 *       $filterBy: ['accountId', 'assetClassId'],
	 *       $idField: 'id',
	 *       $leftJoin: {
	 *         $field: 'countries',
	 *         $source: data.countries,
	 *         $filterBy: ['accountId', 'assetClassId', 'regionId'],
	 *         $idField: 'id',
	 *         $leftJoin: {
	 *           $field: 'positions',
	 *           $source: data.positions,
	 *           $filterBy: ['accountId', 'assetClassId', 'regionId', 'countryId']
	 *         }
	 *       }
	 *     }
	 *   }
	 * };
	 */
	
	/**
	 * @name createKey
	 *
	 * @description
	 * Creates entity's unique key
	 *
	 * @param {array} fields List of fields to form composite key
	 * @param {object} item Entity, that will be grouped
	 * @type {function}
	 * @returns {string} Composite key
	 */
	var createKey = exports.createKey = function createKey(fields) {
	  return function (item) {
	    return fields.map(function (field) {
	      return item[field];
	    }).join('-');
	  };
	};
	
	/**
	 * @name groupListByFields
	 *
	 * @description
	 * Groups entities by composite key
	 *
	 * @param {array} list List of entities to be grouped
	 * @param {array} fields List of fields to form composite key
	 * @type {function}
	 * @returns {object} Entities grouped by fields
	 */
	function groupListByFields(list, fields) {
	  var mapKeyToList = createKey(fields);
	
	  var grouped = {};
	
	  list.forEach(function (item) {
	    var groupKey = mapKeyToList(item);
	    if (!grouped[groupKey]) {
	      grouped[groupKey] = [];
	    }
	    grouped[groupKey].push(item);
	  });
	
	  return grouped;
	}
	
	/**
	 * @name createHierarchy
	 *
	 * @description
	 * Creates nested hierarchy out of connected entities
	 *
	 * @param {object} query Structure, that describes how to nest entities
	 * @type {function}
	 * @returns {array} Hierarchy of nested entities
	 */
	function createHierarchy(query) {
	  if (query.$leftJoin) {
	    var groupedChildren = createHierarchy(query.$leftJoin);
	    var filterBy = query.$filterBy ? query.$filterBy : [];
	    var mapKeyToList = createKey(filterBy.concat(query.$idField));
	
	    var extended = query.$source.map(function (item) {
	      return Object.assign({}, item, _defineProperty({}, query.$leftJoin.$field, groupedChildren[mapKeyToList(item)]));
	    });
	
	    if (!query.$filterBy) {
	      return extended;
	    }
	    return groupListByFields(extended, query.$filterBy);
	  }
	  return groupListByFields(query.$source, query.$filterBy);
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-wm-portfolio-positions-builder-ng.js.map