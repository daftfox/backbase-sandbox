(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("lib-bb-widget-ng"), require("lib-bb-intent-ng"), require("lib-bb-state-container-ng"), require("model-fx-trading-ng"), require("lib-bb-event-bus-ng"), require("lib-fx-trading-view-model-helper"));
	else if(typeof define === 'function' && define.amd)
		define("widget-fx-rate-table-ng", ["vendor-bb-angular", "lib-bb-widget-extension-ng", "lib-bb-widget-ng", "lib-bb-intent-ng", "lib-bb-state-container-ng", "model-fx-trading-ng", "lib-bb-event-bus-ng", "lib-fx-trading-view-model-helper"], factory);
	else if(typeof exports === 'object')
		exports["widget-fx-rate-table-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("lib-bb-widget-ng"), require("lib-bb-intent-ng"), require("lib-bb-state-container-ng"), require("model-fx-trading-ng"), require("lib-bb-event-bus-ng"), require("lib-fx-trading-view-model-helper"));
	else
		root["widget-fx-rate-table-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-extension-ng"], root["lib-bb-widget-ng"], root["lib-bb-intent-ng"], root["lib-bb-state-container-ng"], root["model-fx-trading-ng"], root["lib-bb-event-bus-ng"], root["lib-fx-trading-view-model-helper"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_40__, __WEBPACK_EXTERNAL_MODULE_45__, __WEBPACK_EXTERNAL_MODULE_46__, __WEBPACK_EXTERNAL_MODULE_47__, __WEBPACK_EXTERNAL_MODULE_53__) {
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

	module.exports = __webpack_require__(54);

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_40__;

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_45__;

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_46__;

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_47__;

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(27);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(38);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbStateContainerNg = __webpack_require__(45);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _libBbWidgetNg = __webpack_require__(39);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _modelFxTradingNg = __webpack_require__(46);
	
	var _modelFxTradingNg2 = _interopRequireDefault(_modelFxTradingNg);
	
	var _libBbIntentNg = __webpack_require__(40);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbEventBusNg = __webpack_require__(47);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _controller = __webpack_require__(55);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(57);
	
	var _defaultHooks2 = _interopRequireDefault(_defaultHooks);
	
	var _service = __webpack_require__(58);
	
	var _service2 = _interopRequireDefault(_service);
	
	var _viewModel = __webpack_require__(59);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var hooksKey = 'widget-fx-rate-table-ng:hooks'; /**
	                                                 * @module widget-fx-rate-table-ng
	                                                 *
	                                                 * @description
	                                                 * FX rate table widget.
	                                                 *
	                                                 *
	                                                 * @example
	                                                 *  <div ng-controller="FXRateTableController as $ctrl">
	                                                 *    <ul>
	                                                 *       <li data-ng-repeat="item in ext.helpers.currencyPairs()">{{item.pairKey}}</li>
	                                                 *    </ul>
	                                                 *  </div>
	                                                 */
	
	var serviceKey = 'widget-fx-rate-table-ng:service';
	var viewModelKey = 'widget-fx-rate-table-ng:viewModel';
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('widget-fx-rate-table-ng', [_modelFxTradingNg2.default, _libBbWidgetNg2.default, _libBbIntentNg2.default, _libBbEventBusNg2.default, _libBbStateContainerNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(_defaultHooks2.default)).factory(serviceKey, [_modelFxTradingNg.modelFxTradingKey, viewModelKey, _service2.default]).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey, _libBbWidgetNg.widgetKey, hooksKey, _viewModel2.default]).controller('FXRateTableController', [_libBbWidgetNg.widgetKey, _libBbIntentNg.bbIntentKey, serviceKey, viewModelKey, _libBbEventBusNg.eventBusKey,
	/* into */
	_controller2.default]).name;
	
	/**
	 * CurrencyPair type definition
	 * @typedef {Object} CurrencyPair
	 * @property {string}        pairKey          - Currency pair id
	 */
	
	/**
	* CurrencyRate type definition
	* @typedef {Object} CurrencyRate
	* @property {string}        pairKey          - Currency pair id
	* @property {number}        price            - Last executed price for the currency pair
	* @property {number}        change           - Today's price change
	* @property {number}        changePct        - Today's price change in percent
	* @property {number}        bid              - Bid price available for the currency pair
	* @property {number}        ask              - Ask price available for the currency pair
	*/

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = FXRateTableController;
	
	var _constants = __webpack_require__(56);
	
	/**
	 * @name FXRateTableController
	 * @ngkey FXRateTableController
	 * @type {object}
	 * @description
	 * FX rate table controller.
	 */
	function FXRateTableController(widgetInstance, bbIntents, service, viewModel, eventBus) {
	  var $ctrl = this;
	
	  /**
	   * @name intervalUpdateRates
	   * @type {Number} intervalUpdateRates
	   * @description
	   * Delay of update table rates
	   */
	  var intervalUpdateRates = widgetInstance.getLongPreference(_constants.Preference.INTERVAL_UPDATE_RATES) * 1000;
	
	  /**
	   * @description
	   * A set of intents that the Portfolio Summary controller uses or handles.
	   *
	   * @name intents
	   * @type {Object}
	   * @inner
	   */
	  var intents = {
	    viewCurrencyPairDetails: bbIntents.create(_constants.IntentsKeys.CURRENCYPAIR_DETAILS)
	  };
	
	  /**
	   * @description
	   * Handles loading trading rate table data
	   *
	   * @public
	   * @name FXRateTableController#load
	   * @type {function}
	   * @param {number} page - index of the page to load
	   * Load rate table data
	   * @returns {promise.<array>}
	   */
	  var load = function load() {
	    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	        page = _ref.page;
	
	    return service.load({ page: page }, intervalUpdateRates);
	  };
	
	  /**
	   * @name viewCurrencyPairDetails
	   *
	   * @description
	   * Navigate to currency pair details
	   *
	   * @param {string} currencyPairId ID of currency pair to load
	   * @type {function}
	   */
	  var viewCurrencyPairDetails = function viewCurrencyPairDetails(currencyPairId) {
	    service.setCurrencyPairIdSelected(currencyPairId);
	    intents.viewCurrencyPairDetails();
	  };
	
	  /**
	   * @name viewTradeOrder
	   *
	   * @description
	   * view trade order modal
	   *
	   * @param {string} currencyPairId currency pair id
	   * @type {function}
	   */
	  var viewTradeOrder = function viewTradeOrder(currencyPairId) {
	    service.setCurrencyPairIdSelected(currencyPairId);
	    eventBus.publish(_constants.IntentsKeys.SHOW_TRADE_ORDER);
	  };
	
	  /*
	   * @description
	   * Widget initialization logic.
	   * Loads rate table data
	   */
	  var $onInit = function $onInit() {
	    viewModel.init();
	    return load();
	  };
	
	  var $onDestroy = function $onDestroy() {
	    return service.stopRatesUpdate();
	  };
	
	  Object.assign($ctrl, {
	    viewCurrencyPairDetails: viewCurrencyPairDetails,
	    viewTradeOrder: viewTradeOrder,
	    $onInit: $onInit,
	    $onDestroy: $onDestroy,
	    load: load
	  });
	
	  return Object.assign({
	    get state() {
	      return viewModel.getState();
	    },
	    get errors() {
	      return viewModel.getState().errors;
	    }
	  }, $ctrl);
	} /* global angular*/

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Preference
	 * @type {object}
	 *
	 * @description
	 * Widget preferences enum
	 *
	 * @property {string} PAGE_SIZE             Number of items per page
	 * @property {string} MAX_NAV_PAGES         Number of pagination items
	 * @property {number} DEFAULT_PAGE_SIZE     Defines the default pageSize for the direct debits page
	 * @property {number} DEFAULT_MAX_NAV_PAGES Defines the default maxNavPages for the accounts page
	 */
	// eslint-disable-next-line import/prefer-default-export
	var Preference = exports.Preference = {
	  PAGE_SIZE: 'bb.fxRateTable.pageSize',
	  MAX_NAV_PAGES: 'bb.fxRateTable.maxNavPages',
	  INTERVAL_UPDATE_RATES: 'bb.fxRateTable.intervalUpdateRates',
	  DEFAULT_PAGE_SIZE: 10,
	  DEFAULT_MAX_NAV_PAGES: 3
	};
	
	/**
	 * @description
	 * Widget intents to be handled
	 *
	 * @name IntentsKeys
	 * @type {object}
	 */
	var IntentsKeys = exports.IntentsKeys = {
	  CURRENCYPAIR_DETAILS: 'view.currencypair.details',
	  SHOW_TRADE_ORDER: 'bb.event.show.tradeOrder'
	};

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

	"use strict";

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/* global angular */
	exports.default = function (model, viewModel) {
	  var timerId = void 0;
	  /**
	   * @description
	   * Handles loading rates of currency pairs data
	   * @public
	   * @name loadCurrencyRates
	   * @type {function}
	   * Load currency rates
	   * @returns {promise.<array>}
	   */
	  var loadCurrencyRates = function loadCurrencyRates() {
	    var currentParams = {
	      currencypair: viewModel.getState().currencyPairs.data.map(function (item) {
	        return item.pairKey;
	      })
	    };
	
	    return model.loadCurrencyRates(currentParams).then(function (data) {
	      viewModel.afterLoadCurrencyRatesSuccess({
	        data: data.data
	      });
	      return data;
	    }).catch(function (error) {
	      viewModel.afterLoadCurrencyRatesError(error);
	      throw error;
	    });
	  };
	
	  /**
	   * @description
	   * Method for stop rates auto update by interval
	   * @public
	   * @name stopRatesUpdate
	   * @type {function}
	   * Stop rates updates
	   */
	  var stopRatesUpdate = function stopRatesUpdate() {
	    if (timerId) {
	      clearInterval(timerId);
	      timerId = null;
	    }
	  };
	
	  /**
	   * @name setPageNumberSelected
	   * @type {function}
	   * @description
	   * Set current selected page number
	   * @param {string} page number of page to set selected
	   */
	  var setPageNumberSelected = function setPageNumberSelected(page) {
	    model.setPageNumberSelected(page);
	  };
	
	  /**
	   * @description
	   * Handles loading rate table data
	   * @public
	   * @name load
	   * @param {Object} page index of the page to load
	   * @param {number} intervalUpdateRates interval of rates update
	   * @type {function}
	   * Load rate table data
	   * @returns {promise.<array>}
	   */
	  var load = function load() {
	    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	        page = _ref.page;
	
	    var intervalUpdateRates = arguments[1];
	
	    viewModel.beforeLoadCurrencyPairs();
	    var pageParam = void 0;
	    stopRatesUpdate();
	
	    return model.getPageNumberSelected().then(function (pageNumber) {
	      if (page || page === 0) {
	        pageParam = page;
	      } else if (pageNumber) {
	        pageParam = pageNumber;
	      } else {
	        pageParam = viewModel.getState().pageParams.from;
	      }
	      var currentParams = Object.assign({}, viewModel.getState().pageParams, { from: pageParam });
	      setPageNumberSelected(pageParam);
	      return model.loadCurrencyPairs(currentParams);
	    }).then(function (data) {
	      viewModel.afterLoadCurrencyPairsSuccess({
	        totalItems: data.totalCount,
	        from: pageParam,
	        data: data.data
	      });
	      return data;
	    }).then(function () {
	      loadCurrencyRates();
	    }).then(function () {
	      timerId = setInterval(function () {
	        loadCurrencyRates();
	      }, intervalUpdateRates);
	    }).catch(function (error) {
	      viewModel.afterLoadCurrencyPairsError(error);
	      throw error;
	    });
	  };
	
	  /**
	   * @name setCurrencyPairIdSelected
	   * @type {function}
	   * @description
	   * Set current selected currency pair id
	   * @param {string} currencyPairId currency pair id to set selected
	   */
	  var setCurrencyPairIdSelected = function setCurrencyPairIdSelected(currencyPairId) {
	    model.setCurrencyPairIdSelected(currencyPairId);
	  };
	
	  return {
	    load: load,
	    loadCurrencyRates: loadCurrencyRates,
	    stopRatesUpdate: stopRatesUpdate,
	    setCurrencyPairIdSelected: setCurrencyPairIdSelected,
	    setPageNumberSelected: setPageNumberSelected
	  };
	};

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (stateContainer, widgetInstance) {
	  /**
	   * @name pageSize
	   * @type {Number} pageSize
	   * @description
	   * Number of records to return per request
	   *
	   */
	  var pageSize = widgetInstance.getLongPreference(_constants.Preference.PAGE_SIZE) || _constants.Preference.DEFAULT_PAGE_SIZE;
	
	  /**
	   * @name maxNavPages
	   * @type {Number} maxNaxPages
	   * @description
	   * Maximum number of navigation pages to display
	   */
	  var maxNavPages = widgetInstance.getLongPreference(_constants.Preference.MAX_NAV_PAGES) || _constants.Preference.DEFAULT_MAX_NAV_PAGES;
	
	  /**
	   * @name currencyPairs
	   * @type {object}
	   *
	   * @inner
	   * @property {object} params
	   * @property {number} params.from Index of page to load data from
	   * @property {number} params.size Number of currency pairs to retrieve
	   * @property {number} params.totalItems Number of total currency pairs
	   * @property {number} params.maxNavPages Number of max. number navigation pages
	   */
	  var currencyPairs = {
	    params: {
	      from: 0,
	      size: pageSize,
	      totalItems: 0,
	      maxNavPages: maxNavPages
	    }
	  };
	
	  /**
	   * @name initialState
	   * @description Initial state of rate table store
	   * @type {object}
	   * @property {object} currencyPairs      An object of currency pairs
	   * @property {boolean} initialLoading    Boolean flag of initial loading
	   * @property {object} pageParams         parameters of the page
	   * @property {object} errors             currency pairs errors
	   */
	  var initialState = {
	    currencyPairs: {
	      data: [],
	      loading: false
	    },
	    currencyRates: {
	      data: []
	    },
	    initialLoading: true,
	    pageParams: currencyPairs.params,
	    errors: {
	      currencyPairsError: null,
	      currencyRatesError: null
	    }
	  };
	
	  return Object.assign({
	    getState: function getState() {
	      return stateContainer.getState();
	    }
	  }, (0, _libFxTradingViewModelHelper.wrapActions)(stateContainer, {
	    init: function init() {
	      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	      return state;
	    },
	    beforeLoadCurrencyPairs: function beforeLoadCurrencyPairs() {
	      return {
	        currencyPairs: {
	          loading: true
	        }
	      };
	    },
	    afterLoadCurrencyPairsSuccess: function afterLoadCurrencyPairsSuccess(state, raw) {
	      return {
	        initialLoading: false,
	        currencyPairs: {
	          loading: false,
	          data: raw.data
	        },
	        pageParams: {
	          totalItems: raw.totalItems,
	          from: raw.from
	        },
	        errors: {
	          currencyPairsError: null
	        }
	      };
	    },
	    afterLoadCurrencyPairsError: function afterLoadCurrencyPairsError(state, error) {
	      return {
	        initialLoading: false,
	        currencyPairs: {
	          loading: false,
	          data: []
	        },
	        errors: {
	          currencyPairsError: error.code
	        }
	      };
	    },
	    afterLoadCurrencyRatesSuccess: function afterLoadCurrencyRatesSuccess(state, raw) {
	      return {
	        currencyRates: {
	          data: raw.data
	        },
	        errors: {
	          currencyRatesError: null
	        }
	      };
	    },
	    afterLoadCurrencyRatesError: function afterLoadCurrencyRatesError(state, error) {
	      return {
	        currencyRates: {
	          data: []
	        },
	        errors: {
	          currencyRatesError: error.code
	        }
	      };
	    }
	  }));
	};
	
	var _libFxTradingViewModelHelper = __webpack_require__(53);
	
	var _constants = __webpack_require__(56);

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-fx-rate-table-ng.js.map