(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib-bb-state-container-ng"), require("lib-wm-portfolio-view-model-helper"), require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("model-wm-portfolio-summary-ng"), require("lib-bb-intent-ng"), require("lib-bb-widget-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-wm-portfolio-summary-ng", ["lib-bb-state-container-ng", "lib-wm-portfolio-view-model-helper", "vendor-bb-angular", "lib-bb-widget-extension-ng", "model-wm-portfolio-summary-ng", "lib-bb-intent-ng", "lib-bb-widget-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-wm-portfolio-summary-ng"] = factory(require("lib-bb-state-container-ng"), require("lib-wm-portfolio-view-model-helper"), require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("model-wm-portfolio-summary-ng"), require("lib-bb-intent-ng"), require("lib-bb-widget-ng"));
	else
		root["widget-wm-portfolio-summary-ng"] = factory(root["lib-bb-state-container-ng"], root["lib-wm-portfolio-view-model-helper"], root["vendor-bb-angular"], root["lib-bb-widget-extension-ng"], root["model-wm-portfolio-summary-ng"], root["lib-bb-intent-ng"], root["lib-bb-widget-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_86__, __WEBPACK_EXTERNAL_MODULE_88__, __WEBPACK_EXTERNAL_MODULE_93__, __WEBPACK_EXTERNAL_MODULE_125__, __WEBPACK_EXTERNAL_MODULE_126__, __WEBPACK_EXTERNAL_MODULE_129__, __WEBPACK_EXTERNAL_MODULE_152__) {
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

	module.exports = __webpack_require__(158);

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

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(93);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(125);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbStateContainerNg = __webpack_require__(86);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _libBbWidgetNg = __webpack_require__(152);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _modelWmPortfolioSummaryNg = __webpack_require__(126);
	
	var _modelWmPortfolioSummaryNg2 = _interopRequireDefault(_modelWmPortfolioSummaryNg);
	
	var _libBbIntentNg = __webpack_require__(129);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _controller = __webpack_require__(159);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(161);
	
	var _defaultHooks2 = _interopRequireDefault(_defaultHooks);
	
	var _service = __webpack_require__(162);
	
	var _service2 = _interopRequireDefault(_service);
	
	var _viewModel = __webpack_require__(163);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-wm-portfolio-summary-ng
	 *
	 * @description
	 * Portfolio summary widget.
	 *
	 *
	 * @example
	 *  <div ng-controller="PortfolioSummaryController as $ctrl">
	 *    <ul>
	 *       <li ng-repeat="portfolio in $ctrl.portfolios">{{portfolio.id}}</li>
	 *    </ul>
	 *  </div>
	 */
	var hooksKey = 'widget-wm-portfolio-summary-ng:hooks';
	var serviceKey = 'widget-wm-portfolio-summary-ng:service';
	var viewModelKey = 'widget-wm-portfolio-summary-ng:viewModel';
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('widget-wm-portfolio-summary-ng', [_modelWmPortfolioSummaryNg2.default, _libBbWidgetNg2.default, _libBbIntentNg2.default, _libBbStateContainerNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(_defaultHooks2.default)).factory(serviceKey, [_modelWmPortfolioSummaryNg.modelPortfolioSummaryKey, viewModelKey, _service2.default]).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey, _libBbWidgetNg.widgetKey, hooksKey, _viewModel2.default]).controller('PortfolioSummaryController', [_libBbWidgetNg.widgetKey, _libBbIntentNg.bbIntentKey, serviceKey, viewModelKey,
	/* into */
	_controller2.default]).name;
	
	/**
	 * Portfolio type definition
	 * @typedef {Object} Portfolio
	 * @property {string}        IBAN               - International Bank Account Number
	 * @property {string}        clientName         - Client name
	 * @property {string}        alias              - A portfolio name manually set by the client
	 * @property {assetClass[]}  assetClasses       - Asset classes list for portfolio
	 * @property {object}        valuation          - Total cost of all assets in the portfolio
	 * @property {object}        inCashTotal        - Incoming cash for the period of time
	 * @property {object}        outCashTotal       - Outgoing cash for the period of time
	 * @property {number}        performanceMTD     - Portfolio performance for month
	 * @property {number}        performanceMTDpct  - Portfolio performance for month in percents
	 * @property {number}        performanceYTD     - Portfolio performance amount for year
	 * @property {number}        performanceYTDpct  - Portfolio performance amount for year in percents
	 * @property {string}        riskClass          - Risk of portfolio investement strategy
	 * @property {manager[]}     managers           - Managers of portfolio
	 * @property {attorney[]}    attorneys          - Attorneys of portfolio
	 * @property {BBSeries[]}    dataseries         - data in format suitable for chart UI components
	 */
	
	/**
	 * BBSeries data object used to draw charts
	 * @typedef {object} BBSeries
	 * @property {string[]} labels Array chart slices labels
	 * @property {Dataset[]} datasets Array of chart datasets
	 */
	
	/**
	 * Dataset object for chart data
	 * @typedef {object} Dataset
	 * @property {number[]} data Array of data points for chart slices
	 */
	
	/**
	 * Asset class object
	 * @typedef {object} AssetClass
	 * @property {string} name name of asset class
	 * @property {number} valuePct value that represents percentage of asset
	 */
	
	/**
	 * Dataset object for chart data
	 * @typedef {object} attorney
	 * @property {string} id id of a portfolio manager
	 * @property {string} name name of a portfolio manager
	 */
	
	/**
	 * Dataset object for chart data
	 * @typedef {object} manager
	 * @property {string} id id of a portfolio manager
	 * @property {string} name name of a portfolio manager
	 */

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = PortfolioSummaryController;
	
	var _constants = __webpack_require__(160);
	
	/**
	 * @name PortfolioSummaryController
	 * @ngkey PortfolioSummaryController
	 * @type {object}
	 * @description
	 * Portfolio summary controller.
	 */
	
	function PortfolioSummaryController(widgetInstance, bbIntents, service, viewModel) {
	  var $ctrl = this;
	
	  /**
	   * @description
	   * A set of intents that the Portfolio Summary controller uses or handles.
	   *
	   * @name intents
	   * @type {Object}
	   * @inner
	   */
	  var intents = {
	    viewPortfolioDetails: bbIntents.create(_constants.IntentsKeys.PORTFOLIO_DETAILS)
	  };
	
	  /**
	   * @name PortfolioSummaryController#getCustomListSelected
	   * @type {function}
	   *
	   * @description
	   * Get current selected custom list
	   *
	   * @returns {object}
	   */
	  var getCustomListSelected = function getCustomListSelected() {
	    return service.getCustomListSelected();
	  };
	
	  /**
	   * @description
	   * Handles loading portfolios
	   *
	   * @public
	   * @name PortfolioSummaryController#load
	   * @type {function}
	   * @param {number} page - index of the page to load
	   * Load portfolios
	   * @returns {promise.<array>}
	   */
	  var load = function load() {
	    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	        page = _ref.page,
	        customListUuid = _ref.customListUuid;
	
	    return service.loadPortfolioSummary({ page: page, customListUuid: customListUuid });
	  };
	
	  /**
	   * @name PortfolioSummaryController#setCustomListSelected
	   * @type {function}
	   *
	   * @description
	   * Set current selected custom list
	   *
	   * @param {string} customList custom list id to set selected
	   * @returns {void}
	   */
	  var setCustomListSelected = function setCustomListSelected(customList) {
	    return service.setCustomListSelected(customList);
	  };
	
	  /**
	   * @name PortfolioSummaryController#setCustomListSelected
	   * @type {function}
	   *
	   * @description
	   * Set current selected custom list
	   *
	   * @param {string} customList custom list id to set selected
	   * @returns {Promise.<Array>}
	   */
	  var setSelectedList = function setSelectedList(customList) {
	    service.setCustomListSelected(customList);
	    $ctrl.searchQuery = '';
	    if (customList && (customList.uuid || customList.isFavorite)) {
	      viewModel.setSelectedList(customList);
	      return load(viewModel.getState().pageParams);
	    }
	    viewModel.setDefaultListSelected(customList);
	    return load();
	  };
	
	  /**
	   * @name viewPortfolioDetails
	   *
	   * @description
	   * Navigate to portfolio details
	   *
	   * @param {string} portfolioId ID of portfolio to load
	   * @type {function}
	   */
	  var viewPortfolioDetails = function viewPortfolioDetails(portfolioId) {
	    service.setPortfolioIdSelected(portfolioId);
	    intents.viewPortfolioDetails();
	  };
	
	  /*
	   * @description
	   * Widget initialization logic.
	   * Loads custom lists, preselects list selected previously, loads portfolio summary data
	   */
	  var $onInit = function $onInit() {
	    viewModel.init();
	    return service.loadCustomLists().then(function () {
	      return getCustomListSelected();
	    }).then(function (list) {
	      if (list && list.isFavorite) {
	        return list;
	      }
	      return list && viewModel.getState().portfolios.customLists.find(function (item) {
	        return item.uuid === list.uuid;
	      });
	    }).then(function (listItem) {
	      if (listItem) {
	        viewModel.setSelectedList(listItem);
	      }
	      return load();
	    });
	  };
	
	  /**
	   * @name onSort
	   * @type {function}
	   * @description
	   * Loads sorted list of portfolios
	   * @param  {string} orderBy   Column key to sort
	   * @param  {string} direction Sort direction
	   * @returns {Promise.<array>}
	   */
	  var onSort = function onSort(orderBy, direction) {
	    service.sort(orderBy, direction);
	    return load();
	  };
	
	  Object.assign($ctrl, {
	    onSort: onSort,
	    viewPortfolioDetails: viewPortfolioDetails,
	    loadCustomLists: service.loadCustomLists,
	    deleteCustomList: service.deleteCustomList,
	    removePortfolioFromList: service.removePortfolioFromList,
	    createCustomList: service.createCustomList,
	    renameCustomList: service.renameCustomList,
	    setPortfoliosToCustomList: service.setPortfoliosToCustomList,
	    togglePortfolioAsFavorite: service.togglePortfolioAsFavorite,
	    setCustomListSelected: setCustomListSelected,
	    getCustomListSelected: getCustomListSelected,
	    setSelectedList: setSelectedList,
	    $onInit: $onInit,
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

/***/ 160:
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
	var Preference = exports.Preference = {
	  PAGE_SIZE: 'bb.portfolioSummary.pageSize',
	  MAX_NAV_PAGES: 'bb.portfolioSummary.maxNavPages',
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
	  PORTFOLIO_DETAILS: 'view.portfolio.details'
	};

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

	"use strict";

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/* global angular */
	exports.default = function (model, viewModel) {
	  /**
	   * @name getCustomListSelected
	   * @type {function}
	   *
	   * @description
	   * Get current selected custom list
	   *
	   * @returns {object}
	   */
	  var getCustomListSelected = function getCustomListSelected() {
	    return model.getCustomListSelected();
	  };
	
	  /**
	   * @description
	   * Handles loading porfolio summary
	   * @public
	   * @name loadPortfolioSummary
	   * @param {Object} page index of the page to load
	   * @type {function}
	   * Load allocations
	   * @returns {promise.<array>}
	   */
	  var loadPortfolioSummary = function loadPortfolioSummary() {
	    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	        _ref$page = _ref.page,
	        page = _ref$page === undefined ? viewModel.getState().pageParams.from : _ref$page,
	        _ref$customListUuid = _ref.customListUuid,
	        customListUuid = _ref$customListUuid === undefined ? viewModel.getState().pageParams.customListUuid : _ref$customListUuid;
	
	    viewModel.beforeLoadPortfolioSummary();
	
	    var currentParams = Object.assign({}, viewModel.getState().pageParams, { from: page, customListUuid: customListUuid });
	
	    return model.load(currentParams).then(function (data) {
	      viewModel.afterLoadPortfolioSummarySuccess({
	        totalItems: data.totalCount,
	        from: page,
	        data: data.data
	      });
	      return data;
	    }).catch(function (error) {
	      viewModel.afterLoadPortfolioSummaryError(error);
	      throw error;
	    });
	  };
	
	  /**
	   * @public
	   * @name loadCustomLists
	   *
	   * @description
	   * Loads all portfolio custom lists
	   *
	   * @type {function}
	   * @returns {promise.<array>}
	   */
	  var loadCustomLists = function loadCustomLists() {
	    return model.loadCustomList().then(function (_ref2) {
	      var data = _ref2.data;
	
	      viewModel.afterLoadCustomListsSuccess({ data: data });
	      return data;
	    }).catch(function (error) {
	      viewModel.afterLoadCustomListsError(error);
	      throw error;
	    });
	  };
	
	  return {
	    loadPortfolioSummary: loadPortfolioSummary,
	    loadCustomLists: loadCustomLists,
	
	    /**
	     * @name setPortfolioIdSelected
	     * @type {function}
	     * @description
	     * Set current selected portfolio id
	     * @param {string} portfolioId portfolio id to set selected
	     */
	    setPortfolioIdSelected: function setPortfolioIdSelected(portfolioId) {
	      model.setPortfolioIdSelected(portfolioId);
	    },
	
	
	    /**
	     * @name setCustomListSelected
	     * @type {function}
	     * @description
	     * Persist selected custom list
	     * @param {object} customList Custom list object to persist
	     */
	    setCustomListSelected: function setCustomListSelected(customList) {
	      model.setCustomListSelected(customList);
	    },
	
	
	    getCustomListSelected: getCustomListSelected,
	    /**
	     * @name sort
	     * @type {function}
	     * @description
	     * Loads sorted list of portfolios
	     * @param  {string} orderBy   Column key to sort
	     * @param  {string} direction Sort direction
	     */
	    sort: function sort(orderBy, direction) {
	      viewModel.sort({ orderBy: orderBy, direction: direction });
	    },
	
	
	    /**
	     * @public
	     * @name setPortfoliosToCustomList
	     *
	     * @description
	     * Sends all portfolios that will be added to given custom list
	     *
	     * @type {function}
	     * @param {string} uuid Identifier of custom list
	     * @param {array} List of portfolios
	     * @returns {promise.<string>} Uuid of custom list
	     */
	    setPortfoliosToCustomList: function setPortfoliosToCustomList(uuid, portfolios) {
	      return model.setPortfoliosToCustomList(uuid, portfolios).then(function (data) {
	        viewModel.afterSetPortfoliosToCustomListSuccess(data);
	        return data;
	      });
	    },
	
	
	    /**
	     * @public
	     * @name deleteCustomList
	     *
	     * @param {string} uuid Identifier of custom list
	     * @description
	     * deletes custom list by uuid
	     *
	     * @type {function}
	     * @returns {promise.<array>}
	     */
	    deleteCustomList: function deleteCustomList(uuid) {
	      return model.deleteCustomList(uuid).then(function (_ref3) {
	        var data = _ref3.data;
	
	        viewModel.afterDeleteCustomListsSuccess({ data: data });
	        return loadCustomLists().then(function (customLists) {
	          return Object.assign({}, data, { customLists: customLists });
	        });
	      });
	    },
	
	
	    /**
	     * @public
	     * @name createCustomList
	     *
	     * @description
	     * Create custom list of portfolios.
	     *
	     * @type {function}
	     * @param {object} requestData request body data
	     * @returns {promise.<array>}
	     */
	    createCustomList: function createCustomList(requestData) {
	      return model.createCustomList(requestData);
	    },
	
	
	    /**
	     * @public
	     * @name renameCustomList
	     *
	     * @description
	     * Rename custom list
	     *
	     * @type {function}
	     * @param {string} uuid Identifier of custom list
	     * @param {object} list list with a name property
	     *
	     * @returns {promise.<array>}
	     */
	    renameCustomList: function renameCustomList(uuid, list) {
	      return model.renameCustomList(uuid, list);
	    },
	
	
	    /**
	     * @public
	     * @name removePortfoliosFromList
	     *
	     * @description
	     * Removes portfolios from custom list
	     *
	     * @type {function}
	     * @param {array.<string>} portfolios list of portfolios ids to remove from custom list
	     * @param {string} uuid Identifier of custom list
	     *
	     * @returns {promise.<array>}
	     */
	    removePortfolioFromList: function removePortfolioFromList(portfolios, uuid) {
	      return model.deletePortfoliosFromCustomList(portfolios, uuid);
	    },
	
	
	    /**
	     * @public
	     * @name togglePortfolioAsFavorite
	     *
	     * @description
	     * Toggles portfolio Favorite status
	     *
	     * @type {function}
	     * @param {string} IBAN Portfolio`s IBAN
	     *
	     * @returns {promise.<array>}
	     */
	    togglePortfolioAsFavorite: function togglePortfolioAsFavorite(IBAN) {
	      var isFavorite = viewModel.getState().portfolios.list[IBAN].isFavorite;
	
	      viewModel.togglePortfolioAsFavorite({ IBAN: IBAN, isFavorite: !isFavorite });
	      return model.updateFavoriteStatusOfPortfolio(IBAN, !isFavorite).catch(function (error) {
	        viewModel.togglePortfolioAsFavorite({ IBAN: IBAN, isFavorite: !!isFavorite });
	        throw error;
	      });
	    }
	  };
	};

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (stateContainer, widgetInstance, hooks) {
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
	   * @name portfolios
	   * @type {object}
	   *
	   * @inner
	   * @property {object} params
	   * @property {string} params.customListUuid Custom list uuid
	   * @property {string} params.query Portfolios search query
	   * @property {string} params.direction Sorting direction, `ASC` or `DESC`
	   * @property {number} params.from Index of page to load data from
	   * @property {string} params.orderBy Column key currently sorted
	   * @property {number} params.size Number of portfolios to retrieve
	   * @property {number} params.totalItems Number of total portfolios
	   * @property {number} params.maxNavPages Number of max. number navigation pages
	   * @property {number} params.justFavorites Flag to load just favorite portfolios
	   */
	  var portfolios = {
	    params: {
	      customListUuid: undefined,
	      query: undefined,
	      direction: hooks.defaultSortableDirection(),
	      from: 0,
	      orderBy: hooks.defaultSortableColumn(),
	      justFavorites: false,
	      size: pageSize,
	      totalItems: 0,
	      maxNavPages: maxNavPages
	    }
	  };
	
	  /**
	   * @name initialState
	   * @description Initial state of porfolios store
	   * @type {object}
	   * @property {object} portfolios      an object of portfolios
	   * @property {boolean} initialLoading Boolean flag of initial loading
	   * @property {object} pageParams      parameters of the page
	   * @property {object} errors          portfolios errors
	   */
	  var initialState = {
	    portfolios: {
	      customLists: [],
	      data: [],
	      list: {},
	      loading: false
	    },
	    initialLoading: true,
	    pageParams: portfolios.params,
	    errors: {
	      portfoliosError: null
	    }
	  };
	
	  return Object.assign({
	    getState: function getState() {
	      return stateContainer.getState();
	    }
	  }, (0, _libWmPortfolioViewModelHelper.wrapActions)(stateContainer, {
	    init: function init() {
	      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	      return state;
	    },
	    beforeLoadPortfolioSummary: function beforeLoadPortfolioSummary() {
	      return {
	        portfolios: {
	          loading: true
	        }
	      };
	    },
	    afterLoadPortfolioSummaryError: function afterLoadPortfolioSummaryError(state, error) {
	      return {
	        initialLoading: false,
	        portfolios: {
	          data: null,
	          loading: false
	        },
	        errors: {
	          portfoliosError: error.code
	        }
	      };
	    },
	    sort: function sort(state, _ref) {
	      var orderBy = _ref.orderBy,
	          direction = _ref.direction;
	      return {
	        pageParams: {
	          orderBy: orderBy,
	          direction: direction
	        }
	      };
	    },
	    afterLoadCustomListsSuccess: function afterLoadCustomListsSuccess(state, _ref2) {
	      var data = _ref2.data;
	      return {
	        portfolios: {
	          customLists: data,
	          selectedList: null
	        },
	        errors: {
	          portfoliosError: null
	        }
	      };
	    },
	    afterDeleteCustomListsSuccess: function afterDeleteCustomListsSuccess() {
	      return {
	        porfolios: {
	          selectedList: null
	        },
	        pageParams: {
	          from: 0
	        },
	        errors: {
	          portfoliosError: null
	        }
	      };
	    },
	    afterDeleteCustomListsError: function afterDeleteCustomListsError(state, error) {
	      return {
	        errors: {
	          portfoliosError: error.code
	        }
	      };
	    },
	    afterRenameCustomListError: function afterRenameCustomListError(state, error) {
	      return {
	        errors: {
	          portfoliosError: error.code
	        }
	      };
	    },
	    afterLoadCustomListsError: function afterLoadCustomListsError(state, error) {
	      return {
	        initialLoading: false,
	        portfolios: {
	          customLists: null,
	          selectedList: null
	        },
	        errors: {
	          portfoliosError: error.code
	        }
	      };
	    },
	    afterCreateCustomListError: function afterCreateCustomListError() {
	      return {
	        portfolios: {
	          customLists: null
	        }
	      };
	    },
	    afterRemovePorftfolioFromCustomListError: function afterRemovePorftfolioFromCustomListError(state, error) {
	      return {
	        errors: {
	          portfoliosError: error.code
	        }
	      };
	    },
	    afterSetPortfoliosToCustomListSuccess: function afterSetPortfoliosToCustomListSuccess(state) {
	      return {
	        isAllChecked: false,
	        portfolios: {
	          list: Object.keys(state.portfolios.list).reduce(function (list, current) {
	            return Object.assign({}, list, _defineProperty({}, current, Object.assign({}, state.portfolios.list[current], {
	              isChecked: false
	            })));
	          }, {})
	        }
	      };
	    },
	    afterSetPortfoliosToCustomListError: function afterSetPortfoliosToCustomListError(state, error) {
	      return {
	        errors: {
	          portfoliosError: error.code
	        }
	      };
	    },
	    togglePortfolioAsFavorite: function togglePortfolioAsFavorite(state, _ref3) {
	      var IBAN = _ref3.IBAN,
	          isFavorite = _ref3.isFavorite;
	      return {
	        portfolios: {
	          list: _defineProperty({}, IBAN, {
	            isFavorite: isFavorite
	          })
	        }
	      };
	    }
	  }), {
	    afterLoadPortfolioSummarySuccess: stateContainer.createAction(function (state, _ref4) {
	      var from = _ref4.from,
	          data = _ref4.data,
	          _ref4$totalItems = _ref4.totalItems,
	          totalItems = _ref4$totalItems === undefined ? 0 : _ref4$totalItems;
	
	      var result = Object.assign({}, state, {
	        initialLoading: false,
	        isAllChecked: false,
	        pageParams: Object.assign({}, state.pageParams, {
	          totalItems: totalItems,
	          from: from
	        }),
	        portfolios: Object.assign({}, state.portfolios, {
	          data: data.map(function (_ref5) {
	            var IBAN = _ref5.IBAN;
	            return IBAN;
	          }),
	          list: data.reduce(function (list, current) {
	            return Object.assign({}, list, _defineProperty({}, current.IBAN, current));
	          }, {}),
	          loading: false
	        }),
	        errors: Object.assign({}, state.errors, {
	          portfoliosError: null
	        })
	      });
	
	      return result;
	    }),
	    setSelectedList: stateContainer.createAction(function (state, list) {
	      return Object.assign({}, state, {
	        portfolios: Object.assign({}, state.portfolios, {
	          selectedList: list
	        }),
	        pageParams: Object.assign({}, state.pageParams, {
	          from: 0,
	          justFavorites: list.isFavorite || false,
	          customListUuid: list.uuid || undefined,
	          query: undefined
	        }),
	        errors: Object.assign({}, state.errors, {
	          portfoliosError: null
	        })
	      });
	    }),
	
	    setDefaultListSelected: stateContainer.createAction(function (state, list) {
	      return Object.assign({}, state, {
	        portfolios: Object.assign({}, state.portfolios, {
	          selectedList: list
	        }),
	        pageParams: Object.assign({}, state.pageParams, {
	          from: 0,
	          justFavorites: false,
	          customListUuid: undefined,
	          query: undefined
	        }),
	        errors: Object.assign({}, state.errors, {
	          portfoliosError: null
	        })
	      });
	    })
	  });
	};
	
	var _libWmPortfolioViewModelHelper = __webpack_require__(88);
	
	var _constants = __webpack_require__(160);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-wm-portfolio-summary-ng.js.map