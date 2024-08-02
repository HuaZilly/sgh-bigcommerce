(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./assets/js/theme/common/collapsible.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/common/collapsible.js ***!
  \***********************************************/
/*! exports provided: CollapsibleEvents, Collapsible, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsibleEvents", function() { return CollapsibleEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collapsible", function() { return Collapsible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return collapsibleFactory; });
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _media_query_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media-query-list */ "./assets/js/theme/common/media-query-list.js");




function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var PLUGIN_KEY = 'collapsible';
var CollapsibleEvents = {
  open: 'open.collapsible',
  close: 'close.collapsible',
  toggle: 'toggle.collapsible',
  click: 'click.collapsible'
};
var CollapsibleState = {
  closed: 'closed',
  open: 'open'
};
function prependHash(id) {
  if (id && id.indexOf('#') === 0) {
    return id;
  }
  return "#" + id;
}
function optionsFromData($element) {
  return {
    disabledBreakpoint: $element.data(PLUGIN_KEY + "DisabledBreakpoint"),
    disabledState: $element.data(PLUGIN_KEY + "DisabledState"),
    enabledState: $element.data(PLUGIN_KEY + "EnabledState"),
    openClassName: $element.data(PLUGIN_KEY + "OpenClassName")
  };
}

/**
 * Collapse/Expand toggle
 */
var Collapsible = /*#__PURE__*/function () {
  /**
   * @param {jQuery} $toggle - Trigger button
   * @param {jQuery} $target - Content to collapse / expand
   * @param {Object} [options] - Configurable options
   * @param {Object} [options.$context]
   * @param {Object} [options.disabledBreakpoint]
   * @param {Object} [options.disabledState]
   * @param {Object} [options.enabledState]
   * @param {Object} [options.openClassName]
   * @example
   *
   * <button id="#more">Collapse</button>
   * <div id="content">...</div>
   *
   * new Collapsible($('#more'), $('#content'));
   */
  function Collapsible($toggle, $target, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      disabledBreakpoint = _ref.disabledBreakpoint,
      disabledState = _ref.disabledState,
      enabledState = _ref.enabledState,
      _ref$openClassName = _ref.openClassName,
      openClassName = _ref$openClassName === void 0 ? 'is-open' : _ref$openClassName;
    this.$toggle = $toggle;
    this.$target = $target;
    this.targetId = $target.attr('id');
    this.openClassName = openClassName;
    this.disabledState = disabledState;
    this.enabledState = enabledState;
    if (disabledBreakpoint) {
      this.disabledMediaQueryList = Object(_media_query_list__WEBPACK_IMPORTED_MODULE_4__["default"])(disabledBreakpoint);
    }
    if (this.disabledMediaQueryList) {
      this.disabled = this.disabledMediaQueryList.matches;
    } else {
      this.disabled = false;
    }

    // Auto-bind
    this.onClicked = this.onClicked.bind(this);
    this.onDisabledMediaQueryListMatch = this.onDisabledMediaQueryListMatch.bind(this);

    // Assign DOM attributes
    this.$target.attr('aria-hidden', this.isCollapsed);
    this.$toggle.attr('aria-controls', $target.attr('id')).attr('aria-expanded', this.isOpen);

    // Listen
    this.bindEvents();
  }
  var _proto = Collapsible.prototype;
  _proto.open = function open(_temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
      _ref2$notify = _ref2.notify,
      notify = _ref2$notify === void 0 ? true : _ref2$notify;
    this.$toggle.addClass(this.openClassName).attr('aria-expanded', true);
    this.$target.addClass(this.openClassName).attr('aria-hidden', false);
    if (notify) {
      this.$toggle.trigger(CollapsibleEvents.open, [this]);
      this.$toggle.trigger(CollapsibleEvents.toggle, [this]);
    }
  };
  _proto.close = function close(_temp3) {
    var _ref3 = _temp3 === void 0 ? {} : _temp3,
      _ref3$notify = _ref3.notify,
      notify = _ref3$notify === void 0 ? true : _ref3$notify;
    this.$toggle.removeClass(this.openClassName).attr('aria-expanded', false);
    this.$target.removeClass(this.openClassName).attr('aria-hidden', true);
    if (notify) {
      this.$toggle.trigger(CollapsibleEvents.close, [this]);
      this.$toggle.trigger(CollapsibleEvents.toggle, [this]);
    }
  };
  _proto.toggle = function toggle() {
    if (this.isCollapsed) {
      this.open();
    } else {
      this.close();
    }
  };
  _proto.toggleByState = function toggleByState(state) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    switch (state) {
      case CollapsibleState.open:
        return this.open.apply(this, args);
      case CollapsibleState.closed:
        return this.close.apply(this, args);
      default:
        return undefined;
    }
  };
  _proto.hasCollapsible = function hasCollapsible(collapsibleInstance) {
    return $.contains(this.$target.get(0), collapsibleInstance.$target.get(0));
  };
  _proto.bindEvents = function bindEvents() {
    this.$toggle.on(CollapsibleEvents.click, this.onClicked);
    if (this.disabledMediaQueryList && this.disabledMediaQueryList.addListener) {
      this.disabledMediaQueryList.addListener(this.onDisabledMediaQueryListMatch);
    }
  };
  _proto.unbindEvents = function unbindEvents() {
    this.$toggle.off(CollapsibleEvents.click, this.onClicked);
    if (this.disabledMediaQueryList && this.disabledMediaQueryList.removeListener) {
      this.disabledMediaQueryList.removeListener(this.onDisabledMediaQueryListMatch);
    }
  };
  _proto.onClicked = function onClicked(event) {
    if (this.disabled) {
      return;
    }
    event.preventDefault();
    this.toggle();
  };
  _proto.onDisabledMediaQueryListMatch = function onDisabledMediaQueryListMatch(media) {
    this.disabled = media.matches;
  };
  return _createClass(Collapsible, [{
    key: "isCollapsed",
    get: function get() {
      return !this.$target.hasClass(this.openClassName) || this.$target.is(':hidden');
    }
  }, {
    key: "isOpen",
    get: function get() {
      return !this.isCollapsed;
    }
  }, {
    key: "disabled",
    get: function get() {
      return this._disabled;
    },
    set: function set(disabled) {
      this._disabled = disabled;
      if (disabled) {
        this.toggleByState(this.disabledState);
      } else {
        this.toggleByState(this.enabledState);
      }
    }
  }]);
}();

/**
 * Convenience method for constructing Collapsible instance
 *
 * @param {string} [selector]
 * @param {Object} [options]
 * @param {Object} [options.$context]
 * @param {Object} [options.disabledBreakpoint]
 * @param {Object} [options.disabledState]
 * @param {Object} [options.enabledState]
 * @param {Object} [options.openClassName]
 * @return {Array} array of Collapsible instances
 *
 * @example
 * <a href="#content" data-collapsible>Collapse</a>
 * <div id="content">...</div>
 *
 * collapsibleFactory();
 */
function collapsibleFactory(selector, overrideOptions) {
  if (selector === void 0) {
    selector = "[data-" + PLUGIN_KEY + "]";
  }
  if (overrideOptions === void 0) {
    overrideOptions = {};
  }
  var $collapsibles = $(selector, overrideOptions.$context);
  return $collapsibles.map(function (index, element) {
    var $toggle = $(element);
    var instanceKey = PLUGIN_KEY + "Instance";
    var cachedCollapsible = $toggle.data(instanceKey);
    if (cachedCollapsible instanceof Collapsible) {
      return cachedCollapsible;
    }
    var targetId = prependHash($toggle.data(PLUGIN_KEY) || $toggle.data(PLUGIN_KEY + "Target") || $toggle.attr('href'));
    var options = lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(optionsFromData($toggle), overrideOptions);
    var collapsible = new Collapsible($toggle, $(targetId, overrideOptions.$context), options);
    $toggle.data(instanceKey, collapsible);
    return collapsible;
  }).toArray();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

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

/***/ "./assets/js/theme/common/media-query-list.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/common/media-query-list.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mediaQueryListFactory; });
/*
 * Remember to update /assets/scss/settings/global/screensizes/screensizes.scss
 * if you decide to change breakpoint values
 */
var breakpointSizes = {
  xlarge: 1441,
  large: 1261,
  medium: 801,
  small: 551
};

/**
 * Create MediaQueryList using breakpoint name
 * @param {string} breakpointName
 * @return {MediaQueryList|null}
 */
function mediaQueryListFactory(breakpointName) {
  if (!breakpointName || !window.matchMedia) {
    return null;
  }
  var breakpoint = breakpointSizes[breakpointName];
  var mediaQuery = "(min-width: " + breakpoint + "px)";
  var mediaQueryList = window.matchMedia(mediaQuery);
  return mediaQueryList;
}

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

/***/ "./assets/js/theme/global/sweet-alert.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/global/sweet-alert.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);


// Set defaults for sweetalert2 popup boxes
sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.setDefaults({
  buttonsStyling: false,
  confirmButtonClass: 'button',
  cancelButtonClass: 'button'
});

// Re-export
/* harmony default export */ __webpack_exports__["default"] = (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2NvbGxhcHNpYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vZm9ybS11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL21lZGlhLXF1ZXJ5LWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9tb2RlbHMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9ub2QtZnVuY3Rpb25zL21pbi1tYXgtdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9ub2QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2YvZ3JpZC1saXN0LXN3aXRjaGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvc3dlZXQtYWxlcnQuanMiXSwibmFtZXMiOlsiUExVR0lOX0tFWSIsIkNvbGxhcHNpYmxlRXZlbnRzIiwib3BlbiIsImNsb3NlIiwidG9nZ2xlIiwiY2xpY2siLCJDb2xsYXBzaWJsZVN0YXRlIiwiY2xvc2VkIiwicHJlcGVuZEhhc2giLCJpZCIsImluZGV4T2YiLCJvcHRpb25zRnJvbURhdGEiLCIkZWxlbWVudCIsImRpc2FibGVkQnJlYWtwb2ludCIsImRhdGEiLCJkaXNhYmxlZFN0YXRlIiwiZW5hYmxlZFN0YXRlIiwib3BlbkNsYXNzTmFtZSIsIkNvbGxhcHNpYmxlIiwiJHRvZ2dsZSIsIiR0YXJnZXQiLCJfdGVtcCIsIl9yZWYiLCJfcmVmJG9wZW5DbGFzc05hbWUiLCJ0YXJnZXRJZCIsImF0dHIiLCJkaXNhYmxlZE1lZGlhUXVlcnlMaXN0IiwibWVkaWFRdWVyeUxpc3RGYWN0b3J5IiwiZGlzYWJsZWQiLCJtYXRjaGVzIiwib25DbGlja2VkIiwiYmluZCIsIm9uRGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdE1hdGNoIiwiaXNDb2xsYXBzZWQiLCJpc09wZW4iLCJiaW5kRXZlbnRzIiwiX3Byb3RvIiwicHJvdG90eXBlIiwiX3RlbXAyIiwiX3JlZjIiLCJfcmVmMiRub3RpZnkiLCJub3RpZnkiLCJhZGRDbGFzcyIsInRyaWdnZXIiLCJfdGVtcDMiLCJfcmVmMyIsIl9yZWYzJG5vdGlmeSIsInJlbW92ZUNsYXNzIiwidG9nZ2xlQnlTdGF0ZSIsInN0YXRlIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJhcHBseSIsInVuZGVmaW5lZCIsImhhc0NvbGxhcHNpYmxlIiwiY29sbGFwc2libGVJbnN0YW5jZSIsIiQiLCJjb250YWlucyIsImdldCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJ1bmJpbmRFdmVudHMiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJtZWRpYSIsIl9jcmVhdGVDbGFzcyIsImtleSIsImhhc0NsYXNzIiwiaXMiLCJfZGlzYWJsZWQiLCJzZXQiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJzZWxlY3RvciIsIm92ZXJyaWRlT3B0aW9ucyIsIiRjb2xsYXBzaWJsZXMiLCIkY29udGV4dCIsIm1hcCIsImluZGV4IiwiZWxlbWVudCIsImluc3RhbmNlS2V5IiwiY2FjaGVkQ29sbGFwc2libGUiLCJvcHRpb25zIiwiX2V4dGVuZCIsImNvbGxhcHNpYmxlIiwidG9BcnJheSIsImlucHV0VGFnTmFtZXMiLCJjbGFzc2lmeUlucHV0IiwiaW5wdXQiLCJmb3JtRmllbGRDbGFzcyIsIiRpbnB1dCIsIiRmb3JtRmllbGQiLCJwYXJlbnQiLCJ0YWdOYW1lIiwicHJvcCIsInRvTG93ZXJDYXNlIiwiY2xhc3NOYW1lIiwic3BlY2lmaWNDbGFzc05hbWUiLCJpbnB1dFR5cGUiLCJfaW5jbHVkZXMiLCJfY2FtZWxDYXNlIiwiX2NhcGl0YWxpemUiLCJjbGFzc2lmeUZvcm0iLCJmb3JtU2VsZWN0b3IiLCIkZm9ybSIsIiRpbnB1dHMiLCJmaW5kIiwiam9pbiIsIl9vcHRpb25zIiwiX29wdGlvbnMkZm9ybUZpZWxkQ2xhIiwiZWFjaCIsIl9fIiwiZ2V0RmllbGRJZCIsIiRmaWVsZCIsImZpZWxkSWQiLCJtYXRjaCIsImluc2VydFN0YXRlSGlkZGVuRmllbGQiLCIkc3RhdGVGaWVsZCIsInN0YXRlRmllbGRBdHRycyIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJhZnRlciIsIlZhbGlkYXRvcnMiLCJzZXRFbWFpbFZhbGlkYXRpb24iLCJ2YWxpZGF0b3IiLCJmaWVsZCIsImFkZCIsInZhbGlkYXRlIiwiY2IiLCJ2YWwiLCJyZXN1bHQiLCJmb3JtcyIsImVtYWlsIiwiZXJyb3JNZXNzYWdlIiwic2V0UGFzc3dvcmRWYWxpZGF0aW9uIiwicGFzc3dvcmRTZWxlY3RvciIsInBhc3N3b3JkMlNlbGVjdG9yIiwicmVxdWlyZW1lbnRzIiwiaXNPcHRpb25hbCIsIiRwYXNzd29yZCIsInBhc3N3b3JkVmFsaWRhdGlvbnMiLCJSZWdFeHAiLCJhbHBoYSIsIm51bWVyaWMiLCJtaW5sZW5ndGgiLCJlcnJvciIsInNldE1pbk1heFByaWNlVmFsaWRhdGlvbiIsInNlbGVjdG9ycyIsImVycm9yU2VsZWN0b3IiLCJmaWVsZHNldFNlbGVjdG9yIiwibWF4UHJpY2VTZWxlY3RvciIsIm1pblByaWNlU2VsZWN0b3IiLCJjb25maWd1cmUiLCJmb3JtIiwicHJldmVudFN1Ym1pdCIsInN1Y2Nlc3NDbGFzcyIsInNldE1lc3NhZ2VPcHRpb25zIiwiZXJyb3JTcGFuIiwic2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbiIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCIkZmllbGRDbGFzc0VsZW1lbnQiLCJPYmplY3QiLCJrZXlzIiwibm9kIiwiY2xhc3NlcyIsImZvckVhY2giLCJicmVha3BvaW50U2l6ZXMiLCJ4bGFyZ2UiLCJsYXJnZSIsIm1lZGl1bSIsInNtYWxsIiwiYnJlYWtwb2ludE5hbWUiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiYnJlYWtwb2ludCIsIm1lZGlhUXVlcnkiLCJtZWRpYVF1ZXJ5TGlzdCIsInJlIiwidGVzdCIsInBhc3N3b3JkIiwibm90RW1wdHkiLCJtaW5NYXhWYWxpZGF0ZSIsIm1pbklucHV0U2VsZWN0b3IiLCJtYXhJbnB1dFNlbGVjdG9yIiwibWluVmFsdWUiLCJwYXJzZUZsb2F0IiwibWF4VmFsdWUiLCJfaXNOYU4iLCJlcnJvckNsYXNzIiwiZXJyb3JNZXNzYWdlQ2xhc3MiLCJjaGVja0Z1bmN0aW9ucyIsImNvbnRleHQiLCJkaXNwbGF5TW9kZSIsIkNvb2tpZXMiLCJzd2l0Y2hEaXNwbGF5IiwibW9kZSIsImRpc3BsYXlUeXBlIiwiY3VycmVudFRhcmdldCIsImV4cGlyZXMiLCJzd2VldEFsZXJ0Iiwic2V0RGVmYXVsdHMiLCJidXR0b25zU3R5bGluZyIsImNvbmZpcm1CdXR0b25DbGFzcyIsImNhbmNlbEJ1dHRvbkNsYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3VEO0FBRXZELElBQU1BLFVBQVUsR0FBRyxhQUFhO0FBRXpCLElBQU1DLGlCQUFpQixHQUFHO0VBQzdCQyxJQUFJLEVBQUUsa0JBQWtCO0VBQ3hCQyxLQUFLLEVBQUUsbUJBQW1CO0VBQzFCQyxNQUFNLEVBQUUsb0JBQW9CO0VBQzVCQyxLQUFLLEVBQUU7QUFDWCxDQUFDO0FBRUQsSUFBTUMsZ0JBQWdCLEdBQUc7RUFDckJDLE1BQU0sRUFBRSxRQUFRO0VBQ2hCTCxJQUFJLEVBQUU7QUFDVixDQUFDO0FBRUQsU0FBU00sV0FBV0EsQ0FBQ0MsRUFBRSxFQUFFO0VBQ3JCLElBQUlBLEVBQUUsSUFBSUEsRUFBRSxDQUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO0lBQzdCLE9BQU9ELEVBQUU7RUFDYjtFQUVBLGFBQVdBLEVBQUU7QUFDakI7QUFFQSxTQUFTRSxlQUFlQSxDQUFDQyxRQUFRLEVBQUU7RUFDL0IsT0FBTztJQUNIQyxrQkFBa0IsRUFBRUQsUUFBUSxDQUFDRSxJQUFJLENBQUlkLFVB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QVUrSixJQUFNLENBQUM7SUFDcEM3SSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNsQixRQUFRLG9CQUFrQitKLElBQU0sQ0FBQztJQUNwRDdJLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQ2xCLFFBQVEsbUJBQWlCK0osSUFBTSxDQUFDO0VBQ3REO0VBRUFELGFBQWEsQ0FBQ0YsV0FBVyxDQUFDO0VBRTFCMUksQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUNHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQ0ssS0FBSyxFQUFLO0lBQzlDQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ3RCLElBQU1xSSxXQUFXLEdBQUc5SSxDQUFDLENBQUNRLEtBQUssQ0FBQ3VJLGFBQWEsQ0FBQyxDQUFDbEwsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBRXRFOEssZ0RBQU8sQ0FBQzNILEdBQUcsQ0FBQyxjQUFjLEVBQUU4SCxXQUFXLEVBQUU7TUFBRUUsT0FBTyxFQUFFO0lBQUcsQ0FBQyxDQUFDO0lBRXpEaEosQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUNiLFdBQVcsQ0FBQyxlQUFlLENBQUM7SUFDdkRhLENBQUMsQ0FBQ1EsS0FBSyxDQUFDdUksYUFBYSxDQUFDLENBQUNqSyxRQUFRLENBQUMsZUFBZSxDQUFDO0lBRWhEOEosYUFBYSxDQUFDRSxXQUFXLENBQUM7RUFDOUIsQ0FBQyxDQUFDO0FBQ04sQzs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFBcUM7O0FBRXJDO0FBQ0FHLGtEQUFVLENBQUNDLFdBQVcsQ0FBQztFQUNuQkMsY0FBYyxFQUFFLEtBQUs7RUFDckJDLGtCQUFrQixFQUFFLFFBQVE7RUFDNUJDLGlCQUFpQixFQUFFO0FBQ3ZCLENBQUMsQ0FBQzs7QUFFRjtBQUNlSixpSEFBVSxFIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4yMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbWVkaWFRdWVyeUxpc3RGYWN0b3J5IGZyb20gJy4vbWVkaWEtcXVlcnktbGlzdCc7XG5cbmNvbnN0IFBMVUdJTl9LRVkgPSAnY29sbGFwc2libGUnO1xuXG5leHBvcnQgY29uc3QgQ29sbGFwc2libGVFdmVudHMgPSB7XG4gICAgb3BlbjogJ29wZW4uY29sbGFwc2libGUnLFxuICAgIGNsb3NlOiAnY2xvc2UuY29sbGFwc2libGUnLFxuICAgIHRvZ2dsZTogJ3RvZ2dsZS5jb2xsYXBzaWJsZScsXG4gICAgY2xpY2s6ICdjbGljay5jb2xsYXBzaWJsZScsXG59O1xuXG5jb25zdCBDb2xsYXBzaWJsZVN0YXRlID0ge1xuICAgIGNsb3NlZDogJ2Nsb3NlZCcsXG4gICAgb3BlbjogJ29wZW4nLFxufTtcblxuZnVuY3Rpb24gcHJlcGVuZEhhc2goaWQpIHtcbiAgICBpZiAoaWQgJiYgaWQuaW5kZXhPZignIycpID09PSAwKSB7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICByZXR1cm4gYCMke2lkfWA7XG59XG5cbmZ1bmN0aW9uIG9wdGlvbnNGcm9tRGF0YSgkZWxlbWVudCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGRpc2FibGVkQnJlYWtwb2ludDogJGVsZW1lbnQuZGF0YShgJHtQTFVHSU5fS0VZfURpc2FibGVkQnJlYWtwb2ludGApLFxuICAgICAgICBkaXNhYmxlZFN0YXRlOiAkZWxlbWVudC5kYXRhKGAke1BMVUdJTl9LRVl9RGlzYWJsZWRTdGF0ZWApLFxuICAgICAgICBlbmFibGVkU3RhdGU6ICRlbGVtZW50LmRhdGEoYCR7UExVR0lOX0tFWX1FbmFibGVkU3RhdGVgKSxcbiAgICAgICAgb3BlbkNsYXNzTmFtZTogJGVsZW1lbnQuZGF0YShgJHtQTFVHSU5fS0VZfU9wZW5DbGFzc05hbWVgKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIENvbGxhcHNlL0V4cGFuZCB0b2dnbGVcbiAqL1xuZXhwb3J0IGNsYXNzIENvbGxhcHNpYmxlIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJHRvZ2dsZSAtIFRyaWdnZXIgYnV0dG9uXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICR0YXJnZXQgLSBDb250ZW50IHRvIGNvbGxhcHNlIC8gZXhwYW5kXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIENvbmZpZ3VyYWJsZSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLiRjb250ZXh0XVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kaXNhYmxlZEJyZWFrcG9pbnRdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmRpc2FibGVkU3RhdGVdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmVuYWJsZWRTdGF0ZV1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMub3BlbkNsYXNzTmFtZV1cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqXG4gICAgICogPGJ1dHRvbiBpZD1cIiNtb3JlXCI+Q29sbGFwc2U8L2J1dHRvbj5cbiAgICAgKiA8ZGl2IGlkPVwiY29udGVudFwiPi4uLjwvZGl2PlxuICAgICAqXG4gICAgICogbmV3IENvbGxhcHNpYmxlKCQoJyNtb3JlJyksICQoJyNjb250ZW50JykpO1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCR0b2dnbGUsICR0YXJnZXQsIHtcbiAgICAgICAgZGlzYWJsZWRCcmVha3BvaW50LFxuICAgICAgICBkaXNhYmxlZFN0YXRlLFxuICAgICAgICBlbmFibGVkU3RhdGUsXG4gICAgICAgIG9wZW5DbGFzc05hbWUgPSAnaXMtb3BlbicsXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuJHRvZ2dsZSA9ICR0b2dnbGU7XG4gICAgICAgIHRoaXMuJHRhcmdldCA9ICR0YXJnZXQ7XG4gICAgICAgIHRoaXMudGFyZ2V0SWQgPSAkdGFyZ2V0LmF0dHIoJ2lkJyk7XG4gICAgICAgIHRoaXMub3BlbkNsYXNzTmFtZSA9IG9wZW5DbGFzc05hbWU7XG4gICAgICAgIHRoaXMuZGlzYWJsZWRTdGF0ZSA9IGRpc2FibGVkU3RhdGU7XG4gICAgICAgIHRoaXMuZW5hYmxlZFN0YXRlID0gZW5hYmxlZFN0YXRlO1xuXG4gICAgICAgIGlmIChkaXNhYmxlZEJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdCA9IG1lZGlhUXVlcnlMaXN0RmFjdG9yeShkaXNhYmxlZEJyZWFrcG9pbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdCkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdC5tYXRjaGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXV0by1iaW5kXG4gICAgICAgIHRoaXMub25DbGlja2VkID0gdGhpcy5vbkNsaWNrZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkRpc2FibGVkTWVkaWFRdWVyeUxpc3RNYXRjaCA9IHRoaXMub25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2guYmluZCh0aGlzKTtcblxuICAgICAgICAvLyBBc3NpZ24gRE9NIGF0dHJpYnV0ZXNcbiAgICAgICAgdGhpcy4kdGFyZ2V0LmF0dHIoJ2FyaWEtaGlkZGVuJywgdGhpcy5pc0NvbGxhcHNlZCk7XG4gICAgICAgIHRoaXMuJHRvZ2dsZVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtY29udHJvbHMnLCAkdGFyZ2V0LmF0dHIoJ2lkJykpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRoaXMuaXNPcGVuKTtcblxuICAgICAgICAvLyBMaXN0ZW5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGlzQ29sbGFwc2VkKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuJHRhcmdldC5oYXNDbGFzcyh0aGlzLm9wZW5DbGFzc05hbWUpIHx8IHRoaXMuJHRhcmdldC5pcygnOmhpZGRlbicpO1xuICAgIH1cblxuICAgIGdldCBpc09wZW4oKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc0NvbGxhcHNlZDtcbiAgICB9XG5cbiAgICBzZXQgZGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSBkaXNhYmxlZDtcblxuICAgICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQnlTdGF0ZSh0aGlzLmRpc2FibGVkU3RhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVCeVN0YXRlKHRoaXMuZW5hYmxlZFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBkaXNhYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICAgIH1cblxuICAgIG9wZW4oeyBub3RpZnkgPSB0cnVlIH0gPSB7fSkge1xuICAgICAgICB0aGlzLiR0b2dnbGVcbiAgICAgICAgICAgIC5hZGRDbGFzcyh0aGlzLm9wZW5DbGFzc05hbWUpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuJHRhcmdldFxuICAgICAgICAgICAgLmFkZENsYXNzKHRoaXMub3BlbkNsYXNzTmFtZSlcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcblxuICAgICAgICBpZiAobm90aWZ5KSB7XG4gICAgICAgICAgICB0aGlzLiR0b2dnbGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5vcGVuLCBbdGhpc10pO1xuICAgICAgICAgICAgdGhpcy4kdG9nZ2xlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMudG9nZ2xlLCBbdGhpc10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2UoeyBub3RpZnkgPSB0cnVlIH0gPSB7fSkge1xuICAgICAgICB0aGlzLiR0b2dnbGVcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLm9wZW5DbGFzc05hbWUpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcblxuICAgICAgICB0aGlzLiR0YXJnZXRcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLm9wZW5DbGFzc05hbWUpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKTtcblxuICAgICAgICBpZiAobm90aWZ5KSB7XG4gICAgICAgICAgICB0aGlzLiR0b2dnbGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbG9zZSwgW3RoaXNdKTtcbiAgICAgICAgICAgIHRoaXMuJHRvZ2dsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLnRvZ2dsZSwgW3RoaXNdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQnlTdGF0ZShzdGF0ZSwgLi4uYXJncykge1xuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIGNhc2UgQ29sbGFwc2libGVTdGF0ZS5vcGVuOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3Blbi5hcHBseSh0aGlzLCBhcmdzKTtcblxuICAgICAgICBjYXNlIENvbGxhcHNpYmxlU3RhdGUuY2xvc2VkOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2UuYXBwbHkodGhpcywgYXJncyk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNDb2xsYXBzaWJsZShjb2xsYXBzaWJsZUluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiAkLmNvbnRhaW5zKHRoaXMuJHRhcmdldC5nZXQoMCksIGNvbGxhcHNpYmxlSW5zdGFuY2UuJHRhcmdldC5nZXQoMCkpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHRvZ2dsZS5vbihDb2xsYXBzaWJsZUV2ZW50cy5jbGljaywgdGhpcy5vbkNsaWNrZWQpO1xuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QgJiYgdGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0LmFkZExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QuYWRkTGlzdGVuZXIodGhpcy5vbkRpc2FibGVkTWVkaWFRdWVyeUxpc3RNYXRjaCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHRvZ2dsZS5vZmYoQ29sbGFwc2libGVFdmVudHMuY2xpY2ssIHRoaXMub25DbGlja2VkKTtcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0ICYmIHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdC5yZW1vdmVMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0LnJlbW92ZUxpc3RlbmVyKHRoaXMub25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2gpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGlja2VkKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuXG4gICAgb25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2gobWVkaWEpIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IG1lZGlhLm1hdGNoZXM7XG4gICAgfVxufVxuXG4vKipcbiAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgY29uc3RydWN0aW5nIENvbGxhcHNpYmxlIGluc3RhbmNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcl1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy4kY29udGV4dF1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kaXNhYmxlZEJyZWFrcG9pbnRdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZGlzYWJsZWRTdGF0ZV1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5lbmFibGVkU3RhdGVdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMub3BlbkNsYXNzTmFtZV1cbiAqIEByZXR1cm4ge0FycmF5fSBhcnJheSBvZiBDb2xsYXBzaWJsZSBpbnN0YW5jZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogPGEgaHJlZj1cIiNjb250ZW50XCIgZGF0YS1jb2xsYXBzaWJsZT5Db2xsYXBzZTwvYT5cbiAqIDxkaXYgaWQ9XCJjb250ZW50XCI+Li4uPC9kaXY+XG4gKlxuICogY29sbGFwc2libGVGYWN0b3J5KCk7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbGxhcHNpYmxlRmFjdG9yeShzZWxlY3RvciA9IGBbZGF0YS0ke1BMVUdJTl9LRVl9XWAsIG92ZXJyaWRlT3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgJGNvbGxhcHNpYmxlcyA9ICQoc2VsZWN0b3IsIG92ZXJyaWRlT3B0aW9ucy4kY29udGV4dCk7XG5cbiAgICByZXR1cm4gJGNvbGxhcHNpYmxlcy5tYXAoKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpbnN0YW5jZUtleSA9IGAke1BMVUdJTl9LRVl9SW5zdGFuY2VgO1xuICAgICAgICBjb25zdCBjYWNoZWRDb2xsYXBzaWJsZSA9ICR0b2dnbGUuZGF0YShpbnN0YW5jZUtleSk7XG5cbiAgICAgICAgaWYgKGNhY2hlZENvbGxhcHNpYmxlIGluc3RhbmNlb2YgQ29sbGFwc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDb2xsYXBzaWJsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gcHJlcGVuZEhhc2goJHRvZ2dsZS5kYXRhKFBMVUdJTl9LRVkpIHx8XG4gICAgICAgICAgICAkdG9nZ2xlLmRhdGEoYCR7UExVR0lOX0tFWX1UYXJnZXRgKSB8fFxuICAgICAgICAgICAgJHRvZ2dsZS5hdHRyKCdocmVmJykpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gXy5leHRlbmQob3B0aW9uc0Zyb21EYXRhKCR0b2dnbGUpLCBvdmVycmlkZU9wdGlvbnMpO1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9IG5ldyBDb2xsYXBzaWJsZSgkdG9nZ2xlLCAkKHRhcmdldElkLCBvdmVycmlkZU9wdGlvbnMuJGNvbnRleHQpLCBvcHRpb25zKTtcblxuICAgICAgICAkdG9nZ2xlLmRhdGEoaW5zdGFuY2VLZXksIGNvbGxhcHNpYmxlKTtcblxuICAgICAgICByZXR1cm4gY29sbGFwc2libGU7XG4gICAgfSkudG9BcnJheSgpO1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBub2QgZnJvbSAnLi9ub2QnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4vbW9kZWxzL2Zvcm1zJztcblxuY29uc3QgaW5wdXRUYWdOYW1lcyA9IFtcbiAgICAnaW5wdXQnLFxuICAgICdzZWxlY3QnLFxuICAgICd0ZXh0YXJlYScsXG5dO1xuXG4vKipcbiAqIEFwcGx5IGNsYXNzIG5hbWUgdG8gYW4gaW5wdXQgZWxlbWVudCBvbiBpdHMgdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IGlucHV0XG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybUZpZWxkQ2xhc3NcbiAqIEByZXR1cm4ge29iamVjdH0gRWxlbWVudCBpdHNlbGZcbiAqL1xuZnVuY3Rpb24gY2xhc3NpZnlJbnB1dChpbnB1dCwgZm9ybUZpZWxkQ2xhc3MpIHtcbiAgICBjb25zdCAkaW5wdXQgPSAkKGlucHV0KTtcbiAgICBjb25zdCAkZm9ybUZpZWxkID0gJGlucHV0LnBhcmVudChgLiR7Zm9ybUZpZWxkQ2xhc3N9YCk7XG4gICAgY29uc3QgdGFnTmFtZSA9ICRpbnB1dC5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKTtcblxuICAgIGxldCBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7dGFnTmFtZX1gO1xuICAgIGxldCBzcGVjaWZpY0NsYXNzTmFtZTtcblxuICAgIC8vIElucHV0IGNhbiBiZSB0ZXh0L2NoZWNrYm94L3JhZGlvIGV0Yy4uLlxuICAgIGlmICh0YWdOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgIGNvbnN0IGlucHV0VHlwZSA9ICRpbnB1dC5wcm9wKCd0eXBlJyk7XG5cbiAgICAgICAgaWYgKF8uaW5jbHVkZXMoWydyYWRpbycsICdjaGVja2JveCcsICdzdWJtaXQnXSwgaW5wdXRUeXBlKSkge1xuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1jaGVja2JveCwgLmZvcm0tZmllbGQtLXJhZGlvXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7Xy5jYW1lbENhc2UoaW5wdXRUeXBlKX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1pbnB1dCAuZm9ybS1maWVsZC0taW5wdXRUZXh0XG4gICAgICAgICAgICBzcGVjaWZpY0NsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0ke18uY2FwaXRhbGl6ZShpbnB1dFR5cGUpfWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBseSBjbGFzcyBtb2RpZmllclxuICAgIHJldHVybiAkZm9ybUZpZWxkXG4gICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUpXG4gICAgICAgIC5hZGRDbGFzcyhzcGVjaWZpY0NsYXNzTmFtZSk7XG59XG5cbi8qKlxuICogQXBwbHkgY2xhc3MgbmFtZSB0byBlYWNoIGlucHV0IGVsZW1lbnQgaW4gYSBmb3JtIGJhc2VkIG9uIGl0cyB0eXBlXG4gKiBAZXhhbXBsZVxuICogLy8gQmVmb3JlXG4gKiA8Zm9ybSBpZD1cImZvcm1cIj5cbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICogICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cbiAqICAgICA8L2Rpdj5cbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICogICAgICAgICA8c2VsZWN0Pi4uLjwvc2VsZWN0PlxuICogICAgIDwvZGl2PlxuICogPC9mb3JtPlxuICpcbiAqIGNsYXNzaWZ5Rm9ybSgnI2Zvcm0nLCB7IGZvcm1GaWVsZENsYXNzOiAnZm9ybS1maWVsZCcgfSk7XG4gKlxuICogLy8gQWZ0ZXJcbiAqIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLWlucHV0IGZvcm0tZmllbGQtLWlucHV0VGV4dFwiPi4uLjwvZGl2PlxuICogPGRpdiBjbGFzcz1cImZvcm0tZmllbGQgZm9ybS1maWVsZC0tc2VsZWN0XCI+Li4uPC9kaXY+XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBmb3JtU2VsZWN0b3IgLSBzZWxlY3RvciBvciBlbGVtZW50XG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7alF1ZXJ5fSBFbGVtZW50IGl0c2VsZlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlGb3JtKGZvcm1TZWxlY3Rvciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgJGZvcm0gPSAkKGZvcm1TZWxlY3Rvcik7XG4gICAgY29uc3QgJGlucHV0cyA9ICRmb3JtLmZpbmQoaW5wdXRUYWdOYW1lcy5qb2luKCcsICcpKTtcblxuICAgIC8vIE9idGFpbiBvcHRpb25zXG4gICAgY29uc3QgeyBmb3JtRmllbGRDbGFzcyA9ICdmb3JtLWZpZWxkJyB9ID0gb3B0aW9ucztcblxuICAgIC8vIENsYXNzaWZ5IGVhY2ggaW5wdXQgaW4gYSBmb3JtXG4gICAgJGlucHV0cy5lYWNoKChfXywgaW5wdXQpID0+IHtcbiAgICAgICAgY2xhc3NpZnlJbnB1dChpbnB1dCwgZm9ybUZpZWxkQ2xhc3MpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICRmb3JtO1xufVxuXG4vKipcbiAqIEdldCBpZCBmcm9tIGdpdmVuIGZpZWxkXG4gKiBAcGFyYW0ge29iamVjdH0gJGZpZWxkIEpRdWVyeSBmaWVsZCBvYmplY3RcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0RmllbGRJZCgkZmllbGQpIHtcbiAgICBjb25zdCBmaWVsZElkID0gJGZpZWxkLnByb3AoJ25hbWUnKS5tYXRjaCgvKFxcWy4qXFxdKS8pO1xuXG4gICAgaWYgKGZpZWxkSWQgJiYgZmllbGRJZC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkSWRbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIEluc2VydCBoaWRkZW4gZmllbGQgYWZ0ZXIgU3RhdGUvUHJvdmluY2UgZmllbGRcbiAqIEBwYXJhbSB7b2JqZWN0fSAkc3RhdGVGaWVsZCBKUXVlcnkgZmllbGQgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGluc2VydFN0YXRlSGlkZGVuRmllbGQoJHN0YXRlRmllbGQpIHtcbiAgICBjb25zdCBmaWVsZElkID0gZ2V0RmllbGRJZCgkc3RhdGVGaWVsZCk7XG4gICAgY29uc3Qgc3RhdGVGaWVsZEF0dHJzID0ge1xuICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgbmFtZTogYEZvcm1GaWVsZElzVGV4dCR7ZmllbGRJZH1gLFxuICAgICAgICB2YWx1ZTogJzEnLFxuICAgIH07XG5cbiAgICAkc3RhdGVGaWVsZC5hZnRlcigkKCc8aW5wdXQgLz4nLCBzdGF0ZUZpZWxkQXR0cnMpKTtcbn1cblxuY29uc3QgVmFsaWRhdG9ycyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgbmV3IHZhbGlkYXRpb24gd2hlbiB0aGUgZm9ybSBpcyBkaXJ0eVxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRFbWFpbFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHZhbGlkIGVtYWlsLicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHBhc3N3b3JkU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmQyU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcmVxdWlyZW1lbnRzXG4gICAgICogQHBhcmFtIGlzT3B0aW9uYWxcbiAgICAgKi9cbiAgICBzZXRQYXNzd29yZFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIHBhc3N3b3JkU2VsZWN0b3IsIHBhc3N3b3JkMlNlbGVjdG9yLCByZXF1aXJlbWVudHMsIGlzT3B0aW9uYWwpID0+IHtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkID0gJChwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdSBtdXN0IGVudGVyIGEgcGFzc3dvcmQuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5tYXRjaChuZXcgUmVnRXhwKHJlcXVpcmVtZW50cy5hbHBoYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWwubWF0Y2gobmV3IFJlZ0V4cChyZXF1aXJlbWVudHMubnVtZXJpYykpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWwubGVuZ3RoID49IHJlcXVpcmVtZW50cy5taW5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgb3B0aW9uYWwgYW5kIG5vdGhpbmcgZW50ZXJlZCwgaXQgaXMgdmFsaWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwgJiYgdmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogcmVxdWlyZW1lbnRzLmVycm9yLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsID09PSAkcGFzc3dvcmQudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdXIgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaC4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHBhc3N3b3JkVmFsaWRhdGlvbnMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0ge05vZH0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNlbGVjdG9yc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZXJyb3JTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZmllbGRzZXRTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZm9ybVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5tYXhQcmljZVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5taW5QcmljZVNlbGVjdG9yXG4gICAgICovXG4gICAgc2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBzZWxlY3RvcnMpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcixcbiAgICAgICAgICAgIGZpZWxkc2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBmb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgfSA9IHNlbGVjdG9ycztcblxuICAgICAgICB2YWxpZGF0b3IuY29uZmlndXJlKHtcbiAgICAgICAgICAgIGZvcm06IGZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIHByZXZlbnRTdWJtaXQ6IHRydWUsXG4gICAgICAgICAgICBzdWNjZXNzQ2xhc3M6ICdfJywgLy8gS0xVREdFOiBEb24ndCBhcHBseSBzdWNjZXNzIGNsYXNzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluIHByaWNlIG11c3QgYmUgbGVzcyB0aGFuIG1heC4gcHJpY2UuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluIHByaWNlIG11c3QgYmUgbGVzcyB0aGFuIG1heC4gcHJpY2UuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWF4LiBwcmljZSBpcyByZXF1aXJlZC4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdNaW4uIHByaWNlIGlzIHJlcXVpcmVkLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ0lucHV0IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBbbWluUHJpY2VTZWxlY3RvciwgbWF4UHJpY2VTZWxlY3Rvcl0sXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ21pbi1udW1iZXI6MCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5zZXRNZXNzYWdlT3B0aW9ucyh7XG4gICAgICAgICAgICBzZWxlY3RvcjogW21pblByaWNlU2VsZWN0b3IsIG1heFByaWNlU2VsZWN0b3JdLFxuICAgICAgICAgICAgcGFyZW50OiBmaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZXJyb3JTcGFuOiBlcnJvclNlbGVjdG9yLFxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIG5ldyB2YWxpZGF0aW9uIHdoZW4gdGhlIGZvcm0gaXMgZGlydHlcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnVGhlIFxcJ1N0YXRlL1Byb3ZpbmNlXFwnIGZpZWxkIGNhbm5vdCBiZSBibGFuay4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBjbGFzc2VzIGZyb20gZGlydHkgZm9ybSBpZiBwcmV2aW91c2x5IGNoZWNrZWRcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBjbGVhblVwU3RhdGVWYWxpZGF0aW9uOiAoZmllbGQpID0+IHtcbiAgICAgICAgY29uc3QgJGZpZWxkQ2xhc3NFbGVtZW50ID0gJCgoYFtkYXRhLXR5cGU9XCIke2ZpZWxkLmRhdGEoJ2ZpZWxkVHlwZScpfVwiXWApKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhub2QuY2xhc3NlcykuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICgkZmllbGRDbGFzc0VsZW1lbnQuaGFzQ2xhc3Mobm9kLmNsYXNzZXNbdmFsdWVdKSkge1xuICAgICAgICAgICAgICAgICRmaWVsZENsYXNzRWxlbWVudC5yZW1vdmVDbGFzcyhub2QuY2xhc3Nlc1t2YWx1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IHsgVmFsaWRhdG9ycywgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9O1xuIiwiLypcbiAqIFJlbWVtYmVyIHRvIHVwZGF0ZSAvYXNzZXRzL3Njc3Mvc2V0dGluZ3MvZ2xvYmFsL3NjcmVlbnNpemVzL3NjcmVlbnNpemVzLnNjc3NcbiAqIGlmIHlvdSBkZWNpZGUgdG8gY2hhbmdlIGJyZWFrcG9pbnQgdmFsdWVzXG4gKi9cbmNvbnN0IGJyZWFrcG9pbnRTaXplcyA9IHtcbiAgICB4bGFyZ2U6IDE0NDEsXG4gICAgbGFyZ2U6IDEyNjEsXG4gICAgbWVkaXVtOiA4MDEsXG4gICAgc21hbGw6IDU1MSxcbn07XG5cbi8qKlxuICogQ3JlYXRlIE1lZGlhUXVlcnlMaXN0IHVzaW5nIGJyZWFrcG9pbnQgbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IGJyZWFrcG9pbnROYW1lXG4gKiBAcmV0dXJuIHtNZWRpYVF1ZXJ5TGlzdHxudWxsfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkoYnJlYWtwb2ludE5hbWUpIHtcbiAgICBpZiAoIWJyZWFrcG9pbnROYW1lIHx8ICF3aW5kb3cubWF0Y2hNZWRpYSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBicmVha3BvaW50ID0gYnJlYWtwb2ludFNpemVzW2JyZWFrcG9pbnROYW1lXTtcbiAgICBjb25zdCBtZWRpYVF1ZXJ5ID0gYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludH1weClgO1xuICAgIGNvbnN0IG1lZGlhUXVlcnlMaXN0ID0gd2luZG93Lm1hdGNoTWVkaWEobWVkaWFRdWVyeSk7XG5cbiAgICByZXR1cm4gbWVkaWFRdWVyeUxpc3Q7XG59XG4iLCJjb25zdCBmb3JtcyA9IHtcbiAgICBlbWFpbCh2YWx1ZSkge1xuICAgICAgICBjb25zdCByZSA9IC9eLitALitcXC4uKy87XG4gICAgICAgIHJldHVybiByZS50ZXN0KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGVzIGEgcGFzc3dvcmQgZmllbGRcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwYXNzd29yZCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RFbXB0eSh2YWx1ZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHZhbGlkYXRlcyBpZiBhIGZpZWxkIGlzIGVtcHR5XG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICpcbiAgICAgKi9cbiAgICBub3RFbXB0eSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMDtcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybXM7XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5mdW5jdGlvbiBtaW5NYXhWYWxpZGF0ZShtaW5JbnB1dFNlbGVjdG9yLCBtYXhJbnB1dFNlbGVjdG9yKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUoY2IpIHtcbiAgICAgICAgY29uc3QgbWluVmFsdWUgPSBwYXJzZUZsb2F0KCQobWluSW5wdXRTZWxlY3RvcikudmFsKCkpO1xuICAgICAgICBjb25zdCBtYXhWYWx1ZSA9IHBhcnNlRmxvYXQoJChtYXhJbnB1dFNlbGVjdG9yKS52YWwoKSk7XG5cbiAgICAgICAgaWYgKG1heFZhbHVlID4gbWluVmFsdWUgfHwgXy5pc05hTihtYXhWYWx1ZSkgfHwgXy5pc05hTihtaW5WYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYihmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtaW5NYXhWYWxpZGF0ZTtcbiIsImltcG9ydCBub2QgZnJvbSAnbm9kLXZhbGlkYXRlJztcbmltcG9ydCBtaW5NYXhWYWxpZGF0ZSBmcm9tICcuL25vZC1mdW5jdGlvbnMvbWluLW1heC12YWxpZGF0ZSc7XG5cbi8vIEhvb2sgb3VyIFNDU1MgZnJhbWV3b3JrIGZvcm0gZmllbGQgc3RhdHVzIGNsYXNzZXMgaW50byB0aGUgbm9kIHZhbGlkYXRpb24gc3lzdGVtIGJlZm9yZSB1c2Vcbm5vZC5jbGFzc2VzLmVycm9yQ2xhc3MgPSAnZm9ybS1maWVsZC0tZXJyb3InO1xubm9kLmNsYXNzZXMuc3VjY2Vzc0NsYXNzID0gJ2Zvcm0tZmllbGQtLXN1Y2Nlc3MnO1xubm9kLmNsYXNzZXMuZXJyb3JNZXNzYWdlQ2xhc3MgPSAnZm9ybS1pbmxpbmVNZXNzYWdlJztcblxuLy8gUmVnaXN0ZXIgdmFsaWRhdGUgZnVuY3Rpb25zXG5ub2QuY2hlY2tGdW5jdGlvbnNbJ21pbi1tYXgnXSA9IG1pbk1heFZhbGlkYXRlO1xuXG5leHBvcnQgZGVmYXVsdCBub2Q7XG4iLCJpbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIGNvbnN0IGRpc3BsYXlNb2RlID0gQ29va2llcy5nZXQoJ2NhdGVnb3J5VmlldycpIHx8IGNvbnRleHQuZGlzcGxheU1vZGU7XG4gICAgJChgLnN3aXRjaC0ke2Rpc3BsYXlNb2RlfWApLmFkZENsYXNzKCdzd2l0Y2gtYWN0aXZlJyk7XG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hEaXNwbGF5KG1vZGUpIHtcbiAgICAgICAgJCgnLmNhdGVnb3J5LCAucGFnZSwgLnByb2R1Y3RDYXJkcywgLnByb2R1Y3RDYXJkJykucmVtb3ZlQ2xhc3MoJ2NhdGVnb3J5LS1saXN0IHBhZ2UtLWxpc3QgcHJvZHVjdENhcmRzLS1saXN0IHByb2R1Y3RDYXJkLS1saXN0IHByb2R1Y3RDYXJkcy0tZ3JpZCBwcm9kdWN0Q2FyZC0tZ3JpZCcpO1xuXG4gICAgICAgICQoJy5jYXRlZ29yeScpLmFkZENsYXNzKGBjYXRlZ29yeS0tJHttb2RlfWApO1xuICAgICAgICAkKCcucGFnZScpLmFkZENsYXNzKGBwYWdlLS0ke21vZGV9YCk7XG4gICAgICAgICQoJy5wcm9kdWN0Q2FyZHMnKS5hZGRDbGFzcyhgcHJvZHVjdENhcmRzLS0ke21vZGV9YCk7XG4gICAgICAgICQoJy5wcm9kdWN0Q2FyZCcpLmFkZENsYXNzKGBwcm9kdWN0Q2FyZC0tJHttb2RlfWApO1xuICAgIH1cblxuICAgIHN3aXRjaERpc3BsYXkoZGlzcGxheU1vZGUpO1xuXG4gICAgJCgnW2RhdGEtZGlzcGxheS1zd2l0Y2hdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlUeXBlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5hdHRyKCdkYXRhLWRpc3BsYXktc3dpdGNoJyk7XG5cbiAgICAgICAgQ29va2llcy5zZXQoJ2NhdGVnb3J5VmlldycsIGRpc3BsYXlUeXBlLCB7IGV4cGlyZXM6IDMwIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWRpc3BsYXktc3dpdGNoXScpLnJlbW92ZUNsYXNzKCdzd2l0Y2gtYWN0aXZlJyk7XG4gICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ3N3aXRjaC1hY3RpdmUnKTtcblxuICAgICAgICBzd2l0Y2hEaXNwbGF5KGRpc3BsYXlUeXBlKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBzd2VldEFsZXJ0IGZyb20gJ3N3ZWV0YWxlcnQyJztcblxuLy8gU2V0IGRlZmF1bHRzIGZvciBzd2VldGFsZXJ0MiBwb3B1cCBib3hlc1xuc3dlZXRBbGVydC5zZXREZWZhdWx0cyh7XG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgIGNvbmZpcm1CdXR0b25DbGFzczogJ2J1dHRvbicsXG4gICAgY2FuY2VsQnV0dG9uQ2xhc3M6ICdidXR0b24nLFxufSk7XG5cbi8vIFJlLWV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgc3dlZXRBbGVydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=