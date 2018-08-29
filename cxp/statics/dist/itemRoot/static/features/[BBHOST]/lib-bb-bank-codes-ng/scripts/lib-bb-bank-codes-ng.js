(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-bank-codes-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-bank-codes-ng"] = factory(require("vendor-bb-angular"));
	else
		root["lib-bb-bank-codes-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_18__) {
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

	module.exports = __webpack_require__(137);

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bbBankCodesKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(18);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _helpers = __webpack_require__(138);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _bankCodesConfig = __webpack_require__(139);
	
	var _bankCodesConfig2 = _interopRequireDefault(_bankCodesConfig);
	
	var _bankCodes = __webpack_require__(140);
	
	var _bankCodes2 = _interopRequireDefault(_bankCodes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// References:
	// https://www.betaalvereniging.nl/aandachtsgebieden/giraal-betalingsverkeer/bic-sepa-transacties/
	// https://www.iban.com/united-kingdom.html
	
	/**
	 * @module lib-bb-bank-codes-ng
	 * @description IBAN Bank code input assistance. Default list of supported banks can be configured.
	 *
	 * @example
	 * import bbBankCodesModuleKey, { bbBankCodesKey } from 'lib-bb-bank-codes-ng';
	 *
	 * General usage:
	 * angular
	 *   .module('ExampleModule', [
	 *     bbBankCodesModuleKey,
	 *   ])
	 *   .config([`${bbBankCodesKey}Provider`,
	 *     (bankCodesProvider) => {
	 *       bankCodesProvider.addBanksToSpec({ UA: [{
	 *         code: 'PBAN',
	 *         name: 'PRIVAT BANK',
	 *       }] });
	 *     }
	 *   ])
	 *   .controller('DemoController', [bbBankCodesKey,
	 *     (lookupBankCodes) => {
	 *       lookupBankCodes(iban);
	 *     }
	 *   ]);
	 *
	 */
	
	var moduleKey = 'lib-bb-bank-codes-ng';
	
	/**
	 * @name bbBankCodesKey
	 * @type {string}
	 * @description Injector name of [BankCodesLibrary](#BankCodesLibrary) instance
	 */
	var bbBankCodesKey = exports.bbBankCodesKey = moduleKey + ':bbBankCodesKey';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, []).provider(bbBankCodesKey, function () {
	  return {
	    /**
	     * @name bbBankCodesProvider#addBanksToSpec
	     * @type {function}
	     * @param {Array.<BankCode>} additionalCodes A list of Bank Codes, grouped by country code
	     */
	    addBanksToSpec: function addBanksToSpec(additionalCodes) {
	      Object.keys(additionalCodes).forEach(function (country) {
	        var codes = additionalCodes[country];
	        if (Array.isArray(codes)) {
	          _bankCodesConfig2.default[country] = (_bankCodesConfig2.default[country] || []).concat(additionalCodes[country]);
	        }
	      });
	    },
	
	    $get: [function () {
	      return function (iban) {
	        if (typeof iban !== 'string') {
	          return false;
	        }
	
	        var compactIBAN = (0, _helpers2.default)(iban.toUpperCase());
	
	        try {
	          return (0, _bankCodes2.default)(compactIBAN);
	        } catch (e) {
	          return false;
	        }
	      };
	    }]
	  };
	}).name;
	
	/**
	 * @typedef BankCode
	 * @type {Object}
	 * @property {String} code      Bank code
	 * @property {String} name      Bank name
	 * @property {Boolean} default  Defines if code should be displayed by default
	 */

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name compact
	 * @description
	 * Remove spaces from a string
	 * @inner
	 * @param {String} str  A given string
	 * @return {String}     Compacted string
	 */
	var compact = function compact(str) {
	  return str.replace(/\s+/g, '');
	};
	
	exports.default = compact;

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Partial map of countries that are compliant with the ISO 13616 standard.
	 * Includes:
	 *  - NL: Netherlands
	 *  - GB: Great Britain
	 *  - BG: Bulgaria
	 *  - GI: Gibraltar
	 *  - IE: Ireland
	 *  - LV: Latvia
	 *  - MT: Malta
	 *  - RO: Romania
	 * @name bankCodesConfig
	 * @inner
	 * @type {Object}
	 */
	exports.default = {
	  NL: [{
	    code: 'ABNA',
	    name: 'ABN AMRO BANK',
	    default: true
	  }, {
	    code: 'ADYB',
	    name: 'ADYEN'
	  }, {
	    code: 'AEGO',
	    name: 'AEGON BANK'
	  }, {
	    code: 'ANAA',
	    name: 'BRAND NEW DAY BANK (EX ALIANZ ASSESMENT MANAGMENT)'
	  }, {
	    code: 'ANDL',
	    name: 'ANADOLUBANK'
	  }, {
	    code: 'ARBN',
	    name: 'ACHMEA BANK'
	  }, {
	    code: 'ARSN',
	    name: 'ARGENTA SPAARBANK'
	  }, {
	    code: 'ASNB',
	    name: 'ASN BANK'
	  }, {
	    code: 'ATBA',
	    name: 'AMSTERDAM TRADE BANK'
	  }, {
	    code: 'BCDM',
	    name: 'BANQUE CHAABI DU MAROC'
	  }, {
	    code: 'BCIT',
	    name: 'INTESA SANPAOLO'
	  }, {
	    code: 'BICK',
	    name: 'BINCKBANK'
	  }, {
	    code: 'BINK',
	    name: 'BINCKBANK, PROF'
	  }, {
	    code: 'BKCH',
	    name: 'BANK OF CHINA'
	  }, {
	    code: 'BKMG',
	    name: 'BANK MENDES GANS'
	  }, {
	    code: 'BLGW',
	    name: 'BLG WONEN'
	  }, {
	    code: 'BMEU',
	    name: 'BMCE EUROSERVICES'
	  }, {
	    code: 'BNDA',
	    name: 'BRAND NEW DAY BANK'
	  }, {
	    code: 'BNGH',
	    name: 'BANK NEDERLANDSE GEMEENTEN'
	  }, {
	    code: 'BNPA',
	    name: 'BNP PARIBAS'
	  }, {
	    code: 'BOFA',
	    name: 'BANK OF AMERICA'
	  }, {
	    code: 'BOFS',
	    name: 'BANK OF SCOTLAND, AMSTERDAM'
	  }, {
	    code: 'BOTK',
	    name: 'MUFG BANK'
	  }, {
	    code: 'BUNQ',
	    name: 'BUNQ'
	  }, {
	    code: 'CHAS',
	    name: 'JPMORGAN CHASE'
	  }, {
	    code: 'CITC',
	    name: 'CITCO BANK'
	  }, {
	    code: 'CITI',
	    name: 'CITIBANK INTERNATIONAL'
	  }, {
	    code: 'COBA',
	    name: 'COMMERZBANK'
	  }, {
	    code: 'DEUT',
	    name: 'DEUTSCHE BANK'
	  }, {
	    code: 'DHBN',
	    name: 'DEMIR-HALK BANK'
	  }, {
	    code: 'DLBK',
	    name: 'DELTA LLOYD BANK'
	  }, {
	    code: 'DNIB',
	    name: 'NIBC'
	  }, {
	    code: 'FBHL',
	    name: 'CREDIT EUROPE BANK'
	  }, {
	    code: 'FLOR',
	    name: 'DE NEDERLANDSCHE BANK'
	  }, {
	    code: 'FRGH',
	    name: 'FGH BANK'
	  }, {
	    code: 'FTSB',
	    name: 'ABN AMRO (ex FORTIS)'
	  }, {
	    code: 'FVLB',
	    name: 'VAN LANSCHOT'
	  }, {
	    code: 'GILL',
	    name: 'THEODOOR GILISSEN'
	  }, {
	    code: 'HAND',
	    name: 'SVENSKA HANDELSBANKEN'
	  }, {
	    code: 'HHBA',
	    name: 'HOF HOORNEMAN BANKIERS'
	  }, {
	    code: 'HSBC',
	    name: 'HSBC BANK'
	  }, {
	    code: 'ICBK',
	    name: 'INDUSTRIAL & COMMERCIAL BANK OF CHINA'
	  }, {
	    code: 'INGB',
	    name: 'ING',
	    default: true
	  }, {
	    code: 'INSI',
	    name: 'INSINGER DE BEAUFORT'
	  }, {
	    code: 'ISBK',
	    name: 'ISBANK'
	  }, {
	    code: 'KABA',
	    name: 'YAPI KREDI BANK'
	  }, {
	    code: 'KASA',
	    name: 'KAS BANK'
	  }, {
	    code: 'KNAB',
	    name: 'KNAB'
	  }, {
	    code: 'KOEX',
	    name: 'KOREA EXCHANGE BANK'
	  }, {
	    code: 'KRED',
	    name: 'KBC BANK'
	  }, {
	    code: 'LOCY',
	    name: 'LOMBARD ODIER DARIER HENTSCH & CIE'
	  }, {
	    code: 'LOYD',
	    name: 'LLOYDS TSB BANK'
	  }, {
	    code: 'LPLN',
	    name: 'LEASEPLAN CORPORATION'
	  }, {
	    code: 'MHCB',
	    name: 'MIZUHO BANK EUROPE NV'
	  }, {
	    code: 'MOYO',
	    name: 'MONEYOU'
	  }, {
	    code: 'NNBA',
	    name: 'NATIONALE-NEDERLANDEN BANK'
	  }, {
	    code: 'NWAB',
	    name: 'NEDERLANDSE WATERSCHAPSBANK'
	  }, {
	    code: 'PCBC',
	    name: 'CHINA CONSTRUCTION BANK, AMSTERDAM BRANCH'
	  }, {
	    code: 'RABO',
	    name: 'RABOBANK',
	    default: true
	  }, {
	    code: 'RBRB',
	    name: 'REGIOBANK'
	  }, {
	    code: 'SNSB',
	    name: 'SNS',
	    default: true
	  }, {
	    code: 'SOGE',
	    name: 'SOCIETE GENERALE'
	  }, {
	    code: 'TEBU',
	    name: 'THE ECONOMY BANK'
	  }, {
	    code: 'TRIO',
	    name: 'TRIODOS BANK'
	  }, {
	    code: 'UBSW',
	    name: 'UBS EUROPE, NETHERLANDS BRANCH'
	  }, {
	    code: 'UGBI',
	    name: 'GARANTIBANK INTERNATIONAL'
	  }, {
	    code: 'VOWA',
	    name: 'VOLKSWAGEN BANK'
	  }, {
	    code: 'ZWLB',
	    name: 'SNS ( ex ZWITSERLEVENBANK)'
	  }],
	  GB: [{
	    code: 'YORK',
	    name: 'YORKSHIRE BANK (CLYDESDALE BANK PLC T/A)'
	  }, {
	    code: 'VRBP',
	    name: 'BANCO POPOLARE'
	  }, {
	    code: 'TSBS',
	    name: 'LLOYDS TSB SCOTLAND EDINBURGH'
	  }, {
	    code: 'SWIS',
	    name: 'SWISSCANTO FUNDS CENTRE LIMITED'
	  }, {
	    code: 'SVBK',
	    name: 'SILICON VALLEY BANK'
	  }, {
	    code: 'SOGE',
	    name: 'SOCIETE GENERALE'
	  }, {
	    code: 'SMCO',
	    name: 'HSBC PRIVATE BANK (UK) LIMITED'
	  }, {
	    code: 'SMBC',
	    name: 'SUMITOMO MITSUI BANKING CORPORATION EUROPE LIMITED'
	  }, {
	    code: 'SELN',
	    name: 'SENTENIAL'
	  }, {
	    code: 'RBOS',
	    name: 'ROYAL BANK OF SCOTLAND PLC',
	    default: true
	  }, {
	    code: 'RAPH',
	    name: 'R RAPHAELS AND SONS PLC'
	  }, {
	    code: 'PUNB',
	    name: 'PUNJAB NATIONAL BANK INTERNATIONAL LTD.'
	  }, {
	    code: 'PNBP',
	    name: 'WELLS FARGO BANK N.A. LONDON BRANCH'
	  }, {
	    code: 'PARB',
	    name: 'BNP PARIBAS SECURITIES SERVICES UNITED KINGDOM'
	  }, {
	    code: 'NWBK',
	    name: 'NATIONAL WESTMINSTER BANK PLC'
	  }, {
	    code: 'NDEA',
	    name: 'NORDEA BANK AB LONDON BRANCH'
	  }, {
	    code: 'MIDL',
	    name: 'HSBC BANK PLC',
	    default: true
	  }, {
	    code: 'MHCB',
	    name: 'MIZUHO BANK LTD. LONDON BRANCH'
	  }, {
	    code: 'LOYD',
	    name: 'LLOYDS BANK PLC',
	    default: true
	  }, {
	    code: 'KRED',
	    name: 'KBC BANK NV LONDON'
	  }, {
	    code: 'JPMG',
	    name: 'JP MORGAN INTERNATIONAL BANK LTD'
	  }, {
	    code: 'IVES',
	    name: 'INVESTEC BANK PLC'
	  }, {
	    code: 'INGB',
	    name: 'ING BANK N.V. LONDON BRANCH'
	  }, {
	    code: 'ICIC',
	    name: 'ICICI BANK UK PLC'
	  }, {
	    code: 'ICBK',
	    name: 'ICBC (LONDON) PLC'
	  }, {
	    code: 'HYVE',
	    name: 'UNICREDIT BANK AG (HYPOVEREINSBANK)'
	  }, {
	    code: 'HOAB',
	    name: 'C. HOARE AND CO.'
	  }, {
	    code: 'HLFX',
	    name: 'BANK OF SCOTLAND PLC'
	  }, {
	    code: 'HAND',
	    name: 'SVENSKA HANDELSBANKEN LONDON BRANCH'
	  }, {
	    code: 'GEBA',
	    name: 'BNP PARIBAS LONDON BRANCH (FORMERLY BNP PARIBAS FORTIS SA/NV)'
	  }, {
	    code: 'FTSB',
	    name: 'ABN AMRO BANK N.V. UK BRANCH (FORMELY KNOWN AS FORTIS BANK (NEDERLAND)'
	  }, {
	    code: 'FTBK',
	    name: 'FIRST TRUST BANK'
	  }, {
	    code: 'ETHN',
	    name: 'NATIONAL BANK OF GREECE (LONDON)'
	  }, {
	    code: 'ESSE',
	    name: 'SKANDINAVISKA ENSKILDA BANKEN LONDON'
	  }, {
	    code: 'DNBA',
	    name: 'DNB BANK ASA LONDON BRANCH'
	  }, {
	    code: 'DEUT',
	    name: 'DEUTSCHE BANK AG'
	  }, {
	    code: 'DBUK',
	    name: 'DIAMOND BANK (UK) PLC'
	  }, {
	    code: 'DABA',
	    name: 'DANSKE BANK'
	  }, {
	    code: 'CSUK',
	    name: 'CREDIT SUISSE (UK) LIMITED'
	  }, {
	    code: 'CRLY',
	    name: 'CREDIT AGRICOLE CIB'
	  }, {
	    code: 'CPBK',
	    name: 'CO-OPERATIVE BANK PLC.'
	  }, {
	    code: 'COBA',
	    name: 'COMMERZBANK AG'
	  }, {
	    code: 'CNOR',
	    name: 'NORTHERN TRUST GLOBAL SERVICES LIMITED'
	  }, {
	    code: 'CLYD',
	    name: 'CLYDESDALE BANK PLC'
	  }, {
	    code: 'CITI',
	    name: 'CITIBANK N.A.'
	  }, {
	    code: 'CHAS',
	    name: 'JPMORGAN CHASE BANK N.A.'
	  }, {
	    code: 'CASH',
	    name: 'VOICE COMMERCE LIMITED'
	  }, {
	    code: 'BSCH',
	    name: 'BANCO SANTANDER S.A.'
	  }, {
	    code: 'BSAB',
	    name: 'BANCO DE SABADELL S.A.'
	  }, {
	    code: 'BOTK',
	    name: 'BANK OF TOKYO-MITSUBISHI UFJ LTD. THE'
	  }, {
	    code: 'BOFS',
	    name: 'BANK OF SCOTLAND PLC'
	  }, {
	    code: 'BOFI',
	    name: 'BANK OF IRELAND (UK) PLC'
	  }, {
	    code: 'BOFA',
	    name: 'BANK OF AMERICA N.A. LONDON'
	  }, {
	    code: 'BNPA',
	    name: 'BNP PARIBAS LONDON BRANCH'
	  }, {
	    code: 'BMAR',
	    name: 'BANCA MARCH S.A.'
	  }, {
	    code: 'BCYP',
	    name: 'BANK OF CYPRUS UK'
	  }, {
	    code: 'BCIT',
	    name: 'INTESA SANPAOLO SPA LONDON (FORMERLY BANCA INTESA S.P.A. LONDON)'
	  }, {
	    code: 'BBVA',
	    name: 'BANCO BILBAO VIZCAYA ARGENTARIA S.A.'
	  }, {
	    code: 'BARC',
	    name: 'BARCLAYS BANK PLC',
	    default: true
	  }, {
	    code: 'ARAB',
	    name: 'EUROPE ARAB BANK PLC'
	  }, {
	    code: 'ALBL',
	    name: 'ALPHA BANK LONDON LIMITED'
	  }, {
	    code: 'AIBK',
	    name: 'ALLIED IRISH BANK (GB) (AIB GROUP (UK) P.L.C. T/A)'
	  }, {
	    code: 'ABNA',
	    name: 'THE ROYAL BANK OF SCOTLAND PLC LONDON (FORMERLY KNOWN AS RBS NV)'
	  }, {
	    code: 'ABCE',
	    name: 'ABC INTERNATIONAL BANK PLC'
	  }, {
	    code: 'ABBY',
	    name: 'SANTANDER UK PLC'
	  }],
	  BG: [{
	    code: 'ABIE',
	    name: 'ABV INVESTICII EOOD'
	  }, {
	    code: 'ADCR',
	    name: 'ADAMANT CAPITAL PARTNERS AD'
	  }, {
	    code: 'ACCG',
	    name: 'AGENCY FOR CREDIT RATINGS AND ANALYSES AD'
	  }, {
	    code: 'BUIN',
	    name: 'ALLIANZ BANK BULGARIA AD'
	  }, {
	    code: 'CRBA',
	    name: 'ALPHA BANK'
	  }, {
	    code: 'AVJC',
	    name: 'AVAL IN JSC'
	  }, {
	    code: 'AVFI',
	    name: 'AVC FINANCE PLC'
	  }, {
	    code: 'AVCA',
	    name: 'AVUS CAPITAL'
	  }, {
	    code: 'BAPD',
	    name: 'BALKAN ADVISORY COMPANY IP EAD'
	  }, {
	    code: 'BICY',
	    name: 'BALKAN INVESTMENT COMPANY AD'
	  }, {
	    code: 'LUMI',
	    name: 'BANK LEUMI ROMANIA'
	  }, {
	    code: 'BSBG',
	    name: 'BANKSERVICE AD'
	  }, {
	    code: 'BEFN',
	    name: 'BENCHMARK FINANCE'
	  }, {
	    code: 'BEJS',
	    name: 'BETA CORP JSC'
	  }, {
	    code: 'BGPR',
	    name: 'BGPROINVEST'
	  }, {
	    code: 'BNPA',
	    name: 'BNP PARIBAS S.A.'
	  }, {
	    code: 'BULB',
	    name: 'BULBROKERS A D'
	  }, {
	    code: 'BUAA',
	    name: 'BULBROKERS EAD'
	  }, {
	    code: 'BUIV',
	    name: 'BULEX INVEST PLC'
	  }, {
	    code: 'BGUS',
	    name: 'BULGARIAN AMERICAN CREDIT BANK'
	  }, {
	    code: 'BCRC',
	    name: 'BULGARIAN CREDIT RATING AGENCY'
	  }, {
	    code: 'NASB',
	    name: 'BULGARIAN DEVELOPMENT BANK (FORMERLY ENCOURAGEMENT BANK)'
	  }, {
	    code: 'BNBG',
	    name: 'BULGARIAN NATIONAL BANK'
	  }, {
	    code: 'XBUL',
	    name: 'BULGARIAN STOCK EXCHANGE'
	  }, {
	    code: 'BUTK',
	    name: 'BULL TREND BROKERAGE LTD'
	  }, {
	    code: 'CAIJ',
	    name: 'CAPITAL INVEST JSC'
	  }, {
	    code: 'CAMJ',
	    name: 'CAPITAL MARKETS JSC'
	  }, {
	    code: 'CPNM',
	    name: 'CAPMAN INC.'
	  }, {
	    code: 'CECB',
	    name: 'CENTRAL COOPERATIVE BANK PLC'
	  }, {
	    code: 'CEDP',
	    name: 'CENTRAL DEPOSITORY AD'
	  }, {
	    code: 'BUIB',
	    name: 'CIBANK JSC'
	  }, {
	    code: 'CITI',
	    name: 'CITIBANK N.A.'
	  }, {
	    code: 'KORP',
	    name: 'CORPORATE COMMERCIAL BANK AD'
	  }, {
	    code: 'BINV',
	    name: 'CREDIT AGRICOLE BULGARIA EAD'
	  }, {
	    code: 'DEMI',
	    name: 'D COMMERCE BANK AD'
	  }, {
	    code: 'DISJ',
	    name: 'D.I.S.L. SECURITIES JSC.'
	  }, {
	    code: 'NODA',
	    name: 'DE NOVO EAD'
	  }, {
	    code: 'DETT',
	    name: 'DELTASTOCK AD'
	  }, {
	    code: 'DIFK',
	    name: 'DILINGOVA FINANSOVA KOMPANIA AD'
	  }, {
	    code: 'STSA',
	    name: 'DSK BANK (FORMERLY STATE SAVINGS BANK)',
	    default: true
	  }, {
	    code: 'ELTA',
	    name: 'ELANA TRADING INC'
	  }, {
	    code: 'EUFC',
	    name: 'EURO FINANCE LTD'
	  }, {
	    code: 'BPBI',
	    name: 'EUROBANK BULGARIA AD'
	  }, {
	    code: 'FAJS',
	    name: 'FACTORI JSCO'
	  }, {
	    code: 'EEER',
	    name: 'FH EVER INC.'
	  }, {
	    code: 'FIRY',
	    name: 'FINA S AD INVESTMENT INTERMEDIARY'
	  }, {
	    code: 'FIEJ',
	    name: 'FINANCE ENGINEERING JSC'
	  }, {
	    code: 'FFBH',
	    name: 'FIRST FINANCIAL BROKERAGE HOUSE LTD.'
	  }, {
	    code: 'FINV',
	    name: 'FIRST INVESTMENT BANK AD',
	    default: true
	  }, {
	    code: 'FPIJ',
	    name: 'FOCAL POINT INVESTMENTS JSC'
	  }, {
	    code: 'GLMK',
	    name: 'GLOBAL MARKETS'
	  }, {
	    code: 'INGB',
	    name: 'ING BANK N.V.'
	  }, {
	    code: 'INTF',
	    name: 'INTERCARD FINANCE AD'
	  }, {
	    code: 'IABG',
	    name: 'INTERNATIONAL ASSET BANK AD'
	  }, {
	    code: 'IORT',
	    name: 'INVESTBANK PLC'
	  }, {
	    code: 'IIRC',
	    name: 'INVETSMENT INTERMEDIARY RNK CAPITAL AD'
	  }, {
	    code: 'FALS',
	    name: 'IP FAVORIT CLS'
	  }, {
	    code: 'INMK',
	    name: 'IP INTERCAPITAL MARKETS AD'
	  }, {
	    code: 'ISBK',
	    name: 'ISBANK AG'
	  }, {
	    code: 'KAOL',
	    name: 'KAROLL'
	  }, {
	    code: 'KSBR',
	    name: 'KBC SECURITIES N.V.'
	  }, {
	    code: 'CBUN',
	    name: 'MKB UNIONBANK AD'
	  }, {
	    code: 'SOMB',
	    name: 'MUNICIPAL BANK PLC'
	  }, {
	    code: 'NAIV',
	    name: 'NABA INVEST PLC'
	  }, {
	    code: 'PIRB',
	    name: 'PIRAEUS BANK'
	  }, {
	    code: 'POJS',
	    name: 'POSITIVA JSC'
	  }, {
	    code: 'PRCB',
	    name: 'PROCREDIT BANK'
	  }, {
	    code: 'RZBB',
	    name: 'RAIFFEISENBANK'
	  }, {
	    code: 'REIA',
	    name: 'REAL FINANCE AD'
	  }, {
	    code: 'TTBB',
	    name: 'SOCIETE GENERALE EXPRESSBANK'
	  }, {
	    code: 'SOIU',
	    name: 'SOFIA INTERNATIONAL SECURITIES AD'
	  }, {
	    code: 'SOFK',
	    name: 'SOMONI FINANCIAL BROKERAGE LTD.'
	  }, {
	    code: 'STVV',
	    name: 'STANDARD INVESTMENT'
	  }, {
	    code: 'STVN',
	    name: 'STATUS INVEST AD'
	  }, {
	    code: 'STSF',
	    name: 'STS FINANCE SC'
	  }, {
	    code: 'SAMJ',
	    name: 'SYNERGON ASSET MANAGEMENT JSC'
	  }, {
	    code: 'TCZB',
	    name: 'T.C. ZIRAAT BANKASI'
	  }, {
	    code: 'TBIB',
	    name: 'TBI BANK EAD'
	  }, {
	    code: 'TBIE',
	    name: 'TBI INVEST EAD'
	  }, {
	    code: 'TEXI',
	    name: 'TEXIM BANK AD'
	  }, {
	    code: 'TICE',
	    name: 'TIC SAEDINENIE PLC'
	  }, {
	    code: 'CREX',
	    name: 'TOKUDA BANK AD'
	  }, {
	    code: 'MAJS',
	    name: 'UG MARKET JSC'
	  }, {
	    code: 'UNCR',
	    name: 'UNICREDIT BULBANK AD',
	    default: true
	  }, {
	    code: 'UBBS',
	    name: 'UNITED BULGARIAN BANK',
	    default: true
	  }, {
	    code: 'ZLLB',
	    name: 'ZLATEN LEV BROKERI LTD'
	  }],
	  GI: [{
	    code: 'BJSB',
	    name: 'BANK J. SAFRA SARASIN (GIBRALTAR) LTD',
	    default: true
	  }, {
	    code: 'CRES',
	    name: 'BANK JSS (GIBRALTAR) LTD'
	  }, {
	    code: 'BARC',
	    name: 'BARCLAYS BANK PLC',
	    default: true
	  }, {
	    code: 'GIBK',
	    name: 'GIBRALTAR INTERNATIONAL BANK LIMITED',
	    default: true
	  }, {
	    code: 'JYBA',
	    name: 'JYSKE BANK (GIBRALTAR) LTD.',
	    default: true
	  }, {
	    code: 'LOYD',
	    name: 'LLOYDS BANK (GIBRALTAR) LIMITED'
	  }, {
	    code: 'LOCY',
	    name: 'LOMBARD ODIER AND CIE (GIBRALTAR) LTD'
	  }, {
	    code: 'MOYP',
	    name: 'MONEYCORP BANK'
	  }, {
	    code: 'RBOS',
	    name: 'NATWEST-GIBRALTAR'
	  }, {
	    code: 'HAMB',
	    name: 'SG KLEINWORT HAMBROS BANK (GIBRALTAR) LIMITED'
	  }, {
	    code: 'TURC',
	    name: 'TURICUM PRIVATE BANK LIMITED'
	  }],
	  IE: [{
	    code: 'ASRN',
	    name: 'A.S.T.I. Credit Union Ltd'
	  }, {
	    code: 'ABRU',
	    name: 'Abbeyfeale Credit Union Ltd'
	  }, {
	    code: 'ABRN',
	    name: 'Abbeyleix Credit Union Ltd'
	  }, {
	    code: 'CSRU',
	    name: 'Affinity Credit Union Ltd'
	  }, {
	    code: 'AIBK',
	    name: 'AIB Bank',
	    default: true
	  }, {
	    code: 'PSTS',
	    name: 'An Post'
	  }, {
	    code: 'EMCN',
	    name: 'An Post Employees\' Credit Union Ltd'
	  }, {
	    code: 'ARCU',
	    name: 'Ardee Credit Union Ltd'
	  }, {
	    code: 'ATCU',
	    name: 'Athboy Credit Union Ltd'
	  }, {
	    code: 'ATRU',
	    name: 'Athenry Credit Union Ltd'
	  }, {
	    code: 'ATRO',
	    name: 'Athlone Credit Union Ltd'
	  }, {
	    code: 'AYCU',
	    name: 'Ayrfield Credit Union Ltd'
	  }, {
	    code: 'CRUN',
	    name: 'B & S Credit Union Ltd (Ballybofey)'
	  }, {
	    code: 'BGCU',
	    name: 'Bagnelstown Credit Union Ltd'
	  }, {
	    code: 'BDCU',
	    name: 'Ballaghaderreen & District Credit Union Ltd'
	  }, {
	    code: 'BLCI',
	    name: 'Ballina Credit Union Ltd'
	  }, {
	    code: 'BCUO',
	    name: 'Ballinasloe Credit Union Ltd'
	  }, {
	    code: 'BLRN',
	    name: 'Ballincollig Credit Union Ltd'
	  }, {
	    code: 'BLTU',
	    name: 'Ballyfermot Credit Union Ltd'
	  }, {
	    code: 'BLTN',
	    name: 'Ballygall Credit Union Ltd'
	  }, {
	    code: 'BLDI',
	    name: 'Ballyshannon Credit Union Ltd'
	  }, {
	    code: 'BLDO',
	    name: 'Baltinglass Credit Union Ltd'
	  }, {
	    code: 'BOFA',
	    name: 'Bank of America Merrill Lynch International Limited'
	  }, {
	    code: 'BOFI',
	    name: 'Bank of Ireland',
	    default: true
	  }, {
	    code: 'BOSI',
	    name: 'Bank of Scotland PLC'
	  }, {
	    code: 'BNRU',
	    name: 'Bantry Credit Union Ltd'
	  }, {
	    code: 'BARC',
	    name: 'Barclays Bank Ireland plc'
	  }, {
	    code: 'BIRN',
	    name: 'Birr Credit Union Ltd'
	  }, {
	    code: 'BIRI',
	    name: 'Bishopstown Credit Union Ltd'
	  }, {
	    code: 'BLIO',
	    name: 'Blackpool Credit Union Ltd'
	  }, {
	    code: 'BDRN',
	    name: 'Blanchardstown and District Credit Union Limited'
	  }, {
	    code: 'BLII',
	    name: 'Blarney Credit Union Ltd'
	  }, {
	    code: 'BDRI',
	    name: 'Blessington & District Credit Union Ltd'
	  }, {
	    code: 'BNPA',
	    name: 'BNP Paribas'
	  }, {
	    code: 'BORN',
	    name: 'Boyle Credit Union Ltd'
	  }, {
	    code: 'BRRU',
	    name: 'Bray Credit Union Limited'
	  }, {
	    code: 'BURU',
	    name: 'Buncrana Credit Union Ltd'
	  }, {
	    code: 'CBRN',
	    name: 'Cabra Credit Union Ltd'
	  }, {
	    code: 'CDEI',
	    name: 'Caherdavin & District Credit Union Ltd.'
	  }, {
	    code: 'CHCU',
	    name: 'Cahir Credit Union Ltd'
	  }, {
	    code: 'CNRN',
	    name: 'Cana Credit Union Ltd'
	  }, {
	    code: 'CDEU',
	    name: 'Carlow Credit Union Ltd'
	  }, {
	    code: 'CIEN',
	    name: 'Carrickmacross Credit Union Ltd'
	  }, {
	    code: 'CSDU',
	    name: 'Cashel-Connemara Credit Union Ltd'
	  }, {
	    code: 'CSRI',
	    name: 'Castleblayney Credit Union Ltd'
	  }, {
	    code: 'CSEN',
	    name: 'Castlecomer Credit Union Ltd'
	  }, {
	    code: 'CSEO',
	    name: 'Castlepollard Credit Union Ltd'
	  }, {
	    code: 'CDCE',
	    name: 'Castlerea & District Credit Union Ltd'
	  }, {
	    code: 'IRCE',
	    name: 'Central Bank of Ireland'
	  }, {
	    code: 'CITI',
	    name: 'Citibank Europe plc'
	  }, {
	    code: 'CSDO',
	    name: 'Civil Service Credit Union Ltd'
	  }, {
	    code: 'CLIO',
	    name: 'Clanmaurice Credit Union Ltd'
	  }, {
	    code: 'CLRI',
	    name: 'Clondalkin Credit Union Limited'
	  }, {
	    code: 'CLRO',
	    name: 'Clones Credit Union Ltd'
	  }, {
	    code: 'CLEU',
	    name: 'Clonmel Credit Union Ltd'
	  }, {
	    code: 'CBRU',
	    name: 'Cobh Credit Union Ltd'
	  }, {
	    code: 'CSCI',
	    name: 'Cois Sionna Credit Union'
	  }, {
	    code: 'CCHD',
	    name: 'Comhar Chreidmheasa Chorca Dhuibhne Teoranta (CCCDT)'
	  }, {
	    code: 'CCHC',
	    name: 'Comhar Creidmheasa Cholm Cille Teoranta'
	  }, {
	    code: 'CCGD',
	    name: 'Comhar Creidmheasa Ghaoth Dobhair Teoranta'
	  }, {
	    code: 'CLIR',
	    name: 'Comhar Linn INTO Credit Union Ltd'
	  }, {
	    code: 'PRCU',
	    name: 'Community Credit Union Ltd'
	  }, {
	    code: 'CLDI',
	    name: 'Coolock Artane Credit Union Ltd'
	  }, {
	    code: 'CTCN',
	    name: 'Cootehill Credit Unions Ltd'
	  }, {
	    code: 'SBDC',
	    name: 'Core Credit Union Ltd(formerly Shankill, Ballybrack & District CU)'
	  }, {
	    code: 'MNCU',
	    name: 'Credit Union Plus Ltd (formerly St. Mary\'s Navan Credit Union Ltd) '
	  }, {
	    code: 'CSDN',
	    name: 'Crosshaven-Carrigaline Credit Ltd'
	  }, {
	    code: 'CUCU',
	    name: 'Cuchullain Credit Union Ltd'
	  }, {
	    code: 'DABA',
	    name: 'Danske Bank A/S T/A Danske Bank'
	  }, {
	    code: 'DEEU',
	    name: 'Derg Credit Unon'
	  }, {
	    code: 'DERN',
	    name: 'Desmond Credit Union Ltd'
	  }, {
	    code: 'DTCU',
	    name: 'Donegal (Town) Credit Union Ltd'
	  }, {
	    code: 'DCRU',
	    name: 'Douglas Credit Union Ltd'
	  }, {
	    code: 'DRCU',
	    name: 'Drogheda Credit Union Ltd'
	  }, {
	    code: 'DRCI',
	    name: 'Drumshanbo Credit Union Ltd'
	  }, {
	    code: 'DUCU',
	    name: 'Dubco Credit Union Ltd'
	  }, {
	    code: 'DUCI',
	    name: 'Dundalk Credit Union Ltd'
	  }, {
	    code: 'DURU',
	    name: 'Dundrum Credit Union Ltd'
	  }, {
	    code: 'DURN',
	    name: 'Dungarvan Credit Union Ltd'
	  }, {
	    code: 'EBSI',
	    name: 'EBS Limited'
	  }, {
	    code: 'CDDC',
	    name: 'Edenderry  Credit Union (formally Coill Dubh and District Credit Union Ltd'
	  }, {
	    code: 'EDCN',
	    name: 'Edenderry Credit Union Ltd'
	  }, {
	    code: 'USBK',
	    name: 'Elavon Financial Services Ltd.'
	  }, {
	    code: 'EDCI',
	    name: 'Emyvale & District Credit Union Ltd'
	  }, {
	    code: 'ENCU',
	    name: 'Enfield Credit Union Ltd'
	  }, {
	    code: 'ENCN',
	    name: 'Enniscorthy Credit Union Ltd'
	  }, {
	    code: 'ECCU',
	    name: 'E-Services and Communications Credit Union Ltd'
	  }, {
	    code: 'FDCU',
	    name: 'Ferbane & District Credit Union Ltd'
	  }, {
	    code: 'FECN',
	    name: 'Fermoy Credit Union Ltd'
	  }, {
	    code: 'FIRU',
	    name: 'Finglas Credit Union Ltd'
	  }, {
	    code: 'FITU',
	    name: 'Firhouse Credit Union Ltd'
	  }, {
	    code: 'CSRN',
	    name: 'First Choice Credit Union (formerly Castlebar Credit Union Ltd)'
	  }, {
	    code: 'BCDU',
	    name: 'First South Credit Union Ltd (formerlyBallyphehane Credit Union Ltd)'
	  }, {
	    code: 'GDCN',
	    name: 'Glanmire & District Credit Union Ltd'
	  }, {
	    code: 'GOCN',
	    name: 'Goresbridge Credit Union Limited'
	  }, {
	    code: 'GOCI',
	    name: 'Gorey Credit Union Ltd'
	  }, {
	    code: 'GORU',
	    name: 'Gort Credit Union Ltd'
	  }, {
	    code: 'GRRU',
	    name: 'Granard Credit Union Ltd'
	  }, {
	    code: 'GDCU',
	    name: 'Greenhills & District Credit Union Ltd'
	  }, {
	    code: 'GUCU',
	    name: 'Gurranabraher Credit Union Ltd'
	  }, {
	    code: 'HSCN',
	    name: 'Halston Street Credit Union Ltd'
	  }, {
	    code: 'HSSR',
	    name: 'Health Services Staffs Credit Union Ltd'
	  }, {
	    code: 'HSBC',
	    name: 'HSBC Bank plc'
	  }, {
	    code: 'INGB',
	    name: 'ING Bank'
	  }, {
	    code: 'BCIT',
	    name: 'Intesa Sanpaolo Bank Ireland PLC'
	  }, {
	    code: 'CHAS',
	    name: 'J.P. Morgan Bank (Ireland) PLC'
	  }, {
	    code: 'KCRU',
	    name: 'Kanturk Credit Union Ltd'
	  }, {
	    code: 'ICON',
	    name: 'KBC Bank Ireland PLC'
	  }, {
	    code: 'KPDC',
	    name: 'Kilcloon Parish & District Credit Union Ltd'
	  }, {
	    code: 'KIRI',
	    name: 'Kildare Credit Union Ltd.'
	  }, {
	    code: 'KIRO',
	    name: 'Killarney Credit Union Ltd'
	  }, {
	    code: 'KIEU',
	    name: 'Kilmallock Credit Union Ltd'
	  }, {
	    code: 'KICI',
	    name: 'Kilnamanagh Credit Union Ltd'
	  }, {
	    code: 'KIEN',
	    name: 'Kilrush Credit Union Ltd'
	  }, {
	    code: 'KDCU',
	    name: 'Kiltimagh & District Credit Union Ltd'
	  }, {
	    code: 'KIEI',
	    name: 'Kingscourt Credit Union Ltd'
	  }, {
	    code: 'LDCU',
	    name: 'Larkhill & District Credit Union Ltd'
	  }, {
	    code: 'LECI',
	    name: 'Leighlin Credit Union Ltd'
	  }, {
	    code: 'LDCN',
	    name: 'Leixlip  & District Credit Union Ltd'
	  }, {
	    code: 'LECO',
	    name: 'Letterkenny Credit Union Ltd'
	  }, {
	    code: 'LICU',
	    name: 'Lifford Credit Union Ltd'
	  }, {
	    code: 'BIRU',
	    name: 'Link Credit Union (formerly Bailieborough Credit Union Ltd)'
	  }, {
	    code: 'LDCO',
	    name: 'Lisduggan Credit Union Ltd'
	  }, {
	    code: 'LICI',
	    name: 'Listowel Credit Union Ltd'
	  }, {
	    code: 'LORN',
	    name: 'Longford Credit Union Ltd'
	  }, {
	    code: 'LDCI',
	    name: 'Lucan District Credit Union Ltd'
	  }, {
	    code: 'MADO',
	    name: 'Macroom Credit Union Ltd'
	  }, {
	    code: 'MDCI',
	    name: 'Malahide & District Credit Union Ltd'
	  }, {
	    code: 'MATN',
	    name: 'Mallow Credit Union Ltd'
	  }, {
	    code: 'MDCO',
	    name: 'Manorhamilton & District Credit Union Ltd'
	  }, {
	    code: 'SDCN',
	    name: 'Member First Credit Union (formerly Swords & District Credit Union Ltd)'
	  }, {
	    code: 'MIRN',
	    name: 'Midleton Credit Union Ltd'
	  }, {
	    code: 'MIEU',
	    name: 'Mitchelstown Credit Union Ltd'
	  }, {
	    code: 'MODI',
	    name: 'Monaghan Credit Union Ltd'
	  }, {
	    code: 'MOEO',
	    name: 'Mountmellick Credit Union Ltd'
	  }, {
	    code: 'MURN',
	    name: 'Mulcair Credit Union Ltd'
	  }, {
	    code: 'MURU',
	    name: 'Mullingar Credit Union Ltd'
	  }, {
	    code: 'MSCN',
	    name: 'Munitir Skibereen Credit Union Ltd'
	  }, {
	    code: 'NACU',
	    name: 'Naas Credit Union Ltd'
	  }, {
	    code: 'NBCU',
	    name: 'Naomh Breandain Credit Union Ltd'
	  }, {
	    code: 'NUKI',
	    name: 'Nationwide UK Ireland'
	  }, {
	    code: 'NRCU',
	    name: 'New Ross Credit Union Ltd'
	  }, {
	    code: 'NLAC',
	    name: 'North Longford & Arva Credit Union Ltd'
	  }, {
	    code: 'OLCU',
	    name: 'Oldcastle Credit Union Ltd'
	  }, {
	    code: 'ATEU',
	    name: 'People First Credit Union Ltd  (formally Athy Credit Union Ltd )'
	  }, {
	    code: 'IPBS',
	    name: 'Permanent TSB',
	    default: true
	  }, {
	    code: 'PDCU',
	    name: 'Phibsboro & District Credit Union Ltd'
	  }, {
	    code: 'POCU',
	    name: 'Portarlington Credit Union Ltd'
	  }, {
	    code: 'POCO',
	    name: 'Portlaoise Credit Union Ltd'
	  }, {
	    code: 'BLCU',
	    name: 'Progressive Credit Union Ltd (formerly Balbriggan Credit Union Ltd)'
	  }, {
	    code: 'BPEU',
	    name: 'Progressive Credit Union Ltd (formerly Baldoyle & Portmarnock Credit Union Ltd)'
	  }, {
	    code: 'RTCU',
	    name: 'R.T.E. Credit Union Ltd'
	  }, {
	    code: 'RABI',
	    name: 'Rabobank International'
	  }, {
	    code: 'RDCI',
	    name: 'Ranelagh Credit Union Ltd'
	  }, {
	    code: 'RDCU',
	    name: 'Rathfarnham and District Credit Union Ltd'
	  }, {
	    code: 'RDCL',
	    name: 'Rathkeale & District Credit Union Ltd'
	  }, {
	    code: 'RDRN',
	    name: 'Rathmore and District Credit Union Ltd'
	  }, {
	    code: 'CPAY',
	    name: 'Realex Financial Services'
	  }, {
	    code: 'RORU',
	    name: 'Roscommon Credit Union Ltd'
	  }, {
	    code: 'RORN',
	    name: 'Roscrea Credit Union Ltd'
	  }, {
	    code: 'SADN',
	    name: 'Sarsfield Credit Union Limited'
	  }, {
	    code: 'SHCU',
	    name: 'Sheephavan Credit Union Ltd'
	  }, {
	    code: 'SHRI',
	    name: 'Shercock credit Union Ltd.'
	  }, {
	    code: 'SLCN',
	    name: 'Slane Credit Union Ltd'
	  }, {
	    code: 'SLRU',
	    name: 'Sligo Credit Union Ltd'
	  }, {
	    code: 'AGCU',
	    name: 'St Agnes Credit Union Ltd'
	  }, {
	    code: 'AICU',
	    name: 'St Ailbes Credit Union Ltd'
	  }, {
	    code: 'BLRI',
	    name: 'St Colmans(Claremorris) Credit Union (formerly Ballinrobe Credit Union Ltd)'
	  }, {
	    code: 'CLDO',
	    name: 'St Columba\'s Credit Union Ltd'
	  }, {
	    code: 'MPCU',
	    name: 'St Mary\'s Parish Credit Union Ltd'
	  }, {
	    code: 'ACRU',
	    name: 'St. Anthony\'s and Claddagh Credit Union Ltd'
	  }, {
	    code: 'BREI',
	    name: 'St. Brigids Credit Union Ltd'
	  }, {
	    code: 'CKCN',
	    name: 'St. Canice\'s Kilkenny Credit Union Ltd'
	  }, {
	    code: 'CCRN',
	    name: 'St. Colman\'s(Claremorris) Credit Union Ltd'
	  }, {
	    code: 'CKCU',
	    name: 'St. Colmcille\'s Kells Credit Union Ltd'
	  }, {
	    code: 'DACN',
	    name: 'St. Declan\'s Ashbourne Credit Union Ltd'
	  }, {
	    code: 'DORO',
	    name: 'St. Dominic (Waterford) Credit Union Ltd'
	  }, {
	    code: 'FRCU',
	    name: 'St. Francis Credit Union Ltd'
	  }, {
	    code: 'JACI',
	    name: 'St. Jarlath\'s Credit Union Ltd'
	  }, {
	    code: 'JACN',
	    name: 'St. Joseph\'s Irish Airports & Aviation Credit Union Ltd'
	  }, {
	    code: 'MICI',
	    name: 'St. Michael\'s Credit Union Limited'
	  }, {
	    code: 'PCUE',
	    name: 'St. Patrick\'s Credit Union Ltd(ESB Staff)'
	  }, {
	    code: 'PGCU',
	    name: 'St. Paul\'s Garda Credit Union Ltd'
	  }, {
	    code: 'SRGC',
	    name: 'St. Raphael\'s Garda Credit Union Ltd'
	  }, {
	    code: 'STEI',
	    name: 'Stillorgan Credit Union Ltd'
	  }, {
	    code: 'SUCU',
	    name: 'Sundrive Credit Union Ltd'
	  }, {
	    code: 'SWCU',
	    name: 'Swilly-Mulroy Credit Union Ltd'
	  }, {
	    code: 'TDCO',
	    name: 'Tallaght & District Credit Union Ltd'
	  }, {
	    code: 'TWCU',
	    name: 'Tallaght West Credit Union Ltd'
	  }, {
	    code: 'TUIR',
	    name: 'Teachers Union Ltd of Ireland'
	  }, {
	    code: 'TERI',
	    name: 'Templemore Credit Union Ltd'
	  }, {
	    code: 'LOCI',
	    name: 'The Lough Credit Union Ltd'
	  }, {
	    code: 'ROCU',
	    name: 'The Rosses Credit Union Ltd'
	  }, {
	    code: 'ABNA',
	    name: 'The Royal Bank of Scotland'
	  }, {
	    code: 'THCN',
	    name: 'Thomastown Credit Union Ltd'
	  }, {
	    code: 'THCU',
	    name: 'Thurles Credit Union Ltd'
	  }, {
	    code: 'TICU',
	    name: 'Tipperary Credit Union Ltd'
	  }, {
	    code: 'TRRI',
	    name: 'Tralee Credit Union Ltd'
	  }, {
	    code: 'TDCN',
	    name: 'Tubbercurry & District Credit Union Ltd'
	  }, {
	    code: 'TURU',
	    name: 'Tullamore Credit Union Ltd'
	  }, {
	    code: 'TUCN',
	    name: 'Tullow Credit Union Ltd'
	  }, {
	    code: 'ULSB',
	    name: 'Ulster Bank',
	    default: true
	  }, {
	    code: 'WACI',
	    name: 'Waterford Credit Union Ltd'
	  }, {
	    code: 'WECI',
	    name: 'Wesport Credit Union Ltd'
	  }, {
	    code: 'WECU',
	    name: 'Wexford Credit Union Ltd'
	  }, {
	    code: 'YOCU',
	    name: 'Youghal Credit Union Ltd'
	  }],
	  LV: [{
	    code: 'ABCR',
	    name: 'AB.LV CAPITAL MARKETS'
	  }, {
	    code: 'AIZK',
	    name: 'ABLV BANK, AS',
	    default: true
	  }, {
	    code: 'BLOI',
	    name: 'BALTICPAY CORPORATION SIA'
	  }, {
	    code: 'BLPB',
	    name: 'AS BALTIJAS PRIVATBANKA'
	  }, {
	    code: 'DNOV',
	    name: 'DNOVO LTD'
	  }, {
	    code: 'DUPY',
	    name: 'DUKASCOPY PAYMENTS'
	  }, {
	    code: 'EVSE',
	    name: 'EVLI BANK LTD'
	  }, {
	    code: 'FRDL',
	    name: 'SIA WORLDLINE LATVIA'
	  }, {
	    code: 'FSCE',
	    name: 'FSC EU SIA'
	  }, {
	    code: 'FSEC',
	    name: 'FINCROSS SECURITIES AS'
	  }, {
	    code: 'GOSB',
	    name: 'GLOBAL OVERSEAS BANK A.D.'
	  }, {
	    code: 'HAND',
	    name: 'SVENSKA HANDELSBANKEN AB LATVIAN BRANCH'
	  }, {
	    code: 'IRCA',
	    name: 'AS IBS RENESOURCE CAPITAL'
	  }, {
	    code: 'JSSI',
	    name: 'DUKASCOPY EUROPE IBS AS'
	  }, {
	    code: 'LACB',
	    name: 'BANK OF LATVIA'
	  }, {
	    code: 'LAPB',
	    name: 'AS LPB BANK'
	  }, {
	    code: 'LATB',
	    name: 'NORVIK BANKA, JSC'
	  }, {
	    code: 'LATC',
	    name: 'AS EXPOBANK (FORMERLY AS LTB BANK)'
	  }, {
	    code: 'LFIK',
	    name: 'LATGALES FINANSU UN INVESTICIJU KOMPANIJA AS'
	  }, {
	    code: 'LIBC',
	    name: 'LLC INVESTMENT BROKERAGE COMPANY \'MAXIMUS CAPITAL MARKETS\''
	  }, {
	    code: 'LKJF',
	    name: 'LTFJA KKS JURNIEKU FORUMS'
	  }, {
	    code: 'LPNS',
	    name: 'JSC LATVIAN POST'
	  }, {
	    code: 'MARA',
	    name: 'DANSKE BANK A S,LATVIJA BRANCH'
	  }, {
	    code: 'MOXS',
	    name: 'MONEY EXPRESS SIA'
	  }, {
	    code: 'NDEA',
	    name: 'LUMINOR BANK AS LATVIA (FORMER NORDEA BANK AB LATVIA)'
	  }, {
	    code: 'OKBA',
	    name: 'OGRES KOMERCBANKA'
	  }, {
	    code: 'OKOY',
	    name: 'OP CORPORATE BANK PLC LATVIA BRANCH'
	  }, {
	    code: 'PAEX',
	    name: 'SC PAREX BANKA'
	  }, {
	    code: 'PAYE',
	    name: 'PAYSERA LT'
	  }, {
	    code: 'QWES',
	    name: 'QIWI WALLET EUROPE SIA FLOOR 1'
	  }, {
	    code: 'RIBR',
	    name: 'REGIONALA INVESTICIJU BANKA'
	  }, {
	    code: 'RTMB',
	    name: 'RIETUMU BANKA',
	    default: true
	  }, {
	    code: 'SECT',
	    name: 'SAMSUNG ELECTRONICS BALTICS'
	  }, {
	    code: 'SEFM',
	    name: 'SIA \'SEMFOPAY\''
	  }, {
	    code: 'SIDI',
	    name: 'SIA DIXIPAY'
	  }, {
	    code: 'SPRA',
	    name: 'SUPREMA AS'
	  }, {
	    code: 'TAPS',
	    name: 'A S SAULES INVESTICIJAS'
	  }, {
	    code: 'TPRO',
	    name: 'SIA TRANSACT PRO'
	  }, {
	    code: 'TREL',
	    name: 'TREASURY OF THE REPUBLIC OF LATVIA, THE'
	  }, {
	    code: 'UNLA',
	    name: 'SEB BANKA',
	    default: true
	  }, {
	    code: 'XRIS',
	    name: 'RIGA STOCK EXCHANGE'
	  }, {
	    code: 'BIGK',
	    name: 'BIGBANK AS LATVIA BRANCH'
	  }, {
	    code: 'HABA',
	    name: 'SWEDBANK AS',
	    default: true
	  }, {
	    code: 'MULT',
	    name: 'AS MERIDIAN TRADE BANK'
	  }, {
	    code: 'PARX',
	    name: 'JSC CITADELE BANKA'
	  }, {
	    code: 'RIKO',
	    name: 'LUMINOR BANK AS, LATVIA (FORMER AS DNB BANKA)'
	  }, {
	    code: 'BLIB',
	    name: 'BALTIC INTERNATIONAL BANK'
	  }, {
	    code: 'CBBR',
	    name: 'AS BLUEORANGE BANK'
	  }, {
	    code: 'KKSD',
	    name: 'KOOPERATIVA KRAJAIZDEVU SABIEDRIBA \'DZELZCELNIEKS KS\''
	  }, {
	    code: 'LCDE',
	    name: 'NASDAQ CSD SE'
	  }, {
	    code: 'LLBB',
	    name: 'SIGNET BANK AS'
	  }, {
	    code: 'PRTT',
	    name: 'AS \'PRIVATBANK\''
	  }, {
	    code: 'RGNS',
	    name: 'RIGENSIS BANK AS'
	  }, {
	    code: 'SIAF',
	    name: 'SIA ABA FINANCE'
	  }, {
	    code: 'ALFP',
	    name: 'ALFAPAY'
	  }, {
	    code: 'DEAF',
	    name: 'DEALFIN'
	  }, {
	    code: 'DILF',
	    name: 'DILFIN'
	  }, {
	    code: 'EPAS',
	    name: 'EASTERN EUROPEAN PAYMENT SYSTEM SIA'
	  }, {
	    code: 'LATS',
	    name: 'E LATS, SIA'
	  }, {
	    code: 'NIXG',
	    name: 'NIXGROUP'
	  }, {
	    code: 'OPAY',
	    name: 'XOPAY, SIA'
	  }, {
	    code: 'SIAI',
	    name: 'STEITS, SIA'
	  }, {
	    code: 'WOSI',
	    name: 'WOT, SIA'
	  }, {
	    code: 'TRSF',
	    name: 'TRANSFERTA'
	  }],
	  MT: [{
	    code: 'AGRK',
	    name: 'AGRIBANK PLC'
	  }, {
	    code: 'AKBK',
	    name: 'AKBANK T.A.S.'
	  }, {
	    code: 'APSB',
	    name: 'APS BANK LTD.'
	  }, {
	    code: 'VALL',
	    name: 'BANK OF VALLETTA P.L.C.',
	    default: true
	  }, {
	    code: 'BNIF',
	    name: 'BNF BANK PLC (FORMERLY BANIF BANK MALTA)'
	  }, {
	    code: 'CCUH',
	    name: 'CALAMATTA CUSCHIERI INVESTMENT SERVICES LIMITED'
	  }, {
	    code: 'MALT',
	    name: 'CENTRAL BANK OF MALTA'
	  }, {
	    code: 'CITC',
	    name: 'CITCO CUSTODY LIMITED'
	  }, {
	    code: 'FBHL',
	    name: 'CREDIT EUROPE BANK N.V.'
	  }, {
	    code: 'CRXB',
	    name: 'CREDORAX BANK LIMITED'
	  }, {
	    code: 'ECMB',
	    name: 'ECCM BANK PLC'
	  }, {
	    code: 'EFTG',
	    name: 'EFT GLOBAL LIMITED'
	  }, {
	    code: 'EMON',
	    name: 'EMONEY PLC'
	  }, {
	    code: 'FCMF',
	    name: 'FCM BANK LIMITED'
	  }, {
	    code: 'FEMA',
	    name: 'FERRATUM BANK LIMITED'
	  }, {
	    code: 'FIMB',
	    name: 'FIMBANK PLC',
	    default: true
	  }, {
	    code: 'TGBA',
	    name: 'GARANTI BANK'
	  }, {
	    code: 'MMEB',
	    name: 'HSBC BANK MALTA P.L.C.',
	    default: true
	  }, {
	    code: 'IIGB',
	    name: 'IIG BANK'
	  }, {
	    code: 'IZOL',
	    name: 'IZOLA BANK LIMITED'
	  }, {
	    code: 'KBCE',
	    name: 'KBC EURO CREDIT LIMITED'
	  }, {
	    code: 'LBMA',
	    name: 'LOMBARD BANK MALTA PLC'
	  }, {
	    code: 'XMAL',
	    name: 'MALTA STOCK EXCHANGE'
	  }, {
	    code: 'MBWM',
	    name: 'MEDIRECT BANK (MALTA) PLC',
	    default: true
	  }, {
	    code: 'MFCB',
	    name: 'MFC MERCHANT BANK LIMITED'
	  }, {
	    code: 'MTCC',
	    name: 'MTACC LIMITED'
	  }, {
	    code: 'FNNB',
	    name: 'NBG BANK MALTA LIMITED'
	  }, {
	    code: 'VOCB',
	    name: 'NOVUM BANK LTD'
	  }, {
	    code: 'PYMX',
	    name: 'PAYMIX LIMITED'
	  }, {
	    code: 'PLTS',
	    name: 'PILATUS BANK PLC'
	  }, {
	    code: 'STBA',
	    name: 'SATABANK P.L.C.'
	  }, {
	    code: 'SBMT',
	    name: 'SPARKASSE BANK MALTA PLC'
	  }, {
	    code: 'COPX',
	    name: 'W AND J COPPINI AND CO'
	  }, {
	    code: 'WCOR',
	    name: 'WEBCOR INVESTMENTS LTD'
	  }, {
	    code: 'TGBP',
	    name: 'WESTERN UNION BUSINESS SOLUTIONS (MALTA) LTD'
	  }, {
	    code: 'YAPI',
	    name: 'YAPI KREDI BANK MALTA LTD.'
	  }],
	  RO: [{
	    code: 'AASO',
	    name: 'RBS SECURITIES (ROMANIA) S.A.'
	  }, {
	    code: 'ACIR',
	    name: 'ACTIVE INTERNATIONAL SA'
	  }, {
	    code: 'ACTN',
	    name: 'ACTINVEST SA'
	  }, {
	    code: 'ALNR',
	    name: 'ALPHA FINANCE ROMANIA SA'
	  }, {
	    code: 'AUSM',
	    name: 'AUSTRO-ROM S.A.'
	  }, {
	    code: 'BCER',
	    name: 'B.C.R. SECURITIES S.A.'
	  }, {
	    code: 'BCRL',
	    name: 'BCR BANCA PENTRU LOCUINTE S.A.'
	  }, {
	    code: 'BFER',
	    name: 'BANCA COMERCIALA FEROVIARA S.A.'
	  }, {
	    code: 'BGLT',
	    name: 'BFOREX GLOBAL TRADING S.A.'
	  }, {
	    code: 'BITR',
	    name: 'INTESA SANPAOLO S.P.A.'
	  }, {
	    code: 'BLOM',
	    name: 'BLOM BANK FRANCE S.A.'
	  }, {
	    code: 'BPOS',
	    name: 'BANC POST S.A.'
	  }, {
	    code: 'BRDE',
	    name: 'BRD - GROUPE SOCIETE GENERALE SA',
	    default: true
	  }, {
	    code: 'BREL',
	    name: 'LIBRA BANK S.A.'
	  }, {
	    code: 'BRMA',
	    name: 'BANCA ROMANEASCA S.A.'
	  }, {
	    code: 'BSEA',
	    name: 'CREDIT AGRICOLE BANK ROMANIA S.A.'
	  }, {
	    code: 'BSGS',
	    name: 'BRD SECURITIES-GROUPE SOCIETE GENERALE S.A.'
	  }, {
	    code: 'BTRL',
	    name: 'BANCA TRANSILVANIA S.A.',
	    default: true
	  }, {
	    code: 'BUGI',
	    name: 'BUCURESTI GLOBAL INVEST S.A.'
	  }, {
	    code: 'CARP',
	    name: 'PATRIA BANK S.A.'
	  }, {
	    code: 'CATL',
	    name: 'CAPITOL S.A.'
	  }, {
	    code: 'CAUE',
	    name: 'UNICREDIT CA-IB SECURITIES SA'
	  }, {
	    code: 'CCBU',
	    name: 'CASA DE COMPENSARE BUCURESTI S.A.'
	  }, {
	    code: 'CECE',
	    name: 'CEC BANK-S.A.'
	  }, {
	    code: 'CEEN',
	    name: 'CENTRAL EUROPEAN INVESTMENTS S.A.'
	  }, {
	    code: 'CITI',
	    name: 'CITIBANK EUROPE PLC'
	  }, {
	    code: 'CIYI',
	    name: 'CITY INVEST S.A.'
	  }, {
	    code: 'COIH',
	    name: 'CONFIDENT INVEST BUCHAREST S.A.'
	  }, {
	    code: 'CPFS',
	    name: 'CAPITAL FINANCIAL SERVICES SA'
	  }, {
	    code: 'CPMA',
	    name: 'KD CAPITAL MANAGEMENT S.A.'
	  }, {
	    code: 'CRCO',
	    name: 'BANCA CENTRALA COOPERATISTA CREDITCOOP'
	  }, {
	    code: 'CRNV',
	    name: 'CARPATICA INVEST SA'
	  }, {
	    code: 'CSRC',
	    name: 'CASA ROMANA DE COMPENSATIE S.A.'
	  }, {
	    code: 'DAFB',
	    name: 'BANK LEUMI ROMANIA S.A.'
	  }, {
	    code: 'DECN',
	    name: 'DEPOZITARUL CENTRAL S.A.'
	  }, {
	    code: 'DESX',
	    name: 'S.C. DEPOZITARUL SIBEX S.A.'
	  }, {
	    code: 'DORN',
	    name: 'DORINVEST S.A.'
	  }, {
	    code: 'DVMD',
	    name: 'DELTA VALORI MOBILIARE (D.V.M.) S.A'
	  }, {
	    code: 'EFES',
	    name: 'EUROBANK SECURITIES S.A.'
	  }, {
	    code: 'EGNA',
	    name: 'MARFIN BANK (ROMANIA) S.A.'
	  }, {
	    code: 'EGNT',
	    name: 'EGNATIA SECURITIES S.A.'
	  }, {
	    code: 'ELDA',
	    name: 'ELDAINVEST S.A.'
	  }, {
	    code: 'EQIV',
	    name: 'EQUITY INVEST S.A.'
	  }, {
	    code: 'ESCP',
	    name: 'ESTEURO CAPITAL S.A.'
	  }, {
	    code: 'ESTI',
	    name: 'ESTINVEST S.A.'
	  }, {
	    code: 'ETRM',
	    name: 'ETR ROMANIA'
	  }, {
	    code: 'ETRO',
	    name: 'ETEBA ROMANIA S.A.'
	  }, {
	    code: 'EURV',
	    name: 'EUROSAVAM S.A.'
	  }, {
	    code: 'FIEF',
	    name: 'S.S.I.F. VIENNA INVESTMENT TRUST S.A.'
	  }, {
	    code: 'FIUE',
	    name: 'FINACO SECURITIES S.A.'
	  }, {
	    code: 'FNCC',
	    name: 'ROMEXTERRA FINANCE S.A'
	  }, {
	    code: 'FNNB',
	    name: 'CREDIT EUROPE BANK (ROMANIA) S.A.'
	  }, {
	    code: 'FTSB',
	    name: 'BNP PARIBAS S.A.'
	  }, {
	    code: 'GGIF',
	    name: 'G.I.F.-GRUPUL DE INTERMEDIERE FINANCIARA S.A.'
	  }, {
	    code: 'GLVM',
	    name: 'GLOBAL VALORI MOBILIARE S.A.'
	  }, {
	    code: 'GOLI',
	    name: 'GOLDRING S.A.'
	  }, {
	    code: 'HARI',
	    name: 'HARINVEST S.A.'
	  }, {
	    code: 'HTVM',
	    name: 'HTI VALORI MOBILIARE S.A.'
	  }, {
	    code: 'IETR',
	    name: 'IEBA TRUST S.A.'
	  }, {
	    code: 'IFFN',
	    name: 'IFB FINWEST S.A.'
	  }, {
	    code: 'INAO',
	    name: 'INTERFINBROK CORPORATION S.A.'
	  }, {
	    code: 'INGB',
	    name: 'ING BANK N.V., BUCHAREST BRANCH'
	  }, {
	    code: 'INLN',
	    name: 'INTERDEALER CAPITAL INVEST S.A.'
	  }, {
	    code: 'INUT',
	    name: 'INVEST TRUST S.A.'
	  }, {
	    code: 'ITIN',
	    name: 'INTERCAPITAL INVEST S.A.'
	  }, {
	    code: 'ITTR',
	    name: 'INTERVAM S.A.'
	  }, {
	    code: 'IVTE',
	    name: 'G.M. INVEST S.A.'
	  }, {
	    code: 'IVTS',
	    name: 'HB INVEST S.A.'
	  }, {
	    code: 'KCCF',
	    name: 'KIRA CREDITO AND CAUZIONI IFN S.A.'
	  }, {
	    code: 'KSRS',
	    name: 'SWISS CAPITAL S.A.'
	  }, {
	    code: 'MIND',
	    name: 'BANCA ROMANA DE CREDITE SI INVESTITII S.A.'
	  }, {
	    code: 'MIRO',
	    name: 'PROCREDIT BANK S.A.'
	  }, {
	    code: 'MUGI',
	    name: 'MUNTENIA GLOBAL INVEST S.A.'
	  }, {
	    code: 'NBOR',
	    name: 'NATIONAL BANK OF ROMANIA'
	  }, {
	    code: 'NOIV',
	    name: 'NOVA INVEST S.A.'
	  }, {
	    code: 'OLGI',
	    name: 'OLTENIA GRUP INVEST S.A.'
	  }, {
	    code: 'PATR',
	    name: 'CAPA FINANCE IFN SA'
	  }, {
	    code: 'PORL',
	    name: 'PORSCHE BANK ROMANIA S.A.'
	  }, {
	    code: 'PRTA',
	    name: 'PRIME TRANSACTION S.A.'
	  }, {
	    code: 'RACI',
	    name: 'RAIFFEISEN CAPITAL AND INVESTMENT S.A.'
	  }, {
	    code: 'RNCB',
	    name: 'BANCA COMERCIALA ROMANA S.A',
	    default: true
	  }, {
	    code: 'ROBU',
	    name: 'ROINVEST BUCOVINA S.A.'
	  }, {
	    code: 'ROEC',
	    name: 'ROMBELL SECURITIES S.A.'
	  }, {
	    code: 'ROIN',
	    name: 'IDEA BANK SA'
	  }, {
	    code: 'ROMC',
	    name: 'ROMCAPITAL S.A.'
	  }, {
	    code: 'RONC',
	    name: 'ROMANIAN POST NATIONAL COMPANY'
	  }, {
	    code: 'RZBL',
	    name: 'RAIFFEISEN BANCA PENTRU LOCUINTE S.A.'
	  }, {
	    code: 'SABM',
	    name: 'URSUS BREWERIES S.A.'
	  }, {
	    code: 'SECT',
	    name: 'SAMSUNG ELECTRONICS ROMANIA SRL'
	  }, {
	    code: 'SECT',
	    name: 'SAMSUNG ELECTRONICS ROMANIA SRL'
	  }, {
	    code: 'SEEE',
	    name: 'BT SECURITIES S.A.'
	  }, {
	    code: 'SIFK',
	    name: 'SOCIETATE DE INVESTITII FINANCIARE BROKER S.A.'
	  }, {
	    code: 'SMRS',
	    name: 'NHL SECURITIES S.A.'
	  }, {
	    code: 'SNCD',
	    name: 'SOCIETATEA NATIONALA DE COMPENSARE S.A.'
	  }, {
	    code: 'SPSM',
	    name: 'S.S.I.F. PIRAEUS SECURITIES ROMANIA S.A.'
	  }, {
	    code: 'SRFS',
	    name: 'SPEED TRANSFER FINANCIAR SRL'
	  }, {
	    code: 'SSFI',
	    name: 'S.S.I.F. FORTIUS FINANCE S.A.'
	  }, {
	    code: 'SSMO',
	    name: 'SSIF MOBINVEST S.A.'
	  }, {
	    code: 'SSOV',
	    name: 'S.S.I.F. ORIZONT VEST S.A.'
	  }, {
	    code: 'SUGI',
	    name: 'SUPER GOLD INVEST S.A.'
	  }, {
	    code: 'TACI',
	    name: 'TARGET CAPITAL S.A.'
	  }, {
	    code: 'TBIB',
	    name: 'TBI BANK EAD'
	  }, {
	    code: 'TEEN',
	    name: 'TREND S.A.'
	  }, {
	    code: 'TGIN',
	    name: 'T.G.H. INVESTMENT S.A.'
	  }, {
	    code: 'TREZ',
	    name: 'MINISTRY OF PUBLIC FINANCE'
	  }, {
	    code: 'TRFD',
	    name: 'TRANSFOND S.A.'
	  }, {
	    code: 'TRPT',
	    name: 'BLUE ROCK FINANCIAL SERVICES'
	  }, {
	    code: 'UNCP',
	    name: 'UNICAPITAL S.A.'
	  }, {
	    code: 'UNSU',
	    name: 'FAIRWIND SECURITIES S.A.'
	  }, {
	    code: 'USIN',
	    name: 'ARCELORMITTAL TUBULAR PRODUCTS ROMAN SA'
	  }, {
	    code: 'VACT',
	    name: 'VALAHIA CAPITAL SA'
	  }, {
	    code: 'VAIT',
	    name: 'VALMOB INTERMEDIA S.A.'
	  }, {
	    code: 'VANG',
	    name: 'TRADEVILLE SA'
	  }, {
	    code: 'VEIV',
	    name: 'VENTRUST INVESTMENT S.A.'
	  }, {
	    code: 'VOLT',
	    name: 'VOLTINVEST S.A.'
	  }, {
	    code: 'WBAN',
	    name: 'INTESA SANPAOLO ROMANIA S.A.'
	  }, {
	    code: 'WBRO',
	    name: 'W.B.S. ROMANIA S.A.'
	  }, {
	    code: 'XBSE',
	    name: 'BURSA DE VALORI BUCURESTI S.A.'
	  }, {
	    code: 'XRAS',
	    name: 'RASDAQ'
	  }, {
	    code: 'ALBP',
	    name: 'ALIOR BANK SA'
	  }, {
	    code: 'BACX',
	    name: 'UNICREDIT BANK SA'
	  }, {
	    code: 'OTPV',
	    name: 'OTP BANK ROMANIA S.A.'
	  }, {
	    code: 'PIRB',
	    name: 'PIRAEUS BANK ROMANIA'
	  }, {
	    code: 'UGBI',
	    name: 'GARANTI BANK S.A.'
	  }, {
	    code: 'BUCU',
	    name: 'ALPHA BANK ROMANIA SA'
	  }, {
	    code: 'EASC',
	    name: 'EASTERN SECURITIES S.A.'
	  }, {
	    code: 'EXIM',
	    name: 'EXIMBANK OF ROMANIA'
	  }, {
	    code: 'KMGR',
	    name: 'KMG ROMPETROL'
	  }, {
	    code: 'ORMF',
	    name: 'ORANGE MONEY IFN S.A.'
	  }, {
	    code: 'RZBR',
	    name: 'RAIFFEISEN BANK S.A.',
	    default: true
	  }, {
	    code: 'SSRO',
	    name: 'S.S.I.F. ROMINTRADE S.A.'
	  }, {
	    code: 'SSRR',
	    name: 'SC SMITH AND SMITH SRL'
	  }, {
	    code: 'SSSR',
	    name: 'SSIF STK TRADING S.A.'
	  }, {
	    code: 'BURM',
	    name: 'BURSA ROMANA DE MARFURI (ROMANIAN COMMODITIES EXCHANGE) S.A.'
	  }, {
	    code: 'MODL',
	    name: 'MONDIAL S.A.'
	  }]
	};

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _bankCodesConfig = __webpack_require__(139);
	
	var _bankCodesConfig2 = _interopRequireDefault(_bankCodesConfig);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Given an iban returns that country specification
	 *
	 * @type {Function}
	 * @inner
	 * @throws {Error} If Country code is not defined
	 * @param {String} iban A valid IBAN number
	 * @return {Object} Country specification
	 */
	exports.default = function (iban) {
	  var countryCode = iban.slice(0, 2);
	  var bankCode = iban.slice(4, 8);
	
	  if (!Object.hasOwnProperty.call(_bankCodesConfig2.default, countryCode)) {
	    throw new Error('Country code ' + countryCode + ' is not supported');
	  }
	
	  if (bankCode) {
	    return _bankCodesConfig2.default[countryCode].filter(function (bank) {
	      return bank.code.startsWith(bankCode);
	    });
	  }
	
	  return _bankCodesConfig2.default[countryCode].filter(function (bank) {
	    return bank.default;
	  });
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-bb-bank-codes-ng.js.map