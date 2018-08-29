(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-iban", [], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-iban"] = factory();
	else
		root["lib-bb-iban"] = factory();
})(this, function() {
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

	module.exports = __webpack_require__(64);

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.formatByGroups = exports.isValidBBAN = exports.isValidIBAN = undefined;
	
	var _countrySpec = __webpack_require__(65);
	
	var _countrySpec2 = _interopRequireDefault(_countrySpec);
	
	var _helpers = __webpack_require__(66);
	
	var _bigIntegerMod = __webpack_require__(67);
	
	var _bigIntegerMod2 = _interopRequireDefault(_bigIntegerMod);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Validates IBAN structure defined in ISO 13616-1 and ISO/IEC 7064 (MOD97-10).
	 *
	 * @name isValidIBAN
	 * @type {function}
	 * @param {string} iban International bank account number.
	 * @returns {boolean}
	 */
	var isValidIBAN = exports.isValidIBAN = function isValidIBAN(iban) {
	  if (typeof iban !== 'string') {
	    return false;
	  }
	
	  var spec = void 0;
	  var compactIBAN = (0, _helpers.compact)(iban.toUpperCase());
	
	  try {
	    spec = (0, _countrySpec2.default)(compactIBAN);
	  } catch (error) {
	    return false;
	  }
	
	  return spec.len === compactIBAN.length && (0, _helpers.bbanRegexp)(spec.bban).test(compactIBAN.slice(4)) && (0, _bigIntegerMod2.default)((0, _helpers.convertIban)(compactIBAN), 97) === 1;
	};
	
	/**
	 * Validates BBAN structure defined in ISO 13616-1.
	 *
	 * @name isValidBBAN
	 * @type {function}
	 * @param {string} iban International bank account number.
	 * @returns {boolean}
	 */
	/**
	 * @module lib-bb-iban
	 * @description IBAN structure validation library
	 */
	
	// References:
	// https://www.swift.com/standards/data-standards/iban
	// https://en.wikipedia.org/wiki/International_Bank_Account_Number
	
	var isValidBBAN = exports.isValidBBAN = function isValidBBAN(iban) {
	  if (typeof iban !== 'string') {
	    return false;
	  }
	
	  var spec = void 0;
	  var compactIBAN = (0, _helpers.compact)(iban);
	
	  try {
	    spec = (0, _countrySpec2.default)(compactIBAN);
	  } catch (error) {
	    return false;
	  }
	
	  // Remove country code and check digits
	  var bban = compactIBAN.slice(4);
	
	  return bban.length === spec.len - 4 && (0, _helpers.bbanRegexp)(spec.bban).test(bban);
	};
	
	/**
	 * @name formatByGroups
	 * @type {function}
	 *
	 * @description
	 * Splits the string up with spaces by groups of 4.
	 * "IE47FNLL45049097007367" => "IE47 FNLL 4504 9097 0073 67"
	 *
	 * @param str {string}
	 * @param symbol {string}
	 * @param groupLen {number}
	 * @return {string}
	 */
	var formatByGroups = exports.formatByGroups = function formatByGroups(str, symbol, groupLen) {
	  return (0, _helpers.explodeString)(str, symbol, groupLen);
	};

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Collection of countries that are compliant with the ISO 13616 standard.
	 * BBAN field is the representation of the format accepted by that country.
	 *
	 * @inner
	 * @type {object}
	 */
	var countries = {
	  AD: {
	    bban: '08N12C',
	    example: 'AD1200012030200359100100',
	    len: 24,
	    name: 'Andorra'
	  },
	  AE: {
	    bban: '03N16N',
	    example: 'AE260211000000230064016',
	    len: 23,
	    name: 'United Arab Emirates'
	  },
	  AL: {
	    bban: '08N16C',
	    example: 'AL47212110090000000235698741',
	    len: 28,
	    name: 'Albania'
	  },
	  AO: {
	    bban: '21N',
	    example: 'AO06000600000100037131174',
	    len: 25,
	    name: 'Angola'
	  },
	  AT: {
	    bban: '16N',
	    example: 'AT611904300234573201',
	    len: 20,
	    name: 'Austria'
	  },
	  AZ: {
	    bban: '04C20N',
	    example: 'AZ21NABZ00000000137010001944',
	    len: 28,
	    name: 'Azerbaijan'
	  },
	  BA: {
	    bban: '16N',
	    example: 'BA391290079401028494',
	    len: 20,
	    name: 'Bosnia and Herzegovina'
	  },
	  BE: {
	    bban: '12N',
	    example: 'BE68539007547034',
	    len: 16,
	    name: 'Belgium'
	  },
	  BF: {
	    bban: '23N',
	    example: 'BF1030134020015400945000643',
	    len: 27,
	    name: 'Burkina Faso'
	  },
	  BG: {
	    bban: '04A06N08C',
	    example: 'BG80BNBG96611020345678',
	    len: 22,
	    name: 'Bulgaria'
	  },
	  BH: {
	    bban: '04A14C',
	    example: 'BH29BMAG1299123456BH00',
	    len: 22,
	    name: 'Bahrain'
	  },
	  BI: {
	    bban: '12N',
	    example: 'BI43201011067444',
	    len: 16,
	    name: 'Burundi'
	  },
	  BJ: {
	    bban: '01A23N',
	    example: 'BJ11B00610100400271101192591',
	    len: 28,
	    name: 'Benin'
	  },
	  BR: {
	    bban: '23N01A01C',
	    example: 'BR9700360305000010009795493P1',
	    len: 29,
	    name: 'Brazil'
	  },
	  BY: {
	    bban: '04C20N',
	    example: 'BY86AKBB10100000002966000000',
	    len: 28,
	    name: 'Belarus'
	  },
	  CF: {
	    bban: '23C',
	    example: 'CF4220001000010120069700160',
	    len: 27,
	    name: 'Central African Republic'
	  },
	  CG: {
	    bban: '23C',
	    example: 'CG5230011000202151234567890',
	    len: 27,
	    name: 'Congo'
	  },
	  CH: {
	    bban: '05N12C',
	    example: 'CH9300762011623852957',
	    len: 21,
	    name: 'Switzerland'
	  },
	  CI: {
	    bban: '01A23N',
	    example: 'CI05A00060174100178530011852',
	    len: 28,
	    name: 'Ivory Coast'
	  },
	  CM: {
	    bban: '23N',
	    example: 'CM2110003001000500000605306',
	    len: 27,
	    name: 'Cameroon'
	  },
	  CR: {
	    bban: '17N',
	    example: 'CR0515202001026284066',
	    len: 21,
	    name: 'Costa Rica'
	  },
	  CV: {
	    bban: '21N',
	    example: 'CV64000300004547069110176',
	    len: 25,
	    name: 'Cape Verde'
	  },
	  CY: {
	    bban: '08N16C',
	    example: 'CY17002001280000001200527600',
	    len: 28,
	    name: 'Cyprus'
	  },
	  CZ: {
	    bban: '20N',
	    example: 'CZ6508000000192000145399',
	    len: 24,
	    name: 'Czech Republic'
	  },
	  DE: {
	    bban: '18N',
	    example: 'DE89370400440532013000',
	    len: 22,
	    name: 'Germany'
	  },
	  DJ: {
	    bban: '23C',
	    example: 'DJ2110002010010409943020008',
	    len: 27,
	    name: 'Djibouti'
	  },
	  DK: {
	    bban: '14N',
	    example: 'DK5000400440116243',
	    len: 18,
	    name: 'Denmark'
	  },
	  DO: {
	    bban: '04A20N',
	    example: 'DO28BAGR00000001212453611324',
	    len: 28,
	    name: 'Dominican Republic'
	  },
	  DZ: {
	    bban: '20N',
	    example: 'DZ4000400174401001050486',
	    len: 24,
	    name: 'Algeria'
	  },
	  EE: {
	    bban: '16N',
	    example: 'EE382200221020145685',
	    len: 20,
	    name: 'Estonia'
	  },
	  EG: {
	    bban: '23C',
	    example: 'EG1100006001880800100014553',
	    len: 27,
	    name: 'Egypt'
	  },
	  ES: {
	    bban: '20N',
	    example: 'ES9121000418450200051332',
	    len: 24,
	    name: 'Spain'
	  },
	  FI: {
	    bban: '14N',
	    example: 'FI2112345600000785',
	    len: 18,
	    name: 'Finland'
	  },
	  FO: {
	    bban: '14N',
	    example: 'FO1464600009692713',
	    len: 18,
	    name: 'Faroe Islands'
	  },
	  FR: {
	    bban: '10N11C02N',
	    example: 'FR7630007000110009970004942',
	    len: 27,
	    name: 'France'
	  },
	  GA: {
	    bban: '23C',
	    example: 'GA2140002000055602673300064',
	    len: 27,
	    name: 'Gabon'
	  },
	  GB: {
	    bban: '04A14N',
	    example: 'GB29NWBK60161331926819',
	    len: 22,
	    name: 'United Kingdom'
	  },
	  GE: {
	    bban: '02C16N',
	    example: 'GE29NB0000000101904917',
	    len: 22,
	    name: 'Georgia'
	  },
	  GI: {
	    bban: '04A15C',
	    example: 'GI75NWBK000000007099453',
	    len: 23,
	    name: 'Gibraltar'
	  },
	  GL: {
	    bban: '14N',
	    example: 'GL8964710001000206',
	    len: 18,
	    name: 'Greenland'
	  },
	  GQ: {
	    bban: '23C',
	    example: 'GQ7050002001003715228190196',
	    len: 27,
	    name: 'Equatorial Guinea'
	  },
	  GR: {
	    bban: '07N16C',
	    example: 'GR1601101250000000012300695',
	    len: 27,
	    name: 'Greece'
	  },
	  GT: {
	    bban: '04C20C',
	    example: 'GT82TRAJ01020000001210029690',
	    len: 28,
	    name: 'Guatemala'
	  },
	  GW: {
	    bban: '21C',
	    example: 'GW04GW1430010181800637601',
	    len: 25,
	    name: 'Guinea-Bissau'
	  },
	  HN: {
	    bban: '24C',
	    example: 'HN54PISA00000000000000123124',
	    len: 28,
	    name: 'Honduras'
	  },
	  HR: {
	    bban: '17N',
	    example: 'HR1210010051863000160',
	    len: 21,
	    name: 'Croatia'
	  },
	  HU: {
	    bban: '24N',
	    example: 'HU42117730161111101800000000',
	    len: 28,
	    name: 'Hungary'
	  },
	  IE: {
	    bban: '04C14N',
	    example: 'IE29AIBK93115212345678',
	    len: 22,
	    name: 'Ireland'
	  },
	  IL: {
	    bban: '19N',
	    example: 'IL620108000000099999999',
	    len: 23,
	    name: 'Israel'
	  },
	  IQ: {
	    bban: '19C',
	    example: 'IQ20CBIQ861800101010500',
	    len: 23,
	    name: 'Iraq'
	  },
	  IR: {
	    bban: '22N',
	    example: 'IR580540105180021273113007',
	    len: 26,
	    name: 'Iran'
	  },
	  IS: {
	    bban: '22N',
	    example: 'IS140159260076545510730339',
	    len: 26,
	    name: 'Iceland'
	  },
	  IT: {
	    bban: '01A10N12C',
	    example: 'IT60X0542811101000000123456',
	    len: 27,
	    name: 'Italy'
	  },
	  JO: {
	    bban: '04A22N',
	    example: 'JO94CBJO0010000000000131000302',
	    len: 30,
	    name: 'Jordan'
	  },
	  KM: {
	    bban: '23C',
	    example: 'KM4600005000010010904400137',
	    len: 27,
	    name: 'Comoros'
	  },
	  KW: {
	    bban: '04A22C',
	    example: 'KW74NBOK0000000000001000372151',
	    len: 30,
	    name: 'Kuwait'
	  },
	  KZ: {
	    bban: '03N13C',
	    example: 'KZ176010251000042993',
	    len: 20,
	    name: 'Kazakhstan'
	  },
	  LB: {
	    bban: '04N20C',
	    example: 'LB30099900000001001925579115',
	    len: 28,
	    name: 'Lebanon'
	  },
	  LC: {
	    bban: '28C',
	    example: 'LC14BOSL123456789012345678901234',
	    len: 32,
	    name: 'Saint Lucia'
	  },
	  LI: {
	    bban: '05N12C',
	    example: 'LI21088100002324013AA',
	    len: 21,
	    name: 'Liechtenstein'
	  },
	  LT: {
	    bban: '16N',
	    example: 'LT121000011101001000',
	    len: 20,
	    name: 'Lithuania'
	  },
	  LU: {
	    bban: '03N13C',
	    example: 'LU280019400644750000',
	    len: 20,
	    name: 'Luxembourg'
	  },
	  LV: {
	    bban: '04A13C',
	    example: 'LV80BANK0000435195001',
	    len: 21,
	    name: 'Latvia'
	  },
	  MA: {
	    bban: '24C',
	    example: 'MA64011519000001205000534921',
	    len: 28,
	    name: 'Morocco'
	  },
	  MC: {
	    bban: '10N11C02N',
	    example: 'MC5813488000010051108001292',
	    len: 27,
	    name: 'Monaco'
	  },
	  MD: {
	    bban: '02C18C',
	    example: 'MD24AG000225100013104168',
	    len: 24,
	    name: 'Moldova'
	  },
	  ME: {
	    bban: '18N',
	    example: 'ME25505000012345678951',
	    len: 22,
	    name: 'Montenegro'
	  },
	  MG: {
	    bban: '23N',
	    example: 'MG4600005030010101914016056',
	    len: 27,
	    name: 'Madagascar'
	  },
	  MK: {
	    bban: '03N10C02N',
	    example: 'MK07300000000042425',
	    len: 19,
	    name: 'Macedonia'
	  },
	  ML: {
	    bban: '01A23N',
	    example: 'ML03D00890170001002120000447',
	    len: 28,
	    name: 'Mali'
	  },
	  MR: {
	    bban: '23N',
	    example: 'MR1300012000010000002037372',
	    len: 27,
	    name: 'Mauritania'
	  },
	  MT: {
	    bban: '04A05N18C',
	    example: 'MT84MALT011000012345MTLCAST001S',
	    len: 31,
	    name: 'Malta'
	  },
	  MU: {
	    bban: '04A19N03A',
	    example: 'MU17BOMM0101101030300200000MUR',
	    len: 30,
	    name: 'Mauritius'
	  },
	  MZ: {
	    bban: '21N',
	    example: 'MZ59000100000011834194157',
	    len: 25,
	    name: 'Mozambique'
	  },
	  NE: {
	    bban: '24C',
	    example: 'NE58NE0380100100130305000268',
	    len: 28,
	    name: 'Niger'
	  },
	  NI: {
	    bban: '28C',
	    example: 'NI92BAMC000000000000000003123123',
	    len: 32,
	    name: 'Nicaragua'
	  },
	  NL: {
	    bban: '04A10N',
	    example: 'NL91ABNA0417164300',
	    len: 18,
	    name: 'Netherlands'
	  },
	  NO: {
	    bban: '11N',
	    example: 'NO9386011117947',
	    len: 15,
	    name: 'Norway'
	  },
	  PK: {
	    bban: '04C16N',
	    example: 'PK24SCBL0000001171495101',
	    len: 24,
	    name: 'Pakistan'
	  },
	  PL: {
	    bban: '24N',
	    example: 'PL27114020040000300201355387',
	    len: 28,
	    name: 'Poland'
	  },
	  PS: {
	    bban: '04C21N',
	    example: 'PS92PALS000000000400123456702',
	    len: 29,
	    name: 'Palestinian territories'
	  },
	  PT: {
	    bban: '21N',
	    example: 'PT50000200000163099310355',
	    len: 25,
	    name: 'Portugal'
	  },
	  QA: {
	    bban: '04A21C',
	    example: 'QA58DOHB00001234567890ABCDEFG',
	    len: 29,
	    name: 'Qatar'
	  },
	  RO: {
	    bban: '04A16C',
	    example: 'RO49AAAA1B31007593840000',
	    len: 24,
	    name: 'Romania'
	  },
	  RS: {
	    bban: '18N',
	    example: 'RS35260005601001611379',
	    len: 22,
	    name: 'Serbia'
	  },
	  SA: {
	    bban: '02N18C',
	    example: 'SA0380000000608010167519',
	    len: 24,
	    name: 'Saudi Arabia'
	  },
	  SC: {
	    bban: '27C',
	    example: 'SC52BAHL01031234567890123456USD',
	    len: 31,
	    name: 'Seychelles'
	  },
	  SE: {
	    bban: '20N',
	    example: 'SE3550000000054910000003',
	    len: 24,
	    name: 'Sweden'
	  },
	  SI: {
	    bban: '15N',
	    example: 'SI56191000000123438',
	    len: 19,
	    name: 'Slovenia'
	  },
	  SK: {
	    bban: '20N',
	    example: 'SK3112000000198742637541',
	    len: 24,
	    name: 'Slovakia'
	  },
	  SM: {
	    bban: '01A10N12C',
	    example: 'SM86U0322509800000000270100',
	    len: 27,
	    name: 'San Marino'
	  },
	  SN: {
	    bban: '01A23N',
	    example: 'SN12K00100152000025690007542',
	    len: 28,
	    name: 'Senegal'
	  },
	  ST: {
	    bban: '21C',
	    example: 'ST23000200000289355710148',
	    len: 25,
	    name: 'Sao Tome and Principe'
	  },
	  SV: {
	    bban: '24C',
	    example: 'SV43ACAT00000000000000123123',
	    len: 28,
	    name: 'El Salvador'
	  },
	  TD: {
	    bban: '23C',
	    example: 'TD8960002000010271091600153',
	    len: 27,
	    name: 'Chad'
	  },
	  TG: {
	    bban: '24C',
	    example: 'TG53TG0090604310346500400070',
	    len: 28,
	    name: 'Togo'
	  },
	  TL: {
	    bban: '19N',
	    example: 'TL380080012345678910157',
	    len: 23,
	    name: 'East Timor'
	  },
	  TN: {
	    bban: '20N',
	    example: 'TN5914207207100707129648',
	    len: 24,
	    name: 'Tunisia'
	  },
	  TR: {
	    bban: '05N17C',
	    example: 'TR330006100519786457841326',
	    len: 26,
	    name: 'Turkey'
	  },
	  UA: {
	    bban: '06N19C',
	    example: 'UA573543470006762462054925026',
	    len: 29,
	    name: 'Ukraine'
	  },
	  VG: {
	    bban: '04C16N',
	    example: 'VG96VPVG0000012345678901',
	    len: 24,
	    name: 'Virgin Islands, British'
	  },
	  XK: {
	    bban: '04N10N02N',
	    example: 'XK051212012345678906',
	    len: 20,
	    name: 'Kosovo'
	  }
	};
	
	/**
	 * Given an iban returns that country specification
	 *
	 * @type {function}
	 * @inner
	 * @throws {Error} If Country code is not defined
	 * @param {string} iban A valid IBAN number
	 * @return {object} Country specification
	 */
	
	exports.default = function (iban) {
	  var countryCode = iban.slice(0, 2);
	
	  if (!{}.hasOwnProperty.call(countries, countryCode)) {
	    throw new Error('Country code ' + countryCode + ' is not supported');
	  }
	
	  return countries[countryCode];
	};

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var A = 'A'.charCodeAt(0);
	var Z = 'Z'.charCodeAt(0);
	
	var PATTERNS = {
	  A: 'A-Z',
	  N: '0-9',
	  C: '0-9A-Z'
	};
	
	// Stores bban validation regular expressions
	var cachedBbanRegexp = {};
	
	// Generates BBAN format as a regular expression and cache it
	var prepareBbanRegexp = function prepareBbanRegexp(bbanFormat) {
	  var pattern = bbanFormat.match(/[0-9]{2}[ANC]/g).reduce(function (prevPattern, block) {
	    var quantity = parseInt(block.slice(0, 2), 10);
	    var code = block[2];
	    return prevPattern + '[' + PATTERNS[code] + ']{' + quantity + '}';
	  }, '');
	  cachedBbanRegexp[bbanFormat] = new RegExp(pattern);
	  return cachedBbanRegexp[bbanFormat];
	};
	
	// Move the four initial characters to the end of the string
	var rearrangeIban = function rearrangeIban(iban) {
	  return '' + iban.slice(4) + iban.slice(0, 4);
	};
	
	/**
	 * Removes spaces
	 *
	 * @name  compact
	 * @inner
	 * @param  {string} str A given string
	 * @return {string}     Compact string
	 */
	var compact = exports.compact = function compact(str) {
	  return str.replace(/\s+/g, '');
	};
	
	/**
	 * Generates a regular expression from encoded representation
	 * It is grouped in blocks of 3 characters, first 2 represents the number
	 * and the last character represents the type of character.
	 * * A = Upper case alpha characters [A-Z]
	 * * N = Numeric characters [0-9]
	 * * C = Mixed case alphanumeric characters [0-9a-zA-Z]
	 *
	 * @name bbanRegexp
	 * @inner
	 * @param  {string} bbanFormat Encoded regular expression
	 * @return {object}            Resulting regular expression
	 */
	var bbanRegexp = exports.bbanRegexp = function bbanRegexp(bbanFormat) {
	  return cachedBbanRegexp[bbanFormat] || prepareBbanRegexp(bbanFormat);
	};
	
	/**
	 * Replace each letter in the string with two digits,
	 * thereby expanding the string, where A = 10, B = 11, ..., Z = 35
	 *
	 * @name convertIban
	 * @inner
	 * @param {string} iban IBAN number
	 * @return {string} Number representation of the IBAN
	 */
	var convertIban = exports.convertIban = function convertIban(iban) {
	  return rearrangeIban(iban).split('').reduce(function (result, char) {
	    var code = char.charCodeAt(0);
	    var num = void 0;
	    if (code >= A && code <= Z) {
	      num = String(code - A + 10);
	    } else {
	      num = char;
	    }
	    return '' + result + num;
	  }, '');
	};
	
	/**
	 * @name alreadyExploded
	 * @type {function}
	 * @inner
	 *
	 * @description
	 * Checks if string is already split up
	 *
	 * @param str
	 * @param symbol {string}
	 * @return {boolean}
	 */
	var alreadyExploded = function alreadyExploded(str, symbol) {
	  return str && str.split(symbol).length > 1;
	};
	
	/**
	 * @name explodeString
	 * @type {function}
	 *
	 * @description
	 * Splits the string up with spaces (or other symbol)
	 * by groups of 4 (or other number).
	 *
	 * @param str {string}
	 * @param symbol {string}
	 * @param groupLen {number}
	 * @return {string}
	 */
	var explodeString = exports.explodeString = function explodeString(str) {
	  var symbol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
	  var groupLen = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
	
	  if (!str || alreadyExploded(str, symbol)) return str;
	
	  var groups = Math.ceil(str.length / groupLen);
	  var chunks = [];
	
	  for (var i = 0; i < groups; i++) {
	    chunks.push(str.substr(groupLen * i, groupLen));
	  }
	
	  return chunks.join(symbol);
	};

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * Calculates remainder for numbers bigger than 2^53 - 1,
	 * not supported in JavaScript.
	 *
	 * @type {function}
	 * @inner
	 * @param  {string} dividend The dividend
	 * @param  {number} divisor  The divisor
	 * @return {number}          The remainder
	 */
	exports.default = function (dividend, divisor) {
	  if (dividend.length < 10) {
	    return parseInt(dividend, 10) % divisor;
	  }
	
	  var D = dividend.slice(9);
	  var N = dividend.slice(0, 9);
	  var remainder = parseInt(N, 10) % divisor;
	
	  while (D.length > 7) {
	    N = String(remainder) + D.slice(0, 7);
	    remainder = parseInt(N, 10) % divisor;
	    D = D.slice(7);
	  }
	
	  if (D.length) {
	    N = String(remainder) + D;
	  }
	
	  return parseInt(N, 10) % divisor;
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-bb-iban.js.map