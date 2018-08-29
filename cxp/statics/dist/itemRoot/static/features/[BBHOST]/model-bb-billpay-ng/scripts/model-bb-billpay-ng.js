(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib-bb-model-errors"), require("vendor-bb-angular"), require("data-bb-bill-pay-http-ng"));
	else if(typeof define === 'function' && define.amd)
		define("model-bb-billpay-ng", ["lib-bb-model-errors", "vendor-bb-angular", "data-bb-bill-pay-http-ng"], factory);
	else if(typeof exports === 'object')
		exports["model-bb-billpay-ng"] = factory(require("lib-bb-model-errors"), require("vendor-bb-angular"), require("data-bb-bill-pay-http-ng"));
	else
		root["model-bb-billpay-ng"] = factory(root["lib-bb-model-errors"], root["vendor-bb-angular"], root["data-bb-bill-pay-http-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_45__, __WEBPACK_EXTERNAL_MODULE_47__, __WEBPACK_EXTERNAL_MODULE_48__) {
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

	module.exports = __webpack_require__(46);

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_45__;

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modelBillpayKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(47);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbBillPayHttpNg = __webpack_require__(48);
	
	var _dataBbBillPayHttpNg2 = _interopRequireDefault(_dataBbBillPayHttpNg);
	
	var _billpay = __webpack_require__(49);
	
	var _billpay2 = _interopRequireDefault(_billpay);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'model-bb-billpay-ng'; /**
	                                        * @module model-bb-billpay-ng
	                                        *
	                                        * @description
	                                        * Model for widget-bb-billpay-ng
	                                        *
	                                        * @example
	                                        * import modelBillpayModuleKey, { modelBillpayKey } from 'model-bb-billpay-ng';
	                                        *
	                                        * angular
	                                        *   .module('ExampleModule', [
	                                        *     modelBillpayModuleKey,
	                                        *   ])
	                                        *   .factory('someFactory', [
	                                        *     modelBillpayKey,
	                                        *     // into
	                                        *     function someFactory(billpayModel) {
	                                        *       // ...
	                                        *     },
	                                        *   ]);
	                                        */
	var modelBillpayKey = exports.modelBillpayKey = moduleKey + ':model';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_dataBbBillPayHttpNg2.default]).factory(modelBillpayKey, ['$q', _dataBbBillPayHttpNg.billPayDataKey,
	/* into */
	_billpay2.default]).name;

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_47__;

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_48__;

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = BillpayModel;
	
	var _libBbModelErrors = __webpack_require__(45);
	
	/**
	 * @name validateAndGetPayments
	 * @inner
	 * @type {function}
	 * @param {Object} response
	 * @param {Object} response.headers
	 * @param {Object} response.data
	 * @returns {Array<module:data-bb-billpay-http-ng.Payment> | module:lib-bb-model-errors.ModelError}
	 * @description Returns a validated list of payments or throws a ModelError
	 */
	var validateAndGetPayments = function validateAndGetPayments(_ref) {
	  var headers = _ref.headers,
	      data = _ref.data;
	
	  var totalCountHeader = headers('x-total-count');
	  var totalCount = totalCountHeader ? parseInt(totalCountHeader, 10) : 0;
	
	  // malformed if no payments, payments not array or if totalCount obviously out of sync
	  if (!data.payments || data.payments.length == null || totalCount > 0 && data.payments.length === 0 || data.payments.length > totalCount) {
	    // customDebugMessage not for display - just to help future debugging so no i18n
	    var error = { code: _libBbModelErrors.E_UNEXPECTED, customDebugMessage: 'payments data is malformed' };
	    throw error;
	  }
	  return data.payments;
	};
	
	/**
	 *
	 * @name BillpayModel
	 * @type {function}
	 * @param {Object} Promise An ES2015 compatible `Promise` object.
	 * @param {module:data-bb-bill-pay-http-ng.BillpayData} billpayData
	 * @return {Object}
	 *
	 * @description Model factory for model-bb-billpay-ng
	 */
	function BillpayModel(Promise, billpayData) {
	  /**
	   *
	   * @name BillpayModel#getPayeesSummary
	   * @type {function}
	   * @param {Object} params Any parameters for the API call
	   * @returns {Promise<Array<module:data-bb-billpay-http-ng.PayeeSummary>,
	   *   module:lib-bb-model-errors.ModelError>}
	   * @description Returns a list of payees that payments may be made to
	   */
	  var getPayeesSummary = function getPayeesSummary(params) {
	    return billpayData.getBillPayPayeesSummary(params).then(function (_ref2) {
	      var data = _ref2.data;
	      return data.payeeSummaries;
	    }).catch(function (error) {
	      throw (0, _libBbModelErrors.fromHttpError)(error);
	    });
	  };
	
	  /**
	   *
	   * @name BillpayModel#getAccounts
	   * @type {function}
	   * @param {Object} params Any parameters for the API call
	   * @returns {Promise<Array<module:data-bb-billpay-http-ng.PaymentAccount>,
	   *   module:lib-bb-model-errors.ModelError>}
	   * @description Returns a list of accounts that payments may be made from
	   */
	  var getAccounts = function getAccounts(params) {
	    return billpayData.getBillPayAccounts(params).then(function (_ref3) {
	      var data = _ref3.data;
	      return data.accounts;
	    }).catch(function (error) {
	      throw (0, _libBbModelErrors.fromHttpError)(error);
	    });
	  };
	
	  /**
	   * @name BillpayModel#getPayments
	   * @type {function}
	   * @param {Object} params Any parameters for the API call
	   * @returns {Promise<Array<module:data-bb-billpay-http-ng.Payment>,
	   *   module:lib-bb-model-errors.ModelError>}
	   *
	   * @description Returns a list of payments
	   */
	  var getPayments = function getPayments(params) {
	    return billpayData.getBillPayPayments(params).then(function (response) {
	      return validateAndGetPayments(response);
	    }).catch(function (error) {
	      throw error.code ? error : (0, _libBbModelErrors.fromHttpError)(error);
	    });
	  };
	
	  /**
	   * @name BillpayModel#getPayment
	   * @type {function}
	   * @param {string} id payment id to get
	   * @param {Object} [params] Any parameters for the API call
	   * @returns {Promise<Array<module:data-bb-bill-pay-http-ng.BillPayData.Payment>,
	   *   module:lib-bb-model-errors.ModelError>}
	   * @description Returns a payment by id
	   */
	  var getPayment = function getPayment(id, params) {
	    return billpayData.getBillPayPaymentsRecord(id, params).then(function (_ref4) {
	      var data = _ref4.data;
	      return data.payment;
	    }).catch(function (error) {
	      throw (0, _libBbModelErrors.fromHttpError)(error);
	    });
	  };
	
	  /**
	   *
	   * @name BillpayModel#postPayeesRecord
	   * @type {function}
	   * @param {Payee} params Any parameters for the API call
	   * @returns {Promise<module:data-bb-billpay-http-ng.PayeePostResponse,
	   *  module:lib-bb-model-errors.ModelError>}
	   *
	   * @description Creates new payee
	   */
	  var postPayeesRecord = function postPayeesRecord(params) {
	    return billpayData.postBillPayPayeesRecord(params).then(function (_ref5) {
	      var data = _ref5.data;
	      return data;
	    }).catch(function (error) {
	      throw (0, _libBbModelErrors.fromHttpError)(error);
	    });
	  };
	
	  /**
	   *
	   * @name BillpayModel#putPayeesRecord
	   * @type {function}
	   * @param {string} id payee id to put
	   * @param {Payee} params Any parameters for the API call
	   * @returns {Promise<module:data-bb-billpay-http-ng.PayeePutResponse,
	   *  module:lib-bb-model-errors.ModelError>}
	   *
	   * @description Updates a payee record
	   */
	  var putPayeesRecord = function putPayeesRecord(id, params) {
	    return billpayData.putBillPayPayeesRecord(id, params).then(function (_ref6) {
	      var data = _ref6.data;
	      return data;
	    }).catch(function (error) {
	      throw (0, _libBbModelErrors.fromHttpError)(error);
	    });
	  };
	
	  /**
	   *
	   * @name BillpayModel#getPayeeRecord
	   * @type {function}
	   * @param {string} id payee id to get
	   * @param {Payee} params Any parameters for the API call
	   * @returns {Promise<module:data-bb-billpay-http-ng.PayeeGetResponse,
	   *  module:lib-bb-model-errors.ModelError>}
	   *
	   * @description Returns a payee by id
	   */
	  var getPayeeRecord = function getPayeeRecord(id, params) {
	    return billpayData.getBillPayPayeesRecord(id, params).then(function (_ref7) {
	      var data = _ref7.data;
	      return data;
	    }).catch(function (error) {
	      throw (0, _libBbModelErrors.fromHttpError)(error);
	    });
	  };
	
	  /**
	   *
	   * @name BillpayModel#postPaymentsRecord
	   * @type {function}
	   * @param {Object} params Any parameters for the API call
	   * @returns {Promise<void, module:lib-bb-model-errors.ModelError>}
	   *
	   * @description Creates a new batch of payments
	   */
	  var postPaymentsRecord = function postPaymentsRecord(params) {
	    return billpayData.postBillPayPaymentsRecord(params).catch(function (error) {
	      throw (0, _libBbModelErrors.fromHttpError)(error);
	    });
	  };
	
	  /**
	   *
	   * @name BillpayModel#putPaymentRecord
	   * @type {function}
	   * @param {string} id payment id to put
	   * @param {Object} params Any parameters for the API call
	   * @returns {Promise<void, module:lib-bb-model-errors.ModelError>}
	   *
	   * @description Updates a payment record
	   */
	  var putPaymentRecord = function putPaymentRecord(id, params) {
	    return billpayData.putBillPayPaymentsRecord(id, params).catch(function (error) {
	      throw (0, _libBbModelErrors.fromHttpError)(error);
	    });
	  };
	
	  /**
	   *
	   * @name BillpayModel#postRecurringPaymentsRecord
	   * @type {function}
	   * @param {Object} params Any parameters for the API call
	   * @returns {Promise<module:data-bb-bill-pay-http-ng.BillPayData.PutPostResponse,
	   *   module:lib-bb-model-errors.ModelError>}
	   *
	   * @description Creates a new recurring payment
	   */
	  var postRecurringPaymentsRecord = function postRecurringPaymentsRecord(params) {
	    return billpayData.postBillPayPaymentsRecurringRecord(params).then(function (_ref8) {
	      var data = _ref8.data;
	      return data;
	    }).catch(function (error) {
	      throw (0, _libBbModelErrors.fromHttpError)(error);
	    });
	  };
	
	  /**
	   *
	   * @name BillpayModel#deletePaymentRecord
	   * @type {function}
	   * @param {string} id payment id to delete
	   * @param {Object} [params] Any parameters for the API call
	   * @returns {Promise<void, module:lib-bb-model-errors.ModelError>}
	   *
	   * @description Deletes a payment record
	   */
	  var deletePaymentRecord = function deletePaymentRecord(id, params) {
	    return billpayData.deleteBillPayPaymentsRecord(id, params).catch(function (error) {
	      throw (0, _libBbModelErrors.fromHttpError)(error);
	    });
	  };
	
	  /**
	   *
	   * @name BillpayModel#deleteRecurringPaymentRecord
	   * @type {function}
	   * @param {string} id payment id to delete
	   * @param {Object} [params] Any parameters for the API call
	   * @returns {Promise<void, module:lib-bb-model-errors.ModelError>}
	   *
	   * @description Deletes a payment record
	   */
	  var deleteRecurringPaymentRecord = function deleteRecurringPaymentRecord(id, params) {
	    return billpayData.deleteBillPayPaymentsRecurringRecord(id, params).catch(function (error) {
	      throw (0, _libBbModelErrors.fromHttpError)(error);
	    });
	  };
	
	  /**
	   * @name BillpayModel#searchPayees
	   * @type {function}
	   * @param {Object} params Any parameters for the API call
	   * @returns {Promise<Array<module:data-bb-bill-pay-http-ng.BillPayData.PayeeSearch>,
	   *   module:lib-bb-model-errors.ModelError>}
	   *
	   * @description Returns a list of payees
	   */
	  var searchPayees = function searchPayees(params) {
	    return billpayData.getBillPayPayeesSearch(params).then(function (_ref9) {
	      var data = _ref9.data;
	      return data.payees;
	    }).catch(function (error) {
	      throw (0, _libBbModelErrors.fromHttpError)(error);
	    });
	  };
	
	  /**
	   *
	   * @name BillpayModel#deletePayeesRecord
	   * @type {function}
	   * @param {string} id payee id to delete
	   * @param {Object} [params] Any parameters for the API call
	   * @returns {Promise<void, module:lib-bb-model-errors.ModelError>}
	   *
	   * @description Deletes a payee record
	   */
	  var deletePayeesRecord = function deletePayeesRecord(id, params) {
	    return billpayData.deleteBillPayPayeesRecord(id, params).catch(function (error) {
	      throw (0, _libBbModelErrors.fromHttpError)(error);
	    });
	  };
	
	  // electronic payee methods
	  /**
	   *
	   * @name BillpayModel#postPayeesElectronicRecord
	   * @type {function}
	   * @param {ElectronicPayeePost} params Any parameters for the API call
	   * @returns {Promise<module:data-bb-billpay-http-ng.BillPayPutPostResponse,
	   *  module:lib-bb-model-errors.ModelError>}
	   * @description Creates new electronic payee
	   */
	  var postPayeesElectronicRecord = function postPayeesElectronicRecord(params) {
	    return billpayData.postBillPayPayeesElectronicRecord(params).then(function (_ref10) {
	      var data = _ref10.data;
	      return data;
	    }).catch(function (error) {
	      throw (0, _libBbModelErrors.fromHttpError)(error);
	    });
	  };
	
	  /**
	   *
	   * @name BillpayModel#getPayeesElectronicRecord
	   * @type {function}
	   * @param {string} id payee id to get
	   * @param {ElectronicPayee} params Any parameters for the API call
	   * @returns {Promise<module:data-bb-billpay-http-ng.PayeesElectronicGetResponse,
	   *  module:lib-bb-model-errors.ModelError>}
	   * @description Returns a payee by id
	   */
	  var getPayeesElectronicRecord = function getPayeesElectronicRecord(id, params) {
	    return billpayData.getBillPayPayeesElectronicRecord(id, params).then(function (_ref11) {
	      var data = _ref11.data;
	      return data;
	    }).catch(function (error) {
	      throw (0, _libBbModelErrors.fromHttpError)(error);
	    });
	  };
	
	  /**
	   *
	   * @name BillpayModel#putPayeesElectronicRecord
	   * @type {function}
	   * @param {string} id payee id to put
	   * @param {Payee} params Any parameters for the API call
	   * @returns {Promise<module:data-bb-billpay-http-ng.BillPayPutPostResponse,
	   *  module:lib-bb-model-errors.ModelError>}
	   * @description Updates a payee record
	   */
	  var putPayeesElectronicRecord = function putPayeesElectronicRecord(id, params) {
	    return billpayData.putBillPayPayeesElectronicRecord(id, params).then(function (_ref12) {
	      var data = _ref12.data;
	      return data;
	    }).catch(function (error) {
	      throw (0, _libBbModelErrors.fromHttpError)(error);
	    });
	  };
	
	  /**
	   *
	   * @name BillpayModel#deletePayeesElectronicRecord
	   * @type {function}
	   * @param {string} id payee id to delete
	   * @param {Object} [params] Any parameters for the API call
	   * @returns {Promise<void, module:lib-bb-model-errors.ModelError>}
	   * @description Deletes a payee record
	   */
	  var deletePayeesElectronicRecord = function deletePayeesElectronicRecord(id, params) {
	    return billpayData.deleteBillPayPayeesElectronicRecord(id, params).catch(function (error) {
	      throw (0, _libBbModelErrors.fromHttpError)(error);
	    });
	  };
	
	  /**
	   * @name BillpayModel
	   * @type {Object}
	   *
	   * @description Billpay model service
	   */
	  return {
	    getPayeesSummary: getPayeesSummary,
	    getAccounts: getAccounts,
	    getPayments: getPayments,
	    getPayment: getPayment,
	    postPaymentsRecord: postPaymentsRecord,
	    postRecurringPaymentsRecord: postRecurringPaymentsRecord,
	    putPaymentRecord: putPaymentRecord,
	    deletePaymentRecord: deletePaymentRecord,
	    deleteRecurringPaymentRecord: deleteRecurringPaymentRecord,
	    searchPayees: searchPayees,
	    postPayeesElectronicRecord: postPayeesElectronicRecord,
	    getPayeesElectronicRecord: getPayeesElectronicRecord,
	    putPayeesElectronicRecord: putPayeesElectronicRecord,
	    deletePayeesElectronicRecord: deletePayeesElectronicRecord,
	
	    // TODO: old methods to be removed after payees/manual endpoints are complete
	    getPayeeRecord: getPayeeRecord,
	    postPayeesRecord: postPayeesRecord,
	    putPayeesRecord: putPayeesRecord,
	    deletePayeesRecord: deletePayeesRecord
	  };
	}
	
	/**
	 * Payment Account type definition
	 * @typedef {Object} PaymentAccount
	 * @property {string} accountNumber - Account number
	 * @property {string} accountNickName - Account nickname
	 * @property {number} balance - Account balance
	 */
	
	/**
	 * Payment services object type definition
	 * @typedef {Object} PaymentServices
	 * @property {string} cutoffTime - The time after which this payment service cannot be used
	 * @property {string} earliestPaymentDate - The date that the payment will be made
	 *  (providing it is made before the cutoff time)
	 * @property {string} nextPaymentDate - The day after the earliest payment date
	 * @property {string} paymentServiceType - The service type (examples include EXPEDITED_PAYMENT
	 *  & REGULAR_PAYMENT)
	 * @property {number} deliveryDays - The number of days for a delivery
	 * @property {number} paymentFee - The fee for using this service (applies to expedited)
	 */
	
	/**
	 * Payee Summary type definition
	 * @typedef {Object} PayeeSummary
	 * @property {string}  id - ID of the payee
	 * @property {string}  name - Name of the payee
	 * @property {string}  nickName - Nickname of the payee
	 * @property {object}  nextPayment - Information on the next payment
	 * @property {number}  nextPayment.paymentAmount - Next payment amount
	 * @property {string}  nextPayment.paymentDate - Next payment date
	 * @property {boolean} nextPayment.recurring - Whether or not the next payment is a recurring one
	 * @property {PaymentServices[]}  [paymentServices] - Optional array of possible payment services
	 * @property {object}  ebill - Information about the ebill capabilities of the payee
	 * @property {boolean} ebill.capable - Whether this payee is capable of sing ebills
	 * @property {boolean} ebill.enabled - Whether ebills are enabled on this payee
	 * @property {object}  ebill.latestBill - The latest ebill
	 * @property {number}  ebill.latestBill.paymentAmount - The amount of the latest ebill
	 * @property {string}  ebill.latestBill.paymentDate - The payment date of the latest ebill
	 * @property {string}  ebill.latestBill.url - The URL of the latest ebill
	 */
	
	/**
	 * Payee type definition
	 * @typedef {Object} Payee
	 * @property {string} [id]
	 * @property {string} name - Payee name
	 * @property {string} nickName - Payee nickname
	 * @property {string} phoneNumber - Payee phone number
	 * @property {object} address - Payee complete address
	 * @property {string} address.address1 - Payee address1
	 * @property {string} address.address2 - Payee address2
	 * @property {string} address.city - Payee city
	 * @property {string} address.state - Payee state
	 * @property {string} address.postalCode - Payee postal code
	 * @property {string} accountNumber - Payee nickname
	 * @property {string} category - Payee nickname
	 */
	
	/**
	 * Error type definition
	 * @typedef {Object} Error
	 * @property {string} message
	 * @property {string} key
	 * @property {object} context
	 */
	
	/**
	 * Payment type definition
	 * @typedef {Object} Payment
	 * @property {string} [paymentMemo]
	 * @property {object} [paymentAccount]
	 * @property {string} [payeeID]
	 * @property {float} [paymentAmount]
	 * @property {string} [paymentDate]
	 * @property {Array<Error>} [errors]
	 */
	
	/**
	 * Payee post response type definition
	 * @typedef {Object} PayeePostResponse
	 * @property {String} id id of the newly created payee
	 */
	
	/**
	 * Payee post response type definition
	 * @typedef {Object} PayeePutResponse
	 * @property {String} id id of the updated payee
	 */
	
	/**
	 * Electronic Payee post data type definition
	 * @typedef {Object} ElectronicPayee
	 * @property {string} id - Electronic payee name
	 * @property {string} name - Electronic payee name
	 * @property {string} [nickName] - Electronic payee nickname
	 * @property {string} accountNumber - Electronic payee account number
	 */
	
	/**
	 * Electronic Payee post data type definition
	 * @typedef {Object} ElectronicPayeePost
	 * @property {string} name - Electronic payee name
	 * @property {string} merchantID - Merchant ID
	 * @property {string} accountNumber - Electronic payee account number
	 * @property {string} [zipCode] - Electronic payee zip code
	 * @property {string} [nickName] - Electronic payee nickname
	 */
	
	/**
	 * Electronic Payee type definition
	 * @typedef {Object} ElectronicPayeePut
	 * @property {string} name - Electronic payee name
	 * @property {string} accountNumber - Electronic payee account number
	 * @property {string} modifyPendingPayments - Electronic payee nickname
	 * @property {string} [nickName] - Electronic payee nickname
	 */

/***/ })

/******/ })
});
;
//# sourceMappingURL=model-bb-billpay-ng.js.map