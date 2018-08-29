(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("vendor-bb-uib-dropdown"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-dropdown-select-ng", ["vendor-bb-angular", "vendor-bb-uib-dropdown"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-dropdown-select-ng"] = factory(require("vendor-bb-angular"), require("vendor-bb-uib-dropdown"));
	else
		root["ui-bb-dropdown-select-ng"] = factory(root["vendor-bb-angular"], root["vendor-bb-uib-dropdown"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_56__) {
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

	module.exports = __webpack_require__(55);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _vendorBbUibDropdown = __webpack_require__(56);
	
	var _vendorBbUibDropdown2 = _interopRequireDefault(_vendorBbUibDropdown);
	
	var _select = __webpack_require__(57);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _selected = __webpack_require__(58);
	
	var _selected2 = _interopRequireDefault(_selected);
	
	var _option = __webpack_require__(59);
	
	var _option2 = _interopRequireDefault(_option);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description The angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-dropdown-select-ng', [_vendorBbUibDropdown2.default]).directive('uiBbDropdownSelectNg', _select2.default).directive('uiBbDropdownSelectedNg', ['$q', '$compile', '$templateRequest', _selected2.default]).directive('uiBbDropdownOptionNg', ['$templateRequest', '$compile', _option2.default]).name; /**
	                                                                                                                                                                                                                                                                                                                                                                 * @module ui-bb-dropdown-select-ng
	                                                                                                                                                                                                                                                                                                                                                                 * @description
	                                                                                                                                                                                                                                                                                                                                                                 * UI dropdown select component
	                                                                                                                                                                                                                                                                                                                                                                 *
	                                                                                                                                                                                                                                                                                                                                                                 * @example
	                                                                                                                                                                                                                                                                                                                                                                 * // In an extension:
	                                                                                                                                                                                                                                                                                                                                                                 * // file: scripts/index.js
	                                                                                                                                                                                                                                                                                                                                                                 * import uiBbDropdownSelectKey from 'ui-bb-dropdown-select-ng';
	                                                                                                                                                                                                                                                                                                                                                                 *
	                                                                                                                                                                                                                                                                                                                                                                 * export const dependencyKeys = [
	                                                                                                                                                                                                                                                                                                                                                                 *   uiBbDropdownSelectKey,
	                                                                                                                                                                                                                                                                                                                                                                 * ];
	                                                                                                                                                                                                                                                                                                                                                                 *
	                                                                                                                                                                                                                                                                                                                                                                 * // file: templates/template.ng.html
	                                                                                                                                                                                                                                                                                                                                                                 * <ui-bb-dropdown-select-ng
	                                                                                                                                                                                                                                                                                                                                                                 *   ng-model="item"
	                                                                                                                                                                                                                                                                                                                                                                 *   selected-as="$option.name">
	                                                                                                                                                                                                                                                                                                                                                                 *   <ui-bb-dropdown-option-ng
	                                                                                                                                                                                                                                                                                                                                                                 *     option="item"
	                                                                                                                                                                                                                                                                                                                                                                 *     data-arrow-navigation="true"
	                                                                                                                                                                                                                                                                                                                                                                 *     ng-repeat="item in items"
	                                                                                                                                                                                                                                                                                                                                                                 *     class="list-group-item-text">
	                                                                                                                                                                                                                                                                                                                                                                 *       {{:: $option.name }}
	                                                                                                                                                                                                                                                                                                                                                                 *   </ui-bb-dropdown-option-ng>
	                                                                                                                                                                                                                                                                                                                                                                 * </ui-bb-dropdown-select-ng>
	                                                                                                                                                                                                                                                                                                                                                                 */

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_56__;

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbDropdownSelectDirective;
	/**
	 * @name uiBbDropdownSelectDirective
	 * @type {object}
	 *
	 * @property {boolean} isOpen Defines whether or not the dropdown is open
	 * @property {?boolean} multiple True if multiple selection is enabled (false by default)
	 * @property {boolean} ngDisabled Defines whether or not the dropdown is disabled
	 * @property {object} ngModel Dropdown model
	 * @property {?string} placeholder Placeholder text
	 * @property {function} ngChange Callback function triggered when dropdown item is selected
	 * @property {function} selectedAs Allows to customize selected value
	 * @property {object} labels Object with labels that will be attached to dropdown's scope
	 * @property {?string} menuClass Extra class(es) to place on the menu element
	 */
	function UiBbDropdownSelectController($timeout, $attrs, $scope) {
	  var instance = {
	    $onInit: function $onInit() {
	      instance.ngModelController.$render = instance.render.bind(instance);
	    },
	    render: function render() {
	      Object.assign($scope, {
	        $option: instance.ngModelController.$viewValue || instance.ngModelController.$modelValue
	      });
	    }
	  };
	
	  /**
	   * @description
	   * Selects given option
	   *
	   * @name uiBbDropdownSelectDirective#select
	   * @type {function}
	   * @param {object} option Selected option
	   * @param {boolean} soft True if select method should only set the option to  the model without
	   * calling callback and closing dropdown
	   */
	  instance.select = function (option) {
	    var soft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	    // different behaviour is needed for single and multiple selection
	    if (instance.multiple) {
	      if (!Array.isArray(instance.model)) {
	        instance.model = [];
	      }
	      var currentIndex = instance.model.indexOf(option);
	      if (currentIndex >= 0) {
	        instance.model.splice(currentIndex, 1);
	      } else {
	        instance.model.push(option);
	      }
	
	      // update $dirty/$pristine state of model
	      instance.ngModelController.$setDirty();
	    } else {
	      if (!soft) {
	        instance.isOpen = false;
	      }
	
	      // update $dirty/$pristine state of model (only when it has actually changed)
	      if (instance.model !== option) {
	        instance.ngModelController.$setDirty();
	      }
	
	      instance.model = option;
	    }
	
	    instance.ngModelController.$render();
	
	    if (!soft) {
	      $timeout(function () {
	        return instance.ngChange({ $item: instance.model });
	      });
	    }
	  };
	
	  instance.isSelected = function isSelected(option) {
	    return instance.multiple ? instance.model.indexOf(option) > -1 : instance.model === option;
	  };
	
	  instance.getSelectedConfig = function () {
	    return {
	      selectedAs: $attrs.selectedAs ? '{{ $ctrl.selectedAs(this) }}' : false,
	      templateUrl: $attrs.templateUrl,
	      clone: false
	    };
	  };
	
	  /**
	   * @description
	   * Close menu if next focused element is outside of container
	   *
	   * @name uiBbDropdownSelectDirective#onBlur
	   * @type {function}
	   * @param {object} event
	   */
	  instance.onBlur = function onBlur(event) {
	    $timeout(function () {
	      return instance.ngModelController.$setTouched();
	    });
	
	    // For some browsers, when clicking on opened dropdown, additionally to
	    // click event, focusin and focusout events are sent. As focusout changes
	    // isOpen state, dropdown closes and opens back really quick. To prevent that,
	    // focusout will be ignored in this case. Only way to recognize this situation is
	    // by inspecting event object and its relatedTarget and target properties
	    if (event.relatedTarget === null && event.target && event.target.tagName === 'BUTTON') {
	      return;
	    }
	
	    if (event.relatedTarget) {
	      var originalParent = this;
	      var relatedParent = event.relatedTarget;
	
	      while (relatedParent) {
	        if (relatedParent === originalParent) {
	          return;
	        }
	
	        relatedParent = relatedParent.parentNode;
	      }
	    }
	
	    instance.isOpen = false;
	    $scope.$digest();
	  };
	
	  /**
	   * @description
	   * Handles clicks on the items in the list
	   *
	   * @name uiBbDropdownSelectDirective#clickHandler
	   * @type {function}
	   * @param {object} event
	   */
	  instance.clickHandler = function (event) {
	    if (instance.multiple) {
	      event.stopPropagation();
	    }
	  };
	
	  return instance;
	}
	
	function uiBbDropdownSelectDirective() {
	  return {
	    require: {
	      ngModelController: 'ngModel',
	      ngDropdownController: 'uiBbDropdownSelectNg'
	    },
	    transclude: true,
	    bindToController: true,
	    controllerAs: '$ctrl',
	    controller: ['$timeout', '$attrs', '$scope', UiBbDropdownSelectController],
	    template: function template(element, attrs) {
	      return '\n      <div class="dropdown d-flex flex-column border rounded"\n        data-ng-class="{\n          \'selected\': $ctrl.multiple ? $ctrl.model.length : $ctrl.model,\n          \'border-danger\': $ctrl.hasError\n        }"\n        uib-dropdown\n        data-keyboard-nav\n        data-is-open="$ctrl.isOpen">\n\n        <button type="button"\n          class="btn btn-dropdown-toggle d-flex btn-outline-light text-dark\n            align-items-center justify-content-between ' + attrs.class + '"\n          uib-dropdown-toggle\n          aria-haspopup="true"\n          aria-expanded="false"\n          data-ng-disabled="$ctrl.disabled"\n        >\n          <span class="w-100 dropdown-selected text-left text-truncate"\n            data-ng-class="{ \'d-none\': $ctrl.multiple ? !$ctrl.model.length : !$ctrl.model }"\n            ui-bb-dropdown-selected-ng\n          >\n          </span>\n          <span class="placeholder text-left text-truncate"\n            data-ng-class="{ \'d-none\': $ctrl.multiple ? $ctrl.model.length : $ctrl.model }"\n          >' + (attrs.placeholder || '&nbsp;') + '</span>\n          <i class="fa fa-chevron-down d-flex align-items-center ml-2"\n            data-role="select-account-button">\n          </i>\n        </button>\n\n        <ul \n          class="uib-dropdown-menu container-fluid ng-transclude-node dropdown-menu pre-scrollable"\n          uib-dropdown-menu\n          data-ng-class="$ctrl.menuClass"\n          data-ng-transclude\n          data-ng-click="$ctrl.clickHandler($event)"\n          role="menu"\n          tabindex="-1"\n          aria-labelledby="single-button">\n        </ul>\n      </div>\n    ';
	    },
	    scope: {
	      isOpen: '=?',
	      disabled: '=ngDisabled',
	      model: '=ngModel',
	      ngChange: '&',
	      selectedAs: '&',
	      multiple: '<',
	      labels: '<',
	      hasError: '<',
	      menuClass: '@'
	    },
	    link: function uiBbDropdownSelectLink(scope, element, attrs, controller) {
	      element.removeClass(attrs.class);
	      element.on('focusout', controller.ngDropdownController.onBlur);
	    }
	  };
	}

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbDropdownSelectedDirective
	 * @type {object}
	 */
	function uiBbDropdownSelectedDirective($q, $compile, $templateRequest) {
	  return {
	    restrict: 'A',
	    require: '^^uiBbDropdownSelectNg',
	    link: function link(scope, element, attrs, uiBbDropdownSelectController) {
	      var templateSrc = void 0;
	      var config = uiBbDropdownSelectController.getSelectedConfig();
	
	      if (config.selectedAs) {
	        templateSrc = config.selectedAs;
	      } else if (config.templateUrl) {
	        templateSrc = $templateRequest(config.templateUrl);
	      } else {
	        throw new Error('ui-bb-dropdown-select-ng element expects either selected-as or template-src attribute.');
	      }
	
	      $q.when(templateSrc).then(function (template) {
	        element.html(template).removeAttr('ui-bb-dropdown-selected-ng');
	        $compile(element)(scope);
	      });
	    }
	  };
	}
	
	exports.default = uiBbDropdownSelectedDirective;

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbDropdownOption;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	/**
	 * @name uiBbDropdownOption
	 * @type {object}
	 */
	function uiBbDropdownOptionController($scope) {
	  var instance = {
	    isSelected: function isSelected() {
	      return this.selected || this.uiBbDropdownSelectController.isSelected(instance.option);
	    },
	    select: function select() {
	      if (!$scope.$ctrl.ngDisabled) {
	        this.uiBbDropdownSelectController.select(instance.option);
	      }
	    },
	    $onInit: function $onInit() {
	      Object.assign($scope, { $option: this.option });
	
	      // Mark pre-selected option with checkmark in dropdown list
	      if ((0, _vendorBbAngular.equals)(this.uiBbDropdownSelectController.model, this.option)) {
	        this.uiBbDropdownSelectController.select(this.option, true);
	      }
	    },
	    $onChanges: function $onChanges() {
	      Object.assign($scope, { $option: this.option });
	    }
	  };
	
	  return instance;
	}
	
	function uiBbDropdownOption($templateRequest, $compile) {
	  return {
	    require: {
	      uiBbDropdownSelectController: '^^uiBbDropdownSelectNg'
	    },
	    transclude: true,
	    replace: true,
	    bindToController: true,
	    controllerAs: '$ctrl',
	    controller: ['$scope', uiBbDropdownOptionController],
	    template: '\n      <li role="menu-item"\n        class="dropdown-item"\n        data-ng-class="{active: $ctrl.isSelected()}"\n        data-ng-click="$ctrl.select()" tabindex="-1">\n        <a class="clearfix cursor-pointer" tabindex="0" href="javascript:void(0)"></a>\n      </li>\n    ',
	    scope: {
	      option: '=',
	      arrowNavigation: '<',
	      selected: '<',
	      ngDisabled: '<'
	    },
	    link: function link(scope, element, attrs, controllers, transclude) {
	      var appendOption = function appendOption(el) {
	        return scope.$ctrl.arrowNavigation === true ? element.children().append(el) : element.empty().append(el);
	      };
	
	      if (attrs.templateUrl) {
	        $templateRequest(attrs.templateUrl).then(function (tplContent) {
	          $compile(tplContent.trim())(scope, appendOption);
	        });
	      } else {
	        transclude(scope, appendOption);
	      }
	    }
	  };
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-dropdown-select-ng.js.map