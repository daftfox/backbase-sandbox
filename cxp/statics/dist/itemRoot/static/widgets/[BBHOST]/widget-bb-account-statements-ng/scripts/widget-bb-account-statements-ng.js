(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("model-bb-account-statements-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-account-statements-ng", ["vendor-bb-angular", "lib-bb-model-errors", "lib-bb-widget-ng", "lib-bb-event-bus-ng", "lib-bb-widget-extension-ng", "model-bb-account-statements-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-account-statements-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("model-bb-account-statements-ng"));
	else
		root["widget-bb-account-statements-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-model-errors"], root["lib-bb-widget-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-widget-extension-ng"], root["model-bb-account-statements-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_43__, __WEBPACK_EXTERNAL_MODULE_44__, __WEBPACK_EXTERNAL_MODULE_45__, __WEBPACK_EXTERNAL_MODULE_46__) {
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

	module.exports = __webpack_require__(42);

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(25);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(43);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(44);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbWidgetExtensionNg = __webpack_require__(45);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _modelBbAccountStatementsNg = __webpack_require__(46);
	
	var _modelBbAccountStatementsNg2 = _interopRequireDefault(_modelBbAccountStatementsNg);
	
	var _controller = __webpack_require__(47);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(49);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'widget-bb-account-statements-ng'; /**
	                                                    * @module widget-bb-account-statements-ng
	                                                    *
	                                                    * @description
	                                                    * Account statements widget
	                                                    */
	
	var hooksKey = moduleKey + ':hooks';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbWidgetNg2.default, _libBbEventBusNg2.default, _modelBbAccountStatementsNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).controller('AccountStatementsController', [
	// dependencies to inject
	_libBbEventBusNg.eventBusKey, hooksKey, _modelBbAccountStatementsNg.modelAccountStatementsKey, _libBbWidgetNg.widgetKey,
	/* into */
	_controller2.default]).run([_libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, function (bus, widget) {
	  bus.publish('cxp.item.loaded', {
	    id: widget.getId()
	  });
	}]).name;

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_43__;

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_44__;

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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _ErrorMessage;
	
	exports.default = AccountStatementsController;
	
	var _libBbModelErrors = __webpack_require__(30);
	
	var _constants = __webpack_require__(48);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var ErrorMessage = (_ErrorMessage = {}, _defineProperty(_ErrorMessage, _libBbModelErrors.E_AUTH, _constants.MessageKey.ERROR_AUTH), _defineProperty(_ErrorMessage, _libBbModelErrors.E_CONNECTIVITY, _constants.MessageKey.ERROR_CONNECTION), _defineProperty(_ErrorMessage, _libBbModelErrors.E_UNEXPECTED, _constants.MessageKey.ERROR_UNEXPECTED), _defineProperty(_ErrorMessage, _libBbModelErrors.E_USER, _constants.MessageKey.ERROR_USER), _defineProperty(_ErrorMessage, _constants.ErrorKeys.E_PREFERENCE, _constants.MessageKey.ERROR_PREFERENCE), _ErrorMessage);
	
	/**
	 * @description
	 * Creates an error object for template
	 *
	 * @name uiError
	 *
	 * @inner
	 * @param {Object} modelError Error object
	 * @param {Object} data In case the message has dynamic replacement "{some}"
	 * @type {Function}
	 * @returns {{message: string}}
	 */
	var uiError = function uiError(modelError) {
	  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  var error = '';
	
	  if (modelError && modelError.code) {
	    error = ErrorMessage[modelError.code];
	  }
	
	  return {
	    message: error,
	    data: data
	  };
	};
	
	/**
	 * Defines the default pageSize for the statements page
	 * as defined in the widget model.xml
	 * @name DEFAULT_PAGE_SIZE
	 * @type {number}
	 */
	var DEFAULT_PAGE_SIZE = 24;
	
	/**
	 * Defines the default maxNavPages for the statements page
	 * as defined in the widget model.xml
	 * @name DEFAULT_MAX_NAV_PAGES
	 * @type {int}
	 */
	var DEFAULT_MAX_NAV_PAGES = 3;
	
	/**
	 * Defines the default dismissMessageTime for the statements widget
	 * as defined in the widget model.xml
	 * @name DEFAULT_DISMISS_MESSAGE_TIME
	 * @type {int}
	 */
	var DEFAULT_DISMISS_MESSAGE_TIME = 3;
	
	/**
	 * Defines the category filter will be multiple or single selection
	 * @name DEFAULT_MULTI_CATEGORY
	 * @type {boolean}
	 */
	var DEFAULT_MULTI_CATEGORY = true;
	
	/**
	 * Defines show/hide category filter and column
	 * @name DEFAULT_SHOW_CATEGORY
	 * @type {boolean}
	 */
	var DEFAULT_SHOW_CATEGORY = true;
	
	/**
	 * Defines show/hide description column
	 * @name DEFAULT_SHOW_DESCRIPTION
	 * @type {boolean}
	 */
	var DEFAULT_SHOW_DESCRIPTION = true;
	
	/**
	 * Defines account statements will be multiple select or not
	 * @name DEFAULT_MULTISELECT
	 * @type {boolean}
	 */
	var DEFAULT_MULTISELECT = false;
	
	/**
	 * Defines the default relative date to be used in the widget filter
	 * @name DEFAULT_RELATIVE_DATE
	 * @type {number}
	 */
	var DEFAULT_RELATIVE_DATE = 24;
	
	function AccountStatementsController(bus, hooks, model, widget) {
	  /**
	   * @name AccountStatementsController
	   * @ngkey AccountStatementsController
	   *
	   * @description
	   * Account statements controller.
	   *
	   * @type {Object}
	   */
	  var $ctrl = this;
	
	  /**
	   * @name AccountStatementsController#state#initialError
	   * @description
	   * When something went wrong, this variable should be filled with
	   * the return of uiError fn
	   * @type {boolean | Object}
	   */
	  var initialError = false;
	
	  /**
	   * @name AccountStatementsController#validAbsNumberPreference
	   * @description
	   * Get a number preference and returns it if it is more than 0
	   *
	   * @inner
	   * @type {Function}
	   * @param {string} key the name/key of the preference
	   * @return {number} the value
	   */
	  var validAbsNumberPreference = function validAbsNumberPreference(key) {
	    var value = widget.getLongPreference(key);
	
	    if (!value || value < 0) {
	      initialError = uiError({ code: _constants.ErrorKeys.E_PREFERENCE }, { key: key, value: value });
	    }
	
	    return value;
	  };
	
	  var pageSize = validAbsNumberPreference(_constants.Preference.PAGE_SIZE) || DEFAULT_PAGE_SIZE;
	  var maxNavPages = validAbsNumberPreference(_constants.Preference.MAX_NAV_PAGES) || DEFAULT_MAX_NAV_PAGES;
	  var dismissMessageTime = validAbsNumberPreference(_constants.Preference.DISMISS_MESSAGE_TIME) || DEFAULT_DISMISS_MESSAGE_TIME;
	  var accountsPageSize = validAbsNumberPreference(_constants.Preference.ACCOUNT_PAGE_SIZE) || DEFAULT_PAGE_SIZE;
	  var multiCategoryPreference = widget.getBooleanPreference(_constants.Preference.FILTER_MULTI_CATEGORY);
	  var multiSelectPreference = widget.getBooleanPreference(_constants.Preference.MULTISELECT);
	  var showCategoryPreference = widget.getBooleanPreference(_constants.Preference.SHOW_CATEGORIES);
	  var showDescriptionPreference = widget.getBooleanPreference(_constants.Preference.SHOW_DESCRIPTION);
	  var dateRelativePreference = widget.getLongPreference(_constants.Preference.DATE_RELATIVE) || DEFAULT_RELATIVE_DATE;
	  var dateAbsolutePreference = widget.getStringPreference(_constants.Preference.DATE_ABSOLUTE) || '';
	
	  var isMultiCategory = multiCategoryPreference !== undefined ? multiCategoryPreference : DEFAULT_MULTI_CATEGORY;
	  var isMultiSelect = multiSelectPreference !== undefined ? multiSelectPreference : DEFAULT_MULTISELECT;
	
	  var showCategory = showCategoryPreference !== undefined ? showCategoryPreference : DEFAULT_SHOW_CATEGORY;
	  var showDescription = showDescriptionPreference !== undefined ? showDescriptionPreference : DEFAULT_SHOW_DESCRIPTION;
	
	  var accountStatements = {
	    rawItems: [],
	    params: {
	      orderBy: hooks.defaultSortableColumn(),
	      direction: hooks.defaultSortableDirection(),
	      from: 0,
	      size: pageSize,
	      accountId: null,
	      category: [],
	      dateFrom: null,
	      dateTo: null
	    }
	  };
	
	  var accounts = {
	    rawItems: [],
	    params: {
	      from: 0,
	      size: accountsPageSize,
	      query: ''
	    }
	  };
	
	  var state = {
	    category: {
	      categories: [],
	      isMultiCategory: isMultiCategory
	    },
	    accounts: {
	      data: [],
	      selected: null,
	      totalItems: 0,
	      loading: false,
	      error: null
	    },
	    notifications: [],
	    accountStatements: {
	      data: [],
	      get orderBy() {
	        return accountStatements.params.orderBy;
	      },
	      get direction() {
	        return accountStatements.params.direction;
	      },
	      currentPage: 1,
	      get pageSize() {
	        return accountStatements.params.size;
	      },
	      totalItems: 0,
	      maxNavPages: maxNavPages,
	      loading: false,
	      downloading: false,
	      error: null,
	      isMultiSelect: isMultiSelect
	    },
	    initialError: initialError,
	    initialLoading: true,
	    selectedStatements: [],
	    selectAll: false,
	    indeterminate: false,
	    showCategory: showCategory,
	    showDescription: showDescription,
	    datePickerConfig: {
	      maxDate: null,
	      minDate: null
	    }
	  };
	
	  /**
	   * @name AccountStatementsController#load
	   *
	   * @description
	   * Loading available account statements
	   *
	   * @inner
	   * @type {Function}
	   * @param {Object} params The request parameters object
	   * @param {Boolean} replace Watherer or not should replace previous account statements
	   * @return {Promise.<loadResponce, module:lib-bb-model-errors.ModelError>} A Promise with
	   *   available account statements
	   */
	  var load = function load() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    var requestParams = Object.assign({}, accountStatements.params, params);
	    state.accountStatements.loading = true;
	
	    return model.load(requestParams).then(function (raw) {
	      accountStatements.rawItems = (replace ? [] : accountStatements.rawItems).concat(raw.data);
	      state.accountStatements.totalItems = raw.totalCount || 0;
	      state.accountStatements.currentPage = requestParams.from + 1;
	      state.accountStatements.data = hooks.processAccountStatements(accountStatements.rawItems);
	    }).then(function () {
	      Object.assign(accountStatements.params, requestParams);
	      state.accountStatements.loading = false;
	    }).catch(function (error) {
	      state.accountStatements.error = uiError(error);
	      state.accountStatements.loading = false;
	
	      throw error;
	    });
	  };
	
	  /**
	   * @name AccountStatementsController#load
	   *
	   * @description
	   * Get accounts.
	   *
	   * @inner
	   * @type {Function}
	   * @param {Object} params The request parameters object
	   * @param {Boolean} replace Watherer or not should replace previous accounts
	   * @return {Promise.<loadAccountsResponce, module:lib-bb-model-errors.ModelError>} A Promise with
	   *   available accounts
	   */
	  var loadAccounts = function loadAccounts() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    var requestParams = Object.assign({}, accounts.params, params);
	    state.accounts.loading = true;
	
	    return model.loadAccounts(requestParams).then(function (raw) {
	      accounts.rawItems = (replace ? [] : accounts.rawItems).concat(raw.data);
	      state.accounts.totalItems = raw.totalCount || 0;
	      state.accounts.data = hooks.processAccounts(accounts.rawItems);
	    }).then(function () {
	      Object.assign(accounts.params, requestParams);
	      state.accounts.loading = false;
	    }).catch(function (error) {
	      state.accounts.error = uiError(error);
	      state.accounts.loading = false;
	
	      throw error;
	    });
	  };
	
	  /**
	   * @name AccountStatementsController#loadCategories
	   *
	   * @description
	   * Load categories from model.
	   *
	   * @type {Function}
	   * @param {Object} params The request parameters object
	   *
	   */
	  var loadCategories = function loadCategories() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    model.getCategories(params).then(function (result) {
	      state.category.categories = result.data.categories;
	    }).catch(function (error) {
	      throw error;
	    });
	  };
	
	  /**
	   * @name AccountStatementsController#updateAccounts
	   *
	   * @description
	   * Loads accounts depending on options.
	   *
	   * @type {Function}
	   * @param {?Object} options Optional object with loading params
	   */
	  var updateAccounts = function updateAccounts() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    loadAccounts({
	      from: options.isLoadMore ? accounts.params.from + 1 : 0,
	      query: options.searchQuery || ''
	    }, !options.isLoadMore);
	  };
	
	  /**
	   * @name AccountStatementsController#onPageChange
	   *
	   * @description
	   * Change page of displayed accounts.
	   *
	   * @type {Function}
	   * @param {Object} params The request parameters object
	   * @param {Number} params.currentPage Current page number
	   */
	  var onPageChange = function onPageChange(_ref) {
	    var currentPage = _ref.currentPage;
	
	    load({ from: currentPage - 1 });
	  };
	
	  /**
	   * @name AccountStatementsController#onSort
	   *
	   * @description
	   * Loads sorted list of account statements
	   *
	   * @type {Function}
	   * @param {string} orderBy Column key to sort
	   * @param {string} direction Sort direction
	   */
	  var onSort = function onSort(orderBy, direction) {
	    load({ orderBy: orderBy, direction: direction });
	  };
	
	  /**
	   * @name AccountStatementsController#toggleStatementCheckInOut
	   *
	   * @description
	   * Functionality to checkin and checkout the statements in multiselect
	   *
	   * @param {object} stm
	   * @type {function}
	   * @returns {void}
	   */
	  var toggleStatementCheckInOut = function toggleStatementCheckInOut(stm) {
	    var id = stm.statements[0].uid;
	    var statementId = state.selectedStatements.indexOf(id);
	    var currentStatement = state.accountStatements.data.filter(function (statement) {
	      return statement.statements[0].uid;
	    });
	
	    if (statementId > -1) {
	      state.selectedStatements.splice(statementId, 1);
	      currentStatement.isChecked = false;
	    } else {
	      state.selectedStatements.push(id);
	      currentStatement.isChecked = true;
	    }
	
	    // changing the state of the select all checkbox between checked, unchecked, and indeterminate
	    if (state.selectedStatements.length === 0) {
	      state.selectAll = false;
	      state.indeterminate = false;
	    } else if (state.selectedStatements.length === state.accountStatements.data.length) {
	      state.selectAll = true;
	      state.indeterminate = false;
	    } else if (state.selectedStatements.length < state.accountStatements.data.length) {
	      state.selectAll = false;
	      state.indeterminate = true;
	    }
	  };
	
	  /**
	   * @name AccountStatementsController#toggleSelectAll
	   *
	   * @description
	   * Functionality to select all statements in the list
	   *
	   * @type {function}
	   * @returns {void}
	   */
	  var toggleSelectAll = function toggleSelectAll() {
	    var statements = state.accountStatements.data;
	    if (state.selectedStatements.length === statements.length) {
	      state.selectedStatements.splice(0, state.selectedStatements.length);
	      for (var i = 0; i < statements.length; i++) {
	        statements[i].isChecked = false;
	      }
	    } else {
	      state.selectedStatements.splice(0, state.selectedStatements.length);
	      for (var _i = 0; _i < statements.length; _i++) {
	        state.selectedStatements.push(statements[_i].statements[0].uid);
	        statements[_i].isChecked = true;
	      }
	    }
	    state.indeterminate = false;
	  };
	
	  /**
	   * @description
	   * Filter account statements.
	   *
	   * @name AccountStatementsController#onFilter
	   * @type {function}
	   * @param {Object} params Filter params
	   */
	  var onFilter = function onFilter() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    load(Object.assign({ from: 0 }, params));
	  };
	
	  /**
	   * @description
	   * Handles selection of account
	   *
	   * @name AccountStatementsController#onAccountSelect
	   * @type {Function}
	   */
	  var onAccountSelect = function onAccountSelect() {
	    onFilter({ accountId: state.accounts.selected ? state.accounts.selected.id : null });
	  };
	
	  /**
	   * @description
	   * Sets selected account
	   *
	   * @inner
	   * @name AccountStatementsController#setupSelectedAccount
	   * @returns {promise.<object>}
	   */
	  var setupSelectedAccount = function setupSelectedAccount() {
	    return loadAccounts().then(model.getSelectedAccountId).then(function (accountId) {
	      state.accounts.selected = Object.assign({}, state.accounts.data.find(function (item) {
	        return item.id === accountId;
	      }) || state.accounts.data[0]);
	    }).then(onAccountSelect).then(loadCategories);
	  };
	
	  /**
	   * @name AccountStatementsController#getDownloadUrl
	   *
	   * @description
	   * Retrive the download url from the model module.
	   *
	   * @type {Function}
	   * @param {string} uid the statement id
	   * @returns {string} the download url
	   */
	  var getDownloadUrl = function getDownloadUrl(uid) {
	    return model.getStatementUrl(uid);
	  };
	
	  /**
	   * @name AccountStatementsController#bindEvents
	   *
	   * @description
	   * Adds subscriptions to bus events
	   *
	   * @inner
	   * @type {Function}
	   */
	  var bindEvents = function bindEvents() {
	    bus.subscribe(_constants.Event.NOTIFICATION_EVENT, function (notification) {
	      state.notifications.push(notification);
	    });
	    bus.subscribe(_constants.Event.ACCOUNT_SELECTED, function (_ref2) {
	      var product = _ref2.product;
	
	      state.accounts.selected = product ? Object.assign({}, product) : null;
	      onAccountSelect();
	    });
	  };
	
	  /**
	   * @name AccountStatementsController#updateDatepickerConfig
	   *
	   * @description
	   * Updates the datePicker configuration object based on preferences set
	   *
	   * @inner
	   * @type {Function}
	   */
	  var updateDatepickerConfig = function updateDatepickerConfig() {
	    var maxDate = new Date();
	    var dateSplitRegex = /[./-]/;
	
	    var _dateAbsolutePreferen = dateAbsolutePreference.split(dateSplitRegex),
	        _dateAbsolutePreferen2 = _slicedToArray(_dateAbsolutePreferen, 3),
	        year = _dateAbsolutePreferen2[0],
	        month = _dateAbsolutePreferen2[1],
	        day = _dateAbsolutePreferen2[2];
	
	    var minDate = dateAbsolutePreference ? new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10)) : new Date(maxDate.getFullYear(), maxDate.getMonth() - dateRelativePreference, maxDate.getDate());
	    state.datePickerConfig = Object.assign(state.datePickerConfig, { minDate: minDate, maxDate: maxDate });
	  };
	
	  /**
	   * @name AccountStatementsController#$onInit
	   *
	   * @description
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @type {Function}
	   * @returns {Promise.<loadAccountsResponce, module:lib-bb-model-errors.ModelError>}
	   * A Promise with available account statements
	   */
	  var $onInit = function $onInit() {
	    updateDatepickerConfig();
	    widget.onUpdate(updateDatepickerConfig);
	    return setupSelectedAccount().then(bindEvents).then(function () {
	      bus.publish(_constants.Event.BB_ITEM_LOADED, {
	        id: widget.getId()
	      });
	    }).then(function () {
	      state.initialLoading = false;
	    }).catch(function (error) {
	      state.initialError = uiError(error);
	      state.initialLoading = false;
	    });
	  };
	
	  Object.assign($ctrl, {
	    state: state,
	    dismissMessageTime: dismissMessageTime,
	    $onInit: $onInit,
	    onSort: onSort,
	    onPageChange: onPageChange,
	    onFilter: onFilter,
	    updateAccounts: updateAccounts,
	    onAccountSelect: onAccountSelect,
	    toggleSelectAll: toggleSelectAll,
	    toggleStatementCheckInOut: toggleStatementCheckInOut,
	    getDownloadUrl: getDownloadUrl
	  });
	}
	
	/**
	 * @typedef {Object} loadResponce
	 * @property {module:data-bb-account-statements-ng.AccountStatementsData.AccountStatement[]} data
	 *   array of Account statements
	 * @property {?Number} totalCount total count of account statements if needed
	 */
	
	/**
	 * @typedef {Object} loadAccountsResponce
	 * @property {module:data-bb-product-summary-ng.ProductSummaryData.ProductsummaryItem[]} data
	 *   array of Account statements
	 * @property {?Number} totalCount total count of account statements if needed
	 */

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description
	 * Custom error keys for widget static error messages
	 *
	 * @name ErrorKeys
	 * @enum {string}
	 */
	var ErrorKeys = exports.ErrorKeys = {
	  E_PREFERENCE: 'E_PREFERENCE'
	};
	
	/**
	 * @description
	 * Widget static messages for the template
	 *
	 * @name MessageKey
	 * @enum {string}
	 */
	var MessageKey = exports.MessageKey = {
	  ERROR_AUTH: 'message.error.auth',
	  ERROR_CONNECTION: 'message.error.connection',
	  ERROR_UNEXPECTED: 'message.error.unexpected',
	  ERROR_USER: 'message.error.user',
	  ERROR_PREFERENCE: 'message.error.preference'
	};
	
	/**
	 * @description
	 * Widget events enum
	 *
	 * @name Event
	 * @enum {string}
	 */
	var Event = exports.Event = {
	  DOWNLOAD_FAIL: 'bb.event.account.statement.download.fail',
	  DOWNLOAD_SUCCESS: 'bb.event.account.statement.download.success',
	  NOTIFICATION_EVENT: 'bb.event.notifications.notify',
	  ACCOUNT_SELECTED: 'bb.event.product.selected',
	  BB_ITEM_LOADED: 'bb.item.loaded'
	};
	
	/**
	 * Widget preferences enum
	 *
	 * @name Preference
	 * @enum {string}
	 */
	var Preference = exports.Preference = {
	  PAGE_SIZE: 'bb.accountStatement.pageSize',
	  ACCOUNT_PAGE_SIZE: 'bb.accountStatement.account.pageSize',
	  MAX_NAV_PAGES: 'bb.accountStatement.maxNavPages',
	  DISMISS_MESSAGE_TIME: 'bb.accountStatement.dismissMessageTime',
	  FILTER_MULTI_CATEGORY: 'bb.accountStatement.filter.multiCategory',
	  MULTISELECT: 'bb.accountStatement.multiSelect',
	  SHOW_CATEGORIES: 'bb.accountStatement.showCategory',
	  SHOW_DESCRIPTION: 'bb.accountStatement.showDescription',
	  DATE_RELATIVE: 'bb.accountStatement.dateRelative',
	  DATE_ABSOLUTE: 'bb.accountStatement.dateAbsolute'
	};

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name DefaultHooks
	 *
	 * @description
	 * Default for widget-bb-account-statements-ng
	 *
	 * @type {Object}
	 */
	
	/**
	 * @name DefaultHooks#processAccountStatements
	 * @type {Function}
	 *
	 * @description
	 * Hook for processing account statements
	 *
	 * @param {Array} accountStatements Array of account statements to process
	 * @returns {Array} Processed account statements
	 */
	var processAccountStatements = exports.processAccountStatements = function processAccountStatements(accountStatements) {
	  return accountStatements;
	};
	
	/**
	 * @name DefaultHooks#processAccounts
	 * @type {Function}
	 *
	 * @description
	 * processSelectedAccount default hook
	 *
	 * @param {Array} accounts Array of accounts to process
	 * @returns {Array} Processed account
	 */
	var processAccounts = exports.processAccounts = function processAccounts(accounts) {
	  return accounts;
	};
	
	/**
	 * @name DefaultHooks#processSelectedAccount
	 * @type {Function}
	 *
	 * @description
	 * Hook for processing selected account.
	 *
	 * @param {module:data-bb-product-summary-http-ng.ProductSummaryData.ProductsummaryItem} account
	 *   Account to process
	 * @returns {module:data-bb-product-summary-http-ng.ProductSummaryData.ProductsummaryItem}
	 *   Processed account
	 */
	var processSelectedAccount = exports.processSelectedAccount = function processSelectedAccount(account) {
	  return account;
	};
	
	/**
	 * @name DefaultHooks#defaultSortableColumn
	 *
	 * @description
	 * defaultSortableColumn default hook
	 *
	 * @type {Function}
	 * @returns {?String} Sortable column
	 */
	var defaultSortableColumn = exports.defaultSortableColumn = function defaultSortableColumn() {
	  return null;
	};
	
	/**
	 * @name DefaultHooks#defaultSortableDirection
	 *
	 * @description
	 * defaultSortableDirection default hook
	 *
	 * @type {Function}
	 * @returns {?String}
	 */
	var defaultSortableDirection = exports.defaultSortableDirection = function defaultSortableDirection() {
	  return null;
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-account-statements-ng.js.map