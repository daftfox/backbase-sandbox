(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-highlight-text-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-highlight-text-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-highlight-text-ng"] = factory(root["vendor-bb-angular"]);
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

	module.exports = __webpack_require__(80);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _controller = __webpack_require__(81);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _directive = __webpack_require__(82);
	
	var _directive2 = _interopRequireDefault(_directive);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _vendorBbAngular2.default.module('ui-bb-highlight-text-ng', []).controller('HighlightTextCtrl', ['$scope', '$element', _controller2.default]).directive('uiBbHighlightTextNg', ['$interpolate', '$parse', _directive2.default]).name; /**
	                                                                                                                                                                                                                                                         * @module ui-bb-highlight-text-ng
	                                                                                                                                                                                                                                                         *
	                                                                                                                                                                                                                                                         * @description
	                                                                                                                                                                                                                                                         * Directive to highlight a text within a text node
	                                                                                                                                                                                                                                                         *
	                                                                                                                                                                                                                                                         */

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = HighlightTextCtrl;
	function HighlightTextCtrl($scope, $element) {
	  var $ctrl = this;
	  var regexFlags = 'gi';
	  var template = '<span class="highlight">$1</span>';
	  var regex = null;
	
	  var render = function render(state, prevState) {
	    if (regex === null || state.term !== prevState.term) {
	      regex = new RegExp('(' + state.term + ')', regexFlags);
	    }
	
	    if (state.term) {
	      $element.empty();
	      $element.html(state.content.replace(regex, template));
	    } else {
	      $element.text(state.content);
	    }
	  };
	
	  var init = function init(termExpr, contentExpr) {
	    var unregisterWatch = $scope.$watch(function (scope) {
	      return {
	        term: termExpr(scope),
	        content: contentExpr(scope)
	      };
	    }, render, true);
	
	    $element.on('$destroy', unregisterWatch);
	  };
	
	  Object.assign($ctrl, {
	    init: init
	  });
	}

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbHighlightTextNg
	 * @type {function}
	 *
	 * @description
	 * It accepts an expression, if evaluates to a string it will highlight that in the
	 * content of the node. If the expression is not a text it will keep untouched content of the node.
	 *
	 * @example
	 * <div data-ui-bb-highlight-text-ng="searchTerm">
	 *   {{ text }}
	 * </div>
	 */
	var uiBbHighlightTextNg = function uiBbHighlightTextNg($interpolate, $parse) {
	  return {
	    restrict: 'A',
	    controller: 'HighlightTextCtrl',
	    compile: function compile($element, $attr) {
	      var termExpr = $parse($attr.uiBbHighlightTextNg);
	      var contentExpr = $interpolate($element.html());
	
	      return function (scope, element, attr, ctrl) {
	        ctrl.init(termExpr, contentExpr);
	      };
	    }
	  };
	};
	
	exports.default = uiBbHighlightTextNg;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-highlight-text-ng.js.map