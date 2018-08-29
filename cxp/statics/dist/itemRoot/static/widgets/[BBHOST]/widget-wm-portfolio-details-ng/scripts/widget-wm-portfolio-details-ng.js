(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib-bb-state-container-ng"), require("lib-wm-portfolio-view-model-helper"), require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("model-wm-portfolio-summary-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-wm-portfolio-details-ng", ["lib-bb-state-container-ng", "lib-wm-portfolio-view-model-helper", "vendor-bb-angular", "lib-bb-widget-extension-ng", "model-wm-portfolio-summary-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-wm-portfolio-details-ng"] = factory(require("lib-bb-state-container-ng"), require("lib-wm-portfolio-view-model-helper"), require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("model-wm-portfolio-summary-ng"));
	else
		root["widget-wm-portfolio-details-ng"] = factory(root["lib-bb-state-container-ng"], root["lib-wm-portfolio-view-model-helper"], root["vendor-bb-angular"], root["lib-bb-widget-extension-ng"], root["model-wm-portfolio-summary-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_86__, __WEBPACK_EXTERNAL_MODULE_88__, __WEBPACK_EXTERNAL_MODULE_93__, __WEBPACK_EXTERNAL_MODULE_125__, __WEBPACK_EXTERNAL_MODULE_126__) {
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

	module.exports = __webpack_require__(146);

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

/***/ 146:
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
	
	var _modelWmPortfolioSummaryNg = __webpack_require__(126);
	
	var _modelWmPortfolioSummaryNg2 = _interopRequireDefault(_modelWmPortfolioSummaryNg);
	
	var _controller = __webpack_require__(147);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(148);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	var _service = __webpack_require__(149);
	
	var _service2 = _interopRequireDefault(_service);
	
	var _viewModel = __webpack_require__(150);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-wm-portfolio-details-ng
	 *
	 * @description
	 * Portfolio details widget
	 *
	 *
	 * @example
	 *  <div ng-controller="PortfolioDetailsController as $ctrl">
	 *  </div>
	 */
	
	var hooksKey = 'widget-wm-portfolio-details-ng:hooks';
	var serviceKey = 'widget-wm-portfolio-details-ng:service';
	var viewModelKey = 'widget-wm-portfolio-details-ng:viewModel';
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('widget-wm-portfolio-details-ng', [_modelWmPortfolioSummaryNg2.default, _libBbStateContainerNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).factory(serviceKey, [_modelWmPortfolioSummaryNg.modelPortfolioSummaryKey, viewModelKey, hooksKey, _service2.default]).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey, hooksKey, _viewModel2.default]).controller('PortfolioDetailsController', [serviceKey, viewModelKey,
	/* into */
	_controller2.default]).name;

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = PortfolioDetailsController;
	/**
	 * @name PortfolioDetailsController
	 * @ngkey PortfolioDetailsController
	 * @type {object}
	 * @description
	 * Porftolio details controller.
	 */
	
	function PortfolioDetailsController(service, viewModel) {
	  var $ctrl = this;
	
	  /**
	   * @description
	   * Handles loading of portfolio details
	   *
	   * @private
	   * @name PortfolioDetailsController#loadPortfolioDetails
	   * @type {function}
	   * Load positions
	   * @returns {promise.<array>}
	   */
	  var loadPortfolioDetails = function loadPortfolioDetails() {
	    return service.loadPortfolioDetails();
	  };
	
	  /*
	   * Widget initialization logic.
	   */
	  var $onInit = function $onInit() {
	    viewModel.init();
	    return loadPortfolioDetails();
	  };
	
	  Object.assign($ctrl, {
	    loadPortfolioDetails: loadPortfolioDetails,
	    $onInit: $onInit
	  });
	
	  return Object.assign({
	    get state() {
	      return viewModel.getState();
	    },
	    get errors() {
	      return viewModel.getState().errors;
	    }
	  }, $ctrl);
	}

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

	"use strict";

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (model, viewModel) {
	  return {
	    /**
	     * @description
	     * Handles loading of portfolio details
	     *
	     * @public
	     * @name loadPortfolioDetails
	     * @type {function}
	     * @returns {promise.<array>}
	     */
	    loadPortfolioDetails: function loadPortfolioDetails() {
	      viewModel.beforeLoadPortfolioDetails();
	      return model.getSelectedPortfolioId().then(function (portfolioId) {
	        return model.loadPortfolioSummaryRecord(portfolioId);
	      }).then(viewModel.afterLoadPortfolioDetailsSuccess).catch(viewModel.afterLoadPortfolioDetailsError);
	    }
	  };
	};

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libWmPortfolioViewModelHelper = __webpack_require__(88);
	
	/**
	* @name initialState
	* @description portfolio details store initial state
	* @type {object}
	* @property {object} portfolioDetails an object of portfolio details
	* @property {boolean} initialLoading Boolean flag of initial loading
	* @property {object} errors          portfolios details errors
	*/
	
	var initialState = {
	  portfolioDetails: {
	    data: null,
	    loading: false
	  },
	  initialLoading: true,
	  errors: {
	    portfolioDetailsError: null
	  }
	};
	
	exports.default = function (stateContainer) {
	  return Object.assign({
	    getState: stateContainer.getState
	  }, (0, _libWmPortfolioViewModelHelper.wrapActions)(stateContainer, {
	    init: function init() {
	      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	      return state;
	    },
	    beforeLoadPortfolioDetails: function beforeLoadPortfolioDetails() {
	      return {
	        initialLoading: true,
	        portfolioDetails: {
	          loading: true
	        }
	      };
	    },
	    afterLoadPortfolioDetailsSuccess: function afterLoadPortfolioDetailsSuccess(state, raw) {
	      return {
	        initialLoading: false,
	        portfolioDetails: {
	          loading: false,
	          data: raw.data
	        },
	        errors: {
	          portfolioDetailsError: null
	        }
	      };
	    },
	    afterLoadPortfolioDetailsError: function afterLoadPortfolioDetailsError(state, error) {
	      return {
	        initialLoading: false,
	        portfolioDetails: {
	          loading: false,
	          data: null
	        },
	        errors: {
	          portfolioDetailsError: error.code
	        }
	      };
	    }
	  }));
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-wm-portfolio-details-ng.js.map