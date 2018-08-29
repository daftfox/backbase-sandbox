(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-permissions-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-is-permitted-ng", ["vendor-bb-angular", "lib-bb-permissions-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-is-permitted-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-permissions-ng"));
	else
		root["ui-bb-is-permitted-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-permissions-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_88__) {
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

	module.exports = __webpack_require__(87);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbPermissionsNg = __webpack_require__(88);
	
	var _libBbPermissionsNg2 = _interopRequireDefault(_libBbPermissionsNg);
	
	var _directive = __webpack_require__(89);
	
	var _directive2 = _interopRequireDefault(_directive);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _vendorBbAngular2.default.module('ui-bb-is-permitted-ng', [_libBbPermissionsNg2.default]).directive('bbIsPermittedNg', ['$animate', '$compile', _libBbPermissionsNg.bbPermissionsKey,
	/* into */
	_directive2.default]).name; /**
	                             * @module ui-bb-is-permitted-ng
	                             *
	                             * @description
	                             * This module contains UI directive to show/hide element it applied to
	                             * depending on user permissions. Directive behaves much as same as Angular's ng-if
	                             * directive (and it actually contains it's original code), so element will be hidden
	                             * or shown depending user permissions.
	                             * To download and check user permissions directive use lib-bb-permissions-ng library.
	                             *
	                             * @example
	                             * // Add module dependency in the extension's index.js
	                             * import uiBbIsPermittedNg from 'ui-bb-is-permitted-ng';
	                             *
	                             * export const dependencyKeys = [
	                             *   uiBbIsPermittedNg,
	                             * ];
	                             *
	                             * // Add directive attribute to html elements in the extensions's template.html
	                             * <button class="btn"
	                             *   data-ng-click="$ctrl.createContact()"
	                             *   data-bb-is-permitted-ng="'Contacts.Contacts.create'">
	                             *   Create new Contact
	                             * </button>
	                             */

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_88__;

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name getBlockNodes
	 * @type {function}
	 * @inner
	 * @description
	 * Return the DOM siblings between the first and last node in the given array.
	 * This method is copied from AngularJS library as part of ng-if directive implementation.
	 * https://github.com/angular/angular.js/blob/v1.5.8/src/Angular.js#L1876
	 *
	 * @param {object[]} nodes Array like object
	 * @returns {object[]} The inputted object or a jqLite collection containing the nodes
	 */
	var getBlockNodes = function getBlockNodes(nodes) {
	  var node = nodes[0];
	  var endNode = nodes[nodes.length - 1];
	  var blockNodes = void 0;
	
	  // eslint-disable-next-line no-cond-assign
	  for (var i = 1; node !== endNode && (node = node.nextSibling); i++) {
	    if (blockNodes || nodes[i] !== node) {
	      if (!blockNodes) {
	        blockNodes = _vendorBbAngular2.default.element([].slice.call(nodes, 0, i));
	      }
	      blockNodes.push(node);
	    }
	  }
	  return blockNodes || nodes;
	};
	
	/**
	 * @type {function}
	 * @description
	 * Directive's link function factory
	 * @inner
	 */
	var linkFnFactory = function linkFnFactory($animate, $compile, permissions) {
	  return function ($scope, $element, $attr, ctrl, $transclude) {
	    var block = void 0;
	    var childScope = void 0;
	    var previousElements = void 0;
	
	    /**
	     * @name showElement
	     * @type {function}
	     * @inner
	     * @description
	     * Add element to the DOM
	     * Implementation of this function is taken from the original ng-if directive code.
	     * https://github.com/angular/angular.js/blob/v1.5.8/src/ng/directive/ngIf.js#L94
	     */
	    var showElement = function showElement() {
	      if (!childScope) {
	        $transclude(function (clone, newScope) {
	          childScope = newScope;
	          // eslint-disable-next-line no-param-reassign
	          clone[clone.length++] = $compile.$$createComment('end bbIsPermittedNg', $attr.bbIsPermittedNg);
	          // Note: We only need the first/last node of the cloned nodes.
	          // However, we need to keep the reference to the jqlite wrapper as it might be
	          // changed later by a directive with templateUrl when its template arrives.
	          block = { clone: clone };
	          $animate.enter(clone, $element.parent(), $element);
	        });
	      }
	    };
	
	    /**
	     * @name hideElement
	     * @type {function}
	     * @inner
	     * @description
	     * Removes directive element from the DOM
	     * Implementation of this function is taken from the original ng-if directive code.
	     * https://github.com/angular/angular.js/blob/v1.5.8/src/ng/directive/ngIf.js#L108
	     */
	    var hideElement = function hideElement() {
	      if (previousElements) {
	        previousElements.remove();
	        previousElements = null;
	      }
	
	      if (childScope) {
	        childScope.$destroy();
	        childScope = null;
	      }
	
	      if (block) {
	        previousElements = getBlockNodes(block.clone);
	        $animate.leave(previousElements).then(function () {
	          previousElements = null;
	        });
	        block = null;
	      }
	    };
	
	    /**
	     * @name checkPermissions
	     * @type {function}
	     * @inner
	     * @description
	     * Will check user permissions for specified privilege and either show
	     * or hide element depending on the result. If permissions check failed,
	     * element will be hidden too.
	     * @param {string} privilege Privilege string to check permissions for.
	     */
	    var checkPermissions = function checkPermissions(privilege) {
	      permissions.isPermitted(privilege).then(function (isPermitted) {
	        if (isPermitted) {
	          showElement();
	        } else {
	          hideElement();
	        }
	      }).catch(function () {
	        // eslint-disable-next-line no-console
	        console.warn('Unable to download user permissions for "' + privilege + '" privilege.');
	        hideElement();
	      });
	    };
	
	    $scope.$watch($attr.bbIsPermittedNg, function (value) {
	      if (!permissions.enabled) {
	        showElement();
	      } else {
	        checkPermissions(value);
	      }
	    });
	  };
	};
	
	/**
	 * @name bbIsPermittedNgDirective
	 * @type {object}
	 */
	
	exports.default = function ($animate, $compile, permissions) {
	  return {
	    multiElement: true,
	    transclude: 'element',
	    priority: 700,
	    terminal: true,
	    restrict: 'A',
	    $$tlb: true,
	    link: linkFnFactory($animate, $compile, permissions)
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-is-permitted-ng.js.map