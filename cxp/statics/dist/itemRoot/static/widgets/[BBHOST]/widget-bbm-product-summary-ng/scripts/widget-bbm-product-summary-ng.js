(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-extension-helpers-ng"), require("model-bb-product-summary-ng"), require("lib-bb-intent-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-state-container-ng"), require("lib-bb-extension-intents-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bbm-product-summary-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-model-errors", "lib-bb-extension-helpers-ng", "model-bb-product-summary-ng", "lib-bb-intent-ng", "lib-bb-event-bus-ng", "lib-bb-state-container-ng", "lib-bb-extension-intents-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bbm-product-summary-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-extension-helpers-ng"), require("model-bb-product-summary-ng"), require("lib-bb-intent-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-state-container-ng"), require("lib-bb-extension-intents-ng"));
	else
		root["widget-bbm-product-summary-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-model-errors"], root["lib-bb-extension-helpers-ng"], root["model-bb-product-summary-ng"], root["lib-bb-intent-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-state-container-ng"], root["lib-bb-extension-intents-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_99__, __WEBPACK_EXTERNAL_MODULE_103__, __WEBPACK_EXTERNAL_MODULE_105__, __WEBPACK_EXTERNAL_MODULE_120__, __WEBPACK_EXTERNAL_MODULE_121__, __WEBPACK_EXTERNAL_MODULE_122__, __WEBPACK_EXTERNAL_MODULE_124__, __WEBPACK_EXTERNAL_MODULE_140__, __WEBPACK_EXTERNAL_MODULE_142__) {
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

	module.exports = __webpack_require__(153);

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_99__;

/***/ }),

/***/ 103:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_103__;

/***/ }),

/***/ 105:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_105__;

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_120__;

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_121__;

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_122__;

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_124__;

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_140__;

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_142__;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(99);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(103);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbIntentNg = __webpack_require__(122);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbStateContainerNg = __webpack_require__(140);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _libBbExtensionHelpersNg = __webpack_require__(120);
	
	var _libBbExtensionHelpersNg2 = _interopRequireDefault(_libBbExtensionHelpersNg);
	
	var _libBbExtensionIntentsNg = __webpack_require__(142);
	
	var _libBbExtensionIntentsNg2 = _interopRequireDefault(_libBbExtensionIntentsNg);
	
	var _modelBbProductSummaryNg = __webpack_require__(121);
	
	var _modelBbProductSummaryNg2 = _interopRequireDefault(_modelBbProductSummaryNg);
	
	var _libBbEventBusNg = __webpack_require__(124);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _controller = __webpack_require__(154);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _viewModel = __webpack_require__(155);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	var _service = __webpack_require__(159);
	
	var _service2 = _interopRequireDefault(_service);
	
	var _constants = __webpack_require__(160);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bbm-product-summary-ng
	 *
	 * @description
	 * Product summary.
	 *
	 * @borrows module:model-bb-product-summary-ng.Product as Product
	 * @borrows module:model-bb-product-summary-ng.ProductKind as ProductKind
	 * @borrows module:lib-bb-model-errors.ModelError as ModelError
	 *
	 * @example
	 *  <div ng-controller="ProductSummaryController as $ctrl">
	 *    <ul>
	 *       <li ng-repeat="product in ext.helpers.productKinds">{{product.id}}</li>
	 *    </ul>
	 *  </div>
	 */
	var moduleKey = 'widget-bbm-product-summary-ng';
	var serviceKey = moduleKey + ':service';
	var viewModelKey = moduleKey + ':viewModel';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_modelBbProductSummaryNg2.default, _libBbEventBusNg2.default, _libBbWidgetNg2.default, _libBbIntentNg2.default, _libBbStateContainerNg2.default, _libBbExtensionHelpersNg2.default, _libBbExtensionIntentsNg2.default]).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey,
	/* into */
	_viewModel2.default]).factory(serviceKey, [_modelBbProductSummaryNg.modelProductSummaryKey, viewModelKey,
	/* into */
	_service2.default]).factory(_libBbExtensionHelpersNg.extensionHelpersContextKey, [_libBbIntentNg.bbIntentKey, function (bbIntent) {
	  return { bbIntent: bbIntent };
	}]).factory(_libBbExtensionIntentsNg.extensionIntentsContextKey, [serviceKey, function (service) {
	  return { service: service };
	}]).controller('ProductSummaryController', [serviceKey,
	/* into */
	_controller2.default]).run([_libBbIntentNg.bbIntentKey, _libBbEventBusNg.eventBusKey, viewModelKey, _libBbWidgetNg.widgetKey, function (bbIntent, eventBus, viewModel, widget) {
	  viewModel.init();
	
	  bbIntent.init().then(function () {
	    eventBus.publish(_constants.Event.CXP_ITEM_LOADED, {
	      id: widget.getId()
	    });
	
	    eventBus.publish(_constants.Event.BB_ITEM_LOADED, {
	      id: widget.getId()
	    });
	  });
	}]).name;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ProductSummaryController;
	/**
	 * @name ProductSummaryController
	 * @ngkey ProductSummaryController
	 * @type {object}
	 * @description
	 * ProductSummary widget controller
	 */
	function ProductSummaryController(service) {
	  /**
	   * @description
	   * Widget initialization logic - called automatically during the angular cycle.
	   *
	   * @name ProductSummaryController#$onInit
	   * @type {function}
	   */
	  var $onInit = function $onInit() {
	    return service.loadProducts();
	  };
	
	  return {
	    /* Lifecycle hooks */
	    $onInit: $onInit
	  };
	}

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _initialState = __webpack_require__(156);
	
	var _initialState2 = _interopRequireDefault(_initialState);
	
	var _list = __webpack_require__(157);
	
	var _list2 = _interopRequireDefault(_list);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (stateContainer) {
	  var initialState = (0, _initialState2.default)();
	
	  /**
	   * @name ViewModel
	   * @type {object}
	   * @ngKey widget-bbm-products-summary-ng:viewModel
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
	     * Actions for updating the parts of the `ViewState` related to the products list
	     * @type {ViewModelListActions}
	     * @inner
	     */
	    list: (0, _list2.default)(stateContainer)
	  };
	};

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return {
	    productKinds: {
	      data: null,
	      loading: false,
	      error: null
	    }
	  };
	};
	
	/**
	 * @typedef {object} ViewState
	 * @description
	 * The current state of the [ViewModel]{@link module:lib-bb-view-model-ng}.
	 *
	 * @property {object} productKinds
	 * @property {boolean} productKinds.loading Indicates wether products are loading at the moment.
	 * @property {ProductKind[]} productKinds.data The collection of the productKinds.
	 * @property {object} productKinds.error The last encountered error.
	 */

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(158);
	
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelListActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelListActions#beforeLoad
	     * @description Update the `ViewState` before loading the productKinds
	     * @type {function}
	     * @inner
	     * @return {void}
	     */
	    beforeLoad: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        productKinds: Object.assign({}, state.productKinds, {
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterLoadSuccess
	     * @description Update the `ViewState` after successfully loading the productKinds
	     * @type {function}
	     * @inner
	     * @param {ProductsResponse} response Products load response
	     * @return {void}
	     */
	    afterLoadSuccess: stateContainer.createAction(function (state, response) {
	      return Object.assign({}, state, {
	        productKinds: Object.assign({}, state.productKinds, {
	          loading: false,
	          error: null,
	          data: response.productKinds
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterLoadError
	     * @description Update the `ViewState` after unsuccessful products load
	     * @type {function}
	     * @inner
	     * @param {ModelError} error Response error
	     * @return {void}
	     */
	    afterLoadError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        productKinds: Object.assign({}, state.productKinds, {
	          loading: false,
	          error: (0, _helpers.uiError)(error)
	        })
	      });
	    })
	  };
	};
	
	/**
	 * @typedef {object} ProductsResponse
	 * @property {object[]} productKinds Loaded products array
	 * @property {number} total Total number of products
	 */

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.uiError = undefined;
	
	var _errorMessages;
	
	var _libBbModelErrors = __webpack_require__(105);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* eslint-disable import/prefer-default-export */
	
	
	var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'model.error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'model.error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'model.error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'model.error.unexpected'), _errorMessages);
	
	var uiError = exports.uiError = function uiError(error) {
	  return {
	    message: errorMessages[error.code]
	  };
	};

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name ProductSummaryService
	 * @type {object}
	 * @ngkey widget-bbm-product-summary-ng:service
	 * @description
	 * The service encapsulates the core functionality of the Mobile Product summary
	 * Widget. It co-ordinates the communication of data from the `Model`
	 * with the communication with the user by updating the {@link ViewState}.
	 *
	 * Asynchronous methods update the {@link ViewState} in 3 potential
	 * stages; "before", "success", and "error", to allow the view to
	 * provide feedback to the user.
	 */
	
	/**
	 * @name createProductSummaryService
	 * @type {function}
	 *
	 * @param {module:model-bb-product-summary-ng.productSummaryModel} model ProductSummary model
	 * @param {ViewModel} viewModel
	 * @param {module:lib-bb-widget.Widget} widget
	 * @return {ProductSummaryService}
	 * @inner
	 */
	exports.default = function (model, viewModel) {
	  /**
	   * @name ProductSummaryService#loadProducts
	   * @type {function}
	   * @description
	   * Fetch products
	   * update the {@link ViewState} to display them.
	   * @param {boolean} forceLoad
	   * @return {Promise}
	   */
	  var loadProducts = function loadProducts() {
	    var forceLoad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	    viewModel.list.beforeLoad();
	
	    return model.load(forceLoad).then(function (_ref) {
	      var productKinds = _ref.productKinds,
	          total = _ref.total;
	
	      viewModel.list.afterLoadSuccess({
	        productKinds: productKinds,
	        total: total
	      });
	    }).catch(function (error) {
	      viewModel.list.afterLoadError(error);
	
	      throw error;
	    });
	  };
	
	  return {
	    loadProducts: loadProducts
	  };
	};

/***/ }),

/***/ 160:
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
//# sourceMappingURL=widget-bbm-product-summary-ng.js.map