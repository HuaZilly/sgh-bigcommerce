(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./assets/js/theme/common/product-details.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/product-details.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductDetails; });
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.slice.js */ "./node_modules/core-js/modules/es6.array.slice.js");
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_string_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.string.includes.js */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es7_array_includes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es7.array.includes.js */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.array.from.js */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.string.iterator.js */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es6.number.is-nan.js */ "./node_modules/core-js/modules/es6.number.is-nan.js");
/* harmony import */ var core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _product_image_gallery__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../product/image-gallery */ "./assets/js/theme/product/image-gallery.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");





function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }






















var ProductDetails = /*#__PURE__*/function () {
  function ProductDetails($scope, context, productAttributesData) {
    var _this = this;
    if (productAttributesData === void 0) {
      productAttributesData = {};
    }
    this.$overlay = $('[data-cart-item-add] .loadingOverlay');
    this.$scope = $scope;
    this.context = context;
    this.imageGallery = new _product_image_gallery__WEBPACK_IMPORTED_MODULE_23__["default"]($('[data-image-gallery]', this.$scope));
    this.imageGallery.init();
    this.listenQuantityChange();
    this.initRadioAttributes();
    _wishlist__WEBPACK_IMPORTED_MODULE_25__["default"].load(this.context);
    this.getTabRequests();
    var $form = $('form[data-cart-item-add]', $scope);
    var $productOptionsElement = $('[data-product-option-change]', $form);
    var hasOptions = $productOptionsElement.html().trim().length;
    var hasDefaultOptions = $productOptionsElement.find('[data-default]').length;
    var $buyNowBtn = $('#buy-now-button-main');
    var $atcBtn = $('#form-action-addToCart');
    $productOptionsElement.on('change', function (event) {
      _this.productOptionsChanged(event);
      _this.setProductVariant();
    });
    $atcBtn.on('click', function (event) {
      if (!$form[0].checkValidity()) {
        $form[0].reportValidity();
      } else {
        _this.addProductToCart(event, $form[0]);
      }
    });
    $buyNowBtn.on('click', function (event) {
      if (!$form[0].checkValidity()) {
        $form[0].reportValidity();
      } else {
        _this.buyNowButton(event);
      }
    });

    // Update product attributes. Also update the initial view in case items are oos
    // or have default variant properties that change the view
    if ((lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(productAttributesData) || hasDefaultOptions) && hasOptions) {
      var $productId = $('[name="product_id"]', $form).val();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_20__["default"].api.productAttributes.optionChange($productId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
        var attributesData = response.data || {};
        var attributesContent = response.content || {};
        _this.updateProductAttributes(attributesData);
        if (hasDefaultOptions) {
          _this.updateView(attributesData, attributesContent);
        } else {
          _this.updateDefaultAttributesForOOS(attributesData);
        }
      });
    } else {
      this.updateProductAttributes(productAttributesData);
    }
    $productOptionsElement.show();
    this.previewModal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_24__["default"])('#previewModal')[0];
    this.quickviewModal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_24__["default"])('#modal')[0];
  }

  /**
   * https://stackoverflow.com/questions/49672992/ajax-request-fails-when-sending-formdata-including-empty-file-input-in-safari
   * Safari browser with jquery 3.3.1 has an issue uploading empty file parameters. This function removes any empty files from the form params
   * @param formData: FormData object
   * @returns FormData object
   */
  var _proto = ProductDetails.prototype;
  _proto.filterEmptyFilesFromForm = function filterEmptyFilesFromForm(formData) {
    try {
      for (var _iterator = _createForOfIteratorHelperLoose(formData), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
          key = _step$value[0],
          val = _step$value[1];
        if (val instanceof File && !val.name && !val.size) {
          formData.delete(key);
        }
      }
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }
    return formData;
  };
  _proto.setProductVariant = function setProductVariant() {
    var unsatisfiedRequiredFields = [];
    var options = [];
    $.each($('[data-product-attribute]'), function (index, value) {
      var optionLabel = value.children[0].innerText;
      var optionTitle = optionLabel.split(':')[0].trim();
      var required = optionLabel.toLowerCase().includes('required');
      var type = value.getAttribute('data-product-attribute');
      if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'date') {
        var isSatisfied = Array.from(value.querySelectorAll('select')).every(function (select) {
          return select.selectedIndex !== 0;
        });
        if (isSatisfied) {
          var dateString = Array.from(value.querySelectorAll('select')).map(function (x) {
            return x.value;
          }).join('-');
          options.push(optionTitle + ":" + dateString);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-select') {
        var select = value.querySelector('select');
        var selectedIndex = select.selectedIndex;
        if (selectedIndex !== 0) {
          options.push(optionTitle + ":" + select.options[selectedIndex].innerText);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
        var checked = value.querySelector(':checked');
        if (checked) {
          if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
            var label = checked.labels[0].innerText;
            if (label) {
              options.push(optionTitle + ":" + label);
            }
          }
          if (type === 'swatch') {
            var _label = checked.labels[0].children[0];
            if (_label) {
              options.push(optionTitle + ":" + _label.title);
            }
          }
          if (type === 'input-checkbox') {
            options.push(optionTitle + ":Yes");
          }
          return;
        }
        if (type === 'input-checkbox') {
          options.push(optionTitle + ":No");
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
    });
    var productVariant = unsatisfiedRequiredFields.length === 0 ? options.sort().join(', ') : 'unsatisfied';
    var view = $('.productView');
    if (productVariant) {
      productVariant = productVariant === 'unsatisfied' ? '' : productVariant;
      if (view.attr('data-event-type')) {
        view.attr('data-product-variant', productVariant);
      } else {
        var productName = view.find('.productView-title')[0].innerText;
        // Hotfix to stop js breaking on products with quotation marks in their name
        var sanitisedName = productName.replace(/(['"])/g, "\\$1"); // eslint-disable-line quotes
        // Unsupported still, maybe later
        // let sanitisedName = CSS.escape(productName);
        var card = $("[data-name='" + sanitisedName + "']");
        card.attr('data-product-variant', productVariant);

        // Old code
        // const productName = view.find('.productView-title')[0].innerText;
        // const card = $(`[data-name="${productName}"]`);
        // card.attr('data-product-variant', productVariant);
      }
    }
  }

  /**
   * Since $productView can be dynamically inserted using render_with,
   * We have to retrieve the respective elements
   *
   * @param $scope
   */;
  _proto.getViewModel = function getViewModel($scope) {
    return {
      $priceWithTax: $('[data-product-price-with-tax]', $scope),
      $priceWithoutTax: $('[data-product-price-without-tax]', $scope),
      rrpWithTax: {
        $div: $('.rrp-price--withTax', $scope),
        $span: $('[data-product-rrp-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: $('.rrp-price--withoutTax', $scope),
        $span: $('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithTax: {
        $div: $('.non-sale-price--withTax', $scope),
        $span: $('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutTax: {
        $div: $('.non-sale-price--withoutTax', $scope),
        $span: $('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: $('.price-section--saving', $scope),
        $span: $('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: $('.price-now-label', $scope)
      },
      priceLabel: {
        $span: $('.price-label', $scope)
      },
      $weight: $('.productView-info [data-product-weight]', $scope),
      $increments: $('.form-field--increments :input', $scope),
      $addToCart: $('#form-action-addToCart', $scope),
      $wishlistVariation: $('[data-wishlist-add] [name="variation_id"]', $scope),
      stock: {
        $container: $('.productView__stock', $scope),
        $input: $('[data-product-stock]', $scope)
      },
      sku: {
        $label: $('dt.sku-label', $scope),
        $value: $('[data-product-sku]', $scope)
      },
      upc: {
        $label: $('dt.upc-label', $scope),
        $value: $('[data-product-upc]', $scope)
      },
      quantity: {
        $text: $('.incrementTotal', $scope),
        $input: $('[name=qty\\[\\]]', $scope)
      },
      $bulkPricing: $('.productView-info-bulkPricing', $scope)
    };
  }

  /**
   * Checks if the current window is being run inside an iframe
   * @returns {boolean}
   */;
  _proto.isRunningInIframe = function isRunningInIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  /**
   *
   * Handle product options changes
   *
   */;
  _proto.productOptionsChanged = function productOptionsChanged(event) {
    var _this2 = this;
    var $changedOption = $(event.target);
    var $form = $changedOption.parents('form');
    var productId = $('[name="product_id"]', $form).val();

    // Do not trigger an ajax request if it's a file or if the browser doesn't support FormData
    if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_20__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
      var productAttributesData = response.data || {};
      var productAttributesContent = response.content || {};
      _this2.updateProductAttributes(productAttributesData);
      _this2.updateView(productAttributesData, productAttributesContent);
    });
  };
  _proto.showProductImage = function showProductImage(image) {
    if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_3___default()(image)) {
      var zoomImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_20__["default"].tools.imageSrcset.getSrcset(image.data, {
        '1x': this.context.themeSettings.zoom_size
      }
      /*
          Should match zoom size used for data-zoom-image in
          components/products/product-view.html
          Note that this will only be used as a fallback image for browsers that do not support srcset
          Also note that getSrcset returns a simple src string when exactly one size is provided
      */);
      var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_20__["default"].tools.imageSrcset.getSrcset(image.data, {
        '1x': this.context.themeSettings.product_size
      }
      /*
          Should match fallback image size used for the main product image in
          components/products/product-view.html
          Note that this will only be used as a fallback image for browsers that do not support srcset
          Also note that getSrcset returns a simple src string when exactly one size is provided
      */);
      var mainImageSrcset = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_20__["default"].tools.imageSrcset.getSrcset(image.data);
      this.imageGallery.setAlternateImage({
        mainImageUrl: mainImageUrl,
        zoomImageUrl: zoomImageUrl,
        mainImageSrcset: mainImageSrcset
      });
    } else {
      this.imageGallery.restoreImage();
    }
  }

  /**
   *
   * Handle action when the shopper clicks on + / - for quantity
   *
   */;
  _proto.listenQuantityChange = function listenQuantityChange() {
    var _this3 = this;
    this.$scope.on('click', '[data-quantity-change] button', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      var viewModel = _this3.getViewModel(_this3.$scope);
      var $input = viewModel.quantity.$input;
      var quantityMin = parseInt($input.data('quantity-min'), 10);
      var quantityMax = parseInt($input.data('quantity-max'), 10);
      var qty = parseInt($input.val(), 10);

      // If action is incrementing
      if ($target.data('action') === 'inc') {
        // If quantity max option is set
        if (quantityMax > 0) {
          // Check quantity does not exceed max
          if (qty + 1 <= quantityMax) {
            qty++;
          }
        } else {
          qty++;
        }
      } else if (qty > 1) {
        // If quantity min option is set
        if (quantityMin > 0) {
          // Check quantity does not fall below min
          if (qty - 1 >= quantityMin) {
            qty--;
          }
        } else {
          qty--;
        }
      }

      // update hidden input
      viewModel.quantity.$input.val(qty);
      // update text
      viewModel.quantity.$text.text(qty);
    });
  };
  _proto.buyNowButton = function buyNowButton(event) {
    event.preventDefault();
    var $atcAction = $('#atc-form-action');
    var $form = $('form[data-cart-item-add]');
    $atcAction.val('buy');
    $form.submit();
  }

  /**
   *
   * Add a product to cart
   *
   */;
  _proto.addProductToCart = function addProductToCart(event, form) {
    var _this4 = this;
    var $addToCartBtn = $('#form-action-addToCart', $(event.target));
    var originalBtnVal = $addToCartBtn.val();
    var waitMessage = $addToCartBtn.data('waitMessage');
    var qtyInput = $(event.target).closest('.form').find('.form-input--incrementTotal') || 1;
    var qtyMin = parseInt(qtyInput.data('quantity-min'), 10) || null;
    var qtyMax = parseInt(qtyInput.data('quantity-max'), 10) || null;
    var minErr = qtyInput.data('quantity-min-error') || null;
    var maxErr = qtyInput.data('quantity-max-error') || null;
    var newQty = parseInt(Number(qtyInput.val()), 10) || null;
    var $atcAction = $('#atc-form-action');
    $atcAction.val('add');

    // Do not do AJAX if browser doesn't support FormData
    if (window.FormData === undefined) {
      return;
    }

    // Prevent default
    event.preventDefault();
    $addToCartBtn.val(waitMessage).prop('disabled', true);

    // Does not quality for min/max quantity
    if (newQty < qtyMin) {
      $addToCartBtn.val(originalBtnVal).prop('disabled', false);
      Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_26__["default"])({
        text: minErr,
        type: 'error'
      }).catch(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_26__["default"].noop);
    } else if (qtyMax > 0 && newQty > qtyMax) {
      $addToCartBtn.val(originalBtnVal).prop('disabled', false);
      Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_26__["default"])({
        text: maxErr,
        type: 'error'
      }).catch(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_26__["default"].noop);
    } else if (newQty < 0 || Number.isNaN(newQty)) {
      $addToCartBtn.val(originalBtnVal).prop('disabled', false);
      var invalidEntry = qtyInput.val();
      qtyInput.val(qtyMin);
      Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_26__["default"])({
        text: invalidEntry + " is not a valid entry",
        type: 'error'
      }).catch(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_26__["default"].noop);
    } else {
      this.$overlay.show();

      // Add item to cart
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_20__["default"].api.cart.itemAdd(this.filterEmptyFilesFromForm(new FormData(form)), function (err, response) {
        var errorMessage = err || response.data.error;
        _this4.$overlay.hide();
        $addToCartBtn.val(originalBtnVal).prop('disabled', false);

        // Guard statement
        if (errorMessage) {
          // Strip the HTML from the error message
          var tmp = document.createElement('DIV');
          tmp.innerHTML = errorMessage;
          return Object(_global_modal__WEBPACK_IMPORTED_MODULE_24__["showAlertModal"])(tmp.textContent || tmp.innerText);
        }
        if (_this4.quickviewModal) {
          _this4.quickviewModal.close();
        }

        // Open preview modal and update content
        if (_this4.previewModal) {
          if (_this4.context.addToCartMode === 'popup') {
            _this4.previewModal.open();
          }
          _this4.updateCartContent(_this4.previewModal, response.data.cart_item.id);
        } else {
          _this4.$overlay.show();
          // if no modal, redirect to the cart page
          _this4.redirectTo(response.data.cart_item.cart_url || _this4.context.urls.cart);
        }
      });
    }
  }

  /**
   * Get cart contents
   *
   * @param {String} cartItemId
   * @param {Function} onComplete
   */;
  _proto.getCartContent = function getCartContent(cartItemId, onComplete) {
    var options = {
      template: 'cart/preview',
      params: {
        suggest: cartItemId
      },
      config: {
        cart: {
          suggestions: {
            limit: 4
          }
        }
      }
    };
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_20__["default"].api.cart.getContent(options, onComplete);
  }

  /**
   * Redirect to url
   *
   * @param {String} url
   */;
  _proto.redirectTo = function redirectTo(url) {
    if (this.isRunningInIframe() && !window.iframeSdk) {
      window.top.location = url;
    } else {
      window.location = url;
    }
  }

  /**
   * Update cart content
   *
   * @param {Modal} modal
   * @param {String} cartItemId
   * @param {Function} onComplete
   */;
  _proto.updateCartContent = function updateCartContent(modal, cartItemId, onComplete) {
    var _this5 = this;
    var $sideCart = $('.side-cart-content');
    if ($sideCart) {
      var $sideCartDetails = $('.side-cart-details');
      var $sideCartActions = $('.side-cart-actions');
      var options = {
        template: {
          content: 'f/b2b/side-cart-content',
          details: 'f/b2b/side-cart-details',
          actions: 'f/b2b/side-cart-actions',
          counter: 'f/cart/item-count'
        }
      };
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_20__["default"].api.cart.getContent(options, function (err, response) {
        $sideCart.html(response.content);
        $sideCartDetails.html(response.details);
        $sideCartActions.html(response.actions);
        $('body').trigger('cart-quantity-update', response.counter);
      });
    }
    this.getCartContent(cartItemId, function (err, response) {
      if (err) {
        return;
      }
      modal.updateContent(response);
      if (_this5.context.addToCartMode === 'dropdown') {
        _this5.showCartPreview();
      }

      // Update cart counter
      var $body = $('body');
      var $cartQuantity = $('[data-cart-quantity]', modal.$content);
      var $cartCounter = $('.navUser-action .cart-count');
      var quantity = $cartQuantity.data('cartQuantity') || 0;
      $cartCounter.addClass('cart-count--positive');
      $body.trigger('cart-quantity-update', quantity);
      if (onComplete) {
        onComplete(response);
      }
    });
  };
  _proto.showCartPreview = function showCartPreview() {
    var loadingClass = 'is-loading';
    var $cartDropdown = $('#cart-preview-dropdown');
    var $cartLoading = $('<div class="loadingOverlay"></div>');
    var options = {
      template: 'common/cart-preview'
    };
    function hideCartPreview() {
      $cartDropdown.removeClass('cartPreview-isOpen is-open').removeAttr('style').css({
        left: '-99999px'
      });
    }

    // Redirect to full cart page
    //
    // https://developer.mozilla.org/en-US/docs/Browser_detection_using_the_user_agent
    // In summary, we recommend looking for the string 'Mobi' anywhere in the User Agent to detect a mobile device.
    if (/Mobi/i.test(navigator.userAgent)) {
      return event.stopPropagation(); // eslint-disable-line
    }

    // event.preventDefault();

    $cartDropdown.addClass(loadingClass).html($cartLoading);
    $cartLoading.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_20__["default"].api.cart.getContent(options, function (err, response) {
      $cartDropdown.removeClass(loadingClass).html(response);
      $cartLoading.hide();
      $cartDropdown.addClass('cartPreview-isOpen is-open').css({
        left: 'inherit',
        right: '20px',
        top: '49px'
      }).slideDown('fast');
      setTimeout(hideCartPreview, 3000);
    });
  }

  /**
   * Show an message box if a message is passed
   * Hide the box if the message is empty
   * @param  {String} message
   */;
  _proto.showMessageBox = function showMessageBox(message) {
    var $messageBox = $('.productAttributes-message');
    if (message) {
      $('.alertBox-message', $messageBox).text(message);
      $messageBox.show();
    } else {
      $messageBox.hide();
    }
  }

  /**
   * Hide the pricing elements that will show up only when the price exists in API
   * @param viewModel
   */;
  _proto.clearPricingNotFound = function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithTax.$div.hide();
    viewModel.nonSaleWithoutTax.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
    viewModel.priceLabel.$span.hide();
  }

  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */;
  _proto.updatePriceView = function updatePriceView(viewModel, price) {
    this.clearPricingNotFound(viewModel);
    if (price.with_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(price.with_tax.formatted);
    }
    if (price.without_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(price.without_tax.formatted);
    }
    if (price.rrp_with_tax) {
      viewModel.rrpWithTax.$div.show();
      viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
    }
    if (price.rrp_without_tax) {
      viewModel.rrpWithoutTax.$div.show();
      viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
    }
    if (price.saved) {
      viewModel.priceSaved.$div.show();
      viewModel.priceSaved.$span.html(price.saved.formatted);
    }
    if (price.non_sale_price_with_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
    }
    if (price.non_sale_price_without_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithoutTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
    }
  }

  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */;
  _proto.updateView = function updateView(data, content) {
    if (content === void 0) {
      content = null;
    }
    var viewModel = this.getViewModel(this.$scope);
    this.showMessageBox(data.stock_message || data.purchasing_message);
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_2___default()(data.price)) {
      this.updatePriceView(viewModel, data.price);
    }
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_2___default()(data.weight)) {
      viewModel.$weight.html(data.weight.formatted);
    }

    // Set variation_id if it exists for adding to wishlist
    if (data.variantId) {
      viewModel.$wishlistVariation.val(data.variantId);
    }

    // If SKU is available
    if (data.sku) {
      viewModel.sku.$value.text(data.sku);
      viewModel.sku.$label.show();
    } else {
      viewModel.sku.$label.hide();
      viewModel.sku.$value.text('');
    }

    // If UPC is available
    if (data.upc) {
      viewModel.upc.$value.text(data.upc);
      viewModel.upc.$label.show();
    } else {
      viewModel.upc.$label.hide();
      viewModel.upc.$value.text('');
    }

    // if stock view is on (CP settings)
    if (viewModel.stock.$container.length && lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(data.stock)) {
      // if the stock container is hidden, show
      viewModel.stock.$container.removeClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);
    } else {
      viewModel.stock.$container.addClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);
    }
    this.updateDefaultAttributesForOOS(data);

    // If Bulk Pricing rendered HTML is available
    if (data.bulk_discount_rates && content) {
      viewModel.$bulkPricing.html(content);
    } else if (typeof data.bulk_discount_rates !== 'undefined') {
      viewModel.$bulkPricing.html('');
    }
    var addToCartWrapper = $('#add-to-cart-wrapper');
    if (addToCartWrapper.is(':hidden') && data.purchasable) {
      addToCartWrapper.show();
    }
  };
  _proto.updateDefaultAttributesForOOS = function updateDefaultAttributesForOOS(data) {
    var viewModel = this.getViewModel(this.$scope);
    if (!data.purchasable || !data.instock) {
      viewModel.$addToCart.prop('disabled', true);
      viewModel.$increments.prop('disabled', true);
      viewModel.stock.$container.removeClass('form-label--stock').addClass('form-label--out-of-stock');
    } else {
      viewModel.$addToCart.prop('disabled', false);
      viewModel.$increments.prop('disabled', false);
      viewModel.stock.$container.removeClass('form-label--out-of-stock').addClass('form-label--stock');
    }
  }

  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */;
  _proto.updateProductAttributes = function updateProductAttributes(data) {
    var _this6 = this;
    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockMessage = " (" + data.out_of_stock_message + ")";
    this.showProductImage(data.image);
    if (behavior !== 'hide_option' && behavior !== 'label_option') {
      return;
    }
    $('[data-product-attribute-value]', this.$scope).each(function (i, attribute) {
      var $attribute = $(attribute);
      var attrId = parseInt($attribute.data('productAttributeValue'), 10);
      if (inStockIds.indexOf(attrId) !== -1) {
        _this6.enableAttribute($attribute, behavior, outOfStockMessage);
      } else {
        _this6.disableAttribute($attribute, behavior, outOfStockMessage);
      }
    });
  };
  _proto.disableAttribute = function disableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.hide();
    } else {
      $attribute.addClass('unavailable');
    }
  };
  _proto.disableSelectOptionAttribute = function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    var $select = $attribute.parent();
    if (behavior === 'hide_option') {
      $attribute.toggleOption(false);
      // If the attribute is the selected option in a select dropdown, select the first option (MERC-639)
      if ($select.val() === $attribute.attr('value')) {
        $select[0].selectedIndex = 0;
      }
    } else {
      $attribute.attr('disabled', 'disabled');
      $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
    }
  };
  _proto.enableAttribute = function enableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.show();
    } else {
      $attribute.removeClass('unavailable');
    }
  };
  _proto.enableSelectOptionAttribute = function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    if (behavior === 'hide_option') {
      $attribute.toggleOption(true);
    } else {
      $attribute.prop('disabled', false);
      $attribute.html($attribute.html().replace(outOfStockMessage, ''));
    }
  };
  _proto.getAttributeType = function getAttributeType($attribute) {
    var $parent = $attribute.closest('[data-product-attribute]');
    return $parent ? $parent.data('productAttribute') : null;
  }

  /**
   * Allow radio buttons to get deselected
   */;
  _proto.initRadioAttributes = function initRadioAttributes() {
    var _this7 = this;
    $('[data-product-attribute] input[type="radio"]', this.$scope).each(function (i, radio) {
      var $radio = $(radio);

      // Only bind to click once
      if ($radio.attr('data-state') !== undefined) {
        $radio.on('click', function () {
          if ($radio.data('state') === true) {
            $radio.prop('checked', false);
            $radio.data('state', false);
            $radio.trigger('change');
          } else {
            $radio.data('state', true);
          }
          _this7.initRadioAttributes();
        });
      }
      $radio.attr('data-state', $radio.prop('checked'));
    });
  }

  /**
   * Check for fragment identifier in URL requesting a specific tab
   */;
  _proto.getTabRequests = function getTabRequests() {
    if (window.location.hash && window.location.hash.indexOf('#tab-') === 0) {
      var $activeTab = $('.tabs').has("[href='" + window.location.hash + "']");
      var $tabContent = $("" + window.location.hash);
      if ($activeTab.length > 0) {
        $activeTab.find('.tab').removeClass('is-active').has("[href='" + window.location.hash + "']").addClass('is-active');
        $tabContent.addClass('is-active').siblings().removeClass('is-active');
      }
    }
  };
  return ProductDetails;
}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

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

/***/ "./assets/js/theme/product/image-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/image-gallery.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageGallery; });
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/clone */ "./node_modules/lodash/clone.js");
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_clone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var easyzoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! easyzoom */ "./node_modules/easyzoom/dist/easyzoom.js");
/* harmony import */ var easyzoom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(easyzoom__WEBPACK_IMPORTED_MODULE_2__);



var ImageGallery = /*#__PURE__*/function () {
  function ImageGallery($gallery) {
    this.$mainImage = $gallery.find('[data-image-gallery-main]');
    this.$selectableImages = $gallery.find('[data-image-gallery-item]');
    this.currentImage = {};
  }
  var _proto = ImageGallery.prototype;
  _proto.init = function init() {
    this.bindEvents();
    this.setImageZoom();
  };
  _proto.setMainImage = function setMainImage(imgObj) {
    this.currentImage = lodash_clone__WEBPACK_IMPORTED_MODULE_0___default()(imgObj);
    this.setActiveThumb();
    this.swapMainImage();
  };
  _proto.setAlternateImage = function setAlternateImage(imgObj) {
    if (!this.savedImage) {
      this.savedImage = {
        mainImageUrl: this.$mainImage.find('img').attr('src'),
        zoomImageUrl: this.$mainImage.attr('data-zoom-image'),
        mainImageSrcset: this.$mainImage.find('img').attr('srcset'),
        $selectedThumb: this.currentImage.$selectedThumb
      };
    }
    this.setMainImage(imgObj);
  };
  _proto.restoreImage = function restoreImage() {
    if (this.savedImage) {
      this.setMainImage(this.savedImage);
      delete this.savedImage;
    }
  };
  _proto.selectNewImage = function selectNewImage(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    var imgObj = {
      mainImageUrl: $target.attr('data-image-gallery-new-image-url'),
      zoomImageUrl: $target.attr('data-image-gallery-zoom-image-url'),
      mainImageSrcset: $target.attr('data-image-gallery-new-image-srcset'),
      $selectedThumb: $target
    };
    this.setMainImage(imgObj);
  };
  _proto.setActiveThumb = function setActiveThumb() {
    this.$selectableImages.removeClass('is-active');
    if (this.currentImage.$selectedThumb) {
      this.currentImage.$selectedThumb.addClass('is-active');
    }
  };
  _proto.swapMainImage = function swapMainImage() {
    this.easyzoom.data('easyZoom').swap(this.currentImage.mainImageUrl, this.currentImage.zoomImageUrl, this.currentImage.mainImageSrcset);
    this.$mainImage.attr({
      'data-zoom-image': this.currentImage.zoomImageUrl
    });
  };
  _proto.checkImage = function checkImage() {
    var containerHeight = $('.productView-image').height();
    var containerWidth = $('.productView-image').width();
    var height = this.easyzoom.data('easyZoom').$zoom.context.height;
    var width = this.easyzoom.data('easyZoom').$zoom.context.width;
    if (height < containerHeight || width < containerWidth) {
      this.easyzoom.data('easyZoom').hide();
    }
  };
  _proto.setImageZoom = function setImageZoom() {
    var _this = this;
    this.easyzoom = this.$mainImage.easyZoom({
      onShow: function onShow() {
        return _this.checkImage();
      },
      errorNotice: '',
      loadingNotice: ''
    });
  };
  _proto.bindEvents = function bindEvents() {
    this.$selectableImages.on('click', this.selectNewImage.bind(this));
  };
  return ImageGallery;
}();

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3Byb2R1Y3QtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZi9zZWxlY3RlZC1vcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvaW1hZ2UtZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC9yZXZpZXdzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L3ZpZGVvLWdhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3dpc2hsaXN0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3REZXRhaWxzIiwiJHNjb3BlIiwiY29udGV4dCIsInByb2R1Y3RBdHRyaWJ1dGVzRGF0YSIsIl90aGlzIiwiJG92ZXJsYXkiLCIkIiwiaW1hZ2VHYWxsZXJ5IiwiSW1hZ2VHYWxsZXJ5IiwiaW5pdCIsImxpc3RlblF1YW50aXR5Q2hhbmdlIiwiaW5pdFJhZGlvQXR0cmlidXRlcyIsIldpc2hsaXN0IiwibG9hZCIsImdldFRhYlJlcXVlc3RzIiwiJGZvcm0iLCIkcHJvZHVjdE9wdGlvbnNFbGVtZW50IiwiaGFzT3B0aW9ucyIsImh0bWwiLCJ0cmltIiwibGVuZ3RoIiwiaGFzRGVmYXVsdE9wdGlvbnMiLCJmaW5kIiwiJGJ1eU5vd0J0biIsIiRhdGNCdG4iLCJvbiIsImV2ZW50IiwicHJvZHVjdE9wdGlvbnNDaGFuZ2VkIiwic2V0UHJvZHVjdFZhcmlhbnQiLCJjaGVja1ZhbGlkaXR5IiwicmVwb3J0VmFsaWRpdHkiLCJhZGRQcm9kdWN0VG9DYXJ0IiwiYnV5Tm93QnV0dG9uIiwiX2lzRW1wdHkiLCIkcHJvZHVjdElkIiwidmFsIiwidXRpbHMiLCJhcGkiLCJwcm9kdWN0QXR0cmlidXRlcyIsIm9wdGlvbkNoYW5nZSIsInNlcmlhbGl6ZSIsImVyciIsInJlc3BvbnNlIiwiYXR0cmlidXRlc0RhdGEiLCJkYXRhIiwiYXR0cmlidXRlc0NvbnRlbnQiLCJjb250ZW50IiwidXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMiLCJ1cGRhdGVWaWV3IiwidXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MiLCJzaG93IiwicHJldmlld01vZGFsIiwibW9kYWxGYWN0b3J5IiwicXVpY2t2aWV3TW9kYWwiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0iLCJmb3JtRGF0YSIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJfc3RlcCIsImRvbmUiLCJfc3RlcCR2YWx1ZSIsInZhbHVlIiwia2V5IiwiRmlsZSIsIm5hbWUiLCJzaXplIiwiZGVsZXRlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMiLCJvcHRpb25zIiwiZWFjaCIsImluZGV4Iiwib3B0aW9uTGFiZWwiLCJjaGlsZHJlbiIsImlubmVyVGV4dCIsIm9wdGlvblRpdGxlIiwic3BsaXQiLCJyZXF1aXJlZCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0eXBlIiwiZ2V0QXR0cmlidXRlIiwicXVlcnlTZWxlY3RvciIsInB1c2giLCJpc1NhdGlzZmllZCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJldmVyeSIsInNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJkYXRlU3RyaW5nIiwibWFwIiwieCIsImpvaW4iLCJjaGVja2VkIiwibGFiZWwiLCJsYWJlbHMiLCJ0aXRsZSIsInByb2R1Y3RWYXJpYW50Iiwic29ydCIsInZpZXciLCJhdHRyIiwicHJvZHVjdE5hbWUiLCJzYW5pdGlzZWROYW1lIiwicmVwbGFjZSIsImNhcmQiLCJnZXRWaWV3TW9kZWwiLCIkcHJpY2VXaXRoVGF4IiwiJHByaWNlV2l0aG91dFRheCIsInJycFdpdGhUYXgiLCIkZGl2IiwiJHNwYW4iLCJycnBXaXRob3V0VGF4Iiwibm9uU2FsZVdpdGhUYXgiLCJub25TYWxlV2l0aG91dFRheCIsInByaWNlU2F2ZWQiLCJwcmljZU5vd0xhYmVsIiwicHJpY2VMYWJlbCIsIiR3ZWlnaHQiLCIkaW5jcmVtZW50cyIsIiRhZGRUb0NhcnQiLCIkd2lzaGxpc3RWYXJpYXRpb24iLCJzdG9jayIsIiRjb250YWluZXIiLCIkaW5wdXQiLCJza3UiLCIkbGFiZWwiLCIkdmFsdWUiLCJ1cGMiLCJxdWFudGl0eSIsIiR0ZXh0IiwiJGJ1bGtQcmljaW5nIiwiaXNSdW5uaW5nSW5JZnJhbWUiLCJ3aW5kb3ciLCJzZWxmIiwidG9wIiwiX3RoaXMyIiwiJGNoYW5nZWRPcHRpb24iLCJ0YXJnZXQiLCJwYXJlbnRzIiwicHJvZHVjdElkIiwiRm9ybURhdGEiLCJ1bmRlZmluZWQiLCJwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQiLCJzaG93UHJvZHVjdEltYWdlIiwiaW1hZ2UiLCJfaXNQbGFpbk9iamVjdCIsInpvb21JbWFnZVVybCIsInRvb2xzIiwiaW1hZ2VTcmNzZXQiLCJnZXRTcmNzZXQiLCJ0aGVtZVNldHRpbmdzIiwiem9vbV9zaXplIiwibWFpbkltYWdlVXJsIiwicHJvZHVjdF9zaXplIiwibWFpbkltYWdlU3Jjc2V0Iiwic2V0QWx0ZXJuYXRlSW1hZ2UiLCJyZXN0b3JlSW1hZ2UiLCJfdGhpczMiLCJwcmV2ZW50RGVmYXVsdCIsIiR0YXJnZXQiLCJjdXJyZW50VGFyZ2V0Iiwidmlld01vZGVsIiwicXVhbnRpdHlNaW4iLCJwYXJzZUludCIsInF1YW50aXR5TWF4IiwicXR5IiwidGV4dCIsIiRhdGNBY3Rpb24iLCJzdWJtaXQiLCJmb3JtIiwiX3RoaXM0IiwiJGFkZFRvQ2FydEJ0biIsIm9yaWdpbmFsQnRuVmFsIiwid2FpdE1lc3NhZ2UiLCJxdHlJbnB1dCIsImNsb3Nlc3QiLCJxdHlNaW4iLCJxdHlNYXgiLCJtaW5FcnIiLCJtYXhFcnIiLCJuZXdRdHkiLCJOdW1iZXIiLCJwcm9wIiwic3dhbCIsImNhdGNoIiwibm9vcCIsImlzTmFOIiwiaW52YWxpZEVudHJ5IiwiY2FydCIsIml0ZW1BZGQiLCJlcnJvck1lc3NhZ2UiLCJoaWRlIiwidG1wIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwic2hvd0FsZXJ0TW9kYWwiLCJ0ZXh0Q29udGVudCIsImNsb3NlIiwiYWRkVG9DYXJ0TW9kZSIsIm9wZW4iLCJ1cGRhdGVDYXJ0Q29udGVudCIsImNhcnRfaXRlbSIsImlkIiwicmVkaXJlY3RUbyIsImNhcnRfdXJsIiwidXJscyIsImdldENhcnRDb250ZW50IiwiY2FydEl0ZW1JZCIsIm9uQ29tcGxldGUiLCJ0ZW1wbGF0ZSIsInBhcmFtcyIsInN1Z2dlc3QiLCJjb25maWciLCJzdWdnZXN0aW9ucyIsImxpbWl0IiwiZ2V0Q29udGVudCIsInVybCIsImlmcmFtZVNkayIsImxvY2F0aW9uIiwibW9kYWwiLCJfdGhpczUiLCIkc2lkZUNhcnQiLCIkc2lkZUNhcnREZXRhaWxzIiwiJHNpZGVDYXJ0QWN0aW9ucyIsImRldGFpbHMiLCJhY3Rpb25zIiwiY291bnRlciIsInRyaWdnZXIiLCJ1cGRhdGVDb250ZW50Iiwic2hvd0NhcnRQcmV2aWV3IiwiJGJvZHkiLCIkY2FydFF1YW50aXR5IiwiJGNvbnRlbnQiLCIkY2FydENvdW50ZXIiLCJhZGRDbGFzcyIsImxvYWRpbmdDbGFzcyIsIiRjYXJ0RHJvcGRvd24iLCIkY2FydExvYWRpbmciLCJoaWRlQ2FydFByZXZpZXciLCJyZW1vdmVDbGFzcyIsInJlbW92ZUF0dHIiLCJjc3MiLCJsZWZ0IiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInN0b3BQcm9wYWdhdGlvbiIsInJpZ2h0Iiwic2xpZGVEb3duIiwic2V0VGltZW91dCIsInNob3dNZXNzYWdlQm94IiwibWVzc2FnZSIsIiRtZXNzYWdlQm94IiwiY2xlYXJQcmljaW5nTm90Rm91bmQiLCJ1cGRhdGVQcmljZVZpZXciLCJwcmljZSIsIndpdGhfdGF4IiwiZm9ybWF0dGVkIiwid2l0aG91dF90YXgiLCJycnBfd2l0aF90YXgiLCJycnBfd2l0aG91dF90YXgiLCJzYXZlZCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4Iiwibm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgiLCJzdG9ja19tZXNzYWdlIiwicHVyY2hhc2luZ19tZXNzYWdlIiwiX2lzT2JqZWN0Iiwid2VpZ2h0IiwidmFyaWFudElkIiwiX2lzTnVtYmVyIiwiYnVsa19kaXNjb3VudF9yYXRlcyIsImFkZFRvQ2FydFdyYXBwZXIiLCJpcyIsInB1cmNoYXNhYmxlIiwiaW5zdG9jayIsIl90aGlzNiIsImJlaGF2aW9yIiwib3V0X29mX3N0b2NrX2JlaGF2aW9yIiwiaW5TdG9ja0lkcyIsImluX3N0b2NrX2F0dHJpYnV0ZXMiLCJvdXRPZlN0b2NrTWVzc2FnZSIsIm91dF9vZl9zdG9ja19tZXNzYWdlIiwiaSIsImF0dHJpYnV0ZSIsIiRhdHRyaWJ1dGUiLCJhdHRySWQiLCJpbmRleE9mIiwiZW5hYmxlQXR0cmlidXRlIiwiZGlzYWJsZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZVR5cGUiLCJkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiJHNlbGVjdCIsInBhcmVudCIsInRvZ2dsZU9wdGlvbiIsImVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsIiRwYXJlbnQiLCJfdGhpczciLCJyYWRpbyIsIiRyYWRpbyIsImhhc2giLCIkYWN0aXZlVGFiIiwiaGFzIiwiJHRhYkNvbnRlbnQiLCJzaWJsaW5ncyIsIiRzcmMiLCIkc2VsZWN0ZWQiLCIkc2VsZWN0ZWRPcHRpb25MYWJlbCIsIiRzZWxlY3RlZE9wdGlvbiIsImNoYW5nZUxhYmVsIiwiUHJvZHVjdCIsIl9QYWdlTWFuYWdlciIsImNhbGwiLCJocmVmIiwiJHJldmlld0xpbmsiLCJfaW5oZXJpdHNMb29zZSIsIm9uUmVhZHkiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwicGF0aG5hbWUiLCJ2YWxpZGF0b3IiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJwcm9kdWN0RGV0YWlscyIsIkJDRGF0YSIsInByb2R1Y3RfYXR0cmlidXRlcyIsInZpZGVvR2FsbGVyeSIsIiRyZXZpZXdGb3JtIiwiY2xhc3NpZnlGb3JtIiwicmV2aWV3IiwiUmV2aWV3IiwicmVnaXN0ZXJWYWxpZGF0aW9uIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiZW5hYmxlU2VsZWN0ZWRPcHRpb25MYWJlbCIsInNlbGVjdGVkT3B0aW9uIiwiU3RpY2t5IiwicmVxdWlyZSIsInN0aWNreSIsInByb2R1Y3RSZXZpZXdIYW5kbGVyIiwiUGFnZU1hbmFnZXIiLCIkZ2FsbGVyeSIsIiRtYWluSW1hZ2UiLCIkc2VsZWN0YWJsZUltYWdlcyIsImN1cnJlbnRJbWFnZSIsImJpbmRFdmVudHMiLCJzZXRJbWFnZVpvb20iLCJzZXRNYWluSW1hZ2UiLCJpbWdPYmoiLCJfY2xvbmUiLCJzZXRBY3RpdmVUaHVtYiIsInN3YXBNYWluSW1hZ2UiLCJzYXZlZEltYWdlIiwiJHNlbGVjdGVkVGh1bWIiLCJzZWxlY3ROZXdJbWFnZSIsImVhc3l6b29tIiwic3dhcCIsImNoZWNrSW1hZ2UiLCJjb250YWluZXJIZWlnaHQiLCJoZWlnaHQiLCJjb250YWluZXJXaWR0aCIsIndpZHRoIiwiJHpvb20iLCJlYXN5Wm9vbSIsIm9uU2hvdyIsImVycm9yTm90aWNlIiwibG9hZGluZ05vdGljZSIsImJpbmQiLCJfZGVmYXVsdCIsIm5vZCIsIiRyZXZpZXdzQ29udGVudCIsIiRjb2xsYXBzaWJsZSIsImluaXRMaW5rQmluZCIsImluamVjdFBhZ2luYXRpb25MaW5rIiwiY29sbGFwc2VSZXZpZXdzIiwiaGFzQ2xhc3MiLCJDb2xsYXBzaWJsZUV2ZW50cyIsImNsaWNrIiwiJG5leHRMaW5rIiwiJHByZXZMaW5rIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsInJldmlld1JhdGluZyIsInJldmlld1N1YmplY3QiLCJyZXZpZXdDb21tZW50IiwiY2IiLCJyZXN1bHQiLCJmb3JtcyIsImVtYWlsIiwicmV2aWV3RW1haWwiLCJWaWRlb0dhbGxlcnkiLCIkZWxlbWVudCIsIiRwbGF5ZXIiLCIkdmlkZW9zIiwiY3VycmVudFZpZGVvIiwic2VsZWN0TmV3VmlkZW8iLCJzZXRNYWluVmlkZW8iLCJwbHVnaW5LZXkiLCIkdmlkZW9HYWxsZXJ5IiwiZWxlbWVudCIsIiRlbCIsImlzSW5pdGlhbGl6ZWQiLCJXaXNoTGlzdCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJ3aXNobGlzdERlbGV0ZUNvbmZpcm0iLCJjb25maXJtZWQiLCJjb25maXJtIiwid2lzaGxpc3REZWxldGUiLCJyZWdpc3RlckFkZFdpc2hMaXN0VmFsaWRhdGlvbiIsIiRhZGRXaXNobGlzdEZvcm0iLCJhZGRXaXNobGlzdFZhbGlkYXRvciIsIndpc2hMaXN0SGFuZGxlciIsIndpc2hMaXN0VXJsIiwiZGVmYXVsdE1vZGFsIiwiZ2V0UGFnZSIsIndyYXAiLCIkd2lzaGxpc3RGb3JtIiwiY2xpcGJvYXJkIiwiQ2xpcGJvYXJkSlMiLCIkYWRkV2lzaExpc3RGb3JtIiwiZmFkZUluIiwiZGVsYXkiLCJmYWRlT3V0IiwiZ3JpZFN3aXRjaGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDSTtBQUNPO0FBQ047QUFDVztBQUU1QjtBQUNNO0FBQUEsSUFFcEJBLGNBQWM7RUFDL0IsU0FBQUEsZUFBWUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLHFCQUFxQixFQUFPO0lBQUEsSUFBQUMsS0FBQTtJQUFBLElBQTVCRCxxQkFBcUI7TUFBckJBLHFCQUFxQixHQUFHLENBQUMsQ0FBQztJQUFBO0lBQ25ELElBQUksQ0FBQ0UsUUFBUSxHQUFHQyxDQUFDLENBQUMsc0NBQXNDLENBQUM7SUFDekQsSUFBSSxDQUFDTCxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFD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QUM7RUFDMUIsQ0FBQztFQUFBLE9BQUFULFFBQUE7QUFBQSxFQWpHaUMvRCxxREFBVyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnJldmVhbCc7XG5pbXBvcnQgSW1hZ2VHYWxsZXJ5IGZyb20gJy4uL3Byb2R1Y3QvaW1hZ2UtZ2FsbGVyeSc7XG5pbXBvcnQgbW9kYWxGYWN0b3J5LCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgV2lzaGxpc3QgZnJvbSAnLi4vd2lzaGxpc3QnO1xuaW1wb3J0IHN3YWwgZnJvbSAnLi4vZ2xvYmFsL3N3ZWV0LWFsZXJ0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERldGFpbHMge1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgY29udGV4dCwgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhID0ge30pIHtcbiAgICAgICAgdGhpcy4kb3ZlcmxheSA9ICQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdIC5sb2FkaW5nT3ZlcmxheScpO1xuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkgPSBuZXcgSW1hZ2VHYWxsZXJ5KCQoJ1tkYXRhLWltYWdlLWdhbGxlcnldJywgdGhpcy4kc2NvcGUpKTtcbiAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkuaW5pdCgpO1xuICAgICAgICB0aGlzLmxpc3RlblF1YW50aXR5Q2hhbmdlKCk7XG4gICAgICAgIHRoaXMuaW5pdFJhZGlvQXR0cmlidXRlcygpO1xuICAgICAgICBXaXNobGlzdC5sb2FkKHRoaXMuY29udGV4dCk7XG4gICAgICAgIHRoaXMuZ2V0VGFiUmVxdWVzdHMoKTtcblxuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXScsICRzY29wZSk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJywgJGZvcm0pO1xuICAgICAgICBjb25zdCBoYXNPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWxlbWVudC5odG1sKCkudHJpbSgpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgaGFzRGVmYXVsdE9wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50LmZpbmQoJ1tkYXRhLWRlZmF1bHRdJykubGVuZ3RoO1xuICAgICAgICBjb25zdCAkYnV5Tm93QnRuID0gJCgnI2J1eS1ub3ctYnV0dG9uLW1haW4nKTtcbiAgICAgICAgY29uc3QgJGF0Y0J0biA9ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnKTtcblxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCk7XG4gICAgICAgICAgICB0aGlzLnNldFByb2R1Y3RWYXJpYW50KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRhdGNCdG4ub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKCEgJGZvcm1bMF0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICAgICAgJGZvcm1bMF0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRQcm9kdWN0VG9DYXJ0KGV2ZW50LCAkZm9ybVswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRidXlOb3dCdG4ub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKCEgJGZvcm1bMF0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICAgICAgJGZvcm1bMF0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idXlOb3dCdXR0b24oZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgcHJvZHVjdCBhdHRyaWJ1dGVzLiBBbHNvIHVwZGF0ZSB0aGUgaW5pdGlhbCB2aWV3IGluIGNhc2UgaXRlbXMgYXJlIG9vc1xuICAgICAgICAvLyBvciBoYXZlIGRlZmF1bHQgdmFyaWFudCBwcm9wZXJ0aWVzIHRoYXQgY2hhbmdlIHRoZSB2aWV3XG4gICAgICAgIGlmICgoXy5pc0VtcHR5KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSkgfHwgaGFzRGVmYXVsdE9wdGlvbnMpICYmIGhhc09wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0SWQgPSAkKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nLCAkZm9ybSkudmFsKCk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UoJHByb2R1Y3RJZCwgJGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoYXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChoYXNEZWZhdWx0T3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoYXR0cmlidXRlc0RhdGEsIGF0dHJpYnV0ZXNDb250ZW50KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuc2hvdygpO1xuXG4gICAgICAgIHRoaXMucHJldmlld01vZGFsID0gbW9kYWxGYWN0b3J5KCcjcHJldmlld01vZGFsJylbMF07XG4gICAgICAgIHRoaXMucXVpY2t2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNtb2RhbCcpWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5NjcyOTkyL2FqYXgtcmVxdWVzdC1mYWlscy13aGVuLXNlbmRpbmctZm9ybWRhdGEtaW5jbHVkaW5nLWVtcHR5LWZpbGUtaW5wdXQtaW4tc2FmYXJpXG4gICAgICogU2FmYXJpIGJyb3dzZXIgd2l0aCBqcXVlcnkgMy4zLjEgaGFzIGFuIGlzc3VlIHVwbG9hZGluZyBlbXB0eSBmaWxlIHBhcmFtZXRlcnMuIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyBhbnkgZW1wdHkgZmlsZXMgZnJvbSB0aGUgZm9ybSBwYXJhbXNcbiAgICAgKiBAcGFyYW0gZm9ybURhdGE6IEZvcm1EYXRhIG9iamVjdFxuICAgICAqIEByZXR1cm5zIEZvcm1EYXRhIG9iamVjdFxuICAgICAqL1xuICAgIGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShmb3JtRGF0YSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIGZvcm1EYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEZpbGUgJiYgIXZhbC5uYW1lICYmICF2YWwuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3JtRGF0YTtcbiAgICB9XG5cbiAgICBzZXRQcm9kdWN0VmFyaWFudCgpIHtcbiAgICAgICAgY29uc3QgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyA9IFtdO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XG5cbiAgICAgICAgJC5lYWNoKCQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25MYWJlbCA9IHZhbHVlLmNoaWxkcmVuWzBdLmlubmVyVGV4dDtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvblRpdGxlID0gb3B0aW9uTGFiZWwuc3BsaXQoJzonKVswXS50cmltKCk7XG4gICAgICAgICAgICBjb25zdCByZXF1aXJlZCA9IG9wdGlvbkxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlJyk7XG5cbiAgICAgICAgICAgIGlmICgodHlwZSA9PT0gJ2lucHV0LWZpbGUnIHx8IHR5cGUgPT09ICdpbnB1dC10ZXh0JyB8fCB0eXBlID09PSAnaW5wdXQtbnVtYmVyJykgJiYgdmFsdWUucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3RleHRhcmVhJyAmJiB2YWx1ZS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlID09PSAnJyAmJiByZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NhdGlzZmllZCA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLmV2ZXJ5KChzZWxlY3QpID0+IHNlbGVjdC5zZWxlY3RlZEluZGV4ICE9PSAwKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc1NhdGlzZmllZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gQXJyYXkuZnJvbSh2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSkubWFwKCh4KSA9PiB4LnZhbHVlKS5qb2luKCctJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtkYXRlU3RyaW5nfWApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gc2VsZWN0LnNlbGVjdGVkSW5kZXg7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7c2VsZWN0Lm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0fWApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXJlY3RhbmdsZScgfHwgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHwgdHlwZSA9PT0gJ3N3YXRjaCcgfHwgdHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94JyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXJlY3RhbmdsZScgfHwgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHwgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gY2hlY2tlZC5sYWJlbHNbMF0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzd2F0Y2gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGNoZWNrZWQubGFiZWxzWzBdLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsLnRpdGxlfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06WWVzYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfTpOb2ApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHByb2R1Y3RWYXJpYW50ID0gdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5sZW5ndGggPT09IDAgPyBvcHRpb25zLnNvcnQoKS5qb2luKCcsICcpIDogJ3Vuc2F0aXNmaWVkJztcbiAgICAgICAgY29uc3QgdmlldyA9ICQoJy5wcm9kdWN0VmlldycpO1xuXG4gICAgICAgIGlmIChwcm9kdWN0VmFyaWFudCkge1xuICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnQgPSBwcm9kdWN0VmFyaWFudCA9PT0gJ3Vuc2F0aXNmaWVkJyA/ICcnIDogcHJvZHVjdFZhcmlhbnQ7XG4gICAgICAgICAgICBpZiAodmlldy5hdHRyKCdkYXRhLWV2ZW50LXR5cGUnKSkge1xuICAgICAgICAgICAgICAgIHZpZXcuYXR0cignZGF0YS1wcm9kdWN0LXZhcmlhbnQnLCBwcm9kdWN0VmFyaWFudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3ROYW1lID0gdmlldy5maW5kKCcucHJvZHVjdFZpZXctdGl0bGUnKVswXS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgLy8gSG90Zml4IHRvIHN0b3AganMgYnJlYWtpbmcgb24gcHJvZHVjdHMgd2l0aCBxdW90YXRpb24gbWFya3MgaW4gdGhlaXIgbmFtZVxuICAgICAgICAgICAgICAgIGNvbnN0IHNhbml0aXNlZE5hbWUgPSBwcm9kdWN0TmFtZS5yZXBsYWNlKC8oWydcIl0pL2csIFwiXFxcXCQxXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHF1b3Rlc1xuICAgICAgICAgICAgICAgIC8vIFVuc3VwcG9ydGVkIHN0aWxsLCBtYXliZSBsYXRlclxuICAgICAgICAgICAgICAgIC8vIGxldCBzYW5pdGlzZWROYW1lID0gQ1NTLmVzY2FwZShwcm9kdWN0TmFtZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZCA9ICQoYFtkYXRhLW5hbWU9JyR7c2FuaXRpc2VkTmFtZX0nXWApO1xuICAgICAgICAgICAgICAgIGNhcmQuYXR0cignZGF0YS1wcm9kdWN0LXZhcmlhbnQnLCBwcm9kdWN0VmFyaWFudCk7XG5cbiAgICAgICAgICAgICAgICAvLyBPbGQgY29kZVxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHByb2R1Y3ROYW1lID0gdmlldy5maW5kKCcucHJvZHVjdFZpZXctdGl0bGUnKVswXS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgY2FyZCA9ICQoYFtkYXRhLW5hbWU9XCIke3Byb2R1Y3ROYW1lfVwiXWApO1xuICAgICAgICAgICAgICAgIC8vIGNhcmQuYXR0cignZGF0YS1wcm9kdWN0LXZhcmlhbnQnLCBwcm9kdWN0VmFyaWFudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaW5jZSAkcHJvZHVjdFZpZXcgY2FuIGJlIGR5bmFtaWNhbGx5IGluc2VydGVkIHVzaW5nIHJlbmRlcl93aXRoLFxuICAgICAqIFdlIGhhdmUgdG8gcmV0cmlldmUgdGhlIHJlc3BlY3RpdmUgZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAkc2NvcGVcbiAgICAgKi9cbiAgICBnZXRWaWV3TW9kZWwoJHNjb3BlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAkcHJpY2VXaXRoVGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICAkcHJpY2VXaXRob3V0VGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICBycnBXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcnJwLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnJwV2l0aG91dFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ycnAtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRob3V0VGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlU2F2ZWQ6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucHJpY2Utc2VjdGlvbi0tc2F2aW5nJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS1zYXZlZF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlTm93TGFiZWw6IHtcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLW5vdy1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VMYWJlbDoge1xuICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2UtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICR3ZWlnaHQ6ICQoJy5wcm9kdWN0Vmlldy1pbmZvIFtkYXRhLXByb2R1Y3Qtd2VpZ2h0XScsICRzY29wZSksXG4gICAgICAgICAgICAkaW5jcmVtZW50czogJCgnLmZvcm0tZmllbGQtLWluY3JlbWVudHMgOmlucHV0JywgJHNjb3BlKSxcbiAgICAgICAgICAgICRhZGRUb0NhcnQ6ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJHdpc2hsaXN0VmFyaWF0aW9uOiAkKCdbZGF0YS13aXNobGlzdC1hZGRdIFtuYW1lPVwidmFyaWF0aW9uX2lkXCJdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIHN0b2NrOiB7XG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lcjogJCgnLnByb2R1Y3RWaWV3X19zdG9jaycsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJGlucHV0OiAkKCdbZGF0YS1wcm9kdWN0LXN0b2NrXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2t1OiB7XG4gICAgICAgICAgICAgICAgJGxhYmVsOiAkKCdkdC5za3UtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICR2YWx1ZTogJCgnW2RhdGEtcHJvZHVjdC1za3VdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGM6IHtcbiAgICAgICAgICAgICAgICAkbGFiZWw6ICQoJ2R0LnVwYy1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHZhbHVlOiAkKCdbZGF0YS1wcm9kdWN0LXVwY10nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHF1YW50aXR5OiB7XG4gICAgICAgICAgICAgICAgJHRleHQ6ICQoJy5pbmNyZW1lbnRUb3RhbCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJGlucHV0OiAkKCdbbmFtZT1xdHlcXFxcW1xcXFxdXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJGJ1bGtQcmljaW5nOiAkKCcucHJvZHVjdFZpZXctaW5mby1idWxrUHJpY2luZycsICRzY29wZSksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50IHdpbmRvdyBpcyBiZWluZyBydW4gaW5zaWRlIGFuIGlmcmFtZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzUnVubmluZ0luSWZyYW1lKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5zZWxmICE9PSB3aW5kb3cudG9wO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogSGFuZGxlIHByb2R1Y3Qgb3B0aW9ucyBjaGFuZ2VzXG4gICAgICpcbiAgICAgKi9cbiAgICBwcm9kdWN0T3B0aW9uc0NoYW5nZWQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGNoYW5nZWRPcHRpb24gPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGNvbnN0ICRmb3JtID0gJGNoYW5nZWRPcHRpb24ucGFyZW50cygnZm9ybScpO1xuICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nLCAkZm9ybSkudmFsKCk7XG5cbiAgICAgICAgLy8gRG8gbm90IHRyaWdnZXIgYW4gYWpheCByZXF1ZXN0IGlmIGl0J3MgYSBmaWxlIG9yIGlmIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxuICAgICAgICBpZiAoJGNoYW5nZWRPcHRpb24uYXR0cigndHlwZScpID09PSAnZmlsZScgfHwgd2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocHJvZHVjdElkLCAkZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcocHJvZHVjdEF0dHJpYnV0ZXNEYXRhLCBwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93UHJvZHVjdEltYWdlKGltYWdlKSB7XG4gICAgICAgIGlmIChfLmlzUGxhaW5PYmplY3QoaW1hZ2UpKSB7XG4gICAgICAgICAgICBjb25zdCB6b29tSW1hZ2VVcmwgPSB1dGlscy50b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQoXG4gICAgICAgICAgICAgICAgaW1hZ2UuZGF0YSxcbiAgICAgICAgICAgICAgICB7ICcxeCc6IHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnpvb21fc2l6ZSB9LFxuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgIFNob3VsZCBtYXRjaCB6b29tIHNpemUgdXNlZCBmb3IgZGF0YS16b29tLWltYWdlIGluXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC12aWV3Lmh0bWxcbiAgICAgICAgICAgICAgICAgICAgTm90ZSB0aGF0IHRoaXMgd2lsbCBvbmx5IGJlIHVzZWQgYXMgYSBmYWxsYmFjayBpbWFnZSBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBzcmNzZXRcbiAgICAgICAgICAgICAgICAgICAgQWxzbyBub3RlIHRoYXQgZ2V0U3Jjc2V0IHJldHVybnMgYSBzaW1wbGUgc3JjIHN0cmluZyB3aGVuIGV4YWN0bHkgb25lIHNpemUgaXMgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlVXJsID0gdXRpbHMudG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KFxuICAgICAgICAgICAgICAgIGltYWdlLmRhdGEsXG4gICAgICAgICAgICAgICAgeyAnMXgnOiB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3NpemUgfSxcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICBTaG91bGQgbWF0Y2ggZmFsbGJhY2sgaW1hZ2Ugc2l6ZSB1c2VkIGZvciB0aGUgbWFpbiBwcm9kdWN0IGltYWdlIGluXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC12aWV3Lmh0bWxcbiAgICAgICAgICAgICAgICAgICAgTm90ZSB0aGF0IHRoaXMgd2lsbCBvbmx5IGJlIHVzZWQgYXMgYSBmYWxsYmFjayBpbWFnZSBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBzcmNzZXRcbiAgICAgICAgICAgICAgICAgICAgQWxzbyBub3RlIHRoYXQgZ2V0U3Jjc2V0IHJldHVybnMgYSBzaW1wbGUgc3JjIHN0cmluZyB3aGVuIGV4YWN0bHkgb25lIHNpemUgaXMgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlU3Jjc2V0ID0gdXRpbHMudG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KGltYWdlLmRhdGEpO1xuXG4gICAgICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS5zZXRBbHRlcm5hdGVJbWFnZSh7XG4gICAgICAgICAgICAgICAgbWFpbkltYWdlVXJsLFxuICAgICAgICAgICAgICAgIHpvb21JbWFnZVVybCxcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5LnJlc3RvcmVJbWFnZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBIYW5kbGUgYWN0aW9uIHdoZW4gdGhlIHNob3BwZXIgY2xpY2tzIG9uICsgLyAtIGZvciBxdWFudGl0eVxuICAgICAqXG4gICAgICovXG4gICAgbGlzdGVuUXVhbnRpdHlDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdjbGljaycsICdbZGF0YS1xdWFudGl0eS1jaGFuZ2VdIGJ1dHRvbicsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9IHZpZXdNb2RlbC5xdWFudGl0eS4kaW5wdXQ7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eU1pbiA9IHBhcnNlSW50KCRpbnB1dC5kYXRhKCdxdWFudGl0eS1taW4nKSwgMTApO1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlNYXggPSBwYXJzZUludCgkaW5wdXQuZGF0YSgncXVhbnRpdHktbWF4JyksIDEwKTtcblxuICAgICAgICAgICAgbGV0IHF0eSA9IHBhcnNlSW50KCRpbnB1dC52YWwoKSwgMTApO1xuXG4gICAgICAgICAgICAvLyBJZiBhY3Rpb24gaXMgaW5jcmVtZW50aW5nXG4gICAgICAgICAgICBpZiAoJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBxdWFudGl0eSBtYXggb3B0aW9uIGlzIHNldFxuICAgICAgICAgICAgICAgIGlmIChxdWFudGl0eU1heCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgcXVhbnRpdHkgZG9lcyBub3QgZXhjZWVkIG1heFxuICAgICAgICAgICAgICAgICAgICBpZiAoKHF0eSArIDEpIDw9IHF1YW50aXR5TWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdHkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHF0eSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocXR5ID4gMSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHF1YW50aXR5IG1pbiBvcHRpb24gaXMgc2V0XG4gICAgICAgICAgICAgICAgaWYgKHF1YW50aXR5TWluID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBxdWFudGl0eSBkb2VzIG5vdCBmYWxsIGJlbG93IG1pblxuICAgICAgICAgICAgICAgICAgICBpZiAoKHF0eSAtIDEpID49IHF1YW50aXR5TWluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdHktLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHF0eS0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdXBkYXRlIGhpZGRlbiBpbnB1dFxuICAgICAgICAgICAgdmlld01vZGVsLnF1YW50aXR5LiRpbnB1dC52YWwocXR5KTtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0ZXh0XG4gICAgICAgICAgICB2aWV3TW9kZWwucXVhbnRpdHkuJHRleHQudGV4dChxdHkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBidXlOb3dCdXR0b24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgJGF0Y0FjdGlvbiA9ICQoJyNhdGMtZm9ybS1hY3Rpb24nKTtcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcblxuICAgICAgICAkYXRjQWN0aW9uLnZhbCgnYnV5Jyk7XG5cbiAgICAgICAgJGZvcm0uc3VibWl0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBBZGQgYSBwcm9kdWN0IHRvIGNhcnRcbiAgICAgKlxuICAgICAqL1xuICAgIGFkZFByb2R1Y3RUb0NhcnQoZXZlbnQsIGZvcm0pIHtcbiAgICAgICAgY29uc3QgJGFkZFRvQ2FydEJ0biA9ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnLCAkKGV2ZW50LnRhcmdldCkpO1xuICAgICAgICBjb25zdCBvcmlnaW5hbEJ0blZhbCA9ICRhZGRUb0NhcnRCdG4udmFsKCk7XG4gICAgICAgIGNvbnN0IHdhaXRNZXNzYWdlID0gJGFkZFRvQ2FydEJ0bi5kYXRhKCd3YWl0TWVzc2FnZScpO1xuXG4gICAgICAgIGNvbnN0IHF0eUlucHV0ID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5mb3JtJykuZmluZCgnLmZvcm0taW5wdXQtLWluY3JlbWVudFRvdGFsJykgfHwgMTtcbiAgICAgICAgY29uc3QgcXR5TWluID0gcGFyc2VJbnQocXR5SW5wdXQuZGF0YSgncXVhbnRpdHktbWluJyksIDEwKSB8fCBudWxsO1xuICAgICAgICBjb25zdCBxdHlNYXggPSBwYXJzZUludChxdHlJbnB1dC5kYXRhKCdxdWFudGl0eS1tYXgnKSwgMTApIHx8IG51bGw7XG4gICAgICAgIGNvbnN0IG1pbkVyciA9IHF0eUlucHV0LmRhdGEoJ3F1YW50aXR5LW1pbi1lcnJvcicpIHx8IG51bGw7XG4gICAgICAgIGNvbnN0IG1heEVyciA9IHF0eUlucHV0LmRhdGEoJ3F1YW50aXR5LW1heC1lcnJvcicpIHx8IG51bGw7XG4gICAgICAgIGNvbnN0IG5ld1F0eSA9IHBhcnNlSW50KE51bWJlcihxdHlJbnB1dC52YWwoKSksIDEwKSB8fCBudWxsO1xuXG4gICAgICAgIGNvbnN0ICRhdGNBY3Rpb24gPSAkKCcjYXRjLWZvcm0tYWN0aW9uJyk7XG4gICAgICAgICRhdGNBY3Rpb24udmFsKCdhZGQnKTtcblxuICAgICAgICAvLyBEbyBub3QgZG8gQUpBWCBpZiBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxuICAgICAgICBpZiAod2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICRhZGRUb0NhcnRCdG5cbiAgICAgICAgICAgIC52YWwod2FpdE1lc3NhZ2UpXG4gICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcblxuICAgICAgICAvLyBEb2VzIG5vdCBxdWFsaXR5IGZvciBtaW4vbWF4IHF1YW50aXR5XG4gICAgICAgIGlmIChuZXdRdHkgPCBxdHlNaW4pIHtcbiAgICAgICAgICAgICRhZGRUb0NhcnRCdG5cbiAgICAgICAgICAgICAgICAudmFsKG9yaWdpbmFsQnRuVmFsKVxuICAgICAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogbWluRXJyLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICB9KS5jYXRjaChzd2FsLm5vb3ApO1xuICAgICAgICB9IGVsc2UgaWYgKHF0eU1heCA+IDAgJiYgbmV3UXR5ID4gcXR5TWF4KSB7XG4gICAgICAgICAgICAkYWRkVG9DYXJ0QnRuXG4gICAgICAgICAgICAgICAgLnZhbChvcmlnaW5hbEJ0blZhbClcbiAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgIHRleHQ6IG1heEVycixcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgfSkuY2F0Y2goc3dhbC5ub29wKTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdRdHkgPCAwIHx8IE51bWJlci5pc05hTihuZXdRdHkpKSB7XG4gICAgICAgICAgICAkYWRkVG9DYXJ0QnRuXG4gICAgICAgICAgICAgICAgLnZhbChvcmlnaW5hbEJ0blZhbClcbiAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGludmFsaWRFbnRyeSA9IHF0eUlucHV0LnZhbCgpO1xuICAgICAgICAgICAgcXR5SW5wdXQudmFsKHF0eU1pbik7XG5cbiAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgIHRleHQ6IGAke2ludmFsaWRFbnRyeX0gaXMgbm90IGEgdmFsaWQgZW50cnlgLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChzd2FsLm5vb3ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBpdGVtIHRvIGNhcnRcbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1BZGQodGhpcy5maWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0obmV3IEZvcm1EYXRhKGZvcm0pKSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnIgfHwgcmVzcG9uc2UuZGF0YS5lcnJvcjtcblxuICAgICAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgICAgICAgICAudmFsKG9yaWdpbmFsQnRuVmFsKVxuICAgICAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBHdWFyZCBzdGF0ZW1lbnRcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0cmlwIHRoZSBIVE1MIGZyb20gdGhlIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgICAgIHRtcC5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5xdWlja3ZpZXdNb2RhbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1aWNrdmlld01vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gT3BlbiBwcmV2aWV3IG1vZGFsIGFuZCB1cGRhdGUgY29udGVudFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByZXZpZXdNb2RhbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250ZXh0LmFkZFRvQ2FydE1vZGUgPT09ICdwb3B1cCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLm9wZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FydENvbnRlbnQodGhpcy5wcmV2aWV3TW9kYWwsIHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmlkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgbm8gbW9kYWwsIHJlZGlyZWN0IHRvIHRoZSBjYXJ0IHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvKHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmNhcnRfdXJsIHx8IHRoaXMuY29udGV4dC51cmxzLmNhcnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGNhcnQgY29udGVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjYXJ0SXRlbUlkXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25Db21wbGV0ZVxuICAgICAqL1xuICAgIGdldENhcnRDb250ZW50KGNhcnRJdGVtSWQsIG9uQ29tcGxldGUpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9wcmV2aWV3JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIHN1Z2dlc3Q6IGNhcnRJdGVtSWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgY2FydDoge1xuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q29udGVudChvcHRpb25zLCBvbkNvbXBsZXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWRpcmVjdCB0byB1cmxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICByZWRpcmVjdFRvKHVybCkge1xuICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmdJbklmcmFtZSgpICYmICF3aW5kb3cuaWZyYW1lU2RrKSB7XG4gICAgICAgICAgICB3aW5kb3cudG9wLmxvY2F0aW9uID0gdXJsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdXJsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGNhcnQgY29udGVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtNb2RhbH0gbW9kYWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2FydEl0ZW1JZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ29tcGxldGVcbiAgICAgKi9cbiAgICB1cGRhdGVDYXJ0Q29udGVudChtb2RhbCwgY2FydEl0ZW1JZCwgb25Db21wbGV0ZSkge1xuICAgICAgICBjb25zdCAkc2lkZUNhcnQgPSAkKCcuc2lkZS1jYXJ0LWNvbnRlbnQnKTtcblxuICAgICAgICBpZiAoJHNpZGVDYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCAkc2lkZUNhcnREZXRhaWxzID0gJCgnLnNpZGUtY2FydC1kZXRhaWxzJyk7XG4gICAgICAgICAgICBjb25zdCAkc2lkZUNhcnRBY3Rpb25zID0gJCgnLnNpZGUtY2FydC1hY3Rpb25zJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ2YvYjJiL3NpZGUtY2FydC1jb250ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsczogJ2YvYjJiL3NpZGUtY2FydC1kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogJ2YvYjJiL3NpZGUtY2FydC1hY3Rpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgY291bnRlcjogJ2YvY2FydC9pdGVtLWNvdW50JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q29udGVudChvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICRzaWRlQ2FydC5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICRzaWRlQ2FydERldGFpbHMuaHRtbChyZXNwb25zZS5kZXRhaWxzKTtcbiAgICAgICAgICAgICAgICAkc2lkZUNhcnRBY3Rpb25zLmh0bWwocmVzcG9uc2UuYWN0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCByZXNwb25zZS5jb3VudGVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nZXRDYXJ0Q29udGVudChjYXJ0SXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZXh0LmFkZFRvQ2FydE1vZGUgPT09ICdkcm9wZG93bicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDYXJ0UHJldmlldygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgY2FydCBjb3VudGVyXG4gICAgICAgICAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgICAgIGNvbnN0ICRjYXJ0UXVhbnRpdHkgPSAkKCdbZGF0YS1jYXJ0LXF1YW50aXR5XScsIG1vZGFsLiRjb250ZW50KTtcbiAgICAgICAgICAgIGNvbnN0ICRjYXJ0Q291bnRlciA9ICQoJy5uYXZVc2VyLWFjdGlvbiAuY2FydC1jb3VudCcpO1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSAkY2FydFF1YW50aXR5LmRhdGEoJ2NhcnRRdWFudGl0eScpIHx8IDA7XG5cbiAgICAgICAgICAgICRjYXJ0Q291bnRlci5hZGRDbGFzcygnY2FydC1jb3VudC0tcG9zaXRpdmUnKTtcbiAgICAgICAgICAgICRib2R5LnRyaWdnZXIoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgcXVhbnRpdHkpO1xuXG4gICAgICAgICAgICBpZiAob25Db21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIG9uQ29tcGxldGUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93Q2FydFByZXZpZXcoKSB7XG4gICAgICAgIGNvbnN0IGxvYWRpbmdDbGFzcyA9ICdpcy1sb2FkaW5nJztcbiAgICAgICAgY29uc3QgJGNhcnREcm9wZG93biA9ICQoJyNjYXJ0LXByZXZpZXctZHJvcGRvd24nKTtcbiAgICAgICAgY29uc3QgJGNhcnRMb2FkaW5nID0gJCgnPGRpdiBjbGFzcz1cImxvYWRpbmdPdmVybGF5XCI+PC9kaXY+Jyk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2NvbW1vbi9jYXJ0LXByZXZpZXcnLFxuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIGhpZGVDYXJ0UHJldmlldygpIHtcbiAgICAgICAgICAgICRjYXJ0RHJvcGRvd25cbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2NhcnRQcmV2aWV3LWlzT3BlbiBpcy1vcGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignc3R5bGUnKVxuICAgICAgICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAnLTk5OTk5cHgnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVkaXJlY3QgdG8gZnVsbCBjYXJ0IHBhZ2VcbiAgICAgICAgLy9cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ccm93c2VyX2RldGVjdGlvbl91c2luZ190aGVfdXNlcl9hZ2VudFxuICAgICAgICAvLyBJbiBzdW1tYXJ5LCB3ZSByZWNvbW1lbmQgbG9va2luZyBmb3IgdGhlIHN0cmluZyAnTW9iaScgYW55d2hlcmUgaW4gdGhlIFVzZXIgQWdlbnQgdG8gZGV0ZWN0IGEgbW9iaWxlIGRldmljZS5cbiAgICAgICAgaWYgKC9Nb2JpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIH1cblxuICAgICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICRjYXJ0RHJvcGRvd25cbiAgICAgICAgICAgIC5hZGRDbGFzcyhsb2FkaW5nQ2xhc3MpXG4gICAgICAgICAgICAuaHRtbCgkY2FydExvYWRpbmcpO1xuICAgICAgICAkY2FydExvYWRpbmdcbiAgICAgICAgICAgIC5zaG93KCk7XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q29udGVudChvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgJGNhcnREcm9wZG93blxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhsb2FkaW5nQ2xhc3MpXG4gICAgICAgICAgICAgICAgLmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAgICAgJGNhcnRMb2FkaW5nXG4gICAgICAgICAgICAgICAgLmhpZGUoKTtcbiAgICAgICAgICAgICRjYXJ0RHJvcGRvd25cbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2NhcnRQcmV2aWV3LWlzT3BlbiBpcy1vcGVuJylcbiAgICAgICAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogJ2luaGVyaXQnLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogJzIwcHgnLFxuICAgICAgICAgICAgICAgICAgICB0b3A6ICc0OXB4JyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zbGlkZURvd24oJ2Zhc3QnKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZUNhcnRQcmV2aWV3LCAzMDAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBhbiBtZXNzYWdlIGJveCBpZiBhIG1lc3NhZ2UgaXMgcGFzc2VkXG4gICAgICogSGlkZSB0aGUgYm94IGlmIHRoZSBtZXNzYWdlIGlzIGVtcHR5XG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBtZXNzYWdlXG4gICAgICovXG4gICAgc2hvd01lc3NhZ2VCb3gobWVzc2FnZSkge1xuICAgICAgICBjb25zdCAkbWVzc2FnZUJveCA9ICQoJy5wcm9kdWN0QXR0cmlidXRlcy1tZXNzYWdlJyk7XG5cbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICQoJy5hbGVydEJveC1tZXNzYWdlJywgJG1lc3NhZ2VCb3gpLnRleHQobWVzc2FnZSk7XG4gICAgICAgICAgICAkbWVzc2FnZUJveC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbWVzc2FnZUJveC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIHRoZSBwcmljaW5nIGVsZW1lbnRzIHRoYXQgd2lsbCBzaG93IHVwIG9ubHkgd2hlbiB0aGUgcHJpY2UgZXhpc3RzIGluIEFQSVxuICAgICAqIEBwYXJhbSB2aWV3TW9kZWxcbiAgICAgKi9cbiAgICBjbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpIHtcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgdmlldyBvZiBwcmljZSwgbWVzc2FnZXMsIFNLVSBhbmQgc3RvY2sgb3B0aW9ucyB3aGVuIGEgcHJvZHVjdCBvcHRpb24gY2hhbmdlc1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXG4gICAgICovXG4gICAgdXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgcHJpY2UpIHtcbiAgICAgICAgdGhpcy5jbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpO1xuXG4gICAgICAgIGlmIChwcmljZS53aXRoX3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhUYXguaHRtbChwcmljZS53aXRoX3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLndpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aG91dFRheC5odG1sKHByaWNlLndpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uuc2F2ZWQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJHNwYW4uaHRtbChwcmljZS5zYXZlZC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSB2aWV3IG9mIHByaWNlLCBtZXNzYWdlcywgU0tVIGFuZCBzdG9jayBvcHRpb25zIHdoZW4gYSBwcm9kdWN0IG9wdGlvbiBjaGFuZ2VzXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVWaWV3KGRhdGEsIGNvbnRlbnQgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcblxuICAgICAgICB0aGlzLnNob3dNZXNzYWdlQm94KGRhdGEuc3RvY2tfbWVzc2FnZSB8fCBkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSk7XG5cbiAgICAgICAgaWYgKF8uaXNPYmplY3QoZGF0YS5wcmljZSkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgZGF0YS5wcmljZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5pc09iamVjdChkYXRhLndlaWdodCkpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2VpZ2h0Lmh0bWwoZGF0YS53ZWlnaHQuZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB2YXJpYXRpb25faWQgaWYgaXQgZXhpc3RzIGZvciBhZGRpbmcgdG8gd2lzaGxpc3RcbiAgICAgICAgaWYgKGRhdGEudmFyaWFudElkKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHdpc2hsaXN0VmFyaWF0aW9uLnZhbChkYXRhLnZhcmlhbnRJZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBTS1UgaXMgYXZhaWxhYmxlXG4gICAgICAgIGlmIChkYXRhLnNrdSkge1xuICAgICAgICAgICAgdmlld01vZGVsLnNrdS4kdmFsdWUudGV4dChkYXRhLnNrdSk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiRsYWJlbC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiRsYWJlbC5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiR2YWx1ZS50ZXh0KCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIFVQQyBpcyBhdmFpbGFibGVcbiAgICAgICAgaWYgKGRhdGEudXBjKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwudXBjLiR2YWx1ZS50ZXh0KGRhdGEudXBjKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJGxhYmVsLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJGxhYmVsLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJHZhbHVlLnRleHQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgc3RvY2sgdmlldyBpcyBvbiAoQ1Agc2V0dGluZ3MpXG4gICAgICAgIGlmICh2aWV3TW9kZWwuc3RvY2suJGNvbnRhaW5lci5sZW5ndGggJiYgXy5pc051bWJlcihkYXRhLnN0b2NrKSkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHN0b2NrIGNvbnRhaW5lciBpcyBoaWRkZW4sIHNob3dcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG5cbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kaW5wdXQudGV4dChkYXRhLnN0b2NrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGlucHV0LnRleHQoZGF0YS5zdG9jayk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGRhdGEpO1xuXG4gICAgICAgIC8vIElmIEJ1bGsgUHJpY2luZyByZW5kZXJlZCBIVE1MIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS5idWxrX2Rpc2NvdW50X3JhdGVzICYmIGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYnVsa1ByaWNpbmcuaHRtbChjb250ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKGRhdGEuYnVsa19kaXNjb3VudF9yYXRlcykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGJ1bGtQcmljaW5nLmh0bWwoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRkVG9DYXJ0V3JhcHBlciA9ICQoJyNhZGQtdG8tY2FydC13cmFwcGVyJyk7XG5cbiAgICAgICAgaWYgKGFkZFRvQ2FydFdyYXBwZXIuaXMoJzpoaWRkZW4nKSAmJiBkYXRhLnB1cmNoYXNhYmxlKSB7XG4gICAgICAgICAgICBhZGRUb0NhcnRXcmFwcGVyLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGRhdGEpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xuICAgICAgICAgICAgdmlld01vZGVsLiRhZGRUb0NhcnQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kaW5jcmVtZW50cy5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ2Zvcm0tbGFiZWwtLXN0b2NrJykuYWRkQ2xhc3MoJ2Zvcm0tbGFiZWwtLW91dC1vZi1zdG9jaycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLiRhZGRUb0NhcnQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGluY3JlbWVudHMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGNvbnRhaW5lci5yZW1vdmVDbGFzcygnZm9ybS1sYWJlbC0tb3V0LW9mLXN0b2NrJykuYWRkQ2xhc3MoJ2Zvcm0tbGFiZWwtLXN0b2NrJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIG9yIG1hcmsgYXMgdW5hdmFpbGFibGUgb3V0IG9mIHN0b2NrIGF0dHJpYnV0ZXMgaWYgZW5hYmxlZFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXG4gICAgICovXG4gICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSkge1xuICAgICAgICBjb25zdCBiZWhhdmlvciA9IGRhdGEub3V0X29mX3N0b2NrX2JlaGF2aW9yO1xuICAgICAgICBjb25zdCBpblN0b2NrSWRzID0gZGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzO1xuICAgICAgICBjb25zdCBvdXRPZlN0b2NrTWVzc2FnZSA9IGAgKCR7ZGF0YS5vdXRfb2Zfc3RvY2tfbWVzc2FnZX0pYDtcblxuICAgICAgICB0aGlzLnNob3dQcm9kdWN0SW1hZ2UoZGF0YS5pbWFnZSk7XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yICE9PSAnaGlkZV9vcHRpb24nICYmIGJlaGF2aW9yICE9PSAnbGFiZWxfb3B0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWVdJywgdGhpcy4kc2NvcGUpLmVhY2goKGksIGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGF0dHJpYnV0ZSA9ICQoYXR0cmlidXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJJZCA9IHBhcnNlSW50KCRhdHRyaWJ1dGUuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZVZhbHVlJyksIDEwKTtcblxuXG4gICAgICAgICAgICBpZiAoaW5TdG9ja0lkcy5pbmRleE9mKGF0dHJJZCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuYWRkQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBjb25zdCAkc2VsZWN0ID0gJGF0dHJpYnV0ZS5wYXJlbnQoKTtcblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUudG9nZ2xlT3B0aW9uKGZhbHNlKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBhdHRyaWJ1dGUgaXMgdGhlIHNlbGVjdGVkIG9wdGlvbiBpbiBhIHNlbGVjdCBkcm9wZG93biwgc2VsZWN0IHRoZSBmaXJzdCBvcHRpb24gKE1FUkMtNjM5KVxuICAgICAgICAgICAgaWYgKCRzZWxlY3QudmFsKCkgPT09ICRhdHRyaWJ1dGUuYXR0cigndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgICRzZWxlY3RbMF0uc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpICsgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUucmVtb3ZlQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24odHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5odG1sKCRhdHRyaWJ1dGUuaHRtbCgpLnJlcGxhY2Uob3V0T2ZTdG9ja01lc3NhZ2UsICcnKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpIHtcbiAgICAgICAgY29uc3QgJHBhcmVudCA9ICRhdHRyaWJ1dGUuY2xvc2VzdCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJyk7XG5cbiAgICAgICAgcmV0dXJuICRwYXJlbnQgPyAkcGFyZW50LmRhdGEoJ3Byb2R1Y3RBdHRyaWJ1dGUnKSA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxsb3cgcmFkaW8gYnV0dG9ucyB0byBnZXQgZGVzZWxlY3RlZFxuICAgICAqL1xuICAgIGluaXRSYWRpb0F0dHJpYnV0ZXMoKSB7XG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXSBpbnB1dFt0eXBlPVwicmFkaW9cIl0nLCB0aGlzLiRzY29wZSkuZWFjaCgoaSwgcmFkaW8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRyYWRpbyA9ICQocmFkaW8pO1xuXG4gICAgICAgICAgICAvLyBPbmx5IGJpbmQgdG8gY2xpY2sgb25jZVxuICAgICAgICAgICAgaWYgKCRyYWRpby5hdHRyKCdkYXRhLXN0YXRlJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICRyYWRpby5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkcmFkaW8uZGF0YSgnc3RhdGUnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8uZGF0YSgnc3RhdGUnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby5kYXRhKCdzdGF0ZScsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0UmFkaW9BdHRyaWJ1dGVzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRyYWRpby5hdHRyKCdkYXRhLXN0YXRlJywgJHJhZGlvLnByb3AoJ2NoZWNrZWQnKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGZvciBmcmFnbWVudCBpZGVudGlmaWVyIGluIFVSTCByZXF1ZXN0aW5nIGEgc3BlY2lmaWMgdGFiXG4gICAgICovXG4gICAgZ2V0VGFiUmVxdWVzdHMoKSB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiB3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCcjdGFiLScpID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCAkYWN0aXZlVGFiID0gJCgnLnRhYnMnKS5oYXMoYFtocmVmPScke3dpbmRvdy5sb2NhdGlvbi5oYXNofSddYCk7XG4gICAgICAgICAgICBjb25zdCAkdGFiQ29udGVudCA9ICQoYCR7d2luZG93LmxvY2F0aW9uLmhhc2h9YCk7XG5cbiAgICAgICAgICAgIGlmICgkYWN0aXZlVGFiLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAkYWN0aXZlVGFiLmZpbmQoJy50YWInKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5oYXMoYFtocmVmPScke3dpbmRvdy5sb2NhdGlvbi5oYXNofSddYClcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICR0YWJDb250ZW50LmFkZENsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0ICRzcmMgPSAkKCcuc2hvdy1zZWxlY3RlZC1vcHRpb24gaW5wdXQnKTtcbiAgICBjb25zdCAkc2VsZWN0ZWQgPSAkKCcuc2hvdy1zZWxlY3RlZC1vcHRpb24gaW5wdXRbY2hlY2tlZF0nKTtcbiAgICBsZXQgJHNlbGVjdGVkT3B0aW9uTGFiZWw7XG4gICAgbGV0ICRzZWxlY3RlZE9wdGlvbjtcblxuICAgIGZ1bmN0aW9uIGNoYW5nZUxhYmVsKCkge1xuICAgICAgICAkc2VsZWN0ZWRPcHRpb25MYWJlbCA9ICQodGhpcykuc2libGluZ3MoKS5jaGlsZHJlbignc3BhbltkYXRhLW9wdGlvbi12YWx1ZV0nKTtcbiAgICAgICAgJHNlbGVjdGVkT3B0aW9uID0gJCh0aGlzKS5hdHRyKCdkYXRhLW9wdGlvbi1sYWJlbCcpO1xuXG4gICAgICAgICRzZWxlY3RlZE9wdGlvbkxhYmVsLnRleHQoJHNlbGVjdGVkT3B0aW9uKTtcbiAgICB9XG5cbiAgICAkc2VsZWN0ZWQuZWFjaChjaGFuZ2VMYWJlbCk7XG4gICAgJHNyYy5vbignY2xpY2snLCBjaGFuZ2VMYWJlbCk7XG59XG4iLCIvKlxuIEltcG9ydCBhbGwgcHJvZHVjdCBzcGVjaWZpYyBqc1xuICovXG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IFJldmlldyBmcm9tICcuL3Byb2R1Y3QvcmV2aWV3cyc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMnO1xuaW1wb3J0IHZpZGVvR2FsbGVyeSBmcm9tICcuL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeSc7XG5pbXBvcnQgeyBjbGFzc2lmeUZvcm0gfSBmcm9tICcuL2NvbW1vbi9mb3JtLXV0aWxzJztcbmltcG9ydCBzZWxlY3RlZE9wdGlvbiBmcm9tICcuL2Yvc2VsZWN0ZWQtb3B0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB0aGlzLiRyZXZpZXdMaW5rID0gJCgnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nKTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICAvLyBMaXN0ZW4gZm9yIGZvdW5kYXRpb24gbW9kYWwgY2xvc2UgZXZlbnRzIHRvIHNhbml0aXplIFVSTCBhZnRlciByZXZpZXcuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbG9zZS5mbmR0bi5yZXZlYWwnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI3dyaXRlX3JldmlldycpICE9PSAtMSAmJiB0eXBlb2Ygd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIGRvY3VtZW50LnRpdGxlLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdmFsaWRhdG9yO1xuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscyA9IG5ldyBQcm9kdWN0RGV0YWlscygkKCcucHJvZHVjdFZpZXcnKSwgdGhpcy5jb250ZXh0LCB3aW5kb3cuQkNEYXRhLnByb2R1Y3RfYXR0cmlidXRlcyk7XG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcblxuICAgICAgICB2aWRlb0dhbGxlcnkoKTtcblxuICAgICAgICBjb25zdCAkcmV2aWV3Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLndyaXRlUmV2aWV3LWZvcm0nKTtcbiAgICAgICAgY29uc3QgcmV2aWV3ID0gbmV3IFJldmlldygkcmV2aWV3Rm9ybSk7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScsICgpID0+IHtcbiAgICAgICAgICAgIHZhbGlkYXRvciA9IHJldmlldy5yZWdpc3RlclZhbGlkYXRpb24odGhpcy5jb250ZXh0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHJldmlld0Zvcm0ub24oJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5lbmFibGVTZWxlY3RlZE9wdGlvbkxhYmVsKSB7XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgU3RpY2t5ID0gcmVxdWlyZSgnc3RpY2t5LWpzJyk7XG4gICAgICAgIGNvbnN0IHN0aWNreSA9IG5ldyBTdGlja3koJy5zdGlja3ktcHJvZHVjdCcpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbiAgICAgICAgdGhpcy5wcm9kdWN0UmV2aWV3SGFuZGxlcigpO1xuICAgIH1cblxuICAgIHByb2R1Y3RSZXZpZXdIYW5kbGVyKCkge1xuICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI3dyaXRlX3JldmlldycpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy4kcmV2aWV3TGluay50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0ICdlYXN5em9vbSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUdhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yKCRnYWxsZXJ5KSB7XG4gICAgICAgIHRoaXMuJG1haW5JbWFnZSA9ICRnYWxsZXJ5LmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktbWFpbl0nKTtcbiAgICAgICAgdGhpcy4kc2VsZWN0YWJsZUltYWdlcyA9ICRnYWxsZXJ5LmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbV0nKTtcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSB7fTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5zZXRJbWFnZVpvb20oKTtcbiAgICB9XG5cbiAgICBzZXRNYWluSW1hZ2UoaW1nT2JqKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEltYWdlID0gXy5jbG9uZShpbWdPYmopO1xuXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIoKTtcbiAgICAgICAgdGhpcy5zd2FwTWFpbkltYWdlKCk7XG4gICAgfVxuXG4gICAgc2V0QWx0ZXJuYXRlSW1hZ2UoaW1nT2JqKSB7XG4gICAgICAgIGlmICghdGhpcy5zYXZlZEltYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVkSW1hZ2UgPSB7XG4gICAgICAgICAgICAgICAgbWFpbkltYWdlVXJsOiB0aGlzLiRtYWluSW1hZ2UuZmluZCgnaW1nJykuYXR0cignc3JjJyksXG4gICAgICAgICAgICAgICAgem9vbUltYWdlVXJsOiB0aGlzLiRtYWluSW1hZ2UuYXR0cignZGF0YS16b29tLWltYWdlJyksXG4gICAgICAgICAgICAgICAgbWFpbkltYWdlU3Jjc2V0OiB0aGlzLiRtYWluSW1hZ2UuZmluZCgnaW1nJykuYXR0cignc3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgJHNlbGVjdGVkVGh1bWI6IHRoaXMuY3VycmVudEltYWdlLiRzZWxlY3RlZFRodW1iLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldE1haW5JbWFnZShpbWdPYmopO1xuICAgIH1cblxuICAgIHJlc3RvcmVJbWFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2F2ZWRJbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UodGhpcy5zYXZlZEltYWdlKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNhdmVkSW1hZ2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3ROZXdJbWFnZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgaW1nT2JqID0ge1xuICAgICAgICAgICAgbWFpbkltYWdlVXJsOiAkdGFyZ2V0LmF0dHIoJ2RhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2UtdXJsJyksXG4gICAgICAgICAgICB6b29tSW1hZ2VVcmw6ICR0YXJnZXQuYXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LXpvb20taW1hZ2UtdXJsJyksXG4gICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQ6ICR0YXJnZXQuYXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS1zcmNzZXQnKSxcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkdGFyZ2V0LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0TWFpbkltYWdlKGltZ09iaik7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlVGh1bWIoKSB7XG4gICAgICAgIHRoaXMuJHNlbGVjdGFibGVJbWFnZXMucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW1hZ2UuJHNlbGVjdGVkVGh1bWIpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlLiRzZWxlY3RlZFRodW1iLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN3YXBNYWluSW1hZ2UoKSB7XG4gICAgICAgIHRoaXMuZWFzeXpvb20uZGF0YSgnZWFzeVpvb20nKS5zd2FwKFxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlVXJsLFxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2Uuem9vbUltYWdlVXJsLFxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlU3Jjc2V0LFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuJG1haW5JbWFnZS5hdHRyKHtcbiAgICAgICAgICAgICdkYXRhLXpvb20taW1hZ2UnOiB0aGlzLmN1cnJlbnRJbWFnZS56b29tSW1hZ2VVcmwsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoZWNrSW1hZ2UoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9ICQoJy5wcm9kdWN0Vmlldy1pbWFnZScpLmhlaWdodCgpO1xuICAgICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9ICQoJy5wcm9kdWN0Vmlldy1pbWFnZScpLndpZHRoKCk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZWFzeXpvb20uZGF0YSgnZWFzeVpvb20nKS4kem9vbS5jb250ZXh0LmhlaWdodDtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmVhc3l6b29tLmRhdGEoJ2Vhc3lab29tJykuJHpvb20uY29udGV4dC53aWR0aDtcbiAgICAgICAgaWYgKGhlaWdodCA8IGNvbnRhaW5lckhlaWdodCB8fCB3aWR0aCA8IGNvbnRhaW5lcldpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmVhc3l6b29tLmRhdGEoJ2Vhc3lab29tJykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0SW1hZ2Vab29tKCkge1xuICAgICAgICB0aGlzLmVhc3l6b29tID0gdGhpcy4kbWFpbkltYWdlLmVhc3lab29tKHtcbiAgICAgICAgICAgIG9uU2hvdzogKCkgPT4gdGhpcy5jaGVja0ltYWdlKCksXG4gICAgICAgICAgICBlcnJvck5vdGljZTogJycsXG4gICAgICAgICAgICBsb2FkaW5nTm90aWNlOiAnJyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kc2VsZWN0YWJsZUltYWdlcy5vbignY2xpY2snLCB0aGlzLnNlbGVjdE5ld0ltYWdlLmJpbmQodGhpcykpO1xuICAgIH1cbn1cbiIsImltcG9ydCBub2QgZnJvbSAnLi4vY29tbW9uL25vZCc7XG5pbXBvcnQgeyBDb2xsYXBzaWJsZUV2ZW50cyB9IGZyb20gJy4uL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgZm9ybXMgZnJvbSAnLi4vY29tbW9uL21vZGVscy9mb3Jtcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcigkcmV2aWV3Rm9ybSkge1xuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICRyZXZpZXdGb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kcmV2aWV3c0NvbnRlbnQgPSAkKCcjcHJvZHVjdC1yZXZpZXdzJyk7XG4gICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlID0gJCgnW2RhdGEtY29sbGFwc2libGVdJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuXG4gICAgICAgIHRoaXMuaW5pdExpbmtCaW5kKCk7XG4gICAgICAgIHRoaXMuaW5qZWN0UGFnaW5hdGlvbkxpbmsoKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZVJldmlld3MoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBpbml0aWFsIHBhZ2UgbG9hZCwgdGhlIHVzZXIgY2xpY2tzIG9uIFwiKDEyIFJldmlld3MpXCIgbGlua1xuICAgICAqIFRoZSBicm93c2VyIGp1bXBzIHRvIHRoZSByZXZpZXcgcGFnZSBhbmQgc2hvdWxkIGV4cGFuZCB0aGUgcmV2aWV3cyBzZWN0aW9uXG4gICAgICovXG4gICAgaW5pdExpbmtCaW5kKCkge1xuICAgICAgICBjb25zdCAkY29udGVudCA9ICQoJyNwcm9kdWN0UmV2aWV3cy1jb250ZW50JywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuXG4gICAgICAgICQoJy5wcm9kdWN0Vmlldy1yZXZpZXdMaW5rJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCEkY29udGVudC5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kY29sbGFwc2libGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbGxhcHNlUmV2aWV3cygpIHtcbiAgICAgICAgLy8gV2UncmUgaW4gcGFnaW5hdGluZyBzdGF0ZSwgZG8gbm90IGNvbGxhcHNlXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiB3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCcjcHJvZHVjdC1yZXZpZXdzJykgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvcmNlIGNvbGxhcHNlIG9uIHBhZ2UgbG9hZFxuICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3QgSUQgaW50byB0aGUgcGFnaW5hdGlvbiBsaW5rXG4gICAgICovXG4gICAgaW5qZWN0UGFnaW5hdGlvbkxpbmsoKSB7XG4gICAgICAgIGNvbnN0ICRuZXh0TGluayA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLW5leHQgLnBhZ2luYXRpb24tbGluaycsIHRoaXMuJHJldmlld3NDb250ZW50KTtcbiAgICAgICAgY29uc3QgJHByZXZMaW5rID0gJCgnLnBhZ2luYXRpb24taXRlbS0tcHJldmlvdXMgLnBhZ2luYXRpb24tbGluaycsIHRoaXMuJHJldmlld3NDb250ZW50KTtcblxuICAgICAgICBpZiAoJG5leHRMaW5rLmxlbmd0aCkge1xuICAgICAgICAgICAgJG5leHRMaW5rLmF0dHIoJ2hyZWYnLCBgJHskbmV4dExpbmsuYXR0cignaHJlZicpfSAjcHJvZHVjdC1yZXZpZXdzYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHByZXZMaW5rLmxlbmd0aCkge1xuICAgICAgICAgICAgJHByZXZMaW5rLmF0dHIoJ2hyZWYnLCBgJHskcHJldkxpbmsuYXR0cignaHJlZicpfSAjcHJvZHVjdC1yZXZpZXdzYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlclZhbGlkYXRpb24oY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnZhbGlkYXRvci5hZGQoW3tcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZyYXRpbmdcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdSYXRpbmcsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZ0aXRsZVwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld1N1YmplY3QsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZ0ZXh0XCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3Q29tbWVudCxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cImVtYWlsXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLmVtYWlsKHZhbCk7XG4gICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdFbWFpbCxcbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcjtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBWaWRlb0dhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuJHBsYXllciA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLXBsYXllcl0nKTtcbiAgICAgICAgdGhpcy4kdmlkZW9zID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8taXRlbV0nKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7fTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgc2VsZWN0TmV3VmlkZW8oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHtcbiAgICAgICAgICAgIGlkOiAkdGFyZ2V0LmRhdGEoJ3ZpZGVvSWQnKSxcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkdGFyZ2V0LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKCk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIoKTtcbiAgICB9XG5cbiAgICBzZXRNYWluVmlkZW8oKSB7XG4gICAgICAgIHRoaXMuJHBsYXllci5hdHRyKCdzcmMnLCBgLy93d3cueW91dHViZS5jb20vZW1iZWQvJHt0aGlzLmN1cnJlbnRWaWRlby5pZH1gKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUaHVtYigpIHtcbiAgICAgICAgdGhpcy4kdmlkZW9zLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8uJHNlbGVjdGVkVGh1bWIuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5vbignY2xpY2snLCB0aGlzLnNlbGVjdE5ld1ZpZGVvLmJpbmQodGhpcykpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlkZW9HYWxsZXJ5KCkge1xuICAgIGNvbnN0IHBsdWdpbktleSA9ICd2aWRlby1nYWxsZXJ5JztcbiAgICBjb25zdCAkdmlkZW9HYWxsZXJ5ID0gJChgW2RhdGEtJHtwbHVnaW5LZXl9XWApO1xuXG4gICAgJHZpZGVvR2FsbGVyeS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCAkZWwgPSAkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpc0luaXRpYWxpemVkID0gJGVsLmRhdGEocGx1Z2luS2V5KSBpbnN0YW5jZW9mIFZpZGVvR2FsbGVyeTtcblxuICAgICAgICBpZiAoaXNJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGVsLmRhdGEocGx1Z2luS2V5LCBuZXcgVmlkZW9HYWxsZXJ5KCRlbCkpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnJldmVhbCc7XG5pbXBvcnQgQ2xpcGJvYXJkSlMgZnJvbSAnY2xpcGJvYXJkJztcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgeyBkZWZhdWx0TW9kYWwgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgZ3JpZFN3aXRjaGVyIGZyb20gJy4vZi9ncmlkLWxpc3Qtc3dpdGNoZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaXNoTGlzdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnYWNjb3VudC9hZGQtd2lzaGxpc3QnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjb25maXJtIGJveCBiZWZvcmUgZGVsZXRpbmcgYWxsIHdpc2ggbGlzdHNcbiAgICAgKi9cbiAgICB3aXNobGlzdERlbGV0ZUNvbmZpcm0oKSB7XG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtd2lzaGxpc3QtZGVsZXRlXScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1lZCA9IHdpbmRvdy5jb25maXJtKHRoaXMuY29udGV4dC53aXNobGlzdERlbGV0ZSk7XG5cbiAgICAgICAgICAgIGlmIChjb25maXJtZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJBZGRXaXNoTGlzdFZhbGlkYXRpb24oJGFkZFdpc2hsaXN0Rm9ybSkge1xuICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJy53aXNobGlzdC1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcud2lzaGxpc3QtZm9ybSBpbnB1dFtuYW1lPVwid2lzaGxpc3RuYW1lXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aCA+IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdSBtdXN0IGVudGVyIGEgd2lzaGxpc3QgbmFtZS4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgJGFkZFdpc2hsaXN0Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkV2lzaGxpc3RWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB3aXNoTGlzdEhhbmRsZXIoKSB7XG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtd2lzaGxpc3RdJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd2lzaExpc3RVcmwgPSBldmVudC5jdXJyZW50VGFyZ2V0LmhyZWY7XG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBtb2RhbC5vcGVuKCk7XG5cbiAgICAgICAgICAgIGFwaS5nZXRQYWdlKHdpc2hMaXN0VXJsLCB0aGlzLm9wdGlvbnMsIChlcnIsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RhbC51cGRhdGVDb250ZW50KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChjb250ZW50LCB7IHdyYXA6IHRydWUgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCAkd2lzaGxpc3RGb3JtID0gJCgnLndpc2hsaXN0LWZvcm0nLCBtb2RhbC4kY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQWRkV2lzaExpc3RWYWxpZGF0aW9uKCR3aXNobGlzdEZvcm0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IGNsaXBib2FyZCA9IG5ldyBDbGlwYm9hcmRKUygnLmJ1dHRvbi0tY29weScpO1xuICAgICAgICBjb25zdCAkYWRkV2lzaExpc3RGb3JtID0gJCgnLndpc2hsaXN0LWZvcm0nKTtcblxuICAgICAgICBjbGlwYm9hcmQub24oJ3N1Y2Nlc3MnLCAoKSA9PiB7XG4gICAgICAgICAgICAkKCcubGlzdC1jb3BpZWQtZmVlZGJhY2snKS50ZXh0KCdMaW5rIGNvcGllZCcpLmZhZGVJbignZmFzdCcpLmRlbGF5KDEwMDApLmZhZGVPdXQoJ2Zhc3QnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2xpcGJvYXJkLm9uKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgICAgICQoJy5saXN0LWNvcGllZC1mZWVkYmFjaycpLnRleHQoJ1ByZXNzIEN0cmwrQyB0byBjb3B5JykuZmFkZUluKCdmYXN0JykuZGVsYXkoMTAwMCkuZmFkZU91dCgnZmFzdCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBncmlkU3dpdGNoZXIodGhpcy5jb250ZXh0KTtcblxuICAgICAgICBpZiAoJGFkZFdpc2hMaXN0Rm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJBZGRXaXNoTGlzdFZhbGlkYXRpb24oJGFkZFdpc2hMaXN0Rm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndpc2hsaXN0RGVsZXRlQ29uZmlybSgpO1xuICAgICAgICB0aGlzLndpc2hMaXN0SGFuZGxlcigpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=