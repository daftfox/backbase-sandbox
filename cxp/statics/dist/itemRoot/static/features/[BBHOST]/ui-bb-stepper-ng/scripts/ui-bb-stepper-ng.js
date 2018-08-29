(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-stepper-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-stepper-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-stepper-ng"] = factory(root["vendor-bb-angular"]);
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

	module.exports = __webpack_require__(136);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _stepper = __webpack_require__(137);
	
	var _stepper2 = _interopRequireDefault(_stepper);
	
	var _step = __webpack_require__(139);
	
	var _step2 = _interopRequireDefault(_step);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _vendorBbAngular2.default.module('ui-bb-stepper-ng', []).component('uiBbStepperNg', _stepper2.default).component('uiBbStepperStepNg', _step2.default).name; /**
	                                                                                                                                                                               * @module ui-bb-stepper-ng
	                                                                                                                                                                               * @description
	                                                                                                                                                                               * UI component for spliting views into multiple steps that
	                                                                                                                                                                               * user needs to pass in order to complete some process.
	                                                                                                                                                                               *
	                                                                                                                                                                               * @example
	                                                                                                                                                                               * // In an extension:
	                                                                                                                                                                               * // file: scripts/index.js
	                                                                                                                                                                               * import uiBbStepperNg from 'ui-bb-stepper-ng';
	                                                                                                                                                                               *
	                                                                                                                                                                               * export const dependencyKeys = [
	                                                                                                                                                                               *   uiBbStepperNg,
	                                                                                                                                                                               * ];
	                                                                                                                                                                               *
	                                                                                                                                                                               * // file: templates/template.ng.html
	                                                                                                                                                                               * <ui-bb-stepper-ng
	                                                                                                                                                                               *   labels="{
	                                                                                                                                                                               *     previous: 'Previous',
	                                                                                                                                                                               *     next: 'Next',
	                                                                                                                                                                               *     cancel: 'Cancel',
	                                                                                                                                                                               *     finish: 'Close',
	                                                                                                                                                                               *   }"
	                                                                                                                                                                               *   on-cancel="ext.helpers.onCancel(ctrl)"
	                                                                                                                                                                               *   allow-next="ext.helpers.allowNext"
	                                                                                                                                                                               *   block-style="true"
	                                                                                                                                                                               *   after-step-change="ext.helpers.stepChange(ctrl, oldStep)"
	                                                                                                                                                                               *   on-finish="ext.helpers.onFinish(ctrl)"
	                                                                                                                                                                               * >
	                                                                                                                                                                               *   <ui-bb-stepper-step-ng title="Step 1">
	                                                                                                                                                                               *     <p>Step 1 content</p>
	                                                                                                                                                                               *     <input type="text" ng-model="$ctrl.myinput" />
	                                                                                                                                                                               *   </ui-bb-stepper-step-ng>
	                                                                                                                                                                               *   <ui-bb-stepper-step-ng
	                                                                                                                                                                               *     title="Step 2"
	                                                                                                                                                                               *     labels="{
	                                                                                                                                                                               *       next: 'Submit',
	                                                                                                                                                                               *     }"
	                                                                                                                                                                               *   >
	                                                                                                                                                                               *     <p>Step 2 content</p>
	                                                                                                                                                                               *     <p>Your input was: {{ $ctrl.myinput }}</p>
	                                                                                                                                                                               *   </ui-bb-stepper-step-ng>
	                                                                                                                                                                               *   <ui-bb-stepper-step-ng title="Step 3">
	                                                                                                                                                                               *     <p>Step 3 content</p>
	                                                                                                                                                                               *     <p>You are ready to go</p>
	                                                                                                                                                                               *   </ui-bb-stepper-step-ng>
	                                                                                                                                                                               * </ui-bb-stepper-ng>
	                                                                                                                                                                               */

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(138);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name uiBbStepperNg
	 * @type {object}
	 * @description
	 * Stepper component that can be used to split user flow into multiple steps. Component
	 * provides progress indicator and controls for navigation through steps
	 *
	 * @property {object} labels Component's labels
	 * @property {string} labels.previous Label for button that navigates one step back
	 * @property {string} labels.next Label for button that navigates one step further
	 * @property {string} labels.cancel Label for button that cancels the whole process
	 * @property {string} labels.finish Label for button (on last step) that finilizes step process
	 * @property {?boolean} allowBack Flag that can be used to prevent reverting back to previous steps
	 * @property {?boolean} allowNext Flag that can be used to prevent user to proceed to the next step
	 * @property {?boolean} allowCancel Flag that can be used to prevent user from clicking cancel
	 * @property {?boolean} blockStyle Flag to use to display step titles below the number instead
	 * of inline
	 * @property {function} onFinish Function that will be executed after all steps are passed.
	 * It receives component's controller (ctrl) as a parameter
	 * @property {?function} beforeStepChange Function that will be executed before step change.
	 * If provided, function needs to return true if step change is allowed.
	 * Objects (newStep) containing new step controller and (ctrl) component's controller
	 * will be provided as a parameters
	 * @property {?function} afterStepChange Function that will be executed once step has been changed.
	 * Objects (oldStep) containing old step controller and (ctrl) component's controller
	 * will be provided as a parameters
	 * @property {?function} onCancel Function that will be executed once user clicks on cancel button.
	 * If not provided, cancel button will not be drawn on the form. Component's controller (ctrl) is
	 * provided as a parameter
	 */
	var uiBbStepperComponent = {
	  transclude: true,
	  bindings: {
	    labels: '<',
	    allowBack: '<?',
	    allowNext: '<?',
	    allowCancel: '<?',
	    blockStyle: '<?',
	    onFinish: '&',
	    beforeStepChange: '&?',
	    afterStepChange: '&?',
	    onCancel: '&?'
	  },
	  controller: ['$scope', _controller2.default],
	  template: '\n    <div class="bb-stepper card border-0">\n      <div class="card-heading">\n        <div class="bb-stepper-indicator d-flex justify-content-center p-3"\n          data-ng-class="$ctrl.blockStyle\n            ? \'bb-stepper-indicator-block\'\n            : \'justify-content-md-start\'\n          ">\n          <div class="bb-stepper-step d-flex text-center"\n            data-ng-repeat-start="step in $ctrl.steps track by $index">\n            <div class="bb-stepper-step-inner">\n              <a href="javascript:void(0)"\n                class="bb-stepper-step-item d-inline-block text-white mr-1 rounded-circle"\n                data-ng-class="{\n                  \'px-1\': $index + 1 <= $ctrl.getCurrentIndex(),\n                  \'px-2\': $index + 1 > $ctrl.getCurrentIndex(),\n                  \'bg-primary\': $index === $ctrl.getCurrentIndex() ||\n                    ($ctrl.allowBack && $index < $ctrl.getCurrentIndex()),\n                  \'bg-secondary\': !$ctrl.allowBack || $index > $ctrl.getCurrentIndex(),\n                }"\n                data-ng-click="$ctrl.goToStep($index)"\n                role="button"\n              >\n                <span class="bb-stepper-step-number"\n                  data-ng-bind="$index + 1"\n                  data-ng-class="{ \'d-none\': $index + 1 <= $ctrl.getCurrentIndex() }"\n                >\n                </span>\n                <span class="bb-stepper-step-icon fa fa-check"\n                  data-ng-class="{ \'d-none\': $index + 1 > $ctrl.getCurrentIndex() }"\n                ></span>\n              </a><span\n                class="bb-stepper-step-title d-none"\n                data-ng-class="$ctrl.blockStyle ? \'d-md-block pt-1\' : \'d-md-inline-block\'"\n                data-ng-bind="step.title">\n              </span>\n            </div>\n            <hr\n              data-ng-if="$ctrl.blockStyle && $index !== $ctrl.steps.length - 1"\n              class="bb-stepper-step-separator px-4 m-3">\n          </div>\n          <hr\n            data-ng-if="!$ctrl.blockStyle && $index !== $ctrl.steps.length - 1"\n            data-ng-repeat-end class="bb-stepper-step-separator px-4 m-3">\n        </div>\n        <div class="h5 text-center d-block d-md-none"\n          data-ng-bind="$ctrl.getCurrentStep().title"\n        >\n        </div>\n      </div>\n      <div class="bb-stepper-content card-body p-0" data-ng-transclude></div>\n      <div class="bb-stepper-controls card-footer clearfix">\n        <div class="float-left">\n          <button\n            class="btn btn-secondary"\n            data-ng-disabled="!$ctrl.allowBack"\n            data-ng-if="!$ctrl.isFirstStep()"\n            data-ng-click="$ctrl.previous()"\n            data-ng-bind="$ctrl.labels.previous"\n          >\n          </button>\n        </div>\n        <div class="float-right">  \n          <button\n            class="btn btn-secondary"\n            data-ng-disabled="!$ctrl.allowCancel"\n            data-ng-click="$ctrl.cancel()"\n            data-ng-if="$ctrl.onCancel"\n            data-ng-bind="$ctrl.labels.cancel"\n          >\n          </button>\n          <button\n            class="btn btn-primary"\n            data-ng-disabled="!$ctrl.allowNext"\n            data-ng-if="$ctrl.isLastStep()"\n            data-ng-click="$ctrl.finish()"\n            data-ng-bind="$ctrl.labels.finish"\n          >\n          </button>\n          <button\n            class="btn btn-primary"\n            data-ng-disabled="!$ctrl.allowNext"\n            data-ng-if="!$ctrl.isLastStep()"\n            data-ng-click="$ctrl.next()"\n            data-ng-bind="$ctrl.labels.next"\n          >\n          </button>\n        </div>\n      </div>\n    </div>\n  '
	};
	
	exports.default = uiBbStepperComponent;

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbStepperController
	 * @type {function}
	 *
	 * @description
	 * Stepper controller
	 */
	function uiBbStepperController(scope) {
	  var $ctrl = this;
	  var currentIndex = 0;
	  var originalLabels = {};
	
	  /**
	   * @name uiBbStepperController#getCurrentIndex
	   * @type {function}
	   * @description Retrieves current step index
	   * @returns {boolean}
	   */
	  var getCurrentIndex = function getCurrentIndex() {
	    return currentIndex;
	  };
	
	  /**
	   * @name uiBbStepperController#getCurrentStep
	   * @type {function}
	   * @description Retrieves current step's controller
	   * @returns {object}
	   */
	  var getCurrentStep = function getCurrentStep() {
	    return $ctrl.steps[currentIndex];
	  };
	
	  /**
	   * @name uiBbStepperController#isFirstStep
	   * @type {function}
	   * @description Helper method to check if current step is first step
	   * @returns {boolean}
	   */
	  var isFirstStep = function isFirstStep() {
	    return currentIndex === 0;
	  };
	
	  /**
	   * @name uiBbStepperController#isLastStep
	   * @type {function}
	   * @description Helper method to check if current step is last step
	   * @returns {boolean}
	   */
	  var isLastStep = function isLastStep() {
	    return $ctrl.steps.length - 1 === currentIndex;
	  };
	
	  /**
	   * @name uiBbStepperController#doStepChange
	   * @type {function}
	   * @inner
	   * @description Checks if step change is allowed. If yes, changes the currentIndex to the
	   * provided value and executes the afterStepChange method
	   * @param {number} newStepIndex Step index to go to
	   */
	  var doStepChange = function doStepChange(newStepIndex) {
	    var newStep = $ctrl.steps[newStepIndex];
	    if (typeof $ctrl.beforeStepChange === 'function' && !$ctrl.beforeStepChange({ newStep: newStep, ctrl: $ctrl })) {
	      return;
	    }
	
	    var oldStep = getCurrentStep();
	    currentIndex = newStepIndex;
	    if (typeof $ctrl.afterStepChange === 'function') {
	      $ctrl.afterStepChange({
	        oldStep: oldStep,
	        ctrl: $ctrl
	      });
	    }
	  };
	
	  /**
	   * @name uiBbStepperController#toggleStep
	   * @type {function}
	   * @inner
	   * @description Marks active step and updates labels once step index is changed
	   */
	  var toggleStep = function toggleStep() {
	    $ctrl.steps.forEach(function (step, index) {
	      Object.assign(step, { active: index === currentIndex });
	      if (index === currentIndex) {
	        Object.assign($ctrl.labels, originalLabels, step.labels || {});
	      }
	    });
	  };
	
	  /**
	   * @name uiBbStepperController#addStep
	   * @type {function}
	   * @description Adds additional step to step list
	   * @param {object} step Stepper step controller
	   */
	  var addStep = function addStep(step) {
	    Object.assign(step, {
	      active: $ctrl.steps.length === 0,
	      index: $ctrl.steps.length
	    });
	    $ctrl.steps.push(step);
	  };
	
	  /**
	   * @name uiBbStepperController#next
	   * @type {function}
	   * @description Makes next step active. Call is ignored if allowNext is false
	   * or if current step is last step
	   */
	  var next = function next() {
	    if ($ctrl.isLastStep() || !$ctrl.allowNext) {
	      return;
	    }
	    doStepChange(currentIndex + 1);
	  };
	
	  /**
	   * @name uiBbStepperController#previous
	   * @type {function}
	   * @description Makes previous step active. Call is ignored if allowBack is false
	   * or if current step is first step
	   */
	  var previous = function previous() {
	    if ($ctrl.isFirstStep() || !$ctrl.allowBack) {
	      return;
	    }
	    doStepChange(currentIndex - 1);
	  };
	
	  /**
	   * @name uiBbStepperController#goToStep
	   * @type {function}
	   * @description Makes step with index provided active. Call is ignored if index is less
	   * than zero, if it is larger than current step (skipping forward is not allowed) and if
	   * allowBack flag is set to false
	   * @param {number} stepIndex Step index to go to
	   */
	  var goToStep = function goToStep(stepIndex) {
	    if (stepIndex < 0 || stepIndex >= currentIndex || stepIndex < currentIndex && !$ctrl.allowBack) {
	      return;
	    }
	    doStepChange(stepIndex);
	  };
	
	  /**
	   * @name uiBbStepperController#cancel
	   * @type {function}
	   * @description Calls provided onCancel method
	   */
	  var cancel = function cancel() {
	    if (typeof $ctrl.onCancel !== 'function' || !$ctrl.allowCancel) {
	      return;
	    }
	    $ctrl.onCancel({ ctrl: $ctrl });
	  };
	
	  /**
	   * @name uiBbStepperController#finish
	   * @type {function}
	   * @description Calls provided onFinish method
	   */
	  var finish = function finish() {
	    if (!$ctrl.allowNext) {
	      return;
	    }
	    $ctrl.onFinish({ ctrl: $ctrl });
	  };
	
	  /**
	   * @name uiBbStepperController#$onInit
	   * @type {function}
	   *
	   * @description
	   * AngularJS lifecycle Init hook
	   */
	  var $onInit = function $onInit() {
	    // watch for index change
	    scope.$watch(function () {
	      return currentIndex;
	    }, toggleStep);
	    Object.assign(originalLabels, $ctrl.labels);
	  };
	
	  Object.assign($ctrl, {
	    /**
	     * @name uiBbStepperController#allowBack
	     * @type {boolean}
	     * @description Is going back to previous steps allowed
	     */
	    allowBack: $ctrl.allowBack !== false,
	
	    /**
	     * @name uiBbStepperController#allowNext
	     * @type {boolean}
	     * @description Is going forward allowed. This flag can be used to make sure
	     * form in current step is filled correctly
	     */
	    allowNext: $ctrl.allowNext !== false,
	
	    /**
	     * @name uiBbStepperController#allowCancel
	     * @type {boolean}
	     * @description Is cancelling allowed. This flag can be used to stop the user cancelling in the
	     * current step/state for some reason. e.g. when loading data
	     */
	    allowCancel: $ctrl.allowCancel !== false,
	
	    /**
	     * @name uiBbStepperController#steps
	     * @type {object[]}
	     * @description Contains array of all stepper step controllers
	     */
	    steps: [],
	    getCurrentIndex: getCurrentIndex,
	    getCurrentStep: getCurrentStep,
	    isFirstStep: isFirstStep,
	    isLastStep: isLastStep,
	    addStep: addStep,
	    next: next,
	    previous: previous,
	    goToStep: goToStep,
	    cancel: cancel,
	    finish: finish,
	    $onInit: $onInit
	  });
	}
	
	exports.default = uiBbStepperController;

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbStepperStepNg
	 * @type {object}
	 * @description
	 * Step item inside stepper component
	 *
	 * @property {string} title Step's title
	 * @property {object} labels Override of parent component labels
	 * @property {string} labels.previous Label for button that navigates one step back
	 * @property {string} labels.next Label for button that navigates one step further
	 * @property {string} labels.cancel Label for button that cancels the whole process
	 * @property {string} labels.finish Label for button (on last step) that finilizes step process
	 */
	var uiBbStepperStepComponent = {
	  transclude: true,
	  bindings: {
	    title: '@',
	    labels: '<'
	  },
	  require: {
	    stepperCtrl: '^uiBbStepperNg'
	  },
	  controller: function stepperStepController() {
	    var $ctrl = this;
	    var $onInit = function $onInit() {
	      $ctrl.stepperCtrl.addStep($ctrl);
	    };
	    Object.assign($ctrl, {
	      $onInit: $onInit
	    });
	  },
	  template: '\n    <div class="bb-stepper-content-step" data-ng-if="$ctrl.active" data-ng-transclude></div>\n  '
	};
	
	exports.default = uiBbStepperStepComponent;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-stepper-ng.js.map