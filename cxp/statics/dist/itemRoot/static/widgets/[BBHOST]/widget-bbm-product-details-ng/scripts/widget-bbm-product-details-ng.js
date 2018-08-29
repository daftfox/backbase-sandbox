(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-extension-helpers-ng"), require("model-bb-product-summary-ng"), require("lib-bb-intent-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-state-container-ng"), require("lib-bb-extension-events-ng"), require("lib-bb-extension-intents-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bbm-product-details-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-model-errors", "lib-bb-extension-helpers-ng", "model-bb-product-summary-ng", "lib-bb-intent-ng", "lib-bb-event-bus-ng", "lib-bb-state-container-ng", "lib-bb-extension-events-ng", "lib-bb-extension-intents-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bbm-product-details-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-extension-helpers-ng"), require("model-bb-product-summary-ng"), require("lib-bb-intent-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-state-container-ng"), require("lib-bb-extension-events-ng"), require("lib-bb-extension-intents-ng"));
	else
		root["widget-bbm-product-details-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-model-errors"], root["lib-bb-extension-helpers-ng"], root["model-bb-product-summary-ng"], root["lib-bb-intent-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-state-container-ng"], root["lib-bb-extension-events-ng"], root["lib-bb-extension-intents-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_99__, __WEBPACK_EXTERNAL_MODULE_103__, __WEBPACK_EXTERNAL_MODULE_105__, __WEBPACK_EXTERNAL_MODULE_120__, __WEBPACK_EXTERNAL_MODULE_121__, __WEBPACK_EXTERNAL_MODULE_122__, __WEBPACK_EXTERNAL_MODULE_124__, __WEBPACK_EXTERNAL_MODULE_140__, __WEBPACK_EXTERNAL_MODULE_141__, __WEBPACK_EXTERNAL_MODULE_142__) {
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

	module.exports = __webpack_require__(139);

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

/***/ 139:
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
	
	var _modelBbProductSummaryNg = __webpack_require__(121);
	
	var _modelBbProductSummaryNg2 = _interopRequireDefault(_modelBbProductSummaryNg);
	
	var _libBbEventBusNg = __webpack_require__(124);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbExtensionHelpersNg = __webpack_require__(120);
	
	var _libBbExtensionHelpersNg2 = _interopRequireDefault(_libBbExtensionHelpersNg);
	
	var _libBbExtensionEventsNg = __webpack_require__(141);
	
	var _libBbExtensionEventsNg2 = _interopRequireDefault(_libBbExtensionEventsNg);
	
	var _libBbExtensionIntentsNg = __webpack_require__(142);
	
	var _libBbExtensionIntentsNg2 = _interopRequireDefault(_libBbExtensionIntentsNg);
	
	var _viewController = __webpack_require__(143);
	
	var _viewController2 = _interopRequireDefault(_viewController);
	
	var _formController = __webpack_require__(144);
	
	var _formController2 = _interopRequireDefault(_formController);
	
	var _viewModel = __webpack_require__(145);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	var _service = __webpack_require__(150);
	
	var _service2 = _interopRequireDefault(_service);
	
	var _events = __webpack_require__(151);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _constants = __webpack_require__(152);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'widget-bbm-product-details-ng'; /**
	                                                  * @module widget-bbm-product-details-ng
	                                                  *
	                                                  * @description
	                                                  * Mobile product details widget.
	                                                  *
	                                                  * @example
	                                                  *  <div ng-controller="ProductDetailsFormController as $ctrl">
	                                                  *  </div>
	                                                  *
	                                                  *  <div ng-controller="ProductDetailsViewController as $ctrl">
	                                                  *  </div>
	                                                  */
	
	var eventServiceKey = moduleKey + ':events';
	var serviceKey = moduleKey + ':service';
	var viewModelKey = moduleKey + ':viewModel';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_modelBbProductSummaryNg2.default, _libBbEventBusNg2.default, _libBbWidgetNg2.default, _libBbIntentNg2.default, _libBbStateContainerNg2.default, _libBbExtensionHelpersNg2.default, _libBbExtensionEventsNg2.default, _libBbExtensionIntentsNg2.default]).factory(eventServiceKey, [_libBbEventBusNg.eventBusKey,
	/* into */
	_events2.default]).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey,
	/* into */
	_viewModel2.default]).factory(serviceKey, [_modelBbProductSummaryNg.modelProductSummaryKey, _libBbStateContainerNg.bbStateContainerKey, viewModelKey, eventServiceKey,
	/* into */
	_service2.default]).factory(_libBbExtensionHelpersNg.extensionHelpersContextKey, [_libBbIntentNg.bbIntentKey, serviceKey, function (bbIntent, service) {
	  return { bbIntent: bbIntent, service: service };
	}]).factory(_libBbExtensionIntentsNg.extensionIntentsContextKey, [serviceKey, function (service) {
	  return { service: service };
	}]).controller('ProductDetailsViewController', [
	/* into */
	_viewController2.default]).controller('ProductDetailsFormController', [
	/* into */
	_formController2.default]).run([_libBbIntentNg.bbIntentKey, _libBbEventBusNg.eventBusKey, viewModelKey, _libBbWidgetNg.widgetKey, function (bbIntent, eventBus, viewModel, widget) {
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

/***/ 140:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_140__;

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_141__;

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_142__;

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ProductDetailsViewController;
	/**
	 * @name ProductDetailsViewController
	 * @ngkey ProductDetailsViewController
	 * @description
	 * Mobile Product details view controller.
	 * @type {object}
	 */
	function ProductDetailsViewController() {}

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ProductDetailsFormController;
	/**
	 * @name ProductDetailsFormController
	 * @ngkey ProductDetailsFormController
	 * @description
	 * Mobile Product details form controller.
	 * @type {object}
	 */
	function ProductDetailsFormController() {}

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _initialState = __webpack_require__(146);
	
	var _initialState2 = _interopRequireDefault(_initialState);
	
	var _productDetails = __webpack_require__(147);
	
	var _productDetails2 = _interopRequireDefault(_productDetails);
	
	var _form = __webpack_require__(149);
	
	var _form2 = _interopRequireDefault(_form);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name ViewModel
	 * @type {object}
	 * @ngKey widget-bbm-product-details-ng::viewModel
	 * @inner
	 */
	exports.default = function (stateContainer) {
	  var initialState = (0, _initialState2.default)();
	
	  return {
	    /**
	     * @name ViewModel#init
	     * @description Initialises view model with initial state.
	     * @type {function}
	     *
	     * @return {ViewState}
	     * @inner
	     */
	    init: stateContainer.createAction(function () {
	      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	      return state;
	    }),
	
	    /**
	     * @name ViewModel#getState
	     * @description Returns view state
	     * @type {function}
	     *
	     * @return {ViewState}
	     * @inner
	     */
	    getState: stateContainer.getState,
	
	    /**
	     * @name ViewModel#form
	     * @description
	     * Actions for updating the parts of the `ViewState` related to the form.
	     *
	     * @type {function}
	     * @return {ViewState}
	     * @inner
	     */
	    form: (0, _form2.default)(stateContainer),
	
	    /**
	     * @name ViewModel#productDetails
	     * @description
	     * Actions for updating the parts of the `ViewState` related to the user.
	     * @type {function}
	     *
	     * @return {ViewState}
	     * @inner
	     */
	    productDetails: (0, _productDetails2.default)(stateContainer)
	  };
	};

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return {
	    productDetails: {
	      data: null,
	      loading: null,
	      error: null
	    },
	    form: {
	      data: {
	        alias: null
	      }
	    }
	  };
	};
	
	/**
	 * @typedef {object} ViewState
	 * @description
	 * The current state of the [ViewModel]{@link module:lib-bb-view-model-ng}.
	 *
	 * @property {object} productDetails
	 * @property {module:model-bb-product-summary-ng.ProductDetails} productDetails.data
	 * product details.
	 * @property {boolean} productDetails.loading
	 * Indicates whether the product details is loading at the moment.
	 * @property {object} productDetails.error The last encountered error.
	 *
	 * @property {object} form
	 * @property {object} form.data The form's data
	 * @property {string} from.data.alias a product alias.
	 */

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(148);
	
	/**
	 * @name ViewModelProductDetailsActions
	 * @type {object}
	 * @inner
	 */
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelProductDetailsActions#beforeProductDetailsLoad
	     * @description
	     * Update the `ViewState` before product details is loaded.
	     * @type {function}
	     *
	     * @inner
	     */
	    beforeProductDetailsLoad: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        productDetails: Object.assign({}, state.productDetails, {
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelProductDetailsActions#beforeProductDetailsUpdate
	     * @description
	     * Update the `ViewState` before product details is updated.
	     * @type {function}
	     *
	     * @inner
	     */
	    beforeProductDetailsUpdate: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        productDetails: Object.assign({}, state.productDetails, {
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelProductDetailsActions#afterProductDetailsLoadSuccess
	     * @description
	     * Update the `ViewState` after product details is successfully loaded.
	     * @type {function}
	     *
	     * @param {module:model-bb-product-summary-ng.ProductDetails} productDetailsData
	     * @inner
	     */
	    afterProductDetailsLoadSuccess: stateContainer.createAction(function (state, productDetailsData) {
	      return Object.assign({}, state, {
	        productDetails: Object.assign({}, state.productDetails, {
	          data: productDetailsData,
	          loading: false,
	          error: null
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelProductDetailsActions#afterProductDetailsUpdateSuccess
	     * @description
	     * Update the `ViewState` after product details is successfully updated.
	     * @type {function}
	     *
	     * @inner
	     */
	    afterProductDetailsUpdateSuccess: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        productDetails: Object.assign({}, state.productDetails, {
	          loading: false,
	          error: null
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelProductDetailsActions#afterProductDetailsLoadError
	     * @description Update the `ViewState` after unsuccessful product details load.
	     * @type {function}
	     *
	     * @param {module:model-bb-product-summary-ng.ModelError} error Response error.
	     * @inner
	     */
	    afterProductDetailsLoadError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        productDetails: Object.assign({}, state.productDetails, {
	          loading: false,
	          error: (0, _helpers.uiError)(error)
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelProductDetailsActions#afterProductDetailsUpdateError
	     * @description Update the `ViewState` after unsuccessful product details update.
	     * @type {function}
	     *
	     * @param {module:model-bb-product-summary-ng.ModelError} error Response error.
	     * @inner
	     */
	    afterProductDetailsUpdateError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        productDetails: Object.assign({}, state.productDetails, {
	          loading: false,
	          error: (0, _helpers.uiError)(error)
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelProductDetailsActions#resetSelectedProduct
	     * @description Update the `ViewState` by resetting product details.
	     * @type {function}
	     *
	     * @inner
	     */
	    resetSelectedProduct: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        productDetails: Object.assign({}, state.productDetails, {
	          data: null
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelProductDetailsActions#patchProductDetailsData
	     * @description Update the `ViewState` of the product details.
	     * @type {function}
	     *
	     * @param {object} productDetailsPatch
	     * @inner
	     */
	    patchProductDetailsData: stateContainer.createAction(function (state, productDetailsPatch) {
	      return Object.assign({}, state, {
	        productDetails: Object.assign({}, state.productDetails, {
	          data: Object.assign({}, state.productDetails.data, productDetailsPatch)
	        })
	      });
	    })
	  };
	};

/***/ }),

/***/ 148:
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

/***/ 149:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name ViewModelFormActions
	 * @type {object}
	 * @inner
	 */
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelFormActions#setProductAlias
	     * @description
	     * Update the `ViewState` by prefilling the form with a product alias.
	     * @type {function}
	     *
	     * @param {string} alias
	     * @inner
	     */
	    setProductAlias: stateContainer.createAction(function (state, alias) {
	      return Object.assign({}, state, {
	        form: Object.assign({}, state.form, {
	          data: Object.assign({}, state.form.data, {
	            alias: alias
	          })
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelFormActions#resetProductAlias
	     * @description
	     * Update the `ViewState` by resetting a product alias.
	     * @type {function}
	     *
	     * @inner
	     */
	    resetProductAlias: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        form: Object.assign({}, state.form, {
	          data: Object.assign({}, state.form.data, {
	            alias: null
	          })
	        })
	      });
	    })
	  };
	};

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name ProductDetailsService
	 * @type {object}
	 * @ngkey widget-bbm-product-details-ng::service
	 * @description
	 * The service encapsulates the core functionality of the Mobile Product Details Widget.
	 * It co-ordinates the communication of data from the `Model`
	 * with the communication with the user by updating the {@link ViewState}.
	 *
	 * Asynchronous methods update the {@link ViewState} in 3 potential
	 * stages; "before", "success", and "error", to allow the view to
	 * provide feedback to the user.
	 */
	
	/**
	 * @name ProductDetailsService
	 * @type {function}
	 *
	 * @param {module:model-bb-product-summary-ng.ProductDetails} model
	 * @param {ViewModel} viewModel
	 * @param {object} stateContainer
	 * @param {object} events
	 *
	 * @return {ProductDetailsService}
	 * @inner
	 */
	exports.default = function (model, stateContainer, viewModel, events) {
	  /**
	   * @name ProductDetailsService#getProductDetails
	   * @description
	   * Retrieves product details.
	   * @type {function}
	   *
	   * @return {module:model-bb-product-summary-ng.ProductDetails} product details.
	   * @inner
	   */
	  var getProductDetails = stateContainer.createSelector(function (state) {
	    return state.productDetails.data;
	  });
	
	  /**
	   * @name ProductDetailsService#loadProductDetails
	   * @description
	   * Updates an arrangement and
	   * updates the {@link ViewState} to display it.
	   * @type {function}
	   *
	   * @param {module:model-bb-product-summary-ng.ArrangementsData.ArrangementPatch} arrangement
	   * @return {Promise}
	   * @inner
	   */
	  var updateArrangement = function updateArrangement(arrangement) {
	    viewModel.productDetails.beforeProductDetailsLoad();
	
	    return model.patchArrangement(arrangement).then(function () {
	      viewModel.productDetails.afterProductDetailsUpdateSuccess();
	    }).catch(function (error) {
	      viewModel.productDetails.afterProductDetailsUpdateError(error);
	
	      throw error;
	    });
	  };
	
	  /**
	   * @name ProductDetailsService#loadProductDetails
	   * @description
	   * Fetches the product details and
	   * updates the {@link ViewState} to display it.
	   * @type {function}
	   *
	   * @param {string} productId product's id.
	   * @return {Promise}
	   * @inner
	   */
	  var loadProductDetails = function loadProductDetails(productId) {
	    viewModel.productDetails.beforeProductDetailsLoad();
	
	    return model.getProductDetails(productId).then(function (productDetails) {
	      viewModel.productDetails.afterProductDetailsLoadSuccess(productDetails);
	    }).catch(function (error) {
	      viewModel.productDetails.afterProductDetailsLoadError(error);
	
	      throw error;
	    });
	  };
	
	  /**
	   * @name ProductDetailsService#updateProductAlias
	   * @description
	   * Updates a product alias.
	   * @type {function}
	   *
	   * @param {module:model-bb-product-summary-ng.ArrangementsData.ArrangementPatch} arrangement
	   * @return {Promise}
	   */
	  var updateProductAlias = function updateProductAlias(arrangement) {
	    events.beforeProductAliasUpdate();
	
	    return updateArrangement(arrangement).then(function () {
	      events.afterProductAliasUpdateSuccess(arrangement);
	    }).catch(function (error) {
	      events.afterProductAliasUpdateError(error);
	
	      throw error;
	    });
	  };
	
	  /**
	   * @name ProductDetailsService#setProductAliasForm
	   * @description Fills up the form with a product alias.
	   * @type {function}
	   */
	  var setProductAliasForm = function setProductAliasForm() {
	    var _getProductDetails = getProductDetails(),
	        alias = _getProductDetails.alias;
	
	    viewModel.form.setProductAlias(alias);
	  };
	
	  /**
	   * @name ProductDetailsService#patchProductDetailsDataState
	   * @description Patches the product details data state.
	   * @type {function}
	   *
	   * @param {object} productDetailsPatch
	   */
	  var patchProductDetailsDataState = function patchProductDetailsDataState(productDetailsPatch) {
	    viewModel.productDetails.patchProductDetailsData(productDetailsPatch);
	  };
	
	  /**
	   * @name ProductDetailsService#loadProductDetailsIfNeeded
	   * @description Loads product details if needed.
	   * @type {function}
	   *
	   * @param {string} productId product's id.
	   * @return {Promise}
	   * @inner
	   */
	  var loadProductDetailsIfNeeded = function loadProductDetailsIfNeeded(productId) {
	    var selectedProduct = getProductDetails();
	
	    if (!selectedProduct) {
	      return loadProductDetails(productId);
	    } else if (selectedProduct.id !== productId) {
	      viewModel.productDetails.resetSelectedProduct();
	
	      return loadProductDetails(productId);
	    }
	
	    return Promise.resolve();
	  };
	
	  return {
	    loadProductDetailsIfNeeded: loadProductDetailsIfNeeded,
	    updateProductAlias: updateProductAlias,
	    setProductAliasForm: setProductAliasForm,
	    patchProductDetailsDataState: patchProductDetailsDataState
	  };
	};

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Event = exports.Event = {
	  /**
	   * An updated product alias is submitted to the server
	   * @event bb.event.productDetails.alias.edit.start
	   * @type {string}
	   */
	  BEFORE_PRODUCT_ALIAS_UPDATE: 'bb.event.productDetails.alias.edit.start',
	
	  /**
	   * A product alias is updated on the server
	   * @event bb.event.productDetails.alias.edit.done
	   * @type {string}
	   * @property {module:model-bb-product-summary-ng.ArrangementsData.ArrangementPatch} arrangement
	   */
	  AFTER_PRODUCT_ALIAS_UPDATE_SUCCESS: 'bb.event.productDetails.alias.edit.done',
	
	  /**
	   * A product alias fails to be updated on the server
	   * @event bb.event.productDetails.alias.edit.failed
	   * @type {string}
	   * @property {module:lib-bb-model-ng.ModelError} error
	   */
	  AFTER_PRODUCT_ALIAS_UPDATED_ERROR: 'bb.event.productDetails.alias.edit.failed'
	};
	
	exports.default = function (bus) {
	  return {
	    beforeProductAliasUpdate: function beforeProductAliasUpdate() {
	      bus.publish(Event.BEFORE_PRODUCT_ALIAS_UPDATE);
	    },
	    afterProductAliasUpdateSuccess: function afterProductAliasUpdateSuccess(arrangement) {
	      bus.publish(Event.AFTER_PRODUCT_ALIAS_UPDATE_SUCCESS, { arrangement: arrangement });
	    },
	    afterProductAliasUpdateError: function afterProductAliasUpdateError(error) {
	      bus.publish(Event.AFTER_PRODUCT_ALIAS_UPDATED_ERROR, { error: error });
	    }
	  };
	};

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable import/prefer-default-export */
	/**
	 * Pubsub events
	 * @type {Object}
	 */
	var Event = exports.Event = {
	  CXP_ITEM_LOADED: 'cxp.item.loaded',
	  BB_ITEM_LOADED: 'bb.item.loaded'
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bbm-product-details-ng.js.map