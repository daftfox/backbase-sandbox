(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-account-statements-category-filter-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-account-statements-category-filter-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-account-statements-category-filter-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_25__) {
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

	module.exports = __webpack_require__(32);

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(25);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _component = __webpack_require__(33);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _vendorBbAngular2.default.module('ui-bb-account-statements-category-filter-ng', []).component('uiBbAccountStatementsCategoryFilterNg', _component2.default).name;

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description
	 * Template used when the widget preference sets to multiple category selection
	 *
	 * @name checkboxTemplate
	 * @type {string}
	 */
	var checkboxTemplate = '\n  <div class="row">\n    <div class="pt-0 pb-0 col-md-6 col-lg-6 col-sm-6" ng-repeat="item in $ctrl.options">\n      <div class="checkbox m-0">\n        <label class="d-flex align-items-center">\n          <input type="checkbox" \n            name="categories" \n            value="{{item}}" \n            ng-model="$ctrl.ngModel[item]" />\n          <span class="ml-2">{{item}}</span>\n        </label>\n      </div>\n    </div>\n  </div>\n';
	
	/**
	 * @description
	 * Template used when the widget pref. is not setted to use multiple selections
	 * and the amount of options are less or equal than 3
	 *
	 * @name radioTemplate
	 * @type {string}
	 */
	var radioTemplate = '\n  <div>\n    <div class="radio" ng-repeat="item in $ctrl.options">\n      <label>\n        <input type="radio" name="categories" ng-value="item" ng-model="$ctrl.ngModel" />\n        {{item}}\n      </label>\n    </div>\n  </div>\n';
	
	/**
	 * @description
	 * Template used when the widget pref. is not setted to use multiple selections
	 * and the amount of options are more than 3
	 *
	 * @name dropdownSelectTemplate
	 * @type {string}
	 */
	var dropdownSelectTemplate = '\n  <ui-bb-dropdown-select\n    data-ng-model="$ctrl.ngModel"\n    data-ng-change="$ctrl.onChange({ \'$item\': $item })"\n    data-selected-as="$option">\n    <ui-bb-dropdown-option\n      data-option="item"\n      data-arrow-navigation="true"\n      data-ng-repeat="item in $ctrl.options"\n      class="list-group-item-text">\n      {{$option}}\n    </ui-bb-dropdown-option>\n  </ui-bb-dropdown-select>\n';
	
	/**
	 * @name getTemplate
	 * @type {function}
	 *
	 * @description
	 * Function that defines what template is going to be used
	 *
	 * @param {string} multi widget preference that defines if it will be multiple or not
	 * @param {Number} length length of the options
	 * @returns {string} template to be used
	 */
	var getTemplate = function getTemplate(multi, length) {
	  if (multi) {
	    return checkboxTemplate;
	  }
	
	  if (length <= 3) {
	    return radioTemplate;
	  }
	
	  return dropdownSelectTemplate;
	};
	
	/**
	 * @name uiBbAccountStatementCategoryFilterNg
	 * @type {object}
	 *
	 * @property {object} ng-model Category model
	 * @property {function} ng-change Callback function triggered when account is selected
	 * @property {array} options List of options to show
	 */
	var component = {
	  bindings: {
	    ngModel: '=',
	    onChange: '&',
	    options: '<',
	    multi: '<'
	  },
	  template: '\n    <div ng-include src="\'ui-bb-account-statements-category-filter-ng/template.html\'"></div>\n  ',
	  controller: ['$templateCache', function controller($templateCache) {
	    var _this = this;
	
	    this.$onInit = function () {
	      $templateCache.put('ui-bb-account-statements-category-filter-ng/template.html', getTemplate(_this.multi, _this.options.length));
	    };
	  }]
	};
	
	exports.default = component;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-account-statements-category-filter-ng.js.map