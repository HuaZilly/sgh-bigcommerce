(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/array-find/find.js":
/*!*****************************************!*\
  !*** ./node_modules/array-find/find.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function find(array, predicate, context) {
  if (typeof Array.prototype.find === 'function') {
    return array.find(predicate, context);
  }

  context = context || this;
  var length = array.length;
  var i;

  if (typeof predicate !== 'function') {
    throw new TypeError(predicate + ' is not a function');
  }

  for (i = 0; i < length; i++) {
    if (predicate.call(context, array[i], i, array)) {
      return array[i];
    }
  }
}

module.exports = find;


/***/ }),

/***/ "./node_modules/creditcards-types/index.js":
/*!*************************************************!*\
  !*** ./node_modules/creditcards-types/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./types */ "./node_modules/creditcards-types/types/index.js")


/***/ }),

/***/ "./node_modules/creditcards-types/type.js":
/*!************************************************!*\
  !*** ./node_modules/creditcards-types/type.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! xtend/mutable */ "./node_modules/xtend/mutable.js")

module.exports = CardType

function CardType (data) {
  if (!(this instanceof CardType)) return new CardType(data)
  assign(this, data)
}

CardType.prototype.digits = 16
CardType.prototype.cvcLength = 3
CardType.prototype.luhn = true
CardType.prototype.groupPattern = /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?/

CardType.prototype.group = function (number) {
  return (number.match(this.groupPattern) || [])
    .slice(1)
    .filter(Boolean)
}

CardType.prototype.test = function (number, eager) {
  return this[eager ? 'eagerPattern' : 'pattern'].test(number)
}


/***/ }),

/***/ "./node_modules/creditcards-types/types/american-express.js":
/*!******************************************************************!*\
  !*** ./node_modules/creditcards-types/types/american-express.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'American Express',
  digits: 15,
  pattern: /^3[47]\d{13}$/,
  eagerPattern: /^3[47]/,
  groupPattern: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
  cvcLength: 4
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/dankort.js":
/*!*********************************************************!*\
  !*** ./node_modules/creditcards-types/types/dankort.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Dankort',
  pattern: /^5019\d{12}$/,
  eagerPattern: /^5019/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/diners-club.js":
/*!*************************************************************!*\
  !*** ./node_modules/creditcards-types/types/diners-club.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Diners Club',
  digits: 14,
  pattern: /^3(0[0-5]|[68]\d)\d{11}$/,
  eagerPattern: /^3(0|[68])/,
  groupPattern: /(\d{1,4})?(\d{1,6})?(\d{1,4})?/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/discover.js":
/*!**********************************************************!*\
  !*** ./node_modules/creditcards-types/types/discover.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Discover',
  pattern: /^6(011(0[0-9]|[2-4]\d|74|7[7-9]|8[6-9]|9[0-9])|4[4-9]\d{3}|5\d{4})\d{10}$/,
  eagerPattern: /^6(011(0[0-9]|[2-4]|74|7[7-9]|8[6-9]|9[0-9])|4[4-9]|5)/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/elo.js":
/*!*****************************************************!*\
  !*** ./node_modules/creditcards-types/types/elo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Elo',
  pattern: /^(4[035]|5[0]|6[235])(6[7263]|9[90]|1[2416]|7[736]|8[9]|0[04579]|5[0])([0-9])([0-9])\d{10}$/,
  eagerPattern: /^(4[035]|5[0]|6[235])(6[7263]|9[90]|1[2416]|7[736]|8[9]|0[04579]|5[0])([0-9])([0-9])/,
  groupPattern: /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,3})?/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/forbrugsforeningen.js":
/*!********************************************************************!*\
  !*** ./node_modules/creditcards-types/types/forbrugsforeningen.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Forbrugsforeningen',
  pattern: /^600722\d{10}$/,
  eagerPattern: /^600/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/creditcards-types/types/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [
  __webpack_require__(/*! ./visa */ "./node_modules/creditcards-types/types/visa.js"),
  __webpack_require__(/*! ./maestro */ "./node_modules/creditcards-types/types/maestro.js"),
  __webpack_require__(/*! ./forbrugsforeningen */ "./node_modules/creditcards-types/types/forbrugsforeningen.js"),
  __webpack_require__(/*! ./dankort */ "./node_modules/creditcards-types/types/dankort.js"),
  __webpack_require__(/*! ./mastercard */ "./node_modules/creditcards-types/types/mastercard.js"),
  __webpack_require__(/*! ./american-express */ "./node_modules/creditcards-types/types/american-express.js"),
  __webpack_require__(/*! ./diners-club */ "./node_modules/creditcards-types/types/diners-club.js"),
  __webpack_require__(/*! ./discover */ "./node_modules/creditcards-types/types/discover.js"),
  __webpack_require__(/*! ./jcb */ "./node_modules/creditcards-types/types/jcb.js"),
  __webpack_require__(/*! ./unionpay */ "./node_modules/creditcards-types/types/unionpay.js"),
  __webpack_require__(/*! ./troy */ "./node_modules/creditcards-types/types/troy.js"),
  __webpack_require__(/*! ./elo */ "./node_modules/creditcards-types/types/elo.js"),
  __webpack_require__(/*! ./uatp */ "./node_modules/creditcards-types/types/uatp.js")
]


/***/ }),

/***/ "./node_modules/creditcards-types/types/jcb.js":
/*!*****************************************************!*\
  !*** ./node_modules/creditcards-types/types/jcb.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'JCB',
  pattern: /^35\d{14}$/,
  eagerPattern: /^35/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/maestro.js":
/*!*********************************************************!*\
  !*** ./node_modules/creditcards-types/types/maestro.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Maestro',
  digits: [12, 19],
  pattern: /^(?:5[06789]\d\d|(?!6011[0234])(?!60117[4789])(?!60118[6789])(?!60119)(?!64[456789])(?!65)6\d{3})\d{8,15}$/,
  eagerPattern: /^(5(018|0[23]|[68])|6[37]|60111|60115|60117([56]|7[56])|60118[0-5]|64[0-3]|66)/,
  groupPattern: /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,3})?/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/mastercard.js":
/*!************************************************************!*\
  !*** ./node_modules/creditcards-types/types/mastercard.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Mastercard',
  pattern: /^(5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)\d{12}$/,
  eagerPattern: /^(2[3-7]|22[2-9]|5[1-5])/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/troy.js":
/*!******************************************************!*\
  !*** ./node_modules/creditcards-types/types/troy.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Troy',
  pattern: /^9792\d{12}$/,
  eagerPattern: /^9792/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/uatp.js":
/*!******************************************************!*\
  !*** ./node_modules/creditcards-types/types/uatp.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'UATP',
  digits: 15,
  pattern: /^1\d{14}$/,
  eagerPattern: /^1/,
  groupPattern: /(\d{1,4})(\d{1,5})?(\d{1,6})?/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/unionpay.js":
/*!**********************************************************!*\
  !*** ./node_modules/creditcards-types/types/unionpay.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'UnionPay',
  pattern: /^62[0-5]\d{13,16}$/,
  eagerPattern: /^62/,
  groupPattern: /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,3})?/,
  luhn: false
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/visa.js":
/*!******************************************************!*\
  !*** ./node_modules/creditcards-types/types/visa.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Visa',
  digits: [13, 19],
  pattern: /^4\d{12}(\d{3}|\d{6})?$/,
  eagerPattern: /^4/,
  groupPattern: /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,3})?/
})


/***/ }),

/***/ "./node_modules/creditcards/card.js":
/*!******************************************!*\
  !*** ./node_modules/creditcards/card.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var luhn = __webpack_require__(/*! fast-luhn */ "./node_modules/fast-luhn/index.js")
var Types = __webpack_require__(/*! ./types */ "./node_modules/creditcards/types.js")

module.exports = Card

function Card (data) {
  var types = Types(data)

  return {
    types: data,
    parse: parseCard,
    format: formatCard,
    type: cardType,
    luhn: luhn,
    isValid: isCardValid
  }

  function parseCard (number) {
    if (typeof number !== 'string') return ''
    return number.replace(/[^\d]/g, '')
  }

  function formatCard (number, separator) {
    var type = getType(number, true)
    if (!type) return number
    return type.group(number).join(separator || ' ')
  }

  function cardType (number, eager) {
    var type = getType(number, eager)
    return type ? type.name : undefined
  }

  function isCardValid (number, type) {
    if (type) {
      type = types.get(type)
    } else {
      type = getType(number)
    }
    if (!type) return false
    return (!type.luhn || luhn(number)) && type.test(number)
  }

  function getType (number, eager) {
    return types.find(function (type) {
      return type.test(number, eager)
    })
  }
}


/***/ }),

/***/ "./node_modules/creditcards/cvc.js":
/*!*****************************************!*\
  !*** ./node_modules/creditcards/cvc.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Types = __webpack_require__(/*! ./types */ "./node_modules/creditcards/types.js")
var cvcRegex = /^\d{3,4}$/

module.exports = Cvc

function Cvc (data) {
  var types = Types(data)

  return {
    isValid: cvcIsValid
  }

  function cvcIsValid (cvc, type) {
    if (typeof cvc !== 'string') return false
    if (!cvcRegex.test(cvc)) return false

    if (!type) {
      return types.some(function (type) {
        return type.cvcLength === cvc.length
      })
    }

    return types.get(type).cvcLength === cvc.length
  }
}


/***/ }),

/***/ "./node_modules/creditcards/expiration.js":
/*!************************************************!*\
  !*** ./node_modules/creditcards/expiration.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValidMonth = __webpack_require__(/*! is-valid-month */ "./node_modules/is-valid-month/index.js")
var parseIntStrict = __webpack_require__(/*! parse-int */ "./node_modules/parse-int/index.js")
var parseYear = __webpack_require__(/*! parse-year */ "./node_modules/parse-year/index.js")

module.exports = {
  isPast: isPast,
  month: {
    parse: parseMonth,
    isValid: isValidMonth
  },
  year: {
    parse: parseYear,
    format: formatExpYear,
    isValid: isExpYearValid,
    isPast: isExpYearPast
  }
}

function isPast (month, year) {
  return Date.now() >= new Date(year, month)
}

function parseMonth (month) {
  return parseIntStrict(month)
}

function formatExpYear (year, strip) {
  year = year.toString()
  return strip ? year.substr(2, 4) : year
}

function isExpYearValid (year) {
  if (typeof year !== 'number') return false
  year = parseIntStrict(year)
  return year > 0
}

function isExpYearPast (year) {
  return new Date().getFullYear() > year
}


/***/ }),

/***/ "./node_modules/creditcards/index.js":
/*!*******************************************!*\
  !*** ./node_modules/creditcards/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__(/*! creditcards-types */ "./node_modules/creditcards-types/index.js")
var Card = __webpack_require__(/*! ./card */ "./node_modules/creditcards/card.js")
var Cvc = __webpack_require__(/*! ./cvc */ "./node_modules/creditcards/cvc.js")
var expiration = __webpack_require__(/*! ./expiration */ "./node_modules/creditcards/expiration.js")

module.exports = withTypes(types)
module.exports.withTypes = withTypes

function withTypes (types) {
  return {
    card: Card(types),
    cvc: Cvc(types),
    expiration: expiration
  }
}


/***/ }),

/***/ "./node_modules/creditcards/types.js":
/*!*******************************************!*\
  !*** ./node_modules/creditcards/types.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var find = __webpack_require__(/*! array-find */ "./node_modules/array-find/find.js")
var defaults = __webpack_require__(/*! creditcards-types */ "./node_modules/creditcards-types/index.js")

module.exports = CardTypes
module.exports.defaults = defaults

function CardTypes (types) {
  var map = types.reduce(function (acc, type) {
    acc[type.name] = type
    return acc
  }, {})

  return {
    find: find.bind(null, types),
    some: types.some.bind(types),
    get: get
  }

  function get (name) {
    var type = map[name]

    if (!type) {
      throw new Error('No type found for name: ' + name)
    }

    return type
  }
}


/***/ }),

/***/ "./node_modules/expand-year/index.js":
/*!*******************************************!*\
  !*** ./node_modules/expand-year/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var zeroFill = __webpack_require__(/*! zero-fill */ "./node_modules/zero-fill/index.js")
var parseIntStrict = __webpack_require__(/*! parse-int */ "./node_modules/parse-int/index.js")

var pad = zeroFill(2)

module.exports = function expandYear (year, now) {
  now = now || new Date()
  var base = now.getFullYear().toString().substr(0, 2)
  year = parseIntStrict(year)
  return parseIntStrict(base + pad(year))
}


/***/ }),

/***/ "./node_modules/fast-luhn/index.js":
/*!*****************************************!*\
  !*** ./node_modules/fast-luhn/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (function (array) {
  return function luhn (number) {
    if (typeof number !== 'string') throw new TypeError('Expected string input')
    if (!number) return false
    var length = number.length
    var bit = 1
    var sum = 0
    var value

    while (length) {
      value = parseInt(number.charAt(--length), 10)
      bit ^= 1
      sum += bit ? array[value] : value
    }

    return sum % 10 === 0
  }
}([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]))


/***/ }),

/***/ "./node_modules/is-finite/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-finite/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Number.isFinite || function (value) {
	return !(typeof value !== 'number' || value !== value || value === Infinity || value === -Infinity);
};


/***/ }),

/***/ "./node_modules/is-integer/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-integer/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/paulmillr/es6-shim
// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isinteger
var isFinite = __webpack_require__(/*! is-finite */ "./node_modules/is-finite/index.js");
module.exports = Number.isInteger || function(val) {
  return typeof val === "number" &&
    isFinite(val) &&
    Math.floor(val) === val;
};


/***/ }),

/***/ "./node_modules/is-valid-month/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-valid-month/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isInteger = __webpack_require__(/*! is-integer */ "./node_modules/is-integer/index.js")

module.exports = function isValidMonth (month) {
  if (typeof month !== 'number' || !isInteger(month)) return false
  return month >= 1 && month <= 12
}


/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./node_modules/lodash/_createFind.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createFind.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),

/***/ "./node_modules/lodash/find.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/find.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(/*! ./_createFind */ "./node_modules/lodash/_createFind.js"),
    findIndex = __webpack_require__(/*! ./findIndex */ "./node_modules/lodash/findIndex.js");

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),

/***/ "./node_modules/lodash/findIndex.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/findIndex.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ "./node_modules/lodash/reduce.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/reduce.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/parse-int/index.js":
/*!*****************************************!*\
  !*** ./node_modules/parse-int/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isInteger = __webpack_require__(/*! is-integer */ "./node_modules/is-integer/index.js")
var isIntegerRegex = /^-?\d+$/

module.exports = function parseIntStrict (integer) {
  if (typeof integer === 'number') {
    return isInteger(integer) ? integer : undefined
  }
  if (typeof integer === 'string') {
    return isIntegerRegex.test(integer) ? parseInt(integer, 10) : undefined
  }
}


/***/ }),

/***/ "./node_modules/parse-year/index.js":
/*!******************************************!*\
  !*** ./node_modules/parse-year/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parseIntStrict = __webpack_require__(/*! parse-int */ "./node_modules/parse-int/index.js")
var expandYear = __webpack_require__(/*! expand-year */ "./node_modules/expand-year/index.js")

module.exports = function parseYear (year, expand, now) {
  year = parseIntStrict(year)
  if (year == null) return
  if (!expand) return year
  return expandYear(year, now)
}


/***/ }),

/***/ "./node_modules/xtend/mutable.js":
/*!***************************************!*\
  !*** ./node_modules/xtend/mutable.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ "./node_modules/zero-fill/index.js":
/*!*****************************************!*\
  !*** ./node_modules/zero-fill/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! zero-fill. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/**
 * Given a number, return a zero-filled string.
 * From http://stackoverflow.com/questions/1267283/
 * @param  {number} width
 * @param  {number} number
 * @return {string}
 */
module.exports = function zeroFill (width, number, pad) {
  if (number === undefined) {
    return function (number, pad) {
      return zeroFill(width, number, pad)
    }
  }
  if (pad === undefined) pad = '0'
  width -= number.toString().length
  if (width > 0) return new Array(width + (/\./.test(number) ? 2 : 1)).join(pad) + number
  return number + ''
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXJyYXktZmluZC9maW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmVkaXRjYXJkcy10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZXMvYW1lcmljYW4tZXhwcmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZXMvZGFua29ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZXMvZGluZXJzLWNsdWIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzLXR5cGVzL3R5cGVzL2Rpc2NvdmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmVkaXRjYXJkcy10eXBlcy90eXBlcy9lbG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzLXR5cGVzL3R5cGVzL2ZvcmJydWdzZm9yZW5pbmdlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzLXR5cGVzL3R5cGVzL2pjYi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZXMvbWFlc3Ryby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZXMvbWFzdGVyY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZXMvdHJveS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZXMvdWF0cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZXMvdW5pb25wYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzLXR5cGVzL3R5cGVzL3Zpc2EuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzL2N2Yy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMvZXhwaXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzL3R5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9leHBhbmQteWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmFzdC1sdWhuL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1maW5pdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLXZhbGlkLW1vbnRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcy1jb29raWUvc3JjL2pzLmNvb2tpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRmluZEluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9maW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZmluZEluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvcmVkdWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9JbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYXJzZS1pbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhcnNlLXllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3h0ZW5kL211dGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3plcm8tZmlsbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLFlBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3RCWTs7QUFFWixpQkFBaUIsbUJBQU8sQ0FBQyxnRUFBUzs7Ozs7Ozs7Ozs7OztBQ0Z0Qjs7QUFFWixhQUFhLG1CQUFPLENBQUMsc0RBQWU7O0FBRXBDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxJQUFJLEtBQUssSUFBSSxNQUFNLElBQUksTUFBTSxJQUFJOztBQUV4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hCWTs7QUFFWixXQUFXLG1CQUFPLENBQUMseURBQVM7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixHQUFHO0FBQ3hCO0FBQ0EscUJBQXFCLElBQUksS0FBSyxJQUFJLE1BQU0sSUFBSTtBQUM1QztBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNYVzs7QUFFWixXQUFXLG1CQUFPLENBQUMseURBQVM7O0FBRTVCO0FBQ0E7QUFDQSxvQkFBb0IsR0FBRztBQUN2QjtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsU0FBUztBQUNwQixXQUFXLEVBQUU7QUFDYixXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDcEJZOztBQUVaLGdCQUFnQixtQkFBTyxDQUFDLHNEQUFZO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNaWTs7QUFFWixxQkFBcUIsbUJBQU8sQ0FBQyxvREFBVztBQUN4QyxpQkFBaUIsbUJBQU8sQ0FBQyx3REFBYTs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQTs7QUFFQTs7QUFFQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGZpbmQoYXJyYXksIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICBpZiAodHlwZW9mIEFycmF5LnByb3RvdHlwZS5maW5kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGFycmF5LmZpbmQocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgfVxuXG4gIGNvbnRleHQgPSBjb250ZXh0IHx8IHRoaXM7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHZhciBpO1xuXG4gIGlmICh0eXBlb2YgcHJlZGljYXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihwcmVkaWNhdGUgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocHJlZGljYXRlLmNhbGwoY29udGV4dCwgYXJyYXlbaV0sIGksIGFycmF5KSkge1xuICAgICAgcmV0dXJuIGFycmF5W2ldO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbmQ7XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3R5cGVzJylcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgneHRlbmQvbXV0YWJsZScpXG5cbm1vZHVsZS5leHBvcnRzID0gQ2FyZFR5cGVcblxuZnVuY3Rpb24gQ2FyZFR5cGUgKGRhdGEpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIENhcmRUeXBlKSkgcmV0dXJuIG5ldyBDYXJkVHlwZShkYXRhKVxuICBhc3NpZ24odGhpcywgZGF0YSlcbn1cblxuQ2FyZFR5cGUucHJvdG90eXBlLmRpZ2l0cyA9IDE2XG5DYXJkVHlwZS5wcm90b3R5cGUuY3ZjTGVuZ3RoID0gM1xuQ2FyZFR5cGUucHJvdG90eXBlLmx1aG4gPSB0cnVlXG5DYXJkVHlwZS5wcm90b3R5cGUuZ3JvdXBQYXR0ZXJuID0gLyhcXGR7MSw0fSkoXFxkezEsNH0pPyhcXGR7MSw0fSk/KFxcZHsxLDR9KT8vXG5cbkNhcmRUeXBlLnByb3RvdHlwZS5ncm91cCA9IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgcmV0dXJuIChudW1iZXIubWF0Y2godGhpcy5ncm91cFBhdHRlcm4pIHx8IFtdKVxuICAgIC5zbGljZSgxKVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbn1cblxuQ2FyZFR5cGUucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbiAobnVtYmVyLCBlYWdlcikge1xuICByZXR1cm4gdGhpc1tlYWdlciA/ICdlYWdlclBhdHRlcm4nIDogJ3BhdHRlcm4nXS50ZXN0KG51bWJlcilcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR5cGUoe1xuICBuYW1lOiAnQW1lcmljYW4gRXhwcmVzcycsXG4gIGRpZ2l0czogMTUsXG4gIHBhdHRlcm46IC9eM1s0N11cXGR7MTN9JC8sXG4gIGVhZ2VyUGF0dGVybjogL14zWzQ3XS8sXG4gIGdyb3VwUGF0dGVybjogLyhcXGR7MSw0fSkoXFxkezEsNn0pPyhcXGR7MSw1fSk/LyxcbiAgY3ZjTGVuZ3RoOiA0XG59KVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vdHlwZScpXG5cbm1vZHVsZS5leHBvcnRzID0gVHlwZSh7XG4gIG5hbWU6ICdEYW5rb3J0JyxcbiAgcGF0dGVybjogL141MDE5XFxkezEyfSQvLFxuICBlYWdlclBhdHRlcm46IC9eNTAxOS9cbn0pXG4iLCIndXNlIHN0cmljdCdcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJylcblxubW9kdWxlLmV4cG9ydHMgPSBUeXBlKHtcbiAgbmFtZTogJ0RpbmVycyBDbHViJyxcbiAgZGlnaXRzOiAxNCxcbiAgcGF0dGVybjogL14zKDBbMC01XXxbNjhdXFxkKVxcZHsxMX0kLyxcbiAgZWFnZXJQYXR0ZXJuOiAvXjMoMHxbNjhdKS8sXG4gIGdyb3VwUGF0dGVybjogLyhcXGR7MSw0fSk/KFxcZHsxLDZ9KT8oXFxkezEsNH0pPy9cbn0pXG4iLCIndXNlIHN0cmljdCdcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJylcblxubW9kdWxlLmV4cG9ydHMgPSBUeXBlKHtcbiAgbmFtZTogJ0Rpc2NvdmVyJyxcbiAgcGF0dGVybjogL142KDAxMSgwWzAtOV18WzItNF1cXGR8NzR8N1s3LTldfDhbNi05XXw5WzAtOV0pfDRbNC05XVxcZHszfXw1XFxkezR9KVxcZHsxMH0kLyxcbiAgZWFnZXJQYXR0ZXJuOiAvXjYoMDExKDBbMC05XXxbMi00XXw3NHw3WzctOV18OFs2LTldfDlbMC05XSl8NFs0LTldfDUpL1xufSlcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR5cGUoe1xuICBuYW1lOiAnRWxvJyxcbiAgcGF0dGVybjogL14oNFswMzVdfDVbMF18NlsyMzVdKSg2WzcyNjNdfDlbOTBdfDFbMjQxNl18N1s3MzZdfDhbOV18MFswNDU3OV18NVswXSkoWzAtOV0pKFswLTldKVxcZHsxMH0kLyxcbiAgZWFnZXJQYXR0ZXJuOiAvXig0WzAzNV18NVswXXw2WzIzNV0pKDZbNzI2M118OVs5MF18MVsyNDE2XXw3WzczNl18OFs5XXwwWzA0NTc5XXw1WzBdKShbMC05XSkoWzAtOV0pLyxcbiAgZ3JvdXBQYXR0ZXJuOiAvKFxcZHsxLDR9KShcXGR7MSw0fSk/KFxcZHsxLDR9KT8oXFxkezEsNH0pPyhcXGR7MSwzfSk/L1xufSlcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR5cGUoe1xuICBuYW1lOiAnRm9yYnJ1Z3Nmb3JlbmluZ2VuJyxcbiAgcGF0dGVybjogL142MDA3MjJcXGR7MTB9JC8sXG4gIGVhZ2VyUGF0dGVybjogL142MDAvXG59KVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gW1xuICByZXF1aXJlKCcuL3Zpc2EnKSxcbiAgcmVxdWlyZSgnLi9tYWVzdHJvJyksXG4gIHJlcXVpcmUoJy4vZm9yYnJ1Z3Nmb3JlbmluZ2VuJyksXG4gIHJlcXVpcmUoJy4vZGFua29ydCcpLFxuICByZXF1aXJlKCcuL21hc3RlcmNhcmQnKSxcbiAgcmVxdWlyZSgnLi9hbWVyaWNhbi1leHByZXNzJyksXG4gIHJlcXVpcmUoJy4vZGluZXJzLWNsdWInKSxcbiAgcmVxdWlyZSgnLi9kaXNjb3ZlcicpLFxuICByZXF1aXJlKCcuL2pjYicpLFxuICByZXF1aXJlKCcuL3VuaW9ucGF5JyksXG4gIHJlcXVpcmUoJy4vdHJveScpLFxuICByZXF1aXJlKCcuL2VsbycpLFxuICByZXF1aXJlKCcuL3VhdHAnKVxuXVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vdHlwZScpXG5cbm1vZHVsZS5leHBvcnRzID0gVHlwZSh7XG4gIG5hbWU6ICdKQ0InLFxuICBwYXR0ZXJuOiAvXjM1XFxkezE0fSQvLFxuICBlYWdlclBhdHRlcm46IC9eMzUvXG59KVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vdHlwZScpXG5cbm1vZHVsZS5leHBvcnRzID0gVHlwZSh7XG4gIG5hbWU6ICdNYWVzdHJvJyxcbiAgZGlnaXRzOiBbMTIsIDE5XSxcbiAgcGF0dGVybjogL14oPzo1WzA2Nzg5XVxcZFxcZHwoPyE2MDExWzAyMzRdKSg/ITYwMTE3WzQ3ODldKSg/ITYwMTE4WzY3ODldKSg/ITYwMTE5KSg/ITY0WzQ1Njc4OV0pKD8hNjUpNlxcZHszfSlcXGR7OCwxNX0kLyxcbiAgZWFnZXJQYXR0ZXJuOiAvXig1KDAxOHwwWzIzXXxbNjhdKXw2WzM3XXw2MDExMXw2MDExNXw2MDExNyhbNTZdfDdbNTZdKXw2MDExOFswLTVdfDY0WzAtM118NjYpLyxcbiAgZ3JvdXBQYXR0ZXJuOiAvKFxcZHsxLDR9KShcXGR7MSw0fSk/KFxcZHsxLDR9KT8oXFxkezEsNH0pPyhcXGR7MSwzfSk/L1xufSlcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR5cGUoe1xuICBuYW1lOiAnTWFzdGVyY2FyZCcsXG4gIHBhdHRlcm46IC9eKDVbMS01XVswLTldezJ9fDIyMlsxLTldfDIyWzMtOV1bMC05XXwyWzMtNl1bMC05XXsyfXwyN1swMV1bMC05XXwyNzIwKVxcZHsxMn0kLyxcbiAgZWFnZXJQYXR0ZXJuOiAvXigyWzMtN118MjJbMi05XXw1WzEtNV0pL1xufSlcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR5cGUoe1xuICBuYW1lOiAnVHJveScsXG4gIHBhdHRlcm46IC9eOTc5MlxcZHsxMn0kLyxcbiAgZWFnZXJQYXR0ZXJuOiAvXjk3OTIvXG59KVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vdHlwZScpXG5cbm1vZHVsZS5leHBvcnRzID0gVHlwZSh7XG4gIG5hbWU6ICdVQVRQJyxcbiAgZGlnaXRzOiAxNSxcbiAgcGF0dGVybjogL14xXFxkezE0fSQvLFxuICBlYWdlclBhdHRlcm46IC9eMS8sXG4gIGdyb3VwUGF0dGVybjogLyhcXGR7MSw0fSkoXFxkezEsNX0pPyhcXGR7MSw2fSk/L1xufSlcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR5cGUoe1xuICBuYW1lOiAnVW5pb25QYXknLFxuICBwYXR0ZXJuOiAvXjYyWzAtNV1cXGR7MTMsMTZ9JC8sXG4gIGVhZ2VyUGF0dGVybjogL142Mi8sXG4gIGdyb3VwUGF0dGVybjogLyhcXGR7MSw0fSkoXFxkezEsNH0pPyhcXGR7MSw0fSk/KFxcZHsxLDR9KT8oXFxkezEsM30pPy8sXG4gIGx1aG46IGZhbHNlXG59KVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vdHlwZScpXG5cbm1vZHVsZS5leHBvcnRzID0gVHlwZSh7XG4gIG5hbWU6ICdWaXNhJyxcbiAgZGlnaXRzOiBbMTMsIDE5XSxcbiAgcGF0dGVybjogL140XFxkezEyfShcXGR7M318XFxkezZ9KT8kLyxcbiAgZWFnZXJQYXR0ZXJuOiAvXjQvLFxuICBncm91cFBhdHRlcm46IC8oXFxkezEsNH0pKFxcZHsxLDR9KT8oXFxkezEsNH0pPyhcXGR7MSw0fSk/KFxcZHsxLDN9KT8vXG59KVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBsdWhuID0gcmVxdWlyZSgnZmFzdC1sdWhuJylcbnZhciBUeXBlcyA9IHJlcXVpcmUoJy4vdHlwZXMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhcmRcblxuZnVuY3Rpb24gQ2FyZCAoZGF0YSkge1xuICB2YXIgdHlwZXMgPSBUeXBlcyhkYXRhKVxuXG4gIHJldHVybiB7XG4gICAgdHlwZXM6IGRhdGEsXG4gICAgcGFyc2U6IHBhcnNlQ2FyZCxcbiAgICBmb3JtYXQ6IGZvcm1hdENhcmQsXG4gICAgdHlwZTogY2FyZFR5cGUsXG4gICAgbHVobjogbHVobixcbiAgICBpc1ZhbGlkOiBpc0NhcmRWYWxpZFxuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VDYXJkIChudW1iZXIpIHtcbiAgICBpZiAodHlwZW9mIG51bWJlciAhPT0gJ3N0cmluZycpIHJldHVybiAnJ1xuICAgIHJldHVybiBudW1iZXIucmVwbGFjZSgvW15cXGRdL2csICcnKVxuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0Q2FyZCAobnVtYmVyLCBzZXBhcmF0b3IpIHtcbiAgICB2YXIgdHlwZSA9IGdldFR5cGUobnVtYmVyLCB0cnVlKVxuICAgIGlmICghdHlwZSkgcmV0dXJuIG51bWJlclxuICAgIHJldHVybiB0eXBlLmdyb3VwKG51bWJlcikuam9pbihzZXBhcmF0b3IgfHwgJyAnKVxuICB9XG5cbiAgZnVuY3Rpb24gY2FyZFR5cGUgKG51bWJlciwgZWFnZXIpIHtcbiAgICB2YXIgdHlwZSA9IGdldFR5cGUobnVtYmVyLCBlYWdlcilcbiAgICByZXR1cm4gdHlwZSA/IHR5cGUubmFtZSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZnVuY3Rpb24gaXNDYXJkVmFsaWQgKG51bWJlciwgdHlwZSkge1xuICAgIGlmICh0eXBlKSB7XG4gICAgICB0eXBlID0gdHlwZXMuZ2V0KHR5cGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGUgPSBnZXRUeXBlKG51bWJlcilcbiAgICB9XG4gICAgaWYgKCF0eXBlKSByZXR1cm4gZmFsc2VcbiAgICByZXR1cm4gKCF0eXBlLmx1aG4gfHwgbHVobihudW1iZXIpKSAmJiB0eXBlLnRlc3QobnVtYmVyKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VHlwZSAobnVtYmVyLCBlYWdlcikge1xuICAgIHJldHVybiB0eXBlcy5maW5kKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICByZXR1cm4gdHlwZS50ZXN0KG51bWJlciwgZWFnZXIpXG4gICAgfSlcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBUeXBlcyA9IHJlcXVpcmUoJy4vdHlwZXMnKVxudmFyIGN2Y1JlZ2V4ID0gL15cXGR7Myw0fSQvXG5cbm1vZHVsZS5leHBvcnRzID0gQ3ZjXG5cbmZ1bmN0aW9uIEN2YyAoZGF0YSkge1xuICB2YXIgdHlwZXMgPSBUeXBlcyhkYXRhKVxuXG4gIHJldHVybiB7XG4gICAgaXNWYWxpZDogY3ZjSXNWYWxpZFxuICB9XG5cbiAgZnVuY3Rpb24gY3ZjSXNWYWxpZCAoY3ZjLCB0eXBlKSB7XG4gICAgaWYgKHR5cGVvZiBjdmMgIT09ICdzdHJpbmcnKSByZXR1cm4gZmFsc2VcbiAgICBpZiAoIWN2Y1JlZ2V4LnRlc3QoY3ZjKSkgcmV0dXJuIGZhbHNlXG5cbiAgICBpZiAoIXR5cGUpIHtcbiAgICAgIHJldHVybiB0eXBlcy5zb21lKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0eXBlLmN2Y0xlbmd0aCA9PT0gY3ZjLmxlbmd0aFxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXMuZ2V0KHR5cGUpLmN2Y0xlbmd0aCA9PT0gY3ZjLmxlbmd0aFxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGlzVmFsaWRNb250aCA9IHJlcXVpcmUoJ2lzLXZhbGlkLW1vbnRoJylcbnZhciBwYXJzZUludFN0cmljdCA9IHJlcXVpcmUoJ3BhcnNlLWludCcpXG52YXIgcGFyc2VZZWFyID0gcmVxdWlyZSgncGFyc2UteWVhcicpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc1Bhc3Q6IGlzUGFzdCxcbiAgbW9udGg6IHtcbiAgICBwYXJzZTogcGFyc2VNb250aCxcbiAgICBpc1ZhbGlkOiBpc1ZhbGlkTW9udGhcbiAgfSxcbiAgeWVhcjoge1xuICAgIHBhcnNlOiBwYXJzZVllYXIsXG4gICAgZm9ybWF0OiBmb3JtYXRFeHBZZWFyLFxuICAgIGlzVmFsaWQ6IGlzRXhwWWVhclZhbGlkLFxuICAgIGlzUGFzdDogaXNFeHBZZWFyUGFzdFxuICB9XG59XG5cbmZ1bmN0aW9uIGlzUGFzdCAobW9udGgsIHllYXIpIHtcbiAgcmV0dXJuIERhdGUubm93KCkgPj0gbmV3IERhdGUoeWVhciwgbW9udGgpXG59XG5cbmZ1bmN0aW9uIHBhcnNlTW9udGggKG1vbnRoKSB7XG4gIHJldHVybiBwYXJzZUludFN0cmljdChtb250aClcbn1cblxuZnVuY3Rpb24gZm9ybWF0RXhwWWVhciAoeWVhciwgc3RyaXApIHtcbiAgeWVhciA9IHllYXIudG9TdHJpbmcoKVxuICByZXR1cm4gc3RyaXAgPyB5ZWFyLnN1YnN0cigyLCA0KSA6IHllYXJcbn1cblxuZnVuY3Rpb24gaXNFeHBZZWFyVmFsaWQgKHllYXIpIHtcbiAgaWYgKHR5cGVvZiB5ZWFyICE9PSAnbnVtYmVyJykgcmV0dXJuIGZhbHNlXG4gIHllYXIgPSBwYXJzZUludFN0cmljdCh5ZWFyKVxuICByZXR1cm4geWVhciA+IDBcbn1cblxuZnVuY3Rpb24gaXNFeHBZZWFyUGFzdCAoeWVhcikge1xuICByZXR1cm4gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpID4geWVhclxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB0eXBlcyA9IHJlcXVpcmUoJ2NyZWRpdGNhcmRzLXR5cGVzJylcbnZhciBDYXJkID0gcmVxdWlyZSgnLi9jYXJkJylcbnZhciBDdmMgPSByZXF1aXJlKCcuL2N2YycpXG52YXIgZXhwaXJhdGlvbiA9IHJlcXVpcmUoJy4vZXhwaXJhdGlvbicpXG5cbm1vZHVsZS5leHBvcnRzID0gd2l0aFR5cGVzKHR5cGVzKVxubW9kdWxlLmV4cG9ydHMud2l0aFR5cGVzID0gd2l0aFR5cGVzXG5cbmZ1bmN0aW9uIHdpdGhUeXBlcyAodHlwZXMpIHtcbiAgcmV0dXJuIHtcbiAgICBjYXJkOiBDYXJkKHR5cGVzKSxcbiAgICBjdmM6IEN2Yyh0eXBlcyksXG4gICAgZXhwaXJhdGlvbjogZXhwaXJhdGlvblxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGZpbmQgPSByZXF1aXJlKCdhcnJheS1maW5kJylcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJ2NyZWRpdGNhcmRzLXR5cGVzJylcblxubW9kdWxlLmV4cG9ydHMgPSBDYXJkVHlwZXNcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHRzID0gZGVmYXVsdHNcblxuZnVuY3Rpb24gQ2FyZFR5cGVzICh0eXBlcykge1xuICB2YXIgbWFwID0gdHlwZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHR5cGUpIHtcbiAgICBhY2NbdHlwZS5uYW1lXSA9IHR5cGVcbiAgICByZXR1cm4gYWNjXG4gIH0sIHt9KVxuXG4gIHJldHVybiB7XG4gICAgZmluZDogZmluZC5iaW5kKG51bGwsIHR5cGVzKSxcbiAgICBzb21lOiB0eXBlcy5zb21lLmJpbmQodHlwZXMpLFxuICAgIGdldDogZ2V0XG4gIH1cblxuICBmdW5jdGlvbiBnZXQgKG5hbWUpIHtcbiAgICB2YXIgdHlwZSA9IG1hcFtuYW1lXVxuXG4gICAgaWYgKCF0eXBlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHR5cGUgZm91bmQgZm9yIG5hbWU6ICcgKyBuYW1lKVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgemVyb0ZpbGwgPSByZXF1aXJlKCd6ZXJvLWZpbGwnKVxudmFyIHBhcnNlSW50U3RyaWN0ID0gcmVxdWlyZSgncGFyc2UtaW50JylcblxudmFyIHBhZCA9IHplcm9GaWxsKDIpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXhwYW5kWWVhciAoeWVhciwgbm93KSB7XG4gIG5vdyA9IG5vdyB8fCBuZXcgRGF0ZSgpXG4gIHZhciBiYXNlID0gbm93LmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKS5zdWJzdHIoMCwgMilcbiAgeWVhciA9IHBhcnNlSW50U3RyaWN0KHllYXIpXG4gIHJldHVybiBwYXJzZUludFN0cmljdChiYXNlICsgcGFkKHllYXIpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uIChhcnJheSkge1xuICByZXR1cm4gZnVuY3Rpb24gbHVobiAobnVtYmVyKSB7XG4gICAgaWYgKHR5cGVvZiBudW1iZXIgIT09ICdzdHJpbmcnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBzdHJpbmcgaW5wdXQnKVxuICAgIGlmICghbnVtYmVyKSByZXR1cm4gZmFsc2VcbiAgICB2YXIgbGVuZ3RoID0gbnVtYmVyLmxlbmd0aFxuICAgIHZhciBiaXQgPSAxXG4gICAgdmFyIHN1bSA9IDBcbiAgICB2YXIgdmFsdWVcblxuICAgIHdoaWxlIChsZW5ndGgpIHtcbiAgICAgIHZhbHVlID0gcGFyc2VJbnQobnVtYmVyLmNoYXJBdCgtLWxlbmd0aCksIDEwKVxuICAgICAgYml0IF49IDFcbiAgICAgIHN1bSArPSBiaXQgPyBhcnJheVt2YWx1ZV0gOiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBzdW0gJSAxMCA9PT0gMFxuICB9XG59KFswLCAyLCA0LCA2LCA4LCAxLCAzLCA1LCA3LCA5XSkpXG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gTnVtYmVyLmlzRmluaXRlIHx8IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gISh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInIHx8IHZhbHVlICE9PSB2YWx1ZSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkgfHwgdmFsdWUgPT09IC1JbmZpbml0eSk7XG59O1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3BhdWxtaWxsci9lczYtc2hpbVxuLy8gaHR0cDovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtbnVtYmVyLmlzaW50ZWdlclxudmFyIGlzRmluaXRlID0gcmVxdWlyZShcImlzLWZpbml0ZVwiKTtcbm1vZHVsZS5leHBvcnRzID0gTnVtYmVyLmlzSW50ZWdlciB8fCBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIgJiZcbiAgICBpc0Zpbml0ZSh2YWwpICYmXG4gICAgTWF0aC5mbG9vcih2YWwpID09PSB2YWw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBpc0ludGVnZXIgPSByZXF1aXJlKCdpcy1pbnRlZ2VyJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1ZhbGlkTW9udGggKG1vbnRoKSB7XG4gIGlmICh0eXBlb2YgbW9udGggIT09ICdudW1iZXInIHx8ICFpc0ludGVnZXIobW9udGgpKSByZXR1cm4gZmFsc2VcbiAgcmV0dXJuIG1vbnRoID49IDEgJiYgbW9udGggPD0gMTJcbn1cbiIsIi8qIVxuICogSmF2YVNjcmlwdCBDb29raWUgdjIuMi4xXG4gKiBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICpcbiAqIENvcHlyaWdodCAyMDA2LCAyMDE1IEtsYXVzIEhhcnRsICYgRmFnbmVyIEJyYWNrXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuOyhmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHR2YXIgcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyO1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKCFyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIpIHtcblx0XHR2YXIgT2xkQ29va2llcyA9IHdpbmRvdy5Db29raWVzO1xuXHRcdHZhciBhcGkgPSB3aW5kb3cuQ29va2llcyA9IGZhY3RvcnkoKTtcblx0XHRhcGkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5Db29raWVzID0gT2xkQ29va2llcztcblx0XHRcdHJldHVybiBhcGk7XG5cdFx0fTtcblx0fVxufShmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIGV4dGVuZCAoKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHRmb3IgKDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHNbIGkgXTtcblx0XHRcdGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdHJlc3VsdFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVjb2RlIChzKSB7XG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvKCVbMC05QS1aXXsyfSkrL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdH1cblxuXHRmdW5jdGlvbiBpbml0IChjb252ZXJ0ZXIpIHtcblx0XHRmdW5jdGlvbiBhcGkoKSB7fVxuXG5cdFx0ZnVuY3Rpb24gc2V0IChrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGF0dHJpYnV0ZXMgPSBleHRlbmQoe1xuXHRcdFx0XHRwYXRoOiAnLydcblx0XHRcdH0sIGFwaS5kZWZhdWx0cywgYXR0cmlidXRlcyk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpICogMSArIGF0dHJpYnV0ZXMuZXhwaXJlcyAqIDg2NGUrNSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFdlJ3JlIHVzaW5nIFwiZXhwaXJlc1wiIGJlY2F1c2UgXCJtYXgtYWdlXCIgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXHRcdFx0YXR0cmlidXRlcy5leHBpcmVzID0gYXR0cmlidXRlcy5leHBpcmVzID8gYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCkgOiAnJztcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHRcdFx0aWYgKC9eW1xce1xcW10vLnRlc3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdHZhbHVlID0gcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0XHR2YWx1ZSA9IGNvbnZlcnRlci53cml0ZSA/XG5cdFx0XHRcdGNvbnZlcnRlci53cml0ZSh2YWx1ZSwga2V5KSA6XG5cdFx0XHRcdGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmFsdWUpKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDNBfDNDfDNFfDNEfDJGfDNGfDQwfDVCfDVEfDVFfDYwfDdCfDdEfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXG5cdFx0XHRrZXkgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpXG5cdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDVFfDYwfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpXG5cdFx0XHRcdC5yZXBsYWNlKC9bXFwoXFwpXS9nLCBlc2NhcGUpO1xuXG5cdFx0XHR2YXIgc3RyaW5naWZpZWRBdHRyaWJ1dGVzID0gJyc7XG5cdFx0XHRmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0aWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc7ICcgKyBhdHRyaWJ1dGVOYW1lO1xuXHRcdFx0XHRpZiAoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ29uc2lkZXJzIFJGQyA2MjY1IHNlY3Rpb24gNS4yOlxuXHRcdFx0XHQvLyAuLi5cblx0XHRcdFx0Ly8gMy4gIElmIHRoZSByZW1haW5pbmcgdW5wYXJzZWQtYXR0cmlidXRlcyBjb250YWlucyBhICV4M0IgKFwiO1wiKVxuXHRcdFx0XHQvLyAgICAgY2hhcmFjdGVyOlxuXHRcdFx0XHQvLyBDb25zdW1lIHRoZSBjaGFyYWN0ZXJzIG9mIHRoZSB1bnBhcnNlZC1hdHRyaWJ1dGVzIHVwIHRvLFxuXHRcdFx0XHQvLyBub3QgaW5jbHVkaW5nLCB0aGUgZmlyc3QgJXgzQiAoXCI7XCIpIGNoYXJhY3Rlci5cblx0XHRcdFx0Ly8gLi4uXG5cdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnPScgKyBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdLnNwbGl0KCc7JylbMF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoZG9jdW1lbnQuY29va2llID0ga2V5ICsgJz0nICsgdmFsdWUgKyBzdHJpbmdpZmllZEF0dHJpYnV0ZXMpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldCAoa2V5LCBqc29uKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBqYXIgPSB7fTtcblx0XHRcdC8vIFRvIHByZXZlbnQgdGhlIGZvciBsb29wIGluIHRoZSBmaXJzdCBwbGFjZSBhc3NpZ24gYW4gZW1wdHkgYXJyYXlcblx0XHRcdC8vIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNvb2tpZXMgYXQgYWxsLlxuXHRcdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXTtcblx0XHRcdHZhciBpID0gMDtcblxuXHRcdFx0Zm9yICg7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKTtcblx0XHRcdFx0dmFyIGNvb2tpZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJz0nKTtcblxuXHRcdFx0XHRpZiAoIWpzb24gJiYgY29va2llLmNoYXJBdCgwKSA9PT0gJ1wiJykge1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvb2tpZS5zbGljZSgxLCAtMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciBuYW1lID0gZGVjb2RlKHBhcnRzWzBdKTtcblx0XHRcdFx0XHRjb29raWUgPSAoY29udmVydGVyLnJlYWQgfHwgY29udmVydGVyKShjb29raWUsIG5hbWUpIHx8XG5cdFx0XHRcdFx0XHRkZWNvZGUoY29va2llKTtcblxuXHRcdFx0XHRcdGlmIChqc29uKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRjb29raWUgPSBKU09OLnBhcnNlKGNvb2tpZSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGphcltuYW1lXSA9IGNvb2tpZTtcblxuXHRcdFx0XHRcdGlmIChrZXkgPT09IG5hbWUpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGtleSA/IGphcltrZXldIDogamFyO1xuXHRcdH1cblxuXHRcdGFwaS5zZXQgPSBzZXQ7XG5cdFx0YXBpLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCBmYWxzZSAvKiByZWFkIGFzIHJhdyAqLyk7XG5cdFx0fTtcblx0XHRhcGkuZ2V0SlNPTiA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCB0cnVlIC8qIHJlYWQgYXMganNvbiAqLyk7XG5cdFx0fTtcblx0XHRhcGkucmVtb3ZlID0gZnVuY3Rpb24gKGtleSwgYXR0cmlidXRlcykge1xuXHRcdFx0c2V0KGtleSwgJycsIGV4dGVuZChhdHRyaWJ1dGVzLCB7XG5cdFx0XHRcdGV4cGlyZXM6IC0xXG5cdFx0XHR9KSk7XG5cdFx0fTtcblxuXHRcdGFwaS5kZWZhdWx0cyA9IHt9O1xuXG5cdFx0YXBpLndpdGhDb252ZXJ0ZXIgPSBpbml0O1xuXG5cdFx0cmV0dXJuIGFwaTtcblx0fVxuXG5cdHJldHVybiBpbml0KGZ1bmN0aW9uICgpIHt9KTtcbn0pKTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmluZEluZGV4YCBhbmQgYF8uZmluZExhc3RJbmRleGAgd2l0aG91dFxuICogc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlRmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21JbmRleCwgZnJvbVJpZ2h0KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpbmRleCA9IGZyb21JbmRleCArIChmcm9tUmlnaHQgPyAxIDogLTEpO1xuXG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGaW5kSW5kZXg7XG4iLCJ2YXIgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBgXy5maW5kYCBvciBgXy5maW5kTGFzdGAgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZpbmRJbmRleEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGZpbmQgdGhlIGNvbGxlY3Rpb24gaW5kZXguXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmaW5kIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVGaW5kKGZpbmRJbmRleEZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGNvbGxlY3Rpb24sIHByZWRpY2F0ZSwgZnJvbUluZGV4KSB7XG4gICAgdmFyIGl0ZXJhYmxlID0gT2JqZWN0KGNvbGxlY3Rpb24pO1xuICAgIGlmICghaXNBcnJheUxpa2UoY29sbGVjdGlvbikpIHtcbiAgICAgIHZhciBpdGVyYXRlZSA9IGJhc2VJdGVyYXRlZShwcmVkaWNhdGUsIDMpO1xuICAgICAgY29sbGVjdGlvbiA9IGtleXMoY29sbGVjdGlvbik7XG4gICAgICBwcmVkaWNhdGUgPSBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIGl0ZXJhdGVlKGl0ZXJhYmxlW2tleV0sIGtleSwgaXRlcmFibGUpOyB9O1xuICAgIH1cbiAgICB2YXIgaW5kZXggPSBmaW5kSW5kZXhGdW5jKGNvbGxlY3Rpb24sIHByZWRpY2F0ZSwgZnJvbUluZGV4KTtcbiAgICByZXR1cm4gaW5kZXggPiAtMSA/IGl0ZXJhYmxlW2l0ZXJhdGVlID8gY29sbGVjdGlvbltpbmRleF0gOiBpbmRleF0gOiB1bmRlZmluZWQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlRmluZDtcbiIsInZhciBjcmVhdGVGaW5kID0gcmVxdWlyZSgnLi9fY3JlYXRlRmluZCcpLFxuICAgIGZpbmRJbmRleCA9IHJlcXVpcmUoJy4vZmluZEluZGV4Jyk7XG5cbi8qKlxuICogSXRlcmF0ZXMgb3ZlciBlbGVtZW50cyBvZiBgY29sbGVjdGlvbmAsIHJldHVybmluZyB0aGUgZmlyc3QgZWxlbWVudFxuICogYHByZWRpY2F0ZWAgcmV0dXJucyB0cnV0aHkgZm9yLiBUaGUgcHJlZGljYXRlIGlzIGludm9rZWQgd2l0aCB0aHJlZVxuICogYXJndW1lbnRzOiAodmFsdWUsIGluZGV4fGtleSwgY29sbGVjdGlvbikuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcHJlZGljYXRlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2Zyb21JbmRleD0wXSBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWF0Y2hlZCBlbGVtZW50LCBlbHNlIGB1bmRlZmluZWRgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgdXNlcnMgPSBbXG4gKiAgIHsgJ3VzZXInOiAnYmFybmV5JywgICdhZ2UnOiAzNiwgJ2FjdGl2ZSc6IHRydWUgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJywgICAgJ2FnZSc6IDQwLCAnYWN0aXZlJzogZmFsc2UgfSxcbiAqICAgeyAndXNlcic6ICdwZWJibGVzJywgJ2FnZSc6IDEsICAnYWN0aXZlJzogdHJ1ZSB9XG4gKiBdO1xuICpcbiAqIF8uZmluZCh1c2VycywgZnVuY3Rpb24obykgeyByZXR1cm4gby5hZ2UgPCA0MDsgfSk7XG4gKiAvLyA9PiBvYmplY3QgZm9yICdiYXJuZXknXG4gKlxuICogLy8gVGhlIGBfLm1hdGNoZXNgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmluZCh1c2VycywgeyAnYWdlJzogMSwgJ2FjdGl2ZSc6IHRydWUgfSk7XG4gKiAvLyA9PiBvYmplY3QgZm9yICdwZWJibGVzJ1xuICpcbiAqIC8vIFRoZSBgXy5tYXRjaGVzUHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmluZCh1c2VycywgWydhY3RpdmUnLCBmYWxzZV0pO1xuICogLy8gPT4gb2JqZWN0IGZvciAnZnJlZCdcbiAqXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmluZCh1c2VycywgJ2FjdGl2ZScpO1xuICogLy8gPT4gb2JqZWN0IGZvciAnYmFybmV5J1xuICovXG52YXIgZmluZCA9IGNyZWF0ZUZpbmQoZmluZEluZGV4KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmaW5kO1xuIiwidmFyIGJhc2VGaW5kSW5kZXggPSByZXF1aXJlKCcuL19iYXNlRmluZEluZGV4JyksXG4gICAgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi90b0ludGVnZXInKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uZmluZGAgZXhjZXB0IHRoYXQgaXQgcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0XG4gKiBlbGVtZW50IGBwcmVkaWNhdGVgIHJldHVybnMgdHJ1dGh5IGZvciBpbnN0ZWFkIG9mIHRoZSBlbGVtZW50IGl0c2VsZi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDEuMS4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3ByZWRpY2F0ZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtmcm9tSW5kZXg9MF0gVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGZvdW5kIGVsZW1lbnQsIGVsc2UgYC0xYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHVzZXJzID0gW1xuICogICB7ICd1c2VyJzogJ2Jhcm5leScsICAnYWN0aXZlJzogZmFsc2UgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJywgICAgJ2FjdGl2ZSc6IGZhbHNlIH0sXG4gKiAgIHsgJ3VzZXInOiAncGViYmxlcycsICdhY3RpdmUnOiB0cnVlIH1cbiAqIF07XG4gKlxuICogXy5maW5kSW5kZXgodXNlcnMsIGZ1bmN0aW9uKG8pIHsgcmV0dXJuIG8udXNlciA9PSAnYmFybmV5JzsgfSk7XG4gKiAvLyA9PiAwXG4gKlxuICogLy8gVGhlIGBfLm1hdGNoZXNgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmluZEluZGV4KHVzZXJzLCB7ICd1c2VyJzogJ2ZyZWQnLCAnYWN0aXZlJzogZmFsc2UgfSk7XG4gKiAvLyA9PiAxXG4gKlxuICogLy8gVGhlIGBfLm1hdGNoZXNQcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5maW5kSW5kZXgodXNlcnMsIFsnYWN0aXZlJywgZmFsc2VdKTtcbiAqIC8vID0+IDBcbiAqXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmluZEluZGV4KHVzZXJzLCAnYWN0aXZlJyk7XG4gKiAvLyA9PiAyXG4gKi9cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICBpZiAoIWxlbmd0aCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICB2YXIgaW5kZXggPSBmcm9tSW5kZXggPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIoZnJvbUluZGV4KTtcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGluZGV4ID0gbmF0aXZlTWF4KGxlbmd0aCArIGluZGV4LCAwKTtcbiAgfVxuICByZXR1cm4gYmFzZUZpbmRJbmRleChhcnJheSwgYmFzZUl0ZXJhdGVlKHByZWRpY2F0ZSwgMyksIGluZGV4KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmaW5kSW5kZXg7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5yZWR1Y2VgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luaXRBY2N1bV0gU3BlY2lmeSB1c2luZyB0aGUgZmlyc3QgZWxlbWVudCBvZiBgYXJyYXlgIGFzXG4gKiAgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UmVkdWNlKGFycmF5LCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRBY2N1bSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChpbml0QWNjdW0gJiYgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBhcnJheVsrK2luZGV4XTtcbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlSZWR1Y2U7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBpc0ludGVnZXIgPSByZXF1aXJlKCdpcy1pbnRlZ2VyJylcbnZhciBpc0ludGVnZXJSZWdleCA9IC9eLT9cXGQrJC9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUludFN0cmljdCAoaW50ZWdlcikge1xuICBpZiAodHlwZW9mIGludGVnZXIgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGlzSW50ZWdlcihpbnRlZ2VyKSA/IGludGVnZXIgOiB1bmRlZmluZWRcbiAgfVxuICBpZiAodHlwZW9mIGludGVnZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGlzSW50ZWdlclJlZ2V4LnRlc3QoaW50ZWdlcikgPyBwYXJzZUludChpbnRlZ2VyLCAxMCkgOiB1bmRlZmluZWRcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBwYXJzZUludFN0cmljdCA9IHJlcXVpcmUoJ3BhcnNlLWludCcpXG52YXIgZXhwYW5kWWVhciA9IHJlcXVpcmUoJ2V4cGFuZC15ZWFyJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZVllYXIgKHllYXIsIGV4cGFuZCwgbm93KSB7XG4gIHllYXIgPSBwYXJzZUludFN0cmljdCh5ZWFyKVxuICBpZiAoeWVhciA9PSBudWxsKSByZXR1cm5cbiAgaWYgKCFleHBhbmQpIHJldHVybiB5ZWFyXG4gIHJldHVybiBleHBhbmRZZWFyKHllYXIsIG5vdylcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuIiwiLyohIHplcm8tZmlsbC4gTUlUIExpY2Vuc2UuIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZy9vcGVuc291cmNlPiAqL1xuLyoqXG4gKiBHaXZlbiBhIG51bWJlciwgcmV0dXJuIGEgemVyby1maWxsZWQgc3RyaW5nLlxuICogRnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEyNjcyODMvXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHdpZHRoXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG51bWJlclxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHplcm9GaWxsICh3aWR0aCwgbnVtYmVyLCBwYWQpIHtcbiAgaWYgKG51bWJlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChudW1iZXIsIHBhZCkge1xuICAgICAgcmV0dXJuIHplcm9GaWxsKHdpZHRoLCBudW1iZXIsIHBhZClcbiAgICB9XG4gIH1cbiAgaWYgKHBhZCA9PT0gdW5kZWZpbmVkKSBwYWQgPSAnMCdcbiAgd2lkdGggLT0gbnVtYmVyLnRvU3RyaW5nKCkubGVuZ3RoXG4gIGlmICh3aWR0aCA+IDApIHJldHVybiBuZXcgQXJyYXkod2lkdGggKyAoL1xcLi8udGVzdChudW1iZXIpID8gMiA6IDEpKS5qb2luKHBhZCkgKyBudW1iZXJcbiAgcmV0dXJuIG51bWJlciArICcnXG59XG4iXSwic291cmNlUm9vdCI6IiJ9