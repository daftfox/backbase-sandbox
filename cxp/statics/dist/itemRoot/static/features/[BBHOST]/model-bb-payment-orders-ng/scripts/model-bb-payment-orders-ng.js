(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("data-bb-payment-orders-http-ng"), require("data-bb-product-summary-http-ng"), require("data-bb-contact-http-ng"), require("lib-bb-storage-ng"), require("lib-bb-model-errors"));
	else if(typeof define === 'function' && define.amd)
		define("model-bb-payment-orders-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "data-bb-payment-orders-http-ng", "data-bb-product-summary-http-ng", "data-bb-contact-http-ng", "lib-bb-storage-ng", "lib-bb-model-errors"], factory);
	else if(typeof exports === 'object')
		exports["model-bb-payment-orders-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("data-bb-payment-orders-http-ng"), require("data-bb-product-summary-http-ng"), require("data-bb-contact-http-ng"), require("lib-bb-storage-ng"), require("lib-bb-model-errors"));
	else
		root["model-bb-payment-orders-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["data-bb-payment-orders-http-ng"], root["data-bb-product-summary-http-ng"], root["data-bb-contact-http-ng"], root["lib-bb-storage-ng"], root["lib-bb-model-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_142__, __WEBPACK_EXTERNAL_MODULE_143__, __WEBPACK_EXTERNAL_MODULE_144__, __WEBPACK_EXTERNAL_MODULE_145__, __WEBPACK_EXTERNAL_MODULE_146__, __WEBPACK_EXTERNAL_MODULE_148__) {
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

	module.exports = __webpack_require__(141);

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modelPaymentOrdersKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(142);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _dataBbPaymentOrdersHttpNg = __webpack_require__(143);
	
	var _dataBbPaymentOrdersHttpNg2 = _interopRequireDefault(_dataBbPaymentOrdersHttpNg);
	
	var _dataBbProductSummaryHttpNg = __webpack_require__(144);
	
	var _dataBbProductSummaryHttpNg2 = _interopRequireDefault(_dataBbProductSummaryHttpNg);
	
	var _dataBbContactHttpNg = __webpack_require__(145);
	
	var _dataBbContactHttpNg2 = _interopRequireDefault(_dataBbContactHttpNg);
	
	var _libBbStorageNg = __webpack_require__(146);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _paymentOrders = __webpack_require__(147);
	
	var _paymentOrders2 = _interopRequireDefault(_paymentOrders);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'model-bb-payment-orders-ng'; /**
	                                               * @module model-bb-payment-orders-ng
	                                               *
	                                               * @description
	                                               * Model for widget-bb-payment-orders-ng
	                                               *
	                                               * @example
	                                               * import modelPaymentOrdersModuleKey, { modelPaymentOrdersKey } from 'model-bb-payment-orders-ng';
	                                               *
	                                               * angular
	                                               *   .module('ExampleModule', [
	                                               *     modelPaymentOrdersModuleKey,
	                                               *   ])
	                                               *   .factory('someFactory', [
	                                               *     modelPaymentOrdersKey,
	                                               *     // into
	                                               *     function someFactory(paymentOrdersModel) {
	                                               *       // ...
	                                               *     },
	                                               *   ]);
	                                               */
	var modelPaymentOrdersKey = exports.modelPaymentOrdersKey = moduleKey + ':model';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_dataBbPaymentOrdersHttpNg2.default, _dataBbProductSummaryHttpNg2.default, _dataBbContactHttpNg2.default, _libBbStorageNg2.default, _libBbWidgetNg2.default]).factory(modelPaymentOrdersKey, [_dataBbPaymentOrdersHttpNg.paymentOrdersDataKey, _dataBbProductSummaryHttpNg.productSummaryDataKey, _dataBbContactHttpNg.contactDataKey, _libBbStorageNg.bbStorageServiceKey, _libBbWidgetNg.widgetKey,
	/* into */
	_paymentOrders2.default]).name;

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_142__;

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_143__;

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_144__;

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_145__;

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_146__;

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = paymentOrdersModel;
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbModelErrors = __webpack_require__(148);
	
	var _accountModel = __webpack_require__(149);
	
	var _constants = __webpack_require__(150);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* eslint max-len: ["error", 100, { "ignoreComments": true }]*/
	
	/**
	 * @description
	 * Method to normalize products data
	 *
	 * @inner
	 * @param {object} rawData Raw response data object
	 * @returns {object[]} An array of products
	 */
	var convertToAccountsArray = function convertToAccountsArray(rawData) {
	  return Object.keys(rawData).filter(function (kind) {
	    return rawData[kind].products && rawData[kind].products.length > 0;
	  }).reduce(function (memo, kind) {
	    return memo.concat(rawData[kind].products.map((0, _accountModel.createAccountModel)(kind)));
	  }, []);
	};
	
	/**
	 * @description
	 * Method to format external contacts data as product kind.
	 *
	 * @inner
	 * @param {object} rawData Contact object.
	 * @returns {object} External product object.
	 */
	var convertExternalsToProductKind = function convertExternalsToProductKind(rawData) {
	  return _defineProperty({}, _constants.ExternalType.IDENTIFIER, {
	    name: _constants.ExternalType.NAME,
	    products: rawData,
	    aggregatedBalance: 0.0
	  });
	};
	
	/**
	 * Model factory for model-bb-payment-orders-ng
	 *
	 * @inner
	 * @type {function}
	 * @param {Object} Promise An ES2015 compatible `Promise` object.
	 *
	 * @return {Object}
	 */
	function paymentOrdersModel(paymentOrdersData, productSummaryData, contactData, bbStorage, widget) {
	  /**
	   * @name paymentOrdersModel#createPaymentOrder
	   * @type {function}
	   *
	   * @description
	   * Create new payment order.
	   *
	   * @param {object} paymentOrderParams New payment order data
	   * @returns {Promise.<object>} A Promise with response.
	   */
	  var createPaymentOrder = function createPaymentOrder(paymentOrderParams) {
	    return paymentOrdersData.postPaymentOrdersRecord(paymentOrderParams).catch(function (httpErrorResponse) {
	      var error = (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	      if (httpErrorResponse.status === 403) {
	        Object.assign(error, { breachReport: httpErrorResponse.data.breachReport });
	      }
	      throw error;
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel#getCurrencies
	   * @type {function}
	   *
	   * @description
	   * Get available currencies.
	   *
	   * @returns {Promise.<object[]>} A Promise with response.
	   */
	  var getCurrencies = function getCurrencies() {
	    return paymentOrdersData.getPaymentOrdersCurrencies()
	    // Convert currencies format to the format used in the widgets
	    .then(function (_ref2) {
	      var data = _ref2.data;
	      return data.map(function (_ref3) {
	        var code = _ref3.code;
	        return { name: code };
	      });
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name normalizeArrangementsParameters
	   * @type {Function}
	   * @inner
	   * @param {ArrangementsRequestParameters} parameters Parameters to send in the request
	   * @returns {Object} Normalized arrangements request parameters
	   */
	  var normalizeArrangementsParameters = function normalizeArrangementsParameters(parameters) {
	    var normalizedParameters = _vendorBbAngular2.default.copy(parameters);
	
	    if (normalizedParameters.searchQuery) {
	      normalizedParameters.searchTerm = normalizedParameters.searchQuery;
	      delete normalizedParameters.searchQuery;
	    }
	
	    if (normalizedParameters.query) {
	      normalizedParameters.searchTerm = normalizedParameters.query;
	      delete normalizedParameters.query;
	    }
	
	    return normalizedParameters;
	  };
	
	  /**
	   * @name paymentOrdersModel#getProductSelectedId
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Tries to read selected product id from storage.
	   *
	   * @returns {Promise<?string>} a Promise with ID
	   */
	  var getProductSelectedId = function getProductSelectedId() {
	    return bbStorage.getItem(_constants.BbStorageKeys.PRODUCT_SELECTED);
	  };
	
	  /**
	   * @name paymentOrdersModel#getContextArrangements
	   * @type {function}
	   *
	   * @description
	   * Load contextualized arrangements
	   *
	   * @param {string} context
	   *   Payment context identifier.
	   *   Values can be {@link module:model-bb-payment-orders-ng.Constants#Context}
	   * @param {ArrangementsRequestParameters} params Parameters to send in the request
	   * @param {Boolean} full Flag to return full response with desired headers
	   * @returns {Promise.<module:model-bb-product-summary-ng.ProductDetails[], module:lib-bb-model-errors.ModelError>}
	   *   A Promise fulfilled with collection of arrangements.
	   */
	  var getContextArrangements = function getContextArrangements(context) {
	    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var full = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	    return productSummaryData.getProductsummaryContextArrangements(Object.assign({}, _constants.ArrangementPrivilegesParameters[context], normalizeArrangementsParameters(params))).then(function (raw) {
	      if (full) {
	        return {
	          data: (0, _accountModel.getExtendedAccountModelFlat)(raw.data),
	          totalCount: parseInt(raw.headers('x-total-count'), 10) || 0
	        };
	      }
	      return (0, _accountModel.getExtendedAccountModelFlat)(raw.data);
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel#getAccountsFrom
	   * @type {function}
	   *
	   * @description
	   * Load accounts available to payment from.
	   *
	   * @param {ArrangementsRequestParameters} params Parameters to send in the request
	   * @returns {Promise.<module:model-bb-product-summary-ng.ProductDetails[], module:lib-bb-model-errors.ModelError>}
	   *   A Promise with flat accounts list.
	   */
	  var getAccountsFrom = function getAccountsFrom() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    return getContextArrangements(_constants.Context.SEPA_CT, Object.assign({}, params, {
	      // @TODO: Setting size hardcoded for hotfixingsolving MAINT-5384. Will be properly fixed with DBSA-1315
	      size: 30,
	      debitAccount: true
	    }));
	  };
	
	  /**
	   * @name paymentOrdersModel#getAccountsTo
	   * @type {function}
	   *
	   * @description
	   * Load accounts available for payment to.
	   *
	   * @param {string} debitAccountId Filter account list with debitAccountId param
	   * @returns {Promise.<module:model-bb-product-summary-ng.ProductDetails[], module:lib-bb-model-errors.ModelError>}
	   *   A Promise with flat accounts list.
	   */
	  var getAccountsTo = function getAccountsTo(debitAccountId) {
	    return getContextArrangements(_constants.Context.SEPA_CT, {
	      creditAccount: true,
	      // @TODO: Setting size hardcoded for hotfixingsolving MAINT-5384. Will be properly fixed with DBSA-1315
	      size: 30
	    }).then(function (accounts) {
	      return accounts.filter(function (account) {
	        return account.id !== debitAccountId;
	      });
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel#getAccountsToFull
	   * @type {function}
	   *
	   * @description
	   * Load accounts available with total count attached
	   *
	   * @param {Object} params
	   * @returns {Promise.<module:model-bb-product-summary-ng.ProductDetails[], module:lib-bb-model-errors.ModelError>}
	   *   A Promise with flat accounts list.
	   */
	  var getAccountsToFull = function getAccountsToFull() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    return getContextArrangements(_constants.Context.SEPA_CT, Object.assign({
	      creditAccount: true
	    }, params), true);
	  };
	
	  /**
	   * @name paymentOrdersModel#getExternals
	   * @type {function}
	   *
	   * @description
	   * Load external accounts from contact list.
	   *
	   * @returns {Promise.<object[], module:lib-bb-model-errors.ModelError>}
	   *   A Promise with flat accounts list.
	   */
	  var getExternals = function getExternals() {
	    return contactData.getContacts({ size: 999 }).then(function (_ref4) {
	      var data = _ref4.data;
	      return data;
	    }).then(convertExternalsToProductKind).then(convertToAccountsArray).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel#getContacts
	   * @type {function}
	   *
	   * @description
	   * Load contact list without special formatting
	   *
	   * @param {Object} params
	   * @returns {Promise.<object[], module:lib-bb-model-errors.ModelError>}
	   *   A Promise with flat contacts list.
	   */
	  var getContacts = function getContacts() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    return contactData.getContacts(params).then(function (raw) {
	      return {
	        data: raw.data,
	        totalCount: parseInt(raw.headers('x-total-count'), 10) || 0
	      };
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel#getContactsByName
	   * @type {function}
	   *
	   * @description
	   * Load contacts filtered by name.
	   *
	   * @returns {Promise.<object[], module:lib-bb-model-errors.ModelError>}
	   *   A Promise with accounts list.
	   */
	  var getContactsByName = function getContactsByName(name) {
	    return contactData.getContacts({ query: name, size: 999 }).then(function (_ref5) {
	      var data = _ref5.data;
	      return data;
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @description
	   * Get currencies available for payment.
	   *
	   * @name paymentOrdersModel#getRate
	   * @type {function}
	   * @param {object} rateParams Parameters for getRate request
	   * @returns {number} Rate number
	   */
	  var getRate = function getRate(rateParams) {
	    return paymentOrdersData.getPaymentOrdersRate(rateParams).then(function (_ref6) {
	      var data = _ref6.data;
	      return data.rate;
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel#createContact
	   * @type {function}
	   *
	   * @description
	   * Creates a new contact
	   *
	   * @param {object} contact Contact data
	   * @returns {Promise} A Promise object for create contact request
	   */
	  var createContact = function createContact(contact) {
	    return contactData.postContactsRecord(contact).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel#getPaymentOrders
	   * @type {function}
	   *
	   * @description
	   * Get payments orders data.
	   *
	   * @param  {object} params Params to send to the request
	   * @returns {Promise.<Payments, module:lib-bb-model-errors.ModelError>} A Promise
	   */
	  var getPaymentOrders = function getPaymentOrders(params) {
	    return paymentOrdersData.getPaymentOrders(params).then(function (raw) {
	      return {
	        data: raw.data,
	        totalCount: parseInt(raw.headers('x-total-count'), 10) || 0
	      };
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel#getStandingOrdersPreferences
	   * @type {function}
	   *
	   * @description
	   * Tries to read the stored standing orders preferences
	   *
	   * @returns {Object}
	   */
	  function getStandingOrdersPreferences() {
	    var paymentPreferences = {};
	
	    paymentPreferences.standingOrdersPageSize = widget.getLongPreference(_constants.Preference.PAGE_SIZE);
	    paymentPreferences.standingOrdersMaxNavPages = widget.getLongPreference(_constants.Preference.MAX_NAV_PAGES);
	    paymentPreferences.standingOrdersPaginationType = widget.getStringPreference(_constants.Preference.PAGINATION_TYPE);
	    paymentPreferences.standingOrdersNotificationDismissTime = widget.getLongPreference(_constants.Preference.NOTIFICATION_DISMISS);
	
	    return paymentPreferences;
	  }
	
	  /**
	   * @name paymentOrdersModel#getStandingOrders
	   * @type {function}
	   *
	   * @description
	   * Get standing orders data.
	   *
	   * @param  {object} params Params to send to the request
	   * @returns {Promise.<Payments, module:lib-bb-model-errors.ModelError>} A Promise
	   */
	  var getStandingOrders = function getStandingOrders(params) {
	    return paymentOrdersData.getPaymentOrders(Object.assign(params, { paymentMode: 'RECURRING' })).then(function (raw) {
	      return {
	        data: raw.data,
	        totalCount: parseInt(raw.headers('x-total-count'), 10) || 0
	      };
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel#getPaymentDraftsPreferences
	   * @type {function}
	   *
	   * @description
	   * Tries to read the stored payment drafts preferences
	   *
	   * @returns {Object}
	   */
	  function getPaymentDraftsPreferences() {
	    var paymentDraftPreferences = {};
	
	    paymentDraftPreferences.paymentDraftsPageSize = widget.getLongPreference(_constants.Preference.PAGE_SIZE);
	    paymentDraftPreferences.paymentDraftsMaxNavPages = widget.getLongPreference(_constants.Preference.MAX_NAV_PAGES);
	    paymentDraftPreferences.paymentDraftsPaginationType = widget.getStringPreference(_constants.Preference.PAGINATION_TYPE);
	    paymentDraftPreferences.paymentDraftsNotificationDismissTime = widget.getLongPreference(_constants.Preference.NOTIFICATION_DISMISS);
	
	    return paymentDraftPreferences;
	  }
	
	  /**
	   * @name paymentOrdersModel#getPaymentDrafts
	   * @type {function}
	   *
	   * @description
	   * Get payment drafts.
	   *
	   * @param  {object} params Params to send to the request
	   * @returns {Promise.<PaymentDrafts, module:lib-bb-model-errors.ModelError>} A Promise
	   */
	  var getPaymentDrafts = function getPaymentDrafts(params) {
	    return paymentOrdersData.getPaymentOrderDrafts(params).then(function (raw) {
	      return {
	        data: raw.data,
	        totalCount: parseInt(raw.headers('x-total-count'), 10) || 0
	      };
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel#saveDraft
	   * @type {function}
	   *
	   * @description
	   * Save payment order draft
	   *
	   * @param {object} draftPayment to be saved
	   * @returns {Promise.<object, module:lib-bb-model-errors.ModelError>} A Promise
	   */
	  var saveDraft = function saveDraft(draftPayment) {
	    return paymentOrdersData.postPaymentOrderDraftsRecord(draftPayment).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel#deleteDraft
	   * @type {function}
	   *
	   * @description
	   * Delete payment order draft
	   *
	   * @param {object} draftPaymentId to be deleted
	   * @returns {Promise.<object, module:lib-bb-model-errors.ModelError>} A Promise
	   */
	  var deleteDraft = function deleteDraft(draftPaymentId) {
	    return paymentOrdersData.deletePaymentOrderDraftsRecord(draftPaymentId).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel#editDraft
	   * @type {function}
	   *
	   * @description
	   * Save changes to payment order draft
	   *
	   * @param {string} draftPaymentId to be deleted
	   * @param {object} draftPayment
	   * @returns {Promise.<object, module:lib-bb-model-errors.ModelError>} A Promise
	   */
	  var editDraft = function editDraft(draftPaymentId, draftPayment) {
	    return paymentOrdersData.putPaymentOrderDraftsRecord(draftPaymentId, draftPayment).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name validatePayment
	   * @type {function}
	   * @description
	   * Performs backend validation of payment
	   *
	   * @param {object} payment to be validated
	   * @returns {Promise.<object, module:lib-bb-model-errors.ModelError>} A Promise
	   */
	  var validatePayment = function validatePayment(payment) {
	    return paymentOrdersData.postPaymentOrdersValidateRecord(payment).catch(function (httpErrorResponse) {
	      var error = (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	      var data = httpErrorResponse.data;
	
	      var errorsArr = data.errors;
	      var messages = [];
	
	      if (errorsArr.length) {
	        messages = errorsArr;
	      } else if (!errorsArr.length && data.message) {
	        messages.push({ message: data.message });
	      }
	
	      Object.assign(error, { messages: messages });
	
	      throw error;
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel#saveEditPayment
	   * @type {function}
	   *
	   * @description
	   * Save changes after editing to payment order
	   *
	   * @param {string} paymentId
	   * @param {object} paymentData
	   * @returns {Promise.<object, module:lib-bb-model-errors.ModelError>} A Promise
	   */
	  var updatePayment = function updatePayment(paymentId, paymentData) {
	    return paymentOrdersData.putPaymentOrdersRecord(paymentId, paymentData).catch(function (httpErrorResponse) {
	      var error = (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	      if (httpErrorResponse.status === 403) {
	        Object.assign(error, { breachReport: httpErrorResponse.data.breachReport });
	      }
	      throw error;
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel#authorizePayment
	   * @type {function}
	   * @description
	   * Authorizes (approves) a payment.
	   *
	   * @param {String} paymentId
	   * @returns {Promise}
	   */
	  var authorizePayment = function authorizePayment(paymentId) {
	    return paymentOrdersData.putPaymentOrdersApprovalsRecord(paymentId, Object.assign({}, _constants.approvalStatus.approve)).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel#rejectPayment
	   * @type {function}
	   * @description
	   * Rejects payment.
	   *
	   * @param {String} paymentId
	   * @returns {Promise}
	   */
	  var rejectPayment = function rejectPayment(paymentId) {
	    return paymentOrdersData.putPaymentOrdersApprovalsRecord(paymentId, Object.assign({}, _constants.approvalStatus.reject)).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel#cancelPayment
	   * @type {function}
	   * @description
	   * Cancels payment.
	   *
	   * @param {String} paymentId
	   * @returns {Promise}
	   */
	  var cancelPayment = function cancelPayment(paymentId) {
	    return paymentOrdersData.deletePaymentOrdersRecord(paymentId).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel#requestPaymentCancel
	   * @type {Function}
	   * @description
	   * Sends a request to cancel the payment order identified by `paymentId`
	   * and an object that has version property
	   *
	   * @param {String} paymentId Payment identifier
	   * @param {Number} version property on payment Object
	   * @returns {Promise}
	   */
	  var requestPaymentCancel = function requestPaymentCancel(paymentId, version) {
	    return paymentOrdersData.postPaymentOrdersCancelRecord(paymentId, { version: version }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel#deletePayment
	   * @type {Function}
	   * @description
	   * Sends a request to delete the payment order identified by `paymentId`
	   *
	   * @param {String} paymentId Payment identifier
	   * @param {Number} version property on payment Object
	   * @returns {Promise}
	   */
	  var deletePayment = function deletePayment(paymentId, version) {
	    return paymentOrdersData.deletePaymentOrdersRecord(paymentId, { version: version }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel#requestBulkReject
	   * @type {function}
	   * @description
	   * Sends a request to reject the selected payment orders identified by `paymentId`
	   *
	   * @param {Array} paymentOrderIds
	   * @returns {Promise}
	   */
	  var requestBulkReject = function requestBulkReject(paymentOrderIds) {
	    return paymentOrdersData.putPaymentOrdersBulkApprovalsRecord(Object.assign({}, _constants.approvalStatus.reject, { paymentOrderIds: paymentOrderIds })).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel#requestBulkApprove
	   * @type {function}
	   * @description
	   * Sends a request to approve the selected payment orders identified by `paymentId`
	   *
	   * @param {Array} paymentOrderIds
	   * @returns {Promise}
	   */
	  var requestBulkApprove = function requestBulkApprove(paymentOrderIds) {
	    return paymentOrdersData.putPaymentOrdersBulkApprovalsRecord(Object.assign({}, _constants.approvalStatus.approve, { paymentOrderIds: paymentOrderIds })).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel
	   * @type {Object}
	   */
	  return {
	    createPaymentOrder: createPaymentOrder,
	    getCurrencies: getCurrencies,
	    getContextArrangements: getContextArrangements,
	    getAccountsFrom: getAccountsFrom,
	    getAccountsTo: getAccountsTo,
	    getAccountsToFull: getAccountsToFull,
	    getExternals: getExternals,
	    getContacts: getContacts,
	    getRate: getRate,
	    createContact: createContact,
	    getPaymentOrders: getPaymentOrders,
	    getProductSelectedId: getProductSelectedId,
	    getStandingOrdersPreferences: getStandingOrdersPreferences,
	    getStandingOrders: getStandingOrders,
	    getPaymentDraftsPreferences: getPaymentDraftsPreferences,
	    getPaymentDrafts: getPaymentDrafts,
	    saveDraft: saveDraft,
	    deleteDraft: deleteDraft,
	    editDraft: editDraft,
	    getContactsByName: getContactsByName,
	    validatePayment: validatePayment,
	    updatePayment: updatePayment,
	    Context: _constants.Context,
	    authorizePayment: authorizePayment,
	    rejectPayment: rejectPayment,
	    cancelPayment: cancelPayment,
	    requestPaymentCancel: requestPaymentCancel,
	    requestBulkApprove: requestBulkApprove,
	    requestBulkReject: requestBulkReject,
	    PaymentType: _constants.PaymentType,
	    deletePayment: deletePayment
	  };
	}
	
	/**
	 * Payments type definition
	 * @typedef {Array.<Payment>} Payments
	 */
	
	/**
	 * Payment type definition
	 * @typedef {Object} Payment
	 * @property {string}         id                                   - Payment ID
	 * @property {string}         status                               - Payment status
	 * @property {string}         bankStatus                           - Bank Status
	 * @property {string}         reasonCode                           - Reason id
	 * @property {string}         reasonText                           - Reason description
	 * @property {object}         debtorAccount                        - Debtor account
	 * @property {string}         instructionPriority                  - Instruction priority
	 * @property {string}         requestedExecutionDate               - Requested execution date
	 * @property {object}         creditTransferTransactionInformation - Transaction information
	 * @property {string}         createdBy                            - User id that created payment
	 * @property {string}         createdAt                            - Date when payment was created
	 */
	
	/**
	  * Arrangements request paramaters definition
	  * @typedef {Object} ArrangementsRequestParameters
	  * @property {String}  searchQuery    - Text to perform search on arrangements
	  * @property {Boolean} debitAccount   - If enabled retrieve debit accounts
	  * @property {Boolean} creditAccount  - If enabled retrieve credit accounts
	  */

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_148__;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getExtendedAccountModelFlat = exports.createAccountModel = undefined;
	
	var _constants = __webpack_require__(150);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var maskCardNumber = function maskCardNumber(suffix) {
	  return suffix ? 'XXXX-XXXX-XXXX-' + suffix : '';
	};
	
	var defaultViewModelFactory = function defaultViewModelFactory(_ref) {
	  var id = _ref.id,
	      name = _ref.name,
	      currency = _ref.currency,
	      externalTransferAllowed = _ref.externalTransferAllowed,
	      crossCurrencyAllowed = _ref.crossCurrencyAllowed;
	  return {
	    id: id,
	    name: name,
	    currency: currency,
	    externalTransferAllowed: externalTransferAllowed,
	    crossCurrencyAllowed: crossCurrencyAllowed
	  };
	};
	
	var viewModelFactories = _defineProperty({
	  currentAccounts: function currentAccounts(account) {
	    return Object.assign({
	      identifier: account.IBAN || account.BBAN,
	      amount: account.availableBalance
	    }, account);
	  },
	
	  savingsAccounts: function savingsAccounts(account) {
	    return Object.assign({
	      identifier: account.IBAN || account.BBAN,
	      amount: account.bookedBalance
	    }, account);
	  },
	
	  termDeposits: function termDeposits(account) {
	    return Object.assign({
	      amount: account.principalAmount
	    }, account);
	  },
	
	  loans: function loans(account) {
	    return Object.assign({
	      amount: account.bookedBalance
	    }, account);
	  },
	
	  creditCards: function creditCards(account) {
	    return Object.assign({
	      identifier: maskCardNumber(account.cardNumberSuffix),
	      amount: account.availableBalance
	    }, account);
	  },
	
	  investmentAccounts: function investmentAccounts(account) {
	    return Object.assign({
	      amount: account.currentInvestmentValue
	    }, account);
	  }
	
	}, _constants.ExternalType.IDENTIFIER, function (contact) {
	  return Object.assign({
	    identifier: contact.accounts[0].IBAN,
	    external: true
	  }, contact);
	});
	
	var viewModelFactory = function viewModelFactory(kind, account) {
	  return (viewModelFactories[kind] || defaultViewModelFactory)(account);
	};
	
	/**
	 * @name createAccountModel
	 * @type {function}
	 * @description
	 * Prepare the fields of a account into a form ready for display to the User
	 *
	 * @param {string} kindId Product kind Id
	 * @returns {function}
	 */
	var createAccountModel = exports.createAccountModel = function createAccountModel(kindId) {
	  return function (account) {
	    return viewModelFactory(kindId, account);
	  };
	};
	
	/**
	 * @name getExtendedAccountModelFlat
	 * @type {function}
	 * @description
	 * Prepare the fields of a account into a form ready for display to the User
	 *
	 * @param {object[]} accountsRaw flat list of accounts
	 * @return {object[]}
	 */
	var getExtendedAccountModelFlat = exports.getExtendedAccountModelFlat = function getExtendedAccountModelFlat() {
	  var accountsRaw = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  return accountsRaw.map(function (account) {
	    return Object.assign({
	      identifier: account.IBAN || account.BBAN || account.productNumber || maskCardNumber(account.cardNumberSuffix),
	      amount: account.availableBalance || account.bookedBalance
	    }, account);
	  });
	};

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ArrangementPrivilege;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * @name Constants
	 * @type {object}
	 */
	
	var resourceName = 'Payments';
	
	/**
	 * @name Constants#PaymentType
	 * @description
	 * Map of payment types
	 * @type {PaymentType}
	 */
	var PaymentType = exports.PaymentType = {
	  SEPA_CT: 'SEPA_CREDIT_TRANSFER',
	  US_DOMESTIC_WIRE: 'US_DOMESTIC_WIRE',
	  US_FOREIGN_WIRE: 'US_FOREIGN_WIRE',
	  INTERNAL: 'INTERNAL'
	};
	
	/**
	 * @description
	 * Available business functions for payments resource
	 *
	 * @name Constants#Context
	 * @type {PaymentType}
	 */
	var Context = exports.Context = {
	  SEPA_CT: 'SEPA CT',
	  US_DOMESTIC_WIRE: 'US Domestic Wire',
	  US_FOREIGN_WIRE: 'US Foreign Wire',
	  INTERNAL: 'INTERNAL'
	};
	
	/**
	 * @description
	 * Identifier and name for external account product kind
	 *
	 * @name ExternalType
	 * @type {object}
	 * @inner
	 */
	var ExternalType = exports.ExternalType = {
	  IDENTIFIER: 'ExternalAccounts',
	  NAME: 'Contacts'
	};
	
	/**
	 * @description
	 * Request params to get privilege entitlements
	 *
	 * @name ArrangementPrivilegesParameters
	 * @type {object}
	 * @inner
	 */
	var ArrangementPrivilegesParameters = exports.ArrangementPrivilegesParameters = (_ArrangementPrivilege = {}, _defineProperty(_ArrangementPrivilege, Context.SEPA_CT, {
	  businessFunction: Context.SEPA_CT,
	  resourceName: resourceName,
	  privilege: 'create'
	}), _defineProperty(_ArrangementPrivilege, Context.US_DOMESTIC_WIRE, {
	  businessFunction: Context.US_DOMESTIC_WIRE,
	  resourceName: resourceName,
	  privilege: 'create'
	}), _defineProperty(_ArrangementPrivilege, Context.US_FOREIGN_WIRE, {
	  businessFunction: Context.US_FOREIGN_WIRE,
	  resourceName: resourceName,
	  privilege: 'create'
	}), _defineProperty(_ArrangementPrivilege, Context.INTERNAL, {
	  businessFunction: Context.INTERNAL,
	  resourceName: resourceName,
	  privilege: 'create'
	}), _ArrangementPrivilege);
	
	/**
	 * bbStorage keys enum
	 * @type {object}
	 * @inner
	 */
	var BbStorageKeys = exports.BbStorageKeys = {
	  PRODUCT_SELECTED: 'bb.product.selected'
	};
	
	/**
	 * Widget preferences enum
	 * @type {object}
	 * @inner
	 */
	var Preference = exports.Preference = {
	  PAGE_SIZE: 'pageSize',
	  MAX_NAV_PAGES: 'maxNavPages',
	  PAGINATION_TYPE: 'paginationType',
	  NOTIFICATION_DISMISS: 'notificationDismissTime'
	};
	
	/**
	 * @description
	 * Payment action types for approval/rejection
	 *
	 * @type {Object}
	 * @inner
	 */
	var approvalStatus = exports.approvalStatus = {
	  approve: { approvalStatus: 'APPROVED' },
	  reject: { approvalStatus: 'REJECTED' }
	};
	
	/**
	 * @typedef {Object} PaymentType
	 * @property {String} SEPA_CT               - SEPA Credit Transfer payments
	 * @property {String} US_DOMESTIC_WIRE      - United States Domestic Wire payments
	 * @property {String} US_FOREIGN_WIRE       - United States International Wire payments
	 * @property {String} INTERNAL              - Internal Payments between the customers
	 *                                            of same financial institution.
	 */

/***/ })

/******/ })
});
;
//# sourceMappingURL=model-bb-payment-orders-ng.js.map