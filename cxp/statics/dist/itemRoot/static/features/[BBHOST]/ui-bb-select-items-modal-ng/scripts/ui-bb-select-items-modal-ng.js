(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("ui-bb-search-box-ng"), require("ui-bb-list-ng"), require("ui-bb-modal-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-loading-overlay-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-select-items-modal-ng", ["vendor-bb-angular", "ui-bb-search-box-ng", "ui-bb-list-ng", "ui-bb-modal-ng", "ui-bb-empty-state-ng", "ui-bb-loading-overlay-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-select-items-modal-ng"] = factory(require("vendor-bb-angular"), require("ui-bb-search-box-ng"), require("ui-bb-list-ng"), require("ui-bb-modal-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-loading-overlay-ng"));
	else
		root["ui-bb-select-items-modal-ng"] = factory(root["vendor-bb-angular"], root["ui-bb-search-box-ng"], root["ui-bb-list-ng"], root["ui-bb-modal-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-loading-overlay-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_43__, __WEBPACK_EXTERNAL_MODULE_129__, __WEBPACK_EXTERNAL_MODULE_130__) {
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

	module.exports = __webpack_require__(128);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_43__;

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbModalNg = __webpack_require__(43);
	
	var _uiBbModalNg2 = _interopRequireDefault(_uiBbModalNg);
	
	var _uiBbSearchBoxNg = __webpack_require__(8);
	
	var _uiBbSearchBoxNg2 = _interopRequireDefault(_uiBbSearchBoxNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(129);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(130);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBbListNg = __webpack_require__(9);
	
	var _uiBbListNg2 = _interopRequireDefault(_uiBbListNg);
	
	var _component = __webpack_require__(131);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _controller = __webpack_require__(132);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ui-bb-select-items-modal-ng
	 * @description
	 * This component is a modal window that shows list of items
	 * and upon selection it invokes a callback that is provided to
	 * it with the selected items.
	 * The modal window has a checkbox that can select all provided
	 * items, search, and Cancel and Add buttons.
	 * The listing of the items is provided by the extension
	 *
	 * @example
	 * // in the extension
	 * import uiBbSelectItemsModalNg from 'ui-bb-select-items-modal-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbSelectItemsModalNg,
	 * ];
	 *
	 * // in template file
	 * <button data-on-click="isSelectItemsModalOpen = true"></button>
	 *
	 * <ui-bb-select-items-modal-ng
	 *   data-is-open="isSelectItemsModalOpen"
	 *   data-on-submit="$ctrl.submit(items)"
	 *   data-item-id-selector="$ctrl.itemIdSelector(item)"
	 *   data-is-loading="false"
	 *   data-is-search-enabled="true"
	 *   data-on-search="$ctrl.search(query)"
	 *   data-on-load-more="$ctrl.loadMore()"
	 *   data-prevent-load-more="false"
	 *   data-labels="{
	 *     cancel: 'Cancel',
	 *     addItemsBaseTitle: 'Select',
	 *     header: {
	 *       title: 'Select items',
	 *     },
	 *     search: {
	 *       title: ('Search' | i18n),
	 *       placeholder: ('Search' | i18n),
	 *       clear: ('Clear text' | i18n),
	 *     },
	 *     emptyState: {
	 *       title: ('emptyState.title' | i18n),
	 *       subtitle: ('emptyState.subtitle' | i18n),
	 *     },
	 *     searchEmptyState: {
	 *       title: ('searchEmptyState.title' | i18n),
	 *       subtitle: ('searchEmptyState.subtitle' | i18n),
	 *     }
	 *   }"
	 *   data-items="[1, 2, 3]"
	 *   data-columns="[
	 *     { label: ('column.label' | i18n), class: '', template: #ext-bb/items-list.ng.html' },
	 *   ]">
	 * </ui-bb-select-items-modal-ng>
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-select-items-modal-ng', [_uiBbModalNg2.default, _uiBbSearchBoxNg2.default, _uiBbEmptyStateNg2.default, _uiBbLoadingOverlayNg2.default, _uiBbListNg2.default]).component('uiBbSelectItemsModalNg', _component2.default).controller('uiBbSelectItemsModalController', ['$timeout', _controller2.default]).name;

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_129__;

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_130__;

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbSelectItemsModalComponent
	 * @type {object}
	 * @description
	 * Component that allows selecting items in a modal
	 *
	 * @property {boolean} isOpen - Modal open state
	 * @property {Labels} labels - Labels
	 * @property {Column[]} columns - Column definitions
	 * @property {object[]} items - List of items
	 * @property {boolean} isLoading - Loading flag
	 * @property {boolean} isSearchEnabled - Search enabled flag
	 * @property {boolean} preventLoadMore - Prevents calling `onLoadMore`
	 *           (usually when there are no more items)
	 * @property {function} itemIdSelector - Callback function used to get the items id
	 * @property {function} onSubmit - Callback function to invoke when finished selecting items
	 * @property {function} onSearch - Callback function to invoke when search query is changed
	 * @property {function} onLoadMore - Callback function to invoke when end of list is reached
	 */
	var component = {
	  controller: 'uiBbSelectItemsModalController',
	  bindings: {
	    isOpen: '=',
	    labels: '<',
	    columns: '<',
	    items: '<',
	    isLoading: '<',
	    isSearchEnabled: '<',
	    preventLoadMore: '<',
	    itemIdSelector: '&',
	    onSubmit: '&',
	    onSearch: '&',
	    onLoadMore: '&'
	  },
	  template: '\n    <ui-bb-modal-ng\n      data-is-open="$ctrl.isOpen"\n      data-on-close="$ctrl.close()"\n      data-animation="false"\n      data-size="\'lg\'"\n      data-backdrop="\'static\'"\n      data-keyboard="true">\n\n      <!--Modal Header-->\n      <div class="modal-header d-flex justify-content-between align-items-center">\n        <h5 class="modal-title" data-ng-bind="$ctrl.labels.header.title"></h5>\n        <ui-bb-search-box-ng\n          data-ng-if="$ctrl.isSearchEnabled"\n          data-config="{ labels: $ctrl.labels.search }"\n          data-is-loading="$ctrl.isLoading && $ctrl.state.mainLoading"\n          data-ng-model="$ctrl.state.searchQuery"\n          data-on-clear="$ctrl.clearSearch()"\n          data-on-submit="$ctrl.submitSearch(search)"\n          data-forced-submit="true"\n        >\n        </ui-bb-search-box-ng>\n      </div>\n\n      <ui-bb-loading-overlay-ng data-is-loading="$ctrl.isLoading && $ctrl.state.mainLoading">\n\n        <ui-bb-empty-state-ng\n          data-icon-classes="fa fa-4x {{ $ctrl.state.searchApplied ? \'fa-search\' : \'fa-file-alt\' }}"\n          data-title="{{ $ctrl.state.searchApplied ?\n            $ctrl.labels.searchEmptyState.title : $ctrl.labels.emptyState.title }}"\n          data-subtitle="{{ $ctrl.state.searchApplied ?\n            $ctrl.labels.searchEmptyState.subtitle : $ctrl.labels.emptyState.subtitle }}"\n          data-is-empty="$ctrl.items.length === 0"\n        >\n\n          <div class="modal-body py-0">\n            <!--Modal Body-->\n            <div class="bb-card bb-card-header pb-0 pt-3 px-3 d-flex">\n              <div class="bb-card-checkbox d-flex align-items-center mr-3">\n                <input type="checkbox"\n                  data-role="ui-bb-select-items-modal-select-all-checkbox"\n                  data-ng-checked="$ctrl.areAllItemsSelected()"\n                  data-ng-click="$ctrl.toggleSelectAll()"\n                  data-ng-if="!$ctrl.isSelectedAllCheckboxIndeterminate()"/>\n                <span\n                  data-role="ui-bb-select-items-modal-indeterminate-checkbox"\n                  class="checkbox-indeterminate far fa-minus-square"\n                  data-ng-click="$ctrl.toggleSelectAll()"\n                  data-ng-if="$ctrl.isSelectedAllCheckboxIndeterminate()"></span>\n              </div>\n              <h6 data-ng-repeat="column in $ctrl.columns"\n                class="bb-card-content m-0"\n                data-ng-class="[column.class, {\'mr-auto\': $index == 0}, {\'ml-1\': $last}]"\n                data-ng-bind="column.label">\n              </h6>\n            </div>\n          </div>\n          <ui-bb-list-ng class="list-group modal-body-scrollable"\n            data-on-scroll-to-end="$ctrl.onEndReached()">\n            <div class="modal-body pt-0">\n              <div class="d-flex align-items-stretch justify-content-start rounded border\n                bb-card bb-card-hoverable mt-3 p-3 w-100"\n                data-ng-repeat="item in $ctrl.items track by $ctrl.getItemId(item)"\n                data-ng-click="$ctrl.toggleItemCheckbox(item)"\n                data-ng-class="{\'selected\': $ctrl.state.selectedItems[$ctrl.getItemId(item)]}"\n                >\n                <div class="bb-card-checkbox d-flex align-items-center mr-3">\n                  <input type="checkbox"\n                    tabindex="-1"\n                    data-ng-checked="$ctrl.state.selectedItems[$ctrl.getItemId(item)]">\n                </div>\n                <div data-ng-repeat="column in $ctrl.columns track by $index"\n                  class="bb-card-content"\n                  data-ng-class="[column.class, {\'mr-auto\': $index == 0}, {\'ml-1\': $last}]">\n                  <div class="text-overflow ml-0"\n                    data-ng-include="column.template">\n                  </div>\n                </div>\n              </div>\n              <div class="d-flex justify-content-center m-3"\n                data-ng-if="$ctrl.isLoading && $ctrl.state.loadMoreLoading">\n                <i class="fas fa-spinner fa-spin fa-2x text-muted"></i>\n              </div>\n            </div>\n          </ui-bb-list-ng>\n        </ui-bb-empty-state-ng>\n      </ui-bb-loading-overlay-ng>\n      <!--Modal Footer-->\n      <div class="modal-footer">\n        <button class="btn btn-secondary select-items-btn-cancel"\n          type="button"\n          title="{{ $ctrl.labels.cancel }}"\n          data-ng-click="$ctrl.close()"\n          data-ng-bind="$ctrl.labels.cancel">\n        </button>\n        <button class="btn btn-primary select-items-btn-select"\n          type="button"\n          title="{{ $ctrl.labels.addItems }}"\n          data-ng-click="$ctrl.submit()"\n          data-ng-disabled="$ctrl.getSelectedItemsCount() === 0">\n          {{ $ctrl.labels.addItemsBaseTitle }}\n          <span data-ng-if="$ctrl.getSelectedItemsCount() > 0">\n            ({{ $ctrl.getSelectedItemsCount() }})\n          </span>\n        </button>\n      </div>\n    </ui-bb-modal-ng>\n  '
	};
	
	exports.default = component;
	
	/**
	 * @name Labels
	 * @type {object}
	 * @description
	 * Labels for the component
	 *
	 * @property {string} cancel - Cancel text
	 * @property {string} addItems - Add items tooltip
	 * @property {string} addItemsBaseTitle - Add items button text
	 * @property {object} header - Header related labels
	 * @property {string} header.title - Header title
	 * @property {object} search - Search related labels
	 * @property {string} search.title - Accessibility label for component
	 * @property {string} search.placeholder - Placeholder label for the search input
	 * @property {string} search.clear - Accesibility label for clear button
	 * @property {object} emptyState - Empty state related labels
	 * @property {string} emptyState.title - Title for empty state
	 * @property {string} emptyState.subtitle - Subtitle for empty state
	 * @property {object} searchEmptyState - Empty state related labels when searching
	 * @property {string} searchEmptyState.title - Title for empty state when searching
	 * @property {string} searchEmptyState.subtitle - Subtitle for empty state when searching
	 */
	
	/**
	 * @name Column
	 * @type {object}
	 * @description
	 * Column definition
	 *
	 * @property {string} label - Label for the column
	 * @property {string} class - Class to add to the column items
	 * @property {string} template - Angular template
	 */

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbSelectItemsModalController;
	/**
	 * @name uiBbSelectItemsModalController
	 * @type {function}
	 */
	function uiBbSelectItemsModalController($timeout) {
	  var $ctrl = this;
	
	  /**
	   * @name state
	   * @description
	   * State object of the controller
	   * @type {Object}
	   */
	  var state = {
	    selectedItems: {},
	    searchQuery: '',
	    searchApplied: false,
	    mainLoading: true,
	    loadMoreLoading: false
	  };
	
	  /**
	   * @name resetState
	   * @description
	   * Resets controller state
	   * @type {function}
	   * @inner
	   */
	  var resetState = function resetState() {
	    $ctrl.state.selectedItems = {};
	    $ctrl.state.searchQuery = '';
	    $ctrl.state.searchApplied = false;
	  };
	
	  /**
	   * @name close
	   * @description
	   * Closes select items modal dialog and resets state
	   * @type {function}
	   */
	  var close = function close() {
	    $ctrl.isOpen = false;
	    resetState();
	  };
	
	  /**
	   * @name submit
	   * @description
	   * Submits selected items and closes dialog
	   * @type {function}
	   */
	  var submit = function submit() {
	    if ($ctrl.onSubmit) {
	      var selectedItems = Object.keys($ctrl.state.selectedItems);
	      $ctrl.onSubmit({ items: selectedItems });
	    }
	    $ctrl.close();
	  };
	
	  /**
	   * @name getItemId
	   * @description
	   * Returns the id used for the item, if itemIdSelector is not
	   * defined it uses 'id' as default value.
	   * @type {function}
	   * @param {Object} item
	   * @returns {string} items id
	   */
	  var getItemId = function getItemId(item) {
	    return $ctrl.itemIdSelector ? $ctrl.itemIdSelector({ item: item }) : item.id;
	  };
	
	  /**
	   * @name uiBbSelectItemsModalController#areAllItemsSelected
	   * @description
	   * Checks if all items are selected
	   * @type {function}
	   * @returns {boolean}
	   */
	  var areAllItemsSelected = function areAllItemsSelected() {
	    return $ctrl.items.every(function (item) {
	      return $ctrl.state.selectedItems[$ctrl.getItemId(item)];
	    });
	  };
	
	  /**
	   * @name toggleSelectAll
	   * @description
	   * Toggles selected all state
	   * @type {function}
	   */
	  var toggleSelectAll = function toggleSelectAll() {
	    if (areAllItemsSelected()) {
	      $ctrl.items.forEach(function (item) {
	        delete $ctrl.state.selectedItems[$ctrl.getItemId(item)];
	      });
	    } else {
	      $ctrl.items.forEach(function (item) {
	        $ctrl.state.selectedItems[$ctrl.getItemId(item)] = item;
	      });
	    }
	  };
	
	  /**
	   * @name uiBbSelectItemsModalController#toggleItemCheckbox
	   * @description
	   * Click listener for the items checkbox
	   * @type {function}
	   * @param {Object}  Item that was toggled
	   */
	  var toggleItemCheckbox = function toggleItemCheckbox(item) {
	    var itemId = $ctrl.getItemId(item);
	    if ($ctrl.state.selectedItems[itemId]) {
	      delete $ctrl.state.selectedItems[itemId];
	    } else {
	      $ctrl.state.selectedItems[itemId] = item;
	    }
	  };
	
	  /**
	   * @name uiBbSelectItemsModalController#isSelectedAllCheckboxIndeterminate
	   * @description
	   * Checks if all items are selected or none is selected
	   * @type {function}
	   * @returns {boolean}
	   */
	  var isSelectedAllCheckboxIndeterminate = function isSelectedAllCheckboxIndeterminate() {
	    var numberOfSelected = $ctrl.items.filter(function (item) {
	      return $ctrl.state.selectedItems[$ctrl.getItemId(item)];
	    }).length;
	
	    return numberOfSelected > 0 && numberOfSelected < $ctrl.items.length;
	  };
	
	  /**
	   * @name uiBbSelectItemsModalController#clearSearch
	   * @description
	   * Clears the search
	   * @type {function}
	   */
	  var clearSearch = function clearSearch() {
	    $ctrl.state.searchQuery = '';
	    $ctrl.state.searchApplied = false;
	    $ctrl.state.mainLoading = true;
	    $ctrl.state.loadMoreLoading = false;
	    if ($ctrl.onSearch) {
	      $ctrl.onSearch({ query: '' });
	    }
	  };
	
	  /**
	   * @name uiBbSelectItemsModalController#submitSearch
	   * @description
	   * Calls the `onSearch` callback with the search query
	   * @type {function}
	   */
	  var submitSearch = function submitSearch(search) {
	    $ctrl.state.searchApplied = true;
	    $ctrl.state.mainLoading = true;
	    $ctrl.state.loadMoreLoading = false;
	    if ($ctrl.onSearch) {
	      $ctrl.onSearch({ query: search });
	    }
	  };
	
	  /**
	   * @name uiBbSelectItemsModalController#getSelectedItemsCount
	   * @description
	   * Returns the number of selected items
	   * @type {function}
	   * @returns {Number} number of selected items
	   */
	  var getSelectedItemsCount = function getSelectedItemsCount() {
	    return Object.keys($ctrl.state.selectedItems).length;
	  };
	
	  /**
	   * @name uiBbSelectItemsModalController#onEndReached
	   * @description
	   * Calls the `onLoadMore` callback if there are more items and isLoading is false
	   * @type {function}
	   */
	  var onEndReached = function onEndReached() {
	    if (!$ctrl.preventLoadMore && !$ctrl.isLoading) {
	      $ctrl.state.mainLoading = false;
	      $ctrl.state.loadMoreLoading = true;
	      $timeout(function () {
	        $ctrl.onLoadMore();
	      });
	    }
	  };
	
	  Object.assign($ctrl, {
	    state: state,
	    close: close,
	    submit: submit,
	    getItemId: getItemId,
	    toggleSelectAll: toggleSelectAll,
	    toggleItemCheckbox: toggleItemCheckbox,
	    isSelectedAllCheckboxIndeterminate: isSelectedAllCheckboxIndeterminate,
	    clearSearch: clearSearch,
	    submitSearch: submitSearch,
	    areAllItemsSelected: areAllItemsSelected,
	    getSelectedItemsCount: getSelectedItemsCount,
	    onEndReached: onEndReached
	  });
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-select-items-modal-ng.js.map