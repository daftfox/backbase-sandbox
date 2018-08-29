(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("model-bb-audit-query-ng"), require("lib-bb-extension-helpers-ng"), require("lib-bb-extension-intents-ng"), require("lib-bb-intent-ng"), require("lib-bb-state-container-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-audit-query-ng", ["vendor-bb-angular", "lib-bb-model-errors", "lib-bb-widget-ng", "lib-bb-event-bus-ng", "lib-bb-widget-extension-ng", "model-bb-audit-query-ng", "lib-bb-extension-helpers-ng", "lib-bb-extension-intents-ng", "lib-bb-intent-ng", "lib-bb-state-container-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-audit-query-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("model-bb-audit-query-ng"), require("lib-bb-extension-helpers-ng"), require("lib-bb-extension-intents-ng"), require("lib-bb-intent-ng"), require("lib-bb-state-container-ng"));
	else
		root["widget-bb-audit-query-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-model-errors"], root["lib-bb-widget-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-widget-extension-ng"], root["model-bb-audit-query-ng"], root["lib-bb-extension-helpers-ng"], root["lib-bb-extension-intents-ng"], root["lib-bb-intent-ng"], root["lib-bb-state-container-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_28__) {
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

	module.exports = __webpack_require__(20);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
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
/* 19 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(5);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(21);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(22);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbWidgetExtensionNg = __webpack_require__(23);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _modelBbAuditQueryNg = __webpack_require__(24);
	
	var _modelBbAuditQueryNg2 = _interopRequireDefault(_modelBbAuditQueryNg);
	
	var _libBbExtensionHelpersNg = __webpack_require__(25);
	
	var _libBbExtensionHelpersNg2 = _interopRequireDefault(_libBbExtensionHelpersNg);
	
	var _libBbExtensionIntentsNg = __webpack_require__(26);
	
	var _libBbExtensionIntentsNg2 = _interopRequireDefault(_libBbExtensionIntentsNg);
	
	var _libBbIntentNg = __webpack_require__(27);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbStateContainerNg = __webpack_require__(28);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _downloadCsvService = __webpack_require__(29);
	
	var _downloadCsvService2 = _interopRequireDefault(_downloadCsvService);
	
	var _auditQueryService = __webpack_require__(31);
	
	var _auditQueryService2 = _interopRequireDefault(_auditQueryService);
	
	var _auditFiltersService = __webpack_require__(32);
	
	var _auditFiltersService2 = _interopRequireDefault(_auditFiltersService);
	
	var _index = __webpack_require__(33);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _auditQuery = __webpack_require__(37);
	
	var _auditQuery2 = _interopRequireDefault(_auditQuery);
	
	var _form = __webpack_require__(38);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _table = __webpack_require__(39);
	
	var _table2 = _interopRequireDefault(_table);
	
	var _router = __webpack_require__(40);
	
	var _router2 = _interopRequireDefault(_router);
	
	var _defaultHooks = __webpack_require__(41);
	
	var _defaultHooks2 = _interopRequireDefault(_defaultHooks);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bb-audit-query-ng
	 *
	 * @description
	 * Audit query
	 */
	var moduleKey = 'widget-bb-audit-query-ng';
	var hooksKey = moduleKey + ':hooks';
	var downloadCsvServiceKey = moduleKey + ':download-csv-service';
	var auditQueryServiceKey = moduleKey + ':service';
	var auditFiltersServiceKey = moduleKey + ':audit-filters-service';
	var viewModelKey = moduleKey + ':view-model';
	var routerKey = moduleKey + ':router';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbWidgetNg2.default, _libBbEventBusNg2.default, _modelBbAuditQueryNg2.default, _libBbStateContainerNg2.default, _libBbExtensionHelpersNg2.default, _libBbExtensionIntentsNg2.default, _libBbIntentNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(_defaultHooks2.default)).factory(downloadCsvServiceKey, ['$window',
	/* into */
	_downloadCsvService2.default]).factory(auditFiltersServiceKey, [viewModelKey, _modelBbAuditQueryNg.modelAuditQueryKey,
	/* into */
	_auditFiltersService2.default]).factory(auditQueryServiceKey, [_modelBbAuditQueryNg.modelAuditQueryKey, viewModelKey, _libBbWidgetNg.widgetKey, downloadCsvServiceKey,
	/* into */
	_auditQueryService2.default]).factory(routerKey, [_libBbStateContainerNg.bbStateContainerKey,
	/* into */
	_router2.default]).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey, hooksKey,
	/* into */
	_index2.default])
	
	// Add `auditQueryModel` and `auditQueryService` to the `context` provided to the
	// extension `helpers` key
	.factory(_libBbExtensionHelpersNg.extensionHelpersContextKey, [_modelBbAuditQueryNg.modelAuditQueryKey, auditQueryServiceKey, auditFiltersServiceKey, viewModelKey, routerKey, _libBbIntentNg.bbIntentKey,
	/* into */
	function (auditQueryModel, auditQueryService, auditFiltersService, auditQueryViewModel, router, bbIntent) {
	  return {
	    auditQueryModel: auditQueryModel,
	    auditQueryService: auditQueryService,
	    auditFiltersService: auditFiltersService,
	    auditQueryViewModel: auditQueryViewModel,
	    router: router,
	    bbIntent: bbIntent
	  };
	}])
	
	// Add `auditQueryModel` and `auditQueryService` to the `context` provided to the
	// extension `intents` key
	.factory(_libBbExtensionIntentsNg.extensionIntentsContextKey, [_modelBbAuditQueryNg.modelAuditQueryKey, auditQueryServiceKey,
	/* into */
	function (auditQueryModel, auditQueryService) {
	  return {
	    auditQueryModel: auditQueryModel,
	    auditQueryService: auditQueryService
	  };
	}]).controller('AuditQueryController', [
	// dependencies to inject
	_libBbEventBusNg.eventBusKey, routerKey, _libBbWidgetNg.widgetKey, auditFiltersServiceKey, _libBbStateContainerNg.bbStateContainerKey, _libBbIntentNg.bbIntentKey,
	/* into */
	_auditQuery2.default]).controller('FormController', [
	// dependencies to inject
	_libBbStateContainerNg.bbStateContainerKey, routerKey, viewModelKey,
	/* into */
	_form2.default]).controller('TableController', [
	// dependencies to inject
	_libBbStateContainerNg.bbStateContainerKey, routerKey, auditQueryServiceKey,
	/* into */
	_table2.default]).run([viewModelKey, function (viewModel) {
	  viewModel.init();
	}]).name;
	
	/**
	 * @typedef HelperContext
	 * @type {object}
	 * @extends module:lib-bb-extension-helpers-ng.HelperContext
	 * @property {module:model-bb-audit-query-ng.AuditQueryModel} auditQueryModel
	 * @property {AuditQueryService} auditQueryService
	 */
	
	/**
	 * @typedef IntentContext
	 * @type {object}
	 * @extends module:lib-bb-extension-intents-ng.IntentContext
	 * @property {module:model-bb-audit-query-ng.AuditQueryModel} auditQueryModel
	 * @property {AuditQueryService} auditQueryService
	 */
	
	/**
	 * @typedef EventContext
	 * @type {object}
	 * @extends module:lib-bb-extension-events-ng.EventContext
	 */

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = DownloadCsvService;
	
	var _constants = __webpack_require__(30);
	
	/**
	 *
	 * The purpose of this module is to provide a method of downloading
	 * a CSV file cross browser with content and a file name
	 *
	 * @constructor DownloadCsvService
	 *
	 * @description The download file functionality for CSV export
	 */
	function DownloadCsvService($window) {
	  var click = function click(node) {
	    // required for non-Chrome browsers to trigger click
	    // where the element that isn't added to the DOM
	    var event = new $window.MouseEvent('click');
	    node.dispatchEvent(event);
	  };
	
	  var getFileNameFromContentDisposition = function getFileNameFromContentDisposition(disposition) {
	    var fileName = _constants.csvExportDefaults.defaultDownloadFileName;
	    if (disposition && disposition.indexOf('attachment') !== -1) {
	      // example string - 'attachment; filename=audit-log_20170901-20171001.csv'
	      // gets the name part of the string for the above - audit-log_20170901-20171001.csv
	      // starting at any character that is not = ; or new line
	      // ending at .csv
	      var filenameRegex = /filename[^;=\n]*=(.*csv*)/;
	      var matches = filenameRegex.exec(disposition);
	
	      var _ref = matches || [],
	          _ref2 = _slicedToArray(_ref, 2),
	          matchedName = _ref2[1];
	
	      fileName = matchedName ? matchedName.replace(/['"]/g, '') : fileName;
	    }
	    return fileName;
	  };
	
	  return {
	    /**
	     *
	     * @name DownloadCsvService#getFileNameFromContentDisposition
	     * @param {string} disposition disposition string from the request header
	     * @type {function}
	     * @return {string} the file name that should be used on the download file
	     *
	     * @description Return a freindly name from the disposition header
	     */
	    getFileNameFromContentDisposition: getFileNameFromContentDisposition,
	
	    /**
	     *
	     * @name AuditQueryService#downloadFile
	     * @param {string} data CSV result data
	     * @param {string} fileName name of the file that will be downloaded
	     * @type {function}
	     *
	     * @description Download file on the user's machine
	     */
	    downloadFile: function downloadFile(data, headers) {
	      var fileName = getFileNameFromContentDisposition(headers('content-disposition'));
	
	      var blob = new $window.Blob([data], { type: 'text/csv' });
	
	      if ($window.navigator.msSaveBlob) {
	        // IE fix
	        $window.navigator.msSaveBlob(blob, fileName);
	      } else {
	        // Safari and all other browsers
	        var url = $window.URL.createObjectURL(blob);
	        var anchor = $window.document.createElement('a');
	        anchor.href = url;
	        anchor.download = fileName;
	        click(anchor);
	        $window.URL.revokeObjectURL(url);
	      }
	    }
	  };
	}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description
	 * Default values for the pager if not set on the widget
	 *
	 * @name pagerDefaults
	 * @type {object}
	 */
	var pagerDefaults = exports.pagerDefaults = {
	  resultsPerPage: 25,
	  maxNavPages: 3
	};
	
	/**
	 * @description
	 * Default values for csv export
	 *
	 * @name csvExportDefaults
	 * @type {object}
	 */
	var csvExportDefaults = exports.csvExportDefaults = {
	  csvMaxSize: 1000000,
	  defaultDownloadFileName: 'audit_log.csv'
	};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = AuditQueryService;
	/**
	 *
	 * The purpose of this module is to provide the main structure of the
	 * Audit query widget. Outlining the workflows, connecting the data from the
	 * model to the view via the customizations provided by the extension.
	 *
	 * @constructor AuditQueryService
	 * @param {AuditQueryModel} model
	 * @param {object} viewModel
	 * @param {List} viewModel.list
	 * @param {Widget} widget
	 * @param {DownloadCsvService} downloadCsvService
	 *
	 * @description The core functionality of the Audit query widget
	 */
	function AuditQueryService(model, _ref, widget, downloadCsvService) {
	  var list = _ref.list;
	
	  // take entered date and represent as string YYYY-MM-dd
	  // this is more intentional than timezone offset method
	  var normalizeDate = function normalizeDate(date) {
	    if (date) {
	      var day = date.getDate();
	      var month = date.getMonth();
	      var year = date.getFullYear();
	      var utcDate = new Date(Date.UTC(year, month, day));
	      return utcDate.toISOString().substr(0, 10);
	    }
	    return null;
	  };
	
	  // For the moment we only support single select dropdown so map single value into array
	  var arrayFromModelValue = function arrayFromModelValue(_ref2) {
	    var modelObj = _ref2.model;
	    return modelObj && modelObj.value ? [modelObj.value] : [];
	  };
	
	  var valueFromModel = function valueFromModel(_ref3) {
	    var modelObj = _ref3.model;
	    return modelObj && modelObj.value ? modelObj.value : '';
	  };
	
	  // if dropdownUsers contains values set from those, otherwise set from user
	  var getUsernames = function getUsernames(_ref4) {
	    var dropdownUsers = _ref4.dropdownUsers,
	        user = _ref4.user;
	
	    if (dropdownUsers && dropdownUsers.model && dropdownUsers.model.value) {
	      return [dropdownUsers.model.value];
	    }
	    return user && user.model ? [user.model] : [];
	  };
	
	  var modelValue = function modelValue(_ref5) {
	    var modelObj = _ref5.model;
	    return modelObj && modelObj.value;
	  };
	
	  // populate parms for query with data from controls and pagination
	  var stateDataToParams = function stateDataToParams(_ref6, currentPage, size) {
	    var controlState = _ref6.controlState;
	    return {
	      startDate: normalizeDate(controlState.startDatepicker.model),
	      endDate: normalizeDate(controlState.endDatepicker.model),
	      // for the moment we only support single select dropdown
	      eventCategories: arrayFromModelValue(controlState.dropdownCategory),
	      objectType: valueFromModel(controlState.dropdownType),
	      eventAction: valueFromModel(controlState.dropdownStatus),
	      usernames: getUsernames(controlState),
	      serviceAgreementId: modelValue(controlState.dropdownServiceAgreement),
	      legalEntityIds: arrayFromModelValue(controlState.dropdownLegalEntity),
	      // the pages passed from the bootstrap pager start count at 1 instead of 0
	      from: currentPage - 1,
	      size: size
	    };
	  };
	
	  /**
	   * @name AuditQueryService
	   * @type {Object}
	   */
	  return {
	
	    /**
	     *
	     * @name AuditQueryService#queryForAuditLogMessages
	     * @param {ViewState} state The current control state
	     * @param {number} [currentPage] Current bootstrap page - index starts at 1
	     * @type {function}
	     * @return {Promise<void>}
	     *
	     * @description Update the view with an list of items loaded from the data source
	     */
	    queryForAuditLogMessages: function queryForAuditLogMessages(state) {
	      var currentPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	
	      list.beforeQueryForAuditLogMessages(currentPage);
	      var params = stateDataToParams(state, currentPage, state.resultsPerPage);
	      return model.getAuditLogMessages(params).then(function (_ref7) {
	        var data = _ref7.data,
	            headers = _ref7.headers;
	
	        var totalCountHeader = headers('x-total-count');
	        var totalCount = totalCountHeader ? parseInt(totalCountHeader, 10) : 0;
	        list.afterQueryForAuditLogMessagesSuccess({
	          auditMessages: data.auditMessages,
	          totalCount: totalCount
	        });
	      }).catch(list.afterQueryForAuditLogMessagesError);
	    },
	    /**
	     *
	     * @name AuditQueryService#queryForAuditLogMessagesDownload
	     * @param {ViewState} state The current control state
	     * @param {Object} headerParams Params sent in the header of the request
	     * @type {function}
	     * @return {Promise<void>}
	     *
	     * @description Update the browser with a file to download
	     */
	    queryForAuditLogMessagesDownload: function queryForAuditLogMessagesDownload(state, headerParams) {
	      list.beforeQueryForCSV();
	      var params = stateDataToParams(state);
	      return model.getAuditLogMessages(params, headerParams).then(function (_ref8) {
	        var data = _ref8.data,
	            headers = _ref8.headers;
	
	        downloadCsvService.downloadFile(data, headers);
	        list.afterQueryForCSVSuccess();
	      }).catch(list.afterQueryForCSVError);
	    },
	
	    /**
	     * @name AuditQueryService#users
	     * @type {function}
	     * @return {string[]}
	     *
	     * @description Get list of users (Currently always empty.)
	     */
	    // TODO - change this to populate view with users and use promise
	    // as will probably change to get data from back end
	    users: function users() {
	      return [];
	    }
	  };
	}

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = AuditFiltersService;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 *
	 * The purpose of this module is to provide methods for the event category
	 * filters to display and update correctly
	 *
	 * @constructor AuditFiltersService
	 * @param {object} viewModel
	 * @param {List} viewModel.list
	 * @param {AuditQueryModel} model
	 *
	 * @description The audit category filters service, to return relevant lists
	 *   of categories, types and statuses which are given in a nested structure
	 */
	function AuditFiltersService(_ref, model) {
	  var list = _ref.list;
	
	  /**
	   *
	   * @name buildCategoriesObject
	   * @param {module:data-bb-audit-query-http-ng.AuditEventCategoryResponse} data
	   *   The raw data response of event categories
	   * @type {function}
	   * @return {ParsedEventCategories}
	   *
	   * @description Return a built up JS object of categories for easier traversing
	   *   to display correct values in the filters
	   * @inner
	   */
	  var buildCategoriesObject = function buildCategoriesObject(_ref2) {
	    var _ref2$eventCategories = _ref2.eventCategories,
	        eventCategories = _ref2$eventCategories === undefined ? [] : _ref2$eventCategories;
	    return eventCategories.reduce(function (acc, category) {
	      var categoryName = category.eventCategory;
	
	      var categoryTypesObject = category.objectTypes.reduce(function (categoryTypes, type) {
	        return Object.assign(categoryTypes, _defineProperty({}, type.objectType, type.eventActions));
	      }, {});
	
	      return Object.assign(acc, _defineProperty({}, categoryName, categoryTypesObject));
	    }, {});
	  };
	
	  /**
	   * @name AuditFiltersService
	   * @type {Object}
	   */
	  return {
	    /**
	     *
	     * @name AuditFiltersService#buildCategoriesObject
	     * @param {module:data-bb-audit-query-http-ng.AuditEventCategoryResponse} data
	     *   The raw data response of event categories
	     * @type {function}
	     * @return {ParsedEventCategories}
	     *
	     * @description Return a built up JS object of categories for easier traversing
	     *   to display correct values in the filters
	     */
	    buildCategoriesObject: buildCategoriesObject,
	
	    /**
	     *
	     * @name AuditFiltersService#getCategoryNames
	     * @param {ParsedEventCategories} data the parse response data
	     * @type {function}
	     * @return {Array<string>}
	     *
	     * @description Return an array of category names
	     */
	    getCategoryNames: function getCategoryNames(data) {
	      return Object.keys(data);
	    },
	
	    /**
	     *
	     * @name AuditFiltersService#getTypeNames
	     * @param {ParsedEventCategories} data the parse response data
	     * @param {string} categoryName the name of the category to filter on
	     * @type {function}
	     * @return {Array<string>}
	     *
	     * @description Return an array of type names for a category
	     */
	    getTypeNames: function getTypeNames(data, categoryName) {
	      return data[categoryName] ? Object.keys(data[categoryName]) : [];
	    },
	
	    /**
	     *
	     * @name AuditFiltersService#getStatusNames
	     * @param {ParsedEventCategories} data the parse response data
	     * @param {string} categoryName the name of the category to filter on
	     * @param {string} eventTypeName the name of the event type to filter on
	     * @type {function}
	     * @return {Array<string>}
	     *
	     * @description Return an array of statuses for a category type combination
	     */
	    getStatusNames: function getStatusNames(data, categoryName, eventTypeName) {
	      return data[categoryName] ? data[categoryName][eventTypeName] : [];
	    },
	    /**
	     *
	     * @name AuditFiltersService#queryForAuditLogEventCategories
	     * @type {function}
	     * @return {Promise<void>}
	     *
	     * @description Update the view with a list of event categories
	     */
	    queryForAuditLogEventCategories: function queryForAuditLogEventCategories() {
	      list.beforeGetCategories();
	      return model.getAuditLogEventCategories().then(function (_ref3) {
	        var data = _ref3.data;
	
	        list.afterGetCategoriesSuccess({
	          eventCategories: buildCategoriesObject(data)
	        });
	      }).catch(list.afterGetCategoriesError);
	    }
	  };
	}
	
	/**
	 * Parsed event categories transformed from the original raw data
	 * the object returned is a structured easy to read json set
	 * @typedef {Object} ParsedEventCategories
	 * @property {object} [category] category object
	 * @property {object} [category.type] category types
	 * @property {Array<string>} [category.type.status] category type statuses
	 */

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ViewModel;
	
	var _list = __webpack_require__(34);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _initialState = __webpack_require__(36);
	
	var _initialState2 = _interopRequireDefault(_initialState);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @constructor ViewModel
	 * @param {module:lib-bb-state-container-ng.StateContainer} stateContainer
	 * @param {Hooks} hooks
	 */
	function ViewModel(stateContainer, hooks) {
	  return {
	    /**
	     * @name ViewModel#init
	     * @type {function}
	     * @description setup initial state
	     */
	    init: stateContainer.createAction(function () {
	      var current = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _initialState2.default)();
	      return hooks.setState(current);
	    }),
	
	    /**
	     * @name ViewModel#list
	     * @type {List}
	     * @description expose list viewmodel
	     */
	    list: (0, _list2.default)(stateContainer, hooks)
	  };
	}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = List;
	
	var _helpers = __webpack_require__(35);
	
	/**
	 *
	 * @constructor List
	 * @param {module:lib-bb-state-container-ng.StateContainer} stateContainer
	 * @param {Hooks} hooks
	 */
	function List(stateContainer, hooks) {
	  /**
	   * @name List
	   * @type {Object}
	   */
	  return {
	    /**
	     * @name List#beforeQueryForAuditLogMessages
	     * @type {function}
	     * @description Amend the view to inform the user the query is being loaded
	     * @param {Number} currentPage - the current (bootstrap) page - index starts at 1
	     * @return {ViewState} The new state of the view model
	     */
	    beforeQueryForAuditLogMessages: stateContainer.createAction(function (current, currentPage) {
	      return hooks.beforeQueryForAuditLogMessages(Object.assign({}, current, {
	        currentPage: currentPage,
	        isLoading: true
	      }));
	    }),
	
	    /**
	     * @name List#afterQueryForAuditLogMessagesSuccess
	     * @type {function}
	     * @description Amend the view to display the list of items
	     * @param {object} obj
	     * @param {Array<module:model-bb-audit-query-ng.AuditMessage>} obj.auditMessages
	     * @param {number} obj.totalCount
	     * @return {ViewState} The new state of the view model
	     */
	    afterQueryForAuditLogMessagesSuccess: stateContainer.createAction(function (current, _ref) {
	      var auditMessages = _ref.auditMessages,
	          totalCount = _ref.totalCount;
	      return hooks.afterQueryForAuditLogMessagesSuccess(Object.assign({}, current, {
	        auditMessages: auditMessages.map(hooks.transformAuditMessage),
	        isLoading: false,
	        totalCount: totalCount
	      }));
	    }),
	
	    /**
	     * @name List#afterQueryForAuditLogMessagesError
	     * @type {function}
	     * @description Amend the view to display the error encountered when loading the list
	     * @param {module:lib-bb-model-errors.ModelError} error
	     * @return {ViewState} The new state of the view model
	     */
	    afterQueryForAuditLogMessagesError: stateContainer.createAction(function (current, error) {
	      return Object.assign({}, current, {
	        error: (0, _helpers.uiError)(error),
	        isLoading: false
	      });
	    }),
	
	    /**
	     * @name List#beforeQueryForCSV
	     * @type {function}
	     * @description Amend the view to inform the user the query is being loaded
	     * @return {ViewState} The new state of the view model
	     */
	    beforeQueryForCSV: stateContainer.createAction(function (current) {
	      return hooks.beforeQueryForCSV(Object.assign({}, current, {
	        csvIsLoading: true
	      }));
	    }),
	
	    /**
	     * @name List#afterQueryForCSVSuccess
	     * @type {function}
	     * @description Amend the view to state after CSV query was successfull
	     * @return {ViewState} The new state of the view model
	     */
	    afterQueryForCSVSuccess: stateContainer.createAction(function (current) {
	      return hooks.afterQueryForCSVSuccess(Object.assign({}, current, {
	        csvIsLoading: false
	      }));
	    }),
	
	    /**
	     * @name List#afterQueryForCSVError
	     * @type {function}
	     * @description Amend the view to state after CSV query was unsuccessfull
	     * @param {module:lib-bb-model-errors.ModelError} error
	     * @return {ViewState} The new state of the view model
	     */
	    afterQueryForCSVError: stateContainer.createAction(function (current, error) {
	      return Object.assign({}, current, {
	        csvIsLoading: false,
	        error: (0, _helpers.uiError)(error)
	      });
	    }),
	
	    /**
	     * @name List#newQuery
	     * @type {function}
	     * @description Update the view to show the query page
	     * @param {boolean} clear Clear the existing query criteria
	     * @return {ViewState} The new state of the view model
	     */
	    newQuery: stateContainer.createAction(function (current, clear) {
	      return hooks.newQuery(Object.assign({}, current, {
	        auditMessages: null
	      }), clear);
	    }),
	
	    /**
	     * @name List#beforeGetCategories
	     * @type {function}
	     * @description Amend the view to display the event categories filters
	     * @return {ViewState} The new state of the view model
	     */
	    beforeGetCategories: stateContainer.createAction(function (current) {
	      return hooks.beforeGetCategories(Object.assign({}, current, {
	        eventCategoriesLoading: true
	      }));
	    }),
	
	    /**
	     * @name List#afterGetCategoriesSuccess
	     * @type {function}
	     * @description Amend the view to display the filters
	     * @param {object} obj
	     * @param {Array<module:model-bb-audit-query-ng.AuditMessage>} obj.eventCategories
	     * @return {ViewState} The new state of the view model
	     */
	    afterGetCategoriesSuccess: stateContainer.createAction(function (current, _ref2) {
	      var eventCategories = _ref2.eventCategories;
	      return hooks.afterGetCategoriesSuccess(Object.assign({}, current, {
	        eventCategories: eventCategories,
	        eventCategoriesLoading: false
	      }));
	    }),
	
	    /**
	     * @name List#afterGetCategoriesError
	     * @type {function}
	     * @description Amend the view to display the error encountered when loading the categories
	     * @param {module:lib-bb-model-errors.ModelError} error
	     * @return {ViewState} The new state of the view model
	     */
	    afterGetCategoriesError: stateContainer.createAction(function (current, error) {
	      return Object.assign({}, current, {
	        error: (0, _helpers.uiError)(error),
	        eventCategoriesLoading: false
	      });
	    })
	  };
	}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.uiError = exports.errorMessages = undefined;
	
	var _errorMessages;
	
	var _libBbModelErrors = __webpack_require__(19);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * @description Translation keys for error messages
	 * @name errorMessages
	 * @type {object}
	 */
	var errorMessages = exports.errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'audit.model.error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'audit.model.error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'audit.model.error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'audit.model.error.unexpected'), _errorMessages);
	
	/**
	 * @description Creates an error object for template
	 * @name uiError
	 * @param {module:lib-bb-model-errors.ModelError} modelError Error object
	 * @type {function}
	 * @returns {{message: string}}
	 */
	var uiError = exports.uiError = function uiError(modelError) {
	  return {
	    message: modelError && modelError.code ? errorMessages[modelError.code] : ''
	  };
	};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createInitialState;
	
	var _constants = __webpack_require__(30);
	
	/**
	 * @description return initial state object
	 * @name createInitialState
	 * @type {function}
	 * @returns {ViewState}
	 */
	function createInitialState() {
	  var resultsPerPage = _constants.pagerDefaults.resultsPerPage,
	      maxNavPages = _constants.pagerDefaults.maxNavPages;
	  var csvMaxSize = _constants.csvExportDefaults.csvMaxSize;
	
	  return {
	    isLoading: false,
	    isCannedSearch: false,
	    serviceAgreements: null,
	    legalEntities: null,
	    auditMessages: null,
	    csvIsLoading: false,
	    csvMaxSize: csvMaxSize,
	    currentPage: 1,
	    resultsPerPage: resultsPerPage,
	    maxNavPages: maxNavPages
	  };
	}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = AuditQueryController;
	
	var _constants = __webpack_require__(30);
	
	/**
	 *
	 * @constructor AuditQueryController
	 * @param {EventBus} bus
	 * @param {Router} router
	 * @param {Widget} widget
	 * @param {AuditFiltersService} auditFiltersService
	 * @param {module:lib-bb-state-container-ng.StateContainer} stateContainer
	 * @param {module:lib-bb-intent-ng.intentProvider} bbIntent
	 *
	 * @description Controller for the audit query widget
	 */
	function AuditQueryController(bus, router, widget, auditFiltersService, stateContainer, bbIntent) {
	  var $ctrl = this;
	
	  /**
	   * @name getWidgetPreferences
	   * @type {function}
	   * @return {Object}
	   *
	   * @description Get a list of preferences for the widget
	   * @inner
	   */
	  var getWidgetPreferences = function getWidgetPreferences() {
	    return {
	      serviceAgreements: widget.getStringArrayPreference('serviceAgreements') || [],
	      legalEntities: widget.getStringArrayPreference('legalEntities') || [],
	      resultsPerPage: widget.getLongPreference('resultsPerPage') || _constants.pagerDefaults.resultsPerPage,
	      maxNavPages: widget.getLongPreference('maxNavPages') || _constants.pagerDefaults.maxNavPages,
	      csvMaxSize: widget.getLongPreference('maxCsvExportQueryResults') || _constants.csvExportDefaults.maxSize
	    };
	  };
	
	  var setWidgetPreferences = function setWidgetPreferences() {
	    var _getWidgetPreferences = getWidgetPreferences(),
	        serviceAgreements = _getWidgetPreferences.serviceAgreements,
	        legalEntities = _getWidgetPreferences.legalEntities,
	        csvMaxSize = _getWidgetPreferences.csvMaxSize,
	        resultsPerPage = _getWidgetPreferences.resultsPerPage,
	        maxNavPages = _getWidgetPreferences.maxNavPages;
	
	    var preferences = {
	      serviceAgreements: serviceAgreements,
	      legalEntities: legalEntities,
	      csvMaxSize: csvMaxSize,
	      resultsPerPage: resultsPerPage,
	      maxNavPages: maxNavPages
	    };
	
	    stateContainer.createAction(function (current) {
	      return Object.assign({}, current, preferences);
	    })(preferences);
	  };
	
	  var goToDefaultState = function goToDefaultState() {
	    return router.goto('form');
	  };
	
	  var getControlModel = function getControlModel(newCtrlState) {
	    return newCtrlState && newCtrlState.value || null;
	  };
	
	  var getControlModelIntoValue = function getControlModelIntoValue(newCtrlState) {
	    return newCtrlState && newCtrlState.value ? { value: newCtrlState.value } : null;
	  };
	
	  var getDisabled = function getDisabled(newCtrlState) {
	    return !!(newCtrlState && newCtrlState.disabled);
	  };
	
	  var getControlState = function getControlState(newCtrlState) {
	    return {
	      model: getControlModel(newCtrlState),
	      disabled: getDisabled(newCtrlState)
	    };
	  };
	
	  var getControlStateIntoValue = function getControlStateIntoValue(newCtrlState) {
	    return {
	      model: getControlModelIntoValue(newCtrlState),
	      disabled: getDisabled(newCtrlState)
	    };
	  };
	
	  var setState = function setState(intentState) {
	    return {
	      startDatepicker: getControlState(intentState.startDate),
	      endDatepicker: getControlState(intentState.endDate),
	      dropdownCategory: getControlStateIntoValue(intentState.eventCategories),
	      dropdownType: getControlStateIntoValue(intentState.objectType),
	      dropdownStatus: getControlStateIntoValue(intentState.eventAction),
	      user: getControlState(intentState.usernames),
	      dropdownUsers: getControlStateIntoValue(intentState.usernames),
	      dropdownServiceAgreement: getControlStateIntoValue(intentState.serviceAgreementId),
	      dropdownLegalEntity: getControlStateIntoValue(intentState.legalEntityIds)
	    };
	  };
	
	  /**
	   *
	   * @name AuditQueryController#$searchIntentHandler
	   * @description handler for 'intent.bus.audit.table.search'
	   * - map newParams into state and trigger search
	   * @type {function}
	   * @param {object} newParms
	   * @returns {void}
	   */
	  var searchIntentHandler = function searchIntentHandler(newParms) {
	    var mappedState = setState(newParms);
	
	    stateContainer.createAction(function (current, newState) {
	      return Object.assign({}, current, {
	        controlState: Object.assign({}, current.controlState, {
	          startDatepicker: Object.assign({}, current.controlState.startDatepicker, newState.startDatepicker),
	          endDatepicker: Object.assign({}, current.controlState.endDatepicker, newState.endDatepicker),
	          user: Object.assign({}, current.controlState.user, newState.user),
	          dropdownServiceAgreement: Object.assign({}, current.controlState.dropdownServiceAgreement, newState.dropdownServiceAgreement),
	          dropdownLegalEntity: Object.assign({}, current.controlState.dropdownLegalEntity, newState.dropdownLegalEntity),
	          dropdownUsers: Object.assign({}, current.controlState.dropdownUsers, newState.dropdownUsers),
	          dropdownCategory: Object.assign({}, current.controlState.dropdownCategory, newState.dropdownCategory),
	          dropdownType: Object.assign({}, current.controlState.dropdownType, newState.dropdownType),
	          dropdownStatus: Object.assign({}, current.controlState.dropdownStatus, newState.dropdownStatus)
	        }),
	        isCannedSearch: true
	      });
	    })(mappedState);
	
	    router.goto('table');
	  };
	
	  /**
	   *
	   * @name AuditQueryController#$onInit
	   * @type {function}
	   * @returns {void}
	   *
	   * @description AngularJS Lifecycle hook used to initialize the controller
	   */
	  var $onInit = function $onInit() {
	    setWidgetPreferences();
	    auditFiltersService.queryForAuditLogEventCategories();
	
	    // Deprecated in Mobile SDK 3.0
	    bus.publish('cxp.item.loaded', {
	      id: widget.getId()
	    });
	
	    bus.publish('bb.item.loaded', {
	      id: widget.getId()
	    });
	
	    bbIntent.handle('intent.bus.audit.table.search', searchIntentHandler);
	
	    // if no intent is found then this will be called
	    bbIntent.initHandler(goToDefaultState);
	
	    bbIntent.init();
	  };
	
	  /**
	   * @name AuditQueryController
	   * @type {Object}
	   */
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	    searchIntentHandler: searchIntentHandler
	  });
	}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = FormController;
	/**
	 *
	 * @constructor FormController
	 * @param {module:lib-bb-state-container-ng.StateContainer} stateContainer
	 * @param {Router} router
	 *
	 * @description Controller used to isolate form state from view state. Clones view state
	 * in order to mutate it
	 */
	function FormController(stateContainer, router, _ref) {
	  var list = _ref.list;
	
	  var $ctrl = this;
	
	  /**
	   * @name FormController#controlState
	   * @type {object}
	   *
	   * @description Local copy of the control state
	   */
	  var cloneState = function cloneState(_ref2) {
	    var controlState = _ref2.controlState;
	    var startDatepicker = controlState.startDatepicker,
	        endDatepicker = controlState.endDatepicker,
	        user = controlState.user,
	        dropdownServiceAgreement = controlState.dropdownServiceAgreement,
	        dropdownLegalEntity = controlState.dropdownLegalEntity,
	        dropdownUsers = controlState.dropdownUsers,
	        dropdownCategory = controlState.dropdownCategory,
	        dropdownType = controlState.dropdownType,
	        dropdownStatus = controlState.dropdownStatus,
	        currentPage = controlState.currentPage;
	
	
	    var newState = {
	      startDatepicker: startDatepicker,
	      endDatepicker: endDatepicker,
	      user: user,
	      dropdownServiceAgreement: dropdownServiceAgreement,
	      dropdownLegalEntity: dropdownLegalEntity,
	      dropdownUsers: dropdownUsers,
	      dropdownCategory: dropdownCategory,
	      dropdownType: dropdownType,
	      dropdownStatus: dropdownStatus,
	      currentPage: currentPage
	    };
	    Object.assign($ctrl, newState);
	  };
	
	  /**
	   *
	   * @name FormController#$onInit
	   * @type {function}
	   * @returns {void}
	   *
	   * @description AngularJS Lifecycle hook used to initialize the controller
	   */
	  var $onInit = function $onInit() {
	    var _router$getParams = router.getParams(),
	        clear = _router$getParams.clear;
	
	    list.newQuery(clear);
	    cloneState(stateContainer.getState());
	  };
	
	  /**
	   *
	   * @name FormController#submitQuery
	   * @type {function}
	   * @returns {void}
	   *
	   * @description Update the state with control values and route to results table
	   */
	  var submitQuery = function submitQuery() {
	    stateContainer.createAction(function (current) {
	      return Object.assign({}, current, {
	        controlState: Object.assign({}, current.controlState, $ctrl)
	      });
	    })();
	    router.goto('table');
	  };
	
	  /**
	   * @name FormController
	   * @type {Object}
	   */
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	    submitQuery: submitQuery
	  });
	}

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = TableController;
	/**
	 *
	 * @constructor TableController
	 * @param {module:lib-bb-state-container-ng.StateContainer} stateContainer
	 * @param {Router} router
	 * @param {AuditQueryService} auditQueryService
	 *
	 * @description Table view controller
	 */
	function TableController(stateContainer, router, auditQueryService) {
	  var $ctrl = this;
	
	  /**
	   *
	   * @name TableController#$onInit
	   * @type {function}
	   * @returns {void}
	   *
	   * @description AngularJS Lifecycle hook used to initialize the controller
	   */
	  var $onInit = function $onInit() {
	    auditQueryService.queryForAuditLogMessages(stateContainer.getState());
	  };
	
	  /**
	    * @name TableController#editExistingQuery
	    * @type {function}
	    * @description return to query view form with previous settings
	    */
	  var editExistingQuery = function editExistingQuery() {
	    router.goto('form', { clear: false });
	  };
	  /**
	   * @name TableController#newQuery
	   * @type {function}
	   * @description return to query view form with settings cleared
	   */
	  var newQuery = function newQuery() {
	    router.goto('form', { clear: true });
	  };
	
	  /**
	   * @name TableController#submitQuery
	   * @type {function}
	   * @param state
	   * @param {Object} pagerParams The bootstrap params
	   * @param {number} pagerParams.currentPage Seelcted page number
	   *
	   * @description Submit query for getting current page
	   */
	  var submitQuery = function submitQuery(state, _ref) {
	    var currentPage = _ref.currentPage;
	
	    stateContainer.createAction(function (current) {
	      return Object.assign({}, current, {
	        controlState: Object.assign({}, current.controlState, {
	          currentPage: currentPage
	        })
	      });
	    })();
	    auditQueryService.queryForAuditLogMessages(state, currentPage);
	  };
	
	  /**
	   * @name TableController
	   * @type {Object}
	   */
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	    editExistingQuery: editExistingQuery,
	    newQuery: newQuery,
	    submitQuery: submitQuery
	  });
	}

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	// standard boilerplate router
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
/* 41 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var identity = function identity(a) {
	  return a;
	};
	
	/**
	 * @typedef {Object} AuditMessage
	 * @extends module:data-bb-audit-query-http-ng.AuditMessage
	 */
	
	/**
	 * @name Hooks
	 * @type {object}
	 * @extends module:lib-bb-widget-extension-ng.Hooks
	 */
	exports.default = {
	  /**
	   * @name Hooks#transformAuditMessage
	   * @type {function}
	   * @description Perform any transformations required to prepare the AuditMessage item for display
	   * @param {module:model-bb-audit-query-ng.AuditMessage} auditMessage
	   * @return {Object} transformed AuditMessage
	   */
	  transformAuditMessage: identity,
	
	  /**
	   * @name Hooks#beforeQueryForAuditLogMessages
	   * @type {function}
	   * @description Amend the view before loading the list of Audit Log Messages
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  beforeQueryForAuditLogMessages: identity,
	
	  /**
	   * @name Hooks#afterQueryForAuditLogMessagesSuccess
	   * @type {function}
	   * @description Amend the view after loading the list of Audit Log Message items
	   * @param {ViewState} current The current state of the view model
	   * @param {Array<AuditMessage>} auditMessages
	   * @return {ViewState} The new state of the view model
	   */
	  afterQueryForAuditLogMessagesSuccess: identity,
	
	  /**
	   * @name Hooks#beforeQueryForCSV
	   * @type {function}
	   * @description Amend the view before downloading the CSV file
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  beforeQueryForCSV: identity,
	
	  /**
	   * @name Hooks#afterQueryForCSVSuccess
	   * @type {function}
	   * @description Amend the view after downloading the CSV file
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  afterQueryForCSVSuccess: identity,
	
	  /**
	   * @name Hooks#beforeGetCategories
	   * @type {function}
	   * @description Amend the view before getting the categories list
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  beforeGetCategories: identity,
	
	  /**
	   * @name Hooks#afterGetCategoriesSuccess
	   * @type {function}
	   * @description Amend the view after getting the categories successfully
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  afterGetCategoriesSuccess: identity,
	
	  /**
	   * @name Hooks#setState
	   * @type {function}
	   * @description add any state required by extension
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  setState: identity,
	
	  /**
	   * @name Hooks#newQuery
	   * @type {function}
	   * @description Amend the view before showing a new query
	   * @param {ViewState} current The current state of the view model
	   * @return {ViewState} The new state of the view model
	   */
	  newQuery: identity
	
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=widget-bb-audit-query-ng.js.map