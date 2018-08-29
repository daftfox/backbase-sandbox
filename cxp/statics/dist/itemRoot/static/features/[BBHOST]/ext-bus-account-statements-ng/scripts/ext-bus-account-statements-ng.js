(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-uib-dropdown"), require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-sortable-column-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-ellipsis-tooltip-ng"), require("ui-bb-paginator-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-modal-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-account-statements-filter-ng"), require("ui-bb-account-selector-ng"), require("ui-bb-checkbox-indeterminate-ng"), require("ui-bus-format-amount-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bus-account-statements-ng", ["vendor-bb-uib-dropdown", "vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "ui-bb-substitute-error-ng", "ui-bb-sortable-column-ng", "ui-bb-notification-stripe-ng", "ui-bb-ellipsis-tooltip-ng", "ui-bb-paginator-ng", "ui-bb-empty-state-ng", "ui-bb-modal-ng", "ui-bb-loading-overlay-ng", "ui-bb-account-statements-filter-ng", "ui-bb-account-selector-ng", "ui-bb-checkbox-indeterminate-ng", "ui-bus-format-amount-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bus-account-statements-ng"] = factory(require("vendor-bb-uib-dropdown"), require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-sortable-column-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-ellipsis-tooltip-ng"), require("ui-bb-paginator-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-modal-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-account-statements-filter-ng"), require("ui-bb-account-selector-ng"), require("ui-bb-checkbox-indeterminate-ng"), require("ui-bus-format-amount-ng"));
	else
		root["ext-bus-account-statements-ng"] = factory(root["vendor-bb-uib-dropdown"], root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["ui-bb-substitute-error-ng"], root["ui-bb-sortable-column-ng"], root["ui-bb-notification-stripe-ng"], root["ui-bb-ellipsis-tooltip-ng"], root["ui-bb-paginator-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-modal-ng"], root["ui-bb-loading-overlay-ng"], root["ui-bb-account-statements-filter-ng"], root["ui-bb-account-selector-ng"], root["ui-bb-checkbox-indeterminate-ng"], root["ui-bus-format-amount-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_20__) {
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

	module.exports = __webpack_require__(19);

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
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
/* 14 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.hooks = exports.helpers = exports.dependencyKeys = undefined;
	
	var _vendorBbUibDropdown = __webpack_require__(2);
	
	var _vendorBbUibDropdown2 = _interopRequireDefault(_vendorBbUibDropdown);
	
	var _vendorBbAngularNgAria = __webpack_require__(3);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbI18nNg = __webpack_require__(4);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(5);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbSortableColumnNg = __webpack_require__(6);
	
	var _uiBbSortableColumnNg2 = _interopRequireDefault(_uiBbSortableColumnNg);
	
	var _uiBbNotificationStripeNg = __webpack_require__(7);
	
	var _uiBbNotificationStripeNg2 = _interopRequireDefault(_uiBbNotificationStripeNg);
	
	var _uiBbEllipsisTooltipNg = __webpack_require__(8);
	
	var _uiBbEllipsisTooltipNg2 = _interopRequireDefault(_uiBbEllipsisTooltipNg);
	
	var _uiBbPaginatorNg = __webpack_require__(9);
	
	var _uiBbPaginatorNg2 = _interopRequireDefault(_uiBbPaginatorNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(10);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBbModalNg = __webpack_require__(11);
	
	var _uiBbModalNg2 = _interopRequireDefault(_uiBbModalNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(12);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBbAccountStatementsFilterNg = __webpack_require__(13);
	
	var _uiBbAccountStatementsFilterNg2 = _interopRequireDefault(_uiBbAccountStatementsFilterNg);
	
	var _uiBbAccountSelectorNg = __webpack_require__(14);
	
	var _uiBbAccountSelectorNg2 = _interopRequireDefault(_uiBbAccountSelectorNg);
	
	var _uiBbCheckboxIndeterminateNg = __webpack_require__(15);
	
	var _uiBbCheckboxIndeterminateNg2 = _interopRequireDefault(_uiBbCheckboxIndeterminateNg);
	
	var _uiBusFormatAmountNg = __webpack_require__(20);
	
	var _uiBusFormatAmountNg2 = _interopRequireDefault(_uiBusFormatAmountNg);
	
	var _hooks = __webpack_require__(21);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	var _helpers = __webpack_require__(22);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _events = __webpack_require__(23);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bus-account-statements-ng
	 *
	 * @description
	 * Account statemetns extension.
	 *
	 * @example
	 * <!-- account statement widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bus-account-statements-ng</value>
	 * </property>
	 *
	 */
	var dependencyKeys = exports.dependencyKeys = [_vendorBbUibDropdown2.default, _vendorBbAngularNgAria2.default, _uiBbI18nNg2.default, _uiBbSubstituteErrorNg2.default, _uiBbSortableColumnNg2.default, _uiBbNotificationStripeNg2.default, _uiBbEllipsisTooltipNg2.default, _uiBbPaginatorNg2.default, _uiBbEmptyStateNg2.default, _uiBbModalNg2.default, _uiBbLoadingOverlayNg2.default, _uiBbAccountStatementsFilterNg2.default, _uiBbAccountSelectorNg2.default, _uiBbCheckboxIndeterminateNg2.default, _uiBusFormatAmountNg2.default];
	
	var helpers = exports.helpers = _helpers2.default;
	
	var hooks = exports.hooks = extHooks;
	
	var events = exports.events = _events2.default;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Hooks for ext-bus-product-select-ng
	 * @name Hooks
	 * @type {Object}
	 */
	
	var accountViewModel = function accountViewModel(account) {
	  return {
	    id: account.id,
	    name: account.name,
	    identifier: account.IBAN || account.BBAN || account.productNumber,
	    amount: account.availableBalance,
	    currency: account.currency
	  };
	};
	
	/**
	 * Prepare the Account statements into a form ready for display to the User
	 * eliminating the invalid url document
	 * @name Hooks#processAccountStatements
	 * @type {Function}
	 * @param {accountStatements[]} accounts The source account statements from the API
	 * @returns {accountStatements[]} Processed account statements after processing
	 */
	var processAccountStatements = exports.processAccountStatements = function processAccountStatements(accountStatements) {
	  accountStatements.map(function (stm) {
	    var processedStatement = Object.assign({}, stm);
	    processedStatement.documents = stm.documents.filter(function (doc) {
	      return !((!doc.url || doc.url === '') && (!doc.uid || doc.uid === ''));
	    });
	    processedStatement.isMultiple = processedStatement.documents.length > 1;
	    processedStatement.isDisabled = !processedStatement.documents.length;
	    return Object.assign(stm, processedStatement);
	  });
	  return accountStatements;
	};
	
	/**
	 * Prepare the fields of a Accounts into a form ready for display to the User
	 * @name Hooks#processAccounts
	 * @type {Function}
	 * @param {Object[]} accounts The source accounts from the API
	 * @returns {ProcessedAccount[]} Processed accounts
	 */
	var processAccounts = exports.processAccounts = function processAccounts(accounts) {
	  return accounts.map(accountViewModel);
	};
	
	/**
	 * Prepare the fields of a Account into a form ready for display to the User
	 * @name Hooks#processSelectedAccount
	 * @type {Function}
	 * @param {Object} account The source account from the API
	 * @returns {ProcessedAccount} Processed account
	 */
	var processSelectedAccount = exports.processSelectedAccount = function processSelectedAccount(account) {
	  return accountViewModel(account);
	};
	
	/**
	 * @name Hooks#defaultSortableColumn
	 *
	 * @description
	 * Return the key of the default sort column
	 *
	 * @type {function}
	 * @returns {string|null} Returns column key
	 */
	var defaultSortableColumn = exports.defaultSortableColumn = function defaultSortableColumn() {
	  return 'date';
	};
	
	/**
	 * @name Hooks#defaultSortableDirection
	 *
	 * @description
	 * Return the key of the default sort direction
	 *
	 * @type {function}
	 * @returns {?string}
	 */
	var defaultSortableDirection = exports.defaultSortableDirection = function defaultSortableDirection() {
	  return 'DESC';
	};
	
	/**
	 * @typedef {Object} ProcessedAccount
	 * @property {String} id Account ID
	 * @property {String} name Account name
	 * @property {String} identifier Account identifier
	 * @property {String} amount Account amount
	 * @property {String} currency Account amount currency
	 */

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var helpers = function helpers(context) {
	  var filter = context.$filter;
	  var i18n = filter('i18n');
	
	  var headers = [{
	    label: 'header.date',
	    sortable: {
	      key: 'date',
	      direction: 'DESC'
	    }
	  }, {
	    label: 'header.account',
	    sortable: {}
	  }];
	
	  /**
	   * @name Helpers#formatsMap
	   *
	   * @description
	   * As per the structure of statements it has some supported content types
	   * and we need to map them to a readable names
	   *
	   * @type {Object}
	   */
	  var formatsMap = {
	    'application/pdf': 'PDF',
	    'text/csv': 'CSV',
	    'text/plain': 'TXT',
	    'application/rtf': 'RTF',
	    'application/msword': 'DOC',
	    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'DOC',
	    'application/vnd.ms-excel': 'XLS',
	    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'XLS',
	    'application/xml': 'XML',
	    'image/png': 'PNG',
	    'image/jpeg': 'JPG',
	    'image/gif': 'GIF',
	    'image/tiff': 'TIFF',
	    'binary/octet-stream': 'File'
	  };
	
	  /**
	   * @name Helpers#isSortableActive
	   *
	   * @description
	   * Helper to check whether sort is applied
	   *
	   * @param {object} sortable
	   * @param {object} $ctrl
	   * @type {function}
	   * @returns {boolean}
	   */
	  var isSortableActive = function isSortableActive(sortable, ctrl) {
	    return sortable && sortable.key === ctrl.state.accountStatements.orderBy;
	  };
	
	  /**
	   * @name Helpers#removeNotification
	   *
	   * @description
	   * Helper to remove notification from the list
	   *
	   * @param {object} notification
	   * @param {Array} notificationsList
	   * @type {function}
	   * @returns {null}
	   */
	  var removeNotification = function removeNotification(notification, notificationsList) {
	    return notificationsList.filter(function (item) {
	      return item !== notification;
	    });
	  };
	
	  /**
	   * Contains translated string for account selector component
	   * @name Helpers#labels
	   * @type {module:ui-bb-search-box-ng.Labels}
	   */
	  var labels = {
	    allAccounts: i18n('selector.label.allAccounts'),
	    accounts: i18n('selector.label.accounts'),
	    account: i18n('selector.label.account'),
	    noAccounts: i18n('selector.label.noAccounts')
	  };
	
	  /**
	   * Contains configuration object for search box in account selector component
	   * @name Helpers#searchBox
	   * @type {SearchBox}
	   */
	  var searchBox = {
	    config: {
	      labels: {
	        placeholder: i18n('selector.searchPlaceholder')
	      }
	    }
	  };
	
	  /**
	   * @name Helpers#onAccountSelect
	   *
	   * @description
	   * Helper to account select action
	   *
	   * @type {function}
	   * @param {object} ctrl Account statements controller
	   * @param {object} account Selected account
	   * @returns {null}
	   */
	  var onAccountSelect = function onAccountSelect(ctrl, account) {
	    Object.assign(ctrl.state.accounts, { selected: Object.assign({}, account) });
	    ctrl.onAccountSelect();
	  };
	
	  /**
	   * @name Helpers#toggleFiltering
	   *
	   * @description
	   * Helper to change the isFiltering variable (used to change empty messages)
	   *
	   * @type {function}
	   * @param {object} ctrl Account statements controller
	   * @param {boolean} isActive is filtering or not
	   */
	  var toggleFiltering = function toggleFiltering(ctrl, isActive) {
	    Object.assign(ctrl.state, { isFiltering: isActive });
	  };
	
	  /**
	   * @name Helpers#getDocumentLink
	   *
	   * @description
	   * Helper to get the statement URL depending on where the document is stored
	   * (externally or via DBS)
	   *
	   * @type {function}
	   * @param {object} ctrl Account statements controller
	   * @param {object} document the statement document
	   * @returns {string}
	   */
	  var getDocumentLink = function getDocumentLink(ctrl, document) {
	    if (!document) return '';
	    var url = document.url,
	        uid = document.uid;
	    var getDownloadUrl = ctrl.getDownloadUrl;
	
	    return url || getDownloadUrl(uid);
	  };
	
	  /**
	   * @name Helpers#blockIfDisabled
	   *
	   * @description
	   * Helper to block the anchor to navigate if the link is disabled
	   *
	   * @type {function}
	   * @param {Event} $event Click event object
	   * @param {boolean} isDisabled Flag from the statement object
	   * @returns {boolean}
	   */
	  var blockIfDisabled = function blockIfDisabled($event, isDisabled) {
	    return isDisabled && $event.preventDefault();
	  };
	
	  return {
	    headers: headers,
	    formatsMap: formatsMap,
	    removeNotification: removeNotification,
	    isSortableActive: isSortableActive,
	    labels: labels,
	    searchBox: searchBox,
	    onAccountSelect: onAccountSelect,
	    toggleFiltering: toggleFiltering,
	    getDocumentLink: getDocumentLink,
	    blockIfDisabled: blockIfDisabled
	  };
	};
	
	/**
	 * Helpers for ext-bus-account-statements-ng
	 * @name Helpers
	 * @type {Object}
	 */
	exports.default = helpers;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var Event = {
	  ACCOUNT_STATEMENT_DOWNLOAD_FAIL: 'bb.event.account.statement.download.fail',
	  ACCOUNT_STATEMENT_DOWNLOAD_SUCCESS: 'bb.event.account.statement.download.success'
	};
	
	exports.default = function (_ref) {
	  var _ref2;
	
	  var notifications = _ref.notifications,
	      $filter = _ref.$filter;
	
	  var i18n = $filter('i18n');
	  return _ref2 = {}, _defineProperty(_ref2, Event.ACCOUNT_STATEMENT_DOWNLOAD_FAIL, function () {
	    notifications.notifyAlert(i18n('notification.download.fail'));
	  }), _defineProperty(_ref2, Event.ACCOUNT_STATEMENT_DOWNLOAD_SUCCESS, function () {
	    notifications.notifySuccess(i18n('notification.download.success'));
	  }), _ref2;
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bus-account-statements-ng.js.map