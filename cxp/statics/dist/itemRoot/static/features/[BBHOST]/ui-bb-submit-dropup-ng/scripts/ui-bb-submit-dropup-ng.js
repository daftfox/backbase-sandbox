(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("ui-bb-button-spinner-ng"), require("ui-bb-ellipsis-tooltip-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-submit-dropup-ng", ["vendor-bb-angular", "ui-bb-button-spinner-ng", "ui-bb-ellipsis-tooltip-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-submit-dropup-ng"] = factory(require("vendor-bb-angular"), require("ui-bb-button-spinner-ng"), require("ui-bb-ellipsis-tooltip-ng"));
	else
		root["ui-bb-submit-dropup-ng"] = factory(root["vendor-bb-angular"], root["ui-bb-button-spinner-ng"], root["ui-bb-ellipsis-tooltip-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_111__) {
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

	module.exports = __webpack_require__(175);

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_111__;

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbEllipsisTooltipNg = __webpack_require__(111);
	
	var _uiBbEllipsisTooltipNg2 = _interopRequireDefault(_uiBbEllipsisTooltipNg);
	
	var _uiBbButtonSpinnerNg = __webpack_require__(29);
	
	var _uiBbButtonSpinnerNg2 = _interopRequireDefault(_uiBbButtonSpinnerNg);
	
	var _component = __webpack_require__(176);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _controller = __webpack_require__(178);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _vendorBbAngular2.default.module('ui-bb-submit-dropup-ng', [_uiBbEllipsisTooltipNg2.default, _uiBbButtonSpinnerNg2.default]).component('uiBbSubmitDropupNg', _component2.default).controller('uiBbSubmitDropupController', ['$filter', _controller2.default]).name; /**
	                                                                                                                                                                                                                                                                                       * @module ui-bb-submit-dropup-ng
	                                                                                                                                                                                                                                                                                       * @description
	                                                                                                                                                                                                                                                                                       * Submit button with menu UI component
	                                                                                                                                                                                                                                                                                       *
	                                                                                                                                                                                                                                                                                       * @example
	                                                                                                                                                                                                                                                                                       * // In an extension:
	                                                                                                                                                                                                                                                                                       * // file: scripts/index.js
	                                                                                                                                                                                                                                                                                       * import uiBbSubmitDropupKey from 'ui-bb-submit-dropup-ng';
	                                                                                                                                                                                                                                                                                       *
	                                                                                                                                                                                                                                                                                       * export const dependencyKeys = [
	                                                                                                                                                                                                                                                                                       *   uiBbSubmitDropupKey,
	                                                                                                                                                                                                                                                                                       * ];
	                                                                                                                                                                                                                                                                                       *
	                                                                                                                                                                                                                                                                                       * // file: templates/template.ng.html
	                                                                                                                                                                                                                                                                                       * <ui-bb-submit-dropup-ng
	                                                                                                                                                                                                                                                                                       *   data-tooltip-message="{{ 'label.review.submit.type.tooltip' | i18n }}"
	                                                                                                                                                                                                                                                                                       *   data-css-classes="col-md-3 col-sm-4 col-xs-12 p-0 mb-2 float-none"
	                                                                                                                                                                                                                                                                                       *   data-on-select="ext.helpers.selectPaymentSubmitType(button, $ctrl, $parent)"
	                                                                                                                                                                                                                                                                                       *   data-submit-button-types="ext.helpers.submitButtonTypes">
	                                                                                                                                                                                                                                                                                       * </ui-bb-submit-dropup-ng>
	                                                                                                                                                                                                                                                                                       */

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var component = {
	  bindings: {
	    config: '<',
	    tooltipMessage: '@',
	    onSelect: '&',
	    submitButtonTypes: '<',
	    cssClasses: '@'
	  },
	  controller: 'uiBbSubmitDropupController',
	  // eslint-disable-next-line global-require
	  template: __webpack_require__(177)
	};
	
	exports.default = component;

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

	module.exports = "<div class=\"btn-dropup-group navbar-expand {{ $ctrl.cssClasses }}\">\n  <div class=\"btn-group col-12 p-0 dropup\" data-uib-dropdown>\n    <button\n      data-ng-repeat=\"button in $ctrl.submitButtonTypes\"\n      data-ng-if=\"button.selected\"\n      type=\"button\"\n      class=\"btn btn-primary btn-dropup-main col-12\"\n      data-ui-bb-add-spinner-ng\n      data-spinner-loading=\"$ctrl.config.spinnerLoading\"\n      data-spinner-position=\"{{ $ctrl.config.spinnerPosition }}\"\n      data-spinner-classes=\"{{ $ctrl.config.spinnerClasses }}\"\n      data-spinner-placeholder=\"{{ $ctrl.config.spinnerPlaceholder }}\"\n      data-ng-click=\"$ctrl.onSelect({ button }); $ctrl.submitClicked = true;\"\n      data-role=\"ext-bus-initiate-payment-ng-review-submit-button\">\n      {{ button.text }}\n    </button>\n    <button\n      type=\"button\"\n      data-uib-tooltip=\"{{ $ctrl.tooltipMessage }}\"\n      data-tooltip-is-open=\"!$ctrl.submitClicked\"\n      data-tooltip-placement=\"top-right\"\n      data-tooltip-popup-delay=\"50\"\n      data-tooltip-trigger=\"mouseenter click\"\n      data-tooltip-append-to-body=\"true\"\n      class=\"btn btn-primary btn-dropup-menu-button text-center\"\n      data-uib-dropdown-toggle>\n    </button>\n    <ul class=\"dropdown-menu col-12\" data-uib-dropdown-menu>\n      <li\n        class=\"dropdown-item p-2\"\n        data-ng-class=\"{'active': type.selected}\"\n        data-ng-click=\"$ctrl.submitButtonTypeSelect(type.id)\"\n        data-ng-repeat=\"type in $ctrl.submitButtonTypes\">\n        <div>{{ type.text }}</div>\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = controller;
	function controller($filter) {
	  var $ctrl = this;
	
	  function $onInit() {
	    if ($ctrl.submitButtonTypes) {
	      $ctrl.submitButtonTypes.forEach(function (item) {
	        // eslint-disable-next-line no-param-reassign
	        item.text = $filter('i18n')(item.key);
	      });
	    }
	  }
	
	  /**
	   * @name uiBbSubmitDropupController#submitButtonTypeSelect
	   * @type {function}
	   * @description
	   * Mark submit button type as selected
	   *
	   * @param id {Number} Submit button type ID
	   */
	  var submitButtonTypeSelect = function submitButtonTypeSelect(id) {
	    $ctrl.submitButtonTypes.forEach(function (item) {
	      // eslint-disable-next-line no-param-reassign
	      item.selected = item.id === id;
	    });
	  };
	
	  Object.assign($ctrl, {
	    /**
	     * @name uiBbSubmitDropupController#submitClicked
	     * @type {Boolean}
	     *
	     * @description
	     * Flag to indicate if submit button is clicked
	     */
	    submitClicked: false,
	
	    $onInit: $onInit,
	    submitButtonTypeSelect: submitButtonTypeSelect
	  });
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-submit-dropup-ng.js.map