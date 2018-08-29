(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-list-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-list-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-list-ng"] = factory(root["vendor-bb-angular"]);
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
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(90);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _list = __webpack_require__(91);
	
	var _list2 = _interopRequireDefault(_list);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ui-bb-list-ng
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbListKey from 'ui-bb-list-ng';
	 *
	 * // ...
	 *
	 * export const dependencyKeys = [
	 *   uiBbListKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-list-ng on-scroll-to-end="$ctrl.searchMore()">
	 *   <div ng-repeat="group in $ctrl.searchTransactions track by $index">
	 *     <div class="table-view-divider">
	 *       <h4 data-role="transactions-group-date" ng-bind="group.date | date"></h4>
	 *     </div>
	 *   </div>
	 * </ui-bb-list-ng>
	 *
	 * <ui-bb-list-ng class="pre-scrollable" on-scrolled-to-bottom="$ctrl.loadMore()">
	 *   <div class="list-group-item" data-ng-repeat="contact in $ctrl.contacts.data">
	 *     <div>{{ contact.name }}</div>
	 *   </div>
	 * </ui-bb-list-ng>
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-list-ng', []).component('uiBbListNg', _list2.default).name;

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _list = __webpack_require__(92);
	
	var _list2 = _interopRequireDefault(_list);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name uiBbListComponent
	 * @type {object}
	 * @description
	 * List Component Object
	 *
	 * @property {function} onScrollToEnd - callback function to invoke when the
	 *           threshold of the list has been reached.
	 * @property {function} onScrolledToBottom - callback function to invoke when the
	 *           list bottom has been reached.
	 */
	var uiBbListComponent = {
	  bindings: {
	    onScrollToEnd: '&',
	    onScrolledToBottom: '&'
	  },
	  controller: ['$scope', '$element', _list2.default]
	};
	
	exports.default = uiBbListComponent;

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbListController
	 *
	 * @description
	 * List Controller
	 *
	 * @ngkey uiBbListController
	 * @type {function}
	 * @inner
	 */
	var uiBbListController = function uiBbListController(scope, element) {
	  var ctrl = this;
	
	  /**
	   * Calculates if the threshold has been reached and calls the callback
	   * function accordingly.
	   *
	   * @name onScroll
	   * @type {function}
	   * @param {event} event
	   */
	  function onScroll(event) {
	    var scrollPos = event.target.scrollTop;
	    var elementHeight = event.target.offsetHeight;
	    var scrollHeight = event.target.scrollHeight;
	    var hasScroll = scrollHeight > elementHeight;
	    var distanceToBottom = scrollHeight - (scrollPos + elementHeight);
	    var targetDistanceToBottom = elementHeight;
	
	    if (hasScroll && distanceToBottom <= targetDistanceToBottom) {
	      if (typeof ctrl.onScrollToEnd === 'function') {
	        ctrl.onScrollToEnd();
	      }
	    }
	
	    // To use when the scroll bottom is reached
	    if (hasScroll && distanceToBottom <= 0) {
	      if (typeof ctrl.onScrolledToBottom === 'function') {
	        ctrl.onScrolledToBottom();
	      }
	    }
	  }
	
	  function bindEvents() {
	    element.on('scroll', onScroll);
	  }
	
	  function unbindEvents() {
	    element.off('scroll', onScroll);
	  }
	
	  scope.$on('destroy', function () {
	    unbindEvents();
	  });
	
	  bindEvents();
	};
	
	exports.default = uiBbListController;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-list-ng.js.map