(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib-bb-state-container-ng"), require("lib-wm-portfolio-view-model-helper"));
	else if(typeof define === 'function' && define.amd)
		define("lib-wm-portfolio-router-ng", ["lib-bb-state-container-ng", "lib-wm-portfolio-view-model-helper"], factory);
	else if(typeof exports === 'object')
		exports["lib-wm-portfolio-router-ng"] = factory(require("lib-bb-state-container-ng"), require("lib-wm-portfolio-view-model-helper"));
	else
		root["lib-wm-portfolio-router-ng"] = factory(root["lib-bb-state-container-ng"], root["lib-wm-portfolio-view-model-helper"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_86__, __WEBPACK_EXTERNAL_MODULE_88__) {
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

	module.exports = __webpack_require__(85);

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routerKey = undefined;
	
	var _libBbStateContainerNg = __webpack_require__(86);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _router = __webpack_require__(87);
	
	var _router2 = _interopRequireDefault(_router);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* global angular */
	var moduleKey = 'ui-wm-router-module';
	
	var routerKey = exports.routerKey = moduleKey + ':router';
	
	exports.default = angular.module(moduleKey, [_libBbStateContainerNg2.default]).factory(routerKey, [_libBbStateContainerNg.bbStateContainerKey, _router2.default]).name;

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_86__;

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libWmPortfolioViewModelHelper = __webpack_require__(88);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	exports.default = function (stateContainer) {
	  var subscribers = [];
	
	  var setRoute = (0, _libWmPortfolioViewModelHelper.wrapAction)(stateContainer, function (state, _ref) {
	    var name = _ref.name,
	        params = _ref.params;
	    return {
	      route: {
	        name: name,
	        params: params
	      }
	    };
	  });
	
	  var notifySubscribers = function notifySubscribers(name, params) {
	    subscribers.forEach(function (subscriber) {
	      subscriber(name, params);
	    });
	  };
	
	  return {
	    goto: function goto(name) {
	      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	      setRoute({ name: name, params: params });
	      notifySubscribers(name, params);
	    },
	
	    getParams: stateContainer.createSelector(function (state) {
	      return state.route.params;
	    }),
	    getRoute: stateContainer.createSelector(function (state) {
	      return state.route.name;
	    }),
	
	    subscribe: function subscribe(callback) {
	      subscribers = [].concat(_toConsumableArray(subscribers), [callback]);
	      return function () {
	        subscribers = subscribers.filter(function (sub) {
	          return sub !== callback;
	        });
	      };
	    }
	  };
	};

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_88__;

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-wm-portfolio-router-ng.js.map