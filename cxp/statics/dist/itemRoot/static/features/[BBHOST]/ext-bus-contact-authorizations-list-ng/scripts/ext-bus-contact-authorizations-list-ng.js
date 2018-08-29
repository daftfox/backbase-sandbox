(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-inline-status-ng"), require("ui-bb-confirm-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-iban-ng"), require("ui-bb-i18n-ng"), require("ui-bb-load-more-ng"), require("vendor-bb-angular-ng-messages"), require("vendor-bb-angular-ng-aria"), require("ui-bb-loading-overlay-ng"), require("ui-bb-country-ng"), require("ui-bb-focus-ng"), require("ui-bb-paginator-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bus-contact-authorizations-list-ng", ["ui-bb-inline-status-ng", "ui-bb-confirm-ng", "ui-bb-substitute-error-ng", "ui-bb-notification-stripe-ng", "ui-bb-iban-ng", "ui-bb-i18n-ng", "ui-bb-load-more-ng", "vendor-bb-angular-ng-messages", "vendor-bb-angular-ng-aria", "ui-bb-loading-overlay-ng", "ui-bb-country-ng", "ui-bb-focus-ng", "ui-bb-paginator-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bus-contact-authorizations-list-ng"] = factory(require("ui-bb-inline-status-ng"), require("ui-bb-confirm-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-iban-ng"), require("ui-bb-i18n-ng"), require("ui-bb-load-more-ng"), require("vendor-bb-angular-ng-messages"), require("vendor-bb-angular-ng-aria"), require("ui-bb-loading-overlay-ng"), require("ui-bb-country-ng"), require("ui-bb-focus-ng"), require("ui-bb-paginator-ng"));
	else
		root["ext-bus-contact-authorizations-list-ng"] = factory(root["ui-bb-inline-status-ng"], root["ui-bb-confirm-ng"], root["ui-bb-substitute-error-ng"], root["ui-bb-notification-stripe-ng"], root["ui-bb-iban-ng"], root["ui-bb-i18n-ng"], root["ui-bb-load-more-ng"], root["vendor-bb-angular-ng-messages"], root["vendor-bb-angular-ng-aria"], root["ui-bb-loading-overlay-ng"], root["ui-bb-country-ng"], root["ui-bb-focus-ng"], root["ui-bb-paginator-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_40__, __WEBPACK_EXTERNAL_MODULE_41__) {
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

	module.exports = __webpack_require__(38);

/***/ }),
/* 1 */,
/* 2 */,
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
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.events = exports.helpers = exports.hooks = undefined;
	
	var _uiBbInlineStatusNg = __webpack_require__(3);
	
	var _uiBbInlineStatusNg2 = _interopRequireDefault(_uiBbInlineStatusNg);
	
	var _uiBbConfirmNg = __webpack_require__(4);
	
	var _uiBbConfirmNg2 = _interopRequireDefault(_uiBbConfirmNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(5);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbNotificationStripeNg = __webpack_require__(6);
	
	var _uiBbNotificationStripeNg2 = _interopRequireDefault(_uiBbNotificationStripeNg);
	
	var _uiBbIbanNg = __webpack_require__(7);
	
	var _uiBbIbanNg2 = _interopRequireDefault(_uiBbIbanNg);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbLoadMoreNg = __webpack_require__(9);
	
	var _uiBbLoadMoreNg2 = _interopRequireDefault(_uiBbLoadMoreNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(15);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBbCountryNg = __webpack_require__(39);
	
	var _uiBbCountryNg2 = _interopRequireDefault(_uiBbCountryNg);
	
	var _uiBbFocusNg = __webpack_require__(40);
	
	var _uiBbFocusNg2 = _interopRequireDefault(_uiBbFocusNg);
	
	var _vendorBbAngularNgMessages = __webpack_require__(12);
	
	var _vendorBbAngularNgMessages2 = _interopRequireDefault(_vendorBbAngularNgMessages);
	
	var _vendorBbAngularNgAria = __webpack_require__(13);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbPaginatorNg = __webpack_require__(41);
	
	var _uiBbPaginatorNg2 = _interopRequireDefault(_uiBbPaginatorNg);
	
	var _hooks = __webpack_require__(42);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	var _helpers = __webpack_require__(43);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _events = __webpack_require__(44);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bus-contact-authorizations-list-ng
	 *
	 * @description
	 * Business banking extension for a contact approvals list in a contact approvals widget.
	 * Shows list of contact approvals which not yet authorized or rejected.
	 */
	var hooks = exports.hooks = extHooks;
	var helpers = exports.helpers = _helpers2.default;
	var events = exports.events = _events2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbInlineStatusNg2.default, _uiBbConfirmNg2.default, _uiBbSubstituteErrorNg2.default, _uiBbNotificationStripeNg2.default, _uiBbIbanNg2.default, _uiBbI18nNg2.default, _uiBbLoadMoreNg2.default, _uiBbLoadingOverlayNg2.default, _uiBbFocusNg2.default, _vendorBbAngularNgMessages2.default, _vendorBbAngularNgAria2.default, _uiBbCountryNg2.default, _uiBbPaginatorNg2.default];

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_40__;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_41__;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.processApprovals = processApprovals;
	exports.getSelectedApproval = getSelectedApproval;
	/**
	 * @name getApprovalContactNameChar
	 * @type {function}
	 *
	 * @description
	 * Returns first letter of the Approval contact's name, uppercased
	 *
	 * @param  {object} contact Approval object
	 * @return {string} Approval contact's first letter
	 * @inner
	 */
	function getApprovalContactNameChar(approval) {
	  return approval.data && approval.data.name ? approval.data.name.charAt(0).toUpperCase() : null;
	}
	
	/**
	 * @name groupApprovals
	 * @type {function}
	 *
	 * @description
	 * Groups approvals by first char of the contact name
	 *
	 * @param  {array} approvals Approvals array
	 * @return {object} Grouped approvals
	 * @inner
	 */
	function groupApprovals(approvals) {
	  return approvals.reduce(function (groups, approval) {
	    var char = getApprovalContactNameChar(approval);
	    if (!groups[char]) {
	      // Allow mutation of a local empty object
	      // See: https://github.com/airbnb/javascript/issues/719
	      // eslint-disable-next-line no-param-reassign
	      groups[char] = [];
	    }
	
	    groups[char].push(approval);
	    return groups;
	  }, {});
	}
	
	/**
	 * @name processApprovals
	 * @type {function}
	 *
	 * @description
	 * processApprovals default hook
	 *
	 * @param {array.<object>} approvals Raw approvals collection
	 * @returns {array.<object>} Processed approvals
	 */
	function processApprovals() {
	  var approvals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	  var groups = groupApprovals(approvals);
	  return Object.keys(groups).map(function (char) {
	    return {
	      char: char,
	      approvals: groups[char].splice(0)
	    };
	  });
	}
	
	/**
	 * @name getSelectedContact
	 * @type {function}
	 *
	 * @description
	 * Selects the contact from contacts by id
	 * Or returns null if nothing is found
	 *
	 * @param {array} contacts Array of contacts
	 * @param {object} contact Contact object
	 * @returns {object|null} Returns found contact or null
	 */
	function getSelectedApproval() {
	  var approvalGroups = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var approval = arguments[1];
	
	  var firstApproval = Array.isArray(approvalGroups) && approvalGroups[0] ? approvalGroups[0].approvals[0] : null;
	  // decoupling original contact approval list from selected approval
	  firstApproval = firstApproval ? Object.assign({}, firstApproval) : null;
	
	  if (!approval) {
	    return firstApproval;
	  }
	
	  var char = getApprovalContactNameChar(approval);
	  var group = approvalGroups.find(function (approvalGroup) {
	    return approvalGroup.char === char;
	  });
	  var foundApproval = group ? group.approvals.find(function (item) {
	    return item.id === approval.id;
	  }) : null;
	  return foundApproval ? Object.assign({}, foundApproval) : firstApproval;
	}

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var helpers = function helpers(context) {
	  var filter = context.$filter;
	
	  var getAddressProperties = function getAddressProperties(prefix) {
	    return ['Line1', 'Line2', 'Line3', 'Line4'].map(function (prop) {
	      return prefix + prop;
	    });
	  };
	
	  var getAllProperties = function getAllProperties(prefix, props) {
	    return props.includes('address') ? props.concat(getAddressProperties(prefix)) : props;
	  };
	
	  var notEmptyFilter = function notEmptyFilter(value) {
	    return !!value;
	  };
	
	  return {
	    onListClick: function onListClick(ext, $ctrl) {
	      if (ext.selectedApproval) {
	        $ctrl.selectApproval(ext.selectedApproval);
	      }
	    },
	
	    showContactBlock: function showContactBlock($ctrl) {
	      var contactProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	      return getAllProperties('address', contactProperties).some(function (prop) {
	        return !!$ctrl.state.approval.data.data[prop];
	      });
	    },
	
	    showAccountBlock: function showAccountBlock(account) {
	      var accountProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	      return getAllProperties('bankAddress', accountProperties).some(function (prop) {
	        return !!account[prop];
	      });
	    },
	
	    getContactAddress: function getContactAddress(dataObj) {
	      return getAddressProperties('address').map(function (prop) {
	        return dataObj[prop];
	      }).filter(function (address) {
	        return !!address;
	      }).join(', ');
	    },
	
	    getAccountAddress: function getAccountAddress(account) {
	      return getAddressProperties('bankAddress').map(function (prop) {
	        return account[prop];
	      }).concat(filter('country')(account.bankCountry)).filter(notEmptyFilter).join(', ');
	    },
	
	    getAccountBank: function getAccountBank(account) {
	      var bankCode = [account.BIC, account.bankCode].filter(notEmptyFilter).join(' - ');
	
	      return [account.bankName, bankCode ? '(' + bankCode + ')' : null].filter(notEmptyFilter).join(' ');
	    },
	
	    /**
	     * @description
	     * Checkes if actual pagination type matches the one, defined in properties
	     *
	     * @public
	     * @name isPaginationTypeMatch
	     * @type {function}
	     * @param {function} $ctrl Current controller
	     * @param {string} type Description of pagination type (pagination, load-more)
	     *
	     * @returns {boolean}
	     */
	    isPaginationTypeMatch: function isPaginationTypeMatch($ctrl, type) {
	      return $ctrl.state.pageParams.paginationType === type;
	    },
	
	    /**
	     * @name filterNotification
	     *
	     * @description
	     * Helper to filter out notification from the list
	     *
	     * @param {object} notification
	     * @param {array} notificationsList
	     * @type {function}
	     * @returns {null}
	     */
	    filterNotification: function filterNotification(notification, notificationsList) {
	      return notificationsList.filter(function (item) {
	        return item !== notification;
	      });
	    }
	  };
	};
	
	exports.default = helpers;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var Event = {
	  CONTACT_AUTH_SUCCESS: 'bb.event.contact-approvals.auth.success',
	  CONTACT_AUTH_FAIL: 'bb.event.contact-approvals.auth.fail',
	  CONTACT_REJECT_SUCCESS: 'bb.event.contact-approvals.reject.success',
	  CONTACT_REJECT_FAIL: 'bb.event.contact-approvals.reject.fail',
	  CONTACT_SERVER_ERROR: 'bb.event.contact-approvals.server.error'
	};
	
	exports.default = function (_ref) {
	  var _ref2;
	
	  var notifications = _ref.notifications,
	      $filter = _ref.$filter;
	
	  var i18n = $filter('i18n');
	  return _ref2 = {}, _defineProperty(_ref2, Event.CONTACT_AUTH_SUCCESS, function () {
	    notifications.notifySuccess(i18n('notification.auth.success'));
	  }), _defineProperty(_ref2, Event.CONTACT_AUTH_FAIL, function () {
	    notifications.notifyAlert(i18n('notification.auth.fail'));
	  }), _defineProperty(_ref2, Event.CONTACT_REJECT_SUCCESS, function () {
	    notifications.notifySuccess(i18n('notification.reject.success'));
	  }), _defineProperty(_ref2, Event.CONTACT_REJECT_FAIL, function () {
	    notifications.notifyAlert(i18n('notification.reject.fail'));
	  }), _defineProperty(_ref2, Event.CONTACT_SERVER_ERROR, function () {
	    notifications.notifyAlert(i18n('notification.server.error'));
	  }), _ref2;
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bus-contact-authorizations-list-ng.js.map