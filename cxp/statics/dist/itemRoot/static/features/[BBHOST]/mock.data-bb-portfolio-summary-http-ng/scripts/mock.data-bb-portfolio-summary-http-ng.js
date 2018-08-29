(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else if(typeof define === 'function' && define.amd)
		define("mock.data-bb-portfolio-summary-http-ng", ["vendor-bb-angular", "lib-bb-storage-ng"], factory);
	else if(typeof exports === 'object')
		exports["mock.data-bb-portfolio-summary-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"));
	else
		root["mock.data-bb-portfolio-summary-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage-ng"]);
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
	exports.portfolioSummaryDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStorageNg = __webpack_require__(3);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _dataBbPortfolioSummaryHttp = __webpack_require__(4);
	
	var _dataBbPortfolioSummaryHttp2 = _interopRequireDefault(_dataBbPortfolioSummaryHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var portfolioSummaryDataModuleKey = 'data-bb-portfolio-summary-http-ng'; /* eslint-disable */
	var portfolioSummaryDataKey = exports.portfolioSummaryDataKey = 'data-bb-portfolio-summary-http-ng:portfolioSummaryData';
	
	exports.default = _vendorBbAngular2.default.module(portfolioSummaryDataModuleKey, [_libBbStorageNg2.default]).provider(portfolioSummaryDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  return {
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	    $get: ['$q', _libBbStorageNg.bbStorageServiceKey, '$httpParamSerializer',
	    /* into */
	    (0, _dataBbPortfolioSummaryHttp2.default)(config)]
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
	    var _plugins;
	
	    // Base param constants
	    var baseUri = conf.baseUri || '';
	
	    var version = 'v2';
	
	    var schemas = {};
	
	    var STORAGE_KEY = 'MOCK_STATE_portfolioSummaryDataModuleKey';
	    var state = {
	      "{version}/portfoliosummary": [{
	        "IBAN": "OL52001456017513",
	        "clientName": "Meriel Petschel",
	        "alias": "Wife",
	        "valuation": {
	          "amount": "1895982.86",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "7588636.44",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "19877350.80",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "24156315.31",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 2.82,
	        "performanceYTD": {
	          "amount": "30156280.18",
	          "currencyCode": "EUR"
	        },
	        "isFavorite": true,
	        "performanceYTDpct": 2.02,
	        "riskClass": "Med-High",
	        "assetClasses": [{
	          "valuePct": 41.05,
	          "name": "Bonds"
	        }, {
	          "valuePct": 27.58,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 14.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 8.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 5.2,
	          "name": "Cash"
	        }, {
	          "valuePct": 1.4,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "051f1b8f-8369-4587-89c2-856ee9990f2d",
	          "name": "Maud Karpets"
	        }, {
	          "id": "7a781a6a-f6b2-4c33-9d48-0c5be1a07f1b",
	          "name": "Brina Godart"
	        }],
	        "attorneys": [{
	          "id": "80eef010-055c-43f1-94a8-d2b58b4e1680",
	          "name": "Daisey Meconi"
	        }]
	      }, {
	        "IBAN": "HS19915622324357",
	        "clientName": "Wat Coltherd",
	        "alias": "Personal",
	        "valuation": {
	          "amount": "10963980.58",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "520560.20",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "17025296.92",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "7410143.97",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 1.32,
	        "performanceYTD": {
	          "amount": "50573059.51",
	          "currencyCode": "EUR"
	        },
	        "isFavorite": true,
	        "performanceYTDpct": -4.59,
	        "riskClass": "Med-Low",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "628fad8d-3a60-4e71-839a-4b11ed3c97ed",
	          "name": "Zollie Webben"
	        }],
	        "attorneys": [{
	          "id": "4d9f2778-e7ee-4b5d-aa47-0e4228de1702",
	          "name": "Rachelle Laimable"
	        }]
	      }, {
	        "IBAN": "TC24995049762082",
	        "clientName": "Jean Riggoll",
	        "alias": "Wife",
	        "valuation": {
	          "amount": "24632359.96",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "19347556.83",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "47854103.77",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "52268906.79",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": -1.06,
	        "performanceYTD": {
	          "amount": "3447178.99",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 4.55,
	        "riskClass": "Med-Low",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "793834b6-5e62-4926-bbe5-436caaed9c46",
	          "name": "Ber Battyll"
	        }, {
	          "id": "c160404f-48ba-4e07-8e2f-e4e39422a8de",
	          "name": "Christian Arnao"
	        }],
	        "attorneys": [{
	          "id": "8a828248-52d6-4f66-985e-9084e43e419f",
	          "name": "Regine Kaesmans"
	        }]
	      }, {
	        "IBAN": "MQ25729403022801",
	        "clientName": "Frieda Blower",
	        "alias": "Wife",
	        "valuation": {
	          "amount": "28433531.31",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "15875429.02",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "6207453.08",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "54384364.50",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 2.33,
	        "performanceYTD": {
	          "amount": "21299496.69",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 0.16,
	        "riskClass": "Med-Low",
	        "assetClasses": [{
	          "valuePct": 58.23,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 24.98,
	          "name": "Cash"
	        }, {
	          "valuePct": 13.11,
	          "name": "Bonds"
	        }, {
	          "valuePct": 5.8,
	          "name": "Obligations"
	        }, {
	          "valuePct": 2.11,
	          "name": "Liquidities"
	        }, {
	          "valuePct": -4.23,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "93b5b7c5-0193-42cd-8f5c-70af3519c6c8",
	          "name": "Hyacinthie McCart"
	        }, {
	          "id": "a28e12f4-f843-461f-a158-d70a8b254fd0",
	          "name": "Ermanno Pettyfer"
	        }],
	        "attorneys": [{
	          "id": "fdd4e528-63ed-4a42-aa51-ec07a61e003c",
	          "name": "Corrine Bullen"
	        }]
	      }, {
	        "IBAN": "ER61365546077005",
	        "clientName": "Evita Oakman",
	        "alias": "Personal",
	        "valuation": {
	          "amount": "24872048.03",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "47107407.98",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "29116022.20",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "51440288.58",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 0.48,
	        "performanceYTD": {
	          "amount": "9995294.91",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 6.82,
	        "riskClass": "Low",
	        "assetClasses": [{
	          "valuePct": 45.05,
	          "name": "Bonds"
	        }, {
	          "valuePct": 24.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 5.17,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 2.59,
	          "name": "Obligations"
	        }],
	        "managers": [{
	          "id": "a0fddbf9-83de-4336-9170-ad9da5d20011",
	          "name": "Nelli Colvill"
	        }],
	        "attorneys": [{
	          "id": "14efd93a-4450-45be-9028-c5e409829305",
	          "name": "Gertruda Ubee"
	        }]
	      }, {
	        "IBAN": "ZR29916810575455",
	        "clientName": "Boycey Linner",
	        "alias": "Father",
	        "valuation": {
	          "amount": "12110112.83",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "2733568.13",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "19794850.26",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "24344705.12",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 0.51,
	        "performanceYTD": {
	          "amount": "47832224.89",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 4.92,
	        "riskClass": "Med-Low",
	        "assetClasses": [{
	          "valuePct": 70.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 20.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 5.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "d0fcc688-3b22-4366-88ca-cf64ff15fe84",
	          "name": "Darleen Scourgie"
	        }],
	        "attorneys": [{
	          "id": "e6b38c1f-8565-40f9-8d0d-676c3add3723",
	          "name": "Aube Keunemann"
	        }]
	      }, {
	        "IBAN": "VX31822038217983",
	        "clientName": "Melisandra Oughton",
	        "alias": "Wife",
	        "valuation": {
	          "amount": "33857576.85",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "9466730.68",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "17822102.70",
	          "currencyCode": "EUR"
	        },
	        "isFavorite": true,
	        "performanceMTD": {
	          "amount": "10875736.04",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": -1.48,
	        "performanceYTD": {
	          "amount": "19690044.87",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 2.89,
	        "riskClass": "High",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "066d3710-8c3d-4ef1-a62a-a15a7b581726",
	          "name": "Carlye Woolger"
	        }],
	        "attorneys": [{
	          "id": "63adf29d-aac4-43f0-be44-8d9b615eb459",
	          "name": "Tabitha Nurden"
	        }]
	      }, {
	        "IBAN": "OY33315843075119",
	        "clientName": "Kristofer McElree",
	        "alias": "Kids",
	        "valuation": {
	          "amount": "1558025.67",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "23810348.23",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "24874781.72",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "29860262.37",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 1.67,
	        "performanceYTD": {
	          "amount": "38487837.18",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 5.24,
	        "riskClass": "Med",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "2253170f-99ae-4643-87c1-fd9a7fe8ed2c",
	          "name": "Gerry Brim"
	        }],
	        "attorneys": [{
	          "id": "6371ed48-8374-4c21-82e4-6686cffd7e61",
	          "name": "Shepperd Sibson"
	        }]
	      }, {
	        "IBAN": "VD66399164472100",
	        "clientName": "Zelma Parlatt",
	        "alias": "Father",
	        "valuation": {
	          "amount": "36699354.89",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "41037925.97",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "14660094.08",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "46179088.38",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 1.2,
	        "performanceYTD": {
	          "amount": "33848068.86",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 6.63,
	        "riskClass": "Med-Low",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "22a31e27-1cad-4eb3-92dc-e082669915db",
	          "name": "Rosita Winslow"
	        }],
	        "attorneys": [{
	          "id": "f39be2bd-8416-456a-9f2c-2abe64e494fb",
	          "name": "Andriette Bennellick"
	        }]
	      }, {
	        "IBAN": "QM77989770003666",
	        "clientName": "Guthrey Tumini",
	        "alias": "Retirement",
	        "valuation": {
	          "amount": "11154673.81",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "18442037.76",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "48942347.36",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "24506814.22",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 2.84,
	        "performanceYTD": {
	          "amount": "34842842.52",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": -1.67,
	        "riskClass": "Med",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "f789b1ec-5c31-4135-9f9e-2a4a12756f78",
	          "name": "Cicely Cunnah"
	        }],
	        "attorneys": [{
	          "id": "18ddab80-6bde-4d08-ae45-b44961a76c6f",
	          "name": "Erwin Phettiplace"
	        }]
	      }, {
	        "IBAN": "AZ40373921742317",
	        "clientName": "Penni Jansen",
	        "alias": "Father",
	        "valuation": {
	          "amount": "24942491.33",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "40788330.23",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "1246886.68",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "28020832.77",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 0.74,
	        "performanceYTD": {
	          "amount": "3809680.39",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 2.81,
	        "riskClass": "High",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "c9de25eb-806f-4bae-890c-7f13f332a033",
	          "name": "Bevan Dallewater"
	        }, {
	          "id": "17a54741-514a-409c-b7d3-a9c7fc6ba6f9",
	          "name": "Guenevere Di Pietro"
	        }],
	        "attorneys": [{
	          "id": "ffde16ec-f5a3-4249-9b19-fe551c856bc5",
	          "name": "Modesta McCrystal"
	        }]
	      }, {
	        "IBAN": "VX97947747921015",
	        "clientName": "Florri Reford",
	        "alias": "Wife",
	        "valuation": {
	          "amount": "18855857.20",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "25856053.73",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "47139144.13",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "16025041.67",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": -0.4,
	        "performanceYTD": {
	          "amount": "18248565.25",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 2.9,
	        "riskClass": "Med",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "6589723b-0f35-45d1-a5e7-1d36d4bdec48",
	          "name": "Stanfield Josifovitz"
	        }, {
	          "id": "b19f6c73-99e3-45cf-b40a-0e212a15017b",
	          "name": "Cybil Caplen"
	        }],
	        "attorneys": [{
	          "id": "b0242bce-b3a5-41ff-afdf-3362aa5806b0",
	          "name": "Franklin Baskwell"
	        }]
	      }, {
	        "IBAN": "VQ09176733755407",
	        "clientName": "Rudolfo Galler",
	        "alias": "Personal",
	        "valuation": {
	          "amount": "38981101.62",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "45953484.77",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "16438933.00",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "37561213.47",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 2.28,
	        "performanceYTD": {
	          "amount": "41390632.29",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": -0.7,
	        "riskClass": "Med",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "f228af60-58f9-4d79-8025-3a8f15e9b046",
	          "name": "Liz MacArthur"
	        }, {
	          "id": "a304f93c-d516-45f5-9cf9-330b7aeb8c09",
	          "name": "Estrellita Costerd"
	        }],
	        "attorneys": [{
	          "id": "84d73751-2f2c-43b6-8b75-e39dec5921a8",
	          "name": "Lou Gilluley"
	        }]
	      }, {
	        "IBAN": "VK60249166853598",
	        "clientName": "Ava Civitillo",
	        "alias": "Father",
	        "valuation": {
	          "amount": "8659023.86",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "10563165.43",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "22725696.35",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "44736133.42",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": -1.3,
	        "performanceYTD": {
	          "amount": "30758596.45",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 3.12,
	        "riskClass": "Med-High",
	        "assetClasses": [{
	          "valuePct": 34.55634,
	          "name": "Bonds"
	        }, {
	          "valuePct": 30.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 15.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": -2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "b164e6a3-709e-4aaa-94fd-faca5a04be12",
	          "name": "Ab Neising"
	        }, {
	          "id": "24dd30fe-0a99-437d-8e70-c460ed56505d",
	          "name": "Robinet Spacy"
	        }],
	        "attorneys": [{
	          "id": "00a48323-eff3-41f5-8bfd-014786f3426c",
	          "name": "Ardine Renvoise"
	        }]
	      }, {
	        "IBAN": "YZ34893216423248",
	        "clientName": "Justina Kenyam",
	        "alias": "Retirement",
	        "valuation": {
	          "amount": "13880120.25",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "1883928.96",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "16068548.96",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "2821559.09",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 0.96,
	        "performanceYTD": {
	          "amount": "8182023.25",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": -0.47,
	        "riskClass": "Med-Low",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "edf2b5ee-7441-4492-b74c-a95611decc9c",
	          "name": "Michel Gussin"
	        }, {
	          "id": "c4140246-eefb-40d1-b2c0-5cb98235540b",
	          "name": "Durante Winson"
	        }],
	        "attorneys": [{
	          "id": "42f0ccd9-4bb7-4680-8177-bdc9ff70f1ec",
	          "name": "Datha Dear"
	        }]
	      }, {
	        "IBAN": "RZ39562375106712",
	        "clientName": "Gillian Durrand",
	        "alias": "Personal",
	        "valuation": {
	          "amount": "45089074.34",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "21338595.26",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "40166332.91",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "16298349.28",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 2.2,
	        "performanceYTD": {
	          "amount": "28690099.58",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": -4.92,
	        "riskClass": "Med",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "8319992d-a9a4-40ab-82a6-938962b8ee84",
	          "name": "Rivi Horsell"
	        }, {
	          "id": "49961fc2-5896-4434-a40b-a85950e0eae2",
	          "name": "Dara Ohlsen"
	        }],
	        "attorneys": [{
	          "id": "d09c737a-6b74-4c52-b823-7cfb52db2f0d",
	          "name": "Freddie Chatelot"
	        }]
	      }, {
	        "IBAN": "FW07615448080014",
	        "clientName": "Chic Rainy",
	        "alias": "Wife",
	        "valuation": {
	          "amount": "24079920.80",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "3750314.77",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "10814200.00",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "12256671.28",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": -0.25,
	        "performanceYTD": {
	          "amount": "50538009.45",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 5.69,
	        "riskClass": "Med-Low",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "60c977f6-7dd4-4759-925f-807400195ab1",
	          "name": "Thain Life"
	        }, {
	          "id": "88942478-132e-4dcb-8ae5-34e733cadd26",
	          "name": "Vassily Blenkiron"
	        }],
	        "attorneys": [{
	          "id": "0e5fc148-cd1f-4fde-950b-a73b58c31a41",
	          "name": "Jillian Alldre"
	        }]
	      }, {
	        "IBAN": "RM45114736646773",
	        "clientName": "Dunc Cardenas",
	        "alias": "Retirement",
	        "valuation": {
	          "amount": "5242649.53",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "9727238.30",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "53097925.84",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "36097830.39",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 0.96,
	        "performanceYTD": {
	          "amount": "11114648.46",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 0.79,
	        "riskClass": "Med-Low",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "7ccef01a-7509-4127-b225-056a75473b62",
	          "name": "Harold Challens"
	        }, {
	          "id": "c871fd47-279a-4138-8f0d-d1841cbbc5e6",
	          "name": "Pail Dillinton"
	        }],
	        "attorneys": [{
	          "id": "7c111f23-d6c9-4eec-b311-0a209614724a",
	          "name": "Bessy Northam"
	        }]
	      }, {
	        "IBAN": "PY43008723212556",
	        "clientName": "Ring Burgill",
	        "alias": "Kids",
	        "valuation": {
	          "amount": "30506286.32",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "21914475.33",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "41116453.79",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "48203222.70",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 2.19,
	        "performanceYTD": {
	          "amount": "52867745.73",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 0.96,
	        "riskClass": "Med",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "77d98b50-a8f4-4b00-baf8-3ff6810222ba",
	          "name": "Dionysus Gregoletti"
	        }, {
	          "id": "bd9d60e6-f5cd-40e4-ae82-c7618a747d10",
	          "name": "Jany Rippingall"
	        }],
	        "attorneys": [{
	          "id": "5c4cf9d2-6e47-4ce3-9118-e9c233134465",
	          "name": "Blair Joseph"
	        }]
	      }, {
	        "IBAN": "WA67683751780773",
	        "clientName": "Jedidiah Forty",
	        "alias": "Kids",
	        "valuation": {
	          "amount": "39299828.15",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "27104235.65",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "2582387.40",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "30939426.98",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 2.38,
	        "performanceYTD": {
	          "amount": "42422714.52",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": -4.86,
	        "riskClass": "Med",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "0eabb21e-287b-4795-ac22-d04c6a119977",
	          "name": "Biron Roast"
	        }],
	        "attorneys": [{
	          "id": "e33a44f5-7312-48fd-bc7e-6cfffaafc3e9",
	          "name": "Sterling Taaffe"
	        }]
	      }, {
	        "IBAN": "AQ27894161617268",
	        "clientName": "Robyn Jenner",
	        "alias": "Personal",
	        "valuation": {
	          "amount": "31766004.14",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "7987263.13",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "51312613.47",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "40214728.48",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 1.71,
	        "performanceYTD": {
	          "amount": "12726984.28",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": -0.33,
	        "riskClass": "Low",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "85af702b-6ccb-4f1c-be84-08323798128a",
	          "name": "Agneta Gaskamp"
	        }],
	        "attorneys": [{
	          "id": "e79f3bb1-9c9f-4041-95f1-c859f7f0ff12",
	          "name": "Brice Cleall"
	        }]
	      }, {
	        "IBAN": "UB18839670684683",
	        "clientName": "Emili Fletcher",
	        "alias": "Personal",
	        "valuation": {
	          "amount": "42316760.27",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "45969653.05",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "22349032.47",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "32559662.15",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": -1.38,
	        "performanceYTD": {
	          "amount": "1537728.86",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 3.71,
	        "riskClass": "Low",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "26c03d26-76b1-4a9e-b9ab-6f396b9c8ccf",
	          "name": "Carmelle Ambrogioni"
	        }],
	        "attorneys": [{
	          "id": "62dd46b5-7ce2-4254-87d9-4c294d401428",
	          "name": "Gale Alvarado"
	        }]
	      }, {
	        "IBAN": "BG46146471092151",
	        "clientName": "Joyous Hanstock",
	        "alias": "Wife",
	        "valuation": {
	          "amount": "17404640.12",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "25937649.89",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "17985819.62",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "2613670.67",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": -0.03,
	        "performanceYTD": {
	          "amount": "30005036.11",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": -4.87,
	        "riskClass": "Low",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "8f33fa81-fe67-41a9-a29e-987fd34c4d7d",
	          "name": "Aleda Iacoviello"
	        }, {
	          "id": "a9f1fb8c-23f2-42e3-a7a1-c3e4484de84a",
	          "name": "Arly Boniface"
	        }],
	        "attorneys": [{
	          "id": "e0d06172-e8b3-4f6c-acb5-6c5af091b847",
	          "name": "Chilton Vaneschi"
	        }]
	      }, {
	        "IBAN": "VG98227751363045",
	        "clientName": "Conroy Hallad",
	        "alias": "Kids",
	        "valuation": {
	          "amount": "3164636.13",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "23402326.68",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "44229800.67",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "8124896.19",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 1.84,
	        "performanceYTD": {
	          "amount": "21215633.95",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": -3.92,
	        "riskClass": "Low",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "adb33f9b-1955-4de6-b525-422a30a53275",
	          "name": "Brett Vinnicombe"
	        }, {
	          "id": "c834fd92-d466-4f82-94ac-fcdb87826224",
	          "name": "Merrile Ghent"
	        }],
	        "attorneys": [{
	          "id": "cc4f2a42-313d-4dab-9d30-59ff52a5db35",
	          "name": "Turner Phillpot"
	        }]
	      }, {
	        "IBAN": "OC62012852912746",
	        "clientName": "Malachi Reicherz",
	        "alias": "Wife",
	        "valuation": {
	          "amount": "30711043.76",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "38380140.61",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "11595094.38",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "20536958.35",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 0.54,
	        "performanceYTD": {
	          "amount": "34002364.36",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 5.7,
	        "riskClass": "High",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "c6161340-340a-49c3-8a2e-0cf18b51f2a0",
	          "name": "Julieta Rose"
	        }, {
	          "id": "4147f058-7494-482d-8b37-8910cf91ea3a",
	          "name": "Liesa Plumstead"
	        }],
	        "attorneys": [{
	          "id": "91f9f05f-b61c-48b7-8b6d-02fe2f4ee281",
	          "name": "Elly Wimbush"
	        }]
	      }, {
	        "IBAN": "UB20420129827693",
	        "clientName": "Davina Snow",
	        "alias": "Personal",
	        "valuation": {
	          "amount": "49010569.48",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "36669762.12",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "42396476.78",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "46592223.47",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 0.13,
	        "performanceYTD": {
	          "amount": "17192637.05",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": -3.31,
	        "riskClass": "Med",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "f42e3a08-f7ab-4474-9d59-933b16d07843",
	          "name": "Udale Phorsby"
	        }],
	        "attorneys": [{
	          "id": "51a446df-6306-4373-b701-c702b9b2a197",
	          "name": "Shay Bande"
	        }]
	      }, {
	        "IBAN": "JU14696556580348",
	        "clientName": "Pepita Trenear",
	        "alias": "Personal",
	        "valuation": {
	          "amount": "35747926.29",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "35343375.38",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "18936199.96",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "34788329.66",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": -1.39,
	        "performanceYTD": {
	          "amount": "36966116.86",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": -0.52,
	        "riskClass": "Med",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "ce632947-640c-4a7d-a9d2-0b386ecbb786",
	          "name": "Karlee Breen"
	        }, {
	          "id": "3b067b82-9ce3-4e76-9a78-6d3100c508bb",
	          "name": "Casie Trengrove"
	        }],
	        "attorneys": [{
	          "id": "86faa96b-a85d-4405-ad26-aae45d99fb61",
	          "name": "Celina Course"
	        }]
	      }, {
	        "IBAN": "RN38311871195433",
	        "clientName": "Emogene Di Nisco",
	        "alias": "Retirement",
	        "valuation": {
	          "amount": "21861545.76",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "46530694.67",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "49035102.70",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "17936290.90",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 0.47,
	        "performanceYTD": {
	          "amount": "14390660.24",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 6.31,
	        "riskClass": "Med-High",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "42275e03-1c90-4a89-b70c-fba5cf5fc1e7",
	          "name": "Dela Nightingale"
	        }, {
	          "id": "a38d34d2-e0ad-4ee0-b1ce-1e5c3e83e08d",
	          "name": "Joly Hanson"
	        }],
	        "attorneys": [{
	          "id": "58e156b9-4712-47d3-aad7-8ff274ad68c8",
	          "name": "Ruthy Pitney"
	        }]
	      }, {
	        "IBAN": "UR01135487961474",
	        "clientName": "Nari Everard",
	        "alias": "Wife",
	        "valuation": {
	          "amount": "29681456.67",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "28389944.81",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "3878090.48",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "2121576.67",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 1.1,
	        "performanceYTD": {
	          "amount": "18016336.41",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 2.69,
	        "riskClass": "Med-High",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "3ed7cc1e-0c75-4a51-bf60-18a78523793b",
	          "name": "Katee Tennison"
	        }, {
	          "id": "ebf63376-e6d1-4292-8bbe-f2131e550cbb",
	          "name": "Derron Izkovicz"
	        }],
	        "attorneys": [{
	          "id": "d98c0741-ee45-4299-a553-1eff274f133c",
	          "name": "Odette Fryatt"
	        }]
	      }, {
	        "IBAN": "SI58382767532475",
	        "clientName": "Saleem Mea",
	        "alias": "Personal",
	        "valuation": {
	          "amount": "16501115.38",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "24282821.32",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "44312810.63",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "45691849.31",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 0.11,
	        "performanceYTD": {
	          "amount": "14148112.10",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 0.98,
	        "riskClass": "Med-High",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "241ad375-5e02-40eb-9690-7bf8fc455409",
	          "name": "Hermione Jillions"
	        }],
	        "attorneys": [{
	          "id": "98c230f2-ab13-4202-8b32-3d36da4a39e8",
	          "name": "Buddie Mathe"
	        }]
	      }, {
	        "IBAN": "TV72237240577783",
	        "clientName": "Ginnifer Winks",
	        "alias": "Wife",
	        "valuation": {
	          "amount": "5831197.04",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "27379973.89",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "40785759.21",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "32228944.97",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 1.1,
	        "performanceYTD": {
	          "amount": "15560716.06",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": -1.49,
	        "riskClass": "Low",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "7652fb25-8d09-4ebb-8364-dcf068e7c7cf",
	          "name": "Kalinda Shutler"
	        }, {
	          "id": "dc82b834-9f81-42e2-bce3-6d4640907200",
	          "name": "Odie Joffe"
	        }],
	        "attorneys": [{
	          "id": "562e6453-5e28-4eb1-9aae-70f48b5bbee4",
	          "name": "Karney Ambroz"
	        }]
	      }, {
	        "IBAN": "TS42684630147728",
	        "clientName": "Ingrim Dickerson",
	        "alias": "Retirement",
	        "valuation": {
	          "amount": "30028934.07",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "40813568.86",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "46766665.58",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "52672846.40",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 0.2,
	        "performanceYTD": {
	          "amount": "47573277.95",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 5.48,
	        "riskClass": "Low",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "67491c13-bc0f-4dd8-b1c2-a51bafb498be",
	          "name": "Rosalind Crothers"
	        }, {
	          "id": "c3aa062b-d875-4224-bb0d-531f2bacc2fd",
	          "name": "Wilburt McIntee"
	        }],
	        "attorneys": [{
	          "id": "f60bd2c0-7b43-4708-99a0-2a184aae9412",
	          "name": "Armstrong Matten"
	        }]
	      }, {
	        "IBAN": "GL57563793567575",
	        "clientName": "Dicky Graybeal",
	        "alias": "Kids",
	        "valuation": {
	          "amount": "48549426.40",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "20764703.81",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "48778773.15",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "41435383.86",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 0.18,
	        "performanceYTD": {
	          "amount": "45609374.24",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": -1.54,
	        "riskClass": "Med-Low",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "7c8055e2-3512-4cf5-a6a7-8fc27b19c8f6",
	          "name": "Murdock Kenway"
	        }, {
	          "id": "317bd048-23e9-4195-a80d-6921da390ec8",
	          "name": "Park Quick"
	        }],
	        "attorneys": [{
	          "id": "807b7750-f69c-41d8-8a98-b371705c6a83",
	          "name": "Bennie Ingleton"
	        }]
	      }, {
	        "IBAN": "CS93322739623703",
	        "clientName": "Bonni Eller",
	        "alias": "Personal",
	        "valuation": {
	          "amount": "31884935.00",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "30082423.61",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "49843927.51",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "49505175.77",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 1.17,
	        "performanceYTD": {
	          "amount": "51484585.72",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 3,
	        "riskClass": "Low",
	        "assetClasses": [],
	        "managers": [{
	          "id": "cd809b07-ce9f-46d8-8d27-f7303f0f657b",
	          "name": "Micki Mouan"
	        }, {
	          "id": "02f6d84b-57ce-486a-8cbe-28081ff60c1c",
	          "name": "Corella Atwool"
	        }],
	        "attorneys": [{
	          "id": "139e8d54-ba08-43de-bd32-435aa84b23c7",
	          "name": "Sim O'Bruen"
	        }]
	      }, {
	        "IBAN": "MY27735152141199",
	        "clientName": "Pedro Imloch",
	        "alias": "Wife",
	        "valuation": {
	          "amount": "4843097.49",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "18370801.13",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "40181558.43",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "12729988.61",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 1.9,
	        "performanceYTD": {
	          "amount": "14680636.59",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 2.97,
	        "riskClass": "Low",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "fe4a64bd-173e-4d3a-9e35-186d1e368c92",
	          "name": "Dud Cruces"
	        }, {
	          "id": "b5751b07-fcf0-481c-ab72-b09ec7c0ac1e",
	          "name": "Cob Barkhouse"
	        }],
	        "attorneys": [{
	          "id": "e661528b-f2df-46fb-ae21-39cf82d27daf",
	          "name": "Clair Romke"
	        }]
	      }, {
	        "IBAN": "NK30086034330698",
	        "clientName": "Hewet Awcock",
	        "alias": "Personal",
	        "valuation": {
	          "amount": "45177578.62",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "42639075.41",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "14476200.27",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "32725425.88",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": -1.89,
	        "performanceYTD": {
	          "amount": "45424520.27",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 3.74,
	        "riskClass": "Med",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "7a59f76c-5403-4173-a6ed-7493ba02f1c5",
	          "name": "Amil Boissier"
	        }],
	        "attorneys": [{
	          "id": "efa58264-fc24-400e-b9de-a60b19e908cb",
	          "name": "Ulla Yglesia"
	        }]
	      }, {
	        "IBAN": "CN74460033886889",
	        "clientName": "Rozelle Attwoull",
	        "alias": "Personal",
	        "valuation": {
	          "amount": "29355502.79",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "44246498.75",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "53460385.65",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "54203309.40",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 0.6,
	        "performanceYTD": {
	          "amount": "51649156.07",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 4.32,
	        "riskClass": "Med-High",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "ac9ed3ee-4cbc-4e6f-8d4c-1108e0d43a77",
	          "name": "Ardeen Singyard"
	        }],
	        "attorneys": [{
	          "id": "568c0cc0-fba8-4059-a726-c2c36598e831",
	          "name": "Giffer Douthwaite"
	        }]
	      }, {
	        "IBAN": "KZ09408991701031",
	        "clientName": "Gregorius Kruschev",
	        "alias": "Personal",
	        "valuation": {
	          "amount": "39813140.68",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "12555690.26",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "37803043.69",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "7552762.57",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 1.67,
	        "performanceYTD": {
	          "amount": "21487805.00",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 6.09,
	        "riskClass": "Med-High",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "00038ece-377e-4968-964a-caae725e0ed2",
	          "name": "Imelda Lawland"
	        }, {
	          "id": "76796624-2c01-43b5-ae6d-c4ea5ad76084",
	          "name": "Maegan Denney"
	        }],
	        "attorneys": [{
	          "id": "ca87a296-5a0d-4c4f-b0c5-56278767c049",
	          "name": "Archy Fernehough"
	        }]
	      }, {
	        "IBAN": "ZS00173220848807",
	        "clientName": "Llewellyn Sellar",
	        "alias": "Personal",
	        "valuation": {
	          "amount": "46913045.06",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "51695328.05",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "34889346.33",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "44203033.26",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 0.28,
	        "performanceYTD": {
	          "amount": "48289397.29",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 5.58,
	        "riskClass": "Med-Low",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "7f41f11e-ed7f-483d-b9a7-89ce261a4f36",
	          "name": "Josepha Doleman"
	        }, {
	          "id": "d8902549-e742-4a17-a0eb-f2ed3977da71",
	          "name": "Antoine McLuckie"
	        }],
	        "attorneys": [{
	          "id": "e76d05ff-52c9-4b69-b07b-2003ce0ae598",
	          "name": "Franky St. Clair"
	        }]
	      }, {
	        "IBAN": "OS93612441973856",
	        "clientName": "Geno Williscroft",
	        "alias": "Retirement",
	        "valuation": {
	          "amount": "30654635.55",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "6152965.84",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "54333667.77",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "34436486.63",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": -0.4,
	        "performanceYTD": {
	          "amount": "24991733.15",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 0.89,
	        "riskClass": "Med-Low",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "ac8a6a35-c4de-4649-9dcd-a658402221df",
	          "name": "Hugibert Oddey"
	        }],
	        "attorneys": [{
	          "id": "e55367cc-5089-47a0-9113-9f513baafacc",
	          "name": "Ozzy Hullah"
	        }]
	      }, {
	        "IBAN": "RM13177780921386",
	        "clientName": "Whitney McSherry",
	        "alias": "Personal",
	        "valuation": {
	          "amount": "39652286.85",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "21605285.53",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "38674667.62",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "10018524.55",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": -1.59,
	        "performanceYTD": {
	          "amount": "53332303.13",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 4.96,
	        "riskClass": "Med-High",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "8438fbd0-f495-4c1c-9ee9-f3d5bac1250c",
	          "name": "Perren Atlay"
	        }, {
	          "id": "66714205-4891-4ca5-9e8c-a1b91a338292",
	          "name": "Dorolisa Charlesworth"
	        }],
	        "attorneys": [{
	          "id": "b3989f55-d41e-4614-8bfd-e522989306b2",
	          "name": "Steffen Dyne"
	        }]
	      }, {
	        "IBAN": "FB13002870995518",
	        "clientName": "Jasmin Jzhakov",
	        "alias": "Kids",
	        "valuation": {
	          "amount": "34403379.99",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "40985885.22",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "46450889.01",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "54792944.50",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 2.95,
	        "performanceYTD": {
	          "amount": "46363781.71",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 6.53,
	        "riskClass": "Med",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "c99dcc0f-eda2-4b1a-a8ad-2565bbca23ee",
	          "name": "Jule Yanshin"
	        }, {
	          "id": "83587894-56b2-41ec-a00e-b4d40461bf9c",
	          "name": "Bonnie Vittore"
	        }],
	        "attorneys": [{
	          "id": "9a907877-c5eb-4036-9404-cbc314f099b7",
	          "name": "Ron Chessil"
	        }]
	      }, {
	        "IBAN": "YK86789464888525",
	        "clientName": "Celeste Langley",
	        "alias": "Personal",
	        "valuation": {
	          "amount": "16575423.41",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "9212586.92",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "3396863.83",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "24968128.66",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": 1.93,
	        "performanceYTD": {
	          "amount": "45546708.24",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 4.95,
	        "riskClass": "Med",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "e6d511d8-3168-4f3e-9ba2-7719381dd00d",
	          "name": "Grannie Donisthorpe"
	        }, {
	          "id": "28a5f137-d641-4c49-9e8b-f50e649459bf",
	          "name": "Darsie Killner"
	        }],
	        "attorneys": [{
	          "id": "1e7f2771-955f-4a52-ab9d-cb8d9ef4c08b",
	          "name": "Eward Aphale"
	        }]
	      }, {
	        "IBAN": "YH74295196204265",
	        "clientName": "Marthena Ladyman",
	        "alias": "Kids",
	        "valuation": {
	          "amount": "4998717.74",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "501223.81",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "30489569.64",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "1029753.88",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": -1.32,
	        "performanceYTD": {
	          "amount": "48629688.82",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": -0.97,
	        "riskClass": "Low",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "a124398b-002b-4c1d-bcb0-7e17d0831b8f",
	          "name": "Alma Atter"
	        }, {
	          "id": "a4d3ef04-304b-467e-aced-05aad2234e72",
	          "name": "Anjela Brandone"
	        }],
	        "attorneys": [{
	          "id": "f106eacf-4f90-48f9-a044-01b4b34eba37",
	          "name": "Walliw Stirtle"
	        }]
	      }, {
	        "IBAN": "WS09298585470860",
	        "clientName": "Kanya Extill",
	        "alias": "Wife",
	        "valuation": {
	          "amount": "51450036.46",
	          "currencyCode": "EUR"
	        },
	        "inCashTotal": {
	          "amount": "54782726.85",
	          "currencyCode": "EUR"
	        },
	        "outCashTotal": {
	          "amount": "22480853.00",
	          "currencyCode": "EUR"
	        },
	        "performanceMTD": {
	          "amount": "41417454.84",
	          "currencyCode": "EUR"
	        },
	        "performanceMTDpct": -1.03,
	        "performanceYTD": {
	          "amount": "29961513.15",
	          "currencyCode": "EUR"
	        },
	        "performanceYTDpct": 2.57,
	        "riskClass": "Med-Low",
	        "assetClasses": [{
	          "valuePct": 45.55,
	          "name": "Bonds"
	        }, {
	          "valuePct": 23.08,
	          "name": "Liquidities"
	        }, {
	          "valuePct": 17.11,
	          "name": "Invested Funds"
	        }, {
	          "valuePct": 5.57,
	          "name": "Obligations"
	        }, {
	          "valuePct": 4,
	          "name": "Cash"
	        }, {
	          "valuePct": 2.6,
	          "name": "Assets"
	        }],
	        "managers": [{
	          "id": "c25db4c1-6934-4bce-94e3-d43b59cb66aa",
	          "name": "Karlyn Laffan"
	        }, {
	          "id": "e1343acc-0ca4-483a-a534-7bce40422218",
	          "name": "Andres Loverock"
	        }],
	        "attorneys": [{
	          "id": "abc792ce-e6a8-4d1e-9579-8b568184f85b",
	          "name": "Lacie Stelfax"
	        }]
	      }],
	      "{version}/portfoliosummary/custom-list": [{
	        "name": "Consumer Durables",
	        "uuid": "c7ab6eda-14c3-4c5c-b988-29c4e6367213"
	      }, {
	        "name": "Armageddon",
	        "uuid": "7ea777c5-5a12-4665-84d0-7fe3e8b3a2dd"
	      }, {
	        "name": "Consumer Services",
	        "uuid": "aeb53dba-2e91-49d1-9e27-02e6e5ca2f40"
	      }, {
	        "name": "Wife",
	        "uuid": "b3739def-ba74-4656-bf0c-f42ad2ce3711"
	      }, {
	        "name": "Technology",
	        "uuid": "6ad98bb2-a091-4d0f-8390-45f80818af90"
	      }, {
	        "name": "Capital Goods",
	        "uuid": "20fd897a-a4ab-4a96-924f-b89386ad860f"
	      }, {
	        "name": "Car Industry",
	        "uuid": "d91dc92f-1cb2-464f-9e1e-3e1f770d9ba2"
	      }, {
	        "name": "Finance",
	        "uuid": "173a42fd-3298-4abf-91f6-1d05abbaaaa4"
	      }, {
	        "name": "Energy",
	        "uuid": "54232a85-f8ad-4fb4-ba42-7f45fbcb58bc"
	      }, {
	        "name": "Parents",
	        "uuid": "502dfbeb-bd23-477b-b345-796891b15f72"
	      }, {
	        "name": "Kids",
	        "uuid": "10154998-7eff-42d8-84ec-0a76c09c7cea"
	      }, {
	        "name": "Future Technology",
	        "uuid": "d9596a95-ac0f-42c3-b7db-7e7a37ed05c6"
	      }, {
	        "name": "Electronics",
	        "uuid": "879aac8c-6e4d-431e-a9b1-cc2851748ff1"
	      }, {
	        "name": "John Gold",
	        "uuid": "941900e8-0034-4d2e-a338-5aafeb09f386"
	      }, {
	        "name": "Yacht",
	        "uuid": "1b4a837f-5e05-433f-b09f-d91842f5ee80"
	      }, {
	        "name": "Islands",
	        "uuid": "c5e0cbe3-c070-417e-ab86-ed7ec6e23964"
	      }, {
	        "name": "Record Company",
	        "uuid": "1ecbc630-24e4-42fd-bd1b-9bec00c5dedc"
	      }, {
	        "name": "My Film",
	        "uuid": "b798361f-c59e-455b-a51c-66668d1eab2c"
	      }],
	      "{version}/portfoliosummary/{portfolioId}/transactions": [{
	        "id": 1,
	        "transactionDate": "2017-04-22T01:46:55Z",
	        "category": "Fee",
	        "assetClass": "Stock",
	        "instrumentName": "Roob-Boyer",
	        "quantity": 24158.75,
	        "price": {
	          "amount": 77635.65,
	          "currencyCode": "RUB"
	        },
	        "amount": {
	          "amount": 64266.77,
	          "currencyCode": "EUR"
	        },
	        "balanceAsset": 76873,
	        "balanceAmount": {
	          "amount": 65287.51,
	          "currencyCode": "USD"
	        },
	        "assetKey": "SU18321655890859",
	        "counterpartyName": "Murphy Group",
	        "statusId": "B9K2WKRK5L",
	        "statusName": "Open",
	        "statusAbbr": "O",
	        "positionType": "Cash",
	        "counterpartyAccount": "BGF70736413363656",
	        "subPortfolioId": "BGF70736413363656",
	        "positionId": "189ba245-67f9-4655-a895-d88d272bd78",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 2,
	        "transactionDate": "2017-07-18T17:41:37Z",
	        "category": "Income",
	        "assetClass": "Bonds",
	        "instrumentName": "Kris and Sons",
	        "quantity": 6387.7,
	        "price": {
	          "amount": 95031.25,
	          "currencyCode": "BRL"
	        },
	        "amount": {
	          "amount": 31617.45,
	          "currencyCode": "CNY"
	        },
	        "balanceAsset": 90969,
	        "balanceAmount": {
	          "amount": 74499.41,
	          "currencyCode": "CNY"
	        },
	        "assetKey": "MI00191859187781",
	        "counterpartyName": "Green-Ortiz",
	        "statusId": "KSTJBMDVL0",
	        "statusName": "Pending",
	        "statusAbbr": "P",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 3,
	        "transactionDate": "2017-05-15T16:27:14Z",
	        "category": "Fee",
	        "assetClass": "Bonds",
	        "instrumentName": "Leannon, Hartmann and Okuneva",
	        "quantity": 24417.82,
	        "price": {
	          "amount": 21607.9,
	          "currencyCode": "ILS"
	        },
	        "amount": {
	          "amount": 97867.69,
	          "currencyCode": "ARS"
	        },
	        "balanceAsset": 51268,
	        "balanceAmount": {
	          "amount": 37340.08,
	          "currencyCode": "CNY"
	        },
	        "assetKey": "IN36248209027796",
	        "counterpartyName": "Nader-Walter",
	        "statusId": "JQG9LDQ8UR",
	        "statusName": "Closed",
	        "statusAbbr": "C",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 4,
	        "transactionDate": "2016-12-22T20:59:11Z",
	        "category": "Income",
	        "assetClass": "Commodities",
	        "instrumentName": "Connelly-McKenzie",
	        "quantity": 65128.79,
	        "price": {
	          "amount": 13037.16,
	          "currencyCode": "ETB"
	        },
	        "amount": {
	          "amount": 8294.84,
	          "currencyCode": "CDF"
	        },
	        "balanceAsset": 49439,
	        "balanceAmount": {
	          "amount": 24151.74,
	          "currencyCode": "RUB"
	        },
	        "assetKey": "SQ26392039550368",
	        "counterpartyName": "O'Connell-Graham",
	        "statusId": "ACDT72IRS3",
	        "statusName": "Open",
	        "statusAbbr": "O",
	        "positionType": "Cash",
	        "counterpartyAccount": "BGF70736413363656",
	        "subPortfolioId": "BGF70736413363656",
	        "positionId": "189ba245-67f9-4655-a895-d88d272bd78",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 5,
	        "transactionDate": "2017-09-05T20:22:49Z",
	        "category": "Buy",
	        "assetClass": "Stock",
	        "instrumentName": "Feeney Group",
	        "quantity": 39450.01,
	        "price": {
	          "amount": 95439.79,
	          "currencyCode": "CNY"
	        },
	        "amount": {
	          "amount": 78851.03,
	          "currencyCode": "DOP"
	        },
	        "balanceAsset": 85436,
	        "balanceAmount": {
	          "amount": 85112.26,
	          "currencyCode": "HTG"
	        },
	        "assetKey": "XM08464905050121",
	        "counterpartyName": "Kessler, Altenwerth and Kuphal",
	        "statusId": "9J569EIEYM",
	        "statusName": "Pending",
	        "statusAbbr": "P",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 6,
	        "transactionDate": "2016-11-24T14:44:24Z",
	        "category": "Buy",
	        "assetClass": "Bonds",
	        "instrumentName": "Aufderhar-Bashirian",
	        "quantity": 70612.15,
	        "price": {
	          "amount": 67089.41,
	          "currencyCode": "PHP"
	        },
	        "amount": {
	          "amount": 56396.61,
	          "currencyCode": "PLN"
	        },
	        "balanceAsset": 29985,
	        "balanceAmount": {
	          "amount": 75489,
	          "currencyCode": "EUR"
	        },
	        "assetKey": "NZ13411760745230",
	        "counterpartyName": "O'Kon, Hauck and O'Conner",
	        "statusId": "5K1DJ4I9UA",
	        "statusName": "Closed",
	        "statusAbbr": "C",
	        "positionType": "Cash",
	        "counterpartyAccount": "BGF70736413363656",
	        "subPortfolioId": "BGF70736413363656",
	        "positionId": "189ba245-67f9-4655-a895-d88d272bd78",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 7,
	        "transactionDate": "2017-02-08T08:46:13Z",
	        "category": "Fee",
	        "assetClass": "Commodities",
	        "instrumentName": "Gislason LLC",
	        "quantity": 92117.09,
	        "price": {
	          "amount": 27005.39,
	          "currencyCode": "BRL"
	        },
	        "amount": {
	          "amount": 42040.95,
	          "currencyCode": "EUR"
	        },
	        "balanceAsset": 22567,
	        "balanceAmount": {
	          "amount": 56300.46,
	          "currencyCode": "EUR"
	        },
	        "assetKey": "YC36790231199175",
	        "counterpartyName": "Pollich-Altenwerth",
	        "statusId": "B0QTSSIJ4A",
	        "statusName": "Open",
	        "statusAbbr": "O",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 8,
	        "transactionDate": "2016-10-06T05:25:55Z",
	        "category": "Sell",
	        "assetClass": "Bonds",
	        "instrumentName": "Kirlin, Shanahan and Dooley",
	        "quantity": 42995.8,
	        "price": {
	          "amount": 96682.61,
	          "currencyCode": "VND"
	        },
	        "amount": {
	          "amount": 40928.9,
	          "currencyCode": "PHP"
	        },
	        "balanceAsset": 50974,
	        "balanceAmount": {
	          "amount": 75251.96,
	          "currencyCode": "MYR"
	        },
	        "assetKey": "OK20811491044545",
	        "counterpartyName": "Zboncak, Renner and Bergstrom",
	        "statusId": "5YFXZZUBIS",
	        "statusName": "Pending",
	        "statusAbbr": "P",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 9,
	        "transactionDate": "2017-06-19T04:46:53Z",
	        "category": "Sell",
	        "assetClass": "Commodities",
	        "instrumentName": "Kuvalis and Sons",
	        "quantity": 91776.15,
	        "price": {
	          "amount": 42097.56,
	          "currencyCode": "PLN"
	        },
	        "amount": {
	          "amount": 85905.38,
	          "currencyCode": "NGN"
	        },
	        "balanceAsset": 56085,
	        "balanceAmount": {
	          "amount": 71959.27,
	          "currencyCode": "CNY"
	        },
	        "assetKey": "YQ82588503761970",
	        "counterpartyName": "Tromp, Kling and Powlowski",
	        "statusId": "0AOEYO5HLI",
	        "statusName": "Closed",
	        "statusAbbr": "C",
	        "positionType": "Cash",
	        "counterpartyAccount": "BGF70736413363656",
	        "subPortfolioId": "BGF70736413363656",
	        "positionId": "189ba245-67f9-4655-a895-d88d272bd78",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 10,
	        "transactionDate": "2017-07-22T17:20:36Z",
	        "category": "Income",
	        "assetClass": "Commodities",
	        "instrumentName": "Halvorson, Kuhlman and Daugherty",
	        "quantity": 36229.87,
	        "price": {
	          "amount": 94105.85,
	          "currencyCode": "USD"
	        },
	        "amount": {
	          "amount": 51589.54,
	          "currencyCode": "EUR"
	        },
	        "balanceAsset": 86993,
	        "balanceAmount": {
	          "amount": 22904.44,
	          "currencyCode": "BGN"
	        },
	        "assetKey": "VT46572899244613",
	        "counterpartyName": "Lind, Doyle and Schamberger",
	        "statusId": "CNHYN7W260",
	        "statusName": "Open",
	        "statusAbbr": "O",
	        "positionType": "Cash",
	        "counterpartyAccount": "BGF70736413363656",
	        "subPortfolioId": "BGF70736413363656",
	        "positionId": "189ba245-67f9-4655-a895-d88d272bd78",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 11,
	        "transactionDate": "2017-04-03T11:02:50Z",
	        "category": "Income",
	        "assetClass": "Stock",
	        "instrumentName": "Treutel, Hermann and Gerhold",
	        "quantity": 78751.9,
	        "price": {
	          "amount": 2414.59,
	          "currencyCode": "RUB"
	        },
	        "amount": {
	          "amount": 2472.3,
	          "currencyCode": "CNY"
	        },
	        "balanceAsset": 15107,
	        "balanceAmount": {
	          "amount": 29670.24,
	          "currencyCode": "CNY"
	        },
	        "assetKey": "VK52770928467139",
	        "counterpartyName": "Morissette, Beatty and Stiedemann",
	        "statusId": "C73JZ7E396",
	        "statusName": "Pending",
	        "statusAbbr": "P",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 12,
	        "transactionDate": "2017-07-07T06:15:18Z",
	        "category": "Fee",
	        "assetClass": "Commodities",
	        "instrumentName": "Koepp-Skiles",
	        "quantity": 43836.68,
	        "price": {
	          "amount": 11149.19,
	          "currencyCode": "IDR"
	        },
	        "amount": {
	          "amount": 71704.5,
	          "currencyCode": "EUR"
	        },
	        "balanceAsset": 5691,
	        "balanceAmount": {
	          "amount": 33436.57,
	          "currencyCode": "LKR"
	        },
	        "assetKey": "AV55412895729265",
	        "counterpartyName": "Schumm, Kuphal and Kihn",
	        "statusId": "ZCFBL8JBSM",
	        "statusName": "Closed",
	        "statusAbbr": "C",
	        "positionType": "Cash",
	        "counterpartyAccount": "BGF70736413363656",
	        "subPortfolioId": "BGF70736413363656",
	        "positionId": "189ba245-67f9-4655-a895-d88d272bd78",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 13,
	        "transactionDate": "2017-04-23T00:19:56Z",
	        "category": "Income",
	        "assetClass": "Stock",
	        "instrumentName": "Corkery Group",
	        "quantity": 10805.1,
	        "price": {
	          "amount": 49844.59,
	          "currencyCode": "BRL"
	        },
	        "amount": {
	          "amount": 24353,
	          "currencyCode": "BRL"
	        },
	        "balanceAsset": 66503,
	        "balanceAmount": {
	          "amount": 70040.01,
	          "currencyCode": "CNY"
	        },
	        "assetKey": "PO75041962350326",
	        "counterpartyName": "Dickens, VonRueden and Monahan",
	        "statusId": "J1FYCTBSAB",
	        "statusName": "Open",
	        "statusAbbr": "O",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 14,
	        "transactionDate": "2017-01-01T18:10:42Z",
	        "category": "Redemption",
	        "assetClass": "Bonds",
	        "instrumentName": "Wyman-Rodriguez",
	        "quantity": 21645.65,
	        "price": {
	          "amount": 57567.04,
	          "currencyCode": "IDR"
	        },
	        "amount": {
	          "amount": 91727.4,
	          "currencyCode": "CDF"
	        },
	        "balanceAsset": 81048,
	        "balanceAmount": {
	          "amount": 34399.23,
	          "currencyCode": "PLN"
	        },
	        "assetKey": "OM53473489208679",
	        "counterpartyName": "Powlowski-Paucek",
	        "statusId": "H23DXPYNDF",
	        "statusName": "Pending",
	        "statusAbbr": "P",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 15,
	        "transactionDate": "2017-02-01T10:08:08Z",
	        "category": "Buy",
	        "assetClass": "Commodities",
	        "instrumentName": "Smith LLC",
	        "quantity": 68265.47,
	        "price": {
	          "amount": 72049.64,
	          "currencyCode": "CNY"
	        },
	        "amount": {
	          "amount": 27411.48,
	          "currencyCode": "COP"
	        },
	        "balanceAsset": 60053,
	        "balanceAmount": {
	          "amount": 8626.96,
	          "currencyCode": "BOB"
	        },
	        "assetKey": "AL78954924787434",
	        "counterpartyName": "Weissnat and Sons",
	        "statusId": "77I6055Z5D",
	        "statusName": "Closed",
	        "statusAbbr": "C",
	        "positionType": "Cash",
	        "counterpartyAccount": "BGF70736413363656",
	        "subPortfolioId": "BGF70736413363656",
	        "positionId": "189ba245-67f9-4655-a895-d88d272bd78",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 16,
	        "transactionDate": "2016-09-14T15:55:43Z",
	        "category": "Redemption",
	        "assetClass": "Bonds",
	        "instrumentName": "Halvorson, Rohan and Brekke",
	        "quantity": 54886.52,
	        "price": {
	          "amount": 62421.98,
	          "currencyCode": "RUB"
	        },
	        "amount": {
	          "amount": 69293.18,
	          "currencyCode": "PHP"
	        },
	        "balanceAsset": 43876,
	        "balanceAmount": {
	          "amount": 29769.37,
	          "currencyCode": "ILS"
	        },
	        "assetKey": "VN57340524095337",
	        "counterpartyName": "Collins-Hessel",
	        "statusId": "4X1RF5USYI",
	        "statusName": "Open",
	        "statusAbbr": "O",
	        "positionType": "Cash",
	        "counterpartyAccount": "BGF70736413363656",
	        "subPortfolioId": "BGF70736413363656",
	        "positionId": "189ba245-67f9-4655-a895-d88d272bd78",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 17,
	        "transactionDate": "2017-04-02T13:49:16Z",
	        "category": "Redemption",
	        "assetClass": "Bonds",
	        "instrumentName": "Spinka-Hilpert",
	        "quantity": 69422.69,
	        "price": {
	          "amount": 23629.81,
	          "currencyCode": "CNY"
	        },
	        "amount": {
	          "amount": 41620.04,
	          "currencyCode": "BWP"
	        },
	        "balanceAsset": 64164,
	        "balanceAmount": {
	          "amount": 91118.29,
	          "currencyCode": "CNY"
	        },
	        "assetKey": "BL99831989612143",
	        "counterpartyName": "Kshlerin-Lueilwitz",
	        "statusId": "CIDXINMIXB",
	        "statusName": "Pending",
	        "statusAbbr": "P",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 18,
	        "transactionDate": "2017-08-31T18:25:34Z",
	        "category": "Fee",
	        "assetClass": "Bonds",
	        "instrumentName": "Bahringer-Bahringer",
	        "quantity": 23725.03,
	        "price": {
	          "amount": 86549.19,
	          "currencyCode": "USD"
	        },
	        "amount": {
	          "amount": 30945.95,
	          "currencyCode": "PHP"
	        },
	        "balanceAsset": 45135,
	        "balanceAmount": {
	          "amount": 72734.16,
	          "currencyCode": "KES"
	        },
	        "assetKey": "TU64136780631154",
	        "counterpartyName": "Davis-Kub",
	        "statusId": "TEMSRWNTU1",
	        "statusName": "Closed",
	        "statusAbbr": "C",
	        "positionType": "Cash",
	        "counterpartyAccount": "BGF70736413363656",
	        "subPortfolioId": "BGF70736413363656",
	        "positionId": "189ba245-67f9-4655-a895-d88d272bd78",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 19,
	        "transactionDate": "2017-03-25T10:20:41Z",
	        "category": "Redemption",
	        "assetClass": "Commodities",
	        "instrumentName": "McCullough and Sons",
	        "quantity": 46023.88,
	        "price": {
	          "amount": 78165.51,
	          "currencyCode": "IDR"
	        },
	        "amount": {
	          "amount": 84461.74,
	          "currencyCode": "UYU"
	        },
	        "balanceAsset": 10574,
	        "balanceAmount": {
	          "amount": 18141.52,
	          "currencyCode": "RUB"
	        },
	        "assetKey": "PW51789419235614",
	        "counterpartyName": "McDermott Group",
	        "statusId": "KN7UIZDQJ0",
	        "statusName": "Open",
	        "statusAbbr": "O",
	        "positionType": "Cash",
	        "counterpartyAccount": "BGF70736413363656",
	        "subPortfolioId": "BGF70736413363656",
	        "positionId": "189ba245-67f9-4655-a895-d88d272bd78",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 20,
	        "transactionDate": "2016-11-25T02:56:15Z",
	        "category": "Fee",
	        "assetClass": "Bonds",
	        "instrumentName": "Kihn and Sons",
	        "quantity": 21763.67,
	        "price": {
	          "amount": 34306.15,
	          "currencyCode": "CNY"
	        },
	        "amount": {
	          "amount": 78025.71,
	          "currencyCode": "CNY"
	        },
	        "balanceAsset": 17960,
	        "balanceAmount": {
	          "amount": 79360.23,
	          "currencyCode": "PHP"
	        },
	        "assetKey": "QF46778407567378",
	        "counterpartyName": "Beahan-Parisian",
	        "statusId": "ETPGAQCTVC",
	        "statusName": "Pending",
	        "statusAbbr": "P",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 21,
	        "transactionDate": "2017-01-05T09:16:35Z",
	        "category": "Redemption",
	        "assetClass": "Bonds",
	        "instrumentName": "Brakus-Hauck",
	        "quantity": 75154.02,
	        "price": {
	          "amount": 77393.52,
	          "currencyCode": "GEL"
	        },
	        "amount": {
	          "amount": 68197.22,
	          "currencyCode": "VND"
	        },
	        "balanceAsset": 35855,
	        "balanceAmount": {
	          "amount": 13104.22,
	          "currencyCode": "SEK"
	        },
	        "assetKey": "OT76760891885177",
	        "counterpartyName": "Buckridge-Boehm",
	        "statusId": "5DEHN4C6DQ",
	        "statusName": "Closed",
	        "statusAbbr": "C",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 22,
	        "transactionDate": "2017-04-18T06:29:36Z",
	        "category": "Sell",
	        "assetClass": "Stock",
	        "instrumentName": "Gislason and Sons",
	        "quantity": 30997.01,
	        "price": {
	          "amount": 63450.64,
	          "currencyCode": "RUB"
	        },
	        "amount": {
	          "amount": 91229.54,
	          "currencyCode": "EUR"
	        },
	        "balanceAsset": 82284,
	        "balanceAmount": {
	          "amount": 7948.12,
	          "currencyCode": "CUP"
	        },
	        "assetKey": "UX73293066820081",
	        "counterpartyName": "Lubowitz, Johnston and Gottlieb",
	        "statusId": "7FSKIZUM4G",
	        "statusName": "Open",
	        "statusAbbr": "O",
	        "positionType": "Cash",
	        "counterpartyAccount": "BGF70736413363656",
	        "subPortfolioId": "BGF70736413363656",
	        "positionId": "189ba245-67f9-4655-a895-d88d272bd78",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 23,
	        "transactionDate": "2016-09-27T20:12:38Z",
	        "category": "Income",
	        "assetClass": "Stock",
	        "instrumentName": "Breitenberg, Sipes and Robel",
	        "quantity": 98518.86,
	        "price": {
	          "amount": 4046.8,
	          "currencyCode": "ZAR"
	        },
	        "amount": {
	          "amount": 72553.59,
	          "currencyCode": "EUR"
	        },
	        "balanceAsset": 98835,
	        "balanceAmount": {
	          "amount": 65923.43,
	          "currencyCode": "RWF"
	        },
	        "assetKey": "QT05620832422410",
	        "counterpartyName": "Monahan and Sons",
	        "statusId": "8EMU17IRZU",
	        "statusName": "Pending",
	        "statusAbbr": "P",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 24,
	        "transactionDate": "2017-02-13T12:59:16Z",
	        "category": "Buy",
	        "assetClass": "Commodities",
	        "instrumentName": "Hahn Inc",
	        "quantity": 7051.86,
	        "price": {
	          "amount": 37834.4,
	          "currencyCode": "EUR"
	        },
	        "amount": {
	          "amount": 62709.68,
	          "currencyCode": "EUR"
	        },
	        "balanceAsset": 76321,
	        "balanceAmount": {
	          "amount": 45257.12,
	          "currencyCode": "CNY"
	        },
	        "assetKey": "GB83948419145591",
	        "counterpartyName": "Kertzmann and Sons",
	        "statusId": "1DVSOO9PR9",
	        "statusName": "Closed",
	        "statusAbbr": "C",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 25,
	        "transactionDate": "2017-06-16T01:11:27Z",
	        "category": "Sell",
	        "assetClass": "Commodities",
	        "instrumentName": "Wiza, O'Hara and Bradtke",
	        "quantity": 78693.82,
	        "price": {
	          "amount": 59932.93,
	          "currencyCode": "BTN"
	        },
	        "amount": {
	          "amount": 14449.13,
	          "currencyCode": "BRL"
	        },
	        "balanceAsset": 69650,
	        "balanceAmount": {
	          "amount": 42137,
	          "currencyCode": "IDR"
	        },
	        "assetKey": "JH48975093430605",
	        "counterpartyName": "Berge-Rempel",
	        "statusId": "BYTZ0LZ2LO",
	        "statusName": "Open",
	        "statusAbbr": "O",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 26,
	        "transactionDate": "2016-10-12T16:54:50Z",
	        "category": "Redemption",
	        "assetClass": "Stock",
	        "instrumentName": "Satterfield-Abshire",
	        "quantity": 67689.97,
	        "price": {
	          "amount": 46940.7,
	          "currencyCode": "IDR"
	        },
	        "amount": {
	          "amount": 795.87,
	          "currencyCode": "BRL"
	        },
	        "balanceAsset": 76707,
	        "balanceAmount": {
	          "amount": 88138.99,
	          "currencyCode": "UYU"
	        },
	        "assetKey": "OG03895899758620",
	        "counterpartyName": "Pollich, Brown and Kemmer",
	        "statusId": "O2JMWXKNUE",
	        "statusName": "Pending",
	        "statusAbbr": "P",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 27,
	        "transactionDate": "2017-04-18T23:38:25Z",
	        "category": "Redemption",
	        "assetClass": "Commodities",
	        "instrumentName": "Kozey and Sons",
	        "quantity": 16990.88,
	        "price": {
	          "amount": 32356.73,
	          "currencyCode": "SEK"
	        },
	        "amount": {
	          "amount": 92837.38,
	          "currencyCode": "RUB"
	        },
	        "balanceAsset": 66187,
	        "balanceAmount": {
	          "amount": 10855.28,
	          "currencyCode": "BGN"
	        },
	        "assetKey": "SO30123430329468",
	        "counterpartyName": "Lubowitz-Medhurst",
	        "statusId": "ECT0D0XEEL",
	        "statusName": "Closed",
	        "statusAbbr": "C",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 28,
	        "transactionDate": "2017-05-25T10:55:12Z",
	        "category": "Sell",
	        "assetClass": "Bonds",
	        "instrumentName": "Hills Inc",
	        "quantity": 6891.52,
	        "price": {
	          "amount": 29606.2,
	          "currencyCode": "AUD"
	        },
	        "amount": {
	          "amount": 3364.08,
	          "currencyCode": "UAH"
	        },
	        "balanceAsset": 89270,
	        "balanceAmount": {
	          "amount": 25916.9,
	          "currencyCode": "ETB"
	        },
	        "assetKey": "EG68345751086650",
	        "counterpartyName": "Sauer, Toy and Satterfield",
	        "statusId": "UM80MTRKQ0",
	        "statusName": "Open",
	        "statusAbbr": "O",
	        "positionType": "Cash",
	        "counterpartyAccount": "BGF70736413363656",
	        "subPortfolioId": "BGF70736413363656",
	        "positionId": "189ba245-67f9-4655-a895-d88d272bd78",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 29,
	        "transactionDate": "2017-07-07T02:38:51Z",
	        "category": "Income",
	        "assetClass": "Commodities",
	        "instrumentName": "Paucek and Sons",
	        "quantity": 97291.31,
	        "price": {
	          "amount": 36293.48,
	          "currencyCode": "KMF"
	        },
	        "amount": {
	          "amount": 22222.96,
	          "currencyCode": "PAB"
	        },
	        "balanceAsset": 65411,
	        "balanceAmount": {
	          "amount": 13600.98,
	          "currencyCode": "PHP"
	        },
	        "assetKey": "GY14393689933872",
	        "counterpartyName": "Grimes Group",
	        "statusId": "HG3SPUYQY6",
	        "statusName": "Pending",
	        "statusAbbr": "P",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 30,
	        "transactionDate": "2017-06-26T01:20:53Z",
	        "category": "Fee",
	        "assetClass": "Bonds",
	        "instrumentName": "Osinski-Nienow",
	        "quantity": 83715.23,
	        "price": {
	          "amount": 32876.44,
	          "currencyCode": "JPY"
	        },
	        "amount": {
	          "amount": 88959.08,
	          "currencyCode": "CNY"
	        },
	        "balanceAsset": 47347,
	        "balanceAmount": {
	          "amount": 29338.63,
	          "currencyCode": "PHP"
	        },
	        "assetKey": "OF21202506609945",
	        "counterpartyName": "Heidenreich Inc",
	        "statusId": "TACZPH08WR",
	        "statusName": "Closed",
	        "statusAbbr": "C",
	        "positionType": "Cash",
	        "counterpartyAccount": "BGF70736413363656",
	        "subPortfolioId": "BGF70736413363656",
	        "positionId": "189ba245-67f9-4655-a895-d88d272bd78",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 31,
	        "transactionDate": "2016-11-27T09:35:23Z",
	        "category": "Fee",
	        "assetClass": "Commodities",
	        "instrumentName": "Casper-Brekke",
	        "quantity": 1308.74,
	        "price": {
	          "amount": 28520.03,
	          "currencyCode": "NGN"
	        },
	        "amount": {
	          "amount": 95907.66,
	          "currencyCode": "MXN"
	        },
	        "balanceAsset": 33120,
	        "balanceAmount": {
	          "amount": 66825.46,
	          "currencyCode": "HUF"
	        },
	        "assetKey": "EL87636932512578",
	        "counterpartyName": "Strosin, Kohler and Schaden",
	        "statusId": "RF9PTATLWN",
	        "statusName": "Open",
	        "statusAbbr": "O",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 32,
	        "transactionDate": "2017-01-28T07:47:48Z",
	        "category": "Sell",
	        "assetClass": "Stock",
	        "instrumentName": "Kemmer, Heller and Herman",
	        "quantity": 88572.3,
	        "price": {
	          "amount": 55851.67,
	          "currencyCode": "PHP"
	        },
	        "amount": {
	          "amount": 82325.51,
	          "currencyCode": "IDR"
	        },
	        "balanceAsset": 65510,
	        "balanceAmount": {
	          "amount": 8212.6,
	          "currencyCode": "CNY"
	        },
	        "assetKey": "NI32628845492851",
	        "counterpartyName": "VonRueden Inc",
	        "statusId": "80OENWMGP7",
	        "statusName": "Pending",
	        "statusAbbr": "P",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 33,
	        "transactionDate": "2016-12-07T23:31:22Z",
	        "category": "Income",
	        "assetClass": "Commodities",
	        "instrumentName": "Wunsch Group",
	        "quantity": 13341.19,
	        "price": {
	          "amount": 905.07,
	          "currencyCode": "HRK"
	        },
	        "amount": {
	          "amount": 30044.05,
	          "currencyCode": "EUR"
	        },
	        "balanceAsset": 75811,
	        "balanceAmount": {
	          "amount": 74708.47,
	          "currencyCode": "IDR"
	        },
	        "assetKey": "IZ26964199771590",
	        "counterpartyName": "Abbott-Koch",
	        "statusId": "V2MJ9QRBU8",
	        "statusName": "Closed",
	        "statusAbbr": "C",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 34,
	        "transactionDate": "2017-08-13T17:04:30Z",
	        "category": "Income",
	        "assetClass": "Stock",
	        "instrumentName": "Cartwright-O'Kon",
	        "quantity": 87352.02,
	        "price": {
	          "amount": 83009.12,
	          "currencyCode": "CNY"
	        },
	        "amount": {
	          "amount": 90038.68,
	          "currencyCode": "MXN"
	        },
	        "balanceAsset": 56971,
	        "balanceAmount": {
	          "amount": 24000.37,
	          "currencyCode": "CNY"
	        },
	        "assetKey": "RA43037657979221",
	        "counterpartyName": "Parker-Ritchie",
	        "statusId": "S2ARSA6DKY",
	        "statusName": "Open",
	        "statusAbbr": "O",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 35,
	        "transactionDate": "2017-09-11T16:32:17Z",
	        "category": "Sell",
	        "assetClass": "Stock",
	        "instrumentName": "Stark and Sons",
	        "quantity": 1734.14,
	        "price": {
	          "amount": 41382.95,
	          "currencyCode": "USD"
	        },
	        "amount": {
	          "amount": 49004.48,
	          "currencyCode": "CAD"
	        },
	        "balanceAsset": 88413,
	        "balanceAmount": {
	          "amount": 66142.8,
	          "currencyCode": "PLN"
	        },
	        "assetKey": "AN44177774973763",
	        "counterpartyName": "Watsica, Quitzon and Farrell",
	        "statusId": "MTT88U5NWH",
	        "statusName": "Pending",
	        "statusAbbr": "P",
	        "positionType": "Cash",
	        "counterpartyAccount": "BGF70736413363656",
	        "subPortfolioId": "BGF70736413363656",
	        "positionId": "189ba245-67f9-4655-a895-d88d272bd78",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 36,
	        "transactionDate": "2017-04-22T02:46:12Z",
	        "category": "Income",
	        "assetClass": "Bonds",
	        "instrumentName": "Lowe, Lesch and Hane",
	        "quantity": 82924.6,
	        "price": {
	          "amount": 40020.7,
	          "currencyCode": "PLN"
	        },
	        "amount": {
	          "amount": 51223.69,
	          "currencyCode": "CNY"
	        },
	        "balanceAsset": 29523,
	        "balanceAmount": {
	          "amount": 74980.4,
	          "currencyCode": "EUR"
	        },
	        "assetKey": "BE74784262639210",
	        "counterpartyName": "Gibson and Sons",
	        "statusId": "KJTJS0VWCM",
	        "statusName": "Closed",
	        "statusAbbr": "C",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 37,
	        "transactionDate": "2017-06-29T11:06:12Z",
	        "category": "Sell",
	        "assetClass": "Stock",
	        "instrumentName": "Hodkiewicz Inc",
	        "quantity": 12172.58,
	        "price": {
	          "amount": 47136.67,
	          "currencyCode": "ALL"
	        },
	        "amount": {
	          "amount": 84711.19,
	          "currencyCode": "RUB"
	        },
	        "balanceAsset": 38985,
	        "balanceAmount": {
	          "amount": 34463.03,
	          "currencyCode": "IDR"
	        },
	        "assetKey": "CU71268393638863",
	        "counterpartyName": "Hills-Barton",
	        "statusId": "CDYKTZTJB1",
	        "statusName": "Open",
	        "statusAbbr": "O",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 38,
	        "transactionDate": "2016-11-11T21:59:07Z",
	        "category": "Buy",
	        "assetClass": "Bonds",
	        "instrumentName": "Wolf, Kohler and Collier",
	        "quantity": 9471.61,
	        "price": {
	          "amount": 98919.43,
	          "currencyCode": "XOF"
	        },
	        "amount": {
	          "amount": 52888.6,
	          "currencyCode": "ARS"
	        },
	        "balanceAsset": 49647,
	        "balanceAmount": {
	          "amount": 23683.65,
	          "currencyCode": "IDR"
	        },
	        "assetKey": "WC13352324413470",
	        "counterpartyName": "Morissette, Schuster and O'Kon",
	        "statusId": "9LFXMGYKBL",
	        "statusName": "Pending",
	        "statusAbbr": "P",
	        "positionType": "Cash",
	        "counterpartyAccount": "BGF70736413363656",
	        "subPortfolioId": "BGF70736413363656",
	        "positionId": "189ba245-67f9-4655-a895-d88d272bd78",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 39,
	        "transactionDate": "2017-01-26T18:12:39Z",
	        "category": "Fee",
	        "assetClass": "Stock",
	        "instrumentName": "Ward Group",
	        "quantity": 70042.26,
	        "price": {
	          "amount": 98479.23,
	          "currencyCode": "CNY"
	        },
	        "amount": {
	          "amount": 28392.3,
	          "currencyCode": "ILS"
	        },
	        "balanceAsset": 51598,
	        "balanceAmount": {
	          "amount": 53334.55,
	          "currencyCode": "EUR"
	        },
	        "assetKey": "GW27869938235069",
	        "counterpartyName": "Wunsch Inc",
	        "statusId": "599HVY1I04",
	        "statusName": "Closed",
	        "statusAbbr": "C",
	        "positionType": "Cash",
	        "counterpartyAccount": "BGF70736413363656",
	        "subPortfolioId": "BGF70736413363656",
	        "positionId": "189ba245-67f9-4655-a895-d88d272bd78",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 40,
	        "transactionDate": "2017-08-17T14:31:05Z",
	        "category": "Buy",
	        "assetClass": "Bonds",
	        "instrumentName": "Ratke Group",
	        "quantity": 37713.04,
	        "price": {
	          "amount": 76095.81,
	          "currencyCode": "CNY"
	        },
	        "amount": {
	          "amount": 9797.66,
	          "currencyCode": "EUR"
	        },
	        "balanceAsset": 10337,
	        "balanceAmount": {
	          "amount": 18099.07,
	          "currencyCode": "CNY"
	        },
	        "assetKey": "KC24038349979110",
	        "counterpartyName": "Yost Group",
	        "statusId": "T6HKPLWIF7",
	        "statusName": "Open",
	        "statusAbbr": "O",
	        "positionType": "Cash",
	        "counterpartyAccount": "BGF70736413363656",
	        "subPortfolioId": "BGF70736413363656",
	        "positionId": "189ba245-67f9-4655-a895-d88d272bd78",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 41,
	        "transactionDate": "2016-12-22T22:44:05Z",
	        "category": "Redemption",
	        "assetClass": "Stock",
	        "instrumentName": "Hagenes Inc",
	        "quantity": 79335.22,
	        "price": {
	          "amount": 14056.64,
	          "currencyCode": "CNY"
	        },
	        "amount": {
	          "amount": 80407.74,
	          "currencyCode": "EGP"
	        },
	        "balanceAsset": 71404,
	        "balanceAmount": {
	          "amount": 51623.59,
	          "currencyCode": "EUR"
	        },
	        "assetKey": "WM10181284519118",
	        "counterpartyName": "Doyle, Conroy and Bogan",
	        "statusId": "KNWFMY3OCX",
	        "statusName": "Pending",
	        "statusAbbr": "P",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 42,
	        "transactionDate": "2017-06-15T01:15:47Z",
	        "category": "Fee",
	        "assetClass": "Bonds",
	        "instrumentName": "Kovacek, Cormier and Bartell",
	        "quantity": 11927.31,
	        "price": {
	          "amount": 69190.82,
	          "currencyCode": "CNY"
	        },
	        "amount": {
	          "amount": 26935.66,
	          "currencyCode": "IDR"
	        },
	        "balanceAsset": 2088,
	        "balanceAmount": {
	          "amount": 61502.06,
	          "currencyCode": "EUR"
	        },
	        "assetKey": "AI24545742642429",
	        "counterpartyName": "Bayer-Dickens",
	        "statusId": "DSBNJHEB80",
	        "statusName": "Closed",
	        "statusAbbr": "C",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 43,
	        "transactionDate": "2016-12-07T22:12:09Z",
	        "category": "Sell",
	        "assetClass": "Commodities",
	        "instrumentName": "Jast, Grant and Langosh",
	        "quantity": 83184.97,
	        "price": {
	          "amount": 4252.47,
	          "currencyCode": "ILS"
	        },
	        "amount": {
	          "amount": 39116.59,
	          "currencyCode": "CNY"
	        },
	        "balanceAsset": 58799,
	        "balanceAmount": {
	          "amount": 21846.18,
	          "currencyCode": "PHP"
	        },
	        "assetKey": "KA22344396846982",
	        "counterpartyName": "Hansen LLC",
	        "statusId": "LXULPQQKI3",
	        "statusName": "Open",
	        "statusAbbr": "O",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 44,
	        "transactionDate": "2016-09-14T14:48:44Z",
	        "category": "Fee",
	        "assetClass": "Stock",
	        "instrumentName": "MacGyver and Sons",
	        "quantity": 82891.36,
	        "price": {
	          "amount": 60919.08,
	          "currencyCode": "CZK"
	        },
	        "amount": {
	          "amount": 82384.05,
	          "currencyCode": "AUD"
	        },
	        "balanceAsset": 2232,
	        "balanceAmount": {
	          "amount": 42966.6,
	          "currencyCode": "HNL"
	        },
	        "assetKey": "QQ04063391822298",
	        "counterpartyName": "Kuhlman-Harber",
	        "statusId": "XIZXB2UAUA",
	        "statusName": "Pending",
	        "statusAbbr": "P",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 45,
	        "transactionDate": "2017-05-17T03:02:00Z",
	        "category": "Sell",
	        "assetClass": "Commodities",
	        "instrumentName": "Roob-Lynch",
	        "quantity": 63322.21,
	        "price": {
	          "amount": 42249.74,
	          "currencyCode": "BGN"
	        },
	        "amount": {
	          "amount": 65094.62,
	          "currencyCode": "VND"
	        },
	        "balanceAsset": 61941,
	        "balanceAmount": {
	          "amount": 13880.2,
	          "currencyCode": "CNY"
	        },
	        "assetKey": "YD24161752660270",
	        "counterpartyName": "Kessler-Schneider",
	        "statusId": "3R0VRZR5B5",
	        "statusName": "Closed",
	        "statusAbbr": "C",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 46,
	        "transactionDate": "2017-03-24T14:52:15Z",
	        "category": "Income",
	        "assetClass": "Bonds",
	        "instrumentName": "Greenfelder-Wehner",
	        "quantity": 88892.12,
	        "price": {
	          "amount": 22069.73,
	          "currencyCode": "AZN"
	        },
	        "amount": {
	          "amount": 92545.84,
	          "currencyCode": "EUR"
	        },
	        "balanceAsset": 81216,
	        "balanceAmount": {
	          "amount": 67480.47,
	          "currencyCode": "PLN"
	        },
	        "assetKey": "ED96793784636915",
	        "counterpartyName": "Graham, West and Johnston",
	        "statusId": "WSE3M9T6QI",
	        "statusName": "Open",
	        "statusAbbr": "O",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 47,
	        "transactionDate": "2017-02-15T13:14:12Z",
	        "category": "Buy",
	        "assetClass": "Commodities",
	        "instrumentName": "Kessler and Sons",
	        "quantity": 36099.18,
	        "price": {
	          "amount": 8322.31,
	          "currencyCode": "DKK"
	        },
	        "amount": {
	          "amount": 68012.98,
	          "currencyCode": "PHP"
	        },
	        "balanceAsset": 95741,
	        "balanceAmount": {
	          "amount": 15629.25,
	          "currencyCode": "IDR"
	        },
	        "assetKey": "EO20651954014717",
	        "counterpartyName": "Ledner-Reichert",
	        "statusId": "EB9ZWNBQTJ",
	        "statusName": "Pending",
	        "statusAbbr": "P",
	        "positionType": "Security",
	        "counterpartyAccount": "KLM97756433363629",
	        "subPortfolioId": "IDV42524523452355",
	        "positionId": "657fb242-98i9-8455-j795-i57d272uj37",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 48,
	        "transactionDate": "2016-10-19T15:31:37Z",
	        "category": "Fee",
	        "assetClass": "Bonds",
	        "instrumentName": "Kessler, Marks and Botsford",
	        "quantity": 72727.78,
	        "price": {
	          "amount": 74138.03,
	          "currencyCode": "CNY"
	        },
	        "amount": {
	          "amount": 29077.87,
	          "currencyCode": "RUB"
	        },
	        "balanceAsset": 68344,
	        "balanceAmount": {
	          "amount": 74882.31,
	          "currencyCode": "PHP"
	        },
	        "assetKey": "OX82046324419628",
	        "counterpartyName": "Harvey, Volkman and Koelpin",
	        "statusId": "687NP1Y31K",
	        "statusName": "Closed",
	        "statusAbbr": "C",
	        "positionType": "Cash",
	        "counterpartyAccount": "BGF70736413363656",
	        "subPortfolioId": "BGF70736413363656",
	        "positionId": "189ba245-67f9-4655-a895-d88d272bd78",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 49,
	        "transactionDate": "2017-06-25T23:11:20Z",
	        "category": "Redemption",
	        "assetClass": "Commodities",
	        "instrumentName": "Romaguera Inc",
	        "quantity": 82735.59,
	        "price": {
	          "amount": 31501.41,
	          "currencyCode": "CAD"
	        },
	        "amount": {
	          "amount": 22516.52,
	          "currencyCode": "TJS"
	        },
	        "balanceAsset": 28648,
	        "balanceAmount": {
	          "amount": 50083.7,
	          "currencyCode": "CNY"
	        },
	        "assetKey": "ZG58567103939197",
	        "counterpartyName": "Gislason LLC",
	        "statusId": "H85SAE6IL3",
	        "statusName": "Open",
	        "statusAbbr": "O",
	        "positionType": "Cash",
	        "counterpartyAccount": "BGF70736413363656",
	        "subPortfolioId": "BGF70736413363656",
	        "positionId": "189ba245-67f9-4655-a895-d88d272bd78",
	        "iSIN": "UB23025390831277"
	      }, {
	        "id": 50,
	        "transactionDate": "2016-11-09T23:45:01Z",
	        "category": "Sell",
	        "assetClass": "Bonds",
	        "instrumentName": "Romaguera, Hand and Crooks",
	        "quantity": 79981.58,
	        "price": {
	          "amount": 49176.91,
	          "currencyCode": "EUR"
	        },
	        "amount": {
	          "amount": 32709.51,
	          "currencyCode": "EUR"
	        },
	        "balanceAsset": 39338,
	        "balanceAmount": {
	          "amount": 45378.33,
	          "currencyCode": "EUR"
	        },
	        "assetKey": "BA18667893921299",
	        "counterpartyName": "Kerluke Inc",
	        "statusId": "XK79ZKXN3S",
	        "statusName": "Pending",
	        "statusAbbr": "P",
	        "positionType": "Cash",
	        "counterpartyAccount": "BGF70736413363656",
	        "subPortfolioId": "BGF70736413363656",
	        "positionId": "189ba245-67f9-4655-a895-d88d272bd78",
	        "iSIN": "UB23025390831277"
	      }]
	    };
	
	    bbStorage.subscribe(STORAGE_KEY, function (newState) {
	      state = newState;
	    });
	
	    var persistState = function persistState(newState) {
	      bbStorage.setItem(STORAGE_KEY, newState);
	    };
	
	    var responses = {
	
	      getPortfoliosummary: [{ "status": 200, "data": [{ "IBAN": "OL52001456017513", "clientName": "Meriel Petschel", "alias": "Wife", "valuation": { "amount": "1895982.86", "currencyCode": "EUR" }, "inCashTotal": { "amount": "7588636.44", "currencyCode": "EUR" }, "outCashTotal": { "amount": "19877350.80", "currencyCode": "EUR" }, "performanceMTD": { "amount": "24156315.31", "currencyCode": "EUR" }, "performanceMTDpct": 2.82, "performanceYTD": { "amount": "30156280.18", "currencyCode": "EUR" }, "isFavorite": true, "performanceYTDpct": 2.02, "riskClass": "Med-High", "assetClasses": [{ "valuePct": 41.05, "name": "Bonds" }, { "valuePct": 27.58, "name": "Liquidities" }, { "valuePct": 14.11, "name": "Invested Funds" }, { "valuePct": 8.57, "name": "Obligations" }, { "valuePct": 5.2, "name": "Cash" }, { "valuePct": 1.4, "name": "Assets" }], "managers": [{ "id": "051f1b8f-8369-4587-89c2-856ee9990f2d", "name": "Maud Karpets" }, { "id": "7a781a6a-f6b2-4c33-9d48-0c5be1a07f1b", "name": "Brina Godart" }], "attorneys": [{ "id": "80eef010-055c-43f1-94a8-d2b58b4e1680", "name": "Daisey Meconi" }] }, { "IBAN": "HS19915622324357", "clientName": "Wat Coltherd", "alias": "Personal", "valuation": { "amount": "10963980.58", "currencyCode": "EUR" }, "inCashTotal": { "amount": "520560.20", "currencyCode": "EUR" }, "outCashTotal": { "amount": "17025296.92", "currencyCode": "EUR" }, "performanceMTD": { "amount": "7410143.97", "currencyCode": "EUR" }, "performanceMTDpct": 1.32, "performanceYTD": { "amount": "50573059.51", "currencyCode": "EUR" }, "isFavorite": true, "performanceYTDpct": -4.59, "riskClass": "Med-Low", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "628fad8d-3a60-4e71-839a-4b11ed3c97ed", "name": "Zollie Webben" }], "attorneys": [{ "id": "4d9f2778-e7ee-4b5d-aa47-0e4228de1702", "name": "Rachelle Laimable" }] }, { "IBAN": "TC24995049762082", "clientName": "Jean Riggoll", "alias": "Wife", "valuation": { "amount": "24632359.96", "currencyCode": "EUR" }, "inCashTotal": { "amount": "19347556.83", "currencyCode": "EUR" }, "outCashTotal": { "amount": "47854103.77", "currencyCode": "EUR" }, "performanceMTD": { "amount": "52268906.79", "currencyCode": "EUR" }, "performanceMTDpct": -1.06, "performanceYTD": { "amount": "3447178.99", "currencyCode": "EUR" }, "performanceYTDpct": 4.55, "riskClass": "Med-Low", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "793834b6-5e62-4926-bbe5-436caaed9c46", "name": "Ber Battyll" }, { "id": "c160404f-48ba-4e07-8e2f-e4e39422a8de", "name": "Christian Arnao" }], "attorneys": [{ "id": "8a828248-52d6-4f66-985e-9084e43e419f", "name": "Regine Kaesmans" }] }, { "IBAN": "MQ25729403022801", "clientName": "Frieda Blower", "alias": "Wife", "valuation": { "amount": "28433531.31", "currencyCode": "EUR" }, "inCashTotal": { "amount": "15875429.02", "currencyCode": "EUR" }, "outCashTotal": { "amount": "6207453.08", "currencyCode": "EUR" }, "performanceMTD": { "amount": "54384364.50", "currencyCode": "EUR" }, "performanceMTDpct": 2.33, "performanceYTD": { "amount": "21299496.69", "currencyCode": "EUR" }, "performanceYTDpct": 0.16, "riskClass": "Med-Low", "assetClasses": [{ "valuePct": 58.23, "name": "Invested Funds" }, { "valuePct": 24.98, "name": "Cash" }, { "valuePct": 13.11, "name": "Bonds" }, { "valuePct": 5.8, "name": "Obligations" }, { "valuePct": 2.11, "name": "Liquidities" }, { "valuePct": -4.23, "name": "Assets" }], "managers": [{ "id": "93b5b7c5-0193-42cd-8f5c-70af3519c6c8", "name": "Hyacinthie McCart" }, { "id": "a28e12f4-f843-461f-a158-d70a8b254fd0", "name": "Ermanno Pettyfer" }], "attorneys": [{ "id": "fdd4e528-63ed-4a42-aa51-ec07a61e003c", "name": "Corrine Bullen" }] }, { "IBAN": "ER61365546077005", "clientName": "Evita Oakman", "alias": "Personal", "valuation": { "amount": "24872048.03", "currencyCode": "EUR" }, "inCashTotal": { "amount": "47107407.98", "currencyCode": "EUR" }, "outCashTotal": { "amount": "29116022.20", "currencyCode": "EUR" }, "performanceMTD": { "amount": "51440288.58", "currencyCode": "EUR" }, "performanceMTDpct": 0.48, "performanceYTD": { "amount": "9995294.91", "currencyCode": "EUR" }, "performanceYTDpct": 6.82, "riskClass": "Low", "assetClasses": [{ "valuePct": 45.05, "name": "Bonds" }, { "valuePct": 24.08, "name": "Liquidities" }, { "valuePct": 5.17, "name": "Invested Funds" }, { "valuePct": 2.59, "name": "Obligations" }], "managers": [{ "id": "a0fddbf9-83de-4336-9170-ad9da5d20011", "name": "Nelli Colvill" }], "attorneys": [{ "id": "14efd93a-4450-45be-9028-c5e409829305", "name": "Gertruda Ubee" }] }, { "IBAN": "ZR29916810575455", "clientName": "Boycey Linner", "alias": "Father", "valuation": { "amount": "12110112.83", "currencyCode": "EUR" }, "inCashTotal": { "amount": "2733568.13", "currencyCode": "EUR" }, "outCashTotal": { "amount": "19794850.26", "currencyCode": "EUR" }, "performanceMTD": { "amount": "24344705.12", "currencyCode": "EUR" }, "performanceMTDpct": 0.51, "performanceYTD": { "amount": "47832224.89", "currencyCode": "EUR" }, "performanceYTDpct": 4.92, "riskClass": "Med-Low", "assetClasses": [{ "valuePct": 70.55, "name": "Bonds" }, { "valuePct": 20.08, "name": "Liquidities" }, { "valuePct": 5.11, "name": "Invested Funds" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "d0fcc688-3b22-4366-88ca-cf64ff15fe84", "name": "Darleen Scourgie" }], "attorneys": [{ "id": "e6b38c1f-8565-40f9-8d0d-676c3add3723", "name": "Aube Keunemann" }] }, { "IBAN": "VX31822038217983", "clientName": "Melisandra Oughton", "alias": "Wife", "valuation": { "amount": "33857576.85", "currencyCode": "EUR" }, "inCashTotal": { "amount": "9466730.68", "currencyCode": "EUR" }, "outCashTotal": { "amount": "17822102.70", "currencyCode": "EUR" }, "isFavorite": true, "performanceMTD": { "amount": "10875736.04", "currencyCode": "EUR" }, "performanceMTDpct": -1.48, "performanceYTD": { "amount": "19690044.87", "currencyCode": "EUR" }, "performanceYTDpct": 2.89, "riskClass": "High", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "066d3710-8c3d-4ef1-a62a-a15a7b581726", "name": "Carlye Woolger" }], "attorneys": [{ "id": "63adf29d-aac4-43f0-be44-8d9b615eb459", "name": "Tabitha Nurden" }] }, { "IBAN": "OY33315843075119", "clientName": "Kristofer McElree", "alias": "Kids", "valuation": { "amount": "1558025.67", "currencyCode": "EUR" }, "inCashTotal": { "amount": "23810348.23", "currencyCode": "EUR" }, "outCashTotal": { "amount": "24874781.72", "currencyCode": "EUR" }, "performanceMTD": { "amount": "29860262.37", "currencyCode": "EUR" }, "performanceMTDpct": 1.67, "performanceYTD": { "amount": "38487837.18", "currencyCode": "EUR" }, "performanceYTDpct": 5.24, "riskClass": "Med", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "2253170f-99ae-4643-87c1-fd9a7fe8ed2c", "name": "Gerry Brim" }], "attorneys": [{ "id": "6371ed48-8374-4c21-82e4-6686cffd7e61", "name": "Shepperd Sibson" }] }, { "IBAN": "VD66399164472100", "clientName": "Zelma Parlatt", "alias": "Father", "valuation": { "amount": "36699354.89", "currencyCode": "EUR" }, "inCashTotal": { "amount": "41037925.97", "currencyCode": "EUR" }, "outCashTotal": { "amount": "14660094.08", "currencyCode": "EUR" }, "performanceMTD": { "amount": "46179088.38", "currencyCode": "EUR" }, "performanceMTDpct": 1.2, "performanceYTD": { "amount": "33848068.86", "currencyCode": "EUR" }, "performanceYTDpct": 6.63, "riskClass": "Med-Low", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "22a31e27-1cad-4eb3-92dc-e082669915db", "name": "Rosita Winslow" }], "attorneys": [{ "id": "f39be2bd-8416-456a-9f2c-2abe64e494fb", "name": "Andriette Bennellick" }] }, { "IBAN": "QM77989770003666", "clientName": "Guthrey Tumini", "alias": "Retirement", "valuation": { "amount": "11154673.81", "currencyCode": "EUR" }, "inCashTotal": { "amount": "18442037.76", "currencyCode": "EUR" }, "outCashTotal": { "amount": "48942347.36", "currencyCode": "EUR" }, "performanceMTD": { "amount": "24506814.22", "currencyCode": "EUR" }, "performanceMTDpct": 2.84, "performanceYTD": { "amount": "34842842.52", "currencyCode": "EUR" }, "performanceYTDpct": -1.67, "riskClass": "Med", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "f789b1ec-5c31-4135-9f9e-2a4a12756f78", "name": "Cicely Cunnah" }], "attorneys": [{ "id": "18ddab80-6bde-4d08-ae45-b44961a76c6f", "name": "Erwin Phettiplace" }] }, { "IBAN": "AZ40373921742317", "clientName": "Penni Jansen", "alias": "Father", "valuation": { "amount": "24942491.33", "currencyCode": "EUR" }, "inCashTotal": { "amount": "40788330.23", "currencyCode": "EUR" }, "outCashTotal": { "amount": "1246886.68", "currencyCode": "EUR" }, "performanceMTD": { "amount": "28020832.77", "currencyCode": "EUR" }, "performanceMTDpct": 0.74, "performanceYTD": { "amount": "3809680.39", "currencyCode": "EUR" }, "performanceYTDpct": 2.81, "riskClass": "High", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "c9de25eb-806f-4bae-890c-7f13f332a033", "name": "Bevan Dallewater" }, { "id": "17a54741-514a-409c-b7d3-a9c7fc6ba6f9", "name": "Guenevere Di Pietro" }], "attorneys": [{ "id": "ffde16ec-f5a3-4249-9b19-fe551c856bc5", "name": "Modesta McCrystal" }] }, { "IBAN": "VX97947747921015", "clientName": "Florri Reford", "alias": "Wife", "valuation": { "amount": "18855857.20", "currencyCode": "EUR" }, "inCashTotal": { "amount": "25856053.73", "currencyCode": "EUR" }, "outCashTotal": { "amount": "47139144.13", "currencyCode": "EUR" }, "performanceMTD": { "amount": "16025041.67", "currencyCode": "EUR" }, "performanceMTDpct": -0.4, "performanceYTD": { "amount": "18248565.25", "currencyCode": "EUR" }, "performanceYTDpct": 2.9, "riskClass": "Med", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "6589723b-0f35-45d1-a5e7-1d36d4bdec48", "name": "Stanfield Josifovitz" }, { "id": "b19f6c73-99e3-45cf-b40a-0e212a15017b", "name": "Cybil Caplen" }], "attorneys": [{ "id": "b0242bce-b3a5-41ff-afdf-3362aa5806b0", "name": "Franklin Baskwell" }] }, { "IBAN": "VQ09176733755407", "clientName": "Rudolfo Galler", "alias": "Personal", "valuation": { "amount": "38981101.62", "currencyCode": "EUR" }, "inCashTotal": { "amount": "45953484.77", "currencyCode": "EUR" }, "outCashTotal": { "amount": "16438933.00", "currencyCode": "EUR" }, "performanceMTD": { "amount": "37561213.47", "currencyCode": "EUR" }, "performanceMTDpct": 2.28, "performanceYTD": { "amount": "41390632.29", "currencyCode": "EUR" }, "performanceYTDpct": -0.7, "riskClass": "Med", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "f228af60-58f9-4d79-8025-3a8f15e9b046", "name": "Liz MacArthur" }, { "id": "a304f93c-d516-45f5-9cf9-330b7aeb8c09", "name": "Estrellita Costerd" }], "attorneys": [{ "id": "84d73751-2f2c-43b6-8b75-e39dec5921a8", "name": "Lou Gilluley" }] }, { "IBAN": "VK60249166853598", "clientName": "Ava Civitillo", "alias": "Father", "valuation": { "amount": "8659023.86", "currencyCode": "EUR" }, "inCashTotal": { "amount": "10563165.43", "currencyCode": "EUR" }, "outCashTotal": { "amount": "22725696.35", "currencyCode": "EUR" }, "performanceMTD": { "amount": "44736133.42", "currencyCode": "EUR" }, "performanceMTDpct": -1.3, "performanceYTD": { "amount": "30758596.45", "currencyCode": "EUR" }, "performanceYTDpct": 3.12, "riskClass": "Med-High", "assetClasses": [{ "valuePct": 34.55634, "name": "Bonds" }, { "valuePct": 30.08, "name": "Liquidities" }, { "valuePct": 15.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": -2.6, "name": "Assets" }], "managers": [{ "id": "b164e6a3-709e-4aaa-94fd-faca5a04be12", "name": "Ab Neising" }, { "id": "24dd30fe-0a99-437d-8e70-c460ed56505d", "name": "Robinet Spacy" }], "attorneys": [{ "id": "00a48323-eff3-41f5-8bfd-014786f3426c", "name": "Ardine Renvoise" }] }, { "IBAN": "YZ34893216423248", "clientName": "Justina Kenyam", "alias": "Retirement", "valuation": { "amount": "13880120.25", "currencyCode": "EUR" }, "inCashTotal": { "amount": "1883928.96", "currencyCode": "EUR" }, "outCashTotal": { "amount": "16068548.96", "currencyCode": "EUR" }, "performanceMTD": { "amount": "2821559.09", "currencyCode": "EUR" }, "performanceMTDpct": 0.96, "performanceYTD": { "amount": "8182023.25", "currencyCode": "EUR" }, "performanceYTDpct": -0.47, "riskClass": "Med-Low", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "edf2b5ee-7441-4492-b74c-a95611decc9c", "name": "Michel Gussin" }, { "id": "c4140246-eefb-40d1-b2c0-5cb98235540b", "name": "Durante Winson" }], "attorneys": [{ "id": "42f0ccd9-4bb7-4680-8177-bdc9ff70f1ec", "name": "Datha Dear" }] }, { "IBAN": "RZ39562375106712", "clientName": "Gillian Durrand", "alias": "Personal", "valuation": { "amount": "45089074.34", "currencyCode": "EUR" }, "inCashTotal": { "amount": "21338595.26", "currencyCode": "EUR" }, "outCashTotal": { "amount": "40166332.91", "currencyCode": "EUR" }, "performanceMTD": { "amount": "16298349.28", "currencyCode": "EUR" }, "performanceMTDpct": 2.2, "performanceYTD": { "amount": "28690099.58", "currencyCode": "EUR" }, "performanceYTDpct": -4.92, "riskClass": "Med", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "8319992d-a9a4-40ab-82a6-938962b8ee84", "name": "Rivi Horsell" }, { "id": "49961fc2-5896-4434-a40b-a85950e0eae2", "name": "Dara Ohlsen" }], "attorneys": [{ "id": "d09c737a-6b74-4c52-b823-7cfb52db2f0d", "name": "Freddie Chatelot" }] }, { "IBAN": "FW07615448080014", "clientName": "Chic Rainy", "alias": "Wife", "valuation": { "amount": "24079920.80", "currencyCode": "EUR" }, "inCashTotal": { "amount": "3750314.77", "currencyCode": "EUR" }, "outCashTotal": { "amount": "10814200.00", "currencyCode": "EUR" }, "performanceMTD": { "amount": "12256671.28", "currencyCode": "EUR" }, "performanceMTDpct": -0.25, "performanceYTD": { "amount": "50538009.45", "currencyCode": "EUR" }, "performanceYTDpct": 5.69, "riskClass": "Med-Low", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "60c977f6-7dd4-4759-925f-807400195ab1", "name": "Thain Life" }, { "id": "88942478-132e-4dcb-8ae5-34e733cadd26", "name": "Vassily Blenkiron" }], "attorneys": [{ "id": "0e5fc148-cd1f-4fde-950b-a73b58c31a41", "name": "Jillian Alldre" }] }, { "IBAN": "RM45114736646773", "clientName": "Dunc Cardenas", "alias": "Retirement", "valuation": { "amount": "5242649.53", "currencyCode": "EUR" }, "inCashTotal": { "amount": "9727238.30", "currencyCode": "EUR" }, "outCashTotal": { "amount": "53097925.84", "currencyCode": "EUR" }, "performanceMTD": { "amount": "36097830.39", "currencyCode": "EUR" }, "performanceMTDpct": 0.96, "performanceYTD": { "amount": "11114648.46", "currencyCode": "EUR" }, "performanceYTDpct": 0.79, "riskClass": "Med-Low", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "7ccef01a-7509-4127-b225-056a75473b62", "name": "Harold Challens" }, { "id": "c871fd47-279a-4138-8f0d-d1841cbbc5e6", "name": "Pail Dillinton" }], "attorneys": [{ "id": "7c111f23-d6c9-4eec-b311-0a209614724a", "name": "Bessy Northam" }] }, { "IBAN": "PY43008723212556", "clientName": "Ring Burgill", "alias": "Kids", "valuation": { "amount": "30506286.32", "currencyCode": "EUR" }, "inCashTotal": { "amount": "21914475.33", "currencyCode": "EUR" }, "outCashTotal": { "amount": "41116453.79", "currencyCode": "EUR" }, "performanceMTD": { "amount": "48203222.70", "currencyCode": "EUR" }, "performanceMTDpct": 2.19, "performanceYTD": { "amount": "52867745.73", "currencyCode": "EUR" }, "performanceYTDpct": 0.96, "riskClass": "Med", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "77d98b50-a8f4-4b00-baf8-3ff6810222ba", "name": "Dionysus Gregoletti" }, { "id": "bd9d60e6-f5cd-40e4-ae82-c7618a747d10", "name": "Jany Rippingall" }], "attorneys": [{ "id": "5c4cf9d2-6e47-4ce3-9118-e9c233134465", "name": "Blair Joseph" }] }, { "IBAN": "WA67683751780773", "clientName": "Jedidiah Forty", "alias": "Kids", "valuation": { "amount": "39299828.15", "currencyCode": "EUR" }, "inCashTotal": { "amount": "27104235.65", "currencyCode": "EUR" }, "outCashTotal": { "amount": "2582387.40", "currencyCode": "EUR" }, "performanceMTD": { "amount": "30939426.98", "currencyCode": "EUR" }, "performanceMTDpct": 2.38, "performanceYTD": { "amount": "42422714.52", "currencyCode": "EUR" }, "performanceYTDpct": -4.86, "riskClass": "Med", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "0eabb21e-287b-4795-ac22-d04c6a119977", "name": "Biron Roast" }], "attorneys": [{ "id": "e33a44f5-7312-48fd-bc7e-6cfffaafc3e9", "name": "Sterling Taaffe" }] }, { "IBAN": "AQ27894161617268", "clientName": "Robyn Jenner", "alias": "Personal", "valuation": { "amount": "31766004.14", "currencyCode": "EUR" }, "inCashTotal": { "amount": "7987263.13", "currencyCode": "EUR" }, "outCashTotal": { "amount": "51312613.47", "currencyCode": "EUR" }, "performanceMTD": { "amount": "40214728.48", "currencyCode": "EUR" }, "performanceMTDpct": 1.71, "performanceYTD": { "amount": "12726984.28", "currencyCode": "EUR" }, "performanceYTDpct": -0.33, "riskClass": "Low", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "85af702b-6ccb-4f1c-be84-08323798128a", "name": "Agneta Gaskamp" }], "attorneys": [{ "id": "e79f3bb1-9c9f-4041-95f1-c859f7f0ff12", "name": "Brice Cleall" }] }, { "IBAN": "UB18839670684683", "clientName": "Emili Fletcher", "alias": "Personal", "valuation": { "amount": "42316760.27", "currencyCode": "EUR" }, "inCashTotal": { "amount": "45969653.05", "currencyCode": "EUR" }, "outCashTotal": { "amount": "22349032.47", "currencyCode": "EUR" }, "performanceMTD": { "amount": "32559662.15", "currencyCode": "EUR" }, "performanceMTDpct": -1.38, "performanceYTD": { "amount": "1537728.86", "currencyCode": "EUR" }, "performanceYTDpct": 3.71, "riskClass": "Low", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "26c03d26-76b1-4a9e-b9ab-6f396b9c8ccf", "name": "Carmelle Ambrogioni" }], "attorneys": [{ "id": "62dd46b5-7ce2-4254-87d9-4c294d401428", "name": "Gale Alvarado" }] }, { "IBAN": "BG46146471092151", "clientName": "Joyous Hanstock", "alias": "Wife", "valuation": { "amount": "17404640.12", "currencyCode": "EUR" }, "inCashTotal": { "amount": "25937649.89", "currencyCode": "EUR" }, "outCashTotal": { "amount": "17985819.62", "currencyCode": "EUR" }, "performanceMTD": { "amount": "2613670.67", "currencyCode": "EUR" }, "performanceMTDpct": -0.03, "performanceYTD": { "amount": "30005036.11", "currencyCode": "EUR" }, "performanceYTDpct": -4.87, "riskClass": "Low", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "8f33fa81-fe67-41a9-a29e-987fd34c4d7d", "name": "Aleda Iacoviello" }, { "id": "a9f1fb8c-23f2-42e3-a7a1-c3e4484de84a", "name": "Arly Boniface" }], "attorneys": [{ "id": "e0d06172-e8b3-4f6c-acb5-6c5af091b847", "name": "Chilton Vaneschi" }] }, { "IBAN": "VG98227751363045", "clientName": "Conroy Hallad", "alias": "Kids", "valuation": { "amount": "3164636.13", "currencyCode": "EUR" }, "inCashTotal": { "amount": "23402326.68", "currencyCode": "EUR" }, "outCashTotal": { "amount": "44229800.67", "currencyCode": "EUR" }, "performanceMTD": { "amount": "8124896.19", "currencyCode": "EUR" }, "performanceMTDpct": 1.84, "performanceYTD": { "amount": "21215633.95", "currencyCode": "EUR" }, "performanceYTDpct": -3.92, "riskClass": "Low", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "adb33f9b-1955-4de6-b525-422a30a53275", "name": "Brett Vinnicombe" }, { "id": "c834fd92-d466-4f82-94ac-fcdb87826224", "name": "Merrile Ghent" }], "attorneys": [{ "id": "cc4f2a42-313d-4dab-9d30-59ff52a5db35", "name": "Turner Phillpot" }] }, { "IBAN": "OC62012852912746", "clientName": "Malachi Reicherz", "alias": "Wife", "valuation": { "amount": "30711043.76", "currencyCode": "EUR" }, "inCashTotal": { "amount": "38380140.61", "currencyCode": "EUR" }, "outCashTotal": { "amount": "11595094.38", "currencyCode": "EUR" }, "performanceMTD": { "amount": "20536958.35", "currencyCode": "EUR" }, "performanceMTDpct": 0.54, "performanceYTD": { "amount": "34002364.36", "currencyCode": "EUR" }, "performanceYTDpct": 5.7, "riskClass": "High", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "c6161340-340a-49c3-8a2e-0cf18b51f2a0", "name": "Julieta Rose" }, { "id": "4147f058-7494-482d-8b37-8910cf91ea3a", "name": "Liesa Plumstead" }], "attorneys": [{ "id": "91f9f05f-b61c-48b7-8b6d-02fe2f4ee281", "name": "Elly Wimbush" }] }, { "IBAN": "UB20420129827693", "clientName": "Davina Snow", "alias": "Personal", "valuation": { "amount": "49010569.48", "currencyCode": "EUR" }, "inCashTotal": { "amount": "36669762.12", "currencyCode": "EUR" }, "outCashTotal": { "amount": "42396476.78", "currencyCode": "EUR" }, "performanceMTD": { "amount": "46592223.47", "currencyCode": "EUR" }, "performanceMTDpct": 0.13, "performanceYTD": { "amount": "17192637.05", "currencyCode": "EUR" }, "performanceYTDpct": -3.31, "riskClass": "Med", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "f42e3a08-f7ab-4474-9d59-933b16d07843", "name": "Udale Phorsby" }], "attorneys": [{ "id": "51a446df-6306-4373-b701-c702b9b2a197", "name": "Shay Bande" }] }, { "IBAN": "JU14696556580348", "clientName": "Pepita Trenear", "alias": "Personal", "valuation": { "amount": "35747926.29", "currencyCode": "EUR" }, "inCashTotal": { "amount": "35343375.38", "currencyCode": "EUR" }, "outCashTotal": { "amount": "18936199.96", "currencyCode": "EUR" }, "performanceMTD": { "amount": "34788329.66", "currencyCode": "EUR" }, "performanceMTDpct": -1.39, "performanceYTD": { "amount": "36966116.86", "currencyCode": "EUR" }, "performanceYTDpct": -0.52, "riskClass": "Med", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "ce632947-640c-4a7d-a9d2-0b386ecbb786", "name": "Karlee Breen" }, { "id": "3b067b82-9ce3-4e76-9a78-6d3100c508bb", "name": "Casie Trengrove" }], "attorneys": [{ "id": "86faa96b-a85d-4405-ad26-aae45d99fb61", "name": "Celina Course" }] }, { "IBAN": "RN38311871195433", "clientName": "Emogene Di Nisco", "alias": "Retirement", "valuation": { "amount": "21861545.76", "currencyCode": "EUR" }, "inCashTotal": { "amount": "46530694.67", "currencyCode": "EUR" }, "outCashTotal": { "amount": "49035102.70", "currencyCode": "EUR" }, "performanceMTD": { "amount": "17936290.90", "currencyCode": "EUR" }, "performanceMTDpct": 0.47, "performanceYTD": { "amount": "14390660.24", "currencyCode": "EUR" }, "performanceYTDpct": 6.31, "riskClass": "Med-High", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "42275e03-1c90-4a89-b70c-fba5cf5fc1e7", "name": "Dela Nightingale" }, { "id": "a38d34d2-e0ad-4ee0-b1ce-1e5c3e83e08d", "name": "Joly Hanson" }], "attorneys": [{ "id": "58e156b9-4712-47d3-aad7-8ff274ad68c8", "name": "Ruthy Pitney" }] }, { "IBAN": "UR01135487961474", "clientName": "Nari Everard", "alias": "Wife", "valuation": { "amount": "29681456.67", "currencyCode": "EUR" }, "inCashTotal": { "amount": "28389944.81", "currencyCode": "EUR" }, "outCashTotal": { "amount": "3878090.48", "currencyCode": "EUR" }, "performanceMTD": { "amount": "2121576.67", "currencyCode": "EUR" }, "performanceMTDpct": 1.1, "performanceYTD": { "amount": "18016336.41", "currencyCode": "EUR" }, "performanceYTDpct": 2.69, "riskClass": "Med-High", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "3ed7cc1e-0c75-4a51-bf60-18a78523793b", "name": "Katee Tennison" }, { "id": "ebf63376-e6d1-4292-8bbe-f2131e550cbb", "name": "Derron Izkovicz" }], "attorneys": [{ "id": "d98c0741-ee45-4299-a553-1eff274f133c", "name": "Odette Fryatt" }] }, { "IBAN": "SI58382767532475", "clientName": "Saleem Mea", "alias": "Personal", "valuation": { "amount": "16501115.38", "currencyCode": "EUR" }, "inCashTotal": { "amount": "24282821.32", "currencyCode": "EUR" }, "outCashTotal": { "amount": "44312810.63", "currencyCode": "EUR" }, "performanceMTD": { "amount": "45691849.31", "currencyCode": "EUR" }, "performanceMTDpct": 0.11, "performanceYTD": { "amount": "14148112.10", "currencyCode": "EUR" }, "performanceYTDpct": 0.98, "riskClass": "Med-High", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "241ad375-5e02-40eb-9690-7bf8fc455409", "name": "Hermione Jillions" }], "attorneys": [{ "id": "98c230f2-ab13-4202-8b32-3d36da4a39e8", "name": "Buddie Mathe" }] }, { "IBAN": "TV72237240577783", "clientName": "Ginnifer Winks", "alias": "Wife", "valuation": { "amount": "5831197.04", "currencyCode": "EUR" }, "inCashTotal": { "amount": "27379973.89", "currencyCode": "EUR" }, "outCashTotal": { "amount": "40785759.21", "currencyCode": "EUR" }, "performanceMTD": { "amount": "32228944.97", "currencyCode": "EUR" }, "performanceMTDpct": 1.1, "performanceYTD": { "amount": "15560716.06", "currencyCode": "EUR" }, "performanceYTDpct": -1.49, "riskClass": "Low", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "7652fb25-8d09-4ebb-8364-dcf068e7c7cf", "name": "Kalinda Shutler" }, { "id": "dc82b834-9f81-42e2-bce3-6d4640907200", "name": "Odie Joffe" }], "attorneys": [{ "id": "562e6453-5e28-4eb1-9aae-70f48b5bbee4", "name": "Karney Ambroz" }] }, { "IBAN": "TS42684630147728", "clientName": "Ingrim Dickerson", "alias": "Retirement", "valuation": { "amount": "30028934.07", "currencyCode": "EUR" }, "inCashTotal": { "amount": "40813568.86", "currencyCode": "EUR" }, "outCashTotal": { "amount": "46766665.58", "currencyCode": "EUR" }, "performanceMTD": { "amount": "52672846.40", "currencyCode": "EUR" }, "performanceMTDpct": 0.2, "performanceYTD": { "amount": "47573277.95", "currencyCode": "EUR" }, "performanceYTDpct": 5.48, "riskClass": "Low", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "67491c13-bc0f-4dd8-b1c2-a51bafb498be", "name": "Rosalind Crothers" }, { "id": "c3aa062b-d875-4224-bb0d-531f2bacc2fd", "name": "Wilburt McIntee" }], "attorneys": [{ "id": "f60bd2c0-7b43-4708-99a0-2a184aae9412", "name": "Armstrong Matten" }] }, { "IBAN": "GL57563793567575", "clientName": "Dicky Graybeal", "alias": "Kids", "valuation": { "amount": "48549426.40", "currencyCode": "EUR" }, "inCashTotal": { "amount": "20764703.81", "currencyCode": "EUR" }, "outCashTotal": { "amount": "48778773.15", "currencyCode": "EUR" }, "performanceMTD": { "amount": "41435383.86", "currencyCode": "EUR" }, "performanceMTDpct": 0.18, "performanceYTD": { "amount": "45609374.24", "currencyCode": "EUR" }, "performanceYTDpct": -1.54, "riskClass": "Med-Low", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "7c8055e2-3512-4cf5-a6a7-8fc27b19c8f6", "name": "Murdock Kenway" }, { "id": "317bd048-23e9-4195-a80d-6921da390ec8", "name": "Park Quick" }], "attorneys": [{ "id": "807b7750-f69c-41d8-8a98-b371705c6a83", "name": "Bennie Ingleton" }] }, { "IBAN": "CS93322739623703", "clientName": "Bonni Eller", "alias": "Personal", "valuation": { "amount": "31884935.00", "currencyCode": "EUR" }, "inCashTotal": { "amount": "30082423.61", "currencyCode": "EUR" }, "outCashTotal": { "amount": "49843927.51", "currencyCode": "EUR" }, "performanceMTD": { "amount": "49505175.77", "currencyCode": "EUR" }, "performanceMTDpct": 1.17, "performanceYTD": { "amount": "51484585.72", "currencyCode": "EUR" }, "performanceYTDpct": 3, "riskClass": "Low", "assetClasses": [], "managers": [{ "id": "cd809b07-ce9f-46d8-8d27-f7303f0f657b", "name": "Micki Mouan" }, { "id": "02f6d84b-57ce-486a-8cbe-28081ff60c1c", "name": "Corella Atwool" }], "attorneys": [{ "id": "139e8d54-ba08-43de-bd32-435aa84b23c7", "name": "Sim O'Bruen" }] }, { "IBAN": "MY27735152141199", "clientName": "Pedro Imloch", "alias": "Wife", "valuation": { "amount": "4843097.49", "currencyCode": "EUR" }, "inCashTotal": { "amount": "18370801.13", "currencyCode": "EUR" }, "outCashTotal": { "amount": "40181558.43", "currencyCode": "EUR" }, "performanceMTD": { "amount": "12729988.61", "currencyCode": "EUR" }, "performanceMTDpct": 1.9, "performanceYTD": { "amount": "14680636.59", "currencyCode": "EUR" }, "performanceYTDpct": 2.97, "riskClass": "Low", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "fe4a64bd-173e-4d3a-9e35-186d1e368c92", "name": "Dud Cruces" }, { "id": "b5751b07-fcf0-481c-ab72-b09ec7c0ac1e", "name": "Cob Barkhouse" }], "attorneys": [{ "id": "e661528b-f2df-46fb-ae21-39cf82d27daf", "name": "Clair Romke" }] }, { "IBAN": "NK30086034330698", "clientName": "Hewet Awcock", "alias": "Personal", "valuation": { "amount": "45177578.62", "currencyCode": "EUR" }, "inCashTotal": { "amount": "42639075.41", "currencyCode": "EUR" }, "outCashTotal": { "amount": "14476200.27", "currencyCode": "EUR" }, "performanceMTD": { "amount": "32725425.88", "currencyCode": "EUR" }, "performanceMTDpct": -1.89, "performanceYTD": { "amount": "45424520.27", "currencyCode": "EUR" }, "performanceYTDpct": 3.74, "riskClass": "Med", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "7a59f76c-5403-4173-a6ed-7493ba02f1c5", "name": "Amil Boissier" }], "attorneys": [{ "id": "efa58264-fc24-400e-b9de-a60b19e908cb", "name": "Ulla Yglesia" }] }, { "IBAN": "CN74460033886889", "clientName": "Rozelle Attwoull", "alias": "Personal", "valuation": { "amount": "29355502.79", "currencyCode": "EUR" }, "inCashTotal": { "amount": "44246498.75", "currencyCode": "EUR" }, "outCashTotal": { "amount": "53460385.65", "currencyCode": "EUR" }, "performanceMTD": { "amount": "54203309.40", "currencyCode": "EUR" }, "performanceMTDpct": 0.6, "performanceYTD": { "amount": "51649156.07", "currencyCode": "EUR" }, "performanceYTDpct": 4.32, "riskClass": "Med-High", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "ac9ed3ee-4cbc-4e6f-8d4c-1108e0d43a77", "name": "Ardeen Singyard" }], "attorneys": [{ "id": "568c0cc0-fba8-4059-a726-c2c36598e831", "name": "Giffer Douthwaite" }] }, { "IBAN": "KZ09408991701031", "clientName": "Gregorius Kruschev", "alias": "Personal", "valuation": { "amount": "39813140.68", "currencyCode": "EUR" }, "inCashTotal": { "amount": "12555690.26", "currencyCode": "EUR" }, "outCashTotal": { "amount": "37803043.69", "currencyCode": "EUR" }, "performanceMTD": { "amount": "7552762.57", "currencyCode": "EUR" }, "performanceMTDpct": 1.67, "performanceYTD": { "amount": "21487805.00", "currencyCode": "EUR" }, "performanceYTDpct": 6.09, "riskClass": "Med-High", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "00038ece-377e-4968-964a-caae725e0ed2", "name": "Imelda Lawland" }, { "id": "76796624-2c01-43b5-ae6d-c4ea5ad76084", "name": "Maegan Denney" }], "attorneys": [{ "id": "ca87a296-5a0d-4c4f-b0c5-56278767c049", "name": "Archy Fernehough" }] }, { "IBAN": "ZS00173220848807", "clientName": "Llewellyn Sellar", "alias": "Personal", "valuation": { "amount": "46913045.06", "currencyCode": "EUR" }, "inCashTotal": { "amount": "51695328.05", "currencyCode": "EUR" }, "outCashTotal": { "amount": "34889346.33", "currencyCode": "EUR" }, "performanceMTD": { "amount": "44203033.26", "currencyCode": "EUR" }, "performanceMTDpct": 0.28, "performanceYTD": { "amount": "48289397.29", "currencyCode": "EUR" }, "performanceYTDpct": 5.58, "riskClass": "Med-Low", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "7f41f11e-ed7f-483d-b9a7-89ce261a4f36", "name": "Josepha Doleman" }, { "id": "d8902549-e742-4a17-a0eb-f2ed3977da71", "name": "Antoine McLuckie" }], "attorneys": [{ "id": "e76d05ff-52c9-4b69-b07b-2003ce0ae598", "name": "Franky St. Clair" }] }, { "IBAN": "OS93612441973856", "clientName": "Geno Williscroft", "alias": "Retirement", "valuation": { "amount": "30654635.55", "currencyCode": "EUR" }, "inCashTotal": { "amount": "6152965.84", "currencyCode": "EUR" }, "outCashTotal": { "amount": "54333667.77", "currencyCode": "EUR" }, "performanceMTD": { "amount": "34436486.63", "currencyCode": "EUR" }, "performanceMTDpct": -0.4, "performanceYTD": { "amount": "24991733.15", "currencyCode": "EUR" }, "performanceYTDpct": 0.89, "riskClass": "Med-Low", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "ac8a6a35-c4de-4649-9dcd-a658402221df", "name": "Hugibert Oddey" }], "attorneys": [{ "id": "e55367cc-5089-47a0-9113-9f513baafacc", "name": "Ozzy Hullah" }] }, { "IBAN": "RM13177780921386", "clientName": "Whitney McSherry", "alias": "Personal", "valuation": { "amount": "39652286.85", "currencyCode": "EUR" }, "inCashTotal": { "amount": "21605285.53", "currencyCode": "EUR" }, "outCashTotal": { "amount": "38674667.62", "currencyCode": "EUR" }, "performanceMTD": { "amount": "10018524.55", "currencyCode": "EUR" }, "performanceMTDpct": -1.59, "performanceYTD": { "amount": "53332303.13", "currencyCode": "EUR" }, "performanceYTDpct": 4.96, "riskClass": "Med-High", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "8438fbd0-f495-4c1c-9ee9-f3d5bac1250c", "name": "Perren Atlay" }, { "id": "66714205-4891-4ca5-9e8c-a1b91a338292", "name": "Dorolisa Charlesworth" }], "attorneys": [{ "id": "b3989f55-d41e-4614-8bfd-e522989306b2", "name": "Steffen Dyne" }] }, { "IBAN": "FB13002870995518", "clientName": "Jasmin Jzhakov", "alias": "Kids", "valuation": { "amount": "34403379.99", "currencyCode": "EUR" }, "inCashTotal": { "amount": "40985885.22", "currencyCode": "EUR" }, "outCashTotal": { "amount": "46450889.01", "currencyCode": "EUR" }, "performanceMTD": { "amount": "54792944.50", "currencyCode": "EUR" }, "performanceMTDpct": 2.95, "performanceYTD": { "amount": "46363781.71", "currencyCode": "EUR" }, "performanceYTDpct": 6.53, "riskClass": "Med", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "c99dcc0f-eda2-4b1a-a8ad-2565bbca23ee", "name": "Jule Yanshin" }, { "id": "83587894-56b2-41ec-a00e-b4d40461bf9c", "name": "Bonnie Vittore" }], "attorneys": [{ "id": "9a907877-c5eb-4036-9404-cbc314f099b7", "name": "Ron Chessil" }] }, { "IBAN": "YK86789464888525", "clientName": "Celeste Langley", "alias": "Personal", "valuation": { "amount": "16575423.41", "currencyCode": "EUR" }, "inCashTotal": { "amount": "9212586.92", "currencyCode": "EUR" }, "outCashTotal": { "amount": "3396863.83", "currencyCode": "EUR" }, "performanceMTD": { "amount": "24968128.66", "currencyCode": "EUR" }, "performanceMTDpct": 1.93, "performanceYTD": { "amount": "45546708.24", "currencyCode": "EUR" }, "performanceYTDpct": 4.95, "riskClass": "Med", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "e6d511d8-3168-4f3e-9ba2-7719381dd00d", "name": "Grannie Donisthorpe" }, { "id": "28a5f137-d641-4c49-9e8b-f50e649459bf", "name": "Darsie Killner" }], "attorneys": [{ "id": "1e7f2771-955f-4a52-ab9d-cb8d9ef4c08b", "name": "Eward Aphale" }] }, { "IBAN": "YH74295196204265", "clientName": "Marthena Ladyman", "alias": "Kids", "valuation": { "amount": "4998717.74", "currencyCode": "EUR" }, "inCashTotal": { "amount": "501223.81", "currencyCode": "EUR" }, "outCashTotal": { "amount": "30489569.64", "currencyCode": "EUR" }, "performanceMTD": { "amount": "1029753.88", "currencyCode": "EUR" }, "performanceMTDpct": -1.32, "performanceYTD": { "amount": "48629688.82", "currencyCode": "EUR" }, "performanceYTDpct": -0.97, "riskClass": "Low", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "a124398b-002b-4c1d-bcb0-7e17d0831b8f", "name": "Alma Atter" }, { "id": "a4d3ef04-304b-467e-aced-05aad2234e72", "name": "Anjela Brandone" }], "attorneys": [{ "id": "f106eacf-4f90-48f9-a044-01b4b34eba37", "name": "Walliw Stirtle" }] }, { "IBAN": "WS09298585470860", "clientName": "Kanya Extill", "alias": "Wife", "valuation": { "amount": "51450036.46", "currencyCode": "EUR" }, "inCashTotal": { "amount": "54782726.85", "currencyCode": "EUR" }, "outCashTotal": { "amount": "22480853.00", "currencyCode": "EUR" }, "performanceMTD": { "amount": "41417454.84", "currencyCode": "EUR" }, "performanceMTDpct": -1.03, "performanceYTD": { "amount": "29961513.15", "currencyCode": "EUR" }, "performanceYTDpct": 2.57, "riskClass": "Med-Low", "assetClasses": [{ "valuePct": 45.55, "name": "Bonds" }, { "valuePct": 23.08, "name": "Liquidities" }, { "valuePct": 17.11, "name": "Invested Funds" }, { "valuePct": 5.57, "name": "Obligations" }, { "valuePct": 4, "name": "Cash" }, { "valuePct": 2.6, "name": "Assets" }], "managers": [{ "id": "c25db4c1-6934-4bce-94e3-d43b59cb66aa", "name": "Karlyn Laffan" }, { "id": "e1343acc-0ca4-483a-a534-7bce40422218", "name": "Andres Loverock" }], "attorneys": [{ "id": "abc792ce-e6a8-4d1e-9579-8b568184f85b", "name": "Lacie Stelfax" }] }] }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": null }],
	
	      getPortfoliosummaryRecord: [{ "status": 200, "data": { "IBAN": "FR276305383133S5JVFEW1YAG70", "clientName": "Michael Davis", "alias": "Retirement Portfolio", "valuation": { "amount": "858101238.00", "currencyCode": "EUR" }, "inCashTotal": { "amount": "119115.00", "currencyCode": "EUR" }, "outCashTotal": { "amount": "547.00", "currencyCode": "EUR" }, "performanceMTD": { "amount": "8076.00", "currencyCode": "EUR" }, "performanceMTDpct": 1.25, "performanceYTD": { "amount": "87462546.00", "currencyCode": "EUR" }, "performanceYTDpct": 0.015, "riskClass": "Med-Low", "assetClasses": [{ "valuePct": 58.66, "name": "Obligations" }, { "valuePct": 15.68, "name": "Cash" }, { "valuePct": 12.78, "name": "Invested Funds" }, { "valuePct": 12.37, "name": "Bonds" }, { "valuePct": 0.55, "name": "Liquidities" }, { "valuePct": 0, "name": "Assets" }, { "valuePct": -0.04, "name": "Commodities" }], "managers": [{ "id": "345", "name": "John Doe" }, { "id": "235", "name": "Mark Clarson" }], "attorneys": [{ "id": "1934", "name": "Sem Hurson" }] } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": null }],
	
	      postPortfoliosummaryCustomListRecord: [{ "status": 200, "data": { "uuid": "550e8400-e29b-41d4-a716-446655440002" } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 403, "data": null }, { "status": 409, "data": null }, { "status": 422, "data": null }, { "status": 500, "data": null }],
	
	      getPortfoliosummaryCustomList: [{ "status": 200, "data": [{ "name": "Consumer Durables", "uuid": "c7ab6eda-14c3-4c5c-b988-29c4e6367213" }, { "name": "Armageddon", "uuid": "7ea777c5-5a12-4665-84d0-7fe3e8b3a2dd" }, { "name": "Consumer Services", "uuid": "aeb53dba-2e91-49d1-9e27-02e6e5ca2f40" }, { "name": "Wife", "uuid": "b3739def-ba74-4656-bf0c-f42ad2ce3711" }, { "name": "Technology", "uuid": "6ad98bb2-a091-4d0f-8390-45f80818af90" }, { "name": "Capital Goods", "uuid": "20fd897a-a4ab-4a96-924f-b89386ad860f" }, { "name": "Car Industry", "uuid": "d91dc92f-1cb2-464f-9e1e-3e1f770d9ba2" }, { "name": "Finance", "uuid": "173a42fd-3298-4abf-91f6-1d05abbaaaa4" }, { "name": "Energy", "uuid": "54232a85-f8ad-4fb4-ba42-7f45fbcb58bc" }, { "name": "Parents", "uuid": "502dfbeb-bd23-477b-b345-796891b15f72" }, { "name": "Kids", "uuid": "10154998-7eff-42d8-84ec-0a76c09c7cea" }, { "name": "Future Technology", "uuid": "d9596a95-ac0f-42c3-b7db-7e7a37ed05c6" }, { "name": "Electronics", "uuid": "879aac8c-6e4d-431e-a9b1-cc2851748ff1" }, { "name": "John Gold", "uuid": "941900e8-0034-4d2e-a338-5aafeb09f386" }, { "name": "Yacht", "uuid": "1b4a837f-5e05-433f-b09f-d91842f5ee80" }, { "name": "Islands", "uuid": "c5e0cbe3-c070-417e-ab86-ed7ec6e23964" }, { "name": "Record Company", "uuid": "1ecbc630-24e4-42fd-bd1b-9bec00c5dedc" }, { "name": "My Film", "uuid": "b798361f-c59e-455b-a51c-66668d1eab2c" }] }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": null }],
	
	      putPortfoliosummaryFavoritesRecord: [{ "status": 200, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 403, "data": null }, { "status": 409, "data": null }, { "status": 422, "data": null }, { "status": 500, "data": null }],
	
	      postPortfoliosummaryClientOrderRecord: [{ "status": 200, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 422, "data": null }, { "status": 500, "data": null }],
	
	      postPortfoliosummaryAliasRecord: [{ "status": 200, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 422, "data": null }, { "status": 500, "data": null }],
	
	      getPortfoliosummaryPositions: [{ "status": 200, "data": { "accounts": [{ "id": "189ba245-67f9-4655-a895-d838d272bd78", "name": "Portfolio 1", "valuation": { "amount": "5059834.0", "currencyCode": "EUR" }, "performancePct": 48.03, "parentPct": 27.19 }, { "id": "a59160c1-8f56-4eb4-b36d-441c4d510335", "name": "Portfolio 2", "valuation": { "amount": "4237345.19", "currencyCode": "EUR" }, "performancePct": 4.21, "parentPct": 23.01 }, { "id": "96504021-b1c9-4944-a3f7-ae3d5d84e405", "name": "Portfolio 3", "valuation": { "amount": "8054936.75", "currencyCode": "EUR" }, "performancePct": 97.04, "parentPct": 19.17 }], "assetClasses": [{ "id": "1480a59f-dd55-4c3a-8ec5-299bb1a95edc", "accountId": "a59160c1-8f56-4eb4-b36d-441c4d510335", "name": "Equity", "accruedInterest": { "amount": "38699.18", "currencyCode": "EUR" }, "valuation": { "amount": "63616174.8", "currencyCode": "EUR" }, "unrealizedPL": { "amount": "2251.58", "currencyCode": "EUR" }, "portfolioPct": 15.19, "parentPct": 11.94 }, { "id": "b8c570d3-0135-45a1-8d47-602190bfa83f", "accountId": "96504021-b1c9-4944-a3f7-ae3d5d84e405", "name": "Equity", "accruedInterest": { "amount": "37537.38", "currencyCode": "EUR" }, "valuation": { "amount": "117159586.07", "currencyCode": "EUR" }, "unrealizedPL": { "amount": "2157.58", "currencyCode": "EUR" }, "portfolioPct": 27.19, "parentPct": 15.24 }, { "id": "c4e576f0-1a0c-452a-9f31-2fa82d1c046e", "accountId": "a59160c1-8f56-4eb4-b36d-441c4d510335", "name": "Bonds", "accruedInterest": { "amount": "37302.01", "currencyCode": "EUR" }, "valuation": { "amount": "43219365.02", "currencyCode": "EUR" }, "unrealizedPL": { "amount": "2111.44", "currencyCode": "EUR" }, "portfolioPct": 21.42, "parentPct": 18 }, { "id": "cb632686-720b-4b9a-b19f-b0a0d1eef43e", "accountId": "189ba245-67f9-4655-a895-d838d272bd78", "name": "Real Estate", "accruedInterest": { "amount": "20372.58", "currencyCode": "EUR" }, "valuation": { "amount": "91134775.22", "currencyCode": "EUR" }, "unrealizedPL": { "amount": "8233.67", "currencyCode": "EUR" }, "portfolioPct": 28.42, "parentPct": 17.82 }, { "id": "78fd063e-ed8a-4a3f-962c-7fd70eb5327b", "accountId": "96504021-b1c9-4944-a3f7-ae3d5d84e405", "name": "Cash", "accruedInterest": { "amount": "33940.44", "currencyCode": "EUR" }, "valuation": { "amount": "60458414.88", "currencyCode": "EUR" }, "unrealizedPL": { "amount": "6383.4", "currencyCode": "EUR" }, "portfolioPct": 34.59, "parentPct": 12.3 }], "regions": [{ "id": "3cbc10e7-3e61-4403-b4ad-8f1bc049dc92", "accountId": "a59160c1-8f56-4eb4-b36d-441c4d510335", "assetClassId": "1480a59f-dd55-4c3a-8ec5-299bb1a95edc", "name": "Europe", "accruedInterest": { "amount": "8617.86", "currencyCode": "EUR" }, "valuation": { "amount": "1186195.62", "currencyCode": "EUR" }, "unrealizedPL": { "amount": "8437.56", "currencyCode": "EUR" }, "portfolioPct": 20.93, "parentPct": 6.48 }, { "id": "8b3b6168-2b56-40cd-89fc-5cd1c34b8dab", "accountId": "a59160c1-8f56-4eb4-b36d-441c4d510335", "assetClassId": "c4e576f0-1a0c-452a-9f31-2fa82d1c046e", "name": "North America", "accruedInterest": { "amount": "3989.98", "currencyCode": "EUR" }, "valuation": { "amount": "5443660.38", "currencyCode": "EUR" }, "unrealizedPL": { "amount": "3127.06", "currencyCode": "EUR" }, "portfolioPct": 14.79, "parentPct": 8.68 }, { "id": "04d31294-3069-4d23-bfee-4a11046d6ca4", "accountId": "96504021-b1c9-4944-a3f7-ae3d5d84e405", "assetClassId": "b8c570d3-0135-45a1-8d47-602190bfa83f", "name": "North America", "accruedInterest": { "amount": "7225.49", "currencyCode": "EUR" }, "valuation": { "amount": "7717418.0", "currencyCode": "EUR" }, "unrealizedPL": { "amount": "6725.56", "currencyCode": "EUR" }, "portfolioPct": 29.49, "parentPct": 4 }, { "id": "d171b87d-3ba5-4b2e-b7b6-01df4bfcb5ee", "accountId": "189ba245-67f9-4655-a895-d838d272bd78", "assetClassId": "cb632686-720b-4b9a-b19f-b0a0d1eef43e", "name": "EMEA", "accruedInterest": { "amount": "4125.23", "currencyCode": "EUR" }, "valuation": { "amount": "4383742.36", "currencyCode": "EUR" }, "unrealizedPL": { "amount": "4257.64", "currencyCode": "EUR" }, "portfolioPct": 14.45, "parentPct": 5.15 }, { "id": "b1bab9e6-8f61-4854-93e4-d4043f3e78ce", "accountId": "a59160c1-8f56-4eb4-b36d-441c4d510335", "assetClassId": "c4e576f0-1a0c-452a-9f31-2fa82d1c046e", "name": "EMEA", "accruedInterest": { "amount": "2099.28", "currencyCode": "EUR" }, "valuation": { "amount": "5583646.9", "currencyCode": "EUR" }, "unrealizedPL": { "amount": "6432.66", "currencyCode": "EUR" }, "portfolioPct": 11.44, "parentPct": 4.11 }, { "id": "3a566185-2a70-4c63-89d5-b0a19137fdce", "accountId": "a59160c1-8f56-4eb4-b36d-441c4d510335", "assetClassId": "f1b0286a-106c-4296-820c-648cf1bcc73b", "name": "Europe", "accruedInterest": { "amount": "9038.87", "currencyCode": "EUR" }, "valuation": { "amount": "5107055.65", "currencyCode": "EUR" }, "unrealizedPL": { "amount": "9421.86", "currencyCode": "EUR" }, "portfolioPct": 15.46, "parentPct": 9.86 }, { "id": "ee34e731-7e95-400b-83d3-00b2e5de63d8", "accountId": "96504021-b1c9-4944-a3f7-ae3d5d84e405", "assetClassId": "78fd063e-ed8a-4a3f-962c-7fd70eb5327b", "name": "North America", "accruedInterest": { "amount": "4517.25", "currencyCode": "EUR" }, "valuation": { "amount": "4394385.0", "currencyCode": "EUR" }, "unrealizedPL": { "amount": "1835.64", "currencyCode": "EUR" }, "portfolioPct": 36.27, "parentPct": 5.02 }], "countries": [{ "id": "ae5b40d1-0123-4191-846c-336108fabb0c", "accountId": "189ba245-67f9-4655-a895-d838d272bd78", "assetClassId": "cb632686-720b-4b9a-b19f-b0a0d1eef43e", "regionId": "d171b87d-3ba5-4b2e-b7b6-01df4bfcb5ee", "name": "Indonesia" }, { "id": "a8fe9bb7-8e86-46b4-a5eb-ab2c7d255e0d", "accountId": "189ba245-67f9-4655-a895-d838d272bd78", "assetClassId": "cb632686-720b-4b9a-b19f-b0a0d1eef43e", "regionId": "d171b87d-3ba5-4b2e-b7b6-01df4bfcb5ee", "name": "Portugal" }, { "id": "9cf9d381-1048-4278-b159-6a7d881cd97f", "accountId": "a59160c1-8f56-4eb4-b36d-441c4d510335", "assetClassId": "c4e576f0-1a0c-452a-9f31-2fa82d1c046e", "regionId": "b1bab9e6-8f61-4854-93e4-d4043f3e78ce", "name": "Ukraine" }, { "id": "87e60938-370d-4e71-9b42-244a40f83501", "accountId": "a59160c1-8f56-4eb4-b36d-441c4d510335", "assetClassId": "c4e576f0-1a0c-452a-9f31-2fa82d1c046e", "regionId": "8b3b6168-2b56-40cd-89fc-5cd1c34b8dab", "name": "Indonesia" }, { "id": "69396553-48f8-4ef2-a473-19981f41bbdc", "accountId": "a59160c1-8f56-4eb4-b36d-441c4d510335", "assetClassId": "1480a59f-dd55-4c3a-8ec5-299bb1a95edc", "regionId": "3cbc10e7-3e61-4403-b4ad-8f1bc049dc92", "name": "Greece" }, { "id": "d5429cd2-3d0c-495c-9629-74e89167a53d", "accountId": "a59160c1-8f56-4eb4-b36d-441c4d510335", "assetClassId": "1480a59f-dd55-4c3a-8ec5-299bb1a95edc", "regionId": "3cbc10e7-3e61-4403-b4ad-8f1bc049dc92", "name": "Gabon" }, { "id": "8fe8e2b4-d40f-488d-977c-030a4a3fc8cc", "accountId": "96504021-b1c9-4944-a3f7-ae3d5d84e405", "assetClassId": "b8c570d3-0135-45a1-8d47-602190bfa83f", "regionId": "04d31294-3069-4d23-bfee-4a11046d6ca4", "name": "Argentina" }, { "id": "11b356b4-aff0-425e-becc-8005d235907d", "accountId": "96504021-b1c9-4944-a3f7-ae3d5d84e405", "assetClassId": "b8c570d3-0135-45a1-8d47-602190bfa83f", "regionId": "04d31294-3069-4d23-bfee-4a11046d6ca4", "name": "China" }, { "id": "5e03d53f-34b5-4d88-aa2d-eda0165e34f4", "accountId": "96504021-b1c9-4944-a3f7-ae3d5d84e405", "assetClassId": "78fd063e-ed8a-4a3f-962c-7fd70eb5327b", "regionId": "ee34e731-7e95-400b-83d3-00b2e5de63d8", "name": "Sweden" }], "positions": [{ "id": "b516e3e3-4671-46a5-8414-4bb86c6bd5b2", "accountId": "189ba245-67f9-4655-a895-d838d272bd78", "assetClassId": "cb632686-720b-4b9a-b19f-b0a0d1eef43e", "regionId": "d171b87d-3ba5-4b2e-b7b6-01df4bfcb5ee", "countryId": "ae5b40d1-0123-4191-846c-336108fabb0c", "instrumentName": "MFS Charter Income Trust", "instrumentCurrency": "CNY", "instrumentCode": "JD18242992439384", "quantity": 496.19, "price": { "amount": "116.54", "currencyCode": "EUR" }, "exchangeRate": 3.68, "valuation": { "amount": "9987931.0", "currencyCode": "EUR" }, "accruedInterest": { "amount": "516.15", "currencyCode": "EUR" }, "costPrice": { "amount": "165.3", "currencyCode": "EUR" }, "costExchangeRate": 0.91, "unrealizedPL": { "amount": "888.97", "currencyCode": "EUR" }, "unrealizedPLPct": 22.16, "assetClassPct": 9.82, "portfolioPct": 1.48 }, { "id": "0a293087-ae5f-4a38-8dbf-f5f6df7cfd85", "accountId": "189ba245-67f9-4655-a895-d838d272bd78", "assetClassId": "cb632686-720b-4b9a-b19f-b0a0d1eef43e", "regionId": "d171b87d-3ba5-4b2e-b7b6-01df4bfcb5ee", "countryId": "ae5b40d1-0123-4191-846c-336108fabb0c", "instrumentName": "Brown Forman Corporation", "instrumentCurrency": "RUB", "instrumentCode": "SE42422076512162", "quantity": 735.37, "price": { "amount": "120.64", "currencyCode": "EUR" }, "exchangeRate": 4.05, "valuation": { "amount": "4091419.0", "currencyCode": "EUR" }, "accruedInterest": { "amount": "1757.09", "currencyCode": "EUR" }, "costPrice": { "amount": "121.67", "currencyCode": "EUR" }, "costExchangeRate": 1.51, "unrealizedPL": { "amount": "438.48", "currencyCode": "EUR" }, "unrealizedPLPct": 19.35, "assetClassPct": 8.92, "portfolioPct": 1.31 }, { "id": "5a3b0c63-5311-4c82-8295-4817fb70e687", "accountId": "189ba245-67f9-4655-a895-d838d272bd78", "assetClassId": "cb632686-720b-4b9a-b19f-b0a0d1eef43e", "regionId": "d171b87d-3ba5-4b2e-b7b6-01df4bfcb5ee", "countryId": "a8fe9bb7-8e86-46b4-a5eb-ab2c7d255e0d", "instrumentName": "Time Warner Inc.", "instrumentCurrency": "BRL", "instrumentCode": "HB98230710071324", "quantity": 350.34, "price": { "amount": "84.73", "currencyCode": "EUR" }, "exchangeRate": 0.61, "valuation": { "amount": "88028423.58", "currencyCode": "EUR" }, "accruedInterest": { "amount": "1422.48", "currencyCode": "EUR" }, "costPrice": { "amount": "242.39", "currencyCode": "EUR" }, "costExchangeRate": 1.44, "unrealizedPL": { "amount": "539.2", "currencyCode": "EUR" }, "unrealizedPLPct": 19.65, "assetClassPct": 6.92, "portfolioPct": 1.81 }, { "id": "1c13a681-4a02-44bb-b6be-da55880f44f0", "accountId": "a59160c1-8f56-4eb4-b36d-441c4d510335", "assetClassId": "c4e576f0-1a0c-452a-9f31-2fa82d1c046e", "regionId": "b1bab9e6-8f61-4854-93e4-d4043f3e78ce", "countryId": "9cf9d381-1048-4278-b159-6a7d881cd97f", "instrumentName": "Tsakos Energy Navigation Ltd", "instrumentCurrency": "CNY", "instrumentCode": "BZ24397666821737", "quantity": 876.55, "price": { "amount": "45.34", "currencyCode": "EUR" }, "exchangeRate": 2.98, "valuation": { "amount": "73564982.62", "currencyCode": "EUR" }, "accruedInterest": { "amount": "1375.22", "currencyCode": "EUR" }, "costPrice": { "amount": "199.31", "currencyCode": "EUR" }, "costExchangeRate": 1.72, "unrealizedPL": { "amount": "431.68", "currencyCode": "EUR" }, "unrealizedPLPct": 18.9, "assetClassPct": 8.66, "portfolioPct": 0.66 }, { "id": "87e60938-370d-4e71-9b42-244a40f83501", "accountId": "a59160c1-8f56-4eb4-b36d-441c4d510335", "assetClassId": "c4e576f0-1a0c-452a-9f31-2fa82d1c046e", "regionId": "8b3b6168-2b56-40cd-89fc-5cd1c34b8dab", "countryId": "87e60938-370d-4e71-9b42-244a40f83501", "instrumentName": "First Trust Low Beta Income ETF", "instrumentCurrency": "UGX", "instrumentCode": "PQ37594073636599", "quantity": 414.38, "price": { "amount": "65.87", "currencyCode": "EUR" }, "exchangeRate": 1.53, "valuation": { "amount": "37558610.02", "currencyCode": "EUR" }, "accruedInterest": { "amount": "1089.55", "currencyCode": "EUR" }, "costPrice": { "amount": "176.48", "currencyCode": "EUR" }, "costExchangeRate": 1.25, "unrealizedPL": { "amount": "642.03", "currencyCode": "EUR" }, "unrealizedPLPct": 23.07, "assetClassPct": 9.04, "portfolioPct": 1.79 }, { "id": "9608eef1-3fa6-41b7-a882-9ca9b8b89c92", "accountId": "a59160c1-8f56-4eb4-b36d-441c4d510335", "assetClassId": "c4e576f0-1a0c-452a-9f31-2fa82d1c046e", "regionId": "8b3b6168-2b56-40cd-89fc-5cd1c34b8dab", "countryId": "87e60938-370d-4e71-9b42-244a40f83501", "instrumentName": "Accenture plc", "instrumentCurrency": "CNY", "instrumentCode": "HA11969712272920", "quantity": 35, "price": { "amount": "156.23", "currencyCode": "EUR" }, "exchangeRate": 1.77, "valuation": { "amount": "40293276.77", "currencyCode": "EUR" }, "accruedInterest": { "amount": "563.37", "currencyCode": "EUR" }, "costPrice": { "amount": "110.96", "currencyCode": "EUR" }, "costExchangeRate": 0.87, "unrealizedPL": { "amount": "306.23", "currencyCode": "EUR" }, "unrealizedPLPct": 20.47, "assetClassPct": 5.51, "portfolioPct": 1.47 }, { "id": "d6dff013-ec58-4e6d-9505-c44a3c133e4f", "accountId": "a59160c1-8f56-4eb4-b36d-441c4d510335", "assetClassId": "1480a59f-dd55-4c3a-8ec5-299bb1a95edc", "regionId": "3cbc10e7-3e61-4403-b4ad-8f1bc049dc92", "countryId": "69396553-48f8-4ef2-a473-19981f41bbdc", "instrumentName": "Moleculin Biotech, Inc.", "instrumentCurrency": "USD", "instrumentCode": "ZO25765182558314", "quantity": 670.7, "price": { "amount": "115.71", "currencyCode": "EUR" }, "exchangeRate": 2.78, "valuation": { "amount": "2319117.22", "currencyCode": "EUR" }, "accruedInterest": { "amount": "1839.4", "currencyCode": "EUR" }, "costPrice": { "amount": "169.77", "currencyCode": "EUR" }, "costExchangeRate": 1, "unrealizedPL": { "amount": "396.95", "currencyCode": "EUR" }, "unrealizedPLPct": 26.54, "assetClassPct": 9.55, "portfolioPct": 0.87 }, { "id": "fbb082c7-9ce9-47ff-b3a3-c7eae697a00e", "accountId": "a59160c1-8f56-4eb4-b36d-441c4d510335", "assetClassId": "1480a59f-dd55-4c3a-8ec5-299bb1a95edc", "regionId": "3cbc10e7-3e61-4403-b4ad-8f1bc049dc92", "countryId": "d5429cd2-3d0c-495c-9629-74e89167a53d", "instrumentName": "U.S. Silica Holdings, Inc.", "instrumentCurrency": "USD", "instrumentCode": "ZK75647183509785", "quantity": 899.65, "price": { "amount": "59.82", "currencyCode": "EUR" }, "exchangeRate": 0.76, "valuation": { "amount": "67843708.11", "currencyCode": "EUR" }, "accruedInterest": { "amount": "1434.41", "currencyCode": "EUR" }, "costPrice": { "amount": "102.63", "currencyCode": "EUR" }, "costExchangeRate": 1.71, "unrealizedPL": { "amount": "261.33", "currencyCode": "EUR" }, "unrealizedPLPct": 21.99, "assetClassPct": 7.34, "portfolioPct": 0.81 }, { "id": "00c0dbce-3f07-4a84-9c71-50e271d5fe77", "accountId": "a59160c1-8f56-4eb4-b36d-441c4d510335", "assetClassId": "1480a59f-dd55-4c3a-8ec5-299bb1a95edc", "regionId": "3cbc10e7-3e61-4403-b4ad-8f1bc049dc92", "countryId": "d5429cd2-3d0c-495c-9629-74e89167a53d", "instrumentName": "Haemonetics Corporation", "instrumentCurrency": "USD", "instrumentCode": "OK64945713806803", "quantity": 374.72, "price": { "amount": "21.37", "currencyCode": "EUR" }, "exchangeRate": 3.15, "valuation": { "amount": "4942279.0", "currencyCode": "EUR" }, "accruedInterest": { "amount": "1465.5", "currencyCode": "EUR" }, "costPrice": { "amount": "182.03", "currencyCode": "EUR" }, "costExchangeRate": 0.84, "unrealizedPL": { "amount": "403.3", "currencyCode": "EUR" }, "unrealizedPLPct": 16.1, "assetClassPct": 9.74, "portfolioPct": 0.34 }, { "id": "11d7e57a-d65b-4823-9f51-6cb413b79e3b", "accountId": "96504021-b1c9-4944-a3f7-ae3d5d84e405", "assetClassId": "b8c570d3-0135-45a1-8d47-602190bfa83f", "regionId": "04d31294-3069-4d23-bfee-4a11046d6ca4", "countryId": "8fe8e2b4-d40f-488d-977c-030a4a3fc8cc", "instrumentName": "Yulong Eco-Materials Limited", "instrumentCurrency": "UAH", "instrumentCode": "PE18113041661950", "quantity": 550.14, "price": { "amount": "42.88", "currencyCode": "EUR" }, "exchangeRate": 1.84, "valuation": { "amount": "43932317.67", "currencyCode": "EUR" }, "accruedInterest": { "amount": "1173.25", "currencyCode": "EUR" }, "costPrice": { "amount": "208.61", "currencyCode": "EUR" }, "costExchangeRate": 1.05, "unrealizedPL": { "amount": "198.95", "currencyCode": "EUR" }, "unrealizedPLPct": 27.26, "assetClassPct": 6.1, "portfolioPct": 0.19 }, { "id": "83b67100-4fed-4841-997e-7d59c1d8a2bd", "accountId": "96504021-b1c9-4944-a3f7-ae3d5d84e405", "assetClassId": "b8c570d3-0135-45a1-8d47-602190bfa83f", "regionId": "04d31294-3069-4d23-bfee-4a11046d6ca4", "countryId": "11b356b4-aff0-425e-becc-8005d235907d", "instrumentName": "Wheeler Real Estate Investment Trust, Inc.", "instrumentCurrency": "CNY", "instrumentCode": "GJ42291042823084", "quantity": 400.7, "price": { "amount": "42.35", "currencyCode": "EUR" }, "exchangeRate": 4.1, "valuation": { "amount": "38200859.76", "currencyCode": "EUR" }, "accruedInterest": { "amount": "1711.28", "currencyCode": "EUR" }, "costPrice": { "amount": "114.68", "currencyCode": "EUR" }, "costExchangeRate": 0.86, "unrealizedPL": { "amount": "113.48", "currencyCode": "EUR" }, "unrealizedPLPct": 19.08, "assetClassPct": 9.76, "portfolioPct": 0.61 }, { "id": "83b67100-4fed-4841-997e-7d59c1d8a2bd", "accountId": "96504021-b1c9-4944-a3f7-ae3d5d84e405", "assetClassId": "78fd063e-ed8a-4a3f-962c-7fd70eb5327b", "regionId": "ee34e731-7e95-400b-83d3-00b2e5de63d8", "countryId": "5e03d53f-34b5-4d88-aa2d-eda0165e34f4", "instrumentName": "National Instruments Corporation", "instrumentCurrency": "USD", "instrumentCode": "GJ42291042823084", "quantity": 525.17, "price": { "amount": "45.32", "currencyCode": "EUR" }, "exchangeRate": 5.3, "valuation": { "amount": "37201859.78", "currencyCode": "EUR" }, "accruedInterest": { "amount": "1771.25", "currencyCode": "EUR" }, "costPrice": { "amount": "124.64", "currencyCode": "EUR" }, "costExchangeRate": 0.76, "unrealizedPL": { "amount": "121.47", "currencyCode": "EUR" }, "unrealizedPLPct": 18.07, "assetClassPct": 9.57, "portfolioPct": 0.72 }] } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": null }],
	
	      getPortfoliosummaryAllocationsAsset: [{ "status": 200, "data": { "allocations": [{ "name": "Cash", "allocationPct": 3, "allocationMinPct": 0, "allocationMaxPct": 5, "valuation": { "amount": "79771.16", "currencyCode": "EUR" }, "allocations": [{ "name": "UAH", "allocationPct": 5.62, "valuation": { "amount": "4365.28", "currencyCode": "IDR" } }, { "name": "AUD", "allocationPct": 25.41, "valuation": { "amount": "19736.95", "currencyCode": "CNY" } }, { "name": "UAH", "allocationPct": 8.11, "valuation": { "amount": "6299.36", "currencyCode": "RUB" } }, { "name": "AUD", "allocationPct": 33.47, "valuation": { "amount": "25997.48", "currencyCode": "CNY" } }] }, { "name": "Equity", "allocationPct": 45, "allocationMinPct": 40, "allocationMaxPct": 60, "valuation": { "amount": "122189.37", "currencyCode": "EUR" }, "allocations": [{ "name": "UAH", "allocationPct": 3.67, "valuation": { "amount": "2414.19", "currencyCode": "RSD" } }, { "name": "USD", "allocationPct": 30.77, "valuation": { "amount": "20241.01", "currencyCode": "AFN" } }, { "name": "CHF", "allocationPct": 20.6, "valuation": { "amount": "13551.01", "currencyCode": "IDR" } }, { "name": "JPY", "allocationPct": 44.3, "valuation": { "amount": "29141.26", "currencyCode": "CNY" } }, { "name": "USD", "allocationPct": 35.83, "valuation": { "amount": "23569.56", "currencyCode": "THB" } }, { "name": "GBP", "allocationPct": 3.36, "valuation": { "amount": "2210.26", "currencyCode": "IDR" } }, { "name": "CHF", "allocationPct": 29.27, "valuation": { "amount": "19254.28", "currencyCode": "CNY" } }, { "name": "JPY", "allocationPct": 17.95, "valuation": { "amount": "11807.80", "currencyCode": "IDR" } }] }, { "name": "Private Equity", "allocationPct": 4, "allocationMinPct": 10, "allocationMaxPct": 15, "valuation": { "amount": "122189.37", "currencyCode": "EUR" }, "allocations": [{ "name": "UAH", "allocationPct": 3.67, "valuation": { "amount": "2414.19", "currencyCode": "RSD" } }, { "name": "USD", "allocationPct": 30.77, "valuation": { "amount": "20241.01", "currencyCode": "AFN" } }, { "name": "CHF", "allocationPct": 20.6, "valuation": { "amount": "13551.01", "currencyCode": "IDR" } }, { "name": "JPY", "allocationPct": 44.3, "valuation": { "amount": "29141.26", "currencyCode": "CNY" } }, { "name": "USD", "allocationPct": 35.83, "valuation": { "amount": "23569.56", "currencyCode": "THB" } }, { "name": "GBP", "allocationPct": 3.36, "valuation": { "amount": "2210.26", "currencyCode": "IDR" } }, { "name": "CHF", "allocationPct": 29.27, "valuation": { "amount": "19254.28", "currencyCode": "CNY" } }, { "name": "JPY", "allocationPct": 17.95, "valuation": { "amount": "11807.80", "currencyCode": "IDR" } }] }, { "name": "Bonds", "allocationPct": 23, "allocationMinPct": 15, "allocationMaxPct": 25, "valuation": { "amount": "-51371.36", "currencyCode": "EUR" }, "allocations": [{ "name": "GBP", "allocationPct": 15.87, "valuation": { "amount": "3223.28", "currencyCode": "CNY" } }, { "name": "AUD", "allocationPct": 29.96, "valuation": { "amount": "6085.03", "currencyCode": "CNY" } }, { "name": "EUR", "allocationPct": 49.58, "valuation": { "amount": "10069.95", "currencyCode": "PEN" } }, { "name": "USD", "allocationPct": 28.37, "valuation": { "amount": "5762.09", "currencyCode": "COP" } }, { "name": "UAH", "allocationPct": 49.19, "valuation": { "amount": "9990.74", "currencyCode": "SYP" } }, { "name": "GBP", "allocationPct": 32.89, "valuation": { "amount": "6680.13", "currencyCode": "SYP" } }, { "name": "USD", "allocationPct": 17.14, "valuation": { "amount": "3481.22", "currencyCode": "USD" } }, { "name": "CAD", "allocationPct": 29.93, "valuation": { "amount": "6078.93", "currencyCode": "CNY" } }] }, { "name": "Convertible bonds", "allocationPct": 2, "allocationMinPct": 5, "allocationMaxPct": 10, "valuation": { "amount": "-51371.36", "currencyCode": "EUR" }, "allocations": [{ "name": "GBP", "allocationPct": 15.87, "valuation": { "amount": "3223.28", "currencyCode": "CNY" } }, { "name": "AUD", "allocationPct": 29.96, "valuation": { "amount": "6085.03", "currencyCode": "CNY" } }, { "name": "EUR", "allocationPct": 49.58, "valuation": { "amount": "10069.95", "currencyCode": "PEN" } }, { "name": "USD", "allocationPct": 28.37, "valuation": { "amount": "5762.09", "currencyCode": "COP" } }, { "name": "UAH", "allocationPct": 49.19, "valuation": { "amount": "9990.74", "currencyCode": "SYP" } }, { "name": "GBP", "allocationPct": 32.89, "valuation": { "amount": "6680.13", "currencyCode": "SYP" } }, { "name": "USD", "allocationPct": 17.14, "valuation": { "amount": "3481.22", "currencyCode": "USD" } }, { "name": "CAD", "allocationPct": 29.93, "valuation": { "amount": "6078.93", "currencyCode": "CNY" } }] }, { "name": "Derivatives", "allocationPct": 3, "allocationMinPct": 0, "allocationMaxPct": 5, "valuation": { "amount": "142739.91", "currencyCode": "EUR" }, "allocations": [{ "name": "EUR", "allocationPct": -18.47, "valuation": { "amount": "-51281.97", "currencyCode": "IDR" } }, { "name": "GBP", "allocationPct": -3.23, "valuation": { "amount": "-8968.10", "currencyCode": "CNY" } }, { "name": "AUD", "allocationPct": 22.28, "valuation": { "amount": "61860.44", "currencyCode": "EUR" } }, { "name": "UAH", "allocationPct": -7.31, "valuation": { "amount": "-20296.22", "currencyCode": "XCD" } }, { "name": "GBP", "allocationPct": 45.64, "valuation": { "amount": "126719.50", "currencyCode": "BRL" } }, { "name": "AUD", "allocationPct": 12.5, "valuation": { "amount": "34706.26", "currencyCode": "THB" } }] }, { "name": "Structured Products", "allocationPct": 7, "allocationMinPct": 0, "allocationMaxPct": 5, "valuation": { "amount": "142739.91", "currencyCode": "EUR" }, "allocations": [{ "name": "EUR", "allocationPct": -18.47, "valuation": { "amount": "-51281.97", "currencyCode": "IDR" } }, { "name": "GBP", "allocationPct": -3.23, "valuation": { "amount": "-8968.10", "currencyCode": "CNY" } }, { "name": "AUD", "allocationPct": 22.28, "valuation": { "amount": "61860.44", "currencyCode": "EUR" } }, { "name": "UAH", "allocationPct": -7.31, "valuation": { "amount": "-20296.22", "currencyCode": "XCD" } }, { "name": "GBP", "allocationPct": 45.64, "valuation": { "amount": "126719.50", "currencyCode": "BRL" } }, { "name": "AUD", "allocationPct": 12.5, "valuation": { "amount": "34706.26", "currencyCode": "THB" } }] }, { "name": "Commodities", "allocationPct": 5, "allocationMinPct": 6, "allocationMaxPct": 10, "valuation": { "amount": "36221.12", "currencyCode": "EUR" }, "allocations": [{ "name": "EUR", "allocationPct": 25.93, "valuation": { "amount": "9256.07", "currencyCode": "IDR" } }, { "name": "CAD", "allocationPct": 25.7, "valuation": { "amount": "9173.97", "currencyCode": "SEK" } }, { "name": "GBP", "allocationPct": 34.66, "valuation": { "amount": "12372.37", "currencyCode": "CNY" } }, { "name": "USD", "allocationPct": 21.84, "valuation": { "amount": "7796.09", "currencyCode": "EUR" } }, { "name": "AUD", "allocationPct": -6.66, "valuation": { "amount": "-2377.38", "currencyCode": "BGN" } }] }, { "name": "Real Estate", "allocationPct": 8, "allocationMinPct": 0, "allocationMaxPct": 5, "valuation": { "amount": "36221.12", "currencyCode": "EUR" }, "allocations": [{ "name": "EUR", "allocationPct": 25.93, "valuation": { "amount": "9256.07", "currencyCode": "IDR" } }, { "name": "CAD", "allocationPct": 25.7, "valuation": { "amount": "9173.97", "currencyCode": "SEK" } }, { "name": "GBP", "allocationPct": 34.66, "valuation": { "amount": "12372.37", "currencyCode": "CNY" } }, { "name": "USD", "allocationPct": 21.84, "valuation": { "amount": "7796.09", "currencyCode": "EUR" } }, { "name": "AUD", "allocationPct": -6.66, "valuation": { "amount": "-2377.38", "currencyCode": "BGN" } }] }] } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": null }],
	
	      getPortfoliosummaryAllocationsCurrency: [{ "status": 200, "data": { "allocations": [{ "name": "EUR", "allocationPct": 63, "allocationMinPct": 60, "allocationMaxPct": 65, "valuation": { "amount": "48810.16", "currencyCode": "EUR" }, "allocations": [{ "name": "Equity", "allocationPct": 14.29, "valuation": { "amount": "6974.97", "currencyCode": "XOF" } }, { "name": "Commodities", "allocationPct": 2.82, "valuation": { "amount": "1376.45", "currencyCode": "IDR" } }, { "name": "Bonds", "allocationPct": 52.89, "valuation": { "amount": "25815.69", "currencyCode": "SEK" } }, { "name": "Liquid Assets", "allocationPct": 29.99, "valuation": { "amount": "14638.17", "currencyCode": "IDR" } }] }, { "name": "USD", "allocationPct": 15, "allocationMinPct": 5, "allocationMaxPct": 15, "valuation": { "amount": "143979.96", "currencyCode": "EUR" }, "allocations": [{ "name": "Commodities", "allocationPct": 95.88, "valuation": { "amount": "138047.99", "currencyCode": "KGS" } }, { "name": "Commodities", "allocationPct": 4.12, "valuation": { "amount": "5931.97", "currencyCode": "CZK" } }] }, { "name": "GBP", "allocationPct": 3, "allocationMinPct": 0, "allocationMaxPct": 10, "valuation": { "amount": "148378.86", "currencyCode": "EUR" }, "allocations": [{ "name": "Liquid Assets", "allocationPct": 100, "valuation": { "amount": "148378.86", "currencyCode": "EUR" } }] }, { "name": "AUD", "allocationPct": 3, "allocationMinPct": 0, "allocationMaxPct": 5, "valuation": { "amount": "146790.16", "currencyCode": "EUR" }, "allocations": [{ "name": "Commodities", "allocationPct": 9.92, "valuation": { "amount": "14561.58", "currencyCode": "EUR" } }, { "name": "Bonds", "allocationPct": 17.98, "valuation": { "amount": "26392.87", "currencyCode": "CNY" } }, { "name": "Derivatives", "allocationPct": 21.81, "valuation": { "amount": "32014.93", "currencyCode": "MGA" } }, { "name": "Derivatives", "allocationPct": 7.75, "valuation": { "amount": "11376.24", "currencyCode": "IDR" } }, { "name": "Bonds", "allocationPct": 11.96, "valuation": { "amount": "17556.10", "currencyCode": "PKR" } }, { "name": "Liquid Assets", "allocationPct": 14.06, "valuation": { "amount": "20638.70", "currencyCode": "ARS" } }, { "name": "Liquid Assets", "allocationPct": 11.85, "valuation": { "amount": "17394.63", "currencyCode": "PHP" } }, { "name": "Bonds", "allocationPct": 4.67, "valuation": { "amount": "6855.10", "currencyCode": "CNY" } }] }, { "name": "CHF", "allocationPct": 4, "allocationMinPct": 0, "allocationMaxPct": 10, "valuation": { "amount": "96775.54", "currencyCode": "EUR" }, "allocations": [{ "name": "Equity", "allocationPct": 100, "valuation": { "amount": "96775.54", "currencyCode": "CNY" } }] }, { "name": "NOK", "allocationPct": 4, "allocationMinPct": 0, "allocationMaxPct": 5, "valuation": { "amount": "63373.81", "currencyCode": "EUR" }, "allocations": [{ "name": "Equity", "allocationPct": 2.29, "valuation": { "amount": "1451.26", "currencyCode": "CNY" } }, { "name": "Bonds", "allocationPct": 39.93, "valuation": { "amount": "25305.16", "currencyCode": "CNY" } }, { "name": "Derivatives", "allocationPct": 8.23, "valuation": { "amount": "5215.66", "currencyCode": "CNY" } }, { "name": "Equity", "allocationPct": 49.54, "valuation": { "amount": "31395.39", "currencyCode": "CNY" } }] }, { "name": "JPY", "allocationPct": 5, "allocationMinPct": 5, "allocationMaxPct": 10, "valuation": { "amount": "4716.56", "currencyCode": "EUR" }, "allocations": [{ "name": "Derivatives", "allocationPct": 14.57, "valuation": { "amount": "687.20", "currencyCode": "IDR" } }, { "name": "Commodities", "allocationPct": 18.5, "valuation": { "amount": "872.56", "currencyCode": "PKR" } }, { "name": "Derivatives", "allocationPct": 17, "valuation": { "amount": "801.82", "currencyCode": "COP" } }, { "name": "Derivatives", "allocationPct": 13.34, "valuation": { "amount": "629.19", "currencyCode": "LKR" } }, { "name": "Equity", "allocationPct": 6.87, "valuation": { "amount": "324.03", "currencyCode": "PLN" } }, { "name": "Commodities", "allocationPct": 23.39, "valuation": { "amount": "1103.20", "currencyCode": "CNY" } }, { "name": "Liquid Assets", "allocationPct": 6.32, "valuation": { "amount": "298.09", "currencyCode": "PHP" } }] }, { "name": "THB", "allocationPct": 2, "allocationMinPct": 0, "allocationMaxPct": 5, "valuation": { "amount": "42397.2", "currencyCode": "EUR" }, "allocations": [{ "name": "Liquid Assets", "allocationPct": 100, "valuation": { "amount": "42397.20", "currencyCode": "CAD" } }] }, { "name": "Other", "allocationPct": 1, "allocationMinPct": 0, "allocationMaxPct": 5, "valuation": { "amount": "143979.96", "currencyCode": "EUR" }, "allocations": [{ "name": "Commodities", "allocationPct": 95.88, "valuation": { "amount": "138047.99", "currencyCode": "KGS" } }, { "name": "Commodities", "allocationPct": 4.12, "valuation": { "amount": "5931.97", "currencyCode": "CZK" } }] }] } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": null }],
	
	      getPortfoliosummaryTransactions: [{ "status": 200, "data": [{ "id": 1, "transactionDate": "2017-04-22T01:46:55Z", "category": "Fee", "assetClass": "Stock", "instrumentName": "Roob-Boyer", "quantity": 24158.75, "price": { "amount": 77635.65, "currencyCode": "RUB" }, "amount": { "amount": 64266.77, "currencyCode": "EUR" }, "balanceAsset": 76873, "balanceAmount": { "amount": 65287.51, "currencyCode": "USD" }, "assetKey": "SU18321655890859", "counterpartyName": "Murphy Group", "statusId": "B9K2WKRK5L", "statusName": "Open", "statusAbbr": "O", "positionType": "Cash", "counterpartyAccount": "BGF70736413363656", "subPortfolioId": "BGF70736413363656", "positionId": "189ba245-67f9-4655-a895-d88d272bd78", "iSIN": "UB23025390831277" }, { "id": 2, "transactionDate": "2017-07-18T17:41:37Z", "category": "Income", "assetClass": "Bonds", "instrumentName": "Kris and Sons", "quantity": 6387.7, "price": { "amount": 95031.25, "currencyCode": "BRL" }, "amount": { "amount": 31617.45, "currencyCode": "CNY" }, "balanceAsset": 90969, "balanceAmount": { "amount": 74499.41, "currencyCode": "CNY" }, "assetKey": "MI00191859187781", "counterpartyName": "Green-Ortiz", "statusId": "KSTJBMDVL0", "statusName": "Pending", "statusAbbr": "P", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 3, "transactionDate": "2017-05-15T16:27:14Z", "category": "Fee", "assetClass": "Bonds", "instrumentName": "Leannon, Hartmann and Okuneva", "quantity": 24417.82, "price": { "amount": 21607.9, "currencyCode": "ILS" }, "amount": { "amount": 97867.69, "currencyCode": "ARS" }, "balanceAsset": 51268, "balanceAmount": { "amount": 37340.08, "currencyCode": "CNY" }, "assetKey": "IN36248209027796", "counterpartyName": "Nader-Walter", "statusId": "JQG9LDQ8UR", "statusName": "Closed", "statusAbbr": "C", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 4, "transactionDate": "2016-12-22T20:59:11Z", "category": "Income", "assetClass": "Commodities", "instrumentName": "Connelly-McKenzie", "quantity": 65128.79, "price": { "amount": 13037.16, "currencyCode": "ETB" }, "amount": { "amount": 8294.84, "currencyCode": "CDF" }, "balanceAsset": 49439, "balanceAmount": { "amount": 24151.74, "currencyCode": "RUB" }, "assetKey": "SQ26392039550368", "counterpartyName": "O'Connell-Graham", "statusId": "ACDT72IRS3", "statusName": "Open", "statusAbbr": "O", "positionType": "Cash", "counterpartyAccount": "BGF70736413363656", "subPortfolioId": "BGF70736413363656", "positionId": "189ba245-67f9-4655-a895-d88d272bd78", "iSIN": "UB23025390831277" }, { "id": 5, "transactionDate": "2017-09-05T20:22:49Z", "category": "Buy", "assetClass": "Stock", "instrumentName": "Feeney Group", "quantity": 39450.01, "price": { "amount": 95439.79, "currencyCode": "CNY" }, "amount": { "amount": 78851.03, "currencyCode": "DOP" }, "balanceAsset": 85436, "balanceAmount": { "amount": 85112.26, "currencyCode": "HTG" }, "assetKey": "XM08464905050121", "counterpartyName": "Kessler, Altenwerth and Kuphal", "statusId": "9J569EIEYM", "statusName": "Pending", "statusAbbr": "P", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 6, "transactionDate": "2016-11-24T14:44:24Z", "category": "Buy", "assetClass": "Bonds", "instrumentName": "Aufderhar-Bashirian", "quantity": 70612.15, "price": { "amount": 67089.41, "currencyCode": "PHP" }, "amount": { "amount": 56396.61, "currencyCode": "PLN" }, "balanceAsset": 29985, "balanceAmount": { "amount": 75489, "currencyCode": "EUR" }, "assetKey": "NZ13411760745230", "counterpartyName": "O'Kon, Hauck and O'Conner", "statusId": "5K1DJ4I9UA", "statusName": "Closed", "statusAbbr": "C", "positionType": "Cash", "counterpartyAccount": "BGF70736413363656", "subPortfolioId": "BGF70736413363656", "positionId": "189ba245-67f9-4655-a895-d88d272bd78", "iSIN": "UB23025390831277" }, { "id": 7, "transactionDate": "2017-02-08T08:46:13Z", "category": "Fee", "assetClass": "Commodities", "instrumentName": "Gislason LLC", "quantity": 92117.09, "price": { "amount": 27005.39, "currencyCode": "BRL" }, "amount": { "amount": 42040.95, "currencyCode": "EUR" }, "balanceAsset": 22567, "balanceAmount": { "amount": 56300.46, "currencyCode": "EUR" }, "assetKey": "YC36790231199175", "counterpartyName": "Pollich-Altenwerth", "statusId": "B0QTSSIJ4A", "statusName": "Open", "statusAbbr": "O", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 8, "transactionDate": "2016-10-06T05:25:55Z", "category": "Sell", "assetClass": "Bonds", "instrumentName": "Kirlin, Shanahan and Dooley", "quantity": 42995.8, "price": { "amount": 96682.61, "currencyCode": "VND" }, "amount": { "amount": 40928.9, "currencyCode": "PHP" }, "balanceAsset": 50974, "balanceAmount": { "amount": 75251.96, "currencyCode": "MYR" }, "assetKey": "OK20811491044545", "counterpartyName": "Zboncak, Renner and Bergstrom", "statusId": "5YFXZZUBIS", "statusName": "Pending", "statusAbbr": "P", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 9, "transactionDate": "2017-06-19T04:46:53Z", "category": "Sell", "assetClass": "Commodities", "instrumentName": "Kuvalis and Sons", "quantity": 91776.15, "price": { "amount": 42097.56, "currencyCode": "PLN" }, "amount": { "amount": 85905.38, "currencyCode": "NGN" }, "balanceAsset": 56085, "balanceAmount": { "amount": 71959.27, "currencyCode": "CNY" }, "assetKey": "YQ82588503761970", "counterpartyName": "Tromp, Kling and Powlowski", "statusId": "0AOEYO5HLI", "statusName": "Closed", "statusAbbr": "C", "positionType": "Cash", "counterpartyAccount": "BGF70736413363656", "subPortfolioId": "BGF70736413363656", "positionId": "189ba245-67f9-4655-a895-d88d272bd78", "iSIN": "UB23025390831277" }, { "id": 10, "transactionDate": "2017-07-22T17:20:36Z", "category": "Income", "assetClass": "Commodities", "instrumentName": "Halvorson, Kuhlman and Daugherty", "quantity": 36229.87, "price": { "amount": 94105.85, "currencyCode": "USD" }, "amount": { "amount": 51589.54, "currencyCode": "EUR" }, "balanceAsset": 86993, "balanceAmount": { "amount": 22904.44, "currencyCode": "BGN" }, "assetKey": "VT46572899244613", "counterpartyName": "Lind, Doyle and Schamberger", "statusId": "CNHYN7W260", "statusName": "Open", "statusAbbr": "O", "positionType": "Cash", "counterpartyAccount": "BGF70736413363656", "subPortfolioId": "BGF70736413363656", "positionId": "189ba245-67f9-4655-a895-d88d272bd78", "iSIN": "UB23025390831277" }, { "id": 11, "transactionDate": "2017-04-03T11:02:50Z", "category": "Income", "assetClass": "Stock", "instrumentName": "Treutel, Hermann and Gerhold", "quantity": 78751.9, "price": { "amount": 2414.59, "currencyCode": "RUB" }, "amount": { "amount": 2472.3, "currencyCode": "CNY" }, "balanceAsset": 15107, "balanceAmount": { "amount": 29670.24, "currencyCode": "CNY" }, "assetKey": "VK52770928467139", "counterpartyName": "Morissette, Beatty and Stiedemann", "statusId": "C73JZ7E396", "statusName": "Pending", "statusAbbr": "P", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 12, "transactionDate": "2017-07-07T06:15:18Z", "category": "Fee", "assetClass": "Commodities", "instrumentName": "Koepp-Skiles", "quantity": 43836.68, "price": { "amount": 11149.19, "currencyCode": "IDR" }, "amount": { "amount": 71704.5, "currencyCode": "EUR" }, "balanceAsset": 5691, "balanceAmount": { "amount": 33436.57, "currencyCode": "LKR" }, "assetKey": "AV55412895729265", "counterpartyName": "Schumm, Kuphal and Kihn", "statusId": "ZCFBL8JBSM", "statusName": "Closed", "statusAbbr": "C", "positionType": "Cash", "counterpartyAccount": "BGF70736413363656", "subPortfolioId": "BGF70736413363656", "positionId": "189ba245-67f9-4655-a895-d88d272bd78", "iSIN": "UB23025390831277" }, { "id": 13, "transactionDate": "2017-04-23T00:19:56Z", "category": "Income", "assetClass": "Stock", "instrumentName": "Corkery Group", "quantity": 10805.1, "price": { "amount": 49844.59, "currencyCode": "BRL" }, "amount": { "amount": 24353, "currencyCode": "BRL" }, "balanceAsset": 66503, "balanceAmount": { "amount": 70040.01, "currencyCode": "CNY" }, "assetKey": "PO75041962350326", "counterpartyName": "Dickens, VonRueden and Monahan", "statusId": "J1FYCTBSAB", "statusName": "Open", "statusAbbr": "O", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 14, "transactionDate": "2017-01-01T18:10:42Z", "category": "Redemption", "assetClass": "Bonds", "instrumentName": "Wyman-Rodriguez", "quantity": 21645.65, "price": { "amount": 57567.04, "currencyCode": "IDR" }, "amount": { "amount": 91727.4, "currencyCode": "CDF" }, "balanceAsset": 81048, "balanceAmount": { "amount": 34399.23, "currencyCode": "PLN" }, "assetKey": "OM53473489208679", "counterpartyName": "Powlowski-Paucek", "statusId": "H23DXPYNDF", "statusName": "Pending", "statusAbbr": "P", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 15, "transactionDate": "2017-02-01T10:08:08Z", "category": "Buy", "assetClass": "Commodities", "instrumentName": "Smith LLC", "quantity": 68265.47, "price": { "amount": 72049.64, "currencyCode": "CNY" }, "amount": { "amount": 27411.48, "currencyCode": "COP" }, "balanceAsset": 60053, "balanceAmount": { "amount": 8626.96, "currencyCode": "BOB" }, "assetKey": "AL78954924787434", "counterpartyName": "Weissnat and Sons", "statusId": "77I6055Z5D", "statusName": "Closed", "statusAbbr": "C", "positionType": "Cash", "counterpartyAccount": "BGF70736413363656", "subPortfolioId": "BGF70736413363656", "positionId": "189ba245-67f9-4655-a895-d88d272bd78", "iSIN": "UB23025390831277" }, { "id": 16, "transactionDate": "2016-09-14T15:55:43Z", "category": "Redemption", "assetClass": "Bonds", "instrumentName": "Halvorson, Rohan and Brekke", "quantity": 54886.52, "price": { "amount": 62421.98, "currencyCode": "RUB" }, "amount": { "amount": 69293.18, "currencyCode": "PHP" }, "balanceAsset": 43876, "balanceAmount": { "amount": 29769.37, "currencyCode": "ILS" }, "assetKey": "VN57340524095337", "counterpartyName": "Collins-Hessel", "statusId": "4X1RF5USYI", "statusName": "Open", "statusAbbr": "O", "positionType": "Cash", "counterpartyAccount": "BGF70736413363656", "subPortfolioId": "BGF70736413363656", "positionId": "189ba245-67f9-4655-a895-d88d272bd78", "iSIN": "UB23025390831277" }, { "id": 17, "transactionDate": "2017-04-02T13:49:16Z", "category": "Redemption", "assetClass": "Bonds", "instrumentName": "Spinka-Hilpert", "quantity": 69422.69, "price": { "amount": 23629.81, "currencyCode": "CNY" }, "amount": { "amount": 41620.04, "currencyCode": "BWP" }, "balanceAsset": 64164, "balanceAmount": { "amount": 91118.29, "currencyCode": "CNY" }, "assetKey": "BL99831989612143", "counterpartyName": "Kshlerin-Lueilwitz", "statusId": "CIDXINMIXB", "statusName": "Pending", "statusAbbr": "P", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 18, "transactionDate": "2017-08-31T18:25:34Z", "category": "Fee", "assetClass": "Bonds", "instrumentName": "Bahringer-Bahringer", "quantity": 23725.03, "price": { "amount": 86549.19, "currencyCode": "USD" }, "amount": { "amount": 30945.95, "currencyCode": "PHP" }, "balanceAsset": 45135, "balanceAmount": { "amount": 72734.16, "currencyCode": "KES" }, "assetKey": "TU64136780631154", "counterpartyName": "Davis-Kub", "statusId": "TEMSRWNTU1", "statusName": "Closed", "statusAbbr": "C", "positionType": "Cash", "counterpartyAccount": "BGF70736413363656", "subPortfolioId": "BGF70736413363656", "positionId": "189ba245-67f9-4655-a895-d88d272bd78", "iSIN": "UB23025390831277" }, { "id": 19, "transactionDate": "2017-03-25T10:20:41Z", "category": "Redemption", "assetClass": "Commodities", "instrumentName": "McCullough and Sons", "quantity": 46023.88, "price": { "amount": 78165.51, "currencyCode": "IDR" }, "amount": { "amount": 84461.74, "currencyCode": "UYU" }, "balanceAsset": 10574, "balanceAmount": { "amount": 18141.52, "currencyCode": "RUB" }, "assetKey": "PW51789419235614", "counterpartyName": "McDermott Group", "statusId": "KN7UIZDQJ0", "statusName": "Open", "statusAbbr": "O", "positionType": "Cash", "counterpartyAccount": "BGF70736413363656", "subPortfolioId": "BGF70736413363656", "positionId": "189ba245-67f9-4655-a895-d88d272bd78", "iSIN": "UB23025390831277" }, { "id": 20, "transactionDate": "2016-11-25T02:56:15Z", "category": "Fee", "assetClass": "Bonds", "instrumentName": "Kihn and Sons", "quantity": 21763.67, "price": { "amount": 34306.15, "currencyCode": "CNY" }, "amount": { "amount": 78025.71, "currencyCode": "CNY" }, "balanceAsset": 17960, "balanceAmount": { "amount": 79360.23, "currencyCode": "PHP" }, "assetKey": "QF46778407567378", "counterpartyName": "Beahan-Parisian", "statusId": "ETPGAQCTVC", "statusName": "Pending", "statusAbbr": "P", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 21, "transactionDate": "2017-01-05T09:16:35Z", "category": "Redemption", "assetClass": "Bonds", "instrumentName": "Brakus-Hauck", "quantity": 75154.02, "price": { "amount": 77393.52, "currencyCode": "GEL" }, "amount": { "amount": 68197.22, "currencyCode": "VND" }, "balanceAsset": 35855, "balanceAmount": { "amount": 13104.22, "currencyCode": "SEK" }, "assetKey": "OT76760891885177", "counterpartyName": "Buckridge-Boehm", "statusId": "5DEHN4C6DQ", "statusName": "Closed", "statusAbbr": "C", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 22, "transactionDate": "2017-04-18T06:29:36Z", "category": "Sell", "assetClass": "Stock", "instrumentName": "Gislason and Sons", "quantity": 30997.01, "price": { "amount": 63450.64, "currencyCode": "RUB" }, "amount": { "amount": 91229.54, "currencyCode": "EUR" }, "balanceAsset": 82284, "balanceAmount": { "amount": 7948.12, "currencyCode": "CUP" }, "assetKey": "UX73293066820081", "counterpartyName": "Lubowitz, Johnston and Gottlieb", "statusId": "7FSKIZUM4G", "statusName": "Open", "statusAbbr": "O", "positionType": "Cash", "counterpartyAccount": "BGF70736413363656", "subPortfolioId": "BGF70736413363656", "positionId": "189ba245-67f9-4655-a895-d88d272bd78", "iSIN": "UB23025390831277" }, { "id": 23, "transactionDate": "2016-09-27T20:12:38Z", "category": "Income", "assetClass": "Stock", "instrumentName": "Breitenberg, Sipes and Robel", "quantity": 98518.86, "price": { "amount": 4046.8, "currencyCode": "ZAR" }, "amount": { "amount": 72553.59, "currencyCode": "EUR" }, "balanceAsset": 98835, "balanceAmount": { "amount": 65923.43, "currencyCode": "RWF" }, "assetKey": "QT05620832422410", "counterpartyName": "Monahan and Sons", "statusId": "8EMU17IRZU", "statusName": "Pending", "statusAbbr": "P", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 24, "transactionDate": "2017-02-13T12:59:16Z", "category": "Buy", "assetClass": "Commodities", "instrumentName": "Hahn Inc", "quantity": 7051.86, "price": { "amount": 37834.4, "currencyCode": "EUR" }, "amount": { "amount": 62709.68, "currencyCode": "EUR" }, "balanceAsset": 76321, "balanceAmount": { "amount": 45257.12, "currencyCode": "CNY" }, "assetKey": "GB83948419145591", "counterpartyName": "Kertzmann and Sons", "statusId": "1DVSOO9PR9", "statusName": "Closed", "statusAbbr": "C", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 25, "transactionDate": "2017-06-16T01:11:27Z", "category": "Sell", "assetClass": "Commodities", "instrumentName": "Wiza, O'Hara and Bradtke", "quantity": 78693.82, "price": { "amount": 59932.93, "currencyCode": "BTN" }, "amount": { "amount": 14449.13, "currencyCode": "BRL" }, "balanceAsset": 69650, "balanceAmount": { "amount": 42137, "currencyCode": "IDR" }, "assetKey": "JH48975093430605", "counterpartyName": "Berge-Rempel", "statusId": "BYTZ0LZ2LO", "statusName": "Open", "statusAbbr": "O", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 26, "transactionDate": "2016-10-12T16:54:50Z", "category": "Redemption", "assetClass": "Stock", "instrumentName": "Satterfield-Abshire", "quantity": 67689.97, "price": { "amount": 46940.7, "currencyCode": "IDR" }, "amount": { "amount": 795.87, "currencyCode": "BRL" }, "balanceAsset": 76707, "balanceAmount": { "amount": 88138.99, "currencyCode": "UYU" }, "assetKey": "OG03895899758620", "counterpartyName": "Pollich, Brown and Kemmer", "statusId": "O2JMWXKNUE", "statusName": "Pending", "statusAbbr": "P", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 27, "transactionDate": "2017-04-18T23:38:25Z", "category": "Redemption", "assetClass": "Commodities", "instrumentName": "Kozey and Sons", "quantity": 16990.88, "price": { "amount": 32356.73, "currencyCode": "SEK" }, "amount": { "amount": 92837.38, "currencyCode": "RUB" }, "balanceAsset": 66187, "balanceAmount": { "amount": 10855.28, "currencyCode": "BGN" }, "assetKey": "SO30123430329468", "counterpartyName": "Lubowitz-Medhurst", "statusId": "ECT0D0XEEL", "statusName": "Closed", "statusAbbr": "C", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 28, "transactionDate": "2017-05-25T10:55:12Z", "category": "Sell", "assetClass": "Bonds", "instrumentName": "Hills Inc", "quantity": 6891.52, "price": { "amount": 29606.2, "currencyCode": "AUD" }, "amount": { "amount": 3364.08, "currencyCode": "UAH" }, "balanceAsset": 89270, "balanceAmount": { "amount": 25916.9, "currencyCode": "ETB" }, "assetKey": "EG68345751086650", "counterpartyName": "Sauer, Toy and Satterfield", "statusId": "UM80MTRKQ0", "statusName": "Open", "statusAbbr": "O", "positionType": "Cash", "counterpartyAccount": "BGF70736413363656", "subPortfolioId": "BGF70736413363656", "positionId": "189ba245-67f9-4655-a895-d88d272bd78", "iSIN": "UB23025390831277" }, { "id": 29, "transactionDate": "2017-07-07T02:38:51Z", "category": "Income", "assetClass": "Commodities", "instrumentName": "Paucek and Sons", "quantity": 97291.31, "price": { "amount": 36293.48, "currencyCode": "KMF" }, "amount": { "amount": 22222.96, "currencyCode": "PAB" }, "balanceAsset": 65411, "balanceAmount": { "amount": 13600.98, "currencyCode": "PHP" }, "assetKey": "GY14393689933872", "counterpartyName": "Grimes Group", "statusId": "HG3SPUYQY6", "statusName": "Pending", "statusAbbr": "P", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 30, "transactionDate": "2017-06-26T01:20:53Z", "category": "Fee", "assetClass": "Bonds", "instrumentName": "Osinski-Nienow", "quantity": 83715.23, "price": { "amount": 32876.44, "currencyCode": "JPY" }, "amount": { "amount": 88959.08, "currencyCode": "CNY" }, "balanceAsset": 47347, "balanceAmount": { "amount": 29338.63, "currencyCode": "PHP" }, "assetKey": "OF21202506609945", "counterpartyName": "Heidenreich Inc", "statusId": "TACZPH08WR", "statusName": "Closed", "statusAbbr": "C", "positionType": "Cash", "counterpartyAccount": "BGF70736413363656", "subPortfolioId": "BGF70736413363656", "positionId": "189ba245-67f9-4655-a895-d88d272bd78", "iSIN": "UB23025390831277" }, { "id": 31, "transactionDate": "2016-11-27T09:35:23Z", "category": "Fee", "assetClass": "Commodities", "instrumentName": "Casper-Brekke", "quantity": 1308.74, "price": { "amount": 28520.03, "currencyCode": "NGN" }, "amount": { "amount": 95907.66, "currencyCode": "MXN" }, "balanceAsset": 33120, "balanceAmount": { "amount": 66825.46, "currencyCode": "HUF" }, "assetKey": "EL87636932512578", "counterpartyName": "Strosin, Kohler and Schaden", "statusId": "RF9PTATLWN", "statusName": "Open", "statusAbbr": "O", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 32, "transactionDate": "2017-01-28T07:47:48Z", "category": "Sell", "assetClass": "Stock", "instrumentName": "Kemmer, Heller and Herman", "quantity": 88572.3, "price": { "amount": 55851.67, "currencyCode": "PHP" }, "amount": { "amount": 82325.51, "currencyCode": "IDR" }, "balanceAsset": 65510, "balanceAmount": { "amount": 8212.6, "currencyCode": "CNY" }, "assetKey": "NI32628845492851", "counterpartyName": "VonRueden Inc", "statusId": "80OENWMGP7", "statusName": "Pending", "statusAbbr": "P", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 33, "transactionDate": "2016-12-07T23:31:22Z", "category": "Income", "assetClass": "Commodities", "instrumentName": "Wunsch Group", "quantity": 13341.19, "price": { "amount": 905.07, "currencyCode": "HRK" }, "amount": { "amount": 30044.05, "currencyCode": "EUR" }, "balanceAsset": 75811, "balanceAmount": { "amount": 74708.47, "currencyCode": "IDR" }, "assetKey": "IZ26964199771590", "counterpartyName": "Abbott-Koch", "statusId": "V2MJ9QRBU8", "statusName": "Closed", "statusAbbr": "C", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 34, "transactionDate": "2017-08-13T17:04:30Z", "category": "Income", "assetClass": "Stock", "instrumentName": "Cartwright-O'Kon", "quantity": 87352.02, "price": { "amount": 83009.12, "currencyCode": "CNY" }, "amount": { "amount": 90038.68, "currencyCode": "MXN" }, "balanceAsset": 56971, "balanceAmount": { "amount": 24000.37, "currencyCode": "CNY" }, "assetKey": "RA43037657979221", "counterpartyName": "Parker-Ritchie", "statusId": "S2ARSA6DKY", "statusName": "Open", "statusAbbr": "O", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 35, "transactionDate": "2017-09-11T16:32:17Z", "category": "Sell", "assetClass": "Stock", "instrumentName": "Stark and Sons", "quantity": 1734.14, "price": { "amount": 41382.95, "currencyCode": "USD" }, "amount": { "amount": 49004.48, "currencyCode": "CAD" }, "balanceAsset": 88413, "balanceAmount": { "amount": 66142.8, "currencyCode": "PLN" }, "assetKey": "AN44177774973763", "counterpartyName": "Watsica, Quitzon and Farrell", "statusId": "MTT88U5NWH", "statusName": "Pending", "statusAbbr": "P", "positionType": "Cash", "counterpartyAccount": "BGF70736413363656", "subPortfolioId": "BGF70736413363656", "positionId": "189ba245-67f9-4655-a895-d88d272bd78", "iSIN": "UB23025390831277" }, { "id": 36, "transactionDate": "2017-04-22T02:46:12Z", "category": "Income", "assetClass": "Bonds", "instrumentName": "Lowe, Lesch and Hane", "quantity": 82924.6, "price": { "amount": 40020.7, "currencyCode": "PLN" }, "amount": { "amount": 51223.69, "currencyCode": "CNY" }, "balanceAsset": 29523, "balanceAmount": { "amount": 74980.4, "currencyCode": "EUR" }, "assetKey": "BE74784262639210", "counterpartyName": "Gibson and Sons", "statusId": "KJTJS0VWCM", "statusName": "Closed", "statusAbbr": "C", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 37, "transactionDate": "2017-06-29T11:06:12Z", "category": "Sell", "assetClass": "Stock", "instrumentName": "Hodkiewicz Inc", "quantity": 12172.58, "price": { "amount": 47136.67, "currencyCode": "ALL" }, "amount": { "amount": 84711.19, "currencyCode": "RUB" }, "balanceAsset": 38985, "balanceAmount": { "amount": 34463.03, "currencyCode": "IDR" }, "assetKey": "CU71268393638863", "counterpartyName": "Hills-Barton", "statusId": "CDYKTZTJB1", "statusName": "Open", "statusAbbr": "O", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 38, "transactionDate": "2016-11-11T21:59:07Z", "category": "Buy", "assetClass": "Bonds", "instrumentName": "Wolf, Kohler and Collier", "quantity": 9471.61, "price": { "amount": 98919.43, "currencyCode": "XOF" }, "amount": { "amount": 52888.6, "currencyCode": "ARS" }, "balanceAsset": 49647, "balanceAmount": { "amount": 23683.65, "currencyCode": "IDR" }, "assetKey": "WC13352324413470", "counterpartyName": "Morissette, Schuster and O'Kon", "statusId": "9LFXMGYKBL", "statusName": "Pending", "statusAbbr": "P", "positionType": "Cash", "counterpartyAccount": "BGF70736413363656", "subPortfolioId": "BGF70736413363656", "positionId": "189ba245-67f9-4655-a895-d88d272bd78", "iSIN": "UB23025390831277" }, { "id": 39, "transactionDate": "2017-01-26T18:12:39Z", "category": "Fee", "assetClass": "Stock", "instrumentName": "Ward Group", "quantity": 70042.26, "price": { "amount": 98479.23, "currencyCode": "CNY" }, "amount": { "amount": 28392.3, "currencyCode": "ILS" }, "balanceAsset": 51598, "balanceAmount": { "amount": 53334.55, "currencyCode": "EUR" }, "assetKey": "GW27869938235069", "counterpartyName": "Wunsch Inc", "statusId": "599HVY1I04", "statusName": "Closed", "statusAbbr": "C", "positionType": "Cash", "counterpartyAccount": "BGF70736413363656", "subPortfolioId": "BGF70736413363656", "positionId": "189ba245-67f9-4655-a895-d88d272bd78", "iSIN": "UB23025390831277" }, { "id": 40, "transactionDate": "2017-08-17T14:31:05Z", "category": "Buy", "assetClass": "Bonds", "instrumentName": "Ratke Group", "quantity": 37713.04, "price": { "amount": 76095.81, "currencyCode": "CNY" }, "amount": { "amount": 9797.66, "currencyCode": "EUR" }, "balanceAsset": 10337, "balanceAmount": { "amount": 18099.07, "currencyCode": "CNY" }, "assetKey": "KC24038349979110", "counterpartyName": "Yost Group", "statusId": "T6HKPLWIF7", "statusName": "Open", "statusAbbr": "O", "positionType": "Cash", "counterpartyAccount": "BGF70736413363656", "subPortfolioId": "BGF70736413363656", "positionId": "189ba245-67f9-4655-a895-d88d272bd78", "iSIN": "UB23025390831277" }, { "id": 41, "transactionDate": "2016-12-22T22:44:05Z", "category": "Redemption", "assetClass": "Stock", "instrumentName": "Hagenes Inc", "quantity": 79335.22, "price": { "amount": 14056.64, "currencyCode": "CNY" }, "amount": { "amount": 80407.74, "currencyCode": "EGP" }, "balanceAsset": 71404, "balanceAmount": { "amount": 51623.59, "currencyCode": "EUR" }, "assetKey": "WM10181284519118", "counterpartyName": "Doyle, Conroy and Bogan", "statusId": "KNWFMY3OCX", "statusName": "Pending", "statusAbbr": "P", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 42, "transactionDate": "2017-06-15T01:15:47Z", "category": "Fee", "assetClass": "Bonds", "instrumentName": "Kovacek, Cormier and Bartell", "quantity": 11927.31, "price": { "amount": 69190.82, "currencyCode": "CNY" }, "amount": { "amount": 26935.66, "currencyCode": "IDR" }, "balanceAsset": 2088, "balanceAmount": { "amount": 61502.06, "currencyCode": "EUR" }, "assetKey": "AI24545742642429", "counterpartyName": "Bayer-Dickens", "statusId": "DSBNJHEB80", "statusName": "Closed", "statusAbbr": "C", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 43, "transactionDate": "2016-12-07T22:12:09Z", "category": "Sell", "assetClass": "Commodities", "instrumentName": "Jast, Grant and Langosh", "quantity": 83184.97, "price": { "amount": 4252.47, "currencyCode": "ILS" }, "amount": { "amount": 39116.59, "currencyCode": "CNY" }, "balanceAsset": 58799, "balanceAmount": { "amount": 21846.18, "currencyCode": "PHP" }, "assetKey": "KA22344396846982", "counterpartyName": "Hansen LLC", "statusId": "LXULPQQKI3", "statusName": "Open", "statusAbbr": "O", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 44, "transactionDate": "2016-09-14T14:48:44Z", "category": "Fee", "assetClass": "Stock", "instrumentName": "MacGyver and Sons", "quantity": 82891.36, "price": { "amount": 60919.08, "currencyCode": "CZK" }, "amount": { "amount": 82384.05, "currencyCode": "AUD" }, "balanceAsset": 2232, "balanceAmount": { "amount": 42966.6, "currencyCode": "HNL" }, "assetKey": "QQ04063391822298", "counterpartyName": "Kuhlman-Harber", "statusId": "XIZXB2UAUA", "statusName": "Pending", "statusAbbr": "P", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 45, "transactionDate": "2017-05-17T03:02:00Z", "category": "Sell", "assetClass": "Commodities", "instrumentName": "Roob-Lynch", "quantity": 63322.21, "price": { "amount": 42249.74, "currencyCode": "BGN" }, "amount": { "amount": 65094.62, "currencyCode": "VND" }, "balanceAsset": 61941, "balanceAmount": { "amount": 13880.2, "currencyCode": "CNY" }, "assetKey": "YD24161752660270", "counterpartyName": "Kessler-Schneider", "statusId": "3R0VRZR5B5", "statusName": "Closed", "statusAbbr": "C", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 46, "transactionDate": "2017-03-24T14:52:15Z", "category": "Income", "assetClass": "Bonds", "instrumentName": "Greenfelder-Wehner", "quantity": 88892.12, "price": { "amount": 22069.73, "currencyCode": "AZN" }, "amount": { "amount": 92545.84, "currencyCode": "EUR" }, "balanceAsset": 81216, "balanceAmount": { "amount": 67480.47, "currencyCode": "PLN" }, "assetKey": "ED96793784636915", "counterpartyName": "Graham, West and Johnston", "statusId": "WSE3M9T6QI", "statusName": "Open", "statusAbbr": "O", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 47, "transactionDate": "2017-02-15T13:14:12Z", "category": "Buy", "assetClass": "Commodities", "instrumentName": "Kessler and Sons", "quantity": 36099.18, "price": { "amount": 8322.31, "currencyCode": "DKK" }, "amount": { "amount": 68012.98, "currencyCode": "PHP" }, "balanceAsset": 95741, "balanceAmount": { "amount": 15629.25, "currencyCode": "IDR" }, "assetKey": "EO20651954014717", "counterpartyName": "Ledner-Reichert", "statusId": "EB9ZWNBQTJ", "statusName": "Pending", "statusAbbr": "P", "positionType": "Security", "counterpartyAccount": "KLM97756433363629", "subPortfolioId": "IDV42524523452355", "positionId": "657fb242-98i9-8455-j795-i57d272uj37", "iSIN": "UB23025390831277" }, { "id": 48, "transactionDate": "2016-10-19T15:31:37Z", "category": "Fee", "assetClass": "Bonds", "instrumentName": "Kessler, Marks and Botsford", "quantity": 72727.78, "price": { "amount": 74138.03, "currencyCode": "CNY" }, "amount": { "amount": 29077.87, "currencyCode": "RUB" }, "balanceAsset": 68344, "balanceAmount": { "amount": 74882.31, "currencyCode": "PHP" }, "assetKey": "OX82046324419628", "counterpartyName": "Harvey, Volkman and Koelpin", "statusId": "687NP1Y31K", "statusName": "Closed", "statusAbbr": "C", "positionType": "Cash", "counterpartyAccount": "BGF70736413363656", "subPortfolioId": "BGF70736413363656", "positionId": "189ba245-67f9-4655-a895-d88d272bd78", "iSIN": "UB23025390831277" }, { "id": 49, "transactionDate": "2017-06-25T23:11:20Z", "category": "Redemption", "assetClass": "Commodities", "instrumentName": "Romaguera Inc", "quantity": 82735.59, "price": { "amount": 31501.41, "currencyCode": "CAD" }, "amount": { "amount": 22516.52, "currencyCode": "TJS" }, "balanceAsset": 28648, "balanceAmount": { "amount": 50083.7, "currencyCode": "CNY" }, "assetKey": "ZG58567103939197", "counterpartyName": "Gislason LLC", "statusId": "H85SAE6IL3", "statusName": "Open", "statusAbbr": "O", "positionType": "Cash", "counterpartyAccount": "BGF70736413363656", "subPortfolioId": "BGF70736413363656", "positionId": "189ba245-67f9-4655-a895-d88d272bd78", "iSIN": "UB23025390831277" }, { "id": 50, "transactionDate": "2016-11-09T23:45:01Z", "category": "Sell", "assetClass": "Bonds", "instrumentName": "Romaguera, Hand and Crooks", "quantity": 79981.58, "price": { "amount": 49176.91, "currencyCode": "EUR" }, "amount": { "amount": 32709.51, "currencyCode": "EUR" }, "balanceAsset": 39338, "balanceAmount": { "amount": 45378.33, "currencyCode": "EUR" }, "assetKey": "BA18667893921299", "counterpartyName": "Kerluke Inc", "statusId": "XK79ZKXN3S", "statusName": "Pending", "statusAbbr": "P", "positionType": "Cash", "counterpartyAccount": "BGF70736413363656", "subPortfolioId": "BGF70736413363656", "positionId": "189ba245-67f9-4655-a895-d88d272bd78", "iSIN": "UB23025390831277" }] }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": null }],
	
	      getPortfoliosummaryTransactionFilterOptions: [{ "status": 200, "data": { "assetClasses": [{ "name": "Stock", "id": "stock" }, { "name": "Bond", "id": "bonds" }, { "name": " Liquid Assets", "id": "liquidassets" }, { "name": "Real Estate", "id": "realestate" }, { "name": "Cash", "id": "cash" }], "categories": [{ "name": "Sell", "id": "sell" }, { "name": "Buy", "id": "buy" }, { "name": "Redemption", "id": "redemption" }, { "name": "Fees", "id": "fees" }, { "name": "Income", "id": "income" }], "accounts": [{ "name": "Portfolio 1", "id": "189ba245-67f9-4655-a895-d838d272bd78" }, { "name": "Portfolio 2", "id": "a59160c1-8f56-4eb4-b36d-441c4d510335" }, { "name": "Portfolio 3", "id": "96504021-b1c9-4944-a3f7-ae3d5d84e405" }] } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": null }],
	
	      getPortfoliosummaryValuationChart: [{ "status": 200, "data": { "chartData": [{ "dateFrom": "2016-01-01T00:00:00.000Z", "dateTo": "2016-01-08T00:00:00.000Z", "value": { "amount": "6152293", "currencyCode": "EUR" }, "valuePct": -3 }, { "dateFrom": "2016-01-08T00:00:00.001Z", "dateTo": "2016-01-15T00:00:00.001Z", "value": { "amount": "6671963", "currencyCode": "EUR" }, "valuePct": -1 }, { "dateFrom": "2016-01-15T00:00:00.002Z", "dateTo": "2016-01-22T00:00:00.002Z", "value": { "amount": "6927310", "currencyCode": "EUR" }, "valuePct": -4 }, { "dateFrom": "2016-01-22T00:00:00.003Z", "dateTo": "2016-01-29T00:00:00.003Z", "value": { "amount": "6844270", "currencyCode": "EUR" }, "valuePct": 2 }, { "dateFrom": "2016-01-29T00:00:00.004Z", "dateTo": "2016-02-05T00:00:00.004Z", "value": { "amount": "7176271", "currencyCode": "EUR" }, "valuePct": 4 }, { "dateFrom": "2016-02-05T00:00:00.005Z", "dateTo": "2016-02-12T00:00:00.005Z", "value": { "amount": "6939634", "currencyCode": "EUR" }, "valuePct": -3 }, { "dateFrom": "2016-02-12T00:00:00.006Z", "dateTo": "2016-02-19T00:00:00.006Z", "value": { "amount": "6701290", "currencyCode": "EUR" }, "valuePct": 3 }, { "dateFrom": "2016-02-19T00:00:00.007Z", "dateTo": "2016-02-26T00:00:00.007Z", "value": { "amount": "6051191", "currencyCode": "EUR" }, "valuePct": -1 }, { "dateFrom": "2016-02-26T00:00:00.008Z", "dateTo": "2016-03-04T00:00:00.008Z", "value": { "amount": "7205372", "currencyCode": "EUR" }, "valuePct": 2 }, { "dateFrom": "2016-03-04T00:00:00.009Z", "dateTo": "2016-03-11T00:00:00.009Z", "value": { "amount": "6349985", "currencyCode": "EUR" }, "valuePct": 5 }, { "dateFrom": "2016-03-11T00:00:00.010Z", "dateTo": "2016-03-18T00:00:00.010Z", "value": { "amount": "6027673", "currencyCode": "EUR" }, "valuePct": 1 }, { "dateFrom": "2016-03-18T00:00:00.011Z", "dateTo": "2016-03-25T00:00:00.011Z", "value": { "amount": "6796056", "currencyCode": "EUR" }, "valuePct": 2 }, { "dateFrom": "2016-03-25T00:00:00.012Z", "dateTo": "2016-04-01T00:00:00.012Z", "value": { "amount": "7209203", "currencyCode": "EUR" }, "valuePct": -2 }, { "dateFrom": "2016-04-01T00:00:00.013Z", "dateTo": "2016-04-08T00:00:00.013Z", "value": { "amount": "5791407", "currencyCode": "EUR" }, "valuePct": 2 }, { "dateFrom": "2016-04-08T00:00:00.014Z", "dateTo": "2016-04-15T00:00:00.014Z", "value": { "amount": "6692875", "currencyCode": "EUR" }, "valuePct": -2 }, { "dateFrom": "2016-04-15T00:00:00.015Z", "dateTo": "2016-04-22T00:00:00.015Z", "value": { "amount": "7179146", "currencyCode": "EUR" }, "valuePct": 4 }, { "dateFrom": "2016-04-22T00:00:00.016Z", "dateTo": "2016-04-29T00:00:00.016Z", "value": { "amount": "6801755", "currencyCode": "EUR" }, "valuePct": 5 }, { "dateFrom": "2016-04-29T00:00:00.017Z", "dateTo": "2016-05-06T00:00:00.017Z", "value": { "amount": "5900856", "currencyCode": "EUR" }, "valuePct": -1 }, { "dateFrom": "2016-05-06T00:00:00.018Z", "dateTo": "2016-05-13T00:00:00.018Z", "value": { "amount": "6178198", "currencyCode": "EUR" }, "valuePct": -5 }, { "dateFrom": "2016-05-13T00:00:00.019Z", "dateTo": "2016-05-20T00:00:00.019Z", "value": { "amount": "6082348", "currencyCode": "EUR" }, "valuePct": -5 }, { "dateFrom": "2016-05-20T00:00:00.020Z", "dateTo": "2016-05-27T00:00:00.020Z", "value": { "amount": "7210449", "currencyCode": "EUR" }, "valuePct": 3 }, { "dateFrom": "2016-05-27T00:00:00.021Z", "dateTo": "2016-06-03T00:00:00.021Z", "value": { "amount": "6632729", "currencyCode": "EUR" }, "valuePct": -2 }, { "dateFrom": "2016-06-03T00:00:00.022Z", "dateTo": "2016-06-10T00:00:00.022Z", "value": { "amount": "6058817", "currencyCode": "EUR" }, "valuePct": -4 }, { "dateFrom": "2016-06-10T00:00:00.023Z", "dateTo": "2016-06-17T00:00:00.023Z", "value": { "amount": "6754445", "currencyCode": "EUR" }, "valuePct": -2 }, { "dateFrom": "2016-06-17T00:00:00.024Z", "dateTo": "2016-06-24T00:00:00.024Z", "value": { "amount": "5946610", "currencyCode": "EUR" }, "valuePct": -5 }, { "dateFrom": "2016-06-24T00:00:00.025Z", "dateTo": "2016-07-01T00:00:00.025Z", "value": { "amount": "7068235", "currencyCode": "EUR" }, "valuePct": -4 }, { "dateFrom": "2016-07-01T00:00:00.026Z", "dateTo": "2016-07-08T00:00:00.026Z", "value": { "amount": "7159931", "currencyCode": "EUR" }, "valuePct": 1 }, { "dateFrom": "2016-07-08T00:00:00.027Z", "dateTo": "2016-07-15T00:00:00.027Z", "value": { "amount": "6982782", "currencyCode": "EUR" }, "valuePct": 1 }, { "dateFrom": "2016-07-15T00:00:00.028Z", "dateTo": "2016-07-22T00:00:00.028Z", "value": { "amount": "5687576", "currencyCode": "EUR" }, "valuePct": 1 }, { "dateFrom": "2016-07-22T00:00:00.029Z", "dateTo": "2016-07-29T00:00:00.029Z", "value": { "amount": "6801987", "currencyCode": "EUR" }, "valuePct": -3 }, { "dateFrom": "2016-07-29T00:00:00.030Z", "dateTo": "2016-08-05T00:00:00.030Z", "value": { "amount": "5839448", "currencyCode": "EUR" }, "valuePct": 4 }, { "dateFrom": "2016-08-05T00:00:00.031Z", "dateTo": "2016-08-12T00:00:00.031Z", "value": { "amount": "6612833", "currencyCode": "EUR" }, "valuePct": 3 }, { "dateFrom": "2016-08-12T00:00:00.032Z", "dateTo": "2016-08-19T00:00:00.032Z", "value": { "amount": "7112499", "currencyCode": "EUR" }, "valuePct": 3 }, { "dateFrom": "2016-08-19T00:00:00.033Z", "dateTo": "2016-08-26T00:00:00.033Z", "value": { "amount": "5901031", "currencyCode": "EUR" }, "valuePct": 1 }, { "dateFrom": "2016-08-26T00:00:00.034Z", "dateTo": "2016-09-02T00:00:00.034Z", "value": { "amount": "6192466", "currencyCode": "EUR" }, "valuePct": -2 }, { "dateFrom": "2016-09-02T00:00:00.035Z", "dateTo": "2016-09-09T00:00:00.035Z", "value": { "amount": "6834784", "currencyCode": "EUR" }, "valuePct": 0.5 }, { "dateFrom": "2016-09-09T00:00:00.036Z", "dateTo": "2016-09-16T00:00:00.036Z", "value": { "amount": "7227194", "currencyCode": "EUR" }, "valuePct": 4 }, { "dateFrom": "2016-09-16T00:00:00.037Z", "dateTo": "2016-09-23T00:00:00.037Z", "value": { "amount": "6982829", "currencyCode": "EUR" }, "valuePct": 4 }, { "dateFrom": "2016-09-23T00:00:00.038Z", "dateTo": "2016-09-30T00:00:00.038Z", "value": { "amount": "6966514", "currencyCode": "EUR" }, "valuePct": -4 }, { "dateFrom": "2016-09-30T00:00:00.039Z", "dateTo": "2016-10-07T00:00:00.039Z", "value": { "amount": "5937315", "currencyCode": "EUR" }, "valuePct": 0.5 }, { "dateFrom": "2016-10-07T00:00:00.040Z", "dateTo": "2016-10-14T00:00:00.040Z", "value": { "amount": "5910950", "currencyCode": "EUR" }, "valuePct": 0.5 }, { "dateFrom": "2016-10-14T00:00:00.041Z", "dateTo": "2016-10-21T00:00:00.041Z", "value": { "amount": "6491943", "currencyCode": "EUR" }, "valuePct": 1 }, { "dateFrom": "2016-10-21T00:00:00.042Z", "dateTo": "2016-10-28T00:00:00.042Z", "value": { "amount": "6286096", "currencyCode": "EUR" }, "valuePct": 2 }, { "dateFrom": "2016-10-28T00:00:00.043Z", "dateTo": "2016-11-04T00:00:00.043Z", "value": { "amount": "5806196", "currencyCode": "EUR" }, "valuePct": -2 }, { "dateFrom": "2016-11-04T00:00:00.044Z", "dateTo": "2016-11-11T00:00:00.044Z", "value": { "amount": "5903492", "currencyCode": "EUR" }, "valuePct": -5 }, { "dateFrom": "2016-11-11T00:00:00.045Z", "dateTo": "2016-11-18T00:00:00.045Z", "value": { "amount": "6123345", "currencyCode": "EUR" }, "valuePct": -2 }, { "dateFrom": "2016-11-18T00:00:00.046Z", "dateTo": "2016-11-25T00:00:00.046Z", "value": { "amount": "6653837", "currencyCode": "EUR" }, "valuePct": -2 }, { "dateFrom": "2016-11-25T00:00:00.047Z", "dateTo": "2016-12-02T00:00:00.047Z", "value": { "amount": "7171462", "currencyCode": "EUR" }, "valuePct": -3 }, { "dateFrom": "2016-12-02T00:00:00.048Z", "dateTo": "2016-12-09T00:00:00.048Z", "value": { "amount": "5764554", "currencyCode": "EUR" }, "valuePct": 2 }, { "dateFrom": "2016-12-09T00:00:00.049Z", "dateTo": "2016-12-16T00:00:00.049Z", "value": { "amount": "7120949", "currencyCode": "EUR" }, "valuePct": 1 }, { "dateFrom": "2016-12-16T00:00:00.050Z", "dateTo": "2016-12-23T00:00:00.050Z", "value": { "amount": "6957210", "currencyCode": "EUR" }, "valuePct": 1 }, { "dateFrom": "2016-12-23T00:00:00.051Z", "dateTo": "2016-12-30T00:00:00.051Z", "value": { "amount": "6952720", "currencyCode": "EUR" }, "valuePct": -2 }, { "dateFrom": "2016-12-30T00:00:00.052Z", "dateTo": "2017-01-06T00:00:00.052Z", "value": { "amount": "6633135", "currencyCode": "EUR" }, "valuePct": 4 }, { "dateFrom": "2017-01-06T00:00:00.053Z", "dateTo": "2017-01-13T00:00:00.053Z", "value": { "amount": "6237072", "currencyCode": "EUR" }, "valuePct": 2 }, { "dateFrom": "2017-01-13T00:00:00.054Z", "dateTo": "2017-01-20T00:00:00.054Z", "value": { "amount": "6541372", "currencyCode": "EUR" }, "valuePct": 4 }, { "dateFrom": "2017-01-20T00:00:00.055Z", "dateTo": "2017-01-27T00:00:00.055Z", "value": { "amount": "6359252", "currencyCode": "EUR" }, "valuePct": 0.5 }, { "dateFrom": "2017-01-27T00:00:00.056Z", "dateTo": "2017-02-03T00:00:00.056Z", "value": { "amount": "6583568", "currencyCode": "EUR" }, "valuePct": -1 }, { "dateFrom": "2017-02-03T00:00:00.057Z", "dateTo": "2017-02-10T00:00:00.057Z", "value": { "amount": "5749892", "currencyCode": "EUR" }, "valuePct": -3 }, { "dateFrom": "2017-02-10T00:00:00.058Z", "dateTo": "2017-02-17T00:00:00.058Z", "value": { "amount": "7095650", "currencyCode": "EUR" }, "valuePct": 5 }, { "dateFrom": "2017-02-17T00:00:00.059Z", "dateTo": "2017-02-24T00:00:00.059Z", "value": { "amount": "7143473", "currencyCode": "EUR" }, "valuePct": 4 }, { "dateFrom": "2017-02-24T00:00:00.060Z", "dateTo": "2017-03-03T00:00:00.060Z", "value": { "amount": "5791789", "currencyCode": "EUR" }, "valuePct": 1 }, { "dateFrom": "2017-03-03T00:00:00.061Z", "dateTo": "2017-03-10T00:00:00.061Z", "value": { "amount": "6671002", "currencyCode": "EUR" }, "valuePct": 5 }, { "dateFrom": "2017-03-10T00:00:00.062Z", "dateTo": "2017-03-17T00:00:00.062Z", "value": { "amount": "6493951", "currencyCode": "EUR" }, "valuePct": 1 }, { "dateFrom": "2017-03-17T00:00:00.063Z", "dateTo": "2017-03-24T00:00:00.063Z", "value": { "amount": "5766593", "currencyCode": "EUR" }, "valuePct": 5 }, { "dateFrom": "2017-03-24T00:00:00.064Z", "dateTo": "2017-03-31T00:00:00.064Z", "value": { "amount": "6544906", "currencyCode": "EUR" }, "valuePct": 4 }, { "dateFrom": "2017-03-31T00:00:00.065Z", "dateTo": "2017-04-07T00:00:00.065Z", "value": { "amount": "7183536", "currencyCode": "EUR" }, "valuePct": -3 }, { "dateFrom": "2017-04-07T00:00:00.066Z", "dateTo": "2017-04-14T00:00:00.066Z", "value": { "amount": "7125443", "currencyCode": "EUR" }, "valuePct": 4 }, { "dateFrom": "2017-04-14T00:00:00.067Z", "dateTo": "2017-04-21T00:00:00.067Z", "value": { "amount": "5774725", "currencyCode": "EUR" }, "valuePct": 3 }, { "dateFrom": "2017-04-21T00:00:00.068Z", "dateTo": "2017-04-28T00:00:00.068Z", "value": { "amount": "6800604", "currencyCode": "EUR" }, "valuePct": 1 }, { "dateFrom": "2017-04-28T00:00:00.069Z", "dateTo": "2017-05-05T00:00:00.069Z", "value": { "amount": "6305900", "currencyCode": "EUR" }, "valuePct": -1 }, { "dateFrom": "2017-05-05T00:00:00.070Z", "dateTo": "2017-05-12T00:00:00.070Z", "value": { "amount": "6135538", "currencyCode": "EUR" }, "valuePct": -5 }, { "dateFrom": "2017-05-12T00:00:00.071Z", "dateTo": "2017-05-19T00:00:00.071Z", "value": { "amount": "6021537", "currencyCode": "EUR" }, "valuePct": -2 }, { "dateFrom": "2017-05-19T00:00:00.072Z", "dateTo": "2017-05-26T00:00:00.072Z", "value": { "amount": "6456169", "currencyCode": "EUR" }, "valuePct": -1 }, { "dateFrom": "2017-05-26T00:00:00.073Z", "dateTo": "2017-06-02T00:00:00.073Z", "value": { "amount": "6400229", "currencyCode": "EUR" }, "valuePct": 5 }, { "dateFrom": "2017-06-02T00:00:00.074Z", "dateTo": "2017-06-09T00:00:00.074Z", "value": { "amount": "6139152", "currencyCode": "EUR" }, "valuePct": 0.5 }, { "dateFrom": "2017-06-09T00:00:00.075Z", "dateTo": "2017-06-16T00:00:00.075Z", "value": { "amount": "6617987", "currencyCode": "EUR" }, "valuePct": -5 }, { "dateFrom": "2017-06-16T00:00:00.076Z", "dateTo": "2017-06-23T00:00:00.076Z", "value": { "amount": "5831302", "currencyCode": "EUR" }, "valuePct": 0.5 }, { "dateFrom": "2017-06-23T00:00:00.077Z", "dateTo": "2017-06-30T00:00:00.077Z", "value": { "amount": "6850927", "currencyCode": "EUR" }, "valuePct": 1 }, { "dateFrom": "2017-06-30T00:00:00.078Z", "dateTo": "2017-07-07T00:00:00.078Z", "value": { "amount": "6610681", "currencyCode": "EUR" }, "valuePct": 2 }, { "dateFrom": "2017-07-07T00:00:00.079Z", "dateTo": "2017-07-14T00:00:00.079Z", "value": { "amount": "6872820", "currencyCode": "EUR" }, "valuePct": 0.5 }, { "dateFrom": "2017-07-14T00:00:00.080Z", "dateTo": "2017-07-21T00:00:00.080Z", "value": { "amount": "6753237", "currencyCode": "EUR" }, "valuePct": 0.5 }, { "dateFrom": "2017-07-21T00:00:00.081Z", "dateTo": "2017-07-28T00:00:00.081Z", "value": { "amount": "5912079", "currencyCode": "EUR" }, "valuePct": 0.5 }, { "dateFrom": "2017-07-28T00:00:00.082Z", "dateTo": "2017-08-04T00:00:00.082Z", "value": { "amount": "6609486", "currencyCode": "EUR" }, "valuePct": -4 }, { "dateFrom": "2017-08-04T00:00:00.083Z", "dateTo": "2017-08-11T00:00:00.083Z", "value": { "amount": "5791748", "currencyCode": "EUR" }, "valuePct": -1 }, { "dateFrom": "2017-08-11T00:00:00.084Z", "dateTo": "2017-08-18T00:00:00.084Z", "value": { "amount": "5888493", "currencyCode": "EUR" }, "valuePct": 2 }, { "dateFrom": "2017-08-18T00:00:00.085Z", "dateTo": "2017-08-25T00:00:00.085Z", "value": { "amount": "6014889", "currencyCode": "EUR" }, "valuePct": -3 }, { "dateFrom": "2017-08-25T00:00:00.086Z", "dateTo": "2017-09-01T00:00:00.086Z", "value": { "amount": "6285114", "currencyCode": "EUR" }, "valuePct": -2 }, { "dateFrom": "2017-09-01T00:00:00.087Z", "dateTo": "2017-09-08T00:00:00.087Z", "value": { "amount": "7184468", "currencyCode": "EUR" }, "valuePct": -1 }, { "dateFrom": "2017-09-08T00:00:00.088Z", "dateTo": "2017-09-15T00:00:00.088Z", "value": { "amount": "6722616", "currencyCode": "EUR" }, "valuePct": 0.5 }, { "dateFrom": "2017-09-15T00:00:00.089Z", "dateTo": "2017-09-22T00:00:00.089Z", "value": { "amount": "6689229", "currencyCode": "EUR" }, "valuePct": -3 }, { "dateFrom": "2017-09-22T00:00:00.090Z", "dateTo": "2017-09-29T00:00:00.090Z", "value": { "amount": "5842472", "currencyCode": "EUR" }, "valuePct": 5 }, { "dateFrom": "2017-09-29T00:00:00.091Z", "dateTo": "2017-10-06T00:00:00.091Z", "value": { "amount": "5926391", "currencyCode": "EUR" }, "valuePct": -5 }, { "dateFrom": "2017-10-06T00:00:00.092Z", "dateTo": "2017-10-13T00:00:00.092Z", "value": { "amount": "6633499", "currencyCode": "EUR" }, "valuePct": 0.5 }, { "dateFrom": "2017-10-13T00:00:00.093Z", "dateTo": "2017-10-20T00:00:00.093Z", "value": { "amount": "5786299", "currencyCode": "EUR" }, "valuePct": -4 }, { "dateFrom": "2017-10-20T00:00:00.094Z", "dateTo": "2017-10-27T00:00:00.094Z", "value": { "amount": "6879682", "currencyCode": "EUR" }, "valuePct": -5 }, { "dateFrom": "2017-10-27T00:00:00.095Z", "dateTo": "2017-11-03T00:00:00.095Z", "value": { "amount": "5872714", "currencyCode": "EUR" }, "valuePct": -5 }, { "dateFrom": "2017-11-03T00:00:00.096Z", "dateTo": "2017-11-10T00:00:00.096Z", "value": { "amount": "6167084", "currencyCode": "EUR" }, "valuePct": 0.5 }, { "dateFrom": "2017-11-10T00:00:00.097Z", "dateTo": "2017-11-17T00:00:00.097Z", "value": { "amount": "5850056", "currencyCode": "EUR" }, "valuePct": 4 }, { "dateFrom": "2017-11-17T00:00:00.098Z", "dateTo": "2017-11-24T00:00:00.098Z", "value": { "amount": "7209755", "currencyCode": "EUR" }, "valuePct": 1 }, { "dateFrom": "2017-11-24T00:00:00.099Z", "dateTo": "2017-12-01T00:00:00.099Z", "value": { "amount": "7034770", "currencyCode": "EUR" }, "valuePct": 3 }, { "dateFrom": "2017-12-01T00:00:00.100Z", "dateTo": "2017-12-08T00:00:00.100Z", "value": { "amount": "6856104", "currencyCode": "EUR" }, "valuePct": -3 }, { "dateFrom": "2017-12-08T00:00:00.101Z", "dateTo": "2017-12-15T00:00:00.101Z", "value": { "amount": "5951966", "currencyCode": "EUR" }, "valuePct": 4 }, { "dateFrom": "2017-12-15T00:00:00.102Z", "dateTo": "2017-12-22T00:00:00.102Z", "value": { "amount": "6314427", "currencyCode": "EUR" }, "valuePct": 1 }, { "dateFrom": "2017-12-22T00:00:00.103Z", "dateTo": "2017-12-29T00:00:00.103Z", "value": { "amount": "7204678", "currencyCode": "EUR" }, "valuePct": 1 }, { "dateFrom": "2017-12-29T00:00:00.104Z", "dateTo": "2018-01-05T00:00:00.104Z", "value": { "amount": "6970868", "currencyCode": "EUR" }, "valuePct": 1 }, { "dateFrom": "2018-01-05T00:00:00.105Z", "dateTo": "2018-01-12T00:00:00.105Z", "value": { "amount": "6025910", "currencyCode": "EUR" }, "valuePct": 3 }, { "dateFrom": "2018-01-12T00:00:00.106Z", "dateTo": "2018-01-19T00:00:00.106Z", "value": { "amount": "5982725", "currencyCode": "EUR" }, "valuePct": -3 }, { "dateFrom": "2018-01-19T00:00:00.107Z", "dateTo": "2018-01-26T00:00:00.107Z", "value": { "amount": "7196733", "currencyCode": "EUR" }, "valuePct": -2 }, { "dateFrom": "2018-01-26T00:00:00.108Z", "dateTo": "2018-02-02T00:00:00.108Z", "value": { "amount": "6524555", "currencyCode": "EUR" }, "valuePct": 4 }, { "dateFrom": "2018-02-02T00:00:00.109Z", "dateTo": "2018-02-09T00:00:00.109Z", "value": { "amount": "6708153", "currencyCode": "EUR" }, "valuePct": 4 }, { "dateFrom": "2018-02-09T00:00:00.110Z", "dateTo": "2018-02-16T00:00:00.110Z", "value": { "amount": "7173597", "currencyCode": "EUR" }, "valuePct": -5 }, { "dateFrom": "2018-02-16T00:00:00.111Z", "dateTo": "2018-02-23T00:00:00.111Z", "value": { "amount": "6812083", "currencyCode": "EUR" }, "valuePct": -1 }, { "dateFrom": "2018-02-23T00:00:00.112Z", "dateTo": "2018-03-02T00:00:00.112Z", "value": { "amount": "6246861", "currencyCode": "EUR" }, "valuePct": 4 }, { "dateFrom": "2018-03-02T00:00:00.113Z", "dateTo": "2018-03-09T00:00:00.113Z", "value": { "amount": "7035636", "currencyCode": "EUR" }, "valuePct": 2 }, { "dateFrom": "2018-03-09T00:00:00.114Z", "dateTo": "2018-03-16T00:00:00.114Z", "value": { "amount": "5725747", "currencyCode": "EUR" }, "valuePct": -3 }, { "dateFrom": "2018-03-16T00:00:00.115Z", "dateTo": "2018-03-23T00:00:00.115Z", "value": { "amount": "6308332", "currencyCode": "EUR" }, "valuePct": 4 }, { "dateFrom": "2018-03-23T00:00:00.116Z", "dateTo": "2018-03-30T00:00:00.116Z", "value": { "amount": "5720112", "currencyCode": "EUR" }, "valuePct": -1 }, { "dateFrom": "2018-03-30T00:00:00.117Z", "dateTo": "2018-04-06T00:00:00.117Z", "value": { "amount": "6715068", "currencyCode": "EUR" }, "valuePct": 1 }, { "dateFrom": "2018-04-06T00:00:00.118Z", "dateTo": "2018-04-13T00:00:00.118Z", "value": { "amount": "5867264", "currencyCode": "EUR" }, "valuePct": 1 }, { "dateFrom": "2018-04-13T00:00:00.119Z", "dateTo": "2018-04-20T00:00:00.119Z", "value": { "amount": "6034599", "currencyCode": "EUR" }, "valuePct": 1 }, { "dateFrom": "2018-04-20T00:00:00.120Z", "dateTo": "2018-04-27T00:00:00.120Z", "value": { "amount": "6997007", "currencyCode": "EUR" }, "valuePct": -4 }, { "dateFrom": "2018-04-27T00:00:00.121Z", "dateTo": "2018-05-04T00:00:00.121Z", "value": { "amount": "6453228", "currencyCode": "EUR" }, "valuePct": 4 }, { "dateFrom": "2018-05-04T00:00:00.122Z", "dateTo": "2018-05-11T00:00:00.122Z", "value": { "amount": "6313486", "currencyCode": "EUR" }, "valuePct": 1 }, { "dateFrom": "2018-05-11T00:00:00.123Z", "dateTo": "2018-05-18T00:00:00.123Z", "value": { "amount": "6860518", "currencyCode": "EUR" }, "valuePct": -2 }, { "dateFrom": "2018-05-18T00:00:00.124Z", "dateTo": "2018-05-25T00:00:00.124Z", "value": { "amount": "7063918", "currencyCode": "EUR" }, "valuePct": -2 }, { "dateFrom": "2018-05-25T00:00:00.125Z", "dateTo": "2018-06-01T00:00:00.125Z", "value": { "amount": "6386710", "currencyCode": "EUR" }, "valuePct": 2 }, { "dateFrom": "2018-06-01T00:00:00.126Z", "dateTo": "2018-06-08T00:00:00.126Z", "value": { "amount": "6017920", "currencyCode": "EUR" }, "valuePct": 3 }, { "dateFrom": "2018-06-08T00:00:00.127Z", "dateTo": "2018-06-15T00:00:00.127Z", "value": { "amount": "5832544", "currencyCode": "EUR" }, "valuePct": 5 }, { "dateFrom": "2018-06-15T00:00:00.128Z", "dateTo": "2018-06-22T00:00:00.128Z", "value": { "amount": "6960513", "currencyCode": "EUR" }, "valuePct": 4 }, { "dateFrom": "2018-06-22T00:00:00.129Z", "dateTo": "2018-06-29T00:00:00.129Z", "value": { "amount": "6471256", "currencyCode": "EUR" }, "valuePct": 2 }, { "dateFrom": "2018-06-29T00:00:00.130Z", "dateTo": "2018-07-06T00:00:00.130Z", "value": { "amount": "5724608", "currencyCode": "EUR" }, "valuePct": 4 }, { "dateFrom": "2018-07-06T00:00:00.131Z", "dateTo": "2018-07-13T00:00:00.131Z", "value": { "amount": "6255234", "currencyCode": "EUR" }, "valuePct": 5 }, { "dateFrom": "2018-07-13T00:00:00.132Z", "dateTo": "2018-07-20T00:00:00.132Z", "value": { "amount": "6754423", "currencyCode": "EUR" }, "valuePct": -1 }, { "dateFrom": "2018-07-20T00:00:00.133Z", "dateTo": "2018-07-27T00:00:00.133Z", "value": { "amount": "6858731", "currencyCode": "EUR" }, "valuePct": 0.5 }, { "dateFrom": "2018-07-27T00:00:00.134Z", "dateTo": "2018-08-03T00:00:00.134Z", "value": { "amount": "6803701", "currencyCode": "EUR" }, "valuePct": -5 }, { "dateFrom": "2018-08-03T00:00:00.135Z", "dateTo": "2018-08-10T00:00:00.135Z", "value": { "amount": "6497574", "currencyCode": "EUR" }, "valuePct": -3 }, { "dateFrom": "2018-08-10T00:00:00.136Z", "dateTo": "2018-08-17T00:00:00.136Z", "value": { "amount": "5985219", "currencyCode": "EUR" }, "valuePct": -3 }, { "dateFrom": "2018-08-17T00:00:00.137Z", "dateTo": "2018-08-24T00:00:00.137Z", "value": { "amount": "6048879", "currencyCode": "EUR" }, "valuePct": -1 }, { "dateFrom": "2018-08-24T00:00:00.138Z", "dateTo": "2018-08-31T00:00:00.138Z", "value": { "amount": "5994574", "currencyCode": "EUR" }, "valuePct": 2 }, { "dateFrom": "2018-08-31T00:00:00.139Z", "dateTo": "2018-09-07T00:00:00.139Z", "value": { "amount": "6520831", "currencyCode": "EUR" }, "valuePct": 1 }, { "dateFrom": "2018-09-07T00:00:00.140Z", "dateTo": "2018-09-14T00:00:00.140Z", "value": { "amount": "7055581", "currencyCode": "EUR" }, "valuePct": 2 }, { "dateFrom": "2018-09-14T00:00:00.141Z", "dateTo": "2018-09-21T00:00:00.141Z", "value": { "amount": "5891402", "currencyCode": "EUR" }, "valuePct": -5 }, { "dateFrom": "2018-09-21T00:00:00.142Z", "dateTo": "2018-09-28T00:00:00.142Z", "value": { "amount": "6293978", "currencyCode": "EUR" }, "valuePct": -5 }, { "dateFrom": "2018-09-28T00:00:00.143Z", "dateTo": "2018-10-05T00:00:00.143Z", "value": { "amount": "6340691", "currencyCode": "EUR" }, "valuePct": -2 }, { "dateFrom": "2018-10-05T00:00:00.144Z", "dateTo": "2018-10-12T00:00:00.144Z", "value": { "amount": "6199942", "currencyCode": "EUR" }, "valuePct": -3 }, { "dateFrom": "2018-10-12T00:00:00.145Z", "dateTo": "2018-10-19T00:00:00.145Z", "value": { "amount": "6939834", "currencyCode": "EUR" }, "valuePct": 4 }, { "dateFrom": "2018-10-19T00:00:00.146Z", "dateTo": "2018-10-26T00:00:00.146Z", "value": { "amount": "6656636", "currencyCode": "EUR" }, "valuePct": 4 }, { "dateFrom": "2018-10-26T00:00:00.147Z", "dateTo": "2018-11-02T00:00:00.147Z", "value": { "amount": "5775172", "currencyCode": "EUR" }, "valuePct": 3 }, { "dateFrom": "2018-11-02T00:00:00.148Z", "dateTo": "2018-11-09T00:00:00.148Z", "value": { "amount": "6245014", "currencyCode": "EUR" }, "valuePct": -2 }, { "dateFrom": "2018-11-09T00:00:00.149Z", "dateTo": "2018-11-16T00:00:00.149Z", "value": { "amount": "6404055", "currencyCode": "EUR" }, "valuePct": 1 }, { "dateFrom": "2018-11-16T00:00:00.150Z", "dateTo": "2018-11-23T00:00:00.150Z", "value": { "amount": "5931842", "currencyCode": "EUR" }, "valuePct": -3 }, { "dateFrom": "2018-11-23T00:00:00.151Z", "dateTo": "2018-11-30T00:00:00.151Z", "value": { "amount": "7181715", "currencyCode": "EUR" }, "valuePct": 0.5 }, { "dateFrom": "2018-11-30T00:00:00.152Z", "dateTo": "2018-12-07T00:00:00.152Z", "value": { "amount": "5796852", "currencyCode": "EUR" }, "valuePct": -2 }, { "dateFrom": "2018-12-07T00:00:00.153Z", "dateTo": "2018-12-14T00:00:00.153Z", "value": { "amount": "6977254", "currencyCode": "EUR" }, "valuePct": -1 }, { "dateFrom": "2018-12-14T00:00:00.154Z", "dateTo": "2018-12-21T00:00:00.154Z", "value": { "amount": "6405145", "currencyCode": "EUR" }, "valuePct": 0.5 }, { "dateFrom": "2018-12-21T00:00:00.155Z", "dateTo": "2018-12-28T00:00:00.155Z", "value": { "amount": "5805225", "currencyCode": "EUR" }, "valuePct": -3 }, { "dateFrom": "2018-12-28T00:00:00.156Z", "dateTo": "2019-01-04T00:00:00.156Z", "value": { "amount": "6708041", "currencyCode": "EUR" }, "valuePct": -3 }], "valueDataDisplay": true, "valuePctDataDisplay": true } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": null }],
	
	      getPortfoliosummaryPerformanceChart: [{ "status": 200, "data": { "chartData": [{ "dateFrom": "2016-01-01T00:00:00.000Z", "dateTo": "2016-01-01T00:00:00.000Z", "value": 0 }, { "dateFrom": "2016-02-01T00:00:00.000Z", "dateTo": "2016-02-01T00:00:00.000Z", "value": 5 }, { "dateFrom": "2016-03-01T00:00:00.000Z", "dateTo": "2016-03-01T00:00:00.000Z", "value": -5 }, { "dateFrom": "2016-04-01T00:00:00.000Z", "dateTo": "2016-04-01T00:00:00.000Z", "value": 1 }, { "dateFrom": "2016-05-01T00:00:00.000Z", "dateTo": "2016-05-01T00:00:00.000Z", "value": 10 }, { "dateFrom": "2016-06-01T00:00:00.000Z", "dateTo": "2016-06-01T00:00:00.000Z", "value": 3 }, { "dateFrom": "2016-07-01T00:00:00.000Z", "dateTo": "2016-07-01T00:00:00.000Z", "value": -1 }, { "dateFrom": "2016-08-01T00:00:00.000Z", "dateTo": "2016-08-01T00:00:00.000Z", "value": -10 }, { "dateFrom": "2016-09-01T00:00:00.000Z", "dateTo": "2016-09-01T00:00:00.000Z", "value": -3 }, { "dateFrom": "2016-10-01T00:00:00.000Z", "dateTo": "2016-10-01T00:00:00.000Z", "value": 0 }, { "dateFrom": "2016-11-01T00:00:00.000Z", "dateTo": "2016-11-01T00:00:00.000Z", "value": -1 }, { "dateFrom": "2016-12-01T00:00:00.000Z", "dateTo": "2016-12-01T00:00:00.000Z", "value": -2 }, { "dateFrom": "2017-01-01T00:00:00.000Z", "dateTo": "2017-01-01T00:00:00.000Z", "value": 0 }, { "dateFrom": "2017-02-01T00:00:00.000Z", "dateTo": "2017-02-01T00:00:00.000Z", "value": 2 }, { "dateFrom": "2017-03-01T00:00:00.000Z", "dateTo": "2017-03-01T00:00:00.000Z", "value": 0.5 }, { "dateFrom": "2017-04-01T00:00:00.000Z", "dateTo": "2017-04-01T00:00:00.000Z", "value": 0 }, { "dateFrom": "2017-05-01T00:00:00.000Z", "dateTo": "2017-05-01T00:00:00.000Z", "value": 1 }, { "dateFrom": "2017-06-01T00:00:00.000Z", "dateTo": "2017-06-01T00:00:00.000Z", "value": -2 }, { "dateFrom": "2017-07-01T00:00:00.000Z", "dateTo": "2017-07-01T00:00:00.000Z", "value": 0 }, { "dateFrom": "2017-08-01T00:00:00.000Z", "dateTo": "2017-08-01T00:00:00.000Z", "value": 1 }, { "dateFrom": "2017-09-01T00:00:00.000Z", "dateTo": "2017-09-01T00:00:00.000Z", "value": 2.2 }, { "dateFrom": "2017-10-01T00:00:00.000Z", "dateTo": "2017-10-01T00:00:00.000Z", "value": 2.9 }, { "dateFrom": "2017-11-01T00:00:00.000Z", "dateTo": "2017-11-01T00:00:00.000Z", "value": 3 }, { "dateFrom": "2017-12-01T00:00:00.000Z", "dateTo": "2017-12-01T00:00:00.000Z", "value": 2 }, { "dateFrom": "2018-01-01T00:00:00.000Z", "dateTo": "2018-01-01T00:00:00.000Z", "value": 19 }, { "dateFrom": "2018-02-01T00:00:00.000Z", "dateTo": "2018-02-01T00:00:00.000Z", "value": 25.1 }, { "dateFrom": "2018-03-01T00:00:00.000Z", "dateTo": "2018-03-01T00:00:00.000Z", "value": 25.6 }, { "dateFrom": "2018-04-01T00:00:00.000Z", "dateTo": "2018-04-01T00:00:00.000Z", "value": 36 }, { "dateFrom": "2018-05-01T00:00:00.000Z", "dateTo": "2018-05-01T00:00:00.000Z", "value": 44.3 }, { "dateFrom": "2018-06-01T00:00:00.000Z", "dateTo": "2018-06-01T00:00:00.000Z", "value": 44.9 }, { "dateFrom": "2018-07-01T00:00:00.000Z", "dateTo": "2018-07-01T00:00:00.000Z", "value": 50.7 }, { "dateFrom": "2018-08-01T00:00:00.000Z", "dateTo": "2018-08-01T00:00:00.000Z", "value": 45.3 }, { "dateFrom": "2018-09-01T00:00:00.000Z", "dateTo": "2018-09-01T00:00:00.000Z", "value": 40.7 }, { "dateFrom": "2018-10-01T00:00:00.000Z", "dateTo": "2018-10-01T00:00:00.000Z", "value": 42.2 }, { "dateFrom": "2018-11-01T00:00:00.000Z", "dateTo": "2018-11-01T00:00:00.000Z", "value": 30.3 }, { "dateFrom": "2018-12-01T00:00:00.000Z", "dateTo": "2018-12-01T00:00:00.000Z", "value": 40.6 }] } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": null }],
	
	      getPortfoliosummaryTransactionsRecord: [{ "status": 200, "data": { "id": 1828514, "instrumentNameLong": "Veeco Instruments Inc.", "transactionDate": "2017-06-13T13:03:47Z", "valueDate": "2017-04-09T09:04:25Z", "category": "Redemption", "market": "Euronext", "orderType": "Stop order", "quantity": 7822.93, "price": { "amount": "61.08", "currencyCode": "EUR" }, "amount": { "amount": "17965.99", "currencyCode": "EUR" }, "balanceAmount": { "amount": "545545.93", "currencyCode": "EUR" }, "grossAmount": { "amount": "576706.29", "currencyCode": "EUR" }, "exchangeRate": 1.51, "taxesLocal": { "amount": "1265.35", "currencyCode": "EUR" }, "taxesForeign": { "amount": "3421.45", "currencyCode": "CNY" }, "feesLocal": { "amount": "1118.72", "currencyCode": "EUR" }, "feesForeign": { "amount": "573.48", "currencyCode": "IDR" }, "instrumentCodeCustom": "OV70008413341656", "officialCode": "QG82611161281766", "assetClass": "Bonds", "assetSubClass": "Government Bonds", "assetKey": "QM94003377461533", "notes": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.", "counterpartyName": "Oceanic Airlines", "instrumentCurrency": "EUR" } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 500, "data": null }],
	
	      deletePortfoliosummaryCustomListRecord: [{ "status": 200, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 422, "data": null }, { "status": 500, "data": null }],
	
	      putPortfoliosummaryCustomListRecord: [{ "status": 200, "data": { "uuid": "550e8400-e29b-41d4-a716-446655440002" } }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 409, "data": null }, { "status": 422, "data": null }, { "status": 500, "data": null }],
	
	      postPortfoliosummaryCustomListPortfolioRecord: [{ "status": 200, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 422, "data": null }, { "status": 500, "data": null }],
	
	      deletePortfoliosummaryCustomListPortfolioRecord: [{ "status": 200, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 422, "data": null }, { "status": 500, "data": null }],
	
	      deletePortfoliosummaryFavoritesRecord: [{ "status": 200, "data": null }, { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } }, { "status": 403, "data": null }, { "status": 404, "data": null }, { "status": 500, "data": null }]
	
	    };
	
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
	
	    var plugins = (_plugins = {}, _defineProperty(_plugins, PLUGINS_ALL, []), _defineProperty(_plugins, 'getPortfoliosummary', []), _defineProperty(_plugins, 'getPortfoliosummaryRecord', []), _defineProperty(_plugins, 'postPortfoliosummaryCustomListRecord', []), _defineProperty(_plugins, 'getPortfoliosummaryCustomList', []), _defineProperty(_plugins, 'putPortfoliosummaryFavoritesRecord', []), _defineProperty(_plugins, 'postPortfoliosummaryClientOrderRecord', []), _defineProperty(_plugins, 'postPortfoliosummaryAliasRecord', []), _defineProperty(_plugins, 'getPortfoliosummaryPositions', []), _defineProperty(_plugins, 'getPortfoliosummaryAllocationsAsset', []), _defineProperty(_plugins, 'getPortfoliosummaryAllocationsCurrency', []), _defineProperty(_plugins, 'getPortfoliosummaryTransactions', []), _defineProperty(_plugins, 'getPortfoliosummaryTransactionFilterOptions', []), _defineProperty(_plugins, 'getPortfoliosummaryValuationChart', []), _defineProperty(_plugins, 'getPortfoliosummaryPerformanceChart', []), _defineProperty(_plugins, 'getPortfoliosummaryTransactionsRecord', []), _defineProperty(_plugins, 'deletePortfoliosummaryCustomListRecord', []), _defineProperty(_plugins, 'putPortfoliosummaryCustomListRecord', []), _defineProperty(_plugins, 'postPortfoliosummaryCustomListPortfolioRecord', []), _defineProperty(_plugins, 'deletePortfoliosummaryCustomListPortfolioRecord', []), _defineProperty(_plugins, 'deletePortfoliosummaryFavoritesRecord', []), _plugins);
	
	    if (!plugins['getPortfoliosummary']) {
	      console.warn('%cThere is no "getPortfoliosummary" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPortfoliosummary'].push(function (result, args) {
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
	
	    if (!plugins['getPortfoliosummaryTransactions']) {
	      console.warn('%cThere is no "getPortfoliosummaryTransactions" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPortfoliosummaryTransactions'].push(function (result, args) {
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
	
	    if (!plugins['getPortfoliosummary']) {
	      console.warn('%cThere is no "getPortfoliosummary" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPortfoliosummary'].push(function (collection, args) {
	        var params = args[0];
	
	        // Filter by executionDateFrom
	        var filtered = params.query ? collection.data.filter(function (item) {
	          return item.IBAN.toLowerCase().includes(params.query.toLowerCase()) || item.clientName.toLowerCase().includes(params.query.toLowerCase());
	        }) : collection.data;
	
	        return Object.assign(collection, {
	          data: filtered
	        });
	      });
	    }
	
	    if (!plugins['getPortfoliosummaryValuationChart']) {
	      console.warn('%cThere is no "getPortfoliosummaryValuationChart" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPortfoliosummaryValuationChart'].push(function (collection, args) {
	        var params = args[1];
	
	        function toTimeNumber(date) {
	          return new Date(date).getTime();
	        }
	
	        var filterByPeriod = function filterByPeriod(collection, _ref) {
	          var fromDate = _ref.fromDate,
	              toDate = _ref.toDate;
	          return collection.filter(function (item) {
	            var month = (toTimeNumber(item.dateTo) + toTimeNumber(item.dateFrom)) / 2;
	            return month <= toTimeNumber(toDate) && month >= toTimeNumber(fromDate);
	          });
	        };
	
	        return Object.assign(collection, {
	          data: Object.assign({}, collection.data, {
	            chartData: filterByPeriod(collection.data.chartData, {
	              fromDate: params.fromDate,
	              toDate: params.toDate
	            })
	          })
	        });
	      });
	    }
	
	    if (!plugins['getPortfoliosummaryPerformanceChart']) {
	      console.warn('%cThere is no "getPortfoliosummaryPerformanceChart" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPortfoliosummaryPerformanceChart'].push(function (collection, args) {
	        var params = args[1];
	
	        function toTimeNumber(date) {
	          return new Date(date).getTime();
	        }
	
	        var filterByPeriod = function filterByPeriod(collection, _ref2) {
	          var fromDate = _ref2.fromDate,
	              toDate = _ref2.toDate;
	          return collection.filter(function (item) {
	            var month = (toTimeNumber(item.dateTo) + toTimeNumber(item.dateFrom)) / 2;
	            return month <= toTimeNumber(toDate) && month >= toTimeNumber(fromDate);
	          });
	        };
	
	        return Object.assign(collection, {
	          data: Object.assign({}, collection.data, {
	            chartData: filterByPeriod(collection.data.chartData, {
	              fromDate: params.fromDate,
	              toDate: params.toDate
	            })
	          })
	        });
	      });
	    }
	
	    if (!plugins['__all__']) {
	      console.warn('%cThere is no "__all__" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['__all__'].push(function anonymous(result
	      /**/) {
	
	        var min = parseInt('500', 10) || 0;
	        var max = parseInt('2000', 10) || 0;
	        var order = Math.floor(Math.log(max) / Math.LN10);
	        var rnd = Math.floor(Math.random() * Math.pow(10, order + 1));
	        var delay = Math.max(min, rnd % (max + 1));
	
	        return new Promise(function (resolve) {
	          setTimeout(function () {
	            resolve(result);
	          }, delay);
	        });
	      });
	    }
	
	    if (!plugins['getPortfoliosummary']) {
	      console.warn('%cThere is no "getPortfoliosummary" method for the mock plugin', 'font-weight: bold');
	    } else {
	      plugins['getPortfoliosummary'].push(function anonymous(result, args
	      /**/) {
	
	        var params = args[args.length - 2] || {};
	        var orderDirection = params.direction === 'ASC' ? 1 : -1;
	        var orderBy = params.orderBy;
	        var data = result.data;
	
	        if (orderBy) {
	          var getValueFn = function getValueFn(propName, obj) {
	            function createGetter(propName) {
	              if (propName.includes('.')) {
	                var parts = propName.split('.');
	
	                return function (item) {
	                  var length = parts.length,
	                      property = item;
	
	                  for (var i = 0; i < length; i++) {
	                    property = property[parts[i]];
	                  }
	
	                  return property;
	                };
	              }
	
	              return function (item) {
	                return item[propName];
	              };
	            }
	
	            var value = createGetter(propName)(obj);
	
	            var numberValue = Number(value);
	
	            if (isNaN(numberValue)) return value;
	
	            return numberValue;
	          };
	          var compareFn = function compareFn(a, b) {
	            var aValue = getValueFn(orderBy, a);
	            var bValue = getValueFn(orderBy, b);
	            if (aValue === bValue) {
	              return 0;
	            }
	            return aValue > bValue ? orderDirection : -orderDirection;
	          };
	
	          data = [].concat(data).sort(compareFn);
	        }
	        return Object.assign({}, result, { data: data });
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
	
	    function getPortfoliosummary(params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getPortfoliosummary', 200)).then(pluginMocks('getPortfoliosummary', [params, headers], '{version}/portfoliosummary')).catch(handleError('getPortfoliosummary'));
	    }
	
	    function getPortfoliosummaryRecord(portfolioId, params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/' + portfolioId;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getPortfoliosummaryRecord', 200)).then(pluginMocks('getPortfoliosummaryRecord', [portfolioId, params, headers], '{version}/portfoliosummary/{portfolioId}')).catch(handleError('getPortfoliosummaryRecord'));
	    }
	
	    function postPortfoliosummaryCustomListRecord(data, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/custom-list';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postPortfoliosummaryCustomListRecord', 200)).then(pluginMocks('postPortfoliosummaryCustomListRecord', [data, headers], '{version}/portfoliosummary/custom-list')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postPortfoliosummaryCustomListRecord'));
	    }
	
	    function getPortfoliosummaryCustomList(params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/custom-list';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getPortfoliosummaryCustomList', 200)).then(pluginMocks('getPortfoliosummaryCustomList', [params, headers], '{version}/portfoliosummary/custom-list')).catch(handleError('getPortfoliosummaryCustomList'));
	    }
	
	    function putPortfoliosummaryFavoritesRecord(data, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/favorites';
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putPortfoliosummaryFavoritesRecord', 200)).then(pluginMocks('putPortfoliosummaryFavoritesRecord', [data, headers], '{version}/portfoliosummary/favorites')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putPortfoliosummaryFavoritesRecord'));
	    }
	
	    function postPortfoliosummaryClientOrderRecord(data, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/client-order';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postPortfoliosummaryClientOrderRecord', 200)).then(pluginMocks('postPortfoliosummaryClientOrderRecord', [data, headers], '{version}/portfoliosummary/client-order')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postPortfoliosummaryClientOrderRecord'));
	    }
	
	    function postPortfoliosummaryAliasRecord(data, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/alias';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postPortfoliosummaryAliasRecord', 200)).then(pluginMocks('postPortfoliosummaryAliasRecord', [data, headers], '{version}/portfoliosummary/alias')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postPortfoliosummaryAliasRecord'));
	    }
	
	    function getPortfoliosummaryPositions(portfolioId, params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/' + portfolioId + '/positions';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getPortfoliosummaryPositions', 200)).then(pluginMocks('getPortfoliosummaryPositions', [portfolioId, params, headers], '{version}/portfoliosummary/{portfolioId}/positions')).catch(handleError('getPortfoliosummaryPositions'));
	    }
	
	    function getPortfoliosummaryAllocationsAsset(portfolioId, params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/' + portfolioId + '/allocations-asset';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getPortfoliosummaryAllocationsAsset', 200)).then(pluginMocks('getPortfoliosummaryAllocationsAsset', [portfolioId, params, headers], '{version}/portfoliosummary/{portfolioId}/allocations-asset')).catch(handleError('getPortfoliosummaryAllocationsAsset'));
	    }
	
	    function getPortfoliosummaryAllocationsCurrency(portfolioId, params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/' + portfolioId + '/allocations-currency';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getPortfoliosummaryAllocationsCurrency', 200)).then(pluginMocks('getPortfoliosummaryAllocationsCurrency', [portfolioId, params, headers], '{version}/portfoliosummary/{portfolioId}/allocations-currency')).catch(handleError('getPortfoliosummaryAllocationsCurrency'));
	    }
	
	    function getPortfoliosummaryTransactions(portfolioId, params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/' + portfolioId + '/transactions';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getPortfoliosummaryTransactions', 200)).then(pluginMocks('getPortfoliosummaryTransactions', [portfolioId, params, headers], '{version}/portfoliosummary/{portfolioId}/transactions')).catch(handleError('getPortfoliosummaryTransactions'));
	    }
	
	    function getPortfoliosummaryTransactionFilterOptions(portfolioId, params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/' + portfolioId + '/transaction-filter-options';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getPortfoliosummaryTransactionFilterOptions', 200)).then(pluginMocks('getPortfoliosummaryTransactionFilterOptions', [portfolioId, params, headers], '{version}/portfoliosummary/{portfolioId}/transaction-filter-options')).catch(handleError('getPortfoliosummaryTransactionFilterOptions'));
	    }
	
	    function getPortfoliosummaryValuationChart(portfolioId, params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/' + portfolioId + '/valuation-chart';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getPortfoliosummaryValuationChart', 200)).then(pluginMocks('getPortfoliosummaryValuationChart', [portfolioId, params, headers], '{version}/portfoliosummary/{portfolioId}/valuation-chart')).catch(handleError('getPortfoliosummaryValuationChart'));
	    }
	
	    function getPortfoliosummaryPerformanceChart(portfolioId, params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/' + portfolioId + '/performance-chart';
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getPortfoliosummaryPerformanceChart', 200)).then(pluginMocks('getPortfoliosummaryPerformanceChart', [portfolioId, params, headers], '{version}/portfoliosummary/{portfolioId}/performance-chart')).catch(handleError('getPortfoliosummaryPerformanceChart'));
	    }
	
	    function getPortfoliosummaryTransactionsRecord(portfolioId, transactionId, params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/' + portfolioId + '/transactions/' + transactionId;
	      var mocking = {
	        method: 'GET',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('getPortfoliosummaryTransactionsRecord', 200)).then(pluginMocks('getPortfoliosummaryTransactionsRecord', [portfolioId, transactionId, params, headers], '{version}/portfoliosummary/{portfolioId}/transactions/{transactionId}')).catch(handleError('getPortfoliosummaryTransactionsRecord'));
	    }
	
	    function deletePortfoliosummaryCustomListRecord(uuid, params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/custom-list/' + uuid;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deletePortfoliosummaryCustomListRecord', 200)).then(pluginMocks('deletePortfoliosummaryCustomListRecord', [uuid, params, headers], '{version}/portfoliosummary/custom-list/{uuid}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deletePortfoliosummaryCustomListRecord'));
	    }
	
	    function putPortfoliosummaryCustomListRecord(uuid, data, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/custom-list/' + uuid;
	      var mocking = {
	        method: 'PUT',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('putPortfoliosummaryCustomListRecord', 200)).then(pluginMocks('putPortfoliosummaryCustomListRecord', [uuid, data, headers], '{version}/portfoliosummary/custom-list/{uuid}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('putPortfoliosummaryCustomListRecord'));
	    }
	
	    function postPortfoliosummaryCustomListPortfolioRecord(uuid, data, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/custom-list/' + uuid + '/portfolio';
	      var mocking = {
	        method: 'POST',
	        url: url,
	
	        data: data,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('postPortfoliosummaryCustomListPortfolioRecord', 200)).then(pluginMocks('postPortfoliosummaryCustomListPortfolioRecord', [uuid, data, headers], '{version}/portfoliosummary/custom-list/{uuid}/portfolio')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('postPortfoliosummaryCustomListPortfolioRecord'));
	    }
	
	    function deletePortfoliosummaryCustomListPortfolioRecord(uuid, portfolioIbanList, params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/custom-list/' + uuid + '/portfolio/' + portfolioIbanList;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deletePortfoliosummaryCustomListPortfolioRecord', 200)).then(pluginMocks('deletePortfoliosummaryCustomListPortfolioRecord', [uuid, portfolioIbanList, params, headers], '{version}/portfoliosummary/custom-list/{uuid}/portfolio/{portfolioIbanList}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deletePortfoliosummaryCustomListPortfolioRecord'));
	    }
	
	    function deletePortfoliosummaryFavoritesRecord(iban, params, headers) {
	      var url = '' + baseUri + version + '/portfoliosummary/favorites/' + iban;
	      var mocking = {
	        method: 'DELETE',
	        url: url,
	
	        params: params,
	
	        headers: headers
	      };
	
	      console.log('Mocking request with', mocking);
	      return Promise.resolve(getResponse('deletePortfoliosummaryFavoritesRecord', 200)).then(pluginMocks('deletePortfoliosummaryFavoritesRecord', [iban, params, headers], '{version}/portfoliosummary/favorites/{iban}')).then(function (result) {
	        // Persist global state to storage, in case plugins changed it.
	        persistState(state);
	        return result;
	      }).catch(handleError('deletePortfoliosummaryFavoritesRecord'));
	    }
	
	    schemas.postPortfoliosummaryCustomListRecord = { "properties": { "name": { "type": "string", "minLength": 3, "maxLength": 30, "required": true } } };
	
	    schemas.putPortfoliosummaryFavoritesRecord = { "properties": { "IBAN": { "type": "string", "minLength": 1, "maxLength": 36, "required": true } } };
	
	    schemas.postPortfoliosummaryClientOrderRecord = { "properties": {} };
	
	    schemas.postPortfoliosummaryAliasRecord = { "properties": { "IBAN": { "type": "string", "minLength": 1, "maxLength": 36, "required": true }, "alias": { "type": "string", "maxLength": 30, "required": false } } };
	
	    schemas.putPortfoliosummaryCustomListRecord = { "properties": { "name": { "type": "string", "minLength": 3, "maxLength": 30, "required": true } } };
	
	    schemas.postPortfoliosummaryCustomListPortfolioRecord = { "properties": {} };
	
	    return {
	
	      getPortfoliosummary: getPortfoliosummary,
	
	      getPortfoliosummaryRecord: getPortfoliosummaryRecord,
	
	      postPortfoliosummaryCustomListRecord: postPortfoliosummaryCustomListRecord,
	
	      getPortfoliosummaryCustomList: getPortfoliosummaryCustomList,
	
	      putPortfoliosummaryFavoritesRecord: putPortfoliosummaryFavoritesRecord,
	
	      postPortfoliosummaryClientOrderRecord: postPortfoliosummaryClientOrderRecord,
	
	      postPortfoliosummaryAliasRecord: postPortfoliosummaryAliasRecord,
	
	      getPortfoliosummaryPositions: getPortfoliosummaryPositions,
	
	      getPortfoliosummaryAllocationsAsset: getPortfoliosummaryAllocationsAsset,
	
	      getPortfoliosummaryAllocationsCurrency: getPortfoliosummaryAllocationsCurrency,
	
	      getPortfoliosummaryTransactions: getPortfoliosummaryTransactions,
	
	      getPortfoliosummaryTransactionFilterOptions: getPortfoliosummaryTransactionFilterOptions,
	
	      getPortfoliosummaryValuationChart: getPortfoliosummaryValuationChart,
	
	      getPortfoliosummaryPerformanceChart: getPortfoliosummaryPerformanceChart,
	
	      getPortfoliosummaryTransactionsRecord: getPortfoliosummaryTransactionsRecord,
	
	      deletePortfoliosummaryCustomListRecord: deletePortfoliosummaryCustomListRecord,
	
	      putPortfoliosummaryCustomListRecord: putPortfoliosummaryCustomListRecord,
	
	      postPortfoliosummaryCustomListPortfolioRecord: postPortfoliosummaryCustomListPortfolioRecord,
	
	      deletePortfoliosummaryCustomListPortfolioRecord: deletePortfoliosummaryCustomListPortfolioRecord,
	
	      deletePortfoliosummaryFavoritesRecord: deletePortfoliosummaryFavoritesRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=mock.data-bb-portfolio-summary-http-ng.js.map