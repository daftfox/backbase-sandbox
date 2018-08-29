(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-wm-portfolio-collapse-expand-all-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-wm-portfolio-collapse-expand-all-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-wm-portfolio-collapse-expand-all-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_93__) {
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

	module.exports = __webpack_require__(106);

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_93__;

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(93);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _component = __webpack_require__(107);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	/**
	 * @module ext-portfolio-collapse-expand-all-ng
	 *
	 * @description
	 * Module with collapse/expand actions.
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbPortfolioCollapseExpandAllKey from 'ui-wm-portfolio-collapse-expand-all-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbPortfolioCollapseExpandAllKey,
	 * ];
	 *
	 */
	exports.default = _vendorBbAngular2.default.module('ui-wm-portfolio-collapse-expand-all-ng', []).component('uiWmPortfolioCollapseExpandAllActions', _component2.default).name;

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(108);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _template = __webpack_require__(109);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name CollapseExpandAllActions
	 * @ngkey uiWmPortfolioCollapseExpandAllActions
	 * @type {object}
	 * @description
	 * "Collapse/expand all" actions component.
	 *
	 * @example
	 */
	
	var CollapseExpandAllActions = {
	  template: _template2.default,
	  controller: _controller2.default,
	  controllerAs: '$collapseExpandAllActionsCtrl',
	  bindings: {
	    data: '<',
	    childrenPath: '<'
	  }
	};
	
	exports.default = CollapseExpandAllActions;

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = CollapseExpandAllActionsController;
	
	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }
	
	/**
	 * @name CollapseExpandAllActionsController
	 * @ngkey CollapseExpandAllActionsController
	 * @type {object}
	 * @description
	 * Portfolio "collapse/expand all" actions controller.
	 */
	function CollapseExpandAllActionsController() {
	  var $ctrl = this;
	
	  /**
	   * @description
	   * Expands/Collapses all items.
	   *
	   * @private
	   * @name oToggleAllItems
	   * @type {function}
	   * @param {Object[]} items   Items to expand/collapse
	   * @param {boolean} state    True to expand all items, False to collapse
	   * @param {Function[]}       Map functions to retrieve children from data items
	   *                            to recursively expand/collapse
	   *
	   */
	  var doToggleAllItems = function doToggleAllItems(data, state, _ref) {
	    var _ref2 = _toArray(_ref),
	        childrenField = _ref2[0],
	        deepChildrenFields = _ref2.slice(1);
	
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	      for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var item = _step.value;
	
	        item.isOpen = state;
	        if (childrenField) {
	          doToggleAllItems(item[childrenField], state, deepChildrenFields);
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	  };
	
	  /**
	   * @description
	   * Expands all items.
	   *
	   * @public
	   * @name CollapseExpandAllActionsController#expandAllItems
	   * @type {function}
	   */
	  var expandAllItems = function expandAllItems() {
	    doToggleAllItems($ctrl.data, true, $ctrl.childrenPath || []);
	  };
	
	  /**
	   * @description
	   * Collapses all items.
	   *
	   * @public
	   * @name collapseAllItems
	   * @type {function}
	   */
	  var collapseAllItems = function collapseAllItems() {
	    doToggleAllItems($ctrl.data, false, $ctrl.childrenPath || []);
	  };
	
	  Object.assign($ctrl, {
	    collapseAllItems: collapseAllItems,
	    expandAllItems: expandAllItems
	  });
	}

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

	module.exports = "<div class=\"pull-right\">\n  <button class=\"btn btn-outline-primary\"\n          data-role=\"collapse-all\"\n          data-ng-click=\"$collapseExpandAllActionsCtrl.collapseAllItems()\">\n    <span data-i18n-key=\"positions.collapseAll\"></span>\n  </button>\n  <button class=\"btn btn-outline-primary\"\n          data-role=\"open-all\"\n          data-ng-click=\"$collapseExpandAllActionsCtrl.expandAllItems()\">\n    <span data-i18n-key=\"positions.openAll\"></span>\n  </button>\n</div>"

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-wm-portfolio-collapse-expand-all-ng.js.map