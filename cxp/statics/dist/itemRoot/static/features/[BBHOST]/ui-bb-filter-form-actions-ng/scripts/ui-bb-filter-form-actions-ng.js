(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-filter-form-actions-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-filter-form-actions-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-filter-form-actions-ng"] = factory(root["vendor-bb-angular"]);
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

	module.exports = __webpack_require__(69);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _constants = __webpack_require__(70);
	
	var _component = __webpack_require__(71);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _controller = __webpack_require__(72);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description The angular module name
	 */
	/**
	 * @module ui-bb-filter-form-actions-ng
	 *
	 * @description
	 * Filter form actions component
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbFilterFormActionsKey from 'ui-bb-filter-form-actions-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbFilterFormActionsKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-filter-form-actions-ng
	 *   data-filter-params="$ctrl.filterParams"
	 *   data-search-filter-form="searchFilterForm"
	 *   data-on-close="(ext) => {}"
	 *   data-on-filter="(form) => {}"
	 *   data-on-clear="() => {}"
	 *   data-button-labels="{
	 *     apply: 'Apply',
	 *     closePanel: 'Close panel,
	 *     clearAll: 'Clear all'
	 *   }">
	 * </ui-bb-filter-form-actions-ng>
	 */
	
	exports.default = _vendorBbAngular2.default.module(_constants.MODULE_KEY, []).component(_constants.COMPONENT_KEY, _component2.default).controller(_constants.CONTROLLER_KEY, ['$timeout', _controller2.default]).name;

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var MODULE_KEY = exports.MODULE_KEY = 'ui-bb-filter-form-actions-ng';
	
	var CONTROLLER_KEY = exports.CONTROLLER_KEY = MODULE_KEY + ':controller';
	
	var COMPONENT_KEY = exports.COMPONENT_KEY = 'uiBbFilterFormActionsNg';

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(70);
	
	/**
	 * @name uiBbFilterFormActionsComponent
	 * @type {object}
	 *
	 * @property {Object} filterParams          Filter form parameters
	 * @property {Labels} buttonLabels          Texts used in component
	 * @property {Object} searchFilterForm      Filter form object
	 *
	 * @property {Function} onFilter Function that calls on submitting the filter form
	 * @property {Function} onClose Function that calls on closing the filter form
	 * @property {Function} onClear Function that calls on clearing the filter form
	 */
	
	/**
	 * Labels type definition
	 * @typedef {Object} Labels
	 * @property {String} apply             Accessibility label for apply button
	 * @property {String} closePanel        Accesibility label for the close button
	 * @property {String} clearAll          Accesibility label for clear button
	 */
	
	var uiBbFilterFormActionsComponent = {
	  controller: _constants.CONTROLLER_KEY,
	  bindings: {
	    filterParams: '<',
	    buttonLabels: '<',
	    searchFilterForm: '<',
	    onFilter: '&',
	    onClose: '&',
	    onClear: '&'
	  },
	  template: ' \n    <div class="card-footer card-footer-darker">\n      <div class="row">\n        <div class="col-12">\n          <div class="d-none d-lg-block text-right">\n            <button \n              type="button"\n              class="btn btn-link"\n              data-ng-show="$ctrl.searchFilterForm.$dirty"\n              data-ng-click="$ctrl.onClearFilter($ctrl.searchFilterForm)"\n              title="{{ $ctrl.buttonLabels.clearAll }}"\n              data-role="filter-form-actions-clear-all">\n              {{ $ctrl.buttonLabels.clearAll }}\n            </button>\n            <button\n              type="button" \n              class="btn btn-secondary"\n              data-ng-click="$ctrl.onClose(ext)"\n              title="{{ $ctrl.buttonLabels.closePanel }}"\n              data-role="filter-form-actions-cancel">\n              {{ $ctrl.buttonLabels.closePanel }}\n            </button>\n            <button\n              data-ng-disabled="$ctrl.isFormValid($ctrl.searchFilterForm)"\n              class="btn btn-primary"\n              title="{{ $ctrl.buttonLabels.apply }}"\n              data-role="filter-form-actions-apply">\n              {{ $ctrl.buttonLabels.apply }}\n            </button>\n          </div>\n          <div class="d-lg-none d-block">\n            <button\n              data-ng-disabled="$ctrl.isFormValid($ctrl.searchFilterForm)"\n              class="btn btn-primary btn-block"\n              title="{{ $ctrl.buttonLabels.apply }}"\n              data-role="filter-form-actions-apply">\n              {{ $ctrl.buttonLabels.apply }}\n            </button>\n            <button\n              type="button" \n              class="btn btn-secondary btn-block"\n              data-ng-click="$ctrl.onClose(ext)"\n              title="{{ $ctrl.buttonLabels.closePanel }}"\n              data-role="filter-form-actions-cancel">\n              {{ $ctrl.buttonLabels.closePanel }}\n            </button>\n            <button \n              type="button"\n              class="btn btn-link btn-block"\n              data-ng-show="$ctrl.searchFilterForm.$dirty"\n              data-ng-click="$ctrl.onClearFilter($ctrl.searchFilterForm)"\n              title="{{ $ctrl.buttonLabels.clearAll }}"\n              data-role="filter-form-actions-clear-all">\n              {{ $ctrl.buttonLabels.clearAll }}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  '
	};
	
	exports.default = uiBbFilterFormActionsComponent;

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbFilterFormActionsController;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * @name uiBbFilterFormActionsController
	 * @type {function}
	 *
	 * @description
	 * Filter form controller
	 *
	 * @param {Promise} $timeout Angular timeout function
	 */
	function uiBbFilterFormActionsController($timeout) {
	  /**
	   * @name uiBbFilterFormActionsController
	   * @ngkey uiBbFilterFormActionsController
	   * @type {object}
	   * @description Filter form controller
	   */
	  var $ctrl = this;
	
	  /**
	   * @name immutableFilter
	   * @type {object}
	   * @description Filter parameters in reset state
	   */
	  var immutableFilter = void 0;
	
	  /**
	  * @description
	  * Reset form state method.
	  *
	  * @inner
	  * @name uiBbFilterFormActionsController#resetFormState
	  * @type {function}
	  */
	  var resetFormState = function resetFormState(form) {
	    if (form) {
	      form.$setUntouched();
	      form.$setPristine();
	    }
	  };
	
	  /**
	   * @name uiBbFilterFormActionsController#getClearedFilterParams
	   * @inner
	   *
	   * @description
	   * Get pristine state of filter form model
	   *
	   * @type {function}
	   *
	   * @param filterObject
	   */
	  var getClearedFilterParams = function getClearedFilterParams(filterObject) {
	    return Object.keys(filterObject).reduce(function (object, key) {
	      var value = filterObject[key] instanceof Object && filterObject[key].constructor === Object ? getClearedFilterParams(filterObject[key]) : null;
	
	      return Object.assign(object, _defineProperty({}, key, value));
	    }, {});
	  };
	
	  /**
	   * @description
	   * Reset filter parameters.
	   *
	   * @name uiBbFilterFormActionsController#onClearFilter
	   * @type {function}
	   */
	  var onClearFilter = function onClearFilter(form) {
	    Object.assign($ctrl.filterParams, _vendorBbAngular2.default.copy(immutableFilter));
	
	    $ctrl.onFilter(form);
	    $ctrl.onClear();
	    resetFormState(form);
	  };
	
	  /**
	   * @name uiBbFilterFormActionsController#$onInit
	   *
	   * @description
	   * Angular $onInit lifecycle hook
	   *
	   * @type {function}
	   */
	  var $onInit = function $onInit() {
	    immutableFilter = getClearedFilterParams($ctrl.filterParams);
	
	    $timeout(function () {
	      $ctrl.searchFilterForm.$setUntouched();
	      $ctrl.searchFilterForm.$setPristine();
	    });
	  };
	
	  /**
	   * @description
	   * Check if form state is pristine or invalid.
	   *
	   * @public
	   * @name uiBbFilterFormActionsController#isFormValid
	   * @type {function}
	   */
	  var isFormValid = function isFormValid(form) {
	    return !form || form.$pristine || form.$invalid;
	  };
	
	  Object.assign($ctrl, {
	    isFormValid: isFormValid,
	    resetFormState: resetFormState,
	    onClearFilter: onClearFilter,
	    /* lifecycle hooks */
	    $onInit: $onInit
	  });
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-filter-form-actions-ng.js.map