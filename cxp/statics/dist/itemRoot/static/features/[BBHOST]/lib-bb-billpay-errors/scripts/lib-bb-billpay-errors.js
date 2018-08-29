(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib-bb-model-errors"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-billpay-errors", ["lib-bb-model-errors"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-billpay-errors"] = factory(require("lib-bb-model-errors"));
	else
		root["lib-bb-billpay-errors"] = factory(root["lib-bb-model-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_45__) {
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

	module.exports = __webpack_require__(42);

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ErrorHookUtilities = exports.ErrorHelperUtilities = undefined;
	
	var _helperUtilities = __webpack_require__(43);
	
	var _helperUtilities2 = _interopRequireDefault(_helperUtilities);
	
	var _hookUtilities = __webpack_require__(44);
	
	var _hookUtilities2 = _interopRequireDefault(_hookUtilities);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ErrorHelperUtilities = function ErrorHelperUtilities() {
	  return Object.assign({}, _helperUtilities2.default);
	};
	
	var ErrorHookUtilities = function ErrorHookUtilities() {
	  return Object.assign({}, _hookUtilities2.default);
	};
	
	exports.ErrorHelperUtilities = ErrorHelperUtilities;
	exports.ErrorHookUtilities = ErrorHookUtilities;

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	/**
	 * @name formInputHasError
	 * @inner
	 * @type {function}
	 * @description check if field has error
	 * @param {string} inputName - name of field
	 * @param {object} form - angular form
	 * @param {boolean} forceValidate
	 * @return {boolean}
	*/
	var formInputHasError = function formInputHasError(inputName, form, forceValidate) {
	  return form && !!form[inputName] && (form.$submitted || form[inputName].$touched || forceValidate) && form[inputName].$invalid;
	};
	
	/**
	 * @name formErrors
	 * @inner
	 * @type {function}
	 * @description get the error key map for the form
	 * @param {object} error - error type
	 * @return {string}
	*/
	var formErrors = function formErrors(error) {
	  var _Object$keys = Object.keys(error),
	      _Object$keys2 = _slicedToArray(_Object$keys, 1),
	      _Object$keys2$ = _Object$keys2[0],
	      errorName = _Object$keys2$ === undefined ? 'required' : _Object$keys2$;
	
	  var errorMessage = function errorMessage(type) {
	    return 'error.' + type + '.' + errorName;
	  };
	  return {
	    // Payees
	    billpay_manage_payee_name: errorMessage('name'),
	    billpay_manage_payee_nickname: errorMessage('nickname'),
	    billpay_manage_payee_account: errorMessage('account'),
	    billpay_manage_payee_address1: errorMessage('address1'),
	    billpay_manage_payee_address2: errorMessage('address2'),
	    billpay_manage_payee_city: errorMessage('city'),
	    billpay_manage_payee_state: errorMessage('state'),
	    billpay_manage_payee_zip: errorMessage('zip'),
	    billpay_manage_payee_phone: errorMessage('phone'),
	
	    // Payments
	    billpay_payment_account: errorMessage('account'),
	    billpay_payment_amount: errorMessage('amount'),
	    billpay_payment_date: errorMessage('date'),
	
	    // rush payment overnight address
	    billpay_pay_a_bill_rush_address1: errorMessage('address1'),
	    billpay_pay_a_bill_rush_address2: errorMessage('address2'),
	    billpay_pay_a_bill_rush_city: errorMessage('city'),
	    billpay_pay_a_bill_rush_state: errorMessage('state'),
	    billpay_pay_a_bill_rush_zip: errorMessage('zip')
	  };
	};
	
	/**
	 * @name backendError
	 * @inner
	 * @type {function}
	 * @description get the backend error for a field - fallback to message field
	 *  if key doesn't map to i18n string
	 * @param {object} errorMap
	 * @param {string} inputName - name of field
	 * @param {function} $filter
	 * @return {string}
	*/
	var backendError = function backendError(errorMap, inputName, $filter) {
	  var key = errorMap && errorMap[inputName] && errorMap[inputName].key;
	  return key ? $filter('i18n')(key) || errorMap[inputName].message : '';
	};
	
	/**
	 * @name hasError
	 * @inner
	 * @type {function}
	 * @description Check if the field has form or backend error
	 * @param {string} inputName - field name
	 * @param {object} errorMap
	 * @param {?object} form - angular form
	 * @param {function} $filter
	 * @param {boolean} forceValidate
	 * @return {boolean}
	*/
	var hasError = function hasError(inputName, errorMap, form, $filter, forceValidate) {
	  return formInputHasError(inputName, form, forceValidate) || !!backendError(errorMap, inputName, $filter);
	};
	
	/**
	 * @name hasErrorClass
	 * @inner
	 * @type {function}
	 * @description return class to indicate if field has error
	 * @param {string} inputName - field name
	 * @param {object} errorMap
	 * @param {object} form - angular form
	 * @param {function} $filter
	 * @param {boolean} forceValidate
	 * @return {object}
	*/
	var hasErrorClass = function hasErrorClass(inputName, errorMap, form, $filter, forceValidate) {
	  return { 'was-validated is-invalid': hasError(inputName, errorMap, form, $filter, forceValidate) };
	};
	
	/**
	 * @name getError
	 * @inner
	 * @type {function}
	 * @description get form or backend error
	 * @param {string} inputName - field name
	 * @param {object} errorMap
	 * @param {object} form - angular form
	 * @param {function} $filter
	 * @param {boolean} forceValidate
	 * @return {string}
	*/
	var getError = function getError(inputName, errorMap, form, $filter, forceValidate) {
	  // if inputName is indexed lop off index to find error
	  var index = inputName.substring(inputName.lastIndexOf('_') + 1);
	  var fieldName = isNaN(index) ? inputName : inputName.substring(0, inputName.lastIndexOf('_'));
	
	  return formInputHasError(inputName, form, forceValidate) ? $filter('i18n')(formErrors(form[inputName].$error)[fieldName]) : backendError(errorMap, inputName, $filter);
	};
	
	/**
	 * @name clearBackendError
	 * @inner
	 * @type {function}
	 * @description clear backend field and page error
	 * @param {string} inputName - field name
	 * @param {object} errorMap
	 * @param {function} clearFn
	*/
	var clearBackendError = function clearBackendError(inputName, errorMap, clearFn) {
	  var errorKey = errorMap ? inputName : 'billpay_page_error';
	  clearFn(errorKey);
	};
	
	/**
	 * @name Helpers
	 * @type {Object}
	 * @description Helpers for displaying errors
	 */
	exports.default = {
	  /**
	   * @name Helpers#formInputHasError
	   * @type {function}
	   * @description check if field has error
	   * @param {string} inputName - name of field
	   * @param {?object} form - angular form
	   * @param {boolean} forceValidate
	   * @return {boolean}
	  */
	  formInputHasError: formInputHasError,
	
	  /**
	   * @name Helpers#hasError
	   * @type {function}
	   * @description Check if the field has form or backend error
	   * @param {string} inputName - field name
	   * @param {object} errorMap
	   * @param {?object} form - angular form
	   * @param {function} $filter
	   * @param {boolean} forceValidate
	   * @return {boolean}
	  */
	  hasError: hasError,
	
	  /**
	   * @name Helpers#hasErrorClass
	   * @type {function}
	   * @description return class to indicate if field has error
	   * @param {string} inputName - field name
	   * @param {object} errorMap
	   * @param {?object} form - angular form
	   * @param {function} $filter
	   * @param {boolean} forceValidate
	   * @return {object}
	  */
	  hasErrorClass: hasErrorClass,
	
	  /**
	   * @name Helpers#getError
	   * @type {function}
	   * @description get form or backend error
	   * @param {string} inputName - field name
	   * @param {object} errorMap
	   * @param {?object} form - angular form
	   * @param {function} $filter
	   * @param {boolean} forceValidate
	   * @return {string}
	  */
	  getError: getError,
	
	  /**
	   * @name Helpers#clearBackendError
	   * @type {function}
	   * @description clear backend field and page error
	   * @param {string} inputName - field name
	   * @param {object} errorMap
	   * @param {function} clearFn
	  */
	  clearBackendError: clearBackendError
	};

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _ERROR_MESSAGES;
	
	var _libBbModelErrors = __webpack_require__(45);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var ERROR_MESSAGES = (_ERROR_MESSAGES = {}, _defineProperty(_ERROR_MESSAGES, _libBbModelErrors.E_AUTH, 'billpay.model.error.auth'), _defineProperty(_ERROR_MESSAGES, _libBbModelErrors.E_CONNECTIVITY, 'billpay.model.error.connectivity'), _defineProperty(_ERROR_MESSAGES, _libBbModelErrors.E_USER, 'billpay.model.error.user'), _defineProperty(_ERROR_MESSAGES, _libBbModelErrors.E_UNEXPECTED, 'billpay.model.error.unexpected'), _ERROR_MESSAGES);
	
	/**
	 * @name errorToFieldMap
	 * @type {Object<string, Object>}
	 * @description map of backend error to matching field name
	 * @inner
	 */
	var errorToFieldMap = {
	  'billpay.api.invalidRequest': { field: 'billpay_page_error', unrecoverable: true },
	  'billpay.api.internalError': { field: 'billpay_page_error', unrecoverable: true },
	
	  // Payees
	  'billpay.api.payeeAlreadyExists': { field: 'billpay_manage_payee_name' },
	  'billpay.api.invalidStatus': { field: 'billpay_manage_payee_name' },
	  'billpay.api.accountSchemingFailed': { field: 'billpay_manage_payee_name' },
	  'billpay.api.invalidZipCode': { field: 'billpay_manage_payee_zip' },
	  'billpay.api.invalidAccountNumber': { field: 'billpay_manage_payee_account' },
	  'billpay.api.invalidAddressInformation': { field: 'billpay_manage_payee_address1' },
	  'billpay.api.invalidCityName': { field: 'billpay_manage_payee_city' },
	  'billpay.api.invalidStateCode': { field: 'billpay_manage_payee_state' },
	
	  // Payments, recoverable
	  'billpay.api.invalidNextPaymentDate': { field: 'billpay_payment_date' },
	  'billpay.api.paymentTooFarInAdvance': { field: 'billpay_payment_date' },
	  'billpay.api.invalidPaymentDate': { field: 'billpay_payment_date' },
	  'billpay.api.invalidPaymentAmount': { field: 'billpay_payment_amount' },
	  'billpay.api.paymentAmountTooLarge': { field: 'billpay_payment_amount' },
	  'billpay.api.paymentAmountTooSmall': { field: 'billpay_payment_amount' },
	  'billpay.api.invalidBankAccount': { field: 'billpay_payment_account' },
	  'billpay.api.paymentAlreadyExists': { field: 'billpay_payment_already_exists' },
	  'billpay.api.missingPaymentInformation': { field: 'billpay_payment_missing_information' },
	  'billpay.api.invalidEBillID': { field: 'billpay_payment_invalid_ebill' },
	  'billpay.api.dailyLimitExceeded': { field: 'billpay_payment_daily_limit_exceeded' },
	  'billpay.api.inactivePayee': { field: 'billpay_payment_payee' },
	  'billpay.api.invalidPayee': { field: 'billpay_payment_payee' },
	  // Payments, non-recoverable
	  'billpay.api.riskCheckFailed': { field: 'billpay_payment_risk_failed', unrecoverable: true },
	  'billpay.api.failedToChangePaymentState': { field: 'billpay_payment_change_failed', unrecoverable: true },
	  'billpay.api.fraudCheckFailed': { field: 'billpay_payment_fraud_failed', unrecoverable: true },
	  'billpay.api.tooManyPaymentsRequested': { field: 'billpay_payment_too_many_payments', unrecoverable: true },
	
	  // Recurring payment, specific. Recoverable assumed
	  'billpay.api.finalDateBeforeFirstDate': { field: 'billpay_payment_date', unrecoverable: false },
	  'billpay.api.paymentQuantityExceeded': { field: 'billpay_payment_quantity', unrecoverable: false },
	  'billpay.api.invalidCardRequest': { field: 'billpay_payment_account', unrecoverable: false }
	};
	
	/**
	 * @name keyToFieldMap
	 * @type {Object<string, string>}
	 * @description map of backend raml fields to matching form field name
	 * @inner
	 */
	var keyToFieldMap = {
	  // Payees
	  name: 'billpay_manage_payee_name',
	  nickName: 'billpay_manage_payee_nickname',
	  accountNumber: 'billpay_manage_payee_account',
	  city: 'billpay_manage_payee_city',
	  state: 'billpay_manage_payee_state',
	  postalCode: 'billpay_manage_payee_zip',
	  address1: 'billpay_manage_payee_address1',
	  address2: 'billpay_manage_payee_address2',
	
	  // Payments
	  paymentAccount: 'billpay_payment_account',
	  paymentAmount: 'billpay_payment_amount',
	  paymentDate: 'billpay_payment_date',
	  payee: 'billpay_payment_payee'
	};
	
	/**
	 * @name fallbackMapping
	 * @type {function}
	 * @description attempt to map from a key with a raml field to a form field
	 * @param {string} [key]
	 * @return {string}
	 * @inner
	 */
	var fallbackMapping = function fallbackMapping() {
	  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	
	  var _key$split$reverse = key.split('.').reverse(),
	      _key$split$reverse2 = _slicedToArray(_key$split$reverse, 1),
	      keyField = _key$split$reverse2[0];
	
	  return keyToFieldMap[keyField];
	};
	
	/**
	 * @name keyFromFieldMap
	 * @type {function}
	 * @description attempt to get a key from the errorToFieldMap
	 * @param {string} key
	 * @return {string}
	 * @inner
	 */
	var keyFromFieldMap = function keyFromFieldMap(key) {
	  return errorToFieldMap[key] && errorToFieldMap[key].field || '';
	};
	
	/**
	 * @name fieldId
	 * @type {function}
	 * @description Get a fieldID string using the map, the fallback or a default
	 * @param {object} error
	 * @param {string} error.key
	 * @return {string}
	 * @inner
	 */
	var fieldId = function fieldId(_ref) {
	  var key = _ref.key;
	  return keyFromFieldMap(key) || fallbackMapping(key) || 'billpay_page_error';
	};
	
	/**
	 * @name errorIsUnrecoverable
	 * @type {function}
	 * @description Return true if the key exists in the map and is unrecoverable
	 * @param {object} error
	 * @param {string} error.key
	 * @return {boolean}
	 * @inner
	 */
	var errorIsUnrecoverable = function errorIsUnrecoverable(_ref2) {
	  var key = _ref2.key;
	  return !!(errorToFieldMap[key] && errorToFieldMap[key].unrecoverable);
	};
	
	/**
	 * @name addErrorsToPayment
	 * @inner
	 * @type {function}
	 * @param {module.model-bb-billpay-ng.Payment} payment
	 * @param {Array<module.model-bb-billpay-ng.Payment>} responsePayments
	 * @description Add any backend errors onto payment, mark as recoverable or not
	 * @return {module.model-bb-billpay-ng.Payment} payment with errors added
	 */
	var addErrorsToPayment = function addErrorsToPayment(payment, responsePayments) {
	  var errorObj = responsePayments.find(function (responsePayment) {
	    return payment.payeeID === responsePayment.payeeID;
	  });
	  var errors = (errorObj ? errorObj.errors : []).map(function (e) {
	    return Object.assign(e, { unrecoverable: errorIsUnrecoverable(e) });
	  });
	  return Object.assign(payment, { errors: errors });
	};
	
	/**
	 * @name addPaymentErrors
	 * @inner
	 * @type {function}
	 * @param {object} current
	 * @param {Array<module.model-bb-billpay-ng.Payment>} current.paymentsSummary.payments
	 * @param {object} error
	 * @description Add any backend errors onto matching payments
	 * @return {Array<module.model-bb-billpay-ng.Payment>} Array of transformed payments
	 */
	var addPaymentErrors = function addPaymentErrors(_ref3, error) {
	  var payments = _ref3.paymentsSummary.payments;
	
	  // eslint-disable-next-line no-underscore-dangle
	  var response = error.__httpResponse;
	
	  if (error.code === _libBbModelErrors.E_USER && response && response.data && response.data.payments) {
	    return payments.map(function (payment) {
	      return addErrorsToPayment(payment, response.data.payments);
	    });
	  }
	  return payments;
	};
	
	/**
	 * @name Hooks
	 * @type {Object}
	 * @description Hooks for mapping errors
	 */
	exports.default = {
	  /**
	   * @name Hooks#getErrorMap
	   * @type {function}
	   * @description convert backend errors into a map keyed by field name
	   * @param {Array<{key : string}>} errors
	   * @return {Object<string, {key : string}>}
	   */
	  getErrorMap: function getErrorMap(errors) {
	    var defaultEntry = { billpay_page_error: { key: 'billpay.model.error.default' } };
	    return errors.reduce(function (map, error) {
	      return Object.assign(map, _defineProperty({}, fieldId(error), Object.assign({}, error, errorIsUnrecoverable(error) && { unrecoverable: true })));
	    }, defaultEntry);
	  },
	
	  /**
	   * @name Hooks#transformErrorMap
	   * @type {function}
	   * @description map backend errors into error object
	   * @param {module:lib-bb-model-errors.ModelError} modelError
	   * @return {{message : string, errors : Array<Object>}} mapped error
	   */
	  transformErrorMap: function transformErrorMap(modelError) {
	    var errors =
	    /* eslint-disable no-underscore-dangle */
	    modelError && modelError.code === _libBbModelErrors.E_USER && modelError.__httpResponse && modelError.__httpResponse.data.errors || [];
	    /* eslint-enable no-underscore-dangle */
	    return {
	      message: modelError && modelError.code ? ERROR_MESSAGES[modelError.code] : '',
	      fromFormSubmission: true,
	      errors: errors
	    };
	  },
	
	  /**
	   * @name Hooks#clearBackendError
	   * @type {function}
	   * @description clear an error from the map of backend errors
	   * @param {string} inputName
	   * @param {object} state
	   * @param {object} state.errorMap
	   * @return {object}
	   */
	  clearBackendError: function clearBackendError(inputName, _ref4) {
	    var errorMap = _ref4.errorMap;
	
	    var map = errorMap; // avoid eslint no-param-reassign
	    if (map) {
	      delete map[inputName];
	    }
	    if (map && Object.keys(map).length === 1 && map.billpay_page_error) {
	      // if no input field errors remove page error
	      delete map.billpay_page_error;
	    }
	    return errorMap;
	  },
	
	  /**
	   * @name Hooks#addPaymentErrors
	   * @type {function}
	   * @param {object} current
	   * @param {Array<module.model-bb-billpay-ng.Payment>} current.paymentsSummary.payments
	   * @param {object} error
	   * @description Add any backend errors onto matching payments
	   * @return {Array<module.model-bb-billpay-ng.Payment>} Array of transformed payments
	   */
	  addPaymentErrors: addPaymentErrors
	};

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_45__;

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-bb-billpay-errors.js.map