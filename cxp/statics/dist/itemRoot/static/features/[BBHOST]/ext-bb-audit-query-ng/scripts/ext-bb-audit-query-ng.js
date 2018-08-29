(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("vendor-bb-angular-ng-aria"), require("ui-bb-substitute-error-ng"), require("vendor-bb-uib-datepicker"), require("vendor-bb-uib-datepicker-popup"), require("vendor-bb-uib-tooltip"), require("ui-bb-i18n-ng"), require("vendor-bb-uib-dropdown"), require("ui-bb-loading-overlay-ng"), require("ui-bb-paginator-ng"), require("ui-bb-modal-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-audit-query-ng", ["vendor-bb-angular", "vendor-bb-angular-ng-aria", "ui-bb-substitute-error-ng", "vendor-bb-uib-datepicker", "vendor-bb-uib-datepicker-popup", "vendor-bb-uib-tooltip", "ui-bb-i18n-ng", "vendor-bb-uib-dropdown", "ui-bb-loading-overlay-ng", "ui-bb-paginator-ng", "ui-bb-modal-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-audit-query-ng"] = factory(require("vendor-bb-angular"), require("vendor-bb-angular-ng-aria"), require("ui-bb-substitute-error-ng"), require("vendor-bb-uib-datepicker"), require("vendor-bb-uib-datepicker-popup"), require("vendor-bb-uib-tooltip"), require("ui-bb-i18n-ng"), require("vendor-bb-uib-dropdown"), require("ui-bb-loading-overlay-ng"), require("ui-bb-paginator-ng"), require("ui-bb-modal-ng"));
	else
		root["ext-bb-audit-query-ng"] = factory(root["vendor-bb-angular"], root["vendor-bb-angular-ng-aria"], root["ui-bb-substitute-error-ng"], root["vendor-bb-uib-datepicker"], root["vendor-bb-uib-datepicker-popup"], root["vendor-bb-uib-tooltip"], root["ui-bb-i18n-ng"], root["vendor-bb-uib-dropdown"], root["ui-bb-loading-overlay-ng"], root["ui-bb-paginator-ng"], root["ui-bb-modal-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__) {
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

	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hooks = exports.events = exports.helpers = exports.dependencyKeys = undefined;
	
	var _helpers = __webpack_require__(2);
	
	Object.defineProperty(exports, 'helpers', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_helpers).default;
	  }
	});
	
	var _events = __webpack_require__(3);
	
	Object.defineProperty(exports, 'events', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_events).default;
	  }
	});
	
	var _hooks = __webpack_require__(4);
	
	Object.defineProperty(exports, 'hooks', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_hooks).default;
	  }
	});
	
	var _vendorBbAngularNgAria = __webpack_require__(6);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(7);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _vendorBbUibDatepicker = __webpack_require__(8);
	
	var _vendorBbUibDatepicker2 = _interopRequireDefault(_vendorBbUibDatepicker);
	
	var _vendorBbUibDatepickerPopup = __webpack_require__(9);
	
	var _vendorBbUibDatepickerPopup2 = _interopRequireDefault(_vendorBbUibDatepickerPopup);
	
	var _vendorBbUibTooltip = __webpack_require__(10);
	
	var _vendorBbUibTooltip2 = _interopRequireDefault(_vendorBbUibTooltip);
	
	var _uiBbI18nNg = __webpack_require__(11);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _vendorBbUibDropdown = __webpack_require__(12);
	
	var _vendorBbUibDropdown2 = _interopRequireDefault(_vendorBbUibDropdown);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(13);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBbPaginatorNg = __webpack_require__(14);
	
	var _uiBbPaginatorNg2 = _interopRequireDefault(_uiBbPaginatorNg);
	
	var _uiBbModalNg = __webpack_require__(15);
	
	var _uiBbModalNg2 = _interopRequireDefault(_uiBbModalNg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bb-audit-query-ng
	 *
	 * @description
	 * Default extension for widget-bb-audit-query-ng
	 *
	 * @requires vendor-bb-angular-ng-aria
	 * @extends module:widget-bb-audit-query-ng.Extension
	 */
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbI18nNg2.default, _uiBbSubstituteErrorNg2.default, _vendorBbUibDatepicker2.default, _vendorBbUibDatepickerPopup2.default, _vendorBbUibTooltip2.default, _vendorBbUibDropdown2.default, _uiBbLoadingOverlayNg2.default, _uiBbPaginatorNg2.default, _uiBbModalNg2.default];
	
	/**
	 * @name helpers
	 * @type {module:lib-bb-extension-helpers-ng.ExtensionHelpers}
	 */

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.clearAllControls = clearAllControls;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var templates = {
	  form: '#widget-bb-audit-query-ng/form.html',
	  table: '#widget-bb-audit-query-ng/table.html'
	};
	
	var clearModelValue = function clearModelValue(_ref) {
	  var model = _ref.model;
	
	  if (model) {
	    Object.assign(model, { value: '' });
	  }
	};
	
	var clearModelValues = function clearModelValues() {
	  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
	    values[_key] = arguments[_key];
	  }
	
	  values.forEach(function (value) {
	    return clearModelValue(value);
	  });
	};
	
	/**
	 * @name clearAllControls
	 * @type {function}
	 * @description clear all models in the controlState
	 * @param {ViewState} controlState The current cloned state of the controls
	 * @return {ViewState} The updated control state
	 */
	function clearAllControls(controlState) {
	  var cs = controlState;
	  cs.startDatepicker.model = cs.endDatepicker.model = null;
	  cs.user.model = null;
	  clearModelValues(cs.dropdownServiceAgreement, cs.dropdownLegalEntity, cs.dropdownCategory, cs.dropdownType, cs.dropdownStatus);
	  return cs;
	}
	
	/**
	 * @constructor Helpers
	 * @param {Object} obj - An object.
	 * @param {AuditQueryService} obj.auditQueryService
	 * @param {AuditFiltersService} obj.auditFiltersService
	 * @param {Object} obj.$filter - Angular filters
	 * @param {Router} obj.router
	 */
	function Helpers(_ref2) {
	  var auditQueryService = _ref2.auditQueryService,
	      auditFiltersService = _ref2.auditFiltersService,
	      $filter = _ref2.$filter,
	      router = _ref2.router;
	
	  var modelValue = function modelValue(_ref3) {
	    var model = _ref3.model;
	    return model && model.value && model.value.length;
	  };
	
	  // set for state for control
	  var set = function set(controlState, controlId, propertyId, newValue) {
	    var control = controlState[controlId];
	    control[propertyId] = newValue;
	  };
	
	  var openDatePicker = function openDatePicker(current, datepickerId) {
	    return set(current, datepickerId, 'isOpen', true);
	  };
	
	  var toDisplayObj = function toDisplayObj(name, value) {
	    return { name: name, value: value };
	  };
	
	  var toOptions = function toOptions(labelKey) {
	    var rawOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	
	    var allOption = toDisplayObj($filter('i18n')(labelKey), '');
	    var otherOptions = rawOptions.map(function (opt) {
	      return toDisplayObj(opt, opt);
	    });
	    return [allOption].concat(_toConsumableArray(otherOptions));
	  };
	
	  /**
	   * @name Helpers#auditMessageTableHeader
	   * @inner
	   * @type {string[]}
	   * @description list of header label translation keys for audit log table
	  */
	  var auditMessageTableHeader = ['table.header.user', 'table.header.category', 'table.header.type', 'table.header.action', 'table.header.time', 'table.header.description'];
	
	  /**
	   * @name Helpers#auditMessageTableRow
	   * @inner
	   * @type {function}
	   * @description get list of message values for audit log table
	   * @param {Object} auditLog The audit log message for the current row in the table
	   * @return {string[]}
	   */
	  var auditMessageTableRow = function auditMessageTableRow(_ref4) {
	    var user = _ref4.user,
	        category = _ref4.category,
	        type = _ref4.type,
	        action = _ref4.action,
	        time = _ref4.time,
	        description = _ref4.description;
	    return [user, category, type, action, $filter('date')(time, 'medium'), // todo establish required date/time format
	    description];
	  };
	
	  /**
	   * @name Helpers#auditDetail
	   * @inner
	   * @type {function}
	   * @description get labels and values for event details
	   * @param {Object} message The audit log message for the current row in the table
	   * @return {Object[]}
	   */
	  var auditDetail = function auditDetail(message) {
	    var fixedLabels = auditMessageTableHeader.map(function (label) {
	      return $filter('i18n')(label);
	    });
	    var fixedValues = auditMessageTableRow(message);
	    var eventLabels = message.data ? message.data.map(function (event) {
	      return event.key;
	    }) : [];
	    var eventValues = message.data ? message.data.map(function (event) {
	      return event.value;
	    }) : [];
	    var allLabels = fixedLabels.concat(eventLabels);
	    var allValues = fixedValues.concat(eventValues);
	
	    return allLabels.map(function (label, index) {
	      return { label: label, value: allValues[index] };
	    });
	  };
	
	  /**
	   * @name Helpers#setAuditDetail
	   * @inner
	   * @type {function}
	   * @description set the indexed message details (if any) into state
	   * @param {ViewState} state The current state of the view model
	   * @param {Number} index The index of the message to be displayed
	   */
	  var setAuditDetail = function setAuditDetail(state, index) {
	    var message = state.auditMessages[index];
	    if (message) {
	      Object.assign(state, {
	        currentMessageDetails: auditDetail(message),
	        currentMessageIndex: index
	      });
	    }
	  };
	
	  /**
	   * @name Helpers
	   * @type {Object}
	   */
	  return {
	    /**
	     * @name Helpers#openStartDatepicker
	     * @type {function}
	     * @description update controller state to trigger opening the start-date datepicker
	     * @param {ViewState} controlState The current cloned state of the view model
	     * @return {void}
	     */
	    openStartDatepicker: function openStartDatepicker(controlState) {
	      return openDatePicker(controlState, 'startDatepicker');
	    },
	    /**
	     * @name Helpers#openEndDatepicker
	     * @type {function}
	     * @description update controller state to trigger opening the end-date datepicker
	     * @param {ViewState} controlState The current cloned state of the view model
	     * @return {void}
	     */
	    openEndDatepicker: function openEndDatepicker(controlState) {
	      return openDatePicker(controlState, 'endDatepicker');
	    },
	    /**
	     * @name Helpers#clearAll
	     * @type {function}
	     * @description update controller state to clear all models
	     * @param {ViewState} controlState The current cloned state of the view model
	     * @return {void}
	     */
	    clearAll: function clearAll(controlState) {
	      clearAllControls(controlState);
	    },
	    /**
	     * @name Helpers#clearModelValues
	     * @type {function}
	     * @description clear the values in the models
	     * @param {Object[]} values the values whose models to clear
	     * @return {void}
	     */
	    clearModelValues: clearModelValues,
	    /**
	     * @name Helpers#isAnyControlSet
	     * @type {function}
	     * @description return true if any control has a state
	     * @param {ViewState} controlState The current cloned state of the view model
	     * @return {boolean}
	     */
	    isAnyControlSet: function isAnyControlSet(controlState) {
	      return controlState.startDatepicker.model || controlState.endDatepicker.model || controlState.user.model || modelValue(controlState.dropdownServiceAgreement) || modelValue(controlState.dropdownLegalEntity) || modelValue(controlState.dropdownCategory) || modelValue(controlState.dropdownType) || modelValue(controlState.dropdownStatus);
	    },
	    /**
	     * @name Helpers#exportToCsv
	     * @type {function}
	     * @description query for audit messages and download the CSV format file
	     * @param {ViewState} controlState The current cloned state of the view model
	     * @return {void}
	     */
	    exportToCsv: function exportToCsv(controlState) {
	      var headerParams = { accept: 'text/csv' };
	      auditQueryService.queryForAuditLogMessagesDownload(controlState, headerParams);
	    },
	    /**
	     * @name Helpers#categories
	     * @type {function}
	     * @description get categories
	     * @param {module:lib-bb-state-container-ng.StateContainer} state
	     * @param {module:model-bb-audit-filters-service-ng.ParsedEventCategories} state.eventCategories
	     * @return {string[]} categories
	     */
	    categories: function categories(_ref5) {
	      var eventCategories = _ref5.eventCategories;
	      return toOptions('dropdown.placeholder.category', eventCategories ? auditFiltersService.getCategoryNames(eventCategories) : []);
	    },
	
	    /**
	     * @name Helpers#categories
	     * @type {function}
	     * @description get types
	     * @param {module:lib-bb-state-container-ng.StateContainer} state
	     * @param {module:model-bb-audit-filters-service-ng.ParsedEventCategories} state.eventCategories
	     * @param {ViewState} controlState The current cloned state of the view model
	     * @return {string[]} types
	     */
	    types: function types(_ref6, controlState) {
	      var eventCategories = _ref6.eventCategories;
	
	      var selectedCategory = controlState.dropdownCategory.model ? controlState.dropdownCategory.model.value : '';
	
	      return toOptions('dropdown.placeholder.type', selectedCategory.length ? auditFiltersService.getTypeNames(eventCategories, selectedCategory) : []);
	    },
	    /**
	     * @name Helpers#status
	     * @type {function}
	     * @description get status
	     * @param {module:lib-bb-state-container-ng.StateContainer} state
	     * @param {module:model-bb-audit-filters-service-ng.ParsedEventCategories} state.eventCategories
	     * @param {ViewState} controlState The current cloned state of the view model
	     * @return {string[]} status
	     */
	    status: function status(_ref7, controlState) {
	      var eventCategories = _ref7.eventCategories;
	
	      var selectedCategory = controlState.dropdownCategory.model ? controlState.dropdownCategory.model.value : '';
	      var selectedType = controlState.dropdownType.model ? controlState.dropdownType.model.value : '';
	
	      return toOptions('dropdown.placeholder.status', selectedType.length ? auditFiltersService.getStatusNames(eventCategories, selectedCategory, selectedType) : []);
	    },
	    /**
	     * @name Helpers#users
	     * @type {function}
	     * @description get users
	     * @return {Array<{name, value}>} users
	     */
	    users: function users() {
	      return toOptions('dropdown.users.all-users', auditQueryService.users());
	    },
	    /**
	     * @name Helpers#serviceAgreements
	     * @type {function}
	     * @description get serviceAgreements
	     * @param {ViewState} viewState the current view state
	     * @param {Array} viewState.serviceAgreements list of service agreements
	     *
	     * @return {Array<{name, value}>} serviceAgreements
	     */
	    serviceAgreements: function serviceAgreements(_ref8) {
	      var _serviceAgreements = _ref8.serviceAgreements;
	      return toOptions('dropdown.service-agreement.all-service-agreements', _serviceAgreements);
	    },
	    /**
	     * @name Helpers#legalEntities
	     * @type {function}
	     * @description get legalEntities
	     * @param {ViewState} viewState the current view state
	     * @param {Array} viewState.serviceAgreements list of service agreements
	     * @return {Array<{name, value}>} legalEntities
	     */
	    legalEntities: function legalEntities(_ref9) {
	      var _legalEntities = _ref9.legalEntities;
	      return toOptions('dropdown.legal-entity.all-legal-entities', _legalEntities);
	    },
	    /**
	     * @name Helpers#auditMessageTableHeader
	     * @type {string[]}
	     * @description list of header label translation keys for audit log table
	     */
	    auditMessageTableHeader: auditMessageTableHeader,
	    /**
	     * @name Helpers#auditMessageTableRow
	     * @type {function}
	     * @description get list of message values for audit log table
	     * @param {Object} auditLog The audit log message for the current row in the table
	     * @return {string[]}
	     */
	    auditMessageTableRow: auditMessageTableRow,
	    /**
	     * @name Helpers#isTypeDisabled
	     * @type {function}
	     * @description return true if type dropdown should be disabled
	     * @param {ViewState} controlState The current cloned state of the view model
	     * @return {boolean}
	     */
	    isTypeDisabled: function isTypeDisabled(controlState) {
	      return controlState.dropdownType.disabled || !modelValue(controlState.dropdownCategory);
	    },
	    /**
	     * @name Helpers#isStatusDisabled
	     * @type {function}
	     * @description return true if status dropdown should be disabled
	     * @param {ViewState} controlState The current cloned state of the view model
	     * @return {boolean}
	     */
	    isStatusDisabled: function isStatusDisabled(controlState) {
	      return controlState.dropdownStatus.disabled || !modelValue(controlState.dropdownCategory) || !modelValue(controlState.dropdownType);
	    },
	    /**
	     * @name Helpers#isLegalEntityDisabled
	     * @type {function}
	     * @description return true if legal entity dropdown should be disabled
	     * @param {ViewState} controlState The current cloned state of the view model
	     * @return {boolean}
	     */
	    isLegalEntityDisabled: function isLegalEntityDisabled(controlState) {
	      return controlState.dropdownLegalEntity.disabled || !modelValue(controlState.dropdownServiceAgreement);
	    },
	    /**
	     * @name Helpers#serviceAgreementChanged
	     * @type {function}
	     * @description clear dependent legal entity dropdown when service agreement changes
	     * @param {ViewState} controlState The current cloned state of the view model
	     * @return {boolean}
	     */
	    serviceAgreementChanged: function serviceAgreementChanged(controlState) {
	      return clearModelValue(controlState.dropdownLegalEntity);
	    },
	    /**
	     * @name Helpers#isExportToCsvDisabled
	     * @type {function}
	     * @description return whether the export to csv is disabled
	     * @param {ViewState} viewState the current view state
	     * @param {Number} viewState.totalCount total amount of audit results
	     * @param {Number} viewState.csvMaxSize max exportable CSV size
	     * @return {boolean}
	     */
	    isExportToCsvDisabled: function isExportToCsvDisabled(_ref10) {
	      var totalCount = _ref10.totalCount,
	          csvMaxSize = _ref10.csvMaxSize;
	      return totalCount > csvMaxSize;
	    },
	    /**
	     * @name Helpers#csvExportState
	     * @type {function}
	     * @description returns i18n string depending on export to csv loading state
	     * @return {string}
	     */
	    csvExportBtnText: function csvExportBtnText(csvIsLoading) {
	      return csvIsLoading ? 'button.label.export-to-csv-loading' : 'button.label.export-to-csv';
	    },
	    /**
	     * @name Helpers#template
	     * @type {function}
	     * @description returns a string of the template matching the current route
	     * @return {string}
	     */
	    template: function template() {
	      return templates[router.getRoute()];
	    },
	    /**
	     * @name Helpers#auditDetail
	     * @type {function}
	     * @description get labels and values for event details
	     * @param {Object} message The audit log message for the current row in the table
	     * @return {Object[]}
	     */
	    auditDetail: auditDetail,
	    /**
	     * @name Helpers#toggleAuditDetailModal
	     * @type {function}
	     * @description toggle state of event details modal.
	     *  Update state with current message and current index
	     * @param {ViewState} state The current state of the view model
	     * @param {Object} message The audit log message for the current row in the table
	     * @param {Number} index The index of the current message
	     */
	    toggleAuditDetailModal: function toggleAuditDetailModal(state, message, index) {
	      return Object.assign(state, {
	        showAuditDetailModal: !state.showAuditDetailModal,
	        currentMessageDetails: message ? auditDetail(message) : undefined,
	        currentMessageIndex: index
	      });
	    },
	    /**
	     * @name Helpers#setNextAuditDetail
	     * @type {function}
	     * @description set the next message details (if any) into state
	     * @param {ViewState} state The current state of the view model
	     */
	    setNextAuditDetail: function setNextAuditDetail(state) {
	      var nextIndex = state.currentMessageIndex + 1;
	      setAuditDetail(state, nextIndex);
	    },
	
	
	    /**
	     * @name Helpers#setPreviousAuditDetail
	     * @type {function}
	     * @description set the previous message details (if any) into state
	     * @param {ViewState} state The current state of the view model
	     */
	    setPreviousAuditDetail: function setPreviousAuditDetail(state) {
	      var previousIndex = state.currentMessageIndex - 1;
	      setAuditDetail(state, previousIndex);
	    },
	
	
	    /**
	     * @name Helpers#isDisabledPreviousAuditDetail
	     * @type {function}
	     * @description return true if no previous message
	     * @param {ViewState} state The current state of the view model
	     */
	    isDisabledPreviousAuditDetail: function isDisabledPreviousAuditDetail(state) {
	      var previousIndex = state.currentMessageIndex - 1;
	      return !state.auditMessages[previousIndex];
	    },
	
	
	    /**
	     * @name Helpers#isDisabledNextAuditDetail
	     * @type {function}
	     * @description return true if no next message
	     * @param {ViewState} state The current state of the view model
	     */
	    isDisabledNextAuditDetail: function isDisabledNextAuditDetail(state) {
	      var nextIndex = state.currentMessageIndex + 1;
	      return !state.auditMessages[nextIndex];
	    }
	  };
	}
	exports.default = Helpers;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @constructor Events
	 * @param {Object} obj - An object.
	 * @param {notifications} obj.notifications
	 * @param {notifications} obj.$filter
	 */
	exports.default = function (_ref) {
	  var notifications = _ref.notifications,
	      $filter = _ref.$filter;
	  return {
	    'model-bb-audit-query.query.failed': function modelBbAuditQueryQueryFailed() {
	      notifications.notifyAlert($filter('i18n')('notification.query.failed'));
	    }
	  };
	};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.controlState = undefined;
	
	var _vendorBbAngular = __webpack_require__(5);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _helpers = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultDpOptions = {
	  dateDisabled: false,
	  formatYear: 'yy',
	  maxDate: new Date(Date.now()),
	  startingDay: 1,
	  datepickerMode: 'day'
	};
	
	var formats = ['dd/MM/yyyy', 'dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	
	var format = formats[0];
	var altInputFormat = 'M!/d!/yyyy';
	
	// export to test
	var controlState = exports.controlState = {
	  startDatepicker: {
	    format: format,
	    options: defaultDpOptions,
	    isOpen: false,
	    model: null,
	    altFormats: [altInputFormat]
	  },
	  endDatepicker: {
	    format: format,
	    options: defaultDpOptions,
	    isOpen: false,
	    model: null,
	    altFormats: [altInputFormat]
	  },
	  dropdownServiceAgreement: {
	    model: null,
	    disabled: false
	  },
	  dropdownLegalEntity: {
	    model: null,
	    disabled: false
	  },
	  user: {
	    model: null,
	    disabled: false
	  },
	  dropdownCategory: {
	    model: null,
	    disabled: false
	  },
	  dropdownType: {
	    model: null,
	    disabled: false
	  },
	  dropdownStatus: {
	    model: null,
	    disabled: false
	  },
	  currentPage: 1
	};
	
	/**
	 * @constructor Hooks
	 */
	exports.default = {
	  /**
	   * @name Hooks#transformAuditMessage
	   * @type {function}
	   * @description Perform any transformations required to prepare the AuditMessage item for display
	   * @param {module:model-bb-audit-query-ng.AuditMessage} auditMessage
	   * @return {Object} transformed message
	   */
	  transformAuditMessage: function transformAuditMessage(_ref) {
	    var username = _ref.username,
	        eventCategory = _ref.eventCategory,
	        objectType = _ref.objectType,
	        eventAction = _ref.eventAction,
	        timestamp = _ref.timestamp,
	        eventDescription = _ref.eventDescription,
	        eventData = _ref.eventData;
	    return {
	      user: username,
	      category: eventCategory,
	      type: objectType,
	      action: eventAction,
	      time: timestamp,
	      description: eventDescription,
	      data: eventData
	    };
	  },
	
	  // This may not be the correct architecture approach to
	  // decoupling widget and extension state. Update when correct
	  // approach is clear.
	
	  /**
	   * @name Hooks#setState
	   * @type {function}
	   * @description add any state required by extension
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  setState: function setState(current) {
	    return Object.assign({}, current, {
	      controlState: controlState
	    });
	  },
	
	
	  /**
	   * @name Hooks#newQuery
	   * @type {function}
	   * @description extension specific changes to state
	   * @param {ViewState} current The current state of the view model
	   * @param {Boolean} [clear] Option to clear the form values to initial state
	   * @return {ViewState} The new state of the view model
	   */
	  newQuery: function newQuery(current, clear) {
	    var newControlState = clear ? (0, _helpers.clearAllControls)(_vendorBbAngular2.default.copy(current.controlState)) : current.controlState;
	
	    return Object.assign({}, current, {
	      controlState: newControlState
	    });
	  }
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-audit-query-ng.js.map