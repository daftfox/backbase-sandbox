(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib-bb-state-container-ng"), require("lib-wm-portfolio-view-model-helper"), require("vendor-bb-angular"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("model-wm-portfolio-summary-ng"), require("lib-bb-intent-ng"), require("lib-bb-widget-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-wm-portfolio-transactions-ng", ["lib-bb-state-container-ng", "lib-wm-portfolio-view-model-helper", "vendor-bb-angular", "lib-bb-event-bus-ng", "lib-bb-widget-extension-ng", "model-wm-portfolio-summary-ng", "lib-bb-intent-ng", "lib-bb-widget-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-wm-portfolio-transactions-ng"] = factory(require("lib-bb-state-container-ng"), require("lib-wm-portfolio-view-model-helper"), require("vendor-bb-angular"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("model-wm-portfolio-summary-ng"), require("lib-bb-intent-ng"), require("lib-bb-widget-ng"));
	else
		root["widget-wm-portfolio-transactions-ng"] = factory(root["lib-bb-state-container-ng"], root["lib-wm-portfolio-view-model-helper"], root["vendor-bb-angular"], root["lib-bb-event-bus-ng"], root["lib-bb-widget-extension-ng"], root["model-wm-portfolio-summary-ng"], root["lib-bb-intent-ng"], root["lib-bb-widget-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_86__, __WEBPACK_EXTERNAL_MODULE_88__, __WEBPACK_EXTERNAL_MODULE_93__, __WEBPACK_EXTERNAL_MODULE_120__, __WEBPACK_EXTERNAL_MODULE_125__, __WEBPACK_EXTERNAL_MODULE_126__, __WEBPACK_EXTERNAL_MODULE_129__, __WEBPACK_EXTERNAL_MODULE_152__) {
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

	module.exports = __webpack_require__(164);

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_86__;

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_88__;

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_93__;

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_120__;

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_125__;

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_126__;

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_129__;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_152__;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(93);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(125);
	
	var _libBbEventBusNg = __webpack_require__(120);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _modelWmPortfolioSummaryNg = __webpack_require__(126);
	
	var _modelWmPortfolioSummaryNg2 = _interopRequireDefault(_modelWmPortfolioSummaryNg);
	
	var _libBbWidgetNg = __webpack_require__(152);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbIntentNg = __webpack_require__(129);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbStateContainerNg = __webpack_require__(86);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _controller = __webpack_require__(165);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _viewModel = __webpack_require__(167);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	var _service = __webpack_require__(168);
	
	var _service2 = _interopRequireDefault(_service);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-wm-portfolio-transactions-ng
	 *
	 * @description
	 * Portfolio transactions widget.
	 *
	 *
	 * @example
	 *  <div ng-controller="PortfolioTransactionsController as $ctrl">
	 *    <ul>
	 *       <li ng-repeat="transaction in $ctrl.portfolioTransactions">{{transaction.id}}</li>
	 *    </ul>
	 *  </div>
	 */
	var viewModelKey = 'viewModel';
	var portfolioTransactionsServiceKey = 'portfolioTransactionsService';
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('widget-wm-portfolio-transactions-ng', [_modelWmPortfolioSummaryNg2.default, _libBbEventBusNg2.default, _libBbWidgetNg2.default, _libBbIntentNg2.default, _libBbStateContainerNg2.default]).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey, _viewModel2.default]).factory(portfolioTransactionsServiceKey, [_modelWmPortfolioSummaryNg.modelPortfolioSummaryKey, viewModelKey, _service2.default]).factory(_libBbWidgetExtensionNg.extensionContextKey, [portfolioTransactionsServiceKey, function (portfolioTransactionsService) {
	  return { portfolioTransactionsService: portfolioTransactionsService };
	}]).controller('PortfolioTransactionsController', [_libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, _libBbIntentNg.bbIntentKey, viewModelKey, portfolioTransactionsServiceKey,
	/* into */
	_controller2.default]).run([viewModelKey, function (viewModel) {
	  viewModel.init();
	}]).name;
	
	/**
	 * @description Portfolio transactions type definition
	 * @typedef {object} PortfolioTransactions
	 * @property {array} data Set of portfolio transaction ids
	 * @property {object} list Normalized set of portfolio transactions
	 * @property {boolean} loading Loading flag
	 */
	
	/**
	 * @typedef {Object}               initialFilterState  - Initial state of transactions` filter
	 * @property {String}              instrumentName      - Name of the instrument in transaction
	 * @property {String}              isin                - Instrument/asset international code
	 * @property {String}              counterpartyName    - Name of counterparty of the transaction
	 * @property {String}              counterpartyAccount - Account id of counterpart in transaction
	 * @property {timePeriod}          timePeriod          - Time period of transactions to filter
	 * @property {assetClass}          assetClass          - Asset class selected to filter
	 * @property {transactionCategory} transactionCategory - Transactions category selected to filter
	 * @property {account}             account             - Acount selected to filter
	 * @property {Number}              amountRangeFrom     - Amount to filter from
	 * @property {Number}              amountRangeTo       - Amount to filter to
	 */
	
	/**
	 * @typedef {Object}        timePeriod
	 * @property {Date}         startDate                  - start date
	 * @property {Date}         endDate                    - end date
	 */
	
	/**
	 * @typedef {Object}        assetClass
	 * @property {String}       name                       - asset class name
	 * @property {String}       id                         - id of asset class
	 */
	
	/**
	 * @typedef {Object}        transactionCategory
	 * @property {String}       name                       - transaction category name
	 * @property {String}       id                         - id of transaction category
	 */
	
	/**
	 * @typedef {Object}        account
	 * @property {String}       name                       - account name
	 * @property {String}       id                         - id of account
	 */

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = PortfolioTransactionsController;
	
	var _constants = __webpack_require__(166);
	
	/**
	 * @name PortfolioTransactionsController
	 * @ngkey PortfolioTransactionsController
	 * @type {object}
	 * @description
	 * Portfolio Transactions controller.
	 */
	function PortfolioTransactionsController(eventBus, widgetInstance, bbIntents, viewModel, portfolioTransactionsService) {
	  var widgetItemsPerPage = widgetInstance.getLongPreference(_constants.WidgetPropNames.ITEMS_PER_PAGE) || _constants.DEFAULT_PAGE_SIZE;
	  if (widgetItemsPerPage) {
	    viewModel.setSize(widgetItemsPerPage);
	  }
	
	  /**
	   * @public
	   * @name PortfolioTransactionsController#applyFilter
	   * @description applies transactions filter,
	   * reload data passing applied filter in request
	   * @type {function}
	   * @param {object} filterState state of the filter to apply
	   * @returns {promise}
	   */
	  var applyFilter = function applyFilter(filterState) {
	    viewModel.applyFilter(filterState);
	    return portfolioTransactionsService.load(filterState, false, false);
	  };
	
	  /**
	   * @private
	   * @description Reload widget using provided filter options
	   * @type {function}
	   * @fires update.transactions.filter
	   */
	  var reload = function reload(_ref) {
	    var portfolioId = _ref.portfolioId,
	        positionId = _ref.positionId,
	        positionInstrumentName = _ref.positionInstrumentName;
	
	    var filter = {
	      account: { id: portfolioId },
	      positionId: positionId,
	      instrumentName: positionInstrumentName
	    };
	    eventBus.publish(_constants.Event.UPDATE_TRANSACTION_FILTER, filter);
	  };
	
	  /**
	   * @private
	   * @description Adds intent
	   * @type {function}
	   * @fires view.transactions
	   */
	  var initIntents = function initIntents() {
	    bbIntents.handle(_constants.Intent.TRANSACTION_LIST, reload);
	    bbIntents.init(function () {
	      return null;
	    });
	  };
	
	  /*
	   * Widget initialization logic.
	   */
	  var $onInit = function $onInit() {
	    portfolioTransactionsService.loadFilterOptions();
	    initIntents();
	    return portfolioTransactionsService.load();
	  };
	
	  /**
	   * @description
	   * Loads more transactions and append them to the transaction's list
	   *
	   * @public
	   * @name PortfolioTransactionsController#loadMore
	   * @type {function}
	   * @returns {promise}
	   * @param {function} done Callback function for `ui-bb-load-more-ng` component
	   */
	  var loadMore = function loadMore(done) {
	    return portfolioTransactionsService.load(viewModel.getState().appliedFilter).then(done).catch(done);
	  };
	
	  return {
	    loadTransactionDetails: portfolioTransactionsService.loadTransactionDetails,
	    load: portfolioTransactionsService.load,
	    applyFilter: applyFilter,
	    switchPositionType: viewModel.switchPositionType,
	    $onInit: $onInit,
	    loadMore: loadMore,
	    get state() {
	      return viewModel.getState();
	    },
	    get errors() {
	      return viewModel.getState().errors;
	    }
	  };
	}

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Event
	 * @type {object}
	 *
	 * @description
	 * Widget events to be handled
	 *
	 * @property {string} TRANSACTION_LIST  Used to display a transaction list
	 * to move to the transaction list
	 * @property {string} UPDATE_TRANSACTION_FILTER  Used to set a new filters for transactions
	 */
	var Event = exports.Event = {
	  UPDATE_TRANSACTION_FILTER: 'update.transactions.filter'
	};
	
	/**
	 * @name Intent
	 * @type {object}
	 *
	 * @description
	 * Widget intents to be handled
	 *
	 * @property {string} TRANSACTION_LIST  Used when clicking on the transaction icon
	 * to move to the transaction list
	 */
	var Intent = exports.Intent = {
	  TRANSACTION_LIST: 'view.transactions'
	};
	
	/**
	 * @name WidgetPropNames
	 * @type {object}
	 *
	 * @description
	 * Custom widget properties
	 *
	 * @property {string} ITEMS_PER_PAGE  Number of items to display per page
	 */
	var WidgetPropNames = exports.WidgetPropNames = {
	  ITEMS_PER_PAGE: 'bb.transaction.size'
	};
	
	/**
	 * @description Default number of transaction records per page
	 * @name DEFAULT_PAGE_SIZE
	 * @type {number}
	 */
	var DEFAULT_PAGE_SIZE = exports.DEFAULT_PAGE_SIZE = 20;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libWmPortfolioViewModelHelper = __webpack_require__(88);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * @name initialFilterOptions
	 * @type {initialFilterOptions}
	 * @description Initial options of transactions` filter
	 */
	var initialFilterOptions = {
	  assetClasses: [{ name: 'All', id: null }],
	  categories: [{ name: 'All', id: null }],
	  accounts: [{ name: 'All', id: null }]
	};
	
	var startDate = new Date();
	startDate.setMonth(startDate.getMonth() - 3);
	if (startDate.getDate() !== new Date().getDate()) {
	  startDate.setDate(1);
	} else {
	  startDate.setDate(startDate.getDate() + 1);
	}
	startDate.setHours(0, 0, 0);
	startDate.setMilliseconds(0);
	
	var endDate = new Date();
	endDate.setHours(23, 59, 59, 999);
	
	/**
	 * @name initialFilterState
	 * @type {initialFilterState}
	 * @description Initial state of transactions` filter
	 */
	var initialFilterState = {
	  instrumentName: '',
	  isin: '',
	  counterpartyName: '',
	  counterpartyAccount: '',
	  timePeriod: {
	    startDate: startDate,
	    endDate: endDate
	  },
	  assetClass: {
	    name: 'All',
	    id: null
	  },
	  transactionCategory: {
	    name: 'All',
	    id: null
	  },
	  account: {
	    name: 'All',
	    id: null
	  },
	  amountRangeFrom: null,
	  amountRangeTo: null
	};
	
	/**
	 * @private
	 * @name initialState
	 * @description Controller's state object
	 * @type {object}
	 * @property {PortfolioTransactions} portfolioTransactions an object of portfolio transactions
	 * @property {boolean} initialLoading Boolean flag of initial loading
	 * @property {boolean} isFilterOpen Boolean flag informing whether transactions filter is open
	 * @property {object} appliedFilter State of applied transactions filter
	 * @property {boolean} allTransactionsLoaded
	 *                     Indicates whether all transactions from all pages are loaded
	 * @property {number} from Offset of pages to show transactions
	 *                           Indicates whether it's a brand new search. Means no page offset.
	 * @property {object} filterOptions Object containing options for transactions filter
	 * @property {string} positionType Selected position type to filter transactions by
	 * @property {object} errors Description of received errors
	 */
	var initialState = {
	  initialFilterOptions: initialFilterOptions,
	  initialFilterState: initialFilterState,
	  portfolioTransactions: {
	    data: [],
	    list: {},
	    loading: false
	  },
	  initialLoading: true,
	  isFilterOpen: false,
	  appliedFilter: null,
	  allTransactionsLoaded: false,
	  size: 0,
	  from: 0,
	  filterOptions: initialFilterOptions,
	  positionType: 'All',
	  errors: {
	    portfolioTransactionsError: null
	  }
	};
	
	/**
	 * @private
	 * @name getPageParams
	 * @type {function}
	 * @description Returns incremented offset or tells whether all transactions were loaded
	 * @param {object} state Current state of our widget
	 * @param {array} data List of received transactions
	 * @returns {object}
	 *          Contains increased offset or flag that talls whether all transactions were loaded
	 */
	var getPageParams = function getPageParams(state, data) {
	  if (data.length < state.size) {
	    return { allTransactionsLoaded: true };
	  }
	  return { from: state.from + 1 };
	};
	
	/**
	 * @public
	 * @name ViewModel
	 * @type {function}
	 * @description Creates ViewModel for PortfolioTransactions widget
	 * @param {object} stateContainer
	 * @returns {object} Model for changing our state
	 */
	
	exports.default = function (stateContainer) {
	  return Object.assign({
	
	    /**
	     * @public
	     * @name getState
	     * @type {function}
	     * @returns {function} Functions that returns state of our widget
	     */
	    getState: stateContainer.getState
	
	  }, (0, _libWmPortfolioViewModelHelper.wrapActions)(stateContainer, {
	
	    /**
	     * @public
	     * @name init
	     * @type {function}
	     * @param {object} state State of our widget
	     * @returns {object} Initial state
	     */
	    init: function init() {
	      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	      return state;
	    },
	
	    /**
	     * @public
	     * @name beforeLoadPortfolioTransactions
	     * @type {function}
	     * @returns {{portfolioTransactions: {loading: true}}}
	     *          Sets loading flag of portfolio transactions to true
	     */
	    beforeLoadPortfolioTransactions: function beforeLoadPortfolioTransactions() {
	      return {
	        portfolioTransactions: {
	          loading: true
	        }
	      };
	    },
	
	    /**
	     * @public
	     * @name afterLoadPortfolioTransactionsSuccess
	     * @type {function}
	     * @param {object} state Current state of out widget
	     * @param {array} data Data, returned from model
	     * @param {boolean} doMerge Flag, that tells whether we need to merge data or overwrite it
	     * @param {boolean} doSelectPositionType Flag, that tells whether position type must be set
	     * @returns {{initialLoading: boolean, positionType, portfolioTransactions:
	     *          {data: *, list: *, loading: boolean}, errors: {portfolioTransactionsError: null}}}
	     *          New state after transactions load
	     */
	    afterLoadPortfolioTransactionsSuccess: function afterLoadPortfolioTransactionsSuccess(state, _ref) {
	      var data = _ref.data,
	          doMerge = _ref.doMerge,
	          doSelectPositionType = _ref.doSelectPositionType;
	
	      var positionType = state.positionType;
	      if (doSelectPositionType && data[0]) {
	        positionType = data[0].positionType;
	      }
	
	      var ids = data.map(function (_ref2) {
	        var id = _ref2.id;
	        return id;
	      });
	      return Object.assign({}, getPageParams(state, data), {
	        initialLoading: false,
	        positionType: positionType,
	        portfolioTransactions: {
	          data: doMerge ? [].concat(_toConsumableArray(state.portfolioTransactions.data), _toConsumableArray(ids)) : ids,
	          list: data.reduce(function (list, current) {
	            return Object.assign({}, list, _defineProperty({}, current.id, current));
	          }, {}),
	          loading: false
	        },
	        errors: {
	          portfolioTransactionsError: null
	        }
	      });
	    },
	
	    /**
	     * @public
	     * @name afterLoadPortfolioTransactionsError
	     * @type {function}
	     * @param {object} state Current state of widget
	     * @param {object} error Error, which occurred after model method call
	     * @returns {{errors: {portfolioTransactionsError: number}}}
	     *          Saves received error to state
	     */
	    afterLoadPortfolioTransactionsError: function afterLoadPortfolioTransactionsError(state, error) {
	      return {
	        initialLoading: false,
	        errors: {
	          portfolioTransactionsError: error.code
	        }
	      };
	    },
	
	    /**
	     * @public
	     * @name afterLoadFilterOptionsSuccess
	     * @type {function}
	     * @param {object} state Current state of widget
	     * @param {object} data Received filter options
	     * @returns {{filterOptions: object}} Sets new filter options
	     */
	    afterLoadFilterOptionsSuccess: function afterLoadFilterOptionsSuccess(state, _ref3) {
	      var data = _ref3.data;
	      return {
	        filterOptions: {
	          assetClasses: [{ name: 'All', id: null }].concat(data.assetClasses),
	          categories: [{ name: 'All', id: null }].concat(data.categories),
	          accounts: [{ name: 'All', id: null }].concat(data.accounts)
	        }
	      };
	    },
	
	    /**
	     * @public
	     * @name afterLoadFilterOptionsError
	     * @type {function}
	     * @param {object} state Current state of widget
	     * @param {object} error Error, which occurred after model method call
	     * @returns {{errors: {portfolioTransactionsError: number}}}
	     *          Saves received error to state
	     */
	    afterLoadFilterOptionsError: function afterLoadFilterOptionsError(state, error) {
	      return {
	        errors: {
	          portfolioTransactionsError: error.code
	        }
	      };
	    },
	
	    /**
	     * @public
	     * @name switchPositionType
	     * @type {function}
	     * @param {object} state Current state of widget
	     * @param {string} type New transactions' position type
	     * @returns {{positionType: string}} New transactions' position type
	     */
	    switchPositionType: function switchPositionType(state, type) {
	      return {
	        positionType: type
	      };
	    },
	
	    /**
	     * @public
	     * @name applyFilter
	     * @type {function}
	     * @param {object} filterState Set of filter rules
	     * @returns {{appliedFilter: object, allTransactionsLoaded: false, offset: 0}}
	     *          New transactions' filter state
	     */
	    applyFilter: function applyFilter(state, filterState) {
	      return {
	        appliedFilter: filterState,
	        allTransactionsLoaded: false,
	        from: 0
	      };
	    },
	
	    /**
	     * @public
	     * @name setSize
	     * @type {function}
	     * @param {object} state Current state of widget
	     * @param {number} size Amount of transactions per page
	     * @returns {{size: number}} Amount of transactions per page
	     */
	    setSize: function setSize(state, size) {
	      return { size: size };
	    },
	
	    /**
	     * @public
	     * @name afterLoadTransactionDetailsSuccess
	     * @type {function}
	     * @param {object} state Current state of widget
	     * @param {object} data Detailed transaction data
	     * @param {number} id Transaction id
	     * @returns {object} Detailed data for given transaction
	     */
	    afterLoadTransactionDetailsSuccess: function afterLoadTransactionDetailsSuccess(state, _ref4) {
	      var data = _ref4.data,
	          id = _ref4.id;
	      return {
	        portfolioTransactions: {
	          list: _defineProperty({}, id, {
	            details: data
	          })
	        }
	      };
	    },
	
	    /**
	     * @public
	     * @name afterLoadTransactionDetailsError
	     * @type {function}
	     * @param {object} state Current state of widget
	     * @param {object} error Error, which occurred after model method call
	     * @returns {{errors: {portfolioTransactionsError: number}}}
	     *          Saves received error to state
	     */
	    afterLoadTransactionDetailsError: function afterLoadTransactionDetailsError(state, error) {
	      return {
	        errors: {
	          portfolioTransactionsError: error.code
	        }
	      };
	    }
	  }));
	};

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * @public
	 * @name PortfolioTransactionsService
	 * @type {function}
	 * @description Service that serves to connect ng container with model and save data to view model
	 * @param {object} model Portfolio transactions model module
	 * @param {object} viewModel Portfolio transactions view model responsible for state
	 * @returns {object} Service that connects controller with model
	 */
	exports.default = function (model, viewModel) {
	  return {
	
	    /**
	     * @public
	     * @name load
	     * @type {function}
	     * @description Loads set of transactions
	     * @param {object} filterState Set of filter rules
	     * @param {boolean} doSelectPositionType Flag, that tells whether position type must be set
	     * @param {boolean} doMerge Flag, that tells whether we need to merge data or overwrite it
	     * @returns {promise} Promise, returned by model
	     */
	    load: function load() {
	      var filterState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : viewModel.getState().initialFilterState;
	      var doSelectPositionType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      var doMerge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	
	      var state = viewModel.getState();
	      var fromDate = filterState && filterState.timePeriod && filterState.timePeriod.startDate ? new Date(new Date(filterState.timePeriod.startDate).setHours(0, 0, 0, 0)) : state.initialFilterState.timePeriod.startDate;
	      var toDate = filterState && filterState.timePeriod && filterState.timePeriod.endDate ? new Date(new Date(filterState.timePeriod.endDate).setHours(23, 59, 59, 999)) : state.initialFilterState.timePeriod.endDate;
	      viewModel.beforeLoadPortfolioTransactions();
	      var portfolioFilter = {
	        iSIN: filterState && filterState.isin,
	        subPortfolioId: filterState && filterState.account && filterState.account.id,
	        size: state.size,
	        from: state.from,
	        fromDate: fromDate,
	        toDate: toDate,
	        fromAmount: filterState && filterState.amountRangeFrom,
	        toAmount: filterState && filterState.amountRangeTo,
	        category: filterState && filterState.transactionCategory && filterState.transactionCategory.id,
	        instrumentName: filterState && filterState.instrumentName,
	        counterpartyName: filterState && filterState.counterpartyName,
	        counterpartyAccount: filterState && filterState.counterpartyAccount,
	        assetClass: filterState && filterState.assetClass && (filterState.assetClass.id ? filterState.assetClass.name : null),
	        positionId: filterState && filterState.positionId
	      };
	      var selectedFilter = Object.keys(portfolioFilter).reduce(function (newFilter, key) {
	        if (portfolioFilter[key] || portfolioFilter[key] === 0) {
	          Object.assign(newFilter, _defineProperty({}, key, portfolioFilter[key]));
	        }
	        return newFilter;
	      }, {});
	
	      return model.getSelectedPortfolioId().then(function (portfolioId) {
	        return model.loadTransactions(portfolioId, selectedFilter);
	      }).then(function (raw) {
	        return viewModel.afterLoadPortfolioTransactionsSuccess(Object.assign({}, raw, { doSelectPositionType: doSelectPositionType, doMerge: doMerge }));
	      }).catch(function (error) {
	        viewModel.afterLoadPortfolioTransactionsError(error);
	        throw error;
	      });
	    },
	
	    /**
	     * @public
	     * @name loadFilterOptions
	     * @type {function}
	     * @description Loads options for transactions' filter
	     * @returns {promise} Promise, returned by model
	     */
	    loadFilterOptions: function loadFilterOptions() {
	      return model.getSelectedPortfolioId().then(model.loadTransactionsFilterOptions).then(viewModel.afterLoadFilterOptionsSuccess).catch(viewModel.afterLoadFilterOptionsError);
	    },
	
	    /**
	     * @public
	     * @name loadTransactionDetails
	     * @type {function}
	     * @description Loads additional data for given transaction
	     * @param {number} id Transaction id
	     * @returns {promise} Promise, returned by model
	     */
	    loadTransactionDetails: function loadTransactionDetails(id) {
	      return model.getSelectedPortfolioId().then(function (portfolioId) {
	        return model.loadTransactionDetails(portfolioId, id);
	      }).then(function (_ref) {
	        var data = _ref.data;
	        return viewModel.afterLoadTransactionDetailsSuccess({ data: data, id: id });
	      }).catch(viewModel.afterLoadTransactionDetailsError);
	    }
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-wm-portfolio-transactions-ng.js.map