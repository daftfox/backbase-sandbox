(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-format-amount"), require("ui-bb-i18n-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-transactions-details-ng", ["ui-bb-format-amount", "ui-bb-i18n-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-transactions-details-ng"] = factory(require("ui-bb-format-amount"), require("ui-bb-i18n-ng"));
	else
		root["ext-bbm-transactions-details-ng"] = factory(root["ui-bb-format-amount"], root["ui-bb-i18n-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__) {
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

	module.exports = __webpack_require__(35);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.intents = exports.helpers = undefined;
	
	var _uiBbFormatAmount = __webpack_require__(3);
	
	var _uiBbFormatAmount2 = _interopRequireDefault(_uiBbFormatAmount);
	
	var _uiBbI18nNg = __webpack_require__(5);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _helpers = __webpack_require__(36);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _intents = __webpack_require__(38);
	
	var _intents2 = _interopRequireDefault(_intents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bbm-transactions-details-ng
	 *
	 * @description
	 * Transaction details view for the widget-bbm-transactions-ng.
	 *
	 * @example
	 * <!-- transactions widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bbm-transactions-details-ng</value>
	 * </property>
	 */
	var helpers = exports.helpers = _helpers2.default;
	var intents = exports.intents = _intents2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbFormatAmount2.default, _uiBbI18nNg2.default];

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _debitCreditSign = __webpack_require__(37);
	
	/**
	 * @name getTransactionToDisplay
	 * @description
	 * Processes the list of transactions.
	 *
	 * @type {function}
	 * @param {Object} transaction The original transaction from the API
	 * @returns {Object} The processed transaction
	 * @inner
	 */
	var getTransactionToDisplay = function getTransactionToDisplay(transaction) {
	  return Object.assign({}, transaction, {
	    amount: transaction.amount * (transaction.creditDebitIndicator === _debitCreditSign.negativeSignKey ? -1 : 1)
	  });
	}; /**
	    * @name Helpers
	    * @type {Object}
	    * @description
	    * Helpers for ext-bbm-transactions-details-ng
	    */
	
	exports.default = function (_ref) {
	  var stateContainer = _ref.stateContainer;
	
	  /**
	   * @description
	   * Returns the current `transaction` from the state
	   *
	   * @name Helpers#getTransaction
	   * @type {function}
	   * @returns {Object} transactions Transaction from the state
	   */
	  var getTransaction = stateContainer.createSelector(function (state) {
	    return getTransactionToDisplay(state.transaction.data);
	  });
	
	  return {
	    getTransaction: getTransaction
	  };
	};

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var positiveSignKey = exports.positiveSignKey = 'CRDT';
	var negativeSignKey = exports.negativeSignKey = 'DBIT';
	
	var creditDebitKeysToSign = {};
	creditDebitKeysToSign[positiveSignKey] = '+';
	creditDebitKeysToSign[negativeSignKey] = '-';
	
	/**
	 * @description
	 * Adds debitCreditSign property to transaction object based on debitCreditIndicator key
	 *
	 * @param {Object} transaction Transaction object
	 * @returns {Object} new copy of Transaction object
	 */
	
	exports.default = function (transaction) {
	  return Object.assign({
	    debitCreditSign: creditDebitKeysToSign[transaction.creditDebitIndicator]
	  }, transaction);
	};

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(39);
	
	/**
	 * @name Intents
	 * @type {Object}
	 */
	exports.default = function (_ref) {
	  var handleRequest = _ref.handleRequest,
	      service = _ref.service;
	  return {
	    /**
	     * @name Intents#showTransactionDetails
	     * @description Handles the intent to show the transaction details
	     * @type {function}
	     */
	    showTransactionDetails: handleRequest(_constants.Intent.SHOW_TRANSACTION_DETAILS, function (transaction) {
	      if (transaction) {
	        service.setSelectedTransaction(transaction);
	      } else {
	        throw new Error('Transaction is undefined. Please pass a transaction object as the payload of the intent');
	      }
	    })
	  };
	};

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable import/prefer-default-export */
	/**
	 * Intents enum
	 * @name Intent
	 * @type {Object}
	 * @inner
	 */
	var Intent = exports.Intent = {
	  SHOW_TRANSACTION_DETAILS: 'intent.rbm.transactions.details.show'
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bbm-transactions-details-ng.js.map