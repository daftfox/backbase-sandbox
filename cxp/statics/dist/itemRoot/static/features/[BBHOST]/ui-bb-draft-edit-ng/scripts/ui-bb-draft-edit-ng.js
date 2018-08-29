(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("ui-bb-rich-text-editor-ng"), require("ui-bb-dropdown-select-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-draft-edit-ng", ["vendor-bb-angular", "ui-bb-rich-text-editor-ng", "ui-bb-dropdown-select-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-draft-edit-ng"] = factory(require("vendor-bb-angular"), require("ui-bb-rich-text-editor-ng"), require("ui-bb-dropdown-select-ng"));
	else
		root["ui-bb-draft-edit-ng"] = factory(root["vendor-bb-angular"], root["ui-bb-rich-text-editor-ng"], root["ui-bb-dropdown-select-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_42__) {
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

	module.exports = __webpack_require__(41);

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(28);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbRichTextEditorNg = __webpack_require__(38);
	
	var _uiBbRichTextEditorNg2 = _interopRequireDefault(_uiBbRichTextEditorNg);
	
	var _uiBbDropdownSelectNg = __webpack_require__(42);
	
	var _uiBbDropdownSelectNg2 = _interopRequireDefault(_uiBbDropdownSelectNg);
	
	var _component = __webpack_require__(43);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ui-bb-draft-edit-ng
	 */
	var dependencyKeys = [_uiBbRichTextEditorNg2.default, _uiBbDropdownSelectNg2.default];
	
	exports.default = _vendorBbAngular2.default.module('ui-bb-draft-edit-ng', dependencyKeys).component('uiBbDraftEditNg', _component2.default).name;

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_42__;

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(44);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name uiBbDraftEditNg
	 * @type {Object}
	 * @property {Array<Topic>} list of topics
	 * @property {UiBbDraftEditNgConfig} config config object
	 * @property {Function} onClose function to call when user closes component
	 * @property {Function} onSend function to call to send the draft
	 * @property {UiBbDraftEditNgMessages} messages object containing localized labels
	 *
	 * @example
	 *  <ui-bb-draft-edit-ng
	 *    data-topics="$ctrl.topics"
	 *    data-config="$draftCtrl.config"
	 *    data-on-close="$draftCtrl.dismiss()"
	 *    data-on-send="$draftCtrl.send(draft)"
	 *    data-messages="{
	 *      labelClose: ('ui-bb-draft-ng.label.close' | i18n),
	 *      labelSend: ('ui-bb-draft-ng.label.send' | i18n),
	 *      labelRemove: ('ui-bb-draft-ng.label.remove' | i18n),
	 *      labelToggleImportance: ('ui-bb-draft-ng.label.toggleImportance' | i18n),
	 *      formHeader: ('ui-bb-draft-ng.form.header' | i18n),
	 *      formSubject: ('ui-bb-draft-ng.form.subject' | i18n),
	 *      formTopic: ('ui-bb-draft-ng.form.topic' | i18n),
	 *      formMessage: ('ui-bb-draft-ng.form.message' | i18n),
	 *      formSend: ('ui-bb-draft-ng.form.send' | i18n),
	 *      errorSend: ('ui-bb-draft-ng.error.send' | i18n),
	 *    }"></ui-bb-draft-edit-ng>
	 */
	var component = {
	  bindings: {
	    topics: '<',
	    config: '<',
	    onClose: '&',
	    onSend: '&',
	    messages: '<'
	  },
	  controller: _controller2.default,
	  template: ['$attrs', function (attrs) {
	    return '\n    <div class="card">\n      <div class="card-body">\n        <button type="button" class="close"\n          aria-label="{{ $ctrl.messages.labelClose }}" data-ng-click="$ctrl.close(newMessageForm)">\n          <span aria-hidden="true">&times;</span>\n        </button>\n        <h5 class="mb-3">{{ $ctrl.messages.formHeader }}</h5>\n        <form name="newMessageForm">\n          <div class="form-row mb-3">\n            <div class="col-12 col-md-8 mb-3">\n              <label>{{ $ctrl.messages.formTopic }}</label>\n              <ui-bb-dropdown-select-ng\n                name="topic"\n                data-placeholder="' + attrs.selectTopicPlaceholder + '"\n                required\n                class="form-control"\n                data-ng-model="$ctrl.draft.category"\n                data-selected-as="$option.name"\n                data-role="i-bb-draft-edit-ng">\n                <ui-bb-dropdown-option-ng\n                  data-option="topic"\n                  data-ng-repeat="topic in $ctrl.topics track by $index"\n                  class="list-group-item-text"\n                >\n                  <a href="#">{{:: $option.name }}</a>\n                </ui-bb-dropdown-option-ng>\n              </ui-bb-dropdown-select-ng>\n            </div>\n            <div class="col-12" data-ng-if="$ctrl.config.subjectMaxLength > 0">\n              <label>{{ $ctrl.messages.formSubject }}</label>\n              <input\n                type="text"\n                placeholder="{{ $ctrl.messages.formSubjectPlaceholder }}"\n                name="subject"\n                class="form-control"\n                data-ng-model="$ctrl.draft.subject"\n                required\n                maxlength="{{$ctrl.config.subjectMaxLength}}"\n              />\n            </div>\n          </div>\n          <div class="form-group">\n            <label>{{ $ctrl.messages.formMessage }}</label>\n            <ui-bb-rich-text-editor-ng\n              name="message"\n              placeholder="' + attrs.messagePlaceholder + '"\n              class="form-control d-flex flex-row flex-wrap"\n              data-ng-model="$ctrl.draft.body"\n              tabindex="0"\n              required\n            >\n            </ui-bb-rich-text-editor-ng>\n          </div>\n          <div class="bg-danger" data-ng-show="$ctrl.sendMessageError">\n            <p>{{ $ctrl.messages.errorSend }}</p>\n          </div>\n          <div class="form-row justify-content-end flex-column-reverse flex-md-row">\n            <div class="col-12 col-md-3 col-lg-3">\n              <button\n                type="button"\n                class="btn btn-md btn-secondary w-100" \n                data-ng-click="$ctrl.close(newMessageForm)"\n                aria-label="{{ $ctrl.messages.labelClose }}"\n              >\n                {{ $ctrl.messages.formCancel }}\n              </button>\n            </div>\n            <div class="col-12 col-md-3 col-lg-3 mb-2 mb-md-0">\n              <button type="submit" class="btn btn-md btn-primary w-100"\n                data-ng-click="$ctrl.send()"\n                data-ng-disabled="!newMessageForm.$valid"\n                aria-label="{{ $ctrl.messages.labelSend }}">\n                {{ $ctrl.messages.formSend }}\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  ';
	  }]
	};
	
	exports.default = component;
	
	/**
	 * @typedef {Object} Topic
	 * @property {string} id
	 * @property {string} code
	 * @property {string} name
	 */
	
	/**
	 * @typedef {Object} UiBbDraftEditNgConfig
	 * @property {number} subjectMaxLength Max allowed length for new draft subject.
	 */
	
	/**
	 * @typedef {Object} UiBbDraftEditNgMessages
	 * @property {string} formHeader text for form heading
	 * @property {string} formTopic label for topic/category/recipient field
	 * @property {string} formSubject label for subject field
	 * @property {string} formMessage label for message body text area
	 * @property {string} formSend label for send button
	 * @property {string} errorSend error to be shown if draft sending fails
	 */

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = controller;
	function controller() {
	  var $ctrl = this;
	
	  /**
	   * @description
	   * Check if any field's form has not empty value of controls
	   * @name controller#checkForm
	   * @param {ctrl} ctrl Controller object of message form
	   * @type {function}
	   * @inner
	   * @return {Boolean} true/false status of form
	   */
	  var checkForm = function checkForm(ctrl) {
	    var result = true;
	
	    if (ctrl.$error.required) {
	      var length = ctrl.$error.required.length;
	      var maxLength = ctrl.$$controls.length;
	
	      result = length > 0 && length !== maxLength;
	    }
	    return result;
	  };
	
	  /**
	   * @description
	   * Call the close callback method from bindings
	   * and check the status of message form
	   * @name controller#close
	   * @param {formCtrl} formCtrl Controller object of message form
	   * @type {function}
	   */
	  var close = function close(formCtrl) {
	    var isEmpty = checkForm(formCtrl);
	
	    if (!isEmpty) {
	      $ctrl.draft = {};
	    }
	
	    $ctrl.onClose({ $isEmpty: isEmpty });
	  };
	
	  /**
	   * @description
	   * Call the callback send out method of message from bindings
	   * @name controller#send
	   * @type {function}
	   */
	  var send = function send() {
	    var draft = Object.assign({}, $ctrl.draft);
	    draft.category = $ctrl.draft.category.code;
	
	    $ctrl.onSend({ draft: draft }).then(function () {
	      $ctrl.draft = {};
	      return;
	    });
	  };
	
	  Object.assign($ctrl, {
	    draft: {},
	    close: close,
	    send: send
	  });
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-draft-edit-ng.js.map