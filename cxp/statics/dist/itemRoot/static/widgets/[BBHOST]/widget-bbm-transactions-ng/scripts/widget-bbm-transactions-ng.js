(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-state-container-ng"), require("model-bb-transactions-ng"), require("lib-bb-extension-helpers-ng"), require("lib-bb-extension-events-ng"), require("lib-bb-extension-intents-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bbm-transactions-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-model-errors", "lib-bb-widget-extension-ng", "lib-bb-intent-ng", "lib-bb-event-bus-ng", "lib-bb-state-container-ng", "model-bb-transactions-ng", "lib-bb-extension-helpers-ng", "lib-bb-extension-events-ng", "lib-bb-extension-intents-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bbm-transactions-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-state-container-ng"), require("model-bb-transactions-ng"), require("lib-bb-extension-helpers-ng"), require("lib-bb-extension-events-ng"), require("lib-bb-extension-intents-ng"));
	else
		root["widget-bbm-transactions-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-model-errors"], root["lib-bb-widget-extension-ng"], root["lib-bb-intent-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-state-container-ng"], root["model-bb-transactions-ng"], root["lib-bb-extension-helpers-ng"], root["lib-bb-extension-events-ng"], root["lib-bb-extension-intents-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_63__, __WEBPACK_EXTERNAL_MODULE_64__, __WEBPACK_EXTERNAL_MODULE_71__, __WEBPACK_EXTERNAL_MODULE_82__, __WEBPACK_EXTERNAL_MODULE_83__, __WEBPACK_EXTERNAL_MODULE_84__, __WEBPACK_EXTERNAL_MODULE_85__, __WEBPACK_EXTERNAL_MODULE_86__, __WEBPACK_EXTERNAL_MODULE_87__, __WEBPACK_EXTERNAL_MODULE_106__, __WEBPACK_EXTERNAL_MODULE_107__) {
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

	module.exports = __webpack_require__(105);

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_63__;

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_64__;

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_71__;

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_82__;

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_83__;

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_84__;

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_85__;

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_86__;

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_87__;

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(63);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(82);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbWidgetNg = __webpack_require__(64);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbIntentNg = __webpack_require__(83);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbEventBusNg = __webpack_require__(84);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbStateContainerNg = __webpack_require__(85);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _modelBbTransactionsNg = __webpack_require__(86);
	
	var _modelBbTransactionsNg2 = _interopRequireDefault(_modelBbTransactionsNg);
	
	var _libBbExtensionHelpersNg = __webpack_require__(87);
	
	var _libBbExtensionHelpersNg2 = _interopRequireDefault(_libBbExtensionHelpersNg);
	
	var _libBbExtensionEventsNg = __webpack_require__(106);
	
	var _libBbExtensionEventsNg2 = _interopRequireDefault(_libBbExtensionEventsNg);
	
	var _libBbExtensionIntentsNg = __webpack_require__(107);
	
	var _libBbExtensionIntentsNg2 = _interopRequireDefault(_libBbExtensionIntentsNg);
	
	var _list = __webpack_require__(108);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _details = __webpack_require__(109);
	
	var _details2 = _interopRequireDefault(_details);
	
	var _defaultHooks = __webpack_require__(110);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	var _index = __webpack_require__(111);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _service = __webpack_require__(118);
	
	var _service2 = _interopRequireDefault(_service);
	
	var _constants = __webpack_require__(119);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bbm-transactions-ng
	 *
	 * @description
	 * Mobile Transactions widget.
	 */
	var moduleKey = 'widget-bbm-transactions-ng';
	var hooksKey = moduleKey + ':hooks';
	var serviceKey = moduleKey + ':service';
	var viewModelKey = moduleKey + ':viewModel';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_modelBbTransactionsNg2.default, _libBbWidgetNg2.default, _libBbEventBusNg2.default, _libBbIntentNg2.default, _libBbStateContainerNg2.default, _libBbExtensionHelpersNg2.default, _libBbExtensionEventsNg2.default, _libBbExtensionIntentsNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey, _libBbWidgetNg.widgetKey, hooksKey,
	/* into */
	_index2.default]).factory(serviceKey, [_modelBbTransactionsNg.modelTransactionsKey, viewModelKey, hooksKey, _libBbStateContainerNg.bbStateContainerKey,
	/* into */
	_service2.default]).factory(_libBbExtensionHelpersNg.extensionHelpersContextKey, [_libBbIntentNg.bbIntentKey, serviceKey, function (bbIntent, service) {
	  return { bbIntent: bbIntent, service: service };
	}]).factory(_libBbExtensionEventsNg.extensionEventsContextKey, [_libBbIntentNg.bbIntentKey, _libBbStateContainerNg.bbStateContainerKey, serviceKey, function (bbIntent, stateContainer, service) {
	  return {
	    bbIntent: bbIntent,
	    stateContainer: stateContainer,
	    service: service
	  };
	}]).factory(_libBbExtensionIntentsNg.extensionIntentsContextKey, [serviceKey, function (service) {
	  return { service: service };
	}]).controller('TransactionsListController', [
	
	/* into */
	_list2.default]).controller('TransactionsDetailsController', [
	
	/* into */
	_details2.default]).run([viewModelKey, _libBbIntentNg.bbIntentKey, _libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, function (viewModel, bbIntents, eventBus, widget) {
	  viewModel.init();
	
	  bbIntents.init().then(function () {
	    /**
	     * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
	     * and will be removed with the update to widget collection 3 (WC3)
	     */
	    eventBus.publish(_constants.Event.CXP_ITEM_LOADED, {
	      id: widget.getId()
	    });
	
	    eventBus.publish(_constants.Event.BB_ITEM_LOADED, {
	      id: widget.getId()
	    });
	  });
	}]).name;

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_106__;

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_107__;

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = TransactionsListController;
	/**
	 * @name TransactionsListController
	 * @ngkey TransactionsListController
	 * @type {object}
	 * @description
	 * Transactions widget list controller
	 */
	function TransactionsListController() {}

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = TransactionsDetailsController;
	/**
	 * @name TransactionsDetailsController
	 * @ngkey TransactionsDetailsController
	 * @type {object}
	 * @description
	 * Transactions widget details controller
	 */
	function TransactionsDetailsController() {}

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name defaultHooks
	 * @type {object}
	 *
	 * @description
	 * Default hooks for widget-bbm-transactions-ng
	 */
	
	/**
	 * @name defaultHooks#processRequestParams
	 * @type {function}
	 *
	 * @description
	 * Default hook for transactions query params processing/extending
	 *
	 * @param {object} params to process
	 * @param {?number} params.from The page to list from
	 * @param {?string} params.productId The product id
	 * @param {?string} params.query The search term used to search for transactions
	 * @param {?number} params.size The number of results per page
	 * @returns {Object} Processed params
	 */
	var processRequestParams = exports.processRequestParams = function processRequestParams(params) {
	  return params;
	};
	
	/**
	 * @name defaultHooks#processReloadRequestParams
	 * @type {function}
	 *
	 * @description
	 * Default hook for transactions query params processing/extending
	 *
	 * @param {object} params to process
	 * @param {?number} params.from The page to list from
	 * @param {?string} params.productId The product id
	 * @param {?string} params.query The search term used to search for transactions
	 * @param {?number} params.size The number of results per page
	 * @returns {Object} Processed params
	 */
	var processReloadRequestParams = exports.processReloadRequestParams = function processReloadRequestParams(params) {
	  return params;
	};
	
	/**
	 * @name defaultHooks#processSearchRequestParams
	 * @type {function}
	 *
	 * @description
	 * Default hook for transactions search query params processing/extending
	 *
	 * @param {object} params to process
	 * @param {?number} params.from The page to list from
	 * @param {?string} params.productId The product id
	 * @param {?string} params.query The search term used to search for transactions
	 * @param {?number} params.size The number of results per page
	 * @returns {Object} Processed params
	 */
	var processSearchRequestParams = exports.processSearchRequestParams = function processSearchRequestParams(params) {
	  return params;
	};

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _initialState = __webpack_require__(112);
	
	var _initialState2 = _interopRequireDefault(_initialState);
	
	var _list = __webpack_require__(113);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _product = __webpack_require__(115);
	
	var _product2 = _interopRequireDefault(_product);
	
	var _transaction = __webpack_require__(116);
	
	var _transaction2 = _interopRequireDefault(_transaction);
	
	var _search = __webpack_require__(117);
	
	var _search2 = _interopRequireDefault(_search);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Defines the default page size for the transactions page
	 * @type {number}
	 * @inner
	 */
	var DEFAULT_PAGE_SIZE = 10; // Combine state reducers
	
	exports.default = function (stateContainer, widget, hooks) {
	  var stateParams = {
	    pageSize: widget.getLongPreference('bb.transaction.pageSize') || DEFAULT_PAGE_SIZE
	  };
	
	  var initialState = (0, _initialState2.default)(stateParams);
	
	  /**
	   * @name ViewModel
	   * @type {object}
	   * @ngKey widget-bb-transactions-ng:viewModel
	   * @inner
	   */
	  return {
	    /**
	     * @name ViewModel#init
	     * @description Initialises view model with initial state
	     * @type {function}
	     * @inner
	     * @return {ViewState}
	     */
	    init: stateContainer.createAction(function () {
	      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	      return state;
	    }),
	
	    /**
	     * @name ViewModel#getState
	     * @description Returns view state
	     * @type {function}
	     * @inner
	     * @return {ViewState}
	     */
	    getState: stateContainer.getState,
	
	    /**
	     * @name ViewModel#list
	     * @description
	     * Actions for updating the parts of the `ViewState` related to transactions list
	     * @type {ViewModelListActions}
	     * @inner
	     */
	    list: (0, _list2.default)(stateContainer),
	
	    /**
	     * @name ViewModel#product
	     * @description
	     * Actions for updating the parts of the `ViewState` related to product state
	     * @type {ViewModelProductActions}
	     * @inner
	     */
	    product: (0, _product2.default)(stateContainer, hooks),
	
	    /**
	     * @name ViewModel#transaction
	     * @description
	     * Actions for updating the parts of the `ViewState` related to transaction state
	     * @type {ViewModelTransactionActions}
	     * @inner
	     */
	    transaction: (0, _transaction2.default)(stateContainer),
	
	    /**
	     * @name ViewModel#search
	     * @description
	     * Actions for updating the parts of the `ViewState` related to transactions search
	     * @type {ViewModelSearchActions}
	     * @inner
	     */
	    search: (0, _search2.default)(stateContainer)
	  };
	};

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (params) {
	  return {
	    product: {
	      data: null,
	      error: null,
	      loading: false
	    },
	    searching: false,
	    search: {
	      data: null,
	      error: null,
	      loading: false,
	      requestParams: {
	        from: null,
	        size: params.pageSize,
	        query: null
	      },
	      totalCount: 0
	    },
	    transaction: {
	      data: null,
	      error: null,
	      loading: false
	    },
	    transactions: {
	      data: null,
	      error: null,
	      loading: false,
	      requestParams: {
	        from: null,
	        size: params.pageSize
	      },
	      totalCount: 0
	    }
	  };
	};
	
	/**
	 * @typedef {Object} ViewState
	 * @description
	 * The current state of the [ViewModel]{@link module:lib-bb-view-model-ng}.
	 *
	 * @property {Object} product
	 * @property {Object} product.data Current product (arrangement) object
	 * @property {Object} product.error The last encountered error
	 * @property {String} product.error.message Error message
	 * @property {boolean} product.loading Indicates if the product is being loaded
	 *
	 * @property {boolean} searching Indicates if transactions search is active at the moment
	 *
	 * @property {Object} search
	 * @property {Object[]} search.data Collection of searched transactions
	 * @property {Object} search.error The last encountered error
	 * @property {string} search.error.message Error message
	 * @property {boolean} search.loading Indicates if search transactions are loading at the moment
	 * @property {RequestParams}
	 * search.requestParams A set of request params for searching transactions
	 * @property {number} search.totalCount Total number of search results
	 *
	 * @property {Object} transaction
	 * @property {Object} transaction.data Current transaction object
	 * @property {Object} transaction.error The last encountered error
	 * @property {String} transaction.error.message Error message
	 * @property {boolean} transaction.loading Indicates if the transaction is being loaded
	 *
	 * @property {Object} transactions
	 * @property {Object[]} transactions.data Collection of transactions
	 * @property {Object} transactions.error The last encountered error
	 * @property {string} transactions.error.message Error message
	 * @property {boolean} transactions.loading Indicates if transactions are loading at the moment
	 * @property {RequestParams}
	 * transactions.requestParams A set of request params for loading transactions
	 * @property {number} transactions.totalCount Total number of transactions
	 *
	 */
	
	/**
	 * @typedef {Object} RequestParams
	 * @description
	 * A set of request params that defines how to load the requested data.
	 *
	 * @property {number} from The current page (0 indexed), null from the start
	 * @property {number} size The number of transactions in the page
	 * @property {?string} query Query search parameter
	 */

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(114);
	
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelListActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelListActions#beforeLoad
	     * @description Update the `ViewState` before loading transactions
	     * @type {function}
	     * @inner
	     * @return {void}
	     */
	    init: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        transactions: Object.assign({}, state.transactions, {
	          data: null,
	          error: null,
	          loading: false,
	          requestParams: Object.assign({}, state.transactions.requestParams, {
	            from: null
	          }),
	          totalCount: 0
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#beforeLoad
	     * @description Update the `ViewState` before loading transactions
	     * @type {function}
	     * @inner
	     * @return {void}
	     */
	    beforeLoad: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        transactions: Object.assign({}, state.transactions, {
	          error: null,
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterLoadSuccess
	     * @description Update the `ViewState` after successfully loading transactions
	     * @type {function}
	     * @inner
	     * @param {TransactionsResponse} response Transactions load response
	     * @return {void}
	     */
	    afterLoadSuccess: stateContainer.createAction(function (state, response) {
	      return Object.assign({}, state, {
	        transactions: Object.assign({}, state.transactions, {
	          data: response.data,
	          error: null,
	          loading: false,
	          requestParams: Object.assign({}, state.transactions.requestParams, {
	            from: response.requestParams.from
	          }),
	          totalCount: response.totalCount
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterLoadError
	     * @description Update the `ViewState` after unsuccessful transactions load
	     * @type {function}
	     * @inner
	     * @param {module:lib-bb-model-errors.ModelError} error Response error
	     * @return {void}
	     */
	    afterLoadError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        transactions: Object.assign({}, state.transactions, {
	          error: (0, _helpers.uiError)(error),
	          loading: false
	        })
	      });
	    })
	  };
	};
	
	/**
	 * @typedef {object} TransactionsResponse
	 * @property {object[]} data Loaded transactions array
	 * @property {number} totalCount Total number of transactions
	 * @property {LoadRequestParams} requestParams Request parameters object
	 */
	
	/**
	 * @typedef {object} LoadRequestParams
	 * @property {number} from Page number to load
	 * @property {number} size Page size to load
	 * @property {string} productId Product ID of transactions to load
	 */

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.uiError = undefined;
	
	var _errorMessages;
	
	var _libBbModelErrors = __webpack_require__(71);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* eslint-disable import/prefer-default-export */
	
	
	var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'model.error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'model.error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'model.error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'model.error.unexpected'), _errorMessages);
	
	var uiError = exports.uiError = function uiError(error) {
	  return {
	    message: errorMessages[error.code]
	  };
	};

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelProductActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelProductActions#setProduct
	     * @description Update the `ViewState` with the given product
	     * @type {function}
	     * @inner
	     * @param {object|null} data New Product object
	     * @return {void}
	     */
	    setProduct: stateContainer.createAction(function (state, data) {
	      return Object.assign({}, state, {
	        product: Object.assign({}, state.product, {
	          data: data
	        })
	      });
	    })
	  };
	};

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelTransactionActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelTransactionActions#setTransaction
	     * @description Update the `ViewState` with the selected transaction
	     * @type {function}
	     * @inner
	     * @param {object} data Transaction object
	     * @return {void}
	     */
	    setTransaction: stateContainer.createAction(function (state, data) {
	      return Object.assign({}, state, {
	        transaction: Object.assign({}, state.transaction, {
	          data: data
	        })
	      });
	    })
	  };
	};

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(114);
	
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelSearchActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelSearchActions#setSearch
	     * @description Set the `ViewState` to prepare the search
	     * @type {function}
	     * @inner
	     * @param {SearchRequestParams} params Search request parameters
	     * @return {void}
	     */
	    setSearch: stateContainer.createAction(function (state, params) {
	      return Object.assign({}, state, {
	        search: Object.assign({}, state.search, {
	          data: null,
	          requestParams: Object.assign({}, state.search.requestParams, {
	            from: null, // reset from for each new search request
	            query: params.query || null
	          })
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelSearchActions#beforeSearch
	     * @description Update the `ViewState` before search transactions
	     * @type {function}
	     * @inner
	     * @param {SearchRequestParams} params Search request parameters
	     * @return {void}
	     */
	    beforeSearch: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        searching: true,
	        search: Object.assign({}, state.search, {
	          error: null,
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelSearchActions#afterSearchSuccess
	     * @description Update the `ViewState` after successful transactions search
	     * @type {function}
	     * @inner
	     * @param {TransactionsSearchResponse} response Search response
	     * @return {void}
	     */
	    afterSearchSuccess: stateContainer.createAction(function (state, response) {
	      return Object.assign({}, state, {
	        search: Object.assign({}, state.search, {
	          data: response.data,
	          error: null,
	          loading: false,
	          requestParams: Object.assign({}, state.search.requestParams, {
	            from: response.requestParams.from
	          }),
	          totalCount: response.totalCount
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelSearchActions#afterSearchError
	     * @description Update the `ViewState` after unsuccessful transactions search
	     * @type {function}
	     * @inner
	     * @param {module:lib-bb-model-errors.ModelError} error Response error
	     * @return {void}
	     */
	    afterSearchError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        search: Object.assign({}, state.search, {
	          error: (0, _helpers.uiError)(error),
	          loading: false
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelSearchActions#cancel
	     * @description Update the `ViewState` when transactions search canceled
	     * @type {function}
	     * @inner
	     * @return {void}
	     */
	    cancel: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        searching: false,
	        search: Object.assign({}, state.search, {
	          error: null,
	          loading: false,
	          requestParams: Object.assign({}, state.search.requestParams, {
	            from: null,
	            query: null
	          }),
	          totalCount: 0
	        })
	      });
	    })
	  };
	};
	
	/**
	 * @typedef {object} TransactionsSearchResponse
	 * @property {object[]} data Search transactions array
	 * @property {number} totalCount Total number of found transactions
	 * @property {SearchRequestParams} requestParams Request parameters object
	 */
	
	/**
	 * @typedef {object} SearchRequestParams
	 * @property {number} from Page number to load
	 * @property {number} size Page size to load
	 * @property {string} productId Product ID of transactions to load
	 * @property {?string} query Query search parameter
	 */

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/* global window */
	/**
	 * @name TransactionsService
	 * @type {Object}
	 * @ngkey widget-bbm-transactions-ng:service
	 * @description
	 * The service encapsulates the core functionality of the Transactions
	 * Widget. It co-ordinates the communication of data from the `Model`
	 * with the communication with the user by updating the {@link ViewState}.
	 *
	 * Asynchronous methods update the {@link ViewState} in 3 potential
	 * stages; "before", "success", and "error", to allow the view to
	 * provide feedback to the user.
	 */
	
	/**
	 * @name createTransactionsService
	 * @inner
	 * @type {function}
	 * @param {module:model-bb-transactions-ng.transactionsModel} model Transactions model
	 * @param {ViewModel} viewModel
	 * @param {defaultHooks} hooks
	 * @param {module:lib-bb-state-container-ng.StateContainer} stateContainer
	 * @return {TransactionsService}
	 */
	exports.default = function (model, viewModel, hooks, stateContainer) {
	  /**
	   * @name getRequestParams
	   * @type {function}
	   * @description
	   * returns the request params from the state
	   * @returns {Object} requestParams Request params from the state
	   * @inner
	   */
	  var getRequestParams = stateContainer.createSelector(function (state) {
	    return state.transactions.requestParams;
	  });
	
	  /**
	   * @name getSearchRequestParams
	   * @type {function}
	   * @description
	   * returns the search request params from the state
	   * @returns {Object} requestParams Request params from the state
	   * @inner
	   */
	  var getSearchRequestParams = stateContainer.createSelector(function (state) {
	    return state.search.requestParams;
	  });
	
	  /**
	   * @name getTransactions
	   * @type {function}
	   * @description
	   * returns the current list of `transactions`
	   * @returns {Array} transactions List of transactions from the state
	   * @inner
	   */
	  var getTransactions = stateContainer.createSelector(function (state) {
	    return state.transactions.data;
	  });
	
	  /**
	   * @name getSelectedProduct
	   * @type {function}
	   * @description
	   * returns the current selected `product`
	   * @returns {Object} product Product from the state
	   * @inner
	   */
	  var getSelectedProduct = stateContainer.createSelector(function (state) {
	    return state.product.data;
	  });
	
	  /**
	   * @name getSelectedTransaction
	   * @type {function}
	   * @description
	   * returns the current selected `transaction`
	   * @returns {Object} transaction Transaction from the state
	   * @inner
	   */
	  var getSelectedTransaction = stateContainer.createSelector(function (state) {
	    return state.transaction.data;
	  });
	
	  /**
	   * @name isAllTransactionsLoaded
	   * @type {function}
	   * @description
	   * Calculates if all the transactions have been loaded
	   * @returns {boolean}
	   * @inner
	   */
	  var isAllTransactionsLoaded = stateContainer.createSelector(function (state) {
	    return Boolean(state.transactions.data && state.transactions.data.length >= state.transactions.totalCount);
	  });
	
	  /**
	   * @name isAllSearchTransactionsLoaded
	   * @type {function}
	   * @description
	   * Calculates if all the transactions for the current search query been loaded
	   * @returns {boolean}
	   * @inner
	   */
	  var isAllSearchTransactionsLoaded = stateContainer.createSelector(function (state) {
	    return Boolean(state.search.data && state.search.data.length >= state.search.totalCount);
	  });
	
	  /**
	   * @name isSameProduct
	   * @type {function}
	   * @description
	   * Checks whether the given products are the same
	   * @param {Object} productA Product to compare
	   * @param {Object} productB Product to compare
	   * @returns {Boolean}
	   * @inner
	   */
	  var isSameProduct = function isSameProduct(productA, productB) {
	    return Boolean(productA && productB && productA.id === productB.id);
	  };
	
	  /**
	   * @name getNextRequestParams
	   * @type {function}
	   * @description
	   * Calculates the request params to load the data for the next request.
	   * Note: It also calculates the data for the first request. Therefore the
	   *       Initial from params need to be null and not 0.
	   * @returns {Object} params Processed request params
	   * @inner
	   */
	  var getNextRequestParams = function getNextRequestParams() {
	    var requestParams = getRequestParams();
	    var product = getSelectedProduct();
	
	    var from = requestParams.from === null ? 0 : requestParams.from + 1;
	    var size = requestParams.size;
	    var productId = product ? product.id : null;
	
	    return hooks.processRequestParams({
	      from: from,
	      size: size,
	      productId: productId
	    });
	  };
	
	  /**
	   * @name getNextSearchRequestParams
	   * @type {function}
	   * @description
	   * Calculates the request params to load the data for the next search request.
	   * Note: It also calculates the data for the first request. Therefore the
	   *       Initial from params need to be null and not 0.
	   * @returns {Object} params Processed search request params
	   * @inner
	   */
	  var getNextSearchRequestParams = function getNextSearchRequestParams() {
	    var requestParams = getSearchRequestParams();
	    var product = getSelectedProduct();
	
	    var from = requestParams.from === null ? 0 : requestParams.from + 1;
	    var size = requestParams.size;
	    var productId = product ? product.id : null;
	    var query = requestParams.query;
	
	    return hooks.processSearchRequestParams({
	      from: from,
	      size: size,
	      productId: productId,
	      query: query
	    });
	  };
	
	  /**
	   * @name getReloadRequestParams
	   * @type {function}
	   * @description
	   * Calculates the request params to load the data for the next request.
	   * Note: It also calculates the data for the first request. Therefore the
	   *       Initial from params need to be null and not 0.
	   * @returns {Object} params Processed request params
	   * @inner
	   */
	  var getReloadRequestParams = function getReloadRequestParams() {
	    var requestParams = getRequestParams();
	    var product = getSelectedProduct();
	
	    var from = 0;
	    var size = requestParams.from === null ? requestParams.size : requestParams.size * (requestParams.from + 1);
	    var productId = product ? product.id : null;
	
	    return hooks.processReloadRequestParams({
	      from: from,
	      size: size,
	      productId: productId
	    });
	  };
	
	  /**
	   * @name recalculateRequestParams
	   * @type {function}
	   * @description
	   * Recalculates the request params to load the data for the next request.
	   * @returns {Object} data Data used to calculate the request params
	   * @inner
	   */
	  var recalculateRequestParams = function recalculateRequestParams(data) {
	    var requestParams = getRequestParams();
	    var product = getSelectedProduct();
	
	    var from = Math.floor(data.length / requestParams.size);
	    var size = requestParams.size;
	    var productId = product ? product.id : null;
	
	    return hooks.processRequestParams({
	      from: from,
	      size: size,
	      productId: productId
	    });
	  };
	
	  /**
	   * @name uniqueArray
	   * @type {function}
	   * @description
	   * Creates a duplicate-free version of an array
	   * @param {Array} array Array of items
	   * @inner
	   */
	  var uniqueArray = function uniqueArray(array) {
	    return array.filter(function (itemOuter, index) {
	      return array.findIndex(function (itemInner) {
	        return itemOuter.id === itemInner.id;
	      }) === index;
	    });
	  };
	
	  /**
	   * @name appendTransactions
	   * @type {function}
	   * @description
	   * Appends the given list of `transactions` to the current list of `transactions`
	   * if this function is used as a merge strategy function
	   * @param {Array} transactions List of `transactions`
	   * @returns {Array} transactions Merged list of `transactions`
	   * @inner
	   */
	  var appendTransactions = function appendTransactions(transactions) {
	    return uniqueArray([].concat(_toConsumableArray(getTransactions() || []), _toConsumableArray(transactions)));
	  };
	
	  /**
	   * @name replaceTransactions
	   * @type {function}
	   * @description
	   * Returns the given list of `transactions` immediately and therefore replaces
	   * the list of `transactions` if this function is used as a merge strategy function
	   * @param {Array} transactions List of `transactions`
	   * @returns {Array} transactions List of `transactions`
	   * @inner
	   */
	  var replaceTransactions = function replaceTransactions(transactions) {
	    return transactions;
	  };
	
	  /**
	   * @name loadTransactions
	   * @type {function}
	   * @description
	   * Fetch a `page` of `transactions` from the model and
	   * update the {@link ViewState} to display them.
	   * @param {function} mergeFn function defining the merge strategy
	   * @returns {Promise}
	   * @inner
	   */
	  var loadTransactions = function loadTransactions(mergeFn) {
	    var requestParams = getNextRequestParams();
	
	    viewModel.list.beforeLoad();
	
	    return model.load(requestParams).then(function (_ref) {
	      var data = _ref.data,
	          totalCount = _ref.totalCount;
	
	      viewModel.list.afterLoadSuccess({
	        data: mergeFn(data),
	        requestParams: requestParams,
	        totalCount: totalCount
	      });
	    }).catch(function (error) {
	      viewModel.list.afterLoadError(error);
	      throw error;
	    });
	  };
	
	  /**
	   * @name reloadTransactions
	   * @type {function}
	   * @description
	   * Fetch a `page` of `notifications` from the model and
	   * update the {@link ViewState} to display them.
	   * @returns {Promise}
	   * @inner
	   */
	  var reloadTransactions = function reloadTransactions() {
	    var reloadRequestParams = getReloadRequestParams();
	
	    viewModel.list.beforeLoad();
	
	    return model.load(reloadRequestParams).then(function (_ref2) {
	      var data = _ref2.data,
	          totalCount = _ref2.totalCount;
	
	      viewModel.list.afterLoadSuccess({
	        data: replaceTransactions(data),
	        requestParams: recalculateRequestParams(data),
	        totalCount: totalCount
	      });
	    }).catch(function (error) {
	      viewModel.list.afterLoadError(error);
	      throw error;
	    });
	  };
	
	  /**
	   * @name searchTransactions
	   * @type {function}
	   * @description
	   * Fetch a `page` of `transactions` from the model that meet the given search query and
	   * update the {@link ViewState} to display them.
	   * @param {string} query Search query string
	   * @param {function} mergeFn function defining the merge strategy
	   * @returns {Promise}
	   * @inner
	   */
	  var searchTransactions = function searchTransactions(mergeFn) {
	    var requestParams = getNextSearchRequestParams();
	    viewModel.search.beforeSearch();
	
	    return model.load(requestParams).then(function (_ref3) {
	      var data = _ref3.data,
	          totalCount = _ref3.totalCount;
	
	      viewModel.search.afterSearchSuccess({
	        data: mergeFn(data),
	        requestParams: requestParams,
	        totalCount: totalCount
	      });
	    }).catch(function (error) {
	      viewModel.search.afterSearchError(error);
	      throw error;
	    });
	  };
	
	  /**
	   * @name TransactionsService#loadMoreTransactions
	   * @type {function}
	   * @description
	   * Loads more `transactions` for the currently selected product.
	   */
	  var loadMoreTransactions = function () {
	    var loadMoreTransactionsPromise = void 0;
	
	    return function () {
	      if (loadMoreTransactionsPromise || isAllTransactionsLoaded()) {
	        return loadMoreTransactionsPromise;
	      }
	
	      loadMoreTransactionsPromise = loadTransactions(appendTransactions).then(function () {
	        loadMoreTransactionsPromise = null;
	      }).catch(function (error) {
	        loadMoreTransactionsPromise = null;
	        throw error;
	      });
	
	      return loadMoreTransactionsPromise;
	    };
	  }();
	
	  /**
	   * @name TransactionsService#searchMoreTransactions
	   * @type {function}
	   * @description
	   * Loads more `transactions` that meet the current search query.
	   */
	  var searchMoreTransactions = function () {
	    var searchMoreTransactionsPromise = void 0;
	
	    return function () {
	      if (searchMoreTransactionsPromise || isAllSearchTransactionsLoaded()) {
	        return searchMoreTransactionsPromise;
	      }
	
	      searchMoreTransactionsPromise = searchTransactions(appendTransactions).then(function () {
	        searchMoreTransactionsPromise = null;
	      }).catch(function (error) {
	        searchMoreTransactionsPromise = null;
	        throw error;
	      });
	
	      return searchMoreTransactionsPromise;
	    };
	  }();
	
	  /**
	   * @name TransactionsService#setSelectedProduct
	   * @type {function}
	   * @description
	   * Sets the selected product, loads the corresponding `transactions`
	   * and updates the {@link ViewState} to display them.
	   * @param {Object} product Product to select and load transactions for
	   */
	  var setSelectedProduct = function setSelectedProduct(product) {
	    var selectedProduct = getSelectedProduct();
	
	    if (isSameProduct(selectedProduct, product)) {
	      return reloadTransactions();
	    }
	
	    viewModel.list.init();
	    viewModel.product.setProduct(product);
	    return loadTransactions(replaceTransactions);
	  };
	
	  /**
	   * @name TransactionsService#setSelectedTransaction
	   * @type {function}
	   * @description
	   * Sets the selected transaction and updates the {@link ViewState} to display them.
	   * @param {Object} transaction Transaction to select
	   */
	  var setSelectedTransaction = function setSelectedTransaction(transaction) {
	    var selectedTransaction = getSelectedTransaction();
	
	    if (!selectedTransaction || selectedTransaction.id !== transaction.id) {
	      viewModel.transaction.setTransaction(transaction);
	    }
	  };
	
	  /**
	   * @name TransactionsService#setSearchQuery
	   * @type {function}
	   * @description
	   * Prepares and starts the search on the {@link ViewState}.
	   */
	  var setSearchQuery = function setSearchQuery(query) {
	    viewModel.search.setSearch({ query: query });
	    return searchTransactions(replaceTransactions);
	  };
	
	  /**
	   * @name TransactionsService#cancelSearch
	   * @type {function}
	   * @description
	   * Cancels the search and resets the search on the {@link ViewState}.
	   */
	  var cancelSearch = function cancelSearch() {
	    return viewModel.search.cancel();
	  };
	
	  return {
	    cancelSearch: cancelSearch,
	    loadMoreTransactions: loadMoreTransactions,
	    reloadTransactions: reloadTransactions,
	    searchMoreTransactions: searchMoreTransactions,
	    setSearchQuery: setSearchQuery,
	    setSelectedProduct: setSelectedProduct,
	    setSelectedTransaction: setSelectedTransaction
	  };
	};

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable import/prefer-default-export */
	var Event = exports.Event = {
	  /**
	   * The widget is bootstrapped (data may not be loaded).
	   * @event cxp.item.loaded
	   * @type {string}
	   * @property {string} id The widget ID
	   */
	  CXP_ITEM_LOADED: 'cxp.item.loaded',
	
	  /**
	   * The widget is bootstrapped (data may not be loaded).
	   * @event bb.item.loaded
	   * @type {string}
	   * @property {string} id The widget ID
	   */
	  BB_ITEM_LOADED: 'bb.item.loaded'
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bbm-transactions-ng.js.map