(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./assets/js/theme/common/form-utils.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/form-utils.js ***!
  \**********************************************/
/*! exports provided: classifyForm, Validators, insertStateHiddenField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classifyForm", function() { return classifyForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStateHiddenField", function() { return insertStateHiddenField; });
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/capitalize */ "./node_modules/lodash/capitalize.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.match.js */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor.js */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.object.keys.js */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/forms */ "./assets/js/theme/common/models/forms.js");









var inputTagNames = ['input', 'select', 'textarea'];

/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */
function classifyInput(input, formFieldClass) {
  var $input = $(input);
  var $formField = $input.parent("." + formFieldClass);
  var tagName = $input.prop('tagName').toLowerCase();
  var className = formFieldClass + "--" + tagName;
  var specificClassName;

  // Input can be text/checkbox/radio etc...
  if (tagName === 'input') {
    var inputType = $input.prop('type');
    if (lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(['radio', 'checkbox', 'submit'], inputType)) {
      // ie: .form-field--checkbox, .form-field--radio
      className = formFieldClass + "--" + lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(inputType);
    } else {
      // ie: .form-field--input .form-field--inputText
      specificClassName = "" + className + lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default()(inputType);
    }
  }

  // Apply class modifier
  return $formField.addClass(className).addClass(specificClassName);
}

/**
 * Apply class name to each input element in a form based on its type
 * @example
 * // Before
 * <form id="form">
 *     <div class="form-field">
 *         <input type="text">
 *     </div>
 *     <div class="form-field">
 *         <select>...</select>
 *     </div>
 * </form>
 *
 * classifyForm('#form', { formFieldClass: 'form-field' });
 *
 * // After
 * <div class="form-field form-field--input form-field--inputText">...</div>
 * <div class="form-field form-field--select">...</div>
 *
 * @param {string|object} formSelector - selector or element
 * @param {object} options
 * @return {jQuery} Element itself
 */
function classifyForm(formSelector, options) {
  if (options === void 0) {
    options = {};
  }
  var $form = $(formSelector);
  var $inputs = $form.find(inputTagNames.join(', '));

  // Obtain options
  var _options = options,
    _options$formFieldCla = _options.formFieldClass,
    formFieldClass = _options$formFieldCla === void 0 ? 'form-field' : _options$formFieldCla;

  // Classify each input in a form
  $inputs.each(function (__, input) {
    classifyInput(input, formFieldClass);
  });
  return $form;
}

/**
 * Get id from given field
 * @param {object} $field JQuery field object
 * @return {string}
 */
function getFieldId($field) {
  var fieldId = $field.prop('name').match(/(\[.*\])/);
  if (fieldId && fieldId.length !== 0) {
    return fieldId[0];
  }
  return '';
}

/**
 * Insert hidden field after State/Province field
 * @param {object} $stateField JQuery field object
 */
function insertStateHiddenField($stateField) {
  var fieldId = getFieldId($stateField);
  var stateFieldAttrs = {
    type: 'hidden',
    name: "FormFieldIsText" + fieldId,
    value: '1'
  };
  $stateField.after($('<input />', stateFieldAttrs));
}
var Validators = {
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setEmailValidation: function setEmailValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = _models_forms__WEBPACK_IMPORTED_MODULE_8__["default"].email(val);
          cb(result);
        },
        errorMessage: 'You must enter a valid email.'
      });
    }
  },
  /**
   * Validate password fields
   * @param validator
   * @param passwordSelector
   * @param password2Selector
   * @param requirements
   * @param isOptional
   */
  setPasswordValidation: function setPasswordValidation(validator, passwordSelector, password2Selector, requirements, isOptional) {
    var $password = $(passwordSelector);
    var passwordValidations = [{
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.length;
        if (isOptional) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.match(new RegExp(requirements.alpha)) && val.match(new RegExp(requirements.numeric)) && val.length >= requirements.minlength;

        // If optional and nothing entered, it is valid
        if (isOptional && val.length === 0) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: requirements.error
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val.length;
        if (isOptional) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val === $password.val();
        cb(result);
      },
      errorMessage: 'Your passwords do not match.'
    }];
    validator.add(passwordValidations);
  },
  /**
   * Validate password fields
   * @param {Nod} validator
   * @param {Object} selectors
   * @param {string} selectors.errorSelector
   * @param {string} selectors.fieldsetSelector
   * @param {string} selectors.formSelector
   * @param {string} selectors.maxPriceSelector
   * @param {string} selectors.minPriceSelector
   */
  setMinMaxPriceValidation: function setMinMaxPriceValidation(validator, selectors) {
    var errorSelector = selectors.errorSelector,
      fieldsetSelector = selectors.fieldsetSelector,
      formSelector = selectors.formSelector,
      maxPriceSelector = selectors.maxPriceSelector,
      minPriceSelector = selectors.minPriceSelector;
    validator.configure({
      form: formSelector,
      preventSubmit: true,
      successClass: '_' // KLUDGE: Don't apply success class
    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: minPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: maxPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Max. price is required.',
      selector: maxPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Min. price is required.',
      selector: minPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Input must be greater than 0.',
      selector: [minPriceSelector, maxPriceSelector],
      validate: 'min-number:0'
    });
    validator.setMessageOptions({
      selector: [minPriceSelector, maxPriceSelector],
      parent: fieldsetSelector,
      errorSpan: errorSelector
    });
  },
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setStateCountryValidation: function setStateCountryValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: 'presence',
        errorMessage: 'The \'State/Province\' field cannot be blank.'
      });
    }
  },
  /**
   * Removes classes from dirty form if previously checked
   * @param field
   */
  cleanUpStateValidation: function cleanUpStateValidation(field) {
    var $fieldClassElement = $("[data-type=\"" + field.data('fieldType') + "\"]");
    Object.keys(_nod__WEBPACK_IMPORTED_MODULE_7__["default"].classes).forEach(function (value) {
      if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_7__["default"].classes[value])) {
        $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_7__["default"].classes[value]);
      }
    });
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/models/forms.js":
/*!************************************************!*\
  !*** ./assets/js/theme/common/models/forms.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var forms = {
  email: function email(value) {
    var re = /^.+@.+\..+/;
    return re.test(value);
  },
  /**
   * Validates a password field
   * @param value
   * @returns {boolean}
   */
  password: function password(value) {
    return this.notEmpty(value);
  },
  /**
   * validates if a field is empty
   * @param value
   * @returns {boolean}
   *
   */
  notEmpty: function notEmpty(value) {
    return value.length > 0;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./assets/js/theme/f/selected-option.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/f/selected-option.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony default export */ __webpack_exports__["default"] = (function () {
  var $src = $('.show-selected-option input');
  var $selected = $('.show-selected-option input[checked]');
  var $selectedOptionLabel;
  var $selectedOption;
  function changeLabel() {
    $selectedOptionLabel = $(this).siblings().children('span[data-option-value]');
    $selectedOption = $(this).attr('data-option-label');
    $selectedOptionLabel.text($selectedOption);
  }
  $selected.each(changeLabel);
  $src.on('click', changeLabel);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _f_selected_option__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./f/selected-option */ "./assets/js/theme/f/selected-option.js");

function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/*
 Import all product specific js
 */







var Product = /*#__PURE__*/function (_PageManager) {
  function Product(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    return _this;
  }
  _inheritsLoose(Product, _PageManager);
  var _proto = Product.prototype;
  _proto.onReady = function onReady() {
    var _this2 = this;
    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator;

    // Init collapsible
    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_3__["default"])();
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_4__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    Object(_product_video_gallery__WEBPACK_IMPORTED_MODULE_5__["default"])();
    var $reviewForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_6__["classifyForm"])('.writeReview-form');
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_2__["default"]($reviewForm);
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }
      return false;
    });
    if (this.context.enableSelectedOptionLabel) {
      Object(_f_selected_option__WEBPACK_IMPORTED_MODULE_7__["default"])();
    }
    var Sticky = __webpack_require__(/*! sticky-js */ "./node_modules/sticky-js/index.js");
    var sticky = new Sticky('.sticky-product'); // eslint-disable-line no-unused-vars

    this.productReviewHandler();
  };
  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };
  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");




var _default = /*#__PURE__*/function () {
  function _default($reviewForm) {
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: $reviewForm.find('input[type="submit"]')
    });
    this.$reviewsContent = $('#product-reviews');
    this.$collapsible = $('[data-collapsible]', this.$reviewsContent);
    this.initLinkBind();
    this.injectPaginationLink();
    this.collapseReviews();
  }

  /**
   * On initial page load, the user clicks on "(12 Reviews)" link
   * The browser jumps to the review page and should expand the reviews section
   */
  var _proto = _default.prototype;
  _proto.initLinkBind = function initLinkBind() {
    var _this = this;
    var $content = $('#productReviews-content', this.$reviewsContent);
    $('.productView-reviewLink').on('click', function () {
      if (!$content.hasClass('is-open')) {
        _this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["CollapsibleEvents"].click);
      }
    });
  };
  _proto.collapseReviews = function collapseReviews() {
    // We're in paginating state, do not collapse
    if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0) {
      return;
    }

    // force collapse on page load
    this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["CollapsibleEvents"].click);
  }

  /**
   * Inject ID into the pagination link
   */;
  _proto.injectPaginationLink = function injectPaginationLink() {
    var $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
    var $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);
    if ($nextLink.length) {
      $nextLink.attr('href', $nextLink.attr('href') + " #product-reviews");
    }
    if ($prevLink.length) {
      $prevLink.attr('href', $prevLink.attr('href') + " #product-reviews");
    }
  };
  _proto.registerValidation = function registerValidation(context) {
    this.context = context;
    this.validator.add([{
      selector: '[name="revrating"]',
      validate: 'presence',
      errorMessage: this.context.reviewRating
    }, {
      selector: '[name="revtitle"]',
      validate: 'presence',
      errorMessage: this.context.reviewSubject
    }, {
      selector: '[name="revtext"]',
      validate: 'presence',
      errorMessage: this.context.reviewComment
    }, {
      selector: '[name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.reviewEmail
    }]);
    return this.validator;
  };
  _proto.validate = function validate() {
    return this.validator.performCheck();
  };
  return _default;
}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/*! exports provided: VideoGallery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGallery", function() { return VideoGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return videoGallery; });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);

var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }
  var _proto = VideoGallery.prototype;
  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };
  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };
  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };
  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };
  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;
    if (isInitialized) {
      return;
    }
    $el.data(pluginKey, new VideoGallery($el));
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9tb2RlbHMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2Yvc2VsZWN0ZWQtb3B0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L3Jldmlld3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJpbnB1dFRhZ05hbWVzIiwiY2xhc3NpZnlJbnB1dCIsImlucHV0IiwiZm9ybUZpZWxkQ2xhc3MiLCIkaW5wdXQiLCIkIiwiJGZvcm1GaWVsZCIsInBhcmVudCIsInRhZ05hbWUiLCJwcm9wIiwidG9Mb3dlckNhc2UiLCJjbGFzc05hbWUiLCJzcGVjaWZpY0NsYXNzTmFtZSIsImlucHV0VHlwZSIsIl9pbmNsdWRlcyIsIl9jYW1lbENhc2UiLCJfY2FwaXRhbGl6ZSIsImFkZENsYXNzIiwiY2xhc3NpZnlGb3JtIiwiZm9ybVNlbGVjdG9yIiwib3B0aW9ucyIsIiRmb3JtIiwiJGlucHV0cyIsImZpbmQiLCJqb2luIiwiX29wdGlvbnMiLCJfb3B0aW9ucyRmb3JtRmllbGRDbGEiLCJlYWNoIiwiX18iLCJnZXRGaWVsZElkIiwiJGZpZWxkIiwiZmllbGRJZCIsIm1hdGNoIiwibGVuZ3RoIiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsIiRzdGF0ZUZpZWxkIiwic3RhdGVGaWVsZEF0dHJzIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImFmdGVyIiwiVmFsaWRhdG9ycyIsInNldEVtYWlsVmFsaWRhdGlvbiIsInZhbGlkYXRvciIsImZpZWxkIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwidmFsIiwicmVzdWx0IiwiZm9ybXMiLCJlbWFpbCIsImVycm9yTWVzc2FnZSIsInNldFBhc3N3b3JkVmFsaWRhdGlvbiIsInBhc3N3b3JkU2VsZWN0b3IiLCJwYXNzd29yZDJTZWxlY3RvciIsInJlcXVpcmVtZW50cyIsImlzT3B0aW9uYWwiLCIkcGFzc3dvcmQiLCJwYXNzd29yZFZhbGlkYXRpb25zIiwiUmVnRXhwIiwiYWxwaGEiLCJudW1lcmljIiwibWlubGVuZ3RoIiwiZXJyb3IiLCJzZXRNaW5NYXhQcmljZVZhbGlkYXRpb24iLCJzZWxlY3RvcnMiLCJlcnJvclNlbGVjdG9yIiwiZmllbGRzZXRTZWxlY3RvciIsIm1heFByaWNlU2VsZWN0b3IiLCJtaW5QcmljZVNlbGVjdG9yIiwiY29uZmlndXJlIiwiZm9ybSIsInByZXZlbnRTdWJtaXQiLCJzdWNjZXNzQ2xhc3MiLCJzZXRNZXNzYWdlT3B0aW9ucyIsImVycm9yU3BhbiIsInNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24iLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwiJGZpZWxkQ2xhc3NFbGVtZW50IiwiZGF0YSIsIk9iamVjdCIsImtleXMiLCJub2QiLCJjbGFzc2VzIiwiZm9yRWFjaCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJyZSIsInRlc3QiLCJwYXNzd29yZCIsIm5vdEVtcHR5IiwiJHNyYyIsIiRzZWxlY3RlZCIsIiRzZWxlY3RlZE9wdGlvbkxhYmVsIiwiJHNlbGVjdGVkT3B0aW9uIiwiY2hhbmdlTGFiZWwiLCJzaWJsaW5ncyIsImNoaWxkcmVuIiwiYXR0ciIsInRleHQiLCJvbiIsIlByb2R1Y3QiLCJfUGFnZU1hbmFnZXIiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiJHJldmlld0xpbmsiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJfdGhpczIiLCJkb2N1bWVudCIsImluZGV4T2YiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwidGl0bGUiLCJwYXRobmFtZSIsImNvbGxhcHNpYmxlRmFjdG9yeSIsInByb2R1Y3REZXRhaWxzIiwiUHJvZHVjdERldGFpbHMiLCJCQ0RhdGEiLCJwcm9kdWN0X2F0dHJpYnV0ZXMiLCJzZXRQcm9kdWN0VmFyaWFudCIsInZpZGVvR2FsbGVyeSIsIiRyZXZpZXdGb3JtIiwicmV2aWV3IiwiUmV2aWV3IiwicmVnaXN0ZXJWYWxpZGF0aW9uIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiZW5hYmxlU2VsZWN0ZWRPcHRpb25MYWJlbCIsInNlbGVjdGVkT3B0aW9uIiwiU3RpY2t5IiwicmVxdWlyZSIsInN0aWNreSIsInByb2R1Y3RSZXZpZXdIYW5kbGVyIiwidHJpZ2dlciIsIlBhZ2VNYW5hZ2VyIiwiX2RlZmF1bHQiLCJzdWJtaXQiLCIkcmV2aWV3c0NvbnRlbnQiLCIkY29sbGFwc2libGUiLCJpbml0TGlua0JpbmQiLCJpbmplY3RQYWdpbmF0aW9uTGluayIsImNvbGxhcHNlUmV2aWV3cyIsIiRjb250ZW50IiwiQ29sbGFwc2libGVFdmVudHMiLCJjbGljayIsImhhc2giLCIkbmV4dExpbmsiLCIkcHJldkxpbmsiLCJyZXZpZXdSYXRpbmciLCJyZXZpZXdTdWJqZWN0IiwicmV2aWV3Q29tbWVudCIsInJldmlld0VtYWlsIiwiVmlkZW9HYWxsZXJ5IiwiJGVsZW1lbnQiLCIkcGxheWVyIiwiJHZpZGVvcyIsImN1cnJlbnRWaWRlbyIsImJpbmRFdmVudHMiLCJzZWxlY3ROZXdWaWRlbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIiR0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCIkc2VsZWN0ZWRUaHVtYiIsInNldE1haW5WaWRlbyIsInNldEFjdGl2ZVRodW1iIiwiYmluZCIsInBsdWdpbktleSIsIiR2aWRlb0dhbGxlcnkiLCJpbmRleCIsImVsZW1lbnQiLCIkZWwiLCJpc0luaXRpYWxpemVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUMsSUFBSSxDQUFDLENBQUM7RUFDNUQsQ0FBQztFQUFBLE9BQUFmLFlBQUE7QUFBQTtBQUdVLFNBQVNoQyxZQUFZQSxDQUFBLEVBQUc7RUFDbkMsSUFBTWdELFNBQVMsR0FBRyxlQUFlO0VBQ2pDLElBQU1DLGFBQWEsR0FBRzlLLENBQUMsWUFBVTZLLFNBQVMsTUFBRyxDQUFDO0VBRTlDQyxhQUFhLENBQUN4SixJQUFJLENBQUMsVUFBQ3lKLEtBQUssRUFBRUMsT0FBTyxFQUFLO0lBQ25DLElBQU1DLEdBQUcsR0FBR2pMLENBQUMsQ0FBQ2dMLE9BQU8sQ0FBQztJQUN0QixJQUFNRSxhQUFhLEdBQUdELEdBQUcsQ0FBQ3JHLElBQUksQ0FBQ2lHLFNBQVMsQ0FBQyxZQUFZaEIsWUFBWTtJQUVqRSxJQUFJcUIsYUFBYSxFQUFFO01BQ2Y7SUFDSjtJQUVBRCxHQUFHLENBQUNyRyxJQUFJLENBQUNpRyxTQUFTLEVBQUUsSUFBSWhCLFlBQVksQ0FBQ29CLEdBQUcsQ0FBQyxDQUFDO0VBQzlDLENBQUMsQ0FBQztBQUNOLEMiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG5vZCBmcm9tICcuL25vZCc7XG5pbXBvcnQgZm9ybXMgZnJvbSAnLi9tb2RlbHMvZm9ybXMnO1xuXG5jb25zdCBpbnB1dFRhZ05hbWVzID0gW1xuICAgICdpbnB1dCcsXG4gICAgJ3NlbGVjdCcsXG4gICAgJ3RleHRhcmVhJyxcbl07XG5cbi8qKlxuICogQXBwbHkgY2xhc3MgbmFtZSB0byBhbiBpbnB1dCBlbGVtZW50IG9uIGl0cyB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gaW5wdXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtRmllbGRDbGFzc1xuICogQHJldHVybiB7b2JqZWN0fSBFbGVtZW50IGl0c2VsZlxuICovXG5mdW5jdGlvbiBjbGFzc2lmeUlucHV0KGlucHV0LCBmb3JtRmllbGRDbGFzcykge1xuICAgIGNvbnN0ICRpbnB1dCA9ICQoaW5wdXQpO1xuICAgIGNvbnN0ICRmb3JtRmllbGQgPSAkaW5wdXQucGFyZW50KGAuJHtmb3JtRmllbGRDbGFzc31gKTtcbiAgICBjb25zdCB0YWdOYW1lID0gJGlucHV0LnByb3AoJ3RhZ05hbWUnKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgbGV0IGNsYXNzTmFtZSA9IGAke2Zvcm1GaWVsZENsYXNzfS0tJHt0YWdOYW1lfWA7XG4gICAgbGV0IHNwZWNpZmljQ2xhc3NOYW1lO1xuXG4gICAgLy8gSW5wdXQgY2FuIGJlIHRleHQvY2hlY2tib3gvcmFkaW8gZXRjLi4uXG4gICAgaWYgKHRhZ05hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgY29uc3QgaW5wdXRUeXBlID0gJGlucHV0LnByb3AoJ3R5cGUnKTtcblxuICAgICAgICBpZiAoXy5pbmNsdWRlcyhbJ3JhZGlvJywgJ2NoZWNrYm94JywgJ3N1Ym1pdCddLCBpbnB1dFR5cGUpKSB7XG4gICAgICAgICAgICAvLyBpZTogLmZvcm0tZmllbGQtLWNoZWNrYm94LCAuZm9ybS1maWVsZC0tcmFkaW9cbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke2Zvcm1GaWVsZENsYXNzfS0tJHtfLmNhbWVsQ2FzZShpbnB1dFR5cGUpfWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBpZTogLmZvcm0tZmllbGQtLWlucHV0IC5mb3JtLWZpZWxkLS1pbnB1dFRleHRcbiAgICAgICAgICAgIHNwZWNpZmljQ2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSR7Xy5jYXBpdGFsaXplKGlucHV0VHlwZSl9YDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFwcGx5IGNsYXNzIG1vZGlmaWVyXG4gICAgcmV0dXJuICRmb3JtRmllbGRcbiAgICAgICAgLmFkZENsYXNzKGNsYXNzTmFtZSlcbiAgICAgICAgLmFkZENsYXNzKHNwZWNpZmljQ2xhc3NOYW1lKTtcbn1cblxuLyoqXG4gKiBBcHBseSBjbGFzcyBuYW1lIHRvIGVhY2ggaW5wdXQgZWxlbWVudCBpbiBhIGZvcm0gYmFzZWQgb24gaXRzIHR5cGVcbiAqIEBleGFtcGxlXG4gKiAvLyBCZWZvcmVcbiAqIDxmb3JtIGlkPVwiZm9ybVwiPlxuICogICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+XG4gKiAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPlxuICogICAgIDwvZGl2PlxuICogICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+XG4gKiAgICAgICAgIDxzZWxlY3Q+Li4uPC9zZWxlY3Q+XG4gKiAgICAgPC9kaXY+XG4gKiA8L2Zvcm0+XG4gKlxuICogY2xhc3NpZnlGb3JtKCcjZm9ybScsIHsgZm9ybUZpZWxkQ2xhc3M6ICdmb3JtLWZpZWxkJyB9KTtcbiAqXG4gKiAvLyBBZnRlclxuICogPGRpdiBjbGFzcz1cImZvcm0tZmllbGQgZm9ybS1maWVsZC0taW5wdXQgZm9ybS1maWVsZC0taW5wdXRUZXh0XCI+Li4uPC9kaXY+XG4gKiA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZCBmb3JtLWZpZWxkLS1zZWxlY3RcIj4uLi48L2Rpdj5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IGZvcm1TZWxlY3RvciAtIHNlbGVjdG9yIG9yIGVsZW1lbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtqUXVlcnl9IEVsZW1lbnQgaXRzZWxmXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2lmeUZvcm0oZm9ybVNlbGVjdG9yLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCAkZm9ybSA9ICQoZm9ybVNlbGVjdG9yKTtcbiAgICBjb25zdCAkaW5wdXRzID0gJGZvcm0uZmluZChpbnB1dFRhZ05hbWVzLmpvaW4oJywgJykpO1xuXG4gICAgLy8gT2J0YWluIG9wdGlvbnNcbiAgICBjb25zdCB7IGZvcm1GaWVsZENsYXNzID0gJ2Zvcm0tZmllbGQnIH0gPSBvcHRpb25zO1xuXG4gICAgLy8gQ2xhc3NpZnkgZWFjaCBpbnB1dCBpbiBhIGZvcm1cbiAgICAkaW5wdXRzLmVhY2goKF9fLCBpbnB1dCkgPT4ge1xuICAgICAgICBjbGFzc2lmeUlucHV0KGlucHV0LCBmb3JtRmllbGRDbGFzcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gJGZvcm07XG59XG5cbi8qKlxuICogR2V0IGlkIGZyb20gZ2l2ZW4gZmllbGRcbiAqIEBwYXJhbSB7b2JqZWN0fSAkZmllbGQgSlF1ZXJ5IGZpZWxkIG9iamVjdFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRGaWVsZElkKCRmaWVsZCkge1xuICAgIGNvbnN0IGZpZWxkSWQgPSAkZmllbGQucHJvcCgnbmFtZScpLm1hdGNoKC8oXFxbLipcXF0pLyk7XG5cbiAgICBpZiAoZmllbGRJZCAmJiBmaWVsZElkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gZmllbGRJZFswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogSW5zZXJ0IGhpZGRlbiBmaWVsZCBhZnRlciBTdGF0ZS9Qcm92aW5jZSBmaWVsZFxuICogQHBhcmFtIHtvYmplY3R9ICRzdGF0ZUZpZWxkIEpRdWVyeSBmaWVsZCBvYmplY3RcbiAqL1xuZnVuY3Rpb24gaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCgkc3RhdGVGaWVsZCkge1xuICAgIGNvbnN0IGZpZWxkSWQgPSBnZXRGaWVsZElkKCRzdGF0ZUZpZWxkKTtcbiAgICBjb25zdCBzdGF0ZUZpZWxkQXR0cnMgPSB7XG4gICAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgICBuYW1lOiBgRm9ybUZpZWxkSXNUZXh0JHtmaWVsZElkfWAsXG4gICAgICAgIHZhbHVlOiAnMScsXG4gICAgfTtcblxuICAgICRzdGF0ZUZpZWxkLmFmdGVyKCQoJzxpbnB1dCAvPicsIHN0YXRlRmllbGRBdHRycykpO1xufVxuXG5jb25zdCBWYWxpZGF0b3JzID0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBuZXcgdmFsaWRhdGlvbiB3aGVuIHRoZSBmb3JtIGlzIGRpcnR5XG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIHNldEVtYWlsVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLmVtYWlsKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdSBtdXN0IGVudGVyIGEgdmFsaWQgZW1haWwuJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIHBhc3N3b3JkIGZpZWxkc1xuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmRTZWxlY3RvclxuICAgICAqIEBwYXJhbSBwYXNzd29yZDJTZWxlY3RvclxuICAgICAqIEBwYXJhbSByZXF1aXJlbWVudHNcbiAgICAgKiBAcGFyYW0gaXNPcHRpb25hbFxuICAgICAqL1xuICAgIHNldFBhc3N3b3JkVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgcGFzc3dvcmRTZWxlY3RvciwgcGFzc3dvcmQyU2VsZWN0b3IsIHJlcXVpcmVtZW50cywgaXNPcHRpb25hbCkgPT4ge1xuICAgICAgICBjb25zdCAkcGFzc3dvcmQgPSAkKHBhc3N3b3JkU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBwYXNzd29yZFZhbGlkYXRpb25zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSBwYXNzd29yZC4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLm1hdGNoKG5ldyBSZWdFeHAocmVxdWlyZW1lbnRzLmFscGhhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbC5tYXRjaChuZXcgUmVnRXhwKHJlcXVpcmVtZW50cy5udW1lcmljKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbC5sZW5ndGggPj0gcmVxdWlyZW1lbnRzLm1pbmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBvcHRpb25hbCBhbmQgbm90aGluZyBlbnRlcmVkLCBpdCBpcyB2YWxpZFxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCAmJiB2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiByZXF1aXJlbWVudHMuZXJyb3IsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdSBtdXN0IGVudGVyIGEgcGFzc3dvcmQuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkMlNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwgPT09ICRwYXNzd29yZC52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91ciBwYXNzd29yZHMgZG8gbm90IG1hdGNoLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQocGFzc3dvcmRWYWxpZGF0aW9ucyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIHBhc3N3b3JkIGZpZWxkc1xuICAgICAqIEBwYXJhbSB7Tm9kfSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2VsZWN0b3JzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5lcnJvclNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5maWVsZHNldFNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5mb3JtU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLm1heFByaWNlU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLm1pblByaWNlU2VsZWN0b3JcbiAgICAgKi9cbiAgICBzZXRNaW5NYXhQcmljZVZhbGlkYXRpb246ICh2YWxpZGF0b3IsIHNlbGVjdG9ycykgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBlcnJvclNlbGVjdG9yLFxuICAgICAgICAgICAgZmllbGRzZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIG1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICBtaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICB9ID0gc2VsZWN0b3JzO1xuXG4gICAgICAgIHZhbGlkYXRvci5jb25maWd1cmUoe1xuICAgICAgICAgICAgZm9ybTogZm9ybVNlbGVjdG9yLFxuICAgICAgICAgICAgcHJldmVudFN1Ym1pdDogdHJ1ZSxcbiAgICAgICAgICAgIHN1Y2Nlc3NDbGFzczogJ18nLCAvLyBLTFVER0U6IERvbid0IGFwcGx5IHN1Y2Nlc3MgY2xhc3NcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdNaW4gcHJpY2UgbXVzdCBiZSBsZXNzIHRoYW4gbWF4LiBwcmljZS4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogYG1pbi1tYXg6JHttaW5QcmljZVNlbGVjdG9yfToke21heFByaWNlU2VsZWN0b3J9YCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdNaW4gcHJpY2UgbXVzdCBiZSBsZXNzIHRoYW4gbWF4LiBwcmljZS4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogYG1pbi1tYXg6JHttaW5QcmljZVNlbGVjdG9yfToke21heFByaWNlU2VsZWN0b3J9YCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdNYXguIHByaWNlIGlzIHJlcXVpcmVkLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01pbi4gcHJpY2UgaXMgcmVxdWlyZWQuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnSW5wdXQgbXVzdCBiZSBncmVhdGVyIHRoYW4gMC4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IFttaW5QcmljZVNlbGVjdG9yLCBtYXhQcmljZVNlbGVjdG9yXSxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAnbWluLW51bWJlcjowJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLnNldE1lc3NhZ2VPcHRpb25zKHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBbbWluUHJpY2VTZWxlY3RvciwgbWF4UHJpY2VTZWxlY3Rvcl0sXG4gICAgICAgICAgICBwYXJlbnQ6IGZpZWxkc2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBlcnJvclNwYW46IGVycm9yU2VsZWN0b3IsXG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgbmV3IHZhbGlkYXRpb24gd2hlbiB0aGUgZm9ybSBpcyBkaXJ0eVxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdUaGUgXFwnU3RhdGUvUHJvdmluY2VcXCcgZmllbGQgY2Fubm90IGJlIGJsYW5rLicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGNsYXNzZXMgZnJvbSBkaXJ0eSBmb3JtIGlmIHByZXZpb3VzbHkgY2hlY2tlZFxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIGNsZWFuVXBTdGF0ZVZhbGlkYXRpb246IChmaWVsZCkgPT4ge1xuICAgICAgICBjb25zdCAkZmllbGRDbGFzc0VsZW1lbnQgPSAkKChgW2RhdGEtdHlwZT1cIiR7ZmllbGQuZGF0YSgnZmllbGRUeXBlJyl9XCJdYCkpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKG5vZC5jbGFzc2VzKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCRmaWVsZENsYXNzRWxlbWVudC5oYXNDbGFzcyhub2QuY2xhc3Nlc1t2YWx1ZV0pKSB7XG4gICAgICAgICAgICAgICAgJGZpZWxkQ2xhc3NFbGVtZW50LnJlbW92ZUNsYXNzKG5vZC5jbGFzc2VzW3ZhbHVlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG59O1xuXG5leHBvcnQgeyBWYWxpZGF0b3JzLCBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIH07XG4iLCJjb25zdCBmb3JtcyA9IHtcbiAgICBlbWFpbCh2YWx1ZSkge1xuICAgICAgICBjb25zdCByZSA9IC9eLitALitcXC4uKy87XG4gICAgICAgIHJldHVybiByZS50ZXN0KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGVzIGEgcGFzc3dvcmQgZmllbGRcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwYXNzd29yZCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RFbXB0eSh2YWx1ZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHZhbGlkYXRlcyBpZiBhIGZpZWxkIGlzIGVtcHR5XG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICpcbiAgICAgKi9cbiAgICBub3RFbXB0eSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMDtcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybXM7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgJHNyYyA9ICQoJy5zaG93LXNlbGVjdGVkLW9wdGlvbiBpbnB1dCcpO1xuICAgIGNvbnN0ICRzZWxlY3RlZCA9ICQoJy5zaG93LXNlbGVjdGVkLW9wdGlvbiBpbnB1dFtjaGVja2VkXScpO1xuICAgIGxldCAkc2VsZWN0ZWRPcHRpb25MYWJlbDtcbiAgICBsZXQgJHNlbGVjdGVkT3B0aW9uO1xuXG4gICAgZnVuY3Rpb24gY2hhbmdlTGFiZWwoKSB7XG4gICAgICAgICRzZWxlY3RlZE9wdGlvbkxhYmVsID0gJCh0aGlzKS5zaWJsaW5ncygpLmNoaWxkcmVuKCdzcGFuW2RhdGEtb3B0aW9uLXZhbHVlXScpO1xuICAgICAgICAkc2VsZWN0ZWRPcHRpb24gPSAkKHRoaXMpLmF0dHIoJ2RhdGEtb3B0aW9uLWxhYmVsJyk7XG5cbiAgICAgICAgJHNlbGVjdGVkT3B0aW9uTGFiZWwudGV4dCgkc2VsZWN0ZWRPcHRpb24pO1xuICAgIH1cblxuICAgICRzZWxlY3RlZC5lYWNoKGNoYW5nZUxhYmVsKTtcbiAgICAkc3JjLm9uKCdjbGljaycsIGNoYW5nZUxhYmVsKTtcbn1cbiIsIi8qXG4gSW1wb3J0IGFsbCBwcm9kdWN0IHNwZWNpZmljIGpzXG4gKi9cbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgUmV2aWV3IGZyb20gJy4vcHJvZHVjdC9yZXZpZXdzJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0IFByb2R1Y3REZXRhaWxzIGZyb20gJy4vY29tbW9uL3Byb2R1Y3QtZGV0YWlscyc7XG5pbXBvcnQgdmlkZW9HYWxsZXJ5IGZyb20gJy4vcHJvZHVjdC92aWRlby1nYWxsZXJ5JztcbmltcG9ydCB7IGNsYXNzaWZ5Rm9ybSB9IGZyb20gJy4vY29tbW9uL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IHNlbGVjdGVkT3B0aW9uIGZyb20gJy4vZi9zZWxlY3RlZC1vcHRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIHRoaXMuJHJldmlld0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIC8vIExpc3RlbiBmb3IgZm91bmRhdGlvbiBtb2RhbCBjbG9zZSBldmVudHMgdG8gc2FuaXRpemUgVVJMIGFmdGVyIHJldmlldy5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2Nsb3NlLmZuZHRuLnJldmVhbCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xICYmIHR5cGVvZiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB2YWxpZGF0b3I7XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZVxuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICB0aGlzLnByb2R1Y3REZXRhaWxzID0gbmV3IFByb2R1Y3REZXRhaWxzKCQoJy5wcm9kdWN0VmlldycpLCB0aGlzLmNvbnRleHQsIHdpbmRvdy5CQ0RhdGEucHJvZHVjdF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscy5zZXRQcm9kdWN0VmFyaWFudCgpO1xuXG4gICAgICAgIHZpZGVvR2FsbGVyeSgpO1xuXG4gICAgICAgIGNvbnN0ICRyZXZpZXdGb3JtID0gY2xhc3NpZnlGb3JtKCcud3JpdGVSZXZpZXctZm9ybScpO1xuICAgICAgICBjb25zdCByZXZpZXcgPSBuZXcgUmV2aWV3KCRyZXZpZXdGb3JtKTtcblxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLXJldmlldy1mb3JtXCJdJywgKCkgPT4ge1xuICAgICAgICAgICAgdmFsaWRhdG9yID0gcmV2aWV3LnJlZ2lzdGVyVmFsaWRhdGlvbih0aGlzLmNvbnRleHQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkcmV2aWV3Rm9ybS5vbignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LmVuYWJsZVNlbGVjdGVkT3B0aW9uTGFiZWwpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBTdGlja3kgPSByZXF1aXJlKCdzdGlja3ktanMnKTtcbiAgICAgICAgY29uc3Qgc3RpY2t5ID0gbmV3IFN0aWNreSgnLnN0aWNreS1wcm9kdWN0Jyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuICAgICAgICB0aGlzLnByb2R1Y3RSZXZpZXdIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgcHJvZHVjdFJldmlld0hhbmRsZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLiRyZXZpZXdMaW5rLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xuaW1wb3J0IHsgQ29sbGFwc2libGVFdmVudHMgfSBmcm9tICcuLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoJHJldmlld0Zvcm0pIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkcmV2aWV3Rm9ybS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHJldmlld3NDb250ZW50ID0gJCgnI3Byb2R1Y3QtcmV2aWV3cycpO1xuICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZSA9ICQoJ1tkYXRhLWNvbGxhcHNpYmxlXScsIHRoaXMuJHJldmlld3NDb250ZW50KTtcblxuICAgICAgICB0aGlzLmluaXRMaW5rQmluZCgpO1xuICAgICAgICB0aGlzLmluamVjdFBhZ2luYXRpb25MaW5rKCk7XG4gICAgICAgIHRoaXMuY29sbGFwc2VSZXZpZXdzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gaW5pdGlhbCBwYWdlIGxvYWQsIHRoZSB1c2VyIGNsaWNrcyBvbiBcIigxMiBSZXZpZXdzKVwiIGxpbmtcbiAgICAgKiBUaGUgYnJvd3NlciBqdW1wcyB0byB0aGUgcmV2aWV3IHBhZ2UgYW5kIHNob3VsZCBleHBhbmQgdGhlIHJldmlld3Mgc2VjdGlvblxuICAgICAqL1xuICAgIGluaXRMaW5rQmluZCgpIHtcbiAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkKCcjcHJvZHVjdFJldmlld3MtY29udGVudCcsIHRoaXMuJHJldmlld3NDb250ZW50KTtcblxuICAgICAgICAkKCcucHJvZHVjdFZpZXctcmV2aWV3TGluaycpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghJGNvbnRlbnQuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMuY2xpY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZVJldmlld3MoKSB7XG4gICAgICAgIC8vIFdlJ3JlIGluIHBhZ2luYXRpbmcgc3RhdGUsIGRvIG5vdCBjb2xsYXBzZVxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggJiYgd2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignI3Byb2R1Y3QtcmV2aWV3cycpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JjZSBjb2xsYXBzZSBvbiBwYWdlIGxvYWRcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0IElEIGludG8gdGhlIHBhZ2luYXRpb24gbGlua1xuICAgICAqL1xuICAgIGluamVjdFBhZ2luYXRpb25MaW5rKCkge1xuICAgICAgICBjb25zdCAkbmV4dExpbmsgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1uZXh0IC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG4gICAgICAgIGNvbnN0ICRwcmV2TGluayA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLXByZXZpb3VzIC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgaWYgKCRuZXh0TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRuZXh0TGluay5hdHRyKCdocmVmJywgYCR7JG5leHRMaW5rLmF0dHIoJ2hyZWYnKX0gI3Byb2R1Y3QtcmV2aWV3c2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwcmV2TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRwcmV2TGluay5hdHRyKCdocmVmJywgYCR7JHByZXZMaW5rLmF0dHIoJ2hyZWYnKX0gI3Byb2R1Y3QtcmV2aWV3c2ApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJWYWxpZGF0aW9uKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IuYWRkKFt7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2cmF0aW5nXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3UmF0aW5nLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGl0bGVcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdTdWJqZWN0LFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGV4dFwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld0NvbW1lbnQsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJlbWFpbFwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3RW1haWwsXG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVmlkZW9HYWxsZXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudCkge1xuICAgICAgICB0aGlzLiRwbGF5ZXIgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1wbGF5ZXJdJyk7XG4gICAgICAgIHRoaXMuJHZpZGVvcyA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLWl0ZW1dJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge307XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHNlbGVjdE5ld1ZpZGVvKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7XG4gICAgICAgICAgICBpZDogJHRhcmdldC5kYXRhKCd2aWRlb0lkJyksXG4gICAgICAgICAgICAkc2VsZWN0ZWRUaHVtYjogJHRhcmdldCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldE1haW5WaWRlbygpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKCk7XG4gICAgfVxuXG4gICAgc2V0TWFpblZpZGVvKCkge1xuICAgICAgICB0aGlzLiRwbGF5ZXIuYXR0cignc3JjJywgYC8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dGhpcy5jdXJyZW50VmlkZW8uaWR9YCk7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlVGh1bWIoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvLiRzZWxlY3RlZFRodW1iLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiR2aWRlb3Mub24oJ2NsaWNrJywgdGhpcy5zZWxlY3ROZXdWaWRlby5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZpZGVvR2FsbGVyeSgpIHtcbiAgICBjb25zdCBwbHVnaW5LZXkgPSAndmlkZW8tZ2FsbGVyeSc7XG4gICAgY29uc3QgJHZpZGVvR2FsbGVyeSA9ICQoYFtkYXRhLSR7cGx1Z2luS2V5fV1gKTtcblxuICAgICR2aWRlb0dhbGxlcnkuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgJGVsID0gJChlbGVtZW50KTtcbiAgICAgICAgY29uc3QgaXNJbml0aWFsaXplZCA9ICRlbC5kYXRhKHBsdWdpbktleSkgaW5zdGFuY2VvZiBWaWRlb0dhbGxlcnk7XG5cbiAgICAgICAgaWYgKGlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICRlbC5kYXRhKHBsdWdpbktleSwgbmV3IFZpZGVvR2FsbGVyeSgkZWwpKTtcbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=