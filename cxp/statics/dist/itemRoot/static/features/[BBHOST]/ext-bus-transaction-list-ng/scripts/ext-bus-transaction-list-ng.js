(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-transaction-search-filter-ng"), require("ui-bb-load-more-ng"), require("ui-bb-sortable-column-ng"), require("ui-bb-paginator-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-loading-overlay-ng"), require("vendor-bb-uib-dropdown"), require("ui-bus-format-amount-ng"), require("ui-bb-modal-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bus-transaction-list-ng", ["ui-bb-i18n-ng", "ui-bb-substitute-error-ng", "ui-bb-empty-state-ng", "ui-bb-transaction-search-filter-ng", "ui-bb-load-more-ng", "ui-bb-sortable-column-ng", "ui-bb-paginator-ng", "ui-bb-notification-stripe-ng", "ui-bb-loading-overlay-ng", "vendor-bb-uib-dropdown", "ui-bus-format-amount-ng", "ui-bb-modal-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bus-transaction-list-ng"] = factory(require("ui-bb-i18n-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-transaction-search-filter-ng"), require("ui-bb-load-more-ng"), require("ui-bb-sortable-column-ng"), require("ui-bb-paginator-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-loading-overlay-ng"), require("vendor-bb-uib-dropdown"), require("ui-bus-format-amount-ng"), require("ui-bb-modal-ng"));
	else
		root["ext-bus-transaction-list-ng"] = factory(root["ui-bb-i18n-ng"], root["ui-bb-substitute-error-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-transaction-search-filter-ng"], root["ui-bb-load-more-ng"], root["ui-bb-sortable-column-ng"], root["ui-bb-paginator-ng"], root["ui-bb-notification-stripe-ng"], root["ui-bb-loading-overlay-ng"], root["vendor-bb-uib-dropdown"], root["ui-bus-format-amount-ng"], root["ui-bb-modal-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_51__, __WEBPACK_EXTERNAL_MODULE_56__, __WEBPACK_EXTERNAL_MODULE_57__, __WEBPACK_EXTERNAL_MODULE_58__) {
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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(55);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_51__;

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _uiBbLoadingOverlayNg = __webpack_require__(51);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBbI18nNg = __webpack_require__(7);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(8);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbSortableColumnNg = __webpack_require__(12);
	
	var _uiBbSortableColumnNg2 = _interopRequireDefault(_uiBbSortableColumnNg);
	
	var _uiBbLoadMoreNg = __webpack_require__(11);
	
	var _uiBbLoadMoreNg2 = _interopRequireDefault(_uiBbLoadMoreNg);
	
	var _uiBbPaginatorNg = __webpack_require__(13);
	
	var _uiBbPaginatorNg2 = _interopRequireDefault(_uiBbPaginatorNg);
	
	var _uiBbTransactionSearchFilterNg = __webpack_require__(10);
	
	var _uiBbTransactionSearchFilterNg2 = _interopRequireDefault(_uiBbTransactionSearchFilterNg);
	
	var _vendorBbUibDropdown = __webpack_require__(56);
	
	var _vendorBbUibDropdown2 = _interopRequireDefault(_vendorBbUibDropdown);
	
	var _uiBbNotificationStripeNg = __webpack_require__(22);
	
	var _uiBbNotificationStripeNg2 = _interopRequireDefault(_uiBbNotificationStripeNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(9);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBusFormatAmountNg = __webpack_require__(57);
	
	var _uiBusFormatAmountNg2 = _interopRequireDefault(_uiBusFormatAmountNg);
	
	var _uiBbModalNg = __webpack_require__(58);
	
	var _uiBbModalNg2 = _interopRequireDefault(_uiBbModalNg);
	
	var _helpers = __webpack_require__(59);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _hooks = __webpack_require__(61);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bus-transaction-list-ng
	 *
	 * @description
	 * Business Banking: transaction table view.
	 *
	 * @requires ui-bb-loading-indicator-ng
	 * @requires ui-bb-i18n-ng
	 * @requires ui-bb-substitute-error-ng
	 *
	 * @example
	 * <!-- payment widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bus-transaction-list-ng</value>
	 * </property>
	 */
	var dependencyKeys = exports.dependencyKeys = [_uiBbLoadingOverlayNg2.default, _uiBbI18nNg2.default, _uiBbSubstituteErrorNg2.default, _uiBbSortableColumnNg2.default, _uiBbLoadMoreNg2.default, _uiBbPaginatorNg2.default, _uiBbTransactionSearchFilterNg2.default, _vendorBbUibDropdown2.default, _uiBbNotificationStripeNg2.default, _uiBbEmptyStateNg2.default, _uiBusFormatAmountNg2.default, _uiBbModalNg2.default];
	
	var hooks = exports.hooks = extHooks;
	var helpers = exports.helpers = _helpers2.default;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_56__;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_57__;

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_58__;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(60);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var helpers = function helpers(_ref) {
	  var $filter = _ref.$filter,
	      stateContainer = _ref.stateContainer;
	
	  var i18n = $filter('i18n');
	  var isProductSelected = function isProductSelected($ctrl) {
	    return !!$ctrl.product && $ctrl.product.productId !== -1;
	  };
	
	  var getTransactions = stateContainer.createSelector(function (state) {
	    return state.transactions.rawData;
	  });
	  var getSearchTransactions = stateContainer.createSelector(function (state) {
	    return state.search.rawData;
	  });
	  var getSearchingState = stateContainer.createSelector(function (state) {
	    return state.searching;
	  });
	  var getLoadingState = stateContainer.createSelector(function (state) {
	    return state.transactions.loading || state.search.loading;
	  });
	
	  /**
	   *
	   * @description
	   * Checks if transactions data is available
	   * @inner
	   *
	   * @name initialTransactionsAvailable
	   * @type {function}
	   * @returns {boolean} returns true if transactions data is not present
	   */
	  var initialTransactionsAvailable = function initialTransactionsAvailable() {
	    return !getSearchingState() && Array.isArray(getTransactions()) && getTransactions().length;
	  };
	
	  /**
	   * @description
	   * Checks if searched transactions data is available
	   * @inner
	   *
	   * @name searchTransactionsAvailable
	   * @type {function}
	   * @returns {boolean} returns true if searched transactions data is not present
	   */
	  var searchTransactionsAvailable = function searchTransactionsAvailable() {
	    return getSearchingState() && Array.isArray(getSearchTransactions()) && getSearchTransactions().length;
	  };
	
	  return {
	    /**
	     * @description
	     * Configuration for table headers
	     *
	     * @name headers
	     * @type {array.<Header>}
	     *
	     */
	    headers: [{
	      label: 'details.label.product',
	      class: '',
	      isHidden: function isHidden($ctrl) {
	        return isProductSelected($ctrl);
	      },
	      sortable: {
	        key: 'productName',
	        direction: 'ASC'
	      }
	    }, {
	      label: 'details.label.counterParty',
	      class: '',
	      isHidden: function isHidden() {
	        return false;
	      },
	      sortable: {
	        key: 'counterPartyName',
	        direction: 'ASC'
	      }
	    }, {
	      label: 'details.label.description',
	      class: '',
	      isHidden: function isHidden() {
	        return false;
	      },
	      sortable: {
	        key: 'description',
	        direction: 'ASC'
	      }
	    }, {
	      label: 'details.label.currency',
	      class: 'text-right',
	      isHidden: function isHidden() {
	        return false;
	      },
	      sortable: {
	        key: 'currency',
	        direction: 'ASC'
	      }
	    }, {
	      label: 'details.label.amount',
	      class: 'text-right',
	      isHidden: function isHidden() {
	        return false;
	      },
	      sortable: {
	        key: 'amount',
	        direction: 'ASC'
	      }
	    }, {
	      label: 'details.label.bookingDate',
	      class: 'text-right',
	      sortable: {
	        key: 'bookingDate',
	        direction: 'DESC'
	      }
	    }],
	
	    /**
	     * @description
	     * Checks if sortable object is the active one
	     *
	     * @name isSortableActive
	     * @type {function}
	     * @see headers
	     *
	     * @param {object}  sortable  Sortable object to check
	     * @param {object}  sort      Current sort status
	     *
	     * @returns {boolean}
	     */
	    isSortableActive: function isSortableActive(sortable, sort) {
	      return sortable.key === sort.orderBy;
	    },
	
	    /**
	     * @description
	     * Opens the modal window with selectedTransaction
	     * @name openModalWindow
	     * @type {function}
	     * @param {object} ext extension reference
	     * @param {object} selectedTransaction   transaction to be shown
	     */
	    openModalWindow: function openModalWindow(ext, selectedTransaction) {
	      Object.assign(ext, { showModal: true, transaction: selectedTransaction });
	    },
	
	    /**
	     * @description
	     * Toggle row details visibility
	     * @name closeModalWindow
	     * @type {function}
	     * @param {object} ext extension reference
	     */
	    closeModalWindow: function closeModalWindow(ext) {
	      Object.assign(ext, { showModal: false, transaction: null });
	    },
	
	    /**
	     * @description
	     * Check if value is defined, not null and not empty
	     * @name hasValue
	     * @type {function}
	     * @param {*} value  The value to check
	     * @return {boolean}
	     */
	    hasValue: function hasValue(value) {
	      return !!value;
	    },
	
	    /**
	     * @description
	     * Check if transaction type is SEPA DD
	     * @name isSepaDD
	     * @type {function}
	     * @param {string} type  Transaction type to check
	     * @return {boolean}
	     */
	    isSepaDD: function isSepaDD(type) {
	      return type === _constants.SEPA_DD_TYPE;
	    },
	
	    /**
	     * @description
	     * List of supported document export formats
	     *
	     * @public
	     * @name exportFormats
	     * @type {function}
	     *
	     * @return {array}
	     */
	    exportFormats: function exportFormats() {
	      return _constants2.default;
	    },
	
	    /**
	     * @description
	     * Checks if actual pagination type matches the one, defined in properties
	     *
	     * @public
	     * @name isPaginationTypeMatch
	     * @type {function}
	     * @param {function} $ctrl      Current controller
	     * @param {string} type         Description of pagination type (pagination, load-more)
	     *
	     * @returns {boolean}
	     */
	    isPaginationTypeMatch: function isPaginationTypeMatch($ctrl, type) {
	      return $ctrl.state.pageParams.paginationType === type;
	    },
	
	    /**
	     * @name isProductSelected
	     * @type {function}
	     * @param {object} $ctrl  Current controller
	     *
	     * @description
	     * Returns boolean true if product is selected, false - otherwise
	     *
	     * @returns {boolean}
	     */
	    isProductSelected: isProductSelected,
	
	    /**
	     * @description
	     * Get the correct translated empty message when product is selected or not
	     *
	     * @name getEmptyMessage
	     * @type {function}
	     * @param {object} $ctrl  Current controller
	     *
	     * @returns {string}
	     */
	    getEmptyMessage: function getEmptyMessage($ctrl) {
	      var selectedMessage = 'message.no.transactions.subtitle';
	      var notSelectedMessage = 'message.noTransactionsForAccount';
	
	      return i18n(isProductSelected($ctrl) ? selectedMessage : notSelectedMessage);
	    },
	
	    /**
	     * @description
	     * Checks if transactions data is available
	     *
	     * @name isTransactionsAvailable
	     * @type {function}
	     * @returns {boolean} returns true if transactions data is not present
	     */
	    isTransactionsAvailable: function isTransactionsAvailable() {
	      return initialTransactionsAvailable() || searchTransactionsAvailable();
	    },
	
	    /**
	     * @description
	     * Checks if transactions are in a loading state
	     *
	     * @name isLoading
	     * @type {function}
	     * @returns {boolean} returns true if transactions data is loading
	     */
	    isLoading: function isLoading() {
	      return getLoadingState();
	    }
	  };
	};
	
	exports.default = helpers;
	
	/**
	 * Header configuration object
	 * @typedef {object} Header
	 * @property {string} label       Translation key
	 * @property {string} class       CSS class name
	 * @property {function} isHidden  Check if header is hidden
	 * @property {Sortable} sortable  Sortable configuration
	 */
	
	/**
	* Sortable configuration object
	* @typedef {object} Sortable
	* @property {string} key       Defined sort key in the model
	* @property {string} direction Current sort direction (ASC, DESC)
	*/

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name supportedExportFormats
	 *
	 * @decription
	 * Array of supported file export formats for transactions
	 *
	 * @type {array}
	 */
	var supportedExportFormats = ['csv'];
	
	var SEPA_DD_TYPE = exports.SEPA_DD_TYPE = 'SEPA DD';
	
	exports.default = supportedExportFormats;

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name defaultSortableColumn
	 *
	 * @description
	 * Return the key of the default sort column
	 *
	 * @type {function}
	 * @returns {string|null} Returns column key
	 */
	var defaultSortableColumn = exports.defaultSortableColumn = function defaultSortableColumn() {
	  return 'bookingDate';
	};
	
	/**
	 * @name defaultSortableDirection
	 *
	 * @description
	 * Return the sorting direction of the default sort column
	 *
	 * @type {function}
	 * @returns {string|null} Returns sorting direction
	 */
	var defaultSortableDirection = exports.defaultSortableDirection = function defaultSortableDirection() {
	  return 'DESC';
	};
	
	/**
	 * @name isDefaultProductFirst
	 *
	 * @description
	 * True if should return first product if selected product is not set.
	 *
	 * @type {function}
	 * @returns {boolean}
	 */
	var isDefaultProductFirst = exports.isDefaultProductFirst = function isDefaultProductFirst() {
	  return false;
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bus-transaction-list-ng.js.map