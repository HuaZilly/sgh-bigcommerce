(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


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

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
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

/***/ "./node_modules/lodash/assignIn.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/assignIn.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * This method is like `_.assign` except that it iterates over own and
 * inherited source properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extend
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assign
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assignIn({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
 */
var assignIn = createAssigner(function(object, source) {
  copyObject(source, keysIn(source), object);
});

module.exports = assignIn;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/extend.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/extend.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./assignIn */ "./node_modules/lodash/assignIn.js");


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
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

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/sticky-js/dist/sticky.compile.js":
/*!*******************************************************!*\
  !*** ./node_modules/sticky-js/dist/sticky.compile.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Sticky.js
 * Library for sticky elements written in vanilla javascript. With this library you can easily set sticky elements on your website. It's also responsive.
 *
 * @version 1.3.0
 * @author Rafal Galus <biuro@rafalgalus.pl>
 * @website https://rgalus.github.io/sticky-js/
 * @repo https://github.com/rgalus/sticky-js
 * @license https://github.com/rgalus/sticky-js/blob/master/LICENSE
 */
var Sticky = /*#__PURE__*/function () {
  /**
   * Sticky instance constructor
   * @constructor
   * @param {string} selector - Selector which we can find elements
   * @param {string} options - Global options for sticky elements (could be overwritten by data-{option}="" attributes)
   */
  function Sticky() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Sticky);

    this.selector = selector;
    this.elements = [];
    this.version = '1.3.0';
    this.vp = this.getViewportSize();
    this.body = document.querySelector('body');
    this.options = {
      wrap: options.wrap || false,
      wrapWith: options.wrapWith || '<span></span>',
      marginTop: options.marginTop || 0,
      marginBottom: options.marginBottom || 0,
      stickyFor: options.stickyFor || 0,
      stickyClass: options.stickyClass || null,
      stickyContainer: options.stickyContainer || 'body'
    };
    this.updateScrollTopPosition = this.updateScrollTopPosition.bind(this);
    this.updateScrollTopPosition();
    window.addEventListener('load', this.updateScrollTopPosition);
    window.addEventListener('scroll', this.updateScrollTopPosition);
    this.run();
  }
  /**
   * Function that waits for page to be fully loaded and then renders & activates every sticky element found with specified selector
   * @function
   */


  _createClass(Sticky, [{
    key: "run",
    value: function run() {
      var _this = this;

      // wait for page to be fully loaded
      var pageLoaded = setInterval(function () {
        if (document.readyState === 'complete') {
          clearInterval(pageLoaded);
          var elements = document.querySelectorAll(_this.selector);

          _this.forEach(elements, function (element) {
            return _this.renderElement(element);
          });
        }
      }, 10);
    }
    /**
     * Function that assign needed variables for sticky element, that are used in future for calculations and other
     * @function
     * @param {node} element - Element to be rendered
     */

  }, {
    key: "renderElement",
    value: function renderElement(element) {
      var _this2 = this;

      // create container for variables needed in future
      element.sticky = {}; // set default variables

      element.sticky.active = false;
      element.sticky.marginTop = parseInt(element.getAttribute('data-margin-top')) || this.options.marginTop;
      element.sticky.marginBottom = parseInt(element.getAttribute('data-margin-bottom')) || this.options.marginBottom;
      element.sticky.stickyFor = parseInt(element.getAttribute('data-sticky-for')) || this.options.stickyFor;
      element.sticky.stickyClass = element.getAttribute('data-sticky-class') || this.options.stickyClass;
      element.sticky.wrap = element.hasAttribute('data-sticky-wrap') ? true : this.options.wrap; // @todo attribute for stickyContainer
      // element.sticky.stickyContainer = element.getAttribute('data-sticky-container') || this.options.stickyContainer;

      element.sticky.stickyContainer = this.options.stickyContainer;
      element.sticky.container = this.getStickyContainer(element);
      element.sticky.container.rect = this.getRectangle(element.sticky.container);
      element.sticky.rect = this.getRectangle(element); // fix when element is image that has not yet loaded and width, height = 0

      if (element.tagName.toLowerCase() === 'img') {
        element.onload = function () {
          return element.sticky.rect = _this2.getRectangle(element);
        };
      }

      if (element.sticky.wrap) {
        this.wrapElement(element);
      } // activate rendered element


      this.activate(element);
    }
    /**
     * Wraps element into placeholder element
     * @function
     * @param {node} element - Element to be wrapped
     */

  }, {
    key: "wrapElement",
    value: function wrapElement(element) {
      element.insertAdjacentHTML('beforebegin', element.getAttribute('data-sticky-wrapWith') || this.options.wrapWith);
      element.previousSibling.appendChild(element);
    }
    /**
     * Function that activates element when specified conditions are met and then initalise events
     * @function
     * @param {node} element - Element to be activated
     */

  }, {
    key: "activate",
    value: function activate(element) {
      if (element.sticky.rect.top + element.sticky.rect.height < element.sticky.container.rect.top + element.sticky.container.rect.height && element.sticky.stickyFor < this.vp.width && !element.sticky.active) {
        element.sticky.active = true;
      }

      if (this.elements.indexOf(element) < 0) {
        this.elements.push(element);
      }

      if (!element.sticky.resizeEvent) {
        this.initResizeEvents(element);
        element.sticky.resizeEvent = true;
      }

      if (!element.sticky.scrollEvent) {
        this.initScrollEvents(element);
        element.sticky.scrollEvent = true;
      }

      this.setPosition(element);
    }
    /**
     * Function which is adding onResizeEvents to window listener and assigns function to element as resizeListener
     * @function
     * @param {node} element - Element for which resize events are initialised
     */

  }, {
    key: "initResizeEvents",
    value: function initResizeEvents(element) {
      var _this3 = this;

      element.sticky.resizeListener = function () {
        return _this3.onResizeEvents(element);
      };

      window.addEventListener('resize', element.sticky.resizeListener);
    }
    /**
     * Removes element listener from resize event
     * @function
     * @param {node} element - Element from which listener is deleted
     */

  }, {
    key: "destroyResizeEvents",
    value: function destroyResizeEvents(element) {
      window.removeEventListener('resize', element.sticky.resizeListener);
    }
    /**
     * Function which is fired when user resize window. It checks if element should be activated or deactivated and then run setPosition function
     * @function
     * @param {node} element - Element for which event function is fired
     */

  }, {
    key: "onResizeEvents",
    value: function onResizeEvents(element) {
      this.vp = this.getViewportSize();
      element.sticky.rect = this.getRectangle(element);
      element.sticky.container.rect = this.getRectangle(element.sticky.container);

      if (element.sticky.rect.top + element.sticky.rect.height < element.sticky.container.rect.top + element.sticky.container.rect.height && element.sticky.stickyFor < this.vp.width && !element.sticky.active) {
        element.sticky.active = true;
      } else if (element.sticky.rect.top + element.sticky.rect.height >= element.sticky.container.rect.top + element.sticky.container.rect.height || element.sticky.stickyFor >= this.vp.width && element.sticky.active) {
        element.sticky.active = false;
      }

      this.setPosition(element);
    }
    /**
     * Function which is adding onScrollEvents to window listener and assigns function to element as scrollListener
     * @function
     * @param {node} element - Element for which scroll events are initialised
     */

  }, {
    key: "initScrollEvents",
    value: function initScrollEvents(element) {
      var _this4 = this;

      element.sticky.scrollListener = function () {
        return _this4.onScrollEvents(element);
      };

      window.addEventListener('scroll', element.sticky.scrollListener);
    }
    /**
     * Removes element listener from scroll event
     * @function
     * @param {node} element - Element from which listener is deleted
     */

  }, {
    key: "destroyScrollEvents",
    value: function destroyScrollEvents(element) {
      window.removeEventListener('scroll', element.sticky.scrollListener);
    }
    /**
     * Function which is fired when user scroll window. If element is active, function is invoking setPosition function
     * @function
     * @param {node} element - Element for which event function is fired
     */

  }, {
    key: "onScrollEvents",
    value: function onScrollEvents(element) {
      if (element.sticky && element.sticky.active) {
        this.setPosition(element);
      }
    }
    /**
     * Main function for the library. Here are some condition calculations and css appending for sticky element when user scroll window
     * @function
     * @param {node} element - Element that will be positioned if it's active
     */

  }, {
    key: "setPosition",
    value: function setPosition(element) {
      this.css(element, {
        position: '',
        width: '',
        top: '',
        left: ''
      });

      if (this.vp.height < element.sticky.rect.height || !element.sticky.active) {
        return;
      }

      if (!element.sticky.rect.width) {
        element.sticky.rect = this.getRectangle(element);
      }

      if (element.sticky.wrap) {
        this.css(element.parentNode, {
          display: 'block',
          width: element.sticky.rect.width + 'px',
          height: element.sticky.rect.height + 'px'
        });
      }

      if (element.sticky.rect.top === 0 && element.sticky.container === this.body) {
        this.css(element, {
          position: 'fixed',
          top: element.sticky.rect.top + 'px',
          left: element.sticky.rect.left + 'px',
          width: element.sticky.rect.width + 'px'
        });

        if (element.sticky.stickyClass) {
          element.classList.add(element.sticky.stickyClass);
        }
      } else if (this.scrollTop > element.sticky.rect.top - element.sticky.marginTop) {
        this.css(element, {
          position: 'fixed',
          width: element.sticky.rect.width + 'px',
          left: element.sticky.rect.left + 'px'
        });

        if (this.scrollTop + element.sticky.rect.height + element.sticky.marginTop > element.sticky.container.rect.top + element.sticky.container.offsetHeight - element.sticky.marginBottom) {
          if (element.sticky.stickyClass) {
            element.classList.remove(element.sticky.stickyClass);
          }

          this.css(element, {
            top: element.sticky.container.rect.top + element.sticky.container.offsetHeight - (this.scrollTop + element.sticky.rect.height + element.sticky.marginBottom) + 'px'
          });
        } else {
          if (element.sticky.stickyClass) {
            element.classList.add(element.sticky.stickyClass);
          }

          this.css(element, {
            top: element.sticky.marginTop + 'px'
          });
        }
      } else {
        if (element.sticky.stickyClass) {
          element.classList.remove(element.sticky.stickyClass);
        }

        this.css(element, {
          position: '',
          width: '',
          top: '',
          left: ''
        });

        if (element.sticky.wrap) {
          this.css(element.parentNode, {
            display: '',
            width: '',
            height: ''
          });
        }
      }
    }
    /**
     * Function that updates element sticky rectangle (with sticky container), then activate or deactivate element, then update position if it's active
     * @function
     */

  }, {
    key: "update",
    value: function update() {
      var _this5 = this;

      this.forEach(this.elements, function (element) {
        element.sticky.rect = _this5.getRectangle(element);
        element.sticky.container.rect = _this5.getRectangle(element.sticky.container);

        _this5.activate(element);

        _this5.setPosition(element);
      });
    }
    /**
     * Destroys sticky element, remove listeners
     * @function
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var _this6 = this;

      window.removeEventListener('load', this.updateScrollTopPosition);
      window.removeEventListener('scroll', this.updateScrollTopPosition);
      this.forEach(this.elements, function (element) {
        _this6.destroyResizeEvents(element);

        _this6.destroyScrollEvents(element);

        delete element.sticky;
      });
    }
    /**
     * Function that returns container element in which sticky element is stuck (if is not specified, then it's stuck to body)
     * @function
     * @param {node} element - Element which sticky container are looked for
     * @return {node} element - Sticky container
     */

  }, {
    key: "getStickyContainer",
    value: function getStickyContainer(element) {
      var container = element.parentNode;

      while (!container.hasAttribute('data-sticky-container') && !container.parentNode.querySelector(element.sticky.stickyContainer) && container !== this.body) {
        container = container.parentNode;
      }

      return container;
    }
    /**
     * Function that returns element rectangle & position (width, height, top, left)
     * @function
     * @param {node} element - Element which position & rectangle are returned
     * @return {object}
     */

  }, {
    key: "getRectangle",
    value: function getRectangle(element) {
      this.css(element, {
        position: '',
        width: '',
        top: '',
        left: ''
      });
      var width = Math.max(element.offsetWidth, element.clientWidth, element.scrollWidth);
      var height = Math.max(element.offsetHeight, element.clientHeight, element.scrollHeight);
      var top = 0;
      var left = 0;

      do {
        top += element.offsetTop || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
      } while (element);

      return {
        top: top,
        left: left,
        width: width,
        height: height
      };
    }
    /**
     * Function that returns viewport dimensions
     * @function
     * @return {object}
     */

  }, {
    key: "getViewportSize",
    value: function getViewportSize() {
      return {
        width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      };
    }
    /**
     * Function that updates window scroll position
     * @function
     * @return {number}
     */

  }, {
    key: "updateScrollTopPosition",
    value: function updateScrollTopPosition() {
      this.scrollTop = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0) || 0;
    }
    /**
     * Helper function for loops
     * @helper
     * @param {array}
     * @param {function} callback - Callback function (no need for explanation)
     */

  }, {
    key: "forEach",
    value: function forEach(array, callback) {
      for (var i = 0, len = array.length; i < len; i++) {
        callback(array[i]);
      }
    }
    /**
     * Helper function to add/remove css properties for specified element.
     * @helper
     * @param {node} element - DOM element
     * @param {object} properties - CSS properties that will be added/removed from specified element
     */

  }, {
    key: "css",
    value: function css(element, properties) {
      for (var property in properties) {
        if (properties.hasOwnProperty(property)) {
          element.style[property] = properties[property];
        }
      }
    }
  }]);

  return Sticky;
}();
/**
 * Export function that supports AMD, CommonJS and Plain Browser.
 */


(function (root, factory) {
  if (true) {
    module.exports = factory;
  } else {}
})(this, Sticky);

/***/ }),

/***/ "./node_modules/sticky-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/sticky-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var Sticky = __webpack_require__(/*! ./dist/sticky.compile.js */ "./node_modules/sticky-js/dist/sticky.compile.js");

module.exports = Sticky;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanMtY29va2llL3NyYy9qcy5jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXBwbHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNzaWduVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnblZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcHlPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQXNzaWduZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNJdGVyYXRlZUNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlclJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2Fzc2lnbkluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZXEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2tleXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3RpY2t5LWpzL2Rpc3Qvc3RpY2t5LmNvbXBpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0aWNreS1qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLHNCQUFzQixtQkFBTyxDQUFDLGtFQUFjO0FBQzVDLGlCQUFpQixtQkFBTyxDQUFDLDBFQUFrQjs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNQYTtBQUNiLFVBQVUsbUJBQU8sQ0FBQyxzREFBUTtBQUMxQixjQUFjLG1CQUFPLENBQUMsNERBQVc7QUFDakMsZUFBZSxtQkFBTyxDQUFDLGtFQUFjO0FBQ3JDLFdBQVcsbUJBQU8sQ0FBQyxrRUFBYztBQUNqQyxrQkFBa0IsbUJBQU8sQ0FBQywwRUFBa0I7QUFDNUMsZUFBZSxtQkFBTyxDQUFDLGtFQUFjO0FBQ3JDLHFCQUFxQixtQkFBTyxDQUFDLDhFQUFvQjtBQUNqRCxnQkFBZ0IsbUJBQU8sQ0FBQyw4RkFBNEI7O0FBRXBELGlDQUFpQyxtQkFBTyxDQUFDLHNFQUFnQixtQkFBbUIsa0JBQWtCLEVBQUU7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsZ0NBQWdDO0FBQ3ZGO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQ0FBa0MsZ0JBQWdCO0FBQ2xEO0FBQ0E7QUFDQTtB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O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdHQUFnRztBQUNoRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsS0FBSztBQUNwQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsS0FBSztBQUNwQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsS0FBSztBQUNwQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxLQUFLO0FBQ3BCLGdCQUFnQixLQUFLO0FBQ3JCOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEIsZ0JBQWdCO0FBQ2hCOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixlQUFlLFNBQVM7QUFDeEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQSx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEIsZUFBZSxPQUFPO0FBQ3RCOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsTUFBTSxJQUE4QjtBQUNwQztBQUNBLEdBQUcsTUFBTSxFQU1OO0FBQ0gsQ0FBQyxnQjs7Ozs7Ozs7Ozs7O0FDL2VELGFBQWEsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRS9DOzs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgaW5kZXgsIHZhbHVlKSB7XG4gIGlmIChpbmRleCBpbiBvYmplY3QpICRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikgeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgbWFwZm4gPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKE8pO1xuICAgIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYgKG1hcHBpbmcpIG1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYgKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKSB7XG4gICAgICBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDKCk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvciAocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsIi8qIVxuICogSmF2YVNjcmlwdCBDb29raWUgdjIuMi4xXG4gKiBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICpcbiAqIENvcHlyaWdodCAyMDA2LCAyMDE1IEtsYXVzIEhhcnRsICYgRmFnbmVyIEJyYWNrXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuOyhmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHR2YXIgcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyO1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKCFyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIpIHtcblx0XHR2YXIgT2xkQ29va2llcyA9IHdpbmRvdy5Db29raWVzO1xuXHRcdHZhciBhcGkgPSB3aW5kb3cuQ29va2llcyA9IGZhY3RvcnkoKTtcblx0XHRhcGkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5Db29raWVzID0gT2xkQ29va2llcztcblx0XHRcdHJldHVybiBhcGk7XG5cdFx0fTtcblx0fVxufShmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIGV4dGVuZCAoKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHRmb3IgKDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHNbIGkgXTtcblx0XHRcdGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdHJlc3VsdFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVjb2RlIChzKSB7XG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvKCVbMC05QS1aXXsyfSkrL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdH1cblxuXHRmdW5jdGlvbiBpbml0IChjb252ZXJ0ZXIpIHtcblx0XHRmdW5jdGlvbiBhcGkoKSB7fVxuXG5cdFx0ZnVuY3Rpb24gc2V0IChrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGF0dHJpYnV0ZXMgPSBleHRlbmQoe1xuXHRcdFx0XHRwYXRoOiAnLydcblx0XHRcdH0sIGFwaS5kZWZhdWx0cywgYXR0cmlidXRlcyk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpICogMSArIGF0dHJpYnV0ZXMuZXhwaXJlcyAqIDg2NGUrNSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFdlJ3JlIHVzaW5nIFwiZXhwaXJlc1wiIGJlY2F1c2UgXCJtYXgtYWdlXCIgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXHRcdFx0YXR0cmlidXRlcy5leHBpcmVzID0gYXR0cmlidXRlcy5leHBpcmVzID8gYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCkgOiAnJztcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHRcdFx0aWYgKC9eW1xce1xcW10vLnRlc3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdHZhbHVlID0gcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0XHR2YWx1ZSA9IGNvbnZlcnRlci53cml0ZSA/XG5cdFx0XHRcdGNvbnZlcnRlci53cml0ZSh2YWx1ZSwga2V5KSA6XG5cdFx0XHRcdGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmFsdWUpKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDNBfDNDfDNFfDNEfDJGfDNGfDQwfDVCfDVEfDVFfDYwfDdCfDdEfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXG5cdFx0XHRrZXkgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpXG5cdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDVFfDYwfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpXG5cdFx0XHRcdC5yZXBsYWNlKC9bXFwoXFwpXS9nLCBlc2NhcGUpO1xuXG5cdFx0XHR2YXIgc3RyaW5naWZpZWRBdHRyaWJ1dGVzID0gJyc7XG5cdFx0XHRmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0aWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc7ICcgKyBhdHRyaWJ1dGVOYW1lO1xuXHRcdFx0XHRpZiAoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ29uc2lkZXJzIFJGQyA2MjY1IHNlY3Rpb24gNS4yOlxuXHRcdFx0XHQvLyAuLi5cblx0XHRcdFx0Ly8gMy4gIElmIHRoZSByZW1haW5pbmcgdW5wYXJzZWQtYXR0cmlidXRlcyBjb250YWlucyBhICV4M0IgKFwiO1wiKVxuXHRcdFx0XHQvLyAgICAgY2hhcmFjdGVyOlxuXHRcdFx0XHQvLyBDb25zdW1lIHRoZSBjaGFyYWN0ZXJzIG9mIHRoZSB1bnBhcnNlZC1hdHRyaWJ1dGVzIHVwIHRvLFxuXHRcdFx0XHQvLyBub3QgaW5jbHVkaW5nLCB0aGUgZmlyc3QgJXgzQiAoXCI7XCIpIGNoYXJhY3Rlci5cblx0XHRcdFx0Ly8gLi4uXG5cdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnPScgKyBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdLnNwbGl0KCc7JylbMF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoZG9jdW1lbnQuY29va2llID0ga2V5ICsgJz0nICsgdmFsdWUgKyBzdHJpbmdpZmllZEF0dHJpYnV0ZXMpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldCAoa2V5LCBqc29uKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBqYXIgPSB7fTtcblx0XHRcdC8vIFRvIHByZXZlbnQgdGhlIGZvciBsb29wIGluIHRoZSBmaXJzdCBwbGFjZSBhc3NpZ24gYW4gZW1wdHkgYXJyYXlcblx0XHRcdC8vIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNvb2tpZXMgYXQgYWxsLlxuXHRcdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXTtcblx0XHRcdHZhciBpID0gMDtcblxuXHRcdFx0Zm9yICg7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKTtcblx0XHRcdFx0dmFyIGNvb2tpZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJz0nKTtcblxuXHRcdFx0XHRpZiAoIWpzb24gJiYgY29va2llLmNoYXJBdCgwKSA9PT0gJ1wiJykge1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvb2tpZS5zbGljZSgxLCAtMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciBuYW1lID0gZGVjb2RlKHBhcnRzWzBdKTtcblx0XHRcdFx0XHRjb29raWUgPSAoY29udmVydGVyLnJlYWQgfHwgY29udmVydGVyKShjb29raWUsIG5hbWUpIHx8XG5cdFx0XHRcdFx0XHRkZWNvZGUoY29va2llKTtcblxuXHRcdFx0XHRcdGlmIChqc29uKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRjb29raWUgPSBKU09OLnBhcnNlKGNvb2tpZSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGphcltuYW1lXSA9IGNvb2tpZTtcblxuXHRcdFx0XHRcdGlmIChrZXkgPT09IG5hbWUpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGtleSA/IGphcltrZXldIDogamFyO1xuXHRcdH1cblxuXHRcdGFwaS5zZXQgPSBzZXQ7XG5cdFx0YXBpLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCBmYWxzZSAvKiByZWFkIGFzIHJhdyAqLyk7XG5cdFx0fTtcblx0XHRhcGkuZ2V0SlNPTiA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCB0cnVlIC8qIHJlYWQgYXMganNvbiAqLyk7XG5cdFx0fTtcblx0XHRhcGkucmVtb3ZlID0gZnVuY3Rpb24gKGtleSwgYXR0cmlidXRlcykge1xuXHRcdFx0c2V0KGtleSwgJycsIGV4dGVuZChhdHRyaWJ1dGVzLCB7XG5cdFx0XHRcdGV4cGlyZXM6IC0xXG5cdFx0XHR9KSk7XG5cdFx0fTtcblxuXHRcdGFwaS5kZWZhdWx0cyA9IHt9O1xuXG5cdFx0YXBpLndpdGhDb252ZXJ0ZXIgPSBpbml0O1xuXG5cdFx0cmV0dXJuIGFwaTtcblx0fVxuXG5cdHJldHVybiBpbml0KGZ1bmN0aW9uICgpIHt9KTtcbn0pKTtcbiIsIi8qKlxuICogQSBmYXN0ZXIgYWx0ZXJuYXRpdmUgdG8gYEZ1bmN0aW9uI2FwcGx5YCwgdGhpcyBmdW5jdGlvbiBpbnZva2VzIGBmdW5jYFxuICogd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgYHRoaXNBcmdgIGFuZCB0aGUgYXJndW1lbnRzIG9mIGBhcmdzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaW52b2tlLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRoZSBhcmd1bWVudHMgdG8gaW52b2tlIGBmdW5jYCB3aXRoLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpIHtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnKTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgfVxuICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcHBseTtcbiIsInZhciBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25WYWx1ZTtcbiIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2RlZmluZVByb3BlcnR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGFzc2lnblZhbHVlYCBhbmQgYGFzc2lnbk1lcmdlVmFsdWVgIHdpdGhvdXRcbiAqIHZhbHVlIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycgJiYgZGVmaW5lUHJvcGVydHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIGtleSwge1xuICAgICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgICAnZW51bWVyYWJsZSc6IHRydWUsXG4gICAgICAndmFsdWUnOiB2YWx1ZSxcbiAgICAgICd3cml0YWJsZSc6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnblZhbHVlO1xuIiwidmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpLFxuICAgIG92ZXJSZXN0ID0gcmVxdWlyZSgnLi9fb3ZlclJlc3QnKSxcbiAgICBzZXRUb1N0cmluZyA9IHJlcXVpcmUoJy4vX3NldFRvU3RyaW5nJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucmVzdGAgd2hpY2ggZG9lc24ndCB2YWxpZGF0ZSBvciBjb2VyY2UgYXJndW1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VSZXN0KGZ1bmMsIHN0YXJ0KSB7XG4gIHJldHVybiBzZXRUb1N0cmluZyhvdmVyUmVzdChmdW5jLCBzdGFydCwgaWRlbnRpdHkpLCBmdW5jICsgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VSZXN0O1xuIiwidmFyIGFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduVmFsdWUnKSxcbiAgICBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKTtcblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGlzTmV3ID0gIW9iamVjdDtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5ld1ZhbHVlID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIGlmIChpc05ldykge1xuICAgICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weU9iamVjdDtcbiIsInZhciBiYXNlUmVzdCA9IHJlcXVpcmUoJy4vX2Jhc2VSZXN0JyksXG4gICAgaXNJdGVyYXRlZUNhbGwgPSByZXF1aXJlKCcuL19pc0l0ZXJhdGVlQ2FsbCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLmFzc2lnbmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFzc2lnbmVyIFRoZSBmdW5jdGlvbiB0byBhc3NpZ24gdmFsdWVzLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYXNzaWduZXIgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFzc2lnbmVyKGFzc2lnbmVyKSB7XG4gIHJldHVybiBiYXNlUmVzdChmdW5jdGlvbihvYmplY3QsIHNvdXJjZXMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gc291cmNlcy5sZW5ndGgsXG4gICAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPiAxID8gc291cmNlc1tsZW5ndGggLSAxXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgZ3VhcmQgPSBsZW5ndGggPiAyID8gc291cmNlc1syXSA6IHVuZGVmaW5lZDtcblxuICAgIGN1c3RvbWl6ZXIgPSAoYXNzaWduZXIubGVuZ3RoID4gMyAmJiB0eXBlb2YgY3VzdG9taXplciA9PSAnZnVuY3Rpb24nKVxuICAgICAgPyAobGVuZ3RoLS0sIGN1c3RvbWl6ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChndWFyZCAmJiBpc0l0ZXJhdGVlQ2FsbChzb3VyY2VzWzBdLCBzb3VyY2VzWzFdLCBndWFyZCkpIHtcbiAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPCAzID8gdW5kZWZpbmVkIDogY3VzdG9taXplcjtcbiAgICAgIGxlbmd0aCA9IDE7XG4gICAgfVxuICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgc291cmNlID0gc291cmNlc1tpbmRleF07XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGFzc2lnbmVyKG9iamVjdCwgc291cmNlLCBpbmRleCwgY3VzdG9taXplcik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUFzc2lnbmVyO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0eTtcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcbiIsInZhciBhcHBseSA9IHJlcXVpcmUoJy4vX2FwcGx5Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VSZXN0YCB3aGljaCB0cmFuc2Zvcm1zIHRoZSByZXN0IGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSByZXN0IGFycmF5IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyUmVzdChmdW5jLCBzdGFydCwgdHJhbnNmb3JtKSB7XG4gIHN0YXJ0ID0gbmF0aXZlTWF4KHN0YXJ0ID09PSB1bmRlZmluZWQgPyAoZnVuYy5sZW5ndGggLSAxKSA6IHN0YXJ0LCAwKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBuYXRpdmVNYXgoYXJncy5sZW5ndGggLSBzdGFydCwgMCksXG4gICAgICAgIGFycmF5ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBhcnJheVtpbmRleF0gPSBhcmdzW3N0YXJ0ICsgaW5kZXhdO1xuICAgIH1cbiAgICBpbmRleCA9IC0xO1xuICAgIHZhciBvdGhlckFyZ3MgPSBBcnJheShzdGFydCArIDEpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgc3RhcnQpIHtcbiAgICAgIG90aGVyQXJnc1tpbmRleF0gPSBhcmdzW2luZGV4XTtcbiAgICB9XG4gICAgb3RoZXJBcmdzW3N0YXJ0XSA9IHRyYW5zZm9ybShhcnJheSk7XG4gICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXMsIG90aGVyQXJncyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlclJlc3Q7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgY3JlYXRlQXNzaWduZXIgPSByZXF1aXJlKCcuL19jcmVhdGVBc3NpZ25lcicpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5hc3NpZ25gIGV4Y2VwdCB0aGF0IGl0IGl0ZXJhdGVzIG92ZXIgb3duIGFuZFxuICogaW5oZXJpdGVkIHNvdXJjZSBwcm9wZXJ0aWVzLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBhbGlhcyBleHRlbmRcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7Li4uT2JqZWN0fSBbc291cmNlc10gVGhlIHNvdXJjZSBvYmplY3RzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBzZWUgXy5hc3NpZ25cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIGZ1bmN0aW9uIEJhcigpIHtcbiAqICAgdGhpcy5jID0gMztcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmIgPSAyO1xuICogQmFyLnByb3RvdHlwZS5kID0gNDtcbiAqXG4gKiBfLmFzc2lnbkluKHsgJ2EnOiAwIH0sIG5ldyBGb28sIG5ldyBCYXIpO1xuICogLy8gPT4geyAnYSc6IDEsICdiJzogMiwgJ2MnOiAzLCAnZCc6IDQgfVxuICovXG52YXIgYXNzaWduSW4gPSBjcmVhdGVBc3NpZ25lcihmdW5jdGlvbihvYmplY3QsIHNvdXJjZSkge1xuICBjb3B5T2JqZWN0KHNvdXJjZSwga2V5c0luKHNvdXJjZSksIG9iamVjdCk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25JbjtcbiIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Fzc2lnbkluJyk7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5c0luO1xuIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG4vKipcbiAqIFN0aWNreS5qc1xuICogTGlicmFyeSBmb3Igc3RpY2t5IGVsZW1lbnRzIHdyaXR0ZW4gaW4gdmFuaWxsYSBqYXZhc2NyaXB0LiBXaXRoIHRoaXMgbGlicmFyeSB5b3UgY2FuIGVhc2lseSBzZXQgc3RpY2t5IGVsZW1lbnRzIG9uIHlvdXIgd2Vic2l0ZS4gSXQncyBhbHNvIHJlc3BvbnNpdmUuXG4gKlxuICogQHZlcnNpb24gMS4zLjBcbiAqIEBhdXRob3IgUmFmYWwgR2FsdXMgPGJpdXJvQHJhZmFsZ2FsdXMucGw+XG4gKiBAd2Vic2l0ZSBodHRwczovL3JnYWx1cy5naXRodWIuaW8vc3RpY2t5LWpzL1xuICogQHJlcG8gaHR0cHM6Ly9naXRodWIuY29tL3JnYWx1cy9zdGlja3ktanNcbiAqIEBsaWNlbnNlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZ2FsdXMvc3RpY2t5LWpzL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xudmFyIFN0aWNreSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBTdGlja3kgaW5zdGFuY2UgY29uc3RydWN0b3JcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAtIFNlbGVjdG9yIHdoaWNoIHdlIGNhbiBmaW5kIGVsZW1lbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zIC0gR2xvYmFsIG9wdGlvbnMgZm9yIHN0aWNreSBlbGVtZW50cyAoY291bGQgYmUgb3ZlcndyaXR0ZW4gYnkgZGF0YS17b3B0aW9ufT1cIlwiIGF0dHJpYnV0ZXMpXG4gICAqL1xuICBmdW5jdGlvbiBTdGlja3koKSB7XG4gICAgdmFyIHNlbGVjdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RpY2t5KTtcblxuICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICB0aGlzLmVsZW1lbnRzID0gW107XG4gICAgdGhpcy52ZXJzaW9uID0gJzEuMy4wJztcbiAgICB0aGlzLnZwID0gdGhpcy5nZXRWaWV3cG9ydFNpemUoKTtcbiAgICB0aGlzLmJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgd3JhcDogb3B0aW9ucy53cmFwIHx8IGZhbHNlLFxuICAgICAgd3JhcFdpdGg6IG9wdGlvbnMud3JhcFdpdGggfHwgJzxzcGFuPjwvc3Bhbj4nLFxuICAgICAgbWFyZ2luVG9wOiBvcHRpb25zLm1hcmdpblRvcCB8fCAwLFxuICAgICAgbWFyZ2luQm90dG9tOiBvcHRpb25zLm1hcmdpbkJvdHRvbSB8fCAwLFxuICAgICAgc3RpY2t5Rm9yOiBvcHRpb25zLnN0aWNreUZvciB8fCAwLFxuICAgICAgc3RpY2t5Q2xhc3M6IG9wdGlvbnMuc3RpY2t5Q2xhc3MgfHwgbnVsbCxcbiAgICAgIHN0aWNreUNvbnRhaW5lcjogb3B0aW9ucy5zdGlja3lDb250YWluZXIgfHwgJ2JvZHknXG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZVNjcm9sbFRvcFBvc2l0aW9uID0gdGhpcy51cGRhdGVTY3JvbGxUb3BQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlU2Nyb2xsVG9wUG9zaXRpb24oKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRoaXMudXBkYXRlU2Nyb2xsVG9wUG9zaXRpb24pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnVwZGF0ZVNjcm9sbFRvcFBvc2l0aW9uKTtcbiAgICB0aGlzLnJ1bigpO1xuICB9XG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IHdhaXRzIGZvciBwYWdlIHRvIGJlIGZ1bGx5IGxvYWRlZCBhbmQgdGhlbiByZW5kZXJzICYgYWN0aXZhdGVzIGV2ZXJ5IHN0aWNreSBlbGVtZW50IGZvdW5kIHdpdGggc3BlY2lmaWVkIHNlbGVjdG9yXG4gICAqIEBmdW5jdGlvblxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhTdGlja3ksIFt7XG4gICAga2V5OiBcInJ1blwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBydW4oKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAvLyB3YWl0IGZvciBwYWdlIHRvIGJlIGZ1bGx5IGxvYWRlZFxuICAgICAgdmFyIHBhZ2VMb2FkZWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChwYWdlTG9hZGVkKTtcbiAgICAgICAgICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKF90aGlzLnNlbGVjdG9yKTtcblxuICAgICAgICAgIF90aGlzLmZvckVhY2goZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMucmVuZGVyRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwgMTApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IGFzc2lnbiBuZWVkZWQgdmFyaWFibGVzIGZvciBzdGlja3kgZWxlbWVudCwgdGhhdCBhcmUgdXNlZCBpbiBmdXR1cmUgZm9yIGNhbGN1bGF0aW9ucyBhbmQgb3RoZXJcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge25vZGV9IGVsZW1lbnQgLSBFbGVtZW50IHRvIGJlIHJlbmRlcmVkXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJFbGVtZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIC8vIGNyZWF0ZSBjb250YWluZXIgZm9yIHZhcmlhYmxlcyBuZWVkZWQgaW4gZnV0dXJlXG4gICAgICBlbGVtZW50LnN0aWNreSA9IHt9OyAvLyBzZXQgZGVmYXVsdCB2YXJpYWJsZXNcblxuICAgICAgZWxlbWVudC5zdGlja3kuYWN0aXZlID0gZmFsc2U7XG4gICAgICBlbGVtZW50LnN0aWNreS5tYXJnaW5Ub3AgPSBwYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1tYXJnaW4tdG9wJykpIHx8IHRoaXMub3B0aW9ucy5tYXJnaW5Ub3A7XG4gICAgICBlbGVtZW50LnN0aWNreS5tYXJnaW5Cb3R0b20gPSBwYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1tYXJnaW4tYm90dG9tJykpIHx8IHRoaXMub3B0aW9ucy5tYXJnaW5Cb3R0b207XG4gICAgICBlbGVtZW50LnN0aWNreS5zdGlja3lGb3IgPSBwYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zdGlja3ktZm9yJykpIHx8IHRoaXMub3B0aW9ucy5zdGlja3lGb3I7XG4gICAgICBlbGVtZW50LnN0aWNreS5zdGlja3lDbGFzcyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0aWNreS1jbGFzcycpIHx8IHRoaXMub3B0aW9ucy5zdGlja3lDbGFzcztcbiAgICAgIGVsZW1lbnQuc3RpY2t5LndyYXAgPSBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1zdGlja3ktd3JhcCcpID8gdHJ1ZSA6IHRoaXMub3B0aW9ucy53cmFwOyAvLyBAdG9kbyBhdHRyaWJ1dGUgZm9yIHN0aWNreUNvbnRhaW5lclxuICAgICAgLy8gZWxlbWVudC5zdGlja3kuc3RpY2t5Q29udGFpbmVyID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RpY2t5LWNvbnRhaW5lcicpIHx8IHRoaXMub3B0aW9ucy5zdGlja3lDb250YWluZXI7XG5cbiAgICAgIGVsZW1lbnQuc3RpY2t5LnN0aWNreUNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5zdGlja3lDb250YWluZXI7XG4gICAgICBlbGVtZW50LnN0aWNreS5jb250YWluZXIgPSB0aGlzLmdldFN0aWNreUNvbnRhaW5lcihlbGVtZW50KTtcbiAgICAgIGVsZW1lbnQuc3RpY2t5LmNvbnRhaW5lci5yZWN0ID0gdGhpcy5nZXRSZWN0YW5nbGUoZWxlbWVudC5zdGlja3kuY29udGFpbmVyKTtcbiAgICAgIGVsZW1lbnQuc3RpY2t5LnJlY3QgPSB0aGlzLmdldFJlY3RhbmdsZShlbGVtZW50KTsgLy8gZml4IHdoZW4gZWxlbWVudCBpcyBpbWFnZSB0aGF0IGhhcyBub3QgeWV0IGxvYWRlZCBhbmQgd2lkdGgsIGhlaWdodCA9IDBcblxuICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW1nJykge1xuICAgICAgICBlbGVtZW50Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudC5zdGlja3kucmVjdCA9IF90aGlzMi5nZXRSZWN0YW5nbGUoZWxlbWVudCk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50LnN0aWNreS53cmFwKSB7XG4gICAgICAgIHRoaXMud3JhcEVsZW1lbnQoZWxlbWVudCk7XG4gICAgICB9IC8vIGFjdGl2YXRlIHJlbmRlcmVkIGVsZW1lbnRcblxuXG4gICAgICB0aGlzLmFjdGl2YXRlKGVsZW1lbnQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXcmFwcyBlbGVtZW50IGludG8gcGxhY2Vob2xkZXIgZWxlbWVudFxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7bm9kZX0gZWxlbWVudCAtIEVsZW1lbnQgdG8gYmUgd3JhcHBlZFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwid3JhcEVsZW1lbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gd3JhcEVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWJlZ2luJywgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RpY2t5LXdyYXBXaXRoJykgfHwgdGhpcy5vcHRpb25zLndyYXBXaXRoKTtcbiAgICAgIGVsZW1lbnQucHJldmlvdXNTaWJsaW5nLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IGFjdGl2YXRlcyBlbGVtZW50IHdoZW4gc3BlY2lmaWVkIGNvbmRpdGlvbnMgYXJlIG1ldCBhbmQgdGhlbiBpbml0YWxpc2UgZXZlbnRzXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtub2RlfSBlbGVtZW50IC0gRWxlbWVudCB0byBiZSBhY3RpdmF0ZWRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFjdGl2YXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFjdGl2YXRlKGVsZW1lbnQpIHtcbiAgICAgIGlmIChlbGVtZW50LnN0aWNreS5yZWN0LnRvcCArIGVsZW1lbnQuc3RpY2t5LnJlY3QuaGVpZ2h0IDwgZWxlbWVudC5zdGlja3kuY29udGFpbmVyLnJlY3QudG9wICsgZWxlbWVudC5zdGlja3kuY29udGFpbmVyLnJlY3QuaGVpZ2h0ICYmIGVsZW1lbnQuc3RpY2t5LnN0aWNreUZvciA8IHRoaXMudnAud2lkdGggJiYgIWVsZW1lbnQuc3RpY2t5LmFjdGl2ZSkge1xuICAgICAgICBlbGVtZW50LnN0aWNreS5hY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5lbGVtZW50cy5pbmRleE9mKGVsZW1lbnQpIDwgMCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghZWxlbWVudC5zdGlja3kucmVzaXplRXZlbnQpIHtcbiAgICAgICAgdGhpcy5pbml0UmVzaXplRXZlbnRzKGVsZW1lbnQpO1xuICAgICAgICBlbGVtZW50LnN0aWNreS5yZXNpemVFdmVudCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghZWxlbWVudC5zdGlja3kuc2Nyb2xsRXZlbnQpIHtcbiAgICAgICAgdGhpcy5pbml0U2Nyb2xsRXZlbnRzKGVsZW1lbnQpO1xuICAgICAgICBlbGVtZW50LnN0aWNreS5zY3JvbGxFdmVudCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0UG9zaXRpb24oZWxlbWVudCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHdoaWNoIGlzIGFkZGluZyBvblJlc2l6ZUV2ZW50cyB0byB3aW5kb3cgbGlzdGVuZXIgYW5kIGFzc2lnbnMgZnVuY3Rpb24gdG8gZWxlbWVudCBhcyByZXNpemVMaXN0ZW5lclxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7bm9kZX0gZWxlbWVudCAtIEVsZW1lbnQgZm9yIHdoaWNoIHJlc2l6ZSBldmVudHMgYXJlIGluaXRpYWxpc2VkXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpbml0UmVzaXplRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRSZXNpemVFdmVudHMoZWxlbWVudCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGVsZW1lbnQuc3RpY2t5LnJlc2l6ZUxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMzLm9uUmVzaXplRXZlbnRzKGVsZW1lbnQpO1xuICAgICAgfTtcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGVsZW1lbnQuc3RpY2t5LnJlc2l6ZUxpc3RlbmVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBlbGVtZW50IGxpc3RlbmVyIGZyb20gcmVzaXplIGV2ZW50XG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtub2RlfSBlbGVtZW50IC0gRWxlbWVudCBmcm9tIHdoaWNoIGxpc3RlbmVyIGlzIGRlbGV0ZWRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRlc3Ryb3lSZXNpemVFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveVJlc2l6ZUV2ZW50cyhlbGVtZW50KSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZWxlbWVudC5zdGlja3kucmVzaXplTGlzdGVuZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB3aGljaCBpcyBmaXJlZCB3aGVuIHVzZXIgcmVzaXplIHdpbmRvdy4gSXQgY2hlY2tzIGlmIGVsZW1lbnQgc2hvdWxkIGJlIGFjdGl2YXRlZCBvciBkZWFjdGl2YXRlZCBhbmQgdGhlbiBydW4gc2V0UG9zaXRpb24gZnVuY3Rpb25cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge25vZGV9IGVsZW1lbnQgLSBFbGVtZW50IGZvciB3aGljaCBldmVudCBmdW5jdGlvbiBpcyBmaXJlZFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25SZXNpemVFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25SZXNpemVFdmVudHMoZWxlbWVudCkge1xuICAgICAgdGhpcy52cCA9IHRoaXMuZ2V0Vmlld3BvcnRTaXplKCk7XG4gICAgICBlbGVtZW50LnN0aWNreS5yZWN0ID0gdGhpcy5nZXRSZWN0YW5nbGUoZWxlbWVudCk7XG4gICAgICBlbGVtZW50LnN0aWNreS5jb250YWluZXIucmVjdCA9IHRoaXMuZ2V0UmVjdGFuZ2xlKGVsZW1lbnQuc3RpY2t5LmNvbnRhaW5lcik7XG5cbiAgICAgIGlmIChlbGVtZW50LnN0aWNreS5yZWN0LnRvcCArIGVsZW1lbnQuc3RpY2t5LnJlY3QuaGVpZ2h0IDwgZWxlbWVudC5zdGlja3kuY29udGFpbmVyLnJlY3QudG9wICsgZWxlbWVudC5zdGlja3kuY29udGFpbmVyLnJlY3QuaGVpZ2h0ICYmIGVsZW1lbnQuc3RpY2t5LnN0aWNreUZvciA8IHRoaXMudnAud2lkdGggJiYgIWVsZW1lbnQuc3RpY2t5LmFjdGl2ZSkge1xuICAgICAgICBlbGVtZW50LnN0aWNreS5hY3RpdmUgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnN0aWNreS5yZWN0LnRvcCArIGVsZW1lbnQuc3RpY2t5LnJlY3QuaGVpZ2h0ID49IGVsZW1lbnQuc3RpY2t5LmNvbnRhaW5lci5yZWN0LnRvcCArIGVsZW1lbnQuc3RpY2t5LmNvbnRhaW5lci5yZWN0LmhlaWdodCB8fCBlbGVtZW50LnN0aWNreS5zdGlja3lGb3IgPj0gdGhpcy52cC53aWR0aCAmJiBlbGVtZW50LnN0aWNreS5hY3RpdmUpIHtcbiAgICAgICAgZWxlbWVudC5zdGlja3kuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0UG9zaXRpb24oZWxlbWVudCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHdoaWNoIGlzIGFkZGluZyBvblNjcm9sbEV2ZW50cyB0byB3aW5kb3cgbGlzdGVuZXIgYW5kIGFzc2lnbnMgZnVuY3Rpb24gdG8gZWxlbWVudCBhcyBzY3JvbGxMaXN0ZW5lclxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7bm9kZX0gZWxlbWVudCAtIEVsZW1lbnQgZm9yIHdoaWNoIHNjcm9sbCBldmVudHMgYXJlIGluaXRpYWxpc2VkXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpbml0U2Nyb2xsRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRTY3JvbGxFdmVudHMoZWxlbWVudCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIGVsZW1lbnQuc3RpY2t5LnNjcm9sbExpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXM0Lm9uU2Nyb2xsRXZlbnRzKGVsZW1lbnQpO1xuICAgICAgfTtcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGVsZW1lbnQuc3RpY2t5LnNjcm9sbExpc3RlbmVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBlbGVtZW50IGxpc3RlbmVyIGZyb20gc2Nyb2xsIGV2ZW50XG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtub2RlfSBlbGVtZW50IC0gRWxlbWVudCBmcm9tIHdoaWNoIGxpc3RlbmVyIGlzIGRlbGV0ZWRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRlc3Ryb3lTY3JvbGxFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveVNjcm9sbEV2ZW50cyhlbGVtZW50KSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZWxlbWVudC5zdGlja3kuc2Nyb2xsTGlzdGVuZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB3aGljaCBpcyBmaXJlZCB3aGVuIHVzZXIgc2Nyb2xsIHdpbmRvdy4gSWYgZWxlbWVudCBpcyBhY3RpdmUsIGZ1bmN0aW9uIGlzIGludm9raW5nIHNldFBvc2l0aW9uIGZ1bmN0aW9uXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtub2RlfSBlbGVtZW50IC0gRWxlbWVudCBmb3Igd2hpY2ggZXZlbnQgZnVuY3Rpb24gaXMgZmlyZWRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9uU2Nyb2xsRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uU2Nyb2xsRXZlbnRzKGVsZW1lbnQpIHtcbiAgICAgIGlmIChlbGVtZW50LnN0aWNreSAmJiBlbGVtZW50LnN0aWNreS5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogTWFpbiBmdW5jdGlvbiBmb3IgdGhlIGxpYnJhcnkuIEhlcmUgYXJlIHNvbWUgY29uZGl0aW9uIGNhbGN1bGF0aW9ucyBhbmQgY3NzIGFwcGVuZGluZyBmb3Igc3RpY2t5IGVsZW1lbnQgd2hlbiB1c2VyIHNjcm9sbCB3aW5kb3dcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge25vZGV9IGVsZW1lbnQgLSBFbGVtZW50IHRoYXQgd2lsbCBiZSBwb3NpdGlvbmVkIGlmIGl0J3MgYWN0aXZlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRQb3NpdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQb3NpdGlvbihlbGVtZW50KSB7XG4gICAgICB0aGlzLmNzcyhlbGVtZW50LCB7XG4gICAgICAgIHBvc2l0aW9uOiAnJyxcbiAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICB0b3A6ICcnLFxuICAgICAgICBsZWZ0OiAnJ1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLnZwLmhlaWdodCA8IGVsZW1lbnQuc3RpY2t5LnJlY3QuaGVpZ2h0IHx8ICFlbGVtZW50LnN0aWNreS5hY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWVsZW1lbnQuc3RpY2t5LnJlY3Qud2lkdGgpIHtcbiAgICAgICAgZWxlbWVudC5zdGlja3kucmVjdCA9IHRoaXMuZ2V0UmVjdGFuZ2xlKGVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudC5zdGlja3kud3JhcCkge1xuICAgICAgICB0aGlzLmNzcyhlbGVtZW50LnBhcmVudE5vZGUsIHtcbiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgIHdpZHRoOiBlbGVtZW50LnN0aWNreS5yZWN0LndpZHRoICsgJ3B4JyxcbiAgICAgICAgICBoZWlnaHQ6IGVsZW1lbnQuc3RpY2t5LnJlY3QuaGVpZ2h0ICsgJ3B4J1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnQuc3RpY2t5LnJlY3QudG9wID09PSAwICYmIGVsZW1lbnQuc3RpY2t5LmNvbnRhaW5lciA9PT0gdGhpcy5ib2R5KSB7XG4gICAgICAgIHRoaXMuY3NzKGVsZW1lbnQsIHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICB0b3A6IGVsZW1lbnQuc3RpY2t5LnJlY3QudG9wICsgJ3B4JyxcbiAgICAgICAgICBsZWZ0OiBlbGVtZW50LnN0aWNreS5yZWN0LmxlZnQgKyAncHgnLFxuICAgICAgICAgIHdpZHRoOiBlbGVtZW50LnN0aWNreS5yZWN0LndpZHRoICsgJ3B4J1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZWxlbWVudC5zdGlja3kuc3RpY2t5Q2xhc3MpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoZWxlbWVudC5zdGlja3kuc3RpY2t5Q2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsVG9wID4gZWxlbWVudC5zdGlja3kucmVjdC50b3AgLSBlbGVtZW50LnN0aWNreS5tYXJnaW5Ub3ApIHtcbiAgICAgICAgdGhpcy5jc3MoZWxlbWVudCwge1xuICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgIHdpZHRoOiBlbGVtZW50LnN0aWNreS5yZWN0LndpZHRoICsgJ3B4JyxcbiAgICAgICAgICBsZWZ0OiBlbGVtZW50LnN0aWNreS5yZWN0LmxlZnQgKyAncHgnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbFRvcCArIGVsZW1lbnQuc3RpY2t5LnJlY3QuaGVpZ2h0ICsgZWxlbWVudC5zdGlja3kubWFyZ2luVG9wID4gZWxlbWVudC5zdGlja3kuY29udGFpbmVyLnJlY3QudG9wICsgZWxlbWVudC5zdGlja3kuY29udGFpbmVyLm9mZnNldEhlaWdodCAtIGVsZW1lbnQuc3RpY2t5Lm1hcmdpbkJvdHRvbSkge1xuICAgICAgICAgIGlmIChlbGVtZW50LnN0aWNreS5zdGlja3lDbGFzcykge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGVsZW1lbnQuc3RpY2t5LnN0aWNreUNsYXNzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmNzcyhlbGVtZW50LCB7XG4gICAgICAgICAgICB0b3A6IGVsZW1lbnQuc3RpY2t5LmNvbnRhaW5lci5yZWN0LnRvcCArIGVsZW1lbnQuc3RpY2t5LmNvbnRhaW5lci5vZmZzZXRIZWlnaHQgLSAodGhpcy5zY3JvbGxUb3AgKyBlbGVtZW50LnN0aWNreS5yZWN0LmhlaWdodCArIGVsZW1lbnQuc3RpY2t5Lm1hcmdpbkJvdHRvbSkgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGVsZW1lbnQuc3RpY2t5LnN0aWNreUNsYXNzKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoZWxlbWVudC5zdGlja3kuc3RpY2t5Q2xhc3MpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuY3NzKGVsZW1lbnQsIHtcbiAgICAgICAgICAgIHRvcDogZWxlbWVudC5zdGlja3kubWFyZ2luVG9wICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZWxlbWVudC5zdGlja3kuc3RpY2t5Q2xhc3MpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZWxlbWVudC5zdGlja3kuc3RpY2t5Q2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jc3MoZWxlbWVudCwge1xuICAgICAgICAgIHBvc2l0aW9uOiAnJyxcbiAgICAgICAgICB3aWR0aDogJycsXG4gICAgICAgICAgdG9wOiAnJyxcbiAgICAgICAgICBsZWZ0OiAnJ1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZWxlbWVudC5zdGlja3kud3JhcCkge1xuICAgICAgICAgIHRoaXMuY3NzKGVsZW1lbnQucGFyZW50Tm9kZSwge1xuICAgICAgICAgICAgZGlzcGxheTogJycsXG4gICAgICAgICAgICB3aWR0aDogJycsXG4gICAgICAgICAgICBoZWlnaHQ6ICcnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB1cGRhdGVzIGVsZW1lbnQgc3RpY2t5IHJlY3RhbmdsZSAod2l0aCBzdGlja3kgY29udGFpbmVyKSwgdGhlbiBhY3RpdmF0ZSBvciBkZWFjdGl2YXRlIGVsZW1lbnQsIHRoZW4gdXBkYXRlIHBvc2l0aW9uIGlmIGl0J3MgYWN0aXZlXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHRoaXMuZm9yRWFjaCh0aGlzLmVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0aWNreS5yZWN0ID0gX3RoaXM1LmdldFJlY3RhbmdsZShlbGVtZW50KTtcbiAgICAgICAgZWxlbWVudC5zdGlja3kuY29udGFpbmVyLnJlY3QgPSBfdGhpczUuZ2V0UmVjdGFuZ2xlKGVsZW1lbnQuc3RpY2t5LmNvbnRhaW5lcik7XG5cbiAgICAgICAgX3RoaXM1LmFjdGl2YXRlKGVsZW1lbnQpO1xuXG4gICAgICAgIF90aGlzNS5zZXRQb3NpdGlvbihlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyBzdGlja3kgZWxlbWVudCwgcmVtb3ZlIGxpc3RlbmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgdGhpcy51cGRhdGVTY3JvbGxUb3BQb3NpdGlvbik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy51cGRhdGVTY3JvbGxUb3BQb3NpdGlvbik7XG4gICAgICB0aGlzLmZvckVhY2godGhpcy5lbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgX3RoaXM2LmRlc3Ryb3lSZXNpemVFdmVudHMoZWxlbWVudCk7XG5cbiAgICAgICAgX3RoaXM2LmRlc3Ryb3lTY3JvbGxFdmVudHMoZWxlbWVudCk7XG5cbiAgICAgICAgZGVsZXRlIGVsZW1lbnQuc3RpY2t5O1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBjb250YWluZXIgZWxlbWVudCBpbiB3aGljaCBzdGlja3kgZWxlbWVudCBpcyBzdHVjayAoaWYgaXMgbm90IHNwZWNpZmllZCwgdGhlbiBpdCdzIHN0dWNrIHRvIGJvZHkpXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtub2RlfSBlbGVtZW50IC0gRWxlbWVudCB3aGljaCBzdGlja3kgY29udGFpbmVyIGFyZSBsb29rZWQgZm9yXG4gICAgICogQHJldHVybiB7bm9kZX0gZWxlbWVudCAtIFN0aWNreSBjb250YWluZXJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFN0aWNreUNvbnRhaW5lclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGlja3lDb250YWluZXIoZWxlbWVudCkge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IGVsZW1lbnQucGFyZW50Tm9kZTtcblxuICAgICAgd2hpbGUgKCFjb250YWluZXIuaGFzQXR0cmlidXRlKCdkYXRhLXN0aWNreS1jb250YWluZXInKSAmJiAhY29udGFpbmVyLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihlbGVtZW50LnN0aWNreS5zdGlja3lDb250YWluZXIpICYmIGNvbnRhaW5lciAhPT0gdGhpcy5ib2R5KSB7XG4gICAgICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5wYXJlbnROb2RlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgZWxlbWVudCByZWN0YW5nbGUgJiBwb3NpdGlvbiAod2lkdGgsIGhlaWdodCwgdG9wLCBsZWZ0KVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7bm9kZX0gZWxlbWVudCAtIEVsZW1lbnQgd2hpY2ggcG9zaXRpb24gJiByZWN0YW5nbGUgYXJlIHJldHVybmVkXG4gICAgICogQHJldHVybiB7b2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UmVjdGFuZ2xlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJlY3RhbmdsZShlbGVtZW50KSB7XG4gICAgICB0aGlzLmNzcyhlbGVtZW50LCB7XG4gICAgICAgIHBvc2l0aW9uOiAnJyxcbiAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICB0b3A6ICcnLFxuICAgICAgICBsZWZ0OiAnJ1xuICAgICAgfSk7XG4gICAgICB2YXIgd2lkdGggPSBNYXRoLm1heChlbGVtZW50Lm9mZnNldFdpZHRoLCBlbGVtZW50LmNsaWVudFdpZHRoLCBlbGVtZW50LnNjcm9sbFdpZHRoKTtcbiAgICAgIHZhciBoZWlnaHQgPSBNYXRoLm1heChlbGVtZW50Lm9mZnNldEhlaWdodCwgZWxlbWVudC5jbGllbnRIZWlnaHQsIGVsZW1lbnQuc2Nyb2xsSGVpZ2h0KTtcbiAgICAgIHZhciB0b3AgPSAwO1xuICAgICAgdmFyIGxlZnQgPSAwO1xuXG4gICAgICBkbyB7XG4gICAgICAgIHRvcCArPSBlbGVtZW50Lm9mZnNldFRvcCB8fCAwO1xuICAgICAgICBsZWZ0ICs9IGVsZW1lbnQub2Zmc2V0TGVmdCB8fCAwO1xuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG4gICAgICB9IHdoaWxlIChlbGVtZW50KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB2aWV3cG9ydCBkaW1lbnNpb25zXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHJldHVybiB7b2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Vmlld3BvcnRTaXplXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZpZXdwb3J0U2l6ZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApLFxuICAgICAgICBoZWlnaHQ6IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKVxuICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB1cGRhdGVzIHdpbmRvdyBzY3JvbGwgcG9zaXRpb25cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVTY3JvbGxUb3BQb3NpdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVTY3JvbGxUb3BQb3NpdGlvbigpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVG9wID0gKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5zY3JvbGxUb3ApIC0gKGRvY3VtZW50LmNsaWVudFRvcCB8fCAwKSB8fCAwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGxvb3BzXG4gICAgICogQGhlbHBlclxuICAgICAqIEBwYXJhbSB7YXJyYXl9XG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiAobm8gbmVlZCBmb3IgZXhwbGFuYXRpb24pXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJmb3JFYWNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY2FsbGJhY2soYXJyYXlbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gYWRkL3JlbW92ZSBjc3MgcHJvcGVydGllcyBmb3Igc3BlY2lmaWVkIGVsZW1lbnQuXG4gICAgICogQGhlbHBlclxuICAgICAqIEBwYXJhbSB7bm9kZX0gZWxlbWVudCAtIERPTSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtvYmplY3R9IHByb3BlcnRpZXMgLSBDU1MgcHJvcGVydGllcyB0aGF0IHdpbGwgYmUgYWRkZWQvcmVtb3ZlZCBmcm9tIHNwZWNpZmllZCBlbGVtZW50XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjc3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3NzKGVsZW1lbnQsIHByb3BlcnRpZXMpIHtcbiAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIHByb3BlcnRpZXMpIHtcbiAgICAgICAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZVtwcm9wZXJ0eV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdGlja3k7XG59KCk7XG4vKipcbiAqIEV4cG9ydCBmdW5jdGlvbiB0aGF0IHN1cHBvcnRzIEFNRCwgQ29tbW9uSlMgYW5kIFBsYWluIEJyb3dzZXIuXG4gKi9cblxuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmYWN0b3J5O1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuU3RpY2t5ID0gZmFjdG9yeTtcbiAgfVxufSkodGhpcywgU3RpY2t5KTsiLCJcbnZhciBTdGlja3kgPSByZXF1aXJlKCcuL2Rpc3Qvc3RpY2t5LmNvbXBpbGUuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGlja3k7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9