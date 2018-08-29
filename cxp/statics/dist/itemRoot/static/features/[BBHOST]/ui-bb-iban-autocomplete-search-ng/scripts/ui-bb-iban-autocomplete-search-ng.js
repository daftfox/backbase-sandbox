(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-autocomplete-search-ng"), require("vendor-bb-angular"), require("lib-bb-bank-codes-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-iban-autocomplete-search-ng", ["ui-bb-autocomplete-search-ng", "vendor-bb-angular", "lib-bb-bank-codes-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-iban-autocomplete-search-ng"] = factory(require("ui-bb-autocomplete-search-ng"), require("vendor-bb-angular"), require("lib-bb-bank-codes-ng"));
	else
		root["ui-bb-iban-autocomplete-search-ng"] = factory(root["ui-bb-autocomplete-search-ng"], root["vendor-bb-angular"], root["lib-bb-bank-codes-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_166__) {
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

	module.exports = __webpack_require__(165);

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbAutocompleteSearchNg = __webpack_require__(14);
	
	var _uiBbAutocompleteSearchNg2 = _interopRequireDefault(_uiBbAutocompleteSearchNg);
	
	var _libBbBankCodesNg = __webpack_require__(166);
	
	var _libBbBankCodesNg2 = _interopRequireDefault(_libBbBankCodesNg);
	
	var _component = __webpack_require__(167);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _controller = __webpack_require__(169);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _constants = __webpack_require__(168);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * The angular module name
	 * @name default
	 * @type {string}
	 */
	/**
	 * @module ui-bb-iban-autocomplete-search-ng
	 *
	 * @description
	 * IBAN autocomplete search component
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbIbanAutocompleteSearchNgKey from 'ui-bb-iban-autocomplete-search-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbIbanAutocompleteSearchNgKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-iban-autocomplete-search-ng
	 *   searchBoxConfig="{
	 *     labels: {
	 *       title: 'Search',
	 *       placeholder: 'Enter search text...',
	 *       clear: 'Clear text',
	 *       submit: 'Submit search',
	 *     },
	 *     hideButton: true,
	 *     iconClasses: 'fa fa-chevron-down',
	 *   }"
	 *   load-result="(options) => {}"
	 *   on-select="(item, label) => {}"
	 *   label-key="'name'">
	 * </ui-bb-iban-autocomplete-search-ng>
	 */
	
	exports.default = _vendorBbAngular2.default.module(_constants.MODULE_KEY, [_uiBbAutocompleteSearchNg2.default, _libBbBankCodesNg2.default]).component(_constants.COMPONENT_KEY, _component2.default).controller(_constants.CONTROLLER_KEY, ['$element', '$templateCache', '$timeout', _libBbBankCodesNg.bbBankCodesKey, _controller2.default]).name;

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_166__;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(168);
	
	var component = {
	  bindings: {
	    ngModel: '=',
	    disabled: '=',
	    searchBoxConfig: '<',
	    searchMinLength: '<',
	    loadResult: '&',
	    labelKey: '@',
	    onSelect: '&',
	    onClear: '&',
	    messages: '<',
	    popupTemplateUrl: '@?',
	    matchTemplateUrl: '@?'
	  },
	  controller: _constants.CONTROLLER_KEY,
	  template: '\n    <ui-bb-autocomplete-search-ng\n      data-ng-model="$ctrl.ngModel"\n      data-disabled="$ctrl.disabled"\n      data-label-key="IBAN"\n      data-search-box-config="$ctrl.searchBoxConfig"\n      data-search-min-length="$ctrl.searchMinLength"\n      data-load-result="$ctrl.loadResultWithAssistance({ options })"\n      data-label-key="$ctrl.labelKey"\n      data-on-select="$ctrl.onSelect({ $model, $label })"\n      data-on-clear="$ctrl.onClear()"\n      data-messages="$ctrl.messages"\n      data-popup-template-url="' + _constants.POPUP_TEMPLATE_URL + '"\n      data-match-template-url="$ctrl.matchTemplateUrl">\n    </ui-bb-autocomplete-search-ng>\n\n    <script type="text/ng-template" id="' + _constants.POPUP_TEMPLATE_URL + '">\n      <div\n        class="dropdown-menu p-0 w-100"\n        data-ng-show="isDisplayed()">\n        <ui-bb-list-ng\n          class="list-group m-0 pre-scrollable"\n          data-on-scroll-to-end="onLoadMore()">\n\n          <li class="dropdown-header py-1"\n            data-ng-if="getResultSuggestions().length">\n            <span\n              class="badge badge-primary mr-2 my-1 px-2"\n              data-ng-repeat="suggestion in getResultSuggestions() track by $index"\n              data-ng-bind="suggestion.code"\n              data-ng-click="selectSuggestion(suggestion.code)">\n            </span>\n          </li>\n\n          <li class="list-group-item"\n            data-ng-class="{\n              \'disabled badge text-dark text-left rounded-0 bg-light py-2\': match.model.group,\n              \'dropdown-item\': !match.model.group && !match.model.more,\n              \'disabled\': match.model.more,\n            }"\n            data-ng-repeat="match in matches track by $index"\n            data-ng-class="{ active: isActive($index) }"\n            data-ng-mouseenter="selectActive($index)"\n            data-ng-click="selectMatch($index)">\n            <div data-uib-typeahead-match\n              data-index="$index"\n              data-match="match"\n              data-query="query"\n              data-template-url="templateUrl">\n            </div>\n          </li>\n\n          <li data-ng-show="isLoading()" class="list-group-item dropdown-item">\n            <span class="ui-bb-autocomplete-search-spinner center-block"></span>\n          </li>\n        </ui-bb-list-ng>\n      </div>\n    </script>\n  '
	};
	
	exports.default = component;

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var MODULE_KEY = exports.MODULE_KEY = 'ui-bb-iban-autocomplete-search-ng';
	
	var CONTROLLER_KEY = exports.CONTROLLER_KEY = MODULE_KEY + ':controller';
	
	var COMPONENT_KEY = exports.COMPONENT_KEY = 'uiBbIbanAutocompleteSearchNg';
	
	var POPUP_TEMPLATE_URL = exports.POPUP_TEMPLATE_URL = MODULE_KEY + '/popup-template.html';
	
	var IBAN_LENGTH_BOUNDARIES = exports.IBAN_LENGTH_BOUNDARIES = { min: 3, max: 8 };

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbIbanAutocompleteSearchController;
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _constants = __webpack_require__(168);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function uiBbIbanAutocompleteSearchController(element, templateCache, timeout, lookupBankCodes) {
	  var ctrl = this;
	  var listWrapper = _vendorBbAngular2.default.element(element[0].querySelector('[data-role="list-wrapper"]'));
	  var searchInput = _vendorBbAngular2.default.element(element[0].querySelector('[data-role="search-input"]'));
	  /**
	   * @name uiBbIbanAutocompleteSearchController#state
	   *
	   * @description
	   * Component state object
	   *
	   * @type {Object}
	   */
	  var state = {
	    resultScope: null
	  };
	
	  /**
	   * @name uiBbIbanAutocompleteSearchController#clearSuggestions
	   *
	   * @description
	   * Clear list of Bank Code suggestions
	   *
	   * @inner
	   */
	  var clearSuggestions = function clearSuggestions() {
	    state.resultScope.suggestions = [];
	  };
	
	  /**
	   * @name uiBbIbanAutocompleteSearchController#filterSuggestions
	   *
	   * @description
	   * Filter Bank Code suggestions by given IBAN input
	   *
	   * @inner
	   * @param {String} ibanSearch Given IBAN value
	   */
	  var filterSuggestions = function filterSuggestions(ibanSearch) {
	    state.resultScope.suggestions = lookupBankCodes(ibanSearch);
	  };
	
	  /**
	   * @name uiBbIbanAutocompleteSearchController#isIbanInBoundaries
	   * @type {Function}
	   *
	   * @description
	   * Check is IBAN search string in the required boundaries for Bank Code assistance
	   *
	   * @inner
	   * @param {String} ibanString Given IBAN string
	   * @returns {boolean}
	   */
	  var isIbanInBoundaries = function isIbanInBoundaries(ibanString) {
	    return ibanString && ibanString.replace(/\s/g, '').length > _constants.IBAN_LENGTH_BOUNDARIES.min && ibanString.replace(/\s/g, '').length < _constants.IBAN_LENGTH_BOUNDARIES.max;
	  };
	
	  /**
	   * @name uiBbIbanAutocompleteSearchController#loadResultWithAssistance
	   * @type {Function}
	   *
	   * @description
	   * Request IBAN search results and enrich it with Bank Code suggestions
	   *
	   * @param {Object} options  Request configuration object
	   * @returns {Promise}       A Promise with retrieved data
	   */
	  var loadResultWithAssistance = function loadResultWithAssistance(_ref) {
	    var options = _ref.options;
	    return ctrl.loadResult({ options: options }).then(function (res) {
	      var normalizedSearch = options.searchQuery.toLowerCase();
	      if (isIbanInBoundaries(normalizedSearch)) {
	        filterSuggestions(normalizedSearch);
	      } else {
	        clearSuggestions();
	      }
	
	      return res;
	    });
	  };
	
	  /**
	   * @name uiBbIbanAutocompleteSearchController#getResultSuggestions
	   *
	   * @description
	   * Get additional input suggestions
	   *
	   * @inner
	   * @type {Function}
	   * @returns {Array.<String>} Additional suggestions list
	   */
	  var getResultSuggestions = function getResultSuggestions() {
	    return state.resultScope && state.resultScope.suggestions || [];
	  };
	
	  /**
	   * @name uiBbIbanAutocompleteSearchController#seletSuggestion
	   * @type {Function}
	   *
	   * @description
	   * Inject selected Bank Code suggestion to input field
	   *
	   * @inner
	   * @param {String} code  Selected Bank Code
	   */
	  var selectSuggestion = function selectSuggestion(code) {
	    var point = _constants.IBAN_LENGTH_BOUNDARIES.min + 1;
	    var inputValue = searchInput && searchInput[0] ? searchInput[0].value : ctrl.ngModel;
	    var selection = [inputValue.substring(0, point), code, inputValue.substring(point + code.length)].join(' ');
	
	    ctrl.ngModel = selection;
	
	    timeout(function () {
	      searchInput[0].value = ((ctrl.ngModel || selection) + ' ').trim();
	      searchInput[0].focus();
	      clearSuggestions();
	    });
	  };
	
	  /**
	   * @name uiBbIbanAutocompleteSearchController#expandResultScope
	   * @type {Function}
	   *
	   * @description
	   * Adds missing functionality to uib-typeahead like load more result when scrolling and loading
	   * indicalor.
	   *
	   * @inner
	   */
	  var expandResultScope = function expandResultScope() {
	    state.resultScope = state.resultScope || listWrapper.children().isolateScope();
	
	    Object.assign(state.resultScope, {
	      getResultSuggestions: getResultSuggestions,
	      selectSuggestion: selectSuggestion
	    });
	  };
	
	  /**
	   * @name uiBbIbanAutocompleteSearchController#breakBySpaces
	   * @type {Function}
	   *
	   * @description
	   * Adds spaces after each 4 characters for better readability. Ignores SPACE key.
	   * Only accept numbers and letters
	   *
	   * @inner
	   */
	  var breakBySpaces = function breakBySpaces() {
	    searchInput.on('keyup', function (e) {
	      var input = e.target;
	      var prevValue = input.value;
	      var nextValue = prevValue.replace(/[^A-Za-z0-9]/g, '').replace(/(.{4})/g, '$1 ').trim();
	
	      if (prevValue === nextValue) {
	        return;
	      }
	
	      // cursor position before update the input value
	      var selectionStart = input.selectionStart,
	          selectionEnd = input.selectionEnd;
	
	      // set new input value
	
	      input.value = nextValue;
	
	      // positioning the caret/cursor after new value
	      if (!prevValue.includes(' ')) {
	        var spacesCount = nextValue.match(/(.{4})/g).length;
	        input.setSelectionRange(selectionStart + spacesCount, selectionEnd + spacesCount);
	      } else {
	        if (selectionStart % 5 >= 0 && selectionStart !== nextValue.length - 1) {
	          input.setSelectionRange(selectionStart, selectionEnd);
	        } else {
	          // if cursor positioned before space gap so jump on next keyup
	          input.setSelectionRange(selectionStart + 1, selectionEnd + 1);
	        }
	      }
	    });
	
	    searchInput.on('keydown', function (e) {
	      if (e.which === 32 || !e.key.match(/[A-Za-z0-9]/)) {
	        // whitespace or not allowed characters
	        e.preventDefault();
	      }
	    });
	  };
	
	  /**
	   * @name uiBbIbanAutocompleteSearchController#$onInit
	   *
	   * @description
	   * Angular $onInit lifecycle hook
	   *
	   * @type {Function}
	   */
	  var $onInit = function $onInit() {
	    if (ctrl.popupTemplateUrl) {
	      var popupTemplate = templateCache.get(ctrl.popupTemplateUrl);
	      templateCache.put(_constants.POPUP_TEMPLATE_URL, popupTemplate);
	    }
	
	    breakBySpaces();
	  };
	
	  /**
	   * @name uiBbIbanAutocompleteSearchController#$postLink
	   *
	   * @description
	   * Angular $postLink lifecycle hook
	   *
	   * @type {Function}
	   */
	  var $postLink = function $postLink() {
	    timeout(function () {
	      expandResultScope();
	    });
	  };
	
	  Object.assign(ctrl, {
	    loadResultWithAssistance: loadResultWithAssistance,
	    selectSuggestion: selectSuggestion,
	    /* lifecycle hooks */
	    $onInit: $onInit,
	    $postLink: $postLink
	  });
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-iban-autocomplete-search-ng.js.map