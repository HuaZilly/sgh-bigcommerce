(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./assets/js/theme/common/nod-functions/min-max-validate.js":
/*!******************************************************************!*\
  !*** ./assets/js/theme/common/nod-functions/min-max-validate.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNaN */ "./node_modules/lodash/isNaN.js");
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNaN__WEBPACK_IMPORTED_MODULE_0__);

function minMaxValidate(minInputSelector, maxInputSelector) {
  function validate(cb) {
    var minValue = parseFloat($(minInputSelector).val());
    var maxValue = parseFloat($(maxInputSelector).val());
    if (maxValue > minValue || lodash_isNaN__WEBPACK_IMPORTED_MODULE_0___default()(maxValue) || lodash_isNaN__WEBPACK_IMPORTED_MODULE_0___default()(minValue)) {
      return cb(true);
    }
    return cb(false);
  }
  return validate;
}
/* harmony default export */ __webpack_exports__["default"] = (minMaxValidate);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/nod.js":
/*!***************************************!*\
  !*** ./assets/js/theme/common/nod.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nod_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nod-validate */ "./node_modules/nod-validate/nod.js");
/* harmony import */ var nod_validate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nod_validate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nod_functions_min_max_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nod-functions/min-max-validate */ "./assets/js/theme/common/nod-functions/min-max-validate.js");



// Hook our SCSS framework form field status classes into the nod validation system before use
nod_validate__WEBPACK_IMPORTED_MODULE_0___default.a.classes.errorClass = 'form-field--error';
nod_validate__WEBPACK_IMPORTED_MODULE_0___default.a.classes.successClass = 'form-field--success';
nod_validate__WEBPACK_IMPORTED_MODULE_0___default.a.classes.errorMessageClass = 'form-inlineMessage';

// Register validate functions
nod_validate__WEBPACK_IMPORTED_MODULE_0___default.a.checkFunctions['min-max'] = _nod_functions_min_max_validate__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (nod_validate__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./assets/js/theme/f/grid-list-switcher.js":
/*!*************************************************!*\
  !*** ./assets/js/theme/f/grid-list-switcher.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  var displayMode = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('categoryView') || context.displayMode;
  $(".switch-" + displayMode).addClass('switch-active');
  function switchDisplay(mode) {
    $('.category, .page, .productCards, .productCard').removeClass('category--list page--list productCards--list productCard--list productCards--grid productCard--grid');
    $('.category').addClass("category--" + mode);
    $('.page').addClass("page--" + mode);
    $('.productCards').addClass("productCards--" + mode);
    $('.productCard').addClass("productCard--" + mode);
  }
  switchDisplay(displayMode);
  $('[data-display-switch]').on('click', function (event) {
    event.preventDefault();
    var displayType = $(event.currentTarget).attr('data-display-switch');
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('categoryView', displayType, {
      expires: 30
    });
    $('[data-display-switch]').removeClass('switch-active');
    $(event.currentTarget).addClass('switch-active');
    switchDisplay(displayType);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/wishlist.js":
/*!*************************************!*\
  !*** ./assets/js/theme/wishlist.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WishList; });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _f_grid_list_switcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./f/grid-list-switcher */ "./assets/js/theme/f/grid-list-switcher.js");

function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }








var WishList = /*#__PURE__*/function (_PageManager) {
  function WishList(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.options = {
      template: 'account/add-wishlist'
    };
    return _this || _assertThisInitialized(_this);
  }

  /**
   * Creates a confirm box before deleting all wish lists
   */
  _inheritsLoose(WishList, _PageManager);
  var _proto = WishList.prototype;
  _proto.wishlistDeleteConfirm = function wishlistDeleteConfirm() {
    var _this2 = this;
    $('body').on('click', '[data-wishlist-delete]', function (event) {
      var confirmed = window.confirm(_this2.context.wishlistDelete);
      if (confirmed) {
        return true;
      }
      event.preventDefault();
    });
  };
  _proto.registerAddWishListValidation = function registerAddWishListValidation($addWishlistForm) {
    var _this3 = this;
    this.addWishlistValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_4__["default"])({
      submit: '.wishlist-form input[type="submit"]'
    });
    this.addWishlistValidator.add([{
      selector: '.wishlist-form input[name="wishlistname"]',
      validate: function validate(cb, val) {
        var result = val.length > 0;
        cb(result);
      },
      errorMessage: 'You must enter a wishlist name.'
    }]);
    $addWishlistForm.on('submit', function (event) {
      _this3.addWishlistValidator.performCheck();
      if (_this3.addWishlistValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.wishListHandler = function wishListHandler() {
    var _this4 = this;
    $('body').on('click', '[data-wishlist]', function (event) {
      var wishListUrl = event.currentTarget.href;
      var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["defaultModal"])();
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["api"].getPage(wishListUrl, _this4.options, function (err, content) {
        if (err) {
          return modal.updateContent(err);
        }
        modal.updateContent(content, {
          wrap: true
        });
        var $wishlistForm = $('.wishlist-form', modal.$content);
        _this4.registerAddWishListValidation($wishlistForm);
      });
    });
  };
  _proto.onReady = function onReady() {
    var clipboard = new clipboard__WEBPACK_IMPORTED_MODULE_3___default.a('.button--copy');
    var $addWishListForm = $('.wishlist-form');
    clipboard.on('success', function () {
      $('.list-copied-feedback').text('Link copied').fadeIn('fast').delay(1000).fadeOut('fast');
    });
    clipboard.on('error', function () {
      $('.list-copied-feedback').text('Press Ctrl+C to copy').fadeIn('fast').delay(1000).fadeOut('fast');
    });
    Object(_f_grid_list_switcher__WEBPACK_IMPORTED_MODULE_8__["default"])(this.context);
    if ($addWishListForm.length) {
      this.registerAddWishListValidation($addWishListForm);
    }
    this.wishlistDeleteConfirm();
    this.wishListHandler();
  };
  return WishList;
}(_page_manager__WEBPACK_IMPORTED_MODULE_5__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL25vZC1mdW5jdGlvbnMvbWluLW1heC12YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL25vZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZi9ncmlkLWxpc3Qtc3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3dpc2hsaXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcy1jb29raWUvc3JjL2pzLmNvb2tpZS5qcyJdLCJuYW1lcyI6WyJtaW5NYXhWYWxpZGF0ZSIsIm1pbklucHV0U2VsZWN0b3IiLCJtYXhJbnB1dFNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsIm1pblZhbHVlIiwicGFyc2VGbG9hdCIsIiQiLCJ2YWwiLCJtYXhWYWx1ZSIsIl9pc05hTiIsIm5vZCIsImNsYXNzZXMiLCJlcnJvckNsYXNzIiwic3VjY2Vzc0NsYXNzIiwiZXJyb3JNZXNzYWdlQ2xhc3MiLCJjaGVja0Z1bmN0aW9ucyIsImNvbnRleHQiLCJkaXNwbGF5TW9kZSIsIkNvb2tpZXMiLCJnZXQiLCJhZGRDbGFzcyIsInN3aXRjaERpc3BsYXkiLCJtb2RlIiwicmVtb3ZlQ2xhc3MiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkaXNwbGF5VHlwZSIsImN1cnJlbnRUYXJnZXQiLCJhdHRyIiwic2V0IiwiZXhwaXJlcyIsIldpc2hMaXN0IiwiX1BhZ2VNYW5hZ2VyIiwiX3RoaXMiLCJjYWxsIiwib3B0aW9ucyIsInRlbXBsYXRlIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwid2lzaGxpc3REZWxldGVDb25maXJtIiwiX3RoaXMyIiwiY29uZmlybWVkIiwid2luZG93IiwiY29uZmlybSIsIndpc2hsaXN0RGVsZXRlIiwicmVnaXN0ZXJBZGRXaXNoTGlzdFZhbGlkYXRpb24iLCIkYWRkV2lzaGxpc3RGb3JtIiwiX3RoaXMzIiwiYWRkV2lzaGxpc3RWYWxpZGF0b3IiLCJzdWJtaXQiLCJhZGQiLCJzZWxlY3RvciIsInJlc3VsdCIsImxlbmd0aCIsImVycm9yTWVzc2FnZSIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsIndpc2hMaXN0SGFuZGxlciIsIl90aGlzNCIsIndpc2hMaXN0VXJsIiwiaHJlZiIsIm1vZGFsIiwiZGVmYXVsdE1vZGFsIiwib3BlbiIsImFwaSIsImdldFBhZ2UiLCJlcnIiLCJjb250ZW50IiwidXBkYXRlQ29udGVudCIsIndyYXAiLCIkd2lzaGxpc3RGb3JtIiwiJGNvbnRlbnQiLCJvblJlYWR5IiwiY2xpcGJvYXJkIiwiQ2xpcGJvYXJkSlMiLCIkYWRkV2lzaExpc3RGb3JtIiwidGV4dCIsImZhZGVJbiIsImRlbGF5IiwiZmFkZU91dCIsImdyaWRTd2l0Y2hlciIsIlBhZ2VNYW5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLGNBQWNBLENBQUNDLGdCQUFnQixFQUFFQyxnQkFBZ0IsRUFBRTtFQUN4RCxTQUFTQyxRQUFRQSxDQUFDQyxFQUFFLEVBQUU7SUFDbEIsSUFBTUMsUUFBUSxHQUFHQyxVQUFVLENBQUNDLENBQUMsQ0FBQ04sZ0JBQWdCLENBQUMsQ0FBQ08sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN0RCxJQUFNQyxRQUFRLEdBQUdILFVBQVUsQ0FBQ0MsQ0FBQyxDQUFDTCxnQkFBZ0IsQ0FBQyxDQUFDTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRXRELElBQUlDLFFBQVEsR0FBR0osUUFBUSxJQUFJSyxtREFBQSxDQUFRRCxRQUFRLENBQUMsSUFBSUMsbURBQUEsQ0FBUUwsUUFBUSxDQUFDLEVBQUU7TUFDL0QsT0FBT0QsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNuQjtJQUVBLE9BQU9BLEVBQUUsQ0FBQyxLQUFLLENBQUM7RUFDcEI7RUFFQSxPQUFPRCxRQUFRO0FBQ25CO0FBRWVILDZF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RUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBLHFFQUFxRTtBQUNyRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDs7QUFFQSxTQUFTLG9CQUFvQjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0IsQ0FBQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5mdW5jdGlvbiBtaW5NYXhWYWxpZGF0ZShtaW5JbnB1dFNlbGVjdG9yLCBtYXhJbnB1dFNlbGVjdG9yKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUoY2IpIHtcbiAgICAgICAgY29uc3QgbWluVmFsdWUgPSBwYXJzZUZsb2F0KCQobWluSW5wdXRTZWxlY3RvcikudmFsKCkpO1xuICAgICAgICBjb25zdCBtYXhWYWx1ZSA9IHBhcnNlRmxvYXQoJChtYXhJbnB1dFNlbGVjdG9yKS52YWwoKSk7XG5cbiAgICAgICAgaWYgKG1heFZhbHVlID4gbWluVmFsdWUgfHwgXy5pc05hTihtYXhWYWx1ZSkgfHwgXy5pc05hTihtaW5WYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYihmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtaW5NYXhWYWxpZGF0ZTtcbiIsImltcG9ydCBub2QgZnJvbSAnbm9kLXZhbGlkYXRlJztcbmltcG9ydCBtaW5NYXhWYWxpZGF0ZSBmcm9tICcuL25vZC1mdW5jdGlvbnMvbWluLW1heC12YWxpZGF0ZSc7XG5cbi8vIEhvb2sgb3VyIFNDU1MgZnJhbWV3b3JrIGZvcm0gZmllbGQgc3RhdHVzIGNsYXNzZXMgaW50byB0aGUgbm9kIHZhbGlkYXRpb24gc3lzdGVtIGJlZm9yZSB1c2Vcbm5vZC5jbGFzc2VzLmVycm9yQ2xhc3MgPSAnZm9ybS1maWVsZC0tZXJyb3InO1xubm9kLmNsYXNzZXMuc3VjY2Vzc0NsYXNzID0gJ2Zvcm0tZmllbGQtLXN1Y2Nlc3MnO1xubm9kLmNsYXNzZXMuZXJyb3JNZXNzYWdlQ2xhc3MgPSAnZm9ybS1pbmxpbmVNZXNzYWdlJztcblxuLy8gUmVnaXN0ZXIgdmFsaWRhdGUgZnVuY3Rpb25zXG5ub2QuY2hlY2tGdW5jdGlvbnNbJ21pbi1tYXgnXSA9IG1pbk1heFZhbGlkYXRlO1xuXG5leHBvcnQgZGVmYXVsdCBub2Q7XG4iLCJpbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIGNvbnN0IGRpc3BsYXlNb2RlID0gQ29va2llcy5nZXQoJ2NhdGVnb3J5VmlldycpIHx8IGNvbnRleHQuZGlzcGxheU1vZGU7XG4gICAgJChgLnN3aXRjaC0ke2Rpc3BsYXlNb2RlfWApLmFkZENsYXNzKCdzd2l0Y2gtYWN0aXZlJyk7XG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hEaXNwbGF5KG1vZGUpIHtcbiAgICAgICAgJCgnLmNhdGVnb3J5LCAucGFnZSwgLnByb2R1Y3RDYXJkcywgLnByb2R1Y3RDYXJkJykucmVtb3ZlQ2xhc3MoJ2NhdGVnb3J5LS1saXN0IHBhZ2UtLWxpc3QgcHJvZHVjdENhcmRzLS1saXN0IHByb2R1Y3RDYXJkLS1saXN0IHByb2R1Y3RDYXJkcy0tZ3JpZCBwcm9kdWN0Q2FyZC0tZ3JpZCcpO1xuXG4gICAgICAgICQoJy5jYXRlZ29yeScpLmFkZENsYXNzKGBjYXRlZ29yeS0tJHttb2RlfWApO1xuICAgICAgICAkKCcucGFnZScpLmFkZENsYXNzKGBwYWdlLS0ke21vZGV9YCk7XG4gICAgICAgICQoJy5wcm9kdWN0Q2FyZHMnKS5hZGRDbGFzcyhgcHJvZHVjdENhcmRzLS0ke21vZGV9YCk7XG4gICAgICAgICQoJy5wcm9kdWN0Q2FyZCcpLmFkZENsYXNzKGBwcm9kdWN0Q2FyZC0tJHttb2RlfWApO1xuICAgIH1cblxuICAgIHN3aXRjaERpc3BsYXkoZGlzcGxheU1vZGUpO1xuXG4gICAgJCgnW2RhdGEtZGlzcGxheS1zd2l0Y2hdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlUeXBlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5hdHRyKCdkYXRhLWRpc3BsYXktc3dpdGNoJyk7XG5cbiAgICAgICAgQ29va2llcy5zZXQoJ2NhdGVnb3J5VmlldycsIGRpc3BsYXlUeXBlLCB7IGV4cGlyZXM6IDMwIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWRpc3BsYXktc3dpdGNoXScpLnJlbW92ZUNsYXNzKCdzd2l0Y2gtYWN0aXZlJyk7XG4gICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ3N3aXRjaC1hY3RpdmUnKTtcblxuICAgICAgICBzd2l0Y2hEaXNwbGF5KGRpc3BsYXlUeXBlKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbi5yZXZlYWwnO1xuaW1wb3J0IENsaXBib2FyZEpTIGZyb20gJ2NsaXBib2FyZCc7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdE1vZGFsIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IGdyaWRTd2l0Y2hlciBmcm9tICcuL2YvZ3JpZC1saXN0LXN3aXRjaGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lzaExpc3QgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2FjY291bnQvYWRkLXdpc2hsaXN0JyxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgY29uZmlybSBib3ggYmVmb3JlIGRlbGV0aW5nIGFsbCB3aXNoIGxpc3RzXG4gICAgICovXG4gICAgd2lzaGxpc3REZWxldGVDb25maXJtKCkge1xuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXdpc2hsaXN0LWRlbGV0ZV0nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25maXJtZWQgPSB3aW5kb3cuY29uZmlybSh0aGlzLmNvbnRleHQud2lzaGxpc3REZWxldGUpO1xuXG4gICAgICAgICAgICBpZiAoY29uZmlybWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQWRkV2lzaExpc3RWYWxpZGF0aW9uKCRhZGRXaXNobGlzdEZvcm0pIHtcbiAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICcud2lzaGxpc3QtZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLndpc2hsaXN0LWZvcm0gaW5wdXRbbmFtZT1cIndpc2hsaXN0bmFtZVwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGggPiAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHdpc2hsaXN0IG5hbWUuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRhZGRXaXNobGlzdEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkV2lzaGxpc3RWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgd2lzaExpc3RIYW5kbGVyKCkge1xuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXdpc2hsaXN0XScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHdpc2hMaXN0VXJsID0gZXZlbnQuY3VycmVudFRhcmdldC5ocmVmO1xuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbW9kYWwub3BlbigpO1xuXG4gICAgICAgICAgICBhcGkuZ2V0UGFnZSh3aXNoTGlzdFVybCwgdGhpcy5vcHRpb25zLCAoZXJyLCBjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kYWwudXBkYXRlQ29udGVudChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQoY29udGVudCwgeyB3cmFwOiB0cnVlIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgJHdpc2hsaXN0Rm9ybSA9ICQoJy53aXNobGlzdC1mb3JtJywgbW9kYWwuJGNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlckFkZFdpc2hMaXN0VmFsaWRhdGlvbigkd2lzaGxpc3RGb3JtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCBjbGlwYm9hcmQgPSBuZXcgQ2xpcGJvYXJkSlMoJy5idXR0b24tLWNvcHknKTtcbiAgICAgICAgY29uc3QgJGFkZFdpc2hMaXN0Rm9ybSA9ICQoJy53aXNobGlzdC1mb3JtJyk7XG5cbiAgICAgICAgY2xpcGJvYXJkLm9uKCdzdWNjZXNzJywgKCkgPT4ge1xuICAgICAgICAgICAgJCgnLmxpc3QtY29waWVkLWZlZWRiYWNrJykudGV4dCgnTGluayBjb3BpZWQnKS5mYWRlSW4oJ2Zhc3QnKS5kZWxheSgxMDAwKS5mYWRlT3V0KCdmYXN0Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNsaXBib2FyZC5vbignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgICAgICAkKCcubGlzdC1jb3BpZWQtZmVlZGJhY2snKS50ZXh0KCdQcmVzcyBDdHJsK0MgdG8gY29weScpLmZhZGVJbignZmFzdCcpLmRlbGF5KDEwMDApLmZhZGVPdXQoJ2Zhc3QnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZ3JpZFN3aXRjaGVyKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgaWYgKCRhZGRXaXNoTGlzdEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQWRkV2lzaExpc3RWYWxpZGF0aW9uKCRhZGRXaXNoTGlzdEZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53aXNobGlzdERlbGV0ZUNvbmZpcm0oKTtcbiAgICAgICAgdGhpcy53aXNoTGlzdEhhbmRsZXIoKTtcbiAgICB9XG59XG4iLCIvKiFcbiAqIEphdmFTY3JpcHQgQ29va2llIHYyLjIuMVxuICogaHR0cHM6Ly9naXRodWIuY29tL2pzLWNvb2tpZS9qcy1jb29raWVcbiAqXG4gKiBDb3B5cmlnaHQgMjAwNiwgMjAxNSBLbGF1cyBIYXJ0bCAmIEZhZ25lciBCcmFja1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKi9cbjsoZnVuY3Rpb24gKGZhY3RvcnkpIHtcblx0dmFyIHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlcjtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmYWN0b3J5KTtcblx0XHRyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIgPSB0cnVlO1xuXHR9XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0XHRyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIgPSB0cnVlO1xuXHR9XG5cdGlmICghcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyKSB7XG5cdFx0dmFyIE9sZENvb2tpZXMgPSB3aW5kb3cuQ29va2llcztcblx0XHR2YXIgYXBpID0gd2luZG93LkNvb2tpZXMgPSBmYWN0b3J5KCk7XG5cdFx0YXBpLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR3aW5kb3cuQ29va2llcyA9IE9sZENvb2tpZXM7XG5cdFx0XHRyZXR1cm4gYXBpO1xuXHRcdH07XG5cdH1cbn0oZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBleHRlbmQgKCkge1xuXHRcdHZhciBpID0gMDtcblx0XHR2YXIgcmVzdWx0ID0ge307XG5cdFx0Zm9yICg7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhdHRyaWJ1dGVzID0gYXJndW1lbnRzWyBpIF07XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0XHRyZXN1bHRba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGZ1bmN0aW9uIGRlY29kZSAocykge1xuXHRcdHJldHVybiBzLnJlcGxhY2UoLyglWzAtOUEtWl17Mn0pKy9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaW5pdCAoY29udmVydGVyKSB7XG5cdFx0ZnVuY3Rpb24gYXBpKCkge31cblxuXHRcdGZ1bmN0aW9uIHNldCAoa2V5LCB2YWx1ZSwgYXR0cmlidXRlcykge1xuXHRcdFx0aWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRhdHRyaWJ1dGVzID0gZXh0ZW5kKHtcblx0XHRcdFx0cGF0aDogJy8nXG5cdFx0XHR9LCBhcGkuZGVmYXVsdHMsIGF0dHJpYnV0ZXMpO1xuXG5cdFx0XHRpZiAodHlwZW9mIGF0dHJpYnV0ZXMuZXhwaXJlcyA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0YXR0cmlidXRlcy5leHBpcmVzID0gbmV3IERhdGUobmV3IERhdGUoKSAqIDEgKyBhdHRyaWJ1dGVzLmV4cGlyZXMgKiA4NjRlKzUpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBXZSdyZSB1c2luZyBcImV4cGlyZXNcIiBiZWNhdXNlIFwibWF4LWFnZVwiIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUVcblx0XHRcdGF0dHJpYnV0ZXMuZXhwaXJlcyA9IGF0dHJpYnV0ZXMuZXhwaXJlcyA/IGF0dHJpYnV0ZXMuZXhwaXJlcy50b1VUQ1N0cmluZygpIDogJyc7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciByZXN1bHQgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG5cdFx0XHRcdGlmICgvXltcXHtcXFtdLy50ZXN0KHJlc3VsdCkpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IHJlc3VsdDtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge31cblxuXHRcdFx0dmFsdWUgPSBjb252ZXJ0ZXIud3JpdGUgP1xuXHRcdFx0XHRjb252ZXJ0ZXIud3JpdGUodmFsdWUsIGtleSkgOlxuXHRcdFx0XHRlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHZhbHVlKSlcblx0XHRcdFx0XHQucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnwzQXwzQ3wzRXwzRHwyRnwzRnw0MHw1Qnw1RHw1RXw2MHw3Qnw3RHw3QykvZywgZGVjb2RlVVJJQ29tcG9uZW50KTtcblxuXHRcdFx0a2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhrZXkpKVxuXHRcdFx0XHQucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnw1RXw2MHw3QykvZywgZGVjb2RlVVJJQ29tcG9uZW50KVxuXHRcdFx0XHQucmVwbGFjZSgvW1xcKFxcKV0vZywgZXNjYXBlKTtcblxuXHRcdFx0dmFyIHN0cmluZ2lmaWVkQXR0cmlidXRlcyA9ICcnO1xuXHRcdFx0Zm9yICh2YXIgYXR0cmlidXRlTmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdGlmICghYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnOyAnICsgYXR0cmlidXRlTmFtZTtcblx0XHRcdFx0aWYgKGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0gPT09IHRydWUpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENvbnNpZGVycyBSRkMgNjI2NSBzZWN0aW9uIDUuMjpcblx0XHRcdFx0Ly8gLi4uXG5cdFx0XHRcdC8vIDMuICBJZiB0aGUgcmVtYWluaW5nIHVucGFyc2VkLWF0dHJpYnV0ZXMgY29udGFpbnMgYSAleDNCIChcIjtcIilcblx0XHRcdFx0Ly8gICAgIGNoYXJhY3Rlcjpcblx0XHRcdFx0Ly8gQ29uc3VtZSB0aGUgY2hhcmFjdGVycyBvZiB0aGUgdW5wYXJzZWQtYXR0cmlidXRlcyB1cCB0byxcblx0XHRcdFx0Ly8gbm90IGluY2x1ZGluZywgdGhlIGZpcnN0ICV4M0IgKFwiO1wiKSBjaGFyYWN0ZXIuXG5cdFx0XHRcdC8vIC4uLlxuXHRcdFx0XHRzdHJpbmdpZmllZEF0dHJpYnV0ZXMgKz0gJz0nICsgYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXS5zcGxpdCgnOycpWzBdO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKGRvY3VtZW50LmNvb2tpZSA9IGtleSArICc9JyArIHZhbHVlICsgc3RyaW5naWZpZWRBdHRyaWJ1dGVzKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBnZXQgKGtleSwganNvbikge1xuXHRcdFx0aWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgamFyID0ge307XG5cdFx0XHQvLyBUbyBwcmV2ZW50IHRoZSBmb3IgbG9vcCBpbiB0aGUgZmlyc3QgcGxhY2UgYXNzaWduIGFuIGVtcHR5IGFycmF5XG5cdFx0XHQvLyBpbiBjYXNlIHRoZXJlIGFyZSBubyBjb29raWVzIGF0IGFsbC5cblx0XHRcdHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llID8gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpIDogW107XG5cdFx0XHR2YXIgaSA9IDA7XG5cblx0XHRcdGZvciAoOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgcGFydHMgPSBjb29raWVzW2ldLnNwbGl0KCc9Jyk7XG5cdFx0XHRcdHZhciBjb29raWUgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCc9Jyk7XG5cblx0XHRcdFx0aWYgKCFqc29uICYmIGNvb2tpZS5jaGFyQXQoMCkgPT09ICdcIicpIHtcblx0XHRcdFx0XHRjb29raWUgPSBjb29raWUuc2xpY2UoMSwgLTEpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR2YXIgbmFtZSA9IGRlY29kZShwYXJ0c1swXSk7XG5cdFx0XHRcdFx0Y29va2llID0gKGNvbnZlcnRlci5yZWFkIHx8IGNvbnZlcnRlcikoY29va2llLCBuYW1lKSB8fFxuXHRcdFx0XHRcdFx0ZGVjb2RlKGNvb2tpZSk7XG5cblx0XHRcdFx0XHRpZiAoanNvbikge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0Y29va2llID0gSlNPTi5wYXJzZShjb29raWUpO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRqYXJbbmFtZV0gPSBjb29raWU7XG5cblx0XHRcdFx0XHRpZiAoa2V5ID09PSBuYW1lKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBrZXkgPyBqYXJba2V5XSA6IGphcjtcblx0XHR9XG5cblx0XHRhcGkuc2V0ID0gc2V0O1xuXHRcdGFwaS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRyZXR1cm4gZ2V0KGtleSwgZmFsc2UgLyogcmVhZCBhcyByYXcgKi8pO1xuXHRcdH07XG5cdFx0YXBpLmdldEpTT04gPSBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRyZXR1cm4gZ2V0KGtleSwgdHJ1ZSAvKiByZWFkIGFzIGpzb24gKi8pO1xuXHRcdH07XG5cdFx0YXBpLnJlbW92ZSA9IGZ1bmN0aW9uIChrZXksIGF0dHJpYnV0ZXMpIHtcblx0XHRcdHNldChrZXksICcnLCBleHRlbmQoYXR0cmlidXRlcywge1xuXHRcdFx0XHRleHBpcmVzOiAtMVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cblx0XHRhcGkuZGVmYXVsdHMgPSB7fTtcblxuXHRcdGFwaS53aXRoQ29udmVydGVyID0gaW5pdDtcblxuXHRcdHJldHVybiBhcGk7XG5cdH1cblxuXHRyZXR1cm4gaW5pdChmdW5jdGlvbiAoKSB7fSk7XG59KSk7XG4iXSwic291cmNlUm9vdCI6IiJ9