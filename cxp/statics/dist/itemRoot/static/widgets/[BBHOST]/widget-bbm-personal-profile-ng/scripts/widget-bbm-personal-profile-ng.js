(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("model-bb-personal-profile-ng"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-intent-ng"), require("lib-bb-state-container-ng"), require("lib-bb-extension-helpers-ng"), require("lib-bb-extension-events-ng"), require("lib-bb-extension-intents-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bbm-personal-profile-ng", ["vendor-bb-angular", "lib-bb-model-errors", "model-bb-personal-profile-ng", "lib-bb-widget-ng", "lib-bb-event-bus-ng", "lib-bb-intent-ng", "lib-bb-state-container-ng", "lib-bb-extension-helpers-ng", "lib-bb-extension-events-ng", "lib-bb-extension-intents-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bbm-personal-profile-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("model-bb-personal-profile-ng"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-intent-ng"), require("lib-bb-state-container-ng"), require("lib-bb-extension-helpers-ng"), require("lib-bb-extension-events-ng"), require("lib-bb-extension-intents-ng"));
	else
		root["widget-bbm-personal-profile-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-model-errors"], root["model-bb-personal-profile-ng"], root["lib-bb-widget-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-intent-ng"], root["lib-bb-state-container-ng"], root["lib-bb-extension-helpers-ng"], root["lib-bb-extension-events-ng"], root["lib-bb-extension-intents-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_45__, __WEBPACK_EXTERNAL_MODULE_46__, __WEBPACK_EXTERNAL_MODULE_47__, __WEBPACK_EXTERNAL_MODULE_48__, __WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_54__, __WEBPACK_EXTERNAL_MODULE_85__, __WEBPACK_EXTERNAL_MODULE_86__) {
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

	module.exports = __webpack_require__(84);

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_35__;

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

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
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_47__;

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_48__;

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_54__;

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(35);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(46);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbIntentNg = __webpack_require__(48);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbStateContainerNg = __webpack_require__(53);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _libBbEventBusNg = __webpack_require__(47);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbExtensionHelpersNg = __webpack_require__(54);
	
	var _libBbExtensionHelpersNg2 = _interopRequireDefault(_libBbExtensionHelpersNg);
	
	var _libBbExtensionEventsNg = __webpack_require__(85);
	
	var _libBbExtensionEventsNg2 = _interopRequireDefault(_libBbExtensionEventsNg);
	
	var _libBbExtensionIntentsNg = __webpack_require__(86);
	
	var _libBbExtensionIntentsNg2 = _interopRequireDefault(_libBbExtensionIntentsNg);
	
	var _modelBbPersonalProfileNg = __webpack_require__(45);
	
	var _modelBbPersonalProfileNg2 = _interopRequireDefault(_modelBbPersonalProfileNg);
	
	var _controller = __webpack_require__(87);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _formController = __webpack_require__(88);
	
	var _formController2 = _interopRequireDefault(_formController);
	
	var _viewModel = __webpack_require__(89);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	var _service = __webpack_require__(96);
	
	var _service2 = _interopRequireDefault(_service);
	
	var _events = __webpack_require__(97);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _constants = __webpack_require__(98);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'widget-bbm-personal-profile-ng'; /**
	                                                   * @module widget-bbm-personal-profile-ng
	                                                   *
	                                                   * @description
	                                                   * Personal profile.
	                                                   *
	                                                   * @example
	                                                   *  <div ng-controller="PersonalProfileController as $ctrl">
	                                                   *    <ul>
	                                                   *       <li>{{ ext.helpers.getProcessedUser().firstName }}</li>
	                                                   *    </ul>
	                                                   *  </div>
	                                                   */
	
	var eventServiceKey = moduleKey + ':events';
	var serviceKey = moduleKey + ':service';
	var viewModelKey = moduleKey + ':viewModel';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_modelBbPersonalProfileNg2.default, _libBbEventBusNg2.default, _libBbWidgetNg2.default, _libBbIntentNg2.default, _libBbStateContainerNg2.default, _libBbExtensionHelpersNg2.default, _libBbExtensionEventsNg2.default, _libBbExtensionIntentsNg2.default]).factory(eventServiceKey, [_libBbEventBusNg.eventBusKey,
	/* into */
	_events2.default]).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey,
	/* into */
	_viewModel2.default]).factory(serviceKey, [_modelBbPersonalProfileNg.modelPersonalProfileKey, viewModelKey, _libBbStateContainerNg.bbStateContainerKey, eventServiceKey,
	/* into */
	_service2.default]).factory(_libBbExtensionEventsNg.extensionEventsContextKey, [_libBbIntentNg.bbIntentKey, serviceKey, function (bbIntent, service) {
	  return { bbIntent: bbIntent, service: service };
	}]).factory(_libBbExtensionHelpersNg.extensionHelpersContextKey, [_libBbIntentNg.bbIntentKey, serviceKey, function (bbIntent, service) {
	  return { bbIntent: bbIntent, service: service };
	}]).factory(_libBbExtensionIntentsNg.extensionIntentsContextKey, [serviceKey, function (service) {
	  return { service: service };
	}]).controller('PersonalProfileController', [serviceKey,
	/* into */
	_controller2.default]).controller('PersonalProfileFormController', [
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

/***/ 85:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_85__;

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_86__;

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = PersonalProfileController;
	/**
	 * @name PersonalProfileController
	 * @ngkey PersonalProfileController
	 * @description
	 * Mobile Personal profile widget controller
	 * @type {object}
	 */
	function PersonalProfileController(service) {
	  /**
	   * @description
	   * Widget initialization logic - called automatically during the angular cycle.
	   *
	   * @name PersonalProfileController#$onInit
	   * @type {function}
	   */
	  var $onInit = function $onInit() {
	    return service.loadUser();
	  };
	
	  return {
	    /* Lifecycle hooks */
	    $onInit: $onInit
	  };
	}

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = PersonalProfileFormController;
	/**
	 * @name PersonalProfileFormController
	 * @ngkey PersonalProfileFormController
	 * @description
	 * Mobile Personal profile widget form controller
	 * @type {object}
	 */
	function PersonalProfileFormController() {}

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _initialState = __webpack_require__(90);
	
	var _initialState2 = _interopRequireDefault(_initialState);
	
	var _user = __webpack_require__(91);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _form = __webpack_require__(93);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _selectedEmail = __webpack_require__(94);
	
	var _selectedEmail2 = _interopRequireDefault(_selectedEmail);
	
	var _selectedPhone = __webpack_require__(95);
	
	var _selectedPhone2 = _interopRequireDefault(_selectedPhone);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (stateContainer) {
	  var initialState = (0, _initialState2.default)();
	
	  /**
	   * @name ViewModel
	   * @type {object}
	   * @ngKey widget-bbm-personal-profile-ng:viewModel
	   * @inner
	   */
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
	     * @name ViewModel#user
	     * @description
	     * Actions for updating the parts of the `ViewState` related to the user.
	     *
	     * @type {function}
	     * @return {ViewState}
	     * @inner
	     */
	    user: (0, _user2.default)(stateContainer),
	
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
	     * @name ViewModel#selectEmail
	     * @description
	     * Actions for updating the parts of the `ViewState` related to the selected email.
	     *
	     * @type {function}
	     * @return {ViewState}
	     * @inner
	     */
	    selectedEmail: (0, _selectedEmail2.default)(stateContainer),
	
	    /**
	     * @name ViewModel#selectPhone
	     * @description
	     * Actions for updating the parts of the `ViewState` related to the selected phone.
	     *
	     * @type {function}
	     * @return {ViewState}
	     * @inner
	     */
	    selectedPhone: (0, _selectedPhone2.default)(stateContainer)
	  };
	};

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return {
	    user: {
	      data: null,
	      loading: false,
	      error: null
	    },
	    form: {
	      data: {
	        phone: null,
	        email: null
	      }
	    },
	    selectedPhone: {
	      index: null
	    },
	    selectedEmail: {
	      index: null
	    }
	  };
	};
	
	/**
	 * @typedef {object} ViewState
	 * @description
	 * The current state of the [ViewModel]{@link module:lib-bb-view-model-ng}.
	 *
	 * @property {object} user
	 * @property {module:model-bb-personal-profile-ng.UserProfile} user.data
	 * The user's personal profile data.
	 * @property {boolean} user.loading Indicates whether a user data is loading at the moment.
	 * @property {object} user.error The last encountered error.
	 *
	 * @property {object} form
	 * @property {object} data The form's data
	 * @property {module:model-bb-personal-profile-ng.Phone} data.phone The user's phone data.
	 * @property {module:model-bb-personal-profile-ng.Email} data.email The user's email data.
	 *
	 * @property {object} selectedPhone
	 * @property {number} index The index of the selected phone.
	 *
	 * @property {object} selectedEmail
	 * @property {number} index The index of the selected email.
	*/

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(92);
	
	/**
	 * @name ViewModelUserActions
	 * @type {object}
	 * @inner
	 */
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelUserActions#beforeUserLoad
	     * @description Update the `ViewState` before a user is loaded.
	     * @type {function}
	     *
	     * @return {void}
	     * @inner
	     */
	    beforeUserLoad: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        user: Object.assign({}, state.user, {
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelUserActions#beforeUserUpdate
	     * @description Update the `ViewState` before a user is submitted for update.
	     * @type {function}
	     *
	     * @return {void}
	     * @inner
	     */
	    beforeUserUpdate: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        user: Object.assign({}, state.user, {
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelUserActions#afterUserLoadSuccess
	     * @description Update the `ViewState` after the user is successfully loaded.
	     * @type {function}
	     *
	     * @param {module:model-bb-personal-profile-ng.UserProfile} user
	     * @return {void}
	     * @inner
	     */
	    afterUserLoadSuccess: stateContainer.createAction(function (state, user) {
	      return Object.assign({}, state, {
	        user: Object.assign({}, state.user, {
	          data: user,
	          loading: false,
	          error: null
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelUserActions#afterUserUpdateSuccess
	     * @description Update the `ViewState` after the user is updated.
	     * @type {function}
	     *
	     * @param {module:model-bb-personal-profile-ng.UserProfile} user
	     * @return {void}
	     * @inner
	     */
	    afterUserUpdateSuccess: stateContainer.createAction(function (state, user) {
	      return Object.assign({}, state, {
	        user: Object.assign({}, state.user, {
	          data: user,
	          loading: false,
	          error: null
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelUserActions#afterUserLoadError
	     * @description Update the `ViewState` after unsuccessful user load.
	     * @type {function}
	     *
	     * @param {module:model-bb-personal-profile-ng.ModelError} error Response error
	     * @return {void}
	     * @inner
	     */
	    afterUserLoadError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        user: Object.assign({}, state.user, {
	          loading: false,
	          error: (0, _helpers.uiError)(error)
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelUserActions#afterUserUpdateError
	     * @description Update the `ViewState` after unsuccessful user update.
	     * @type {function}
	     *
	     * @param {module:model-bb-personal-profile-ng.ModelError} error Response error
	     * @return {void}
	     * @inner
	     */
	    afterUserUpdateError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        user: Object.assign({}, state.user, {
	          loading: false,
	          error: (0, _helpers.uiError)(error)
	        })
	      });
	    })
	  };
	};

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.uiError = undefined;
	
	var _errorMessages;
	
	var _libBbModelErrors = __webpack_require__(38);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* eslint-disable import/prefer-default-export */
	
	
	var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'model.error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'model.error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'model.error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'model.error.unexpected'), _errorMessages);
	
	var uiError = exports.uiError = function uiError(error) {
	  return {
	    message: errorMessages[error.code]
	  };
	};

/***/ }),

/***/ 93:
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
	     * @name ViewModelFormActions#setPhoneForm
	     * @description Update the `ViewState` by prefilling the phone form.
	     * @type {function}
	     *
	     * @param {module:model-bb-personal-profile-ng.Phone} phone
	     * @return {void}
	     * @inner
	     */
	    setPhoneForm: stateContainer.createAction(function (state, phone) {
	      return Object.assign({}, state, {
	        form: Object.assign({}, state.form, {
	          data: Object.assign({}, state.form.data, {
	            phone: phone
	          })
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelFormActions#setEmailForm
	     * @description Update the `ViewState` by prefilling the email form.
	     * @type {function}
	     *
	     * @param {module:model-bb-personal-profile-ng.Email} email
	     * @return {void}
	     * @inner
	     */
	    setEmailForm: stateContainer.createAction(function (state, email) {
	      return Object.assign({}, state, {
	        form: Object.assign({}, state.form, {
	          data: Object.assign({}, state.form.data, {
	            email: email
	          })
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelFormActions#resetEmailForm
	     * @description Update the `ViewState` by reseting the email form.
	     * @type {function}
	     *
	     * @return {void}
	     * @inner
	     */
	    resetEmailForm: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        form: Object.assign({}, state.form, {
	          data: Object.assign({}, state.form.data, {
	            email: null
	          })
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelFormActions#resetPhoneForm
	     * @description Update the `ViewState` by reseting the phone form.
	     * @type {function}
	     *
	     * @return {void}
	     * @inner
	     */
	    resetPhoneForm: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        form: Object.assign({}, state.form, {
	          data: Object.assign({}, state.form.data, {
	            phone: null
	          })
	        })
	      });
	    })
	  };
	};

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name ViewModelSelectEmailActions
	 * @type {object}
	 * @inner
	 */
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelSelectEmailActions#afterSelectEmailSuccess
	     * @description Update the `ViewState` after an email has been selected.
	     * @type {function}
	     * @inner
	     * @param {object|null} index Email index.
	     * @return {void}
	     */
	    afterSelectEmailSuccess: stateContainer.createAction(function (state, index) {
	      return Object.assign({}, state, {
	        selectedEmail: Object.assign({}, state.selectedEmail, {
	          index: index
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelSelectEmailActions#cancelSelect
	     * @description Update the `ViewState` after selected email reset.
	     * @type {function}
	     *
	     * @inner
	     * @return {void}
	     */
	    cancelSelect: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        selectedEmail: Object.assign({}, state.selectedEmail, {
	          index: null
	        })
	      });
	    })
	  };
	};

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name ViewModelSelectPhoneActions
	 * @type {object}
	 * @inner
	 */
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelSelectPhoneActions#afterSelectPhoneSuccess
	     * @description Update the `ViewState` after a phone has been selected.
	     * @type {function}
	     * @inner
	     * @param {object|null} index Phone index.
	     * @return {void}
	     */
	    afterSelectPhoneSuccess: stateContainer.createAction(function (state, index) {
	      return Object.assign({}, state, {
	        selectedPhone: Object.assign({}, state.selectedPhone, {
	          index: index
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelSelectPhoneActions#cancelSelect
	     * @description Update the `ViewState` after selected phone reset.
	     * @type {function}
	     *
	     * @inner
	     * @return {void}
	     */
	    cancelSelect: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        selectedPhone: Object.assign({}, state.selectedPhone, {
	          index: null
	        })
	      });
	    })
	  };
	};

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/* global angular */
	/**
	 * @name PersonalProfileService
	 * @type {object}
	 * @ngkey widget-bbm-personal-profile-ng:service
	 * @description
	 * The service encapsulates the core functionality of the Mobile Personal profile Widget.
	 * It co-ordinates the communication of data from the `Model`
	 * with the communication with the user by updating the {@link ViewState}.
	 *
	 * Asynchronous methods update the {@link ViewState} in 3 potential
	 * stages; "before", "success", and "error", to allow the view to
	 * provide feedback to the user.
	 */
	
	/**
	 * @name PersonalProfileService
	 * @type {function}
	 *
	 * @param {module:model-bb-personal-profile-ng.PersonalProfileModel} model Personal profile model.
	 * @param {ViewModel} viewModel
	 * @param {object} stateContainer
	 * @param {object} events
	 *
	 * @return {PersonalProfileService}
	 * @inner
	 */
	exports.default = function (model, viewModel, stateContainer, events) {
	  /**
	   * @name getUserData
	   * @description
	   * Retrieves the user state.
	   * @type {function}
	   *
	   * @return {module:model-bb-personal-profile-ng.UserProfile}
	   * @inner
	   */
	  var getUserData = stateContainer.createSelector(function (state) {
	    return state.user.data;
	  });
	
	  /**
	   * @name getPhoneFormData
	   * @description
	   * Retrieves the phone's form state.
	   * @type {function}
	   *
	   * @return {module:model-bb-personal-profile-ng.Phone}
	   * @inner
	   */
	  var getPhoneFormData = stateContainer.createSelector(function (state) {
	    return state.form.data.phone;
	  });
	
	  /**
	   * @name getEmailFormData
	   * @description
	   * Retrieves the email's form state.
	   * @type {function}
	   *
	   * @return {module:model-bb-personal-profile-ng.Email}
	   * @inner
	   */
	  var getEmailFormData = stateContainer.createSelector(function (state) {
	    return state.form.data.email;
	  });
	
	  /**
	   * @name getSelectedEmail
	   * @description
	   * Retrieves the selected email state.
	   * @type {function}
	   *
	   * @return {object}
	   * @inner
	   */
	  var getSelectedEmail = stateContainer.createSelector(function (state) {
	    return state.selectedEmail;
	  });
	
	  /**
	   * @name getSelectedPhone
	   * @description
	   * Retrieves the selected phone state.
	   * @type {function}
	   *
	   * @return {object}
	   * @inner
	   */
	  var getSelectedPhone = stateContainer.createSelector(function (state) {
	    return state.selectedPhone;
	  });
	
	  /**
	   * @name getUserDataToEdit
	   * @description
	   * Returns a copy of the selected user data.
	   * Throws an error, if there is no selected user.
	   * @type {function}
	   *
	   * @return {object}
	   * @inner
	   */
	  var getUserDataToEdit = function getUserDataToEdit() {
	    var userData = getUserData();
	    if (!userData) {
	      throw new Error('There is no selected user to edit. ' + 'Probably you haven\'t configured the property "widget-sync-id" properly.');
	    }
	    return angular.copy(userData);
	  };
	
	  /**
	   * @name updateUser
	   * @description
	   * Updates the user and
	   * updates the {@link ViewState} to display it.
	   * @type {function}
	   *
	   * @return {Promise}
	   * @inner
	   */
	  var updateUser = function updateUser(user) {
	    viewModel.user.beforeUserUpdate();
	
	    return model.updateUsersProfile(user).then(function (updatedUser) {
	      viewModel.user.afterUserUpdateSuccess(updatedUser);
	    }).catch(function (error) {
	      viewModel.user.afterUserUpdateError(error);
	
	      throw error;
	    });
	  };
	
	  /**
	   * @name createEmail
	   * @description
	   * Creates an email.
	   * @type {function}
	   *
	   * @return {Promise}
	   * @inner
	   */
	  var createEmail = function createEmail(email) {
	    var user = getUserDataToEdit();
	    user.emails.push(email);
	
	    events.beforeEmailCreate();
	
	    return updateUser(user).then(function (updatedUser) {
	      events.afterEmailCreateSuccess(updatedUser);
	    }).catch(function (error) {
	      events.afterEmailCreateError(error);
	
	      throw error;
	    });
	  };
	
	  /**
	   * @name editEmail
	   * @description
	   * Edits an email.
	   * @type {function}
	   *
	   * @return {Promise}
	   * @inner
	   */
	  var editEmail = function editEmail(email) {
	    var user = getUserDataToEdit();
	
	    var _getSelectedEmail = getSelectedEmail(),
	        index = _getSelectedEmail.index;
	
	    user.emails.splice(index, 1, email);
	
	    events.beforeEmailEdit();
	
	    return updateUser(user).then(function (updatedUser) {
	      events.afterEmailEditSuccess(updatedUser);
	    }).catch(function (error) {
	      events.afterEmailEditError(error);
	
	      throw error;
	    });
	  };
	
	  /**
	   * @name createPhone
	   * @description
	   * Creates a phone.
	   * @type {function}
	   *
	   * @return {Promise}
	   * @inner
	   */
	  var createPhone = function createPhone(phone) {
	    var user = getUserDataToEdit();
	    user.phones.push(phone);
	
	    events.beforePhoneCreate();
	
	    return updateUser(user).then(function (updatedUser) {
	      events.afterPhoneCreateSuccess(updatedUser);
	    }).catch(function (error) {
	      events.afterPhoneCreateError(error);
	
	      throw error;
	    });
	  };
	
	  /**
	   * @name editPhone
	   * @description Edits a phone number.
	   * @type {function}
	   *
	   * @return {Promise}
	   * @inner
	   */
	  var editPhone = function editPhone(phone) {
	    var user = getUserDataToEdit();
	
	    var _getSelectedPhone = getSelectedPhone(),
	        index = _getSelectedPhone.index;
	
	    user.phones.splice(index, 1, phone);
	
	    events.beforePhoneEdit();
	
	    return updateUser(user).then(function (updatedUser) {
	      events.afterPhoneEditSuccess(updatedUser);
	    }).catch(function (error) {
	      events.afterPhoneEditError(error);
	
	      throw error;
	    });
	  };
	
	  /**
	   * @name PersonalProfileService#loadUser
	   * @description
	   * Fetches the user and
	   * updates the {@link ViewState} to display it.
	   * @type {function}
	   *
	   * @return {Promise}
	   */
	  var loadUser = function loadUser() {
	    viewModel.user.beforeUserLoad();
	
	    return model.loadUsersProfile().then(function (user) {
	      viewModel.user.afterUserLoadSuccess(user);
	    }).catch(function (error) {
	      viewModel.user.afterUserLoadError(error);
	
	      throw error;
	    });
	  };
	
	  /**
	   * @name PersonalProfileService#updateUserEmail
	   * @description Update's a user's email.
	   * @type {function}
	   *
	   * @return {Promise}
	   */
	  var updateUserEmail = function updateUserEmail() {
	    var email = getEmailFormData();
	
	    return getSelectedEmail().index !== null ? editEmail(email) : createEmail(email);
	  };
	
	  /**
	   * @name PersonalProfileService#updateUserPhone
	   * @description Updates a user's phone.
	   * @type {function}
	   *
	   * @return {Promise}
	   */
	  var updateUserPhone = function updateUserPhone() {
	    var phone = getPhoneFormData();
	    return getSelectedPhone().index !== null ? editPhone(phone) : createPhone(phone);
	  };
	
	  /**
	   * @name PersonalProfileService#deleteUserPhone
	   * @description Deletes a user's phone.
	   * @type {function}
	   *
	   * @return {Promise}
	   */
	  var deleteUserPhone = function deleteUserPhone() {
	    var user = getUserDataToEdit();
	
	    var _getSelectedPhone2 = getSelectedPhone(),
	        index = _getSelectedPhone2.index;
	
	    user.phones.splice(index, 1);
	
	    events.beforePhoneDelete();
	
	    return updateUser(user).then(function (updatedUser) {
	      events.afterPhoneDeleteSuccess(updatedUser);
	    }).catch(function (error) {
	      events.afterPhoneDeleteError(updateUser);
	
	      throw error;
	    });
	  };
	
	  /**
	   * @name PersonalProfileService#deleteUserEmail
	   * @description Deletes a user's email.
	   * @type {function}
	   *
	   * @return {Promise}
	   */
	  var deleteUserEmail = function deleteUserEmail() {
	    var user = getUserDataToEdit();
	
	    var _getSelectedEmail2 = getSelectedEmail(),
	        index = _getSelectedEmail2.index;
	
	    user.emails.splice(index, 1);
	
	    events.beforeEmailDelete();
	
	    return updateUser(user).then(function (updatedUser) {
	      events.afterEmailDeleteSuccess(updatedUser);
	    }).catch(function (error) {
	      events.afterEmailDeleteError(updateUser);
	
	      throw error;
	    });
	  };
	
	  /**
	   * @name PersonalProfileService#selectEmail
	   * @description Selects an email by its position in the list.
	   * @type {function}
	   *
	   * @param {number} index The position of the email.
	   */
	  var selectEmail = function selectEmail(index) {
	    viewModel.selectedEmail.afterSelectEmailSuccess(index);
	  };
	
	  /**
	   * @name PersonalProfileService#selectPhone
	   * @description Selects a phone by its position in the list.
	   * @type {function}
	   *
	   * @param {number} index The position of the phone.
	   */
	  var selectPhone = function selectPhone(index) {
	    viewModel.selectedPhone.afterSelectPhoneSuccess(index);
	  };
	
	  /**
	   * @name PersonalProfileService#resetSelectedPhoneIfNeeded
	   * @description Resets the selected phone if exists.
	   * @type {function}
	   */
	  var resetSelectedPhoneIfNeeded = function resetSelectedPhoneIfNeeded() {
	    if (getSelectedPhone().index !== null) {
	      viewModel.selectedPhone.cancelSelect();
	    }
	  };
	
	  /**
	   * @name PersonalProfileService#resetSelectedEmailIfNeeded
	   * @description Resets the selected email if exists.
	   * @type {function}
	   */
	  var resetSelectedEmailIfNeeded = function resetSelectedEmailIfNeeded() {
	    if (getSelectedEmail().index !== null) {
	      viewModel.selectedEmail.cancelSelect();
	    }
	  };
	
	  /**
	   * @name PersonalProfileService#setPhoneForm
	   * @description Fills up the form with the selected phone.
	   * @type {function}
	   *
	   * @param {module:model-bb-personal-profile-ng.Phone} phone
	   */
	  var setPhoneForm = function setPhoneForm(phone) {
	    viewModel.form.setPhoneForm(phone);
	  };
	
	  /**
	   * @name PersonalProfileService#setEmailForm
	   * @description Fills up the form with the selected email.
	   * @type {function}
	   *
	   * @param {module:model-bb-personal-profile-ng.Email} email
	   */
	  var setEmailForm = function setEmailForm(email) {
	    viewModel.form.setEmailForm(email);
	  };
	
	  /**
	   * @name PersonalProfileService#setPhoneForm
	   * @description Fills up the form with the selected phone.
	   * @type {function}
	   */
	  var setInitialPhoneForm = function setInitialPhoneForm() {
	    var phone = {
	      value: null,
	      primary: false
	    };
	
	    viewModel.form.setPhoneForm(phone);
	  };
	
	  /**
	   * @name PersonalProfileService#setEmailForm
	   * @description Fills up the form with the selected email.
	   * @type {function}
	   */
	  var setInitialEmailForm = function setInitialEmailForm() {
	    var email = {
	      value: null,
	      primary: false
	    };
	
	    viewModel.form.setEmailForm(email);
	  };
	
	  return {
	    loadUser: loadUser,
	    updateUserEmail: updateUserEmail,
	    updateUserPhone: updateUserPhone,
	    deleteUserPhone: deleteUserPhone,
	    deleteUserEmail: deleteUserEmail,
	    selectEmail: selectEmail,
	    selectPhone: selectPhone,
	    resetSelectedPhoneIfNeeded: resetSelectedPhoneIfNeeded,
	    resetSelectedEmailIfNeeded: resetSelectedEmailIfNeeded,
	    setPhoneForm: setPhoneForm,
	    setEmailForm: setEmailForm,
	    setInitialPhoneForm: setInitialPhoneForm,
	    setInitialEmailForm: setInitialEmailForm
	  };
	};

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Event = exports.Event = {
	  /**
	   * A newly created email is submitted to the server
	   * @event bb.event.personalProfile.email.create.start
	   * @type {string}
	   */
	  BEFORE_EMAIL_CREATE: 'bb.event.personalProfile.email.create.start',
	
	  /**
	   * A new email is created on the server
	   * @event bb.event.personalProfile.email.create.done
	   * @property {module:model-bb-personal-profile-ng.UserProfile} user
	   * @type {string}
	   */
	  AFTER_EMAIL_CREATE_SUCCESS: 'bb.event.personalProfile.email.create.done',
	
	  /**
	   * A new email fails to be created on the server
	   * @event bb.event.personalProfile.email.create.failed
	   * @type {string}
	   * @property {module:lib-bb-model-ng.ModelError} error
	   */
	  AFTER_EMAIL_CREATE_ERROR: 'bb.event.personalProfile.email.create.failed',
	
	  /**
	   * A newly created phone is submitted to the server
	   * @event bb.event.personalProfile.phone.create.start
	   * @type {string}
	   */
	  BEFORE_PHONE_CREATE: 'bb.event.personalProfile.phone.create.start',
	
	  /**
	   * A new phone is created on the server
	   * @event bb.event.personalProfile.phone.create.done
	   * @property {module:model-bb-personal-profile-ng.UserProfile} user
	   * @type {string}
	   */
	  AFTER_PHONE_CREATE_SUCCESS: 'bb.event.personalProfile.phone.create.done',
	
	  /**
	   * A new phone fails to be created on the server
	   * @event bb.event.personalProfile.phone.create.failed
	   * @type {string}
	   * @property {module:lib-bb-model-ng.ModelError} error
	   */
	  AFTER_PHONE_CREATE_ERROR: 'bb.event.personalProfile.phone.create.failed',
	
	  /**
	   * An email is submitted for update to the server
	   * @event bb.event.personalProfile.email.edit.start
	   * @type {string}
	   */
	  BEFORE_EMAIL_EDIT: 'bb.event.personalProfile.email.edit.start',
	
	  /**
	   * An email is updated on the server
	   *
	   * @event bb.event.personalProfile.email.edit.done
	   * @property {module:model-bb-personal-profile-ng.UserProfile} user
	   * @type {string}
	   */
	  AFTER_EMAIL_EDIT_SUCCESS: 'bb.event.personalProfile.email.edit.done',
	
	  /**
	   * An email fails to be updated on the server
	   * @event bb.event.personalProfile.email.edit.failed
	   * @property {module:lib-bb-model-ng.ModelError} error
	   * @type {string}
	   */
	  AFTER_EMAIL_EDIT_ERROR: 'bb.event.personalProfile.email.edit.failed',
	
	  /**
	   * A phone is submitted for update to the server
	   * @event bb.event.personalProfile.phone.edit.start
	   * @type {string}
	   */
	  BEFORE_PHONE_EDIT: 'bb.event.personalProfile.phone.edit.start',
	
	  /**
	   * A phone is updated on the server
	   *
	   * @event bb.event.personalProfile.phone.edit.done
	   * @property {module:model-bb-personal-profile-ng.UserProfile} user
	   * @type {string}
	   */
	  AFTER_PHONE_EDIT_SUCCESS: 'bb.event.personalProfile.phone.edit.done',
	
	  /**
	   * A phone fails to be updated on the server
	   * @event bb.event.personalProfile.phone.edit.failed
	   * @property {module:lib-bb-model-ng.ModelError} error
	   * @type {string}
	   */
	  AFTER_PHONE_EDIT_ERROR: 'bb.event.personalProfile.phone.edit.failed',
	
	  /**
	   * An email is submitted for deletion from the server
	   * @event bb.event.personalProfile.email.delete.start
	   * @type {string}
	   */
	  BEFORE_EMAIL_DELETE: 'bb.event.personalProfile.email.delete.start',
	
	  /**
	   * An email is deleted on the server
	   * @event bb.event.personalProfile.email.delete.done
	   * @property {module:model-bb-personal-profile-ng.UserProfile} user
	   * @type {string}
	   */
	  AFTER_EMAIL_DELETE_SUCCESS: 'bb.event.personalProfile.email.delete.done',
	
	  /**
	   * An email fails to be deleted on the server
	   * @event bb.event.personalProfile.email.delete.failed
	   * @type {string}
	   * @property {module:lib-bb-model-ng.ModelError} error
	   */
	  AFTER_EMAIL_DELETE_ERROR: 'bb.event.personalProfile.email.delete.failed',
	
	  /**
	   * A phone is submitted for deletion from the server
	   * @event bb.event.personalProfile.phone.delete.start
	   * @type {string}
	   */
	  BEFORE_PHONE_DELETE: 'bb.event.personalProfile.phone.delete.start',
	
	  /**
	   * A phone is deleted on the server
	   * @event bb.event.personalProfile.phone.delete.done
	   * @property {module:model-bb-personal-profile-ng.UserProfile} user
	   * @type {string}
	   */
	  AFTER_PHONE_DELETE_SUCCESS: 'bb.event.personalProfile.phone.delete.done',
	
	  /**
	   * A phone fails to be deleted on the server
	   * @event bb.event.personalProfile.phone.delete.failed
	   * @type {string}
	   * @property {module:lib-bb-model-ng.ModelError} error
	   */
	  AFTER_PHONE_DELETE_ERROR: 'bb.event.personalProfile.phone.delete.failed'
	};
	
	exports.default = function (bus) {
	  return {
	    beforePhoneCreate: function beforePhoneCreate() {
	      bus.publish(Event.BEFORE_PHONE_CREATE);
	    },
	    afterPhoneCreateSuccess: function afterPhoneCreateSuccess(user) {
	      bus.publish(Event.AFTER_PHONE_CREATE_SUCCESS, { user: user });
	    },
	    afterPhoneCreateError: function afterPhoneCreateError(error) {
	      bus.publish(Event.AFTER_PHONE_CREATE_ERROR, { error: error });
	    },
	    beforePhoneEdit: function beforePhoneEdit() {
	      bus.publish(Event.BEFORE_PHONE_EDIT);
	    },
	    afterPhoneEditSuccess: function afterPhoneEditSuccess(user) {
	      bus.publish(Event.AFTER_PHONE_EDIT_SUCCESS, { user: user });
	    },
	    afterPhoneEditError: function afterPhoneEditError(error) {
	      bus.publish(Event.AFTER_PHONE_EDIT_ERROR, { error: error });
	    },
	    beforePhoneDelete: function beforePhoneDelete() {
	      bus.publish(Event.BEFORE_PHONE_DELETE);
	    },
	    afterPhoneDeleteSuccess: function afterPhoneDeleteSuccess(user) {
	      bus.publish(Event.AFTER_PHONE_DELETE_SUCCESS, { user: user });
	    },
	    afterPhoneDeleteError: function afterPhoneDeleteError(error) {
	      bus.publish(Event.AFTER_PHONE_DELETE_ERROR, { error: error });
	    },
	    beforeEmailCreate: function beforeEmailCreate() {
	      bus.publish(Event.BEFORE_EMAIL_CREATE);
	    },
	    afterEmailCreateSuccess: function afterEmailCreateSuccess(user) {
	      bus.publish(Event.AFTER_EMAIL_CREATE_SUCCESS, { user: user });
	    },
	    afterEmailCreateError: function afterEmailCreateError(error) {
	      bus.publish(Event.AFTER_EMAIL_CREATE_ERROR, { error: error });
	    },
	    beforeEmailEdit: function beforeEmailEdit() {
	      bus.publish(Event.BEFORE_EMAIL_EDIT);
	    },
	    afterEmailEditSuccess: function afterEmailEditSuccess(user) {
	      bus.publish(Event.AFTER_EMAIL_EDIT_SUCCESS, { user: user });
	    },
	    afterEmailEditError: function afterEmailEditError(error) {
	      bus.publish(Event.AFTER_EMAIL_EDIT_ERROR, { error: error });
	    },
	    beforeEmailDelete: function beforeEmailDelete() {
	      bus.publish(Event.BEFORE_EMAIL_DELETE);
	    },
	    afterEmailDeleteSuccess: function afterEmailDeleteSuccess(user) {
	      bus.publish(Event.AFTER_EMAIL_DELETE_SUCCESS, { user: user });
	    },
	    afterEmailDeleteError: function afterEmailDeleteError(error) {
	      bus.publish(Event.AFTER_EMAIL_DELETE_ERROR, { error: error });
	    }
	  };
	};

/***/ }),

/***/ 98:
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
//# sourceMappingURL=widget-bbm-personal-profile-ng.js.map