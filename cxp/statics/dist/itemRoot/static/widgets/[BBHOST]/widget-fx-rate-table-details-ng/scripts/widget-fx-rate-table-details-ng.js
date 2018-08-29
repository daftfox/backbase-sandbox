(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("lib-bb-widget-ng"), require("lib-bb-intent-ng"), require("lib-bb-state-container-ng"), require("model-fx-trading-ng"), require("lib-bb-event-bus-ng"), require("lib-fx-trading-view-model-helper"));
	else if(typeof define === 'function' && define.amd)
		define("widget-fx-rate-table-details-ng", ["vendor-bb-angular", "lib-bb-widget-extension-ng", "lib-bb-widget-ng", "lib-bb-intent-ng", "lib-bb-state-container-ng", "model-fx-trading-ng", "lib-bb-event-bus-ng", "lib-fx-trading-view-model-helper"], factory);
	else if(typeof exports === 'object')
		exports["widget-fx-rate-table-details-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("lib-bb-widget-ng"), require("lib-bb-intent-ng"), require("lib-bb-state-container-ng"), require("model-fx-trading-ng"), require("lib-bb-event-bus-ng"), require("lib-fx-trading-view-model-helper"));
	else
		root["widget-fx-rate-table-details-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-extension-ng"], root["lib-bb-widget-ng"], root["lib-bb-intent-ng"], root["lib-bb-state-container-ng"], root["model-fx-trading-ng"], root["lib-bb-event-bus-ng"], root["lib-fx-trading-view-model-helper"]);
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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(44);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
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
/* 27 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),
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
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_40__;

/***/ }),
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
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
	
	var _controller = __webpack_require__(48);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(50);
	
	var _defaultHooks2 = _interopRequireDefault(_defaultHooks);
	
	var _service = __webpack_require__(51);
	
	var _service2 = _interopRequireDefault(_service);
	
	var _viewModel = __webpack_require__(52);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var hooksKey = 'widget-fx-rate-table-details-ng:hooks'; /**
	                                                         * @module widget-fx-rate-table-details-ng
	                                                         *
	                                                         * @description
	                                                         * FX rate table details widget.
	                                                         *
	                                                         *
	                                                         * @example
	                                                         *  <div ng-controller="FXRateTableDetailsController as $ctrl">
	                                                         *    <ul>
	                                                         *       <li data-ng-repeat="item in ext.helpers.currencyPairs()">{{item.pairKey}}</li>
	                                                         *    </ul>
	                                                         *  </div>
	                                                         */
	
	var serviceKey = 'widget-fx-rate-table-details-ng:service';
	var viewModelKey = 'widget-fx-rate-table-details-ng:viewModel';
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('widget-fx-rate-table-details-ng', [_modelFxTradingNg2.default, _libBbWidgetNg2.default, _libBbIntentNg2.default, _libBbEventBusNg2.default, _libBbStateContainerNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(_defaultHooks2.default)).factory(serviceKey, [_modelFxTradingNg.modelFxTradingKey, viewModelKey, _service2.default]).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey, _libBbWidgetNg.widgetKey, hooksKey, _viewModel2.default]).controller('FXRateTableDetailsController', [_libBbWidgetNg.widgetKey, _libBbIntentNg.bbIntentKey, serviceKey, viewModelKey, _libBbEventBusNg.eventBusKey,
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
	* @property {number}        ytdReturn        - Percentage of currency pair price change
	* @property {number}        wkRangeFrom      - A range from of price change for 52 recent weeks
	* @property {number}        wkRangeTo        - A range to of price change for 52 recent weeks
	* @property {number}        dayRangeFrom     - Today's range to of price change
	* @property {number}        dayRangeTo       - Today's range to of price change
	*/

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_45__;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_46__;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_47__;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = FXRateTableDetailsController;
	
	var _constants = __webpack_require__(49);
	
	/**
	 * @name FXRateTableDetailsController
	 * @ngkey FXRateTableDetailsController
	 * @type {object}
	 * @description
	 * FX rate table details controller.
	 */
	function FXRateTableDetailsController(widgetInstance, bbIntents, service, viewModel, eventBus) {
	  var $ctrl = this;
	
	  /**
	   * @name intervalUpdateRates
	   * @type {Number} intervalUpdateRates
	   * @description
	   * Delay of update table rate details
	   */
	  var intervalUpdateRates = widgetInstance.getLongPreference(_constants.Preference.INTERVAL_UPDATE_RATES) * 1000;
	
	  /**
	   * @description
	   * Handles loading trading rate table details data
	   *
	   * @public
	   * @name FXRateTableDetailsController#load
	   * @type {function}
	   * Load rate table details data
	   * @returns {promise.<array>}
	   */
	  var load = function load() {
	    return service.load(intervalUpdateRates);
	  };
	
	  /*
	   * @description
	   * Widget initialization logic.
	   * Loads rate table details data
	   */
	  var $onInit = function $onInit() {
	    viewModel.init();
	    return load();
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
	    eventBus.publish(_constants.Event.SHOW_TRADE_ORDER);
	  };
	
	  var $onDestroy = function $onDestroy() {
	    return service.stopRatesUpdate();
	  };
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	    $onDestroy: $onDestroy,
	    viewTradeOrder: viewTradeOrder,
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
/* 49 */
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
	 * @property {string} INTERVAL_UPDATE_RATES Defines interval of update table rate details in seconds
	 */
	// eslint-disable-next-line import/prefer-default-export
	var Preference = exports.Preference = {
	  INTERVAL_UPDATE_RATES: 'bb.fxRateTable.intervalUpdateRates'
	};
	
	var Event = exports.Event = {
	  SHOW_TRADE_ORDER: 'bb.event.show.tradeOrder'
	};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	"use strict";

/***/ }),
/* 51 */
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
	   * Handles loading rate details data of currency pair
	   * @public
	   * @name loadCurrencyRates
	   * @type {function}
	   * Load currency rate details
	   * @returns {promise.<array>}
	   */
	  var loadCurrencyRates = function loadCurrencyRates() {
	    var currentParams = {
	      currencypair: [viewModel.getState().currencyPair.data.pairKey]
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
	   * @description
	   * Handles loading currency details data
	   * @public
	   * @name load
	   * @param {number} intervalUpdateRates interval of currency details update
	   * @type {function}
	   * Load currency details
	   * @returns {promise.<array>}
	   */
	  var load = function load(intervalUpdateRates) {
	    viewModel.beforeLoadCurrencyPair();
	    stopRatesUpdate();
	    return model.getSelectedCurrencyPairId().then(function (currencyPairId) {
	      return model.loadCurrencyPairDetails(currencyPairId);
	    }).then(function (data) {
	      viewModel.afterLoadCurrencyPairSuccess({
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
	      viewModel.afterLoadCurrencyPairError(error);
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
	    setCurrencyPairIdSelected: setCurrencyPairIdSelected
	  };
	};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (stateContainer) {
	  /**
	   * @name initialState
	   * @description Initial state of rate table store
	   * @type {object}
	   * @property {object}  currencyPairs      An object of currency pairs
	   * @property {boolean} initialLoading     Boolean flag of initial loading
	   * @property {object}  errors             currency pairs errors
	   */
	  var initialState = {
	    currencyPair: {
	      data: {},
	      loading: false
	    },
	    currencyRates: {
	      data: {}
	    },
	    initialLoading: true,
	    timestamp: null,
	    errors: {
	      currencyPairError: null,
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
	    beforeLoadCurrencyPair: function beforeLoadCurrencyPair() {
	      return {
	        currencyPair: {
	          loading: true
	        }
	      };
	    },
	    afterLoadCurrencyPairSuccess: function afterLoadCurrencyPairSuccess(state, raw) {
	      return {
	        initialLoading: false,
	        currencyPair: {
	          loading: false,
	          data: raw.data
	        },
	        timestamp: Date.now(),
	        errors: {
	          currencyPairError: null
	        }
	      };
	    },
	    afterLoadCurrencyPairError: function afterLoadCurrencyPairError(state, error) {
	      return {
	        initialLoading: false,
	        currencyPair: {
	          loading: false,
	          data: {}
	        },
	        errors: {
	          currencyPairError: error.code
	        }
	      };
	    },
	    afterLoadCurrencyRatesSuccess: function afterLoadCurrencyRatesSuccess(state, raw) {
	      return {
	        initialLoading: false,
	        currencyRates: {
	          data: raw.data[0]
	        },
	        errors: {
	          currencyRatesError: null
	        }
	      };
	    },
	    afterLoadCurrencyRatesError: function afterLoadCurrencyRatesError(state, error) {
	      return {
	        initialLoading: false,
	        currencyRates: {
	          data: {}
	        },
	        errors: {
	          currencyRatesError: error.code
	        }
	      };
	    }
	  }));
	};
	
	var _libFxTradingViewModelHelper = __webpack_require__(53);

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=widget-fx-rate-table-details-ng.js.map