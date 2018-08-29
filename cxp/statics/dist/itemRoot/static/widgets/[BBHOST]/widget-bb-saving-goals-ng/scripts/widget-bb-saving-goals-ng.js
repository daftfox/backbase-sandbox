(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-ng"), require("lib-bb-intent-ng"), require("lib-bb-extension-helpers-ng"), require("model-bb-saving-goals-ng"), require("lib-bb-state-container-ng"), require("lib-bb-currency-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-saving-goals-ng", ["vendor-bb-angular", "lib-bb-model-errors", "lib-bb-widget-extension-ng", "lib-bb-event-bus-ng", "lib-bb-widget-ng", "lib-bb-intent-ng", "lib-bb-extension-helpers-ng", "model-bb-saving-goals-ng", "lib-bb-state-container-ng", "lib-bb-currency-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-saving-goals-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-ng"), require("lib-bb-intent-ng"), require("lib-bb-extension-helpers-ng"), require("model-bb-saving-goals-ng"), require("lib-bb-state-container-ng"), require("lib-bb-currency-ng"));
	else
		root["widget-bb-saving-goals-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-model-errors"], root["lib-bb-widget-extension-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-widget-ng"], root["lib-bb-intent-ng"], root["lib-bb-extension-helpers-ng"], root["model-bb-saving-goals-ng"], root["lib-bb-state-container-ng"], root["lib-bb-currency-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__) {
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

	module.exports = __webpack_require__(23);

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
/* 16 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(16);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(24);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbEventBusNg = __webpack_require__(25);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbWidgetNg = __webpack_require__(26);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbIntentNg = __webpack_require__(27);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbExtensionHelpersNg = __webpack_require__(28);
	
	var _libBbExtensionHelpersNg2 = _interopRequireDefault(_libBbExtensionHelpersNg);
	
	var _modelBbSavingGoalsNg = __webpack_require__(29);
	
	var _modelBbSavingGoalsNg2 = _interopRequireDefault(_modelBbSavingGoalsNg);
	
	var _libBbStateContainerNg = __webpack_require__(30);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _libBbCurrencyNg = __webpack_require__(31);
	
	var _libBbCurrencyNg2 = _interopRequireDefault(_libBbCurrencyNg);
	
	var _constants = __webpack_require__(32);
	
	var _service = __webpack_require__(33);
	
	var _service2 = _interopRequireDefault(_service);
	
	var _index = __webpack_require__(34);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _router = __webpack_require__(41);
	
	var _router2 = _interopRequireDefault(_router);
	
	var _defaultHooks = __webpack_require__(42);
	
	var _defaultHooks2 = _interopRequireDefault(_defaultHooks);
	
	var _listController = __webpack_require__(43);
	
	var _listController2 = _interopRequireDefault(_listController);
	
	var _formController = __webpack_require__(44);
	
	var _formController2 = _interopRequireDefault(_formController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* Controllers */
	/**
	 * @module widget-bb-saving-goals-ng
	 *
	 * @description
	 * Saving Goals
	 */
	var moduleKey = 'widget-bb-saving-goals-ng';
	var hooksKey = moduleKey + ':hooks';
	var serviceKey = moduleKey + ':service';
	var viewModelKey = moduleKey + ':view-model';
	var routerKey = moduleKey + ':router';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbEventBusNg2.default, _modelBbSavingGoalsNg2.default, _libBbStateContainerNg2.default, _libBbWidgetNg2.default, _libBbIntentNg2.default, _libBbExtensionHelpersNg2.default, _libBbCurrencyNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(_defaultHooks2.default)).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey,
	/* into */
	_index2.default]).factory(serviceKey, [_modelBbSavingGoalsNg.modelSavingGoalsKey, viewModelKey,
	/* into */
	_service2.default]).factory(routerKey, [_libBbStateContainerNg.bbStateContainerKey,
	/* into */
	_router2.default]).controller('ListController', [serviceKey, routerKey, _libBbEventBusNg.eventBusKey, viewModelKey,
	/* into */
	_listController2.default]).controller('FormController', [serviceKey, routerKey,
	/* into */
	_formController2.default]).factory(_libBbWidgetExtensionNg.extensionContextKey, [serviceKey, routerKey,
	/* into */
	function (service, router) {
	  return {
	    service: service,
	    router: router
	  };
	}]).factory(_libBbExtensionHelpersNg.extensionHelpersContextKey, [_libBbCurrencyNg.bbCurrencyRuleKey, function (getRule) {
	  return {
	    getRule: getRule
	  };
	}]).run([_libBbIntentNg.bbIntentKey, _libBbStateContainerNg.bbStateContainerKey, viewModelKey, _libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, function (bbIntent, bbStateContainer, viewModel, eventBus, widget) {
	  viewModel.init();
	
	  bbIntent.persist(bbStateContainer.getState, bbStateContainer.setState);
	
	  bbIntent.init().then(function () {
	    eventBus.publish(_constants.Message.CXP_ITEM_LOADED, {
	      id: widget.getId()
	    });
	
	    eventBus.publish(_constants.Message.BB_ITEM_LOADED, {
	      id: widget.getId()
	    });
	  });
	}]).name;
	
	/**
	 * @typedef {object} SavingGoalItem
	 * @extends module:model-bb-saving-goals-ng.SavingGoalItem
	 */
	
	/**
	 * @typedef {object} HelperContext
	 * @extends module:lib-bb-extension-helpers-ng.HelperContext
	 */
	
	/**
	 * @typedef {object} IntentContext
	 * @extends module:lib-bb-extension-intents-ng.IntentContext
	 */
	
	/**
	 * @typedef {object} EventContext
	 * @extends module:lib-bb-extension-events-ng.EventContext
	 * @property {SavingGoalsService} SavingGoalsService
	 */

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Message = exports.successMessages = exports.errorMessages = exports.notificationLevels = undefined;
	
	var _errorMessages;
	
	var _libBbModelErrors = __webpack_require__(21);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * @name notificationLevels
	 *
	 * @type {object}
	 * @description
	 * enum with levels for ui notifications
	 */
	var notificationLevels = exports.notificationLevels = {
	  DANGER: 'danger',
	  SUCCESS: 'success'
	};
	
	/**
	 * @name errorMessages
	 *
	 * @type {object}
	 * @description
	 * enum with standart model error message keys
	 */
	var errorMessages = exports.errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'saving.goals.model.error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'saving.goals.model.error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'saving.goals.model.error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'saving.goals.model.error.unexpected'), _errorMessages);
	
	/**
	 * @name successMessages
	 *
	 * @type {object}
	 * @description
	 * enum with success messages keys
	 */
	var successMessages = exports.successMessages = function () {
	  return ['create', 'update', 'delete'].reduce(function (acc, method) {
	    return Object.assign(acc, _defineProperty({}, method, 'saving.goals.model.' + method + '.success'));
	  }, {});
	}();
	
	/**
	 * @name Event
	 * @inner
	 * @type {object}
	 * @description
	 * Widget events enum
	 */
	var Event = {
	  PRODUCT_SELECTED: 'bb.event.product.selected',
	
	  CXP_ITEM_LOADED: 'cxp.item.loaded',
	  BB_ITEM_LOADED: 'bb.item.loaded'
	};
	
	/**
	 * @name Action
	 * @inner
	 * @type {object}
	 * @description
	 * Widget actions enum
	 */
	var Action = {};
	
	/**
	 * @name Message
	 * @type {object}
	 * @description
	 * Widget messages enum
	 */
	var Message = exports.Message = Object.assign({}, Action, Event);

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * The core functionality of the Saving goals widget
	 *
	 * The purpose of this module is to provide the main structure of the
	 * widget. Outlining the workflows, connecting the data from the
	 * model to the view via the customizations provided by the extension.
	 *
	 * @constructor SavingGoalsService
	 * @param {SavingGoalsModel} model
	 * @param {ViewModel} viewModel
	 */
	exports.default = function (model, viewModel) {
	  return {
	    /**
	     * @name SavingGoalsService#startList
	     *
	     * @description
	     * Prepare the view for listing the items
	     *
	     * @type {function}
	     */
	    startList: function startList() {
	      return model.getSelectedProduct().then(viewModel.product.afterSelectProductSuccess, viewModel.product.afterSelectProductError);
	    },
	
	    /**
	     * @name SavingGoalsService#list
	     *
	     * @description
	     * Update the view with an list of items loaded from the data source
	     *
	     * @type {function}
	     * @param {Object} requestParams paremeters of the SavingGoalsModel.GET request
	     * to be passed to the model
	     * @return {Promise}
	     */
	    list: function list(requestParams) {
	      viewModel.list.beforeList();
	      return model.getSavingGoals(requestParams).then(function (response) {
	        return viewModel.list.afterListSuccess(Object.assign({}, response));
	      }, viewModel.list.afterListError);
	    },
	
	    /**
	     * @name SavingGoalsService#startCreate
	     *
	     * @description
	     * Prepare the view for creating a new saving goal item
	     *
	     * @type {function}
	     */
	    startCreate: function startCreate() {
	      viewModel.create.beforeStartCreate(model.getSchema());
	    },
	
	    /**
	     * @name SavingGoalsService#startEdit
	     *
	     * @description
	     * Prepare the view for editing a saving goal
	     *
	     * @type {function}
	     * @param {string} goalId saving goal item id to be modified
	     */
	    startEdit: function startEdit(goalId) {
	      viewModel.edit.beforeStartEdit({ goalId: goalId, schema: model.getSchema() });
	    },
	
	    /**
	     * @name SavingGoalsService#create
	     *
	     * @description
	     * Creates a new saving goal item and triggers view update after it
	     *
	     * @type {function}
	     * @param {module:model-bb-saving-goals-ng.SavingGoalItem} item
	     * set of data for a new saving goal to be created
	     * @return {Promise}
	     */
	    create: function create(item) {
	      viewModel.create.beforeCreate();
	      return model.createSavingGoal(item).then(viewModel.create.afterCreateSuccess, viewModel.create.afterCreateError);
	    },
	
	    /**
	     * @name SavingGoalsService#edit
	     *
	     * @description
	     * Updates saving goal item and triggers view update after it
	     *
	     * @type {function}
	     * @param {module:model-bb-saving-goals-ng.SavingGoalItem} item saving goal item to be modified
	     * @return {Promise}
	     */
	    edit: function edit(item) {
	      viewModel.edit.beforeEdit();
	      return model.updateSavingGoal(item.id, item).then(viewModel.edit.afterEditSuccess, viewModel.edit.afterEditError);
	    },
	
	    /**
	     * @name SavingGoalsService#deleteGoal
	     *
	     * @description
	     * Removes saving goal and triggers view update after it
	     *
	     * @type {function}
	     * @param {module:model-bb-saving-goals-ng.SavingGoalItem} item saving goal item to be deleted
	     * @return {Promise}
	     */
	    deleteGoal: function deleteGoal(item) {
	      viewModel.deleteGoal.beforeDelete();
	      return model.deleteSavingGoal(item.id, item).then(viewModel.deleteGoal.afterDeleteSuccess, viewModel.deleteGoal.afterDeleteError);
	    }
	  };
	};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _list = __webpack_require__(35);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _product = __webpack_require__(37);
	
	var _product2 = _interopRequireDefault(_product);
	
	var _create = __webpack_require__(38);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _edit = __webpack_require__(39);
	
	var _edit2 = _interopRequireDefault(_edit);
	
	var _delete = __webpack_require__(40);
	
	var _delete2 = _interopRequireDefault(_delete);
	
	var _helpers = __webpack_require__(36);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @typedef {Object} ViewState
	 * @property {boolean} isLoading
	 * @property {SavingGoalItem[]} savingGoals
	 * @property {object} route
	 * @property {object} form
	 * @property {object[]} notifications
	 */
	
	/**
	 * @name ViewModel
	 * @type {object}
	 * @ngkey widget-bb-saving-goals-ng:viewModel
	 * @inner
	 */
	exports.default = function (vm) {
	  return {
	    init: vm.createAction(function () {
	      var current = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.createInitialState)();
	      return current;
	    }),
	    /**
	     * @name ViewModel#getState
	     * @description Returns view state
	     * @type {function}
	     * @inner
	     * @return {ViewState}
	     */
	    getState: vm.getState,
	    /**
	     * @name ViewModel#list
	     * @description
	     * Actions for updating the parts of the `ViewState` related to saving goals list
	     * @type {ViewModelListActions}
	     * @inner
	     */
	    list: (0, _list2.default)(vm),
	    /**
	     * @name ViewModel#product
	     * @description
	     * Actions for updating the parts of the `ViewState` related to currently selected product
	     * @type {ViewModelProductActions}
	     * @inner
	     */
	    product: (0, _product2.default)(vm),
	    /**
	     * @name ViewModel#create
	     * @description
	     * Actions for updating the parts of the `ViewState` related to saving goal creation
	     * @type {ViewModelCreateActions}
	     * @inner
	     */
	    create: (0, _create2.default)(vm),
	    /**
	     * @name ViewModel#edit
	     * @description
	     * Actions for updating the parts of the `ViewState` related to saving goal editing
	     * @type {ViewModelEditActions}
	     * @inner
	     */
	    edit: (0, _edit2.default)(vm),
	    /**
	     * @name ViewModel#deleteGoal
	     * @description
	     * Actions for updating the parts of the `ViewState` related to saving goal deleting
	     * @type {ViewModelDeleteActions}
	     * @inner
	     */
	    deleteGoal: (0, _delete2.default)(vm)
	  };
	};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(36);
	
	exports.default = function (vm) {
	  return {
	    /**
	     * @name ViewModelListActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelListActions#beforeList
	     * @inner
	     * @type {function}
	     * @description Amend the view to inform the user the list is being loaded
	     *
	     * @param {ViewState} current The current state of the view model
	     * @return {ViewState} The new state of the view model
	     */
	    beforeList: vm.createAction(function (current) {
	      return Object.assign({}, current, {
	        isLoading: true
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterListSuccess
	     * @inner
	     * @type {function}
	     * @description Amend the view to display the list of items
	     *
	     * @param {ViewState} current The current state of the view model
	     * @param {object} response
	     * @param {module:model-bb-saving-goals-ng.SavingGoalItem[]} response.items
	     * @return {ViewState} The new state of the view model
	     */
	    afterListSuccess: vm.createAction(function (current) {
	      var response = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      return Object.assign({}, current, {
	        savingGoals: response.items ? response.items : [],
	        isLoading: false
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterListError
	     * @inner
	     * @type {function}
	     * @description Amend the view to display the error encountered when loading the list
	     *
	     * @param {ViewState} current The current state of the view model
	     * @param {ModelError} error
	     * @return {ViewState} The new state of the view model
	     */
	    afterListError: vm.createAction(function (current, error) {
	      return Object.assign({}, current, {
	        savingGoalsError: (0, _helpers.makeUIErrorMessage)(error),
	        isLoading: false
	      });
	    })
	  };
	};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.findSavingGoalById = exports.createInitialState = exports.makeUISuccessMessage = exports.makeUIErrorMessage = undefined;
	
	var _constants = __webpack_require__(32);
	
	/**
	 * @name makeUIErrorMessage
	 *
	 * @type {function}
	 * @description Creates an error object for template
	 *
	 * @inner
	 * @param {object} modelError Error object
	 * @returns {{message: string, level: string}} notification
	 */
	var makeUIErrorMessage = exports.makeUIErrorMessage = function makeUIErrorMessage(modelError) {
	  var message = '';
	  var level = _constants.notificationLevels.DANGER;
	
	  if (modelError && modelError.code) {
	    message = _constants.errorMessages[modelError.code];
	  }
	  return { message: message, level: level };
	};
	
	/**
	 * @name makeUISuccessMessage
	 *
	 * @type {function}
	 * @description Creates a success notification for a specific
	 * method of [success, update, delete]
	 *
	 * @inner
	 * @param {string} method
	 * @returns {{message: string, level: string}} notification
	 */
	var makeUISuccessMessage = exports.makeUISuccessMessage = function makeUISuccessMessage(method) {
	  return {
	    message: _constants.successMessages[method],
	    level: _constants.notificationLevels.SUCCESS
	  };
	};
	
	/**
	 * @name createInitialState
	 *
	 * @type {function}
	 * @description Creates an initial state
	 *
	 * @inner
	 * @return {object}
	 */
	var createInitialState = exports.createInitialState = function createInitialState() {
	  return {
	    isLoading: false,
	    savingGoals: [],
	    product: {},
	    route: {
	      name: 'list',
	      params: {}
	    },
	    form: {},
	    notifications: []
	  };
	};
	
	/**
	 * @name findSavingGoalById
	 *
	 * @type {function}
	 * @description Helper to get an item from the array by a savingGoalId
	 *
	 * @inner
	 * @param {Array<SavingGoalItem>} savingGoals an array of saving goals to search in
	 * @param {string} savingGoalId id to be used for a search
	 * @returns {SavingGoalItem} search result (single item)
	 */
	var findSavingGoalById = exports.findSavingGoalById = function findSavingGoalById() {
	  var savingGoals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var savingGoalId = arguments[1];
	  return savingGoals.filter(function (goal) {
	    return goal.id === savingGoalId;
	  }).pop();
	};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(36);
	
	exports.default = function (vm) {
	  return {
	    /**
	     * @name ViewModelProductActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelProductActions#afterSelectProductSuccess
	     * @description Update the `ViewState` after new product is selected
	     * @type {function}
	     * @inner
	     *
	     * @param {ViewState} current The current state of the view model
	     * @param {?object} selectedProduct Selected Product
	     * @return {void}
	     */
	    afterSelectProductSuccess: vm.createAction(function (current, selectedProduct) {
	      return Object.assign({}, current, {
	        product: {
	          kind: selectedProduct.kind,
	          currency: selectedProduct.currency,
	          balance: selectedProduct.availableBalance
	        },
	        route: Object.assign({}, current.route, {
	          params: Object.assign({}, current.route.params, {
	            arrangementId: selectedProduct.id
	          })
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelProductActions#afterSelectProductError
	     * @description Update the `ViewState` after unsuccessful product selection
	     * @type {function}
	     * @inner
	     *
	     * @param {ViewState} current The current state of the view model
	     * @param {module:lib-bb-model-errors.ModelError} error
	     * @return {ViewState} The new state of the view model
	     */
	    afterSelectProductError: vm.createAction(function (current, error) {
	      return Object.assign({}, current, {
	        savingGoalsError: (0, _helpers.makeUIErrorMessage)(error),
	        isLoading: false
	      });
	    })
	  };
	};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(36);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	exports.default = function (vm) {
	  return {
	    /**
	     * @name ViewModelCreateActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelCreateActions#beforeStartCreate
	     * @inner
	     * @type {function}
	     * @description Amend the view to inform the user that the create form is being
	     * ready to create a new item
	     *
	     * @param {ViewState} current The current state of the view model
	     * @param {object} schema saving goals POST schema to be used for validation
	     * @return {ViewState} The new state of the view model
	     */
	    beforeStartCreate: vm.createAction(function (current, schema) {
	      return Object.assign({}, current, {
	        form: { goalAmount: { currency: (current.product || {}).currency } },
	        schema: schema,
	        isLoading: false
	      });
	    }),
	
	    /**
	     * @name ViewModelCreateActions#beforeCreate
	     * @inner
	     * @type {function}
	     * @description Amend the view to inform the user the create operation is being
	     * started
	     *
	     * @param {ViewState} current The current state of the view model
	     * @return {ViewState} The new state of the view model
	     */
	    beforeCreate: vm.createAction(function (current) {
	      return Object.assign({}, current, {
	        isLoading: true
	      });
	    }),
	
	    /**
	     * @name ViewModelCreateActions#afterCreateSuccess
	     * @inner
	     * @type {function}
	     * @description Ammend the view to inform the user that create operation
	     * successfully finished
	     *
	     * @param {ViewState} current The current state of the view model
	     * @returns {ViewState} The new state of the view model
	     */
	    afterCreateSuccess: vm.createAction(function (current) {
	      return Object.assign({}, current, {
	        notifications: [].concat(_toConsumableArray(current.notifications || []), [(0, _helpers.makeUISuccessMessage)('create')]),
	        isLoading: false
	      });
	    }),
	    /**
	     * @name ViewModelCreateActions#afterCreateError
	     * @inner
	     * @type {function}
	     * @description Ammend the view to inform the user that there was
	     * an error during the creation
	     *
	     * @param {ViewState} current The current state of the view model
	     * @param {object} error
	     * @returns {ViewState} The new state of the view model
	     */
	    afterCreateError: vm.createAction(function (current, error) {
	      return Object.assign({}, current, {
	        notifications: [].concat(_toConsumableArray(current.notifications || []), [(0, _helpers.makeUIErrorMessage)(error)]),
	        isLoading: false
	      });
	    }),
	    /**
	     * @name ViewModelCreateActions#cancelCreate
	     * @inner
	     * @type {function}
	     * @description Ammend the view to inform the user that creating
	     * operation is canceled
	     *
	     * @param {ViewState} current The current state of the view model
	     * @returns {ViewState} The new state of the view model
	     */
	    cancelCreate: vm.createAction(function (current) {
	      return Object.assign({}, current, {
	        form: null
	      });
	    })
	  };
	};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(36);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* global angular */
	
	
	exports.default = function (vm) {
	  return {
	    /**
	     * @name ViewModelEditActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelEditActions#beforeStartEdit
	     * @inner
	     * @type {function}
	     * @description Amend the view to inform the user that the edit form is being
	     * ready
	     *
	     * @param {ViewState} current The current state of the view model
	     * @param {{goalId: string, schema: object}} params object id and schema to be used for editing
	     * @return {ViewState} The new state of the view model
	     */
	    beforeStartEdit: vm.createAction(function (current, params) {
	      var goalId = params.goalId,
	          schema = params.schema;
	
	      return Object.assign({}, current, {
	        form: angular.copy((0, _helpers.findSavingGoalById)(current.savingGoals, goalId)),
	        schema: schema,
	        isLoading: false
	      });
	    }),
	
	    /**
	     * @name ViewModelEditActions#beforeEdit
	     * @inner
	     * @type {function}
	     * @description Amend the view to inform the user the edit operation is being
	     * started
	     *
	     * @param {ViewState} current The current state of the view model
	     * @return {ViewState} The new state of the view model
	     */
	    beforeEdit: vm.createAction(function (current) {
	      return Object.assign({}, current, {
	        isLoading: true
	      });
	    }),
	
	    /**
	     * @name ViewModelEditActions#afterEditSuccess
	     * @inner
	     * @type {function}
	     * @description Ammend the view to inform the user that edit operation
	     * successfully finished
	     *
	     * @param {ViewState} current The current state of the view model
	     * @returns {ViewState} The new state of the view model
	     */
	    afterEditSuccess: vm.createAction(function (current) {
	      return Object.assign({}, current, {
	        notifications: [].concat(_toConsumableArray(current.notifications || []), [(0, _helpers.makeUISuccessMessage)('update')]),
	        isLoading: false
	      });
	    }),
	
	    /**
	     * @name ViewModelEditActions#afterEditError
	     * @inner
	     * @type {function}
	     * @description Ammend the view to inform the user that there was
	     * an error during the editing
	     *
	     * @param {ViewState} current The current state of the view model
	     * @param {object} error server error response
	     * @returns {ViewState} The new state of the view model
	     */
	    afterEditError: vm.createAction(function (current, error) {
	      return Object.assign({}, current, {
	        notifications: [].concat(_toConsumableArray(current.notifications || []), [(0, _helpers.makeUIErrorMessage)(error)]),
	        isLoading: false
	      });
	    })
	  };
	};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(36);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	exports.default = function (vm) {
	  return {
	    /**
	     * @name ViewModelDeleteActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelDeleteActions#beforeDelete
	     * @inner
	     * @type {function}
	     * @description Amend the view to inform the user that delete operation is being started
	     *
	     * @param {ViewState} current The current state of the view model
	     * @return {ViewState} The new state of the view model
	     */
	    beforeDelete: vm.createAction(function (current) {
	      return Object.assign({}, current, {
	        isLoading: true
	      });
	    }),
	
	    /**
	     * @name ViewModelDeleteActions#afterDeleteSuccess
	     * @inner
	     * @type {function}
	     * @description Ammend the view to inform the user that delete operation successfully finished
	     *
	     * @param {ViewState} current The current state of the view model
	     * @returns {ViewState} The new state of the view model
	     */
	    afterDeleteSuccess: vm.createAction(function (current) {
	      return Object.assign({}, current, {
	        notifications: [].concat(_toConsumableArray(current.notifications || []), [(0, _helpers.makeUISuccessMessage)('delete')]),
	        isLoading: false
	      });
	    }),
	
	    /**
	     * @name ViewModelDeleteActions#afterDeleteError
	     * @inner
	     * @type {function}
	     * @description Ammend the view to inform the user that there was
	     * an error during the deleting
	     *
	     * @param {ViewState} current The current state of the view model
	     * @param {object} error server error response
	     * @returns {ViewState} The new state of the view model
	     */
	    afterDeleteError: vm.createAction(function (current, error) {
	      return Object.assign({}, current, {
	        notifications: [].concat(_toConsumableArray(current.notifications || []), [(0, _helpers.makeUIErrorMessage)(error)]),
	        isLoading: false
	      });
	    })
	  };
	};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	exports.default = function (stateContainer) {
	  var subscribers = [];
	
	  var setRoute = stateContainer.createAction(function (state, _ref) {
	    var name = _ref.name,
	        params = _ref.params;
	    return Object.assign({}, state, {
	      route: {
	        name: name,
	        params: params
	      }
	    });
	  });
	
	  var notifySubscribers = function notifySubscribers(name, params) {
	    subscribers.forEach(function (subscriber) {
	      subscriber(name, params);
	    });
	  };
	
	  var getParams = stateContainer.createSelector(function (state) {
	    return state.route.params;
	  });
	
	  return {
	    goto: function goto(name, params, overwrite) {
	      var newParams = overwrite ? params : Object.assign(getParams(), params);
	      setRoute({ name: name, params: newParams });
	      notifySubscribers(name, newParams);
	    },
	
	    getParams: getParams,
	
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
/* 42 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (service, router, eventBus, viewModel) {
	  var unsubscribe = null;
	
	  /**
	   * @name ListController#getLoadParams
	   * @description Returns request parameters for the list request
	   * @type {function}
	   * @inner
	   * @return {object} Request parameters
	   */
	  var getLoadParams = function getLoadParams() {
	    var _viewModel$getState = viewModel.getState(),
	        route = _viewModel$getState.route;
	
	    return route.params || {};
	  };
	
	  /**
	   * @name ListController#loadItems
	   * @description Fills the state with saving goal items
	   * @type {function}
	   * @inner
	   */
	  var loadItems = function loadItems() {
	    return service.list(getLoadParams());
	  };
	
	  /**
	   * @name ListController#onProductSelect
	   * @description Method to be executed once product change event is received
	   * @type {function}
	   * @inner
	   * @param {object} payload Event payload
	   */
	  var onProductSelect = function onProductSelect(payload) {
	    viewModel.product.afterSelectProductSuccess(payload.product || null);
	    loadItems();
	  };
	
	  /**
	   * @description
	   * Adds subscriptions to bus events
	   *
	   * @inner
	   * @name ListController#bindEvents
	   * @type {function}
	   */
	  var bindEvents = function bindEvents() {
	    eventBus.subscribe(_constants.Message.PRODUCT_SELECTED, onProductSelect);
	  };
	
	  /**
	   * @name ListController#$onInit
	   *
	   * @description
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @type {function}
	   * @returns {Promise} Promise which is resolved once contoller is initialized,
	   *   or rejected in case of errors
	   */
	  var $onInit = function $onInit() {
	    service.startList().then(bindEvents).then(loadItems);
	
	    unsubscribe = router.subscribe(function (route) {
	      var params = router.getParams() || {};
	      if (route !== 'list' || !params.reload) {
	        return;
	      }
	
	      loadItems();
	    });
	  };
	
	  /**
	   * @name ListController#$onDestroy
	   *
	   * @description
	   * AngularJS Lifecycle hook used to destroy the controller
	   *
	   * @type {function}
	   */
	  var $onDestroy = function $onDestroy() {
	    if (unsubscribe) {
	      unsubscribe();
	    }
	  };
	
	  /**
	   * @name ListController#create
	   *
	   * @description
	   * Internal navigation for getting to create form from the list of items
	   *
	   * @type {function}
	   */
	  var create = function create() {
	    router.goto('form');
	  };
	
	  /**
	   * @name ListController#edit
	   *
	   * @description
	   * Internal navigation for getting to edit form from the list of items
	   *
	   * @type {function}
	   * @param {string} goalId identifier of a saving goal to be changed
	   */
	  var edit = function edit(goalId) {
	    router.goto('form', { goalId: goalId });
	  };
	
	  /**
	   * @name ListController#deleteGoal
	   *
	   * @description
	   * Controller method to handle deleting of an item
	   *
	   * @type {function}
	   * @param {object} savingGoal Object to be removed
	   * @param {?boolean} thenReload Flag which defines if list should be reloaded
	   * from the server after delete operation (default true)
	   */
	  var deleteGoal = function deleteGoal(savingGoal) {
	    var thenReload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	    return service.deleteGoal(savingGoal).then(function () {
	      router.goto('list', { reload: thenReload });
	    });
	  };
	
	  return {
	    $onInit: $onInit,
	    $onDestroy: $onDestroy,
	    create: create,
	    edit: edit,
	    deleteGoal: deleteGoal
	  };
	};
	
	var _constants = __webpack_require__(32);

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name FormController
	 * @ngkey FormController
	 * @type {object}
	 * @description
	 * Saving goals widget form controller
	 */
	exports.default = function (service, router) {
	  return {
	    /**
	     * @name FormController#$onInit
	     *
	     * @description
	     * AngularJS Lifecycle hook used to initialize the controller
	     *
	     * @type {function}
	     * @returns {Promise} Promise which is resolved once contoller is initialized,
	     * or rejected in case of errors
	     */
	    $onInit: function $onInit() {
	      var goalId = (router.getParams() || {}).goalId;
	      if (goalId) {
	        service.startEdit(goalId);
	      } else {
	        service.startCreate();
	      }
	    },
	
	
	    /**
	     * @name FormController#$onDestroy
	     *
	     * @description
	     * AngularJS Lifecycle hook used to destroy the controller
	     *
	     * @type {function}
	     */
	    $onDestroy: function $onDestroy() {
	      var arrangementId = (router.getParams() || {}).arrangementId;
	      router.goto('list', { arrangementId: arrangementId }, true);
	    },
	
	
	    /**
	     * @name FormController#save
	     *
	     * @description
	     * Controller method to handle new/edited item save
	     * and to initiate state change via routing
	     *
	     * @type {function}
	     * @param {object} value Object to be saved as a saving goal
	     * @param {?boolean} thenReload Flag which defines if saving goals values should be reloaded
	     * from the server after create/update operation
	     */
	    save: function save(value) {
	      var thenReload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	      var arrangementId = (router.getParams() || {}).arrangementId;
	      var parameters = { reload: thenReload };
	      // if arrangementId is present, append it to the object
	      if (arrangementId) {
	        Object.assign(parameters, { arrangementId: arrangementId });
	      }
	
	      if (value.id) {
	        service.edit(value).then(function () {
	          router.goto('list', parameters, true);
	        });
	      } else {
	        if (arrangementId) {
	          Object.assign(value, { arrangementId: arrangementId });
	        }
	
	        service.create(value).then(function () {
	          router.goto('list', parameters, true);
	        });
	      }
	    }
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=widget-bb-saving-goals-ng.js.map