(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else if(typeof define === 'function' && define.amd)
		define("mock.data-bb-accessgroups-http-ng", ["vendor-bb-angular", "lib-bb-storage-ng"], factory);
	else if(typeof exports === 'object')
		exports["mock.data-bb-accessgroups-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else
		root["mock.data-bb-accessgroups-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
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
	exports.accessGroupsDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStorageNg = __webpack_require__(3);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _dataBbAccessgroupsHttp = __webpack_require__(4);
	
	var _dataBbAccessgroupsHttp2 = _interopRequireDefault(_dataBbAccessgroupsHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var accessGroupsDataModuleKey = 'data-bb-accessgroups-http-ng'; /* eslint-disable */
	var accessGroupsDataKey = exports.accessGroupsDataKey = 'data-bb-accessgroups-http-ng:accessGroupsData';
	
	exports.default = _vendorBbAngular2.default.module(accessGroupsDataModuleKey, [_libBbStorageNg2.default]).provider(accessGroupsDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  return {
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	    $get: ['$q', _libBbStorageNg.bbStorageServiceKey, '$httpParamSerializer',
	    /* into */
	    (0, _dataBbAccessgroupsHttp2.default)(config)]
	  };
	}]).name;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/* eslint-disable */
	exports.default = function (conf) {
	  return function (Promise, bbStorage, serializeParams) {
	    var _responses, _plugins, _ref;
	
	    // Base param constants
	    var baseUri = conf.baseUri || '';
	
	    var version = 'v2';
	
	    var schemas = {};
	
	    var STORAGE_KEY = 'MOCK_STATE_accessGroupsDataModuleKey';
	    var state = {
	      "{version}/accessgroups/data": [{
	        "dataAccessGroupId": "0955e686d31e4216b3dd5d66161d536d",
	        "name": "Salaries",
	        "description": "Contains accounts used for paying salaries",
	        "legalEntityId": "0955e686d31e68904h875d66161d536d",
	        "serviceAgreementId": "0889e686d31e4216b3dd5d66163d2b14",
	        "type": "ARRANGEMENTS",
	        "items": ["1cdb2224-8926-4b4d-a99f-1c9dfbbb4699"]
	      }, {
	        "dataAccessGroupId": "8675e686d31e378823kj5d66161d536d",
	        "name": "All Accounts",
	        "description": "Contains all accounts",
	        "legalEntityId": "4655e686d31e0998j8rt5d66161d536d",
	        "serviceAgreementId": "0889e686d31e4216b3dd5d66163d2b15",
	        "type": "ARRANGEMENTS",
	        "items": ["3cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "6c1261e8-7b6b-4c14-9bb4-e976d834c730"]
	      }],
	      "{version}/accessgroups/data-groups": [{
	        "id": "0955e686d31e4216b3dd5d66161d536d",
	        "name": "Salaries",
	        "description": "Contains accounts used for paying salaries",
	        "serviceAgreementId": "0889e686d31e4216b3dd5d66163d2b14",
	        "type": "ARRANGEMENTS",
	        "items": ["1cdb2224-8926-4b4d-a99f-1c9dfbbb4699"]
	      }, {
	        "id": "109104933dcc42bc89ac5f960a6e1776",
	        "name": "All Accounts",
	        "description": "Contains all accounts",
	        "serviceAgreementId": "0889e686d31e4216b3dd5d66163d2b15",
	        "type": "ARRANGEMENTS",
	        "items": ["3cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "6c1261e8-7b6b-4c14-9bb4-e976d834c730"]
	      }],
	      "{version}/accessgroups/function": [{
	        "functionAccessGroupId": "0955e686d31e4216b3dd5d66161d536d",
	        "name": "Manage Entitlements",
	        "description": "This profile will control managing of entitlements",
	        "legalEntityId": "0955e686d31e68904h875d66161d536d",
	        "serviceAgreementId": "0889e686d31e4216b3dd5d66163d2b14",
	        "permissions": [{
	          "functionId": "1004",
	          "assignedPrivileges": [{
	            "privilege": "execute"
	          }]
	        }, {
	          "functionId": "1011",
	          "assignedPrivileges": [{
	            "privilege": "view"
	          }]
	        }, {
	          "functionId": "1010",
	          "assignedPrivileges": [{
	            "privilege": "execute"
	          }]
	        }, {
	          "functionId": "1009",
	          "assignedPrivileges": [{
	            "privilege": "create"
	          }, {
	            "privilege": "view"
	          }, {
	            "privilege": "edit"
	          }]
	        }]
	      }, {
	        "functionAccessGroupId": "8675e686d31e378823kj5d66161d536d",
	        "name": "Viewer of Product Summary and Transactions",
	        "description": "This profile will control viewing of Product Summary and Transactions",
	        "legalEntityId": "4655e686d31e0998j8rt5d66161d536d",
	        "serviceAgreementId": "0889e686d31e4216b3dd5d66163d2258",
	        "permissions": [{
	          "functionId": "1006",
	          "assignedPrivileges": [{
	            "privilege": "view"
	          }]
	        }, {
	          "functionId": "1003",
	          "assignedPrivileges": [{
	            "privilege": "view"
	          }]
	        }]
	      }],
	      "{version}/accessgroups/function-groups": [{
	        "id": "0955e686d31e4216b3dd5d66161d536d",
	        "name": "Manage Entitlements",
	        "description": "This profile will control managing of entitlements",
	        "legalEntityId": "0955e686d31e68904h875d66161d536d",
	        "serviceAgreementId": "0889e686d31e4216b3dd5d66163d2b14",
	        "permissions": [{
	          "functionId": "1004",
	          "assignedPrivileges": [{
	            "privilege": "execute"
	          }]
	        }, {
	          "functionId": "1011",
	          "assignedPrivileges": [{
	            "privilege": "view"
	          }]
	        }, {
	          "functionId": "1010",
	          "assignedPrivileges": [{
	            "privilege": "execute"
	          }]
	        }, {
	          "functionId": "1009",
	          "assignedPrivileges": [{
	            "privilege": "create"
	          }, {
	            "privilege": "view"
	          }, {
	            "privilege": "edit"
	          }]
	        }]
	      }, {
	        "id": "8675e686d31e378823kj5d66161d536d",
	        "name": "Viewer of Product Summary and Transactions",
	        "description": "This profile will control viewing of Product Summary and Transactions",
	        "legalEntityId": "4655e686d31e0998j8rt5d66161d536d",
	        "serviceAgreementId": "0889e686d31e4216b3dd5d66163d2258",
	        "permissions": [{
	          "functionId": "1006",
	          "assignedPrivileges": [{
	            "privilege": "view"
	          }]
	        }, {
	          "functionId": "1003",
	          "assignedPrivileges": [{
	            "privilege": "view"
	          }]
	        }]
	      }],
	      "{version}/accessgroups/config/functions": [{
	        "functionId": "1002",
	        "functionCode": "payments.sepa",
	        "resource": "Payments",
	        "name": "SEPA CT",
	        "privileges": [{
	          "privilege": "view",
	          "limits": []
	        }, {
	          "privilege": "edit",
	          "limits": []
	        }, {
	          "privilege": "delete",
	          "limits": []
	        }, {
	          "privilege": "create",
	          "limits": [{
	            "limitType": "upper"
	          }]
	        }]
	      }, {
	        "functionId": "1006",
	        "functionCode": "product.summary",
	        "resource": "Product Summary",
	        "name": "Product Summary",
	        "privileges": [{
	          "privilege": "view",
	          "limits": []
	        }, {
	          "privilege": "edit",
	          "limits": []
	        }]
	      }, {
	        "functionId": "1013",
	        "functionCode": "audit",
	        "resource": "Audit",
	        "name": "Audit",
	        "privileges": [{
	          "privilege": "view",
	          "limits": []
	        }, {
	          "privilege": "create",
	          "limits": []
	        }]
	      }, {
	        "functionId": "1011",
	        "functionCode": "manage.legalentities",
	        "resource": "Legal Entity",
	        "name": "Manage Legal Entities",
	        "privileges": [{
	          "privilege": "view",
	          "limits": []
	        }]
	      }, {
	        "functionId": "1003",
	        "functionCode": "transactions",
	        "resource": "Transactions",
	        "name": "Transactions",
	        "privileges": [{
	          "privilege": "view",
	          "limits": []
	        }, {
	          "privilege": "edit",
	          "limits": []
	        }]
	      }, {
	        "functionId": "1005",
	        "functionCode": "contacts",
	        "resource": "Contacts",
	        "name": "Contacts",
	        "privileges": [{
	          "privilege": "delete",
	          "limits": []
	        }, {
	          "privilege": "view",
	          "limits": []
	        }, {
	          "privilege": "create",
	          "limits": []
	        }, {
	          "privilege": "edit",
	          "limits": []
	        }]
	      }, {
	        "functionId": "1012",
	        "functionCode": "manage.limits",
	        "resource": "Limits",
	        "name": "Manage Limits",
	        "privileges": [{
	          "privilege": "view",
	          "limits": []
	        }, {
	          "privilege": "create",
	          "limits": []
	        }, {
	          "privilege": "edit",
	          "limits": []
	        }, {
	          "privilege": "delete",
	          "limits": []
	        }]
	      }, {
	        "functionId": "1009",
	        "functionCode": "assign.permissions",
	        "resource": "Service Agreement",
	        "name": "Assign Permissions",
	        "privileges": [{
	          "privilege": "view",
	          "limits": []
	        }, {
	          "privilege": "create",
	          "limits": []
	        }, {
	          "privilege": "edit",
	          "limits": []
	        }]
	      }, {
	        "functionId": "1008",
	        "functionCode": "assign.pairs",
	        "resource": "Service Agreement",
	        "name": "Assign pairs of FAG/DAG",
	        "privileges": [{
	          "privilege": "view",
	          "limits": []
	        }, {
	          "privilege": "create",
	          "limits": []
	        }, {
	          "privilege": "edit",
	          "limits": []
	        }]
	      }, {
	        "functionId": "1010",
	        "functionCode": "manage.users",
	        "resource": "User",
	        "name": "Manage Users",
	        "privileges": [{
	          "privilege": "view",
	          "limits": []
	        }]
	      }, {
	        "functionId": "1004",
	        "functionCode": "entitlements",
	        "resource": "Entitlements",
	        "name": "Entitlements",
	        "privileges": [{
	          "privilege": "execute",
	          "limits": []
	        }]
	      }, {
	        "functionId": "1007",
	        "functionCode": "assign.users",
	        "resource": "Service Agreement",
	        "name": "Assign Users",
	        "privileges": [{
	          "privilege": "view",
	          "limits": []
	        }, {
	          "privilege": "create",
	          "limits": []
	        }, {
	          "privilege": "edit",
	          "limits": []
	        }]
	      }],
	      "{version}/accessgroups/users": [{
	        "id": "0955e686d31e4216b3dd5d66161d536d",
	        "serviceAgreementId": "7555e686d31e8932b3dd5d66161d536d",
	        "userId": "9885e686d31e4216b3dd5d66161d536d",
	        "dataAccessGroupsByFunctionAccessGroup": [{
	          "functionAccessGroupId": "0955e686d31e4216b3dd5d66161d536d",
	          "dataAccessGroupIds": ["0955e686d31e4216b3dd5d66161d536d"]
	        }]
	      }],
	      "{version}/accessgroups/serviceagreements": [{
	        "id": "951293e6521940e3ae0608f93ff0b215",
	        "name": "Broker deal 1",
	        "description": "Agreement between Backbase and Apple",
	        "creatorLegalEntity": "08e39c646f764f949dad968795b774f3",
	        "isMaster": false,
	        "providers": [{
	          "id": "f7877bfd963f41dab00e80dd2eee7099",
	          "users": ["42d1bf8e77174373b52d30b725e2e8b8", "8e8846a4d8c84c298c38320703b1f0a4"],
	          "admins": ["001"]
	        }, {
	          "id": "906f6d8630fc414fa169aa914e1de899",
	          "users": ["e34848fc2fc84109b1c9ced9f576880a", "0f51489b0dfc4529976e9c03989fd440"],
	          "admins": ["e34848fc2fc84109b1c9ced9f576880a"]
	        }],
	        "consumers": [{
	          "id": "906f6d8630fc414fa169aa914e1de899",
	          "admins": ["9a9769d52bd8435a8e8f1e4c9823db78"]
	        }, {
	          "id": "30cbd8be45444b7596f7066ec11002fb",
	          "dataAccessGroupFunctionAccessGroupPairs": [{
	            "functionAccessGroupId": "d53907a886c645b699f9d6979d7665b0",
	            "dataAccessGroupId": "96d64228fddd4b1e8b42a138ed2ae8cf"
	          }, {
	            "functionAccessGroupId": "367fbf175f3f424a85f15e966e29e5bb",
	            "dataAccessGroupId": "4b888ab4928b445688cb985f57dc88a5"
	          }],
	          "admins": ["6488dddc61744cc5824499ad566cbb21"]
	        }],
	        "status": "ENABLED"
	      }, {
	        "id": "9e4fb91794574b98ae8a1e42bbe96147",
	        "name": "Broker deal 2",
	        "description": "Agreement between Backbase and HP",
	        "creatorLegalEntity": "1b64e08ae5e54a1a9f53a1c41671ccef",
	        "isMaster": false,
	        "providers": [{
	          "id": "3307db45da244fdc970c7eb678c01004",
	          "users": ["92e8b3d2e1344a3db3d2472a024f08fd", "5d62b565792c46ebb9ad9fccadb2ae86"],
	          "admins": ["92e8b3d2e1344a3db3d2472a024f08fd"]
	        }, {
	          "id": "de2400e0463e47978d2ad95c07f4d4ff",
	          "users": ["5d62b565792c46ebb9ad9fccadb2ae86", "8930a4a73730493a9b1fa3ad11753997"],
	          "admins": ["5d62b565792c46ebb9ad9fccadb2ae86"]
	        }],
	        "consumers": [{
	          "id": "6b86b5911a7c42a3a8eed74e18b4759d",
	          "dataAccessGroupFunctionAccessGroupPairs": [{
	            "functionAccessGroupId": "1ec227347b8b41be8c7d641de6d852a7",
	            "dataAccessGroupId": "155714e814d74e5f9be8e0a87064621f"
	          }, {
	            "functionAccessGroupId": "bd5d7ab13bf54b4f84f2adb1843503d0",
	            "dataAccessGroupId": "ff3118db535849a385b20569f7889ccf"
	          }],
	          "admins": ["86f749800fc34fb88dd1f82f8e818324"]
	        }, {
	          "id": "90429df56913419cbea1e6028a539542",
	          "dataAccessGroupFunctionAccessGroupPairs": [{
	            "functionAccessGroupId": "a18be0f00885473593a82ce2d5b11f48",
	            "dataAccessGroupId": "eec11e8543fb426da4606f3d649d9100"
	          }, {
	            "functionAccessGroupId": "a18be0f00885473593a82ce2d5b11f48",
	            "dataAccessGroupId": "654f9921077740ac8eccee288f51fcf6"
	          }],
	          "admins": ["86f749800fc34fb88dd1f82f8e818324"]
	        }],
	        "status": "ENABLED"
	      }],
	      "{version}/accessgroups/users/privileges": [{
	        "privilege": "execute"
	      }, {
	        "privilege": "read"
	      }],
	      "{version}/accessgroups/users/user-privileges": [{
	        "privilege": "execute"
	      }, {
	        "privilege": "read"
	      }],
	      "{version}/accessgroups/users/privileges/arrangements": [{
	        "arrangementId": "9fa0961eb3d04dd3a5e48748d27e7275",
	        "privileges": [{
	          "privilege": "view"
	        }]
	      }, {
	        "arrangementId": "149f7e8d26904fc38bd0fdfc83394116",
	        "privileges": [{
	          "privilege": "view"
	        }]
	      }],
	      "{version}/accessgroups/users/user-privileges/arrangements": [{
	        "arrangementId": "9fa0961eb3d04dd3a5e48748d27e7275",
	        "privileges": [{
	          "privilege": "view"
	        }]
	      }, {
	        "arrangementId": "149f7e8d26904fc38bd0fdfc83394116",
	        "privileges": [{
	          "privilege": "view"
	        }]
	      }],
	      "{version}/accessgroups/users/permissions/summary": [{
	        "resource": "Contacts",
	        "function": "Contacts",
	        "permissions": {
	          "view": true,
	          "edit": true
	        }
	      }, {
	        "resource": "Payments",
	        "function": "US Domestic Wire",
	        "permissions": {
	          "create": true,
	          "view": true,
	          "approve": true
	        }
	      }, {
	        "resource": "Payments",
	        "function": "US Foreign Wire",
	        "permissions": {
	          "create": true,
	          "view": true,
	          "approve": true
	        }
	      }, {
	        "resource": "Payments",
	        "function": "SEPA CT",
	        "permissions": {
	          "create": true,
	          "view": true,
	          "approve": true
	        }
	      }, {
	        "resource": "Entitlements",
	        "function": "ManageDAG",
	        "permissions": {
	          "view": true,
	          "edit": true,
	          "create": true,
	          "delete": true
	        }
	      }],
	      "{version}/accessgroups/serviceagreements/admins/me": [{
	        "id": "0955e686d31e4216b3dd5d66161d536d",
	        "name": "Service Agreement 1",
	        "description": "Service Agreement between Backbase and Endava",
	        "isMaster": false,
	        "roles": ["provider", "consumer"],
	        "status": "ENABLED"
	      }, {
	        "id": "4655e686d31e0998j8rt5d66161d536d",
	        "name": "Service Agreement 2",
	        "description": "Service Agreement 2",
	        "isMaster": false,
	        "roles": ["provider"],
	        "status": "ENABLED"
	      }, {
	        "id": "4655e686d31e0998j8rt5d66161d536d",
	        "name": "Master Service Agreement",
	        "description": "Master Service Agreement",
	        "isMaster": true,
	        "roles": [],
	        "status": "ENABLED"
	      }],
	      "{version}/accessgroups/serviceagreements/{serviceAgreementId}/participants": [{
	        "id": "a1198a20-5a40-4eb7-b47f-a553db958963",
	        "externalId": "KPMG",
	        "name": "KPMG",
	        "roles": ["provider", "consumer"]
	      }, {
	        "id": "a1198a20-5a40-4eb7-b47f-a553db920429",
	        "externalId": "Backbase",
	        "name": "Backbase",
	        "roles": ["provider"]
	      }],
	      "{version}/accessgroups/serviceagreements/{serviceAgreementId}/admins": [{
	        "id": "01d70d09997b41cb83ea0e1db84626b3",
	        "externalId": "U0000011",
	        "legalEntityId": "a1198a20-5a40-4eb7-b47f-a553db958963",
	        "fullName": "David"
	      }, {
	        "id": "bbf6a23536fa49029abf9c03f97a82fa",
	        "externalId": "U0000012",
	        "legalEntityId": "a1198a20-5a40-4eb7-b47f-a553db958963",
	        "fullName": "Paul"
	      }, {
	        "id": "bc4ce9091eb04754a5a9b9422099f0fa",
	        "externalId": "U0000013",
	        "legalEntityId": "a1198a20-5a40-4eb7-b47f-a553db920429",
	        "fullName": "Wayne"
	      }],
	      "{version}/accessgroups/serviceagreements/context/users": [{
	        "id": "01d70d09997b41cb83ea0e1db84626b3",
	        "externalId": "U0000011",
	        "legalEntityId": "f63f3fc550794eed84bf848dbbba9bbd",
	        "fullName": "David"
	      }, {
	        "id": "bbf6a23536fa49029abf9c03f97a82fa",
	        "externalId": "U0000012",
	        "legalEntityId": "f63f3fc550794eed84bf848dbbba9bbd",
	        "fullName": "Paul"
	      }, {
	        "id": "bc4ce9091eb04754a5a9b9422099f0fa",
	        "externalId": "U0000013",
	        "legalEntityId": "951293e6521940e3ae0608f93ff0b215",
	        "fullName": "Wayne"
	      }],
	      "{version}/accessgroups/usercontext/serviceagreements": [{
	        "id": "a1198a205a404eb7b47fa553db920429",
	        "name": "Online Banking Service Agreement",
	        "description": "Service Agreement between Online Banking and Backbase",
	        "isMaster": false
	      }, {
	        "id": "37115f7b556a4e11ba0bfd07e2567b1d",
	        "name": "Doe Corporation Service Agreement",
	        "description": "Service Agreement for Doe Corp.",
	        "isMaster": true
	      }],
	      "{version}/accessgroups/usercontext/serviceagreements/{serviceAgreementId}/legalentities": [{
	        "id": "5d84b1fe3c0247b3acad052da0de8c5d",
	        "name": "Mortgages Department"
	      }, {
	        "id": "d686fbe7998749648c8620ae9198dc97",
	        "name": "Stock Exchange Department"
	      }, {
	        "id": "ca84950ece3a41a9bf7eae0daf9de7e0",
	        "name": "Branch Information"
	      }, {
	        "id": "bd756fd805f94064890f8b72a443736f",
	        "name": "Bulk Transactions Department"
	      }, {
	        "id": "4d4b2438f3402fea99d53d4a6be1f4cf",
	        "name": "Certificates of Deposit"
	      }, {
	        "id": "b8ec2708ecea241daade415abcbc2260",
	        "name": "Operations/Customer Service Department"
	      }, {
	        "id": "88f7dd35ba5a1693bd106bb3f9ccc7ec",
	        "name": "Operations Department"
	      }, {
	        "id": "6dc4d18ddfac2f52b6176c7b85a2ab9c",
	        "name": "ATM Facilities"
	      }, {
	        "id": "da5dcd1f1bc226bfb14a7d1a6da2027e",
	        "name": "Forex Management Department"
	      }, {
	        "id": "fb402d0d3a0c11dbbcfbead1b6ac689e",
	        "name": "Risk Management Department"
	      }, {
	        "id": "06dbccd58afe5bf081ab685e2db09a3a",
	        "name": "Debit Cards"
	      }, {
	        "id": "1db8eecd901d4fc6ba517a8f7e8aac8b",
	        "name": "Inspection Department"
	      }, {
	        "id": "b54f4faee7962cdcaaedece5ceecd8a8",
	        "name": "Informatiion Technology Department"
	      }, {
	        "id": "fdea68b35d2b1d3287d33bb979bd29b3",
	        "name": "Personnel/HRD Department"
	      }, {
	        "id": "fa447c1bff0713cb8dc7bddbb6fbc064",
	        "name": "Home Loans and Services"
	      }]
	    };
	
	    bbStorage.subscribe(STORAGE_KEY, function (newState) {
	      state = newState;
	    });
	
	    var persistState = function persistState(newState) {
	      bbStorage.setItem(STORAGE_KEY, newState);
	    };
	
	    var responses = (_responses = {
	
	      getAccessgroupsData: [{ "status": 200, "data": [{ "dataAccessGroupId": "0955e686d31e4216b3dd5d66161d536d", "name": "Salaries", "description": "Contains accounts used for paying salaries", "legalEntityId": "0955e686d31e68904h875d66161d536d", "serviceAgreementId": "0889e686d31e4216b3dd5d66163d2b14", "type": "ARRANGEMENTS", "items": ["1cdb2224-8926-4b4d-a99f-1c9dfbbb4699"] }, { "dataAccessGroupId": "8675e686d31e378823kj5d66161d536d", "name": "All Accounts", "description": "Contains all accounts", "legalEntityId": "4655e686d31e0998j8rt5d66161d536d", "serviceAgreementId": "0889e686d31e4216b3dd5d66163d2b15", "type": "ARRANGEMENTS", "items": ["3cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "6c1261e8-7b6b-4c14-9bb4-e976d834c730"] }] }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      postAccessgroupsDataRecord: [{ "status": 201, "data": { "id": "0955e686d31e4216b3dd5d66161d536d" } }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      postAccessgroupsDataGroupsRecord: [{ "status": 201, "data": { "id": "0955e686d31e4216b3dd5d66161d536d" } }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 500, "data": null }],
	
	      putAccessgroupsDataGroupsRecord: [{ "status": 207, "data": null }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      getAccessgroupsDataGroups: [{ "status": 200, "data": [{ "id": "0955e686d31e4216b3dd5d66161d536d", "name": "Salaries", "description": "Contains accounts used for paying salaries", "serviceAgreementId": "0889e686d31e4216b3dd5d66163d2b14", "type": "ARRANGEMENTS", "items": ["1cdb2224-8926-4b4d-a99f-1c9dfbbb4699"] }, { "id": "109104933dcc42bc89ac5f960a6e1776", "name": "All Accounts", "description": "Contains all accounts", "serviceAgreementId": "0889e686d31e4216b3dd5d66163d2b15", "type": "ARRANGEMENTS", "items": ["3cdb2224-8926-4b4d-a99f-1c9dfbbb4699", "6c1261e8-7b6b-4c14-9bb4-e976d834c730"] }] }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 500, "data": null }],
	
	      getAccessgroupsFunction: [{ "status": 200, "data": [{ "functionAccessGroupId": "0955e686d31e4216b3dd5d66161d536d", "name": "Manage Entitlements", "description": "This profile will control managing of entitlements", "legalEntityId": "0955e686d31e68904h875d66161d536d", "serviceAgreementId": "0889e686d31e4216b3dd5d66163d2b14", "permissions": [{ "functionId": "1004", "assignedPrivileges": [{ "privilege": "execute" }] }, { "functionId": "1011", "assignedPrivileges": [{ "privilege": "view" }] }, { "functionId": "1010", "assignedPrivileges": [{ "privilege": "execute" }] }, { "functionId": "1009", "assignedPrivileges": [{ "privilege": "create" }, { "privilege": "view" }, { "privilege": "edit" }] }] }, { "functionAccessGroupId": "8675e686d31e378823kj5d66161d536d", "name": "Viewer of Product Summary and Transactions", "description": "This profile will control viewing of Product Summary and Transactions", "legalEntityId": "4655e686d31e0998j8rt5d66161d536d", "serviceAgreementId": "0889e686d31e4216b3dd5d66163d2258", "permissions": [{ "functionId": "1006", "assignedPrivileges": [{ "privilege": "view" }] }, { "functionId": "1003", "assignedPrivileges": [{ "privilege": "view" }] }] }] }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      postAccessgroupsFunctionRecord: [{ "status": 201, "data": { "id": "0955e686d31e4216b3dd5d66161d536d" } }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      getAccessgroupsFunctionGroups: [{ "status": 200, "data": [{ "id": "0955e686d31e4216b3dd5d66161d536d", "name": "Manage Entitlements", "description": "This profile will control managing of entitlements", "legalEntityId": "0955e686d31e68904h875d66161d536d", "serviceAgreementId": "0889e686d31e4216b3dd5d66163d2b14", "permissions": [{ "functionId": "1004", "assignedPrivileges": [{ "privilege": "execute" }] }, { "functionId": "1011", "assignedPrivileges": [{ "privilege": "view" }] }, { "functionId": "1010", "assignedPrivileges": [{ "privilege": "execute" }] }, { "functionId": "1009", "assignedPrivileges": [{ "privilege": "create" }, { "privilege": "view" }, { "privilege": "edit" }] }] }, { "id": "8675e686d31e378823kj5d66161d536d", "name": "Viewer of Product Summary and Transactions", "description": "This profile will control viewing of Product Summary and Transactions", "legalEntityId": "4655e686d31e0998j8rt5d66161d536d", "serviceAgreementId": "0889e686d31e4216b3dd5d66163d2258", "permissions": [{ "functionId": "1006", "assignedPrivileges": [{ "privilege": "view" }] }, { "functionId": "1003", "assignedPrivileges": [{ "privilege": "view" }] }] }] }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 500, "data": null }],
	
	      postAccessgroupsFunctionGroupsRecord: [{ "status": 201, "data": { "id": "0955e686d31e4216b3dd5d66161d536d" } }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 500, "data": null }],
	
	      putAccessgroupsFunctionGroupsRecord: [{ "status": 207, "data": null }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      getAccessgroupsConfigFunctions: [{ "status": 200, "data": [{ "functionId": "1002", "functionCode": "payments.sepa", "resource": "Payments", "name": "SEPA CT", "privileges": [{ "privilege": "view", "limits": [] }, { "privilege": "edit", "limits": [] }, { "privilege": "delete", "limits": [] }, { "privilege": "create", "limits": [{ "limitType": "upper" }] }] }, { "functionId": "1006", "functionCode": "product.summary", "resource": "Product Summary", "name": "Product Summary", "privileges": [{ "privilege": "view", "limits": [] }, { "privilege": "edit", "limits": [] }] }, { "functionId": "1013", "functionCode": "audit", "resource": "Audit", "name": "Audit", "privileges": [{ "privilege": "view", "limits": [] }, { "privilege": "create", "limits": [] }] }, { "functionId": "1011", "functionCode": "manage.legalentities", "resource": "Legal Entity", "name": "Manage Legal Entities", "privileges": [{ "privilege": "view", "limits": [] }] }, { "functionId": "1003", "functionCode": "transactions", "resource": "Transactions", "name": "Transactions", "privileges": [{ "privilege": "view", "limits": [] }, { "privilege": "edit", "limits": [] }] }, { "functionId": "1005", "functionCode": "contacts", "resource": "Contacts", "name": "Contacts", "privileges": [{ "privilege": "delete", "limits": [] }, { "privilege": "view", "limits": [] }, { "privilege": "create", "limits": [] }, { "privilege": "edit", "limits": [] }] }, { "functionId": "1012", "functionCode": "manage.limits", "resource": "Limits", "name": "Manage Limits", "privileges": [{ "privilege": "view", "limits": [] }, { "privilege": "create", "limits": [] }, { "privilege": "edit", "limits": [] }, { "privilege": "delete", "limits": [] }] }, { "functionId": "1009", "functionCode": "assign.permissions", "resource": "Service Agreement", "name": "Assign Permissions", "privileges": [{ "privilege": "view", "limits": [] }, { "privilege": "create", "limits": [] }, { "privilege": "edit", "limits": [] }] }, { "functionId": "1008", "functionCode": "assign.pairs", "resource": "Service Agreement", "name": "Assign pairs of FAG/DAG", "privileges": [{ "privilege": "view", "limits": [] }, { "privilege": "create", "limits": [] }, { "privilege": "edit", "limits": [] }] }, { "functionId": "1010", "functionCode": "manage.users", "resource": "User", "name": "Manage Users", "privileges": [{ "privilege": "view", "limits": [] }] }, { "functionId": "1004", "functionCode": "entitlements", "resource": "Entitlements", "name": "Entitlements", "privileges": [{ "privilege": "execute", "limits": [] }] }, { "functionId": "1007", "functionCode": "assign.users", "resource": "Service Agreement", "name": "Assign Users", "privileges": [{ "privilege": "view", "limits": [] }, { "privilege": "create", "limits": [] }, { "privilege": "edit", "limits": [] }] }] }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      postAccessgroupsUsersRecord: [{ "status": 201, "data": { "id": "0955e686d31e4216b3dd5d66161d536d" } }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      getAccessgroupsUsers: [{ "status": 200, "data": [{ "id": "0955e686d31e4216b3dd5d66161d536d", "serviceAgreementId": "7555e686d31e8932b3dd5d66161d536d", "userId": "9885e686d31e4216b3dd5d66161d536d", "dataAccessGroupsByFunctionAccessGroup": [{ "functionAccessGroupId": "0955e686d31e4216b3dd5d66161d536d", "dataAccessGroupIds": ["0955e686d31e4216b3dd5d66161d536d"] }] }] }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      postAccessgroupsServiceagreementsRecord: [{ "status": 201, "data": { "id": "0955e686d31e4216b3dd5d66161d536d" } }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      getAccessgroupsServiceagreements: [{ "status": 200, "data": [{ "id": "951293e6521940e3ae0608f93ff0b215", "name": "Broker deal 1", "description": "Agreement between Backbase and Apple", "creatorLegalEntity": "08e39c646f764f949dad968795b774f3", "isMaster": false, "providers": [{ "id": "f7877bfd963f41dab00e80dd2eee7099", "users": ["42d1bf8e77174373b52d30b725e2e8b8", "8e8846a4d8c84c298c38320703b1f0a4"], "admins": ["001"] }, { "id": "906f6d8630fc414fa169aa914e1de899", "users": ["e34848fc2fc84109b1c9ced9f576880a", "0f51489b0dfc4529976e9c03989fd440"], "admins": ["e34848fc2fc84109b1c9ced9f576880a"] }], "consumers": [{ "id": "906f6d8630fc414fa169aa914e1de899", "admins": ["9a9769d52bd8435a8e8f1e4c9823db78"] }, { "id": "30cbd8be45444b7596f7066ec11002fb", "dataAccessGroupFunctionAccessGroupPairs": [{ "functionAccessGroupId": "d53907a886c645b699f9d6979d7665b0", "dataAccessGroupId": "96d64228fddd4b1e8b42a138ed2ae8cf" }, { "functionAccessGroupId": "367fbf175f3f424a85f15e966e29e5bb", "dataAccessGroupId": "4b888ab4928b445688cb985f57dc88a5" }], "admins": ["6488dddc61744cc5824499ad566cbb21"] }], "status": "ENABLED" }, { "id": "9e4fb91794574b98ae8a1e42bbe96147", "name": "Broker deal 2", "description": "Agreement between Backbase and HP", "creatorLegalEntity": "1b64e08ae5e54a1a9f53a1c41671ccef", "isMaster": false, "providers": [{ "id": "3307db45da244fdc970c7eb678c01004", "users": ["92e8b3d2e1344a3db3d2472a024f08fd", "5d62b565792c46ebb9ad9fccadb2ae86"], "admins": ["92e8b3d2e1344a3db3d2472a024f08fd"] }, { "id": "de2400e0463e47978d2ad95c07f4d4ff", "users": ["5d62b565792c46ebb9ad9fccadb2ae86", "8930a4a73730493a9b1fa3ad11753997"], "admins": ["5d62b565792c46ebb9ad9fccadb2ae86"] }], "consumers": [{ "id": "6b86b5911a7c42a3a8eed74e18b4759d", "dataAccessGroupFunctionAccessGroupPairs": [{ "functionAccessGroupId": "1ec227347b8b41be8c7d641de6d852a7", "dataAccessGroupId": "155714e814d74e5f9be8e0a87064621f" }, { "functionAccessGroupId": "bd5d7ab13bf54b4f84f2adb1843503d0", "dataAccessGroupId": "ff3118db535849a385b20569f7889ccf" }], "admins": ["86f749800fc34fb88dd1f82f8e818324"] }, { "id": "90429df56913419cbea1e6028a539542", "dataAccessGroupFunctionAccessGroupPairs": [{ "functionAccessGroupId": "a18be0f00885473593a82ce2d5b11f48", "dataAccessGroupId": "eec11e8543fb426da4606f3d649d9100" }, { "functionAccessGroupId": "a18be0f00885473593a82ce2d5b11f48", "dataAccessGroupId": "654f9921077740ac8eccee288f51fcf6" }], "admins": ["86f749800fc34fb88dd1f82f8e818324"] }], "status": "ENABLED" }] }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 500, "data": null }],
	
	      postAccessgroupsUsercontextRecord: [{ "status": 204, "data": null }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      getAccessgroupsDataRecord: [{ "status": 200, "data": { "dataAccessGroupId": "0955e686d31e4216b3dd5d66161d536d", "name": "Data group 1", "description": "Simple data group", "legalEntityId": "4655e686d31e0998j8rt5d66161d536d", "serviceAgreementId": "0889e686d31e4216b3dd5d66163d2b14", "type": "ARRANGEMENTS", "items": ["e6659eea893c4da48f9b7fd425de4677", "8eb58b1d048d4112a2f7591d465c3f14"] } }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      putAccessgroupsDataRecord: [{ "status": 200, "data": null }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      deleteAccessgroupsDataRecord: [{ "status": 200, "data": null }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      postAccessgroupsDataGroupsDeleteRecord: [{ "status": 207, "data": null }, { "status": 400, "data": null }, { "status": 500, "data": null }],
	
	      getAccessgroupsDataGroupsRecord: [{ "status": 200, "data": { "id": "0955e686d31e4216b3dd5d66161d536d", "name": "Data group 1", "description": "Simple data group", "serviceAgreementId": "0889e686d31e4216b3dd5d66163d2b14", "type": "ARRANGEMENTS", "items": ["e6659eea893c4da48f9b7fd425de4677", "8eb58b1d048d4112a2f7591d465c3f14"] } }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 500, "data": null }]
	
	    }, _defineProperty(_responses, 'putAccessgroupsDataGroupsRecord', [{ "status": 200, "data": null }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'deleteAccessgroupsDataGroupsRecord', [{ "status": 200, "data": null }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'getAccessgroupsFunctionRecord', [{ "status": 200, "data": { "functionAccessGroupId": "0955e686d31e4216b3dd5d66161d536d", "name": "Function Group", "description": "Some description for Function Group", "legalEntityId": "8675e686d31e378823kj5d66161d536d", "serviceAgreementId": "0889e686d31e4216b3dd5d66163d2b14", "permissions": [{ "functionId": "1", "assignedPrivileges": [{ "privilege": "view" }, { "privilege": "execute" }] }, { "functionId": "2", "assignedPrivileges": [{ "privilege": "view", "limits": [{ "limitType": "daily", "amount": 500 }, { "limitType": "upper", "amount": 200000 }, { "limitType": "weekly", "amount": 20000 }] }] }] } }, { "status": 400, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'putAccessgroupsFunctionRecord', [{ "status": 200, "data": null }, { "status": 400, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'deleteAccessgroupsFunctionRecord', [{ "status": 200, "data": null }, { "status": 400, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'postAccessgroupsFunctionGroupsDeleteRecord', [{ "status": 207, "data": null }, { "status": 400, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'getAccessgroupsFunctionGroupsRecord', [{ "status": 200, "data": { "id": "0955e686d31e4216b3dd5d66161d536d", "name": "Manage Entitlements", "description": "This profile will control managing of entitlements", "legalEntityId": "0955e686d31e68904h875d66161d536d", "serviceAgreementId": "0889e686d31e4216b3dd5d66163d2b14", "permissions": [{ "functionId": "1004", "assignedPrivileges": [{ "privilege": "execute" }] }, { "functionId": "1011", "assignedPrivileges": [{ "privilege": "view" }] }, { "functionId": "1010", "assignedPrivileges": [{ "privilege": "execute" }] }, { "functionId": "1009", "assignedPrivileges": [{ "privilege": "create" }, { "privilege": "view" }, { "privilege": "edit" }] }] } }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'putAccessgroupsFunctionGroupsRecord', [{ "status": 200, "data": null }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'deleteAccessgroupsFunctionGroupsRecord', [{ "status": 200, "data": null }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'getAccessgroupsUsersRecord', [{ "status": 200, "data": { "id": "0955e686d31e4216b3dd5d66161d536d", "serviceAgreementId": "4655e686d31e0998j8rt5d66161d536d", "userId": "0955e686d31e4216b3dd5d66161d536d", "dataAccessGroupsByFunctionAccessGroup": [{ "functionAccessGroupId": "4655e686d31e0998j8rt5d66161d536d", "dataAccessGroupIds": ["0955e686d31e4216b3dd5d66161d536d", "9873j990d31e8909b3dd5d66161d5845l"] }, { "functionAccessGroupId": "0955e686d31e4216b3dd5d66161d536d", "dataAccessGroupIds": ["9873j990d31e7902b3dd5d66161d5845l", "6604c957d31e8909m5jj5d66161d5845l"] }] } }, { "status": 400, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'getAccessgroupsUsersPrivileges', [{ "status": 200, "data": [{ "privilege": "execute" }, { "privilege": "read" }] }, { "status": 400, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'getAccessgroupsUsersUserPrivileges', [{ "status": 200, "data": [{ "privilege": "execute" }, { "privilege": "read" }] }, { "status": 400, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'getAccessgroupsUsersPermissions', [{ "status": 200, "data": null }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'putAccessgroupsUsersPermissionsRecord', [{ "status": 207, "data": null }, { "status": 400, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'getAccessgroupsUsersUserPermissions', [{ "status": 200, "data": null }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'postAccessgroupsUsersFunctionRecord', [{ "status": 200, "data": null }, { "status": 400, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'postAccessgroupsUsersDataRecord', [{ "status": 200, "data": null }, { "status": 400, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'getAccessgroupsUsersPrivilegesArrangements', [{ "status": 200, "data": [{ "arrangementId": "9fa0961eb3d04dd3a5e48748d27e7275", "privileges": [{ "privilege": "view" }] }, { "arrangementId": "149f7e8d26904fc38bd0fdfc83394116", "privileges": [{ "privilege": "view" }] }] }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'getAccessgroupsUsersUserPrivilegesArrangements', [{ "status": 200, "data": [{ "arrangementId": "9fa0961eb3d04dd3a5e48748d27e7275", "privileges": [{ "privilege": "view" }] }, { "arrangementId": "149f7e8d26904fc38bd0fdfc83394116", "privileges": [{ "privilege": "view" }] }] }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'getAccessgroupsUsersPermissionsSummary', [{ "status": 200, "data": [{ "resource": "Contacts", "function": "Contacts", "permissions": { "view": true, "edit": true } }, { "resource": "Payments", "function": "US Domestic Wire", "permissions": { "create": true, "view": true, "approve": true } }, { "resource": "Payments", "function": "US Foreign Wire", "permissions": { "create": true, "view": true, "approve": true } }, { "resource": "Payments", "function": "SEPA CT", "permissions": { "create": true, "view": true, "approve": true } }, { "resource": "Entitlements", "function": "ManageDAG", "permissions": { "view": true, "edit": true, "create": true, "delete": true } }] }, { "status": 400, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'getAccessgroupsServiceagreementsRecord', [{ "status": 200, "data": { "id": "a1198a20-5a40-4eb7-b47f-a553db920429", "name": "Broker deal 1", "description": "Agreement between Backbase and Apple", "creatorLegalEntity": "6e83bf0d-0d77-4320-b854-4a704e1d50c3", "isMaster": false, "providers": [{ "id": "45144ce2-8295-462f-82cc-975be1ac8d12", "users": ["0bc54fc6-d891-4b92-9256-bc7d29520fc9", "3ce4a93f-9020-445b-8dd2-c7f4dfefaad3"], "admins": ["52db060c-4d2f-4c42-bb30-4ec9a4fbddc0"] }, { "id": "76dd853e-9acc-4f69-86fe-12c647f5703c", "users": ["0bc54fc6-d891-4b92-9256-bc7d29520fc9", "3d247967-75e9-4d90-9872-bf2c4e713f8f"], "admins": ["bca7ecde-7581-4d14-a124-8d684f4aeb7a"] }], "consumers": [{ "id": "c7a382786d514262b75ab9531b749a2b", "admins": ["ab8d806d-923a-4796-8609-d471af859c5c"] }, { "id": "89a382786d514262b75ab9531b749a2b", "dataAccessGroupFunctionAccessGroupPairs": [{ "functionAccessGroupId": "8675e686d31e378823kj5d66161d536d", "dataAccessGroupId": "0955e686d31e4216b3dd5d66161d536d" }], "admins": ["01d70d09-997b-41cb-83ea-0e1db84626b3"] }], "status": "ENABLED" } }, { "status": 404, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'putAccessgroupsServiceagreementsRecord', [{ "status": 200, "data": null }, { "status": 400, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'getAccessgroupsServiceagreementsContext', [{ "status": 200, "data": { "id": "a1198a20-5a40-4eb7-b47f-a553db920429", "name": "Broker deal 1", "description": "Agreement between Backbase and Apple", "creatorLegalEntity": "6e83bf0d-0d77-4320-b854-4a704e1d50c3", "isMaster": false, "providers": [{ "id": "45144ce2-8295-462f-82cc-975be1ac8d12", "users": ["0bc54fc6-d891-4b92-9256-bc7d29520fc9", "3ce4a93f-9020-445b-8dd2-c7f4dfefaad3"], "admins": ["52db060c-4d2f-4c42-bb30-4ec9a4fbddc0"] }, { "id": "76dd853e-9acc-4f69-86fe-12c647f5703c", "users": ["0bc54fc6-d891-4b92-9256-bc7d29520fc9", "3d247967-75e9-4d90-9872-bf2c4e713f8f"], "admins": ["bca7ecde-7581-4d14-a124-8d684f4aeb7a"] }], "consumers": [{ "id": "c7a382786d514262b75ab9531b749a2b", "admins": ["ab8d806d-923a-4796-8609-d471af859c5c"] }, { "id": "89a382786d514262b75ab9531b749a2b", "dataAccessGroupFunctionAccessGroupPairs": [{ "functionAccessGroupId": "8675e686d31e378823kj5d66161d536d", "dataAccessGroupId": "0955e686d31e4216b3dd5d66161d536d" }], "admins": ["01d70d09-997b-41cb-83ea-0e1db84626b3"] }], "status": "ENABLED" } }, { "status": 404, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'getAccessgroupsServiceagreementsRoles', [{ "status": 200, "data": { "roles": ["provider", "consumer"] } }, { "status": 403, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'getAccessgroupsServiceagreementsAdminsMe', [{ "status": 200, "data": [{ "id": "0955e686d31e4216b3dd5d66161d536d", "name": "Service Agreement 1", "description": "Service Agreement between Backbase and Endava", "isMaster": false, "roles": ["provider", "consumer"], "status": "ENABLED" }, { "id": "4655e686d31e0998j8rt5d66161d536d", "name": "Service Agreement 2", "description": "Service Agreement 2", "isMaster": false, "roles": ["provider"], "status": "ENABLED" }, { "id": "4655e686d31e0998j8rt5d66161d536d", "name": "Master Service Agreement", "description": "Master Service Agreement", "isMaster": true, "roles": [], "status": "ENABLED" }] }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'postAccessgroupsServiceagreementsIngestServiceagreementsRecord', [{ "status": 201, "data": { "id": "0955e686d31e4216b3dd5d66161d536d" } }, { "status": 400, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'getAccessgroupsServiceagreementsParticipants', [{ "status": 200, "data": [{ "id": "a1198a20-5a40-4eb7-b47f-a553db958963", "externalId": "KPMG", "name": "KPMG", "roles": ["provider", "consumer"] }, { "id": "a1198a20-5a40-4eb7-b47f-a553db920429", "externalId": "Backbase", "name": "Backbase", "roles": ["provider"] }] }, { "status": 404, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'getAccessgroupsServiceagreementsAdmins', [{ "status": 200, "data": [{ "id": "01d70d09997b41cb83ea0e1db84626b3", "externalId": "U0000011", "legalEntityId": "a1198a20-5a40-4eb7-b47f-a553db958963", "fullName": "David" }, { "id": "bbf6a23536fa49029abf9c03f97a82fa", "externalId": "U0000012", "legalEntityId": "a1198a20-5a40-4eb7-b47f-a553db958963", "fullName": "Paul" }, { "id": "bc4ce9091eb04754a5a9b9422099f0fa", "externalId": "U0000013", "legalEntityId": "a1198a20-5a40-4eb7-b47f-a553db920429", "fullName": "Wayne" }] }, { "status": 404, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'putAccessgroupsServiceagreementsAdminsRecord', [{ "status": 200, "data": null }, { "status": 400, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'getAccessgroupsServiceagreementsContextUsers', [{ "status": 200, "data": [{ "id": "01d70d09997b41cb83ea0e1db84626b3", "externalId": "U0000011", "legalEntityId": "f63f3fc550794eed84bf848dbbba9bbd", "fullName": "David" }, { "id": "bbf6a23536fa49029abf9c03f97a82fa", "externalId": "U0000012", "legalEntityId": "f63f3fc550794eed84bf848dbbba9bbd", "fullName": "Paul" }, { "id": "bc4ce9091eb04754a5a9b9422099f0fa", "externalId": "U0000013", "legalEntityId": "951293e6521940e3ae0608f93ff0b215", "fullName": "Wayne" }] }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'putAccessgroupsServiceagreementsContextUsersRecord', [{ "status": 200, "data": null }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'deleteAccessgroupsServiceagreementsContextUsersRecord', [{ "status": 200, "data": null }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'postAccessgroupsServiceagreementsIngestServiceagreementsUsersAddRecord', [{ "status": 207, "data": null }, { "status": 400, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'postAccessgroupsServiceagreementsIngestServiceagreementsUsersRemoveRecord', [{ "status": 207, "data": null }, { "status": 400, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'getAccessgroupsServiceagreementsExternalRecord', [{ "status": 200, "data": { "id": "a1198a20-5a40-4eb7-b47f-a553db920429", "name": "Broker deal 1", "description": "Agreement between Backbase and Apple", "creatorLegalEntity": "6e83bf0d-0d77-4320-b854-4a704e1d50c3", "isMaster": false, "providers": [{ "id": "45144ce2-8295-462f-82cc-975be1ac8d12", "users": ["0bc54fc6-d891-4b92-9256-bc7d29520fc9", "3ce4a93f-9020-445b-8dd2-c7f4dfefaad3"], "admins": ["52db060c-4d2f-4c42-bb30-4ec9a4fbddc0"] }, { "id": "76dd853e-9acc-4f69-86fe-12c647f5703c", "users": ["0bc54fc6-d891-4b92-9256-bc7d29520fc9", "3d247967-75e9-4d90-9872-bf2c4e713f8f"], "admins": ["bca7ecde-7581-4d14-a124-8d684f4aeb7a"] }], "consumers": [{ "id": "c7a382786d514262b75ab9531b749a2b", "admins": ["ab8d806d-923a-4796-8609-d471af859c5c"] }, { "id": "89a382786d514262b75ab9531b749a2b", "dataAccessGroupFunctionAccessGroupPairs": [{ "functionAccessGroupId": "8675e686d31e378823kj5d66161d536d", "dataAccessGroupId": "0955e686d31e4216b3dd5d66161d536d" }], "admins": ["01d70d09-997b-41cb-83ea-0e1db84626b3"] }], "status": "ENABLED" } }, { "status": 400, "data": null }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'getAccessgroupsUsercontextServiceagreements', [{ "status": 200, "data": [{ "id": "a1198a205a404eb7b47fa553db920429", "name": "Online Banking Service Agreement", "description": "Service Agreement between Online Banking and Backbase", "isMaster": false }, { "id": "37115f7b556a4e11ba0bfd07e2567b1d", "name": "Doe Corporation Service Agreement", "description": "Service Agreement for Doe Corp.", "isMaster": true }] }, { "status": 400, "data": null }, { "status": 500, "data": null }]), _defineProperty(_responses, 'getAccessgroupsUsercontextServiceagreementsLegalentities', [{ "status": 200, "data": [{ "id": "5d84b1fe3c0247b3acad052da0de8c5d", "name": "Mortgages Department" }, { "id": "d686fbe7998749648c8620ae9198dc97", "name": "Stock Exchange Department" }, { "id": "ca84950ece3a41a9bf7eae0daf9de7e0", "name": "Branch Information" }, { "id": "bd756fd805f94064890f8b72a443736f", "name": "Bulk Transactions Department" }, { "id": "4d4b2438f3402fea99d53d4a6be1f4cf", "name": "Certificates of Deposit" }, { "id": "b8ec2708ecea241daade415abcbc2260", "name": "Operations/Customer Service Department" }, { "id": "88f7dd35ba5a1693bd106bb3f9ccc7ec", "name": "Operations Department" }, { "id": "6dc4d18ddfac2f52b6176c7b85a2ab9c", "name": "ATM Facilities" }, { "id": "da5dcd1f1bc226bfb14a7d1a6da2027e", "name": "Forex Management Department" }, { "id": "fb402d0d3a0c11dbbcfbead1b6ac689e", "name": "Risk Management Department" }, { "id": "06dbccd58afe5bf081ab685e2db09a3a", "name": "Debit Cards" }, { "id": "1db8eecd901d4fc6ba517a8f7e8aac8b", "name": "Inspection Department" }, { "id": "b54f4faee7962cdcaaedece5ceecd8a8", "name": "Informatiion Technology Department" }, { "id": "fdea68b35d2b1d3287d33bb979bd29b3", "name": "Personnel/HRD Department" }, { "id": "fa447c1bff0713cb8dc7bddbb6fbc064", "name": "Home Loans and Services" }] }, { "status": 400, "data": null }, { "status": 500, "data": null }]), _responses);
	
	    var DEFAULT_MOCK = {
	      data: {},
	      status: 200,
	      headers: function headers(header) {
	        return header === 'content-type' && this.data ? 'application/json' : null;
	      },
	      config: {},
	      statusText: 'OK'
	    };
	
	    var getResponse = function getResponse(method, status) {
	      var response = (responses[method] || []).find(function (response) {
	        return response.status === status;
	      });
	      return Object.assign({}, DEFAULT_MOCK, response);
	    };
	
	    var PLUGINS_ALL = '__all__';
	
	    var plugins = (_plugins = {}, _defineProperty(_plugins, PLUGINS_ALL, []), _defineProperty(_plugins, 'getAccessgroupsData', []), _defineProperty(_plugins, 'postAccessgroupsDataRecord', []), _defineProperty(_plugins, 'postAccessgroupsDataGroupsRecord', []), _defineProperty(_plugins, 'putAccessgroupsDataGroupsRecord', []), _defineProperty(_plugins, 'getAccessgroupsDataGroups', []), _defineProperty(_plugins, 'getAccessgroupsFunction', []), _defineProperty(_plugins, 'postAccessgroupsFunctionRecord', []), _defineProperty(_plugins, 'getAccessgroupsFunctionGroups', []), _defineProperty(_plugins, 'postAccessgroupsFunctionGroupsRecord', []), _defineProperty(_plugins, 'putAccessgroupsFunctionGroupsRecord', []), _defineProperty(_plugins, 'getAccessgroupsConfigFunctions', []), _defineProperty(_plugins, 'postAccessgroupsUsersRecord', []), _defineProperty(_plugins, 'getAccessgroupsUsers', []), _defineProperty(_plugins, 'postAccessgroupsServiceagreementsRecord', []), _defineProperty(_plugins, 'getAccessgroupsServiceagreements', []), _defineProperty(_plugins, 'postAccessgroupsUsercontextRecord', []), _defineProperty(_plugins, 'getAccessgroupsDataRecord', []), _defineProperty(_plugins, 'putAccessgroupsDataRecord', []), _defineProperty(_plugins, 'deleteAccessgroupsDataRecord', []), _defineProperty(_plugins, 'postAccessgroupsDataGroupsDeleteRecord', []), _defineProperty(_plugins, 'getAccessgroupsDataGroupsRecord', []), _defineProperty(_plugins, 'putAccessgroupsDataGroupsRecord', []), _defineProperty(_plugins, 'deleteAccessgroupsDataGroupsRecord', []), _defineProperty(_plugins, 'getAccessgroupsFunctionRecord', []), _defineProperty(_plugins, 'putAccessgroupsFunctionRecord', []), _defineProperty(_plugins, 'deleteAccessgroupsFunctionRecord', []), _defineProperty(_plugins, 'postAccessgroupsFunctionGroupsDeleteRecord', []), _defineProperty(_plugins, 'getAccessgroupsFunctionGroupsRecord', []), _defineProperty(_plugins, 'putAccessgroupsFunctionGroupsRecord', []), _defineProperty(_plugins, 'deleteAccessgroupsFunctionGroupsRecord', []), _defineProperty(_plugins, 'getAccessgroupsUsersRecord', []), _defineProperty(_plugins, 'getAccessgroupsUsersPrivileges', []), _defineProperty(_plugins, 'getAccessgroupsUsersUserPrivileges', []), _defineProperty(_plugins, 'getAccessgroupsUsersPermissions', []), _defineProperty(_plugins, 'putAccessgroupsUsersPermissionsRecord', []), _defineProperty(_plugins, 'getAccessgroupsUsersUserPermissions', []), _defineProperty(_plugins, 'postAccessgroupsUsersFunctionRecord', []), _defineProperty(_plugins, 'postAccessgroupsUsersDataRecord', []), _defineProperty(_plugins, 'getAccessgroupsUsersPrivilegesArrangements', []), _defineProperty(_plugins, 'getAccessgroupsUsersUserPrivilegesArrangements', []), _defineProperty(_plugins, 'getAccessgroupsUsersPermissionsSummary', []), _defineProperty(_plugins, 'getAccessgroupsServiceagreementsRecord', []), _defineProperty(_plugins, 'putAccessgroupsServiceagreementsRecord', []), _defineProperty(_plugins, 'getAccessgroupsServiceagreementsContext', []), _defineProperty(_plugins, 'getAccessgroupsServiceagreementsRoles', []), _defineProperty(_plugins, 'getAccessgroupsServiceagreementsAdminsMe', []), _defineProperty(_plugins, 'postAccessgroupsServiceagreementsIngestServiceagreementsRecord', []), _defineProperty(_plugins, 'getAccessgroupsServiceagreementsParticipants', []), _defineProperty(_plugins, 'getAccessgroupsServiceagreementsAdmins', []), _defineProperty(_plugins, 'putAccessgroupsServiceagreementsAdminsRecord', []), _defineProperty(_plugins, 'getAccessgroupsServiceagreementsContextUsers', []), _defineProperty(_plugins, 'putAccessgroupsServiceagreementsContextUsersRecord', []), _defineProperty(_plugins, 'deleteAccessgroupsServiceagreementsContextUsersRecord', []), _defineProperty(_plugins, 'postAccessgroupsServiceagreementsIngestServiceagreementsUsersAddRecord', []), _defineProperty(_plugins, 'postAccessgroupsServiceagreementsIngestServiceagreementsUsersRemoveRecord', []), _defineProperty(_plugins, 'getAccessgroupsServiceagreementsExternalRecord', []), _defineProperty(_plugins, 'getAccessgroupsUsercontextServiceagreements', []), _defineProperty(_plugins, 'getAccessgroupsUsercontextServiceagreementsLegalentities', []), _plugins);
	
	    if (!plugins['getAccessgroupsUsercontextServiceagreements']) {
	      console.warn('%cThere is no "getAccessgroupsUsercontextServiceagreements" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getAccessgroupsUsercontextServiceagreements'].push(function (result, args) {
	        var query = args[args.length - 2].query;
	
	        var includesSubstring = function includesSubstring(query) {
	          return function (item) {
	            return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
	          };
	        };
	
	        if (query) {
	          result.data = result.data.filter(includesSubstring(query));
	        }
	
	        return result;
	      });
	    }
	
	    if (!plugins['getAccessgroupsUsercontextServiceagreementsLegalentities']) {
	      console.warn('%cThere is no "getAccessgroupsUsercontextServiceagreementsLegalentities" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getAccessgroupsUsercontextServiceagreementsLegalentities'].push(function (result, args) {
	        var HASH_KEY_LENGTH = 32;
	        var SERVICE_AGREEMENTS_METHOD_NAME = 'getAccessgroupsUsercontextServiceagreements';
	        var id = args[0];
	
	        if (id && id.length === HASH_KEY_LENGTH) {
	          var serviceAgreements = getResponse(SERVICE_AGREEMENTS_METHOD_NAME, 200);
	          var index = serviceAgreements.data.map(function (sa) {
	            return sa.id;
	          }).indexOf(id);
	
	          if (index > -1) {
	            var groupSize = Math.ceil(result.data.length / serviceAgreements.data.length);
	
	            var step = index * groupSize;
	            // Check amount of Legal Entities is bigger that amount of Service Agreements
	            if (step + 1 <= result.data.length) {
	              return { data: result.data.slice(step, step + groupSize) };
	            } else {
	              // Otherwise return last block of Legal Entities
	              return { data: result.data.slice(result.data.length - step, result.data.length) };
	            }
	          }
	        }
	
	        return result;
	      }, function (result, args) {
	        var query = args[args.length - 2].query;
	
	        var includesSubstring = function includesSubstring(query) {
	          return function (item) {
	            return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
	          };
	        };
	
	        if (query) {
	          result.data = result.data.filter(includesSubstring(query));
	        }
	
	        return result;
	      });
	    }
	
	    if (!plugins['getAccessgroupsServiceagreementsContextUsers']) {
	      console.warn('%cThere is no "getAccessgroupsServiceagreementsContextUsers" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getAccessgroupsServiceagreementsContextUsers'].push(function (result, args) {
	        var data = result.data;
	        var totalCount = data.length;
	        var headers = function headers(header) {
	          return header === 'x-total-count' ? totalCount : result.headers(header);
	        };
	
	        var params = args[args.length - 2] || {};
	        var size = parseInt(params.size, 10);
	        if (!isNaN(size)) {
	          var from = parseInt(params.from, 10) || 0;
	          var startIndex = from * size;
	
	          data = data.slice(startIndex, startIndex + size);
	        }
	
	        return Object.assign({}, result, { headers: headers, data: data });
	      });
	    }
	
	    if (!plugins['getAccessgroupsUsercontextServiceagreements']) {
	      console.warn('%cThere is no "getAccessgroupsUsercontextServiceagreements" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getAccessgroupsUsercontextServiceagreements'].push(function (result, args) {
	        var data = result.data;
	        var totalCount = data.length;
	        var headers = function headers(header) {
	          return header === 'x-total-count' ? totalCount : result.headers(header);
	        };
	
	        var params = args[args.length - 2] || {};
	        var size = parseInt(params.size, 10);
	        if (!isNaN(size)) {
	          var from = parseInt(params.from, 10) || 0;
	          var startIndex = from * size;
	
	          data = data.slice(startIndex, startIndex + size);
	        }
	
	        return Object.assign({}, result, { headers: headers, data: data });
	      });
	    }
	
	    if (!plugins['getAccessgroupsUsercontextServiceagreementsLegalentities']) {
	      console.warn('%cThere is no "getAccessgroupsUsercontextServiceagreementsLegalentities" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getAccessgroupsUsercontextServiceagreementsLegalentities'].push(function (result, args) {
	        var data = result.data;
	        var totalCount = data.length;
	        var headers = function headers(header) {
	          return header === 'x-total-count' ? totalCount : result.headers(header);
	        };
	
	        var params = args[args.length - 2] || {};
	        var size = parseInt(params.size, 10);
	        if (!isNaN(size)) {
	          var from = parseInt(params.from, 10) || 0;
	          var startIndex = from * size;
	
	          data = data.slice(startIndex, startIndex + size);
	        }
	
	        return Object.assign({}, result, { headers: headers, data: data });
	      });
	    }
	
	    var pluginMocks = function pluginMocks(method, args, uri) {
	      var methodPlugins = plugins[method] || [];
	      var commonPlugins = plugins[PLUGINS_ALL] || [];
	      var allPlugins = methodPlugins.concat(commonPlugins);
	
	      return function (initialResult) {
	        return allPlugins.reduce(function (result, plugin) {
	          return result.then(function (nextResult) {
	            return plugin(nextResult, args, uri, method);
	          });
	        }, Promise.resolve(initialResult));
	      };
	    };
	
	    var handleError = function handleError(method) {
	      return function (error) {
	        // If error object is one of the error responses, assume it returned intentionally from one of the plugins
	        var isIntendedError = error && error.status && error.status >= 400;
	        var response = isIntendedError ? error : getResponse(method, 500);
	
	        console.log(method + ' request rejected because of ', error);
	        return Promise.reject(response);
	      };
	    };
	
	    function getAccessgroupsData(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsData', 200)).then(pluginMocks('getAccessgroupsData', [params, headers], '{version}/accessgroups/data')).catch(handleError('getAccessgroupsData'));
	    }
	
	    function postAccessgroupsDataRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postAccessgroupsDataRecord', 201)).then(pluginMocks('postAccessgroupsDataRecord', [data, headers], '{version}/accessgroups/data')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postAccessgroupsDataRecord'));
	    }
	
	    function postAccessgroupsDataGroupsRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data-groups';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postAccessgroupsDataGroupsRecord', 201)).then(pluginMocks('postAccessgroupsDataGroupsRecord', [data, headers], '{version}/accessgroups/data-groups')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postAccessgroupsDataGroupsRecord'));
	    }
	
	    function putAccessgroupsDataGroupsRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data-groups';
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putAccessgroupsDataGroupsRecord', 207)).then(pluginMocks('putAccessgroupsDataGroupsRecord', [data, headers], '{version}/accessgroups/data-groups')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putAccessgroupsDataGroupsRecord'));
	    }
	
	    function getAccessgroupsDataGroups(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data-groups';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsDataGroups', 200)).then(pluginMocks('getAccessgroupsDataGroups', [params, headers], '{version}/accessgroups/data-groups')).catch(handleError('getAccessgroupsDataGroups'));
	    }
	
	    function getAccessgroupsFunction(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsFunction', 200)).then(pluginMocks('getAccessgroupsFunction', [params, headers], '{version}/accessgroups/function')).catch(handleError('getAccessgroupsFunction'));
	    }
	
	    function postAccessgroupsFunctionRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postAccessgroupsFunctionRecord', 201)).then(pluginMocks('postAccessgroupsFunctionRecord', [data, headers], '{version}/accessgroups/function')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postAccessgroupsFunctionRecord'));
	    }
	
	    function getAccessgroupsFunctionGroups(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function-groups';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsFunctionGroups', 200)).then(pluginMocks('getAccessgroupsFunctionGroups', [params, headers], '{version}/accessgroups/function-groups')).catch(handleError('getAccessgroupsFunctionGroups'));
	    }
	
	    function postAccessgroupsFunctionGroupsRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function-groups';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postAccessgroupsFunctionGroupsRecord', 201)).then(pluginMocks('postAccessgroupsFunctionGroupsRecord', [data, headers], '{version}/accessgroups/function-groups')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postAccessgroupsFunctionGroupsRecord'));
	    }
	
	    function putAccessgroupsFunctionGroupsRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function-groups';
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putAccessgroupsFunctionGroupsRecord', 207)).then(pluginMocks('putAccessgroupsFunctionGroupsRecord', [data, headers], '{version}/accessgroups/function-groups')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putAccessgroupsFunctionGroupsRecord'));
	    }
	
	    function getAccessgroupsConfigFunctions(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/config/functions';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsConfigFunctions', 200)).then(pluginMocks('getAccessgroupsConfigFunctions', [params, headers], '{version}/accessgroups/config/functions')).catch(handleError('getAccessgroupsConfigFunctions'));
	    }
	
	    function postAccessgroupsUsersRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postAccessgroupsUsersRecord', 201)).then(pluginMocks('postAccessgroupsUsersRecord', [data, headers], '{version}/accessgroups/users')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postAccessgroupsUsersRecord'));
	    }
	
	    function getAccessgroupsUsers(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsUsers', 200)).then(pluginMocks('getAccessgroupsUsers', [params, headers], '{version}/accessgroups/users')).catch(handleError('getAccessgroupsUsers'));
	    }
	
	    function postAccessgroupsServiceagreementsRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postAccessgroupsServiceagreementsRecord', 201)).then(pluginMocks('postAccessgroupsServiceagreementsRecord', [data, headers], '{version}/accessgroups/serviceagreements')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postAccessgroupsServiceagreementsRecord'));
	    }
	
	    function getAccessgroupsServiceagreements(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsServiceagreements', 200)).then(pluginMocks('getAccessgroupsServiceagreements', [params, headers], '{version}/accessgroups/serviceagreements')).catch(handleError('getAccessgroupsServiceagreements'));
	    }
	
	    function postAccessgroupsUsercontextRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/usercontext';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postAccessgroupsUsercontextRecord', 204)).then(pluginMocks('postAccessgroupsUsercontextRecord', [data, headers], '{version}/accessgroups/usercontext')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postAccessgroupsUsercontextRecord'));
	    }
	
	    function getAccessgroupsDataRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data/' + id;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsDataRecord', 200)).then(pluginMocks('getAccessgroupsDataRecord', [id, params, headers], '{version}/accessgroups/data/{id}')).catch(handleError('getAccessgroupsDataRecord'));
	    }
	
	    function putAccessgroupsDataRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data/' + id;
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putAccessgroupsDataRecord', 200)).then(pluginMocks('putAccessgroupsDataRecord', [id, data, headers], '{version}/accessgroups/data/{id}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putAccessgroupsDataRecord'));
	    }
	
	    function deleteAccessgroupsDataRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data/' + id;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deleteAccessgroupsDataRecord', 200)).then(pluginMocks('deleteAccessgroupsDataRecord', [id, params, headers], '{version}/accessgroups/data/{id}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deleteAccessgroupsDataRecord'));
	    }
	
	    function postAccessgroupsDataGroupsDeleteRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data-groups/delete';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postAccessgroupsDataGroupsDeleteRecord', 207)).then(pluginMocks('postAccessgroupsDataGroupsDeleteRecord', [data, headers], '{version}/accessgroups/data-groups/delete')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postAccessgroupsDataGroupsDeleteRecord'));
	    }
	
	    function getAccessgroupsDataGroupsRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data-groups/' + id;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsDataGroupsRecord', 200)).then(pluginMocks('getAccessgroupsDataGroupsRecord', [id, params, headers], '{version}/accessgroups/data-groups/{id}')).catch(handleError('getAccessgroupsDataGroupsRecord'));
	    }
	
	    function putAccessgroupsDataGroupsRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data-groups/' + id;
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putAccessgroupsDataGroupsRecord', 200)).then(pluginMocks('putAccessgroupsDataGroupsRecord', [id, data, headers], '{version}/accessgroups/data-groups/{id}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putAccessgroupsDataGroupsRecord'));
	    }
	
	    function deleteAccessgroupsDataGroupsRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data-groups/' + id;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deleteAccessgroupsDataGroupsRecord', 200)).then(pluginMocks('deleteAccessgroupsDataGroupsRecord', [id, params, headers], '{version}/accessgroups/data-groups/{id}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deleteAccessgroupsDataGroupsRecord'));
	    }
	
	    function getAccessgroupsFunctionRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function/' + id;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsFunctionRecord', 200)).then(pluginMocks('getAccessgroupsFunctionRecord', [id, params, headers], '{version}/accessgroups/function/{id}')).catch(handleError('getAccessgroupsFunctionRecord'));
	    }
	
	    function putAccessgroupsFunctionRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function/' + id;
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putAccessgroupsFunctionRecord', 200)).then(pluginMocks('putAccessgroupsFunctionRecord', [id, data, headers], '{version}/accessgroups/function/{id}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putAccessgroupsFunctionRecord'));
	    }
	
	    function deleteAccessgroupsFunctionRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function/' + id;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deleteAccessgroupsFunctionRecord', 200)).then(pluginMocks('deleteAccessgroupsFunctionRecord', [id, params, headers], '{version}/accessgroups/function/{id}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deleteAccessgroupsFunctionRecord'));
	    }
	
	    function postAccessgroupsFunctionGroupsDeleteRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function-groups/delete';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postAccessgroupsFunctionGroupsDeleteRecord', 207)).then(pluginMocks('postAccessgroupsFunctionGroupsDeleteRecord', [data, headers], '{version}/accessgroups/function-groups/delete')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postAccessgroupsFunctionGroupsDeleteRecord'));
	    }
	
	    function getAccessgroupsFunctionGroupsRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function-groups/' + id;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsFunctionGroupsRecord', 200)).then(pluginMocks('getAccessgroupsFunctionGroupsRecord', [id, params, headers], '{version}/accessgroups/function-groups/{id}')).catch(handleError('getAccessgroupsFunctionGroupsRecord'));
	    }
	
	    function putAccessgroupsFunctionGroupsRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function-groups/' + id;
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putAccessgroupsFunctionGroupsRecord', 200)).then(pluginMocks('putAccessgroupsFunctionGroupsRecord', [id, data, headers], '{version}/accessgroups/function-groups/{id}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putAccessgroupsFunctionGroupsRecord'));
	    }
	
	    function deleteAccessgroupsFunctionGroupsRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function-groups/' + id;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deleteAccessgroupsFunctionGroupsRecord', 200)).then(pluginMocks('deleteAccessgroupsFunctionGroupsRecord', [id, params, headers], '{version}/accessgroups/function-groups/{id}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deleteAccessgroupsFunctionGroupsRecord'));
	    }
	
	    function getAccessgroupsUsersRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/' + id;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsUsersRecord', 200)).then(pluginMocks('getAccessgroupsUsersRecord', [id, params, headers], '{version}/accessgroups/users/{id}')).catch(handleError('getAccessgroupsUsersRecord'));
	    }
	
	    function getAccessgroupsUsersPrivileges(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/privileges';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsUsersPrivileges', 200)).then(pluginMocks('getAccessgroupsUsersPrivileges', [params, headers], '{version}/accessgroups/users/privileges')).catch(handleError('getAccessgroupsUsersPrivileges'));
	    }
	
	    function getAccessgroupsUsersUserPrivileges(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/user-privileges';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsUsersUserPrivileges', 200)).then(pluginMocks('getAccessgroupsUsersUserPrivileges', [params, headers], '{version}/accessgroups/users/user-privileges')).catch(handleError('getAccessgroupsUsersUserPrivileges'));
	    }
	
	    function getAccessgroupsUsersPermissions(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/permissions';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsUsersPermissions', 200)).then(pluginMocks('getAccessgroupsUsersPermissions', [params, headers], '{version}/accessgroups/users/permissions')).catch(handleError('getAccessgroupsUsersPermissions'));
	    }
	
	    function putAccessgroupsUsersPermissionsRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/permissions';
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putAccessgroupsUsersPermissionsRecord', 207)).then(pluginMocks('putAccessgroupsUsersPermissionsRecord', [data, headers], '{version}/accessgroups/users/permissions')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putAccessgroupsUsersPermissionsRecord'));
	    }
	
	    function getAccessgroupsUsersUserPermissions(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/user-permissions';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsUsersUserPermissions', 200)).then(pluginMocks('getAccessgroupsUsersUserPermissions', [params, headers], '{version}/accessgroups/users/user-permissions')).catch(handleError('getAccessgroupsUsersUserPermissions'));
	    }
	
	    function postAccessgroupsUsersFunctionRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/' + id + '/function';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postAccessgroupsUsersFunctionRecord', 200)).then(pluginMocks('postAccessgroupsUsersFunctionRecord', [id, data, headers], '{version}/accessgroups/users/{id}/function')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postAccessgroupsUsersFunctionRecord'));
	    }
	
	    function postAccessgroupsUsersDataRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/' + id + '/data';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postAccessgroupsUsersDataRecord', 200)).then(pluginMocks('postAccessgroupsUsersDataRecord', [id, data, headers], '{version}/accessgroups/users/{id}/data')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postAccessgroupsUsersDataRecord'));
	    }
	
	    function getAccessgroupsUsersPrivilegesArrangements(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/privileges/arrangements';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsUsersPrivilegesArrangements', 200)).then(pluginMocks('getAccessgroupsUsersPrivilegesArrangements', [params, headers], '{version}/accessgroups/users/privileges/arrangements')).catch(handleError('getAccessgroupsUsersPrivilegesArrangements'));
	    }
	
	    function getAccessgroupsUsersUserPrivilegesArrangements(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/user-privileges/arrangements';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsUsersUserPrivilegesArrangements', 200)).then(pluginMocks('getAccessgroupsUsersUserPrivilegesArrangements', [params, headers], '{version}/accessgroups/users/user-privileges/arrangements')).catch(handleError('getAccessgroupsUsersUserPrivilegesArrangements'));
	    }
	
	    function getAccessgroupsUsersPermissionsSummary(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/permissions/summary';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsUsersPermissionsSummary', 200)).then(pluginMocks('getAccessgroupsUsersPermissionsSummary', [params, headers], '{version}/accessgroups/users/permissions/summary')).catch(handleError('getAccessgroupsUsersPermissionsSummary'));
	    }
	
	    function getAccessgroupsServiceagreementsRecord(serviceAgreementId, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/' + serviceAgreementId;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsServiceagreementsRecord', 200)).then(pluginMocks('getAccessgroupsServiceagreementsRecord', [serviceAgreementId, params, headers], '{version}/accessgroups/serviceagreements/{serviceAgreementId}')).catch(handleError('getAccessgroupsServiceagreementsRecord'));
	    }
	
	    function putAccessgroupsServiceagreementsRecord(serviceAgreementId, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/' + serviceAgreementId;
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putAccessgroupsServiceagreementsRecord', 200)).then(pluginMocks('putAccessgroupsServiceagreementsRecord', [serviceAgreementId, data, headers], '{version}/accessgroups/serviceagreements/{serviceAgreementId}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putAccessgroupsServiceagreementsRecord'));
	    }
	
	    function getAccessgroupsServiceagreementsContext(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/context';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsServiceagreementsContext', 200)).then(pluginMocks('getAccessgroupsServiceagreementsContext', [params, headers], '{version}/accessgroups/serviceagreements/context')).catch(handleError('getAccessgroupsServiceagreementsContext'));
	    }
	
	    function getAccessgroupsServiceagreementsRoles(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/roles';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsServiceagreementsRoles', 200)).then(pluginMocks('getAccessgroupsServiceagreementsRoles', [params, headers], '{version}/accessgroups/serviceagreements/roles')).catch(handleError('getAccessgroupsServiceagreementsRoles'));
	    }
	
	    function getAccessgroupsServiceagreementsAdminsMe(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/admins/me';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsServiceagreementsAdminsMe', 200)).then(pluginMocks('getAccessgroupsServiceagreementsAdminsMe', [params, headers], '{version}/accessgroups/serviceagreements/admins/me')).catch(handleError('getAccessgroupsServiceagreementsAdminsMe'));
	    }
	
	    function postAccessgroupsServiceagreementsIngestServiceagreementsRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/ingest/serviceagreements';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postAccessgroupsServiceagreementsIngestServiceagreementsRecord', 201)).then(pluginMocks('postAccessgroupsServiceagreementsIngestServiceagreementsRecord', [data, headers], '{version}/accessgroups/serviceagreements/ingest/serviceagreements')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postAccessgroupsServiceagreementsIngestServiceagreementsRecord'));
	    }
	
	    function getAccessgroupsServiceagreementsParticipants(serviceAgreementId, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/' + serviceAgreementId + '/participants';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsServiceagreementsParticipants', 200)).then(pluginMocks('getAccessgroupsServiceagreementsParticipants', [serviceAgreementId, params, headers], '{version}/accessgroups/serviceagreements/{serviceAgreementId}/participants')).catch(handleError('getAccessgroupsServiceagreementsParticipants'));
	    }
	
	    function getAccessgroupsServiceagreementsAdmins(serviceAgreementId, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/' + serviceAgreementId + '/admins';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsServiceagreementsAdmins', 200)).then(pluginMocks('getAccessgroupsServiceagreementsAdmins', [serviceAgreementId, params, headers], '{version}/accessgroups/serviceagreements/{serviceAgreementId}/admins')).catch(handleError('getAccessgroupsServiceagreementsAdmins'));
	    }
	
	    function putAccessgroupsServiceagreementsAdminsRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/' + id + '/admins';
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putAccessgroupsServiceagreementsAdminsRecord', 200)).then(pluginMocks('putAccessgroupsServiceagreementsAdminsRecord', [id, data, headers], '{version}/accessgroups/serviceagreements/{id}/admins')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putAccessgroupsServiceagreementsAdminsRecord'));
	    }
	
	    function getAccessgroupsServiceagreementsContextUsers(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/context/users';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsServiceagreementsContextUsers', 200)).then(pluginMocks('getAccessgroupsServiceagreementsContextUsers', [params, headers], '{version}/accessgroups/serviceagreements/context/users')).catch(handleError('getAccessgroupsServiceagreementsContextUsers'));
	    }
	
	    function putAccessgroupsServiceagreementsContextUsersRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/context/users';
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putAccessgroupsServiceagreementsContextUsersRecord', 200)).then(pluginMocks('putAccessgroupsServiceagreementsContextUsersRecord', [data, headers], '{version}/accessgroups/serviceagreements/context/users')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putAccessgroupsServiceagreementsContextUsersRecord'));
	    }
	
	    function deleteAccessgroupsServiceagreementsContextUsersRecord(userId, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/context/users/' + userId;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deleteAccessgroupsServiceagreementsContextUsersRecord', 200)).then(pluginMocks('deleteAccessgroupsServiceagreementsContextUsersRecord', [userId, params, headers], '{version}/accessgroups/serviceagreements/context/users/{userId}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deleteAccessgroupsServiceagreementsContextUsersRecord'));
	    }
	
	    function postAccessgroupsServiceagreementsIngestServiceagreementsUsersAddRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/ingest/serviceagreements/users/add';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postAccessgroupsServiceagreementsIngestServiceagreementsUsersAddRecord', 207)).then(pluginMocks('postAccessgroupsServiceagreementsIngestServiceagreementsUsersAddRecord', [data, headers], '{version}/accessgroups/serviceagreements/ingest/serviceagreements/users/add')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postAccessgroupsServiceagreementsIngestServiceagreementsUsersAddRecord'));
	    }
	
	    function postAccessgroupsServiceagreementsIngestServiceagreementsUsersRemoveRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/ingest/serviceagreements/users/remove';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postAccessgroupsServiceagreementsIngestServiceagreementsUsersRemoveRecord', 207)).then(pluginMocks('postAccessgroupsServiceagreementsIngestServiceagreementsUsersRemoveRecord', [data, headers], '{version}/accessgroups/serviceagreements/ingest/serviceagreements/users/remove')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postAccessgroupsServiceagreementsIngestServiceagreementsUsersRemoveRecord'));
	    }
	
	    function getAccessgroupsServiceagreementsExternalRecord(externalId, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/external/' + externalId;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsServiceagreementsExternalRecord', 200)).then(pluginMocks('getAccessgroupsServiceagreementsExternalRecord', [externalId, params, headers], '{version}/accessgroups/serviceagreements/external/{externalId}')).catch(handleError('getAccessgroupsServiceagreementsExternalRecord'));
	    }
	
	    function getAccessgroupsUsercontextServiceagreements(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/usercontext/serviceagreements';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsUsercontextServiceagreements', 200)).then(pluginMocks('getAccessgroupsUsercontextServiceagreements', [params, headers], '{version}/accessgroups/usercontext/serviceagreements')).catch(handleError('getAccessgroupsUsercontextServiceagreements'));
	    }
	
	    function getAccessgroupsUsercontextServiceagreementsLegalentities(serviceAgreementId, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/usercontext/serviceagreements/' + serviceAgreementId + '/legalentities';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getAccessgroupsUsercontextServiceagreementsLegalentities', 200)).then(pluginMocks('getAccessgroupsUsercontextServiceagreementsLegalentities', [serviceAgreementId, params, headers], '{version}/accessgroups/usercontext/serviceagreements/{serviceAgreementId}/legalentities')).catch(handleError('getAccessgroupsUsercontextServiceagreementsLegalentities'));
	    }
	
	    schemas.postAccessgroupsDataRecord = { "properties": { "name": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^\\S(.*(\\S))?$", "required": true }, "description": { "type": "string", "minLength": 1, "maxLength": 255, "pattern": "^\\S(.*(\\S))?$", "required": true }, "serviceAgreementId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^[0-9a-f]{32}", "required": false }, "legalEntityId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^\\S(.*(\\S))?$", "required": true }, "type": { "type": "string", "enum": ["ARRANGEMENTS", "CONTACTS"], "required": true }, "items": { "type": "array", "items": { "properties": {} }, "required": true } } };
	
	    schemas.postAccessgroupsDataGroupsRecord = { "properties": { "name": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^\\S(.*(\\S))?$", "required": true }, "description": { "type": "string", "minLength": 1, "maxLength": 255, "pattern": "^\\S(.*(\\S))?$", "required": true }, "serviceAgreementId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^\\S(.*(\\S))?$", "required": true }, "type": { "type": "string", "enum": ["ARRANGEMENTS", "CONTACTS"], "required": true }, "items": { "type": "array", "items": { "properties": {} }, "required": true } } };
	
	    schemas.putAccessgroupsDataGroupsRecord = { "type": "array", "items": { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^\\S(.*(\\S))?$", "required": true }, "name": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^\\S(.*(\\S))?$", "required": true }, "description": { "type": "string", "minLength": 1, "maxLength": 255, "pattern": "^\\S(.*(\\S))?$", "required": true }, "externalServiceAgreementId": { "type": "string", "minLength": 1, "maxLength": 64, "required": true }, "type": { "type": "string", "enum": ["ARRANGEMENTS", "CONTACTS"], "required": true }, "items": { "type": "array", "items": { "properties": {} }, "required": true } } } };
	
	    schemas.postAccessgroupsFunctionRecord = { "properties": { "name": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^\\S(.*(\\S))?$", "required": true }, "description": { "type": "string", "minLength": 1, "maxLength": 255, "pattern": "^\\S(.*(\\S))?$", "required": true }, "legalEntityId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^\\S(.*(\\S))?$", "required": true }, "serviceAgreementId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^[0-9a-f]{32}", "required": false }, "permissions": { "type": "array", "items": { "properties": { "functionId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "assignedPrivileges": { "type": "array", "items": { "properties": { "privilege": { "type": "string", "minLength": 1, "maxLength": 16, "required": true }, "limits": { "type": "array", "items": { "properties": { "limitType": { "enum": ["daily", "weekly", "monthly", "upper"], "required": true }, "amount": { "type": "number", "required": false } } }, "required": false } } }, "required": true } } }, "required": false } } };
	
	    schemas.postAccessgroupsFunctionGroupsRecord = { "properties": { "name": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^\\S(.*(\\S))?$", "required": true }, "description": { "type": "string", "minLength": 1, "maxLength": 255, "pattern": "^\\S(.*(\\S))?$", "required": true }, "serviceAgreementId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "permissions": { "type": "array", "items": { "properties": { "functionId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "assignedPrivileges": { "type": "array", "items": { "properties": { "privilege": { "type": "string", "minLength": 1, "maxLength": 16, "required": true }, "limits": { "type": "array", "items": { "properties": { "limitType": { "enum": ["daily", "weekly", "monthly", "upper"], "required": true }, "amount": { "type": "number", "required": false } } }, "required": false } } }, "required": true } } }, "required": false } } };
	
	    schemas.putAccessgroupsFunctionGroupsRecord = { "type": "array", "items": { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^\\S(.*(\\S))?$", "required": true }, "externalLegalEntityId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^\\S(.*(\\S))?$", "required": true }, "name": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^\\S(.*(\\S))?$", "required": true }, "description": { "type": "string", "minLength": 1, "maxLength": 255, "pattern": "^\\S(.*(\\S))?$", "required": true }, "externalServiceAgreementId": { "type": "string", "minLength": 1, "maxLength": 64, "required": true }, "permissions": { "type": "array", "items": { "properties": { "functionId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "assignedPrivileges": { "type": "array", "items": { "properties": { "privilege": { "type": "string", "minLength": 1, "maxLength": 16, "required": true }, "limits": { "type": "array", "items": { "properties": { "limitType": { "enum": ["daily", "weekly", "monthly", "upper"], "required": true }, "amount": { "type": "number", "required": false } } }, "required": false } } }, "required": true } } }, "required": false } } } };
	
	    schemas.postAccessgroupsUsersRecord = { "properties": { "userId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^\\S+$", "required": true }, "serviceAgreementId": { "type": "string", "required": false } } };
	
	    schemas.postAccessgroupsServiceagreementsRecord = { "properties": { "name": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^\\S(.*(\\S))?$", "required": true }, "description": { "type": "string", "minLength": 1, "maxLength": 255, "pattern": "^\\S(.*(\\S))?$", "required": true }, "providers": { "type": "array", "items": { "properties": {} }, "required": true }, "consumers": { "type": "array", "items": { "properties": {} }, "required": true }, "status": { "type": "string", "enum": ["ENABLED", "DISABLED"], "default": "ENABLED", "required": false } } };
	
	    schemas.postAccessgroupsUsercontextRecord = { "properties": { "serviceAgreementId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^[0-9a-f]{32}", "required": true }, "legalEntityId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^[0-9a-f]{32}", "required": false } } };
	
	    schemas.putAccessgroupsDataRecord = { "properties": { "dataAccessGroupId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true } } };
	
	    schemas.postAccessgroupsDataGroupsDeleteRecord = { "properties": { "ids": { "type": "array", "items": { "properties": {} }, "minItems": 1, "required": false } } };
	
	    schemas.putAccessgroupsDataGroupsRecord = { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^[0-9a-f]{32}", "required": true } } };
	
	    schemas.putAccessgroupsFunctionRecord = { "properties": { "functionAccessGroupId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true } } };
	
	    schemas.postAccessgroupsFunctionGroupsDeleteRecord = { "properties": { "ids": { "type": "array", "items": { "properties": {} }, "minItems": 1, "required": false } } };
	
	    schemas.putAccessgroupsFunctionGroupsRecord = { "properties": { "legalEntityId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^\\S(.*(\\S))?$", "required": false } } };
	
	    schemas.putAccessgroupsUsersPermissionsRecord = { "type": "array", "items": { "properties": { "userId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "legalEntityId": { "type": "string", "minLength": 1, "maxLength": 36, "required": false }, "externalServiceAgreementId": { "type": "string", "minLength": 1, "maxLength": 64, "required": true }, "functionDataPairs": { "type": "array", "items": { "properties": { "functionGroupId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "dataGroupIds": { "type": "array", "items": { "properties": {} }, "required": false } } }, "required": true } } } };
	
	    schemas.postAccessgroupsUsersFunctionRecord = { "properties": { "functionAccessGroupIds": { "type": "array", "items": { "properties": {} }, "minItems": 1, "required": true }, "revoke": { "type": "boolean", "required": true } } };
	
	    schemas.postAccessgroupsUsersDataRecord = { "properties": { "functionAccessGroupId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "dataAccessGroupIds": { "type": "array", "items": { "properties": {} }, "minItems": 1, "required": true }, "revoke": { "type": "boolean", "required": true } } };
	
	    schemas.putAccessgroupsServiceagreementsRecord = { "properties": { "name": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^\\S(.*(\\S))?$", "required": false }, "description": { "type": "string", "minLength": 1, "maxLength": 255, "pattern": "^\\S(.*(\\S))?$", "required": false }, "externalId": { "type": "string", "minLength": 1, "maxLength": 64, "pattern": "^\\S+$", "required": false }, "status": { "type": "string", "enum": ["ENABLED", "DISABLED"], "required": false } } };
	
	    schemas.postAccessgroupsServiceagreementsIngestServiceagreementsRecord = { "properties": { "name": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^\\S(.*(\\S))?$", "required": true }, "externalId": { "type": "string", "minLength": 1, "maxLength": 64, "pattern": "^\\S+$", "required": false }, "description": { "type": "string", "minLength": 1, "maxLength": 255, "pattern": "^\\S(.*(\\S))?$", "required": true }, "consumersToIngest": { "type": "array", "items": { "properties": { "users": { "type": "array", "items": { "properties": {} }, "uniqueItems": true, "required": false } } }, "minItems": 1, "uniqueItems": true, "required": true }, "providersToIngest": { "type": "array", "items": { "properties": { "users": { "type": "array", "items": { "properties": {} }, "uniqueItems": true, "required": false } } }, "minItems": 1, "uniqueItems": true, "required": true }, "status": { "type": "string", "enum": ["ENABLED", "DISABLED"], "default": "ENABLED", "required": false } } };
	
	    schemas.putAccessgroupsServiceagreementsAdminsRecord = { "properties": { "consumers": { "type": "array", "items": { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "admins": { "type": "array", "items": { "properties": {} }, "uniqueItems": true, "required": true } } }, "minItems": 1, "required": false }, "providers": { "type": "array", "items": { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "admins": { "type": "array", "items": { "properties": {} }, "uniqueItems": true, "required": true } } }, "minItems": 1, "required": false } } };
	
	    schemas.putAccessgroupsServiceagreementsContextUsersRecord = { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 36, "required": true } } };
	
	    schemas.postAccessgroupsServiceagreementsIngestServiceagreementsUsersAddRecord = { "type": "array", "items": { "properties": { "userId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^[0-9a-f]{32}", "required": true }, "externalServiceAgreementId": { "type": "string", "minLength": 1, "maxLength": 64, "pattern": "^\\S+$", "required": true }, "legalEntityId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^[0-9a-f]{32}", "required": true } } } };
	
	    schemas.postAccessgroupsServiceagreementsIngestServiceagreementsUsersRemoveRecord = { "type": "array", "items": { "properties": { "userId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^[0-9a-f]{32}", "required": true }, "externalServiceAgreementId": { "type": "string", "minLength": 1, "maxLength": 64, "pattern": "^\\S+$", "required": true }, "legalEntityId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^[0-9a-f]{32}", "required": true } } } };
	
	    return _ref = {
	
	      getAccessgroupsData: getAccessgroupsData,
	
	      postAccessgroupsDataRecord: postAccessgroupsDataRecord,
	
	      postAccessgroupsDataGroupsRecord: postAccessgroupsDataGroupsRecord,
	
	      putAccessgroupsDataGroupsRecord: putAccessgroupsDataGroupsRecord,
	
	      getAccessgroupsDataGroups: getAccessgroupsDataGroups,
	
	      getAccessgroupsFunction: getAccessgroupsFunction,
	
	      postAccessgroupsFunctionRecord: postAccessgroupsFunctionRecord,
	
	      getAccessgroupsFunctionGroups: getAccessgroupsFunctionGroups,
	
	      postAccessgroupsFunctionGroupsRecord: postAccessgroupsFunctionGroupsRecord,
	
	      putAccessgroupsFunctionGroupsRecord: putAccessgroupsFunctionGroupsRecord,
	
	      getAccessgroupsConfigFunctions: getAccessgroupsConfigFunctions,
	
	      postAccessgroupsUsersRecord: postAccessgroupsUsersRecord,
	
	      getAccessgroupsUsers: getAccessgroupsUsers,
	
	      postAccessgroupsServiceagreementsRecord: postAccessgroupsServiceagreementsRecord,
	
	      getAccessgroupsServiceagreements: getAccessgroupsServiceagreements,
	
	      postAccessgroupsUsercontextRecord: postAccessgroupsUsercontextRecord,
	
	      getAccessgroupsDataRecord: getAccessgroupsDataRecord,
	
	      putAccessgroupsDataRecord: putAccessgroupsDataRecord,
	
	      deleteAccessgroupsDataRecord: deleteAccessgroupsDataRecord,
	
	      postAccessgroupsDataGroupsDeleteRecord: postAccessgroupsDataGroupsDeleteRecord,
	
	      getAccessgroupsDataGroupsRecord: getAccessgroupsDataGroupsRecord
	
	    }, _defineProperty(_ref, 'putAccessgroupsDataGroupsRecord', putAccessgroupsDataGroupsRecord), _defineProperty(_ref, 'deleteAccessgroupsDataGroupsRecord', deleteAccessgroupsDataGroupsRecord), _defineProperty(_ref, 'getAccessgroupsFunctionRecord', getAccessgroupsFunctionRecord), _defineProperty(_ref, 'putAccessgroupsFunctionRecord', putAccessgroupsFunctionRecord), _defineProperty(_ref, 'deleteAccessgroupsFunctionRecord', deleteAccessgroupsFunctionRecord), _defineProperty(_ref, 'postAccessgroupsFunctionGroupsDeleteRecord', postAccessgroupsFunctionGroupsDeleteRecord), _defineProperty(_ref, 'getAccessgroupsFunctionGroupsRecord', getAccessgroupsFunctionGroupsRecord), _defineProperty(_ref, 'putAccessgroupsFunctionGroupsRecord', putAccessgroupsFunctionGroupsRecord), _defineProperty(_ref, 'deleteAccessgroupsFunctionGroupsRecord', deleteAccessgroupsFunctionGroupsRecord), _defineProperty(_ref, 'getAccessgroupsUsersRecord', getAccessgroupsUsersRecord), _defineProperty(_ref, 'getAccessgroupsUsersPrivileges', getAccessgroupsUsersPrivileges), _defineProperty(_ref, 'getAccessgroupsUsersUserPrivileges', getAccessgroupsUsersUserPrivileges), _defineProperty(_ref, 'getAccessgroupsUsersPermissions', getAccessgroupsUsersPermissions), _defineProperty(_ref, 'putAccessgroupsUsersPermissionsRecord', putAccessgroupsUsersPermissionsRecord), _defineProperty(_ref, 'getAccessgroupsUsersUserPermissions', getAccessgroupsUsersUserPermissions), _defineProperty(_ref, 'postAccessgroupsUsersFunctionRecord', postAccessgroupsUsersFunctionRecord), _defineProperty(_ref, 'postAccessgroupsUsersDataRecord', postAccessgroupsUsersDataRecord), _defineProperty(_ref, 'getAccessgroupsUsersPrivilegesArrangements', getAccessgroupsUsersPrivilegesArrangements), _defineProperty(_ref, 'getAccessgroupsUsersUserPrivilegesArrangements', getAccessgroupsUsersUserPrivilegesArrangements), _defineProperty(_ref, 'getAccessgroupsUsersPermissionsSummary', getAccessgroupsUsersPermissionsSummary), _defineProperty(_ref, 'getAccessgroupsServiceagreementsRecord', getAccessgroupsServiceagreementsRecord), _defineProperty(_ref, 'putAccessgroupsServiceagreementsRecord', putAccessgroupsServiceagreementsRecord), _defineProperty(_ref, 'getAccessgroupsServiceagreementsContext', getAccessgroupsServiceagreementsContext), _defineProperty(_ref, 'getAccessgroupsServiceagreementsRoles', getAccessgroupsServiceagreementsRoles), _defineProperty(_ref, 'getAccessgroupsServiceagreementsAdminsMe', getAccessgroupsServiceagreementsAdminsMe), _defineProperty(_ref, 'postAccessgroupsServiceagreementsIngestServiceagreementsRecord', postAccessgroupsServiceagreementsIngestServiceagreementsRecord), _defineProperty(_ref, 'getAccessgroupsServiceagreementsParticipants', getAccessgroupsServiceagreementsParticipants), _defineProperty(_ref, 'getAccessgroupsServiceagreementsAdmins', getAccessgroupsServiceagreementsAdmins), _defineProperty(_ref, 'putAccessgroupsServiceagreementsAdminsRecord', putAccessgroupsServiceagreementsAdminsRecord), _defineProperty(_ref, 'getAccessgroupsServiceagreementsContextUsers', getAccessgroupsServiceagreementsContextUsers), _defineProperty(_ref, 'putAccessgroupsServiceagreementsContextUsersRecord', putAccessgroupsServiceagreementsContextUsersRecord), _defineProperty(_ref, 'deleteAccessgroupsServiceagreementsContextUsersRecord', deleteAccessgroupsServiceagreementsContextUsersRecord), _defineProperty(_ref, 'postAccessgroupsServiceagreementsIngestServiceagreementsUsersAddRecord', postAccessgroupsServiceagreementsIngestServiceagreementsUsersAddRecord), _defineProperty(_ref, 'postAccessgroupsServiceagreementsIngestServiceagreementsUsersRemoveRecord', postAccessgroupsServiceagreementsIngestServiceagreementsUsersRemoveRecord), _defineProperty(_ref, 'getAccessgroupsServiceagreementsExternalRecord', getAccessgroupsServiceagreementsExternalRecord), _defineProperty(_ref, 'getAccessgroupsUsercontextServiceagreements', getAccessgroupsUsercontextServiceagreements), _defineProperty(_ref, 'getAccessgroupsUsercontextServiceagreementsLegalentities', getAccessgroupsUsercontextServiceagreementsLegalentities), _defineProperty(_ref, 'schemas', schemas), _ref;
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=mock.data-bb-accessgroups-http-ng.js.map