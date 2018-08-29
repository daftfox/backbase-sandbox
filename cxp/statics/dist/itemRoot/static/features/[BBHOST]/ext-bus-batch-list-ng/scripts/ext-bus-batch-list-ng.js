(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-inline-status-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-sortable-column-ng"), require("ui-bb-load-more-ng"), require("ui-bb-ellipsis-tooltip-ng"), require("ui-bb-confirm-ng"), require("ui-bb-paginator-ng"), require("ui-bb-loading-overlay-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bus-batch-list-ng", ["vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "ui-bb-inline-status-ng", "ui-bb-notification-stripe-ng", "ui-bb-sortable-column-ng", "ui-bb-load-more-ng", "ui-bb-ellipsis-tooltip-ng", "ui-bb-confirm-ng", "ui-bb-paginator-ng", "ui-bb-loading-overlay-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bus-batch-list-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-inline-status-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-sortable-column-ng"), require("ui-bb-load-more-ng"), require("ui-bb-ellipsis-tooltip-ng"), require("ui-bb-confirm-ng"), require("ui-bb-paginator-ng"), require("ui-bb-loading-overlay-ng"));
	else
		root["ext-bus-batch-list-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["ui-bb-inline-status-ng"], root["ui-bb-notification-stripe-ng"], root["ui-bb-sortable-column-ng"], root["ui-bb-load-more-ng"], root["ui-bb-ellipsis-tooltip-ng"], root["ui-bb-confirm-ng"], root["ui-bb-paginator-ng"], root["ui-bb-loading-overlay-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__) {
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

	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.helpers = exports.events = exports.hooks = exports.dependencyKeys = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(2);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbI18nNg = __webpack_require__(3);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbInlineStatusNg = __webpack_require__(4);
	
	var _uiBbInlineStatusNg2 = _interopRequireDefault(_uiBbInlineStatusNg);
	
	var _uiBbNotificationStripeNg = __webpack_require__(5);
	
	var _uiBbNotificationStripeNg2 = _interopRequireDefault(_uiBbNotificationStripeNg);
	
	var _uiBbSortableColumnNg = __webpack_require__(6);
	
	var _uiBbSortableColumnNg2 = _interopRequireDefault(_uiBbSortableColumnNg);
	
	var _uiBbLoadMoreNg = __webpack_require__(7);
	
	var _uiBbLoadMoreNg2 = _interopRequireDefault(_uiBbLoadMoreNg);
	
	var _uiBbEllipsisTooltipNg = __webpack_require__(8);
	
	var _uiBbEllipsisTooltipNg2 = _interopRequireDefault(_uiBbEllipsisTooltipNg);
	
	var _uiBbConfirmNg = __webpack_require__(9);
	
	var _uiBbConfirmNg2 = _interopRequireDefault(_uiBbConfirmNg);
	
	var _uiBbPaginatorNg = __webpack_require__(10);
	
	var _uiBbPaginatorNg2 = _interopRequireDefault(_uiBbPaginatorNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(11);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _hooks = __webpack_require__(12);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	var _events = __webpack_require__(13);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _helpers = __webpack_require__(14);
	
	var extHelpers = _interopRequireWildcard(_helpers);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbI18nNg2.default, _uiBbInlineStatusNg2.default, _uiBbNotificationStripeNg2.default, _uiBbSortableColumnNg2.default, _uiBbLoadMoreNg2.default, _uiBbEllipsisTooltipNg2.default, _uiBbConfirmNg2.default, _uiBbPaginatorNg2.default, _uiBbLoadingOverlayNg2.default]; /**
	                                                                                                                                                                                                                                                                                                                                                         * @module ext-bus-batch-list-ng
	                                                                                                                                                                                                                                                                                                                                                         *
	                                                                                                                                                                                                                                                                                                                                                         * @description
	                                                                                                                                                                                                                                                                                                                                                         * Default extension for batch list.
	                                                                                                                                                                                                                                                                                                                                                         *
	                                                                                                                                                                                                                                                                                                                                                         * @requires vendor-bb-angular-ng-aria
	                                                                                                                                                                                                                                                                                                                                                         * @requires ui-bb-i18n-ng
	                                                                                                                                                                                                                                                                                                                                                         * @requires ui-bb-inline-status-ng
	                                                                                                                                                                                                                                                                                                                                                         * @requires ui-bb-notification-stripe-ng
	                                                                                                                                                                                                                                                                                                                                                         * @requires ui-bb-sortable-column-ng
	                                                                                                                                                                                                                                                                                                                                                         * @requires ui-bb-load-more-ng
	                                                                                                                                                                                                                                                                                                                                                         *
	                                                                                                                                                                                                                                                                                                                                                         */
	var hooks = exports.hooks = extHooks;
	var events = exports.events = _events2.default;
	var helpers = exports.helpers = extHelpers;

/***/ }),
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

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name processBatches
	 *
	 * @description
	 * Apply transformations to the batches collection to show in
	 * the template
	 *
	 * @param {array} contacts Array of batches
	 * @type {function}
	 * @returns {array} Returns transformed array of batches
	 */
	var processBatches = exports.processBatches = function processBatches(batches) {
	  return batches.map(function (batch) {
	    return Object.assign({}, batch, {
	      user: (batch.creationUser.firstName || '') + ' ' + (batch.creationUser.lastName || '')
	    });
	  });
	};
	
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
	  return 'creationDate';
	};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var Event = {
	  BATCH_AUTH_SUCCESS: 'bb.event.batch.auth.success',
	  BATCH_AUTH_FAIL: 'bb.event.batch.auth.fail',
	  BATCH_AUTH_MULTIPLE_SUCCESS: 'bb.event.batch.multiple.auth.success',
	  BATCH_AUTH_MULTIPLE_FAIL: 'bb.event.batch.multiple.auth.fail',
	  BATCH_REJECT_SUCCESS: 'bb.event.batch.reject.success',
	  BATCH_REJECT_FAIL: 'bb.event.batch.reject.fail',
	  BATCH_REJECT_MULTIPLE_SUCCESS: 'bb.event.batch.multiple.reject.success',
	  BATCH_REJECT_MULTIPLE_FAIL: 'bb.event.batch.multiple.reject.fail',
	  NOTIFICATION_EVENT: 'bb.event.notifications.notify'
	};
	
	exports.default = function (_ref) {
	  var _ref2;
	
	  var notifications = _ref.notifications,
	      $filter = _ref.$filter;
	
	  var i18n = $filter('i18n');
	  return _ref2 = {}, _defineProperty(_ref2, Event.BATCH_AUTH_SUCCESS, function () {
	    notifications.notifySuccess(i18n('notification.auth.success'));
	  }), _defineProperty(_ref2, Event.BATCH_AUTH_FAIL, function () {
	    notifications.notifyAlert(i18n('notification.auth.fail'));
	  }), _defineProperty(_ref2, Event.BATCH_AUTH_MULTIPLE_SUCCESS, function (num) {
	    notifications.notifySuccess(i18n('notification.auth.multiple.success', { number: num }));
	  }), _defineProperty(_ref2, Event.BATCH_AUTH_MULTIPLE_FAIL, function (num) {
	    notifications.notifyAlert(i18n('notification.auth.multiple.fail', { number: num }));
	  }), _defineProperty(_ref2, Event.BATCH_REJECT_SUCCESS, function () {
	    notifications.notifySuccess(i18n('notification.reject.success'));
	  }), _defineProperty(_ref2, Event.BATCH_REJECT_FAIL, function () {
	    notifications.notifyAlert(i18n('notification.reject.fail'));
	  }), _defineProperty(_ref2, Event.BATCH_REJECT_MULTIPLE_SUCCESS, function (num) {
	    notifications.notifySuccess(i18n('notification.reject.multiple.success', { number: num }));
	  }), _defineProperty(_ref2, Event.BATCH_REJECT_MULTIPLE_FAIL, function (num) {
	    notifications.notifyAlert(i18n('notification.reject.multiple.fail', { number: num }));
	  }), _ref2;
	};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name isSelected
	 *
	 * @description
	 * Helper to know if the batch is selected.
	 *
	 * @param {string} id
	 * @param {object} selState
	 * @type {function}
	 * @returns {boolean}
	 */
	var isSelected = exports.isSelected = function isSelected(id, selState) {
	  return selState.selectedBatches.some(function (item) {
	    return item === id;
	  });
	};
	
	/**
	 * @name isAnySelected
	 *
	 * @description
	 * Helper to know if any batch is selected.
	 *
	 * @param {object} selState
	 * @type {function}
	 * @returns {boolean}
	 */
	var isAnySelected = exports.isAnySelected = function isAnySelected(selState) {
	  return selState.selectedBatches.length > 0;
	};
	
	/**
	 * @name howManySelected
	 *
	 * @description
	 * Helper to know how many payments are selected.
	 *
	 * @param {object} selState
	 * @type {function}
	 * @returns {boolean}
	 */
	var howManySelected = exports.howManySelected = function howManySelected(selState) {
	  return selState.selectedBatches.length;
	};
	
	/**
	 * @name isSelectedAllStrict
	 * @inner
	 *
	 * @description
	 * Strictly compare selected items ids and model list
	 *
	 * @param {array} batches
	 * @param {object} selState
	 * @type {function}
	 * @returns {boolean}
	 */
	var isSelectedAllStrict = function isSelectedAllStrict(batches, selState) {
	  var selected = selState.selectedBatches;
	
	  if (batches.length !== selected.length) {
	    return false;
	  }
	
	  var matches = batches.filter(function (item) {
	    return selected.indexOf(item.id) !== -1;
	  });
	  return matches.length === batches.length;
	};
	
	/**
	 * @name isSelectedAll
	 *
	 * @description
	 * Helper to know if all bacthes are selected.
	 *
	 * @param {array} batches
	 * @param {object} selState
	 * @type {function}
	 * @returns {boolean}
	 */
	var isSelectedAll = exports.isSelectedAll = function isSelectedAll(batches, selState) {
	  return batches && batches.length > 0 && isSelectedAllStrict(batches, selState);
	};
	
	/**
	 * @name isSelectedPart
	 *
	 * @description
	 * Helper to know if at least one batch is selected.
	 *
	 * @param {array} batches
	 * @param {object} selState
	 * @type {function}
	 * @returns {boolean}
	 */
	var isSelectedPart = exports.isSelectedPart = function isSelectedPart(batches, selState) {
	  return isAnySelected(selState) && !isSelectedAll(batches, selState);
	};
	
	/**
	 * @name toggleAllBatches
	 *
	 * @description
	 * Helper to select/deselect all batches loaded.
	 *
	 * @param {array} batches
	 * @param {object} selState
	 * @type {function}
	 * @returns {null}
	 */
	var toggleAllBatches = exports.toggleAllBatches = function toggleAllBatches(bacthes, selState) {
	  var state = selState;
	  if (isSelectedAll(bacthes, selState)) {
	    state.selectedBatches = [];
	  } else {
	    state.selectedBatches = bacthes.map(function (item) {
	      return item.id;
	    });
	  }
	};
	
	/**
	 * @name deselectBatches
	 *
	 * @description
	 * Helper to deselect all batches selected.
	 *
	 * @param {object} selState
	 * @type {function}
	 * @returns {null}
	 */
	var deselectBatches = exports.deselectBatches = function deselectBatches(selState) {
	  var state = selState;
	  state.selectedBatches = [];
	};
	
	/**
	 * @name toggleSelection
	 *
	 * @description
	 * Helper to select/deselect single batch.
	 *
	 * @param {string} id
	 * @param {object} selState
	 * @type {function}
	 * @returns {null}
	 */
	var toggleSelection = exports.toggleSelection = function toggleSelection(id, selState) {
	  var state = selState;
	
	  if (isSelected(id, state)) {
	    state.selectedBatches = state.selectedBatches.filter(function (item) {
	      return item !== id;
	    });
	  } else {
	    state.selectedBatches.push(id);
	  }
	};
	
	var headers = exports.headers = [{
	  label: 'label.status',
	  class: '',
	  sortable: {
	    key: 'status',
	    direction: 'ASC'
	  }
	}, {
	  label: 'label.type',
	  class: '',
	  sortable: {
	    key: 'type',
	    direction: 'ASC'
	  }
	}, {
	  label: 'label.paymentOrders',
	  class: 'text-left',
	  sortable: {
	    key: 'paymentsCount',
	    direction: 'ASC'
	  }
	}, {
	  label: 'label.currency',
	  class: '',
	  sortable: {
	    key: 'currency',
	    direction: 'ASC'
	  }
	}, {
	  label: 'label.amount',
	  class: 'text-right',
	  sortable: {
	    key: 'amount',
	    direction: 'DESC'
	  }
	}, {
	  label: 'label.executionDate',
	  class: 'text-right',
	  sortable: {
	    key: 'executionDate',
	    direction: 'DESC'
	  }
	}, {
	  label: 'label.uploadedBy',
	  class: '',
	  sortable: {
	    key: 'creationUser',
	    direction: 'ASC'
	  }
	}, {
	  label: 'label.uploadedOn',
	  class: 'text-right',
	  sortable: {
	    key: 'creationDate',
	    direction: 'DESC'
	  }
	}];
	
	var isSortableActive = exports.isSortableActive = function isSortableActive(sortable, $ctrl) {
	  return sortable && sortable.key === $ctrl.state.batches.orderBy;
	};
	
	/**
	 * @name canAuthorize
	 * @type {function}
	 *
	 * @description
	 * Helper to check if the batch status envisages
	 * authorization
	 *
	 * @param {object} batch
	 */
	var canAuthorize = exports.canAuthorize = function canAuthorize(batch) {
	  return batch.status === 'UNAUTHORIZED' || batch.status === 'PARTIALLY_AUTHORIZED';
	};
	
	/**
	 * @name filterBatches
	 * @type {function}
	 *
	 * @description
	 * Helper to filter out authorized batches
	 *
	 * @param {array} batches
	 */
	var filterBatches = exports.filterBatches = function filterBatches(batches) {
	  return batches.filter(canAuthorize);
	};
	
	var statusTranslationKeys = {
	  large: {
	    UNAUTHORIZED: 'unauthorized',
	    PARTIALLY_AUTHORIZED: 'partiallyAuthorized',
	    AUTHORIZED: 'authorized',
	    REJECTED_BY_USER: 'rejected.user'
	  },
	  small: {
	    UNAUTHORIZED: 'U',
	    PARTIALLY_AUTHORIZED: 'PA',
	    AUTHORIZED: 'A',
	    REJECTED_BY_USER: 'R'
	  }
	};
	
	/**
	 * @name getStatusLabel
	 * @type {function}
	 *
	 * @description
	 * Helper to get status label
	 *
	 * @param {string} status Direct debit status
	 * @param {string} type of status label (small, large)
	 *
	 * @returns {string} Translation key for status label
	 */
	var getStatusLabel = exports.getStatusLabel = function getStatusLabel(status) {
	  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'large';
	  return 'value.' + statusTranslationKeys[type][status];
	};
	
	/**
	 * @name removeNotification
	 *
	 * @description
	 * Helper to remove notification from the list
	 *
	 * @param {object} notification
	 * @param {array} notificationsList
	 * @type {function}
	 * @returns {null}
	 */
	var removeNotification = exports.removeNotification = function removeNotification(notification, notificationsList) {
	  return notificationsList.filter(function (item) {
	    return item !== notification;
	  });
	};
	
	/**
	 * @description
	 * Checkes if actual pagination type matches the one, defined in properties
	 *
	 * @public
	 * @name isPaginationTypeMatch
	 * @type {function}
	 * @param {function} $ctrl      Current controller
	 * @param {string} type         Description of pagination type (pagination, load-more)
	 *
	 * @returns {boolean}
	 */
	var isPaginationTypeMatch = exports.isPaginationTypeMatch = function isPaginationTypeMatch($ctrl, type) {
	  return $ctrl.state.pageParams.paginationType === type;
	};
	
	/**
	 * @name openRejectConfirmDialog
	 * @description
	 * Fixes in context currently selected batchId and opens reject confirmation dialog
	 * @type {function}
	 * @public
	 * @param {object} ext Extension scope object
	 * @param {string} batchId Id of the batch to reject
	 */
	var openRejectConfirmDialog = exports.openRejectConfirmDialog = function openRejectConfirmDialog(ext, batchId) {
	  /* eslint-disable no-param-reassign */
	  ext.batchId = batchId;
	  ext.rejectBatchModalOpened = true;
	  /* eslint-enable no-param-reassign */
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bus-batch-list-ng.js.map