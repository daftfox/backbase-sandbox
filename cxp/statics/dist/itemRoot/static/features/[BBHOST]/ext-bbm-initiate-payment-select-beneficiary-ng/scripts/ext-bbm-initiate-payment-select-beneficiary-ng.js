(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-format-amount-ng"), require("ui-bb-avatar-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-initiate-payment-select-beneficiary-ng", ["ui-bb-format-amount-ng", "ui-bb-avatar-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-initiate-payment-select-beneficiary-ng"] = factory(require("ui-bb-format-amount-ng"), require("ui-bb-avatar-ng"));
	else
		root["ext-bbm-initiate-payment-select-beneficiary-ng"] = factory(root["ui-bb-format-amount-ng"], root["ui-bb-avatar-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_71__) {
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

	module.exports = __webpack_require__(70);

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.intents = exports.hooks = exports.helpers = exports.events = undefined;
	
	var _uiBbAvatarNg = __webpack_require__(71);
	
	var _uiBbAvatarNg2 = _interopRequireDefault(_uiBbAvatarNg);
	
	var _uiBbFormatAmountNg = __webpack_require__(15);
	
	var _uiBbFormatAmountNg2 = _interopRequireDefault(_uiBbFormatAmountNg);
	
	var _helpers = __webpack_require__(72);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _intents = __webpack_require__(73);
	
	var _intents2 = _interopRequireDefault(_intents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bbm-initiate-payment-select-account-ng
	 *
	 * @description
	 * Mobile extension for the payment select account page in the Mobile initiate payment widget.
	 * Renders either a list of debit accounts, or a list of credit accounts and contacts.
	 *
	 * @example
	 * <!-- File model.xml of widget-bbm-initiate-payment-ng -->
	 * <property name="extension" viewHint="text-input,admin">
	 *   <value type="string">ext-bbm-initiate-payment-select-account-ng</value>
	 * </property>
	 */
	var events = exports.events = {};
	var helpers = exports.helpers = _helpers2.default;
	var hooks = exports.hooks = {};
	var intents = exports.intents = _intents2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbAvatarNg2.default, _uiBbFormatAmountNg2.default];

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_71__;

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @description
	 * Helpers for ext-bbm-initiate-payment-select-account-ng
	 *
	 * @name Helpers
	 * @type {Object}
	 */
	exports.default = function (_ref) {
	  var intents = _ref.intents,
	      stateContainer = _ref.stateContainer;
	
	  var getBeneficiaries = stateContainer.createSelector(function (state) {
	    return state.beneficiaries.data;
	  });
	
	  var groupContacts = function groupContacts(contacts) {
	    return contacts.reduce(function (result, contact) {
	      var char = contact.name.charAt(0).toUpperCase();
	
	      if (!result[char]) {
	        // Allow mutation of a local empty object
	        // See: https://github.com/airbnb/javascript/issues/719
	        // eslint-disable-next-line no-param-reassign
	        result[char] = [];
	      }
	
	      result[char].push(contact);
	
	      return result;
	    }, {});
	  };
	
	  var processContacts = function processContacts(contacts) {
	    var groups = groupContacts(contacts);
	    return Object.keys(groups).sort().map(function (char) {
	      return {
	        contacts: groups[char],
	        char: char
	      };
	    });
	  };
	
	  /**
	   * @name Helpers#getAccountDisplayName
	   * @type {function}
	   * @description
	   * Returns a string that will be displayed as a name of the given payment.
	   * @param {module:widget-bbm-initiate-payment-ng.AccountView} account Account to display
	   * @returns {string}
	   */
	  var getAccountDisplayName = function getAccountDisplayName(account) {
	    return account.alias || account.name || '';
	  };
	
	  /**
	   * @name Helpers#getCreditAccounts
	   * @type {function}
	   * @description
	   * Returns the list of credit accounts.
	   * @returns {module:widget-bbm-initiate-payment-ng.AccountView}
	   */
	  var getCreditAccounts = stateContainer.createSelector(function () {
	    return getBeneficiaries() ? getBeneficiaries().creditAccounts : null;
	  });
	
	  /**
	   * @name Helpers#getContactsAccounts
	   * @type {function}
	   * @description
	   * Returns the list of contacts.
	   * @returns {module:widget-bbm-initiate-payment-ng.AccountView}
	   */
	  var getContacts = stateContainer.createSelector(function () {
	    return processContacts(getBeneficiaries() ? getBeneficiaries().contacts : []);
	  });
	
	  /**
	   * @name Helpers#selectBeneficiary
	   * @type {function}
	   * @description
	   * Selects the given beneficiary
	   * @param {module:widget-bbm-initiate-payment-ng.AccountView} beneficiary
	   */
	  var selectBeneficiary = function selectBeneficiary(beneficiary) {
	    return intents.selectBeneficiary(beneficiary);
	  };
	
	  return {
	    getAccountDisplayName: getAccountDisplayName,
	    getContacts: getContacts,
	    getCreditAccounts: getCreditAccounts,
	    selectBeneficiary: selectBeneficiary
	  };
	};

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(74);
	
	/**
	 * @name Intents
	 * @type {Object}
	 */
	exports.default = function (_ref) {
	  var createRequest = _ref.createRequest,
	      handleRequest = _ref.handleRequest;
	  return {
	    /**
	     * @name Intents#showBeneficiaries
	     * @description The intent to select a beneficiary.
	     * @type {function}
	     */
	    selectBeneficiary: createRequest(_constants.Intent.SELECT_BENEFICIARY),
	
	    /**
	     * @name Intents#showBeneficiaries
	     * @description Handles the intent to show the list of beneficiaries.
	     * @type {function}
	     */
	    showBeneficiaries: handleRequest(_constants.Intent.SHOW_BENEFICIARIES)
	  };
	};

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint import/prefer-default-export: "off" */
	
	/**
	 * Intents
	 * @type {Object}
	 */
	var Intent = exports.Intent = {
	  SELECT_BENEFICIARY: 'intent.rbm.paymentOrder.beneficiary.select',
	  SHOW_BENEFICIARIES: 'intent.rbm.paymentOrder.beneficiaries.show'
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bbm-initiate-payment-select-beneficiary-ng.js.map